(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{"AT+z":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=t("AyN7"),r=(t("OO+k"),function(n,l,t,u){return new(t||(t=Promise))(function(e,r){function o(n){try{c(u.next(n))}catch(l){r(l)}}function i(n){try{c(u.throw(n))}catch(l){r(l)}}function c(n){n.done?e(n.value):new t(function(l){l(n.value)}).then(o,i)}c((u=u.apply(n,l||[])).next())})}),o=function(n,l){var t,u,e,r,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return r={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function i(r){return function(i){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,u&&(e=2&r[0]?u.return:r[0]?u.throw||((e=u.return)&&e.call(u),0):u.next)&&!(e=e.call(u,r[1])).done)return e;switch(u=0,e&&(r=[2&r[0],e.value]),r[0]){case 0:case 1:e=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,u=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!e||r[1]>e[0]&&r[1]<e[3])){o.label=r[1];break}if(6===r[0]&&o.label<e[1]){o.label=e[1],e=r;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(r);break}e[2]&&o.ops.pop(),o.trys.pop();continue}r=l.call(n,o)}catch(i){r=[6,i],u=0}finally{t=e=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,i])}}},i=function(){function n(n,l,t){this.redditService=n,this.loadingController=l,this.toastController=t,this.redditFeeds=[]}return n.prototype.ngOnInit=function(){this.getFeed()},n.prototype.getFeed=function(){return r(this,void 0,void 0,function(){var n,l=this;return o(this,function(t){switch(t.label){case 0:return[4,this.loadingController.create({message:"Pulling Latest Popular Subreddit"})];case 1:return(n=t.sent()).present(),this.redditService.getConfig().subscribe(function(t){l.redditFeeds=t.body.data.children,n.dismiss(),console.log(l.redditFeeds,"data")}),[2]}})})},n.prototype.doRefresh=function(n){this.getFeed(),setTimeout(function(){n.target.complete()},2e3)},n.prototype.presentToast=function(){return r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this.toastController.create({message:"Page under construction",position:"top",duration:2e3})];case 1:return n.sent().present(),[2]}})})},n}(),c=function(){return function(){}}(),a=t("pMnS"),b=t("ra/t"),s=t("ntG5"),f=t("M9A9"),p=t("ZYCi"),d=t("tXrQ"),h=t("Ip0R"),g=t("CI40"),w=t("fHOL"),m=t("t/Na"),k=t("Eq7r"),y=t("P87I"),v=u.mb({encapsulation:0,styles:[[".thread-title[_ngcontent-%COMP%]{text-transform:capitalize}.refresher[_ngcontent-%COMP%]{background:#fff}.reddit-items[_ngcontent-%COMP%]:hover{background-color:#3171e04d;cursor:pointer}"]],data:{}});function x(n){return u.Fb(0,[(n()(),u.ob(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(n,l){n(l,0,0,u.qb(1,"",l.parent.context.$implicit.data.icon_img,""))})}function F(n){return u.Fb(0,[(n()(),u.ob(0,0,null,null,0,"img",[["src","https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"]],null,null,null,null,null))],null,null)}function P(n){return u.Fb(0,[(n()(),u.ob(0,0,null,null,21,"ion-item",[["class","reddit-items"]],null,[[null,"click"]],function(n,l,t){var e=!0,r=n.component;return"click"===l&&(e=!1!==u.yb(n,2).onClick(t)&&e),"click"===l&&(e=!1!==r.presentToast()&&e),e},b.J,b.n)),u.nb(1,49152,null,0,s.C,[u.h,u.k],null,null),u.nb(2,16384,null,0,f.a,[[2,p.l],d.a,u.k],null,null),(n()(),u.ob(3,0,null,0,5,"ion-avatar",[["slot","start"]],null,null,null,b.x,b.b)),u.nb(4,49152,null,0,s.b,[],null,null),(n()(),u.fb(16777216,null,0,1,null,x)),u.nb(6,16384,null,0,h.j,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(n()(),u.fb(16777216,null,0,1,null,F)),u.nb(8,16384,null,0,h.j,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(n()(),u.ob(9,0,null,0,12,"ion-label",[["text-wrap",""]],null,null,null,b.K,b.o)),u.nb(10,49152,null,0,s.I,[u.h,u.k],null,null),(n()(),u.ob(11,0,null,0,3,"ion-text",[["color","primary"]],null,null,null,b.P,b.t)),u.nb(12,49152,null,0,s.rb,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.ob(13,0,null,0,1,"h1",[["class","thread-title"]],null,null,null,null,null)),(n()(),u.Db(14,null,["",""])),(n()(),u.ob(15,0,null,0,3,"ion-text",[],null,null,null,b.P,b.t)),u.nb(16,49152,null,0,s.rb,[u.h,u.k],null,null),(n()(),u.ob(17,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),u.Db(18,null,["",""])),(n()(),u.ob(19,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.Db(20,null,["Subscribers: "," "])),u.Ab(21,1)],function(n,l){n(l,6,0,""!=l.context.$implicit.data.icon_img),n(l,8,0,""==l.context.$implicit.data.icon_img),n(l,12,0,"primary")},function(n,l){n(l,14,0,l.context.$implicit.data.title),n(l,18,0,l.context.$implicit.data.public_description);var t=u.Eb(l,20,0,n(l,21,0,u.yb(l.parent,0),l.context.$implicit.data.subscribers));n(l,20,0,t)})}function C(n){return u.Fb(0,[u.zb(0,h.d,[u.u]),(n()(),u.ob(1,0,null,null,11,"ion-header",[],null,null,null,b.H,b.l)),u.nb(2,49152,null,0,s.w,[u.h,u.k],null,null),(n()(),u.ob(3,0,null,0,9,"ion-toolbar",[],null,null,null,b.R,b.u)),u.nb(4,49152,null,0,s.vb,[u.h,u.k],null,null),(n()(),u.ob(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.A,b.e)),u.nb(6,49152,null,0,s.g,[],null,null),(n()(),u.ob(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.yb(n,9).onClick(t)&&e),e},b.y,b.c)),u.nb(8,49152,null,0,s.c,[u.h,u.k],null,null),u.nb(9,16384,null,0,g.a,[[2,p.l],[2,w.a],d.a,u.k],null,null),(n()(),u.ob(10,0,null,0,2,"ion-title",[],null,null,null,b.Q,b.v)),u.nb(11,49152,null,0,s.wb,[u.h,u.k],null,null),(n()(),u.Db(-1,0,["Popular Subreddits"])),(n()(),u.ob(13,0,null,null,9,"ion-content",[],null,null,null,b.F,b.j)),u.nb(14,49152,null,0,s.p,[u.h,u.k],null,null),(n()(),u.ob(15,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,t){var u=!0;return"ionRefresh"===l&&(u=!1!==n.component.doRefresh(t)&&u),u},b.N,b.q)),u.nb(16,49152,null,0,s.W,[u.h,u.k],null,null),(n()(),u.ob(17,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","Refreshing..."]],null,null,null,b.M,b.r)),u.nb(18,49152,null,0,s.X,[u.h,u.k],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),u.ob(19,0,null,0,3,"ion-list",[],null,null,null,b.L,b.p)),u.nb(20,49152,null,0,s.J,[u.h,u.k],null,null),(n()(),u.fb(16777216,null,0,1,null,P)),u.nb(22,278528,null,0,h.i,[u.N,u.K,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,18,0,"arrow-dropdown","Pull to refresh","circles","Refreshing..."),n(l,22,0,t.redditFeeds)},null)}function I(n){return u.Fb(0,[(n()(),u.ob(0,0,null,null,2,"app-reddit-page",[],null,null,null,C,v)),u.Bb(512,null,e.a,e.a,[m.c]),u.nb(2,114688,null,0,i,[e.a,k.a,y.a],null,null)],function(n,l){n(l,2,0)},null)}var S=u.kb("app-reddit-page",i,I,{},{},[]),T=t("gIcY"),R=t("95zI"),O=t("9opb"),j=t("apKv"),z=t("B4/3");t.d(l,"RedditPagePageModuleNgFactory",function(){return K});var K=u.lb(c,[],function(n){return u.vb([u.wb(512,u.j,u.ab,[[8,[a.a,S]],[3,u.j],u.x]),u.wb(4608,h.l,h.k,[u.u,[2,h.s]]),u.wb(4608,T.c,T.c,[]),u.wb(4608,R.a,R.a,[u.z,u.g]),u.wb(4608,O.a,O.a,[R.a,u.j,u.q]),u.wb(4608,j.a,j.a,[R.a,u.j,u.q]),u.wb(1073742336,h.b,h.b,[]),u.wb(1073742336,T.b,T.b,[]),u.wb(1073742336,T.a,T.a,[]),u.wb(1073742336,z.a,z.a,[]),u.wb(1073742336,p.m,p.m,[[2,p.s],[2,p.l]]),u.wb(1073742336,c,c,[]),u.wb(1024,p.j,function(){return[[{path:"",component:i}]]},[])])})}}]);