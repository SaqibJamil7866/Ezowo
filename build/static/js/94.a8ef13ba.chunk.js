(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[94],{1510:function(e,n,t){},734:function(e,n,t){"use strict";t.d(n,"a",(function(){return k})),t.d(n,"b",(function(){return j})),t.d(n,"c",(function(){return L})),t.d(n,"d",(function(){return y})),t.d(n,"e",(function(){return g}));var i=t(1),r=t.n(i);function o(e){var n,t,i="";if("string"===typeof e||"number"===typeof e)i+=e;else if("object"===typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}var c=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(i&&(i+=" "),i+=n);return i};function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}var s=Object(i.createContext)({});function l(){return Object(i.useContext)(s)}var f=function(e){return r.a.createElement(s.Provider,{value:e.refTracker},e.children)};function d(){var e=new Map;return{on:function(n,t){var i;return e.has(n)?null==(i=e.get(n))||i.add(t):e.set(n,new Set([t])),this},off:function(n,t){return t?e.get(n).delete(t):e.delete(n),this},emit:function(n,t){if("production"!==Object({NODE_ENV:"production",PUBLIC_URL:"/app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASENAME:""}).NODE){var i=n;e.has(n)||0===i||console.error("It seems that the menu you are trying to display is not renderer or you have a menu id mismatch.","You used the menu id: "+n)}return e.has(n)&&e.get(n).forEach((function(e){e(t)})),this}}}var v=d();function m(){return Object(i.useRef)(new Map).current}var p=function(e){var n=e.id,t=e.event,i=e.props,r=e.position;t.preventDefault&&t.preventDefault(),v.emit(0).emit(n,{event:t.nativeEvent||t,props:i,position:r})},b=function(){v.emit(0)};function g(e){return{show:function(n,t){p({id:(null==t?void 0:t.id)||(null==e?void 0:e.id),props:(null==t?void 0:t.props)||(null==e?void 0:e.props),event:n,position:null==t?void 0:t.position})},hideAll:function(){b()}}}function h(){var e,n,t,i,r=new Map,o=!1;function c(){i[e].node.focus()}function a(){return-1!==e||(u(),!1)}function u(){e+1<i.length?e++:e+1===i.length&&(e=0),o&&s(),c()}function s(){if(a()&&!t){var u=r.get(n),s=u.isRoot,l=u.items,f=u.focusedIndex,d=u.parentNode;n.classList.remove("react-contexify__submenu--is-open"),i=l,n=d,s&&(t=!0,r.clear()),o||(e=f,c())}}return{init:function(n){i=n,e=-1,t=!0},moveDown:u,moveUp:function(){-1===e||0===e?e=i.length-1:e-1<i.length&&e--,o&&s(),c()},openSubmenu:function(){if(a()&&e>=0&&i[e].isSubmenu){var u=Array.from(i[e].submenuRefTracker.values()),s=i[e].node;return r.set(s,{isRoot:t,focusedIndex:e,parentNode:n||s,items:i}),s.classList.add("react-contexify__submenu--is-open"),n=s,u.length>0?(e=0,i=u):o=!0,t=!1,c(),!0}return!1},closeSubmenu:s}}var y={fade:"fade",flip:"flip",scale:"scale",slide:"slide"},w=function(){};function E(e){return"function"===typeof e}function _(e){return"string"===typeof e}function x(e,n){return i.Children.map(i.Children.toArray(e).filter(Boolean),(function(e){return Object(i.cloneElement)(e,n)}))}function O(e,n){return E(e)?e(n):e}function T(e,n){return E(n)?a({},e,n(e)):a({},e,n)}var j=function(e){var n,t=e.id,o=e.theme,s=e.style,l=e.className,d=e.children,p=e.animation,b=void 0===p?"scale":p,g=e.onHidden,y=void 0===g?w:g,E=e.onShown,O=void 0===E?w:E,j=u(e,["id","theme","style","className","children","animation","onHidden","onShown"]),k=Object(i.useReducer)(T,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),L=k[0],S=k[1],N=Object(i.useRef)(null),A=Object(i.useRef)(!1),R=function(e){var n=Object(i.useRef)();return Object(i.useEffect)((function(){n.current=e}),[e]),n.current}(L.visible),C=m(),D=Object(i.useState)((function(){return h()}))[0];function F(e){var n=e.event,t=e.props,i=e.position;n.stopPropagation();var r=i||function(e){var n={x:0,y:0};return function(e){return"touchend"===e.type}(e)&&e.changedTouches&&e.changedTouches.length>0?(n.x=e.changedTouches[0].clientX,n.y=e.changedTouches[0].clientY):(n.x=e.clientX,n.y=e.clientY),(!n.x||n.x<0)&&(n.x=0),(!n.y||n.y<0)&&(n.y=0),n}(n),o=r.x,c=r.y;setTimeout((function(){S({visible:!0,willLeave:!1,x:o,y:c,triggerEvent:n,propsFromTrigger:t})}),0)}function P(e){var n=e;("undefined"===typeof n||2!==n.button&&!0!==n.ctrlKey||"contextmenu"===n.type)&&(!function(e){return!(!e||!(_(e)||"exit"in e&&e.exit))}(b)?S((function(e){return{visible:!e.visible&&e.visible}})):S((function(e){return{willLeave:e.visible}})))}Object(i.useEffect)((function(){return A.current=!0,v.on(t,F).on(0,P),function(){v.off(t,F).off(0,P)}}),[t]),Object(i.useEffect)((function(){A.current&&L.visible!==R&&(L.visible?O():y())}),[L.visible,y,O]),Object(i.useEffect)((function(){L.visible?D.init(Array.from(C.values())):C.clear()}),[L.visible,D,C]),Object(i.useEffect)((function(){if(L.visible){var e=window,n=e.innerWidth,t=e.innerHeight,i=N.current,r=i.offsetWidth,o=i.offsetHeight,c=L.x,a=L.y;c+r>n&&(c-=c+r-n),a+o>t&&(a-=a+o-t),S({x:c,y:a})}}),[L.visible]),Object(i.useEffect)((function(){function e(e){switch(e.preventDefault(),e.key){case"Enter":D.openSubmenu()||P();break;case"Escape":P();break;case"ArrowUp":D.moveUp();break;case"ArrowDown":D.moveDown();break;case"ArrowRight":D.openSubmenu();break;case"ArrowLeft":D.closeSubmenu()}}return L.visible&&(window.addEventListener("resize",P),window.addEventListener("contextmenu",P),window.addEventListener("click",P),window.addEventListener("scroll",P),window.addEventListener("keydown",e),window.addEventListener("blur",P)),function(){window.removeEventListener("resize",P),window.removeEventListener("contextmenu",P),window.removeEventListener("click",P),window.removeEventListener("scroll",P),window.removeEventListener("keydown",e),window.removeEventListener("blur",P)}}),[L.visible,D]);var H=L.visible,I=L.triggerEvent,W=L.propsFromTrigger,K=L.x,U=L.y,B=L.willLeave,J=c("react-contexify",l,((n={})["react-contexify__theme--"+o]=o,n),function(){return b?_(b)?c(((e={})["react-contexify__will-enter--"+b]=b&&H&&!B,e["react-contexify__will-leave--"+b+" react-contexify__will-leave--'disabled'"]=b&&H&&B,e)):"enter"in b&&"exit"in b?c(((n={})["react-contexify__will-enter--"+b.enter]=b.enter&&H&&!B,n["react-contexify__will-leave--"+b.exit+" react-contexify__will-leave--'disabled'"]=b.exit&&H&&B,n)):null:null;var e,n}()),M=a({},s,{left:K,top:U,opacity:1});return r.a.createElement(f,{refTracker:C},H&&r.a.createElement("div",Object.assign({},j,{className:J,onAnimationEnd:function(){L.willLeave&&L.visible&&S({visible:!1,willLeave:!1})},style:M,ref:N,role:"menu"}),x(d,{propsFromTrigger:W,triggerEvent:I})))},k=function(e){var n,t=e.children,i=e.className,o=e.style,a=e.triggerEvent,s=e.data,f=e.propsFromTrigger,d=e.onClick,v=void 0===d?w:d,m=e.disabled,p=void 0!==m&&m,b=e.hidden,g=void 0!==b&&b,h=u(e,["children","className","style","triggerEvent","data","propsFromTrigger","onClick","disabled","hidden"]),y=l(),E={data:s,triggerEvent:a,props:f},_=O(p,E);if(O(g,E))return null;var x=c("react-contexify__item",i,((n={})["react-contexify__item--disabled"]=_,n));return r.a.createElement("div",Object.assign({},h,{className:x,style:o,onClick:function(e){E.event=e,_?e.stopPropagation():v(E)},onKeyDown:function(e){"Enter"===e.key&&(E.event=e,v(E))},ref:function(e){e&&!_&&y.set(e,{node:e,isSubmenu:!1})},tabIndex:-1,role:"menuitem","aria-disabled":_}),r.a.createElement("div",{className:"react-contexify__item__content"},t))};var L=function(e){var n,t=e.arrow,o=void 0===t?"\u25b6":t,s=e.children,d=e.disabled,v=void 0!==d&&d,p=e.hidden,b=void 0!==p&&p,g=e.label,h=e.className,y=e.triggerEvent,w=e.propsFromTrigger,E=e.style,_=u(e,["arrow","children","disabled","hidden","label","className","triggerEvent","propsFromTrigger","style"]),T=l(),j=m(),k=Object(i.useRef)(null),L=Object(i.useState)({left:"100%",top:0,bottom:"initial"}),S=L[0],N=L[1],A={triggerEvent:y,props:w},R=O(v,A),C=O(b,A);if(Object(i.useEffect)((function(){if(k.current){var e=window,n=e.innerWidth,t=e.innerHeight,i=k.current.getBoundingClientRect(),r={};i.right<n?(r.left="100%",r.right=void 0):(r.right="100%",r.left=void 0),i.bottom>t?(r.bottom=0,r.top="initial"):r.bottom="initial",N(r)}}),[]),C)return null;var D=c("react-contexify__item",h,((n={})["react-contexify__item--disabled"]=R,n)),F=a({},E,S);return r.a.createElement(f,{refTracker:j},r.a.createElement("div",Object.assign({},_,{className:D,ref:function(e){e&&!R&&T.set(e,{node:e,isSubmenu:!0,submenuRefTracker:j})},tabIndex:-1,role:"menuitem","aria-haspopup":!0,"aria-disabled":R}),r.a.createElement("div",{className:"react-contexify__item__content",onClick:function(e){e.stopPropagation()}},g,r.a.createElement("span",{className:"react-contexify__submenu-arrow"},o)),r.a.createElement("div",{className:"react-contexify react-contexify__submenu",ref:k,style:F},x(s,{propsFromTrigger:w,triggerEvent:y}))))}}}]);
//# sourceMappingURL=94.a8ef13ba.chunk.js.map