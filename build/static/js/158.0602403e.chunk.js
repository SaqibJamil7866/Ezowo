(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[158],{1688:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t(483),r=t(13),a=t(15),i=t(2),l=t.n(i),o=t(620),d=t(1001),j=t(971),b=t(1078),h=t(98),O=t(10),x=function(e){var c=e.title,t=e.actions,n=e.children,i=e.collapseIcon,x=e.reloadIcon,u=e.removeIcon,m=e.endReload,p=Object(s.useState)(!1),f=Object(a.a)(p,2),v=f[0],g=f[1],C=Object(s.useState)(!0),N=Object(a.a)(C,2),R=N[0],y=N[1],k=Object(s.useState)(!0),z=Object(a.a)(k,2),A=z[0],w=z[1],B={collapse:i||d.a,remove:u||j.a,reload:x||b.a},I=function(e){switch(e){case"collapse":return y(!R);case"remove":return w(!1);case"reload":return g(!0)}},J=function(){g(!1)};Object(s.useEffect)((function(){v&&m(J)}));var F="collapse"===t||t.includes("collapse")?h.C:s.Fragment,S="reload"===t||t.includes("reload")?o.a:s.Fragment;return Object(O.jsx)(S,Object(r.a)(Object(r.a)({},"reload"===t||t.includes("reload")?{blocking:v}:{}),{},{children:Object(O.jsxs)(h.l,{className:l()("card-action",{"d-none":!A}),children:[Object(O.jsxs)(h.p,{children:[Object(O.jsx)(h.v,{tag:"h4",children:c}),Object(O.jsx)("div",{className:"action-icons",children:function(){if(Array.isArray(t))return t.map((function(e,c){var s=B[e];return Object(O.jsx)(s,{className:l()("cursor-pointer",{"me-50":c<t.length-1}),size:15,onClick:function(){return I(e)}},c)}));var e=B[t];return Object(O.jsx)(e,{className:"cursor-pointer",size:15,onClick:function(){return I(t)}})}()})]}),Object(O.jsx)(F,Object(r.a)(Object(r.a)({},"collapse"===t||t.includes("collapse")?{isOpen:R}:{}),{},{children:n}))]})}))};c.default=function(){return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(n.a,{title:"Card Actions",data:[{title:"Cards"},{title:"Card Actions"}]}),Object(O.jsx)(h.ib,{children:Object(O.jsx)(h.B,{sm:"12",children:Object(O.jsx)(x,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(O.jsx)(h.m,{className:"pt-0",children:Object(O.jsxs)(h.mb,{responsive:!0,bordered:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Action"}),Object(O.jsx)("th",{children:"Icon"}),Object(O.jsx)("th",{children:"Details"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Collapse"}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsx)(d.a,{className:"collapse-icon",size:15})}),Object(O.jsx)("td",{children:" Collapse card content using collapse action."})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Refresh Content"}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsx)(b.a,{size:15})}),Object(O.jsx)("td",{children:"Refresh your card content using refresh action."})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Remove Card"}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsx)(j.a,{size:15})}),Object(O.jsx)("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),Object(O.jsxs)(h.ib,{children:[Object(O.jsx)(h.B,{md:"6",sm:"12",children:Object(O.jsx)(x,{title:"Collapse",actions:"collapse",children:Object(O.jsxs)(h.m,{className:"pt-0",children:[Object(O.jsxs)(h.u,{children:["You can create a collapsible content by using our ",Object(O.jsx)("code",{children:"CardAction"})," component and by passing prop"," ",Object(O.jsx)("code",{children:"actions='collapse'"}),"."]}),Object(O.jsxs)(h.u,{className:"mb-0",children:["Click on ",Object(O.jsx)(d.a,{size:15})," to see card collapse in action"]})]})})}),Object(O.jsx)(h.B,{md:"6",sm:"12",children:Object(O.jsx)(x,{title:"Reload",actions:"reload",endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(O.jsxs)(h.m,{className:"pt-0",children:[Object(O.jsxs)(h.u,{children:["To create a re-loadable card pass prop ",Object(O.jsx)("code",{children:"actions='reload'"})," and pass prop"," ",Object(O.jsx)("code",{children:"endReload"})," to end the loading."]}),Object(O.jsxs)(h.u,{className:"mb-0",children:["Click on ",Object(O.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})}),Object(O.jsx)(h.B,{md:"6",sm:"12",children:Object(O.jsx)(x,{title:"Remove",actions:"remove",children:Object(O.jsxs)(h.m,{className:"pt-0",children:[Object(O.jsxs)(h.u,{children:["You can add refresh content action to card by adding class ",Object(O.jsx)("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),Object(O.jsxs)(h.u,{className:"mb-0",children:["Click on ",Object(O.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})})]})]})}}}]);
//# sourceMappingURL=158.0602403e.chunk.js.map