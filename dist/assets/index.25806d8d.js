import{e as t,m as C,V as B,k as y,Z as z,$ as T,br as d,K as w,J as x,a as f,u as h,L as M,w as W,v as L,S as p,ad as E,bs as _,c as U,bt as I,X as u,R as i,ah as R,A as n,C as r,bu as Y,bv as H,bw as N,ao as j,D,a2 as b,bx as F,by as X,n as J,aY as K,aQ as Q,aR as Z,aS as q,aT as G,aU as e1,ag as v,aW as O,aX as P,bz as t1,bA as n1,bB as r1}from"./index.8fe5fa95.js";import{d as o1,e as a1,f as s1,g as i1,h as c1,i as l1,j as m1,k as u1,l as g1,b as d1,m as h1,n as _1,c as p1}from"./index.d97e2bda.js";import{A as E1,d as f1,e as I1,f as v1,g as $1}from"./index.768fe2c8.js";var s=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e))(s||{}),A1=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(A1||{});const S1=e=>{const o=y(()=>{if(!z.is_admin(T())){if(e.role===void 0)return!1;if(e.role===d.GENERAL&&!z.is_general(T()))return!1}return!0});return t(x,{get fallback(){return t(z1,e)},get children(){return[t(w,{get when(){return!o()},children:null}),t(w,{get when(){return e.children},get children(){return t(T1,e)}})]}})},z1=e=>{const{pathname:o}=f(),a=h(),c=()=>o()===e.to;return t(E1,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:M,get href(){return e.to},onClick:l=>{var S;if(k(),e.refresh){(S=l.stopPropagation)==null||S.call(l);let g=e.to;g.startsWith("http")||(g=W(g)),window.open(g,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":L(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return a(e.title)}})]}})},T1=e=>{const{pathname:o}=f(),[a,c]=U(o().includes(e.to)),l=h();return t(i,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:L()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(u,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return l(e.title)}})]}}),t(E,{as:f1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(i,{pl:"$2",get children(){return t($,{get items(){return e.children}})}})}})]}})},$=e=>t(B,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(C,{get each(){return e.items},children:o=>t(S1,o)})}});function w1(e){return R({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)}function b1(e){return R({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const m=n(()=>r(()=>import("./Common.51a304a1.js"),["assets/Common.51a304a1.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js","assets/SettingItem.c5d1076b.js","assets/item_type.be442da4.js","assets/index.768fe2c8.js","assets/ResponsiveGrid.5fcfd4c9.js"])),A=[{title:"manage.sidemenu.profile",icon:o1,to:"/@manage",role:d.GUEST,component:n(()=>r(()=>import("./Profile.50cb494c.js"),["assets/Profile.50cb494c.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js","assets/index.768fe2c8.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:a1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:s1,to:"/@manage/settings/site",component:()=>t(m,{get group(){return s.SITE}})},{title:"manage.sidemenu.style",icon:i1,to:"/@manage/settings/style",component:()=>t(m,{get group(){return s.STYLE}})},{title:"manage.sidemenu.preview",icon:c1,to:"/@manage/settings/preview",component:()=>t(m,{get group(){return s.PREVIEW}})},{title:"manage.sidemenu.global",icon:l1,to:"/@manage/settings/global",component:()=>t(m,{get group(){return s.GLOBAL}})},{title:"manage.sidemenu.sso",icon:Y,to:"/@manage/settings/sso",component:()=>t(m,{get group(){return s.SSO}})},{title:"manage.sidemenu.other",icon:m1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.fa9acd57.js"),["assets/Other.fa9acd57.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js","assets/useUtil.99544e49.js","assets/api.b839b245.js","assets/SettingItem.c5d1076b.js","assets/item_type.be442da4.js","assets/index.768fe2c8.js"]))}]},{title:"manage.sidemenu.tasks",icon:b1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.upload",icon:u1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.983b54ba.js"),["assets/Upload.983b54ba.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js","assets/Tasks.b752067d.js","assets/Paginator.e24cdb69.js","assets/index.768fe2c8.js"]))},{title:"manage.sidemenu.copy",icon:H,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.305303a8.js"),["assets/Copy.305303a8.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js","assets/Tasks.b752067d.js","assets/Paginator.e24cdb69.js","assets/index.768fe2c8.js"]))}]},{title:"manage.sidemenu.users",icon:g1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.3e2a7b6e.js"),["assets/Users.3e2a7b6e.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js","assets/DeletePopover.7f9a2afa.js","assets/Wether.14807a6e.js"]))},{title:"manage.sidemenu.storages",icon:I1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.3a9f256b.js"),["assets/Storages.3a9f256b.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js","assets/DeletePopover.7f9a2afa.js"]))},{title:"manage.sidemenu.metas",icon:w1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.db9c64c7.js"),["assets/Metas.db9c64c7.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js","assets/DeletePopover.7f9a2afa.js","assets/Wether.14807a6e.js"]))},{title:"manage.sidemenu.indexes",icon:d1,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.1987f19b.js"),["assets/indexes.1987f19b.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/api.b839b245.js","assets/Common.51a304a1.js","assets/index.d97e2bda.js","assets/SettingItem.c5d1076b.js","assets/item_type.be442da4.js","assets/index.768fe2c8.js","assets/ResponsiveGrid.5fcfd4c9.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:v1,component:n(()=>r(()=>import("./backup-restore.eeca85d7.js"),["assets/backup-restore.eeca85d7.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js"]))},{title:"manage.sidemenu.about",icon:h1,to:"/@manage/about",role:d.GUEST,component:n(()=>r(()=>import("./About.d77ac9aa.js"),["assets/About.d77ac9aa.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/index.d97e2bda.js","assets/EncodingSelect.29207360.js","assets/useUtil.99544e49.js","assets/api.b839b245.js"]))},{title:"manage.sidemenu.home",icon:N,to:"/",role:d.GUEST,refresh:!0}],{isOpen:C1,onOpen:L1,onClose:k}=j(),R1=()=>{const e=h(),{to:o}=f();return t(i,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return D("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(u,{spacing:"$2",get children(){return[t(b,{"aria-label":"menu",get icon(){return t($1,{})},display:{"@sm":"none"},onClick:L1,size:"sm"}),t(_,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(u,{spacing:"$1",get children(){return t(b,{"aria-label":"logout",get icon(){return t(F,{})},onClick:()=>{X(),J.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(K,{get opened(){return C1()},placement:"left",onClose:k,get children(){return[t(Q,{}),t(Z,{get children(){return[t(q,{}),t(G,{color:"$info9",get children(){return e("manage.title")}}),t(e1,{get children(){return[t($,{items:A}),t(v,{get children(){return t(u,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(P,{})]}})}})]}})]}})]}})]}})},D1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.86325bf8.js"),["assets/AddOrEdit.86325bf8.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.5fcfd4c9.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.86325bf8.js"),["assets/AddOrEdit.86325bf8.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.5fcfd4c9.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.93b4464d.js"),["assets/AddOrEdit.93b4464d.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/FolderTree.4bd5582e.js","assets/index.768fe2c8.js","assets/api.b839b245.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.93b4464d.js"),["assets/AddOrEdit.93b4464d.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/FolderTree.4bd5582e.js","assets/index.768fe2c8.js","assets/api.b839b245.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.f555464c.js"),["assets/AddOrEdit.f555464c.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/FolderTree.4bd5582e.js","assets/index.768fe2c8.js","assets/api.b839b245.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.f555464c.js"),["assets/AddOrEdit.f555464c.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css","assets/FolderTree.4bd5582e.js","assets/index.768fe2c8.js","assets/api.b839b245.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.d4315271.js"),["assets/2fa.d4315271.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.91f6728d.js"),["assets/Messenger.91f6728d.js","assets/index.8fe5fa95.js","assets/index.d81a3e4b.css"]))}],O1=e=>(_1(e.title),t(v,{h:"$full",get children(){return t(_,{get children(){return e.title}})}})),V=(e,o=[])=>(e.forEach(a=>{a.children?V(a.children,o):o.push({to:t1(a.to,"/@manage"),component:a.component||(()=>t(O1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),P1=V(A).concat(D1),k1=()=>{const e=h();return p1(()=>e("manage.title")),t(i,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(R1,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(i,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return D("$background","$neutral2")()},overflowY:"auto",get children(){return[t($,{items:A}),t(v,{get children(){return t(u,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(P,{})]}})}})]}}),t(i,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(n1,{get children(){return t(C,{each:P1,children:o=>t(r1,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},x1=Object.freeze(Object.defineProperty({__proto__:null,default:k1},Symbol.toStringTag,{value:"Module"}));export{A1 as F,s as G,x1 as i};
