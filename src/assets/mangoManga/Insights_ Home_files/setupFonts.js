/*eslint-disable*/
!function(){"use strict"
function t(t){f.push(t),1==f.length&&d()}function e(){for(;f.length;)f[0](),f.shift()}function n(t){this.a=u,this.b=void 0,this.f=[]
var e=this
try{t(function(t){a(e,t)},function(t){r(e,t)})}catch(t){r(e,t)}}function o(t){return new n(function(e,n){n(t)})}function i(t){return new n(function(e){e(t)})}function a(t,e){if(t.a==u){if(e==t)throw new TypeError
var n=!1
try{var o=e&&e.then
if(null!=e&&"object"==typeof e&&"function"==typeof o)return void o.call(e,function(e){n||a(t,e),n=!0},function(e){n||r(t,e),n=!0})}catch(e){return void(n||r(t,e))}t.a=0,t.b=e,s(t)}}function r(t,e){if(t.a==u){if(e==t)throw new TypeError
t.a=1,t.b=e,s(t)}}function s(e){t(function(){if(e.a!=u)for(;e.f.length;){var t=e.f.shift(),n=t[0],o=t[1],i=t[2],t=t[3]
try{0==e.a?i("function"==typeof n?n.call(void 0,e.b):e.b):1==e.a&&("function"==typeof o?i(o.call(void 0,e.b)):t(e.b))}catch(e){t(e)}}})}function c(t){return new n(function(e,n){var o=0,a=[]
0==t.length&&e(a)
for(var r=0;r<t.length;r+=1)i(t[r]).c(function(n){return function(i){a[n]=i,(o+=1)==t.length&&e(a)}}(r),n)})}function l(t){return new n(function(e,n){for(var o=0;o<t.length;o+=1)i(t[o]).c(e,n)})}var d,f=[]
d=function(){setTimeout(e)}
var u=2
n.prototype.g=function(t){return this.c(void 0,t)},n.prototype.c=function(t,e){var o=this
return new n(function(n,i){o.f.push([t,e,n,i]),s(o)})},window.Promise||(window.Promise=n,window.Promise.resolve=i,window.Promise.reject=o,window.Promise.race=l,window.Promise.all=c,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype.catch=n.prototype.g)}(),function(){function t(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function e(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t()}):document.attachEvent("onreadystatechange",function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())})}function n(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function o(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function i(t){var e=t.a.offsetWidth,n=e+100
return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function a(e,n){function o(){var t=a
i(t)&&t.a.parentNode&&n(t.g)}var a=e
t(e.b,o),t(e.c,o),i(e)}function r(t,e){var n=e||{}
this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function s(){if(null===u)if(c()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent)
u=!!t&&603>parseInt(t[1],10)}else u=!1
return u}function c(){return null===p&&(p=!!document.fonts),p}function l(){if(null===h){var t=document.createElement("div")
try{t.style.font="condensed 100px sans-serif"}catch(t){}h=""!==t.style.font}return h}function d(t,e){return[t.style,t.weight,l()?t.stretch:"","100px",e].join(" ")}var f=null,u=null,h=null,p=null
r.prototype.load=function(t,i){var r=this,l=t||"BESbswy",u=0,h=i||3e3,p=(new Date).getTime()
return new Promise(function(t,i){if(c()&&!s()){var m=new Promise(function(t,e){function n(){(new Date).getTime()-p>=h?e():document.fonts.load(d(r,'"'+r.family+'"'),l).then(function(e){1<=e.length?t():setTimeout(n,25)},function(){e()})}n()}),w=new Promise(function(t,e){u=setTimeout(e,h)})
Promise.race([w,m]).then(function(){clearTimeout(u),t(r)},function(){i(r)})}else e(function(){function e(){var e;(e=-1!=v&&-1!=y||-1!=v&&-1!=g||-1!=y&&-1!=g)&&((e=v!=y&&v!=g&&y!=g)||(null===f&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),f=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=f&&(v==b&&y==b&&g==b||v==x&&y==x&&g==x||v==E&&y==E&&g==E)),e=!e),e&&(T.parentNode&&T.parentNode.removeChild(T),clearTimeout(u),t(r))}function s(){if((new Date).getTime()-p>=h)T.parentNode&&T.parentNode.removeChild(T),i(r)
else{var t=document.hidden
!0!==t&&void 0!==t||(v=c.a.offsetWidth,y=m.a.offsetWidth,g=w.a.offsetWidth,e()),u=setTimeout(s,50)}}var c=new n(l),m=new n(l),w=new n(l),v=-1,y=-1,g=-1,b=-1,x=-1,E=-1,T=document.createElement("div")
T.dir="ltr",o(c,d(r,"sans-serif")),o(m,d(r,"serif")),o(w,d(r,"monospace")),T.appendChild(c.a),T.appendChild(m.a),T.appendChild(w.a),document.body.appendChild(T),b=c.a.offsetWidth,x=m.a.offsetWidth,E=w.a.offsetWidth,s(),a(c,function(t){v=t,e()}),o(c,d(r,'"'+r.family+'",sans-serif')),a(m,function(t){y=t,e()}),o(m,d(r,'"'+r.family+'",serif')),a(w,function(t){g=t,e()}),o(w,d(r,'"'+r.family+'",monospace'))})})},"object"==typeof module?module.exports=r:(window.FontFaceObserver=r,window.FontFaceObserver.prototype.load=r.prototype.load)}(),function(){function t(){document.documentElement.className+=" "+e}var e="wf-opensans-n4-active",n="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
localStorage.getItem("nr-ui-font-opensans-loaded")&&t()
var o=document.createElement("link")
o.rel="preload",o.media="all",o.href=n,o.as="style",o.crossorigin="anonymous"
var i=document.createElement("link")
i.rel="stylesheet",i.media="all",i.href=n,i.type="text/css",document.head.appendChild(o),document.head.appendChild(i),new FontFaceObserver("Open Sans").load().then(function(){t(),localStorage.setItem("nr-ui-font-opensans-loaded",!0)}).catch(function(t){console.error("Error loading fonts",t)})}()
