(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[79],{1577:function(e,t,n){"use strict";n.r(t);var s=n(13),c=n(71),r=n(15),l=n(1),i=n(951),a=n(138),j=n(759),o=n(1023),b=n(494),h=n(98),u=(n(911),n(10));t.default=function(){var e=Object(l.useState)(""),t=Object(r.a)(e,2),n=t[0],d=t[1],O=Object(l.useState)(""),x=Object(r.a)(O,2),m=x[0],f=x[1],p=Object(l.useState)([]),g=Object(r.a)(p,2),v=g[0],N=g[1],y=Object(l.useState)([]),w=Object(r.a)(y,2),S=w[0],k=w[1],C=Object(j.a)({multiple:!1,onDrop:function(e){var t=new FileReader;t.onload=function(){var n=t.result,s=Object(i.a)(n,{type:"binary"});s.SheetNames.forEach((function(t){!function(e,t){N(e),d(t)}(i.b.sheet_to_row_object_array(s.Sheets[t]),e[0].name)}))},e.length&&e[0].name.endsWith("xlsx")?t.readAsBinaryString(e[0]):a.b.error((function(){return Object(u.jsxs)("p",{className:"mb-0",children:["You can only upload ",Object(u.jsx)("span",{className:"fw-bolder",children:".xlsx"}),", ",Object(u.jsx)("span",{className:"fw-bolder",children:".xls"})," &"," ",Object(u.jsx)("span",{className:"fw-bolder",children:".csv"})," Files!."]})}),{style:{minWidth:"380px"}})}}),B=C.getRootProps,J=C.getInputProps,L=v.length?v.map((function(e,t){return 0===t?Object(c.a)(Object.keys(e)):null})):[],_=m.length?S:v.length&&!m.length?v:null;return Object(u.jsxs)(l.Fragment,{children:[Object(u.jsx)(b.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/SheetJS/sheetjs"}),Object(u.jsxs)(h.ib,{className:"import-component",children:[Object(u.jsx)(h.B,{sm:"12",children:Object(u.jsx)(h.l,{children:Object(u.jsx)(h.m,{children:Object(u.jsx)(h.ib,{children:Object(u.jsx)(h.B,{sm:"12",children:Object(u.jsxs)("div",Object(s.a)(Object(s.a)({},B({className:"dropzone"})),{},{children:[Object(u.jsx)("input",Object(s.a)({},J())),Object(u.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-column",children:[Object(u.jsx)(o.a,{size:64}),Object(u.jsx)("h5",{children:"Drop Files here or click to upload"}),Object(u.jsxs)("p",{className:"text-secondary",children:["Drop files here or click"," ",Object(u.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"browse"})," ","thorough your machine"]})]})]}))})})})})}),v.length?Object(u.jsx)(h.B,{sm:"12",children:Object(u.jsxs)(h.l,{children:[Object(u.jsxs)(h.p,{className:"justify-content-between flex-wrap",children:[Object(u.jsx)(h.v,{tag:"h4",children:n}),Object(u.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[Object(u.jsx)(h.N,{for:"search-input",className:"me-1",children:"Search"}),Object(u.jsx)(h.K,{id:"search-input",type:"text",bsSize:"sm",value:m,onChange:function(e){return function(e){var t=v,n=[],s=e.target.value;if(f(s),!s.length)return null;n=t.filter((function(e){var t=Object.keys(e),n=t.filter((function(t){return e[t].toString().toLowerCase().startsWith(s.toLowerCase())})),c=t.filter((function(t){return e[t].toString().toLowerCase().includes(s.toLowerCase())}));return n.length?e[n]:!n&&c.length?e[c]:null})),k(n),f(s)}(e)}})]})]}),Object(u.jsxs)(h.mb,{className:"table-hover-animation",responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:L.length?L[0].map((function(e,t){return Object(u.jsx)("th",{children:e},t)})):null})}),Object(u.jsx)("tbody",{children:null!==_&&_.length?_.map((function(e,t){var n=Object.keys(e).map((function(t,n){return Object(u.jsx)("td",{children:e[t]},n)}));return Object(u.jsx)("tr",{children:n},t)})):null})]})]})}):null]})]})}},494:function(e,t,n){"use strict";var s=n(98),c=n(10);t.a=function(e){return Object(c.jsx)(s.ib,{className:"mb-2",children:Object(c.jsxs)(s.B,{sm:"12",className:"ms-50",children:[Object(c.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(c.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},911:function(e,t,n){}}]);
//# sourceMappingURL=79.07ce8f6f.chunk.js.map