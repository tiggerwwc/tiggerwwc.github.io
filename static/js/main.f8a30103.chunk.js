(this["webpackJsonpsandtable-test"]=this["webpackJsonpsandtable-test"]||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(15),r=t.n(o),s=(t(58),t(16)),i=t(11),c=t(1),d=t(104),m=(t(59),t(42)),u=t(7),h=t(43),f=t(17),g=t.n(f),p=t(48),b=t(12),v=t.n(b),w=t(25),E=t(10),_=t(52),y=function(e,a){var t,n,l,o,r,s,i=a,c=(null===(t=i)||void 0===t?void 0:t.mode)||"random",d=function(){return"pattern"===c?1089:"fullscreen"===i.screenMode?1600:625},m=d(),h=[],f=[],g=[],p={},b={x:-99999,y:-99999},v=0,w=["random","uniform","pattern"];window.particles=h;var E={random:["#FFF","#FFF"],uniform:["#FFF","#FFF"],drop:["#1d75cf","#3a5945"],ribbon:["#702744","#f98d00"]},y=function(){var e,a,t=document.querySelector(".ip-slideshow"),o=document.querySelector("canvas");(o&&(null===t||void 0===t||t.removeChild(o),n=null),n=document.createElement("canvas"),N(),null===t||void 0===t||t.appendChild(n),n.getContext&&n.getContext("2d"))?(l=n.getContext("2d"),"ontouchmove"in window?(n.addEventListener("touchup",j,!1),n.addEventListener("touchmove",x,!1)):(n.addEventListener("mousemove",O,!1),n.addEventListener("mouseout",S,!1)),L("bind","left"),L("bind","right"),window.onresize=N,K(),"fullscreen"!==(null===(e=i)||void 0===e?void 0:e.screenMode)&&setTimeout((function(){c="uniform",m=d(),K()}),2e3),r=document.querySelector(".ip-nav-left"),null===(a=s=document.querySelector(".ip-nav-right"))||void 0===a||a.classList.add("ip-nav-show")):console.error("Sorry, switch to a better browser to see this experiment.")};window.reinitCanvas=y;var k=function(e){i=e};function N(){var e,a;if("fullscreen"===(null===(e=i)||void 0===e?void 0:e.screenMode))n.width=4*window.innerWidth,n.height=4*window.innerHeight;else if("halfscreen"===(null===(a=i)||void 0===a?void 0:a.screenMode)){var t=document.documentElement,l=document.querySelector(".sandtable-board");l&&(n.width=4*(null===l||void 0===l?void 0:l.clientWidth),n.height=4*(null===l||void 0===l?void 0:l.clientHeight),t.style.setProperty("--sand-w","".concat(null===l||void 0===l?void 0:l.clientWidth,"px")),t.style.setProperty("--sand-h","".concat(null===l||void 0===l?void 0:l.clientHeight,"px")))}else n.width=1920,n.height=1440;D()}function C(){return window.pageXOffset||window.document.documentElement.scrollLeft}function M(){return window.pageYOffset||window.document.documentElement.scrollTop}function O(e){e.preventDefault();var a=document.querySelector(".react-transform-element"),t=a?1/(a.getBoundingClientRect().width/a.offsetWidth)*4:1,l=e.pageX,o=e.pageY,r=C()+n.getBoundingClientRect().left,s=M()+n.getBoundingClientRect().top;b.x=(l-r)*t,b.y=(o-s)*t}window.updateCanvasOptions=k;var A=function(){b={x:-1e3,y:-1e3}},S=function(){A()};function j(e){e.preventDefault(),A()}function x(e){e.preventDefault();var a=document.querySelector(".react-transform-element"),t=a?1/(a.getBoundingClientRect().width/a.offsetWidth)*4:1,l=e.touches[0].pageX,o=e.touches[0].pageY,r=C()+n.getBoundingClientRect().left,s=M()+n.getBoundingClientRect().top;b.x=(l-r)*t,b.y=(o-s)*t}function T(e){if(e.preventDefault(),c=w[Math.max(0,--v)],g=[],0===v)return r.classList.remove("ip-nav-show"),void L("unbind","left");v===w.length-1&&(s.classList.add("ip-nav-show"),L("bind","right"))}function F(e){var a;(e.preventDefault(),c=w[Math.min(w.length,++v)],g=[],1===v)&&(null===(a=r)||void 0===a||a.classList.add("ip-nav-show"),L("bind","left"));if(v===w.length-1){var t,n;if(null===(t=s)||void 0===t?void 0:t.classList.contains("ip-nav-show"))null===(n=s)||void 0===n||n.classList.remove("ip-nav-show");L("unbind","right")}}function L(e,a){var t="left"===a?T:F;switch(e){case"bind":var n=document.querySelector(".ip-nav-".concat(a));n&&(n.addEventListener("touchstart",t,!1),n.addEventListener("click",t,!1),n.style.cursor="pointer");break;case"unbind":var l=document.querySelector(".ip-nav-".concat(a));l&&(l.removeEventListener("touchstart",t,!1),l.removeEventListener("click",t,!1),l.style.cursor="default")}}var K=function(e,a){if(a&&k(a),n){for(var t=0,l=m;t<l;t++){var r,s,i=t,d=Math.floor(Math.sqrt(m)),u=i+1,f=Math.ceil(u/d),g=u%d===0?d:u%d,p=i/l,b=g+d*(d-f),v=f+d*(g-1),w=H(0,n.width),y=H(0,n.height);r=Math.floor(n.width/2),s=y-H(0,3*n.height);var N=H(0,1),C=!(N>0||N<12),M=E.random[~~(Math.random()*E.random.length)],O={friction:0,char:q("pattern"===c?v:b),initX:w,initY:y,x:r,y:s,hasBorn:C,ease:.04+.06*Math.random(),bornSpeed:.07+.07*Math.random(),alpha:0,maxAlpha:.4+.5*Math.random(),radius:N,maxRadius:3,color:M,interactive:!1,angle:0,steps:p,stepCount:i,textIndex:b,patternIndex:v};h[t]?h[t]=Object(_.a)({},O,{x:e?O.x:h[t].x,y:e?O.y:h[t].y}):h.push(O)}o&&window.cancelAnimationFrame(o),B()}};function D(){if([].forEach.call(h,(function(e,a){switch(c){case"random":p.x=e.initX,p.y=e.initY;break;case"uniform":case"pattern":var t=Math.floor(Math.sqrt(m)),l=Math.floor(e.stepCount/t),o=e.stepCount%t,r=n.width/t,s=n.height/t,d="fullscreen"===i.screenMode?40:10;p.x=d+l*r,p.y=40+o*s;break;case"ribbon":p.x=.5*n.width+90*Math.sin(a)*Math.cos(a),p.y=320+140*(-Math.sin(a)-1)}var u=.08*(1-e.friction);if(e.interactive)e.x-=(b.x-e.x)*u,e.y-=(b.y-e.y)*u,e.angle+=.08;else{var h=p.x-e.x,f=p.y-e.y;e.initialized&&!i.particlesBackToOrigin||(e.x+=h*u,e.y+=f*u,e.angle+=1e-4,e.initialized=h<.05&&f<.05)}})),g.length<f.length)for(var e=[].slice.call(f,g.length,f.length),a=0;a<e.length;a++)f.splice(a,1)}function B(){l.clearRect(0,0,n.width,n.height),D(),[].forEach.call(h,(function(e,a){if(e.alpha+=.05*(e.maxAlpha-e.alpha),e.hasBorn&&(e.radius+=(0-e.radius)*e.bornSpeed,0===Math.round(e.radius))){switch(c){case"random":e.color=E.random[~~(Math.random()*E.random.length)];break;case"uniform":e.color=E.uniform[~~(Math.random()*E.uniform.length)];var t=function(e){for(var a=[],t=(Math.pow(e,2),-e);t<e;t++)for(var n=-e;n<e;n++){var l=n<0?n+1:n,o=Math.sqrt(Math.pow(l-1.25*e,2)+Math.pow(t-1.45*e,2));if(Math.abs(o)<=2.5*e){var r=Math.abs(o)/(2.4*e)*1;a.push(Math.pow(r,2))}else a.push(.1)}return a}(Math.floor(Math.sqrt(m))/2);e.alpha=t[e.patternIndex-1],e.maxAlpha=t[e.patternIndex-1];break;case"pattern":e.color=E.uniform[~~(Math.random()*E.uniform.length)],"\uff5c"===e.char?(e.alpha=.4,e.maxAlpha=.4):(e.alpha=.75,e.maxAlpha=.75);break;case"ribbon":e.color=E.ribbon[~~(Math.random()*E.ribbon.length)]}e.hasBorn=!1}e.hasBorn||(e.radius+=(e.maxRadius-e.radius)*e.bornSpeed,Math.round(e.radius)===e.maxRadius&&(e.hasBorn=!0));var n=function(e,a){var t=Math.abs(e.x-a.x),n=Math.abs(e.y-a.y);return Math.sqrt(t*t+n*n)}(b,e)-e.radius;n<=240?(e.interactive=!0,e.friction=(n-120)/120,e.friction>.8&&(e.friction=1)):(e.interactive=!1,e.friction=0)})),function(){var e=50;window.innerWidth<768?e=24:window.innerWidth<992&&(e=36);[].forEach.call(h,(function(a,t){l.save(),l.globalAlpha=a.alpha,l.fillStyle=a.color,l.font="".concat(e,"px Lato, Arial, sans-serif"),l.fillText(a.char,a.x,a.y),l.beginPath(),l.fill(),l.restore()}))}(),o=window.requestAnimFrame(B)}window.reCreateCanvas=K;var H=function(e,a){return~~(Math.random()*(a-e+1)+e)},q=function(e){var a=["\u672a","\u4f86"];if("pattern"===c){if(e){return"1"===["\uff5c"].concat(Object(u.a)(Array.prototype.map.call("000000000000000001010101011011111001000000000000100010101001111111000000100010000000101010100111111000000000000000000010011011101111000010000001000000001010101111111000000000000000001111111111111111000000000000001111111111111111111001000100000111111111111111111111100000000011111111111111111111111000000001111111111111111111111111000000111111111111111111111111111000001111111111111111111111111111000111111110110010110111111111111001111111011101011011011111111111011111110100010110100101011111111011111101010100101010101111111110111101010000001110101111011111111111101000010000101010010101111111110100000000010001001001111111111110000010001000000001111111011111101000000000000001010010101111111000000000100000100000101101011111100000000000000000011100111111111001000000000100001000011011111111000000000000000000001010111111111000000000100000100101001110111111000000000000000000010101111111111000000000000000001001010111111011000000000001000000000100101111111000000000000000100011101010111111001000000000000000000010111111111000000001000000000000010101111111000000000000000000010000101111111",(function(e){return e}))))[e]?a[Math.floor(Math.random()*a.length)]:"\uff5c"}var t=[].concat(a,["\uff5c"]);return t[Math.floor(Math.random()*t.length)]}var n=["\uff5c"].concat(Object(u.a)(Array.prototype.map.call(i.chars||"\uff5c",(function(e){return e}))));return n[e||Math.floor(Math.random()*n.length)]||"\uff5c"};window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/660)},y()},k=(t(69),function(e){var a=e.chars,t=e.particlesBackToOrigin,o=e.mode,r=e.fullscreen,s=e.screenMode,i=void 0===s?"fullscreen":s,d=e.refreshTrigger,m=void 0===d?0:d,h=Object(n.useState)(!1),f=Object(c.a)(h,2),p=f[0],b=f[1];return Object(n.useEffect)((function(){if(a&&(null===a||void 0===a?void 0:a.length)){var e={chars:(a?g.a.reverse(Object(u.a)(a)):[]).join("|"),particlesBackToOrigin:t,mode:o,screenMode:r?"fullscreen":i};p?(n=e,window.reCreateCanvas(!0,n)):(b(!0),y(window,e))}var n}),[a,t,o,r,i,m]),l.a.createElement("div",{className:"sand-test-2"},l.a.createElement("div",{className:"ip-slideshow-wrapper"},l.a.createElement("div",{className:"ip-slideshow"})))}),N=(t(70),function(e){var a=e.show,t=void 0===a||a;return l.a.createElement("div",{className:"loader-dots ".concat(t?"is-show":"")},l.a.createElement("span",{className:"loader-dots__dot"}),l.a.createElement("span",{className:"loader-dots__dot"}),l.a.createElement("span",{className:"loader-dots__dot"}),l.a.createElement("span",{className:"loader-dots__dot"}))}),C=t(44),M=t.n(C),O=(t(73),t(74),function(e){var a=e.children,t=e.startAtBottom,o=Object(n.useRef)(null);return Object(n.useEffect)((function(){setTimeout((function(){var e=document.querySelector(".start-at-bottom");e&&(e.scrollTop=999999)}),2e3)}),[]),l.a.createElement("div",{className:"scrollplane"},l.a.createElement(M.a,{className:"scrollplane__scroller ".concat(t?"start-at-bottom":""),ref:o},l.a.createElement("div",{className:"scrollplane__content"},a)))}),A=(t(75),function(e){var a=e.open,t=e.onClose;return l.a.createElement("div",{className:"sandtable-about ".concat(a?"is-active":"")},l.a.createElement("button",{type:"button",className:"sandtable-about__close",onClick:t},"Close"),l.a.createElement(E.Element,{name:"anchor-about"},l.a.createElement("h3",{className:"sandtable-about__title"},"\u95dc\u65bc About"),l.a.createElement(O,null,l.a.createElement("div",{className:"sandtable-about__desc"},l.a.createElement("p",null,"Sandtable \u6c99\u76c6\u63a8\u6f14 invites you to develop stories, dreams, and speculations on the histories and futures of Hong Kong as you encounter the urban legend of Ah Kwan Showing the Way, a fantasy concocted by early British colonialists. This will culminate in an ongoing alternative archive, documenting the multiple, interwoven, non-linear histories of Hong Kong generated by physical and virtual contributors."),l.a.createElement("p",null,"Throughout its history, Hong Kong has been central to global material networks, where resources, objects and ideas have emerged, passed through, been exchanged, or destined. Nevertheless, design as a force for social agency has thus far been peripheral in the discourse of Hong Kong history and cultural values. With the rapid transformation happening in Hong Kong, design has taken on an increasingly critical role for urgent change resonant with today\u2019s global landscape."),l.a.createElement("p",null,"As the city\u2019s future and past reach another crossroad, Sandtable \u6c99\u76c6\u63a8\u6f14 seeks to disrupt the linearity of Hong Kong\u2019s history through design speculation. Who has controlled the narrative of the city and how might we redistribute ways of knowing? Play a game of Chinese Whispers with the local legend Ah Kwan Showing the Way as a basis, every day we will regenerate the past and tell a \u2018fortune\u2019 for our collective future. "),l.a.createElement("br",null),l.a.createElement("p",null,"\u300a\u6c99\u76c6\u63a8\u6f14\u300b\u9080\u8acb\u4f60\u900f\u904e\u9999\u6e2f\u6b96\u6c11\u521d\u671f\u7684\u50b3\u8aaa\u300c\u963f\u7fa4\u5e36\u8def\u5716\u300d\uff0c\u5171\u540c\u7de8\u5beb\u6709\u95dc\u9999\u6e2f\u904e\u53bb\u8207\u672a\u4f86\u7684\u6545\u4e8b\u548c\u60f3\u50cf\u3002\u7d50\u5408\u5be6\u9ad4\u8207\u7db2\u4e0a\u89c0\u773e\u7684\u53c3\u8207\uff0c\u5c55\u9928\u8a18\u9304\u4e86\u2fb9\u6e2f\u591a\u5143\u4ea4\u7e54\u3001\u2fae\u7dda\u6027\u7684\u6b77\u53f2\uff0c\u4e26\u900f\u904e\u7fa4\u9ad4\u7684\u76f8\u4e92\u5171\u9cf4\u6301\u7e8c\u5f62\u6210\u4e00\u500b\u53e6\u985e\u8cc7\u6599\u5eab\u3002 "),l.a.createElement("p",null,"\u2f83\u53e4\u4ee5\u4f86\uff0c\u2fb9\u6e2f\u2f00\u76f4\u662f\u7269\u8cea\u7db2\u7d61\u7684\u6a1e\u7d10\uff0c\u7121\u6578\u8cc7\u6e90\u3001\u7269\u4ef6\u548c\u610f\u5ff5\u5728\u6b64\u7522\u2f63\u3001\u6d41\u52d5\u3001\u4ea4\u6613\u6216\u8005\u5b58\u7559\u3002\u7136\u800c\uff0c\u5728\u6b77\u53f2\u8207\u6587\u5316\u50f9\u503c\u7684\u8ad6\u8ff0\u4e2d\uff0c\u8a2d\u8a08\u4f5c\u70ba\u63a8\u52d5\u9999\u6e2f\u793e\u6703\u7684\u529b\u91cf\uff0c\u4e00\u76f4\u53ea\u662f\u6d41\u65bc\u5f62\u5f0f\u7684\u6cdb\u6cdb\u4e4b\u8ac7\u3002\u96a8\u8457\u9999\u6e2f\u7684\u6025\u901f\u8b8a\u5316\uff0c\u8a2d\u8a08\u5728\u61c9\u5c0d\u7576\u4eca\u5168\u7403\u5f62\u52e2\u7684\u8b8a\u9769\u6d6a\u6f6e\u4e2d\uff0c\u626e\u6f14\u8457\u8d8a\u4f86\u8d8a\u91cd\u8981\u7684\u89d2\u8272\u3002"),l.a.createElement("p",null,"\u96a8\u8457\u9019\u500b\u57ce\u5e02\u7684\u904e\u53bb\u8207\u672a\u4f86\u81e8\u5230\u53e6\u4e00\u500b\u5341\u5b57\u8def\u53e3\uff0c\u300a\u6c99\u76c6\u63a8\u6f14\u300b\u8a66\u5716\u901a\u904e\u63a8\u6e2c\u5f0f\u8a2d\u8a08\u4f86\u5207\u5165\u9999\u6e2f\u7dda\u6027\u7684\u6b77\u53f2\u3002\u8ab0\u63a7\u5236\u4e86\u9019\u57ce\u5e02\u7684\u8a71\u8a9e\u6b0a\uff1f\u6211\u5011\u53c8\u80fd\u5920\u5982\u4f55\u518d\u5206\u914d\u8a8d\u77e5\u9019\u57ce\u5e02\u7684\u65b9\u5f0f\uff1f\u8acb\u52a0\u5165\u9019\u5834\u300c\u4ee5\u8a1b\u50b3\u8a1b\u300d\u7684\u904a\u6232\uff0c\u5f9e\u300c\u963f\u7fa4\u5e36\u8def\u5716\u300d\u7684\u50b3\u8aaa\u51fa\u767c\uff0c\u6bcf\u5929\u628a\u6b77\u53f2\u6539\u5beb\uff0c\u518d\u2f63\u6210\u2f00\u672c\u8a18\u8f09\u6211\u5011\u5171\u540c\u547d\u904b\u7684\u672a\u4f86\u4e4b\u66f8\u3002"),l.a.createElement("hr",null),l.a.createElement("div",{className:"sandtable-about__head"},l.a.createElement("div",{className:"sandtable-about__head-title"},"Ah Kwan Leading the Way",l.a.createElement("br",null),"\u963f\u7fa4\u3002\u5f15\u8def"),l.a.createElement("div",{className:"sandtable-about__head-image"},l.a.createElement("img",{src:"/img/img-ah-kwan.png",alt:""}))),l.a.createElement("p",null,"As with any origin story, the story of Ah Kwan is layered with hearsay and contradiction."),l.a.createElement("p",null,"British colonists had been in the vicinity of the Pearl River Delta from the early 18th century and Hong Kong was documented as Hongkong by 1810. One day in-between, two British merchants landed on the sandy beaches of this island."),l.a.createElement("p",null,"Allegedly, confused and disoriented, they came across a fishing village and by chance met Ah Kwan\u2014sometimes a woman, sometimes a man\u2014 with a long braid trailing behind. Asking Ah Kwan about this place, the merchants were led around the island on a path laid with stone, a trek that encircled the whole island through its gentle hills and rugged mountains, crossing streams and passing cascading waterfalls. The trail was called Kwan Tai Loo (\u2018big highway\u2019 or \u2018dress belt road\u2019 in Cantonese), a road snaking through the terrain and seen from across the bay like a girdle for the island, resembling the belt tied around Ah Kwan\u2019s waist."),l.a.createElement("p",null,"Finally, the merchants asked Ah Kwan for the name of this place. They replied Heonggong (\u2018fragrant harbour\u2019 in seafarer\u2019s dialect)\u2014 \u201cHong Kong\u201d."),l.a.createElement("p",null,"\u5c31\u5982\u8a31\u591a\u95dc\u65bc\u6b77\u53f2\u8d77\u6e90\u7684\u50b3\u8aaa\u4e00\u6a23\uff0c\u963f\u7fa4\u7684\u6545\u4e8b\u7531\u8a31\u591a\u4e92\u76f8\u77db\u76fe\u7684\u50b3\u805e\u4ea4\u7e54\u800c\u6210\u3002"),l.a.createElement("p",null,"\u5f9e18\u4e16\u7d00\u521d\u671f\u958b\u59cb\uff0c\u82f1\u6b96\u52e2\u529b\u5c31\u4e00\u76f4\u5728\u73e0\u6c5f\u4e09\u89d2\u6d32\u4e00\u5e36\u6d3b\u52d5\uff0c\u65e9\u65bc1810\u5e74\u4e4b\u524d\uff0c\u5df2\u6709\u6587\u737b\u8a18\u8f09\u9999\u6e2f\u70ba\u300cHongkong\u300d\u3002\u67d0\u5929\uff0c\u5169\u540d\u82f1\u570b\u5546\u4eba\u767b\u9678\u5728\u9019\u500b\u5c0f\u5cf6\u7684\u6c99\u7058\u4e0a\u3002"),l.a.createElement("p",null,"\u64da\u7a31\uff0c\u4ed6\u5011\u8ff7\u4e86\u8def\uff0c\u5728\u56f0\u60d1\u4e2d\u8d70\u9032\u4e86\u4e00\u689d\u6f01\u6751\uff0c\u9047\u898b\u4e86\u963f\u7fa4\u3002\u6709\u8aaa\u963f\u7fa4\u662f\u5973\u4eba\uff0c\u4ea6\u6709\u8aaa\u662f\u7537\u4eba\uff0c\u7559\u8457\u4e00\u689d\u9577\u9577\u7684\u8fae\u5b50\u3002\u7576\u5546\u4eba\u5411\u963f\u7fa4\u63a2\u554f\u9019\u500b\u5730\u65b9\u6642\uff0c\u4ed6\u5011\u88ab\u5e36\u5230\u4e00\u689d\u7531\u5c0f\u77f3\u92ea\u6210\u3001\u570d\u7e5e\u8457\u6574\u500b\u5c0f\u5cf6\u7684\u5c0f\u5f91\uff0c\u9014\u7d93\u5e73\u7de9\u7684\u4e18\u9675\u548c\u5d0e\u5d87\u7684\u5c71\u8108\uff0c\u7a7f\u8d8a\u6cb3\u6d41\u548c\u7011\u5e03\u3002\u9019\u689d\u5c0f\u5f91\u5f8c\u4f86\u88ab\u7a31\u70ba\u300c\u7fa4\u5e36\u8def\u300d\uff08\u7cb5\u8a9e\u8b80\u97f3\u8fd1\u4f3c\u300c\u5927\u8def\u300d\u6216\u300c\u88d9\u5e36\u8def\u300d\uff09\uff0c\u9019\u689d\u5728\u873f\u8712\u5730\u52e2\u4e0a\u7684\u9053\u8def\uff0c\u5f9e\u6e2f\u7063\u5c0d\u9762\u770b\uff0c\u50cf\u662f\u5cf6\u5dbc\u7684\u8170\u5e36\uff0c\u5c31\u5982\u7d81\u5728\u963f\u7fa4\u8170\u4e0a\u7684\u886b\u5e36\u4e00\u6a23\u3002"),l.a.createElement("p",null,"\u6700\u5f8c\uff0c\u5546\u4eba\u554f\u963f\u7fa4\u9019\u500b\u5730\u65b9\u7684\u540d\u5b57\u3002\u963f\u7fa4\u4ee5\u6c34\u4e0a\u8a71\u56de\u7b54\u9999\u6e2f\u2500\u2500\u300cHong Kong\u300d\u3002")))))}),S=(t(76),function(e){var a=e.open,t=e.onClose;return l.a.createElement("div",{className:"sandtable-acknowledgements ".concat(a?"is-active":"")},l.a.createElement("button",{type:"button",className:"sandtable-acknowledgements__close",onClick:t},"Close"),l.a.createElement(E.Element,{name:"anchor-acknowledgements"},l.a.createElement("h3",{className:"sandtable-acknowledgements__title"},"\u9cf4\u8b1d Credits & Acknowledgements"),l.a.createElement(O,null,l.a.createElement("div",{className:"sandtable-acknowledgements__desc"},l.a.createElement("div",null,l.a.createElement("p",null,"Sandtable \u6c99\u76c6\u63a8\u6f14 is the Hong Kong Pavilion for the London Design Biennale 2021. The pavilion is supported by"," ",l.a.createElement("a",{href:"https://designtrust.hk",target:"_blank",rel:"noopener noreferrer"},"The Design Trust Feature Grant")," ","and the"," ",l.a.createElement("a",{href:"https://hkadc.org.hk",target:"_blank",rel:"noopener noreferrer"},"Hong Kong Arts Development Council Cultural Exchange Grant")," ",".")),l.a.createElement("div",null,l.a.createElement("h4",null,"CURATORIAL TEAM"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://hkdhnet.com",target:"_blank",rel:"noopener noreferrer"},"Hong Kong Design History Network")),l.a.createElement("ul",null,l.a.createElement("li",null,"Sunnie Chan \u9673\u6717\u6674"),l.a.createElement("li",null,"Vivien Chan \u9673\u6167\u7433"),l.a.createElement("li",null,"Juliana Kei \u7d00\u9038\u7d14"),l.a.createElement("li",null,"Janice Li \u674e\u980c\u6069"),l.a.createElement("li",null,"Mina Song \u5b8b\u7f8e\u5a1c"),l.a.createElement("li",null,"Jennifer Wong \u9ec3\u923a\u96ef"))),l.a.createElement("div",null,l.a.createElement("h4",null,"SPATIAL DESIGN"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.aona-architects.com",target:"_blank",rel:"noopener noreferrer"},"aona")," ","/ Charles Lai \u9ece\u96cb\u7dad and Ricky Suen \u5b6b\u7152\u6b0a")),l.a.createElement("div",null,l.a.createElement("h4",null,"GRAPHIC DESIGN"),l.a.createElement("p",null,l.a.createElement("a",{href:"http://trilingua.hk",target:"_blank",rel:"noopener noreferrer"},"Trilingua")," ","/ Chris Tsui Sau Yi \u5f90\u58fd\u61ff and Adonian Chan \u9673\u6fec\u4eba")),l.a.createElement("div",null,l.a.createElement("h4",null,"DIGITAL DESIGN"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://k2.digital",target:"_blank",rel:"noopener noreferrer"},"K2")," ","/ Teresa Dermawan, Amy Un \u8881\u695a\u8335 and Alex Tsoi \u8521\u6f64\u6953")),l.a.createElement("div",null,l.a.createElement("p",null,"Captured in sand, visitors\u2019 written strokes will be projected in the mirroring sites and recorded over the duration of the exhibition to collate an archive of resonance on- site and online. The pavilion, therefore, presents an alternative archive, documenting the multiple, interwoven, non-linear histories of Hong Kong, and encouraging collective speculation beyond the rhetorical narratives of the city\u2019s future.")),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("p",null,"Thank you to Dr. Sarah Cheang and our pavilion facilitators from the V&A/RCA History of Design MA Programme\u2014Annie Lye, Li-Xuan Teo, and Luis Vicente.")),l.a.createElement("div",null,l.a.createElement("p",null,"Thank you to Matthew Edmondson and Bonnie Sze from Hong Kong Swire Archive, Angharad McCarrick and Kevin Forkan from M+, Lau Chi Chung from Old Textbooks, and John Wu from Modernism Hong Kong, for sharing their time, knowledge, and experience in our research for the Hong Kong Pavilion.")),l.a.createElement("div",null,l.a.createElement("p",null,"Thank you to Dr. Sarah Teasley, Marisa Yiu, and Zara Arshad for bringing us together and for their continuous support.")),l.a.createElement("div",null,l.a.createElement("p",null,"Finally, thank you to all our generous crowdfunding supporters.")),l.a.createElement("hr",null),l.a.createElement("div",{className:"sandtable-acknowledgements__logos"},l.a.createElement("a",{href:"https://www.hkadc.org.hk/",target:"_blank",rel:"noopener noreferrer",className:"sandtable-acknowledgements__logo sandtable-acknowledgements__logo--hkadc"},l.a.createElement("img",{src:"/img/logo-hkadc.svg",alt:""})),l.a.createElement("a",{href:"https://designtrust.hk/",target:"_blank",rel:"noopener noreferrer",className:"sandtable-acknowledgements__logo sandtable-acknowledgements__logo--design-trust"},l.a.createElement("img",{src:"/img/logo-design-trust.svg",alt:""})))))))}),j=(t(77),function(e){var a=e.open,t=e.onClose;return l.a.createElement("div",{className:"sandtable-follow ".concat(a?"is-active":"")},l.a.createElement("button",{type:"button",className:"sandtable-follow__close",onClick:t},"Close"),l.a.createElement(E.Element,{name:"anchor-follow"},l.a.createElement("h3",{className:"sandtable-follow__title"},"\u95dc\u6ce8\u6211\u5011 Follow us"),l.a.createElement(O,null,l.a.createElement("div",{className:"sandtable-follow__desc"},l.a.createElement("a",{href:"https://www.instagram.com/londondesignbiennale/",target:"_blank",rel:"noopener noreferrer",className:"sandtable-follow__link"},l.a.createElement("span",{className:"sandtable-follow__link-label"},"Follow London Design Biennale"),l.a.createElement("span",{className:"sandtable-follow__link-ig"},"londondesignbiennale")),l.a.createElement("a",{href:"https://www.instagram.com/hkdhnet/",target:"_blank",rel:"noopener noreferrer",className:"sandtable-follow__link"},l.a.createElement("span",{className:"sandtable-follow__link-label"},"Follow Hong Kong Design History Network"),l.a.createElement("span",{className:"sandtable-follow__link-ig"},"hkdhnet")),l.a.createElement("a",{href:"https://www.instagram.com/k2isnotamountain/",target:"_blank",rel:"noopener noreferrer",className:"sandtable-follow__link"},l.a.createElement("span",{className:"sandtable-follow__link-label"},"Follow K2 Digital"),l.a.createElement("span",{className:"sandtable-follow__link-ig"},"k2isnotamountain")),l.a.createElement("a",{href:"https://www.instagram.com/aona.architects/",target:"_blank",rel:"noopener noreferrer",className:"sandtable-follow__link"},l.a.createElement("span",{className:"sandtable-follow__link-label"},"Follow aona"),l.a.createElement("span",{className:"sandtable-follow__link-ig"},"aona.architects")),l.a.createElement("a",{href:"https://www.instagram.com/trilinguahk/",target:"_blank",rel:"noopener noreferrer",className:"sandtable-follow__link"},l.a.createElement("span",{className:"sandtable-follow__link-label"},"Follow Trilingua"),l.a.createElement("span",{className:"sandtable-follow__link-ig"},"trilinguahk"))))))}),x=t(45),T=t.n(x).a.create({baseURL:"https://api.sandtable.hk/",timeout:5e3,headers:{"Content-Type":"application/json"}}),F=T,L=(t(95),function(e){var a=e.fullscreen,t=Object(i.f)(),o=Object(n.useState)(0),r=Object(c.a)(o,2),s=r[0],d=r[1],f=Object(n.useState)(""),b=Object(c.a)(f,2),_=b[0],y=b[1],C=Object(n.useState)([]),M=Object(c.a)(C,2),x=M[0],T=M[1],L=Object(n.useState)([]),K=Object(c.a)(L,2),D=K[0],B=K[1],H=Object(n.useState)([]),q=Object(c.a)(H,2),R=q[0],I=q[1],W=Object(n.useState)([]),z=Object(c.a)(W,2),P=z[0],Y=z[1],G=Object(n.useState)(!0),U=Object(c.a)(G,2),Z=U[0],J=(U[1],Object(n.useState)(a?"uniform":"pattern")),X=Object(c.a)(J,2),Q=X[0],V=(X[1],Object(n.useState)(a?"fullscreen":"halfscreen")),$=Object(c.a)(V,2),ee=$[0],ae=$[1],te=Object(n.useState)(!1),ne=Object(c.a)(te,2),le=ne[0],oe=ne[1],re=Object(n.useState)(0),se=Object(c.a)(re,2),ie=se[0],ce=se[1],de=Object(n.useState)(""),me=Object(c.a)(de,2),ue=me[0],he=me[1],fe=function(){F.get("questions").then((function(e){T(e.data),console.log("fetchQuestions",e)})).catch((function(e){})),F.get("messages").then((function(e){var a=e.data.map((function(e){return e.message}));g.a.xor(a,R).length&&(B(e.data),I(a))})).catch((function(e){})).then((function(){d(s+1)})),ce(ie+1)};Object(n.useEffect)((function(){if(R&&R.length&&x&&x.length&&!P.length){console.log("msgs",D);var e=x[x.length-1];console.log("firstQuestion.Date",e.Date);var a=[{type:"question",msg:"\u81f4\u9999\u6e2f To Hong Kong"}];D.forEach((function(t){var n=v()(t.createdAt),l=v()(e.Date,"YYYY-MM-DD");n.isBefore(l)&&a.push({type:"answer",msg:t.message})})),x.forEach((function(e,t){var n=v()(e.Date),l=t+1<x.length&&x[t+1],o=l?v()(l.Date):v()("9999-12-31","YYYY-MM-DD");a.push({type:"question",msg:e.Question}),D.forEach((function(e){var t=v()(e.createdAt);t.isSameOrAfter(n,"day")&&t.isBefore(o,"day")&&a.push({type:"answer",msg:e.message})}))})),console.log("newMsgsGroup.Date",a),Y(a)}}),[R,x,D]),Object(n.useEffect)((function(){console.log("groupedMsgs",P)}),[P]),Object(n.useEffect)((function(){new URLSearchParams(window.location.search).get("wall")&&(ae("fullscreen"),t.replace("/wall")),setTimeout((function(){window.dispatchEvent(new Event("resize"))}),1500),"fullscreen"!==ee&&setTimeout((function(){}),2500),fe()}),[]);Object(h.a)((function(){"fullscreen"===ee&&fe()}),4e4);var ge=function(){var e,a=_,t=[].concat(Object(u.a)(R),[a]);(e=a,F.post("submit-message?message=".concat(e))).then((function(){})),I(t),Y([].concat(Object(u.a)(P),[{type:"answer",msg:a}])),y("")},pe=function(e){var a;a=e,E.scroller.scrollTo("anchor-".concat(a),{duration:1e3,delay:50,smooth:!0,offset:-40}),he(e)},be=function(){return l.a.createElement("div",{className:"sandtable__sidebar"},l.a.createElement("button",{type:"button",onClick:function(){return pe("about")},className:"sandtable__sidelink"},"About"),l.a.createElement("button",{type:"button",onClick:function(){return pe("acknowledgements")},className:"sandtable__sidelink"},"Acknowledgements"),l.a.createElement("button",{type:"button",onClick:function(){return pe("follow")},className:"sandtable__sidelink"},"Follow"))};return l.a.createElement("div",{className:"sandtable is-".concat(ee)},l.a.createElement("div",{className:"sandtable__mobile-menu"},l.a.createElement(be,null)),l.a.createElement("div",{className:"sandtable__body"},l.a.createElement("div",{className:"sandtable__board"},l.a.createElement("div",{className:"sandtable__head"},l.a.createElement("img",{className:"sandtable__logo-en",src:"".concat(window.PUBLIC_URL,"/img/img-sandtable-title.svg"),alt:""}),l.a.createElement("img",{className:"sandtable__logo-zh",src:"".concat(window.PUBLIC_URL,"/img/img-sandtable-title-zh.svg"),alt:""})),l.a.createElement("div",{className:"sandtable-board"},l.a.createElement(w.b,{defaultScale:1,options:{minScale:1,maxScale:4},onZoomChange:function(e){window.canvasZoom=(e.scale-1)/3*100}},(function(e){var a,t,n=e.zoomIn,o=e.zoomOut,r=(e.resetTransform,e.setScale);Object(m.a)(e,["zoomIn","zoomOut","resetTransform","setScale"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,null,l.a.createElement("div",{className:"sandtable-board__zoomer"},l.a.createElement("div",{className:"sandtable-board__body"},l.a.createElement(k,{chars:R,particlesBackToOrigin:Z,mode:Q,screenMode:ee,refreshTrigger:s})))),l.a.createElement("div",{className:"tools-slider"},l.a.createElement("div",{className:"tools-slider__wrapper"},l.a.createElement(p.a,{className:"tools-slider__body",thumbClassName:"tools-slider__thumb",trackClassName:"tools-slider__track",renderThumb:function(e,a){return l.a.createElement("div",e,a.valueNow)},defaultValue:(null===(a=window)||void 0===a?void 0:a.canvasZoom)||0,value:(null===(t=window)||void 0===t?void 0:t.canvasZoom)||0,onChange:function(e){r(1+e/100*3)}})),l.a.createElement("button",{className:"tools-slider__zoom-out",type:"button",title:"Zoom Out",onClick:o},"-"),l.a.createElement("button",{className:"tools-slider__zoom-in",type:"button",title:"Zoom In",onClick:n},"+")))}))),l.a.createElement("nav",null,l.a.createElement("span",{className:"ip-nav-left"}),l.a.createElement("span",{className:"ip-nav-right"}))),l.a.createElement("div",{className:"sandtable__control"},l.a.createElement("div",{className:"sandtable__head"},l.a.createElement("div",null),l.a.createElement("div",{className:"sandtable__sitetitle"},l.a.createElement("span",null,"Write Together \u4e00\u8d77\u66f8\u5beb"))),l.a.createElement("div",{className:"sandtable-interact-panel"},l.a.createElement("div",{className:"sandtable-msg"},l.a.createElement("div",{className:"sandtable-msg__title"},"\u4e00\u8d77\u66f8\u5beb\u9999\u6e2f\u4e4b\u66f8 Let\u2019s continue the story of Hong Kong",x&&x.length&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),x[0].Question)),l.a.createElement("div",{className:"sandtable-msg__body"},l.a.createElement(O,{startAtBottom:!0},l.a.createElement((function(){return l.a.createElement("div",{className:"sandtable-msg__msgs"},P.map((function(e,a){return l.a.createElement(l.a.Fragment,{key:e._id},a>0&&l.a.createElement("span",{className:"sandtable-msg__dash"}),"question"===e.type?l.a.createElement("em",null,e.msg):e.msg)})),l.a.createElement(N,{show:le}))}),null))),l.a.createElement("div",{className:"sandtable-msg-input"},l.a.createElement("input",{type:"text",value:_,placeholder:"\u4e00\u8d77\u66f8\u5beb Write Together ",onFocus:function(){oe(!0)},onBlur:function(){oe(!1)},onChange:function(e){return y(e.target.value)}}),l.a.createElement("button",{type:"button",onClick:function(){return ge()}},"Submit"))),l.a.createElement(A,{open:"about"===ue,onClose:function(){return he("")}}),l.a.createElement(S,{open:"acknowledgements"===ue,onClose:function(){return he("")}}),l.a.createElement(j,{open:"follow"===ue,onClose:function(){return he("")}})),l.a.createElement(be,null))))}),K=function(e){var a=e.fullscreen,t=Object(n.useState)(!1),o=Object(c.a)(t,2);o[0],o[1],Object(d.a)().t,Object(i.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-layout"},l.a.createElement("h1",{className:"a11y-hidden"},"Sand Table"),l.a.createElement("main",{className:"main-layout__body"},l.a.createElement(L,{fullscreen:a}))))},D=(t(101),function(e){e.title,e.children;var a=Object(n.useState)(new Array(1089).fill(0)),t=Object(c.a)(a,2),o=t[0],r=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem("onPoints");if(e){var a=Array.prototype.map.call(e||"",(function(e){return Number(e)}));r(a)}}),[]);return l.a.createElement("div",{className:"pattern-creater"},l.a.createElement("div",{className:"pattern-creater__board"},o.map((function(e,a){return l.a.createElement("button",{className:"".concat(o[a]?"is-active":""),key:"point-".concat(a+1),type:"button",onClick:function(){return function(e){var a=Object(u.a)(o);a[e]=o[e]?0:1,r(a),localStorage.setItem("onPoints",a.join(""))}(a)}},l.a.createElement("span",{className:"a11y-hidden"},"point"))}))),l.a.createElement("div",{className:"pattern-creater__result"},o.join("")))}),B=function(){return l.a.createElement(s.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/wall"},l.a.createElement(K,{fullscreen:!0})),l.a.createElement(i.a,{exact:!0,path:"/pattern",component:D}),l.a.createElement(i.a,{exact:!0,path:"/",component:K})))},H=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,a,t){e.exports=t(102)},58:function(e,a,t){},59:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},95:function(e,a,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.f8a30103.chunk.js.map