(function(){"use strict";var e={6122:function(e,t,a){var n=a(5102),r=a(9269);function i(e,t,a,n,i,l){const o=(0,r.up)("q-btn"),s=(0,r.up)("router-link"),c=(0,r.up)("q-toolbar-title"),u=(0,r.up)("q-toolbar"),d=(0,r.up)("q-header"),p=(0,r.up)("q-item-label"),f=(0,r.up)("q-item"),m=(0,r.up)("q-list"),h=(0,r.up)("q-drawer"),g=(0,r.up)("router-view"),w=(0,r.up)("q-page-container"),v=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.j4)(v,{view:"lHh Lpr lFf"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{elevated:"",class:"glossy"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(o,{flat:"",dense:"",round:"",onClick:t[0]||(t[0]=e=>n.leftDrawerOpen=!n.leftDrawerOpen),"aria-label":"Menu",icon:"menu"}),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Rick and Morty")])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(h,{modelValue:n.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=e=>n.leftDrawerOpen=e),"show-if-above":"",bordered:"",class:"bg-grey-2"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{header:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Pages")])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{to:"/characters-list"},{default:(0,r.w5)((()=>[(0,r.Uk)("Characters List")])),_:1})])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{to:"/episodes-list"},{default:(0,r.w5)((()=>[(0,r.Uk)("Episodes List")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g)])),_:1})])),_:1})}var l=a(6237),o={setup(){return{leftDrawerOpen:(0,l.iH)(!1)}}},s=a(7617),c=a(2446),u=a(7454),d=a(366),p=a(5847),f=a(8623),m=a(5007),h=a(2146),g=a(3712),w=a(5246),v=a(6974),_=a(1410),y=a.n(_);const x=(0,s.Z)(o,[["render",i]]);var Z=x;y()(o,"components",{QLayout:c.Z,QHeader:u.Z,QToolbar:d.Z,QBtn:p.Z,QToolbarTitle:f.Z,QDrawer:m.Z,QList:h.Z,QItemLabel:g.Z,QItem:w.Z,QPageContainer:v.Z});var k=a(2201),C=a.p+"img/rnmmain.9641d3b0.png";const b=(0,r._)("img",{alt:"Rick and Morty",src:C},null,-1);function O(e,t,a,n,i,l){const o=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(o,{class:"flex flex-center"},{default:(0,r.w5)((()=>[b])),_:1})}var W={name:"LayoutDefault",setup(){return{leftDrawerOpen:(0,l.iH)(!1)}}},q=a(8906);const P=(0,s.Z)(W,[["render",O]]);var D=P;y()(W,"components",{QPage:q.Z});var Q=a(3201);const L=(0,r._)("h3",null,"Characters",-1),z={class:"flex flex-center row q-gutter-md"},H=["src"],j={class:"text-h6"},E={class:"text-subtitle2"},U={class:"character-link"},V={class:"pagination"};function A(e,t,a,n,i,l){const o=(0,r.up)("q-card-section"),s=(0,r.up)("router-link"),c=(0,r.up)("q-card"),u=(0,r.up)("q-pagination"),d=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(d,{class:"flex flex-center column"},{default:(0,r.w5)((()=>[L,(0,r._)("div",z,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.characters,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(c,{class:"my-card"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:e.image},null,8,H),(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r._)("div",j,(0,Q.zw)(e.name),1),(0,r._)("div",E,(0,Q.zw)(e.origin.name),1)])),_:2},1024),(0,r._)("div",U,[(0,r.Wm)(s,{to:"/character/"+e.id},null,8,["to"])])])),_:2},1024)])))),128))]),(0,r._)("div",V,[(0,r.Wm)(u,{modelValue:n.current,"onUpdate:modelValue":t[0]||(t[0]=e=>n.current=e),max:i.maxPages,"max-pages":"5","direction-links":"",flat:"",color:"grey","active-color":"primary",onClick:l.changePage},null,8,["modelValue","max","onClick"])])])),_:1})}var S=a(2965);S.Z.defaults.withCredentials=!0;var T={getCharacterList(e){return(0,S.Z)({method:"get",url:"https://rickandmortyapi.com/api/character/?page="+e,withCredentials:!1,headers:{"Access-Control-Allow-Origin":"true"}}).then((e=>e.data))},getSingleCharacter(e){return(0,S.Z)({method:"get",url:"https://rickandmortyapi.com/api/character/"+e,withCredentials:!1,headers:{"Access-Control-Allow-Origin":"true"}}).then((e=>e.data))}};const M=1;async function K(e){let t;return await T.getCharacterList(e).then((e=>{t=e.results})),t}async function Y(){let e;return await T.getCharacterList().then((t=>{e=t.info.pages})),e}var F={name:"LayoutDefault",methods:{changePage:async function(){console.log(this.current),this.characters=await K(this.current)}},data(){return{characters:[],maxPages:0}},async created(){this.characters=await K(M),this.maxPages=await Y(),console.log(this.characters)},setup(){return{leftDrawerOpen:(0,l.iH)(!1),current:(0,l.iH)(M)}}},I=a(8055),R=a(9501),B=a(3139);const $=(0,s.Z)(F,[["render",A]]);var G=$;y()(F,"components",{QPage:q.Z,QCard:I.Z,QCardSection:R.Z,QPagination:B.Z});const J={class:"flex flex-center"},N=["src","alt"];function X(e,t,a,n,i,l){const o=(0,r.up)("router-link"),s=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(s,{class:"flex flex-center column"},{default:(0,r.w5)((()=>[(0,r._)("div",J,[(0,r._)("div",null,[(0,r._)("img",{src:i.character?.image,alt:i.character?.name},null,8,N),(0,r._)("h3",null,(0,Q.zw)(i.character?.name),1),(0,r._)("p",null,(0,Q.zw)(i.character?.species),1),(0,r._)("p",null,(0,Q.zw)(i.character?.gender),1),(0,r._)("p",null,(0,Q.zw)(i.character?.origin.name),1),(0,r._)("p",null,(0,Q.zw)(i.character?.location.name),1),(0,r._)("p",null,(0,Q.zw)(i.character?.species),1),(0,r._)("ul",null,[(0,r._)("li",null,"Espisodes where you can see "+(0,Q.zw)(i.character?.name)+":",1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.episodes,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t},[(0,r.Wm)(o,{to:"/episode/"+e.id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,Q.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])])])])),_:1})}a(4719);S.Z.defaults.withCredentials=!0;var ee={getEpisodes(e){return(0,S.Z)({method:"get",url:"https://rickandmortyapi.com/api/episode?page="+e,withCredentials:!1,headers:{"Access-Control-Allow-Origin":"true"}}).then((e=>e.data))},getEpisode(e){return(0,S.Z)({method:"get",url:"https://rickandmortyapi.com/api/episode/"+e,withCredentials:!1,headers:{"Access-Control-Allow-Origin":"true"}}).then((e=>e.data))}};async function te(e){let t;return await T.getSingleCharacter(e).then((e=>{t=e})),t}async function ae(e){let t;return await ee.getEpisode(e).then((e=>{t=e})),t}var ne={name:"LayoutDefault",data(){return{character:null,episodes:[]}},async created(){const e=(0,k.yj)();this.character=await te(e.params.id);for(let t=0;t<this.character.episode.length;t++)this.episodes.push(await ae(this.character.episode[t].match(/(?<=api\/episode\/).*$/)[0]))},setup(){return{leftDrawerOpen:(0,l.iH)(!1)}}};const re=(0,s.Z)(ne,[["render",X]]);var ie=re;y()(ne,"components",{QPage:q.Z});const le=(0,r._)("h3",null,"Episodes",-1),oe={class:"flex flex-center row q-gutter-md"},se={class:"text-h6"},ce={class:"text-subtitle2"},ue={class:"character-link"},de={class:"pagination"};function pe(e,t,a,n,i,l){const o=(0,r.up)("q-card-section"),s=(0,r.up)("router-link"),c=(0,r.up)("q-card"),u=(0,r.up)("q-pagination"),d=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(d,{class:"flex flex-center column"},{default:(0,r.w5)((()=>[le,(0,r._)("div",oe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.episodes,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(c,{class:"my-card"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r._)("div",se,(0,Q.zw)(e.name),1),(0,r._)("div",ce,(0,Q.zw)(e.episode),1)])),_:2},1024),(0,r._)("div",ue,[(0,r.Wm)(s,{to:"/episode/"+e.id},null,8,["to"])])])),_:2},1024)])))),128))]),(0,r._)("div",de,[(0,r.Wm)(u,{modelValue:n.current,"onUpdate:modelValue":t[0]||(t[0]=e=>n.current=e),max:i.maxPages,"max-pages":"5","direction-links":"",flat:"",color:"grey","active-color":"primary",onClick:l.changePage},null,8,["modelValue","max","onClick"])])])),_:1})}const fe=1;async function me(e){let t;return await ee.getEpisodes(e).then((e=>{t=e.results})),t}async function he(){let e;return await ee.getEpisodes().then((t=>{e=t.info.pages})),e}var ge={name:"LayoutDefault",methods:{changePage:async function(){this.episodes=await me(this.current)}},data(){return{episodes:[],maxPages:0}},async created(){this.episodes=await me(fe),this.maxPages=await he()},setup(){return{leftDrawerOpen:(0,l.iH)(!1),current:(0,l.iH)(fe)}}};const we=(0,s.Z)(ge,[["render",pe]]);var ve=we;y()(ge,"components",{QPage:q.Z,QCard:I.Z,QCardSection:R.Z,QPagination:B.Z});const _e={class:"flex flex-center"};function ye(e,t,a,n,i,l){const o=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(o,{class:"flex flex-center column"},{default:(0,r.w5)((()=>[(0,r._)("div",_e,[(0,r._)("div",null,[(0,r._)("h3",null,(0,Q.zw)(i.episode?.name),1),(0,r._)("p",null,(0,Q.zw)(i.episode?.air_date),1),(0,r._)("p",null,(0,Q.zw)(i.episode?.episode),1)])])])),_:1})}async function xe(e){let t;return await ee.getEpisode(e).then((e=>{t=e})),t}var Ze={name:"LayoutDefault",data(){return{episode:null}},async created(){const e=(0,k.yj)();this.episode=await xe(e.params.id),console.log(this.episode)},setup(){return{leftDrawerOpen:(0,l.iH)(!1)}}};const ke=(0,s.Z)(Ze,[["render",ye]]);var Ce=ke;y()(Ze,"components",{QPage:q.Z});const be=[{path:"/",name:"Home",component:D},{path:"/characters-list",name:"CharactersList",component:G},{path:"/character/:id",name:"SingleCharacter",component:ie},{path:"/episodes-list",name:"EpisodesList",component:ve},{path:"/episode/:id",name:"SingleEpisode",component:Ce}],Oe=(0,k.p7)({history:(0,k.PO)(),routes:be});var We=Oe,qe=a(6957),Pe=a(8372),De={config:{},plugins:{}};(0,n.ri)(Z).use(Pe.Z,De).use(We).use(qe.ZP).mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,i){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var o=!0,s=0;s<n.length;s++)(!1&i||l>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(o=!1,i<l&&(l=i));if(o){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,l=n[0],o=n[1],s=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(s)var u=s(a)}for(t&&t(n);c<l.length;c++)i=l[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkengaged_challenge"]=self["webpackChunkengaged_challenge"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6122)}));n=a.O(n)})();
//# sourceMappingURL=app.0cb130ed.js.map