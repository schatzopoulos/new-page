"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[5058],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"C Cheatsheet"},l=void 0,u={unversionedId:"c-cheatsheet",id:"c-cheatsheet",title:"C Cheatsheet",description:"Published on December 23, 2020",source:"@site/docs/c-cheatsheet.md",sourceDirName:".",slug:"/c-cheatsheet",permalink:"/docs/c-cheatsheet",draft:!1,tags:[],version:"current",frontMatter:{title:"C Cheatsheet"},sidebar:"docs",previous:{title:"Dependency management",permalink:"/docs/ruby-dependency-management"},next:{title:"JS Cheatsheet",permalink:"/docs/js-cheatsheet"}},p={},s=[{value:"Print out arguments",id:"print-out-arguments",level:2},{value:"Resources",id:"resources",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Published on December 23, 2020"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This document was migrated from ",(0,i.kt)("a",{parentName:"em",href:"https://digipie.github.io/digidocs/c/arguments/"},"DigiDocs"))),(0,i.kt)("h2",{id:"print-out-arguments"},"Print out arguments"),(0,i.kt)("p",null,"The example program below prints out all command line arguments passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"print-arguments.c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nint main(int argc, char **argv) {\n    for (int i = 0; i < argc; i++) {\n        printf("%s\\n", argv[i]);\n    }\n}\n')),(0,i.kt)("p",null,"Key details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"argc")," - the number of arguments passed into the program"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"argv")," - the array of character pointers (strings) containing all arguments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"argv[0]")," - the first argument which is also the name of the program")),(0,i.kt)("p",null,"To use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter the above code into a file (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"print-arguments.c"),")."),(0,i.kt)("li",{parentName:"ul"},"Compile the code with ",(0,i.kt)("inlineCode",{parentName:"li"},"gcc print-arguments.c -o print-arguments"),"."),(0,i.kt)("li",{parentName:"ul"},"Run the executable with ",(0,i.kt)("inlineCode",{parentName:"li"},"./print-arguments test")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"./print-arguments $USER"),".")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://digipie.github.io/digidocs/c/arguments/"},"Original copy of this document at DigiDocs"))))}d.isMDXComponent=!0}}]);