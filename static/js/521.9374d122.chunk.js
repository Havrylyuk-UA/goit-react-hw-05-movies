"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{521:function(e,a,t){t.r(a),t.d(a,{default:function(){return f}});var n=t(861),c=t(439),r=t(757),o=t.n(r),i=t(791),s=t(689),u=t(390),l=t(854),p=t(184),f=function(){var e=(0,i.useState)({}),a=(0,c.Z)(e,2),t=a[0],r=a[1],f=(0,i.useState)(!1),h=(0,c.Z)(f,2),m=h[0],d=h[1],g=(0,s.UO)().movieId;(0,i.useEffect)((function(){if(g){var e=function(){var e=(0,n.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,u.y)(g);case 4:a=e.sent,r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g]);return(0,p.jsxs)(p.Fragment,{children:[m&&(0,p.jsx)(l.Z,{}),t.cast&&(0,p.jsx)("ul",{className:"movie_cast-sheet",children:t.cast.map((function(e){return(0,p.jsxs)("li",{className:"movie_cast-list",children:[(0,p.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/original".concat(e.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e.name,className:"movie_cast-img"}),(0,p.jsxs)("p",{className:"movie_cast-desc",children:["Name: ",e.name]}),(0,p.jsxs)("p",{className:"movie_cast-desc",children:["Character: ",e.character]})]},e.id)}))}),!t.cast&&(0,p.jsx)("p",{style:{textAlign:"center",color:"aliceblue",marginLeft:"15px",backgroundColor:"rgb(201, 72, 72)"},children:"No cast information available."})]})}},854:function(e,a,t){var n=t(154),c=t(184);a.Z=function(){return(0,c.jsx)(n.t3,{visible:!0,height:"80",width:"80",ariaLabel:"hourglass-loading",wrapperStyle:{},wrapperClass:"",colors:["#306cce","#72a1ed"]})}},390:function(e,a,t){t.d(a,{DD:function(){return u},k1:function(){return i},oO:function(){return p},on:function(){return s},y:function(){return l}});var n=t(294),c="https://api.themoviedb.org/3/",r="97a728d5e36b3098a7641152faaa0175",o="movie/";function i(){var e=new URLSearchParams({api_key:r,language:"en-US",page:"1",include_adult:!1,per_page:"20"});return n.Z.get("".concat(c).concat("trending/movie/day","?").concat(e)).then((function(e){return e.data}))}function s(e){var a=new URLSearchParams({api_key:r,language:"en-US",include_adult:!1,query:e,page:"1"});return n.Z.get("".concat(c).concat("search/movie","?").concat(a)).then((function(e){return e.data}))}function u(e){var a=new URLSearchParams({api_key:r});return n.Z.get("".concat(c).concat(o,"/").concat(e,"?").concat(a)).then((function(e){return e.data}))}function l(e){var a=new URLSearchParams({api_key:r});return n.Z.get("".concat(c).concat(o,"/").concat(e,"/credits?").concat(a)).then((function(e){return e.data}))}function p(e){var a=new URLSearchParams({api_key:r});return n.Z.get("".concat(c).concat(o,"/").concat(e,"/reviews?").concat(a)).then((function(e){return e.data}))}}}]);
//# sourceMappingURL=521.9374d122.chunk.js.map