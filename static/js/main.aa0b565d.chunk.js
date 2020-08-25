(this["webpackJsonpscp-website"]=this["webpackJsonpscp-website"]||[]).push([[0],{102:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},211:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),s=t(24),o=(t(95),t(12)),i=t(4),u=(t(96),t(20),t(97),t(218)),m=t(219),d={transparent:{backgroundColor:"transparent"},dark:{backgroundColor:"#343a40"}},p=function(e){var a="/"===Object(i.g)().pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",style:a?d.transparent:d.dark},r.a.createElement(u.a.Brand,null,"Scp"),r.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(m.a.Link,{as:o.b,to:"/scp-website"},"Home"),r.a.createElement(m.a.Link,{as:o.b,to:"/scp-website/search"},"Search"),r.a.createElement(m.a.Link,{as:o.b,to:"/scp-website/packageinfo"},"Package info"),r.a.createElement(m.a.Link,{as:o.b,to:"/scp-website/help"},"Help")))))},E=(t(102),t(15)),g=t(19),b=t.n(g),f=t(8),h=t(29),v=t(25),k=t(16),y=t(14),x={link:{color:"inherit"}},w=function(e){var a=Object(n.useState)({isLoaded:!1,item:null,username:e.username,error:null,size:e.avatarSize,status:null}),t=Object(E.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)((function(){var e=!1;return Object(h.a)(b.a.mark((function a(){var t,n;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.github.com/users/".concat(c.username));case 3:return n=a.sent,a.next=6,n.json();case 6:t=a.sent,!e&&l((function(e){return Object(f.a)(Object(f.a)({},e),{},{isLoaded:!0,status:n.status,item:t})})),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),!e&&l((function(e){return Object(f.a)(Object(f.a)({},e),{},{isLoaded:!0,error:a.t0})}));case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))(),function(){e=!0}}),[c.username]);var s=c.error,o=c.isLoaded,i=c.item,u=c.size,m=c.status;return s?r.a.createElement("div",null,"Error: ",s.message):o?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:i.html_url,target:"_blank",rel:"noopener noreferrer",style:x.link},404===m||403===m?r.a.createElement(k.a,{icon:y.f}):r.a.createElement("img",{"data-tip":i.login,alt:"github avatar",style:u,src:i.avatar_url})),r.a.createElement(v.a,null)):r.a.createElement("div",null,"Loading...")},N=t(33),j=t.n(N),O=t(78),L=t.n(O),S=(t(110),t(111),{margin:"10px 10px 0 0",padding:"5px",backgroundColor:"#f2f2f2",borderRadius:"4px",float:"left"}),C={margin:0,padding:0,listStyleType:"none",overflow:"hidden"},R={margin:"1em 0 0.5em 0"},B={color:"#7f7f7f",fontWeight:300,marginLeft:"10px"},F={margin:"0 10px 0 0px",links:{margin:"0 10px 0 0px",color:"inherit"}},T={margin:"15px 0 15px 0"},M={marginBottom:"15px"},I=function(e){var a=e.style,t=e.packages,c=e.packageCount,l=e.packagesPerPage,s=void 0===l?10:l,i=Object(n.useState)(0),u=Object(E.a)(i,2),m=u[0],d=u[1];if(null===t)return r.a.createElement("p",null,"Search for packages for them to be displayed here");var p=t.slice(m,m+s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"package-list",style:{listStyleType:"none"}},p.map((function(e){return r.a.createElement("li",{key:e.package.name,style:a.item},r.a.createElement("div",{className:"pure-g",style:M},r.a.createElement("div",{className:"pure-u-1",style:T},r.a.createElement(o.b,{style:F,to:{pathname:"/packageinfo",packageName:e.package.name}},r.a.createElement("h3",{style:{display:"inline"}},e.package.name))," ",r.a.createElement(o.b,{style:F.links,target:"_blank",to:{pathname:e.package.links.npm}},r.a.createElement("img",{alt:"NPM",src:"/scp-website/img/npm-logo-red-32px.png"})),r.a.createElement(o.b,{style:F.links,target:"_blank",to:{pathname:e.package.links.repository}},r.a.createElement("img",{alt:"Repository",src:"/scp-website/img/GitHub-Mark-32px.png"}))),r.a.createElement("div",{className:"pure-u-1"},r.a.createElement("p",{style:a.description},e.package.description),e.package.keywords?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:C},e.package.keywords.map((function(e){return r.a.createElement("li",{style:S,key:e},r.a.createElement("a",{href:"https://www.npmjs.com/search?q=keywords:".concat(e)},e))})))):null,r.a.createElement("div",{style:R},r.a.createElement(w,{username:e.package.publisher.username,avatarSize:{width:"22px"}}),r.a.createElement("span",{"data-tip":new Date(e.package.date),style:B},"published ",e.package.version," \u2022 ",j()(e.package.date).startOf("day").fromNow())),r.a.createElement(v.a,null))))}))),r.a.createElement("div",{id:"react-paginate",className:"center"},r.a.createElement(L.a,{pageCount:Math.ceil(c/s),previousLabel:r.a.createElement(k.a,{icon:y.a}),nextLabel:r.a.createElement(k.a,{icon:y.b}),onPageChange:function(e){var a=e.selected,t=Math.ceil(a*s);d(t)},breakClassName:"break-me",containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))},z=t(40),D={input:{borderTopRightRadius:0,borderBottomRightRadius:0,borderWidth:"0px",margin:0,backgroundColor:"white"},button:{borderWidth:"0px",borderTopLeftRadius:0,borderBottomLeftRadius:0,borderTopRightRadius:"4px",borderBottomRightRadius:"4px",margin:0},form:{display:"flex",width:"100%"}},P=function(e){var a=e.style||D,t=Object(n.useState)(""),c=Object(E.a)(t,2),l=c[0],s=c[1],o=Object(n.useState)([]),i=Object(E.a)(o,2),u=i[0],m=i[1],d=function(){var e=l,a=u.join("+");return e+=a="+"+a};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"pure-form",style:D.form},r.a.createElement("input",{id:"search",type:"text",style:a.input,className:"pure-u-1",placeholder:"Search for packages here...",value:l,onChange:function(e){s(e.target.value)}}),r.a.createElement("button",{type:"submit",style:a.button,className:"pure-button pure-button-primary",onClick:function(a){a.preventDefault();var t=d();e.onSearch(t)}},void 0!==e.searchButtonText?e.searchButtonText:"Search")),r.a.createElement("button",{id:"dhis2",class:"pure-button",onClick:function(e){e.preventDefault();var a=document.getElementById("dhis2");if(u.includes("scope:dhis2")){a.classList.remove("pure-button-active");var t=u,n=u.indexOf("scope:dhis2");n>-1&&t.splice(n,1),m(t)}else a.classList.add("pure-button-active"),m([].concat(Object(z.a)(u),["scope:dhis2"]))}},"dhis2"))},q=t(79),W=t.n(q),A="packages/fetchPackages",H=t(80),U=t(81),_=t.n(U),J=function(e){return function(){var a=Object(h.a)(b.a.mark((function a(t,n){var r;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,W.a.get(H.npms.baseUrl,{params:{q:e},paramsSerializer:function(e){return _.a.stringify(e,{encode:!1})}});case 2:r=a.sent,t({type:A,payload:r.data});case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},V={item:{height:"100%",minHeight:"180px",borderBottom:"1px solid #f2f2f2"},description:{color:"gray"}},G=function(){var e=Object(s.c)((function(e){return e.packages})),a=Object(s.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"l-box"},r.a.createElement("h1",null,"Search")),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-1-1 search"},r.a.createElement("div",{className:"l-box"},r.a.createElement(P,{searchButtonText:"Search",onSearch:function(e){console.log(e),a(J(e))}}))),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-1-1"},r.a.createElement("div",{className:"l-box"},r.a.createElement(I,{style:V,packages:e,packageCount:e?e.length:0})))))},K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"l-box"},r.a.createElement("h1",null,"Help"))))},Q=(t(130),{searchBox:{width:"calc(100% - 40px)",maxWidth:"620px"},box:{width:"100%",height:"calc(65vh - 80px)",justifyContent:"center",display:"flex",alignItems:"center"},title:{margin:"15px",textAlign:"center",color:"white"},description:{textAlign:"justify",color:"rgba(255,255,255,0.7)",marginBottom:"30px",fontWeight:"400",fontStyle:"normal"}}),X=function(){var e=Object(s.b)(),a=Object(i.f)();Object(n.useEffect)((function(){return document.body.className="landing",function(){document.body.classList.remove("landing")}}),[]);return r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"pure-u-1 center",style:Q.box},r.a.createElement("div",{style:Q.searchBox},r.a.createElement("div",{className:"title",style:Q.title},r.a.createElement("h1",null,"scp-website")),r.a.createElement("div",{className:"description",style:Q.description},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida interdum arcu. Nullam congue turpis tristique, mollis augue vitae, aliquet velit. Aenean aliquam mattis dapibus. Vivamus vel tempus enim, eget ullamcorper enim. Fusce vulputate sapien quis sapien bibendum sagittis.")),r.a.createElement(P,{searchButtonText:r.a.createElement(k.a,{icon:y.e}),onSearch:function(t){console.log(t),e(J(t)),a.push("/scp-website/search")}}))))},Y=(t(131),t(82)),Z=t.n(Y),$=t(83),ee=t.n($),ae={resize:"none",width:"70%",borderRadius:"5px",paddingTop:"15px",paddingLeft:"15px"},te=function(e){var a=Object(n.useState)({copySuccess:!1,value:"",hovered:!1}),t=Object(E.a)(a,2),c=t[0],l=t[1],s=Object(n.useRef)(null),o=function(e){c.hovered?(e.target.style.background="",e.target.style.border="",l((function(e){return{hovered:!1}}))):(e.target.style.background="#dbffdb",e.target.style.border="1px solid #00c642",l((function(e){return{hovered:!0}})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("textarea",{"data-tip":"Click to copy command to clipboard",style:ae,readOnly:!0,value:e.value,onMouseOver:function(e){return o(e)},onMouseLeave:function(e){return o(e)},onClick:function(){return s.select(),document.execCommand("copy"),void l((function(e){return{copySuccess:!0}}))},ref:function(e){return s=e}})," ",r.a.createElement(v.a,null)))},ne=function(e){var a,t=Object(n.useState)({packageName:null,packageItem:null,error:null,isLoaded:!1,package:[],readme:null,readmeLoaded:!1,readmeError:null,name:null}),c=Object(E.a)(t,2),l=c[0],s=c[1],o=l.error,i=l.isLoaded,u=l.item,m=l.name,d=l.readme,p=l.readmeError,g=l.readmeLoaded;if(Object(n.useEffect)((function(){var a=!1;return Object(h.a)(b.a.mark((function t(){var n,r,c,l,o,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.location.packageName,r=void 0!==n?n:"@material-ui/core",t.prev=2,t.next=5,fetch("https://api.npms.io/v2/package/".concat(encodeURIComponent(r)));case 5:return l=t.sent,t.next=8,l.json();case 8:c=t.sent,!a&&s((function(e){return Object(f.a)(Object(f.a)({},e),{},{isLoaded:!0,item:c,name:r})})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),!a&&s((function(e){return Object(f.a)(Object(f.a)({},e),{},{isLoaded:!0,error:t.t0})}));case 15:return t.prev=15,t.next=18,fetch("https://unpkg.com/".concat(r,"@").concat(c.collected.metadata.version,"/README.md"));case 18:return o=t.sent,t.next=21,o.text();case 21:i=t.sent,!a&&s((function(e){return Object(f.a)(Object(f.a)({},e),{},{readmeLoaded:!0,readme:i})})),t.next=28;break;case 25:t.prev=25,t.t1=t.catch(15),!a&&s((function(e){return Object(f.a)(Object(f.a)({},e),{},{readmeLoaded:!0,readme:null,readmeError:!0})}));case 28:case"end":return t.stop()}}),t,null,[[2,12],[15,25]])})))(),function(){a=!0}}),[e.location]),Object(n.useEffect)((function(){ee.a.highlightAll()})),a=g?p?r.a.createElement("div",null,"Error loading readme ..."):r.a.createElement("div",null,r.a.createElement(Z.a,{className:"markdown",escapeHtml:!1,source:d})):r.a.createElement("div",null,"README loading ..."),o)return r.a.createElement("div",null,"Error: ",o.message);if(i){var x=u.collected.github.contributors.filter((function(e,a){return a<5}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"pure-u-1-1"},r.a.createElement("div",{className:"l-box"},r.a.createElement("h1",null,u.collected.metadata.name),r.a.createElement("span",{"data-tip":new Date(u.collected.metadata.date)},u.collected.metadata.version," \u2022 Published ",j()(u.collected.metadata.date).startOf("day").fromNow()),r.a.createElement(v.a,null))),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-3-5 pure-u-lg-3-5 left-column"},r.a.createElement("div",{className:"l-box"},r.a.createElement("p",null,u.collected.metadata.description),a)),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-2-5 pure-u-lg-2-5 right-column"},r.a.createElement("div",{className:"l-box"},r.a.createElement("div",{className:"pure-g-r"},r.a.createElement("div",{className:"pure-u-1-1"},r.a.createElement("h5",null,"Install"),r.a.createElement(te,{value:"npm i ".concat(m)})),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"Version"),r.a.createElement("p",null,u.collected.metadata.version)),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"License"),r.a.createElement("p",null,u.collected.metadata.license)),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"Weekly downloads"),r.a.createElement("p",null,u.collected.npm.downloads[1].count.toLocaleString())),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"Issues"),r.a.createElement("p",null,u.collected.github.issues.openCount))),r.a.createElement("h5",null,"NPM"),r.a.createElement(k.a,{icon:y.d})," ",r.a.createElement("a",{className:"source-links",href:u.collected.metadata.links.npm},decodeURIComponent(u.collected.metadata.links.npm)),r.a.createElement("h5",null,"Repository"),r.a.createElement(k.a,{icon:y.c})," ",r.a.createElement("a",{className:"source-links",href:u.collected.metadata.links.repository},decodeURIComponent(u.collected.metadata.links.repository)),r.a.createElement("h5",null,"Last publish"),r.a.createElement("p",{"data-tip":new Date(u.collected.metadata.date)},j()(u.collected.metadata.date).startOf("day").fromNow()),x.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Collaborators"),r.a.createElement("ul",{id:"collaborators"},x.map((function(e){return r.a.createElement("li",{key:e.username},r.a.createElement(w,{username:e.username,avatarSize:{width:"40px"}}))})))):null,void 0!==u.collected.metadata.keywords&&u.collected.metadata.keywords.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Keywords"),r.a.createElement("ul",{id:"keywords"},u.collected.metadata.keywords.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"https://www.npmjs.com/search?q=keywords:".concat(e)},e))})))):null))))}return r.a.createElement("div",{className:"pure-g-r content"},r.a.createElement("div",{className:"pure-u-1"},r.a.createElement("div",{className:"l-box"},r.a.createElement("div",null,"Loading..."))))},re=(t(211),t(212),t(213),function(){return r.a.createElement(o.a,null,r.a.createElement(p,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/scp-website",component:X}),r.a.createElement(i.a,{path:"/scp-website/search",component:G}),r.a.createElement(i.a,{path:"/scp-website/packageinfo",component:ne}),r.a.createElement(i.a,{path:"/scp-website/help",component:K})))}),ce=t(22),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:return Object(z.a)(a.payload.results);default:return e}},se=Object(ce.combineReducers)({packages:le}),oe=t(84),ie=t(85),ue=Object(ce.createStore)(se,Object(ie.composeWithDevTools)(Object(ce.applyMiddleware)(oe.a)));l.a.render(r.a.createElement(s.a,{store:ue},r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null))),document.getElementById("root"))},80:function(e,a){e.exports={npms:{baseUrl:"https://api.npms.io/v2/search?size=50"}}},86:function(e,a,t){e.exports=t(214)},95:function(e,a,t){},97:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.aa0b565d.chunk.js.map