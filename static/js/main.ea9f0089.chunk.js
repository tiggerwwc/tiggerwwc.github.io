(this.webpackJsonpNWD50=this.webpackJsonpNWD50||[]).push([[0],{22:function(e,a,t){e.exports=t(41)},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(17),r=t.n(c),l=(t(27),t(19)),o=t(8),i=t(2),m=(t(28),t(29),function(e){var a=e.pageProgess,t=(e.updatePageProgess,e.inverseColor),c=e.scrollToSec,r=Object(n.useState)(""),l=Object(i.a)(r,2),o=l[0],m=l[1],u=Object(n.useState)(!1),_=Object(i.a)(u,2),d=_[0],b=_[1];Object(n.useEffect)((function(){a.artisan?m("artisan"):a.gallery?m("gallery"):a.tour?m("tour"):a.exibition?m("exibition"):a.journey?m("journey"):o&&m("")}),[o,a]);return s.a.createElement("div",{className:"sidebar ".concat(t?"sidebar--inverse-color":""," ").concat(d?"sidebar--menu-open":"")},s.a.createElement("div",{className:"sidebar__overlay"}),s.a.createElement("div",{className:"sidebar__inner"},s.a.createElement("div",{className:"sidebar__top"},s.a.createElement("button",{type:"button",onClick:function(){b(!d)},className:"sidebar__menu-btn"},s.a.createElement("span",{className:"sidebar__menu-icon"},s.a.createElement("span",{className:"sidebar__menu-lines"})),s.a.createElement("span",{className:"sidebar__menu-text"},d?"Open menu":"Close menu")),s.a.createElement("div",{className:"sidebar__title"},s.a.createElement("div",{className:"sidebar__title-fragment"},"NWD"),s.a.createElement("div",{className:"sidebar__title-fragment"},"50TH ANNIVERSARY"))),s.a.createElement("nav",{className:"sidebar__navs"},s.a.createElement("button",{type:"button",onClick:function(){c("journey"),b(!1)},className:"sidebar__nav ".concat("journey"===o?"is-active":"")},s.a.createElement("span",{className:"sidebar__nav-label"},"50 Years of Journey")),s.a.createElement("button",{type:"button",className:"sidebar__nav ".concat("exibition"===o?"is-active":"")},s.a.createElement("span",{className:"sidebar__nav-label"},"THE EXHIBITION")),s.a.createElement("button",{type:"button",className:"sidebar__nav ".concat("tour"===o?"is-active":"")},s.a.createElement("span",{className:"sidebar__nav-label"},"VIRTUAL TOUR")),s.a.createElement("button",{type:"button",className:"sidebar__nav ".concat("gallery"===o?"is-active":"")},s.a.createElement("span",{className:"sidebar__nav-label"},"GALLERY")),s.a.createElement("button",{type:"button",className:"sidebar__nav ".concat("artisan"===o?"is-active":"")},s.a.createElement("span",{className:"sidebar__nav-label"},"BECOME AN ARTISAN"))),s.a.createElement("nav",{className:"sidebar__bottom"},s.a.createElement("button",{type:"button",className:"sidebar__join"},s.a.createElement("span",{className:"sidebar__join-label"},"BECOME AN ARTISAN")),s.a.createElement("button",{type:"button",className:"sidebar__soc sidebar__soc--fb"},s.a.createElement("span",{className:"sidebar__soc-label"},"Facebook")),s.a.createElement("button",{type:"button",className:"sidebar__soc sidebar__soc--ig"},s.a.createElement("span",{className:"sidebar__soc-label"},"Instagram")))))}),u=t(11),_=(t(30),function(e){var a=e.number;return s.a.createElement("div",{className:"cube-number"},s.a.createElement("div",{className:"cube-number__cubes"},s.a.createElement("div",{className:"cube-number__cube cube-number__cube--left cube-number__cube--".concat(a[0])},s.a.createElement("div",{className:"cube-number__cube-graphic",style:{backgroundImage:"url(/img/splash/img-num-".concat(a[0],".svg)")}})),s.a.createElement("div",{className:"cube-number__cube cube-number__cube--right cube-number__cube--".concat(a[1])},s.a.createElement("div",{className:"cube-number__cube-graphic",style:{backgroundImage:"url(/img/splash/img-num-".concat(a[1],".svg)")}})),s.a.createElement("div",{className:"cube-number__nwd",style:{backgroundImage:"url(/img/splash/img-nwd.svg)"}})))}),d=t(7),b=(t(31),function(e){var a=e.children,t=Object(d.a)({threshold:0}),n=Object(i.a)(t,2),c=n[0],r=n[1],l=parseFloat(r.toPrecision(2));return s.a.createElement("div",{ref:c,className:"viewport-animtion ".concat(l>.2?"is-active":"")},s.a.createElement("div",{className:"viewport-animtion__body"},a))}),E=(t(32),function(e){var a=e.pageProgess,t=e.updatePageProgess,c=Object(n.useState)(0),r=Object(i.a)(c,2),l=r[0],o=r[1],m=Object(n.useState)("38"),d=Object(i.a)(m,2),b=d[0],E=d[1],g=[0,3,5,8],p=function(){return g[Math.floor(Math.random()*g.length)]};return document.documentElement.style.setProperty("--ani-time-splash-step-1","".concat(3,"s")),document.documentElement.style.setProperty("--ani-time-splash-step-2","".concat(1.2,"s")),document.documentElement.style.setProperty("--ani-time-splash-step-3","".concat(1,"s")),Object(n.useEffect)((function(){0===l&&o(1),1===l&&setTimeout((function(){o(2)}),3e3),2===l&&setTimeout((function(){o(3)}),1200),3===l&&(a.pageReady||t(Object(u.a)({},a,{pageReady:"ready",splash:"finish"})))}),[l,a,t]),Object(n.useEffect)((function(){var e=setInterval((function(){var e=1===l?"".concat(p()).concat(p()):"50";E(e)}),100);return function(){clearInterval(e)}}),[l,p]),s.a.createElement("div",{className:"splash splash--step-".concat(l)},s.a.createElement("div",{className:"splash__inner"},s.a.createElement("div",{className:"splash__logo ".concat(a.journey?"splash__logo--color-inverse":"")},s.a.createElement(_,{number:b}),s.a.createElement("div",{className:"splash__static-logo"}))))}),g=(t(33),function(e){e.pageProgess,e.updatePageProgess;var a=Object(d.a)({threshold:0}),t=Object(i.a)(a,2),n=t[0],c=t[1],r=parseFloat(c.toPrecision(2));return s.a.createElement("div",{ref:n,className:"landing ".concat(r<1?"is-active":"")},s.a.createElement("div",{className:"landing__inner"},s.a.createElement("div",{className:"landing__slogans"},s.a.createElement("img",{className:"landing__slogan landing__slogan--1",src:"/img/landing/img-slogan-1.svg",alt:"We Create"}),s.a.createElement("img",{className:"landing__slogan landing__slogan--2",src:"/img/landing/img-slogan-2.svg",alt:"We Create"}),s.a.createElement("img",{className:"landing__slogan landing__slogan--3",src:"/img/landing/img-slogan-3.svg",alt:"We Create"}))))}),p=(t(34),function(e){var a=e.pageProgess,t=(e.updatePageProgess,Object(d.a)({threshold:0})),n=Object(i.a)(t,2),c=n[0],r=n[1],l=parseFloat(r.toPrecision(2));return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{ref:c,className:"sec-video ".concat(a?"is-active":"")},s.a.createElement("div",{className:"sec-video__inner"},s.a.createElement("div",{className:"sec-video__video",style:{transform:function(){var e=-15*(1-3*l);e>0&&(e=0),l>.5&&(e=0);var a=.6+l;return l>.6&&(a=(.75-l)/(.75-.6))<.65&&(a=.65),a>1&&(a=1),"scale(".concat(a,") rotate(").concat(e,"deg)")}()}},s.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},s.a.createElement("source",{src:"/videos/video-dummy.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")))),s.a.createElement("div",{className:"sec-video__overlay",style:{opacity:function(){var e=2*l;return l>.5&&(e=1-1.5*l),e>1&&(e=1),e<0&&(e=0),"".concat(e)}()}}))}),v=t(18),N=t.n(v),y=(t(35),function(e){var a=e.pageProgess,t=e.updatePageProgess,c=Object(d.a)({threshold:0}),r=Object(i.a)(c,2),l=r[0],o=r[1],m=parseFloat(o.toPrecision(2))>.2;return Object(n.useEffect)((function(){m&&"active"!==a.journey?"active"!==a.journey&&t(Object(u.a)({},a,{journey:"active"})):"active"===a.journey&&t(Object(u.a)({},a,{journey:""}))}),[m]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{ref:l,className:"sec-journey ".concat(m?"is-active":"")},s.a.createElement("div",{className:"sec-journey__bg"},s.a.createElement("div",{className:"sec-journey__bg-graphic"})),s.a.createElement("div",{className:"sec-journey__inner"},s.a.createElement("section",{className:"sec-journey__subsec sec-journey__subsec--story"},s.a.createElement("h2",{className:"sec-journey__title"},s.a.createElement(b,null,s.a.createElement("small",{className:"sec-journey__title-tag"},"OUR STORY"),s.a.createElement("span",{className:"sec-journey__title-txt"},"50 YEARS OF JOURNEY"))),s.a.createElement("div",{className:"sec-journey__desc"},s.a.createElement(b,null,s.a.createElement("p",null,s.a.createElement("span",{className:"color-main"},"The year is 1970.")),s.a.createElement("p",null,"A budding Hong Kong is on the cusp of its meteoric rise. Ideas and opportunities abound, people hunger for success, yet only a handful of visionaries have the mind to create something that would define the city."),s.a.createElement("p",null,"This is the beginning of New World Development, then a young, ambitious property developer with a mission to build a better society for the community.")))),s.a.createElement("section",{className:"sec-journey__subsec sec-journey__subsec--create"},s.a.createElement("h2",{className:"sec-journey__title"},s.a.createElement("span",{className:"sec-journey__title-txt"},"WE CREATE"),s.a.createElement("span",{className:"sec-journey__effect-typing"},s.a.createElement("span",{className:"sec-journey__title-txt color-main"},s.a.createElement(N.a,{onInit:function(e){},options:{strings:["INSPIRING A NEW WORLD","MAKING 50 YEARS OF LEGACY","SETTING THE NEW STAGE."],autoStart:!0,loop:!0,cursor:""}})))),s.a.createElement("div",{className:"sec-journey__desc"},s.a.createElement(b,null,s.a.createElement("p",null,"New World marches on with the belief that businesses exist for the community, and to inspire next generation.")))),s.a.createElement("section",{className:"sec-journey__subsec sec-journey__subsec--history"},s.a.createElement("h2",{className:"sec-journey__title"},s.a.createElement("span",{className:"sec-journey__effect-perspective"},s.a.createElement("span",{className:"sec-journey__line"},s.a.createElement("span",{className:"sec-journey__title-txt"},"\xa0"),s.a.createElement("span",{className:"sec-journey__title-txt"},"WE MAKE HISTORY")),s.a.createElement("span",{className:"sec-journey__line"},s.a.createElement("span",{className:"sec-journey__title-txt color-main"},"WE MAKE HISTORY"),s.a.createElement("span",{className:"sec-journey__title-txt color-main"},"HISTORY MAKES US")),s.a.createElement("span",{className:"sec-journey__line"},s.a.createElement("span",{className:"sec-journey__title-txt"},"HISTORY MAKES US"),s.a.createElement("span",{className:"sec-journey__title-txt"},"\xa0"))))))))}),f=function(){var e=Object(n.useState)({pageReady:"",splash:"",landing:"",video:"",journey:"",exibition:"",tour:"",gallery:"",artisan:"",footer:""}),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useRef)([]),l=function(e){c(e)};return s.a.createElement("div",{className:"main-layout ".concat(t.pageReady?"page-ready":""," ").concat(t.splash?"splash-finished":"")},s.a.createElement("div",{className:"main-layout__body"},s.a.createElement("h1",{className:"a11y-hidden"},"NWD50"),s.a.createElement(m,{inverseColor:t.journey,pageProgess:t,updatePageProgess:l,scrollToSec:function(e){var a=null===r||void 0===r?void 0:r.current[e];a&&window.scrollTo({top:a.getBoundingClientRect().top,behavior:"smooth"})}}),s.a.createElement("main",{className:"main-layout__main"},s.a.createElement(E,{pageProgess:t,updatePageProgess:l}),s.a.createElement(g,{pageProgess:t,updatePageProgess:l}),s.a.createElement(p,{pageProgess:t,updatePageProgess:l}),s.a.createElement("div",{ref:function(e){r.current.journey=e}}),s.a.createElement(y,{pageProgess:t,updatePageProgess:l}))))},h=function(){return s.a.createElement(l.a,null,s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:f})))},j=function(){return s.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.ea9f0089.chunk.js.map