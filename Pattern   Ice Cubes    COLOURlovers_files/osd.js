(function(){var n=void 0,q=!0,r=null,s=!1,t=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){u=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return u.apply(r,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};var v=document,w=window;var fa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ga=function(a){return!a?"pagead2.googlesyndication.com":(a=a.match(fa))?a[0]:"pagead2.googlesyndication.com"};var x=function(a,b){this.width=a;this.height=b};x.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};x.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};ga("");function y(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}var A=function(a,b,c){a.addEventListener?a.addEventListener(b,c,s):a.attachEvent&&a.attachEvent("on"+b,c)},B=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,s):a.detachEvent&&a.detachEvent("on"+b,c)},ha={},C=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return s}};var ia=!!window.google_async_iframe_id,D=ia&&window.parent||window,F=function(){if(ia&&!C(D)){for(var a="."+v.domain;2<a.split(".").length&&!C(D);)v.domain=a=a.substr(a.indexOf(".")+1),D=window.parent;C(D)||(D=window)}return D};var ja=function(){var a=G,b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var H=function(a,b){this.x=a!==n?a:0;this.y=b!==n?b:0};H.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};H.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var I,ka,J,la,ma=function(){return t.navigator?t.navigator.userAgent:r};la=J=ka=I=s;var K;if(K=ma()){var na=t.navigator;I=0==K.indexOf("Opera");ka=!I&&-1!=K.indexOf("MSIE");J=!I&&-1!=K.indexOf("WebKit");la=!I&&!J&&"Gecko"==na.product}var L=I,M=ka,O=la,P=J,oa=function(){var a=t.document;return a?a.documentMode:n},pa;
a:{var qa="",Q;if(L&&t.opera)var ra=t.opera.version,qa="function"==typeof ra?ra():ra;else if(O?Q=/rv\:([^\);]+)(\)|;)/:M?Q=/MSIE\s+([^\);]+)(\)|;)/:P&&(Q=/WebKit\/(\S+)/),Q)var sa=Q.exec(ma()),qa=sa?sa[1]:"";if(M){var ta=oa();if(ta>parseFloat(qa)){pa=String(ta);break a}}pa=qa}
var ua=pa,va={},wa=function(a){var b;if(!(b=va[a])){b=0;for(var c=String(ua).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var k=m.exec(g)||["","",""],p=l.exec(h)||["","",""];if(0==k[0].length&&0==p[0].length)break;b=((0==k[1].length?0:parseInt(k[1],10))<(0==p[1].length?0:parseInt(p[1],10))?-1:(0==k[1].length?
0:parseInt(k[1],10))>(0==p[1].length?0:parseInt(p[1],10))?1:0)||((0==k[2].length)<(0==p[2].length)?-1:(0==k[2].length)>(0==p[2].length)?1:0)||(k[2]<p[2]?-1:k[2]>p[2]?1:0)}while(0==b)}b=va[a]=0<=b}return b},xa=t.document,ya=!xa||!M?n:oa()||("CSS1Compat"==xa.compatMode?parseInt(ua,10):5);var za;!O&&!M||M&&M&&9<=ya||O&&wa("1.9.1");M&&wa("9");var Ca=function(a){return a?new Ba(R(a)):za||(za=new Ba)},R=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},Ba=function(a){this.A=a||t.document||document};Ba.prototype.createElement=function(a){return this.A.createElement(a)};var Da=function(a){var b=a.A;a=!P&&"CSS1Compat"==b.compatMode?b.documentElement:b.body;b=b.parentWindow||b.defaultView;return M&&wa("10")&&b.pageYOffset!=a.scrollTop?new H(a.scrollLeft,a.scrollTop):new H(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};var T=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};T.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};T.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};var U=function(a,b){var c;a:{c=R(a);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,r))){c=c[b]||c.getPropertyValue(b)||"";break a}c=""}return c||(a.currentStyle?a.currentStyle[b]:r)||a.style&&a.style[b]},Ea=function(a){var b=a.getBoundingClientRect();M&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b},Fa=function(a){if(M&&!(M&&8<=ya))return a.offsetParent;var b=R(a),c=U(a,
"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=U(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return r},Ga=function(a){var b,c=R(a),d=U(a,"position"),e=O&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),f=new H(0,0),g;b=c?R(c):document;if(g=M)if(g=!(M&&9<=ya))g=
"CSS1Compat"!=Ca(b).A.compatMode;g=g?b.body:b.documentElement;if(a==g)return f;if(a.getBoundingClientRect)b=Ea(a),a=Da(Ca(c)),f.x=b.left+a.x,f.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),f.x=b.screenX-a.screenX,f.y=b.screenY-a.screenY;else{e=a;do{f.x+=e.offsetLeft;f.y+=e.offsetTop;e!=a&&(f.x+=e.clientLeft||0,f.y+=e.clientTop||0);if(P&&"fixed"==U(e,"position")){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}e=e.offsetParent}while(e&&e!=a);if(L||P&&"absolute"==
d)f.y-=c.body.offsetTop;for(e=a;(e=Fa(e))&&e!=c.body&&e!=g;)if(f.x-=e.scrollLeft,!L||"TR"!=e.tagName)f.y-=e.scrollTop}return f},Ha=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;var Ia=function(a){var b=w;a&&b.top!=b&&(b=b.top);try{var c;if(b.document&&!b.document.body)c=new x(-1,-1);else{var d=(b||window).document,e="CSS1Compat"==d.compatMode?d.documentElement:d.body;c=new x(e.clientWidth,e.clientHeight)}return c}catch(f){return new x(-12245933,-12245933)}},Ja=function(a,b){("msie"in ha?ha.msie:ha.msie=-1!=navigator.userAgent.toLowerCase().indexOf("msie"))&&!window.opera?A(a,"readystatechange",function(){"complete"==a.readyState&&b()}):A(a,"load",b)},Ka=function(a,b){try{b.postMessage(a,
"*")}catch(c){}},La=function(a,b){if(b){a(b);var c=b.frames;if(c){var d=c.length,e;for(e=0;e<d;++e)La(a,c[e])}}};var V=function(a,b,c,d,e,f,g,h,m){this.a=Ma;this.q=0;this.s=this.f=-1;this.l=[0,0,0,0,0];this.e=[0,0,0,0,0];this.d=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.g="";this.v=s;this.C=q;this.h=d;this.r=this.i=-1;this.G=b;this.b=0;this.c=e;this.n=g||"";this.o=h||"";this.t=function(){};this.element=c;this.m=0;this.p=-1;this.k=m||Ma;this.B=b?-1!=b.indexOf("dcopt=anid"):s;this.j=this.H="";this.u=s;Na(this,a,f)},Ma=new T(0,0,0,0);
V.prototype.update=function(a,b,c,d,e){if(!(0>this.h)){var f=c?this.a:Na(this,d,e);d=a-this.h||1;this.h=a;var g=Math.max(f.top,b.top),h=Math.min(f.bottom,b.bottom),m=e=-1;if(0<this.q&&g<=h){var l=Math.max(f.left,b.left),f=Math.min(f.right,b.right);l<=f&&(g=(h-g)*(f-l)/this.q,e=1<=g?0:0.75<=g?1:0.5<=g?2:0.25<=g?3:4,0>this.f&&(this.f=a),this.s=a,0.5<=g&&(a=100*this.q/((b.bottom-b.top)*(b.right-b.left)),m=20<=a?0:10<=a?1:5<=a?2:2.5<=a?3:4))}-1!=this.i&&(this.l[this.i]+=d,2>=this.i&&-1!=this.r&&(this.zoom[this.r]+=
d));for(a=this.i;0<=a&&4>=a;a++)if(this.d[a]+=d,this.d[a]>this.e[a]&&(this.e[a]=this.d[a]),c||-1==e||a<e)this.d[a]=0;this.i=c?-1:e;this.r=m;this.t(this,b)}};
var Oa=function(a,b,c){if(a.u&&a.element&&a.element.contentWindow){var d=a.a,d=["p="+d.top+","+d.left+","+d.bottom+","+d.right];d.push("tos="+a.l.join(","));d.push("mtos="+a.e.join(","));d.push("rs="+a.c);var e=5==a.c||6==a.c;e||d.push("ht="+a.m);0<=a.f&&(d.push("tfs="+a.f),d.push("tls="+a.s));a.j&&d.push("ai="+a.j);a.g&&d.push("afp="+y(a.g));e&&(a.o&&d.push("ord="+y(a.o)),a.n&&d.push("amd="+y(a.n+";")),a.B&&d.push("anid=1"));d.unshift("adk="+a.b);b=d.concat(b).join("&");try{d={};d[0]=c;d[3]=b;d[4]=
a.b;d[5]=1E3<=Math.max(a.d[2],a.e[2])?q:s;var f=window.JSON.stringify(d),g=a.element.contentWindow;if(f){var h=da(Ka,f);La(h,g)}}catch(m){}}};V.prototype.D=function(a){this.p=a()};V.prototype.w=function(a){a=a();this.m+=a-this.p;this.p=-1};
var Na=function(a,b,c){var d,e;b=!c||5!=a.c&&6!=a.c?b.top:b;try{if(a.element){e=a.element.getBoundingClientRect();var f=a.element,g=new H(0,0),h=R(f)?R(f).parentWindow||R(f).defaultView:window;do{var m;if(h==b)m=Ga(f);else{var l=f,k=new H;if(1==l.nodeType){if(l.getBoundingClientRect){var p=Ea(l);k.x=p.left;k.y=p.top}else{var E=Da(Ca(l)),z=Ga(l);k.x=z.x-E.x;k.y=z.y-E.y}if(O&&!wa(12)){c=k;var ea;var N=n;M?N="-ms-transform":P?N="-webkit-transform":L?N="-o-transform":O&&(N="-moz-transform");var S=n;N&&
(S=U(l,N));S||(S=U(l,"transform"));if(S){var Aa=S.match(Ha);ea=!Aa?new H(0,0):new H(parseFloat(Aa[1]),parseFloat(Aa[2]))}else ea=new H(0,0);k=new H(c.x+ea.x,c.y+ea.y)}}else{var vb="function"==aa(l.F);c=l;l.targetTouches?c=l.targetTouches[0]:vb&&l.F().targetTouches&&(c=l.F().targetTouches[0]);k.x=c.clientX;k.y=c.clientY}m=k}c=m;g.x+=c.x;g.y+=c.y}while(h&&h!=b&&(f=h.frameElement)&&(h=h.parent));d=g}else e=Ma,d=new H(0,0);var Ya=d.x+a.k.left,Za=d.y+a.k.top,wb=a.k.right||e.right-e.left,xb=a.k.bottom||
e.bottom-e.top;a.a=new T(Math.round(Za),Math.round(Ya+wb),Math.round(Za+xb),Math.round(Ya))}catch(Jb){a.a=a.k}a.q=(a.a.bottom-a.a.top)*(a.a.right-a.a.left);return a.a};var Ra=function(a,b){A(a,"scroll",Pa);A(a,"resize",Qa);if(b)for(var c,d=0;d<W.length;++d)if(c=W[d],c.element){var e=u(c.D,c,X);A(c.element,"mouseover",e);e=u(c.w,c,X);A(c.element,"mouseout",e)}},Qa=function(){Sa(s);Pa()},Pa=function(){Ta(W,s)},Ta=function(a,b){if(!(Ua||0==a.length)){var c=Va;if(!(r==c||-1==c.width||-1==c.height||-12245933==c.width||-12245933==c.height)){var d=G=r;try{d=Da(Ca(w.top.document))}catch(e){return}window.clearTimeout(Y);Y=r;for(var d=new T(d.y,d.x+c.width,d.y+c.height,d.x),
f=X(),c=0;c<a.length;c++)a[c].update(f,d,b,w,Wa);Xa+=X()-f;++$a;if("osd"==ab)for(c=0;c<a.length;c++)d=bb(w),Oa(a[c],d,"goog_update_data");b||cb()}}},eb=function(){var a=db,b;v.mozVisibilityState?b="mozvisibilitychange":v.webkitVisibilityState?b="webkitvisibilitychange":v.visibilityState&&(b="visibilitychange");b&&A(v,b,a)},db=function(){var a;a=w.document;a={visible:1,hidden:2,prerender:3,preview:4}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||0;(a=1==a||0==a)&&Sa(q);Ta(W,
!a)},cb=function(){Y=window.setTimeout(function(){Ta(W,s)},1E3)},W=[],Ua=s,fb=(new Date).getTime(),Z=-1,Va=r,gb=r,hb=r,Y=r,Wa=!C(w.top),ab="",G=r,X=function(){return(new Date).getTime()-fb},ib=0,jb=0,Xa=0,$a=0,kb=-1,Sa=function(a){Va=Ia(q);if(!a){gb=w.outerWidth?new x(w.outerWidth,w.outerHeight):new x(-12245933,-12245933);a=w;a.top!=a&&(a=a.top);var b=0,c=0,d=Va;try{var e=a.document,f=e.body,g=e.documentElement;if("CSS1Compat"==e.compatMode&&g.scrollHeight)b=g.scrollHeight!=d.height?g.scrollHeight:
g.offsetHeight,c=g.scrollWidth!=d.width?g.scrollWidth:g.offsetWidth;else{var h=g.scrollHeight,m=g.scrollWidth,l=g.offsetHeight,k=g.offsetWidth;g.clientHeight!=l&&(h=f.scrollHeight,m=f.scrollWidth,l=f.offsetHeight,k=f.offsetWidth);h>d.height?h>l?(b=h,c=m):(b=l,c=k):h<l?(b=h,c=m):(b=l,c=k)}hb=new x(c,b)}catch(p){hb=new x(-12245933,-12245933)}}},bb=function(a,b){if(G&&!b)return ja();var c=a.document,d=0<=Z?X()-Z:-1;-1==kb&&(d=X());var e=[],f=W;try{if(0<f.length?((c=Va)&&e.push("bs="+c.width+","+c.height),
(c=gb)&&e.push("bos="+c.width+","+c.height),(c=hb)&&e.push("ps="+c.width+","+c.height),a.screen&&e.push("ss="+a.screen.width+","+a.screen.height)):(e.push("url="+y(a.location.href)),c.referrer&&e.push("referrer="+y(c.referrer))),e.push("tt="+d),e.push("pt="+Z),e.push("deb="+y([1,ib,jb,Xa,$a,kb].join("-"))),a.top!=a){e.push("iframe_loc="+y(a.location.href));var g=Ia(s);e.push("is="+g.width+","+g.height)}}catch(h){e.push("error")}G=e;return ja()};var $,lb=r,nb=function(){if(2==mb())return q;for(var a=W,b=0;b<a.length;b++)if(!a[b].v)return q;return s},qb=function(){if(!(0<Z)){try{if(!ob()||"function"!=typeof $.getNewBlocks)return;Sa(s);pb(s)}catch(a){}lb=window.setTimeout(qb,250)}},pb=function(a){var b=0,c=X();$.getNewBlocks(function(d,f,e,l,k){b++;var p=-1,E=s;a||l?p=c:E=q;var z=new V(window.top,f,d,p,e,Wa);z.t=rb;z.g=sb(tb,f);z.b=ub(f);k&&(z.j=k);W.push(z);E&&Ja(d,function(){z.h=X();db()})},a);if(a)for(var d=W.length,e=0;e<d;++e){var f=W[e];
0>=f.h&&(f.h=c)}},Ab=function(){try{var a=F(),b=X();Z=b;window.clearTimeout(lb);lb=r;Sa(s);if(ob()){ib=$.numBlocks();if("function"!=typeof $.getNewBlocks){var c=[];jb=0;$.getBlocks(function(a,d,e){jb++;a=new V(window.top,d,a,b,e,Wa);a.t=rb;a.g=sb(tb,d);a.b=ub(d);c.push(a)});W=c}else pb(q),jb=W.length;eb();db();yb();var d=2==$.getOseId();Ra(a,d);window.setTimeout(function(){zb("t")},36E5);kb=X()-b}else zb("c")}catch(e){W=[],zb("x")}},zb=function(a){window.clearTimeout(Y);Y=r;var b=F();$||($=Goog_AdSense_getAdAdapterInstance());
if(!Ua){if(2==mb()){-1==kb&&(W=[]);var c=W,d=s;0<c.length?Ta(c,q):d=q;d=bb(b,d);d.unshift("//"+ga("")+"/pagead/gen_204?id=osd");try{if(0<c.length)for(var e=0;e<c.length;e++)if(0<c[e].b){0<c[e].p&&c[e].w(X);var f=c[e],g=f.a,h=["p:",g.top,g.left,g.bottom,g.right];h.push("tos:",f.l.join(","));h.push("mtos:",f.e.join(","));h.push("rs:",f.c);var m=5==f.c||6==f.c;m||(h.push("zoom:",f.zoom.join(",")),h.push("ht:",f.m));0<=f.f&&h.push("tfs:",f.f,"tls:",f.s);f.g&&h.push("fp:",
f.g);7==f.c&&h.push("qid:",f.H);f.j&&h.push("ai:",f.j);m&&(f.o&&h.push("ord:",f.o),f.n&&h.push("amd:",f.n,";"),f.B&&h.push("anid:","1"));d.splice(1,0,"adk"+c[e].b+"="+y(h.join(",")))}d.push("r="+a);if(0<c.length){var l=sb(Bb,c[0].G);if(l&&("&"==l.charAt(0)||"?"==l.charAt(0)))l=l.slice(1);d.push("fp="+y(l))}else d.push("correlator="+$.getCorrelator()),d.push("eid="+$.getOseExpId()),d.push("oid="+mb());Cb&&d.push("ovr=t")}catch(k){d.push("error")}if(Cb){d.splice(0,c.length+1);for(e=0;e<c.length;e++)Oa(c[e],
d,"goog_image_request")}else{a=d.join("&");try{b.google_image_requests||(b.google_image_requests=[]);var p=b.document.createElement("img");p.src=a;b.google_image_requests.push(p)}catch(E){}}}Ua=q}},tb=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g,Bb=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,sb=function(a,b){var c=b.match(a);return c?c.join(""):""},Cb=s,Db=0,ob=function(){var a=F().document;if(!a.body||!a.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance)return s;
$=Goog_AdSense_getAdAdapterInstance();return q},rb=function(a,b){if(a&&!a.v){var c=1E3<=Math.max(a.d[2],a.e[2]);if(c||a.C){var d=c?"1":"0";a.C=s;var e=$.getCorrelator(),f=a.a,g=hb,d=["{vi:",d,",cl:",e,",adk:",a.b,",rs:",a.c,",pl:",f.left,",pr:",f.right,",pt:",f.top,",pb:",f.bottom,",vl:",b.left,",vr:",b.right,",vt:",b.top,",vb:",b.bottom,",dw:",g&&g.width||0,",dh:",g&&g.height||0,"}"].join(""),f=a.element;try{var e=[],h=f.contentWindow||(f.contentDocument||f.contentWindow.document).parentWindow||
(f.contentDocument||f.contentWindow.document).defaultView;if(h)e=[h];else{var m;var l,k=document,k=f||k;m=k.querySelectorAll&&k.querySelector?k.querySelectorAll("IFRAME"):l=k.getElementsByTagName("IFRAME");for(k=0;k<m.length;++k)(h=m[k].contentWindow||(m[k].contentDocument||m[k].contentWindow.document).parentWindow||(m[k].contentDocument||m[k].contentWindow.document).defaultView)&&e.push(h)}var p=e.length;if(0<p)for(var E=da(Ka,d),k=0;k<p;++k)La(E,e[k])}catch(z){}if(c&&(a.v=q,!nb()&&(c=2==$.getOseId(),
h=F(),B(h,"scroll",Pa),B(h,"resize",Qa),c)))for(h=0;h<W.length;++h)c=W[h],c.element&&(m=u(c.D,c,X),B(c.element,"mouseover",m),m=u(c.w,c,X),B(c.element,"mouseout",m))}}},ub=function(a){return(a=a.match(/[&\?](?:adk)=([0-9]+)/))&&2==a.length?parseInt(a[1],10):0},Eb=function(a){if(a.data){var b;a:{a=a.data;var c=window;if("object"==typeof a)b=a;else{if("string"==typeof a)try{var d=c.JSON.parse(a);d[2]=q;b=d;break a}catch(e){}b=r}}if(b&&"goog_provide_override"==b[0])if(d=b[1],0<d&&(1>=d&&d>Db)&&(Db=d),
b=b[4]){a:{if(b){d=W;for(a=0;a<d.length;++a)if(d[a].b==b){b=d[a];break a}}b=r}b&&(b.u=q)}else{b=W;for(d=0;d<b.length;++d)b[d].u=q}}},Fb=function(){if(0<Db){var a;a:{a=[2];var b=Db;if(!(1E-4>Math.random())){var c=Math.random();if(c<b){a=a[Math.floor(c/b*a.length)];break a}}a=r}2==a&&(Cb=q)}},yb=function(){if(2!=mb()){A(w,"message",Eb);for(var a=W,b=0;b<a.length;++b){var c=a[b];if(c.element&&c.element.contentWindow){var d={"0":"goog_get_override"};c.b&&(d[4]=c.b);try{var e=window.JSON.stringify(d),
f=c.element.contentWindow;if(e){var g=da(Ka,e);La(g,f)}}catch(h){}}}w.setTimeout(Fb,500)}},mb=function(){return Cb?2:$?$.getOseId():0};var ab="osd",Gb=F();A(Gb,"unload",function(){zb("u")});var Hb=F();if("complete"==Hb.document.readyState||Hb.google_onload_fired)Ab();else{qb();var Ib=F();A(Ib,"load",function(){window.setTimeout(Ab,100)})};})();
