(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[81],{1627:function(e,r,t){"use strict";t.r(r);var o=t(1),a=t(483),i=t(98),l=t(559),s=t(498),n=t.n(s),c=t(997),d=t(10),b=function(e){var r=e.success,t=e.gridLineColor,o=e.labelColor,a={responsive:!0,maintainAspectRatio:!1,animation:{duration:500},scales:{x:{grid:{color:t,borderColor:t},ticks:{color:o}},y:{min:0,max:400,grid:{color:t,borderColor:t},ticks:{stepSize:100,color:o}}},plugins:{legend:{display:!1}}},s={labels:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12"],datasets:[{maxBarThickness:15,backgroundColor:r,borderColor:"transparent",borderRadius:{topRight:15,topLeft:15},data:[275,90,190,205,125,85,55,87,127,150,230,280,190]}]};return Object(d.jsxs)(i.l,{children:[Object(d.jsxs)(i.p,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[Object(d.jsx)(i.v,{tag:"h4",children:"Latest Statistics"}),Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(c.a,{size:14}),Object(d.jsx)(n.a,{className:"form-control flat-picker bg-transparent border-0 shadow-none",options:{mode:"range",defaultDate:[new Date,new Date((new Date).getTime()+432e6)]}})]})]}),Object(d.jsx)(i.m,{children:Object(d.jsx)("div",{style:{height:"400px"},children:Object(d.jsx)(l.a,{data:s,options:a,height:400})})})]})},j=t(895),x=function(e){var r=e.labelColor,t=e.gridLineColor,o=e.blueColor,a=e.blueLightColor,s=e.greyLightColor,b={responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:-20}},scales:{x:{grid:{color:"transparent",borderColor:t},ticks:{color:r}},y:{min:0,max:400,grid:{color:"transparent",borderColor:t},ticks:{stepSize:100,color:r}}},plugins:{legend:{align:"start",position:"top",labels:{padding:30,boxWidth:9,color:r,usePointStyle:!0}}}},j={labels:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12",""],datasets:[{fill:!0,tension:0,label:"Africa",pointRadius:.5,pointHoverRadius:5,pointStyle:"circle",backgroundColor:o,pointHoverBorderWidth:5,borderColor:"transparent",pointHoverBorderColor:"#fff",pointBorderColor:"transparent",pointHoverBackgroundColor:o,data:[40,55,45,75,65,55,70,60,100,98,90,120,125,140,155]},{fill:!0,tension:0,label:"Asia",pointRadius:.5,pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:"transparent",pointHoverBorderColor:"#fff",pointBorderColor:"transparent",backgroundColor:a,pointHoverBackgroundColor:a,data:[70,85,75,150,100,140,110,105,160,150,125,190,200,240,275]},{fill:!0,tension:0,label:"Europe",pointRadius:.5,pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:"transparent",pointHoverBorderColor:"#fff",pointBorderColor:"transparent",backgroundColor:s,pointHoverBackgroundColor:s,data:[240,195,160,215,185,215,185,200,250,210,195,250,235,300,315]}]};return Object(d.jsxs)(i.l,{children:[Object(d.jsxs)(i.p,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[Object(d.jsx)(i.v,{tag:"h4",children:"Data Science"}),Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(c.a,{size:14}),Object(d.jsx)(n.a,{className:"form-control flat-picker bg-transparent border-0 shadow-none",options:{mode:"range",defaultDate:[new Date,new Date((new Date).getTime()+432e6)]}})]})]}),Object(d.jsx)(i.m,{children:Object(d.jsx)("div",{style:{height:"450px"},children:Object(d.jsx)(l.d,{data:j,options:b,height:450})})})]})},p=t(15),h=function(e){var r=e.gridLineColor,t=e.labelColor,a=Object(o.useState)({datasets:[]}),s=Object(p.a)(a,2),n=s[0],c=s[1],b=Object(o.useRef)(null),j={responsive:!0,maintainAspectRatio:!1,animation:{duration:500},layout:{padding:{top:-20}},scales:{r:{ticks:{display:!1,maxTicksLimit:1,color:t},grid:{color:r},pointLabels:{color:t},angleLines:{color:r}}},plugins:{legend:{position:"top",labels:{padding:25,color:t}}}};Object(o.useEffect)((function(){if(b.current){var e=b.current.ctx.createLinearGradient(0,0,0,150);e.addColorStop(0,"rgba(155,136,250, 0.9)"),e.addColorStop(1,"rgba(155,136,250, 0.8)");var r=b.current.ctx.createLinearGradient(0,0,0,150);r.addColorStop(0,"rgba(255,161,161, 0.9)"),r.addColorStop(1,"rgba(255,161,161, 0.8)"),c({labels:["STA","STR","AGI","VIT","CHA","INT"],datasets:[{fill:!0,label:"Dont\xe9 Panlin",borderColor:"transparent",backgroundColor:r,data:[25,59,90,81,60,82],pointBorderColor:"transparent",pointBackgroundColor:"transparent"},{fill:!0,label:"Mireska Sunbreeze",borderColor:"transparent",backgroundColor:e,data:[40,100,40,90,40,90],pointBorderColor:"transparent",pointBackgroundColor:"transparent"}]})}else;}),[]);return Object(d.jsxs)(i.l,{children:[Object(d.jsx)(i.p,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:Object(d.jsx)(i.v,{tag:"h4",children:"Radar Chart"})}),Object(d.jsx)(i.m,{children:Object(d.jsx)("div",{style:{height:"355px"},children:Object(d.jsx)(l.f,{ref:b,data:n,options:j,height:355,plugins:[{beforeInit:function(e){e.legend.afterFit=function(){this.height+=20}}}]})})})]})},m=t(986),g=function(e){var r=e.labelColor,t=e.primaryColorShade,o=e.yellowColor,a=e.gridLineColor,s={responsive:!0,maintainAspectRatio:!1,scales:{x:{min:0,max:140,grid:{color:a,borderColor:a},ticks:{stepSize:10,color:r}},y:{min:0,max:400,grid:{color:a,borderColor:a},ticks:{stepSize:100,color:r}}},plugins:{legend:{display:!1}}},n={animation:{duration:1e4},datasets:[{label:"Dataset 1",borderColor:t,backgroundColor:t,data:[{x:20,y:74,r:10},{x:10,y:110,r:5},{x:30,y:165,r:7},{x:40,y:200,r:20},{x:90,y:185,r:7},{x:50,y:240,r:7},{x:60,y:275,r:10},{x:70,y:305,r:5},{x:80,y:325,r:4},{x:100,y:310,r:5},{x:110,y:240,r:5},{x:120,y:270,r:7},{x:130,y:300,r:6}]},{label:"Dataset 2",borderColor:o,backgroundColor:o,data:[{x:30,y:72,r:5},{x:40,y:110,r:7},{x:20,y:135,r:6},{x:10,y:160,r:12},{x:50,y:285,r:5},{x:60,y:235,r:5},{x:70,y:275,r:7},{x:80,y:290,r:4},{x:90,y:250,r:10},{x:100,y:220,r:7},{x:120,y:230,r:4},{x:110,y:320,r:15},{x:130,y:330,r:7}]}]};return Object(d.jsxs)(i.l,{children:[Object(d.jsxs)(i.p,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[Object(d.jsx)(i.v,{tag:"h4",children:"Bubble Chart"}),Object(d.jsxs)("div",{className:"d-flex align-items-center flex-wrap",children:[Object(d.jsx)("h5",{className:"fw-bolder mb-0 me-1",children:"$ 100,000"}),Object(d.jsxs)(i.f,{color:"light-secondary",children:[Object(d.jsx)(m.a,{size:13,className:"text-danger"}),Object(d.jsx)("span",{className:"align-middle ms-25",children:"20%"})]})]})]}),Object(d.jsx)(i.m,{children:Object(d.jsx)("div",{style:{height:"500px"},children:Object(d.jsx)(l.b,{data:n,options:s,height:500})})})]})},u=function(e){var r=e.labelColor,t=e.gridLineColor,a=e.primary,s=e.yellowColor,n=e.successColorShade,c=Object(o.useState)("daily"),b=Object(p.a)(c,2),j=b[0],x=b[1],h={responsive:!0,maintainAspectRatio:!1,animation:{duration:800},layout:{padding:{top:-20}},scales:{x:{min:0,max:140,grid:{drawTicks:!1,color:t,borderColor:t},ticks:{stepSize:10,color:r}},y:{min:0,max:400,grid:{drawTicks:!1,color:t,borderColor:t},ticks:{stepSize:100,color:r}}},plugins:{legend:{align:"start",position:"top",labels:{padding:30,boxWidth:9,color:r,usePointStyle:!0}}}},m={datasets:[{pointRadius:5,label:"iPhone",pointBorderWidth:2,backgroundColor:a,pointHoverBorderWidth:2,borderColor:"transparent",data:[{x:72,y:225},{x:81,y:270},{x:90,y:230},{x:103,y:305},{x:103,y:245},{x:108,y:275},{x:110,y:290},{x:111,y:315},{x:109,y:350},{x:116,y:340},{x:113,y:260},{x:117,y:275},{x:117,y:295},{x:126,y:280},{x:127,y:340},{x:133,y:330}]},{pointRadius:5,pointBorderWidth:2,label:"Samsung Note",pointHoverBorderWidth:2,borderColor:"transparent",backgroundColor:s,data:[{x:13,y:95},{x:22,y:105},{x:17,y:115},{x:19,y:130},{x:21,y:125},{x:35,y:125},{x:13,y:155},{x:21,y:165},{x:25,y:155},{x:18,y:190},{x:26,y:180},{x:43,y:180},{x:53,y:202},{x:61,y:165},{x:67,y:225}]},{pointRadius:5,label:"OnePlus",pointBorderWidth:2,pointHoverBorderWidth:2,borderColor:"transparent",backgroundColor:n,data:[{x:70,y:195},{x:72,y:270},{x:98,y:255},{x:100,y:215},{x:87,y:240},{x:94,y:280},{x:99,y:300},{x:102,y:290},{x:110,y:275},{x:111,y:250},{x:94,y:280},{x:92,y:340},{x:100,y:335},{x:108,y:330}]}]};return Object(d.jsxs)(i.l,{children:[Object(d.jsxs)(i.p,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[Object(d.jsx)(i.v,{tag:"h4",children:"New Product Data"}),Object(d.jsxs)(i.k,{className:"mt-md-0 mt-1",children:[Object(d.jsx)(i.i,{active:"daily"===j,color:"primary",outline:!0,onClick:function(){return x("daily")},children:"Daily"}),Object(d.jsx)(i.i,{active:"monthly"===j,color:"primary",outline:!0,onClick:function(){return x("monthly")},children:"Monthly"}),Object(d.jsx)(i.i,{active:"yearly"===j,color:"primary",outline:!0,onClick:function(){return x("yearly")},children:"Yearly"})]})]}),Object(d.jsx)(i.m,{children:Object(d.jsx)("div",{style:{height:"415px"},children:Object(d.jsx)(l.g,{data:m,options:h,height:415,plugins:[{beforeInit:function(e){e.legend.afterFit=function(){this.height+=20}}}]})})})]})},y=t(1422),C=t(1064),f=t(989),O=t(1095),v=function(e){var r={maintainAspectRatio:!1,cutout:60,animation:{resize:{duration:500}},plugins:{legend:{display:!1},tooltips:{callbacks:{label:function(e){console.log(e);var r=e.label||"";return r&&Object(y.a)("label"),null!==e.parsed.y&&(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.parsed.y),Object(y.a)("label")),r}},shadowOffsetX:1,shadowOffsetY:1,shadowBlur:8,shadowColor:e.tooltipShadow,backgroundColor:"#fff",titleFontColor:"#000",bodyFontColor:"#000"}}},t={datasets:[{labels:["Tablet","Mobile","Desktop"],data:[10,10,80],backgroundColor:[e.successColorShade,e.warningLightColor,e.primary],borderWidth:0,pointStyle:"rectRounded"}]};return Object(d.jsxs)(i.l,{children:[Object(d.jsx)(i.p,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:Object(d.jsx)(i.v,{tag:"h4",children:"Sessions By Device"})}),Object(d.jsxs)(i.m,{children:[Object(d.jsx)("div",{style:{height:"275px"},children:Object(d.jsx)(l.c,{data:t,options:r,height:275})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between mt-3 mb-1",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(C.a,{size:17,className:"text-primary"}),Object(d.jsx)("span",{className:"fw-bold ms-75 me-25",children:"Desktop"}),Object(d.jsx)("span",{children:"- 80%"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"2%"})," ",Object(d.jsx)(f.a,{className:"text-success",size:14})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between mb-1",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(O.a,{size:17,className:"text-warning"}),Object(d.jsx)("span",{className:"fw-bold ms-75 me-25",children:"Mobile"}),Object(d.jsx)("span",{children:"- 10%"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"8%"})," ",Object(d.jsx)(f.a,{className:"text-success",size:14})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(O.a,{size:17,className:"text-success"}),Object(d.jsx)("span",{className:"fw-bold ms-75 me-25",children:"Tablet"}),Object(d.jsx)("span",{children:"- 10%"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"-5%"})," ",Object(d.jsx)(m.a,{className:"text-danger",size:14})]})]})]})]})},w=t(1066),k=function(e){var r=e.primary,t=e.greyColor,o=e.labelColor,a=e.yellowColor,s=e.infoColorShade,n={responsive:!0,maintainAspectRatio:!1,animation:{duration:500},layout:{padding:{top:-5,bottom:-45}},scales:{r:{grid:{display:!1},ticks:{display:!1}}},plugins:{legend:{position:"right",labels:{padding:25,boxWidth:9,color:o,usePointStyle:!0}}}},c={labels:["Africa","Asia","Europe","America","Antarctica","Australia"],datasets:[{borderWidth:0,label:"Population (millions)",data:[19,17.5,15,13.5,11,9],backgroundColor:[r,a,e.warningColorShade,s,t,e.successColorShade]}]};return Object(d.jsxs)(i.l,{children:[Object(d.jsxs)(i.p,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[Object(d.jsx)(i.v,{tag:"h4",children:"Average Skills"}),Object(d.jsxs)(i.wb,{children:[Object(d.jsx)(i.G,{className:"cursor-pointer",tag:"span",children:Object(d.jsx)(w.a,{size:14})}),Object(d.jsxs)(i.F,{end:!0,children:[Object(d.jsx)(i.E,{className:"w-100",children:"Last 28 days"}),Object(d.jsx)(i.E,{className:"w-100",children:"Last Month"}),Object(d.jsx)(i.E,{className:"w-100",children:"Last Year"})]})]})]}),Object(d.jsx)(i.m,{children:Object(d.jsx)("div",{style:{height:"350px"},children:Object(d.jsx)(l.e,{data:c,options:n,height:350})})})]})},S=function(e){var r=e.warning,t=e.gridLineColor,o=e.labelColor,a={indexAxis:"y",responsive:!0,maintainAspectRatio:!1,animation:{duration:500},elements:{bar:{borderRadius:{topRight:15,bottomRight:15}}},layout:{padding:{top:-4}},scales:{x:{min:0,grid:{drawTicks:!1,color:t,borderColor:"transparent"},ticks:{color:o}},y:{grid:{display:!1,borderColor:t},ticks:{color:o}}},plugins:{legend:{align:"end",position:"top",labels:{color:o}}}},s={labels:["MON","TUE","WED ","THU","FRI"],datasets:[{maxBarThickness:15,label:"Market Data",backgroundColor:r,borderColor:"transparent",data:[710,350,580,460,120]},{maxBarThickness:15,backgroundColor:e.info,label:"Personal Data",borderColor:"transparent",data:[430,590,510,240,360]}]};return Object(d.jsxs)(i.l,{children:[Object(d.jsxs)(i.p,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(i.t,{className:"text-muted mb-25",children:"Balance"}),Object(d.jsx)(i.v,{tag:"h4",children:"$74,123"})]}),Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(c.a,{size:14}),Object(d.jsx)(n.a,{className:"form-control flat-picker bg-transparent border-0 shadow-none",options:{mode:"range",defaultDate:[new Date,new Date((new Date).getTime()+432e6)]}})]})]}),Object(d.jsx)(i.m,{children:Object(d.jsx)("div",{style:{height:"400px"},children:Object(d.jsx)(l.a,{data:s,options:a,height:400})})})]})},B=t(517),N=t(140);t(896),t(495),r.default=function(){var e=Object(o.useContext)(N.a).colors,r="dark"===Object(B.a)().skin?"#b4b7bd":"#6e6b7b",t="rgba(200, 200, 200, 0.2)",l="#ffbd1f",s="#28dac6",n="#ffe800";return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)(a.a,{title:"React ChartJS 2",data:[{title:"Charts"},{title:"ChartJS"}]}),Object(d.jsxs)(i.ib,{className:"match-height",children:[Object(d.jsx)(i.B,{sm:"12",children:Object(d.jsxs)("p",{children:["React wrapper for Chart.js. Click"," ",Object(d.jsx)("a",{href:"https://github.com/jerairrest/react-chartjs-2",target:"_blank",rel:"noopener noreferrer",children:"here"})," ","for github repo."]})}),Object(d.jsx)(i.B,{xl:"6",sm:"12",children:Object(d.jsx)(b,{success:s,labelColor:r,gridLineColor:t})}),Object(d.jsx)(i.B,{xl:"6",sm:"12",children:Object(d.jsx)(S,{info:e.info.main,labelColor:r,warning:e.warning.main,gridLineColor:t})}),Object(d.jsx)(i.B,{sm:"12",children:Object(d.jsx)(j.a,{labelColor:r,gridLineColor:t,lineChartDanger:"#ff4961",lineChartPrimary:"#666ee8",warningColorShade:l})}),Object(d.jsx)(i.B,{lg:"6",sm:"12",children:Object(d.jsx)(h,{labelColor:r,gridLineColor:t})}),Object(d.jsx)(i.B,{lg:"6",sm:"12",children:Object(d.jsx)(k,{greyColor:"#4F5D70",labelColor:r,yellowColor:n,primary:e.primary.main,infoColorShade:"#299AFF",warningColorShade:l,successColorShade:s})}),Object(d.jsx)(i.B,{sm:"12",children:Object(d.jsx)(g,{labelColor:r,yellowColor:n,gridLineColor:t,primaryColorShade:"#836AF9"})}),Object(d.jsx)(i.B,{lg:"4",sm:"12",children:Object(d.jsx)(v,{tooltipShadow:"rgba(0, 0, 0, 0.25)",successColorShade:s,warningLightColor:"#FDAC34",primary:e.primary.main})}),Object(d.jsx)(i.B,{lg:"8",sm:"12",children:Object(d.jsx)(u,{labelColor:r,yellowColor:n,gridLineColor:t,primary:e.primary.main,successColorShade:s})}),Object(d.jsx)(i.B,{sm:"12",children:Object(d.jsx)(x,{blueColor:"#2c9aff",labelColor:r,gridLineColor:t,blueLightColor:"#84D0FF",greyLightColor:"#EDF1F4"})})]})]})}},495:function(e,r,t){},895:function(e,r,t){"use strict";var o=t(559),a=t(98),i=t(10);r.a=function(e){var r=e.labelColor,t=e.gridLineColor,l=e.warningColorShade,s=e.lineChartDanger,n=e.lineChartPrimary,c={responsive:!0,backgroundColor:!1,maintainAspectRatio:!1,scales:{x:{ticks:{color:r},grid:{borderColor:t,color:t}},y:{min:0,max:400,scaleLabel:{display:!0},ticks:{stepSize:100,color:r},grid:{borderColor:t,color:t}}},plugins:{legend:{align:"start",position:"top",labels:{boxWidth:10,marginBottom:25,color:r,usePointStyle:!0}}}},d={labels:[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140],datasets:[{data:[80,150,180,270,210,160,160,202,265,210,270,255,290,360,375],fill:!1,tension:.5,pointRadius:1,label:"Completed",pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:s,pointBorderColor:"transparent",backgroundColor:s,pointHoverBackgroundColor:s},{data:[80,125,105,130,215,195,140,160,230,300,220,170,210,200,280],fill:!1,tension:.5,label:"TO DO",pointRadius:1,pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:n,pointBorderColor:"transparent",backgroundColor:n,pointHoverBackgroundColor:n},{data:[80,99,82,90,115,115,74,75,130,155,125,90,140,130,180],fill:!1,tension:.5,pointRadius:1,label:"In Progress",pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:l,backgroundColor:l,pointBorderColor:l,pointHoverBackgroundColor:l}]};return Object(i.jsxs)(a.l,{children:[Object(i.jsx)(a.p,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(a.v,{className:"mb-75",tag:"h4",children:"Statistics"}),Object(i.jsx)(a.t,{children:"Commercial networks and enterprises"})]})}),Object(i.jsx)(a.m,{children:Object(i.jsx)("div",{style:{height:"450px"},children:Object(i.jsx)(o.d,{data:d,options:c,height:450,plugins:[{beforeInit:function(e){e.legend.afterFit=function(){this.height+=20}}}]})})})]})}}}]);
//# sourceMappingURL=81.75866e82.chunk.js.map