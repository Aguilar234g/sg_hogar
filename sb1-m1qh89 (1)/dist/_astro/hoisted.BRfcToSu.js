var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function re(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var oe={exports:{}};(function(w,$){(function(l,a){w.exports=a()})(ae,function(){return function(l){function a(t){if(n[t])return n[t].exports;var s=n[t]={exports:{},id:t,loaded:!1};return l[t].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}var n={};return a.m=l,a.c=n,a.p="dist/",a(0)}([function(l,a,n){function t(r){return r&&r.__esModule?r:{default:r}}var s=Object.assign||function(r){for(var E=1;E<arguments.length;E++){var _=arguments[E];for(var I in _)Object.prototype.hasOwnProperty.call(_,I)&&(r[I]=_[I])}return r},c=n(1),b=(t(c),n(6)),o=t(b),u=n(7),d=t(u),m=n(8),f=t(m),y=n(9),O=t(y),L=n(10),F=t(L),J=n(11),Q=t(J),U=n(14),G=t(U),S=[],K=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},q=function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(r&&(K=!0),K)return S=(0,Q.default)(S,g),(0,F.default)(S,g.once),S},H=function(){S=(0,G.default)(),q()},i=function(){S.forEach(function(r,E){r.node.removeAttribute("data-aos"),r.node.removeAttribute("data-aos-easing"),r.node.removeAttribute("data-aos-duration"),r.node.removeAttribute("data-aos-delay")})},e=function(r){return r===!0||r==="mobile"&&O.default.mobile()||r==="phone"&&O.default.phone()||r==="tablet"&&O.default.tablet()||typeof r=="function"&&r()===!0},p=function(r){g=s(g,r),S=(0,G.default)();var E=document.all&&!window.atob;return e(g.disable)||E?i():(g.disableMutationObserver||f.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?q(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){q(!0)}):document.addEventListener(g.startEvent,function(){q(!0)}),window.addEventListener("resize",(0,d.default)(q,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(q,g.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)(function(){(0,F.default)(S,g.once)},g.throttleDelay)),g.disableMutationObserver||f.default.ready("[data-aos]",H),S)};l.exports={init:p,refresh:q,refreshHard:H}},function(l,a){},,,,,function(l,a){(function(n){function t(e,p,r){function E(v){var j=M,B=D;return M=D=void 0,C=v,k=e.apply(B,j)}function _(v){return C=v,x=setTimeout(Y,p),N?E(v):k}function I(v){var j=v-A,B=v-C,te=p-j;return P?H(te,z-B):te}function W(v){var j=v-A,B=v-C;return A===void 0||j>=p||j<0||P&&B>=z}function Y(){var v=i();return W(v)?X(v):void(x=setTimeout(Y,I(v)))}function X(v){return x=void 0,h&&M?E(v):(M=D=void 0,k)}function Z(){x!==void 0&&clearTimeout(x),C=0,M=A=D=x=void 0}function V(){return x===void 0?k:X(i())}function T(){var v=i(),j=W(v);if(M=arguments,D=this,A=v,j){if(x===void 0)return _(A);if(P)return x=setTimeout(Y,p),E(A)}return x===void 0&&(x=setTimeout(Y,p)),k}var M,D,z,k,x,A,C=0,N=!1,P=!1,h=!0;if(typeof e!="function")throw new TypeError(m);return p=u(p)||0,c(r)&&(N=!!r.leading,P="maxWait"in r,z=P?q(u(r.maxWait)||0,p):z,h="trailing"in r?!!r.trailing:h),T.cancel=Z,T.flush=V,T}function s(e,p,r){var E=!0,_=!0;if(typeof e!="function")throw new TypeError(m);return c(r)&&(E="leading"in r?!!r.leading:E,_="trailing"in r?!!r.trailing:_),t(e,p,{leading:E,maxWait:p,trailing:_})}function c(e){var p=typeof e>"u"?"undefined":d(e);return!!e&&(p=="object"||p=="function")}function b(e){return!!e&&(typeof e>"u"?"undefined":d(e))=="object"}function o(e){return(typeof e>"u"?"undefined":d(e))=="symbol"||b(e)&&g.call(e)==y}function u(e){if(typeof e=="number")return e;if(o(e))return f;if(c(e)){var p=typeof e.valueOf=="function"?e.valueOf():e;e=c(p)?p+"":p}if(typeof e!="string")return e===0?e:+e;e=e.replace(O,"");var r=F.test(e);return r||J.test(e)?Q(e.slice(2),r?2:8):L.test(e)?f:+e}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m="Expected a function",f=NaN,y="[object Symbol]",O=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,J=/^0o[0-7]+$/i,Q=parseInt,U=(typeof n>"u"?"undefined":d(n))=="object"&&n&&n.Object===Object&&n,G=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,S=U||G||Function("return this")(),K=Object.prototype,g=K.toString,q=Math.max,H=Math.min,i=function(){return S.Date.now()};l.exports=s}).call(a,function(){return this}())},function(l,a){(function(n){function t(i,e,p){function r(h){var v=T,j=M;return T=M=void 0,A=h,z=i.apply(j,v)}function E(h){return A=h,k=setTimeout(W,e),C?r(h):z}function _(h){var v=h-x,j=h-A,B=e-v;return N?q(B,D-j):B}function I(h){var v=h-x,j=h-A;return x===void 0||v>=e||v<0||N&&j>=D}function W(){var h=H();return I(h)?Y(h):void(k=setTimeout(W,_(h)))}function Y(h){return k=void 0,P&&T?r(h):(T=M=void 0,z)}function X(){k!==void 0&&clearTimeout(k),A=0,T=x=M=k=void 0}function Z(){return k===void 0?z:Y(H())}function V(){var h=H(),v=I(h);if(T=arguments,M=this,x=h,v){if(k===void 0)return E(x);if(N)return k=setTimeout(W,e),r(x)}return k===void 0&&(k=setTimeout(W,e)),z}var T,M,D,z,k,x,A=0,C=!1,N=!1,P=!0;if(typeof i!="function")throw new TypeError(d);return e=o(e)||0,s(p)&&(C=!!p.leading,N="maxWait"in p,D=N?g(o(p.maxWait)||0,e):D,P="trailing"in p?!!p.trailing:P),V.cancel=X,V.flush=Z,V}function s(i){var e=typeof i>"u"?"undefined":u(i);return!!i&&(e=="object"||e=="function")}function c(i){return!!i&&(typeof i>"u"?"undefined":u(i))=="object"}function b(i){return(typeof i>"u"?"undefined":u(i))=="symbol"||c(i)&&K.call(i)==f}function o(i){if(typeof i=="number")return i;if(b(i))return m;if(s(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=s(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=i.replace(y,"");var p=L.test(i);return p||F.test(i)?J(i.slice(2),p?2:8):O.test(i)?m:+i}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},d="Expected a function",m=NaN,f="[object Symbol]",y=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,F=/^0o[0-7]+$/i,J=parseInt,Q=(typeof n>"u"?"undefined":u(n))=="object"&&n&&n.Object===Object&&n,U=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,G=Q||U||Function("return this")(),S=Object.prototype,K=S.toString,g=Math.max,q=Math.min,H=function(){return G.Date.now()};l.exports=t}).call(a,function(){return this}())},function(l,a){function n(u){var d=void 0,m=void 0;for(d=0;d<u.length;d+=1)if(m=u[d],m.dataset&&m.dataset.aos||m.children&&n(m.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!t()}function c(u,d){var m=window.document,f=t(),y=new f(b);o=d,y.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function b(u){u&&u.forEach(function(d){var m=Array.prototype.slice.call(d.addedNodes),f=Array.prototype.slice.call(d.removedNodes),y=m.concat(f);if(n(y))return o()})}Object.defineProperty(a,"__esModule",{value:!0});var o=function(){};a.default={isSupported:s,ready:c}},function(l,a){function n(m,f){if(!(m instanceof f))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var s=function(){function m(f,y){for(var O=0;O<y.length;O++){var L=y[O];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(f,L.key,L)}}return function(f,y,O){return y&&m(f.prototype,y),O&&m(f,O),f}}(),c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,b=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function m(){n(this,m)}return s(m,[{key:"phone",value:function(){var f=t();return!(!c.test(f)&&!b.test(f.substr(0,4)))}},{key:"mobile",value:function(){var f=t();return!(!o.test(f)&&!u.test(f.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();a.default=new d},function(l,a){Object.defineProperty(a,"__esModule",{value:!0});var n=function(s,c,b){var o=s.node.getAttribute("data-aos-once");c>s.position?s.node.classList.add("aos-animate"):typeof o<"u"&&(o==="false"||!b&&o!=="true")&&s.node.classList.remove("aos-animate")},t=function(s,c){var b=window.pageYOffset,o=window.innerHeight;s.forEach(function(u,d){n(u,o+b,c)})};a.default=t},function(l,a,n){function t(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(a,"__esModule",{value:!0});var s=n(12),c=t(s),b=function(o,u){return o.forEach(function(d,m){d.node.classList.add("aos-init"),d.position=(0,c.default)(d.node,u.offset)}),o};a.default=b},function(l,a,n){function t(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(a,"__esModule",{value:!0});var s=n(13),c=t(s),b=function(o,u){var d=0,m=0,f=window.innerHeight,y={offset:o.getAttribute("data-aos-offset"),anchor:o.getAttribute("data-aos-anchor"),anchorPlacement:o.getAttribute("data-aos-anchor-placement")};switch(y.offset&&!isNaN(y.offset)&&(m=parseInt(y.offset)),y.anchor&&document.querySelectorAll(y.anchor)&&(o=document.querySelectorAll(y.anchor)[0]),d=(0,c.default)(o).top,y.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=o.offsetHeight/2;break;case"bottom-bottom":d+=o.offsetHeight;break;case"top-center":d+=f/2;break;case"bottom-center":d+=f/2+o.offsetHeight;break;case"center-center":d+=f/2+o.offsetHeight/2;break;case"top-top":d+=f;break;case"bottom-top":d+=o.offsetHeight+f;break;case"center-top":d+=o.offsetHeight/2+f}return y.anchorPlacement||y.offset||isNaN(u)||(m=u),d+m};a.default=b},function(l,a){Object.defineProperty(a,"__esModule",{value:!0});var n=function(t){for(var s=0,c=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)s+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),c+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:c,left:s}};a.default=n},function(l,a){Object.defineProperty(a,"__esModule",{value:!0});var n=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(s){return{node:s}})};a.default=n}])})})(oe);var se=oe.exports;const ce=re(se);document.addEventListener("DOMContentLoaded",()=>{ce.init({duration:800,once:!0,offset:100,easing:"ease-in-out"}),document.querySelectorAll('a[href^="#"]').forEach(l=>{l.addEventListener("click",function(a){a.preventDefault();const n=this.getAttribute("href"),t=document.querySelector(n);if(t){const b=t.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:b,behavior:"smooth"})}})});const w=document.querySelectorAll("section[id]"),$=document.querySelectorAll("header a");window.addEventListener("scroll",()=>{let l="";w.forEach(n=>{const t=n.offsetTop-80-100,s=n.offsetHeight;window.scrollY>=t&&window.scrollY<t+s&&(l="#"+n.getAttribute("id"))}),$.forEach(n=>{n.classList.remove("text-secondary"),n.getAttribute("href")===l&&n.classList.add("text-secondary")})})});const ne=["Innovación Textil","Diseño Sostenible","Calidad Premium","Tecnología Avanzada","Excelencia Artesanal"];let ee=0;const R=document.getElementById("dynamic-text");function ie(){R&&(R.style.opacity="0",R.style.transform="translateY(20px)",setTimeout(()=>{R.textContent=ne[ee],R.style.opacity="1",R.style.transform="translateY(0)",ee=(ee+1)%ne.length},500))}ie();setInterval(ie,3e3);document.addEventListener("DOMContentLoaded",()=>{const w=document.querySelectorAll("[data-name]");document.getElementById("description-panel");const $=document.getElementById("finishing-title"),l=document.getElementById("finishing-description"),a=document.querySelector(".description-content");w.forEach(n=>{n.addEventListener("mouseenter",()=>{if(window.innerWidth>=768){const t=n.getAttribute("data-name"),s=n.getAttribute("data-description");$&&l&&a&&($.textContent=t,l.textContent=s,a.style.opacity="1")}}),n.addEventListener("mouseleave",()=>{window.innerWidth>=768&&a&&(a.style.opacity="0")}),n.addEventListener("click",()=>{if(window.innerWidth<768){const t=n.querySelector(".mobile-description"),s=n.querySelector("span:last-child"),c=document.querySelectorAll(".mobile-description"),b=document.querySelectorAll("[data-name] span:last-child");c.forEach(o=>{o!==t&&o.classList.add("hidden")}),b.forEach(o=>{o!==s&&(o.textContent="+")}),t.classList.toggle("hidden"),s.textContent=t.classList.contains("hidden")?"+":"−"}})})});document.addEventListener("DOMContentLoaded",()=>{let w=null;const $=document.querySelectorAll(".faq-button"),l=document.getElementById("contactModal"),a=document.getElementById("openContactModal"),n=document.getElementById("closeModal"),t=document.getElementById("contactForm");$.forEach(c=>{c.addEventListener("click",()=>{if(w&&w!==c){const d=w.nextElementSibling;w.setAttribute("aria-expanded","false"),w.querySelector("span:last-child").style.transform="rotate(0deg)",d.style.maxHeight="0"}const b=c.getAttribute("aria-expanded")==="true";c.setAttribute("aria-expanded",!b);const o=c.querySelector("span:last-child");o.style.transform=b?"rotate(0deg)":"rotate(45deg)";const u=c.nextElementSibling;b?(u.style.maxHeight="0",w=null):(u.style.maxHeight=u.scrollHeight+"px",w=c)})}),a?.addEventListener("click",()=>{l?.classList.remove("hidden"),l?.classList.add("flex")}),n?.addEventListener("click",()=>{l?.classList.add("hidden"),l?.classList.remove("flex")}),l?.addEventListener("click",c=>{c.target===l&&(l.classList.add("hidden"),l.classList.remove("flex"))}),t?.addEventListener("submit",c=>{c.preventDefault();const b=new FormData(t),o={name:b.get("name"),email:b.get("email"),message:b.get("message")},u=`mailto:customer@sgpartners.es?subject=Consulta de ${o.name}&body=${o.message}%0D%0A%0D%0AContacto: ${o.email}`;window.location.href=u,alert("También puedes contactarnos por teléfono al: +34 672 64 39 99"),l.classList.add("hidden"),l.classList.remove("flex"),t.reset()}),document.querySelectorAll(".faq-button").forEach(c=>{c.classList.remove("active")})});
