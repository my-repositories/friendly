!function e(r,n,t){function o(i,f){if(!n[i]){if(!r[i]){var a="function"==typeof require&&require;if(!f&&a)return a(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[i]={exports:{}};r[i][0].call(c.exports,function(e){var n=r[i][1][e];return o(n||e)},c,c.exports,e,r,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(e,r,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){console.warn("paginate && add friends")}},{}],2:[function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var o=t(e("./friends")),u=t(e("./profile")),i=t(e("./resumes")),f=[].concat(function(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)}(document.body.classList)),a=[{className:"resumes_index_page",func:i.default},{className:"friends_index_page",func:o.default},{className:"users_show_page",func:u.default}];if("https://moikrug.ru"===window.location.origin){var s=!0,c=!1,l=void 0;try{for(var d,p=a[Symbol.iterator]();!(s=(d=p.next()).done);s=!0){var _=d.value;if(-1!==f.indexOf(_.className)){_.func();break}}}catch(e){c=!0,l=e}finally{try{!s&&p.return&&p.return()}finally{if(c)throw l}}}},{"./friends":1,"./profile":3,"./resumes":4}],3:[function(e,r,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){console.warn("go to friends list!")}},{}],4:[function(e,r,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){console.warn("list of resumes")}},{}]},{},[2]);