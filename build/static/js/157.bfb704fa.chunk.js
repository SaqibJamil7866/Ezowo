(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[157],{1626:function(e,s,t){"use strict";t.r(s);var c=t(15),a=t(1),i=t(5),l=t.n(i),n=t(620),r=t(483),j=t(98),m=t(2),d=t.n(m),b=t(482),o=t(10),x=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{className:"mb-1",children:"Polls"}),Object(o.jsx)(j.u,{className:"mb-0",children:"Who is the best actor in Marvel Cinematic Universe?"}),s.map((function(e,s){return Object(o.jsxs)("div",{className:"profile-polls-info mt-2",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsxs)("div",{className:"form-check",children:[Object(o.jsx)(j.K,{type:"radio",name:"polls",id:"radio-".concat(e.name.toLowerCase())}),Object(o.jsx)(j.N,{className:"form-check-label",for:"radio-".concat(e.name.toLowerCase()),children:e.name})]}),Object(o.jsx)("div",{className:"text-end",children:e.result})]}),Object(o.jsx)(j.hb,{className:"my-50",value:e.result.replace("%"," ").trim()}),Object(o.jsx)("div",{className:d()("avatar-group",{"mt-1":s>0,"my-1":0===s}),children:e.votedUser.map((function(e){return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(b.a,{imgWidth:"26",imgHeight:"26",img:e.img,className:"pull-up",id:e.username.toLowerCase().split(" ").join("-")}),Object(o.jsx)(j.yb,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))})]},e.name)}))]})})},h=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{className:"mb-75",children:"About"}),Object(o.jsx)(j.u,{children:s.about}),Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)("h5",{className:"mb-75",children:"Joined:"}),Object(o.jsx)(j.u,{children:s.joined})]}),Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)("h5",{className:"mb-75",children:"Lives:"}),Object(o.jsx)(j.u,{children:s.lives})]}),Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)("h5",{className:"mb-75",children:"Email:"}),Object(o.jsx)(j.u,{children:s.email})]}),Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)("h5",{className:"mb-75",children:"Website:"}),Object(o.jsx)(j.u,{children:s.website})]})]})})},O=t(972),u=t(1061),f=t(1084),N=function(e){return e.data.map((function(e){return Object(o.jsx)(j.l,{className:"post",children:Object(o.jsxs)(j.m,{children:[Object(o.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(o.jsx)(b.a,{className:"me-1",img:e.avatar,imgHeight:"50",imgWidth:"50"}),Object(o.jsxs)("div",{className:"profile-user-info",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.username}),Object(o.jsx)("small",{className:"text-muted",children:e.postTime})]})]}),Object(o.jsx)(j.u,{children:e.postText}),e.postImg?Object(o.jsx)("img",{src:e.postImg,alt:e.username,className:"img-fluid rounded mb-75"}):e.postVid?Object(o.jsx)("iframe",{src:"https://www.youtube.com/embed/6stlCkUDG_s",className:"w-100 rounded height-250 mb-50 border-0"}):null,Object(o.jsxs)(j.ib,{className:"d-flex justify-content-start align-items-center flex-wrap pb-50 post-actions",children:[Object(o.jsxs)(j.B,{className:"d-flex justify-content-between justify-content-sm-start mb-2",sm:"6",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center text-muted text-nowrap cursor-pointer",children:[Object(o.jsx)(O.a,{size:18,className:d()("me-50",{"profile-likes":!0===e.youLiked})}),Object(o.jsx)("span",{children:e.likes})]}),Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("div",{className:"avatar-group ms-1",children:e.likedUsers.map((function(e){return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(b.a,{className:"pull-up",img:e.avatar,id:e.username.toLowerCase().split(" ").join("-"),imgHeight:"26",imgWidth:"26"}),Object(o.jsx)(j.yb,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))}),Object(o.jsxs)("a",{href:"/",className:"text-muted text-nowrap ms-50",onClick:function(e){return e.preventDefault()},children:["+",e.likedCount," more"]})]})]}),Object(o.jsxs)(j.B,{className:"d-flex justify-content-between justify-content-sm-end align-items-center mb-2",sm:"6",children:[Object(o.jsxs)("a",{href:"/",className:"text-nowrap",onClick:function(e){return e.preventDefault()},children:[Object(o.jsx)(u.a,{size:18,className:"text-body me-50"}),Object(o.jsx)("span",{className:"text-muted me-1",children:e.comments})]}),Object(o.jsxs)("a",{href:"/",className:"text-nowrap share-post",onClick:function(e){return e.preventDefault()},children:[Object(o.jsx)(f.a,{size:18,className:"text-body mx-50"}),Object(o.jsx)("span",{className:"text-muted me-1",children:e.share})]})]})]}),e.detailedComments.map((function(e){return Object(o.jsxs)("div",{className:"d-flex align-items-start mb-1",children:[Object(o.jsx)(b.a,{img:e.avatar,className:"mt-25 me-75",imgHeight:"34",imgWidth:"34"}),Object(o.jsxs)("div",{className:"profile-user-info w-100",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.username}),Object(o.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(o.jsx)(O.a,{size:18,className:d()("text-body",{"profile-likes":!0===e.youLiked})}),Object(o.jsx)("span",{className:"align-middle ms-25 text-muted",children:e.commentsLikes})]})]}),Object(o.jsx)("small",{children:e.comment})]})]},e.username)})),Object(o.jsxs)("fieldset",{className:"form-label-group mb-50",children:[Object(o.jsx)(j.N,{className:"form-check-label",for:"add-comment-".concat(e.username),children:"Add Comment"}),Object(o.jsx)(j.K,{id:"add-comment-".concat(e.username),type:"textarea",rows:"3",placeholder:"Add Comment"})]}),Object(o.jsx)(j.i,{color:"primary",size:"sm",children:"Post Comment"})]})},e.username)}))},p=t(983),g=t(1079),v=t(1047),w=t(1045),k=t(1110),y=t(1027),C=function(e){var s=e.data,t=Object(a.useState)(!1),i=Object(c.a)(t,2),l=i[0],n=i[1];return Object(o.jsxs)(j.l,{className:"profile-header mb-2",children:[Object(o.jsx)(j.q,{src:s.coverImg,alt:"User Profile Image",top:!0}),Object(o.jsx)("div",{className:"position-relative",children:Object(o.jsxs)("div",{className:"profile-img-container d-flex align-items-center",children:[Object(o.jsx)("div",{className:"profile-img",children:Object(o.jsx)("img",{className:"rounded img-fluid",src:s.avatar,alt:"Card image"})}),Object(o.jsxs)("div",{className:"profile-title ms-3",children:[Object(o.jsx)("h2",{className:"text-white",children:s.username}),Object(o.jsx)("p",{className:"text-white",children:s.designation})]})]})}),Object(o.jsx)("div",{className:"profile-header-nav",children:Object(o.jsxs)(j.X,{container:!1,className:"justify-content-end justify-content-md-between w-100",expand:"md",light:!0,children:[Object(o.jsx)(j.i,{color:"",className:"btn-icon navbar-toggler",onClick:function(){return n(!l)},children:Object(o.jsx)(p.a,{size:21})}),Object(o.jsx)(j.C,{isOpen:l,navbar:!0,children:Object(o.jsxs)("div",{className:"profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0",children:[Object(o.jsxs)(j.U,{className:"mb-0",pills:!0,children:[Object(o.jsx)(j.V,{children:Object(o.jsxs)(j.W,{className:"fw-bold",active:!0,children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Feed"}),Object(o.jsx)(g.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(j.V,{children:Object(o.jsxs)(j.W,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"About"}),Object(o.jsx)(v.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(j.V,{children:Object(o.jsxs)(j.W,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Photos"}),Object(o.jsx)(w.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(j.V,{children:Object(o.jsxs)(j.W,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Friends"}),Object(o.jsx)(k.a,{className:"d-block d-md-none",size:14})]})})]}),Object(o.jsxs)(j.i,{color:"primary",children:[Object(o.jsx)(y.a,{className:"d-block d-md-none",size:14}),Object(o.jsx)("span",{className:"fw-bold d-none d-md-block",children:"Edit"})]})]})})]})})]})},z=t(999),W=t(1094),L=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{children:"Twitter Feeds"}),s.map((function(e,s){return Object(o.jsxs)("div",{className:d()("profile-twitter-feed",{"mt-1":0===s,"mt-2":0!==s}),children:[Object(o.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(o.jsx)(b.a,{className:"me-1",img:e.imgUrl,imgHeight:"40",imgWidth:"40"}),Object(o.jsxs)("div",{className:"profile-user-info",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.title}),Object(o.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(o.jsxs)("small",{className:"text-muted",children:["@",e.id]}),Object(o.jsx)(z.a,{size:14})]})]}),Object(o.jsx)("div",{className:"profile-star ms-auto",children:Object(o.jsx)(W.a,{size:18,className:d()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]}),Object(o.jsx)(j.u,{className:"mb-50",children:e.desc}),Object(o.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)("small",{children:e.tags})})]},s)}))]})})},P=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{className:"mb-0",children:"Latest Photos"}),Object(o.jsx)(j.ib,{children:s.map((function(e,s){return Object(o.jsx)(j.B,{md:"4",xs:"6",className:"profile-latest-img",children:Object(o.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)("img",{className:"img-fluid rounded",src:e.img,alt:"latest-photo"})})},s)}))})]})})},B=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{className:"profile-suggestion",children:[Object(o.jsx)("h5",{className:"mb-2",children:"Suggested Pages"}),s.map((function(e,t){return Object(o.jsxs)("div",{className:d()("d-flex justify-content-start align-items-center",{"mb-1":t!==s.length-1}),children:[Object(o.jsx)(b.a,{className:"me-1",img:e.avatar,imgHeight:40,imgWidth:40}),Object(o.jsxs)("div",{className:"profile-user-info",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.username}),Object(o.jsx)("small",{className:"text-muted",children:e.subtitle})]}),Object(o.jsx)("div",{className:"profile-star ms-auto",children:Object(o.jsx)(W.a,{size:18,className:d()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]},t)}))]})})},D=t(1108),F=function(e){var s=e.data;return Object(o.jsx)(j.l,{children:Object(o.jsxs)(j.m,{children:[Object(o.jsx)("h5",{children:"Suggestions"}),s.map((function(e,s){return Object(o.jsxs)("div",{className:d()("d-flex justify-content-start align-items-center",{"mt-2":0===s,"mt-1":0!==s}),children:[Object(o.jsx)(b.a,{className:"me-75",img:e.avatar,imgHeight:"40",imgWidth:"40"}),Object(o.jsxs)("div",{className:"profile-user-info",children:[Object(o.jsx)("h6",{className:"mb-0",children:e.name}),Object(o.jsx)("small",{className:"text-muted",children:e.mutualFriend})]}),Object(o.jsx)("div",{className:"ms-auto",children:Object(o.jsx)(j.i,{className:"btn-icon",color:"primary",size:"sm",children:Object(o.jsx)(D.a,{size:14})})})]},s)}))]})})};t(964),s.default=function(){var e=Object(a.useState)(null),s=Object(c.a)(e,2),t=s[0],i=s[1],m=Object(a.useState)(!1),d=Object(c.a)(m,2),b=d[0],O=d[1];return Object(a.useEffect)((function(){l.a.get("/profile/data").then((function(e){return i(e.data)}))}),[]),Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(r.a,{title:"Profile",data:[{title:"Pages"},{title:"Profile"}]}),null!==t?Object(o.jsxs)("div",{id:"user-profile",children:[Object(o.jsx)(j.ib,{children:Object(o.jsx)(j.B,{sm:"12",children:Object(o.jsx)(C,{data:t.header})})}),Object(o.jsxs)("section",{id:"profile-info",children:[Object(o.jsxs)(j.ib,{children:[Object(o.jsxs)(j.B,{lg:{size:3,order:1},sm:{size:12},xs:{order:2},children:[Object(o.jsx)(h,{data:t.userAbout}),Object(o.jsx)(B,{data:t.suggestedPages}),Object(o.jsx)(L,{data:t.twitterFeeds})]}),Object(o.jsx)(j.B,{lg:{size:6,order:2},sm:{size:12},xs:{order:1},children:Object(o.jsx)(N,{data:t.post})}),Object(o.jsxs)(j.B,{lg:{size:3,order:3},sm:{size:12},xs:{order:3},children:[Object(o.jsx)(P,{data:t.latestPhotos}),Object(o.jsx)(F,{data:t.suggestions}),Object(o.jsx)(x,{data:t.polls})]})]}),Object(o.jsx)(j.ib,{children:Object(o.jsx)(j.B,{className:"text-center",sm:"12",children:Object(o.jsx)(j.i,{color:"primary",className:"border-0 mb-1 profile-load-more",size:"sm",onClick:function(){O(!0),setTimeout((function(){O(!1)}),2e3)},children:Object(o.jsx)(n.a,{blocking:b,overlayColor:"rgba(255,255,255, .5)",children:Object(o.jsx)("span",{children:" Load More"})})})})})]})]}):null]})}}}]);
//# sourceMappingURL=157.bfb704fa.chunk.js.map