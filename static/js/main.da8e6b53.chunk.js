(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{12:function(n,e,t){"use strict";t.r(e),t.d(e,"getStore",function(){return a});var r={router:t(8).default},a=function(n){return r[n]?Promise.resolve(r[n]):t(57)("./".concat(n)).then(function(e){return r[n]=e.default,r[n]})}},15:function(n,e,t){"use strict";var r=t(0),a=t.n(r);e.a=function(n){return function(e){return a.a.createElement(n,e)}}},30:function(n,e,t){"use strict";var r=t(11),a=t.n(r),o=t(7),i=t(42),u=t(41),c=t.n(u);function s(){var n=a()(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: ","px;\n  height: ","px;\n  animation: "," 0.9s linear infinite;\n  will-change: transform;\n\n  svg {\n    height: ","px;\n    width: ","px;\n  }\n"]);return s=function(){return n},n}function f(){var n=a()(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return f=function(){return n},n}var l=Object(o.e)(f()),d=Object(o.d)(i.a).attrs(function(n){var e=n.size,t=void 0===e?30:e;return{src:c.a,size:t}})(s(),function(n){return n.size},function(n){return n.size},l,function(n){return n.size},function(n){return n.size});e.a=d},41:function(n,e,t){n.exports=t.p+"static/media/loading-circle.705e066e.svg"},47:function(n,e,t){n.exports=t(69)},57:function(n,e,t){var r={"./":[12],"./index":[12],"./index.js":[12],"./panoramases":[19,1,0],"./panoramases/":[19,1,0],"./panoramases/constants":[44,2],"./panoramases/constants.js":[44,2],"./panoramases/index":[19,1,0],"./panoramases/index.js":[19,1,0],"./router":[8],"./router/":[8],"./router/index":[8],"./router/index.js":[8]};function a(n){var e=r[n];return e?Promise.all(e.slice(1).map(t.e)).then(function(){var n=e[0];return t(n)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e})}a.keys=function(){return Object.keys(r)},a.id=57,n.exports=a},69:function(n,e,t){"use strict";t.r(e);var r=t(9),a=t.n(r),o=t(13),i=t.n(o),u=t(0),c=t.n(u),s=t(6),f=t.n(s),l=t(106),d=t(3),m=t(35),p=t.n(m),h=t(14),v=t(12);Object(d.configure)({enforceActions:"observed"});var b=p()(),O=function(){var n=i()(a.a.mark(function n(){var e;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(v.getStore)("router");case 2:return e=n.sent,n.abrupt("return",Object(h.syncHistoryWithStore)(b,e));case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),g=t(108),x=t(109),E=t(105),w=t(7),y={PANORAMAS_LIST:{BG:"rgba(90, 90, 90, 0.7)"},PANORAMAS_THUMBNAIL:{BORDER_COLOR:"#ffffff",BORDER_COLOR_HOVER:"#f387a1",BORDER_COLOR_ACTIVE:" #ec0974",TEXT_COLOR:"#ffffff"}},j=t(15),R=(t(36),function(){return null}),A=t(11),z=t.n(A);function _(){var n=z()(["\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n  }\n\n  body {\n    font-family: 'Helvetica', 'Arial', 'PingFang TC', 'Heiti TC', 'Microsoft Jhenghei', sans-serif;\n    font-size: 14px;\n  }\n\n  #root {\n    position: relative;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  body,\n  input {\n    background-color: #FAFAFA;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]);return _=function(){return n},n}var S=Object(w.b)(_()),k=t(30),C=c.a.lazy(function(){return t.e(4).then(t.bind(null,99))}),T=c.a.lazy(function(){return t.e(5).then(t.bind(null,100))}),L=c.a.lazy(function(){return t.e(6).then(t.bind(null,107))}),B=function(){return c.a.createElement(w.a,{theme:y},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(k.a,null)},c.a.createElement(R,null),c.a.createElement(S,null),c.a.createElement(g.a,{location:location},c.a.createElement(x.a,{exact:!0,path:"/",render:Object(j.a)(C)}),c.a.createElement(x.a,{path:"/building",render:Object(j.a)(L)}),c.a.createElement(x.a,{exact:!0,path:"/404",render:Object(j.a)(T)}),c.a.createElement(E.a,{to:"/404"}))))};(function(){var n=i()(a.a.mark(function n(){var e,t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.getElementById("root"),n.next=3,O();case 3:t=n.sent,f.a.render(c.a.createElement(l.a,{history:t,basename:"/iStaging"},c.a.createElement(B,null)),e);case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}})()()},8:function(n,e,t){"use strict";t.r(e);var r=t(14);e.default=new r.RouterStore}},[[47,14,11]]]);
//# sourceMappingURL=main.da8e6b53.chunk.js.map