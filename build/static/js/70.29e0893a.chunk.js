(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[70],{1587:function(e,t,r){"use strict";r.r(t);var a=r(13),s=r(1),n=r(9),c=r(135),i=r(517),l=r(234),o=r(137),j=r(153),d=r(489),u=r(1031),b=r(1104),m=r(1057),h=r(1038),p=r(957),f=r(505),O=r(98),x=(r(496),r(10)),v={email:"",terms:!1,username:"",password:""};t.default=function(){var e=Object(s.useContext)(p.a),t=Object(i.a)().skin,g=Object(n.f)(),y=Object(o.b)(),N=Object(d.e)({defaultValues:v}),w=N.control,C=N.setError,k=N.handleSubmit,F=N.formState.errors,L="dark"===t?"register-v2-dark.svg":"register-v2.svg",P=r(540)("./".concat(L)).default;return Object(x.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(x.jsxs)(O.ib,{className:"auth-inner m-0",children:[Object(x.jsxs)(c.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(x.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(x.jsxs)("defs",{children:[Object(x.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(x.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(x.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(x.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(x.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(x.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(x.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(x.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(x.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(x.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(x.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(x.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(x.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(x.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(x.jsx)("h2",{className:"brand-text text-primary ms-1",children:"Vuexy"})]}),Object(x.jsx)(O.B,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(x.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(x.jsx)("img",{className:"img-fluid",src:P,alt:"Login Cover"})})}),Object(x.jsx)(O.B,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(x.jsxs)(O.B,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(x.jsx)(O.v,{tag:"h2",className:"fw-bold mb-1",children:"Adventure starts here \ud83d\ude80"}),Object(x.jsx)(O.u,{className:"mb-2",children:"Make your app management easy and fun!"}),Object(x.jsxs)(O.H,{action:"/",className:"auth-register-form mt-2",onSubmit:k((function(t){var r=Object(a.a)({},t);if(delete r.terms,Object.values(r).every((function(e){return e.length>0}))&&!0===t.terms){var s=t.username,n=t.email,c=t.password;l.a.register({username:s,email:n,password:c}).then((function(t){if(t.data.error)for(var r in t.data.error)null!==t.data.error[r]&&C(r,{type:"manual",message:t.data.error[r]});else{var s=Object(a.a)(Object(a.a)({},t.data.user),{},{accessToken:t.data.accessToken});e.update(t.data.user.ability),y(Object(j.b)(s)),g("/")}})).catch((function(e){return console.log(e)}))}else for(var i in t)0===t[i].length&&C(i,{type:"manual",message:"Please enter a valid ".concat(i)}),"terms"===i&&!1===t.terms&&C("terms",{type:"manual"})})),children:[Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsx)(O.N,{className:"form-label",for:"register-username",children:"Username"}),Object(x.jsx)(d.a,{id:"username",name:"username",control:w,render:function(e){var t=e.field;return Object(x.jsx)(O.K,Object(a.a)({autoFocus:!0,placeholder:"johndoe",invalid:F.username&&!0},t))}}),F.username?Object(x.jsx)(O.I,{children:F.username.message}):null]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsx)(O.N,{className:"form-label",for:"register-email",children:"Email"}),Object(x.jsx)(d.a,{id:"email",name:"email",control:w,render:function(e){var t=e.field;return Object(x.jsx)(O.K,Object(a.a)({type:"email",placeholder:"john@example.com",invalid:F.email&&!0},t))}}),F.email?Object(x.jsx)(O.I,{children:F.email.message}):null]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsx)(O.N,{className:"form-label",for:"register-password",children:"Password"}),Object(x.jsx)(d.a,{id:"password",name:"password",control:w,render:function(e){var t=e.field;return Object(x.jsx)(f.a,Object(a.a)({className:"input-group-merge",invalid:F.password&&!0},t))}})]}),Object(x.jsxs)("div",{className:"form-check mb-1",children:[Object(x.jsx)(d.a,{name:"terms",control:w,render:function(e){var t=e.field;return Object(x.jsx)(O.K,Object(a.a)(Object(a.a)({},t),{},{id:"terms",type:"checkbox",checked:t.value,invalid:F.terms&&!0}))}}),Object(x.jsxs)(O.N,{className:"form-check-label",for:"terms",children:["I agree to",Object(x.jsx)("a",{className:"ms-25",href:"/",onClick:function(e){return e.preventDefault()},children:"privacy policy & terms"})]})]}),Object(x.jsx)(O.i,{type:"submit",block:!0,color:"primary",children:"Sign up"})]}),Object(x.jsxs)("p",{className:"text-center mt-2",children:[Object(x.jsx)("span",{className:"me-25",children:"Already have an account?"}),Object(x.jsx)(c.b,{to:"/login",children:Object(x.jsx)("span",{children:"Sign in instead"})})]}),Object(x.jsx)("div",{className:"divider my-2",children:Object(x.jsx)("div",{className:"divider-text",children:"or"})}),Object(x.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(x.jsx)(O.i,{color:"facebook",children:Object(x.jsx)(u.a,{size:14})}),Object(x.jsx)(O.i,{color:"twitter",children:Object(x.jsx)(b.a,{size:14})}),Object(x.jsx)(O.i,{color:"google",children:Object(x.jsx)(m.a,{size:14})}),Object(x.jsx)(O.i,{className:"me-0",color:"github",children:Object(x.jsx)(h.a,{size:14})})]})]})})]})})}},496:function(e,t,r){},505:function(e,t,r){"use strict";var a=r(13),s=r(17),n=r(15),c=r(136),i=r(1),l=r(2),o=r.n(l),j=r(1030),d=r(1029),u=r(98),b=r(10),m=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],h=Object(i.forwardRef)((function(e,t){var r,l=e.label,h=e.hideIcon,p=e.showIcon,f=e.visible,O=e.className,x=e.htmlFor,v=e.placeholder,g=e.iconSize,y=e.inputClassName,N=e.invalid,w=Object(c.a)(e,m),C=Object(i.useState)(f),k=Object(n.a)(C,2),F=k[0],L=k[1];return Object(b.jsxs)(i.Fragment,{children:[l?Object(b.jsx)(u.N,{className:"form-label",for:x,children:l}):null,Object(b.jsxs)(u.L,{className:o()((r={},Object(s.a)(r,O,O),Object(s.a)(r,"is-invalid",N),r)),children:[Object(b.jsx)(u.K,Object(a.a)(Object(a.a)({ref:t,invalid:N,type:!1===F?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:o()(Object(s.a)({},y,y))},l&&x?{id:x}:{}),w)),Object(b.jsx)(u.M,{className:"cursor-pointer",onClick:function(){return L(!F)},children:function(){var e=g||14;return!1===F?h||Object(b.jsx)(j.a,{size:e}):p||Object(b.jsx)(d.a,{size:e})}()})]})]})}));t.a=h,h.defaultProps={visible:!1}},957:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(1);function s(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}var l=function(){},o=a.Fragment?function(e){return e?e.length>1?a.createElement.apply(void 0,[a.Fragment,null].concat(e)):a.Children.only(e):null}:a.Children.only,j=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).t=!1,t.i=null,t.u=l,t}c(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this.u()},r.o=function(e){var t=this;e!==this.i&&(this.u(),this.i=null,e&&(this.i=e,this.u=e.on("updated",(function(){return t.forceUpdate()}))))},r.h=function(){var e=this.props,t=e.of||e.a||e.an||e.this||e.on,r=e.not?"cannot":"can";return e.ability[r](e.I||e.do,t,e.field)},r.render=function(){return this.o(this.props.ability),this.t=this.h(),this.props.passThrough||this.t?this.l():null},r.l=function(){var e=this.props,t=e.children,r=e.ability,a="function"===typeof t?t(this.t,r):t;return o(a)},function(e,t,r){t&&s(e.prototype,t),r&&s(e,r)}(t,[{key:"allowed",get:function(){return this.t}}]),t}(a.PureComponent);var d,u=Object(a.createContext)();d=u.Consumer}}]);
//# sourceMappingURL=70.29e0893a.chunk.js.map