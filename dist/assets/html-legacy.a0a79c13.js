!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,u,i=[],o=!0,l=!1;try{for(n=n.call(t);!(o=(e=n.next()).done)&&(i.push(e.value),!r||i.length!==r);o=!0);}catch(c){l=!0,u=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw u}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}System.register(["./index-legacy.ab973750.js","./useUtil-legacy.6d21398f.js","./EncodingSelect-legacy.8fcf84cd.js","./api-legacy.abbe4e43.js"],(function(r){"use strict";var n,e,u,i,o,l,c,a,f;return{setters:[function(t){n=t.e,e=t.U,u=t.c,i=t.bZ,o=t.S,l=t.c4},function(t){c=t.e,a=t.c},function(t){f=t.E},function(){}],execute:function(){function d(r){var e=t(u("utf-8"),2),c=e[0],d=e[1],s=a(r.children),g=s.isString,y=s.text;return n(l,{w:"$full",h:"70vh",pos:"relative",get children(){return[n(i.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return y(c())}}),n(o,{when:!g,get children(){return n(f,{get encoding(){return c()},setEncoding:d})}})]}})}r("default",(function(){var r=t(c(),1)[0];return n(e,{get loading(){return r.loading},get children(){return n(d,{get children(){var t;return null===(t=r())||void 0===t?void 0:t.content}})}})}))}}}))}();
