(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{12:function(e,t,n){e.exports=n(49)},14:function(e,t,n){"use strict";t.a=function(e){var t={style:"currency",currency:"USD",minimumFractionDigits:2};return e%100==0&&(t.minimumFractionDigits=0),new Intl.NumberFormat("en-US",t).format(e/100)}},15:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return a});var r="http://localhost:4444",o="https://api.cloudinary.com/v1_1/leeandher/image/upload",i="pk_test_Bq5KWacdbqryMyqc5yr8v8S800xZRb43GW",a=4},352:function(e,t,n){__NEXT_REGISTER_PAGE("/items",function(){return e.exports=n(86),{page:e.exports.default}})},49:function(e,t,n){"use strict";var r=n(35),o=n(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(50)),a=o(n(47)),u=o(n(21)),c=o(n(22)),l=o(n(31)),f=o(n(32)),p=o(n(33)),s=o(n(48)),d=o(n(28)),m=n(69),y=r(n(0)),h=(o(n(5)),r(n(41))),b=n(37);(0,b.execOnce)(b.warn);var g=function(e){function t(){var e,n,r,o,i,c;(0,u.default)(this,t);for(var p=arguments.length,y=new Array(p),g=0;g<p;g++)y[g]=arguments[g];return n=(0,l.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(y))),(0,d.default)((0,s.default)((0,s.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,a.default)(e)?(0,m.format)(e):e,as:t&&"object"===(0,a.default)(t)?(0,m.format)(t):t}},o=null,i=null,c=null,function(e,t){if(e===o&&t===i)return c;var n=r(e,t);return o=e,i=t,c=n,n})),(0,d.default)((0,s.default)((0,s.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,u=i.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,b.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,m.resolve)(c,a),u=u?(0,m.resolve)(c,u):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=u.indexOf("#")<0);var f=n.props.replace?"replace":"push";h.default[f](a,u,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,i.default)(this.props.href)!==(0,i.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,m.resolve)(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=y.default.createElement("a",null,t));var i=y.Children.only(t),a={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,h._rewriteUrlForNextExport)(a.href)),y.default.cloneElement(i,a)}}]),t}(y.Component);t.default=g},50:function(e,t,n){e.exports=n(51)},51:function(e,t,n){var r=n(10),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},86:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(2),a=n(3),u=n.n(a),c=n(1),l=(n(5),n(12)),f=n.n(l),p=c.b.h3.withConfig({displayName:"Title",componentId:"sc-16nq74k-0"})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:",";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"],function(e){return e.theme.red}),s=c.b.div.withConfig({displayName:"ItemStyles__Item",componentId:"sc-16pk14u-0"})(["background:white;border:1px solid ",";box-shadow:",";position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ",";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:",";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"],function(e){return e.theme.offWhite},function(e){return e.theme.bs},function(e){return e.theme.lightGrey},function(e){return e.theme.lightGrey}),d=c.b.span.withConfig({displayName:"PriceTag",componentId:"nwbk6t-0"})(["background:",";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"],function(e){return e.theme.red});function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}var w=u()(v()),E=function(e){function t(){var e,n,r,o,i,a,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,l=new Array(c),f=0;f<c;f++)l[f]=arguments[f];return r=this,n=!(o=(e=h(t)).call.apply(e,[this].concat(l)))||"object"!==m(o)&&"function"!=typeof o?g(r):o,i=g(g(n)),u=function(e,t){var n=t.data,r=e.readQuery({query:Z});r.items=r.items.filter(function(e){return e.id!==n.deleteItem.id}),e.writeQuery({query:Z,data:r})},(a="update")in i?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[a]=u,n}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.id;return o.a.createElement(i.Mutation,{mutation:w,variables:{id:n},update:this.update},function(e,n){n.error;return o.a.createElement("button",{onClick:function(){confirm("Are you sure you want to delete this item?")&&e().catch(function(e){return window.alert(e.message)})}},t)})}}])&&y(n.prototype,a),u&&y(n,u),t}(),_=n(7);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation ADD_TO_CART_MUTATION($id: ID!) {\n    addToCart(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);return P=function(){return e},e}var C=u()(P()),T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,k(t).apply(this,arguments))}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.id;e.children;return o.a.createElement(i.Mutation,{mutation:C,variables:{id:t},refetchQueries:[{query:_.a}]},function(e,t){var n=t.loading;return o.a.createElement("button",{onClick:e,disabled:n},"Add",n&&"ing"," to 🛒")})}}])&&j(n.prototype,a),u&&j(n,u),t}(),I=n(14);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),q(this,D(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.item,t=e.description,n=e.id,r=e.image,i=e.price,a=e.title;return o.a.createElement(s,null,o.a.createElement(d,null,Object(I.a)(i)),r&&o.a.createElement("img",{src:r,alt:a}),o.a.createElement(p,null,o.a.createElement(f.a,{href:{pathname:"item",query:{id:n}}},o.a.createElement("a",null,a))),o.a.createElement("p",null,t),o.a.createElement("div",{className:"buttonList"},o.a.createElement(f.a,{href:{pathname:"update",query:{id:n}}},o.a.createElement("button",null,"🔨 Edit 🔨")),o.a.createElement(T,{id:e.id}),o.a.createElement(E,{id:e.id},"🔥 Delete Item 🔥")))}}])&&A(n.prototype,i),a&&A(n,a),t}(),M=n(25),R=n.n(M),L=c.b.div.withConfig({displayName:"PaginationStyles",componentId:"aduuar-0"})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ",";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ",";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"],function(e){return e.theme.lightGrey},function(e){return e.theme.lightGrey}),G=n(15);function $(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return $=function(){return e},e}var Q=u()($()),F=c.b.a.withConfig({displayName:"Pagination__StylishAnchor",componentId:"w8etnd-0"})(["color:",";"],function(e){return e.theme.black}),J=function(e){var t=e.page;return o.a.createElement(i.Query,{query:Q},function(e){var n=e.data,r=e.error;if(e.loading)return o.a.createElement("p",null,"⚡ Loading... ⚡");if(r)return o.a.createElement("p",null,"❌ Error ❌: ",r.message);var i=n.itemsConnection.aggregate.count,a=Math.ceil(i/G.b);return o.a.createElement(L,{"data-test":"pagination"},o.a.createElement(R.a,null,o.a.createElement("title",null,"Sick Fits | Page ",t," of ",a)),o.a.createElement(f.a,{prefetch:!0,href:{pathname:"items",query:{page:t-1}}},o.a.createElement(F,{className:"prev","aria-disabled":t<=1},"← Prev")),o.a.createElement("p",null,"Page ",t," of ",a),o.a.createElement("p",null,i," Items Total"),o.a.createElement(f.a,{prefetch:!0,href:{pathname:"items",query:{page:t+1}}},o.a.createElement(F,{className:"next","aria-disabled":t>=a},"Next →")))})};function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query ALL_ITEMS_QUERY(\n    $skip: Int = 0,\n    $first: Int = ","\n  ) {\n    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);return H=function(){return e},e}var Z=u()(H(),G.b),V=c.b.div.withConfig({displayName:"Items__Center",componentId:"tikday-0"})(["text-align:center;"]),ee=c.b.div.withConfig({displayName:"Items__ItemsList",componentId:"tikday-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:",";margin:0 auto;"],function(e){return e.theme.maxWidth}),te=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,B(t).apply(this,arguments))}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props.page;return o.a.createElement(V,null,o.a.createElement(J,{page:e}),o.a.createElement(i.Query,{query:Z,variables:{skip:(e-1)*G.b,first:G.b}},function(e){var t=e.data,n=e.error;return e.loading?o.a.createElement("p",null,"⚡ Loading... ⚡"):n?o.a.createElement("p",null,"❌ Error ❌: ",n.message):o.a.createElement(ee,null,t.items.map(function(e){return o.a.createElement(U,{key:e.id,item:e})}))}),o.a.createElement(J,{page:e}))}}])&&W(n.prototype,a),u&&W(n,u),t}();t.default=function(e){var t=e.query;return o.a.createElement("div",null,o.a.createElement(te,{page:parseFloat(t.page)||1}))}}},[[352,1,0]]]);