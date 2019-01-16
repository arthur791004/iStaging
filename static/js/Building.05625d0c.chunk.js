(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(t,e,n){"use strict";n.r(e);var r=n(70),o=n.n(r),a=n(71),i=n.n(a),u=n(72),c=n.n(u),s=n(73),l=n.n(s),f=n(74),p=n.n(f),b=n(0),y=n.n(b),m=n(1),h=n(44),d=function(t,e){var n=t[e]||t.match&&t.match.params[e];return n&&String(n)},g=n(76),v=n.n(g),O=n(75),w=n.n(O),x=n(80),S=n.n(x),j=n(11),E=function(t){function e(){var t,n;o()(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=c()(this,(t=l()(e)).call.apply(t,[this].concat(a)))).state={isLoading:!0,stores:{}},n.setStores=function(t){n.setState({stores:t,isLoading:!1})},n}return p()(e,t),i()(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.storeNames;Promise.all(e.map(function(t){return Object(j.getStore)(t)})).then(function(n){var r=n.reduce(function(t,n,r){return S()({},t,w()({},e[r],n))},{});t.setStores(r)})}},{key:"render",value:function(){var t=this.props.children,e=this.state,n=e.isLoading,r=e.stores;return n?null:t(r)}}]),e}(y.a.Component);E.propTypes={storeNames:Object(m.arrayOf)(m.string),children:m.func};var P=E,k=function(t){return function(e){return function(n){return y.a.createElement(P,{storeNames:t},function(t){return y.a.createElement(e,v()({stores:t},n))})}}},D=n(29),L=y.a.lazy(function(){return Promise.all([n.e(13),n.e(8)]).then(n.bind(null,102))}),_=y.a.lazy(function(){return n.e(9).then(n.bind(null,106))}),C=n(10),B=n.n(C);function I(){var t=B()(["\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 15px;\n  border: 1px solid #ebccd1;\n  border-radius: 4px;\n  color: #a94442;\n  background-color: #f2dede;\n  text-align: center;\n"]);return I=function(){return t},t}var T,N=n(7).d.div(I()),z=k(["panoramases"])(T=Object(h.observer)(T=function(t){function e(){var t,n;o()(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=c()(this,(t=l()(e)).call.apply(t,[this].concat(a)))).state={selected:0},n.handleChange=function(t){n.setState({selected:t})},n}return p()(e,t),i()(e,[{key:"componentDidMount",value:function(){var t=d(this.props,"buildingID");this.props.stores.panoramases.getBuildingByID(t)}},{key:"render",value:function(){var t=d(this.props,"buildingID"),e=this.props.stores.panoramases,n=this.state.selected,r=e.selectPanoramasList(t);if(e.error)return y.a.createElement(N,null,"Oops...".concat(e.error));if(e.isLoading||0===r.length)return y.a.createElement(D.a,null);var o=r[n],a=o.id,i=o.src,u=o.thumbnail;return y.a.createElement(y.a.Fragment,null,y.a.createElement(y.a.Suspense,{fallback:y.a.createElement(D.a,null)},y.a.createElement(L,{id:a,src:i,thumbnail:u})),y.a.createElement(y.a.Suspense,{fallback:""},y.a.createElement(_,{panoramasList:r,selected:n,handleClick:this.handleChange})))}}]),e}(y.a.Component))||T)||T;z.propTypes={stores:Object(m.shape)({panoramases:Object(m.shape)({isLoading:m.bool,getBuildingByID:m.func,getPanoramasListByID:m.func})})};e.default=z},70:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},71:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},72:function(t,e,n){var r=n(88),o=n(89);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},73:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},74:function(t,e,n){var r=n(90);t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},75:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},76:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},80:function(t,e,n){var r=n(75);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}},88:function(t,e){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},89:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},90:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n}}]);
//# sourceMappingURL=Building.05625d0c.chunk.js.map