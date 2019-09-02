(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{357:function(e,t,n){__NEXT_REGISTER_PAGE("/reset",function(){return e.exports=n(371),{page:e.exports.default}})},371:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),s=n.n(a),i=n(3),u=n.n(i),c=n(2),f=(n(5),n(11)),l=n.n(f),p=n(9),m=n(16),y=n(7);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r,o,a,s){try{var i=e[a](s),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation RESET_PASSWORD_MUTATION(\n    $password: String!\n    $confirmPassword: String!\n    $resetToken: String!\n  ) {\n    resetPassword(\n      password: $password\n      confirmPassword: $confirmPassword\n      resetToken: $resetToken\n    ) {\n      id\n      name\n      email\n    }\n  }\n"]);return E=function(){return e},e}var g=u()(E()),S=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return r=this,o=(e=v(t)).call.apply(e,[this].concat(s)),n=!o||"object"!==b(o)&&"function"!=typeof o?P(r):o,O(P(P(n)),"state",{password:"",confirmPassword:""}),O(P(P(n)),"saveToState",function(e){var t=e.target,r=t.value,o=t.name;n.setState(O({},o,r))}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this,t=this.props.resetToken,n=this.state,r=n.password,a=n.confirmPassword;return o.a.createElement(c.Mutation,{mutation:g,variables:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}({resetToken:t},this.state),refetchQueries:[{query:y.a}]},function(t,n){var i=n.error,u=n.loading;return o.a.createElement(m.a,{method:"post",onSubmit:function(){var n,r=(n=s.a.mark(function n(r){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t();case 3:e.setState({password:"",confirmPassword:""}),l.a.push("/");case 5:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function s(e){d(a,r,o,s,i,"next",e)}function i(e){d(a,r,o,s,i,"throw",e)}s(void 0)})});return function(e){return r.apply(this,arguments)}}()},o.a.createElement("fieldset",{disabled:u,"aria-busy":u},o.a.createElement("h2",null,"Reset your password!"),o.a.createElement(p.a,{error:i}),o.a.createElement("label",{htmlFor:"password"},"Password",o.a.createElement("input",{type:"password",name:"password",placeholder:"e.g. y33zy",value:r,onChange:e.saveToState})),o.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password",o.a.createElement("input",{type:"password",name:"confirmPassword",placeholder:"e.g. y33zy",value:a,onChange:e.saveToState})),o.a.createElement("button",{type:"submit"},"Reset Password!")))})}}])&&w(n.prototype,a),i&&w(n,i),t}();t.default=function(e){var t=e.query.resetToken;return o.a.createElement("div",null,o.a.createElement(S,{resetToken:t}))}}},[[357,1,0]]]);