(this["webpackJsonpscp-website"]=this["webpackJsonpscp-website"]||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){},206:function(e,a,t){},209:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),o=t(24),s=(t(92),t(12)),i=t(4),m=(t(93),t(20),t(94),t(213)),u=t(214),d={transparent:{backgroundColor:"transparent"},dark:{backgroundColor:"#343a40"}},p=function(e){var a="/"===Object(i.g)().pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",style:a?d.transparent:d.dark},r.a.createElement(m.a.Brand,null,"Scp"),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(u.a.Link,{as:s.b,to:"/scp-website"},"Home"),r.a.createElement(u.a.Link,{as:s.b,to:"/scp-website/search"},"Search"),r.a.createElement(u.a.Link,{as:s.b,to:"/scp-website/packageinfo"},"Package info"),r.a.createElement(u.a.Link,{as:s.b,to:"/scp-website/help"},"Help")))))},E=(t(99),t(16)),g=t(19),f=t.n(g),b=t(8),h=t(29),v=t(25),k=t(13),y=t(14),x={link:{color:"inherit"}},w=function(e){var a=Object(n.useState)({isLoaded:!1,item:null,username:e.username,error:null,size:e.avatarSize,status:null}),t=Object(E.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)((function(){var e=!1;return Object(h.a)(f.a.mark((function a(){var t,n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.github.com/users/".concat(c.username));case 3:return n=a.sent,a.next=6,n.json();case 6:t=a.sent,!e&&l((function(e){return Object(b.a)(Object(b.a)({},e),{},{isLoaded:!0,status:n.status,item:t})})),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),!e&&l((function(e){return Object(b.a)(Object(b.a)({},e),{},{isLoaded:!0,error:a.t0})}));case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))(),function(){e=!0}}),[c.username]);var o=c.error,s=c.isLoaded,i=c.item,m=c.size,u=c.status;return o?r.a.createElement("div",null,"Error: ",o.message):s?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:i.html_url,target:"_blank",rel:"noopener noreferrer",style:x.link},404===u||403===u?r.a.createElement(k.a,{icon:y.f}):r.a.createElement("img",{"data-tip":i.login,alt:"github avatar",style:m,src:i.avatar_url})),r.a.createElement(v.a,null)):r.a.createElement("div",null,"Loading...")},N=t(33),j=t.n(N),O=t(75),L=t.n(O),S=(t(107),t(108),{margin:"10px 10px 0 0",padding:"5px",backgroundColor:"#f2f2f2",borderRadius:"4px",float:"left"}),C={margin:0,padding:0,listStyleType:"none",overflow:"hidden"},R={margin:"1em 0 0.5em 0"},B={color:"#7f7f7f",fontWeight:300,marginLeft:"10px"},T={margin:"0 8px 0 0px",fontAwesome:{margin:"0 8px 0 0px",color:"inherit"}},F={margin:"15px 0 15px 0"},A={marginBottom:"15px"},M=function(e){var a=e.style,t=e.packages,c=e.packageCount,l=e.packagesPerPage,o=void 0===l?10:l,i=Object(n.useState)(0),m=Object(E.a)(i,2),u=m[0],d=m[1];if(null===t)return r.a.createElement("p",null,"Search for packages for them to be displayed here");var p=t.slice(u,u+o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"package-list",style:{listStyleType:"none"}},p.map((function(e){return r.a.createElement("li",{key:e.package.name,style:a.item},r.a.createElement("div",{className:"pure-g",style:A},r.a.createElement("div",{className:"pure-u-1",style:F},r.a.createElement(s.b,{style:T,to:{pathname:"/packageinfo",packageName:e.package.name}},r.a.createElement("h3",{style:{display:"inline"}},e.package.name))," ",r.a.createElement(s.b,{style:T.fontAwesome,target:"_blank",to:{pathname:e.package.links.npm}}," ",r.a.createElement(k.a,{icon:y.d})),r.a.createElement(s.b,{style:T.fontAwesome,target:"_blank",to:{pathname:e.package.links.repository}},r.a.createElement(k.a,{icon:y.c}))),r.a.createElement("div",{className:"pure-u-1"},r.a.createElement("p",{style:a.description},e.package.description),e.package.keywords?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:C},e.package.keywords.map((function(e){return r.a.createElement("li",{style:S,key:e},r.a.createElement("a",{href:"https://www.npmjs.com/search?q=keywords:".concat(e)},e))})))):null,r.a.createElement("div",{style:R},r.a.createElement(w,{username:e.package.publisher.username,avatarSize:{width:"22px"}}),r.a.createElement("span",{"data-tip":new Date(e.package.date),style:B},"published ",e.package.version," \u2022 ",j()(e.package.date).startOf("day").fromNow())),r.a.createElement(v.a,null))))}))),r.a.createElement("div",{id:"react-paginate",className:"center"},r.a.createElement(L.a,{pageCount:Math.ceil(c/o),previousLabel:r.a.createElement(k.a,{icon:y.a}),nextLabel:r.a.createElement(k.a,{icon:y.b}),onPageChange:function(e){var a=e.selected,t=Math.ceil(a*o);d(t)},breakClassName:"break-me",containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))},I={input:{borderTopRightRadius:0,borderBottomRightRadius:0,borderWidth:"0px",margin:0},button:{borderWidth:"0px",borderTopLeftRadius:0,borderBottomLeftRadius:0,borderTopRightRadius:"4px",borderBottomRightRadius:"4px",margin:0},form:{display:"flex",width:"100%"}},q=function(e){var a=e.style||I,t=Object(n.useState)(""),c=Object(E.a)(t,2),l=c[0],o=c[1];return r.a.createElement("form",{className:"pure-form",style:I.form},r.a.createElement("input",{id:"search",type:"text",style:a.input,className:"pure-u-1",placeholder:"Search for packages here...",value:l,onChange:function(e){o(e.target.value)}}),r.a.createElement("button",{type:"submit",style:a.button,className:"pure-button pure-button-primary",onClick:function(a){a.preventDefault(),e.onSearch(l)}},void 0!==e.searchButtonText?e.searchButtonText:"Search"))},z=t(76),D=t.n(z),P="packages/fetchPackages",W=t(77),H=function(e){return function(){var a=Object(h.a)(f.a.mark((function a(t,n){var r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D.a.get(W.npms.baseUrl,{params:{q:e}});case 2:r=a.sent,console.log(r.data),t({type:P,payload:r.data});case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},U={item:{height:"100%",minHeight:"180px",borderBottom:"1px solid #f2f2f2"},description:{color:"gray"}},_=function(){var e=Object(o.c)((function(e){return e.packages})),a=Object(o.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"l-box"},r.a.createElement("h1",null,"Search")),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-1-1 search"},r.a.createElement("div",{className:"l-box"},r.a.createElement(q,{searchButtonText:"Search",onSearch:function(e){console.log(e),a(H(e))}}))),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-1-1"},r.a.createElement("div",{className:"l-box"},r.a.createElement(M,{style:U,packages:e,packageCount:e?e.length:0})))))},J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"l-box"},r.a.createElement("h1",null,"Help"))))},V=(t(125),{searchBox:{width:"calc(100% - 40px)",maxWidth:"620px"},box:{width:"100%",height:"calc(65vh - 80px)",justifyContent:"center",display:"flex",alignItems:"center"},title:{margin:"15px",textAlign:"center",color:"white"},description:{textAlign:"justify",color:"rgba(255,255,255,0.7)",marginBottom:"30px",fontWeight:"400",fontStyle:"normal"}}),K=function(){var e=Object(o.b)(),a=Object(i.f)();Object(n.useEffect)((function(){return document.body.className="landing",function(){document.body.classList.remove("landing")}}),[]);return r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"pure-u-1 center",style:V.box},r.a.createElement("div",{style:V.searchBox},r.a.createElement("div",{className:"title",style:V.title},r.a.createElement("h1",null,"scp-website")),r.a.createElement("div",{className:"description",style:V.description},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida interdum arcu. Nullam congue turpis tristique, mollis augue vitae, aliquet velit. Aenean aliquam mattis dapibus. Vivamus vel tempus enim, eget ullamcorper enim. Fusce vulputate sapien quis sapien bibendum sagittis.")),r.a.createElement(q,{searchButtonText:r.a.createElement(k.a,{icon:y.e}),onSearch:function(t){console.log(t),e(H(t)),a.push("/scp-website/search")}}))))},G=(t(126),t(78)),Q=t.n(G),X=t(79),Y=t.n(X),Z={resize:"none",width:"70%",borderRadius:"5px",paddingTop:"15px",paddingLeft:"15px"},$=function(e){var a=Object(n.useState)({copySuccess:!1,value:"",hovered:!1}),t=Object(E.a)(a,2),c=t[0],l=t[1],o=Object(n.useRef)(null),s=function(e){c.hovered?(e.target.style.background="",e.target.style.border="",l((function(e){return{hovered:!1}}))):(e.target.style.background="#dbffdb",e.target.style.border="1px solid #00c642",l((function(e){return{hovered:!0}})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("textarea",{"data-tip":"Click to copy command to clipboard",style:Z,readOnly:!0,value:e.value,onMouseOver:function(e){return s(e)},onMouseLeave:function(e){return s(e)},onClick:function(){return o.select(),document.execCommand("copy"),void l((function(e){return{copySuccess:!0}}))},ref:function(e){return o=e}})," ",r.a.createElement(v.a,null)))},ee=function(e){var a,t=Object(n.useState)({packageName:null,packageItem:null,error:null,isLoaded:!1,package:[],readme:null,readmeLoaded:!1,readmeError:null,name:null}),c=Object(E.a)(t,2),l=c[0],o=c[1],s=l.error,i=l.isLoaded,m=l.item,u=l.name,d=l.readme,p=l.readmeError,g=l.readmeLoaded;if(Object(n.useEffect)((function(){var a=!1;return Object(h.a)(f.a.mark((function t(){var n,r,c,l,s,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.location.packageName,r=void 0!==n?n:"@material-ui/core",t.prev=2,t.next=5,fetch("https://api.npms.io/v2/package/".concat(encodeURIComponent(r)));case 5:return l=t.sent,t.next=8,l.json();case 8:c=t.sent,!a&&o((function(e){return Object(b.a)(Object(b.a)({},e),{},{isLoaded:!0,item:c,name:r})})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),!a&&o((function(e){return Object(b.a)(Object(b.a)({},e),{},{isLoaded:!0,error:t.t0})}));case 15:return t.prev=15,t.next=18,fetch("https://unpkg.com/".concat(r,"@").concat(c.collected.metadata.version,"/README.md"));case 18:return s=t.sent,t.next=21,s.text();case 21:i=t.sent,!a&&o((function(e){return Object(b.a)(Object(b.a)({},e),{},{readmeLoaded:!0,readme:i})})),t.next=28;break;case 25:t.prev=25,t.t1=t.catch(15),!a&&o((function(e){return Object(b.a)(Object(b.a)({},e),{},{readmeLoaded:!0,readme:null,readmeError:!0})}));case 28:case"end":return t.stop()}}),t,null,[[2,12],[15,25]])})))(),function(){a=!0}}),[e.location]),Object(n.useEffect)((function(){Y.a.highlightAll()})),a=g?p?r.a.createElement("div",null,"Error loading readme ..."):r.a.createElement("div",null,r.a.createElement(Q.a,{className:"markdown",escapeHtml:!1,source:d})):r.a.createElement("div",null,"README loading ..."),s)return r.a.createElement("div",null,"Error: ",s.message);if(i){var x=m.collected.github.contributors.filter((function(e,a){return a<5}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"pure-u-1-1"},r.a.createElement("div",{className:"l-box"},r.a.createElement("h1",null,m.collected.metadata.name),r.a.createElement("span",{"data-tip":new Date(m.collected.metadata.date)},m.collected.metadata.version," \u2022 Published ",j()(m.collected.metadata.date).startOf("day").fromNow()),r.a.createElement(v.a,null))),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-3-5 pure-u-lg-3-5 left-column"},r.a.createElement("div",{className:"l-box"},r.a.createElement("p",null,m.collected.metadata.description),a)),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-2-5 pure-u-lg-2-5 right-column"},r.a.createElement("div",{className:"l-box"},r.a.createElement("div",{className:"pure-g-r"},r.a.createElement("div",{className:"pure-u-1-1"},r.a.createElement("h5",null,"Install"),r.a.createElement($,{value:"npm i ".concat(u)})),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"Version"),r.a.createElement("p",null,m.collected.metadata.version)),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"License"),r.a.createElement("p",null,m.collected.metadata.license)),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"Weekly downloads"),r.a.createElement("p",null,m.collected.npm.downloads[1].count.toLocaleString())),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"Issues"),r.a.createElement("p",null,m.collected.github.issues.openCount))),r.a.createElement("h5",null,"NPM"),r.a.createElement(k.a,{icon:y.d})," ",r.a.createElement("a",{className:"source-links",href:m.collected.metadata.links.npm},decodeURIComponent(m.collected.metadata.links.npm)),r.a.createElement("h5",null,"Repository"),r.a.createElement(k.a,{icon:y.c})," ",r.a.createElement("a",{className:"source-links",href:m.collected.metadata.links.repository},decodeURIComponent(m.collected.metadata.links.repository)),r.a.createElement("h5",null,"Last publish"),r.a.createElement("p",{"data-tip":new Date(m.collected.metadata.date)},j()(m.collected.metadata.date).startOf("day").fromNow()),x.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Collaborators"),r.a.createElement("ul",{id:"collaborators"},x.map((function(e){return r.a.createElement("li",{key:e.username},r.a.createElement(w,{username:e.username,avatarSize:{width:"40px"}}))})))):null,void 0!==m.collected.metadata.keywords&&m.collected.metadata.keywords.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Keywords"),r.a.createElement("ul",{id:"keywords"},m.collected.metadata.keywords.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"https://www.npmjs.com/search?q=keywords:".concat(e)},e))})))):null))))}return r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"pure-u-1"},r.a.createElement("div",{className:"l-box"},r.a.createElement("div",null,"Loading..."))))},ae=(t(206),t(207),t(208),function(){return r.a.createElement(s.a,null,r.a.createElement(p,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/scp-website",component:K}),r.a.createElement(i.a,{path:"/scp-website/search",component:_}),r.a.createElement(i.a,{path:"/scp-website/packageinfo",component:ee}),r.a.createElement(i.a,{path:"/scp-website/help",component:J})))}),te=t(22),ne=t(82),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case P:return Object(ne.a)(a.payload.results);default:return e}},ce=Object(te.combineReducers)({packages:re}),le=t(80),oe=t(81),se=Object(te.createStore)(ce,Object(oe.composeWithDevTools)(Object(te.applyMiddleware)(le.a)));l.a.render(r.a.createElement(o.a,{store:se},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null))),document.getElementById("root"))},77:function(e,a){e.exports={npms:{baseUrl:"https://api.npms.io/v2/search?size=50"}}},83:function(e,a,t){e.exports=t(209)},92:function(e,a,t){},94:function(e,a,t){},99:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.76e6e080.chunk.js.map