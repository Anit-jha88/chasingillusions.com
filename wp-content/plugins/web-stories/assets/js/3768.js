"use strict";(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[3768],{17328:(e,t,r)=>{r.d(t,{default:()=>o});var n=r(10123),a=r(70551);function o(e,t){(0,a.default)(2,arguments);var r=(0,n.default)(e),o=(0,n.default)(t),i=r.getTime()-o.getTime();return i>0?-1:i<0?1:i}},82968:(e,t,r)=>{r.d(t,{default:()=>w});var n=r(71858),a=r(10123),o=r(70551);function i(e,t){(0,o.default)(2,arguments);var r=(0,a.default)(e),n=(0,a.default)(t),i=r.getTime()-n.getTime();return i<0?-1:i>0?1:i}function u(e){(0,o.default)(1,arguments);var t=(0,a.default)(e);return function(e){(0,o.default)(1,arguments);var t=(0,a.default)(e);return t.setHours(23,59,59,999),t}(t).getTime()===function(e){(0,o.default)(1,arguments);var t=(0,a.default)(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}(t).getTime()}function l(e,t){(0,o.default)(2,arguments);var r,n=(0,a.default)(e),l=(0,a.default)(t),f=i(n,l),s=Math.abs(function(e,t){(0,o.default)(2,arguments);var r=(0,a.default)(e),n=(0,a.default)(t);return 12*(r.getFullYear()-n.getFullYear())+(r.getMonth()-n.getMonth())}(n,l));if(s<1)r=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-f*s);var c=i(n,l)===-f;u((0,a.default)(e))&&1===s&&1===i(e,l)&&(c=!1),r=f*(s-Number(c))}return 0===r?0:r}var f={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},s="trunc";function c(e,t,r){(0,o.default)(2,arguments);var n,i=function(e,t){return(0,o.default)(2,arguments),(0,a.default)(e).getTime()-(0,a.default)(t).getTime()}(e,t)/1e3;return((n=null==r?void 0:r.roundingMethod)?f[n]:f[s])(i)}var d=r(24274);function p(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}var h=r(67044),m=1440,v=2520,g=43200,y=86400;function b(e,t,r){var u,f;(0,o.default)(2,arguments);var s=(0,n.getDefaultOptions)(),b=null!==(u=null!==(f=null==r?void 0:r.locale)&&void 0!==f?f:s.locale)&&void 0!==u?u:d.default;if(!b.formatDistance)throw new RangeError("locale must contain formatDistance property");var w=i(e,t);if(isNaN(w))throw new RangeError("Invalid time value");var x,k,F=p(p({},r),{addSuffix:Boolean(null==r?void 0:r.addSuffix),comparison:w});w>0?(x=(0,a.default)(t),k=(0,a.default)(e)):(x=(0,a.default)(e),k=(0,a.default)(t));var D,E=c(k,x),I=((0,h.default)(k)-(0,h.default)(x))/1e3,S=Math.round((E-I)/60);if(S<2)return null!=r&&r.includeSeconds?E<5?b.formatDistance("lessThanXSeconds",5,F):E<10?b.formatDistance("lessThanXSeconds",10,F):E<20?b.formatDistance("lessThanXSeconds",20,F):E<40?b.formatDistance("halfAMinute",0,F):E<60?b.formatDistance("lessThanXMinutes",1,F):b.formatDistance("xMinutes",1,F):0===S?b.formatDistance("lessThanXMinutes",1,F):b.formatDistance("xMinutes",S,F);if(S<45)return b.formatDistance("xMinutes",S,F);if(S<90)return b.formatDistance("aboutXHours",1,F);if(S<m){var M=Math.round(S/60);return b.formatDistance("aboutXHours",M,F)}if(S<v)return b.formatDistance("xDays",1,F);if(S<g){var C=Math.round(S/m);return b.formatDistance("xDays",C,F)}if(S<y)return D=Math.round(S/g),b.formatDistance("aboutXMonths",D,F);if((D=l(k,x))<12){var _=Math.round(S/g);return b.formatDistance("xMonths",_,F)}var O=D%12,P=Math.floor(D/12);return O<3?b.formatDistance("aboutXYears",P,F):O<9?b.formatDistance("overXYears",P,F):b.formatDistance("almostXYears",P+1,F)}function w(e,t){return(0,o.default)(1,arguments),b(e,Date.now(),t)}},35845:(e,t,r)=>{r.d(t,{default:()=>i});var n=r(10123),a=r(70551);function o(e){(0,a.default)(1,arguments);var t=(0,n.default)(e);return t.setHours(0,0,0,0),t}function i(e,t){(0,a.default)(2,arguments);var r=o(e),n=o(t);return r.getTime()===n.getTime()}},21447:(e,t,r)=>{r.d(t,{default:()=>o});var n=r(35845),a=r(70551);function o(e){return(0,a.default)(1,arguments),(0,n.default)(e,Date.now())}},60591:(e,t,r)=>{r.d(t,{default:()=>l});var n=r(35845),a=r(94188),o=r(10123),i=r(70551);function u(e,t){return(0,i.default)(2,arguments),function(e,t){(0,i.default)(2,arguments);var r=(0,o.default)(e),n=(0,a.default)(t);return isNaN(n)?new Date(NaN):n?(r.setDate(r.getDate()+n),r):r}(e,-(0,a.default)(t))}function l(e){return(0,i.default)(1,arguments),(0,n.default)(e,u(Date.now(),1))}},57971:(e,t,r)=>{r.d(t,{createHashHistory:()=>f});var n,a=r(58168);!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(n||(n={}));var o=function(e){return e};var i="beforeunload",u="hashchange",l="popstate";function f(e){void 0===e&&(e={});var t=e.window,r=void 0===t?document.defaultView:t,f=r.history;function m(){var e=h(r.location.hash.substr(1)),t=e.pathname,n=void 0===t?"/":t,a=e.search,i=void 0===a?"":a,u=e.hash,l=void 0===u?"":u,s=f.state||{};return[s.idx,o({pathname:n,search:i,hash:l,state:s.usr||null,key:s.key||"default"})]}var v=null;function g(){if(v)F.call(v),v=null;else{var e=n.Pop,t=m(),r=t[0],a=t[1];if(F.length){if(null!=r){var o=w-r;o&&(v={action:e,location:a,retry:function(){C(-1*o)}},C(o))}}else M(e)}}r.addEventListener(l,g),r.addEventListener(u,(function(){p(m()[1])!==p(x)&&g()}));var y=n.Pop,b=m(),w=b[0],x=b[1],k=c(),F=c();function D(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var n=r.location.href,a=n.indexOf("#");t=-1===a?n:n.slice(0,a)}return t}()+"#"+("string"==typeof e?e:p(e))}function E(e,t){return void 0===t&&(t=null),o((0,a.default)({pathname:x.pathname,hash:"",search:""},"string"==typeof e?h(e):e,{state:t,key:d()}))}function I(e,t){return[{usr:e.state,key:e.key,idx:t},D(e)]}function S(e,t,r){return!F.length||(F.call({action:e,location:t,retry:r}),!1)}function M(e){y=e;var t=m();w=t[0],x=t[1],k.call({action:y,location:x})}function C(e){f.go(e)}null==w&&(w=0,f.replaceState((0,a.default)({},f.state,{idx:w}),""));var _={get action(){return y},get location(){return x},createHref:D,push:function e(t,a){var o=n.Push,i=E(t,a);if(S(o,i,(function(){e(t,a)}))){var u=I(i,w+1),l=u[0],s=u[1];try{f.pushState(l,"",s)}catch(e){r.location.assign(s)}M(o)}},replace:function e(t,r){var a=n.Replace,o=E(t,r);if(S(a,o,(function(){e(t,r)}))){var i=I(o,w),u=i[0],l=i[1];f.replaceState(u,"",l),M(a)}},go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(e){return k.push(e)},block:function(e){var t=F.push(e);return 1===F.length&&r.addEventListener(i,s),function(){t(),F.length||r.removeEventListener(i,s)}}};return _}function s(e){e.preventDefault(),e.returnValue=""}function c(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function d(){return Math.random().toString(36).substr(2,8)}function p(e){var t=e.pathname,r=void 0===t?"/":t,n=e.search,a=void 0===n?"":n,o=e.hash,i=void 0===o?"":o;return a&&"?"!==a&&(r+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(r+="#"===i.charAt(0)?i:"#"+i),r}function h(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}},31357:(e,t,r)=>{r.d(t,{parseToRgb:()=>D,rgba:()=>T});var n=r(58168),a=r(9417),o=r(77387),i=r(88593);var u=function(e){function PolishedError(t){var r;return r=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,(0,a.default)(r)}return(0,o.default)(PolishedError,e),PolishedError}((0,i.default)(Error));function l(e,t){return e.substr(-t.length)===t}var f=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function s(e){return"string"!=typeof e?e:e.match(f)?parseFloat(e):e}var c=function(e){return function(t,r){void 0===r&&(r="16px");var n=t,a=r;if("string"==typeof t){if(!l(t,"px"))throw new u(69,e,t);n=s(t)}if("string"==typeof r){if(!l(r,"px"))throw new u(70,e,r);a=s(r)}if("string"==typeof n)throw new u(71,t,e);if("string"==typeof a)throw new u(72,r,e);return""+n/a+e}};c("em");c("rem");function d(e){return Math.round(255*e)}function p(e,t,r){return d(e)+","+d(t)+","+d(r)}function h(e,t,r,n){if(void 0===n&&(n=p),0===t)return n(r,r,r);var a=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(a%2-1)),u=0,l=0,f=0;a>=0&&a<1?(u=o,l=i):a>=1&&a<2?(u=i,l=o):a>=2&&a<3?(l=o,f=i):a>=3&&a<4?(l=i,f=o):a>=4&&a<5?(u=i,f=o):a>=5&&a<6&&(u=o,f=i);var s=r-o/2;return n(u+s,l+s,f+s)}var m={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var v=/^#[a-fA-F0-9]{6}$/,g=/^#[a-fA-F0-9]{8}$/,y=/^#[a-fA-F0-9]{3}$/,b=/^#[a-fA-F0-9]{4}$/,w=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,x=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,k=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,F=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function D(e){if("string"!=typeof e)throw new u(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return m[t]?"#"+m[t]:e}(e);if(t.match(v))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(g)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(y))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(b)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var a=w.exec(t);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=x.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=k.exec(t);if(i){var l="rgb("+h(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",f=w.exec(l);if(!f)throw new u(4,t,l);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)}}var s=F.exec(t.substring(0,50));if(s){var c="rgb("+h(parseInt(""+s[1],10),parseInt(""+s[2],10)/100,parseInt(""+s[3],10)/100)+")",d=w.exec(c);if(!d)throw new u(4,t,c);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])}}throw new u(5)}function E(e){return function(e){var t,r=e.red/255,n=e.green/255,a=e.blue/255,o=Math.max(r,n,a),i=Math.min(r,n,a),u=(o+i)/2;if(o===i)return void 0!==e.alpha?{hue:0,saturation:0,lightness:u,alpha:e.alpha}:{hue:0,saturation:0,lightness:u};var l=o-i,f=u>.5?l/(2-o-i):l/(o+i);switch(o){case r:t=(n-a)/l+(n<a?6:0);break;case n:t=(a-r)/l+2;break;default:t=(r-n)/l+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:f,lightness:u,alpha:e.alpha}:{hue:t,saturation:f,lightness:u}}(D(e))}var I=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function S(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function M(e){return S(Math.round(255*e))}function C(e,t,r){return I("#"+M(e)+M(t)+M(r))}function _(e,t,r){return h(e,t,r,C)}function O(e,t,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof r)return _(e,t,r);if("object"==typeof e&&void 0===t&&void 0===r)return _(e.hue,e.saturation,e.lightness);throw new u(1)}function P(e,t,r,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof r&&"number"==typeof n)return n>=1?_(e,t,r):"rgba("+h(e,t,r)+","+n+")";if("object"==typeof e&&void 0===t&&void 0===r&&void 0===n)return e.alpha>=1?_(e.hue,e.saturation,e.lightness):"rgba("+h(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new u(2)}function N(e,t,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof r)return I("#"+S(e)+S(t)+S(r));if("object"==typeof e&&void 0===t&&void 0===r)return I("#"+S(e.red)+S(e.green)+S(e.blue));throw new u(6)}function T(e,t,r,n){if("string"==typeof e&&"number"==typeof t){var a=D(e);return"rgba("+a.red+","+a.green+","+a.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof r&&"number"==typeof n)return n>=1?N(e,t,r):"rgba("+e+","+t+","+r+","+n+")";if("object"==typeof e&&void 0===t&&void 0===r&&void 0===n)return e.alpha>=1?N(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new u(7)}var A=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)},L=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha},R=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)},V=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha};function z(e){if("object"!=typeof e)throw new u(8);if(L(e))return T(e);if(A(e))return N(e);if(V(e))return P(e);if(R(e))return O(e);throw new u(8)}function H(e,t,r){return function(){var n=r.concat(Array.prototype.slice.call(arguments));return n.length>=t?e.apply(this,n):H(e,t,n)}}function j(e){return H(e,e.length,[])}j((function(e,t){if("transparent"===t)return t;var r=E(t);return z((0,n.default)({},r,{hue:r.hue+parseFloat(e)}))}));function U(e,t,r){return Math.max(e,Math.min(t,r))}j((function(e,t){if("transparent"===t)return t;var r=E(t);return z((0,n.default)({},r,{lightness:U(0,1,r.lightness-parseFloat(e))}))}));j((function(e,t){if("transparent"===t)return t;var r=E(t);return z((0,n.default)({},r,{saturation:U(0,1,r.saturation-parseFloat(e))}))}));j((function(e,t){if("transparent"===t)return t;var r=E(t);return z((0,n.default)({},r,{lightness:U(0,1,r.lightness+parseFloat(e))}))}));var q=j((function(e,t,r){if("transparent"===t)return r;if("transparent"===r)return t;if(0===e)return r;var a=D(t),o=(0,n.default)({},a,{alpha:"number"==typeof a.alpha?a.alpha:1}),i=D(r),u=(0,n.default)({},i,{alpha:"number"==typeof i.alpha?i.alpha:1}),l=o.alpha-u.alpha,f=2*parseFloat(e)-1,s=((f*l==-1?f:f+l)/(1+f*l)+1)/2,c=1-s;return T({red:Math.floor(o.red*s+u.red*c),green:Math.floor(o.green*s+u.green*c),blue:Math.floor(o.blue*s+u.blue*c),alpha:o.alpha*parseFloat(e)+u.alpha*(1-parseFloat(e))})}));j((function(e,t){if("transparent"===t)return t;var r=D(t),a="number"==typeof r.alpha?r.alpha:1;return T((0,n.default)({},r,{alpha:U(0,1,(100*a+100*parseFloat(e))/100)}))}));j((function(e,t){if("transparent"===t)return t;var r=E(t);return z((0,n.default)({},r,{saturation:U(0,1,r.saturation+parseFloat(e))}))}));j((function(e,t){return"transparent"===t?t:z((0,n.default)({},E(t),{hue:parseFloat(e)}))}));j((function(e,t){return"transparent"===t?t:z((0,n.default)({},E(t),{lightness:parseFloat(e)}))}));j((function(e,t){return"transparent"===t?t:z((0,n.default)({},E(t),{saturation:parseFloat(e)}))}));j((function(e,t){return"transparent"===t?t:q(parseFloat(e),"rgb(0, 0, 0)",t)}));j((function(e,t){return"transparent"===t?t:q(parseFloat(e),"rgb(255, 255, 255)",t)}));j((function(e,t){if("transparent"===t)return t;var r=D(t),a="number"==typeof r.alpha?r.alpha:1;return T((0,n.default)({},r,{alpha:U(0,1,+(100*a-100*parseFloat(e)).toFixed(2)/100)}))}))},72911:(e,t,r)=>{var n=r(45228),a=r(96540);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=60106,u=60107,l=60108,f=60114,s=60109,c=60110,d=60112,p=60113,h=60120,m=60115,v=60116,g=60121,y=60117,b=60119,w=60129,x=60131;if("function"==typeof Symbol&&Symbol.for){var k=Symbol.for;i=k("react.portal"),u=k("react.fragment"),l=k("react.strict_mode"),f=k("react.profiler"),s=k("react.provider"),c=k("react.context"),d=k("react.forward_ref"),p=k("react.suspense"),h=k("react.suspense_list"),m=k("react.memo"),v=k("react.lazy"),g=k("react.block"),y=k("react.fundamental"),b=k("react.scope"),w=k("react.debug_trace_mode"),x=k("react.legacy_hidden")}function F(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case u:return"Fragment";case i:return"Portal";case f:return"Profiler";case l:return"StrictMode";case p:return"Suspense";case h:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return(e.displayName||"Context")+".Consumer";case s:return(e._context.displayName||"Context")+".Provider";case d:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case m:return F(e.type);case g:return F(e._render);case v:t=e._payload,e=e._init;try{return F(e(t))}catch(e){}}return null}var D=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E={};function I(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}for(var S=new Uint16Array(16),M=0;15>M;M++)S[M]=M+1;S[15]=0;var C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_=Object.prototype.hasOwnProperty,O={},P={};function N(e){return!!_.call(P,e)||!_.call(O,e)&&(C.test(e)?P[e]=!0:(O[e]=!0,!1))}function T(e,t,r,n,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){A[e]=new T(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];A[t]=new T(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){A[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){A[e]=new T(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){A[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){A[e]=new T(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){A[e]=new T(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){A[e]=new T(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){A[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)}));var L=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(L,R);A[t]=new T(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(L,R);A[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(L,R);A[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){A[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)})),A.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){A[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)}));var V=/["'&<>]/;function z(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=V.exec(e);if(t){var r,n="",a=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==r&&(n+=e.substring(a,r)),a=r+1,n+=t}e=a!==r?n+e.substring(a,r):n}return e}function H(e,t){var r,n=A.hasOwnProperty(e)?A[e]:null;return(r="style"!==e)&&(r=null!==n?0===n.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||function(e,t,r,n){if(null==t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(e,t,n,!1)?"":null!==n?(e=n.attributeName,3===(r=n.type)||4===r&&!0===t?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+z(t)+'"')):N(e)?e+'="'+z(t)+'"':""}var j="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},U=null,q=null,$=null,W=!1,X=!1,B=null,G=0;function Y(){if(null===U)throw Error(o(321));return U}function Ba(){if(0<G)throw Error(o(312));return{memoizedState:null,queue:null,next:null}}function Ca(){return null===$?null===q?(W=!1,q=$=Ba()):(W=!0,$=q):null===$.next?(W=!1,$=$.next=Ba()):(W=!0,$=$.next),$}function Da(e,t,r,n){for(;X;)X=!1,G+=1,$=null,r=e(t,n);return Ea(),r}function Ea(){U=null,X=!1,q=null,G=0,$=B=null}function Fa(e,t){return"function"==typeof t?t(e):t}function Ga(e,t,r){if(U=Y(),$=Ca(),W){var n=$.queue;if(t=n.dispatch,null!==B&&void 0!==(r=B.get(n))){B.delete(n),n=$.memoizedState;do{n=e(n,r.action),r=r.next}while(null!==r);return $.memoizedState=n,[n,t]}return[$.memoizedState,t]}return e=e===Fa?"function"==typeof t?t():t:void 0!==r?r(t):t,$.memoizedState=e,e=(e=$.queue={last:null,dispatch:null}).dispatch=Ha.bind(null,U,e),[$.memoizedState,e]}function Ia(e,t){if(U=Y(),t=void 0===t?null:t,null!==($=Ca())){var r=$.memoizedState;if(null!==r&&null!==t){var n=r[1];e:if(null===n)n=!1;else{for(var a=0;a<n.length&&a<t.length;a++)if(!j(t[a],n[a])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),$.memoizedState=[e,t],e}function Ha(e,t,r){if(!(25>G))throw Error(o(301));if(e===U)if(X=!0,e={action:r,next:null},null===B&&(B=new Map),void 0===(r=B.get(t)))B.set(t,e);else{for(t=r;null!==t.next;)t=t.next;t.next=e}}function Ja(){}var Z=null,J={readContext:function(e){var t=Z.threadID;return I(e,t),e[t]},useContext:function(e){Y();var t=Z.threadID;return I(e,t),e[t]},useMemo:Ia,useReducer:Ga,useRef:function(e){U=Y();var t=($=Ca()).memoizedState;return null===t?(e={current:e},$.memoizedState=e):t},useState:function(e){return Ga(Fa,e)},useLayoutEffect:function(){},useCallback:function(e,t){return Ia((function(){return e}),t)},useImperativeHandle:Ja,useEffect:Ja,useDebugValue:Ja,useDeferredValue:function(e){return Y(),e},useTransition:function(){return Y(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(Z.identifierPrefix||"")+"R:"+(Z.uniqueID++).toString(36)},useMutableSource:function(e,t){return Y(),t(e._source)}},K="http://www.w3.org/1999/xhtml";function Ma(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var Q={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ee=n({menuitem:!0},Q),te={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},re=["Webkit","ms","Moz","O"];Object.keys(te).forEach((function(e){re.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),te[t]=te[e]}))}));var ne=/([A-Z])/g,ae=/^ms-/,oe=a.Children.toArray,ie=D.ReactCurrentDispatcher,ue={listing:!0,pre:!0,textarea:!0},le=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,fe={},se={};var ce=Object.prototype.hasOwnProperty,de={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function pe(e,t){if(void 0===e)throw Error(o(152,F(t)||"Component"))}function he(e,t,r){function i(a,i){var u=i.prototype&&i.prototype.isReactComponent,l=function(e,t,r,n){if(n&&"object"==typeof(n=e.contextType)&&null!==n)return I(n,r),n[r];if(e=e.contextTypes){for(var a in r={},e)r[a]=t[a];t=r}else t=E;return t}(i,t,r,u),f=[],s=!1,c={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===f)return null},enqueueReplaceState:function(e,t){s=!0,f=[t]},enqueueSetState:function(e,t){if(null===f)return null;f.push(t)}};if(u){if(u=new i(a.props,l,c),"function"==typeof i.getDerivedStateFromProps){var d=i.getDerivedStateFromProps.call(null,a.props,u.state);null!=d&&(u.state=n({},u.state,d))}}else if(U={},u=i(a.props,l,c),null==(u=Da(i,a.props,u,l))||null==u.render)return void pe(e=u,i);if(u.props=a.props,u.context=l,u.updater=c,void 0===(c=u.state)&&(u.state=c=null),"function"==typeof u.UNSAFE_componentWillMount||"function"==typeof u.componentWillMount)if("function"==typeof u.componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&u.componentWillMount(),"function"==typeof u.UNSAFE_componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&u.UNSAFE_componentWillMount(),f.length){c=f;var p=s;if(f=null,s=!1,p&&1===c.length)u.state=c[0];else{d=p?c[0]:u.state;var h=!0;for(p=p?1:0;p<c.length;p++){var m=c[p];null!=(m="function"==typeof m?m.call(u,d,a.props,l):m)&&(h?(h=!1,d=n({},d,m)):n(d,m))}u.state=d}}else f=null;if(pe(e=u.render(),i),"function"==typeof u.getChildContext&&"object"==typeof(a=i.childContextTypes)){var v=u.getChildContext();for(var g in v)if(!(g in a))throw Error(o(108,F(i)||"Unknown",g))}v&&(t=n({},t,v))}for(;a.isValidElement(e);){var u=e,l=u.type;if("function"!=typeof l)break;i(u,l)}return{child:e,context:t}}var me=function(){function e(e,t,r){a.isValidElement(e)?e.type!==u?e=[e]:(e=e.props.children,e=a.isValidElement(e)?[e]:oe(e)):e=oe(e),e={type:null,domNamespace:K,children:e,childIndex:0,context:E,footer:""};var n=S[0];if(0===n){var i=S,l=2*(n=i.length);if(!(65536>=l))throw Error(o(304));var f=new Uint16Array(l);for(f.set(i),(S=f)[0]=n+1,i=n;i<l-1;i++)S[i]=i+1;S[l-1]=0}else S[0]=S[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=r&&r.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;S[e]=S[0],S[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;I(r,n);var a=r[n];this.contextStack[t]=r,this.contextValueStack[t]=a,r[n]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=Z;Z=this;var r=ie.current;ie.current=J;try{for(var n=[""],a=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var i=this.threadID;S[i]=S[0],S[0]=i;break}var u=this.stack[this.stack.length-1];if(a||u.childIndex>=u.children.length){var l=u.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===u.type)this.currentSelectValue=null;else if(null!=u.type&&null!=u.type.type&&u.type.type.$$typeof===s)this.popProvider(u.type);else if(u.type===p){this.suspenseDepth--;var f=n.pop();if(a){a=!1;var c=u.fallbackFrame;if(!c)throw Error(o(303));this.stack.push(c),n[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}n[this.suspenseDepth]+=f}n[this.suspenseDepth]+=l}else{var d=u.children[u.childIndex++],h="";try{h+=this.render(d,u.context,u.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(o(294));throw e}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=h}}return n[0]}finally{ie.current=r,Z=t,Ea()}},t.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return""===(r=""+e)?"":this.makeStaticMarkup?z(r):this.previousWasTextNode?"\x3c!-- --\x3e"+z(r):(this.previousWasTextNode=!0,z(r));if(e=(t=he(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((r=e.$$typeof)===i)throw Error(o(257));throw Error(o(258,r.toString()))}return e=oe(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}var g=e.type;if("string"==typeof g)return this.renderDOM(e,t,r);switch(g){case x:case w:case l:case f:case h:case u:return e=oe(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case p:throw Error(o(294));case b:throw Error(o(343))}if("object"==typeof g&&null!==g)switch(g.$$typeof){case d:U={};var k=g.render(e.props,e.ref);return k=Da(g.render,e.props,k,e.ref),k=oe(k),this.stack.push({type:null,domNamespace:r,children:k,childIndex:0,context:t,footer:""}),"";case m:return e=[a.createElement(g.type,n({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case s:return r={type:e,domNamespace:r,children:g=oe(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case c:g=e.type,k=e.props;var F=this.threadID;return I(g,F),g=oe(k.children(g[F])),this.stack.push({type:e,domNamespace:r,children:g,childIndex:0,context:t,footer:""}),"";case y:throw Error(o(338));case v:return g=(k=(g=e.type)._init)(g._payload),e=[a.createElement(g,n({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}throw Error(o(130,null==g?g:typeof g,""))},t.renderDOM=function(e,t,r){var i=e.type.toLowerCase();if(r===K&&Ma(i),!fe.hasOwnProperty(i)){if(!le.test(i))throw Error(o(65,i));fe[i]=!0}var u=e.props;if("input"===i)u=n({type:void 0},u,{defaultChecked:void 0,defaultValue:void 0,value:null!=u.value?u.value:u.defaultValue,checked:null!=u.checked?u.checked:u.defaultChecked});else if("textarea"===i){var l=u.value;if(null==l){l=u.defaultValue;var f=u.children;if(null!=f){if(null!=l)throw Error(o(92));if(Array.isArray(f)){if(!(1>=f.length))throw Error(o(93));f=f[0]}l=""+f}null==l&&(l="")}u=n({},u,{value:void 0,children:""+l})}else if("select"===i)this.currentSelectValue=null!=u.value?u.value:u.defaultValue,u=n({},u,{value:void 0});else if("option"===i){f=this.currentSelectValue;var s=function Xa(e){if(null==e)return e;var t="";return a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(u.children);if(null!=f){var c=null!=u.value?u.value+"":s;if(l=!1,Array.isArray(f)){for(var d=0;d<f.length;d++)if(""+f[d]===c){l=!0;break}}else l=""+f===c;u=n({selected:void 0,children:void 0},u,{selected:l,children:s})}}if(l=u){if(ee[i]&&(null!=l.children||null!=l.dangerouslySetInnerHTML))throw Error(o(137,i));if(null!=l.dangerouslySetInnerHTML){if(null!=l.children)throw Error(o(60));if("object"!=typeof l.dangerouslySetInnerHTML||!("__html"in l.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=l.style&&"object"!=typeof l.style)throw Error(o(62))}l=u,f=this.makeStaticMarkup,s=1===this.stack.length,c="<"+e.type;e:if(-1===i.indexOf("-"))d="string"==typeof l.is;else switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":d=!1;break e;default:d=!0}for(x in l)if(ce.call(l,x)){var p=l[x];if(null!=p){if("style"===x){var h=void 0,m="",v="";for(h in p)if(p.hasOwnProperty(h)){var g=0===h.indexOf("--"),y=p[h];if(null!=y){if(g)var b=h;else if(b=h,se.hasOwnProperty(b))b=se[b];else{var w=b.replace(ne,"-$1").toLowerCase().replace(ae,"-ms-");b=se[b]=w}m+=v+b+":",v=h,m+=g=null==y||"boolean"==typeof y||""===y?"":g||"number"!=typeof y||0===y||te.hasOwnProperty(v)&&te[v]?(""+y).trim():y+"px",v=";"}}p=m||null}h=null,d?de.hasOwnProperty(x)||(h=N(h=x)&&null!=p?h+'="'+z(p)+'"':""):h=H(x,p),h&&(c+=" "+h)}}f||s&&(c+=' data-reactroot=""');var x=c;l="",Q.hasOwnProperty(i)?x+="/>":(x+=">",l="</"+e.type+">");e:{if(null!=(f=u.dangerouslySetInnerHTML)){if(null!=f.__html){f=f.__html;break e}}else if("string"==typeof(f=u.children)||"number"==typeof f){f=z(f);break e}f=null}return null!=f?(u=[],ue.hasOwnProperty(i)&&"\n"===f.charAt(0)&&(x+="\n"),x+=f):u=oe(u.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?Ma(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:i,children:u,childIndex:0,context:t,footer:l}),this.previousWasTextNode=!1,x},e}()},40961:(e,t,r)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(22551)},65848:(e,t,r)=>{r(72911)},96540:(e,t,r)=>{e.exports=r(15287)},7997:(e,t,r)=>{r(96540)},76876:(e,t,r)=>{r.d(t,{FlagsProvider:()=>FlagsProvider,useFeature:()=>l});var n=r(96540);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var o=(0,n.createContext)({});function i(e){return Array.isArray(e)?Object.fromEntries(e.map((function(e){return[e,!0]}))):e}function FlagsProvider(e){var t,r,l=e.features,f=void 0===l?{}:l,s=e.children,c=u();return(0,n.createElement)(o.Provider,{value:(t=i(c),r=i(f),a({},t,r))},s)}function u(){return(0,n.useContext)(o)}function l(e){var t=u();return Array.isArray(t)?t.includes(e):"boolean"==typeof t[e]?t[e]:e.split("/").reduce((function(e,t){return"boolean"==typeof e?e:void 0!==e[t]&&e[t]}),t)}},97380:(e,t,r)=>{r.d(t,{default:()=>s});const n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var a,o=new Uint8Array(16);function i(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(o)}for(var u=[],l=0;l<256;++l)u.push((l+256).toString(16).slice(1));function f(e,t=0){return(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase()}const s=function(e,t,r){if(n.randomUUID&&!t&&!e)return n.randomUUID();var a=(e=e||{}).random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=a[o];return t}return f(a)}}}]);