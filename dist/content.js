!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){!async function(){for(var links=document.querySelectorAll("a.button.btn-green.add_to_friends"),i=0;i<links.length;++i)await async function(i){return new Promise(function(resolve,reject){setTimeout(function(){return resolve(links[i].click())},100)})}(i);changePage()}()};var _utils=require("./utils"),changePage=function(){var nextPage=document.querySelector("a.next_page");nextPage?(0,_utils.jump)(nextPage.getAttribute("href")):(0,_utils.navigateToNextPage)()}},{"./utils":5}],2:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _friends2=_interopRequireDefault(require("./friends")),_profile2=_interopRequireDefault(require("./profile")),_resumes2=_interopRequireDefault(require("./resumes")),_utils=require("./utils");if("https://moikrug.ru"===window.location.origin&&(0,_utils.haveAccess)()){var bodyClassList=[].concat(function(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(document.body.classList)),pages=[{className:"friends_index_page",func:_friends2.default},{className:"users_show_page",func:_profile2.default},{className:"resumes_index_page",func:_resumes2.default}],_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=pages[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var page=_step.value;if(-1!==bodyClassList.indexOf(page.className)){page.func();break}}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}},{"./friends":1,"./profile":3,"./resumes":4,"./utils":5}],3:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){isPrivateProfile()?(0,_utils.navigateToNextPage)():(0,_utils.jump)(window.location.href+"/friends")};var _utils=require("./utils"),isPrivateProfile=function(){return document.querySelectorAll("#profiles .section .no_content").length}},{"./utils":5}],4:[function(require,module,exports){"use strict";function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var links=getUserLinks();links=filterLinksByText(links,"Ваш профиль"),(0,_utils.navigateToNextPage)(links)};var _utils=require("./utils"),getUserLinks=function(){var nodeList=document.querySelectorAll(".info.users-about-items .username a");return[].concat(_toConsumableArray(nodeList)).map(function(node){return node.getAttribute("href")})},filterLinksByText=function(links,text){var menuItems=[].concat(_toConsumableArray(document.querySelectorAll(".dropdown.user_menu .menu a"))),index=menuItems.findIndex(function(item){return item.innerHTML===text});return-1!==index?links.filter(function(link){return link!==menuItems[index].getAttribute("href")}):links}},{"./utils":5}],5:[function(require,module,exports){"use strict";function getLinksFromStorage(){return JSON.parse(window.sessionStorage.getItem(storageName.links)||"[]")}function jump(url){window.setTimeout(function(){return window.location.href=url},100)}function isConfirmed(){return"?confirmed"===window.location.search||JSON.parse(window.sessionStorage.getItem(storageName.confirmed))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.navigateToNextPage=function(links){if(links||(links=getLinksFromStorage()),!links.length)return console.warn("Links array is empty!"),void window.alert("Links array is empty!");var nextPage=links.pop();window.sessionStorage.setItem(storageName.links,JSON.stringify(links)),jump(nextPage)},exports.getLinksFromStorage=getLinksFromStorage,exports.jump=jump,exports.isConfirmed=isConfirmed,exports.haveAccess=function(){var confirmation=isConfirmed();return window.sessionStorage.setItem(storageName.confirmed,confirmation),confirmation},exports.log=function(){for(var _console,_len=arguments.length,value=Array(_len),_key=0;_key<_len;_key++)value[_key]=arguments[_key];(_console=console).warn.apply(_console,["["+getTime()+"] FRIENDLY:: "].concat(value))};var storageName={links:"links",confirmed:"confirmed"},getTime=function(){return(new Date).toLocaleString("ru",{year:"2-digit",month:"2-digit",day:"2-digit"})}},{}]},{},[2]);