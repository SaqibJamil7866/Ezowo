(this.webpackJsonpJira=this.webpackJsonpJira||[]).push([[129],{1671:function(e,n,t){"use strict";t.r(n);var a=t(1),s=t(243),o=t.n(s),c=t(98),i=t(488),r=t(483),l=t(10),m=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport classnames from 'classnames'\nimport { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'\n\nconst OffCanvasPlacement = () => {\n  const [canvasPlacement, setCanvasPlacement] = useState('start')\n  const [canvasOpen, setCanvasOpen] = useState(false)\n\n  const toggleCanvasStart = () => {\n    setCanvasPlacement('start')\n    setCanvasOpen(!canvasOpen)\n  }\n\n  const toggleCanvasEnd = () => {\n    setCanvasPlacement('end')\n    setCanvasOpen(!canvasOpen)\n  }\n\n  const toggleCanvasTop = () => {\n    setCanvasPlacement('top')\n    setCanvasOpen(!canvasOpen)\n  }\n\n  const toggleCanvasBottom = () => {\n    setCanvasPlacement('bottom')\n    setCanvasOpen(!canvasOpen)\n  }\n\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' onClick={toggleCanvasStart}>\n        Toggle Start\n      </Button>\n      <Button color='primary' onClick={toggleCanvasEnd}>\n        Toggle End\n      </Button>\n      <Button color='primary' onClick={toggleCanvasTop}>\n        Toggle Top\n      </Button>\n      <Button color='primary' onClick={toggleCanvasBottom}>\n        Toggle Bottom\n      </Button>\n      <Offcanvas direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasStart}>\n        <OffcanvasHeader toggle={toggleCanvasStart}>OffCanvas {canvasPlacement}</OffcanvasHeader>\n        <OffcanvasBody\n          className={classnames({\n            'my-auto mx-0 flex-grow-0': canvasPlacement === 'start' || canvasPlacement === 'end'\n          })}\n        >\n          <p\n            className={classnames({\n              'text-center': canvasPlacement === 'start' || canvasPlacement === 'end'\n            })}\n          >\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <Button\n            color='primary'\n            onClick={toggleCanvasStart}\n            className={classnames({\n              'mb-1': canvasPlacement === 'start' || canvasPlacement === 'end',\n              'me-1': canvasPlacement === 'top' || canvasPlacement === 'bottom'\n            })}\n            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}\n          >\n            Continue\n          </Button>\n          <Button\n            outline\n            color='secondary'\n            onClick={toggleCanvasStart}\n            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}\n          >\n            Cancel\n          </Button>\n        </OffcanvasBody>\n      </Offcanvas>\n    </div>\n  )\n}\n\nexport default OffCanvasPlacement\n"})}),u=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'\n\nconst OffCanvasPlacement = () => {\n  const [canvasOpen, setCanvasOpen] = useState(false)\n  const [canvasScroll, setCanvasScroll] = useState(false)\n  const [canvasBackdrop, setCanvasBackdrop] = useState(true)\n\n  const toggleCanvasScroll = () => {\n    setCanvasScroll(true)\n    setCanvasOpen(!canvasOpen)\n  }\n\n  const toggleCanvasBackdrop = () => {\n    setCanvasBackdrop(false)\n    setCanvasOpen(!canvasOpen)\n  }\n\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' onClick={toggleCanvasScroll}>\n        Enable Body Scrolling\n      </Button>\n      <Button color='primary' onClick={toggleCanvasBackdrop}>\n        Disable Backdrop\n      </Button>\n      <Offcanvas\n        scrollable={canvasScroll}\n        backdrop={canvasBackdrop}\n        direction='end'\n        isOpen={canvasOpen}\n        toggle={toggleCanvasScroll}\n      >\n        <OffcanvasHeader toggle={toggleCanvasScroll}>OffCanvas {canvasScroll ? 'Scroll' : 'Backdrop'}</OffcanvasHeader>\n        <OffcanvasBody className='my-auto mx-0 flex-grow-0'>\n          <p className='text-center'>\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <p className='text-center'>\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <p className='text-center'>\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <p className='text-center'>\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <Button block color='primary' onClick={toggleCanvasScroll} className='mb-1'>\n            Continue\n          </Button>\n          <Button block outline color='secondary' onClick={toggleCanvasScroll}>\n            Cancel\n          </Button>\n        </OffcanvasBody>\n      </Offcanvas>\n    </div>\n  )\n}\n\nexport default OffCanvasPlacement\n"})}),p=t(15),d=function(){var e=Object(a.useState)(!1),n=Object(p.a)(e,2),t=n[0],s=n[1],o=Object(a.useState)(!1),i=Object(p.a)(o,2),r=i[0],m=i[1],u=Object(a.useState)(!0),d=Object(p.a)(u,2),g=d[0],b=d[1],h=function(){m(!0),s(!t)};return Object(l.jsxs)("div",{className:"demo-inline-spacing",children:[Object(l.jsx)(c.i,{color:"primary",onClick:h,children:"Enable Body Scrolling"}),Object(l.jsx)(c.i,{color:"primary",onClick:function(){b(!1),s(!t)},children:"Disable Backdrop"}),Object(l.jsxs)(c.Y,{scrollable:r,backdrop:g,direction:"end",isOpen:t,toggle:h,children:[Object(l.jsxs)(c.ab,{toggle:h,children:["OffCanvas ",r?"Scroll":"Backdrop"]}),Object(l.jsxs)(c.Z,{className:"my-auto mx-0 flex-grow-0",children:[Object(l.jsx)("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)(c.i,{block:!0,color:"primary",onClick:h,className:"mb-1",children:"Continue"}),Object(l.jsx)(c.i,{block:!0,outline:!0,color:"secondary",onClick:h,children:"Cancel"})]})]})]})},g=t(13),b=t(2),h=t.n(b),v=function(){var e=Object(a.useState)("start"),n=Object(p.a)(e,2),t=n[0],s=n[1],o=Object(a.useState)(!1),i=Object(p.a)(o,2),r=i[0],m=i[1],u=function(){s("start"),m(!r)};return Object(l.jsxs)("div",{className:"demo-inline-spacing",children:[Object(l.jsx)(c.i,{color:"primary",onClick:u,children:"Toggle Start"}),Object(l.jsx)(c.i,{color:"primary",onClick:function(){s("end"),m(!r)},children:"Toggle End"}),Object(l.jsx)(c.i,{color:"primary",onClick:function(){s("top"),m(!r)},children:"Toggle Top"}),Object(l.jsx)(c.i,{color:"primary",onClick:function(){s("bottom"),m(!r)},children:"Toggle Bottom"}),Object(l.jsxs)(c.Y,{direction:t,isOpen:r,toggle:u,children:[Object(l.jsxs)(c.ab,{toggle:u,children:["OffCanvas ",t]}),Object(l.jsxs)(c.Z,{className:h()({"my-auto mx-0 flex-grow-0":"start"===t||"end"===t}),children:[Object(l.jsx)("p",{className:h()({"text-center":"start"===t||"end"===t}),children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)(c.i,Object(g.a)(Object(g.a)({color:"primary",onClick:u,className:h()({"mb-1":"start"===t||"end"===t,"me-1":"top"===t||"bottom"===t})},"start"===t||"end"===t?{block:!0}:{}),{},{children:"Continue"})),Object(l.jsx)(c.i,Object(g.a)(Object(g.a)({outline:!0,color:"secondary",onClick:u},"start"===t||"end"===t?{block:!0}:{}),{},{children:"Cancel"}))]})]})]})};n.default=function(){return Object(a.useEffect)((function(){o.a.highlightAll()}),[]),Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)(r.a,{title:"Offcanvas",data:[{title:"Components"},{title:"OffCanvas"}]}),Object(l.jsxs)(c.ib,{className:"match-height",children:[Object(l.jsx)(c.B,{sm:"12",children:Object(l.jsx)(i.a,{title:"Placement",code:m,children:Object(l.jsx)(v,{})})}),Object(l.jsx)(c.B,{sm:"12",children:Object(l.jsx)(i.a,{title:"Options",code:u,children:Object(l.jsx)(d,{})})})]})]})}},488:function(e,n,t){"use strict";var a=t(15),s=t(1),o=t(1012),c=t(98),i=t(10);n.a=function(e){var n=e.title,t=e.children,r=e.noBody,l=e.code,m=e.iconCode,u=Object(s.useState)(!1),p=Object(a.a)(u,2),d=p[0],g=p[1],b=m||Object(i.jsx)(o.a,{size:15}),h=r?s.Fragment:c.m;return Object(i.jsxs)(c.l,{className:"card-snippet",children:[Object(i.jsxs)(c.p,{children:[Object(i.jsx)(c.v,{tag:"h4",children:n}),Object(i.jsx)("div",{className:"views cursor-pointer",onClick:function(){return g(!d)},children:b})]}),Object(i.jsx)(h,{children:t}),Object(i.jsx)(c.C,{isOpen:d,children:Object(i.jsx)(c.m,{children:l})})]})}}}]);
//# sourceMappingURL=129.2d4dd1c8.chunk.js.map