"use strict";(self.webpackChunkwaypost_documentation=self.webpackChunkwaypost_documentation||[]).push([[217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="General Experimentation Guidelines",u={unversionedId:"experimentation/experimentation_guidelines",id:"experimentation/experimentation_guidelines",title:"General Experimentation Guidelines",description:"Before starting any experiment, it is important to know what you are doing so that you don\u2019t set it up incorrectly or get misled by results. Ideally there is a data scientist on the team who can help design experiments, but if there isn\u2019t, it\u2019s recommended that whoever is setting up the experiments has a good understanding of A/B testing first. A great book to help form an understanding is A Practical Guide to A/B Testing by Ron Kohavi, Diane Tang, and Ya Xu. However, there is also a plethora of free articles online that cover everything you would need to know about A/B testing.",source:"@site/docs/experimentation/experimentation_guidelines.md",sourceDirName:"experimentation",slug:"/experimentation/experimentation_guidelines",permalink:"/documentation/experimentation/experimentation_guidelines",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SDK Reference",permalink:"/documentation/sdk/reference"},next:{title:"Experiment Metrics",permalink:"/documentation/experimentation/experiment_metrics"}},c={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general-experimentation-guidelines"},"General Experimentation Guidelines"),(0,o.kt)("p",null,"Before starting any experiment, it is important to know what you are doing so that you don\u2019t set it up incorrectly or get misled by results. Ideally there is a data scientist on the team who can help design experiments, but if there isn\u2019t, it\u2019s recommended that whoever is setting up the experiments has a good understanding of A/B testing first. A great book to help form an understanding is: ",(0,o.kt)("em",{parentName:"p"},"Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing")," by Ron Kohavi, Diane Tang, and Ya Xu. However, there is also a plethora of free articles online that cover everything you would need to know about A/B testing."),(0,o.kt)("p",null,"A few general guidelines one should follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the experiment for at least 14 days, even if it has reached enough sample size before then, because novelty effects can cause irregular results that will not last over time."),(0,o.kt)("li",{parentName:"ul"},"Similarly, don\u2019t look at the results until the experiment is over. You can end the experiment once it has passed 14 days and after it has had sufficient sample size."),(0,o.kt)("li",{parentName:"ul"},"Only test one small change at a time. You want to be able to understand exactly what feature is causing a change in a metric. Testing several changes at a time, particularly ones that overlap, will make it more difficult to determine the efficacy of each alteration."),(0,o.kt)("li",{parentName:"ul"},"Make sure there is no external bias causing one group to have a stronger effect than the other. For example, if the feature you are testing causes a longer browser load time, that delay alone is enough to provide a negative user experience, thus contaminating the results.")),(0,o.kt)("p",null,"Waypost currently only offers two treatments for an experiment, a control group and a test group \u2014 in other words, A/B/n tests are not supported. However, you can always run other experiments testing other variants one at a time. There\u2019s no limit on the number of experiments you can run."))}d.isMDXComponent=!0}}]);