"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[964],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,d=p["".concat(c,".").concat(g)]||p[g]||u[g]||a;return n?r.createElement(d,i(i({ref:t},f),{},{components:n})):r.createElement(d,i({ref:t},f))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="Flag Events Log",s={unversionedId:"flag-management/event-log",id:"flag-management/event-log",title:"Flag Events Log",description:"The Flag Events Log page, accessible via the left sidebar, displays a table of actions performed on feature flags, ordered by most recent to least recent. This is useful if you would like to see the history of a feature flag. Event types include \u201cFLAGCREATED\u201d, \u201cFLAGDELETED\u201d, \u201cFLAGTOGGLED\u201d, and \u201cFLAGEDITED\u201d. You can filter for events for a specific flag by selecting the name of your desired flag in the drop-down.",source:"@site/docs/flag-management/event-log.md",sourceDirName:"flag-management",slug:"/flag-management/event-log",permalink:"/documentation/flag-management/event-log",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Managing Feature Flags",permalink:"/documentation/flag-management/managing-flags"},next:{title:"SDK Keys",permalink:"/documentation/sdk/overview"}},f={},u=[],p={toc:u};function g(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flag-events-log"},"Flag Events Log"),(0,a.kt)("p",null,"The Flag Events Log page, accessible via the left sidebar, displays a table of actions performed on feature flags, ordered by most recent to least recent. This is useful if you would like to see the history of a feature flag. Event types include \u201cFLAG_CREATED\u201d, \u201cFLAG_DELETED\u201d, \u201cFLAG_TOGGLED\u201d, and \u201cFLAG_EDITED\u201d. You can filter for events for a specific flag by selecting the name of your desired flag in the drop-down."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Event Log",src:n(409).Z,width:"1494",height:"854"})))}g.isMDXComponent=!0},409:function(e,t,n){t.Z=n.p+"assets/images/event-log-0a94d866a8206bba61a8a07791e9360c.gif"}}]);