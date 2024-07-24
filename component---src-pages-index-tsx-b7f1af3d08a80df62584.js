"use strict";(self.webpackChunki_netday_com=self.webpackChunki_netday_com||[]).push([[245],{9529:function(e,t,a){a.d(t,{D:function(){return f}});var n=a(4305),i=a(4073),o=a(4041),r=Object.defineProperty,s=(e,t,a)=>((e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a)(e,"symbol"!=typeof t?t+"":t,a),l=new Map,c=new WeakMap,d=0,p=void 0;function u(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(a=e.root,a?(c.has(a)||(d+=1,c.set(a,d.toString())),c.get(a)):"0"):e[t]}`;var a})).toString()}function b(e,t,a={},n=p){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof a.threshold?a.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:r}=function(e){const t=u(e);let a=l.get(t);if(!a){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var a;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(a=n.get(t.target))||a.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:o,elements:n},l.set(t,a)}return a}(a),s=r.get(e)||[];return r.has(e)||r.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(r.delete(e),o.unobserve(e)),0===r.size&&(o.disconnect(),l.delete(i))}}o.Component;var m=a(7437);const g=e=>{let{children:t,delay:a=0}=e;const{ref:i,inView:r}=function({threshold:e,delay:t,trackVisibility:a,rootMargin:n,root:i,triggerOnce:r,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var p;const[u,m]=o.useState(null),g=o.useRef(),[f,h]=o.useState({inView:!!l,entry:void 0});g.current=d,o.useEffect((()=>{if(s||!u)return;let o;return o=b(u,((e,t)=>{h({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&r&&o&&(o(),o=void 0)}),{root:i,rootMargin:n,threshold:e,trackVisibility:a,delay:t},c),()=>{o&&o()}}),[Array.isArray(e)?e.toString():e,u,i,n,r,s,a,c,t]);const y=null==(p=f.entry)?void 0:p.target,w=o.useRef();u||!y||r||s||w.current===y||(w.current=y,h({inView:!!l,entry:void 0}));const v=[m,f.inView,f.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}({rootMargin:"-25% 0px",threshold:0,triggerOnce:!0});return(0,m.Y)(n.A,{ref:i,sx:{width:"100%",height:"100%"}},(0,m.Y)(n.A,{sx:{width:"100%",height:"100%",transition:[`opacity 1000ms ease-out ${a}ms`,`transform 1000ms ease-out ${a}ms`].join(","),transform:`translateX(${r?0:100}px)`,opacity:r?1:0}},t))},f=e=>{let{children:t,variant:a,sub:o}=e;return(0,m.Y)(g,null,(0,m.Y)(n.A,{mb:-2},(0,m.Y)(i.A,{variant:"caption"},o)),(0,m.Y)(i.A,{variant:a,color:"primary"},t))}},1045:function(e,t,a){a.r(t),a.d(t,{Head:function(){return pe},default:function(){return de}});var n=a(4041),i=a(6193),o=a(4305),r=a(342),s=a(8239),l=a(4073),c=a(5617),d=a(1042),p=a(7938),u=a(9529),b=a(1407),m=a(7212),g=a(7502),f=a(9575),h=a(4357),y=a(5659);var w=n.createContext(),v=a(5669),Y=a(1848),x=a(8413),A=a(1609);function k(e){return(0,A.Ay)("MuiTable",e)}(0,x.A)("MuiTable",["root","stickyHeader"]);var j=a(1085);const N=["className","component","padding","size","stickyHeader"],M=(0,Y.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,f.A)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,f.A)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),S="table";var C=n.forwardRef((function(e,t){const a=(0,v.b)({props:e,name:"MuiTable"}),{className:i,component:o=S,padding:r="normal",size:s="medium",stickyHeader:l=!1}=a,c=(0,g.A)(a,N),d=(0,f.A)({},a,{component:o,padding:r,size:s,stickyHeader:l}),p=(e=>{const{classes:t,stickyHeader:a}=e,n={root:["root",a&&"stickyHeader"]};return(0,y.A)(n,k,t)})(d),u=n.useMemo((()=>({padding:r,size:s,stickyHeader:l})),[r,s,l]);return(0,j.jsx)(w.Provider,{value:u,children:(0,j.jsx)(M,(0,f.A)({as:o,role:o===S?null:"table",ref:t,className:(0,h.A)(p.root,i),ownerState:d},c))})}));var O=n.createContext();function R(e){return(0,A.Ay)("MuiTableBody",e)}(0,x.A)("MuiTableBody",["root"]);const z=["className","component"],$=(0,Y.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),D={variant:"body"},T="tbody";var _=n.forwardRef((function(e,t){const a=(0,v.b)({props:e,name:"MuiTableBody"}),{className:n,component:i=T}=a,o=(0,g.A)(a,z),r=(0,f.A)({},a,{component:i}),s=(e=>{const{classes:t}=e;return(0,y.A)({root:["root"]},R,t)})(r);return(0,j.jsx)(O.Provider,{value:D,children:(0,j.jsx)($,(0,f.A)({className:(0,h.A)(s.root,n),as:i,ref:t,role:i===T?null:"rowgroup",ownerState:r},o))})})),H=a(771),I=a(8466);function V(e){return(0,A.Ay)("MuiTableCell",e)}var F=(0,x.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);const B=["align","className","component","padding","scope","size","sortDirection","variant"],Z=(0,Y.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,I.A)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,I.A)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,I.A)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,f.A)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,H.a)((0,H.X4)(e.palette.divider,1),.88):(0,H.e$)((0,H.X4)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${F.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}))),E=n.forwardRef((function(e,t){const a=(0,v.b)({props:e,name:"MuiTableCell"}),{align:i="inherit",className:o,component:r,padding:s,scope:l,size:c,sortDirection:d,variant:p}=a,u=(0,g.A)(a,B),b=n.useContext(w),m=n.useContext(O),Y=m&&"head"===m.variant;let x;x=r||(Y?"th":"td");let A=l;"td"===x?A=void 0:!A&&Y&&(A="col");const k=p||m&&m.variant,N=(0,f.A)({},a,{align:i,component:x,padding:s||(b&&b.padding?b.padding:"normal"),size:c||(b&&b.size?b.size:"medium"),sortDirection:d,stickyHeader:"head"===k&&b&&b.stickyHeader,variant:k}),M=(e=>{const{classes:t,variant:a,align:n,padding:i,size:o,stickyHeader:r}=e,s={root:["root",a,r&&"stickyHeader","inherit"!==n&&`align${(0,I.A)(n)}`,"normal"!==i&&`padding${(0,I.A)(i)}`,`size${(0,I.A)(o)}`]};return(0,y.A)(s,V,t)})(N);let S=null;return d&&(S="asc"===d?"ascending":"descending"),(0,j.jsx)(Z,(0,f.A)({as:x,ref:t,className:(0,h.A)(M.root,o),"aria-sort":S,scope:A,ownerState:N},u))}));var J=E;function X(e){return(0,A.Ay)("MuiTableContainer",e)}(0,x.A)("MuiTableContainer",["root"]);const K=["className","component"],P=(0,Y.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var W=n.forwardRef((function(e,t){const a=(0,v.b)({props:e,name:"MuiTableContainer"}),{className:n,component:i="div"}=a,o=(0,g.A)(a,K),r=(0,f.A)({},a,{component:i}),s=(e=>{const{classes:t}=e;return(0,y.A)({root:["root"]},X,t)})(r);return(0,j.jsx)(P,(0,f.A)({ref:t,as:i,className:(0,h.A)(s.root,n),ownerState:r},o))}));function q(e){return(0,A.Ay)("MuiTableRow",e)}var L=(0,x.A)("MuiTableRow",["root","selected","hover","head","footer"]);const G=["className","component","hover","selected"],Q=(0,Y.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${L.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${L.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,H.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,H.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),U="tr",ee=n.forwardRef((function(e,t){const a=(0,v.b)({props:e,name:"MuiTableRow"}),{className:i,component:o=U,hover:r=!1,selected:s=!1}=a,l=(0,g.A)(a,G),c=n.useContext(O),d=(0,f.A)({},a,{component:o,hover:r,selected:s,head:c&&"head"===c.variant,footer:c&&"footer"===c.variant}),p=(e=>{const{classes:t,selected:a,hover:n,head:i,footer:o}=e,r={root:["root",a&&"selected",n&&"hover",i&&"head",o&&"footer"]};return(0,y.A)(r,q,t)})(d);return(0,j.jsx)(Q,(0,f.A)({as:o,ref:t,className:(0,h.A)(p.root,i),role:o===U?null:"row",ownerState:d},l))}));var te=ee,ae=a(7437);const ne=e=>{const{data:t}=e;return(0,ae.Y)(o.A,{py:4,sx:{backgroundColor:"rgb(232, 130, 122, 0.1)",borderRadius:"5dvw"}},(0,ae.Y)(o.A,{maxWidth:"md",mx:"auto"},(0,ae.Y)(W,e,(0,ae.Y)(C,null,(0,ae.Y)(_,null,t.map(((e,t)=>{let{key:a,value:n}=e;return(0,ae.Y)(te,{key:t},(0,ae.Y)(J,{sx:{width:"25%"}},(0,ae.Y)(l.A,null,a)),(0,ae.Y)(J,null,n))})))))))},ie=e=>{let{style:t,color:a}=e;return(0,ae.Y)("svg",{id:"_レイヤー_2","data-name":"レイヤー 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:t},(0,ae.Y)("defs",null,(0,ae.Y)("style",null,`\n      .cls-1, .cls-2 {\n        fill: none;\n        stroke: ${a};\n        stroke-miterlimit: 10;\n        stroke-width: 10.64px;\n      }\n\n      .cls-3 {\n        fill: ${a};\n        stroke-width: 0px;\n      }\n\n      .cls-2 {\n        stroke-linecap: round;\n      }\n      `)),(0,ae.Y)("circle",{className:"cls-1",cx:"200.5",cy:"187.81",r:"147.5",transform:"translate(-17 355.63) rotate(-80.78)"}),(0,ae.Y)("line",{className:"cls-2",x1:"274.11",y1:"95.82",x2:"128.25",y2:"267.79"}),(0,ae.Y)("g",null,(0,ae.Y)("path",{className:"cls-3",d:"M122.38,110.42c-.9-2.05-2.64-3.17-4.91-3.17s-3.99,1.12-4.89,3.15l-21.29,44.8c-.95,2.4-.3,4.44,1.96,5.55.52.17,1.04.26,1.53.26,1.56,0,2.9-.88,3.86-2.57l5.25-11.2h27.16l5.3,11.3c1.2,2.14,3.16,2.93,5.55,2.12,2.05-1.03,2.71-3.06,1.72-5.55l-21.24-44.68ZM127.84,140.11h-20.73l10.36-22.12,10.37,22.12Z"}),(0,ae.Y)("path",{className:"cls-3",d:"M197.31,108.85c-1.29-1.06-2.78-1.6-4.47-1.6-3.06,0-5.44,1.5-6.92,4.51l-13.59,37.85-13.59-37.86c-.73-2.05-2.53-4.5-6.92-4.5-1.9,0-3.43.57-4.58,1.7-1.12,1.12-1.69,2.58-1.69,4.33v43.24c0,2.69,1.52,4.3,4.05,4.3s4.05-1.61,4.05-4.3v-35.49l13.01,35.81c1.35,3.49,3.83,4.23,5.67,4.23s4.33-.73,5.68-4.26l13-35.78v35.49c0,2.69,1.52,4.3,4.05,4.3s4.05-1.61,4.05-4.3v-43.24c0-1.98-.62-3.48-1.8-4.43Z"})),(0,ae.Y)("g",null,(0,ae.Y)("path",{className:"cls-3",d:"M230.34,202.83h-16.31c-4.01,0-6.32,2.3-6.32,6.31v45.56c0,2.82,1.59,4.5,4.25,4.5s4.24-1.68,4.24-4.5v-17.5h13.1c8.36,0,14.42-1.82,17.99-5.4,3.25-3.24,4.89-7.2,4.89-11.78s-1.55-8.19-4.62-11.27c-3.94-3.93-9.73-5.92-17.23-5.92ZM240.81,226.61c-2.11,2.11-5.11,3.14-9.18,3.14h-15.43v-19.47h14.91c4.18,0,7.27.97,9.18,2.88,1.94,1.94,2.89,4.19,2.89,6.85,0,2.85-.78,5.01-2.36,6.6h-.01Z"}),(0,ae.Y)("path",{className:"cls-3",d:"M308.79,204.49c-1.33-1.1-2.91-1.66-4.67-1.66-3.21,0-5.69,1.57-7.25,4.72l-14.24,39.66-14.24-39.66c-.76-2.15-2.65-4.72-7.25-4.72-1.99,0-3.6.59-4.8,1.78-1.18,1.18-1.77,2.71-1.77,4.54v45.3c0,2.82,1.59,4.5,4.24,4.5s4.25-1.68,4.25-4.5v-37.18l13.63,37.51c1.41,3.66,4.01,4.43,5.94,4.43s4.53-.77,5.95-4.46l13.62-37.48v37.18c0,2.82,1.59,4.5,4.25,4.5s4.25-1.68,4.25-4.5v-45.3c0-2.07-.65-3.64-1.9-4.65Z"})),(0,ae.Y)("circle",{className:"cls-3",cx:"199.12",cy:"181.81",r:"14.09"}))},oe=e=>{let{style:t,color:a}=e;return(0,ae.Y)("svg",{id:"_レイヤー_2","data-name":"レイヤー 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:t},(0,ae.Y)("defs",null,(0,ae.Y)("style",null,`\n      .cls-1 {\n         fill: none;\n        stroke: ${a};\n        stroke-miterlimit: 10;\n        stroke-width: 7.89px;\n      }\n  `)),(0,ae.Y)("path",{className:"cls-1",d:"M76.62,164.3c2.57-8.32-.27-28.1,4.99-34.71,4.53-5.68,25.41-8.24,26.55-7.74,1.13.5,24.15-10.43,32.67-10.99,6.21-.4,19.63,1.07,24.37,5.49,3.52,3.27,9.15,13.3,8.07,18.23-.91,4.16-9.41,8.14-11.12,11.99-1.77,3.99-1.65,14.29.91,17.73,1.53,2.06,7.18,2.33,8.85,4.25,1.93,2.22,2.84,8.93,2.5,11.99-.62,5.56-9.21,19.97-9.21,19.97,0,0-10.15,29.15-16.2,36.95-4.64,5.99-16.34,17.55-23.49,17.98-8.04.48-22.62-10.65-28.25-16.98-6.27-7.06-12.47-26.54-14.29-36.2-.16-.86.54-2.86,0-3.5-1.33-1.55-6.12.7-7.72-.5-3.5-2.64-7.18-12.32-7.03-16.98.15-4.83,6.98-12.4,8.4-16.98Z"}),(0,ae.Y)("path",{className:"cls-1",d:"M36,304.62c0-8.21,5.51-25.05,11.12-30.46,8.81-8.49,36.94-3.81,45.38-12.73,3.72-3.93,5.91-21.74,5.91-21.74"}),(0,ae.Y)("path",{className:"cls-1",d:"M148.09,239.68s3.88,16,7.49,19.5c8.18,7.93,34.79,3.95,41.98,12.97,5.78,7.26,4.99,38.21,4.99,38.21"}),(0,ae.Y)("path",{className:"cls-1",d:"M205.73,310.36s9.78-31.54,17.36-38.21c7.87-6.93,32.94-1.87,39.15-10.6,2.62-3.69.33-16.1.33-20.79"}),(0,ae.Y)("path",{className:"cls-1",d:"M304.27,239.68c0,4.61-.79,17.93,1.87,21.49,6.71,9.03,32.23,6.55,40.5,13.85,6.81,6.01,17.36,23.74,17.36,33.34"}),(0,ae.Y)("path",{className:"cls-1",d:"M281.29,130.18c-6.54,0-9.1-.26-19.61,9.89-10.22,9.87-23.16,38.57-27.7,45.44-5.95,9-18.69,12.67-15.32,23.17,5.84,18.21,45.42,33.82,62.97,34.14,17.74.32,58.49-13.91,64.67-32.21,4.02-11.9-12.8-20.2-19.74-30.34-4.18-6.1-13.88-31.54-23.45-40.2-11.06-10-14.59-9.89-21.82-9.89Z"}))},re=e=>{let{style:t,color:a}=e;return(0,ae.Y)("svg",{id:"_レイヤー_2","data-name":"レイヤー 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:t},(0,ae.Y)("defs",null,(0,ae.Y)("style",null,`\n      .cls-1 {\n        fill: none;\n        stroke: ${a};\n        stroke-linecap: round;\n        stroke-miterlimit: 10;\n        stroke-width: 11.2px;\n      }\n      `)),(0,ae.Y)("g",null,(0,ae.Y)("path",{className:"cls-1",d:"M151.42,70c0,11.88-17.86,32.23-17.64,44.11.37,20.06,31.33,53.33,32.5,73.35.8,13.71-16.25,52.46-16.25,52.46"}),(0,ae.Y)("path",{className:"cls-1",d:"M196.31,70c0,11.88-17.86,32.23-17.64,44.11.37,20.06,31.33,53.33,32.5,73.35.8,13.71-16.25,52.46-16.25,52.46"}),(0,ae.Y)("path",{className:"cls-1",d:"M241.21,70c0,11.88-17.86,32.23-17.64,44.11.37,20.06,31.33,53.33,32.5,73.35.8,13.71-16.25,52.46-16.25,52.46"})),(0,ae.Y)("path",{className:"cls-1",d:"M282.12,170.36c44.34,14.44,73.88,40.26,73.88,69.7,0,45.25-69.76,81.93-155.82,81.93s-155.82-36.68-155.82-81.93c0-30.59,31.88-57.26,79.12-71.33"}))},se=e=>{let{style:t,color:a}=e;return(0,ae.Y)("svg",{id:"_レイヤー_2","data-name":"レイヤー 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:t},(0,ae.Y)("defs",null,(0,ae.Y)("style",null,`\n      .cls-1, .cls-2 {\n        stroke: ${a};\n        stroke-linecap: round;\n        stroke-miterlimit: 10;\n        stroke-width: 8.04px;\n      }\n\n      .cls-2 {\n        fill: none;\n      }\n      `)),(0,ae.Y)("rect",{className:"cls-2",x:"152.22",y:"47",width:"91.13",height:"39.98"}),(0,ae.Y)("rect",{className:"cls-2",x:"62.86",y:"103.49",width:"55.25",height:"67.35",rx:"27.63",ry:"27.63"}),(0,ae.Y)("path",{className:"cls-2",d:"M304.37,170.85h0c-14.16,0-25.63-11.48-25.63-25.63v-16.09c0-14.16,11.48-25.63,25.63-25.63h0c14.16,0,25.63,11.48,25.63,25.63v16.09c0,14.16-11.48,25.63-25.63,25.63Z"}),(0,ae.Y)("rect",{className:"cls-2",x:"145.38",y:"113.92",width:"104.81",height:"115.15"}),(0,ae.Y)("path",{className:"cls-2",d:"M268.08,281.65H127.49c-8.52,0-15.43-6.91-15.43-15.42h0c0-8.52,6.91-15.43,15.43-15.43h140.59c8.52,0,15.43,6.91,15.43,15.43h0c0,8.52-6.91,15.42-15.43,15.42Z"}),(0,ae.Y)("path",{className:"cls-1",d:"M235.44,344.23h-75.31c-7.2,0-13.04-5.84-13.04-13.04h0c0-7.2,5.84-13.04,13.04-13.04h75.31c7.2,0,13.04,5.84,13.04,13.04h0c0,7.2-5.84,13.04-13.04,13.04Z"}),(0,ae.Y)("line",{className:"cls-2",x1:"197.78",y1:"86.98",x2:"197.78",y2:"113.92"}),(0,ae.Y)("line",{className:"cls-2",x1:"197.78",y1:"229.07",x2:"197.78",y2:"249.21"}),(0,ae.Y)("line",{className:"cls-2",x1:"197.78",y1:"281.65",x2:"197.78",y2:"318.16"}))};var le=a(1880),ce=a(5110);var de=()=>{const[e,t]=n.useState(!1),[d,g]=n.useState(0);return n.useEffect((()=>{t(!0);const e=()=>{g(document.documentElement.clientWidth)};window.addEventListener("resize",e),e()}),[]),(0,ae.Y)(c.PE,null,(0,ae.Y)(p.K,{isLoaded:e,images:[{pc:"mainvisual-2.jpg",sp:"mainvisual-2-rp.jpg"},{pc:"mainvisual-3.jpg",sp:"mainvisual-3-rp.jpg"},{pc:"mainvisual-4.jpg",sp:"mainvisual-4-rp.jpg"}],messages:[(0,ae.Y)(n.Fragment,null,"Supporting"),(0,ae.Y)(n.Fragment,null,"your family")]}),(0,ae.Y)(o.A,{sx:{transition:"opacity 2000ms ease-out",opacity:e?1:0,overflow:"hidden"}},(0,ae.Y)(o.A,{bgcolor:"background.default"},(0,ae.Y)(o.A,{sx:{position:"relative",display:"flex",flexDirection:"column",gap:16}},(0,ae.Y)(o.A,{component:"section",id:"about",mt:16,sx:{display:"flex",justifyContent:"center"}},(0,ae.Y)(r.A,null,(0,ae.Y)(s.Ay,{container:!0,spacing:8,display:"flex",alignItems:"center",direction:{md:"row",xs:"column-reverse"}},(0,ae.Y)(s.Ay,{item:!0,md:6},(0,ae.Y)(o.A,null,(0,ae.Y)(i.S,{src:"../images/top-1.jpg",alt:"桜",style:{borderRadius:c.Vq},__imageData:a(7599)}))),(0,ae.Y)(s.Ay,{item:!0,md:6},(0,ae.Y)(o.A,null,(0,ae.Y)(u.D,{variant:"h2",sub:"About us"},"アイネットデイサービス"),(0,ae.Y)(o.A,null,(0,ae.Y)(l.A,{mb:4},"アイネットデイサービスは春になると桜の花が満開に咲く桃谷公園のそばにあります。 誠実な信頼介護と向上心をモットーに地域の方々の憩いの場となるデイサービスを提供する施設です。"),(0,ae.Y)(l.A,{variant:"body2"},"午前と午後の半日単位でご都合の良い時間帯をお選びいただけます。充実した機能訓練のほかに認知機能と身体機能の両方を刺激し、生活の質を向上させることを目的としたシナプソロジー体操も取り入れています。 ご利用者・ご家族の皆様が快適に日常生活を送れるよう家族の一員のようなサービスを提供いたします。"))))))),(0,ae.Y)(r.A,null,(0,ae.Y)(s.Ay,{container:!0,spacing:4},[{Icon:ie,title:(0,ae.Y)(n.Fragment,null,"午前と午後の半日単位",(0,ae.Y)("br",null),"ご都合のよい時間帯を")},{Icon:oe,title:(0,ae.Y)(n.Fragment,null,"定員21名の",(0,ae.Y)("br",null),"少人数制")},{Icon:re,title:(0,ae.Y)(n.Fragment,null,"ゆったりとした",(0,ae.Y)("br",null),"お風呂")},{Icon:se,title:(0,ae.Y)(n.Fragment,null,"充実した機能訓練で",(0,ae.Y)("br",null),"ほどよく運動")}].map(((e,t)=>{let{Icon:a,title:n}=e;return(0,ae.Y)(s.Ay,{item:!0,key:t,md:3,xs:6},(0,ae.Y)(o.A,{key:t,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},(0,ae.Y)(o.A,null,(0,ae.Y)(a,{color:c.NB,style:{width:100}})),(0,ae.Y)(l.A,{color:"primary",textAlign:"center"},n)))})))),(0,ae.Y)(b.P,{data:[{image:(0,ae.Y)(i.S,{src:"../images/top-4.jpg",alt:"hoge",__imageData:a(8040)}),title:"施設とサービスのご紹介",head:"当施設をご紹介いたします。機能訓練やリラクゼーションに特化した設備とサービスでご利用者様に安らきと健康を提供します。",description:"ご本人様のご意向とご家族のご意見をお聞きしてスタッフが支援並びにご助言をさせていただきます。これらも生活の質を向上するのに多くの効果があります。さらに自身の向上や社会的交流の機会増加も重要な利点です。",link:"/facility/"},{image:(0,ae.Y)(i.S,{src:"../images/top-2.jpg",alt:"hoge",__imageData:a(5253)}),title:"一日の流れ",head:"ご利用者様が安心してサービスを受けて頂くための当施設における一日（半日）の流れをご紹介をいたします。",description:"当施設では、半日利用においても入浴サービスがごさいます。個浴ではございませんが2名が十分に足を延ばして入る大きさの浴槽になっており、季節に応じて坪庭を模様替えし、冬には柚子を浮かべ季節を感じる入浴時間を提供しています。",link:"/flow/"},{image:(0,ae.Y)(i.S,{src:"../images/top-3.jpg",alt:"hoge",__imageData:a(7724)}),title:"シナプソロジー体操とは？",head:"脳と体の両方に作用する一連の運動で構成されており、身体的な活動と認知的刺激を行うことで生活の質を向上させます。",description:"シナプソロジー体操は、記憶力、注意力、問題解決力など日常的にな生活で必要とされる認知機能に好影醬を与えることが研究で示されています。",link:"/synapsology/"}]}),(0,ae.Y)(o.A,{component:"section"},(0,ae.Y)(r.A,null,(0,ae.Y)(u.D,{variant:"h2",sub:"Director Introduction"},"管理者のご挨拶"),(0,ae.Y)(s.Ay,{container:!0,spacing:8},(0,ae.Y)(s.Ay,{item:!0,sm:6,xs:12},(0,ae.Y)(o.A,null,(0,ae.Y)(i.S,{src:"../images/top-5.jpg",alt:"施設長のご挨拶",style:{borderRadius:c.Vq},__imageData:a(2240)}),(0,ae.Y)(l.A,{textAlign:"center"},"アイネットデイサービス"),(0,ae.Y)(l.A,{variant:"body2",textAlign:"center"},"施設長 細川 義仁"))),(0,ae.Y)(s.Ay,{item:!0,sm:6,xs:12},(0,ae.Y)(o.A,null,(0,ae.Y)(l.A,null,"2011年8月にアイネットデイサービス桃谷をオープンしました。2023年1月より事業を引き継ぎ、地域のご利用者様の生活をより一層支えていきたいという強い気持ちを持って、皆様のご支援のもと、これからもサービスを提供して参ります。"),(0,ae.Y)(l.A,{variant:"body2",mt:2},"ご利用者様やご家族様に寄り添い、それぞれのニーズと想いを尊重しながら、「支援するために何が必要か」を常に考え、笑顔の絶えないアイネットデイサービス桃谷を目指しています。３時間という短い時間の中で、送迎・入浴・マシン運動・リラクゼーション・シナプソロジー（脳トレ）・季節のイベント・社会交流など、様々なプログラムを用意し、ご利用者様のニーズに合わせて提供いたします。会社理念として「誠実な信頼介護と向上心」を掲げ、お互いの信頼関係を大切にしながらコミュニケーションを図り、共に向上心を持って同じ時間を過ごします。ご利用者様が安心して来所でき、楽しみにしていただける時間を提供することを目指しています。喜びと笑顔溢れるデイサービスを、皆様のご協力と地域の支えのもと、共に作り上げていきたいと考えています。皆様の生活を少しでも支えることができ、１日でも長く共に笑顔で過ごせることを願っています。")))),(0,ae.Y)(u.D,{variant:"h2",sub:"Staff Introduction"},"相談員のご挨拶"),(0,ae.Y)(s.Ay,{container:!0,spacing:8},(0,ae.Y)(s.Ay,{item:!0,sm:6,xs:12},(0,ae.Y)(o.A,null,(0,ae.Y)(i.S,{src:"../images/top-8.jpg",alt:"相談員のご挨拶",style:{borderRadius:c.Vq},__imageData:a(8128)}),(0,ae.Y)(l.A,{textAlign:"center"},"アイネットデイサービス"),(0,ae.Y)(l.A,{variant:"body2",textAlign:"center"},"生活相談員 宇井 幸恵"))),(0,ae.Y)(s.Ay,{item:!0,sm:6,xs:12},(0,ae.Y)(o.A,null,(0,ae.Y)(l.A,{variant:"body2",mt:2},"私にできることは何かを考え、まずはご利用者様とたくさんお話をして、ご利用者様を知ることから始めます。信頼関係を築き、困っていることやお身体の心配事について相談を受け、ご利用者様にとって最善の提案を行います。ご利用者様やご家族様が安心して通っていただけるデイサービスを提供し続け、ケアマネージャーとも連携をとりながら、ご利用者様がその人らしく生活できるように支援いたします。また、アイネットデイサービス桃谷に来て良かったと思っていただけるよう、元気を受け取って頂き笑顔で帰宅し、次回の来所を楽しみにしていただけるように努めます。")))))),(0,ae.Y)(o.A,{component:"section",id:"facility"},(0,ae.Y)(r.A,null,(0,ae.Y)(u.D,{variant:"h2",sub:"Facility Information"},"施設情報"),(0,ae.Y)(ne,{data:[{key:"施設名",value:"アイネットデイサービス桃谷"},{key:"住所",value:le.BD},{key:"連絡先",value:(0,ae.Y)(n.Fragment,null,"TEL: ",le.xr,(0,ae.Y)("br",null),"FAX: ",le.mE)},{key:"従業員数",value:"15名"},{key:(0,ae.Y)(n.Fragment,null,"大阪府指定",(0,ae.Y)("br",null),"介護保険事業"),value:"デイサービスセンター"},{key:"許認可",value:(0,ae.Y)(n.Fragment,null,"大阪府指定介護保険事業",(0,ae.Y)("br",null),"大阪市自立支援介護事業",(0,ae.Y)("br",null),"大阪市地域支援介護事業")},{key:"運営会社",value:"株式会社アドナイ・イルエ"},{key:"営業時間",value:"09時00分〜18時00分"},{key:"サービス提供時間",value:(0,ae.Y)(n.Fragment,null,"午前利用 09時30分〜12時30分",(0,ae.Y)("br",null),"午後利用 14時15分～17時15分")},{key:"定休日",value:(0,ae.Y)(n.Fragment,null,"土曜日の午後",(0,ae.Y)("br",null),"日曜日",(0,ae.Y)("br",null),"年末年始 12月30日～1月3日",(0,ae.Y)("br",null),"※祝祭日、GW、お盆は休まず営業")}]}))),(0,ae.Y)(ce.b,null),(0,ae.Y)(o.A,{component:"section",id:"access"},(0,ae.Y)(r.A,null,(0,ae.Y)(o.A,{sx:{borderRadius:c.Vq,overflow:"hidden"}},(0,ae.Y)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.8461899594254!2d135.52623357721768!3d34.65858714988063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000de03e8849675%3A0x5e2f2d3966da7f0c!2z44Ki44Kk44ON44OD44OI44OH44Kk44K144O844OT44K544CQ5qGD6LC3IOODh-OCpOOCteODvOODk-OCueOCu-ODs-OCv-ODvOOAkQ!5e0!3m2!1sen!2sjp!4v1717960148151!5m2!1sen!2sjp",width:"100%",height:400,style:{border:0},allowFullScreen:!1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})))))),(0,ae.Y)(m.w,null)))};const pe=()=>(0,ae.Y)(d.G,null)},8128:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/410987d240adefbe1dbdb69a96e2e8ec/5a101/top-8.jpg","srcSet":"/static/410987d240adefbe1dbdb69a96e2e8ec/6bfee/top-8.jpg 583w,\\n/static/410987d240adefbe1dbdb69a96e2e8ec/4cd0b/top-8.jpg 1166w,\\n/static/410987d240adefbe1dbdb69a96e2e8ec/5a101/top-8.jpg 2331w","sizes":"(min-width: 2331px) 2331px, 100vw"},"sources":[{"srcSet":"/static/410987d240adefbe1dbdb69a96e2e8ec/92558/top-8.webp 583w,\\n/static/410987d240adefbe1dbdb69a96e2e8ec/735d0/top-8.webp 1166w,\\n/static/410987d240adefbe1dbdb69a96e2e8ec/a3522/top-8.webp 2331w","type":"image/webp","sizes":"(min-width: 2331px) 2331px, 100vw"}]},"width":2331,"height":1554}')},5253:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/49d63d27d871f6f62d12e6d77b58aeb9/06b4d/top-2.jpg","srcSet":"/static/49d63d27d871f6f62d12e6d77b58aeb9/e2514/top-2.jpg 1840w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/89a98/top-2.jpg 3680w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/06b4d/top-2.jpg 7360w","sizes":"(min-width: 7360px) 7360px, 100vw"},"sources":[{"srcSet":"/static/49d63d27d871f6f62d12e6d77b58aeb9/4dbab/top-2.webp 1840w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/f5714/top-2.webp 3680w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/04abc/top-2.webp 7360w","type":"image/webp","sizes":"(min-width: 7360px) 7360px, 100vw"}]},"width":7360,"height":4912}')},8040:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8c8b8","images":{"fallback":{"src":"/static/6ff2dc52861367cf617ca0fa4038faad/06b4d/top-4.jpg","srcSet":"/static/6ff2dc52861367cf617ca0fa4038faad/e2514/top-4.jpg 1840w,\\n/static/6ff2dc52861367cf617ca0fa4038faad/89a98/top-4.jpg 3680w,\\n/static/6ff2dc52861367cf617ca0fa4038faad/06b4d/top-4.jpg 7360w","sizes":"(min-width: 7360px) 7360px, 100vw"},"sources":[{"srcSet":"/static/6ff2dc52861367cf617ca0fa4038faad/4dbab/top-4.webp 1840w,\\n/static/6ff2dc52861367cf617ca0fa4038faad/f5714/top-4.webp 3680w,\\n/static/6ff2dc52861367cf617ca0fa4038faad/04abc/top-4.webp 7360w","type":"image/webp","sizes":"(min-width: 7360px) 7360px, 100vw"}]},"width":7360,"height":4912}')},7599:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8c8c8","images":{"fallback":{"src":"/static/e54612d32c8057b5630ebdb4844ee663/06b4d/top-1.jpg","srcSet":"/static/e54612d32c8057b5630ebdb4844ee663/e2514/top-1.jpg 1840w,\\n/static/e54612d32c8057b5630ebdb4844ee663/89a98/top-1.jpg 3680w,\\n/static/e54612d32c8057b5630ebdb4844ee663/06b4d/top-1.jpg 7360w","sizes":"(min-width: 7360px) 7360px, 100vw"},"sources":[{"srcSet":"/static/e54612d32c8057b5630ebdb4844ee663/4dbab/top-1.webp 1840w,\\n/static/e54612d32c8057b5630ebdb4844ee663/f5714/top-1.webp 3680w,\\n/static/e54612d32c8057b5630ebdb4844ee663/04abc/top-1.webp 7360w","type":"image/webp","sizes":"(min-width: 7360px) 7360px, 100vw"}]},"width":7360,"height":4912}')},7724:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a410c124e47128b430c70f0e7f771dfb/06b4d/top-3.jpg","srcSet":"/static/a410c124e47128b430c70f0e7f771dfb/e2514/top-3.jpg 1840w,\\n/static/a410c124e47128b430c70f0e7f771dfb/89a98/top-3.jpg 3680w,\\n/static/a410c124e47128b430c70f0e7f771dfb/06b4d/top-3.jpg 7360w","sizes":"(min-width: 7360px) 7360px, 100vw"},"sources":[{"srcSet":"/static/a410c124e47128b430c70f0e7f771dfb/4dbab/top-3.webp 1840w,\\n/static/a410c124e47128b430c70f0e7f771dfb/f5714/top-3.webp 3680w,\\n/static/a410c124e47128b430c70f0e7f771dfb/04abc/top-3.webp 7360w","type":"image/webp","sizes":"(min-width: 7360px) 7360px, 100vw"}]},"width":7360,"height":4912}')},2240:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/a0bac43dda4e4e6a0554e2f27adca6ea/06b4d/top-5.jpg","srcSet":"/static/a0bac43dda4e4e6a0554e2f27adca6ea/e2514/top-5.jpg 1840w,\\n/static/a0bac43dda4e4e6a0554e2f27adca6ea/89a98/top-5.jpg 3680w,\\n/static/a0bac43dda4e4e6a0554e2f27adca6ea/06b4d/top-5.jpg 7360w","sizes":"(min-width: 7360px) 7360px, 100vw"},"sources":[{"srcSet":"/static/a0bac43dda4e4e6a0554e2f27adca6ea/4dbab/top-5.webp 1840w,\\n/static/a0bac43dda4e4e6a0554e2f27adca6ea/f5714/top-5.webp 3680w,\\n/static/a0bac43dda4e4e6a0554e2f27adca6ea/04abc/top-5.webp 7360w","type":"image/webp","sizes":"(min-width: 7360px) 7360px, 100vw"}]},"width":7360,"height":4912}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b7f1af3d08a80df62584.js.map