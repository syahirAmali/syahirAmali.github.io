(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(8104)}])},8104:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return y}});var i=n(5893),t=n(2846),s=n(9703),a=n(7294),o=n(4697);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function c(e,r){if(null==e)return{};var n,i,t={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],r.indexOf(n)>=0||(t[n]=e[n]);return t}var d=["htmlWidth","htmlHeight","alt"],h=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],f=a.forwardRef((function(e,r){var n=e.htmlWidth,i=e.htmlHeight,t=e.alt,s=c(e,d);return a.createElement("img",l({width:n,height:i,ref:r,alt:t},s))})),u=(0,t.Gp)((function(e,r){var n=e.fallbackSrc,i=e.fallback,d=e.src,u=e.srcSet,m=e.align,g=e.fit,x=e.loading,p=e.ignoreFallback,j=e.crossOrigin,b=e.fallbackStrategy,y=void 0===b?"beforeLoadOrError":b,v=e.referrerPolicy,C=c(e,h),k=null!=x||p||!(void 0!==n||void 0!==i),w=function(e){var r=e.loading,n=e.src,i=e.srcSet,t=e.onLoad,s=e.onError,l=e.crossOrigin,c=e.sizes,d=e.ignoreFallback,h=(0,a.useState)("pending"),f=h[0],u=h[1];(0,a.useEffect)((function(){u(n?"loading":"pending")}),[n]);var m=(0,a.useRef)(),g=(0,a.useCallback)((function(){if(n){x();var e=new Image;e.src=n,l&&(e.crossOrigin=l),i&&(e.srcset=i),c&&(e.sizes=c),r&&(e.loading=r),e.onload=function(e){x(),u("loaded"),null==t||t(e)},e.onerror=function(e){x(),u("failed"),null==s||s(e)},m.current=e}}),[n,l,i,c,t,s,r]),x=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.a)((function(){if(!d)return"loading"===f&&g(),function(){x()}}),[f,g,d]),d?"loaded":f}(l({},e,{ignoreFallback:k})),S=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(w,y),E=l({ref:r,objectFit:g,objectPosition:m},k?C:(0,s.CE)(C,["onError","onLoad"]));return S?i||a.createElement(t.m$.img,l({as:f,className:"chakra-image__placeholder",src:n},E)):a.createElement(t.m$.img,l({as:f,src:d,srcSet:u,crossOrigin:j,loading:x,referrerPolicy:v,className:"chakra-image"},E))}));s.Ts&&(u.displayName="Image");var m=n(949),g=n(8527),x=n(5193),p=n(9876),j=n(1664),b=n.n(j);function y(){var e=(0,m.If)(),r=e.colorMode,n=e.toggleColorMode;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(g.kC,{children:[(0,i.jsx)(g.kC,{justify:"left",children:(0,i.jsx)(b(),{href:"/home",passHref:!0,children:(0,i.jsx)(g.rU,{children:(0,i.jsx)(x.zx,{leftIcon:(0,i.jsx)(p.wy,{}),variant:"ghost",children:"Back home"})})})}),(0,i.jsx)(g.LZ,{}),(0,i.jsx)(g.kC,{justify:"right",children:(0,i.jsxs)(x.zx,{leftIcon:(0,i.jsx)(p.kL,{}),onClick:n,variant:"ghost",children:["Toggle ","light"===r?"Dark":"Light"]})})]}),(0,i.jsx)(g.kC,{justifyContent:"center",children:(0,i.jsx)(g.kC,{width:"25vw",children:(0,i.jsxs)(g.gC,{spacing:"30px",children:[(0,i.jsx)(g.xv,{fontSize:"xl",children:"Some personal projects in progress for 2022."}),(0,i.jsx)(g.xv,{fontSize:"md",children:"And things Syahir is working on for learning or for fun."}),(0,i.jsx)(g.xv,{fontSize:"sm",as:"em",children:"*The list may change anytime or not be the most up to date*"}),(0,i.jsx)(g.QI,{size:"md",children:(0,i.jsxs)(g.gC,{spacing:"30px",children:[(0,i.jsx)(g.HC,{size:"md",children:(0,i.jsxs)(g.gC,{spacing:"10px",children:[(0,i.jsx)(g.xv,{fontSize:"lg",children:"Fully On-Chain Idle Game (ERC721-based)"}),(0,i.jsx)(u,{src:"/v1Infra.jpg"}),(0,i.jsxs)(g.xv,{children:["- A fully on-chain based nft idle game inspired by ",(0,i.jsx)("a",{href:"https://melvoridle.com/",children:(0,i.jsx)("u",{children:"melvor idle"})}),", this projects aim to replicate the basic functionality of the gameplay through the use of solidity smart contracts, libraries, and the usage of on-chain SVGs."]})]})}),(0,i.jsx)(g.HC,{size:"md",children:(0,i.jsxs)(g.gC,{spacing:"10px",children:[(0,i.jsx)(g.xv,{fontSize:"lg",children:"Proof Of Competency"}),(0,i.jsx)(g.xv,{children:"- A way for developers to validate and proof competency on-chain, companies and senior developers will be able to release challenges and certifications through on-chain contracts that can be attempted by other developers to proof their competency. Syahir believes that this can be used to actually show understanding and skills in more specific areas, which will help more when it comes to gauging the skill level and ability to solve problems from a developer."})]})}),(0,i.jsx)(g.HC,{size:"md",children:(0,i.jsxs)(g.gC,{spacing:"10px",children:[(0,i.jsx)(g.xv,{fontSize:"lg",children:"Back to basics - Solidity ed."}),(0,i.jsxs)(g.xv,{children:["- Inspired by the works of ",(0,i.jsx)("a",{href:"https://solidity-by-example.org/",children:(0,i.jsx)("u",{children:"Solidity by Example"})}),", a resource of basic solidity examples and also some deeper analysis of concepts. Syahir intends to expand upon this by creating a version that explains the introductory concepts in a friendlier manner to newer software developers. ",(0,i.jsx)("a",{href:"https://github.com/syahirAmali/back-to-basics-solidity-ed",children:(0,i.jsx)("u",{children:"Here"})}),", you may find his progress in adding content and changing them to fit his requirements."]})]})}),(0,i.jsx)(g.HC,{size:"md",children:(0,i.jsxs)(g.gC,{spacing:"10px",children:[(0,i.jsx)(g.xv,{fontSize:"lg",children:"CTF Collections"}),(0,i.jsx)(g.xv,{children:"- A Collection of CTF problems attempted and solved, is comprised of many sources which includes and not limited to:-"}),(0,i.jsxs)(g.xv,{children:[(0,i.jsx)("a",{href:"https://ethernaut.openzeppelin.com/",children:(0,i.jsx)("u",{children:"Ethernaut"})}),", by OpenZeppelin. A wargame inspired learning tool, to demonstrate from common to and more rare vulnerabilities."]}),(0,i.jsxs)(g.xv,{children:[(0,i.jsx)("a",{href:"https://capturetheether.com/",children:(0,i.jsx)("u",{children:"Capture the Ether"})}),", by @smarx. A traditional CTF event to learn about security."]}),(0,i.jsxs)(g.xv,{children:[(0,i.jsx)("a",{href:"https://www.damnvulnerabledefi.xyz/",children:(0,i.jsx)("u",{children:"Damn Vulnerable Defi"})}),", by @tinchoabbate. A similar wargame like ethernaut, but focuses more on offensive security and is useful for learning to become a bug hunter or security auditor."]}),(0,i.jsxs)(g.xv,{children:[(0,i.jsx)("a",{href:"https://blockchain-ctf.securityinnovation.com/#/",children:(0,i.jsx)("u",{children:"Security Innovation Blockchain CTF"})}),", by SecurityInnovation. A CTf platform for dapps and smart contract vulnerabilities."]}),(0,i.jsxs)(g.xv,{children:[(0,i.jsx)("a",{href:"https://github.com/nccgroup/GOATCasino",children:(0,i.jsx)("u",{children:"Goat Casino"})}),", by Goat Casino. Is an intentional release of vulnerable truffle smart contract deployment for aimed to allow hacking."]}),(0,i.jsxs)(g.xv,{children:[(0,i.jsx)("a",{href:"https://github.com/paradigm-operations/paradigm-ctf-2021",children:(0,i.jsx)("u",{children:"Paradigm CTF 2021"})}),", by Paradigm. Is an Eth focused security competition by paradigm."]}),(0,i.jsxs)(g.xv,{children:["- You may also find Syahir's attempt and documentation of these CTFs on his Git, ",(0,i.jsx)("a",{href:"https://github.com/syahirAmali/",children:(0,i.jsx)("u",{children:"here"})}),"."]})]})})]})})]})})}),(0,i.jsx)("footer",{})]})}}},function(e){e.O(0,[452,774,888,179],(function(){return r=9182,e(e.s=r);var r}));var r=e.O();_N_E=r}]);