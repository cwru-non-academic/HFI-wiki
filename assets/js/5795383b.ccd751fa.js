"use strict";(self.webpackChunkneuroreality_edu=self.webpackChunkneuroreality_edu||[]).push([[379],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6982:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(6540);const i=function(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},1931:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),i=n(8555);const r=function(){const e=(0,a.useContext)(i.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=n(53);const l="tabItem_vU9c",s="tabItemActive_cw6a";const c=function(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:u,className:d}=e,p=a.Children.toArray(e.children),m=c??p.map((e=>({value:e.props.value,label:e.props.label}))),g=i??p.find((e=>e.props.default))?.props.value,{tabGroupChoices:y,setTabGroupChoices:h}=r(),[b,f]=(0,a.useState)(g),v=[];if(null!=u){const e=y[u];null!=e&&e!==b&&m.some((t=>t.value===e))&&f(e)}const w=e=>{const t=e.currentTarget,n=v.indexOf(t),a=m[n].value;f(a),null!=u&&(h(u,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return t>=0&&i<=o&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},N=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=v.indexOf(e.target)+1;t=v[n]||v[0];break}case"ArrowLeft":{const n=v.indexOf(e.target)-1;t=v[n]||v[v.length-1];break}}t?.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},d)},m.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.A)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:e=>v.push(e),onKeyDown:N,onFocus:w,onClick:w},n??t)}))),t?(0,a.cloneElement)(p.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}},8555:(e,t,n)=>{n.d(t,{A:()=>a});const a=(0,n(6540).createContext)(void 0)},3747:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(8168),i=(n(6540),n(5680)),r=n(1931),o=n(6982);const l={sidebar_position:2},s=void 0,c={unversionedId:"Robotic-Wikis/Gimbal/Setting Up",id:"Robotic-Wikis/Gimbal/Setting Up",isDocsHomePage:!1,title:"Setting Up",description:"Requirements",source:"@site/docs/Robotic-Wikis/Gimbal/Setting Up.md",sourceDirName:"Robotic-Wikis/Gimbal",slug:"/Robotic-Wikis/Gimbal/Setting Up",permalink:"/HFI-wiki/docs/Robotic-Wikis/Gimbal/Setting Up",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Robotic-Wikis/Gimbal/Setting Up.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/HFI-wiki/docs/Robotic-Wikis/Gimbal/Introduction"},next:{title:"Introduction",permalink:"/HFI-wiki/docs/Robotic-Wikis/Zed Mini/Introduction"}},u=[{value:"Requirements",id:"requirements",children:[{value:"1. ROS2 (Humble)",id:"1-ros2-humble",children:[]},{value:"2. Clone the repo",id:"2-clone-the-repo",children:[]},{value:"3. Python Dependencies",id:"3-python-dependencies",children:[]}]},{value:"Dynamic Reconfiguration",id:"dynamic-reconfiguration",children:[]}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"requirements"},"Requirements"),(0,i.yg)("h3",{id:"1-ros2-humble"},"1. ROS2 (Humble)"),(0,i.yg)("p",null,"Please follow the steps listed on the official ROS2 ",(0,i.yg)("a",{parentName:"p",href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html"},"documentation")," for installing ROS2 on Ubuntu. "),(0,i.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"The project has been tested using ROS2 Humble. However, other versions of ROS2 such as Foxy should also work. "))),(0,i.yg)("br",null),(0,i.yg)("h3",{id:"2-clone-the-repo"},"2. Clone the repo"),(0,i.yg)("p",null,"Let git do the hard work for you"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:cwru-non-academic/HFI_Robotics_Gimbal.git\n")),(0,i.yg)("br",null),(0,i.yg)("h3",{id:"3-python-dependencies"},"3. Python Dependencies"),(0,i.yg)("p",null,"Time to install the python dependencies using pip"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cd HFI_Robotics_Gimbal\npip3 install -r requirements.txt\n")),(0,i.yg)("br",null),(0,i.yg)("h2",{id:"dynamic-reconfiguration"},"Dynamic Reconfiguration"),(0,i.yg)("p",null,"Since the device may join any COM/USB port, it is best to let the Operating System dynamically handle it. "),(0,i.yg)(r.A,{groupId:"dynamic-reconfig-dynamixel",mdxType:"Tabs"},(0,i.yg)(o.A,{value:"linux",label:"Ubuntu",mdxType:"TabItem"},(0,i.yg)("h4",{id:"dynamixel-access-rules"},"Dynamixel Access Rules"),(0,i.yg)("p",null,"We want the user to be able to read and write on this COM/USB port but not have any outside user who is not running the driver to be able to access or modify its values. To achieve that type the following command in the terminal"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/udev/rules.d/89-dynamixel.rules \n")),(0,i.yg)("p",null,"If the following lines do not exist within the file, add them to it."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'SUBSYSTEM=="tty"\nATTRS{idVendor}=="0403"\nATTRS{idProduct}=="6014"\nGROUP==dialout\nMODE=="0660"\n')),(0,i.yg)("br",null),(0,i.yg)("h4",{id:"usb-naming-rules"},"USB Naming Rules"),(0,i.yg)("p",null,"As mentioned previously, to give our Dynamixel motors are static name, we shall create a rule in Linux to achieve that."),(0,i.yg)("p",null,"Type the following command in the terminal"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/udev/rules.d/99-USB-NAMES.rules \n")),(0,i.yg)("p",null,"If the following lines do not exist within the file, append them to it."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'KERNEL=="ttyUSB[0-9]*",MODE="0666",GROUP="dialout"\nKERNEL=="ttyACM[0-9]*",MODE="0666",GROUP="dialout"\nKERNEL=="ttyUSB[0-9]", ATTRS{idProduct}=="6014", ATTRS{idVendor}=="0403", SYMLINK+="u2d2"\n')),(0,i.yg)("br",null),(0,i.yg)("h4",{id:"usb-latency-rules"},"USB Latency Rules"),(0,i.yg)("p",null,"Linux is not a real-time Operating System and by default, it has a latency of 16ms for reading from serial. We can reconfigure Linux to reduce the latency to 1ms. Simply type the following command"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/udev/rules.d/49-USB-LATENCY.rules\n")),(0,i.yg)("p",null,"If the following lines do not exist, append within the file"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'ACTION=="add", SUBSYSTEM=="usb-serial", DRIVER=="ftdi_sio",\nATTR{latency_timer}="1"\n')),(0,i.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"You can type the following command in a new terminal to see if the latency timer was updated."),(0,i.yg)("pre",{parentName:"div"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cat /sys/bus/usb-serial/devices/ttyUSB0/latency_timer\n")),(0,i.yg)("p",{parentName:"div"},"The output should be ",(0,i.yg)("inlineCode",{parentName:"p"},"1"))))),(0,i.yg)(o.A,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Migrate to Linux")))),(0,i.yg)("br",null),(0,i.yg)("h5",{id:"authors-and-contributors"},"Authors and Contributors"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.linkedin.com/in/evan-harber"},"Evan Harber")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.linkedin.com/in/cole-ten"},"Cole Ten")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.linkedin.com/in/shengxin-jia-0a121389"},"Shengxin Jia")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/s-m-asjad.png"},"Syed Mohammad Asjad")," "),(0,i.yg)("br",null),(0,i.yg)("h5",{id:"issues"},"Issues?"),(0,i.yg)("p",null,"Please report issues to ",(0,i.yg)("em",{parentName:"p"},(0,i.yg)("a",{parentName:"em",href:"mailto:hfisoftware@case.edu"},"hfisoftware@case.edu"))))}m.isMDXComponent=!0},53:(e,t,n)=>{function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}n.d(t,{A:()=>i});const i=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}}}]);