"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(689),u=e(87),o=e(416),s=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],i=n[1],f=(0,a.useState)(""),p=(0,r.Z)(f,2),d=p[0],h=p[1],v=(0,c.TH)();return(0,a.useEffect)((function(){(0,o.eo)().then((function(t){i(t)})).catch((function(t){h(t.message)}))}),[]),e&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending Today"}),d&&(0,s.jsxs)("p",{children:["Sorry. ",d," \ud83d\ude2d"]}),(0,s.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.title;return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"movies/".concat(n),state:{from:v},children:e})},n)}))})]})}},416:function(t,n,e){e.d(n,{N4:function(){return d},cI:function(){return f},eo:function(){return s},kh:function(){return p},ts:function(){return i}});var r=e(861),a=e(687),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=new URLSearchParams({method:"GET",api_key:"d03c893f0ef0ef1618c3413e2cb11b8a",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/day",t.next=3,u.Z.get("".concat("/trending/movie/day","?").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n),t.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/credits"),t.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/reviews"),t.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.next=3,u.Z.get("".concat("/search/movie","?").concat(o,"&query=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.3eaf60e1.chunk.js.map