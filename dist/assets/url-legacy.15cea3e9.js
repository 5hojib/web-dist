!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.49ef9e4c.js","./Layout-legacy.aa3f6c17.js","./File-legacy.f182a395.js","./index-legacy.97b5fe14.js","./api-legacy.636b863b.js","./index-legacy.852ad877.js","./index-legacy.7670c199.js","./FolderTree-legacy.33e970d7.js","./icon-legacy.57994fd0.js"],(function(e){"use strict";var t,r,i,o,u,c,a,l;return{setters:[function(n){t=n.y,r=n.f,i=n.v,o=n.L,u=n.a8},function(n){c=n.d,a=n.e},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(c(),1)[0];function f(){var n,t=null===(n=e())||void 0===n?void 0:n.content,r=a(t).text;t&&window.open(r(),"_blank")}t((function(){f()}));var y=r();return i(u,{get loading(){return e.loading},get children(){return i(l,{get children(){return i(o,{onClick:f,get children(){return y("home.preview.open_in_new_window")}})}})}})}))}}}))}();
