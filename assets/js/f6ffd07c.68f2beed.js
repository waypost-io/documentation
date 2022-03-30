"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[164],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9746:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},u="Data Source",l={unversionedId:"experimentation/data_source",id:"experimentation/data_source",title:"Data Source",description:"If you would like to run experiments using Waypost, you will need to allow us access to your PostgreSQL* database in which your user event data is stored. Waypost\u2019s statistics service will aggregate and analyze this data, running statistical tests on it to deliver you meaningful results.",source:"@site/docs/experimentation/data_source.md",sourceDirName:"experimentation",slug:"/experimentation/data_source",permalink:"/documentation/experimentation/data_source",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Understanding the Results",permalink:"/documentation/experimentation/understanding_results"}},c={},p=[{value:"Logging Events",id:"logging-events",level:3},{value:"Data Requirements",id:"data-requirements",level:3},{value:"Set Up Connection",id:"set-up-connection",level:3}],d={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-source"},"Data Source"),(0,a.kt)("p",null,"If you would like to run experiments using Waypost, you will need to allow us access to your PostgreSQL* database in which your user event data is stored. Waypost\u2019s statistics service will aggregate and analyze this data, running statistical tests on it to deliver you meaningful results."),(0,a.kt)("p",null,"*",(0,a.kt)("em",{parentName:"p"},"Waypost currently only supports PostgreSQL, although we plan to support other types of databases in the future.")),(0,a.kt)("h3",{id:"logging-events"},"Logging Events"),(0,a.kt)("p",null,"To ensure maximum flexibility, users of Waypost manage their own logging of events. This means if you already have logging set up for user events you want to measure, then there is very little you need to do. See below for an explanation of the information needed to analyze your logged data."),(0,a.kt)("p",null,"For experiments, you will need to create a table that keeps track of which users were assigned into which treatment for the experiments they were exposed to, and at what time. When you create an experiment via the Waypost-UI, the experiment\u2019s ID is displayed on the page. Use this ID for the ",(0,a.kt)("inlineCode",{parentName:"p"},"experiment_id")," when logging when users are exposed to the experiment."),(0,a.kt)("h3",{id:"data-requirements"},"Data Requirements"),(0,a.kt)("p",null,"In order for Waypost to analyze your data, the data must be available in a standardized format. You are free to organize your tables however you wish, as long as you can write a SQL query that formats it into the structure Waypost requires. Queries needed from you are for:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Users assigned into experiments - what time and which treatment. This only needs to be filled out once, when connecting Waypost to the data source, your Events DB. This query should return a table containing the following columns:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"experiment_id")," INTEGER"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user_id")," VARCHAR or INTEGER"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp")," TIMESTAMP"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"treatment")," BOOLEAN"))),(0,a.kt)("li",{parentName:"ol"},"Events for metrics you want to measure, such as impressions, clicks, conversions, time on site, etc. One query is needed per distinct metric you choose to add (configurable on the ",(0,a.kt)("em",{parentName:"li"},"Metrics")," page on the Waypost UI). The query for metrics should return a table containing one row per event. Required columns in the query are:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user_id")," VARCHAR or INTEGER"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp")," TIMESTAMP"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," INTEGER or FLOAT (only necessary for non-binomial type metrics)")))),(0,a.kt)("h3",{id:"set-up-connection"},"Set Up Connection"),(0,a.kt)("p",null,"Once you have queries that can return data in the requested format, you can connect Waypost to your Events DB."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a username and password for Waypost to access your database."),(0,a.kt)("li",{parentName:"ol"},"Go to the Waypost-UI and the button on the top-right corner which should say \u201cNot Connected\u201d if you haven\u2019t established a connection to the Events DB. Fill out the form with the new account info for Waypost, with the query Waypost\u2019s back-end can use to retrieve user assignments in experiments."),(0,a.kt)("li",{parentName:"ol"},"Upon submission,  the credentials will be tested to verify the connection and query return the required fields. You will receive an alert if any field is not correct.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Connecting to DB",src:n(1463).Z,width:"1494",height:"854"})))}m.isMDXComponent=!0},1463:function(e,t,n){t.Z=n.p+"assets/images/db-connection-ab4bccfa5667bb6c96d8ce763e960531.gif"}}]);