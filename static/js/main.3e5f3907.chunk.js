(this["webpackJsonpreact-job-listings"]=this["webpackJsonpreact-job-listings"]||[]).push([[0],[,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdQTFRFAAAA////////////////////////////////////////////////rj1KOQAAAA10Uk5TAEHDSP/+XPD9WQPvS53uA70AAABxSURBVHicY2CgPRAyAFPMilC+ShiYSnWC8k3dE4AkW0kzlM9WUrmAgWu6uwHMgHTvUwxrtpTBDeTcspNhtvcEOJ/rtHtayZ4FCBtXlpS7z0J2QrpLGQMePpp6dPPQ7UNzD7p70f2jAmFYwPyLHh60BAD4TSZjCR3p2QAAAABJRU5ErkJggg=="},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(6),i=a.n(l),r=(a(13),a(2)),c=a(4),s=function(){return n.a.createElement("div",{className:"header"})},g=function(e){var t=e.data,a=e.addTag,o=e.tagList,l=t.featured?"job-listing--featured":null;return n.a.createElement("div",{className:"job-listing ".concat(l||"")},n.a.createElement("div",{className:"job-listing__logo"},n.a.createElement("img",{src:"/react-job-listings"+t.logo,alt:"".concat(t.company," Logo")})),n.a.createElement("div",{className:"job-listing__details"},n.a.createElement("div",{className:"job-listing__company"},t.company," ",t.new?n.a.createElement("span",{className:"job-listing__highlight job-listing__highlight--new"},n.a.createElement("span",null,"new!")):null,t.featured?n.a.createElement("span",{className:"job-listing__highlight job-listing__highlight--featured"},n.a.createElement("span",null,"featured")):null),n.a.createElement("div",{className:"job-listing__title"},t.position),n.a.createElement("div",{className:"job-listing__meta"},n.a.createElement("div",{className:"job-listing__meta-item"},t.postedAt),n.a.createElement("div",{className:"job-listing__meta-item"},t.contract),n.a.createElement("div",{className:"job-listing__meta-item"},t.location))),n.a.createElement("div",{className:"job-listing__tags"},o.map((function(e){return n.a.createElement("button",{className:"job-listing__tag",key:e,onClick:function(){return a(e)}},e)}))))},m=function(e){var t=e.listings,a=e.addTag,o=e.filters;return n.a.createElement("main",{className:"jobs"},t.map((function(e){for(var t=e.languages||[],l=e.tools||[],i=[e.role,e.level].concat(Object(r.a)(t),Object(r.a)(l)),c=0;c<o.length;c++)if(-1===i.indexOf(o[c]))return null;return n.a.createElement(g,{data:e,key:e.id,addTag:a,tagList:i})})))},u=a(7),d=a.n(u),p=function(e){var t=e.filters,a=e.clearFilters,o=e.removeFilter,l=t.length?"filter--active":null;return n.a.createElement("div",{className:"filter ".concat(l||"")},n.a.createElement("div",{className:"filter__bar"},n.a.createElement("div",{className:"filter__bar-content"},n.a.createElement("div",{className:"filter__tags"},t.map((function(e){return n.a.createElement("div",{className:"filter__tag",key:e},n.a.createElement("div",{className:"filter__tag-name"},e),n.a.createElement("button",{className:"filter__tag-remove","aria-label":"remove ".concat(e," filter"),onClick:function(){o(e)}},n.a.createElement("img",{src:d.a,alt:"close button"})))}))),n.a.createElement("button",{className:"filter__clear",onClick:function(){return a()}},"Clear"))))},v=(a(14),[{id:1,company:"Photosnap",logo:"/logos/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"]},{id:2,company:"Manage",logo:"/logos/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"/logos/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"/logos/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"]},{id:5,company:"Loop Studios",logo:"/logos/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"FullStack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"/logos/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",tools:["RoR"]},{id:7,company:"Shortly",logo:"/logos/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"/logos/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue, Sass"]},{id:9,company:"Eyecam Co.",logo:"/logos/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"/logos/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}]);var A=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(o.useState)([]),g=Object(c.a)(i,2),u=g[0],d=g[1];return Object(o.useEffect)((function(){setTimeout((function(){l(v)}),200)}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(s,null),n.a.createElement(p,{filters:u,clearFilters:function(){d([])},removeFilter:function(e){var t=u.filter((function(t){return t!==e}));d(t)}}),n.a.createElement(m,{listings:a,addTag:function(e){if(-1===u.indexOf(e)){var t=[].concat(Object(r.a)(u),[e]);d(t)}},filters:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.3e5f3907.chunk.js.map