(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[146],{1546:function(e,t,a){"use strict";a.r(t);var c=a(13),n=a(15),s=a(1),l=a(98),i=a(493),r=a(486),d=a(1302),o=(a(1303),a(508)),b=a(10);t.default=function(){var e=[{label:d.b.Day,value:d.b.Day},{label:d.b.Week,value:d.b.Week},{label:d.b.Month,value:d.b.Month},{label:d.b.Year,value:d.b.Year}],t=Object(s.useState)({label:d.b.Day,value:d.b.Day}),a=Object(n.a)(t,2),j=a[0],u=a[1],O=Object(s.useState)(d.b.Day),h=Object(n.a)(O,2),p=h[0],x=h[1],f=Object(s.useState)(!0),v=Object(n.a)(f,2),m=v[0],g=(v[1],Object(s.useState)([])),k=Object(n.a)(g,2),w=k[0],y=k[1],D=Object(s.useState)([]),N=Object(n.a)(D,2),S=N[0],C=N[1],P=Object(s.useState)({}),W=Object(n.a)(P,2),_=W[0],J=W[1],M=65;p===d.b.Year?M=350:p===d.b.Month?M=300:p===d.b.Week&&(M=250);var Y=function(e){var t={direction:"desc",sort:"id",project_id:e.id};Object(o.h)(t).then((function(t){var a=t.response;if(a&&(200===a.code||400===a.code)&&a.data){var n=a.data.map((function(t,a){return Object(c.a)(Object(c.a)({},t),{},{start:new Date(t.start_date),end:new Date(t.end_date),name:t.title,id:"".concat(t.title," ").concat(t.id),progress:25,type:"task",project:"Project-".concat(e.title,"-").concat(e.id),displayOrder:parseInt(a+2)})}));n.unshift({start:new Date(e.start_date),end:new Date(e.end_date),name:e.title,id:"Project-".concat(e.title,"-").concat(e.id),progress:60,type:"project",hideChildren:!1,displayOrder:1}),console.log(n),y(n)}}))};return Object(s.useEffect)((function(){Object(o.i)({direction:"desc",sort:"id",active:1}).then((function(e){var t=e.response;if(t&&(200===t.code||400===t.code)&&t.data){var a=t.data.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{value:e.id,label:e.title})}));C(a),J(a[0]),Y(a[0])}}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(l.l,{children:[Object(b.jsx)(l.p,{children:Object(b.jsx)(l.v,{tag:"h4",children:"Gantt"})}),Object(b.jsx)(l.m,{children:Object(b.jsxs)(l.ib,{children:[Object(b.jsxs)(l.B,{md:"2",xxl:"2",children:[Object(b.jsx)(l.N,{for:"status-select",children:"Select Project"}),Object(b.jsx)(i.a,{theme:r.l,isClearable:!1,className:"react-select",classNamePrefix:"select",options:S,value:_,onChange:function(e){J(e),Y(e)}})]}),Object(b.jsxs)(l.B,{md:"2",xxl:"1",children:[Object(b.jsx)(l.N,{for:"status-select",children:"Select View"}),Object(b.jsx)(i.a,{theme:r.l,isClearable:!1,className:"react-select",classNamePrefix:"select",options:e,value:j,onChange:function(e){u(e),x(e.value)}})]})]})})]}),Object(b.jsx)(l.l,{className:"overflow-hidden",children:Object(b.jsx)("div",{className:"react-dataTable",children:w&&w.length?Object(b.jsx)(d.a,{tasks:w,viewMode:p,listCellWidth:m?"155px":"",columnWidth:M,onExpanderClick:function(e){y(w.map((function(t){return t.id===e.id?e:t}))),console.log("On expander click Id:".concat(e.id))}}):null})})]})}}}]);
//# sourceMappingURL=146.ae4f1635.chunk.js.map