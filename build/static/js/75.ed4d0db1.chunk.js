(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[75],{1293:function(e,t,a){},1675:function(e,t,a){"use strict";a.r(t);var c=a(13),n=a(15),s=a(1),i=a(493),r=a(486),d=a(138),l=a(98),o=a(567),j=(a(502),a(1061)),u=a(10),b=function(e){var t=e.task,a=function(){var e,a,c;return Object(u.jsx)(l.f,{className:"text-capitalize mr-1",label:null===(e=t.priority)||void 0===e?void 0:e.title,color:r.m[null===(a=t.priority)||void 0===a?void 0:a.value],pill:!0,children:null===(c=t.priority)||void 0===c?void 0:c.title})};return Object(u.jsx)(l.l,{onClick:function(){},className:"task","data-board-id":t.boardId,"data-task-id":t.id,children:Object(u.jsxs)(l.m,{"data-task-id":t.id,children:[Object(u.jsxs)("span",{className:"task-title",children:[t.title," "]}),t.task_comments||t.assigned_to?Object(u.jsxs)("div",{className:"task-footer d-flex align-items-center mt-1 ".concat("justify-content-start"),children:[a(),t.task_comments?Object(u.jsx)("div",{className:"d-flex align-items-center",style:{marginLeft:"10px"},children:Object(u.jsxs)("div",{className:"d-flex align-items-center cursor-pointer",children:[Object(u.jsx)(j.a,{size:16,className:"me-50"}),Object(u.jsx)("span",{children:t.task_comments.length})]})}):null]}):null]})})},m=a(508),O=function(e){var t=e.onBoardUpdate,a=e.project,c=e.boardsData,i=e.board,r=e.index,j=e.tasks,O=Object(s.useState)(""),f=Object(n.a)(O,2),p=f[0],x=f[1];Object(s.useEffect)((function(){x(i.title)}),[i.title]);return Object(u.jsx)(s.Fragment,{children:Object(u.jsxs)("div",{className:"board-wrapper",children:[Object(u.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:Object(u.jsx)("div",{className:"d-flex align-items-center board-header",children:Object(u.jsx)(l.K,{className:"board-title",value:p})})}),Object(u.jsx)("div",{children:Object(u.jsx)(o.ReactSortable,{list:j,group:"shared-group",setList:function(){return null},onAdd:function(e){var n=e.to.classList[1].replace("board-",""),s={project_id:a.id,id:e.item.dataset.taskId};s.status_id=c.find((function(e){return e.value===n})).realId,Object(m.b)(s).then((function(e){if(200===e.response.code){var a=j.find((function(e){return e.id===Number(s.id)}));a.boardId=n,t(a),d.b.success("Task successfully updated!")}else d.b.error("Error Updating Task")})).catch((function(e){console.log("ERROR: ",e),d.b.error("ERROR: ",e)}))},className:"tasks-wrapper board-".concat(i.id),style:{backgroundColor:"#ededed",padding:"1px 10px",borderRadius:"10px"},children:j.map((function(e,t){return e.boardId===i.id?Object(u.jsx)(b,{task:e,index:t},"".concat(e.boardId,"-").concat(t)):Object(u.jsx)(s.Fragment,{},"".concat(e.boardId,"-").concat(t))}))})})]})},r)};a(1293),t.default=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),a=t[0],d=t[1],o=Object(s.useState)([]),j=Object(n.a)(o,2),b=j[0],f=j[1],p=Object(s.useState)([]),x=Object(n.a)(p,2),v=x[0],h=x[1],g=Object(s.useState)({}),N=Object(n.a)(g,2),k=N[0],I=N[1],y=function(e){var t={project_id:null===e||void 0===e?void 0:e.id};Object(m.h)(t).then((function(e){var t=e.response;if(t&&(200===t.code||400===t.code)&&t.data){var a=t.data.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{boardId:e.status.value||""})}));f(a)}}))},R=function(e){f((function(t){return t.map((function(t){return t.id===e.id&&(t.boardId=e.boardId),t}))}))};Object(s.useEffect)((function(){Object(m.i)({direction:"desc",sort:"id",active:1}).then((function(e){var t=e.response;if(t&&(200===t.code||400===t.code)&&t.data){var a=t.data.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{value:e.id,label:e.title})}));h(a),I(a[0]),y(a[0])}})),Object(m.l)().then((function(e){var t=e.response;if(t&&(200===t.code||400===t.code)&&t.data){var a=t.data.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{id:e.value,realId:e.id})}));d(a)}}))}),[]);return a.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.l,{children:Object(u.jsx)(l.m,{children:Object(u.jsx)(l.ib,{children:Object(u.jsxs)(l.B,{md:"3",xxl:"3",children:[Object(u.jsx)(l.N,{for:"status-select",children:"Select Project"}),Object(u.jsx)(i.a,{theme:r.l,isClearable:!1,className:"react-select",classNamePrefix:"select",options:v,value:k,onChange:function(e){I(e),y(e)}})]})})})}),b&&b.length?Object(u.jsx)("div",{className:"app-kanban-wrapper",children:a.map((function(e,t){var c=a[a.length-1].id===e.id;return Object(u.jsx)(O,{project:k,boardsData:a,board:e,onBoardUpdate:R,tasks:b,isLastBoard:c,index:"".concat(e.id,"-").concat(t)},"".concat(e.id,"-").concat(t))}))}):"No Tasks found."]}):null}},502:function(e,t,a){"use strict";var c=a(13),n=a(17),s=a(1),i=a(2),r=a.n(i),d=a(98),l=a(482),o=a(10);t.a=function(e){var t=e.data,a=e.tag,i=e.className,j=a||"div";return Object(o.jsx)(j,{className:r()("avatar-group",Object(n.a)({},i,i)),children:t.map((function(e,t){var a=e.tag?e.tag:"div";return Object(o.jsxs)(s.Fragment,{children:[e.title?Object(o.jsx)(d.yb,{placement:e.placement,target:e.title.split(" ").join("-"),children:e.title}):null,e.meta?null:Object(o.jsx)(l.a,Object(c.a)(Object(c.a)(Object(c.a)({tag:a,className:r()("pull-up",Object(n.a)({},e.className,e.className))},e.title?{id:e.title.split(" ").join("-")}:{}),e),{},{title:void 0,meta:void 0})),e.meta?Object(o.jsx)(a,{className:"d-flex align-items-center ps-1",children:e.meta}):null]},t)}))})}}}]);
//# sourceMappingURL=75.ed4d0db1.chunk.js.map