(globalThis.webpackChunkstorybook=globalThis.webpackChunkstorybook||[]).push([[229],{35229:(e,t,r)=>{"use strict";r.r(t),r.d(t,{WithToolTipState:()=>Ke,WithTooltip:()=>Ke,WithTooltipPure:()=>Je});r(82526),r(41817),r(32165),r(43371),r(41539),r(39714),r(54747),r(47941),r(19601),r(74916),r(23123),r(57327),r(68309),r(69600),r(92222),r(15306),r(2707),r(66992),r(51532),r(78783),r(33948),r(69826),r(47042),r(70189),r(88674),r(21249),r(18264),r(24603),r(92087),r(4723),r(26699),r(32023),r(23157),r(91038);var n,o,i=r(94601),a=r(67294),s=r(65316),c=r(73935),l=r(52326),u=r.n(l);r(35032),r(80129);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e){return e?(e.nodeName||"").toLowerCase():null}function g(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof g(e).Element||e instanceof Element}function y(e){return e instanceof g(e).HTMLElement||e instanceof HTMLElement}function b(e){return"undefined"!=typeof ShadowRoot&&(e instanceof g(e).ShadowRoot||e instanceof ShadowRoot)}var w={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];y(o)&&m(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});y(n)&&m(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function O(e){return e.split("-")[0]}var x=Math.max,k=Math.min,C=Math.round;function T(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect(),n=1,o=1;if(y(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(n=C(r.width)/a||1),i>0&&(o=C(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function E(e){var t=T(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function R(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&b(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function S(e){return g(e).getComputedStyle(e)}function P(e){return["table","td","th"].indexOf(m(e))>=0}function j(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function A(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(b(e)?e.host:null)||j(e)}function H(e){return y(e)&&"fixed"!==S(e).position?e.offsetParent:null}function M(e){for(var t=g(e),r=H(e);r&&P(r)&&"static"===S(r).position;)r=H(r);return r&&("html"===m(r)||"body"===m(r)&&"static"===S(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&y(e)&&"fixed"===S(e).position)return null;for(var r=A(e);y(r)&&["html","body"].indexOf(m(r))<0;){var n=S(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function B(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function L(e,t,r){return x(e,k(t,r))}function D(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function W(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var V={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,c=O(r.placement),l=B(c),u=[i.l,i.r].indexOf(c)>=0?"height":"width";if(a&&s){var f=function(e,t){return D("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:W(e,i.f))}(o.padding,r),p=E(a),d="y"===l?i.t:i.l,h="y"===l?i.h:i.r,m=r.rects.reference[u]+r.rects.reference[l]-s[l]-r.rects.popper[u],g=s[l]-r.rects.reference[l],v=M(a),y=v?"y"===l?v.clientHeight||0:v.clientWidth||0:0,b=m/2-g/2,w=f[d],x=y-p[u]-f[h],k=y/2-p[u]/2+b,C=L(w,k,x),T=l;r.modifiersData[n]=((t={})[T]=C,t.centerOffset=C-k,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&R(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function U(e){return e.split("-")[1]}var _={top:"auto",right:"auto",bottom:"auto",left:"auto"};function z(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,c=e.position,l=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,p=e.isFixed,d=s.x,h=void 0===d?0:d,m=s.y,v=void 0===m?0:m,y="function"==typeof f?f({x:h,y:v}):{x:h,y:v};h=y.x,v=y.y;var b=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),O=i.l,x=i.t,k=window;if(u){var T=M(r),E="clientHeight",R="clientWidth";if(T===g(r)&&"static"!==S(T=j(r)).position&&"absolute"===c&&(E="scrollHeight",R="scrollWidth"),o===i.t||(o===i.l||o===i.r)&&a===i.i)x=i.h,v-=(p&&k.visualViewport?k.visualViewport.height:T[E])-n.height,v*=l?1:-1;if(o===i.l||(o===i.t||o===i.h)&&a===i.i)O=i.r,h-=(p&&k.visualViewport?k.visualViewport.width:T[R])-n.width,h*=l?1:-1}var P,A=Object.assign({position:c},u&&_),H=!0===f?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:C(t*n)/n||0,y:C(r*n)/n||0}}({x:h,y:v}):{x:h,y:v};return h=H.x,v=H.y,l?Object.assign({},A,((P={})[x]=w?"0":"",P[O]=b?"0":"",P.transform=(k.devicePixelRatio||1)<=1?"translate("+h+"px, "+v+"px)":"translate3d("+h+"px, "+v+"px, 0)",P)):Object.assign({},A,((t={})[x]=w?v+"px":"",t[O]=b?h+"px":"",t.transform="",t))}var F={passive:!0};var q={left:"right",right:"left",bottom:"top",top:"bottom"};function X(e){return e.replace(/left|right|bottom|top/g,(function(e){return q[e]}))}var Y={start:"end",end:"start"};function N(e){return e.replace(/start|end/g,(function(e){return Y[e]}))}function I(e){var t=g(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function $(e){return T(j(e)).left+I(e).scrollLeft}function G(e){var t=S(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function J(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:y(e)&&G(e)?e:J(A(e))}function K(e,t){var r;void 0===t&&(t=[]);var n=J(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=g(n),a=o?[i].concat(i.visualViewport||[],G(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(K(A(a)))}function Q(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Z(e,t){return t===i.v?Q(function(e){var t=g(e),r=j(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+$(e),y:s}}(e)):v(t)?function(e){var t=T(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Q(function(e){var t,r=j(e),n=I(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=x(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=x(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+$(e),c=-n.scrollTop;return"rtl"===S(o||r).direction&&(s+=x(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(j(e)))}function ee(e,t,r){var n="clippingParents"===t?function(e){var t=K(A(e)),r=["absolute","fixed"].indexOf(S(e).position)>=0&&y(e)?M(e):e;return v(r)?t.filter((function(e){return v(e)&&R(e,r)&&"body"!==m(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=Z(e,r);return t.top=x(n.top,t.top),t.right=k(n.right,t.right),t.bottom=k(n.bottom,t.bottom),t.left=x(n.left,t.left),t}),Z(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function te(e){var t,r=e.reference,n=e.element,o=e.placement,a=o?O(o):null,s=o?U(o):null,c=r.x+r.width/2-n.width/2,l=r.y+r.height/2-n.height/2;switch(a){case i.t:t={x:c,y:r.y-n.height};break;case i.h:t={x:c,y:r.y+r.height};break;case i.r:t={x:r.x+r.width,y:l};break;case i.l:t={x:r.x-n.width,y:l};break;default:t={x:r.x,y:r.y}}var u=a?B(a):null;if(null!=u){var f="y"===u?"height":"width";switch(s){case i.s:t[u]=t[u]-(r[f]/2-n[f]/2);break;case i.i:t[u]=t[u]+(r[f]/2-n[f]/2)}}return t}function re(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,a=r.boundary,s=void 0===a?i.j:a,c=r.rootBoundary,l=void 0===c?i.v:c,u=r.elementContext,f=void 0===u?i.p:u,p=r.altBoundary,d=void 0!==p&&p,h=r.padding,m=void 0===h?0:h,g=D("number"!=typeof m?m:W(m,i.f)),y=f===i.p?i.k:i.p,b=e.rects.popper,w=e.elements[d?y:f],O=ee(v(w)?w:w.contextElement||j(e.elements.popper),s,l),x=T(e.elements.reference),k=te({reference:x,element:b,strategy:"absolute",placement:o}),C=Q(Object.assign({},b,k)),E=f===i.p?C:x,R={top:O.top-E.top+g.top,bottom:E.bottom-O.bottom+g.bottom,left:O.left-E.left+g.left,right:E.right-O.right+g.right},S=e.modifiersData.offset;if(f===i.p&&S){var P=S[o];Object.keys(R).forEach((function(e){var t=[i.r,i.h].indexOf(e)>=0?1:-1,r=[i.t,i.h].indexOf(e)>=0?"y":"x";R[e]+=P[r]*t}))}return R}function ne(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function oe(e){return[i.t,i.r,i.h,i.l].some((function(t){return e[t]>=0}))}var ie={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=void 0===o?[0,0]:o,s=i.n.reduce((function(e,r){return e[r]=function(e,t,r){var n=O(e),o=[i.l,i.t].indexOf(n)>=0?-1:1,a="function"==typeof r?r(Object.assign({},t,{placement:e})):r,s=a[0],c=a[1];return s=s||0,c=(c||0)*o,[i.l,i.r].indexOf(n)>=0?{x:c,y:s}:{x:s,y:c}}(r,t.rects,a),e}),{}),c=s[t.placement],l=c.x,u=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=s}};var ae={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=void 0===o||o,s=r.altAxis,c=void 0!==s&&s,l=r.boundary,u=r.rootBoundary,f=r.altBoundary,p=r.padding,d=r.tether,h=void 0===d||d,m=r.tetherOffset,g=void 0===m?0:m,v=re(t,{boundary:l,rootBoundary:u,padding:p,altBoundary:f}),y=O(t.placement),b=U(t.placement),w=!b,C=B(y),T="x"===C?"y":"x",R=t.modifiersData.popperOffsets,S=t.rects.reference,P=t.rects.popper,j="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,A="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(R){if(a){var W,V="y"===C?i.t:i.l,_="y"===C?i.h:i.r,z="y"===C?"height":"width",F=R[C],q=F+v[V],X=F-v[_],Y=h?-P[z]/2:0,N=b===i.s?S[z]:P[z],I=b===i.s?-P[z]:-S[z],$=t.elements.arrow,G=h&&$?E($):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=J[V],Q=J[_],Z=L(0,S[z],G[z]),ee=w?S[z]/2-Y-Z-K-A.mainAxis:N-Z-K-A.mainAxis,te=w?-S[z]/2+Y+Z+Q+A.mainAxis:I+Z+Q+A.mainAxis,ne=t.elements.arrow&&M(t.elements.arrow),oe=ne?"y"===C?ne.clientTop||0:ne.clientLeft||0:0,ie=null!=(W=null==H?void 0:H[C])?W:0,ae=F+te-ie,se=L(h?k(q,F+ee-ie-oe):q,F,h?x(X,ae):X);R[C]=se,D[C]=se-F}if(c){var ce,le="x"===C?i.t:i.l,ue="x"===C?i.h:i.r,fe=R[T],pe="y"===T?"height":"width",de=fe+v[le],he=fe-v[ue],me=-1!==[i.t,i.l].indexOf(y),ge=null!=(ce=null==H?void 0:H[T])?ce:0,ve=me?de:fe-S[pe]-P[pe]-ge+A.altAxis,ye=me?fe+S[pe]+P[pe]-ge-A.altAxis:he,be=h&&me?function(e,t,r){var n=L(e,t,r);return n>r?r:n}(ve,fe,ye):L(h?ve:de,fe,h?ye:he);R[T]=be,D[T]=be-fe}t.modifiersData[n]=D}},requiresIfExists:["offset"]};function se(e,t,r){void 0===r&&(r=!1);var n,o,i=y(t),a=y(t)&&function(e){var t=e.getBoundingClientRect(),r=C(t.width)/e.offsetWidth||1,n=C(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),s=j(t),c=T(e,a),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!r)&&(("body"!==m(t)||G(s))&&(l=(n=t)!==g(n)&&y(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:I(n)),y(t)?((u=T(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=$(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function ce(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var le={placement:"bottom",modifiers:[],strategy:"absolute"};function ue(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function fe(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,a=void 0===o?le:o;return function(e,t,r){void 0===r&&(r=a);var o,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},le,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],u=!1,f={state:c,setOptions:function(r){var o="function"==typeof r?r(c.options):r;p(),c.options=Object.assign({},a,c.options,o),c.scrollParents={reference:v(e)?K(e):e.contextElement?K(e.contextElement):[],popper:K(t)};var s=function(e){var t=ce(e);return i.q.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,c.options.modifiers)));return c.orderedModifiers=s.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:f,options:n}),a=function(){};l.push(i||a)}})),f.update()},forceUpdate:function(){if(!u){var e=c.elements,t=e.reference,r=e.popper;if(ue(t,r)){c.rects={reference:se(t,M(r),"fixed"===c.options.strategy),popper:E(r)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<c.orderedModifiers.length;n++)if(!0!==c.reset){var o=c.orderedModifiers[n],i=o.fn,a=o.options,s=void 0===a?{}:a,l=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:l,instance:f})||c)}else c.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){p(),u=!0}};if(!ue(e,t))return f;function p(){l.forEach((function(e){return e()})),l=[]}return f.setOptions(r).then((function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)})),f}}var pe=fe({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=g(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",r.update,F)})),s&&c.addEventListener("resize",r.update,F),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",r.update,F)})),s&&c.removeEventListener("resize",r.update,F)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,l={placement:O(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,z(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,z(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},w,ie,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=void 0===o||o,s=r.altAxis,c=void 0===s||s,l=r.fallbackPlacements,u=r.padding,f=r.boundary,p=r.rootBoundary,d=r.altBoundary,h=r.flipVariations,m=void 0===h||h,g=r.allowedAutoPlacements,v=t.options.placement,y=O(v),b=l||(y===v||!m?[X(v)]:function(e){if(O(e)===i.o)return[];var t=X(e);return[N(e),t,N(t)]}(v)),w=[v].concat(b).reduce((function(e,r){return e.concat(O(r)===i.o?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,s=r.padding,c=r.flipVariations,l=r.allowedAutoPlacements,u=void 0===l?i.n:l,f=U(n),p=f?c?i.m:i.m.filter((function(e){return U(e)===f})):i.f,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var h=d.reduce((function(t,r){return t[r]=re(e,{placement:r,boundary:o,rootBoundary:a,padding:s})[O(r)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:r,boundary:f,rootBoundary:p,padding:u,flipVariations:m,allowedAutoPlacements:g}):r)}),[]),x=t.rects.reference,k=t.rects.popper,C=new Map,T=!0,E=w[0],R=0;R<w.length;R++){var S=w[R],P=O(S),j=U(S)===i.s,A=[i.t,i.h].indexOf(P)>=0,H=A?"width":"height",M=re(t,{placement:S,boundary:f,rootBoundary:p,altBoundary:d,padding:u}),B=A?j?i.r:i.l:j?i.h:i.t;x[H]>k[H]&&(B=X(B));var L=X(B),D=[];if(a&&D.push(M[P]<=0),c&&D.push(M[B]<=0,M[L]<=0),D.every((function(e){return e}))){E=S,T=!1;break}C.set(S,D)}if(T)for(var W=function(e){var t=w.find((function(t){var r=C.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},V=m?3:1;V>0;V--){if("break"===W(V))break}t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ae,V,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=re(t,{elementContext:"reference"}),s=re(t,{altBoundary:!0}),c=ne(a,n),l=ne(s,o,i),u=oe(c),f=oe(l);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}}]});function de(e,t){return de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},de(e,t)}function he(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,de(e,t)}var me=a.createContext(),ge=a.createContext();function ve(e){var t=e.children,r=a.useState(null),n=r[0],o=r[1],i=a.useRef(!1);a.useEffect((function(){return function(){i.current=!0}}),[]);var s=a.useCallback((function(e){i.current||o(e)}),[]);return a.createElement(me.Provider,{value:n},a.createElement(ge.Provider,{value:s},t))}var ye=function(e){return Array.isArray(e)?e[0]:e},be=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},we=function(e,t){if("function"==typeof e)return be(e,t);null!=e&&(e.current=t)},Oe=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},xe="undefined"!=typeof window&&window.document&&window.document.createElement?a.useLayoutEffect:a.useEffect,ke="undefined"!=typeof Element,Ce="function"==typeof Map,Te="function"==typeof Set,Ee="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function Re(e,t){if(e===t)return!0;if(e&&t&&"object"==h(e)&&"object"==h(t)){if(e.constructor!==t.constructor)return!1;var r,n,o,i;if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!Re(e[n],t[n]))return!1;return!0}if(Ce&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!Re(n.value[1],t.get(n.value[0])))return!1;return!0}if(Te&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(Ee&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((r=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if(ke&&e instanceof Element)return!1;for(n=r;0!=n--;)if(("_owner"!==o[n]&&"__v"!==o[n]&&"__o"!==o[n]||!e.$$typeof)&&!Re(e[o[n]],t[o[n]]))return!1;return!0}return e!=e&&t!=t}var Se=function(e,t){try{return Re(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}},Pe=[],je=function(){},Ae=function(){return Promise.resolve(null)},He=[];function Me(e){var t=e.placement,r=void 0===t?"bottom":t,n=e.strategy,o=void 0===n?"absolute":n,i=e.modifiers,s=void 0===i?He:i,c=e.referenceElement,l=e.onFirstUpdate,u=e.innerRef,f=e.children,p=a.useContext(me),d=a.useState(null),h=d[0],m=d[1],g=a.useState(null),v=g[0],y=g[1];a.useEffect((function(){we(u,h)}),[u,h]);var b=a.useMemo((function(){return{placement:r,strategy:o,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:null!=v,options:{element:v}}])}}),[r,o,l,s,v]),w=function(e,t,r){void 0===r&&(r={});var n=a.useRef(null),o={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||Pe},i=a.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=i[0],c=i[1],l=a.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);c({styles:Oe(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:Oe(r.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),u=a.useMemo((function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[l,{name:"applyStyles",enabled:!1}])};return Se(n.current,e)?n.current||e:(n.current=e,e)}),[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,l]),f=a.useRef();return xe((function(){f.current&&f.current.setOptions(u)}),[u]),xe((function(){if(null!=e&&null!=t){var n=(r.createPopper||pe)(e,t,u);return f.current=n,function(){n.destroy(),f.current=null}}}),[e,t,r.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}}(c||p,h,b),O=w.state,x=w.styles,k=w.forceUpdate,C=w.update,T=a.useMemo((function(){return{ref:m,style:x.popper,placement:O?O.placement:r,hasPopperEscaped:O&&O.modifiersData.hide?O.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:O&&O.modifiersData.hide?O.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:x.arrow,ref:y},forceUpdate:k||je,update:C||Ae}}),[m,y,r,O,x,C,k]);return ye(f)(T)}var Be=function(){},Le=Be;function De(e){var t=e.children,r=e.innerRef,n=a.useContext(ge),o=a.useCallback((function(e){we(r,e),be(n,e)}),[r,n]);return a.useEffect((function(){return function(){return we(r,null)}})),a.useEffect((function(){Le(Boolean(n),"`Reference` should not be used outside of a `Manager` component.")}),[n]),ye(t)({ref:o})}var We=a.createContext({}),Ve=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},Ue=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},_e=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),(0,i.a)({},e,{style:(0,i.a)({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),(0,i.a)({},e,t.isTriggeredBy("hover")&&{onMouseEnter:Ve(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:Ve(t.props.hideTooltip,e.onMouseLeave)},{style:(0,i.a)({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}he(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},r.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},r.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},r.render=function(){var e=this.props,t=e.arrowProps,r=e.placement,n=e.tooltip;return a.createElement(We.Provider,{value:this.contextValue},n({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:r,tooltipRef:this.getTooltipRef}))},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(a.Component);_e.contextType=We;var ze=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var r=e.pageX,n=e.pageY;t.clearScheduled();var o={tooltipShown:!0};t.props.followCursor&&(o=(0,i.a)({},o,{pageX:r,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(o)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),(0,i.a)({},e,t.isTriggeredBy("click")&&{onClick:Ve(t.clickToggle,e.onClick),onTouchEnd:Ve(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:Ve(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&(0,i.a)({onMouseEnter:Ve(t.showTooltip,e.onMouseEnter),onMouseLeave:Ve(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:Ve(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:Ve(t.showTooltip,e.onFocus),onBlur:Ve(t.hideTooltip,e.onBlur)})},t}he(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this.clearScheduled()},r.render=function(){var e=this,t=this.props,r=t.children,n=t.tooltip,o=t.placement,s=t.trigger,l=t.getTriggerRef,u=t.modifiers,f=t.closeOnReferenceHidden,p=t.usePortal,d=t.portalContainer,h=t.followCursor,m=t.getTooltipRef,g=t.mutationObserverOptions,v=(0,i._)(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=a.createElement(Me,(0,i.a)({innerRef:m,placement:o,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(u)},v),(function(t){var r=t.ref,o=t.style,c=t.placement,l=t.arrowProps,u=t.isReferenceHidden,p=t.update;if(h&&e.popperOffset){var d=e.state,m=d.pageX,v=d.pageY,y=e.popperOffset,b=y.width,w=y.height,O=m+b>window.pageXOffset+document.body.offsetWidth?m-b:m,x=v+w>window.pageYOffset+document.body.offsetHeight?v-w:v;o.transform="translate3d("+O+"px, "+x+"px, 0"}return a.createElement(_e,(0,i.a)({arrowProps:l,closeOnReferenceHidden:f,isReferenceHidden:u,placement:c,update:p,style:o,tooltip:n,trigger:s,mutationObserverOptions:g},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:r}))}));return a.createElement(ve,null,a.createElement(De,{innerRef:l},(function(t){var n=t.ref;return r({getTriggerProps:e.getTriggerProps,triggerRef:n})})),this.getState()&&(p?(0,c.createPortal)(y,d):y))},r.isControlled=function(){return void 0!==this.props.tooltipShown},r.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(a.Component);ze.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:Ue()?document.body:null,trigger:"hover",usePortal:Ue(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var Fe=ze,qe=u()(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),Xe=s.zo.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat(qe("top",n,-8,"auto"),"px"),top:"".concat(qe("bottom",n,-8,"auto"),"px"),right:"".concat(qe("left",n,-8,"auto"),"px"),left:"".concat(qe("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat(qe("top",n,"0",8),"px"),borderTopWidth:"".concat(qe("bottom",n,"0",8),"px"),borderRightWidth:"".concat(qe("left",n,"0",8),"px"),borderLeftWidth:"".concat(qe("right",n,"0",8),"px"),borderTopColor:qe("top",n,t.color[r]||r||"light"===t.base?(0,s.$n)(t.background.app):(0,s._j)(t.background.app),"transparent"),borderBottomColor:qe("bottom",n,t.color[r]||r||"light"===t.base?(0,s.$n)(t.background.app):(0,s._j)(t.background.app),"transparent"),borderLeftColor:qe("left",n,t.color[r]||r||"light"===t.base?(0,s.$n)(t.background.app):(0,s._j)(t.background.app),"transparent"),borderRightColor:qe("right",n,t.color[r]||r||"light"===t.base?(0,s.$n)(t.background.app):(0,s._j)(t.background.app),"transparent")}})),Ye=s.zo.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?(0,s.$n)(t.background.app):(0,s._j)(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),Ne=function(e){var t=e.placement,r=e.hasChrome,n=e.children,o=e.arrowProps,s=e.tooltipRef,c=e.arrowRef,l=e.color,u=(0,i.d)(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return a.createElement(Ye,Object.assign({hasChrome:r,placement:t,ref:s},u,{color:l}),r&&a.createElement(Xe,Object.assign({placement:t,ref:c},o,{color:l})),n)};Ne.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var Ie=i.w.document,$e=s.zo.div(n||(n=d(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),Ge=s.zo.g(o||(o=d(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),Je=function(e){var t=e.svg,r=e.trigger,n=(e.closeOnClick,e.placement),o=e.modifiers,s=e.hasChrome,c=e.tooltip,l=e.children,u=e.tooltipShown,f=e.onVisibilityChange,p=(0,i.d)(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),d=t?Ge:$e;return a.createElement(Fe,{placement:n,trigger:r,modifiers:o,tooltipShown:u,onVisibilityChange:f,tooltip:function(e){var t=e.getTooltipProps,r=e.getArrowProps,n=e.tooltipRef,o=e.arrowRef,i=e.placement;return a.createElement(Ne,Object.assign({hasChrome:s,placement:i,tooltipRef:n,arrowRef:o,arrowProps:r()},t()),"function"==typeof c?c({onHide:function(){return f(!1)}}):c)}},(function(e){var t=e.getTriggerProps,r=e.triggerRef;return a.createElement(d,Object.assign({ref:r},t(),p),l)}))};Je.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Ke=function(e){var t=e.startOpen,r=e.onVisibilityChange,n=(0,i.d)(e,["startOpen","onVisibilityChange"]),o=f((0,a.useState)(t||!1),2),s=o[0],c=o[1],l=(0,a.useCallback)((function(e){r&&!1===r(e)||c(e)}),[r]);return(0,a.useEffect)((function(){var e=function(){return l(!1)};Ie.addEventListener("keydown",e,!1);var t=Array.from(Ie.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(e){}})))}catch(e){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){Ie.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),a.createElement(Je,Object.assign({},n,{tooltipShown:s,onVisibilityChange:l}))}},92087:(e,t,r)=>{var n=r(19781),o=r(3070),i=r(67066),a=r(47293);n&&a((function(){return"sy"!==Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get.call({dotAll:!0,sticky:!0})}))&&o.f(RegExp.prototype,"flags",{configurable:!0,get:i})}}]);