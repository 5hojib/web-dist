!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,u=[],i=!0,a=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(u.push(r.value),!n||u.length!==n);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(a)throw o}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}System.register(["./index-legacy.f49ee66c.js","./Layout-legacy.3b954ac5.js","./index-legacy.37721637.js","./api-legacy.77639e17.js","./index-legacy.08e73649.js","./index-legacy.a94205e7.js","./FolderTree-legacy.4c0964e2.js"],(function(n){"use strict";var e,r,o,u,i,a;return{setters:[function(t){e=t.v,r=t.bX,o=t.o,u=t.a8},function(t){i=t.d,a=t.f},function(){},function(){},function(){},function(){},function(){}],execute:function(){n("default",(function(){var n=t(i(),1)[0];return e(u,{get loading(){return n.loading},get children(){return e(a,{get children(){var t;return null===(t=n())||void 0===t?void 0:t.content},get ext(){return r(o.obj.name)}})}})}))}}}))}();
