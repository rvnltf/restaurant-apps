!function(t){function n(n){for(var r,i,c=n[0],u=n[1],s=n[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(n);p.length;)p.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,c=1;c<e.length;c++){var u=e[c];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={2:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=u;a.push([12,1,0,3]),e()}([function(t,n,e){"use strict";var r={KEY:"12345",BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL_SMALL:"https://restaurant-api.dicoding.dev/images/small/",BASE_IMAGE_URL_MEDIUM:"https://restaurant-api.dicoding.dev/images/medium/",BASE_IMAGE_URL_LARGE:"https://restaurant-api.dicoding.dev/images/large/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"};n.a=r},function(t,n,e){"use strict";var r=e(11),o=e(0);function a(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))}}var c=o.a.DATABASE_NAME,u=o.a.DATABASE_VERSION,s=o.a.OBJECT_STORE_NAME,l=Object(r.a)(c,u,{upgrade:function(t){t.createObjectStore(s,{keyPath:"id"})}}),f={getRestaurant:function(t){return i(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,l;case 4:return n.abrupt("return",n.sent.get(s,t));case 5:case"end":return n.stop()}}),n)})))()},getAllRestaurants:function(){return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l;case 2:return t.abrupt("return",t.sent.getAll(s));case 3:case"end":return t.stop()}}),t)})))()},putRestaurant:function(t){return i(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.hasOwnProperty("id")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,l;case 4:return n.abrupt("return",n.sent.put(s,t));case 5:case"end":return n.stop()}}),n)})))()},deleteRestaurant:function(t){return i(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l;case 2:return n.abrupt("return",n.sent.delete(s,t));case 3:case"end":return n.stop()}}),n)})))()}};n.a=f},function(t,n,e){"use strict";var r=e(0),o={HOME:"".concat(r.a.BASE_URL,"list"),RESTAURANT:function(t){return"".concat(r.a.BASE_URL,"detail/").concat(t)}};function a(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))}}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,r,a,u;return n=t,e=null,r=[{key:"restaurantList",value:(u=i(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o.HOME);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e.restaurants);case 7:case"end":return t.stop()}}),t)}))),function(){return u.apply(this,arguments)})},{key:"restaurantDetail",value:(a=i(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o.RESTAURANT(n));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)}))),function(t){return a.apply(this,arguments)})}],e&&c(n.prototype,e),r&&c(n,r),t}();n.a=u},,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(5),e(4),e(13),e(14),e(16);var r=e(10),o=e(8),a=(e(24),new r.a({button:document.querySelector("#menu"),drawer:document.querySelector("#navigation"),content:document.querySelector("main"),appBar:document.querySelector("app-bar")}));window.addEventListener("hashchange",(function(){a.renderPage()})),window.addEventListener("load",(function(){a.renderPage(),Object(o.a)()}))},,,,,,function(t,n,e){"use strict";var r=e(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){var n="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return s(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function s(t,n,e){return(s=l()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(d,t);var n,e,o,u,s,y=(n=d,e=l(),function(){var t,r=p(n);if(e){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)});function d(){return a(this,d),y.apply(this,arguments)}return o=d,(u=[{key:"restaurant",set:function(t){this._restaurant=t,this.render()}},{key:"render",value:function(){var t=this._restaurant.rating.toString();this.innerHTML='\n            <div class="card">\n                <img class="lazyload" src="'.concat(r.a.BASE_IMAGE_URL_SMALL+this._restaurant.pictureId,'" alt="').concat(this._restaurant.name,'">\n                <div class="favorite-description">\n                <h2 class="restaurant__title">').concat(this._restaurant.name,'</h2>\n                <div class="review">\n                  <div class="rating" style="--nilai: 0.').concat(t.replace(".",""),';">\n                      <div class="ratings">\n                          <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>\n                          </div>\n                          <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>\n                          </div>\n                      </div>\n                  </div>\n                  <p>').concat(this._restaurant.city,'</p>\n                </div>\n                <p class="odd-description">').concat(this._restaurant.description,'</p>\n                <a class="detail-button" href="',"/#/restaurant/".concat(this._restaurant.id),'" aria-label="read more">Read More</a>\n            </div>\n    ')}}])&&i(o.prototype,u),s&&i(o,s),d}(u(HTMLElement));customElements.define("favorite-element",y)},function(t,n,e){"use strict";var r=e(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){var n="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return s(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function s(t,n,e){return(s=l()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(d,t);var n,e,o,u,s,y=(n=d,e=l(),function(){var t,r=p(n);if(e){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)});function d(){return a(this,d),y.apply(this,arguments)}return o=d,(u=[{key:"restaurant",set:function(t){this._restaurant=t,this.render()}},{key:"render",value:function(){var t=this._restaurant.rating.toString();this.innerHTML='\n                <article class="odd">\n                    <figure class="odd-figure">\n                        <img class="lazyload" src="'.concat(r.a.BASE_IMAGE_URL_SMALL+this._restaurant.pictureId,'" alt="Picture of ').concat(this._restaurant.city,'">\n                    </figure>\n                    <div class="odd-content">\n                        <h1 class="odd-title restaurant__title">').concat(this._restaurant.name,'</h1>\n                        <div class="review">\n                            <p>').concat(this._restaurant.city,"</p>\n                            <p>").concat(t,'</p>\n                            <div class="rating" style="--nilai: 0.').concat(t.replace(".",""),';">\n                                <div class="ratings">\n                                    <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>\n                                    </div>\n                                    <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <p class="odd-description">').concat(this._restaurant.description,' </p>\n                        <a class="detail-button" href="',"/#/restaurant/".concat(this._restaurant.id),'" style="box-shadow: 3px 3px 1px #aaaaaa; "aria-label="read more">Read More</a>\n                    </div>\n                </article>\n        ')}}])&&i(o.prototype,u),s&&i(o,s),d}(u(HTMLElement));customElements.define("odd-item",y)},function(t,n,e){"use strict";var r=e(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){var n="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return s(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function s(t,n,e){return(s=l()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(d,t);var n,e,o,u,s,y=(n=d,e=l(),function(){var t,r=p(n);if(e){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)});function d(){return a(this,d),y.apply(this,arguments)}return o=d,(u=[{key:"restaurant",set:function(t){this._restaurant=t,this.render()}},{key:"render",value:function(){var t=this._restaurant.rating.toString();this.innerHTML='\n                <article class="even">\n                    <figure class="even-figure">\n                        <img class="lazyload" src="'.concat(r.a.BASE_IMAGE_URL_SMALL+this._restaurant.pictureId,'" alt="Picture of ').concat(this._restaurant.city,'">\n                    </figure>\n                    <div class="even-content">\n                        <h1 class="even-title restaurant__title">').concat(this._restaurant.name,'</h1>\n                        <div class="review">\n                            <p>').concat(this._restaurant.city,"</p>\n                            <p>").concat(t,'</p>\n                            <div class="rating" style="--nilai: 0.').concat(t.replace(".",""),';">\n                                <div class="ratings">\n                                    <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>\n                                    </div>\n                                    <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <p class="even-description">').concat(this._restaurant.description,'</p>\n                        <a class="detail-button" href="',"/#/restaurant/".concat(this._restaurant.id),'" aria-label="read more">Read More</a>\n                    </div>\n                </article>\n        ')}}])&&i(o.prototype,u),s&&i(o,s),d}(u(HTMLElement));customElements.define("even-item",y)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&s(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(y,t);var n,e,i,c,f,p=(n=y,e=u(),function(){var t,r=l(n);if(e){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return a(this,t)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <style>\n        .jumbotron {\n            display: flex;\n            align-items: center;\n            min-height: 500px;\n            width: 100%;\n            padding: 30px;\n            background-image: url("./images/heros/hero-image_4-small.jpg");\n            background-repeat:no-repeat;\n            background-position: center;\n            background-size: cover;\n            color: #f7f2ed;\n            transition: 0.6s;\n        }\n        .hero {\n            max-width: 500px;\n            padding: 20px;\n        }\n        .hero-title {\n            color: #f7f2ed;\n            font-weight: 500;\n            font-size: 46px;\n            transition: 0.6s;\n        }\n        \n        .hero-tagline {\n            color: #f7f2ed;\n            margin-top: 10px;\n            line-height: 25px;\n        }\n        @media screen and (min-width: 500px) {\n            .hero-title {\n                font-size: 60px;\n            }\n            .hero-tagline {\n                font-size: 18px;\n            }\n        }\n        @media screen and (min-width: 700px) {\n            .jumbotron{\n                background-image: url("./images/heros/hero-image_4-large.jpg");\n            }\n            .hero {\n                max-width: 900px;\n                padding: 40px;\n            }\n            :host {\n                min-height: 500px;\n            }\n            .hero-title {\n                font-size: 72px;\n            }\n            .hero-tagline {\n                font-size: 22px;\n            }\n        }\n        </style>\n        <div class="jumbotron">\n            <div class="hero">\n                <h1 class="hero-title">Savory dish to share</h1>\n                <p class="hero-tagline">In this way such herbs may be had throughout the season with almost the full flavour of the fresh herb.</p>\n            </div>\n        </div>\n        '}}])&&o(i.prototype,c),f&&o(i,f),y}(i(HTMLElement));customElements.define("hero-element",f)},function(t,n,e){"use strict";var r=e(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){var n="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return s(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function s(t,n,e){return(s=l()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(d,t);var n,e,o,u,s,y=(n=d,e=l(),function(){var t,r=p(n);if(e){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)});function d(){return a(this,d),y.apply(this,arguments)}return o=d,(u=[{key:"restaurant",set:function(t){this._restaurant=t,this.render()}},{key:"render",value:function(){var t=this._restaurant.menus,n=this._restaurant.rating.toString();this.innerHTML='\n    <ul id="details">\n      <li class="detail" id="detail_1">\n        <div class="detail__content">\n          <figure>\n            <img class="lazyload" src="'.concat(r.a.BASE_IMAGE_URL_LARGE+this._restaurant.pictureId,'" alt="').concat(r.a.BASE_IMAGE_URL_MEDIUM+this._restaurant.pictureId,'">\n            <div class="caption">\n              <h3 class="welcome">WELCOME TO</h3>\n              <h1 class="detail-title">').concat(this._restaurant.name.toUpperCase(),'</h1>\n            </div>\n          </figure>\n        </div>\n      </li>\n      <li class="detail" id="detail_2">\n        <div class="detail__content">\n          <div class="content-detail">\n            <h2 class="detail-title">').concat(this._restaurant.name,'</h2>\n            <p class="address">').concat(this._restaurant.address,", ").concat(this._restaurant.city,'</p>\n            <p class="description">').concat(this._restaurant.description,"</p><br>\n            <h3>Categories : ").concat(this._restaurant.categories.map((function(t){return t.name})),'</h3>\n          </div>\n          <hr><br>\n          <h2 class="menus">- MENU -</h2>\n          <div class="cards-menu">\n            <div class="card">\n              <h3 class="menus">FOODS</h3>\n              <hr>\n              <ul class="foods">\n              ').concat(t.foods.map((function(t){return"<li>".concat(t.name,"</li>")})).join(""),'\n              </ul>\n            </div>\n            <div class="card">\n              <h3 class="menus">DRINKS</h3>\n              <ul class="drinks">\n              <hr>\n              ').concat(t.drinks.map((function(t){return"<li>".concat(t.name,"</li>")})).join(""),'\n              </ul>\n            </div>\n          </div>\n          <h2 class="menus">- REVIEW -</h2>\n          <div class="review">\n            <div class="rating" style="--nilai: 0.').concat(n.replace(".",""),';">\n                <div class="ratings">\n                    <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>\n                    </div>\n                    <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class="cards-review">\n            <div class="card">\n              ').concat(this._restaurant.customerReviews.map((function(t){return"\n              <h3>".concat(t.name,'</h3>\n              <p class="address">').concat(t.date,"</p>\n              <p>").concat(t.review,"</p><hr>\n              ")})).join(""),"\n              \n            </div>\n          </div>\n        </div>\n      </div>\n      </li>\n    </ul>\n        ")}}])&&i(o.prototype,u),s&&i(o,s),d}(u(HTMLElement));customElements.define("restaurant-detail",y)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&s(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(y,t);var n,e,i,c,f,p=(n=y,e=u(),function(){var t,r=l(n);if(e){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return a(this,t)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <button aria-label="like this restaurant" id="likeButton" class="like">\n        <i class="fa fa-heart-o" aria-hidden="true"></i>\n    </button>\n          '}}])&&o(i.prototype,c),f&&o(i,f),y}(i(HTMLElement));customElements.define("like-button",f)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&s(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(y,t);var n,e,i,c,f,p=(n=y,e=u(),function(){var t,r=l(n);if(e){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return a(this,t)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <a href="/" class="logo"><img  src="./images/logo/logo.png" alt="Logo Peto"></a>\n        <button id="menu" class="menu" aria-label="navigation-menu">☰</button>\n        <nav id="navigation" class="navbar">\n            <ul class="nav">\n                <li class="nav-item"><a href="#/home" class="nav-link">Home</a></li>\n                <li class="nav-item"><a href="#/favorite" class="nav-link">Favorite</a></li>\n                <li class="nav-item"><a href="https://www.linkedin.com/in/rvnltf/" class="nav-link" target="_blank">About Us</a></li>\n            </ul>\n        </nav>\n        '}}])&&o(i.prototype,c),f&&o(i,f),y}(i(HTMLElement));customElements.define("app-bar",f)}]);