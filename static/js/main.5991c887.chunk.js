(this.webpackJsonpNWD50=this.webpackJsonpNWD50||[]).push([[0],{36:function(e,a,t){e.exports=t(73)},41:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(16),l=t.n(s),r=(t(41),t(32)),i=t(10),o=t(1),m=t(12),u=(t(51),function(){var e=Object(n.useState)({width:void 0,height:void 0}),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){function e(){c({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}),_=(t(52),function(e){var a=e.pageProgess,t=(e.updatePageProgess,e.inverseColor),s=e.scrollToSec,l=Object(n.useState)(""),r=Object(o.a)(l,2),i=r[0],m=r[1],_=Object(n.useState)(!1),d=Object(o.a)(_,2),E=d[0],g=d[1],b=u();Object(n.useEffect)((function(){b.width>1023&&E&&g(!1)}),[E,b]),Object(n.useEffect)((function(){a.artisan?m("artisan"):a.gallery?m("gallery"):a.tour?m("tour"):a.exhibition?m("exhibition"):m("journey")}),[i,a]);var v=function(e){s(e),g(!1)},p="".concat(t?"sidebar--inverse-color":""," ").concat(E?"sidebar--menu-open":"");return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"sidebar__top-overlay"}),c.a.createElement("div",{className:"sidebar__top ".concat(p)},c.a.createElement("button",{type:"button",onClick:function(){g(!E)},className:"sidebar__menu-btn"},c.a.createElement("span",{className:"sidebar__menu-icon"},c.a.createElement("span",{className:"sidebar__menu-lines"})),c.a.createElement("span",{className:"sidebar__menu-text"},E?"Open menu":"Close menu")),c.a.createElement("div",{className:"sidebar__title"},c.a.createElement("div",{className:"sidebar__title-fragment"},"NWD"),c.a.createElement("div",{className:"sidebar__title-fragment"},"50TH ANNIVERSARY"))),c.a.createElement("div",{className:"sidebar ".concat(p)},c.a.createElement("div",{className:"sidebar__overlay"}),c.a.createElement("div",{className:"sidebar__inner"},c.a.createElement("nav",{className:"sidebar__navs"},c.a.createElement("button",{type:"button",onClick:function(){v("journey")},className:"sidebar__nav ".concat("journey"===i?"is-active":"")},c.a.createElement("span",{className:"sidebar__nav-label"},"50 Years of Journey")),c.a.createElement("button",{type:"button",onClick:function(){v("exhibition")},className:"sidebar__nav ".concat("exhibition"===i?"is-active":"")},c.a.createElement("span",{className:"sidebar__nav-label"},"THE EXHIBITION")),c.a.createElement("button",{type:"button",onClick:function(){v("tour")},className:"sidebar__nav ".concat("tour"===i?"is-active":"")},c.a.createElement("span",{className:"sidebar__nav-label"},"VIRTUAL TOUR")),c.a.createElement("button",{type:"button",onClick:function(){v("gallery")},className:"sidebar__nav ".concat("gallery"===i?"is-active":"")},c.a.createElement("span",{className:"sidebar__nav-label"},"GALLERY")),c.a.createElement("button",{type:"button",onClick:function(){v("artisan")},className:"sidebar__nav ".concat("artisan"===i?"is-active":"")},c.a.createElement("span",{className:"sidebar__nav-label"},"BECOME AN ARTISAN"))),c.a.createElement("nav",{className:"sidebar__bottom"},c.a.createElement("button",{type:"button",className:"sidebar__join"},c.a.createElement("span",{className:"sidebar__join-label"},"BECOME AN ARTISAN")),c.a.createElement("button",{type:"button",className:"sidebar__soc sidebar__soc--fb"},c.a.createElement("span",{className:"sidebar__soc-label"},"Facebook")),c.a.createElement("button",{type:"button",className:"sidebar__soc sidebar__soc--ig"},c.a.createElement("span",{className:"sidebar__soc-label"},"Instagram"))))))}),d=t(3),E=t(31),g=t(13),b=(t(53),function(e){var a=e.number;return c.a.createElement("div",{className:"cube-number"},c.a.createElement("div",{className:"cube-number__cubes"},c.a.createElement("div",{className:"cube-number__cube cube-number__cube--left cube-number__cube--".concat(a[0])},c.a.createElement("div",{className:"cube-number__cube-graphic cube-number__cube-graphic--black",style:{backgroundImage:"url(/img/splash/black/img-num-".concat(a[0],".svg)")}}),c.a.createElement("div",{className:"cube-number__cube-graphic cube-number__cube-graphic--red",style:{backgroundImage:"url(/img/splash/red/img-num-".concat(a[0],".svg)")}})),c.a.createElement("div",{className:"cube-number__cube cube-number__cube--right cube-number__cube--".concat(a[1])},c.a.createElement("div",{className:"cube-number__cube-graphic cube-number__cube-graphic--black",style:{backgroundImage:"url(/img/splash/black/img-num-".concat(a[1],".svg)")}}),c.a.createElement("div",{className:"cube-number__cube-graphic cube-number__cube-graphic--red",style:{backgroundImage:"url(/img/splash/red/img-num-".concat(a[1],".svg)")}})),c.a.createElement("div",{className:"cube-number__nwd"})))}),v=t(2),p=(t(54),function(e){var a=e.children,t=e.animation,n=e.delay,s=Object(v.a)({threshold:0}),l=Object(o.a)(s,2),r=l[0],i=l[1],m=parseFloat(i.toPrecision(2));return c.a.createElement("div",{ref:r,className:"viewport-animtion viewport-animtion--".concat(t||"default"," ").concat(m>.1?"is-active":"")},c.a.createElement("div",{className:"viewport-animtion__body",style:{transitionDelay:"".concat(n||0,"s")}},a))}),N=(t(55),function(e){var a=e.children,t=e.initialPoint,n=e.endPoint,s=e.isReverse,l=e.offset,r=Object(v.a)({threshold:0}),i=Object(o.a)(r,2),m=i[0],u=i[1],_=parseFloat(u.toPrecision(2));return c.a.createElement("div",{ref:m,className:"perspective-block"},c.a.createElement("div",{className:"perspective-block__content",style:{transform:function(){var e=t||12,a=n||-12,c=e+(a-e)*(_+(l||0))*1.25;a<e?(c<a&&(c=a),c>e&&(c=e)):(c>a&&(c=a),c<e&&(c=e));var r=s?0-2*c:2*c;return"rotateX(".concat(c,"deg) rotateY(").concat(r,"deg)  rotateZ(0deg)")}()}},a))}),f=(t(56),function(e){var a=e.title,t=e.children,s=e.queryTarget,l=void 0!==s&&s,r=Object(n.useState)(!1),i=Object(o.a)(r,2),m=i[0],u=i[1],_=Object(n.useState)(l),d=Object(o.a)(_,2),E=d[0];d[1];Object(n.useEffect)((function(){u(E)}),[E]);return c.a.createElement("div",{className:"accordion ".concat(m?"mod-open":"")},c.a.createElement("button",{type:"button",className:"accordion-toggle",onClick:function(){u(!m)}},c.a.createElement("span",{className:"accordion-toggle-title"},a),c.a.createElement("span",{className:"accordion-toggle-graphic"})),c.a.createElement("div",{className:"accordion-content"},t))}),h=t(35),y=(t(57),function(e){var a,t=e.options,s=Object(n.useState)(1),l=Object(o.a)(s,2),r=l[0],i=l[1];Object(n.useEffect)((function(){if(null===t||void 0===t?void 0:t.strings){var e=null===t||void 0===t?void 0:t.strings[r-1].length,a=setTimeout((function(){var e=r+1;e>(null===t||void 0===t?void 0:t.strings.length)&&(e=1),i(e)}),100*e);return function(){clearTimeout(a)}}}),[r]);return c.a.createElement("div",{className:"letter-fader"},c.a.createElement("div",{className:"letter-fader__content"},null===t||void 0===t?void 0:null===(a=t.strings)||void 0===a?void 0:a.map((function(e,a){var t=a+1,n="letter-fader-group-".concat(t);return c.a.createElement("div",{key:n,className:"letter-fader__grp ".concat(r===t?"is-active":"")},function(e){if(!e)return"";var a=e.split(" "),t=0;return a.map((function(e,n){var s=n+1,l="letter-fader-word-".concat(s);return c.a.createElement(c.a.Fragment,{key:l},c.a.createElement("span",{className:"letter-fader__word"},Object(h.a)(e).map((function(e,a){var s="letter-fader-letter-".concat(a+1);return 0===n&&0===a||(t+=.055),c.a.createElement("span",{key:s,className:"letter-fader__letter ".concat(" "===e?"letter-fader__letter-empty":""),style:{animationDelay:"".concat(t,"s")}}," "===e?c.a.createElement(c.a.Fragment,null,"\xa0"):e)})),s<a.length?c.a.createElement("span",{className:"letter-fader__letter letter-fader__letter-empty"},"\xa0"):null))}))}(e))}))))}),x=(t(58),function(e){var a=e.text,t=e.textMobile,n=Object(v.a)({threshold:0}),s=Object(o.a)(n,2),l=s[0],r=s[1],i=parseFloat(r.toPrecision(2));return c.a.createElement("div",{ref:l,className:"stair-text ".concat(i>.1?"is-active":""," ").concat(t?"has-mobile":"")},c.a.createElement("div",{className:"stair-text__content is-desktop"},c.a.createElement("span",{className:"stair-text__line"},c.a.createElement("span",{className:"stair-text__txt"},"\xa0"),c.a.createElement("span",{className:"stair-text__txt"},a[0])),c.a.createElement("span",{className:"stair-text__line"},c.a.createElement("span",{className:"stair-text__txt color-main"},a[0]),c.a.createElement("span",{className:"stair-text__txt color-main"},a[1])),c.a.createElement("span",{className:"stair-text__line"},c.a.createElement("span",{className:"stair-text__txt"},a[1]),c.a.createElement("span",{className:"stair-text__txt"},"\xa0"))),t?c.a.createElement("div",{className:"stair-text__content is-mobile"},c.a.createElement("span",{className:"stair-text__line"},c.a.createElement("span",{className:"stair-text__txt"},"\xa0"),c.a.createElement("span",{className:"stair-text__txt"},t[0])),c.a.createElement("span",{className:"stair-text__line"},c.a.createElement("span",{className:"stair-text__txt"},t[0]),c.a.createElement("span",{className:"stair-text__txt"},t[1])),c.a.createElement("span",{className:"stair-text__line"},c.a.createElement("span",{className:"stair-text__txt"},t[1]),c.a.createElement("span",{className:"stair-text__txt color-main"},t[2])),c.a.createElement("span",{className:"stair-text__line"},c.a.createElement("span",{className:"stair-text__txt color-main"},t[2]),c.a.createElement("span",{className:"stair-text__txt color-main"},t[3])),c.a.createElement("span",{className:"stair-text__line"},c.a.createElement("span",{className:"stair-text__txt color-main"},t[3]),c.a.createElement("span",{className:"stair-text__txt color-main"},"\xa0"))):null)}),j=(t(59),function(e){var a=e.text,t=Object(v.a)({threshold:0}),n=Object(o.a)(t,2),s=n[0],l=n[1],r=parseFloat(l.toPrecision(2));return c.a.createElement("div",{ref:s,className:"shapeout-text ".concat(r>.1?"is-active":"")},c.a.createElement("div",{className:"shapeout-text__body"},c.a.createElement("span",{className:"shapeout-text__line"},c.a.createElement("span",{className:"shapeout-text__shape"}),c.a.createElement("span",{className:"shapeout-text__content"},c.a.createElement("span",{className:"shapeout-text__txt"},a[0]))),a[1]?c.a.createElement("span",{className:"shapeout-text__line"},c.a.createElement("span",{className:"shapeout-text__shape"}),c.a.createElement("span",{className:"shapeout-text__content"},c.a.createElement("span",{className:"shapeout-text__txt"},a[1]))):null))}),O=(t(60),function(e){var a=e.pageProgess,t=e.updatePageProgess,s=Object(n.useState)(0),l=Object(o.a)(s,2),r=l[0],i=l[1],m=Object(n.useState)(0),u=Object(o.a)(m,2),_=u[0],v=u[1],p=Object(n.useState)("15"),N=Object(o.a)(p,2),f=N[0],h=N[1],y=[0,3,5,8],x=["15","29","30","38","48","50"];return document.documentElement.style.setProperty("--ani-time-splash-step-1","".concat(2,"s")),document.documentElement.style.setProperty("--ani-time-splash-step-2","".concat(.6,"s")),document.documentElement.style.setProperty("--ani-time-splash-step-3","".concat(.8,"s")),Object(n.useEffect)((function(){0===_&&(Object(g.a)(document.body),window.scrollTo({top:1e3,behavior:"auto"}),v(1)),1===_&&(i(100),setTimeout((function(){v(2),Object(g.b)(document.body),window.scrollTo({top:30,behavior:"auto"})}),2e3)),2===_&&setTimeout((function(){v(3),window.scrollTo({top:1,behavior:"auto"})}),600),3===_&&(a.pageReady||t(Object(d.a)({},a,{pageReady:"ready",splash:"finish"})))}),[_,a,t]),Object(n.useEffect)((function(){var e=setInterval((function(){var e=1===_?"".concat(function(){if(!f)return x[0];var e=x.indexOf(f),a=x.length-1,t=e+1;return(t>=a||e<0)&&(t=a),x[t]}()):"50";h(e)}),200);return function(){clearInterval(e)}}),[_,function(){return y[Math.floor(Math.random()*y.length)]}]),c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{height:8,color:"#D8182A",shadow:!1,progress:r,waitingTime:3e3,loaderSpeed:2600}),c.a.createElement("div",{className:"splash splash--step-".concat(_," ").concat("")},c.a.createElement("div",{className:"splash__overlay",style:{animationDuration:"".concat(2.6,"s")}}),c.a.createElement("div",{className:"splash__inner"},c.a.createElement("div",{className:"splash__logo"},null,c.a.createElement(b,{number:f}),c.a.createElement("div",{className:"splash__static-logo"})))))}),P=(t(61),function(e){e.pageProgess,e.updatePageProgess;var a=Object(v.a)({threshold:0}),t=Object(o.a)(a,2),n=t[0],s=t[1],l=parseFloat(s.toPrecision(2))||0;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{ref:n,className:"landing ".concat(l<1?"is-active":"")},c.a.createElement("div",{className:"landing__inner"},c.a.createElement("div",{className:"landing__slogans"},c.a.createElement("img",{className:"landing__slogan landing__slogan--1",src:"/img/landing/img-slogan-1.svg",alt:"We Create"}),c.a.createElement("img",{className:"landing__slogan landing__slogan--2",src:"/img/landing/img-slogan-2.svg",alt:"We Create"}),c.a.createElement("img",{className:"landing__slogan landing__slogan--3",src:"/img/landing/img-slogan-3.svg",alt:"We Create"})))))}),I=(t(62),function(e){var a=e.pageProgess,t=e.updatePageProgess,s=Object(v.a)({threshold:0}),l=Object(o.a)(s,2),r=l[0],i=l[1],m=parseFloat(i.toPrecision(2));Object(n.useEffect)((function(){document.getElementById("main-video").play()}),[]);var u=m>.25&&m<.75;return Object(n.useEffect)((function(){u&&"active"!==a.video?"active"!==a.artisan&&t(Object(d.a)({},a,{video:"active"})):"active"===a.video&&t(m>=.75?Object(d.a)({},a,{video:"",afterVideo:"active"}):Object(d.a)({},a,{video:"",afterVideo:""}))}),[u]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{ref:r,className:"sec-video ".concat(u?"is-active":"")},c.a.createElement("div",{className:"sec-video__inner"},c.a.createElement("div",{className:"sec-video__video",style:{transform:function(){var e=-15*(1-3*m);e>0&&(e=0),m>.5&&(e=0);var a=.6+m;return m>.7&&(a=(.85-m)/(.85-.7))<.65&&(a=.65),a>1&&(a=1),"scale(".concat(a,") rotate(").concat(e,"deg)")}()}},c.a.createElement("video",{id:"main-video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0,width:"500px",height:"500px"},c.a.createElement("source",{src:"/videos/video-dummy-bunny.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")))),c.a.createElement("div",{className:"sec-video__bg"}))}),k=(t(63),function(e){var a=e.pageProgess,t=e.updatePageProgess,s=Object(n.useRef)(null),l=Object(v.a)({threshold:0}),r=Object(o.a)(l,2),i=r[0],m=r[1],u=parseFloat(m.toPrecision(2))>.15;return Object(n.useEffect)((function(){u&&"active"!==a.journey?"active"!==a.journey&&t(Object(d.a)({},a,{journey:"active"})):"active"===a.journey&&t(Object(d.a)({},a,{journey:""}))}),[u]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{ref:i,className:"sec-journey ".concat(u?"is-active":"")},c.a.createElement("img",{className:"sec-journey__deco",src:"/img/journey/bg-lines.svg",alt:""}),c.a.createElement("div",{ref:s,className:"sec-journey__inner"},c.a.createElement("section",{className:"sec-journey__subsec sec-journey__subsec--story"},c.a.createElement("h2",{"data-scroll":!0,"data-scroll-speed":"3","data-scroll-position":"top",className:"sec-journey__title"},c.a.createElement(p,null,c.a.createElement("span",{className:"sec-journey__title-icon",style:{backgroundImage:"url(/img/journey/icon-journey.svg)"}}),c.a.createElement("small",{className:"sec-journey__title-tag"},"OUR STORY")),c.a.createElement("span",{className:"sec-journey__title-txt"},c.a.createElement(j,{text:["50 YEARS OF","JOURNEY"]}))),c.a.createElement("div",{"data-scroll":!0,"data-scroll-speed":"2","data-scroll-position":"top",className:"sec-journey__desc"},c.a.createElement(p,null,c.a.createElement("p",null,c.a.createElement("span",{className:"color-main"},"The year is 1970.")),c.a.createElement("p",null,"A budding Hong Kong is on the cusp of its meteoric rise. Ideas and opportunities abound, people hunger for success, yet only a handful of visionaries have the mind to create something that would define the city."),c.a.createElement("p",null,"This is the beginning of New World Development, then a young, ambitious property developer with a mission to build a better society for the community.")))),c.a.createElement("section",{className:"sec-journey__subsec sec-journey__subsec--create"},c.a.createElement("h2",{className:"sec-journey__title"},c.a.createElement("span",{className:"sec-journey__title-txt"},"WE CREATE."),c.a.createElement("span",{className:"sec-journey__effect-typing"},c.a.createElement("span",{className:"sec-journey__title-txt color-main"},c.a.createElement(y,{options:{strings:["INSPIRING A NEW WORLD.","MAKING 50 YEARS OF LEGACY.","WELCOMING AN ARTISANAL DWELLING.","CREATING SHARED VALUE.","SETTING THE NEW STAGE."],autoStart:!0,loop:!0,cursor:""}})))),c.a.createElement("div",{className:"sec-journey__desc"},c.a.createElement(p,null,c.a.createElement("p",null,"New World marches on with the belief that businesses exist for the community, and to inspire next generation.")))),c.a.createElement("section",{className:"sec-journey__subsec sec-journey__subsec--history"},c.a.createElement("h2",{className:"sec-journey__title"},c.a.createElement("span",{className:"sec-journey__title-txt"},c.a.createElement(x,{text:["WE MAKE HISTORY","HISTORY MAKES US"],textMobile:["WE MAKE","HISTORY","HISTORY","MAKES US"]})))))))}),w=(t(64),t(65),[{imgUrl:"/img/exhibition/img-gallery-1.jpg"},{imgUrl:"/img/exhibition/img-gallery-2.jpg"},{imgUrl:"/img/exhibition/img-gallery-1.jpg"}]),S=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(1),r=Object(o.a)(l,2),i=r[0],m=r[1],u=Object(n.useState)(null),_=Object(o.a)(u,2),d=_[0],E=_[1],g=Object(v.a)({threshold:0}),b=Object(o.a)(g,2),p=b[0],N=b[1];parseFloat(N.toPrecision(2));return c.a.createElement("div",{ref:p,className:"deck-slider ".concat(t?"is-animating":"")},c.a.createElement("div",{className:"deck-slider__slider"},w.map((function(e,a){var t=a+1,n="gallery-".concat(t),l=i===t,r=d===t,o=t-i;return o<0&&(o=w.length+o),c.a.createElement("div",{key:n,className:"deck-slider__slide ".concat(l?"is-active":""," ").concat(r?"is-prev":""),style:{right:"-".concat(10*o,"%"),zIndex:w.length-o,order:o}},c.a.createElement("div",{className:"deck-slider__slide-body",style:{transform:"scale(".concat(1*Math.pow(.7,o),")")}},c.a.createElement("button",{type:"button",className:"deck-slider__click-area",onClick:function(){var e;e=t,s(!0),E(i),m(e),setTimeout((function(){E(null)}),300),setTimeout((function(){s(!1)}),600)}},"To this slide"," ",t),c.a.createElement("div",{className:"deck-slider__img",style:{backgroundImage:"url(".concat(e.imgUrl,")")}})))}))),c.a.createElement("div",{className:"deck-slider__captions"},c.a.createElement("div",{className:"deck-slider__caption"},c.a.createElement("div",{className:"deck-slider__date"},"15 Jan\u201331 Mar 2021"),c.a.createElement("div",{className:"deck-slider__location"},"HACC at"),c.a.createElement("div",{className:"deck-slider__addr"},"K11 Atelier King's Road"),c.a.createElement("div",{className:"deck-slider__remark"},"By Invitation Only"))))},A=function(e){var a=e.pageProgess,t=e.updatePageProgess,s=Object(v.a)({threshold:0}),l=Object(o.a)(s,2),r=l[0],i=l[1],m=parseFloat(i.toPrecision(2)),u=m>.15;Object(n.useEffect)((function(){u&&"active"!==a.exhibition?"active"!==a.exhibition&&t(Object(d.a)({},a,{exhibition:"active"})):"active"===a.exhibition&&t(Object(d.a)({},a,{exhibition:""}))}),[u]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"sec-exhibition__bg",style:{opacity:function(){var e=2*m;return e>1&&(e=1),e<0&&(e=0),"".concat(e)}()}},c.a.createElement("div",{className:"sec-exhibition__bg-graphic"}),c.a.createElement("div",{className:"sec-exhibition__bg-overlay"})),c.a.createElement("div",{ref:r,className:"sec-exhibition ".concat(u?"is-active":"")},c.a.createElement("div",{className:"sec-exhibition__inner"},c.a.createElement("h2",{className:"sec-exhibition__title"},c.a.createElement("span",{className:"sec-exhibition__title-icon",style:{backgroundImage:"url(/img/exhibition/icon-exhibition.svg)"}}),c.a.createElement("small",{className:"sec-exhibition__title-tag"},"WE CREATE. WE ARE ARTISANS. WE ARE CSV."),c.a.createElement("span",{className:"sec-exhibition__title-txt"},c.a.createElement(j,{text:["THE","EXHIBITION"]}))),c.a.createElement("div",{className:"sec-exhibition__desc"},c.a.createElement(p,null,c.a.createElement("p",null,"It is in us to think bolder, ",c.a.createElement("br",null),"act kinder, and discover newer",c.a.createElement("br",null),"in the face of an ever-changing world.")),c.a.createElement("div",{className:"sec-exhibition__perspective"},c.a.createElement(N,null,c.a.createElement("div",{className:"sec-exhibition__perspective-deco"}),c.a.createElement("div",{className:"sec-exhibition__perspective-content"},c.a.createElement("div",{className:"sec-exhibition__perspective-bg"}),c.a.createElement("p",{className:"sec-exhibition__perspective-text"},"ACHIEVEMENTS ARE NOTHING IF THEY FAIL TO INSPIRE THE WORLD"),c.a.createElement("p",{className:"sec-exhibition__perspective-tag"},"ADRIAN CHENG")))),c.a.createElement(p,null,c.a.createElement("p",null,"The only true piece of great work is ",c.a.createElement("br",null),"one that inspires\u2026therefore, ",c.a.createElement("br",null),"We Create. Inspiring a New World. "))),c.a.createElement("div",{className:"sec-exhibition__gallery"},c.a.createElement("div",{className:"sec-exhibition__gallery-infos"},c.a.createElement("div",{className:"sec-exhibition__gallery-graphic"}),c.a.createElement("div",{className:"sec-exhibition__gallery-info"},c.a.createElement("div",{className:"sec-exhibition__gallery-info-content"},c.a.createElement("img",{className:"sec-exhibition__slogans",src:"img/exhibition/logo-slogans.svg",alt:""}))),c.a.createElement("div",{className:"sec-exhibition__gallery-info"},c.a.createElement("div",{className:"sec-exhibition__gallery-info-content"},c.a.createElement("small",{className:"sec-exhibition__info-tag"},"New World Development"),c.a.createElement("span",{className:"sec-exhibition__info-title"},"50th Anniversary Exhibition")))),c.a.createElement("div",{className:"sec-exhibition___slider"},c.a.createElement(S,null))))))},T=(t(66),function(e){var a=e.pageProgess,t=e.updatePageProgess,s=Object(v.a)({threshold:0}),l=Object(o.a)(s,2),r=l[0],i=l[1],m=parseFloat(i.toPrecision(2))>.2;return Object(n.useEffect)((function(){m&&"active"!==a.tour?"active"!==a.tour&&t(Object(d.a)({},a,{tour:"active"})):"active"===a.tour&&t(Object(d.a)({},a,{tour:""}))}),[m]),c.a.createElement("div",{ref:r,className:"sec-tour ".concat(m?"is-active":"")},c.a.createElement("div",{className:"sec-tour__inner"},c.a.createElement("h2",{className:"sec-tour__title"},c.a.createElement("span",{className:"sec-tour__title-icon",style:{backgroundImage:"url(/img/tour/icon-tour.svg)"}}),c.a.createElement("small",{className:"sec-tour__title-tag"},"EXTRAORDINARY EXPERIENCE"),c.a.createElement("span",{className:"sec-tour__title-txt"},c.a.createElement(j,{text:["VIRTUAL","TOUR"]}),c.a.createElement(p,{delay:.3},c.a.createElement("span",{className:"sec-tour__title-gray coming-soon-text"},"COMING SOON")))),c.a.createElement("div",{className:"sec-tour__desc"},c.a.createElement(p,null,c.a.createElement("p",null,"The Virtual Tour of the exhibition will be available for visiting online here in Mid January.")))))}),C=(t(67),function(e){var a=e.pageProgess,t=e.updatePageProgess,s=Object(v.a)({threshold:0}),l=Object(o.a)(s,2),r=l[0],i=l[1],m=parseFloat(i.toPrecision(2))>.2;return Object(n.useEffect)((function(){m&&"active"!==a.gallery?"active"!==a.gallery&&t(Object(d.a)({},a,{gallery:"active"})):"active"===a.gallery&&t(Object(d.a)({},a,{gallery:""}))}),[m]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{ref:r,className:"sec-gallery ".concat(m?"is-active":"")},c.a.createElement("div",{className:"sec-gallery__inner"},c.a.createElement("h2",{className:"sec-gallery__title"},c.a.createElement("span",{className:"sec-gallery__title-icon",style:{backgroundImage:"url(/img/gallery/icon-gallery.svg)"}}),c.a.createElement("small",{className:"sec-gallery__title-tag"},"EXHIBITION HIGHLIGHTS"),c.a.createElement("span",{className:"sec-tour__title-txt"},c.a.createElement(j,{text:["GALLERY"]}))),c.a.createElement("div",{className:"sec-gallery__gallery"},c.a.createElement("div",{className:"sec-gallery__gallery-item"},c.a.createElement("div",{className:"sec-gallery__gallery-item-body"},c.a.createElement(N,null,c.a.createElement("div",{className:"sec-gallery__gallery-graphic",style:{backgroundImage:"url(/img/exhibition/img-gallery-1.jpg)"}})),c.a.createElement("p",{className:"sec-gallery__item-desc"},"Exhibition Highlights are coming!"))),c.a.createElement("div",{className:"sec-gallery__gallery-item"},c.a.createElement("div",{className:"sec-gallery__gallery-item-body"},c.a.createElement(N,{isReverse:!0},c.a.createElement("div",{className:"sec-gallery__gallery-graphic",style:{backgroundImage:"url(/img/exhibition/img-gallery-2.jpg)"}}))))))),c.a.createElement("div",{className:"sec-gallery__bg"}))}),R=t(17),W=t.n(R),F=(t(68),function(){return c.a.createElement("div",{className:"sec-artisan__graphic"},c.a.createElement("div",{className:"sec-artisan__wave-tag"},c.a.createElement("div",{className:"sec-artisan__wave-text"},"LIMITED",c.a.createElement("br",null),"GIFT")),c.a.createElement("div",{className:"sec-artisan__parallax"},c.a.createElement(W.a,null,c.a.createElement(W.a.Layer,{config:{xFactor:.01,yFactor:-.01}},c.a.createElement("img",{className:"sec-artisan__graphic-mask",src:"/img/artisan/img-mask.svg",alt:""})),c.a.createElement(W.a.Layer,{config:{xFactor:.03,yFactor:-.03}},c.a.createElement("img",{className:"sec-artisan__graphic-blur",src:"/img/artisan/img-mask-blur.svg",alt:""})))))}),H=function(e){var a=e.onClickSubsBtn;return c.a.createElement("button",{className:"sec-artisan__subs",type:"button",onClick:function(){return a()}},c.a.createElement("span",{className:"sec-artisan__subs-txt"},"SUBSCRIBE",c.a.createElement("br",null),"NOW"))},M=function(e){var a=e.pageProgess,t=e.updatePageProgess,s=e.onClickSubsBtn,l=Object(v.a)({threshold:0}),r=Object(o.a)(l,2),i=r[0],m=r[1],u=parseFloat(m.toPrecision(2))>.12;return Object(n.useEffect)((function(){u&&"active"!==a.artisan?"active"!==a.artisan&&t(Object(d.a)({},a,{artisan:"active"})):"active"===a.artisan&&t(Object(d.a)({},a,{artisan:""}))}),[u]),c.a.createElement("div",{ref:i,className:"sec-artisan ".concat(u?"is-active":"")},c.a.createElement("div",{className:"sec-artisan__bg"}),c.a.createElement("div",{className:"sec-artisan__inner"},c.a.createElement("h2",{className:"sec-artisan__title"},c.a.createElement("span",{className:"sec-artisan__title-icon",style:{backgroundImage:"url(/img/artisan/icon-artisan.svg)"}}),c.a.createElement("small",{className:"sec-artisan__title-tag"},"MEMBERSHIP PROGRAM"),c.a.createElement("span",{className:"sec-artisan__title-txt"},c.a.createElement(j,{text:["BECOME","AN ARTISAN"]}))),c.a.createElement("div",{className:"sec-artisan__content"},c.a.createElement("div",{className:"sec-artisan__graphics"},c.a.createElement(F,null)),c.a.createElement("div",{className:"sec-artisan__desc"},c.a.createElement("p",null,"Enjoyed the NWD \u201cWe Create. We are Artisans. We are CSV\u201d 50th anniversary exhibition? Stay in touch and be the first to find out about our next artisanal events."),c.a.createElement("p",null,"Subscribe to the We are Artisans mailing list for free to stay up to date with the latest news of New World Group, and be in the inner circle of our year-round cultural activities."),c.a.createElement("div",{className:"sec-artisan__graphics sec-artisan__graphics--mobile"},c.a.createElement(F,null)),c.a.createElement("div",{className:"sec-artisan__desktop-item"},c.a.createElement(H,{onClickSubsBtn:function(){return s()}})),c.a.createElement("p",null,"As a welcome gift, new subscribers will also receive a pack (5 individual masks each) of our 50th Anniversary Limited Edition NWD masks \u2013 all made in Hong Kong as a celebration of our heritage."),c.a.createElement(f,{title:"MASK SPECIFICATIONS"},c.a.createElement("div",{className:"sec-artisan__info"},c.a.createElement("div",{className:"sec-artisan__info-item"},c.a.createElement("strong",null,"Adult size: 17.5 x 9.5cm")),c.a.createElement("div",{className:"sec-artisan__info-item"},"ASTM Level 2 (BFE\u226598%; PFE\u226598%)"),c.a.createElement("div",{className:"sec-artisan__info-item"},"Manufactured in a certified ISO Class 8 cleanroom"),c.a.createElement("div",{className:"sec-artisan__info-item"},"Fluid resistant to help reduce the wearer's exposure to blood and other bodily fluids"),c.a.createElement("div",{className:"sec-artisan__info-item"},"Comfortable nose band and earloops that fit the wearer's facial contours for high breathability"),c.a.createElement("div",{className:"sec-artisan__info-item"},"Hypoallergenic and latex-free"))),c.a.createElement("div",{className:"sec-artisan__mobile-item"},c.a.createElement(H,{onClickSubsBtn:function(){return s()}}))))))},L=(t(69),function(e){var a=e.open,t=e.onClosePopup,s=u();return Object(n.useEffect)((function(){a&&s.width<768?Object(g.a)(document.body):Object(g.b)(document.body)}),[a,s]),c.a.createElement("div",{className:"subs-popup ".concat(a?"is-open":"")},c.a.createElement("button",{className:"subs-popup__overlay",type:"button",onClick:function(){return t()}},"Close popup"),c.a.createElement("div",{className:"subs-popup__body"},c.a.createElement("div",{className:"subs-popup__head"},c.a.createElement("button",{className:"subs-popup__close",type:"button",onClick:function(){return t()}},"Close popup")),c.a.createElement("div",{className:"subs-popup__form"},c.a.createElement("iframe",{src:"https://uat.weareartisans.hk/subscriptionform",height:"100%",width:"100%",title:"Become an artisan"}))))}),D=(t(70),function(e){var a=e.pageProgess,t=e.updatePageProgess,s=Object(v.a)({threshold:0}),l=Object(o.a)(s,2),r=l[0],i=l[1],m=parseFloat(i.toPrecision(2))>.2;return Object(n.useEffect)((function(){m&&"active"!==a.exhibition?"active"!==a.exhibition&&t(Object(d.a)({},a,{exhibition:"active"})):"active"===a.exhibition&&t(Object(d.a)({},a,{exhibition:""}))}),[m]),c.a.createElement("footer",{ref:r,className:"footer ".concat(m?"is-active":"")},c.a.createElement("div",{className:"footer__top"},c.a.createElement("div",{className:"footer__inner"},c.a.createElement("h2",{className:"footer__title"},"The",c.a.createElement("br",null),"Collaborations"),c.a.createElement("div",{className:"footer__collabs"},c.a.createElement("div",{className:"footer__collab-grp"},c.a.createElement("h3",{className:"footer__collab-title"},"Venue Provider"),c.a.createElement("div",{className:"footer__logos"},c.a.createElement("img",{className:"footer__logo footer__logo--k11",src:"/img/logo/logo-k11.png",alt:""}))),c.a.createElement("div",{className:"footer__collab-grp"},c.a.createElement("h3",{className:"footer__collab-title"},"Creative Powers"),c.a.createElement("div",{className:"footer__logos"},c.a.createElement("img",{className:"footer__logo footer__logo--ddb",src:"/img/logo/logo-ddb.svg",alt:""}),c.a.createElement("img",{className:"footer__logo footer__logo--msl",src:"/img/logo/logo-msl.svg",alt:""})))))),c.a.createElement("div",{className:"footer__bottom"},c.a.createElement("div",{className:"footer__inner"},c.a.createElement("div",{className:"footer__nwd50"},c.a.createElement("div",{className:"footer__logos"},c.a.createElement("img",{className:"footer__logo footer__logo--nwd50",src:"/img/logo/logo-main-white.svg",alt:""}),c.a.createElement("div",{className:"footer__logo-br"}),c.a.createElement("img",{className:"footer__logo footer__logo--slogans",src:"/img/logo/logo-slogans.svg",alt:""}))),c.a.createElement("div",{className:"footer__info"},c.a.createElement("div",{className:"footer__copyright"},"Copyright \xa9 ".concat((new Date).getFullYear()," New World Development. All rights reserved.")),c.a.createElement("div",{className:"footer__logos"},c.a.createElement("img",{className:"footer__logo footer__logo--tam",src:"/img/logo/logo-tam.svg",alt:""}))))))}),B=function(){var e=Object(n.useState)({pageReady:"",splash:"",landing:"",video:"",afterVideo:"",journey:"",exibition:"",tour:"",gallery:"",artisan:"",footer:""}),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(!1),r=Object(o.a)(l,2),i=r[0],u=r[1],d=Object(n.useRef)([]),E=function(e){s(e)};Object(n.useEffect)((function(){window.dispatchEvent(new CustomEvent("scroll"))}),[t]);var g=t.artisan||t.video&&!t.journey;return c.a.createElement("div",{className:"main-layout ".concat(t.pageReady?"page-ready":""," ").concat(t.splash?"splash-finished":""," ").concat(t.video?"in-video":""," ").concat(t.afterVideo?"after-video":"","  ").concat(g?"color-inversed":"")},c.a.createElement("div",{className:"main-layout__body"},c.a.createElement("h1",{className:"a11y-hidden"},"NWD50"),c.a.createElement(_,{inverseColor:g,pageProgess:t,updatePageProgess:E,scrollToSec:function(e){var a=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>767?240:150;m.scroller.scrollTo("anchor-".concat(e),{duration:1e3,delay:50,smooth:!0,offset:a-30})}}),c.a.createElement("main",{className:"main-layout__main"},c.a.createElement(O,{pageProgess:t,updatePageProgess:E}),c.a.createElement(P,{pageProgess:t,updatePageProgess:E}),c.a.createElement(I,{pageProgess:t,updatePageProgess:E}),c.a.createElement(m.Element,{name:"anchor-journey"},c.a.createElement("div",{className:"main-layout__section-spacer",ref:function(e){d.current.journey=e}})),c.a.createElement(k,{pageProgess:t,updatePageProgess:E}),c.a.createElement(m.Element,{name:"anchor-exhibition"},c.a.createElement("div",{className:"main-layout__section-spacer",ref:function(e){d.current.exhibition=e}})),c.a.createElement(A,{pageProgess:t,updatePageProgess:E}),c.a.createElement(m.Element,{name:"anchor-tour"},c.a.createElement("div",{className:"main-layout__section-spacer",ref:function(e){d.current.tour=e}})),c.a.createElement(T,{pageProgess:t,updatePageProgess:E}),c.a.createElement(m.Element,{name:"anchor-gallery"},c.a.createElement("div",{className:"main-layout__section-spacer",ref:function(e){d.current.gallery=e}})),c.a.createElement(C,{pageProgess:t,updatePageProgess:E}),c.a.createElement(m.Element,{name:"anchor-artisan"},c.a.createElement("div",{className:"main-layout__section-spacer",ref:function(e){d.current.artisan=e}})),c.a.createElement(M,{pageProgess:t,updatePageProgess:E,onClickSubsBtn:function(){u(!0)}}),c.a.createElement(L,{open:i,onClosePopup:function(){u(!1)}}),c.a.createElement("div",{className:"main-layout__section-spacer",ref:function(e){d.current.footer=e}}),c.a.createElement(D,{pageProgess:t,updatePageProgess:E}))))},G=function(){return c.a.createElement(r.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:B})))},Y=function(){return c.a.createElement(G,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.5991c887.chunk.js.map