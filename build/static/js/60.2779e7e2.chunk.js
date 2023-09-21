(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[60],{1665:function(e,t,s){"use strict";s.r(t);var a,c=s(1),l=s(15),n=s(13),i=s(17),r=s(135),o=s(482),m=s(152),d=s(150),j=s(1109),b=s(1020),u=s(1026),h=s(970),x=s(1089),O=s(1030),p=s(98),f=s(10),g=function(e){return e.avatar.length?Object(f.jsx)(o.a,{className:"me-1",img:e.avatar,width:"32",height:"32"}):Object(f.jsx)(o.a,{initials:!0,className:"me-1",content:e.fullName||"John Doe",color:e.avatarColor||"light-primary"})},N={pending:"light-warning",active:"light-success",inactive:"light-secondary"},v=[{name:"Name",sortable:!0,minWidth:"297px",sortField:"fullName",selector:function(e){return e.fullName},cell:function(e){return Object(f.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[g(e),Object(f.jsxs)("div",{className:"d-flex flex-column",children:[Object(f.jsx)(r.b,{to:"/apps/user/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return m.a.dispatch(Object(d.d)(e.id))},children:Object(f.jsx)("span",{className:"fw-bold",children:e.fullName})}),Object(f.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Role",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.role},cell:function(e){return function(e){var t={subscriber:{class:"text-primary",icon:j.a},maintainer:{class:"text-success",icon:b.a},editor:{class:"text-info",icon:u.a},author:{class:"text-warning",icon:h.a},admin:{class:"text-danger",icon:x.a}},s=t[e.role]?t[e.role].icon:u.a;return Object(f.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(f.jsx)(s,{size:18,className:"".concat(t[e.role]?t[e.role].class:""," me-50")}),e.role]})}(e)}},{name:"Plan",sortable:!0,minWidth:"138px",sortField:"currentPlan",selector:function(e){return e.currentPlan},cell:function(e){return Object(f.jsx)("span",{className:"text-capitalize",children:e.currentPlan})}},(a={name:"Billing",sortable:!0,minWidth:"230px",sortField:"billing",selector:function(e){return e.billing}},Object(i.a)(a,"sortField","billing"),Object(i.a)(a,"selector",(function(e){return e.billing})),Object(i.a)(a,"cell",(function(e){return Object(f.jsx)("span",{className:"text-capitalize",children:e.billing})})),a),{name:"Status",sortable:!0,minWidth:"138px",sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(f.jsx)(p.f,{className:"text-capitalize",color:N[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(f.jsx)(r.b,{to:"/apps/user/view/".concat(e.id),children:Object(f.jsx)(O.a,{className:"font-medium-3 text-body"})})}}],w=s(137),y=s(512),C=s.n(y),P=s(1001),z=s(526),k=s.n(z),S=(s(513),Object(c.forwardRef)((function(e,t){return Object(f.jsx)("div",{className:"form-check",children:Object(f.jsx)(p.K,Object(n.a)({type:"checkbox",ref:t},e))})}))),R=function(e){var t=e.plan,s=e.handlePlanChange,a=e.handlePerPage,c=e.rowsPerPage,l=e.handleFilter,n=e.searchTerm;return Object(f.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(f.jsxs)(p.ib,{children:[Object(f.jsx)(p.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(f.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(f.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(f.jsxs)(p.K,{className:"mx-50",type:"select",id:"rows-per-page",value:c,onChange:a,style:{width:"5rem"},children:[Object(f.jsx)("option",{value:"10",children:"10"}),Object(f.jsx)("option",{value:"25",children:"25"}),Object(f.jsx)("option",{value:"50",children:"50"})]}),Object(f.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(f.jsxs)(p.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pe-lg-1 p-0 mt-lg-0 mt-1",children:[Object(f.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(f.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(f.jsx)(p.K,{type:"text",value:n,id:"search-invoice",className:"ms-50 w-100",onChange:function(e){return l(e.target.value)}})]}),Object(f.jsxs)(p.K,{value:t,type:"select",style:{width:"10rem"},onChange:function(e){return s(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select Role"}),Object(f.jsx)("option",{value:"basic",children:"Basic"}),Object(f.jsx)("option",{value:"company",children:"Company"}),Object(f.jsx)("option",{value:"enterprise",children:"Enterprise"}),Object(f.jsx)("option",{value:"team",children:"Team"})]})]})]})})},K=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.users})),s=Object(c.useState)(""),a=Object(l.a)(s,2),n=a[0],i=a[1],r=Object(c.useState)("desc"),o=Object(l.a)(r,2),m=o[0],j=o[1],b=Object(c.useState)(""),u=Object(l.a)(b,2),h=u[0],x=u[1],O=Object(c.useState)(1),g=Object(l.a)(O,2),N=g[0],y=g[1],z=Object(c.useState)(10),K=Object(l.a)(z,2),A=K[0],F=K[1],D=Object(c.useState)("id"),T=Object(l.a)(D,2),B=T[0],M=T[1];Object(c.useEffect)((function(){e(Object(d.b)()),e(Object(d.c)({sort:m,role:"",sortColumn:B,status:"",q:h,currentPlan:n,page:N,perPage:A}))}),[e,t.data.length]);return Object(f.jsx)(p.l,{children:Object(f.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(f.jsx)(k.a,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:v,onSort:function(t,s){j(s),M(t.sortField),e(Object(d.c)({sort:m,role:"",sortColumn:B,status:"",q:h,currentPlan:n,page:N,perPage:A}))},data:function(){var e={q:h},s=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&s?[]:t.allData.slice(0,A)}(),sortIcon:Object(f.jsx)(P.a,{}),paginationComponent:function(){var s=Number(Math.ceil(t.total/A));return Object(f.jsx)(C.a,{previousLabel:"",nextLabel:"",pageCount:s||1,activeClassName:"active",forcePage:0!==N?N-1:0,onPageChange:function(t){return function(t){e(Object(d.c)({sort:m,role:"",status:"",sortColumn:B,q:h,currentPlan:n,perPage:A,page:t.selected+1})),y(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRowsComponent:S,className:"react-dataTable",subHeaderComponent:Object(f.jsx)(R,{plan:n,searchTerm:h,rowsPerPage:A,handleFilter:function(t){x(t),e(Object(d.c)({q:t,sort:m,role:"",sortColumn:B,status:"",currentPlan:n,page:N,perPage:A}))},handlePerPage:function(t){var s=parseInt(t.currentTarget.value);e(Object(d.c)({sort:m,role:"",sortColumn:B,status:"",q:h,perPage:s,currentPlan:n,page:N})),F(s)},handlePlanChange:function(t){i(t),e(Object(d.c)({sort:m,role:t,sortColumn:B,status:"",q:h,currentPlan:n,page:N,perPage:A}))}})})})})},A=s(1015),F=s(1047),D=s(489),T=s(502),B=s(910),M=[{totalUsers:4,title:"Administrator",users:[{size:"sm",title:"Vinnie Mostowy",img:s(50).default},{size:"sm",title:"Allen Rieske",img:s(254).default},{size:"sm",title:"Julee Rossignol",img:s(61).default},{size:"sm",title:"Kaith Dsouza",img:s(102).default}]},{totalUsers:7,title:"Manager",users:[{size:"sm",title:"Jimmy Ressula",img:s(64).default},{size:"sm",title:"John Doe",img:s(30).default},{size:"sm",title:"Kristi Lawker",img:s(50).default},{size:"sm",title:"Kaith D",img:s(81).default},{size:"sm",title:"Danny Paul",img:s(63).default}]},{totalUsers:5,title:"Users",users:[{size:"sm",title:"Andrew Tye",img:s(61).default},{size:"sm",title:"Rishi Swaat",img:s(27).default},{size:"sm",title:"Rossie Kim",img:s(50).default},{size:"sm",title:"Kim Merchent",img:s(75).default},{size:"sm",title:"Sam Dsouza",img:s(76).default}]},{totalUsers:3,title:"Support",users:[{size:"sm",title:"Kim Karlos",img:s(62).default},{size:"sm",title:"Katy Turner",img:s(27).default},{size:"sm",title:"Peter Adward",img:s(254).default},{size:"sm",title:"Kaith Dsouza",img:s(75).default},{size:"sm",title:"John Parker",img:s(102).default}]},{totalUsers:2,title:"Restricted User",users:[{size:"sm",title:"Kim Merchent",img:s(75).default},{size:"sm",title:"Sam Dsouza",img:s(61).default},{size:"sm",title:"Nurvi Karlos",img:s(62).default},{size:"sm",title:"Andrew Tye",img:s(76).default},{size:"sm",title:"Rossie Kim",img:s(27).default}]}],J=["User Management","Content Management","Disputes Management","Database Management","Financial Management","Reporting","API Control","Repository Management","Payroll"],U=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)("Add New"),o=Object(l.a)(i,2),m=o[0],d=o[1],j=Object(D.e)({defaultValues:{roleName:""}}),b=j.reset,u=j.control,h=j.setError,x=j.setValue,O=j.handleSubmit,g=j.formState.errors;return Object(f.jsxs)(c.Fragment,{children:[Object(f.jsxs)(p.ib,{children:[M.map((function(e,t){return Object(f.jsx)(p.B,{xl:4,md:6,children:Object(f.jsx)(p.l,{children:Object(f.jsxs)(p.m,{children:[Object(f.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(f.jsx)("span",{children:"Total ".concat(e.totalUsers," users")}),Object(f.jsx)(T.a,{data:e.users})]}),Object(f.jsxs)("div",{className:"d-flex justify-content-between align-items-end mt-1 pt-25",children:[Object(f.jsxs)("div",{className:"role-heading",children:[Object(f.jsx)("h4",{className:"fw-bolder",children:e.title}),Object(f.jsx)(r.b,{to:"/",className:"role-edit-modal",onClick:function(e){e.preventDefault(),d("Edit"),a(!0)},children:Object(f.jsx)("small",{className:"fw-bolder",children:"Edit Role"})})]}),Object(f.jsx)(r.b,{to:"",className:"text-body",onClick:function(e){return e.preventDefault()},children:Object(f.jsx)(A.a,{className:"font-medium-5"})})]})]})})},t)})),Object(f.jsx)(p.B,{xl:4,md:6,children:Object(f.jsx)(p.l,{children:Object(f.jsxs)(p.ib,{children:[Object(f.jsx)(p.B,{sm:5,children:Object(f.jsx)("div",{className:"d-flex align-items-end justify-content-center h-100",children:Object(f.jsx)("img",{className:"img-fluid mt-2",src:B.a,alt:"Image",width:85})})}),Object(f.jsx)(p.B,{sm:7,children:Object(f.jsxs)(p.m,{className:"text-sm-end text-center ps-sm-0",children:[Object(f.jsx)(p.i,{color:"primary",className:"text-nowrap mb-1",onClick:function(){d("Add New"),a(!0)},children:"Add New Role"}),Object(f.jsx)("p",{className:"mb-0",children:"Add a new role, if it does not exist"})]})})]})})})]}),Object(f.jsxs)(p.Q,{isOpen:s,onClosed:function(){d("Add New"),x("roleName")},toggle:function(){return a(!s)},className:"modal-dialog-centered modal-lg",children:[Object(f.jsx)(p.T,{className:"bg-transparent",toggle:function(){return a(!s)}}),Object(f.jsxs)(p.R,{className:"px-5 pb-5",children:[Object(f.jsxs)("div",{className:"text-center mb-4",children:[Object(f.jsxs)("h1",{children:[m," Role"]}),Object(f.jsx)("p",{children:"Set role permissions"})]}),Object(f.jsxs)(p.ib,{tag:"form",onSubmit:O((function(e){e.roleName.length?a(!1):h("roleName",{type:"manual"})})),children:[Object(f.jsxs)(p.B,{xs:12,children:[Object(f.jsx)(p.N,{className:"form-label",for:"roleName",children:"Role Name"}),Object(f.jsx)(D.a,{name:"roleName",control:u,render:function(e){var t=e.field;return Object(f.jsx)(p.K,Object(n.a)(Object(n.a)({},t),{},{id:"roleName",placeholder:"Enter role name",invalid:g.roleName&&!0}))}}),g.roleName&&Object(f.jsx)(p.I,{children:"Please enter a valid role name"})]}),Object(f.jsxs)(p.B,{xs:12,children:[Object(f.jsx)("h4",{className:"mt-2 pt-50",children:"Role Permissions"}),Object(f.jsx)(p.mb,{className:"table-flush-spacing",responsive:!0,children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{className:"text-nowrap fw-bolder",children:[Object(f.jsx)("span",{className:"me-50",children:" Administrator Access"}),Object(f.jsx)(F.a,{size:14,id:"info-tooltip"}),Object(f.jsx)(p.yb,{placement:"top",target:"info-tooltip",children:"Allows a full access to the system"})]}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)(p.K,{type:"checkbox",id:"select-all"}),Object(f.jsx)(p.N,{className:"form-check-label",for:"select-all",children:"Select All"})]})})]}),J.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"text-nowrap fw-bolder",children:e}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(f.jsx)(p.K,{type:"checkbox",id:"read-".concat(e)}),Object(f.jsx)(p.N,{className:"form-check-label",for:"read-".concat(e),children:"Read"})]}),Object(f.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(f.jsx)(p.K,{type:"checkbox",id:"write-".concat(e)}),Object(f.jsx)(p.N,{className:"form-check-label",for:"write-".concat(e),children:"Write"})]}),Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)(p.K,{type:"checkbox",id:"create-".concat(e)}),Object(f.jsx)(p.N,{className:"form-check-label",for:"create-".concat(e),children:"Create"})]})]})})]},t)}))]})})]}),Object(f.jsxs)(p.B,{className:"text-center mt-2",xs:12,children:[Object(f.jsx)(p.i,{type:"submit",color:"primary",className:"me-1",children:"Submit"}),Object(f.jsx)(p.i,{type:"reset",outline:!0,onClick:function(){a(!1),b({roleName:""})},children:"Discard"})]})]})]})]})]})};t.default=function(){return Object(f.jsxs)(c.Fragment,{children:[Object(f.jsx)("h3",{children:"Roles List"}),Object(f.jsx)("p",{className:"mb-2",children:"A role provides access to predefined menus and features depending on the assigned role to an administrator that can have access to what he needs."}),Object(f.jsx)(U,{}),Object(f.jsx)("h3",{className:"mt-50",children:"Total users with their roles"}),Object(f.jsx)("p",{className:"mb-2",children:"Find all of your company\u2019s administrator accounts and their associate roles."}),Object(f.jsx)("div",{className:"app-user-list",children:Object(f.jsx)(K,{})})]})}},502:function(e,t,s){"use strict";var a=s(13),c=s(17),l=s(1),n=s(2),i=s.n(n),r=s(98),o=s(482),m=s(10);t.a=function(e){var t=e.data,s=e.tag,n=e.className,d=s||"div";return Object(m.jsx)(d,{className:i()("avatar-group",Object(c.a)({},n,n)),children:t.map((function(e,t){var s=e.tag?e.tag:"div";return Object(m.jsxs)(l.Fragment,{children:[e.title?Object(m.jsx)(r.yb,{placement:e.placement,target:e.title.split(" ").join("-"),children:e.title}):null,e.meta?null:Object(m.jsx)(o.a,Object(a.a)(Object(a.a)(Object(a.a)({tag:s,className:i()("pull-up",Object(c.a)({},e.className,e.className))},e.title?{id:e.title.split(" ").join("-")}:{}),e),{},{title:void 0,meta:void 0})),e.meta?Object(m.jsx)(s,{className:"d-flex align-items-center ps-1",children:e.meta}):null]},t)}))})}},513:function(e,t,s){},910:function(e,t,s){"use strict";t.a=s.p+"static/media/faq-illustrations.f8c4ea78.svg"}}]);
//# sourceMappingURL=60.2779e7e2.chunk.js.map