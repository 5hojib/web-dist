!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,i=[],a=!0,o=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(l){o=!0,c=l}finally{try{a||null==t.return||t.return()}finally{if(o)throw c}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.4b6a7c91.js","./useUtil-legacy.59e8f5d9.js","./File-legacy.3ab288a9.js","./api-legacy.c36b6d54.js","./icon-legacy.26c9eacd.js","./index-legacy.c1aad54d.js","./index-legacy.2fc630a7.js","./Layout-legacy.0b9de204.js","./Markdown-legacy.4c8b7a18.js","./index-legacy.326f454c.js","./FolderTree-legacy.b25c2cea.js"],(function(e){"use strict";var t,r,c,i,a,o,l,u,f,s,y;return{setters:[function(n){t=n.d,r=n.e,c=n.f,i=n.a0,a=n.B,o=n.bm,l=n.cz,u=n.o,f=n.cy},function(n){s=n.a},function(n){y=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),d=n(r(!1),2),g=d[0],m=d[1],p=n(r(!1),2),b=p[0],h=p[1],j=s().currentObjLink;return c(y,{get children(){return c(i,{spacing:"$2",get children(){return[c(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(o,"/i/").concat(l(encodeURIComponent(u.raw_url)+"/"+f(encodeURIComponent(u.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),c(a,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){h(!0)},get children(){return e("home.preview.".concat(b()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
