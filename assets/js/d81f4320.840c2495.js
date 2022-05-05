"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[632],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=u(n),d=o,f=y["".concat(s,".").concat(d)]||y[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},938:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:1},s="SDK Keys",u={unversionedId:"sdk/overview",id:"sdk/overview",title:"SDK Keys",description:"An SDK Key is used on requests from the SDK to the Flag Provider service in order to verify that the request is coming from the SDK and not another party. Therefore, you will need to embed your SDK key when you instantiate the SDK client on your app. For increased security, it is recommended to keep the key as an environment variable rather than hard-coding it into your app.",source:"@site/docs/sdk/overview.md",sourceDirName:"sdk",slug:"/sdk/overview",permalink:"/documentation/sdk/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Flag Events Log",permalink:"/documentation/flag-management/event-log"},next:{title:"React SDK",permalink:"/documentation/sdk/react-sdk"}},l={},p=[],y={toc:p};function d(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},y,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdk-keys"},"SDK Keys"),(0,i.kt)("p",null,"An SDK Key is used on requests from the SDK to the Flag Provider service in order to verify that the request is coming from the SDK and not another party. Therefore, you will need to embed your SDK key when you instantiate the SDK client on your app. For increased security, it is recommended to keep the key as an environment variable rather than hard-coding it into your app."),(0,i.kt)("p",null,"To find your key, simply navigate to the ",(0,i.kt)("em",{parentName:"p"},"SDK Key")," page via the left sidebar of Waypost-UI. If there\u2019s already an existing key, you can view and copy it from this page to place in your application. If you don\u2019t have one or want to generate a new one, click \u201cGenerate a new key\u201d."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"SDK Key",src:n(4340).Z,width:"1207",height:"572"})),(0,i.kt)("p",null,"Warning: generating a new key will make existing keys no longer valid, so be sure to replace the existing key in your application\u2019s environment variable."))}d.isMDXComponent=!0},4340:function(e,t,n){t.Z=n.p+"assets/images/sdk_key-3510d3f20107c6307877e1abe76049e2.jpg"}}]);