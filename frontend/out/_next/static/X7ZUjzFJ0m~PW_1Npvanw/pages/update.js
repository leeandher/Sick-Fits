(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{360:function(e,t,n){__NEXT_REGISTER_PAGE("/update",function(){return e.exports=n(373),{page:e.exports.default}})},373:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(6),o=n.n(i),u=n(3),c=n.n(u),l=n(16),p=n(2),f=n(11),s=n.n(f),d=n(9);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}function y(e,t,n,r,a,i,o){try{var u=e[i](o),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){y(i,r,a,o,u,"next",e)}function u(e){y(i,r,a,o,u,"throw",e)}o(void 0)})}}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){var e=_(["\n  mutation UPDATE_ITEM_MUTATION(\n    $id: ID!\n    $title: String\n    $description: String\n    $price: Int\n  ) {\n    updateItem(\n      id: $id\n      title: $title\n      description: $description\n      price: $price\n    ) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);return S=function(){return e},e}function P(){var e=_(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      title\n      description\n      price\n      image\n      largeImage\n    }\n  }\n"]);return P=function(){return e},e}function _(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j=c()(P()),I=c()(S()),x=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return r=this,a=(e=E(t)).call.apply(e,[this].concat(u)),n=!a||"object"!==m(a)&&"function"!=typeof a?w(r):a,O(w(w(n)),"state",{}),O(w(w(n)),"handleChange",function(e){var t=e.target,r=t.name,a=t.type,i=t.value,o="number"===a?parseFloat(i):i;n.setState(O({},r,o))}),O(w(w(n)),"handleSubmit",function(){var e=h(o.a.mark(function e(t,r){var a,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.id,t.preventDefault(),e.next=4,r({variables:b({id:a},n.atate)});case 4:i=e.sent,i.data;case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()),n}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this,t=this.props.id;return a.a.createElement(p.Query,{query:j,variables:{id:t}},function(t){var n=t.data.item;return t.loading?a.a.createElement("p",null,"⚡ Loading... ⚡"):n?a.a.createElement(p.Mutation,{mutation:I,variables:e.state},function(t,r){var i=r.loading,u=r.error;return a.a.createElement(l.a,O({onSubmit:function(){var e=h(o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,createItem();case 3:n=e.sent,r=n.data,s.a.push({pathname:"/item",query:{id:r.createItem.id}});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},"onSubmit",function(n){return e.handleSubmit(n,t)}),a.a.createElement(d.a,{error:u}),a.a.createElement("fieldset",{disabled:i,"aria-busy":i},a.a.createElement("label",{htmlFor:"title"},"Title",a.a.createElement("input",{type:"text",id:"title",name:"title",placeholder:"Title",defaultValue:n.title,onChange:e.handleChange,required:!0})),a.a.createElement("label",{htmlFor:"price"},"Price",a.a.createElement("input",{type:"number",id:"price",name:"price",min:0,placeholder:"Price",defaultValue:n.price,onChange:e.handleChange,required:!0})),a.a.createElement("label",{htmlFor:"description"},"Description",a.a.createElement("textarea",{id:"description",name:"description",placeholder:"Enter a Description",defaultValue:n.description,onChange:e.handleChange,style:{boxShadow:"none"},required:!0})),a.a.createElement("button",{type:"submit"},"Sav",i?"ing...":"e Changes")))}):a.a.createElement("p",null,"🤷‍♀️ No Item Found! 🤷‍♂️")})}}])&&v(n.prototype,i),u&&v(n,u),t}();t.default=function(e){var t=e.query;return a.a.createElement("div",null,a.a.createElement("p",null,"Update!"),a.a.createElement(x,{id:t.id}))}}},[[360,1,0]]]);