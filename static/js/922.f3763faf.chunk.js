"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[922],{922:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(861),c=a(439),r=a(757),i=a.n(r),o=a(791),s=a(689),u=a(87),l=a(390),d=a(184),m=function(){var e=(0,o.useState)({}),t=(0,c.Z)(e,2),a=t[0],r=t[1],m=(0,s.UO)().movieId,p=(0,s.TH)(),f=p.state.from||"/",v=(0,s.s0)();(0,o.useEffect)((function(){if(m){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.DD)(m);case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]);var h=a.backdrop_path?"https://image.tmdb.org/t/p/original".concat(a.backdrop_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"movie_details-container",style:{backgroundImage:"url(".concat(h,")"),backgroundSize:"calc(max(100%, 1000px)) 100%",backgroundRepeat:"no-repeat"},children:a.title&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"movie_details-flow",children:[(0,d.jsx)("button",{onClick:function(){v(f)},type:"button",className:"go-back-btn",children:"Go back"}),(0,d.jsx)("h2",{className:"movie_details-desc",children:a.title}),(0,d.jsxs)("p",{className:"movie_details-desc",children:["Rating ",a.vote_average]}),(0,d.jsxs)("p",{className:"movie_details-desc",children:["Budget: ",a.budget,"$"]}),a.title&&(0,d.jsxs)("p",{className:"movie_details-desc",children:["Genres:"," ",a.genres.map((function(e){return e.name})).join(", ")]}),(0,d.jsx)("p",{className:"movie_details-desc",children:a.overview}),(0,d.jsxs)("div",{className:"movie_details-link-cont",children:[(0,d.jsx)(u.rU,{to:"cast",className:"movie_details-link",state:{from:p.state.from},children:"Cast"}),(0,d.jsx)(u.rU,{to:"reviews",className:"movie_details-link",state:{from:p.state.from},children:"Reviews"})]}),(0,d.jsx)(s.j3,{})]})})})})}},390:function(e,t,a){a.d(t,{DD:function(){return u},k1:function(){return o},oO:function(){return d},on:function(){return s},y:function(){return l}});var n=a(294),c="https://api.themoviedb.org/3/",r="97a728d5e36b3098a7641152faaa0175",i="movie/";function o(){var e=new URLSearchParams({api_key:r,language:"en-US",page:"1",include_adult:!1,per_page:"20"});return n.Z.get("".concat(c).concat("trending/movie/day","?").concat(e)).then((function(e){return e.data}))}function s(e){var t=new URLSearchParams({api_key:r,language:"en-US",include_adult:!1,query:e,page:"1"});return n.Z.get("".concat(c).concat("search/movie","?").concat(t)).then((function(e){return e.data}))}function u(e){var t=new URLSearchParams({api_key:r});return n.Z.get("".concat(c).concat(i,"/").concat(e,"?").concat(t)).then((function(e){return e.data}))}function l(e){var t=new URLSearchParams({api_key:r});return n.Z.get("".concat(c).concat(i,"/").concat(e,"/credits?").concat(t)).then((function(e){return e.data}))}function d(e){var t=new URLSearchParams({api_key:r});return n.Z.get("".concat(c).concat(i,"/").concat(e,"/reviews?").concat(t)).then((function(e){return e.data}))}}}]);
//# sourceMappingURL=922.f3763faf.chunk.js.map