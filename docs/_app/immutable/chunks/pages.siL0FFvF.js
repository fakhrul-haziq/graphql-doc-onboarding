var Wy=Object.defineProperty;var zy=(r,e,t)=>e in r?Wy(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var An=(r,e,t)=>(zy(r,typeof e!="symbol"?e+"":e,t),t),Yy=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var su=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};var us=(r,e,t)=>(Yy(r,e,"access private method"),t);import{b as bs}from"./paths.DyqttAU_.js";import{S as Bn,i as Ln,a as nn,t as un,g as bt,c as Ft,b as Ht,d as ar,m as jt,e as qt}from"./index.C5OLbMYN.js";import{s as Cn,e as ee,i as En,d as J,r as Ke,u as sp,f as Rn,g as kn,h as Hn,a4 as Ss,x as nt,y as et,z as tt,R as ai,q as Ec,l as _u,m as Tu,n as Au,H as Jn,j as he,G as At,a as bu,c as Fu,U as Qy,V as Jy,a7 as Ic,o as Xy}from"./scheduler.X4qejJLZ.js";function at(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function op(r,e){const t={},s={},o={$$scope:1};let a=r.length;for(;a--;){const l=r[a],p=e[a];if(p){for(const d in l)d in p||(s[d]=1);for(const d in p)o[d]||(t[d]=p[d],o[d]=1);r[a]=p}else for(const d in l)o[d]=1}for(const l in s)l in t||(t[l]=void 0);return t}function E_(r){return typeof r=="object"&&r!==null?r:{}}function du(...r){return"/"+r.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}function hu(r){return r.startsWith("/")||r.startsWith("#")}function up(r,e){return e.slug(r).replace(/--+/g,"-")}function ou(r){let e,t;const s=r[5].default,o=Ke(s,r,r[4],null);let a=[{id:r[1]}],l={};for(let p=0;p<a.length;p+=1)l=sp(l,a[p]);return{c(){e=Rn(`h${r[0].depth}`),o&&o.c(),this.h()},l(p){e=kn(p,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var d=Hn(e);o&&o.l(d),d.forEach(J),this.h()},h(){Ss(`h${r[0].depth}`)(e,l)},m(p,d){En(p,e,d),o&&o.m(e,null),t=!0},p(p,d){o&&o.p&&(!t||d&16)&&nt(o,s,p,p[4],t?tt(s,p[4],d,null):et(p[4]),null),Ss(`h${p[0].depth}`)(e,l=op(a,[(!t||d&2)&&{id:p[1]}]))},i(p){t||(nn(o,p),t=!0)},o(p){un(o,p),t=!1},d(p){p&&J(e),o&&o.d(p)}}}function Zy(r){let e=`h${r[0].depth}`,t,s,o=`h${r[0].depth}`&&ou(r);return{c(){o&&o.c(),t=ee()},l(a){o&&o.l(a),t=ee()},m(a,l){o&&o.m(a,l),En(a,t,l),s=!0},p(a,[l]){`h${a[0].depth}`?e?Cn(e,`h${a[0].depth}`)?(o.d(1),o=ou(a),e=`h${a[0].depth}`,o.c(),o.m(t.parentNode,t)):o.p(a,l):(o=ou(a),e=`h${a[0].depth}`,o.c(),o.m(t.parentNode,t)):e&&(o.d(1),o=null,e=`h${a[0].depth}`)},i(a){s||(nn(o,a),s=!0)},o(a){un(o,a),s=!1},d(a){a&&J(t),o&&o.d(a)}}}function Ky(r,e,t){let{$$slots:s={},$$scope:o}=e,{token:a}=e,{options:l}=e;const p=void 0;let d;return r.$$set=S=>{"token"in S&&t(0,a=S.token),"options"in S&&t(2,l=S.options),"$$scope"in S&&t(4,o=S.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,d=up(a.text,l.slugger))},[a,d,l,p,o,s]}class nD extends Bn{constructor(e){super(),Ln(this,e,Ky,Zy,Cn,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function eD(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Rn("blockquote"),o&&o.c()},l(a){e=kn(a,"BLOCKQUOTE",{});var l=Hn(e);o&&o.l(l),l.forEach(J)},m(a,l){En(a,e,l),o&&o.m(e,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,a,a[3],t?tt(s,a[3],l,null):et(a[3]),null)},i(a){t||(nn(o,a),t=!0)},o(a){un(o,a),t=!1},d(a){a&&J(e),o&&o.d(a)}}}function tD(r,e,t){let{$$slots:s={},$$scope:o}=e;const a=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class rD extends Bn{constructor(e){super(),Ln(this,e,tD,eD,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function vc(r,e,t){const s=r.slice();return s[3]=e[t],s}function _c(r){let e,t,s=at(r[0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=Tc(vc(r,s,l));const a=l=>un(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=ee()},l(l){for(let p=0;p<o.length;p+=1)o[p].l(l);e=ee()},m(l,p){for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(l,p);En(l,e,p),t=!0},p(l,p){if(p&7){s=at(l[0]);let d;for(d=0;d<s.length;d+=1){const S=vc(l,s,d);o[d]?(o[d].p(S,p),nn(o[d],1)):(o[d]=Tc(S),o[d].c(),nn(o[d],1),o[d].m(e.parentNode,e))}for(bt(),d=s.length;d<o.length;d+=1)a(d);Ft()}},i(l){if(!t){for(let p=0;p<s.length;p+=1)nn(o[p]);t=!0}},o(l){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)un(o[p]);t=!1},d(l){l&&J(e),ai(o,l)}}}function Tc(r){let e,t;return e=new ap({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){Ht(e.$$.fragment)},l(s){ar(e.$$.fragment,s)},m(s,o){jt(e,s,o),t=!0},p(s,o){const a={};o&1&&(a.token=s[3]),o&2&&(a.renderers=s[1]),o&4&&(a.options=s[2]),e.$set(a)},i(s){t||(nn(e.$$.fragment,s),t=!0)},o(s){un(e.$$.fragment,s),t=!1},d(s){qt(e,s)}}}function iD(r){let e,t,s=r[0]&&_c(r);return{c(){s&&s.c(),e=ee()},l(o){s&&s.l(o),e=ee()},m(o,a){s&&s.m(o,a),En(o,e,a),t=!0},p(o,[a]){o[0]?s?(s.p(o,a),a&1&&nn(s,1)):(s=_c(o),s.c(),nn(s,1),s.m(e.parentNode,e)):s&&(bt(),un(s,1,1,()=>{s=null}),Ft())},i(o){t||(nn(s),t=!0)},o(o){un(s),t=!1},d(o){o&&J(e),s&&s.d(o)}}}function sD(r,e,t){let{tokens:s}=e,{renderers:o}=e,{options:a}=e;return r.$$set=l=>{"tokens"in l&&t(0,s=l.tokens),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,a=l.options)},[s,o,a]}class Fs extends Bn{constructor(e){super(),Ln(this,e,sD,iD,Cn,{tokens:0,renderers:1,options:2})}}function Ac(r){let e,t,s;var o=r[1][r[0].type];function a(l,p){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[aD]},$$scope:{ctx:l}}}}return o&&(e=Ec(o,a(r))),{c(){e&&Ht(e.$$.fragment),t=ee()},l(l){e&&ar(e.$$.fragment,l),t=ee()},m(l,p){e&&jt(e,l,p),En(l,t,p),s=!0},p(l,p){if(p&3&&o!==(o=l[1][l[0].type])){if(e){bt();const d=e;un(d.$$.fragment,1,0,()=>{qt(d,1)}),Ft()}o?(e=Ec(o,a(l)),Ht(e.$$.fragment),nn(e.$$.fragment,1),jt(e,t.parentNode,t)):e=null}else if(o){const d={};p&1&&(d.token=l[0]),p&4&&(d.options=l[2]),p&2&&(d.renderers=l[1]),p&15&&(d.$$scope={dirty:p,ctx:l}),e.$set(d)}},i(l){s||(e&&nn(e.$$.fragment,l),s=!0)},o(l){e&&un(e.$$.fragment,l),s=!1},d(l){l&&J(t),e&&qt(e,l)}}}function oD(r){let e=r[0].raw+"",t;return{c(){t=_u(e)},l(s){t=Tu(s,e)},m(s,o){En(s,t,o)},p(s,o){o&1&&e!==(e=s[0].raw+"")&&Au(t,e)},i:Jn,o:Jn,d(s){s&&J(t)}}}function uD(r){let e,t;return e=new Fs({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){Ht(e.$$.fragment)},l(s){ar(e.$$.fragment,s)},m(s,o){jt(e,s,o),t=!0},p(s,o){const a={};o&1&&(a.tokens=s[0].tokens),o&2&&(a.renderers=s[1]),o&4&&(a.options=s[2]),e.$set(a)},i(s){t||(nn(e.$$.fragment,s),t=!0)},o(s){un(e.$$.fragment,s),t=!1},d(s){qt(e,s)}}}function aD(r){let e,t,s,o;const a=[uD,oD],l=[];function p(d,S){return"tokens"in d[0]&&d[0].tokens?0:1}return e=p(r),t=l[e]=a[e](r),{c(){t.c(),s=ee()},l(d){t.l(d),s=ee()},m(d,S){l[e].m(d,S),En(d,s,S),o=!0},p(d,S){let y=e;e=p(d),e===y?l[e].p(d,S):(bt(),un(l[y],1,1,()=>{l[y]=null}),Ft(),t=l[e],t?t.p(d,S):(t=l[e]=a[e](d),t.c()),nn(t,1),t.m(s.parentNode,s))},i(d){o||(nn(t),o=!0)},o(d){un(t),o=!1},d(d){d&&J(s),l[e].d(d)}}}function lD(r){let e,t,s=r[1][r[0].type]&&Ac(r);return{c(){s&&s.c(),e=ee()},l(o){s&&s.l(o),e=ee()},m(o,a){s&&s.m(o,a),En(o,e,a),t=!0},p(o,[a]){o[1][o[0].type]?s?(s.p(o,a),a&3&&nn(s,1)):(s=Ac(o),s.c(),nn(s,1),s.m(e.parentNode,e)):s&&(bt(),un(s,1,1,()=>{s=null}),Ft())},i(o){t||(nn(s),t=!0)},o(o){un(s),t=!1},d(o){o&&J(e),s&&s.d(o)}}}function cD(r,e,t){let{token:s}=e,{renderers:o}=e,{options:a}=e;return r.$$set=l=>{"token"in l&&t(0,s=l.token),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,a=l.options)},[s,o,a]}class ap extends Bn{constructor(e){super(),Ln(this,e,cD,lD,Cn,{token:0,renderers:1,options:2})}}function bc(r,e,t){const s=r.slice();return s[4]=e[t],s}function Fc(r){let e,t;return e=new ap({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){Ht(e.$$.fragment)},l(s){ar(e.$$.fragment,s)},m(s,o){jt(e,s,o),t=!0},p(s,o){const a={};o&1&&(a.token={...s[4]}),o&2&&(a.options=s[1]),o&4&&(a.renderers=s[2]),e.$set(a)},i(s){t||(nn(e.$$.fragment,s),t=!0)},o(s){un(e.$$.fragment,s),t=!1},d(s){qt(e,s)}}}function uu(r){let e,t,s,o=at(r[0].items),a=[];for(let S=0;S<o.length;S+=1)a[S]=Fc(bc(r,o,S));const l=S=>un(a[S],1,1,()=>{a[S]=null});let p=[{start:t=r[0].start||1}],d={};for(let S=0;S<p.length;S+=1)d=sp(d,p[S]);return{c(){e=Rn(r[3]);for(let S=0;S<a.length;S+=1)a[S].c();this.h()},l(S){e=kn(S,(r[3]||"null").toUpperCase(),{start:!0});var y=Hn(e);for(let I=0;I<a.length;I+=1)a[I].l(y);y.forEach(J),this.h()},h(){Ss(r[3])(e,d)},m(S,y){En(S,e,y);for(let I=0;I<a.length;I+=1)a[I]&&a[I].m(e,null);s=!0},p(S,y){if(y&7){o=at(S[0].items);let I;for(I=0;I<o.length;I+=1){const C=bc(S,o,I);a[I]?(a[I].p(C,y),nn(a[I],1)):(a[I]=Fc(C),a[I].c(),nn(a[I],1),a[I].m(e,null))}for(bt(),I=o.length;I<a.length;I+=1)l(I);Ft()}Ss(S[3])(e,d=op(p,[(!s||y&1&&t!==(t=S[0].start||1))&&{start:t}]))},i(S){if(!s){for(let y=0;y<o.length;y+=1)nn(a[y]);s=!0}},o(S){a=a.filter(Boolean);for(let y=0;y<a.length;y+=1)un(a[y]);s=!1},d(S){S&&J(e),ai(a,S)}}}function pD(r){let e=r[3],t,s=r[3]&&uu(r);return{c(){s&&s.c(),t=ee()},l(o){s&&s.l(o),t=ee()},m(o,a){s&&s.m(o,a),En(o,t,a)},p(o,[a]){o[3]?e?Cn(e,o[3])?(s.d(1),s=uu(o),e=o[3],s.c(),s.m(t.parentNode,t)):s.p(o,a):(s=uu(o),e=o[3],s.c(),s.m(t.parentNode,t)):e&&(s.d(1),s=null,e=o[3])},i:Jn,o(o){un(s,o)},d(o){o&&J(t),s&&s.d(o)}}}function fD(r,e,t){let{token:s}=e,{options:o}=e,{renderers:a}=e,l;return r.$$set=p=>{"token"in p&&t(0,s=p.token),"options"in p&&t(1,o=p.options),"renderers"in p&&t(2,a=p.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,l=s.ordered?"ol":"ul")},[s,o,a,l]}class dD extends Bn{constructor(e){super(),Ln(this,e,fD,pD,Cn,{token:0,options:1,renderers:2})}}function hD(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Rn("li"),o&&o.c()},l(a){e=kn(a,"LI",{});var l=Hn(e);o&&o.l(l),l.forEach(J)},m(a,l){En(a,e,l),o&&o.m(e,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,a,a[3],t?tt(s,a[3],l,null):et(a[3]),null)},i(a){t||(nn(o,a),t=!0)},o(a){un(o,a),t=!1},d(a){a&&J(e),o&&o.d(a)}}}function gD(r,e,t){let{$$slots:s={},$$scope:o}=e;const a=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class mD extends Bn{constructor(e){super(),Ln(this,e,gD,hD,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function SD(r){let e;return{c(){e=Rn("br")},l(t){e=kn(t,"BR",{})},m(t,s){En(t,e,s)},p:Jn,i:Jn,o:Jn,d(t){t&&J(e)}}}function yD(r,e,t){return[void 0,void 0,void 0]}class DD extends Bn{constructor(e){super(),Ln(this,e,yD,SD,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ED(r){let e,t,s=r[0].text+"",o,a;return{c(){e=Rn("pre"),t=Rn("code"),o=_u(s),this.h()},l(l){e=kn(l,"PRE",{});var p=Hn(e);t=kn(p,"CODE",{class:!0});var d=Hn(t);o=Tu(d,s),d.forEach(J),p.forEach(J),this.h()},h(){he(t,"class",a=`lang-${r[0].lang}`)},m(l,p){En(l,e,p),At(e,t),At(t,o)},p(l,[p]){p&1&&s!==(s=l[0].text+"")&&Au(o,s),p&1&&a!==(a=`lang-${l[0].lang}`)&&he(t,"class",a)},i:Jn,o:Jn,d(l){l&&J(e)}}}function ID(r,e,t){let{token:s}=e;const o=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class vD extends Bn{constructor(e){super(),Ln(this,e,ID,ED,Cn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function _D(r){let e,t=r[0].raw.slice(1,r[0].raw.length-1)+"",s;return{c(){e=Rn("code"),s=_u(t)},l(o){e=kn(o,"CODE",{});var a=Hn(e);s=Tu(a,t),a.forEach(J)},m(o,a){En(o,e,a),At(e,s)},p(o,[a]){a&1&&t!==(t=o[0].raw.slice(1,o[0].raw.length-1)+"")&&Au(s,t)},i:Jn,o:Jn,d(o){o&&J(e)}}}function TD(r,e,t){let{token:s}=e;const o=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class AD extends Bn{constructor(e){super(),Ln(this,e,TD,_D,Cn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Cc(r,e,t){const s=r.slice();return s[3]=e[t],s}function Nc(r,e,t){const s=r.slice();return s[6]=e[t],s}function wc(r,e,t){const s=r.slice();return s[9]=e[t],s}function Rc(r){let e,t,s,o;return t=new Fs({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){e=Rn("th"),Ht(t.$$.fragment),s=bu(),this.h()},l(a){e=kn(a,"TH",{scope:!0});var l=Hn(e);ar(t.$$.fragment,l),s=Fu(l),l.forEach(J),this.h()},h(){he(e,"scope","col")},m(a,l){En(a,e,l),jt(t,e,null),At(e,s),o=!0},p(a,l){const p={};l&1&&(p.tokens=a[9].tokens),l&2&&(p.options=a[1]),l&4&&(p.renderers=a[2]),t.$set(p)},i(a){o||(nn(t.$$.fragment,a),o=!0)},o(a){un(t.$$.fragment,a),o=!1},d(a){a&&J(e),qt(t)}}}function kc(r){let e,t,s;return t=new Fs({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){e=Rn("td"),Ht(t.$$.fragment)},l(o){e=kn(o,"TD",{});var a=Hn(e);ar(t.$$.fragment,a),a.forEach(J)},m(o,a){En(o,e,a),jt(t,e,null),s=!0},p(o,a){const l={};a&1&&(l.tokens=o[6].tokens),a&2&&(l.options=o[1]),a&4&&(l.renderers=o[2]),t.$set(l)},i(o){s||(nn(t.$$.fragment,o),s=!0)},o(o){un(t.$$.fragment,o),s=!1},d(o){o&&J(e),qt(t)}}}function Oc(r){let e,t,s,o=at(r[3]),a=[];for(let p=0;p<o.length;p+=1)a[p]=kc(Nc(r,o,p));const l=p=>un(a[p],1,1,()=>{a[p]=null});return{c(){e=Rn("tr");for(let p=0;p<a.length;p+=1)a[p].c();t=bu()},l(p){e=kn(p,"TR",{});var d=Hn(e);for(let S=0;S<a.length;S+=1)a[S].l(d);t=Fu(d),d.forEach(J)},m(p,d){En(p,e,d);for(let S=0;S<a.length;S+=1)a[S]&&a[S].m(e,null);At(e,t),s=!0},p(p,d){if(d&7){o=at(p[3]);let S;for(S=0;S<o.length;S+=1){const y=Nc(p,o,S);a[S]?(a[S].p(y,d),nn(a[S],1)):(a[S]=kc(y),a[S].c(),nn(a[S],1),a[S].m(e,t))}for(bt(),S=o.length;S<a.length;S+=1)l(S);Ft()}},i(p){if(!s){for(let d=0;d<o.length;d+=1)nn(a[d]);s=!0}},o(p){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)un(a[d]);s=!1},d(p){p&&J(e),ai(a,p)}}}function bD(r){let e,t,s,o,a,l,p=at(r[0].header),d=[];for(let R=0;R<p.length;R+=1)d[R]=Rc(wc(r,p,R));const S=R=>un(d[R],1,1,()=>{d[R]=null});let y=at(r[0].rows),I=[];for(let R=0;R<y.length;R+=1)I[R]=Oc(Cc(r,y,R));const C=R=>un(I[R],1,1,()=>{I[R]=null});return{c(){e=Rn("table"),t=Rn("thead"),s=Rn("tr");for(let R=0;R<d.length;R+=1)d[R].c();o=bu(),a=Rn("tbody");for(let R=0;R<I.length;R+=1)I[R].c()},l(R){e=kn(R,"TABLE",{});var x=Hn(e);t=kn(x,"THEAD",{});var B=Hn(t);s=kn(B,"TR",{});var Q=Hn(s);for(let Vn=0;Vn<d.length;Vn+=1)d[Vn].l(Q);Q.forEach(J),B.forEach(J),o=Fu(x),a=kn(x,"TBODY",{});var dn=Hn(a);for(let Vn=0;Vn<I.length;Vn+=1)I[Vn].l(dn);dn.forEach(J),x.forEach(J)},m(R,x){En(R,e,x),At(e,t),At(t,s);for(let B=0;B<d.length;B+=1)d[B]&&d[B].m(s,null);At(e,o),At(e,a);for(let B=0;B<I.length;B+=1)I[B]&&I[B].m(a,null);l=!0},p(R,[x]){if(x&7){p=at(R[0].header);let B;for(B=0;B<p.length;B+=1){const Q=wc(R,p,B);d[B]?(d[B].p(Q,x),nn(d[B],1)):(d[B]=Rc(Q),d[B].c(),nn(d[B],1),d[B].m(s,null))}for(bt(),B=p.length;B<d.length;B+=1)S(B);Ft()}if(x&7){y=at(R[0].rows);let B;for(B=0;B<y.length;B+=1){const Q=Cc(R,y,B);I[B]?(I[B].p(Q,x),nn(I[B],1)):(I[B]=Oc(Q),I[B].c(),nn(I[B],1),I[B].m(a,null))}for(bt(),B=y.length;B<I.length;B+=1)C(B);Ft()}},i(R){if(!l){for(let x=0;x<p.length;x+=1)nn(d[x]);for(let x=0;x<y.length;x+=1)nn(I[x]);l=!0}},o(R){d=d.filter(Boolean);for(let x=0;x<d.length;x+=1)un(d[x]);I=I.filter(Boolean);for(let x=0;x<I.length;x+=1)un(I[x]);l=!1},d(R){R&&J(e),ai(d,R),ai(I,R)}}}function FD(r,e,t){let{token:s}=e,{options:o}=e,{renderers:a}=e;return r.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options),"renderers"in l&&t(2,a=l.renderers)},[s,o,a]}class CD extends Bn{constructor(e){super(),Ln(this,e,FD,bD,Cn,{token:0,options:1,renderers:2})}}function ND(r){let e,t=r[0].text+"",s;return{c(){e=new Qy(!1),s=ee(),this.h()},l(o){e=Jy(o,!1),s=ee(),this.h()},h(){e.a=s},m(o,a){e.m(t,o,a),En(o,s,a)},p(o,[a]){a&1&&t!==(t=o[0].text+"")&&e.p(t)},i:Jn,o:Jn,d(o){o&&(J(s),e.d())}}}function wD(r,e,t){let{token:s}=e;const o=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class RD extends Bn{constructor(e){super(),Ln(this,e,wD,ND,Cn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function kD(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Rn("p"),o&&o.c()},l(a){e=kn(a,"P",{});var l=Hn(e);o&&o.l(l),l.forEach(J)},m(a,l){En(a,e,l),o&&o.m(e,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,a,a[3],t?tt(s,a[3],l,null):et(a[3]),null)},i(a){t||(nn(o,a),t=!0)},o(a){un(o,a),t=!1},d(a){a&&J(e),o&&o.d(a)}}}function OD(r,e,t){let{$$slots:s={},$$scope:o}=e;const a=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class xD extends Bn{constructor(e){super(),Ln(this,e,OD,kD,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function BD(r){let e,t,s,o;const a=r[4].default,l=Ke(a,r,r[3],null);return{c(){e=Rn("a"),l&&l.c(),this.h()},l(p){e=kn(p,"A",{href:!0,title:!0});var d=Hn(e);l&&l.l(d),d.forEach(J),this.h()},h(){he(e,"href",t=hu(r[0].href)?du(r[1].baseUrl,r[0].href):r[0].href),he(e,"title",s=r[0].title)},m(p,d){En(p,e,d),l&&l.m(e,null),o=!0},p(p,[d]){l&&l.p&&(!o||d&8)&&nt(l,a,p,p[3],o?tt(a,p[3],d,null):et(p[3]),null),(!o||d&3&&t!==(t=hu(p[0].href)?du(p[1].baseUrl,p[0].href):p[0].href))&&he(e,"href",t),(!o||d&1&&s!==(s=p[0].title))&&he(e,"title",s)},i(p){o||(nn(l,p),o=!0)},o(p){un(l,p),o=!1},d(p){p&&J(e),l&&l.d(p)}}}function LD(r,e,t){let{$$slots:s={},$$scope:o}=e,{token:a}=e,{options:l}=e;const p=void 0;return r.$$set=d=>{"token"in d&&t(0,a=d.token),"options"in d&&t(1,l=d.options),"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class PD extends Bn{constructor(e){super(),Ln(this,e,LD,BD,Cn,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function $D(r){let e;const t=r[4].default,s=Ke(t,r,r[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,a){s&&s.m(o,a),e=!0},p(o,[a]){s&&s.p&&(!e||a&8)&&nt(s,t,o,o[3],e?tt(t,o[3],a,null):et(o[3]),null)},i(o){e||(nn(s,o),e=!0)},o(o){un(s,o),e=!1},d(o){s&&s.d(o)}}}function UD(r,e,t){let{$$slots:s={},$$scope:o}=e;const a=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class MD extends Bn{constructor(e){super(),Ln(this,e,UD,$D,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function VD(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Rn("dfn"),o&&o.c()},l(a){e=kn(a,"DFN",{});var l=Hn(e);o&&o.l(l),l.forEach(J)},m(a,l){En(a,e,l),o&&o.m(e,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,a,a[3],t?tt(s,a[3],l,null):et(a[3]),null)},i(a){t||(nn(o,a),t=!0)},o(a){un(o,a),t=!1},d(a){a&&J(e),o&&o.d(a)}}}function GD(r,e,t){let{$$slots:s={},$$scope:o}=e;const a=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class HD extends Bn{constructor(e){super(),Ln(this,e,GD,VD,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function jD(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Rn("del"),o&&o.c()},l(a){e=kn(a,"DEL",{});var l=Hn(e);o&&o.l(l),l.forEach(J)},m(a,l){En(a,e,l),o&&o.m(e,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,a,a[3],t?tt(s,a[3],l,null):et(a[3]),null)},i(a){t||(nn(o,a),t=!0)},o(a){un(o,a),t=!1},d(a){a&&J(e),o&&o.d(a)}}}function qD(r,e,t){let{$$slots:s={},$$scope:o}=e;const a=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class WD extends Bn{constructor(e){super(),Ln(this,e,qD,jD,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zD(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Rn("em"),o&&o.c()},l(a){e=kn(a,"EM",{});var l=Hn(e);o&&o.l(l),l.forEach(J)},m(a,l){En(a,e,l),o&&o.m(e,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,a,a[3],t?tt(s,a[3],l,null):et(a[3]),null)},i(a){t||(nn(o,a),t=!0)},o(a){un(o,a),t=!1},d(a){a&&J(e),o&&o.d(a)}}}function YD(r,e,t){let{$$slots:s={},$$scope:o}=e;const a=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class QD extends Bn{constructor(e){super(),Ln(this,e,YD,zD,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function JD(r){let e;return{c(){e=Rn("hr")},l(t){e=kn(t,"HR",{})},m(t,s){En(t,e,s)},p:Jn,i:Jn,o:Jn,d(t){t&&J(e)}}}function XD(r,e,t){return[void 0,void 0,void 0]}class ZD extends Bn{constructor(e){super(),Ln(this,e,XD,JD,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function KD(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Rn("strong"),o&&o.c()},l(a){e=kn(a,"STRONG",{});var l=Hn(e);o&&o.l(l),l.forEach(J)},m(a,l){En(a,e,l),o&&o.m(e,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,a,a[3],t?tt(s,a[3],l,null):et(a[3]),null)},i(a){t||(nn(o,a),t=!0)},o(a){un(o,a),t=!1},d(a){a&&J(e),o&&o.d(a)}}}function nE(r,e,t){let{$$slots:s={},$$scope:o}=e;const a=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class eE extends Bn{constructor(e){super(),Ln(this,e,nE,KD,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tE(r){let e,t,s,o;return{c(){e=Rn("img"),this.h()},l(a){e=kn(a,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Ic(e.src,t=r[0].href)||he(e,"src",t),he(e,"title",s=r[0].title),he(e,"alt",o=r[0].text),he(e,"class","markdown-image svelte-z38cge")},m(a,l){En(a,e,l)},p(a,[l]){l&1&&!Ic(e.src,t=a[0].href)&&he(e,"src",t),l&1&&s!==(s=a[0].title)&&he(e,"title",s),l&1&&o!==(o=a[0].text)&&he(e,"alt",o)},i:Jn,o:Jn,d(a){a&&J(e)}}}function rE(r,e,t){let{token:s}=e;const o=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class iE extends Bn{constructor(e){super(),Ln(this,e,rE,tE,Cn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sE(r){let e;const t=r[4].default,s=Ke(t,r,r[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,a){s&&s.m(o,a),e=!0},p(o,[a]){s&&s.p&&(!e||a&8)&&nt(s,t,o,o[3],e?tt(t,o[3],a,null):et(o[3]),null)},i(o){e||(nn(s,o),e=!0)},o(o){un(s,o),e=!1},d(o){s&&s.d(o)}}}function oE(r,e,t){let{$$slots:s={},$$scope:o}=e;const a=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[a,l,p,o,s]}class xc extends Bn{constructor(e){super(),Ln(this,e,oE,sE,Cn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Cu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let lr=Cu();function lp(r){lr=r}const cp=/[&<>"']/,uE=new RegExp(cp.source,"g"),pp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,aE=new RegExp(pp.source,"g"),lE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Bc=r=>lE[r];function Te(r,e){if(e){if(cp.test(r))return r.replace(uE,Bc)}else if(pp.test(r))return r.replace(aE,Bc);return r}const cE=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function pE(r){return r.replace(cE,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const fE=/(^|[^\[])\^/g;function Dn(r,e){let t=typeof r=="string"?r:r.source;e=e||"";const s={replace:(o,a)=>{let l=typeof a=="string"?a:a.source;return l=l.replace(fE,"$1"),t=t.replace(o,l),s},getRegex:()=>new RegExp(t,e)};return s}function Lc(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const si={exec:()=>null};function Pc(r,e){const t=r.replace(/\|/g,(a,l,p)=>{let d=!1,S=l;for(;--S>=0&&p[S]==="\\";)d=!d;return d?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function as(r,e,t){const s=r.length;if(s===0)return"";let o=0;for(;o<s;){const a=r.charAt(s-o-1);if(a===e&&!t)o++;else if(a!==e&&t)o++;else break}return r.slice(0,s-o)}function dE(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===e[0])t++;else if(r[s]===e[1]&&(t--,t<0))return s;return-1}function $c(r,e,t,s){const o=e.href,a=e.title?Te(e.title):null,l=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){s.state.inLink=!0;const p={type:"link",raw:t,href:o,title:a,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,p}return{type:"image",raw:t,href:o,title:a,text:Te(l)}}function hE(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const s=t[1];return e.split(`
`).map(o=>{const a=o.match(/^\s+/);if(a===null)return o;const[l]=a;return l.length>=s.length?o.slice(s.length):o}).join(`
`)}class ys{constructor(e){An(this,"options");An(this,"rules");An(this,"lexer");this.options=e||lr}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:as(s,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const s=t[0],o=hE(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=as(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const s=as(t[0].replace(/^ *>[ \t]?/gm,""),`
`),o=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(s);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:a,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s=t[1].trim();const o=s.length>1,a={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");const l=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let p="",d="",S=!1;for(;e;){let y=!1;if(!(t=l.exec(e))||this.rules.block.hr.test(e))break;p=t[0],e=e.substring(p.length);let I=t[2].split(`
`,1)[0].replace(/^\t+/,dn=>" ".repeat(3*dn.length)),C=e.split(`
`,1)[0],R=0;this.options.pedantic?(R=2,d=I.trimStart()):(R=t[2].search(/[^ ]/),R=R>4?1:R,d=I.slice(R),R+=t[1].length);let x=!1;if(!I&&/^ *$/.test(C)&&(p+=C+`
`,e=e.substring(C.length+1),y=!0),!y){const dn=new RegExp(`^ {0,${Math.min(3,R-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Vn=new RegExp(`^ {0,${Math.min(3,R-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),_n=new RegExp(`^ {0,${Math.min(3,R-1)}}(?:\`\`\`|~~~)`),Nn=new RegExp(`^ {0,${Math.min(3,R-1)}}#`);for(;e;){const On=e.split(`
`,1)[0];if(C=On,this.options.pedantic&&(C=C.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),_n.test(C)||Nn.test(C)||dn.test(C)||Vn.test(e))break;if(C.search(/[^ ]/)>=R||!C.trim())d+=`
`+C.slice(R);else{if(x||I.search(/[^ ]/)>=4||_n.test(I)||Nn.test(I)||Vn.test(I))break;d+=`
`+C}!x&&!C.trim()&&(x=!0),p+=On+`
`,e=e.substring(On.length+1),I=C.slice(R)}}a.loose||(S?a.loose=!0:/\n *\n *$/.test(p)&&(S=!0));let B=null,Q;this.options.gfm&&(B=/^\[[ xX]\] /.exec(d),B&&(Q=B[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:p,task:!!B,checked:Q,loose:!1,text:d,tokens:[]}),a.raw+=p}a.items[a.items.length-1].raw=p.trimEnd(),a.items[a.items.length-1].text=d.trimEnd(),a.raw=a.raw.trimEnd();for(let y=0;y<a.items.length;y++)if(this.lexer.state.top=!1,a.items[y].tokens=this.lexer.blockTokens(a.items[y].text,[]),!a.loose){const I=a.items[y].tokens.filter(R=>R.type==="space"),C=I.length>0&&I.some(R=>/\n.*\n/.test(R.raw));a.loose=C}if(a.loose)for(let y=0;y<a.items.length;y++)a.items[y].loose=!0;return a}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:a}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const s=Pc(t[1]),o=t[2].replace(/^\||\| *$/g,"").split("|"),a=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===o.length){for(const p of o)/^ *-+: *$/.test(p)?l.align.push("right"):/^ *:-+: *$/.test(p)?l.align.push("center"):/^ *:-+ *$/.test(p)?l.align.push("left"):l.align.push(null);for(const p of s)l.header.push({text:p,tokens:this.lexer.inline(p)});for(const p of a)l.rows.push(Pc(p,l.header.length).map(d=>({text:d,tokens:this.lexer.inline(d)})));return l}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Te(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const l=as(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{const l=dE(t[2],"()");if(l>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let o=t[2],a="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],a=l[3])}else a=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),$c(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){const o=(s[2]||s[1]).replace(/\s+/g," "),a=t[o.toLowerCase()];if(!a){const l=s[0].charAt(0);return{type:"text",raw:l,text:l}}return $c(s,a,s[0],this.lexer)}}emStrong(e,t,s=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const l=[...o[0]].length-1;let p,d,S=l,y=0;const I=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(I.lastIndex=0,t=t.slice(-1*e.length+l);(o=I.exec(t))!=null;){if(p=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!p)continue;if(d=[...p].length,o[3]||o[4]){S+=d;continue}else if((o[5]||o[6])&&l%3&&!((l+d)%3)){y+=d;continue}if(S-=d,S>0)continue;d=Math.min(d,d+S+y);const C=[...o[0]][0].length,R=e.slice(0,l+o.index+C+d);if(Math.min(l,d)%2){const B=R.slice(1,-1);return{type:"em",raw:R,text:B,tokens:this.lexer.inlineTokens(B)}}const x=R.slice(2,-2);return{type:"strong",raw:R,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),a=/^ /.test(s)&&/ $/.test(s);return o&&a&&(s=s.substring(1,s.length-1)),s=Te(s,!0),{type:"codespan",raw:t[0],text:s}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let s,o;return t[2]==="@"?(s=Te(t[1]),o="mailto:"+s):(s=Te(t[1]),o=s),{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(e){var s;let t;if(t=this.rules.inline.url.exec(e)){let o,a;if(t[2]==="@")o=Te(t[0]),a="mailto:"+o;else{let l;do l=t[0],t[0]=((s=this.rules.inline._backpedal.exec(t[0]))==null?void 0:s[0])??"";while(l!==t[0]);o=Te(t[0]),t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=Te(t[0]),{type:"text",raw:t[0],text:s}}}}const gE=/^(?: *(?:\n|$))+/,mE=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,SE=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,pi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,yE=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fp=/(?:[*+-]|\d{1,9}[.)])/,dp=Dn(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,fp).getRegex(),Nu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,DE=/^[^\n]+/,wu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,EE=Dn(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",wu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),IE=Dn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fp).getRegex(),Cs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ru=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,vE=Dn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Ru).replace("tag",Cs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),hp=Dn(Nu).replace("hr",pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cs).getRegex(),_E=Dn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",hp).getRegex(),ku={blockquote:_E,code:mE,def:EE,fences:SE,heading:yE,hr:pi,html:vE,lheading:dp,list:IE,newline:gE,paragraph:hp,table:si,text:DE},Uc=Dn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cs).getRegex(),TE={...ku,table:Uc,paragraph:Dn(Nu).replace("hr",pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Uc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cs).getRegex()},AE={...ku,html:Dn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ru).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:si,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Dn(Nu).replace("hr",pi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",dp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},gp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bE=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,mp=/^( {2,}|\\)\n(?!\s*$)/,FE=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,fi="\\p{P}$+<=>`^|~",CE=Dn(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,fi).getRegex(),NE=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,wE=Dn(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,fi).getRegex(),RE=Dn("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,fi).getRegex(),kE=Dn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,fi).getRegex(),OE=Dn(/\\([punct])/,"gu").replace(/punct/g,fi).getRegex(),xE=Dn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),BE=Dn(Ru).replace("(?:-->|$)","-->").getRegex(),LE=Dn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",BE).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ds=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,PE=Dn(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ds).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Sp=Dn(/^!?\[(label)\]\[(ref)\]/).replace("label",Ds).replace("ref",wu).getRegex(),yp=Dn(/^!?\[(ref)\](?:\[\])?/).replace("ref",wu).getRegex(),$E=Dn("reflink|nolink(?!\\()","g").replace("reflink",Sp).replace("nolink",yp).getRegex(),Ou={_backpedal:si,anyPunctuation:OE,autolink:xE,blockSkip:NE,br:mp,code:bE,del:si,emStrongLDelim:wE,emStrongRDelimAst:RE,emStrongRDelimUnd:kE,escape:gp,link:PE,nolink:yp,punctuation:CE,reflink:Sp,reflinkSearch:$E,tag:LE,text:FE,url:si},UE={...Ou,link:Dn(/^!?\[(label)\]\((.*?)\)/).replace("label",Ds).getRegex(),reflink:Dn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ds).getRegex()},gu={...Ou,escape:Dn(gp).replace("])","~|])").getRegex(),url:Dn(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ME={...gu,br:Dn(mp).replace("{2,}","*").getRegex(),text:Dn(gu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ls={normal:ku,gfm:TE,pedantic:AE},ni={normal:Ou,gfm:gu,breaks:ME,pedantic:UE};class ze{constructor(e){An(this,"tokens");An(this,"options");An(this,"state");An(this,"tokenizer");An(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||lr,this.options.tokenizer=this.options.tokenizer||new ys,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ls.normal,inline:ni.normal};this.options.pedantic?(t.block=ls.pedantic,t.inline=ni.pedantic):this.options.gfm&&(t.block=ls.gfm,this.options.breaks?t.inline=ni.breaks:t.inline=ni.gfm),this.tokenizer.rules=t}static get rules(){return{block:ls,inline:ni}}static lex(e,t){return new ze(t).lex(e)}static lexInline(e,t){return new ze(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(p,d,S)=>d+"    ".repeat(S.length));let s,o,a,l;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(s=p.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const d=e.slice(1);let S;this.options.extensions.startBlock.forEach(y=>{S=y.call({lexer:this},d),typeof S=="number"&&S>=0&&(p=Math.min(p,S))}),p<1/0&&p>=0&&(a=e.substring(0,p+1))}if(this.state.top&&(s=this.tokenizer.paragraph(a))){o=t[t.length-1],l&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),l=a.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let s,o,a,l=e,p,d,S;if(this.tokens.links){const y=Object.keys(this.tokens.links);if(y.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)y.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,p.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(d||(S=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(y=>(s=y.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(e,l,S)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),t.push(s);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let y=1/0;const I=e.slice(1);let C;this.options.extensions.startInline.forEach(R=>{C=R.call({lexer:this},I),typeof C=="number"&&C>=0&&(y=Math.min(y,C))}),y<1/0&&y>=0&&(a=e.substring(0,y+1))}if(s=this.tokenizer.inlineText(a)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(S=s.raw.slice(-1)),d=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(e){const y="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return t}}class Es{constructor(e){An(this,"options");this.options=e||lr}code(e,t,s){var a;const o=(a=(t||"").match(/^\S*/))==null?void 0:a[0];return e=e.replace(/\n$/,"")+`
`,o?'<pre><code class="language-'+Te(o)+'">'+(s?e:Te(e,!0))+`</code></pre>
`:"<pre><code>"+(s?e:Te(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,s){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,s){const o=t?"ol":"ul",a=t&&s!==1?' start="'+s+'"':"";return"<"+o+a+`>
`+e+"</"+o+`>
`}listitem(e,t,s){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+e+`</${s}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,s){const o=Lc(e);if(o===null)return s;e=o;let a='<a href="'+e+'"';return t&&(a+=' title="'+t+'"'),a+=">"+s+"</a>",a}image(e,t,s){const o=Lc(e);if(o===null)return s;e=o;let a=`<img src="${e}" alt="${s}"`;return t&&(a+=` title="${t}"`),a+=">",a}text(e){return e}}class xu{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}}class lt{constructor(e){An(this,"options");An(this,"renderer");An(this,"textRenderer");this.options=e||lr,this.options.renderer=this.options.renderer||new Es,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new xu}static parse(e,t){return new lt(t).parse(e)}static parseInline(e,t){return new lt(t).parseInline(e)}parse(e,t=!0){let s="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const l=a,p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){s+=p||"";continue}}switch(a.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{const l=a;s+=this.renderer.heading(this.parseInline(l.tokens),l.depth,pE(this.parseInline(l.tokens,this.textRenderer)));continue}case"code":{const l=a;s+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{const l=a;let p="",d="";for(let y=0;y<l.header.length;y++)d+=this.renderer.tablecell(this.parseInline(l.header[y].tokens),{header:!0,align:l.align[y]});p+=this.renderer.tablerow(d);let S="";for(let y=0;y<l.rows.length;y++){const I=l.rows[y];d="";for(let C=0;C<I.length;C++)d+=this.renderer.tablecell(this.parseInline(I[C].tokens),{header:!1,align:l.align[C]});S+=this.renderer.tablerow(d)}s+=this.renderer.table(p,S);continue}case"blockquote":{const l=a,p=this.parse(l.tokens);s+=this.renderer.blockquote(p);continue}case"list":{const l=a,p=l.ordered,d=l.start,S=l.loose;let y="";for(let I=0;I<l.items.length;I++){const C=l.items[I],R=C.checked,x=C.task;let B="";if(C.task){const Q=this.renderer.checkbox(!!R);S?C.tokens.length>0&&C.tokens[0].type==="paragraph"?(C.tokens[0].text=Q+" "+C.tokens[0].text,C.tokens[0].tokens&&C.tokens[0].tokens.length>0&&C.tokens[0].tokens[0].type==="text"&&(C.tokens[0].tokens[0].text=Q+" "+C.tokens[0].tokens[0].text)):C.tokens.unshift({type:"text",text:Q+" "}):B+=Q+" "}B+=this.parse(C.tokens,S),y+=this.renderer.listitem(B,x,!!R)}s+=this.renderer.list(y,p,d);continue}case"html":{const l=a;s+=this.renderer.html(l.text,l.block);continue}case"paragraph":{const l=a;s+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{let l=a,p=l.tokens?this.parseInline(l.tokens):l.text;for(;o+1<e.length&&e[o+1].type==="text";)l=e[++o],p+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);s+=t?this.renderer.paragraph(p):p;continue}default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}parseInline(e,t){t=t||this.renderer;let s="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=l||"";continue}}switch(a.type){case"escape":{const l=a;s+=t.text(l.text);break}case"html":{const l=a;s+=t.html(l.text);break}case"link":{const l=a;s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{const l=a;s+=t.image(l.href,l.title,l.text);break}case"strong":{const l=a;s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{const l=a;s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{const l=a;s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{const l=a;s+=t.del(this.parseInline(l.tokens,t));break}case"text":{const l=a;s+=t.text(l.text);break}default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}}class oi{constructor(e){An(this,"options");this.options=e||lr}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}An(oi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var ci,mu,As,Dp;class VE{constructor(...e){su(this,ci);su(this,As);An(this,"defaults",Cu());An(this,"options",this.setOptions);An(this,"parse",us(this,ci,mu).call(this,ze.lex,lt.parse));An(this,"parseInline",us(this,ci,mu).call(this,ze.lexInline,lt.parseInline));An(this,"Parser",lt);An(this,"Renderer",Es);An(this,"TextRenderer",xu);An(this,"Lexer",ze);An(this,"Tokenizer",ys);An(this,"Hooks",oi);this.use(...e)}walkTokens(e,t){var o,a;let s=[];for(const l of e)switch(s=s.concat(t.call(this,l)),l.type){case"table":{const p=l;for(const d of p.header)s=s.concat(this.walkTokens(d.tokens,t));for(const d of p.rows)for(const S of d)s=s.concat(this.walkTokens(S.tokens,t));break}case"list":{const p=l;s=s.concat(this.walkTokens(p.items,t));break}default:{const p=l;(a=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&a[p.type]?this.defaults.extensions.childTokens[p.type].forEach(d=>{const S=p[d].flat(1/0);s=s.concat(this.walkTokens(S,t))}):p.tokens&&(s=s.concat(this.walkTokens(p.tokens,t)))}}return s}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(s=>{const o={...s};if(o.async=this.defaults.async||o.async||!1,s.extensions&&(s.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const l=t.renderers[a.name];l?t.renderers[a.name]=function(...p){let d=a.renderer.apply(this,p);return d===!1&&(d=l.apply(this,p)),d}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[a.level];l?l.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),o.extensions=t),s.renderer){const a=this.defaults.renderer||new Es(this.defaults);for(const l in s.renderer){if(!(l in a))throw new Error(`renderer '${l}' does not exist`);if(l==="options")continue;const p=l,d=s.renderer[p],S=a[p];a[p]=(...y)=>{let I=d.apply(a,y);return I===!1&&(I=S.apply(a,y)),I||""}}o.renderer=a}if(s.tokenizer){const a=this.defaults.tokenizer||new ys(this.defaults);for(const l in s.tokenizer){if(!(l in a))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const p=l,d=s.tokenizer[p],S=a[p];a[p]=(...y)=>{let I=d.apply(a,y);return I===!1&&(I=S.apply(a,y)),I}}o.tokenizer=a}if(s.hooks){const a=this.defaults.hooks||new oi;for(const l in s.hooks){if(!(l in a))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const p=l,d=s.hooks[p],S=a[p];oi.passThroughHooks.has(l)?a[p]=y=>{if(this.defaults.async)return Promise.resolve(d.call(a,y)).then(C=>S.call(a,C));const I=d.call(a,y);return S.call(a,I)}:a[p]=(...y)=>{let I=d.apply(a,y);return I===!1&&(I=S.apply(a,y)),I}}o.hooks=a}if(s.walkTokens){const a=this.defaults.walkTokens,l=s.walkTokens;o.walkTokens=function(p){let d=[];return d.push(l.call(this,p)),a&&(d=d.concat(a.call(this,p))),d}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ze.lex(e,t??this.defaults)}parser(e,t){return lt.parse(e,t??this.defaults)}}ci=new WeakSet,mu=function(e,t){return(s,o)=>{const a={...o},l={...this.defaults,...a};this.defaults.async===!0&&a.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const p=us(this,As,Dp).call(this,!!l.silent,!!l.async);if(typeof s>"u"||s===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(s):s).then(d=>e(d,l)).then(d=>l.hooks?l.hooks.processAllTokens(d):d).then(d=>l.walkTokens?Promise.all(this.walkTokens(d,l.walkTokens)).then(()=>d):d).then(d=>t(d,l)).then(d=>l.hooks?l.hooks.postprocess(d):d).catch(p);try{l.hooks&&(s=l.hooks.preprocess(s));let d=e(s,l);l.hooks&&(d=l.hooks.processAllTokens(d)),l.walkTokens&&this.walkTokens(d,l.walkTokens);let S=t(d,l);return l.hooks&&(S=l.hooks.postprocess(S)),S}catch(d){return p(d)}}},As=new WeakSet,Dp=function(e,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+Te(s.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(s);throw s}};const or=new VE;function yn(r,e){return or.parse(r,e)}yn.options=yn.setOptions=function(r){return or.setOptions(r),yn.defaults=or.defaults,lp(yn.defaults),yn};yn.getDefaults=Cu;yn.defaults=lr;yn.use=function(...r){return or.use(...r),yn.defaults=or.defaults,lp(yn.defaults),yn};yn.walkTokens=function(r,e){return or.walkTokens(r,e)};yn.parseInline=or.parseInline;yn.Parser=lt;yn.parser=lt.parse;yn.Renderer=Es;yn.TextRenderer=xu;yn.Lexer=ze;yn.lexer=ze.lex;yn.Tokenizer=ys;yn.Hooks=oi;yn.parse=yn;yn.options;yn.setOptions;yn.use;yn.walkTokens;yn.parseInline;lt.parse;ze.lex;const GE=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,HE=Object.hasOwnProperty;class Ep{constructor(){this.occurrences,this.reset()}slug(e,t){const s=this;let o=jE(e,t===!0);const a=o;for(;HE.call(s.occurrences,o);)s.occurrences[a]++,o=a+"-"+s.occurrences[a];return s.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function jE(r,e){return typeof r!="string"?"":(e||(r=r.toLowerCase()),r.replace(GE,"").replace(/ /g,"-"))}function qE(r){return new ze().lex(r)}const WE=()=>({heading:nD,blockquote:rD,list:dD,list_item:mD,br:DD,code:vD,codespan:AD,table:CD,html:RD,paragraph:xD,link:PD,text:MD,def:HD,del:WD,em:QD,hr:ZD,strong:eE,image:iE,space:xc,escape:xc}),zE=()=>({baseUrl:"/",slugger:new Ep});function YE(){const r=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||r(e)},Xy(()=>{console.warn=r})}function QE(r){let e,t;return e=new Fs({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){Ht(e.$$.fragment)},l(s){ar(e.$$.fragment,s)},m(s,o){jt(e,s,o),t=!0},p(s,[o]){const a={};o&1&&(a.tokens=s[0]),o&2&&(a.renderers=s[1]),o&4&&(a.options=s[2]),e.$set(a)},i(s){t||(nn(e.$$.fragment,s),t=!0)},o(s){un(e.$$.fragment,s),t=!1},d(s){qt(e,s)}}}function JE(r,e,t){YE();let{source:s}=e,{options:o={}}=e,{renderers:a={}}=e,l,p,d;return r.$$set=S=>{"source"in S&&t(3,s=S.source),"options"in S&&t(4,o=S.options),"renderers"in S&&t(5,a=S.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,l=qE(s)),t(1,p={...WE(),...a}),t(2,d={...zE(),...o}))},[l,p,d,s,o,a]}class I_ extends Bn{constructor(e){super(),Ln(this,e,JE,QE,Cn,{source:3,options:4,renderers:5})}}const di={joinUrlPaths:du,isRelative:hu,generatePathSegment:up};var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function XE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function cs(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function Mc(r){return{convert:e=>{if(typeof e=="object")return e;if(typeof e=="string"){const t=JSON.parse(e);return typeof t!="object"?null:t}return null},asString:e=>JSON.stringify(e),type:e=>e.record(r(e).optional()).optional()}}function ps(r){return{convert:e=>{if(Array.isArray(e))return e;if(typeof e=="string"){const t=JSON.parse(e);return Array.isArray(t)?t:null}return null},asString:e=>JSON.stringify(e),type:e=>e.array(r(e)).optional()}}function Vc(r){return{convert:e=>e==null||!r.find(t=>t===e)?null:e,asString:e=>String(e),type:e=>e.enum(r).optional()}}function _e(r,e){const t=s=>e.convert(s[r]);return{name:ZE(r),key:r,asEnv:s=>({[r]:e.asString(s)}),zod:{type:e.type},get:t,getOrDefault:(s,o)=>t(s)??o}}function ZE(r){return r.toLowerCase().replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace("-","").replace("_",""))}var Bu={APP_LOGO:_e("APP_LOGO",cs()),APP_TITLE:_e("APP_TITLE",cs()),APP_FAVICON:_e("APP_FAVICON",cs()),SITE_ROOT:_e("SITE_ROOT",cs()),SITE_META:_e("SITE_META",Mc(r=>r.string())),CUSTOM_STYLES:_e("CUSTOM_STYLES",ps(r=>r.string())),FIELDS_SORTING:_e("FIELDS_SORTING",Vc(["default","alphabetical"])),ARGUMENTS_SORTING:_e("ARGUMENTS_SORTING",Vc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:_e("QUERY_GENERATION_FACTORIES",Mc(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:_e("PAGES",ps(r=>{const e=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(e),r.string().min(1)])}));return e})),EXTERNAL_LINKS:_e("EXTERNAL_LINKS",ps(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:_e("DIRECTIVES",ps(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};function KE(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":const e=r.toLowerCase().trim();return e==="true"||e==="t"||e==="1";case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}_e("MAGIDOC_GENERATE",KE());var Is={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Is.exports;(function(r,e){(function(){var t,s="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",p="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",S=500,y="__lodash_placeholder__",I=1,C=2,R=4,x=1,B=2,Q=1,dn=2,Vn=4,_n=8,Nn=16,On=32,te=64,Xn=128,dt=256,k=512,X=30,re="...",Rt=800,Yt=16,mi=1,pr=2,Si=3,it=1/0,$e=9007199254740991,fr=17976931348623157e292,Qt=NaN,Ae=4294967295,b=Ae-1,M=Ae>>>1,P=[["ary",Xn],["bind",Q],["bindKey",dn],["curry",_n],["curryRight",Nn],["flip",k],["partial",On],["partialRight",te],["rearg",dt]],$="[object Arguments]",hn="[object Array]",Pn="[object AsyncFunction]",gn="[object Boolean]",be="[object Date]",Or="[object DOMException]",kt="[object Error]",Zn="[object Function]",Hu="[object GeneratorFunction]",Ue="[object Map]",xr="[object Number]",lf="[object Null]",ht="[object Object]",ju="[object Promise]",cf="[object Proxy]",Br="[object RegExp]",Me="[object Set]",Lr="[object String]",yi="[object Symbol]",pf="[object Undefined]",Pr="[object WeakMap]",ff="[object WeakSet]",$r="[object ArrayBuffer]",dr="[object DataView]",Ps="[object Float32Array]",$s="[object Float64Array]",Us="[object Int8Array]",Ms="[object Int16Array]",Vs="[object Int32Array]",Gs="[object Uint8Array]",Hs="[object Uint8ClampedArray]",js="[object Uint16Array]",qs="[object Uint32Array]",df=/\b__p \+= '';/g,hf=/\b(__p \+=) '' \+/g,gf=/(__e\(.*?\)|\b__t\)) \+\n'';/g,qu=/&(?:amp|lt|gt|quot|#39);/g,Wu=/[&<>"']/g,mf=RegExp(qu.source),Sf=RegExp(Wu.source),yf=/<%-([\s\S]+?)%>/g,Df=/<%([\s\S]+?)%>/g,zu=/<%=([\s\S]+?)%>/g,Ef=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,If=/^\w*$/,vf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ws=/[\\^$.*+?()[\]{}|]/g,_f=RegExp(Ws.source),zs=/^\s+/,Tf=/\s/,Af=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,bf=/\{\n\/\* \[wrapped with (.+)\] \*/,Ff=/,? & /,Cf=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Nf=/[()=,{}\[\]\/\s]/,wf=/\\(\\)?/g,Rf=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Yu=/\w*$/,kf=/^[-+]0x[0-9a-f]+$/i,Of=/^0b[01]+$/i,xf=/^\[object .+?Constructor\]$/,Bf=/^0o[0-7]+$/i,Lf=/^(?:0|[1-9]\d*)$/,Pf=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Di=/($^)/,$f=/['\n\r\u2028\u2029\\]/g,Ei="\\ud800-\\udfff",Uf="\\u0300-\\u036f",Mf="\\ufe20-\\ufe2f",Vf="\\u20d0-\\u20ff",Qu=Uf+Mf+Vf,Ju="\\u2700-\\u27bf",Xu="a-z\\xdf-\\xf6\\xf8-\\xff",Gf="\\xac\\xb1\\xd7\\xf7",Hf="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",jf="\\u2000-\\u206f",qf=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Zu="A-Z\\xc0-\\xd6\\xd8-\\xde",Ku="\\ufe0e\\ufe0f",na=Gf+Hf+jf+qf,Ys="['’]",Wf="["+Ei+"]",ea="["+na+"]",Ii="["+Qu+"]",ta="\\d+",zf="["+Ju+"]",ra="["+Xu+"]",ia="[^"+Ei+na+ta+Ju+Xu+Zu+"]",Qs="\\ud83c[\\udffb-\\udfff]",Yf="(?:"+Ii+"|"+Qs+")",sa="[^"+Ei+"]",Js="(?:\\ud83c[\\udde6-\\uddff]){2}",Xs="[\\ud800-\\udbff][\\udc00-\\udfff]",hr="["+Zu+"]",oa="\\u200d",ua="(?:"+ra+"|"+ia+")",Qf="(?:"+hr+"|"+ia+")",aa="(?:"+Ys+"(?:d|ll|m|re|s|t|ve))?",la="(?:"+Ys+"(?:D|LL|M|RE|S|T|VE))?",ca=Yf+"?",pa="["+Ku+"]?",Jf="(?:"+oa+"(?:"+[sa,Js,Xs].join("|")+")"+pa+ca+")*",Xf="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zf="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",fa=pa+ca+Jf,Kf="(?:"+[zf,Js,Xs].join("|")+")"+fa,nd="(?:"+[sa+Ii+"?",Ii,Js,Xs,Wf].join("|")+")",ed=RegExp(Ys,"g"),td=RegExp(Ii,"g"),Zs=RegExp(Qs+"(?="+Qs+")|"+nd+fa,"g"),rd=RegExp([hr+"?"+ra+"+"+aa+"(?="+[ea,hr,"$"].join("|")+")",Qf+"+"+la+"(?="+[ea,hr+ua,"$"].join("|")+")",hr+"?"+ua+"+"+aa,hr+"+"+la,Zf,Xf,ta,Kf].join("|"),"g"),id=RegExp("["+oa+Ei+Qu+Ku+"]"),sd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,od=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ud=-1,bn={};bn[Ps]=bn[$s]=bn[Us]=bn[Ms]=bn[Vs]=bn[Gs]=bn[Hs]=bn[js]=bn[qs]=!0,bn[$]=bn[hn]=bn[$r]=bn[gn]=bn[dr]=bn[be]=bn[kt]=bn[Zn]=bn[Ue]=bn[xr]=bn[ht]=bn[Br]=bn[Me]=bn[Lr]=bn[Pr]=!1;var Tn={};Tn[$]=Tn[hn]=Tn[$r]=Tn[dr]=Tn[gn]=Tn[be]=Tn[Ps]=Tn[$s]=Tn[Us]=Tn[Ms]=Tn[Vs]=Tn[Ue]=Tn[xr]=Tn[ht]=Tn[Br]=Tn[Me]=Tn[Lr]=Tn[yi]=Tn[Gs]=Tn[Hs]=Tn[js]=Tn[qs]=!0,Tn[kt]=Tn[Zn]=Tn[Pr]=!1;var ad={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ld={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},fd=parseFloat,dd=parseInt,da=typeof ei=="object"&&ei&&ei.Object===Object&&ei,hd=typeof self=="object"&&self&&self.Object===Object&&self,Yn=da||hd||Function("return this")(),Ks=e&&!e.nodeType&&e,Jt=Ks&&!0&&r&&!r.nodeType&&r,ha=Jt&&Jt.exports===Ks,no=ha&&da.process,Fe=function(){try{var E=Jt&&Jt.require&&Jt.require("util").types;return E||no&&no.binding&&no.binding("util")}catch{}}(),ga=Fe&&Fe.isArrayBuffer,ma=Fe&&Fe.isDate,Sa=Fe&&Fe.isMap,ya=Fe&&Fe.isRegExp,Da=Fe&&Fe.isSet,Ea=Fe&&Fe.isTypedArray;function Se(E,A,T){switch(T.length){case 0:return E.call(A);case 1:return E.call(A,T[0]);case 2:return E.call(A,T[0],T[1]);case 3:return E.call(A,T[0],T[1],T[2])}return E.apply(A,T)}function gd(E,A,T,U){for(var Z=-1,fn=E==null?0:E.length;++Z<fn;){var jn=E[Z];A(U,jn,T(jn),E)}return U}function Ce(E,A){for(var T=-1,U=E==null?0:E.length;++T<U&&A(E[T],T,E)!==!1;);return E}function md(E,A){for(var T=E==null?0:E.length;T--&&A(E[T],T,E)!==!1;);return E}function Ia(E,A){for(var T=-1,U=E==null?0:E.length;++T<U;)if(!A(E[T],T,E))return!1;return!0}function Ot(E,A){for(var T=-1,U=E==null?0:E.length,Z=0,fn=[];++T<U;){var jn=E[T];A(jn,T,E)&&(fn[Z++]=jn)}return fn}function vi(E,A){var T=E==null?0:E.length;return!!T&&gr(E,A,0)>-1}function eo(E,A,T){for(var U=-1,Z=E==null?0:E.length;++U<Z;)if(T(A,E[U]))return!0;return!1}function Fn(E,A){for(var T=-1,U=E==null?0:E.length,Z=Array(U);++T<U;)Z[T]=A(E[T],T,E);return Z}function xt(E,A){for(var T=-1,U=A.length,Z=E.length;++T<U;)E[Z+T]=A[T];return E}function to(E,A,T,U){var Z=-1,fn=E==null?0:E.length;for(U&&fn&&(T=E[++Z]);++Z<fn;)T=A(T,E[Z],Z,E);return T}function Sd(E,A,T,U){var Z=E==null?0:E.length;for(U&&Z&&(T=E[--Z]);Z--;)T=A(T,E[Z],Z,E);return T}function ro(E,A){for(var T=-1,U=E==null?0:E.length;++T<U;)if(A(E[T],T,E))return!0;return!1}var yd=io("length");function Dd(E){return E.split("")}function Ed(E){return E.match(Cf)||[]}function va(E,A,T){var U;return T(E,function(Z,fn,jn){if(A(Z,fn,jn))return U=fn,!1}),U}function _i(E,A,T,U){for(var Z=E.length,fn=T+(U?1:-1);U?fn--:++fn<Z;)if(A(E[fn],fn,E))return fn;return-1}function gr(E,A,T){return A===A?kd(E,A,T):_i(E,_a,T)}function Id(E,A,T,U){for(var Z=T-1,fn=E.length;++Z<fn;)if(U(E[Z],A))return Z;return-1}function _a(E){return E!==E}function Ta(E,A){var T=E==null?0:E.length;return T?oo(E,A)/T:Qt}function io(E){return function(A){return A==null?t:A[E]}}function so(E){return function(A){return E==null?t:E[A]}}function Aa(E,A,T,U,Z){return Z(E,function(fn,jn,In){T=U?(U=!1,fn):A(T,fn,jn,In)}),T}function vd(E,A){var T=E.length;for(E.sort(A);T--;)E[T]=E[T].value;return E}function oo(E,A){for(var T,U=-1,Z=E.length;++U<Z;){var fn=A(E[U]);fn!==t&&(T=T===t?fn:T+fn)}return T}function uo(E,A){for(var T=-1,U=Array(E);++T<E;)U[T]=A(T);return U}function _d(E,A){return Fn(A,function(T){return[T,E[T]]})}function ba(E){return E&&E.slice(0,wa(E)+1).replace(zs,"")}function ye(E){return function(A){return E(A)}}function ao(E,A){return Fn(A,function(T){return E[T]})}function Ur(E,A){return E.has(A)}function Fa(E,A){for(var T=-1,U=E.length;++T<U&&gr(A,E[T],0)>-1;);return T}function Ca(E,A){for(var T=E.length;T--&&gr(A,E[T],0)>-1;);return T}function Td(E,A){for(var T=E.length,U=0;T--;)E[T]===A&&++U;return U}var Ad=so(ad),bd=so(ld);function Fd(E){return"\\"+pd[E]}function Cd(E,A){return E==null?t:E[A]}function mr(E){return id.test(E)}function Nd(E){return sd.test(E)}function wd(E){for(var A,T=[];!(A=E.next()).done;)T.push(A.value);return T}function lo(E){var A=-1,T=Array(E.size);return E.forEach(function(U,Z){T[++A]=[Z,U]}),T}function Na(E,A){return function(T){return E(A(T))}}function Bt(E,A){for(var T=-1,U=E.length,Z=0,fn=[];++T<U;){var jn=E[T];(jn===A||jn===y)&&(E[T]=y,fn[Z++]=T)}return fn}function Ti(E){var A=-1,T=Array(E.size);return E.forEach(function(U){T[++A]=U}),T}function Rd(E){var A=-1,T=Array(E.size);return E.forEach(function(U){T[++A]=[U,U]}),T}function kd(E,A,T){for(var U=T-1,Z=E.length;++U<Z;)if(E[U]===A)return U;return-1}function Od(E,A,T){for(var U=T+1;U--;)if(E[U]===A)return U;return U}function Sr(E){return mr(E)?Bd(E):yd(E)}function Ve(E){return mr(E)?Ld(E):Dd(E)}function wa(E){for(var A=E.length;A--&&Tf.test(E.charAt(A)););return A}var xd=so(cd);function Bd(E){for(var A=Zs.lastIndex=0;Zs.test(E);)++A;return A}function Ld(E){return E.match(Zs)||[]}function Pd(E){return E.match(rd)||[]}var $d=function E(A){A=A==null?Yn:yr.defaults(Yn.Object(),A,yr.pick(Yn,od));var T=A.Array,U=A.Date,Z=A.Error,fn=A.Function,jn=A.Math,In=A.Object,co=A.RegExp,Ud=A.String,Ne=A.TypeError,Ai=T.prototype,Md=fn.prototype,Dr=In.prototype,bi=A["__core-js_shared__"],Fi=Md.toString,Sn=Dr.hasOwnProperty,Vd=0,Ra=function(){var n=/[^.]+$/.exec(bi&&bi.keys&&bi.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ci=Dr.toString,Gd=Fi.call(In),Hd=Yn._,jd=co("^"+Fi.call(Sn).replace(Ws,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ni=ha?A.Buffer:t,Lt=A.Symbol,wi=A.Uint8Array,ka=Ni?Ni.allocUnsafe:t,Ri=Na(In.getPrototypeOf,In),Oa=In.create,xa=Dr.propertyIsEnumerable,ki=Ai.splice,Ba=Lt?Lt.isConcatSpreadable:t,Mr=Lt?Lt.iterator:t,Xt=Lt?Lt.toStringTag:t,Oi=function(){try{var n=tr(In,"defineProperty");return n({},"",{}),n}catch{}}(),qd=A.clearTimeout!==Yn.clearTimeout&&A.clearTimeout,Wd=U&&U.now!==Yn.Date.now&&U.now,zd=A.setTimeout!==Yn.setTimeout&&A.setTimeout,xi=jn.ceil,Bi=jn.floor,po=In.getOwnPropertySymbols,Yd=Ni?Ni.isBuffer:t,La=A.isFinite,Qd=Ai.join,Jd=Na(In.keys,In),qn=jn.max,Kn=jn.min,Xd=U.now,Zd=A.parseInt,Pa=jn.random,Kd=Ai.reverse,fo=tr(A,"DataView"),Vr=tr(A,"Map"),ho=tr(A,"Promise"),Er=tr(A,"Set"),Gr=tr(A,"WeakMap"),Hr=tr(In,"create"),Li=Gr&&new Gr,Ir={},nh=rr(fo),eh=rr(Vr),th=rr(ho),rh=rr(Er),ih=rr(Gr),Pi=Lt?Lt.prototype:t,jr=Pi?Pi.valueOf:t,$a=Pi?Pi.toString:t;function h(n){if(xn(n)&&!K(n)&&!(n instanceof an)){if(n instanceof we)return n;if(Sn.call(n,"__wrapped__"))return Ul(n)}return new we(n)}var vr=function(){function n(){}return function(i){if(!wn(i))return{};if(Oa)return Oa(i);n.prototype=i;var u=new n;return n.prototype=t,u}}();function $i(){}function we(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}h.templateSettings={escape:yf,evaluate:Df,interpolate:zu,variable:"",imports:{_:h}},h.prototype=$i.prototype,h.prototype.constructor=h,we.prototype=vr($i.prototype),we.prototype.constructor=we;function an(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ae,this.__views__=[]}function sh(){var n=new an(this.__wrapped__);return n.__actions__=ce(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=ce(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=ce(this.__views__),n}function oh(){if(this.__filtered__){var n=new an(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function uh(){var n=this.__wrapped__.value(),i=this.__dir__,u=K(n),c=i<0,f=u?n.length:0,g=Dg(0,f,this.__views__),m=g.start,D=g.end,v=D-m,F=c?D:m-1,N=this.__iteratees__,O=N.length,L=0,G=Kn(v,this.__takeCount__);if(!u||!c&&f==v&&G==v)return al(n,this.__actions__);var z=[];n:for(;v--&&L<G;){F+=i;for(var tn=-1,Y=n[F];++tn<O;){var sn=N[tn],cn=sn.iteratee,Ie=sn.type,oe=cn(Y);if(Ie==pr)Y=oe;else if(!oe){if(Ie==mi)continue n;break n}}z[L++]=Y}return z}an.prototype=vr($i.prototype),an.prototype.constructor=an;function Zt(n){var i=-1,u=n==null?0:n.length;for(this.clear();++i<u;){var c=n[i];this.set(c[0],c[1])}}function ah(){this.__data__=Hr?Hr(null):{},this.size=0}function lh(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function ch(n){var i=this.__data__;if(Hr){var u=i[n];return u===d?t:u}return Sn.call(i,n)?i[n]:t}function ph(n){var i=this.__data__;return Hr?i[n]!==t:Sn.call(i,n)}function fh(n,i){var u=this.__data__;return this.size+=this.has(n)?0:1,u[n]=Hr&&i===t?d:i,this}Zt.prototype.clear=ah,Zt.prototype.delete=lh,Zt.prototype.get=ch,Zt.prototype.has=ph,Zt.prototype.set=fh;function gt(n){var i=-1,u=n==null?0:n.length;for(this.clear();++i<u;){var c=n[i];this.set(c[0],c[1])}}function dh(){this.__data__=[],this.size=0}function hh(n){var i=this.__data__,u=Ui(i,n);if(u<0)return!1;var c=i.length-1;return u==c?i.pop():ki.call(i,u,1),--this.size,!0}function gh(n){var i=this.__data__,u=Ui(i,n);return u<0?t:i[u][1]}function mh(n){return Ui(this.__data__,n)>-1}function Sh(n,i){var u=this.__data__,c=Ui(u,n);return c<0?(++this.size,u.push([n,i])):u[c][1]=i,this}gt.prototype.clear=dh,gt.prototype.delete=hh,gt.prototype.get=gh,gt.prototype.has=mh,gt.prototype.set=Sh;function mt(n){var i=-1,u=n==null?0:n.length;for(this.clear();++i<u;){var c=n[i];this.set(c[0],c[1])}}function yh(){this.size=0,this.__data__={hash:new Zt,map:new(Vr||gt),string:new Zt}}function Dh(n){var i=Xi(this,n).delete(n);return this.size-=i?1:0,i}function Eh(n){return Xi(this,n).get(n)}function Ih(n){return Xi(this,n).has(n)}function vh(n,i){var u=Xi(this,n),c=u.size;return u.set(n,i),this.size+=u.size==c?0:1,this}mt.prototype.clear=yh,mt.prototype.delete=Dh,mt.prototype.get=Eh,mt.prototype.has=Ih,mt.prototype.set=vh;function Kt(n){var i=-1,u=n==null?0:n.length;for(this.__data__=new mt;++i<u;)this.add(n[i])}function _h(n){return this.__data__.set(n,d),this}function Th(n){return this.__data__.has(n)}Kt.prototype.add=Kt.prototype.push=_h,Kt.prototype.has=Th;function Ge(n){var i=this.__data__=new gt(n);this.size=i.size}function Ah(){this.__data__=new gt,this.size=0}function bh(n){var i=this.__data__,u=i.delete(n);return this.size=i.size,u}function Fh(n){return this.__data__.get(n)}function Ch(n){return this.__data__.has(n)}function Nh(n,i){var u=this.__data__;if(u instanceof gt){var c=u.__data__;if(!Vr||c.length<o-1)return c.push([n,i]),this.size=++u.size,this;u=this.__data__=new mt(c)}return u.set(n,i),this.size=u.size,this}Ge.prototype.clear=Ah,Ge.prototype.delete=bh,Ge.prototype.get=Fh,Ge.prototype.has=Ch,Ge.prototype.set=Nh;function Ua(n,i){var u=K(n),c=!u&&ir(n),f=!u&&!c&&Vt(n),g=!u&&!c&&!f&&br(n),m=u||c||f||g,D=m?uo(n.length,Ud):[],v=D.length;for(var F in n)(i||Sn.call(n,F))&&!(m&&(F=="length"||f&&(F=="offset"||F=="parent")||g&&(F=="buffer"||F=="byteLength"||F=="byteOffset")||Et(F,v)))&&D.push(F);return D}function Ma(n){var i=n.length;return i?n[Ao(0,i-1)]:t}function wh(n,i){return Zi(ce(n),nr(i,0,n.length))}function Rh(n){return Zi(ce(n))}function go(n,i,u){(u!==t&&!He(n[i],u)||u===t&&!(i in n))&&St(n,i,u)}function qr(n,i,u){var c=n[i];(!(Sn.call(n,i)&&He(c,u))||u===t&&!(i in n))&&St(n,i,u)}function Ui(n,i){for(var u=n.length;u--;)if(He(n[u][0],i))return u;return-1}function kh(n,i,u,c){return Pt(n,function(f,g,m){i(c,f,u(f),m)}),c}function Va(n,i){return n&&ot(i,Wn(i),n)}function Oh(n,i){return n&&ot(i,fe(i),n)}function St(n,i,u){i=="__proto__"&&Oi?Oi(n,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):n[i]=u}function mo(n,i){for(var u=-1,c=i.length,f=T(c),g=n==null;++u<c;)f[u]=g?t:Jo(n,i[u]);return f}function nr(n,i,u){return n===n&&(u!==t&&(n=n<=u?n:u),i!==t&&(n=n>=i?n:i)),n}function Re(n,i,u,c,f,g){var m,D=i&I,v=i&C,F=i&R;if(u&&(m=f?u(n,c,f,g):u(n)),m!==t)return m;if(!wn(n))return n;var N=K(n);if(N){if(m=Ig(n),!D)return ce(n,m)}else{var O=ne(n),L=O==Zn||O==Hu;if(Vt(n))return pl(n,D);if(O==ht||O==$||L&&!f){if(m=v||L?{}:wl(n),!D)return v?cg(n,Oh(m,n)):lg(n,Va(m,n))}else{if(!Tn[O])return f?n:{};m=vg(n,O,D)}}g||(g=new Ge);var G=g.get(n);if(G)return G;g.set(n,m),sc(n)?n.forEach(function(Y){m.add(Re(Y,i,u,Y,n,g))}):rc(n)&&n.forEach(function(Y,sn){m.set(sn,Re(Y,i,u,sn,n,g))});var z=F?v?Lo:Bo:v?fe:Wn,tn=N?t:z(n);return Ce(tn||n,function(Y,sn){tn&&(sn=Y,Y=n[sn]),qr(m,sn,Re(Y,i,u,sn,n,g))}),m}function xh(n){var i=Wn(n);return function(u){return Ga(u,n,i)}}function Ga(n,i,u){var c=u.length;if(n==null)return!c;for(n=In(n);c--;){var f=u[c],g=i[f],m=n[f];if(m===t&&!(f in n)||!g(m))return!1}return!0}function Ha(n,i,u){if(typeof n!="function")throw new Ne(l);return Zr(function(){n.apply(t,u)},i)}function Wr(n,i,u,c){var f=-1,g=vi,m=!0,D=n.length,v=[],F=i.length;if(!D)return v;u&&(i=Fn(i,ye(u))),c?(g=eo,m=!1):i.length>=o&&(g=Ur,m=!1,i=new Kt(i));n:for(;++f<D;){var N=n[f],O=u==null?N:u(N);if(N=c||N!==0?N:0,m&&O===O){for(var L=F;L--;)if(i[L]===O)continue n;v.push(N)}else g(i,O,c)||v.push(N)}return v}var Pt=ml(st),ja=ml(yo,!0);function Bh(n,i){var u=!0;return Pt(n,function(c,f,g){return u=!!i(c,f,g),u}),u}function Mi(n,i,u){for(var c=-1,f=n.length;++c<f;){var g=n[c],m=i(g);if(m!=null&&(D===t?m===m&&!Ee(m):u(m,D)))var D=m,v=g}return v}function Lh(n,i,u,c){var f=n.length;for(u=en(u),u<0&&(u=-u>f?0:f+u),c=c===t||c>f?f:en(c),c<0&&(c+=f),c=u>c?0:uc(c);u<c;)n[u++]=i;return n}function qa(n,i){var u=[];return Pt(n,function(c,f,g){i(c,f,g)&&u.push(c)}),u}function Qn(n,i,u,c,f){var g=-1,m=n.length;for(u||(u=Tg),f||(f=[]);++g<m;){var D=n[g];i>0&&u(D)?i>1?Qn(D,i-1,u,c,f):xt(f,D):c||(f[f.length]=D)}return f}var So=Sl(),Wa=Sl(!0);function st(n,i){return n&&So(n,i,Wn)}function yo(n,i){return n&&Wa(n,i,Wn)}function Vi(n,i){return Ot(i,function(u){return It(n[u])})}function er(n,i){i=Ut(i,n);for(var u=0,c=i.length;n!=null&&u<c;)n=n[ut(i[u++])];return u&&u==c?n:t}function za(n,i,u){var c=i(n);return K(n)?c:xt(c,u(n))}function ie(n){return n==null?n===t?pf:lf:Xt&&Xt in In(n)?yg(n):Rg(n)}function Do(n,i){return n>i}function Ph(n,i){return n!=null&&Sn.call(n,i)}function $h(n,i){return n!=null&&i in In(n)}function Uh(n,i,u){return n>=Kn(i,u)&&n<qn(i,u)}function Eo(n,i,u){for(var c=u?eo:vi,f=n[0].length,g=n.length,m=g,D=T(g),v=1/0,F=[];m--;){var N=n[m];m&&i&&(N=Fn(N,ye(i))),v=Kn(N.length,v),D[m]=!u&&(i||f>=120&&N.length>=120)?new Kt(m&&N):t}N=n[0];var O=-1,L=D[0];n:for(;++O<f&&F.length<v;){var G=N[O],z=i?i(G):G;if(G=u||G!==0?G:0,!(L?Ur(L,z):c(F,z,u))){for(m=g;--m;){var tn=D[m];if(!(tn?Ur(tn,z):c(n[m],z,u)))continue n}L&&L.push(z),F.push(G)}}return F}function Mh(n,i,u,c){return st(n,function(f,g,m){i(c,u(f),g,m)}),c}function zr(n,i,u){i=Ut(i,n),n=xl(n,i);var c=n==null?n:n[ut(Oe(i))];return c==null?t:Se(c,n,u)}function Ya(n){return xn(n)&&ie(n)==$}function Vh(n){return xn(n)&&ie(n)==$r}function Gh(n){return xn(n)&&ie(n)==be}function Yr(n,i,u,c,f){return n===i?!0:n==null||i==null||!xn(n)&&!xn(i)?n!==n&&i!==i:Hh(n,i,u,c,Yr,f)}function Hh(n,i,u,c,f,g){var m=K(n),D=K(i),v=m?hn:ne(n),F=D?hn:ne(i);v=v==$?ht:v,F=F==$?ht:F;var N=v==ht,O=F==ht,L=v==F;if(L&&Vt(n)){if(!Vt(i))return!1;m=!0,N=!1}if(L&&!N)return g||(g=new Ge),m||br(n)?Fl(n,i,u,c,f,g):mg(n,i,v,u,c,f,g);if(!(u&x)){var G=N&&Sn.call(n,"__wrapped__"),z=O&&Sn.call(i,"__wrapped__");if(G||z){var tn=G?n.value():n,Y=z?i.value():i;return g||(g=new Ge),f(tn,Y,u,c,g)}}return L?(g||(g=new Ge),Sg(n,i,u,c,f,g)):!1}function jh(n){return xn(n)&&ne(n)==Ue}function Io(n,i,u,c){var f=u.length,g=f,m=!c;if(n==null)return!g;for(n=In(n);f--;){var D=u[f];if(m&&D[2]?D[1]!==n[D[0]]:!(D[0]in n))return!1}for(;++f<g;){D=u[f];var v=D[0],F=n[v],N=D[1];if(m&&D[2]){if(F===t&&!(v in n))return!1}else{var O=new Ge;if(c)var L=c(F,N,v,n,i,O);if(!(L===t?Yr(N,F,x|B,c,O):L))return!1}}return!0}function Qa(n){if(!wn(n)||bg(n))return!1;var i=It(n)?jd:xf;return i.test(rr(n))}function qh(n){return xn(n)&&ie(n)==Br}function Wh(n){return xn(n)&&ne(n)==Me}function zh(n){return xn(n)&&is(n.length)&&!!bn[ie(n)]}function Ja(n){return typeof n=="function"?n:n==null?de:typeof n=="object"?K(n)?Ka(n[0],n[1]):Za(n):yc(n)}function vo(n){if(!Xr(n))return Jd(n);var i=[];for(var u in In(n))Sn.call(n,u)&&u!="constructor"&&i.push(u);return i}function Yh(n){if(!wn(n))return wg(n);var i=Xr(n),u=[];for(var c in n)c=="constructor"&&(i||!Sn.call(n,c))||u.push(c);return u}function _o(n,i){return n<i}function Xa(n,i){var u=-1,c=pe(n)?T(n.length):[];return Pt(n,function(f,g,m){c[++u]=i(f,g,m)}),c}function Za(n){var i=$o(n);return i.length==1&&i[0][2]?kl(i[0][0],i[0][1]):function(u){return u===n||Io(u,n,i)}}function Ka(n,i){return Mo(n)&&Rl(i)?kl(ut(n),i):function(u){var c=Jo(u,n);return c===t&&c===i?Xo(u,n):Yr(i,c,x|B)}}function Gi(n,i,u,c,f){n!==i&&So(i,function(g,m){if(f||(f=new Ge),wn(g))Qh(n,i,m,u,Gi,c,f);else{var D=c?c(Go(n,m),g,m+"",n,i,f):t;D===t&&(D=g),go(n,m,D)}},fe)}function Qh(n,i,u,c,f,g,m){var D=Go(n,u),v=Go(i,u),F=m.get(v);if(F){go(n,u,F);return}var N=g?g(D,v,u+"",n,i,m):t,O=N===t;if(O){var L=K(v),G=!L&&Vt(v),z=!L&&!G&&br(v);N=v,L||G||z?K(D)?N=D:$n(D)?N=ce(D):G?(O=!1,N=pl(v,!0)):z?(O=!1,N=fl(v,!0)):N=[]:Kr(v)||ir(v)?(N=D,ir(D)?N=ac(D):(!wn(D)||It(D))&&(N=wl(v))):O=!1}O&&(m.set(v,N),f(N,v,c,g,m),m.delete(v)),go(n,u,N)}function nl(n,i){var u=n.length;if(u)return i+=i<0?u:0,Et(i,u)?n[i]:t}function el(n,i,u){i.length?i=Fn(i,function(g){return K(g)?function(m){return er(m,g.length===1?g[0]:g)}:g}):i=[de];var c=-1;i=Fn(i,ye(W()));var f=Xa(n,function(g,m,D){var v=Fn(i,function(F){return F(g)});return{criteria:v,index:++c,value:g}});return vd(f,function(g,m){return ag(g,m,u)})}function Jh(n,i){return tl(n,i,function(u,c){return Xo(n,c)})}function tl(n,i,u){for(var c=-1,f=i.length,g={};++c<f;){var m=i[c],D=er(n,m);u(D,m)&&Qr(g,Ut(m,n),D)}return g}function Xh(n){return function(i){return er(i,n)}}function To(n,i,u,c){var f=c?Id:gr,g=-1,m=i.length,D=n;for(n===i&&(i=ce(i)),u&&(D=Fn(n,ye(u)));++g<m;)for(var v=0,F=i[g],N=u?u(F):F;(v=f(D,N,v,c))>-1;)D!==n&&ki.call(D,v,1),ki.call(n,v,1);return n}function rl(n,i){for(var u=n?i.length:0,c=u-1;u--;){var f=i[u];if(u==c||f!==g){var g=f;Et(f)?ki.call(n,f,1):Co(n,f)}}return n}function Ao(n,i){return n+Bi(Pa()*(i-n+1))}function Zh(n,i,u,c){for(var f=-1,g=qn(xi((i-n)/(u||1)),0),m=T(g);g--;)m[c?g:++f]=n,n+=u;return m}function bo(n,i){var u="";if(!n||i<1||i>$e)return u;do i%2&&(u+=n),i=Bi(i/2),i&&(n+=n);while(i);return u}function rn(n,i){return Ho(Ol(n,i,de),n+"")}function Kh(n){return Ma(Fr(n))}function ng(n,i){var u=Fr(n);return Zi(u,nr(i,0,u.length))}function Qr(n,i,u,c){if(!wn(n))return n;i=Ut(i,n);for(var f=-1,g=i.length,m=g-1,D=n;D!=null&&++f<g;){var v=ut(i[f]),F=u;if(v==="__proto__"||v==="constructor"||v==="prototype")return n;if(f!=m){var N=D[v];F=c?c(N,v,D):t,F===t&&(F=wn(N)?N:Et(i[f+1])?[]:{})}qr(D,v,F),D=D[v]}return n}var il=Li?function(n,i){return Li.set(n,i),n}:de,eg=Oi?function(n,i){return Oi(n,"toString",{configurable:!0,enumerable:!1,value:Ko(i),writable:!0})}:de;function tg(n){return Zi(Fr(n))}function ke(n,i,u){var c=-1,f=n.length;i<0&&(i=-i>f?0:f+i),u=u>f?f:u,u<0&&(u+=f),f=i>u?0:u-i>>>0,i>>>=0;for(var g=T(f);++c<f;)g[c]=n[c+i];return g}function rg(n,i){var u;return Pt(n,function(c,f,g){return u=i(c,f,g),!u}),!!u}function Hi(n,i,u){var c=0,f=n==null?c:n.length;if(typeof i=="number"&&i===i&&f<=M){for(;c<f;){var g=c+f>>>1,m=n[g];m!==null&&!Ee(m)&&(u?m<=i:m<i)?c=g+1:f=g}return f}return Fo(n,i,de,u)}function Fo(n,i,u,c){var f=0,g=n==null?0:n.length;if(g===0)return 0;i=u(i);for(var m=i!==i,D=i===null,v=Ee(i),F=i===t;f<g;){var N=Bi((f+g)/2),O=u(n[N]),L=O!==t,G=O===null,z=O===O,tn=Ee(O);if(m)var Y=c||z;else F?Y=z&&(c||L):D?Y=z&&L&&(c||!G):v?Y=z&&L&&!G&&(c||!tn):G||tn?Y=!1:Y=c?O<=i:O<i;Y?f=N+1:g=N}return Kn(g,b)}function sl(n,i){for(var u=-1,c=n.length,f=0,g=[];++u<c;){var m=n[u],D=i?i(m):m;if(!u||!He(D,v)){var v=D;g[f++]=m===0?0:m}}return g}function ol(n){return typeof n=="number"?n:Ee(n)?Qt:+n}function De(n){if(typeof n=="string")return n;if(K(n))return Fn(n,De)+"";if(Ee(n))return $a?$a.call(n):"";var i=n+"";return i=="0"&&1/n==-it?"-0":i}function $t(n,i,u){var c=-1,f=vi,g=n.length,m=!0,D=[],v=D;if(u)m=!1,f=eo;else if(g>=o){var F=i?null:hg(n);if(F)return Ti(F);m=!1,f=Ur,v=new Kt}else v=i?[]:D;n:for(;++c<g;){var N=n[c],O=i?i(N):N;if(N=u||N!==0?N:0,m&&O===O){for(var L=v.length;L--;)if(v[L]===O)continue n;i&&v.push(O),D.push(N)}else f(v,O,u)||(v!==D&&v.push(O),D.push(N))}return D}function Co(n,i){return i=Ut(i,n),n=xl(n,i),n==null||delete n[ut(Oe(i))]}function ul(n,i,u,c){return Qr(n,i,u(er(n,i)),c)}function ji(n,i,u,c){for(var f=n.length,g=c?f:-1;(c?g--:++g<f)&&i(n[g],g,n););return u?ke(n,c?0:g,c?g+1:f):ke(n,c?g+1:0,c?f:g)}function al(n,i){var u=n;return u instanceof an&&(u=u.value()),to(i,function(c,f){return f.func.apply(f.thisArg,xt([c],f.args))},u)}function No(n,i,u){var c=n.length;if(c<2)return c?$t(n[0]):[];for(var f=-1,g=T(c);++f<c;)for(var m=n[f],D=-1;++D<c;)D!=f&&(g[f]=Wr(g[f]||m,n[D],i,u));return $t(Qn(g,1),i,u)}function ll(n,i,u){for(var c=-1,f=n.length,g=i.length,m={};++c<f;){var D=c<g?i[c]:t;u(m,n[c],D)}return m}function wo(n){return $n(n)?n:[]}function Ro(n){return typeof n=="function"?n:de}function Ut(n,i){return K(n)?n:Mo(n,i)?[n]:$l(mn(n))}var ig=rn;function Mt(n,i,u){var c=n.length;return u=u===t?c:u,!i&&u>=c?n:ke(n,i,u)}var cl=qd||function(n){return Yn.clearTimeout(n)};function pl(n,i){if(i)return n.slice();var u=n.length,c=ka?ka(u):new n.constructor(u);return n.copy(c),c}function ko(n){var i=new n.constructor(n.byteLength);return new wi(i).set(new wi(n)),i}function sg(n,i){var u=i?ko(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.byteLength)}function og(n){var i=new n.constructor(n.source,Yu.exec(n));return i.lastIndex=n.lastIndex,i}function ug(n){return jr?In(jr.call(n)):{}}function fl(n,i){var u=i?ko(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.length)}function dl(n,i){if(n!==i){var u=n!==t,c=n===null,f=n===n,g=Ee(n),m=i!==t,D=i===null,v=i===i,F=Ee(i);if(!D&&!F&&!g&&n>i||g&&m&&v&&!D&&!F||c&&m&&v||!u&&v||!f)return 1;if(!c&&!g&&!F&&n<i||F&&u&&f&&!c&&!g||D&&u&&f||!m&&f||!v)return-1}return 0}function ag(n,i,u){for(var c=-1,f=n.criteria,g=i.criteria,m=f.length,D=u.length;++c<m;){var v=dl(f[c],g[c]);if(v){if(c>=D)return v;var F=u[c];return v*(F=="desc"?-1:1)}}return n.index-i.index}function hl(n,i,u,c){for(var f=-1,g=n.length,m=u.length,D=-1,v=i.length,F=qn(g-m,0),N=T(v+F),O=!c;++D<v;)N[D]=i[D];for(;++f<m;)(O||f<g)&&(N[u[f]]=n[f]);for(;F--;)N[D++]=n[f++];return N}function gl(n,i,u,c){for(var f=-1,g=n.length,m=-1,D=u.length,v=-1,F=i.length,N=qn(g-D,0),O=T(N+F),L=!c;++f<N;)O[f]=n[f];for(var G=f;++v<F;)O[G+v]=i[v];for(;++m<D;)(L||f<g)&&(O[G+u[m]]=n[f++]);return O}function ce(n,i){var u=-1,c=n.length;for(i||(i=T(c));++u<c;)i[u]=n[u];return i}function ot(n,i,u,c){var f=!u;u||(u={});for(var g=-1,m=i.length;++g<m;){var D=i[g],v=c?c(u[D],n[D],D,u,n):t;v===t&&(v=n[D]),f?St(u,D,v):qr(u,D,v)}return u}function lg(n,i){return ot(n,Uo(n),i)}function cg(n,i){return ot(n,Cl(n),i)}function qi(n,i){return function(u,c){var f=K(u)?gd:kh,g=i?i():{};return f(u,n,W(c,2),g)}}function _r(n){return rn(function(i,u){var c=-1,f=u.length,g=f>1?u[f-1]:t,m=f>2?u[2]:t;for(g=n.length>3&&typeof g=="function"?(f--,g):t,m&&se(u[0],u[1],m)&&(g=f<3?t:g,f=1),i=In(i);++c<f;){var D=u[c];D&&n(i,D,c,g)}return i})}function ml(n,i){return function(u,c){if(u==null)return u;if(!pe(u))return n(u,c);for(var f=u.length,g=i?f:-1,m=In(u);(i?g--:++g<f)&&c(m[g],g,m)!==!1;);return u}}function Sl(n){return function(i,u,c){for(var f=-1,g=In(i),m=c(i),D=m.length;D--;){var v=m[n?D:++f];if(u(g[v],v,g)===!1)break}return i}}function pg(n,i,u){var c=i&Q,f=Jr(n);function g(){var m=this&&this!==Yn&&this instanceof g?f:n;return m.apply(c?u:this,arguments)}return g}function yl(n){return function(i){i=mn(i);var u=mr(i)?Ve(i):t,c=u?u[0]:i.charAt(0),f=u?Mt(u,1).join(""):i.slice(1);return c[n]()+f}}function Tr(n){return function(i){return to(mc(gc(i).replace(ed,"")),n,"")}}function Jr(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=vr(n.prototype),c=n.apply(u,i);return wn(c)?c:u}}function fg(n,i,u){var c=Jr(n);function f(){for(var g=arguments.length,m=T(g),D=g,v=Ar(f);D--;)m[D]=arguments[D];var F=g<3&&m[0]!==v&&m[g-1]!==v?[]:Bt(m,v);if(g-=F.length,g<u)return _l(n,i,Wi,f.placeholder,t,m,F,t,t,u-g);var N=this&&this!==Yn&&this instanceof f?c:n;return Se(N,this,m)}return f}function Dl(n){return function(i,u,c){var f=In(i);if(!pe(i)){var g=W(u,3);i=Wn(i),u=function(D){return g(f[D],D,f)}}var m=n(i,u,c);return m>-1?f[g?i[m]:m]:t}}function El(n){return Dt(function(i){var u=i.length,c=u,f=we.prototype.thru;for(n&&i.reverse();c--;){var g=i[c];if(typeof g!="function")throw new Ne(l);if(f&&!m&&Ji(g)=="wrapper")var m=new we([],!0)}for(c=m?c:u;++c<u;){g=i[c];var D=Ji(g),v=D=="wrapper"?Po(g):t;v&&Vo(v[0])&&v[1]==(Xn|_n|On|dt)&&!v[4].length&&v[9]==1?m=m[Ji(v[0])].apply(m,v[3]):m=g.length==1&&Vo(g)?m[D]():m.thru(g)}return function(){var F=arguments,N=F[0];if(m&&F.length==1&&K(N))return m.plant(N).value();for(var O=0,L=u?i[O].apply(this,F):N;++O<u;)L=i[O].call(this,L);return L}})}function Wi(n,i,u,c,f,g,m,D,v,F){var N=i&Xn,O=i&Q,L=i&dn,G=i&(_n|Nn),z=i&k,tn=L?t:Jr(n);function Y(){for(var sn=arguments.length,cn=T(sn),Ie=sn;Ie--;)cn[Ie]=arguments[Ie];if(G)var oe=Ar(Y),ve=Td(cn,oe);if(c&&(cn=hl(cn,c,f,G)),g&&(cn=gl(cn,g,m,G)),sn-=ve,G&&sn<F){var Un=Bt(cn,oe);return _l(n,i,Wi,Y.placeholder,u,cn,Un,D,v,F-sn)}var je=O?u:this,_t=L?je[n]:n;return sn=cn.length,D?cn=kg(cn,D):z&&sn>1&&cn.reverse(),N&&v<sn&&(cn.length=v),this&&this!==Yn&&this instanceof Y&&(_t=tn||Jr(_t)),_t.apply(je,cn)}return Y}function Il(n,i){return function(u,c){return Mh(u,n,i(c),{})}}function zi(n,i){return function(u,c){var f;if(u===t&&c===t)return i;if(u!==t&&(f=u),c!==t){if(f===t)return c;typeof u=="string"||typeof c=="string"?(u=De(u),c=De(c)):(u=ol(u),c=ol(c)),f=n(u,c)}return f}}function Oo(n){return Dt(function(i){return i=Fn(i,ye(W())),rn(function(u){var c=this;return n(i,function(f){return Se(f,c,u)})})})}function Yi(n,i){i=i===t?" ":De(i);var u=i.length;if(u<2)return u?bo(i,n):i;var c=bo(i,xi(n/Sr(i)));return mr(i)?Mt(Ve(c),0,n).join(""):c.slice(0,n)}function dg(n,i,u,c){var f=i&Q,g=Jr(n);function m(){for(var D=-1,v=arguments.length,F=-1,N=c.length,O=T(N+v),L=this&&this!==Yn&&this instanceof m?g:n;++F<N;)O[F]=c[F];for(;v--;)O[F++]=arguments[++D];return Se(L,f?u:this,O)}return m}function vl(n){return function(i,u,c){return c&&typeof c!="number"&&se(i,u,c)&&(u=c=t),i=vt(i),u===t?(u=i,i=0):u=vt(u),c=c===t?i<u?1:-1:vt(c),Zh(i,u,c,n)}}function Qi(n){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=xe(i),u=xe(u)),n(i,u)}}function _l(n,i,u,c,f,g,m,D,v,F){var N=i&_n,O=N?m:t,L=N?t:m,G=N?g:t,z=N?t:g;i|=N?On:te,i&=~(N?te:On),i&Vn||(i&=~(Q|dn));var tn=[n,i,f,G,O,z,L,D,v,F],Y=u.apply(t,tn);return Vo(n)&&Bl(Y,tn),Y.placeholder=c,Ll(Y,n,i)}function xo(n){var i=jn[n];return function(u,c){if(u=xe(u),c=c==null?0:Kn(en(c),292),c&&La(u)){var f=(mn(u)+"e").split("e"),g=i(f[0]+"e"+(+f[1]+c));return f=(mn(g)+"e").split("e"),+(f[0]+"e"+(+f[1]-c))}return i(u)}}var hg=Er&&1/Ti(new Er([,-0]))[1]==it?function(n){return new Er(n)}:tu;function Tl(n){return function(i){var u=ne(i);return u==Ue?lo(i):u==Me?Rd(i):_d(i,n(i))}}function yt(n,i,u,c,f,g,m,D){var v=i&dn;if(!v&&typeof n!="function")throw new Ne(l);var F=c?c.length:0;if(F||(i&=~(On|te),c=f=t),m=m===t?m:qn(en(m),0),D=D===t?D:en(D),F-=f?f.length:0,i&te){var N=c,O=f;c=f=t}var L=v?t:Po(n),G=[n,i,u,c,f,N,O,g,m,D];if(L&&Ng(G,L),n=G[0],i=G[1],u=G[2],c=G[3],f=G[4],D=G[9]=G[9]===t?v?0:n.length:qn(G[9]-F,0),!D&&i&(_n|Nn)&&(i&=~(_n|Nn)),!i||i==Q)var z=pg(n,i,u);else i==_n||i==Nn?z=fg(n,i,D):(i==On||i==(Q|On))&&!f.length?z=dg(n,i,u,c):z=Wi.apply(t,G);var tn=L?il:Bl;return Ll(tn(z,G),n,i)}function Al(n,i,u,c){return n===t||He(n,Dr[u])&&!Sn.call(c,u)?i:n}function bl(n,i,u,c,f,g){return wn(n)&&wn(i)&&(g.set(i,n),Gi(n,i,t,bl,g),g.delete(i)),n}function gg(n){return Kr(n)?t:n}function Fl(n,i,u,c,f,g){var m=u&x,D=n.length,v=i.length;if(D!=v&&!(m&&v>D))return!1;var F=g.get(n),N=g.get(i);if(F&&N)return F==i&&N==n;var O=-1,L=!0,G=u&B?new Kt:t;for(g.set(n,i),g.set(i,n);++O<D;){var z=n[O],tn=i[O];if(c)var Y=m?c(tn,z,O,i,n,g):c(z,tn,O,n,i,g);if(Y!==t){if(Y)continue;L=!1;break}if(G){if(!ro(i,function(sn,cn){if(!Ur(G,cn)&&(z===sn||f(z,sn,u,c,g)))return G.push(cn)})){L=!1;break}}else if(!(z===tn||f(z,tn,u,c,g))){L=!1;break}}return g.delete(n),g.delete(i),L}function mg(n,i,u,c,f,g,m){switch(u){case dr:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case $r:return!(n.byteLength!=i.byteLength||!g(new wi(n),new wi(i)));case gn:case be:case xr:return He(+n,+i);case kt:return n.name==i.name&&n.message==i.message;case Br:case Lr:return n==i+"";case Ue:var D=lo;case Me:var v=c&x;if(D||(D=Ti),n.size!=i.size&&!v)return!1;var F=m.get(n);if(F)return F==i;c|=B,m.set(n,i);var N=Fl(D(n),D(i),c,f,g,m);return m.delete(n),N;case yi:if(jr)return jr.call(n)==jr.call(i)}return!1}function Sg(n,i,u,c,f,g){var m=u&x,D=Bo(n),v=D.length,F=Bo(i),N=F.length;if(v!=N&&!m)return!1;for(var O=v;O--;){var L=D[O];if(!(m?L in i:Sn.call(i,L)))return!1}var G=g.get(n),z=g.get(i);if(G&&z)return G==i&&z==n;var tn=!0;g.set(n,i),g.set(i,n);for(var Y=m;++O<v;){L=D[O];var sn=n[L],cn=i[L];if(c)var Ie=m?c(cn,sn,L,i,n,g):c(sn,cn,L,n,i,g);if(!(Ie===t?sn===cn||f(sn,cn,u,c,g):Ie)){tn=!1;break}Y||(Y=L=="constructor")}if(tn&&!Y){var oe=n.constructor,ve=i.constructor;oe!=ve&&"constructor"in n&&"constructor"in i&&!(typeof oe=="function"&&oe instanceof oe&&typeof ve=="function"&&ve instanceof ve)&&(tn=!1)}return g.delete(n),g.delete(i),tn}function Dt(n){return Ho(Ol(n,t,Gl),n+"")}function Bo(n){return za(n,Wn,Uo)}function Lo(n){return za(n,fe,Cl)}var Po=Li?function(n){return Li.get(n)}:tu;function Ji(n){for(var i=n.name+"",u=Ir[i],c=Sn.call(Ir,i)?u.length:0;c--;){var f=u[c],g=f.func;if(g==null||g==n)return f.name}return i}function Ar(n){var i=Sn.call(h,"placeholder")?h:n;return i.placeholder}function W(){var n=h.iteratee||nu;return n=n===nu?Ja:n,arguments.length?n(arguments[0],arguments[1]):n}function Xi(n,i){var u=n.__data__;return Ag(i)?u[typeof i=="string"?"string":"hash"]:u.map}function $o(n){for(var i=Wn(n),u=i.length;u--;){var c=i[u],f=n[c];i[u]=[c,f,Rl(f)]}return i}function tr(n,i){var u=Cd(n,i);return Qa(u)?u:t}function yg(n){var i=Sn.call(n,Xt),u=n[Xt];try{n[Xt]=t;var c=!0}catch{}var f=Ci.call(n);return c&&(i?n[Xt]=u:delete n[Xt]),f}var Uo=po?function(n){return n==null?[]:(n=In(n),Ot(po(n),function(i){return xa.call(n,i)}))}:ru,Cl=po?function(n){for(var i=[];n;)xt(i,Uo(n)),n=Ri(n);return i}:ru,ne=ie;(fo&&ne(new fo(new ArrayBuffer(1)))!=dr||Vr&&ne(new Vr)!=Ue||ho&&ne(ho.resolve())!=ju||Er&&ne(new Er)!=Me||Gr&&ne(new Gr)!=Pr)&&(ne=function(n){var i=ie(n),u=i==ht?n.constructor:t,c=u?rr(u):"";if(c)switch(c){case nh:return dr;case eh:return Ue;case th:return ju;case rh:return Me;case ih:return Pr}return i});function Dg(n,i,u){for(var c=-1,f=u.length;++c<f;){var g=u[c],m=g.size;switch(g.type){case"drop":n+=m;break;case"dropRight":i-=m;break;case"take":i=Kn(i,n+m);break;case"takeRight":n=qn(n,i-m);break}}return{start:n,end:i}}function Eg(n){var i=n.match(bf);return i?i[1].split(Ff):[]}function Nl(n,i,u){i=Ut(i,n);for(var c=-1,f=i.length,g=!1;++c<f;){var m=ut(i[c]);if(!(g=n!=null&&u(n,m)))break;n=n[m]}return g||++c!=f?g:(f=n==null?0:n.length,!!f&&is(f)&&Et(m,f)&&(K(n)||ir(n)))}function Ig(n){var i=n.length,u=new n.constructor(i);return i&&typeof n[0]=="string"&&Sn.call(n,"index")&&(u.index=n.index,u.input=n.input),u}function wl(n){return typeof n.constructor=="function"&&!Xr(n)?vr(Ri(n)):{}}function vg(n,i,u){var c=n.constructor;switch(i){case $r:return ko(n);case gn:case be:return new c(+n);case dr:return sg(n,u);case Ps:case $s:case Us:case Ms:case Vs:case Gs:case Hs:case js:case qs:return fl(n,u);case Ue:return new c;case xr:case Lr:return new c(n);case Br:return og(n);case Me:return new c;case yi:return ug(n)}}function _g(n,i){var u=i.length;if(!u)return n;var c=u-1;return i[c]=(u>1?"& ":"")+i[c],i=i.join(u>2?", ":" "),n.replace(Af,`{
/* [wrapped with `+i+`] */
`)}function Tg(n){return K(n)||ir(n)||!!(Ba&&n&&n[Ba])}function Et(n,i){var u=typeof n;return i=i??$e,!!i&&(u=="number"||u!="symbol"&&Lf.test(n))&&n>-1&&n%1==0&&n<i}function se(n,i,u){if(!wn(u))return!1;var c=typeof i;return(c=="number"?pe(u)&&Et(i,u.length):c=="string"&&i in u)?He(u[i],n):!1}function Mo(n,i){if(K(n))return!1;var u=typeof n;return u=="number"||u=="symbol"||u=="boolean"||n==null||Ee(n)?!0:If.test(n)||!Ef.test(n)||i!=null&&n in In(i)}function Ag(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function Vo(n){var i=Ji(n),u=h[i];if(typeof u!="function"||!(i in an.prototype))return!1;if(n===u)return!0;var c=Po(u);return!!c&&n===c[0]}function bg(n){return!!Ra&&Ra in n}var Fg=bi?It:iu;function Xr(n){var i=n&&n.constructor,u=typeof i=="function"&&i.prototype||Dr;return n===u}function Rl(n){return n===n&&!wn(n)}function kl(n,i){return function(u){return u==null?!1:u[n]===i&&(i!==t||n in In(u))}}function Cg(n){var i=ts(n,function(c){return u.size===S&&u.clear(),c}),u=i.cache;return i}function Ng(n,i){var u=n[1],c=i[1],f=u|c,g=f<(Q|dn|Xn),m=c==Xn&&u==_n||c==Xn&&u==dt&&n[7].length<=i[8]||c==(Xn|dt)&&i[7].length<=i[8]&&u==_n;if(!(g||m))return n;c&Q&&(n[2]=i[2],f|=u&Q?0:Vn);var D=i[3];if(D){var v=n[3];n[3]=v?hl(v,D,i[4]):D,n[4]=v?Bt(n[3],y):i[4]}return D=i[5],D&&(v=n[5],n[5]=v?gl(v,D,i[6]):D,n[6]=v?Bt(n[5],y):i[6]),D=i[7],D&&(n[7]=D),c&Xn&&(n[8]=n[8]==null?i[8]:Kn(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=f,n}function wg(n){var i=[];if(n!=null)for(var u in In(n))i.push(u);return i}function Rg(n){return Ci.call(n)}function Ol(n,i,u){return i=qn(i===t?n.length-1:i,0),function(){for(var c=arguments,f=-1,g=qn(c.length-i,0),m=T(g);++f<g;)m[f]=c[i+f];f=-1;for(var D=T(i+1);++f<i;)D[f]=c[f];return D[i]=u(m),Se(n,this,D)}}function xl(n,i){return i.length<2?n:er(n,ke(i,0,-1))}function kg(n,i){for(var u=n.length,c=Kn(i.length,u),f=ce(n);c--;){var g=i[c];n[c]=Et(g,u)?f[g]:t}return n}function Go(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var Bl=Pl(il),Zr=zd||function(n,i){return Yn.setTimeout(n,i)},Ho=Pl(eg);function Ll(n,i,u){var c=i+"";return Ho(n,_g(c,Og(Eg(c),u)))}function Pl(n){var i=0,u=0;return function(){var c=Xd(),f=Yt-(c-u);if(u=c,f>0){if(++i>=Rt)return arguments[0]}else i=0;return n.apply(t,arguments)}}function Zi(n,i){var u=-1,c=n.length,f=c-1;for(i=i===t?c:i;++u<i;){var g=Ao(u,f),m=n[g];n[g]=n[u],n[u]=m}return n.length=i,n}var $l=Cg(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(vf,function(u,c,f,g){i.push(f?g.replace(wf,"$1"):c||u)}),i});function ut(n){if(typeof n=="string"||Ee(n))return n;var i=n+"";return i=="0"&&1/n==-it?"-0":i}function rr(n){if(n!=null){try{return Fi.call(n)}catch{}try{return n+""}catch{}}return""}function Og(n,i){return Ce(P,function(u){var c="_."+u[0];i&u[1]&&!vi(n,c)&&n.push(c)}),n.sort()}function Ul(n){if(n instanceof an)return n.clone();var i=new we(n.__wrapped__,n.__chain__);return i.__actions__=ce(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function xg(n,i,u){(u?se(n,i,u):i===t)?i=1:i=qn(en(i),0);var c=n==null?0:n.length;if(!c||i<1)return[];for(var f=0,g=0,m=T(xi(c/i));f<c;)m[g++]=ke(n,f,f+=i);return m}function Bg(n){for(var i=-1,u=n==null?0:n.length,c=0,f=[];++i<u;){var g=n[i];g&&(f[c++]=g)}return f}function Lg(){var n=arguments.length;if(!n)return[];for(var i=T(n-1),u=arguments[0],c=n;c--;)i[c-1]=arguments[c];return xt(K(u)?ce(u):[u],Qn(i,1))}var Pg=rn(function(n,i){return $n(n)?Wr(n,Qn(i,1,$n,!0)):[]}),$g=rn(function(n,i){var u=Oe(i);return $n(u)&&(u=t),$n(n)?Wr(n,Qn(i,1,$n,!0),W(u,2)):[]}),Ug=rn(function(n,i){var u=Oe(i);return $n(u)&&(u=t),$n(n)?Wr(n,Qn(i,1,$n,!0),t,u):[]});function Mg(n,i,u){var c=n==null?0:n.length;return c?(i=u||i===t?1:en(i),ke(n,i<0?0:i,c)):[]}function Vg(n,i,u){var c=n==null?0:n.length;return c?(i=u||i===t?1:en(i),i=c-i,ke(n,0,i<0?0:i)):[]}function Gg(n,i){return n&&n.length?ji(n,W(i,3),!0,!0):[]}function Hg(n,i){return n&&n.length?ji(n,W(i,3),!0):[]}function jg(n,i,u,c){var f=n==null?0:n.length;return f?(u&&typeof u!="number"&&se(n,i,u)&&(u=0,c=f),Lh(n,i,u,c)):[]}function Ml(n,i,u){var c=n==null?0:n.length;if(!c)return-1;var f=u==null?0:en(u);return f<0&&(f=qn(c+f,0)),_i(n,W(i,3),f)}function Vl(n,i,u){var c=n==null?0:n.length;if(!c)return-1;var f=c-1;return u!==t&&(f=en(u),f=u<0?qn(c+f,0):Kn(f,c-1)),_i(n,W(i,3),f,!0)}function Gl(n){var i=n==null?0:n.length;return i?Qn(n,1):[]}function qg(n){var i=n==null?0:n.length;return i?Qn(n,it):[]}function Wg(n,i){var u=n==null?0:n.length;return u?(i=i===t?1:en(i),Qn(n,i)):[]}function zg(n){for(var i=-1,u=n==null?0:n.length,c={};++i<u;){var f=n[i];c[f[0]]=f[1]}return c}function Hl(n){return n&&n.length?n[0]:t}function Yg(n,i,u){var c=n==null?0:n.length;if(!c)return-1;var f=u==null?0:en(u);return f<0&&(f=qn(c+f,0)),gr(n,i,f)}function Qg(n){var i=n==null?0:n.length;return i?ke(n,0,-1):[]}var Jg=rn(function(n){var i=Fn(n,wo);return i.length&&i[0]===n[0]?Eo(i):[]}),Xg=rn(function(n){var i=Oe(n),u=Fn(n,wo);return i===Oe(u)?i=t:u.pop(),u.length&&u[0]===n[0]?Eo(u,W(i,2)):[]}),Zg=rn(function(n){var i=Oe(n),u=Fn(n,wo);return i=typeof i=="function"?i:t,i&&u.pop(),u.length&&u[0]===n[0]?Eo(u,t,i):[]});function Kg(n,i){return n==null?"":Qd.call(n,i)}function Oe(n){var i=n==null?0:n.length;return i?n[i-1]:t}function nm(n,i,u){var c=n==null?0:n.length;if(!c)return-1;var f=c;return u!==t&&(f=en(u),f=f<0?qn(c+f,0):Kn(f,c-1)),i===i?Od(n,i,f):_i(n,_a,f,!0)}function em(n,i){return n&&n.length?nl(n,en(i)):t}var tm=rn(jl);function jl(n,i){return n&&n.length&&i&&i.length?To(n,i):n}function rm(n,i,u){return n&&n.length&&i&&i.length?To(n,i,W(u,2)):n}function im(n,i,u){return n&&n.length&&i&&i.length?To(n,i,t,u):n}var sm=Dt(function(n,i){var u=n==null?0:n.length,c=mo(n,i);return rl(n,Fn(i,function(f){return Et(f,u)?+f:f}).sort(dl)),c});function om(n,i){var u=[];if(!(n&&n.length))return u;var c=-1,f=[],g=n.length;for(i=W(i,3);++c<g;){var m=n[c];i(m,c,n)&&(u.push(m),f.push(c))}return rl(n,f),u}function jo(n){return n==null?n:Kd.call(n)}function um(n,i,u){var c=n==null?0:n.length;return c?(u&&typeof u!="number"&&se(n,i,u)?(i=0,u=c):(i=i==null?0:en(i),u=u===t?c:en(u)),ke(n,i,u)):[]}function am(n,i){return Hi(n,i)}function lm(n,i,u){return Fo(n,i,W(u,2))}function cm(n,i){var u=n==null?0:n.length;if(u){var c=Hi(n,i);if(c<u&&He(n[c],i))return c}return-1}function pm(n,i){return Hi(n,i,!0)}function fm(n,i,u){return Fo(n,i,W(u,2),!0)}function dm(n,i){var u=n==null?0:n.length;if(u){var c=Hi(n,i,!0)-1;if(He(n[c],i))return c}return-1}function hm(n){return n&&n.length?sl(n):[]}function gm(n,i){return n&&n.length?sl(n,W(i,2)):[]}function mm(n){var i=n==null?0:n.length;return i?ke(n,1,i):[]}function Sm(n,i,u){return n&&n.length?(i=u||i===t?1:en(i),ke(n,0,i<0?0:i)):[]}function ym(n,i,u){var c=n==null?0:n.length;return c?(i=u||i===t?1:en(i),i=c-i,ke(n,i<0?0:i,c)):[]}function Dm(n,i){return n&&n.length?ji(n,W(i,3),!1,!0):[]}function Em(n,i){return n&&n.length?ji(n,W(i,3)):[]}var Im=rn(function(n){return $t(Qn(n,1,$n,!0))}),vm=rn(function(n){var i=Oe(n);return $n(i)&&(i=t),$t(Qn(n,1,$n,!0),W(i,2))}),_m=rn(function(n){var i=Oe(n);return i=typeof i=="function"?i:t,$t(Qn(n,1,$n,!0),t,i)});function Tm(n){return n&&n.length?$t(n):[]}function Am(n,i){return n&&n.length?$t(n,W(i,2)):[]}function bm(n,i){return i=typeof i=="function"?i:t,n&&n.length?$t(n,t,i):[]}function qo(n){if(!(n&&n.length))return[];var i=0;return n=Ot(n,function(u){if($n(u))return i=qn(u.length,i),!0}),uo(i,function(u){return Fn(n,io(u))})}function ql(n,i){if(!(n&&n.length))return[];var u=qo(n);return i==null?u:Fn(u,function(c){return Se(i,t,c)})}var Fm=rn(function(n,i){return $n(n)?Wr(n,i):[]}),Cm=rn(function(n){return No(Ot(n,$n))}),Nm=rn(function(n){var i=Oe(n);return $n(i)&&(i=t),No(Ot(n,$n),W(i,2))}),wm=rn(function(n){var i=Oe(n);return i=typeof i=="function"?i:t,No(Ot(n,$n),t,i)}),Rm=rn(qo);function km(n,i){return ll(n||[],i||[],qr)}function Om(n,i){return ll(n||[],i||[],Qr)}var xm=rn(function(n){var i=n.length,u=i>1?n[i-1]:t;return u=typeof u=="function"?(n.pop(),u):t,ql(n,u)});function Wl(n){var i=h(n);return i.__chain__=!0,i}function Bm(n,i){return i(n),n}function Ki(n,i){return i(n)}var Lm=Dt(function(n){var i=n.length,u=i?n[0]:0,c=this.__wrapped__,f=function(g){return mo(g,n)};return i>1||this.__actions__.length||!(c instanceof an)||!Et(u)?this.thru(f):(c=c.slice(u,+u+(i?1:0)),c.__actions__.push({func:Ki,args:[f],thisArg:t}),new we(c,this.__chain__).thru(function(g){return i&&!g.length&&g.push(t),g}))});function Pm(){return Wl(this)}function $m(){return new we(this.value(),this.__chain__)}function Um(){this.__values__===t&&(this.__values__=oc(this.value()));var n=this.__index__>=this.__values__.length,i=n?t:this.__values__[this.__index__++];return{done:n,value:i}}function Mm(){return this}function Vm(n){for(var i,u=this;u instanceof $i;){var c=Ul(u);c.__index__=0,c.__values__=t,i?f.__wrapped__=c:i=c;var f=c;u=u.__wrapped__}return f.__wrapped__=n,i}function Gm(){var n=this.__wrapped__;if(n instanceof an){var i=n;return this.__actions__.length&&(i=new an(this)),i=i.reverse(),i.__actions__.push({func:Ki,args:[jo],thisArg:t}),new we(i,this.__chain__)}return this.thru(jo)}function Hm(){return al(this.__wrapped__,this.__actions__)}var jm=qi(function(n,i,u){Sn.call(n,u)?++n[u]:St(n,u,1)});function qm(n,i,u){var c=K(n)?Ia:Bh;return u&&se(n,i,u)&&(i=t),c(n,W(i,3))}function Wm(n,i){var u=K(n)?Ot:qa;return u(n,W(i,3))}var zm=Dl(Ml),Ym=Dl(Vl);function Qm(n,i){return Qn(ns(n,i),1)}function Jm(n,i){return Qn(ns(n,i),it)}function Xm(n,i,u){return u=u===t?1:en(u),Qn(ns(n,i),u)}function zl(n,i){var u=K(n)?Ce:Pt;return u(n,W(i,3))}function Yl(n,i){var u=K(n)?md:ja;return u(n,W(i,3))}var Zm=qi(function(n,i,u){Sn.call(n,u)?n[u].push(i):St(n,u,[i])});function Km(n,i,u,c){n=pe(n)?n:Fr(n),u=u&&!c?en(u):0;var f=n.length;return u<0&&(u=qn(f+u,0)),ss(n)?u<=f&&n.indexOf(i,u)>-1:!!f&&gr(n,i,u)>-1}var nS=rn(function(n,i,u){var c=-1,f=typeof i=="function",g=pe(n)?T(n.length):[];return Pt(n,function(m){g[++c]=f?Se(i,m,u):zr(m,i,u)}),g}),eS=qi(function(n,i,u){St(n,u,i)});function ns(n,i){var u=K(n)?Fn:Xa;return u(n,W(i,3))}function tS(n,i,u,c){return n==null?[]:(K(i)||(i=i==null?[]:[i]),u=c?t:u,K(u)||(u=u==null?[]:[u]),el(n,i,u))}var rS=qi(function(n,i,u){n[u?0:1].push(i)},function(){return[[],[]]});function iS(n,i,u){var c=K(n)?to:Aa,f=arguments.length<3;return c(n,W(i,4),u,f,Pt)}function sS(n,i,u){var c=K(n)?Sd:Aa,f=arguments.length<3;return c(n,W(i,4),u,f,ja)}function oS(n,i){var u=K(n)?Ot:qa;return u(n,rs(W(i,3)))}function uS(n){var i=K(n)?Ma:Kh;return i(n)}function aS(n,i,u){(u?se(n,i,u):i===t)?i=1:i=en(i);var c=K(n)?wh:ng;return c(n,i)}function lS(n){var i=K(n)?Rh:tg;return i(n)}function cS(n){if(n==null)return 0;if(pe(n))return ss(n)?Sr(n):n.length;var i=ne(n);return i==Ue||i==Me?n.size:vo(n).length}function pS(n,i,u){var c=K(n)?ro:rg;return u&&se(n,i,u)&&(i=t),c(n,W(i,3))}var fS=rn(function(n,i){if(n==null)return[];var u=i.length;return u>1&&se(n,i[0],i[1])?i=[]:u>2&&se(i[0],i[1],i[2])&&(i=[i[0]]),el(n,Qn(i,1),[])}),es=Wd||function(){return Yn.Date.now()};function dS(n,i){if(typeof i!="function")throw new Ne(l);return n=en(n),function(){if(--n<1)return i.apply(this,arguments)}}function Ql(n,i,u){return i=u?t:i,i=n&&i==null?n.length:i,yt(n,Xn,t,t,t,t,i)}function Jl(n,i){var u;if(typeof i!="function")throw new Ne(l);return n=en(n),function(){return--n>0&&(u=i.apply(this,arguments)),n<=1&&(i=t),u}}var Wo=rn(function(n,i,u){var c=Q;if(u.length){var f=Bt(u,Ar(Wo));c|=On}return yt(n,c,i,u,f)}),Xl=rn(function(n,i,u){var c=Q|dn;if(u.length){var f=Bt(u,Ar(Xl));c|=On}return yt(i,c,n,u,f)});function Zl(n,i,u){i=u?t:i;var c=yt(n,_n,t,t,t,t,t,i);return c.placeholder=Zl.placeholder,c}function Kl(n,i,u){i=u?t:i;var c=yt(n,Nn,t,t,t,t,t,i);return c.placeholder=Kl.placeholder,c}function nc(n,i,u){var c,f,g,m,D,v,F=0,N=!1,O=!1,L=!0;if(typeof n!="function")throw new Ne(l);i=xe(i)||0,wn(u)&&(N=!!u.leading,O="maxWait"in u,g=O?qn(xe(u.maxWait)||0,i):g,L="trailing"in u?!!u.trailing:L);function G(Un){var je=c,_t=f;return c=f=t,F=Un,m=n.apply(_t,je),m}function z(Un){return F=Un,D=Zr(sn,i),N?G(Un):m}function tn(Un){var je=Un-v,_t=Un-F,Dc=i-je;return O?Kn(Dc,g-_t):Dc}function Y(Un){var je=Un-v,_t=Un-F;return v===t||je>=i||je<0||O&&_t>=g}function sn(){var Un=es();if(Y(Un))return cn(Un);D=Zr(sn,tn(Un))}function cn(Un){return D=t,L&&c?G(Un):(c=f=t,m)}function Ie(){D!==t&&cl(D),F=0,c=v=f=D=t}function oe(){return D===t?m:cn(es())}function ve(){var Un=es(),je=Y(Un);if(c=arguments,f=this,v=Un,je){if(D===t)return z(v);if(O)return cl(D),D=Zr(sn,i),G(v)}return D===t&&(D=Zr(sn,i)),m}return ve.cancel=Ie,ve.flush=oe,ve}var hS=rn(function(n,i){return Ha(n,1,i)}),gS=rn(function(n,i,u){return Ha(n,xe(i)||0,u)});function mS(n){return yt(n,k)}function ts(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new Ne(l);var u=function(){var c=arguments,f=i?i.apply(this,c):c[0],g=u.cache;if(g.has(f))return g.get(f);var m=n.apply(this,c);return u.cache=g.set(f,m)||g,m};return u.cache=new(ts.Cache||mt),u}ts.Cache=mt;function rs(n){if(typeof n!="function")throw new Ne(l);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function SS(n){return Jl(2,n)}var yS=ig(function(n,i){i=i.length==1&&K(i[0])?Fn(i[0],ye(W())):Fn(Qn(i,1),ye(W()));var u=i.length;return rn(function(c){for(var f=-1,g=Kn(c.length,u);++f<g;)c[f]=i[f].call(this,c[f]);return Se(n,this,c)})}),zo=rn(function(n,i){var u=Bt(i,Ar(zo));return yt(n,On,t,i,u)}),ec=rn(function(n,i){var u=Bt(i,Ar(ec));return yt(n,te,t,i,u)}),DS=Dt(function(n,i){return yt(n,dt,t,t,t,i)});function ES(n,i){if(typeof n!="function")throw new Ne(l);return i=i===t?i:en(i),rn(n,i)}function IS(n,i){if(typeof n!="function")throw new Ne(l);return i=i==null?0:qn(en(i),0),rn(function(u){var c=u[i],f=Mt(u,0,i);return c&&xt(f,c),Se(n,this,f)})}function vS(n,i,u){var c=!0,f=!0;if(typeof n!="function")throw new Ne(l);return wn(u)&&(c="leading"in u?!!u.leading:c,f="trailing"in u?!!u.trailing:f),nc(n,i,{leading:c,maxWait:i,trailing:f})}function _S(n){return Ql(n,1)}function TS(n,i){return zo(Ro(i),n)}function AS(){if(!arguments.length)return[];var n=arguments[0];return K(n)?n:[n]}function bS(n){return Re(n,R)}function FS(n,i){return i=typeof i=="function"?i:t,Re(n,R,i)}function CS(n){return Re(n,I|R)}function NS(n,i){return i=typeof i=="function"?i:t,Re(n,I|R,i)}function wS(n,i){return i==null||Ga(n,i,Wn(i))}function He(n,i){return n===i||n!==n&&i!==i}var RS=Qi(Do),kS=Qi(function(n,i){return n>=i}),ir=Ya(function(){return arguments}())?Ya:function(n){return xn(n)&&Sn.call(n,"callee")&&!xa.call(n,"callee")},K=T.isArray,OS=ga?ye(ga):Vh;function pe(n){return n!=null&&is(n.length)&&!It(n)}function $n(n){return xn(n)&&pe(n)}function xS(n){return n===!0||n===!1||xn(n)&&ie(n)==gn}var Vt=Yd||iu,BS=ma?ye(ma):Gh;function LS(n){return xn(n)&&n.nodeType===1&&!Kr(n)}function PS(n){if(n==null)return!0;if(pe(n)&&(K(n)||typeof n=="string"||typeof n.splice=="function"||Vt(n)||br(n)||ir(n)))return!n.length;var i=ne(n);if(i==Ue||i==Me)return!n.size;if(Xr(n))return!vo(n).length;for(var u in n)if(Sn.call(n,u))return!1;return!0}function $S(n,i){return Yr(n,i)}function US(n,i,u){u=typeof u=="function"?u:t;var c=u?u(n,i):t;return c===t?Yr(n,i,t,u):!!c}function Yo(n){if(!xn(n))return!1;var i=ie(n);return i==kt||i==Or||typeof n.message=="string"&&typeof n.name=="string"&&!Kr(n)}function MS(n){return typeof n=="number"&&La(n)}function It(n){if(!wn(n))return!1;var i=ie(n);return i==Zn||i==Hu||i==Pn||i==cf}function tc(n){return typeof n=="number"&&n==en(n)}function is(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=$e}function wn(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function xn(n){return n!=null&&typeof n=="object"}var rc=Sa?ye(Sa):jh;function VS(n,i){return n===i||Io(n,i,$o(i))}function GS(n,i,u){return u=typeof u=="function"?u:t,Io(n,i,$o(i),u)}function HS(n){return ic(n)&&n!=+n}function jS(n){if(Fg(n))throw new Z(a);return Qa(n)}function qS(n){return n===null}function WS(n){return n==null}function ic(n){return typeof n=="number"||xn(n)&&ie(n)==xr}function Kr(n){if(!xn(n)||ie(n)!=ht)return!1;var i=Ri(n);if(i===null)return!0;var u=Sn.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&Fi.call(u)==Gd}var Qo=ya?ye(ya):qh;function zS(n){return tc(n)&&n>=-$e&&n<=$e}var sc=Da?ye(Da):Wh;function ss(n){return typeof n=="string"||!K(n)&&xn(n)&&ie(n)==Lr}function Ee(n){return typeof n=="symbol"||xn(n)&&ie(n)==yi}var br=Ea?ye(Ea):zh;function YS(n){return n===t}function QS(n){return xn(n)&&ne(n)==Pr}function JS(n){return xn(n)&&ie(n)==ff}var XS=Qi(_o),ZS=Qi(function(n,i){return n<=i});function oc(n){if(!n)return[];if(pe(n))return ss(n)?Ve(n):ce(n);if(Mr&&n[Mr])return wd(n[Mr]());var i=ne(n),u=i==Ue?lo:i==Me?Ti:Fr;return u(n)}function vt(n){if(!n)return n===0?n:0;if(n=xe(n),n===it||n===-it){var i=n<0?-1:1;return i*fr}return n===n?n:0}function en(n){var i=vt(n),u=i%1;return i===i?u?i-u:i:0}function uc(n){return n?nr(en(n),0,Ae):0}function xe(n){if(typeof n=="number")return n;if(Ee(n))return Qt;if(wn(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=wn(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=ba(n);var u=Of.test(n);return u||Bf.test(n)?dd(n.slice(2),u?2:8):kf.test(n)?Qt:+n}function ac(n){return ot(n,fe(n))}function KS(n){return n?nr(en(n),-$e,$e):n===0?n:0}function mn(n){return n==null?"":De(n)}var n0=_r(function(n,i){if(Xr(i)||pe(i)){ot(i,Wn(i),n);return}for(var u in i)Sn.call(i,u)&&qr(n,u,i[u])}),lc=_r(function(n,i){ot(i,fe(i),n)}),os=_r(function(n,i,u,c){ot(i,fe(i),n,c)}),e0=_r(function(n,i,u,c){ot(i,Wn(i),n,c)}),t0=Dt(mo);function r0(n,i){var u=vr(n);return i==null?u:Va(u,i)}var i0=rn(function(n,i){n=In(n);var u=-1,c=i.length,f=c>2?i[2]:t;for(f&&se(i[0],i[1],f)&&(c=1);++u<c;)for(var g=i[u],m=fe(g),D=-1,v=m.length;++D<v;){var F=m[D],N=n[F];(N===t||He(N,Dr[F])&&!Sn.call(n,F))&&(n[F]=g[F])}return n}),s0=rn(function(n){return n.push(t,bl),Se(cc,t,n)});function o0(n,i){return va(n,W(i,3),st)}function u0(n,i){return va(n,W(i,3),yo)}function a0(n,i){return n==null?n:So(n,W(i,3),fe)}function l0(n,i){return n==null?n:Wa(n,W(i,3),fe)}function c0(n,i){return n&&st(n,W(i,3))}function p0(n,i){return n&&yo(n,W(i,3))}function f0(n){return n==null?[]:Vi(n,Wn(n))}function d0(n){return n==null?[]:Vi(n,fe(n))}function Jo(n,i,u){var c=n==null?t:er(n,i);return c===t?u:c}function h0(n,i){return n!=null&&Nl(n,i,Ph)}function Xo(n,i){return n!=null&&Nl(n,i,$h)}var g0=Il(function(n,i,u){i!=null&&typeof i.toString!="function"&&(i=Ci.call(i)),n[i]=u},Ko(de)),m0=Il(function(n,i,u){i!=null&&typeof i.toString!="function"&&(i=Ci.call(i)),Sn.call(n,i)?n[i].push(u):n[i]=[u]},W),S0=rn(zr);function Wn(n){return pe(n)?Ua(n):vo(n)}function fe(n){return pe(n)?Ua(n,!0):Yh(n)}function y0(n,i){var u={};return i=W(i,3),st(n,function(c,f,g){St(u,i(c,f,g),c)}),u}function D0(n,i){var u={};return i=W(i,3),st(n,function(c,f,g){St(u,f,i(c,f,g))}),u}var E0=_r(function(n,i,u){Gi(n,i,u)}),cc=_r(function(n,i,u,c){Gi(n,i,u,c)}),I0=Dt(function(n,i){var u={};if(n==null)return u;var c=!1;i=Fn(i,function(g){return g=Ut(g,n),c||(c=g.length>1),g}),ot(n,Lo(n),u),c&&(u=Re(u,I|C|R,gg));for(var f=i.length;f--;)Co(u,i[f]);return u});function v0(n,i){return pc(n,rs(W(i)))}var _0=Dt(function(n,i){return n==null?{}:Jh(n,i)});function pc(n,i){if(n==null)return{};var u=Fn(Lo(n),function(c){return[c]});return i=W(i),tl(n,u,function(c,f){return i(c,f[0])})}function T0(n,i,u){i=Ut(i,n);var c=-1,f=i.length;for(f||(f=1,n=t);++c<f;){var g=n==null?t:n[ut(i[c])];g===t&&(c=f,g=u),n=It(g)?g.call(n):g}return n}function A0(n,i,u){return n==null?n:Qr(n,i,u)}function b0(n,i,u,c){return c=typeof c=="function"?c:t,n==null?n:Qr(n,i,u,c)}var fc=Tl(Wn),dc=Tl(fe);function F0(n,i,u){var c=K(n),f=c||Vt(n)||br(n);if(i=W(i,4),u==null){var g=n&&n.constructor;f?u=c?new g:[]:wn(n)?u=It(g)?vr(Ri(n)):{}:u={}}return(f?Ce:st)(n,function(m,D,v){return i(u,m,D,v)}),u}function C0(n,i){return n==null?!0:Co(n,i)}function N0(n,i,u){return n==null?n:ul(n,i,Ro(u))}function w0(n,i,u,c){return c=typeof c=="function"?c:t,n==null?n:ul(n,i,Ro(u),c)}function Fr(n){return n==null?[]:ao(n,Wn(n))}function R0(n){return n==null?[]:ao(n,fe(n))}function k0(n,i,u){return u===t&&(u=i,i=t),u!==t&&(u=xe(u),u=u===u?u:0),i!==t&&(i=xe(i),i=i===i?i:0),nr(xe(n),i,u)}function O0(n,i,u){return i=vt(i),u===t?(u=i,i=0):u=vt(u),n=xe(n),Uh(n,i,u)}function x0(n,i,u){if(u&&typeof u!="boolean"&&se(n,i,u)&&(i=u=t),u===t&&(typeof i=="boolean"?(u=i,i=t):typeof n=="boolean"&&(u=n,n=t)),n===t&&i===t?(n=0,i=1):(n=vt(n),i===t?(i=n,n=0):i=vt(i)),n>i){var c=n;n=i,i=c}if(u||n%1||i%1){var f=Pa();return Kn(n+f*(i-n+fd("1e-"+((f+"").length-1))),i)}return Ao(n,i)}var B0=Tr(function(n,i,u){return i=i.toLowerCase(),n+(u?hc(i):i)});function hc(n){return Zo(mn(n).toLowerCase())}function gc(n){return n=mn(n),n&&n.replace(Pf,Ad).replace(td,"")}function L0(n,i,u){n=mn(n),i=De(i);var c=n.length;u=u===t?c:nr(en(u),0,c);var f=u;return u-=i.length,u>=0&&n.slice(u,f)==i}function P0(n){return n=mn(n),n&&Sf.test(n)?n.replace(Wu,bd):n}function $0(n){return n=mn(n),n&&_f.test(n)?n.replace(Ws,"\\$&"):n}var U0=Tr(function(n,i,u){return n+(u?"-":"")+i.toLowerCase()}),M0=Tr(function(n,i,u){return n+(u?" ":"")+i.toLowerCase()}),V0=yl("toLowerCase");function G0(n,i,u){n=mn(n),i=en(i);var c=i?Sr(n):0;if(!i||c>=i)return n;var f=(i-c)/2;return Yi(Bi(f),u)+n+Yi(xi(f),u)}function H0(n,i,u){n=mn(n),i=en(i);var c=i?Sr(n):0;return i&&c<i?n+Yi(i-c,u):n}function j0(n,i,u){n=mn(n),i=en(i);var c=i?Sr(n):0;return i&&c<i?Yi(i-c,u)+n:n}function q0(n,i,u){return u||i==null?i=0:i&&(i=+i),Zd(mn(n).replace(zs,""),i||0)}function W0(n,i,u){return(u?se(n,i,u):i===t)?i=1:i=en(i),bo(mn(n),i)}function z0(){var n=arguments,i=mn(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var Y0=Tr(function(n,i,u){return n+(u?"_":"")+i.toLowerCase()});function Q0(n,i,u){return u&&typeof u!="number"&&se(n,i,u)&&(i=u=t),u=u===t?Ae:u>>>0,u?(n=mn(n),n&&(typeof i=="string"||i!=null&&!Qo(i))&&(i=De(i),!i&&mr(n))?Mt(Ve(n),0,u):n.split(i,u)):[]}var J0=Tr(function(n,i,u){return n+(u?" ":"")+Zo(i)});function X0(n,i,u){return n=mn(n),u=u==null?0:nr(en(u),0,n.length),i=De(i),n.slice(u,u+i.length)==i}function Z0(n,i,u){var c=h.templateSettings;u&&se(n,i,u)&&(i=t),n=mn(n),i=os({},i,c,Al);var f=os({},i.imports,c.imports,Al),g=Wn(f),m=ao(f,g),D,v,F=0,N=i.interpolate||Di,O="__p += '",L=co((i.escape||Di).source+"|"+N.source+"|"+(N===zu?Rf:Di).source+"|"+(i.evaluate||Di).source+"|$","g"),G="//# sourceURL="+(Sn.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ud+"]")+`
`;n.replace(L,function(Y,sn,cn,Ie,oe,ve){return cn||(cn=Ie),O+=n.slice(F,ve).replace($f,Fd),sn&&(D=!0,O+=`' +
__e(`+sn+`) +
'`),oe&&(v=!0,O+=`';
`+oe+`;
__p += '`),cn&&(O+=`' +
((__t = (`+cn+`)) == null ? '' : __t) +
'`),F=ve+Y.length,Y}),O+=`';
`;var z=Sn.call(i,"variable")&&i.variable;if(!z)O=`with (obj) {
`+O+`
}
`;else if(Nf.test(z))throw new Z(p);O=(v?O.replace(df,""):O).replace(hf,"$1").replace(gf,"$1;"),O="function("+(z||"obj")+`) {
`+(z?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(D?", __e = _.escape":"")+(v?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+O+`return __p
}`;var tn=Sc(function(){return fn(g,G+"return "+O).apply(t,m)});if(tn.source=O,Yo(tn))throw tn;return tn}function K0(n){return mn(n).toLowerCase()}function ny(n){return mn(n).toUpperCase()}function ey(n,i,u){if(n=mn(n),n&&(u||i===t))return ba(n);if(!n||!(i=De(i)))return n;var c=Ve(n),f=Ve(i),g=Fa(c,f),m=Ca(c,f)+1;return Mt(c,g,m).join("")}function ty(n,i,u){if(n=mn(n),n&&(u||i===t))return n.slice(0,wa(n)+1);if(!n||!(i=De(i)))return n;var c=Ve(n),f=Ca(c,Ve(i))+1;return Mt(c,0,f).join("")}function ry(n,i,u){if(n=mn(n),n&&(u||i===t))return n.replace(zs,"");if(!n||!(i=De(i)))return n;var c=Ve(n),f=Fa(c,Ve(i));return Mt(c,f).join("")}function iy(n,i){var u=X,c=re;if(wn(i)){var f="separator"in i?i.separator:f;u="length"in i?en(i.length):u,c="omission"in i?De(i.omission):c}n=mn(n);var g=n.length;if(mr(n)){var m=Ve(n);g=m.length}if(u>=g)return n;var D=u-Sr(c);if(D<1)return c;var v=m?Mt(m,0,D).join(""):n.slice(0,D);if(f===t)return v+c;if(m&&(D+=v.length-D),Qo(f)){if(n.slice(D).search(f)){var F,N=v;for(f.global||(f=co(f.source,mn(Yu.exec(f))+"g")),f.lastIndex=0;F=f.exec(N);)var O=F.index;v=v.slice(0,O===t?D:O)}}else if(n.indexOf(De(f),D)!=D){var L=v.lastIndexOf(f);L>-1&&(v=v.slice(0,L))}return v+c}function sy(n){return n=mn(n),n&&mf.test(n)?n.replace(qu,xd):n}var oy=Tr(function(n,i,u){return n+(u?" ":"")+i.toUpperCase()}),Zo=yl("toUpperCase");function mc(n,i,u){return n=mn(n),i=u?t:i,i===t?Nd(n)?Pd(n):Ed(n):n.match(i)||[]}var Sc=rn(function(n,i){try{return Se(n,t,i)}catch(u){return Yo(u)?u:new Z(u)}}),uy=Dt(function(n,i){return Ce(i,function(u){u=ut(u),St(n,u,Wo(n[u],n))}),n});function ay(n){var i=n==null?0:n.length,u=W();return n=i?Fn(n,function(c){if(typeof c[1]!="function")throw new Ne(l);return[u(c[0]),c[1]]}):[],rn(function(c){for(var f=-1;++f<i;){var g=n[f];if(Se(g[0],this,c))return Se(g[1],this,c)}})}function ly(n){return xh(Re(n,I))}function Ko(n){return function(){return n}}function cy(n,i){return n==null||n!==n?i:n}var py=El(),fy=El(!0);function de(n){return n}function nu(n){return Ja(typeof n=="function"?n:Re(n,I))}function dy(n){return Za(Re(n,I))}function hy(n,i){return Ka(n,Re(i,I))}var gy=rn(function(n,i){return function(u){return zr(u,n,i)}}),my=rn(function(n,i){return function(u){return zr(n,u,i)}});function eu(n,i,u){var c=Wn(i),f=Vi(i,c);u==null&&!(wn(i)&&(f.length||!c.length))&&(u=i,i=n,n=this,f=Vi(i,Wn(i)));var g=!(wn(u)&&"chain"in u)||!!u.chain,m=It(n);return Ce(f,function(D){var v=i[D];n[D]=v,m&&(n.prototype[D]=function(){var F=this.__chain__;if(g||F){var N=n(this.__wrapped__),O=N.__actions__=ce(this.__actions__);return O.push({func:v,args:arguments,thisArg:n}),N.__chain__=F,N}return v.apply(n,xt([this.value()],arguments))})}),n}function Sy(){return Yn._===this&&(Yn._=Hd),this}function tu(){}function yy(n){return n=en(n),rn(function(i){return nl(i,n)})}var Dy=Oo(Fn),Ey=Oo(Ia),Iy=Oo(ro);function yc(n){return Mo(n)?io(ut(n)):Xh(n)}function vy(n){return function(i){return n==null?t:er(n,i)}}var _y=vl(),Ty=vl(!0);function ru(){return[]}function iu(){return!1}function Ay(){return{}}function by(){return""}function Fy(){return!0}function Cy(n,i){if(n=en(n),n<1||n>$e)return[];var u=Ae,c=Kn(n,Ae);i=W(i),n-=Ae;for(var f=uo(c,i);++u<n;)i(u);return f}function Ny(n){return K(n)?Fn(n,ut):Ee(n)?[n]:ce($l(mn(n)))}function wy(n){var i=++Vd;return mn(n)+i}var Ry=zi(function(n,i){return n+i},0),ky=xo("ceil"),Oy=zi(function(n,i){return n/i},1),xy=xo("floor");function By(n){return n&&n.length?Mi(n,de,Do):t}function Ly(n,i){return n&&n.length?Mi(n,W(i,2),Do):t}function Py(n){return Ta(n,de)}function $y(n,i){return Ta(n,W(i,2))}function Uy(n){return n&&n.length?Mi(n,de,_o):t}function My(n,i){return n&&n.length?Mi(n,W(i,2),_o):t}var Vy=zi(function(n,i){return n*i},1),Gy=xo("round"),Hy=zi(function(n,i){return n-i},0);function jy(n){return n&&n.length?oo(n,de):0}function qy(n,i){return n&&n.length?oo(n,W(i,2)):0}return h.after=dS,h.ary=Ql,h.assign=n0,h.assignIn=lc,h.assignInWith=os,h.assignWith=e0,h.at=t0,h.before=Jl,h.bind=Wo,h.bindAll=uy,h.bindKey=Xl,h.castArray=AS,h.chain=Wl,h.chunk=xg,h.compact=Bg,h.concat=Lg,h.cond=ay,h.conforms=ly,h.constant=Ko,h.countBy=jm,h.create=r0,h.curry=Zl,h.curryRight=Kl,h.debounce=nc,h.defaults=i0,h.defaultsDeep=s0,h.defer=hS,h.delay=gS,h.difference=Pg,h.differenceBy=$g,h.differenceWith=Ug,h.drop=Mg,h.dropRight=Vg,h.dropRightWhile=Gg,h.dropWhile=Hg,h.fill=jg,h.filter=Wm,h.flatMap=Qm,h.flatMapDeep=Jm,h.flatMapDepth=Xm,h.flatten=Gl,h.flattenDeep=qg,h.flattenDepth=Wg,h.flip=mS,h.flow=py,h.flowRight=fy,h.fromPairs=zg,h.functions=f0,h.functionsIn=d0,h.groupBy=Zm,h.initial=Qg,h.intersection=Jg,h.intersectionBy=Xg,h.intersectionWith=Zg,h.invert=g0,h.invertBy=m0,h.invokeMap=nS,h.iteratee=nu,h.keyBy=eS,h.keys=Wn,h.keysIn=fe,h.map=ns,h.mapKeys=y0,h.mapValues=D0,h.matches=dy,h.matchesProperty=hy,h.memoize=ts,h.merge=E0,h.mergeWith=cc,h.method=gy,h.methodOf=my,h.mixin=eu,h.negate=rs,h.nthArg=yy,h.omit=I0,h.omitBy=v0,h.once=SS,h.orderBy=tS,h.over=Dy,h.overArgs=yS,h.overEvery=Ey,h.overSome=Iy,h.partial=zo,h.partialRight=ec,h.partition=rS,h.pick=_0,h.pickBy=pc,h.property=yc,h.propertyOf=vy,h.pull=tm,h.pullAll=jl,h.pullAllBy=rm,h.pullAllWith=im,h.pullAt=sm,h.range=_y,h.rangeRight=Ty,h.rearg=DS,h.reject=oS,h.remove=om,h.rest=ES,h.reverse=jo,h.sampleSize=aS,h.set=A0,h.setWith=b0,h.shuffle=lS,h.slice=um,h.sortBy=fS,h.sortedUniq=hm,h.sortedUniqBy=gm,h.split=Q0,h.spread=IS,h.tail=mm,h.take=Sm,h.takeRight=ym,h.takeRightWhile=Dm,h.takeWhile=Em,h.tap=Bm,h.throttle=vS,h.thru=Ki,h.toArray=oc,h.toPairs=fc,h.toPairsIn=dc,h.toPath=Ny,h.toPlainObject=ac,h.transform=F0,h.unary=_S,h.union=Im,h.unionBy=vm,h.unionWith=_m,h.uniq=Tm,h.uniqBy=Am,h.uniqWith=bm,h.unset=C0,h.unzip=qo,h.unzipWith=ql,h.update=N0,h.updateWith=w0,h.values=Fr,h.valuesIn=R0,h.without=Fm,h.words=mc,h.wrap=TS,h.xor=Cm,h.xorBy=Nm,h.xorWith=wm,h.zip=Rm,h.zipObject=km,h.zipObjectDeep=Om,h.zipWith=xm,h.entries=fc,h.entriesIn=dc,h.extend=lc,h.extendWith=os,eu(h,h),h.add=Ry,h.attempt=Sc,h.camelCase=B0,h.capitalize=hc,h.ceil=ky,h.clamp=k0,h.clone=bS,h.cloneDeep=CS,h.cloneDeepWith=NS,h.cloneWith=FS,h.conformsTo=wS,h.deburr=gc,h.defaultTo=cy,h.divide=Oy,h.endsWith=L0,h.eq=He,h.escape=P0,h.escapeRegExp=$0,h.every=qm,h.find=zm,h.findIndex=Ml,h.findKey=o0,h.findLast=Ym,h.findLastIndex=Vl,h.findLastKey=u0,h.floor=xy,h.forEach=zl,h.forEachRight=Yl,h.forIn=a0,h.forInRight=l0,h.forOwn=c0,h.forOwnRight=p0,h.get=Jo,h.gt=RS,h.gte=kS,h.has=h0,h.hasIn=Xo,h.head=Hl,h.identity=de,h.includes=Km,h.indexOf=Yg,h.inRange=O0,h.invoke=S0,h.isArguments=ir,h.isArray=K,h.isArrayBuffer=OS,h.isArrayLike=pe,h.isArrayLikeObject=$n,h.isBoolean=xS,h.isBuffer=Vt,h.isDate=BS,h.isElement=LS,h.isEmpty=PS,h.isEqual=$S,h.isEqualWith=US,h.isError=Yo,h.isFinite=MS,h.isFunction=It,h.isInteger=tc,h.isLength=is,h.isMap=rc,h.isMatch=VS,h.isMatchWith=GS,h.isNaN=HS,h.isNative=jS,h.isNil=WS,h.isNull=qS,h.isNumber=ic,h.isObject=wn,h.isObjectLike=xn,h.isPlainObject=Kr,h.isRegExp=Qo,h.isSafeInteger=zS,h.isSet=sc,h.isString=ss,h.isSymbol=Ee,h.isTypedArray=br,h.isUndefined=YS,h.isWeakMap=QS,h.isWeakSet=JS,h.join=Kg,h.kebabCase=U0,h.last=Oe,h.lastIndexOf=nm,h.lowerCase=M0,h.lowerFirst=V0,h.lt=XS,h.lte=ZS,h.max=By,h.maxBy=Ly,h.mean=Py,h.meanBy=$y,h.min=Uy,h.minBy=My,h.stubArray=ru,h.stubFalse=iu,h.stubObject=Ay,h.stubString=by,h.stubTrue=Fy,h.multiply=Vy,h.nth=em,h.noConflict=Sy,h.noop=tu,h.now=es,h.pad=G0,h.padEnd=H0,h.padStart=j0,h.parseInt=q0,h.random=x0,h.reduce=iS,h.reduceRight=sS,h.repeat=W0,h.replace=z0,h.result=T0,h.round=Gy,h.runInContext=E,h.sample=uS,h.size=cS,h.snakeCase=Y0,h.some=pS,h.sortedIndex=am,h.sortedIndexBy=lm,h.sortedIndexOf=cm,h.sortedLastIndex=pm,h.sortedLastIndexBy=fm,h.sortedLastIndexOf=dm,h.startCase=J0,h.startsWith=X0,h.subtract=Hy,h.sum=jy,h.sumBy=qy,h.template=Z0,h.times=Cy,h.toFinite=vt,h.toInteger=en,h.toLength=uc,h.toLower=K0,h.toNumber=xe,h.toSafeInteger=KS,h.toString=mn,h.toUpper=ny,h.trim=ey,h.trimEnd=ty,h.trimStart=ry,h.truncate=iy,h.unescape=sy,h.uniqueId=wy,h.upperCase=oy,h.upperFirst=Zo,h.each=zl,h.eachRight=Yl,h.first=Hl,eu(h,function(){var n={};return st(h,function(i,u){Sn.call(h.prototype,u)||(n[u]=i)}),n}(),{chain:!1}),h.VERSION=s,Ce(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){h[n].placeholder=h}),Ce(["drop","take"],function(n,i){an.prototype[n]=function(u){u=u===t?1:qn(en(u),0);var c=this.__filtered__&&!i?new an(this):this.clone();return c.__filtered__?c.__takeCount__=Kn(u,c.__takeCount__):c.__views__.push({size:Kn(u,Ae),type:n+(c.__dir__<0?"Right":"")}),c},an.prototype[n+"Right"]=function(u){return this.reverse()[n](u).reverse()}}),Ce(["filter","map","takeWhile"],function(n,i){var u=i+1,c=u==mi||u==Si;an.prototype[n]=function(f){var g=this.clone();return g.__iteratees__.push({iteratee:W(f,3),type:u}),g.__filtered__=g.__filtered__||c,g}}),Ce(["head","last"],function(n,i){var u="take"+(i?"Right":"");an.prototype[n]=function(){return this[u](1).value()[0]}}),Ce(["initial","tail"],function(n,i){var u="drop"+(i?"":"Right");an.prototype[n]=function(){return this.__filtered__?new an(this):this[u](1)}}),an.prototype.compact=function(){return this.filter(de)},an.prototype.find=function(n){return this.filter(n).head()},an.prototype.findLast=function(n){return this.reverse().find(n)},an.prototype.invokeMap=rn(function(n,i){return typeof n=="function"?new an(this):this.map(function(u){return zr(u,n,i)})}),an.prototype.reject=function(n){return this.filter(rs(W(n)))},an.prototype.slice=function(n,i){n=en(n);var u=this;return u.__filtered__&&(n>0||i<0)?new an(u):(n<0?u=u.takeRight(-n):n&&(u=u.drop(n)),i!==t&&(i=en(i),u=i<0?u.dropRight(-i):u.take(i-n)),u)},an.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},an.prototype.toArray=function(){return this.take(Ae)},st(an.prototype,function(n,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),f=h[c?"take"+(i=="last"?"Right":""):i],g=c||/^find/.test(i);f&&(h.prototype[i]=function(){var m=this.__wrapped__,D=c?[1]:arguments,v=m instanceof an,F=D[0],N=v||K(m),O=function(sn){var cn=f.apply(h,xt([sn],D));return c&&L?cn[0]:cn};N&&u&&typeof F=="function"&&F.length!=1&&(v=N=!1);var L=this.__chain__,G=!!this.__actions__.length,z=g&&!L,tn=v&&!G;if(!g&&N){m=tn?m:new an(this);var Y=n.apply(m,D);return Y.__actions__.push({func:Ki,args:[O],thisArg:t}),new we(Y,L)}return z&&tn?n.apply(this,D):(Y=this.thru(O),z?c?Y.value()[0]:Y.value():Y)})}),Ce(["pop","push","shift","sort","splice","unshift"],function(n){var i=Ai[n],u=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",c=/^(?:pop|shift)$/.test(n);h.prototype[n]=function(){var f=arguments;if(c&&!this.__chain__){var g=this.value();return i.apply(K(g)?g:[],f)}return this[u](function(m){return i.apply(K(m)?m:[],f)})}}),st(an.prototype,function(n,i){var u=h[i];if(u){var c=u.name+"";Sn.call(Ir,c)||(Ir[c]=[]),Ir[c].push({name:i,func:u})}}),Ir[Wi(t,dn).name]=[{name:"wrapper",func:t}],an.prototype.clone=sh,an.prototype.reverse=oh,an.prototype.value=uh,h.prototype.at=Lm,h.prototype.chain=Pm,h.prototype.commit=$m,h.prototype.next=Um,h.prototype.plant=Vm,h.prototype.reverse=Gm,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=Hm,h.prototype.first=h.prototype.head,Mr&&(h.prototype[Mr]=Mm),h},yr=$d();Jt?((Jt.exports=yr)._=yr,Ks._=yr):Yn._=yr}).call(ei)})(Is,Is.exports);var nI=Is.exports;const Ct=XE(nI),eI="Medium Article",tI="https://asset.brandfetch.io/idPF9SmwKn/id3BcGnhTM.png?updated=1703746251335",rI='[{"title":"Graphql Doc omni-onboarding-be","content":"\\n# omni-onboarding-be\\nThis is Graphql Documentation for omni-onboarding-be\\n## Where to go next?\\n- Star the project on [GitHub](https://github.com/magidoc-org/magidoc) \\n- Read the [documentation](https://magidoc.js.org/introduction/welcome)\\n"}]',iI="true",Ip={APP_TITLE:eI,APP_LOGO:tI,PAGES:rI,MAGIDOC_GENERATE:iI};function v_(r){return r.get(Ip)}function Lu(r,e){return r.getOrDefault(Ip,e)}function pn(r,e){if(!!!r)throw new Error(e)}function Nt(r){return typeof r=="object"&&r!==null}function Qe(r,e){if(!!!r)throw new Error(e??"Unexpected invariant triggered.")}const sI=/\r\n|[\n\r]/g;function Su(r,e){let t=0,s=1;for(const o of r.body.matchAll(sI)){if(typeof o.index=="number"||Qe(!1),o.index>=e)break;t=o.index+o[0].length,s+=1}return{line:s,column:e+1-t}}function oI(r){return vp(r.source,Su(r.source,r.start))}function vp(r,e){const t=r.locationOffset.column-1,s="".padStart(t)+r.body,o=e.line-1,a=r.locationOffset.line-1,l=e.line+a,p=e.line===1?t:0,d=e.column+p,S=`${r.name}:${l}:${d}
`,y=s.split(/\r\n|[\n\r]/g),I=y[o];if(I.length>120){const C=Math.floor(d/80),R=d%80,x=[];for(let B=0;B<I.length;B+=80)x.push(I.slice(B,B+80));return S+Gc([[`${l} |`,x[0]],...x.slice(1,C+1).map(B=>["|",B]),["|","^".padStart(R)],["|",x[C+1]]])}return S+Gc([[`${l-1} |`,y[o-1]],[`${l} |`,I],["|","^".padStart(d)],[`${l+1} |`,y[o+1]]])}function Gc(r){const e=r.filter(([s,o])=>o!==void 0),t=Math.max(...e.map(([s])=>s.length));return e.map(([s,o])=>s.padStart(t)+(o?" "+o:"")).join(`
`)}function uI(r){const e=r[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:e}class H extends Error{constructor(e,...t){var s,o,a;const{nodes:l,source:p,positions:d,path:S,originalError:y,extensions:I}=uI(t);super(e),this.name="GraphQLError",this.path=S??void 0,this.originalError=y??void 0,this.nodes=Hc(Array.isArray(l)?l:l?[l]:void 0);const C=Hc((s=this.nodes)===null||s===void 0?void 0:s.map(x=>x.loc).filter(x=>x!=null));this.source=p??(C==null||(o=C[0])===null||o===void 0?void 0:o.source),this.positions=d??(C==null?void 0:C.map(x=>x.start)),this.locations=d&&p?d.map(x=>Su(p,x)):C==null?void 0:C.map(x=>Su(x.source,x.start));const R=Nt(y==null?void 0:y.extensions)?y==null?void 0:y.extensions:void 0;this.extensions=(a=I??R)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),y!=null&&y.stack?Object.defineProperty(this,"stack",{value:y.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,H):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(e+=`

`+oI(t.loc));else if(this.source&&this.locations)for(const t of this.locations)e+=`

`+vp(this.source,t);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function Hc(r){return r===void 0||r.length===0?void 0:r}function zn(r,e,t){return new H(`Syntax Error: ${t}`,{source:r,positions:[e]})}class aI{constructor(e,t,s){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class _p{constructor(e,t,s,o,a,l){this.kind=e,this.start=t,this.end=s,this.line=o,this.column=a,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Tp={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},lI=new Set(Object.keys(Tp));function jc(r){const e=r==null?void 0:r.kind;return typeof e=="string"&&lI.has(e)}var Be;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})(Be||(Be={}));var q;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(q||(q={}));var _;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(_||(_={}));function yu(r){return r===9||r===32}function li(r){return r>=48&&r<=57}function Ap(r){return r>=97&&r<=122||r>=65&&r<=90}function Pu(r){return Ap(r)||r===95}function bp(r){return Ap(r)||li(r)||r===95}function cI(r){var e;let t=Number.MAX_SAFE_INTEGER,s=null,o=-1;for(let l=0;l<r.length;++l){var a;const p=r[l],d=pI(p);d!==p.length&&(s=(a=s)!==null&&a!==void 0?a:l,o=l,l!==0&&d<t&&(t=d))}return r.map((l,p)=>p===0?l:l.slice(t)).slice((e=s)!==null&&e!==void 0?e:0,o+1)}function pI(r){let e=0;for(;e<r.length&&yu(r.charCodeAt(e));)++e;return e}function fI(r,e){const t=r.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),o=s.length===1,a=s.length>1&&s.slice(1).every(R=>R.length===0||yu(R.charCodeAt(0))),l=t.endsWith('\\"""'),p=r.endsWith('"')&&!l,d=r.endsWith("\\"),S=p||d,y=!(e!=null&&e.minimize)&&(!o||r.length>70||S||a||l);let I="";const C=o&&yu(r.charCodeAt(0));return(y&&!C||a)&&(I+=`
`),I+=t,(y||S)&&(I+=`
`),'"""'+I+'"""'}var w;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(w||(w={}));class dI{constructor(e){const t=new _p(w.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==w.EOF)do if(e.next)e=e.next;else{const t=gI(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===w.COMMENT);return e}}function hI(r){return r===w.BANG||r===w.DOLLAR||r===w.AMP||r===w.PAREN_L||r===w.PAREN_R||r===w.SPREAD||r===w.COLON||r===w.EQUALS||r===w.AT||r===w.BRACKET_L||r===w.BRACKET_R||r===w.BRACE_L||r===w.PIPE||r===w.BRACE_R}function Rr(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function Ns(r,e){return Fp(r.charCodeAt(e))&&Cp(r.charCodeAt(e+1))}function Fp(r){return r>=55296&&r<=56319}function Cp(r){return r>=56320&&r<=57343}function ur(r,e){const t=r.source.body.codePointAt(e);if(t===void 0)return w.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Gn(r,e,t,s,o){const a=r.line,l=1+t-r.lineStart;return new _p(e,t,s,a,l,o)}function gI(r,e){const t=r.source.body,s=t.length;let o=e;for(;o<s;){const a=t.charCodeAt(o);switch(a){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++r.line,r.lineStart=o;continue;case 13:t.charCodeAt(o+1)===10?o+=2:++o,++r.line,r.lineStart=o;continue;case 35:return mI(r,o);case 33:return Gn(r,w.BANG,o,o+1);case 36:return Gn(r,w.DOLLAR,o,o+1);case 38:return Gn(r,w.AMP,o,o+1);case 40:return Gn(r,w.PAREN_L,o,o+1);case 41:return Gn(r,w.PAREN_R,o,o+1);case 46:if(t.charCodeAt(o+1)===46&&t.charCodeAt(o+2)===46)return Gn(r,w.SPREAD,o,o+3);break;case 58:return Gn(r,w.COLON,o,o+1);case 61:return Gn(r,w.EQUALS,o,o+1);case 64:return Gn(r,w.AT,o,o+1);case 91:return Gn(r,w.BRACKET_L,o,o+1);case 93:return Gn(r,w.BRACKET_R,o,o+1);case 123:return Gn(r,w.BRACE_L,o,o+1);case 124:return Gn(r,w.PIPE,o,o+1);case 125:return Gn(r,w.BRACE_R,o,o+1);case 34:return t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34?vI(r,o):yI(r,o)}if(li(a)||a===45)return SI(r,o,a);if(Pu(a))return _I(r,o);throw zn(r.source,o,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Rr(a)||Ns(t,o)?`Unexpected character: ${ur(r,o)}.`:`Invalid character: ${ur(r,o)}.`)}return Gn(r,w.EOF,s,s)}function mI(r,e){const t=r.source.body,s=t.length;let o=e+1;for(;o<s;){const a=t.charCodeAt(o);if(a===10||a===13)break;if(Rr(a))++o;else if(Ns(t,o))o+=2;else break}return Gn(r,w.COMMENT,e,o,t.slice(e+1,o))}function SI(r,e,t){const s=r.source.body;let o=e,a=t,l=!1;if(a===45&&(a=s.charCodeAt(++o)),a===48){if(a=s.charCodeAt(++o),li(a))throw zn(r.source,o,`Invalid number, unexpected digit after 0: ${ur(r,o)}.`)}else o=au(r,o,a),a=s.charCodeAt(o);if(a===46&&(l=!0,a=s.charCodeAt(++o),o=au(r,o,a),a=s.charCodeAt(o)),(a===69||a===101)&&(l=!0,a=s.charCodeAt(++o),(a===43||a===45)&&(a=s.charCodeAt(++o)),o=au(r,o,a),a=s.charCodeAt(o)),a===46||Pu(a))throw zn(r.source,o,`Invalid number, expected digit but got: ${ur(r,o)}.`);return Gn(r,l?w.FLOAT:w.INT,e,o,s.slice(e,o))}function au(r,e,t){if(!li(t))throw zn(r.source,e,`Invalid number, expected digit but got: ${ur(r,e)}.`);const s=r.source.body;let o=e+1;for(;li(s.charCodeAt(o));)++o;return o}function yI(r,e){const t=r.source.body,s=t.length;let o=e+1,a=o,l="";for(;o<s;){const p=t.charCodeAt(o);if(p===34)return l+=t.slice(a,o),Gn(r,w.STRING,e,o+1,l);if(p===92){l+=t.slice(a,o);const d=t.charCodeAt(o+1)===117?t.charCodeAt(o+2)===123?DI(r,o):EI(r,o):II(r,o);l+=d.value,o+=d.size,a=o;continue}if(p===10||p===13)break;if(Rr(p))++o;else if(Ns(t,o))o+=2;else throw zn(r.source,o,`Invalid character within String: ${ur(r,o)}.`)}throw zn(r.source,o,"Unterminated string.")}function DI(r,e){const t=r.source.body;let s=0,o=3;for(;o<12;){const a=t.charCodeAt(e+o++);if(a===125){if(o<5||!Rr(s))break;return{value:String.fromCodePoint(s),size:o}}if(s=s<<4|ti(a),s<0)break}throw zn(r.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+o)}".`)}function EI(r,e){const t=r.source.body,s=qc(t,e+2);if(Rr(s))return{value:String.fromCodePoint(s),size:6};if(Fp(s)&&t.charCodeAt(e+6)===92&&t.charCodeAt(e+7)===117){const o=qc(t,e+8);if(Cp(o))return{value:String.fromCodePoint(s,o),size:12}}throw zn(r.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+6)}".`)}function qc(r,e){return ti(r.charCodeAt(e))<<12|ti(r.charCodeAt(e+1))<<8|ti(r.charCodeAt(e+2))<<4|ti(r.charCodeAt(e+3))}function ti(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function II(r,e){const t=r.source.body;switch(t.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw zn(r.source,e,`Invalid character escape sequence: "${t.slice(e,e+2)}".`)}function vI(r,e){const t=r.source.body,s=t.length;let o=r.lineStart,a=e+3,l=a,p="";const d=[];for(;a<s;){const S=t.charCodeAt(a);if(S===34&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34){p+=t.slice(l,a),d.push(p);const y=Gn(r,w.BLOCK_STRING,e,a+3,cI(d).join(`
`));return r.line+=d.length-1,r.lineStart=o,y}if(S===92&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34&&t.charCodeAt(a+3)===34){p+=t.slice(l,a),l=a+1,a+=4;continue}if(S===10||S===13){p+=t.slice(l,a),d.push(p),S===13&&t.charCodeAt(a+1)===10?a+=2:++a,p="",l=a,o=a;continue}if(Rr(S))++a;else if(Ns(t,a))a+=2;else throw zn(r.source,a,`Invalid character within String: ${ur(r,a)}.`)}throw zn(r.source,a,"Unterminated string.")}function _I(r,e){const t=r.source.body,s=t.length;let o=e+1;for(;o<s;){const a=t.charCodeAt(o);if(bp(a))++o;else break}return Gn(r,w.NAME,e,o,t.slice(e,o))}const TI=10,Np=2;function j(r){return ws(r,[])}function ws(r,e){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return AI(r,e);default:return String(r)}}function AI(r,e){if(r===null)return"null";if(e.includes(r))return"[Circular]";const t=[...e,r];if(bI(r)){const s=r.toJSON();if(s!==r)return typeof s=="string"?s:ws(s,t)}else if(Array.isArray(r))return CI(r,t);return FI(r,t)}function bI(r){return typeof r.toJSON=="function"}function FI(r,e){const t=Object.entries(r);return t.length===0?"{}":e.length>Np?"["+NI(r)+"]":"{ "+t.map(([o,a])=>o+": "+ws(a,e)).join(", ")+" }"}function CI(r,e){if(r.length===0)return"[]";if(e.length>Np)return"[Array]";const t=Math.min(TI,r.length),s=r.length-t,o=[];for(let a=0;a<t;++a)o.push(ws(r[a],e));return s===1?o.push("... 1 more item"):s>1&&o.push(`... ${s} more items`),"["+o.join(", ")+"]"}function NI(r){const e=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return e}const ft=globalThis.process?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if(typeof e=="object"&&e!==null){var s;const o=t.prototype[Symbol.toStringTag],a=Symbol.toStringTag in e?e[Symbol.toStringTag]:(s=e.constructor)===null||s===void 0?void 0:s.name;if(o===a){const l=j(e);throw new Error(`Cannot use ${o} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class wp{constructor(e,t="GraphQL request",s={line:1,column:1}){typeof e=="string"||pn(!1,`Body must be a string. Received: ${j(e)}.`),this.body=e,this.name=t,this.locationOffset=s,this.locationOffset.line>0||pn(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||pn(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function wI(r){return ft(r,wp)}function RI(r,e){return new Rp(r,e).parseDocument()}function kI(r,e){const t=new Rp(r,e);t.expectToken(w.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(w.EOF),s}class Rp{constructor(e,t={}){const s=wI(e)?e:new wp(e);this._lexer=new dI(s),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(w.NAME);return this.node(e,{kind:_.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:_.DOCUMENT,definitions:this.many(w.SOF,this.parseDefinition,w.EOF)})}parseDefinition(){if(this.peek(w.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===w.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw zn(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(w.BRACE_L))return this.node(e,{kind:_.OPERATION_DEFINITION,operation:Be.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(w.NAME)&&(s=this.parseName()),this.node(e,{kind:_.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(w.NAME);switch(e.value){case"query":return Be.QUERY;case"mutation":return Be.MUTATION;case"subscription":return Be.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(w.PAREN_L,this.parseVariableDefinition,w.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:_.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(w.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(w.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(w.DOLLAR),this.node(e,{kind:_.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:_.SELECTION_SET,selections:this.many(w.BRACE_L,this.parseSelection,w.BRACE_R)})}parseSelection(){return this.peek(w.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let s,o;return this.expectOptionalToken(w.COLON)?(s=t,o=this.parseName()):o=t,this.node(e,{kind:_.FIELD,alias:s,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(w.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(w.PAREN_L,t,w.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(w.COLON),this.node(t,{kind:_.ARGUMENT,name:s,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(w.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(w.NAME)?this.node(e,{kind:_.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:_.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case w.BRACKET_L:return this.parseList(e);case w.BRACE_L:return this.parseObject(e);case w.INT:return this.advanceLexer(),this.node(t,{kind:_.INT,value:t.value});case w.FLOAT:return this.advanceLexer(),this.node(t,{kind:_.FLOAT,value:t.value});case w.STRING:case w.BLOCK_STRING:return this.parseStringLiteral();case w.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:_.BOOLEAN,value:!0});case"false":return this.node(t,{kind:_.BOOLEAN,value:!1});case"null":return this.node(t,{kind:_.NULL});default:return this.node(t,{kind:_.ENUM,value:t.value})}case w.DOLLAR:if(e)if(this.expectToken(w.DOLLAR),this._lexer.token.kind===w.NAME){const s=this._lexer.token.value;throw zn(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:_.STRING,value:e.value,block:e.kind===w.BLOCK_STRING})}parseList(e){const t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:_.LIST,values:this.any(w.BRACKET_L,t,w.BRACKET_R)})}parseObject(e){const t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:_.OBJECT,fields:this.any(w.BRACE_L,t,w.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,s=this.parseName();return this.expectToken(w.COLON),this.node(t,{kind:_.OBJECT_FIELD,name:s,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(w.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(w.AT),this.node(t,{kind:_.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(w.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(w.BRACKET_R),t=this.node(e,{kind:_.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(w.BANG)?this.node(e,{kind:_.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:_.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(w.STRING)||this.peek(w.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),o=this.many(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);return this.node(e,{kind:_.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:o})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(w.COLON);const s=this.parseNamedType();return this.node(e,{kind:_.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),o=this.parseConstDirectives();return this.node(e,{kind:_.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:o})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:_.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:a,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(w.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseFieldDefinition,w.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),s=this.parseName(),o=this.parseArgumentDefs();this.expectToken(w.COLON);const a=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(e,{kind:_.FIELD_DEFINITION,description:t,name:s,arguments:o,type:a,directives:l})}parseArgumentDefs(){return this.optionalMany(w.PAREN_L,this.parseInputValueDef,w.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(w.COLON);const o=this.parseTypeReference();let a;this.expectOptionalToken(w.EQUALS)&&(a=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(e,{kind:_.INPUT_VALUE_DEFINITION,description:t,name:s,type:o,defaultValue:a,directives:l})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:_.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:a,fields:l})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),o=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(e,{kind:_.UNION_TYPE_DEFINITION,description:t,name:s,directives:o,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(w.EQUALS)?this.delimitedMany(w.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),o=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(e,{kind:_.ENUM_TYPE_DEFINITION,description:t,name:s,directives:o,values:a})}parseEnumValuesDefinition(){return this.optionalMany(w.BRACE_L,this.parseEnumValueDefinition,w.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(e,{kind:_.ENUM_VALUE_DEFINITION,description:t,name:s,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw zn(this._lexer.source,this._lexer.token.start,`${fs(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),o=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(e,{kind:_.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:o,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseInputValueDef,w.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===w.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:_.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(e,{kind:_.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:_.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:a})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:_.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:a})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:_.UNION_TYPE_EXTENSION,name:t,directives:s,types:o})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:_.ENUM_TYPE_EXTENSION,name:t,directives:s,values:o})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:_.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:o})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(w.AT);const s=this.parseName(),o=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(e,{kind:_.DIRECTIVE_DEFINITION,description:t,name:s,arguments:o,repeatable:a,locations:l})}parseDirectiveLocations(){return this.delimitedMany(w.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(q,t.value))return t;throw this.unexpected(e)}node(e,t){return this._options.noLocation!==!0&&(t.loc=new aI(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw zn(this._lexer.source,t.start,`Expected ${kp(e)}, found ${fs(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const t=this._lexer.token;if(t.kind===w.NAME&&t.value===e)this.advanceLexer();else throw zn(this._lexer.source,t.start,`Expected "${e}", found ${fs(t)}.`)}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===w.NAME&&t.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const t=e??this._lexer.token;return zn(this._lexer.source,t.start,`Unexpected ${fs(t)}.`)}any(e,t,s){this.expectToken(e);const o=[];for(;!this.expectOptionalToken(s);)o.push(t.call(this));return o}optionalMany(e,t,s){if(this.expectOptionalToken(e)){const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}return[]}many(e,t,s){this.expectToken(e);const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}delimitedMany(e,t){this.expectOptionalToken(e);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(e));return s}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(e!==void 0&&t.kind!==w.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw zn(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function fs(r){const e=r.value;return kp(r.kind)+(e!=null?` "${e}"`:"")}function kp(r){return hI(r)?`"${r}"`:r}const OI=5;function Rs(r,e){const[t,s]=e?[r,e]:[void 0,r];let o=" Did you mean ";t&&(o+=t+" ");const a=s.map(d=>`"${d}"`);switch(a.length){case 0:return"";case 1:return o+a[0]+"?";case 2:return o+a[0]+" or "+a[1]+"?"}const l=a.slice(0,OI),p=l.pop();return o+l.join(", ")+", or "+p+"?"}function Wc(r){return r}function Nr(r,e){const t=Object.create(null);for(const s of r)t[e(s)]=s;return t}function sr(r,e,t){const s=Object.create(null);for(const o of r)s[e(o)]=t(o);return s}function Tt(r,e){const t=Object.create(null);for(const s of Object.keys(r))t[s]=e(r[s],s);return t}function xI(r,e){let t=0,s=0;for(;t<r.length&&s<e.length;){let o=r.charCodeAt(t),a=e.charCodeAt(s);if(ds(o)&&ds(a)){let l=0;do++t,l=l*10+o-Du,o=r.charCodeAt(t);while(ds(o)&&l>0);let p=0;do++s,p=p*10+a-Du,a=e.charCodeAt(s);while(ds(a)&&p>0);if(l<p)return-1;if(l>p)return 1}else{if(o<a)return-1;if(o>a)return 1;++t,++s}}return r.length-e.length}const Du=48,BI=57;function ds(r){return!isNaN(r)&&Du<=r&&r<=BI}function ks(r,e){const t=Object.create(null),s=new LI(r),o=Math.floor(r.length*.4)+1;for(const a of e){const l=s.measure(a,o);l!==void 0&&(t[a]=l)}return Object.keys(t).sort((a,l)=>{const p=t[a]-t[l];return p!==0?p:xI(a,l)})}class LI{constructor(e){this._input=e,this._inputLowerCase=e.toLowerCase(),this._inputArray=zc(this._inputLowerCase),this._rows=[new Array(e.length+1).fill(0),new Array(e.length+1).fill(0),new Array(e.length+1).fill(0)]}measure(e,t){if(this._input===e)return 0;const s=e.toLowerCase();if(this._inputLowerCase===s)return 1;let o=zc(s),a=this._inputArray;if(o.length<a.length){const y=o;o=a,a=y}const l=o.length,p=a.length;if(l-p>t)return;const d=this._rows;for(let y=0;y<=p;y++)d[0][y]=y;for(let y=1;y<=l;y++){const I=d[(y-1)%3],C=d[y%3];let R=C[0]=y;for(let x=1;x<=p;x++){const B=o[y-1]===a[x-1]?0:1;let Q=Math.min(I[x]+1,C[x-1]+1,I[x-1]+B);if(y>1&&x>1&&o[y-1]===a[x-2]&&o[y-2]===a[x-1]){const dn=d[(y-2)%3][x-2];Q=Math.min(Q,dn+1)}Q<R&&(R=Q),C[x]=Q}if(R>t)return}const S=d[l%3][p];return S<=t?S:void 0}}function zc(r){const e=r.length,t=new Array(e);for(let s=0;s<e;++s)t[s]=r.charCodeAt(s);return t}function Pe(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const e=Object.create(null);for(const[t,s]of Object.entries(r))e[t]=s;return e}function PI(r){return`"${r.replace($I,UI)}"`}const $I=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function UI(r){return MI[r.charCodeAt(0)]}const MI=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ri=Object.freeze({});function Op(r,e,t=Tp){const s=new Map;for(const dn of Object.values(_))s.set(dn,xp(e,dn));let o,a=Array.isArray(r),l=[r],p=-1,d=[],S=r,y,I;const C=[],R=[];do{p++;const dn=p===l.length,Vn=dn&&d.length!==0;if(dn){if(y=R.length===0?void 0:C[C.length-1],S=I,I=R.pop(),Vn)if(a){S=S.slice();let Nn=0;for(const[On,te]of d){const Xn=On-Nn;te===null?(S.splice(Xn,1),Nn++):S[Xn]=te}}else{S=Object.defineProperties({},Object.getOwnPropertyDescriptors(S));for(const[Nn,On]of d)S[Nn]=On}p=o.index,l=o.keys,d=o.edits,a=o.inArray,o=o.prev}else if(I){if(y=a?p:l[p],S=I[y],S==null)continue;C.push(y)}let _n;if(!Array.isArray(S)){var x,B;jc(S)||pn(!1,`Invalid AST Node: ${j(S)}.`);const Nn=dn?(x=s.get(S.kind))===null||x===void 0?void 0:x.leave:(B=s.get(S.kind))===null||B===void 0?void 0:B.enter;if(_n=Nn==null?void 0:Nn.call(e,S,y,I,C,R),_n===ri)break;if(_n===!1){if(!dn){C.pop();continue}}else if(_n!==void 0&&(d.push([y,_n]),!dn))if(jc(_n))S=_n;else{C.pop();continue}}if(_n===void 0&&Vn&&d.push([y,S]),dn)C.pop();else{var Q;o={inArray:a,index:p,keys:l,edits:d,prev:o},a=Array.isArray(S),l=a?S:(Q=t[S.kind])!==null&&Q!==void 0?Q:[],p=-1,d=[],I&&R.push(I),I=S}}while(o!==void 0);return d.length!==0?d[d.length-1][1]:r}function VI(r){const e=new Array(r.length).fill(null),t=Object.create(null);for(const s of Object.values(_)){let o=!1;const a=new Array(r.length).fill(void 0),l=new Array(r.length).fill(void 0);for(let d=0;d<r.length;++d){const{enter:S,leave:y}=xp(r[d],s);o||(o=S!=null||y!=null),a[d]=S,l[d]=y}if(!o)continue;const p={enter(...d){const S=d[0];for(let I=0;I<r.length;I++)if(e[I]===null){var y;const C=(y=a[I])===null||y===void 0?void 0:y.apply(r[I],d);if(C===!1)e[I]=S;else if(C===ri)e[I]=ri;else if(C!==void 0)return C}},leave(...d){const S=d[0];for(let I=0;I<r.length;I++)if(e[I]===null){var y;const C=(y=l[I])===null||y===void 0?void 0:y.apply(r[I],d);if(C===ri)e[I]=ri;else if(C!==void 0&&C!==!1)return C}else e[I]===S&&(e[I]=null)}};t[s]=p}return t}function xp(r,e){const t=r[e];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function ct(r){return Op(r,HI)}const GI=80,HI={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>V(r.definitions,`

`)},OperationDefinition:{leave(r){const e=ln("(",V(r.variableDefinitions,", "),")"),t=V([r.operation,V([r.name,e]),V(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:e,defaultValue:t,directives:s})=>r+": "+e+ln(" = ",t)+ln(" ",V(s," "))},SelectionSet:{leave:({selections:r})=>qe(r)},Field:{leave({alias:r,name:e,arguments:t,directives:s,selectionSet:o}){const a=ln("",r,": ")+e;let l=a+ln("(",V(t,", "),")");return l.length>GI&&(l=a+ln(`(
`,ms(V(t,`
`)),`
)`)),V([l,V(s," "),o]," ")}},Argument:{leave:({name:r,value:e})=>r+": "+e},FragmentSpread:{leave:({name:r,directives:e})=>"..."+r+ln(" ",V(e," "))},InlineFragment:{leave:({typeCondition:r,directives:e,selectionSet:t})=>V(["...",ln("on ",r),V(e," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:e,variableDefinitions:t,directives:s,selectionSet:o})=>`fragment ${r}${ln("(",V(t,", "),")")} on ${e} ${ln("",V(s," ")," ")}`+o},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:e})=>e?fI(r):PI(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+V(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+V(r,", ")+"}"},ObjectField:{leave:({name:r,value:e})=>r+": "+e},Directive:{leave:({name:r,arguments:e})=>"@"+r+ln("(",V(e,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:e,operationTypes:t})=>ln("",r,`
`)+V(["schema",V(e," "),qe(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:e})=>r+": "+e},ScalarTypeDefinition:{leave:({description:r,name:e,directives:t})=>ln("",r,`
`)+V(["scalar",e,V(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:e,interfaces:t,directives:s,fields:o})=>ln("",r,`
`)+V(["type",e,ln("implements ",V(t," & ")),V(s," "),qe(o)]," ")},FieldDefinition:{leave:({description:r,name:e,arguments:t,type:s,directives:o})=>ln("",r,`
`)+e+(Yc(t)?ln(`(
`,ms(V(t,`
`)),`
)`):ln("(",V(t,", "),")"))+": "+s+ln(" ",V(o," "))},InputValueDefinition:{leave:({description:r,name:e,type:t,defaultValue:s,directives:o})=>ln("",r,`
`)+V([e+": "+t,ln("= ",s),V(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:e,interfaces:t,directives:s,fields:o})=>ln("",r,`
`)+V(["interface",e,ln("implements ",V(t," & ")),V(s," "),qe(o)]," ")},UnionTypeDefinition:{leave:({description:r,name:e,directives:t,types:s})=>ln("",r,`
`)+V(["union",e,V(t," "),ln("= ",V(s," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:e,directives:t,values:s})=>ln("",r,`
`)+V(["enum",e,V(t," "),qe(s)]," ")},EnumValueDefinition:{leave:({description:r,name:e,directives:t})=>ln("",r,`
`)+V([e,V(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:e,directives:t,fields:s})=>ln("",r,`
`)+V(["input",e,V(t," "),qe(s)]," ")},DirectiveDefinition:{leave:({description:r,name:e,arguments:t,repeatable:s,locations:o})=>ln("",r,`
`)+"directive @"+e+(Yc(t)?ln(`(
`,ms(V(t,`
`)),`
)`):ln("(",V(t,", "),")"))+(s?" repeatable":"")+" on "+V(o," | ")},SchemaExtension:{leave:({directives:r,operationTypes:e})=>V(["extend schema",V(r," "),qe(e)]," ")},ScalarTypeExtension:{leave:({name:r,directives:e})=>V(["extend scalar",r,V(e," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:e,directives:t,fields:s})=>V(["extend type",r,ln("implements ",V(e," & ")),V(t," "),qe(s)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:e,directives:t,fields:s})=>V(["extend interface",r,ln("implements ",V(e," & ")),V(t," "),qe(s)]," ")},UnionTypeExtension:{leave:({name:r,directives:e,types:t})=>V(["extend union",r,V(e," "),ln("= ",V(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:e,values:t})=>V(["extend enum",r,V(e," "),qe(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:e,fields:t})=>V(["extend input",r,V(e," "),qe(t)]," ")}};function V(r,e=""){var t;return(t=r==null?void 0:r.filter(s=>s).join(e))!==null&&t!==void 0?t:""}function qe(r){return ln(`{
`,ms(V(r,`
`)),`
}`)}function ln(r,e,t=""){return e!=null&&e!==""?r+e+t:""}function ms(r){return ln("  ",r.replace(/\n/g,`
  `))}function Yc(r){var e;return(e=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&e!==void 0?e:!1}function Eu(r,e){switch(r.kind){case _.NULL:return null;case _.INT:return parseInt(r.value,10);case _.FLOAT:return parseFloat(r.value);case _.STRING:case _.ENUM:case _.BOOLEAN:return r.value;case _.LIST:return r.values.map(t=>Eu(t,e));case _.OBJECT:return sr(r.fields,t=>t.name.value,t=>Eu(t.value,e));case _.VARIABLE:return e==null?void 0:e[r.name.value]}}function rt(r){if(r!=null||pn(!1,"Must provide name."),typeof r=="string"||pn(!1,"Expected name to be a string."),r.length===0)throw new H("Expected name to be a non-empty string.");for(let e=1;e<r.length;++e)if(!bp(r.charCodeAt(e)))throw new H(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!Pu(r.charCodeAt(0)))throw new H(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function jI(r){if(r==="true"||r==="false"||r==="null")throw new H(`Enum values cannot be named: ${r}`);return rt(r)}function $u(r){return zt(r)||me(r)||ae(r)||Je(r)||Xe(r)||Ze(r)||cr(r)||ue(r)}function zt(r){return ft(r,wt)}function me(r){return ft(r,pt)}function qI(r){if(!me(r))throw new Error(`Expected ${j(r)} to be a GraphQL Object type.`);return r}function ae(r){return ft(r,vs)}function WI(r){if(!ae(r))throw new Error(`Expected ${j(r)} to be a GraphQL Interface type.`);return r}function Je(r){return ft(r,_s)}function Xe(r){return ft(r,wr)}function Ze(r){return ft(r,Ts)}function cr(r){return ft(r,ge)}function ue(r){return ft(r,on)}function Bp(r){return zt(r)||Xe(r)||Ze(r)||Uu(r)&&Bp(r.ofType)}function Lp(r){return zt(r)||me(r)||ae(r)||Je(r)||Xe(r)||Uu(r)&&Lp(r.ofType)}function Pp(r){return zt(r)||Xe(r)}function zI(r){return ae(r)||Je(r)}class ge{constructor(e){$u(e)||pn(!1,`Expected ${j(e)} to be a GraphQL type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class on{constructor(e){$p(e)||pn(!1,`Expected ${j(e)} to be a GraphQL nullable type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Uu(r){return cr(r)||ue(r)}function $p(r){return $u(r)&&!ue(r)}function YI(r){if(!$p(r))throw new Error(`Expected ${j(r)} to be a GraphQL nullable type.`);return r}function __(r){return zt(r)||me(r)||ae(r)||Je(r)||Xe(r)||Ze(r)}function QI(r){if(r){let e=r;for(;Uu(e);)e=e.ofType;return e}}function Up(r){return typeof r=="function"?r():r}function Mp(r){return typeof r=="function"?r():r}class wt{constructor(e){var t,s,o,a;const l=(t=e.parseValue)!==null&&t!==void 0?t:Wc;this.name=rt(e.name),this.description=e.description,this.specifiedByURL=e.specifiedByURL,this.serialize=(s=e.serialize)!==null&&s!==void 0?s:Wc,this.parseValue=l,this.parseLiteral=(o=e.parseLiteral)!==null&&o!==void 0?o:(p,d)=>l(Eu(p,d)),this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(a=e.extensionASTNodes)!==null&&a!==void 0?a:[],e.specifiedByURL==null||typeof e.specifiedByURL=="string"||pn(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${j(e.specifiedByURL)}.`),e.serialize==null||typeof e.serialize=="function"||pn(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),e.parseLiteral&&(typeof e.parseValue=="function"&&typeof e.parseLiteral=="function"||pn(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class pt{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.isTypeOf=e.isTypeOf,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>Gp(e),this._interfaces=()=>Vp(e),e.isTypeOf==null||typeof e.isTypeOf=="function"||pn(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${j(e.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jp(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Vp(r){var e;const t=Up((e=r.interfaces)!==null&&e!==void 0?e:[]);return Array.isArray(t)||pn(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function Gp(r){const e=Mp(r.fields);return Cr(e)||pn(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),Tt(e,(t,s)=>{var o;Cr(t)||pn(!1,`${r.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||pn(!1,`${r.name}.${s} field resolver must be a function if provided, but got: ${j(t.resolve)}.`);const a=(o=t.args)!==null&&o!==void 0?o:{};return Cr(a)||pn(!1,`${r.name}.${s} args must be an object with argument names as keys.`),{name:rt(s),description:t.description,type:t.type,args:Hp(a),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Pe(t.extensions),astNode:t.astNode}})}function Hp(r){return Object.entries(r).map(([e,t])=>({name:rt(e),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Pe(t.extensions),astNode:t.astNode}))}function Cr(r){return Nt(r)&&!Array.isArray(r)}function jp(r){return Tt(r,e=>({description:e.description,type:e.type,args:qp(e.args),resolve:e.resolve,subscribe:e.subscribe,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function qp(r){return sr(r,e=>e.name,e=>({description:e.description,type:e.type,defaultValue:e.defaultValue,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function JI(r){return ue(r.type)&&r.defaultValue===void 0}class vs{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=Gp.bind(void 0,e),this._interfaces=Vp.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||pn(!1,`${this.name} must provide "resolveType" as a function, but got: ${j(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jp(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class _s{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=XI.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||pn(!1,`${this.name} must provide "resolveType" as a function, but got: ${j(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function XI(r){const e=Up(r.types);return Array.isArray(e)||pn(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),e}class wr{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=ZI(this.name,e.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=Nr(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(e){return this._nameLookup[e]}serialize(e){const t=this._valueLookup.get(e);if(t===void 0)throw new H(`Enum "${this.name}" cannot represent value: ${j(e)}`);return t.name}parseValue(e){if(typeof e!="string"){const s=j(e);throw new H(`Enum "${this.name}" cannot represent non-string value: ${s}.`+hs(this,s))}const t=this.getValue(e);if(t==null)throw new H(`Value "${e}" does not exist in "${this.name}" enum.`+hs(this,e));return t.value}parseLiteral(e,t){if(e.kind!==_.ENUM){const o=ct(e);throw new H(`Enum "${this.name}" cannot represent non-enum value: ${o}.`+hs(this,o),{nodes:e})}const s=this.getValue(e.value);if(s==null){const o=ct(e);throw new H(`Value "${o}" does not exist in "${this.name}" enum.`+hs(this,o),{nodes:e})}return s.value}toConfig(){const e=sr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function hs(r,e){const t=r.getValues().map(o=>o.name),s=ks(e,t);return Rs("the enum value",s)}function ZI(r,e){return Cr(e)||pn(!1,`${r} values must be an object with value names as keys.`),Object.entries(e).map(([t,s])=>(Cr(s)||pn(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${j(s)}.`),{name:jI(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Pe(s.extensions),astNode:s.astNode}))}class Ts{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=KI.bind(void 0,e)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const e=Tt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function KI(r){const e=Mp(r.fields);return Cr(e)||pn(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),Tt(e,(t,s)=>(!("resolve"in t)||pn(!1,`${r.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:rt(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Pe(t.extensions),astNode:t.astNode}))}const lu=2147483647,cu=-2147483648,nv=new wt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const e=hi(r);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isInteger(t))throw new H(`Int cannot represent non-integer value: ${j(e)}`);if(t>lu||t<cu)throw new H("Int cannot represent non 32-bit signed integer value: "+j(e));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new H(`Int cannot represent non-integer value: ${j(r)}`);if(r>lu||r<cu)throw new H(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==_.INT)throw new H(`Int cannot represent non-integer value: ${ct(r)}`,{nodes:r});const e=parseInt(r.value,10);if(e>lu||e<cu)throw new H(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return e}}),ev=new wt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const e=hi(r);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isFinite(t))throw new H(`Float cannot represent non numeric value: ${j(e)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new H(`Float cannot represent non numeric value: ${j(r)}`);return r},parseLiteral(r){if(r.kind!==_.FLOAT&&r.kind!==_.INT)throw new H(`Float cannot represent non numeric value: ${ct(r)}`,r);return parseFloat(r.value)}}),Mn=new wt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const e=hi(r);if(typeof e=="string")return e;if(typeof e=="boolean")return e?"true":"false";if(typeof e=="number"&&Number.isFinite(e))return e.toString();throw new H(`String cannot represent value: ${j(r)}`)},parseValue(r){if(typeof r!="string")throw new H(`String cannot represent a non string value: ${j(r)}`);return r},parseLiteral(r){if(r.kind!==_.STRING)throw new H(`String cannot represent a non string value: ${ct(r)}`,{nodes:r});return r.value}}),Le=new wt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const e=hi(r);if(typeof e=="boolean")return e;if(Number.isFinite(e))return e!==0;throw new H(`Boolean cannot represent a non boolean value: ${j(e)}`)},parseValue(r){if(typeof r!="boolean")throw new H(`Boolean cannot represent a non boolean value: ${j(r)}`);return r},parseLiteral(r){if(r.kind!==_.BOOLEAN)throw new H(`Boolean cannot represent a non boolean value: ${ct(r)}`,{nodes:r});return r.value}}),Wp=new wt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const e=hi(r);if(typeof e=="string")return e;if(Number.isInteger(e))return String(e);throw new H(`ID cannot represent value: ${j(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new H(`ID cannot represent value: ${j(r)}`)},parseLiteral(r){if(r.kind!==_.STRING&&r.kind!==_.INT)throw new H("ID cannot represent a non-string and non-integer value: "+ct(r),{nodes:r});return r.value}}),Os=Object.freeze([Mn,nv,ev,Le,Wp]);function tv(r){return Os.some(({name:e})=>r.name===e)}function hi(r){if(Nt(r)){if(typeof r.valueOf=="function"){const e=r.valueOf();if(!Nt(e))return e}if(typeof r.toJSON=="function")return r.toJSON()}return r}function rv(r){return ft(r,Wt)}class Wt{constructor(e){var t,s;this.name=rt(e.name),this.description=e.description,this.locations=e.locations,this.isRepeatable=(t=e.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Pe(e.extensions),this.astNode=e.astNode,Array.isArray(e.locations)||pn(!1,`@${e.name} locations must be an Array.`);const o=(s=e.args)!==null&&s!==void 0?s:{};Nt(o)&&!Array.isArray(o)||pn(!1,`@${e.name} args must be an object with argument names as keys.`),this.args=Hp(o)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:qp(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const iv=new Wt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[q.FIELD,q.FRAGMENT_SPREAD,q.INLINE_FRAGMENT],args:{if:{type:new on(Le),description:"Included when true."}}}),sv=new Wt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[q.FIELD,q.FRAGMENT_SPREAD,q.INLINE_FRAGMENT],args:{if:{type:new on(Le),description:"Skipped when true."}}}),ov="No longer supported",zp=new Wt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[q.FIELD_DEFINITION,q.ARGUMENT_DEFINITION,q.INPUT_FIELD_DEFINITION,q.ENUM_VALUE],args:{reason:{type:Mn,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:ov}}}),Yp=new Wt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[q.SCALAR],args:{url:{type:new on(Mn),description:"The URL that specifies the behavior of this scalar."}}}),kr=Object.freeze([iv,sv,zp,Yp]);function uv(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function ii(r,e){if(ue(e)){const t=ii(r,e.ofType);return(t==null?void 0:t.kind)===_.NULL?null:t}if(r===null)return{kind:_.NULL};if(r===void 0)return null;if(cr(e)){const t=e.ofType;if(uv(r)){const s=[];for(const o of r){const a=ii(o,t);a!=null&&s.push(a)}return{kind:_.LIST,values:s}}return ii(r,t)}if(Ze(e)){if(!Nt(r))return null;const t=[];for(const s of Object.values(e.getFields())){const o=ii(r[s.name],s.type);o&&t.push({kind:_.OBJECT_FIELD,name:{kind:_.NAME,value:s.name},value:o})}return{kind:_.OBJECT,fields:t}}if(Pp(e)){const t=e.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:_.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return Qc.test(s)?{kind:_.INT,value:s}:{kind:_.FLOAT,value:s}}if(typeof t=="string")return Xe(e)?{kind:_.ENUM,value:t}:e===Wp&&Qc.test(t)?{kind:_.INT,value:t}:{kind:_.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${j(t)}.`)}Qe(!1,"Unexpected input type: "+j(e))}const Qc=/^-?(?:0|[1-9][0-9]*)$/,Mu=new pt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Mn,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new on(new ge(new on(Ye))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new on(Ye),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Ye,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Ye,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new on(new ge(new on(Qp))),resolve:r=>r.getDirectives()}})}),Qp=new pt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new on(Mn),resolve:r=>r.name},description:{type:Mn,resolve:r=>r.description},isRepeatable:{type:new on(Le),resolve:r=>r.isRepeatable},locations:{type:new on(new ge(new on(Jp))),resolve:r=>r.locations},args:{type:new on(new ge(new on(xs))),args:{includeDeprecated:{type:Le,defaultValue:!1}},resolve(r,{includeDeprecated:e}){return e?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),Jp=new wr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:q.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:q.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:q.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:q.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:q.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:q.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:q.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:q.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:q.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:q.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:q.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:q.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:q.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:q.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:q.UNION,description:"Location adjacent to a union definition."},ENUM:{value:q.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:q.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:q.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:q.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Ye=new pt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new on(Kp),resolve(r){if(zt(r))return vn.SCALAR;if(me(r))return vn.OBJECT;if(ae(r))return vn.INTERFACE;if(Je(r))return vn.UNION;if(Xe(r))return vn.ENUM;if(Ze(r))return vn.INPUT_OBJECT;if(cr(r))return vn.LIST;if(ue(r))return vn.NON_NULL;Qe(!1,`Unexpected type: "${j(r)}".`)}},name:{type:Mn,resolve:r=>"name"in r?r.name:void 0},description:{type:Mn,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:Mn,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new ge(new on(Xp)),args:{includeDeprecated:{type:Le,defaultValue:!1}},resolve(r,{includeDeprecated:e}){if(me(r)||ae(r)){const t=Object.values(r.getFields());return e?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new ge(new on(Ye)),resolve(r){if(me(r)||ae(r))return r.getInterfaces()}},possibleTypes:{type:new ge(new on(Ye)),resolve(r,e,t,{schema:s}){if(zI(r))return s.getPossibleTypes(r)}},enumValues:{type:new ge(new on(Zp)),args:{includeDeprecated:{type:Le,defaultValue:!1}},resolve(r,{includeDeprecated:e}){if(Xe(r)){const t=r.getValues();return e?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new ge(new on(xs)),args:{includeDeprecated:{type:Le,defaultValue:!1}},resolve(r,{includeDeprecated:e}){if(Ze(r)){const t=Object.values(r.getFields());return e?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Ye,resolve:r=>"ofType"in r?r.ofType:void 0}})}),Xp=new pt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new on(Mn),resolve:r=>r.name},description:{type:Mn,resolve:r=>r.description},args:{type:new on(new ge(new on(xs))),args:{includeDeprecated:{type:Le,defaultValue:!1}},resolve(r,{includeDeprecated:e}){return e?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new on(Ye),resolve:r=>r.type},isDeprecated:{type:new on(Le),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Mn,resolve:r=>r.deprecationReason}})}),xs=new pt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new on(Mn),resolve:r=>r.name},description:{type:Mn,resolve:r=>r.description},type:{type:new on(Ye),resolve:r=>r.type},defaultValue:{type:Mn,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:e,defaultValue:t}=r,s=ii(t,e);return s?ct(s):null}},isDeprecated:{type:new on(Le),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Mn,resolve:r=>r.deprecationReason}})}),Zp=new pt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new on(Mn),resolve:r=>r.name},description:{type:Mn,resolve:r=>r.description},isDeprecated:{type:new on(Le),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Mn,resolve:r=>r.deprecationReason}})});var vn;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(vn||(vn={}));const Kp=new wr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:vn.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:vn.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:vn.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:vn.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:vn.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:vn.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:vn.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:vn.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new on(Mu);new on(Mn);new on(Mn);const Bs=Object.freeze([Mu,Qp,Jp,Ye,Xp,xs,Zp,Kp]);function av(r){return Bs.some(({name:e})=>r.name===e)}class nf{constructor(e){var t,s;this.__validationErrors=e.assumeValid===!0?[]:void 0,Nt(e)||pn(!1,"Must provide configuration object."),!e.types||Array.isArray(e.types)||pn(!1,`"types" must be Array if provided but got: ${j(e.types)}.`),!e.directives||Array.isArray(e.directives)||pn(!1,`"directives" must be Array if provided but got: ${j(e.directives)}.`),this.description=e.description,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=e.query,this._mutationType=e.mutation,this._subscriptionType=e.subscription,this._directives=(s=e.directives)!==null&&s!==void 0?s:kr;const o=new Set(e.types);if(e.types!=null)for(const a of e.types)o.delete(a),We(a,o);this._queryType!=null&&We(this._queryType,o),this._mutationType!=null&&We(this._mutationType,o),this._subscriptionType!=null&&We(this._subscriptionType,o);for(const a of this._directives)if(rv(a))for(const l of a.args)We(l.type,o);We(Mu,o),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const a of o){if(a==null)continue;const l=a.name;if(l||pn(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=a,ae(a)){for(const p of a.getInterfaces())if(ae(p)){let d=this._implementationsMap[p.name];d===void 0&&(d=this._implementationsMap[p.name]={objects:[],interfaces:[]}),d.interfaces.push(a)}}else if(me(a)){for(const p of a.getInterfaces())if(ae(p)){let d=this._implementationsMap[p.name];d===void 0&&(d=this._implementationsMap[p.name]={objects:[],interfaces:[]}),d.objects.push(a)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(e){switch(e){case Be.QUERY:return this.getQueryType();case Be.MUTATION:return this.getMutationType();case Be.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(e){return this.getTypeMap()[e]}getPossibleTypes(e){return Je(e)?e.getTypes():this.getImplementations(e).objects}getImplementations(e){const t=this._implementationsMap[e.name];return t??{objects:[],interfaces:[]}}isSubType(e,t){let s=this._subTypeMap[e.name];if(s===void 0){if(s=Object.create(null),Je(e))for(const o of e.getTypes())s[o.name]=!0;else{const o=this.getImplementations(e);for(const a of o.objects)s[a.name]=!0;for(const a of o.interfaces)s[a.name]=!0}this._subTypeMap[e.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(e){return this.getDirectives().find(t=>t.name===e)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function We(r,e){const t=QI(r);if(!e.has(t)){if(e.add(t),Je(t))for(const s of t.getTypes())We(s,e);else if(me(t)||ae(t)){for(const s of t.getInterfaces())We(s,e);for(const s of Object.values(t.getFields())){We(s.type,e);for(const o of s.args)We(o.type,e)}}else if(Ze(t))for(const s of Object.values(t.getFields()))We(s.type,e)}return e}function lv(r){return r.kind===_.SCHEMA_DEFINITION||gi(r)||r.kind===_.DIRECTIVE_DEFINITION}function gi(r){return r.kind===_.SCALAR_TYPE_DEFINITION||r.kind===_.OBJECT_TYPE_DEFINITION||r.kind===_.INTERFACE_TYPE_DEFINITION||r.kind===_.UNION_TYPE_DEFINITION||r.kind===_.ENUM_TYPE_DEFINITION||r.kind===_.INPUT_OBJECT_TYPE_DEFINITION}function cv(r){return r.kind===_.SCHEMA_EXTENSION||Vu(r)}function Vu(r){return r.kind===_.SCALAR_TYPE_EXTENSION||r.kind===_.OBJECT_TYPE_EXTENSION||r.kind===_.INTERFACE_TYPE_EXTENSION||r.kind===_.UNION_TYPE_EXTENSION||r.kind===_.ENUM_TYPE_EXTENSION||r.kind===_.INPUT_OBJECT_TYPE_EXTENSION}function pv(r){const e=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():kr;for(const l of s)e[l.name]=l.args.map(p=>p.name);const o=r.getDocument().definitions;for(const l of o)if(l.kind===_.DIRECTIVE_DEFINITION){var a;const p=(a=l.arguments)!==null&&a!==void 0?a:[];e[l.name.value]=p.map(d=>d.name.value)}return{Directive(l){const p=l.name.value,d=e[p];if(l.arguments&&d)for(const S of l.arguments){const y=S.name.value;if(!d.includes(y)){const I=ks(y,d);r.reportError(new H(`Unknown argument "${y}" on directive "@${p}".`+Rs(I),{nodes:S}))}}return!1}}}function fv(r){const e=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():kr;for(const a of s)e[a.name]=a.locations;const o=r.getDocument().definitions;for(const a of o)a.kind===_.DIRECTIVE_DEFINITION&&(e[a.name.value]=a.locations.map(l=>l.value));return{Directive(a,l,p,d,S){const y=a.name.value,I=e[y];if(!I){r.reportError(new H(`Unknown directive "@${y}".`,{nodes:a}));return}const C=dv(S);C&&!I.includes(C)&&r.reportError(new H(`Directive "@${y}" may not be used on ${C}.`,{nodes:a}))}}}function dv(r){const e=r[r.length-1];switch("kind"in e||Qe(!1),e.kind){case _.OPERATION_DEFINITION:return hv(e.operation);case _.FIELD:return q.FIELD;case _.FRAGMENT_SPREAD:return q.FRAGMENT_SPREAD;case _.INLINE_FRAGMENT:return q.INLINE_FRAGMENT;case _.FRAGMENT_DEFINITION:return q.FRAGMENT_DEFINITION;case _.VARIABLE_DEFINITION:return q.VARIABLE_DEFINITION;case _.SCHEMA_DEFINITION:case _.SCHEMA_EXTENSION:return q.SCHEMA;case _.SCALAR_TYPE_DEFINITION:case _.SCALAR_TYPE_EXTENSION:return q.SCALAR;case _.OBJECT_TYPE_DEFINITION:case _.OBJECT_TYPE_EXTENSION:return q.OBJECT;case _.FIELD_DEFINITION:return q.FIELD_DEFINITION;case _.INTERFACE_TYPE_DEFINITION:case _.INTERFACE_TYPE_EXTENSION:return q.INTERFACE;case _.UNION_TYPE_DEFINITION:case _.UNION_TYPE_EXTENSION:return q.UNION;case _.ENUM_TYPE_DEFINITION:case _.ENUM_TYPE_EXTENSION:return q.ENUM;case _.ENUM_VALUE_DEFINITION:return q.ENUM_VALUE;case _.INPUT_OBJECT_TYPE_DEFINITION:case _.INPUT_OBJECT_TYPE_EXTENSION:return q.INPUT_OBJECT;case _.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||Qe(!1),t.kind===_.INPUT_OBJECT_TYPE_DEFINITION?q.INPUT_FIELD_DEFINITION:q.ARGUMENT_DEFINITION}default:Qe(!1,"Unexpected kind: "+j(e.kind))}}function hv(r){switch(r){case Be.QUERY:return q.QUERY;case Be.MUTATION:return q.MUTATION;case Be.SUBSCRIPTION:return q.SUBSCRIPTION}}function gv(r){const e=r.getSchema(),t=e?e.getTypeMap():Object.create(null),s=Object.create(null);for(const a of r.getDocument().definitions)gi(a)&&(s[a.name.value]=!0);const o=[...Object.keys(t),...Object.keys(s)];return{NamedType(a,l,p,d,S){const y=a.name.value;if(!t[y]&&!s[y]){var I;const C=(I=S[2])!==null&&I!==void 0?I:p,R=C!=null&&mv(C);if(R&&Jc.includes(y))return;const x=ks(y,R?Jc.concat(o):o);r.reportError(new H(`Unknown type "${y}".`+Rs(x),{nodes:a}))}}}}const Jc=[...Os,...Bs].map(r=>r.name);function mv(r){return"kind"in r&&(lv(r)||cv(r))}function Sv(r){var e,t,s;const o=r.getSchema(),a=(e=(t=(s=o==null?void 0:o.astNode)!==null&&s!==void 0?s:o==null?void 0:o.getQueryType())!==null&&t!==void 0?t:o==null?void 0:o.getMutationType())!==null&&e!==void 0?e:o==null?void 0:o.getSubscriptionType();let l=0;return{SchemaDefinition(p){if(a){r.reportError(new H("Cannot define a new schema within a schema extension.",{nodes:p}));return}l>0&&r.reportError(new H("Must provide only one schema definition.",{nodes:p})),++l}}}function yv(r){const e=r.getSchema(),t=Object.create(null);for(const o of r.getDocument().definitions)gi(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(o){const a=o.name.value,l=t[a],p=e==null?void 0:e.getType(a);let d;if(l?d=Dv[l.kind]:p&&(d=Ev(p)),d){if(d!==o.kind){const S=Iv(o.kind);r.reportError(new H(`Cannot extend non-${S} type "${a}".`,{nodes:l?[l,o]:o}))}}else{const S=Object.keys({...t,...e==null?void 0:e.getTypeMap()}),y=ks(a,S);r.reportError(new H(`Cannot extend type "${a}" because it is not defined.`+Rs(y),{nodes:o.name}))}}}const Dv={[_.SCALAR_TYPE_DEFINITION]:_.SCALAR_TYPE_EXTENSION,[_.OBJECT_TYPE_DEFINITION]:_.OBJECT_TYPE_EXTENSION,[_.INTERFACE_TYPE_DEFINITION]:_.INTERFACE_TYPE_EXTENSION,[_.UNION_TYPE_DEFINITION]:_.UNION_TYPE_EXTENSION,[_.ENUM_TYPE_DEFINITION]:_.ENUM_TYPE_EXTENSION,[_.INPUT_OBJECT_TYPE_DEFINITION]:_.INPUT_OBJECT_TYPE_EXTENSION};function Ev(r){if(zt(r))return _.SCALAR_TYPE_EXTENSION;if(me(r))return _.OBJECT_TYPE_EXTENSION;if(ae(r))return _.INTERFACE_TYPE_EXTENSION;if(Je(r))return _.UNION_TYPE_EXTENSION;if(Xe(r))return _.ENUM_TYPE_EXTENSION;if(Ze(r))return _.INPUT_OBJECT_TYPE_EXTENSION;Qe(!1,"Unexpected type: "+j(r))}function Iv(r){switch(r){case _.SCALAR_TYPE_EXTENSION:return"scalar";case _.OBJECT_TYPE_EXTENSION:return"object";case _.INTERFACE_TYPE_EXTENSION:return"interface";case _.UNION_TYPE_EXTENSION:return"union";case _.ENUM_TYPE_EXTENSION:return"enum";case _.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Qe(!1,"Unexpected kind: "+j(r))}}function vv(r){var e;const t=Object.create(null),s=r.getSchema(),o=(e=s==null?void 0:s.getDirectives())!==null&&e!==void 0?e:kr;for(const p of o)t[p.name]=Nr(p.args.filter(JI),d=>d.name);const a=r.getDocument().definitions;for(const p of a)if(p.kind===_.DIRECTIVE_DEFINITION){var l;const d=(l=p.arguments)!==null&&l!==void 0?l:[];t[p.name.value]=Nr(d.filter(_v),S=>S.name.value)}return{Directive:{leave(p){const d=p.name.value,S=t[d];if(S){var y;const I=(y=p.arguments)!==null&&y!==void 0?y:[],C=new Set(I.map(R=>R.name.value));for(const[R,x]of Object.entries(S))if(!C.has(R)){const B=$u(x.type)?j(x.type):ct(x.type);r.reportError(new H(`Directive "@${d}" argument "${R}" of type "${B}" is required, but it was not provided.`,{nodes:p}))}}}}}}function _v(r){return r.type.kind===_.NON_NULL_TYPE&&r.defaultValue==null}function Gt(r,e,t){if(r){if(r.kind===_.VARIABLE){const s=r.name.value;if(t==null||t[s]===void 0)return;const o=t[s];return o===null&&ue(e)?void 0:o}if(ue(e))return r.kind===_.NULL?void 0:Gt(r,e.ofType,t);if(r.kind===_.NULL)return null;if(cr(e)){const s=e.ofType;if(r.kind===_.LIST){const a=[];for(const l of r.values)if(Xc(l,t)){if(ue(s))return;a.push(null)}else{const p=Gt(l,s,t);if(p===void 0)return;a.push(p)}return a}const o=Gt(r,s,t);return o===void 0?void 0:[o]}if(Ze(e)){if(r.kind!==_.OBJECT)return;const s=Object.create(null),o=Nr(r.fields,a=>a.name.value);for(const a of Object.values(e.getFields())){const l=o[a.name];if(!l||Xc(l.value,t)){if(a.defaultValue!==void 0)s[a.name]=a.defaultValue;else if(ue(a.type))return;continue}const p=Gt(l.value,a.type,t);if(p===void 0)return;s[a.name]=p}return s}if(Pp(e)){let s;try{s=e.parseLiteral(r,t)}catch{return}return s===void 0?void 0:s}Qe(!1,"Unexpected input type: "+j(e))}}function Xc(r,e){return r.kind===_.VARIABLE&&(e==null||e[r.name.value]===void 0)}function Tv(r,e,t){var s;const o={},a=(s=e.arguments)!==null&&s!==void 0?s:[],l=Nr(a,p=>p.name.value);for(const p of r.args){const d=p.name,S=p.type,y=l[d];if(!y){if(p.defaultValue!==void 0)o[d]=p.defaultValue;else if(ue(S))throw new H(`Argument "${d}" of required type "${j(S)}" was not provided.`,{nodes:e});continue}const I=y.value;let C=I.kind===_.NULL;if(I.kind===_.VARIABLE){const x=I.name.value;if(t==null||!Av(t,x)){if(p.defaultValue!==void 0)o[d]=p.defaultValue;else if(ue(S))throw new H(`Argument "${d}" of required type "${j(S)}" was provided the variable "$${x}" which was not provided a runtime value.`,{nodes:I});continue}C=t[x]==null}if(C&&ue(S))throw new H(`Argument "${d}" of non-null type "${j(S)}" must not be null.`,{nodes:I});const R=Gt(I,S,t);if(R===void 0)throw new H(`Argument "${d}" has invalid value ${ct(I)}.`,{nodes:I});o[d]=R}return o}function ef(r,e,t){var s;const o=(s=e.directives)===null||s===void 0?void 0:s.find(a=>a.name.value===r.name);if(o)return Tv(r,o,t)}function Av(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function tf(r,e){const t=new Map;for(const s of r){const o=e(s),a=t.get(o);a===void 0?t.set(o,[s]):a.push(s)}return t}function bv(r){return{DirectiveDefinition(s){var o;const a=(o=s.arguments)!==null&&o!==void 0?o:[];return t(`@${s.name.value}`,a)},InterfaceTypeDefinition:e,InterfaceTypeExtension:e,ObjectTypeDefinition:e,ObjectTypeExtension:e};function e(s){var o;const a=s.name.value,l=(o=s.fields)!==null&&o!==void 0?o:[];for(const d of l){var p;const S=d.name.value,y=(p=d.arguments)!==null&&p!==void 0?p:[];t(`${a}.${S}`,y)}return!1}function t(s,o){const a=tf(o,l=>l.name.value);for(const[l,p]of a)p.length>1&&r.reportError(new H(`Argument "${s}(${l}:)" can only be defined once.`,{nodes:p.map(d=>d.name)}));return!1}}function Fv(r){return{Field:e,Directive:e};function e(t){var s;const o=(s=t.arguments)!==null&&s!==void 0?s:[],a=tf(o,l=>l.name.value);for(const[l,p]of a)p.length>1&&r.reportError(new H(`There can be only one argument named "${l}".`,{nodes:p.map(d=>d.name)}))}}function Cv(r){const e=Object.create(null),t=r.getSchema();return{DirectiveDefinition(s){const o=s.name.value;if(t!=null&&t.getDirective(o)){r.reportError(new H(`Directive "@${o}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return e[o]?r.reportError(new H(`There can be only one directive named "@${o}".`,{nodes:[e[o],s.name]})):e[o]=s.name,!1}}}function Nv(r){const e=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():kr;for(const p of s)e[p.name]=!p.isRepeatable;const o=r.getDocument().definitions;for(const p of o)p.kind===_.DIRECTIVE_DEFINITION&&(e[p.name.value]=!p.repeatable);const a=Object.create(null),l=Object.create(null);return{enter(p){if(!("directives"in p)||!p.directives)return;let d;if(p.kind===_.SCHEMA_DEFINITION||p.kind===_.SCHEMA_EXTENSION)d=a;else if(gi(p)||Vu(p)){const S=p.name.value;d=l[S],d===void 0&&(l[S]=d=Object.create(null))}else d=Object.create(null);for(const S of p.directives){const y=S.name.value;e[y]&&(d[y]?r.reportError(new H(`The directive "@${y}" can only be used once at this location.`,{nodes:[d[y],S]})):d[y]=S)}}}}function wv(r){const e=r.getSchema(),t=e?e.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:o,EnumTypeExtension:o};function o(a){var l;const p=a.name.value;s[p]||(s[p]=Object.create(null));const d=(l=a.values)!==null&&l!==void 0?l:[],S=s[p];for(const y of d){const I=y.name.value,C=t[p];Xe(C)&&C.getValue(I)?r.reportError(new H(`Enum value "${p}.${I}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):S[I]?r.reportError(new H(`Enum value "${p}.${I}" can only be defined once.`,{nodes:[S[I],y.name]})):S[I]=y.name}return!1}}function Rv(r){const e=r.getSchema(),t=e?e.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:o,InputObjectTypeExtension:o,InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(a){var l;const p=a.name.value;s[p]||(s[p]=Object.create(null));const d=(l=a.fields)!==null&&l!==void 0?l:[],S=s[p];for(const y of d){const I=y.name.value;kv(t[p],I)?r.reportError(new H(`Field "${p}.${I}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):S[I]?r.reportError(new H(`Field "${p}.${I}" can only be defined once.`,{nodes:[S[I],y.name]})):S[I]=y.name}return!1}}function kv(r,e){return me(r)||ae(r)||Ze(r)?r.getFields()[e]!=null:!1}function Ov(r){const e=[];let t=Object.create(null);return{ObjectValue:{enter(){e.push(t),t=Object.create(null)},leave(){const s=e.pop();s||Qe(!1),t=s}},ObjectField(s){const o=s.name.value;t[o]?r.reportError(new H(`There can be only one input field named "${o}".`,{nodes:[t[o],s.name]})):t[o]=s.name}}}function xv(r){const e=r.getSchema(),t=Object.create(null),s=e?{query:e.getQueryType(),mutation:e.getMutationType(),subscription:e.getSubscriptionType()}:{};return{SchemaDefinition:o,SchemaExtension:o};function o(a){var l;const p=(l=a.operationTypes)!==null&&l!==void 0?l:[];for(const d of p){const S=d.operation,y=t[S];s[S]?r.reportError(new H(`Type for ${S} already defined in the schema. It cannot be redefined.`,{nodes:d})):y?r.reportError(new H(`There can be only one ${S} type in schema.`,{nodes:[y,d]})):t[S]=d}return!1}}function Bv(r){const e=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(o){const a=o.name.value;if(t!=null&&t.getType(a)){r.reportError(new H(`Type "${a}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:o.name}));return}return e[a]?r.reportError(new H(`There can be only one type named "${a}".`,{nodes:[e[a],o.name]})):e[a]=o.name,!1}}const Lv=Object.freeze([Sv,xv,Bv,wv,Rv,bv,Cv,gv,fv,Nv,yv,pv,Fv,Ov,vv]);class Pv{constructor(e,t){this._ast=e,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(e){this._onError(e)}getDocument(){return this._ast}getFragment(e){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===_.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[e]}getFragmentSpreads(e){let t=this._fragmentSpreads.get(e);if(!t){t=[];const s=[e];let o;for(;o=s.pop();)for(const a of o.selections)a.kind===_.FRAGMENT_SPREAD?t.push(a):a.selectionSet&&s.push(a.selectionSet);this._fragmentSpreads.set(e,t)}return t}getRecursivelyReferencedFragments(e){let t=this._recursivelyReferencedFragments.get(e);if(!t){t=[];const s=Object.create(null),o=[e.selectionSet];let a;for(;a=o.pop();)for(const l of this.getFragmentSpreads(a)){const p=l.name.value;if(s[p]!==!0){s[p]=!0;const d=this.getFragment(p);d&&(t.push(d),o.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(e,t)}return t}}class $v extends Pv{constructor(e,t,s){super(e,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function Uv(r,e,t=Lv){const s=[],o=new $v(r,e,l=>{s.push(l)}),a=t.map(l=>l(o));return Op(r,VI(a)),s}function Mv(r){const e=Uv(r);if(e.length!==0)throw new Error(e.map(t=>t.message).join(`

`))}function Vv(r,e){Nt(r)&&Nt(r.__schema)||pn(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${j(r)}.`);const t=r.__schema,s=sr(t.types,k=>k.name,k=>C(k));for(const k of[...Os,...Bs])s[k.name]&&(s[k.name]=k);const o=t.queryType?y(t.queryType):null,a=t.mutationType?y(t.mutationType):null,l=t.subscriptionType?y(t.subscriptionType):null,p=t.directives?t.directives.map(dt):[];return new nf({description:t.description,query:o,mutation:a,subscription:l,types:Object.values(s),directives:p,assumeValid:e==null?void 0:e.assumeValid});function d(k){if(k.kind===vn.LIST){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new ge(d(X))}if(k.kind===vn.NON_NULL){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const re=d(X);return new on(YI(re))}return S(k)}function S(k){const X=k.name;if(!X)throw new Error(`Unknown type reference: ${j(k)}.`);const re=s[X];if(!re)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return re}function y(k){return qI(S(k))}function I(k){return WI(S(k))}function C(k){if(k!=null&&k.name!=null&&k.kind!=null)switch(k.kind){case vn.SCALAR:return R(k);case vn.OBJECT:return B(k);case vn.INTERFACE:return Q(k);case vn.UNION:return dn(k);case vn.ENUM:return Vn(k);case vn.INPUT_OBJECT:return _n(k)}const X=j(k);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function R(k){return new wt({name:k.name,description:k.description,specifiedByURL:k.specifiedByURL})}function x(k){if(k.interfaces===null&&k.kind===vn.INTERFACE)return[];if(!k.interfaces){const X=j(k);throw new Error(`Introspection result missing interfaces: ${X}.`)}return k.interfaces.map(I)}function B(k){return new pt({name:k.name,description:k.description,interfaces:()=>x(k),fields:()=>Nn(k)})}function Q(k){return new vs({name:k.name,description:k.description,interfaces:()=>x(k),fields:()=>Nn(k)})}function dn(k){if(!k.possibleTypes){const X=j(k);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new _s({name:k.name,description:k.description,types:()=>k.possibleTypes.map(y)})}function Vn(k){if(!k.enumValues){const X=j(k);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new wr({name:k.name,description:k.description,values:sr(k.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function _n(k){if(!k.inputFields){const X=j(k);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new Ts({name:k.name,description:k.description,fields:()=>te(k.inputFields)})}function Nn(k){if(!k.fields)throw new Error(`Introspection result missing fields: ${j(k)}.`);return sr(k.fields,X=>X.name,On)}function On(k){const X=d(k.type);if(!Lp(X)){const re=j(X);throw new Error(`Introspection must provide output type for fields, but received: ${re}.`)}if(!k.args){const re=j(k);throw new Error(`Introspection result missing field args: ${re}.`)}return{description:k.description,deprecationReason:k.deprecationReason,type:X,args:te(k.args)}}function te(k){return sr(k,X=>X.name,Xn)}function Xn(k){const X=d(k.type);if(!Bp(X)){const Rt=j(X);throw new Error(`Introspection must provide input type for arguments, but received: ${Rt}.`)}const re=k.defaultValue!=null?Gt(kI(k.defaultValue),X):void 0;return{description:k.description,type:X,defaultValue:re,deprecationReason:k.deprecationReason}}function dt(k){if(!k.args){const X=j(k);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!k.locations){const X=j(k);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new Wt({name:k.name,description:k.description,isRepeatable:k.isRepeatable,locations:k.locations.slice(),args:te(k.args)})}}function Gv(r,e,t){var s,o,a,l;const p=[],d=Object.create(null),S=[];let y;const I=[];for(const b of e.definitions)if(b.kind===_.SCHEMA_DEFINITION)y=b;else if(b.kind===_.SCHEMA_EXTENSION)I.push(b);else if(gi(b))p.push(b);else if(Vu(b)){const M=b.name.value,P=d[M];d[M]=P?P.concat([b]):[b]}else b.kind===_.DIRECTIVE_DEFINITION&&S.push(b);if(Object.keys(d).length===0&&p.length===0&&S.length===0&&I.length===0&&y==null)return r;const C=Object.create(null);for(const b of r.types)C[b.name]=Vn(b);for(const b of p){var R;const M=b.name.value;C[M]=(R=Zc[M])!==null&&R!==void 0?R:Ae(b)}const x={query:r.query&&Q(r.query),mutation:r.mutation&&Q(r.mutation),subscription:r.subscription&&Q(r.subscription),...y&&re([y]),...re(I)};return{description:(s=y)===null||s===void 0||(o=s.description)===null||o===void 0?void 0:o.value,...x,types:Object.values(C),directives:[...r.directives.map(dn),...S.map(mi)],extensions:Object.create(null),astNode:(a=y)!==null&&a!==void 0?a:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(I),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function B(b){return cr(b)?new ge(B(b.ofType)):ue(b)?new on(B(b.ofType)):Q(b)}function Q(b){return C[b.name]}function dn(b){const M=b.toConfig();return new Wt({...M,args:Tt(M.args,X)})}function Vn(b){if(av(b)||tv(b))return b;if(zt(b))return On(b);if(me(b))return te(b);if(ae(b))return Xn(b);if(Je(b))return dt(b);if(Xe(b))return Nn(b);if(Ze(b))return _n(b);Qe(!1,"Unexpected type: "+j(b))}function _n(b){var M;const P=b.toConfig(),$=(M=d[P.name])!==null&&M!==void 0?M:[];return new Ts({...P,fields:()=>({...Tt(P.fields,hn=>({...hn,type:B(hn.type)})),...it($)}),extensionASTNodes:P.extensionASTNodes.concat($)})}function Nn(b){var M;const P=b.toConfig(),$=(M=d[b.name])!==null&&M!==void 0?M:[];return new wr({...P,values:{...P.values,...$e($)},extensionASTNodes:P.extensionASTNodes.concat($)})}function On(b){var M;const P=b.toConfig(),$=(M=d[P.name])!==null&&M!==void 0?M:[];let hn=P.specifiedByURL;for(const gn of $){var Pn;hn=(Pn=Kc(gn))!==null&&Pn!==void 0?Pn:hn}return new wt({...P,specifiedByURL:hn,extensionASTNodes:P.extensionASTNodes.concat($)})}function te(b){var M;const P=b.toConfig(),$=(M=d[P.name])!==null&&M!==void 0?M:[];return new pt({...P,interfaces:()=>[...b.getInterfaces().map(Q),...fr($)],fields:()=>({...Tt(P.fields,k),...pr($)}),extensionASTNodes:P.extensionASTNodes.concat($)})}function Xn(b){var M;const P=b.toConfig(),$=(M=d[P.name])!==null&&M!==void 0?M:[];return new vs({...P,interfaces:()=>[...b.getInterfaces().map(Q),...fr($)],fields:()=>({...Tt(P.fields,k),...pr($)}),extensionASTNodes:P.extensionASTNodes.concat($)})}function dt(b){var M;const P=b.toConfig(),$=(M=d[P.name])!==null&&M!==void 0?M:[];return new _s({...P,types:()=>[...b.getTypes().map(Q),...Qt($)],extensionASTNodes:P.extensionASTNodes.concat($)})}function k(b){return{...b,type:B(b.type),args:b.args&&Tt(b.args,X)}}function X(b){return{...b,type:B(b.type)}}function re(b){const M={};for(const $ of b){var P;const hn=(P=$.operationTypes)!==null&&P!==void 0?P:[];for(const Pn of hn)M[Pn.operation]=Rt(Pn.type)}return M}function Rt(b){var M;const P=b.name.value,$=(M=Zc[P])!==null&&M!==void 0?M:C[P];if($===void 0)throw new Error(`Unknown type: "${P}".`);return $}function Yt(b){return b.kind===_.LIST_TYPE?new ge(Yt(b.type)):b.kind===_.NON_NULL_TYPE?new on(Yt(b.type)):Rt(b)}function mi(b){var M;return new Wt({name:b.name.value,description:(M=b.description)===null||M===void 0?void 0:M.value,locations:b.locations.map(({value:P})=>P),isRepeatable:b.repeatable,args:Si(b.arguments),astNode:b})}function pr(b){const M=Object.create(null);for(const hn of b){var P;const Pn=(P=hn.fields)!==null&&P!==void 0?P:[];for(const gn of Pn){var $;M[gn.name.value]={type:Yt(gn.type),description:($=gn.description)===null||$===void 0?void 0:$.value,args:Si(gn.arguments),deprecationReason:gs(gn),astNode:gn}}}return M}function Si(b){const M=b??[],P=Object.create(null);for(const hn of M){var $;const Pn=Yt(hn.type);P[hn.name.value]={type:Pn,description:($=hn.description)===null||$===void 0?void 0:$.value,defaultValue:Gt(hn.defaultValue,Pn),deprecationReason:gs(hn),astNode:hn}}return P}function it(b){const M=Object.create(null);for(const hn of b){var P;const Pn=(P=hn.fields)!==null&&P!==void 0?P:[];for(const gn of Pn){var $;const be=Yt(gn.type);M[gn.name.value]={type:be,description:($=gn.description)===null||$===void 0?void 0:$.value,defaultValue:Gt(gn.defaultValue,be),deprecationReason:gs(gn),astNode:gn}}}return M}function $e(b){const M=Object.create(null);for(const hn of b){var P;const Pn=(P=hn.values)!==null&&P!==void 0?P:[];for(const gn of Pn){var $;M[gn.name.value]={description:($=gn.description)===null||$===void 0?void 0:$.value,deprecationReason:gs(gn),astNode:gn}}}return M}function fr(b){return b.flatMap(M=>{var P,$;return(P=($=M.interfaces)===null||$===void 0?void 0:$.map(Rt))!==null&&P!==void 0?P:[]})}function Qt(b){return b.flatMap(M=>{var P,$;return(P=($=M.types)===null||$===void 0?void 0:$.map(Rt))!==null&&P!==void 0?P:[]})}function Ae(b){var M;const P=b.name.value,$=(M=d[P])!==null&&M!==void 0?M:[];switch(b.kind){case _.OBJECT_TYPE_DEFINITION:{var hn;const Zn=[b,...$];return new pt({name:P,description:(hn=b.description)===null||hn===void 0?void 0:hn.value,interfaces:()=>fr(Zn),fields:()=>pr(Zn),astNode:b,extensionASTNodes:$})}case _.INTERFACE_TYPE_DEFINITION:{var Pn;const Zn=[b,...$];return new vs({name:P,description:(Pn=b.description)===null||Pn===void 0?void 0:Pn.value,interfaces:()=>fr(Zn),fields:()=>pr(Zn),astNode:b,extensionASTNodes:$})}case _.ENUM_TYPE_DEFINITION:{var gn;const Zn=[b,...$];return new wr({name:P,description:(gn=b.description)===null||gn===void 0?void 0:gn.value,values:$e(Zn),astNode:b,extensionASTNodes:$})}case _.UNION_TYPE_DEFINITION:{var be;const Zn=[b,...$];return new _s({name:P,description:(be=b.description)===null||be===void 0?void 0:be.value,types:()=>Qt(Zn),astNode:b,extensionASTNodes:$})}case _.SCALAR_TYPE_DEFINITION:{var Or;return new wt({name:P,description:(Or=b.description)===null||Or===void 0?void 0:Or.value,specifiedByURL:Kc(b),astNode:b,extensionASTNodes:$})}case _.INPUT_OBJECT_TYPE_DEFINITION:{var kt;const Zn=[b,...$];return new Ts({name:P,description:(kt=b.description)===null||kt===void 0?void 0:kt.value,fields:()=>it(Zn),astNode:b,extensionASTNodes:$})}}}}const Zc=Nr([...Os,...Bs],r=>r.name);function gs(r){const e=ef(zp,r);return e==null?void 0:e.reason}function Kc(r){const e=ef(Yp,r);return e==null?void 0:e.url}function Hv(r,e){r!=null&&r.kind===_.DOCUMENT||pn(!1,"Must provide valid Document AST."),(e==null?void 0:e.assumeValid)!==!0&&(e==null?void 0:e.assumeValidSDL)!==!0&&Mv(r);const s=Gv({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,e);if(s.astNode==null)for(const a of s.types)switch(a.name){case"Query":s.query=a;break;case"Mutation":s.mutation=a;break;case"Subscription":s.subscription=a;break}const o=[...s.directives,...kr.filter(a=>s.directives.every(l=>l.name!==a.name))];return new nf({...s,directives:o})}function jv(r,e){const t=RI(r,{noLocation:e==null?void 0:e.noLocation,allowLegacyFragmentVariables:e==null?void 0:e.allowLegacyFragmentVariables});return Hv(t,{assumeValidSDL:e==null?void 0:e.assumeValidSDL,assumeValid:e==null?void 0:e.assumeValid})}const np=`
input AccountAddressInput {
  mailingAddress: AddressInput
  permanentAddress: AddressInput
}


input AccountBankInput {
  foreignBank: [BankInput]
  localBank: [BankInput]
}


type AccountBankResponse {
  foreignBank: [BankResponse]
  localBank: [BankResponse]
}


input AccountContactDetailsInput {
  contactNumber: [AccountPhoneInput]
  emailAddress: String
}


input AccountCrsInput {
  taxResident: String
  tin: [TinInfoInput]
}


input AccountDeclarationInput {
  crs: AccountCrsInput
  fatca: AccountFatcaInput
  fea: AccountFeaInput
}


input AccountEmploymentDetailsInput {
  address: SubAddressInput
  businessNature: String
  city: String
  country: String
  employerName: String
  occupation: String
  postCode: String
  state: String
}


input AccountEmploymentDetailsJointInput {
  address: SubAddressInput
  businessNature: String
  city: String
  country: String
  employerName: String
  grossIncome: String
  occupation: String
  postCode: String
  state: String
}


input AccountEpfDetailsInput {
  epfAccountType: String
  epfMemberNumber: String
}


input AccountFatcaInput {
  certificate: FileBase64Input
  confirmAddress: String
  formW8Ben: String
  formW9: String
  noCertificate: String
  reason: String
  usBorn: String
  usCitizen: String
}


input AccountFeaInput {
  balance: String
  borrowingFacility: String
  resident: String
}


type AccountHolding {
  currency: String
  currentValue: String
  floatingUnits: String
  fundId: Int
  fundName: String
  investmentAmount: String
  navUnits: String
  newSales: Boolean
  pl: String
  plPercentage: String
  redeemableFund: Boolean
  switchOut: Boolean
  topUpSales: Boolean
  units: String
}


input AccountInput {
  addressInformation: AccountAddressInput
  bankSummary: AccountBankInput
  clientId: String
  contactDetails: AccountContactDetailsInput
  declaration: AccountDeclarationInput
  employmentDetails: AccountEmploymentDetailsInput
  epfDetails: AccountEpfDetailsInput
  isEtb: Boolean
  personalDetails: PDetailInfoInput
}


input AccountInputTransactions {
  bankSummary: AccountBankInput
}


type AccountInvestmentDetails {
  distributionInstruction: String
  fundClass: String
  fundCode: String
  fundCurrency: String
  fundId: String
  fundIssuer: String
  fundName: String
  fundType: String
  fundingOption: String
  investmentAmount: String
  isEpf: Boolean
  isFea: Boolean
  isScheduled: Boolean
  isSyariah: Boolean
  isTopup: Boolean
  landingFund: String
  salesCharge: String
  scheduledInvestmentAmount: String
  scheduledSalesCharge: String
}


type AccountInvestmentDetailsRedemption {
  availableUnits: String
  currency: String
  distributionInstruction: String
  exitFee: String
  fundAbbr: String
  fundCategory: String
  fundClass: String
  fundCode: String
  fundCurrency: String
  fundId: String
  fundIssuer: String
  fundName: String
  fundProcessingGroup: String
  fundType: String
  fundingOption: String
  isEpf: String
  isSyariah: String
  redeemAmount: String
  units: String
}


type AccountInvestmentDetailsSwitching {
  availableUnits: String
  distributionInstruction: String
  fundCategory: String
  fundClass: String
  fundCurrency: String
  fundType: String
  fundingOption: String
  isEpf: String
  switchInDetails: [SwitchInResponse]
  switchOutFundAbbr: String
  switchOutFundCode: String
  switchOutFundId: String
  switchOutFundIssuer: String
  switchOutFundName: String
  switchOutFundProcessingGroup: String
  switchOutIsSyariah: String
  switchOutUnits: String
}


type AccountInvestmentRes {
  grandTotal: [OrderAmountCurrency]
  grandTotalRecurring: OrderAmountCurrency
  orders: [AccountOrder]
}


input AccountJointInput {
  addressInformation: AccountAddressInput
  clientId: String
  contactDetails: AccountContactDetailsInput
  declaration: AccountDeclarationInput
  employmentDetails: AccountEmploymentDetailsJointInput
  isEtb: Boolean
  personalDetails: PDetailInfoInput
}


type AccountOrder {
  allowedRecurringType: [String]
  investments: [AccountInvestmentDetails]
  orderDate: String
  orderNumber: String
  orderTotalAmount: [OrderAmountCurrency]
  paymentType: String
}


type AccountOrderRedemption {
  grandTotalAmount: [OrderAmountCurrencyForRedemption]
  grandTotalUnits: String
  investments: [AccountInvestmentDetailsRedemption]
  orderDate: String
  orderNumber: String
}


type AccountOrderSwitching {
  grandTotal: String
  investments: [AccountInvestmentDetailsSwitching]
  orderDate: String
  orderNumber: String
}


input AccountPhoneInput {
  code: String
  label: String
  value: String
}


type AccountSummary {
  accountNumber: [String]
  accountType: String
  advisorCode: String
  advisorName: String
  bdmName: String
  distributionInstruction: String
  fundType: String
  fundingOption: String
  operatingMode: String
  registrationDate: String
  status: String
}


type AccountsData {
  accountNumber: String
  accountType: String
  date: String
  name: String
}


type Activate {
  data: CommonResult
  error: Error
}


input ActivateInput {
  username: String
  verifyCode: String
}


type Address {
  address: String
  city: String
  country: String
  postCode: String
  state: String
}


type AddressDetails {
  address: SubAddress
  city: String
  country: String
  postCode: String
  state: String
}


type AddressInformation {
  mailingAddress: AddressDetails
  permanentAddress: AddressDetails
}


input AddressInput {
  address: SubAddressInput
  city: String
  country: String
  postCode: String
  state: String
}


type AgentDashboard {
  data: AgentDashboardResult
  error: Error
}


type AgentDashboardResponse {
  approvedCount: Int
  filters: AgentFilters
  incompleteCount: Int
  orders: [TXDetailsV2]
  page: Int
  pages: Int
  pendingCount: Int
  rejectedCount: Int
  rerouteCount: Int
  submittedCount: Int
  totalResultCount: Int
}


type AgentDashboardResult {
  result: AgentDashboardResponse
}


type AgentDetails {
  address: Address
  agency: String
  agentCode: String
  agentId: String
  agentName: String
  bdmEmail: String
  bdmName: String
  branchName: String
  channel: String
  email: String
  licenseCode: String
  mobileNo: String
  nric: String
  omniEnabled: String
  rank: String
  region: String
  status: String
}


type AgentFilters {
  accountType: [String]
  agentStatus: [String]
  transactionType: [String]
}


type AgentLogin {
  data: JWTResult
  error: Error
}


type AgentProfile {
  data: AgentProfileResult
  error: Error
}


type AgentProfileResult {
  result: AgentDetails
}


type AgentRegistration {
  data: CommonResult
  error: Error
}


type AmlaRemark {
  remark: String
  title: String
}


type AmlaTitle {
  status: String
  time: String
  user: String
}


input Assessment {
  questionEight: Int
  questionFive: Int
  questionFour: Int
  questionNine: Int
  questionSeven: Int
  questionSix: Int
  questionThree: Int
  questionTwo: Int
}


type BankDetails {
  bankAccountName: String
  bankAccountNumber: String
  bankLocation: String
  bankName: String
  bankSwiftCode: String
  currency: [String]
  id: Int
}


type BankInfoDto {
  bankAccountName: String
  bankAccountNumber: String
  bankLocation: String
  bankName: String
  bankSwiftCode: String
  bankType: String
  currency: [String]
  id: Int
  isCombined: Boolean
  utaId: String
}


input BankInfoDtoInput {
  bankAccountName: String
  bankAccountNumber: String
  bankLocation: String
  bankName: String
  bankSwiftCode: String
  bankType: String
  currency: [String]
  id: Int
  isCombined: Boolean
  utaId: String
}


type BankInfoDtoResult {
  data: BankInfoResult
  error: Error
}


input BankInfoInput {
  accountNo: String
  foreignBank: [BankInfoDtoInput]
  localBank: [BankInfoDtoInput]
}


type BankInfoResponse {
  foreignBank: [BankInfoDto]
  localBank: [BankInfoDto]
}


type BankInfoResult {
  result: BankInfoResponse
}


input BankInput {
  bankAccountName: String
  bankAccountNumber: String
  bankLocation: String
  bankName: String
  bankSwiftCode: String
  currency: [String]
  isNewBank: Boolean
}


type BankResponse {
  bankAccountName: String
  bankAccountNumber: String
  bankLocation: String
  bankName: String
  bankSwiftCode: String
  currency: [String]
  isNewBank: Boolean
}


type BankTypes {
  foreignBank: [BankDetails]
  localBank: [BankDetails]
}


type BranchOption {
  branchId: Int
  name: String
}


type Case {
  accountNo: String
  caseId: String
  caseNo: String
  clientId: String
  clientName: String
  closeDate: String
  createdOn: String
  daysRemaining: String
  isSeen: Boolean
  lastUpdated: String
  remark: [Reasons]
  status: String
  targetDate: String
}


input CaseResponseInput {
  caseId: String
  isReroute: String
}


type CaseResponseMain {
  client: EddClient
  response: [CaseResponseRes]
}


type CaseResponseOutput {
  data: CaseResponseResult
  error: Error
}


type CaseResponseRes {
  agent: AmlaTitle
  amla: AmlaTitle
  amlaRemark: String
  client: EddClient
  count: Int
  data: [EddData]
  questions: [EddDataQuestion]
}


type CaseResponseResult {
  result: CaseResponseMain
}


type CaseV2 {
  accountNo: String
  caseId: String
  caseNo: String
  clientId: String
  clientName: String
  closeDate: String
  createdOn: String
  daysRemaining: String
  isSeen: Boolean
  label: String
  lastUpdated: String
  remark: [Reasons]
  rerouteReason: [AmlaRemark]
  status: String
  targetDate: String
}


type CashEpf {
  cash: CashEpfResult
  epf: CashEpfResult
}


type CashEpfResult {
  max: String
  maximum: String
  min: String
  minimum: String
}


type ChangePassword {
  data: CommonResult
  error: Error
}


input ChangePasswordInput {
  confirmPassword: String
  password: String
}


input ChangePasswordInputV2 {
  confirmPassword: String
  currentPassword: String
  password: String
}


input CheckPasswordInput {
  password: String
}


input ClienInfoInput {
  contactDetails: AccountContactDetailsInput
  declaration: AccountDeclarationInput
}


type ClientDetails {
  bumiputera: String
  countryOfBirth: String
  dateOfBirth: String
  educationLevel: String
  expirationDate: String
  gender: String
  maritalStatus: String
  monthlyHouseholdIncome: String
  mothersMaidenName: String
  nationality: String
  placeOfBirth: String
  race: String
  relationship: String
  riskProfile: String
  salutation: String
}


type ClientProfile {
  addressInformation: AddressInformation
  bankInformation: BankTypes
  clientId: String
  contactDetails: ContactDetails
  declaration: DeclarationList
  employmentInformation: EmploymentDetails
  epfDetails: EpfDetails
  idNumber: String
  idType: String
  isEtb: Boolean
  name: String
  personalDetails: ClientDetails
  uploadedDocument: [FileBase64]
}


type ClientProfileOutput {
  data: ClientProfileResult
  error: Error
}


type ClientProfileRes {
  profile: EddClientProfile
}


type ClientProfileResult {
  result: ClientProfileRes
}


type ClientRegisterHolderInfo {
  clientId: String
  dateOfBirth: String
  id: String
  idType: String
  name: String
}


input ClientRegisterHolderInput {
  dateOfBirth: String
  id: String
  idType: String
  name: String
}


input ClientRegisterInput {
  accountNo: String
  accountType: String
  isEtb: Boolean
  isEtbTransactions: Boolean
  jointHolder: ClientRegisterHolderInput
  principalHolder: ClientRegisterHolderInput
}


type ClientRegisterOutput {
  data: ClientRegisterResponse
  error: Error
}


type ClientRegisterResponse {
  result: ClientRegisterResult
}


type ClientRegisterResult {
  initId: Int
  jointHolder: ClientRegisterHolderInfo
  message: String
  principalHolder: ClientRegisterHolderInfo
  riskInfo: ClientRisk
}


type ClientRisk {
  appetite: String
  expectedRange: String
  hnwStatus: String
  profile: String
  type: String
}


input CommonEmail {
  email: String
}


input CommonOtpInput {
  code: Int
  email: String
}


type CommonOutput {
  data: CommonResult
  error: Error
}


type CommonResponse {
  message: String
  status: Boolean
}


type CommonResult {
  result: CommonResponse
}


type ContactDetails {
  email: String
  faxNumber: String
  homeNumber: String
  mobileNumber: String
  officeNumber: String
}


type CrsDeclaration {
  taxResident: String
  tin: [TinInfo]
}


input CtaSummary {
  ctaNumber: String
  name: String
}


type CtaSummaryResponse {
  ctaNumber: String
  name: String
}


input CustomResultInput {
  column: String
  value: String
}


type Dashboard {
  data: DashboardResponse
  error: Error
}


input DashboardInput {
  filter: [CustomResultInput]
  hardcopyFilter: Boolean
  isTermsAgreed: Boolean
  page: String
  search: String
  sort: [CustomResultInput]
  tab: String
}


type DashboardOrderDetails {
  accountType: String
  canProceed: Boolean
  clientId: String
  createdOn: String
  dueDate: String
  investorName: InvestorNamesDashboard
  isScheduled: Boolean
  jointId: String
  lastUpdated: String
  orderNumber: String
  remark: [Reasons]
  status: String
  totalInvestment: [OrderAmountCurrency]
  transactionType: String
  withHardcopy: Boolean
}


type DashboardReason {
  content: [String]
  documents: [DocumentsToSubmit]
  isSubmitted: Boolean
  title: String
}


type DashboardResponse {
  result: DashboardResult
}


type DashboardResult {
  approvedCount: Int
  orders: [DashboardOrderDetails]
  page: Int
  pages: Int
  pendingCount: Int
  rejectedCount: Int
  totalResultCount: Int
}


type DdaFpxInfo {
  bankAccountName: String
  bankAccountNumber: String
  frequency: String
  recurringBank: String
}


type DeclarationList {
  crs: CrsDeclaration
  fatca: FatcaDeclaration
  fea: FeaDeclaration
}


type DocRemark {
  remarks: [String]
  title: String
}


type DocSummaryMessage {
  docList: [HardcopyDoc]
  orderNumber: String
  remarks: [String]
  status: String
  txRef: String
}


type DocSummaryMessageSoftCopy {
  docList: [SoftCopyDoc]
  orderNumber: String
  remarks: [String]
  status: String
  txRef: String
}


type DocumentList {
  documents: [DocumentMetadata]
  mainHeader: String
  subHeader: String
}


type DocumentMetadata {
  label: String
  name: String
  title: String
  type: String
  url: String
}


type DocumentResponse {
  base64: String
  name: String
}


type DocumentResult {
  result: [DocumentResponse]
}


type DocumentS3Response {
  name: String
  url: String
}


type DocumentSummary {
  accountType: String
  hardcopy: HardcopyDetails
  softcopy: SoftcopyDetails
}


type DocumentsToSubmit {
  count: Int
  document: String
}


input EachUploadDoc {
  docs: [UploadDocumentFile]
  name: String
}


input EddAnswer {
  answers: String
  question: String
}


type EddClient {
  name: String
  status: String
}


type EddClientProfile {
  accountType: String
  client: ClientProfile
  createdAt: String
  incomeDistribution: String
  signatory: String
}


input EddCommonInput {
  caseId: String
}


type EddDashboard {
  data: EddDashboardResult
  error: Error
}


type EddDashboardResponse {
  cases: [Case]
  historyCount: Int
  newCount: Int
  page: Int
  pages: Int
  pendingCount: Int
  reroutedCount: Int
  submittedCount: Int
}


type EddDashboardResult {
  result: EddDashboardResponse
}


type EddDashboardV2 {
  data: EddDashboardV2Result
  error: Error
}


type EddDashboardV2Response {
  cases: [CaseV2]
  historyCount: Int
  newCount: Int
  page: Int
  pages: Int
  pendingCount: Int
  reroutedCount: Int
  submittedCount: Int
}


type EddDashboardV2Result {
  result: EddDashboardV2Response
}


type EddData {
  amlaRemark: String
  answers: String
  description: String
  question: String
  questionId: Int
}


type EddDataQuestion {
  amlaRemark: EddQuestionOption
  answers: String
  description: String
  question: String
  questionId: Int
}


type EddFormatOption {
  limit: Int
  type: String
}


type EddQuestion {
  description: String
  id: String
  options: [EddQuestionOption]
  title: String
}


type EddQuestionOption {
  autoHide: Boolean
  description: String
  format: EddFormatOption
  hasDoc: Boolean
  hasRemark: Boolean
  id: String
  info: String
  multiSelection: Boolean
  options: [EddQuestionOption]
  parent: [String]
  title: String
  type: String
  values: [String]
  valuesDescription: [String]
}


type EddQuestions {
  additionalQuestions: [EddQuestion]
  amlaTitle: AmlaTitle
  questions: [EddQuestion]
}


input EmailOtpVerificationInput {
  clientId: String
  id: String
  initId: String
  isForceUpdate: Boolean
  jointHolder: CommonOtpInput
  principalHolder: CommonOtpInput
}


input EmailVerificationInput {
  clientId: String
  id: String
  initId: String
  isForceUpdate: Boolean
  jointHolder: CommonEmail
  principalHolder: CommonEmail
}


type EmploymentDetails {
  address: AddressDetails
  annualIncome: String
  nameOfEmployer: String
  natureOfBusiness: String
  occupation: String
}


type EnableAgent {
  data: FirstTimeSignUpResult
  error: Error
}


type EpfDetails {
  epfAccountType: String
  epfMemberNumber: String
}


input EpfDetailsForRedemption {
  epfNumber: String
  epfType: String
}


type EpfDetailsResponse {
  epfNumber: String
  epfType: String
}


type Error {
  errorCode: String
  errorList: [String]
  message: String
  statusCode: String
}


type EtbAccountList {
  accountNumber: String
  authorisedSignatory: String
  currency: [String]
  description: String
  riskTolerance: String
}


type EtbAccountListOutput {
  data: EtbAccountListResult
  error: Error
}


type EtbAccountListRes {
  etbAccountList: [EtbAccountList]
}


type EtbAccountListResult {
  result: EtbAccountListRes
}


type EtbCheckRes {
  accounts: [AccountsData]
  highRisk: Boolean
  message: String
  status: Boolean
}


type EtbCheckResult {
  result: EtbCheckRes
}


type EtbCheckV2Output {
  data: EtbCheckV2Response
  error: Error
}


type EtbCheckV2Response {
  result: EtbCheckV2Result
}


type EtbCheckV2Result {
  accountHolder: String
  accounts: [InvestorAccounts]
  accountsCount: Int
  address: AddressDetails
  clientId: String
  dateOfBirth: String
  declarationRequired: [String]
  emailAddress: String
  forceUpdate: Boolean
  highRisk: Boolean
  idNumber: String
  idType: String
  initId: Int
  isMinor: Boolean
  message: String
  status: Boolean
}


type EventObject {
  checkbox: String
  description: String
  eventName: String
  header: String
  headerDescription: String
  primaryButton: String
  s3Path: String
  secondaryButton: String
}


input ExpiredChangePasswordInput {
  confirmPassword: String
  password: String
}


type ExtensionRemark {
  date: String
  remark: String
}


type FatcaDeclaration {
  certificate: FileBase64
  confirmAddress: String
  correspondenceDeclaration: String
  formW8Ben: FileBase64
  formW9: FileBase64
  reason: String
  usBorn: String
  usCitizen: String
}


type FeaDeclaration {
  balance: String
  borrowingFacility: String
  resident: String
}


type FileBase64 {
  base64: String
  date: String
  name: String
  path: String
  size: Float
  type: String
  url: String
}


input FileBase64Input {
  base64: String
  date: String
  id: String
  name: String
  path: String
  size: Float
  title: String
  type: String
  url: String
}


type FirstTimeSignUp {
  data: FirstTimeSignUpResult
  error: Error
}


type FirstTimeSignUpResponse {
  email: String
  message: String
  status: Boolean
}


type FirstTimeSignUpResult {
  result: FirstTimeSignUpResponse
}


type FundDetailsDashboard {
  data: FundDetailsDashboardResult
  error: Error
}


type FundDetailsDashboardResponse {
  ampCategory: String
  ampFee: String
  annualManagementFee: String
  annualTrusteeFee: String
  docs: [DocumentS3Response]
  fundCategory: String
  fundClass: String
  fundCurrency: String
  fundName: String
  fundObjective: String
  isEpf: Boolean
  isEpfOnly: String
  isSchedule: String
  isSyariah: Boolean
  isWholesale: String
  issuingHouse: String
  landingFund: String
  minAdditionalInv: CashEpf
  minInitialInv: CashEpf
  productType: String
  prsType: String
  riskCategory: String
  salesCharge: CashEpf
}


type FundDetailsDashboardResult {
  result: FundDetailsDashboardResponse
}


type FundList {
  epfStatus: String
  fundCategory: String
  fundClass: String
  fundCode: String
  fundCurrency: String
  fundGroup: String
  fundId: ID
  fundName: String
  fundType: String
  isDisable: Boolean
  isEpf: Boolean
  issuingHouse: String
  minSwitchInUnits: String
  performance: String
  riskCategory: String
  salesCharge: SalesCharge
  switchGroup: String
}


type FundListResponse {
  data: FundListResult
  error: Error
}


type FundListResult {
  result: [FundList]
}


type GetCaseOutput {
  data: GetCaseOutputResult
  error: Error
}


type GetCaseOutputRes {
  client: EddClient
  data: EddQuestions
}


type GetCaseOutputResult {
  result: GetCaseOutputRes
}


input GetDocumentInput {
  clientId: String
  fundId: String
}


type GetDocuments {
  data: DocumentResult
  error: Error
}


type GetInbox {
  data: InboxResult
  error: Error
}


type GetReceiptSummaryListOutputResponse {
  message: String
  orders: [ReportSummaryArray]
  status: Boolean
}


type GetReceiptSummaryListOutputResult {
  result: GetReceiptSummaryListOutputResponse
}


type GetRedeemFundListDashboard {
  data: GetRedeemFundListDashboardResult
  error: Error
}


type GetRedeemFundListDashboardResponse {
  availableCurrencies: [String]
  filters: ProductFilters
  holdings: [HoldingMasterList]
  page: Int
  pages: Int
  totalCount: ProductCount
}


type GetRedeemFundListDashboardResult {
  result: GetRedeemFundListDashboardResponse
}


type HardCopyDocumentsResponse {
  branchList: [BranchOption]
  documents: [UploadedDocs]
}


type HardCopyDocumentsResult {
  result: HardCopyDocumentsResponse
}


input HardcopyAccountInput {
  joint: [EachUploadDoc]
  principal: [EachUploadDoc]
}


type HardcopyAccountQueue {
  joint: [UploadedDocs]
  principal: [UploadedDocs]
}


type HardcopyDetails {
  accDocs: [DocumentList]
  required: Boolean
  utmcDocs: [DocumentList]
}


type HardcopyDoc {
  remarks: HolderDoc
  title: String
}


input HardcopyDocumentsInput {
  branchId: String
  hardcopy: [EachUploadDoc]
  orderNumber: String
}


input HardcopyDocumentsInputV2 {
  account: HardcopyAccountInput
  branchId: String
  hardcopy: [EachUploadDoc]
  isConfirmed: String
  orderNumber: String
}


type HardcopyDocumentsResponseV2 {
  account: HardcopyAccountQueue
  branchList: [BranchOption]
  documents: [UploadedDocs]
}


type HardcopyDocumentsResultV2 {
  result: HardcopyDocumentsResponseV2
}


type HolderDoc {
  hardcopy: [String]
  jointHolder: [String]
  principalHolder: [String]
}


type HoldingMasterList {
  currency: String
  currentValue: String
  fundId: String
  fundName: String
  investmentAmount: String
  isDisable: Boolean
  isMaturityDisable: Boolean
  isMoneyMarketFund: Boolean
  isNavAvailable: Boolean
  isRedeemDisable: Boolean
  issuingHouse: String
  minBalanceHoldings: String
  minRedeemUnits: String
  minSwitchOutUnits: String
  navDate: String
  navUnits: String
  pl: String
  plPercentage: String
  switchOutMaxSalesCharge: String
  units: String
}


input InboxInput {
  page: String
  search: String
}


type InboxRes {
  createdOn: String
  isRead: Boolean
  isSeen: Boolean
  message: String
  notificationId: String
  searchKey: String
  searchType: String
  senderName: String
  source: String
  title: String
  updatedAt: String
}


type InboxResponse {
  inbox: [InboxRes]
  newMessageCount: String
  page: String
  pages: String
}


type InboxResult {
  result: InboxResponse
}


input IncomeTaxInput {
  reason: String
  taxNumber: String
  taxNumberAvailable: Boolean
}


input InputFundDetails {
  age: Int
  fundId: Int
}


input InputGetRedeemFundList {
  accountNo: String
  allFunds: Boolean
  fundCurrency: [String]
  page: Int
  redeemType: String
  redemptionReason: String
  search: String
  sort: [CustomResultInput]
  tab: String
  transactionType: String
}


input InputSwitchOutFundList {
  accountNo: String
  fundCurrency: [String]
  page: Int
  search: String
  sort: [CustomResultInput]
  tab: String
  transactionType: String
}


input InvestmentAccountInfoInput {
  fundClass: String
  fundCurrency: String
  fundId: String
  fundType: String
  fundingOption: String
  investmentAmount: String
  isScheduled: String
  isTopup: Boolean
  prsType: String
  salesCharge: String
  scheduledInvestmentAmount: String
  scheduledSalesCharge: String
}


input InvestmentInfoInput {
  currency: String
  fundId: String
  redeemAmount: String
  redeemUnits: String
  switchInDetails: [SwitchInFundDetails]
  switchOutFundId: String
  switchOutHoldings: String
}


type InvestmentOutput {
  data: InvestmentResult
  error: Error
}


type InvestmentResult {
  result: AccountInvestmentRes
}


type InvestmentSummary {
  distributionInstruction: String
  fundClass: String
  fundCode: String
  fundCurrency: String
  fundIssuer: String
  fundName: String
  fundType: String
  fundingOption: String
  investmentAmount: String
  investmentType: String
  isEpf: Boolean
  isFea: Boolean
  isScheduled: Boolean
  isSyariah: Boolean
  isTopup: Boolean
  landingFund: String
  recurring: String
  salesCharge: String
  scheduledInvestmentAmount: String
  scheduledSalesCharge: String
}


type InvestorAccountDetailsOutput {
  data: InvestorAccountDetailsResponse
  error: Error
}


type InvestorAccountDetailsResponse {
  result: InvestorAccountDetailsResult
}


type InvestorAccountDetailsResult {
  accountDetails: AccountSummary
  addressInformation: AddressInformation
  bankInformation: BankTypes
  contactDetails: ContactDetails
  declaration: DeclarationList
  documentSummary: DocumentSummary
  employmentInformation: EmploymentDetails
  epfDetails: EpfDetails
  funds: [AccountHolding]
  investorOverview: [OverviewSummary]
  orderHistory: [OrderList]
  personalDetails: ClientDetails
  withOrderHistory: Boolean
}


type InvestorAccounts {
  accountHolder: String
  accountNo: String
  accountOpeningDate: String
  ampDetails: ProductDashboardRes
  authorisedSignatory: String
  currency: [String]
  dateOfBirth: String
  declarationRequired: [String]
  epfConvertedAccount: Boolean
  epfDetails: EpfDetails
  fundType: String
  holdings: [AccountHolding]
  idNumber: String
  idType: String
  isAccountFreeze: Boolean
  isJoint: Boolean
  isPrsGovAccount: Boolean
  isRecurring: Boolean
  isSyariah: Boolean
  jointDateOfBirth: String
  jointEmail: String
  jointIdNumber: String
  jointIdType: String
  jointName: String
  name: String
  paymentMethod: String
  pl: String
  plPercentage: String
  riskTolerance: String
  status: String
}


type InvestorDashboard {
  data: InvestorDashboardResult
  error: Error
}


type InvestorDashboardResponse {
  filters: InvestorFilters
  investors: [InvestorsDetails]
  page: Int
  pages: Int
  totalCount: Int
}


type InvestorDashboardResult {
  result: InvestorDashboardResponse
}


type InvestorDetails {
  data: InvestorDetailsResult
  error: Error
}


type InvestorDetailsResponse {
  accountHolder: String
  address: AddressDetails
  clientId: String
  dateOfBirth: String
  declarationRequired: [String]
  email: String
  emailLastUpdated: String
  idNumber: String
  idType: String
  initId: String
  investorDetails: [InvestorsData]
  isForceUpdate: Boolean
  isMinor: Boolean
  issuanceCountry: String
  mobileNo: String
  mobileNoLastUpdated: String
  name: String
  page: Int
  pages: Int
  totalCount: Int
}


type InvestorDetailsResult {
  result: InvestorDetailsResponse
}


type InvestorFilters {
  riskInfo: [String]
}


input InvestorInput {
  idNumber: String
  page: String
  sort: [CustomResultInput]
  tab: String
  transactionType: String
}


type InvestorNamesDashboard {
  joint: String
  principal: String
}


type InvestorsData {
  accountHolder: String
  accountNo: String
  accountOpeningDate: String
  ampDetails: ProductDashboardRes
  authorisedSignatory: String
  clientId: String
  currency: [String]
  dateOfBirth: String
  email: String
  epfConvertedAccount: Boolean
  epfDetails: EpfDetails
  fundType: String
  holdings: [AccountHolding]
  idNumber: String
  idType: String
  isAccountFreeze: Boolean
  isPrsGovAccount: Boolean
  isRecurring: Boolean
  isSyariah: Boolean
  jointDateOfBirth: String
  jointDeclarationRequired: [String]
  jointEmail: String
  jointId: String
  jointIdNumber: String
  jointIdType: String
  jointName: String
  jointRisk: String
  name: String
  paymentMethod: String
  pl: String
  plPercentage: String
  principalRisk: String
  riskTolerance: String
  status: String
}


type InvestorsDetails {
  email: String
  idNumber: String
  mobileNo: String
  name: String
  riskTolerance: String
}


type JWT {
  accessToken: String
  agentCategory: String
  agentId: String
  branch: String
  email: String
  events: [EventObject]
  idToken: String
  inboxCount: String
  isExpired: Boolean
  isInternalAgent: Boolean
  isMultiUtmc: Boolean
  isTermsAgreed: Boolean
  licenseCode: String
  licenseType: [String]
  name: String
  rank: String
  refreshToken: String
}


type JWTResult {
  result: JWT
}


input JointHolderInput {
  dateOfBirth: String
  id: String
  idType: String
  name: String
}


type JointOutput {
  clientId: String
  dateOfBirth: String
  gender: String
  id: String
  name: String
}


type ListHardcopyDocumentsOutput {
  data: HardCopyDocumentsResult
  error: Error
}


type ListHardcopyDocumentsOutputV2 {
  data: HardcopyDocumentsResultV2
  error: Error
}


type ListPaymentRequiredOutput {
  data: PaymentRequiredResult
  error: Error
}


type ListSoftcopyDocumentsOutput {
  data: ListSoftcopyDocumentsResult
  error: Error
}


type ListSoftcopyDocumentsRes {
  joint: [UploadedDocs]
  principal: [UploadedDocs]
}


type ListSoftcopyDocumentsResult {
  result: ListSoftcopyDocumentsRes
}


input LoginInput {
  hideEvents: [String]
  password: String
  username: String
}


type MinMaxAmount {
  maximum: String
  minimum: String
}


input ModifyAction {
  id: String
  option: String
}


type Mutation {
  activate(input: ActivateInput): Activate
  addBankSummaryInApplication(input: addBankSummaryInApplicationInput): addBankSummaryInApplicationOutput
  agentRegister(input: RegisterInput): AgentRegistration
  changePassword(input: ChangePasswordInput): ChangePassword
  changePasswordV2(input: ChangePasswordInputV2): CommonOutput
  clientRegister(input: register): registerClient
  clientRegisterV2(input: ClientRegisterInput): ClientRegisterOutput
  emailOtpVerification(input: verifyOtp): CommonOutput
  emailOtpVerificationV2(input: EmailOtpVerificationInput): CommonOutput
  emailVerification(input: email): CommonOutput
  emailVerificationV2(input: EmailVerificationInput): SendEmailOutput
  expiredChangePassword(input: ExpiredChangePasswordInput): CommonOutput
  firstTimeSignUp(input: NricInput): FirstTimeSignUp
  forgotPassword(input: NricInput): PasswordReset
  generateOrderTrackingSummary(input: PdfInput): PdfOutput
  generatePdf(input: PdfInput): PdfOutput
  generatePdfTransactions(input: TransactionsPdfInput): PdfOutput
  generatePdfV2(input: PdfInput): PdfOutput
  resendLockOtp(input: NricInput): EnableAgent
  resendOtp(input: ResendOtp): ResendOtpVerify
  resetPassword(input: SetPasswordInput): ResetPassword
  resubmitOrder(input: OrderDetailsInput): CommonOutput
  riskAssessment(input: risk): riskcalculation
  riskAssessmentV2(input: RiskAssessmentInput): RiskAssessmentOutput
  signUp(input: SetPasswordInput): SignUpPassword
  submitClientAccount(input: SubmitClientAccountInput): InvestmentOutput
  submitClientAccountHybrid(input: SubmitClientAccountInput): InvestmentOutput
  submitClientAccountTransactions(input: SubmitClientAccountTransactionsInput): SubmitClientAccountTransactionOutput
  submitClientAccountV2(input: SubmitClientAccountInput): InvestmentOutput
  submitCr(input: submitCrInput): SubmitCrOutput
  submitEdd(input: SubmitEddInput): CommonOutput
  submitHardcopyDocuments(input: HardcopyDocumentsInput): CommonOutput
  submitHardcopyDocumentsV2(input: HardcopyDocumentsInputV2): SubmitHardcopyOutputV2
  submitPdf(input: submitPdfInput): CommonOutput
  submitPdfTransactions(input: submitPdfTransactionsInput): SubmitPdfTransactionsOutput
  submitPdfV2(input: SubmitPdfInputV2): SubmitPdfOutputV2
  submitProofOfPayments(input: SubmitPopInput): SubmitPopOutput
  submitRedeemInvestment(input: SubmitRedeemInvestmentInput): SubmitRedeemInvestmentOutput
  submitSoftcopyDocuments(input: SoftcopyDocumentsInput): SubmitSoftcopyOutput
  submitSoftcopyDocumentsV2(input: SoftcopyDocumentsInputV2): SubmitSoftcopyOutputV2
  submitSwitchingInvestment(input: SubmitSwitchingInvestmentInput): SubmitSwitchingInvestmentOutput
  summaryReceipt(input: summaryReceiptInput): summaryReceiptOutput
  updateInbox(input: UpdateInboxInput): CommonOutput
  updateSeen(input: SeenInput): CommonOutput
  userLogin(input: LoginInput): AgentLogin
  verifyOtp(input: otp): OtpVerification
  verifyOtpAgent(input: otp): VerifyOtpAgent
  verifySignUp(input: otp): VerifySignUpOTP
}


input NricInput {
  nric: String
}


type OrderAmountCurrency {
  amount: String
  currency: String
}


type OrderAmountCurrencyForRedemption {
  currency: String
  redeemAmount: String
}


input OrderDetailsInput {
  orderNumber: String
}


type OrderList {
  lastUpdated: String
  orderNumber: String
  status: String
  totalInvestment: [OrderAmountCurrency]
  totalUnits: String
  transactionType: String
}


input OrderSummaryInput {
  orderNumber: String
}


input OrderSummaryInputV2 {
  orderNumber: String
}


type OrderSummaryOutput {
  data: OrderSummaryResult
  error: Error
}


type OrderSummaryOutputV2 {
  data: OrderSummaryResultV2
  error: Error
}


type OrderSummaryRes {
  extensionRemark: ExtensionRemark
  investmentSummary: [InvestmentSummary]
  orderNumber: String
  paymentSummary: [PaymentSummary]
  profile: [ClientProfile]
  remark: [Reasons]
  status: String
  totalInvestment: [OrderAmountCurrency]
  transactionDetails: TxDetails
}


type OrderSummaryResV2 {
  documentSummary: DocumentSummary
  extensionRemark: ExtensionRemark
  investmentSummary: [InvestmentSummary]
  isEtb: Boolean
  orderNumber: String
  paymentSummary: [PaymentSummary]
  profile: [ClientProfile]
  redeemSummary: RedeemSummary
  redemptionInvestmentSummary: [AccountInvestmentDetailsRedemption]
  remark: [Reasons]
  riskInfo: ClientRisk
  status: String
  switchingInvestmentSummary: [AccountInvestmentDetailsSwitching]
  totalInvestment: [OrderAmountCurrency]
  totalRedeemAmount: [OrderAmountCurrencyForRedemption]
  totalUnits: String
  trackingSummary: [TrackingSummary]
  transactionDetails: TxDetails
  transactionType: String
}


type OrderSummaryResult {
  result: OrderSummaryRes
}


type OrderSummaryResultV2 {
  result: OrderSummaryResV2
}


type OtpVerification {
  data: CommonResult
  error: Error
}


type OverviewSummary {
  clientId: String
  id: [FileBase64]
  idNumber: String
  idType: String
  lastUpdated: String
  name: String
  riskProfile: String
}


input PDetailInfoInput {
  bumiputera: String
  countryOfBirth: String
  educationLevel: String
  expirationDate: String
  gender: String
  id: [FileBase64Input]
  issuanceCountry: String
  maritalStatus: String
  monthlyHouseholdIncome: String
  mothersMaidenName: String
  name: String
  nationality: String
  placeOfBirth: String
  race: String
  relationship: String
  salutation: String
}


type PasswordReset {
  data: FirstTimeSignUpResult
  error: Error
}


type PaymentDoc {
  remarks: HolderDoc
  title: String
}


input PaymentInput {
  action: ModifyAction
  amount: String
  bankAccountName: String
  bankAccountNumber: String
  bankName: String
  checkNumber: String
  clientName: String
  clientTrustAccountNumber: String
  ctaParent: String
  ctaTag: PaymentTagInput
  currency: String
  epfAccountNumber: String
  epfReferenceNumber: String
  expanded: String
  frequency: String
  isCombined: String
  kibBankAccountNumber: String
  kibBankName: String
  lastAmountUpdate: String
  parent: String
  paymentMethod: String
  proof: FileBase64Input
  recurringBank: String
  recurringType: String
  referenceNumber: String
  remark: String
  saved: String
  tag: PaymentTagInput
  transactionDate: String
  transactionTime: String
  utmc: String
}


type PaymentRequiredRes {
  allowedRecurringType: [String]
  completedSurplusCurrencies: [String]
  createdOn: String
  ctaDetails: [UploadedPaymentInfo]
  epfAccountNumber: String
  funds: [InvestmentSummary]
  isLastOrder: Boolean
  isSurplusUtilised: Boolean
  orderNumber: String
  payment: [UploadedPaymentInfo]
  paymentCount: Int
  paymentType: String
  recurringDetails: RecurringDetails
  status: String
  surplusBalance: [UploadedPaymentInfo]
  totalInvestment: [OrderAmountCurrency]
  totalPaidAmount: [OrderAmountCurrency]
}


type PaymentRequiredResult {
  result: PaymentRequiredRes
}


type PaymentSummary {
  bankAccountName: String
  bankAccountNumber: String
  bankName: String
  checkNumber: String
  clientName: String
  clientTrustAccountNumber: String
  epfAccountNumber: String
  epfReferenceNo: String
  frequency: String
  fundCurrency: String
  investmentAmount: String
  isCombined: Boolean
  kibBankAccountNumber: String
  kibBankName: String
  paymentMethod: String
  proofOfPayment: FileBase64
  recurringBank: String
  recurringType: String
  referenceNumber: String
  remark: String
  surplusNote: String
  transactionDate: String
  utmc: String
}


type PaymentTag {
  orderNumber: String
  uuid: String
}


input PaymentTagInput {
  orderNumber: String
  uuid: String
}


input PdfDocument {
  adviserSignature: FileBase64Input
  clientSignature: FileBase64Input
  jointSignature: FileBase64Input
  orderNumber: String
  pdf: String
}


input PdfDocumentTransactions {
  adviserSignature: FileBase64Input!
  clientSignature: FileBase64Input
  jointSignature: FileBase64Input
  orderNumber: String!
  pdf: String!
}


input PdfDocumentV2 {
  adviserSignature: FileBase64Input!
  clientSignature: FileBase64Input!
  jointSignature: FileBase64Input
  orderNumber: String!
  pdf: String!
}


input PdfInput {
  clientId: String
  initId: String
  isEtb: Boolean
  isForceUpdate: Boolean
  orderNo: String
}


type PdfOutput {
  data: PdfOutputResult
  error: Error
}


type PdfOutputData {
  base64: String
  date: String
  name: String
  type: String
  url: String
  urlPageCount: Int
}


type PdfOutputResponse {
  message: String
  pdf: PdfOutputData
  status: Boolean
}


type PdfOutputResult {
  result: PdfOutputResponse
}


type PopMessage {
  docList: [PaymentDoc]
  excessAmount: [OrderAmountCurrency]
  orderNumber: String
  paymentType: String
  remarks: [String]
  status: String
  totalPayment: [OrderAmountCurrency]
  totalRecurring: String
}


input PopOrdersInput {
  orderNumber: String
  paymentType: String
  payments: [PaymentInput]
}


input PreviousResponseInput {
  caseId: String
  question: String
}


type PreviousResponseOutput {
  data: PreviousResponseResult
  error: Error
}


type PreviousResponseRes {
  answer: String
  questionId: String
}


type PreviousResponseResult {
  result: PreviousResponseRes
}


input PrincipalHolderInput {
  dateOfBirth: String
  id: String
  idType: String
  name: String
}


input PrincipalInput {
  country: String
  dateOfBirth: String
  id: String
  idType: String
  name: String
}


type PrincipalOutput {
  clientId: String
  dateOfBirth: String
  gender: String
  id: String
  name: String
}


type ProceedPayable {
  bankSummary: AccountBankResponse
  ctaSummary: CtaSummaryResponse
  epfDetails: EpfDetailsResponse
}


type ProductCount {
  all: String
  recommended: String
}


type ProductDashboard {
  data: ProductDashboardResult
  error: Error
}


type ProductDashboardRes {
  ampCategory: String
  ampFee: String
  annualManagementFee: String
  annualTrusteeFee: String
  docs: [DocumentS3Response]
  fundAbbr: String
  fundCategory: String
  fundClasses: [String]
  fundCode: String
  fundCurrencies: [String]
  fundId: String
  fundName: String
  fundObjective: String
  fundType: String
  incomeDistribution: String
  isEpf: String
  isEpfOnly: String
  isFea: String
  isScheduled: String
  isSyariah: String
  isWholesale: String
  issuingHouse: String
  landingFund: String
  masterList: [ProductMasterList]
  performance: String
  prsType: String
  riskCategory: String
}


type ProductDashboardResponse {
  filters: ProductFilters
  page: String
  pages: String
  products: [ProductDashboardRes]
  totalCount: ProductCount
}


type ProductDashboardResult {
  result: ProductDashboardResponse
}


input ProductFilter {
  accountType: String
  age: String
  fundCurrency: [String]
  fundType: String
  isConventional: String
  isEpf: String
  isSyariah: String
  issuingHouse: [String]
  netWorth: String
  page: String
  recommendedRisk: String
  riskCategory: [String]
  search: String
  showBy: String
  sort: [CustomResultInput]
  tab: String
}


type ProductFilters {
  fundCategory: [String]
  fundCurrency: [String]
  fundType: [String]
  issuingHouse: [String]
  riskCategory: [String]
}


type ProductMasterList {
  class: String
  currency: String
  fundId: String
  isEpf: String
  newSalesAmount: CashEpf
  salesCharge: CashEpf
  topUpAmount: CashEpf
}


type Query {
  agentDashboardV2(input: DashboardInput): AgentDashboard
  agentProfile: AgentProfile
  caseQuestions(input: EddCommonInput): GetCaseOutput
  caseResponse(input: CaseResponseInput): CaseResponseOutput
  checkPassword(input: CheckPasswordInput): CommonOutput
  clientProfile(input: EddCommonInput): ClientProfileOutput
  clientStatus(input: clientExist): CommonOutput
  dashboard(input: DashboardInput): Dashboard
  eddDashboard(input: DashboardInput): EddDashboard
  eddDashboardV2(input: DashboardInput): EddDashboardV2
  etbAccountList(input: SubmitClientAccountInput): EtbAccountListOutput
  etbCheck(input: clientStatusInput): etbCheck
  etbCheckV2(input: etbCheckV2Input): EtbCheckV2Output
  fundDetails(input: InputFundDetails): FundDetailsDashboard
  getAllBanksInAccount(input: BankInfoInput): BankInfoDtoResult
  getDocuments(input: GetDocumentInput): GetDocuments
  getInbox(input: InboxInput): GetInbox
  getOrderSummary(input: OrderSummaryInput): OrderSummaryOutput
  getOrderSummaryV2(input: OrderSummaryInputV2): OrderSummaryOutputV2
  getReceiptSummaryList(input: getReceiptSummaryListInput): getReceiptSummaryListOutput
  getRedeemFundList(input: InputGetRedeemFundList): GetRedeemFundListDashboard
  investorAccountDetails(input: investorAccountDetailsInput): InvestorAccountDetailsOutput
  investorDashboard(input: DashboardInput): InvestorDashboard
  investorDetailsDashboard(input: InvestorInput): InvestorDetails
  listHardcopyDocuments(input: OrderDetailsInput): ListHardcopyDocumentsOutput
  listHardcopyDocumentsV2(input: OrderDetailsInput): ListHardcopyDocumentsOutputV2
  listPaymentRequired(input: OrderDetailsInput): ListPaymentRequiredOutput
  listSoftcopyDocuments(input: OrderDetailsInput): ListSoftcopyDocumentsOutput
  listSoftcopyDocumentsV2(input: OrderDetailsInput): ListSoftcopyDocumentsOutput
  previousResponse(input: PreviousResponseInput): PreviousResponseOutput
  productList(input: ProductFilter): ProductDashboard
  receiptSummary(input: ReceiptSummaryInput): ReceiptSummaryOutput
  switchOutFundList(input: InputSwitchOutFundList): SwitchOutFundListDashboard
  switchingFundList(input: SwitchingFundListInput): FundListResponse
}


type Reasons {
  label: String
  remark: [String]
}


type ReceiptSummaryData {
  fundCount: String
  fundType: String
  isEpf: String
  isScheduled: String
  name: String
  orderNumber: String
  orderTotalAmount: [OrderAmountCurrency]
  remark: String
  totalUnits: String
}


input ReceiptSummaryInput {
  clientId: String
  initId: String
  isForceUpdate: Boolean
  transactionType: String
}


type ReceiptSummaryOutput {
  data: ReceiptSummaryResult
  error: Error
}


type ReceiptSummaryResponse {
  message: String
  orders: [ReceiptSummaryData]
  status: Boolean
}


type ReceiptSummaryResult {
  result: ReceiptSummaryResponse
}


type RecurringDetails {
  dda: [DdaFpxInfo]
  fpx: [DdaFpxInfo]
}


type RedeemIncomeTax {
  reason: String
  taxNumber: String
}


type RedeemSummary {
  incomeTaxDetails: RedeemIncomeTax
  proceedPayable: ProceedPayable
  redeemType: String
  redemptionMethod: String
}


input RedemptionDetails {
  bankSummary: AccountBankInput
  ctaSummary: CtaSummary
}


type RegisterClientRes {
  accountType: String
  jointHolder: JointOutput
  message: String
  principalHolder: PrincipalOutput
  status: Boolean
}


type RegisterClientResult {
  result: RegisterClientRes
}


input RegisterInput {
  addrTown: String
  address: String
  agentCode: String
  branch: Int
  channel: String
  email: String
  isBoth: Boolean
  mobile: String
  name: String
  omniEnabled: Boolean
  origin: String
  rank: String
  username: String
}


type ReportSummaryArray {
  fundCount: String
  fundType: String
  isEpf: String
  isScheduled: String
  name: String
  orderNumber: String
  orderTotalAmount: [OrderAmountCurrency]
}


input ResendOtp {
  nric: String
  type: String
}


type ResendOtpVerify {
  data: CommonResult
  error: Error
}


type ResetPassword {
  data: CommonResult
  error: Error
}


input RiskAnswersInput {
  questionEight: Int
  questionFive: Int
  questionFour: Int
  questionNine: Int
  questionSeven: Int
  questionSix: Int
  questionThree: Int
  questionTwo: Int
}


input RiskAssessmentInput {
  clientId: String
  id: String
  initId: String
  isEtb: Boolean
  isForceUpdate: Boolean
  riskAssessment: RiskAnswersInput
}


type RiskAssessmentOutput {
  data: RiskAssessmentResponse
  error: Error
}


type RiskAssessmentRes {
  appetite: String
  fundSuggestion: String
  message: String
  netWorth: String
  profile: String
  rangeOfReturn: String
  status: Boolean
  type: String
}


type RiskAssessmentResponse {
  result: RiskAssessmentResult
}


type RiskAssessmentResult {
  appetite: String
  fundSuggestion: String
  message: String
  netWorth: String
  profile: String
  rangeOfReturn: String
  result: RiskAssessmentRes
  status: Boolean
  type: String
}


type SalesCharge {
  cash: MinMaxAmount
  epf: MinMaxAmount
}


input SeenInput {
  dashboard: String
  referenceKey: String
  tab: [String]
}


type SendEmailOutput {
  data: SendEmailResponse
  error: Error
}


type SendEmailResponse {
  result: SendEmailResult
}


type SendEmailResult {
  message: String
  otpSendTime: String
  status: Boolean
}


input SetPasswordInput {
  confirmPassword: String
  password: String
  username: String
}


type SignUpPassword {
  data: CommonResult
  error: Error
}


type SoftCopyDoc {
  remarks: HolderDoc
  title: String
}


type SoftcopyDetails {
  documents: [DocumentList]
  required: Boolean
}


input SoftcopyDocumentsInput {
  joint: [EachUploadDoc]
  orderNumber: String
  principal: [EachUploadDoc]
}


input SoftcopyDocumentsInputV2 {
  isConfirmed: String
  joint: [EachUploadDoc]
  orderNumber: String
  principal: [EachUploadDoc]
}


type SubAddress {
  line1: String
  line2: String
  line3: String
  line4: String
}


input SubAddressInput {
  line1: String
  line2: String
  line3: String
}


input SubmitClientAccountInput {
  incomeDistribution: String
  initId: String
  investments: [InvestmentAccountInfoInput]
  isEtb: Boolean
  joint: AccountJointInput
  principal: AccountInput
  signatory: String
}


type SubmitClientAccountTransactionOutput {
  data: SubmitClientAccountTransactionResult
  error: Error
}


type SubmitClientAccountTransactionRes {
  grandTotal: [OrderAmountCurrency]
  grandTotalRecurring: OrderAmountCurrency
  orders: [AccountOrder]
}


type SubmitClientAccountTransactionResult {
  result: SubmitClientAccountTransactionRes
}


input SubmitClientAccountTransactionsInput {
  accountNo: String
  initId: String
  investments: [InvestmentAccountInfoInput]
  principal: AccountInputTransactions
}


type SubmitCrOutput {
  data: SubmitCrOutputResult
  error: Error
}


type SubmitCrOutputRes {
  message: String
}


type SubmitCrOutputResult {
  result: SubmitCrOutputRes
}


input SubmitEddInput {
  additionalAnswers: [EddAnswer]
  allAnswers: [EddAnswer]
  caseId: String
}


type SubmitHardcopyOutputV2 {
  data: SubmitHardcopyResponseV2
  error: Error
}


type SubmitHardcopyResponseV2 {
  result: SubmitHardcopyResultsV2
}


type SubmitHardcopyResultsV2 {
  message: String
  orders: [DocSummaryMessage]
}


input SubmitPdfInputV2 {
  clientId: String
  documents: [PdfDocumentV2]
  initId: String
  isConfirmed: String
  isEtb: Boolean
  isForceUpdate: Boolean
}


type SubmitPdfOutputV2 {
  data: SubmitPdfOutputV2Response
  error: Error
}


type SubmitPdfOutputV2Response {
  result: SubmitPdfOutputV2Result
}


type SubmitPdfOutputV2Result {
  message: String
  orderNumber: [String]
  remarks: [DocRemark]
  status: String
}


type SubmitPdfTransactionsOutput {
  data: SubmitPdfTransactionsResponse
  error: Error
}


type SubmitPdfTransactionsResponse {
  result: SubmitPdfTransactionsResult
}


type SubmitPdfTransactionsResult {
  message: String
  status: Boolean
  totalRedeemAmount: [OrderAmountCurrencyForRedemption]
  totalRedeemUnits: String
  totalSwitchOutUnits: String
  withHardcopy: Boolean
}


input SubmitPopInput {
  isConfirmed: String
  orders: [PopOrdersInput]
}


type SubmitPopOutput {
  data: SubmitPopResults
  error: Error
}


type SubmitPopResponse {
  account: PopMessage
  accountType: String
  message: String
  orders: [PopMessage]
  txRef: String
  withFloating: Boolean
  withHardcopy: Boolean
  withMoneySightedCta: Boolean
}


type SubmitPopResults {
  result: SubmitPopResponse
}


input SubmitRedeemInvestmentInput {
  accountNo: String
  clientId: String
  epfDetails: EpfDetailsForRedemption
  incomeTaxDetails: IncomeTaxInput
  initId: String
  investments: [InvestmentInfoInput]
  redeemType: String
  redemptionDetails: RedemptionDetails
  redemptionMethod: String
}


type SubmitRedeemInvestmentOutput {
  data: SubmitRedeemInvestmentResult
  error: Error
}


type SubmitRedeemInvestmentRes {
  orders: [AccountOrderRedemption]
  proceedPayable: ProceedPayable
}


type SubmitRedeemInvestmentResult {
  result: SubmitRedeemInvestmentRes
}


type SubmitSoftcopyOutput {
  data: SubmitSoftcopyResults
  error: Error
}


type SubmitSoftcopyOutputV2 {
  data: SubmitSoftcopyResponseV2
  error: Error
}


type SubmitSoftcopyResponse {
  message: String
  status: Boolean
  txRef: String
}


type SubmitSoftcopyResponseV2 {
  result: SubmitSoftcopyResultsV2
}


type SubmitSoftcopyResults {
  result: SubmitSoftcopyResponse
}


type SubmitSoftcopyResultsV2 {
  message: String
  orders: [DocSummaryMessageSoftCopy]
}


input SubmitSwitchingInvestmentInput {
  accountNo: String
  initId: String
  investments: [InvestmentInfoInput]
  principal: AccountInputTransactions
}


type SubmitSwitchingInvestmentOutput {
  data: SubmitSwitchingInvestmentResult
  error: Error
}


type SubmitSwitchingInvestmentRes {
  orders: [AccountOrderSwitching]
}


type SubmitSwitchingInvestmentResult {
  result: SubmitSwitchingInvestmentRes
}


type SummaryPdfOutput {
  base64: String
  date: String
  name: String
  type: String
}


type SummaryReceiptOutputResponse {
  message: String
  pdf: [SummaryPdfOutput]
  status: Boolean
}


type SummaryReceiptOutputResult {
  result: SummaryReceiptOutputResponse
}


type SurplusUtilised {
  amount: String
  currency: String
  orderNumber: String
  paymentId: String
}


input SwitchInFundDetails {
  switchInFundId: String
  switchInSalesCharge: String
  switchInUnits: String
}


type SwitchInResponse {
  accountType: String
  distributionInstruction: String
  exitFee: String
  fundClass: String
  fundCurrency: String
  isSwitching: String
  isTopUp: Boolean
  leadTime: String
  salesCharge: String
  switchInFundAbbr: String
  switchInFundCode: String
  switchInFundId: String
  switchInFundIssuer: String
  switchInFundName: String
  switchInFundProcessingGroup: String
  switchInUnits: String
  switchingFee: String
}


type SwitchOutFundListDashboard {
  data: SwitchOutFundListDashboardResult
  error: Error
}


type SwitchOutFundListDashboardResponse {
  availableCurrencies: [String]
  filters: ProductFilters
  holdings: [HoldingMasterList]
  page: Int
  pages: Int
  totalCount: ProductCount
}


type SwitchOutFundListDashboardResult {
  result: SwitchOutFundListDashboardResponse
}


input SwitchingFundListInput {
  accountNo: String!
  excludeFunds: [Int]
  netWorth: String
  switchOutFundId: Int!
  switchOutUnits: String!
}


type TXDetailsV2 {
  accountType: String
  canProceed: Boolean
  clientId: String
  createdOn: String
  documents: [DocumentsToSubmit]
  dueDate: String
  highlightedText: String
  investorName: InvestorNamesDashboard
  isScheduled: Boolean
  isSeen: Boolean
  jointId: String
  label: String
  lastUpdated: String
  orderNumber: String
  reason: [DashboardReason]
  remark: [Reasons]
  status: String
  switchOutUnits: String
  totalInvestment: [OrderAmountCurrency]
  totalUnits: String
  transactionType: String
  withHardcopy: Boolean
}


type TinInfo {
  country: String
  reason: String
  tinNumber: String
}


input TinInfoInput {
  country: String
  noTin: String
  reason: String
  tinNumber: String
}


type TrackingSummary {
  createdOn: String
  level: String
  remark: [Reasons]
  status: String
}


input TransactionsPdfInput {
  accountNo: String
  clientId: String
  initId: String
  isEtb: Boolean
  orderNo: String
  transactionType: String
}


type TxDetails {
  accountNo: String
  accountNumber: [String]
  accountOperationMode: String
  accountType: String
  kibProcessingBranch: String
  registrationDate: String
  servicingAdviserCode: String
  servicingAdviserName: String
  totalSwitchOutUnits: String
}


input UpdateInboxInput {
  markAllAsRead: String
  notificationIds: [String]
}


input UploadDocumentFile {
  file: FileBase64Input
  id: String
  title: String
}


type UploadedDocs {
  docs: [UploadedDocsInfo]
  name: String
}


type UploadedDocsInfo {
  id: String
  isEditable: Boolean
  name: String
  title: String
  type: String
  url: String
}


type UploadedPaymentInfo {
  amount: String
  bankAccountName: String
  bankAccountNumber: String
  bankName: String
  belongsTo: String
  checkNumber: String
  clientName: String
  clientTrustAccountNumber: String
  ctaParent: String
  ctaTag: PaymentTag
  currency: String
  epfAccountNumber: String
  epfReferenceNo: String
  excess: OrderAmountCurrency
  frequency: String
  initialExcess: OrderAmountCurrency
  isCombined: Boolean
  isEditable: Boolean
  kibBankAccountNumber: String
  kibBankName: String
  orderNumber: String
  parent: String
  paymentId: String
  paymentMethod: String
  proof: UploadedDocsInfo
  recurringBank: String
  recurringType: String
  referenceNumber: String
  remark: String
  sharedTo: [String]
  tag: PaymentTag
  transactionDate: String
  utilised: [SurplusUtilised]
}


type VerifyOtpAgent {
  data: CommonResult
  error: Error
}


type VerifySignUpOTP {
  data: CommonResult
  error: Error
}


input addBankSummaryInApplicationInput {
  accountNo: String
  banks: BankInfoInput
  clientId: String
  initId: Int
}


type addBankSummaryInApplicationOutput {
  data: addBankSummaryInApplicationResponse
  error: Error
}


type addBankSummaryInApplicationResponse {
  result: addBankSummaryInApplicationResponseResult
}


type addBankSummaryInApplicationResponseResult {
  accountNo: String
  banks: BankInfoResponse
  clientId: String
  initId: Int
  message: String
}


input clientExist {
  id: String
}


input clientStatusInput {
  agentId: String
  principalHolder: PrincipalInput
}


input email {
  clientId: String
  jointHolder: CommonEmail
  principalHolder: CommonEmail
}


type etbCheck {
  data: EtbCheckResult
  error: Error
}


input etbCheckV2Input {
  checkType: String
  country: String
  dateOfBirth: String
  id: String
  idType: String
  name: String
}


input getReceiptSummaryListInput {
  clientId: String
}


type getReceiptSummaryListOutput {
  data: GetReceiptSummaryListOutputResult
  error: Error
}


input investorAccountDetailsInput {
  accountNumber: String
  clientId: String
  transactionType: String
}


input otp {
  code: Int
  nric: String
}


input register {
  accountType: String
  agentId: String
  jointHolder: JointHolderInput
  principalHolder: PrincipalHolderInput
}


type registerClient {
  data: RegisterClientResult
  error: Error
}


input risk {
  clientId: String
  riskAssessment: Assessment
}


type riskcalculation {
  data: RiskAssessmentResult
  error: Error
}


input submitCrInput {
  clientId: String
  clientInfo: ClienInfoInput
  id: String
  initId: String
}


input submitPdfInput {
  clientId: String
  documents: [PdfDocument]
}


input submitPdfTransactionsInput {
  clientId: String
  documents: [PdfDocumentTransactions]
  initId: String
  isConfirmed: String
  isEtb: Boolean
  isForceUpdate: Boolean
  transactionType: String
}


input summaryReceiptInput {
  all: String
  orders: [String]
}


type summaryReceiptOutput {
  data: SummaryReceiptOutputResult
  error: Error
}


input verifyOtp {
  clientId: String
  jointHolder: CommonOtpInput
  principalHolder: CommonOtpInput
}


`;class qv{constructor(e){An(this,"mapping");this.mapping=e}getFor(e){return this.mapping.get(e.name)}}var ui;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(ui||(ui={}));function Wv(r){const e=new Map;return zv(r,t=>{me(t)&&Yv(t,s=>{const o=Iu(s.type);pu(e,o).references.push({kind:ui.FIELD,parent:t,by:s}),Qv(s,l=>{const p=Iu(l.type);pu(e,p).references.push({kind:ui.ARGUMENT,field:s,type:t,by:l})})}),Je(t)&&t.getTypes().forEach(s=>{pu(e,s).references.push({kind:ui.UNION,by:t})})}),new qv(e)}function zv(r,e){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||e(t)})}function Yv(r,e){Object.entries(r.getFields()).forEach(([,t])=>{e(t)})}function Qv(r,e){Object.entries(r.args).forEach(([,t])=>{e(t)})}function pu(r,e){let t=r.get(e.name);return t||(t={references:[]},r.set(e.name,t)),t}function Iu(r){return ue(r)||cr(r)?Iu(r.ofType):r}const le=a_(),vu=Lu(Bu.DIRECTIVES,[]);var tp;const Jv=Ls((tp=le.getQueryType())==null?void 0:tp.getFields());var rp;const Xv=Ls((rp=le.getMutationType())==null?void 0:rp.getFields());var ip;const Zv=Ls((ip=le.getSubscriptionType())==null?void 0:ip.getFields()),Gu=Ct.keyBy(sf(),r=>r.name.toLocaleLowerCase()),Kv=Ct.mapValues(Gu,r=>{const e=vu.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return e?e.args.some(t=>t==="*")?r.args:e.args.map(t=>r.args.find(s=>s.name===t)).filter(t=>!!t):[]}),n_=Ls(le.getTypeMap()),e_=Wv(le);function Ls(r){return Ct.mapKeys(r||{},(e,t)=>t.toLocaleLowerCase())}function t_(){return Ct.size(le.getTypeMap())<=10}function r_(){return[fu("Queries",le.getQueryType()),fu("Mutations",le.getMutationType()),fu("Subscriptions",le.getSubscriptionType()),l_(),o_()].filter(r=>!!r)}function fu(r,e){return s_(r,i_(e))}function i_(r){return Ct.sortBy((r==null?void 0:r.getFields())||{},e=>e.name)}function s_(r,e){return e.length===0?null:{type:"menu",title:r,children:e.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:di.joinUrlPaths(bs,r.toLocaleLowerCase(),t.name)}))}}function o_(){return t_()?null:{type:"menu",title:"Types",children:Ct.sortBy(Ct.map(le.getTypeMap()),e=>e.name).filter(e=>!e.name.startsWith("__")).map(e=>({type:"page",title:e.name,section:"Types",href:di.joinUrlPaths(bs,"types",e.name)}))}}function T_(){return!!le.getQueryType()}function A_(r){return Jv[r.toLocaleLowerCase()]}function b_(){return!!le.getMutationType()}function F_(r){return Xv[r.toLocaleLowerCase()]}function C_(){return!!le.getSubscriptionType()}function N_(r){return Zv[r.toLocaleLowerCase()]}function w_(r){return n_[r.toLocaleLowerCase()]}function u_(r){return Gu[r.toLocaleLowerCase()]}function R_(r){return u_(r.name)!==void 0}function k_(){return Ct.size(Gu)>0}function O_(r){return Kv[r.name.toLocaleLowerCase()]||[]}function x_(r){if(r)return e_.getFor(r)}function B_(r){return Ct.flatMap(r.getFields(),e=>({field:e,possibleDescriptions:rf(e,r)}))}function rf(r,e){return r?r.description?[{description:r.description,from:e}]:me(e)?e.getInterfaces().flatMap(t=>rf(t.getFields()[r.name],t)):[]:[]}function sf(){return vu.some(r=>(r==null?void 0:r.name)==="*")?le.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):vu.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?le.getDirective(r):void 0).filter(r=>!!r)}function a_(){return np.trim().length===0?Vv(JSON.parse(JSON.stringify({__schema:{types:[]}}))):jv(np)}function l_(){const r=sf();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(e=>({type:"page",title:e.name,href:di.joinUrlPaths(bs,"directives",e.name),section:"Directives"}))}}const L_=Lu(Bu.APP_TITLE,"GraphQL Documentation"),of=p_().concat(r_());d_(of);const c_=Object.freeze(of),P_=f_();function p_(){return Lu(Bu.PAGES,g_()).filter(e=>!!e).map(e=>af([],e))}function f_(){const r=h_();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function d_(r){function e(s,o){for(const a of s){if(a.type==="page"){o(a);continue}a.type==="menu"&&e(a.children,o)}}let t;e(r,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function h_(){return uf(()=>!0)}function $_(r){return uf(e=>e.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function uf(r){function e(t){for(const s of t){if(s.type==="page"&&r(s))return s;if(s.type==="menu"){const o=e(s.children);if(o)return o}}return null}return e(c_)}function af(r,e){if(typeof e.content=="string")return{type:"page",title:e.title,content:e.content,href:di.joinUrlPaths(bs,...r,ep(e.title))};const t=r.concat([ep(e.title)]);return{type:"menu",title:e.title,children:e.content.map(s=>({...af(t,s),section:e.title}))}}function ep(r){return di.generatePathSegment(r,new Ep)}function g_(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{T_ as A,Ep as B,A_ as C,C_ as D,N_ as E,QI as F,ue as G,cr as H,$p as I,Pp as J,w_ as K,x_ as L,B_ as M,R_ as N,_ as O,__ as P,Fs as Q,ui as R,ap as S,I_ as T,ei as U,XE as V,Ct as _,E_ as a,Lu as b,ze as c,me as d,at as e,ae as f,op as g,zt as h,Xe as i,Je as j,Ze as k,t_ as l,yn as m,L_ as n,v_ as o,c_ as p,P_ as q,$_ as r,le as s,Bu as t,di as u,k_ as v,u_ as w,O_ as x,b_ as y,F_ as z};
