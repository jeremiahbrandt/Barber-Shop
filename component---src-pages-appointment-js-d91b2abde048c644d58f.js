(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{h90j:function(e,t,a){},"i/5Z":function(e,t,a){"use strict";a.r(t);a("a1Th"),a("Btvt"),a("KKXr");var n=a("q1tI"),s=a.n(n),c=a("Bl7J"),l=(a("h90j"),a("r3o+")),r=function(){for(var e=[],t=0,a=8;a<=16;a++)for(var n=0;n<60;n+=15){var s=n;s<10&&(s=0+n.toString()),e[t]=a+":"+s,t++}return e},i=function(){var e=Object(n.useState)(!0),t=e[0],a=(e[1],Object(n.useState)(!1)),c=a[0],i=a[1],o=Object(n.useState)(!1),m=o[0],u=o[1],v=Object(n.useState)(!1),d=v[0],p=v[1],f=Object(n.useState)(""),b=f[0],E=f[1],g=Object(n.useState)(""),N=g[0],S=g[1],h=Object(n.useState)("service"),j=h[0],O=h[1],w=l.data.allFile.nodes[0].childMarkdownRemark.frontmatter.services.split(","),k=r(),y=new Date("2020-05-11"),M=y.getFullYear().toString()+"-"+y.getMonth().toString()+"-"+y.getDate().toString();return Object(n.useEffect)((function(){console.log(M)}),[]),s.a.createElement("form",{className:"reservation-form"},s.a.createElement("label",{className:"section date "+(t?"active":"")},s.a.createElement("div",{className:"description"},"Available Days"),s.a.createElement("input",{type:"date",name:"date",className:"input",value:b,onChange:function(e){var t=e.target.value;E(t),console.log(Date(t)),i(t.length>0)}})),s.a.createElement("label",{className:"section time "+(c?"active":"")},s.a.createElement("div",{className:"description"},"Available times"),s.a.createElement("select",{value:N,name:"time",className:"input",onChange:function(e){var t=e.target.value;S(t),u("default"!==t)},disabled:!c},s.a.createElement("option",{value:"default"}),k.map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)})))),s.a.createElement("label",{className:"section services "+(m?"active":"")},s.a.createElement("div",{className:"description"},"Service"),s.a.createElement("select",{name:"services",className:"input",value:j,onChange:function(e){var t=e.target.value;O(t),p(t.length>0)},disabled:!m},w.map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)})))),s.a.createElement("input",{type:"submit",value:"Submit",className:"submit "+(d?"active":""),disabled:!d}))};t.default=function(){return Object(n.useEffect)((function(){}),[]),s.a.createElement(c.a,{className:"appointment-page"},s.a.createElement("div",{className:"business-hours"},s.a.createElement("div",{className:"title"},"Normal Business Hours"),s.a.createElement("div",{className:"content"},"Mon - Fri 8am - 8pm"),s.a.createElement("div",{className:"content"},"Sat - Sun 10am - 6pm")),s.a.createElement("div",{className:"appointments-title"},"Reserve Your Time Today!"),s.a.createElement(i,null))}},"r3o+":function(e){e.exports=JSON.parse('{"data":{"allFile":{"nodes":[{"childMarkdownRemark":{"frontmatter":{"services":"Haircut, Straight-Razor Shave, Beard & Mustache Trim, Facial Massage, Shoeshine"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-appointment-js-d91b2abde048c644d58f.js.map