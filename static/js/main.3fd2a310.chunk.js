(this["webpackJsonpscp-website"]=this["webpackJsonpscp-website"]||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},202:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=a(11),s=(a(104),a(13)),i=a(7),m=(a(105),a(21),a(106),a(229)),u=a(230),p={transparent:{backgroundColor:"transparent"},dark:{backgroundColor:"#343a40"}},d=function(e){var t="/"===Object(i.g)().pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",style:t?p.transparent:p.dark},r.a.createElement(m.a.Brand,{as:s.b,to:"/scp-website"},r.a.createElement("img",{alt:"DHIS2 logo",src:"/scp-website/img/dhis2-logo.png"})),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(u.a.Link,{as:s.b,to:"/scp-website"},"Home"),r.a.createElement(u.a.Link,{as:s.b,to:"/scp-website/search"},"Search"),r.a.createElement(u.a.Link,{as:s.b,to:"/scp-website/information"},"Information"),r.a.createElement(u.a.Link,{as:s.b,to:"/scp-website/contact"},"Contact us")))))},h=(a(109),a(110),"packages/fetchPackages"),f="query/setModifiers",g="query/setOffset",E={setDisplayOffset:"filter/setOffset",setSearchTerm:"query/setSearchTerm"},b="components/createList",v="components/searchList",y=a(93),k=function(e){return function(t){t({type:E.setDisplayOffset,payload:e})}},x=function(e,t){var a=new y.a(e,{includeScore:!0,threshold:.4,keys:["name"]}).search(t);return 0===a?[]:a},w=a(17),O=a.n(w),j=a(5),N=a(28),S=a(18),I=a(26),C=a(19),L=a(20),T={link:{color:"inherit"}},D=function(e){var t=Object(n.useState)({isLoaded:!1,item:null,username:e.username,error:null,size:e.avatarSize,status:null}),a=Object(S.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){var e=!1;return Object(N.a)(O.a.mark((function t(){var a,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.github.com/users/".concat(c.username));case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,!e&&l((function(e){return Object(j.a)(Object(j.a)({},e),{},{isLoaded:!0,status:n.status,item:a})})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),!e&&l((function(e){return Object(j.a)(Object(j.a)({},e),{},{isLoaded:!0,error:t.t0})}));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))(),function(){e=!0}}),[c.username]);var o=c.error,s=c.isLoaded,i=c.item,m=c.size,u=c.status;return o?r.a.createElement("div",null,"Error: ",o.message):s?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:i.html_url,target:"_blank",rel:"noopener noreferrer",style:T.link},404===u||403===u?r.a.createElement(C.a,{icon:L.f}):r.a.createElement("img",{"data-tip":i.login,alt:"github avatar",style:m,src:i.avatar_url})),r.a.createElement(I.a,null)):r.a.createElement("div",null,"Loading...")},H=a(36),P=a.n(H),R=a(87),B=a.n(R),F=(a(118),a(119),{margin:"10px 10px 0 0",padding:"5px",backgroundColor:"#f2f2f2",borderRadius:"4px",float:"left"}),A={margin:0,padding:0,listStyleType:"none",overflow:"hidden"},U={margin:"1em 0 0.5em 0"},q={color:"#7f7f7f",fontWeight:300,marginLeft:"10px"},z={margin:"0 10px 0 0px",links:{margin:"0 10px 0 0px",color:"inherit"}},M={margin:"15px 0 15px 0"},V={marginBottom:"15px",boxShadow:"8px 1px 4px -6px rgba(190,190,190,0.1)"},_=function(e){var t=e.style,a=Object(o.b)(),n=Object(o.c)((function(e){return e.packages.currPackages})),c=Object(o.c)((function(e){return e.components.all})),l=Object(o.c)((function(e){return e.components.searched})),i=Object(o.c)((function(e){return e.filter.searchTerm})),m=Object(o.c)((function(e){return e.filter.displayOffset}));if(0===l.length&&0!==i.length)return r.a.createElement("p",null,"No hits");var u=0!==l.length&&0!==i.length?l:c.map((function(e){return{item:e}})),p=u.slice(m,m+5);return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"package-list",style:{listStyleType:"none"}},p.map((function(e,a){return r.a.createElement("li",{key:a,style:t.item},r.a.createElement("div",{className:"pure-g",style:V},r.a.createElement("div",{className:"pure-u-1",style:M},r.a.createElement(s.b,{style:z,to:{pathname:"/scp-website/packageinfo",packageName:n[e.item.packageIndex].package.name}},r.a.createElement("h3",{style:{display:"inline"}},e.item.name," - ",n[e.item.packageIndex].package.name))," ",r.a.createElement(s.b,{style:z.links,target:"_blank",to:{pathname:n[e.item.packageIndex].package.links.npm}},r.a.createElement("img",{alt:"NPM",src:"/scp-website/img/npm-logo-red-32px.png"})),r.a.createElement(s.b,{style:z.links,target:"_blank",to:{pathname:n[e.item.packageIndex].package.links.repository}},r.a.createElement("img",{alt:"Repository",src:"/scp-website/img/GitHub-Mark-32px.png"}))),r.a.createElement("div",{className:"pure-u-1"},r.a.createElement("p",{style:t.description},e.item.description),n[e.item.packageIndex].package.keywords?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:A},n[e.item.packageIndex].package.keywords.map((function(e){return r.a.createElement("li",{style:F,key:e},r.a.createElement("a",{href:"https://www.npmjs.com/search?q=keywords:".concat(e)},e))})))):null,r.a.createElement("div",{style:U},r.a.createElement(D,{username:n[e.item.packageIndex].package.publisher.username,avatarSize:{width:"22px"}}),r.a.createElement("span",{"data-tip":new Date(n[e.item.packageIndex].package.date),style:q},"published ",n[e.item.packageIndex].package.version," \u2022 ",P()(n[e.item.packageIndex].package.date).startOf("day").fromNow())),r.a.createElement(I.a,null))))}))),r.a.createElement("div",{id:"react-paginate",className:"center"},r.a.createElement(B.a,{pageCount:Math.ceil(u.length/5),previousLabel:r.a.createElement(C.a,{icon:L.a}),nextLabel:r.a.createElement(C.a,{icon:L.b}),onPageChange:function(e){var t=e.selected,n=Math.ceil(5*t);a(k(n))},breakClassName:"break-me",containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))},J=a(227),W=a(231),K=a(228),Y=(a(120),function(e){var t=Object(o.b)(),a=Object(n.useState)(""),c=Object(S.a)(a,2),l=c[0],s=c[1],i=function(a){var n;a.preventDefault(),t(k(0)),t((n=l,function(e){e({type:E.setSearchTerm,payload:n})})),t((function(e,t){var a=t().filter.searchTerm,n=t().components.all,r=x(n,a);e({type:v,payload:r})})),e.navigateTo&&e.navigateTo()};return r.a.createElement(J.a,null,r.a.createElement(W.a,{placeholder:"Search for components","aria-label":"Search for components","aria-describedby":"basic-addon2",value:l,onChange:function(e){s(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&i(e)}}),r.a.createElement(J.a.Append,null,r.a.createElement(K.a,{variant:"outline-secondary",onClick:i},void 0!==e.searchButtonText?e.searchButtonText:"Search")))}),G=a(58),Q={item:{height:"100%",minHeight:"180px",borderBottom:"1px solid #f2f2f2"},description:{color:"gray"}},X=function(){var e=Object(o.c)((function(e){return e.query.modifiers})),t="keywords:dhis2"===e[0],a="scope:dhis2"===e[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g content"},r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-4-5 pure-u-lg-4-5 search"},r.a.createElement("div",{className:"l-box"},r.a.createElement(Y,{searchButtonText:"Search"}),a&&r.a.createElement(G.a,{className:"badge",variant:"success"},"You are browsing verified community packages"),t&&r.a.createElement(G.a,{className:"badge",variant:"primary"},"You are browsing unverified community packages"))),r.a.createElement("div",{className:"pure-u-4-5 pure-u-md-4-5 pure-u-lg-4-5"},r.a.createElement("div",{className:"l-box"},r.a.createElement(_,{style:Q}))),r.a.createElement("div",{className:"pure-u-1-5"},r.a.createElement("div",{className:"l-box"}))))},Z=a(43),$=a.n(Z),ee=function(){var e=Object(n.useState)({section:"website-info"}),t=Object(S.a)(e,2),a=t[0],c=t[1],l=function(e,t){e.preventDefault(),c(Object(j.a)(Object(j.a)({},a),{},{section:t}))};Object(n.useEffect)((function(){$.a.highlightAll()}));var o=r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{marginBottom:"25px"}},"DHIS2 SCP Command Line Interface (CLI)"),r.a.createElement("p",null,"The DHIS2 SCP provides a command line interface for verifying components. This command line interface gives developers of components a means to determine if their packages comply to the standards set by the DHIS2 core team."),r.a.createElement("p",null,"The CLI provides a command, ",r.a.createElement("code",{className:"language-bash"},"dhsi2-scp-cli verify"),", that performs the same verification that will be performed as a preqrequisite for component merge requests."),r.a.createElement("p",null,"Currently the verify command will perform the following checks:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Verify that the correct keyword is specified in ",r.a.createElement("code",null,"package.json"),"."),r.a.createElement("li",null,"Verify that linting completes without error.")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/haheskja/scp-boilerplate",rel:"noopener noreferrer",target:"_blank"},"The git repository for the CLI"))),s=r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{marginBottom:"25px"}},"DHIS2 Component Search"),r.a.createElement("p",null,"The DHIS2 Component Search is a website to search for components created by the HISP community."),r.a.createElement("p",null,'There are currently three "types" of searches:'),r.a.createElement("ul",null,r.a.createElement("li",null,"All. This searches the entire npm registry."),r.a.createElement("li",null,"Unverified. This searches the entire npm registry within one particular keyword, e.g. ",r.a.createElement("code",null,"dhis2")," or ",r.a.createElement("code",null,"dhis2-ui")),r.a.createElement("li",null,'Verified. Almost the same as unverified, these are components given a "seal of approval" from the core team')),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/haheskja/scp-website",rel:"noopener noreferrer",target:"_blank"},"The git repository for Component Search")));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g content"},r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-4-5"},r.a.createElement("div",{className:"l-box"},r.a.createElement("h1",null,"Information"),r.a.createElement("div",{className:"pure-g"},r.a.createElement("div",{className:"pure-u-1-4"},r.a.createElement("div",{className:"website-info"},r.a.createElement("a",{href:"/#",onClick:function(e){l(e,"website-info")}},"Component search")),r.a.createElement("div",{className:"cli-info"},r.a.createElement("a",{href:"/#",onClick:function(e){l(e,"cli-info")}},"CLI"))),r.a.createElement("div",{className:"pure-u-3-4"},"website-info"===a.section?s:null,"cli-info"===a.section?o:null))))))},te=(a(121),{searchBox:{width:"calc(100% - 40px)",maxWidth:"620px"},box:{width:"100%",height:"calc(90vh - 80px)",justifyContent:"center",display:"flex",alignItems:"center"},title:{textAlign:"center",color:"white",fontFamily:"Rubik",letterSpacing:"-2px"},titleText:{margin:"0",marginBottom:"10px"},description:{textAlign:"center",color:"rgba(255,255,255,0.7)",marginBottom:"40px",fontWeight:"400",fontStyle:"normal",fontFamily:"Rubik"},content:{marginLeft:"0"}}),ae=function(){var e=Object(i.f)();return Object(n.useEffect)((function(){return document.body.className="landing",function(){document.body.classList.remove("landing")}}),[]),r.a.createElement("div",{className:"pure-g",style:te.content},r.a.createElement("div",{className:"pure-u-1 center",style:te.box},r.a.createElement("div",{style:te.searchBox},r.a.createElement("div",{className:"landing-title",style:te.title},r.a.createElement("h1",{style:te.titleText},"Component Search")),r.a.createElement("div",{className:"description",style:te.description},r.a.createElement("p",null,"Explore components created by the HISP community")),r.a.createElement(Y,{searchButtonText:r.a.createElement(C.a,{icon:L.e}),navigateTo:function(){return e.push("/scp-website/search")}}))))},ne=(a(122),a(88)),re=a.n(ne),ce={resize:"none",width:"70%",borderRadius:"5px",paddingTop:"15px",paddingLeft:"15px"},le=function(e){var t=Object(n.useState)({copySuccess:!1,value:"",hovered:!1}),a=Object(S.a)(t,2),c=a[0],l=a[1],o=Object(n.useRef)(null),s=function(e){c.hovered?(e.target.style.background="",e.target.style.border="",l((function(e){return{hovered:!1}}))):(e.target.style.background="#dbffdb",e.target.style.border="1px solid #00c642",l((function(e){return{hovered:!0}})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("textarea",{"data-tip":"Click to copy command to clipboard",style:ce,readOnly:!0,value:e.value,onMouseOver:function(e){return s(e)},onMouseLeave:function(e){return s(e)},onClick:function(){return o.select(),document.execCommand("copy"),void l((function(e){return{copySuccess:!0}}))},ref:function(e){return o=e}})," ",r.a.createElement(I.a,null)))},oe=function(e){var t,a=Object(n.useState)({packageName:null,packageItem:null,error:null,isLoaded:!1,package:[],readme:null,readmeLoaded:!1,readmeError:null,name:null}),c=Object(S.a)(a,2),l=c[0],o=c[1],s=l.error,i=l.isLoaded,m=l.item,u=l.name,p=l.readme,d=l.readmeError,h=l.readmeLoaded;if(Object(n.useEffect)((function(){var t=!1;return Object(N.a)(O.a.mark((function a(){var n,r,c,l,s,i;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.location.packageName,r=void 0!==n?n:"@material-ui/core",a.prev=2,a.next=5,fetch("https://api.npms.io/v2/package/".concat(encodeURIComponent(r)));case 5:return l=a.sent,a.next=8,l.json();case 8:c=a.sent,!t&&o((function(e){return Object(j.a)(Object(j.a)({},e),{},{isLoaded:!0,item:c,name:r})})),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(2),!t&&o((function(e){return Object(j.a)(Object(j.a)({},e),{},{isLoaded:!0,error:a.t0})}));case 15:return a.prev=15,a.next=18,fetch("https://unpkg.com/".concat(r,"@").concat(c.collected.metadata.version,"/README.md"));case 18:return s=a.sent,a.next=21,s.text();case 21:i=a.sent,!t&&o((function(e){return Object(j.a)(Object(j.a)({},e),{},{readmeLoaded:!0,readme:i})})),a.next=28;break;case 25:a.prev=25,a.t1=a.catch(15),!t&&o((function(e){return Object(j.a)(Object(j.a)({},e),{},{readmeLoaded:!0,readme:null,readmeError:!0})}));case 28:case"end":return a.stop()}}),a,null,[[2,12],[15,25]])})))(),function(){t=!0}}),[e.location]),Object(n.useEffect)((function(){$.a.highlightAll()})),t=h?d?r.a.createElement("div",null,"Error loading readme ..."):r.a.createElement("div",null,r.a.createElement(re.a,{className:"markdown",escapeHtml:!1,source:p})):r.a.createElement("div",null,"README loading ..."),s)return r.a.createElement("div",null,"Error: ",s.message);if(i){var f=m.collected.github.contributors.filter((function(e,t){return t<5}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g content"},r.a.createElement("div",{className:"pure-u-1-1"},r.a.createElement("div",{className:"l-box"},r.a.createElement("h1",null,m.collected.metadata.name),r.a.createElement("span",{"data-tip":new Date(m.collected.metadata.date)},m.collected.metadata.version," \u2022 Published ",P()(m.collected.metadata.date).startOf("day").fromNow()),r.a.createElement(I.a,null))),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-3-5 pure-u-lg-3-5 left-column"},r.a.createElement("div",{className:"l-box"},r.a.createElement("p",null,m.collected.metadata.description),t)),r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-2-5 pure-u-lg-2-5 right-column"},r.a.createElement("div",{className:"l-box"},r.a.createElement("div",{className:"pure-g-r"},r.a.createElement("div",{className:"pure-u-1-1"},r.a.createElement("h5",null,"Install"),r.a.createElement(le,{value:"npm i ".concat(u)})),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"Version"),r.a.createElement("p",null,m.collected.metadata.version)),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"License"),r.a.createElement("p",null,m.collected.metadata.license)),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"Weekly downloads"),r.a.createElement("p",null,m.collected.npm.downloads[1].count.toLocaleString())),r.a.createElement("div",{className:"pure-u-1-2"},r.a.createElement("h5",null,"Issues"),r.a.createElement("p",null,m.collected.github.issues.openCount))),r.a.createElement("h5",null,"NPM"),r.a.createElement(C.a,{icon:L.d})," ",r.a.createElement("a",{className:"source-links",href:m.collected.metadata.links.npm},decodeURIComponent(m.collected.metadata.links.npm)),r.a.createElement("h5",null,"Repository"),r.a.createElement(C.a,{icon:L.c})," ",r.a.createElement("a",{className:"source-links",href:m.collected.metadata.links.repository},decodeURIComponent(m.collected.metadata.links.repository)),r.a.createElement("h5",null,"Last publish"),r.a.createElement("p",{"data-tip":new Date(m.collected.metadata.date)},P()(m.collected.metadata.date).startOf("day").fromNow()),f.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Collaborators"),r.a.createElement("ul",{id:"collaborators"},f.map((function(e){return r.a.createElement("li",{key:e.username},r.a.createElement(D,{username:e.username,avatarSize:{width:"40px"}}))})))):null,void 0!==m.collected.metadata.keywords&&m.collected.metadata.keywords.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Keywords"),r.a.createElement("ul",{id:"keywords"},m.collected.metadata.keywords.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"https://www.npmjs.com/search?q=keywords:".concat(e)},e))})))):null))))}return r.a.createElement("div",{className:"pure-g content"},r.a.createElement("div",{className:"pure-u-1"},r.a.createElement("div",{className:"l-box"},r.a.createElement("div",null,"Loading..."))))},se={padding:"15px 15px 15px 0",img:{width:"100px",marginLeft:"25px"},title:{margin:"15px 0 15px 0"}},ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pure-g content"},r.a.createElement("div",{className:"pure-u-1-1 pure-u-md-4-5"},r.a.createElement("div",{className:"l-box"},r.a.createElement("p",null,"This project is part of the larger research project the DHIS2 Design Lab within HISP UiO."),r.a.createElement("div",{className:"pure-g design-lab",style:se},r.a.createElement("div",{className:"pure-u-1",style:se.title},r.a.createElement("h3",null,"DHIS2 Design Lab")),r.a.createElement("div",{className:"pure-u-3-5 pure-u-md-4-5 pure-u-lg-4-5"},r.a.createElement("p",null,"The DHIS2 Design Lab explores how we within the DHIS2 software ecosystem can facilitate and promote the design and innovation of tools that are usable and provide value to the work of end-users. The knowledge generated through our work is also relevant to research on design and innovation within generic enterprise software ecosystems more generally."),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.mn.uio.no/ifi/english/research/networks/hisp/dhis2-design-lab/"},"Read more.."))),r.a.createElement("div",{className:"pure-u-2-5 pure-u-md-1-5 pure-u-lg-1-5"},r.a.createElement("img",{alt:"dhis2 design lab",style:se.img,src:"/scp-website/img/dhis2-design-lab-logo.png"}))),r.a.createElement("div",{className:"pure-g hisp",style:se},r.a.createElement("div",{className:"pure-u-1",style:se.title}," ",r.a.createElement("h3",null,"Health Information Systems Programme (HISP)")),r.a.createElement("div",{className:"pure-u-4-5"},r.a.createElement("p",null,"HISP is a global movement to strengthen Health Information Systems in Developing countries that started in South Africa in the 1990s. HISP at UiO is one of the leading organisations in this movement and our contribution includes in-country capacity building and implementation support, research, a PhD program, and hosting the core DHIS2 software development team."),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.mn.uio.no/ifi/english/research/networks/hisp/management-team.html"},"Read more.."))))))))},me=(a(202),a(203),a(204),a(59)),ue=a.n(me),pe=a(60),de=a(89),he=a.n(de),fe=a(90),ge=function(e){var t="";e.length>0&&(t+=e.join("+"));return t},Ee=function(){var e=Object(N.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.get("".concat(pe.unpkg.baseUrl,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.packages.searched}));return Object(n.useEffect)((function(){!1===t&&e(function(){var e=Object(N.a)(O.a.mark((function e(t,a){var n,r,c,l,o,s,i,m,u,p,d,f,g,E,v;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().query,r=n.modifiers,c=n.offset,l=ge(r),e.next=4,ue.a.get(pe.npms.baseUrl,{params:{q:l},paramsSerializer:function(e){return he.a.stringify(e,{encode:!1})}});case 4:for(o=e.sent,s=[],i=0;i<o.data.results.length;i++)m=o.data.results[i],s.push(Ee("".concat(m.package.name,"@").concat(m.package.version,"/package.json")));return e.next=9,Promise.all(s).catch((function(e){return console.log(e)}));case 9:for(u=e.sent,p=0;p<u.length;p++)o.data.results[p].packageJSON=Object(j.a)({},u[p]);for(d=[],f=0;f<o.data.results.length;f++)for(g=fe.components,E=0;E<g.length;E++)v={name:g[E].name,export:g[E].export,description:g[E].description,packageIndex:f},d.push(v);t({type:b,payload:d}),t({type:h,payload:{data:o.data,offset:c}});case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),[t,e]),t?r.a.createElement(s.a,null,r.a.createElement(d,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/scp-website",component:ae}),r.a.createElement(i.a,{path:"/scp-website/search",component:X}),r.a.createElement(i.a,{path:"/scp-website/packageinfo",component:oe}),r.a.createElement(i.a,{path:"/scp-website/Information",component:ee}),r.a.createElement(i.a,{path:"/scp-website/contact",component:ie}))):r.a.createElement("p",null,"Fetching components...")},ve=a(10),ye=a(9),ke=["@dhis2/ui-core"],xe=Object(ve.combineReducers)({modifiers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(ye.a)(t.payload);default:return e}},offset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}}}),we=Object(ve.combineReducers)({currPackages:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:var n=Object(ye.a)(t);return 0===a.payload.offset&&(n=new Array(a.payload.data.total)),(e=n).splice.apply(e,[a.payload.offset,a.payload.data.results.length].concat(Object(ye.a)(a.payload.data.results))),n;default:return t}},totalPackages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload.data.total;default:return e}},searched:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return!0;default:return e}}}),Oe=Object(ve.combineReducers)({displayOffset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.setDisplayOffset:return t.payload;default:return e}},searchTerm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.setSearchTerm:return t.payload;default:return e}}}),je=Object(ve.combineReducers)({all:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(ye.a)(t.payload);default:return e}},searched:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(ye.a)(t.payload);default:return e}}}),Ne=Object(ve.combineReducers)({packages:we,query:xe,filter:Oe,components:je}),Se=a(91),Ie=a(92),Ce=Object(ve.createStore)(Ne,Object(Ie.composeWithDevTools)(Object(ve.applyMiddleware)(Se.a)));a(223);l.a.render(r.a.createElement(o.a,{store:Ce},r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null))),document.getElementById("root"))},60:function(e,t){e.exports={npms:{baseUrl:"https://api.npms.io/v2/search?size=50"},unpkg:{baseUrl:"https://unpkg.com"}}},90:function(e){e.exports=JSON.parse('{"language":"react","components":[{"name":"Organizational Unit Tree","export":"OrgUnitTree","description":"A simple OrgUnit Tree","dhis2Version":["32.0.0","32.1.0","33.0.0"]},{"name":"Button","export":"Button","description":"A generic button","dhis2Version":["32.0.0","32.1.0","33.0.0"]},{"name":"Covid-19 Visualizer","export":"CovidVisualizer","description":"Visualizer for Covid-19 data","dhis2Version":["32.0.0","32.1.0","33.0.0"]},{"name":"Headerbar","export":"Headerbar","description":"Just another header bar","dhis2Version":["32.0.0","32.1.0","33.0.0"]},{"name":"Tabs","export":"Tabs","description":"Tabs to structure data","dhis2Version":["32.0.0","32.1.0","33.0.0"]}]}')},95:function(e,t,a){e.exports=a(224)}},[[95,1,2]]]);
//# sourceMappingURL=main.3fd2a310.chunk.js.map