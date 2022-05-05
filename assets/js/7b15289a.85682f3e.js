"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[567],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(a),m=r,p=f["".concat(l,".").concat(m)]||f[m]||g[m]||o;return a?n.createElement(p,i(i({ref:t},c),{},{components:a})):n.createElement(p,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9096:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return g}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:1,title:"Managing Feature Flags"},l=void 0,u={unversionedId:"flag-management/managing-flags",id:"flag-management/managing-flags",title:"Managing Feature Flags",description:"Waypost contains several core features to help you manage your feature flags, view changes made to flags, and set up and run experiments.",source:"@site/docs/flag-management/managing-flags.md",sourceDirName:"flag-management",slug:"/flag-management/managing-flags",permalink:"/documentation/flag-management/managing-flags",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Managing Feature Flags"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/documentation/installation"},next:{title:"Flag Events Log",permalink:"/documentation/flag-management/event-log"}},c={},g=[{value:"Creating a Feature Flag",id:"creating-a-feature-flag",level:3},{value:"Feature Flag Details",id:"feature-flag-details",level:3},{value:"Custom User Assignments",id:"custom-user-assignments",level:3}],f={toc:g};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Waypost contains several core features to help you manage your feature flags, view changes made to flags, and set up and run experiments."),(0,o.kt)("h1",{id:"managing-feature-flags"},"Managing Feature Flags"),(0,o.kt)("p",null,"On the Flags Dashboard (the home page), you will see a list of all your feature flags and their status (on or off) denoted by a turquoise toggle."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Example UI",src:a(5476).Z,width:"1434",height:"849"})),(0,o.kt)("h3",{id:"creating-a-feature-flag"},"Creating a Feature Flag"),(0,o.kt)("p",null,"From the Flags Dashboard, you can create a new feature flag by clicking on the \u201cCreate New\u201d button on the top right. A modal will pop up asking you to fill in some fields. Make sure the name is unique, since that will be used as the identifier in the SDK. The \u201cActive?\u201d checkbox refers to whether you want the feature initially turned on or off."),(0,o.kt)("p",null,"\u201cPercent of Users Exposed\u201d refers to what percent of users you want the feature to be \u201con\u201d for, which is useful if you are using the flag as a ",(0,o.kt)("em",{parentName:"p"},"rollout")," or as an experiment. For this to work, you must attach a user ID to each user of your application that will be hashed to determine whether they receive the flag in the \u201con\u201d state or the \u201coff\u201d state. If you\u2019re running A/B tests, you must also send this user ID to the Events DB in order to be able to run analysis on the data. If you already have a user identification system in place, you can use that; if not, you\u2019ll have to create one to use Waypost."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Creating a Flag Demo",src:a(4117).Z,width:"1482",height:"850"})),(0,o.kt)("h3",{id:"feature-flag-details"},"Feature Flag Details"),(0,o.kt)("p",null,"You can view the details and experiments for a specific feature flag by clicking on the name of the feature flag from the Flags Dashboard page. This will take you to the flag\u2019s page, where you can edit the flag (name, description, percentage, and custom assignments), as well as manage experiments for that feature. For more information on creating and managing experiments, please see the \u201cExperimentation Guide\u201d section of the docs."),(0,o.kt)("h3",{id:"custom-user-assignments"},"Custom User Assignments"),(0,o.kt)("p",null,"When editing a flag, Waypost-UI allows you to specify any specific users you want bucketed into a treatment. This is especially useful for cases when a developer wants to test the feature on their end, but doesn\u2019t want anyone else to see it. To achieve that, the developer can simply set the rollout percentage to 0%, and put their user ID in the custom assignments as \u201cAlways On\u201d, so that they can ensure that they can test the feature on their device."),(0,o.kt)("p",null,"You can view custom assignments by clicking \u201cShow custom assignments\u201d from a flag\u2019s details page. Custom assignments can be changed at any time by clicking on the \u201cEdit Flag\u201d button and deleting or adding a custom assignment. Note: A user ID cannot have more than one custom assignment per flag."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Adding custom user assignment",src:a(6779).Z,width:"1482",height:"850"})))}m.isMDXComponent=!0},4117:function(e,t,a){t.Z=a.p+"assets/images/create-flag-c4bf983f704a6e4ab0ab2c9bd59d46a3.gif"},6779:function(e,t,a){t.Z=a.p+"assets/images/custom-assignment-74595f29f3caaa32ca9713359e8e00e4.gif"},5476:function(e,t,a){t.Z=a.p+"assets/images/dashboard-79d4a98ecaf2c815f5d684d9556ed3db.jpg"}}]);