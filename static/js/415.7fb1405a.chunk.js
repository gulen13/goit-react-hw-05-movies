(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{126:function(e,t,n){"use strict";n(791);var r=n(689),a=n(87),c=n(7),o=n.n(c),u=n(184),s=function(e){var t=e.films,n=(0,r.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies"===n.pathname?"".concat(t):"movies/".concat(t),state:{from:n},children:r})},t)}))})})};s.protoTypes={films:o().array.isRequired},t.Z=s},415:function(e,t,n){"use strict";n.r(t);var r=n(439),a=n(791),c=n(416),o=n(126),u=n(184);t.default=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,a.useState)(""),p=(0,r.Z)(i,2),f=p[0],h=p[1];return(0,a.useEffect)((function(){(0,c.eo)().then((function(e){s(e)})).catch((function(e){h(e.message)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Trending Today"}),n&&(0,u.jsx)(o.Z,{films:n}),f&&(0,u.jsxs)("p",{children:["Sorry. ",f," \ud83d\ude2d"]})]})}},416:function(e,t,n){"use strict";n.d(t,{N4:function(){return h},cI:function(){return p},eo:function(){return s},kh:function(){return f},ts:function(){return i}});var r=n(861),a=n(687),c=n.n(a),o=n(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=new URLSearchParams({method:"GET",api_key:"d03c893f0ef0ef1618c3413e2cb11b8a",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",e.next=3,o.Z.get("".concat("/trending/movie/day","?").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t),e.next=3,o.Z.get("".concat(n,"?").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/credits"),e.next=3,o.Z.get("".concat(n,"?").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/reviews"),e.next=3,o.Z.get("".concat(n,"?").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.next=3,o.Z.get("".concat("/search/movie","?").concat(u,"&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,n){"use strict";var r=n(47);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,o){if(o!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=415.7fb1405a.chunk.js.map