!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],c=!0,u=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.49ef9e4c.js","./index-legacy.97b5fe14.js","./index-legacy.7670c199.js"],(function(n,t){"use strict";var r,o,i,c,u,a,l,s,g,m,d,f,p,h,v,y,b,$,z,E,A,w,S,C,j,I,x,k,O,L,T,P,R,_,B,D,G,M,U,Y,N,V,W,H,X,F,Z,q,J,K,Q,ee,ne,te,re,oe,ie,ce,ue,ae,le;return{setters:[function(e){r=e.v,o=e.P,i=e.a7,c=e.x,u=e.ac,a=e.m,l=e.br,s=e.a5,g=e.a4,m=e.u,d=e.f,f=e.V,p=e.W,h=e.U,v=e.B,y=e.ao,b=e.bs,$=e.w,z=e.bt,E=e.aa,A=e.C,w=e.as,S=e.$,C=e.a0,j=e.bu,I=e.bv,x=e.bw,k=e.ay,O=e.a1,L=e.ae,T=e.bx,P=e.by,R=e.n,_=e.b4,B=e.aY,D=e.aZ,G=e.a_,M=e.a$,U=e.b0,Y=e.ar,N=e.b2,V=e.b3,W=e.bz,H=e.bA,X=e.bB},function(e){F=e.d,Z=e.e,q=e.b,J=e.f,K=e.g,Q=e.h,ee=e.i,ne=e.j,te=e.k,re=e.l,oe=e.c},function(e){ie=e.A,ce=e.d,ue=e.e,ae=e.f,le=e.g}],execute:function(){var se=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e}(se||{})),ge=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(ge||{})),me=function(e){var n=c((function(){if(!u.is_admin(a())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!u.is_general(a()))return!1}return!0}));return r(g,{get fallback(){return r(de,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r(fe,e)}})]}})},de=function(e){var n=m().pathname,t=d(),o=function(){return n()===e.to};return r(ie,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(n){if(ze(),e.refresh){var t;null===(t=n.stopPropagation)||void 0===t||t.call(n);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(v,{get when(){return e.icon},get children(){return r(y,{mr:"$2",get as(){return e.icon}})}}),r(b,{get children(){return t(e.title)}})]}})},fe=function(n){var t=m().pathname,o=e($(t().includes(n.to)),2),i=o[0],c=o[1],u=d();return r(A,{w:"$full",get children(){return[r(z,{justifyContent:"space-between",onClick:function(){c(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(E,{get children(){return[r(v,{get when(){return n.icon},get children(){return r(y,{mr:"$2",get as(){return n.icon}})}}),r(b,{get children(){return u(n.title)}})]}}),r(y,{as:ce,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(v,{get when(){return i()},get children(){return r(A,{pl:"$2",get children(){return r(pe,{get items(){return n.children}})}})}})]}})},pe=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(me,e)}})}})};var he=S((function(){return C((function(){return t.import("./Common-legacy.9d082ca9.js")}),void 0)})),ve=[{title:"manage.sidemenu.profile",icon:F,to:"/@manage",role:l.GUEST,component:S((function(){return C((function(){return t.import("./Profile-legacy.a4096b3d.js")}),void 0)}))},{title:"manage.sidemenu.users",icon:Z,to:"/@manage/users",component:S((function(){return C((function(){return t.import("./Users-legacy.02e7f6b4.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:ue,to:"/@manage/storages",component:S((function(){return C((function(){return t.import("./Storages-legacy.9956f381.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:function(e){return w({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)},to:"/@manage/metas",component:S((function(){return C((function(){return t.import("./Metas-legacy.ebc9e29b.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:q,to:"/@manage/indexes",component:S((function(){return C((function(){return t.import("./indexes-legacy.bf14f41f.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:ae,component:S((function(){return C((function(){return t.import("./backup-restore-legacy.ccc37348.js")}),void 0)}))},{title:"manage.sidemenu.tasks",icon:function(e){return w({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@manage/tasks",children:[{title:"manage.sidemenu.upload",icon:J,to:"/@manage/tasks/upload",component:S((function(){return C((function(){return t.import("./Upload-legacy.426eac44.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:j,to:"/@manage/tasks/copy",component:S((function(){return C((function(){return t.import("./Copy-legacy.43a9d445.js")}),void 0)}))}]},{title:"manage.sidemenu.settings",icon:K,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:Q,to:"/@manage/settings/site",component:function(){return r(he,{get group(){return se.SITE}})}},{title:"manage.sidemenu.style",icon:ee,to:"/@manage/settings/style",component:function(){return r(he,{get group(){return se.STYLE}})}},{title:"manage.sidemenu.preview",icon:ne,to:"/@manage/settings/preview",component:function(){return r(he,{get group(){return se.PREVIEW}})}},{title:"manage.sidemenu.global",icon:te,to:"/@manage/settings/global",component:function(){return r(he,{get group(){return se.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:I,to:"/@manage/settings/sso",component:function(){return r(he,{get group(){return se.SSO}})}}]},{title:"manage.sidemenu.home",icon:x,to:"/",role:l.GUEST,refresh:!0}],ye=k(),be=ye.isOpen,$e=ye.onOpen,ze=ye.onClose,Ee=function(){var e=d(),n=m().to;return r(A,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return O("$background","$neutral2")()},get children(){return[r(z,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(E,{spacing:"$2",get children(){return[r(L,{"aria-label":"menu",get icon(){return r(le,{})},display:{"@sm":"none"},onClick:$e,size:"sm"}),r(b,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/@manage")},get children(){return e("manage.title")}})]}}),r(E,{spacing:"$1",get children(){return r(L,{"aria-label":"logout",get icon(){return r(T,{})},onClick:function(){P(),R.success(e("manage.logout_success")),n("/@login?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(_,{get opened(){return be()},placement:"left",onClose:ze,get children(){return[r(B,{}),r(D,{get children(){return[r(G,{}),r(M,{color:"$info9",get children(){return e("manage.title")}}),r(U,{get children(){return[r(pe,{items:ve}),r(Y,{get children(){return r(E,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(N,{}),r(V,{})]}})}})]}})]}})]}})]}})},Ae=[{to:"/storages/add",component:S((function(){return C((function(){return t.import("./AddOrEdit-legacy.d32d88a4.js")}),void 0)}))},{to:"/storages/edit/:id",component:S((function(){return C((function(){return t.import("./AddOrEdit-legacy.d32d88a4.js")}),void 0)}))},{to:"/users/add",component:S((function(){return C((function(){return t.import("./AddOrEdit-legacy.361e4cdf.js")}),void 0)}))},{to:"/users/edit/:id",component:S((function(){return C((function(){return t.import("./AddOrEdit-legacy.361e4cdf.js")}),void 0)}))},{to:"/metas/add",component:S((function(){return C((function(){return t.import("./AddOrEdit-legacy.dae66e10.js")}),void 0)}))},{to:"/metas/edit/:id",component:S((function(){return C((function(){return t.import("./AddOrEdit-legacy.dae66e10.js")}),void 0)}))},{to:"/2fa",component:S((function(){return C((function(){return t.import("./2fa-legacy.0e23c9b8.js")}),void 0)}))},{to:"/messenger",component:S((function(){return C((function(){return t.import("./Messenger-legacy.561e975e.js")}),void 0)}))}],we=function(e){return re(e.title),r(Y,{h:"$full",get children(){return r(b,{get children(){return e.title}})}})},Se=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:W(n.to,"/@manage"),component:n.component||function(){return r(we,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(ve).concat(Ae),Ce=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=d();return oe((function(){return e("manage.title")})),r(A,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(Ee,{}),r(z,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(A,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return O("$background","$neutral2")()},overflowY:"auto",get children(){return[r(pe,{items:ve}),r(Y,{get children(){return r(E,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(N,{}),r(V,{})]}})}})]}}),r(A,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(H,{get children(){return r(o,{each:Se,children:function(e){return r(X,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",Ce)}}}))}();
