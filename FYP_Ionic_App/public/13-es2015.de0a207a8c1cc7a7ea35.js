(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"uP/6":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class r{}var e=u("pMnS"),i=u("oBZk"),t=u("ZZ/e"),a=u("iInd"),b=u("SVse"),s=u("XNvx");class c{constructor(l,n,u){this.authService=l,this.router=n,this.loadingCtrl=u,this.isLoading=!1,this.isLogin=!0}ngOnInit(){alert(this.authService.userIsAuthenticated)}logout(){this.isLoading=!0,this.authService.logout(),this.loadingCtrl.create({keyboardClose:!0,message:"Logging out..."}).then(l=>{l.present(),setTimeout(()=>{this.isLoading=!1,l.dismiss(),this.router.navigateByUrl("/login")},1500)})}}var p=o.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,6,"ion-header",[],null,null,null,i.u,i.f)),o.ob(1,49152,null,0,t.z,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.D,i.o)),o.ob(3,49152,null,0,t.Ab,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,2,"ion-title",[],null,null,null,i.C,i.n)),o.ob(5,49152,null,0,t.yb,[o.h,o.k,o.x],null,null),(l()(),o.Eb(-1,0,["Revolute Fitness"])),(l()(),o.pb(7,0,null,null,27,"ion-content",[],null,null,null,i.s,i.d)),o.ob(8,49152,null,0,t.s,[o.h,o.k,o.x],null,null),(l()(),o.pb(9,0,null,0,25,"ion-grid",[],null,null,null,i.t,i.e)),o.ob(10,49152,null,0,t.y,[o.h,o.k,o.x],null,null),(l()(),o.pb(11,0,null,0,23,"ion-row",[],null,null,null,i.y,i.j)),o.ob(12,49152,null,0,t.hb,[o.h,o.k,o.x],null,null),(l()(),o.pb(13,0,null,0,21,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,i.r,i.c)),o.ob(14,49152,null,0,t.r,[o.h,o.k,o.x],null,null),(l()(),o.pb(15,0,null,0,2,"ion-button",[["color","dark"],["expand","full"],["size","large"]],null,null,null,i.q,i.b)),o.ob(16,49152,null,0,t.i,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),o.Eb(-1,0,["View Workouts"])),(l()(),o.pb(18,0,null,0,4,"ion-button",[["color","primary"],["expand","full"],["routerLink","/record-workout"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var r=!0;return"click"===n&&(r=!1!==o.Ab(l,20).onClick()&&r),"click"===n&&(r=!1!==o.Ab(l,21).onClick(u)&&r),r}),i.q,i.b)),o.ob(19,49152,null,0,t.i,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),o.ob(20,16384,null,0,a.n,[a.m,a.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.ob(21,737280,null,0,t.Jb,[b.g,t.Gb,o.k,a.m,[2,a.n]],null,null),(l()(),o.Eb(-1,0,["Record Workout"])),(l()(),o.pb(23,0,null,0,2,"ion-button",[["color","dark"],["expand","full"],["size","large"]],null,null,null,i.q,i.b)),o.ob(24,49152,null,0,t.i,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),o.Eb(-1,0,["View Stats"])),(l()(),o.pb(26,0,null,0,2,"ion-button",[["color","primary"],["expand","full"],["size","large"]],null,null,null,i.q,i.b)),o.ob(27,49152,null,0,t.i,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),o.Eb(-1,0,["Exercise Analysis"])),(l()(),o.pb(29,0,null,0,2,"ion-button",[["color","dark"],["expand","full"],["size","large"]],null,null,null,i.q,i.b)),o.ob(30,49152,null,0,t.i,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),o.Eb(-1,0,["Settings"])),(l()(),o.pb(32,0,null,0,2,"ion-button",[["color","primary"],["expand","full"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.logout()&&o),o}),i.q,i.b)),o.ob(33,49152,null,0,t.i,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),o.Eb(-1,0,["Logout"]))],(function(l,n){l(n,16,0,"dark","full","large"),l(n,19,0,"primary","full","large"),l(n,20,0,"/record-workout"),l(n,21,0),l(n,24,0,"dark","full","large"),l(n,27,0,"primary","full","large"),l(n,30,0,"dark","full","large"),l(n,33,0,"primary","full","large")}),null)}function k(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,1,"app-dashboard",[],null,null,null,d,p)),o.ob(1,114688,null,0,c,[s.a,a.m,t.Eb],null,null)],(function(l,n){l(n,1,0)}),null)}var h=o.lb("app-dashboard",c,k,{},{},[]),g=u("s7LF");class x{}u.d(n,"DashboardPageModuleNgFactory",(function(){return y}));var y=o.mb(r,[],(function(l){return o.xb([o.yb(512,o.j,o.Y,[[8,[e.a,h]],[3,o.j],o.v]),o.yb(4608,b.i,b.h,[o.s,[2,b.o]]),o.yb(4608,g.t,g.t,[]),o.yb(4608,t.a,t.a,[o.x,o.g]),o.yb(4608,t.Fb,t.Fb,[t.a,o.j,o.p]),o.yb(4608,t.Ib,t.Ib,[t.a,o.j,o.p]),o.yb(1073742336,b.b,b.b,[]),o.yb(1073742336,g.s,g.s,[]),o.yb(1073742336,g.h,g.h,[]),o.yb(1073742336,t.Cb,t.Cb,[]),o.yb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),o.yb(1073742336,x,x,[]),o.yb(1073742336,r,r,[]),o.yb(1024,a.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);