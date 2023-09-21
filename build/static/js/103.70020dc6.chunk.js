(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[103],{1680:function(e,s,t){"use strict";t.r(s);var n=t(1),a=t(98),c=t(13),r=t(71),i=t(15),l=t(135),o=t(2),m=t.n(o),d=t(10),j={support:"light-info",user:"light-success",manager:"light-warning",administrator:"light-primary","restricted-user":"light-danger"},b=[{name:"Name",sortable:!0,minWidth:"350px",cell:function(e){return e.name},selector:function(e){return e.name}},{sortable:!0,minWidth:"350px",name:"Assigned To",cell:function(e){var s=e.assignedTo;return s?s.map((function(e,t){var n=s[s.length-1]===t;return Object(d.jsx)(l.b,{to:"/apps/user/list",className:m()({"me-50":!n}),children:Object(d.jsx)(a.f,{pill:!0,color:j[e],className:"text-capitalize",children:e.replace("-"," ")})},"".concat(e,"-").concat(t))})):null}},{sortable:!0,minWidth:"350px",name:"Created Date",selector:function(e){return e.createdDate},cell:function(e){return e.createdDate},sortFunction:function(e,s){return new Date(s.createdDate)-new Date(e.createdDate)}}],u=t(137),p=t(169),h=t(512),x=t.n(h),O=t(526),g=t.n(O),f=t(489),N=t(1027),v=t(1100),y=t(1001),P=(t(513),function(e){var s=e.role,t=e.setShow,n=e.searchTerm,c=e.rowsPerPage,r=e.handlePerPage,i=e.handleFilter,l=e.handleAssignedToChange;return Object(d.jsxs)(a.ib,{className:"text-nowrap w-100 my-75 g-0 permission-header",children:[Object(d.jsx)(a.B,{xs:12,lg:4,className:"d-flex align-items-center",children:Object(d.jsxs)("div",{className:"d-flex align-items-center justify-content-center justify-content-lg-start",children:[Object(d.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(d.jsxs)(a.K,{className:"mx-50",type:"select",id:"rows-per-page",value:c,onChange:r,style:{width:"5rem"},children:[Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"25",children:"25"}),Object(d.jsx)("option",{value:"50",children:"50"})]}),Object(d.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(d.jsx)(a.B,{xs:12,lg:8,children:Object(d.jsxs)("div",{className:"d-flex align-items-center justify-content-lg-end justify-content-start flex-md-nowrap flex-wrap mt-lg-0 mt-1",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center me-1",children:[Object(d.jsx)("label",{className:"mb-0",htmlFor:"search-permission",children:"Search:"}),Object(d.jsx)(a.K,{type:"text",value:n,id:"search-permission",className:"ms-50 w-100",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsx)("div",{className:"mt-50 width-200 me-1 mt-sm-0 mt-1",children:Object(d.jsxs)(a.K,{type:"select",name:"select",value:s,onChange:function(e){return l(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"Select Role"}),Object(d.jsx)("option",{value:"administrator",children:"Administrator"}),Object(d.jsx)("option",{value:"manager",children:"Manager"}),Object(d.jsx)("option",{value:"user",children:"User"}),Object(d.jsx)("option",{value:"support",children:"Support"}),Object(d.jsx)("option",{value:"restricted-user",children:"Restricted User"})]})}),Object(d.jsx)(a.i,{className:"add-permission mt-sm-0 mt-1",color:"primary",onClick:function(){return t(!0)},children:"Add Permission"})]})})]})}),k=function(){var e=Object(u.b)(),s=Object(u.c)((function(e){return e.permissions})),t=Object(f.e)({defaultValues:{permissionName:""}}),l=t.reset,o=t.control,j=t.setError,h=t.setValue,O=t.handleSubmit,k=t.formState.errors,w=Object(n.useState)(!1),C=Object(i.a)(w,2),S=C[0],T=C[1],B=Object(n.useState)(""),D=Object(i.a)(B,2),F=D[0],q=D[1],A=Object(n.useState)(""),K=Object(i.a)(A,2),E=K[0],L=K[1],H=Object(n.useState)(1),I=Object(i.a)(H,2),J=I[0],W=I[1],z=Object(n.useState)(10),R=Object(i.a)(z,2),U=R[0],M=R[1];Object(n.useEffect)((function(){e(Object(p.d)({assignedTo:F,q:E,page:J,perPage:U}))}),[e,s.data.length]);var V=function(t){t.permissionName.length?(null!==s.selected?e(Object(p.f)({name:t.permissionName,id:s.selected.id})):e(Object(p.a)({name:t.permissionName})),T(!1)):j("permissionName",{type:"manual"})},Q=[].concat(Object(r.a)(b),[{name:"Actions",cell:function(s){return Object(d.jsxs)("div",{className:"d-flex align-items-center permissions-actions",children:[Object(d.jsx)(a.i,{size:"sm",color:"transparent",className:"btn btn-icon",onClick:function(){return t=s,e(Object(p.e)(t)),h("permissionName",t.name),void T(!0);var t},children:Object(d.jsx)(N.a,{className:"font-medium-2"})}),Object(d.jsx)(a.i,{size:"sm",color:"transparent",className:"btn btn-icon",onClick:function(){return e(Object(p.c)(s.id))},children:Object(d.jsx)(v.a,{className:"font-medium-2"})})]})}}]),G=function(){l(),T(!1)};return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{className:"react-dataTable",children:Object(d.jsx)(g.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:Q,sortIcon:Object(d.jsx)(y.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Number(Math.ceil(s.total/U));return Object(d.jsx)(x.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==J?J-1:0,onPageChange:function(s){return function(s){e(Object(p.d)({assignedTo:F,q:E,perPage:U,page:s.selected+1})),W(s.selected+1)}(s)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={q:E},t=Object.keys(e).some((function(s){return e[s].length>0}));return s.data.length>0?s.data:0===s.data.length&&t?[]:s.allData.slice(0,U)}(),subHeaderComponent:Object(d.jsx)(P,{setShow:T,assignedTo:F,searchTerm:E,rowsPerPage:U,handleFilter:function(s){L(s),e(Object(p.d)({q:s,assignedTo:F,page:J,perPage:U}))},handlePerPage:function(s){var t=parseInt(s.currentTarget.value);e(Object(p.d)({assignedTo:F,q:E,perPage:t,page:J})),M(t)},handleAssignedToChange:function(s){q(s),e(Object(p.d)({q:E,assignedTo:s,page:J,perPage:U}))}})})}),Object(d.jsxs)(a.Q,{isOpen:S,onClosed:function(){e(Object(p.e)(null)),h("permissionName","")},toggle:function(){return T(!S)},className:"modal-dialog-centered",children:[Object(d.jsx)(a.T,{className:"bg-transparent",toggle:function(){return T(!S)}}),Object(d.jsxs)(a.R,{className:m()({"p-3 pt-0":null!==s.selected,"px-sm-5 pb-5":null===s.selected}),children:[Object(d.jsxs)("div",{className:"text-center mb-2",children:[Object(d.jsxs)("h1",{className:"mb-1",children:[null!==s.selected?"Edit":"Add New"," Permission"]}),Object(d.jsx)("p",{children:null!==s.selected?"Edit permission as per your requirements.":"Permissions you may use and assign to your users."})]}),null===s.selected?Object(d.jsxs)(a.ib,{tag:a.H,onSubmit:O(V),children:[Object(d.jsxs)(a.B,{xs:12,children:[Object(d.jsx)(a.N,{className:"form-label",for:"permission-name",children:"Permission Name"}),Object(d.jsx)(f.a,{control:o,id:"permissionName",name:"permissionName",render:function(e){var s=e.field;return Object(d.jsx)(a.K,Object(c.a)({placeholder:"Permission Name",invalid:k.permissionName&&!0},s))}}),k&&k.permissionName&&Object(d.jsx)(a.I,{children:"Please enter a valid Permission Name"})]}),Object(d.jsx)(a.B,{xs:12,className:"mt-75",children:Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)(a.K,{type:"checkbox",id:"core-perm-checkbox"}),Object(d.jsx)(a.N,{className:"form-check-label",for:"core-perm-checkbox",children:"Set as core permission"})]})}),Object(d.jsxs)(a.B,{xs:12,className:"text-center mt-2",children:[Object(d.jsx)(a.i,{className:"me-1",color:"primary",children:"Create Permission"}),Object(d.jsx)(a.i,{outline:!0,type:"reset",onClick:G,children:"Discard"})]})]}):Object(d.jsxs)(n.Fragment,{children:[Object(d.jsxs)(a.e,{color:"warning",children:[Object(d.jsx)("h6",{className:"alert-heading",children:"Warning!"}),Object(d.jsx)("div",{className:"alert-body",children:"By editing the permission name, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding."})]}),Object(d.jsxs)(a.ib,{tag:a.H,onSubmit:O(V),children:[Object(d.jsxs)(a.B,{xs:12,sm:9,children:[Object(d.jsx)(a.N,{className:"form-label",for:"permission-name",children:"Permission Name"}),Object(d.jsx)(f.a,{control:o,id:"permissionName",name:"permissionName",render:function(e){var s=e.field;return Object(d.jsx)(a.K,Object(c.a)({placeholder:"Permission Name",invalid:k.permissionName&&!0},s))}}),k&&k.permissionName&&Object(d.jsx)(a.I,{children:"Please enter a valid Permission Name"})]}),Object(d.jsx)(a.B,{xs:12,sm:3,className:"p-sm-0",children:Object(d.jsx)(a.i,{className:"mt-2",color:"primary",children:"Update"})}),Object(d.jsx)(a.B,{xs:12,className:"mt-75",children:Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)(a.K,{type:"checkbox",id:"core-perm-checkbox"}),Object(d.jsx)(a.N,{className:"form-check-label",for:"core-perm-checkbox",children:"Set as core permission"})]})})]})]})]})]})]})};s.default=function(){return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("h3",{children:"Permissions List"}),Object(d.jsx)("p",{children:"Each category (Basic, Professional, and Business) includes the four predefined roles shown below."}),Object(d.jsx)(a.l,{children:Object(d.jsx)("div",{className:"card-datatable app-user-list table-responsive",children:Object(d.jsx)(k,{})})})]})}},513:function(e,s,t){}}]);
//# sourceMappingURL=103.70020dc6.chunk.js.map