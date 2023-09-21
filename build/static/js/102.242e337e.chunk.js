(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[102],{1633:function(e,n,c){"use strict";c.r(n);var t=c(1),j=c(98),s=c(483),l=c(617),r=c(1075),a=c(1063),i=c(10),d=function(){return Object(i.jsxs)(j.l,{children:[Object(i.jsx)(j.p,{children:Object(i.jsx)(j.v,{tag:"h4",children:"Sizes"})}),Object(i.jsx)(j.m,{children:Object(i.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(i.jsxs)("div",{className:"me-2",children:[Object(i.jsx)(j.N,{className:"form-label",for:"lg-number-input",children:"Large Input"}),Object(i.jsx)(l.a,{defaultValue:10,className:"input-lg",upHandler:Object(i.jsx)(r.a,{}),id:"lg-number-input",downHandler:Object(i.jsx)(a.a,{})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(j.N,{className:"form-label",for:"default-number-input",children:"Default Input"}),Object(i.jsx)(l.a,{defaultValue:10,upHandler:Object(i.jsx)(r.a,{}),id:"default-number-input",downHandler:Object(i.jsx)(a.a,{})})]})]})})]})},b=function(){return Object(i.jsxs)(j.l,{children:[Object(i.jsx)(j.p,{children:Object(i.jsx)(j.v,{tag:"h4",children:"Basic"})}),Object(i.jsx)(j.m,{children:Object(i.jsxs)("div",{className:"demo-inline-spacing",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(j.N,{className:"form-label",for:"basic-number-input",children:"Basic Input"}),Object(i.jsx)(l.a,{id:"basic-number-input",defaultValue:10,upHandler:Object(i.jsx)(r.a,{}),downHandler:Object(i.jsx)(a.a,{})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(j.N,{className:"form-label",for:"disabled-number-input",children:"Disabled Input"}),Object(i.jsx)(l.a,{disabled:!0,defaultValue:10,upHandler:Object(i.jsx)(r.a,{}),downHandler:Object(i.jsx)(a.a,{}),id:"disabled-number-input"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(j.N,{className:"form-label",for:"readOnly-number-input",children:"ReadOnly Input"}),Object(i.jsx)(l.a,{readOnly:!0,defaultValue:10,upHandler:Object(i.jsx)(r.a,{}),downHandler:Object(i.jsx)(a.a,{}),id:"readOnly-number-input"})]})]})})]})},u=function(){return Object(i.jsxs)(j.l,{children:[Object(i.jsx)(j.p,{children:Object(i.jsx)(j.v,{tag:"h4",children:"Min Max"})}),Object(i.jsx)(j.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(j.N,{className:"form-label",for:"min-max-number-input",children:"Min Max Input"}),Object(i.jsx)(l.a,{min:0,max:10,defaultValue:5,upHandler:Object(i.jsx)(r.a,{}),downHandler:Object(i.jsx)(a.a,{}),id:"min-max-number-input"})]})})]})},O=function(){return Object(i.jsxs)(j.l,{children:[Object(i.jsx)(j.p,{children:Object(i.jsx)(j.v,{tag:"h4",children:"Formatting"})}),Object(i.jsx)(j.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(j.N,{className:"form-label",for:"formatting-number-input",children:"Formatting Input"}),Object(i.jsx)(l.a,{parser:function(e){var n=e.toString().split(" ");return n[1]?n[1].replace(/,*/g,""):e},defaultValue:5,formatter:function(e){return"$ ".concat(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))},upHandler:Object(i.jsx)(r.a,{}),downHandler:Object(i.jsx)(a.a,{}),id:"formatting-number-input"})]})})]})},x=["primary","secondary","success","danger","warning","info"],m=function(){return Object(i.jsxs)(j.l,{children:[Object(i.jsx)(j.p,{children:Object(i.jsx)(j.v,{tag:"h4",children:"Colors"})}),Object(i.jsx)(j.m,{children:Object(i.jsx)("div",{className:"demo-inline-spacing",children:x.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)(j.N,{className:"form-label text-capitalize",for:"".concat(e,"-number-input"),children:[e," Input"]}),Object(i.jsx)(l.a,{defaultValue:10,upHandler:Object(i.jsx)(r.a,{}),downHandler:Object(i.jsx)(a.a,{}),id:"".concat(e,"-number-input"),className:"input-".concat(e)})]},e)}))})})]})},o=function(){return Object(i.jsxs)(j.l,{children:[Object(i.jsx)(j.p,{children:Object(i.jsx)(j.v,{tag:"h4",children:"Decimal"})}),Object(i.jsx)(j.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(j.N,{className:"form-label",for:"decimal-number-input",children:"Decimal Input"}),Object(i.jsx)(l.a,{step:.1,defaultValue:10,upHandler:Object(i.jsx)(r.a,{}),downHandler:Object(i.jsx)(a.a,{}),id:"decimal-number-input"})]})})]})},h=c(15),p=function(){var e=Object(t.useState)(1),n=Object(h.a)(e,2),c=n[0],s=n[1],d=Object(t.useState)(!1),b=Object(h.a)(d,2),u=b[0],O=b[1],x=Object(t.useState)(!1),m=Object(h.a)(x,2),o=m[0],p=m[1];return Object(i.jsxs)(j.l,{children:[Object(i.jsx)(j.p,{children:Object(i.jsx)(j.v,{tag:"h4",children:"Controlled"})}),Object(i.jsxs)(j.m,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(j.N,{className:"form-label",for:"controlled-number-input",children:"Controlled Input"}),Object(i.jsx)(l.a,{value:c,upHandler:Object(i.jsx)(r.a,{}),disabled:u,readOnly:o,downHandler:Object(i.jsx)(a.a,{}),id:"controlled-number-input",onChange:function(e){return s(e)}})]}),Object(i.jsxs)("div",{className:"demo-inline-spacing",children:[Object(i.jsx)(j.i,{size:"sm",color:"primary",onClick:function(){return O(!u)},children:"Toggle Disabled"}),Object(i.jsx)(j.i,{size:"sm",color:"primary",onClick:function(){return p(!o)},children:"Toggle ReadOnly"}),Object(i.jsx)(j.i,{size:"sm",color:"primary",onClick:function(){return s(10)},children:"Set Value to 10"})]})]})]})};c(867),n.default=function(){return Object(i.jsxs)(t.Fragment,{children:[Object(i.jsx)(s.a,{title:"Number Input",data:[{title:"Form Elements"},{title:"Number Input"}]}),Object(i.jsxs)(j.ib,{className:"match-height",children:[Object(i.jsx)(j.B,{md:"6",sm:"12",children:Object(i.jsx)(b,{})}),Object(i.jsx)(j.B,{md:"6",sm:"12",children:Object(i.jsx)(p,{})}),Object(i.jsx)(j.B,{md:"6",sm:"12",children:Object(i.jsx)(o,{})}),Object(i.jsx)(j.B,{md:"6",sm:"12",children:Object(i.jsx)(u,{})}),Object(i.jsx)(j.B,{md:"6",sm:"12",children:Object(i.jsx)(d,{})}),Object(i.jsx)(j.B,{md:"6",sm:"12",children:Object(i.jsx)(O,{})}),Object(i.jsx)(j.B,{xs:"12",children:Object(i.jsx)(m,{})})]})]})}},867:function(e,n,c){}}]);
//# sourceMappingURL=102.242e337e.chunk.js.map