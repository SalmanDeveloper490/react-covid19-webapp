(this["webpackJsonpreact-wep-app"]=this["webpackJsonpreact-wep-app"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/slider-one.1b2e066f.jpg"},function(e,a,t){e.exports=t.p+"static/media/slider-2.7541c305.jpg"},function(e,a,t){e.exports=t.p+"static/media/slider-3.074cb260.jpg"},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),s=t.n(l),c=(t(12),t(13),t(1)),o=t(2),i=t(4),m=t(3),u=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).fetchData=function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(a){var t=a.Countries;e.setState({allCountries:t,countries:t})})).catch((function(e){return console.log(e)}))},e.state={countries:[],searchData:null},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"searchByCountryName",value:function(e){var a=[];if(""===e)a=this.state.allCountries.slice();else{var t=this.state.allCountries.slice(),n=e.toLowerCase();a=t.filter((function(e){var a=new RegExp(n,"i"),t=e.Country.toLowerCase(),r=e.CountryCode.toLowerCase();return t===n||r===n||-1!==t.search(a)||-1!==r.search(a)}))}this.setState({countries:a})}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Country",onChange:function(a){return e.searchByCountryName(a.target.value)}})),r.a.createElement("table",{className:"table border shadow"},r.a.createElement("thead",{className:"bg-dark text-white"},r.a.createElement("tr",null,r.a.createElement("th",null,"Countries"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"NewConfirmed"),r.a.createElement("th",null,"NewDeaths"),r.a.createElement("th",null,"NewRecovered"),r.a.createElement("th",null,"TotalConfirmed"),r.a.createElement("th",null,"TotalDeaths"),r.a.createElement("th",null,"TotalRecovered"))),r.a.createElement("tbody",null,this.state.countries.length?this.state.countries.map((function(e){return r.a.createElement("tr",{key:e.CountryCode},r.a.createElement("td",null,e.Country),r.a.createElement("td",null,new Date(e.Date).toDateString()),r.a.createElement("td",null,e.NewConfirmed),r.a.createElement("td",null,e.NewDeaths),r.a.createElement("td",null,e.NewRecovered),r.a.createElement("td",null,e.TotalConfirmed),r.a.createElement("td",null,e.TotalDeaths),r.a.createElement("td",null,e.TotalRecovered))})):r.a.createElement("tr",null,r.a.createElement("td",null,"Loading..."))))))}}]),t}(n.Component),d=function(){return r.a.createElement("div",{className:"alert alert-dark alert-dismissible fade show mb-0",role:"alert"},r.a.createElement("h3",{className:"text-center lobster"},r.a.createElement("strong",null,"STAY HOME STAY SAFE")),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},h=function(e){Object(i.a)(l,e);var a=Object(m.a)(l);function l(){return Object(c.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{src:t(14),className:"d-block equal-height w-100",alt:"covid-19-slider-one"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:t(15),className:"d-block equal-height w-100",alt:"covid-19-slider-two"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:t(16),className:"d-block equal-height w-100",alt:"covid-19-slider-three"}))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))}}]),l}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("div",{className:"box-shadow py-4 px-2"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-viruses virus-icon"})),r.a.createElement("h2",{className:"lobster"},"What is COVID-19?"),r.a.createElement("p",{className:"combo"},"COVID-19\u202fis\u202fa disease\u202fcaused by a new strain of coronavirus. \u2018CO\u2019 stands for corona, \u2018VI\u2019 for virus, and \u2018D\u2019 for disease. Formerly, this disease was referred to as \u20182019 novel coronavirus\u2019 or \u20182019-nCoV.\u2019 The COVID-19 virus is a new virus linked to the same family of viruses as Severe Acute Respiratory Syndrome (SARS) and some types of common cold."))))),r.a.createElement("div",{className:"container py-5 three-box"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 text-center"},r.a.createElement("div",{className:"box"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-viruses virus-icon"})),r.a.createElement("h2",{className:"lobster"},"What are the symptoms of COVID-19?\u202f "),r.a.createElement("p",{className:"combo"},"The virus is transmitted through direct contact with respiratory droplets of an infected person (generated through coughing and sneezing). Individuals can also be infected from and touching surfaces contaminated with the virus and touching their face (e.g., eyes, nose, mouth). The COVID-19 virus may survive on surfaces for several hours, but simple disinfectants can kill it."))),r.a.createElement("div",{className:"col-md-4 text-center"},r.a.createElement("div",{className:"box"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-viruses virus-icon"})),r.a.createElement("h2",{className:"lobster"},"How does COVID-19 spread?\u202f"),r.a.createElement("p",{className:"combo"},"The virus is transmitted through direct contact with respiratory droplets of an infected person (generated through coughing and sneezing). Individuals can also be infected from and touching surfaces contaminated with the virus and touching their face (e.g., eyes, nose, mouth). The COVID-19 virus may survive on surfaces for several hours, but simple disinfectants can kill it."))),r.a.createElement("div",{className:"col-md-4 text-center"},r.a.createElement("div",{className:"box"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-viruses virus-icon"})),r.a.createElement("h2",{className:"lobster"},"Who is\u202fmost at risk?"),r.a.createElement("p",{className:"combo"},"We are learning more about how\u202fCOVID-19\u202faffects people every day.\u202f\u202fOlder people, and people with chronic medical conditions,\u202fsuch as diabetes and heart disease,\u202fappear to be more at risk of developing severe symptoms.\u202f As this is a new virus, we are still learning about how it affects children. We know it is possible for people of any age to be infected with the virus, but so far there are relatively few cases of COVID-19 reported among children. This is a new virus and we need to learn more about how it affects children. The virus can be fatal in rare cases, so far mainly among older people with pre-existing medical conditions."))))),r.a.createElement("div",{className:"container pb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"box-shadow py-4 px-3"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-viruses virus-icon"})),r.a.createElement("h2",{className:"lobster"},"How can the spread of COVID-19 be slowed down or prevented?"),r.a.createElement("p",{className:"combo"},"As with other respiratory infections like the flu or the common cold, public health measures are critical to slow the spread of illnesses. Public health measures are everyday preventive actions that include:"),r.a.createElement("ul",{className:"covid-preventions"},r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-check"})," Staying home when sick"),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-check"})," Covering mouth and nose with flexed elbow or tissue when coughing or sneezing. Dispose of used tissue immediately"),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-check"})," Washing hands often with soap and water"),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-check"})," cleaning frequently touched surfaces and objects. As we learn more about COVID-19 public health officials may recommend additional actions.")),r.a.createElement("p",{className:"combo"},"As we learn more about COVID-19 public health officials may recommend additional actions."))))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("footer",{className:"footer mt-auto py-3 alert-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"text-muted lobster text-center"},"Covid 19 Tracker"))))}}]),t}(n.Component);var E=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(h,null),r.a.createElement(u,null),r.a.createElement(f,null),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a0283277.chunk.js.map