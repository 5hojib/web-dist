!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.0cfd29b7.js","./Folder-legacy.ce784a0f.js","./index-legacy.148099bc.js","./useUtil-legacy.2d313c84.js","./index-legacy.fdae79ad.js","./icon-legacy.2713e339.js","./Layout-legacy.0e65ff60.js","./video_box-legacy.981b2dbe.js","./index-legacy.2abeb9e7.js","./Paginator-legacy.76c47df3.js","./api-legacy.75d2b7a2.js","./EncodingSelect-legacy.d8dc630f.js","./FolderTree-legacy.fbcbeb63.js"],(function(n){"use strict";var t,r,i,o,c,a,l,u,s,g,f,d,b,h,m,y,j,p,w,x,v,A,$,S,k,C,z,M,E,I,O,P;return{setters:[function(e){t=e.e,r=e.X,i=e.v,o=e.az,c=e.aC,a=e.cs,l=e.S,u=e.aA,s=e.bJ,g=e.ad,f=e.a3,d=e.ac,b=e.aL,h=e.bN,m=e.b$,y=e.u,j=e.c,p=e.d,w=e.ct,x=e.cu,v=e.cv,A=e.al,$=e.m,S=e.N,k=e.V},function(e){C=e.b},function(e){z=e.u},function(e){M=e.d},function(e){E=e.p},function(e){I=e.g,O=e.O},function(e){P=e.M},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var _=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],F=function(e){if((0,M().isHide)(e.obj))return null;var n=z().setPathAs,y=C({id:1}).show;return t(P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(r,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:i()}},as:E,get href(){return e.obj.name},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){o((function(){c(!1),a(e.index,!0,!0)})),y(n,{props:e.obj})},get children(){return[t(r,{class:"name-box",spacing:"$1",get w(){return _[0].w},get children(){return[t(l,{get when(){return u()},get children(){return t(s,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){a(e.index,n.target.checked)}})}}),t(g,{class:"icon",boxSize:"$6",get color(){return f()},get as(){return I(e.obj)},mr:"$1","on:click":function(n){e.obj.type===O.IMAGE&&(n.stopPropagation(),n.preventDefault(),d.emit("gallery",e.obj.name))}}),t(b,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(b,{class:"size",get w(){return _[1].w},get textAlign(){return _[1].textAlign},get children(){return h(e.obj.size)}}),t(b,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return _[2].w},get textAlign(){return _[2].textAlign},get children(){return m(e.obj.modified)}})]}})}})};n("default",(function(){var n=y(),i=e(j(),2),a=i[0],g=i[1],f=e(j(!1),2),d=f[0],h=f[1];p((function(){a()&&w(a(),d())}));var m=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===a()?h(!d()):o((function(){g(e.name),h(!1)}))}}};return t(k,{class:"list",w:"$full",spacing:"$1",get children(){return[t(r,{class:"title",w:"$full",p:"$2",get children(){return[t(r,{get w(){return _[0].w},spacing:"$1",get children(){return[t(l,{get when(){return u()},get children(){return t(s,{get checked(){return x()},get indeterminate(){return v()},onChange:function(e){c(e.target.checked)}})}}),t(b,A((function(){return m(_[0])}),{get children(){return n("home.obj.".concat(_[0].name))}}))]}}),t(b,A({get w(){return _[1].w}},(function(){return m(_[1])}),{get children(){return n("home.obj.".concat(_[1].name))}})),t(b,A({get w(){return _[2].w}},(function(){return m(_[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(_[2].name))}}))]}}),t($,{get each(){return S.objs},children:function(e,n){return t(F,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
