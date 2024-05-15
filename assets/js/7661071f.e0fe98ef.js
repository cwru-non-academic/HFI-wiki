"use strict";(self.webpackChunkneuroreality_edu_github_io=self.webpackChunkneuroreality_edu_github_io||[]).push([[737],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>b});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,b=p["".concat(i,".").concat(m)]||p[m]||g[m]||a;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(8168),o=(r(6540),r(5680));const a={slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},l=void 0,u={permalink:"/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.405,truncated:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],nextItem:{title:"MDX Blog Post",permalink:"/blog/mdx-blog-post"}},i={authorsImageUrls:[void 0,void 0]},s=[],c={toc:s},p="wrapper";function g(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,o.yg)("p",null,"Simply add Markdown files (or folders) to the ",(0,o.yg)("inlineCode",{parentName:"p"},"blog")," directory."),(0,o.yg)("p",null,"Regular blog authors can be added to ",(0,o.yg)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,o.yg)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,o.yg)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Docusaurus Plushie",src:r(9864).A})),(0,o.yg)("p",null,"The blog supports tags as well!"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,o.yg)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}g.isMDXComponent=!0},9864:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);