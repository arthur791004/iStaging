(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{11:function(n,e,t){"use strict";t.r(e),t.d(e,"getStore",function(){return a});var r={router:t(8).default},a=function(n){return r[n]?Promise.resolve(r[n]):t(56)("./".concat(n)).then(function(e){return r[n]=e.default,r[n]})}},14:function(n,e,t){"use strict";var r=t(0),a=t.n(r);e.a=function(n){return function(e){return a.a.createElement(n,e)}}},28:function(n,e,t){"use strict";var r=t(27),a=t.n(r),o=t(10),i=t.n(o),u=t(0),c=t.n(u),s=t(7),f=t(42),l=t(41),d=t.n(l);function m(){var n=i()(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: ","px;\n  height: ","px;\n  animation: "," 0.9s linear infinite;\n  will-change: transform;\n\n  svg {\n    height: ","px;\n    width: ","px;\n  }\n"]);return m=function(){return n},n}function p(){var n=i()(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return p=function(){return n},n}var h=Object(s.e)(p()),v=Object(s.d)(f.a).attrs(function(n){var e=n.size;return{size:void 0===e?30:e}})(m(),function(n){return n.size},function(n){return n.size},h,function(n){return n.size},function(n){return n.size});e.a=function(n){return c.a.createElement(v,a()({},n,{src:d.a}))}},41:function(n,e,t){n.exports=t.p+"static/media/loading-circle.705e066e.svg"},46:function(n,e,t){n.exports=t(68)},56:function(n,e,t){var r={"./":[11],"./index":[11],"./index.js":[11],"./panoramases":[18,1,0],"./panoramases/":[18,1,0],"./panoramases/constants":[44,2],"./panoramases/constants.js":[44,2],"./panoramases/index":[18,1,0],"./panoramases/index.js":[18,1,0],"./router":[8],"./router/":[8],"./router/index":[8],"./router/index.js":[8]};function a(n){var e=r[n];return e?Promise.all(e.slice(1).map(t.e)).then(function(){var n=e[0];return t(n)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e})}a.keys=function(){return Object.keys(r)},a.id=56,n.exports=a},68:function(n,e,t){"use strict";t.r(e);var r=t(9),a=t.n(r),o=t(12),i=t.n(o),u=t(0),c=t.n(u),s=t(6),f=t.n(s),l=t(102),d=t(3),m=t(35),p=t.n(m),h=t(13),v=t(11);Object(d.configure)({enforceActions:"observed"});var b=p()({basename:"/iStaging"}),O=function(){var n=i()(a.a.mark(function n(){var e;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(v.getStore)("router");case 2:return e=n.sent,n.abrupt("return",Object(h.syncHistoryWithStore)(b,e));case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),g=t(110),E=t(109),x=t(105),w=t(7),y={PANORAMAS_LIST:{BG:"rgba(90, 90, 90, 0.7)"},PANORAMAS_THUMBNAIL:{BORDER_COLOR:"#ffffff",BORDER_COLOR_HOVER:"#f387a1",BORDER_COLOR_ACTIVE:" #ec0974",TEXT_COLOR:"#ffffff"}},j=t(14),R=(t(36),function(){return null}),A=t(10),z=t.n(A);function _(){var n=z()(["\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n  }\n\n  body {\n    font-family: 'Helvetica', 'Arial', 'PingFang TC', 'Heiti TC', 'Microsoft Jhenghei', sans-serif;\n    font-size: 14px;\n  }\n\n  #root {\n    position: relative;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  body,\n  input {\n    background-color: #FAFAFA;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]);return _=function(){return n},n}var S=Object(w.b)(_()),k=t(28),C=c.a.lazy(function(){return t.e(4).then(t.bind(null,103))}),T=c.a.lazy(function(){return t.e(5).then(t.bind(null,104))}),L=c.a.lazy(function(){return t.e(6).then(t.bind(null,112))}),B=function(){return c.a.createElement(w.a,{theme:y},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(k.a,null)},c.a.createElement(R,null),c.a.createElement(S,null),c.a.createElement(g.a,null,c.a.createElement(E.a,{exact:!0,path:"/",render:Object(j.a)(C)}),c.a.createElement(E.a,{path:"/building",render:Object(j.a)(L)}),c.a.createElement(E.a,{exact:!0,path:"/404",render:Object(j.a)(T)}),c.a.createElement(x.a,{to:"/404"}))))};(function(){var n=i()(a.a.mark(function n(){var e,t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.getElementById("root"),n.next=3,O();case 3:t=n.sent,f.a.render(c.a.createElement(l.a,{history:t},c.a.createElement(B,null)),e);case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}})()()},8:function(n,e,t){"use strict";t.r(e);var r=t(13);e.default=new r.RouterStore}},[[46,14,11]]]);
//# sourceMappingURL=main.4c6ffd2e.chunk.js.map