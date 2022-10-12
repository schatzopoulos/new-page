"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[6651],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return g}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(a),g=n,d=h["".concat(p,".").concat(g)]||h[g]||c[g]||r;return a?o.createElement(d,s(s({ref:t},l),{},{components:a})):o.createElement(d,s({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9812:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),s=["components"],i={slug:"docusaurus-posthog",title:"Integrating PostHog product analytics with Docusaurus v2 on GitHub Pages",author:"Evan Tay",author_url:"https://github.com/DigiPie",author_title:"Software Engineer at Padlet",author_image_url:"https://avatars2.githubusercontent.com/u/13582874",tags:["docusaurus","posthog","analytics"]},p=void 0,u={permalink:"/blog/docusaurus-posthog",editUrl:"https://github.com/DigiPie/kaya-folio/tree/main/website/blog/2021-06-26-docusaurus-posthog-analytics.md",source:"@site/blog/2021-06-26-docusaurus-posthog-analytics.md",title:"Integrating PostHog product analytics with Docusaurus v2 on GitHub Pages",description:"I integrated PostHog analytics into this website today. I decided to do so after reading Gergely Orosz's Stats page on his blog The Pragmatic Engineer. He had installed Plausible analytics and made his analytics dashboard public. I thought that was cool and wanted to do the same.",date:"2021-06-26T00:00:00.000Z",formattedDate:"June 26, 2021",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"},{label:"posthog",permalink:"/blog/tags/posthog"},{label:"analytics",permalink:"/blog/tags/analytics"}],readingTime:3.15,hasTruncateMarker:!0,authors:[{name:"Evan Tay",title:"Software Engineer at Padlet",url:"https://github.com/DigiPie",imageURL:"https://avatars2.githubusercontent.com/u/13582874"}],frontMatter:{slug:"docusaurus-posthog",title:"Integrating PostHog product analytics with Docusaurus v2 on GitHub Pages",author:"Evan Tay",author_url:"https://github.com/DigiPie",author_title:"Software Engineer at Padlet",author_image_url:"https://avatars2.githubusercontent.com/u/13582874",tags:["docusaurus","posthog","analytics"]},prevItem:{title:"Why every Software Engineer should read Designing Data-Intensive Applications",permalink:"/blog/why-you-should-read-ddia"},nextItem:{title:"Top 3 reasons why you should start investing with StashAway today!",permalink:"/blog/stashaway"}},l={authorsImageUrls:[void 0]},c=[{value:"Installation Guide",id:"installation-guide",level:2}],h={toc:c};function g(e){var t=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I integrated ",(0,r.kt)("a",{parentName:"p",href:"https://posthog.com/"},"PostHog")," analytics into this website today. I decided to do so after reading Gergely Orosz's ",(0,r.kt)("a",{parentName:"p",href:"https://blog.pragmaticengineer.com/stats/"},"Stats")," page on his blog ",(0,r.kt)("a",{parentName:"p",href:"https://blog.pragmaticengineer.com/"},"The Pragmatic Engineer"),". He had installed ",(0,r.kt)("a",{parentName:"p",href:"https://plausible.io/"},"Plausible")," analytics and made his ",(0,r.kt)("a",{parentName:"p",href:"https://plausible.io/blog.pragmaticengineer.com?period=6mo"},"analytics dashboard")," public. I thought that was cool and wanted to do the same."),(0,r.kt)("p",null,"I managed to find a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infracost/docusaurus-plugin-plausible"},"Plausible plugin")," for ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus v2"),", which is what this website runs on. But I decided to use ",(0,r.kt)("a",{parentName:"p",href:"https://posthog.com/"},"PostHog")," instead. It also has a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PostHog/posthog-docusaurus"},"Docusaurus plugin")," and a public dashboard feature. I decided so because it is free and Plausible isn't."),(0,r.kt)("p",null,"Plausible only offers a free 30-day trial, and would cost at least $6 monthly subsequently. In comparison, PostHog has a free non-expiring tier which provides up to 1 million events every month. It also requires no credit card and is completely self-serve. There was no need to request and wait for a free license. It took me less than 10 minutes from signing up to getting the analytics running."),(0,r.kt)("admonition",{title:"PostHog is open-source",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are looking for an open-source solution you can self-host, PostHog may be it.")),(0,r.kt)("p",null,"Despite what I have shared so far, I would still choose Plausible over PostHog if the former was free too. That's because the Plausible's dashboard interface looks much better and has more visualization options. For comparison, you can view the ",(0,r.kt)("a",{parentName:"p",href:"https://app.posthog.com/shared_dashboard/OpHsSFokK2VvhHFF-5Jn0rgVzqaMRg"},"PostHog dashboard")," for this site, and the ",(0,r.kt)("a",{parentName:"p",href:"https://plausible.io/blog.pragmaticengineer.com?period=6mo"},"Plausible dashboard")," for ",(0,r.kt)("a",{parentName:"p",href:"https://blog.pragmaticengineer.com/"},"The Pragmatic Engineer"),"."),(0,r.kt)("p",null,"If you want to integrate PostHog with your Docusaurus site, you can follow the guide below. The later steps are for deployment to GitHub Pages via GitHub Actions. But you can easily modify them for other platforms and deployment workflows. I will give some tips for doing that."),(0,r.kt)("h2",{id:"installation-guide"},"Installation Guide"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign up for ",(0,r.kt)("strong",{parentName:"p"},"PostHog Cloud")," on ",(0,r.kt)("a",{parentName:"p",href:"https://posthog.com/"},"posthog.com"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get your ",(0,r.kt)("strong",{parentName:"p"},"Project API Key")," from ",(0,r.kt)("a",{parentName:"p",href:"https://app.posthog.com/project/settings"},"Project Settings"),".\n",(0,r.kt)("img",{alt:"PostHog Project API Key",src:a(3867).Z,width:"2684",height:"350"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"posthog-docusaurus")," package by running this command at your Docusaurus project root:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"yarn add posthog-docusaurus\n")),(0,r.kt)("p",{parentName:"li"},"or"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"npm install --save posthog-docusaurus\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add this code block to ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  plugins: ["posthog-docusaurus"],\n  themeConfig: {\n    posthog: {\n      apiKey: process.env.POSTHOG_API_KEY || "DEV",\n      appUrl: "https://app.posthog.com", // optional\n      enableInDevelopment: false, // optional\n    },\n  },\n};\n')),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The example in the official PostHog guide for ",(0,r.kt)("a",{parentName:"p",href:"https://posthog.com/docs/libraries/docusaurus"},"Docusaurus v2 Integration")," inserts the API key directly into the code (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'apiKey: "phc_fakekeyhHBZOuIq"'),"). It is a bad idea to do so, especially if you host your code publicly (i.e. on a GitHub public repo). It is good practice to keep API keys secret and outside of application code instead. We will be using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/encrypted-secrets"},"GitHub Encrypted Secrets")," to achieve that."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("strong",{parentName:"p"},"repository secret")," to the GitHub repo hosting your site's code.\n",(0,r.kt)("img",{alt:"GitHub Action Secrets",src:a(9489).Z,width:"2566",height:"1442"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Secrets")," > ",(0,r.kt)("strong",{parentName:"p"},"New repository secret")," > ",(0,r.kt)("strong",{parentName:"p"},"Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"POSTHOG_API_KEY")),(0,r.kt)("admonition",{parentName:"li",title:"If you are using another deployment platform",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There should be a settings panel which allows you to specify environment variables or secrets to insert into your application deployments securely. Put your ",(0,r.kt)("inlineCode",{parentName:"p"},"POSTHOG_API_KEY")," there. Skip the next step."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the GitHub Action workflow file responsible for deploying your site, and add the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"POSTHOG_API_KEY")," to the Docusaurus build step:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"env:\n  POSTHOG_API_KEY: ${{ secrets.POSTHOG_API_KEY }}\n")),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"# Install and build Docusaurus website\n- name: Build Docusaurus website\n  run: |\n    cd website\n    npm install \n    npm run build\n  env:\n    POSTHOG_API_KEY: ${{ secrets.POSTHOG_API_KEY }}\n")))),(0,r.kt)("p",null,"That's it! Once you deploy your new changes, the plugin will automatically start tracking pageviews, clicks and more. For more customisation options, you can check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PostHog/posthog-docusaurus"},"posthog-docusaurus")," plugin repo and the PostHog guide for ",(0,r.kt)("a",{parentName:"p",href:"https://posthog.com/docs/libraries/docusaurus"},"Docusaurus v2 Integration"),". You can also check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DigiPie/kaya-folio/commit/fd6b029dbc0be34909cd539f2d33bac5de8209bc"},"commit")," I made to integrate PostHog into this website."),(0,r.kt)("p",null,"If you want to deploy Docusaurus to GitHub Pages, check out my post on ",(0,r.kt)("a",{parentName:"p",href:"/blog/docusaurus-gh-action"},"GitHub Action for Docusaurus"),"."))}g.isMDXComponent=!0},9489:function(e,t,a){t.Z=a.p+"assets/images/posthog_actions_secrets-7a037b4178c7a64a3976caf1d1a95aea.png"},3867:function(e,t,a){t.Z=a.p+"assets/images/posthog_api_key-fc6aa3dcbe700acaa44ac9d74e270d69.png"}}]);