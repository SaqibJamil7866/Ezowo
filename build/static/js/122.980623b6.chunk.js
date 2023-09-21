(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[122],{1658:function(e,r,n){"use strict";n.r(r);var c=n(1),t=n(243),a=n.n(t),s=n(98),b=n(135),m=n(10),d=function(){return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsxs)(s.g,{listClassName:"breadcrumb-slash",children:[Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Home "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Library "})}),Object(m.jsx)(s.h,{active:!0,children:Object(m.jsx)("span",{children:" Data "})})]}),Object(m.jsxs)(s.g,{listClassName:"breadcrumb-dots",children:[Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Home "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Library "})}),Object(m.jsx)(s.h,{active:!0,children:Object(m.jsx)("span",{children:" Data "})})]}),Object(m.jsxs)(s.g,{listClassName:"breadcrumb-dashes",children:[Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Home "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Library "})}),Object(m.jsx)(s.h,{active:!0,children:Object(m.jsx)("span",{children:" Data "})})]}),Object(m.jsxs)(s.g,{listClassName:"breadcrumb-pipes",children:[Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Home "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Library "})}),Object(m.jsx)(s.h,{active:!0,children:Object(m.jsx)("span",{children:" Data "})})]}),Object(m.jsxs)(s.g,{listClassName:"breadcrumb-chevron",children:[Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Home "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Library "})}),Object(m.jsx)(s.h,{active:!0,children:Object(m.jsx)("span",{children:" Data "})})]})]})},i=function(){return Object(m.jsx)(c.Fragment,{children:Object(m.jsxs)(s.g,{children:[Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Home "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Library "})}),Object(m.jsx)(s.h,{active:!0,children:Object(m.jsx)("span",{children:" Data "})})]})})},j=n(483),l=function(){return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)("div",{className:"d-flex justify-content-start breadcrumb-wrapper",children:Object(m.jsxs)(s.g,{className:"ms-1",children:[Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Home "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Library "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)("span",{children:" Data "})})]})}),Object(m.jsx)("div",{className:"d-flex justify-content-center breadcrumb-wrapper my-1",children:Object(m.jsxs)(s.g,{children:[Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Home "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Library "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)("span",{children:" Data "})})]})}),Object(m.jsx)("div",{className:"d-flex justify-content-end breadcrumb-wrapper",children:Object(m.jsxs)(s.g,{className:"me-1",children:[Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Home "})}),Object(m.jsx)(s.h,{children:Object(m.jsx)(b.b,{to:"#",children:" Library "})}),Object(m.jsx)(s.h,{className:"pe-1",children:Object(m.jsx)("span",{children:" Data "})})]})})]})},u=n(488),h=Object(m.jsx)("pre",{children:Object(m.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsDefault = () => {\n  return (\n    <React.Fragment>\n      <Breadcrumb className='ms-1'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsDefault\n    "})}),o=Object(m.jsx)("pre",{children:Object(m.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsStyles = () => {\n  return (\n    <React.Fragment>\n      <Breadcrumb className='breadcrumb-slash'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-dots'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-dashes'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-pipes'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-chevron'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsStyles\n\n      "})}),x=Object(m.jsx)("pre",{children:Object(m.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsAlignment = () => {\n  return (\n    <React.Fragment>\n      <div className='justify-content-start breadcrumb-wrapper'>\n        <Breadcrumb className='ms-1'>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n      <div className='justify-content-center breadcrumb-wrapper'>\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n      <div className='justify-content-end breadcrumb-wrapper'>\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsAlignment\n\n      "})});r.default=function(){return Object(c.useEffect)((function(){a.a.highlightAll()}),[]),Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(j.a,{title:"Breadcrumbs",data:[{title:"Components"},{title:"Breadcrumbs"}]}),Object(m.jsxs)(s.ib,{children:[Object(m.jsx)(s.B,{sm:"12",children:Object(m.jsxs)("section",{id:"component-breadcrumbs",children:[Object(m.jsx)(u.a,{title:"Default",code:h,children:Object(m.jsx)(i,{})}),Object(m.jsxs)(u.a,{title:"Styles",code:o,children:[Object(m.jsxs)(s.u,{children:["These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing"," ",Object(m.jsx)("code",{children:"$breadcrumb-divider"})," variable value in scss"]}),Object(m.jsx)(d,{})]})]})}),Object(m.jsx)(s.B,{sm:"12",children:Object(m.jsx)("section",{id:"breadcrumb-alignment",children:Object(m.jsxs)(u.a,{title:"Alignment",code:x,children:[Object(m.jsxs)(s.u,{children:["Use class ",Object(m.jsxs)("code",{children:[".justify-content-","{position}"]})," to align breadcrumb to desired position."]}),Object(m.jsx)(l,{})]})})})]})]})}},488:function(e,r,n){"use strict";var c=n(15),t=n(1),a=n(1012),s=n(98),b=n(10);r.a=function(e){var r=e.title,n=e.children,m=e.noBody,d=e.code,i=e.iconCode,j=Object(t.useState)(!1),l=Object(c.a)(j,2),u=l[0],h=l[1],o=i||Object(b.jsx)(a.a,{size:15}),x=m?t.Fragment:s.m;return Object(b.jsxs)(s.l,{className:"card-snippet",children:[Object(b.jsxs)(s.p,{children:[Object(b.jsx)(s.v,{tag:"h4",children:r}),Object(b.jsx)("div",{className:"views cursor-pointer",onClick:function(){return h(!u)},children:o})]}),Object(b.jsx)(x,{children:n}),Object(b.jsx)(s.C,{isOpen:u,children:Object(b.jsx)(s.m,{children:d})})]})}}}]);
//# sourceMappingURL=122.980623b6.chunk.js.map