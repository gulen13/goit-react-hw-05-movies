(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{126:function(t,e,n){"use strict";n(791);var r=n(689),a=n(87),c=n(7),u=n.n(c),o=n(184),i=function(t){var e=t.films,n=(0,r.TH)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.title;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies"===n.pathname?"".concat(e):"movies/".concat(e),state:{from:n},children:r})},e)}))})})};i.protoTypes={films:u().array.isRequired},e.Z=i},149:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(184),u=function(t){var e=t.onSubmit,n=(0,a.useState)(""),u=(0,r.Z)(n,2),o=u[0],i=u[1];return(0,c.jsx)("div",{onSubmit:function(t){t.preventDefault(),o?(e(o),i("")):alert("Enter film name")},children:(0,c.jsxs)("form",{children:[(0,c.jsx)("input",{type:"text",onChange:function(t){i(t.target.value)}}),(0,c.jsx)("button",{type:"submit",children:"Search"})]})})},o=n(87),i=n(416),s=n(126),f=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],f=e[1],p=(0,a.useState)(""),l=(0,r.Z)(p,2),h=l[0],m=l[1],d=(0,o.lr)(),v=(0,r.Z)(d,2),y=v[0],x=v[1];(0,a.useEffect)((function(){var t,e=null!==(t=y.get("film"))&&void 0!==t?t:"";e&&(0,i.N4)(e).then((function(t){f(t)})).catch((function(t){m(t.message)}))}),[y]);return(0,c.jsxs)("div",{children:[(0,c.jsx)(u,{onSubmit:function(t){x({film:t})}}),(0,c.jsx)(s.Z,{films:n}),h&&(0,c.jsxs)("p",{children:["Sorry. ",h," \ud83d\ude2d"]})]})}},416:function(t,e,n){"use strict";n.d(e,{N4:function(){return l},cI:function(){return f},eo:function(){return i},kh:function(){return p},ts:function(){return s}});var r=n(861),a=n(687),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=new URLSearchParams({method:"GET",api_key:"d03c893f0ef0ef1618c3413e2cb11b8a",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/day",t.next=3,u.Z.get("".concat("/trending/movie/day","?").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e),t.next=3,u.Z.get("".concat(n,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits"),t.next=3,u.Z.get("".concat(n,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews"),t.next=3,u.Z.get("".concat(n,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.next=3,u.Z.get("".concat("/search/movie","?").concat(o,"&query=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},888:function(t,e,n){"use strict";var r=n(47);function a(){}function c(){}c.resetWarningCache=a,t.exports=function(){function t(t,e,n,a,c,u){if(u!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},7:function(t,e,n){t.exports=n(888)()},47:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=149.163290c2.chunk.js.map