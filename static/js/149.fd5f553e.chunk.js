(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{126:function(t,e,n){"use strict";n(791);var r=n(87),a=n(7),c=n.n(a),o=n(184),u=function(t){var e=t.films,n=t.error,a=t.location;return(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsxs)("p",{children:["Sorry. ",n," \ud83d\ude2d"]}),"/"===a.pathname?(0,o.jsx)("h1",{children:"Trending Today"}):"",(0,o.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/movies"===a.pathname?"".concat(e):"movies/".concat(e),state:{from:a},children:n})},e)}))})]})};u.protoTypes={films:c().array.isRequired,location:c().object.isRequired,error:c().string.isRequired},e.Z=u},149:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(439),a=n(791),c=n(184),o=function(t){var e=t.onSubmit,n=(0,a.useState)(""),o=(0,r.Z)(n,2),u=o[0],i=o[1];return(0,c.jsx)("div",{onSubmit:function(t){t.preventDefault(),u?(e(u),i("")):alert("Enter film name")},children:(0,c.jsxs)("form",{children:[(0,c.jsx)("input",{type:"text",onChange:function(t){i(t.target.value)}}),(0,c.jsx)("button",{type:"submit",children:"Search"})]})})},u=n(87),i=n(689),s=n(416),f=n(126),p=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],p=e[1],l=(0,a.useState)(""),d=(0,r.Z)(l,2),h=d[0],m=d[1],v=(0,u.lr)(),y=(0,r.Z)(v,2),x=y[0],b=y[1],g=(0,i.TH)();(0,a.useEffect)((function(){var t,e=null!==(t=x.get("film"))&&void 0!==t?t:"";e&&(0,s.N4)(e).then((function(t){p(t)})).catch((function(t){m(t.message)}))}),[x]);return(0,c.jsxs)("div",{children:[(0,c.jsx)(o,{onSubmit:function(t){b({film:t})}}),(0,c.jsx)(f.Z,{films:n,error:h,location:g})]})}},416:function(t,e,n){"use strict";n.d(e,{N4:function(){return l},cI:function(){return f},eo:function(){return i},kh:function(){return p},ts:function(){return s}});var r=n(861),a=n(687),c=n.n(a),o=n(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=new URLSearchParams({method:"GET",api_key:"d03c893f0ef0ef1618c3413e2cb11b8a",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/day",t.next=3,o.Z.get("".concat("/trending/movie/day","?").concat(u));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e),t.next=3,o.Z.get("".concat(n,"?").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits"),t.next=3,o.Z.get("".concat(n,"?").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews"),t.next=3,o.Z.get("".concat(n,"?").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.next=3,o.Z.get("".concat("/search/movie","?").concat(u,"&query=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},888:function(t,e,n){"use strict";var r=n(47);function a(){}function c(){}c.resetWarningCache=a,t.exports=function(){function t(t,e,n,a,c,o){if(o!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},7:function(t,e,n){t.exports=n(888)()},47:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=149.fd5f553e.chunk.js.map