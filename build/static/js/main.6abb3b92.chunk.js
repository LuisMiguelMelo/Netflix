(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADIAQMAAAAwS4omAAAAA1BMVEUUFBSIITVeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAG0lEQVRIie3BMQEAAADCoPVPbQwfoAAAAIC3AQ+gAAEq5xQCAAAAAElFTkSuQmCC"},20:function(e,t,a){e.exports=a.p+"static/media/profile.cdaf5beb.png"},35:function(e,t,a){e.exports=a.p+"static/media/logo.6dbba458.svg"},40:function(e,t,a){e.exports=a(81)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),s=a.n(c),i=a(10),o=a(11),l=a(13),u=a(12),m=a(14),_=a(4),d=a(15),p=(a(45),a(3)),v=(a(46),a(35)),f=a.n(v),h=(a(47),a(20)),E=a.n(h),b=function(){return r.a.createElement("div",{className:"navigation__profile"},r.a.createElement("div",{className:"navigation__profile__account"},r.a.createElement("img",{className:"navigation__profile__avatar",src:E.a,alt:"profile"}),r.a.createElement("i",{className:"navigation__profile__icon fas fa-caret-down"})),r.a.createElement("div",{className:"navigation__profile__dropdown"},r.a.createElement("i",{className:"navigation__profile__dropdown__icon fas fa-caret-up"}),r.a.createElement("div",{className:"navigation__profile__dropdown__content"},r.a.createElement("ul",{className:"navigation__profile__dropdown__list navigation__profile__dropdown__list__manage"},r.a.createElement("li",{className:"navigation__profile__dropdown__item"},r.a.createElement("img",{className:"navigation__profile__avatar",src:E.a,alt:"kids avatar"}),"Luis Melo"),r.a.createElement("li",{className:"navigation__profile__dropdown__item"},"Configuraci\xf3n")),r.a.createElement("hr",null),r.a.createElement("ul",{className:"navigation__profile__dropdown__list"},r.a.createElement("li",{className:"navigation__profile__dropdown__item"},"Account"),r.a.createElement("li",{className:"navigation__profile__dropdown__item"},"Help Center"),r.a.createElement("li",{className:"navigation__profile__dropdown__item"},"Cerrar sesi\xf3n")))))},w=a(39),g=(a(48),Object(n.createContext)({})),N=Object(d.f)(function(e){var t=e.location,a=e.history,c=e.small,s=Object(n.useContext)(g),i=s.state,o=s.actions,l=Object(n.useState)(""),u=Object(p.a)(l,2),m=u[0],_=u[1];return r.a.createElement("form",{onSubmit:function(e){"/search"!==t.pathname&&a.push("/search"),o({type:"setState",payload:Object(w.a)({},i,{result:m})}),e.preventDefault()},action:"",className:"search__form ".concat(c?"search__form--mobile":"search__form--large")},r.a.createElement("label",{className:"search__form__label",htmlFor:""},r.a.createElement("input",{className:"search__form__input",type:"text",value:m,onChange:function(e){return _(e.target.value)},placeholder:"Titulos, Peliculas, Personas"})),r.a.createElement("button",{className:"search__form__button"},r.a.createElement("i",{className:"search__form__icon fas fa-search"}),r.a.createElement("input",{className:"search__form__submit",type:"submit",value:""})))}),y=function(e){var t=e.nav,a=Object(n.useState)(!0),c=Object(p.a)(a,2),s=c[0],i=c[1],o=window.matchMedia("(max-width: 991.98px)");return r.a.createElement("nav",{className:"navigation".concat(t?" navigation--scrolled":"").concat(s?" navigation--hidden":"")},r.a.createElement("div",{className:"navigation__menu"},r.a.createElement(_.a,null,r.a.createElement("div",{className:"navigation__brand".concat(s?"":" navigation__brand--solid")},r.a.createElement("div",{className:"navigation__collapse"},r.a.createElement("button",{className:"navigation__hamburger navigation__hamburger--js",onClick:function(){return i(!s)}},r.a.createElement("i",{className:"fas fa-bars"}))),r.a.createElement("div",{className:"navigation__logo"},r.a.createElement(_.c,{exact:!0,to:"/",className:"navigation__link",onClick:function(){return o.matches&&!s?i(!s):null}},r.a.createElement("img",{src:f.a,alt:"logo"}))),r.a.createElement(N,{small:!0})),r.a.createElement("div",{className:"navigation__menus".concat(s?" navigation__menus--hidden":"")},r.a.createElement("div",{className:"navigation__menu__left"},r.a.createElement("button",{className:"navigation__item",onClick:function(){return o.matches?i(!s):null}},r.a.createElement(_.c,{exact:!0,to:"/",className:"navigation__link",activeClassName:"navigation__link--active"},"Inicio")),r.a.createElement("button",{className:"navigation__item",onClick:function(){return o.matches?i(!s):null}},r.a.createElement(_.c,{to:"/tv-shows",className:"navigation__link",activeClassName:"navigation__link--active"},"Series")),r.a.createElement("button",{className:"navigation__item",onClick:function(){return o.matches?i(!s):null}},r.a.createElement(_.c,{to:"/movies",className:"navigation__link",activeClassName:"navigation__link--active"},"Peliculas")),r.a.createElement("button",{className:"navigation__item",onClick:function(){return o.matches?i(!s):null}},r.a.createElement(_.c,{to:"/recently-added",className:"navigation__link",activeClassName:"navigation__link--active"},"A\xf1adidos recientemente")),r.a.createElement("button",{className:"navigation__item",onClick:function(){return o.matches?i(!s):null}},r.a.createElement(_.c,{to:"/my-list",className:"navigation__link",activeClassName:"navigation__link--active"},"Mi lista"))),r.a.createElement("div",{className:"navigation__menu__right"},r.a.createElement(N,null),r.a.createElement("button",{className:"navigation__item navigation__icon"},r.a.createElement("i",{className:"fas fa-bell"})),r.a.createElement(b,null))))))},k=(a(53),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__content"},r.a.createElement("p",{className:"footer__description"},"Made by"," ",r.a.createElement("a",{style:{color:"red",textDecoration:"none"},href:"https://musing-keller-2db33f.netlify.app",target:"_blank"}," ","Luis Melo"," "),"| 2020")))}),O=(a(54),a(55),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),j=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"lds-facebook"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},x=(a(56),a(16)),A=a.n(x),S=Object(d.f)(function(e){var t=e.video,a=e.search,c=e.history,s=Object(n.useState)(!0),i=Object(p.a)(s,2),o=i[0],l=i[1],u=window.matchMedia("(max-width: 991.98px)"),m=function(e){if(!u.matches)return null;c.push("".concat(t.title?"/search/movie/".concat(t.id):t.name?"/search/tv/".concat(t.id):null)),e.preventDefault()};return Object(n.useEffect)(function(){t.id&&l(!1)},[t]),r.a.createElement(r.a.Fragment,null,o?r.a.createElement("div",{className:"card".concat(a?" card--search":""),onClick:m},r.a.createElement(j,null)):r.a.createElement("div",{className:"card".concat(a?" card--search":""),onClick:m},r.a.createElement("div",{className:"card__overlay overlay--black"}),r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:t.poster_path?"".concat("https://image.tmdb.org/t/p/w342").concat(t.poster_path):A.a,alt:"thumbnail"})),r.a.createElement("div",{className:"card__content".concat(t.poster_path?"":" visible")},r.a.createElement("div",{className:"card__content__description"},r.a.createElement("h2",{className:"card__content__description__header"},t.title||t.name),r.a.createElement("span",{className:"card__content__description__vote"},t.vote_average,"/10"),r.a.createElement("p",{className:"card__content__description__overview"},t.overview)),r.a.createElement("div",{className:"card__content__icons"},r.a.createElement("button",{className:"card__icon"},r.a.createElement("i",{className:"far fa-thumbs-up"})),r.a.createElement("button",{className:"card__icon"},r.a.createElement("i",{className:"far fa-thumbs-down"})),r.a.createElement(_.b,{className:"card__icon",to:t.title?"/search/movie/".concat(t.id):t.name?"/search/tv/".concat(t.id):null},r.a.createElement("i",{className:"fas fa-info"}))))))}),M=function(e){var t=e.moviesList,a=e.title,n=e.first,c=e.noMargin,s=window.matchMedia("(min-width: 992px)"),i=t.map(function(e){return r.a.createElement(S,{video:e,key:e.id})});return r.a.createElement("div",{className:"carousel".concat(n&&s.matches?" carousel--first":"").concat(c&&s.matches?" carousel--no__margin":"")},r.a.createElement("h2",{className:"carousel__title"},a),r.a.createElement("div",{className:"carousel__list"},i))},C=(a(57),function(e){var t=e.movie,a=Object(n.useState)(!0),c=Object(p.a)(a,2),s=c[0],i=c[1];return Object(n.useEffect)(function(){t.id&&i(!1)},[t]),r.a.createElement("div",{className:"lead"},s?r.a.createElement(O,null):r.a.createElement("div",{className:"lead-wrapper"},r.a.createElement("div",{className:"lead__background"},r.a.createElement("img",{src:null===t.backdrop_path?A.a:"".concat("https://image.tmdb.org/t/p/w1280").concat(t.backdrop_path),alt:"background",className:"lead__background__image"})),r.a.createElement("div",{className:"overlay--black"}),r.a.createElement("div",{className:"lead__content"},r.a.createElement("h2",{className:"lead__content__title"},t.title||t.name),r.a.createElement("div",{className:"lead__content__icons"},r.a.createElement(_.b,{className:"lead__content__icons__button",to:t.title?"/search/movie/".concat(t.id):"/search/tv/".concat(t.id)},r.a.createElement("i",{className:"lead__content__icons__icon fas fa-play"}),"Play"),r.a.createElement("button",{className:"lead__content__icons__button"},r.a.createElement("i",{className:"lead__content__icons__icon fas fa-plus"}),"Mi lista")),r.a.createElement("p",{className:"lead__content__description"},t.overview))))}),T=(a(58),function(e){var t=e.title,a=Object(n.useState)({}),c=Object(p.a)(a,2),s=c[0],i=c[1],o=window.matchMedia("(max-width: 575.98px)"),l="https://image.tmdb.org/t/p/w1280";return Object(n.useEffect)(function(){t().then(function(e){return i(e)})},[t]),r.a.createElement("div",{className:"featured"},s.id?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"featured__background"},r.a.createElement("img",{src:null===s.backdrop_path?A.a:o.matches?"".concat("https://image.tmdb.org/t/p/w500").concat(s.poster_path):"".concat(l).concat(s.backdrop_path),alt:""})),r.a.createElement("div",{className:"featured__content"},r.a.createElement("div",{className:"featured__image"},r.a.createElement("img",{src:null===s.backdrop_path?A.a:"".concat(l).concat(s.backdrop_path),alt:""})),r.a.createElement("div",{className:"featured__lead"},r.a.createElement("h2",{className:"lead__content__title"},s.title||s.name),r.a.createElement("div",{className:"lead__content__icons"},r.a.createElement(_.b,{className:"lead__content__icons__button",to:s.title?"/search/movie/".concat(s.id):"/search/tv/".concat(s.id)},r.a.createElement("i",{className:"lead__content__icons__icon fas fa-play"}),"Play"),r.a.createElement("button",{className:"lead__content__icons__button"},r.a.createElement("i",{className:"lead__content__icons__icon fas fa-plus"}),"My list")),r.a.createElement("p",{className:"lead__content__description"},s.overview)))):r.a.createElement(O,null))}),L=a(1),D=a.n(L),F=a(2),P=a(38),U=a.n(P).a.create({baseURL:"https://api.themoviedb.org/3/"}),V=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/trending/all/week",{params:{api_key:"c625140e19067452daf7cd175f3fe6be"}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/trending/tv/day",{params:{api_key:"c625140e19067452daf7cd175f3fe6be"}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/trending/movie/day",{params:{api_key:"c625140e19067452daf7cd175f3fe6be"}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/tv",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_networks:213,"primary_release_date.lte":Date.now(),"vote_count.gte":60}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a,n,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/tv",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_networks:213,"primary_release_date.lte":Date.now()}});case 2:return t=e.sent,a=t.data.results.filter(function(e){return null!==e.backdrop_path&&null!==e.poster_path}),n=a.length,r=Math.floor(Math.random()*n),e.abrupt("return",a[r]);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a,n,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/tv",{params:{api_key:"c625140e19067452daf7cd175f3fe6be","primary_release_date.lte":Date.now()}});case 2:return t=e.sent,a=t.data.results.filter(function(e){return null!==e.backdrop_path&&null!==e.poster_path}),n=a.length,r=Math.floor(Math.random()*n),e.abrupt("return",a[r]);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a,n,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/movie",{params:{api_key:"c625140e19067452daf7cd175f3fe6be","primary_release_date.lte":Date.now()}});case 2:return t=e.sent,a=t.data.results.filter(function(e){return null!==e.backdrop_path&&null!==e.poster_path}),n=a.length,r=Math.floor(Math.random()*n),e.abrupt("return",a[r]);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a,n,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/trending/all/week",{params:{api_key:"c625140e19067452daf7cd175f3fe6be"}});case 2:return t=e.sent,a=t.data.results.filter(function(e){return null!==e.backdrop_path&&null!==e.poster_path}),n=a.length,r=Math.floor(Math.random()*n),e.abrupt("return",a[r]);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/movie/top_rated",{params:{api_key:"c625140e19067452daf7cd175f3fe6be"}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/movie",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_genres:35,sort_by:"release_date.desc","primary_release_date.lte":Date.now(),"vote_count.gte":30}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/movie",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_genres:14,sort_by:"release_date.desc","primary_release_date.lte":Date.now(),"vote_count.gte":30}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/movie",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_genres:80,sort_by:"release_date.desc","primary_release_date.lte":Date.now(),"vote_count.gte":30}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/movie",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_genres:878,sort_by:"release_date.desc","primary_release_date.lte":Date.now(),"vote_count.gte":10}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/movie",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_genres:16,sort_by:"release_date.desc","primary_release_date.lte":Date.now(),"vote_count.gte":10}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/tv",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_genres:35,sort_by:"release_date.desc","primary_release_date.lte":Date.now(),"vote_count.gte":30}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/tv",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_genres:28,sort_by:"release_date.desc","primary_release_date.lte":Date.now(),"vote_count.gte":30}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/tv",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",with_genres:27,sort_by:"release_date.desc","primary_release_date.lte":Date.now(),"vote_count.gte":10}});case 2:return t=e.sent,a=t.data.results.slice(0,5),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a,n;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/tv",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",sort_by:"popularity.desc","first_air_date.gte":Date.now()}});case 2:return t=e.sent,a=t.data.results.filter(function(e){return null!==e.backdrop_path&&null!==e.poster_path}),n=a.slice(0,5),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a,n;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/discover/movie",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",sort_by:"popularity.desc","primary_release_date.gte":Date.now()}});case 2:return t=e.sent,a=t.data.results.filter(function(e){return null!==e.backdrop_path&&null!==e.poster_path}),n=a.slice(0,5),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={trending:[],popularNetflix:[],randomNetflixTitle:{},topRatedMovies:[],newComedyMovies:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;V().then(function(t){return e.setState({trending:t})}),R().then(function(t){return e.setState({popularNetflix:t})}),q().then(function(t){return e.setState({randomNetflixTitle:t})}),J().then(function(t){return e.setState({topRatedMovies:t})}),K().then(function(t){return e.setState({newComedyMovies:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(C,{movie:this.state.randomNetflixTitle}),r.a.createElement(M,{title:"Trending Now",moviesList:this.state.trending,first:!0}),r.a.createElement(M,{title:"Popular on Netflix",moviesList:this.state.popularNetflix,noMargin:!0}),r.a.createElement(T,{title:q}),r.a.createElement(M,{title:"Top Rated",moviesList:this.state.topRatedMovies}),r.a.createElement(M,{title:"Latest Comedy Movies",moviesList:this.state.newComedyMovies}))}}]),t}(r.a.Component),re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={trendingTvToday:[],newActionTvShows:[],randomTvShow:{},upcomingTvShows:[],newComedyTvShows:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;I().then(function(t){return e.setState({trendingTvToday:t})}),$().then(function(t){return e.setState({newActionTvShows:t})}),B().then(function(t){return e.setState({randomTvShow:t})}),te().then(function(t){return e.setState({upcomingTvShows:t})}),Z().then(function(t){return e.setState({newComedyTvShows:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(C,{movie:this.state.randomTvShow}),r.a.createElement(M,{title:"Action",moviesList:this.state.newActionTvShows,first:!0}),r.a.createElement(M,{title:"Trending Now",moviesList:this.state.trendingTvToday}),r.a.createElement(M,{title:"Upcoming",moviesList:this.state.upcomingTvShows}),r.a.createElement(T,{title:B}),r.a.createElement(M,{title:"Comedy",moviesList:this.state.newComedyTvShows}))}}]),t}(r.a.Component),ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={trendingMoviesToday:[],upcomingMovies:[],randomMovie:{},newFantasyMovies:[],newCrimeMovies:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;Q().then(function(t){return e.setState({trendingMoviesToday:t})}),ae().then(function(t){return e.setState({upcomingMovies:t})}),H().then(function(t){return e.setState({randomMovie:t})}),W().then(function(t){return e.setState({newFantasyMovies:t})}),X().then(function(t){return e.setState({newCrimeMovies:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(C,{movie:this.state.randomMovie}),r.a.createElement(M,{title:"Popular today",moviesList:this.state.trendingMoviesToday,first:!0}),r.a.createElement(T,{title:H}),r.a.createElement(M,{title:"Upcoming",moviesList:this.state.upcomingMovies}),r.a.createElement(M,{title:"Fantasy",moviesList:this.state.newFantasyMovies}),r.a.createElement(M,{title:"Crime",moviesList:this.state.newCrimeMovies}))}}]),t}(r.a.Component),se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={newScifiMovies:[],newAnimationMovies:[],randomTrending:{},newHorrorTvShows:[],newComedyTvShows:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y().then(function(t){return e.setState({newScifiMovies:t})}),z().then(function(t){return e.setState({newAnimationMovies:t})}),G().then(function(t){return e.setState({randomTrending:t})}),ee().then(function(t){return e.setState({newHorrorTvShows:t})}),Z().then(function(t){return e.setState({newComedyTvShows:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(C,{movie:this.state.randomTrending}),r.a.createElement(M,{title:"Sci-Fi movies",moviesList:this.state.newScifiMovies,first:!0}),r.a.createElement(M,{title:"Animation movies",moviesList:this.state.newAnimationMovies}),r.a.createElement(T,{title:B}),r.a.createElement(M,{title:"Horror TV Shows",moviesList:this.state.newHorrorTvShows}),r.a.createElement(M,{title:"Comedy TV Shows",moviesList:this.state.newComedyTvShows}))}}]),t}(r.a.Component),ie=(a(77),function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"my__list"},r.a.createElement("h2",{className:"my__list__title"},"Mi Lista"),r.a.createElement("p",{className:"my__list__desc"},"No se han agregado peliculas aun.")))}),oe=(a(78),function(){var e=Object(n.useContext)(g).state,t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],s=a[1];Object(n.useEffect)(function(){e.result.length>0&&i(e.result)},[e.result]);var i=function(){var e=Object(F.a)(D.a.mark(function e(t){var a,n;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/search/multi",{params:{api_key:"c625140e19067452daf7cd175f3fe6be",query:t}});case 2:a=e.sent,n=a.data.results.filter(function(e){return"person"!==e.media_type&&""!==e.overview&&null!==e.poster_path}),s(n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),o=c.map(function(e){return r.a.createElement(S,{search:!0,video:e,key:e.id})});return r.a.createElement("div",{className:"search"},r.a.createElement("h1",null,"Los resultados de busqueda aparecen aqui:"),r.a.createElement("div",{className:"search__results"},o))}),le=function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(oe,null))},ue=(a(79),function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"not__found"},r.a.createElement("h2",{className:"not__found__title"},"404"),r.a.createElement("p",{className:"not__found__desc"},"La pagina que buscas no se encuentra")))}),me=(a(80),Object(d.f)(function(e){var t=e.match,a=Object(n.useState)([]),c=Object(p.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(!0),l=Object(p.a)(o,2),u=l[0],m=l[1],_=Object(n.useState)(!0),d=Object(p.a)(_,2),v=d[0],f=d[1],h=window.matchMedia("(max-width: 575.98px)"),E=s.name;return Object(n.useEffect)(function(){var e=t.path.includes("tv")?"tv":"movie",a=function(){var a=Object(F.a)(D.a.mark(function a(){var n;return D.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,U.get("".concat(e,"/").concat(t.params.id),{params:{api_key:"c625140e19067452daf7cd175f3fe6be"}});case 3:n=a.sent,i(n.data),m(!1),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),f(!1);case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(){return a.apply(this,arguments)}}();0===s.length&&(window.scrollTo(0,0),a())},[]),r.a.createElement(r.a.Fragment,null,v?r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"find__title"},u?r.a.createElement(O,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"about__background"},r.a.createElement("img",{src:h.matches?"".concat("https://image.tmdb.org/t/p/w500").concat(s.poster_path):"".concat("https://image.tmdb.org/t/p/w1280").concat(s.backdrop_path),alt:""})),r.a.createElement("div",{className:"about__title"},r.a.createElement("div",{className:"about__title__poster"},r.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(s.poster_path),alt:""})),r.a.createElement("div",{className:"about__title__description"},r.a.createElement("h1",{className:"show__title"},s.title||s.name),s.original_title!==s.title||s.original_name!==s.name?r.a.createElement("h2",{className:"show__original-title"},s.original_title||s.original_name):null,r.a.createElement("div",{className:"show__dates"},r.a.createElement("h3",{className:"show__date"},s.release_date||"".concat(s.first_air_date," - ").concat(s.last_air_date)),E?r.a.createElement("h3",{className:"show__production show__production--".concat(s.in_production?"Transmitiendo":"Completada")},s.in_production?"En Produccion":"Completada"):null),r.a.createElement("div",{className:"show__votes"},r.a.createElement("h3",{className:"show__vote-average"},"".concat(s.vote_average,"/10")),r.a.createElement("h3",{className:"show__vote-count"},"".concat(s.vote_count," votos"))),s.tagline?r.a.createElement("h2",{className:"show__tagline"},s.tagline):null,s.number_of_episodes?r.a.createElement("h2",{className:"show__seasons"},"".concat(s.number_of_seasons," Temporada(s) ").concat(s.number_of_episodes," Episodios")):null,r.a.createElement("p",{className:"show__overview"},s.overview),r.a.createElement("div",{className:"card__content__icons card__content__icons--result"},r.a.createElement("button",{className:"card__icon"},r.a.createElement("i",{className:"far fa-thumbs-up"})),r.a.createElement("button",{className:"card__icon"},r.a.createElement("i",{className:"far fa-thumbs-down"})))))))):r.a.createElement(ue,null))})),_e=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={scrolled:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){window.scrollY<20?e.setState({scrolled:!1}):e.setState({scrolled:!0})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll")}},{key:"render",value:function(){return r.a.createElement(_.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(y,{nav:this.state.scrolled}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:ne}),r.a.createElement(d.a,{exact:!0,path:"/search",component:le}),r.a.createElement(d.a,{path:"/search/tv/:id",component:me}),r.a.createElement(d.a,{path:"/search/movie/:id",component:me}),r.a.createElement(d.a,{path:"/tv-shows",component:re}),r.a.createElement(d.a,{path:"/movies",component:ce}),r.a.createElement(d.a,{path:"/recently-added",component:se}),r.a.createElement(d.a,{path:"/my-list",component:ie}),r.a.createElement(d.a,{component:ue})),r.a.createElement(k,null)))}}]),t}(r.a.Component),de=function(){var e=Object(n.useState)({result:"",value:"some value"}),t=Object(p.a)(e,2),a=t[0],r=t[1];return{state:a,actions:function(e){var t=e.type,n=e.payload;switch(t){case"setState":return r(n);default:return a}}}};s.a.render(r.a.createElement(function(){var e=de();return r.a.createElement(g.Provider,{value:e},r.a.createElement(_e,null))},null),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6abb3b92.chunk.js.map