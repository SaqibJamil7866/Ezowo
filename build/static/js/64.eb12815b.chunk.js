(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[64],{1557:function(e,t,c){"use strict";c.r(t);var a=c(71),n=c(17),s=c(15),r=c(9),i=c(135),l=c(1),o=c(5),u=c.n(o),j=c(481),b=c(2),d=c.n(b),h=c(483),m=c(913),O=c(98),g=(c(914),c(10));t.default=function(){var e=Object(l.useState)(null),t=Object(s.a)(e,2),c=t[0],o=t[1],b=Object(l.useState)([]),f=Object(s.a)(b,2),x=f[0],p=f[1],v=Object(l.useState)(""),k=Object(s.a)(v,2),N=k[0],w=k[1];Object(l.useEffect)((function(){u.a.get("/faq/data/category").then((function(e){return o(e.data)}))}),[]);var S=Object(r.g)(),q=function(e){var t=e.item,c=j[t.icon];return Object(g.jsx)(O.B,{className:"kb-search-content",md:"4",sm:"6",children:Object(g.jsx)(O.l,{children:Object(g.jsxs)(O.m,{children:[Object(g.jsxs)("h6",{className:"kb-title",children:[Object(g.jsx)(c,{size:20,className:d()("me-50",Object(n.a)({},t.iconColor,t.iconColor))}),Object(g.jsxs)("span",{children:[t.title," ","(".concat(t.questions.length,")")]})]}),Object(g.jsx)(O.O,{className:"list-group-circle mt-2",children:t.questions.map((function(e){return Object(g.jsx)(O.P,{tag:i.b,to:"/pages/knowledge-base/".concat(S.category,"/").concat(e.slug),className:"text-body",children:e.question},e.id)}))})]})})})};return Object(g.jsxs)(l.Fragment,{children:[Object(g.jsx)(h.a,{title:"Knowledge Base",data:[{title:"Pages"},{title:"Knowledge Base"},{title:"Category"}]}),Object(g.jsx)(m.a,{searchTerm:N,setSearchTerm:w,handleFilter:function(e){var t=e.target.value,n=e.target.value.toLowerCase();w(e.target.value);var s=[];t.length&&(s=c.filter((function(e){return e.title.toLowerCase().includes(n)||e.questions.filter((function(e){return e.question.toLowerCase().includes(n)})).length}))),p(Object(a.a)(s))}}),null!==c?Object(g.jsx)("div",{id:"knowledge-base-category",children:Object(g.jsx)(O.ib,{className:"kb-search-content-info match-height",children:(N.length?x:c).map((function(e){return Object(g.jsx)(q,{item:e},e.id)}))})}):null]})}},726:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/banner.06ea9907.png"},913:function(e,t,c){"use strict";var a=c(1081),n=c(98),s=c(10);t.a=function(e){var t=e.searchTerm,r=e.setSearchTerm,i=e.handleFilter;return Object(s.jsx)("div",{id:"knowledge-base-search",children:Object(s.jsx)(n.l,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(c(726).default,")")},children:Object(s.jsxs)(n.m,{className:"text-center",children:[Object(s.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(s.jsxs)(n.u,{className:"mb-2",children:["Popular searches: ",Object(s.jsx)("span",{className:"fw-bolder",children:"Sales automation, Email marketing"})]}),Object(s.jsx)(n.H,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(s.jsxs)(n.L,{className:"input-group-merge",children:[Object(s.jsx)(n.M,{children:Object(s.jsx)(a.a,{size:14})}),Object(s.jsx)(n.K,{value:t,onChange:function(e){return function(e){i?i(e):r(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},914:function(e,t,c){}}]);
//# sourceMappingURL=64.eb12815b.chunk.js.map