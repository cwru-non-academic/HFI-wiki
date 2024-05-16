"use strict";(self.webpackChunkneuroreality_edu=self.webpackChunkneuroreality_edu||[]).push([[724],{7034:(e,o,n)=>{n.r(o),n.d(o,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var s=n(8168),a=(n(6540),n(5680));const i={sidebar_position:1},r="Manage Docs Versions",t={unversionedId:"tutorial-extras/manage-docs-versions",id:"tutorial-extras/manage-docs-versions",isDocsHomePage:!1,title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/docs/tutorial-extras/manage-docs-versions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"},next:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"}},d=[{value:"Create a docs version",id:"create-a-docs-version",children:[]},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",children:[]},{value:"Update an existing version",id:"update-an-existing-version",children:[]}],l={toc:d},u="wrapper";function c(e){let{components:o,...i}=e;return(0,a.yg)(u,(0,s.A)({},l,i,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,a.yg)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,a.yg)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,a.yg)("p",null,"Release a version 1.0 of your project:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,a.yg)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,a.yg)("p",null,"Your docs now have 2 versions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"1.0")," at ",(0,a.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"current")," at ",(0,a.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,a.yg)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,a.yg)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,a.yg)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,a.yg)("p",null,"Modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,a.yg)("p",null,"The docs version dropdown appears in your navbar:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Docs Version Dropdown",src:n(141).A})),(0,a.yg)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,a.yg)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,a.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,a.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}c.isMDXComponent=!0},141:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);