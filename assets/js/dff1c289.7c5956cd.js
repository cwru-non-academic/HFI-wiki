"use strict";(self.webpackChunkneuroreality_edu_github_io=self.webpackChunkneuroreality_edu_github_io||[]).push([[724],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>y});var o=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=t,y=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return r?o.createElement(y,i(i({ref:n},d),{},{components:r})):o.createElement(y,i({ref:n},d))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:t,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7034:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(8168),t=(r(6540),r(5680));const a={sidebar_position:1},i="Manage Docs Versions",s={unversionedId:"tutorial-extras/manage-docs-versions",id:"tutorial-extras/manage-docs-versions",isDocsHomePage:!1,title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/docs/tutorial-extras/manage-docs-versions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"},next:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"}},l=[{value:"Create a docs version",id:"create-a-docs-version",children:[]},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",children:[]},{value:"Update an existing version",id:"update-an-existing-version",children:[]}],c={toc:l},d="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,o.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,t.yg)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,t.yg)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,t.yg)("p",null,"Release a version 1.0 of your project:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,t.yg)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,t.yg)("p",null,"Your docs now have 2 versions:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"1.0")," at ",(0,t.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"current")," at ",(0,t.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,t.yg)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,t.yg)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,t.yg)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,t.yg)("p",null,"Modify the ",(0,t.yg)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,t.yg)("p",null,"The docs version dropdown appears in your navbar:"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Docs Version Dropdown",src:r(141).A})),(0,t.yg)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,t.yg)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,t.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,t.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}u.isMDXComponent=!0},141:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);