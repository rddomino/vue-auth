(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},"0366":function(e,t,n){var r=n("1c0b");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),s=n("fc6a"),a=n("c04e"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=s(e),t=a(t,!0),u)try{return l(e,t)}catch(n){}if(c(e,t))return i(!o.f.call(e,t),e[t])}},"0cfb":function(e,t,n){var r=n("83ab"),o=n("d039"),i=n("cc12");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"19aa":function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c0b":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"1c7e":function(e,t,n){var r=n("b622"),o=r("iterator"),i=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){i=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d3b7");function r(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))}}},"1fd5":function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return D})),n.d(t,"g",(function(){return R})),n.d(t,"h",(function(){return M})),n.d(t,"i",(function(){return I})),n.d(t,"j",(function(){return O})),n.d(t,"k",(function(){return E})),n.d(t,"l",(function(){return V})),n.d(t,"m",(function(){return l})),n.d(t,"n",(function(){return d})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return p})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return f})),n.d(t,"s",(function(){return h})),n.d(t,"t",(function(){return N})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return v}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let f=(15&s)<<2|c>>6,d=63&c;a||(d=64,i||(f=64)),r.push(n[u],n[l],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,s=i?n[e.charAt(o)]:0;++o;const a=o<e.length,c=a?n[e.charAt(o)]:64;++o;const u=o<e.length,l=u?n[e.charAt(o)]:64;if(++o,null==t||null==s||null==c||null==l)throw Error();const f=t<<2|s>>4;if(r.push(f),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){const t=o(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function h(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return"object"===typeof indexedDB}function v(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof e)return e;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof r)return;const e=Object({NODE_ENV:"production",BASE_URL:"/"}).__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},_=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},w=()=>{try{return b()||y()||_()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},O=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},I=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},E=e=>{var t;return null===(t=w())||void 0===t?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const j="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=j,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?C(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new S(r,s,n);return a}}function C(e,t){return e.replace(x,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(P(n)&&P(i)){if(!R(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function P(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=F(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"),n("4362"))},2266:function(e,t,n){var r=n("825a"),o=n("e95a"),i=n("50c4"),s=n("0366"),a=n("35a1"),c=n("2a62"),u=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var l,f,d,h,p,m,v,g=n&&n.that,b=!(!n||!n.AS_ENTRIES),y=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),w=s(t,g,1+b+_),O=function(e){return l&&c(l),new u(!0,e)},I=function(e){return b?(r(e),_?w(e[0],e[1],O):w(e[0],e[1])):_?w(e,O):w(e)};if(y)l=e;else{if(f=a(e),"function"!=typeof f)throw TypeError("Target is not iterable");if(o(f)){for(d=0,h=i(e.length);h>d;d++)if(p=I(e[d]),p&&p instanceof u)return p;return new u(!1)}l=f.call(e)}m=l.next;while(!(v=m.call(l)).done){try{p=I(v.value)}catch(E){throw c(l),E}if("object"==typeof p&&p&&p instanceof u)return p}return new u(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("a691"),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},"23e7":function(e,t,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,f,d,h,p,m=e.target,v=e.global,g=e.stat;if(l=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(f in t){if(h=t[f],e.noTargetGet?(p=o(l,f),d=p&&p.value):d=l[f],n=u(v?f:m+(g?".":"#")+f,e.forced),!n&&void 0!==d){if(typeof h===typeof d)continue;c(h,d)}(e.sham||d&&d.sham)&&i(h,"sham",!0),s(l,f,h,e)}}},"241c":function(e,t,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var o="firebase",i="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(o,i,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),o=n("9bf2"),i=n("b622"),s=n("83ab"),a=i("species");e.exports=function(e){var t=r(e),n=o.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("825a");e.exports=function(e){var t=e["return"];if(void 0!==t)return r(t.call(e)).value}},"2cf4":function(e,t,n){var r,o,i,s=n("da84"),a=n("d039"),c=n("0366"),u=n("1be4"),l=n("cc12"),f=n("1cdc"),d=n("605d"),h=s.location,p=s.setImmediate,m=s.clearImmediate,v=s.process,g=s.MessageChannel,b=s.Dispatch,y=0,_={},w="onreadystatechange",O=function(e){if(_.hasOwnProperty(e)){var t=_[e];delete _[e],t()}},I=function(e){return function(){O(e)}},E=function(e){O(e.data)},k=function(e){s.postMessage(e+"",h.protocol+"//"+h.host)};p&&m||(p=function(e){var t=[],n=1;while(arguments.length>n)t.push(arguments[n++]);return _[++y]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},r(y),y},m=function(e){delete _[e]},d?r=function(e){v.nextTick(I(e))}:b&&b.now?r=function(e){b.now(I(e))}:g&&!f?(o=new g,i=o.port2,o.port1.onmessage=E,r=c(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts&&h&&"file:"!==h.protocol&&!a(k)?(r=k,s.addEventListener("message",E,!1)):r=w in l("script")?function(e){u.appendChild(l("script"))[w]=function(){u.removeChild(this),O(e)}}:function(e){setTimeout(I(e),0)}),e.exports={set:p,clear:m}},"2d00":function(e,t,n){var r,o,i=n("da84"),s=n("342f"),a=i.process,c=a&&a.versions,u=c&&c.v8;u?(r=u.split("."),o=r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=r[1]))),e.exports=o&&+o},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),o=n("3f8c"),i=n("b622"),s=i("iterator");e.exports=function(e){if(void 0!=e)return e[s]||e["@@iterator"]||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),s=n("df75");e.exports=r?Object.defineProperties:function(e,t){i(e);var n,r=s(t),a=r.length,c=0;while(a>c)o.f(e,n=r[c++],t[n]);return e}},"3bbe":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("d039"),o=n("c6b6"),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},"45fc":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").some,i=n("a640"),s=n("ae40"),a=i("some"),c=s("some");r({target:"Array",proto:!0,forced:!a||!c},{some:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},4840:function(e,t,n){var r=n("825a"),o=n("1c0b"),i=n("b622"),s=i("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[s])?t:o(n)}},4930:function(e,t,n){var r=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(e,t,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c.length),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"50c4":function(e,t,n){var r=n("a691"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},5135:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},5502:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return i}));var r=n("7a23"),o="store";
/*!
 * vuex v4.0.0-rc.2
 * (c) 2020 Evan You
 * @license MIT
 */function i(e){return void 0===e&&(e=null),Object(r["j"])(null!==e?e:o)}var s="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=s.__VUE_DEVTOOLS_GLOBAL_HOOK__;function c(e){a&&(e._devtoolHook=a,a.emit("vuex:init",e),a.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){a.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){a.emit("vuex:action",e,t)}),{prepend:!0}))}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function f(e){return e&&"function"===typeof e.then}function d(e,t){if(!e)throw new Error("[vuex] "+t)}function h(e,t){return function(){return e(t)}}var p=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},m={namespaced:{configurable:!0}};m.namespaced.get=function(){return!!this._rawModule.namespaced},p.prototype.addChild=function(e,t){this._children[e]=t},p.prototype.removeChild=function(e){delete this._children[e]},p.prototype.getChild=function(e){return this._children[e]},p.prototype.hasChild=function(e){return e in this._children},p.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},p.prototype.forEachChild=function(e){u(this._children,e)},p.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},p.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},p.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(p.prototype,m);var v=function(e){this.register([],e,!1)};function g(e,t,n){if(w(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");g(e.concat(r),t.getChild(r),n.modules[r])}}v.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},v.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},v.prototype.update=function(e){g([],this.root,e)},v.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),w(e,t);var o=new p(t,n);if(0===e.length)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&u(t.modules,(function(t,o){r.register(e.concat(o),t,n)}))},v.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},v.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var b={assert:function(e){return"function"===typeof e},expected:"function"},y={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},_={getters:b,mutations:b,actions:y};function w(e,t){Object.keys(_).forEach((function(n){if(t[n]){var r=_[n];u(t[n],(function(t,o){d(r.assert(t),O(e,n,o,t,r.expected))}))}}))}function O(e,t,n,r,o){var i=t+" should be "+o+' but "'+t+"."+n+'"';return e.length>0&&(i+=' in module "'+e.join(".")+'"'),i+=" is "+JSON.stringify(r)+".",i}function I(e){return new E(e)}var E=function e(t){var n=this;void 0===t&&(t={}),d("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),d(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null);var i=this,s=this,a=s.dispatch,u=s.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return u.call(i,e,t,n)},this.strict=o;var l=this._modules.root.state;C(this,l,[],this._modules.root),T(this,l),r.forEach((function(e){return e(n)}));var f=void 0===t.devtools||t.devtools;f&&c(this)},k={state:{configurable:!0}};function j(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function S(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;C(e,n,[],e._modules.root,!0),T(e,n,t)}function T(e,t,n){var o=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};u(i,(function(t,n){s[n]=h(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=Object(r["t"])({data:t}),e.strict&&L(e),o&&n&&e._withCommit((function(){o.data=null}))}function C(e,t,n,r,o){var i=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!i&&!o){var a=M(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=x(e,s,n);r.forEachMutation((function(t,n){var r=s+n;R(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,o=t.handler||t;P(e,r,o,u)})),r.forEachGetter((function(t,n){var r=s+n;N(e,r,t,u)})),r.forEachChild((function(r,i){C(e,t,n.concat(i),r,o)}))}function x(e,t,n){var r=""===t,o={dispatch:r?e.dispatch:function(n,r,o){var i=D(n,r,o),s=i.payload,a=i.options,c=i.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:r?e.commit:function(n,r,o){var i=D(n,r,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperties(o,{getters:{get:r?function(){return e.getters}:function(){return A(e,t)}},state:{get:function(){return M(e.state,n)}}}),o}function A(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function R(e,t,n,r){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){n.call(e,r.state,t)}))}function P(e,t,n,r){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return f(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function N(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function L(e){Object(r["A"])((function(){return e._state.data}),(function(){d(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function M(e,t){return t.reduce((function(e,t){return e[t]}),e)}function D(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),d("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}E.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this},k.state.get=function(){return this._state.data},k.state.set=function(e){d(!1,"use store.replaceState() to explicit replace store state.")},E.prototype.commit=function(e,t,n){var r=this,o=D(e,t,n),i=o.type,s=o.payload,a=o.options,c={type:i,payload:s},u=this._mutations[i];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},E.prototype.dispatch=function(e,t){var n=this,r=D(e,t),o=r.type,i=r.payload,s={type:o,payload:i},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+o)},E.prototype.subscribe=function(e,t){return j(e,this._subscribers,t)},E.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return j(n,this._actionSubscribers,t)},E.prototype.watch=function(e,t,n){var o=this;return d("function"===typeof e,"store.watch only accepts a function."),Object(r["A"])((function(){return e(o.state,o.getters)}),t,Object.assign({},n))},E.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},E.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),d(Array.isArray(e),"module path must be a string or an Array."),d(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),C(this,this.state,e,this._modules.get(e),n.preserveState),T(this,this.state)},E.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),d(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=M(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),S(this)},E.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),d(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},E.prototype.hotUpdate=function(e){this._modules.update(e),S(this,!0)},E.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(E.prototype,k);B((function(e,t){var n={};return F(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),U(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=V(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,t,n):t[o]},n[r].vuex=!0})),n})),B((function(e,t){var n={};return F(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),U(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=V(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n})),B((function(e,t){var n={};return F(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),U(t).forEach((function(t){var r=t.key,o=t.val;o=e+o,n[r]=function(){if(!e||V(this.$store,"mapGetters",e)){if(o in this.$store.getters)return this.$store.getters[o];console.error("[vuex] unknown getter: "+o)}},n[r].vuex=!0})),n})),B((function(e,t){var n={};return F(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),U(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=V(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n}));function U(e){return F(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function F(e){return Array.isArray(e)||l(e)}function B(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function V(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}}).call(this,n("c8ba"))},5692:function(e,t,n){var r=n("c430"),o=n("c6cd");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),o=n("241c"),i=n("7418"),s=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(s(e)),n=i.f;return n?t.concat(n(e)):t}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return me})),n.d(t,"b",(function(){return fe})),n.d(t,"c",(function(){return le})),n.d(t,"d",(function(){return ge})),n.d(t,"e",(function(){return ve})),n.d(t,"f",(function(){return be}));var r=n("22e5"),o=n("e691"),i=n("1fd5");const s=(e,t)=>t.some(t=>e instanceof t);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,d=new WeakMap,h=new WeakMap,p=new WeakMap,m=new WeakMap;function v(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(O(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&f.set(t,e)}).catch(()=>{}),m.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});d.set(e,t)}let b={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){b=e(b)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(I(this),t),O(f.get(this))}:function(...t){return O(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return h.set(r,t.sort?t.sort():[t]),O(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,b):e)}function O(e){if(e instanceof IDBRequest)return v(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const I=e=>m.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=O(s);return r&&s.addEventListener("upgradeneeded",e=>{r(O(s.result),e.oldVersion,e.newVersion,O(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(e=>{i&&e.addEventListener("close",()=>i()),o&&e.addEventListener("versionchange",()=>o())}).catch(()=>{}),a}const k=["get","getKey","getAll","getAllKeys","count"],j=["put","add","delete","clear"],S=new Map;function T(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=j.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!k.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return S.set(t,i),i}y(e=>({...e,get:(t,n,r)=>T(t,n)||e.get(t,n,r),has:(t,n)=>!!T(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const A="@firebase/app",R="0.8.2",P=new o["b"]("@firebase/app"),N="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",D="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",V="@firebase/database",$="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",W="@firebase/installations",G="@firebase/installations-compat",q="@firebase/messaging",K="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.12.1",ie="[DEFAULT]",se={[A]:"fire-core",[N]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[D]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[V]:"fire-rtdb",[$]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[W]:"fire-iid",[G]:"fire-iid-compat",[q]:"fire-fcm",[K]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new i["b"]("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=oe;function ve(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!==typeof s||!s)throw he.create("bad-app-name",{appName:String(s)});if(n||(n=Object(i["i"])()),!n)throw he.create("no-options");const a=ae.get(s);if(a){if(Object(i["g"])(n,a.options)&&Object(i["g"])(o,a.config))return a;throw he.create("duplicate-app",{appName:s})}const c=new r["b"](s);for(const r of ce.values())c.addComponent(r);const u=new pe(n,o,c);return ae.set(s,u),u}function ge(e=ie){const t=ae.get(e);if(!t&&e===ie)return ve();if(!t)throw he.create("no-app",{appName:e});return t}function be(e,t,n){var o;let i=null!==(o=se[e])&&void 0!==o?o:e;n&&(i+="-"+n);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}le(new r["a"](i+"-version",()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye="firebase-heartbeat-database",_e=1,we="firebase-heartbeat-store";let Oe=null;function Ie(){return Oe||(Oe=E(ye,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch(e=>{throw he.create("idb-open",{originalErrorMessage:e.message})})),Oe}async function Ee(e){var t;try{const t=await Ie();return t.transaction(we).objectStore(we).get(je(e))}catch(n){if(n instanceof i["c"])P.warn(n.message);else{const e=he.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});P.warn(e.message)}}}async function ke(e,t){var n;try{const n=await Ie(),r=n.transaction(we,"readwrite"),o=r.objectStore(we);return await o.put(t,je(e)),r.done}catch(r){if(r instanceof i["c"])P.warn(r.message);else{const e=he.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});P.warn(e.message)}}}function je(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=1024,Te=2592e6;class Ce{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Re(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=xe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Te}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=xe(),{heartbeatsToSend:t,unsentEntries:n}=Ae(this._heartbeatsCache.heartbeats),r=Object(i["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xe(){const e=new Date;return e.toISOString().substring(0,10)}function Ae(e,t=Se){const n=[];let r=e.slice();for(const o of e){const e=n.find(e=>e.agent===o.agent);if(e){if(e.dates.push(o.date),Pe(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Pe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Re{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(i["q"])()&&Object(i["v"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ee(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Pe(e){return Object(i["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){le(new r["a"]("platform-logger",e=>new C(e),"PRIVATE")),le(new r["a"]("heartbeat",e=>new Ce(e),"PRIVATE")),be(A,R,e),be(A,R,"esm2017"),be("fire-js","")}Ne("")},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"605d":function(e,t,n){var r=n("c6b6"),o=n("da84");e.exports="process"==r(o.process)},"60da":function(e,t,n){"use strict";var r=n("83ab"),o=n("d039"),i=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,f=Object.defineProperty;e.exports=!l||o((function(){if(r&&1!==l({b:1},l(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=l({},e)[n]||i(l({},t)).join("")!=o}))?function(e,t){var n=c(e),o=arguments.length,l=1,f=s.f,d=a.f;while(o>l){var h,p=u(arguments[l++]),m=f?i(p).concat(f(p)):i(p),v=m.length,g=0;while(v>g)h=m[g++],r&&!d.call(p,h)||(n[h]=p[h])}return n}:l},"65f0":function(e,t,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),s=i("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"69f3":function(e,t,n){var r,o,i,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),f=n("c6cd"),d=n("f772"),h=n("d012"),p=a.WeakMap,m=function(e){return i(e)?o(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(s){var g=f.state||(f.state=new p),b=g.get,y=g.has,_=g.set;r=function(e,t){return t.facade=e,_.call(g,e,t),t},o=function(e){return b.call(g,e)||{}},i=function(e){return y.call(g,e)}}else{var w=d("state");h[w]=!0,r=function(e,t){return t.facade=e,u(e,w,t),t},o=function(e){return l(e,w)?e[w]:{}},i=function(e){return l(e,w)}}e.exports={set:r,get:o,has:i,enforce:m,getterFor:v}},"6c02":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return z})),n.d(t,"c",(function(){return nt}));var r=n("7a23");
/*!
  * vue-router v4.0.3
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>o?Symbol(e):"_vr_"+e,s=i("rvlm"),a=i("rvd"),c=i("r"),u=i("rl"),l=i("rvl"),f="undefined"!==typeof window;function d(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const h=Object.assign;function p(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}let m=()=>{};const v=/\/$/,g=e=>e.replace(v,"");function b(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),o=e(i)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=j(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function y(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return!t||e.toLowerCase().indexOf(t.toLowerCase())?e:e.slice(t.length)||"/"}function w(e,t,n){let r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&O(t.matched[r],n.matched[o])&&I(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function I(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?k(e,t):Array.isArray(t)?k(t,e):e===t}function k(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function j(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,s=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],1!==s&&"."!==i){if(".."!==i)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var S,T;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function C(e){if(!e)if(f){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}const x=/^[^#]+#/;function A(e,t){return e.replace(x,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(e){let t;if("el"in e){let n=e.el;const r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=R(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function U(e){const t=M.get(e);return M.delete(e),t}let F=()=>location.protocol+"//"+location.host;function B(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let e=o.slice(1);return"/"!==e[0]&&(e="/"+e),_(e,"")}const s=_(n,e);return s+r+o}function V(e,t,n,r){let o=[],i=[],s=null;const a=({state:i})=>{const a=B(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach(e=>{e(n.value,c,{delta:l,type:S.pop,direction:l?l>0?T.forward:T.back:T.unknown})})};function c(){s=n.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:P()}),"")}function f(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:f}}function $(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function H(e){const{history:t,location:n}=window;let r={value:B(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=h({},t.state,$(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function a(e,n){const s=h({},o.value,t.state,{forward:e,scroll:P()});i(s.current,s,!0);const a=h({},$(r.value,e,null),{position:s.position+1},n);i(e,a,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:a,replace:s}}function z(e){e=C(e);const t=H(e),n=V(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=h({location:"",base:e,go:r,createHref:A.bind(null,e)},t,n);return Object.defineProperty(o,"location",{get:()=>t.location.value}),Object.defineProperty(o,"state",{get:()=>t.state.value}),o}function W(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=i("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return h(new Error,{type:e,[K]:!0},t)}function Y(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=h({},Z,t);let r=[],o=n.start?"^":"";const i=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;i.push({name:e,repeatable:n,optional:a});const l=c||Q;if(l!==Q){s+=10;try{new RegExp(`(${l})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+u.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(f=a?`(?:/${f})`:"/"+f),a&&(f+="?"),o+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:i,optional:s}=e,a=o in t?t[o]:"";if(Array.isArray(a)&&!i)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(a)?a.join("/"):a;if(!c){if(!s)throw new Error(`Missing required param "${o}"`);n.endsWith("/")?n=n.slice(0,-1):r=!0}n+=c}}return n}return{re:s,score:r,keys:i,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=ne(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const oe={type:0,value:""},ie=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function f(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&f(),s()):":"===a?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ie.test(a)?d():(f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),f(),s(),o}function ae(e,t,n){const r=te(se(e.path),n);const o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ce(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){let o=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(h({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let f,d;for(const t of l){let{path:l}=t;if(n&&"/"!==l[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(f=ae(t,n,u),r?r.alias.push(f):(d=d||f,d!==f&&d.alias.push(f),o&&e.name&&!de(f)&&s(e.name)),"children"in a){let e=a.children;for(let t=0;t<e.length;t++)i(e[t],f,r&&r.children[t])}r=r||f,c(f)}return d?()=>{s(d)}:m}function s(e){if(G(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let o,i,s,a={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw X(1,{location:e});s=o.record.name,a=h(ue(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),i=o.stringify(a)}else if("path"in e)i=e.path,o=n.find(e=>e.re.test(i)),o&&(a=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw X(1,{location:e,currentLocation:t});s=o.record.name,a=h({},t.params,e.params),i=o.stringify(a)}const c=[];let u=o;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:i,params:a,matched:c,meta:he(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>i(e)),{addRoute:i,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function ue(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function he(e){return e.reduce((e,t)=>h(e,t.meta),{})}function pe(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const me=/#/g,ve=/&/g,ge=/\//g,be=/=/g,ye=/\?/g,_e=/\+/g,we=/%5B/g,Oe=/%5D/g,Ie=/%5E/g,Ee=/%60/g,ke=/%7B/g,je=/%7C/g,Se=/%7D/g,Te=/%20/g;function Ce(e){return encodeURI(""+e).replace(je,"|").replace(we,"[").replace(Oe,"]")}function xe(e){return Ce(e).replace(ke,"{").replace(Se,"}").replace(Ie,"^")}function Ae(e){return Ce(e).replace(_e,"%2B").replace(Te,"+").replace(me,"%23").replace(ve,"%26").replace(Ee,"`").replace(ke,"{").replace(Se,"}").replace(Ie,"^")}function Re(e){return Ae(e).replace(be,"%3D")}function Pe(e){return Ce(e).replace(me,"%23").replace(ye,"%3F")}function Ne(e){return Pe(e).replace(ge,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(_e," ");let n=e.indexOf("="),i=Le(n<0?e:e.slice(0,n)),s=n<0?null:Le(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function De(e){let t="";for(let n in e){t.length&&(t+="&");const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=n);continue}let o=Array.isArray(r)?r.map(e=>e&&Ae(e)):[r&&Ae(r)];for(let e=0;e<o.length;e++)t+=(e?"&":"")+n,null!=o[e]&&(t+="="+o[e])}return t}function Ue(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Fe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):W(e)?a(X(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),s())},u=e.call(r&&r.instances[o],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function Ve(e,t,n,r){const o=[];for(const i of e)for(const e in i.components){let s=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if($e(s)){let a=s.__vccOpts||s;const c=a[t];c&&o.push(Be(c,n,r,i,e))}else{let a=s();a=a.catch(console.error),o.push(()=>a.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const s=d(o)?o.default:o;i.components[e]=s;const a=s[t];return a&&Be(a,n,r,i,e)()}))}}return o}function $e(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=Object(r["j"])(c),n=Object(r["j"])(u),o=Object(r["a"])(()=>t.resolve(Object(r["y"])(e.to))),i=Object(r["a"])(()=>{let{matched:e}=o.value,{length:t}=e;const r=e[t-1];let i=n.matched;if(!r||!i.length)return-1;let s=i.findIndex(O.bind(null,r));if(s>-1)return s;let a=Ke(e[t-2]);return t>1&&Ke(r)===a&&i[i.length-1].path!==a?i.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["a"])(()=>i.value>-1&&qe(n.params,o.value.params)),a=Object(r["a"])(()=>i.value>-1&&i.value===n.matched.length-1&&I(n.params,o.value.params));function l(n={}){return Ge(n)?t[Object(r["y"])(e.replace)?"replace":"push"](Object(r["y"])(e.to)):Promise.resolve()}return{route:o,href:Object(r["a"])(()=>o.value.href),isActive:s,isExactActive:a,navigate:l}}const ze=Object(r["g"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(e,{slots:t,attrs:n}){const o=Object(r["t"])(He(e)),{options:i}=Object(r["j"])(c),s=Object(r["a"])(()=>({[Je(e.activeClass,i.linkActiveClass,"router-link-active")]:o.isActive,[Je(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const i=t.default&&t.default(o);return e.custom?i:Object(r["i"])("a",h({"aria-current":o.isExactActive?e.ariaCurrentValue:null,onClick:o.navigate,href:o.href},n,{class:s.value}),i)}}}),We=ze;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qe(e,t){for(let n in t){let r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["g"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=Object(r["j"])(l),i=Object(r["a"])(()=>e.route||o.value),c=Object(r["j"])(a,0),u=Object(r["a"])(()=>i.value.matched[c]);Object(r["r"])(a,c+1),Object(r["r"])(s,u),Object(r["r"])(l,i);const f=Object(r["u"])();return Object(r["A"])(()=>[f.value,u.value,e.name],([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards=o.leaveGuards,t.updateGuards=o.updateGuards)),!e||!t||o&&O(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=i.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ye(n.default,{Component:a,route:o});const l=s.props[e.name],d=l?!0===l?o.params:"function"===typeof l?l(o):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=Object(r["i"])(a,h({},d,t,{onVnodeUnmounted:p,ref:f}));return Ye(n.default,{Component:m,route:o})||m}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Qe=Xe;function Ze(e){const t=ce(e.routes,e);let n=e.parseQuery||Me,o=e.stringifyQuery||De,i=e.history;const s=Fe(),a=Fe(),d=Fe(),v=Object(r["w"])(q);let g=q;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),O=p.bind(null,Ne),I=p.bind(null,Le);function E(e,n){let r,o;return G(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function k(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function j(){return t.getRoutes().map(e=>e.record)}function S(e){return!!t.getRecordMatcher(e)}function T(e,r){if(r=h({},r||v.value),"string"===typeof e){let o=b(n,e,r.path),s=t.resolve({path:o.path},r),a=i.createHref(o.fullPath);return h(o,s,{params:I(s.params),hash:Le(o.hash),redirectedFrom:void 0,href:a})}let s;"path"in e?s=h({},e,{path:b(n,e.path,r.path).path}):(s=h({},e,{params:O(e.params)}),r.params=O(r.params));let a=t.resolve(s,r);const c=e.hash||"";a.params=_(I(a.params));const u=y(o,h({},e,{hash:xe(c),path:a.path}));let l=i.createHref(u);return h({fullPath:u,hash:c,query:o===De?Ue(e.query):e.query},a,{redirectedFrom:void 0,href:l})}function C(e){return"string"===typeof e?b(n,e,v.value.path):h({},e)}function x(e,t){if(g!==e)return X(8,{from:t,to:e})}function A(e){return F(e)}function R(e){return A(h(C(e),{replace:!0}))}function M(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.indexOf("?")>-1||r.indexOf("#")>-1?r=C(r):{path:r}),h({query:e.query,hash:e.hash,params:e.params},r)}}function F(e,t){const n=g=T(e),r=v.value,i=e.state,s=e.force,a=!0===e.replace,c=M(n);if(c)return F(h(C(c),{state:i,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(o,r,n)&&(l=X(16,{to:u,from:r}),ne(r,r,!0,!1)),(l?Promise.resolve(l):V(u,r)).catch(e=>Y(e)?e:Z(e)).then(e=>{if(e){if(Y(e,2))return F(h(C(e.to),{state:i,force:s,replace:a}),t||u)}else e=H(u,r,!0,a,i);return $(u,r,e),e})}function B(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e,t){let n;const[r,o,i]=tt(e,t);n=Ve(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Be(r,e,t))});const c=B.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(Be(r,e,t));return n.push(c),et(n)}).then(()=>{n=Ve(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(Be(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&t.matched.indexOf(r)<0)if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Be(o,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Ve(i,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Be(r,e,t));return n.push(c),et(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function $(e,t,n){for(const r of d.list())r(e,t,n)}function H(e,t,n,r,o){const s=x(e,t);if(s)return s;const a=t===q,c=f?history.state:{};n&&(r||a?i.replace(e.fullPath,h({scroll:a&&c&&c.scroll},o)):i.push(e.fullPath,o)),v.value=e,ne(e,t,n,a),te()}let z;function W(){z=i.listen((e,t,n)=>{let r=T(e);const o=M(r);if(o)return void F(h(o,{replace:!0}),r).catch(m);g=r;const s=v.value;f&&D(L(s.fullPath,n.delta),P()),V(r,s).catch(e=>Y(e,12)?e:Y(e,2)?(F(e.to,r).catch(m),Promise.reject()):(n.delta&&i.go(-n.delta,!1),Z(e))).then(e=>{e=e||H(r,s,!1),e&&n.delta&&i.go(-n.delta,!1),$(r,s,e)}).catch(m)})}let K,J=Fe(),Q=Fe();function Z(e){return te(e),Q.list().forEach(t=>t(e)),Promise.reject(e)}function ee(){return K&&v.value!==q?Promise.resolve():new Promise((e,t)=>{J.add([e,t])})}function te(e){K||(K=!0,W(),J.list().forEach(([t,n])=>e?n(e):t()),J.reset())}function ne(t,n,o,i){const{scrollBehavior:s}=e;if(!f||!s)return Promise.resolve();let a=!o&&U(L(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return Object(r["k"])().then(()=>s(t,n,a)).then(e=>e&&N(e)).catch(Z)}const re=e=>i.go(e);let oe;const ie=new Set,se={currentRoute:v,addRoute:E,removeRoute:k,hasRoute:S,getRoutes:j,resolve:T,options:e,push:A,replace:R,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:Q.add,isReady:ee,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",Qe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{get:()=>Object(r["y"])(v)}),f&&!oe&&v.value===q&&(oe=!0,A(i.location).catch(e=>{0}));const n={};for(let i in q)n[i]=Object(r["a"])(()=>v.value[i]);e.provide(c,t),e.provide(u,Object(r["t"])(n)),e.provide(l,v);let o=e.unmount;ie.add(e),e.unmount=function(){ie.delete(e),ie.size<1&&(z(),v.value=q,oe=!1,K=!1),o.call(this,arguments)}}};return se}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.indexOf(i)<0?n.push(i):r.push(i));const a=e.matched[s];a&&t.matched.indexOf(a)<0&&o.push(a)}return[n,r,o]}function nt(){return Object(r["j"])(c)}}).call(this,n("c8ba"))},"6eeb":function(e,t,n){var r=n("da84"),o=n("9112"),i=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,f=String(String).split("String");(e.exports=function(e,t,n,a){var c,u=!!a&&!!a.unsafe,d=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof t||i(n,"name")||o(n,"name",t),c=l(n),c.source||(c.source=f.join("string"==typeof t?t:""))),e!==r?(u?!h&&e[t]&&(d=!0):delete e[t],d?e[t]=n:o(e,t,n)):d?e[t]=n:s(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(e,t,n){"use strict";n.d(t,"t",(function(){return le})),n.d(t,"u",(function(){return _e})),n.d(t,"w",(function(){return we})),n.d(t,"y",(function(){return Ee})),n.d(t,"x",(function(){return r["J"]})),n.d(t,"a",(function(){return Zr})),n.d(t,"c",(function(){return or})),n.d(t,"d",(function(){return mr})),n.d(t,"e",(function(){return pr})),n.d(t,"f",(function(){return lr})),n.d(t,"g",(function(){return Rn})),n.d(t,"h",(function(){return Vr})),n.d(t,"i",(function(){return eo})),n.d(t,"j",(function(){return wr})),n.d(t,"k",(function(){return Ke})),n.d(t,"l",(function(){return hn})),n.d(t,"m",(function(){return pn})),n.d(t,"n",(function(){return Vt})),n.d(t,"o",(function(){return Wt})),n.d(t,"p",(function(){return tr})),n.d(t,"q",(function(){return St})),n.d(t,"r",(function(){return _r})),n.d(t,"s",(function(){return jt})),n.d(t,"v",(function(){return Wn})),n.d(t,"A",(function(){return Xt})),n.d(t,"B",(function(){return jn})),n.d(t,"D",(function(){return Tt})),n.d(t,"b",(function(){return ai})),n.d(t,"z",(function(){return ei})),n.d(t,"C",(function(){return ri}));var r=n("9ff4");const o=new WeakMap,i=[];let s;const a=Symbol(""),c=Symbol("");function u(e){return e&&!0===e._isEffect}function l(e,t=r["b"]){u(e)&&(e=e.raw);const n=h(e,t);return t.lazy||n(),n}function f(e){e.active&&(p(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let d=0;function h(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!i.includes(n)){p(n);try{return b(),i.push(n),s=n,e()}finally{i.pop(),y(),s=i[i.length-1]}}};return n.id=d++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function p(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let m=!0;const v=[];function g(){v.push(m),m=!1}function b(){v.push(m),m=!0}function y(){const e=v.pop();m=void 0===e||e}function _(e,t,n){if(!m||void 0===s)return;let r=o.get(e);r||o.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(s)||(i.add(s),s.deps.push(i))}function w(e,t,n,i,u,l){const f=o.get(e);if(!f)return;const d=new Set,h=e=>{e&&e.forEach(e=>{(e!==s||e.allowRecurse)&&d.add(e)})};if("clear"===t)f.forEach(h);else if("length"===n&&Object(r["n"])(e))f.forEach((e,t)=>{("length"===t||t>=i)&&h(e)});else switch(void 0!==n&&h(f.get(n)),t){case"add":Object(r["n"])(e)?Object(r["r"])(n)&&h(f.get("length")):(h(f.get(a)),Object(r["s"])(e)&&h(f.get(c)));break;case"delete":Object(r["n"])(e)||(h(f.get(a)),Object(r["s"])(e)&&h(f.get(c)));break;case"set":Object(r["s"])(e)&&h(f.get(a));break}const p=e=>{e.options.scheduler?e.options.scheduler(e):e()};d.forEach(p)}const O=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["C"])),I=T(),E=T(!1,!0),k=T(!0),j=T(!0,!0),S={};function T(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&i===(e?ae:se).get(n))return n;const s=Object(r["n"])(n);if(!e&&s&&Object(r["k"])(S,o))return Reflect.get(S,o,i);const a=Reflect.get(n,o,i);if(Object(r["C"])(o)?O.has(o):"__proto__"===o||"__v_isRef"===o)return a;if(e||_(n,"get",o),t)return a;if(ye(a)){const e=!s||!Object(r["r"])(o);return e?a.value:a}return Object(r["u"])(a)?e?de(a):le(a):a}}["includes","indexOf","lastIndexOf"].forEach(e=>{const t=Array.prototype[e];S[e]=function(...e){const n=ge(this);for(let t=0,o=this.length;t<o;t++)_(n,"get",t+"");const r=t.apply(n,e);return-1===r||!1===r?t.apply(n,e.map(ge)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{const t=Array.prototype[e];S[e]=function(...e){g();const n=t.apply(this,e);return y(),n}});const C=A(),x=A(!0);function A(e=!1){return function(t,n,o,i){const s=t[n];if(!e&&(o=ge(o),!Object(r["n"])(t)&&ye(s)&&!ye(o)))return s.value=o,!0;const a=Object(r["n"])(t)&&Object(r["r"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,o,i);return t===ge(i)&&(a?Object(r["j"])(o,s)&&w(t,"set",n,o,s):w(t,"add",n,o)),c}}function R(e,t){const n=Object(r["k"])(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&w(e,"delete",t,void 0,o),i}function P(e,t){const n=Reflect.has(e,t);return Object(r["C"])(t)&&O.has(t)||_(e,"has",t),n}function N(e){return _(e,"iterate",Object(r["n"])(e)?"length":a),Reflect.ownKeys(e)}const L={get:I,set:C,deleteProperty:R,has:P,ownKeys:N},M={get:k,set(e,t){return!0},deleteProperty(e,t){return!0}},D=Object(r["h"])({},L,{get:E,set:x}),U=(Object(r["h"])({},M,{get:j}),e=>Object(r["u"])(e)?le(e):e),F=e=>Object(r["u"])(e)?de(e):e,B=e=>e,V=e=>Reflect.getPrototypeOf(e);function $(e,t,n=!1,r=!1){e=e["__v_raw"];const o=ge(e),i=ge(t);t!==i&&!n&&_(o,"get",t),!n&&_(o,"get",i);const{has:s}=V(o),a=n?F:r?B:U;return s.call(o,t)?a(e.get(t)):s.call(o,i)?a(e.get(i)):void 0}function H(e,t=!1){const n=this["__v_raw"],r=ge(n),o=ge(e);return e!==o&&!t&&_(r,"has",e),!t&&_(r,"has",o),e===o?n.has(e):n.has(e)||n.has(o)}function z(e,t=!1){return e=e["__v_raw"],!t&&_(ge(e),"iterate",a),Reflect.get(e,"size",e)}function W(e){e=ge(e);const t=ge(this),n=V(t),r=n.has.call(t,e);return t.add(e),r||w(t,"add",e,e),this}function G(e,t){t=ge(t);const n=ge(this),{has:o,get:i}=V(n);let s=o.call(n,e);s||(e=ge(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&w(n,"set",e,t,a):w(n,"add",e,t),this}function q(e){const t=ge(this),{has:n,get:r}=V(t);let o=n.call(t,e);o||(e=ge(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&w(t,"delete",e,void 0,i),s}function K(){const e=ge(this),t=0!==e.size,n=void 0,r=e.clear();return t&&w(e,"clear",void 0,void 0,n),r}function J(e,t){return function(n,r){const o=this,i=o["__v_raw"],s=ge(i),c=e?F:t?B:U;return!e&&_(s,"iterate",a),i.forEach((e,t)=>n.call(r,c(e),c(t),o))}}function X(e,t,n){return function(...o){const i=this["__v_raw"],s=ge(i),u=Object(r["s"])(s),l="entries"===e||e===Symbol.iterator&&u,f="keys"===e&&u,d=i[e](...o),h=t?F:n?B:U;return!t&&_(s,"iterate",f?c:a),{next(){const{value:e,done:t}=d.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function Y(e){return function(...t){return"delete"!==e&&this}}const Q={get(e){return $(this,e)},get size(){return z(this)},has:H,add:W,set:G,delete:q,clear:K,forEach:J(!1,!1)},Z={get(e){return $(this,e,!1,!0)},get size(){return z(this)},has:H,add:W,set:G,delete:q,clear:K,forEach:J(!1,!0)},ee={get(e){return $(this,e,!0)},get size(){return z(this,!0)},has(e){return H.call(this,e,!0)},add:Y("add"),set:Y("set"),delete:Y("delete"),clear:Y("clear"),forEach:J(!0,!1)},te=["keys","values","entries",Symbol.iterator];function ne(e,t){const n=t?Z:e?ee:Q;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(Object(r["k"])(n,o)&&o in t?n:t,o,i)}te.forEach(e=>{Q[e]=X(e,!1,!1),ee[e]=X(e,!0,!1),Z[e]=X(e,!1,!0)});const re={get:ne(!1,!1)},oe={get:ne(!1,!0)},ie={get:ne(!0,!1)};const se=new WeakMap,ae=new WeakMap;function ce(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ue(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ce(Object(r["M"])(e))}function le(e){return e&&e["__v_isReadonly"]?e:he(e,!1,L,re)}function fe(e){return he(e,!1,D,oe)}function de(e){return he(e,!0,M,ie)}function he(e,t,n,o){if(!Object(r["u"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const i=t?ae:se,s=i.get(e);if(s)return s;const a=ue(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function pe(e){return me(e)?pe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function me(e){return!(!e||!e["__v_isReadonly"])}function ve(e){return pe(e)||me(e)}function ge(e){return e&&ge(e["__v_raw"])||e}const be=e=>Object(r["u"])(e)?le(e):e;function ye(e){return Boolean(e&&!0===e.__v_isRef)}function _e(e){return Ie(e)}function we(e){return Ie(e,!0)}class Oe{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:be(e)}get value(){return _(ge(this),"get","value"),this._value}set value(e){Object(r["j"])(ge(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:be(e),w(ge(this),"set","value",e))}}function Ie(e,t=!1){return ye(e)?e:new Oe(e,t)}function Ee(e){return ye(e)?e.value:e}const ke={get:(e,t,n)=>Ee(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return ye(o)&&!ye(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return pe(e)?e:new Proxy(e,ke)}class Se{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Te(e,t){return ye(e[t])?e[t]:new Se(e,t)}class Ce{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=l(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,w(ge(this),"set","value"))}}),this["__v_isReadonly"]=n}get value(){return this._dirty&&(this._value=this.effect(),this._dirty=!1),_(ge(this),"get","value"),this._value}set value(e){this._setter(e)}}function xe(e){let t,n;return Object(r["o"])(e)?(t=e,n=r["d"]):(t=e.get,n=e.set),new Ce(t,n,Object(r["o"])(e)||!e.set)}function Ae(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){Pe(i,t,n)}return o}function Re(e,t,n,o){if(Object(r["o"])(e)){const i=Ae(e,t,n,o);return i&&Object(r["w"])(i)&&i.catch(e=>{Pe(e,t,n)}),i}const i=[];for(let r=0;r<e.length;r++)i.push(Re(e[r],t,n,o));return i}function Pe(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,i=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,i))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Ae(s,null,10,[e,o,i])}Ne(e,n,o,r)}function Ne(e,t,n,r=!0){console.error(e)}let Le=!1,Me=!1;const De=[];let Ue=0;const Fe=[];let Be=null,Ve=0;const $e=[];let He=null,ze=0;const We=Promise.resolve();let Ge=null,qe=null;function Ke(e){const t=Ge||We;return e?t.then(this?e.bind(this):e):t}function Je(e){De.length&&De.includes(e,Le&&e.allowRecurse?Ue+1:Ue)||e===qe||(De.push(e),Xe())}function Xe(){Le||Me||(Me=!0,Ge=We.then(ot))}function Ye(e){const t=De.indexOf(e);t>-1&&De.splice(t,1)}function Qe(e,t,n,o){Object(r["n"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),Xe()}function Ze(e){Qe(e,Be,Fe,Ve)}function et(e){Qe(e,He,$e,ze)}function tt(e,t=null){if(Fe.length){for(qe=t,Be=[...new Set(Fe)],Fe.length=0,Ve=0;Ve<Be.length;Ve++)Be[Ve]();Be=null,Ve=0,qe=null,tt(e,t)}}function nt(e){if($e.length){const e=[...new Set($e)];if($e.length=0,He)return void He.push(...e);for(He=e,He.sort((e,t)=>rt(e)-rt(t)),ze=0;ze<He.length;ze++)He[ze]();He=null,ze=0}}const rt=e=>null==e.id?1/0:e.id;function ot(e){Me=!1,Le=!0,tt(e),De.sort((e,t)=>rt(e)-rt(t));try{for(Ue=0;Ue<De.length;Ue++){const e=De[Ue];e&&Ae(e,null,14)}}finally{Ue=0,De.length=0,nt(e),Le=!1,Ge=null,(De.length||$e.length)&&ot(e)}}new Set;new Map;function it(e,t,...n){const o=e.vnode.props||r["b"];let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in o){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=o[e]||r["b"];s?i=n.map(e=>e.trim()):t&&(i=n.map(r["L"]))}let c=Object(r["K"])(Object(r["e"])(t)),u=o[c];!u&&s&&(c=Object(r["K"])(Object(r["l"])(t)),u=o[c]),u&&Re(u,e,6,i);const l=o[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else(e.emitted={})[c]=!0;Re(l,e,6,i)}}function st(e,t,n=!1){if(!t.deopt&&void 0!==e.__emits)return e.__emits;const o=e.emits;let i={},s=!1;if(!Object(r["o"])(e)){const o=e=>{s=!0,Object(r["h"])(i,st(e,t,!0))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return o||s?(Object(r["n"])(o)?o.forEach(e=>i[e]=null):Object(r["h"])(i,o),e.__emits=i):e.__emits=null}function at(e,t){return!(!e||!Object(r["v"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let ct=null;function ut(e){ct=e}function lt(e){const{type:t,vnode:n,proxy:o,withProxy:i,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:f,renderCache:d,data:h,setupState:p,ctx:m}=e;let v;ct=e;try{let e;if(4&n.shapeFlag){const t=i||o;v=vr(f.call(t,t,d,s,p,h,m)),e=u}else{const n=t;0,v=vr(n.length>1?n(s,{attrs:u,slots:c,emit:l}):n(s,null)),e=t.props?u:dt(u)}let g=v;if(!1!==t.inheritAttrs&&e){const t=Object.keys(e),{shapeFlag:n}=g;t.length&&(1&n||6&n)&&(a&&t.some(r["t"])&&(e=ht(e,a)),g=dr(g,e))}n.dirs&&(g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),v=g}catch(g){Pe(g,e,1),v=lr(Yn)}return ct=null,v}function ft(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!ir(r))return;if(r.type!==Yn||"v-if"===r.children){if(t)return;t=r}}return t}const dt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["v"])(n))&&((t||(t={}))[n]=e[n]);return t},ht=(e,t)=>{const n={};for(const o in e)Object(r["t"])(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function pt(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||mt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?mt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!at(u,n))return!0}}return!1}function mt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!at(n,i))return!0}return!1}function vt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const gt=e=>e.__isSuspense;function bt(e){const{shapeFlag:t,children:n}=e;let r,o;return 32&t?(r=yt(n.default),o=yt(n.fallback)):(r=yt(n),o=vr(null)),{content:r,fallback:o}}function yt(e){if(Object(r["o"])(e)&&(e=e()),Object(r["n"])(e)){const t=ft(e);0,e=t}return vr(e)}function _t(e,t){t&&t.pendingBranch?Object(r["n"])(e)?t.effects.push(...e):t.effects.push(e):et(e)}let wt=0;const Ot=e=>wt+=e;function It(e,t=ct){if(!t)return e;const n=(...n)=>{wt||tr(!0);const r=ct;ut(t);const o=e(...n);return ut(r),wt||nr(),o};return n._c=!0,n}let Et=null;const kt=[];function jt(e){kt.push(Et=e)}function St(){kt.pop(),Et=kt[kt.length-1]||null}function Tt(e){return t=>It((function(){jt(e);const n=t.apply(this,arguments);return St(),n}))}function Ct(e,t,n,o=!1){const i={},s={};Object(r["g"])(s,ar,1),At(e,t,i,s),n?e.props=o?i:fe(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function xt(e,t,n,o){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,c=ge(i),[u]=e.propsOptions;if(!(o||a>0)||16&a){let o;At(e,t,i,s);for(const s in c)t&&(Object(r["k"])(t,s)||(o=Object(r["l"])(s))!==s&&Object(r["k"])(t,o))||(u?!n||void 0===n[s]&&void 0===n[o]||(i[s]=Rt(u,t||r["b"],s,void 0,e)):delete i[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||delete s[e]}else if(8&a){const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){const a=n[o],l=t[a];if(u)if(Object(r["k"])(s,a))s[a]=l;else{const t=Object(r["e"])(a);i[t]=Rt(u,c,t,l,e)}else s[a]=l}}w(e,"set","$attrs")}function At(e,t,n,o){const[i,s]=e.propsOptions;if(t)for(const a in t){const s=t[a];if(Object(r["x"])(a))continue;let c;i&&Object(r["k"])(i,c=Object(r["e"])(a))?n[c]=s:at(e.emitsOptions,a)||(o[a]=s)}if(s){const t=ge(n);for(let r=0;r<s.length;r++){const o=s[r];n[o]=Rt(i,t,o,t[o],e)}}}function Rt(e,t,n,o,i){const s=e[n];if(null!=s){const e=Object(r["k"])(s,"default");if(e&&void 0===o){const e=s.default;s.type!==Function&&Object(r["o"])(e)?($r(i),o=e(t),$r(null)):o=e}s[0]&&(Object(r["k"])(t,n)||e?!s[1]||""!==o&&o!==Object(r["l"])(n)||(o=!0):o=!1)}return o}function Pt(e,t,n=!1){if(!t.deopt&&e.__props)return e.__props;const o=e.props,i={},s=[];let a=!1;if(!Object(r["o"])(e)){const o=e=>{a=!0;const[n,o]=Pt(e,t,!0);Object(r["h"])(i,n),o&&s.push(...o)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!o&&!a)return e.__props=r["a"];if(Object(r["n"])(o))for(let c=0;c<o.length;c++){0;const e=Object(r["e"])(o[c]);Nt(e)&&(i[e]=r["b"])}else if(o){0;for(const e in o){const t=Object(r["e"])(e);if(Nt(t)){const n=o[e],a=i[t]=Object(r["n"])(n)||Object(r["o"])(n)?{type:n}:n;if(a){const e=Dt(Boolean,a.type),n=Dt(String,a.type);a[0]=e>-1,a[1]=n<0||e<n,(e>-1||Object(r["k"])(a,"default"))&&s.push(t)}}}}return e.__props=[i,s]}function Nt(e){return"$"!==e[0]}function Lt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Mt(e,t){return Lt(e)===Lt(t)}function Dt(e,t){if(Object(r["n"])(t)){for(let n=0,r=t.length;n<r;n++)if(Mt(t[n],e))return n}else if(Object(r["o"])(t))return Mt(t,e)?0:-1;return-1}function Ut(e,t,n=Br,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;g(),$r(n);const o=Re(t,n,e,r);return $r(null),y(),o});return r?o.unshift(i):o.push(i),i}}const Ft=e=>(t,n=Br)=>!zr&&Ut(e,t,n),Bt=Ft("bm"),Vt=Ft("m"),$t=Ft("bu"),Ht=Ft("u"),zt=Ft("bum"),Wt=Ft("um"),Gt=Ft("rtg"),qt=Ft("rtc"),Kt=(e,t=Br)=>{Ut("ec",e,t)};const Jt={};function Xt(e,t,n){return Yt(e,t,n)}function Yt(e,t,{immediate:n,deep:o,flush:i,onTrack:s,onTrigger:a}=r["b"],c=Br){let u,d,h=!1;if(ye(e)?(u=()=>e.value,h=!!e._shallow):pe(e)?(u=()=>e,o=!0):u=Object(r["n"])(e)?()=>e.map(e=>ye(e)?e.value:pe(e)?Zt(e):Object(r["o"])(e)?Ae(e,c,2):void 0):Object(r["o"])(e)?t?()=>Ae(e,c,2):()=>{if(!c||!c.isUnmounted)return d&&d(),Ae(e,c,3,[p])}:r["d"],t&&o){const e=u;u=()=>Zt(e())}const p=e=>{d=b.options.onStop=()=>{Ae(e,c,4)}};let m=Object(r["n"])(e)?[]:Jt;const v=()=>{if(b.active)if(t){const e=b();(o||h||Object(r["j"])(e,m))&&(d&&d(),Re(t,c,3,[e,m===Jt?void 0:m,p]),m=e)}else b()};let g;v.allowRecurse=!!t,g="sync"===i?v:"post"===i?()=>Ln(v,c&&c.suspense):()=>{!c||c.isMounted?Ze(v):v()};const b=l(u,{lazy:!0,onTrack:s,onTrigger:a,scheduler:g});return Xr(b,c),t?n?v():m=b():"post"===i?Ln(b,c&&c.suspense):b(),()=>{f(b),c&&Object(r["I"])(c.effects,b)}}function Qt(e,t,n){const o=this.proxy,i=Object(r["B"])(e)?()=>o[e]:e.bind(o);return Yt(i,t.bind(o),n,this)}function Zt(e,t=new Set){if(!Object(r["u"])(e)||t.has(e))return e;if(t.add(e),ye(e))Zt(e.value,t);else if(Object(r["n"])(e))for(let n=0;n<e.length;n++)Zt(e[n],t);else if(Object(r["z"])(e)||Object(r["s"])(e))e.forEach(e=>{Zt(e,t)});else for(const n in e)Zt(e[n],t);return e}function en(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vt(()=>{e.isMounted=!0}),zt(()=>{e.isUnmounting=!0}),e}const tn=[Function,Array],nn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},setup(e,{slots:t}){const n=Vr(),r=en();let o;return()=>{const i=t.default&&ln(t.default(),!0);if(!i||!i.length)return;const s=ge(e),{mode:a}=s;const c=i[0];if(r.isLeaving)return an(c);const u=cn(c);if(!u)return an(c);const l=sn(u,s,r,n);un(u,l);const f=n.subTree,d=f&&cn(f);let h=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===o?o=e:e!==o&&(o=e,h=!0)}if(d&&d.type!==Yn&&(!sr(u,d)||h)){const e=sn(d,s,r,n);if(un(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},an(c);"in-out"===a&&(e.delayLeave=(e,t,n)=>{const o=on(r,d);o[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},rn=nn;function on(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function sn(e,t,n,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:m,onAppear:v,onAfterAppear:g,onAppearCancelled:b}=t,y=String(e.key),_=on(n,e),w=(e,t)=>{e&&Re(e,r,9,t)},O={mode:i,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!o)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const i=_[y];i&&sr(e,i)&&i.el._leaveCb&&i.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,i=l;if(!n.isMounted){if(!o)return;t=v||c,r=g||u,i=b||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?i:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(f,[t]);let i=!1;const s=t._leaveCb=n=>{i||(i=!0,r(),w(n?p:h,[t]),t._leaveCb=void 0,_[o]===e&&delete _[o])};_[o]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return sn(e,t,n,r)}};return O}function an(e){if(fn(e))return e=dr(e),e.children=null,e}function cn(e){return fn(e)?e.children?e.children[0]:void 0:e}function un(e,t){6&e.shapeFlag&&e.component?un(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ln(e,t=!1){let n=[],r=0;for(let o=0;o<e.length;o++){const i=e[o];i.type===Jn?(128&i.patchFlag&&r++,n=n.concat(ln(i.children,t))):(t||i.type!==Yn)&&n.push(i)}if(r>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}const fn=e=>e.type.__isKeepAlive;RegExp,RegExp;function dn(e,t){return Object(r["n"])(e)?e.some(e=>dn(e,t)):Object(r["B"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function hn(e,t){mn(e,"a",t)}function pn(e,t){mn(e,"da",t)}function mn(e,t,n=Br){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(Ut(t,r,n),n){let e=n.parent;while(e&&e.parent)fn(e.parent.vnode)&&vn(r,t,n,e),e=e.parent}}function vn(e,t,n,o){const i=Ut(t,e,o,!0);Wt(()=>{Object(r["I"])(o[t],i)},n)}function gn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function bn(e){return 128&e.shapeFlag?e.ssContent:e}const yn=e=>"_"===e[0]||"$stable"===e,_n=e=>Object(r["n"])(e)?e.map(vr):[vr(e)],wn=(e,t,n)=>It(e=>_n(t(e)),n),On=(e,t)=>{const n=e._ctx;for(const o in e){if(yn(o))continue;const i=e[o];if(Object(r["o"])(i))t[o]=wn(o,i,n);else if(null!=i){0;const e=_n(i);t[o]=()=>e}}},In=(e,t)=>{const n=_n(t);e.slots.default=()=>n},En=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=t,Object(r["g"])(t,"_",n)):On(t,e.slots={})}else e.slots={},t&&In(e,t);Object(r["g"])(e.slots,ar,1)},kn=(e,t)=>{const{vnode:n,slots:o}=e;let i=!0,s=r["b"];if(32&n.shapeFlag){const e=t._;e?1===e?i=!1:Object(r["h"])(o,t):(i=!t.$stable,On(t,o)),s=t}else t&&(In(e,t),s={default:1});if(i)for(const r in o)yn(r)||r in s||delete o[r]};function jn(e,t){const n=ct;if(null===n)return e;const o=n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["o"])(e)&&(e={mounted:e,updated:e}),i.push({dir:e,instance:o,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Sn(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);const c=a.dir[r];c&&Re(c,n,8,[e.el,a,e,t])}}function Tn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:r["c"],errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}let Cn=0;function xn(e,t){return function(n,o=null){null==o||Object(r["u"])(o)||(o=null);const i=Tn(),s=new Set;let a=!1;const c=i.app={_uid:Cn++,_component:n,_props:o,_container:null,_context:i,version:to,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["o"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["o"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||(i.mixins.push(e),(e.props||e.emits)&&(i.deopt=!0)),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(r,s){if(!a){const u=lr(n,o);return u.appContext=i,s&&t?t(u,r):e(u,r),a=!0,c._container=r,r.__vue_app__=c,u.component.proxy}},unmount(){a&&e(null,c._container)},provide(e,t){return i.provides[e]=t,c}};return c}}function An(){}function Rn(e){return Object(r["o"])(e)?{setup:e,name:e.name}:e}const Pn=e=>!!e.type.__asyncLoader;const Nn={scheduler:Je,allowRecurse:!0};const Ln=_t,Mn=(e,t,n,o)=>{if(Object(r["n"])(e))return void e.forEach((e,i)=>Mn(e,t&&(Object(r["n"])(t)?t[i]:t),n,o));let i;i=!o||Pn(o)?null:4&o.shapeFlag?o.component.exposed||o.component.proxy:o.el;const{i:s,r:a}=e;const c=t&&t.r,u=s.refs===r["b"]?s.refs={}:s.refs,l=s.setupState;if(null!=c&&c!==a&&(Object(r["B"])(c)?(u[c]=null,Object(r["k"])(l,c)&&(l[c]=null)):ye(c)&&(c.value=null)),Object(r["B"])(a)){const e=()=>{u[a]=i,Object(r["k"])(l,a)&&(l[a]=i)};i?(e.id=-1,Ln(e,n)):e()}else if(ye(a)){const e=()=>{a.value=i};i?(e.id=-1,Ln(e,n)):e()}else Object(r["o"])(a)&&Ae(a,s,12,[i,u])};function Dn(e){return Un(e)}function Un(e,t){An();const{insert:n,remove:o,patchProp:i,forcePatchProp:s,createElement:a,createText:c,createComment:u,setText:d,setElementText:h,parentNode:p,nextSibling:m,setScopeId:v=r["d"],cloneNode:g,insertStaticContent:b}=e,y=(e,t,n,r=null,o=null,i=null,s=!1,a=!1)=>{e&&!sr(e,t)&&(r=q(e),$(e,o,i,!0),e=null),-2===t.patchFlag&&(a=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:l}=t;switch(c){case Xn:_(e,t,n,r);break;case Yn:w(e,t,n,r);break;case Qn:null==e&&O(t,n,r,s);break;case Jn:R(e,t,n,r,o,i,s,a);break;default:1&l?k(e,t,n,r,o,i,s,a):6&l?P(e,t,n,r,o,i,s,a):(64&l||128&l)&&c.process(e,t,n,r,o,i,s,a,J)}null!=u&&o&&Mn(u,e&&e.ref,i,t)},_=(e,t,r,o)=>{if(null==e)n(t.el=c(t.children),r,o);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},w=(e,t,r,o)=>{null==e?n(t.el=u(t.children||""),r,o):t.el=e.el},O=(e,t,n,r)=>{[e.el,e.anchor]=b(e.children,t,n,r)},I=({el:e,anchor:t},r,o)=>{let i;while(e&&e!==t)i=m(e),n(e,r,o),e=i;n(t,r,o)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=m(e),o(e),e=n;o(t)},k=(e,t,n,r,o,i,s,a)=>{s=s||"svg"===t.type,null==e?j(t,n,r,o,i,s,a):C(e,t,o,i,s,a)},j=(e,t,o,s,c,u,l)=>{let f,d;const{type:p,props:m,shapeFlag:v,transition:b,scopeId:y,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==g&&-1===_)f=e.el=g(e.el);else{if(f=e.el=a(e.type,u,m&&m.is),8&v?h(f,e.children):16&v&&T(e.children,f,null,s,c,u&&"foreignObject"!==p,l||!!e.dynamicChildren),w&&Sn(e,null,s,"created"),m){for(const t in m)Object(r["x"])(t)||i(f,t,null,m[t],u,e.children,s,c,G);(d=m.onVnodeBeforeMount)&&Fn(d,s,e)}S(f,y,e,s)}w&&Sn(e,null,s,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;O&&b.beforeEnter(f),n(f,t,o),((d=m&&m.onVnodeMounted)||O||w)&&Ln(()=>{d&&Fn(d,s,e),O&&b.enter(f),w&&Sn(e,null,s,"mounted")},c)},S=(e,t,n,r)=>{if(t&&v(e,t),r){const o=r.type.__scopeId;o&&o!==t&&v(e,o+"-s");let i=r.subTree;0,n===i&&S(e,r.vnode.scopeId,r.vnode,r.parent)}},T=(e,t,n,r,o,i,s,a=0)=>{for(let c=a;c<e.length;c++){const a=e[c]=s?gr(e[c]):vr(e[c]);y(null,a,t,n,r,o,i,s)}},C=(e,t,n,o,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=t;l|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let v;if((v=m.onVnodeBeforeUpdate)&&Fn(v,n,t,e),d&&Sn(t,e,n,"beforeUpdate"),l>0){if(16&l)A(u,t,p,m,n,o,a);else if(2&l&&p.class!==m.class&&i(u,"class",null,m.class,a),4&l&&i(u,"style",p.style,m.style,a),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const c=r[t],l=p[c],f=m[c];(f!==l||s&&s(u,c))&&i(u,c,l,f,a,e.children,n,o,G)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=f||A(u,t,p,m,n,o,a);const g=a&&"foreignObject"!==t.type;f?x(e.dynamicChildren,f,u,n,o,g):c||U(e,t,u,null,n,o,g),((v=m.onVnodeUpdated)||d)&&Ln(()=>{v&&Fn(v,n,t,e),d&&Sn(t,e,n,"updated")},o)},x=(e,t,n,r,o,i)=>{for(let s=0;s<t.length;s++){const a=e[s],c=t[s],u=a.type===Jn||!sr(a,c)||6&a.shapeFlag||64&a.shapeFlag?p(a.el):n;y(a,c,u,null,r,o,i,!0)}},A=(e,t,n,o,a,c,u)=>{if(n!==o){for(const l in o){if(Object(r["x"])(l))continue;const f=o[l],d=n[l];(f!==d||s&&s(e,l))&&i(e,l,d,f,u,t.children,a,c,G)}if(n!==r["b"])for(const s in n)Object(r["x"])(s)||s in o||i(e,s,n[s],null,u,t.children,a,c,G)}},R=(e,t,r,o,i,s,a,u)=>{const l=t.el=e?e.el:c(""),f=t.anchor=e?e.anchor:c("");let{patchFlag:d,dynamicChildren:h}=t;d>0&&(u=!0),null==e?(n(l,r,o),n(f,r,o),T(t.children,r,f,i,s,a,u)):d>0&&64&d&&h&&e.dynamicChildren?(x(e.dynamicChildren,h,r,i,s,a),(null!=t.key||i&&t===i.subTree)&&Bn(e,t,!0)):U(e,t,r,f,i,s,a,u)},P=(e,t,n,r,o,i,s,a)=>{null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,a):N(t,n,r,o,i,s,a):L(e,t,a)},N=(e,t,n,r,o,i,s)=>{const a=e.component=Fr(e,r,o);if(fn(e)&&(a.ctx.renderer=J),Wr(a),a.asyncDep){if(o&&o.registerDep(a,M),!e.el){const e=a.subTree=lr(Yn);w(null,e,t,n)}}else M(a,e,t,n,o,i,s)},L=(e,t,n)=>{const r=t.component=e.component;if(pt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void D(r,t,n);r.next=t,Ye(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},M=(e,t,n,o,i,s,a)=>{e.update=l((function(){if(e.isMounted){let t,{next:n,bu:o,u:c,parent:u,vnode:l}=e,f=n;0,n?(n.el=l.el,D(e,n,a)):n=l,o&&Object(r["m"])(o),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Fn(t,u,n,l);const d=lt(e);0;const h=e.subTree;e.subTree=d,y(h,d,p(h.el),q(h),e,i,s),n.el=d.el,null===f&&vt(e,d.el),c&&Ln(c,i),(t=n.props&&n.props.onVnodeUpdated)&&Ln(()=>{Fn(t,u,n,l)},i)}else{let a;const{el:c,props:u}=t,{bm:l,m:f,parent:d}=e;l&&Object(r["m"])(l),(a=u&&u.onVnodeBeforeMount)&&Fn(a,d,t);const h=e.subTree=lt(e);if(c&&Y?Y(t.el,h,e,i):(y(null,h,n,o,e,i,s),t.el=h.el),f&&Ln(f,i),a=u&&u.onVnodeMounted){const e=t;Ln(()=>{Fn(a,d,e)},i)}const{a:p}=e;p&&256&t.shapeFlag&&Ln(p,i),e.isMounted=!0,t=n=o=null}}),Nn)},D=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,xt(e,t.props,r,n),kn(e,t.children),tt(void 0,e.update)},U=(e,t,n,r,o,i,s,a=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,l=t.children,{patchFlag:f,shapeFlag:d}=t;if(f>0){if(128&f)return void B(c,l,n,r,o,i,s,a);if(256&f)return void F(c,l,n,r,o,i,s,a)}8&d?(16&u&&G(c,o,i),l!==c&&h(n,l)):16&u?16&d?B(c,l,n,r,o,i,s,a):G(c,o,i,!0):(8&u&&h(n,""),16&d&&T(l,n,r,o,i,s,a))},F=(e,t,n,o,i,s,a,c)=>{e=e||r["a"],t=t||r["a"];const u=e.length,l=t.length,f=Math.min(u,l);let d;for(d=0;d<f;d++){const r=t[d]=c?gr(t[d]):vr(t[d]);y(e[d],r,n,null,i,s,a,c)}u>l?G(e,i,s,!0,!1,f):T(t,n,o,i,s,a,c,f)},B=(e,t,n,o,i,s,a,c)=>{let u=0;const l=t.length;let f=e.length-1,d=l-1;while(u<=f&&u<=d){const r=e[u],o=t[u]=c?gr(t[u]):vr(t[u]);if(!sr(r,o))break;y(r,o,n,null,i,s,a,c),u++}while(u<=f&&u<=d){const r=e[f],o=t[d]=c?gr(t[d]):vr(t[d]);if(!sr(r,o))break;y(r,o,n,null,i,s,a,c),f--,d--}if(u>f){if(u<=d){const e=d+1,r=e<l?t[e].el:o;while(u<=d)y(null,t[u]=c?gr(t[u]):vr(t[u]),n,r,i,s,a),u++}}else if(u>d)while(u<=f)$(e[u],i,s,!0),u++;else{const h=u,p=u,m=new Map;for(u=p;u<=d;u++){const e=t[u]=c?gr(t[u]):vr(t[u]);null!=e.key&&m.set(e.key,u)}let v,g=0;const b=d-p+1;let _=!1,w=0;const O=new Array(b);for(u=0;u<b;u++)O[u]=0;for(u=h;u<=f;u++){const r=e[u];if(g>=b){$(r,i,s,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(v=p;v<=d;v++)if(0===O[v-p]&&sr(r,t[v])){o=v;break}void 0===o?$(r,i,s,!0):(O[o-p]=u+1,o>=w?w=o:_=!0,y(r,t[o],n,null,i,s,a,c),g++)}const I=_?Vn(O):r["a"];for(v=I.length-1,u=b-1;u>=0;u--){const e=p+u,r=t[e],c=e+1<l?t[e+1].el:o;0===O[u]?y(null,r,n,c,i,s,a):_&&(v<0||u!==I[v]?V(r,n,c,2):v--)}}},V=(e,t,r,o,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void V(e.component.subTree,t,r,o);if(128&l)return void e.suspense.move(t,r,o);if(64&l)return void a.move(e,t,r,J);if(a===Jn){n(s,t,r);for(let e=0;e<u.length;e++)V(u[e],t,r,o);return void n(e.anchor,t,r)}if(a===Qn)return void I(e,t,r);const f=2!==o&&1&l&&c;if(f)if(0===o)c.beforeEnter(s),n(s,t,r),Ln(()=>c.enter(s),i);else{const{leave:e,delayLeave:o,afterLeave:i}=c,a=()=>n(s,t,r),u=()=>{e(s,()=>{a(),i&&i()})};o?o(s,a,u):u()}else n(s,t,r)},$=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:f,dirs:d}=e;if(null!=a&&Mn(a,null,n,null),256&l)return void t.ctx.deactivate(e);const h=1&l&&d;let p;if((p=s&&s.onVnodeBeforeUnmount)&&Fn(p,t,e),6&l)W(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&Sn(e,null,t,"beforeUnmount"),u&&(i!==Jn||f>0&&64&f)?G(u,t,n,!1,!0):(i===Jn&&(128&f||256&f)||!o&&16&l)&&G(c,t,n),64&l&&(r||!Hn(e.props))&&e.type.remove(e,J),r&&H(e)}((p=s&&s.onVnodeUnmounted)||h)&&Ln(()=>{p&&Fn(p,t,e),h&&Sn(e,null,t,"unmounted")},n)},H=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Jn)return void z(n,r);if(t===Qn)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},z=(e,t)=>{let n;while(e!==t)n=m(e),o(e),e=n;o(t)},W=(e,t,n)=>{const{bum:o,effects:i,update:s,subTree:a,um:c}=e;if(o&&Object(r["m"])(o),i)for(let r=0;r<i.length;r++)f(i[r]);s&&(f(s),$(a,e,t,n)),c&&Ln(c,t),Ln(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)$(e[s],t,n,r,o)},q=e=>6&e.shapeFlag?q(e.component.subTree):128&e.shapeFlag?e.suspense.next():m(e.anchor||e.el),K=(e,t)=>{null==e?t._vnode&&$(t._vnode,null,null,!0):y(t._vnode||null,e,t),nt(),t._vnode=e},J={p:y,um:$,m:V,r:H,mt:N,mc:T,pc:U,pbc:x,n:q,o:e};let X,Y;return t&&([X,Y]=t(J)),{render:K,hydrate:X,createApp:xn(K,X)}}function Fn(e,t,n,r=null){Re(e,t,7,[n,r])}function Bn(e,t,n=!1){const o=e.children,i=t.children;if(Object(r["n"])(o)&&Object(r["n"])(i))for(let r=0;r<o.length;r++){const e=o[r];let t=i[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[r]=gr(i[r]),t.el=e.el),n||Bn(e,t))}}function Vn(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=(i+s)/2|0,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}const $n=e=>e.__isTeleport,Hn=e=>e&&(e.disabled||""===e.disabled);const zn="components";function Wn(e){return qn(zn,e)||e}const Gn=Symbol();function qn(e,t,n=!0){const o=ct||Br;if(o){const n=o.type;if(e===zn){if("_self"===t)return n;const e=Yr(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const i=Kn(o[e]||n[e],t)||Kn(o.appContext[e],t);return i}}function Kn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Jn=Symbol(void 0),Xn=Symbol(void 0),Yn=Symbol(void 0),Qn=Symbol(void 0),Zn=[];let er=null;function tr(e=!1){Zn.push(er=e?null:[])}function nr(){Zn.pop(),er=Zn[Zn.length-1]||null}let rr=1;function or(e,t,n,o,i){const s=lr(e,t,n,o,i,!0);return s.dynamicChildren=er||r["a"],nr(),rr>0&&er&&er.push(s),s}function ir(e){return!!e&&!0===e.__v_isVNode}function sr(e,t){return e.type===t.type&&e.key===t.key}const ar="__vInternal",cr=({key:e})=>null!=e?e:null,ur=({ref:e})=>null!=e?Object(r["B"])(e)||ye(e)||Object(r["o"])(e)?{i:ct,r:e}:e:null,lr=fr;function fr(e,t=null,n=null,o=0,i=null,s=!1){if(e&&e!==Gn||(e=Yn),ir(e)){const r=dr(e,t,!0);return n&&br(r,n),r}if(Qr(e)&&(e=e.__vccOpts),t){(ve(t)||ar in t)&&(t=Object(r["h"])({},t));let{class:e,style:n}=t;e&&!Object(r["B"])(e)&&(t.class=Object(r["G"])(e)),Object(r["u"])(n)&&(ve(n)&&!Object(r["n"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["H"])(n))}const a=Object(r["B"])(e)?1:gt(e)?128:$n(e)?64:Object(r["u"])(e)?4:Object(r["o"])(e)?2:0;const c={__v_isVNode:!0,["__v_skip"]:!0,type:e,props:t,key:t&&cr(t),ref:t&&ur(t),scopeId:Et,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};if(br(c,n),128&a){const{content:e,fallback:t}=bt(c);c.ssContent=e,c.ssFallback=t}return rr>0&&!s&&er&&(o>0||6&a)&&32!==o&&er.push(c),c}function dr(e,t,n=!1){const{props:o,ref:i,patchFlag:s}=e,a=t?yr(o||{},t):o;return{__v_isVNode:!0,["__v_skip"]:!0,type:e.type,props:a,key:a&&cr(a),ref:t&&t.ref?n&&i?Object(r["n"])(i)?i.concat(ur(t)):[i,ur(t)]:ur(t):i,scopeId:e.scopeId,children:e.children,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Jn?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dr(e.ssContent),ssFallback:e.ssFallback&&dr(e.ssFallback),el:e.el,anchor:e.anchor}}function hr(e=" ",t=0){return lr(Xn,null,e,t)}function pr(e,t){const n=lr(Qn,null,e);return n.staticCount=t,n}function mr(e="",t=!1){return t?(tr(),or(Yn,null,e)):lr(Yn,null,e)}function vr(e){return null==e||"boolean"===typeof e?lr(Yn):Object(r["n"])(e)?lr(Jn,null,e):"object"===typeof e?null===e.el?e:dr(e):lr(Xn,null,String(e))}function gr(e){return null===e.el?e:dr(e)}function br(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(Object(r["n"])(t))n=16;else if("object"===typeof t){if(1&o||64&o){const n=t.default;return void(n&&(n._c&&Ot(1),br(e,n()),n._c&&Ot(-1)))}{n=32;const r=t._;r||ar in t?3===r&&ct&&(1024&ct.vnode.patchFlag?(t._=2,e.patchFlag|=1024):t._=1):t._ctx=ct}}else Object(r["o"])(t)?(t={default:t,_ctx:ct},n=32):(t=String(t),64&o?(n=16,t=[hr(t)]):n=8);e.children=t,e.shapeFlag|=n}function yr(...e){const t=Object(r["h"])({},e[0]);for(let n=1;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=Object(r["G"])([t.class,o.class]));else if("style"===e)t.style=Object(r["H"])([t.style,o.style]);else if(Object(r["v"])(e)){const n=t[e],r=o[e];n!==r&&(t[e]=n?[].concat(n,o[e]):r)}else""!==e&&(t[e]=o[e])}return t}function _r(e,t){if(Br){let n=Br.provides;const r=Br.parent&&Br.parent.provides;r===n&&(n=Br.provides=Object.create(r)),n[e]=t}else 0}function wr(e,t,n=!1){const o=Br||ct;if(o){const i=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Object(r["o"])(t)?t():t}else 0}let Or=!1;function Ir(e,t,n=[],o=[],i=[],s=!1){const{mixins:a,extends:c,data:u,computed:l,methods:f,watch:d,provide:h,inject:p,components:m,directives:v,beforeMount:g,mounted:b,beforeUpdate:y,updated:_,activated:w,deactivated:O,beforeDestroy:I,beforeUnmount:E,destroyed:k,unmounted:j,render:S,renderTracked:T,renderTriggered:C,errorCaptured:x,expose:A}=t,R=e.proxy,P=e.ctx,N=e.appContext.mixins;s&&S&&e.render===r["d"]&&(e.render=S),s||(Or=!0,Er("beforeCreate","bc",t,e,N),Or=!1,Sr(e,N,n,o,i)),c&&Ir(e,c,n,o,i,!0),a&&Sr(e,a,n,o,i);if(p)if(Object(r["n"])(p))for(let r=0;r<p.length;r++){const e=p[r];P[e]=wr(e)}else for(const L in p){const e=p[L];Object(r["u"])(e)?P[L]=wr(e.from||L,e.default,!0):P[L]=wr(e)}if(f)for(const L in f){const e=f[L];Object(r["o"])(e)&&(P[L]=e.bind(R))}if(s?u&&n.push(u):(n.length&&n.forEach(t=>Tr(e,t,R)),u&&Tr(e,u,R)),l)for(const L in l){const e=l[L],t=Object(r["o"])(e)?e.bind(R,R):Object(r["o"])(e.get)?e.get.bind(R,R):r["d"];0;const n=!Object(r["o"])(e)&&Object(r["o"])(e.set)?e.set.bind(R):r["d"],o=Zr({get:t,set:n});Object.defineProperty(P,L,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e})}if(d&&o.push(d),!s&&o.length&&o.forEach(e=>{for(const t in e)Cr(e[t],P,R,t)}),h&&i.push(h),!s&&i.length&&i.forEach(e=>{const t=Object(r["o"])(e)?e.call(R):e;Reflect.ownKeys(t).forEach(e=>{_r(e,t[e])})}),s&&(m&&Object(r["h"])(e.components||(e.components=Object(r["h"])({},e.type.components)),m),v&&Object(r["h"])(e.directives||(e.directives=Object(r["h"])({},e.type.directives)),v)),s||Er("created","c",t,e,N),g&&Bt(g.bind(R)),b&&Vt(b.bind(R)),y&&$t(y.bind(R)),_&&Ht(_.bind(R)),w&&hn(w.bind(R)),O&&pn(O.bind(R)),x&&Kt(x.bind(R)),T&&qt(T.bind(R)),C&&Gt(C.bind(R)),E&&zt(E.bind(R)),j&&Wt(j.bind(R)),Object(r["n"])(A))if(s)0;else if(A.length){const t=e.exposed||(e.exposed=je({}));A.forEach(e=>{t[e]=Te(R,e)})}else e.exposed||(e.exposed=r["b"])}function Er(e,t,n,r,o){jr(e,t,o,r);const{extends:i,mixins:s}=n;i&&kr(e,t,i,r),s&&jr(e,t,s,r);const a=n[e];a&&Re(a.bind(r.proxy),r,t)}function kr(e,t,n,r){n.extends&&kr(e,t,n.extends,r);const o=n[e];o&&Re(o.bind(r.proxy),r,t)}function jr(e,t,n,r){for(let o=0;o<n.length;o++){const i=n[o].mixins;i&&jr(e,t,i,r);const s=n[o][e];s&&Re(s.bind(r.proxy),r,t)}}function Sr(e,t,n,r,o){for(let i=0;i<t.length;i++)Ir(e,t[i],n,r,o,!0)}function Tr(e,t,n){const o=t.call(n,n);Object(r["u"])(o)&&(e.data===r["b"]?e.data=le(o):Object(r["h"])(e.data,o))}function Cr(e,t,n,o){const i=o.includes(".")?xr(n,o):()=>n[o];if(Object(r["B"])(e)){const n=t[e];Object(r["o"])(n)&&Xt(i,n)}else if(Object(r["o"])(e))Xt(i,e.bind(n));else if(Object(r["u"])(e))if(Object(r["n"])(e))e.forEach(e=>Cr(e,t,n,o));else{const o=Object(r["o"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["o"])(o)&&Xt(i,o,e)}else 0}function xr(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Ar(e){const t=e.type,{__merged:n,mixins:r,extends:o}=t;if(n)return n;const i=e.appContext.mixins;if(!i.length&&!r&&!o)return t;const s={};return i.forEach(t=>Rr(s,t,e)),Rr(s,t,e),t.__merged=s}function Rr(e,t,n){const o=n.appContext.config.optionMergeStrategies,{mixins:i,extends:s}=t;s&&Rr(e,s,n),i&&i.forEach(t=>Rr(e,t,n));for(const a in t)o&&Object(r["k"])(o,a)?e[a]=o[a](e[a],t[a],n.proxy,a):e[a]=t[a]}const Pr=e=>e&&(e.proxy?e.proxy:Pr(e.parent)),Nr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Pr(e.parent),$root:e=>e.root&&e.root.proxy,$emit:e=>e.emit,$options:e=>Ar(e),$forceUpdate:e=>()=>Je(e.update),$nextTick:e=>Ke.bind(e.proxy),$watch:e=>Qt.bind(e)}),Lr={get({_:e},t){const{ctx:n,setupState:o,data:i,props:s,accessCache:a,type:c,appContext:u}=e;if("__v_skip"===t)return!0;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 0:return o[t];case 1:return i[t];case 3:return n[t];case 2:return s[t]}else{if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=0,o[t];if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=2,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=3,n[t];Or||(a[t]=4)}}const f=Nr[t];let d,h;return f?("$attrs"===t&&_(e,"get",t),f(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=3,n[t]):(h=u.config.globalProperties,Object(r["k"])(h,t)?h[t]:void 0)},set({_:e},t,n){const{data:o,setupState:i,ctx:s}=e;if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(t in e.props)return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,propsOptions:s}},a){let c;return void 0!==n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(o,a)||Object(r["k"])(Nr,a)||Object(r["k"])(i.config.globalProperties,a)}};const Mr=Object(r["h"])({},Lr,{get(e,t){if(t!==Symbol.unscopables)return Lr.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!Object(r["p"])(t);return n}});const Dr=Tn();let Ur=0;function Fr(e,t,n){const o=e.type,i=(t?t.appContext:e.appContext)||Dr,s={uid:Ur++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pt(o,i),emitsOptions:st(o,i),emit:null,emitted:null,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=it.bind(null,s),s}let Br=null;const Vr=()=>Br||ct,$r=e=>{Br=e};let Hr,zr=!1;function Wr(e,t=!1){zr=t;const{props:n,children:r,shapeFlag:o}=e.vnode,i=4&o;Ct(e,n,i,t),En(e,r);const s=i?Gr(e,t):void 0;return zr=!1,s}function Gr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Lr);const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Jr(e):null;Br=e,g();const i=Ae(o,e,0,[e.props,n]);if(y(),Br=null,Object(r["w"])(i)){if(t)return i.then(t=>{qr(e,t)});e.asyncDep=i}else qr(e,i)}else Kr(e)}function qr(e,t,n){Object(r["o"])(t)?e.render=t:Object(r["u"])(t)&&(e.setupState=je(t)),Kr(e)}function Kr(e,t){const n=e.type;e.render||(Hr&&n.template&&!n.render&&(n.render=Hr(n.template,{isCustomElement:e.appContext.config.isCustomElement,delimiters:n.delimiters})),e.render=n.render||r["d"],e.render._rc&&(e.withProxy=new Proxy(e.ctx,Mr))),Br=e,g(),Ir(e,n),y(),Br=null}function Jr(e){const t=t=>{e.exposed=je(t)};return{attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}function Xr(e,t=Br){t&&(t.effects||(t.effects=[])).push(e)}function Yr(e){return Object(r["o"])(e)&&e.displayName||e.name}function Qr(e){return Object(r["o"])(e)&&"__vccOpts"in e}function Zr(e){const t=xe(e);return Xr(t.effect),t}function eo(e,t,n){const o=arguments.length;return 2===o?Object(r["u"])(t)&&!Object(r["n"])(t)?ir(t)?lr(e,null,[t]):lr(e,t):lr(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&ir(n)&&(n=[n]),lr(e,t,n))}Symbol("");const to="3.0.5",no="http://www.w3.org/2000/svg",ro="undefined"!==typeof document?document:null;let oo,io;const so={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n)=>t?ro.createElementNS(no,e):ro.createElement(e,n?{is:n}:void 0),createText:e=>ro.createTextNode(e),createComment:e=>ro.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ro.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){return e.cloneNode(!0)},insertStaticContent(e,t,n,r){const o=r?io||(io=ro.createElementNS(no,"svg")):oo||(oo=ro.createElement("div"));o.innerHTML=e;const i=o.firstChild;let s=i,a=s;while(s)a=s,so.insert(s,t,n),s=o.firstChild;return[i,a]}};function ao(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}function co(e,t,n){const o=e.style;if(n)if(Object(r["B"])(n))t!==n&&(o.cssText=n);else{for(const e in n)lo(o,e,n[e]);if(t&&!Object(r["B"])(t))for(const e in t)null==n[e]&&lo(o,e,"")}else e.removeAttribute("style")}const uo=/\s*!important$/;function lo(e,t,n){if(Object(r["n"])(n))n.forEach(n=>lo(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const o=po(e,t);uo.test(n)?e.setProperty(Object(r["l"])(o),n.replace(uo,""),"important"):e[o]=n}}const fo=["Webkit","Moz","ms"],ho={};function po(e,t){const n=ho[t];if(n)return n;let o=Object(r["e"])(t);if("filter"!==o&&o in e)return ho[t]=o;o=Object(r["f"])(o);for(let r=0;r<fo.length;r++){const n=fo[r]+o;if(n in e)return ho[t]=n}return t}const mo="http://www.w3.org/1999/xlink";function vo(e,t,n,o){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(mo,t.slice(6,t.length)):e.setAttributeNS(mo,t,n);else{const o=Object(r["A"])(t);null==n||o&&!1===n?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function go(e,t,n,r,o,i,s){if("innerHTML"===t||"textContent"===t)return r&&s(r,o,i),void(e[t]=null==n?"":n);if("value"!==t||"PROGRESS"===e.tagName){if(""===n||null==n){const r=typeof e[t];if(""===n&&"boolean"===r)return void(e[t]=!0);if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n}catch(a){0}}else{e._value=n;const t=null==n?"":n;e.value!==t&&(e.value=t)}}let bo=Date.now;"undefined"!==typeof document&&bo()>document.createEvent("Event").timeStamp&&(bo=()=>performance.now());let yo=0;const _o=Promise.resolve(),wo=()=>{yo=0},Oo=()=>yo||(_o.then(wo),yo=bo());function Io(e,t,n,r){e.addEventListener(t,n,r)}function Eo(e,t,n,r){e.removeEventListener(t,n,r)}function ko(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=So(t);if(r){const s=i[t]=To(r,o);Io(e,n,s,a)}else s&&(Eo(e,n,s,a),i[t]=void 0)}}const jo=/(?:Once|Passive|Capture)$/;function So(e){let t;if(jo.test(e)){let n;t={};while(n=e.match(jo))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e.slice(2).toLowerCase(),t]}function To(e,t){const n=e=>{const r=e.timeStamp||bo();r>=n.attached-1&&Re(Co(e,n.value),t,5,[e])};return n.value=e,n.attached=Oo(),n}function Co(e,t){if(Object(r["n"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const xo=/^on[a-z]/,Ao=(e,t)=>"value"===t,Ro=(e,t,n,o,i=!1,s,a,c,u)=>{switch(t){case"class":ao(e,o,i);break;case"style":co(e,n,o);break;default:Object(r["v"])(t)?Object(r["t"])(t)||ko(e,t,n,o,a):Po(e,t,o,i)?go(e,t,o,s,a,c,u):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),vo(e,t,o,i));break}};function Po(e,t,n,o){return o?"innerHTML"===t||!!(t in e&&xo.test(t)&&Object(r["o"])(n)):"spellcheck"!==t&&"draggable"!==t&&(("form"!==t||"string"!==typeof n)&&(("list"!==t||"INPUT"!==e.tagName)&&((!xo.test(t)||!Object(r["B"])(n))&&t in e)))}const No="transition",Lo="animation",Mo=(e,{slots:t})=>eo(rn,Uo(e),t);Mo.displayName="Transition";const Do={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Mo.props=Object(r["h"])({},rn.props,Do);function Uo(e){let{name:t="v",type:n,css:o=!0,duration:i,enterFromClass:s=t+"-enter-from",enterActiveClass:a=t+"-enter-active",enterToClass:c=t+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:f=c,leaveFromClass:d=t+"-leave-from",leaveActiveClass:h=t+"-leave-active",leaveToClass:p=t+"-leave-to"}=e;const m={};for(const r in e)r in Do||(m[r]=e[r]);if(!o)return m;const v=Fo(i),g=v&&v[0],b=v&&v[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:w,onLeave:O,onLeaveCancelled:I,onBeforeAppear:E=y,onAppear:k=_,onAppearCancelled:j=w}=m,S=(e,t,n)=>{$o(e,t?f:c),$o(e,t?l:a),n&&n()},T=(e,t)=>{$o(e,p),$o(e,h),t&&t()},C=e=>(t,r)=>{const o=e?k:_,i=()=>S(t,e,r);o&&o(t,i),Ho(()=>{$o(t,e?u:s),Vo(t,e?f:c),o&&o.length>1||Wo(t,n,g,i)})};return Object(r["h"])(m,{onBeforeEnter(e){y&&y(e),Vo(e,s),Vo(e,a)},onBeforeAppear(e){E&&E(e),Vo(e,u),Vo(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){const r=()=>T(e,t);Vo(e,d),Jo(),Vo(e,h),Ho(()=>{$o(e,d),Vo(e,p),O&&O.length>1||Wo(e,n,b,r)}),O&&O(e,r)},onEnterCancelled(e){S(e,!1),w&&w(e)},onAppearCancelled(e){S(e,!0),j&&j(e)},onLeaveCancelled(e){T(e),I&&I(e)}})}function Fo(e){if(null==e)return null;if(Object(r["u"])(e))return[Bo(e.enter),Bo(e.leave)];{const t=Bo(e);return[t,t]}}function Bo(e){const t=Object(r["L"])(e);return t}function Vo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function $o(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ho(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let zo=0;function Wo(e,t,n,r){const o=e._endId=++zo,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=Go(e,t);if(!s)return r();const u=s+"end";let l=0;const f=()=>{e.removeEventListener(u,d),i()},d=t=>{t.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,d)}function Go(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(No+"Delay"),i=r(No+"Duration"),s=qo(o,i),a=r(Lo+"Delay"),c=r(Lo+"Duration"),u=qo(a,c);let l=null,f=0,d=0;t===No?s>0&&(l=No,f=s,d=i.length):t===Lo?u>0&&(l=Lo,f=u,d=c.length):(f=Math.max(s,u),l=f>0?s>u?No:Lo:null,d=l?l===No?i.length:c.length:0);const h=l===No&&/\b(transform|all)(,|$)/.test(n[No+"Property"]);return{type:l,timeout:f,propCount:d,hasTransform:h}}function qo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>Ko(t)+Ko(e[n])))}function Ko(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Jo(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Xo=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["n"])(t)?e=>Object(r["m"])(t,e):t};function Yo(e){e.target.composing=!0}function Qo(e){const t=e.target;t.composing&&(t.composing=!1,Zo(t,"input"))}function Zo(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const ei={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e._assign=Xo(i);const s=o||"number"===e.type;Io(e,t?"change":"input",t=>{if(t.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=Object(r["L"])(o)),e._assign(o)}),n&&Io(e,"change",()=>{e.value=e.value.trim()}),t||(Io(e,"compositionstart",Yo),Io(e,"compositionend",Qo),Io(e,"change",Qo))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{trim:n,number:o}},i){if(e._assign=Xo(i),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["L"])(e.value)===t)return}const s=null==t?"":t;e.value!==s&&(e.value=s)}};const ti=["ctrl","shift","alt","meta"],ni={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ti.some(n=>e[n+"Key"]&&!t.includes(n))},ri=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ni[t[e]];if(r&&r(n,t))return}return e(n,...r)};const oi=Object(r["h"])({patchProp:Ro,forcePatchProp:Ao},so);let ii;function si(){return ii||(ii=Dn(oi))}const ai=(...e)=>{const t=si().createApp(...e);const{mount:n}=t;return t.mount=e=>{const o=ci(e);if(!o)return;const i=t._component;Object(r["o"])(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const s=n(o);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function ci(e){if(Object(r["B"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7c73":function(e,t,n){var r,o=n("825a"),i=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),f=">",d="<",h="prototype",p="script",m=l("IE_PROTO"),v=function(){},g=function(e){return d+p+f+e+d+"/"+p+f},b=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},_=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}_=r?b(r):y();var e=s.length;while(e--)delete _[h][s[e]];return _()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[h]=o(e),n=new v,v[h]=null,n[m]=e):n=_(),void 0===t?n:i(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),o=n("9ed3"),i=n("e163"),s=n("d2bb"),a=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),f=n("c430"),d=n("3f8c"),h=n("ae93"),p=h.IteratorPrototype,m=h.BUGGY_SAFARI_ITERATORS,v=l("iterator"),g="keys",b="values",y="entries",_=function(){return this};e.exports=function(e,t,n,l,h,w,O){o(n,t,l);var I,E,k,j=function(e){if(e===h&&A)return A;if(!m&&e in C)return C[e];switch(e){case g:return function(){return new n(this,e)};case b:return function(){return new n(this,e)};case y:return function(){return new n(this,e)}}return function(){return new n(this)}},S=t+" Iterator",T=!1,C=e.prototype,x=C[v]||C["@@iterator"]||h&&C[h],A=!m&&x||j(h),R="Array"==t&&C.entries||x;if(R&&(I=i(R.call(new e)),p!==Object.prototype&&I.next&&(f||i(I)===p||(s?s(I,p):"function"!=typeof I[v]&&c(I,v,_)),a(I,S,!0,!0),f&&(d[S]=_))),h==b&&x&&x.name!==b&&(T=!0,A=function(){return x.call(this)}),f&&!O||C[v]===A||c(C,v,A),d[t]=A,h)if(E={values:j(b),keys:w?A:j(g),entries:j(y)},O)for(k in E)(m||T||!(k in C))&&u(C,k,E[k]);else r({target:t,proto:!0,forced:m||T},E);return E}},"7f9a":function(e,t,n){var r=n("da84"),o=n("8925"),i=r.WeakMap;e.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},8925:function(e,t,n){var r=n("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9483:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,o=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function i(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var i=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){o()?(c(e,i,n),navigator.serviceWorker.ready.then((function(e){i("ready",e)})).catch((function(e){return s(i,e)}))):(a(e,i,n),navigator.serviceWorker.ready.then((function(e){i("ready",e)})).catch((function(e){return s(i,e)})))}))}function s(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return s(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return s(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return s(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},"94ca":function(e,t,n){var r=n("d039"),o=/#|\.prototype\./,i=function(e,t){var n=a[s(e)];return n==u||n!=c&&("function"==typeof t?r(t):!!t)},s=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(R){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),s=new C(r||[]);return i._invoke=k(e,n,s),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}e.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={};function v(){}function g(){}function b(){}var y={};y[i]=function(){return this};var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,i)&&(y=w);var O=b.prototype=v.prototype=Object.create(y);function I(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,i,s,a){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(f).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var o;function i(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function k(e,t,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return A()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=j(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function x(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:A}}function A(){return{value:t,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=c(b,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},I(E.prototype),E.prototype[s]=function(){return this},e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var s=new E(u(t,n,r,o),i);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},I(O),c(O,a,"Generator"),O[i]=function(){return this},O.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},"9bf2":function(e,t,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),s=n("c04e"),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(i(e),t=s(t,!0),i(n),o)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=o(r,{next:i(1,n)}),s(e,u,!1,!0),a[u]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return X})),n.d(t,"f",(function(){return Z})),n.d(t,"g",(function(){return re})),n.d(t,"h",(function(){return C})),n.d(t,"i",(function(){return se})),n.d(t,"j",(function(){return te})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return Q})),n.d(t,"m",(function(){return ne})),n.d(t,"n",(function(){return P})),n.d(t,"o",(function(){return D})),n.d(t,"p",(function(){return i})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return G})),n.d(t,"s",(function(){return N})),n.d(t,"t",(function(){return T})),n.d(t,"u",(function(){return B})),n.d(t,"v",(function(){return S})),n.d(t,"w",(function(){return V})),n.d(t,"x",(function(){return q})),n.d(t,"y",(function(){return v})),n.d(t,"z",(function(){return L})),n.d(t,"A",(function(){return a})),n.d(t,"B",(function(){return U})),n.d(t,"C",(function(){return F})),n.d(t,"D",(function(){return b})),n.d(t,"E",(function(){return y})),n.d(t,"F",(function(){return r})),n.d(t,"G",(function(){return d})),n.d(t,"H",(function(){return c})),n.d(t,"I",(function(){return x})),n.d(t,"J",(function(){return _})),n.d(t,"K",(function(){return ee})),n.d(t,"L",(function(){return oe})),n.d(t,"M",(function(){return z}));const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl",i=r(o);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=c(U(r)?f(r):r);if(o)for(const e in o)t[e]=o[e]}return t}if(B(e))return e}const u=/;(?![^(]*\))/g,l=/:(.+)/;function f(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function d(e){let t="";if(U(e))t=e;else if(P(e))for(let n=0;n<e.length;n++)t+=d(e[n])+" ";else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const h="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",p="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(h),v=r(p);function g(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=P(e),r=P(t),n||r)return!(!n||!r)&&g(e,t);if(n=B(e),r=B(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex(e=>b(e,t))}const _=e=>null==e?"":B(e)?JSON.stringify(e,w,2):String(e),w=(e,t)=>N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!B(t)||P(t)||W(t)?t:String(t),O={},I=[],E=()=>{},k=()=>!1,j=/^on[^a-z]/,S=e=>j.test(e),T=e=>e.startsWith("onUpdate:"),C=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,R=(e,t)=>A.call(e,t),P=Array.isArray,N=e=>"[object Map]"===H(e),L=e=>"[object Set]"===H(e),M=e=>e instanceof Date,D=e=>"function"===typeof e,U=e=>"string"===typeof e,F=e=>"symbol"===typeof e,B=e=>null!==e&&"object"===typeof e,V=e=>B(e)&&D(e.then)&&D(e.catch),$=Object.prototype.toString,H=e=>$.call(e),z=e=>H(e).slice(8,-1),W=e=>"[object Object]"===H(e),G=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,q=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,X=K(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),Y=/\B([A-Z])/g,Q=K(e=>e.replace(Y,"-$1").toLowerCase()),Z=K(e=>e.charAt(0).toUpperCase()+e.slice(1)),ee=K(e=>e?"on"+Z(e):""),te=(e,t)=>e!==t&&(e===e||t===t),ne=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},re=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ie;const se=()=>ie||(ie="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a79d:function(e,t,n){"use strict";var r=n("23e7"),o=n("c430"),i=n("fea9"),s=n("d039"),a=n("d066"),c=n("4840"),u=n("cdf9"),l=n("6eeb"),f=!!i&&s((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=c(this,a("Promise")),n="function"==typeof e;return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),o||"function"!=typeof i||i.prototype["finally"]||l(i.prototype,"finally",a("Promise").prototype["finally"])},ae40:function(e,t,n){var r=n("83ab"),o=n("d039"),i=n("5135"),s=Object.defineProperty,a={},c=function(e){throw e};e.exports=function(e,t){if(i(a,e))return a[e];t||(t={});var n=[][e],u=!!i(t,"ACCESSORS")&&t.ACCESSORS,l=i(t,0)?t[0]:c,f=i(t,1)?t[1]:void 0;return a[e]=!!n&&!o((function(){if(u&&!r)return!0;var e={length:-1};u?s(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,l,f)}))}},ae93:function(e,t,n){"use strict";var r,o,i,s=n("d039"),a=n("e163"),c=n("9112"),u=n("5135"),l=n("b622"),f=n("c430"),d=l("iterator"),h=!1,p=function(){return this};[].keys&&(i=[].keys(),"next"in i?(o=a(a(i)),o!==Object.prototype&&(r=o)):h=!0);var m=void 0==r||s((function(){var e={};return r[d].call(e)!==e}));m&&(r={}),f&&!m||u(r,d)||c(r,d,p),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:h}},b041:function(e,t,n){"use strict";var r=n("00ee"),o=n("f5df");e.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},b575:function(e,t,n){var r,o,i,s,a,c,u,l,f=n("da84"),d=n("06cf").f,h=n("2cf4").set,p=n("1cdc"),m=n("a4b4"),v=n("605d"),g=f.MutationObserver||f.WebKitMutationObserver,b=f.document,y=f.process,_=f.Promise,w=d(f,"queueMicrotask"),O=w&&w.value;O||(r=function(){var e,t;v&&(e=y.domain)&&e.exit();while(o){t=o.fn,o=o.next;try{t()}catch(n){throw o?s():i=void 0,n}}i=void 0,e&&e.enter()},p||v||m||!g||!b?_&&_.resolve?(u=_.resolve(void 0),l=u.then,s=function(){l.call(u,r)}):s=v?function(){y.nextTick(r)}:function(){h.call(f,r)}:(a=!0,c=b.createTextNode(""),new g(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=O||function(e){var t={fn:e,next:void 0};i&&(i.next=t),o||(o=t,s()),i=t}},b622:function(e,t,n){var r=n("da84"),o=n("5692"),i=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=o("wks"),l=r.Symbol,f=c?l:l&&l.withoutSetter||s;e.exports=function(e){return i(u,e)||(a&&i(l,e)?u[e]=l[e]:u[e]=f("Symbol."+e)),u[e]}},b727:function(e,t,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,l=4==e,f=6==e,d=7==e,h=5==e||f;return function(p,m,v,g){for(var b,y,_=i(p),w=o(_),O=r(m,v,3),I=s(w.length),E=0,k=g||a,j=t?k(p,I):n||d?k(p,0):void 0;I>E;E++)if((h||E in w)&&(b=w[E],y=O(b,E,_),e))if(t)j[E]=y;else if(y)switch(e){case 3:return!0;case 5:return b;case 6:return E;case 2:c.call(j,b)}else switch(e){case 4:return!1;case 7:c.call(j,b)}return f?-1:u||l?l:j}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c04e:function(e,t,n){var r=n("861d");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,s=n("d012");e.exports=function(e,t){var n,a=o(e),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(t.length>c)r(a,n=t[c++])&&(~i(u,n)||u.push(n));return u}},cc12:function(e,t,n){var r=n("da84"),o=n("861d"),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},cdf9:function(e,t,n){var r=n("825a"),o=n("861d"),i=n("f069");e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=i.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),o=n("9112");e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("428f"),o=n("da84"),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),t?e.call(n,i):n.__proto__=i,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),o=n("6eeb"),i=n("b041");r||o(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,o=n("5135"),i=n("b622"),s=i("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},df75:function(e,t,n){var r=n("ca84"),o=n("7839");e.exports=Object.keys||function(e){return r(e,o)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(o(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===i(e,-1);return e=n(o(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),a=s,c=0;c<s;c++)if(o[c]!==i[c]){a=c;break}var u=[];for(c=a;c<o.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),47===t){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,i=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(o=!1,r=s+1),46===a?-1===t?t=s:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=s+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e163:function(e,t,n){var r=n("5135"),o=n("7b0b"),i=n("f772"),s=n("e177"),a=i("IE_PROTO"),c=Object.prototype;e.exports=s?Object.getPrototypeOf:function(e){return e=o(e),r(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);e.exports=a(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return f}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function f(e,t){for(const n of r){let r=null;t&&t.level&&(r=i[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:s,args:i,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,o,i,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),f=n("fea9"),d=n("6eeb"),h=n("e2cc"),p=n("d44e"),m=n("2626"),v=n("861d"),g=n("1c0b"),b=n("19aa"),y=n("8925"),_=n("2266"),w=n("1c7e"),O=n("4840"),I=n("2cf4").set,E=n("b575"),k=n("cdf9"),j=n("44de"),S=n("f069"),T=n("e667"),C=n("69f3"),x=n("94ca"),A=n("b622"),R=n("605d"),P=n("2d00"),N=A("species"),L="Promise",M=C.get,D=C.set,U=C.getterFor(L),F=f,B=u.TypeError,V=u.document,$=u.process,H=l("fetch"),z=S.f,W=z,G=!!(V&&V.createEvent&&u.dispatchEvent),q="function"==typeof PromiseRejectionEvent,K="unhandledrejection",J="rejectionhandled",X=0,Y=1,Q=2,Z=1,ee=2,te=x(L,(function(){var e=y(F)!==String(F);if(!e){if(66===P)return!0;if(!R&&!q)return!0}if(c&&!F.prototype["finally"])return!0;if(P>=51&&/native code/.test(F))return!1;var t=F.resolve(1),n=function(e){e((function(){}),(function(){}))},r=t.constructor={};return r[N]=n,!(t.then((function(){}))instanceof n)})),ne=te||!w((function(e){F.all(e)["catch"]((function(){}))})),re=function(e){var t;return!(!v(e)||"function"!=typeof(t=e.then))&&t},oe=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;E((function(){var r=e.value,o=e.state==Y,i=0;while(n.length>i){var s,a,c,u=n[i++],l=o?u.ok:u.fail,f=u.resolve,d=u.reject,h=u.domain;try{l?(o||(e.rejection===ee&&ce(e),e.rejection=Z),!0===l?s=r:(h&&h.enter(),s=l(r),h&&(h.exit(),c=!0)),s===u.promise?d(B("Promise-chain cycle")):(a=re(s))?a.call(s,f,d):f(s)):d(r)}catch(p){h&&!c&&h.exit(),d(p)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&se(e)}))}},ie=function(e,t,n){var r,o;G?(r=V.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!q&&(o=u["on"+e])?o(r):e===K&&j("Unhandled promise rejection",n)},se=function(e){I.call(u,(function(){var t,n=e.facade,r=e.value,o=ae(e);if(o&&(t=T((function(){R?$.emit("unhandledRejection",r,n):ie(K,n,r)})),e.rejection=R||ae(e)?ee:Z,t.error))throw t.value}))},ae=function(e){return e.rejection!==Z&&!e.parent},ce=function(e){I.call(u,(function(){var t=e.facade;R?$.emit("rejectionHandled",t):ie(J,t,e.value)}))},ue=function(e,t,n){return function(r){e(t,r,n)}},le=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=Q,oe(e,!0))},fe=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw B("Promise can't be resolved itself");var r=re(t);r?E((function(){var n={done:!1};try{r.call(t,ue(fe,n,e),ue(le,n,e))}catch(o){le(n,o,e)}})):(e.value=t,e.state=Y,oe(e,!1))}catch(o){le({done:!1},o,e)}}};te&&(F=function(e){b(this,F,L),g(e),r.call(this);var t=M(this);try{e(ue(fe,t),ue(le,t))}catch(n){le(t,n)}},r=function(e){D(this,{type:L,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:X,value:void 0})},r.prototype=h(F.prototype,{then:function(e,t){var n=U(this),r=z(O(this,F));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=R?$.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=X&&oe(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r,t=M(e);this.promise=e,this.resolve=ue(fe,t),this.reject=ue(le,t)},S.f=z=function(e){return e===F||e===i?new o(e):W(e)},c||"function"!=typeof f||(s=f.prototype.then,d(f.prototype,"then",(function(e,t){var n=this;return new F((function(e,t){s.call(n,e,t)})).then(e,t)}),{unsafe:!0}),"function"==typeof H&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return k(F,H.apply(u,arguments))}}))),a({global:!0,wrap:!0,forced:te},{Promise:F}),p(F,L,!1,!0),m(L),i=l(L),a({target:L,stat:!0,forced:te},{reject:function(e){var t=z(this);return t.reject.call(void 0,e),t.promise}}),a({target:L,stat:!0,forced:c||te},{resolve:function(e){return k(c&&this===i?F:this,e)}}),a({target:L,stat:!0,forced:ne},{all:function(e){var t=this,n=z(t),r=n.resolve,o=n.reject,i=T((function(){var n=g(t.resolve),i=[],s=0,a=1;_(e,(function(e){var c=s++,u=!1;i.push(void 0),a++,n.call(t,e).then((function(e){u||(u=!0,i[c]=e,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(e){var t=this,n=z(t),r=n.reject,o=T((function(){var o=g(t.resolve);_(e,(function(e){o.call(t,e).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},e893:function(e,t,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),s=n("9bf2");e.exports=function(e,t){for(var n=o(t),a=s.f,c=i.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||a(e,l,c(t,l))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),o=n("3f8c"),i=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||s[i]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return yr})),n.d(t,"b",(function(){return mt})),n.d(t,"c",(function(){return dt})),n.d(t,"d",(function(){return vt}));var r=n("1fd5"),o=n("589b"),i=n("e691");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),f=new i["b"]("@firebase/auth");function d(e,...t){f.logLevel<=i["a"].ERROR&&f.error(`Auth (${o["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function m(e,t,n){const o=Object.assign(Object.assign({},u()),{[t]:n}),i=new r["b"]("auth","Firebase",o);return i.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw v(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function y(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(o["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if(Object(r["g"])(o,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const i=n.initialize({options:t});return i}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===j()||"https:"===j()}function j(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||Object(r["n"])()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["r"])()||Object(r["s"])()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,o,i={}){return M(e,i,async()=>{let i={},s={};o&&("GET"===t?s=o:i={body:JSON.stringify(o)});const a=Object(r["t"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function M(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},R),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw B(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw B(e,"user-disabled",i);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);h(e,a)}}catch(i){if(i instanceof r["c"])throw i;h(e,"network-request-failed")}}async function D(e,t,n,r,o={}){const i=await L(e,t,n,r,o);return"mfaPendingCredential"in i&&h(e,"multi-factor-auth-required",{_serverResponse:i}),i}function U(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?x(e.config,o):`${e.config.apiScheme}://${o}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=p(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=Object(r["l"])(e),o=await n.getIdToken(t),i=G(o);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:o,authTime:H(W(i.auth_time)),issuedAtTime:H(W(i.iat)),expirationTime:H(W(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function G(e){var t;const[n,o,i]=e.split(".");if(void 0===n||void 0===o||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(o);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function q(e){const t=G(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r["c"]&&J(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),o=await K(e,$(n,{idToken:r}));g(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Y(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function Z(e){const t=Object(r["l"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["t"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=U(e,o,"/v1/token","key="+i),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(g("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Y(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:I}=t;g(y&&I,e,"internal-error");const E=re.fromJSON(this.name,I);g("string"===typeof y,e,"internal-error"),oe(l,e.name),oe(f,e.name),g("boolean"===typeof _,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),oe(d,e.name),oe(h,e.name),oe(p,e.name),oe(m,e.name),oe(v,e.name),oe(b,e.name);const k=new ie({uid:y,auth:e,email:f,emailVerified:_,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:v,lastLoginAt:b});return O&&Array.isArray(O)&&(k.providerData=O.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const o=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(o),o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,o),this.fullPersistenceKey=ce("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let o=r[0]||w(ae);const i=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ie._fromJSON(e,t);u!==o&&(s=n),o=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==o)try{await e._remove(i)}catch(c){}})),new ue(o,e,n)):new ue(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ve(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fe(e=Object(r["m"])()){return/firefox\//i.test(e)}function de(e=Object(r["m"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=Object(r["m"])()){return/crios\//i.test(e)}function pe(e=Object(r["m"])()){return/iemobile/i.test(e)}function me(e=Object(r["m"])()){return/android/i.test(e)}function ve(e=Object(r["m"])()){return/blackberry/i.test(e)}function ge(e=Object(r["m"])()){return/webos/i.test(e)}function be(e=Object(r["m"])()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=Object(r["m"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return Object(r["p"])()&&10===document.documentMode}function we(e=Object(r["m"])()){return be(e)||me(e)||ge(e)||ve(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["m"])());break;case"Worker":n=`${le(Object(r["m"])())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o["a"]}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(o){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.beforeStateQueue=new Ee(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==i||!(null===s||void 0===s?void 0:s.user)||(r=s.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Q(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["l"])(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return g(i,this,"internal-error"),i.then(()=>o(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function je(e){return Object(r["l"])(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["f"])(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Te(e,t,n){const r=je(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ce(t),{host:s,port:a}=xe(t),c=null===a?"":":"+a;r.config.emulator={url:`${i}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Re()}function Ce(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xe(e){const t=Ce(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:Ae(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ae(t)}}}function Ae(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Re(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Pe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Le(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ne(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return De(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="http://localhost";class Ve extends Pe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new Ve(n,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return Fe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fe(e,t)}buildRequest(){const e={requestUri:Be,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["t"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function He(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function ze(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const We={["USER_NOT_FOUND"]:"user-not-found"};async function Ge(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),We)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Pe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return He(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ze(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ge(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new qe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=Object(r["u"])(Object(r["h"])(e))["link"],n=t?Object(r["u"])(Object(r["h"])(t))["deep_link_id"]:null,o=Object(r["u"])(Object(r["h"])(e))["deep_link_id"],i=o?Object(r["u"])(Object(r["h"])(o))["link"]:null;return i||o||n||t||e}class Xe{constructor(e){var t,n,o,i,s,a;const c=Object(r["u"])(Object(r["h"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,f=Ke(null!==(o=c["mode"])&&void 0!==o?o:null);g(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Je(e);try{return new Xe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xe.parseLink(t);return g(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Ye.PROVIDER_ID="password",Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Qe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Ze{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ve._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends Ze{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends Ze{constructor(){super("twitter.com")}static credential(e,t){return Ve._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ie._fromIdTokenResponse(e,n,r),i=it(n),s=new ot({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=it(n);return new ot({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function it(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st extends r["c"]{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,st.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new st(e,t,n,r)}}function at(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw st._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ot._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t,n=!1){var r;const{auth:o}=e,i="reauthenticate";try{const r=await K(e,at(o,i,t,e),n);g(r.idToken,o,"internal-error");const s=G(r.idToken);g(s,o,"internal-error");const{sub:a}=s;return g(e.uid===a,o,"user-mismatch"),ot._forOperation(e,i,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&h(o,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t,n=!1){const r="signIn",o=await at(e,r,t),i=await ot._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function ft(e,t){return lt(je(e),t)}function dt(e,t,n){return ft(Object(r["l"])(e),Ye.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e,t,n,o){return Object(r["l"])(e).onIdTokenChanged(t,n,o)}function pt(e,t,n){return Object(r["l"])(e).beforeAuthStateChanged(t,n)}function mt(e,t,n,o){return Object(r["l"])(e).onAuthStateChanged(t,n,o)}function vt(e){return Object(r["l"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function bt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const yt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yt,"1"),this.storage.removeItem(yt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){const e=Object(r["m"])();return de(e)||be(e)}const Ot=1e3,It=10;class Et extends _t{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);_e()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,It):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ot)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Et.type="LOCAL";const kt=Et;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends _t{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jt.type="SESSION";const St=jt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ct(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map(async e=>e(t.origin,o)),a=await Tt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.receivers=[];class At{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise((s,a)=>{const c=xt("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function Pt(e){Rt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return"undefined"!==typeof Rt()["WorkerGlobalScope"]&&"function"===typeof Rt()["importScripts"]}async function Lt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Mt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Dt(){return Nt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="firebaseLocalStorageDb",Ft=1,Bt="firebaseLocalStorage",Vt="fbase_key";class $t{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ht(e,t){return e.transaction([Bt],t?"readwrite":"readonly").objectStore(Bt)}function zt(){const e=indexedDB.deleteDatabase(Ut);return new $t(e).toPromise()}function Wt(){const e=indexedDB.open(Ut,Ft);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Bt,{keyPath:Vt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Bt)?t(n):(n.close(),await zt(),t(await Wt()))})})}async function Gt(e,t,n){const r=Ht(e,!0).put({[Vt]:t,value:n});return new $t(r).toPromise()}async function qt(e,t){const n=Ht(e,!1).get(t),r=await new $t(n).toPromise();return void 0===r?null:r.value}function Kt(e,t){const n=Ht(e,!0).delete(t);return new $t(n).toPromise()}const Jt=800,Xt=3;class Yt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Wt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Xt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ct._getInstance(Dt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Lt(),!this.activeServiceWorker)return;this.sender=new At(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Mt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wt();return await Gt(e,yt,"1"),await Kt(e,yt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>qt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ht(e,!1).getAll();return new $t(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Yt.type="LOCAL";const Qt=Yt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function en(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function nn(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",tn().appendChild(r)})}function rn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
rn("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on="recaptcha";async function sn(e,t,n){var r;const o=await n.verify();try{let i;if(g("string"===typeof o,e,"argument-error"),g(n.type===on,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){g("enroll"===t.type,e,"internal-error");const n=await gt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await Zt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await $e(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an{constructor(e){this.providerId=an.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,t){return sn(this.auth,e,Object(r["l"])(t))}static credential(e,t){return qe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return an.credentialFromTaggedObject(t)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qe._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.PROVIDER_ID="phone",an.PHONE_SIGN_IN_METHOD="phone";class un extends Pe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ln(e){return lt(e.auth,new un(e),e.bypassAuthState)}function fn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ut(n,new un(e),e.bypassAuthState)}async function dn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ct(n,new un(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ln;case"linkViaPopup":case"linkViaRedirect":return dn;case"reauthViaPopup":case"reauthViaRedirect":return fn;default:h(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new C(2e3,1e4);class mn extends hn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,pn.get())};e()}}mn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn="pendingRedirect",gn=new Map;class bn extends hn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=gn.get(this.auth._key());if(!e){try{const t=await yn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}gn.set(this.auth._key(),e)}return this.bypassAuthState||gn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function yn(e,t){const n=On(t),r=wn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function _n(e,t){gn.set(e._key(),t)}function wn(e){return w(e._redirectPersistence)}function On(e){return ce(vn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t,n=!1){const r=je(e),o=cn(r,t),i=new bn(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const En=6e5;class kn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Sn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=En&&this.cachedEventUids.clear(),this.cachedEventUids.has(jn(e))}saveEventToCache(e){this.cachedEventUids.add(jn(e)),this.lastProcessedEventTime=Date.now()}}function jn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Sn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Tn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,An=/^https?/;async function Rn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Cn(e);for(const r of t)try{if(Pn(r))return}catch(n){}h(e,"unauthorized-domain")}function Pn(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!An.test(n))return!1;if(xn.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new C(3e4,6e4);function Ln(){const e=Rt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Mn(e){return new Promise((t,n)=>{var r,o,i;function s(){Ln(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ln(),n(p(e,"network-request-failed"))},timeout:Nn.get()})}if(null===(o=null===(r=Rt().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Rt().gapi)||void 0===i?void 0:i.load)){const t=rn("iframefcb");return Rt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},nn("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw Dn=null,e})}let Dn=null;function Un(e){return Dn=Dn||Mn(e),Dn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new C(5e3,15e3),Bn="__/auth/iframe",Vn="emulator/auth/iframe",$n={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,Vn):`https://${e.config.authDomain}/${Bn}`,i={apiKey:t.apiKey,appName:e.name,v:o["a"]},s=Hn.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${Object(r["t"])(i).slice(1)}`}async function Wn(e){const t=await Un(e),n=Rt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:zn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$n,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=p(e,"network-request-failed"),i=Rt().setTimeout(()=>{r(o)},Fn.get());function s(){Rt().clearTimeout(i),n(t)}t.ping(s).then(s,()=>{r(o)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qn=500,Kn=600,Jn="_blank",Xn="http://localhost";class Yn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qn(e,t,n,o=qn,i=Kn){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Gn),{width:o.toString(),height:i.toString(),top:s,left:a}),l=Object(r["m"])().toLowerCase();n&&(c=he(l)?Jn:n),fe(l)&&(t=t||Xn,u.scrollbars="yes");const f=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(l)&&"_self"!==c)return Zn(t||"",c),new Yn(null);const d=window.open(t||"",c,f);g(d,e,"popup-blocked");try{d.focus()}catch(h){}return new Yn(d)}function Zn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="__/auth/handler",tr="emulator/auth/handler";function nr(e,t,n,i,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o["a"],eventId:s};if(t instanceof Qe){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["o"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ze){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${rr(e)}?${Object(r["t"])(u).slice(1)}`}function rr({config:e}){return e.emulator?x(e,tr):`https://${e.authDomain}/${er}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class ir{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=St,this._completeRedirectFn=In,this._overrideRedirectResult=_n}async _openPopup(e,t,n,r){var o;y(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=nr(e,t,n,E(),r);return Qn(e,i,xt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Pt(nr(e,t,n,E(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Wn(e),n=new kn(e);return t.register("authEvent",t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(or,{type:or},n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[or];void 0!==o&&t(!!o),h(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||be()}}const sr=ir;class ar{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class cr extends ar{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new cr(e)}_finalizeEnroll(e,t,n){return bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return en(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ur{constructor(){}static assertion(e){return cr._fromCredential(e)}}ur.FACTOR_ID="phone";var lr="@firebase/auth",fr="0.20.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pr(e){Object(o["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=r.options;return((t,r)=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const o={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},a=new ke(t,r,o);return I(a,n),a})(r,o)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(o["c"])(new a["a"]("auth-internal",e=>{const t=je(e.getProvider("auth").getImmediate());return(e=>new dr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(o["f"])(lr,fr,hr(e)),Object(o["f"])(lr,fr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=300,vr=Object(r["k"])("authIdTokenMaxAge")||mr;let gr=null;const br=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vr)return;const o=null===n||void 0===n?void 0:n.token;gr!==o&&(gr=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer "+o}:{}}))};function yr(e=Object(o["d"])()){const t=Object(o["b"])(e,"auth");if(t.isInitialized())return t.getImmediate();const n=O(e,{popupRedirectResolver:sr,persistence:[Qt,kt,St]}),i=Object(r["k"])("authTokenSyncURL");if(i){const e=br(i);pt(n,e,()=>e(n.currentUser)),ht(n,t=>e(t))}const s=Object(r["j"])("auth");return s&&Te(n,"http://"+s),n}pr("Browser")},f069:function(e,t,n){"use strict";var r=n("1c0b"),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},f5df:function(e,t,n){var r=n("00ee"),o=n("c6b6"),i=n("b622"),s=i("toStringTag"),a="Arguments"==o(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=Object(e),s))?n:a?o(t):"Object"==(r=o(t))&&"function"==typeof t.callee?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),o=n("90e3"),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},fc6a:function(e,t,n){var r=n("44ad"),o=n("1d80");e.exports=function(e){return r(o(e))}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.515eb458.js.map