var ux=(i,c)=>()=>(c||i((c={exports:{}}).exports,c),c.exports);import{s as hx,u as Aa,h as hi,i as J0,n as gx,j as eA,k as Da,l as xl,p as Qh,m as mx,q as fx,_ as jn,o as pe,c as Ae,a as B,x as ft,y as ht,z as Lt,e as Xe,A as ii,b as Ge,F as mt,r as pi,t as ut,w as Nt,v as un,B as tA,C as dl,D as nA,E as L_,G as ma,H as px,I as bx,J as kx,g as wx}from"./_plugin-vue_export-helper.ee08f2d5.js";var uj=ux((fj,Dl)=>{/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof window<"u";function _x(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const it=Object.assign;function Zh(i,c){const d={};for(const h in c){const g=c[h];d[h]=bi(g)?g.map(i):i(g)}return d}const va=()=>{},bi=Array.isArray,Ax=/\/$/,vx=i=>i.replace(Ax,"");function Xh(i,c,d="/"){let h,g={},w="",k="";const y=c.indexOf("#");let b=c.indexOf("?");return y<b&&y>=0&&(b=-1),b>-1&&(h=c.slice(0,b),w=c.slice(b+1,y>-1?y:c.length),g=i(w)),y>-1&&(h=h||c.slice(0,y),k=c.slice(y,c.length)),h=Ix(h!=null?h:c,d),{fullPath:h+(w&&"?")+w+k,path:h,query:g,hash:k}}function Cx(i,c){const d=c.query?i(c.query):"";return c.path+(d&&"?")+d+(c.hash||"")}function B_(i,c){return!c||!i.toLowerCase().startsWith(c.toLowerCase())?i:i.slice(c.length)||"/"}function yx(i,c,d){const h=c.matched.length-1,g=d.matched.length-1;return h>-1&&h===g&&ds(c.matched[h],d.matched[g])&&iA(c.params,d.params)&&i(c.query)===i(d.query)&&c.hash===d.hash}function ds(i,c){return(i.aliasOf||i)===(c.aliasOf||c)}function iA(i,c){if(Object.keys(i).length!==Object.keys(c).length)return!1;for(const d in i)if(!Ex(i[d],c[d]))return!1;return!0}function Ex(i,c){return bi(i)?z_(i,c):bi(c)?z_(c,i):i===c}function z_(i,c){return bi(c)?i.length===c.length&&i.every((d,h)=>d===c[h]):i.length===1&&i[0]===c}function Ix(i,c){if(i.startsWith("/"))return i;if(!i)return c;const d=c.split("/"),h=i.split("/");let g=d.length-1,w,k;for(w=0;w<h.length;w++)if(k=h[w],k!==".")if(k==="..")g>1&&g--;else break;return d.slice(0,g).join("/")+"/"+h.slice(w-(w===h.length?1:0)).join("/")}var xa;(function(i){i.pop="pop",i.push="push"})(xa||(xa={}));var Ca;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Ca||(Ca={}));function Tx(i){if(!i)if(es){const c=document.querySelector("base");i=c&&c.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),vx(i)}const Dx=/^[^#]+#/;function xx(i,c){return i.replace(Dx,"#")+c}function Sx(i,c){const d=document.documentElement.getBoundingClientRect(),h=i.getBoundingClientRect();return{behavior:c.behavior,left:h.left-d.left-(c.left||0),top:h.top-d.top-(c.top||0)}}const Ul=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mx(i){let c;if("el"in i){const d=i.el,h=typeof d=="string"&&d.startsWith("#"),g=typeof d=="string"?h?document.getElementById(d.slice(1)):document.querySelector(d):d;if(!g)return;c=Sx(g,i)}else c=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function F_(i,c){return(history.state?history.state.position-c:-1)+i}const mg=new Map;function Px(i,c){mg.set(i,c)}function Ox(i){const c=mg.get(i);return mg.delete(i),c}let Rx=()=>location.protocol+"//"+location.host;function oA(i,c){const{pathname:d,search:h,hash:g}=c,w=i.indexOf("#");if(w>-1){let y=g.includes(i.slice(w))?i.slice(w).length:1,b=g.slice(y);return b[0]!=="/"&&(b="/"+b),B_(b,"")}return B_(d,i)+h+g}function Nx(i,c,d,h){let g=[],w=[],k=null;const y=({state:C})=>{const P=oA(i,location),R=d.value,U=c.value;let G=0;if(C){if(d.value=P,c.value=C,k&&k===R){k=null;return}G=U?C.position-U.position:0}else h(P);g.forEach(W=>{W(d.value,R,{delta:G,type:xa.pop,direction:G?G>0?Ca.forward:Ca.back:Ca.unknown})})};function b(){k=d.value}function I(C){g.push(C);const P=()=>{const R=g.indexOf(C);R>-1&&g.splice(R,1)};return w.push(P),P}function E(){const{history:C}=window;!C.state||C.replaceState(it({},C.state,{scroll:Ul()}),"")}function x(){for(const C of w)C();w=[],window.removeEventListener("popstate",y),window.removeEventListener("beforeunload",E)}return window.addEventListener("popstate",y),window.addEventListener("beforeunload",E),{pauseListeners:b,listen:I,destroy:x}}function j_(i,c,d,h=!1,g=!1){return{back:i,current:c,forward:d,replaced:h,position:window.history.length,scroll:g?Ul():null}}function Lx(i){const{history:c,location:d}=window,h={value:oA(i,d)},g={value:c.state};g.value||w(h.value,{back:null,current:h.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function w(b,I,E){const x=i.indexOf("#"),C=x>-1?(d.host&&document.querySelector("base")?i:i.slice(x))+b:Rx()+i+b;try{c[E?"replaceState":"pushState"](I,"",C),g.value=I}catch(P){console.error(P),d[E?"replace":"assign"](C)}}function k(b,I){const E=it({},c.state,j_(g.value.back,b,g.value.forward,!0),I,{position:g.value.position});w(b,E,!0),h.value=b}function y(b,I){const E=it({},g.value,c.state,{forward:b,scroll:Ul()});w(E.current,E,!0);const x=it({},j_(h.value,b,null),{position:E.position+1},I);w(b,x,!1),h.value=b}return{location:h,state:g,push:y,replace:k}}function Bx(i){i=Tx(i);const c=Lx(i),d=Nx(i,c.state,c.location,c.replace);function h(w,k=!0){k||d.pauseListeners(),history.go(w)}const g=it({location:"",base:i,go:h,createHref:xx.bind(null,i)},c,d);return Object.defineProperty(g,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(g,"state",{enumerable:!0,get:()=>c.state.value}),g}function zx(i){return typeof i=="string"||i&&typeof i=="object"}function rA(i){return typeof i=="string"||typeof i=="symbol"}const Po={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sA=Symbol("");var V_;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(V_||(V_={}));function us(i,c){return it(new Error,{type:i,[sA]:!0},c)}function Xi(i,c){return i instanceof Error&&sA in i&&(c==null||!!(i.type&c))}const U_="[^/]+?",Fx={sensitive:!1,strict:!1,start:!0,end:!0},jx=/[.+*?^${}()[\]/\\]/g;function Vx(i,c){const d=it({},Fx,c),h=[];let g=d.start?"^":"";const w=[];for(const I of i){const E=I.length?[]:[90];d.strict&&!I.length&&(g+="/");for(let x=0;x<I.length;x++){const C=I[x];let P=40+(d.sensitive?.25:0);if(C.type===0)x||(g+="/"),g+=C.value.replace(jx,"\\$&"),P+=40;else if(C.type===1){const{value:R,repeatable:U,optional:G,regexp:W}=C;w.push({name:R,repeatable:U,optional:G});const F=W||U_;if(F!==U_){P+=10;try{new RegExp(`(${F})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${R}" (${F}): `+J.message)}}let H=U?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;x||(H=G&&I.length<2?`(?:/${H})`:"/"+H),G&&(H+="?"),g+=H,P+=20,G&&(P+=-8),U&&(P+=-20),F===".*"&&(P+=-50)}E.push(P)}h.push(E)}if(d.strict&&d.end){const I=h.length-1;h[I][h[I].length-1]+=.7000000000000001}d.strict||(g+="/?"),d.end?g+="$":d.strict&&(g+="(?:/|$)");const k=new RegExp(g,d.sensitive?"":"i");function y(I){const E=I.match(k),x={};if(!E)return null;for(let C=1;C<E.length;C++){const P=E[C]||"",R=w[C-1];x[R.name]=P&&R.repeatable?P.split("/"):P}return x}function b(I){let E="",x=!1;for(const C of i){(!x||!E.endsWith("/"))&&(E+="/"),x=!1;for(const P of C)if(P.type===0)E+=P.value;else if(P.type===1){const{value:R,repeatable:U,optional:G}=P,W=R in I?I[R]:"";if(bi(W)&&!U)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const F=bi(W)?W.join("/"):W;if(!F)if(G)C.length<2&&(E.endsWith("/")?E=E.slice(0,-1):x=!0);else throw new Error(`Missing required param "${R}"`);E+=F}}return E||"/"}return{re:k,score:h,keys:w,parse:y,stringify:b}}function Ux(i,c){let d=0;for(;d<i.length&&d<c.length;){const h=c[d]-i[d];if(h)return h;d++}return i.length<c.length?i.length===1&&i[0]===40+40?-1:1:i.length>c.length?c.length===1&&c[0]===40+40?1:-1:0}function Hx(i,c){let d=0;const h=i.score,g=c.score;for(;d<h.length&&d<g.length;){const w=Ux(h[d],g[d]);if(w)return w;d++}if(Math.abs(g.length-h.length)===1){if(H_(h))return 1;if(H_(g))return-1}return g.length-h.length}function H_(i){const c=i[i.length-1];return i.length>0&&c[c.length-1]<0}const Gx={type:0,value:""},Wx=/[a-zA-Z0-9_]/;function Yx(i){if(!i)return[[]];if(i==="/")return[[Gx]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function c(P){throw new Error(`ERR (${d})/"${I}": ${P}`)}let d=0,h=d;const g=[];let w;function k(){w&&g.push(w),w=[]}let y=0,b,I="",E="";function x(){!I||(d===0?w.push({type:0,value:I}):d===1||d===2||d===3?(w.length>1&&(b==="*"||b==="+")&&c(`A repeatable param (${I}) must be alone in its segment. eg: '/:ids+.`),w.push({type:1,value:I,regexp:E,repeatable:b==="*"||b==="+",optional:b==="*"||b==="?"})):c("Invalid state to consume buffer"),I="")}function C(){I+=b}for(;y<i.length;){if(b=i[y++],b==="\\"&&d!==2){h=d,d=4;continue}switch(d){case 0:b==="/"?(I&&x(),k()):b===":"?(x(),d=1):C();break;case 4:C(),d=h;break;case 1:b==="("?d=2:Wx.test(b)?C():(x(),d=0,b!=="*"&&b!=="?"&&b!=="+"&&y--);break;case 2:b===")"?E[E.length-1]=="\\"?E=E.slice(0,-1)+b:d=3:E+=b;break;case 3:x(),d=0,b!=="*"&&b!=="?"&&b!=="+"&&y--,E="";break;default:c("Unknown state");break}}return d===2&&c(`Unfinished custom RegExp for param "${I}"`),x(),k(),g}function $x(i,c,d){const h=Vx(Yx(i.path),d),g=it(h,{record:i,parent:c,children:[],alias:[]});return c&&!g.record.aliasOf==!c.record.aliasOf&&c.children.push(g),g}function qx(i,c){const d=[],h=new Map;c=Y_({strict:!1,end:!0,sensitive:!1},c);function g(E){return h.get(E)}function w(E,x,C){const P=!C,R=Kx(E);R.aliasOf=C&&C.record;const U=Y_(c,E),G=[R];if("alias"in E){const H=typeof E.alias=="string"?[E.alias]:E.alias;for(const J of H)G.push(it({},R,{components:C?C.record.components:R.components,path:J,aliasOf:C?C.record:R}))}let W,F;for(const H of G){const{path:J}=H;if(x&&J[0]!=="/"){const ee=x.record.path,se=ee[ee.length-1]==="/"?"":"/";H.path=x.record.path+(J&&se+J)}if(W=$x(H,x,U),C?C.alias.push(W):(F=F||W,F!==W&&F.alias.push(W),P&&E.name&&!W_(W)&&k(E.name)),R.children){const ee=R.children;for(let se=0;se<ee.length;se++)w(ee[se],W,C&&C.children[se])}C=C||W,b(W)}return F?()=>{k(F)}:va}function k(E){if(rA(E)){const x=h.get(E);x&&(h.delete(E),d.splice(d.indexOf(x),1),x.children.forEach(k),x.alias.forEach(k))}else{const x=d.indexOf(E);x>-1&&(d.splice(x,1),E.record.name&&h.delete(E.record.name),E.children.forEach(k),E.alias.forEach(k))}}function y(){return d}function b(E){let x=0;for(;x<d.length&&Hx(E,d[x])>=0&&(E.record.path!==d[x].record.path||!aA(E,d[x]));)x++;d.splice(x,0,E),E.record.name&&!W_(E)&&h.set(E.record.name,E)}function I(E,x){let C,P={},R,U;if("name"in E&&E.name){if(C=h.get(E.name),!C)throw us(1,{location:E});U=C.record.name,P=it(G_(x.params,C.keys.filter(F=>!F.optional).map(F=>F.name)),E.params&&G_(E.params,C.keys.map(F=>F.name))),R=C.stringify(P)}else if("path"in E)R=E.path,C=d.find(F=>F.re.test(R)),C&&(P=C.parse(R),U=C.record.name);else{if(C=x.name?h.get(x.name):d.find(F=>F.re.test(x.path)),!C)throw us(1,{location:E,currentLocation:x});U=C.record.name,P=it({},x.params,E.params),R=C.stringify(P)}const G=[];let W=C;for(;W;)G.unshift(W.record),W=W.parent;return{name:U,path:R,params:P,matched:G,meta:Zx(G)}}return i.forEach(E=>w(E)),{addRoute:w,resolve:I,removeRoute:k,getRoutes:y,getRecordMatcher:g}}function G_(i,c){const d={};for(const h of c)h in i&&(d[h]=i[h]);return d}function Kx(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:Qx(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function Qx(i){const c={},d=i.props||!1;if("component"in i)c.default=d;else for(const h in i.components)c[h]=typeof d=="boolean"?d:d[h];return c}function W_(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function Zx(i){return i.reduce((c,d)=>it(c,d.meta),{})}function Y_(i,c){const d={};for(const h in i)d[h]=h in c?c[h]:i[h];return d}function aA(i,c){return c.children.some(d=>d===i||aA(i,d))}const cA=/#/g,Xx=/&/g,Jx=/\//g,eS=/=/g,tS=/\?/g,lA=/\+/g,nS=/%5B/g,iS=/%5D/g,dA=/%5E/g,oS=/%60/g,uA=/%7B/g,rS=/%7C/g,hA=/%7D/g,sS=/%20/g;function Ng(i){return encodeURI(""+i).replace(rS,"|").replace(nS,"[").replace(iS,"]")}function aS(i){return Ng(i).replace(uA,"{").replace(hA,"}").replace(dA,"^")}function fg(i){return Ng(i).replace(lA,"%2B").replace(sS,"+").replace(cA,"%23").replace(Xx,"%26").replace(oS,"`").replace(uA,"{").replace(hA,"}").replace(dA,"^")}function cS(i){return fg(i).replace(eS,"%3D")}function lS(i){return Ng(i).replace(cA,"%23").replace(tS,"%3F")}function dS(i){return i==null?"":lS(i).replace(Jx,"%2F")}function Sl(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function uS(i){const c={};if(i===""||i==="?")return c;const h=(i[0]==="?"?i.slice(1):i).split("&");for(let g=0;g<h.length;++g){const w=h[g].replace(lA," "),k=w.indexOf("="),y=Sl(k<0?w:w.slice(0,k)),b=k<0?null:Sl(w.slice(k+1));if(y in c){let I=c[y];bi(I)||(I=c[y]=[I]),I.push(b)}else c[y]=b}return c}function $_(i){let c="";for(let d in i){const h=i[d];if(d=cS(d),h==null){h!==void 0&&(c+=(c.length?"&":"")+d);continue}(bi(h)?h.map(w=>w&&fg(w)):[h&&fg(h)]).forEach(w=>{w!==void 0&&(c+=(c.length?"&":"")+d,w!=null&&(c+="="+w))})}return c}function hS(i){const c={};for(const d in i){const h=i[d];h!==void 0&&(c[d]=bi(h)?h.map(g=>g==null?null:""+g):h==null?h:""+h)}return c}const gS=Symbol(""),q_=Symbol(""),Lg=Symbol(""),gA=Symbol(""),pg=Symbol("");function fa(){let i=[];function c(h){return i.push(h),()=>{const g=i.indexOf(h);g>-1&&i.splice(g,1)}}function d(){i=[]}return{add:c,list:()=>i,reset:d}}function No(i,c,d,h,g){const w=h&&(h.enterCallbacks[g]=h.enterCallbacks[g]||[]);return()=>new Promise((k,y)=>{const b=x=>{x===!1?y(us(4,{from:d,to:c})):x instanceof Error?y(x):zx(x)?y(us(2,{from:c,to:x})):(w&&h.enterCallbacks[g]===w&&typeof x=="function"&&w.push(x),k())},I=i.call(h&&h.instances[g],c,d,b);let E=Promise.resolve(I);i.length<3&&(E=E.then(b)),E.catch(x=>y(x))})}function Jh(i,c,d,h){const g=[];for(const w of i)for(const k in w.components){let y=w.components[k];if(!(c!=="beforeRouteEnter"&&!w.instances[k]))if(mS(y)){const I=(y.__vccOpts||y)[c];I&&g.push(No(I,d,h,w,k))}else{let b=y();g.push(()=>b.then(I=>{if(!I)return Promise.reject(new Error(`Couldn't resolve component "${k}" at "${w.path}"`));const E=_x(I)?I.default:I;w.components[k]=E;const C=(E.__vccOpts||E)[c];return C&&No(C,d,h,w,k)()}))}}return g}function mS(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function K_(i){const c=Da(Lg),d=Da(gA),h=hi(()=>c.resolve(Aa(i.to))),g=hi(()=>{const{matched:b}=h.value,{length:I}=b,E=b[I-1],x=d.matched;if(!E||!x.length)return-1;const C=x.findIndex(ds.bind(null,E));if(C>-1)return C;const P=Q_(b[I-2]);return I>1&&Q_(E)===P&&x[x.length-1].path!==P?x.findIndex(ds.bind(null,b[I-2])):C}),w=hi(()=>g.value>-1&&kS(d.params,h.value.params)),k=hi(()=>g.value>-1&&g.value===d.matched.length-1&&iA(d.params,h.value.params));function y(b={}){return bS(b)?c[Aa(i.replace)?"replace":"push"](Aa(i.to)).catch(va):Promise.resolve()}return{route:h,href:hi(()=>h.value.href),isActive:w,isExactActive:k,navigate:y}}const fS=eA({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:K_,setup(i,{slots:c}){const d=J0(K_(i)),{options:h}=Da(Lg),g=hi(()=>({[Z_(i.activeClass,h.linkActiveClass,"router-link-active")]:d.isActive,[Z_(i.exactActiveClass,h.linkExactActiveClass,"router-link-exact-active")]:d.isExactActive}));return()=>{const w=c.default&&c.default(d);return i.custom?w:xl("a",{"aria-current":d.isExactActive?i.ariaCurrentValue:null,href:d.href,onClick:d.navigate,class:g.value},w)}}}),pS=fS;function bS(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const c=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return i.preventDefault&&i.preventDefault(),!0}}function kS(i,c){for(const d in c){const h=c[d],g=i[d];if(typeof h=="string"){if(h!==g)return!1}else if(!bi(g)||g.length!==h.length||h.some((w,k)=>w!==g[k]))return!1}return!0}function Q_(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Z_=(i,c,d)=>i!=null?i:c!=null?c:d,wS=eA({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:c,slots:d}){const h=Da(pg),g=hi(()=>i.route||h.value),w=Da(q_,0),k=hi(()=>{let I=Aa(w);const{matched:E}=g.value;let x;for(;(x=E[I])&&!x.components;)I++;return I}),y=hi(()=>g.value.matched[k.value]);Qh(q_,hi(()=>k.value+1)),Qh(gS,y),Qh(pg,g);const b=mx();return fx(()=>[b.value,y.value,i.name],([I,E,x],[C,P,R])=>{E&&(E.instances[x]=I,P&&P!==E&&I&&I===C&&(E.leaveGuards.size||(E.leaveGuards=P.leaveGuards),E.updateGuards.size||(E.updateGuards=P.updateGuards))),I&&E&&(!P||!ds(E,P)||!C)&&(E.enterCallbacks[x]||[]).forEach(U=>U(I))},{flush:"post"}),()=>{const I=g.value,E=i.name,x=y.value,C=x&&x.components[E];if(!C)return X_(d.default,{Component:C,route:I});const P=x.props[E],R=P?P===!0?I.params:typeof P=="function"?P(I):P:null,G=xl(C,it({},R,c,{onVnodeUnmounted:W=>{W.component.isUnmounted&&(x.instances[E]=null)},ref:b}));return X_(d.default,{Component:G,route:I})||G}}});function X_(i,c){if(!i)return null;const d=i(c);return d.length===1?d[0]:d}const _S=wS;function AS(i){const c=qx(i.routes,i),d=i.parseQuery||uS,h=i.stringifyQuery||$_,g=i.history,w=fa(),k=fa(),y=fa(),b=hx(Po);let I=Po;es&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=Zh.bind(null,j=>""+j),x=Zh.bind(null,dS),C=Zh.bind(null,Sl);function P(j,X){let oe,ce;return rA(j)?(oe=c.getRecordMatcher(j),ce=X):ce=j,c.addRoute(ce,oe)}function R(j){const X=c.getRecordMatcher(j);X&&c.removeRoute(X)}function U(){return c.getRoutes().map(j=>j.record)}function G(j){return!!c.getRecordMatcher(j)}function W(j,X){if(X=it({},X||b.value),typeof j=="string"){const Ee=Xh(d,j,X.path),$e=c.resolve({path:Ee.path},X),$t=g.createHref(Ee.fullPath);return it(Ee,$e,{params:C($e.params),hash:Sl(Ee.hash),redirectedFrom:void 0,href:$t})}let oe;if("path"in j)oe=it({},j,{path:Xh(d,j.path,X.path).path});else{const Ee=it({},j.params);for(const $e in Ee)Ee[$e]==null&&delete Ee[$e];oe=it({},j,{params:x(j.params)}),X.params=x(X.params)}const ce=c.resolve(oe,X),Y=j.hash||"";ce.params=E(C(ce.params));const Oe=Cx(h,it({},j,{hash:aS(Y),path:ce.path})),he=g.createHref(Oe);return it({fullPath:Oe,hash:Y,query:h===$_?hS(j.query):j.query||{}},ce,{redirectedFrom:void 0,href:he})}function F(j){return typeof j=="string"?Xh(d,j,b.value.path):it({},j)}function H(j,X){if(I!==j)return us(8,{from:X,to:j})}function J(j){return te(j)}function ee(j){return J(it(F(j),{replace:!0}))}function se(j){const X=j.matched[j.matched.length-1];if(X&&X.redirect){const{redirect:oe}=X;let ce=typeof oe=="function"?oe(j):oe;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=F(ce):{path:ce},ce.params={}),it({query:j.query,hash:j.hash,params:"path"in ce?{}:j.params},ce)}}function te(j,X){const oe=I=W(j),ce=b.value,Y=j.state,Oe=j.force,he=j.replace===!0,Ee=se(oe);if(Ee)return te(it(F(Ee),{state:typeof Ee=="object"?it({},Y,Ee.state):Y,force:Oe,replace:he}),X||oe);const $e=oe;$e.redirectedFrom=X;let $t;return!Oe&&yx(h,ce,oe)&&($t=us(16,{to:$e,from:ce}),Me(ce,ce,!0,!1)),($t?Promise.resolve($t):ne($e,ce)).catch(_t=>Xi(_t)?Xi(_t,2)?_t:_e(_t):Z(_t,$e,ce)).then(_t=>{if(_t){if(Xi(_t,2))return te(it({replace:he},F(_t.to),{state:typeof _t.to=="object"?it({},Y,_t.to.state):Y,force:Oe}),X||$e)}else _t=de($e,ce,!0,he,Y);return fe($e,ce,_t),_t})}function q(j,X){const oe=H(j,X);return oe?Promise.reject(oe):Promise.resolve()}function ne(j,X){let oe;const[ce,Y,Oe]=vS(j,X);oe=Jh(ce.reverse(),"beforeRouteLeave",j,X);for(const Ee of ce)Ee.leaveGuards.forEach($e=>{oe.push(No($e,j,X))});const he=q.bind(null,j,X);return oe.push(he),Xr(oe).then(()=>{oe=[];for(const Ee of w.list())oe.push(No(Ee,j,X));return oe.push(he),Xr(oe)}).then(()=>{oe=Jh(Y,"beforeRouteUpdate",j,X);for(const Ee of Y)Ee.updateGuards.forEach($e=>{oe.push(No($e,j,X))});return oe.push(he),Xr(oe)}).then(()=>{oe=[];for(const Ee of j.matched)if(Ee.beforeEnter&&!X.matched.includes(Ee))if(bi(Ee.beforeEnter))for(const $e of Ee.beforeEnter)oe.push(No($e,j,X));else oe.push(No(Ee.beforeEnter,j,X));return oe.push(he),Xr(oe)}).then(()=>(j.matched.forEach(Ee=>Ee.enterCallbacks={}),oe=Jh(Oe,"beforeRouteEnter",j,X),oe.push(he),Xr(oe))).then(()=>{oe=[];for(const Ee of k.list())oe.push(No(Ee,j,X));return oe.push(he),Xr(oe)}).catch(Ee=>Xi(Ee,8)?Ee:Promise.reject(Ee))}function fe(j,X,oe){for(const ce of y.list())ce(j,X,oe)}function de(j,X,oe,ce,Y){const Oe=H(j,X);if(Oe)return Oe;const he=X===Po,Ee=es?history.state:{};oe&&(ce||he?g.replace(j.fullPath,it({scroll:he&&Ee&&Ee.scroll},Y)):g.push(j.fullPath,Y)),b.value=j,Me(j,X,oe,he),_e()}let z;function Ce(){z||(z=g.listen((j,X,oe)=>{if(!Je.listening)return;const ce=W(j),Y=se(ce);if(Y){te(it(Y,{replace:!0}),ce).catch(va);return}I=ce;const Oe=b.value;es&&Px(F_(Oe.fullPath,oe.delta),Ul()),ne(ce,Oe).catch(he=>Xi(he,12)?he:Xi(he,2)?(te(he.to,ce).then(Ee=>{Xi(Ee,20)&&!oe.delta&&oe.type===xa.pop&&g.go(-1,!1)}).catch(va),Promise.reject()):(oe.delta&&g.go(-oe.delta,!1),Z(he,ce,Oe))).then(he=>{he=he||de(ce,Oe,!1),he&&(oe.delta&&!Xi(he,8)?g.go(-oe.delta,!1):oe.type===xa.pop&&Xi(he,20)&&g.go(-1,!1)),fe(ce,Oe,he)}).catch(va)}))}let ie=fa(),be=fa(),Q;function Z(j,X,oe){_e(j);const ce=be.list();return ce.length?ce.forEach(Y=>Y(j,X,oe)):console.error(j),Promise.reject(j)}function ke(){return Q&&b.value!==Po?Promise.resolve():new Promise((j,X)=>{ie.add([j,X])})}function _e(j){return Q||(Q=!j,Ce(),ie.list().forEach(([X,oe])=>j?oe(j):X()),ie.reset()),j}function Me(j,X,oe,ce){const{scrollBehavior:Y}=i;if(!es||!Y)return Promise.resolve();const Oe=!oe&&Ox(F_(j.fullPath,0))||(ce||!oe)&&history.state&&history.state.scroll||null;return gx().then(()=>Y(j,X,Oe)).then(he=>he&&Mx(he)).catch(he=>Z(he,j,X))}const ye=j=>g.go(j);let lt;const Ft=new Set,Je={currentRoute:b,listening:!0,addRoute:P,removeRoute:R,hasRoute:G,getRoutes:U,resolve:W,options:i,push:J,replace:ee,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:w.add,beforeResolve:k.add,afterEach:y.add,onError:be.add,isReady:ke,install(j){const X=this;j.component("RouterLink",pS),j.component("RouterView",_S),j.config.globalProperties.$router=X,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Aa(b)}),es&&!lt&&b.value===Po&&(lt=!0,J(g.location).catch(Y=>{}));const oe={};for(const Y in Po)oe[Y]=hi(()=>b.value[Y]);j.provide(Lg,X),j.provide(gA,J0(oe)),j.provide(pg,b);const ce=j.unmount;Ft.add(j),j.unmount=function(){Ft.delete(j),Ft.size<1&&(I=Po,z&&z(),z=null,b.value=Po,lt=!1,Q=!1),ce()}}};return Je}function Xr(i){return i.reduce((c,d)=>c.then(()=>d()),Promise.resolve())}function vS(i,c){const d=[],h=[],g=[],w=Math.max(c.matched.length,i.matched.length);for(let k=0;k<w;k++){const y=c.matched[k];y&&(i.matched.find(I=>ds(I,y))?h.push(y):d.push(y));const b=i.matched[k];b&&(c.matched.find(I=>ds(I,b))||g.push(b))}return[d,h,g]}const CS={};function yS(i,c){return pe(),Ae("h1")}const ES=jn(CS,[["render",yS]]),IS={},TS={class:"spinner-border text-primary my-4",role:"status"},DS=B("span",{class:"visually-hidden"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",-1),xS=[DS];function SS(i,c){return pe(),Ae("div",TS,xS)}const Pi=jn(IS,[["render",SS]]),MS={data(){return{categories:[],views:{loading:!0}}},created(){this.loadCategories()},methods:{loadCategories(){axios.get("/_admin/categories").then(i=>{this.categories=i.data,this.views.loading=!1})}},components:{Loader:Pi}},PS={class:"subheader w-100 mb-3"},OS={class:"row align-items-center"},RS=B("div",{class:"col-12 col-md-7"},[B("h1",null,"\u041A\u0430\u0442\u0430\u043B\u043E\u0433")],-1),NS={class:"col-12 col-lg-5 text-end"},LS={key:1,class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center"},BS={class:"w-100"},zS={class:"row"},FS={class:"col-12 col-lg-4"},jS={class:"box mb-4"};function VS(i,c,d,h,g,w){const k=ft("router-link"),y=ft("Loader");return pe(),Ae("div",null,[B("div",PS,[B("div",OS,[RS,B("div",NS,[ht(k,{to:{name:"ProductMaster"},class:"btn btn-primary me-2"},{default:Lt(()=>[Xe("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440")]),_:1}),ht(k,{to:{name:"CategoryMaster"},class:"btn btn-primary"},{default:Lt(()=>[Xe("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E")]),_:1})])])]),g.views.loading?(pe(),ii(y,{key:0})):Ge("",!0),g.views.loading?Ge("",!0):(pe(),Ae("div",LS,[B("div",BS,[B("div",zS,[(pe(!0),Ae(mt,null,pi(g.categories,b=>(pe(),Ae("div",FS,[B("div",jS,[ht(k,{to:{name:"Category",params:{id:b.id}},class:"d-flex align-items-center fw-bold p-4",style:{height:"100px"}},{default:Lt(()=>[Xe(ut(b.name),1)]),_:2},1032,["to"])])]))),256))])])]))])}const US=jn(MS,[["render",VS]]),HS={data(){return{category:{},views:{loading:!0}}},created(){this.loadCategory()},methods:{loadCategory(){axios.get(`/_admin/category/${this.$route.params.id}`).then(i=>{this.category=i.data,this.views.loading=!1})}},components:{Loader:Pi}},GS={class:"subheader w-100 mb-3"},WS={class:"row align-items-center"},YS={class:"col-12 col-md-7"},$S=B("span",{class:"text-muted me-2"},"/",-1),qS=B("span",{class:"text-muted me-2"},"/",-1),KS=B("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16"},[B("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),B("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})],-1),QS=B("div",{class:"col-12 col-lg-5"},null,-1),ZS={key:1,class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center"},XS={class:"w-100"},JS={class:"row"},eM={class:"col-12 col-lg-4"},tM={class:"box mb-4"},nM={key:2,class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center"},iM={class:"w-100"},oM={class:"box mb-4"},rM={key:0,class:"table"},sM={class:"text-center text-muted"},aM=B("br",null,null,-1),cM={class:"text-muted"},lM={class:"fw-bold"},dM={class:"text-muted"},uM={key:1,class:"m-0 p-4"};function hM(i,c,d,h,g,w){const k=ft("router-link"),y=ft("Loader");return pe(),Ae("div",null,[B("div",GS,[B("div",WS,[B("div",YS,[B("h1",null,[g.category.parent_id?(pe(),Ae(mt,{key:0},[ht(k,{to:{name:"Category",params:{id:g.category.parent_id}}},{default:Lt(()=>[Xe("\u041D\u0430\u0437\u0430\u0434")]),_:1},8,["to"]),$S],64)):(pe(),Ae(mt,{key:1},[ht(k,{to:{name:"Categories"}},{default:Lt(()=>[Xe("\u041A\u0430\u0442\u0430\u043B\u043E\u0433")]),_:1}),qS],64)),Xe(" "+ut(g.category.name)+" ",1),g.category.id?(pe(),ii(k,{key:2,to:{name:"CategoryMaster",params:{id:g.category.id}},class:"btn btn-sm btn-outline-secondary ms-2"},{default:Lt(()=>[KS]),_:1},8,["to"])):Ge("",!0)])]),QS])]),g.views.loading?(pe(),ii(y,{key:0})):Ge("",!0),!g.views.loading&&g.category.children?(pe(),Ae("div",ZS,[B("div",XS,[B("div",JS,[(pe(!0),Ae(mt,null,pi(g.category.children,b=>(pe(),Ae("div",eM,[B("div",tM,[ht(k,{to:{name:"Category",params:{id:b.id}},class:"d-flex align-items-center fw-bold p-4",style:{height:"100px"}},{default:Lt(()=>[Xe(ut(b.name),1)]),_:2},1032,["to"])])]))),256))])])])):Ge("",!0),g.views.loading?Ge("",!0):(pe(),Ae("div",nM,[B("div",iM,[B("div",oM,[g.category.products&&g.category.products.length?(pe(),Ae("table",rM,[B("tbody",null,[(pe(!0),Ae(mt,null,pi(g.category.products,(b,I)=>(pe(),Ae("tr",null,[B("td",sM,ut(I+1),1),B("td",null,[ht(k,{to:{name:"ProductMaster",params:{id:b.id}},class:"text-decoration-none"},{default:Lt(()=>[Xe(ut(b.name)+" ",1),aM,B("small",cM,ut(b.name_eng),1)]),_:2},1032,["to"])]),B("td",lM,[Xe(ut(b.price_rub)+"\u20BD \xA0\xA0",1),B("span",dM,"$"+ut(b.price_usd),1)])]))),256))])])):(pe(),Ae("p",uM,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043F\u0443\u0441\u0442\u0430."))])])]))])}const gM=jn(HS,[["render",hM]]);/*!
 * FilePond 4.30.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */const mM=i=>i instanceof HTMLElement,fM=(i,c=[],d=[])=>{const h={...i},g=[],w=[],k=()=>({...h}),y=()=>{const R=[...g];return g.length=0,R},b=()=>{const R=[...w];w.length=0,R.forEach(({type:U,data:G})=>{I(U,G)})},I=(R,U,G)=>{if(G&&!document.hidden){w.push({type:R,data:U});return}P[R]&&P[R](U),g.push({type:R,data:U})},E=(R,...U)=>C[R]?C[R](...U):null,x={getState:k,processActionQueue:y,processDispatchQueue:b,dispatch:I,query:E};let C={};c.forEach(R=>{C={...R(h),...C}});let P={};return d.forEach(R=>{P={...R(I,E,h),...P}}),x},pM=(i,c,d)=>{if(typeof d=="function"){i[c]=d;return}Object.defineProperty(i,c,{...d})},yt=(i,c)=>{for(const d in i)!i.hasOwnProperty(d)||c(d,i[d])},zo=i=>{const c={};return yt(i,d=>{pM(c,d,i[d])}),c},Bt=(i,c,d=null)=>{if(d===null)return i.getAttribute(c)||i.hasAttribute(c);i.setAttribute(c,d)},bM="http://www.w3.org/2000/svg",kM=["svg","path"],J_=i=>kM.includes(i),Ml=(i,c,d={})=>{typeof c=="object"&&(d=c,c=null);const h=J_(i)?document.createElementNS(bM,i):document.createElement(i);return c&&(J_(i)?Bt(h,"class",c):h.className=c),yt(d,(g,w)=>{Bt(h,g,w)}),h},wM=i=>(c,d)=>{typeof d<"u"&&i.children[d]?i.insertBefore(c,i.children[d]):i.appendChild(c)},_M=(i,c)=>(d,h)=>(typeof h<"u"?c.splice(h,0,d):c.push(d),d),AM=(i,c)=>d=>(c.splice(c.indexOf(d),1),d.element.parentNode&&i.removeChild(d.element),d),vM=(()=>typeof window<"u"&&typeof window.document<"u")(),mA=()=>vM,CM=mA()?Ml("svg"):{},yM="children"in CM?i=>i.children.length:i=>i.childNodes.length,fA=(i,c,d,h)=>{const g=d[0]||i.left,w=d[1]||i.top,k=g+i.width,y=w+i.height*(h[1]||1),b={element:{...i},inner:{left:i.left,top:i.top,right:i.right,bottom:i.bottom},outer:{left:g,top:w,right:k,bottom:y}};return c.filter(I=>!I.isRectIgnored()).map(I=>I.rect).forEach(I=>{e0(b.inner,{...I.inner}),e0(b.outer,{...I.outer})}),t0(b.inner),b.outer.bottom+=b.element.marginBottom,b.outer.right+=b.element.marginRight,t0(b.outer),b},e0=(i,c)=>{c.top+=i.top,c.right+=i.left,c.bottom+=i.top,c.left+=i.left,c.bottom>i.bottom&&(i.bottom=c.bottom),c.right>i.right&&(i.right=c.right)},t0=i=>{i.width=i.right-i.left,i.height=i.bottom-i.top},dr=i=>typeof i=="number",EM=(i,c,d,h=.001)=>Math.abs(i-c)<h&&Math.abs(d)<h,IM=({stiffness:i=.5,damping:c=.75,mass:d=10}={})=>{let h=null,g=null,w=0,k=!1;const I=zo({interpolate:(E,x)=>{if(k)return;if(!(dr(h)&&dr(g))){k=!0,w=0;return}const C=-(g-h)*i;w+=C/d,g+=w,w*=c,EM(g,h,w)||x?(g=h,w=0,k=!0,I.onupdate(g),I.oncomplete(g)):I.onupdate(g)},target:{set:E=>{if(dr(E)&&!dr(g)&&(g=E),h===null&&(h=E,g=E),h=E,g===h||typeof h>"u"){k=!0,w=0,I.onupdate(g),I.oncomplete(g);return}k=!1},get:()=>h},resting:{get:()=>k},onupdate:E=>{},oncomplete:E=>{}});return I},TM=i=>i<.5?2*i*i:-1+(4-2*i)*i,DM=({duration:i=500,easing:c=TM,delay:d=0}={})=>{let h=null,g,w,k=!0,y=!1,b=null;const E=zo({interpolate:(x,C)=>{k||b===null||(h===null&&(h=x),!(x-h<d)&&(g=x-h-d,g>=i||C?(g=1,w=y?0:1,E.onupdate(w*b),E.oncomplete(w*b),k=!0):(w=g/i,E.onupdate((g>=0?c(y?1-w:w):0)*b))))},target:{get:()=>y?0:b,set:x=>{if(b===null){b=x,E.onupdate(x),E.oncomplete(x);return}x<b?(b=1,y=!0):(y=!1,b=x),k=!1,h=null}},resting:{get:()=>k},onupdate:x=>{},oncomplete:x=>{}});return E},n0={spring:IM,tween:DM},xM=(i,c,d)=>{const h=i[c]&&typeof i[c][d]=="object"?i[c][d]:i[c]||i,g=typeof h=="string"?h:h.type,w=typeof h=="object"?{...h}:{};return n0[g]?n0[g](w):null},Bg=(i,c,d,h=!1)=>{c=Array.isArray(c)?c:[c],c.forEach(g=>{i.forEach(w=>{let k=w,y=()=>d[w],b=I=>d[w]=I;typeof w=="object"&&(k=w.key,y=w.getter||y,b=w.setter||b),!(g[k]&&!h)&&(g[k]={get:y,set:b})})})},SM=({mixinConfig:i,viewProps:c,viewInternalAPI:d,viewExternalAPI:h})=>{const g={...c},w=[];return yt(i,(k,y)=>{const b=xM(y);if(!b)return;b.onupdate=E=>{c[k]=E},b.target=g[k],Bg([{key:k,setter:E=>{b.target!==E&&(b.target=E)},getter:()=>c[k]}],[d,h],c,!0),w.push(b)}),{write:k=>{let y=document.hidden,b=!0;return w.forEach(I=>{I.resting||(b=!1),I.interpolate(k,y)}),b},destroy:()=>{}}},MM=i=>(c,d)=>{i.addEventListener(c,d)},PM=i=>(c,d)=>{i.removeEventListener(c,d)},OM=({mixinConfig:i,viewProps:c,viewInternalAPI:d,viewExternalAPI:h,viewState:g,view:w})=>{const k=[],y=MM(w.element),b=PM(w.element);return h.on=(I,E)=>{k.push({type:I,fn:E}),y(I,E)},h.off=(I,E)=>{k.splice(k.findIndex(x=>x.type===I&&x.fn===E),1),b(I,E)},{write:()=>!0,destroy:()=>{k.forEach(I=>{b(I.type,I.fn)})}}},RM=({mixinConfig:i,viewProps:c,viewExternalAPI:d})=>{Bg(i,d,c)},kn=i=>i!=null,NM={opacity:1,scaleX:1,scaleY:1,translateX:0,translateY:0,rotateX:0,rotateY:0,rotateZ:0,originX:0,originY:0},LM=({mixinConfig:i,viewProps:c,viewInternalAPI:d,viewExternalAPI:h,view:g})=>{const w={...c},k={};Bg(i,[d,h],c);const y=()=>[c.translateX||0,c.translateY||0],b=()=>[c.scaleX||0,c.scaleY||0],I=()=>g.rect?fA(g.rect,g.childViews,y(),b()):null;return d.rect={get:I},h.rect={get:I},i.forEach(E=>{c[E]=typeof w[E]>"u"?NM[E]:w[E]}),{write:()=>{if(!!BM(k,c))return zM(g.element,c),Object.assign(k,{...c}),!0},destroy:()=>{}}},BM=(i,c)=>{if(Object.keys(i).length!==Object.keys(c).length)return!0;for(const d in c)if(c[d]!==i[d])return!0;return!1},zM=(i,{opacity:c,perspective:d,translateX:h,translateY:g,scaleX:w,scaleY:k,rotateX:y,rotateY:b,rotateZ:I,originX:E,originY:x,width:C,height:P})=>{let R="",U="";(kn(E)||kn(x))&&(U+=`transform-origin: ${E||0}px ${x||0}px;`),kn(d)&&(R+=`perspective(${d}px) `),(kn(h)||kn(g))&&(R+=`translate3d(${h||0}px, ${g||0}px, 0) `),(kn(w)||kn(k))&&(R+=`scale3d(${kn(w)?w:1}, ${kn(k)?k:1}, 1) `),kn(I)&&(R+=`rotateZ(${I}rad) `),kn(y)&&(R+=`rotateX(${y}rad) `),kn(b)&&(R+=`rotateY(${b}rad) `),R.length&&(U+=`transform:${R};`),kn(c)&&(U+=`opacity:${c};`,c===0&&(U+="visibility:hidden;"),c<1&&(U+="pointer-events:none;")),kn(P)&&(U+=`height:${P}px;`),kn(C)&&(U+=`width:${C}px;`);const G=i.elementCurrentStyle||"";(U.length!==G.length||U!==G)&&(i.style.cssText=U,i.elementCurrentStyle=U)},FM={styles:LM,listeners:OM,animations:SM,apis:RM},i0=(i={},c={},d={})=>(c.layoutCalculated||(i.paddingTop=parseInt(d.paddingTop,10)||0,i.marginTop=parseInt(d.marginTop,10)||0,i.marginRight=parseInt(d.marginRight,10)||0,i.marginBottom=parseInt(d.marginBottom,10)||0,i.marginLeft=parseInt(d.marginLeft,10)||0,c.layoutCalculated=!0),i.left=c.offsetLeft||0,i.top=c.offsetTop||0,i.width=c.offsetWidth||0,i.height=c.offsetHeight||0,i.right=i.left+i.width,i.bottom=i.top+i.height,i.scrollTop=c.scrollTop,i.hidden=c.offsetParent===null,i),zt=({tag:i="div",name:c=null,attributes:d={},read:h=()=>{},write:g=()=>{},create:w=()=>{},destroy:k=()=>{},filterFrameActionsForChild:y=(P,R)=>R,didCreateView:b=()=>{},didWriteView:I=()=>{},ignoreRect:E=!1,ignoreRectUpdate:x=!1,mixins:C=[]}={})=>(P,R={})=>{const U=Ml(i,`filepond--${c}`,d),G=window.getComputedStyle(U,null),W=i0();let F=null,H=!1;const J=[],ee=[],se={},te={},q=[g],ne=[h],fe=[k],de=()=>U,z=()=>J.concat(),Ce=()=>se,ie=X=>(oe,ce)=>oe(X,ce),be=()=>F||(F=fA(W,J,[0,0],[1,1]),F),Q=()=>G,Z=()=>{F=null,J.forEach(ce=>ce._read()),!(x&&W.width&&W.height)&&i0(W,U,G);const oe={root:Je,props:R,rect:W};ne.forEach(ce=>ce(oe))},ke=(X,oe,ce)=>{let Y=oe.length===0;return q.forEach(Oe=>{Oe({props:R,root:Je,actions:oe,timestamp:X,shouldOptimize:ce})===!1&&(Y=!1)}),ee.forEach(Oe=>{Oe.write(X)===!1&&(Y=!1)}),J.filter(Oe=>!!Oe.element.parentNode).forEach(Oe=>{Oe._write(X,y(Oe,oe),ce)||(Y=!1)}),J.forEach((Oe,he)=>{Oe.element.parentNode||(Je.appendChild(Oe.element,he),Oe._read(),Oe._write(X,y(Oe,oe),ce),Y=!1)}),H=Y,I({props:R,root:Je,actions:oe,timestamp:X}),Y},_e=()=>{ee.forEach(X=>X.destroy()),fe.forEach(X=>{X({root:Je,props:R})}),J.forEach(X=>X._destroy())},Me={element:{get:de},style:{get:Q},childViews:{get:z}},ye={...Me,rect:{get:be},ref:{get:Ce},is:X=>c===X,appendChild:wM(U),createChildView:ie(P),linkView:X=>(J.push(X),X),unlinkView:X=>{J.splice(J.indexOf(X),1)},appendChildView:_M(U,J),removeChildView:AM(U,J),registerWriter:X=>q.push(X),registerReader:X=>ne.push(X),registerDestroyer:X=>fe.push(X),invalidateLayout:()=>U.layoutCalculated=!1,dispatch:P.dispatch,query:P.query},lt={element:{get:de},childViews:{get:z},rect:{get:be},resting:{get:()=>H},isRectIgnored:()=>E,_read:Z,_write:ke,_destroy:_e},Ft={...Me,rect:{get:()=>W}};Object.keys(C).sort((X,oe)=>X==="styles"?1:oe==="styles"?-1:0).forEach(X=>{const oe=FM[X]({mixinConfig:C[X],viewProps:R,viewState:te,viewInternalAPI:ye,viewExternalAPI:lt,view:zo(Ft)});oe&&ee.push(oe)});const Je=zo(ye);w({root:Je,props:R});const j=yM(U);return J.forEach((X,oe)=>{Je.appendChild(X.element,j+oe)}),b(Je),zo(lt)},jM=(i,c,d=60)=>{const h="__framePainter";if(window[h]){window[h].readers.push(i),window[h].writers.push(c);return}window[h]={readers:[i],writers:[c]};const g=window[h],w=1e3/d;let k=null,y=null,b=null,I=null;const E=()=>{document.hidden?(b=()=>window.setTimeout(()=>x(performance.now()),w),I=()=>window.clearTimeout(y)):(b=()=>window.requestAnimationFrame(x),I=()=>window.cancelAnimationFrame(y))};document.addEventListener("visibilitychange",()=>{I&&I(),E(),x(performance.now())});const x=C=>{y=b(x),k||(k=C);const P=C-k;P<=w||(k=C-P%w,g.readers.forEach(R=>R()),g.writers.forEach(R=>R(C)))};return E(),x(performance.now()),{pause:()=>{I(y)}}},_n=(i,c)=>({root:d,props:h,actions:g=[],timestamp:w,shouldOptimize:k})=>{g.filter(y=>i[y.type]).forEach(y=>i[y.type]({root:d,props:h,action:y.data,timestamp:w,shouldOptimize:k})),c&&c({root:d,props:h,actions:g,timestamp:w,shouldOptimize:k})},o0=(i,c)=>c.parentNode.insertBefore(i,c),r0=(i,c)=>c.parentNode.insertBefore(i,c.nextSibling),Hl=i=>Array.isArray(i),oo=i=>i==null,VM=i=>i.trim(),Gl=i=>""+i,UM=(i,c=",")=>oo(i)?[]:Hl(i)?i:Gl(i).split(c).map(VM).filter(d=>d.length),pA=i=>typeof i=="boolean",bA=i=>pA(i)?i:i==="true",wn=i=>typeof i=="string",kA=i=>dr(i)?i:wn(i)?Gl(i).replace(/[a-z]+/gi,""):0,Cl=i=>parseInt(kA(i),10),s0=i=>parseFloat(kA(i)),ms=i=>dr(i)&&isFinite(i)&&Math.floor(i)===i,a0=(i,c=1e3)=>{if(ms(i))return i;let d=Gl(i).trim();return/MB$/i.test(d)?(d=d.replace(/MB$i/,"").trim(),Cl(d)*c*c):/KB/i.test(d)?(d=d.replace(/KB$i/,"").trim(),Cl(d)*c):Cl(d)},ur=i=>typeof i=="function",HM=i=>{let c=self,d=i.split("."),h=null;for(;h=d.shift();)if(c=c[h],!c)return null;return c},c0={process:"POST",patch:"PATCH",revert:"DELETE",fetch:"GET",restore:"GET",load:"GET"},GM=i=>{const c={};return c.url=wn(i)?i:i.url||"",c.timeout=i.timeout?parseInt(i.timeout,10):0,c.headers=i.headers?i.headers:{},yt(c0,d=>{c[d]=WM(d,i[d],c0[d],c.timeout,c.headers)}),c.process=i.process||wn(i)||i.url?c.process:null,c.remove=i.remove||null,delete c.headers,c},WM=(i,c,d,h,g)=>{if(c===null)return null;if(typeof c=="function")return c;const w={url:d==="GET"||d==="PATCH"?`?${i}=`:"",method:d,headers:g,withCredentials:!1,timeout:h,onload:null,ondata:null,onerror:null};if(wn(c))return w.url=c,w;if(Object.assign(w,c),wn(w.headers)){const k=w.headers.split(/:(.+)/);w.headers={header:k[0],value:k[1]}}return w.withCredentials=bA(w.withCredentials),w},YM=i=>GM(i),$M=i=>i===null,en=i=>typeof i=="object"&&i!==null,qM=i=>en(i)&&wn(i.url)&&en(i.process)&&en(i.revert)&&en(i.restore)&&en(i.fetch),bg=i=>Hl(i)?"array":$M(i)?"null":ms(i)?"int":/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(i)?"bytes":qM(i)?"api":typeof i,KM=i=>i.replace(/{\s*'/g,'{"').replace(/'\s*}/g,'"}').replace(/'\s*:/g,'":').replace(/:\s*'/g,':"').replace(/,\s*'/g,',"').replace(/'\s*,/g,'",'),QM={array:UM,boolean:bA,int:i=>bg(i)==="bytes"?a0(i):Cl(i),number:s0,float:s0,bytes:a0,string:i=>ur(i)?i:Gl(i),function:i=>HM(i),serverapi:YM,object:i=>{try{return JSON.parse(KM(i))}catch{return null}}},ZM=(i,c)=>QM[c](i),wA=(i,c,d)=>{if(i===c)return i;let h=bg(i);if(h!==d){const g=ZM(i,d);if(h=bg(g),g===null)throw`Trying to assign value with incorrect type to "${option}", allowed type: "${d}"`;i=g}return i},XM=(i,c)=>{let d=i;return{enumerable:!0,get:()=>d,set:h=>{d=wA(h,i,c)}}},JM=i=>{const c={};return yt(i,d=>{const h=i[d];c[d]=XM(h[0],h[1])}),zo(c)},e2=i=>({items:[],listUpdateTimeout:null,itemUpdateTimeout:null,processingQueue:[],options:JM(i)}),Wl=(i,c="-")=>i.split(/(?=[A-Z])/).map(d=>d.toLowerCase()).join(c),t2=(i,c)=>{const d={};return yt(c,h=>{d[h]={get:()=>i.getState().options[h],set:g=>{i.dispatch(`SET_${Wl(h,"_").toUpperCase()}`,{value:g})}}}),d},n2=i=>(c,d,h)=>{const g={};return yt(i,w=>{const k=Wl(w,"_").toUpperCase();g[`SET_${k}`]=y=>{try{h.options[w]=y.value}catch{}c(`DID_SET_${k}`,{value:h.options[w]})}}),g},i2=i=>c=>{const d={};return yt(i,h=>{d[`GET_${Wl(h,"_").toUpperCase()}`]=g=>c.options[h]}),d},ni={API:1,DROP:2,BROWSE:3,PASTE:4,NONE:5},zg=()=>Math.random().toString(36).substring(2,11),Fg=(i,c)=>i.splice(c,1),o2=(i,c)=>{c?i():document.hidden?Promise.resolve(1).then(i):setTimeout(i,0)},Yl=()=>{const i=[],c=(h,g)=>{Fg(i,i.findIndex(w=>w.event===h&&(w.cb===g||!g)))},d=(h,g,w)=>{i.filter(k=>k.event===h).map(k=>k.cb).forEach(k=>o2(()=>k(...g),w))};return{fireSync:(h,...g)=>{d(h,g,!0)},fire:(h,...g)=>{d(h,g,!1)},on:(h,g)=>{i.push({event:h,cb:g})},onOnce:(h,g)=>{i.push({event:h,cb:(...w)=>{c(h,g),g(...w)}})},off:c}},_A=(i,c,d)=>{Object.getOwnPropertyNames(i).filter(h=>!d.includes(h)).forEach(h=>Object.defineProperty(c,h,Object.getOwnPropertyDescriptor(i,h)))},r2=["fire","process","revert","load","on","off","onOnce","retryLoad","extend","archive","archived","release","released","requestProcessing","freeze"],Tn=i=>{const c={};return _A(i,c,r2),c},s2=i=>{i.forEach((c,d)=>{c.released&&Fg(i,d)})},Le={INIT:1,IDLE:2,PROCESSING_QUEUED:9,PROCESSING:3,PROCESSING_COMPLETE:5,PROCESSING_ERROR:6,PROCESSING_REVERT_ERROR:10,LOADING:7,LOAD_ERROR:8},Jt={INPUT:1,LIMBO:2,LOCAL:3},AA=i=>/[^0-9]+/.exec(i),vA=()=>AA(1.1 .toLocaleString())[0],a2=()=>{const i=vA(),c=1e3 .toLocaleString(),d=1e3 .toString();return c!==d?AA(c)[0]:i==="."?",":"."},ae={BOOLEAN:"boolean",INT:"int",NUMBER:"number",STRING:"string",ARRAY:"array",OBJECT:"object",FUNCTION:"function",ACTION:"action",SERVER_API:"serverapi",REGEX:"regex"},jg=[],ui=(i,c,d)=>new Promise((h,g)=>{const w=jg.filter(y=>y.key===i).map(y=>y.cb);if(w.length===0){h(c);return}const k=w.shift();w.reduce((y,b)=>y.then(I=>b(I,d)),k(c,d)).then(y=>h(y)).catch(y=>g(y))}),kr=(i,c,d)=>jg.filter(h=>h.key===i).map(h=>h.cb(c,d)),c2=(i,c)=>jg.push({key:i,cb:c}),l2=i=>Object.assign(ns,i),Pl=()=>({...ns}),d2=i=>{yt(i,(c,d)=>{!ns[c]||(ns[c][0]=wA(d,ns[c][0],ns[c][1]))})},ns={id:[null,ae.STRING],name:["filepond",ae.STRING],disabled:[!1,ae.BOOLEAN],className:[null,ae.STRING],required:[!1,ae.BOOLEAN],captureMethod:[null,ae.STRING],allowSyncAcceptAttribute:[!0,ae.BOOLEAN],allowDrop:[!0,ae.BOOLEAN],allowBrowse:[!0,ae.BOOLEAN],allowPaste:[!0,ae.BOOLEAN],allowMultiple:[!1,ae.BOOLEAN],allowReplace:[!0,ae.BOOLEAN],allowRevert:[!0,ae.BOOLEAN],allowRemove:[!0,ae.BOOLEAN],allowProcess:[!0,ae.BOOLEAN],allowReorder:[!1,ae.BOOLEAN],allowDirectoriesOnly:[!1,ae.BOOLEAN],storeAsFile:[!1,ae.BOOLEAN],forceRevert:[!1,ae.BOOLEAN],maxFiles:[null,ae.INT],checkValidity:[!1,ae.BOOLEAN],itemInsertLocationFreedom:[!0,ae.BOOLEAN],itemInsertLocation:["before",ae.STRING],itemInsertInterval:[75,ae.INT],dropOnPage:[!1,ae.BOOLEAN],dropOnElement:[!0,ae.BOOLEAN],dropValidation:[!1,ae.BOOLEAN],ignoredFiles:[[".ds_store","thumbs.db","desktop.ini"],ae.ARRAY],instantUpload:[!0,ae.BOOLEAN],maxParallelUploads:[2,ae.INT],allowMinimumUploadDuration:[!0,ae.BOOLEAN],chunkUploads:[!1,ae.BOOLEAN],chunkForce:[!1,ae.BOOLEAN],chunkSize:[5e6,ae.INT],chunkRetryDelays:[[500,1e3,3e3],ae.ARRAY],server:[null,ae.SERVER_API],fileSizeBase:[1e3,ae.INT],labelFileSizeBytes:["bytes",ae.STRING],labelFileSizeKilobytes:["KB",ae.STRING],labelFileSizeMegabytes:["MB",ae.STRING],labelFileSizeGigabytes:["GB",ae.STRING],labelDecimalSeparator:[vA(),ae.STRING],labelThousandsSeparator:[a2(),ae.STRING],labelIdle:['Drag & Drop your files or <span class="filepond--label-action">Browse</span>',ae.STRING],labelInvalidField:["Field contains invalid files",ae.STRING],labelFileWaitingForSize:["Waiting for size",ae.STRING],labelFileSizeNotAvailable:["Size not available",ae.STRING],labelFileCountSingular:["file in list",ae.STRING],labelFileCountPlural:["files in list",ae.STRING],labelFileLoading:["Loading",ae.STRING],labelFileAdded:["Added",ae.STRING],labelFileLoadError:["Error during load",ae.STRING],labelFileRemoved:["Removed",ae.STRING],labelFileRemoveError:["Error during remove",ae.STRING],labelFileProcessing:["Uploading",ae.STRING],labelFileProcessingComplete:["Upload complete",ae.STRING],labelFileProcessingAborted:["Upload cancelled",ae.STRING],labelFileProcessingError:["Error during upload",ae.STRING],labelFileProcessingRevertError:["Error during revert",ae.STRING],labelTapToCancel:["tap to cancel",ae.STRING],labelTapToRetry:["tap to retry",ae.STRING],labelTapToUndo:["tap to undo",ae.STRING],labelButtonRemoveItem:["Remove",ae.STRING],labelButtonAbortItemLoad:["Abort",ae.STRING],labelButtonRetryItemLoad:["Retry",ae.STRING],labelButtonAbortItemProcessing:["Cancel",ae.STRING],labelButtonUndoItemProcessing:["Undo",ae.STRING],labelButtonRetryItemProcessing:["Retry",ae.STRING],labelButtonProcessItem:["Upload",ae.STRING],iconRemove:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',ae.STRING],iconProcess:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',ae.STRING],iconRetry:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',ae.STRING],iconUndo:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',ae.STRING],iconDone:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',ae.STRING],oninit:[null,ae.FUNCTION],onwarning:[null,ae.FUNCTION],onerror:[null,ae.FUNCTION],onactivatefile:[null,ae.FUNCTION],oninitfile:[null,ae.FUNCTION],onaddfilestart:[null,ae.FUNCTION],onaddfileprogress:[null,ae.FUNCTION],onaddfile:[null,ae.FUNCTION],onprocessfilestart:[null,ae.FUNCTION],onprocessfileprogress:[null,ae.FUNCTION],onprocessfileabort:[null,ae.FUNCTION],onprocessfilerevert:[null,ae.FUNCTION],onprocessfile:[null,ae.FUNCTION],onprocessfiles:[null,ae.FUNCTION],onremovefile:[null,ae.FUNCTION],onpreparefile:[null,ae.FUNCTION],onupdatefiles:[null,ae.FUNCTION],onreorderfiles:[null,ae.FUNCTION],beforeDropFile:[null,ae.FUNCTION],beforeAddFile:[null,ae.FUNCTION],beforeRemoveFile:[null,ae.FUNCTION],beforePrepareFile:[null,ae.FUNCTION],stylePanelLayout:[null,ae.STRING],stylePanelAspectRatio:[null,ae.STRING],styleItemPanelAspectRatio:[null,ae.STRING],styleButtonRemoveItemPosition:["left",ae.STRING],styleButtonProcessItemPosition:["right",ae.STRING],styleLoadIndicatorPosition:["right",ae.STRING],styleProgressIndicatorPosition:["right",ae.STRING],styleButtonRemoveItemAlign:[!1,ae.BOOLEAN],files:[[],ae.ARRAY],credits:[["https://pqina.nl/","Powered by PQINA"],ae.ARRAY]},hr=(i,c)=>oo(c)?i[0]||null:ms(c)?i[c]||null:(typeof c=="object"&&(c=c.id),i.find(d=>d.id===c)||null),CA=i=>{if(oo(i))return i;if(/:/.test(i)){const c=i.split(":");return c[1]/c[0]}return parseFloat(i)},gi=i=>i.filter(c=>!c.archived),u2={EMPTY:0,IDLE:1,ERROR:2,BUSY:3,READY:4};let ul=null;const h2=()=>{if(ul===null)try{const i=new DataTransfer;i.items.add(new File(["hello world"],"This_Works.txt"));const c=document.createElement("input");c.setAttribute("type","file"),c.files=i.files,ul=c.files.length===1}catch{ul=!1}return ul},g2=[Le.LOAD_ERROR,Le.PROCESSING_ERROR,Le.PROCESSING_REVERT_ERROR],m2=[Le.LOADING,Le.PROCESSING,Le.PROCESSING_QUEUED,Le.INIT],f2=[Le.PROCESSING_COMPLETE],p2=i=>g2.includes(i.status),b2=i=>m2.includes(i.status),k2=i=>f2.includes(i.status),l0=i=>en(i.options.server)&&(en(i.options.server.process)||ur(i.options.server.process)),w2=i=>({GET_STATUS:()=>{const c=gi(i.items),{EMPTY:d,ERROR:h,BUSY:g,IDLE:w,READY:k}=u2;return c.length===0?d:c.some(p2)?h:c.some(b2)?g:c.some(k2)?k:w},GET_ITEM:c=>hr(i.items,c),GET_ACTIVE_ITEM:c=>hr(gi(i.items),c),GET_ACTIVE_ITEMS:()=>gi(i.items),GET_ITEMS:()=>i.items,GET_ITEM_NAME:c=>{const d=hr(i.items,c);return d?d.filename:null},GET_ITEM_SIZE:c=>{const d=hr(i.items,c);return d?d.fileSize:null},GET_STYLES:()=>Object.keys(i.options).filter(c=>/^style/.test(c)).map(c=>({name:c,value:i.options[c]})),GET_PANEL_ASPECT_RATIO:()=>/circle/.test(i.options.stylePanelLayout)?1:CA(i.options.stylePanelAspectRatio),GET_ITEM_PANEL_ASPECT_RATIO:()=>i.options.styleItemPanelAspectRatio,GET_ITEMS_BY_STATUS:c=>gi(i.items).filter(d=>d.status===c),GET_TOTAL_ITEMS:()=>gi(i.items).length,SHOULD_UPDATE_FILE_INPUT:()=>i.options.storeAsFile&&h2()&&!l0(i),IS_ASYNC:()=>l0(i),GET_FILE_SIZE_LABELS:c=>({labelBytes:c("GET_LABEL_FILE_SIZE_BYTES")||void 0,labelKilobytes:c("GET_LABEL_FILE_SIZE_KILOBYTES")||void 0,labelMegabytes:c("GET_LABEL_FILE_SIZE_MEGABYTES")||void 0,labelGigabytes:c("GET_LABEL_FILE_SIZE_GIGABYTES")||void 0})}),_2=i=>{const c=gi(i.items).length;if(!i.options.allowMultiple)return c===0;const d=i.options.maxFiles;return d===null||c<d},yA=(i,c,d)=>Math.max(Math.min(d,i),c),A2=(i,c,d)=>i.splice(c,0,d),v2=(i,c,d)=>oo(c)?null:typeof d>"u"?(i.push(c),c):(d=yA(d,0,i.length),A2(i,d,c),c),kg=i=>/^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(i),Ra=i=>i.split("/").pop().split("?").shift(),$l=i=>i.split(".").pop(),C2=i=>{if(typeof i!="string")return"";const c=i.split("/").pop();return/svg/.test(c)?"svg":/zip|compressed/.test(c)?"zip":/plain/.test(c)?"txt":/msword/.test(c)?"doc":/[a-z]+/.test(c)?c==="jpeg"?"jpg":c:""},pa=(i,c="")=>(c+i).slice(-c.length),EA=(i=new Date)=>`${i.getFullYear()}-${pa(i.getMonth()+1,"00")}-${pa(i.getDate(),"00")}_${pa(i.getHours(),"00")}-${pa(i.getMinutes(),"00")}-${pa(i.getSeconds(),"00")}`,hs=(i,c,d=null,h=null)=>{const g=typeof d=="string"?i.slice(0,i.size,d):i.slice(0,i.size,i.type);return g.lastModifiedDate=new Date,i._relativePath&&(g._relativePath=i._relativePath),wn(c)||(c=EA()),c&&h===null&&$l(c)?g.name=c:(h=h||C2(g.type),g.name=c+(h?"."+h:"")),g},y2=()=>window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,IA=(i,c)=>{const d=y2();if(d){const h=new d;return h.append(i),h.getBlob(c)}return new Blob([i],{type:c})},E2=(i,c)=>{const d=new ArrayBuffer(i.length),h=new Uint8Array(d);for(let g=0;g<i.length;g++)h[g]=i.charCodeAt(g);return IA(d,c)},TA=i=>(/^data:(.+);/.exec(i)||[])[1]||null,I2=i=>i.split(",")[1].replace(/\s/g,""),T2=i=>atob(I2(i)),D2=i=>{const c=TA(i),d=T2(i);return E2(d,c)},x2=(i,c,d)=>hs(D2(i),c,null,d),S2=i=>{if(!/^content-disposition:/i.test(i))return null;const c=i.split(/filename=|filename\*=.+''/).splice(1).map(d=>d.trim().replace(/^["']|[;"']{0,2}$/g,"")).filter(d=>d.length);return c.length?decodeURI(c[c.length-1]):null},M2=i=>{if(/content-length:/i.test(i)){const c=i.match(/[0-9]+/)[0];return c?parseInt(c,10):null}return null},P2=i=>/x-content-transfer-id:/i.test(i)&&(i.split(":")[1]||"").trim()||null,Vg=i=>{const c={source:null,name:null,size:null},d=i.split(`
`);for(let h of d){const g=S2(h);if(g){c.name=g;continue}const w=M2(h);if(w){c.size=w;continue}const k=P2(h);if(k){c.source=k;continue}}return c},O2=i=>{const c={source:null,complete:!1,progress:0,size:null,timestamp:null,duration:0,request:null},d=()=>c.progress,h=()=>{c.request&&c.request.abort&&c.request.abort()},g=()=>{const y=c.source;k.fire("init",y),y instanceof File?k.fire("load",y):y instanceof Blob?k.fire("load",hs(y,y.name)):kg(y)?k.fire("load",x2(y)):w(y)},w=y=>{if(!i){k.fire("error",{type:"error",body:"Can't load URL",code:400});return}c.timestamp=Date.now(),c.request=i(y,b=>{c.duration=Date.now()-c.timestamp,c.complete=!0,b instanceof Blob&&(b=hs(b,b.name||Ra(y))),k.fire("load",b instanceof Blob?b:b?b.body:null)},b=>{k.fire("error",typeof b=="string"?{type:"error",code:0,body:b}:b)},(b,I,E)=>{if(E&&(c.size=E),c.duration=Date.now()-c.timestamp,!b){c.progress=null;return}c.progress=I/E,k.fire("progress",c.progress)},()=>{k.fire("abort")},b=>{const I=Vg(typeof b=="string"?b:b.headers);k.fire("meta",{size:c.size||I.size,filename:I.name,source:I.source})})},k={...Yl(),setSource:y=>c.source=y,getProgress:d,abort:h,load:g};return k},d0=i=>/GET|HEAD/.test(i),mr=(i,c,d)=>{const h={onheaders:()=>{},onprogress:()=>{},onload:()=>{},ontimeout:()=>{},onerror:()=>{},onabort:()=>{},abort:()=>{g=!0,k.abort()}};let g=!1,w=!1;d={method:"POST",headers:{},withCredentials:!1,...d},c=encodeURI(c),d0(d.method)&&i&&(c=`${c}${encodeURIComponent(typeof i=="string"?i:JSON.stringify(i))}`);const k=new XMLHttpRequest,y=d0(d.method)?k:k.upload;return y.onprogress=b=>{g||h.onprogress(b.lengthComputable,b.loaded,b.total)},k.onreadystatechange=()=>{k.readyState<2||k.readyState===4&&k.status===0||w||(w=!0,h.onheaders(k))},k.onload=()=>{k.status>=200&&k.status<300?h.onload(k):h.onerror(k)},k.onerror=()=>h.onerror(k),k.onabort=()=>{g=!0,h.onabort()},k.ontimeout=()=>h.ontimeout(k),k.open(d.method,c,!0),ms(d.timeout)&&(k.timeout=d.timeout),Object.keys(d.headers).forEach(b=>{const I=unescape(encodeURIComponent(d.headers[b]));k.setRequestHeader(b,I)}),d.responseType&&(k.responseType=d.responseType),d.withCredentials&&(k.withCredentials=!0),k.send(i),h},St=(i,c,d,h)=>({type:i,code:c,body:d,headers:h}),fr=i=>c=>{i(St("error",0,"Timeout",c.getAllResponseHeaders()))},u0=i=>/\?/.test(i),ya=(...i)=>{let c="";return i.forEach(d=>{c+=u0(c)&&u0(d)?d.replace(/\?/,"&"):d}),c},eg=(i="",c)=>{if(typeof c=="function")return c;if(!c||!wn(c.url))return null;const d=c.onload||(g=>g),h=c.onerror||(g=>null);return(g,w,k,y,b,I)=>{const E=mr(g,ya(i,c.url),{...c,responseType:"blob"});return E.onload=x=>{const C=x.getAllResponseHeaders(),P=Vg(C).name||Ra(g);w(St("load",x.status,c.method==="HEAD"?null:hs(d(x.response),P),C))},E.onerror=x=>{k(St("error",x.status,h(x.response)||x.statusText,x.getAllResponseHeaders()))},E.onheaders=x=>{I(St("headers",x.status,null,x.getAllResponseHeaders()))},E.ontimeout=fr(k),E.onprogress=y,E.onabort=b,E}},Xn={QUEUED:0,COMPLETE:1,PROCESSING:2,ERROR:3,WAITING:4},R2=(i,c,d,h,g,w,k,y,b,I,E)=>{const x=[],{chunkTransferId:C,chunkServer:P,chunkSize:R,chunkRetryDelays:U}=E,G={serverId:C,aborted:!1},W=c.ondata||(ie=>ie),F=c.onload||((ie,be)=>be==="HEAD"?ie.getResponseHeader("Upload-Offset"):ie.response),H=c.onerror||(ie=>null),J=ie=>{const be=new FormData;en(g)&&be.append(d,JSON.stringify(g));const Q=typeof c.headers=="function"?c.headers(h,g):{...c.headers,"Upload-Length":h.size},Z={...c,headers:Q},ke=mr(W(be),ya(i,c.url),Z);ke.onload=_e=>ie(F(_e,Z.method)),ke.onerror=_e=>k(St("error",_e.status,H(_e.response)||_e.statusText,_e.getAllResponseHeaders())),ke.ontimeout=fr(k)},ee=ie=>{const be=ya(i,P.url,G.serverId),Z={headers:typeof c.headers=="function"?c.headers(G.serverId):{...c.headers},method:"HEAD"},ke=mr(null,be,Z);ke.onload=_e=>ie(F(_e,Z.method)),ke.onerror=_e=>k(St("error",_e.status,H(_e.response)||_e.statusText,_e.getAllResponseHeaders())),ke.ontimeout=fr(k)},se=Math.floor(h.size/R);for(let ie=0;ie<=se;ie++){const be=ie*R,Q=h.slice(be,be+R,"application/offset+octet-stream");x[ie]={index:ie,size:Q.size,offset:be,data:Q,file:h,progress:0,retries:[...U],status:Xn.QUEUED,error:null,request:null,timeout:null}}const te=()=>w(G.serverId),q=ie=>ie.status===Xn.QUEUED||ie.status===Xn.ERROR,ne=ie=>{if(G.aborted)return;if(ie=ie||x.find(q),!ie){x.every(Me=>Me.status===Xn.COMPLETE)&&te();return}ie.status=Xn.PROCESSING,ie.progress=null;const be=P.ondata||(Me=>Me),Q=P.onerror||(Me=>null),Z=ya(i,P.url,G.serverId),ke=typeof P.headers=="function"?P.headers(ie):{...P.headers,"Content-Type":"application/offset+octet-stream","Upload-Offset":ie.offset,"Upload-Length":h.size,"Upload-Name":h.name},_e=ie.request=mr(be(ie.data),Z,{...P,headers:ke});_e.onload=()=>{ie.status=Xn.COMPLETE,ie.request=null,z()},_e.onprogress=(Me,ye,lt)=>{ie.progress=Me?ye:null,de()},_e.onerror=Me=>{ie.status=Xn.ERROR,ie.request=null,ie.error=Q(Me.response)||Me.statusText,fe(ie)||k(St("error",Me.status,Q(Me.response)||Me.statusText,Me.getAllResponseHeaders()))},_e.ontimeout=Me=>{ie.status=Xn.ERROR,ie.request=null,fe(ie)||fr(k)(Me)},_e.onabort=()=>{ie.status=Xn.QUEUED,ie.request=null,b()}},fe=ie=>ie.retries.length===0?!1:(ie.status=Xn.WAITING,clearTimeout(ie.timeout),ie.timeout=setTimeout(()=>{ne(ie)},ie.retries.shift()),!0),de=()=>{const ie=x.reduce((Q,Z)=>Q===null||Z.progress===null?null:Q+Z.progress,0);if(ie===null)return y(!1,0,0);const be=x.reduce((Q,Z)=>Q+Z.size,0);y(!0,ie,be)},z=()=>{x.filter(be=>be.status===Xn.PROCESSING).length>=1||ne()},Ce=()=>{x.forEach(ie=>{clearTimeout(ie.timeout),ie.request&&ie.request.abort()})};return G.serverId?ee(ie=>{G.aborted||(x.filter(be=>be.offset<ie).forEach(be=>{be.status=Xn.COMPLETE,be.progress=be.size}),z())}):J(ie=>{G.aborted||(I(ie),G.serverId=ie,z())}),{abort:()=>{G.aborted=!0,Ce()}}},N2=(i,c,d,h)=>(g,w,k,y,b,I,E)=>{if(!g)return;const x=h.chunkUploads,C=x&&g.size>h.chunkSize,P=x&&(C||h.chunkForce);if(g instanceof Blob&&P)return R2(i,c,d,g,w,k,y,b,I,E,h);const R=c.ondata||(ee=>ee),U=c.onload||(ee=>ee),G=c.onerror||(ee=>null),W=typeof c.headers=="function"?c.headers(g,w)||{}:{...c.headers},F={...c,headers:W};var H=new FormData;en(w)&&H.append(d,JSON.stringify(w)),(g instanceof Blob?[{name:null,file:g}]:g).forEach(ee=>{H.append(d,ee.file,ee.name===null?ee.file.name:`${ee.name}${ee.file.name}`)});const J=mr(R(H),ya(i,c.url),F);return J.onload=ee=>{k(St("load",ee.status,U(ee.response),ee.getAllResponseHeaders()))},J.onerror=ee=>{y(St("error",ee.status,G(ee.response)||ee.statusText,ee.getAllResponseHeaders()))},J.ontimeout=fr(y),J.onprogress=b,J.onabort=I,J},L2=(i="",c,d,h)=>typeof c=="function"?(...g)=>c(d,...g,h):!c||!wn(c.url)?null:N2(i,c,d,h),ba=(i="",c)=>{if(typeof c=="function")return c;if(!c||!wn(c.url))return(g,w)=>w();const d=c.onload||(g=>g),h=c.onerror||(g=>null);return(g,w,k)=>{const y=mr(g,i+c.url,c);return y.onload=b=>{w(St("load",b.status,d(b.response),b.getAllResponseHeaders()))},y.onerror=b=>{k(St("error",b.status,h(b.response)||b.statusText,b.getAllResponseHeaders()))},y.ontimeout=fr(k),y}},DA=(i=0,c=1)=>i+Math.random()*(c-i),B2=(i,c=1e3,d=0,h=25,g=250)=>{let w=null;const k=Date.now(),y=()=>{let b=Date.now()-k,I=DA(h,g);b+I>c&&(I=b+I-c);let E=b/c;if(E>=1||document.hidden){i(1);return}i(E),w=setTimeout(y,I)};return c>0&&y(),{clear:()=>{clearTimeout(w)}}},z2=(i,c)=>{const d={complete:!1,perceivedProgress:0,perceivedPerformanceUpdater:null,progress:null,timestamp:null,perceivedDuration:0,duration:0,request:null,response:null},{allowMinimumUploadDuration:h}=c,g=(E,x)=>{const C=()=>{d.duration===0||d.progress===null||I.fire("progress",I.getProgress())},P=()=>{d.complete=!0,I.fire("load-perceived",d.response.body)};I.fire("start"),d.timestamp=Date.now(),d.perceivedPerformanceUpdater=B2(R=>{d.perceivedProgress=R,d.perceivedDuration=Date.now()-d.timestamp,C(),d.response&&d.perceivedProgress===1&&!d.complete&&P()},h?DA(750,1500):0),d.request=i(E,x,R=>{d.response=en(R)?R:{type:"load",code:200,body:`${R}`,headers:{}},d.duration=Date.now()-d.timestamp,d.progress=1,I.fire("load",d.response.body),(!h||h&&d.perceivedProgress===1)&&P()},R=>{d.perceivedPerformanceUpdater.clear(),I.fire("error",en(R)?R:{type:"error",code:0,body:`${R}`})},(R,U,G)=>{d.duration=Date.now()-d.timestamp,d.progress=R?U/G:null,C()},()=>{d.perceivedPerformanceUpdater.clear(),I.fire("abort",d.response?d.response.body:null)},R=>{I.fire("transfer",R)})},w=()=>{!d.request||(d.perceivedPerformanceUpdater.clear(),d.request.abort&&d.request.abort(),d.complete=!0)},k=()=>{w(),d.complete=!1,d.perceivedProgress=0,d.progress=0,d.timestamp=null,d.perceivedDuration=0,d.duration=0,d.request=null,d.response=null},y=h?()=>d.progress?Math.min(d.progress,d.perceivedProgress):null:()=>d.progress||null,b=h?()=>Math.min(d.duration,d.perceivedDuration):()=>d.duration,I={...Yl(),process:g,abort:w,getProgress:y,getDuration:b,reset:k};return I},xA=i=>i.substring(0,i.lastIndexOf("."))||i,F2=i=>{let c=[i.name,i.size,i.type];return i instanceof Blob||kg(i)?c[0]=i.name||EA():kg(i)?(c[1]=i.length,c[2]=TA(i)):wn(i)&&(c[0]=Ra(i),c[1]=0,c[2]="application/octet-stream"),{name:c[0],size:c[1],type:c[2]}},gs=i=>!!(i instanceof File||i instanceof Blob&&i.name),SA=i=>{if(!en(i))return i;const c=Hl(i)?[]:{};for(const d in i){if(!i.hasOwnProperty(d))continue;const h=i[d];c[d]=h&&en(h)?SA(h):h}return c},j2=(i=null,c=null,d=null)=>{const h=zg(),g={archived:!1,frozen:!1,released:!1,source:null,file:d,serverFileReference:c,transferId:null,processingAborted:!1,status:c?Le.PROCESSING_COMPLETE:Le.INIT,activeLoader:null,activeProcessor:null};let w=null;const k={},y=q=>g.status=q,b=(q,...ne)=>{g.released||g.frozen||se.fire(q,...ne)},I=()=>$l(g.file.name),E=()=>g.file.type,x=()=>g.file.size,C=()=>g.file,P=(q,ne,fe)=>{if(g.source=q,se.fireSync("init"),g.file){se.fireSync("load-skip");return}g.file=F2(q),ne.on("init",()=>{b("load-init")}),ne.on("meta",de=>{g.file.size=de.size,g.file.filename=de.filename,de.source&&(i=Jt.LIMBO,g.serverFileReference=de.source,g.status=Le.PROCESSING_COMPLETE),b("load-meta")}),ne.on("progress",de=>{y(Le.LOADING),b("load-progress",de)}),ne.on("error",de=>{y(Le.LOAD_ERROR),b("load-request-error",de)}),ne.on("abort",()=>{y(Le.INIT),b("load-abort")}),ne.on("load",de=>{g.activeLoader=null;const z=ie=>{g.file=gs(ie)?ie:g.file,i===Jt.LIMBO&&g.serverFileReference?y(Le.PROCESSING_COMPLETE):y(Le.IDLE),b("load")},Ce=ie=>{g.file=de,b("load-meta"),y(Le.LOAD_ERROR),b("load-file-error",ie)};if(g.serverFileReference){z(de);return}fe(de,z,Ce)}),ne.setSource(q),g.activeLoader=ne,ne.load()},R=()=>{!g.activeLoader||g.activeLoader.load()},U=()=>{if(g.activeLoader){g.activeLoader.abort();return}y(Le.INIT),b("load-abort")},G=(q,ne)=>{if(g.processingAborted){g.processingAborted=!1;return}if(y(Le.PROCESSING),w=null,!(g.file instanceof Blob)){se.on("load",()=>{G(q,ne)});return}q.on("load",z=>{g.transferId=null,g.serverFileReference=z}),q.on("transfer",z=>{g.transferId=z}),q.on("load-perceived",z=>{g.activeProcessor=null,g.transferId=null,g.serverFileReference=z,y(Le.PROCESSING_COMPLETE),b("process-complete",z)}),q.on("start",()=>{b("process-start")}),q.on("error",z=>{g.activeProcessor=null,y(Le.PROCESSING_ERROR),b("process-error",z)}),q.on("abort",z=>{g.activeProcessor=null,g.serverFileReference=z,y(Le.IDLE),b("process-abort"),w&&w()}),q.on("progress",z=>{b("process-progress",z)});const fe=z=>{g.archived||q.process(z,{...k})},de=console.error;ne(g.file,fe,de),g.activeProcessor=q},W=()=>{g.processingAborted=!1,y(Le.PROCESSING_QUEUED)},F=()=>new Promise(q=>{if(!g.activeProcessor){g.processingAborted=!0,y(Le.IDLE),b("process-abort"),q();return}w=()=>{q()},g.activeProcessor.abort()}),H=(q,ne)=>new Promise((fe,de)=>{const z=g.serverFileReference!==null?g.serverFileReference:g.transferId;if(z===null){fe();return}q(z,()=>{g.serverFileReference=null,g.transferId=null,fe()},Ce=>{if(!ne){fe();return}y(Le.PROCESSING_REVERT_ERROR),b("process-revert-error"),de(Ce)}),y(Le.IDLE),b("process-revert")}),J=(q,ne,fe)=>{const de=q.split("."),z=de[0],Ce=de.pop();let ie=k;de.forEach(be=>ie=ie[be]),JSON.stringify(ie[Ce])!==JSON.stringify(ne)&&(ie[Ce]=ne,b("metadata-update",{key:z,value:k[z],silent:fe}))},se={id:{get:()=>h},origin:{get:()=>i,set:q=>i=q},serverId:{get:()=>g.serverFileReference},transferId:{get:()=>g.transferId},status:{get:()=>g.status},filename:{get:()=>g.file.name},filenameWithoutExtension:{get:()=>xA(g.file.name)},fileExtension:{get:I},fileType:{get:E},fileSize:{get:x},file:{get:C},relativePath:{get:()=>g.file._relativePath},source:{get:()=>g.source},getMetadata:q=>SA(q?k[q]:k),setMetadata:(q,ne,fe)=>{if(en(q)){const de=q;return Object.keys(de).forEach(z=>{J(z,de[z],ne)}),q}return J(q,ne,fe),ne},extend:(q,ne)=>te[q]=ne,abortLoad:U,retryLoad:R,requestProcessing:W,abortProcessing:F,load:P,process:G,revert:H,...Yl(),freeze:()=>g.frozen=!0,release:()=>g.released=!0,released:{get:()=>g.released},archive:()=>g.archived=!0,archived:{get:()=>g.archived}},te=zo(se);return te},V2=(i,c)=>oo(c)?0:wn(c)?i.findIndex(d=>d.id===c):-1,h0=(i,c)=>{const d=V2(i,c);if(!(d<0))return i[d]||null},g0=(i,c,d,h,g,w)=>{const k=mr(null,i,{method:"GET",responseType:"blob"});return k.onload=y=>{const b=y.getAllResponseHeaders(),I=Vg(b).name||Ra(i);c(St("load",y.status,hs(y.response,I),b))},k.onerror=y=>{d(St("error",y.status,y.statusText,y.getAllResponseHeaders()))},k.onheaders=y=>{w(St("headers",y.status,null,y.getAllResponseHeaders()))},k.ontimeout=fr(d),k.onprogress=h,k.onabort=g,k},m0=i=>(i.indexOf("//")===0&&(i=location.protocol+i),i.toLowerCase().replace("blob:","").replace(/([a-z])?:\/\//,"$1").split("/")[0]),U2=i=>(i.indexOf(":")>-1||i.indexOf("//")>-1)&&m0(location.href)!==m0(i),hl=i=>(...c)=>ur(i)?i(...c):i,H2=i=>!gs(i.file),tg=(i,c)=>{clearTimeout(c.listUpdateTimeout),c.listUpdateTimeout=setTimeout(()=>{i("DID_UPDATE_ITEMS",{items:gi(c.items)})},0)},f0=(i,...c)=>new Promise(d=>{if(!i)return d(!0);const h=i(...c);if(h==null)return d(!0);if(typeof h=="boolean")return d(h);typeof h.then=="function"&&h.then(d)}),ng=(i,c)=>{i.items.sort((d,h)=>c(Tn(d),Tn(h)))},Jn=(i,c)=>({query:d,success:h=()=>{},failure:g=()=>{},...w}={})=>{const k=hr(i.items,d);if(!k){g({error:St("error",0,"Item not found"),file:null});return}c(k,h,g,w||{})},G2=(i,c,d)=>({ABORT_ALL:()=>{gi(d.items).forEach(h=>{h.freeze(),h.abortLoad(),h.abortProcessing()})},DID_SET_FILES:({value:h=[]})=>{const g=h.map(k=>({source:k.source?k.source:k,options:k.options}));let w=gi(d.items);w.forEach(k=>{g.find(y=>y.source===k.source||y.source===k.file)||i("REMOVE_ITEM",{query:k,remove:!1})}),w=gi(d.items),g.forEach((k,y)=>{w.find(b=>b.source===k.source||b.file===k.source)||i("ADD_ITEM",{...k,interactionMethod:ni.NONE,index:y})})},DID_UPDATE_ITEM_METADATA:({id:h,action:g,change:w})=>{w.silent||(clearTimeout(d.itemUpdateTimeout),d.itemUpdateTimeout=setTimeout(()=>{const k=h0(d.items,h);if(!c("IS_ASYNC")){ui("SHOULD_PREPARE_OUTPUT",!1,{item:k,query:c,action:g,change:w}).then(E=>{const x=c("GET_BEFORE_PREPARE_FILE");x&&(E=x(k,E)),E&&i("REQUEST_PREPARE_OUTPUT",{query:h,item:k,success:C=>{i("DID_PREPARE_OUTPUT",{id:h,file:C})}},!0)});return}k.origin===Jt.LOCAL&&i("DID_LOAD_ITEM",{id:k.id,error:null,serverFileReference:k.source});const y=()=>{setTimeout(()=>{i("REQUEST_ITEM_PROCESSING",{query:h})},32)},b=E=>{k.revert(ba(d.options.server.url,d.options.server.revert),c("GET_FORCE_REVERT")).then(E?y:()=>{}).catch(()=>{})},I=E=>{k.abortProcessing().then(E?y:()=>{})};if(k.status===Le.PROCESSING_COMPLETE)return b(d.options.instantUpload);if(k.status===Le.PROCESSING)return I(d.options.instantUpload);d.options.instantUpload&&y()},0))},MOVE_ITEM:({query:h,index:g})=>{const w=hr(d.items,h);if(!w)return;const k=d.items.indexOf(w);g=yA(g,0,d.items.length-1),k!==g&&d.items.splice(g,0,d.items.splice(k,1)[0])},SORT:({compare:h})=>{ng(d,h),i("DID_SORT_ITEMS",{items:c("GET_ACTIVE_ITEMS")})},ADD_ITEMS:({items:h,index:g,interactionMethod:w,success:k=()=>{},failure:y=()=>{}})=>{let b=g;if(g===-1||typeof g>"u"){const P=c("GET_ITEM_INSERT_LOCATION"),R=c("GET_TOTAL_ITEMS");b=P==="before"?0:R}const I=c("GET_IGNORED_FILES"),E=P=>gs(P)?!I.includes(P.name.toLowerCase()):!oo(P),C=h.filter(E).map(P=>new Promise((R,U)=>{i("ADD_ITEM",{interactionMethod:w,source:P.source||P,success:R,failure:U,index:b++,options:P.options||{}})}));Promise.all(C).then(k).catch(y)},ADD_ITEM:({source:h,index:g=-1,interactionMethod:w,success:k=()=>{},failure:y=()=>{},options:b={}})=>{if(oo(h)){y({error:St("error",0,"No source"),file:null});return}if(gs(h)&&d.options.ignoredFiles.includes(h.name.toLowerCase()))return;if(!_2(d)){if(d.options.allowMultiple||!d.options.allowMultiple&&!d.options.allowReplace){const F=St("warning",0,"Max files");i("DID_THROW_MAX_FILES",{source:h,error:F}),y({error:F,file:null});return}const W=gi(d.items)[0];if(W.status===Le.PROCESSING_COMPLETE||W.status===Le.PROCESSING_REVERT_ERROR){const F=c("GET_FORCE_REVERT");if(W.revert(ba(d.options.server.url,d.options.server.revert),F).then(()=>{!F||i("ADD_ITEM",{source:h,index:g,interactionMethod:w,success:k,failure:y,options:b})}).catch(()=>{}),F)return}i("REMOVE_ITEM",{query:W.id})}const I=b.type==="local"?Jt.LOCAL:b.type==="limbo"?Jt.LIMBO:Jt.INPUT,E=j2(I,I===Jt.INPUT?null:h,b.file);Object.keys(b.metadata||{}).forEach(W=>{E.setMetadata(W,b.metadata[W])}),kr("DID_CREATE_ITEM",E,{query:c,dispatch:i});const x=c("GET_ITEM_INSERT_LOCATION");d.options.itemInsertLocationFreedom||(g=x==="before"?-1:d.items.length),v2(d.items,E,g),ur(x)&&h&&ng(d,x);const C=E.id;E.on("init",()=>{i("DID_INIT_ITEM",{id:C})}),E.on("load-init",()=>{i("DID_START_ITEM_LOAD",{id:C})}),E.on("load-meta",()=>{i("DID_UPDATE_ITEM_META",{id:C})}),E.on("load-progress",W=>{i("DID_UPDATE_ITEM_LOAD_PROGRESS",{id:C,progress:W})}),E.on("load-request-error",W=>{const F=hl(d.options.labelFileLoadError)(W);if(W.code>=400&&W.code<500){i("DID_THROW_ITEM_INVALID",{id:C,error:W,status:{main:F,sub:`${W.code} (${W.body})`}}),y({error:W,file:Tn(E)});return}i("DID_THROW_ITEM_LOAD_ERROR",{id:C,error:W,status:{main:F,sub:d.options.labelTapToRetry}})}),E.on("load-file-error",W=>{i("DID_THROW_ITEM_INVALID",{id:C,error:W.status,status:W.status}),y({error:W.status,file:Tn(E)})}),E.on("load-abort",()=>{i("REMOVE_ITEM",{query:C})}),E.on("load-skip",()=>{i("COMPLETE_LOAD_ITEM",{query:C,item:E,data:{source:h,success:k}})}),E.on("load",()=>{const W=F=>{if(!F){i("REMOVE_ITEM",{query:C});return}E.on("metadata-update",H=>{i("DID_UPDATE_ITEM_METADATA",{id:C,change:H})}),ui("SHOULD_PREPARE_OUTPUT",!1,{item:E,query:c}).then(H=>{const J=c("GET_BEFORE_PREPARE_FILE");J&&(H=J(E,H));const ee=()=>{i("COMPLETE_LOAD_ITEM",{query:C,item:E,data:{source:h,success:k}}),tg(i,d)};if(H){i("REQUEST_PREPARE_OUTPUT",{query:C,item:E,success:se=>{i("DID_PREPARE_OUTPUT",{id:C,file:se}),ee()}},!0);return}ee()})};ui("DID_LOAD_ITEM",E,{query:c,dispatch:i}).then(()=>{f0(c("GET_BEFORE_ADD_FILE"),Tn(E)).then(W)}).catch(F=>{if(!F||!F.error||!F.status)return W(!1);i("DID_THROW_ITEM_INVALID",{id:C,error:F.error,status:F.status})})}),E.on("process-start",()=>{i("DID_START_ITEM_PROCESSING",{id:C})}),E.on("process-progress",W=>{i("DID_UPDATE_ITEM_PROCESS_PROGRESS",{id:C,progress:W})}),E.on("process-error",W=>{i("DID_THROW_ITEM_PROCESSING_ERROR",{id:C,error:W,status:{main:hl(d.options.labelFileProcessingError)(W),sub:d.options.labelTapToRetry}})}),E.on("process-revert-error",W=>{i("DID_THROW_ITEM_PROCESSING_REVERT_ERROR",{id:C,error:W,status:{main:hl(d.options.labelFileProcessingRevertError)(W),sub:d.options.labelTapToRetry}})}),E.on("process-complete",W=>{i("DID_COMPLETE_ITEM_PROCESSING",{id:C,error:null,serverFileReference:W}),i("DID_DEFINE_VALUE",{id:C,value:W})}),E.on("process-abort",()=>{i("DID_ABORT_ITEM_PROCESSING",{id:C})}),E.on("process-revert",()=>{i("DID_REVERT_ITEM_PROCESSING",{id:C}),i("DID_DEFINE_VALUE",{id:C,value:null})}),i("DID_ADD_ITEM",{id:C,index:g,interactionMethod:w}),tg(i,d);const{url:P,load:R,restore:U,fetch:G}=d.options.server||{};E.load(h,O2(I===Jt.INPUT?wn(h)&&U2(h)&&G?eg(P,G):g0:I===Jt.LIMBO?eg(P,U):eg(P,R)),(W,F,H)=>{ui("LOAD_FILE",W,{query:c}).then(F).catch(H)})},REQUEST_PREPARE_OUTPUT:({item:h,success:g,failure:w=()=>{}})=>{const k={error:St("error",0,"Item not found"),file:null};if(h.archived)return w(k);ui("PREPARE_OUTPUT",h.file,{query:c,item:h}).then(y=>{ui("COMPLETE_PREPARE_OUTPUT",y,{query:c,item:h}).then(b=>{if(h.archived)return w(k);g(b)})})},COMPLETE_LOAD_ITEM:({item:h,data:g})=>{const{success:w,source:k}=g,y=c("GET_ITEM_INSERT_LOCATION");if(ur(y)&&k&&ng(d,y),i("DID_LOAD_ITEM",{id:h.id,error:null,serverFileReference:h.origin===Jt.INPUT?null:k}),w(Tn(h)),h.origin===Jt.LOCAL){i("DID_LOAD_LOCAL_ITEM",{id:h.id});return}if(h.origin===Jt.LIMBO){i("DID_COMPLETE_ITEM_PROCESSING",{id:h.id,error:null,serverFileReference:k}),i("DID_DEFINE_VALUE",{id:h.id,value:h.serverId||k});return}c("IS_ASYNC")&&d.options.instantUpload&&i("REQUEST_ITEM_PROCESSING",{query:h.id})},RETRY_ITEM_LOAD:Jn(d,h=>{h.retryLoad()}),REQUEST_ITEM_PREPARE:Jn(d,(h,g,w)=>{i("REQUEST_PREPARE_OUTPUT",{query:h.id,item:h,success:k=>{i("DID_PREPARE_OUTPUT",{id:h.id,file:k}),g({file:h,output:k})},failure:w},!0)}),REQUEST_ITEM_PROCESSING:Jn(d,(h,g,w)=>{if(!(h.status===Le.IDLE||h.status===Le.PROCESSING_ERROR)){const y=()=>i("REQUEST_ITEM_PROCESSING",{query:h,success:g,failure:w}),b=()=>document.hidden?y():setTimeout(y,32);h.status===Le.PROCESSING_COMPLETE||h.status===Le.PROCESSING_REVERT_ERROR?h.revert(ba(d.options.server.url,d.options.server.revert),c("GET_FORCE_REVERT")).then(b).catch(()=>{}):h.status===Le.PROCESSING&&h.abortProcessing().then(b);return}h.status!==Le.PROCESSING_QUEUED&&(h.requestProcessing(),i("DID_REQUEST_ITEM_PROCESSING",{id:h.id}),i("PROCESS_ITEM",{query:h,success:g,failure:w},!0))}),PROCESS_ITEM:Jn(d,(h,g,w)=>{const k=c("GET_MAX_PARALLEL_UPLOADS");if(c("GET_ITEMS_BY_STATUS",Le.PROCESSING).length===k){d.processingQueue.push({id:h.id,success:g,failure:w});return}if(h.status===Le.PROCESSING)return;const b=()=>{const E=d.processingQueue.shift();if(!E)return;const{id:x,success:C,failure:P}=E,R=hr(d.items,x);if(!R||R.archived){b();return}i("PROCESS_ITEM",{query:x,success:C,failure:P},!0)};h.onOnce("process-complete",()=>{g(Tn(h)),b();const E=d.options.server;if(d.options.instantUpload&&h.origin===Jt.LOCAL&&ur(E.remove)){const P=()=>{};h.origin=Jt.LIMBO,d.options.server.remove(h.source,P,P)}c("GET_ITEMS_BY_STATUS",Le.PROCESSING_COMPLETE).length===d.items.length&&i("DID_COMPLETE_ITEM_PROCESSING_ALL")}),h.onOnce("process-error",E=>{w({error:E,file:Tn(h)}),b()});const I=d.options;h.process(z2(L2(I.server.url,I.server.process,I.name,{chunkTransferId:h.transferId,chunkServer:I.server.patch,chunkUploads:I.chunkUploads,chunkForce:I.chunkForce,chunkSize:I.chunkSize,chunkRetryDelays:I.chunkRetryDelays}),{allowMinimumUploadDuration:c("GET_ALLOW_MINIMUM_UPLOAD_DURATION")}),(E,x,C)=>{ui("PREPARE_OUTPUT",E,{query:c,item:h}).then(P=>{i("DID_PREPARE_OUTPUT",{id:h.id,file:P}),x(P)}).catch(C)})}),RETRY_ITEM_PROCESSING:Jn(d,h=>{i("REQUEST_ITEM_PROCESSING",{query:h})}),REQUEST_REMOVE_ITEM:Jn(d,h=>{f0(c("GET_BEFORE_REMOVE_FILE"),Tn(h)).then(g=>{!g||i("REMOVE_ITEM",{query:h})})}),RELEASE_ITEM:Jn(d,h=>{h.release()}),REMOVE_ITEM:Jn(d,(h,g,w,k)=>{const y=()=>{const I=h.id;h0(d.items,I).archive(),i("DID_REMOVE_ITEM",{error:null,id:I,item:h}),tg(i,d),g(Tn(h))},b=d.options.server;h.origin===Jt.LOCAL&&b&&ur(b.remove)&&k.remove!==!1?(i("DID_START_ITEM_REMOVE",{id:h.id}),b.remove(h.source,()=>y(),I=>{i("DID_THROW_ITEM_REMOVE_ERROR",{id:h.id,error:St("error",0,I,null),status:{main:hl(d.options.labelFileRemoveError)(I),sub:d.options.labelTapToRetry}})})):((k.revert&&h.origin!==Jt.LOCAL&&h.serverId!==null||d.options.chunkUploads&&h.file.size>d.options.chunkSize||d.options.chunkUploads&&d.options.chunkForce)&&h.revert(ba(d.options.server.url,d.options.server.revert),c("GET_FORCE_REVERT")),y())}),ABORT_ITEM_LOAD:Jn(d,h=>{h.abortLoad()}),ABORT_ITEM_PROCESSING:Jn(d,h=>{if(h.serverId){i("REVERT_ITEM_PROCESSING",{id:h.id});return}h.abortProcessing().then(()=>{d.options.instantUpload&&i("REMOVE_ITEM",{query:h.id})})}),REQUEST_REVERT_ITEM_PROCESSING:Jn(d,h=>{if(!d.options.instantUpload){i("REVERT_ITEM_PROCESSING",{query:h});return}const g=y=>{!y||i("REVERT_ITEM_PROCESSING",{query:h})},w=c("GET_BEFORE_REMOVE_FILE");if(!w)return g(!0);const k=w(Tn(h));if(k==null)return g(!0);if(typeof k=="boolean")return g(k);typeof k.then=="function"&&k.then(g)}),REVERT_ITEM_PROCESSING:Jn(d,h=>{h.revert(ba(d.options.server.url,d.options.server.revert),c("GET_FORCE_REVERT")).then(()=>{(d.options.instantUpload||H2(h))&&i("REMOVE_ITEM",{query:h.id})}).catch(()=>{})}),SET_OPTIONS:({options:h})=>{const g=Object.keys(h),w=W2.filter(y=>g.includes(y));[...w,...Object.keys(h).filter(y=>!w.includes(y))].forEach(y=>{i(`SET_${Wl(y,"_").toUpperCase()}`,{value:h[y]})})}}),W2=["server"],Ug=i=>i,ro=i=>document.createElement(i),Mt=(i,c)=>{let d=i.childNodes[0];d?c!==d.nodeValue&&(d.nodeValue=c):(d=document.createTextNode(c),i.appendChild(d))},p0=(i,c,d,h)=>{const g=(h%360-90)*Math.PI/180;return{x:i+d*Math.cos(g),y:c+d*Math.sin(g)}},Y2=(i,c,d,h,g,w)=>{const k=p0(i,c,d,g),y=p0(i,c,d,h);return["M",k.x,k.y,"A",d,d,0,w,0,y.x,y.y].join(" ")},$2=(i,c,d,h,g)=>{let w=1;return g>h&&g-h<=.5&&(w=0),h>g&&h-g>=.5&&(w=0),Y2(i,c,d,Math.min(.9999,h)*360,Math.min(.9999,g)*360,w)},q2=({root:i,props:c})=>{c.spin=!1,c.progress=0,c.opacity=0;const d=Ml("svg");i.ref.path=Ml("path",{"stroke-width":2,"stroke-linecap":"round"}),d.appendChild(i.ref.path),i.ref.svg=d,i.appendChild(d)},K2=({root:i,props:c})=>{if(c.opacity===0)return;c.align&&(i.element.dataset.align=c.align);const d=parseInt(Bt(i.ref.path,"stroke-width"),10),h=i.rect.element.width*.5;let g=0,w=0;c.spin?(g=0,w=.5):(g=0,w=c.progress);const k=$2(h,h,h-d,g,w);Bt(i.ref.path,"d",k),Bt(i.ref.path,"stroke-opacity",c.spin||c.progress>0?1:0)},b0=zt({tag:"div",name:"progress-indicator",ignoreRectUpdate:!0,ignoreRect:!0,create:q2,write:K2,mixins:{apis:["progress","spin","align"],styles:["opacity"],animations:{opacity:{type:"tween",duration:500},progress:{type:"spring",stiffness:.95,damping:.65,mass:10}}}}),Q2=({root:i,props:c})=>{i.element.innerHTML=(c.icon||"")+`<span>${c.label}</span>`,c.isDisabled=!1},Z2=({root:i,props:c})=>{const{isDisabled:d}=c,h=i.query("GET_DISABLED")||c.opacity===0;h&&!d?(c.isDisabled=!0,Bt(i.element,"disabled","disabled")):!h&&d&&(c.isDisabled=!1,i.element.removeAttribute("disabled"))},MA=zt({tag:"button",attributes:{type:"button"},ignoreRect:!0,ignoreRectUpdate:!0,name:"file-action-button",mixins:{apis:["label"],styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}},listeners:!0},create:Q2,write:Z2}),PA=(i,c=".",d=1e3,h={})=>{const{labelBytes:g="bytes",labelKilobytes:w="KB",labelMegabytes:k="MB",labelGigabytes:y="GB"}=h;i=Math.round(Math.abs(i));const b=d,I=d*d,E=d*d*d;return i<b?`${i} ${g}`:i<I?`${Math.floor(i/b)} ${w}`:i<E?`${k0(i/I,1,c)} ${k}`:`${k0(i/E,2,c)} ${y}`},k0=(i,c,d)=>i.toFixed(c).split(".").filter(h=>h!=="0").join(d),X2=({root:i,props:c})=>{const d=ro("span");d.className="filepond--file-info-main",Bt(d,"aria-hidden","true"),i.appendChild(d),i.ref.fileName=d;const h=ro("span");h.className="filepond--file-info-sub",i.appendChild(h),i.ref.fileSize=h,Mt(h,i.query("GET_LABEL_FILE_WAITING_FOR_SIZE")),Mt(d,Ug(i.query("GET_ITEM_NAME",c.id)))},wg=({root:i,props:c})=>{Mt(i.ref.fileSize,PA(i.query("GET_ITEM_SIZE",c.id),".",i.query("GET_FILE_SIZE_BASE"),i.query("GET_FILE_SIZE_LABELS",i.query))),Mt(i.ref.fileName,Ug(i.query("GET_ITEM_NAME",c.id)))},w0=({root:i,props:c})=>{if(ms(i.query("GET_ITEM_SIZE",c.id))){wg({root:i,props:c});return}Mt(i.ref.fileSize,i.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"))},J2=zt({name:"file-info",ignoreRect:!0,ignoreRectUpdate:!0,write:_n({DID_LOAD_ITEM:wg,DID_UPDATE_ITEM_META:wg,DID_THROW_ITEM_LOAD_ERROR:w0,DID_THROW_ITEM_INVALID:w0}),didCreateView:i=>{kr("CREATE_VIEW",{...i,view:i})},create:X2,mixins:{styles:["translateX","translateY"],animations:{translateX:"spring",translateY:"spring"}}}),OA=i=>Math.round(i*100),e5=({root:i})=>{const c=ro("span");c.className="filepond--file-status-main",i.appendChild(c),i.ref.main=c;const d=ro("span");d.className="filepond--file-status-sub",i.appendChild(d),i.ref.sub=d,RA({root:i,action:{progress:null}})},RA=({root:i,action:c})=>{const d=c.progress===null?i.query("GET_LABEL_FILE_LOADING"):`${i.query("GET_LABEL_FILE_LOADING")} ${OA(c.progress)}%`;Mt(i.ref.main,d),Mt(i.ref.sub,i.query("GET_LABEL_TAP_TO_CANCEL"))},t5=({root:i,action:c})=>{const d=c.progress===null?i.query("GET_LABEL_FILE_PROCESSING"):`${i.query("GET_LABEL_FILE_PROCESSING")} ${OA(c.progress)}%`;Mt(i.ref.main,d),Mt(i.ref.sub,i.query("GET_LABEL_TAP_TO_CANCEL"))},n5=({root:i})=>{Mt(i.ref.main,i.query("GET_LABEL_FILE_PROCESSING")),Mt(i.ref.sub,i.query("GET_LABEL_TAP_TO_CANCEL"))},i5=({root:i})=>{Mt(i.ref.main,i.query("GET_LABEL_FILE_PROCESSING_ABORTED")),Mt(i.ref.sub,i.query("GET_LABEL_TAP_TO_RETRY"))},o5=({root:i})=>{Mt(i.ref.main,i.query("GET_LABEL_FILE_PROCESSING_COMPLETE")),Mt(i.ref.sub,i.query("GET_LABEL_TAP_TO_UNDO"))},_0=({root:i})=>{Mt(i.ref.main,""),Mt(i.ref.sub,"")},ka=({root:i,action:c})=>{Mt(i.ref.main,c.status.main),Mt(i.ref.sub,c.status.sub)},r5=zt({name:"file-status",ignoreRect:!0,ignoreRectUpdate:!0,write:_n({DID_LOAD_ITEM:_0,DID_REVERT_ITEM_PROCESSING:_0,DID_REQUEST_ITEM_PROCESSING:n5,DID_ABORT_ITEM_PROCESSING:i5,DID_COMPLETE_ITEM_PROCESSING:o5,DID_UPDATE_ITEM_PROCESS_PROGRESS:t5,DID_UPDATE_ITEM_LOAD_PROGRESS:RA,DID_THROW_ITEM_LOAD_ERROR:ka,DID_THROW_ITEM_INVALID:ka,DID_THROW_ITEM_PROCESSING_ERROR:ka,DID_THROW_ITEM_PROCESSING_REVERT_ERROR:ka,DID_THROW_ITEM_REMOVE_ERROR:ka}),didCreateView:i=>{kr("CREATE_VIEW",{...i,view:i})},create:e5,mixins:{styles:["translateX","translateY","opacity"],animations:{opacity:{type:"tween",duration:250},translateX:"spring",translateY:"spring"}}}),_g={AbortItemLoad:{label:"GET_LABEL_BUTTON_ABORT_ITEM_LOAD",action:"ABORT_ITEM_LOAD",className:"filepond--action-abort-item-load",align:"LOAD_INDICATOR_POSITION"},RetryItemLoad:{label:"GET_LABEL_BUTTON_RETRY_ITEM_LOAD",action:"RETRY_ITEM_LOAD",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-load",align:"BUTTON_PROCESS_ITEM_POSITION"},RemoveItem:{label:"GET_LABEL_BUTTON_REMOVE_ITEM",action:"REQUEST_REMOVE_ITEM",icon:"GET_ICON_REMOVE",className:"filepond--action-remove-item",align:"BUTTON_REMOVE_ITEM_POSITION"},ProcessItem:{label:"GET_LABEL_BUTTON_PROCESS_ITEM",action:"REQUEST_ITEM_PROCESSING",icon:"GET_ICON_PROCESS",className:"filepond--action-process-item",align:"BUTTON_PROCESS_ITEM_POSITION"},AbortItemProcessing:{label:"GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",action:"ABORT_ITEM_PROCESSING",className:"filepond--action-abort-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RetryItemProcessing:{label:"GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",action:"RETRY_ITEM_PROCESSING",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RevertItemProcessing:{label:"GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",action:"REQUEST_REVERT_ITEM_PROCESSING",icon:"GET_ICON_UNDO",className:"filepond--action-revert-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"}},Ag=[];yt(_g,i=>{Ag.push(i)});const zn=i=>{if(vg(i)==="right")return 0;const c=i.ref.buttonRemoveItem.rect.element;return c.hidden?null:c.width+c.left},s5=i=>i.ref.buttonAbortItemLoad.rect.element.width,gl=i=>Math.floor(i.ref.buttonRemoveItem.rect.element.height/4),a5=i=>Math.floor(i.ref.buttonRemoveItem.rect.element.left/2),c5=i=>i.query("GET_STYLE_LOAD_INDICATOR_POSITION"),l5=i=>i.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"),vg=i=>i.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION"),d5={buttonAbortItemLoad:{opacity:0},buttonRetryItemLoad:{opacity:0},buttonRemoveItem:{opacity:0},buttonProcessItem:{opacity:0},buttonAbortItemProcessing:{opacity:0},buttonRetryItemProcessing:{opacity:0},buttonRevertItemProcessing:{opacity:0},loadProgressIndicator:{opacity:0,align:c5},processProgressIndicator:{opacity:0,align:l5},processingCompleteIndicator:{opacity:0,scaleX:.75,scaleY:.75},info:{translateX:0,translateY:0,opacity:0},status:{translateX:0,translateY:0,opacity:0}},A0={buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:zn},status:{translateX:zn}},ig={buttonAbortItemProcessing:{opacity:1},processProgressIndicator:{opacity:1},status:{opacity:1}},is={DID_THROW_ITEM_INVALID:{buttonRemoveItem:{opacity:1},info:{translateX:zn},status:{translateX:zn,opacity:1}},DID_START_ITEM_LOAD:{buttonAbortItemLoad:{opacity:1},loadProgressIndicator:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_LOAD_ERROR:{buttonRetryItemLoad:{opacity:1},buttonRemoveItem:{opacity:1},info:{translateX:zn},status:{opacity:1}},DID_START_ITEM_REMOVE:{processProgressIndicator:{opacity:1,align:vg},info:{translateX:zn},status:{opacity:0}},DID_THROW_ITEM_REMOVE_ERROR:{processProgressIndicator:{opacity:0,align:vg},buttonRemoveItem:{opacity:1},info:{translateX:zn},status:{opacity:1,translateX:zn}},DID_LOAD_ITEM:A0,DID_LOAD_LOCAL_ITEM:{buttonRemoveItem:{opacity:1},info:{translateX:zn},status:{translateX:zn}},DID_START_ITEM_PROCESSING:ig,DID_REQUEST_ITEM_PROCESSING:ig,DID_UPDATE_ITEM_PROCESS_PROGRESS:ig,DID_COMPLETE_ITEM_PROCESSING:{buttonRevertItemProcessing:{opacity:1},info:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_PROCESSING_ERROR:{buttonRemoveItem:{opacity:1},buttonRetryItemProcessing:{opacity:1},status:{opacity:1},info:{translateX:zn}},DID_THROW_ITEM_PROCESSING_REVERT_ERROR:{buttonRevertItemProcessing:{opacity:1},status:{opacity:1},info:{opacity:1}},DID_ABORT_ITEM_PROCESSING:{buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:zn},status:{opacity:1}},DID_REVERT_ITEM_PROCESSING:A0},u5=zt({create:({root:i})=>{i.element.innerHTML=i.query("GET_ICON_DONE")},name:"processing-complete-indicator",ignoreRect:!0,mixins:{styles:["scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",opacity:{type:"tween",duration:250}}}}),h5=({root:i,props:c})=>{const d=Object.keys(_g).reduce((R,U)=>(R[U]={..._g[U]},R),{}),{id:h}=c,g=i.query("GET_ALLOW_REVERT"),w=i.query("GET_ALLOW_REMOVE"),k=i.query("GET_ALLOW_PROCESS"),y=i.query("GET_INSTANT_UPLOAD"),b=i.query("IS_ASYNC"),I=i.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");let E;b?k&&!g?E=R=>!/RevertItemProcessing/.test(R):!k&&g?E=R=>!/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(R):!k&&!g&&(E=R=>!/Process/.test(R)):E=R=>!/Process/.test(R);const x=E?Ag.filter(E):Ag.concat();if(y&&g&&(d.RevertItemProcessing.label="GET_LABEL_BUTTON_REMOVE_ITEM",d.RevertItemProcessing.icon="GET_ICON_REMOVE"),b&&!g){const R=is.DID_COMPLETE_ITEM_PROCESSING;R.info.translateX=a5,R.info.translateY=gl,R.status.translateY=gl,R.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1}}if(b&&!k&&(["DID_START_ITEM_PROCESSING","DID_REQUEST_ITEM_PROCESSING","DID_UPDATE_ITEM_PROCESS_PROGRESS","DID_THROW_ITEM_PROCESSING_ERROR"].forEach(R=>{is[R].status.translateY=gl}),is.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX=s5),I&&g){d.RevertItemProcessing.align="BUTTON_REMOVE_ITEM_POSITION";const R=is.DID_COMPLETE_ITEM_PROCESSING;R.info.translateX=zn,R.status.translateY=gl,R.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1}}w||(d.RemoveItem.disabled=!0),yt(d,(R,U)=>{const G=i.createChildView(MA,{label:i.query(U.label),icon:i.query(U.icon),opacity:0});x.includes(R)&&i.appendChildView(G),U.disabled&&(G.element.setAttribute("disabled","disabled"),G.element.setAttribute("hidden","hidden")),G.element.dataset.align=i.query(`GET_STYLE_${U.align}`),G.element.classList.add(U.className),G.on("click",W=>{W.stopPropagation(),!U.disabled&&i.dispatch(U.action,{query:h})}),i.ref[`button${R}`]=G}),i.ref.processingCompleteIndicator=i.appendChildView(i.createChildView(u5)),i.ref.processingCompleteIndicator.element.dataset.align=i.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"),i.ref.info=i.appendChildView(i.createChildView(J2,{id:h})),i.ref.status=i.appendChildView(i.createChildView(r5,{id:h}));const C=i.appendChildView(i.createChildView(b0,{opacity:0,align:i.query("GET_STYLE_LOAD_INDICATOR_POSITION")}));C.element.classList.add("filepond--load-indicator"),i.ref.loadProgressIndicator=C;const P=i.appendChildView(i.createChildView(b0,{opacity:0,align:i.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")}));P.element.classList.add("filepond--process-indicator"),i.ref.processProgressIndicator=P,i.ref.activeStyles=[]},g5=({root:i,actions:c,props:d})=>{m5({root:i,actions:c,props:d});let h=c.concat().filter(g=>/^DID_/.test(g.type)).reverse().find(g=>is[g.type]);if(h){i.ref.activeStyles=[];const g=is[h.type];yt(d5,(w,k)=>{const y=i.ref[w];yt(k,(b,I)=>{const E=g[w]&&typeof g[w][b]<"u"?g[w][b]:I;i.ref.activeStyles.push({control:y,key:b,value:E})})})}i.ref.activeStyles.forEach(({control:g,key:w,value:k})=>{g[w]=typeof k=="function"?k(i):k})},m5=_n({DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING:({root:i,action:c})=>{i.ref.buttonAbortItemProcessing.label=c.value},DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD:({root:i,action:c})=>{i.ref.buttonAbortItemLoad.label=c.value},DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL:({root:i,action:c})=>{i.ref.buttonAbortItemRemoval.label=c.value},DID_REQUEST_ITEM_PROCESSING:({root:i})=>{i.ref.processProgressIndicator.spin=!0,i.ref.processProgressIndicator.progress=0},DID_START_ITEM_LOAD:({root:i})=>{i.ref.loadProgressIndicator.spin=!0,i.ref.loadProgressIndicator.progress=0},DID_START_ITEM_REMOVE:({root:i})=>{i.ref.processProgressIndicator.spin=!0,i.ref.processProgressIndicator.progress=0},DID_UPDATE_ITEM_LOAD_PROGRESS:({root:i,action:c})=>{i.ref.loadProgressIndicator.spin=!1,i.ref.loadProgressIndicator.progress=c.progress},DID_UPDATE_ITEM_PROCESS_PROGRESS:({root:i,action:c})=>{i.ref.processProgressIndicator.spin=!1,i.ref.processProgressIndicator.progress=c.progress}}),f5=zt({create:h5,write:g5,didCreateView:i=>{kr("CREATE_VIEW",{...i,view:i})},name:"file"}),p5=({root:i,props:c})=>{i.ref.fileName=ro("legend"),i.appendChild(i.ref.fileName),i.ref.file=i.appendChildView(i.createChildView(f5,{id:c.id})),i.ref.data=!1},b5=({root:i,props:c})=>{Mt(i.ref.fileName,Ug(i.query("GET_ITEM_NAME",c.id)))},k5=zt({create:p5,ignoreRect:!0,write:_n({DID_LOAD_ITEM:b5}),didCreateView:i=>{kr("CREATE_VIEW",{...i,view:i})},tag:"fieldset",name:"file-wrapper"}),v0={type:"spring",damping:.6,mass:7},w5=({root:i,props:c})=>{[{name:"top"},{name:"center",props:{translateY:null,scaleY:null},mixins:{animations:{scaleY:v0},styles:["translateY","scaleY"]}},{name:"bottom",props:{translateY:null},mixins:{animations:{translateY:v0},styles:["translateY"]}}].forEach(d=>{_5(i,d,c.name)}),i.element.classList.add(`filepond--${c.name}`),i.ref.scalable=null},_5=(i,c,d)=>{const h=zt({name:`panel-${c.name} filepond--${d}`,mixins:c.mixins,ignoreRectUpdate:!0}),g=i.createChildView(h,c.props);i.ref[c.name]=i.appendChildView(g)},A5=({root:i,props:c})=>{if((i.ref.scalable===null||c.scalable!==i.ref.scalable)&&(i.ref.scalable=pA(c.scalable)?c.scalable:!0,i.element.dataset.scalable=i.ref.scalable),!c.height)return;const d=i.ref.top.rect.element,h=i.ref.bottom.rect.element,g=Math.max(d.height+h.height,c.height);i.ref.center.translateY=d.height,i.ref.center.scaleY=(g-d.height-h.height)/100,i.ref.bottom.translateY=g-h.height},NA=zt({name:"panel",read:({root:i,props:c})=>c.heightCurrent=i.ref.bottom.translateY,write:A5,create:w5,ignoreRect:!0,mixins:{apis:["height","heightCurrent","scalable"]}}),v5=i=>{const c=i.map(h=>h.id);let d;return{setIndex:h=>{d=h},getIndex:()=>d,getItemIndex:h=>c.indexOf(h.id)}},C0={type:"spring",stiffness:.75,damping:.45,mass:10},y0="spring",E0={DID_START_ITEM_LOAD:"busy",DID_UPDATE_ITEM_LOAD_PROGRESS:"loading",DID_THROW_ITEM_INVALID:"load-invalid",DID_THROW_ITEM_LOAD_ERROR:"load-error",DID_LOAD_ITEM:"idle",DID_THROW_ITEM_REMOVE_ERROR:"remove-error",DID_START_ITEM_REMOVE:"busy",DID_START_ITEM_PROCESSING:"busy processing",DID_REQUEST_ITEM_PROCESSING:"busy processing",DID_UPDATE_ITEM_PROCESS_PROGRESS:"processing",DID_COMPLETE_ITEM_PROCESSING:"processing-complete",DID_THROW_ITEM_PROCESSING_ERROR:"processing-error",DID_THROW_ITEM_PROCESSING_REVERT_ERROR:"processing-revert-error",DID_ABORT_ITEM_PROCESSING:"cancelled",DID_REVERT_ITEM_PROCESSING:"idle"},C5=({root:i,props:c})=>{if(i.ref.handleClick=h=>i.dispatch("DID_ACTIVATE_ITEM",{id:c.id}),i.element.id=`filepond--item-${c.id}`,i.element.addEventListener("click",i.ref.handleClick),i.ref.container=i.appendChildView(i.createChildView(k5,{id:c.id})),i.ref.panel=i.appendChildView(i.createChildView(NA,{name:"item-panel"})),i.ref.panel.height=null,c.markedForRemoval=!1,!i.query("GET_ALLOW_REORDER"))return;i.element.dataset.dragState="idle";const d=h=>{if(!h.isPrimary)return;let g=!1;const w={x:h.pageX,y:h.pageY};c.dragOrigin={x:i.translateX,y:i.translateY},c.dragCenter={x:h.offsetX,y:h.offsetY};const k=v5(i.query("GET_ACTIVE_ITEMS"));i.dispatch("DID_GRAB_ITEM",{id:c.id,dragState:k});const y=I=>{if(!I.isPrimary)return;I.stopPropagation(),I.preventDefault(),c.dragOffset={x:I.pageX-w.x,y:I.pageY-w.y},c.dragOffset.x*c.dragOffset.x+c.dragOffset.y*c.dragOffset.y>16&&!g&&(g=!0,i.element.removeEventListener("click",i.ref.handleClick)),i.dispatch("DID_DRAG_ITEM",{id:c.id,dragState:k})},b=I=>{!I.isPrimary||(document.removeEventListener("pointermove",y),document.removeEventListener("pointerup",b),c.dragOffset={x:I.pageX-w.x,y:I.pageY-w.y},i.dispatch("DID_DROP_ITEM",{id:c.id,dragState:k}),g&&setTimeout(()=>i.element.addEventListener("click",i.ref.handleClick),0))};document.addEventListener("pointermove",y),document.addEventListener("pointerup",b)};i.element.addEventListener("pointerdown",d)},y5=_n({DID_UPDATE_PANEL_HEIGHT:({root:i,action:c})=>{i.height=c.height}}),E5=_n({DID_GRAB_ITEM:({root:i,props:c})=>{c.dragOrigin={x:i.translateX,y:i.translateY}},DID_DRAG_ITEM:({root:i})=>{i.element.dataset.dragState="drag"},DID_DROP_ITEM:({root:i,props:c})=>{c.dragOffset=null,c.dragOrigin=null,i.element.dataset.dragState="drop"}},({root:i,actions:c,props:d,shouldOptimize:h})=>{i.element.dataset.dragState==="drop"&&i.scaleX<=1&&(i.element.dataset.dragState="idle");let g=c.concat().filter(k=>/^DID_/.test(k.type)).reverse().find(k=>E0[k.type]);g&&g.type!==d.currentState&&(d.currentState=g.type,i.element.dataset.filepondItemState=E0[d.currentState]||"");const w=i.query("GET_ITEM_PANEL_ASPECT_RATIO")||i.query("GET_PANEL_ASPECT_RATIO");w?h||(i.height=i.rect.element.width*w):(y5({root:i,actions:c,props:d}),!i.height&&i.ref.container.rect.element.height>0&&(i.height=i.ref.container.rect.element.height)),h&&(i.ref.panel.height=null),i.ref.panel.height=i.height}),I5=zt({create:C5,write:E5,destroy:({root:i,props:c})=>{i.element.removeEventListener("click",i.ref.handleClick),i.dispatch("RELEASE_ITEM",{query:c.id})},tag:"li",name:"item",mixins:{apis:["id","interactionMethod","markedForRemoval","spawnDate","dragCenter","dragOrigin","dragOffset"],styles:["translateX","translateY","scaleX","scaleY","opacity","height"],animations:{scaleX:y0,scaleY:y0,translateX:C0,translateY:C0,opacity:{type:"tween",duration:150}}}});var Hg=(i,c)=>Math.max(1,Math.floor((i+1)/c));const Gg=(i,c,d)=>{if(!d)return;const h=i.rect.element.width,g=c.length;let w=null;if(g===0||d.top<c[0].rect.element.top)return-1;const y=c[0].rect.element,b=y.marginLeft+y.marginRight,I=y.width+b,E=Hg(h,I);if(E===1){for(let P=0;P<g;P++){const R=c[P],U=R.rect.outer.top+R.rect.element.height*.5;if(d.top<U)return P}return g}const x=y.marginTop+y.marginBottom,C=y.height+x;for(let P=0;P<g;P++){const R=P%E,U=Math.floor(P/E),G=R*I,W=U*C,F=W-y.marginTop,H=G+I,J=W+C+y.marginBottom;if(d.top<J&&d.top>F){if(d.left<H)return P;P!==g-1?w=P:w=null}}return w!==null?w:g},ml={height:0,width:0,get getHeight(){return this.height},set setHeight(i){(this.height===0||i===0)&&(this.height=i)},get getWidth(){return this.width},set setWidth(i){(this.width===0||i===0)&&(this.width=i)},setDimensions:function(i,c){(this.height===0||i===0)&&(this.height=i),(this.width===0||c===0)&&(this.width=c)}},T5=({root:i})=>{Bt(i.element,"role","list"),i.ref.lastItemSpanwDate=Date.now()},D5=({root:i,action:c})=>{const{id:d,index:h,interactionMethod:g}=c;i.ref.addIndex=h;const w=Date.now();let k=w,y=1;if(g!==ni.NONE){y=0;const b=i.query("GET_ITEM_INSERT_INTERVAL"),I=w-i.ref.lastItemSpanwDate;k=I<b?w+(b-I):w}i.ref.lastItemSpanwDate=k,i.appendChildView(i.createChildView(I5,{spawnDate:k,id:d,opacity:y,interactionMethod:g}),h)},I0=(i,c,d,h=0,g=1)=>{i.dragOffset?(i.translateX=null,i.translateY=null,i.translateX=i.dragOrigin.x+i.dragOffset.x,i.translateY=i.dragOrigin.y+i.dragOffset.y,i.scaleX=1.025,i.scaleY=1.025):(i.translateX=c,i.translateY=d,Date.now()>i.spawnDate&&(i.opacity===0&&x5(i,c,d,h,g),i.scaleX=1,i.scaleY=1,i.opacity=1))},x5=(i,c,d,h,g)=>{i.interactionMethod===ni.NONE?(i.translateX=null,i.translateX=c,i.translateY=null,i.translateY=d):i.interactionMethod===ni.DROP?(i.translateX=null,i.translateX=c-h*20,i.translateY=null,i.translateY=d-g*10,i.scaleX=.8,i.scaleY=.8):i.interactionMethod===ni.BROWSE?(i.translateY=null,i.translateY=d-30):i.interactionMethod===ni.API&&(i.translateX=null,i.translateX=c-30,i.translateY=null)},S5=({root:i,action:c})=>{const{id:d}=c,h=i.childViews.find(g=>g.id===d);!h||(h.scaleX=.9,h.scaleY=.9,h.opacity=0,h.markedForRemoval=!0)},og=i=>i.rect.element.height+i.rect.element.marginBottom*.5+i.rect.element.marginTop*.5,M5=i=>i.rect.element.width+i.rect.element.marginLeft*.5+i.rect.element.marginRight*.5,P5=({root:i,action:c})=>{const{id:d,dragState:h}=c,g=i.query("GET_ITEM",{id:d}),w=i.childViews.find(G=>G.id===d),k=i.childViews.length,y=h.getItemIndex(g);if(!w)return;const b={x:w.dragOrigin.x+w.dragOffset.x+w.dragCenter.x,y:w.dragOrigin.y+w.dragOffset.y+w.dragCenter.y},I=og(w),E=M5(w);let x=Math.floor(i.rect.outer.width/E);x>k&&(x=k);const C=Math.floor(k/x+1);ml.setHeight=I*C,ml.setWidth=E*x;var P={y:Math.floor(b.y/I),x:Math.floor(b.x/E),getGridIndex:function(){return b.y>ml.getHeight||b.y<0||b.x>ml.getWidth||b.x<0?y:this.y*x+this.x},getColIndex:function(){const W=i.query("GET_ACTIVE_ITEMS"),F=i.childViews.filter(de=>de.rect.element.height),H=W.map(de=>F.find(z=>z.id===de.id)),J=H.findIndex(de=>de===w),ee=og(w),se=H.length;let te=se,q=0,ne=0,fe=0;for(let de=0;de<se;de++)if(q=og(H[de]),fe=ne,ne=fe+q,b.y<ne){if(J>de){if(b.y<fe+ee){te=de;break}continue}te=de;break}return te}};const R=x>1?P.getGridIndex():P.getColIndex();i.dispatch("MOVE_ITEM",{query:w,index:R});const U=h.getIndex();if(U===void 0||U!==R){if(h.setIndex(R),U===void 0)return;i.dispatch("DID_REORDER_ITEMS",{items:i.query("GET_ACTIVE_ITEMS"),origin:y,target:R})}},O5=_n({DID_ADD_ITEM:D5,DID_REMOVE_ITEM:S5,DID_DRAG_ITEM:P5}),R5=({root:i,props:c,actions:d,shouldOptimize:h})=>{O5({root:i,props:c,actions:d});const{dragCoordinates:g}=c,w=i.rect.element.width,k=i.childViews.filter(H=>H.rect.element.height),y=i.query("GET_ACTIVE_ITEMS").map(H=>k.find(J=>J.id===H.id)).filter(H=>H),b=g?Gg(i,y,g):null,I=i.ref.addIndex||null;i.ref.addIndex=null;let E=0,x=0,C=0;if(y.length===0)return;const P=y[0].rect.element,R=P.marginTop+P.marginBottom,U=P.marginLeft+P.marginRight,G=P.width+U,W=P.height+R,F=Hg(w,G);if(F===1){let H=0,J=0;y.forEach((ee,se)=>{if(b){let ne=se-b;ne===-2?J=-R*.25:ne===-1?J=-R*.75:ne===0?J=R*.75:ne===1?J=R*.25:J=0}h&&(ee.translateX=null,ee.translateY=null),ee.markedForRemoval||I0(ee,0,H+J);let q=(ee.rect.element.height+R)*(ee.markedForRemoval?ee.opacity:1);H+=q})}else{let H=0,J=0;y.forEach((ee,se)=>{se===b&&(E=1),se===I&&(C+=1),ee.markedForRemoval&&ee.opacity<.5&&(x-=1);const te=se+C+E+x,q=te%F,ne=Math.floor(te/F),fe=q*G,de=ne*W,z=Math.sign(fe-H),Ce=Math.sign(de-J);H=fe,J=de,!ee.markedForRemoval&&(h&&(ee.translateX=null,ee.translateY=null),I0(ee,fe,de,z,Ce))})}},N5=(i,c)=>c.filter(d=>d.data&&d.data.id?i.id===d.data.id:!0),L5=zt({create:T5,write:R5,tag:"ul",name:"list",didWriteView:({root:i})=>{i.childViews.filter(c=>c.markedForRemoval&&c.opacity===0&&c.resting).forEach(c=>{c._destroy(),i.removeChildView(c)})},filterFrameActionsForChild:N5,mixins:{apis:["dragCoordinates"]}}),B5=({root:i,props:c})=>{i.ref.list=i.appendChildView(i.createChildView(L5)),c.dragCoordinates=null,c.overflowing=!1},z5=({root:i,props:c,action:d})=>{!i.query("GET_ITEM_INSERT_LOCATION_FREEDOM")||(c.dragCoordinates={left:d.position.scopeLeft-i.ref.list.rect.element.left,top:d.position.scopeTop-(i.rect.outer.top+i.rect.element.marginTop+i.rect.element.scrollTop)})},F5=({props:i})=>{i.dragCoordinates=null},j5=_n({DID_DRAG:z5,DID_END_DRAG:F5}),V5=({root:i,props:c,actions:d})=>{if(j5({root:i,props:c,actions:d}),i.ref.list.dragCoordinates=c.dragCoordinates,c.overflowing&&!c.overflow&&(c.overflowing=!1,i.element.dataset.state="",i.height=null),c.overflow){const h=Math.round(c.overflow);h!==i.height&&(c.overflowing=!0,i.element.dataset.state="overflow",i.height=h)}},U5=zt({create:B5,write:V5,name:"list-scroller",mixins:{apis:["overflow","dragCoordinates"],styles:["height","translateY"],animations:{translateY:"spring"}}}),mi=(i,c,d,h="")=>{d?Bt(i,c,h):i.removeAttribute(c)},H5=i=>{if(!(!i||i.value==="")){try{i.value=""}catch{}if(i.value){const c=ro("form"),d=i.parentNode,h=i.nextSibling;c.appendChild(i),c.reset(),h?d.insertBefore(i,h):d.appendChild(i)}}},G5=({root:i,props:c})=>{i.element.id=`filepond--browser-${c.id}`,Bt(i.element,"name",i.query("GET_NAME")),Bt(i.element,"aria-controls",`filepond--assistant-${c.id}`),Bt(i.element,"aria-labelledby",`filepond--drop-label-${c.id}`),LA({root:i,action:{value:i.query("GET_ACCEPTED_FILE_TYPES")}}),BA({root:i,action:{value:i.query("GET_ALLOW_MULTIPLE")}}),zA({root:i,action:{value:i.query("GET_ALLOW_DIRECTORIES_ONLY")}}),Cg({root:i}),FA({root:i,action:{value:i.query("GET_REQUIRED")}}),jA({root:i,action:{value:i.query("GET_CAPTURE_METHOD")}}),i.ref.handleChange=d=>{if(!i.element.value)return;const h=Array.from(i.element.files).map(g=>(g._relativePath=g.webkitRelativePath,g));setTimeout(()=>{c.onload(h),H5(i.element)},250)},i.element.addEventListener("change",i.ref.handleChange)},LA=({root:i,action:c})=>{!i.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE")||mi(i.element,"accept",!!c.value,c.value?c.value.join(","):"")},BA=({root:i,action:c})=>{mi(i.element,"multiple",c.value)},zA=({root:i,action:c})=>{mi(i.element,"webkitdirectory",c.value)},Cg=({root:i})=>{const c=i.query("GET_DISABLED"),d=i.query("GET_ALLOW_BROWSE"),h=c||!d;mi(i.element,"disabled",h)},FA=({root:i,action:c})=>{c.value?i.query("GET_TOTAL_ITEMS")===0&&mi(i.element,"required",!0):mi(i.element,"required",!1)},jA=({root:i,action:c})=>{mi(i.element,"capture",!!c.value,c.value===!0?"":c.value)},T0=({root:i})=>{const{element:c}=i;i.query("GET_TOTAL_ITEMS")>0?(mi(c,"required",!1),mi(c,"name",!1)):(mi(c,"name",!0,i.query("GET_NAME")),i.query("GET_CHECK_VALIDITY")&&c.setCustomValidity(""),i.query("GET_REQUIRED")&&mi(c,"required",!0))},W5=({root:i})=>{!i.query("GET_CHECK_VALIDITY")||i.element.setCustomValidity(i.query("GET_LABEL_INVALID_FIELD"))},Y5=zt({tag:"input",name:"browser",ignoreRect:!0,ignoreRectUpdate:!0,attributes:{type:"file"},create:G5,destroy:({root:i})=>{i.element.removeEventListener("change",i.ref.handleChange)},write:_n({DID_LOAD_ITEM:T0,DID_REMOVE_ITEM:T0,DID_THROW_ITEM_INVALID:W5,DID_SET_DISABLED:Cg,DID_SET_ALLOW_BROWSE:Cg,DID_SET_ALLOW_DIRECTORIES_ONLY:zA,DID_SET_ALLOW_MULTIPLE:BA,DID_SET_ACCEPTED_FILE_TYPES:LA,DID_SET_CAPTURE_METHOD:jA,DID_SET_REQUIRED:FA})}),D0={ENTER:13,SPACE:32},$5=({root:i,props:c})=>{const d=ro("label");Bt(d,"for",`filepond--browser-${c.id}`),Bt(d,"id",`filepond--drop-label-${c.id}`),Bt(d,"aria-hidden","true"),i.ref.handleKeyDown=h=>{(h.keyCode===D0.ENTER||h.keyCode===D0.SPACE)&&(h.preventDefault(),i.ref.label.click())},i.ref.handleClick=h=>{h.target===d||d.contains(h.target)||i.ref.label.click()},d.addEventListener("keydown",i.ref.handleKeyDown),i.element.addEventListener("click",i.ref.handleClick),VA(d,c.caption),i.appendChild(d),i.ref.label=d},VA=(i,c)=>{i.innerHTML=c;const d=i.querySelector(".filepond--label-action");return d&&Bt(d,"tabindex","0"),c},q5=zt({name:"drop-label",ignoreRect:!0,create:$5,destroy:({root:i})=>{i.ref.label.addEventListener("keydown",i.ref.handleKeyDown),i.element.removeEventListener("click",i.ref.handleClick)},write:_n({DID_SET_LABEL_IDLE:({root:i,action:c})=>{VA(i.ref.label,c.value)}}),mixins:{styles:["opacity","translateX","translateY"],animations:{opacity:{type:"tween",duration:150},translateX:"spring",translateY:"spring"}}}),K5=zt({name:"drip-blob",ignoreRect:!0,mixins:{styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}}}}),Q5=({root:i})=>{const c=i.rect.element.width*.5,d=i.rect.element.height*.5;i.ref.blob=i.appendChildView(i.createChildView(K5,{opacity:0,scaleX:2.5,scaleY:2.5,translateX:c,translateY:d}))},Z5=({root:i,action:c})=>{if(!i.ref.blob){Q5({root:i});return}i.ref.blob.translateX=c.position.scopeLeft,i.ref.blob.translateY=c.position.scopeTop,i.ref.blob.scaleX=1,i.ref.blob.scaleY=1,i.ref.blob.opacity=1},X5=({root:i})=>{!i.ref.blob||(i.ref.blob.opacity=0)},J5=({root:i})=>{!i.ref.blob||(i.ref.blob.scaleX=2.5,i.ref.blob.scaleY=2.5,i.ref.blob.opacity=0)},eP=({root:i,props:c,actions:d})=>{tP({root:i,props:c,actions:d});const{blob:h}=i.ref;d.length===0&&h&&h.opacity===0&&(i.removeChildView(h),i.ref.blob=null)},tP=_n({DID_DRAG:Z5,DID_DROP:J5,DID_END_DRAG:X5}),nP=zt({ignoreRect:!0,ignoreRectUpdate:!0,name:"drip",write:eP}),UA=(i,c)=>{try{const d=new DataTransfer;c.forEach(h=>{h instanceof File?d.items.add(h):d.items.add(new File([h],h.name,{type:h.type}))}),i.files=d.files}catch{return!1}return!0},iP=({root:i})=>i.ref.fields={},ql=(i,c)=>i.ref.fields[c],Wg=i=>{i.query("GET_ACTIVE_ITEMS").forEach(c=>{!i.ref.fields[c.id]||i.element.appendChild(i.ref.fields[c.id])})},x0=({root:i})=>Wg(i),oP=({root:i,action:c})=>{const g=!(i.query("GET_ITEM",c.id).origin===Jt.LOCAL)&&i.query("SHOULD_UPDATE_FILE_INPUT"),w=ro("input");w.type=g?"file":"hidden",w.name=i.query("GET_NAME"),w.disabled=i.query("GET_DISABLED"),i.ref.fields[c.id]=w,Wg(i)},rP=({root:i,action:c})=>{const d=ql(i,c.id);if(!d||(c.serverFileReference!==null&&(d.value=c.serverFileReference),!i.query("SHOULD_UPDATE_FILE_INPUT")))return;const h=i.query("GET_ITEM",c.id);UA(d,[h.file])},sP=({root:i,action:c})=>{!i.query("SHOULD_UPDATE_FILE_INPUT")||setTimeout(()=>{const d=ql(i,c.id);!d||UA(d,[c.file])},0)},aP=({root:i})=>{i.element.disabled=i.query("GET_DISABLED")},cP=({root:i,action:c})=>{const d=ql(i,c.id);!d||(d.parentNode&&d.parentNode.removeChild(d),delete i.ref.fields[c.id])},lP=({root:i,action:c})=>{const d=ql(i,c.id);!d||(c.value===null?d.removeAttribute("value"):d.value=c.value,Wg(i))},dP=_n({DID_SET_DISABLED:aP,DID_ADD_ITEM:oP,DID_LOAD_ITEM:rP,DID_REMOVE_ITEM:cP,DID_DEFINE_VALUE:lP,DID_PREPARE_OUTPUT:sP,DID_REORDER_ITEMS:x0,DID_SORT_ITEMS:x0}),uP=zt({tag:"fieldset",name:"data",create:iP,write:dP,ignoreRect:!0}),hP=i=>"getRootNode"in i?i.getRootNode():document,gP=["jpg","jpeg","png","gif","bmp","webp","svg","tiff"],mP=["css","csv","html","txt"],fP={zip:"zip|compressed",epub:"application/epub+zip"},HA=(i="")=>(i=i.toLowerCase(),gP.includes(i)?"image/"+(i==="jpg"?"jpeg":i==="svg"?"svg+xml":i):mP.includes(i)?"text/"+i:fP[i]||""),Yg=i=>new Promise((c,d)=>{const h=CP(i);if(h.length&&!pP(i))return c(h);bP(i).then(c)}),pP=i=>i.files?i.files.length>0:!1,bP=i=>new Promise((c,d)=>{const h=(i.items?Array.from(i.items):[]).filter(g=>kP(g)).map(g=>wP(g));if(!h.length){c(i.files?Array.from(i.files):[]);return}Promise.all(h).then(g=>{const w=[];g.forEach(k=>{w.push.apply(w,k)}),c(w.filter(k=>k).map(k=>(k._relativePath||(k._relativePath=k.webkitRelativePath),k)))}).catch(console.error)}),kP=i=>{if(GA(i)){const c=$g(i);if(c)return c.isFile||c.isDirectory}return i.kind==="file"},wP=i=>new Promise((c,d)=>{if(vP(i)){_P($g(i)).then(c).catch(d);return}c([i.getAsFile()])}),_P=i=>new Promise((c,d)=>{const h=[];let g=0,w=0;const k=()=>{w===0&&g===0&&c(h)},y=b=>{g++;const I=b.createReader(),E=()=>{I.readEntries(x=>{if(x.length===0){g--,k();return}x.forEach(C=>{C.isDirectory?y(C):(w++,C.file(P=>{const R=AP(P);C.fullPath&&(R._relativePath=C.fullPath),h.push(R),w--,k()}))}),E()},d)};E()};y(i)}),AP=i=>{if(i.type.length)return i;const c=i.lastModifiedDate,d=i.name,h=HA($l(i.name));return h.length&&(i=i.slice(0,i.size,h),i.name=d,i.lastModifiedDate=c),i},vP=i=>GA(i)&&($g(i)||{}).isDirectory,GA=i=>"webkitGetAsEntry"in i,$g=i=>i.webkitGetAsEntry(),CP=i=>{let c=[];try{if(c=EP(i),c.length)return c;c=yP(i)}catch{}return c},yP=i=>{let c=i.getData("url");return typeof c=="string"&&c.length?[c]:[]},EP=i=>{let c=i.getData("text/html");if(typeof c=="string"&&c.length){const d=c.match(/src\s*=\s*"(.+?)"/);if(d)return[d[1]]}return[]},Ol=[],pr=i=>({pageLeft:i.pageX,pageTop:i.pageY,scopeLeft:i.offsetX||i.layerX,scopeTop:i.offsetY||i.layerY}),IP=(i,c,d)=>{const h=TP(c),g={element:i,filterElement:d,state:null,ondrop:()=>{},onenter:()=>{},ondrag:()=>{},onexit:()=>{},onload:()=>{},allowdrop:()=>{}};return g.destroy=h.addListener(g),g},TP=i=>{const c=Ol.find(h=>h.element===i);if(c)return c;const d=DP(i);return Ol.push(d),d},DP=i=>{const c=[],d={dragenter:SP,dragover:MP,dragleave:OP,drop:PP},h={};yt(d,(w,k)=>{h[w]=k(i,c),i.addEventListener(w,h[w],!1)});const g={element:i,addListener:w=>(c.push(w),()=>{c.splice(c.indexOf(w),1),c.length===0&&(Ol.splice(Ol.indexOf(g),1),yt(d,k=>{i.removeEventListener(k,h[k],!1)}))})};return g},xP=(i,c)=>("elementFromPoint"in i||(i=document),i.elementFromPoint(c.x,c.y)),qg=(i,c)=>{const d=hP(c),h=xP(d,{x:i.pageX-window.pageXOffset,y:i.pageY-window.pageYOffset});return h===c||c.contains(h)};let WA=null;const fl=(i,c)=>{try{i.dropEffect=c}catch{}},SP=(i,c)=>d=>{d.preventDefault(),WA=d.target,c.forEach(h=>{const{element:g,onenter:w}=h;qg(d,g)&&(h.state="enter",w(pr(d)))})},MP=(i,c)=>d=>{d.preventDefault();const h=d.dataTransfer;Yg(h).then(g=>{let w=!1;c.some(k=>{const{filterElement:y,element:b,onenter:I,onexit:E,ondrag:x,allowdrop:C}=k;fl(h,"copy");const P=C(g);if(!P){fl(h,"none");return}if(qg(d,b)){if(w=!0,k.state===null){k.state="enter",I(pr(d));return}if(k.state="over",y&&!P){fl(h,"none");return}x(pr(d))}else y&&!w&&fl(h,"none"),k.state&&(k.state=null,E(pr(d)))})})},PP=(i,c)=>d=>{d.preventDefault();const h=d.dataTransfer;Yg(h).then(g=>{c.forEach(w=>{const{filterElement:k,element:y,ondrop:b,onexit:I,allowdrop:E}=w;if(w.state=null,!(k&&!qg(d,y))){if(!E(g))return I(pr(d));b(pr(d),g)}})})},OP=(i,c)=>d=>{WA===d.target&&c.forEach(h=>{const{onexit:g}=h;h.state=null,g(pr(d))})},RP=(i,c,d)=>{i.classList.add("filepond--hopper");const{catchesDropsOnPage:h,requiresDropOnElement:g,filterItems:w=E=>E}=d,k=IP(i,h?document.documentElement:i,g);let y="",b="";k.allowdrop=E=>c(w(E)),k.ondrop=(E,x)=>{const C=w(x);if(!c(C)){I.ondragend(E);return}b="drag-drop",I.onload(C,E)},k.ondrag=E=>{I.ondrag(E)},k.onenter=E=>{b="drag-over",I.ondragstart(E)},k.onexit=E=>{b="drag-exit",I.ondragend(E)};const I={updateHopperState:()=>{y!==b&&(i.dataset.hopperState=b,y=b)},onload:()=>{},ondragstart:()=>{},ondrag:()=>{},ondragend:()=>{},destroy:()=>{k.destroy()}};return I};let yg=!1;const ss=[],YA=i=>{const c=document.activeElement;if(c&&/textarea|input/i.test(c.nodeName)){let d=!1,h=c;for(;h!==document.body;){if(h.classList.contains("filepond--root")){d=!0;break}h=h.parentNode}if(!d)return}Yg(i.clipboardData).then(d=>{!d.length||ss.forEach(h=>h(d))})},NP=i=>{ss.includes(i)||(ss.push(i),!yg&&(yg=!0,document.addEventListener("paste",YA)))},LP=i=>{Fg(ss,ss.indexOf(i)),ss.length===0&&(document.removeEventListener("paste",YA),yg=!1)},BP=()=>{const i=d=>{c.onload(d)},c={destroy:()=>{LP(i)},onload:()=>{}};return NP(i),c},zP=({root:i,props:c})=>{i.element.id=`filepond--assistant-${c.id}`,Bt(i.element,"role","status"),Bt(i.element,"aria-live","polite"),Bt(i.element,"aria-relevant","additions")};let S0=null,M0=null;const rg=[],Kl=(i,c)=>{i.element.textContent=c},FP=i=>{i.element.textContent=""},$A=(i,c,d)=>{const h=i.query("GET_TOTAL_ITEMS");Kl(i,`${d} ${c}, ${h} ${h===1?i.query("GET_LABEL_FILE_COUNT_SINGULAR"):i.query("GET_LABEL_FILE_COUNT_PLURAL")}`),clearTimeout(M0),M0=setTimeout(()=>{FP(i)},1500)},qA=i=>i.element.parentNode.contains(document.activeElement),jP=({root:i,action:c})=>{if(!qA(i))return;i.element.textContent="";const d=i.query("GET_ITEM",c.id);rg.push(d.filename),clearTimeout(S0),S0=setTimeout(()=>{$A(i,rg.join(", "),i.query("GET_LABEL_FILE_ADDED")),rg.length=0},750)},VP=({root:i,action:c})=>{if(!qA(i))return;const d=c.item;$A(i,d.filename,i.query("GET_LABEL_FILE_REMOVED"))},UP=({root:i,action:c})=>{const h=i.query("GET_ITEM",c.id).filename,g=i.query("GET_LABEL_FILE_PROCESSING_COMPLETE");Kl(i,`${h} ${g}`)},P0=({root:i,action:c})=>{const h=i.query("GET_ITEM",c.id).filename,g=i.query("GET_LABEL_FILE_PROCESSING_ABORTED");Kl(i,`${h} ${g}`)},pl=({root:i,action:c})=>{const h=i.query("GET_ITEM",c.id).filename;Kl(i,`${c.status.main} ${h} ${c.status.sub}`)},HP=zt({create:zP,ignoreRect:!0,ignoreRectUpdate:!0,write:_n({DID_LOAD_ITEM:jP,DID_REMOVE_ITEM:VP,DID_COMPLETE_ITEM_PROCESSING:UP,DID_ABORT_ITEM_PROCESSING:P0,DID_REVERT_ITEM_PROCESSING:P0,DID_THROW_ITEM_REMOVE_ERROR:pl,DID_THROW_ITEM_LOAD_ERROR:pl,DID_THROW_ITEM_INVALID:pl,DID_THROW_ITEM_PROCESSING_ERROR:pl}),tag:"span",name:"assistant"}),KA=(i,c="-")=>i.replace(new RegExp(`${c}.`,"g"),d=>d.charAt(1).toUpperCase()),QA=(i,c=16,d=!0)=>{let h=Date.now(),g=null;return(...w)=>{clearTimeout(g);const k=Date.now()-h,y=()=>{h=Date.now(),i(...w)};k<c?d||(g=setTimeout(y,c-k)):y()}},GP=1e6,Rl=i=>i.preventDefault(),WP=({root:i,props:c})=>{const d=i.query("GET_ID");d&&(i.element.id=d);const h=i.query("GET_CLASS_NAME");h&&h.split(" ").filter(b=>b.length).forEach(b=>{i.element.classList.add(b)}),i.ref.label=i.appendChildView(i.createChildView(q5,{...c,translateY:null,caption:i.query("GET_LABEL_IDLE")})),i.ref.list=i.appendChildView(i.createChildView(U5,{translateY:null})),i.ref.panel=i.appendChildView(i.createChildView(NA,{name:"panel-root"})),i.ref.assistant=i.appendChildView(i.createChildView(HP,{...c})),i.ref.data=i.appendChildView(i.createChildView(uP,{...c})),i.ref.measure=ro("div"),i.ref.measure.style.height="100%",i.element.appendChild(i.ref.measure),i.ref.bounds=null,i.query("GET_STYLES").filter(b=>!oo(b.value)).map(({name:b,value:I})=>{i.element.dataset[b]=I}),i.ref.widthPrevious=null,i.ref.widthUpdated=QA(()=>{i.ref.updateHistory=[],i.dispatch("DID_RESIZE_ROOT")},250),i.ref.previousAspectRatio=null,i.ref.updateHistory=[];const g=window.matchMedia("(pointer: fine) and (hover: hover)").matches,w="PointerEvent"in window;i.query("GET_ALLOW_REORDER")&&w&&!g&&(i.element.addEventListener("touchmove",Rl,{passive:!1}),i.element.addEventListener("gesturestart",Rl));const k=i.query("GET_CREDITS");if(k.length===2){const b=document.createElement("a");b.className="filepond--credits",b.setAttribute("aria-hidden","true"),b.href=k[0],b.tabindex=-1,b.target="_blank",b.rel="noopener noreferrer",b.textContent=k[1],i.element.appendChild(b),i.ref.credits=b}},YP=({root:i,props:c,actions:d})=>{if(ZP({root:i,props:c,actions:d}),d.filter(se=>/^DID_SET_STYLE_/.test(se.type)).filter(se=>!oo(se.data.value)).map(({type:se,data:te})=>{const q=KA(se.substring(8).toLowerCase(),"_");i.element.dataset[q]=te.value,i.invalidateLayout()}),i.rect.element.hidden)return;i.rect.element.width!==i.ref.widthPrevious&&(i.ref.widthPrevious=i.rect.element.width,i.ref.widthUpdated());let h=i.ref.bounds;h||(h=i.ref.bounds=KP(i),i.element.removeChild(i.ref.measure),i.ref.measure=null);const{hopper:g,label:w,list:k,panel:y}=i.ref;g&&g.updateHopperState();const b=i.query("GET_PANEL_ASPECT_RATIO"),I=i.query("GET_ALLOW_MULTIPLE"),E=i.query("GET_TOTAL_ITEMS"),x=I?i.query("GET_MAX_FILES")||GP:1,C=E===x,P=d.find(se=>se.type==="DID_ADD_ITEM");if(C&&P){const se=P.data.interactionMethod;w.opacity=0,I?w.translateY=-40:se===ni.API?w.translateX=40:se===ni.BROWSE?w.translateY=40:w.translateY=30}else C||(w.opacity=1,w.translateX=0,w.translateY=0);const R=$P(i),U=qP(i),G=w.rect.element.height,W=!I||C?0:G,F=C?k.rect.element.marginTop:0,H=E===0?0:k.rect.element.marginBottom,J=W+F+U.visual+H,ee=W+F+U.bounds+H;if(k.translateY=Math.max(0,W-k.rect.element.marginTop)-R.top,b){const se=i.rect.element.width,te=se*b;b!==i.ref.previousAspectRatio&&(i.ref.previousAspectRatio=b,i.ref.updateHistory=[]);const q=i.ref.updateHistory;q.push(se);const ne=2;if(q.length>ne*2){const de=q.length,z=de-10;let Ce=0;for(let ie=de;ie>=z;ie--)if(q[ie]===q[ie-2]&&Ce++,Ce>=ne)return}y.scalable=!1,y.height=te;const fe=te-W-(H-R.bottom)-(C?F:0);U.visual>fe?k.overflow=fe:k.overflow=null,i.height=te}else if(h.fixedHeight){y.scalable=!1;const se=h.fixedHeight-W-(H-R.bottom)-(C?F:0);U.visual>se?k.overflow=se:k.overflow=null}else if(h.cappedHeight){const se=J>=h.cappedHeight,te=Math.min(h.cappedHeight,J);y.scalable=!0,y.height=se?te:te-R.top-R.bottom;const q=te-W-(H-R.bottom)-(C?F:0);J>h.cappedHeight&&U.visual>q?k.overflow=q:k.overflow=null,i.height=Math.min(h.cappedHeight,ee-R.top-R.bottom)}else{const se=E>0?R.top+R.bottom:0;y.scalable=!0,y.height=Math.max(G,J-se),i.height=Math.max(G,ee-se)}i.ref.credits&&y.heightCurrent&&(i.ref.credits.style.transform=`translateY(${y.heightCurrent}px)`)},$P=i=>{const c=i.ref.list.childViews[0].childViews[0];return c?{top:c.rect.element.marginTop,bottom:c.rect.element.marginBottom}:{top:0,bottom:0}},qP=i=>{let c=0,d=0;const h=i.ref.list,g=h.childViews[0],w=g.childViews.filter(F=>F.rect.element.height),k=i.query("GET_ACTIVE_ITEMS").map(F=>w.find(H=>H.id===F.id)).filter(F=>F);if(k.length===0)return{visual:c,bounds:d};const y=g.rect.element.width,b=Gg(g,k,h.dragCoordinates),I=k[0].rect.element,E=I.marginTop+I.marginBottom,x=I.marginLeft+I.marginRight,C=I.width+x,P=I.height+E,R=typeof b<"u"&&b>=0?1:0,U=k.find(F=>F.markedForRemoval&&F.opacity<.45)?-1:0,G=k.length+R+U,W=Hg(y,C);return W===1?k.forEach(F=>{const H=F.rect.element.height+E;d+=H,c+=H*F.opacity}):(d=Math.ceil(G/W)*P,c=d),{visual:c,bounds:d}},KP=i=>{const c=i.ref.measureHeight||null;return{cappedHeight:parseInt(i.style.maxHeight,10)||null,fixedHeight:c===0?null:c}},Kg=(i,c)=>{const d=i.query("GET_ALLOW_REPLACE"),h=i.query("GET_ALLOW_MULTIPLE"),g=i.query("GET_TOTAL_ITEMS");let w=i.query("GET_MAX_FILES");const k=c.length;return!h&&k>1?(i.dispatch("DID_THROW_MAX_FILES",{source:c,error:St("warning",0,"Max files")}),!0):(w=h?w:1,!h&&d?!1:ms(w)&&g+k>w?(i.dispatch("DID_THROW_MAX_FILES",{source:c,error:St("warning",0,"Max files")}),!0):!1)},QP=(i,c,d)=>{const h=i.childViews[0];return Gg(h,c,{left:d.scopeLeft-h.rect.element.left,top:d.scopeTop-(i.rect.outer.top+i.rect.element.marginTop+i.rect.element.scrollTop)})},O0=i=>{const c=i.query("GET_ALLOW_DROP"),d=i.query("GET_DISABLED"),h=c&&!d;if(h&&!i.ref.hopper){const g=RP(i.element,w=>{const k=i.query("GET_BEFORE_DROP_FILE")||(()=>!0);return i.query("GET_DROP_VALIDATION")?w.every(b=>kr("ALLOW_HOPPER_ITEM",b,{query:i.query}).every(I=>I===!0)&&k(b)):!0},{filterItems:w=>{const k=i.query("GET_IGNORED_FILES");return w.filter(y=>gs(y)?!k.includes(y.name.toLowerCase()):!0)},catchesDropsOnPage:i.query("GET_DROP_ON_PAGE"),requiresDropOnElement:i.query("GET_DROP_ON_ELEMENT")});g.onload=(w,k)=>{const b=i.ref.list.childViews[0].childViews.filter(E=>E.rect.element.height),I=i.query("GET_ACTIVE_ITEMS").map(E=>b.find(x=>x.id===E.id)).filter(E=>E);ui("ADD_ITEMS",w,{dispatch:i.dispatch}).then(E=>{if(Kg(i,E))return!1;i.dispatch("ADD_ITEMS",{items:E,index:QP(i.ref.list,I,k),interactionMethod:ni.DROP})}),i.dispatch("DID_DROP",{position:k}),i.dispatch("DID_END_DRAG",{position:k})},g.ondragstart=w=>{i.dispatch("DID_START_DRAG",{position:w})},g.ondrag=QA(w=>{i.dispatch("DID_DRAG",{position:w})}),g.ondragend=w=>{i.dispatch("DID_END_DRAG",{position:w})},i.ref.hopper=g,i.ref.drip=i.appendChildView(i.createChildView(nP))}else!h&&i.ref.hopper&&(i.ref.hopper.destroy(),i.ref.hopper=null,i.removeChildView(i.ref.drip))},R0=(i,c)=>{const d=i.query("GET_ALLOW_BROWSE"),h=i.query("GET_DISABLED"),g=d&&!h;g&&!i.ref.browser?i.ref.browser=i.appendChildView(i.createChildView(Y5,{...c,onload:w=>{ui("ADD_ITEMS",w,{dispatch:i.dispatch}).then(k=>{if(Kg(i,k))return!1;i.dispatch("ADD_ITEMS",{items:k,index:-1,interactionMethod:ni.BROWSE})})}}),0):!g&&i.ref.browser&&(i.removeChildView(i.ref.browser),i.ref.browser=null)},N0=i=>{const c=i.query("GET_ALLOW_PASTE"),d=i.query("GET_DISABLED"),h=c&&!d;h&&!i.ref.paster?(i.ref.paster=BP(),i.ref.paster.onload=g=>{ui("ADD_ITEMS",g,{dispatch:i.dispatch}).then(w=>{if(Kg(i,w))return!1;i.dispatch("ADD_ITEMS",{items:w,index:-1,interactionMethod:ni.PASTE})})}):!h&&i.ref.paster&&(i.ref.paster.destroy(),i.ref.paster=null)},ZP=_n({DID_SET_ALLOW_BROWSE:({root:i,props:c})=>{R0(i,c)},DID_SET_ALLOW_DROP:({root:i})=>{O0(i)},DID_SET_ALLOW_PASTE:({root:i})=>{N0(i)},DID_SET_DISABLED:({root:i,props:c})=>{O0(i),N0(i),R0(i,c),i.query("GET_DISABLED")?i.element.dataset.disabled="disabled":i.element.removeAttribute("data-disabled")}}),XP=zt({name:"root",read:({root:i})=>{i.ref.measure&&(i.ref.measureHeight=i.ref.measure.offsetHeight)},create:WP,write:YP,destroy:({root:i})=>{i.ref.paster&&i.ref.paster.destroy(),i.ref.hopper&&i.ref.hopper.destroy(),i.element.removeEventListener("touchmove",Rl),i.element.removeEventListener("gesturestart",Rl)},mixins:{styles:["height"]}}),JP=(i={})=>{let c=null;const d=Pl(),h=fM(e2(d),[w2,i2(d)],[G2,n2(d)]);h.dispatch("SET_OPTIONS",{options:i});const g=()=>{document.hidden||h.dispatch("KICK")};document.addEventListener("visibilitychange",g);let w=null,k=!1,y=!1,b=null,I=null;const E=()=>{k||(k=!0),clearTimeout(w),w=setTimeout(()=>{k=!1,b=null,I=null,y&&(y=!1,h.dispatch("DID_STOP_RESIZE"))},500)};window.addEventListener("resize",E);const x=XP(h,{id:zg()});let C=!1,P=!1;const R={_read:()=>{k&&(I=window.innerWidth,b||(b=I),!y&&I!==b&&(h.dispatch("DID_START_RESIZE"),y=!0)),P&&C&&(C=x.element.offsetParent===null),!C&&(x._read(),P=x.rect.element.hidden)},_write:Q=>{const Z=h.processActionQueue().filter(ke=>!/^SET_/.test(ke.type));C&&!Z.length||(F(Z),C=x._write(Q,Z,y),s2(h.query("GET_ITEMS")),C&&h.processDispatchQueue())}},U=Q=>Z=>{const ke={type:Q};if(!Z)return ke;if(Z.hasOwnProperty("error")&&(ke.error=Z.error?{...Z.error}:null),Z.status&&(ke.status={...Z.status}),Z.file&&(ke.output=Z.file),Z.source)ke.file=Z.source;else if(Z.item||Z.id){const _e=Z.item?Z.item:h.query("GET_ITEM",Z.id);ke.file=_e?Tn(_e):null}return Z.items&&(ke.items=Z.items.map(Tn)),/progress/.test(Q)&&(ke.progress=Z.progress),Z.hasOwnProperty("origin")&&Z.hasOwnProperty("target")&&(ke.origin=Z.origin,ke.target=Z.target),ke},G={DID_DESTROY:U("destroy"),DID_INIT:U("init"),DID_THROW_MAX_FILES:U("warning"),DID_INIT_ITEM:U("initfile"),DID_START_ITEM_LOAD:U("addfilestart"),DID_UPDATE_ITEM_LOAD_PROGRESS:U("addfileprogress"),DID_LOAD_ITEM:U("addfile"),DID_THROW_ITEM_INVALID:[U("error"),U("addfile")],DID_THROW_ITEM_LOAD_ERROR:[U("error"),U("addfile")],DID_THROW_ITEM_REMOVE_ERROR:[U("error"),U("removefile")],DID_PREPARE_OUTPUT:U("preparefile"),DID_START_ITEM_PROCESSING:U("processfilestart"),DID_UPDATE_ITEM_PROCESS_PROGRESS:U("processfileprogress"),DID_ABORT_ITEM_PROCESSING:U("processfileabort"),DID_COMPLETE_ITEM_PROCESSING:U("processfile"),DID_COMPLETE_ITEM_PROCESSING_ALL:U("processfiles"),DID_REVERT_ITEM_PROCESSING:U("processfilerevert"),DID_THROW_ITEM_PROCESSING_ERROR:[U("error"),U("processfile")],DID_REMOVE_ITEM:U("removefile"),DID_UPDATE_ITEMS:U("updatefiles"),DID_ACTIVATE_ITEM:U("activatefile"),DID_REORDER_ITEMS:U("reorderfiles")},W=Q=>{const Z={pond:be,...Q};delete Z.type,x.element.dispatchEvent(new CustomEvent(`FilePond:${Q.type}`,{detail:Z,bubbles:!0,cancelable:!0,composed:!0}));const ke=[];Q.hasOwnProperty("error")&&ke.push(Q.error),Q.hasOwnProperty("file")&&ke.push(Q.file);const _e=["type","error","file"];Object.keys(Q).filter(ye=>!_e.includes(ye)).forEach(ye=>ke.push(Q[ye])),be.fire(Q.type,...ke);const Me=h.query(`GET_ON${Q.type.toUpperCase()}`);Me&&Me(...ke)},F=Q=>{!Q.length||Q.filter(Z=>G[Z.type]).forEach(Z=>{const ke=G[Z.type];(Array.isArray(ke)?ke:[ke]).forEach(_e=>{Z.type==="DID_INIT_ITEM"?W(_e(Z.data)):setTimeout(()=>{W(_e(Z.data))},0)})})},H=Q=>h.dispatch("SET_OPTIONS",{options:Q}),J=Q=>h.query("GET_ACTIVE_ITEM",Q),ee=Q=>new Promise((Z,ke)=>{h.dispatch("REQUEST_ITEM_PREPARE",{query:Q,success:_e=>{Z(_e)},failure:_e=>{ke(_e)}})}),se=(Q,Z={})=>new Promise((ke,_e)=>{ne([{source:Q,options:Z}],{index:Z.index}).then(Me=>ke(Me&&Me[0])).catch(_e)}),te=Q=>Q.file&&Q.id,q=(Q,Z)=>(typeof Q=="object"&&!te(Q)&&!Z&&(Z=Q,Q=void 0),h.dispatch("REMOVE_ITEM",{...Z,query:Q}),h.query("GET_ACTIVE_ITEM",Q)===null),ne=(...Q)=>new Promise((Z,ke)=>{const _e=[],Me={};if(Hl(Q[0]))_e.push.apply(_e,Q[0]),Object.assign(Me,Q[1]||{});else{const ye=Q[Q.length-1];typeof ye=="object"&&!(ye instanceof Blob)&&Object.assign(Me,Q.pop()),_e.push(...Q)}h.dispatch("ADD_ITEMS",{items:_e,index:Me.index,interactionMethod:ni.API,success:Z,failure:ke})}),fe=()=>h.query("GET_ACTIVE_ITEMS"),de=Q=>new Promise((Z,ke)=>{h.dispatch("REQUEST_ITEM_PROCESSING",{query:Q,success:_e=>{Z(_e)},failure:_e=>{ke(_e)}})}),z=(...Q)=>{const Z=Array.isArray(Q[0])?Q[0]:Q,ke=Z.length?Z:fe();return Promise.all(ke.map(ee))},Ce=(...Q)=>{const Z=Array.isArray(Q[0])?Q[0]:Q;if(!Z.length){const ke=fe().filter(_e=>!(_e.status===Le.IDLE&&_e.origin===Jt.LOCAL)&&_e.status!==Le.PROCESSING&&_e.status!==Le.PROCESSING_COMPLETE&&_e.status!==Le.PROCESSING_REVERT_ERROR);return Promise.all(ke.map(de))}return Promise.all(Z.map(de))},ie=(...Q)=>{const Z=Array.isArray(Q[0])?Q[0]:Q;let ke;typeof Z[Z.length-1]=="object"?ke=Z.pop():Array.isArray(Q[0])&&(ke=Q[1]);const _e=fe();return Z.length?Z.map(ye=>dr(ye)?_e[ye]?_e[ye].id:null:ye).filter(ye=>ye).map(ye=>q(ye,ke)):Promise.all(_e.map(ye=>q(ye,ke)))},be={...Yl(),...R,...t2(h,d),setOptions:H,addFile:se,addFiles:ne,getFile:J,processFile:de,prepareFile:ee,removeFile:q,moveFile:(Q,Z)=>h.dispatch("MOVE_ITEM",{query:Q,index:Z}),getFiles:fe,processFiles:Ce,removeFiles:ie,prepareFiles:z,sort:Q=>h.dispatch("SORT",{compare:Q}),browse:()=>{var Q=x.element.querySelector("input[type=file]");Q&&Q.click()},destroy:()=>{be.fire("destroy",x.element),h.dispatch("ABORT_ALL"),x._destroy(),window.removeEventListener("resize",E),document.removeEventListener("visibilitychange",g),h.dispatch("DID_DESTROY")},insertBefore:Q=>o0(x.element,Q),insertAfter:Q=>r0(x.element,Q),appendTo:Q=>Q.appendChild(x.element),replaceElement:Q=>{o0(x.element,Q),Q.parentNode.removeChild(Q),c=Q},restoreElement:()=>{!c||(r0(c,x.element),x.element.parentNode.removeChild(x.element),c=null)},isAttachedTo:Q=>x.element===Q||c===Q,element:{get:()=>x.element},status:{get:()=>h.query("GET_STATUS")}};return h.dispatch("DID_INIT"),zo(be)},ZA=(i={})=>{const c={};return yt(Pl(),(h,g)=>{c[h]=g[0]}),JP({...c,...i})},eO=i=>i.charAt(0).toLowerCase()+i.slice(1),tO=i=>KA(i.replace(/^data-/,"")),XA=(i,c)=>{yt(c,(d,h)=>{yt(i,(g,w)=>{const k=new RegExp(d);if(!k.test(g)||(delete i[g],h===!1))return;if(wn(h)){i[h]=w;return}const b=h.group;en(h)&&!i[b]&&(i[b]={}),i[b][eO(g.replace(k,""))]=w}),h.mapping&&XA(i[h.group],h.mapping)})},nO=(i,c={})=>{const d=[];yt(i.attributes,g=>{d.push(i.attributes[g])});const h=d.filter(g=>g.name).reduce((g,w)=>{const k=Bt(i,w.name);return g[tO(w.name)]=k===w.name?!0:k,g},{});return XA(h,c),h},iO=(i,c={})=>{const d={"^class$":"className","^multiple$":"allowMultiple","^capture$":"captureMethod","^webkitdirectory$":"allowDirectoriesOnly","^server":{group:"server",mapping:{"^process":{group:"process"},"^revert":{group:"revert"},"^fetch":{group:"fetch"},"^restore":{group:"restore"},"^load":{group:"load"}}},"^type$":!1,"^files$":!1};kr("SET_ATTRIBUTE_TO_OPTION_MAP",d);const h={...c},g=nO(i.nodeName==="FIELDSET"?i.querySelector("input[type=file]"):i,d);Object.keys(g).forEach(k=>{en(g[k])?(en(h[k])||(h[k]={}),Object.assign(h[k],g[k])):h[k]=g[k]}),h.files=(c.files||[]).concat(Array.from(i.querySelectorAll("input:not([type=file])")).map(k=>({source:k.value,options:{type:k.dataset.type}})));const w=ZA(h);return i.files&&Array.from(i.files).forEach(k=>{w.addFile(k)}),w.replaceElement(i),w},oO=(...i)=>mM(i[0])?iO(...i):ZA(...i),rO=["fire","_read","_write"],L0=i=>{const c={};return _A(i,c,rO),c},sO=(i,c)=>i.replace(/(?:{([a-zA-Z]+)})/g,(d,h)=>c[h]),aO=i=>{const c=new Blob(["(",i.toString(),")()"],{type:"application/javascript"}),d=URL.createObjectURL(c),h=new Worker(d);return{transfer:(g,w)=>{},post:(g,w,k)=>{const y=zg();h.onmessage=b=>{b.data.id===y&&w(b.data.message)},h.postMessage({id:y,message:g},k)},terminate:()=>{h.terminate(),URL.revokeObjectURL(d)}}},cO=i=>new Promise((c,d)=>{const h=new Image;h.onload=()=>{c(h)},h.onerror=g=>{d(g)},h.src=i}),JA=(i,c)=>{const d=i.slice(0,i.size,i.type);return d.lastModifiedDate=i.lastModifiedDate,d.name=c,d},lO=i=>JA(i,i.name),B0=[],dO=i=>{if(B0.includes(i))return;B0.push(i);const c=i({addFilter:c2,utils:{Type:ae,forin:yt,isString:wn,isFile:gs,toNaturalFileSize:PA,replaceInString:sO,getExtensionFromFilename:$l,getFilenameWithoutExtension:xA,guesstimateMimeType:HA,getFileFromBlob:hs,getFilenameFromURL:Ra,createRoute:_n,createWorker:aO,createView:zt,createItemAPI:Tn,loadImage:cO,copyFile:lO,renameFile:JA,createBlob:IA,applyFilterChain:ui,text:Mt,getNumericAspectRatioFromString:CA},views:{fileActionButton:MA}});l2(c.options)},uO=()=>Object.prototype.toString.call(window.operamini)==="[object OperaMini]",hO=()=>"Promise"in window,gO=()=>"slice"in Blob.prototype,mO=()=>"URL"in window&&"createObjectURL"in window.URL,fO=()=>"visibilityState"in document,pO=()=>"performance"in window,bO=()=>"supports"in(window.CSS||{}),kO=()=>/MSIE|Trident/.test(window.navigator.userAgent),Eg=(()=>{const i=mA()&&!uO()&&fO()&&hO()&&gO()&&mO()&&pO()&&(bO()||kO());return()=>i})(),Oo={apps:[]},wO="filepond",wr=()=>{};let Nl={},yl=wr,sg=wr,z0=wr,F0=wr,Ig=wr,j0=wr,V0=wr;if(Eg()){jM(()=>{Oo.apps.forEach(d=>d._read())},d=>{Oo.apps.forEach(h=>h._write(d))});const i=()=>{document.dispatchEvent(new CustomEvent("FilePond:loaded",{detail:{supported:Eg,create:yl,destroy:sg,parse:z0,find:F0,registerPlugin:Ig,setOptions:V0}})),document.removeEventListener("DOMContentLoaded",i)};document.readyState!=="loading"?setTimeout(()=>i(),0):document.addEventListener("DOMContentLoaded",i);const c=()=>yt(Pl(),(d,h)=>{Nl[d]=h[1]});Nl={},c(),yl=(...d)=>{const h=oO(...d);return h.on("destroy",sg),Oo.apps.push(h),L0(h)},sg=d=>{const h=Oo.apps.findIndex(g=>g.isAttachedTo(d));return h>=0?(Oo.apps.splice(h,1)[0].restoreElement(),!0):!1},z0=d=>Array.from(d.querySelectorAll(`.${wO}`)).filter(w=>!Oo.apps.find(k=>k.isAttachedTo(w))).map(w=>yl(w)),F0=d=>{const h=Oo.apps.find(g=>g.isAttachedTo(d));return h?L0(h):null},Ig=(...d)=>{d.forEach(dO),c()},j0=()=>{const d={};return yt(Pl(),(h,g)=>{d[h]=g[0]}),d},V0=d=>(en(d)&&(Oo.apps.forEach(h=>{h.setOptions(d)}),d2(d)),j0())}/*!
 * vue-filepond v7.0.3
 * A handy FilePond adapter component for Vue
 * 
 * Copyright (c) 2022 PQINA
 * https://pqina.nl/filepond
 * 
 * Licensed under the MIT license.
 */const _O=["setOptions","on","off","onOnce","appendTo","insertAfter","insertBefore","isAttachedTo","replaceElement","restoreElement","destroy"],AO=Eg(),vO=i=>({string:String,boolean:Boolean,array:Array,function:Function,int:Number,serverapi:Object,object:Object})[i],bl={},ag=[],cg=[];let CO={};const Ql=(...i)=>{Ig(...i),ag.length=0;for(const c in Nl){if(/^on/.test(c)){ag.push(c);continue}let d=[String,vO(Nl[c])];c=="labelFileProcessingError"&&d.push(Function),bl[c]={type:d,default:void 0}}return{name:"FilePond",props:bl,render(){const c=Object.entries({id:this.id,name:this.name,type:"file",class:this.className,required:this.required,multiple:this.allowMultiple,accept:this.acceptedFileTypes,capture:this.captureMethod}).reduce((d,[h,g])=>(g!==void 0&&(d[h]=g),d),{});return xl("div",{class:{"filepond--wrapper":!0}},[xl("input",c)])},created(){this.watchers=Object.keys(bl).map(c=>this.$watch(c,d=>{this._pond[c]=d}))},mounted(){if(!AO)return;this._element=this.$el.querySelector("input");const c=ag.reduce((h,g)=>(h[g]=(...w)=>{this.$emit("input",this._pond?this._pond.getFiles():[]),this.$emit(g.substr(2),...w)},h),{}),d={};Object.keys(bl).forEach(h=>{this[h]!==void 0&&(d[h]=this[h])}),this._pond=yl(this._element,Object.assign({},CO,c,d)),Object.keys(this._pond).filter(h=>!_O.includes(h)).forEach(h=>{this[h]=this._pond[h]}),cg.push(this._pond)},beforeUnmount(){const{detached:c}=this.$options;if(!this.$el.offsetParent){c.call(this);return}const d=(g,w)=>{const y=((g[0]||{}).removedNodes||[])[0];!y||!y.contains(this.$el)||(w.disconnect(),c.call(this))};new MutationObserver(d).observe(document.documentElement,{childList:!0,subtree:!0})},detached(){if(this.watchers.forEach(d=>d()),!this._pond)return;this._pond.destroy();const c=cg.indexOf(this._pond);c>=0&&cg.splice(c,1),this._pond=null}}};/*!
 * FilePondPluginFileValidateType 1.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */const Na=({addFilter:i,utils:c})=>{const{Type:d,isString:h,replaceInString:g,guesstimateMimeType:w,getExtensionFromFilename:k,getFilenameFromURL:y}=c,b=(P,R)=>{const U=(/^[^/]+/.exec(P)||[]).pop(),G=R.slice(0,-2);return U===G},I=(P,R)=>P.some(U=>/\*$/.test(U)?b(R,U):U===R),E=P=>{let R="";if(h(P)){const U=y(P),G=k(U);G&&(R=w(G))}else R=P.type;return R},x=(P,R,U)=>{if(R.length===0)return!0;const G=E(P);return U?new Promise((W,F)=>{U(P,G).then(H=>{I(R,H)?W():F()}).catch(F)}):I(R,G)},C=P=>R=>P[R]===null?!1:P[R]||R;return i("SET_ATTRIBUTE_TO_OPTION_MAP",P=>Object.assign(P,{accept:"acceptedFileTypes"})),i("ALLOW_HOPPER_ITEM",(P,{query:R})=>R("GET_ALLOW_FILE_TYPE_VALIDATION")?x(P,R("GET_ACCEPTED_FILE_TYPES")):!0),i("LOAD_FILE",(P,{query:R})=>new Promise((U,G)=>{if(!R("GET_ALLOW_FILE_TYPE_VALIDATION")){U(P);return}const W=R("GET_ACCEPTED_FILE_TYPES"),F=R("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"),H=x(P,W,F),J=()=>{const ee=W.map(C(R("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter(te=>te!==!1),se=ee.filter(function(te,q){return ee.indexOf(te)===q});G({status:{main:R("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),sub:g(R("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),{allTypes:se.join(", "),allButLastType:se.slice(0,-1).join(", "),lastType:se[ee.length-1]})}})};if(typeof H=="boolean")return H?U(P):J();H.then(()=>{U(P)}).catch(J)})),{options:{allowFileTypeValidation:[!0,d.BOOLEAN],acceptedFileTypes:[[],d.ARRAY],labelFileTypeNotAllowed:["File is of invalid type",d.STRING],fileValidateTypeLabelExpectedTypes:["Expects {allButLastType} or {lastType}",d.STRING],fileValidateTypeLabelExpectedTypesMap:[{},d.OBJECT],fileValidateTypeDetectType:[null,d.FUNCTION]}}},yO=typeof window<"u"&&typeof window.document<"u";yO&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:Na}));/*!
 * FilePondPluginImagePreview 4.6.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */const EO=i=>/^image/.test(i.type),U0=(i,c)=>Sa(i.x*c,i.y*c),H0=(i,c)=>Sa(i.x+c.x,i.y+c.y),IO=i=>{const c=Math.sqrt(i.x*i.x+i.y*i.y);return c===0?{x:0,y:0}:Sa(i.x/c,i.y/c)},kl=(i,c,d)=>{const h=Math.cos(c),g=Math.sin(c),w=Sa(i.x-d.x,i.y-d.y);return Sa(d.x+h*w.x-g*w.y,d.y+g*w.x+h*w.y)},Sa=(i=0,c=0)=>({x:i,y:c}),Dn=(i,c,d=1,h)=>{if(typeof i=="string")return parseFloat(i)*d;if(typeof i=="number")return i*(h?c[h]:Math.min(c.width,c.height))},TO=(i,c,d)=>{const h=i.borderStyle||i.lineStyle||"solid",g=i.backgroundColor||i.fontColor||"transparent",w=i.borderColor||i.lineColor||"transparent",k=Dn(i.borderWidth||i.lineWidth,c,d),y=i.lineCap||"round",b=i.lineJoin||"round",I=typeof h=="string"?"":h.map(x=>Dn(x,c,d)).join(","),E=i.opacity||1;return{"stroke-linecap":y,"stroke-linejoin":b,"stroke-width":k||0,"stroke-dasharray":I,stroke:w,fill:g,opacity:E}},ei=i=>i!=null,DO=(i,c,d=1)=>{let h=Dn(i.x,c,d,"width")||Dn(i.left,c,d,"width"),g=Dn(i.y,c,d,"height")||Dn(i.top,c,d,"height"),w=Dn(i.width,c,d,"width"),k=Dn(i.height,c,d,"height"),y=Dn(i.right,c,d,"width"),b=Dn(i.bottom,c,d,"height");return ei(g)||(ei(k)&&ei(b)?g=c.height-k-b:g=b),ei(h)||(ei(w)&&ei(y)?h=c.width-w-y:h=y),ei(w)||(ei(h)&&ei(y)?w=c.width-h-y:w=0),ei(k)||(ei(g)&&ei(b)?k=c.height-g-b:k=0),{x:h||0,y:g||0,width:w||0,height:k||0}},xO=i=>i.map((c,d)=>`${d===0?"M":"L"} ${c.x} ${c.y}`).join(" "),Si=(i,c)=>Object.keys(c).forEach(d=>i.setAttribute(d,c[d])),SO="http://www.w3.org/2000/svg",os=(i,c)=>{const d=document.createElementNS(SO,i);return c&&Si(d,c),d},MO=i=>Si(i,{...i.rect,...i.styles}),PO=i=>{const c=i.rect.x+i.rect.width*.5,d=i.rect.y+i.rect.height*.5,h=i.rect.width*.5,g=i.rect.height*.5;return Si(i,{cx:c,cy:d,rx:h,ry:g,...i.styles})},OO={contain:"xMidYMid meet",cover:"xMidYMid slice"},RO=(i,c)=>{Si(i,{...i.rect,...i.styles,preserveAspectRatio:OO[c.fit]||"none"})},NO={left:"start",center:"middle",right:"end"},LO=(i,c,d,h)=>{const g=Dn(c.fontSize,d,h),w=c.fontFamily||"sans-serif",k=c.fontWeight||"normal",y=NO[c.textAlign]||"start";Si(i,{...i.rect,...i.styles,"stroke-width":0,"font-weight":k,"font-size":g,"font-family":w,"text-anchor":y}),i.text!==c.text&&(i.text=c.text,i.textContent=c.text.length?c.text:" ")},BO=(i,c,d,h)=>{Si(i,{...i.rect,...i.styles,fill:"none"});const g=i.childNodes[0],w=i.childNodes[1],k=i.childNodes[2],y=i.rect,b={x:i.rect.x+i.rect.width,y:i.rect.y+i.rect.height};if(Si(g,{x1:y.x,y1:y.y,x2:b.x,y2:b.y}),!c.lineDecoration)return;w.style.display="none",k.style.display="none";const I=IO({x:b.x-y.x,y:b.y-y.y}),E=Dn(.05,d,h);if(c.lineDecoration.indexOf("arrow-begin")!==-1){const x=U0(I,E),C=H0(y,x),P=kl(y,2,C),R=kl(y,-2,C);Si(w,{style:"display:block;",d:`M${P.x},${P.y} L${y.x},${y.y} L${R.x},${R.y}`})}if(c.lineDecoration.indexOf("arrow-end")!==-1){const x=U0(I,-E),C=H0(b,x),P=kl(b,2,C),R=kl(b,-2,C);Si(k,{style:"display:block;",d:`M${P.x},${P.y} L${b.x},${b.y} L${R.x},${R.y}`})}},zO=(i,c,d,h)=>{Si(i,{...i.styles,fill:"none",d:xO(c.points.map(g=>({x:Dn(g.x,d,h,"width"),y:Dn(g.y,d,h,"height")})))})},wl=i=>c=>os(i,{id:c.id}),FO=i=>{const c=os("image",{id:i.id,"stroke-linecap":"round","stroke-linejoin":"round",opacity:"0"});return c.onload=()=>{c.setAttribute("opacity",i.opacity||1)},c.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i.src),c},jO=i=>{const c=os("g",{id:i.id,"stroke-linecap":"round","stroke-linejoin":"round"}),d=os("line");c.appendChild(d);const h=os("path");c.appendChild(h);const g=os("path");return c.appendChild(g),c},VO={image:FO,rect:wl("rect"),ellipse:wl("ellipse"),text:wl("text"),path:wl("path"),line:jO},UO={rect:MO,ellipse:PO,image:RO,text:LO,path:zO,line:BO},HO=(i,c)=>VO[i](c),GO=(i,c,d,h,g)=>{c!=="path"&&(i.rect=DO(d,h,g)),i.styles=TO(d,h,g),UO[c](i,d,h,g)},WO=["x","y","left","top","right","bottom","width","height"],YO=i=>typeof i=="string"&&/%/.test(i)?parseFloat(i)/100:i,$O=i=>{const[c,d]=i,h=d.points?{}:WO.reduce((g,w)=>(g[w]=YO(d[w]),g),{});return[c,{zIndex:0,...d,...h}]},qO=(i,c)=>i[1].zIndex>c[1].zIndex?1:i[1].zIndex<c[1].zIndex?-1:0,KO=i=>i.utils.createView({name:"image-preview-markup",tag:"svg",ignoreRect:!0,mixins:{apis:["width","height","crop","markup","resize","dirty"]},write:({root:c,props:d})=>{if(!d.dirty)return;const{crop:h,resize:g,markup:w}=d,k=d.width,y=d.height;let b=h.width,I=h.height;if(g){const{size:P}=g;let R=P&&P.width,U=P&&P.height;const G=g.mode,W=g.upscale;R&&!U&&(U=R),U&&!R&&(R=U);const F=b<R&&I<U;if(!F||F&&W){let H=R/b,J=U/I;if(G==="force")b=R,I=U;else{let ee;G==="cover"?ee=Math.max(H,J):G==="contain"&&(ee=Math.min(H,J)),b=b*ee,I=I*ee}}}const E={width:k,height:y};c.element.setAttribute("width",E.width),c.element.setAttribute("height",E.height);const x=Math.min(k/b,y/I);c.element.innerHTML="";const C=c.query("GET_IMAGE_PREVIEW_MARKUP_FILTER");w.filter(C).map($O).sort(qO).forEach(P=>{const[R,U]=P,G=HO(R,U);GO(G,R,U,E,x),c.element.appendChild(G)})}}),Ea=(i,c)=>({x:i,y:c}),QO=(i,c)=>i.x*c.x+i.y*c.y,G0=(i,c)=>Ea(i.x-c.x,i.y-c.y),ZO=(i,c)=>QO(G0(i,c),G0(i,c)),W0=(i,c)=>Math.sqrt(ZO(i,c)),Y0=(i,c)=>{const d=i,h=1.5707963267948966,g=c,w=1.5707963267948966-c,k=Math.sin(h),y=Math.sin(g),b=Math.sin(w),I=Math.cos(w),E=d/k,x=E*y,C=E*b;return Ea(I*x,I*C)},XO=(i,c)=>{const d=i.width,h=i.height,g=Y0(d,c),w=Y0(h,c),k=Ea(i.x+Math.abs(g.x),i.y-Math.abs(g.y)),y=Ea(i.x+i.width+Math.abs(w.y),i.y+Math.abs(w.x)),b=Ea(i.x-Math.abs(w.y),i.y+i.height-Math.abs(w.x));return{width:W0(k,y),height:W0(k,b)}},JO=(i,c,d=1)=>{const h=i.height/i.width;let g=1,w=c,k=1,y=h;y>w&&(y=w,k=y/h);const b=Math.max(g/k,w/y),I=i.width/(d*b*k),E=I*c;return{width:I,height:E}},ev=(i,c,d,h)=>{const g=h.x>.5?1-h.x:h.x,w=h.y>.5?1-h.y:h.y,k=g*2*i.width,y=w*2*i.height,b=XO(c,d);return Math.max(b.width/k,b.height/y)},tv=(i,c)=>{let d=i.width,h=d*c;h>i.height&&(h=i.height,d=h/c);const g=(i.width-d)*.5,w=(i.height-h)*.5;return{x:g,y:w,width:d,height:h}},eR=(i,c={})=>{let{zoom:d,rotation:h,center:g,aspectRatio:w}=c;w||(w=i.height/i.width);const k=JO(i,w,d),y={x:k.width*.5,y:k.height*.5},b={x:0,y:0,width:k.width,height:k.height,center:y},I=typeof c.scaleToFit>"u"||c.scaleToFit,E=ev(i,tv(b,w),h,I?g:{x:.5,y:.5}),x=d*E;return{widthFloat:k.width/x,heightFloat:k.height/x,width:Math.round(k.width/x),height:Math.round(k.height/x)}},Di={type:"spring",stiffness:.5,damping:.45,mass:10},tR=i=>i.utils.createView({name:"image-bitmap",ignoreRect:!0,mixins:{styles:["scaleX","scaleY"]},create:({root:c,props:d})=>{c.appendChild(d.image)}}),nR=i=>i.utils.createView({name:"image-canvas-wrapper",tag:"div",ignoreRect:!0,mixins:{apis:["crop","width","height"],styles:["originX","originY","translateX","translateY","scaleX","scaleY","rotateZ"],animations:{originX:Di,originY:Di,scaleX:Di,scaleY:Di,translateX:Di,translateY:Di,rotateZ:Di}},create:({root:c,props:d})=>{d.width=d.image.width,d.height=d.image.height,c.ref.bitmap=c.appendChildView(c.createChildView(tR(i),{image:d.image}))},write:({root:c,props:d})=>{const{flip:h}=d.crop,{bitmap:g}=c.ref;g.scaleX=h.horizontal?-1:1,g.scaleY=h.vertical?-1:1}}),iR=i=>i.utils.createView({name:"image-clip",tag:"div",ignoreRect:!0,mixins:{apis:["crop","markup","resize","width","height","dirty","background"],styles:["width","height","opacity"],animations:{opacity:{type:"tween",duration:250}}},didWriteView:function({root:c,props:d}){!d.background||(c.element.style.backgroundColor=d.background)},create:({root:c,props:d})=>{c.ref.image=c.appendChildView(c.createChildView(nR(i),Object.assign({},d))),c.ref.createMarkup=()=>{c.ref.markup||(c.ref.markup=c.appendChildView(c.createChildView(KO(i),Object.assign({},d))))},c.ref.destroyMarkup=()=>{!c.ref.markup||(c.removeChildView(c.ref.markup),c.ref.markup=null)};const h=c.query("GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR");h!==null&&(h==="grid"?c.element.dataset.transparencyIndicator=h:c.element.dataset.transparencyIndicator="color")},write:({root:c,props:d,shouldOptimize:h})=>{const{crop:g,markup:w,resize:k,dirty:y,width:b,height:I}=d;c.ref.image.crop=g;const E={x:0,y:0,width:b,height:I,center:{x:b*.5,y:I*.5}},x={width:c.ref.image.width,height:c.ref.image.height},C={x:g.center.x*x.width,y:g.center.y*x.height},P={x:E.center.x-x.width*g.center.x,y:E.center.y-x.height*g.center.y},R=Math.PI*2+g.rotation%(Math.PI*2),U=g.aspectRatio||x.height/x.width,G=typeof g.scaleToFit>"u"||g.scaleToFit,W=ev(x,tv(E,U),R,G?g.center:{x:.5,y:.5}),F=g.zoom*W;w&&w.length?(c.ref.createMarkup(),c.ref.markup.width=b,c.ref.markup.height=I,c.ref.markup.resize=k,c.ref.markup.dirty=y,c.ref.markup.markup=w,c.ref.markup.crop=eR(x,g)):c.ref.markup&&c.ref.destroyMarkup();const H=c.ref.image;if(h){H.originX=null,H.originY=null,H.translateX=null,H.translateY=null,H.rotateZ=null,H.scaleX=null,H.scaleY=null;return}H.originX=C.x,H.originY=C.y,H.translateX=P.x,H.translateY=P.y,H.rotateZ=R,H.scaleX=F,H.scaleY=F}}),oR=i=>i.utils.createView({name:"image-preview",tag:"div",ignoreRect:!0,mixins:{apis:["image","crop","markup","resize","dirty","background"],styles:["translateY","scaleX","scaleY","opacity"],animations:{scaleX:Di,scaleY:Di,translateY:Di,opacity:{type:"tween",duration:400}}},create:({root:c,props:d})=>{c.ref.clip=c.appendChildView(c.createChildView(iR(i),{id:d.id,image:d.image,crop:d.crop,markup:d.markup,resize:d.resize,dirty:d.dirty,background:d.background}))},write:({root:c,props:d,shouldOptimize:h})=>{const{clip:g}=c.ref,{image:w,crop:k,markup:y,resize:b,dirty:I}=d;if(g.crop=k,g.markup=y,g.resize=b,g.dirty=I,g.opacity=h?0:1,h||c.rect.element.hidden)return;const E=w.height/w.width;let x=k.aspectRatio||E;const C=c.rect.inner.width,P=c.rect.inner.height;let R=c.query("GET_IMAGE_PREVIEW_HEIGHT");const U=c.query("GET_IMAGE_PREVIEW_MIN_HEIGHT"),G=c.query("GET_IMAGE_PREVIEW_MAX_HEIGHT"),W=c.query("GET_PANEL_ASPECT_RATIO"),F=c.query("GET_ALLOW_MULTIPLE");W&&!F&&(R=C*W,x=W);let H=R!==null?R:Math.max(U,Math.min(C*x,G)),J=H/x;J>C&&(J=C,H=J*x),H>P&&(H=P,J=P/x),g.width=J,g.height=H}});let rR=`<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">
    <defs>
        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">
            <stop offset='50%' stop-color='#000000'/>
            <stop offset='56%' stop-color='#0a0a0a'/>
            <stop offset='63%' stop-color='#262626'/>
            <stop offset='69%' stop-color='#4f4f4f'/>
            <stop offset='75%' stop-color='#808080'/>
            <stop offset='81%' stop-color='#b1b1b1'/>
            <stop offset='88%' stop-color='#dadada'/>
            <stop offset='94%' stop-color='#f6f6f6'/>
            <stop offset='100%' stop-color='#ffffff'/>
        </radialGradient>
        <mask id="mask-__UID__">
            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>
        </mask>
    </defs>
    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>
</svg>`,$0=0;const sR=i=>i.utils.createView({name:"image-preview-overlay",tag:"div",ignoreRect:!0,create:({root:c,props:d})=>{let h=rR;if(document.querySelector("base")){const g=new URL(window.location.href.replace(window.location.hash,"")).href;h=h.replace(/url\(\#/g,"url("+g+"#")}$0++,c.element.classList.add(`filepond--image-preview-overlay-${d.status}`),c.element.innerHTML=h.replace(/__UID__/g,$0)},mixins:{styles:["opacity"],animations:{opacity:{type:"spring",mass:25}}}}),aR=function(){self.onmessage=i=>{createImageBitmap(i.data.message.file).then(c=>{self.postMessage({id:i.data.id,message:c},[c])})}},cR=function(){self.onmessage=i=>{const c=i.data.message.imageData,d=i.data.message.colorMatrix,h=c.data,g=h.length,w=d[0],k=d[1],y=d[2],b=d[3],I=d[4],E=d[5],x=d[6],C=d[7],P=d[8],R=d[9],U=d[10],G=d[11],W=d[12],F=d[13],H=d[14],J=d[15],ee=d[16],se=d[17],te=d[18],q=d[19];let ne=0,fe=0,de=0,z=0,Ce=0;for(;ne<g;ne+=4)fe=h[ne]/255,de=h[ne+1]/255,z=h[ne+2]/255,Ce=h[ne+3]/255,h[ne]=Math.max(0,Math.min((fe*w+de*k+z*y+Ce*b+I)*255,255)),h[ne+1]=Math.max(0,Math.min((fe*E+de*x+z*C+Ce*P+R)*255,255)),h[ne+2]=Math.max(0,Math.min((fe*U+de*G+z*W+Ce*F+H)*255,255)),h[ne+3]=Math.max(0,Math.min((fe*J+de*ee+z*se+Ce*te+q)*255,255));self.postMessage({id:i.data.id,message:c},[c.data.buffer])}},lR=(i,c)=>{let d=new Image;d.onload=()=>{const h=d.naturalWidth,g=d.naturalHeight;d=null,c(h,g)},d.src=i},dR={1:()=>[1,0,0,1,0,0],2:i=>[-1,0,0,1,i,0],3:(i,c)=>[-1,0,0,-1,i,c],4:(i,c)=>[1,0,0,-1,0,c],5:()=>[0,1,1,0,0,0],6:(i,c)=>[0,1,-1,0,c,0],7:(i,c)=>[0,-1,-1,0,c,i],8:i=>[0,-1,1,0,0,i]},uR=(i,c,d,h)=>{h!==-1&&i.transform.apply(i,dR[h](c,d))},hR=(i,c,d,h)=>{c=Math.round(c),d=Math.round(d);const g=document.createElement("canvas");g.width=c,g.height=d;const w=g.getContext("2d");return h>=5&&h<=8&&([c,d]=[d,c]),uR(w,c,d,h),w.drawImage(i,0,0,c,d),g},nv=i=>/^image/.test(i.type)&&!/svg/.test(i.type),gR=10,mR=10,fR=i=>{const c=Math.min(gR/i.width,mR/i.height),d=document.createElement("canvas"),h=d.getContext("2d"),g=d.width=Math.ceil(i.width*c),w=d.height=Math.ceil(i.height*c);h.drawImage(i,0,0,g,w);let k=null;try{k=h.getImageData(0,0,g,w).data}catch{return null}const y=k.length;let b=0,I=0,E=0,x=0;for(;x<y;x+=4)b+=k[x]*k[x],I+=k[x+1]*k[x+1],E+=k[x+2]*k[x+2];return b=lg(b,y),I=lg(I,y),E=lg(E,y),{r:b,g:I,b:E}},lg=(i,c)=>Math.floor(Math.sqrt(i/(c/4))),pR=(i,c)=>(c=c||document.createElement("canvas"),c.width=i.width,c.height=i.height,c.getContext("2d").drawImage(i,0,0),c),bR=i=>{let c;try{c=new ImageData(i.width,i.height)}catch{c=document.createElement("canvas").getContext("2d").createImageData(i.width,i.height)}return c.data.set(new Uint8ClampedArray(i.data)),c},kR=i=>new Promise((c,d)=>{const h=new Image;h.crossOrigin="Anonymous",h.onload=()=>{c(h)},h.onerror=g=>{d(g)},h.src=i}),wR=i=>{const c=sR(i),d=oR(i),{createWorker:h}=i.utils,g=(F,H,J)=>new Promise(ee=>{F.ref.imageData||(F.ref.imageData=J.getContext("2d").getImageData(0,0,J.width,J.height));const se=bR(F.ref.imageData);if(!H||H.length!==20)return J.getContext("2d").putImageData(se,0,0),ee();const te=h(cR);te.post({imageData:se,colorMatrix:H},q=>{J.getContext("2d").putImageData(q,0,0),te.terminate(),ee()},[se.data.buffer])}),w=(F,H)=>{F.removeChildView(H),H.image.width=1,H.image.height=1,H._destroy()},k=({root:F})=>{const H=F.ref.images.shift();return H.opacity=0,H.translateY=-15,F.ref.imageViewBin.push(H),H},y=({root:F,props:H,image:J})=>{const ee=H.id,se=F.query("GET_ITEM",{id:ee});if(!se)return;const te=se.getMetadata("crop")||{center:{x:.5,y:.5},flip:{horizontal:!1,vertical:!1},zoom:1,rotation:0,aspectRatio:null},q=F.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR");let ne,fe,de=!1;F.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")&&(ne=se.getMetadata("markup")||[],fe=se.getMetadata("resize"),de=!0);const z=F.appendChildView(F.createChildView(d,{id:ee,image:J,crop:te,resize:fe,markup:ne,dirty:de,background:q,opacity:0,scaleX:1.15,scaleY:1.15,translateY:15}),F.childViews.length);F.ref.images.push(z),z.opacity=1,z.scaleX=1,z.scaleY=1,z.translateY=0,setTimeout(()=>{F.dispatch("DID_IMAGE_PREVIEW_SHOW",{id:ee})},250)},b=({root:F,props:H})=>{const J=F.query("GET_ITEM",{id:H.id});if(!J)return;const ee=F.ref.images[F.ref.images.length-1];ee.crop=J.getMetadata("crop"),ee.background=F.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"),F.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")&&(ee.dirty=!0,ee.resize=J.getMetadata("resize"),ee.markup=J.getMetadata("markup"))},I=({root:F,props:H,action:J})=>{if(!/crop|filter|markup|resize/.test(J.change.key)||!F.ref.images.length)return;const ee=F.query("GET_ITEM",{id:H.id});if(!!ee){if(/filter/.test(J.change.key)){const se=F.ref.images[F.ref.images.length-1];g(F,J.change.value,se.image);return}if(/crop|markup|resize/.test(J.change.key)){const se=ee.getMetadata("crop"),te=F.ref.images[F.ref.images.length-1];if(se&&se.aspectRatio&&te.crop&&te.crop.aspectRatio&&Math.abs(se.aspectRatio-te.crop.aspectRatio)>1e-5){const q=k({root:F});y({root:F,props:H,image:pR(q.image)})}else b({root:F,props:H})}}},E=F=>{const J=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);return(J?parseInt(J[1]):null)<=58?!1:"createImageBitmap"in window&&nv(F)},x=({root:F,props:H})=>{const{id:J}=H,ee=F.query("GET_ITEM",J);if(!ee)return;const se=URL.createObjectURL(ee.file);lR(se,(te,q)=>{F.dispatch("DID_IMAGE_PREVIEW_CALCULATE_SIZE",{id:J,width:te,height:q})})},C=({root:F,props:H})=>{const{id:J}=H,ee=F.query("GET_ITEM",J);if(!ee)return;const se=URL.createObjectURL(ee.file),te=()=>{kR(se).then(q)},q=ne=>{URL.revokeObjectURL(se);const de=(ee.getMetadata("exif")||{}).orientation||-1;let{width:z,height:Ce}=ne;if(!z||!Ce)return;de>=5&&de<=8&&([z,Ce]=[Ce,z]);const ie=Math.max(1,window.devicePixelRatio*.75),Q=F.query("GET_IMAGE_PREVIEW_ZOOM_FACTOR")*ie,Z=Ce/z,ke=F.rect.element.width,_e=F.rect.element.height;let Me=ke,ye=Me*Z;Z>1?(Me=Math.min(z,ke*Q),ye=Me*Z):(ye=Math.min(Ce,_e*Q),Me=ye/Z);const lt=hR(ne,Me,ye,de),Ft=()=>{const j=F.query("GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR")?fR(data):null;ee.setMetadata("color",j,!0),"close"in ne&&ne.close(),F.ref.overlayShadow.opacity=1,y({root:F,props:H,image:lt})},Je=ee.getMetadata("filter");Je?g(F,Je,lt).then(Ft):Ft()};if(E(ee.file)){const ne=h(aR);ne.post({file:ee.file},fe=>{if(ne.terminate(),!fe){te();return}q(fe)})}else te()},P=({root:F})=>{const H=F.ref.images[F.ref.images.length-1];H.translateY=0,H.scaleX=1,H.scaleY=1,H.opacity=1},R=({root:F})=>{F.ref.overlayShadow.opacity=1,F.ref.overlayError.opacity=0,F.ref.overlaySuccess.opacity=0},U=({root:F})=>{F.ref.overlayShadow.opacity=.25,F.ref.overlayError.opacity=1},G=({root:F})=>{F.ref.overlayShadow.opacity=.25,F.ref.overlaySuccess.opacity=1},W=({root:F})=>{F.ref.images=[],F.ref.imageData=null,F.ref.imageViewBin=[],F.ref.overlayShadow=F.appendChildView(F.createChildView(c,{opacity:0,status:"idle"})),F.ref.overlaySuccess=F.appendChildView(F.createChildView(c,{opacity:0,status:"success"})),F.ref.overlayError=F.appendChildView(F.createChildView(c,{opacity:0,status:"failure"}))};return i.utils.createView({name:"image-preview-wrapper",create:W,styles:["height"],apis:["height"],destroy:({root:F})=>{F.ref.images.forEach(H=>{H.image.width=1,H.image.height=1})},didWriteView:({root:F})=>{F.ref.images.forEach(H=>{H.dirty=!1})},write:i.utils.createRoute({DID_IMAGE_PREVIEW_DRAW:P,DID_IMAGE_PREVIEW_CONTAINER_CREATE:x,DID_FINISH_CALCULATE_PREVIEWSIZE:C,DID_UPDATE_ITEM_METADATA:I,DID_THROW_ITEM_LOAD_ERROR:U,DID_THROW_ITEM_PROCESSING_ERROR:U,DID_THROW_ITEM_INVALID:U,DID_COMPLETE_ITEM_PROCESSING:G,DID_START_ITEM_PROCESSING:R,DID_REVERT_ITEM_PROCESSING:R},({root:F})=>{const H=F.ref.imageViewBin.filter(J=>J.opacity===0);F.ref.imageViewBin=F.ref.imageViewBin.filter(J=>J.opacity>0),H.forEach(J=>w(F,J)),H.length=0})})},La=i=>{const{addFilter:c,utils:d}=i,{Type:h,createRoute:g,isFile:w}=d,k=wR(i);return c("CREATE_VIEW",y=>{const{is:b,view:I,query:E}=y;if(!b("file")||!E("GET_ALLOW_IMAGE_PREVIEW"))return;const x=({root:G,props:W})=>{const{id:F}=W,H=E("GET_ITEM",F);if(!H||!w(H.file)||H.archived)return;const J=H.file;if(!EO(J)||!E("GET_IMAGE_PREVIEW_FILTER_ITEM")(H))return;const ee="createImageBitmap"in(window||{}),se=E("GET_IMAGE_PREVIEW_MAX_FILE_SIZE");if(!ee&&se&&J.size>se)return;G.ref.imagePreview=I.appendChildView(I.createChildView(k,{id:F}));const te=G.query("GET_IMAGE_PREVIEW_HEIGHT");te&&G.dispatch("DID_UPDATE_PANEL_HEIGHT",{id:H.id,height:te});const q=!ee&&J.size>E("GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE");G.dispatch("DID_IMAGE_PREVIEW_CONTAINER_CREATE",{id:F},q)},C=(G,W)=>{if(!G.ref.imagePreview)return;let{id:F}=W;const H=G.query("GET_ITEM",{id:F});if(!H)return;const J=G.query("GET_PANEL_ASPECT_RATIO"),ee=G.query("GET_ITEM_PANEL_ASPECT_RATIO"),se=G.query("GET_IMAGE_PREVIEW_HEIGHT");if(J||ee||se)return;let{imageWidth:te,imageHeight:q}=G.ref;if(!te||!q)return;const ne=G.query("GET_IMAGE_PREVIEW_MIN_HEIGHT"),fe=G.query("GET_IMAGE_PREVIEW_MAX_HEIGHT"),z=(H.getMetadata("exif")||{}).orientation||-1;if(z>=5&&z<=8&&([te,q]=[q,te]),!nv(H.file)||G.query("GET_IMAGE_PREVIEW_UPSCALE")){const ke=2048/te;te*=ke,q*=ke}const Ce=q/te,ie=(H.getMetadata("crop")||{}).aspectRatio||Ce;let be=Math.max(ne,Math.min(q,fe));const Q=G.rect.element.width,Z=Math.min(Q*ie,be);G.dispatch("DID_UPDATE_PANEL_HEIGHT",{id:H.id,height:Z})},P=({root:G})=>{G.ref.shouldRescale=!0},R=({root:G,action:W})=>{W.change.key==="crop"&&(G.ref.shouldRescale=!0)},U=({root:G,action:W})=>{G.ref.imageWidth=W.width,G.ref.imageHeight=W.height,G.ref.shouldRescale=!0,G.ref.shouldDrawPreview=!0,G.dispatch("KICK")};I.registerWriter(g({DID_RESIZE_ROOT:P,DID_STOP_RESIZE:P,DID_LOAD_ITEM:x,DID_IMAGE_PREVIEW_CALCULATE_SIZE:U,DID_UPDATE_ITEM_METADATA:R},({root:G,props:W})=>{!G.ref.imagePreview||G.rect.element.hidden||(G.ref.shouldRescale&&(C(G,W),G.ref.shouldRescale=!1),G.ref.shouldDrawPreview&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{G.dispatch("DID_FINISH_CALCULATE_PREVIEWSIZE",{id:W.id})})}),G.ref.shouldDrawPreview=!1))}))}),{options:{allowImagePreview:[!0,h.BOOLEAN],imagePreviewFilterItem:[()=>!0,h.FUNCTION],imagePreviewHeight:[null,h.INT],imagePreviewMinHeight:[44,h.INT],imagePreviewMaxHeight:[256,h.INT],imagePreviewMaxFileSize:[null,h.INT],imagePreviewZoomFactor:[2,h.INT],imagePreviewUpscale:[!1,h.BOOLEAN],imagePreviewMaxInstantPreviewFileSize:[1e6,h.INT],imagePreviewTransparencyIndicator:[null,h.STRING],imagePreviewCalculateAverageImageColor:[!1,h.BOOLEAN],imagePreviewMarkupShow:[!0,h.BOOLEAN],imagePreviewMarkupFilter:[()=>!0,h.FUNCTION]}}},_R=typeof window<"u"&&typeof window.document<"u";_R&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:La}));const AR=Ql(Na,La),vR={data(){return{category:{},categories:[],name:"",name_eng:"",order:0,image:"",selected:{parent:""},filepond_image:[],filepond_image_edit:[],views:{loading:!0,saveButton:!0},server:{remove(i,c){c("1")},process:(i,c,d,h,g,w,k,y,b)=>{const I=new FormData;I.append(i,c,c.name);const E=new XMLHttpRequest;return E.open("POST","/_admin/file/upload"),E.upload.onprogress=x=>{w(x.lengthComputable,x.loaded,x.total)},E.onload=function(){E.status>=200&&E.status<300?h(E.responseText):g("oh no")},E.send(I),{abort:()=>{E.abort(),k()}}},revert:(i,c)=>{c(i)},load:(i,c,d,h,g,w)=>{var k=new Request(i);fetch(k).then(function(y){y.blob().then(function(b){c(b)})})}}}},created(){this.loadCategories(),this.$route.params.id?this.loadCategory():this.views.loading=!1},methods:{loadCategories(){axios.get("/_admin/categories").then(i=>{this.categories=i.data})},loadCategory(){axios.get(`/_admin/category/${this.$route.params.id}`).then(i=>{this.category=i.data,this.name=i.data.name,this.name_eng=i.data.name_eng,this.order=i.data.order,this.selected.parent=i.data.parent_id,i.data.image&&(this.filepond_image_edit=[{source:i.data.image,options:{type:"local"}}]),this.views.loading=!1})},save(){if(document.getElementsByName("image")[0]&&(this.image=document.getElementsByName("image")[0].value),!this.name)return this.$swal({text:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",icon:"error"});if(!this.name_eng)return this.$swal({text:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C",icon:"error"});if(!this.image)return this.$swal({text:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443",icon:"error"});if(!this.order)return this.$swal({text:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0443",icon:"error"});this.views.saveButton=!1,this.$route.params.id&&axios.put(`/_admin/category/${this.$route.params.id}/update`,{name:this.name,name_eng:this.name_eng,image:this.image,order:this.order,parent_id:this.selected.parent}).then(i=>{this.views.saveButton=!0,this.$router.push({name:"Category",params:{id:this.category.id}})}).catch(i=>(this.views.saveButton=!0,this.$swal({text:"\u041E\u0448\u0438\u0431\u043A\u0430",icon:"error"}))),this.$route.params.id||axios.post("/_admin/categories",{name:this.name,name_eng:this.name_eng,image:this.image,order:this.order,parent_id:this.selected.parent}).then(i=>{this.views.saveButton=!0,this.$router.push({name:"Category",params:{id:i.data}})}).catch(i=>(this.views.saveButton=!0,this.$swal({text:"\u041E\u0448\u0438\u0431\u043A\u0430",icon:"error"})))}},components:{Loader:Pi,FilePond:AR}},CR={class:"subheader w-100 mb-3"},yR={class:"row align-items-center"},ER={class:"col-12"},IR=B("span",{class:"text-muted me-2"},"/",-1),TR={class:"d-block"},DR={key:1,class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center"},xR={class:"w-100"},SR={class:"mb-3"},MR={class:"box mb-4 p-4"},PR={class:"row"},OR={class:"col-12 col-lg-6 mb-4"},RR=B("label",{class:"form-label"},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (RUS)",-1),NR={class:"col-12 col-lg-6 mb-4"},LR=B("label",{class:"form-label"},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ENG)",-1),BR={class:"col-12 col-lg-6"},zR=B("label",{class:"form-label"},"\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",-1),FR=["value"],jR=["value"],VR={class:"col-12 col-lg-2"},UR=B("label",{class:"form-label"},"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430",-1),HR={class:"mb-3"},GR={class:"box mb-4 p-4"},WR=B("label",{class:"form-label"},"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430",-1),YR=["disabled"];function $R(i,c,d,h,g,w){const k=ft("router-link"),y=ft("Loader"),b=ft("file-pond");return pe(),Ae("div",null,[B("div",CR,[B("div",yR,[B("div",ER,[B("h1",null,[g.category.id?(pe(),Ae(mt,{key:0},[ht(k,{to:{name:"Category",params:{id:g.category.id}}},{default:Lt(()=>[Xe("\u041D\u0430\u0437\u0430\u0434")]),_:1},8,["to"]),IR],64)):Ge("",!0),B("div",TR,[i.$route.params.id?(pe(),Ae(mt,{key:0},[Xe(ut(g.category.name),1)],64)):Ge("",!0),i.$route.params.id?Ge("",!0):(pe(),Ae(mt,{key:1},[Xe("\u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")],64))])])])])]),g.views.loading?(pe(),ii(y,{key:0})):Ge("",!0),g.views.loading?Ge("",!0):(pe(),Ae("div",DR,[B("div",xR,[B("div",SR,[B("div",MR,[B("div",PR,[B("div",OR,[RR,Nt(B("input",{"onUpdate:modelValue":c[0]||(c[0]=I=>g.name=I),type:"text",class:"form-control"},null,512),[[un,g.name]])]),B("div",NR,[LR,Nt(B("input",{"onUpdate:modelValue":c[1]||(c[1]=I=>g.name_eng=I),type:"text",class:"form-control"},null,512),[[un,g.name_eng]])]),B("div",BR,[zR,Nt(B("select",{"onUpdate:modelValue":c[2]||(c[2]=I=>g.selected.parent=I),class:"form-select"},[i.$route.params.id?(pe(!0),Ae(mt,{key:0},pi(g.categories,I=>(pe(),Ae(mt,null,[I.id!=i.$route.params.id?(pe(),Ae("option",{key:0,value:I.id},ut(I.name),9,FR)):Ge("",!0)],64))),256)):(pe(!0),Ae(mt,{key:1},pi(g.categories,I=>(pe(),Ae("option",{value:I.id},ut(I.name),9,jR))),256))],512),[[tA,g.selected.parent]])]),B("div",VR,[UR,Nt(B("input",{"onUpdate:modelValue":c[3]||(c[3]=I=>g.order=I),type:"number",min:"0",class:"form-control"},null,512),[[un,g.order]])])])])]),B("div",HR,[B("div",GR,[WR,ht(b,{name:"image",ref:"image","label-idle":"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443...","allow-multiple":!1,"allow-reorder":!1,"accepted-file-types":"image/jpeg, image/png",server:g.server,files:g.filepond_image_edit},null,8,["server","files"])])]),B("button",{onClick:c[4]||(c[4]=I=>w.save()),disabled:!g.views.saveButton,class:"btn btn-primary mb-4"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",8,YR)])]))])}const qR=jn(vR,[["render",$R]]);var Tg={exports:{}};(function(i,c){(function(d){const h=d.en=d.en||{};h.dictionary=Object.assign(h.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,h){i.exports=h()}(self,()=>(()=>{var d={3062:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const P=C},903:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const P=C},3143:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=C},4717:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const P=C},9315:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const P=C},8733:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const P=C},3508:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const P=C},2640:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const P=C},5083:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const P=C},4036:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const P=C},3773:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const P=C},3689:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const P=C},1905:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=C},9773:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const P=C},2347:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const P=C},7754:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const P=C},4652:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const P=C},7442:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const P=C},9292:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=C},1613:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const P=C},6306:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const P=C},3881:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const P=C},6945:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const P=C},4906:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const P=C},5332:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton:active{background:transparent}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDmEA,CAxCA,yICvBC,qCD+DD,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2EC/CD,eD0DC,CAXA,6LC3CA,qCAAsC,CD6CpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEvEA,kCFyEA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAIA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF,CAKF,gFACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}

	/* Regular buttons get a backgound when active. Switch buttons announce that through the switch toggle instead */
	&:active, &.ck-on:active {
		background: transparent;
	}

}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const P=C},6781:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const P=C},5485:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=C},3949:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=C},7686:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=C},7339:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const P=C},9688:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=C},8847:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const P=C},6574:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	color: inherit;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;

		/* Allows dynamic coloring of the icons. */
		color: inherit;

		&:not([fill]) {
			/* Needed by FF. */
			fill: currentColor;
		}
	}
}
`],sourceRoot:""}]);const P=C},4879:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=C},3662:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const P=C},2577:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-spacing-medium), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-spacing-medium)), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=C},1046:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=C},8793:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=C},4650:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const P=C},7676:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=C},5868:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=C},6764:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const P=C},9695:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const P=C},5542:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=C},3332:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const P=C},4793:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCnGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJmGD,CI7FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const P=C},3488:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=C},8506:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const P=C},4921:(k,y,b)=>{b.d(y,{Z:()=>P});var I=b(1799),E=b.n(I),x=b(2609),C=b.n(x)()(E());C.push([k.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const P=C},2609:k=>{k.exports=function(y){var b=[];return b.toString=function(){return this.map(function(I){var E=y(I);return I[2]?"@media ".concat(I[2]," {").concat(E,"}"):E}).join("")},b.i=function(I,E,x){typeof I=="string"&&(I=[[null,I,""]]);var C={};if(x)for(var P=0;P<this.length;P++){var R=this[P][0];R!=null&&(C[R]=!0)}for(var U=0;U<I.length;U++){var G=[].concat(I[U]);x&&C[G[0]]||(E&&(G[2]?G[2]="".concat(E," and ").concat(G[2]):G[2]=E),b.push(G))}},b}},1799:k=>{function y(I,E){return function(x){if(Array.isArray(x))return x}(I)||function(x,C){var P=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(P!=null){var R,U,G=[],W=!0,F=!1;try{for(P=P.call(x);!(W=(R=P.next()).done)&&(G.push(R.value),!C||G.length!==C);W=!0);}catch(H){F=!0,U=H}finally{try{W||P.return==null||P.return()}finally{if(F)throw U}}return G}}(I,E)||function(x,C){if(!!x){if(typeof x=="string")return b(x,C);var P=Object.prototype.toString.call(x).slice(8,-1);if(P==="Object"&&x.constructor&&(P=x.constructor.name),P==="Map"||P==="Set")return Array.from(x);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return b(x,C)}}(I,E)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(I,E){(E==null||E>I.length)&&(E=I.length);for(var x=0,C=new Array(E);x<E;x++)C[x]=I[x];return C}k.exports=function(I){var E=y(I,4),x=E[1],C=E[3];if(!C)return x;if(typeof btoa=="function"){var P=btoa(unescape(encodeURIComponent(JSON.stringify(C)))),R="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(P),U="/*# ".concat(R," */"),G=C.sources.map(function(W){return"/*# sourceURL=".concat(C.sourceRoot||"").concat(W," */")});return[x].concat(G).concat([U]).join(`
`)}return[x].join(`
`)}},6062:(k,y,b)=>{var I,E=function(){return I===void 0&&(I=Boolean(window&&document&&document.all&&!window.atob)),I},x=function(){var te={};return function(q){if(te[q]===void 0){var ne=document.querySelector(q);if(window.HTMLIFrameElement&&ne instanceof window.HTMLIFrameElement)try{ne=ne.contentDocument.head}catch{ne=null}te[q]=ne}return te[q]}}(),C=[];function P(te){for(var q=-1,ne=0;ne<C.length;ne++)if(C[ne].identifier===te){q=ne;break}return q}function R(te,q){for(var ne={},fe=[],de=0;de<te.length;de++){var z=te[de],Ce=q.base?z[0]+q.base:z[0],ie=ne[Ce]||0,be="".concat(Ce," ").concat(ie);ne[Ce]=ie+1;var Q=P(be),Z={css:z[1],media:z[2],sourceMap:z[3]};Q!==-1?(C[Q].references++,C[Q].updater(Z)):C.push({identifier:be,updater:se(Z,q),references:1}),fe.push(be)}return fe}function U(te){var q=document.createElement("style"),ne=te.attributes||{};if(ne.nonce===void 0){var fe=b.nc;fe&&(ne.nonce=fe)}if(Object.keys(ne).forEach(function(z){q.setAttribute(z,ne[z])}),typeof te.insert=="function")te.insert(q);else{var de=x(te.insert||"head");if(!de)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");de.appendChild(q)}return q}var G,W=(G=[],function(te,q){return G[te]=q,G.filter(Boolean).join(`
`)});function F(te,q,ne,fe){var de=ne?"":fe.media?"@media ".concat(fe.media," {").concat(fe.css,"}"):fe.css;if(te.styleSheet)te.styleSheet.cssText=W(q,de);else{var z=document.createTextNode(de),Ce=te.childNodes;Ce[q]&&te.removeChild(Ce[q]),Ce.length?te.insertBefore(z,Ce[q]):te.appendChild(z)}}function H(te,q,ne){var fe=ne.css,de=ne.media,z=ne.sourceMap;if(de?te.setAttribute("media",de):te.removeAttribute("media"),z&&typeof btoa<"u"&&(fe+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(z))))," */")),te.styleSheet)te.styleSheet.cssText=fe;else{for(;te.firstChild;)te.removeChild(te.firstChild);te.appendChild(document.createTextNode(fe))}}var J=null,ee=0;function se(te,q){var ne,fe,de;if(q.singleton){var z=ee++;ne=J||(J=U(q)),fe=F.bind(null,ne,z,!1),de=F.bind(null,ne,z,!0)}else ne=U(q),fe=H.bind(null,ne,q),de=function(){(function(Ce){if(Ce.parentNode===null)return!1;Ce.parentNode.removeChild(Ce)})(ne)};return fe(te),function(Ce){if(Ce){if(Ce.css===te.css&&Ce.media===te.media&&Ce.sourceMap===te.sourceMap)return;fe(te=Ce)}else de()}}k.exports=function(te,q){(q=q||{}).singleton||typeof q.singleton=="boolean"||(q.singleton=E());var ne=R(te=te||[],q);return function(fe){if(fe=fe||[],Object.prototype.toString.call(fe)==="[object Array]"){for(var de=0;de<ne.length;de++){var z=P(ne[de]);C[z].references--}for(var Ce=R(fe,q),ie=0;ie<ne.length;ie++){var be=P(ne[ie]);C[be].references===0&&(C[be].updater(),C.splice(be,1))}ne=Ce}}}}},h={};function g(k){var y=h[k];if(y!==void 0)return y.exports;var b=h[k]={id:k,exports:{}};return d[k](b,b.exports,g),b.exports}g.n=k=>{var y=k&&k.__esModule?()=>k.default:()=>k;return g.d(y,{a:y}),y},g.d=(k,y)=>{for(var b in y)g.o(y,b)&&!g.o(k,b)&&Object.defineProperty(k,b,{enumerable:!0,get:y[b]})},g.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),g.o=(k,y)=>Object.prototype.hasOwnProperty.call(k,y),g.nc=void 0;var w={};return(()=>{g.d(w,{default:()=>Kh});const k=function(){return function r(){r.called=!0}};class y{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=k(),this.off=k()}}const b=new Array(256).fill("").map((r,e)=>("0"+e.toString(16)).slice(-2));function I(){const r=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+b[r>>0&255]+b[r>>8&255]+b[r>>16&255]+b[r>>24&255]+b[e>>0&255]+b[e>>8&255]+b[e>>16&255]+b[e>>24&255]+b[t>>0&255]+b[t>>8&255]+b[t>>16&255]+b[t>>24&255]+b[n>>0&255]+b[n>>8&255]+b[n>>16&255]+b[n>>24&255]}const E={get(r="normal"){return typeof r!="number"?this[r]||this.normal:r},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function x(r,e){const t=E.get(e.priority);for(let n=0;n<r.length;n++)if(E.get(r[n].priority)<t)return void r.splice(n,0,e);r.push(e)}class C extends Error{constructor(e,t,n){super(function(o,s){const a=new WeakSet,l=(f,p)=>{if(typeof p=="object"&&p!==null){if(a.has(p))return`[object ${p.constructor.name}]`;a.add(p)}return p},u=s?` ${JSON.stringify(s,l)}`:"",m=U(o);return o+u+m}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new C(e.message,t);throw n.stack=e.stack,n}}function P(r,e){console.warn(...G(r,e))}function R(r,e){console.error(...G(r,e))}function U(r){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${r}`}function G(r,e){const t=U(r);return e?[r,e,t]:[r,t]}const W="35.2.1",F=typeof window=="object"?window:g.g;if(F.CKEDITOR_VERSION)throw new C("ckeditor-duplicated-modules",null);F.CKEDITOR_VERSION=W;const H=Symbol("listeningTo"),J=Symbol("emitterId"),ee=Symbol("delegations");function se(r){return class extends r{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let o=!1;this.listenTo(this,e,(s,...a)=>{o||(o=!0,s.off(),t.call(this,s,...a))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,o={}){let s,a;this[H]||(this[H]={});const l=this[H];ne(e)||q(e);const u=ne(e);(s=l[u])||(s=l[u]={emitter:e,callbacks:{}}),(a=s.callbacks[t])||(a=s.callbacks[t]=[]),a.push(n),function(m,f,p,v,T){f._addEventListener?f._addEventListener(p,v,T):m._addEventListener.call(f,p,v,T)}(this,e,t,n,o)}stopListening(e,t,n){const o=this[H];let s=e&&ne(e);const a=o&&s?o[s]:void 0,l=a&&t?a.callbacks[t]:void 0;if(!(!o||e&&!a||t&&!l))if(n)ie(this,e,t,n),l.indexOf(n)!==-1&&(l.length===1?delete a.callbacks[t]:ie(this,e,t,n));else if(l){for(;n=l.pop();)ie(this,e,t,n);delete a.callbacks[t]}else if(a){for(t in a.callbacks)this.stopListening(e,t);delete o[s]}else{for(s in o)this.stopListening(o[s].emitter);delete this[H]}}fire(e,...t){try{const n=e instanceof y?e:new y(this,e),o=n.name;let s=z(this,o);if(n.path.push(this),s){const l=[n,...t];s=Array.from(s);for(let u=0;u<s.length&&(s[u].callback.apply(this,l),n.off.called&&(delete n.off.called,this._removeEventListener(o,s[u].callback)),!n.stop.called);u++);}const a=this[ee];if(a){const l=a.get(o),u=a.get("*");l&&Ce(l,n,t),u&&Ce(u,n,t)}return n.return}catch(n){C.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[ee]||(this[ee]=new Map),e.forEach(o=>{const s=this[ee].get(o);s?s.set(t,n):this[ee].set(o,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[ee])if(e)if(t){const n=this[ee].get(e);n&&n.delete(t)}else this[ee].delete(e);else this[ee].clear()}_addEventListener(e,t,n){(function(a,l){const u=fe(a);if(u[l])return;let m=l,f=null;const p=[];for(;m!==""&&!u[m];)u[m]={callbacks:[],childEvents:[]},p.push(u[m]),f&&u[m].childEvents.push(f),f=m,m=m.substr(0,m.lastIndexOf(":"));if(m!==""){for(const v of p)v.callbacks=u[m].callbacks.slice();u[m].childEvents.push(f)}})(this,e);const o=de(this,e),s={callback:t,priority:E.get(n.priority)};for(const a of o)x(a,s)}_removeEventListener(e,t){const n=de(this,e);for(const o of n)for(let s=0;s<o.length;s++)o[s].callback==t&&(o.splice(s,1),s--)}}}const te=se(Object);function q(r,e){r[J]||(r[J]=e||I())}function ne(r){return r[J]}function fe(r){return r._events||Object.defineProperty(r,"_events",{value:{}}),r._events}function de(r,e){const t=fe(r)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const s=de(r,t.childEvents[o]);n=n.concat(s)}return n}function z(r,e){let t;return r._events&&(t=r._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?z(r,e.substr(0,e.lastIndexOf(":"))):null}function Ce(r,e,t){for(let[n,o]of r){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const s=new y(e.source,o);s.path=[...e.path],n.fire(s,...t)}}function ie(r,e,t,n){e._removeEventListener?e._removeEventListener(t,n):r._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{se[r]=te.prototype[r]});const be=function(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")},Q=Symbol("observableProperties"),Z=Symbol("boundObservables"),ke=Symbol("boundProperties"),_e=Symbol("decoratedMethods"),Me=Symbol("decoratedOriginal");function ye(r){return class extends r{set(e,t){if(be(e))return void Object.keys(e).forEach(o=>{this.set(o,e[o])},this);Ft(this);const n=this[Q];if(e in this&&!n.has(e))throw new C("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(o){const s=n.get(e);let a=this.fire(`set:${e}`,e,o,s);a===void 0&&(a=o),s===a&&n.has(e)||(n.set(e,a),this.fire(`change:${e}`,e,a,s))}}),this[e]=t}bind(...e){if(!e.length||!X(e))throw new C("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new C("observable-bind-duplicate-properties",this);Ft(this);const t=this[ke];e.forEach(o=>{if(t.has(o))throw new C("observable-bind-rebind",this)});const n=new Map;return e.forEach(o=>{const s={property:o,to:[]};t.set(o,s),n.set(o,s)}),{to:Je,toMany:j,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[Q])return;const t=this[ke],n=this[Z];if(e.length){if(!X(e))throw new C("observable-unbind-wrong-properties",this);e.forEach(o=>{const s=t.get(o);s&&(s.to.forEach(([a,l])=>{const u=n.get(a),m=u[l];m.delete(s),m.size||delete u[l],Object.keys(u).length||(n.delete(a),this.stopListening(a,"change"))}),t.delete(o))})}else n.forEach((o,s)=>{this.stopListening(s,"change")}),n.clear(),t.clear()}decorate(e){Ft(this);const t=this[e];if(!t)throw new C("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,o)=>{n.return=t.apply(this,o)}),this[e]=function(...n){return this.fire(e,n)},this[e][Me]=t,this[_e]||(this[_e]=[]),this[_e].push(e)}stopListening(e,t,n){if(!e&&this[_e]){for(const o of this[_e])this[o]=this[o][Me];delete this[_e]}te.prototype.stopListening.call(this,e,t,n)}}}const lt=ye(te);function Ft(r){r[Q]||(Object.defineProperty(r,Q,{value:new Map}),Object.defineProperty(r,Z,{value:new Map}),Object.defineProperty(r,ke,{value:new Map}))}function Je(...r){const e=function(...s){if(!s.length)throw new C("observable-bind-to-parse-error",null);const a={to:[]};let l;return typeof s[s.length-1]=="function"&&(a.callback=s.pop()),s.forEach(u=>{if(typeof u=="string")l.properties.push(u);else{if(typeof u!="object")throw new C("observable-bind-to-parse-error",null);l={observable:u,properties:[]},a.to.push(l)}}),a}(...r),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new C("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new C("observable-bind-to-extra-callback",this);var o;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new C("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(s=>{const a=o[Z];let l;a.get(s.observable)||o.listenTo(s.observable,"change",(u,m)=>{l=a.get(s.observable)[m],l&&l.forEach(f=>{oe(o,f.property)})})}),function(s){let a;s._bindings.forEach((l,u)=>{s._to.forEach(m=>{a=m.properties[l.callback?0:s._bindProperties.indexOf(u)],l.to.push([m.observable,a]),function(f,p,v,T){const S=f[Z],M=S.get(v),O=M||{};O[T]||(O[T]=new Set),O[T].add(p),M||S.set(v,O)}(s._observable,l,m.observable,a)})})}(this),this._bindProperties.forEach(s=>{oe(this._observable,s)})}function j(r,e,t){if(this._bindings.size>1)throw new C("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const s=n.map(a=>[a,o]);return Array.prototype.concat.apply([],s)}(r,e),t)}function X(r){return r.every(e=>typeof e=="string")}function oe(r,e){const t=r[ke].get(e);let n;t.callback?n=t.callback.apply(r,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(r,e)?r[e]=n:r.set(e,n)}function ce(r,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(s=>{if(s in r.prototype||typeof t=="function"&&(s=="length"||s=="name"||s=="prototype"))return;const a=Object.getOwnPropertyDescriptor(t,s);a.enumerable=!1,Object.defineProperty(r.prototype,s,a)})})}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{ye[r]=lt.prototype[r]});class Y{constructor(e){this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Oe,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Oe),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Oe(r){r.return=!1,r.stop()}ce(Y,ye);class he{constructor(e){this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Ee,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Ee),this.refresh())}execute(){}destroy(){this.stopListening()}}function Ee(r){r.return=!1,r.stop()}ce(he,ye);class $e extends he{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={priority:"normal"}){x(this._childCommandsDefinitions,{command:e,priority:t.priority}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}const $t=typeof dl=="object"&&dl&&dl.Object===Object&&dl;var _t=typeof self=="object"&&self&&self.Object===Object&&self;const Et=$t||_t||Function("return this")(),cn=Et.Symbol;var xn=Object.prototype,Pt=xn.hasOwnProperty,Sn=xn.toString,Un=cn?cn.toStringTag:void 0;const tn=function(r){var e=Pt.call(r,Un),t=r[Un];try{r[Un]=void 0;var n=!0}catch{}var o=Sn.call(r);return n&&(e?r[Un]=t:delete r[Un]),o};var Ni=Object.prototype.toString;const It=function(r){return Ni.call(r)};var fn=cn?cn.toStringTag:void 0;const Pe=function(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":fn&&fn in Object(r)?tn(r):It(r)},Mn=function(r,e){return function(t){return r(e(t))}},Hn=Mn(Object.getPrototypeOf,Object),qt=function(r){return r!=null&&typeof r=="object"};var jt=Function.prototype,Kt=Object.prototype,bs=jt.toString,Ar=Kt.hasOwnProperty,An=bs.call(Object);const ln=function(r){if(!qt(r)||Pe(r)!="[object Object]")return!1;var e=Hn(r);if(e===null)return!0;var t=Ar.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&bs.call(t)==An},Va=function(){this.__data__=[],this.size=0},lo=function(r,e){return r===e||r!=r&&e!=e},uo=function(r,e){for(var t=r.length;t--;)if(lo(r[t][0],e))return t;return-1};var ld=Array.prototype.splice;const Ua=function(r){var e=this.__data__,t=uo(e,r);return!(t<0)&&(t==e.length-1?e.pop():ld.call(e,t,1),--this.size,!0)},dd=function(r){var e=this.__data__,t=uo(e,r);return t<0?void 0:e[t][1]},Re=function(r){return uo(this.__data__,r)>-1},ud=function(r,e){var t=this.__data__,n=uo(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function ho(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}ho.prototype.clear=Va,ho.prototype.delete=Ua,ho.prototype.get=dd,ho.prototype.has=Re,ho.prototype.set=ud;const vr=ho,hd=function(){this.__data__=new vr,this.size=0},Li=function(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t},gd=function(r){return this.__data__.get(r)},md=function(r){return this.__data__.has(r)},Bi=function(r){if(!be(r))return!1;var e=Pe(r);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},ks=Et["__core-js_shared__"];var Ha=function(){var r=/[^.]+$/.exec(ks&&ks.keys&&ks.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();const ws=function(r){return!!Ha&&Ha in r};var fd=Function.prototype.toString;const zi=function(r){if(r!=null){try{return fd.call(r)}catch{}try{return r+""}catch{}}return""};var jo=/^\[object .+?Constructor\]$/,pd=Function.prototype,bd=Object.prototype,kd=pd.toString,wd=bd.hasOwnProperty,_s=RegExp("^"+kd.call(wd).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const _d=function(r){return!(!be(r)||ws(r))&&(Bi(r)?_s:jo).test(zi(r))},Ad=function(r,e){return r==null?void 0:r[e]},Fi=function(r,e){var t=Ad(r,e);return _d(t)?t:void 0},Vo=Fi(Et,"Map"),Ne=Fi(Object,"create"),vd=function(){this.__data__=Ne?Ne(null):{},this.size=0},Cd=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e};var yd=Object.prototype.hasOwnProperty;const Ed=function(r){var e=this.__data__;if(Ne){var t=e[r];return t==="__lodash_hash_undefined__"?void 0:t}return yd.call(e,r)?e[r]:void 0};var Id=Object.prototype.hasOwnProperty;const Td=function(r){var e=this.__data__;return Ne?e[r]!==void 0:Id.call(e,r)},As=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=Ne&&e===void 0?"__lodash_hash_undefined__":e,this};function Gn(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Gn.prototype.clear=vd,Gn.prototype.delete=Cd,Gn.prototype.get=Ed,Gn.prototype.has=Td,Gn.prototype.set=As;const vs=Gn,dn=function(){this.size=0,this.__data__={hash:new vs,map:new(Vo||vr),string:new vs}},Dd=function(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null},Cr=function(r,e){var t=r.__data__;return Dd(e)?t[typeof e=="string"?"string":"hash"]:t.map},xd=function(r){var e=Cr(this,r).delete(r);return this.size-=e?1:0,e},Sd=function(r){return Cr(this,r).get(r)},Ga=function(r){return Cr(this,r).has(r)},Md=function(r,e){var t=Cr(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function go(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}go.prototype.clear=dn,go.prototype.delete=xd,go.prototype.get=Sd,go.prototype.has=Ga,go.prototype.set=Md;const yr=go,Wa=function(r,e){var t=this.__data__;if(t instanceof vr){var n=t.__data__;if(!Vo||n.length<199)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new yr(n)}return t.set(r,e),this.size=t.size,this};function mo(r){var e=this.__data__=new vr(r);this.size=e.size}mo.prototype.clear=hd,mo.prototype.delete=Li,mo.prototype.get=gd,mo.prototype.has=md,mo.prototype.set=Wa;const fo=mo,Pd=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r},Er=function(){try{var r=Fi(Object,"defineProperty");return r({},"",{}),r}catch{}}(),Cs=function(r,e,t){e=="__proto__"&&Er?Er(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t};var Od=Object.prototype.hasOwnProperty;const ys=function(r,e,t){var n=r[e];Od.call(r,e)&&lo(n,t)&&(t!==void 0||e in r)||Cs(r,e,t)},po=function(r,e,t,n){var o=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var l=e[s],u=n?n(t[l],r[l],l,t,r):void 0;u===void 0&&(u=r[l]),o?Cs(t,l,u):ys(t,l,u)}return t},Rd=function(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n},Es=function(r){return qt(r)&&Pe(r)=="[object Arguments]"};var ji=Object.prototype,Nd=ji.hasOwnProperty,Ya=ji.propertyIsEnumerable;const Ir=Es(function(){return arguments}())?Es:function(r){return qt(r)&&Nd.call(r,"callee")&&!Ya.call(r,"callee")},nn=Array.isArray,Ld=function(){return!1};var $a=c&&!c.nodeType&&c,qa=$a&&!0&&i&&!i.nodeType&&i,Ka=qa&&qa.exports===$a?Et.Buffer:void 0;const Uo=(Ka?Ka.isBuffer:void 0)||Ld;var Bd=/^(?:0|[1-9]\d*)$/;const Is=function(r,e){var t=typeof r;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&Bd.test(r))&&r>-1&&r%1==0&&r<e},Ai=function(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=9007199254740991};var ot={};ot["[object Float32Array]"]=ot["[object Float64Array]"]=ot["[object Int8Array]"]=ot["[object Int16Array]"]=ot["[object Int32Array]"]=ot["[object Uint8Array]"]=ot["[object Uint8ClampedArray]"]=ot["[object Uint16Array]"]=ot["[object Uint32Array]"]=!0,ot["[object Arguments]"]=ot["[object Array]"]=ot["[object ArrayBuffer]"]=ot["[object Boolean]"]=ot["[object DataView]"]=ot["[object Date]"]=ot["[object Error]"]=ot["[object Function]"]=ot["[object Map]"]=ot["[object Number]"]=ot["[object Object]"]=ot["[object RegExp]"]=ot["[object Set]"]=ot["[object String]"]=ot["[object WeakMap]"]=!1;const zd=function(r){return qt(r)&&Ai(r.length)&&!!ot[Pe(r)]},Ts=function(r){return function(e){return r(e)}};var Qa=c&&!c.nodeType&&c,Ho=Qa&&!0&&i&&!i.nodeType&&i,Ds=Ho&&Ho.exports===Qa&&$t.process;const bo=function(){try{var r=Ho&&Ho.require&&Ho.require("util").types;return r||Ds&&Ds.binding&&Ds.binding("util")}catch{}}();var Za=bo&&bo.isTypedArray;const xs=Za?Ts(Za):zd;var Fd=Object.prototype.hasOwnProperty;const Xa=function(r,e){var t=nn(r),n=!t&&Ir(r),o=!t&&!n&&Uo(r),s=!t&&!n&&!o&&xs(r),a=t||n||o||s,l=a?Rd(r.length,String):[],u=l.length;for(var m in r)!e&&!Fd.call(r,m)||a&&(m=="length"||o&&(m=="offset"||m=="parent")||s&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Is(m,u))||l.push(m);return l};var jd=Object.prototype;const Ss=function(r){var e=r&&r.constructor;return r===(typeof e=="function"&&e.prototype||jd)},Vd=Mn(Object.keys,Object);var Ja=Object.prototype.hasOwnProperty;const Ud=function(r){if(!Ss(r))return Vd(r);var e=[];for(var t in Object(r))Ja.call(r,t)&&t!="constructor"&&e.push(t);return e},Go=function(r){return r!=null&&Ai(r.length)&&!Bi(r)},Ms=function(r){return Go(r)?Xa(r):Ud(r)},Hd=function(r,e){return r&&po(e,Ms(e),r)},Gd=function(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e};var ko=Object.prototype.hasOwnProperty;const Wd=function(r){if(!be(r))return Gd(r);var e=Ss(r),t=[];for(var n in r)(n!="constructor"||!e&&ko.call(r,n))&&t.push(n);return t},wo=function(r){return Go(r)?Xa(r,!0):Wd(r)},Yd=function(r,e){return r&&po(e,wo(e),r)};var ec=c&&!c.nodeType&&c,tc=ec&&!0&&i&&!i.nodeType&&i,nc=tc&&tc.exports===ec?Et.Buffer:void 0,ic=nc?nc.allocUnsafe:void 0;const oc=function(r,e){if(e)return r.slice();var t=r.length,n=ic?ic(t):new r.constructor(t);return r.copy(n),n},rc=function(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e},Ps=function(r,e){for(var t=-1,n=r==null?0:r.length,o=0,s=[];++t<n;){var a=r[t];e(a,t,r)&&(s[o++]=a)}return s},Os=function(){return[]};var $d=Object.prototype.propertyIsEnumerable,sc=Object.getOwnPropertySymbols;const Rs=sc?function(r){return r==null?[]:(r=Object(r),Ps(sc(r),function(e){return $d.call(r,e)}))}:Os,ac=function(r,e){return po(r,Rs(r),e)},cc=function(r,e){for(var t=-1,n=e.length,o=r.length;++t<n;)r[o+t]=e[t];return r},Tr=Object.getOwnPropertySymbols?function(r){for(var e=[];r;)cc(e,Rs(r)),r=Hn(r);return e}:Os,lc=function(r,e){return po(r,Tr(r),e)},Ns=function(r,e,t){var n=e(r);return nn(r)?n:cc(n,t(r))},Wo=function(r){return Ns(r,Ms,Rs)},qd=function(r){return Ns(r,wo,Tr)},Ls=Fi(Et,"DataView"),Bs=Fi(Et,"Promise"),_o=Fi(Et,"Set"),zs=Fi(Et,"WeakMap");var dc="[object Map]",uc="[object Promise]",hc="[object Set]",Fs="[object WeakMap]",gc="[object DataView]",Kd=zi(Ls),Qd=zi(Vo),js=zi(Bs),mc=zi(_o),Zd=zi(zs),Vi=Pe;(Ls&&Vi(new Ls(new ArrayBuffer(1)))!=gc||Vo&&Vi(new Vo)!=dc||Bs&&Vi(Bs.resolve())!=uc||_o&&Vi(new _o)!=hc||zs&&Vi(new zs)!=Fs)&&(Vi=function(r){var e=Pe(r),t=e=="[object Object]"?r.constructor:void 0,n=t?zi(t):"";if(n)switch(n){case Kd:return gc;case Qd:return dc;case js:return uc;case mc:return hc;case Zd:return Fs}return e});const Yo=Vi;var Xd=Object.prototype.hasOwnProperty;const Jd=function(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&Xd.call(r,"index")&&(t.index=r.index,t.input=r.input),t},Dr=Et.Uint8Array,Vs=function(r){var e=new r.constructor(r.byteLength);return new Dr(e).set(new Dr(r)),e},fc=function(r,e){var t=e?Vs(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)};var eu=/\w*$/;const tu=function(r){var e=new r.constructor(r.source,eu.exec(r));return e.lastIndex=r.lastIndex,e};var pc=cn?cn.prototype:void 0,bc=pc?pc.valueOf:void 0;const kc=function(r){return bc?Object(bc.call(r)):{}},Us=function(r,e){var t=e?Vs(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)},nu=function(r,e,t){var n=r.constructor;switch(e){case"[object ArrayBuffer]":return Vs(r);case"[object Boolean]":case"[object Date]":return new n(+r);case"[object DataView]":return fc(r,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Us(r,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(r);case"[object RegExp]":return tu(r);case"[object Symbol]":return kc(r)}};var wc=Object.create;const iu=function(){function r(){}return function(e){if(!be(e))return{};if(wc)return wc(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),Hs=function(r){return typeof r.constructor!="function"||Ss(r)?{}:iu(Hn(r))},Gs=function(r){return qt(r)&&Yo(r)=="[object Map]"};var _c=bo&&bo.isMap;const ou=_c?Ts(_c):Gs,ru=function(r){return qt(r)&&Yo(r)=="[object Set]"};var Ws=bo&&bo.isSet;const su=Ws?Ts(Ws):ru;var Ac="[object Arguments]",Ao="[object Function]",vc="[object Object]",rt={};rt[Ac]=rt["[object Array]"]=rt["[object ArrayBuffer]"]=rt["[object DataView]"]=rt["[object Boolean]"]=rt["[object Date]"]=rt["[object Float32Array]"]=rt["[object Float64Array]"]=rt["[object Int8Array]"]=rt["[object Int16Array]"]=rt["[object Int32Array]"]=rt["[object Map]"]=rt["[object Number]"]=rt["[object Object]"]=rt["[object RegExp]"]=rt["[object Set]"]=rt["[object String]"]=rt["[object Symbol]"]=rt["[object Uint8Array]"]=rt["[object Uint8ClampedArray]"]=rt["[object Uint16Array]"]=rt["[object Uint32Array]"]=!0,rt["[object Error]"]=rt[Ao]=rt["[object WeakMap]"]=!1;const vo=function r(e,t,n,o,s,a){var l,u=1&t,m=2&t,f=4&t;if(n&&(l=s?n(e,o,s,a):n(e)),l!==void 0)return l;if(!be(e))return e;var p=nn(e);if(p){if(l=Jd(e),!u)return rc(e,l)}else{var v=Yo(e),T=v==Ao||v=="[object GeneratorFunction]";if(Uo(e))return oc(e,u);if(v==vc||v==Ac||T&&!s){if(l=m||T?{}:Hs(e),!u)return m?lc(e,Yd(l,e)):ac(e,Hd(l,e))}else{if(!rt[v])return s?e:{};l=nu(e,v,u)}}a||(a=new fo);var S=a.get(e);if(S)return S;a.set(e,l),su(e)?e.forEach(function(O){l.add(r(O,t,n,O,e,a))}):ou(e)&&e.forEach(function(O,L){l.set(L,r(O,t,n,L,e,a))});var M=p?void 0:(f?m?qd:Wo:m?wo:Ms)(e);return Pd(M||e,function(O,L){M&&(O=e[L=O]),ys(l,L,r(O,t,n,L,e,a))}),l},Cc=function(r,e){return vo(r,5,e=typeof e=="function"?e:void 0)},vi=function(r){return qt(r)&&r.nodeType===1&&!ln(r)};class yc{constructor(e,t){this._config={},t&&this.define(Ys(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(ln(t))return void this._setObjectToTarget(e,t,o);const s=t.split(".");t=s.pop();for(const a of s)ln(e[a])||(e[a]={}),e=e[a];if(ln(n))return ln(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!ln(e[o])){e=null;break}e=e[o]}return e?Ys(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function Ys(r){return Cc(r,au)}function au(r){return vi(r)?r:void 0}function pn(r){return!(!r||!r[Symbol.iterator])}class Pn extends te{constructor(e={},t={}){super();const n=pn(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new C("collection-add-item-invalid-index",this);let n=0;for(const o of e){const s=this._getItemIdBeforeAdding(o),a=t+n;this._items.splice(a,0,o),this._itemMap.set(s,o),this.fire("add",o,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new C("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new C("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,s,a)=>{const l=t._bindToCollection==this,u=t._bindToInternalToExternalMap.get(s);if(l&&u)this._bindToExternalToInternalMap.set(s,u),this._bindToInternalToExternalMap.set(u,s);else{const m=e(s);if(!m)return void this._skippedIndexesFromExternal.push(a);let f=a;for(const p of this._skippedIndexesFromExternal)a>p&&f--;for(const p of t._skippedIndexesFromExternal)f>=p&&f++;this._bindToExternalToInternalMap.set(s,m),this._bindToInternalToExternalMap.set(m,s),this.add(m,f);for(let p=0;p<t._skippedIndexesFromExternal.length;p++)f<=t._skippedIndexesFromExternal[p]&&t._skippedIndexesFromExternal[p]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,s,a)=>{const l=this._bindToExternalToInternalMap.get(s);l&&this.remove(l),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,m)=>(a<m&&u.push(m-1),a>m&&u.push(m),u),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new C("collection-add-invalid-id",this);if(this.get(n))throw new C("collection-add-item-already-exists",this)}else e[t]=n=I();return n}_remove(e){let t,n,o,s=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),s=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],s=!o,o&&(n=o[a])):(o=e,n=o[a],t=this._items.indexOf(o),s=t==-1||!this._itemMap.get(n)),s)throw new C("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const l=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(l),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}class xr{constructor(e,t=[],n=[]){this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,s]of n)this._contextPlugins.set(o,s),this._contextPlugins.set(s,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new C("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,s=this._context;(function S(M,O=new Set){M.forEach(L=>{u(L)&&(O.has(L)||(O.add(L),L.pluginName&&!o._availablePlugins.has(L.pluginName)&&o._availablePlugins.set(L.pluginName,L),L.requires&&S(L.requires,O)))})})(e),v(e);const a=[...function S(M,O=new Set){return M.map(L=>u(L)?L:o._availablePlugins.get(L)).reduce((L,V)=>O.has(V)?L:(O.add(V),V.requires&&(v(V.requires,V),S(V.requires,O).forEach(K=>L.add(K))),L.add(V)),new Set)}(e.filter(S=>!f(S,t)))];(function(S,M){for(const O of M){if(typeof O!="function")throw new C("plugincollection-replace-plugin-invalid-type",null,{pluginItem:O});const L=O.pluginName;if(!L)throw new C("plugincollection-replace-plugin-missing-name",null,{pluginItem:O});if(O.requires&&O.requires.length)throw new C("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:L});const V=o._availablePlugins.get(L);if(!V)throw new C("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:L});const K=S.indexOf(V);if(K===-1){if(o._contextPlugins.has(V))return;throw new C("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:L})}if(V.requires&&V.requires.length)throw new C("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:L});S.splice(K,1,O),o._availablePlugins.set(L,O)}})(a,n);const l=function(S){return S.map(M=>{const O=o._contextPlugins.get(M)||new M(s);return o._add(M,O),O})}(a);return T(l,"init").then(()=>T(l,"afterInit")).then(()=>l);function u(S){return typeof S=="function"}function m(S){return u(S)&&S.isContextPlugin}function f(S,M){return M.some(O=>O===S||p(S)===O||p(O)===S)}function p(S){return u(S)?S.pluginName||S.name:S}function v(S,M=null){S.map(O=>u(O)?O:o._availablePlugins.get(O)||O).forEach(O=>{(function(L,V){if(!u(L))throw V?new C("plugincollection-soft-required",s,{missingPlugin:L,requiredBy:p(V)}):new C("plugincollection-plugin-not-found",s,{plugin:L})})(O,M),function(L,V){if(!!m(V)&&!m(L))throw new C("plugincollection-context-required",s,{plugin:p(L),requiredBy:p(V)})}(O,M),function(L,V){if(!!V&&!!f(L,t))throw new C("plugincollection-required",s,{plugin:p(L),requiredBy:p(V)})}(O,M)})}function T(S,M){return S.reduce((O,L)=>L[M]?o._contextPlugins.has(L)?O:O.then(L[M].bind(L)):O,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new C("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}function Tt(r){return Array.isArray(r)?r:[r]}let Sr;ce(xr,se);try{Sr={window,document}}catch{Sr={window:{},document:{}}}const Be=Sr;function cu(r,e,t=1){if(typeof t!="number")throw new C("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(Be.window.CKEDITOR_TRANSLATIONS).length;n===1&&(r=Object.keys(Be.window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(u,m){return!!Be.window.CKEDITOR_TRANSLATIONS[u]&&!!Be.window.CKEDITOR_TRANSLATIONS[u].dictionary[m]}(r,o))return t!==1?e.plural:e.string;const s=Be.window.CKEDITOR_TRANSLATIONS[r].dictionary,a=Be.window.CKEDITOR_TRANSLATIONS[r].getPluralForm||(u=>u===1?0:1),l=s[o];return typeof l=="string"?l:l[Number(a(t))]}Be.window.CKEDITOR_TRANSLATIONS||(Be.window.CKEDITOR_TRANSLATIONS={});const lu=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Ec(r){return lu.includes(r)?"rtl":"ltr"}class du{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=Ec(this.uiLanguage),this.contentLanguageDirection=Ec(this.contentLanguage),this.t=(t,n)=>this._t(t,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Tt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,s){return o.replace(/%(\d+)/g,(a,l)=>l<s.length?s[l]:a)}(cu(this.uiLanguage,e,n),t)}}class uu{constructor(e){this.config=new yc(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new xr(this,t);const n=this.config.get("language")||{};this.locale=new du({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Pn,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new C("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new C("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new C("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class $o{constructor(e){this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}ce($o,ye);class Ui{is(){throw new Error("is() method is abstract")}}function Qt(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)if(r[n]!=e[n])return n;return r.length==e.length?"same":r.length<e.length?"prefix":"extension"}const Ic=function(r){return vo(r,4)};class Hi extends se(Ui){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new C("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=Qt(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Ic(this);return delete e.parent,e}}Hi.prototype.is=function(r){return r==="node"||r==="view:node"};class Ze extends Hi{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Ze&&(this===e||this.data===e.data)}_clone(){return new Ze(this.document,this.data)}}Ze.prototype.is=function(r){return r==="$text"||r==="view:$text"||r==="text"||r==="view:text"||r==="node"||r==="view:node"};class vn extends Ui{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new C("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new C("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}function On(r){return pn(r)?new Map(r):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(r)}vn.prototype.is=function(r){return r==="$textProxy"||r==="view:$textProxy"||r==="textProxy"||r==="view:textProxy"};class Cn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=Gi(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const s=Gi(n,o);s&&t.push({element:n,pattern:o,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Gi(r,e){if(typeof e=="function")return e(r);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,r.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const s=new Set(o.getAttributeKeys());return ln(n)?(n.style!==void 0&&P("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&P("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),$s(n,s,a=>o.getAttribute(a))}(e.attributes,r),!t.attributes)||e.classes&&(t.classes=function(n,o){return $s(n,o.getClassNames(),()=>{})}(e.classes,r),!t.classes)||e.styles&&(t.styles=function(n,o){return $s(n,o.getStyleNames(!0),s=>o.getStyle(s))}(e.styles,r),!t.styles)?null:t}function $s(r,e,t){const n=function(a){return Array.isArray(a)?a.map(l=>ln(l)?(l.key!==void 0&&l.value!==void 0||P("matcher-pattern-missing-key-or-value",l),[l.key,l.value]):[l,!0]):ln(a)?Object.entries(a):[[a,!0]]}(r),o=Array.from(e),s=[];if(n.forEach(([a,l])=>{o.forEach(u=>{(function(m,f){return m===!0||m===f||m instanceof RegExp&&f.match(m)})(a,u)&&function(m,f,p){if(m===!0)return!0;const v=p(f);return m===v||m instanceof RegExp&&!!String(v).match(m)}(l,u,t)&&s.push(u)})}),n.length&&!(s.length<n.length))return s}const Mr=function(r){return typeof r=="symbol"||qt(r)&&Pe(r)=="[object Symbol]"};var hu=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gu=/^\w*$/;const mu=function(r,e){if(nn(r))return!1;var t=typeof r;return!(t!="number"&&t!="symbol"&&t!="boolean"&&r!=null&&!Mr(r))||gu.test(r)||!hu.test(r)||e!=null&&r in Object(e)};function qs(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],s=t.cache;if(s.has(o))return s.get(o);var a=r.apply(this,n);return t.cache=s.set(o,a)||s,a};return t.cache=new(qs.Cache||yr),t}qs.Cache=yr;const fu=qs;var Pr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_=/\\(\\)?/g,A=function(r){var e=fu(r,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(Pr,function(t,n,o,s){e.push(o?s.replace(_,"$1"):n||t)}),e});const D=A,N=function(r,e){for(var t=-1,n=r==null?0:r.length,o=Array(n);++t<n;)o[t]=e(r[t],t,r);return o};var re=cn?cn.prototype:void 0,Te=re?re.toString:void 0;const Ot=function r(e){if(typeof e=="string")return e;if(nn(e))return N(e,r)+"";if(Mr(e))return Te?Te.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},on=function(r){return r==null?"":Ot(r)},Vt=function(r,e){return nn(r)?r:mu(r,e)?[r]:D(on(r))},Co=function(r){var e=r==null?0:r.length;return e?r[e-1]:void 0},qo=function(r){if(typeof r=="string"||Mr(r))return r;var e=r+"";return e=="0"&&1/r==-1/0?"-0":e},pm=function(r,e){for(var t=0,n=(e=Vt(e,r)).length;r!=null&&t<n;)r=r[qo(e[t++])];return t&&t==n?r:void 0},bm=function(r,e,t){var n=-1,o=r.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(o);++n<o;)s[n]=r[n+e];return s},Xv=function(r,e){return e.length<2?r:pm(r,bm(e,0,-1))},Jv=function(r,e){return e=Vt(e,r),(r=Xv(r,e))==null||delete r[qo(Co(e))]},eC=function(r,e){return r==null||Jv(r,e)},Tc=function(r,e,t){var n=r==null?void 0:pm(r,e);return n===void 0?t:n},pu=function(r,e,t){(t!==void 0&&!lo(r[e],t)||t===void 0&&!(e in r))&&Cs(r,e,t)},tC=function(r){return function(e,t,n){for(var o=-1,s=Object(e),a=n(e),l=a.length;l--;){var u=a[r?l:++o];if(t(s[u],u,s)===!1)break}return e}}(),nC=function(r){return qt(r)&&Go(r)},bu=function(r,e){if((e!=="constructor"||typeof r[e]!="function")&&e!="__proto__")return r[e]},iC=function(r){return po(r,wo(r))},oC=function(r,e,t,n,o,s,a){var l=bu(r,t),u=bu(e,t),m=a.get(u);if(m)pu(r,t,m);else{var f=s?s(l,u,t+"",r,e,a):void 0,p=f===void 0;if(p){var v=nn(u),T=!v&&Uo(u),S=!v&&!T&&xs(u);f=u,v||T||S?nn(l)?f=l:nC(l)?f=rc(l):T?(p=!1,f=oc(u,!0)):S?(p=!1,f=Us(u,!0)):f=[]:ln(u)||Ir(u)?(f=l,Ir(l)?f=iC(l):be(l)&&!Bi(l)||(f=Hs(u))):p=!1}p&&(a.set(u,f),o(f,u,n,s,a),a.delete(u)),pu(r,t,f)}},rC=function r(e,t,n,o,s){e!==t&&tC(t,function(a,l){if(s||(s=new fo),be(a))oC(e,t,l,n,r,o,s);else{var u=o?o(bu(e,l),a,l+"",e,t,s):void 0;u===void 0&&(u=a),pu(e,l,u)}},wo)},Ko=function(r){return r},sC=function(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)};var km=Math.max;const aC=function(r,e,t){return e=km(e===void 0?r.length-1:e,0),function(){for(var n=arguments,o=-1,s=km(n.length-e,0),a=Array(s);++o<s;)a[o]=n[e+o];o=-1;for(var l=Array(e+1);++o<e;)l[o]=n[o];return l[e]=t(a),sC(r,this,l)}},cC=function(r){return function(){return r}},lC=Er?function(r,e){return Er(r,"toString",{configurable:!0,enumerable:!1,value:cC(e),writable:!0})}:Ko;var dC=Date.now;const uC=function(r){var e=0,t=0;return function(){var n=dC(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}(lC),hC=function(r,e){return uC(aC(r,e,Ko),r+"")},gC=function(r,e,t){if(!be(t))return!1;var n=typeof e;return!!(n=="number"?Go(t)&&Is(e,t.length):n=="string"&&e in t)&&lo(t[e],r)},wm=function(r){return hC(function(e,t){var n=-1,o=t.length,s=o>1?t[o-1]:void 0,a=o>2?t[2]:void 0;for(s=r.length>3&&typeof s=="function"?(o--,s):void 0,a&&gC(t[0],t[1],a)&&(s=o<3?void 0:s,o=1),e=Object(e);++n<o;){var l=t[n];l&&r(e,l,n,s)}return e})},_m=wm(function(r,e,t){rC(r,e,t)}),mC=function(r,e,t,n){if(!be(r))return r;for(var o=-1,s=(e=Vt(e,r)).length,a=s-1,l=r;l!=null&&++o<s;){var u=qo(e[o]),m=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return r;if(o!=a){var f=l[u];(m=n?n(f,u,l):void 0)===void 0&&(m=be(f)?f:Is(e[o+1])?[]:{})}ys(l,u,m),l=l[u]}return r},fC=function(r,e,t){return r==null?r:mC(r,e,t)};class pC{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,s=0,a=0,l=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let m=0;m<n.length;m++){const f=n.charAt(m);if(o===null)switch(f){case":":l||(l=n.substr(s,m-s),a=m+1);break;case'"':case"'":o=f;break;case";":{const p=n.substr(a,m-a);l&&u.set(l.trim(),p.trim()),l=null,s=m+1;break}}else f===o&&(o=null)}return u}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(be(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=ku(e);eC(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!be(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=Tc(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class bC{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(be(t))wu(n,ku(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:s,value:a}=o(t);wu(n,s,a)}else wu(n,e,t)}getNormalized(e,t){if(!e)return _m({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Tc(t,n);const o=n(e,t);if(o)return o}return Tc(t,ku(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const s=this.getNormalized(o,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function ku(r){return r.replace("-",".")}function wu(r,e,t){let n=t;be(t)&&(n=_m({},Tc(r,e),t)),fC(r,e,n)}class Rn extends Hi{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(s){const a=On(s);for(const[l,u]of a)u===null?a.delete(l):typeof u!="string"&&a.set(l,String(u));return a}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");Am(this._classes,s),this._attrs.delete("class")}this._styles=new pC(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Rn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Cn(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,a){return typeof a=="string"?[new Ze(s,a)]:(pn(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new Ze(s,l):l instanceof vn?new Ze(s,l.data):l))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?Am(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Tt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Tt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),ln(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Tt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Am(r,e){const t=e.split(/\s+/);r.clear(),t.forEach(n=>r.add(n))}Rn.prototype.is=function(r,e){return e?e===this.name&&(r==="element"||r==="view:element"):r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Ks extends Rn{constructor(...e){super(...e),this.getFillerOffset=vm}}function vm(){const r=[...this.getChildren()],e=r[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of r)if(!t.is("uiElement"))return null;return this.childCount}Ks.prototype.is=function(r,e){return e?e===this.name&&(r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Dc extends ye(Ks){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Dc.prototype.is=function(r,e){return e?e===this.name&&(r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};const Cm=Symbol("rootName");class ym extends Dc{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Cm)}set rootName(e){this._setCustomProperty(Cm,e)}set _name(e){this.name=e}}ym.prototype.is=function(r,e){return e?e===this.name&&(r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Qo{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new C("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new C("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=me._createAt(e.startPosition):this.position=me._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof Ze){if(e.isAtEnd)return this.position=me._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof Rn)return this.shallow?e.offset++:e=new me(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof Ze){if(this.singleCharacters)return e=new me(o,0),this.position=e,this._next();{let s,a=o.data.length;return o==this._boundaryEndParent?(a=this.boundaries.end.offset,s=new vn(o,0,a),e=me._createAfter(s)):(s=new vn(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof o=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new vn(n,e.offset,s);return e.offset+=s,this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=me._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof Ze){if(e.isAtStart)return this.position=me._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof Rn)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new me(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof Ze){if(this.singleCharacters)return e=new me(o,o.data.length),this.position=e,this._previous();{let s,a=o.data.length;if(o==this._boundaryStartParent){const l=this.boundaries.start.offset;s=new vn(o,l,o.data.length-l),a=s.data.length,e=me._createBefore(s)}else s=new vn(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof o=="string"){let s;if(this.singleCharacters)s=1;else{const l=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-l}e.offset-=s;const a=new vn(n,e.offset,s);return this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=me._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,s){return t instanceof vn&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=me._createAfter(t.textNode):(o=me._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=me._createBefore(t.textNode):(o=me._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:s}}}}class me extends Ui{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Dc);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=me._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Qo(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=Qt(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Qo(e)}clone(){return new me(this.parent,this.offset)}static _createAt(e,t){if(e instanceof me)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new C("view-createpositionat-offset-required",n)}return new me(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new me(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new C("view-position-after-root",e,{root:e});return new me(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new me(e.textNode,e.offsetInText);if(!e.parent)throw new C("view-position-before-root",e,{root:e});return new me(e.parent,e.index)}}me.prototype.is=function(r){return r==="position"||r==="view:position"};class xe extends Ui{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Qo({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(xc,{direction:"backward"}),t=this.end.getLastMatchingPosition(xc);return e.parent.is("$text")&&e.isAtStart&&(e=me._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=me._createAfter(t.parent)),new xe(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(xc);if(e.isAfter(this.end)||e.isEqual(this.end))return new xe(e,e);let t=this.end.getLastMatchingPosition(xc,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new me(n,0)),o&&o.is("$text")&&(t=new me(o,o.data.length)),new xe(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new xe(this.start,e.start)),this.containsPosition(e.end)&&t.push(new xe(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new xe(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Qo(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new xe(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Qo(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Qo(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new me(e,t),new me(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(me._createBefore(e),t)}}function xc(r){return!(!r.item.is("attributeElement")&&!r.item.is("uiElement"))}function _u(r){let e=0;for(const t of r)e++;return e}xe.prototype.is=function(r){return r==="range"||r==="view:range"};class si extends se(Ui){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=_u(this.getRanges());if(t!=_u(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof si||t instanceof Au)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof xe)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof me)this._setRanges([new xe(t)]),this._setFakeOptions(o);else if(t instanceof Hi){const s=!!o&&!!o.backward;let a;if(n===void 0)throw new C("view-selection-setto-required-second-parameter",this);a=n=="in"?xe._createIn(t):n=="on"?xe._createOn(t):new xe(me._createAt(t,n)),this._setRanges([a],s),this._setFakeOptions(o)}else{if(!pn(t))throw new C("view-selection-setto-not-selectable",this);this._setRanges(t,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new C("view-selection-setfocus-no-ranges",this);const n=me._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new xe(n,o),!0):this._addRange(new xe(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof xe))throw new C("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new C("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new xe(e.start,e.end))}}si.prototype.is=function(r){return r==="selection"||r==="view:selection"};class Au extends se(Ui){constructor(...e){super(),this._selection=new si,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Au.prototype.is=function(r){return r==="selection"||r=="documentSelection"||r=="view:selection"||r=="view:documentSelection"};class Qs extends y{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const vu=Symbol("bubbling contexts");function Cu(r){return class extends r{fire(e,...t){try{const n=e instanceof y?e:new y(this,e),o=yu(this);if(!o.size)return;if(Zs(n,"capturing",this),Or(o,"$capture",n,...t))return n.return;const s=n.startRange||this.selection.getFirstRange(),a=s?s.getContainedElement():null,l=!!a&&Boolean(Em(o,a));let u=a||function(m){if(!m)return null;const f=m.start.parent,p=m.end.parent,v=f.getPath(),T=p.getPath();return v.length>T.length?f:p}(s);if(Zs(n,"atTarget",u),!l){if(Or(o,"$text",n,...t))return n.return;Zs(n,"bubbling",u)}for(;u;){if(u.is("rootElement")){if(Or(o,"$root",n,...t))return n.return}else if(u.is("element")&&Or(o,u.name,n,...t))return n.return;if(Or(o,u,n,...t))return n.return;u=u.parent,Zs(n,"bubbling",u)}return Zs(n,"bubbling",this),Or(o,"$document",n,...t),n.return}catch(n){C.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const o=Tt(n.context||"$document"),s=yu(this);for(const a of o){let l=s.get(a);l||(l=new te,s.set(a,l)),this.listenTo(l,e,t,n)}}_removeEventListener(e,t){const n=yu(this);for(const o of n.values())this.stopListening(o,e,t)}}}{const r=Cu(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{Cu[e]=r.prototype[e]})}function Zs(r,e,t){r instanceof Qs&&(r._eventPhase=e,r._currentTarget=t)}function Or(r,e,t,...n){const o=typeof e=="string"?r.get(e):Em(r,e);return!!o&&(o.fire(t,...n),t.stop.called)}function Em(r,e){for(const[t,n]of r)if(typeof t=="function"&&t(e))return n;return null}function yu(r){return r[vu]||(r[vu]=new Map),r[vu]}class Sc extends Cu(lt){constructor(e){super(),this.selection=new Au,this.roots=new Pn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Zo extends Rn{constructor(...e){super(...e),this.getFillerOffset=kC,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new C("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function kC(){if(Eu(this))return null;let r=this.parent;for(;r&&r.is("attributeElement");){if(Eu(r)>1)return null;r=r.parent}return!r||Eu(r)>1?null:this.childCount}function Eu(r){return Array.from(r.getChildren()).filter(e=>!e.is("uiElement")).length}Zo.DEFAULT_PRIORITY=10,Zo.prototype.is=function(r,e){return e?e===this.name&&(r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"):r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Iu extends Rn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=wC}_insertChild(e,t){if(t&&(t instanceof Hi||Array.from(t).length>0))throw new C("view-emptyelement-cannot-add",[this,t]);return 0}}function wC(){return null}Iu.prototype.is=function(r,e){return e?e===this.name&&(r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"):r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};const Xo=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),_C={isMac:Im(Xo),isWindows:function(r){return r.indexOf("windows")>-1}(Xo),isGecko:function(r){return!!r.match(/gecko\/\d+/)}(Xo),isSafari:function(r){return r.indexOf(" applewebkit/")>-1&&r.indexOf("chrome")===-1}(Xo),isiOS:function(r){return!!r.match(/iphone|ipad/i)||Im(r)&&navigator.maxTouchPoints>0}(Xo),isAndroid:function(r){return r.indexOf("android")>-1}(Xo),isBlink:function(r){return r.indexOf("chrome/")>-1&&r.indexOf("edge/")<0}(Xo),features:{isRegExpUnicodePropertySupported:function(){let r=!1;try{r="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return r}()}},et=_C;function Im(r){return r.indexOf("macintosh")>-1}const AC={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},vC={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Fe=function(){const r={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);r[t.toLowerCase()]=e}for(let e=48;e<=57;e++)r[e-48]=e;for(let e=112;e<=123;e++)r["f"+(e-111)]=e;for(const e of"`-=[];',./\\")r[e]=e.charCodeAt(0);return r}(),CC=Object.fromEntries(Object.entries(Fe).map(([r,e])=>[e,r.charAt(0).toUpperCase()+r.slice(1)]));function Ci(r){let e;if(typeof r=="string"){if(e=Fe[r.toLowerCase()],!e)throw new C("keyboard-unknown-key",null,{key:r})}else e=r.keyCode+(r.altKey?Fe.alt:0)+(r.ctrlKey?Fe.ctrl:0)+(r.shiftKey?Fe.shift:0)+(r.metaKey?Fe.cmd:0);return e}function Tu(r){return typeof r=="string"&&(r=function(e){return e.split("+").map(t=>t.trim())}(r)),r.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Ci(t.slice(0,-1));const n=Ci(t);return et.isMac&&n==Fe.ctrl?Fe.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Tm(r){let e=Tu(r);return Object.entries(et.isMac?AC:vC).reduce((t,[n,o])=>((e&Fe[n])!=0&&(e&=~Fe[n],t+=o),t),"")+(e?CC[e]:"")}function Du(r,e){const t=e==="ltr";switch(r){case Fe.arrowleft:return t?"left":"right";case Fe.arrowright:return t?"right":"left";case Fe.arrowup:return"up";case Fe.arrowdown:return"down"}}class Mc extends Rn{constructor(...e){super(...e),this.getFillerOffset=EC}_insertChild(e,t){if(t&&(t instanceof Hi||Array.from(t).length>0))throw new C("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function yC(r){r.document.on("arrowKey",(e,t)=>function(n,o,s){if(o.keyCode==Fe.arrowright){const a=o.domTarget.ownerDocument.defaultView.getSelection(),l=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(l||o.shiftKey){const u=a.focusNode,m=a.focusOffset,f=s.domPositionToView(u,m);if(f===null)return;let p=!1;const v=f.getLastMatchingPosition(T=>(T.item.is("uiElement")&&(p=!0),!(!T.item.is("uiElement")&&!T.item.is("attributeElement"))));if(p){const T=s.viewPositionToDom(v);l?a.collapse(T.parent,T.offset):a.extend(T.parent,T.offset)}}}}(0,t,r.domConverter),{priority:"low"})}function EC(){return null}Mc.prototype.is=function(r,e){return e?e===this.name&&(r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"):r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class xu extends Rn{constructor(...e){super(...e),this.getFillerOffset=IC}_insertChild(e,t){if(t&&(t instanceof Hi||Array.from(t).length>0))throw new C("view-rawelement-cannot-add",[this,t]);return 0}render(){}}function IC(){return null}xu.prototype.is=function(r,e){return e?e===this.name&&(r==="rawElement"||r==="view:rawElement"||r==="element"||r==="view:element"):r==="rawElement"||r==="view:rawElement"||r===this.name||r==="view:"+this.name||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Jo extends se(Ui){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,a){return typeof a=="string"?[new Ze(s,a)]:(pn(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new Ze(s,l):l instanceof vn?new Ze(s,l.data):l))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}Jo.prototype.is=function(r){return r==="documentFragment"||r==="view:documentFragment"};class Dm{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new Jo(this.document,e)}createText(e){return new Ze(this.document,e)}createAttributeElement(e,t,n={}){const o=new Zo(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let s=null;ln(n)?o=n:s=n;const a=new Ks(this.document,e,t,s);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const o=new Dc(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new Iu(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new Mc(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const s=new xu(this.document,e,t);return n&&(s.render=n),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){ln(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof me?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new C("view-writer-break-non-container-element",this.document);if(!t.parent)throw new C("view-writer-break-root",this.document);if(e.isAtStart)return me._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(me._createAfter(t),n);const o=new xe(e,me._createAt(t,"end")),s=new me(n,0);this.move(o,s)}return me._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,l=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new me(a,l))}const o=n.getChild(t-1),s=n.getChild(t);if(!o||!s)return e;if(o.is("$text")&&s.is("$text"))return Sm(o,s);if(o.is("attributeElement")&&s.is("attributeElement")&&o.isSimilar(s)){const a=o.childCount;return o._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new me(o,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new C("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),s=o instanceof Ze?me._createAt(o,"end"):me._createAt(t,"end");return this.move(xe._createIn(n),me._createAt(t,"end")),this.remove(xe._createOn(n)),s}insert(e,t){Mm(t=pn(t)?[...t]:[t],this.document);const n=t.reduce((a,l)=>{const u=a[a.length-1],m=!l.is("uiElement");return u&&u.breakAttributes==m?u.nodes.push(l):a.push({breakAttributes:m,nodes:[l]}),a},[]);let o=null,s=e;for(const{nodes:a,breakAttributes:l}of n){const u=this._insertNodes(s,a,l);o||(o=u.start),s=u.end}return o?new xe(o,s):new xe(e)}remove(e){const t=e instanceof xe?e:xe._createOn(e);if(Xs(t,this.document),t.isCollapsed)return new Jo(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),s=n.parent,a=o.offset-n.offset,l=s._removeChildren(n.offset,a);for(const m of l)this._removeFromClonedElementsGroup(m);const u=this.mergeAttributes(n);return t.start=u,t.end=u.clone(),new Jo(this.document,l)}clear(e,t){Xs(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const s=o.item;let a;if(s.is("element")&&t.isSimilar(s))a=xe._createOn(s);else if(!o.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const l=s.getAncestors().find(u=>u.is("element")&&t.isSimilar(u));l&&(a=xe._createIn(l))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,s=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Zo))throw new C("view-writer-wrap-invalid-attribute",this.document);if(Xs(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(o=o.getLastMatchingPosition(a=>a.item.is("uiElement"))),o=this._wrapPosition(o,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new xe(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Zo))throw new C("view-writer-unwrap-invalid-attribute",this.document);if(Xs(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,a=this._unwrapChildren(s,n.offset,o.offset,t),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new xe(l,u)}rename(e,t){const n=new Ks(this.document,e,t.getAttributes());return this.insert(me._createAfter(t),n),this.move(xe._createIn(t),me._createAt(n,0)),this.remove(xe._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return me._createAt(e,t)}createPositionAfter(e){return me._createAfter(e)}createPositionBefore(e){return me._createBefore(e)}createRange(...e){return new xe(...e)}createRangeOn(e){return xe._createOn(e)}createRangeIn(e){return xe._createIn(e)}createSelection(...e){return new si(...e)}createSlot(e){if(!this._slotFactory)throw new C("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,s;if(o=n?Su(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new C("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?Mu(e):e;const a=o._insertChild(s.offset,t);for(const f of t)this._addToClonedElementsGroup(f);const l=s.getShiftedBy(a),u=this.mergeAttributes(s);u.isEqual(s)||l.offset--;const m=this.mergeAttributes(l);return new xe(u,m)}_wrapChildren(e,t,n,o){let s=t;const a=[];for(;s<n;){const u=e.getChild(s),m=u.is("$text"),f=u.is("attributeElement");if(f&&this._wrapAttributeElement(o,u))a.push(new me(e,s));else if(m||!f||TC(o,u)){const p=o._clone();u._remove(),p._appendChild(u),e._insertChild(s,p),this._addToClonedElementsGroup(p),a.push(new me(e,s))}else this._wrapChildren(u,0,u.childCount,o);s++}let l=0;for(const u of a)u.offset-=l,u.offset!=t&&(this.mergeAttributes(u).isEqual(u)||(l++,n--));return xe._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let s=t;const a=[];for(;s<n;){const u=e.getChild(s);if(u.is("attributeElement"))if(u.isSimilar(o)){const m=u.getChildren(),f=u.childCount;u._remove(),e._insertChild(s,m),this._removeFromClonedElementsGroup(u),a.push(new me(e,s),new me(e,s+f)),s+=f,n+=f-1}else this._unwrapAttributeElement(o,u)?(a.push(new me(e,s),new me(e,s+1)),s++):(this._unwrapChildren(u,0,u.childCount,o),s++);else s++}let l=0;for(const u of a)u.offset-=l,!(u.offset==t||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(l++,n--));return xe._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,a=this._wrapChildren(s,n.offset,o.offset,t),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new xe(l,u)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return xm(e.clone());e.parent.is("$text")&&(e=Mu(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new xe(e,e.getShiftedBy(1));this.wrap(o,t);const s=new me(n.parent,n.index);n._remove();const a=s.nodeBefore,l=s.nodeAfter;return a instanceof Ze&&l instanceof Ze?Sm(a,l):xm(s)}_wrapAttributeElement(e,t){if(!Pm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Pm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(Xs(e,this.document),e.isCollapsed){const u=this._breakAttributes(e.start,t);return new xe(u,u)}const s=this._breakAttributes(o,t),a=s.parent.childCount,l=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-a,new xe(l,s)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new C("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new C("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new C("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&Pu(o.parent)||Pu(o))return e.clone();if(o.is("$text"))return this._breakAttributes(Mu(e),t);if(n==o.childCount){const s=new me(o.parent,o.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new me(o.parent,o.index);return this._breakAttributes(s,t)}{const s=o.index+1,a=o._clone();o.parent._insertChild(s,a),this._addToClonedElementsGroup(a);const l=o.childCount-n,u=o._removeChildren(n,l);a._appendChild(u);const m=new me(o.parent,s);return this._breakAttributes(m,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Su(r){let e=r.parent;for(;!Pu(e);){if(!e)return;e=e.parent}return e}function TC(r,e){return r.priority<e.priority||!(r.priority>e.priority)&&r.getIdentity()<e.getIdentity()}function xm(r){const e=r.nodeBefore;if(e&&e.is("$text"))return new me(e,e.data.length);const t=r.nodeAfter;return t&&t.is("$text")?new me(t,0):r}function Mu(r){if(r.offset==r.parent.data.length)return new me(r.parent.parent,r.parent.index+1);if(r.offset===0)return new me(r.parent.parent,r.parent.index);const e=r.parent.data.slice(r.offset);return r.parent._data=r.parent.data.slice(0,r.offset),r.parent.parent._insertChild(r.parent.index+1,new Ze(r.root.document,e)),new me(r.parent.parent,r.parent.index+1)}function Sm(r,e){const t=r.data.length;return r._data+=e.data,e._remove(),new me(r,t)}const DC=[Ze,Zo,Ks,Iu,xu,Mc];function Mm(r,e){for(const t of r){if(!DC.some(n=>t instanceof n))throw new C("view-writer-insert-invalid-node-type",e);t.is("$text")||Mm(t.getChildren(),e)}}function Pu(r){return r&&(r.is("containerElement")||r.is("documentFragment"))}function Xs(r,e){const t=Su(r.start),n=Su(r.end);if(!t||!n||t!==n)throw new C("view-writer-invalid-range-container",e)}function Pm(r,e){return r.id===null&&e.id===null}function rn(r){return Object.prototype.toString.call(r)=="[object Text]"}const Om=r=>r.createTextNode("\xA0"),Rm=r=>{const e=r.createElement("span");return e.dataset.ckeFiller="true",e.innerText="\xA0",e},Nm=r=>{const e=r.createElement("br");return e.dataset.ckeFiller="true",e},Pc="\u2060".repeat(7);function Nn(r){return rn(r)&&r.data.substr(0,7)===Pc}function Oc(r){return r.data.length==7&&Nn(r)}function Ou(r){return Nn(r)?r.data.slice(7):r.data}function xC(r,e){if(e.keyCode==Fe.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;Nn(n)&&o<=7&&t.collapse(n,0)}}}function Lm(r,e,t,n=!1){t=t||function(l,u){return l===u};const o=Array.isArray(r)?r:Array.prototype.slice.call(r),s=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(l,u,m){const f=Bm(l,u,m);if(f===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const p=zm(l,f),v=zm(u,f),T=Bm(p,v,m),S=l.length-T,M=u.length-T;return{firstIndex:f,lastIndexOld:S,lastIndexNew:M}}(o,s,t);return n?function(l,u){const{firstIndex:m,lastIndexOld:f,lastIndexNew:p}=l;if(m===-1)return Array(u).fill("equal");let v=[];return m>0&&(v=v.concat(Array(m).fill("equal"))),p-m>0&&(v=v.concat(Array(p-m).fill("insert"))),f-m>0&&(v=v.concat(Array(f-m).fill("delete"))),p<u&&(v=v.concat(Array(u-p).fill("equal"))),v}(a,s.length):function(l,u){const m=[],{firstIndex:f,lastIndexOld:p,lastIndexNew:v}=u;return v-f>0&&m.push({index:f,type:"insert",values:l.slice(f,v)}),p-f>0&&m.push({index:f+(v-f),type:"delete",howMany:p-f}),m}(s,a)}function Bm(r,e,t){for(let n=0;n<Math.max(r.length,e.length);n++)if(r[n]===void 0||e[n]===void 0||!t(r[n],e[n]))return n;return-1}function zm(r,e){return r.slice(e).reverse()}function yo(r,e,t){t=t||function(M,O){return M===O};const n=r.length,o=e.length;if(n>200||o>200||n+o>300)return yo.fastDiff(r,e,t,!0);let s,a;if(o<n){const M=r;r=e,e=M,s="delete",a="insert"}else s="insert",a="delete";const l=r.length,u=e.length,m=u-l,f={},p={};function v(M){const O=(p[M-1]!==void 0?p[M-1]:-1)+1,L=p[M+1]!==void 0?p[M+1]:-1,V=O>L?-1:1;f[M+V]&&(f[M]=f[M+V].slice(0)),f[M]||(f[M]=[]),f[M].push(O>L?s:a);let K=Math.max(O,L),ge=K-M;for(;ge<l&&K<u&&t(r[ge],e[K]);)ge++,K++,f[M].push("equal");return K}let T,S=0;do{for(T=-S;T<m;T++)p[T]=v(T);for(T=m+S;T>m;T--)p[T]=v(T);p[m]=v(m),S++}while(p[m]!==u);return f[m].slice(1)}function Fm(r,e,t){r.insertBefore(t,r.childNodes[e]||null)}function jm(r){const e=r.parentNode;e&&e.removeChild(r)}function Rr(r){return r&&r.nodeType===Node.COMMENT_NODE}function Nr(r){if(r){if(r.defaultView)return r instanceof r.defaultView.Document;if(r.ownerDocument&&r.ownerDocument.defaultView)return r instanceof r.ownerDocument.defaultView.Node}return!1}yo.fastDiff=Lm;var SC=g(6062),Se=g.n(SC),Vm=g(9315),MC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(Vm.Z,MC),Vm.Z.locals;class PC extends lt{constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),et.isBlink&&!et.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new C("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){let e=null;const t=!(et.isBlink&&!et.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=me._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;Nn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Um(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),s=this._findReplaceActions(o,t,n);if(s.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const l of s)if(l==="replace"){const u=a.equal+a.insert,m=a.equal+a.delete,f=e.getChild(u);!f||f.is("uiElement")||f.is("rawElement")||this._updateElementMappings(f,t[m]),jm(n[u]),a.equal++}else a[l]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?me._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&rn(t.parent)&&Nn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Nn(e))throw new C("view-renderer-filler-was-lost",this);Oc(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const l=a.findAncestor(u=>u.hasAttribute("contenteditable"));return!l||l.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,s=e.nodeAfter;return!(o instanceof Ze||s instanceof Ze)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e),o=this.domConverter.viewToDom(e),s=n.data;let a=o.data;const l=t.inlineFillerPosition;if(l&&l.parent==e.parent&&l.offset==e.index&&(a=Pc+a),s!=a){const u=Lm(s,a);for(const m of u)m.type==="insert"?n.insertData(m.index,m.values.join("")):n.deleteData(m.index,m.howMany)}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),o=e.getAttributeKeys();for(const s of o)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;const o=t.inlineFillerPosition,s=this.domConverter.mapViewToDom(e).childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&Um(n.ownerDocument,a,o.offset);const l=this._diffNodeLists(s,a);let u=0;const m=new Set;for(const f of l)f==="delete"?(m.add(s[u]),jm(s[u])):f==="equal"&&u++;u=0;for(const f of l)f==="insert"?(Fm(n,u,a[u]),u++):f==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[u])),u++);for(const f of m)f.parentNode||this.domConverter.unbindDomElement(f)}_diffNodeLists(e,t){return yo(e=function(n,o){const s=Array.from(n);return s.length==0||!o||s[s.length-1]==o&&s.pop(),s}(e,this._fakeSelectionContainer),t,OC.bind(null,this.domConverter))}_findReplaceActions(e,t,n){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let o=[],s=[],a=[];const l={equal:0,insert:0,delete:0};for(const u of e)u==="insert"?a.push(n[l.equal+l.insert]):u==="delete"?s.push(t[l.equal+l.delete]):(o=o.concat(yo(s,a,Hm).map(m=>m==="equal"?"replace":m)),o.push("equal"),s=[],a=[]),l[u]++;return o.concat(yo(s,a,Hm).map(u=>u==="equal"?"replace":u))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(et.isBlink&&!et.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const l=a.createElement("div");return l.className="ck-fake-selection-container",Object.assign(l.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),l.textContent="\xA0",l}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=t.getSelection(),s=t.createRange();o.removeAllRanges(),s.selectNodeContents(n),o.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),et.isGecko&&function(s,a){const l=s.parent;if(l.nodeType!=Node.ELEMENT_NODE||s.offset!=l.childNodes.length-1)return;const u=l.childNodes[s.offset];u&&u.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Um(r,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(rn(o))return o.data=Pc+o.data,o;{const s=r.createTextNode(Pc);return Array.isArray(e)?n.splice(t,0,s):Fm(e,t,s),s}}function Hm(r,e){return Nr(r)&&Nr(e)&&!rn(r)&&!rn(e)&&!Rr(r)&&!Rr(e)&&r.tagName.toLowerCase()===e.tagName.toLowerCase()}function OC(r,e,t){return e===t||(rn(e)&&rn(t)?e.data===t.data:!(!r.isBlockFiller(e)||!r.isBlockFiller(t)))}function Ru(r){let e=0;for(;r.previousSibling;)r=r.previousSibling,e++;return e}function Gm(r){const e=[];let t=r;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const RC=Nm(Be.document),NC=Om(Be.document),LC=Rm(Be.document),Rc="data-ck-unsafe-attribute-",Wm="data-ck-unsafe-element";class Js{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Be.document:Be.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Cn,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new si(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)o.appendChild(s[0]);const a=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),l=[];let u;for(;u=a.nextNode();)l.push(u);for(const m of l){for(const p of m.getAttributeNames())this.setDomElementAttribute(m,p,m.getAttribute(p));const f=m.tagName.toLowerCase();this._shouldRenameElement(f)&&(qm(f),m.replaceWith(this._createReplacementDomElement(f,m)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(qm(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);s||P("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(Rc+t)&&s&&e.removeAttribute(Rc+t),e.setAttribute(s?t:Rc+t,n)}removeDomElementAttribute(e,t){t!=Wm&&(e.removeAttribute(t),e.removeAttribute(Rc+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const s of e.getChildren()){n===o&&(yield this._getBlockFiller());const a=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(a&&P("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return Nn(n)&&(o+=7),{parent:n,offset:o}}{let n,o,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const a=e.nodeBefore;if(o=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(a),!o)return null;n=o.parentNode,s=o.nextSibling}return rn(s)&&Nn(s)?{parent:s,offset:7}:{parent:n,offset:o?Ru(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(Rr(e)&&t.skipComments)return null;if(rn(e)){if(Oc(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new Ze(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new Jo(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const s=e.attributes;if(s)for(let a=s.length,l=0;l<a;l++)o._setAttribute(s[l].name,s[l].value);if(this._isViewElementWithRawContent(o,t)||Rr(e)){const a=Rr(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",a),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const s of this.domChildrenToView(e,t))o._appendChild(s);return o}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],s=this.domToView(o,t);s!==null&&(yield s)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;rn(o)&&(o=o.parentNode);const s=this.fakeSelectionToView(o);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const s=e.getRangeAt(o),a=this.domRangeToView(s);a&&n.push(a)}return new si(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new xe(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Ru(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return me._createBefore(n);if(rn(e)){if(Oc(e))return this.domPositionToView(e.parentNode,Ru(e));const o=this.findCorrespondingViewText(e);let s=t;return o?(Nn(e)&&(s-=7,s=s<0?0:s),new me(o,s)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new me(o,0)}else{const o=e.childNodes[t-1],s=rn(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(s&&s.parent)return new me(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Oc(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const s=o.nextSibling;return s instanceof Ze?s:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const s=o.getChild(0);return s instanceof Ze?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=Be.window,s=[];Ym(t,a=>{const{scrollLeft:l,scrollTop:u}=a;s.push([l,u])}),t.focus(),Ym(t,a=>{const[l,u]=s.shift();a.scrollLeft=l,a.scrollTop=u}),Be.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(RC):!(e.tagName!=="BR"||!$m(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(LC)||function(t,n){return t.isEqualNode(NC)&&$m(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=Gm(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Om(this._domDocument);case"markedNbsp":return Rm(this._domDocument);case"br":return Nm(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(rn(e)&&Nn(e)&&t<7||this.isElement(e)&&Nn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(m,f){return Gm(m).some(p=>p.tagName&&f.includes(p.tagName.toLowerCase()))}(e,this.preElements))return Ou(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),s=this._checkShouldLeftTrimDomText(e,n),a=this._checkShouldRightTrimDomText(e,o);s&&(t=t.replace(/^ /,"")),a&&(t=t.replace(/ $/,"")),t=Ou(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const l=o&&this.isElement(o)&&o.tagName!="BR",u=o&&rn(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||l||u)&&(t=t.replace(/\u00A0$/," ")),(s||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Nn(e)}_getTouchingInlineViewNode(e,t){const n=new Qo({startPosition:t?me._createAfter(e):me._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let s=!0,a=e;do if(!s&&a[n]?a=a[n]:a[o]?(a=a[o],s=!1):(a=a.parentNode,s=!0),!a||this._isBlockElement(a))return null;while(!rn(a)&&a.tagName!="BR"&&!this._isInlineObjectElement(a));return a}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(Rr(e))return new Mc(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Rn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Wm,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function Ym(r,e){let t=r;for(;t;)e(t),t=t.parentElement}function $m(r,e){const t=r.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function qm(r){r==="script"&&P("domconverter-unsafe-script-element-detected"),r==="style"&&P("domconverter-unsafe-style-element-detected")}function Nc(r){const e=Object.prototype.toString.apply(r);return e=="[object Window]"||e=="[object global]"}function er(r){return class extends r{listenTo(e,t,n,o={}){if(Nr(e)||Nc(e)){const s={capture:!!o.useCapture,passive:!!o.usePassive},a=this._getProxyEmitter(e,s)||new BC(e,s);this.listenTo(a,t,n,o)}else te.prototype.listenTo.call(this,e,t,n,o)}stopListening(e,t,n){if(Nr(e)||Nc(e)){const o=this._getAllProxyEmitters(e);for(const s of o)this.stopListening(s,t,n)}else te.prototype.stopListening.call(this,e,t,n)}_getProxyEmitter(e,t){return function(n,o){const s=n[H];return s&&s[o]?s[o].emitter:null}(this,Qm(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}}const Km=er(te);["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{er[r]=Km.prototype[r]});class BC extends te{constructor(e,t){super(),q(this,Qm(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),te.prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){te.prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Qm(r,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=I())}(r);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}class Wi extends Km{constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const zC=function(r){return this.__data__.set(r,"__lodash_hash_undefined__"),this},FC=function(r){return this.__data__.has(r)};function Lc(r){var e=-1,t=r==null?0:r.length;for(this.__data__=new yr;++e<t;)this.add(r[e])}Lc.prototype.add=Lc.prototype.push=zC,Lc.prototype.has=FC;const jC=Lc,VC=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n;)if(e(r[t],t,r))return!0;return!1},UC=function(r,e){return r.has(e)},Zm=function(r,e,t,n,o,s){var a=1&t,l=r.length,u=e.length;if(l!=u&&!(a&&u>l))return!1;var m=s.get(r),f=s.get(e);if(m&&f)return m==e&&f==r;var p=-1,v=!0,T=2&t?new jC:void 0;for(s.set(r,e),s.set(e,r);++p<l;){var S=r[p],M=e[p];if(n)var O=a?n(M,S,p,e,r,s):n(S,M,p,r,e,s);if(O!==void 0){if(O)continue;v=!1;break}if(T){if(!VC(e,function(L,V){if(!UC(T,V)&&(S===L||o(S,L,t,n,s)))return T.push(V)})){v=!1;break}}else if(S!==M&&!o(S,M,t,n,s)){v=!1;break}}return s.delete(r),s.delete(e),v},HC=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n,o){t[++e]=[o,n]}),t},GC=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n){t[++e]=n}),t};var Xm=cn?cn.prototype:void 0,Nu=Xm?Xm.valueOf:void 0;const WC=function(r,e,t,n,o,s,a){switch(t){case"[object DataView]":if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(r.byteLength!=e.byteLength||!s(new Dr(r),new Dr(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return lo(+r,+e);case"[object Error]":return r.name==e.name&&r.message==e.message;case"[object RegExp]":case"[object String]":return r==e+"";case"[object Map]":var l=HC;case"[object Set]":var u=1&n;if(l||(l=GC),r.size!=e.size&&!u)return!1;var m=a.get(r);if(m)return m==e;n|=2,a.set(r,e);var f=Zm(l(r),l(e),n,o,s,a);return a.delete(r),f;case"[object Symbol]":if(Nu)return Nu.call(r)==Nu.call(e)}return!1};var YC=Object.prototype.hasOwnProperty;const $C=function(r,e,t,n,o,s){var a=1&t,l=Wo(r),u=l.length;if(u!=Wo(e).length&&!a)return!1;for(var m=u;m--;){var f=l[m];if(!(a?f in e:YC.call(e,f)))return!1}var p=s.get(r),v=s.get(e);if(p&&v)return p==e&&v==r;var T=!0;s.set(r,e),s.set(e,r);for(var S=a;++m<u;){var M=r[f=l[m]],O=e[f];if(n)var L=a?n(O,M,f,e,r,s):n(M,O,f,r,e,s);if(!(L===void 0?M===O||o(M,O,t,n,s):L)){T=!1;break}S||(S=f=="constructor")}if(T&&!S){var V=r.constructor,K=e.constructor;V==K||!("constructor"in r)||!("constructor"in e)||typeof V=="function"&&V instanceof V&&typeof K=="function"&&K instanceof K||(T=!1)}return s.delete(r),s.delete(e),T};var Jm="[object Arguments]",ef="[object Array]",Bc="[object Object]",tf=Object.prototype.hasOwnProperty;const qC=function(r,e,t,n,o,s){var a=nn(r),l=nn(e),u=a?ef:Yo(r),m=l?ef:Yo(e),f=(u=u==Jm?Bc:u)==Bc,p=(m=m==Jm?Bc:m)==Bc,v=u==m;if(v&&Uo(r)){if(!Uo(e))return!1;a=!0,f=!1}if(v&&!f)return s||(s=new fo),a||xs(r)?Zm(r,e,t,n,o,s):WC(r,e,u,t,n,o,s);if(!(1&t)){var T=f&&tf.call(r,"__wrapped__"),S=p&&tf.call(e,"__wrapped__");if(T||S){var M=T?r.value():r,O=S?e.value():e;return s||(s=new fo),o(M,O,t,n,s)}}return!!v&&(s||(s=new fo),$C(r,e,t,n,o,s))},nf=function r(e,t,n,o,s){return e===t||(e==null||t==null||!qt(e)&&!qt(t)?e!=e&&t!=t:qC(e,t,n,o,r,s))},KC=function(r,e,t){var n=(t=typeof t=="function"?t:void 0)?t(r,e):void 0;return n===void 0?nf(r,e,void 0,t):!!n};class of extends Wi{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Map,o=new Set;for(const m of e)if(m.type==="childList"){const f=t.mapDomToView(m.target);if(f&&(f.is("uiElement")||f.is("rawElement")))continue;f&&!this._isBogusBrMutation(m)&&o.add(f)}for(const m of e){const f=t.mapDomToView(m.target);if((!f||!f.is("uiElement")&&!f.is("rawElement"))&&m.type==="characterData"){const p=t.findCorrespondingViewText(m.target);p&&!o.has(p.parent)?n.set(p,{type:"text",oldText:p.data,newText:Ou(m.target),node:p}):!p&&Nn(m.target)&&o.add(t.mapDomToView(m.target.parentNode))}}const s=[];for(const m of n.values())this.renderer.markToSync("text",m.node),s.push(m);for(const m of o){const f=t.mapViewToDom(m),p=Array.from(m.getChildren()),v=Array.from(t.domChildrenToView(f,{withChildren:!1}));KC(p,v,u)||(this.renderer.markToSync("children",m),s.push({type:"children",oldChildren:p,newChildren:v,node:m}))}const a=e[0].target.ownerDocument.getSelection();let l=null;if(a&&a.anchorNode){const m=t.domPositionToView(a.anchorNode,a.anchorOffset),f=t.domPositionToView(a.focusNode,a.focusOffset);m&&f&&(l=new si(m),l.setFocus(f))}function u(m,f){if(!Array.isArray(m))return m===f||!(!m.is("$text")||!f.is("$text"))&&m.data===f.data}s.length&&(this.document.fire("mutations",s,l),this.view.forceRender())}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}const rf=wm(function(r,e){po(e,wo(e),r)});class Lu{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,rf(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Eo extends Wi{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Lu(this.view,t,n))}}class QC extends Eo{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Ci(this)}};this.fire(e.type,e,t)}}const Bu=function(){return Et.Date.now()};var ZC=/\s/;const XC=function(r){for(var e=r.length;e--&&ZC.test(r.charAt(e)););return e};var JC=/^\s+/;const ey=function(r){return r&&r.slice(0,XC(r)+1).replace(JC,"")};var ty=/^[-+]0x[0-9a-f]+$/i,ny=/^0b[01]+$/i,iy=/^0o[0-7]+$/i,oy=parseInt;const sf=function(r){if(typeof r=="number")return r;if(Mr(r))return NaN;if(be(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=be(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=ey(r);var t=ny.test(r);return t||iy.test(r)?oy(r.slice(2),t?2:8):ty.test(r)?NaN:+r};var ry=Math.max,sy=Math.min;const ea=function(r,e,t){var n,o,s,a,l,u,m=0,f=!1,p=!1,v=!0;if(typeof r!="function")throw new TypeError("Expected a function");function T(K){var ge=n,Ie=o;return n=o=void 0,m=K,a=r.apply(Ie,ge)}function S(K){return m=K,l=setTimeout(O,e),f?T(K):a}function M(K){var ge=K-u;return u===void 0||ge>=e||ge<0||p&&K-m>=s}function O(){var K=Bu();if(M(K))return L(K);l=setTimeout(O,function(ge){var Ie=e-(ge-u);return p?sy(Ie,s-(ge-m)):Ie}(K))}function L(K){return l=void 0,v&&n?T(K):(n=o=void 0,a)}function V(){var K=Bu(),ge=M(K);if(n=arguments,o=this,u=K,ge){if(l===void 0)return S(u);if(p)return clearTimeout(l),l=setTimeout(O,e),T(u)}return l===void 0&&(l=setTimeout(O,e)),a}return e=sf(e)||0,be(t)&&(f=!!t.leading,s=(p="maxWait"in t)?ry(sf(t.maxWait)||0,e):s,v="trailing"in t?!!t.trailing:v),V.cancel=function(){l!==void 0&&clearTimeout(l),m=0,n=u=o=l=void 0},V.flush=function(){return l===void 0?a:L(Bu())},V};class ay extends Wi{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=ea(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new si(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Fe.arrowleft&&e!=Fe.arrowup||n.setTo(n.getFirstPosition()),e!=Fe.arrowright&&e!=Fe.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}class cy extends Wi{constructor(e){super(e),this.mutationObserver=e.getObserver(of),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=ea(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=ea(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(o,s)=>{this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class ly extends Eo{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(n,o)=>{const s=t.selection.editableElement;s!==null&&s!==o.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class dy extends Eo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0}),t.on("compositionend",()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}class uy extends Eo{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){this.fire(e.type,e)}}class hy{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}const af=function(r){return typeof r=="string"||!nn(r)&&qt(r)&&Pe(r)=="[object String]"};function cf(r,e,t={},n=[]){const o=t&&t.xmlns,s=o?r.createElementNS(o,e):r.createElement(e);for(const a in t)s.setAttribute(a,t[a]);!af(n)&&pn(n)||(n=[n]);for(let a of n)af(a)&&(a=r.createTextNode(a)),s.appendChild(a);return s}class kt{constructor(e,t){kt._observerInstance||kt._createObserver(),this._element=e,this._callback=t,kt._addElementCallback(e,t),kt._observerInstance.observe(e)}destroy(){kt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){kt._elementCallbacks||(kt._elementCallbacks=new Map);let n=kt._elementCallbacks.get(e);n||(n=new Set,kt._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=kt._getElementCallbacks(e);n&&(n.delete(t),n.size||(kt._elementCallbacks.delete(e),kt._observerInstance.unobserve(e))),kt._elementCallbacks&&!kt._elementCallbacks.size&&(kt._observerInstance=null,kt._elementCallbacks=null)}static _getElementCallbacks(e){return kt._elementCallbacks?kt._elementCallbacks.get(e):null}static _createObserver(){kt._observerInstance=new Be.window.ResizeObserver(e=>{for(const t of e){const n=kt._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function Lr(r){return!!(r&&r.getClientRects&&r.getClientRects().length)}function Ut(r){const e=r.next();return e.done?null:e.value}kt._observerInstance=null,kt._elementCallbacks=null;class Wn extends er(lt){constructor(){super(),this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new C("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class yi{constructor(){this._listener=Object.create(er)}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Ci(n),n)})}set(e,t,n={}){const o=Tu(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(a,l)=>{t(l,()=>{l.preventDefault(),l.stopPropagation(),a.stop()}),a.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+Ci(e),e)}destroy(){this._listener.stopListening()}}class gy extends Wi{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((o=n.keyCode)==Fe.arrowright||o==Fe.arrowleft||o==Fe.arrowup||o==Fe.arrowdown)){const s=new Qs(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(s,n),s.stop.called&&t.stop()}var o})}observe(){}}class my extends Wi{constructor(e){super(e);const t=this.document;t.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=Fe.tab||o.ctrlKey)return;const s=new Qs(t,"tab",t.selection.getFirstRange());t.fire(s,o),s.stop.called&&n.stop()})}observe(){}}function zc(r){return Object.prototype.toString.apply(r)=="[object Range]"}function lf(r){const e=r.ownerDocument.defaultView.getComputedStyle(r);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const df=["top","right","bottom","left","width","height"];class dt{constructor(e){const t=zc(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),hf(e)||t)if(t){const n=dt.getDomRangeRects(e);Fc(this,dt.getBoundingRect(n))}else Fc(this,e.getBoundingClientRect());else if(Nc(e)){const{innerWidth:n,innerHeight:o}=e;Fc(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Fc(this,e)}clone(){return new dt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new dt(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!uf(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!uf(n);){const o=new dt(n),s=t.getIntersection(o);if(!s)return null;s.getArea()<t.getArea()&&(t=s),n=n.parentNode}}return t}isEqual(e){for(const t of df)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(Nc(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const s=lf(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new dt(o));else{let o=e.startContainer;rn(o)&&(o=o.parentNode);const s=new dt(o.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new dt(t))}}function Fc(r,e){for(const t of df)r[t]=e[t]}function uf(r){return!!hf(r)&&r===r.ownerDocument.body}function hf(r){return r!==null&&typeof r=="object"&&r.nodeType===1&&typeof r.getBoundingClientRect=="function"}function fy(r,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),s=new dt(r).excludeScrollbarsAndBorders();if(![o,n].every(a=>s.contains(a))){let{scrollX:a,scrollY:l}=r;mf(o,s)?l-=s.top-e.top+t:gf(n,s)&&(l+=e.bottom-s.bottom+t),ff(e,s)?a-=s.left-e.left+t:pf(e,s)&&(a+=e.right-s.right+t),r.scrollTo(a,l)}}function py(r,e){const t=zu(r);let n,o;for(;r!=t.document.body;)o=e(),n=new dt(r).excludeScrollbarsAndBorders(),n.contains(o)||(mf(o,n)?r.scrollTop-=n.top-o.top:gf(o,n)&&(r.scrollTop+=o.bottom-n.bottom),ff(o,n)?r.scrollLeft-=n.left-o.left:pf(o,n)&&(r.scrollLeft+=o.right-n.right)),r=r.parentNode}function gf(r,e){return r.bottom>e.bottom}function mf(r,e){return r.top<e.top}function ff(r,e){return r.left<e.left}function pf(r,e){return r.right>e.right}function zu(r){return zc(r)?r.startContainer.ownerDocument.defaultView:r.ownerDocument.defaultView}function by(r){if(zc(r)){let e=r.commonAncestorContainer;return rn(e)&&(e=e.parentNode),e}return r.parentNode}function bf(r,e){const t=zu(r),n=new dt(r);if(t===e)return n;{let o=t;for(;o!=e;){const s=o.frameElement,a=new dt(s).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),o=o.parent}}return n}class ky extends lt{constructor(e){super(),this.document=new Sc(e),this.domConverter=new Js(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new PC(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document,"isFocused","isSelecting"),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Dm(this.document),this.addObserver(of),this.addObserver(cy),this.addObserver(ly),this.addObserver(QC),this.addObserver(ay),this.addObserver(dy),this.addObserver(gy),this.addObserver(my),et.isAndroid&&this.addObserver(uy),this.document.on("arrowKey",xC,{priority:"low"}),yC(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const o={};for(const{name:a,value:l}of Array.from(e.attributes))o[a]=l,a==="class"?this._writer.addClass(l.split(" "),n):this._writer.setAttribute(a,l,n);this._initialDomRootAttributes.set(e,o);const s=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};s(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(a,l)=>this._renderer.markToSync("children",l)),n.on("change:attributes",(a,l)=>this._renderer.markToSync("attributes",l)),n.on("change:text",(a,l)=>this._renderer.markToSync("text",l)),n.on("change:isReadOnly",()=>this.change(s)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const a of this._observers.values())a.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:o})=>t.removeAttribute(o));const n=this._initialDomRootAttributes.get(t);for(const o in n)t.setAttribute(o,n[o]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,o]of this.domRoots)t.observe(o,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const o=zu(t);let s=o,a=null;for(;s;){let l;l=by(s==o?t:a),py(l,()=>bf(t,s));const u=bf(t,s);if(fy(s,u,n),s.parent!=s){if(a=s.frameElement,s=s.parent,!a)return}else s=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new C("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){C.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return me._createAt(e,t)}createPositionAfter(e){return me._createAfter(e)}createPositionBefore(e){return me._createBefore(e)}createRange(...e){return new xe(...e)}createRangeOn(e){return xe._createOn(e)}createRangeIn(e){return xe._createIn(e)}createSelection(...e){return new si(...e)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class Io{is(){throw new Error("is() method is abstract")}}class To extends Io{constructor(e){super(),this.parent=null,this._attrs=On(e)}get document(){return null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new C("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new C("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=Qt(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}_clone(e){return new To(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=On(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}To.prototype.is=function(r){return r==="node"||r==="model:node"};class ta{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new C("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new C("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof To))throw new C("model-nodelist-insertnodes-not-node",this);this._nodes=function(n,o,s,a){if(Math.max(o.length,n.length)>1e4)return n.slice(0,s).concat(o).concat(n.slice(s+a,n.length));{const l=Array.from(n);return l.splice(s,a,...o),l}}(this._nodes,Array.from(t),e,0)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class st extends To{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new st(this.data,this.getAttributes())}static fromJSON(e){return new st(e.data,e.attributes)}}st.prototype.is=function(r){return r==="$text"||r==="model:$text"||r==="text"||r==="model:text"||r==="node"||r==="model:node"};class ai extends Io{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.offsetSize)throw new C("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new C("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}ai.prototype.is=function(r){return r==="$textProxy"||r==="model:$textProxy"||r==="textProxy"||r==="model:textProxy"};class tt extends To{constructor(e,t,n){super(t),this.name=e,this._children=new ta,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new tt(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new st(o)]:(pn(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new st(s):s instanceof ai?new st(s.data,s.getAttributes()):s))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}static fromJSON(e){let t;if(e.children){t=[];for(const n of e.children)n.name?t.push(tt.fromJSON(n)):t.push(st.fromJSON(n))}return new tt(e.name,e.attributes,t)}}tt.prototype.is=function(r,e){return e?e===this.name&&(r==="element"||r==="model:element"):r==="element"||r==="model:element"||r==="node"||r==="model:node"};class Yi{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new C("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new C("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=le._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,o,s;do o=this.position,s=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o,this._visitedParent=s)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const o=na(t,n),s=o||kf(t,n,o);if(s instanceof tt)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=s),this.position=t,tr("elementStart",s,e,t,1);if(s instanceof st){let a;if(this.singleCharacters)a=1;else{let m=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<m&&(m=this.boundaries.end.offset),a=m-t.offset}const l=t.offset-s.startOffset,u=new ai(s,l,a);return t.offset+=a,this.position=t,tr("text",u,e,t,a)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():tr("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const o=t.parent,s=na(t,o),a=s||wf(t,o,s);if(a instanceof tt)return t.offset--,this.shallow?(this.position=t,tr("elementStart",a,e,t,1)):(t.path.push(a.maxOffset),this.position=t,this._visitedParent=a,this.ignoreElementEnd?this._previous():tr("elementEnd",a,e,t));if(a instanceof st){let l;if(this.singleCharacters)l=1;else{let f=a.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>f&&(f=this.boundaries.start.offset),l=t.offset-f}const u=t.offset-a.startOffset,m=new ai(a,u-l,l);return t.offset-=l,this.position=t,tr("text",m,e,t,l)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,tr("elementStart",n,e,t,1)}}function tr(r,e,t,n,o){return{done:!1,value:{type:r,item:e,previousPosition:t,nextPosition:n,length:o}}}class le extends Io{constructor(e,t,n="toNone"){if(super(),!e.is("element")&&!e.is("documentFragment"))throw new C("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new C("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new C("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new C("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return na(this,this.parent)}get nodeAfter(){const e=this.parent;return kf(this,e,na(this,e))}get nodeBefore(){const e=this.parent;return wf(this,e,na(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=Qt(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Yi(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=Qt(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){if(this.root!==e.root)return!1;const t=Math.min(this.path.length,e.path.length);for(let n=0;n<t;n++){const o=this.path[n]-e.path[n];if(o<-1||o>1)return!1;if(o===1)return _f(e,this,n);if(o===-1)return _f(this,e,n)}return this.path.length===e.path.length||(this.path.length>e.path.length?Fu(this.path,t):Fu(e.path,t))}hasSameParentAs(e){return this.root!==e.root?!1:Qt(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=le._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?le._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=le._createAt(this);if(this.root!=e.root)return n;if(Qt(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(Qt(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;if(e.offset<=this.path[o]){if(e.offset+t>this.path[o])return null;n.path[o]-=t}}return n}_getTransformedByInsertion(e,t){const n=le._createAt(this);if(this.root!=e.root)return n;if(Qt(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(Qt(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;e.offset<=this.path[o]&&(n.path[o]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return le._createAt(this);const o=this._getTransformedByDeletion(e,n);return o===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):o._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,o=le._createAt(t);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-e.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof le)return new le(e.root,e.path,e.stickiness);{const o=e;if(t=="end")t=o.maxOffset;else{if(t=="before")return this._createBefore(o,n);if(t=="after")return this._createAfter(o,n);if(t!==0&&!t)throw new C("model-createpositionat-offset-required",[this,e])}if(!o.is("element")&&!o.is("documentFragment"))throw new C("model-position-parent-incorrect",[this,e]);const s=o.getPath();return s.push(t),new this(o.root,s,n)}}static _createAfter(e,t){if(!e.parent)throw new C("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new C("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new le(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new C("model-position-fromjson-no-root",t,{rootName:e.root});return new le(t.getRoot(e.root),e.path,e.stickiness)}}function na(r,e){const t=e.getChild(e.offsetToIndex(r.offset));return t&&t.is("$text")&&t.startOffset<r.offset?t:null}function kf(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset))}function wf(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset)-1)}function _f(r,e,t){return t+1!==r.path.length&&!!Fu(e.path,t+1)&&!!function(n,o){let s=n.parent,a=n.path.length-1,l=0;for(;a>=o;){if(n.path[a]+l!==s.maxOffset)return!1;l=1,a--,s=s.parent}return!0}(r,t+1)}function Fu(r,e){for(;e<r.length;){if(r[e]!==0)return!1;e++}return!0}le.prototype.is=function(r){return r==="position"||r==="model:position"};class $ extends Io{constructor(e,t){super(),this.start=le._createAt(e),this.end=t?le._createAt(t):le._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Yi({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Qt(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}containsItem(e){const t=le._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new $(this.start,e.start)),this.containsPosition(e.end)&&t.push(new $(e.end,this.end))):t.push(new $(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new $(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let o=this.start,s=this.end;return e.start.isBefore(o)&&(o=e.start),e.end.isAfter(s)&&(s=e.end),new $(o,s)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=le._createAt(this.start);let o=n.parent;for(;n.path.length>t+1;){const s=o.maxOffset-n.offset;s!==0&&e.push(new $(n,n.getShiftedBy(s))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const s=this.end.path[n.path.length-1],a=s-n.offset;a!==0&&e.push(new $(n,n.getShiftedBy(a))),n.offset=s,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new Yi(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Yi(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Yi(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new $(this.start,this.end)]}getTransformedByOperations(e){const t=[new $(this.start,this.end)];for(const n of e)for(let o=0;o<t.length;o++){const s=t[o].getTransformedByOperation(n);t.splice(o,1,...s),o+=s.length-1}for(let n=0;n<t.length;n++){const o=t[n];for(let s=n+1;s<t.length;s++){const a=t[s];(o.containsRange(a)||a.containsRange(o)||o.isEqual(a))&&t.splice(s,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,o=e.howMany,s=e.targetPosition;return this._getTransformedByMove(n,s,o,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new $(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new $(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=le._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new $(t,n)):new $(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new $(this.start,e),new $(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const o=new $(this.start,this.end);return o.start=o.start._getTransformedByInsertion(e,t),o.end=o.end._getTransformedByInsertion(e,t),[o]}}_getTransformedByMove(e,t,n,o=!1){if(this.isCollapsed){const p=this.start._getTransformedByMove(e,t,n);return[new $(p)]}const s=$._createFromPositionAndShift(e,n),a=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!o&&(s.containsPosition(this.start)||s.containsPosition(this.end))){const p=this.start._getTransformedByMove(e,t,n),v=this.end._getTransformedByMove(e,t,n);return[new $(p,v)]}let l;const u=this.getDifference(s);let m=null;const f=this.getIntersection(s);if(u.length==1?m=new $(u[0].start._getTransformedByDeletion(e,n),u[0].end._getTransformedByDeletion(e,n)):u.length==2&&(m=new $(this.start,this.end._getTransformedByDeletion(e,n))),l=m?m._getTransformedByInsertion(a,n,f!==null||o):[],f){const p=new $(f.start._getCombined(s.start,a),f.end._getCombined(s.start,a));l.length==2?l.splice(1,0,p):l.push(p)}return l}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),o=this.end._getTransformedByDeletion(e,t);return n==null&&o==null?null:(n==null&&(n=e),o==null&&(o=e),new $(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return new this(le._createAt(e,0),le._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(le._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new C("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((s,a)=>s.start.isAfter(a.start)?1:-1);const n=e.indexOf(t),o=new this(t.start,t.end);if(n>0)for(let s=n-1;e[s].end.isEqual(o.start);s++)o.start=le._createAt(e[s].start);for(let s=n+1;s<e.length&&e[s].start.isEqual(o.end);s++)o.end=le._createAt(e[s].end);return o}static fromJSON(e,t){return new this(le.fromJSON(e.start,t),le.fromJSON(e.end,t))}}$.prototype.is=function(r){return r==="range"||r==="model:range"};class Af extends te{constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new C("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),o=this._viewToModelMapping.get(n),s=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=le._createAt(o,s)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const o of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(o);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const o=this._elementToMarkerNames.get(e)||new Set;o.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,o)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const o=this._elementToMarkerNames.get(e);o&&(o.delete(t),o.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new $(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new xe(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const o of t)if(o.is("attributeElement"))for(const s of o.getElementsWithSameId())n.add(s);else n.add(o);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let o=0;for(let s=0;s<t;s++)o+=this.getModelLength(e.getChild(s));return o}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,o=0,s=0,a=0;if(e.is("$text"))return new me(e,t);for(;s<t;)n=e.getChild(a),o=this.getModelLength(n),s+=o,a++;return s==t?this._moveViewPositionToTextNode(new me(e,a)):this.findPositionIn(n,t-(s-o))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof Ze?new me(t,t.data.length):n instanceof Ze?new me(n,0):e}}class wy{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=jc(t),e instanceof ai&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=jc(t),e instanceof ai&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=jc(t),e instanceof ai&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const o=n.get(t);return o===void 0?null:o}revert(e,t){t=jc(t),e instanceof ai&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,o]of this._consumable)for(const[s,a]of o){const l=s.split(":")[0];a&&e==l&&t.push({event:s,item:n.name||n.description})}if(t.length)throw new C("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const o=n.get(e.endOffset);o&&(t=o.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,o=e.parent,s=Symbol("$textProxy:"+e.data);let a,l;return a=this._textProxyRegistry.get(t),a||(a=new Map,this._textProxyRegistry.set(t,a)),l=a.get(n),l||(l=new Map,a.set(n,l)),l.set(o,s),s}}function jc(r){const e=r.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?r:e.length>1?e[0]+":"+e[1]:e[0]}class vf extends te{constructor(e){super(),this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const o=this._createConversionApi(n,e.getRefreshedItems());for(const a of e.getMarkersToRemove())this._convertMarkerRemove(a.name,a.range,o);const s=this._reduceChanges(e.getChanges());for(const a of s)a.type==="insert"?this._convertInsert($._createFromPositionAndShift(a.position,a.length),o):a.type==="reinsert"?this._convertReinsert($._createFromPositionAndShift(a.position,a.length),o):a.type==="remove"?this._convertRemove(a.position,a.length,a.name,o):this._convertAttribute(a.range,a.attributeKey,a.attributeOldValue,a.attributeNewValue,o);for(const a of o.mapper.flushUnboundMarkerNames()){const l=t.get(a).getRange();this._convertMarkerRemove(a,l,o),this._convertMarkerAdd(a,l,o)}for(const a of e.getMarkersToAdd())this._convertMarkerAdd(a.name,a.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(e,t,n,o={}){const s=this._createConversionApi(n,void 0,o);this._convertInsert(e,s);for(const[a,l]of t)this._convertMarkerAdd(a,l,s);s.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const o=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),s=this._createConversionApi(n);if(this._addConsumablesForSelection(s.consumable,e,o),this.fire("selection",{selection:e},s),e.isCollapsed){for(const a of o){const l=a.getRange();if(!_y(e.getFirstPosition(),a,s.mapper))continue;const u={item:e,markerName:a.name,markerRange:l};s.consumable.test(e,"addMarker:"+a.name)&&this.fire(`addMarker:${a.name}`,u,s)}for(const a of e.getAttributeKeys()){const l={item:e,range:e.getFirstRange(),attributeKey:a,attributeOldValue:null,attributeNewValue:e.getAttribute(a)};s.consumable.test(e,"attribute:"+l.attributeKey)&&this.fire(`attribute:${l.attributeKey}:$text`,l,s)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const o of Array.from(e.getWalker({shallow:!0})).map(Cf))this._testAndFire("insert",o,t)}_convertRemove(e,t,n,o){this.fire(`remove:${n}`,{position:e,length:t},o)}_convertAttribute(e,t,n,o,s){this._addConsumablesForRange(s.consumable,e,`attribute:${t}`);for(const a of e){const l={item:a.item,range:$._createFromPositionAndShift(a.previousPosition,a.length),attributeKey:t,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${t}`,l,s)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const o of n.map(Cf))this._testAndFire("insert",{...o,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const o=`addMarker:${e}`;if(n.consumable.add(t,o),this.fire(o,{markerName:e,markerRange:t},n),n.consumable.consume(t,o)){this._addConsumablesForRange(n.consumable,t,o);for(const s of t.getItems()){if(!n.consumable.test(s,o))continue;const a={item:s,range:$._createOn(s),markerName:e,markerRange:t};this.fire(o,a,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire(`removeMarker:${e}`,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const o=n.item;if(e.test(o,"insert")===null){e.add(o,"insert");for(const s of o.getAttributeKeys())e.add(o,"attribute:"+s)}}return e}_addConsumablesForRange(e,t,n){for(const o of t.getItems())e.add(o,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const o of n)e.add(t,"addMarker:"+o.name);for(const o of t.getAttributeKeys())e.add(t,"attribute:"+o);return e}_testAndFire(e,t,n){const o=function(u,m){const f=m.item.is("element")?m.item.name:"$text";return`${u}:${f}`}(e,t),s=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,a=this._firedEventsMap.get(n),l=a.get(s);if(l){if(l.has(o))return;l.add(o)}else a.set(s,new Set([o]));this.fire(o,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:$._createOn(e)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,t)}_createConversionApi(e,t=new Set,n={}){const o={...this._conversionApi,consumable:new wy,writer:e,options:n,convertItem:s=>this._convertInsert($._createOn(s),o),convertChildren:s=>this._convertInsert($._createIn(s),o,{doNotAddConsumables:!0}),convertAttributes:s=>this._testAndFireAddAttributes(s,o),canReuseView:s=>!t.has(o.mapper.toModelElement(s))};return this._firedEventsMap.set(o,new Map),o}}function _y(r,e,t){const n=e.getRange(),o=Array.from(r.getAncestors());return o.shift(),o.reverse(),!o.some(s=>{if(n.containsItem(s))return!!t.toViewElement(s).getCustomProperty("addHighlight")})}function Cf(r){return{item:r.item,range:$._createFromPositionAndShift(r.previousPosition,r.length)}}class Ei extends se(Io){constructor(...e){super(),this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e.length&&this.setTo(...e)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new $(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new $(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new $(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]);else if(t instanceof Ei)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof $)this._setRanges([t],!!o&&!!o.backward);else if(t instanceof le)this._setRanges([new $(t)]);else if(t instanceof To){const s=!!o&&!!o.backward;let a;if(n=="in")a=$._createIn(t);else if(n=="on")a=$._createOn(t);else{if(n===void 0)throw new C("model-selection-setto-required-second-parameter",[this,t]);a=new $(le._createAt(t,n))}this._setRanges([a],s)}else{if(!pn(t))throw new C("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,o&&!!o.backward)}}_setRanges(e,t=!1){const n=Array.from(e),o=n.some(s=>{if(!(s instanceof $))throw new C("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(a=>!a.isEqual(s))});(n.length!==this._ranges.length||o)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0}))}setFocus(e,t){if(this.anchor===null)throw new C("model-selection-setfocus-no-ranges",[this,e]);const n=le._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new $(n,o)),this._lastRangeBackward=!0):(this._pushRange(new $(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=Ef(t.start,e);n&&ju(n,t)&&(yield n);for(const s of t.getWalker()){const a=s.item;s.type=="elementEnd"&&Ay(a,e,t)&&(yield a)}const o=Ef(t.end,e);o&&!t.end.isTouching(le._createAt(o,0))&&ju(o,t)&&(yield o)}}containsEntireContent(e=this.anchor.root){const t=le._createAt(e,0),n=le._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new $(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new C("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_replaceAllRanges(e){this._removeAllRanges();for(const t of e)this._pushRange(t)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function yf(r,e){return!e.has(r)&&(e.add(r),r.root.document.model.schema.isBlock(r)&&r.parent)}function Ay(r,e,t){return yf(r,e)&&ju(r,t)}function Ef(r,e){const t=r.parent.root.document.model.schema,n=r.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const s=n.find(a=>!o&&(o=t.isLimit(a),!o&&yf(a,e)));return n.forEach(a=>e.add(a)),s}function ju(r,e){const t=function(n){const o=n.root.document.model.schema;let s=n.parent;for(;s;){if(o.isBlock(s))return s;s=s.parent}}(r);return t?!e.containsRange($._createOn(t),!0):!0}Ei.prototype.is=function(r){return r==="selection"||r==="model:selection"};class ci extends se($){constructor(e,t){super(e,t),vy.call(this)}detach(){this.stopListening()}toRange(){return new $(this.start,this.end)}static fromRange(e){return new ci(e.start,e.end)}}function vy(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&Cy.call(this,t)},{priority:"low"})}function Cy(r){const e=this.getTransformedByOperation(r),t=$._createFromRanges(e),n=!t.isEqual(this),o=function(a,l){switch(l.type){case"insert":return a.containsPosition(l.position);case"move":case"remove":case"reinsert":case"merge":return a.containsPosition(l.sourcePosition)||a.start.isEqual(l.sourcePosition)||a.containsPosition(l.targetPosition);case"split":return a.containsPosition(l.splitPosition)||a.containsPosition(l.insertionPosition)}return!1}(this,r);let s=null;if(n){t.root.rootName=="$graveyard"&&(s=r.type=="remove"?r.sourcePosition:r.deletionPosition);const a=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",a,{deletionPosition:s})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:s})}ci.prototype.is=function(r){return r==="liveRange"||r==="model:liveRange"||r=="range"||r==="model:range"};const ia="selection:";class Yn extends se(Io){constructor(e){super(),this._selection=new yy(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(...e){this._selection.setTo(...e)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return ia+e}static _isStoreAttributeKey(e){return e.startsWith(ia)}}Yn.prototype.is=function(r){return r==="selection"||r=="model:selection"||r=="documentSelection"||r=="model:documentSelection"};class yy extends Ei{constructor(e){super(),this.markers=new Pn({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(t,n,o,s)=>{this._updateMarker(n,s)}),this.listenTo(this._document,"change",(t,n)=>{(function(o,s){const a=o.document.differ;for(const l of a.getChanges()){if(l.type!="insert")continue;const u=l.position.parent;l.length===u.maxOffset&&o.enqueueChange(s,m=>{const f=Array.from(u.getAttributeKeys()).filter(p=>p.startsWith(ia));for(const p of f)m.removeAttribute(p,u)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...e){super.setTo(...e),this._updateAttributes(!0),this.updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this.updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=I();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new C("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this.updateMarkers()}_replaceAllRanges(e){this._validateSelectionRanges(e),super._replaceAllRanges(e)}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_validateSelectionRanges(e){for(const t of e)if(!this._document._validateSelectionRange(t))throw new C("document-selection-wrong-position",this,{range:t})}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=ci.fromRange(e);return t.on("change:range",(n,o,s)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=s.deletionPosition;const a=this._ranges.indexOf(t);this._ranges.splice(a,1),t.detach()}}),t}updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const o of this._model.markers){const s=o.name.split(":",1)[0];if(!this._observedMarkers.has(s))continue;const a=o.getRange();for(const l of this.getRanges())a.containsRange(l,!l.isCollapsed)&&e.push(o)}const n=Array.from(this.markers);for(const o of e)this.markers.has(o)||(this.markers.add(o),t=!0);for(const o of Array.from(this.markers))e.includes(o)||(this.markers.remove(o),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const s=Array.from(this.markers),a=this.markers.has(e);if(t){let l=!1;for(const u of this.getRanges())if(t.containsRange(u,!u.isCollapsed)){l=!0;break}l&&!a?(this.markers.add(e),o=!0):!l&&a&&(this.markers.remove(e),o=!0)}else a&&(this.markers.remove(e),o=!0);o&&this.fire("change:marker",{oldMarkers:s,directChange:!1})}_updateAttributes(e){const t=On(this._getSurroundingAttributes()),n=On(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[s,a]of this._attributePriority)a=="low"&&(this._attrs.delete(s),this._attributePriority.delete(s));this._setAttributesTo(t);const o=[];for(const[s,a]of this.getAttributes())n.has(s)&&n.get(s)===a||o.push(s);for(const[s]of n)this.hasAttribute(s)||o.push(s);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(e,t,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,o),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,o]of this.getAttributes())e.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of e)this._setAttribute(n,o,!1)&&t.add(n);return t}*getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(ia)&&(yield[t.substr(ia.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const o=e.textNode?e.textNode:e.nodeBefore,s=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=Vc(o)),n||(n=Vc(s)),!this.isGravityOverridden&&!n){let a=o;for(;a&&!t.isInline(a)&&!n;)a=a.previousSibling,n=Vc(a)}if(!n){let a=s;for(;a&&!t.isInline(a)&&!n;)a=a.nextSibling,n=Vc(a)}n||(n=this.getStoredAttributes())}else{const o=this.getFirstRange();for(const s of o){if(s.item.is("element")&&t.isObject(s.item))break;if(s.type=="text"){n=s.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function Vc(r){return r instanceof ai||r instanceof st?r.getAttributes():null}class If{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const nr=function(r){return vo(r,5)};class Ey extends If{elementToElement(e){return this.add(function(t){const n=xf(t.model),o=oa(t.view,"container");return n.attributes.length&&(n.children=!0),s=>{s.on(`insert:${n.name}`,function(a,l=Ty){return(u,m,f)=>{if(!l(m.item,f.consumable,{preflight:!0}))return;const p=a(m.item,f,m);if(!p)return;l(m.item,f.consumable);const v=f.mapper.toViewPosition(m.range.start);f.mapper.bindElements(m.item,p),f.writer.insert(v,p),f.convertAttributes(m.item),Rf(p,m.item.getChildren(),f,{reconversion:m.reconversion})}}(o,Of(n)),{priority:t.converterPriority||"normal"}),(n.children||n.attributes.length)&&s.on("reduceChanges",Pf(n),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){const n=xf(t.model),o=oa(t.view,"container");return n.children=!0,s=>{if(s._conversionApi.schema.checkChild(n.name,"$text"))throw new C("conversion-element-to-structure-disallowed-text",s,{elementName:n.name});var a,l;s.on(`insert:${n.name}`,(a=o,l=Of(n),(u,m,f)=>{if(!l(m.item,f.consumable,{preflight:!0}))return;const p=new Map;f.writer._registerSlotFactory(function(S,M,O){return(L,V="children")=>{const K=L.createContainerElement("$slot");let ge=null;if(V==="children")ge=Array.from(S.getChildren());else{if(typeof V!="function")throw new C("conversion-slot-mode-unknown",O.dispatcher,{modeOrFilter:V});ge=Array.from(S.getChildren()).filter(Ie=>V(Ie))}return M.set(K,ge),K}}(m.item,p,f));const v=a(m.item,f,m);if(f.writer._clearSlotFactory(),!v)return;(function(S,M,O){const L=Array.from(M.values()).flat(),V=new Set(L);if(V.size!=L.length)throw new C("conversion-slot-filter-overlap",O.dispatcher,{element:S});if(V.size!=S.childCount)throw new C("conversion-slot-filter-incomplete",O.dispatcher,{element:S})})(m.item,p,f),l(m.item,f.consumable);const T=f.mapper.toViewPosition(m.range.start);f.mapper.bindElements(m.item,v),f.writer.insert(T,v),f.convertAttributes(m.item),function(S,M,O,L){O.mapper.on("modelToViewPosition",ge,{priority:"highest"});let V=null,K=null;for([V,K]of M)Rf(S,K,O,L),O.writer.move(O.writer.createRangeIn(V),O.writer.createPositionBefore(V)),O.writer.remove(V);function ge(Ie,Ue){const He=Ue.modelPosition.nodeAfter,Gt=K.indexOf(He);Gt<0||(Ue.viewPosition=Ue.mapper.findPositionIn(V,Gt))}O.mapper.off("modelToViewPosition",ge)}(v,p,f,{reconversion:m.reconversion})}),{priority:t.converterPriority||"normal"}),s.on("reduceChanges",Pf(n),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){let n=(t=nr(t)).model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(const a of n.values)t.view[a]=oa(t.view[a],"attribute");else t.view=oa(t.view,"attribute");const s=Sf(t);return a=>{a.on(o,function(l){return(u,m,f)=>{if(!f.consumable.test(m.item,u.name))return;const p=l(m.attributeOldValue,f,m),v=l(m.attributeNewValue,f,m);if(!p&&!v)return;f.consumable.consume(m.item,u.name);const T=f.writer,S=T.document.selection;if(m.item instanceof Ei||m.item instanceof Yn)T.wrap(S.getFirstRange(),v);else{let M=f.mapper.toViewRange(m.range);m.attributeOldValue!==null&&p&&(M=T.unwrap(M,p)),m.attributeNewValue!==null&&v&&T.wrap(M,v)}}}(s),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){let n=(t=nr(t)).model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(const a of n.values)t.view[a]=Mf(t.view[a]);else t.view=Mf(t.view);const s=Sf(t);return a=>{var l;a.on(o,(l=s,(u,m,f)=>{if(!f.consumable.test(m.item,u.name))return;const p=l(m.attributeOldValue,f,m),v=l(m.attributeNewValue,f,m);if(!p&&!v)return;f.consumable.consume(m.item,u.name);const T=f.mapper.toViewElement(m.item),S=f.writer;if(!T)throw new C("conversion-attribute-to-attribute-on-text",f.dispatcher,m);if(m.attributeOldValue!==null&&p)if(p.key=="class"){const M=Tt(p.value);for(const O of M)S.removeClass(O,T)}else if(p.key=="style"){const M=Object.keys(p.value);for(const O of M)S.removeStyle(O,T)}else S.removeAttribute(p.key,T);if(m.attributeNewValue!==null&&v)if(v.key=="class"){const M=Tt(v.value);for(const O of M)S.addClass(O,T)}else if(v.key=="style"){const M=Object.keys(v.value);for(const O of M)S.setStyle(O,v.value[O],T)}else S.setAttribute(v.key,v.value,T)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){const n=oa(t.view,"ui");return o=>{var s;o.on(`addMarker:${t.model}`,(s=n,(a,l,u)=>{l.isOpening=!0;const m=s(l,u);l.isOpening=!1;const f=s(l,u);if(!m||!f)return;const p=l.markerRange;if(p.isCollapsed&&!u.consumable.consume(p,a.name))return;for(const S of p)if(!u.consumable.consume(S.item,a.name))return;const v=u.mapper,T=u.writer;T.insert(v.toViewPosition(p.start),m),u.mapper.bindElementToMarker(m,l.markerName),p.isCollapsed||(T.insert(v.toViewPosition(p.end),f),u.mapper.bindElementToMarker(f,l.markerName)),a.stop()}),{priority:t.converterPriority||"normal"}),o.on(`removeMarker:${t.model}`,(a,l,u)=>{const m=u.mapper.markerNameToElements(l.markerName);if(m){for(const f of m)u.mapper.unbindElementFromMarkerName(f,l.markerName),u.writer.clear(u.writer.createRangeOn(f),f);u.writer.clearClonedElementsGroup(l.markerName),a.stop()}},{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var o;n.on(`addMarker:${t.model}`,(o=t.view,(s,a,l)=>{if(!a.item||!(a.item instanceof Ei||a.item instanceof Yn||a.item.is("$textProxy")))return;const u=Vu(o,a,l);if(!u||!l.consumable.consume(a.item,s.name))return;const m=l.writer,f=Tf(m,u),p=m.document.selection;if(a.item instanceof Ei||a.item instanceof Yn)m.wrap(p.getFirstRange(),f);else{const v=l.mapper.toViewRange(a.range),T=m.wrap(v,f);for(const S of T.getItems())if(S.is("attributeElement")&&S.isSimilar(f)){l.mapper.bindElementToMarker(S,a.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on(`addMarker:${t.model}`,function(s){return(a,l,u)=>{if(!l.item||!(l.item instanceof tt))return;const m=Vu(s,l,u);if(!m||!u.consumable.test(l.item,a.name))return;const f=u.mapper.toViewElement(l.item);if(f&&f.getCustomProperty("addHighlight")){u.consumable.consume(l.item,a.name);for(const p of $._createIn(l.item))u.consumable.consume(p.item,a.name);f.getCustomProperty("addHighlight")(f,m,u.writer),u.mapper.bindElementToMarker(f,l.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on(`removeMarker:${t.model}`,function(s){return(a,l,u)=>{if(l.markerRange.isCollapsed)return;const m=Vu(s,l,u);if(!m)return;const f=Tf(u.writer,m),p=u.mapper.markerNameToElements(l.markerName);if(p){for(const v of p)u.mapper.unbindElementFromMarkerName(v,l.markerName),v.is("attributeElement")?u.writer.unwrap(u.writer.createRangeOn(v),f):v.getCustomProperty("removeHighlight")(v,m.id,u.writer);u.writer.clearClonedElementsGroup(l.markerName),a.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){const n=(t=nr(t)).model;let o=t.view;return o||(o=s=>({group:n,name:s.substr(t.model.length+1)})),s=>{var a;s.on(`addMarker:${n}`,(a=o,(l,u,m)=>{const f=a(u.markerName,m);if(!f)return;const p=u.markerRange;m.consumable.consume(p,l.name)&&(Df(p,!1,m,u,f),Df(p,!0,m,u,f),l.stop())}),{priority:t.converterPriority||"normal"}),s.on(`removeMarker:${n}`,function(l){return(u,m,f)=>{const p=l(m.markerName,f);if(!p)return;const v=f.mapper.markerNameToElements(m.markerName);if(v){for(const S of v)f.mapper.unbindElementFromMarkerName(S,m.markerName),S.is("containerElement")?(T(`data-${p.group}-start-before`,S),T(`data-${p.group}-start-after`,S),T(`data-${p.group}-end-before`,S),T(`data-${p.group}-end-after`,S)):f.writer.clear(f.writer.createRangeOn(S),S);f.writer.clearClonedElementsGroup(m.markerName),u.stop()}function T(S,M){if(M.hasAttribute(S)){const O=new Set(M.getAttribute(S).split(","));O.delete(p.name),O.size==0?f.writer.removeAttribute(S,M):f.writer.setAttribute(S,Array.from(O).join(","),M)}}}}(o),{priority:t.converterPriority||"normal"})}}(e))}}function Tf(r,e){const t=r.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function Df(r,e,t,n,o){const s=e?r.start:r.end,a=s.nodeAfter&&s.nodeAfter.is("element")?s.nodeAfter:null,l=s.nodeBefore&&s.nodeBefore.is("element")?s.nodeBefore:null;if(a||l){let u,m;e&&a||!e&&!l?(u=a,m=!0):(u=l,m=!1);const f=t.mapper.toViewElement(u);if(f)return void function(p,v,T,S,M,O){const L=`data-${O.group}-${v?"start":"end"}-${T?"before":"after"}`,V=p.hasAttribute(L)?p.getAttribute(L).split(","):[];V.unshift(O.name),S.writer.setAttribute(L,V.join(","),p),S.mapper.bindElementToMarker(p,M.markerName)}(f,e,m,t,n,o)}(function(u,m,f,p,v){const T=`${v.group}-${m?"start":"end"}`,S=v.name?{name:v.name}:null,M=f.writer.createUIElement(T,S);f.writer.insert(u,M),f.mapper.bindElementToMarker(M,p.markerName)})(t.mapper.toViewPosition(s),e,t,n,o)}function xf(r){return typeof r=="string"&&(r={name:r}),r.attributes?Array.isArray(r.attributes)||(r.attributes=[r.attributes]):r.attributes=[],r.children=!!r.children,r}function oa(r,e){return typeof r=="function"?r:(t,n)=>function(o,s,a){typeof o=="string"&&(o={name:o});let l;const u=s.writer,m=Object.assign({},o.attributes);if(a=="container")l=u.createContainerElement(o.name,m);else if(a=="attribute"){const f={priority:o.priority||Zo.DEFAULT_PRIORITY};l=u.createAttributeElement(o.name,m,f)}else l=u.createUIElement(o.name,m);if(o.styles){const f=Object.keys(o.styles);for(const p of f)u.setStyle(p,o.styles[p],l)}if(o.classes){const f=o.classes;if(typeof f=="string")u.addClass(f,l);else for(const p of f)u.addClass(p,l)}return l}(r,n,e)}function Sf(r){return r.model.values?(e,t,n)=>{const o=r.view[e];return o?o(e,t,n):null}:r.view}function Mf(r){return typeof r=="string"?e=>({key:r,value:e}):typeof r=="object"?r.value?()=>r:e=>({key:r.key,value:e}):r}function Vu(r,e,t){const n=typeof r=="function"?r(e,t):r;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function Pf(r){const e=function(t){return(n,o)=>{if(!n.is("element",t.name))return!1;if(o.type=="attribute"){if(t.attributes.includes(o.attributeKey))return!0}else if(t.children)return!0;return!1}}(r);return(t,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const s of n.changes){const a=s.type=="attribute"?s.range.start.nodeAfter:s.position.parent;if(a&&e(a,s)){if(!n.reconvertedElements.has(a)){n.reconvertedElements.add(a);const l=le._createBefore(a);o.push({type:"remove",name:a.name,position:l,length:1},{type:"reinsert",name:a.name,position:l,length:1})}}else o.push(s)}n.changes=o}}function Of(r){return(e,t,n={})=>{const o=["insert"];for(const s of r.attributes)e.hasAttribute(s)&&o.push(`attribute:${s}`);return!!o.every(s=>t.test(e,s))&&(n.preflight||o.forEach(s=>t.consume(e,s)),!0)}}function Rf(r,e,t,n){for(const o of e)Iy(r.root,o,t,n)||t.convertItem(o)}function Iy(r,e,t,n){const{writer:o,mapper:s}=t;if(!n.reconversion)return!1;const a=s.toViewElement(e);return!(!a||a.root==r)&&!!t.canReuseView(a)&&(o.move(o.createRangeOn(a),s.toViewPosition(le._createBefore(e))),!0)}function Ty(r,e,{preflight:t}={}){return t?e.test(r,"insert"):e.consume(r,"insert")}function Nf(r){const{schema:e,document:t}=r.model;for(const n of t.getRootNames()){const o=t.getRoot(n);if(o.isEmpty&&!e.checkChild(o,"$text")&&e.checkChild(o,"paragraph"))return r.insertElement("paragraph",o),!0}return!1}function Lf(r,e,t){const n=t.createContext(r);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function Bf(r,e){const t=e.createElement("paragraph");return e.insert(t,r),e.createPositionAt(t,0)}class Dy extends If{elementToElement(e){return this.add(zf(e))}elementToAttribute(e){return this.add(function(t){Ff(t=nr(t));const n=jf(t,!1),o=Uu(t.view),s=o?`element:${o}`:"element";return a=>{a.on(s,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=nr(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(s){typeof s.view=="string"&&(s.view={key:s.view});const a=s.view.key;let l;return a=="class"||a=="style"?l={[a=="class"?"classes":"styles"]:s.view.value}:l={attributes:{[a]:s.view.value===void 0?/[\s\S]*/:s.view.value}},s.view.name&&(l.name=s.view.name),s.view=l,a}(t)),Ff(t,n);const o=jf(t,!0);return s=>{s.on("element",o,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){const n=function(o){return(s,a)=>{const l=typeof o=="string"?o:o(s,a);return a.writer.createElement("$marker",{"data-name":l})}}(t.model);return zf({...t,model:n})}(e))}dataToMarker(e){return this.add(function(t){(t=nr(t)).model||(t.model=a=>a?t.view+":"+a:t.view);const n={view:t.view,model:t.model},o=Hu(Vf(n,"start")),s=Hu(Vf(n,"end"));return a=>{a.on(`element:${t.view}-start`,o,{priority:t.converterPriority||"normal"}),a.on(`element:${t.view}-end`,s,{priority:t.converterPriority||"normal"});const l=E.get("low"),u=E.get("highest"),m=E.get(t.converterPriority)/u;a.on("element",function(f){return(p,v,T)=>{const S=`data-${f.view}`;function M(O,L){for(const V of L){const K=f.model(V,T),ge=T.writer.createElement("$marker",{"data-name":K});T.writer.insert(ge,O),v.modelCursor.isEqual(O)?v.modelCursor=v.modelCursor.getShiftedBy(1):v.modelCursor=v.modelCursor._getTransformedByInsertion(O,1),v.modelRange=v.modelRange._getTransformedByInsertion(O,1)[0]}}(T.consumable.test(v.viewItem,{attributes:S+"-end-after"})||T.consumable.test(v.viewItem,{attributes:S+"-start-after"})||T.consumable.test(v.viewItem,{attributes:S+"-end-before"})||T.consumable.test(v.viewItem,{attributes:S+"-start-before"}))&&(v.modelRange||Object.assign(v,T.convertChildren(v.viewItem,v.modelCursor)),T.consumable.consume(v.viewItem,{attributes:S+"-end-after"})&&M(v.modelRange.end,v.viewItem.getAttribute(S+"-end-after").split(",")),T.consumable.consume(v.viewItem,{attributes:S+"-start-after"})&&M(v.modelRange.end,v.viewItem.getAttribute(S+"-start-after").split(",")),T.consumable.consume(v.viewItem,{attributes:S+"-end-before"})&&M(v.modelRange.start,v.viewItem.getAttribute(S+"-end-before").split(",")),T.consumable.consume(v.viewItem,{attributes:S+"-start-before"})&&M(v.modelRange.start,v.viewItem.getAttribute(S+"-start-before").split(",")))}}(n),{priority:l+m})}}(e))}}function zf(r){const e=Hu(r=nr(r)),t=Uu(r.view),n=t?`element:${t}`:"element";return o=>{o.on(n,e,{priority:r.converterPriority||"normal"})}}function Uu(r){return typeof r=="string"?r:typeof r=="object"&&typeof r.name=="string"?r.name:null}function Hu(r){const e=new Cn(r.view);return(t,n,o)=>{const s=e.match(n.viewItem);if(!s)return;const a=s.match;if(a.name=!0,!o.consumable.test(n.viewItem,a))return;const l=function(u,m,f){return u instanceof Function?u(m,f):f.writer.createElement(u)}(r.model,n.viewItem,o);l&&o.safeInsert(l,n.modelCursor)&&(o.consumable.consume(n.viewItem,a),o.convertChildren(n.viewItem,l),o.updateConversionResult(l,n))}}function Ff(r,e=null){const t=e===null||(s=>s.getAttribute(e)),n=typeof r.model!="object"?r.model:r.model.key,o=typeof r.model!="object"||r.model.value===void 0?t:r.model.value;r.model={key:n,value:o}}function jf(r,e){const t=new Cn(r.view);return(n,o,s)=>{if(!o.modelRange&&e)return;const a=t.match(o.viewItem);if(!a||(function(f,p){const v=typeof f=="function"?f(p):f;return typeof v=="object"&&!Uu(v)?!1:!v.classes&&!v.attributes&&!v.styles}(r.view,o.viewItem)?a.match.name=!0:delete a.match.name,!s.consumable.test(o.viewItem,a.match)))return;const l=r.model.key,u=typeof r.model.value=="function"?r.model.value(o.viewItem,s):r.model.value;if(u===null)return;o.modelRange||Object.assign(o,s.convertChildren(o.viewItem,o.modelCursor)),function(f,p,v,T){let S=!1;for(const M of Array.from(f.getItems({shallow:v})))T.schema.checkAttribute(M,p.key)&&(S=!0,M.hasAttribute(p.key)||T.writer.setAttribute(p.key,p.value,M));return S}(o.modelRange,{key:l,value:u},e,s)&&(s.consumable.test(o.viewItem,{name:!0})&&(a.match.name=!0),s.consumable.consume(o.viewItem,a.match))}}function Vf(r,e){return{view:`${r.view}-${e}`,model:(t,n)=>{const o=t.getAttribute("name"),s=r.model(o,n);return n.writer.createElement("$marker",{"data-name":s})}}}class xy extends lt{constructor(e,t){super(),this.model=e,this.view=new ky(t),this.mapper=new Af,this.downcastDispatcher=new vf({mapper:this.mapper,schema:e.schema});const n=this.model.document,o=n.selection,s=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(a=>{this.downcastDispatcher.convertChanges(n.differ,s,a),this.downcastDispatcher.convertSelection(o,s,a)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(a,l){return(u,m)=>{const f=m.newSelection,p=[];for(const T of f.getRanges())p.push(l.toModelRange(T));const v=a.createSelection(p,{backward:f.isBackward});v.isEqual(a.document.selection)||a.change(T=>{T.setSelection(v)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(a,l,u)=>{if(!u.consumable.consume(l.item,a.name))return;const m=u.writer,f=u.mapper.toViewPosition(l.range.start),p=m.createText(l.item.data);m.insert(f,p)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(a,l,u)=>{u.convertAttributes(l.item),l.reconversion||!l.item.is("element")||l.item.isEmpty||u.convertChildren(l.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(a,l,u)=>{const m=u.mapper.toViewPosition(l.position),f=l.position.getShiftedBy(l.length),p=u.mapper.toViewPosition(f,{isPhantom:!0}),v=u.writer.createRange(m,p),T=u.writer.remove(v.getTrimmed());for(const S of u.writer.createRangeIn(T).getItems())u.mapper.unbindViewElement(S,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,l,u)=>{const m=u.writer,f=m.document.selection;for(const p of f.getRanges())p.isCollapsed&&p.end.parent.isAttached()&&u.writer.mergeAttributes(p.start);m.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(a,l,u)=>{const m=l.selection;if(m.isCollapsed||!u.consumable.consume(m,"selection"))return;const f=[];for(const p of m.getRanges())f.push(u.mapper.toViewRange(p));u.writer.setSelection(f,{backward:m.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,l,u)=>{const m=l.selection;if(!m.isCollapsed||!u.consumable.consume(m,"selection"))return;const f=u.writer,p=m.getFirstPosition(),v=u.mapper.toViewPosition(p),T=f.breakAttributes(v);f.setSelection(T)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(a=>{if(a.rootName=="$graveyard")return null;const l=new ym(this.view.document,a.name);return l.rootName=a.rootName,this.mapper.bindElements(a,l),l})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new C("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}class Sy{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new C("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class ra{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new My(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const a of n)a!="style"&&a!="class"&&t.attributes.push(a);const o=e.getClassNames();for(const a of o)t.classes.push(a);const s=e.getStyleNames();for(const a of s)t.styles.push(a);return t}static createFrom(e,t){if(t||(t=new ra),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,ra.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=ra.createFrom(n,t);return t}}const Uc=["attributes","classes","styles"];class My{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t of Uc)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t of Uc)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t of Uc)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t of Uc)t in e&&this._revert(t,e[t])}_add(e,t){const n=nn(t)?t:[t],o=this._consumables[e];for(const s of n){if(e==="attributes"&&(s==="class"||s==="style"))throw new C("viewconsumable-invalid-attribute",this);if(o.set(s,!0),e==="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(a,!0)}}_test(e,t){const n=nn(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){const a=o.get(s);if(a===void 0)return null;if(!a)return!1}else{const a=s=="class"?"classes":"styles",l=this._test(a,[...this._consumables[a].keys()]);if(l!==!0)return l}return!0}_consume(e,t){const n=nn(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){if(o.set(s,!1),e=="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(a,!1)}else{const a=s=="class"?"classes":"styles";this._consume(a,[...this._consumables[a].keys()])}}_revert(e,t){const n=nn(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style")o.get(s)===!1&&o.set(s,!0);else{const a=s=="class"?"classes":"styles";this._revert(a,[...this._consumables[a].keys()])}}}class Py extends lt{constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new ir(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new ir(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new C("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new C("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:"is"in e&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t){if(e instanceof le){const n=e.nodeBefore,o=e.nodeAfter;if(!(n instanceof tt))throw new C("schema-check-merge-no-element-before",this);if(!(o instanceof tt))throw new C("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,o])=>{if(!o)return;const s=e(n,o);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,o])=>{const s=e(n,o);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof le?t=e.parent:t=(e instanceof $?[e]:Array.from(e.getRanges())).reduce((n,o)=>{const s=o.getCommonAncestor();return n?n.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new st("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const o of n)for(const s of o)if(this.checkAttribute(s.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new $(e);let n,o;const s=e.getAncestors().reverse().find(a=>this.isLimit(a))||e.root;t!="both"&&t!="backward"||(n=new Yi({boundaries:$._createIn(s),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(o=new Yi({boundaries:$._createIn(s),startPosition:e}));for(const a of function*(l,u){let m=!1;for(;!m;){if(m=!0,l){const f=l.next();f.done||(m=!1,yield{walker:l,value:f.value})}if(u){const f=u.next();f.done||(m=!1,yield{walker:u,value:f.value})}}}(n,o)){const l=a.walker==n?"elementEnd":"elementStart",u=a.value;if(u.type==l&&this.isObject(u.item))return $._createOn(u.item);if(this.checkChild(u.nextPosition,"$text"))return new $(u.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const o=n.model;for(const[s,a]of Object.entries(t))o.schema.checkAttribute(e,s)&&n.setAttribute(s,a,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))Uf(this,n,t);else{const o=$._createIn(n).getPositions();for(const s of o)Uf(this,s.nodeBefore||s.parent,t)}}getAttributesWithProperty(e,t,n){const o={};for(const[s,a]of e.getAttributes()){const l=this.getAttributeProperties(s);l[t]!==void 0&&(n!==void 0&&n!==l[t]||(o[s]=a))}return o}createContext(e){return new ir(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const o of n)e[o]=Oy(t[o],o);for(const o of n)Ry(e,o);for(const o of n)Ny(e,o);for(const o of n)Ly(e,o);for(const o of n)By(e,o),zy(e,o);for(const o of n)Fy(e,o),jy(e,o),Vy(e,o);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const o=t.getItem(n);if(e.allowIn.includes(o.name)){if(n==0)return!0;{const s=this.getDefinition(o);return this._checkContextMatch(s,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,o=e.start;for(const s of e.getItems({shallow:!0}))s.is("element")&&(yield*this._getValidRangesForRange($._createIn(s),t)),this.checkAttribute(s,t)||(n.isEqual(o)||(yield new $(n,o)),n=le._createAfter(s)),o=le._createAfter(s);n.isEqual(o)||(yield new $(n,o))}}class ir{constructor(e){if(e instanceof ir)return e;let t;t=typeof e=="string"?[e]:Array.isArray(e)?e:e.getAncestors({includeSelf:!0}),this._items=t.map(Hy)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new ir([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function Oy(r,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const s of n){const a=Object.keys(s).filter(l=>l.startsWith("is"));for(const l of a)o[l]=!!s[l]}}(r,t),or(r,t,"allowIn"),or(r,t,"allowContentOf"),or(r,t,"allowWhere"),or(r,t,"allowAttributes"),or(r,t,"allowAttributesOf"),or(r,t,"allowChildren"),or(r,t,"inheritTypesFrom"),function(n,o){for(const s of n){const a=s.inheritAllFrom;a&&(o.allowContentOf.push(a),o.allowWhere.push(a),o.allowAttributesOf.push(a),o.inheritTypesFrom.push(a))}}(r,t),t}function Ry(r,e){const t=r[e];for(const n of t.allowChildren){const o=r[n];o&&o.allowIn.push(e)}t.allowChildren.length=0}function Ny(r,e){for(const t of r[e].allowContentOf)r[t]&&Uy(r,t).forEach(n=>{n.allowIn.push(e)});delete r[e].allowContentOf}function Ly(r,e){for(const t of r[e].allowWhere){const n=r[t];if(n){const o=n.allowIn;r[e].allowIn.push(...o)}}delete r[e].allowWhere}function By(r,e){for(const t of r[e].allowAttributesOf){const n=r[t];if(n){const o=n.allowAttributes;r[e].allowAttributes.push(...o)}}delete r[e].allowAttributesOf}function zy(r,e){const t=r[e];for(const n of t.inheritTypesFrom){const o=r[n];if(o){const s=Object.keys(o).filter(a=>a.startsWith("is"));for(const a of s)a in t||(t[a]=o[a])}}delete t.inheritTypesFrom}function Fy(r,e){const t=r[e],n=t.allowIn.filter(o=>r[o]);t.allowIn=Array.from(new Set(n))}function jy(r,e){const t=r[e];for(const n of t.allowIn)r[n].allowChildren.push(e)}function Vy(r,e){const t=r[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function or(r,e,t){for(const n of r){const o=n[t];typeof o=="string"?e[t].push(o):Array.isArray(o)&&e[t].push(...o)}}function Uy(r,e){const t=r[e];return(n=r,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(t.name));var n}function Hy(r){return typeof r=="string"||r.is("documentFragment")?{name:typeof r=="string"?r:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:r.is("element")?r.name:"$text",*getAttributeKeys(){yield*r.getAttributeKeys()},getAttribute:e=>r.getAttribute(e)}}function Uf(r,e,t){for(const n of e.getAttributeKeys())r.checkAttribute(e,n)||t.removeAttribute(n,e)}class Gy extends te{constructor(e){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...e,consumable:null,writer:null,store:null,convertItem:(t,n)=>this._convertItem(t,n),convertChildren:(t,n)=>this._convertChildren(t,n),safeInsert:(t,n)=>this._safeInsert(t,n),updateConversionResult:(t,n)=>this._updateConversionResult(t,n),splitToAllowedParent:(t,n)=>this._splitToAllowedParent(t,n),getSplitParts:t=>this._getSplitParts(t),keepEmptyElement:t=>this._keepEmptyElement(t)}}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(a,l){let u;for(const m of new ir(a)){const f={};for(const v of m.getAttributeKeys())f[v]=m.getAttribute(v);const p=l.createElement(m.name,f);u&&l.insert(p,u),u=le._createAt(p,0)}return u}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=ra.createFrom(e),this.conversionApi.store={};const{modelRange:o}=this._convertItem(e,this._modelCursor),s=t.createDocumentFragment();if(o){this._removeEmptyElements();for(const a of Array.from(this._modelCursor.parent.getChildren()))t.append(a,s);s.markers=function(a,l){const u=new Set,m=new Map,f=$._createIn(a).getItems();for(const p of f)p.is("element","$marker")&&u.add(p);for(const p of u){const v=p.getAttribute("data-name"),T=l.createPositionBefore(p);m.has(v)?m.get(v).end=T.clone():m.set(v,new $(T.clone())),l.remove(p)}return m}(s,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,s}_convertItem(e,t){const n={viewItem:e,modelCursor:t,modelRange:null};if(e.is("element")?this.fire(`element:${e.name}`,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof $))throw new C("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:le._createAt(t,0);const o=new $(n);for(const s of Array.from(e.getChildren())){const a=this._convertItem(s,n);a.modelRange instanceof $&&(o.end=a.modelRange.end,n=a.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),o=this.conversionApi.writer;t.modelRange||(t.modelRange=o.createRange(o.createPositionBefore(e),o.createPositionAfter(n[n.length-1])));const s=this._cursorParents.get(e);t.modelCursor=s?o.createPositionAt(s,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:o}=this.conversionApi;let s=n.findAllowedParent(t,e);if(s){if(s===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(s)&&(s=null)}if(!s)return Lf(t,e,n)?{position:Bf(t,o)}:null;const a=this.conversionApi.writer.split(t,s),l=[];for(const m of a.range.getWalker())if(m.type=="elementEnd")l.push(m.item);else{const f=l.pop(),p=m.item;this._registerSplitPair(f,p)}const u=a.range.end.parent;return this._cursorParents.set(e,u),{position:a.position,cursorParent:u}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}class Wy{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class Yy{constructor(e){this.domParser=new DOMParser,this.domConverter=new Js(e,{renderingMode:"data"}),this.htmlWriter=new Wy}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),o=t.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class $y extends te{constructor(e,t){super(),this.model=e,this.mapper=new Af,this.downcastDispatcher=new vf({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,o,s)=>{if(!s.consumable.consume(o.item,n.name))return;const a=s.writer,l=s.mapper.toViewPosition(o.range.start),u=a.createText(o.item.data);a.insert(l,u)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,s)=>{s.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||s.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new Gy({schema:e.schema}),this.viewDocument=new Sc(t),this.stylesProcessor=t,this.htmlProcessor=new Yy(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Dm(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:s,consumable:a,writer:l})=>{let u=o.modelCursor;if(!a.test(o.viewItem))return;if(!s.checkChild(u,"$text")){if(!Lf(u,"$text",s)||o.viewItem.data.trim().length==0)return;u=Bf(u,l)}a.consume(o.viewItem);const m=l.createText(o.viewItem.data);l.insert(m,u),o.modelRange=l.createRange(u,u.getShiftedBy(m.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:a,modelCursor:l}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=a,o.modelCursor=l}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:a,modelCursor:l}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=a,o.modelCursor=l}},{priority:"lowest"}),lt.prototype.decorate.call(this,"init"),lt.prototype.decorate.call(this,"set"),lt.prototype.decorate.call(this,"get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Nf)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new C("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const s=$._createIn(e),a=new Jo(n);this.mapper.bindElements(e,a);const l=e.is("documentFragment")?e.markers:function(u){const m=[],f=u.root.document;if(!f)return new Map;const p=$._createIn(u);for(const v of f.model.markers){const T=v.getRange(),S=T.isCollapsed,M=T.start.isEqual(p.start)||T.end.isEqual(p.end);if(S&&M)m.push([v.name,T]);else{const O=p.getIntersection(T);O&&m.push([v.name,O])}}return m.sort(([v,T],[S,M])=>{if(T.end.compareWith(M.start)!=="after")return 1;if(T.start.compareWith(M.end)!=="before")return-1;switch(T.start.compareWith(M.start)){case"before":return 1;case"after":return-1;default:switch(T.end.compareWith(M.end)){case"before":return 1;case"after":return-1;default:return S.localeCompare(v)}}}),new Map(m)}(e);return this.downcastDispatcher.convert(s,l,o,t),a}init(e){if(this.model.document.version)throw new C("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new C("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(t)){const s=this.model.document.getRoot(o);n.insert(this.parse(t[o],s),s,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new C("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const s of Object.keys(n)){const a=this.model.document.getRoot(s);o.remove(o.createRangeIn(a)),o.insert(this.parse(n[s],a),a,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}class qy{constructor(e,t){this._helpers=new Map,this._downcast=Tt(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Tt(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new C("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new C("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of Gu(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of Gu(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of Gu(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new C("conversion-group-exists",this);const o=n?new Ey(t):new Dy(t);this._helpers.set(e,o)}}function*Gu(r){if(r.model.values)for(const e of r.model.values){const t={key:r.model.key,value:e},n=r.view[e],o=r.upcastAlso?r.upcastAlso[e]:void 0;yield*Hf(t,n,o)}else yield*Hf(r.model,r.view,r.upcastAlso)}function*Hf(r,e,t){if(yield{model:r,view:e},t)for(const n of Tt(t))yield{model:r,view:n}}class Br{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},P("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:o=!1,isTyping:s=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=o,this.isTyping=s}get type(){return P("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class Ky{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){const t=e;switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const n of t.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const n=this._isInInsertedElement(t.sourcePosition.parent),o=this._isInInsertedElement(t.targetPosition.parent);n||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),o||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const n=$._createFromPositionAndShift(t.position,1);for(const o of this._markerCollection.getMarkersIntersectingRange(n)){const s=o.getData();this.bufferMarkerChange(o.name,s,s)}break}case"split":{const n=t.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const n=t.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const o=t.graveyardPosition.parent;this._markInsert(o,t.graveyardPosition.offset,1);const s=t.targetPosition.parent;this._isInInsertedElement(s)||this._markInsert(s,t.targetPosition.offset,n.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const o=this._changedMarkers.get(e);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,o=!e.range&&t.range,s=e.range&&t.range&&!e.range.isEqual(t.range);if(n||o||s)return!0}}return!1}getChanges(e={}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((f,p)=>f.offset===p.offset?f.type!=p.type?f.type=="remove"?-1:1:0:f.offset<p.offset?-1:1),s=this._elementSnapshots.get(n),a=Gf(n.getChildren()),l=Qy(s.length,o);let u=0,m=0;for(const f of l)if(f==="i")t.push(this._getInsertDiff(n,u,a[u])),u++;else if(f==="r")t.push(this._getRemoveDiff(n,u,s[m])),m++;else if(f==="a"){const p=a[u].attributes,v=s[m].attributes;let T;if(a[u].name=="$text")T=new $(le._createAt(n,u),le._createAt(n,u+1));else{const S=n.offsetToIndex(u);T=new $(le._createAt(n,u),le._createAt(n.getChild(S),0))}t.push(...this._getAttributesDiff(T,v,p)),u++,m++}else u++,m++}t.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<t.length;n++){const s=t[o],a=t[n],l=s.type=="remove"&&a.type=="remove"&&s.name=="$text"&&a.name=="$text"&&s.position.isEqual(a.position),u=s.type=="insert"&&a.type=="insert"&&s.name=="$text"&&a.name=="$text"&&s.position.parent==a.position.parent&&s.position.offset+s.length==a.position.offset,m=s.type=="attribute"&&a.type=="attribute"&&s.position.parent==a.position.parent&&s.range.isFlat&&a.range.isFlat&&s.position.offset+s.length==a.position.offset&&s.attributeKey==a.attributeKey&&s.attributeOldValue==a.attributeOldValue&&s.attributeNewValue==a.attributeNewValue;l||u||m?(s.length++,m&&(s.range.end=s.range.end.getShiftedBy(1)),t[n]=null):o=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(Zy),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=$._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(e,t,n){const o={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o)}_markRemove(e,t,n){const o={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,Gf(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const o=e.offset+e.howMany,s=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<s&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<s){const a=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:o,howMany:a-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=e.howMany;else if(o<=s)if(e.offset<n.offset){const a=o-n.offset;n.offset=e.offset,n.howMany-=a,e.nodesToHandle-=a}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<s){const a=s-e.offset;n.howMany-=a,e.nodesToHandle-=a}}if(n.type=="remove"&&(o<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const a=o-n.offset;n.offset=e.offset,n.howMany-=a}else if(e.offset<s)if(o<=s){const a=n.howMany;n.howMany=e.offset-n.offset;const l=a-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:l,count:this._changeCount++})}else n.howMany-=s-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&o>n.offset){if(o>s){const a={type:"attribute",offset:s,howMany:o-s,count:this._changeCount++};this._handleChange(a,t),t.push(a)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<s&&(o>s?(e.nodesToHandle=o-s,e.offset=s):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&o>n.offset){const a={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(a,t),t.push(a),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&o<=s?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&o>=s&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:le._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:le._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const o=[];n=new Map(n);for(const[s,a]of t){const l=n.has(s)?n.get(s):null;l!==a&&o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:a,attributeNewValue:l,changeCount:this._changeCount++}),n.delete(s)}for(const[s,a]of n)o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:null,attributeNewValue:a,changeCount:this._changeCount++});return o}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),o=e.startOffset;if(n){for(const s of n)if(s.type=="insert"&&o>=s.offset&&o<s.offset+s.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const o=new $(le._createAt(e,t),le._createAt(e,t+n));for(const s of o.getItems({shallow:!0}))s.is("element")&&(this._elementSnapshots.delete(s),this._changesInElement.delete(s),this._removeAllNestedChanges(s,0,s.maxOffset))}}function Gf(r){const e=[];for(const t of r)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function Qy(r,e){const t=[];let n=0,o=0;for(const s of e){if(s.offset>n){for(let a=0;a<s.offset-n;a++)t.push("e");o+=s.offset-n}if(s.type=="insert"){for(let a=0;a<s.howMany;a++)t.push("i");n=s.offset+s.howMany}else if(s.type=="remove"){for(let a=0;a<s.howMany;a++)t.push("r");n=s.offset,o+=s.howMany}else t.push(..."a".repeat(s.howMany).split("")),n=s.offset+s.howMany,o+=s.howMany}if(o<r)for(let s=0;s<r-o-n;s++)t.push("e");return t}function Zy(r){const e="position"in r&&r.position.root.rootName=="$graveyard",t="range"in r&&r.range.root.rootName=="$graveyard";return!e&&!t}class Xy{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new C("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let o=t-1;for(const[l,u]of this._gaps)e>l&&e<u&&(e=u),o>l&&o<u&&(o=l-1);if(o<n.baseVersion||e>this.lastOperation.baseVersion)return[];let s=this._baseVersionToOperationIndex.get(e);s===void 0&&(s=0);let a=this._baseVersionToOperationIndex.get(o);return a===void 0&&(a=this._operations.length-1),this._operations.slice(s,a+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Hc extends tt{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}function Wf(r,e){return!!(t=r.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(r.charAt(e));var t}function Yf(r,e){return!!(t=r.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}Hc.prototype.is=function(r,e){return e?e===this.name&&(r==="rootElement"||r==="model:rootElement"||r==="element"||r==="model:element"):r==="rootElement"||r==="model:rootElement"||r==="element"||r==="model:element"||r==="node"||r==="model:node"};const Jy=function(){const r=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${r}|${e}(?:\u200D${e})*`,"ug")}();function e1(r,e){const t=String(r).matchAll(Jy);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}const Wu="$graveyard";class t1 extends te{constructor(e){super(),this.model=e,this.history=new Xy,this.selection=new Yn(this),this.roots=new Pn({idProperty:"rootName"}),this.differ=new Ky(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Wu),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,o,s,a)=>{const l={...n.getData(),range:s};this.differ.bufferMarkerChange(n.name,a,l),o===null&&n.on("change",(u,m)=>{const f=n.getData();this.differ.bufferMarkerChange(n.name,{...f,range:m},f)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(Wu)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new C("model-document-createroot-name-exists",this,{name:t});const n=new Hc(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=Wu)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=Ic(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,o=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(o)||t.createRange(o)}_validateSelectionRange(e){return $f(e.start)&&$f(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function $f(r){const e=r.textNode;if(e){const t=e.data,n=r.offset-e.startOffset;return!Wf(t,n)&&!Yf(t,n)}return!0}class n1 extends te{constructor(){super(),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof zr?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,o=!1){const s=e instanceof zr?e.name:e;if(s.includes(","))throw new C("markercollection-incorrect-marker-name",this);const a=this._markers.get(s);if(a){const m=a.getData(),f=a.getRange();let p=!1;return f.isEqual(t)||(a._attachLiveRange(ci.fromRange(t)),p=!0),n!=a.managedUsingOperations&&(a._managedUsingOperations=n,p=!0),typeof o=="boolean"&&o!=a.affectsData&&(a._affectsData=o,p=!0),p&&this.fire(`update:${s}`,a,f,t,m),a}const l=ci.fromRange(t),u=new zr(s,l,n,o);return this._markers.set(s,u),this.fire(`update:${s}`,u,null,t,{...u.getData(),range:null}),u}_remove(e){const t=e instanceof zr?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire(`update:${t}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof zr?e.name:e,n=this._markers.get(t);if(!n)throw new C("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire(`update:${t}`,n,o,o,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}class zr extends se(Io){constructor(e,t,n,o){super(),this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new C("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new C("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new C("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new C("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new C("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}zr.prototype.is=function(r){return r==="marker"||r==="model:marker"};class $n{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e,t){return new this(e.baseVersion)}}function Yu(r,e){const t=Kf(e),n=t.reduce((a,l)=>a+l.offsetSize,0),o=r.parent;ca(r);const s=r.index;return o._insertChild(s,t),aa(o,s+t.length),aa(o,s),new $(r,r.getShiftedBy(n))}function qf(r){if(!r.isFlat)throw new C("operation-utils-remove-range-not-flat",this);const e=r.start.parent;ca(r.start),ca(r.end);const t=e._removeChildren(r.start.index,r.end.index-r.start.index);return aa(e,r.start.index),t}function sa(r,e){if(!r.isFlat)throw new C("operation-utils-move-range-not-flat",this);const t=qf(r);return Yu(e=e._getTransformedByDeletion(r.start,r.end.offset-r.start.offset),t)}function Kf(r){const e=[];(function t(n){if(typeof n=="string")e.push(new st(n));else if(n instanceof ai)e.push(new st(n.data,n.getAttributes()));else if(n instanceof To)e.push(n);else if(pn(n))for(const o of n)t(o)})(r);for(let t=1;t<e.length;t++){const n=e[t],o=e[t-1];n instanceof st&&o instanceof st&&Qf(n,o)&&(e.splice(t-1,2,new st(o.data+n.data,o.getAttributes())),t--)}return e}function aa(r,e){const t=r.getChild(e-1),n=r.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&Qf(t,n)){const o=new st(t.data+n.data,t.getAttributes());r._removeChildren(e-1,2),r._insertChild(e-1,o)}}function ca(r){const e=r.textNode,t=r.parent;if(e){const n=r.offset-e.startOffset,o=e.index;t._removeChildren(o,1);const s=new st(e.data.substr(0,n),e.getAttributes()),a=new st(e.data.substr(n),e.getAttributes());t._insertChild(o,[s,a])}}function Qf(r,e){const t=r.getAttributes(),n=e.getAttributes();for(const o of t){if(o[1]!==e.getAttribute(o[0]))return!1;n.next()}return n.next().done}const Zf=function(r,e){return nf(r,e)};class Dt extends $n{constructor(e,t,n,o,s){super(s),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new Dt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Dt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new C("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Zf(e.getAttribute(this.key),this.oldValue))throw new C("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new C("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){Zf(this.oldValue,this.newValue)||function(e,t,n){ca(e.start),ca(e.end);for(const o of e.getItems({shallow:!0})){const s=o.is("$textProxy")?o.textNode:o;n!==null?s._setAttribute(t,n):s._removeAttribute(t),aa(s.parent,s.index)}aa(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new Dt($.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class qe extends $n{constructor(e,t,n,o){super(o),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new qe(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new qe(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new C("move-operation-nodes-do-not-exist",this);if(e===t&&n<o&&o<n+this.howMany)throw new C("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&Qt(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const s=this.sourcePosition.path.length-1;if(this.targetPosition.path[s]>=n&&this.targetPosition.path[s]<n+this.howMany)throw new C("move-operation-node-into-itself",this)}}_execute(){sa($._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=le.fromJSON(e.sourcePosition,t),o=le.fromJSON(e.targetPosition,t);return new this(n,e.howMany,o,e.baseVersion)}}class Zt extends $n{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new ta(Kf(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new ta([...this.nodes].map(n=>n._clone(!0))),t=new Zt(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new le(e,[0]);return new qe(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new C("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new ta([...e].map(t=>t._clone(!0))),Yu(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const s of e.nodes)s.name?n.push(tt.fromJSON(s)):n.push(st.fromJSON(s));const o=new Zt(le.fromJSON(e.position,t),n,e.baseVersion);return o.shouldReceiveAttributes=e.shouldReceiveAttributes,o}}class yn extends $n{constructor(e,t,n,o,s,a){super(a),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=s,this._markers=o}get type(){return"marker"}clone(){return new yn(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new yn(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new yn(e.name,e.oldRange?$.fromJSON(e.oldRange,t):null,e.newRange?$.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class Xt extends $n{get type(){return"noop"}clone(){return new Xt(this.baseVersion)}getReversed(){return new Xt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class En extends $n{constructor(e,t,n,o){super(o),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new En(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new En(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof tt))throw new C("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new C("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new En(le.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class $i extends $n{constructor(e,t,n,o,s){super(s),this.root=e,this.key=t,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new $i(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new $i(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new C("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new C("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new C("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new C("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new $i(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class vt extends $n{constructor(e,t,n,o,s){super(s),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new le(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new $(this.sourcePosition,e)}clone(){return new vt(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new le(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new at(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new C("merge-operation-source-position-invalid",this);if(!t.parent)throw new C("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new C("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;sa($._createIn(e),this.targetPosition),sa($._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=le.fromJSON(e.sourcePosition,t),o=le.fromJSON(e.targetPosition,t),s=le.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,o,s,e.baseVersion)}}class at extends $n{constructor(e,t,n,o,s){super(s),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new le(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new $(this.splitPosition,e)}clone(){return new at(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new le(e,[0]);return new vt(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new C("split-operation-position-invalid",this);if(!e.parent)throw new C("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new C("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new C("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)sa($._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();Yu(this.insertionPosition,t)}sa(new $(le._createAt(e,this.splitPosition.offset),le._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new le(e.root,t,"toPrevious")}static fromJSON(e,t){const n=le.fromJSON(e.splitPosition,t),o=le.fromJSON(e.insertionPosition,t),s=e.graveyardPosition?le.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,o,s,e.baseVersion)}}const li={};li[Dt.className]=Dt,li[Zt.className]=Zt,li[yn.className]=yn,li[qe.className]=qe,li[Xt.className]=Xt,li[$n.className]=$n,li[En.className]=En,li[$i.className]=$i,li[at.className]=at,li[vt.className]=vt;class i1{static fromJSON(e,t){return li[e.__className].fromJSON(e,t)}}class o1 extends $n{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new C("detach-operation-on-document-node",this)}_execute(){qf($._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class qi extends Io{constructor(e){super(),this.markers=new Map,this._children=new ta,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(tt.fromJSON(n)):t.push(st.fromJSON(n));return new qi(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new st(o)]:(pn(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new st(s):s instanceof ai?new st(s.data,s.getAttributes()):s))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}}qi.prototype.is=function(r){return r==="documentFragment"||r==="model:documentFragment"};class r1{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new st(e,t)}createElement(e,t){return new tt(e,t)}createDocumentFragment(){return new qi}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof st&&e.data=="")return;const o=le._createAt(t,n);if(e.parent){if(ep(e.root,o.root))return void this.move($._createOn(e),o);if(e.root.document)throw new C("model-writer-insert-forbidden-move",this);this.remove(e)}const s=o.root.document?o.root.document.version:null,a=new Zt(o,e,s);if(e instanceof st&&(a.shouldReceiveAttributes=!0),this.batch.addOperation(a),this.model.applyOperation(a),e instanceof qi)for(const[l,u]of e.markers){const m=le._createAt(u.root,0),f={range:new $(u.start._getCombined(m,o),u.end._getCombined(m,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(l)?this.updateMarker(l,f):this.addMarker(l,f)}}insertText(e,t,n,o){t instanceof qi||t instanceof tt||t instanceof le?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,o)}insertElement(e,t,n,o){t instanceof qi||t instanceof tt||t instanceof le?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,o)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof qi||t instanceof tt?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof qi||t instanceof tt?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof $){const o=n.getMinimalFlatRanges();for(const s of o)Xf(this,e,t,s)}else Jf(this,e,t,n)}setAttributes(e,t){for(const[n,o]of On(e))this.setAttribute(n,o,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof $){const n=t.getMinimalFlatRanges();for(const o of n)Xf(this,e,null,o)}else Jf(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(e instanceof $)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof $))throw new C("writer-move-invalid-range",this);if(!e.isFlat)throw new C("writer-move-range-not-flat",this);const o=le._createAt(t,n);if(o.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!ep(e.root,o.root))throw new C("writer-move-different-document",this);const s=e.root.document?e.root.document.version:null,a=new qe(e.start,e.end.offset-e.start.offset,o,s);this.batch.addOperation(a),this.model.applyOperation(a)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof $?e:$._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),s1(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof tt))throw new C("writer-merge-no-element-before",this);if(!(n instanceof tt))throw new C("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(...e){return this.model.createSelection(...e)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move($._createIn(n),le._createAt(t,"end")),this.remove(n)}_merge(e){const t=le._createAt(e.nodeBefore,"end"),n=le._createAt(e.nodeAfter,0),o=e.root.document.graveyard,s=new le(o,[0]),a=e.root.document.version,l=new vt(n,e.nodeAfter.maxOffset,t,s,a);this.batch.addOperation(l),this.model.applyOperation(l)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof tt))throw new C("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,o=new En(le._createBefore(e),e.name,t,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(e,t){this._assertWriterUsedCorrectly();let n,o,s=e.parent;if(!s.parent)throw new C("writer-split-element-no-parent",this);if(t||(t=s.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new C("writer-split-invalid-limit-element",this);do{const a=s.root.document?s.root.document.version:null,l=s.maxOffset-e.offset,u=at.getInsertionPosition(e),m=new at(e,l,u,null,a);this.batch.addOperation(m),this.model.applyOperation(m),n||o||(n=s,o=e.parent.nextSibling),s=(e=this.createPositionAfter(e.parent)).parent}while(s!==t);return{position:e,range:new $(le._createAt(n,"end"),le._createAt(o,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new C("writer-wrap-range-not-flat",this);const n=t instanceof tt?t:new tt(t);if(n.childCount>0)throw new C("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new C("writer-wrap-element-attached",this);this.insert(n,e.start);const o=new $(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(o,le._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new C("writer-unwrap-element-no-parent",this);this.move($._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new C("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,o=t.range,s=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new C("writer-addmarker-marker-exists",this);if(!o)throw new C("writer-addmarker-no-range",this);return n?(la(this,e,null,o,s),this.model.markers.get(e)):this.model.markers._set(e,o,n,s)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,o=this.model.markers.get(n);if(!o)throw new C("writer-updatemarker-marker-not-exists",this);if(!t)return P("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const s=typeof t.usingOperation=="boolean",a=typeof t.affectsData=="boolean",l=a?t.affectsData:o.affectsData;if(!s&&!t.range&&!a)throw new C("writer-updatemarker-wrong-options",this);const u=o.getRange(),m=t.range?t.range:u;s&&t.usingOperation!==o.managedUsingOperations?t.usingOperation?la(this,n,null,m,l):(la(this,n,u,null,l),this.model.markers._set(n,m,void 0,l)):o.managedUsingOperations?la(this,n,u,m,l):this.model.markers._set(n,m,void 0,l)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new C("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);la(this,t,n.getRange(),null,n.affectsData)}setSelection(...e){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...e)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,o]of On(e))this._setSelectionAttribute(n,o)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=Yn._getStoreAttributeKey(e);this.setAttribute(o,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=Yn._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new C("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let s=!1;if(e==="move"){const a=t;s=a.containsPosition(o.start)||a.start.isEqual(o.start)||a.containsPosition(o.end)||a.end.isEqual(o.end)}else{const a=t,l=a.nodeBefore,u=a.nodeAfter,m=o.start.parent==l&&o.start.isAtEnd,f=o.end.parent==u&&o.end.offset==0,p=o.end.nodeAfter==u,v=o.start.nodeAfter==u;s=m||f||p||v}s&&this.updateMarker(n.name,{range:o})}}}function Xf(r,e,t,n){const o=r.model,s=o.document;let a,l,u,m=n.start;for(const p of n.getWalker({shallow:!0}))u=p.item.getAttribute(e),a&&l!=u&&(l!=t&&f(),m=a),a=p.nextPosition,l=u;function f(){const p=new $(m,a),v=p.root.document?s.version:null,T=new Dt(p,e,l,t,v);r.batch.addOperation(T),o.applyOperation(T)}a instanceof le&&a!=m&&l!=t&&f()}function Jf(r,e,t,n){const o=r.model,s=o.document,a=n.getAttribute(e);let l,u;if(a!=t){if(n.root===n){const m=n.document?s.version:null;u=new $i(n,e,a,t,m)}else{l=new $(le._createBefore(n),r.createPositionAfter(n));const m=l.root.document?s.version:null;u=new Dt(l,e,a,t,m)}r.batch.addOperation(u),o.applyOperation(u)}}function la(r,e,t,n,o){const s=r.model,a=s.document,l=new yn(e,t,n,s.markers,!!o,a.version);r.batch.addOperation(l),s.applyOperation(l)}function s1(r,e,t,n){let o;if(r.root.document){const s=n.document,a=new le(s.graveyard,[0]);o=new qe(r,e,a,s.version)}else o=new o1(r,e);t.addOperation(o),n.applyOperation(o)}function ep(r,e){return r===e||r instanceof Hc&&e instanceof Hc}function a1(r){r.document.registerPostFixer(e=>function(t,n){const o=n.document.selection,s=n.schema,a=[];let l=!1;for(const u of o.getRanges()){const m=c1(u,s);m&&!m.isEqual(u)?(a.push(m),l=!0):a.push(u)}return l&&t.setSelection(function(u){const m=[...u],f=new Set;let p=1;for(;p<m.length;){const v=m[p],T=m.slice(0,p);for(const[S,M]of T.entries())if(!f.has(S)){if(v.isEqual(M))f.add(S);else if(v.isIntersecting(M)){f.add(S),f.add(p);const O=v.getJoined(M);m.push(O)}}p++}return m.filter((v,T)=>!f.has(T))}(a),{backward:o.isBackward}),!1}(e,r))}function c1(r,e){return r.isCollapsed?function(t,n){const o=t.start,s=n.getNearestSelectionRange(o);if(!s){const l=o.getAncestors().reverse().find(u=>n.isObject(u));return l?$._createOn(l):null}if(!s.isCollapsed)return s;const a=s.start;return o.isEqual(a)?null:new $(a)}(r,e):function(t,n){const{start:o,end:s}=t,a=n.checkChild(o,"$text"),l=n.checkChild(s,"$text"),u=n.getLimitElement(o),m=n.getLimitElement(s);if(u===m){if(a&&l)return null;if(function(v,T,S){const M=v.nodeAfter&&!S.isLimit(v.nodeAfter)||S.checkChild(v,"$text"),O=T.nodeBefore&&!S.isLimit(T.nodeBefore)||S.checkChild(T,"$text");return M||O}(o,s,n)){const v=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),T=s.nodeBefore&&n.isSelectable(s.nodeBefore)?null:n.getNearestSelectionRange(s,"backward"),S=v?v.start:o,M=T?T.end:s;return new $(S,M)}}const f=u&&!u.is("rootElement"),p=m&&!m.is("rootElement");if(f||p){const v=o.nodeAfter&&s.nodeBefore&&o.nodeAfter.parent===s.nodeBefore.parent,T=f&&(!v||!np(o.nodeAfter,n)),S=p&&(!v||!np(s.nodeBefore,n));let M=o,O=s;return T&&(M=le._createBefore(tp(u,n))),S&&(O=le._createAfter(tp(m,n))),new $(M,O)}return null}(r,e)}function tp(r,e){let t=r,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function np(r,e){return r&&e.isSelectable(r)}class sn extends se(le){constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new C("model-liveposition-root-not-rootelement",e);l1.call(this)}detach(){this.stopListening()}toPosition(){return new le(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function l1(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&d1.call(this,t)},{priority:"low"})}function d1(r){const e=this.getTransformedByOperation(r);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}function u1(r,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=r.schema;r.change(s=>{if(!t.doNotResetEntireContent&&function(m,f){const p=m.getLimitElement(f);if(!f.containsEntireContent(p))return!1;const v=f.getFirstRange();return v.start.parent==v.end.parent?!1:m.checkChild(p,"paragraph")}(o,e))return void function(m,f){const p=m.model.schema.getLimitElement(f);m.remove(m.createRangeIn(p)),rp(m,m.createPositionAt(p,0),f)}(s,e);const a={};if(!t.doNotAutoparagraph){const m=e.getSelectedElement();m&&Object.assign(a,o.getAttributesWithProperty(m,"copyOnReplace",!0))}const[l,u]=function(m){const f=m.root.document.model,p=m.start;let v=m.end;if(f.hasContent(m,{ignoreMarkers:!0})){const T=function(S){const M=S.parent,O=M.root.document.model.schema,L=M.getAncestors({parentFirst:!0,includeSelf:!0});for(const V of L){if(O.isLimit(V))return null;if(O.isBlock(V))return V}}(v);if(T&&v.isTouching(f.createPositionAt(T,0))){const S=f.createSelection(m);f.modifySelection(S,{direction:"backward"});const M=S.getLastPosition(),O=f.createRange(M,v);f.hasContent(O,{ignoreMarkers:!0})||(v=M)}}return[sn.fromPosition(p,"toPrevious"),sn.fromPosition(v,"toNext")]}(n);l.isTouching(u)||s.remove(s.createRange(l,u)),t.leaveUnmerged||(function(m,f,p){const v=m.model;if(!$u(m.model.schema,f,p))return;const[T,S]=function(M,O){const L=M.getAncestors(),V=O.getAncestors();let K=0;for(;L[K]&&L[K]==V[K];)K++;return[L[K],V[K]]}(f,p);!T||!S||(!v.hasContent(T,{ignoreMarkers:!0})&&v.hasContent(S,{ignoreMarkers:!0})?op(m,f,p,T.parent):ip(m,f,p,T.parent))}(s,l,u),o.removeDisallowedAttributes(l.parent.getChildren(),s)),sp(s,e,l),!t.doNotAutoparagraph&&function(m,f){const p=m.checkChild(f,"$text"),v=m.checkChild(f,"paragraph");return!p&&v}(o,l)&&rp(s,l,e,a),l.detach(),u.detach()})}function ip(r,e,t,n){const o=e.parent,s=t.parent;if(o!=n&&s!=n){for(e=r.createPositionAfter(o),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(s,e),r.merge(e);t.parent.isEmpty;){const a=t.parent;t=r.createPositionBefore(a),r.remove(a)}$u(r.model.schema,e,t)&&ip(r,e,t,n)}}function op(r,e,t,n){const o=e.parent,s=t.parent;if(o!=n&&s!=n){for(e=r.createPositionAfter(o),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(o,t);e.parent.isEmpty;){const a=e.parent;e=r.createPositionBefore(a),r.remove(a)}t=r.createPositionBefore(s),function(a,l){const u=l.nodeBefore,m=l.nodeAfter;u.name!=m.name&&a.rename(u,m.name),a.clearAttributes(u),a.setAttributes(Object.fromEntries(m.getAttributes()),u),a.merge(l)}(r,t),$u(r.model.schema,e,t)&&op(r,e,t,n)}}function $u(r,e,t){const n=e.parent,o=t.parent;return n!=o&&!r.isLimit(n)&&!r.isLimit(o)&&function(s,a,l){const u=new $(s,a);for(const m of u.getWalker())if(l.isLimit(m.item))return!1;return!0}(e,t,r)}function rp(r,e,t,n={}){const o=r.createElement("paragraph");r.model.schema.setAllowedAttributes(o,n,r),r.insert(o,e),sp(r,t,r.createPositionAt(o,0))}function sp(r,e,t){e instanceof Yn?r.setSelection(t):e.setTo(t)}function ap(r,e){const t=[];Array.from(r.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(r.start)||n.start.isEqual(r.start))&&(n.end.isBefore(r.end)||n.end.isEqual(r.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const s=e.createRangeOn(o);o=o.parent,e.remove(s)}})}sn.prototype.is=function(r){return r==="livePosition"||r==="model:livePosition"||r=="position"||r==="model:position"};var cp=g(4717),h1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(cp.Z,h1),cp.Z.locals;const Gc=new WeakMap;function lp(r){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:s=!1}=r,a=e.document;Gc.has(a)||(Gc.set(a,new Map),a.registerPostFixer(l=>dp(a,l))),Gc.get(a).set(t,{text:n,isDirectHost:o,keepOnFocus:s,hostElement:o?t:null}),e.change(l=>dp(a,l))}function g1(r,e){return!!e.hasClass("ck-placeholder")&&(r.removeClass("ck-placeholder",e),!0)}function dp(r,e){const t=Gc.get(r),n=[];let o=!1;for(const[s,a]of t)a.isDirectHost&&(n.push(s),up(e,s,a)&&(o=!0));for(const[s,a]of t){if(a.isDirectHost)continue;const l=m1(s);l&&(n.includes(l)||(a.hostElement=l,up(e,s,a)&&(o=!0)))}return o}function up(r,e,t){const{text:n,isDirectHost:o,hostElement:s}=t;let a=!1;return s.getAttribute("data-placeholder")!==n&&(r.setAttribute("data-placeholder",n,s),a=!0),(o||e.childCount==1)&&function(l,u){if(!l.isAttached()||Array.from(l.getChildren()).some(v=>!v.is("uiElement")))return!1;if(u)return!0;const f=l.document;if(!f.isFocused)return!0;const p=f.selection.anchor;return!!p&&p.parent!==l}(s,t.keepOnFocus)?function(l,u){return!u.hasClass("ck-placeholder")&&(l.addClass("ck-placeholder",u),!0)}(r,s)&&(a=!0):g1(r,s)&&(a=!0),a}function m1(r){if(r.childCount){const e=r.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}const qu=new Map;function Ye(r,e,t){let n=qu.get(r);n||(n=new Map,qu.set(r,n)),n.set(e,t)}function f1(r){return[r]}function hp(r,e,t={}){const n=function(o,s){const a=qu.get(o);return a&&a.has(s)?a.get(s):f1}(r.constructor,e.constructor);try{return n(r=r.clone(),e,t)}catch(o){throw o}}function p1(r,e,t){r=r.slice(),e=e.slice();const n=new b1(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(r),n.setOriginalOperations(e);const o=n.originalOperations;if(r.length==0||e.length==0)return{operationsA:r,operationsB:e,originalOperations:o};const s=new WeakMap;for(const u of r)s.set(u,0);const a={nextBaseVersionA:r[r.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:r.length,originalOperationsBCount:e.length};let l=0;for(;l<r.length;){const u=r[l],m=s.get(u);if(m==e.length){l++;continue}const f=e[m],p=hp(u,f,n.getContext(u,f,!0)),v=hp(f,u,n.getContext(f,u,!1));n.updateRelation(u,f),n.setOriginalOperations(p,u),n.setOriginalOperations(v,f);for(const T of p)s.set(T,m+v.length);r.splice(l,1,...p),e.splice(m,1,...v)}if(t.padWithNoOps){const u=r.length-a.originalOperationsACount,m=e.length-a.originalOperationsBCount;mp(r,m-u),mp(e,u-m)}return gp(r,a.nextBaseVersionB),gp(e,a.nextBaseVersionA),{operationsA:r,operationsB:e,originalOperations:o}}class b1{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const o of e)this.originalOperations.set(o,n||o)}updateRelation(e,t){if(e instanceof qe)t instanceof vt?e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter"):t instanceof qe&&(e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter"));else if(e instanceof at){if(t instanceof vt)e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");else if(t instanceof qe)if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=$._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const o=n.end.offset-e.splitPosition.offset,s=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:o,offset:s})}}}else if(e instanceof vt)t instanceof vt?(e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement")):t instanceof at&&e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource");else if(e instanceof yn){const n=e.newRange;if(!n)return;if(t instanceof qe){const o=$._createFromPositionAndShift(t.sourcePosition,t.howMany),s=o.containsPosition(n.start)||o.start.isEqual(n.start),a=o.containsPosition(n.end)||o.end.isEqual(n.end);!s&&!a||o.containsRange(n)||this._setRelation(e,t,{side:s?"left":"right",path:s?n.start.path.slice():n.end.path.slice()})}else if(t instanceof vt){const o=n.start.isEqual(t.targetPosition),s=n.start.isEqual(t.deletionPosition),a=n.end.isEqual(t.deletionPosition),l=n.end.isEqual(t.sourcePosition);(o||s||a||l)&&this._setRelation(e,t,{wasInLeftElement:o,wasStartBeforeMergedElement:s,wasEndBeforeMergedElement:a,wasInRightElement:l})}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),o=this._history.getUndoneOperation(n);if(!o)return null;const s=this.originalOperations.get(e),a=this._relations.get(s);return a&&a.get(o)||null}_setRelation(e,t,n){const o=this.originalOperations.get(e),s=this.originalOperations.get(t);let a=this._relations.get(o);a||(a=new Map,this._relations.set(o,a)),a.set(s,n)}}function gp(r,e){for(const t of r)t.baseVersion=e++}function mp(r,e){for(let t=0;t<e;t++)r.push(new Xt(0))}function fp(r,e,t){const n=r.nodes.getNode(0).getAttribute(e);if(n==t)return null;const o=new $(r.position,r.position.getShiftedBy(r.howMany));return new Dt(o,e,n,t,0)}function pp(r,e){return r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function Fr(r,e){const t=[];for(let n=0;n<r.length;n++){const o=r[n],s=new qe(o.start,o.end.offset-o.start.offset,e,0);t.push(s);for(let a=n+1;a<r.length;a++)r[a]=r[a]._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)[0];e=e._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)}return t}Ye(Dt,Dt,(r,e,t)=>{if(r.key===e.key&&r.range.start.hasSameParentAs(e.range.start)){const n=r.range.getDifference(e.range).map(s=>new Dt(s,r.key,r.oldValue,r.newValue,0)),o=r.range.getIntersection(e.range);return o&&t.aIsStrong&&n.push(new Dt(o,e.key,e.newValue,r.newValue,0)),n.length==0?[new Xt(0)]:n}return[r]}),Ye(Dt,Zt,(r,e)=>{if(r.range.start.hasSameParentAs(e.position)&&r.range.containsPosition(e.position)){const t=r.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new Dt(n,r.key,r.oldValue,r.newValue,r.baseVersion));if(e.shouldReceiveAttributes){const n=fp(e,r.key,r.oldValue);n&&t.unshift(n)}return t}return r.range=r.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[r]}),Ye(Dt,vt,(r,e)=>{const t=[];r.range.start.hasSameParentAs(e.deletionPosition)&&(r.range.containsPosition(e.deletionPosition)||r.range.start.isEqual(e.deletionPosition))&&t.push($._createFromPositionAndShift(e.graveyardPosition,1));const n=r.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(o=>new Dt(o,r.key,r.oldValue,r.newValue,r.baseVersion))}),Ye(Dt,qe,(r,e)=>function(n,o){const s=$._createFromPositionAndShift(o.sourcePosition,o.howMany);let a=null,l=[];s.containsRange(n,!0)?a=n:n.start.hasSameParentAs(s.start)?(l=n.getDifference(s),a=n.getIntersection(s)):l=[n];const u=[];for(let m of l){m=m._getTransformedByDeletion(o.sourcePosition,o.howMany);const f=o.getMovedRangeStart(),p=m.start.hasSameParentAs(f),v=m._getTransformedByInsertion(f,o.howMany,p);u.push(...v)}return a&&u.push(a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),u}(r.range,e).map(n=>new Dt(n,r.key,r.oldValue,r.newValue,r.baseVersion))),Ye(Dt,at,(r,e)=>{if(r.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.range.end.offset++,[r];if(r.range.start.hasSameParentAs(e.splitPosition)&&r.range.containsPosition(e.splitPosition)){const t=r.clone();return t.range=new $(e.moveTargetPosition.clone(),r.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),r.range.end=e.splitPosition.clone(),r.range.end.stickiness="toPrevious",[r,t]}return r.range=r.range._getTransformedBySplitOperation(e),[r]}),Ye(Zt,Dt,(r,e)=>{const t=[r];if(r.shouldReceiveAttributes&&r.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(r.position)){const n=fp(r,e.key,e.newValue);n&&t.push(n)}return t}),Ye(Zt,Zt,(r,e,t)=>(r.position.isEqual(e.position)&&t.aIsStrong||(r.position=r.position._getTransformedByInsertOperation(e)),[r])),Ye(Zt,qe,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),Ye(Zt,at,(r,e)=>(r.position=r.position._getTransformedBySplitOperation(e),[r])),Ye(Zt,vt,(r,e)=>(r.position=r.position._getTransformedByMergeOperation(e),[r])),Ye(yn,Zt,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByInsertOperation(e)[0]),r.newRange&&(r.newRange=r.newRange._getTransformedByInsertOperation(e)[0]),[r])),Ye(yn,yn,(r,e,t)=>{if(r.name==e.name){if(!t.aIsStrong)return[new Xt(0)];r.oldRange=e.newRange?e.newRange.clone():null}return[r]}),Ye(yn,vt,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByMergeOperation(e)),r.newRange&&(r.newRange=r.newRange._getTransformedByMergeOperation(e)),[r])),Ye(yn,qe,(r,e,t)=>{if(r.oldRange&&(r.oldRange=$._createFromRanges(r.oldRange._getTransformedByMoveOperation(e))),r.newRange){if(t.abRelation){const n=$._createFromRanges(r.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(r.newRange.start))return r.newRange.end=n.end,r.newRange.start.path=t.abRelation.path,[r];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(r.newRange.end))return r.newRange.start=n.start,r.newRange.end.path=t.abRelation.path,[r]}r.newRange=$._createFromRanges(r.newRange._getTransformedByMoveOperation(e))}return[r]}),Ye(yn,at,(r,e,t)=>{if(r.oldRange&&(r.oldRange=r.oldRange._getTransformedBySplitOperation(e)),r.newRange){if(t.abRelation){const n=r.newRange._getTransformedBySplitOperation(e);return r.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?r.newRange.start=le._createAt(e.insertionPosition):r.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(r.newRange.start=le._createAt(e.moveTargetPosition)),r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?r.newRange.end=le._createAt(e.moveTargetPosition):r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?r.newRange.end=le._createAt(e.insertionPosition):r.newRange.end=n.end,[r]}r.newRange=r.newRange._getTransformedBySplitOperation(e)}return[r]}),Ye(vt,Zt,(r,e)=>(r.sourcePosition.hasSameParentAs(e.position)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByInsertOperation(e),r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e),[r])),Ye(vt,vt,(r,e,t)=>{if(r.sourcePosition.isEqual(e.sourcePosition)&&r.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),r.sourcePosition=new le(e.graveyardPosition.root,n),r.howMany=0,[r]}return[new Xt(0)]}if(r.sourcePosition.isEqual(e.sourcePosition)&&!r.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=r.targetPosition.root.rootName=="$graveyard",o=e.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const a=e.targetPosition._getTransformedByMergeOperation(e),l=r.targetPosition._getTransformedByMergeOperation(e);return[new qe(a,r.howMany,l,0)]}return[new Xt(0)]}return r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMergeOperation(e),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),r.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),Ye(vt,qe,(r,e,t)=>{const n=$._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&r.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.sourcePosition)?[new Xt(0)]:(r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition.hasSameParentAs(e.sourcePosition)&&(r.howMany-=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMoveOperation(e),r.targetPosition=r.targetPosition._getTransformedByMoveOperation(e),r.graveyardPosition.isEqual(e.targetPosition)||(r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)),[r])}),Ye(vt,at,(r,e,t)=>{if(e.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),r.deletionPosition.isEqual(e.graveyardPosition)&&(r.howMany=e.howMany)),r.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,o=e.graveyardPosition&&r.deletionPosition.isEqual(e.graveyardPosition);if(n||o||t.abRelation=="mergeTargetNotMoved")return r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),[r]}if(r.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return r.howMany=0,r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r];if(t.abRelation=="mergeSameElement"||r.sourcePosition.offset>0)return r.sourcePosition=e.moveTargetPosition.clone(),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}return r.sourcePosition.hasSameParentAs(e.splitPosition)&&(r.howMany=e.splitPosition.offset),r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}),Ye(qe,Zt,(r,e)=>{const t=$._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByInsertOperation(e,!1)[0];return r.sourcePosition=t.start,r.howMany=t.end.offset-t.start.offset,r.targetPosition.isEqual(e.position)||(r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e)),[r]}),Ye(qe,qe,(r,e,t)=>{const n=$._createFromPositionAndShift(r.sourcePosition,r.howMany),o=$._createFromPositionAndShift(e.sourcePosition,e.howMany);let s,a=t.aIsStrong,l=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?l=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(l=!1),s=r.targetPosition.isEqual(e.targetPosition)&&l?r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):r.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),pp(r,e)&&pp(e,r))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Fr([n],s);if(o.containsPosition(r.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),Fr([n],s);const u=Qt(r.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(u=="prefix"||u=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Fr([n],s);r.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?r.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(a=!1):a=!0;const m=[],f=n.getDifference(o);for(const v of f){v.start=v.start._getTransformedByDeletion(e.sourcePosition,e.howMany),v.end=v.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const T=Qt(v.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",S=v._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,T);m.push(...S)}const p=n.getIntersection(o);return p!==null&&a&&(p.start=p.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),p.end=p.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),m.length===0?m.push(p):m.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?m.unshift(p):m.push(p):m.splice(1,0,p)),m.length===0?[new Xt(r.baseVersion)]:Fr(m,s)}),Ye(qe,at,(r,e,t)=>{let n=r.targetPosition.clone();r.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=r.targetPosition._getTransformedBySplitOperation(e));const o=$._createFromPositionAndShift(r.sourcePosition,r.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.howMany++,r.targetPosition=n,[r];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let a=new $(e.splitPosition,o.end);return a=a._getTransformedBySplitOperation(e),Fr([new $(o.start,e.splitPosition),a],n)}r.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),r.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=r.targetPosition);const s=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const a=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);r.howMany>1&&a&&!t.aWasUndone&&s.push($._createFromPositionAndShift(e.insertionPosition,1))}return Fr(s,n)}),Ye(qe,vt,(r,e,t)=>{const n=$._createFromPositionAndShift(r.sourcePosition,r.howMany);if(e.deletionPosition.hasSameParentAs(r.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(r.type!="remove"||t.forceWeakRemove){if(r.howMany==1)return t.bWasUndone?(r.sourcePosition=e.graveyardPosition.clone(),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]):[new Xt(0)]}else if(!t.aWasUndone){const s=[];let a=e.graveyardPosition.clone(),l=e.targetPosition._getTransformedByMergeOperation(e);r.howMany>1&&(s.push(new qe(r.sourcePosition,r.howMany-1,r.targetPosition,0)),a=a._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1),l=l._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1));const u=e.deletionPosition._getCombined(r.sourcePosition,r.targetPosition),m=new qe(a,1,u,0),f=m.getMovedRangeStart().path.slice();f.push(0);const p=new le(m.targetPosition.root,f);l=l._getTransformedByMove(a,u,1);const v=new qe(l,e.howMany,p,0);return s.push(m),s.push(v),s}}const o=$._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByMergeOperation(e);return r.sourcePosition=o.start,r.howMany=o.end.offset-o.start.offset,r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]}),Ye(En,Zt,(r,e)=>(r.position=r.position._getTransformedByInsertOperation(e),[r])),Ye(En,vt,(r,e)=>r.position.isEqual(e.deletionPosition)?(r.position=e.graveyardPosition.clone(),r.position.stickiness="toNext",[r]):(r.position=r.position._getTransformedByMergeOperation(e),[r])),Ye(En,qe,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),Ye(En,En,(r,e,t)=>{if(r.position.isEqual(e.position)){if(!t.aIsStrong)return[new Xt(0)];r.oldName=e.newName}return[r]}),Ye(En,at,(r,e)=>{if(Qt(r.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new En(r.position.getShiftedBy(1),r.oldName,r.newName,0);return[r,t]}return r.position=r.position._getTransformedBySplitOperation(e),[r]}),Ye($i,$i,(r,e,t)=>{if(r.root===e.root&&r.key===e.key){if(!t.aIsStrong||r.newValue===e.newValue)return[new Xt(0)];r.oldValue=e.newValue}return[r]}),Ye(at,Zt,(r,e)=>(r.splitPosition.hasSameParentAs(e.position)&&r.splitPosition.offset<e.position.offset&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByInsertOperation(e),r.insertionPosition=r.insertionPosition._getTransformedByInsertOperation(e),[r])),Ye(at,vt,(r,e,t)=>{if(!r.graveyardPosition&&!t.bWasUndone&&r.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const o=new le(e.graveyardPosition.root,n),s=at.getInsertionPosition(new le(e.graveyardPosition.root,n)),a=new at(o,0,s,null,0);return r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=at.getInsertionPosition(r.splitPosition),r.graveyardPosition=a.insertionPosition.clone(),r.graveyardPosition.stickiness="toNext",[a,r]}return r.splitPosition.hasSameParentAs(e.deletionPosition)&&!r.splitPosition.isAfter(e.deletionPosition)&&r.howMany--,r.splitPosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=at.getInsertionPosition(r.splitPosition),r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),Ye(at,qe,(r,e,t)=>{const n=$._createFromPositionAndShift(e.sourcePosition,e.howMany);if(r.graveyardPosition){const s=n.start.isEqual(r.graveyardPosition)||n.containsPosition(r.graveyardPosition);if(!t.bWasUndone&&s){const a=r.splitPosition._getTransformedByMoveOperation(e),l=r.graveyardPosition._getTransformedByMoveOperation(e),u=l.path.slice();u.push(0);const m=new le(l.root,u);return[new qe(a,r.howMany,m,0)]}r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)}const o=r.splitPosition.isEqual(e.targetPosition);if(o&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return r.howMany+=e.howMany,r.splitPosition=r.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),r.insertionPosition=at.getInsertionPosition(r.splitPosition),[r];if(o&&t.abRelation&&t.abRelation.howMany){const{howMany:s,offset:a}=t.abRelation;return r.howMany+=s,r.splitPosition=r.splitPosition.getShiftedBy(a),[r]}if(r.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.splitPosition)){const s=e.howMany-(r.splitPosition.offset-e.sourcePosition.offset);return r.howMany-=s,r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany),r.splitPosition=e.sourcePosition.clone(),r.insertionPosition=at.getInsertionPosition(r.splitPosition),[r]}return e.sourcePosition.isEqual(e.targetPosition)||(r.splitPosition.hasSameParentAs(e.sourcePosition)&&r.splitPosition.offset<=e.sourcePosition.offset&&(r.howMany-=e.howMany),r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany)),r.splitPosition.stickiness="toNone",r.splitPosition=r.splitPosition._getTransformedByMoveOperation(e),r.splitPosition.stickiness="toNext",r.graveyardPosition?r.insertionPosition=r.insertionPosition._getTransformedByMoveOperation(e):r.insertionPosition=at.getInsertionPosition(r.splitPosition),[r]}),Ye(at,at,(r,e,t)=>{if(r.splitPosition.isEqual(e.splitPosition)){if(!r.graveyardPosition&&!e.graveyardPosition)return[new Xt(0)];if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition))return[new Xt(0)];if(t.abRelation=="splitBefore")return r.howMany=0,r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e),[r]}if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition)){const n=r.splitPosition.root.rootName=="$graveyard",o=e.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const a=[];return e.howMany&&a.push(new qe(e.moveTargetPosition,e.howMany,e.splitPosition,0)),r.howMany&&a.push(new qe(r.splitPosition,r.howMany,r.moveTargetPosition,0)),a}return[new Xt(0)]}if(r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e)),r.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return r.howMany++,[r];if(e.splitPosition.isEqual(r.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const o=new le(e.insertionPosition.root,n);return[r,new qe(r.insertionPosition,1,o,0)]}return r.splitPosition.hasSameParentAs(e.splitPosition)&&r.splitPosition.offset<e.splitPosition.offset&&(r.howMany-=e.howMany),r.splitPosition=r.splitPosition._getTransformedBySplitOperation(e),r.insertionPosition=at.getInsertionPosition(r.splitPosition),[r]});class k1 extends Eo{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class Wc extends Eo{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class jr{constructor(e){this.document=e}createDocumentFragment(e){return new Jo(this.document,e)}createElement(e,t,n){return new Rn(this.document,e,t,n)}createText(e){return new Ze(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const o=n.getChildIndex(e);return this.removeChildren(o,1,n),this.insertChild(o,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new Rn(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){ln(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return me._createAt(e,t)}createPositionAfter(e){return me._createAfter(e)}createPositionBefore(e){return me._createBefore(e)}createRange(e,t){return new xe(e,t)}createRangeOn(e){return xe._createOn(e)}createRangeIn(e){return xe._createIn(e)}createSelection(...e){return new si(...e)}}class w1{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new C("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?$._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new $(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=sn.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new C("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=e:this._nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=sn.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=sn.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof tt)||!this._canMergeLeft(e))return;const t=sn._createBefore(e);t.stickiness="toNext";const n=sn.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=sn._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=sn._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof tt)||!this._canMergeRight(e))return;const t=sn._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new C("insertcontent-invalid-insertion-position",this);this.position=le._createAt(t.nodeBefore,"end");const n=sn.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=sn._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=sn._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof tt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof tt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function bp(r,e,t="auto"){const n=r.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return t=="before"||t=="after"?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const o=Ut(r.getSelectedBlocks());if(!o)return e.createRange(r.focus);if(o.isEmpty)return e.createRange(e.createPositionAt(o,0));const s=e.createPositionAfter(o);return r.focus.isTouching(s)?e.createRange(s):e.createRange(e.createPositionBefore(o))}function _1(r,e,t,n,o={}){if(!r.schema.isObject(e))throw new C("insertobject-element-not-an-object",r,{object:e});let s;s=t?t instanceof Ei||t instanceof Yn?t:r.createSelection(t,n):r.document.selection;let a=s;o.findOptimalPosition&&r.schema.isBlock(e)&&(a=r.createSelection(bp(s,r,o.findOptimalPosition)));const l=Ut(s.getSelectedBlocks()),u={};return l&&Object.assign(u,r.schema.getAttributesWithProperty(l,"copyOnReplace",!0)),r.change(m=>{a.isCollapsed||r.deleteContent(a,{doNotAutoparagraph:!0});let f=e;const p=a.anchor.parent;!r.schema.checkChild(p,e)&&r.schema.checkChild(p,"paragraph")&&r.schema.checkChild("paragraph",e)&&(f=m.createElement("paragraph"),m.insert(e,f)),r.schema.setAllowedAttributes(f,u,m);const v=r.insertContent(f,a);return v.isCollapsed||o.setSelection&&function(T,S,M,O){const L=T.model;if(M=="after"){let V=S.nextSibling;!(V&&L.schema.checkChild(V,"$text"))&&L.schema.checkChild(S.parent,"paragraph")&&(V=T.createElement("paragraph"),L.schema.setAllowedAttributes(V,O,T),L.insertContent(V,T.createPositionAfter(S))),V&&T.setSelection(V,0)}else{if(M!="on")throw new C("insertobject-invalid-place-parameter-value",L);T.setSelection(S,"on")}}(m,e,o.setSelection,u),v})}const kp=' ,.?!:;"-()';function A1(r,e){const{isForward:t,walker:n,unit:o,schema:s,treatEmojiAsSingleUnit:a}=r,{type:l,item:u,nextPosition:m}=e;if(l=="text")return r.unit==="word"?function(f,p){let v=f.position.textNode;if(v){let T=f.position.offset-v.startOffset;for(;!C1(v.data,T,p)&&!y1(v,T,p);){f.next();const S=p?f.position.nodeAfter:f.position.nodeBefore;if(S&&S.is("$text")){const M=S.data.charAt(p?0:S.data.length-1);kp.includes(M)||(f.next(),v=f.position.textNode)}T=f.position.offset-v.startOffset}}return f.position}(n,t):function(f,p,v){const T=f.position.textNode;if(T){const S=T.data;let M=f.position.offset-T.startOffset;for(;Wf(S,M)||p=="character"&&Yf(S,M)||v&&e1(S,M);)f.next(),M=f.position.offset-T.startOffset}return f.position}(n,o,a);if(l==(t?"elementStart":"elementEnd")){if(s.isSelectable(u))return le._createAt(u,t?"after":"before");if(s.checkChild(m,"$text"))return m}else{if(s.isLimit(u))return void n.skip(()=>!0);if(s.checkChild(m,"$text"))return m}}function v1(r,e){const t=r.root,n=le._createAt(t,e?"end":0);return e?new $(r,n):new $(n,r)}function C1(r,e,t){const n=e+(t?0:-1);return kp.includes(r.charAt(n))}function y1(r,e,t){return e===(t?r.endOffset:0)}class E1 extends lt{constructor(){super(),this.markers=new n1,this.document=new t1(this),this.schema=new Py,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),a1(this),this.document.registerPostFixer(Nf)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Br,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){C.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new Br):e instanceof Br||(e=new Br(e)):e=new Br,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){C.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(o,s,a,l){return o.change(u=>{let m;m=a?a instanceof Ei||a instanceof Yn?a:u.createSelection(a,l):o.document.selection,m.isCollapsed||o.deleteContent(m,{doNotAutoparagraph:!0});const f=new w1(o,u,m.anchor),p=[];let v;if(s.is("documentFragment")){if(s.markers.size){const M=[];for(const[O,L]of s.markers){const{start:V,end:K}=L,ge=V.isEqual(K);M.push({position:V,name:O,isCollapsed:ge},{position:K,name:O,isCollapsed:ge})}M.sort(({position:O},{position:L})=>O.isBefore(L)?1:-1);for(const{position:O,name:L,isCollapsed:V}of M){let K=null,ge=null;const Ie=O.parent===s&&O.isAtStart,Ue=O.parent===s&&O.isAtEnd;Ie||Ue?V&&(ge=Ie?"start":"end"):(K=u.createElement("$marker"),u.insert(K,O)),p.push({name:L,element:K,collapsed:ge})}}v=s.getChildren()}else v=[s];f.handleNodes(v);let T=f.getSelectionRange();if(s.is("documentFragment")&&p.length){const M=T?ci.fromRange(T):null,O={};for(let L=p.length-1;L>=0;L--){const{name:V,element:K,collapsed:ge}=p[L],Ie=!O[V];if(Ie&&(O[V]=[]),K){const Ue=u.createPositionAt(K,"before");O[V].push(Ue),u.remove(K)}else{const Ue=f.getAffectedRange();if(!Ue){ge&&O[V].push(f.position);continue}ge?O[V].push(Ue[ge]):O[V].push(Ie?Ue.start:Ue.end)}}for(const[L,[V,K]]of Object.entries(O))V&&K&&V.root===K.root&&u.addMarker(L,{usingOperation:!0,affectsData:!0,range:new $(V,K)});M&&(T=M.toRange(),M.detach())}T&&(m instanceof Yn?u.setSelection(T):m.setTo(T));const S=f.getAffectedRange()||o.createRange(m.anchor);return f.destroy(),S})}(this,e,t,n)}insertObject(e,t,n,o){return _1(this,e,t,n,o)}deleteContent(e,t){u1(this,e,t)}modifySelection(e,t){(function(n,o,s={}){const a=n.schema,l=s.direction!="backward",u=s.unit?s.unit:"character",m=!!s.treatEmojiAsSingleUnit,f=o.focus,p=new Yi({boundaries:v1(f,l),singleCharacters:!0,direction:l?"forward":"backward"}),v={walker:p,schema:a,isForward:l,unit:u,treatEmojiAsSingleUnit:m};let T;for(;T=p.next();){if(T.done)return;const S=A1(v,T.value);if(S)return void(o instanceof Yn?n.change(M=>{M.setSelectionFocus(S)}):o.setFocus(S))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(o=>{const s=o.createDocumentFragment(),a=n.getFirstRange();if(!a||a.isCollapsed)return s;const l=a.start.root,u=a.start.getCommonPath(a.end),m=l.getNodeByPath(u);let f;f=a.start.parent==a.end.parent?a:o.createRange(o.createPositionAt(m,a.start.path[u.length]),o.createPositionAt(m,a.end.path[u.length]+1));const p=f.end.offset-f.start.offset;for(const v of f.getItems({shallow:!0}))v.is("$textProxy")?o.appendText(v.data,v.getAttributes(),s):o.append(o.cloneElement(v,!0),s);if(f!=a){const v=a._getTransformedByMove(f.start,o.createPositionAt(s,0),p)[0],T=o.createRange(o.createPositionAt(s,0),v.start);ap(o.createRange(v.end,o.createPositionAt(s,"end")),o),ap(T,o)}return s})}(this,e)}hasContent(e,t={}){const n=e instanceof $?e:$._createIn(e);if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:s=!1}=t;if(!s){for(const a of this.markers.getMarkersIntersectingRange(n))if(a.affectsData)return!0}for(const a of n.getItems())if(this.schema.isContent(a)&&(!a.is("$textProxy")||!o||a.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new le(e,t,n)}createPositionAt(e,t){return le._createAt(e,t)}createPositionAfter(e){return le._createAfter(e)}createPositionBefore(e){return le._createBefore(e)}createRange(e,t){return new $(e,t)}createRangeIn(e){return $._createIn(e)}createRangeOn(e){return $._createOn(e)}createSelection(...e){return new Ei(...e)}createBatch(e){return new Br(e)}createOperationFromJSON(e){return i1.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new r1(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return e}}class I1 extends yi{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const o=t;t=(s,a)=>{this.editor.execute(o),a()}}super.set(e,t,n)}}class wp{constructor(e={}){const t=e.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=e.context||new uu({language:t}),this._context._addEditor(this,!e.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new yc(e,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new xr(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new Sy,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new E1;const o=new bC;this.data=new $y(this.model,o),this.editing=new xy(this.model,o),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new qy([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new I1(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new C("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new C("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new C("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],o=e.get("extraPlugins")||[],s=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(o),n,s)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...e){try{return this.commands.execute(...e)}catch(t){C.rethrowUnexpectedError(t,this)}}focus(){this.editing.view.focus()}}ce(wp,ye);class T1{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(Ku(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new C("componentfactory-item-missing",this,{name:e});return this._components.get(Ku(e)).callback(this.editor.locale)}has(e){return this._components.has(Ku(e))}}function Ku(r){return String(r).toLowerCase()}class rr extends Pn{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new C("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const s of e)o.delegate(s).to(t)}),this.on("remove",(n,o)=>{for(const s of e)o.stopDelegating(s,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}class Ln{constructor(e){Object.assign(this,Cp(vp(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new C("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)$c(n)?yield n:Qu(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new D1({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,s)=>new _p({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:s})}}static extend(e,t){if(e._isRendered)throw new C("template-extend-render",[this,e]);Tp(e,Cp(vp(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new C("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Yc(this.text)?this._bindToObservable({schema:this.text,updater:x1(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){let t,n,o,s;if(!this.attributes)return;const a=e.node,l=e.revertData;for(t in this.attributes)if(o=a.getAttribute(t),n=this.attributes[t],l&&(l.attributes[t]=o),s=be(n[0])&&n[0].ns?n[0].ns:null,Yc(n)){const u=s?n[0].value:n;l&&Dp(t)&&u.unshift(o),this._bindToObservable({schema:u,updater:S1(a,t,s),data:e})}else t=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],e):(l&&o&&Dp(t)&&n.unshift(o),n=n.map(u=>u&&u.value||u).reduce((u,m)=>u.concat(m),[]).reduce(Ep,""),Vr(n)||a.setAttributeNS(s,t,n))}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const s=e[o];Yc(s)?this._bindToObservable({schema:[s],updater:M1(n,o),data:t}):n.style[o]=s}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let s=0;for(const a of this.children)if(Zu(a)){if(!o){a.setParent(t);for(const l of a)n.appendChild(l.element)}}else if($c(a))o||(a.isRendered||a.render(),n.appendChild(a.element));else if(Nr(a))n.appendChild(a);else if(o){const l={children:[],bindings:[],attributes:{}};e.revertData.children.push(l),a._renderNode({node:n.childNodes[s++],isApplying:!0,revertData:l})}else n.appendChild(a.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[s,a]=t.split("@");return o.activateDomEventListener(s,a,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;Ap(e,t,n);const s=e.filter(a=>!Vr(a)).filter(a=>a.observable).map(a=>a.activateAttributeListener(e,t,n));o&&o.bindings.push(s)}_revertTemplateFromNode(e,t){for(const n of t.bindings)for(const o of n)o();if(t.text)e.textContent=t.text;else{for(const n in t.attributes){const o=t.attributes[n];o===null?e.removeAttribute(n):e.setAttribute(n,o)}for(let n=0;n<t.children.length;++n)this._revertTemplateFromNode(e.childNodes[n],t.children[n])}}}ce(Ln,se);class da{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>Ap(e,t,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class D1 extends da{activateDomEventListener(e,t,n){const o=(s,a)=>{t&&!a.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class _p extends da{getValue(e){return!Vr(super.getValue(e))&&(this.valueIfTrue||!0)}}function Yc(r){return!!r&&(r.value&&(r=r.value),Array.isArray(r)?r.some(Yc):r instanceof da)}function Ap(r,e,{node:t}){let n=function(o,s){return o.map(a=>a instanceof da?a.getValue(s):a)}(r,t);n=r.length==1&&r[0]instanceof _p?n[0]:n.reduce(Ep,""),Vr(n)?e.remove():e.set(n)}function x1(r){return{set(e){r.textContent=e},remove(){r.textContent=""}}}function S1(r,e,t){return{set(n){r.setAttributeNS(t,e,n)},remove(){r.removeAttributeNS(t,e)}}}function M1(r,e){return{set(t){r.style[e]=t},remove(){r.style[e]=null}}}function vp(r){return Cc(r,e=>{if(e&&(e instanceof da||Qu(e)||$c(e)||Zu(e)))return e})}function Cp(r){if(typeof r=="string"?r=function(e){return{text:[e]}}(r):r.text&&function(e){e.text=Tt(e.text)}(r),r.on&&(r.eventListeners=function(e){for(const t in e)yp(e,t);return e}(r.on),delete r.on),!r.text){r.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=Tt(t[n].value)),yp(t,n)}(r.attributes);const e=[];if(r.children)if(Zu(r.children))e.push(r.children);else for(const t of r.children)Qu(t)||$c(t)||Nr(t)?e.push(t):e.push(new Ln(t));r.children=e}return r}function yp(r,e){r[e]=Tt(r[e])}function Ep(r,e){return Vr(e)?r:Vr(r)?e:`${r} ${e}`}function Ip(r,e){for(const t in e)r[t]?r[t].push(...e[t]):r[t]=e[t]}function Tp(r,e){if(e.attributes&&(r.attributes||(r.attributes={}),Ip(r.attributes,e.attributes)),e.eventListeners&&(r.eventListeners||(r.eventListeners={}),Ip(r.eventListeners,e.eventListeners)),e.text&&r.text.push(...e.text),e.children&&e.children.length){if(r.children.length!=e.children.length)throw new C("ui-template-extend-children-mismatch",r);let t=0;for(const n of e.children)Tp(r.children[t++],n)}}function Vr(r){return!r&&r!==0}function $c(r){return r instanceof je}function Qu(r){return r instanceof Ln}function Zu(r){return r instanceof rr}function Dp(r){return r=="class"||r=="style"}var xp=g(4793),P1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(xp.Z,P1),xp.Z.locals;class je{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Pn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Ln.bind(this,this)}createCollection(e){const t=new rr(e);return this._viewCollections.add(t),t}registerChild(e){pn(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){pn(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Ln(e)}extendTemplate(e){Ln.extend(this.template,e)}render(){if(this.isRendered)throw new C("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function Sp({element:r,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:s}){Bi(e)&&(e=e()),Bi(n)&&(n=n());const a=function(v){return v&&v.parentNode?v.offsetParent===Be.document.body?null:v.offsetParent:null}(r),l=new dt(r),u=new dt(e);let m;const f=o&&function(v){v=Object.assign({top:0,bottom:0,left:0,right:0},v);const T=new dt(Be.window);return T.top+=v.top,T.height-=v.top,T.bottom-=v.bottom,T.height-=v.bottom,T}(s)||null,p={targetRect:u,elementRect:l,positionedElementAncestor:a,viewportRect:f};if(n||o){const v=n&&new dt(n).getVisible();Object.assign(p,{limiterRect:v,viewportRect:f}),m=function(T,S){const{elementRect:M}=S,O=M.getArea(),L=T.map(ge=>new Xu(ge,S)).filter(ge=>!!ge.name);let V=0,K=null;for(const ge of L){const{limiterIntersectionArea:Ie,viewportIntersectionArea:Ue}=ge;if(Ie===O)return ge;const He=Ue**2+Ie**2;He>V&&(V=He,K=ge)}return K}(t,p)||new Xu(t[0],p)}else m=new Xu(t[0],p);return m}function Mp(r){const{scrollX:e,scrollY:t}=Be.window;return r.clone().moveBy(e,t)}ce(je,er),ce(je,ye);class Xu{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:s,name:a,config:l}=n;this.name=a,this.config=l,this._positioningFunctionCorrdinates={left:o,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=Mp(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=Mp(new dt(t)),o=lf(t);let s=0,a=0;s-=n.left,a-=n.top,s+=t.scrollLeft,a+=t.scrollTop,s-=o.left,a-=o.top,e.moveBy(s,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function Ju(r){return e=>e+r}var Pp=g(8793),O1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(Pp.Z,O1),Pp.Z.locals;const Op=Ju("px"),Rp=Be.document.body;class bn extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",Op),left:t.to("left",Op)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=bn.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:Rp,fitInViewport:!0},e),o=bn._getOptimalPosition(n),s=parseInt(o.left),a=parseInt(o.top),{name:l,config:u={}}=o,{withArrow:m=!0}=u;Object.assign(this,{top:a,left:s,position:l,withArrow:m})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=eh(e.target),n=e.limiter?eh(e.limiter):Rp;this.listenTo(Be.document,"scroll",(o,s)=>{const a=s.target,l=t&&a.contains(t),u=n&&a.contains(n);!l&&!u&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(Be.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(Be.document,"scroll"),this.stopListening(Be.window,"resize")}}function eh(r){return vi(r)?r:zc(r)?r.commonAncestorContainer:typeof r=="function"?eh(r()):null}function Np({sideOffset:r=bn.arrowSideOffset,heightOffset:e=bn.arrowHeightOffset,stickyVerticalOffset:t=bn.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(a,l)=>({top:o(a,l),left:a.left-r,name:"arrow_sw",...n&&{config:n}}),northWestArrowSouthMiddleWest:(a,l)=>({top:o(a,l),left:a.left-.25*l.width-r,name:"arrow_smw",...n&&{config:n}}),northWestArrowSouth:(a,l)=>({top:o(a,l),left:a.left-l.width/2,name:"arrow_s",...n&&{config:n}}),northWestArrowSouthMiddleEast:(a,l)=>({top:o(a,l),left:a.left-.75*l.width+r,name:"arrow_sme",...n&&{config:n}}),northWestArrowSouthEast:(a,l)=>({top:o(a,l),left:a.left-l.width+r,name:"arrow_se",...n&&{config:n}}),northArrowSouthWest:(a,l)=>({top:o(a,l),left:a.left+a.width/2-r,name:"arrow_sw",...n&&{config:n}}),northArrowSouthMiddleWest:(a,l)=>({top:o(a,l),left:a.left+a.width/2-.25*l.width-r,name:"arrow_smw",...n&&{config:n}}),northArrowSouth:(a,l)=>({top:o(a,l),left:a.left+a.width/2-l.width/2,name:"arrow_s",...n&&{config:n}}),northArrowSouthMiddleEast:(a,l)=>({top:o(a,l),left:a.left+a.width/2-.75*l.width+r,name:"arrow_sme",...n&&{config:n}}),northArrowSouthEast:(a,l)=>({top:o(a,l),left:a.left+a.width/2-l.width+r,name:"arrow_se",...n&&{config:n}}),northEastArrowSouthWest:(a,l)=>({top:o(a,l),left:a.right-r,name:"arrow_sw",...n&&{config:n}}),northEastArrowSouthMiddleWest:(a,l)=>({top:o(a,l),left:a.right-.25*l.width-r,name:"arrow_smw",...n&&{config:n}}),northEastArrowSouth:(a,l)=>({top:o(a,l),left:a.right-l.width/2,name:"arrow_s",...n&&{config:n}}),northEastArrowSouthMiddleEast:(a,l)=>({top:o(a,l),left:a.right-.75*l.width+r,name:"arrow_sme",...n&&{config:n}}),northEastArrowSouthEast:(a,l)=>({top:o(a,l),left:a.right-l.width+r,name:"arrow_se",...n&&{config:n}}),southWestArrowNorthWest:(a,l)=>({top:s(a),left:a.left-r,name:"arrow_nw",...n&&{config:n}}),southWestArrowNorthMiddleWest:(a,l)=>({top:s(a),left:a.left-.25*l.width-r,name:"arrow_nmw",...n&&{config:n}}),southWestArrowNorth:(a,l)=>({top:s(a),left:a.left-l.width/2,name:"arrow_n",...n&&{config:n}}),southWestArrowNorthMiddleEast:(a,l)=>({top:s(a),left:a.left-.75*l.width+r,name:"arrow_nme",...n&&{config:n}}),southWestArrowNorthEast:(a,l)=>({top:s(a),left:a.left-l.width+r,name:"arrow_ne",...n&&{config:n}}),southArrowNorthWest:(a,l)=>({top:s(a),left:a.left+a.width/2-r,name:"arrow_nw",...n&&{config:n}}),southArrowNorthMiddleWest:(a,l)=>({top:s(a),left:a.left+a.width/2-.25*l.width-r,name:"arrow_nmw",...n&&{config:n}}),southArrowNorth:(a,l)=>({top:s(a),left:a.left+a.width/2-l.width/2,name:"arrow_n",...n&&{config:n}}),southArrowNorthMiddleEast:(a,l)=>({top:s(a),left:a.left+a.width/2-.75*l.width+r,name:"arrow_nme",...n&&{config:n}}),southArrowNorthEast:(a,l)=>({top:s(a),left:a.left+a.width/2-l.width+r,name:"arrow_ne",...n&&{config:n}}),southEastArrowNorthWest:(a,l)=>({top:s(a),left:a.right-r,name:"arrow_nw",...n&&{config:n}}),southEastArrowNorthMiddleWest:(a,l)=>({top:s(a),left:a.right-.25*l.width-r,name:"arrow_nmw",...n&&{config:n}}),southEastArrowNorth:(a,l)=>({top:s(a),left:a.right-l.width/2,name:"arrow_n",...n&&{config:n}}),southEastArrowNorthMiddleEast:(a,l)=>({top:s(a),left:a.right-.75*l.width+r,name:"arrow_nme",...n&&{config:n}}),southEastArrowNorthEast:(a,l)=>({top:s(a),left:a.right-l.width+r,name:"arrow_ne",...n&&{config:n}}),westArrowEast:(a,l)=>({top:a.top+a.height/2-l.height/2,left:a.left-l.width-e,name:"arrow_e",...n&&{config:n}}),eastArrowWest:(a,l)=>({top:a.top+a.height/2-l.height/2,left:a.right+e,name:"arrow_w",...n&&{config:n}}),viewportStickyNorth:(a,l,u)=>a.getIntersection(u)?{top:u.top+t,left:a.left+a.width/2-l.width/2,name:"arrowless",config:{withArrow:!1,...n}}:null};function o(a,l){return a.top-l.height-e}function s(a){return a.bottom+e}}bn.arrowSideOffset=25,bn.arrowHeightOffset=10,bn.stickyVerticalOffset=20,bn._getOptimalPosition=Sp,bn.defaultPositions=Np();var Lp=g(3332),R1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(Lp.Z,R1),Lp.Z.locals;const Bp="ck-tooltip";class Ht{constructor(e){if(Ht._editors.add(e),Ht._instance)return Ht._instance;Ht._instance=this,this.tooltipTextView=new je(e.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new bn(e.locale),this.balloonPanelView.class=Bp,this.balloonPanelView.content.add(this.tooltipTextView),this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=ea(this._pinTooltip,600),this.listenTo(Be.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Be.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Be.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Be.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Be.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(e){Ht._editors.delete(e),this.stopListening(e.ui),Ht._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),Ht._instance=null)}_onEnterOrFocus(e,{target:t}){const n=th(t);var o;n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,{text:(o=n).dataset.ckeTooltipText,position:o.dataset.ckeTooltipPosition||"s",cssClass:o.dataset.ckeTooltipClass||""}))}_onLeaveOrBlur(e,{target:t,relatedTarget:n}){if(e.name==="mouseleave"){if(!vi(t)||this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;const o=th(t),s=th(n);o&&o!==s&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(e,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(e,{text:t,position:n,cssClass:o}){const s=Ut(Ht._editors.values()).ui.view.body;s.has(this.balloonPanelView)||s.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:e,positions:Ht.getPositioningFunctions(n)}),this.balloonPanelView.class=[Bp,o].filter(a=>a).join(" ");for(const a of Ht._editors)this.listenTo(a.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=e,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const e of Ht._editors)this.stopListening(e.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null}_updateTooltipPosition(){Lr(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:Ht.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}static getPositioningFunctions(e){const t=Ht.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[e]}}function th(r){return vi(r)?r.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}ce(Ht,er),Ht.defaultBalloonPositions=Np({heightOffset:5,sideOffset:13}),Ht._instance=null,Ht._editors=new Set;class zp{constructor(e){this.editor=e,this.componentFactory=new T1(e),this.focusTracker=new Wn,this.tooltipManager=new Ht(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.isReady=!1,this.once("ready",()=>{this.isReady=!0}),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,o;e.keystrokes.set("Alt+F10",(s,a)=>{const l=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(l)&&!Array.from(t.domRoots.values()).includes(l)&&(n=l);const u=this._getCurrentFocusedToolbarDefinition();u&&o||(o=this._getFocusableCandidateToolbarDefinitions(u));for(let m=0;m<o.length;m++){const f=o.shift();if(o.push(f),f!==u&&this._focusFocusableCandidateToolbar(f)){u&&u.options.afterBlur&&u.options.afterBlur();break}}a()}),e.keystrokes.set("Esc",(s,a)=>{const l=this._getCurrentFocusedToolbarDefinition();l&&(n?(n.focus(),n=null):e.editing.view.focus(),l.options.afterBlur&&l.options.afterBlur(),a())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:o}=t;(Lr(n.element)||o.beforeFocus)&&e.push(t)}return e.sort((t,n)=>Fp(t)-Fp(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!Lr(t.element)&&(t.focus(),!0)}}function Fp(r){const{toolbarView:e,options:t}=r;let n=10;return Lr(e.element)&&n--,t.isContextual&&n--,n}ce(zp,ye);const N1={setData(r){this.data.set(r)},getData(r){return this.data.get(r)}},L1=N1;function B1(r,e){r instanceof HTMLTextAreaElement&&(r.value=e),r.innerHTML=e}const z1={updateSourceElement(r=this.data.get()){if(!this.sourceElement)throw new C("editor-missing-sourceelement",this);const e=this.config.get("updateSourceElementOnDestroy"),t=this.sourceElement instanceof HTMLTextAreaElement;B1(this.sourceElement,e||t?r:"")}};class jp extends $o{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Pn({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new C("pendingactions-add-invalid-message",this);const t=Object.create(ye);return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const Vp='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',Rt={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path clip-rule="evenodd" d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path clip-rule="evenodd" d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:Vp};function nh({emitter:r,activator:e,callback:t,contextElements:n}){r.listenTo(document,"mousedown",(o,s)=>{if(!e())return;const a=typeof s.composedPath=="function"?s.composedPath():[];for(const l of n)if(l.contains(s.target)||a.includes(l))return;t()})}function ih(r){r.set("_isCssTransitionsDisabled",!1),r.disableCssTransitions=()=>{r._isCssTransitionsDisabled=!0},r.enableCssTransitions=()=>{r._isCssTransitionsDisabled=!1},r.extendTemplate({attributes:{class:[r.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function oh({view:r}){r.listenTo(r.element,"submit",(e,t)=>{t.preventDefault(),r.fire("submit")},{useCapture:!0})}class F1 extends rr{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Ln({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=cf(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var Up=g(6574),j1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(Up.Z,j1),Up.Z.locals;class qc extends je{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");for(t&&(this.viewBox=t);this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}var Hp=g(4906),V1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(Hp.Z,V1),Hp.Z.locals;class gt extends je{constructor(e){super(e);const t=this.bindTemplate,n=I();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new qc,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const o={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",s=>!s),t.if("isVisible","ck-hidden",s=>!s),t.to("isOn",s=>s?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",s=>s||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,s=>!s),"aria-pressed":t.to("isOn",s=>!!this.isToggleable&&String(!!s)),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};et.isSafari&&(o.on.mousedown=t.to(s=>{this.focus(),s.preventDefault()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(e){const t=new je,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new je;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>Tm(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=Tm(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var Gp=g(5332),U1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(Gp.Z,U1),Gp.Z.locals;class Kc extends gt{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new je;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var Wp=g(6781),H1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(Wp.Z,H1),Wp.Z.locals;const Yp='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class $p extends gt{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new qc;return e.content=Yp,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var qp=g(7686),G1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(qp.Z,G1),qp.Z.locals;class Kp extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new yi,this.focusTracker=new Wn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new gt;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new gt,t=e.bindTemplate;return e.icon=Yp,e.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":t.to("isOn"),"aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class W1 extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){this.children.length&&(typeof this.children.first.focus=="function"?this.children.first.focus():P("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this}))}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var Qp=g(5485),Y1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(Qp.Z,Y1),Qp.Z.locals;class Ur extends je{constructor(e,t,n){super(e);const o=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new yi,this.focusTracker=new Wn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",s=>!s)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":o.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,n,o)=>{o&&(this.panelPosition==="auto"?this.panelView.position=Ur._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:o,northEast:s,northWest:a,southMiddleEast:l,southMiddleWest:u,northMiddleEast:m,northMiddleWest:f}=Ur.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,l,u,e,s,a,m,f,t]:[o,n,u,l,e,a,s,f,m,t]}}Ur.defaultPanelPositions={south:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/2,name:"s"}),southEast:r=>({top:r.bottom,left:r.left,name:"se"}),southWest:(r,e)=>({top:r.bottom,left:r.left-e.width+r.width,name:"sw"}),southMiddleEast:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/4,name:"sme"}),southMiddleWest:(r,e)=>({top:r.bottom,left:r.left-3*(e.width-r.width)/4,name:"smw"}),north:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/2,name:"n"}),northEast:(r,e)=>({top:r.top-e.height,left:r.left,name:"ne"}),northWest:(r,e)=>({top:r.top-e.height,left:r.left-e.width+r.width,name:"nw"}),northMiddleEast:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/4,name:"nme"}),northMiddleWest:(r,e)=>({top:r.top-e.height,left:r.left-3*(e.width-r.width)/4,name:"nmw"})},Ur._getOptimalPosition=Sp;class Hr{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const o of n)e.keystrokeHandler.set(o,(s,a)=>{this[t](),a()})}}get first(){return this.focusables.find(rh)||null}get last(){return this.focusables.filter(rh).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const o=t.element===this.focusTracker.focusedElement;return o&&(e=n),o}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let o=(t+n+e)%n;do{const s=this.focusables.get(o);if(rh(s))return s;o=(o+n+e)%n}while(o!==t);return null}}function rh(r){return!(!r.focus||!Lr(r.element))}class Zp extends je{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class $1 extends je{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Xp(r){return Array.isArray(r)?{items:r,removeItems:[]}:r?Object.assign({items:[],removeItems:[]},r):{items:[],removeItems:[]}}var Jp=g(5542),q1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(Jp.Z,q1),Jp.Z.locals;const eb={alignLeft:Rt.alignLeft,bold:Rt.bold,importExport:Rt.importExport,paragraph:Rt.paragraph,plus:Rt.plus,text:Rt.text,threeVerticalDots:Rt.threeVerticalDots};class sh extends je{constructor(e,t){super(e);const n=this.bindTemplate,o=this.t;this.options=t||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Wn,this.keystrokes=new yi,this.set("class"),this.set("isCompact",!1),this.itemsView=new K1(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const s=e.uiLanguageDirection==="rtl";this._focusCycler=new Hr({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[s?"arrowright":"arrowleft","arrowup"],focusNext:[s?"arrowleft":"arrowright","arrowdown"]}});const a=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var l;this.options.shouldGroupWhenFull&&this.options.isFloating&&a.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:a,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(l=this,l.bindTemplate.to(u=>{u.target===l.element&&u.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new Z1(this):new Q1(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t,n){const o=Xp(e),s=n||o.removeItems,a=this._cleanItemsConfiguration(o.items,t,s).map(l=>be(l)?this._createNestedToolbarDropdown(l,t,s):l==="|"?new Zp:l==="-"?new $1:t.create(l)).filter(l=>l);this.items.addMany(a)}_cleanItemsConfiguration(e,t,n){const o=e.filter((s,a,l)=>s==="|"||n.indexOf(s)===-1&&(s==="-"?!this.options.shouldGroupWhenFull||(P("toolbarview-line-break-ignored-when-grouping-items",l),!1):!(!be(s)&&!t.has(s))||(P("toolbarview-item-unavailable",{name:s}),!1)));return this._cleanSeparatorsAndLineBreaks(o)}_cleanSeparatorsAndLineBreaks(e){const t=a=>a!=="-"&&a!=="|",n=e.length,o=e.findIndex(t);if(o===-1)return[];const s=n-e.slice().reverse().findIndex(t);return e.slice(o,s).filter((a,l,u)=>t(a)?!0:!(l>0&&u[l-1]===a))}_createNestedToolbarDropdown(e,t,n){let{label:o,icon:s,items:a,tooltip:l=!0,withText:u=!1}=e;if(a=this._cleanItemsConfiguration(a,t,n),!a.length)return null;const m=Do(this.locale);return o||P("toolbarview-nested-toolbar-dropdown-missing-label",e),m.class="ck-toolbar__nested-toolbar-dropdown",m.buttonView.set({label:o,tooltip:l,withText:!!u}),s!==!1?m.buttonView.icon=eb[s]||s||eb.threeVerticalDots:m.buttonView.withText=!0,ah(m,[]),m.toolbarView.fillFromConfig(a,t,n),m}}class K1 extends je{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class Q1{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class Z1{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const o=n.index;for(const s of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=o;s<o+n.added.length;s++){const a=n.added[s-o];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!Lr(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new dt(e.lastChild),o=new dt(e);if(!this.cachedPadding){const s=Be.window.getComputedStyle(e),a=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(s[a])}return t==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new kt(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new Zp),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=Do(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",ah(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:Vp}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var tb=g(1046),X1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(tb.Z,X1),tb.Z.locals;class J1 extends je{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new Wn,this.keystrokes=new yi,this._focusCycler=new Hr({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class nb extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",t.if("isVisible","ck-hidden",n=>!n)]},children:this.children})}focus(){this.children.first.focus()}}class eE extends je{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var ib=g(7339),tE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(ib.Z,tE),ib.Z.locals;var ob=g(3949),nE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(ob.Z,nE),ob.Z.locals;function Do(r,e=$p){const t=new e(r),n=new W1(r),o=new Ur(r,t,n);return t.bind("isEnabled").to(o),t instanceof $p?t.bind("isOn").to(o,"isOpen"):t.arrowView.bind("isOn").to(o,"isOpen"),function(s){(function(a){a.on("render",()=>{nh({emitter:a,activator:()=>a.isOpen,callback:()=>{a.isOpen=!1},contextElements:[a.element]})})})(s),function(a){a.on("execute",l=>{l.source instanceof Kc||(a.isOpen=!1)})}(s),function(a){a.focusTracker.on("change:isFocused",(l,u,m)=>{a.isOpen&&!m&&(a.isOpen=!1)})}(s),function(a){a.keystrokes.set("arrowdown",(l,u)=>{a.isOpen&&(a.panelView.focus(),u())}),a.keystrokes.set("arrowup",(l,u)=>{a.isOpen&&(a.panelView.focusLast(),u())})}(s),function(a){a.on("change:isOpen",(l,u,m)=>{m||a.panelView.element.contains(Be.document.activeElement)&&a.buttonView.focus()})}(s),function(a){a.on("change:isOpen",(l,u,m)=>{m&&a.panelView.focus()},{priority:"low"})}(s)}(o),o}function ah(r,e,t={}){const n=r.locale,o=n.t,s=r.toolbarView=new sh(n);s.set("ariaLabel",o("Dropdown toolbar")),r.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(a=>s.items.add(a)),t.enableActiveItemFocusOnDropdownOpen&&sb(r,()=>s.items.find(a=>a.isOn)),r.panelView.children.add(s),s.items.delegate("execute").to(r)}function rb(r,e){const t=r.locale,n=r.listView=new J1(t);n.items.bindTo(e).using(({type:o,model:s})=>{if(o==="separator")return new eE(t);if(o==="button"||o==="switchbutton"){const a=new nb(t);let l;return l=o==="button"?new gt(t):new Kc(t),l.bind(...Object.keys(s)).to(s),l.delegate("execute").to(a),a.children.add(l),a}}),r.panelView.children.add(n),n.items.delegate("execute").to(r),sb(r,()=>n.items.find(o=>o instanceof nb&&o.children.first.isOn))}function sb(r,e){r.on("change:isOpen",()=>{if(!r.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():P("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:E.low-10})}var ab=g(9688),iE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(ab.Z,iE),ab.Z.locals;class oE extends je{constructor(e){super(e),this.body=new F1(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var cb=g(3662),rE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(cb.Z,rE),cb.Z.locals;class lb extends je{constructor(e){super(e),this.set("text"),this.set("for"),this.id=`ck-editor__label_${I()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class sE extends oE{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new lb;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class aE extends je{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(o=>{const s=e.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",s),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(o){e.once("change:isRenderingInProgress",(s,a,l)=>{l?n(o):t(o)})}(this):t(this)}}class cE extends aE{constructor(e,t,n,o={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var db=g(8847),lE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(db.Z,lE),db.Z.locals;var ub=g(4879),dE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(ub.Z,dE),ub.Z.locals;class uE extends je{constructor(e){super(e),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new Wn,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class hE extends uE{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var hb=g(2577),gE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(hb.Z,gE),hb.Z.locals;class ch extends je{constructor(e,t){super(e);const n=`ck-labeled-field-view-${I()}`,o=`ck-labeled-field-view-status-${I()}`;this.fieldView=t(this,n,o),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.bind("_statusText").to(this,"errorText",this,"infoText",(a,l)=>a||l);const s=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",s.to("class"),s.if("isEnabled","ck-disabled",a=>!a),s.if("isEmpty","ck-labeled-field-view_empty"),s.if("isFocused","ck-labeled-field-view_focused"),s.if("placeholder","ck-labeled-field-view_placeholder"),s.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(e){const t=new lb(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new je(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function lh(r,e,t){const n=new hE(r.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(r,"isEnabled",o=>!o),n.bind("hasError").to(r,"errorText",o=>!!o),n.on("input",()=>{r.errorText=null}),r.bind("isEmpty","isFocused","placeholder").to(n),n}class dh extends $o{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:"");this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class uh{constructor(e,t){t&&rf(this,t),e&&this.set(e)}}ce(uh,ye);var gb=g(4650),mE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(gb.Z,mE),gb.Z.locals;var mb=g(7676),fE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(mb.Z,fE),mb.Z.locals;const Qc=Ju("px");class Zc extends Y{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new bn(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new C("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new C("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new C("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new pE(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,o])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new bE(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class pE extends je{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Wn,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new gt(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class bE extends je{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Qc),left:n.to("left",Qc),width:n.to("width",Qc),height:n.to("height",Qc)}},children:this.content}),this.on("change:numberOfPanels",(o,s,a,l)=>{a>l?this._addPanels(a-l):this._removePanels(l-a),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new je;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:o}=new dt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:o})}}}var fb=g(5868),kE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(fb.Z,kE),fb.Z.locals;const ua=Ju("px");class wE extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Ln({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?ua(this._panelRect.height):null)}}}).render(),this._contentPanel=new Ln({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?ua(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?ua(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?ua(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(Be.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:ua(-Be.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var pb=g(9695),_E={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(pb.Z,_E),pb.Z.locals;class AE extends zp{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Xp(e.config.get("toolbar")),this._elementReplacer=new hy}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,o=t.editing.view,s=n.editable,a=o.document.getRoot();s.name=a.rootName,n.render();const l=s.element;this.setEditableElement(s.name,l),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(l),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),o=e.sourceElement,s=e.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");s&&lp({view:t,element:n,text:s,isDirectHost:!1,keepOnFocus:!0})}}var bb=g(3143),vE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(bb.Z,vE),bb.Z.locals;class CE extends sE{constructor(e,t,n={}){super(e),this.stickyPanel=new wE(e),this.toolbar=new sh(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new cE(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class hh extends wp{constructor(e,t={}){if(!vi(e)&&t.initialData!==void 0)throw new C("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return vi(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(e)),vi(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new CE(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new AE(this,o),function(s){if(!Bi(s.updateSourceElement))throw new C("attachtoform-missing-elementapi-interface",s);const a=s.sourceElement;if(a&&a.tagName.toLowerCase()==="textarea"&&a.form){let l;const u=a.form,m=()=>s.updateSourceElement();Bi(u.submit)&&(l=u.submit,u.submit=()=>{m(),l.apply(u)}),u.addEventListener("submit",m),s.on("destroy",()=>{u.removeEventListener("submit",m),l&&(u.submit=l)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const o=new this(e,t);n(o.initPlugins().then(()=>o.ui.init(vi(e)?e:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}ce(hh,L1),ce(hh,z1);class yE{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),o=Array.from(t.items||[]);return n.length?n:o.filter(s=>s.kind==="file").map(s=>s.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class gh extends Eo{constructor(e){super(e);const t=this.document;function n(o){return(s,a)=>{a.preventDefault();const l=a.dropRange?[a.dropRange]:null,u=new y(t,o);t.fire(u,{dataTransfer:a.dataTransfer,method:s.name,targetRanges:l,target:a.target}),u.stop.called&&a.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new yE(e.clipboardData?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,o){const s=o.target.ownerDocument,a=o.clientX,l=o.clientY;let u;return s.caretRangeFromPoint&&s.caretRangeFromPoint(a,l)?u=s.caretRangeFromPoint(a,l):o.rangeParent&&(u=s.createRange(),u.setStart(o.rangeParent,o.rangeOffset),u.collapse(!0)),u?n.domConverter.domRangeToView(u):null}(this.view,e)),this.fire(e.type,e,t)}}const kb=["figcaption","li"];function wb(r){let e="";if(r.is("$text")||r.is("$textProxy"))e=r.data;else if(r.is("element","img")&&r.hasAttribute("alt"))e=r.getAttribute("alt");else if(r.is("element","br"))e=`
`;else{let t=null;for(const n of r.getChildren()){const o=wb(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(kb.includes(t.name)||kb.includes(n.name)?e+=`
`:e+=`

* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(i,c){(function(d,h){i.exports=h()})(Ro,function(){const d="SweetAlert2:",h=_=>{const A=[];for(let D=0;D<_.length;D++)A.indexOf(_[D])===-1&&A.push(_[D]);return A},g=_=>_.charAt(0).toUpperCase()+_.slice(1),w=_=>Array.prototype.slice.call(_),k=_=>{console.warn("".concat(d," ").concat(typeof _=="object"?_.join(" "):_))},y=_=>{console.error("".concat(d," ").concat(_))},b=[],I=_=>{b.includes(_)||(b.push(_),k(_))},E=(_,A)=>{I('"'.concat(_,'" is deprecated and will be removed in the next major release. Please use "').concat(A,'" instead.'))},x=_=>typeof _=="function"?_():_,C=_=>_&&typeof _.toPromise=="function",P=_=>C(_)?_.toPromise():Promise.resolve(_),R=_=>_&&Promise.resolve(_)===_,U={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},G=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],W={},F=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],H=_=>Object.prototype.hasOwnProperty.call(U,_),J=_=>G.indexOf(_)!==-1,ee=_=>W[_],se=_=>{H(_)||k('Unknown parameter "'.concat(_,'"'))},te=_=>{F.includes(_)&&k('The parameter "'.concat(_,'" is incompatible with toasts'))},q=_=>{ee(_)&&E(_,ee(_))},ne=_=>{!_.backdrop&&_.allowOutsideClick&&k('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const A in _)se(A),_.toast&&te(A),q(A)},fe="swal2-",de=_=>{const A={};for(const D in _)A[_[D]]=fe+_[D];return A},z=de(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Ce=de(["success","warning","info","question","error"]),ie=()=>document.body.querySelector(".".concat(z.container)),be=_=>{const A=ie();return A?A.querySelector(_):null},Q=_=>be(".".concat(_)),Z=()=>Q(z.popup),ke=()=>Q(z.icon),_e=()=>Q(z.title),Me=()=>Q(z["html-container"]),ye=()=>Q(z.image),lt=()=>Q(z["progress-steps"]),Ft=()=>Q(z["validation-message"]),Je=()=>be(".".concat(z.actions," .").concat(z.confirm)),j=()=>be(".".concat(z.actions," .").concat(z.deny)),X=()=>Q(z["input-label"]),oe=()=>be(".".concat(z.loader)),ce=()=>be(".".concat(z.actions," .").concat(z.cancel)),Y=()=>Q(z.actions),Oe=()=>Q(z.footer),he=()=>Q(z["timer-progress-bar"]),Ee=()=>Q(z.close),$e=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,$t=()=>{const _=w(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((D,N)=>{const re=parseInt(D.getAttribute("tabindex")),Te=parseInt(N.getAttribute("tabindex"));return re>Te?1:re<Te?-1:0}),A=w(Z().querySelectorAll($e)).filter(D=>D.getAttribute("tabindex")!=="-1");return h(_.concat(A)).filter(D=>An(D))},_t=()=>!Sn(document.body,z["toast-shown"])&&!Sn(document.body,z["no-backdrop"]),Et=()=>Z()&&Sn(Z(),z.toast),cn=()=>Z().hasAttribute("data-loading"),xn={previousBodyPadding:null},Pt=(_,A)=>{if(_.textContent="",A){const N=new DOMParser().parseFromString(A,"text/html");w(N.querySelector("head").childNodes).forEach(re=>{_.appendChild(re)}),w(N.querySelector("body").childNodes).forEach(re=>{_.appendChild(re)})}},Sn=(_,A)=>{if(!A)return!1;const D=A.split(/\s+/);for(let N=0;N<D.length;N++)if(!_.classList.contains(D[N]))return!1;return!0},Un=(_,A)=>{w(_.classList).forEach(D=>{!Object.values(z).includes(D)&&!Object.values(Ce).includes(D)&&!Object.values(A.showClass).includes(D)&&_.classList.remove(D)})},tn=(_,A,D)=>{if(Un(_,A),A.customClass&&A.customClass[D]){if(typeof A.customClass[D]!="string"&&!A.customClass[D].forEach)return k("Invalid type of customClass.".concat(D,'! Expected string or iterable object, got "').concat(typeof A.customClass[D],'"'));Pe(_,A.customClass[D])}},Ni=(_,A)=>{if(!A)return null;switch(A){case"select":case"textarea":case"file":return _.querySelector(".".concat(z.popup," > .").concat(z[A]));case"checkbox":return _.querySelector(".".concat(z.popup," > .").concat(z.checkbox," input"));case"radio":return _.querySelector(".".concat(z.popup," > .").concat(z.radio," input:checked"))||_.querySelector(".".concat(z.popup," > .").concat(z.radio," input:first-child"));case"range":return _.querySelector(".".concat(z.popup," > .").concat(z.range," input"));default:return _.querySelector(".".concat(z.popup," > .").concat(z.input))}},It=_=>{if(_.focus(),_.type!=="file"){const A=_.value;_.value="",_.value=A}},fn=(_,A,D)=>{!_||!A||(typeof A=="string"&&(A=A.split(/\s+/).filter(Boolean)),A.forEach(N=>{Array.isArray(_)?_.forEach(re=>{D?re.classList.add(N):re.classList.remove(N)}):D?_.classList.add(N):_.classList.remove(N)}))},Pe=(_,A)=>{fn(_,A,!0)},Mn=(_,A)=>{fn(_,A,!1)},Hn=(_,A)=>{const D=w(_.childNodes);for(let N=0;N<D.length;N++)if(Sn(D[N],A))return D[N]},qt=(_,A,D)=>{D==="".concat(parseInt(D))&&(D=parseInt(D)),D||parseInt(D)===0?_.style[A]=typeof D=="number"?"".concat(D,"px"):D:_.style.removeProperty(A)},jt=function(_){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";_.style.display=A},Kt=_=>{_.style.display="none"},bs=(_,A,D,N)=>{const re=_.querySelector(A);re&&(re.style[D]=N)},Ar=(_,A,D)=>{A?jt(_,D):Kt(_)},An=_=>!!(_&&(_.offsetWidth||_.offsetHeight||_.getClientRects().length)),ln=()=>!An(Je())&&!An(j())&&!An(ce()),Va=_=>_.scrollHeight>_.clientHeight,lo=_=>{const A=window.getComputedStyle(_),D=parseFloat(A.getPropertyValue("animation-duration")||"0"),N=parseFloat(A.getPropertyValue("transition-duration")||"0");return D>0||N>0},uo=function(_){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const D=he();An(D)&&(A&&(D.style.transition="none",D.style.width="100%"),setTimeout(()=>{D.style.transition="width ".concat(_/1e3,"s linear"),D.style.width="0%"},10))},ld=()=>{const _=he(),A=parseInt(window.getComputedStyle(_).width);_.style.removeProperty("transition"),_.style.width="100%";const D=parseInt(window.getComputedStyle(_).width),N=A/D*100;_.style.removeProperty("transition"),_.style.width="".concat(N,"%")},Ua=()=>typeof window>"u"||typeof document>"u",dd=100,Re={},ud=()=>{Re.previousActiveElement&&Re.previousActiveElement.focus?(Re.previousActiveElement.focus(),Re.previousActiveElement=null):document.body&&document.body.focus()},ho=_=>new Promise(A=>{if(!_)return A();const D=window.scrollX,N=window.scrollY;Re.restoreFocusTimeout=setTimeout(()=>{ud(),A()},dd),window.scrollTo(D,N)}),vr=`
 <div aria-labelledby="`.concat(z.title,'" aria-describedby="').concat(z["html-container"],'" class="').concat(z.popup,`" tabindex="-1">
   <button type="button" class="`).concat(z.close,`"></button>
   <ul class="`).concat(z["progress-steps"],`"></ul>
   <div class="`).concat(z.icon,`"></div>
   <img class="`).concat(z.image,`" />
   <h2 class="`).concat(z.title,'" id="').concat(z.title,`"></h2>
   <div class="`).concat(z["html-container"],'" id="').concat(z["html-container"],`"></div>
   <input class="`).concat(z.input,`" />
   <input type="file" class="`).concat(z.file,`" />
   <div class="`).concat(z.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(z.select,`"></select>
   <div class="`).concat(z.radio,`"></div>
   <label for="`).concat(z.checkbox,'" class="').concat(z.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(z.label,`"></span>
   </label>
   <textarea class="`).concat(z.textarea,`"></textarea>
   <div class="`).concat(z["validation-message"],'" id="').concat(z["validation-message"],`"></div>
   <div class="`).concat(z.actions,`">
     <div class="`).concat(z.loader,`"></div>
     <button type="button" class="`).concat(z.confirm,`"></button>
     <button type="button" class="`).concat(z.deny,`"></button>
     <button type="button" class="`).concat(z.cancel,`"></button>
   </div>
   <div class="`).concat(z.footer,`"></div>
   <div class="`).concat(z["timer-progress-bar-container"],`">
     <div class="`).concat(z["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),hd=()=>{const _=ie();return _?(_.remove(),Mn([document.documentElement,document.body],[z["no-backdrop"],z["toast-shown"],z["has-column"]]),!0):!1},Li=()=>{Re.currentInstance.resetValidationMessage()},gd=()=>{const _=Z(),A=Hn(_,z.input),D=Hn(_,z.file),N=_.querySelector(".".concat(z.range," input")),re=_.querySelector(".".concat(z.range," output")),Te=Hn(_,z.select),Ot=_.querySelector(".".concat(z.checkbox," input")),on=Hn(_,z.textarea);A.oninput=Li,D.onchange=Li,Te.onchange=Li,Ot.onchange=Li,on.oninput=Li,N.oninput=()=>{Li(),re.value=N.value},N.onchange=()=>{Li(),N.nextSibling.value=N.value}},md=_=>typeof _=="string"?document.querySelector(_):_,Bi=_=>{const A=Z();A.setAttribute("role",_.toast?"alert":"dialog"),A.setAttribute("aria-live",_.toast?"polite":"assertive"),_.toast||A.setAttribute("aria-modal","true")},ks=_=>{window.getComputedStyle(_).direction==="rtl"&&Pe(ie(),z.rtl)},Ha=_=>{const A=hd();if(Ua()){y("SweetAlert2 requires document to initialize");return}const D=document.createElement("div");D.className=z.container,A&&Pe(D,z["no-transition"]),Pt(D,vr);const N=md(_.target);N.appendChild(D),Bi(_),ks(N),gd()},ws=(_,A)=>{_ instanceof HTMLElement?A.appendChild(_):typeof _=="object"?fd(_,A):_&&Pt(A,_)},fd=(_,A)=>{_.jquery?zi(A,_):Pt(A,_.toString())},zi=(_,A)=>{if(_.textContent="",0 in A)for(let D=0;D in A;D++)_.appendChild(A[D].cloneNode(!0));else _.appendChild(A.cloneNode(!0))},jo=(()=>{if(Ua())return!1;const _=document.createElement("div"),A={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const D in A)if(Object.prototype.hasOwnProperty.call(A,D)&&typeof _.style[D]<"u")return A[D];return!1})(),pd=()=>{const _=document.createElement("div");_.className=z["scrollbar-measure"],document.body.appendChild(_);const A=_.getBoundingClientRect().width-_.clientWidth;return document.body.removeChild(_),A},bd=(_,A)=>{const D=Y(),N=oe();!A.showConfirmButton&&!A.showDenyButton&&!A.showCancelButton?Kt(D):jt(D),tn(D,A,"actions"),kd(D,N,A),Pt(N,A.loaderHtml),tn(N,A,"loader")};function kd(_,A,D){const N=Je(),re=j(),Te=ce();_s(N,"confirm",D),_s(re,"deny",D),_s(Te,"cancel",D),wd(N,re,Te,D),D.reverseButtons&&(D.toast?(_.insertBefore(Te,N),_.insertBefore(re,N)):(_.insertBefore(Te,A),_.insertBefore(re,A),_.insertBefore(N,A)))}function wd(_,A,D,N){if(!N.buttonsStyling)return Mn([_,A,D],z.styled);Pe([_,A,D],z.styled),N.confirmButtonColor&&(_.style.backgroundColor=N.confirmButtonColor,Pe(_,z["default-outline"])),N.denyButtonColor&&(A.style.backgroundColor=N.denyButtonColor,Pe(A,z["default-outline"])),N.cancelButtonColor&&(D.style.backgroundColor=N.cancelButtonColor,Pe(D,z["default-outline"]))}function _s(_,A,D){Ar(_,D["show".concat(g(A),"Button")],"inline-block"),Pt(_,D["".concat(A,"ButtonText")]),_.setAttribute("aria-label",D["".concat(A,"ButtonAriaLabel")]),_.className=z[A],tn(_,D,"".concat(A,"Button")),Pe(_,D["".concat(A,"ButtonClass")])}function _d(_,A){typeof A=="string"?_.style.background=A:A||Pe([document.documentElement,document.body],z["no-backdrop"])}function Ad(_,A){A in z?Pe(_,z[A]):(k('The "position" parameter is not valid, defaulting to "center"'),Pe(_,z.center))}function Fi(_,A){if(A&&typeof A=="string"){const D="grow-".concat(A);D in z&&Pe(_,z[D])}}const Vo=(_,A)=>{const D=ie();!D||(_d(D,A.backdrop),Ad(D,A.position),Fi(D,A.grow),tn(D,A,"container"))};var Ne={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const vd=["input","file","range","select","radio","checkbox","textarea"],Cd=(_,A)=>{const D=Z(),N=Ne.innerParams.get(_),re=!N||A.input!==N.input;vd.forEach(Te=>{const Ot=z[Te],on=Hn(D,Ot);Id(Te,A.inputAttributes),on.className=Ot,re&&Kt(on)}),A.input&&(re&&yd(A),Td(A))},yd=_=>{if(!dn[_.input])return y('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(_.input,'"'));const A=vs(_.input),D=dn[_.input](A,_);jt(D),setTimeout(()=>{It(D)})},Ed=_=>{for(let A=0;A<_.attributes.length;A++){const D=_.attributes[A].name;["type","value","style"].includes(D)||_.removeAttribute(D)}},Id=(_,A)=>{const D=Ni(Z(),_);if(!!D){Ed(D);for(const N in A)D.setAttribute(N,A[N])}},Td=_=>{const A=vs(_.input);_.customClass&&Pe(A,_.customClass.input)},As=(_,A)=>{(!_.placeholder||A.inputPlaceholder)&&(_.placeholder=A.inputPlaceholder)},Gn=(_,A,D)=>{if(D.inputLabel){_.id=z.input;const N=document.createElement("label"),re=z["input-label"];N.setAttribute("for",_.id),N.className=re,Pe(N,D.customClass.inputLabel),N.innerText=D.inputLabel,A.insertAdjacentElement("beforebegin",N)}},vs=_=>{const A=z[_]?z[_]:z.input;return Hn(Z(),A)},dn={};dn.text=dn.email=dn.password=dn.number=dn.tel=dn.url=(_,A)=>(typeof A.inputValue=="string"||typeof A.inputValue=="number"?_.value=A.inputValue:R(A.inputValue)||k('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof A.inputValue,'"')),Gn(_,_,A),As(_,A),_.type=A.input,_),dn.file=(_,A)=>(Gn(_,_,A),As(_,A),_),dn.range=(_,A)=>{const D=_.querySelector("input"),N=_.querySelector("output");return D.value=A.inputValue,D.type=A.input,N.value=A.inputValue,Gn(D,_,A),_},dn.select=(_,A)=>{if(_.textContent="",A.inputPlaceholder){const D=document.createElement("option");Pt(D,A.inputPlaceholder),D.value="",D.disabled=!0,D.selected=!0,_.appendChild(D)}return Gn(_,_,A),_},dn.radio=_=>(_.textContent="",_),dn.checkbox=(_,A)=>{const D=Ni(Z(),"checkbox");D.value="1",D.id=z.checkbox,D.checked=Boolean(A.inputValue);const N=_.querySelector("span");return Pt(N,A.inputPlaceholder),_},dn.textarea=(_,A)=>{_.value=A.inputValue,As(_,A),Gn(_,_,A);const D=N=>parseInt(window.getComputedStyle(N).marginLeft)+parseInt(window.getComputedStyle(N).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const N=parseInt(window.getComputedStyle(Z()).width),re=()=>{const Te=_.offsetWidth+D(_);Te>N?Z().style.width="".concat(Te,"px"):Z().style.width=null};new MutationObserver(re).observe(_,{attributes:!0,attributeFilter:["style"]})}}),_};const Dd=(_,A)=>{const D=Me();tn(D,A,"htmlContainer"),A.html?(ws(A.html,D),jt(D,"block")):A.text?(D.textContent=A.text,jt(D,"block")):Kt(D),Cd(_,A)},Cr=(_,A)=>{const D=Oe();Ar(D,A.footer),A.footer&&ws(A.footer,D),tn(D,A,"footer")},xd=(_,A)=>{const D=Ee();Pt(D,A.closeButtonHtml),tn(D,A,"closeButton"),Ar(D,A.showCloseButton),D.setAttribute("aria-label",A.closeButtonAriaLabel)},Sd=(_,A)=>{const D=Ne.innerParams.get(_),N=ke();if(D&&A.icon===D.icon){Wa(N,A),Ga(N,A);return}if(!A.icon&&!A.iconHtml)return Kt(N);if(A.icon&&Object.keys(Ce).indexOf(A.icon)===-1)return y('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(A.icon,'"')),Kt(N);jt(N),Wa(N,A),Ga(N,A),Pe(N,A.showClass.icon)},Ga=(_,A)=>{for(const D in Ce)A.icon!==D&&Mn(_,Ce[D]);Pe(_,Ce[A.icon]),mo(_,A),Md(),tn(_,A,"icon")},Md=()=>{const _=Z(),A=window.getComputedStyle(_).getPropertyValue("background-color"),D=_.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let N=0;N<D.length;N++)D[N].style.backgroundColor=A},go=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,yr=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Wa=(_,A)=>{_.textContent="",A.iconHtml?Pt(_,fo(A.iconHtml)):A.icon==="success"?Pt(_,go):A.icon==="error"?Pt(_,yr):Pt(_,fo({question:"?",warning:"!",info:"i"}[A.icon]))},mo=(_,A)=>{if(!!A.iconColor){_.style.color=A.iconColor,_.style.borderColor=A.iconColor;for(const D of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])bs(_,D,"backgroundColor",A.iconColor);bs(_,".swal2-success-ring","borderColor",A.iconColor)}},fo=_=>'<div class="'.concat(z["icon-content"],'">').concat(_,"</div>"),Pd=(_,A)=>{const D=ye();if(!A.imageUrl)return Kt(D);jt(D,""),D.setAttribute("src",A.imageUrl),D.setAttribute("alt",A.imageAlt),qt(D,"width",A.imageWidth),qt(D,"height",A.imageHeight),D.className=z.image,tn(D,A,"image")},Er=_=>{const A=document.createElement("li");return Pe(A,z["progress-step"]),Pt(A,_),A},Cs=_=>{const A=document.createElement("li");return Pe(A,z["progress-step-line"]),_.progressStepsDistance&&(A.style.width=_.progressStepsDistance),A},Od=(_,A)=>{const D=lt();if(!A.progressSteps||A.progressSteps.length===0)return Kt(D);jt(D),D.textContent="",A.currentProgressStep>=A.progressSteps.length&&k("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),A.progressSteps.forEach((N,re)=>{const Te=Er(N);if(D.appendChild(Te),re===A.currentProgressStep&&Pe(Te,z["active-progress-step"]),re!==A.progressSteps.length-1){const Ot=Cs(A);D.appendChild(Ot)}})},ys=(_,A)=>{const D=_e();Ar(D,A.title||A.titleText,"block"),A.title&&ws(A.title,D),A.titleText&&(D.innerText=A.titleText),tn(D,A,"title")},po=(_,A)=>{const D=ie(),N=Z();A.toast?(qt(D,"width",A.width),N.style.width="100%",N.insertBefore(oe(),ke())):qt(N,"width",A.width),qt(N,"padding",A.padding),A.color&&(N.style.color=A.color),A.background&&(N.style.background=A.background),Kt(Ft()),Rd(N,A)},Rd=(_,A)=>{_.className="".concat(z.popup," ").concat(An(_)?A.showClass.popup:""),A.toast?(Pe([document.documentElement,document.body],z["toast-shown"]),Pe(_,z.toast)):Pe(_,z.modal),tn(_,A,"popup"),typeof A.customClass=="string"&&Pe(_,A.customClass),A.icon&&Pe(_,z["icon-".concat(A.icon)])},Es=(_,A)=>{po(_,A),Vo(_,A),Od(_,A),Sd(_,A),Pd(_,A),ys(_,A),xd(_,A),Dd(_,A),bd(_,A),Cr(_,A),typeof A.didRender=="function"&&A.didRender(Z())},ji=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Nd=()=>{w(document.body.children).forEach(A=>{A===ie()||A.contains(ie())||(A.hasAttribute("aria-hidden")&&A.setAttribute("data-previous-aria-hidden",A.getAttribute("aria-hidden")),A.setAttribute("aria-hidden","true"))})},Ya=()=>{w(document.body.children).forEach(A=>{A.hasAttribute("data-previous-aria-hidden")?(A.setAttribute("aria-hidden",A.getAttribute("data-previous-aria-hidden")),A.removeAttribute("data-previous-aria-hidden")):A.removeAttribute("aria-hidden")})},Ir=["swal-title","swal-html","swal-footer"],nn=_=>{const A=typeof _.template=="string"?document.querySelector(_.template):_.template;if(!A)return{};const D=A.content;return Is(D),Object.assign(Ld(D),$a(D),qa(D),Ka(D),Uo(D),Bd(D,Ir))},Ld=_=>{const A={};return w(_.querySelectorAll("swal-param")).forEach(D=>{Ai(D,["name","value"]);const N=D.getAttribute("name"),re=D.getAttribute("value");typeof U[N]=="boolean"&&re==="false"&&(A[N]=!1),typeof U[N]=="object"&&(A[N]=JSON.parse(re))}),A},$a=_=>{const A={};return w(_.querySelectorAll("swal-button")).forEach(D=>{Ai(D,["type","color","aria-label"]);const N=D.getAttribute("type");A["".concat(N,"ButtonText")]=D.innerHTML,A["show".concat(g(N),"Button")]=!0,D.hasAttribute("color")&&(A["".concat(N,"ButtonColor")]=D.getAttribute("color")),D.hasAttribute("aria-label")&&(A["".concat(N,"ButtonAriaLabel")]=D.getAttribute("aria-label"))}),A},qa=_=>{const A={},D=_.querySelector("swal-image");return D&&(Ai(D,["src","width","height","alt"]),D.hasAttribute("src")&&(A.imageUrl=D.getAttribute("src")),D.hasAttribute("width")&&(A.imageWidth=D.getAttribute("width")),D.hasAttribute("height")&&(A.imageHeight=D.getAttribute("height")),D.hasAttribute("alt")&&(A.imageAlt=D.getAttribute("alt"))),A},Ka=_=>{const A={},D=_.querySelector("swal-icon");return D&&(Ai(D,["type","color"]),D.hasAttribute("type")&&(A.icon=D.getAttribute("type")),D.hasAttribute("color")&&(A.iconColor=D.getAttribute("color")),A.iconHtml=D.innerHTML),A},Uo=_=>{const A={},D=_.querySelector("swal-input");D&&(Ai(D,["type","label","placeholder","value"]),A.input=D.getAttribute("type")||"text",D.hasAttribute("label")&&(A.inputLabel=D.getAttribute("label")),D.hasAttribute("placeholder")&&(A.inputPlaceholder=D.getAttribute("placeholder")),D.hasAttribute("value")&&(A.inputValue=D.getAttribute("value")));const N=_.querySelectorAll("swal-input-option");return N.length&&(A.inputOptions={},w(N).forEach(re=>{Ai(re,["value"]);const Te=re.getAttribute("value"),Ot=re.innerHTML;A.inputOptions[Te]=Ot})),A},Bd=(_,A)=>{const D={};for(const N in A){const re=A[N],Te=_.querySelector(re);Te&&(Ai(Te,[]),D[re.replace(/^swal-/,"")]=Te.innerHTML.trim())}return D},Is=_=>{const A=Ir.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);w(_.children).forEach(D=>{const N=D.tagName.toLowerCase();A.indexOf(N)===-1&&k("Unrecognized element <".concat(N,">"))})},Ai=(_,A)=>{w(_.attributes).forEach(D=>{A.indexOf(D.name)===-1&&k(['Unrecognized attribute "'.concat(D.name,'" on <').concat(_.tagName.toLowerCase(),">."),"".concat(A.length?"Allowed attributes are: ".concat(A.join(", ")):"To set the value, use HTML within the element.")])})};var ot={email:(_,A)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(_)?Promise.resolve():Promise.resolve(A||"Invalid email address"),url:(_,A)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(_)?Promise.resolve():Promise.resolve(A||"Invalid URL")};function zd(_){_.inputValidator||Object.keys(ot).forEach(A=>{_.input===A&&(_.inputValidator=ot[A])})}function Ts(_){(!_.target||typeof _.target=="string"&&!document.querySelector(_.target)||typeof _.target!="string"&&!_.target.appendChild)&&(k('Target parameter is not valid, defaulting to "body"'),_.target="body")}function Qa(_){zd(_),_.showLoaderOnConfirm&&!_.preConfirm&&k(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Ts(_),typeof _.title=="string"&&(_.title=_.title.split(`
`).join("<br />")),Ha(_)}class Ho{constructor(A,D){this.callback=A,this.remaining=D,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(A){const D=this.running;return D&&this.stop(),this.remaining+=A,D&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ds=()=>{xn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(xn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(xn.previousBodyPadding+pd(),"px"))},bo=()=>{xn.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(xn.previousBodyPadding,"px"),xn.previousBodyPadding=null)},Za=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Sn(document.body,z.iosfix)){const A=document.body.scrollTop;document.body.style.top="".concat(A*-1,"px"),Pe(document.body,z.iosfix),Fd(),xs()}},xs=()=>{const _=navigator.userAgent,A=!!_.match(/iPad/i)||!!_.match(/iPhone/i),D=!!_.match(/WebKit/i);A&&D&&!_.match(/CriOS/i)&&Z().scrollHeight>window.innerHeight-44&&(ie().style.paddingBottom="".concat(44,"px"))},Fd=()=>{const _=ie();let A;_.ontouchstart=D=>{A=Xa(D)},_.ontouchmove=D=>{A&&(D.preventDefault(),D.stopPropagation())}},Xa=_=>{const A=_.target,D=ie();return jd(_)||Ss(_)?!1:A===D||!Va(D)&&A.tagName!=="INPUT"&&A.tagName!=="TEXTAREA"&&!(Va(Me())&&Me().contains(A))},jd=_=>_.touches&&_.touches.length&&_.touches[0].touchType==="stylus",Ss=_=>_.touches&&_.touches.length>1,Vd=()=>{if(Sn(document.body,z.iosfix)){const _=parseInt(document.body.style.top,10);Mn(document.body,z.iosfix),document.body.style.top="",document.body.scrollTop=_*-1}},Ja=10,Ud=_=>{const A=ie(),D=Z();typeof _.willOpen=="function"&&_.willOpen(D);const re=window.getComputedStyle(document.body).overflowY;Gd(A,D,_),setTimeout(()=>{Ms(A,D)},Ja),_t()&&(Hd(A,_.scrollbarPadding,re),Nd()),!Et()&&!Re.previousActiveElement&&(Re.previousActiveElement=document.activeElement),typeof _.didOpen=="function"&&setTimeout(()=>_.didOpen(D)),Mn(A,z["no-transition"])},Go=_=>{const A=Z();if(_.target!==A)return;const D=ie();A.removeEventListener(jo,Go),D.style.overflowY="auto"},Ms=(_,A)=>{jo&&lo(A)?(_.style.overflowY="hidden",A.addEventListener(jo,Go)):_.style.overflowY="auto"},Hd=(_,A,D)=>{Za(),A&&D!=="hidden"&&Ds(),setTimeout(()=>{_.scrollTop=0})},Gd=(_,A,D)=>{Pe(_,D.showClass.backdrop),A.style.setProperty("opacity","0","important"),jt(A,"grid"),setTimeout(()=>{Pe(A,D.showClass.popup),A.style.removeProperty("opacity")},Ja),Pe([document.documentElement,document.body],z.shown),D.heightAuto&&D.backdrop&&!D.toast&&Pe([document.documentElement,document.body],z["height-auto"])},ko=_=>{let A=Z();A||new Pr,A=Z();const D=oe();Et()?Kt(ke()):Wd(A,_),jt(D),A.setAttribute("data-loading",!0),A.setAttribute("aria-busy",!0),A.focus()},Wd=(_,A)=>{const D=Y(),N=oe();!A&&An(Je())&&(A=Je()),jt(D),A&&(Kt(A),N.setAttribute("data-button-to-replace",A.className)),N.parentNode.insertBefore(N,A),Pe([_,D],z.loading)},wo=(_,A)=>{A.input==="select"||A.input==="radio"?ic(_,A):["text","email","number","tel","textarea"].includes(A.input)&&(C(A.inputValue)||R(A.inputValue))&&(ko(Je()),oc(_,A))},Yd=(_,A)=>{const D=_.getInput();if(!D)return null;switch(A.input){case"checkbox":return ec(D);case"radio":return tc(D);case"file":return nc(D);default:return A.inputAutoTrim?D.value.trim():D.value}},ec=_=>_.checked?1:0,tc=_=>_.checked?_.value:null,nc=_=>_.files.length?_.getAttribute("multiple")!==null?_.files:_.files[0]:null,ic=(_,A)=>{const D=Z(),N=re=>rc[A.input](D,Ps(re),A);C(A.inputOptions)||R(A.inputOptions)?(ko(Je()),P(A.inputOptions).then(re=>{_.hideLoading(),N(re)})):typeof A.inputOptions=="object"?N(A.inputOptions):y("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof A.inputOptions))},oc=(_,A)=>{const D=_.getInput();Kt(D),P(A.inputValue).then(N=>{D.value=A.input==="number"?parseFloat(N)||0:"".concat(N),jt(D),D.focus(),_.hideLoading()}).catch(N=>{y("Error in inputValue promise: ".concat(N)),D.value="",jt(D),D.focus(),_.hideLoading()})},rc={select:(_,A,D)=>{const N=Hn(_,z.select),re=(Te,Ot,on)=>{const Vt=document.createElement("option");Vt.value=on,Pt(Vt,Ot),Vt.selected=Os(on,D.inputValue),Te.appendChild(Vt)};A.forEach(Te=>{const Ot=Te[0],on=Te[1];if(Array.isArray(on)){const Vt=document.createElement("optgroup");Vt.label=Ot,Vt.disabled=!1,N.appendChild(Vt),on.forEach(Co=>re(Vt,Co[1],Co[0]))}else re(N,on,Ot)}),N.focus()},radio:(_,A,D)=>{const N=Hn(_,z.radio);A.forEach(Te=>{const Ot=Te[0],on=Te[1],Vt=document.createElement("input"),Co=document.createElement("label");Vt.type="radio",Vt.name=z.radio,Vt.value=Ot,Os(Ot,D.inputValue)&&(Vt.checked=!0);const qo=document.createElement("span");Pt(qo,on),qo.className=z.label,Co.appendChild(Vt),Co.appendChild(qo),N.appendChild(Co)});const re=N.querySelectorAll("input");re.length&&re[0].focus()}},Ps=_=>{const A=[];return typeof Map<"u"&&_ instanceof Map?_.forEach((D,N)=>{let re=D;typeof re=="object"&&(re=Ps(re)),A.push([N,re])}):Object.keys(_).forEach(D=>{let N=_[D];typeof N=="object"&&(N=Ps(N)),A.push([D,N])}),A},Os=(_,A)=>A&&A.toString()===_.toString(),$d=_=>{const A=Ne.innerParams.get(_);_.disableButtons(),A.input?ac(_,"confirm"):Wo(_,!0)},sc=_=>{const A=Ne.innerParams.get(_);_.disableButtons(),A.returnInputValueOnDeny?ac(_,"deny"):Tr(_,!1)},Rs=(_,A)=>{_.disableButtons(),A(ji.cancel)},ac=(_,A)=>{const D=Ne.innerParams.get(_);if(!D.input)return y('The "input" parameter is needed to be set when using returnInputValueOn'.concat(g(A)));const N=Yd(_,D);D.inputValidator?cc(_,N,A):_.getInput().checkValidity()?A==="deny"?Tr(_,N):Wo(_,N):(_.enableButtons(),_.showValidationMessage(D.validationMessage))},cc=(_,A,D)=>{const N=Ne.innerParams.get(_);_.disableInput(),Promise.resolve().then(()=>P(N.inputValidator(A,N.validationMessage))).then(Te=>{_.enableButtons(),_.enableInput(),Te?_.showValidationMessage(Te):D==="deny"?Tr(_,A):Wo(_,A)})},Tr=(_,A)=>{const D=Ne.innerParams.get(_||void 0);D.showLoaderOnDeny&&ko(j()),D.preDeny?(Ne.awaitingPromise.set(_||void 0,!0),Promise.resolve().then(()=>P(D.preDeny(A,D.validationMessage))).then(re=>{re===!1?_.hideLoading():_.closePopup({isDenied:!0,value:typeof re>"u"?A:re})}).catch(re=>Ns(_||void 0,re))):_.closePopup({isDenied:!0,value:A})},lc=(_,A)=>{_.closePopup({isConfirmed:!0,value:A})},Ns=(_,A)=>{_.rejectPromise(A)},Wo=(_,A)=>{const D=Ne.innerParams.get(_||void 0);D.showLoaderOnConfirm&&ko(),D.preConfirm?(_.resetValidationMessage(),Ne.awaitingPromise.set(_||void 0,!0),Promise.resolve().then(()=>P(D.preConfirm(A,D.validationMessage))).then(re=>{An(Ft())||re===!1?_.hideLoading():lc(_,typeof re>"u"?A:re)}).catch(re=>Ns(_||void 0,re))):lc(_,A)},qd=(_,A,D)=>{Ne.innerParams.get(_).toast?Ls(_,A,D):(zs(A),dc(A),uc(_,A,D))},Ls=(_,A,D)=>{A.popup.onclick=()=>{const N=Ne.innerParams.get(_);N&&(Bs(N)||N.timer||N.input)||D(ji.close)}},Bs=_=>_.showConfirmButton||_.showDenyButton||_.showCancelButton||_.showCloseButton;let _o=!1;const zs=_=>{_.popup.onmousedown=()=>{_.container.onmouseup=function(A){_.container.onmouseup=void 0,A.target===_.container&&(_o=!0)}}},dc=_=>{_.container.onmousedown=()=>{_.popup.onmouseup=function(A){_.popup.onmouseup=void 0,(A.target===_.popup||_.popup.contains(A.target))&&(_o=!0)}}},uc=(_,A,D)=>{A.container.onclick=N=>{const re=Ne.innerParams.get(_);if(_o){_o=!1;return}N.target===A.container&&x(re.allowOutsideClick)&&D(ji.backdrop)}},hc=()=>An(Z()),Fs=()=>Je()&&Je().click(),gc=()=>j()&&j().click(),Kd=()=>ce()&&ce().click(),Qd=(_,A,D,N)=>{A.keydownTarget&&A.keydownHandlerAdded&&(A.keydownTarget.removeEventListener("keydown",A.keydownHandler,{capture:A.keydownListenerCapture}),A.keydownHandlerAdded=!1),D.toast||(A.keydownHandler=re=>Vi(_,re,N),A.keydownTarget=D.keydownListenerCapture?window:Z(),A.keydownListenerCapture=D.keydownListenerCapture,A.keydownTarget.addEventListener("keydown",A.keydownHandler,{capture:A.keydownListenerCapture}),A.keydownHandlerAdded=!0)},js=(_,A,D)=>{const N=$t();if(N.length)return A=A+D,A===N.length?A=0:A===-1&&(A=N.length-1),N[A].focus();Z().focus()},mc=["ArrowRight","ArrowDown"],Zd=["ArrowLeft","ArrowUp"],Vi=(_,A,D)=>{const N=Ne.innerParams.get(_);!N||(N.stopKeydownPropagation&&A.stopPropagation(),A.key==="Enter"?Yo(_,A,N):A.key==="Tab"?Xd(A,N):[...mc,...Zd].includes(A.key)?Jd(A.key):A.key==="Escape"&&Dr(A,N,D))},Yo=(_,A,D)=>{if(!(!x(D.allowEnterKey)||A.isComposing)&&A.target&&_.getInput()&&A.target.outerHTML===_.getInput().outerHTML){if(["textarea","file"].includes(D.input))return;Fs(),A.preventDefault()}},Xd=(_,A)=>{const D=_.target,N=$t();let re=-1;for(let Te=0;Te<N.length;Te++)if(D===N[Te]){re=Te;break}_.shiftKey?js(A,re,-1):js(A,re,1),_.stopPropagation(),_.preventDefault()},Jd=_=>{const A=Je(),D=j(),N=ce();if(![A,D,N].includes(document.activeElement))return;const re=mc.includes(_)?"nextElementSibling":"previousElementSibling",Te=document.activeElement[re];Te instanceof HTMLElement&&Te.focus()},Dr=(_,A,D)=>{x(A.allowEscapeKey)&&(_.preventDefault(),D(ji.esc))},Vs=_=>typeof _=="object"&&_.jquery,fc=_=>_ instanceof Element||Vs(_),eu=_=>{const A={};return typeof _[0]=="object"&&!fc(_[0])?Object.assign(A,_[0]):["title","html","icon"].forEach((D,N)=>{const re=_[N];typeof re=="string"||fc(re)?A[D]=re:re!==void 0&&y("Unexpected type of ".concat(D,'! Expected "string" or "Element", got ').concat(typeof re))}),A};function tu(){const _=this;for(var A=arguments.length,D=new Array(A),N=0;N<A;N++)D[N]=arguments[N];return new _(...D)}function pc(_){class A extends this{_main(N,re){return super._main(N,Object.assign({},_,re))}}return A}const bc=()=>Re.timeout&&Re.timeout.getTimerLeft(),kc=()=>{if(Re.timeout)return ld(),Re.timeout.stop()},Us=()=>{if(Re.timeout){const _=Re.timeout.start();return uo(_),_}},nu=()=>{const _=Re.timeout;return _&&(_.running?kc():Us())},wc=_=>{if(Re.timeout){const A=Re.timeout.increase(_);return uo(A,!0),A}},iu=()=>Re.timeout&&Re.timeout.isRunning();let Hs=!1;const Gs={};function _c(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Gs[_]=this,Hs||(document.body.addEventListener("click",ou),Hs=!0)}const ou=_=>{for(let A=_.target;A&&A!==document;A=A.parentNode)for(const D in Gs){const N=A.getAttribute(D);if(N){Gs[D].fire({template:N});return}}};var ru=Object.freeze({isValidParameter:H,isUpdatableParameter:J,isDeprecatedParameter:ee,argsToParams:eu,isVisible:hc,clickConfirm:Fs,clickDeny:gc,clickCancel:Kd,getContainer:ie,getPopup:Z,getTitle:_e,getHtmlContainer:Me,getImage:ye,getIcon:ke,getInputLabel:X,getCloseButton:Ee,getActions:Y,getConfirmButton:Je,getDenyButton:j,getCancelButton:ce,getLoader:oe,getFooter:Oe,getTimerProgressBar:he,getFocusableElements:$t,getValidationMessage:Ft,isLoading:cn,fire:tu,mixin:pc,showLoading:ko,enableLoading:ko,getTimerLeft:bc,stopTimer:kc,resumeTimer:Us,toggleTimer:nu,increaseTimer:wc,isTimerRunning:iu,bindClickHandler:_c});function Ws(){const _=Ne.innerParams.get(this);if(!_)return;const A=Ne.domCache.get(this);Kt(A.loader),Et()?_.icon&&jt(ke()):su(A),Mn([A.popup,A.actions],z.loading),A.popup.removeAttribute("aria-busy"),A.popup.removeAttribute("data-loading"),A.confirmButton.disabled=!1,A.denyButton.disabled=!1,A.cancelButton.disabled=!1}const su=_=>{const A=_.popup.getElementsByClassName(_.loader.getAttribute("data-button-to-replace"));A.length?jt(A[0],"inline-block"):ln()&&Kt(_.actions)};function Ac(_){const A=Ne.innerParams.get(_||this),D=Ne.domCache.get(_||this);return D?Ni(D.popup,A.input):null}var Ao={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function vc(_,A,D,N){Et()?xr(_,N):(ho(D).then(()=>xr(_,N)),Re.keydownTarget.removeEventListener("keydown",Re.keydownHandler,{capture:Re.keydownListenerCapture}),Re.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(A.setAttribute("style","display:none !important"),A.removeAttribute("class"),A.innerHTML=""):A.remove(),_t()&&(bo(),Vd(),Ya()),rt()}function rt(){Mn([document.documentElement,document.body],[z.shown,z["height-auto"],z["no-backdrop"],z["toast-shown"]])}function vo(_){_=au(_);const A=Ao.swalPromiseResolve.get(this),D=vi(this);this.isAwaitingPromise()?_.isDismissed||(Ys(this),A(_)):D&&A(_)}function Cc(){return!!Ne.awaitingPromise.get(this)}const vi=_=>{const A=Z();if(!A)return!1;const D=Ne.innerParams.get(_);if(!D||Sn(A,D.hideClass.popup))return!1;Mn(A,D.showClass.popup),Pe(A,D.hideClass.popup);const N=ie();return Mn(N,D.showClass.backdrop),Pe(N,D.hideClass.backdrop),pn(_,A,D),!0};function yc(_){const A=Ao.swalPromiseReject.get(this);Ys(this),A&&A(_)}const Ys=_=>{_.isAwaitingPromise()&&(Ne.awaitingPromise.delete(_),Ne.innerParams.get(_)||_._destroy())},au=_=>typeof _>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},_),pn=(_,A,D)=>{const N=ie(),re=jo&&lo(A);typeof D.willClose=="function"&&D.willClose(A),re?Pn(_,A,N,D.returnFocus,D.didClose):vc(_,N,D.returnFocus,D.didClose)},Pn=(_,A,D,N,re)=>{Re.swalCloseEventFinishedCallback=vc.bind(null,_,D,N,re),A.addEventListener(jo,function(Te){Te.target===A&&(Re.swalCloseEventFinishedCallback(),delete Re.swalCloseEventFinishedCallback)})},xr=(_,A)=>{setTimeout(()=>{typeof A=="function"&&A.bind(_.params)(),_._destroy()})};function Tt(_,A,D){const N=Ne.domCache.get(_);A.forEach(re=>{N[re].disabled=D})}function Sr(_,A){if(!_)return!1;if(_.type==="radio"){const N=_.parentNode.parentNode.querySelectorAll("input");for(let re=0;re<N.length;re++)N[re].disabled=A}else _.disabled=A}function Be(){Tt(this,["confirmButton","denyButton","cancelButton"],!1)}function cu(){Tt(this,["confirmButton","denyButton","cancelButton"],!0)}function lu(){return Sr(this.getInput(),!1)}function Ec(){return Sr(this.getInput(),!0)}function du(_){const A=Ne.domCache.get(this),D=Ne.innerParams.get(this);Pt(A.validationMessage,_),A.validationMessage.className=z["validation-message"],D.customClass&&D.customClass.validationMessage&&Pe(A.validationMessage,D.customClass.validationMessage),jt(A.validationMessage);const N=this.getInput();N&&(N.setAttribute("aria-invalid",!0),N.setAttribute("aria-describedby",z["validation-message"]),It(N),Pe(N,z.inputerror))}function uu(){const _=Ne.domCache.get(this);_.validationMessage&&Kt(_.validationMessage);const A=this.getInput();A&&(A.removeAttribute("aria-invalid"),A.removeAttribute("aria-describedby"),Mn(A,z.inputerror))}function $o(){return Ne.domCache.get(this).progressSteps}function Ui(_){const A=Z(),D=Ne.innerParams.get(this);if(!A||Sn(A,D.hideClass.popup))return k("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const N=Qt(_),re=Object.assign({},D,N);Es(this,re),Ne.innerParams.set(this,re),Object.defineProperties(this,{params:{value:Object.assign({},this.params,_),writable:!1,enumerable:!0}})}const Qt=_=>{const A={};return Object.keys(_).forEach(D=>{J(D)?A[D]=_[D]:k('Invalid parameter to update: "'.concat(D,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),A};function Ic(){const _=Ne.domCache.get(this),A=Ne.innerParams.get(this);if(!A){Ze(this);return}_.popup&&Re.swalCloseEventFinishedCallback&&(Re.swalCloseEventFinishedCallback(),delete Re.swalCloseEventFinishedCallback),Re.deferDisposalTimer&&(clearTimeout(Re.deferDisposalTimer),delete Re.deferDisposalTimer),typeof A.didDestroy=="function"&&A.didDestroy(),Hi(this)}const Hi=_=>{Ze(_),delete _.params,delete Re.keydownHandler,delete Re.keydownTarget,delete Re.currentInstance},Ze=_=>{_.isAwaitingPromise()?(vn(Ne,_),Ne.awaitingPromise.set(_,!0)):(vn(Ao,_),vn(Ne,_))},vn=(_,A)=>{for(const D in _)_[D].delete(A)};var On=Object.freeze({hideLoading:Ws,disableLoading:Ws,getInput:Ac,close:vo,isAwaitingPromise:Cc,rejectPromise:yc,closePopup:vo,closeModal:vo,closeToast:vo,enableButtons:Be,disableButtons:cu,enableInput:lu,disableInput:Ec,showValidationMessage:du,resetValidationMessage:uu,getProgressSteps:$o,update:Ui,_destroy:Ic});let Cn;class Gi{constructor(){if(typeof window>"u")return;Cn=this;for(var A=arguments.length,D=new Array(A),N=0;N<A;N++)D[N]=arguments[N];const re=Object.freeze(this.constructor.argsToParams(D));Object.defineProperties(this,{params:{value:re,writable:!1,enumerable:!0,configurable:!0}});const Te=this._main(this.params);Ne.promise.set(this,Te)}_main(A){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ne(Object.assign({},D,A)),Re.currentInstance&&(Re.currentInstance._destroy(),_t()&&Ya()),Re.currentInstance=this;const N=Mr(A,D);Qa(N),Object.freeze(N),Re.timeout&&(Re.timeout.stop(),delete Re.timeout),clearTimeout(Re.restoreFocusTimeout);const re=hu(this);return Es(this,N),Ne.innerParams.set(this,N),$s(this,re,N)}then(A){return Ne.promise.get(this).then(A)}finally(A){return Ne.promise.get(this).finally(A)}}const $s=(_,A,D)=>new Promise((N,re)=>{const Te=Ot=>{_.closePopup({isDismissed:!0,dismiss:Ot})};Ao.swalPromiseResolve.set(_,N),Ao.swalPromiseReject.set(_,re),A.confirmButton.onclick=()=>$d(_),A.denyButton.onclick=()=>sc(_),A.cancelButton.onclick=()=>Rs(_,Te),A.closeButton.onclick=()=>Te(ji.close),qd(_,A,Te),Qd(_,Re,D,Te),wo(_,D),Ud(D),gu(Re,D,Te),mu(A,D),setTimeout(()=>{A.container.scrollTop=0})}),Mr=(_,A)=>{const D=nn(_),N=Object.assign({},U,A,D,_);return N.showClass=Object.assign({},U.showClass,N.showClass),N.hideClass=Object.assign({},U.hideClass,N.hideClass),N},hu=_=>{const A={popup:Z(),container:ie(),actions:Y(),confirmButton:Je(),denyButton:j(),cancelButton:ce(),loader:oe(),closeButton:Ee(),validationMessage:Ft(),progressSteps:lt()};return Ne.domCache.set(_,A),A},gu=(_,A,D)=>{const N=he();Kt(N),A.timer&&(_.timeout=new Ho(()=>{D("timer"),delete _.timeout},A.timer),A.timerProgressBar&&(jt(N),tn(N,A,"timerProgressBar"),setTimeout(()=>{_.timeout&&_.timeout.running&&uo(A.timer)})))},mu=(_,A)=>{if(!A.toast){if(!x(A.allowEnterKey))return fu();qs(_,A)||js(A,-1,1)}},qs=(_,A)=>A.focusDeny&&An(_.denyButton)?(_.denyButton.focus(),!0):A.focusCancel&&An(_.cancelButton)?(_.cancelButton.focus(),!0):A.focusConfirm&&An(_.confirmButton)?(_.confirmButton.focus(),!0):!1,fu=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Gi.prototype,On),Object.assign(Gi,ru),Object.keys(On).forEach(_=>{Gi[_]=function(){if(Cn)return Cn[_](...arguments)}}),Gi.DismissReason=ji,Gi.version="11.4.0";const Pr=Gi;return Pr.default=Pr,Pr}),typeof Ro<"u"&&Ro.Sweetalert2&&(Ro.swal=Ro.sweetAlert=Ro.Swal=Ro.SweetAlert=Ro.Sweetalert2)})(ov);var _l=ov.exports;class c4{static install(c,d={}){var h;const g=_l.mixin(d),w=function(...k){return g.fire.call(g,...k)};Object.assign(w,_l),Object.keys(_l).filter(k=>typeof _l[k]=="function").forEach(k=>{w[k]=g[k].bind(g)}),((h=c.config)==null?void 0:h.globalProperties)&&!c.config.globalProperties.$swal?(c.config.globalProperties.$swal=w,c.provide("$swal",w)):Object.prototype.hasOwnProperty.call(c,"$swal")||(c.prototype.$swal=w,c.swal=w)}}//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var rv;function we(){return rv.apply(null,arguments)}function l4(i){rv=i}function ki(i){return i instanceof Array||Object.prototype.toString.call(i)==="[object Array]"}function br(i){return i!=null&&Object.prototype.toString.call(i)==="[object Object]"}function Ke(i,c){return Object.prototype.hasOwnProperty.call(i,c)}function Qg(i){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(i).length===0;var c;for(c in i)if(Ke(i,c))return!1;return!0}function In(i){return i===void 0}function so(i){return typeof i=="number"||Object.prototype.toString.call(i)==="[object Number]"}function Ba(i){return i instanceof Date||Object.prototype.toString.call(i)==="[object Date]"}function sv(i,c){var d=[],h,g=i.length;for(h=0;h<g;++h)d.push(c(i[h],h));return d}function Lo(i,c){for(var d in c)Ke(c,d)&&(i[d]=c[d]);return Ke(c,"toString")&&(i.toString=c.toString),Ke(c,"valueOf")&&(i.valueOf=c.valueOf),i}function Oi(i,c,d,h){return Sv(i,c,d,h,!0).utc()}function d4(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ze(i){return i._pf==null&&(i._pf=d4()),i._pf}var Dg;Array.prototype.some?Dg=Array.prototype.some:Dg=function(i){var c=Object(this),d=c.length>>>0,h;for(h=0;h<d;h++)if(h in c&&i.call(this,c[h],h,c))return!0;return!1};function Zg(i){if(i._isValid==null){var c=ze(i),d=Dg.call(c.parsedDateParts,function(g){return g!=null}),h=!isNaN(i._d.getTime())&&c.overflow<0&&!c.empty&&!c.invalidEra&&!c.invalidMonth&&!c.invalidWeekday&&!c.weekdayMismatch&&!c.nullInput&&!c.invalidFormat&&!c.userInvalidated&&(!c.meridiem||c.meridiem&&d);if(i._strict&&(h=h&&c.charsLeftOver===0&&c.unusedTokens.length===0&&c.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(i))i._isValid=h;else return h}return i._isValid}function Zl(i){var c=Oi(NaN);return i!=null?Lo(ze(c),i):ze(c).userInvalidated=!0,c}var q0=we.momentProperties=[],dg=!1;function Xg(i,c){var d,h,g,w=q0.length;if(In(c._isAMomentObject)||(i._isAMomentObject=c._isAMomentObject),In(c._i)||(i._i=c._i),In(c._f)||(i._f=c._f),In(c._l)||(i._l=c._l),In(c._strict)||(i._strict=c._strict),In(c._tzm)||(i._tzm=c._tzm),In(c._isUTC)||(i._isUTC=c._isUTC),In(c._offset)||(i._offset=c._offset),In(c._pf)||(i._pf=ze(c)),In(c._locale)||(i._locale=c._locale),w>0)for(d=0;d<w;d++)h=q0[d],g=c[h],In(g)||(i[h]=g);return i}function za(i){Xg(this,i),this._d=new Date(i._d!=null?i._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),dg===!1&&(dg=!0,we.updateOffset(this),dg=!1)}function wi(i){return i instanceof za||i!=null&&i._isAMomentObject!=null}function av(i){we.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+i)}function oi(i,c){var d=!0;return Lo(function(){if(we.deprecationHandler!=null&&we.deprecationHandler(null,i),d){var h=[],g,w,k,y=arguments.length;for(w=0;w<y;w++){if(g="",typeof arguments[w]=="object"){g+=`
[`+w+"] ";for(k in arguments[0])Ke(arguments[0],k)&&(g+=k+": "+arguments[0][k]+", ");g=g.slice(0,-2)}else g=arguments[w];h.push(g)}av(i+`
Arguments: `+Array.prototype.slice.call(h).join("")+`
`+new Error().stack),d=!1}return c.apply(this,arguments)},c)}var K0={};function cv(i,c){we.deprecationHandler!=null&&we.deprecationHandler(i,c),K0[i]||(av(c),K0[i]=!0)}we.suppressDeprecationWarnings=!1;we.deprecationHandler=null;function Ri(i){return typeof Function<"u"&&i instanceof Function||Object.prototype.toString.call(i)==="[object Function]"}function u4(i){var c,d;for(d in i)Ke(i,d)&&(c=i[d],Ri(c)?this[d]=c:this["_"+d]=c);this._config=i,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function xg(i,c){var d=Lo({},i),h;for(h in c)Ke(c,h)&&(br(i[h])&&br(c[h])?(d[h]={},Lo(d[h],i[h]),Lo(d[h],c[h])):c[h]!=null?d[h]=c[h]:delete d[h]);for(h in i)Ke(i,h)&&!Ke(c,h)&&br(i[h])&&(d[h]=Lo({},d[h]));return d}function Jg(i){i!=null&&this.set(i)}var Sg;Object.keys?Sg=Object.keys:Sg=function(i){var c,d=[];for(c in i)Ke(i,c)&&d.push(c);return d};var h4={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function g4(i,c,d){var h=this._calendar[i]||this._calendar.sameElse;return Ri(h)?h.call(c,d):h}function Mi(i,c,d){var h=""+Math.abs(i),g=c-h.length,w=i>=0;return(w?d?"+":"":"-")+Math.pow(10,Math.max(0,g)).toString().substr(1)+h}var em=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Al=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ug={},as={};function De(i,c,d,h){var g=h;typeof h=="string"&&(g=function(){return this[h]()}),i&&(as[i]=g),c&&(as[c[0]]=function(){return Mi(g.apply(this,arguments),c[1],c[2])}),d&&(as[d]=function(){return this.localeData().ordinal(g.apply(this,arguments),i)})}function m4(i){return i.match(/\[[\s\S]/)?i.replace(/^\[|\]$/g,""):i.replace(/\\/g,"")}function f4(i){var c=i.match(em),d,h;for(d=0,h=c.length;d<h;d++)as[c[d]]?c[d]=as[c[d]]:c[d]=m4(c[d]);return function(g){var w="",k;for(k=0;k<h;k++)w+=Ri(c[k])?c[k].call(g,i):c[k];return w}}function El(i,c){return i.isValid()?(c=lv(c,i.localeData()),ug[c]=ug[c]||f4(c),ug[c](i)):i.localeData().invalidDate()}function lv(i,c){var d=5;function h(g){return c.longDateFormat(g)||g}for(Al.lastIndex=0;d>=0&&Al.test(i);)i=i.replace(Al,h),Al.lastIndex=0,d-=1;return i}var p4={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function b4(i){var c=this._longDateFormat[i],d=this._longDateFormat[i.toUpperCase()];return c||!d?c:(this._longDateFormat[i]=d.match(em).map(function(h){return h==="MMMM"||h==="MM"||h==="DD"||h==="dddd"?h.slice(1):h}).join(""),this._longDateFormat[i])}var k4="Invalid date";function w4(){return this._invalidDate}var _4="%d",A4=/\d{1,2}/;function v4(i){return this._ordinal.replace("%d",i)}var C4={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function y4(i,c,d,h){var g=this._relativeTime[d];return Ri(g)?g(i,c,d,h):g.replace(/%d/i,i)}function E4(i,c){var d=this._relativeTime[i>0?"future":"past"];return Ri(d)?d(c):d.replace(/%s/i,c)}var Ia={};function gn(i,c){var d=i.toLowerCase();Ia[d]=Ia[d+"s"]=Ia[c]=i}function ri(i){return typeof i=="string"?Ia[i]||Ia[i.toLowerCase()]:void 0}function tm(i){var c={},d,h;for(h in i)Ke(i,h)&&(d=ri(h),d&&(c[d]=i[h]));return c}var dv={};function mn(i,c){dv[i]=c}function I4(i){var c=[],d;for(d in i)Ke(i,d)&&c.push({unit:d,priority:dv[d]});return c.sort(function(h,g){return h.priority-g.priority}),c}function Xl(i){return i%4===0&&i%100!==0||i%400===0}function ti(i){return i<0?Math.ceil(i)||0:Math.floor(i)}function Ve(i){var c=+i,d=0;return c!==0&&isFinite(c)&&(d=ti(c)),d}function fs(i,c){return function(d){return d!=null?(uv(this,i,d),we.updateOffset(this,c),this):Ll(this,i)}}function Ll(i,c){return i.isValid()?i._d["get"+(i._isUTC?"UTC":"")+c]():NaN}function uv(i,c,d){i.isValid()&&!isNaN(d)&&(c==="FullYear"&&Xl(i.year())&&i.month()===1&&i.date()===29?(d=Ve(d),i._d["set"+(i._isUTC?"UTC":"")+c](d,i.month(),od(d,i.month()))):i._d["set"+(i._isUTC?"UTC":"")+c](d))}function T4(i){return i=ri(i),Ri(this[i])?this[i]():this}function D4(i,c){if(typeof i=="object"){i=tm(i);var d=I4(i),h,g=d.length;for(h=0;h<g;h++)this[d[h].unit](i[d[h].unit])}else if(i=ri(i),Ri(this[i]))return this[i](c);return this}var hv=/\d/,Vn=/\d\d/,gv=/\d{3}/,nm=/\d{4}/,Jl=/[+-]?\d{6}/,bt=/\d\d?/,mv=/\d\d\d\d?/,fv=/\d\d\d\d\d\d?/,ed=/\d{1,3}/,im=/\d{1,4}/,td=/[+-]?\d{1,6}/,ps=/\d+/,nd=/[+-]?\d+/,x4=/Z|[+-]\d\d:?\d\d/gi,id=/Z|[+-]\d\d(?::?\d\d)?/gi,S4=/[+-]?\d+(\.\d{1,3})?/,Fa=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Bl;Bl={};function ve(i,c,d){Bl[i]=Ri(c)?c:function(h,g){return h&&d?d:c}}function M4(i,c){return Ke(Bl,i)?Bl[i](c._strict,c._locale):new RegExp(P4(i))}function P4(i){return Fn(i.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(c,d,h,g,w){return d||h||g||w}))}function Fn(i){return i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Mg={};function ct(i,c){var d,h=c,g;for(typeof i=="string"&&(i=[i]),so(c)&&(h=function(w,k){k[c]=Ve(w)}),g=i.length,d=0;d<g;d++)Mg[i[d]]=h}function ja(i,c){ct(i,function(d,h,g,w){g._w=g._w||{},c(d,g._w,g,w)})}function O4(i,c,d){c!=null&&Ke(Mg,i)&&Mg[i](c,d._a,d,i)}var hn=0,to=1,xi=2,Yt=3,fi=4,no=5,gr=6,R4=7,N4=8;function L4(i,c){return(i%c+c)%c}var xt;Array.prototype.indexOf?xt=Array.prototype.indexOf:xt=function(i){var c;for(c=0;c<this.length;++c)if(this[c]===i)return c;return-1};function od(i,c){if(isNaN(i)||isNaN(c))return NaN;var d=L4(c,12);return i+=(c-d)/12,d===1?Xl(i)?29:28:31-d%7%2}De("M",["MM",2],"Mo",function(){return this.month()+1});De("MMM",0,0,function(i){return this.localeData().monthsShort(this,i)});De("MMMM",0,0,function(i){return this.localeData().months(this,i)});gn("month","M");mn("month",8);ve("M",bt);ve("MM",bt,Vn);ve("MMM",function(i,c){return c.monthsShortRegex(i)});ve("MMMM",function(i,c){return c.monthsRegex(i)});ct(["M","MM"],function(i,c){c[to]=Ve(i)-1});ct(["MMM","MMMM"],function(i,c,d,h){var g=d._locale.monthsParse(i,h,d._strict);g!=null?c[to]=g:ze(d).invalidMonth=i});var B4="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),pv="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),bv=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,z4=Fa,F4=Fa;function j4(i,c){return i?ki(this._months)?this._months[i.month()]:this._months[(this._months.isFormat||bv).test(c)?"format":"standalone"][i.month()]:ki(this._months)?this._months:this._months.standalone}function V4(i,c){return i?ki(this._monthsShort)?this._monthsShort[i.month()]:this._monthsShort[bv.test(c)?"format":"standalone"][i.month()]:ki(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function U4(i,c,d){var h,g,w,k=i.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],h=0;h<12;++h)w=Oi([2e3,h]),this._shortMonthsParse[h]=this.monthsShort(w,"").toLocaleLowerCase(),this._longMonthsParse[h]=this.months(w,"").toLocaleLowerCase();return d?c==="MMM"?(g=xt.call(this._shortMonthsParse,k),g!==-1?g:null):(g=xt.call(this._longMonthsParse,k),g!==-1?g:null):c==="MMM"?(g=xt.call(this._shortMonthsParse,k),g!==-1?g:(g=xt.call(this._longMonthsParse,k),g!==-1?g:null)):(g=xt.call(this._longMonthsParse,k),g!==-1?g:(g=xt.call(this._shortMonthsParse,k),g!==-1?g:null))}function H4(i,c,d){var h,g,w;if(this._monthsParseExact)return U4.call(this,i,c,d);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),h=0;h<12;h++){if(g=Oi([2e3,h]),d&&!this._longMonthsParse[h]&&(this._longMonthsParse[h]=new RegExp("^"+this.months(g,"").replace(".","")+"$","i"),this._shortMonthsParse[h]=new RegExp("^"+this.monthsShort(g,"").replace(".","")+"$","i")),!d&&!this._monthsParse[h]&&(w="^"+this.months(g,"")+"|^"+this.monthsShort(g,""),this._monthsParse[h]=new RegExp(w.replace(".",""),"i")),d&&c==="MMMM"&&this._longMonthsParse[h].test(i))return h;if(d&&c==="MMM"&&this._shortMonthsParse[h].test(i))return h;if(!d&&this._monthsParse[h].test(i))return h}}function kv(i,c){var d;if(!i.isValid())return i;if(typeof c=="string"){if(/^\d+$/.test(c))c=Ve(c);else if(c=i.localeData().monthsParse(c),!so(c))return i}return d=Math.min(i.date(),od(i.year(),c)),i._d["set"+(i._isUTC?"UTC":"")+"Month"](c,d),i}function wv(i){return i!=null?(kv(this,i),we.updateOffset(this,!0),this):Ll(this,"Month")}function G4(){return od(this.year(),this.month())}function W4(i){return this._monthsParseExact?(Ke(this,"_monthsRegex")||_v.call(this),i?this._monthsShortStrictRegex:this._monthsShortRegex):(Ke(this,"_monthsShortRegex")||(this._monthsShortRegex=z4),this._monthsShortStrictRegex&&i?this._monthsShortStrictRegex:this._monthsShortRegex)}function Y4(i){return this._monthsParseExact?(Ke(this,"_monthsRegex")||_v.call(this),i?this._monthsStrictRegex:this._monthsRegex):(Ke(this,"_monthsRegex")||(this._monthsRegex=F4),this._monthsStrictRegex&&i?this._monthsStrictRegex:this._monthsRegex)}function _v(){function i(k,y){return y.length-k.length}var c=[],d=[],h=[],g,w;for(g=0;g<12;g++)w=Oi([2e3,g]),c.push(this.monthsShort(w,"")),d.push(this.months(w,"")),h.push(this.months(w,"")),h.push(this.monthsShort(w,""));for(c.sort(i),d.sort(i),h.sort(i),g=0;g<12;g++)c[g]=Fn(c[g]),d[g]=Fn(d[g]);for(g=0;g<24;g++)h[g]=Fn(h[g]);this._monthsRegex=new RegExp("^("+h.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+d.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+c.join("|")+")","i")}De("Y",0,0,function(){var i=this.year();return i<=9999?Mi(i,4):"+"+i});De(0,["YY",2],0,function(){return this.year()%100});De(0,["YYYY",4],0,"year");De(0,["YYYYY",5],0,"year");De(0,["YYYYYY",6,!0],0,"year");gn("year","y");mn("year",1);ve("Y",nd);ve("YY",bt,Vn);ve("YYYY",im,nm);ve("YYYYY",td,Jl);ve("YYYYYY",td,Jl);ct(["YYYYY","YYYYYY"],hn);ct("YYYY",function(i,c){c[hn]=i.length===2?we.parseTwoDigitYear(i):Ve(i)});ct("YY",function(i,c){c[hn]=we.parseTwoDigitYear(i)});ct("Y",function(i,c){c[hn]=parseInt(i,10)});function Ta(i){return Xl(i)?366:365}we.parseTwoDigitYear=function(i){return Ve(i)+(Ve(i)>68?1900:2e3)};var Av=fs("FullYear",!0);function $4(){return Xl(this.year())}function q4(i,c,d,h,g,w,k){var y;return i<100&&i>=0?(y=new Date(i+400,c,d,h,g,w,k),isFinite(y.getFullYear())&&y.setFullYear(i)):y=new Date(i,c,d,h,g,w,k),y}function Ma(i){var c,d;return i<100&&i>=0?(d=Array.prototype.slice.call(arguments),d[0]=i+400,c=new Date(Date.UTC.apply(null,d)),isFinite(c.getUTCFullYear())&&c.setUTCFullYear(i)):c=new Date(Date.UTC.apply(null,arguments)),c}function zl(i,c,d){var h=7+c-d,g=(7+Ma(i,0,h).getUTCDay()-c)%7;return-g+h-1}function vv(i,c,d,h,g){var w=(7+d-h)%7,k=zl(i,h,g),y=1+7*(c-1)+w+k,b,I;return y<=0?(b=i-1,I=Ta(b)+y):y>Ta(i)?(b=i+1,I=y-Ta(i)):(b=i,I=y),{year:b,dayOfYear:I}}function Pa(i,c,d){var h=zl(i.year(),c,d),g=Math.floor((i.dayOfYear()-h-1)/7)+1,w,k;return g<1?(k=i.year()-1,w=g+io(k,c,d)):g>io(i.year(),c,d)?(w=g-io(i.year(),c,d),k=i.year()+1):(k=i.year(),w=g),{week:w,year:k}}function io(i,c,d){var h=zl(i,c,d),g=zl(i+1,c,d);return(Ta(i)-h+g)/7}De("w",["ww",2],"wo","week");De("W",["WW",2],"Wo","isoWeek");gn("week","w");gn("isoWeek","W");mn("week",5);mn("isoWeek",5);ve("w",bt);ve("ww",bt,Vn);ve("W",bt);ve("WW",bt,Vn);ja(["w","ww","W","WW"],function(i,c,d,h){c[h.substr(0,1)]=Ve(i)});function K4(i){return Pa(i,this._week.dow,this._week.doy).week}var Q4={dow:0,doy:6};function Z4(){return this._week.dow}function X4(){return this._week.doy}function J4(i){var c=this.localeData().week(this);return i==null?c:this.add((i-c)*7,"d")}function ez(i){var c=Pa(this,1,4).week;return i==null?c:this.add((i-c)*7,"d")}De("d",0,"do","day");De("dd",0,0,function(i){return this.localeData().weekdaysMin(this,i)});De("ddd",0,0,function(i){return this.localeData().weekdaysShort(this,i)});De("dddd",0,0,function(i){return this.localeData().weekdays(this,i)});De("e",0,0,"weekday");De("E",0,0,"isoWeekday");gn("day","d");gn("weekday","e");gn("isoWeekday","E");mn("day",11);mn("weekday",11);mn("isoWeekday",11);ve("d",bt);ve("e",bt);ve("E",bt);ve("dd",function(i,c){return c.weekdaysMinRegex(i)});ve("ddd",function(i,c){return c.weekdaysShortRegex(i)});ve("dddd",function(i,c){return c.weekdaysRegex(i)});ja(["dd","ddd","dddd"],function(i,c,d,h){var g=d._locale.weekdaysParse(i,h,d._strict);g!=null?c.d=g:ze(d).invalidWeekday=i});ja(["d","e","E"],function(i,c,d,h){c[h]=Ve(i)});function tz(i,c){return typeof i!="string"?i:isNaN(i)?(i=c.weekdaysParse(i),typeof i=="number"?i:null):parseInt(i,10)}function nz(i,c){return typeof i=="string"?c.weekdaysParse(i)%7||7:isNaN(i)?null:i}function om(i,c){return i.slice(c,7).concat(i.slice(0,c))}var iz="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Cv="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oz="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),rz=Fa,sz=Fa,az=Fa;function cz(i,c){var d=ki(this._weekdays)?this._weekdays:this._weekdays[i&&i!==!0&&this._weekdays.isFormat.test(c)?"format":"standalone"];return i===!0?om(d,this._week.dow):i?d[i.day()]:d}function lz(i){return i===!0?om(this._weekdaysShort,this._week.dow):i?this._weekdaysShort[i.day()]:this._weekdaysShort}function dz(i){return i===!0?om(this._weekdaysMin,this._week.dow):i?this._weekdaysMin[i.day()]:this._weekdaysMin}function uz(i,c,d){var h,g,w,k=i.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],h=0;h<7;++h)w=Oi([2e3,1]).day(h),this._minWeekdaysParse[h]=this.weekdaysMin(w,"").toLocaleLowerCase(),this._shortWeekdaysParse[h]=this.weekdaysShort(w,"").toLocaleLowerCase(),this._weekdaysParse[h]=this.weekdays(w,"").toLocaleLowerCase();return d?c==="dddd"?(g=xt.call(this._weekdaysParse,k),g!==-1?g:null):c==="ddd"?(g=xt.call(this._shortWeekdaysParse,k),g!==-1?g:null):(g=xt.call(this._minWeekdaysParse,k),g!==-1?g:null):c==="dddd"?(g=xt.call(this._weekdaysParse,k),g!==-1||(g=xt.call(this._shortWeekdaysParse,k),g!==-1)?g:(g=xt.call(this._minWeekdaysParse,k),g!==-1?g:null)):c==="ddd"?(g=xt.call(this._shortWeekdaysParse,k),g!==-1||(g=xt.call(this._weekdaysParse,k),g!==-1)?g:(g=xt.call(this._minWeekdaysParse,k),g!==-1?g:null)):(g=xt.call(this._minWeekdaysParse,k),g!==-1||(g=xt.call(this._weekdaysParse,k),g!==-1)?g:(g=xt.call(this._shortWeekdaysParse,k),g!==-1?g:null))}function hz(i,c,d){var h,g,w;if(this._weekdaysParseExact)return uz.call(this,i,c,d);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),h=0;h<7;h++){if(g=Oi([2e3,1]).day(h),d&&!this._fullWeekdaysParse[h]&&(this._fullWeekdaysParse[h]=new RegExp("^"+this.weekdays(g,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[h]=new RegExp("^"+this.weekdaysShort(g,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[h]=new RegExp("^"+this.weekdaysMin(g,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[h]||(w="^"+this.weekdays(g,"")+"|^"+this.weekdaysShort(g,"")+"|^"+this.weekdaysMin(g,""),this._weekdaysParse[h]=new RegExp(w.replace(".",""),"i")),d&&c==="dddd"&&this._fullWeekdaysParse[h].test(i))return h;if(d&&c==="ddd"&&this._shortWeekdaysParse[h].test(i))return h;if(d&&c==="dd"&&this._minWeekdaysParse[h].test(i))return h;if(!d&&this._weekdaysParse[h].test(i))return h}}function gz(i){if(!this.isValid())return i!=null?this:NaN;var c=this._isUTC?this._d.getUTCDay():this._d.getDay();return i!=null?(i=tz(i,this.localeData()),this.add(i-c,"d")):c}function mz(i){if(!this.isValid())return i!=null?this:NaN;var c=(this.day()+7-this.localeData()._week.dow)%7;return i==null?c:this.add(i-c,"d")}function fz(i){if(!this.isValid())return i!=null?this:NaN;if(i!=null){var c=nz(i,this.localeData());return this.day(this.day()%7?c:c-7)}else return this.day()||7}function pz(i){return this._weekdaysParseExact?(Ke(this,"_weekdaysRegex")||rm.call(this),i?this._weekdaysStrictRegex:this._weekdaysRegex):(Ke(this,"_weekdaysRegex")||(this._weekdaysRegex=rz),this._weekdaysStrictRegex&&i?this._weekdaysStrictRegex:this._weekdaysRegex)}function bz(i){return this._weekdaysParseExact?(Ke(this,"_weekdaysRegex")||rm.call(this),i?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Ke(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=sz),this._weekdaysShortStrictRegex&&i?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function kz(i){return this._weekdaysParseExact?(Ke(this,"_weekdaysRegex")||rm.call(this),i?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Ke(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=az),this._weekdaysMinStrictRegex&&i?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function rm(){function i(E,x){return x.length-E.length}var c=[],d=[],h=[],g=[],w,k,y,b,I;for(w=0;w<7;w++)k=Oi([2e3,1]).day(w),y=Fn(this.weekdaysMin(k,"")),b=Fn(this.weekdaysShort(k,"")),I=Fn(this.weekdays(k,"")),c.push(y),d.push(b),h.push(I),g.push(y),g.push(b),g.push(I);c.sort(i),d.sort(i),h.sort(i),g.sort(i),this._weekdaysRegex=new RegExp("^("+g.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+c.join("|")+")","i")}function sm(){return this.hours()%12||12}function wz(){return this.hours()||24}De("H",["HH",2],0,"hour");De("h",["hh",2],0,sm);De("k",["kk",2],0,wz);De("hmm",0,0,function(){return""+sm.apply(this)+Mi(this.minutes(),2)});De("hmmss",0,0,function(){return""+sm.apply(this)+Mi(this.minutes(),2)+Mi(this.seconds(),2)});De("Hmm",0,0,function(){return""+this.hours()+Mi(this.minutes(),2)});De("Hmmss",0,0,function(){return""+this.hours()+Mi(this.minutes(),2)+Mi(this.seconds(),2)});function yv(i,c){De(i,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),c)})}yv("a",!0);yv("A",!1);gn("hour","h");mn("hour",13);function Ev(i,c){return c._meridiemParse}ve("a",Ev);ve("A",Ev);ve("H",bt);ve("h",bt);ve("k",bt);ve("HH",bt,Vn);ve("hh",bt,Vn);ve("kk",bt,Vn);ve("hmm",mv);ve("hmmss",fv);ve("Hmm",mv);ve("Hmmss",fv);ct(["H","HH"],Yt);ct(["k","kk"],function(i,c,d){var h=Ve(i);c[Yt]=h===24?0:h});ct(["a","A"],function(i,c,d){d._isPm=d._locale.isPM(i),d._meridiem=i});ct(["h","hh"],function(i,c,d){c[Yt]=Ve(i),ze(d).bigHour=!0});ct("hmm",function(i,c,d){var h=i.length-2;c[Yt]=Ve(i.substr(0,h)),c[fi]=Ve(i.substr(h)),ze(d).bigHour=!0});ct("hmmss",function(i,c,d){var h=i.length-4,g=i.length-2;c[Yt]=Ve(i.substr(0,h)),c[fi]=Ve(i.substr(h,2)),c[no]=Ve(i.substr(g)),ze(d).bigHour=!0});ct("Hmm",function(i,c,d){var h=i.length-2;c[Yt]=Ve(i.substr(0,h)),c[fi]=Ve(i.substr(h))});ct("Hmmss",function(i,c,d){var h=i.length-4,g=i.length-2;c[Yt]=Ve(i.substr(0,h)),c[fi]=Ve(i.substr(h,2)),c[no]=Ve(i.substr(g))});function _z(i){return(i+"").toLowerCase().charAt(0)==="p"}var Az=/[ap]\.?m?\.?/i,vz=fs("Hours",!0);function Cz(i,c,d){return i>11?d?"pm":"PM":d?"am":"AM"}var Iv={calendar:h4,longDateFormat:p4,invalidDate:k4,ordinal:_4,dayOfMonthOrdinalParse:A4,relativeTime:C4,months:B4,monthsShort:pv,week:Q4,weekdays:iz,weekdaysMin:oz,weekdaysShort:Cv,meridiemParse:Az},wt={},wa={},Oa;function yz(i,c){var d,h=Math.min(i.length,c.length);for(d=0;d<h;d+=1)if(i[d]!==c[d])return d;return h}function Q0(i){return i&&i.toLowerCase().replace("_","-")}function Ez(i){for(var c=0,d,h,g,w;c<i.length;){for(w=Q0(i[c]).split("-"),d=w.length,h=Q0(i[c+1]),h=h?h.split("-"):null;d>0;){if(g=rd(w.slice(0,d).join("-")),g)return g;if(h&&h.length>=d&&yz(w,h)>=d-1)break;d--}c++}return Oa}function Iz(i){return i.match("^[^/\\\\]*$")!=null}function rd(i){var c=null,d;if(wt[i]===void 0&&typeof Dl<"u"&&Dl&&Dl.exports&&Iz(i))try{c=Oa._abbr,d=require,d("./locale/"+i),Fo(c)}catch{wt[i]=null}return wt[i]}function Fo(i,c){var d;return i&&(In(c)?d=ao(i):d=am(i,c),d?Oa=d:typeof console<"u"&&console.warn&&console.warn("Locale "+i+" not found. Did you forget to load it?")),Oa._abbr}function am(i,c){if(c!==null){var d,h=Iv;if(c.abbr=i,wt[i]!=null)cv("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),h=wt[i]._config;else if(c.parentLocale!=null)if(wt[c.parentLocale]!=null)h=wt[c.parentLocale]._config;else if(d=rd(c.parentLocale),d!=null)h=d._config;else return wa[c.parentLocale]||(wa[c.parentLocale]=[]),wa[c.parentLocale].push({name:i,config:c}),null;return wt[i]=new Jg(xg(h,c)),wa[i]&&wa[i].forEach(function(g){am(g.name,g.config)}),Fo(i),wt[i]}else return delete wt[i],null}function Tz(i,c){if(c!=null){var d,h,g=Iv;wt[i]!=null&&wt[i].parentLocale!=null?wt[i].set(xg(wt[i]._config,c)):(h=rd(i),h!=null&&(g=h._config),c=xg(g,c),h==null&&(c.abbr=i),d=new Jg(c),d.parentLocale=wt[i],wt[i]=d),Fo(i)}else wt[i]!=null&&(wt[i].parentLocale!=null?(wt[i]=wt[i].parentLocale,i===Fo()&&Fo(i)):wt[i]!=null&&delete wt[i]);return wt[i]}function ao(i){var c;if(i&&i._locale&&i._locale._abbr&&(i=i._locale._abbr),!i)return Oa;if(!ki(i)){if(c=rd(i),c)return c;i=[i]}return Ez(i)}function Dz(){return Sg(wt)}function cm(i){var c,d=i._a;return d&&ze(i).overflow===-2&&(c=d[to]<0||d[to]>11?to:d[xi]<1||d[xi]>od(d[hn],d[to])?xi:d[Yt]<0||d[Yt]>24||d[Yt]===24&&(d[fi]!==0||d[no]!==0||d[gr]!==0)?Yt:d[fi]<0||d[fi]>59?fi:d[no]<0||d[no]>59?no:d[gr]<0||d[gr]>999?gr:-1,ze(i)._overflowDayOfYear&&(c<hn||c>xi)&&(c=xi),ze(i)._overflowWeeks&&c===-1&&(c=R4),ze(i)._overflowWeekday&&c===-1&&(c=N4),ze(i).overflow=c),i}var xz=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Sz=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Mz=/Z|[+-]\d\d(?::?\d\d)?/,vl=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],hg=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Pz=/^\/?Date\((-?\d+)/i,Oz=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Rz={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Tv(i){var c,d,h=i._i,g=xz.exec(h)||Sz.exec(h),w,k,y,b,I=vl.length,E=hg.length;if(g){for(ze(i).iso=!0,c=0,d=I;c<d;c++)if(vl[c][1].exec(g[1])){k=vl[c][0],w=vl[c][2]!==!1;break}if(k==null){i._isValid=!1;return}if(g[3]){for(c=0,d=E;c<d;c++)if(hg[c][1].exec(g[3])){y=(g[2]||" ")+hg[c][0];break}if(y==null){i._isValid=!1;return}}if(!w&&y!=null){i._isValid=!1;return}if(g[4])if(Mz.exec(g[4]))b="Z";else{i._isValid=!1;return}i._f=k+(y||"")+(b||""),dm(i)}else i._isValid=!1}function Nz(i,c,d,h,g,w){var k=[Lz(i),pv.indexOf(c),parseInt(d,10),parseInt(h,10),parseInt(g,10)];return w&&k.push(parseInt(w,10)),k}function Lz(i){var c=parseInt(i,10);return c<=49?2e3+c:c<=999?1900+c:c}function Bz(i){return i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function zz(i,c,d){if(i){var h=Cv.indexOf(i),g=new Date(c[0],c[1],c[2]).getDay();if(h!==g)return ze(d).weekdayMismatch=!0,d._isValid=!1,!1}return!0}function Fz(i,c,d){if(i)return Rz[i];if(c)return 0;var h=parseInt(d,10),g=h%100,w=(h-g)/100;return w*60+g}function Dv(i){var c=Oz.exec(Bz(i._i)),d;if(c){if(d=Nz(c[4],c[3],c[2],c[5],c[6],c[7]),!zz(c[1],d,i))return;i._a=d,i._tzm=Fz(c[8],c[9],c[10]),i._d=Ma.apply(null,i._a),i._d.setUTCMinutes(i._d.getUTCMinutes()-i._tzm),ze(i).rfc2822=!0}else i._isValid=!1}function jz(i){var c=Pz.exec(i._i);if(c!==null){i._d=new Date(+c[1]);return}if(Tv(i),i._isValid===!1)delete i._isValid;else return;if(Dv(i),i._isValid===!1)delete i._isValid;else return;i._strict?i._isValid=!1:we.createFromInputFallback(i)}we.createFromInputFallback=oi("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(i){i._d=new Date(i._i+(i._useUTC?" UTC":""))});function ts(i,c,d){return i!=null?i:c!=null?c:d}function Vz(i){var c=new Date(we.now());return i._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function lm(i){var c,d,h=[],g,w,k;if(!i._d){for(g=Vz(i),i._w&&i._a[xi]==null&&i._a[to]==null&&Uz(i),i._dayOfYear!=null&&(k=ts(i._a[hn],g[hn]),(i._dayOfYear>Ta(k)||i._dayOfYear===0)&&(ze(i)._overflowDayOfYear=!0),d=Ma(k,0,i._dayOfYear),i._a[to]=d.getUTCMonth(),i._a[xi]=d.getUTCDate()),c=0;c<3&&i._a[c]==null;++c)i._a[c]=h[c]=g[c];for(;c<7;c++)i._a[c]=h[c]=i._a[c]==null?c===2?1:0:i._a[c];i._a[Yt]===24&&i._a[fi]===0&&i._a[no]===0&&i._a[gr]===0&&(i._nextDay=!0,i._a[Yt]=0),i._d=(i._useUTC?Ma:q4).apply(null,h),w=i._useUTC?i._d.getUTCDay():i._d.getDay(),i._tzm!=null&&i._d.setUTCMinutes(i._d.getUTCMinutes()-i._tzm),i._nextDay&&(i._a[Yt]=24),i._w&&typeof i._w.d<"u"&&i._w.d!==w&&(ze(i).weekdayMismatch=!0)}}function Uz(i){var c,d,h,g,w,k,y,b,I;c=i._w,c.GG!=null||c.W!=null||c.E!=null?(w=1,k=4,d=ts(c.GG,i._a[hn],Pa(pt(),1,4).year),h=ts(c.W,1),g=ts(c.E,1),(g<1||g>7)&&(b=!0)):(w=i._locale._week.dow,k=i._locale._week.doy,I=Pa(pt(),w,k),d=ts(c.gg,i._a[hn],I.year),h=ts(c.w,I.week),c.d!=null?(g=c.d,(g<0||g>6)&&(b=!0)):c.e!=null?(g=c.e+w,(c.e<0||c.e>6)&&(b=!0)):g=w),h<1||h>io(d,w,k)?ze(i)._overflowWeeks=!0:b!=null?ze(i)._overflowWeekday=!0:(y=vv(d,h,g,w,k),i._a[hn]=y.year,i._dayOfYear=y.dayOfYear)}we.ISO_8601=function(){};we.RFC_2822=function(){};function dm(i){if(i._f===we.ISO_8601){Tv(i);return}if(i._f===we.RFC_2822){Dv(i);return}i._a=[],ze(i).empty=!0;var c=""+i._i,d,h,g,w,k,y=c.length,b=0,I,E;for(g=lv(i._f,i._locale).match(em)||[],E=g.length,d=0;d<E;d++)w=g[d],h=(c.match(M4(w,i))||[])[0],h&&(k=c.substr(0,c.indexOf(h)),k.length>0&&ze(i).unusedInput.push(k),c=c.slice(c.indexOf(h)+h.length),b+=h.length),as[w]?(h?ze(i).empty=!1:ze(i).unusedTokens.push(w),O4(w,h,i)):i._strict&&!h&&ze(i).unusedTokens.push(w);ze(i).charsLeftOver=y-b,c.length>0&&ze(i).unusedInput.push(c),i._a[Yt]<=12&&ze(i).bigHour===!0&&i._a[Yt]>0&&(ze(i).bigHour=void 0),ze(i).parsedDateParts=i._a.slice(0),ze(i).meridiem=i._meridiem,i._a[Yt]=Hz(i._locale,i._a[Yt],i._meridiem),I=ze(i).era,I!==null&&(i._a[hn]=i._locale.erasConvertYear(I,i._a[hn])),lm(i),cm(i)}function Hz(i,c,d){var h;return d==null?c:i.meridiemHour!=null?i.meridiemHour(c,d):(i.isPM!=null&&(h=i.isPM(d),h&&c<12&&(c+=12),!h&&c===12&&(c=0)),c)}function Gz(i){var c,d,h,g,w,k,y=!1,b=i._f.length;if(b===0){ze(i).invalidFormat=!0,i._d=new Date(NaN);return}for(g=0;g<b;g++)w=0,k=!1,c=Xg({},i),i._useUTC!=null&&(c._useUTC=i._useUTC),c._f=i._f[g],dm(c),Zg(c)&&(k=!0),w+=ze(c).charsLeftOver,w+=ze(c).unusedTokens.length*10,ze(c).score=w,y?w<h&&(h=w,d=c):(h==null||w<h||k)&&(h=w,d=c,k&&(y=!0));Lo(i,d||c)}function Wz(i){if(!i._d){var c=tm(i._i),d=c.day===void 0?c.date:c.day;i._a=sv([c.year,c.month,d,c.hour,c.minute,c.second,c.millisecond],function(h){return h&&parseInt(h,10)}),lm(i)}}function Yz(i){var c=new za(cm(xv(i)));return c._nextDay&&(c.add(1,"d"),c._nextDay=void 0),c}function xv(i){var c=i._i,d=i._f;return i._locale=i._locale||ao(i._l),c===null||d===void 0&&c===""?Zl({nullInput:!0}):(typeof c=="string"&&(i._i=c=i._locale.preparse(c)),wi(c)?new za(cm(c)):(Ba(c)?i._d=c:ki(d)?Gz(i):d?dm(i):$z(i),Zg(i)||(i._d=null),i))}function $z(i){var c=i._i;In(c)?i._d=new Date(we.now()):Ba(c)?i._d=new Date(c.valueOf()):typeof c=="string"?jz(i):ki(c)?(i._a=sv(c.slice(0),function(d){return parseInt(d,10)}),lm(i)):br(c)?Wz(i):so(c)?i._d=new Date(c):we.createFromInputFallback(i)}function Sv(i,c,d,h,g){var w={};return(c===!0||c===!1)&&(h=c,c=void 0),(d===!0||d===!1)&&(h=d,d=void 0),(br(i)&&Qg(i)||ki(i)&&i.length===0)&&(i=void 0),w._isAMomentObject=!0,w._useUTC=w._isUTC=g,w._l=d,w._i=i,w._f=c,w._strict=h,Yz(w)}function pt(i,c,d,h){return Sv(i,c,d,h,!1)}var qz=oi("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var i=pt.apply(null,arguments);return this.isValid()&&i.isValid()?i<this?this:i:Zl()}),Kz=oi("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var i=pt.apply(null,arguments);return this.isValid()&&i.isValid()?i>this?this:i:Zl()});function Mv(i,c){var d,h;if(c.length===1&&ki(c[0])&&(c=c[0]),!c.length)return pt();for(d=c[0],h=1;h<c.length;++h)(!c[h].isValid()||c[h][i](d))&&(d=c[h]);return d}function Qz(){var i=[].slice.call(arguments,0);return Mv("isBefore",i)}function Zz(){var i=[].slice.call(arguments,0);return Mv("isAfter",i)}var Xz=function(){return Date.now?Date.now():+new Date},_a=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Jz(i){var c,d=!1,h,g=_a.length;for(c in i)if(Ke(i,c)&&!(xt.call(_a,c)!==-1&&(i[c]==null||!isNaN(i[c]))))return!1;for(h=0;h<g;++h)if(i[_a[h]]){if(d)return!1;parseFloat(i[_a[h]])!==Ve(i[_a[h]])&&(d=!0)}return!0}function e3(){return this._isValid}function t3(){return _i(NaN)}function sd(i){var c=tm(i),d=c.year||0,h=c.quarter||0,g=c.month||0,w=c.week||c.isoWeek||0,k=c.day||0,y=c.hour||0,b=c.minute||0,I=c.second||0,E=c.millisecond||0;this._isValid=Jz(c),this._milliseconds=+E+I*1e3+b*6e4+y*1e3*60*60,this._days=+k+w*7,this._months=+g+h*3+d*12,this._data={},this._locale=ao(),this._bubble()}function Il(i){return i instanceof sd}function Pg(i){return i<0?Math.round(-1*i)*-1:Math.round(i)}function n3(i,c,d){var h=Math.min(i.length,c.length),g=Math.abs(i.length-c.length),w=0,k;for(k=0;k<h;k++)(d&&i[k]!==c[k]||!d&&Ve(i[k])!==Ve(c[k]))&&w++;return w+g}function Pv(i,c){De(i,0,0,function(){var d=this.utcOffset(),h="+";return d<0&&(d=-d,h="-"),h+Mi(~~(d/60),2)+c+Mi(~~d%60,2)})}Pv("Z",":");Pv("ZZ","");ve("Z",id);ve("ZZ",id);ct(["Z","ZZ"],function(i,c,d){d._useUTC=!0,d._tzm=um(id,i)});var i3=/([\+\-]|\d\d)/gi;function um(i,c){var d=(c||"").match(i),h,g,w;return d===null?null:(h=d[d.length-1]||[],g=(h+"").match(i3)||["-",0,0],w=+(g[1]*60)+Ve(g[2]),w===0?0:g[0]==="+"?w:-w)}function hm(i,c){var d,h;return c._isUTC?(d=c.clone(),h=(wi(i)||Ba(i)?i.valueOf():pt(i).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+h),we.updateOffset(d,!1),d):pt(i).local()}function Og(i){return-Math.round(i._d.getTimezoneOffset())}we.updateOffset=function(){};function o3(i,c,d){var h=this._offset||0,g;if(!this.isValid())return i!=null?this:NaN;if(i!=null){if(typeof i=="string"){if(i=um(id,i),i===null)return this}else Math.abs(i)<16&&!d&&(i=i*60);return!this._isUTC&&c&&(g=Og(this)),this._offset=i,this._isUTC=!0,g!=null&&this.add(g,"m"),h!==i&&(!c||this._changeInProgress?Nv(this,_i(i-h,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,we.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?h:Og(this)}function r3(i,c){return i!=null?(typeof i!="string"&&(i=-i),this.utcOffset(i,c),this):-this.utcOffset()}function s3(i){return this.utcOffset(0,i)}function a3(i){return this._isUTC&&(this.utcOffset(0,i),this._isUTC=!1,i&&this.subtract(Og(this),"m")),this}function c3(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var i=um(x4,this._i);i!=null?this.utcOffset(i):this.utcOffset(0,!0)}return this}function l3(i){return this.isValid()?(i=i?pt(i).utcOffset():0,(this.utcOffset()-i)%60===0):!1}function d3(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function u3(){if(!In(this._isDSTShifted))return this._isDSTShifted;var i={},c;return Xg(i,this),i=xv(i),i._a?(c=i._isUTC?Oi(i._a):pt(i._a),this._isDSTShifted=this.isValid()&&n3(i._a,c.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function h3(){return this.isValid()?!this._isUTC:!1}function g3(){return this.isValid()?this._isUTC:!1}function Ov(){return this.isValid()?this._isUTC&&this._offset===0:!1}var m3=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,f3=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function _i(i,c){var d=i,h=null,g,w,k;return Il(i)?d={ms:i._milliseconds,d:i._days,M:i._months}:so(i)||!isNaN(+i)?(d={},c?d[c]=+i:d.milliseconds=+i):(h=m3.exec(i))?(g=h[1]==="-"?-1:1,d={y:0,d:Ve(h[xi])*g,h:Ve(h[Yt])*g,m:Ve(h[fi])*g,s:Ve(h[no])*g,ms:Ve(Pg(h[gr]*1e3))*g}):(h=f3.exec(i))?(g=h[1]==="-"?-1:1,d={y:lr(h[2],g),M:lr(h[3],g),w:lr(h[4],g),d:lr(h[5],g),h:lr(h[6],g),m:lr(h[7],g),s:lr(h[8],g)}):d==null?d={}:typeof d=="object"&&("from"in d||"to"in d)&&(k=p3(pt(d.from),pt(d.to)),d={},d.ms=k.milliseconds,d.M=k.months),w=new sd(d),Il(i)&&Ke(i,"_locale")&&(w._locale=i._locale),Il(i)&&Ke(i,"_isValid")&&(w._isValid=i._isValid),w}_i.fn=sd.prototype;_i.invalid=t3;function lr(i,c){var d=i&&parseFloat(i.replace(",","."));return(isNaN(d)?0:d)*c}function Z0(i,c){var d={};return d.months=c.month()-i.month()+(c.year()-i.year())*12,i.clone().add(d.months,"M").isAfter(c)&&--d.months,d.milliseconds=+c-+i.clone().add(d.months,"M"),d}function p3(i,c){var d;return i.isValid()&&c.isValid()?(c=hm(c,i),i.isBefore(c)?d=Z0(i,c):(d=Z0(c,i),d.milliseconds=-d.milliseconds,d.months=-d.months),d):{milliseconds:0,months:0}}function Rv(i,c){return function(d,h){var g,w;return h!==null&&!isNaN(+h)&&(cv(c,"moment()."+c+"(period, number) is deprecated. Please use moment()."+c+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),w=d,d=h,h=w),g=_i(d,h),Nv(this,g,i),this}}function Nv(i,c,d,h){var g=c._milliseconds,w=Pg(c._days),k=Pg(c._months);!i.isValid()||(h=h==null?!0:h,k&&kv(i,Ll(i,"Month")+k*d),w&&uv(i,"Date",Ll(i,"Date")+w*d),g&&i._d.setTime(i._d.valueOf()+g*d),h&&we.updateOffset(i,w||k))}var b3=Rv(1,"add"),k3=Rv(-1,"subtract");function Lv(i){return typeof i=="string"||i instanceof String}function w3(i){return wi(i)||Ba(i)||Lv(i)||so(i)||A3(i)||_3(i)||i===null||i===void 0}function _3(i){var c=br(i)&&!Qg(i),d=!1,h=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],g,w,k=h.length;for(g=0;g<k;g+=1)w=h[g],d=d||Ke(i,w);return c&&d}function A3(i){var c=ki(i),d=!1;return c&&(d=i.filter(function(h){return!so(h)&&Lv(i)}).length===0),c&&d}function v3(i){var c=br(i)&&!Qg(i),d=!1,h=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],g,w;for(g=0;g<h.length;g+=1)w=h[g],d=d||Ke(i,w);return c&&d}function C3(i,c){var d=i.diff(c,"days",!0);return d<-6?"sameElse":d<-1?"lastWeek":d<0?"lastDay":d<1?"sameDay":d<2?"nextDay":d<7?"nextWeek":"sameElse"}function y3(i,c){arguments.length===1&&(arguments[0]?w3(arguments[0])?(i=arguments[0],c=void 0):v3(arguments[0])&&(c=arguments[0],i=void 0):(i=void 0,c=void 0));var d=i||pt(),h=hm(d,this).startOf("day"),g=we.calendarFormat(this,h)||"sameElse",w=c&&(Ri(c[g])?c[g].call(this,d):c[g]);return this.format(w||this.localeData().calendar(g,this,pt(d)))}function E3(){return new za(this)}function I3(i,c){var d=wi(i)?i:pt(i);return this.isValid()&&d.isValid()?(c=ri(c)||"millisecond",c==="millisecond"?this.valueOf()>d.valueOf():d.valueOf()<this.clone().startOf(c).valueOf()):!1}function T3(i,c){var d=wi(i)?i:pt(i);return this.isValid()&&d.isValid()?(c=ri(c)||"millisecond",c==="millisecond"?this.valueOf()<d.valueOf():this.clone().endOf(c).valueOf()<d.valueOf()):!1}function D3(i,c,d,h){var g=wi(i)?i:pt(i),w=wi(c)?c:pt(c);return this.isValid()&&g.isValid()&&w.isValid()?(h=h||"()",(h[0]==="("?this.isAfter(g,d):!this.isBefore(g,d))&&(h[1]===")"?this.isBefore(w,d):!this.isAfter(w,d))):!1}function x3(i,c){var d=wi(i)?i:pt(i),h;return this.isValid()&&d.isValid()?(c=ri(c)||"millisecond",c==="millisecond"?this.valueOf()===d.valueOf():(h=d.valueOf(),this.clone().startOf(c).valueOf()<=h&&h<=this.clone().endOf(c).valueOf())):!1}function S3(i,c){return this.isSame(i,c)||this.isAfter(i,c)}function M3(i,c){return this.isSame(i,c)||this.isBefore(i,c)}function P3(i,c,d){var h,g,w;if(!this.isValid())return NaN;if(h=hm(i,this),!h.isValid())return NaN;switch(g=(h.utcOffset()-this.utcOffset())*6e4,c=ri(c),c){case"year":w=Tl(this,h)/12;break;case"month":w=Tl(this,h);break;case"quarter":w=Tl(this,h)/3;break;case"second":w=(this-h)/1e3;break;case"minute":w=(this-h)/6e4;break;case"hour":w=(this-h)/36e5;break;case"day":w=(this-h-g)/864e5;break;case"week":w=(this-h-g)/6048e5;break;default:w=this-h}return d?w:ti(w)}function Tl(i,c){if(i.date()<c.date())return-Tl(c,i);var d=(c.year()-i.year())*12+(c.month()-i.month()),h=i.clone().add(d,"months"),g,w;return c-h<0?(g=i.clone().add(d-1,"months"),w=(c-h)/(h-g)):(g=i.clone().add(d+1,"months"),w=(c-h)/(g-h)),-(d+w)||0}we.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";we.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function O3(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function R3(i){if(!this.isValid())return null;var c=i!==!0,d=c?this.clone().utc():this;return d.year()<0||d.year()>9999?El(d,c?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Ri(Date.prototype.toISOString)?c?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",El(d,"Z")):El(d,c?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function N3(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var i="moment",c="",d,h,g,w;return this.isLocal()||(i=this.utcOffset()===0?"moment.utc":"moment.parseZone",c="Z"),d="["+i+'("]',h=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",g="-MM-DD[T]HH:mm:ss.SSS",w=c+'[")]',this.format(d+h+g+w)}function L3(i){i||(i=this.isUtc()?we.defaultFormatUtc:we.defaultFormat);var c=El(this,i);return this.localeData().postformat(c)}function B3(i,c){return this.isValid()&&(wi(i)&&i.isValid()||pt(i).isValid())?_i({to:this,from:i}).locale(this.locale()).humanize(!c):this.localeData().invalidDate()}function z3(i){return this.from(pt(),i)}function F3(i,c){return this.isValid()&&(wi(i)&&i.isValid()||pt(i).isValid())?_i({from:this,to:i}).locale(this.locale()).humanize(!c):this.localeData().invalidDate()}function j3(i){return this.to(pt(),i)}function Bv(i){var c;return i===void 0?this._locale._abbr:(c=ao(i),c!=null&&(this._locale=c),this)}var zv=oi("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(i){return i===void 0?this.localeData():this.locale(i)});function Fv(){return this._locale}var Fl=1e3,cs=60*Fl,jl=60*cs,jv=(365*400+97)*24*jl;function ls(i,c){return(i%c+c)%c}function Vv(i,c,d){return i<100&&i>=0?new Date(i+400,c,d)-jv:new Date(i,c,d).valueOf()}function Uv(i,c,d){return i<100&&i>=0?Date.UTC(i+400,c,d)-jv:Date.UTC(i,c,d)}function V3(i){var c,d;if(i=ri(i),i===void 0||i==="millisecond"||!this.isValid())return this;switch(d=this._isUTC?Uv:Vv,i){case"year":c=d(this.year(),0,1);break;case"quarter":c=d(this.year(),this.month()-this.month()%3,1);break;case"month":c=d(this.year(),this.month(),1);break;case"week":c=d(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":c=d(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":c=d(this.year(),this.month(),this.date());break;case"hour":c=this._d.valueOf(),c-=ls(c+(this._isUTC?0:this.utcOffset()*cs),jl);break;case"minute":c=this._d.valueOf(),c-=ls(c,cs);break;case"second":c=this._d.valueOf(),c-=ls(c,Fl);break}return this._d.setTime(c),we.updateOffset(this,!0),this}function U3(i){var c,d;if(i=ri(i),i===void 0||i==="millisecond"||!this.isValid())return this;switch(d=this._isUTC?Uv:Vv,i){case"year":c=d(this.year()+1,0,1)-1;break;case"quarter":c=d(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":c=d(this.year(),this.month()+1,1)-1;break;case"week":c=d(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":c=d(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":c=d(this.year(),this.month(),this.date()+1)-1;break;case"hour":c=this._d.valueOf(),c+=jl-ls(c+(this._isUTC?0:this.utcOffset()*cs),jl)-1;break;case"minute":c=this._d.valueOf(),c+=cs-ls(c,cs)-1;break;case"second":c=this._d.valueOf(),c+=Fl-ls(c,Fl)-1;break}return this._d.setTime(c),we.updateOffset(this,!0),this}function H3(){return this._d.valueOf()-(this._offset||0)*6e4}function G3(){return Math.floor(this.valueOf()/1e3)}function W3(){return new Date(this.valueOf())}function Y3(){var i=this;return[i.year(),i.month(),i.date(),i.hour(),i.minute(),i.second(),i.millisecond()]}function $3(){var i=this;return{years:i.year(),months:i.month(),date:i.date(),hours:i.hours(),minutes:i.minutes(),seconds:i.seconds(),milliseconds:i.milliseconds()}}function q3(){return this.isValid()?this.toISOString():null}function K3(){return Zg(this)}function Q3(){return Lo({},ze(this))}function Z3(){return ze(this).overflow}function X3(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}De("N",0,0,"eraAbbr");De("NN",0,0,"eraAbbr");De("NNN",0,0,"eraAbbr");De("NNNN",0,0,"eraName");De("NNNNN",0,0,"eraNarrow");De("y",["y",1],"yo","eraYear");De("y",["yy",2],0,"eraYear");De("y",["yyy",3],0,"eraYear");De("y",["yyyy",4],0,"eraYear");ve("N",gm);ve("NN",gm);ve("NNN",gm);ve("NNNN",lF);ve("NNNNN",dF);ct(["N","NN","NNN","NNNN","NNNNN"],function(i,c,d,h){var g=d._locale.erasParse(i,h,d._strict);g?ze(d).era=g:ze(d).invalidEra=i});ve("y",ps);ve("yy",ps);ve("yyy",ps);ve("yyyy",ps);ve("yo",uF);ct(["y","yy","yyy","yyyy"],hn);ct(["yo"],function(i,c,d,h){var g;d._locale._eraYearOrdinalRegex&&(g=i.match(d._locale._eraYearOrdinalRegex)),d._locale.eraYearOrdinalParse?c[hn]=d._locale.eraYearOrdinalParse(i,g):c[hn]=parseInt(i,10)});function J3(i,c){var d,h,g,w=this._eras||ao("en")._eras;for(d=0,h=w.length;d<h;++d){switch(typeof w[d].since){case"string":g=we(w[d].since).startOf("day"),w[d].since=g.valueOf();break}switch(typeof w[d].until){case"undefined":w[d].until=1/0;break;case"string":g=we(w[d].until).startOf("day").valueOf(),w[d].until=g.valueOf();break}}return w}function eF(i,c,d){var h,g,w=this.eras(),k,y,b;for(i=i.toUpperCase(),h=0,g=w.length;h<g;++h)if(k=w[h].name.toUpperCase(),y=w[h].abbr.toUpperCase(),b=w[h].narrow.toUpperCase(),d)switch(c){case"N":case"NN":case"NNN":if(y===i)return w[h];break;case"NNNN":if(k===i)return w[h];break;case"NNNNN":if(b===i)return w[h];break}else if([k,y,b].indexOf(i)>=0)return w[h]}function tF(i,c){var d=i.since<=i.until?1:-1;return c===void 0?we(i.since).year():we(i.since).year()+(c-i.offset)*d}function nF(){var i,c,d,h=this.localeData().eras();for(i=0,c=h.length;i<c;++i)if(d=this.clone().startOf("day").valueOf(),h[i].since<=d&&d<=h[i].until||h[i].until<=d&&d<=h[i].since)return h[i].name;return""}function iF(){var i,c,d,h=this.localeData().eras();for(i=0,c=h.length;i<c;++i)if(d=this.clone().startOf("day").valueOf(),h[i].since<=d&&d<=h[i].until||h[i].until<=d&&d<=h[i].since)return h[i].narrow;return""}function oF(){var i,c,d,h=this.localeData().eras();for(i=0,c=h.length;i<c;++i)if(d=this.clone().startOf("day").valueOf(),h[i].since<=d&&d<=h[i].until||h[i].until<=d&&d<=h[i].since)return h[i].abbr;return""}function rF(){var i,c,d,h,g=this.localeData().eras();for(i=0,c=g.length;i<c;++i)if(d=g[i].since<=g[i].until?1:-1,h=this.clone().startOf("day").valueOf(),g[i].since<=h&&h<=g[i].until||g[i].until<=h&&h<=g[i].since)return(this.year()-we(g[i].since).year())*d+g[i].offset;return this.year()}function sF(i){return Ke(this,"_erasNameRegex")||mm.call(this),i?this._erasNameRegex:this._erasRegex}function aF(i){return Ke(this,"_erasAbbrRegex")||mm.call(this),i?this._erasAbbrRegex:this._erasRegex}function cF(i){return Ke(this,"_erasNarrowRegex")||mm.call(this),i?this._erasNarrowRegex:this._erasRegex}function gm(i,c){return c.erasAbbrRegex(i)}function lF(i,c){return c.erasNameRegex(i)}function dF(i,c){return c.erasNarrowRegex(i)}function uF(i,c){return c._eraYearOrdinalRegex||ps}function mm(){var i=[],c=[],d=[],h=[],g,w,k=this.eras();for(g=0,w=k.length;g<w;++g)c.push(Fn(k[g].name)),i.push(Fn(k[g].abbr)),d.push(Fn(k[g].narrow)),h.push(Fn(k[g].name)),h.push(Fn(k[g].abbr)),h.push(Fn(k[g].narrow));this._erasRegex=new RegExp("^("+h.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+c.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+i.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+d.join("|")+")","i")}De(0,["gg",2],0,function(){return this.weekYear()%100});De(0,["GG",2],0,function(){return this.isoWeekYear()%100});function ad(i,c){De(0,[i,i.length],0,c)}ad("gggg","weekYear");ad("ggggg","weekYear");ad("GGGG","isoWeekYear");ad("GGGGG","isoWeekYear");gn("weekYear","gg");gn("isoWeekYear","GG");mn("weekYear",1);mn("isoWeekYear",1);ve("G",nd);ve("g",nd);ve("GG",bt,Vn);ve("gg",bt,Vn);ve("GGGG",im,nm);ve("gggg",im,nm);ve("GGGGG",td,Jl);ve("ggggg",td,Jl);ja(["gggg","ggggg","GGGG","GGGGG"],function(i,c,d,h){c[h.substr(0,2)]=Ve(i)});ja(["gg","GG"],function(i,c,d,h){c[h]=we.parseTwoDigitYear(i)});function hF(i){return Hv.call(this,i,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function gF(i){return Hv.call(this,i,this.isoWeek(),this.isoWeekday(),1,4)}function mF(){return io(this.year(),1,4)}function fF(){return io(this.isoWeekYear(),1,4)}function pF(){var i=this.localeData()._week;return io(this.year(),i.dow,i.doy)}function bF(){var i=this.localeData()._week;return io(this.weekYear(),i.dow,i.doy)}function Hv(i,c,d,h,g){var w;return i==null?Pa(this,h,g).year:(w=io(i,h,g),c>w&&(c=w),kF.call(this,i,c,d,h,g))}function kF(i,c,d,h,g){var w=vv(i,c,d,h,g),k=Ma(w.year,0,w.dayOfYear);return this.year(k.getUTCFullYear()),this.month(k.getUTCMonth()),this.date(k.getUTCDate()),this}De("Q",0,"Qo","quarter");gn("quarter","Q");mn("quarter",7);ve("Q",hv);ct("Q",function(i,c){c[to]=(Ve(i)-1)*3});function wF(i){return i==null?Math.ceil((this.month()+1)/3):this.month((i-1)*3+this.month()%3)}De("D",["DD",2],"Do","date");gn("date","D");mn("date",9);ve("D",bt);ve("DD",bt,Vn);ve("Do",function(i,c){return i?c._dayOfMonthOrdinalParse||c._ordinalParse:c._dayOfMonthOrdinalParseLenient});ct(["D","DD"],xi);ct("Do",function(i,c){c[xi]=Ve(i.match(bt)[0])});var Gv=fs("Date",!0);De("DDD",["DDDD",3],"DDDo","dayOfYear");gn("dayOfYear","DDD");mn("dayOfYear",4);ve("DDD",ed);ve("DDDD",gv);ct(["DDD","DDDD"],function(i,c,d){d._dayOfYear=Ve(i)});function _F(i){var c=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return i==null?c:this.add(i-c,"d")}De("m",["mm",2],0,"minute");gn("minute","m");mn("minute",14);ve("m",bt);ve("mm",bt,Vn);ct(["m","mm"],fi);var AF=fs("Minutes",!1);De("s",["ss",2],0,"second");gn("second","s");mn("second",15);ve("s",bt);ve("ss",bt,Vn);ct(["s","ss"],no);var vF=fs("Seconds",!1);De("S",0,0,function(){return~~(this.millisecond()/100)});De(0,["SS",2],0,function(){return~~(this.millisecond()/10)});De(0,["SSS",3],0,"millisecond");De(0,["SSSS",4],0,function(){return this.millisecond()*10});De(0,["SSSSS",5],0,function(){return this.millisecond()*100});De(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});De(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});De(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});De(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});gn("millisecond","ms");mn("millisecond",16);ve("S",ed,hv);ve("SS",ed,Vn);ve("SSS",ed,gv);var Bo,Wv;for(Bo="SSSS";Bo.length<=9;Bo+="S")ve(Bo,ps);function CF(i,c){c[gr]=Ve(("0."+i)*1e3)}for(Bo="S";Bo.length<=9;Bo+="S")ct(Bo,CF);Wv=fs("Milliseconds",!1);De("z",0,0,"zoneAbbr");De("zz",0,0,"zoneName");function yF(){return this._isUTC?"UTC":""}function EF(){return this._isUTC?"Coordinated Universal Time":""}var ue=za.prototype;ue.add=b3;ue.calendar=y3;ue.clone=E3;ue.diff=P3;ue.endOf=U3;ue.format=L3;ue.from=B3;ue.fromNow=z3;ue.to=F3;ue.toNow=j3;ue.get=T4;ue.invalidAt=Z3;ue.isAfter=I3;ue.isBefore=T3;ue.isBetween=D3;ue.isSame=x3;ue.isSameOrAfter=S3;ue.isSameOrBefore=M3;ue.isValid=K3;ue.lang=zv;ue.locale=Bv;ue.localeData=Fv;ue.max=Kz;ue.min=qz;ue.parsingFlags=Q3;ue.set=D4;ue.startOf=V3;ue.subtract=k3;ue.toArray=Y3;ue.toObject=$3;ue.toDate=W3;ue.toISOString=R3;ue.inspect=N3;typeof Symbol<"u"&&Symbol.for!=null&&(ue[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});ue.toJSON=q3;ue.toString=O3;ue.unix=G3;ue.valueOf=H3;ue.creationData=X3;ue.eraName=nF;ue.eraNarrow=iF;ue.eraAbbr=oF;ue.eraYear=rF;ue.year=Av;ue.isLeapYear=$4;ue.weekYear=hF;ue.isoWeekYear=gF;ue.quarter=ue.quarters=wF;ue.month=wv;ue.daysInMonth=G4;ue.week=ue.weeks=J4;ue.isoWeek=ue.isoWeeks=ez;ue.weeksInYear=pF;ue.weeksInWeekYear=bF;ue.isoWeeksInYear=mF;ue.isoWeeksInISOWeekYear=fF;ue.date=Gv;ue.day=ue.days=gz;ue.weekday=mz;ue.isoWeekday=fz;ue.dayOfYear=_F;ue.hour=ue.hours=vz;ue.minute=ue.minutes=AF;ue.second=ue.seconds=vF;ue.millisecond=ue.milliseconds=Wv;ue.utcOffset=o3;ue.utc=s3;ue.local=a3;ue.parseZone=c3;ue.hasAlignedHourOffset=l3;ue.isDST=d3;ue.isLocal=h3;ue.isUtcOffset=g3;ue.isUtc=Ov;ue.isUTC=Ov;ue.zoneAbbr=yF;ue.zoneName=EF;ue.dates=oi("dates accessor is deprecated. Use date instead.",Gv);ue.months=oi("months accessor is deprecated. Use month instead",wv);ue.years=oi("years accessor is deprecated. Use year instead",Av);ue.zone=oi("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",r3);ue.isDSTShifted=oi("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",u3);function IF(i){return pt(i*1e3)}function TF(){return pt.apply(null,arguments).parseZone()}function Yv(i){return i}var Qe=Jg.prototype;Qe.calendar=g4;Qe.longDateFormat=b4;Qe.invalidDate=w4;Qe.ordinal=v4;Qe.preparse=Yv;Qe.postformat=Yv;Qe.relativeTime=y4;Qe.pastFuture=E4;Qe.set=u4;Qe.eras=J3;Qe.erasParse=eF;Qe.erasConvertYear=tF;Qe.erasAbbrRegex=aF;Qe.erasNameRegex=sF;Qe.erasNarrowRegex=cF;Qe.months=j4;Qe.monthsShort=V4;Qe.monthsParse=H4;Qe.monthsRegex=Y4;Qe.monthsShortRegex=W4;Qe.week=K4;Qe.firstDayOfYear=X4;Qe.firstDayOfWeek=Z4;Qe.weekdays=cz;Qe.weekdaysMin=dz;Qe.weekdaysShort=lz;Qe.weekdaysParse=hz;Qe.weekdaysRegex=pz;Qe.weekdaysShortRegex=bz;Qe.weekdaysMinRegex=kz;Qe.isPM=_z;Qe.meridiem=Cz;function Vl(i,c,d,h){var g=ao(),w=Oi().set(h,c);return g[d](w,i)}function $v(i,c,d){if(so(i)&&(c=i,i=void 0),i=i||"",c!=null)return Vl(i,c,d,"month");var h,g=[];for(h=0;h<12;h++)g[h]=Vl(i,h,d,"month");return g}function fm(i,c,d,h){typeof i=="boolean"?(so(c)&&(d=c,c=void 0),c=c||""):(c=i,d=c,i=!1,so(c)&&(d=c,c=void 0),c=c||"");var g=ao(),w=i?g._week.dow:0,k,y=[];if(d!=null)return Vl(c,(d+w)%7,h,"day");for(k=0;k<7;k++)y[k]=Vl(c,(k+w)%7,h,"day");return y}function DF(i,c){return $v(i,c,"months")}function xF(i,c){return $v(i,c,"monthsShort")}function SF(i,c,d){return fm(i,c,d,"weekdays")}function MF(i,c,d){return fm(i,c,d,"weekdaysShort")}function PF(i,c,d){return fm(i,c,d,"weekdaysMin")}Fo("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(i){var c=i%10,d=Ve(i%100/10)===1?"th":c===1?"st":c===2?"nd":c===3?"rd":"th";return i+d}});we.lang=oi("moment.lang is deprecated. Use moment.locale instead.",Fo);we.langData=oi("moment.langData is deprecated. Use moment.localeData instead.",ao);var Ji=Math.abs;function OF(){var i=this._data;return this._milliseconds=Ji(this._milliseconds),this._days=Ji(this._days),this._months=Ji(this._months),i.milliseconds=Ji(i.milliseconds),i.seconds=Ji(i.seconds),i.minutes=Ji(i.minutes),i.hours=Ji(i.hours),i.months=Ji(i.months),i.years=Ji(i.years),this}function qv(i,c,d,h){var g=_i(c,d);return i._milliseconds+=h*g._milliseconds,i._days+=h*g._days,i._months+=h*g._months,i._bubble()}function RF(i,c){return qv(this,i,c,1)}function NF(i,c){return qv(this,i,c,-1)}function X0(i){return i<0?Math.floor(i):Math.ceil(i)}function LF(){var i=this._milliseconds,c=this._days,d=this._months,h=this._data,g,w,k,y,b;return i>=0&&c>=0&&d>=0||i<=0&&c<=0&&d<=0||(i+=X0(Rg(d)+c)*864e5,c=0,d=0),h.milliseconds=i%1e3,g=ti(i/1e3),h.seconds=g%60,w=ti(g/60),h.minutes=w%60,k=ti(w/60),h.hours=k%24,c+=ti(k/24),b=ti(Kv(c)),d+=b,c-=X0(Rg(b)),y=ti(d/12),d%=12,h.days=c,h.months=d,h.years=y,this}function Kv(i){return i*4800/146097}function Rg(i){return i*146097/4800}function BF(i){if(!this.isValid())return NaN;var c,d,h=this._milliseconds;if(i=ri(i),i==="month"||i==="quarter"||i==="year")switch(c=this._days+h/864e5,d=this._months+Kv(c),i){case"month":return d;case"quarter":return d/3;case"year":return d/12}else switch(c=this._days+Math.round(Rg(this._months)),i){case"week":return c/7+h/6048e5;case"day":return c+h/864e5;case"hour":return c*24+h/36e5;case"minute":return c*1440+h/6e4;case"second":return c*86400+h/1e3;case"millisecond":return Math.floor(c*864e5)+h;default:throw new Error("Unknown unit "+i)}}function zF(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Ve(this._months/12)*31536e6:NaN}function co(i){return function(){return this.as(i)}}var FF=co("ms"),jF=co("s"),VF=co("m"),UF=co("h"),HF=co("d"),GF=co("w"),WF=co("M"),YF=co("Q"),$F=co("y");function qF(){return _i(this)}function KF(i){return i=ri(i),this.isValid()?this[i+"s"]():NaN}function _r(i){return function(){return this.isValid()?this._data[i]:NaN}}var QF=_r("milliseconds"),ZF=_r("seconds"),XF=_r("minutes"),JF=_r("hours"),ej=_r("days"),tj=_r("months"),nj=_r("years");function ij(){return ti(this.days()/7)}var eo=Math.round,rs={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function oj(i,c,d,h,g){return g.relativeTime(c||1,!!d,i,h)}function rj(i,c,d,h){var g=_i(i).abs(),w=eo(g.as("s")),k=eo(g.as("m")),y=eo(g.as("h")),b=eo(g.as("d")),I=eo(g.as("M")),E=eo(g.as("w")),x=eo(g.as("y")),C=w<=d.ss&&["s",w]||w<d.s&&["ss",w]||k<=1&&["m"]||k<d.m&&["mm",k]||y<=1&&["h"]||y<d.h&&["hh",y]||b<=1&&["d"]||b<d.d&&["dd",b];return d.w!=null&&(C=C||E<=1&&["w"]||E<d.w&&["ww",E]),C=C||I<=1&&["M"]||I<d.M&&["MM",I]||x<=1&&["y"]||["yy",x],C[2]=c,C[3]=+i>0,C[4]=h,oj.apply(null,C)}function sj(i){return i===void 0?eo:typeof i=="function"?(eo=i,!0):!1}function aj(i,c){return rs[i]===void 0?!1:c===void 0?rs[i]:(rs[i]=c,i==="s"&&(rs.ss=c-1),!0)}function cj(i,c){if(!this.isValid())return this.localeData().invalidDate();var d=!1,h=rs,g,w;return typeof i=="object"&&(c=i,i=!1),typeof i=="boolean"&&(d=i),typeof c=="object"&&(h=Object.assign({},rs,c),c.s!=null&&c.ss==null&&(h.ss=c.s-1)),g=this.localeData(),w=rj(this,!d,h,g),d&&(w=g.pastFuture(+this,w)),g.postformat(w)}var gg=Math.abs;function Jr(i){return(i>0)-(i<0)||+i}function cd(){if(!this.isValid())return this.localeData().invalidDate();var i=gg(this._milliseconds)/1e3,c=gg(this._days),d=gg(this._months),h,g,w,k,y=this.asSeconds(),b,I,E,x;return y?(h=ti(i/60),g=ti(h/60),i%=60,h%=60,w=ti(d/12),d%=12,k=i?i.toFixed(3).replace(/\.?0+$/,""):"",b=y<0?"-":"",I=Jr(this._months)!==Jr(y)?"-":"",E=Jr(this._days)!==Jr(y)?"-":"",x=Jr(this._milliseconds)!==Jr(y)?"-":"",b+"P"+(w?I+w+"Y":"")+(d?I+d+"M":"")+(c?E+c+"D":"")+(g||h||i?"T":"")+(g?x+g+"H":"")+(h?x+h+"M":"")+(i?x+k+"S":"")):"P0D"}var We=sd.prototype;We.isValid=e3;We.abs=OF;We.add=RF;We.subtract=NF;We.as=BF;We.asMilliseconds=FF;We.asSeconds=jF;We.asMinutes=VF;We.asHours=UF;We.asDays=HF;We.asWeeks=GF;We.asMonths=WF;We.asQuarters=YF;We.asYears=$F;We.valueOf=zF;We._bubble=LF;We.clone=qF;We.get=KF;We.milliseconds=QF;We.seconds=ZF;We.minutes=XF;We.hours=JF;We.days=ej;We.weeks=ij;We.months=tj;We.years=nj;We.humanize=cj;We.toISOString=cd;We.toString=cd;We.toJSON=cd;We.locale=Bv;We.localeData=Fv;We.toIsoString=oi("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",cd);We.lang=zv;De("X",0,0,"unix");De("x",0,0,"valueOf");ve("x",nd);ve("X",S4);ct("X",function(i,c,d){d._d=new Date(parseFloat(i)*1e3)});ct("x",function(i,c,d){d._d=new Date(Ve(i))});//! moment.js
we.version="2.29.4";l4(pt);we.fn=ue;we.min=Qz;we.max=Zz;we.now=Xz;we.utc=Oi;we.unix=IF;we.months=DF;we.isDate=Ba;we.locale=Fo;we.invalid=Zl;we.duration=_i;we.isMoment=wi;we.weekdays=SF;we.parseZone=TF;we.localeData=ao;we.isDuration=Il;we.monthsShort=xF;we.weekdaysMin=PF;we.defineLocale=am;we.updateLocale=Tz;we.locales=Dz;we.weekdaysShort=MF;we.normalizeUnits=ri;we.relativeTimeRounding=sj;we.relativeTimeThreshold=aj;we.calendarFormat=C3;we.prototype=ue;we.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var Qv={exports:{}};const lj=bx(kx);/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(i,c){(function(d,h){i.exports=h(lj)})(window,function(d){return function(h){var g={};function w(k){if(g[k])return g[k].exports;var y=g[k]={i:k,l:!1,exports:{}};return h[k].call(y.exports,y,y.exports,w),y.l=!0,y.exports}return w.m=h,w.c=g,w.d=function(k,y,b){w.o(k,y)||Object.defineProperty(k,y,{enumerable:!0,get:b})},w.r=function(k){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(k,"__esModule",{value:!0})},w.t=function(k,y){if(1&y&&(k=w(k)),8&y||4&y&&typeof k=="object"&&k&&k.__esModule)return k;var b=Object.create(null);if(w.r(b),Object.defineProperty(b,"default",{enumerable:!0,value:k}),2&y&&typeof k!="string")for(var I in k)w.d(b,I,function(E){return k[E]}.bind(null,I));return b},w.n=function(k){var y=k&&k.__esModule?function(){return k.default}:function(){return k};return w.d(y,"a",y),y},w.o=function(k,y){return Object.prototype.hasOwnProperty.call(k,y)},w.p="",w(w.s=3)}([function(h,g){h.exports=d},function(h,g,w){(function(k){var y=typeof k=="object"&&k&&k.Object===Object&&k;g.a=y}).call(this,w(2))},function(h,g){var w;w=function(){return this}();try{w=w||new Function("return this")()}catch{typeof window=="object"&&(w=window)}h.exports=w},function(h,g,w){w.r(g);var k=w(0),y=w.n(k),b=function(j){var X=typeof j;return j!=null&&(X=="object"||X=="function")},I=w(1),E=typeof self=="object"&&self&&self.Object===Object&&self,x=I.a||E||Function("return this")(),C=function(){return x.Date.now()},P=/\s/,R=function(j){for(var X=j.length;X--&&P.test(j.charAt(X)););return X},U=/^\s+/,G=function(j){return j&&j.slice(0,R(j)+1).replace(U,"")},W=x.Symbol,F=Object.prototype,H=F.hasOwnProperty,J=F.toString,ee=W?W.toStringTag:void 0,se=function(j){var X=H.call(j,ee),oe=j[ee];try{j[ee]=void 0;var ce=!0}catch{}var Y=J.call(j);return ce&&(X?j[ee]=oe:delete j[ee]),Y},te=Object.prototype.toString,q=function(j){return te.call(j)},ne=W?W.toStringTag:void 0,fe=function(j){return j==null?j===void 0?"[object Undefined]":"[object Null]":ne&&ne in Object(j)?se(j):q(j)},de=function(j){return j!=null&&typeof j=="object"},z=function(j){return typeof j=="symbol"||de(j)&&fe(j)=="[object Symbol]"},Ce=/^[-+]0x[0-9a-f]+$/i,ie=/^0b[01]+$/i,be=/^0o[0-7]+$/i,Q=parseInt,Z=function(j){if(typeof j=="number")return j;if(z(j))return NaN;if(b(j)){var X=typeof j.valueOf=="function"?j.valueOf():j;j=b(X)?X+"":X}if(typeof j!="string")return j===0?j:+j;j=G(j);var oe=ie.test(j);return oe||be.test(j)?Q(j.slice(2),oe?2:8):Ce.test(j)?NaN:+j},ke=Math.max,_e=Math.min,Me=function(j,X,oe){var ce,Y,Oe,he,Ee,$e,$t=0,_t=!1,Et=!1,cn=!0;if(typeof j!="function")throw new TypeError("Expected a function");function xn(It){var fn=ce,Pe=Y;return ce=Y=void 0,$t=It,he=j.apply(Pe,fn)}function Pt(It){return $t=It,Ee=setTimeout(Un,X),_t?xn(It):he}function Sn(It){var fn=It-$e;return $e===void 0||fn>=X||fn<0||Et&&It-$t>=Oe}function Un(){var It=C();if(Sn(It))return tn(It);Ee=setTimeout(Un,function(fn){var Pe=X-(fn-$e);return Et?_e(Pe,Oe-(fn-$t)):Pe}(It))}function tn(It){return Ee=void 0,cn&&ce?xn(It):(ce=Y=void 0,he)}function Ni(){var It=C(),fn=Sn(It);if(ce=arguments,Y=this,$e=It,fn){if(Ee===void 0)return Pt($e);if(Et)return clearTimeout(Ee),Ee=setTimeout(Un,X),xn($e)}return Ee===void 0&&(Ee=setTimeout(Un,X)),he}return X=Z(X)||0,b(oe)&&(_t=!!oe.leading,Oe=(Et="maxWait"in oe)?ke(Z(oe.maxWait)||0,X):Oe,cn="trailing"in oe?!!oe.trailing:cn),Ni.cancel=function(){Ee!==void 0&&clearTimeout(Ee),$t=0,ce=$e=Y=Ee=void 0},Ni.flush=function(){return Ee===void 0?he:tn(C())},Ni},ye={name:"ckeditor",created(){const{CKEDITOR_VERSION:j}=window;if(j){const[X]=j.split(".").map(Number);X<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(k.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const j=Object.assign({},this.config);this.modelValue&&(j.initialData=this.modelValue),this.editor.create(this.$el,j).then(X=>{this.instance=Object(k.markRaw)(X),this.setUpEditorEvents(),this.modelValue!==j.initialData&&X.setData(this.modelValue),this.disabled&&X.enableReadOnlyMode("Integration Sample"),this.$emit("ready",X)}).catch(X=>{console.error(X)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(j){this.instance&&j!==this.lastEditorData&&this.instance.setData(j)},disabled(j){j?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const j=this.instance,X=Me(oe=>{const ce=this.lastEditorData=j.getData();this.$emit("update:modelValue",ce,oe,j),this.$emit("input",ce,oe,j)},300,{leading:!0});j.model.document.on("change:data",X),j.editing.view.document.on("focus",oe=>{this.$emit("focus",oe,j)}),j.editing.view.document.on("blur",oe=>{this.$emit("blur",oe,j)})}}};const lt=y.a?y.a.version:k.version,[Ft]=lt.split(".").map(j=>parseInt(j,10));if(Ft<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Je={install(j){j.component("ckeditor",ye)},component:ye};g.default=Je}]).default})})(Qv);const dj=nA(Qv.exports),Zv=wx(a4);Zv.config.globalProperties.$filters={datetime(i){return we.utc(i).utcOffset(5).format("DD.MM.YYYY H:mm")},date(i){return we.utc(i).utcOffset(5).format("DD.MM.YYYY")}};Zv.use(jB).use(c4).use(dj).mount("#admin")});export default uj();