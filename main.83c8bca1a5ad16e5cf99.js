!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);r(0);function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,i;return e=t,(r=[{key:"getRes",value:function(){var t=this;return fetch("src/js/constans/flights.json",{method:"GET"}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject(t.status)}}])&&n(e.prototype,r),i&&n(e,i),t}();function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n;return e=t,(r=[{key:"set",value:function(t){localStorage.setItem("fly",JSON.stringify(t))}},{key:"getCards",value:function(){return JSON.parse(localStorage.getItem("fly"))}},{key:"clearStorage",value:function(){localStorage.clear()}}])&&o(e.prototype,r),n&&o(e,n),t}();function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.template=r,this.price=e.price.total.amount,this.transferTo=e.legs[0].segments.length,this.durationTo=e.legs[0].duration,this.departureUidTo=e.legs[0].segments[0].departureAirport.uid,this.departureCityTo=e.legs[0].segments[0].departureCity.caption,this.departureAirportTo=e.legs[0].segments[0].departureAirport.caption,this.aircompanyTo=e.carrier.caption,this.departureDateTo=e.legs[0].segments[0].departureDate,this.arrivalUidTo=e.legs[0].segments.length>1?e.legs[0].segments[1].arrivalAirport.uid:e.legs[0].segments[0].arrivalAirport.uid,this.arrivalCityTo=e.legs[0].segments.length>1?e.legs[0].segments[1].arrivalAirport.caption:e.legs[0].segments[0].arrivalCity.caption,this.arrivalAirportTo=e.legs[0].segments.length>1?e.legs[0].segments[1].arrivalAirport.caption:e.legs[0].segments[0].arrivalAirport.caption,this.arrivalDateTo=e.legs[0].segments.length>1?e.legs[0].segments[1].arrivalDate:e.legs[0].segments[0].arrivalDate,this.durationFrom=e.legs[1].duration,this.transferFrom=e.legs[1].segments.length,this.aircompanyFrom=e.carrier.caption,this.departureUidFrom=e.legs[1].segments[0].departureAirport.uid,this.departureAirportFrom=e.legs[1].segments[0].departureAirport.caption,this.departureDateFrom=e.legs[1].segments[0].departureDate,this.arrivalDateFrom=e.legs[1].segments.length>1?e.legs[1].segments[1].arrivalDate:e.legs[1].segments[0].arrivalDate,this.arrivalUidFrom=e.legs[1].segments.length>1?e.legs[1].segments[1].arrivalAirport.uid:e.legs[1].segments[0].arrivalAirport.uid,this.arrivalAirportFrom=e.legs[1].segments.length>1?e.legs[1].segments[1].arrivalAirport.caption:e.legs[1].segments[0].arrivalAirport.caption}var e,r,n;return e=t,(r=[{key:"_date",value:function(t){return new Date(t).toLocaleString("ru",{hour:"numeric",minute:"numeric",day:"2-digit",month:"short",weekday:"short"})}},{key:"_transfer",value:function(t){return t>1?"".concat(t-1," пересадка"):"без пересадок"}},{key:"createCard",value:function(){return this.container=this.template.cloneNode(!0),this.container.querySelector(".ticket__header-price").textContent="".concat(this.price," RUB"),this.container.querySelector(".ticket-to__transfer-num").textContent=this._transfer(this.transferTo),this.container.querySelector(".ticket-to__duration-hours").textContent="🕤 ".concat(Math.trunc(this.durationTo/60)),this.container.querySelector(".ticket-to__duration-minutes").textContent=this.durationTo%60,this.container.querySelector(".ticket-to__aircompany").textContent="Рейс выполняет: ".concat(this.aircompanyTo),this.container.querySelector(".ticket-to__departure-airport-uid").textContent="(".concat(this.departureUidTo,")"),this.container.querySelector(".ticket-to__departure-airport-caption").textContent=this.departureAirportTo,this.container.querySelector(".ticket-to__departure-city").textContent=this.departureCityTo,this.container.querySelector(".ticket-to__departure-time").textContent=this._date(this.departureDateTo).slice(-5),this.container.querySelector(".ticket-to__departure-date").textContent=this._date(this.departureDateTo).slice(0,-8),this.container.querySelector(".ticket-to__arrival-time").textContent=this._date(this.arrivalDateTo).slice(-5),this.container.querySelector(".ticket-to__arrival-date").textContent=this._date(this.arrivalDateTo).slice(0,-8),this.container.querySelector(".ticket-to__arrival-airport-uid").textContent="(".concat(this.arrivalUidTo,")"),this.container.querySelector(".ticket-to__arrival-airport-caption").textContent=this.arrivalAirportTo,this.container.querySelector(".ticket-from__transfer-num").textContent=this._transfer(this.transferFrom),this.container.querySelector(".ticket-from__aircompany").textContent="Рейс выполняет: ".concat(this.aircompanyFrom),this.container.querySelector(".ticket-from__duration-hours").textContent="🕤 ".concat(Math.trunc(this.durationFrom/60)),this.container.querySelector(".ticket-from__duration-minutes").textContent=this.durationFrom%60,this.container.querySelector(".ticket-from__departure-airport-uid").textContent="(".concat(this.departureUidFrom,")"),this.container.querySelector(".ticket-from__departure-airport-caption").textContent=this.departureAirportFrom,this.container.querySelector(".ticket-from__departure-time").textContent=this._date(this.departureDateFrom).slice(-5),this.container.querySelector(".ticket-from__departure-date").textContent=this._date(this.departureDateFrom).slice(0,-8),this.container.querySelector(".ticket-from__arrival-time").textContent=this._date(this.arrivalDateFrom).slice(-5),this.container.querySelector(".ticket-from__arrival-date").textContent=this._date(this.arrivalDateFrom).slice(0,-8),this.container.querySelector(".ticket-from__arrival-airport-uid").textContent="(".concat(this.arrivalUidFrom,")"),this.container.querySelector(".ticket-from__arrival-airport-caption").textContent=this.arrivalAirportFrom,this.container}}])&&s(e.prototype,r),n&&s(e,n),t}();function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e}var e,r,n;return e=t,(r=[{key:"_addCard",value:function(t){this.container.append(t)}},{key:"render",value:function(t){var e=this;t.forEach((function(t){return e._addCard(t)}))}},{key:"remove",value:function(){this.container.innerHTML=""}}])&&u(e.prototype,r),n&&u(e,n),t}(),h=document.querySelector(".template").content,p=document.querySelector(".container"),d=document.querySelector("#show-more-button");var f=new l(p),m=new i,g=new a;!function(){window.count=0;var t=g.getCards().result.flights.map((function(t){return t.flight}));e=t,console.log(e);var e;var r=t.map((function(t){return new c(t,h).createCard()})).slice(0,4);f.render(r)}(),d.addEventListener("click",(function(){!function(t){var e=g.getCards().result.flights.map((function(t){return t.flight})).map((function(t){return new c(t,h).createCard()})).slice(0,t);f.remove(),f.render(e),window.count=e.length}(function(){var t=window.count;if(isNaN(t)||0===t)return 6;return t+4}())})),m.getRes().then((function(t){g.set(t)})).catch((function(t){console.log("Ошибка ".concat(t," "))}))}]);