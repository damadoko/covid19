(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{104:function(e,t,a){},12:function(e,t,a){e.exports={Menu:"Menu_Menu__3nyFD",NavLink:"Menu_NavLink__1WnNL",active:"Menu_active__3RsBp"}},220:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),l=a.n(c);a(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(22),s=a(4),u=a(83),i=a(9),m=a(15),d=a(84),p=a.n(d),v=a(53),f=a.n(v),h=function(e){return e.children},E=Object(s.b)((function(e){return{lastUpdate:e.lastUpdate}}),null)((function(e){var t=e.lastUpdate;return r.a.createElement(h,null,r.a.createElement("div",{className:f.a.Logo},r.a.createElement("p",null,r.a.createElement("strong",null,"Covid19")),r.a.createElement("p",null,"LIVE UPDATE")),r.a.createElement("div",{className:f.a.LogoFixed},r.a.createElement("p",null,"STAY HOME"),r.a.createElement("h1",null,"COVID-19"),r.a.createElement("span",null,"Lasted Update: ",t)))})),w=a(30),y=a(31),b=a(12),N=a.n(b),C=function(){return r.a.createElement("div",{className:N.a.Menu},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/",exact:!0,className:N.a.NavLink,activeClassName:N.a.active},r.a.createElement(w.a,{size:"2x",icon:y.b})),r.a.createElement("span",null)),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/country/Vietnam",className:N.a.NavLink,activeClassName:N.a.active},r.a.createElement(w.a,{size:"2x",icon:y.c})),r.a.createElement("span",null)),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/chart",className:N.a.NavLink,activeClassName:N.a.active},r.a.createElement(w.a,{size:"2x",icon:y.a})),r.a.createElement("span",null)),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/prevention",className:N.a.NavLink,activeClassName:N.a.active},r.a.createElement(w.a,{size:"2x",icon:y.d})),r.a.createElement("span",null)))},O=a(40),_=a.n(O),x=function(e){return r.a.createElement("div",{className:_.a.Filter},r.a.createElement(i.b,{to:"/home",exact:!0,activeClassName:_.a.active},"OVERVIEW",r.a.createElement("span",null)),r.a.createElement(i.b,{to:"/country/Vietnam",activeClassName:_.a.active},"EXPLORER",r.a.createElement("span",null)))},g=function(e){return r.a.createElement("div",{className:p.a.Layout},r.a.createElement(E,null),r.a.createElement(x,null),r.a.createElement("main",null,e.children),r.a.createElement(C,null))},j=a(18),D=a(19),L=a(21),A=a(20),k=a(86),S=a.n(k),H=a(87),F=a.n(H),I=function(e){var t=e.total,a=e.newCase,n=e.recovered,c=e.deaths,l=e.newDeaths;return r.a.createElement("div",{className:F.a.OverallReport},r.a.createElement("span",null,"Live"),r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement("span",null,"(",a,")"),r.a.createElement("p",null,"TOTAL CASE")),r.a.createElement("div",null,r.a.createElement("span",null,n),r.a.createElement("p",null,"RECOVERED")),r.a.createElement("div",null,r.a.createElement("span",null,c),r.a.createElement("span",null," (",l,")"),r.a.createElement("p",null,"DEATHS")))},R=a(57),W=a.n(R),T=a(88),M=a.n(T),z=function(e){var t=e.country,a=e.confirmed;return r.a.createElement("div",{className:M.a.Report},r.a.createElement("div",null,t),r.a.createElement("div",null,r.a.createElement("p",null,a),r.a.createElement("p",null,"Confirmed")))},U=Object(s.b)((function(e){return{top3Country:e.overall.top3Country}}),null)((function(e){var t=e.history,a=e.top3Country,n=a.map((function(e,a){return r.a.createElement("div",{onClick:function(){return a=e.country,void t.push({pathname:"/country/".concat(a)});var a},key:a},r.a.createElement(z,{country:e.country,confirmed:e.cases.total}))}));return r.a.createElement(h,null,r.a.createElement("div",{className:W.a.Span},r.a.createElement("span",null,"HIGHEST CASES"),r.a.createElement("span",null,"By Country, Territory or Area")),r.a.createElement("div",{className:W.a.Reports},n))})),G=a(89),V=a.n(G),B=a(90),P=a.n(B),q=function(e){var t=e.title,a=e.des,n=e.img,c=e.url,l=e.time,o=e.src;return r.a.createElement("div",{className:P.a.Article},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("span",null,o),r.a.createElement("a",{href:c}," ",t," "),r.a.createElement("span",null,l),r.a.createElement("p",null,a))},J=a(91),X=a.n(J),K=function(e){var t=e.title,a=e.des,n=e.img,c=e.url,l=e.time,o=e.src;return r.a.createElement("div",{className:X.a.HighLight},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("span",null,o),r.a.createElement("a",{href:c}," ",t," "),r.a.createElement("span",null,l),r.a.createElement("p",null,a))},Y=Object(s.b)((function(e){return{newsSize:e.defaultFetchNewsNumber}}),null)((function(e){var t=e.newsArr,a=e.newsCount,n=e.moreNews,c=e.hideNews,l=e.newsSize,o=0===t.length?[{title:"No data available",description:"No data available",urlToImage:"No data available",url:"No data available",publishedAt:"No data available",source:{name:"No data available"}}]:t,s=o.slice(0,1),u=o.slice(1,a).map((function(e,t){return r.a.createElement(q,{key:t,title:e.title,des:e.description,img:e.urlToImage,url:e.url,time:e.publishedAt,src:e.source.name})}));return r.a.createElement("div",{className:V.a.News},r.a.createElement("span",null,"HIGHLIGHT"),r.a.createElement(K,{title:s[0].title,des:s[0].description,img:s[0].urlToImage,url:s[0].url,time:s[0].publishedAt,src:s[0].source.name}),r.a.createElement("div",null,u),a===l?r.a.createElement("span",{onClick:c},"HIDE"):r.a.createElement("span",{onClick:n},"SEE MORE"))})),$=a(92),Q=a(94),Z=a.n(Q),ee=function(e){Object(L.a)(a,e);var t=Object(A.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:Z.a.Chart},r.a.createElement($.a,{data:e,options:{title:{display:!0,text:"WORLDWIDE NEW CASES",position:"bottom",fontSize:20},legend:{display:!0,position:"bottom"}}}))}}]),a}(n.Component),te=Object(s.b)((function(e){return{data:e.overall.worldChartData}}),null)(ee),ae=a(10),ne=a.n(ae),re=a(25),ce=a(26),le=a.n(ce),oe=function(e,t){return{type:"storeCountryNews",countryName:e,countryNews:t}},se=function(e){return{type:"storeStatistics",dataFetch:e}},ue=function(e){return{type:"moreNews",location:e}},ie=function(e){return{type:"hideNews",location:e}},me=function(e,t){return function(){var a=Object(re.a)(ne.a.mark((function a(n){var r,c,l,o,s,u,i;return ne.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,le()({method:"GET",url:"https://covid-193.p.rapidapi.com/statistics",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd"}});case 2:return r=a.sent,a.next=5,r.data.response;case 5:return c=a.sent,a.next=8,c.sort((function(e,t){return t.cases.total-e.cases.total}));case 8:return l=a.sent,a.next=11,n(se(l));case 11:return"a0e915657c944848b87ab3fbf85cf5a4",o=(new Date).toISOString().slice(0,10),s=t,a.next=16,le()({method:"GET",url:"https://newsapi.org/v2/everything?q=COVID ".concat(e,"&from=").concat(o,"&sortBy=publishedAt&apiKey=").concat("a0e915657c944848b87ab3fbf85cf5a4","&pageSize=").concat(s,"&page=1")});case 16:return u=a.sent,a.next=19,u.data.articles;case 19:if(i=a.sent,!e){a.next=25;break}return a.next=23,n(oe(e,i));case 23:a.next=27;break;case 25:return a.next=27,n({type:"storeWorldNews",newsFetch:i});case 27:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},de=function(){return function(){var e=Object(re.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le()({method:"GET",url:"https://covid-193.p.rapidapi.com/countries",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd"}});case 2:return a=e.sent,e.next=5,a.data.response;case 5:return n=e.sent,e.next=8,t({type:"storeCountryName",namesFetch:n});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=Object(re.a)(ne.a.mark((function e(t,a){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,function(){var e=Object(re.a)(ne.a.mark((function e(t){var a,n,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le()({method:"GET",url:"https://covid-193.p.rapidapi.com/statistics",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd"}});case 2:return a=e.sent,e.next=5,a.data.response;case 5:return n=e.sent,e.next=8,n.sort((function(e,t){return t.cases.total-e.cases.total}));case 8:return r=e.sent,e.next=11,t(se(r));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 2:return e.next=4,de();case 4:return e.next=6,me(t,a);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ve=function(e){Object(L.a)(a,e);var t=Object(A.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchWorldNews(),this.props.fetchWorldHistory()}},{key:"render",value:function(){var e=this.props,t=e.overallData,a=e.newsArr,n=e.newsCount,c=e.onMoreNews,l=e.onHideNews;return r.a.createElement("div",{className:S.a.WorldOverall},r.a.createElement(I,{total:t.cases.total,newCase:t.cases.new,recovered:t.cases.recovered,deaths:t.deaths.total,newDeaths:t.deaths.new}),r.a.createElement(te,null),r.a.createElement(U,this.props),r.a.createElement(Y,{newsArr:a,newsCount:n,moreNews:c,hideNews:l}))}}]),a}(n.Component),fe=Object(s.b)((function(e){return{overallData:e.overall.overallData,newsArr:e.overall.worldHotNews,newsCount:e.overall.worldNewsCount}}),(function(e){return{onMoreNews:function(){return e(ue("world"))},onHideNews:function(){return e(ie("world"))},fetchWorldNews:function(){return e(me(null,7))},fetchWorldHistory:function(){return e(function(){var e=Object(re.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le()({method:"GET",url:"https://coronavirus-map.p.rapidapi.com/v1/spots/summary",headers:{"x-rapidapi-host":"coronavirus-map.p.rapidapi.com","x-rapidapi-key":"0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd"}});case 2:return a=e.sent,e.next=5,a.data.data;case 5:return n=e.sent,e.next=8,t({type:"storeHistory",historyFetch:n});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(ve),he=a(95),Ee=a.n(he),we=a(96),ye=a.n(we),be=function(e){var t=e.countryName,a=e.onSelectCountry,n=e.countryNameArr,c=e.selectedData,l=n.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}));return r.a.createElement(h,null,r.a.createElement("div",{className:ye.a.CountryInfo},r.a.createElement("p",null,"Country / Region"),r.a.createElement("select",{value:t&&t?t:"Afghanistan",onChange:a},l)),r.a.createElement(I,{total:c.cases.total,newCase:c.cases.new,recovered:c.cases.recovered,deaths:c.deaths.total,newDeaths:c.deaths.new}))},Ne=function(e){Object(L.a)(a,e);var t=Object(A.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchWorldNames(),this.props.onUserSelect(this.props.match.params.name,this.props.sizeNews)}},{key:"render",value:function(){var e=this.props,t=e.history,a=e.match,n=e.countryNameArr,c=e.selectedData,l=e.onUserSelect,o=e.sizeNews,s=e.newsArr,u=e.newsCount,i=e.onMoreNews,m=e.onHideNews;return r.a.createElement("div",{className:Ee.a.CountryDetail},r.a.createElement(be,{countryName:a.params.name,onSelectCountry:function(e){t.push({pathname:"/country/".concat(e.target.value)}),l(e.target.value,o)},countryNameArr:n,selectedData:c}),r.a.createElement(Y,{newsArr:s,newsCount:u,moreNews:i,hideNews:m}))}}]),a}(n.Component),Ce=Object(s.b)((function(e){return{newsArr:e.selected.selectedHotNews,newsCount:e.selected.selectedNewsCount,sizeNews:e.selected.defaultFetchNewsNumber,countryNameArr:e.overall.countryNames,selectedData:e.selected.selectedData,selectCountry:e.selected.selectedCountry}}),(function(e){return{onMoreNews:function(){return e(ue("selected"))},onHideNews:function(){return e(ie("selected"))},onUserSelect:function(t,a){return e(me(t,a))},fetchWorldNames:function(){return e(de())},fetchInitData:function(){return e(pe)}}}))(Ne),Oe=a(97),_e=a.n(Oe),xe=function(){return r.a.createElement("div",{className:_e.a.Prevention},r.a.createElement("h2",null,r.a.createElement("span",null,"5")," ",r.a.createElement("span",null,"actions")," to protect yourself"),r.a.createElement("ul",null,r.a.createElement("li",null,"Wash your hands frequently.",r.a.createElement("span",null,"1")),r.a.createElement("li",null,"Maintain social distancing at least 1 metre (3 feets).",r.a.createElement("span",null,"2")),r.a.createElement("li",null,"Avoid touching eyes, nose and mouth.",r.a.createElement("span",null,"3")),r.a.createElement("li",null,"Practice respiratory hygiene.",r.a.createElement("span",null,"4")),r.a.createElement("li",null,"If you have ",r.a.createElement("span",null,"Fever, cough and difficulty breathing")," , seek medical care early.",r.a.createElement("span",null,"5"))))},ge=function(e){return r.a.createElement(g,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/chart",component:te}),r.a.createElement(m.b,{path:"/country",exact:!0,component:Ce}),r.a.createElement(m.b,{path:"/country/:name",exact:!0,component:Ce}),r.a.createElement(m.b,{path:"/prevention",exact:!0,component:xe}),r.a.createElement(m.b,{path:"/home",render:function(e){return r.a.createElement(fe,e)}}),r.a.createElement(m.a,{from:"/",to:"/home"})))},je=a(98),De=a(3),Le={lastUpdate:null,defaultFetchNewsNumber:7,overall:{sortedData:[{country:"Loading",cases:{new:0,total:0,recovered:0},deaths:{total:0,new:0}}],countryNames:["Loading"],overallData:{cases:{new:0,total:0,recovered:0},deaths:{total:0,new:0}},worldHotNews:[{source:{name:"Loading"}},{source:{name:"Loading"}},{source:{name:"Loading"}}],worldNewsCount:3,top3Country:[],worldChartData:{labels:["10-4","11-4","12-4","13-4","14-4","15-4","16-4","17-4"],datasets:[{label:"Cases",data:[1561234123,1652353243,1731254745,1812345325,1875368544,1953472354,2034346334,2112343634,2235365755]}]}},selected:{selectedCountry:"Afghanistan",selectedData:{cases:{new:0,total:0,recovered:0},deaths:{total:0,new:0}},selectedHotNews:[{source:{name:"Loading"}},{source:{name:"Loading"}},{source:{name:"Loading"}}],selectedNewsCount:3}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0,a=e.overall.worldNewsCount,n=e.selected.selectedNewsCount;switch(t.type){case"storeStatistics":var r=t.dataFetch.filter((function(e){return"All"===e.country})),c=t.dataFetch.filter((function(e){return"All"!==e.country&&"Europe"!==e.country&&"Asia"!==e.country&&"North-America"!==e.country&&"South-America"!==e.country&&"Africa"!==e.country})).slice(0,3);return Object(De.a)({},e,{lastUpdate:r[0].time,overall:Object(De.a)({},e.overall,{overallData:r[0],top3Country:c,sortedData:t.dataFetch})});case"storeWorldNews":return Object(De.a)({},e,{overall:Object(De.a)({},e.overall,{worldHotNews:t.newsFetch})});case"storeHistory":var l=Object.keys(t.historyFetch).map((function(e){return e.slice(6)})).slice(0,30).reverse(),o=Object.values(t.historyFetch).map((function(e){return e.total_cases})).slice(0,30).reverse();return Object(De.a)({},e,{overall:Object(De.a)({},e.overall,{worldChartData:Object(De.a)({},e.overall.worldChartData,{labels:l,datasets:[].concat(Object(je.a)(e.overall.worldChartData.datasets.filter((function(e){return"Cases"!==e.label}))),[{label:"Cases",data:o}])})})});case"storeCountryName":return Object(De.a)({},e,{overall:Object(De.a)({},e.overall,{countryNames:t.namesFetch})});case"storeCountryNews":var s={cases:{new:0,total:0,recovered:0},deaths:{total:0,new:0}},u=e.overall.sortedData.filter((function(e){return e.country===t.countryName}));return Object(De.a)({},e,{selected:Object(De.a)({},e.selected,{selectedData:void 0!==u[0]?u[0]:s,selectedHotNews:t.countryNews,selectedCountry:t.countryName,selectedNewsCount:3})});case"moreNews":return Object(De.a)({},e,{overall:Object(De.a)({},e.overall,{worldNewsCount:"world"===t.location?a+2:a}),selected:Object(De.a)({},e.selected,{selectedNewsCount:"selected"===t.location?n+2:n})});case"hideNews":return Object(De.a)({},e,{overall:Object(De.a)({},e.overall,{worldNewsCount:"world"===t.location?3:a}),selected:Object(De.a)({},e.selected,{selectedNewsCount:"selected"===t.location?3:n})});default:return e}},ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,Se=Object(o.d)(Ae,ke(Object(o.a)(u.a)));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:Se},r.a.createElement(i.a,null,r.a.createElement(ge,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,a){e.exports={Filter:"Filter_Filter__naxav",active:"Filter_active__3J_O9"}},53:function(e,t,a){e.exports={Logo:"Logo_Logo__3ME4O",LogoFixed:"Logo_LogoFixed__17C7f"}},57:function(e,t,a){e.exports={Reports:"Reports_Reports__3H04n",Span:"Reports_Span__3mj4B"}},84:function(e,t,a){e.exports={Layout:"Layout_Layout__2BpO9"}},86:function(e,t,a){e.exports={WorldOverall:"WorldOverall_WorldOverall__3dIiJ"}},87:function(e,t,a){e.exports={OverallReport:"OverallReport_OverallReport__2cDyd"}},88:function(e,t,a){e.exports={Report:"Report_Report__3hpTq"}},89:function(e,t,a){e.exports={News:"News_News__K7FI0"}},90:function(e,t,a){e.exports={Article:"Article_Article__27NGG"}},91:function(e,t,a){e.exports={HighLight:"HighLight_HighLight__2Cnoe"}},94:function(e,t,a){e.exports={Chart:"Chart_Chart__24yze"}},95:function(e,t,a){e.exports={CountryDetail:"CountryDetail_CountryDetail__2ADEc"}},96:function(e,t,a){e.exports={CountryInfo:"CountryInfo_CountryInfo__A3fBx"}},97:function(e,t,a){e.exports={Prevention:"Prevention_Prevention__3Y6Nq"}},99:function(e,t,a){e.exports=a(220)}},[[99,1,2]]]);
//# sourceMappingURL=main.480a4789.chunk.js.map