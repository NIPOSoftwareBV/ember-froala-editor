window.EmberENV={FEATURES:{},EXTEND_PROTOTYPES:{Date:!1}}
var loader,define,requireModule,require,requirejs,runningTests=!1
function createDeprecatedModule(e){define(e,["exports","ember-resolver/resolver","ember"],function(t,n,r){r.default.deprecate("Usage of `"+e+"` module is deprecated, please update to `ember-resolver`.",!1,{id:"ember-resolver.legacy-shims",until:"3.0.0"}),t.default=n.default})}(function(e){"use strict"
function t(){var e=Object.create(null)
return e.__=void 0,delete e.__,e}var n={loader:loader,define:define,requireModule:requireModule,require:require,requirejs:requirejs}
requirejs=require=requireModule=function(e){for(var t=[],n=u(e,"(require)",t),r=t.length-1;r>=0;r--)t[r].exports()
return n.module.exports},loader={noConflict:function(t){var r,i
for(r in t)t.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i=t[r],e[i]=e[r],e[r]=n[r])},makeDefaultExport:!0}
var r=t(),i=(t(),0)
var o=["require","exports","module"]
function s(e,t,n,r){this.uuid=i++,this.id=e,this.deps=!t.length&&n.length?o:t,this.module={exports:{}},this.callback=n,this.hasExportsAsDep=!1,this.isAlias=r,this.reified=new Array(t.length),this.state="new"}function a(){}function l(e){this.id=e}function u(e,t,n){for(var i=r[e]||r[e+"/index"];i&&i.isAlias;)i=r[i.id]||r[i.id+"/index"]
return i||function(e,t){throw new Error("Could not find module `"+e+"` imported from `"+t+"`")}(e,t),n&&"pending"!==i.state&&"finalized"!==i.state&&(i.findDeps(n),n.push(i)),i}function c(e,t){if("."!==e.charAt(0))return e
for(var n=e.split("/"),r=t.split("/").slice(0,-1),i=0,o=n.length;i<o;i++){var s=n[i]
if(".."===s){if(0===r.length)throw new Error("Cannot access parent module of root")
r.pop()}else{if("."===s)continue
r.push(s)}}return r.join("/")}function p(e){return!(!r[e]&&!r[e+"/index"])}s.prototype.makeDefaultExport=function(){var e=this.module.exports
null===e||"object"!=typeof e&&"function"!=typeof e||void 0!==e.default||!Object.isExtensible(e)||(e.default=e)},s.prototype.exports=function(){if("finalized"===this.state||"reifying"===this.state)return this.module.exports
loader.wrapModules&&(this.callback=loader.wrapModules(this.id,this.callback)),this.reify()
var e=this.callback.apply(this,this.reified)
return this.reified.length=0,this.state="finalized",this.hasExportsAsDep&&void 0===e||(this.module.exports=e),loader.makeDefaultExport&&this.makeDefaultExport(),this.module.exports},s.prototype.unsee=function(){this.state="new",this.module={exports:{}}},s.prototype.reify=function(){if("reified"!==this.state){this.state="reifying"
try{this.reified=this._reify(),this.state="reified"}finally{"reifying"===this.state&&(this.state="errored")}}},s.prototype._reify=function(){for(var e=this.reified.slice(),t=0;t<e.length;t++){var n=e[t]
e[t]=n.exports?n.exports:n.module.exports()}return e},s.prototype.findDeps=function(e){if("new"===this.state){this.state="pending"
for(var t=this.deps,n=0;n<t.length;n++){var r=t[n],i=this.reified[n]={exports:void 0,module:void 0}
"exports"===r?(this.hasExportsAsDep=!0,i.exports=this.module.exports):"require"===r?i.exports=this.makeRequire():"module"===r?i.exports=this.module:i.module=u(c(r,this.id),this.id,e)}}},s.prototype.makeRequire=function(){var e=this.id,t=function(t){return require(c(t,e))}
return t.default=t,t.moduleId=e,t.has=function(t){return p(c(t,e))},t},(define=function(e,t,n){var i=r[e]
i&&"new"!==i.state||(arguments.length<2&&function(e){throw new Error("an unsupported module was defined, expected `define(id, deps, module)` instead got: `"+e+"` arguments to define`")}(arguments.length),Array.isArray(t)||(n=t,t=[]),r[e]=n instanceof l?new s(n.id,t,n,!0):new s(e,t,n,!1))}).exports=function(e,t){var n=r[e]
if(!n||"new"===n.state)return(n=new s(e,[],a,null)).module.exports=t,n.state="finalized",r[e]=n,n},define.alias=function(e,t){return 2===arguments.length?define(t,new l(e)):new l(e)},requirejs.entries=requirejs._eak_seen=r,requirejs.has=p,requirejs.unsee=function(e){u(e,"(unsee)",!1).unsee()},requirejs.clear=function(){requirejs.entries=requirejs._eak_seen=r=t(),t()},define("foo",function(){}),define("foo/bar",[],function(){}),define("foo/asdf",["module","exports","require"],function(e,t,n){n.has("foo/bar")&&n("foo/bar")}),define("foo/baz",[],define.alias("foo")),define("foo/quz",define.alias("foo")),define.alias("foo","foo/qux"),define("foo/bar",["foo","./quz","./baz","./asdf","./bar","../foo"],function(){}),define("foo/main",["foo/bar"],function(){}),define.exports("foo/exports",{}),require("foo/exports"),require("foo/main"),require.unsee("foo/bar"),requirejs.clear(),"object"==typeof exports&&"object"==typeof module&&module.exports&&(module.exports={require:require,define:define})})(this),function(e){"use strict"
var t,n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag",s="object"==typeof module,a=e.regeneratorRuntime
if(a)s&&(module.exports=a)
else{(a=e.regeneratorRuntime=s?module.exports:{}).wrap=h
var l="suspendedStart",u="suspendedYield",c="executing",p="completed",d={},f=b.prototype=g.prototype
v.prototype=f.constructor=b,b.constructor=v,b[o]=v.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(f),e},a.awrap=function(e){return new E(e)},y(T.prototype),a.async=function(e,t,n,r){var i=new T(h(e,t,n,r))
return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(f),f[i]=function(){return this},f[o]="Generator",f.toString=function(){return"[object Generator]"},a.keys=function(e){var t=[]
for(var n in e)t.push(n)
return t.reverse(),function n(){for(;t.length;){var r=t.pop()
if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},a.values=S,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function r(n,r){return s.type="throw",s.arg=e,t.next=n,!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion
if("root"===o.tryLoc)return r("end")
if(o.tryLoc<=this.prev){var a=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc")
if(a&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)
if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r]
if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i
break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null)
var s=o?o.completion:{}
return s.type=e,s.arg=t,o?this.next=o.finallyLoc:this.complete(s),d},complete:function(e,t){if("throw"===e.type)throw e.arg
"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var i=r.arg
A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},d}}}function h(e,n,r,i){var o=n&&n.prototype instanceof g?n:g,s=Object.create(o.prototype),a=new C(i||[])
return s._invoke=function(e,n,r){var i=l
return function(o,s){if(i===c)throw new Error("Generator is already running")
if(i===p){if("throw"===o)throw s
return w()}for(;;){var a=r.delegate
if(a){if("return"===o||"throw"===o&&a.iterator[o]===t){r.delegate=null
var f=a.iterator.return
if(f){var h=m(f,a.iterator,s)
if("throw"===h.type){o="throw",s=h.arg
continue}}if("return"===o)continue}var h=m(a.iterator[o],a.iterator,s)
if("throw"===h.type){r.delegate=null,o="throw",s=h.arg
continue}o="next",s=t
var g=h.arg
if(!g.done)return i=u,g
r[a.resultName]=g.value,r.next=a.nextLoc,r.delegate=null}if("next"===o)r.sent=r._sent=s
else if("throw"===o){if(i===l)throw i=p,s
r.dispatchException(s)&&(o="next",s=t)}else"return"===o&&r.abrupt("return",s)
i=c
var h=m(e,n,r)
if("normal"===h.type){i=r.done?p:u
var g={value:h.arg,done:r.done}
if(h.arg!==d)return g
r.delegate&&"next"===o&&(s=t)}else"throw"===h.type&&(i=p,o="throw",s=h.arg)}}}(e,r,a),s}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function g(){}function v(){}function b(){}function y(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(e){this.arg=e}function T(e){function t(n,r,i,o){var s=m(e[n],e,r)
if("throw"!==s.type){var a=s.arg,l=a.value
return l instanceof E?Promise.resolve(l.arg).then(function(e){t("next",e,i,o)},function(e){t("throw",e,i,o)}):Promise.resolve(l).then(function(e){a.value=e,i(a)},o)}o(s.arg)}var n
"object"==typeof process&&process.domain&&(t=process.domain.bind(t)),this._invoke=function(e,r){function i(){return new Promise(function(n,i){t(e,r,n,i)})}return n=n?n.then(i,i):i()}}function _(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function S(e){if(e){var r=e[i]
if(r)return r.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var o=-1,s=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r
return r.value=t,r.done=!0,r}
return s.next=s}}return{next:w}}function w(){return{value:t,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),self.EmberENV.EXTEND_PROTOTYPES=!1,function(e,t){"use strict"
"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict"
var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,s=n.concat,a=n.push,l=n.indexOf,u={},c=u.toString,p=u.hasOwnProperty,d=p.toString,f=d.call(Object),h={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},g=function(e){return null!=e&&e===e.window},v={type:!0,src:!0,noModule:!0}
function b(e,t,n){var i,o=(t=t||r).createElement("script")
if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i])
t.head.appendChild(o).parentNode.removeChild(o)}function y(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[c.call(e)]||"object":typeof e}var E=function(e,t){return new E.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
function _(e){var t=!!e&&"length"in e&&e.length,n=y(e)
return!m(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}E.fn=E.prototype={jquery:"3.3.1",constructor:E,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(e){return this.pushStack(E.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,l=arguments.length,u=!1
for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||m(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],s!==(r=e[t])&&(u&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&E.isPlainObject(n)?n:{},s[t]=E.extend(u,o,r)):void 0!==r&&(s[t]=r))
return s},E.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=p.call(t,"constructor")&&t.constructor)&&d.call(n)===f)},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e){b(e)},each:function(e,t){var n,r=0
if(_(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[]
return null!=e&&(_(Object(e))?E.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:l.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i])
return r},map:function(e,t,n){var r,i,o=0,a=[]
if(_(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i)
else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i)
return s.apply([],a)},guid:1,support:h}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=n[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()})
var A=function(e){var t,n,r,i,o,s,a,l,u,c,p,d,f,h,m,g,v,b,y,E="sizzle"+1*new Date,T=e.document,_=0,A=0,C=se(),S=se(),w=se(),R=function(e,t){return e===t&&(p=!0),0},x={}.hasOwnProperty,O=[],N=O.pop,L=O.push,k=O.push,I=O.slice,D=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",j="\\["+M+"*("+F+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+F+"))|)"+M+"*\\]",B=":("+F+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+j+")*)|.*)\\)|)",H=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),U=new RegExp("^"+M+"*,"+M+"*"),W=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),K=new RegExp(B),q=new RegExp("^"+F+"$"),V={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),TAG:new RegExp("^("+F+"|[*])"),ATTR:new RegExp("^"+j),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){d()},ie=be(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"})
try{k.apply(O=I.call(T.childNodes),T.childNodes),O[T.childNodes.length].nodeType}catch(e){k={apply:O.length?function(e,t){L.apply(e,I.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,r,i){var o,a,u,c,p,h,v,b=t&&t.ownerDocument,_=t?t.nodeType:9
if(r=r||[],"string"!=typeof e||!e||1!==_&&9!==_&&11!==_)return r
if(!i&&((t?t.ownerDocument||t:T)!==f&&d(t),t=t||f,m)){if(11!==_&&(p=X.exec(e)))if(o=p[1]){if(9===_){if(!(u=t.getElementById(o)))return r
if(u.id===o)return r.push(u),r}else if(b&&(u=b.getElementById(o))&&y(t,u)&&u.id===o)return r.push(u),r}else{if(p[2])return k.apply(r,t.getElementsByTagName(e)),r
if((o=p[3])&&n.getElementsByClassName&&t.getElementsByClassName)return k.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!w[e+" "]&&(!g||!g.test(e))){if(1!==_)b=t,v=e
else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=E),a=(h=s(e)).length;a--;)h[a]="#"+c+" "+ve(h[a])
v=h.join(","),b=J.test(e)&&me(t.parentNode)||t}if(v)try{return k.apply(r,b.querySelectorAll(v)),r}catch(e){}finally{c===E&&t.removeAttribute("id")}}}return l(e.replace($,"$1"),t,r,i)}function se(){var e=[]
return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ae(e){return e[E]=!0,e}function le(e){var t=f.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function fe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return ae(function(t){return t=+t,ae(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function me(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},d=oe.setDocument=function(e){var t,i,s=e?e.ownerDocument||e:T
return s!==f&&9===s.nodeType&&s.documentElement?(h=(f=s).documentElement,m=!o(f),T!==f&&(i=f.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=le(function(e){return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(f.getElementsByClassName),n.getById=le(function(e){return h.appendChild(e).id=E,!f.getElementsByName||!f.getElementsByName(E).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee)
return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e)
return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n,r,i,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&m)return t.getElementsByClassName(e)},v=[],g=[],(n.qsa=Q.test(f.querySelectorAll))&&(le(function(e){h.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+E+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||g.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
var t=f.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=Q.test(b=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&le(function(e){n.disconnectedMatch=b.call(e,"*"),b.call(e,"[s!='']:x"),v.push("!=",B)}),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),y=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},R=t?function(e,t){if(e===t)return p=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===f||e.ownerDocument===T&&y(T,e)?-1:t===f||t.ownerDocument===T&&y(T,t)?1:c?D(c,e)-D(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return p=!0,0
var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],a=[t]
if(!i||!o)return e===f?-1:t===f?1:i?-1:o?1:c?D(c,e)-D(c,t):0
if(i===o)return ce(e,t)
for(n=e;n=n.parentNode;)s.unshift(n)
for(n=t;n=n.parentNode;)a.unshift(n)
for(;s[r]===a[r];)r++
return r?ce(s[r],a[r]):s[r]===T?-1:a[r]===T?1:0},f):f},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&d(e),t=t.replace(z,"='$1']"),n.matchesSelector&&m&&!w[t+" "]&&(!v||!v.test(t))&&(!g||!g.test(t)))try{var r=b.call(e,t)
if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,f,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==f&&d(e),y(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==f&&d(e)
var i=r.attrHandle[t.toLowerCase()],o=i&&x.call(r.attrHandle,t.toLowerCase())?i(e,t,!m):void 0
return void 0!==o?o:n.attributes||!m?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0
if(p=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(R),p){for(;t=e[o++];)t===e[o]&&(i=r.push(o))
for(;i--;)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t)
return n},(r=oe.selectors={cacheLength:50,createPseudo:ae,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&K.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "]
return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e)
return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(H," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,d,f,h,m=o!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),b=!l&&!a,y=!1
if(g){if(o){for(;m;){for(d=t;d=d[m];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&b){for(y=(f=(u=(c=(p=(d=g)[E]||(d[E]={}))[d.uniqueID]||(p[d.uniqueID]={}))[e]||[])[0]===_&&u[1])&&u[2],d=f&&g.childNodes[f];d=++f&&d&&d[m]||(y=f=0)||h.pop();)if(1===d.nodeType&&++y&&d===t){c[e]=[_,f,y]
break}}else if(b&&(y=f=(u=(c=(p=(d=t)[E]||(d[E]={}))[d.uniqueID]||(p[d.uniqueID]={}))[e]||[])[0]===_&&u[1]),!1===y)for(;(d=++f&&d&&d[m]||(y=f=0)||h.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++y||(b&&((c=(p=d[E]||(d[E]={}))[d.uniqueID]||(p[d.uniqueID]={}))[e]=[_,y]),d!==t)););return(y-=i)===r||y%r==0&&y/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e)
return i[E]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var r,o=i(e,t),s=o.length;s--;)e[r=D(e,o[s])]=!(n[r]=o[s])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ae(function(e){var t=[],n=[],r=a(e.replace($,"$1"))
return r[E]?ae(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return oe(e,t).length>0}}),contains:ae(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return q.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n
do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:fe(!1),disabled:fe(!0),checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r)
return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pe(t)
for(t in{submit:!0,reset:!0})r.pseudos[t]=de(t)
function ge(){}function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function be(e,t,n){var r=t.dir,i=t.next,o=i||r,s=n&&"parentNode"===o,a=A++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,i)
return!1}:function(t,n,l){var u,c,p,d=[_,a]
if(l){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(c=(p=t[E]||(t[E]={}))[t.uniqueID]||(p[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t
else{if((u=c[o])&&u[0]===_&&u[1]===a)return d[2]=u[2]
if(c[o]=d,d[2]=e(t,n,l))return!0}return!1}}function ye(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function Ee(e,t,n,r,i){for(var o,s=[],a=0,l=e.length,u=null!=t;a<l;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),u&&t.push(a)))
return s}function Te(e,t,n,r,i,o){return r&&!r[E]&&(r=Te(r)),i&&!i[E]&&(i=Te(i,o)),ae(function(o,s,a,l){var u,c,p,d=[],f=[],h=s.length,m=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n)
return n}(t||"*",a.nodeType?[a]:a,[]),g=!e||!o&&t?m:Ee(m,d,e,a,l),v=n?i||(o?e:h||r)?[]:s:g
if(n&&n(g,v,a,l),r)for(u=Ee(v,f),r(u,[],a,l),c=u.length;c--;)(p=u[c])&&(v[f[c]]=!(g[f[c]]=p))
if(o){if(i||e){if(i){for(u=[],c=v.length;c--;)(p=v[c])&&u.push(g[c]=p)
i(null,v=[],u,l)}for(c=v.length;c--;)(p=v[c])&&(u=i?D(o,p):d[c])>-1&&(o[u]=!(s[u]=p))}}else v=Ee(v===s?v.splice(h,v.length):v),i?i(null,s,v,l):k.apply(s,v)})}function _e(e){for(var t,n,i,o=e.length,s=r.relative[e[0].type],a=s||r.relative[" "],l=s?1:0,c=be(function(e){return e===t},a,!0),p=be(function(e){return D(t,e)>-1},a,!0),d=[function(e,n,r){var i=!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))
return t=null,i}];l<o;l++)if(n=r.relative[e[l].type])d=[be(ye(d),n)]
else{if((n=r.filter[e[l].type].apply(null,e[l].matches))[E]){for(i=++l;i<o&&!r.relative[e[i].type];i++);return Te(l>1&&ye(d),l>1&&ve(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace($,"$1"),n,l<i&&_e(e.slice(l,i)),i<o&&_e(e=e.slice(i)),i<o&&ve(e))}d.push(n)}return ye(d)}return ge.prototype=r.filters=r.pseudos,r.setFilters=new ge,s=oe.tokenize=function(e,t){var n,i,o,s,a,l,u,c=S[e+" "]
if(c)return t?0:c.slice(0)
for(a=e,l=[],u=r.preFilter;a;){for(s in n&&!(i=U.exec(a))||(i&&(a=a.slice(i[0].length)||a),l.push(o=[])),n=!1,(i=W.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace($," ")}),a=a.slice(n.length)),r.filter)!(i=V[s].exec(a))||u[s]&&!(i=u[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length))
if(!n)break}return t?a.length:a?oe.error(e):S(e,l).slice(0)},a=oe.compile=function(e,t){var n,i=[],o=[],a=w[e+" "]
if(!a){for(t||(t=s(e)),n=t.length;n--;)(a=_e(t[n]))[E]?i.push(a):o.push(a);(a=w(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,s,a,l,c){var p,h,g,v=0,b="0",y=o&&[],E=[],T=u,A=o||i&&r.find.TAG("*",c),C=_+=null==T?1:Math.random()||.1,S=A.length
for(c&&(u=s===f||s||c);b!==S&&null!=(p=A[b]);b++){if(i&&p){for(h=0,s||p.ownerDocument===f||(d(p),a=!m);g=e[h++];)if(g(p,s||f,a)){l.push(p)
break}c&&(_=C)}n&&((p=!g&&p)&&v--,o&&y.push(p))}if(v+=b,n&&b!==v){for(h=0;g=t[h++];)g(y,E,s,a)
if(o){if(v>0)for(;b--;)y[b]||E[b]||(E[b]=N.call(l))
E=Ee(E)}k.apply(l,E),c&&!o&&E.length>0&&v+t.length>1&&oe.uniqueSort(l)}return c&&(_=C,u=T),y}
return n?ae(o):o}(o,i))).selector=e}return a},l=oe.select=function(e,t,n,i){var o,l,u,c,p,d="function"==typeof e&&e,f=!i&&s(e=d.selector||e)
if(n=n||[],1===f.length){if((l=f[0]=f[0].slice(0)).length>2&&"ID"===(u=l[0]).type&&9===t.nodeType&&m&&r.relative[l[1].type]){if(!(t=(r.find.ID(u.matches[0].replace(Z,ee),t)||[])[0]))return n
d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(o=V.needsContext.test(e)?0:l.length;o--&&(u=l[o],!r.relative[c=u.type]);)if((p=r.find[c])&&(i=p(u.matches[0].replace(Z,ee),J.test(l[0].type)&&me(t.parentNode)||t))){if(l.splice(o,1),!(e=i.length&&ve(l)))return k.apply(n,i),n
break}}return(d||a(e,f))(i,t,!m,n,!t||J.test(e)&&me(t.parentNode)||t),n},n.sortStable=E.split("").sort(R).join("")===E,n.detectDuplicates=!!p,d(),n.sortDetached=le(function(e){return 1&e.compareDocumentPosition(f.createElement("fieldset"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ue(P,function(e,t,n){var r
if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e)
E.find=A,E.expr=A.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=A.uniqueSort,E.text=A.getText,E.isXMLDoc=A.isXML,E.contains=A.contains,E.escapeSelector=A.escape
var C=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break
r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},w=E.expr.match.needsContext
function R(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var x=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function O(e,t,n){return m(t)?E.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?E.grep(e,function(e){return e===t!==n}):"string"!=typeof t?E.grep(e,function(e){return l.call(t,e)>-1!==n}):E.filter(t,e,n)}E.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this
if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}))
for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n)
return r>1?E.uniqueSort(n):n},filter:function(e){return this.pushStack(O(this,e||[],!1))},not:function(e){return this.pushStack(O(this,e||[],!0))},is:function(e){return!!O(this,"string"==typeof e&&w.test(e)?E(e):e||[],!1).length}})
var N,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var i,o
if(!e)return this
if(n=n||N,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(i[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),x.test(i[1])&&E.isPlainObject(t))for(i in t)m(this[i])?this[i](t[i]):this.attr(i,t[i])
return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,N=E(r)
var k=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0}
function D(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length
return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],s="string"!=typeof e&&E(e)
if(!w.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?l.call(E(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return C(e,"parentNode")},parentsUntil:function(e,t,n){return C(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return C(e,"nextSibling")},prevAll:function(e){return C(e,"previousSibling")},nextUntil:function(e,t,n){return C(e,"nextSibling",n)},prevUntil:function(e,t,n){return C(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return R(e,"iframe")?e.contentDocument:(R(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(e,t){E.fn[e]=function(n,r){var i=E.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=E.filter(r,i)),this.length>1&&(I[e]||E.uniqueSort(i),k.test(e)&&i.reverse()),this.pushStack(i)}})
var P=/[^\x20\t\r\n\f]+/g
function M(e){return e}function F(e){throw e}function j(e,t,n,r){var i
try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return E.each(e.match(P)||[],function(e,n){t[n]=!0}),t}(e):E.extend({},e)
var t,n,r,i,o=[],s=[],a=-1,l=function(){for(i=i||e.once,r=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1)
e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},u={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){E.each(n,function(n,r){m(r)?e.unique&&u.has(r)||o.push(r):r&&r.length&&"string"!==y(r)&&t(r)})}(arguments),n&&!t&&l()),this},remove:function(){return E.each(arguments,function(e,t){for(var n;(n=E.inArray(t,o,n))>-1;)o.splice(n,1),n<=a&&a--}),this},has:function(e){return e?E.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!r}}
return u},E.extend({Deferred:function(t){var n=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
return E.Deferred(function(t){E.each(n,function(n,r){var i=m(e[r[4]])&&e[r[4]]
o[r[1]](function(){var e=i&&i.apply(this,arguments)
e&&m(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0
function s(t,n,r,i){return function(){var a=this,l=arguments,u=function(){var e,u
if(!(t<o)){if((e=r.apply(a,l))===n.promise())throw new TypeError("Thenable self-resolution")
u=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(u)?i?u.call(e,s(o,n,M,i),s(o,n,F,i)):(o++,u.call(e,s(o,n,M,i),s(o,n,F,i),s(o,n,M,n.notifyWith))):(r!==M&&(a=void 0,l=[e]),(i||n.resolveWith)(a,l))}},c=i?u:function(){try{u()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==F&&(a=void 0,l=[e]),n.rejectWith(a,l))}}
t?c():(E.Deferred.getStackHook&&(c.stackTrace=E.Deferred.getStackHook()),e.setTimeout(c))}}return E.Deferred(function(e){n[0][3].add(s(0,e,m(i)?i:M,e.notifyWith)),n[1][3].add(s(0,e,m(t)?t:M)),n[2][3].add(s(0,e,m(r)?r:F))}).promise()},promise:function(e){return null!=e?E.extend(e,i):i}},o={}
return E.each(n,function(e,t){var s=t[2],a=t[5]
i[t[1]]=s.add,a&&s.add(function(){r=a},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),s.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),s=E.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||s.resolveWith(r,i)}}
if(t<=1&&(j(e,s.done(a(n)).resolve,s.reject,!t),"pending"===s.state()||m(i[n]&&i[n].then)))return s.then()
for(;n--;)j(i[n],a(n),s.reject)
return s.promise()}})
var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
E.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},E.readyException=function(t){e.setTimeout(function(){throw t})}
var H=E.Deferred()
function $(){r.removeEventListener("DOMContentLoaded",$),e.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return H.then(e).catch(function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0,!0!==e&&--E.readyWait>0||H.resolveWith(r,[E]))}}),E.ready.then=H.then,"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(E.ready):(r.addEventListener("DOMContentLoaded",$),e.addEventListener("load",$))
var U=function(e,t,n,r,i,o,s){var a=0,l=e.length,u=null==n
if("object"===y(n))for(a in i=!0,n)U(e,t,a,n[a],!0,o,s)
else if(void 0!==r&&(i=!0,m(r)||(s=!0),u&&(s?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(E(e),n)})),t))for(;a<l;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)))
return i?e:u?t.call(e):l?t(e[0],n):o},W=/^-ms-/,z=/-([a-z])/g
function K(e,t){return t.toUpperCase()}function q(e){return e.replace(W,"ms-").replace(z,K)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[q(t)]=n
else for(r in t)i[q(r)]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][q(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(q):(t=q(t))in r?[t]:t.match(P)||[]).length
for(;n--;)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!E.isEmptyObject(t)}}
var Y=new G,Q=new G,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g
function Z(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(J,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:X.test(e)?JSON.parse(e):e)}(n)}catch(e){}Q.set(e,t,n)}else n=void 0
return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes
if(void 0===e){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=q(r.slice(5)),Z(o,r,i[r]))
Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Q.set(this,e)}):U(this,function(t){var n
if(o&&void 0===t)return void 0!==(n=Q.get(o,e))?n:void 0!==(n=Z(o,e))?n:void 0
this.each(function(){Q.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t)
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?E.queue(this[0],e):void 0===t?this:this.each(function(){var n=E.queue(this,e,t)
E._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&E.dequeue(this,e)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=Y.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a))
return a(),i.promise(t)}})
var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&E.contains(e.ownerDocument,e)&&"none"===E.css(e,"display")},ie=function(e,t,n,r){var i,o,s={}
for(o in t)s[o]=e.style[o],e.style[o]=t[o]
for(o in i=n.apply(e,r||[]),t)e.style[o]=s[o]
return i}
function oe(e,t,n,r){var i,o,s=20,a=r?function(){return r.cur()}:function(){return E.css(e,t,"")},l=a(),u=n&&n[3]||(E.cssNumber[t]?"":"px"),c=(E.cssNumber[t]||"px"!==u&&+l)&&te.exec(E.css(e,t))
if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;s--;)E.style(e,t,c+u),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),c/=o
c*=2,E.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=i)),i}var se={}
function ae(e){var t,n=e.ownerDocument,r=e.nodeName,i=se[r]
return i||(t=n.body.appendChild(n.createElement(r)),i=E.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),se[r]=i,i)}function le(e,t){for(var n,r,i=[],o=0,s=e.length;o<s;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=Y.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&re(r)&&(i[o]=ae(r))):"none"!==n&&(i[o]="none",Y.set(r,"display",n)))
for(o=0;o<s;o++)null!=i[o]&&(e[o].style.display=i[o])
return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){re(this)?E(this).show():E(this).hide()})}})
var ue=/^(?:checkbox|radio)$/i,ce=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,pe=/^$|^module$|\/(?:java|ecma)script/i,de={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function fe(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&R(e,t)?E.merge([e],n):n}function he(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}de.optgroup=de.option,de.tbody=de.tfoot=de.colgroup=de.caption=de.thead,de.th=de.td
var me,ge,ve=/<|&#?\w+;/
function be(e,t,n,r,i){for(var o,s,a,l,u,c,p=t.createDocumentFragment(),d=[],f=0,h=e.length;f<h;f++)if((o=e[f])||0===o)if("object"===y(o))E.merge(d,o.nodeType?[o]:o)
else if(ve.test(o)){for(s=s||p.appendChild(t.createElement("div")),a=(ce.exec(o)||["",""])[1].toLowerCase(),l=de[a]||de._default,s.innerHTML=l[1]+E.htmlPrefilter(o)+l[2],c=l[0];c--;)s=s.lastChild
E.merge(d,s.childNodes),(s=p.firstChild).textContent=""}else d.push(t.createTextNode(o))
for(p.textContent="",f=0;o=d[f++];)if(r&&E.inArray(o,r)>-1)i&&i.push(o)
else if(u=E.contains(o.ownerDocument,o),s=fe(p.appendChild(o),"script"),u&&he(s),n)for(c=0;o=s[c++];)pe.test(o.type||"")&&n.push(o)
return p}me=r.createDocumentFragment().appendChild(r.createElement("div")),(ge=r.createElement("input")).setAttribute("type","radio"),ge.setAttribute("checked","checked"),ge.setAttribute("name","t"),me.appendChild(ge),h.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue
var ye=r.documentElement,Ee=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,_e=/^([^.]*)(?:\.(.+)|)/
function Ae(){return!0}function Ce(){return!1}function Se(){try{return r.activeElement}catch(e){}}function we(e,t,n,r,i,o){var s,a
if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)we(e,a,n,r,t[a],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ce
else if(!i)return e
return 1===o&&(s=i,(i=function(e){return E().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}E.event={global:{},add:function(e,t,n,r,i){var o,s,a,l,u,c,p,d,f,h,m,g=Y.get(e)
if(g)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(ye,i),n.guid||(n.guid=E.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return void 0!==E&&E.event.triggered!==t.type?E.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(P)||[""]).length;u--;)f=m=(a=_e.exec(t[u])||[])[1],h=(a[2]||"").split(".").sort(),f&&(p=E.event.special[f]||{},f=(i?p.delegateType:p.bindType)||f,p=E.event.special[f]||{},c=E.extend({type:f,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=l[f])||((d=l[f]=[]).delegateCount=0,p.setup&&!1!==p.setup.call(e,r,h,s)||e.addEventListener&&e.addEventListener(f,s)),p.add&&(p.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),E.event.global[f]=!0)},remove:function(e,t,n,r,i){var o,s,a,l,u,c,p,d,f,h,m,g=Y.hasData(e)&&Y.get(e)
if(g&&(l=g.events)){for(u=(t=(t||"").match(P)||[""]).length;u--;)if(f=m=(a=_e.exec(t[u])||[])[1],h=(a[2]||"").split(".").sort(),f){for(p=E.event.special[f]||{},d=l[f=(r?p.delegateType:p.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)c=d[o],!i&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,p.remove&&p.remove.call(e,c))
s&&!d.length&&(p.teardown&&!1!==p.teardown.call(e,h,g.handle)||E.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)E.event.remove(e,f+t[u],n,r,!0)
E.isEmptyObject(l)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,s,a=E.event.fix(e),l=new Array(arguments.length),u=(Y.get(this,"events")||{})[a.type]||[],c=E.event.special[a.type]||{}
for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t]
if(a.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,a)){for(s=E.event.handlers.call(this,a,u),t=0;(i=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(o.namespace)||(a.handleObj=o,a.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,l))&&!1===(a.result=r)&&(a.preventDefault(),a.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,r,i,o,s,a=[],l=t.delegateCount,u=e.target
if(l&&u.nodeType&&!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],s={},n=0;n<l;n++)void 0===s[i=(r=t[n]).selector+" "]&&(s[i]=r.needsContext?E(i,this).index(u)>-1:E.find(i,this,null,[u]).length),s[i]&&o.push(r)
o.length&&a.push({elem:u,handlers:o})}return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(E.Event.prototype,e,{enumerable:!0,configurable:!0,get:m(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&R(this,"input"))return this.click(),!1},_default:function(e){return R(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ae:Ce,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Ce,isPropagationStopped:Ce,isImmediatePropagationStopped:Ce,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=Ae,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=Ae,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=Ae,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button
return null==e.which&&Ee.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){E.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj
return r&&(r===this||E.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),E.fn.extend({on:function(e,t,n,r){return we(this,e,t,n,r)},one:function(e,t,n,r){return we(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ce),this.each(function(){E.event.remove(this,e,n,t)})}})
var Re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,xe=/<script|<style|<link/i,Oe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
function Le(e,t){return R(e,"table")&&R(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function ke(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ie(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function De(e,t){var n,r,i,o,s,a,l,u
if(1===t.nodeType){if(Y.hasData(e)&&(o=Y.access(e),s=Y.set(t,o),u=o.events))for(i in delete s.handle,s.events={},u)for(n=0,r=u[i].length;n<r;n++)E.event.add(t,i,u[i][n])
Q.hasData(e)&&(a=Q.access(e),l=E.extend({},a),Q.set(t,l))}}function Pe(e,t,n,r){t=s.apply([],t)
var i,o,a,l,u,c,p=0,d=e.length,f=d-1,g=t[0],v=m(g)
if(v||d>1&&"string"==typeof g&&!h.checkClone&&Oe.test(g))return e.each(function(i){var o=e.eq(i)
v&&(t[0]=g.call(this,i,o.html())),Pe(o,t,n,r)})
if(d&&(o=(i=be(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(l=(a=E.map(fe(i,"script"),ke)).length;p<d;p++)u=i,p!==f&&(u=E.clone(u,!0,!0),l&&E.merge(a,fe(u,"script"))),n.call(e[p],u,p)
if(l)for(c=a[a.length-1].ownerDocument,E.map(a,Ie),p=0;p<l;p++)u=a[p],pe.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&E._evalUrl(u.src):b(u.textContent.replace(Ne,""),c,u))}return e}function Me(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(fe(r)),r.parentNode&&(n&&E.contains(r.ownerDocument,r)&&he(fe(r,"script")),r.parentNode.removeChild(r))
return e}E.extend({htmlPrefilter:function(e){return e.replace(Re,"<$1></$2>")},clone:function(e,t,n){var r,i,o,s,a,l,u,c=e.cloneNode(!0),p=E.contains(e.ownerDocument,e)
if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(s=fe(c),r=0,i=(o=fe(e)).length;r<i;r++)a=o[r],l=s[r],void 0,"input"===(u=l.nodeName.toLowerCase())&&ue.test(a.type)?l.checked=a.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=a.defaultValue)
if(t)if(n)for(o=o||fe(e),s=s||fe(c),r=0,i=o.length;r<i;r++)De(o[r],s[r])
else De(e,c)
return(s=fe(c,"script")).length>0&&he(s,!p&&fe(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle)
n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Me(this,e,!0)},remove:function(e){return Me(this,e)},text:function(e){return U(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(fe(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return U(this,function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!xe.test(e)&&!de[(ce.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(fe(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[]
return Pe(this,arguments,function(t){var n=this.parentNode
E.inArray(this,e)<0&&(E.cleanData(fe(this)),n&&n.replaceChild(t,this))},e)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){E.fn[e]=function(e){for(var n,r=[],i=E(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),E(i[s])[t](n),a.apply(r,n.get())
return this.pushStack(r)}})
var Fe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),je=function(t){var n=t.ownerDocument.defaultView
return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(ne.join("|"),"i")
function He(e,t,n){var r,i,o,s,a=e.style
return(n=n||je(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||E.contains(e.ownerDocument,e)||(s=E.style(e,t)),!h.pixelBoxStyles()&&Fe.test(s)&&Be.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}(function(){function t(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ye.appendChild(u).appendChild(c)
var t=e.getComputedStyle(c)
i="1%"!==t.top,l=12===n(t.marginLeft),c.style.right="60%",a=36===n(t.right),o=36===n(t.width),c.style.position="absolute",s=36===c.offsetWidth||"absolute",ye.removeChild(u),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,s,a,l,u=r.createElement("div"),c=r.createElement("div")
c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,E.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),s}}))})()
var Ue=/^(none|table(?!-c[ea]).+)/,We=/^--/,ze={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},qe=["Webkit","Moz","ms"],Ve=r.createElement("div").style
function Ge(e){var t=E.cssProps[e]
return t||(t=E.cssProps[e]=function(e){if(e in Ve)return e
for(var t=e[0].toUpperCase()+e.slice(1),n=qe.length;n--;)if((e=qe[n]+t)in Ve)return e}(e)||e),t}function Ye(e,t,n){var r=te.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var s="width"===t?1:0,a=0,l=0
if(n===(r?"border":"content"))return 0
for(;s<4;s+=2)"margin"===n&&(l+=E.css(e,n+ne[s],!0,i)),r?("content"===n&&(l-=E.css(e,"padding"+ne[s],!0,i)),"margin"!==n&&(l-=E.css(e,"border"+ne[s]+"Width",!0,i))):(l+=E.css(e,"padding"+ne[s],!0,i),"padding"!==n?l+=E.css(e,"border"+ne[s]+"Width",!0,i):a+=E.css(e,"border"+ne[s]+"Width",!0,i))
return!r&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))),l}function Xe(e,t,n){var r=je(e),i=He(e,t,r),o="border-box"===E.css(e,"boxSizing",!1,r),s=o
if(Fe.test(i)){if(!n)return i
i="auto"}return s=s&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===E.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],s=!0),(i=parseFloat(i)||0)+Qe(e,t,n||(o?"border":"content"),s,r,i)+"px"}function Je(e,t,n,r,i){return new Je.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=He(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=q(t),l=We.test(t),u=e.style
if(l||(t=Ge(a)),s=E.cssHooks[t]||E.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]
"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=oe(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(E.cssNumber[a]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var i,o,s,a=q(t)
return We.test(t)||(t=Ge(a)),(s=E.cssHooks[t]||E.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=He(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,t){E.cssHooks[t]={get:function(e,n,r){if(n)return!Ue.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Xe(e,t,r):ie(e,ze,function(){return Xe(e,t,r)})},set:function(e,n,r){var i,o=je(e),s="border-box"===E.css(e,"boxSizing",!1,o),a=r&&Qe(e,t,r,s,o)
return s&&h.scrollboxSize()===o.position&&(a-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Qe(e,t,"border",!1,o)-.5)),a&&(i=te.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=E.css(e,t)),Ye(0,n,a)}}}),E.cssHooks.marginLeft=$e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(He(e,"marginLeft"))||e.getBoundingClientRect().left-ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(e,t){E.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ne[r]+t]=o[r]||o[r-2]||o[0]
return i}},"margin"!==e&&(E.cssHooks[e+t].set=Ye)}),E.fn.extend({css:function(e,t){return U(this,function(e,t,n){var r,i,o={},s=0
if(Array.isArray(t)){for(r=je(e),i=t.length;s<i;s++)o[t[s]]=E.css(e,t[s],!1,r)
return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,arguments.length>1)}}),E.Tween=Je,Je.prototype={constructor:Je,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=Je.propHooks[this.prop]
return e&&e.get?e.get(this):Je.propHooks._default.get(this)},run:function(e){var t,n=Je.propHooks[this.prop]
return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Je.propHooks._default.set(this),this}},Je.prototype.init.prototype=Je.prototype,Je.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[E.cssProps[e.prop]]&&!E.cssHooks[e.prop]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}},Je.propHooks.scrollTop=Je.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=Je.prototype.init,E.fx.step={}
var Ze,et,tt=/^(?:toggle|show|hide)$/,nt=/queueHooks$/
function rt(){et&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(rt):e.setTimeout(rt,E.fx.interval),E.fx.tick())}function it(){return e.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function ot(e,t){var n,r=0,i={height:e}
for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function st(e,t,n){for(var r,i=(at.tweeners[t]||[]).concat(at.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function at(e,t,n){var r,i,o=0,s=at.prefilters.length,a=E.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1
for(var t=Ze||it(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),o=0,s=u.tweens.length;o<s;o++)u.tweens[o].run(r)
return a.notifyWith(e,[u,r,n]),r<1&&s?n:(s||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:E.extend({},t),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},n),originalProperties:t,originalOptions:n,startTime:Ze||it(),duration:n.duration,tweens:[],createTween:function(t,n){var r=E.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing)
return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0
if(i)return this
for(i=!0;n<r;n++)u.tweens[n].run(1)
return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props
for(function(e,t){var n,r,i,o,s
for(n in e)if(i=t[r=q(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=E.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i)
else t[r]=i}(c,u.opts.specialEasing);o<s;o++)if(r=at.prefilters[o].call(u,e,c,u.opts))return m(r.stop)&&(E._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r
return E.map(c,st,u),m(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),E.fx.timer(E.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}E.Animation=E.extend(at,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return oe(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P)
for(var n,r=0,i=e.length;r<i;r++)n=e[r],at.tweeners[n]=at.tweeners[n]||[],at.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,s,a,l,u,c,p="width"in t||"height"in t,d=this,f={},h=e.style,m=e.nodeType&&re(e),g=Y.get(e,"fxshow")
for(r in n.queue||(null==(s=E._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,E.queue(e,"fx").length||s.empty.fire()})})),t)if(i=t[r],tt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue
m=!0}f[r]=g&&g[r]||E.style(e,r)}if((l=!E.isEmptyObject(t))||!E.isEmptyObject(f))for(r in p&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(u=g&&g.display)&&(u=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(u?c=u:(le([e],!0),u=e.style.display||u,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===E.css(e,"float")&&(l||(d.done(function(){h.display=u}),null==u&&(c=h.display,u="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1,f)l||(g?"hidden"in g&&(m=g.hidden):g=Y.access(e,"fxshow",{display:u}),o&&(g.hidden=!m),m&&le([e],!0),d.done(function(){for(r in m||le([e]),Y.remove(e,"fxshow"),f)E.style(e,r,f[r])})),l=st(m?g[r]:0,r,d),r in g||(g[r]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?at.prefilters.unshift(e):at.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t}
return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(re).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=E.isEmptyObject(e),o=E.speed(t,n,r),s=function(){var t=at(this,E.extend({},e),o);(i||Y.get(this,"finish"))&&t.stop(!0)}
return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=E.timers,s=Y.get(this)
if(i)s[i]&&s[i].stop&&r(s[i])
else for(i in s)s[i]&&s[i].stop&&nt.test(i)&&r(s[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
!t&&n||E.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Y.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=E.timers,s=r?r.length:0
for(n.finish=!0,E.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish})}}),E.each(["toggle","show","hide"],function(e,t){var n=E.fn[t]
E.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ot(t,!0),e,r,i)}}),E.each({slideDown:ot("show"),slideUp:ot("hide"),slideToggle:ot("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){E.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers
for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||E.fx.stop(),Ze=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){et||(et=!0,rt())},E.fx.stop=function(){et=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(t,n){return t=E.fx&&E.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t)
r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"))
e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}()
var lt,ut=E.expr.attrHandle
E.fn.extend({attr:function(e,t){return U(this,E.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?lt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&R(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P)
if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),lt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ut[t]||E.find.attr
ut[t]=function(e,t,r){var i,o,s=t.toLowerCase()
return r||(o=ut[s],ut[s]=i,i=null!=n(e,t,r)?s:null,ut[s]=o),i}})
var ct=/^(?:input|select|textarea|button)$/i,pt=/^(?:a|area)$/i
function dt(e){return(e.match(P)||[]).join(" ")}function ft(e){return e.getAttribute&&e.getAttribute("class")||""}function ht(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return U(this,E.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex")
return t?parseInt(t,10):ct.test(e.nodeName)||pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(e){var t,n,r,i,o,s,a,l=0
if(m(e))return this.each(function(t){E(this).addClass(e.call(this,t,ft(this)))})
if((t=ht(e)).length)for(;n=this[l++];)if(i=ft(n),r=1===n.nodeType&&" "+dt(i)+" "){for(s=0;o=t[s++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ")
i!==(a=dt(r))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,o,s,a,l=0
if(m(e))return this.each(function(t){E(this).removeClass(e.call(this,t,ft(this)))})
if(!arguments.length)return this.attr("class","")
if((t=ht(e)).length)for(;n=this[l++];)if(i=ft(n),r=1===n.nodeType&&" "+dt(i)+" "){for(s=0;o=t[s++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ")
i!==(a=dt(r))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e)
return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):m(e)?this.each(function(n){E(this).toggleClass(e.call(this,n,ft(this),t),t)}):this.each(function(){var t,i,o,s
if(r)for(i=0,o=E(this),s=ht(e);t=s[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t)
else void 0!==e&&"boolean"!==n||((t=ft(this))&&Y.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+dt(ft(n))+" ").indexOf(t)>-1)return!0
return!1}})
var mt=/\r/g
E.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=m(e),this.each(function(n){var i
1===this.nodeType&&(null==(i=r?e.call(this,n,E(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=E.map(i,function(e){return null==e?"":e+""})),(t=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=E.valHooks[i.type]||E.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(mt,""):null==n?"":n:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value")
return null!=t?t:dt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?o+1:i.length
for(r=o<0?l:s?o:0;r<l;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!R(n.parentNode,"optgroup"))){if(t=E(n).val(),s)return t
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=E.makeArray(t),s=i.length;s--;)((r=i[s]).selected=E.inArray(E.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=E.inArray(E(e).val(),t)>-1}},h.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e
var gt=/^(?:focusinfocus|focusoutblur)$/,vt=function(e){e.stopPropagation()}
E.extend(E.event,{trigger:function(t,n,i,o){var s,a,l,u,c,d,f,h,v=[i||r],b=p.call(t,"type")?t.type:t,y=p.call(t,"namespace")?t.namespace.split("."):[]
if(a=h=l=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!gt.test(b+E.event.triggered)&&(b.indexOf(".")>-1&&(b=(y=b.split(".")).shift(),y.sort()),c=b.indexOf(":")<0&&"on"+b,(t=t[E.expando]?t:new E.Event(b,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=y.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:E.makeArray(n,[t]),f=E.event.special[b]||{},o||!f.trigger||!1!==f.trigger.apply(i,n))){if(!o&&!f.noBubble&&!g(i)){for(u=f.delegateType||b,gt.test(u+b)||(a=a.parentNode);a;a=a.parentNode)v.push(a),l=a
l===(i.ownerDocument||r)&&v.push(l.defaultView||l.parentWindow||e)}for(s=0;(a=v[s++])&&!t.isPropagationStopped();)h=a,t.type=s>1?u:f.bindType||b,(d=(Y.get(a,"events")||{})[t.type]&&Y.get(a,"handle"))&&d.apply(a,n),(d=c&&a[c])&&d.apply&&V(a)&&(t.result=d.apply(a,n),!1===t.result&&t.preventDefault())
return t.type=b,o||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(v.pop(),n)||!V(i)||c&&m(i[b])&&!g(i)&&((l=i[c])&&(i[c]=null),E.event.triggered=b,t.isPropagationStopped()&&h.addEventListener(b,vt),i[b](),t.isPropagationStopped()&&h.removeEventListener(b,vt),E.event.triggered=void 0,l&&(i[c]=l)),t.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0})
E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
if(n)return E.event.trigger(e,t,n,!0)}}),h.focusin||E.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){E.event.simulate(t,e.target,E.event.fix(e))}
E.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Y.access(r,t)
i||r.addEventListener(e,n,!0),Y.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Y.access(r,t)-1
i?Y.access(r,t,i):(r.removeEventListener(e,n,!0),Y.remove(r,t))}}})
var bt=e.location,yt=Date.now(),Et=/\?/
E.parseXML=function(t){var n
if(!t||"string"!=typeof t)return null
try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+t),n}
var Tt=/\[\]$/,_t=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Ct=/^(?:input|select|textarea|keygen)/i
function St(e,t,n,r){var i
if(Array.isArray(t))E.each(t,function(t,i){n||Tt.test(e)?r(e,i):St(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)})
else if(n||"object"!==y(t))r(e,t)
else for(i in t)St(e+"["+i+"]",t[i],n,r)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)})
else for(n in e)St(n,e[n],t,i)
return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements")
return e?E.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!E(this).is(":disabled")&&Ct.test(this.nodeName)&&!At.test(e)&&(this.checked||!ue.test(e))}).map(function(e,t){var n=E(this).val()
return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(_t,"\r\n")}}):{name:t.name,value:n.replace(_t,"\r\n")}}).get()}})
var wt=/%20/g,Rt=/#.*$/,xt=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Nt=/^(?:GET|HEAD)$/,Lt=/^\/\//,kt={},It={},Dt="*/".concat("*"),Pt=r.createElement("a")
function Mt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(P)||[]
if(m(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Ft(e,t,n,r){var i={},o=e===It
function s(a){var l
return i[a]=!0,E.each(e[a]||[],function(e,a){var u=a(t,n,r)
return"string"!=typeof u||o||i[u]?o?!(l=u):void 0:(t.dataTypes.unshift(u),s(u),!1)}),l}return s(t.dataTypes[0])||!i["*"]&&s("*")}function jt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&E.extend(!0,e,r),e}Pt.href=bt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?jt(jt(e,E.ajaxSettings),t):jt(E.ajaxSettings,e)},ajaxPrefilter:Mt(kt),ajaxTransport:Mt(It),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{}
var i,o,s,a,l,u,c,p,d,f,h=E.ajaxSetup({},n),m=h.context||h,g=h.context&&(m.nodeType||m.jquery)?E(m):E.event,v=E.Deferred(),b=E.Callbacks("once memory"),y=h.statusCode||{},T={},_={},A="canceled",C={readyState:0,getResponseHeader:function(e){var t
if(c){if(!a)for(a={};t=Ot.exec(s);)a[t[1].toLowerCase()]=t[2]
t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=_[e.toLowerCase()]=_[e.toLowerCase()]||e,T[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t
if(e)if(c)C.always(e[C.status])
else for(t in e)y[t]=[y[t],e[t]]
return this},abort:function(e){var t=e||A
return i&&i.abort(t),S(0,t),this}}
if(v.promise(C),h.url=((t||h.url||bt.href)+"").replace(Lt,bt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(P)||[""],null==h.crossDomain){u=r.createElement("a")
try{u.href=h.url,u.href=u.href,h.crossDomain=Pt.protocol+"//"+Pt.host!=u.protocol+"//"+u.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=E.param(h.data,h.traditional)),Ft(kt,h,n,C),c)return C
for(d in(p=E.event&&h.global)&&0==E.active++&&E.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Nt.test(h.type),o=h.url.replace(Rt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(wt,"+")):(f=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(Et.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(xt,"$1"),f=(Et.test(o)?"&":"?")+"_="+yt+++f),h.url=o+f),h.ifModified&&(E.lastModified[o]&&C.setRequestHeader("If-Modified-Since",E.lastModified[o]),E.etag[o]&&C.setRequestHeader("If-None-Match",E.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Dt+"; q=0.01":""):h.accepts["*"]),h.headers)C.setRequestHeader(d,h.headers[d])
if(h.beforeSend&&(!1===h.beforeSend.call(m,C,h)||c))return C.abort()
if(A="abort",b.add(h.complete),C.done(h.success),C.fail(h.error),i=Ft(It,h,n,C)){if(C.readyState=1,p&&g.trigger("ajaxSend",[C,h]),c)return C
h.async&&h.timeout>0&&(l=e.setTimeout(function(){C.abort("timeout")},h.timeout))
try{c=!1,i.send(T,S)}catch(e){if(c)throw e
S(-1,e)}}else S(-1,"No Transport")
function S(t,n,r,a){var u,d,f,T,_,A=n
c||(c=!0,l&&e.clearTimeout(l),i=void 0,s=a||"",C.readyState=t>0?4:0,u=t>=200&&t<300||304===t,r&&(T=function(e,t,n){for(var r,i,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in a)if(a[i]&&a[i].test(r)){l.unshift(i)
break}if(l[0]in n)o=l[0]
else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){o=i
break}s||(s=i)}o=o||s}if(o)return o!==l[0]&&l.unshift(o),n[o]}(h,C,r)),T=function(e,t,n,r){var i,o,s,a,l,u={},c=e.dataTypes.slice()
if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l
else if("*"!==l&&l!==o){if(!(s=u[l+" "+o]||u["* "+o]))for(i in u)if((a=i.split(" "))[1]===o&&(s=u[l+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[i]:!0!==u[i]&&(o=a[0],c.unshift(a[1]))
break}if(!0!==s)if(s&&e.throws)t=s(t)
else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(h,T,C,u),u?(h.ifModified&&((_=C.getResponseHeader("Last-Modified"))&&(E.lastModified[o]=_),(_=C.getResponseHeader("etag"))&&(E.etag[o]=_)),204===t||"HEAD"===h.type?A="nocontent":304===t?A="notmodified":(A=T.state,d=T.data,u=!(f=T.error))):(f=A,!t&&A||(A="error",t<0&&(t=0))),C.status=t,C.statusText=(n||A)+"",u?v.resolveWith(m,[d,A,C]):v.rejectWith(m,[C,A,f]),C.statusCode(y),y=void 0,p&&g.trigger(u?"ajaxSuccess":"ajaxError",[C,h,u?d:f]),b.fireWith(m,[C,A]),p&&(g.trigger("ajaxComplete",[C,h]),--E.active||E.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,t){E[t]=function(e,n,r,i){return m(n)&&(i=i||r,r=n,n=void 0),E.ajax(E.extend({url:e,type:t,dataType:i,data:n,success:r},E.isPlainObject(e)&&e))}}),E._evalUrl=function(e){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},E.fn.extend({wrapAll:function(e){var t
return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this},wrapInner:function(e){return m(e)?this.each(function(t){E(this).wrapInner(e.call(this,t))}):this.each(function(){var t=E(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=m(e)
return this.each(function(n){E(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}}
var Bt={0:200,1223:204},Ht=E.ajaxSettings.xhr()
h.cors=!!Ht&&"withCredentials"in Ht,h.ajax=Ht=!!Ht,E.ajaxTransport(function(t){var n,r
if(h.cors||Ht&&!t.crossDomain)return{send:function(i,o){var s,a=t.xhr()
if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s]
for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s])
n=function(e){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Bt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort")
try{a.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(e){var t,n
if(e.crossDomain)return{send:function(i,o){t=E("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}})
var $t,Ut=[],Wt=/(=)\?(?=&|$)|\?\?/
E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ut.pop()||E.expando+"_"+yt++
return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=!1!==t.jsonp&&(Wt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Wt.test(t.data)&&"data")
if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=m(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Wt,"$1"+i):!1!==t.jsonp&&(t.url+=(Et.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||E.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){void 0===o?E(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Ut.push(i)),s&&m(o)&&o(s[0]),s=o=void 0}),"script"}),h.createHTMLDocument=(($t=r.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===$t.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=x.exec(e),s=!n&&[],o?[t.createElement(o[1])]:(o=be([e],t,s),s&&s.length&&E(s).remove(),E.merge([],o.childNodes)))
var i,o,s},E.fn.load=function(e,t,n){var r,i,o,s=this,a=e.indexOf(" ")
return a>-1&&(r=dt(e.slice(a)),e=e.slice(0,a)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.expr.pseudos.animated=function(e){return E.grep(E.timers,function(t){return e===t.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,s,a,l,u=E.css(e,"position"),c=E(e),p={}
"static"===u&&(e.style.position="relative"),a=c.offset(),o=E.css(e,"top"),l=E.css(e,"left"),("absolute"===u||"fixed"===u)&&(o+l).indexOf("auto")>-1?(s=(r=c.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(l)||0),m(t)&&(t=t.call(e,n,E.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):c.css(p)}},E.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){E.offset.setOffset(this,e,t)})
var t,n,r=this[0]
return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0}
if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect()
else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode
e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent
return e||ye})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t
E.fn[e]=function(r){return U(this,function(e,r,i){var o
if(g(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r]
o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),E.each(["top","left"],function(e,t){E.cssHooks[t]=$e(h.pixelPosition,function(e,n){if(n)return n=He(e,t),Fe.test(n)?E(e).position()[t]+"px":n})}),E.each({Height:"height",Width:"width"},function(e,t){E.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){E.fn[r]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===o?"margin":"border")
return U(this,function(t,n,i){var o
return g(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?E.css(t,n,a):E.style(t,n,i,a)},t,s?i:void 0,s)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){E.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),E.proxy=function(e,t){var n,r,i
if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=o.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(o.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=R,E.isFunction=m,E.isWindow=g,E.camelCase=q,E.type=y,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E})
var zt=e.jQuery,Kt=e.$
return E.noConflict=function(t){return e.$===E&&(e.$=Kt),t&&e.jQuery===E&&(e.jQuery=zt),E},t||(e.jQuery=e.$=E),E}),function(){var e,t,n
mainContext=this,function(){function r(e,n){var s=e,a=i[s]
a||(a=i[s+="/index"])
var l=o[s]
if(void 0!==l)return l
l=o[s]={},a||function(e,t){throw t?new Error("Could not find module "+e+" required by: "+t):new Error("Could not find module "+e)}(e,n)
for(var u=a.deps,c=a.callback,p=new Array(u.length),d=0;d<u.length;d++)"exports"===u[d]?p[d]=l:"require"===u[d]?p[d]=t:p[d]=r(u[d],s)
return c.apply(this,p),l}if("undefined"==typeof window&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)||(n=this.Ember=this.Ember||{}),void 0===n&&(n={}),void 0===n.__loader){var i={},o={}
e=function(e,t,n){var r={}
n?(r.deps=t,r.callback=n):(r.deps=[],r.callback=t),i[e]=r},(t=function(e){return r(e,null)}).default=t,t.has=function(e){return!!i[e]||!!i[e+"/index"]},t._eak_seen=i,n.__loader={define:e,require:t,registry:i}}else e=n.__loader.define,t=n.__loader.require}(),e("@glimmer/encoder",["exports"],function(e){"use strict"
e.InstructionEncoder=void 0
var t=function(){function e(e){this.buffer=e,this.typePos=0,this.size=0}return e.prototype.encode=function(e,t){var n,r
if(e>255)throw new Error("Opcode type over 8-bits. Got "+e+".")
for(this.buffer.push(e|t|arguments.length-2<<8),this.typePos=this.buffer.length-1,n=2;n<arguments.length;n++){if("number"==typeof(r=arguments[n])&&r>65535)throw new Error("Operand over 16-bits. Got "+r+".")
this.buffer.push(r)}this.size=this.buffer.length},e.prototype.patch=function(e,t){if(-1!==this.buffer[e+1])throw new Error("Trying to patch operand in populated slot instead of a reserved slot.")
this.buffer[e+1]=t},e}()
e.InstructionEncoder=t}),e("@glimmer/low-level",["exports"],function(e){"use strict"
e.Stack=e.Storage=void 0
var t=function(){function e(){this.array=[],this.next=0}return e.prototype.add=function(e){var t,n=this.next,r=this.array
return n===r.length?this.next++:(t=r[n],this.next=t),this.array[n]=e,n},e.prototype.deref=function(e){return this.array[e]},e.prototype.drop=function(e){this.array[e]=this.next,this.next=e},e}(),n=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
this.vec=e}return e.prototype.clone=function(){return new e(this.vec.slice())},e.prototype.sliceFrom=function(t){return new e(this.vec.slice(t))},e.prototype.slice=function(t,n){return new e(this.vec.slice(t,n))},e.prototype.copy=function(e,t){this.vec[t]=this.vec[e]},e.prototype.writeRaw=function(e,t){this.vec[e]=t},e.prototype.writeSmi=function(e,t){var n
this.vec[e]=(n=t)<0?Math.abs(n)<<3|4:n<<3|0},e.prototype.getRaw=function(e){return this.vec[e]},e.prototype.getSmi=function(e){return function(e){switch(7&e){case 0:return e>>3
case 4:return-(e>>3)
default:throw new Error("unreachable")}}(this.vec[e])},e.prototype.reset=function(){this.vec.length=0},e.prototype.len=function(){return this.vec.length},e}()
e.Storage=t,e.Stack=n}),e("@glimmer/node",["exports","ember-babel","@glimmer/runtime"],function(e,t,n){"use strict"
e.serializeBuilder=e.NodeDOMTreeConstruction=void 0
var r=function(e){function r(n){return(0,t.possibleConstructorReturn)(this,e.call(this,n))}return(0,t.inherits)(r,e),r.prototype.setupUselessElement=function(){},r.prototype.insertHTMLBefore=function(e,t,r){var i=t?t.previousSibling:e.lastChild,o=this.document.createRawHTMLSection(r)
e.insertBefore(o,t)
var s=i?i.nextSibling:e.firstChild,a=t?t.previousSibling:e.lastChild
return new n.ConcreteBounds(e,s,a)},r.prototype.createElement=function(e){return this.document.createElement(e)},r.prototype.setAttribute=function(e,t,n){e.setAttribute(t,n)},r}(n.DOMTreeConstruction)
var i=function(e){function r(){var n=(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))
return n.serializeBlockDepth=0,n.inTable=!1,n}return(0,t.inherits)(r,e),r.prototype.__openBlock=function(){var t=this.serializeBlockDepth++
this.__appendComment("%+b:"+t+"%"),e.prototype.__openBlock.call(this)},r.prototype.__closeBlock=function(){e.prototype.__closeBlock.call(this),this.__appendComment("%-b:"+--this.serializeBlockDepth+"%")},r.prototype.__appendHTML=function(t){var r,i=this.__appendComment("%glmr%")
"TABLE"===this.element.tagName&&(r=t.indexOf("<"))>-1&&"tr"===t.slice(r+1,r+3)&&(t="<tbody>"+t+"</tbody>"),e.prototype.__appendHTML.call(this,t)
var o=this.__appendComment("%glmr%")
return new n.ConcreteBounds(this.element,i,o)},r.prototype.__appendText=function(t){var n,r,i,o=(r=(n=this).element,null===(i=n.nextSibling)?r.lastChild:i.previousSibling)
return""===t?this.__appendComment("% %"):(o&&3===o.nodeType&&this.__appendComment("%|%"),e.prototype.__appendText.call(this,t))},r.prototype.closeElement=function(){!0===this.element.needsExtraClose&&(this.element.needsExtraClose=!1,e.prototype.closeElement.call(this)),e.prototype.closeElement.call(this)},r.prototype.openElement=function(t){return"tr"===t&&("TBODY"!==this.element.tagName&&(this.openElement("tbody"),this.constructing.needsExtraClose=!0,this.flushElement()),this.inTable=!1),e.prototype.openElement.call(this,t)},r.prototype.pushRemoteElement=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=this.dom,o=i.createElement("script")
o.setAttribute("glmr",n),i.insertBefore(t,o,r),e.prototype.pushRemoteElement.call(this,t,n,r)},r}(n.NewElementBuilder)
e.NodeDOMTreeConstruction=r,e.serializeBuilder=function(e,t){return i.forInitialRender(e,t)}}),e("@glimmer/opcode-compiler",["exports","ember-babel","@glimmer/util","@glimmer/vm","@glimmer/wire-format","@glimmer/encoder"],function(e,t,n,r,i,o){"use strict"
var s,a
e.PLACEHOLDER_HANDLE=e.WrappedBuilder=e.logOpcode=e.debugSlice=e.debug=e.CompilableTemplate=e.templateFactory=e.PartialDefinition=e.SimpleOpcodeBuilder=e.OpcodeBuilder=e.EagerOpcodeBuilder=e.LazyOpcodeBuilder=e.Macros=e.ATTRS_BLOCK=void 0,(a=s||(s={}))[a.OpenComponentElement=0]="OpenComponentElement",a[a.DidCreateElement=1]="DidCreateElement",a[a.SetComponentAttrs=2]="SetComponentAttrs",a[a.DidRenderLayout=3]="DidRenderLayout",a[a.Debugger=4]="Debugger"
var l=i.Ops,u="&attrs",c=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
this.offset=e,this.names=(0,n.dict)(),this.funcs=[]}return e.prototype.add=function(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1},e.prototype.compile=function(e,t){var n=e[this.offset],r=this.names[n];(0,this.funcs[r])(e,t)},e}(),p=void 0
function d(e,t,n){var r=e[1],i=e[2],o=e[3]
n.expr(i),o?n.dynamicAttr(r,o,t):n.dynamicAttr(r,null,t)}var f=void 0
var h=function(){function e(){this.names=(0,n.dict)(),this.funcs=[]}return e.prototype.add=function(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1},e.prototype.addMissing=function(e){this.missing=e},e.prototype.compile=function(e,t,n,r,i,o){var s=this.names[e]
void 0===s?(0,this.missing)(e,t,n,r,i,o):(0,this.funcs[s])(t,n,r,i,o)},e}(),m=function(){function e(){this.names=(0,n.dict)(),this.funcs=[]}return e.prototype.add=function(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1},e.prototype.addMissing=function(e){this.missing=e},e.prototype.compile=function(e,t){var n,r,i=e[1]
if(!Array.isArray(i))return["expr",i]
var o=void 0,s=void 0,a=void 0
if(i[0]===l.Helper)o=i[1],s=i[2],a=i[3]
else{if(i[0]!==l.Unknown)return["expr",i]
o=i[1],s=a=null}var u=this.names[o]
return void 0===u&&this.missing?!1===(n=(0,this.missing)(o,s,a,t))?["expr",i]:n:void 0!==u?!1===(r=(0,this.funcs[u])(o,s,a,t))?["expr",i]:r:["expr",i]},e}()
var g=function(){function e(e,t,o,a){this.statements=e,this.containingLayout=t,this.options=o,this.symbolTable=a,this.compiled=null,this.statementCompiler=function(){if(p)return p
var e=p=new c
e.add(l.Text,function(e,t){t.text(e[1])}),e.add(l.Comment,function(e,t){t.comment(e[1])}),e.add(l.CloseElement,function(e,t){t.closeElement()}),e.add(l.FlushElement,function(e,t){t.flushElement()}),e.add(l.Modifier,function(e,t){var n=t.resolver,r=t.referrer,i=e[1],o=e[2],s=e[3],a=n.lookupModifier(i,r)
if(!a)throw new Error("Compile Error "+i+" is not a modifier: Helpers may not be used in the element form.")
t.modifier(a,o,s)}),e.add(l.StaticAttr,function(e,t){var n=e[1],r=e[2],i=e[3]
t.staticAttr(n,i,r)}),e.add(l.DynamicAttr,function(e,t){d(e,!1,t)}),e.add(l.TrustingAttr,function(e,t){d(e,!0,t)}),e.add(l.OpenElement,function(e,t){t.openPrimitiveElement(e[1])}),e.add(l.OpenSplattedElement,function(e,t){t.setComponentAttrs(!0),t.putComponentOperations(),t.openPrimitiveElement(e[1])}),e.add(l.Component,function(e,t){var r,i,o,a,u,c=e[1],p=e[2],d=e[3],f=e[4],h=t.resolver,m=t.referrer,g=h.lookupComponentDefinition(c,m)
if(null===g)throw new Error("Compile Error: Cannot find component "+c)
r=h.getCapabilities(g),i=[[l.ClientSideStatement,s.SetComponentAttrs,!0]].concat(p,[[l.ClientSideStatement,s.SetComponentAttrs,!1]]),o=t.inlineBlock({statements:i,parameters:n.EMPTY_ARRAY}),a=t.template(f),!1===r.dynamicLayout?(u=h.getLayout(g),t.pushComponentDefinition(g),t.invokeStaticComponent(r,u,o,null,d,!1,a&&a)):(t.pushComponentDefinition(g),t.invokeComponent(o,null,d,!1,a&&a))}),e.add(l.Partial,function(e,t){var n=e[1],r=e[2],i=t.referrer
t.startLabels(),t.pushFrame(),t.returnTo("END"),t.expr(n),t.dup(),t.enter(2),t.jumpUnless("ELSE"),t.invokePartial(i,t.evalSymbols(),r),t.popScope(),t.popFrame(),t.label("ELSE"),t.exit(),t.return(),t.label("END"),t.popFrame(),t.stopLabels()}),e.add(l.Yield,function(e,t){var n=e[1],r=e[2]
t.yield(n,r)}),e.add(l.AttrSplat,function(e,t){var n=e[1]
t.yield(n,[]),t.didCreateElement(r.Register.s0),t.setComponentAttrs(!1)}),e.add(l.Debugger,function(e,t){var n=e[1]
t.debugger(t.evalSymbols(),n)}),e.add(l.ClientSideStatement,function(e,n){t.compile(e,n)}),e.add(l.Append,function(e,t){var n=e[1],o=e[2]
if(!0!==(t.macros.inlines.compile(e,t)||n)){var s=(0,i.isGet)(n),a=(0,i.isMaybeLocal)(n)
o?t.guardedAppend(n,!0):s||a?t.guardedAppend(n,!1):(t.expr(n),t.primitive(!1),t.load(r.Register.t0),t.dynamicContent())}}),e.add(l.Block,function(e,t){var n=e[1],r=e[2],i=e[3],o=e[4],s=e[5],a=t.template(o),l=t.template(s)
t.macros.blocks.compile(n,r,i,a&&a,l&&l,t)})
var t=new c(1)
return t.add(s.OpenComponentElement,function(e,t){t.putComponentOperations(),t.openPrimitiveElement(e[2])}),t.add(s.DidCreateElement,function(e,t){t.didCreateElement(r.Register.s0)}),t.add(s.SetComponentAttrs,function(e,t){t.setComponentAttrs(e[2])}),t.add(s.Debugger,function(){}),t.add(s.DidRenderLayout,function(e,t){t.didRenderLayout(r.Register.s0)}),e}()}return e.topLevel=function(t,n){return new e(t.statements,{block:t,referrer:n.referrer},n,{hasEval:t.hasEval,symbols:t.symbols})},e.prototype.compile=function(e){var t,n=this.compiled
if(null!==n)return n
this.compiled=-1
var r=this.options,i=this.statements,o=this.containingLayout,s=o.referrer,a=r.program,l=r.resolver,u=r.macros,c=r.asPartial,p=new(0,r.Builder)(a,l,s,u,o,c,e)
for(t=0;t<i.length;t++)this.statementCompiler.compile(i[t],p)
var d=p.commit(a.heap,o.block.symbols.length)
return this.compiled=d},e}(),v=function(){function e(e,t){this.options=e,this.layout=t,this.compiled=null
var n=t.block
this.symbolTable={hasEval:n.hasEval,symbols:n.symbols.concat([u])}}return e.prototype.compile=function(){if(null!==this.compiled)return this.compiled
var e=this.options,t=this.layout,i=this.referrer,o=e.program,s=e.resolver,a=e.macros,l=e.asPartial,u=new(0,e.Builder)(o,s,i,a,t,l)
u.startLabels(),u.fetch(r.Register.s1),u.getComponentTagName(r.Register.s0),u.primitiveReference(),u.dup(),u.load(r.Register.s1),u.jumpUnless("BODY"),u.fetch(r.Register.s1),u.putComponentOperations(),u.openDynamicElement(),u.didCreateElement(r.Register.s0),u.flushElement(),u.label("BODY"),u.invokeStaticBlock(function(e,t){var r=e.block,i=e.referrer
return new g(r.statements,e,t,{referrer:i,parameters:n.EMPTY_ARRAY})}(t,this.options)),u.fetch(r.Register.s1),u.jumpUnless("END"),u.closeElement(),u.label("END"),u.load(r.Register.s1),u.stopLabels()
var c=u.commit(e.program.heap,t.block.symbols.length)
return this.compiled=c},e}()
var b=function(){function e(e){this.builder=e}return e.prototype.static=function(e,t){var n,r,i=t[0],o=t[1],s=t[2],a=t[3],l=this.builder,u=l.resolver
null!==e&&(!1===(n=u.getCapabilities(e)).dynamicLayout?(r=u.getLayout(e),l.pushComponentDefinition(e),l.invokeStaticComponent(n,r,null,i,o,!1,s,a)):(l.pushComponentDefinition(e),l.invokeComponent(null,i,o,!1,s,a)))},e}(),y=function(){function e(){this.labels=(0,n.dict)(),this.targets=[]}return e.prototype.label=function(e,t){this.labels[e]=t},e.prototype.target=function(e,t){this.targets.push({at:e,target:t})},e.prototype.patch=function(e){var t,n,r,i,o=this.targets,s=this.labels
for(t=0;t<o.length;t++)r=(n=o[t]).at,i=s[n.target]-r,e.patch(r,i)},e}(),E=function(){function e(){this.encoder=new o.InstructionEncoder([])}return e.prototype.push=function(e){switch(arguments.length){case 1:return this.encoder.encode(e,0)
case 2:return this.encoder.encode(e,0,arguments[1])
case 3:return this.encoder.encode(e,0,arguments[1],arguments[2])
default:return this.encoder.encode(e,0,arguments[1],arguments[2],arguments[3])}},e.prototype.pushMachine=function(e){switch(arguments.length){case 1:return this.encoder.encode(e,1024)
case 2:return this.encoder.encode(e,1024,arguments[1])
case 3:return this.encoder.encode(e,1024,arguments[1],arguments[2])
default:return this.encoder.encode(e,1024,arguments[1],arguments[2],arguments[3])}},e.prototype.commit=function(e,t){this.pushMachine(20)
var n,r,i=this.encoder.buffer,o=e.malloc()
for(n=0;n<i.length;n++)"function"==typeof(r=i[n])?e.pushPlaceholder(r):e.push(r)
return e.finishMalloc(o,t),o},e.prototype.reserve=function(e){this.encoder.encode(e,0,-1)},e.prototype.reserveMachine=function(e){this.encoder.encode(e,1024,-1)},e.prototype.main=function(){this.push(56,r.Register.s0),this.invokePreparedComponent(!1)},e.prototype.dynamicContent=function(){this.push(24)},e.prototype.beginComponentTransaction=function(){this.push(75)},e.prototype.commitComponentTransaction=function(){this.push(76)},e.prototype.pushDynamicScope=function(){this.push(36)},e.prototype.popDynamicScope=function(){this.push(37)},e.prototype.pushRemoteElement=function(){this.push(33)},e.prototype.popRemoteElement=function(){this.push(34)},e.prototype.pushRootScope=function(e,t){this.push(17,e,t?1:0)},e.prototype.pushChildScope=function(){this.push(18)},e.prototype.popScope=function(){this.push(19)},e.prototype.prepareArgs=function(e){this.push(65,e)},e.prototype.createComponent=function(e,t){this.push(67,0|t,e)},e.prototype.registerComponentDestructor=function(e){this.push(68,e)},e.prototype.putComponentOperations=function(){this.push(69)},e.prototype.getComponentSelf=function(e){this.push(70,e)},e.prototype.getComponentTagName=function(e){this.push(71,e)},e.prototype.getComponentLayout=function(e){this.push(72,e)},e.prototype.invokeComponentLayout=function(e){this.push(74,e)},e.prototype.didCreateElement=function(e){this.push(77,e)},e.prototype.didRenderLayout=function(e){this.push(78,e)},e.prototype.pushFrame=function(){this.pushMachine(47)},e.prototype.popFrame=function(){this.pushMachine(48)},e.prototype.invokeVirtual=function(){this.pushMachine(41)},e.prototype.invokeYield=function(){this.push(43)},e.prototype.toBoolean=function(){this.push(51)},e.prototype.invokePreparedComponent=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(r.Register.s0,e),t&&t(),this.registerComponentDestructor(r.Register.s0),this.getComponentSelf(r.Register.s0),this.invokeComponentLayout(r.Register.s0),this.didRenderLayout(r.Register.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction()},(0,t.createClass)(e,[{key:"pos",get:function(){return this.encoder.typePos}},{key:"nextPos",get:function(){return this.encoder.size}}]),e}(),T=function(e){function i(r,i,o,s,a,u,p){var d=(0,t.possibleConstructorReturn)(this,e.call(this))
return d.program=r,d.resolver=i,d.referrer=o,d.macros=s,d.containingLayout=a,d.asPartial=u,d.stdLib=p,d.component=new b(d),d.expressionCompiler=function(){if(f)return f
var e=f=new c
return e.add(l.Unknown,function(e,t){var n=t.resolver,r=t.asPartial,i=t.referrer,o=e[1],s=n.lookupHelper(o,i)
null!==s?t.helper(s,null,null):r?t.resolveMaybeLocal(o):(t.getVariable(0),t.getProperty(o))}),e.add(l.Concat,function(e,t){var n,r=e[1]
for(n=0;n<r.length;n++)t.expr(r[n])
t.concat(r.length)}),e.add(l.Helper,function(e,t){var n,r,i=t.resolver,o=t.referrer,s=e[1],a=e[2],l=e[3]
if("component"===s)return n=a[0],r=a.slice(1),void t.curryComponent(n,r,l,!0)
var u=i.lookupHelper(s,o)
if(null===u)throw new Error("Compile Error: "+s+" is not a helper")
t.helper(u,a,l)}),e.add(l.Get,function(e,t){var n,r=e[1],i=e[2]
for(t.getVariable(r),n=0;n<i.length;n++)t.getProperty(i[n])}),e.add(l.MaybeLocal,function(e,t){var n,r,i=e[1]
for(t.asPartial?(n=i[0],i=i.slice(1),t.resolveMaybeLocal(n)):t.getVariable(0),r=0;r<i.length;r++)t.getProperty(i[r])}),e.add(l.Undefined,function(e,t){return t.pushPrimitiveReference(void 0)}),e.add(l.HasBlock,function(e,t){t.hasBlock(e[1])}),e.add(l.HasBlockParams,function(e,t){t.hasBlockParams(e[1])}),e}(),d.labelsStack=new n.Stack,d.isComponentAttrs=!1,d.constants=r.constants,d}return(0,t.inherits)(i,e),i.prototype.label=function(e){this.labels.label(e,this.nextPos)},i.prototype.setComponentAttrs=function(e){this.isComponentAttrs=e},i.prototype.expr=function(e){Array.isArray(e)?this.expressionCompiler.compile(e,this):this.pushPrimitiveReference(e)},i.prototype.pushArgs=function(e,t){var n=this.constants.stringArray(e)
this.push(63,n,t)},i.prototype.startLabels=function(){this.labelsStack.push(new y)},i.prototype.stopLabels=function(){this.labelsStack.pop().patch(this.encoder)},i.prototype.pushComponentDefinition=function(e){this.push(59,this.constants.handle(e))},i.prototype.pushCurriedComponent=function(){this.push(61)},i.prototype.pushDynamicComponentInstance=function(){this.push(60)},i.prototype.resolveDynamicComponent=function(e){this.push(62,this.constants.serializable(e))},i.prototype.staticComponentHelper=function(e,t,n){var r,i,o,s=this.resolver.lookupComponentDefinition(e,this.referrer)
if(s&&!1===(r=this.resolver.getCapabilities(s)).dynamicLayout){if(t)for(i=0;i<t.length;i+=2)t[i][0]="@"+t[i][0]
return o=this.resolver.getLayout(s),this.pushComponentDefinition(s),this.invokeStaticComponent(r,o,null,null,t,!1,n&&n),!0}return!1},i.prototype.invokePartial=function(e,t,n){var r=this.constants.serializable(e),i=this.constants.stringArray(t),o=this.constants.array(n)
this.push(79,r,i,o)},i.prototype.resolveMaybeLocal=function(e){this.push(80,this.string(e))},i.prototype.debugger=function(e,t){this.push(81,this.constants.stringArray(e),this.constants.array(t))},i.prototype.text=function(e){this.push(22,this.constants.string(e))},i.prototype.openPrimitiveElement=function(e){this.push(25,this.constants.string(e))},i.prototype.openDynamicElement=function(){this.push(26)},i.prototype.flushElement=function(){this.push(30)},i.prototype.closeElement=function(){this.push(31)},i.prototype.staticAttr=function(e,t,n){var r,i=this.constants.string(e),o=t?this.constants.string(t):0
this.isComponentAttrs?(this.pushPrimitiveReference(n),this.push(29,i,1,o)):(r=this.constants.string(n),this.push(27,i,r,o))},i.prototype.dynamicAttr=function(e,t,n){var r=this.constants.string(e),i=t?this.constants.string(t):0
this.isComponentAttrs?this.push(29,r,!0===n?1:0,i):this.push(28,r,!0===n?1:0,i)},i.prototype.comment=function(e){var t=this.constants.string(e)
this.push(23,t)},i.prototype.modifier=function(e,t,n){this.pushFrame(),this.compileArgs(t,n,null,!0),this.push(32,this.constants.handle(e)),this.popFrame()},i.prototype.putIterator=function(){this.push(54)},i.prototype.enterList=function(e){this.reserve(52),this.labels.target(this.pos,e)},i.prototype.exitList=function(){this.push(53)},i.prototype.iterate=function(e){this.reserve(55),this.labels.target(this.pos,e)},i.prototype.setVariable=function(e){this.push(2,e)},i.prototype.setBlock=function(e){this.push(3,e)},i.prototype.getVariable=function(e){this.push(4,e)},i.prototype.getProperty=function(e){this.push(5,this.string(e))},i.prototype.getBlock=function(e){this.push(6,e)},i.prototype.hasBlock=function(e){this.push(7,e)},i.prototype.hasBlockParams=function(e){this.getBlock(e),this.resolveBlock(),this.push(8)},i.prototype.concat=function(e){this.push(9,e)},i.prototype.load=function(e){this.push(15,e)},i.prototype.fetch=function(e){this.push(16,e)},i.prototype.dup=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.Register.sp,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return this.push(13,e,t)},i.prototype.pop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
return this.push(14,e)},i.prototype.returnTo=function(e){this.reserveMachine(21),this.labels.target(this.pos,e)},i.prototype.primitive=function(e){var t=0,n=void 0
switch(typeof e){case"number":e%1==0?e>-1?n=e:(n=this.constants.number(e),t=4):(n=this.constants.number(e),t=1)
break
case"string":n=this.string(e),t=2
break
case"boolean":n=0|e,t=3
break
case"object":n=2,t=3
break
case"undefined":n=3,t=3
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}var r=this.sizeImmediate(n<<3|t,n)
this.push(11,r)},i.prototype.sizeImmediate=function(e,t){return e>=65535||e<0?this.constants.number(t)<<3|5:e},i.prototype.pushPrimitiveReference=function(e){this.primitive(e),this.primitiveReference()},i.prototype.primitiveReference=function(){this.push(12)},i.prototype.helper=function(e,t,n){this.pushFrame(),this.compileArgs(t,n,null,!0),this.push(1,this.constants.handle(e)),this.popFrame(),this.fetch(r.Register.v0)},i.prototype.bindDynamicScope=function(e){this.push(35,this.names(e))},i.prototype.enter=function(e){this.push(49,e)},i.prototype.exit=function(){this.push(50)},i.prototype.return=function(){this.pushMachine(20)},i.prototype.jump=function(e){this.reserveMachine(44),this.labels.target(this.pos,e)},i.prototype.jumpIf=function(e){this.reserve(45),this.labels.target(this.pos,e)},i.prototype.jumpUnless=function(e){this.reserve(46),this.labels.target(this.pos,e)},i.prototype.string=function(e){return this.constants.string(e)},i.prototype.names=function(e){var t,n,r=[]
for(t=0;t<e.length;t++)n=e[t],r[t]=this.constants.string(n)
return this.constants.array(r)},i.prototype.symbols=function(e){return this.constants.array(e)},i.prototype.inlineBlock=function(e){var t=e.parameters,n=e.statements,r={parameters:t,referrer:this.containingLayout.referrer},i={program:this.program,macros:this.macros,Builder:this.constructor,resolver:this.resolver,asPartial:this.asPartial,referrer:this.referrer}
return new g(n,this.containingLayout,i,r)},i.prototype.evalSymbols=function(){var e=this.containingLayout.block
return e.hasEval?e.symbols:null},i.prototype.compileParams=function(e){var t
if(!e)return 0
for(t=0;t<e.length;t++)this.expr(e[t])
return e.length},i.prototype.compileArgs=function(e,t,r,i){r&&(this.pushYieldableBlock(r.main),this.pushYieldableBlock(r.else),this.pushYieldableBlock(r.attrs))
var o,s,a=this.compileParams(e)<<4
i&&(a|=8),r&&(a|=7)
var l=n.EMPTY_ARRAY
if(t)for(l=t[0],o=t[1],s=0;s<o.length;s++)this.expr(o[s])
this.pushArgs(l,a)},i.prototype.invokeStaticBlock=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=e.symbolTable.parameters,o=i.length,s=Math.min(n,o)
if(this.pushFrame(),s)for(this.pushChildScope(),t=0;t<s;t++)this.dup(r.Register.fp,n-t),this.setVariable(i[t])
this.pushBlock(e),this.resolveBlock(),this.invokeVirtual(),s&&this.popScope(),this.popFrame()},i.prototype.builtInGuardedAppend=function(){this.dup(),this.startLabels(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushCurriedComponent(),this.pushDynamicComponentInstance(),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(),this.exit(),this.return(),this.stopLabels()},i.prototype.guardedAppend=function(e,t){this.startLabels(),this.pushFrame(),this.returnTo("END"),this.stdLib?(this.primitive(!!t),this.load(r.Register.t0),this.expr(e),this.primitive(this.stdLib.guardedAppend),this.invokeVirtual()):(this.expr(e),this.dup(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushCurriedComponent(),this.pushDynamicComponentInstance(),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.primitive(!!t),this.load(r.Register.t0),this.dynamicContent(),this.exit(),this.return()),this.label("END"),this.popFrame(),this.stopLabels()},i.prototype.yield=function(e,t){this.compileArgs(t,null,null,!1),this.getBlock(e),this.resolveBlock(),this.invokeYield(),this.popScope(),this.popFrame()},i.prototype.populateLayout=function(e){this.push(73,e)},i.prototype.invokeComponent=function(e,t,n,i,o){var s=this,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,l=arguments[6]
this.fetch(r.Register.s0),this.dup(r.Register.sp,1),this.load(r.Register.s0),this.pushFrame(),this.compileArgs(t,n,{main:o,else:a,attrs:e},i),this.prepareArgs(r.Register.s0),this.invokePreparedComponent(null!==o,function(){l?(s.pushSymbolTable(l.symbolTable),s.pushLayout(l),s.resolveLayout()):s.getComponentLayout(r.Register.s0),s.populateLayout(r.Register.s0)}),this.load(r.Register.s0)},i.prototype.invokeStaticComponent=function(e,t,i,o,s,a,l){var c,p,d,f,h,m,g,v,b,y,E=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,T=t.symbolTable
if(T.hasEval||e.prepareArgs)this.invokeComponent(i,o,s,a,l,E,t)
else{this.fetch(r.Register.s0),this.dup(r.Register.sp,1),this.load(r.Register.s0)
var _=T.symbols
e.createArgs&&(this.pushFrame(),this.compileArgs(null,s,null,a)),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(r.Register.s0,null!==l),e.createArgs&&this.popFrame(),this.registerComponentDestructor(r.Register.s0)
var A=[]
for(this.getComponentSelf(r.Register.s0),A.push({symbol:0,isBlock:!1}),c=0;c<_.length;c++)switch((p=_[c]).charAt(0)){case"&":if(d=null,"&default"===p)d=l
else if("&inverse"===p)d=E
else{if(p!==u)throw(0,n.unreachable)()
d=i}d?(this.pushYieldableBlock(d),A.push({symbol:c+1,isBlock:!0})):(this.pushYieldableBlock(null),A.push({symbol:c+1,isBlock:!0}))
break
case"@":if(!s)break
f=s[0],h=s[1],m=p,a&&(m=p.slice(1)),-1!==(g=f.indexOf(m))&&(this.expr(h[g]),A.push({symbol:c+1,isBlock:!1}))}for(this.pushRootScope(_.length+1,!!(l||E||i)),v=A.length-1;v>=0;v--)y=(b=A[v]).symbol,b.isBlock?this.setBlock(y):this.setVariable(y)
this.pushFrame(),this.invokeStatic(t),this.didRenderLayout(r.Register.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(r.Register.s0)}},i.prototype.dynamicComponent=function(e,t,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null
this.startLabels(),this.pushFrame(),this.returnTo("END"),this.expr(e),this.dup(),this.enter(2),this.jumpUnless("ELSE"),this.resolveDynamicComponent(this.referrer),this.pushDynamicComponentInstance(),this.invokeComponent(null,t,n,r,i,o),this.label("ELSE"),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()},i.prototype.isComponent=function(){this.push(57)},i.prototype.curryComponent=function(e,t,n,i){var o=this.referrer
this.pushFrame(),this.compileArgs(t,n,null,i),this.push(66),this.expr(e),this.push(58,this.constants.serializable(o)),this.popFrame(),this.fetch(r.Register.v0)},i.prototype.pushSymbolTable=function(e){var t
e?(t=this.constants.serializable(e),this.push(40,t)):this.primitive(null)},i.prototype.pushBlockScope=function(){this.push(39)},i.prototype.pushYieldableBlock=function(e){this.pushSymbolTable(e&&e.symbolTable),this.pushBlockScope(),this.pushBlock(e)},i.prototype.template=function(e){return e?this.inlineBlock(e):null},(0,t.createClass)(i,[{key:"labels",get:function(){return this.labelsStack.current}}]),i}(E),_=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.pushBlock=function(e){e?this.pushOther(e):this.primitive(null)},n.prototype.resolveBlock=function(){this.push(38)},n.prototype.pushLayout=function(e){e?this.pushOther(e):this.primitive(null)},n.prototype.resolveLayout=function(){this.push(38)},n.prototype.invokeStatic=function(e){this.pushOther(e),this.push(38),this.pushMachine(41)},n.prototype.pushOther=function(e){this.push(10,this.other(e))},n.prototype.other=function(e){return this.constants.other(e)},n}(T),A=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.pushBlock=function(e){var t=e?e.compile(this.stdLib):null
this.primitive(t)},n.prototype.resolveBlock=function(){},n.prototype.pushLayout=function(e){e?this.primitive(e.compile(this.stdLib)):this.primitive(null)},n.prototype.resolveLayout=function(){},n.prototype.invokeStatic=function(e){var t=this,n=e.compile();-1===n?this.pushMachine(42,function(){return e.compile(t.stdLib)}):this.pushMachine(42,n)},n}(T),C=function(){function e(e,t){this.name=e,this.template=t}return e.prototype.getPartial=function(){var e=this.template.asPartial(),t=e.compile()
return{symbolTable:e.symbolTable,handle:t}},e}(),S=0,w=function(){function e(e,t){this.options=e,this.parsedLayout=t,this.layout=null,this.partial=null,this.wrappedLayout=null
var n=t.block
this.symbols=n.symbols,this.hasEval=n.hasEval,this.statements=n.statements,this.referrer=t.referrer,this.id=t.id||"client-"+S++}return e.prototype.asLayout=function(){return this.layout?this.layout:this.layout=R(this.parsedLayout,this.options,!1)},e.prototype.asPartial=function(){return this.partial?this.partial:this.partial=R(this.parsedLayout,this.options,!0)},e.prototype.asWrappedLayout=function(){if(this.wrappedLayout)return this.wrappedLayout
var e=(0,n.assign)({},this.options,{asPartial:!1,referrer:this.referrer})
return this.wrappedLayout=new v(e,this.parsedLayout)},e}()
function R(e,t,r){var i=e.block,o=e.referrer,s=i.hasEval,a=i.symbols,l=(0,n.assign)({},t,{asPartial:r,referrer:o})
return new g(i.statements,e,l,{referrer:o,hasEval:s,symbols:a})}e.ATTRS_BLOCK=u,e.Macros=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new m
return e.add("if",function(e,t,n,r,i){if(!e||1!==e.length)throw new Error("SYNTAX ERROR: #if requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END"),i.expr(e[0]),i.toBoolean(),i.enter(1),i.jumpUnless("ELSE"),i.invokeStaticBlock(n),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("unless",function(e,t,n,r,i){if(!e||1!==e.length)throw new Error("SYNTAX ERROR: #unless requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END"),i.expr(e[0]),i.toBoolean(),i.enter(1),i.jumpIf("ELSE"),i.invokeStaticBlock(n),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("with",function(e,t,n,r,i){if(!e||1!==e.length)throw new Error("SYNTAX ERROR: #with requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END"),i.expr(e[0]),i.dup(),i.toBoolean(),i.enter(2),i.jumpUnless("ELSE"),i.invokeStaticBlock(n,1),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("each",function(e,t,n,i,o){o.startLabels(),o.pushFrame(),o.returnTo("END"),t&&"key"===t[0][0]?o.expr(t[1][0]):o.pushPrimitiveReference(null),o.expr(e[0]),o.enter(2),o.putIterator(),o.jumpUnless("ELSE"),o.pushFrame(),o.returnTo("ITER"),o.dup(r.Register.fp,1),o.enterList("BODY"),o.label("ITER"),o.iterate("BREAK"),o.label("BODY"),o.invokeStaticBlock(n,2),o.pop(2),o.exit(),o.return(),o.label("BREAK"),o.exitList(),o.popFrame(),i?(o.jump("EXIT"),o.label("ELSE"),o.invokeStaticBlock(i),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),e.add("in-element",function(e,t,n,r,i){if(!e||1!==e.length)throw new Error("SYNTAX ERROR: #in-element requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END")
var o,s,a=t[0],l=t[1]
for(o=0;o<a.length;o++){if("nextSibling"!==(s=a[o])&&"guid"!==s)throw new Error("SYNTAX ERROR: #in-element does not take a `"+a[0]+"` option")
i.expr(l[o])}i.expr(e[0]),i.dup(),i.enter(4),i.jumpUnless("ELSE"),i.pushRemoteElement(),i.invokeStaticBlock(n),i.popRemoteElement(),i.label("ELSE"),i.exit(),i.return(),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("-with-dynamic-vars",function(e,t,n,r,i){var o,s
t?(o=t[0],s=t[1],i.compileParams(s),i.pushDynamicScope(),i.bindDynamicScope(o),i.invokeStaticBlock(n),i.popDynamicScope()):i.invokeStaticBlock(n)}),e.add("component",function(e,t,n,r,i){if("string"!=typeof e[0]||!i.staticComponentHelper(e[0],t,n)){var o=e[0],s=e.slice(1)
i.dynamicComponent(o,s,t,!0,n,r)}}),t.add("component",function(e,t,n,r){var i=t&&t[0]
if("string"==typeof i&&r.staticComponentHelper(i,n,null))return!0
var o=t[0],s=t.slice(1)
return r.dynamicComponent(o,s,n,!0,null,null),!0}),{blocks:e,inlines:t}}(),t=e.blocks,n=e.inlines
this.blocks=t,this.inlines=n},e.LazyOpcodeBuilder=_,e.EagerOpcodeBuilder=A,e.OpcodeBuilder=T,e.SimpleOpcodeBuilder=E,e.PartialDefinition=C,e.templateFactory=function(e){var t=e.id,r=e.meta,i=e.block,o=void 0,s=t||"client-"+S++
return{id:s,meta:r,create:function(e,t){var a=t?(0,n.assign)({},t,r):r
return o||(o=JSON.parse(i)),new w(e,{id:s,block:o,referrer:a})}}},e.CompilableTemplate=g,e.debug=function(e,t){for(r=arguments.length,i=Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o]
var r,i,o
throw(0,n.unreachable)("Missing Opcode Metadata for "+t)},e.debugSlice=function(){},e.logOpcode=function(e,t){var n=e
return t&&(n+=Object.keys(t).map(function(e){return" "+e+"="+void t[e]}).join("")),"("+n+")"},e.WrappedBuilder=v,e.PLACEHOLDER_HANDLE=-1}),e("@glimmer/program",["exports","ember-babel","@glimmer/util"],function(e,t){"use strict"
e.Opcode=e.Program=e.RuntimeProgram=e.WriteOnlyProgram=e.Heap=e.LazyConstants=e.Constants=e.RuntimeConstants=e.WriteOnlyConstants=void 0
var n={},r=Object.freeze([]),i=function(){function e(){this.strings=[],this.arrays=[r],this.tables=[],this.handles=[],this.resolved=[],this.numbers=[]}return e.prototype.string=function(e){var t=this.strings.indexOf(e)
return t>-1?t:this.strings.push(e)-1},e.prototype.stringArray=function(e){var t,n=new Array(e.length)
for(t=0;t<e.length;t++)n[t]=this.string(e[t])
return this.array(n)},e.prototype.array=function(e){if(0===e.length)return 0
var t=this.arrays.indexOf(e)
return t>-1?t:this.arrays.push(e)-1},e.prototype.handle=function(e){var t=this.handles.indexOf(e)
return t>-1?t:(this.resolved.push(n),this.handles.push(e)-1)},e.prototype.serializable=function(e){var t=JSON.stringify(e),n=this.strings.indexOf(t)
return n>-1?n:this.strings.push(t)-1},e.prototype.number=function(e){var t=this.numbers.indexOf(e)
return t>-1?t:this.numbers.push(e)-1},e.prototype.toPool=function(){return{strings:this.strings,arrays:this.arrays,handles:this.handles,numbers:this.numbers}},e}(),o=function(){function e(e,t){this.resolver=e,this.strings=t.strings,this.arrays=t.arrays,this.handles=t.handles,this.resolved=this.handles.map(function(){return n}),this.numbers=t.numbers}return e.prototype.getString=function(e){return this.strings[e]},e.prototype.getNumber=function(e){return this.numbers[e]},e.prototype.getStringArray=function(e){var t,n,r=this.getArray(e),i=new Array(r.length)
for(t=0;t<r.length;t++)n=r[t],i[t]=this.getString(n)
return i},e.prototype.getArray=function(e){return this.arrays[e]},e.prototype.resolveHandle=function(e){var t,r=this.resolved[e]
return r===n&&(t=this.handles[e],r=this.resolved[e]=this.resolver.resolve(t)),r},e.prototype.getSerializable=function(e){return JSON.parse(this.strings[e])},e}(),s=function(e){function r(r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this))
return o.resolver=r,i&&(o.strings=i.strings,o.arrays=i.arrays,o.handles=i.handles,o.resolved=o.handles.map(function(){return n}),o.numbers=i.numbers),o}return(0,t.inherits)(r,e),r.prototype.getNumber=function(e){return this.numbers[e]},r.prototype.getString=function(e){return this.strings[e]},r.prototype.getStringArray=function(e){var t,n,r=this.getArray(e),i=new Array(r.length)
for(t=0;t<r.length;t++)n=r[t],i[t]=this.getString(n)
return i},r.prototype.getArray=function(e){return this.arrays[e]},r.prototype.resolveHandle=function(e){var t,r=this.resolved[e]
return r===n&&(t=this.handles[e],r=this.resolved[e]=this.resolver.resolve(t)),r},r.prototype.getSerializable=function(e){return JSON.parse(this.strings[e])},r}(i),a=function(e){function n(){var n=(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))
return n.others=[],n.serializables=[],n}return(0,t.inherits)(n,e),n.prototype.serializable=function(e){var t=this.serializables.indexOf(e)
return t>-1?t:this.serializables.push(e)-1},n.prototype.getSerializable=function(e){return this.serializables[e]},n.prototype.getOther=function(e){return this.others[e-1]},n.prototype.other=function(e){return this.others.push(e)},n}(s),l=function(){function e(e){this.heap=e,this.offset=0}return(0,t.createClass)(e,[{key:"size",get:function(){return 1+((768&this.heap.getbyaddr(this.offset))>>8)}},{key:"isMachine",get:function(){return 1024&this.heap.getbyaddr(this.offset)}},{key:"type",get:function(){return 255&this.heap.getbyaddr(this.offset)}},{key:"op1",get:function(){return this.heap.getbyaddr(this.offset+1)}},{key:"op2",get:function(){return this.heap.getbyaddr(this.offset+2)}},{key:"op3",get:function(){return this.heap.getbyaddr(this.offset+3)}}]),e}()
function u(e,t,n){return e|t<<16|n<<30}function c(e,t){return e|t<<30}var p=1048576,d=function(){function e(e){var t,n,r
this.placeholders=[],this.offset=0,this.handle=0,this.capacity=p,e?(t=e.buffer,n=e.table,r=e.handle,this.heap=new Uint16Array(t),this.table=n,this.offset=this.heap.length,this.handle=r,this.capacity=0):(this.heap=new Uint16Array(p),this.table=[])}return e.prototype.push=function(e){this.sizeCheck(),this.heap[this.offset++]=e},e.prototype.sizeCheck=function(){var e
0===this.capacity&&(e=g(this.heap,0,this.offset),this.heap=new Uint16Array(e.length+p),this.heap.set(e,0),this.capacity=p),this.capacity--},e.prototype.getbyaddr=function(e){return this.heap[e]},e.prototype.setbyaddr=function(e,t){this.heap[e]=t},e.prototype.malloc=function(){this.table.push(this.offset,0)
var e=this.handle
return this.handle+=2,e},e.prototype.finishMalloc=function(e,t){var n=this.table[e],r=u(this.offset-n,t,0)
this.table[e+1]=r},e.prototype.size=function(){return this.offset},e.prototype.getaddr=function(e){return this.table[e]},e.prototype.gethandle=function(e){this.table.push(e,u(0,0,3))
var t=this.handle
return this.handle+=2,t},e.prototype.sizeof=function(){return-1},e.prototype.scopesizeof=function(e){return(1073676288&this.table[e+1])>>16},e.prototype.free=function(e){var t=this.table[e+1]
this.table[e+1]=c(t,1)},e.prototype.compact=function(){var e,t,n,r,i,o,s=0,a=this.table,l=this.table.length,u=this.heap
for(e=0;e<l;e+=2)if(t=a[e],r=65535&(n=a[e+1]),2!==(i=-1&n))if(1===i)a[e+1]=c(n,2),s+=r
else if(0===i){for(o=t;o<=e+r;o++)u[o-s]=u[o]
a[e]=t-s}else 3===i&&(a[e]=t-s)
this.offset=this.offset-s},e.prototype.pushPlaceholder=function(e){this.sizeCheck()
var t=this.offset++
this.heap[t]=65535,this.placeholders.push([t,e])},e.prototype.patchPlaceholders=function(){var e,t,n,r,i=this.placeholders
for(e=0;e<i.length;e++)n=(t=i[e])[0],r=t[1],this.setbyaddr(n,r())},e.prototype.capture=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.offset
this.patchPlaceholders()
var t=g(this.heap,0,e).buffer
return{handle:this.handle,table:this.table,buffer:t}},e}(),f=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new d
this.constants=e,this.heap=t,this._opcode=new l(this.heap)}return e.prototype.opcode=function(e){return this._opcode.offset=e,this._opcode},e}(),h=function(){function e(e,t){this.constants=e,this.heap=t,this._opcode=new l(this.heap)}return e.hydrate=function(t,n,r){var i=new d(t)
return new e(new o(r,n),i)},e.prototype.opcode=function(e){return this._opcode.offset=e,this._opcode},e}(),m=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n}(f)
function g(e,t,n){if(void 0!==e.slice)return e.slice(t,n)
for(var r=new Uint16Array(n);t<n;t++)r[t]=e[t]
return r}e.WriteOnlyConstants=i,e.RuntimeConstants=o,e.Constants=s,e.LazyConstants=a,e.Heap=d,e.WriteOnlyProgram=f,e.RuntimeProgram=h,e.Program=m,e.Opcode=l}),e("@glimmer/reference",["exports","ember-babel","@glimmer/util"],function(e,t,n){"use strict"
e.isModified=e.ReferenceCache=e.map=e.CachedReference=e.UpdatableTag=e.CachedTag=e.combine=e.combineSlice=e.combineTagged=e.DirtyableTag=e.bump=e.isConstTag=e.isConst=e.CURRENT_TAG=e.VOLATILE_TAG=e.CONSTANT_TAG=e.TagWrapper=e.RevisionTag=e.VOLATILE=e.INITIAL=e.CONSTANT=e.IteratorSynchronizer=e.ReferenceIterator=e.IterationArtifacts=e.ListItem=e.ConstReference=void 0
var r=1,i=function(){function e(){}return e.prototype.validate=function(e){return this.value()===e},e}()
i.id=0
var o=[],s=[],a=function(){function e(e,t){this.type=e,this.inner=t}return e.prototype.value=function(){return(0,o[this.type])(this.inner)},e.prototype.validate=function(e){return(0,s[this.type])(this.inner,e)},e}()
function l(e){var t=o.length
o.push(function(e){return e.value()}),s.push(function(e,t){return e.validate(t)}),e.id=t}o.push(function(){return 0}),s.push(function(e,t){return 0===t})
var u=new a(0,null)
o.push(function(){return NaN}),s.push(function(e,t){return NaN===t})
var c=new a(1,null)
o.push(function(){return d}),s.push(function(e,t){return t===d})
var p=new a(2,null),d=r,f=function(e){function n(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,r=(0,t.possibleConstructorReturn)(this,e.call(this))
return r.revision=n,r}return(0,t.inherits)(n,e),n.create=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d
return new a(this.id,new n(e))},n.prototype.value=function(){return this.revision},n.prototype.dirty=function(){this.revision=++d},n}(i)
function h(e){switch(e.length){case 0:return u
case 1:return e[0]
case 2:return g.create(e[0],e[1])
default:return v.create(e)}}l(f)
var m=function(e){function n(){var n=(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))
return n.lastChecked=null,n.lastValue=null,n}return(0,t.inherits)(n,e),n.prototype.value=function(){var e=this.lastChecked
this.lastValue
return e!==d&&(this.lastChecked=d,this.lastValue=this.compute()),this.lastValue},n.prototype.invalidate=function(){this.lastChecked=null},n}(i),g=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.first=n,i.second=r,i}return(0,t.inherits)(n,e),n.create=function(e,t){return new a(this.id,new n(e,t))},n.prototype.compute=function(){return Math.max(this.first.value(),this.second.value())},n}(m)
l(g)
var v=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this))
return r.tags=n,r}return(0,t.inherits)(n,e),n.create=function(e){return new a(this.id,new n(e))},n.prototype.compute=function(){var e,t,n=this.tags,r=-1
for(e=0;e<n.length;e++)t=n[e].value(),r=Math.max(t,r)
return r},n}(m)
l(v)
var b=function(e){function n(n){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.tag=n,i.lastUpdated=r,i}return(0,t.inherits)(n,e),n.create=function(e){return new a(this.id,new n(e))},n.prototype.compute=function(){return Math.max(this.lastUpdated,this.tag.value())},n.prototype.update=function(e){e!==this.tag&&(this.tag=e,this.lastUpdated=d,this.invalidate())},n}(m)
l(b)
var y,E=function(){function e(){this.lastRevision=null,this.lastValue=null}return e.prototype.value=function(){var e=this.tag,t=this.lastRevision,n=this.lastValue
return null!==t&&e.validate(t)||(n=this.lastValue=this.compute(),this.lastRevision=e.value()),n},e.prototype.invalidate=function(){this.lastRevision=null},e}(),T=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.tag=n.tag,i.reference=n,i.mapper=r,i}return(0,t.inherits)(n,e),n.prototype.compute=function(){var e=this.reference
return(0,this.mapper)(e.value())},n}(E),_=function(){function e(e){this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=e.tag,this.reference=e}return e.prototype.peek=function(){return this.initialized?this.lastValue:this.initialize()},e.prototype.revalidate=function(){if(!this.initialized)return this.initialize()
var e=this.reference,t=this.lastRevision,n=e.tag
if(n.validate(t))return A
this.lastRevision=n.value()
var r=this.lastValue,i=e.value()
return i===r?A:(this.lastValue=i,i)},e.prototype.initialize=function(){var e=this.reference,t=this.lastValue=e.value()
return this.lastRevision=e.tag.value(),this.initialized=!0,t},e}(),A="adb3b78e-3d22-4e4b-877a-6317c2c5c145",C=function(){function e(e){this.inner=e,this.tag=u}return e.prototype.value=function(){return this.inner},e}(),S=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this,n.valueReferenceFor(r)))
return i.retained=!1,i.seen=!1,i.key=r.key,i.iterable=n,i.memo=n.memoReferenceFor(r),i}return(0,t.inherits)(n,e),n.prototype.update=function(e){this.retained=!0,this.iterable.updateValueReference(this.value,e),this.iterable.updateMemoReference(this.memo,e)},n.prototype.shouldRemove=function(){return!this.retained},n.prototype.reset=function(){this.retained=!1,this.seen=!1},n}(n.ListNode),w=function(){function e(e){this.iterator=null,this.map=(0,n.dict)(),this.list=new n.LinkedList,this.tag=e.tag,this.iterable=e}return e.prototype.isEmpty=function(){return(this.iterator=this.iterable.iterate()).isEmpty()},e.prototype.iterate=function(){var e=void 0
return e=null===this.iterator?this.iterable.iterate():this.iterator,this.iterator=null,e},e.prototype.has=function(e){return!!this.map[e]},e.prototype.get=function(e){return this.map[e]},e.prototype.wasSeen=function(e){var t=this.map[e]
return void 0!==t&&t.seen},e.prototype.append=function(e){var t=this.map,n=this.list,r=this.iterable,i=t[e.key]=new S(r,e)
return n.append(i),i},e.prototype.insertBefore=function(e,t){var n=this.map,r=this.list,i=this.iterable,o=n[e.key]=new S(i,e)
return o.retained=!0,r.insertBefore(o,t),o},e.prototype.move=function(e,t){var n=this.list
e.retained=!0,n.remove(e),n.insertBefore(e,t)},e.prototype.remove=function(e){this.list.remove(e),delete this.map[e.key]},e.prototype.nextNode=function(e){return this.list.nextNode(e)},e.prototype.head=function(){return this.list.head()},e}(),R=function(){function e(e){this.iterator=null
var t=new w(e)
this.artifacts=t}return e.prototype.next=function(){var e=this.artifacts,t=(this.iterator=this.iterator||e.iterate()).next()
return null===t?null:e.append(t)},e}();(function(e){e[e.Append=0]="Append",e[e.Prune=1]="Prune",e[e.Done=2]="Done"})(y||(y={}))
var x=function(){function e(e){var t=e.target,n=e.artifacts
this.target=t,this.artifacts=n,this.iterator=n.iterate(),this.current=n.head()}return e.prototype.sync=function(){for(var e=y.Append;;)switch(e){case y.Append:e=this.nextAppend()
break
case y.Prune:e=this.nextPrune()
break
case y.Done:return void this.nextDone()}},e.prototype.advanceToKey=function(e){for(var t=this.current,n=this.artifacts,r=t;null!==r&&r.key!==e;)r.seen=!0,r=n.nextNode(r)
null!==r&&(this.current=n.nextNode(r))},e.prototype.nextAppend=function(){var e=this.iterator,t=this.current,n=this.artifacts,r=e.next()
if(null===r)return this.startPrune()
var i=r.key
return null!==t&&t.key===i?this.nextRetain(r):n.has(i)?this.nextMove(r):this.nextInsert(r),y.Append},e.prototype.nextRetain=function(e){var t=this.artifacts,n=this.current;(n=n).update(e),this.current=t.nextNode(n),this.target.retain(e.key,n.value,n.memo)},e.prototype.nextMove=function(e){var t=this.current,n=this.artifacts,r=this.target,i=e.key,o=n.get(e.key)
o.update(e),n.wasSeen(e.key)?(n.move(o,t),r.move(o.key,o.value,o.memo,t?t.key:null)):this.advanceToKey(i)},e.prototype.nextInsert=function(e){var t=this.artifacts,n=this.target,r=this.current,i=t.insertBefore(e,r)
n.insert(i.key,i.value,i.memo,r?r.key:null)},e.prototype.startPrune=function(){return this.current=this.artifacts.head(),y.Prune},e.prototype.nextPrune=function(){var e=this.artifacts,t=this.target,n=this.current
if(null===n)return y.Done
var r=n
return this.current=e.nextNode(r),r.shouldRemove()?(e.remove(r),t.delete(r.key)):r.reset(),y.Prune},e.prototype.nextDone=function(){this.target.done()},e}()
e.ConstReference=C,e.ListItem=S,e.IterationArtifacts=w,e.ReferenceIterator=R,e.IteratorSynchronizer=x,e.CONSTANT=0,e.INITIAL=r,e.VOLATILE=NaN,e.RevisionTag=i,e.TagWrapper=a,e.CONSTANT_TAG=u,e.VOLATILE_TAG=c,e.CURRENT_TAG=p,e.isConst=function(e){return e.tag===u},e.isConstTag=function(e){return e===u},e.bump=function(){d++},e.DirtyableTag=f,e.combineTagged=function(e){var t,n,r,i=[]
for(t=0,n=e.length;t<n;t++){if((r=e[t].tag)===c)return c
r!==u&&i.push(r)}return h(i)},e.combineSlice=function(e){for(var t,n=[],r=e.head();null!==r;){if((t=r.tag)===c)return c
t!==u&&n.push(t),r=e.nextNode(r)}return h(n)},e.combine=function(e){var t,n,r,i=[]
for(t=0,n=e.length;t<n;t++){if((r=e[t])===c)return c
r!==u&&i.push(r)}return h(i)},e.CachedTag=m,e.UpdatableTag=b,e.CachedReference=E,e.map=function(e,t){return new T(e,t)},e.ReferenceCache=_,e.isModified=function(e){return e!==A}}),e("@glimmer/runtime",["exports","ember-babel","@glimmer/util","@glimmer/vm","@glimmer/reference","@glimmer/low-level"],function(e,t,n,r,i,o){"use strict"
e.hasCapability=e.capabilityFlagsFrom=e.Cursor=e.ConcreteBounds=e.RehydrateBuilder=e.rehydrationBuilder=e.clientBuilder=e.NewElementBuilder=e.normalizeProperty=e.insertHTMLBefore=e.isWhitespace=e.DOMTreeConstruction=e.IDOMChanges=e.SVG_NAMESPACE=e.DOMChanges=e.ARGS=e.curry=e.isCurriedComponentDefinition=e.CurriedComponentDefinition=e.MINIMAL_CAPABILITIES=e.DEFAULT_CAPABILITIES=e.DefaultEnvironment=e.Environment=e.Scope=e.EMPTY_ARGS=e.DynamicAttribute=e.SimpleDynamicAttribute=e.RenderResult=e.UpdatingVM=e.LowLevelVM=e.getDynamicVar=e.resetDebuggerCallback=e.setDebuggerCallback=e.ConditionalReference=e.PrimitiveReference=e.UNDEFINED_REFERENCE=e.NULL_REFERENCE=e.renderMain=void 0
var s=new(function(){function e(){this.evaluateOpcode=(0,n.fillNulls)(82).slice()}return e.prototype.add=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"syscall"
this.evaluateOpcode[e]={syscall:"syscall"===n,evaluate:t}},e.prototype.debugBefore=function(){return{sp:void 0,state:void 0}},e.prototype.debugAfter=function(e,t,n,r){r.sp,r.state},e.prototype.evaluate=function(e,t,n){var r=this.evaluateOpcode[n]
r.syscall?r.evaluate(e,t):r.evaluate(e.inner,t)},e}()),a=function(e){function n(){var n=(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))
return n.next=null,n.prev=null,n}return(0,t.inherits)(n,e),n}(function(){(0,n.initializeGuid)(this)}),l=function(e){function n(n){return(0,t.possibleConstructorReturn)(this,e.call(this,n))}return(0,t.inherits)(n,e),n.create=function(e){return void 0===e?p:null===e?d:!0===e?f:!1===e?h:"number"==typeof e?new c(e):new u(e)},n.prototype.get=function(){return p},n}(i.ConstReference),u=function(e){function n(){var n=(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))
return n.lengthReference=null,n}return(0,t.inherits)(n,e),n.prototype.get=function(t){var n
return"length"===t?(null===(n=this.lengthReference)&&(n=this.lengthReference=new c(this.inner.length)),n):e.prototype.get.call(this,t)},n}(l),c=function(e){function n(n){return(0,t.possibleConstructorReturn)(this,e.call(this,n))}return(0,t.inherits)(n,e),n}(l),p=new c(void 0),d=new c(null),f=new c(!0),h=new c(!1),m=function(){function e(e){this.inner=e,this.tag=e.tag}return e.prototype.value=function(){return this.toBool(this.inner.value())},e.prototype.toBool=function(e){return!!e},e}(),g=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this))
return r.parts=n,r.tag=(0,i.combineTagged)(n),r}return(0,t.inherits)(n,e),n.prototype.compute=function(){var e,t,n=new Array
for(e=0;e<this.parts.length;e++)null!==(t=this.parts[e].value())&&void 0!==t&&(n[e]=v(t))
return n.length>0?n.join(""):null},n}(i.CachedReference)
function v(e){return"function"!=typeof e.toString?"":String(e)}s.add(1,function(e,t){var n=t.op1,i=e.stack,o=e.constants.resolveHandle(n)(e,i.pop())
e.loadValue(r.Register.v0,o)}),s.add(4,function(e,t){var n=t.op1,r=e.referenceForSymbol(n)
e.stack.push(r)}),s.add(2,function(e,t){var n=t.op1,r=e.stack.pop()
e.scope().bindSymbol(n,r)}),s.add(3,function(e,t){var n=t.op1,r=e.stack.pop(),i=e.stack.pop(),o=e.stack.pop(),s=o?[r,i,o]:null
e.scope().bindBlock(n,s)}),s.add(80,function(e,t){var n=t.op1,r=e.constants.getString(n),i=e.scope().getPartialMap()[r]
void 0===i&&(i=e.getSelf().get(r)),e.stack.push(i)}),s.add(17,function(e,t){var n=t.op1,r=t.op2
e.pushRootScope(n,!!r)}),s.add(5,function(e,t){var n=t.op1,r=e.constants.getString(n),i=e.stack.pop()
e.stack.push(i.get(r))}),s.add(6,function(e,t){var n=t.op1,r=e.stack,i=e.scope().getBlock(n)
i?(r.push(i[2]),r.push(i[1]),r.push(i[0])):(r.push(null),r.push(null),r.push(null))}),s.add(7,function(e,t){var n=t.op1,r=!!e.scope().getBlock(n)
e.stack.push(r?f:h)}),s.add(8,function(e){e.stack.pop(),e.stack.pop()
var t=e.stack.pop(),n=t&&t.parameters.length
e.stack.push(n?f:h)}),s.add(9,function(e,t){var n,r=t.op1,i=new Array(r)
for(n=r;n>0;n--)i[n-1]=e.stack.pop()
e.stack.push(new g(i))})
var b=function(){function e(){this.stack=null,this.positional=new y,this.named=new T,this.blocks=new A}return e.prototype.setup=function(e,t,n,r,i){this.stack=e
var o=this.named,s=t.length,a=e.sp-s+1
o.setup(e,a,s,t,i)
var l=a-r
this.positional.setup(e,l,r)
var u=this.blocks,c=n.length
u.setup(e,l-3*c,c,n)},e.prototype.at=function(e){return this.positional.at(e)},e.prototype.realloc=function(e){var t,n,r,i,o
if(e>0){for(t=this.positional,n=this.named,r=this.stack,i=t.base+e,o=t.length+n.length-1;o>=0;o--)r.copy(o+t.base,o+i)
t.base+=e,n.base+=e,r.sp+=e}},e.prototype.capture=function(){var e=0===this.positional.length?w:this.positional.capture(),t=0===this.named.length?S:this.named.capture()
return{tag:this.tag,length:this.length,positional:e,named:t}},e.prototype.clear=function(){var e=this.stack,t=this.length
e.pop(t)},(0,t.createClass)(e,[{key:"tag",get:function(){return(0,i.combineTagged)([this.positional,this.named])}},{key:"base",get:function(){return this.blocks.base}},{key:"length",get:function(){return this.positional.length+this.named.length+3*this.blocks.length}}]),e}(),y=function(){function e(){this.base=0,this.length=0,this.stack=null,this._tag=null,this._references=null}return e.prototype.setup=function(e,t,r){this.stack=e,this.base=t,this.length=r,0===r?(this._tag=i.CONSTANT_TAG,this._references=n.EMPTY_ARRAY):(this._tag=null,this._references=null)},e.prototype.at=function(e){var t=this.base,n=this.length,r=this.stack
return e<0||e>=n?p:r.get(e,t)},e.prototype.capture=function(){return new E(this.tag,this.references)},e.prototype.prepend=function(e){var t,n,r,i,o=e.length
if(o>0){for(t=this.base,n=this.length,r=this.stack,this.base=t-=o,this.length=n+o,i=0;i<o;i++)r.set(e.at(i),i,t)
this._tag=null,this._references=null}},(0,t.createClass)(e,[{key:"tag",get:function(){var e=this._tag
return e||(e=this._tag=(0,i.combineTagged)(this.references)),e}},{key:"references",get:function(){var e,t,n,r=this._references
return r||(e=this.stack,t=this.base,n=this.length,r=this._references=e.sliceArray(t,t+n)),r}}]),e}(),E=function(){function e(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length
this.tag=e,this.references=t,this.length=n}return e.empty=function(){return new e(i.CONSTANT_TAG,n.EMPTY_ARRAY,0)},e.prototype.at=function(e){return this.references[e]},e.prototype.value=function(){return this.references.map(this.valueOf)},e.prototype.get=function(e){var t,n=this.references,r=this.length
return"length"===e?l.create(r):(t=parseInt(e,10))<0||t>=r?p:n[t]},e.prototype.valueOf=function(e){return e.value()},e}(),T=function(){function e(){this.base=0,this.length=0,this._references=null,this._names=n.EMPTY_ARRAY,this._atNames=n.EMPTY_ARRAY}return e.prototype.setup=function(e,t,r,i,o){this.stack=e,this.base=t,this.length=r,0===r?(this._references=n.EMPTY_ARRAY,this._names=n.EMPTY_ARRAY,this._atNames=n.EMPTY_ARRAY):(this._references=null,o?(this._names=i,this._atNames=null):(this._names=null,this._atNames=i))},e.prototype.has=function(e){return-1!==this.names.indexOf(e)},e.prototype.get=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.base,r=this.stack,i=(t?this.names:this.atNames).indexOf(e)
return-1===i?p:r.get(i,n)},e.prototype.capture=function(){return new _(this.tag,this.names,this.references)},e.prototype.merge=function(e){var t,n,r,i,o,s,a=e.length
if(a>0){for(t=this.names,n=this.length,r=this.stack,i=e.names,Object.isFrozen(t)&&0===t.length&&(t=[]),o=0;o<a;o++)s=i[o],-1===t.indexOf(s)&&(n=t.push(s),r.push(e.references[o]))
this.length=n,this._references=null,this._names=t,this._atNames=null}},e.prototype.toSyntheticName=function(e){return e.slice(1)},e.prototype.toAtName=function(e){return"@"+e},(0,t.createClass)(e,[{key:"tag",get:function(){return(0,i.combineTagged)(this.references)}},{key:"names",get:function(){var e=this._names
return e||(e=this._names=this._atNames.map(this.toSyntheticName)),e}},{key:"atNames",get:function(){var e=this._atNames
return e||(e=this._atNames=this._names.map(this.toAtName)),e}},{key:"references",get:function(){var e,t,n,r=this._references
return r||(e=this.base,t=this.length,n=this.stack,r=this._references=n.sliceArray(e,e+t)),r}}]),e}(),_=function(){function e(e,t,n){this.tag=e,this.names=t,this.references=n,this.length=t.length,this._map=null}return e.prototype.has=function(e){return-1!==this.names.indexOf(e)},e.prototype.get=function(e){var t=this.names,n=this.references,r=t.indexOf(e)
return-1===r?p:n[r]},e.prototype.value=function(){var e,t=this.names,r=this.references,i=(0,n.dict)()
for(e=0;e<t.length;e++)i[t[e]]=r[e].value()
return i},(0,t.createClass)(e,[{key:"map",get:function(){var e,t,r,i=this._map
if(!i)for(e=this.names,t=this.references,i=this._map=(0,n.dict)(),r=0;r<e.length;r++)i[e[r]]=t[r]
return i}}]),e}(),A=function(){function e(){this.internalValues=null,this.internalTag=null,this.names=n.EMPTY_ARRAY,this.length=0,this.base=0}return e.prototype.setup=function(e,t,r,o){this.stack=e,this.names=o,this.base=t,this.length=r,0===r?(this.internalTag=i.CONSTANT_TAG,this.internalValues=n.EMPTY_ARRAY):(this.internalTag=null,this.internalValues=null)},e.prototype.has=function(e){return-1!==this.names.indexOf(e)},e.prototype.get=function(e){var t=this.base,n=this.stack,r=this.names,i=r.indexOf(e)
if(-1===r.indexOf(e))return null
var o=n.get(3*i,t),s=n.get(3*i+1,t),a=n.get(3*i+2,t)
return null===a?null:[a,s,o]},e.prototype.capture=function(){return new C(this.names,this.values)},(0,t.createClass)(e,[{key:"values",get:function(){var e,t,n,r=this.internalValues
return r||(e=this.base,t=this.length,n=this.stack,r=this.internalValues=n.sliceArray(e,e+3*t)),r}}]),e}(),C=function(){function e(e,t){this.names=e,this.values=t,this.length=e.length}return e.prototype.has=function(e){return-1!==this.names.indexOf(e)},e.prototype.get=function(e){var t=this.names.indexOf(e)
return-1===t?null:[this.values[3*t+2],this.values[3*t+1],this.values[3*t]]},e}(),S=new _(i.CONSTANT_TAG,n.EMPTY_ARRAY,n.EMPTY_ARRAY),w=new E(i.CONSTANT_TAG,n.EMPTY_ARRAY),R={tag:i.CONSTANT_TAG,length:0,positional:w,named:S},x="CURRIED COMPONENT DEFINITION [id=6f00feb9-a0ef-4547-99ea-ac328f80acea]"
function O(e){return!(!e||!e[x])}var N=function(){function e(e,t){this.inner=e,this.args=t,this[x]=!0}return e.prototype.unwrap=function(e){e.realloc(this.offset)
for(var t,n,r,i=this;;){if(n=(t=i).args,r=t.inner,n&&(e.positional.prepend(n.positional),e.named.merge(n.named)),!O(r))return r
i=r}},(0,t.createClass)(e,[{key:"offset",get:function(){var e=this.inner,t=this.args,n=t?t.positional.length:0
return O(e)?n+e.offset:n}}]),e}(),L=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.create=function(e){return new n(e)},n.prototype.toBool=function(e){return O(e)},n}(m)
s.add(24,function(e){var t=e.stack.pop(),n=e.fetchValue(r.Register.t0),o=t.value(),s=void 0
s=n?e.elements().appendTrustingDynamicContent(o):e.elements().appendCautiousDynamicContent(o),(0,i.isConst)(t)||e.updateWith(new k(t,s)),e.loadValue(r.Register.t0,null)})
var k=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.reference=n,i.content=r,i.tag=n.tag,i}return(0,t.inherits)(n,e),n.prototype.evaluate=function(e){var t=this.content,n=this.reference
t.update(e.env,n.value())},n}(a)
s.add(18,function(e){return e.pushChildScope()}),s.add(19,function(e){return e.popScope()}),s.add(36,function(e){return e.pushDynamicScope()}),s.add(37,function(e){return e.popDynamicScope()}),s.add(10,function(e,t){var n=t.op1
e.stack.push(e.constants.getOther(n))}),s.add(11,function(e,t){var n=t.op1,r=e.stack,i=n>>3
switch(7&n){case 0:r.push(i)
break
case 1:r.push(e.constants.getNumber(i))
break
case 2:r.push(e.constants.getString(i))
break
case 3:r.pushEncodedImmediate(n)
break
case 4:case 5:r.push(e.constants.getNumber(i))}}),s.add(12,function(e){var t=e.stack
t.push(l.create(t.pop()))}),s.add(13,function(e,t){var n=t.op1,r=t.op2,i=e.fetchValue(n)-r
e.stack.dup(i)}),s.add(14,function(e,t){var n=t.op1
e.stack.pop(n)}),s.add(15,function(e,t){var n=t.op1
e.load(n)}),s.add(16,function(e,t){var n=t.op1
e.fetch(n)}),s.add(35,function(e,t){var n=t.op1,r=e.constants.getArray(n)
e.bindDynamicScope(r)}),s.add(49,function(e,t){var n=t.op1
e.enter(n)}),s.add(50,function(e){e.exit()}),s.add(40,function(e,t){var n=t.op1
e.stack.push(e.constants.getSerializable(n))}),s.add(39,function(e){e.stack.push(e.scope())}),s.add(38,function(e){var t=e.stack,n=t.pop()
n?t.pushSmi(n.compile()):t.pushNull()}),s.add(43,function(e){var t,n,r,i=e.stack,o=i.pop(),s=i.pop(),a=i.pop(),l=i.pop()
if(null===a)return e.pushFrame(),void e.pushScope(s)
var u=s
if((n=(t=a.parameters).length)>0)for(u=u.child(),r=0;r<n;r++)u.bindSymbol(t[r],l.at(r))
e.pushFrame(),e.pushScope(u),e.call(o)}),s.add(45,function(e,t){var n,r=t.op1,o=e.stack.pop();(0,i.isConst)(o)?o.value()&&e.goto(r):((n=new i.ReferenceCache(o)).peek()&&e.goto(r),e.updateWith(new I(n)))}),s.add(46,function(e,t){var n,r=t.op1,o=e.stack.pop();(0,i.isConst)(o)?o.value()||e.goto(r):((n=new i.ReferenceCache(o)).peek()||e.goto(r),e.updateWith(new I(n)))}),s.add(51,function(e){var t=e.env,n=e.stack
n.push(t.toConditionalReference(n.pop()))})
var I=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this))
return r.type="assert",r.tag=n.tag,r.cache=n,r}return(0,t.inherits)(n,e),n.prototype.evaluate=function(e){var t=this.cache;(0,i.isModified)(t.revalidate())&&e.throw()},n}(a),D=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.target=r,i.type="jump-if-not-modified",i.tag=n,i.lastRevision=n.value(),i}return(0,t.inherits)(n,e),n.prototype.evaluate=function(e){var t=this.tag,n=this.target,r=this.lastRevision
!e.alwaysRevalidate&&t.validate(r)&&e.goto(n)},n.prototype.didModify=function(){this.lastRevision=this.tag.value()},n}(a),P=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this))
return r.target=n,r.type="did-modify",r.tag=i.CONSTANT_TAG,r}return(0,t.inherits)(n,e),n.prototype.evaluate=function(){this.target.didModify()},n}(a),M=function(){function e(e){this.tag=i.CONSTANT_TAG,this.type="label",this.label=null,this.prev=null,this.next=null,(0,n.initializeGuid)(this),this.label=e}return e.prototype.evaluate=function(){},e.prototype.inspect=function(){return this.label+" ["+this._guid+"]"},e}()
s.add(22,function(e,t){var n=t.op1
e.elements().appendText(e.constants.getString(n))}),s.add(23,function(e,t){var n=t.op1
e.elements().appendComment(e.constants.getString(n))}),s.add(25,function(e,t){var n=t.op1
e.elements().openElement(e.constants.getString(n))}),s.add(26,function(e){var t=e.stack.pop().value()
e.elements().openElement(t)}),s.add(33,function(e){var t,n,r=e.stack.pop(),o=e.stack.pop(),s=void 0,a=void 0,l=e.stack.pop().value();(0,i.isConst)(r)?s=r.value():(s=(t=new i.ReferenceCache(r)).peek(),e.updateWith(new I(t))),(0,i.isConst)(o)?a=o.value():(a=(n=new i.ReferenceCache(o)).peek(),e.updateWith(new I(n))),e.elements().pushRemoteElement(s,l,a)}),s.add(34,function(e){e.elements().popRemoteElement()}),s.add(30,function(e){var t=e.fetchValue(r.Register.t0)
t&&(t.flush(e),e.loadValue(r.Register.t0,null)),e.elements().flushElement()}),s.add(31,function(e){e.elements().closeElement()}),s.add(32,function(e,t){var n=t.op1,r=e.constants.resolveHandle(n),o=e.stack.pop(),s=e.elements(),a=s.constructing,l=s.updateOperations,u=e.dynamicScope(),c=r.create(a,o,u,l)
e.env.scheduleInstallModifier(c,r)
var p=r.getDestructor(c)
p&&e.newDestroyable(p)
var d=r.getTag(c);(0,i.isConstTag)(d)||e.updateWith(new F(d,r,c))})
var F=function(e){function n(n,r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this))
return o.tag=n,o.manager=r,o.modifier=i,o.type="update-modifier",o.lastUpdated=n.value(),o}return(0,t.inherits)(n,e),n.prototype.evaluate=function(e){var t=this.manager,n=this.modifier,r=this.tag,i=this.lastUpdated
r.validate(i)||(e.env.scheduleUpdateModifier(n,t),this.lastUpdated=r.value())},n}(a)
s.add(27,function(e,t){var n=t.op1,r=t.op2,i=t.op3,o=e.constants.getString(n),s=e.constants.getString(r),a=i?e.constants.getString(i):null
e.elements().setStaticAttribute(o,s,a)}),s.add(28,function(e,t){var n=t.op1,r=t.op2,o=t.op3,s=e.constants.getString(n),a=e.stack.pop(),l=a.value(),u=o?e.constants.getString(o):null,c=e.elements().setDynamicAttribute(s,l,!!r,u);(0,i.isConst)(a)||e.updateWith(new j(a,c))})
var j=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.reference=n,i.attribute=r,i.type="patch-element",i.tag=n.tag,i.lastRevision=i.tag.value(),i}return(0,t.inherits)(n,e),n.prototype.evaluate=function(e){var t=this.attribute,n=this.reference,r=this.tag
r.validate(this.lastRevision)||(this.lastRevision=r.value(),t.update(n.value(),e.env))},n}(a)
function B(e,t,n){return e.lookupComponent(t,n)}var H=function(){function e(e,t,n,r){this.inner=e,this.resolver=t,this.meta=n,this.args=r,this.tag=e.tag,this.lastValue=null,this.lastDefinition=null}return e.prototype.value=function(){var e=this.inner,t=this.lastValue,n=e.value()
if(n===t)return this.lastDefinition
var r=null
return O(n)?r=n:"string"==typeof n&&n&&(r=B(this.resolver,n,this.meta)),r=this.curry(r),this.lastValue=n,this.lastDefinition=r,r},e.prototype.get=function(){return p},e.prototype.curry=function(e){var t=this.args
return!t&&O(e)?e:e?new N(e,t):null},e}()
function $(e){return U(e)?"":String(e)}function U(e){return null===e||void 0===e||"function"!=typeof e.toString}function W(e){return"object"==typeof e&&null!==e&&"function"==typeof e.toHTML}function z(e){return"object"==typeof e&&null!==e&&"number"==typeof e.nodeType}function K(e){return z(e)&&11===e.nodeType}function q(e){return"string"==typeof e}var V=function(){function e(e){this.list=e,this.tag=(0,i.combineTagged)(e),this.list=e}return e.prototype.value=function(){var e,t,n=[],r=this.list
for(t=0;t<r.length;t++)(e=$(r[t].value()))&&n.push(e)
return 0===n.length?null:n.join(" ")},e}()
function G(e){return 0|(e.dynamicLayout?1:0)|(e.dynamicTag?2:0)|(e.prepareArgs?4:0)|(e.createArgs?8:0)|(e.attributeHook?16:0)|(e.elementHook?32:0)}function Y(e,t){return!!(e&t)}var Q=new b
s.add(57,function(e){var t=e.stack,n=t.pop()
t.push(L.create(n))}),s.add(58,function(e,t){var n=t.op1,i=e.stack,o=i.pop(),s=i.pop(),a=e.constants.getSerializable(n),l=e.constants.resolver
e.loadValue(r.Register.v0,new H(o,l,a,s))}),s.add(59,function(e,t){var n=t.op1,r=e.constants.resolveHandle(n),i=r.manager,o=G(i.getCapabilities(r.state))
e.stack.push({definition:r,manager:i,capabilities:o,state:null,handle:null,table:null})}),s.add(62,function(e,t){var i=t.op1,o=e.stack,s=o.pop().value(),a=e.constants.getSerializable(i)
e.loadValue(r.Register.t1,null)
var l=void 0
if("string"==typeof s)l=B(e.constants.resolver,s,a)
else{if(!O(s))throw(0,n.unreachable)()
l=s}o.push(l)}),s.add(60,function(e){var t=e.stack,n=t.pop(),r=void 0,i=void 0
O(n)?i=r=null:r=G((i=n.manager).getCapabilities(n.state)),t.push({definition:n,capabilities:r,manager:i,state:null,handle:null,table:null})}),s.add(61,function(e,t){t.op1
var r=e.stack,i=r.pop().value(),o=void 0
if(!O(i))throw(0,n.unreachable)()
o=i,r.push(o)}),s.add(63,function(e,t){var n=t.op1,r=t.op2,i=e.stack,o=e.constants.getStringArray(n),s=[]
4&r&&s.push("main"),2&r&&s.push("else"),1&r&&s.push("attrs"),Q.setup(i,o,s,r>>4,!!(8&r)),i.push(Q)}),s.add(66,function(e){var t=e.stack,n=t.pop().capture()
t.push(n)}),s.add(65,function(e,t){var n,r,i,o,s,a,l,u=t.op1,c=e.stack,p=e.fetchValue(u),d=c.pop(),f=p.definition
O(f)&&(f=function(e,t,n){var r=e.definition=t.unwrap(n),i=r.manager,o=r.state
return e.manager=i,e.capabilities=G(i.getCapabilities(o)),r}(p,f,d))
var h=f,m=h.manager,g=h.state
if(!0===Y(p.capabilities,4)){var v=d.blocks.values,b=d.blocks.names,y=m.prepareArgs(g,d)
if(y){for(d.clear(),n=0;n<v.length;n++)c.push(v[n])
for(r=y.positional,i=y.named,o=r.length,s=0;s<o;s++)c.push(r[s])
for(a=Object.keys(i),l=0;l<a.length;l++)c.push(i[a[l]])
d.setup(c,a,b,o,!0)}c.push(d)}else c.push(d)}),s.add(67,function(e,t){var n=t.op1,r=t.op2,o=e.dynamicScope(),s=e.fetchValue(r),a=s.definition,l=s.manager,u=null
Y(s.capabilities=G(l.getCapabilities(a.state)),8)&&(u=e.stack.peek())
var c=l.create(e.env,a.state,u,o,e.getSelf(),!!(1&n))
s.state=c
var p=l.getTag(c);(0,i.isConstTag)(p)||e.updateWith(new J(p,c,l,o))}),s.add(68,function(e,t){var n=t.op1,r=e.fetchValue(n),i=r.manager,o=r.state,s=i.getDestructor(o)
s&&e.newDestroyable(s)}),s.add(75,function(e){e.beginCacheGroup(),e.elements().pushSimpleBlock()}),s.add(69,function(e){e.loadValue(r.Register.t0,new X)}),s.add(29,function(e,t){var n=t.op1,i=t.op2,o=t.op3,s=e.constants.getString(n),a=e.stack.pop(),l=o?e.constants.getString(o):null
e.fetchValue(r.Register.t0).setAttribute(s,a,!!i,l)})
var X=function(){function e(){this.attributes=(0,n.dict)(),this.classes=[]}return e.prototype.setAttribute=function(e,t,n,r){"class"===e&&this.classes.push(t),this.attributes[e]={value:t,namespace:r,trusting:n}},e.prototype.flush=function(e){var t,n,r,o
for(var s in this.attributes){var a=(t=this.attributes[s]).value,l=t.namespace,u=t.trusting
"class"===s&&(a=new V(this.classes)),"type"!==s&&(n=e.elements().setDynamicAttribute(s,a.value(),u,l),(0,i.isConst)(a)||e.updateWith(new j(a,n)))}"type"in this.attributes&&(a=(r=this.attributes.type).value,l=r.namespace,u=r.trusting,o=e.elements().setDynamicAttribute("type",a.value(),u,l),(0,i.isConst)(a)||e.updateWith(new j(a,o)))},e}()
s.add(77,function(e,t){var n=t.op1,i=e.fetchValue(n),o=i.definition,s=i.state,a=o.manager,l=e.fetchValue(r.Register.t0)
a.didCreateElement(s,e.elements().expectConstructing("DidCreateElementOpcode#evaluate"),l)}),s.add(70,function(e,t){var n=t.op1,r=e.fetchValue(n),i=r.definition,o=r.state,s=i.manager
e.stack.push(s.getSelf(o))}),s.add(71,function(e,t){var n=t.op1,r=e.fetchValue(n),i=r.definition,o=r.state,s=i.manager
e.stack.push(s.getTagName(o))}),s.add(72,function(e,t){var r=t.op1,i=e.fetchValue(r),o=i.manager,s=i.definition,a=e.constants.resolver,l=e.stack,u=i.state,c=i.capabilities,p=s.state,d=void 0
if(function(e){return!1===Y(e,1)}(c))d=o.getLayout(p,a)
else{if(!function(e){return!0===Y(e,1)}(c))throw(0,n.unreachable)()
d=o.getDynamicLayout(u,a)}l.push(d.symbolTable),l.push(d.handle)}),s.add(56,function(e,t){var n=t.op1,r=e.stack.pop(),i=e.stack.pop(),o=r.manager,s={definition:r,manager:o,capabilities:G(o.getCapabilities(r.state)),state:null,handle:i.handle,table:i.symbolTable}
e.loadValue(n,s)}),s.add(73,function(e,t){var n=t.op1,r=e.stack,i=r.pop(),o=r.pop(),s=e.fetchValue(n)
s.handle=i,s.table=o}),s.add(74,function(e,t){var r,i,o,s,a,l,u,c,p,d,f,h=t.op1,m=e.stack,g=e.fetchValue(h),v=g.handle,b=g.table,y=b.symbols,E=b.hasEval
for(r=m.pop(),(i=e.pushRootScope(y.length+1,!0)).bindSelf(r),o=e.stack.pop(),s=null,E&&(s=(0,n.dict)()),l=(a=o.named.atNames).length-1;l>=0;l--)u=a[l],c=y.indexOf(a[l]),p=o.named.get(u,!1),-1!==c&&i.bindSymbol(c+1,p),E&&(s[u]=p)
d=function(e,t){var n=y.indexOf(e),r=f.get(t);-1!==n&&i.bindBlock(n+1,r),s&&(s[e]=r)},f=o.blocks,d("&attrs","attrs"),d("&inverse","else"),d("&default","main"),s&&i.bindEvalScope(s),e.call(v)}),s.add(78,function(e,t){var n=t.op1,r=e.fetchValue(n),i=r.manager,o=r.state,s=e.elements().popBlock()
i.didRenderLayout(o,s),e.env.didCreate(o,i),e.updateWith(new Z(i,o,s))}),s.add(76,function(e){e.commitCacheGroup()})
var J=function(e){function n(n,r,i,o){var s=(0,t.possibleConstructorReturn)(this,e.call(this))
return s.tag=n,s.component=r,s.manager=i,s.dynamicScope=o,s.type="update-component",s}return(0,t.inherits)(n,e),n.prototype.evaluate=function(){var e=this.component,t=this.manager,n=this.dynamicScope
t.update(e,n)},n}(a),Z=function(e){function n(n,r,o){var s=(0,t.possibleConstructorReturn)(this,e.call(this))
return s.manager=n,s.component=r,s.bounds=o,s.type="did-update-layout",s.tag=i.CONSTANT_TAG,s}return(0,t.inherits)(n,e),n.prototype.evaluate=function(e){var t=this.manager,n=this.component,r=this.bounds
t.didUpdateLayout(n,r),e.env.didUpdate(n,t)},n}(a)
function ee(e,t){console.info("Use `context`, and `get(<path>)` to debug this template."),t("this")}var te=ee,ne=function(){function e(e,t,r){var i,o,s,a
for(this.scope=e,this.locals=(0,n.dict)(),i=0;i<r.length;i++)s=t[(o=r[i])-1],a=e.getSymbol(o),this.locals[s]=a}return e.prototype.get=function(e){var t=this.scope,n=this.locals,r=e.split("."),i=e.split("."),o=i[0],s=i.slice(1),a=t.getEvalScope(),l=void 0
return"this"===o?l=t.getSelf():n[o]?l=n[o]:0===o.indexOf("@")&&a[o]?l=a[o]:(l=this.scope.getSelf(),s=r),s.reduce(function(e,t){return e.get(t)},l)},e}()
s.add(81,function(e,t){var n=t.op1,r=t.op2,i=e.constants.getStringArray(n),o=e.constants.getArray(r),s=new ne(e.scope(),i,o)
te(e.getSelf().value(),function(e){return s.get(e).value()})}),s.add(79,function(e,t){var n,r,i,o,s,a,l,u,c,p,d,f,h=t.op1,m=t.op2,g=t.op3,v=e.constants,b=e.constants.resolver,y=e.stack.pop().value(),E=v.getSerializable(h),T=v.getStringArray(m),_=v.getArray(g),A=b.lookupPartial(y,E),C=b.resolve(A).getPartial(),S=C.symbolTable,w=C.handle
for(n=S.symbols,r=e.scope(),i=e.pushRootScope(n.length,!1),o=r.getEvalScope(),i.bindCallerScope(r.getCallerScope()),i.bindEvalScope(o),i.bindSelf(r.getSelf()),s=Object.create(r.getPartialMap()),a=0;a<_.length;a++)u=T[(l=_[a])-1],c=r.getSymbol(l),s[u]=c
if(o)for(p=0;p<n.length;p++)d=p+1,void 0!==(f=o[n[p]])&&i.bind(d,f)
i.bindPartialMap(s),e.pushFrame(),e.call(w)})
var re=function(){function e(e){this.tag=e.tag,this.artifacts=e}return e.prototype.value=function(){return!this.artifacts.isEmpty()},e}()
s.add(54,function(e){var t=e.stack,n=t.pop(),r=t.pop(),o=e.env.iterableFor(n,r.value()),s=new i.ReferenceIterator(o)
t.push(s),t.push(new re(s.artifacts))}),s.add(52,function(e,t){var n=t.op1
e.enterList(n)}),s.add(53,function(e){e.exitList()}),s.add(55,function(e,t){var n,r=t.op1,i=e.stack.peek().next()
i?(n=e.iterate(i.memo,i.value),e.enterItem(i.key,n)):e.goto(r)})
var ie=function(e,t){this.element=e,this.nextSibling=t},oe=function(){function e(e,t,n){this.parentNode=e,this.first=t,this.last=n}return e.prototype.parentElement=function(){return this.parentNode},e.prototype.firstNode=function(){return this.first},e.prototype.lastNode=function(){return this.last},e}(),se=function(){function e(e,t){this.parentNode=e,this.node=t}return e.prototype.parentElement=function(){return this.parentNode},e.prototype.firstNode=function(){return this.node},e.prototype.lastNode=function(){return this.node},e}()
function ae(e,t,n){return new oe(e,t,n)}function le(e,t){return new se(e,t)}function ue(e,t){for(var n,r=e.parentElement(),i=e.firstNode(),o=e.lastNode(),s=i;s;){if(n=s.nextSibling,r.insertBefore(s,t),s===o)return n
s=n}return null}function ce(e){for(var t,n=e.parentElement(),r=e.firstNode(),i=e.lastNode(),o=r;o;){if(t=o.nextSibling,n.removeChild(o),o===i)return t
o=t}return null}function pe(e,n,r){if(!e)return n
if(!function(e,t){var n=e.createElementNS(t,"svg")
try{n.insertAdjacentHTML("beforeend","<circle></circle>")}catch(e){}finally{return 1!==n.childNodes.length||"http://www.w3.org/2000/svg"!==n.firstChild.namespaceURI}}(e,r))return n
var i=e.createElement("div")
return function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.insertHTMLBefore=function(t,n,o){return null===o||""===o?e.prototype.insertHTMLBefore.call(this,t,n,o):t.namespaceURI!==r?e.prototype.insertHTMLBefore.call(this,t,n,o):function(e,t,n,r){t.innerHTML="<svg>"+n+"</svg>"
var i=function(e,t,n){var r=e.firstChild,i=null,o=r
for(;o;)i=o,o=o.nextSibling,t.insertBefore(i,n)
return[r,i]}(t.firstChild,e,r),o=i[0],s=i[1]
return new oe(e,o,s)}(t,i,o,n)},n}(n)}function de(e,n){return e&&function(e){var t=e.createElement("div")
if(t.innerHTML="first",t.insertAdjacentHTML("beforeend","second"),2===t.childNodes.length)return!1
return!0}(e)?function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.uselessComment=n.createComment(""),r}return(0,t.inherits)(n,e),n.prototype.insertHTMLBefore=function(t,n,r){if(null===r)return e.prototype.insertHTMLBefore.call(this,t,n,r)
var i=!1,o=n?n.previousSibling:t.lastChild
o&&o instanceof Text&&(i=!0,t.insertBefore(this.uselessComment,n))
var s=e.prototype.insertHTMLBefore.call(this,t,n,r)
return i&&t.removeChild(this.uselessComment),s},n}(n):n}var fe="http://www.w3.org/2000/svg",he={foreignObject:1,desc:1,title:1},me=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(function(e){return me[e]=1})
var ge=/[\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/,ve="undefined"==typeof document?null:document
var be,ye=function(){function e(e){this.document=e,this.setupUselessElement()}return e.prototype.setupUselessElement=function(){this.uselessElement=this.document.createElement("div")},e.prototype.createElement=function(e,t){var n=void 0,r=void 0
if(t?(n=t.namespaceURI===fe||"svg"===e,r=he[t.tagName]):(n="svg"===e,r=!1),n&&!r){if(me[e])throw new Error("Cannot create a "+e+" inside an SVG context")
return this.document.createElementNS(fe,e)}return this.document.createElement(e)},e.prototype.insertBefore=function(e,t,n){e.insertBefore(t,n)},e.prototype.insertHTMLBefore=function(e,t,n){return Te(this.uselessElement,e,t,n)},e.prototype.createTextNode=function(e){return this.document.createTextNode(e)},e.prototype.createComment=function(e){return this.document.createComment(e)},e}();(function(e){var n=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.createElementNS=function(e,t){return this.document.createElementNS(e,t)},n.prototype.setAttribute=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
r?e.setAttributeNS(r,t,n):e.setAttribute(t,n)},n}(ye)
e.TreeConstruction=n
var r=n
r=de(ve,r),r=pe(ve,r,fe),e.DOMTreeConstruction=r})(be||(be={}))
var Ee=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.document=n,r.namespace=null,r}return(0,t.inherits)(n,e),n.prototype.setAttribute=function(e,t,n){e.setAttribute(t,n)},n.prototype.removeAttribute=function(e,t){e.removeAttribute(t)},n.prototype.insertAfter=function(e,t,n){this.insertBefore(e,t,n.nextSibling)},n}(ye)
function Te(e,t,n,r){var i=t,o=n,s=o?o.previousSibling:i.lastChild,a=void 0
if(null===r||""===r)return new oe(i,null,null)
null===o?(i.insertAdjacentHTML("beforeend",r),a=i.lastChild):o instanceof HTMLElement?(o.insertAdjacentHTML("beforebegin",r),a=o.previousSibling):(i.insertBefore(e,o),e.insertAdjacentHTML("beforebegin",r),a=e.previousSibling,i.removeChild(e))
var l=s?s.nextSibling:i.firstChild
return new oe(i,l,a)}var _e=Ee
_e=de(ve,_e)
var Ae=_e=pe(ve,_e,fe),Ce=be.DOMTreeConstruction,Se=["javascript:","vbscript:"],we=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],Re=["EMBED"],xe=["href","src","background","action"],Oe=["src"]
function Ne(e,t){return-1!==e.indexOf(t)}function Le(e,t){return(null===e||Ne(we,e))&&Ne(xe,t)}function ke(e,t){return null!==e&&(Ne(Re,e)&&Ne(Oe,t))}function Ie(e,t){return Le(e,t)||ke(e,t)}function De(e,t,n,r){var i,o=null
if(null===r||void 0===r)return r
if(W(r))return r.toHTML()
o=t?t.tagName.toUpperCase():null
var s=$(r)
return Le(o,n)&&(i=e.protocolForURL(s),Ne(Se,i))?"unsafe:"+s:ke(o,n)?"unsafe:"+s:s}function Pe(e,t){var n,r,i,o,s=void 0,a=void 0
return t in e?(a=t,s="prop"):(n=t.toLowerCase())in e?(s="prop",a=n):(s="attr",a=t),"prop"===s&&("style"===a.toLowerCase()||(r=e.tagName,i=a,(o=Me[r.toUpperCase()])&&o[i.toLowerCase()]))&&(s="attr"),{normalized:a,type:s}}var Me={INPUT:{form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0},BUTTON:{form:!0}}
function Fe(e,t,n){var r=e.tagName,i={element:e,name:t,namespace:n}
if(e.namespaceURI===fe)return je(r,t,i)
var o=Pe(e,t),s=o.type,a=o.normalized
return"attr"===s?je(r,a,i):function(e,t,n){if(Ie(e,t))return new Ue(t,n)
if(function(e,t){return("INPUT"===e||"TEXTAREA"===e)&&"value"===t}(e,t))return new ze(t,n)
if(function(e,t){return"OPTION"===e&&"selected"===t}(e,t))return new Ke(t,n)
return new $e(t,n)}(r,a,i)}function je(e,t,n){return Ie(e,t)?new We(n):new He(n)}var Be=function(e){this.attribute=e},He=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.set=function(e,t){var n,r,i,o=qe(t)
null!==o&&(r=(n=this.attribute).name,i=n.namespace,e.__setAttribute(r,o,i))},n.prototype.update=function(e){var t=qe(e),n=this.attribute,r=n.element,i=n.name
null===t?r.removeAttribute(i):r.setAttribute(i,t)},n}(Be),$e=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this,r))
return i.normalizedName=n,i}return(0,t.inherits)(n,e),n.prototype.set=function(e,t){null!==t&&void 0!==t&&(this.value=t,e.__setProperty(this.normalizedName,t))},n.prototype.update=function(e){var t=this.attribute.element
this.value!==e&&(t[this.normalizedName]=this.value=e,null!==e&&void 0!==e||this.removeAttribute())},n.prototype.removeAttribute=function(){var e=this.attribute,t=e.element,n=e.namespace
n?t.removeAttributeNS(n,this.normalizedName):t.removeAttribute(this.normalizedName)},n}(Be),Ue=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.set=function(t,n,r){var i=this.attribute,o=De(r,i.element,i.name,n)
e.prototype.set.call(this,t,o,r)},n.prototype.update=function(t,n){var r=this.attribute,i=De(n,r.element,r.name,t)
e.prototype.update.call(this,i,n)},n}($e),We=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.set=function(t,n,r){var i=this.attribute,o=De(r,i.element,i.name,n)
e.prototype.set.call(this,t,o,r)},n.prototype.update=function(t,n){var r=this.attribute,i=De(n,r.element,r.name,t)
e.prototype.update.call(this,i,n)},n}(He),ze=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.set=function(e,t){e.__setProperty("value",$(t))},n.prototype.update=function(e){var t=this.attribute.element,n=t.value,r=$(e)
n!==r&&(t.value=r)},n}($e),Ke=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.set=function(e,t){null!==t&&void 0!==t&&!1!==t&&e.__setProperty("selected",!0)},n.prototype.update=function(e){var t=this.attribute.element
t.selected=!!e},n}($e)
function qe(e){return!1===e||void 0===e||null===e||void 0===e.toString?null:!0===e?"":"function"==typeof e?null:String(e)}var Ve=function(){function e(e,t,n,r){this.slots=e,this.callerScope=t,this.evalScope=n,this.partialMap=r}return e.root=function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=new Array(r+1)
for(n=0;n<=r;n++)i[n]=p
return new e(i,null,null,null).init({self:t})},e.sized=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=new Array(n+1)
for(t=0;t<=n;t++)r[t]=p
return new e(r,null,null,null)},e.prototype.init=function(e){var t=e.self
return this.slots[0]=t,this},e.prototype.getSelf=function(){return this.get(0)},e.prototype.getSymbol=function(e){return this.get(e)},e.prototype.getBlock=function(e){return this.get(e)},e.prototype.getEvalScope=function(){return this.evalScope},e.prototype.getPartialMap=function(){return this.partialMap},e.prototype.bind=function(e,t){this.set(e,t)},e.prototype.bindSelf=function(e){this.set(0,e)},e.prototype.bindSymbol=function(e,t){this.set(e,t)},e.prototype.bindBlock=function(e,t){this.set(e,t)},e.prototype.bindEvalScope=function(e){this.evalScope=e},e.prototype.bindPartialMap=function(e){this.partialMap=e},e.prototype.bindCallerScope=function(e){this.callerScope=e},e.prototype.getCallerScope=function(){return this.callerScope},e.prototype.child=function(){return new e(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)},e.prototype.get=function(e){if(e>=this.slots.length)throw new RangeError("BUG: cannot get $"+e+" from scope; length="+this.slots.length)
return this.slots[e]},e.prototype.set=function(e,t){if(e>=this.slots.length)throw new RangeError("BUG: cannot get $"+e+" from scope; length="+this.slots.length)
this.slots[e]=t},e}(),Ge=function(){function e(){this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}return e.prototype.didCreate=function(e,t){this.createdComponents.push(e),this.createdManagers.push(t)},e.prototype.didUpdate=function(e,t){this.updatedComponents.push(e),this.updatedManagers.push(t)},e.prototype.scheduleInstallModifier=function(e,t){this.scheduledInstallManagers.push(t),this.scheduledInstallModifiers.push(e)},e.prototype.scheduleUpdateModifier=function(e,t){this.scheduledUpdateModifierManagers.push(t),this.scheduledUpdateModifiers.push(e)},e.prototype.didDestroy=function(e){this.destructors.push(e)},e.prototype.commit=function(){var e,t,n,r,i,o,s,a,l,u,c,p=this.createdComponents,d=this.createdManagers
for(e=0;e<p.length;e++)t=p[e],d[e].didCreate(t)
var f=this.updatedComponents,h=this.updatedManagers
for(n=0;n<f.length;n++)r=f[n],h[n].didUpdate(r)
var m=this.destructors
for(i=0;i<m.length;i++)m[i].destroy()
var g=this.scheduledInstallManagers,v=this.scheduledInstallModifiers
for(o=0;o<g.length;o++)s=g[o],a=v[o],s.install(a)
var b=this.scheduledUpdateModifierManagers,y=this.scheduledUpdateModifiers
for(l=0;l<b.length;l++)u=b[l],c=y[l],u.update(c)},e}(),Ye=function(){function e(e){var t=e.appendOperations,n=e.updateOperations
this._transaction=null,this.appendOperations=t,this.updateOperations=n}return e.prototype.toConditionalReference=function(e){return new m(e)},e.prototype.getAppendOperations=function(){return this.appendOperations},e.prototype.getDOM=function(){return this.updateOperations},e.prototype.begin=function(){this._transaction=new Ge},e.prototype.didCreate=function(e,t){this.transaction.didCreate(e,t)},e.prototype.didUpdate=function(e,t){this.transaction.didUpdate(e,t)},e.prototype.scheduleInstallModifier=function(e,t){this.transaction.scheduleInstallModifier(e,t)},e.prototype.scheduleUpdateModifier=function(e,t){this.transaction.scheduleUpdateModifier(e,t)},e.prototype.didDestroy=function(e){this.transaction.didDestroy(e)},e.prototype.commit=function(){var e=this.transaction
this._transaction=null,e.commit()},e.prototype.attributeFor=function(e,t){return Fe(e,t,arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)},(0,t.createClass)(e,[{key:"transaction",get:function(){return this._transaction}}]),e}(),Qe=function(e){function n(n){var r
return n||(r=window.document,n={appendOperations:new Ce(r),updateOperations:new Ee(r)}),(0,t.possibleConstructorReturn)(this,e.call(this,n))}return(0,t.inherits)(n,e),n}(Ye),Xe=function(){function e(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:-1
this.stack=e,this.heap=t,this.program=n,this.externs=r,this.pc=i,this.ra=o,this.currentOpSize=0}return e.prototype.pushFrame=function(){this.stack.pushSmi(this.ra),this.stack.pushSmi(this.stack.fp),this.stack.fp=this.stack.sp-1},e.prototype.popFrame=function(){this.stack.sp=this.stack.fp-1,this.ra=this.stack.getSmi(0),this.stack.fp=this.stack.getSmi(1)},e.prototype.goto=function(e){var t=this.pc+e-this.currentOpSize
this.pc=t},e.prototype.call=function(e){this.ra=this.pc,this.pc=this.heap.getaddr(e)},e.prototype.returnTo=function(e){var t=this.pc+e-this.currentOpSize
this.ra=t},e.prototype.return=function(){this.pc=this.ra},e.prototype.nextStatement=function(){var e=this.pc,t=this.program
if(-1===e)return null
var n=this.program.opcode(e).size,r=this.currentOpSize=n
return this.pc+=r,t.opcode(e)},e.prototype.evaluateOuter=function(e,t){this.evaluateInner(e,t)},e.prototype.evaluateInner=function(e,t){e.isMachine?this.evaluateMachine(e):this.evaluateSyscall(e,t)},e.prototype.evaluateMachine=function(e){switch(e.type){case 47:return this.pushFrame()
case 48:return this.popFrame()
case 42:return this.call(e.op1)
case 41:return this.call(this.stack.popSmi())
case 44:return this.goto(e.op1)
case 20:return this.return()
case 21:return this.returnTo(e.op1)}},e.prototype.evaluateSyscall=function(e,t){s.evaluate(t,e,e.type)},e}(),Je=function(){function e(e){this.trusting=e}return e.prototype.retry=function(e,t){var n=this.bounds,r=n.parentElement(),i=ce(n),o=st.forInitialRender(e,{element:r,nextSibling:i})
return this.trusting?o.__appendTrustingDynamicContent(t):o.__appendCautiousDynamicContent(t)},e}(),Ze=function(){function e(e){this.inner=e,this.bounds=e.bounds}return e.prototype.parentElement=function(){return this.bounds.parentElement()},e.prototype.firstNode=function(){return this.bounds.firstNode()},e.prototype.lastNode=function(){return this.bounds.lastNode()},e.prototype.update=function(e,t){var n=this.inner=this.inner.update(e,t)
return this.bounds=n.bounds,this},e}(),et=function(e){function n(n,r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this,i))
return o.bounds=n,o.lastValue=r,o}return(0,t.inherits)(n,e),n.prototype.update=function(e,t){var n=this.lastValue
if(t===n)return this
if(z(t)||W(t))return this.retry(e,t)
var r=void 0
return(r=U(t)?"":q(t)?t:String(t))!==n&&(this.bounds.firstNode().nodeValue=this.lastValue=r),this},n}(Je),tt=function(e){function n(n,r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this,i))
return o.bounds=n,o.lastValue=r,o}return(0,t.inherits)(n,e),n.prototype.update=function(e,t){return t===this.lastValue?this:this.retry(e,t)},n}(Je),nt=function(e){function n(n,r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this,i))
return o.bounds=n,o.lastValue=r,o}return(0,t.inherits)(n,e),n.prototype.update=function(e,t){var n=this.lastValue
return t===n?this:W(t)&&t.toHTML()===n.toHTML()?(this.lastValue=t,this):this.retry(e,t)},n}(Je),rt=function(e){function n(n,r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this,i))
return o.bounds=n,o.lastValue=r,o}return(0,t.inherits)(n,e),n.prototype.update=function(e,t){var n=this.lastValue
return t===n?this:function(e){return U(e)?"":q(e)?e:W(e)?e.toHTML():z(e)?e:String(e)}(t)===n?this:this.retry(e,t)},n}(Je),it=function(){function e(e){this.node=e}return e.prototype.firstNode=function(){return this.node},e}(),ot=function(){function e(e){this.node=e}return e.prototype.lastNode=function(){return this.node},e}(),st=function(){function e(e,t,r){this.constructing=null,this.operations=null,this.cursorStack=new n.Stack,this.blockStack=new n.Stack,this.pushElement(t,r),this.env=e,this.dom=e.getAppendOperations(),this.updateOperations=e.getDOM()}return e.forInitialRender=function(e,t){var n=new this(e,t.element,t.nextSibling)
return n.pushSimpleBlock(),n},e.resume=function(e,t,n){var r=new this(e,t.parentElement(),n)
return r.pushSimpleBlock(),r.pushBlockTracker(t),r},e.prototype.expectConstructing=function(){return this.constructing},e.prototype.block=function(){return this.blockStack.current},e.prototype.popElement=function(){this.cursorStack.pop(),this.cursorStack.current},e.prototype.pushSimpleBlock=function(){return this.pushBlockTracker(new at(this.element))},e.prototype.pushUpdatableBlock=function(){return this.pushBlockTracker(new ut(this.element))},e.prototype.pushBlockList=function(e){return this.pushBlockTracker(new ct(this.element,e))},e.prototype.pushBlockTracker=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.blockStack.current
return null!==n&&(n.newDestroyable(e),t||n.didAppendBounds(e)),this.__openBlock(),this.blockStack.push(e),e},e.prototype.popBlock=function(){return this.block().finalize(this),this.__closeBlock(),this.blockStack.pop()},e.prototype.__openBlock=function(){},e.prototype.__closeBlock=function(){},e.prototype.openElement=function(e){var t=this.__openElement(e)
return this.constructing=t,t},e.prototype.__openElement=function(e){return this.dom.createElement(e,this.element)},e.prototype.flushElement=function(){var e=this.element,t=this.constructing
this.__flushElement(e,t),this.constructing=null,this.operations=null,this.pushElement(t,null),this.didOpenElement(t)},e.prototype.__flushElement=function(e,t){this.dom.insertBefore(e,t,this.nextSibling)},e.prototype.closeElement=function(){this.willCloseElement(),this.popElement()},e.prototype.pushRemoteElement=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
this.__pushRemoteElement(e,t,n)},e.prototype.__pushRemoteElement=function(e,t,n){this.pushElement(e,n)
var r=new lt(e)
this.pushBlockTracker(r,!0)},e.prototype.popRemoteElement=function(){this.popBlock(),this.popElement()},e.prototype.pushElement=function(e,t){this.cursorStack.push(new ie(e,t))},e.prototype.didAddDestroyable=function(e){this.block().newDestroyable(e)},e.prototype.didAppendBounds=function(e){return this.block().didAppendBounds(e),e},e.prototype.didAppendNode=function(e){return this.block().didAppendNode(e),e},e.prototype.didOpenElement=function(e){return this.block().openElement(e),e},e.prototype.willCloseElement=function(){this.block().closeElement()},e.prototype.appendText=function(e){return this.didAppendNode(this.__appendText(e))},e.prototype.__appendText=function(e){var t=this.dom,n=this.element,r=this.nextSibling,i=t.createTextNode(e)
return t.insertBefore(n,i,r),i},e.prototype.__appendNode=function(e){return this.dom.insertBefore(this.element,e,this.nextSibling),e},e.prototype.__appendFragment=function(e){var t,n=e.firstChild
return n?(t=ae(this.element,n,e.lastChild),this.dom.insertBefore(this.element,e,this.nextSibling),t):le(this.element,this.__appendComment(""))},e.prototype.__appendHTML=function(e){return this.dom.insertHTMLBefore(this.element,this.nextSibling,e)},e.prototype.appendTrustingDynamicContent=function(e){var t=new Ze(this.__appendTrustingDynamicContent(e))
return this.didAppendBounds(t),t},e.prototype.__appendTrustingDynamicContent=function(e){var t,n
return q(e)?this.trustedContent(e):U(e)?this.trustedContent(""):W(e)?this.trustedContent(e.toHTML()):K(e)?(t=this.__appendFragment(e),new tt(t,e,!0)):z(e)?(n=this.__appendNode(e),new tt(le(this.element,n),n,!0)):this.trustedContent(String(e))},e.prototype.appendCautiousDynamicContent=function(e){var t=new Ze(this.__appendCautiousDynamicContent(e))
return this.didAppendBounds(t.bounds),t},e.prototype.__appendCautiousDynamicContent=function(e){var t,n,r,i
return q(e)?this.untrustedContent(e):U(e)?this.untrustedContent(""):K(e)?(t=this.__appendFragment(e),new tt(t,e,!1)):z(e)?(n=this.__appendNode(e),new tt(le(this.element,n),n,!1)):W(e)?(r=e.toHTML(),i=this.__appendHTML(r),new nt(i,e,!1)):this.untrustedContent(String(e))},e.prototype.trustedContent=function(e){var t=this.__appendHTML(e)
return new rt(t,e,!0)},e.prototype.untrustedContent=function(e){var t=this.__appendText(e),n=le(this.element,t)
return new et(n,e,!1)},e.prototype.appendComment=function(e){return this.didAppendNode(this.__appendComment(e))},e.prototype.__appendComment=function(e){var t=this.dom,n=this.element,r=this.nextSibling,i=t.createComment(e)
return t.insertBefore(n,i,r),i},e.prototype.__setAttribute=function(e,t,n){this.dom.setAttribute(this.constructing,e,t,n)},e.prototype.__setProperty=function(e,t){this.constructing[e]=t},e.prototype.setStaticAttribute=function(e,t,n){this.__setAttribute(e,t,n)},e.prototype.setDynamicAttribute=function(e,t,n,r){var i=this.constructing,o=this.env.attributeFor(i,e,n,r)
return o.set(this,t,this.env),o},(0,t.createClass)(e,[{key:"element",get:function(){return this.cursorStack.current.element}},{key:"nextSibling",get:function(){return this.cursorStack.current.nextSibling}}]),e}(),at=function(){function e(e){this.parent=e,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}return e.prototype.destroy=function(){var e,t=this.destroyables
if(t&&t.length)for(e=0;e<t.length;e++)t[e].destroy()},e.prototype.parentElement=function(){return this.parent},e.prototype.firstNode=function(){return this.first&&this.first.firstNode()},e.prototype.lastNode=function(){return this.last&&this.last.lastNode()},e.prototype.openElement=function(e){this.didAppendNode(e),this.nesting++},e.prototype.closeElement=function(){this.nesting--},e.prototype.didAppendNode=function(e){0===this.nesting&&(this.first||(this.first=new it(e)),this.last=new ot(e))},e.prototype.didAppendBounds=function(e){0===this.nesting&&(this.first||(this.first=e),this.last=e)},e.prototype.newDestroyable=function(e){this.destroyables=this.destroyables||[],this.destroyables.push(e)},e.prototype.finalize=function(e){this.first||e.appendComment("")},e}(),lt=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.destroy=function(){e.prototype.destroy.call(this),ce(this)},n}(at),ut=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.reset=function(e){var t,n=this.destroyables
if(n&&n.length)for(t=0;t<n.length;t++)e.didDestroy(n[t])
var r=ce(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,r},n}(at),ct=function(){function e(e,t){this.parent=e,this.boundList=t,this.parent=e,this.boundList=t}return e.prototype.destroy=function(){this.boundList.forEachNode(function(e){return e.destroy()})},e.prototype.parentElement=function(){return this.parent},e.prototype.firstNode=function(){var e=this.boundList.head()
return e&&e.firstNode()},e.prototype.lastNode=function(){var e=this.boundList.tail()
return e&&e.lastNode()},e.prototype.openElement=function(){},e.prototype.closeElement=function(){},e.prototype.didAppendNode=function(){},e.prototype.didAppendBounds=function(){},e.prototype.newDestroyable=function(){},e.prototype.finalize=function(){},e}(),pt=2147483648,dt=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new o.Stack,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
this.inner=e,this.js=t}return e.prototype.slice=function(t,n){return new e("number"==typeof t&&"number"==typeof n?this.inner.slice(t,n):"number"==typeof t&&void 0===n?this.inner.sliceFrom(t):this.inner.clone(),this.js.slice(t,n))},e.prototype.sliceInner=function(e,t){var n,r=[]
for(n=e;n<t;n++)r.push(this.get(n))
return r},e.prototype.copy=function(e,t){this.inner.copy(e,t)},e.prototype.write=function(e,t){var n
!function(e){if(null===e||void 0===e)return!0
switch(typeof e){case"boolean":case"undefined":return!0
case"number":return e%1==0&&!(Math.abs(e)>pt)
default:return!1}}(t)?(n=this.js.length,this.js.push(t),this.inner.writeRaw(e,n|pt)):this.inner.writeRaw(e,ht(t))},e.prototype.writeSmi=function(e,t){this.inner.writeSmi(e,t)},e.prototype.writeImmediate=function(e,t){this.inner.writeRaw(e,t)},e.prototype.get=function(e){var t=this.inner.getRaw(e)
return t&pt?this.js[2147483647&t]:function(e){switch(e){case 3:return!1
case 11:return!0
case 19:return null
case 27:return
default:return function(e){switch(7&e){case 0:return e>>3
case 4:return-(e>>3)
default:throw(0,n.unreachable)()}}(e)}}(t)},e.prototype.getSmi=function(e){return this.inner.getSmi(e)},e.prototype.reset=function(){this.inner.reset()},(0,t.createClass)(e,[{key:"length",get:function(){return this.inner.len()}}]),e}(),ft=function(){function e(e,t,n){this.stack=e,this.fp=t,this.sp=n}return e.empty=function(){return new this(new dt,0,-1)},e.restore=function(e){var t,n=new dt
for(t=0;t<e.length;t++)n.write(t,e[t])
return new this(n,0,e.length-1)},e.prototype.push=function(e){this.stack.write(++this.sp,e)},e.prototype.pushSmi=function(e){this.stack.writeSmi(++this.sp,e)},e.prototype.pushImmediate=function(e){this.stack.writeImmediate(++this.sp,ht(e))},e.prototype.pushEncodedImmediate=function(e){this.stack.writeImmediate(++this.sp,e)},e.prototype.pushNull=function(){this.stack.writeImmediate(++this.sp,19)},e.prototype.dup=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sp
this.stack.copy(e,++this.sp)},e.prototype.copy=function(e,t){this.stack.copy(e,t)},e.prototype.pop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.stack.get(this.sp)
return this.sp-=e,t},e.prototype.popSmi=function(){return this.stack.getSmi(this.sp--)},e.prototype.peek=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return this.stack.get(this.sp-e)},e.prototype.peekSmi=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return this.stack.getSmi(this.sp-e)},e.prototype.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.fp
return this.stack.get(t+e)},e.prototype.getSmi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.fp
return this.stack.getSmi(t+e)},e.prototype.set=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.fp
this.stack.write(n+t,e)},e.prototype.slice=function(e,t){return this.stack.slice(e,t)},e.prototype.sliceArray=function(e,t){return this.stack.sliceInner(e,t)},e.prototype.capture=function(e){var t=this.sp+1
return this.stack.sliceInner(t-e,t)},e.prototype.reset=function(){this.stack.reset()},e.prototype.toArray=function(){return this.stack.sliceInner(this.fp,this.sp+1)},e}()
function ht(e){switch(typeof e){case"number":return function(e){return e<0?Math.abs(e)<<3|4:e<<3|0}(e)
case"boolean":return e?11:3
case"object":return 19
case"undefined":return 27
default:throw(0,n.unreachable)()}}var mt=function(){function e(e,t,r){var i=r.alwaysRevalidate,o=void 0!==i&&i
this.frameStack=new n.Stack,this.env=e,this.constants=t.constants,this.dom=e.getDOM(),this.alwaysRevalidate=o}return e.prototype.execute=function(e,t){var n,r=this.frameStack
for(this.try(e,t);!r.isEmpty();)null!==(n=this.frame.nextStatement())?n.evaluate(this):this.frameStack.pop()},e.prototype.goto=function(e){this.frame.goto(e)},e.prototype.try=function(e,t){this.frameStack.push(new Et(e,t))},e.prototype.throw=function(){this.frame.handleException(),this.frameStack.pop()},(0,t.createClass)(e,[{key:"frame",get:function(){return this.frameStack.current}}]),e}(),gt=function(e){function n(n,r,i,o){var s=(0,t.possibleConstructorReturn)(this,e.call(this))
return s.start=n,s.state=r,s.type="block",s.next=null,s.prev=null,s.children=o,s.bounds=i,s}return(0,t.inherits)(n,e),n.prototype.parentElement=function(){return this.bounds.parentElement()},n.prototype.firstNode=function(){return this.bounds.firstNode()},n.prototype.lastNode=function(){return this.bounds.lastNode()},n.prototype.evaluate=function(e){e.try(this.children,null)},n.prototype.destroy=function(){this.bounds.destroy()},n.prototype.didDestroy=function(){this.state.env.didDestroy(this.bounds)},n}(a),vt=function(e){function r(n,r,o,s){var a=(0,t.possibleConstructorReturn)(this,e.call(this,n,r,o,s))
return a.type="try",a.tag=a._tag=i.UpdatableTag.create(i.CONSTANT_TAG),a}return(0,t.inherits)(r,e),r.prototype.didInitializeChildren=function(){this._tag.inner.update((0,i.combineSlice)(this.children))},r.prototype.evaluate=function(e){e.try(this.children,this)},r.prototype.handleException=function(){var e=this,t=this.state,r=this.bounds,i=this.children,o=this.start,s=this.prev,a=this.next
i.clear()
var l=st.resume(t.env,r,r.reset(t.env)),u=_t.resume(t,l),c=new n.LinkedList
u.execute(o,function(n){n.stack=ft.restore(t.stack),n.updatingOpcodeStack.push(c),n.updateWith(e),n.updatingOpcodeStack.push(i)}),this.prev=s,this.next=a},r}(gt),bt=function(){function e(e,t){this.opcode=e,this.marker=t,this.didInsert=!1,this.didDelete=!1,this.map=e.map,this.updating=e.children}return e.prototype.insert=function(e,t,r,i){var o=this.map,s=this.opcode,a=this.updating,l=null,u=null
l=i?(u=o[i]).bounds.firstNode():this.marker
var c=s.vmForInsertion(l),p=null,d=s.start
c.execute(d,function(i){o[e]=p=i.iterate(r,t),i.updatingOpcodeStack.push(new n.LinkedList),i.updateWith(p),i.updatingOpcodeStack.push(p.children)}),a.insertBefore(p,u),this.didInsert=!0},e.prototype.retain=function(){},e.prototype.move=function(e,t,n,r){var i=this.map,o=this.updating,s=i[e],a=i[r]||null
ue(s,r?a.firstNode():this.marker),o.remove(s),o.insertBefore(s,a)},e.prototype.delete=function(e){var t=this.map,n=t[e]
n.didDestroy(),ce(n),this.updating.remove(n),delete t[e],this.didDelete=!0},e.prototype.done=function(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)},e}(),yt=function(e){function r(r,o,s,a,l){var u=(0,t.possibleConstructorReturn)(this,e.call(this,r,o,s,a))
u.type="list-block",u.map=(0,n.dict)(),u.lastIterated=i.INITIAL,u.artifacts=l
var c=u._tag=i.UpdatableTag.create(i.CONSTANT_TAG)
return u.tag=(0,i.combine)([l.tag,c]),u}return(0,t.inherits)(r,e),r.prototype.didInitializeChildren=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
this.lastIterated=this.artifacts.tag.value(),e&&this._tag.inner.update((0,i.combineSlice)(this.children))},r.prototype.evaluate=function(t){var n,r,o,s,a=this.artifacts,l=this.lastIterated
a.tag.validate(l)||(n=this.bounds,o=(r=t.dom).createComment(""),r.insertAfter(n.parentElement(),o,n.lastNode()),s=new bt(this,o),new i.IteratorSynchronizer({target:s,artifacts:a}).sync(),this.parentElement().removeChild(o)),e.prototype.evaluate.call(this,t)},r.prototype.vmForInsertion=function(e){var t=this.bounds,n=this.state,r=st.forInitialRender(n.env,{element:t.parentElement(),nextSibling:e})
return _t.resume(n,r)},r}(gt),Et=function(){function e(e,t){this.ops=e,this.exceptionHandler=t,this.current=e.head()}return e.prototype.goto=function(e){this.current=e},e.prototype.nextStatement=function(){var e=this.current,t=this.ops
return e&&(this.current=t.nextNode(e)),e},e.prototype.handleException=function(){this.exceptionHandler&&this.exceptionHandler.handleException()},e}(),Tt=function(){function e(e,t,n,r){this.env=e,this.program=t,this.updating=n,this.bounds=r}return e.prototype.rerender=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alwaysRevalidate:!1}).alwaysRevalidate,t=void 0!==e&&e,n=this.env,r=this.program,i=this.updating
new mt(n,r,{alwaysRevalidate:t}).execute(i,this)},e.prototype.parentElement=function(){return this.bounds.parentElement()},e.prototype.firstNode=function(){return this.bounds.firstNode()},e.prototype.lastNode=function(){return this.bounds.lastNode()},e.prototype.handleException=function(){throw"this should never happen"},e.prototype.destroy=function(){this.bounds.destroy(),ce(this.bounds)},e}(),_t=function(){function e(e,t,r,i,o){var a=this
this.program=e,this.env=t,this.elementStack=o,this.dynamicScopeStack=new n.Stack,this.scopeStack=new n.Stack,this.updatingOpcodeStack=new n.Stack,this.cacheGroups=new n.Stack,this.listBlockStack=new n.Stack,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.v0=null,this.env=t,this.heap=e.heap,this.constants=e.constants,this.elementStack=o,this.scopeStack.push(r),this.dynamicScopeStack.push(i),this.inner=new Xe(ft.empty(),this.heap,e,{debugBefore:function(e){return s.debugBefore(a,e,e.type)},debugAfter:function(e,t){s.debugAfter(a,e,e.type,t)}})}return e.prototype.fetch=function(e){this.stack.push(this[r.Register[e]])},e.prototype.load=function(e){this[r.Register[e]]=this.stack.pop()},e.prototype.fetchValue=function(e){return this[r.Register[e]]},e.prototype.loadValue=function(e,t){this[r.Register[e]]=t},e.prototype.pushFrame=function(){this.inner.pushFrame()},e.prototype.popFrame=function(){this.inner.popFrame()},e.prototype.goto=function(e){this.inner.goto(e)},e.prototype.call=function(e){this.inner.call(e)},e.prototype.returnTo=function(e){this.inner.returnTo(e)},e.prototype.return=function(){this.inner.return()},e.initial=function(t,r,i,o,s,a){var l=t.heap.scopesizeof(a),u=new e(t,r,Ve.root(i,l),o,s)
return u.pc=u.heap.getaddr(a),u.updatingOpcodeStack.push(new n.LinkedList),u},e.empty=function(t,r,i){var o={get:function(){return p},set:function(){return p},child:function(){return o}},s=new e(t,r,Ve.root(p,0),o,i)
return s.updatingOpcodeStack.push(new n.LinkedList),s},e.resume=function(t,n){return new e(t.program,t.env,t.scope,t.dynamicScope,n)},e.prototype.capture=function(e){return{env:this.env,program:this.program,dynamicScope:this.dynamicScope(),scope:this.scope(),stack:this.stack.capture(e)}},e.prototype.beginCacheGroup=function(){this.cacheGroups.push(this.updating().tail())},e.prototype.commitCacheGroup=function(){var e=new M("END"),t=this.updating(),r=this.cacheGroups.pop(),o=r?t.nextNode(r):t.head(),s=t.tail(),a=(0,i.combineSlice)(new n.ListSlice(o,s)),l=new D(a,e)
t.insertBefore(l,o),t.append(new P(l)),t.append(e)},e.prototype.enter=function(e){var t=new n.LinkedList,r=this.capture(e),i=this.elements().pushUpdatableBlock(),o=new vt(this.heap.gethandle(this.pc),r,i,t)
this.didEnter(o)},e.prototype.iterate=function(e,t){var r=this.stack
r.push(t),r.push(e)
var i=this.capture(2),o=this.elements().pushUpdatableBlock()
return new vt(this.heap.gethandle(this.pc),i,o,new n.LinkedList)},e.prototype.enterItem=function(e,t){this.listBlock().map[e]=t,this.didEnter(t)},e.prototype.enterList=function(e){var t=new n.LinkedList,r=this.capture(0),i=this.elements().pushBlockList(t),o=this.stack.peek().artifacts,s=this.pc+e-this.currentOpSize,a=this.heap.gethandle(s),l=new yt(a,r,i,t,o)
this.listBlockStack.push(l),this.didEnter(l)},e.prototype.didEnter=function(e){this.updateWith(e),this.updatingOpcodeStack.push(e.children)},e.prototype.exit=function(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()},e.prototype.exitList=function(){this.exit(),this.listBlockStack.pop()},e.prototype.updateWith=function(e){this.updating().append(e)},e.prototype.listBlock=function(){return this.listBlockStack.current},e.prototype.updating=function(){return this.updatingOpcodeStack.current},e.prototype.elements=function(){return this.elementStack},e.prototype.scope=function(){return this.scopeStack.current},e.prototype.dynamicScope=function(){return this.dynamicScopeStack.current},e.prototype.pushChildScope=function(){this.scopeStack.push(this.scope().child())},e.prototype.pushDynamicScope=function(){var e=this.dynamicScope().child()
return this.dynamicScopeStack.push(e),e},e.prototype.pushRootScope=function(e,t){var n=Ve.sized(e)
return t&&n.bindCallerScope(this.scope()),this.scopeStack.push(n),n},e.prototype.pushScope=function(e){this.scopeStack.push(e)},e.prototype.popScope=function(){this.scopeStack.pop()},e.prototype.popDynamicScope=function(){this.dynamicScopeStack.pop()},e.prototype.newDestroyable=function(e){this.elements().didAddDestroyable(e)},e.prototype.getSelf=function(){return this.scope().getSelf()},e.prototype.referenceForSymbol=function(e){return this.scope().getSymbol(e)},e.prototype.execute=function(e,t){this.pc=this.heap.getaddr(e),t&&t(this)
for(var n=void 0;!(n=this.next()).done;);return n.value},e.prototype.next=function(){var e=this.env,t=this.program,n=this.updatingOpcodeStack,r=this.elementStack,i=this.inner.nextStatement(),o=void 0
return null!==i?(this.inner.evaluateOuter(i,this),o={done:!1,value:null}):(this.stack.reset(),o={done:!0,value:new Tt(e,t,n.pop(),r.popBlock())}),o},e.prototype.bindDynamicScope=function(e){var t,n,r=this.dynamicScope()
for(t=e.length-1;t>=0;t--)n=this.constants.getString(e[t]),r.set(n,this.stack.pop())},(0,t.createClass)(e,[{key:"stack",get:function(){return this.inner.stack},set:function(e){this.inner.stack=e}},{key:"currentOpSize",set:function(e){this.inner.currentOpSize=e},get:function(){return this.inner.currentOpSize}},{key:"pc",get:function(){return this.inner.pc},set:function(e){this.inner.pc=e}},{key:"ra",get:function(){return this.inner.ra},set:function(e){this.inner.ra=e}},{key:"fp",get:function(){return this.stack.fp},set:function(e){this.stack.fp=e}},{key:"sp",get:function(){return this.stack.sp},set:function(e){this.stack.sp=e}}]),e}(),At=function(){function e(e){this.vm=e}return e.prototype.next=function(){return this.vm.next()},e}(),Ct=function(){function e(e,t){this.scope=e,this.nameRef=t
var n=this.varTag=i.UpdatableTag.create(i.CONSTANT_TAG)
this.tag=(0,i.combine)([t.tag,n])}return e.prototype.value=function(){return this.getVar().value()},e.prototype.get=function(e){return this.getVar().get(e)},e.prototype.getVar=function(){var e=String(this.nameRef.value()),t=this.scope.get(e)
return this.varTag.inner.update(t.tag),t},e}(),St=function(e){function n(n,r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this,n,r))
return o.startingBlockDepth=i,o.candidate=null,o.injectedOmittedNode=!1,o.openBlockDepth=i-1,o}return(0,t.inherits)(n,e),n}(ie),wt=function(e){function r(r,i,o){var s=(0,t.possibleConstructorReturn)(this,e.call(this,r,i,o))
if(s.unmatchedAttributes=null,s.blockDepth=0,o)throw new Error("Rehydration with nextSibling not supported")
for(var a=s.currentCursor.element.firstChild;!(null===a||Rt(a)&&(0,n.isSerializationFirstNode)(a));)a=a.nextSibling
return s.candidate=a,s}return(0,t.inherits)(r,e),r.prototype.pushElement=function(e,t){var n=this.blockDepth,r=new St(e,t,void 0===n?0:n),i=this.currentCursor
i&&i.candidate&&(r.candidate=e.firstChild,i.candidate=e.nextSibling),this.cursorStack.push(r)},r.prototype.clearMismatch=function(e){var t,n=e,r=this.currentCursor
if(null!==r){if((t=r.openBlockDepth)>=r.startingBlockDepth)for(;n&&(!Rt(n)||xt(n)!==t);)n=this.remove(n)
else for(;null!==n;)n=this.remove(n)
r.nextSibling=n,r.candidate=null}},r.prototype.__openBlock=function(){var e=this.currentCursor
if(null!==e){var t=this.blockDepth
this.blockDepth++
var n,r=e.candidate
if(null!==r)Rt(r)&&((n=r.nodeValue.match(/^%\+b:(\d+)%$/))&&n[1]?Number(n[1]):null)===t?(e.candidate=this.remove(r),e.openBlockDepth=t):this.clearMismatch(r)}},r.prototype.__closeBlock=function(){var e=this.currentCursor
if(null!==e){var t=e.openBlockDepth
this.blockDepth--
var n=e.candidate
null!==n&&(Rt(n)&&xt(n)===t?(e.candidate=this.remove(n),e.openBlockDepth--):this.clearMismatch(n)),e.openBlockDepth===this.blockDepth&&(e.candidate=this.remove(e.nextSibling),e.openBlockDepth--)}},r.prototype.__appendNode=function(t){var n=this.candidate
return n||e.prototype.__appendNode.call(this,t)},r.prototype.__appendHTML=function(t){var n,r,i,o=this.markerBounds()
return o?(n=o.firstNode(),r=o.lastNode(),i=ae(this.element,n.nextSibling,r.previousSibling),this.remove(n),this.remove(r),i):e.prototype.__appendHTML.call(this,t)},r.prototype.remove=function(e){var t=e.parentNode,n=e.nextSibling
return t.removeChild(e),n},r.prototype.markerBounds=function(){var e,t,n=this.candidate
if(n&&Nt(n)){for(t=(e=n).nextSibling;t&&!Nt(t);)t=t.nextSibling
return ae(this.element,e,t)}return null},r.prototype.__appendText=function(t){var n,r,i=this.candidate
return i?3===i.nodeType?(i.nodeValue!==t&&(i.nodeValue=t),this.candidate=i.nextSibling,i):i&&(function(e){return 8===e.nodeType&&"%|%"===e.nodeValue}(i)||Lt(i))?(this.candidate=i.nextSibling,this.remove(i),this.__appendText(t)):Lt(i)?(n=this.remove(i),this.candidate=n,r=this.dom.createTextNode(t),this.dom.insertBefore(this.element,r,n),r):(this.clearMismatch(i),e.prototype.__appendText.call(this,t)):e.prototype.__appendText.call(this,t)},r.prototype.__appendComment=function(t){var n=this.candidate
return n&&Rt(n)?(n.nodeValue!==t&&(n.nodeValue=t),this.candidate=n.nextSibling,n):(n&&this.clearMismatch(n),e.prototype.__appendComment.call(this,t))},r.prototype.__openElement=function(t){var n=this.candidate
if(n&&Ot(n)&&function(e,t){if(e.namespaceURI===fe)return e.tagName===t
return e.tagName===t.toUpperCase()}(n,t))return this.unmatchedAttributes=[].slice.call(n.attributes),n
if(n){if(Ot(n)&&"TBODY"===n.tagName)return this.pushElement(n,null),this.currentCursor.injectedOmittedNode=!0,this.__openElement(t)
this.clearMismatch(n)}return e.prototype.__openElement.call(this,t)},r.prototype.__setAttribute=function(t,n,r){var i,o=this.unmatchedAttributes
return o&&(i=kt(o,t))?(i.value!==n&&(i.value=n),void o.splice(o.indexOf(i),1)):e.prototype.__setAttribute.call(this,t,n,r)},r.prototype.__setProperty=function(t,n){var r,i=this.unmatchedAttributes
return i&&(r=kt(i,t))?(r.value!==n&&(r.value=n),void i.splice(i.indexOf(r),1)):e.prototype.__setProperty.call(this,t,n)},r.prototype.__flushElement=function(t,n){var r,i=this.unmatchedAttributes
if(i){for(r=0;r<i.length;r++)this.constructing.removeAttribute(i[r].name)
this.unmatchedAttributes=null}else e.prototype.__flushElement.call(this,t,n)},r.prototype.appendCautiousDynamicContent=function(t){var n=e.prototype.appendCautiousDynamicContent.call(this,t)
return n.update(this.env,t),n},r.prototype.willCloseElement=function(){var t=this.candidate,n=this.currentCursor
null!==t&&this.clearMismatch(t),n&&n.injectedOmittedNode&&this.popElement(),e.prototype.willCloseElement.call(this)},r.prototype.getMarker=function(e,t){var n=e.querySelector('script[glmr="'+t+'"]')
if(n)return n
throw new Error("Cannot find serialized cursor for `in-element`")},r.prototype.__pushRemoteElement=function(e,t){var n,r,i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=this.getMarker(e,t)
s.parentNode===e&&(r=(n=this.currentCursor).candidate,this.pushElement(e,o),n.candidate=r,this.candidate=this.remove(s),i=new lt(e),this.pushBlockTracker(i,!0))},r.prototype.didAppendBounds=function(t){var n
return e.prototype.didAppendBounds.call(this,t),this.candidate&&(n=t.lastNode(),this.candidate=n&&n.nextSibling),t},(0,t.createClass)(r,[{key:"currentCursor",get:function(){return this.cursorStack.current}},{key:"candidate",get:function(){return this.currentCursor?this.currentCursor.candidate:null},set:function(e){this.currentCursor.candidate=e}}]),r}(st)
function Rt(e){return 8===e.nodeType}function xt(e){var t=e.nodeValue.match(/^%\-b:(\d+)%$/)
return t&&t[1]?Number(t[1]):null}function Ot(e){return 1===e.nodeType}function Nt(e){return 8===e.nodeType&&"%glmr%"===e.nodeValue}function Lt(e){return 8===e.nodeType&&"% %"===e.nodeValue}function kt(e,t){var n,r
for(n=0;n<e.length;n++)if((r=e[n]).name===t)return r}e.renderMain=function(e,t,n,r,i,o){var s=_t.initial(e,t,n,r,i,o)
return new At(s)},e.NULL_REFERENCE=d,e.UNDEFINED_REFERENCE=p,e.PrimitiveReference=l,e.ConditionalReference=m,e.setDebuggerCallback=function(e){te=e},e.resetDebuggerCallback=function(){te=ee},e.getDynamicVar=function(e,t){var n=e.dynamicScope(),r=t.positional.at(0)
return new Ct(n,r)},e.LowLevelVM=_t,e.UpdatingVM=mt,e.RenderResult=Tt,e.SimpleDynamicAttribute=He,e.DynamicAttribute=Be,e.EMPTY_ARGS=R,e.Scope=Ve,e.Environment=Ye,e.DefaultEnvironment=Qe,e.DEFAULT_CAPABILITIES={dynamicLayout:!0,dynamicTag:!0,prepareArgs:!0,createArgs:!0,attributeHook:!1,elementHook:!1},e.MINIMAL_CAPABILITIES={dynamicLayout:!1,dynamicTag:!1,prepareArgs:!1,createArgs:!1,attributeHook:!1,elementHook:!1},e.CurriedComponentDefinition=N,e.isCurriedComponentDefinition=O,e.curry=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return new N(e,t)},e.ARGS=Q,e.DOMChanges=Ae,e.SVG_NAMESPACE=fe,e.IDOMChanges=Ee,e.DOMTreeConstruction=Ce,e.isWhitespace=function(e){return ge.test(e)},e.insertHTMLBefore=Te,e.normalizeProperty=Pe
e.NewElementBuilder=st,e.clientBuilder=function(e,t){return st.forInitialRender(e,t)},e.rehydrationBuilder=function(e,t){return wt.forInitialRender(e,t)},e.RehydrateBuilder=wt,e.ConcreteBounds=oe,e.Cursor=ie,e.capabilityFlagsFrom=G,e.hasCapability=Y}),e("@glimmer/util",["exports","ember-babel"],function(e,t){"use strict"
e.unreachable=e.expect=e.unwrap=e.EMPTY_ARRAY=e.ListSlice=e.ListNode=e.LinkedList=e.EMPTY_SLICE=e.dict=e.DictSet=e.Stack=e.SERIALIZATION_FIRST_NODE_STRING=e.isSerializationFirstNode=e.initializeGuid=e.ensureGuid=e.fillNulls=e.assign=e.assert=void 0
var n=Object.keys,r=0
function i(e){return e._guid=++r}function o(e){return e._guid||i(e)}function s(){return Object.create(null)}var a=function(){function e(){this.dict=s()}return e.prototype.add=function(e){return"string"==typeof e?this.dict[e]=e:this.dict[o(e)]=e,this},e.prototype.delete=function(e){"string"==typeof e?delete this.dict[e]:e._guid&&delete this.dict[e._guid]},e}(),l=function(){function e(){this.stack=[],this.current=null}return e.prototype.push=function(e){this.current=e,this.stack.push(e)},e.prototype.pop=function(){var e=this.stack.pop(),t=this.stack.length
return this.current=0===t?null:this.stack[t-1],void 0===e?null:e},e.prototype.isEmpty=function(){return 0===this.stack.length},(0,t.createClass)(e,[{key:"size",get:function(){return this.stack.length}}]),e}(),u=function(){function e(){this.clear()}return e.prototype.head=function(){return this._head},e.prototype.tail=function(){return this._tail},e.prototype.clear=function(){this._head=this._tail=null},e.prototype.toArray=function(){var e=[]
return this.forEachNode(function(t){return e.push(t)}),e},e.prototype.nextNode=function(e){return e.next},e.prototype.forEachNode=function(e){for(var t=this._head;null!==t;)e(t),t=t.next},e.prototype.insertBefore=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return null===t?this.append(e):(t.prev?t.prev.next=e:this._head=e,e.prev=t.prev,e.next=t,t.prev=e,e)},e.prototype.append=function(e){var t=this._tail
return t?(t.next=e,e.prev=t,e.next=null):this._head=e,this._tail=e},e.prototype.remove=function(e){return e.prev?e.prev.next=e.next:this._head=e.next,e.next?e.next.prev=e.prev:this._tail=e.prev,e},e}(),c=function(){function e(e,t){this._head=e,this._tail=t}return e.prototype.forEachNode=function(e){for(var t=this._head;null!==t;)e(t),t=this.nextNode(t)},e.prototype.head=function(){return this._head},e.prototype.tail=function(){return this._tail},e.prototype.toArray=function(){var e=[]
return this.forEachNode(function(t){return e.push(t)}),e},e.prototype.nextNode=function(e){return e===this._tail?null:e.next},e}(),p=new c(null,null),d=Object.freeze([])
e.assert=function(e,t){if(!e)throw new Error(t||"assertion failure")},e.assign=function(e){var t,r,i,o,s
for(t=1;t<arguments.length;t++)if(null!==(r=arguments[t])&&"object"==typeof r)for(i=n(r),o=0;o<i.length;o++)e[s=i[o]]=r[s]
return e},e.fillNulls=function(e){var t,n=new Array(e)
for(t=0;t<e;t++)n[t]=null
return n},e.ensureGuid=o,e.initializeGuid=i,e.isSerializationFirstNode=function(e){return"%+b:0%"===e.nodeValue},e.SERIALIZATION_FIRST_NODE_STRING="%+b:0%",e.Stack=l,e.DictSet=a,e.dict=s,e.EMPTY_SLICE=p,e.LinkedList=u,e.ListNode=function(e){this.next=null,this.prev=null,this.value=e},e.ListSlice=c,e.EMPTY_ARRAY=d,e.unwrap=function(e){if(null===e||void 0===e)throw new Error("Expected value to be present")
return e},e.expect=function(e,t){if(null===e||void 0===e)throw new Error(t)
return e},e.unreachable=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unreachable"
return new Error(e)}}),e("@glimmer/vm",["exports"],function(e){"use strict"
var t;(function(e){e[e.pc=0]="pc",e[e.ra=1]="ra",e[e.fp=2]="fp",e[e.sp=3]="sp",e[e.s0=4]="s0",e[e.s1=5]="s1",e[e.t0=6]="t0",e[e.t1=7]="t1",e[e.v0=8]="v0"})(t||(e.Register=t={})),e.Register=t}),e("@glimmer/wire-format",["exports"],function(e){"use strict"
var t
function n(e){return function(t){return Array.isArray(t)&&t[0]===e}}(function(e){e[e.Text=0]="Text",e[e.Append=1]="Append",e[e.Comment=2]="Comment",e[e.Modifier=3]="Modifier",e[e.Block=4]="Block",e[e.Component=5]="Component",e[e.OpenElement=6]="OpenElement",e[e.OpenSplattedElement=7]="OpenSplattedElement",e[e.FlushElement=8]="FlushElement",e[e.CloseElement=9]="CloseElement",e[e.StaticAttr=10]="StaticAttr",e[e.DynamicAttr=11]="DynamicAttr",e[e.AttrSplat=12]="AttrSplat",e[e.Yield=13]="Yield",e[e.Partial=14]="Partial",e[e.DynamicArg=15]="DynamicArg",e[e.StaticArg=16]="StaticArg",e[e.TrustingAttr=17]="TrustingAttr",e[e.Debugger=18]="Debugger",e[e.ClientSideStatement=19]="ClientSideStatement",e[e.Unknown=20]="Unknown",e[e.Get=21]="Get",e[e.MaybeLocal=22]="MaybeLocal",e[e.HasBlock=23]="HasBlock",e[e.HasBlockParams=24]="HasBlockParams",e[e.Undefined=25]="Undefined",e[e.Helper=26]="Helper",e[e.Concat=27]="Concat",e[e.ClientSideExpression=28]="ClientSideExpression"})(t||(e.Ops=t={}))
var r=n(t.Modifier),i=n(t.FlushElement),o=n(t.Get),s=n(t.MaybeLocal)
e.is=n,e.isModifier=r,e.isFlushElement=i,e.isAttribute=function(e){return e[0]===t.StaticAttr||e[0]===t.DynamicAttr||e[0]===t.TrustingAttr},e.isArgument=function(e){return e[0]===t.StaticArg||e[0]===t.DynamicArg},e.isGet=o,e.isMaybeLocal=s,e.Ops=t}),e("backburner",["exports"],function(e){"use strict"
var t=/\d+/
function n(e){var n=typeof e
return"number"===n&&e==e||"string"===n&&t.test(e)}function r(e){return e.onError||e.onErrorTarget&&e.onErrorTarget[e.onErrorMethod]}function i(e,t,n){var r,i,o=-1
for(r=0,i=n.length;r<i;r+=4)if(n[r]===e&&n[r+1]===t){o=r
break}return o}function o(e,t){var n,r=-1
for(n=3;n<t.length;n+=4)if(t[n]===e){r=n-3
break}return r}var s=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this._queueBeingFlushed=[],this.targetQueues=new Map,this.index=0,this._queue=[],this.name=e,this.options=t,this.globalOptions=n}return e.prototype.stackFor=function(e){var t
if(e<this._queue.length)return(t=this._queue[3*e+4])?t.stack:null},e.prototype.flush=function(e){var t,n,i=this.options,o=i.before,s=i.after,a=void 0
this.targetQueues.clear(),0===this._queueBeingFlushed.length&&(this._queueBeingFlushed=this._queue,this._queue=[]),void 0!==o&&o()
var l=void 0,u=this._queueBeingFlushed
if(u.length>0)for(l=(t=r(this.globalOptions))?this.invokeWithOnError:this.invoke,n=this.index;n<u.length;n+=4)if(this.index+=4,null!==(a=u[n+1])&&l(u[n],a,u[n+2],t,u[n+3]),this.index!==this._queueBeingFlushed.length&&this.globalOptions.mustYield&&this.globalOptions.mustYield())return 1
void 0!==s&&s(),this._queueBeingFlushed.length=0,this.index=0,!1!==e&&this._queue.length>0&&this.flush(!0)},e.prototype.hasWork=function(){return this._queueBeingFlushed.length>0||this._queue.length>0},e.prototype.cancel=function(e){var t=e.target,n=e.method,r=this._queue,o=this.targetQueues.get(t)
void 0!==o&&o.delete(n)
var s=i(t,n,r)
return s>-1?(r.splice(s,4),!0):(s=i(t,n,r=this._queueBeingFlushed))>-1&&(r[s+1]=null,!0)},e.prototype.push=function(e,t,n,r){return this._queue.push(e,t,n,r),{queue:this,target:e,method:t}},e.prototype.pushUnique=function(e,t,n,r){var i,o,s=this.targetQueues.get(e)
void 0===s&&(s=new Map,this.targetQueues.set(e,s))
var a=s.get(t)
return void 0===a?(i=this._queue.push(e,t,n,r)-4,s.set(t,i)):((o=this._queue)[a+2]=n,o[a+3]=r),{queue:this,target:e,method:t}},e.prototype.invoke=function(e,t,n){void 0===n?t.call(e):t.apply(e,n)},e.prototype.invokeWithOnError=function(e,t,n,r,i){try{void 0===n?t.call(e):t.apply(e,n)}catch(e){r(e,i)}},e}(),a=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1]
this.queues={},this.queueNameIndex=0,this.queueNames=e,e.reduce(function(e,n){return e[n]=new s(n,t[n],t),e},this.queues)}return e.prototype.schedule=function(e,t,n,r,i,o){var s=this.queues[e]
if(void 0===s)throw new Error("You attempted to schedule an action in a queue ("+e+") that doesn't exist")
if(void 0===n||null===n)throw new Error("You attempted to schedule an action in a queue ("+e+") for a method that doesn't exist")
return i?s.pushUnique(t,n,r,o):s.push(t,n,r,o)},e.prototype.flush=function(){for(var e=void 0,t=void 0,n=this.queueNames.length;this.queueNameIndex<n;)if(t=this.queueNames[this.queueNameIndex],!1===(e=this.queues[t]).hasWork())this.queueNameIndex++
else{if(1===e.flush(!1))return 1
this.queueNameIndex=0}},e}(),l=function(e){for(var t=e(),n=t.next();!1===n.done;)n.value(),n=t.next()},u=function(){},c=setTimeout
function p(){var e,t=arguments.length,n=void 0,r=void 0,i=void 0
if(1===t)n=arguments[0],r=null
else if(r=arguments[0],"string"==typeof(n=arguments[1])&&(n=r[n]),t>2)for(i=new Array(t-2),e=0;e<t-2;e++)i[e]=arguments[e+2]
return[r,n,i]}var d=0,f=function(){function e(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.DEBUG=!1,this.currentInstance=null,this.instanceStack=[],this._debouncees=[],this._throttlers=[],this._eventCallbacks={end:[],begin:[]},this._timerTimeoutId=null,this._timers=[],this._autorun=null,this.queueNames=e,this.options=n,this.options.defaultQueue||(this.options.defaultQueue=e[0]),this._onBegin=this.options.onBegin||u,this._onEnd=this.options.onEnd||u
var r=this.options._platform||{},i=Object.create(null)
i.setTimeout=r.setTimeout||function(e,t){return setTimeout(e,t)},i.clearTimeout=r.clearTimeout||function(e){return clearTimeout(e)},i.next=r.next||function(e){return c(e,0)},i.clearNext=r.clearNext||i.clearTimeout,i.now=r.now||function(){return Date.now()},this._platform=i,this._boundRunExpiredTimers=function(){t._runExpiredTimers()},this._boundAutorunEnd=function(){t._autorun=null,t.end()}}return e.prototype.begin=function(){var e=this.options,t=this.currentInstance,n=void 0
return null!==this._autorun?(n=t,this._cancelAutorun()):(null!==t&&this.instanceStack.push(t),n=this.currentInstance=new a(this.queueNames,e),this._trigger("begin",n,t)),this._onBegin(n,t),n},e.prototype.end=function(){var e,t=this.currentInstance,n=null
if(null===t)throw new Error("end called without begin")
var r=!1,i=void 0
try{i=t.flush()}finally{r||(r=!0,1===i?(e=this._platform.next,this._autorun=e(this._boundAutorunEnd)):(this.currentInstance=null,this.instanceStack.length>0&&(n=this.instanceStack.pop(),this.currentInstance=n),this._trigger("end",t,n),this._onEnd(t,n)))}},e.prototype.on=function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var n=this._eventCallbacks[e]
if(void 0===n)throw new TypeError("Cannot on() event "+e+" because it does not exist")
n.push(t)},e.prototype.off=function(e,t){var n,r=this._eventCallbacks[e]
if(!e||void 0===r)throw new TypeError("Cannot off() event "+e+" because it does not exist")
var i=!1
if(t)for(n=0;n<r.length;n++)r[n]===t&&(i=!0,r.splice(n,1),n--)
if(!i)throw new TypeError("Cannot off() callback that does not exist")},e.prototype.run=function(){var e=p.apply(void 0,arguments),t=e[0],n=e[1],r=e[2]
return this._run(t,n,r)},e.prototype.join=function(){var e=p.apply(void 0,arguments),t=e[0],n=e[1],r=e[2]
return this._join(t,n,r)},e.prototype.defer=function(e,t){var n,r,i
for(n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i]
return this.schedule.apply(this,[e,t].concat(r))},e.prototype.schedule=function(e){for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var t,n,r,i=p.apply(void 0,n),o=i[0],s=i[1],a=i[2],l=this.DEBUG?new Error:void 0
return this._ensureInstance().schedule(e,o,s,a,!1,l)},e.prototype.scheduleIterable=function(e,t){var n=this.DEBUG?new Error:void 0
return this._ensureInstance().schedule(e,null,l,[t],!1,n)},e.prototype.deferOnce=function(e,t){var n,r,i
for(n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i]
return this.scheduleOnce.apply(this,[e,t].concat(r))},e.prototype.scheduleOnce=function(e){for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var t,n,r,i=p.apply(void 0,n),o=i[0],s=i[1],a=i[2],l=this.DEBUG?new Error:void 0
return this._ensureInstance().schedule(e,o,s,a,!0,l)},e.prototype.setTimeout=function(){return this.later.apply(this,arguments)},e.prototype.later=function(){for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
var e,t,r,i,o=t.length,s=0,a=void 0,l=void 0,u=void 0,c=void 0
if(0!==o)return 1===o?a=t.shift():(n(t[t.length-1])&&(s=parseInt(t.pop(),10)),u=t[0],"function"===(i=typeof(c=t[1]))?(l=t.shift(),a=t.shift()):a=null!==u&&"string"===i&&c in u?(l=t.shift())[t.shift()]:t.shift()),this._setTimeout(l,a,t,s)},e.prototype.throttle=function(e){var t,r,s,a,l=this,u=void 0,c=void 0,p=void 0,d=void 0,f=void 0
for(t=arguments.length,r=Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s]
1===r.length?(c=e,f=r.pop(),u=null,d=!0):(u=e,c=r.shift(),p=r.pop(),"string"===(a=typeof c)?c=u[c]:"function"!==a&&(r.unshift(c),c=u,u=null),n(p)?(f=p,d=!0):(f=r.pop(),d=!0===p))
var h=i(u,c,this._throttlers)
if(h>-1)return this._throttlers[h+2]=r,this._throttlers[h+3]
f=parseInt(f,10)
var m=this._platform.setTimeout(function(){var e=o(m,l._throttlers),t=l._throttlers.splice(e,4),n=t[0],r=t[1],i=t[2]
!1===d&&l._run(n,r,i)},f)
return d&&this._join(u,c,r),this._throttlers.push(u,c,r,m),m},e.prototype.debounce=function(e){var t,r,s,a,l,u=this,c=void 0,p=void 0,d=void 0,f=void 0,h=void 0
for(t=arguments.length,r=Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s]
1===r.length?(p=e,h=r.pop(),c=null,f=!1):(c=e,p=r.shift(),d=r.pop(),"string"===(a=typeof p)?p=c[p]:"function"!==a&&(r.unshift(p),p=c,c=null),n(d)?(h=d,f=!1):(h=r.pop(),f=!0===d)),h=parseInt(h,10)
var m=i(c,p,this._debouncees)
m>-1&&(l=this._debouncees[m+3],this._platform.clearTimeout(l),this._debouncees.splice(m,4))
var g=this._platform.setTimeout(function(){var e=o(g,u._debouncees),t=u._debouncees.splice(e,4),n=t[0],r=t[1],i=t[2]
!1===f&&u._run(n,r,i)},h)
return f&&-1===m&&this._join(c,p,r),this._debouncees.push(c,p,r,g),g},e.prototype.cancelTimers=function(){var e,t
for(e=3;e<this._throttlers.length;e+=4)this._platform.clearTimeout(this._throttlers[e])
for(this._throttlers=[],t=3;t<this._debouncees.length;t+=4)this._platform.clearTimeout(this._debouncees[t])
this._debouncees=[],this._clearTimerTimeout(),this._timers=[],this._cancelAutorun()},e.prototype.hasTimers=function(){return this._timers.length>0||this._debouncees.length>0||this._throttlers.length>0||null!==this._autorun},e.prototype.cancel=function(e){if(!e)return!1
var t=typeof e
return"number"===t?this._cancelItem(e,this._throttlers)||this._cancelItem(e,this._debouncees):"string"===t?this._cancelLaterTimer(e):!("object"!==t||!e.queue||!e.method)&&e.queue.cancel(e)},e.prototype.ensureInstance=function(){this._ensureInstance()},e.prototype._join=function(e,t,n){return null===this.currentInstance?this._run(e,t,n):void 0===e&&void 0===n?t():t.apply(e,n)},e.prototype._run=function(e,t,n){var i=r(this.options)
if(this.begin(),i)try{return t.apply(e,n)}catch(e){i(e)}finally{this.end()}else try{return t.apply(e,n)}finally{this.end()}},e.prototype._cancelAutorun=function(){null!==this._autorun&&(this._platform.clearNext(this._autorun),this._autorun=null)},e.prototype._setTimeout=function(e,t,n,r){var i=this.DEBUG?new Error:void 0,o=this._platform.now()+r,s=d+++""
if(0===this._timers.length)return this._timers.push(o,s,e,t,n,i),this._installTimerTimeout(),s
var a=function(e,t){for(var n=0,r=t.length-6,i=void 0,o=void 0;n<r;)e>=t[i=n+(o=(r-n)/6)-o%6]?n=i+6:r=i
return e>=t[n]?n+6:n}(o,this._timers)
return this._timers.splice(a,0,o,s,e,t,n,i),0===a&&this._reinstallTimerTimeout(),s},e.prototype._cancelLaterTimer=function(e){var t
for(t=1;t<this._timers.length;t+=6)if(this._timers[t]===e)return t-=1,this._timers.splice(t,6),0===t&&this._reinstallTimerTimeout(),!0
return!1},e.prototype._cancelItem=function(e,t){var n=o(e,t)
return n>-1&&(this._platform.clearTimeout(e),t.splice(n,4),!0)},e.prototype._trigger=function(e,t,n){var r,i=this._eventCallbacks[e]
if(void 0!==i)for(r=0;r<i.length;r++)i[r](t,n)},e.prototype._runExpiredTimers=function(){this._timerTimeoutId=null,0!==this._timers.length&&(this.begin(),this._scheduleExpiredTimers(),this.end())},e.prototype._scheduleExpiredTimers=function(){for(var e,t,n,r,i=this._timers,o=0,s=i.length,a=this.options.defaultQueue,l=this._platform.now();o<s&&i[o]<=l;o+=6)e=i[o+2],t=i[o+3],n=i[o+4],r=i[o+5],this.currentInstance.schedule(a,e,t,n,!1,r)
i.splice(0,o),this._installTimerTimeout()},e.prototype._reinstallTimerTimeout=function(){this._clearTimerTimeout(),this._installTimerTimeout()},e.prototype._clearTimerTimeout=function(){null!==this._timerTimeoutId&&(this._platform.clearTimeout(this._timerTimeoutId),this._timerTimeoutId=null)},e.prototype._installTimerTimeout=function(){if(0!==this._timers.length){var e=this._timers[0],t=this._platform.now(),n=Math.max(0,e-t)
this._timerTimeoutId=this._platform.setTimeout(this._boundRunExpiredTimers,n)}},e.prototype._ensureInstance=function(){var e,t=this.currentInstance
return null===t&&(t=this.begin(),e=this._platform.next,this._autorun=e(this._boundAutorunEnd)),t},e}()
f.Queue=s,e.default=f}),e("container",["exports","ember-utils","ember-debug","ember-environment"],function(e,t,n,r){"use strict"
e.FACTORY_FOR=e.Container=e.privatize=e.Registry=void 0
var i=function(){function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.registry=e,this.owner=n.owner||null,this.cache=(0,t.dictionary)(n.cache||null),this.factoryManagerCache=(0,t.dictionary)(n.factoryManagerCache||null),this.isDestroyed=!1}return e.prototype.lookup=function(e,t){return a(this,this.registry.normalize(e),t)},e.prototype.destroy=function(){u(this),this.isDestroyed=!0},e.prototype.reset=function(e){var n
void 0===e?(u(n=this),n.cache=(0,t.dictionary)(null),n.factoryManagerCache=(0,t.dictionary)(null)):function(e,t){var n=e.cache[t]
delete e.factoryManagerCache[t],n&&(delete e.cache[t],n.destroy&&n.destroy())}(this,this.registry.normalize(e))},e.prototype.ownerInjection=function(){var e
return(e={})[t.OWNER]=this.owner,e},e.prototype._resolverCacheKey=function(e,t){return this.registry.resolverCacheKey(e,t)},e.prototype.factoryFor=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.registry.normalize(e)
if(n.source){if(!(t=this.registry.expandLocalLookup(e,n)))return
r=t}var i=this._resolverCacheKey(r,n),o=this.factoryManagerCache[i]
if(void 0!==o)return o
var s=this.registry.resolve(r)
if(void 0!==s){var a=new p(this,s,e,r)
return this.factoryManagerCache[i]=a,a}},e}()
function o(e,t){return!1!==e.registry.getOption(t,"singleton")}function s(e,t){return!1!==e.registry.getOption(t,"instantiate")}function a(e,t){var n,r,i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(a.source){if(!(n=e.registry.expandLocalLookup(t,a)))return
t=n}return!1!==a.singleton&&(r=e._resolverCacheKey(t,a),void 0!==(i=e.cache[r]))?i:function(e,t,n){var r,i=e.factoryFor(t)
if(void 0===i)return
if(function(e,t,n){var r=n.instantiate
return!1!==n.singleton&&!1!==r&&o(e,t)&&s(e,t)}(e,t,n))return r=e._resolverCacheKey(t,n),e.cache[r]=i.create()
if(function(e,t,n){var r=n.instantiate,i=n.singleton
return!1!==r&&(!1!==i||o(e,t))&&s(e,t)}(e,t,n))return i.create()
if(function(e,t,n){var r=n.instantiate
return!1!==n.singleton&&!r&&o(e,t)&&!s(e,t)}(e,t,n)||function(e,t,n){var r=n.instantiate,i=n.singleton
return!(!1!==r||!1!==i&&o(e,t)||s(e,t))}(e,t,n))return i.class
throw new Error("Could not create factory")}(e,t,a)}function l(e,t){var n=e.registry,r=t.split(":")[0]
return function(e,t){var n,r,i={},s=!1
if(t.length>0)for(n=void 0,r=0;r<t.length;r++)i[(n=t[r]).property]=a(e,n.fullName),s||(s=!o(e,n.fullName))
return{injections:i,isDynamic:s}}(e,n.getTypeInjections(r).concat(n.getInjections(t)))}function u(e){var t,n,r=e.cache,i=Object.keys(r)
for(t=0;t<i.length;t++)(n=r[i[t]]).destroy&&n.destroy()}var c=new WeakMap,p=function(){function e(e,t,n,r){this.container=e,this.owner=e.owner,this.class=t,this.fullName=n,this.normalizedName=r,this.madeToString=void 0,this.injections=void 0,c.set(this,this)}return e.prototype.toString=function(){return void 0===this.madeToString&&(this.madeToString=this.container.registry.makeToString(this.class,this.fullName)),this.madeToString},e.prototype.create=function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this.injections
void 0===i&&(i=n=(e=l(this.container,this.normalizedName)).injections,e.isDynamic||(this.injections=n))
var o=(0,t.assign)({},i,r)
if(!this.class.create)throw new Error("Failed to create an instance of '"+this.normalizedName+"'. Most likely an improperly defined class or an invalid module export.")
"function"==typeof this.class._initFactory?this.class._initFactory(this):(0,t.setOwner)(o,this.owner)
var s=this.class.create(o)
return c.set(s,this),s},e}(),d=/^[^:]+:[^:]+$/,f=function(){function e(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.fallback=n.fallback||null,this.resolver=n.resolver||null,r.ENV._ENABLE_RESOLVER_FUNCTION_SUPPORT,"function"==typeof this.resolver&&!0===r.ENV._ENABLE_RESOLVER_FUNCTION_SUPPORT&&((e=this).resolver={resolve:e.resolver}),this.registrations=(0,t.dictionary)(n.registrations||null),this._typeInjections=(0,t.dictionary)(null),this._injections=(0,t.dictionary)(null),this._localLookupCache=Object.create(null),this._normalizeCache=(0,t.dictionary)(null),this._resolveCache=(0,t.dictionary)(null),this._failSet=new Set,this._options=(0,t.dictionary)(null),this._typeOptions=(0,t.dictionary)(null)}return e.prototype.container=function(e){return new i(this,e)},e.prototype.register=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.normalize(e)
this._failSet.delete(r),this.registrations[r]=t,this._options[r]=n},e.prototype.unregister=function(e){var t=this.normalize(e)
this._localLookupCache=Object.create(null),delete this.registrations[t],delete this._resolveCache[t],delete this._options[t],this._failSet.delete(t)},e.prototype.resolve=function(e,t){var n,r=function(e,t,n){if(n&&n.source){if(!(r=e.expandLocalLookup(t,n)))return
t=r}var r,i=e.resolverCacheKey(t,n),o=e._resolveCache[i]
if(void 0!==o)return o
if(e._failSet.has(i))return
var s=void 0
e.resolver&&(s=e.resolver.resolve(t,n&&n.source))
void 0===s&&(s=e.registrations[t])
void 0===s?e._failSet.add(i):e._resolveCache[i]=s
return s}(this,this.normalize(e),t)
return void 0===r&&null!==this.fallback&&(r=(n=this.fallback).resolve.apply(n,arguments)),r},e.prototype.describe=function(e){return null!==this.resolver&&this.resolver.lookupDescription?this.resolver.lookupDescription(e):null!==this.fallback?this.fallback.describe(e):e},e.prototype.normalizeFullName=function(e){return null!==this.resolver&&this.resolver.normalize?this.resolver.normalize(e):null!==this.fallback?this.fallback.normalizeFullName(e):e},e.prototype.normalize=function(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this.normalizeFullName(e))},e.prototype.makeToString=function(e,t){return null!==this.resolver&&this.resolver.makeToString?this.resolver.makeToString(e,t):null!==this.fallback?this.fallback.makeToString(e,t):e.toString()},e.prototype.has=function(e,t){if(!this.isValidFullName(e))return!1
var n=t&&t.source&&this.normalize(t.source)
return function(e,t,n){return void 0!==e.resolve(t,{source:n})}(this,this.normalize(e),n)},e.prototype.optionsForType=function(e,t){this._typeOptions[e]=t},e.prototype.getOptionsForType=function(e){var t=this._typeOptions[e]
return void 0===t&&null!==this.fallback&&(t=this.fallback.getOptionsForType(e)),t},e.prototype.options=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.normalize(e)
this._options[n]=t},e.prototype.getOptions=function(e){var t=this.normalize(e),n=this._options[t]
return void 0===n&&null!==this.fallback&&(n=this.fallback.getOptions(e)),n},e.prototype.getOption=function(e,t){var n=this._options[e]
if(n&&void 0!==n[t])return n[t]
var r=e.split(":")[0]
return(n=this._typeOptions[r])&&void 0!==n[t]?n[t]:null!==this.fallback?this.fallback.getOption(e,t):void 0},e.prototype.typeInjection=function(e,t,n){n.split(":")[0];(this._typeInjections[e]||(this._typeInjections[e]=[])).push({property:t,fullName:n})},e.prototype.injection=function(e,t,n){var r=this.normalize(n)
if(-1===e.indexOf(":"))return this.typeInjection(e,t,r)
var i=this.normalize(e);(this._injections[i]||(this._injections[i]=[])).push({property:t,fullName:r})},e.prototype.knownForType=function(e){var n,r,i=(0,t.dictionary)(null),o=Object.keys(this.registrations)
for(n=0;n<o.length;n++)(r=o[n]).split(":")[0]===e&&(i[r]=!0)
var s=void 0,a=void 0
return null!==this.fallback&&(s=this.fallback.knownForType(e)),null!==this.resolver&&this.resolver.knownForType&&(a=this.resolver.knownForType(e)),(0,t.assign)({},s,i,a)},e.prototype.isValidFullName=function(e){return d.test(e)},e.prototype.getInjections=function(e){var t=this._injections[e]||[]
return null!==this.fallback&&(t=t.concat(this.fallback.getInjections(e))),t},e.prototype.getTypeInjections=function(e){var t=this._typeInjections[e]||[]
return null!==this.fallback&&(t=t.concat(this.fallback.getTypeInjections(e))),t},e.prototype.resolverCacheKey=function(e,t){return e},e.prototype.expandLocalLookup=function(e,t){return null!==this.resolver&&this.resolver.expandLocalLookup?function(e,t,n){var r=e._localLookupCache,i=r[t]
i||(i=r[t]=Object.create(null))
var o=i[n]
if(void 0!==o)return o
var s=e.resolver.expandLocalLookup(t,n)
return i[n]=s}(this,this.normalize(e),this.normalize(t.source)):null!==this.fallback?this.fallback.expandLocalLookup(e,t):null},e}()
var h=(0,t.dictionary)(null),m=(""+Math.random()+Date.now()).replace(".","")
e.Registry=f,e.privatize=function(e){var n=e[0],r=h[n]
if(r)return r
var i=n.split(":"),o=i[0],s=i[1]
return h[n]=(0,t.intern)(o+":"+s+"-"+m)},e.Container=i,e.FACTORY_FOR=c}),e("dag-map",["exports"],function(e){"use strict"
var t=function(){function e(){this._vertices=new n}return e.prototype.add=function(e,t,n,r){if(!e)throw new Error("argument `key` is required")
var i=this._vertices,o=i.add(e)
if(o.val=t,n)if("string"==typeof n)i.addEdge(o,i.add(n))
else for(var s=0;s<n.length;s++)i.addEdge(o,i.add(n[s]))
if(r)if("string"==typeof r)i.addEdge(i.add(r),o)
else for(s=0;s<r.length;s++)i.addEdge(i.add(r[s]),o)},e.prototype.addEdges=function(e,t,n,r){this.add(e,t,n,r)},e.prototype.each=function(e){this._vertices.walk(e)},e.prototype.topsort=function(e){this.each(e)},e}()
e.default=t
var n=function(){function e(){this.length=0,this.stack=new r,this.path=new r,this.result=new r}return e.prototype.add=function(e){if(!e)throw new Error("missing key")
var t,n,r=0|this.length
for(t=0;t<r;t++)if((n=this[t]).key===e)return n
return this.length=r+1,this[r]={idx:r,key:e,val:void 0,out:!1,flag:!1,length:0}},e.prototype.addEdge=function(e,t){this.check(e,t.key)
var n,r=0|t.length
for(n=0;n<r;n++)if(t[n]===e.idx)return
t.length=r+1,t[r]=e.idx,e.out=!0},e.prototype.walk=function(e){var t,n
for(this.reset(),t=0;t<this.length;t++)(n=this[t]).out||this.visit(n,"")
this.each(this.result,e)},e.prototype.check=function(e,t){var n,r
if(e.key===t)throw new Error("cycle detected: "+t+" <- "+t)
if(0!==e.length){for(n=0;n<e.length;n++)if(this[e[n]].key===t)throw new Error("cycle detected: "+t+" <- "+e.key+" <- "+t)
if(this.reset(),this.visit(e,t),this.path.length>0)throw r="cycle detected: "+t,this.each(this.path,function(e){r+=" <- "+e}),new Error(r)}},e.prototype.reset=function(){var e,t
for(this.stack.length=0,this.path.length=0,this.result.length=0,e=0,t=this.length;e<t;e++)this[e].flag=!1},e.prototype.visit=function(e,t){var n,r,i=this.stack,o=this.path,s=this.result
for(i.push(e.idx);i.length;)if((n=0|i.pop())>=0){if((r=this[n]).flag)continue
if(r.flag=!0,o.push(n),t===r.key)break
i.push(~n),this.pushIncoming(r)}else o.pop(),s.push(~n)},e.prototype.pushIncoming=function(e){var t,n,r=this.stack
for(t=e.length-1;t>=0;t--)this[n=e[t]].flag||r.push(n)},e.prototype.each=function(e,t){var n,r,i
for(n=0,r=e.length;n<r;n++)t((i=this[e[n]]).key,i.val)},e}(),r=function(){function e(){this.length=0}return e.prototype.push=function(e){this[this.length++]=0|e},e.prototype.pop=function(){return 0|this[--this.length]},e}()}),e("ember-application/index",["exports","ember-application/system/application","ember-application/system/application-instance","ember-application/system/resolver","ember-application/system/engine","ember-application/system/engine-instance","ember-application/system/engine-parent","ember-application/initializers/dom-templates"],function(e,t,n,r,i,o,s){"use strict"
e.setEngineParent=e.getEngineParent=e.EngineInstance=e.Engine=e.Resolver=e.ApplicationInstance=e.Application=void 0,Object.defineProperty(e,"Application",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"ApplicationInstance",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"Resolver",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Engine",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"EngineInstance",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"getEngineParent",{enumerable:!0,get:function(){return s.getEngineParent}}),Object.defineProperty(e,"setEngineParent",{enumerable:!0,get:function(){return s.setEngineParent}})}),e("ember-application/initializers/dom-templates",["require","ember-glimmer","ember-environment","ember-application/system/application"],function(e,t,n,r){"use strict"
var i=function(){}
r.default.initializer({name:"domTemplates",initialize:function(){var r=void 0
n.environment.hasDOM&&(0,e.has)("ember-template-compiler/system/bootstrap")&&(i=(0,e.default)("ember-template-compiler/system/bootstrap").default,r=document),i({context:r,hasTemplate:t.hasTemplate,setTemplate:t.setTemplate})}})}),e("ember-application/system/application-instance",["exports","ember-utils","ember-metal","ember-environment","ember-views","ember-application/system/engine-instance","ember-glimmer"],function(e,t,n,r,i,o,s){"use strict"
var a=o.default.extend({application:null,customEvents:null,rootElement:null,init:function(){this._super.apply(this,arguments),this.application._watchInstance(this),this.register("-application-instance:main",this,{instantiate:!1})},_bootSync:function(e){var t
return this._booted?this:(e=new l(e),this.setupRegistry(e),e.rootElement?this.rootElement=e.rootElement:this.rootElement=this.application.rootElement,e.location&&(t=(0,n.get)(this,"router"),(0,n.set)(t,"location",e.location)),this.application.runInstanceInitializers(this),e.isInteractive&&this.setupEventDispatcher(),this._booted=!0,this)},setupRegistry:function(e){this.constructor.setupRegistry(this.__registry__,e)},router:(0,n.computed)(function(){return this.lookup("router:main")}).readOnly(),didCreateRootView:function(e){e.appendTo(this.rootElement)},startRouting:function(){(0,n.get)(this,"router").startRouting(),this._didSetupRouter=!0},setupRouter:function(){this._didSetupRouter||(this._didSetupRouter=!0,(0,n.get)(this,"router").setupRouter())},handleURL:function(e){var t=(0,n.get)(this,"router")
return this.setupRouter(),t.handleURL(e)},setupEventDispatcher:function(){var e=this.lookup("event_dispatcher:main"),r=(0,n.get)(this.application,"customEvents"),i=(0,n.get)(this,"customEvents"),o=(0,t.assign)({},r,i)
return e.setup(o,this.rootElement),e},getURL:function(){return(0,n.get)(this,"router.url")},visit:function(e){var t=this
this.setupRouter()
var r=this.__container__.lookup("-environment:main"),i=(0,n.get)(this,"router"),o=function(){return r.options.shouldRender?(0,s.renderSettled)().then(function(){return t}):t},a=function(e){if(e.error)throw e.error
if("TransitionAborted"===e.name&&i._routerMicrolib.activeTransition)return i._routerMicrolib.activeTransition.then(o,a)
throw"TransitionAborted"===e.name?new Error(e.message):e},l=(0,n.get)(i,"location")
return l.setURL(e),i.handleURL(l.getURL()).then(o,a)},willDestroy:function(){this._super.apply(this,arguments),this.application._unwatchInstance(this)}})
function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.jQuery=i.jQuery,this.isInteractive=r.environment.hasDOM,void 0!==e.isBrowser?this.isBrowser=!!e.isBrowser:this.isBrowser=r.environment.hasDOM,this.isBrowser||(this.jQuery=null,this.isInteractive=!1,this.location="none"),void 0!==e.shouldRender?this.shouldRender=!!e.shouldRender:this.shouldRender=!0,this.shouldRender||(this.jQuery=null,this.isInteractive=!1),e.document?this.document=e.document:this.document="undefined"!=typeof document?document:null,e.rootElement&&(this.rootElement=e.rootElement),void 0!==e.location&&(this.location=e.location),void 0!==e.jQuery&&(this.jQuery=e.jQuery),void 0!==e.isInteractive&&(this.isInteractive=!!e.isInteractive)}a.reopenClass({setupRegistry:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
t.toEnvironment||(t=new l(t)),e.register("-environment:main",t.toEnvironment(),{instantiate:!1}),e.register("service:-document",t.document,{instantiate:!1}),this._super(e,t)}}),l.prototype.toEnvironment=function(){var e=(0,t.assign)({},r.environment)
return e.hasDOM=this.isBrowser,e.isInteractive=this.isInteractive,e.options=this,e},e.default=a}),e("ember-application/system/application",["exports","ember-babel","ember-utils","ember-environment","ember-debug","ember-metal","ember-runtime","ember-views","ember-routing","ember-application/system/application-instance","container","ember-application/system/engine","ember-glimmer"],function(e,t,n,r,i,o,s,a,l,u,c,p,d){"use strict"
var f=(0,t.taggedTemplateLiteralLoose)(["-bucket-cache:main"],["-bucket-cache:main"]),h=!1,m=p.default.extend({rootElement:"body",eventDispatcher:null,customEvents:null,autoboot:!0,_globalsMode:!0,_applicationInstances:null,init:function(){this._super.apply(this,arguments),this.$||(this.$=a.jQuery),h||(h=!0,r.environment.hasDOM&&!a.jQueryDisabled&&o.libraries.registerCoreLibrary("jQuery",(0,a.jQuery)().jquery)),this._readinessDeferrals=1,this._booted=!1,this._applicationInstances=[],this.autoboot=this._globalsMode=!!this.autoboot,this._globalsMode&&this._prepareForGlobalsMode(),this.autoboot&&this.waitForDOMReady()},buildInstance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return e.base=this,e.application=this,u.default.create(e)},_watchInstance:function(e){this._applicationInstances.push(e)},_unwatchInstance:function(e){var t=this._applicationInstances.indexOf(e)
t>-1&&this._applicationInstances.splice(t,1)},_prepareForGlobalsMode:function(){this.Router=(this.Router||l.Router).extend(),this._buildDeprecatedInstance()},_buildDeprecatedInstance:function(){var e=this.buildInstance()
this.__deprecatedInstance__=e,this.__container__=e.__container__},waitForDOMReady:function(){!this.$||this.$.isReady?o.run.schedule("actions",this,"domReady"):this.$().ready(o.run.bind(this,"domReady"))},domReady:function(){this.isDestroyed||this._bootSync()},deferReadiness:function(){this._readinessDeferrals++},advanceReadiness:function(){this._readinessDeferrals--,0===this._readinessDeferrals&&o.run.once(this,this.didBecomeReady)},boot:function(){if(this._bootPromise)return this._bootPromise
try{this._bootSync()}catch(e){}return this._bootPromise},_bootSync:function(){if(!this._booted){var e=this._bootResolver=s.RSVP.defer()
this._bootPromise=e.promise
try{this.runInitializers(),(0,s.runLoadHooks)("application",this),this.advanceReadiness()}catch(t){throw e.reject(t),t}}},reset:function(){var e=this.__deprecatedInstance__
this._readinessDeferrals=1,this._bootPromise=null,this._bootResolver=null,this._booted=!1,o.run.join(this,function(){(0,o.run)(e,"destroy"),this._buildDeprecatedInstance(),o.run.schedule("actions",this,"_bootSync")})},didBecomeReady:function(){var e
try{(0,i.isTesting)()||(s.Namespace.processAll(),(0,s.setNamespaceSearchDisabled)(!0)),this.autoboot&&(e=void 0,(e=this._globalsMode?this.__deprecatedInstance__:this.buildInstance())._bootSync(),this.ready(),e.startRouting()),this._bootResolver.resolve(this),this._booted=!0}catch(e){throw this._bootResolver.reject(e),e}},ready:function(){return this},willDestroy:function(){this._super.apply(this,arguments),(0,s.setNamespaceSearchDisabled)(!1),this._booted=!1,this._bootPromise=null,this._bootResolver=null,s._loaded.application===this&&(s._loaded.application=void 0),this._applicationInstances.length&&(this._applicationInstances.forEach(function(e){return e.destroy()}),this._applicationInstances.length=0)},visit:function(e,t){var n=this
return this.boot().then(function(){var r=n.buildInstance()
return r.boot(t).then(function(){return r.visit(e)}).catch(function(e){throw(0,o.run)(r,"destroy"),e})})}})
m.reopenClass({buildRegistry:function(){!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
var e=this._super.apply(this,arguments)
return function(e){e.register("router:main",l.Router.extend()),e.register("-view-registry:main",{create:function(){return(0,n.dictionary)(null)}}),e.register("route:basic",l.Route),e.register("event_dispatcher:main",a.EventDispatcher),e.injection("router:main","namespace","application:main"),e.register("location:auto",l.AutoLocation),e.register("location:hash",l.HashLocation),e.register("location:history",l.HistoryLocation),e.register("location:none",l.NoneLocation),e.register((0,c.privatize)(f),l.BucketCache),e.register("service:router",l.RouterService),e.injection("service:router","_router","router:main")}(e),(0,d.setupApplicationRegistry)(e),e}}),e.default=m}),e("ember-application/system/engine-instance",["exports","ember-babel","ember-utils","ember-runtime","ember-debug","container","ember-application/system/engine-parent"],function(e,t,n,r,i,o,s){"use strict"
var a=(0,t.taggedTemplateLiteralLoose)(["-bucket-cache:main"],["-bucket-cache:main"]),l=(0,t.taggedTemplateLiteralLoose)(["template-options:main"],["template-options:main"]),u=r.Object.extend(r.RegistryProxyMixin,r.ContainerProxyMixin,{base:null,init:function(){this._super.apply(this,arguments),(0,n.guidFor)(this)
var e=this.base
e||(e=this.application,this.base=e)
var t=this.__registry__=new o.Registry({fallback:e.__registry__})
this.__container__=t.container({owner:this}),this._booted=!1},boot:function(e){var t=this
return this._bootPromise?this._bootPromise:(this._bootPromise=new r.RSVP.Promise(function(n){return n(t._bootSync(e))}),this._bootPromise)},_bootSync:function(e){return this._booted?this:(this.cloneParentDependencies(),this.setupRegistry(e),this.base.runInstanceInitializers(this),this._booted=!0,this)},setupRegistry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.__container__.lookup("-environment:main")
this.constructor.setupRegistry(this.__registry__,e)},unregister:function(e){this.__container__.reset(e),this._super.apply(this,arguments)},buildChildEngineInstance:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.lookup("engine:"+e)
if(!n)throw new i.Error("You attempted to mount the engine '"+e+"', but it is not registered with its parent.")
var r=n.buildInstance(t)
return(0,s.setEngineParent)(r,this),r},cloneParentDependencies:function(){var e=this,t=(0,s.getEngineParent)(this);["route:basic","service:-routing","service:-glimmer-environment"].forEach(function(n){return e.register(n,t.resolveRegistration(n))})
var n=t.lookup("-environment:main")
this.register("-environment:main",n,{instantiate:!1})
var r=["router:main",(0,o.privatize)(a),"-view-registry:main","renderer:-"+(n.isInteractive?"dom":"inert"),"service:-document",(0,o.privatize)(l)]
n.isInteractive&&r.push("event_dispatcher:main"),r.forEach(function(n){return e.register(n,t.lookup(n),{instantiate:!1})}),this.inject("view","_environment","-environment:main"),this.inject("route","_environment","-environment:main")}})
u.reopenClass({setupRegistry:function(e,t){t&&(e.injection("view","_environment","-environment:main"),e.injection("route","_environment","-environment:main"),t.isInteractive?(e.injection("view","renderer","renderer:-dom"),e.injection("component","renderer","renderer:-dom")):(e.injection("view","renderer","renderer:-inert"),e.injection("component","renderer","renderer:-inert")))}}),e.default=u}),e("ember-application/system/engine-parent",["exports","ember-utils"],function(e,t){"use strict"
e.ENGINE_PARENT=void 0,e.getEngineParent=function(e){return e[n]},e.setEngineParent=function(e,t){e[n]=t}
var n=e.ENGINE_PARENT=(0,t.symbol)("ENGINE_PARENT")}),e("ember-application/system/engine",["exports","ember-babel","ember-utils","ember-runtime","container","dag-map","ember-debug","ember-metal","ember-application/system/resolver","ember-application/system/engine-instance","ember-routing","ember-extension-support","ember-views","ember-glimmer"],function(e,t,n,r,i,o,s,a,l,u,c,p,d,f){"use strict"
var h=(0,t.taggedTemplateLiteralLoose)(["-bucket-cache:main"],["-bucket-cache:main"])
var m=r.Namespace.extend(r.RegistryProxyMixin,{init:function(){this._super.apply(this,arguments),this.buildRegistry()},_initializersRan:!1,ensureInitializers:function(){this._initializersRan||(this.runInitializers(),this._initializersRan=!0)},buildInstance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.ensureInitializers(),e.base=this,u.default.create(e)},buildRegistry:function(){return this.__registry__=this.constructor.buildRegistry(this)},initializer:function(e){this.constructor.initializer(e)},instanceInitializer:function(e){this.constructor.instanceInitializer(e)},runInitializers:function(){var e=this
this._runInitializer("initializers",function(t,n){n.initialize(e)})},runInstanceInitializers:function(e){this._runInitializer("instanceInitializers",function(t,n){n.initialize(e)})},_runInitializer:function(e,t){var n,r=(0,a.get)(this.constructor,e),i=function(e){var t=[]
for(var n in e)t.push(n)
return t}(r),s=new o.default,l=void 0
for(n=0;n<i.length;n++)l=r[i[n]],s.add(l.name,l,l.before,l.after)
s.topsort(t)}})
function g(e,t){return function(t){var n
void 0!==this.superclass[e]&&this.superclass[e]===this[e]&&((n={})[e]=Object.create(this[e]),this.reopenClass(n)),this[e][t.name]=t}}m.reopenClass({initializers:Object.create(null),instanceInitializers:Object.create(null),initializer:g("initializers","initializer"),instanceInitializer:g("instanceInitializers","instance initializer"),buildRegistry:function(e){var t=new i.Registry({resolver:function(e){return(e.get("Resolver")||l.default).create({namespace:e})}(e)})
return t.set=a.set,t.register("application:main",e,{instantiate:!1}),function(e){e.optionsForType("component",{singleton:!1}),e.optionsForType("view",{singleton:!1}),e.register("controller:basic",r.Controller,{instantiate:!1}),e.injection("view","_viewRegistry","-view-registry:main"),e.injection("renderer","_viewRegistry","-view-registry:main"),e.injection("event_dispatcher:main","_viewRegistry","-view-registry:main"),e.injection("route","_topLevelViewTemplate","template:-outlet"),e.injection("view:-outlet","namespace","application:main"),e.injection("controller","target","router:main"),e.injection("controller","namespace","application:main"),e.injection("router","_bucketCache",(0,i.privatize)(h)),e.injection("route","_bucketCache",(0,i.privatize)(h)),e.injection("route","_router","router:main"),e.register("service:-routing",c.RoutingService),e.injection("service:-routing","router","router:main"),e.register("resolver-for-debugging:main",e.resolver,{instantiate:!1}),e.injection("container-debug-adapter:main","resolver","resolver-for-debugging:main"),e.injection("data-adapter:main","containerDebugAdapter","container-debug-adapter:main"),e.register("container-debug-adapter:main",p.ContainerDebugAdapter),e.register("component-lookup:main",d.ComponentLookup)}(t),(0,f.setupEngineRegistry)(t),t},resolver:null,Resolver:null}),e.default=m}),e("ember-application/system/resolver",["exports","ember-utils","ember-metal","ember-debug","ember-runtime","ember-application/utils/validate-type","ember-glimmer"],function(e,t,n,r,i,o,s){"use strict"
e.Resolver=void 0,e.Resolver=i.Object.extend({namespace:null,normalize:null,resolve:null,parseName:null,lookupDescription:null,makeToString:null,resolveOther:null,_logLookup:null})
var a=i.Object.extend({namespace:null,init:function(){this._parseNameCache=(0,t.dictionary)(null)},normalize:function(e){var t=e.split(":"),n=t[0],r=t[1]
return"template"!==n?n+":"+r.replace(/(\.|_|-)./g,function(e){return e.charAt(1).toUpperCase()}):e},resolve:function(e){var t=this.parseName(e),n=t.resolveMethodName,r=void 0
return this[n]&&(r=this[n](t)),(r=r||this.resolveOther(t))&&(0,o.default)(r,t),r},parseName:function(e){return this._parseNameCache[e]||(this._parseNameCache[e]=this._parseName(e))},_parseName:function(e){var t,r,o=e.split(":"),s=o[0],a=o[1],l=a,u=(0,n.get)(this,"namespace"),c=l.lastIndexOf("/"),p=-1!==c?l.slice(0,c):null
"template"!==s&&-1!==c&&(l=(t=l.split("/"))[t.length-1],r=i.String.capitalize(t.slice(0,-1).join(".")),u=i.Namespace.byName(r))
var d="main"===a?"Main":i.String.classify(s)
if(!l||!s)throw new TypeError("Invalid fullName: `"+e+"`, must be of the form `type:name` ")
return{fullName:e,type:s,fullNameWithoutType:a,dirname:p,name:l,root:u,resolveMethodName:"resolve"+d}},lookupDescription:function(e){var t=this.parseName(e),n=void 0
return"template"===t.type?"template at "+t.fullNameWithoutType.replace(/\./g,"/"):(n=t.root+"."+i.String.classify(t.name).replace(/\./g,""),"model"!==t.type&&(n+=i.String.classify(t.type)),n)},makeToString:function(e){return e.toString()},useRouterNaming:function(e){"basic"===e.name?e.name="":e.name=e.name.replace(/\./g,"_")},resolveTemplate:function(e){var t=e.fullNameWithoutType.replace(/\./g,"/")
return(0,s.getTemplate)(t)||(0,s.getTemplate)(i.String.decamelize(t))},resolveView:function(e){return this.useRouterNaming(e),this.resolveOther(e)},resolveController:function(e){return this.useRouterNaming(e),this.resolveOther(e)},resolveRoute:function(e){return this.useRouterNaming(e),this.resolveOther(e)},resolveModel:function(e){var t=i.String.classify(e.name)
return(0,n.get)(e.root,t)},resolveHelper:function(e){return this.resolveOther(e)},resolveOther:function(e){var t=i.String.classify(e.name)+i.String.classify(e.type)
return(0,n.get)(e.root,t)},resolveMain:function(e){var t=i.String.classify(e.type)
return(0,n.get)(e.root,t)},knownForType:function(e){var r,o,s=(0,n.get)(this,"namespace"),a=i.String.classify(e),l=new RegExp(a+"$"),u=(0,t.dictionary)(null),c=Object.keys(s)
for(r=0;r<c.length;r++)o=c[r],l.test(o)&&(u[this.translateToContainerFullname(e,o)]=!0)
return u},translateToContainerFullname:function(e,t){var n=i.String.classify(e),r=t.slice(0,-1*n.length)
return e+":"+i.String.dasherize(r)}})
e.default=a}),e("ember-application/utils/validate-type",["exports","ember-debug"],function(e,t){"use strict"
e.default=function(e,t){var r=n[t.type]
if(r)r[1],r[2]}
var n={route:["assert","isRouteFactory","Ember.Route"],component:["deprecate","isComponentFactory","Ember.Component"],view:["deprecate","isViewFactory","Ember.View"],service:["deprecate","isServiceFactory","Ember.Service"]}}),e("ember-babel",["exports"],function(e){"use strict"
function t(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i)
o&&o.configurable&&void 0===e[i]&&Object.defineProperty(e,i,o)}return e}e.inherits=function(e,t){e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):n(e,t))},e.taggedTemplateLiteralLoose=function(e,t){return e.raw=t,e},e.createClass=function(e,n,r){n&&t(e.prototype,n)
r&&t(e,r)
return e},e.defaults=n
e.possibleConstructorReturn=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?e:t},e.slice=Array.prototype.slice}),e("ember-console",["exports"],function(e){"use strict"
e.default={log:function(){var e
return(e=console).log.apply(e,arguments)},warn:function(){var e
return(e=console).warn.apply(e,arguments)},error:function(){var e
return(e=console).error.apply(e,arguments)},info:function(){var e
return(e=console).info.apply(e,arguments)},debug:function(){var e,t
return console.debug?(t=console).debug.apply(t,arguments):(e=console).info.apply(e,arguments)},assert:function(){var e
return(e=console).assert.apply(e,arguments)}}}),e("ember-debug/deprecate",["exports","ember-debug/error","ember-console","ember-environment","ember-debug/index","ember-debug/handlers"],function(e){"use strict"
e.missingOptionsUntilDeprecation=e.missingOptionsIdDeprecation=e.missingOptionsDeprecation=e.registerHandler=void 0,e.default=void 0,e.registerHandler=function(){},e.missingOptionsDeprecation=void 0,e.missingOptionsIdDeprecation=void 0,e.missingOptionsUntilDeprecation=void 0}),e("ember-debug/error",["exports","ember-babel"],function(e,t){"use strict"
var n=function(e){function n(r){var i,o=(0,t.possibleConstructorReturn)(this,e.call(this))
if(!(o instanceof n))return i=new n(r),(0,t.possibleConstructorReturn)(o,i)
var s=Error.call(o,r)
return o.stack=s.stack,o.description=s.description,o.fileName=s.fileName,o.lineNumber=s.lineNumber,o.message=s.message,o.name=s.name,o.number=s.number,o.code=s.code,o}return(0,t.inherits)(n,e),n}(function(e){function t(){e.apply(this,arguments)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t}(Error))
e.default=n}),e("ember-debug/features",["exports","ember-environment","ember/features"],function(e,t,n){"use strict"
e.default=function(e){var n=r[e]
return!0===n||!1===n||void 0===n?n:!!t.ENV.ENABLE_OPTIONAL_FEATURES}
var r=n.FEATURES}),e("ember-debug/handlers",["exports"],function(e){"use strict"
e.HANDLERS={},e.registerHandler=function(){},e.invoke=function(){}})
e("ember-debug/index",["exports","ember-debug/warn","ember-debug/deprecate","ember-debug/features","ember-debug/error","ember-debug/testing","ember-environment","ember-console","ember/features"],function(e,t,n,r,i,o,s,a,l){"use strict"
e._warnIfUsingStrippedFeatureFlags=e.getDebugFunction=e.setDebugFunction=e.deprecateFunc=e.runInDebug=e.debugFreeze=e.debugSeal=e.deprecate=e.debug=e.warn=e.info=e.assert=e.setTesting=e.isTesting=e.Error=e.isFeatureEnabled=e.registerDeprecationHandler=e.registerWarnHandler=void 0,Object.defineProperty(e,"registerWarnHandler",{enumerable:!0,get:function(){return t.registerHandler}}),Object.defineProperty(e,"registerDeprecationHandler",{enumerable:!0,get:function(){return n.registerHandler}}),Object.defineProperty(e,"isFeatureEnabled",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Error",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"isTesting",{enumerable:!0,get:function(){return o.isTesting}}),Object.defineProperty(e,"setTesting",{enumerable:!0,get:function(){return o.setTesting}})
l.DEFAULT_FEATURES,l.FEATURES
var u=function(){}
e.assert=u,e.info=u,e.warn=u,e.debug=u,e.deprecate=u,e.debugSeal=u,e.debugFreeze=u,e.runInDebug=u,e.deprecateFunc=function(){return arguments[arguments.length-1]},e.setDebugFunction=u,e.getDebugFunction=u,e._warnIfUsingStrippedFeatureFlags=void 0}),e("ember-debug/testing",["exports"],function(e){"use strict"
e.isTesting=function(){return t},e.setTesting=function(e){t=!!e}
var t=!1}),e("ember-debug/warn",["exports","ember-environment","ember-console","ember-debug/deprecate","ember-debug/index","ember-debug/handlers"],function(e){"use strict"
e.missingOptionsDeprecation=e.missingOptionsIdDeprecation=e.registerHandler=void 0,e.default=function(){},e.registerHandler=function(){},e.missingOptionsIdDeprecation=void 0,e.missingOptionsDeprecation=void 0}),e("ember-environment",["exports"],function(e){"use strict"
function t(e){return e&&e.Object===Object?e:void 0}var n,r=t((n="object"==typeof global&&global)&&void 0===n.nodeType?n:void 0)||t("object"==typeof self&&self)||t("object"==typeof window&&window)||mainContext||new Function("return this")()
function i(e){return!1!==e}function o(e){return!0===e}var s,a="object"==typeof r.EmberENV&&r.EmberENV||"object"==typeof r.ENV&&r.ENV||{}
a.ENABLE_ALL_FEATURES&&(a.ENABLE_OPTIONAL_FEATURES=!0),a.EXTEND_PROTOTYPES=!1===(s=a.EXTEND_PROTOTYPES)?{String:!1,Array:!1,Function:!1}:s&&!0!==s?{String:i(s.String),Array:i(s.Array),Function:i(s.Function)}:{String:!0,Array:!0,Function:!0},a.LOG_STACKTRACE_ON_DEPRECATION=i(a.LOG_STACKTRACE_ON_DEPRECATION),a.LOG_VERSION=i(a.LOG_VERSION),a.LOG_BINDINGS=o(a.LOG_BINDINGS),a.RAISE_ON_DEPRECATION=o(a.RAISE_ON_DEPRECATION),a._APPLICATION_TEMPLATE_WRAPPER=i(a._APPLICATION_TEMPLATE_WRAPPER),a._TEMPLATE_ONLY_GLIMMER_COMPONENTS=o(a._TEMPLATE_ONLY_GLIMMER_COMPONENTS)
var l="undefined"!=typeof window&&window===r&&window.document&&window.document.createElement&&!a.disableBrowserEnvironment,u=r.Ember||{},c={imports:u.imports||r,exports:u.exports||r,lookup:u.lookup||r},p=l?{hasDOM:!0,isChrome:!!window.chrome&&!window.opera,isFirefox:"undefined"!=typeof InstallTrigger,location:window.location,history:window.history,userAgent:window.navigator.userAgent,window:window}:{hasDOM:!1,isChrome:!1,isFirefox:!1,location:null,history:null,userAgent:"Lynx (textmode)",window:null}
e.ENV=a,e.context=c,e.environment=p}),e("ember-extension-support/container_debug_adapter",["exports","ember-runtime"],function(e,t){"use strict"
e.default=t.Object.extend({resolver:null,canCatalogEntriesByType:function(e){return"model"!==e&&"template"!==e},catalogEntriesByType:function(e){var n=(0,t.A)(t.Namespace.NAMESPACES),r=(0,t.A)(),i=new RegExp(t.String.classify(e)+"$")
return n.forEach(function(e){var n
for(var o in e)e.hasOwnProperty(o)&&i.test(o)&&(n=e[o],"class"===(0,t.typeOf)(n)&&r.push(t.String.dasherize(o.replace(i,""))))}),r}})}),e("ember-extension-support/data_adapter",["exports","ember-utils","ember-metal","ember-runtime"],function(e,t,n,r){"use strict"
e.default=r.Object.extend({init:function(){this._super.apply(this,arguments),this.releaseMethods=(0,r.A)()},containerDebugAdapter:void 0,attributeLimit:3,acceptsModelName:!0,releaseMethods:(0,r.A)(),getFilters:function(){return(0,r.A)()},watchModelTypes:function(e,t){var n=this,i=this.getModelTypes(),o=(0,r.A)()
e(i.map(function(e){var r=e.klass,i=n.wrapModelType(r,e.name)
return o.push(n.observeModelType(e.name,t)),i}))
var s=function(){o.forEach(function(e){return e()}),n.releaseMethods.removeObject(s)}
return this.releaseMethods.pushObject(s),s},_nameToClass:function(e){var n
return"string"==typeof e&&(e=(n=(0,t.getOwner)(this).factoryFor("model:"+e))&&n.class),e},watchRecords:function(e,t,i,o){var s=this,a=(0,r.A)(),l=this._nameToClass(e),u=this.getRecords(l,e),c=void 0
function p(e){i([e])}var d=u.map(function(e){return a.push(s.observeRecord(e,p)),s.wrapRecord(e)}),f={didChange:function(e,r,i,l){var u,c,d
for(u=r;u<r+l;u++)c=(0,n.objectAt)(e,u),d=s.wrapRecord(c),a.push(s.observeRecord(c,p)),t([d])
i&&o(r,i)},willChange:function(){return this}}
return(0,r.addArrayObserver)(u,this,f),c=function(){a.forEach(function(e){return e()}),(0,r.removeArrayObserver)(u,s,f),s.releaseMethods.removeObject(c)},t(d),this.releaseMethods.pushObject(c),c},willDestroy:function(){this._super.apply(this,arguments),this.releaseMethods.forEach(function(e){return e()})},detect:function(){return!1},columnsForType:function(){return(0,r.A)()},observeModelType:function(e,t){var i=this,o=this._nameToClass(e),s=this.getRecords(o,e)
function a(){t([this.wrapModelType(o,e)])}var l={didChange:function(e,t,r,i){(r>0||i>0)&&n.run.scheduleOnce("actions",this,a)},willChange:function(){return this}}
return(0,r.addArrayObserver)(s,this,l),function(){return(0,r.removeArrayObserver)(s,i,l)}},wrapModelType:function(e,t){var r=this.getRecords(e,t)
return{name:t,count:(0,n.get)(r,"length"),columns:this.columnsForType(e),object:e}},getModelTypes:function(){var e=this,t=this.get("containerDebugAdapter"),n=void 0
return n=t.canCatalogEntriesByType("model")?t.catalogEntriesByType("model"):this._getObjectsOnNamespaces(),n=(0,r.A)(n).map(function(t){return{klass:e._nameToClass(t),name:t}}),n=(0,r.A)(n).filter(function(t){return e.detect(t.klass)}),(0,r.A)(n)},_getObjectsOnNamespaces:function(){var e=this,t=(0,r.A)(r.Namespace.NAMESPACES),n=(0,r.A)()
return t.forEach(function(t){var i
for(var o in t)t.hasOwnProperty(o)&&e.detect(t[o])&&(i=r.String.dasherize(o),n.push(i))}),n},getRecords:function(){return(0,r.A)()},wrapRecord:function(e){var t={object:e}
return t.columnValues=this.getRecordColumnValues(e),t.searchKeywords=this.getRecordKeywords(e),t.filterValues=this.getRecordFilterValues(e),t.color=this.getRecordColor(e),t},getRecordColumnValues:function(){return{}},getRecordKeywords:function(){return(0,r.A)()},getRecordFilterValues:function(){return{}},getRecordColor:function(){return null},observeRecord:function(){return function(){}}})}),e("ember-extension-support/index",["exports","ember-extension-support/data_adapter","ember-extension-support/container_debug_adapter"],function(e,t,n){"use strict"
Object.defineProperty(e,"DataAdapter",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"ContainerDebugAdapter",{enumerable:!0,get:function(){return n.default}})}),e("ember-glimmer",["exports","@glimmer/runtime","@glimmer/node","ember-babel","@glimmer/reference","ember-debug","ember-metal","ember-utils","ember-runtime","@glimmer/opcode-compiler","ember-views","ember-environment","node-module","rsvp","container","@glimmer/util","@glimmer/wire-format","@glimmer/program","ember-console","ember-routing"],function(e,t,n,r,i,o,s,a,l,u,c,p,d,f,h,m,g,v,b,y){"use strict"
e.NodeDOMTreeConstruction=e.DOMTreeConstruction=e.DOMChanges=e.OutletView=e.DebugStack=e.iterableFor=e.UpdatableReference=e.AbstractComponentManager=e._experimentalMacros=e._registerMacros=e.setupApplicationRegistry=e.setupEngineRegistry=e.setTemplates=e.getTemplates=e.hasTemplate=e.setTemplate=e.getTemplate=e.renderSettled=e._resetRenderers=e.InteractiveRenderer=e.InertRenderer=e.Renderer=e.isHTMLSafe=e.htmlSafe=e.escapeExpression=e.SafeString=e.Environment=e.helper=e.Helper=e.ROOT_REF=e.Component=e.LinkComponent=e.TextArea=e.TextField=e.Checkbox=e.template=e.RootTemplate=e.INVOKE=void 0,Object.defineProperty(e,"DOMChanges",{enumerable:!0,get:function(){return t.DOMChanges}}),Object.defineProperty(e,"DOMTreeConstruction",{enumerable:!0,get:function(){return t.DOMTreeConstruction}}),Object.defineProperty(e,"NodeDOMTreeConstruction",{enumerable:!0,get:function(){return n.NodeDOMTreeConstruction}})
var E,T=(0,r.taggedTemplateLiteralLoose)(["template:components/-default"],["template:components/-default"]),_=(0,r.taggedTemplateLiteralLoose)(["component:-default"],["component:-default"]),A=(0,r.taggedTemplateLiteralLoose)(["template:-root"],["template:-root"]),C=(0,r.taggedTemplateLiteralLoose)(["template-options:main"],["template-options:main"]),S=(0,a.symbol)("RECOMPUTE_TAG")
var w=l.FrameworkObject.extend({init:function(){this._super.apply(this,arguments),this[S]=i.DirtyableTag.create()},recompute:function(){this[S].inner.dirty()}})
w.reopenClass({isHelperFactory:!0,isSimpleHelper:!1})
var R=function(){function e(e){this.compute=e,this.isHelperFactory=!0,this.isSimpleHelper=!0}return e.prototype.create=function(){return this},e}()
function x(e){return new R(e)}function O(e){return!!e&&(!0===e||(!(0,l.isArray)(e)||0!==(0,s.get)(e,"length")))}var N=(0,a.symbol)("UPDATE"),L=function(){function e(){}return e.prototype.get=function(e){return D.create(this,e)},e}(),k=function(e){function t(){var t=(0,r.possibleConstructorReturn)(this,e.call(this))
return t._lastRevision=null,t._lastValue=null,t}return(0,r.inherits)(t,e),t.prototype.compute=function(){},t.prototype.value=function(){var e=this.tag,t=this._lastRevision,n=this._lastValue
return t&&e.validate(t)||(n=this._lastValue=this.compute(),this._lastRevision=e.value()),n},t}(L),I=function(e){function t(t){var n=(0,r.possibleConstructorReturn)(this,e.call(this,t))
return n.children=Object.create(null),n}return(0,r.inherits)(t,e),t.prototype.get=function(e){var t=this.children[e]
return void 0===t&&(t=this.children[e]=new P(this.inner,e)),t},t}(i.ConstReference),D=function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t.create=function(e,t){return(0,i.isConst)(e)?new P(e.value(),t):new M(e,t)},t.prototype.get=function(e){return new M(this,e)},t}(k),P=function(e){function t(t,n){var i=(0,r.possibleConstructorReturn)(this,e.call(this))
return i._parentValue=t,i._propertyKey=n,i.tag=(0,s.tagForProperty)(t,n),i}return(0,r.inherits)(t,e),t.prototype.compute=function(){var e=this._parentValue,t=this._propertyKey
return(0,s.get)(e,t)},t.prototype[N]=function(e){(0,s.set)(this._parentValue,this._propertyKey,e)},t}(D),M=function(e){function t(t,n){var o=(0,r.possibleConstructorReturn)(this,e.call(this)),s=t.tag,a=i.UpdatableTag.create(i.CONSTANT_TAG)
return o._parentReference=t,o._parentObjectTag=a,o._propertyKey=n,o.tag=(0,i.combine)([s,a]),o}return(0,r.inherits)(t,e),t.prototype.compute=function(){var e=this._parentReference,t=this._parentObjectTag,n=this._propertyKey,r=e.value()
t.inner.update((0,s.tagForProperty)(r,n))
var i=typeof r
return"string"===i&&"length"===n?r.length:"object"===i&&null!==r||"function"===i?(0,s.get)(r,n):void 0},t.prototype[N]=function(e){var t=this._parentReference.value();(0,s.set)(t,this._propertyKey,e)},t}(D),F=function(e){function t(t){var n=(0,r.possibleConstructorReturn)(this,e.call(this))
return n.tag=i.DirtyableTag.create(),n._value=t,n}return(0,r.inherits)(t,e),t.prototype.value=function(){return this._value},t.prototype.update=function(e){e!==this._value&&(this.tag.inner.dirty(),this._value=e)},t}(L),j=function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t}(F),B=function(e){function n(t){var n=(0,r.possibleConstructorReturn)(this,e.call(this,t))
return n.objectTag=i.UpdatableTag.create(i.CONSTANT_TAG),n.tag=(0,i.combine)([t.tag,n.objectTag]),n}return(0,r.inherits)(n,e),n.create=function(e){var r
return(0,i.isConst)(e)?(r=e.value(),(0,s.isProxy)(r)?new P(r,"isTruthy"):t.PrimitiveReference.create(O(r))):new n(e)},n.prototype.toBool=function(e){return(0,s.isProxy)(e)?(this.objectTag.inner.update((0,s.tagForProperty)(e,"isTruthy")),(0,s.get)(e,"isTruthy")):(this.objectTag.inner.update((0,s.tagFor)(e)),O(e))},n}(t.ConditionalReference),H=function(e){function t(t,n){var i=(0,r.possibleConstructorReturn)(this,e.call(this))
return i.tag=n.tag,i.helper=t,i.args=n,i}return(0,r.inherits)(t,e),t.create=function(e,n){var r,o
return(0,i.isConst)(n)?(r=n.positional,o=n.named,K(e(r.value(),o.value()))):new t(e,n)},t.prototype.compute=function(){var e=this.helper,t=this.args,n=t.positional,r=t.named
return e(n.value(),r.value())},t}(k),$=function(e){function t(t,n){var o=(0,r.possibleConstructorReturn)(this,e.call(this))
return o.tag=(0,i.combine)([t[S],n.tag]),o.instance=t,o.args=n,o}return(0,r.inherits)(t,e),t.create=function(e,n){return new t(e,n)},t.prototype.compute=function(){var e=this.instance,t=this.args,n=t.positional,r=t.named,i=n.value(),o=r.value()
return e.compute(i,o)},t}(k),U=function(e){function t(t,n){var i=(0,r.possibleConstructorReturn)(this,e.call(this))
return i.tag=n.tag,i.helper=t,i.args=n,i}return(0,r.inherits)(t,e),t.prototype.compute=function(){return(0,this.helper)(this.args)},t}(k),W=function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t.create=function(e){return K(e,!1)},t.prototype.get=function(e){return K((0,s.get)(this.inner,e),!1)},t}(i.ConstReference)
function z(e,t){var n,r=e
for(n=0;n<t.length;n++)r=r.get(t[n])
return r}function K(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
return null!==e&&"object"==typeof e?n?new I(e):new W(e):"function"==typeof e?new W(e):t.PrimitiveReference.create(e)}var q=(0,a.symbol)("INVOKE"),V=(0,a.symbol)("ACTION")
function G(e){return e}function Y(e,t,n,r,i){var o,a=void 0,l=void 0
return"function"==typeof n[q]?(a=n,l=n[q]):"string"===(o=typeof n)?(a=t,l=t.actions&&t.actions[n]):"function"===o&&(a=e,l=n),function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,i={target:a,args:t,label:"@glimmer/closure-action"}
return(0,s.flaggedInstrument)("interaction.ember-action",i,function(){return s.run.join.apply(s.run,[a,l].concat(r(t)))})}}function Q(e){return new X((0,u.templateFactory)(e))}var X=function(){function e(e){this.factory=e,this.id=e.id,this.meta=e.meta}return e.prototype.create=function(e){var t=(0,a.getOwner)(e)
return this.factory.create(e.options,{owner:t})},e}(),J=Q({id:"UYMQEP0l",block:'{"symbols":[],"statements":[[1,[26,"component",[[21,0,[]]],null],false]],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/root.hbs"}}),Z=(0,a.symbol)("DIRTY_TAG"),ee=(0,a.symbol)("ARGS"),te=(0,a.symbol)("ROOT_REF"),ne=(0,a.symbol)("IS_DISPATCHING_ATTRS"),re=(0,a.symbol)("HAS_BLOCK"),ie=(0,a.symbol)("BOUNDS"),oe=c.CoreView.extend(c.ChildViewsSupport,c.ViewStateSupport,c.ClassNamesSupport,l.TargetActionSupport,c.ActionSupport,c.ViewMixin,((E={isComponent:!0,init:function(){this._super.apply(this,arguments),this[ne]=!1,this[Z]=i.DirtyableTag.create(),this[te]=new I(this),this[ie]=null},rerender:function(){this[Z].inner.dirty(),this._super()},__defineNonEnumerable:function(e){this[e.name]=e.descriptor.value}})[s.PROPERTY_DID_CHANGE]=function(e){if(!this[ne]){var t=this[ee],n=t&&t[e]
n&&n[N]&&n[N]((0,s.get)(this,e))}},E.getAttr=function(e){return this.get(e)},E.readDOMAttr=function(e){var n=(0,c.getViewElement)(this),r=n.namespaceURI===t.SVG_NAMESPACE,i=(0,t.normalizeProperty)(n,e),o=i.type,s=i.normalized
return r?n.getAttribute(s):"attr"===o?n.getAttribute(s):n[s]},E))
oe.toString=function(){return"@ember/component"},oe.reopenClass({isComponentFactory:!0,positionalParams:[]})
var se=Q({id:"5jp2oO+o",block:'{"symbols":[],"statements":[],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/empty.hbs"}}),ae=oe.extend({layout:se,classNames:["ember-checkbox"],tagName:"input",attributeBindings:["type","checked","indeterminate","disabled","tabindex","name","autofocus","required","form"],type:"checkbox",disabled:!1,indeterminate:!1,didInsertElement:function(){this._super.apply(this,arguments),(0,s.get)(this,"element").indeterminate=!!(0,s.get)(this,"indeterminate")},change:function(){(0,s.set)(this,"checked",this.element.checked)}})
ae.toString=function(){return"@ember/component/checkbox"}
var le=Object.create(null)
var ue=oe.extend(c.TextSupport,{layout:se,classNames:["ember-text-field"],tagName:"input",attributeBindings:["accept","autocomplete","autosave","dir","formaction","formenctype","formmethod","formnovalidate","formtarget","height","inputmode","lang","list","type","max","min","multiple","name","pattern","size","step","value","width"],value:"",type:(0,s.computed)({get:function(){return"text"},set:function(e,t){var n="text"
return function(e){if(e in le)return le[e]
if(!p.environment.hasDOM)return le[e]=e,e
var t=document.createElement("input")
try{t.type=e}catch(e){}return le[e]=t.type===e}(t)&&(n=t),n}}),size:null,pattern:null,min:null,max:null})
ue.toString=function(){return"@ember/component/text-field"}
var ce=oe.extend(c.TextSupport,{classNames:["ember-text-area"],layout:se,tagName:"textarea",attributeBindings:["rows","cols","name","selectionEnd","selectionStart","wrap","lang","dir","value"],rows:null,cols:null})
ce.toString=function(){return"@ember/component/text-area"}
var pe=Q({id:"4GmgUGfN",block:'{"symbols":["&default"],"statements":[[4,"if",[[22,["linkTitle"]]],null,{"statements":[[1,[20,"linkTitle"],false]],"parameters":[]},{"statements":[[13,1]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/link-to.hbs"}}),de=oe.extend({layout:pe,tagName:"a","current-when":null,title:null,rel:null,tabindex:null,target:null,activeClass:"active",loadingClass:"loading",disabledClass:"disabled",replace:!1,attributeBindings:["href","title","rel","tabindex","target"],classNameBindings:["active","loading","disabled","transitioningIn","transitioningOut"],eventName:"click",init:function(){this._super.apply(this,arguments)
var e=(0,s.get)(this,"eventName")
this.on(e,this,this._invoke)},_routing:l.inject.service("-routing"),disabled:(0,s.computed)({get:function(){return!1},set:function(e,t){return this._isDisabled=t,!!t&&(0,s.get)(this,"disabledClass")}}),_isActive:function(e){if((0,s.get)(this,"loading"))return!1
var t,n=(0,s.get)(this,"current-when")
if("boolean"==typeof n)return n
var r=!!n
n=(n=n||(0,s.get)(this,"qualifiedRouteName")).split(" ")
var i=(0,s.get)(this,"_routing"),o=(0,s.get)(this,"models"),a=(0,s.get)(this,"resolvedQueryParams")
for(t=0;t<n.length;t++)if(i.isActiveForRoute(o,a,n[t],e,r))return!0
return!1},active:(0,s.computed)("activeClass","_active",function(){return!!this.get("_active")&&(0,s.get)(this,"activeClass")}),_active:(0,s.computed)("_routing.currentState","attrs.params",function(){var e=(0,s.get)(this,"_routing.currentState")
return!!e&&this._isActive(e)}),willBeActive:(0,s.computed)("_routing.targetState",function(){var e=(0,s.get)(this,"_routing"),t=(0,s.get)(e,"targetState")
if((0,s.get)(e,"currentState")!==t)return this._isActive(t)}),transitioningIn:(0,s.computed)("active","willBeActive",function(){return!0===(0,s.get)(this,"willBeActive")&&!(0,s.get)(this,"_active")&&"ember-transitioning-in"}),transitioningOut:(0,s.computed)("active","willBeActive",function(){return!(!1!==(0,s.get)(this,"willBeActive")||!(0,s.get)(this,"_active"))&&"ember-transitioning-out"}),_invoke:function(e){if(!(0,c.isSimpleClick)(e))return!0
var t=(0,s.get)(this,"preventDefault"),n=(0,s.get)(this,"target")
if(!1!==t&&(n&&"_self"!==n||e.preventDefault()),!1===(0,s.get)(this,"bubbles")&&e.stopPropagation(),this._isDisabled)return!1
if((0,s.get)(this,"loading"))return!1
if(n&&"_self"!==n)return!1
var r=(0,s.get)(this,"qualifiedRouteName"),i=(0,s.get)(this,"models"),o=(0,s.get)(this,"queryParams.values"),a=(0,s.get)(this,"replace"),l={queryParams:o,routeName:r}
return(0,s.flaggedInstrument)("interaction.link-to",l,this._generateTransition(l,r,i,o,a)),!1},_generateTransition:function(e,t,n,r,i){var o=(0,s.get)(this,"_routing")
return function(){e.transition=o.transitionTo(t,n,r,i)}},queryParams:null,qualifiedRouteName:(0,s.computed)("targetRouteName","_routing.currentState",function(){var e=(0,s.get)(this,"params"),t=e.length,n=e[t-1]
return n&&n.isQueryParams&&t--,(this[re]?0===t:1===t)?(0,s.get)(this,"_routing.currentRouteName"):(0,s.get)(this,"targetRouteName")}),resolvedQueryParams:(0,s.computed)("queryParams",function(){var e={},t=(0,s.get)(this,"queryParams")
if(!t)return e
var n=t.values
for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])
return e}),href:(0,s.computed)("models","qualifiedRouteName",function(){if("a"===(0,s.get)(this,"tagName")){var e=(0,s.get)(this,"qualifiedRouteName"),t=(0,s.get)(this,"models")
if((0,s.get)(this,"loading"))return(0,s.get)(this,"loadingHref")
var n=(0,s.get)(this,"_routing"),r=(0,s.get)(this,"queryParams.values")
return n.generateURL(e,t,r)}}),loading:(0,s.computed)("_modelsAreLoaded","qualifiedRouteName",function(){var e=(0,s.get)(this,"qualifiedRouteName")
if(!(0,s.get)(this,"_modelsAreLoaded")||null===e||void 0===e)return(0,s.get)(this,"loadingClass")}),_modelsAreLoaded:(0,s.computed)("models",function(){var e,t,n=(0,s.get)(this,"models")
for(e=0;e<n.length;e++)if(null===(t=n[e])||void 0===t)return!1
return!0}),_getModels:function(e){var t,n,r=e.length-1,i=new Array(r)
for(t=0;t<r;t++)n=e[t+1],i[t]=n
return i},loadingHref:"#",didReceiveAttrs:function(){var e=void 0,t=(0,s.get)(this,"params")
t&&(t=t.slice())
var n=(0,s.get)(this,"disabledWhen")
void 0!==n&&this.set("disabled",n),this[re]||this.set("linkTitle",t.shift()),this.set("targetRouteName",t[0])
var r=t[t.length-1]
e=r&&r.isQueryParams?t.pop():{values:{}},this.set("queryParams",e),t.length>1?this.set("models",this._getModels(t)):this.set("models",[])}})
de.toString=function(){return"@ember/routing/link-component"},de.reopenClass({positionalParams:"params"})
var fe=(0,a.symbol)("EACH_IN")
function he(e,t){return function(e){return e&&e[fe]}(e)?new Te(e,function(e){switch(e){case"@index":case void 0:case null:return me
case"@identity":return ge
default:return function(t){return(0,s.get)(t,e)}}}(t)):new _e(e,function(e){switch(e){case"@index":return me
case"@identity":case void 0:case null:return ge
default:return function(t){return(0,s.get)(t,e)}}}(t))}function me(e,t){return String(t)}function ge(e){switch(typeof e){case"string":case"number":return String(e)
default:return(0,a.guidFor)(e)}}var ve=function(){function e(e,t,n){this.array=e,this.length=t,this.keyFor=n,this.position=0,this.seen=Object.create(null)}return e.from=function(e,t){return e.length>0?new this(e,e.length,t):Ee},e.prototype.isEmpty=function(){return!1},e.prototype.getMemo=function(e){return e},e.prototype.getValue=function(e){return this.array[e]},e.prototype.next=function(){var e=this.length,t=this.keyFor,n=this.position,r=this.seen
if(n>=e)return null
var i=this.getValue(n),o=this.getMemo(n),s=function(e,t){var n=e[t]
return n>0?(e[t]++,t+"be277757-bbbe-4620-9fcb-213ef433cca2"+n):(e[t]=1,t)}(r,t(i,o))
return this.position++,{key:s,value:i,memo:o}},e}(),be=function(e){function t(t,n,i){return(0,r.possibleConstructorReturn)(this,e.call(this,t,n,i))}return(0,r.inherits)(t,e),t.from=function(e,t){var n=(0,s.get)(e,"length")
return n>0?new this(e,n,t):Ee},t.prototype.getValue=function(e){return(0,s.objectAt)(this.array,e)},t}(ve),ye=function(e){function t(t,n,i,o){var s=(0,r.possibleConstructorReturn)(this,e.call(this,n,i,o))
return s.keys=t,s}return(0,r.inherits)(t,e),t.from=function(e,t){var n=Object.keys(e),r=n.length
return r>0?new this(n,n.map(function(t){return e[t]}),r,t):Ee},t.prototype.getMemo=function(e){return this.keys[e]},t}(ve),Ee=new(function(){function e(){}return e.prototype.isEmpty=function(){return!0},e.prototype.next=function(){throw new Error("Cannot call next() on an empty iterator")},e}()),Te=function(){function e(e,t){this.ref=e,this.keyFor=t
var n=this.valueTag=i.UpdatableTag.create(i.CONSTANT_TAG)
this.tag=(0,i.combine)([e.tag,n])}return e.prototype.iterate=function(){var e=this.ref,t=this.keyFor,n=this.valueTag,r=e.value(),i=(0,s.tagFor)(r);(0,s.isProxy)(r)&&(r=(0,l._contentFor)(r)),n.inner.update(i)
var o=typeof r
return null===r||"object"!==o&&"function"!==o?Ee:ye.from(r,t)},e.prototype.valueReferenceFor=function(e){return new j(e.memo)},e.prototype.updateValueReference=function(e,t){e.update(t.memo)},e.prototype.memoReferenceFor=function(e){return new F(e.value)},e.prototype.updateMemoReference=function(e,t){e.update(t.value)},e}(),_e=function(){function e(e,t){this.ref=e,this.keyFor=t
var n=this.valueTag=i.UpdatableTag.create(i.CONSTANT_TAG)
this.tag=(0,i.combine)([e.tag,n])}return e.prototype.iterate=function(){var e,t=this.ref,n=this.keyFor,r=this.valueTag,i=t.value()
return r.inner.update((0,s.tagForProperty)(i,"[]")),null===i||"object"!=typeof i?Ee:Array.isArray(i)?ve.from(i,n):(0,l.isEmberArray)(i)?be.from(i,n):"function"==typeof i.forEach?(e=[],i.forEach(function(t){return e.push(t)}),ve.from(e,n)):Ee},e.prototype.valueReferenceFor=function(e){return new F(e.value)},e.prototype.updateValueReference=function(e,t){e.update(t.value)},e.prototype.memoReferenceFor=function(e){return new j(e.memo)},e.prototype.updateMemoReference=function(e,t){e.update(t.memo)},e}(),Ae=function(){function e(e){this.string=e}return e.prototype.toString=function(){return""+this.string},e.prototype.toHTML=function(){return this.toString()},e}(),Ce={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},Se=/[&<>"'`=]/,we=/[&<>"'`=]/g
function Re(e){return Ce[e]}function xe(e){return null===e||void 0===e?e="":"string"!=typeof e&&(e=""+e),new Ae(e)}function Oe(e){return null!==e&&"object"==typeof e&&"function"==typeof e.toHTML}var Ne=void 0,Le=void 0
function ke(e){return Le||(Le=document.createElement("a")),Le.href=e,Le.protocol}function Ie(e){var t=null
return"string"==typeof e&&(t=Ne.parse(e).protocol),null===t?":":t}var De=function(e){function t(t){var n=(0,r.possibleConstructorReturn)(this,e.call(this,t))
return n.owner=t[a.OWNER],n.isInteractive=n.owner.lookup("-environment:main").isInteractive,n.destroyedComponents=[],function(e){var t=void 0
if(p.environment.hasDOM&&(t=ke.call(e,"foobar:baz")),"foobar:"===t)e.protocolForURL=ke
else if("object"==typeof URL)Ne=URL,e.protocolForURL=Ie
else{if(!d.IS_NODE)throw new Error("Could not find valid URL parsing mechanism for URL Sanitization")
Ne=(0,d.require)("url"),e.protocolForURL=Ie}}(n),n}return(0,r.inherits)(t,e),t.create=function(e){return new this(e)},t.prototype.protocolForURL=function(e){return e},t.prototype._resolveLocalLookupName=function(e,t,n){return n._resolveLocalLookupName(e,t)},t.prototype.lookupComponent=function(e,t){return(0,c.lookupComponent)(t.owner,e,t)},t.prototype.toConditionalReference=function(e){return B.create(e)},t.prototype.iterableFor=function(e,t){return he(e,t)},t.prototype.scheduleInstallModifier=function(t,n){this.isInteractive&&e.prototype.scheduleInstallModifier.call(this,t,n)},t.prototype.scheduleUpdateModifier=function(t,n){this.isInteractive&&e.prototype.scheduleUpdateModifier.call(this,t,n)},t.prototype.didDestroy=function(e){e.destroy()},t.prototype.begin=function(){this.inTransaction=!0,e.prototype.begin.call(this)},t.prototype.commit=function(){var t,n=this.destroyedComponents
for(this.destroyedComponents=[],t=0;t<n.length;t++)n[t].destroy()
try{e.prototype.commit.call(this)}finally{this.inTransaction=!1}},t}(t.Environment),Pe=function(){function e(){this.debugStack=void 0}return e.prototype.prepareArgs=function(){return null},e.prototype.didCreateElement=function(){},e.prototype.didRenderLayout=function(){},e.prototype.didCreate=function(){},e.prototype.update=function(){},e.prototype.didUpdateLayout=function(){},e.prototype.didUpdate=function(){},e}()
function Me(e){return{object:e.name+":"+e.outlet}}var Fe={dynamicLayout:!1,dynamicTag:!1,prepareArgs:!1,createArgs:!1,attributeHook:!1,elementHook:!1},je=function(e){function n(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(n,e),n.prototype.create=function(e,n,r,i){i.outletState=n.ref,void 0===i.rootOutletState&&(i.rootOutletState=i.outletState)
var o=n.controller
return{self:void 0===o?t.UNDEFINED_REFERENCE:new I(o),finalize:(0,s._instrumentStart)("render.outlet",Me,n)}},n.prototype.layoutFor=function(){throw new Error("Method not implemented.")},n.prototype.getLayout=function(e){var t=e.template.asLayout()
return{handle:t.compile(),symbolTable:t.symbolTable}},n.prototype.getCapabilities=function(){return Fe},n.prototype.getSelf=function(e){return e.self},n.prototype.getTag=function(){return i.CONSTANT_TAG},n.prototype.didRenderLayout=function(e){e.finalize()},n.prototype.getDestructor=function(){return null},n}(Pe),Be=new je,He=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Be
this.state=e,this.manager=t}
function $e(){}var Ue=function(){function e(e,t,n,r){this.environment=e,this.component=t,this.args=n,this.finalizer=r,this.classRef=null,this.classRef=null,this.argsRevision=null===n?0:n.tag.value()}return e.prototype.destroy=function(){var e=this.component,t=this.environment
t.isInteractive&&(e.trigger("willDestroyElement"),e.trigger("willClearRender")),t.destroyedComponents.push(e)},e.prototype.finalize=function(){(0,this.finalizer)(),this.finalizer=$e},e}()
function We(e,t){return e[te].get(t)}function ze(e,t){return"attrs"===t[0]&&(t.shift(),1===t.length)?We(e,t[0]):z(e[te],t)}function Ke(e){if(null!==e){var t,n,r,i,o=e[0],s=e[1],a=null===o?-1:o.indexOf("class")
if(-1!==a){if(t=s[a],!Array.isArray(t))return;(n=t[0])!==g.Ops.Get&&n!==g.Ops.MaybeLocal||(i=(r=t[t.length-1])[r.length-1],s[a]=[g.Ops.Helper,"-class",[t,i],null])}}}var qe={parse:function(e){var t=e.indexOf(":")
return-1===t?[e,e,!0]:[e.substring(0,t),e.substring(t+1),!1]},install:function(e,n,r,i){var o,a=r[0],l=r[1]
r[2]
if("id"===l)return void 0!==(o=(0,s.get)(n,a))&&null!==o||(o=n.elementId),o=t.PrimitiveReference.create(o),void i.setAttribute("id",o,!0,null)
var u=a.indexOf(".")>-1,c=u?ze(n,a.split(".")):We(n,a)
"style"===l&&(c=new Ge(c,We(n,"isVisible"))),i.setAttribute(l,c,!1,null)}},Ve=xe("display: none;"),Ge=function(e){function t(t,n){var o=(0,r.possibleConstructorReturn)(this,e.call(this))
return o.inner=t,o.isVisible=n,o.tag=(0,i.combine)([t.tag,n.tag]),o}return(0,r.inherits)(t,e),t.prototype.compute=function(){var e,t=this.inner.value()
return!1!==this.isVisible.value()?t:t?(e=t+" display: none;",Oe(t)?xe(e):e):Ve},t}(i.CachedReference),Ye={install:function(e,t,n){n.setAttribute("style",(0,i.map)(We(t,"isVisible"),this.mapStyleValue),!1,null)},mapStyleValue:function(e){return!1===e?Ve:null}},Qe=function(e,n,r,i){var o,s,a,l,u=r.split(":"),c=u[0],p=u[1],d=u[2]
""===c?i.setAttribute("class",t.PrimitiveReference.create(p),!0,null):(s=(o=c.indexOf(".")>-1)?c.split("."):[],a=o?ze(n,s):We(n,c),l=void 0,l=void 0===p?new Xe(a,o?s[s.length-1]:c):new Je(a,p,d),i.setAttribute("class",l,!1,null))},Xe=function(e){function t(t,n){var i=(0,r.possibleConstructorReturn)(this,e.call(this))
return i.inner=t,i.path=n,i.tag=t.tag,i.inner=t,i.path=n,i.dasherizedPath=null,i}return(0,r.inherits)(t,e),t.prototype.compute=function(){var e,t=this.inner.value()
return!0===t?(e=this.path,this.dasherizedPath||(this.dasherizedPath=l.String.dasherize(e))):t||0===t?String(t):null},t}(i.CachedReference),Je=function(e){function t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=(0,r.possibleConstructorReturn)(this,e.call(this))
return o.inner=t,o.truthy=n,o.falsy=i,o.tag=t.tag,o}return(0,r.inherits)(t,e),t.prototype.compute=function(){var e=this.inner,t=this.truthy,n=this.falsy
return e.value()?t:n},t}(i.CachedReference)
function Ze(e){var t,n,r,i,o=e.names,s=e.value(),a=Object.create(null),l=Object.create(null)
for(a[ee]=l,t=0;t<o.length;t++)n=o[t],r=e.get(n),"function"==typeof(i=s[n])&&i[V]?s[n]=i:r[N]&&(s[n]=new tt(r,i)),l[n]=r,a[n]=i
return a.attrs=s,a}var et=(0,a.symbol)("REF"),tt=function(){function e(e,t){this[c.MUTABLE_CELL]=!0,this[et]=e,this.value=t}return e.prototype.update=function(e){this[et][N](e)},e}()
var nt=(0,h.privatize)(T),rt=function(e){function n(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(n,e),n.prototype.getLayout=function(e){return{handle:e.handle,symbolTable:e.symbolTable}},n.prototype.templateFor=function(e,t){var n,r=(0,s.get)(e,"layout")
if(void 0!==r)return"function"==typeof r.create?t.createTemplate(r,(0,a.getOwner)(e)):r
var i=(0,a.getOwner)(e),o=(0,s.get)(e,"layoutName")
return o&&(n=i.lookup("template:"+o))?n:i.lookup(nt)},n.prototype.getDynamicLayout=function(e,t){var n=e.component,r=this.templateFor(n,t).asWrappedLayout()
return{handle:r.compile(),symbolTable:r.symbolTable}},n.prototype.getTagName=function(e){var t=e.component
return""===t.tagName?null:t&&t.tagName||"div"},n.prototype.getCapabilities=function(e){return e.capabilities},n.prototype.prepareArgs=function(e,t){var n,r,i,o=e.ComponentClass.class.positionalParams
if(void 0===o||null===o||0===t.positional.length)return null
var s=void 0
if("string"==typeof o)(n={})[o]=t.positional.capture(),s=n,(0,a.assign)(s,t.named.capture().map)
else{if(!(Array.isArray(o)&&o.length>0))return null
for(r=Math.min(o.length,t.positional.length),s={},(0,a.assign)(s,t.named.capture().map),i=0;i<r;i++)s[o[i]]=t.positional.at(i)}return{positional:m.EMPTY_ARRAY,named:s}},n.prototype.create=function(e,t,n,r,i,o){var a=r.view,l=t.ComponentClass,u=n.named.capture(),c=Ze(u);(function(e,t){e.named.has("id")&&(t.elementId=t.id)})(n,c),c.parentView=a,c[re]=o,c._targetObject=i.value(),t.template&&(c.layout=t.template)
var p=l.create(c),d=(0,s._instrumentStart)("render.component",it,p)
r.view=p,null!==a&&void 0!==a&&a.appendChild(p),""===p.tagName&&(e.isInteractive&&p.trigger("willRender"),p._transitionTo("hasElement"),e.isInteractive&&p.trigger("willInsertElement"))
var f=new Ue(e,p,u,d)
return n.named.has("class")&&(f.classRef=n.named.get("class")),e.isInteractive&&""!==p.tagName&&p.trigger("willRender"),f},n.prototype.getSelf=function(e){return e.component[te]},n.prototype.didCreateElement=function(e,n,r){var i,o=e.component,s=e.classRef,l=e.environment;(0,c.setViewElement)(o,n)
var u=o.attributeBindings,p=o.classNames,d=o.classNameBindings
r.setAttribute("id",t.PrimitiveReference.create((0,a.guidFor)(o)),!1,null),u&&u.length?function(e,n,r,i){for(var o,s,a,l=[],u=n.length-1;-1!==u;)o=n[u],a=(s=qe.parse(o))[1],-1===l.indexOf(a)&&(l.push(a),qe.install(e,r,s,i)),u--;-1===l.indexOf("id")&&i.setAttribute("id",t.PrimitiveReference.create(r.elementId),!0,null),-1===l.indexOf("style")&&Ye.install(e,r,i)}(n,u,o,r):(o.elementId&&r.setAttribute("id",t.PrimitiveReference.create(o.elementId),!1,null),Ye.install(n,o,r)),s&&(i=new Xe(s,s._propertyKey),r.setAttribute("class",i,!1,null)),p&&p.length&&p.forEach(function(e){r.setAttribute("class",t.PrimitiveReference.create(e),!1,null)}),d&&d.length&&d.forEach(function(e){Qe(n,o,e,r)}),r.setAttribute("class",t.PrimitiveReference.create("ember-view"),!1,null),"ariaRole"in o&&r.setAttribute("role",We(o,"ariaRole"),!1,null),o._transitionTo("hasElement"),l.isInteractive&&o.trigger("willInsertElement")},n.prototype.didRenderLayout=function(e,t){e.component[ie]=t,e.finalize()},n.prototype.getTag=function(e){var t=e.args,n=e.component
return t?(0,i.combine)([t.tag,n[Z]]):n[Z]},n.prototype.didCreate=function(e){var t=e.component
e.environment.isInteractive&&(t._transitionTo("inDOM"),t.trigger("didInsertElement"),t.trigger("didRender"))},n.prototype.update=function(e){var t,n=e.component,r=e.args,i=e.argsRevision,o=e.environment
e.finalizer=(0,s._instrumentStart)("render.component",ot,n),r&&!r.tag.validate(i)&&(t=Ze(r),e.argsRevision=r.tag.value(),n[ne]=!0,n.setProperties(t),n[ne]=!1,n.trigger("didUpdateAttrs"),n.trigger("didReceiveAttrs")),o.isInteractive&&(n.trigger("willUpdate"),n.trigger("willRender"))},n.prototype.didUpdateLayout=function(e){e.finalize()},n.prototype.didUpdate=function(e){var t=e.component
e.environment.isInteractive&&(t.trigger("didUpdate"),t.trigger("didRender"))},n.prototype.getDestructor=function(e){return e},n}(Pe)
function it(e){return e.instrumentDetails({initialRender:!0})}function ot(e){return e.instrumentDetails({initialRender:!1})}var st={dynamicLayout:!0,dynamicTag:!0,prepareArgs:!0,createArgs:!0,attributeHook:!0,elementHook:!0},at=new rt,lt=function(e){function t(t){var n=(0,r.possibleConstructorReturn)(this,e.call(this))
return n.component=t,n}return(0,r.inherits)(t,e),t.prototype.getLayout=function(e,t){var n=this.templateFor(this.component,t).asWrappedLayout()
return{handle:n.compile(),symbolTable:n.symbolTable}},t.prototype.create=function(e,t,n,r){var i=this.component,o=(0,s._instrumentStart)("render.component",it,i)
return r.view=i,""===i.tagName&&(e.isInteractive&&i.trigger("willRender"),i._transitionTo("hasElement"),e.isInteractive&&i.trigger("willInsertElement")),new Ue(e,i,null,o)},t}(rt),ut={dynamicLayout:!1,dynamicTag:!0,prepareArgs:!1,createArgs:!1,attributeHook:!0,elementHook:!0},ct=function(){function e(e){this.component=e
var t=new lt(e)
this.manager=t
var n=h.FACTORY_FOR.get(e)
this.state={name:n.fullName.slice(10),capabilities:ut,ComponentClass:n,handle:null}}return e.prototype.getTag=function(e){return e.component[Z]},e}(),pt=s.run.backburner,dt=function(){function e(e,t,n){this.view=e,this.outletState=t,this.rootOutletState=n}return e.prototype.child=function(){return new e(this.view,this.outletState,this.rootOutletState)},e.prototype.get=function(e){return this.outletState},e.prototype.set=function(e,t){return this.outletState=t,t},e}(),ft=function(){function e(e,n,r,i,o,s){var a=this
this.id=(0,c.getViewId)(e),this.env=n,this.root=e,this.result=void 0,this.shouldReflush=!1,this.destroyed=!1
var l=this.options={alwaysRevalidate:!1}
this.render=function(){var e=r.asLayout(),u=e.compile(),c=(0,t.renderMain)(e.options.program,n,i,s,(0,t.clientBuilder)(n,{element:o,nextSibling:null}),u),p=void 0
do{p=c.next()}while(!p.done)
var d=a.result=p.value
a.render=function(){return d.rerender(l)}}}return e.prototype.isFor=function(e){return this.root===e},e.prototype.destroy=function(){var e,t=this.result,n=this.env
if(this.destroyed=!0,this.env=void 0,this.root=null,this.result=void 0,this.render=void 0,t){(e=!n.inTransaction)&&n.begin()
try{t.destroy()}finally{e&&n.commit()}}},e}(),ht=[]
function mt(e){var t=ht.indexOf(e)
ht.splice(t,1)}function gt(){}(0,s.setHasViews)(function(){return ht.length>0})
var vt=null
var bt=0
pt.on("begin",function(){var e
for(e=0;e<ht.length;e++)ht[e]._scheduleRevalidate()}),pt.on("end",function(){var e,t
for(e=0;e<ht.length;e++)if(!ht[e]._isValid()){if(bt>10)throw bt=0,ht[e].destroy(),new Error("infinite rendering invalidation detected")
return bt++,pt.join(null,gt)}bt=0,null!==vt&&(t=vt.resolve,vt=null,pt.join(null,t))})
var yt=function(){function e(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.fallbackViewRegistry,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
this._env=e,this._rootTemplate=t,this._viewRegistry=n,this._destinedForDOM=r,this._destroyed=!1,this._roots=[],this._lastRevision=-1,this._isRenderingRoots=!1,this._removedRoots=[]}return e.prototype.appendOutletView=function(e,n){var i,o,s,l=(i=e,p.ENV._APPLICATION_TEMPLATE_WRAPPER?(o=(0,a.assign)({},Fe,{dynamicTag:!0,elementHook:!0}),s=new(function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t.prototype.getTagName=function(){return"div"},t.prototype.getLayout=function(e){var t=e.template.asWrappedLayout()
return{handle:t.compile(),symbolTable:t.symbolTable}},t.prototype.getCapabilities=function(){return o},t.prototype.didCreateElement=function(e,t){t.setAttribute("class","ember-view"),t.setAttribute("id",(0,a.guidFor)(e))},t}(je)),new He(i.state,s)):new He(i.state))
this._appendDefinition(e,(0,t.curry)(l),n)},e.prototype.appendTo=function(e,n){var r=new ct(e)
this._appendDefinition(e,(0,t.curry)(r),n)},e.prototype._appendDefinition=function(e,n,r){var i=new W(n),o=new dt(null,t.UNDEFINED_REFERENCE),s=new ft(e,this._env,this._rootTemplate,i,r,o)
this._renderRoot(s)},e.prototype.rerender=function(){this._scheduleRevalidate()},e.prototype.register=function(e){var t=(0,c.getViewId)(e)
this._viewRegistry[t]=e},e.prototype.unregister=function(e){delete this._viewRegistry[(0,c.getViewId)(e)]},e.prototype.remove=function(e){e._transitionTo("destroying"),this.cleanupRootFor(e),(0,c.setViewElement)(e,null),this._destinedForDOM&&e.trigger("didDestroyElement"),e.isDestroying||e.destroy()},e.prototype.cleanupRootFor=function(e){if(!this._destroyed)for(var t,n=this._roots,r=this._roots.length;r--;)(t=n[r]).isFor(e)&&(t.destroy(),n.splice(r,1))},e.prototype.destroy=function(){this._destroyed||(this._destroyed=!0,this._clearAllRoots())},e.prototype.getBounds=function(e){var t=e[ie]
return{parentElement:t.parentElement(),firstNode:t.firstNode(),lastNode:t.lastNode()}},e.prototype.createElement=function(e){return this._env.getAppendOperations().createElement(e)},e.prototype._renderRoot=function(e){var t,n=this._roots
n.push(e),1===n.length&&(t=this,ht.push(t)),this._renderRootsTransaction()},e.prototype._renderRoots=function(){var e,t,n,r,o,a=this._roots,l=this._env,u=this._removedRoots,c=void 0,p=void 0
do{l.begin()
try{for(p=a.length,c=!1,e=0;e<a.length;e++)(t=a[e]).destroyed?u.push(t):(n=t.shouldReflush,e>=p&&!n||(t.options.alwaysRevalidate=n,n=t.shouldReflush=(0,s.runInTransaction)(t,"render"),c=c||n))
this._lastRevision=i.CURRENT_TAG.value()}finally{l.commit()}}while(c||a.length>p)
for(;u.length;)r=u.pop(),o=a.indexOf(r),a.splice(o,1)
0===this._roots.length&&mt(this)},e.prototype._renderRootsTransaction=function(){if(!this._isRenderingRoots){this._isRenderingRoots=!0
var e=!1
try{this._renderRoots(),e=!0}finally{e||(this._lastRevision=i.CURRENT_TAG.value(),!0===this._env.inTransaction&&this._env.commit()),this._isRenderingRoots=!1}}},e.prototype._clearAllRoots=function(){var e,t=this._roots
for(e=0;e<t.length;e++)t[e].destroy()
this._removedRoots.length=0,this._roots=[],t.length&&mt(this)},e.prototype._scheduleRevalidate=function(){pt.scheduleOnce("render",this,this._revalidate)},e.prototype._isValid=function(){return this._destroyed||0===this._roots.length||i.CURRENT_TAG.validate(this._lastRevision)},e.prototype._revalidate=function(){this._isValid()||this._renderRootsTransaction()},e}(),Et=function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t.create=function(e){return new this(e.env,e.rootTemplate,e._viewRegistry,!1)},t.prototype.getElement=function(){throw new Error("Accessing `this.element` is not allowed in non-interactive environments (such as FastBoot).")},t}(yt),Tt=function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t.create=function(e){return new this(e.env,e.rootTemplate,e._viewRegistry,!0)},t.prototype.getElement=function(e){return(0,c.getViewElement)(e)},t}(yt),_t={},At=x(function(e){return l.String.loc.apply(null,e)}),Ct=function(){function e(e){this.resolver=e}return e.prototype.getCapabilities=function(e){var t=this.resolver.resolve(e),n=t.manager,r=t.state
return n.getCapabilities(r)},e.prototype.getLayout=function(e){var t=this.resolver.resolve(e),n=t.manager,r=t.state
if(n.getCapabilities(r).dynamicLayout)return null
var i=n.getLayout(r,this.resolver)
return{compile:function(){return i.handle},symbolTable:i.symbolTable}},e.prototype.lookupHelper=function(e,t){return this.resolver.lookupHelper(e,t)},e.prototype.lookupModifier=function(e,t){return this.resolver.lookupModifier(e,t)},e.prototype.lookupComponentDefinition=function(e,t){return this.resolver.lookupComponentDefinition(e,t)},e.prototype.lookupPartial=function(e,t){return this.resolver.lookupPartial(e,t)},e}(),St={dynamicLayout:!1,dynamicTag:!1,prepareArgs:!1,createArgs:!1,attributeHook:!1,elementHook:!1},wt=new(function(e){function n(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(n,e),n.prototype.getLayout=function(e){var t=e.asLayout()
return{handle:t.compile(),symbolTable:t.symbolTable}},n.prototype.getCapabilities=function(){return St},n.prototype.create=function(){return null},n.prototype.getSelf=function(){return t.NULL_REFERENCE},n.prototype.getTag=function(){return i.CONSTANT_TAG},n.prototype.getDestructor=function(){return null},n}(Pe))
function Rt(e){var t=e.positional,n=t.at(0),r=t.length,i=n.value()
return!0===i?r>1?l.String.dasherize(t.at(1).value()):null:!1===i?r>2?l.String.dasherize(t.at(2).value()):null:i}function xt(e){var t=e.positional.at(0)
return new Ae(t.value())}function Ot(e){return"checkbox"===e.positional.at(0).value()?"-checkbox":"-text-field"}function Nt(e){var t=e.positional,n=t.at(0).value().split("."),r=n[n.length-1],i=t.at(1).value()
return!0===i?l.String.dasherize(r):i||0===i?String(i):""}var Lt=function(e){return function(e){return null===e||void 0===e||"function"!=typeof e.toString}(e)?"":String(e)}
function kt(e){return e.positional.value().map(Lt).join("")}function It(e,n){return void 0===n||null===n||""===n?t.NULL_REFERENCE:"string"==typeof n&&n.indexOf(".")>-1?z(e,n.split(".")):e.get(n)}var Dt=function(e){function n(n,o){var s=(0,r.possibleConstructorReturn)(this,e.call(this))
s.sourceReference=n,s.pathReference=o,s.lastPath=null,s.innerReference=t.NULL_REFERENCE
var a=s.innerTag=i.UpdatableTag.create(i.CONSTANT_TAG)
return s.tag=(0,i.combine)([n.tag,o.tag,a]),s}return(0,r.inherits)(n,e),n.create=function(e,t){return(0,i.isConst)(t)?It(e,t.value()):new n(e,t)},n.prototype.compute=function(){var e=this.lastPath,t=this.innerReference,n=this.innerTag,r=this.pathReference.value()
return r!==e&&(t=It(this.sourceReference,r),n.inner.update(t.tag),this.innerReference=t,this.lastPath=r),t.value()},n.prototype[N]=function(e){(0,s.set)(this.sourceReference.value(),this.pathReference.value(),e)},n}(k),Pt=function(e){function t(t,n,o){var s=(0,r.possibleConstructorReturn)(this,e.call(this))
return s.branchTag=i.UpdatableTag.create(i.CONSTANT_TAG),s.tag=(0,i.combine)([t.tag,s.branchTag]),s.cond=t,s.truthy=n,s.falsy=o,s}return(0,r.inherits)(t,e),t.create=function(e,n,r){var o=B.create(e)
return(0,i.isConst)(o)?o.value()?n:r:new t(o,n,r)},t.prototype.compute=function(){var e=this.cond.value()?this.truthy:this.falsy
return this.branchTag.inner.update(e.tag),e.value()},t}(k)
function Mt(e){var t=e.positional
b.default.log.apply(null,t.value())}var Ft=(0,a.symbol)("MUT"),jt=(0,a.symbol)("SOURCE")
function Bt(e){e.positional
var t=e.named
return y.QueryParams.create({values:(0,a.assign)({},t.value())})}var Ht=["alt","shift","meta","ctrl"],$t=/^click|mouse|touch/
c.ActionManager.registeredActions
var Ut=function(e){var t=e.actionId
return c.ActionManager.registeredActions[t]=e,t},Wt=function(e){var t=e.actionId
delete c.ActionManager.registeredActions[t]},zt=function(){function e(e,t,n,r,i,o,s,a,l){this.element=e,this.actionId=t,this.actionName=n,this.actionArgs=r,this.namedArgs=i,this.positional=o,this.implicitTarget=s,this.dom=a,this.eventName=this.getEventName(),this.tag=l}return e.prototype.getEventName=function(){return this.namedArgs.get("on").value()||"click"},e.prototype.getActionArgs=function(){var e,t=new Array(this.actionArgs.length)
for(e=0;e<this.actionArgs.length;e++)t[e]=this.actionArgs[e].value()
return t},e.prototype.getTarget=function(){var e=this.implicitTarget,t=this.namedArgs
return t.has("target")?t.get("target").value():e.value()},e.prototype.handler=function(e){var t=this,n=this.actionName,r=this.namedArgs,i=r.get("bubbles"),o=r.get("preventDefault"),a=r.get("allowedKeys"),l=this.getTarget(),u=!1!==i.value()
return!function(e,t){var n
if(null===t||void 0===t){if($t.test(e.type))return(0,c.isSimpleClick)(e)
t=""}if(t.indexOf("any")>=0)return!0
for(n=0;n<Ht.length;n++)if(e[Ht[n]+"Key"]&&-1===t.indexOf(Ht[n]))return!1
return!0}(e,a.value())||(!1!==o.value()&&e.preventDefault(),u||e.stopPropagation(),s.run.join(function(){var e=t.getActionArgs(),r={args:e,target:l,name:null}
"function"!=typeof n[q]?"function"!=typeof n?(r.name=n,l.send?(0,s.flaggedInstrument)("interaction.ember-action",r,function(){l.send.apply(l,[n].concat(e))}):(0,s.flaggedInstrument)("interaction.ember-action",r,function(){l[n].apply(l,e)})):(0,s.flaggedInstrument)("interaction.ember-action",r,function(){n.apply(l,e)}):(0,s.flaggedInstrument)("interaction.ember-action",r,function(){n[q].apply(n,e)})}),u)},e.prototype.destroy=function(){Wt(this)},e}(),Kt=function(){function e(){}return e.prototype.create=function(e,t,n,r){var i,o=t.capture(),s=o.named,l=o.positional,u=o.tag,c=void 0,p=void 0,d=void 0
l.length>1&&(c=l.at(0),(d=l.at(1))[q]?p=d:(d._propertyKey,p=d.value()))
var f=[]
for(i=2;i<l.length;i++)f.push(l.at(i))
var h=(0,a.uuid)()
return new zt(e,h,p,f,s,l,c,r,u)},e.prototype.install=function(e){var t=e.dom,n=e.element,r=e.actionId
Ut(e),t.setAttribute(n,"data-ember-action",""),t.setAttribute(n,"data-ember-action-"+r,r)},e.prototype.update=function(e){var t=e.positional.at(1)
t[q]||(e.actionName=t.value()),e.eventName=e.getEventName()},e.prototype.getTag=function(e){return e.tag},e.prototype.getDestructor=function(e){return e},e}()
function qt(e){return null===e?null:[e[0].map(function(e){return"@"+e}),e[1]]}function Vt(e,t,n,r){var i=r.resolver.lookupComponentDefinition("-text-area",r.referrer)
return Ke(n),r.component.static(i,[t||[],qt(n),null,null]),!0}function Gt(e,t,n,r){var i=r.resolver.lookupComponentDefinition(e,r.referrer)
return r.component.static(i,[t,qt(n),null,null]),!0}function Yt(e,t,n,r){var i,o,s,a,l
if(null===t&&(t=[]),null!==n&&(i=n[0],o=n[1],(s=i.indexOf("type"))>-1)){if(a=o[s],Array.isArray(a))return l=t[0],r.dynamicComponent(l,t.slice(1),n,!0,null,null),!0
if("checkbox"===a)return Ke(n),Gt("-checkbox",t,n,r)}return Gt("-text-field",t,n,r)}var Qt={dynamicLayout:!0,dynamicTag:!1,prepareArgs:!1,createArgs:!1,attributeHook:!1,elementHook:!1},Xt=new(function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t.prototype.getDynamicLayout=function(e){var t=e.engine.lookup("template:application").asLayout()
return{handle:t.compile(),symbolTable:t.symbolTable}},t.prototype.getCapabilities=function(){return Qt},t.prototype.create=function(e,t){var n,r,o=e.owner.buildChildEngineInstance(t.name)
o.boot()
var s=o.factoryFor("controller:application")||(0,y.generateControllerFactory)(o,"application"),a=void 0,l=void 0,u=t.modelRef
return void 0===u?l={engine:o,controller:a=s.create(),self:new I(a),tag:i.CONSTANT_TAG}:(n=u.value(),r=u.tag.value(),l={engine:o,controller:a=s.create({model:n}),self:new I(a),tag:u.tag,modelRef:u,modelRev:r}),l},t.prototype.getSelf=function(e){return e.self},t.prototype.getTag=function(e){return e.tag},t.prototype.getDestructor=function(e){return e.engine},t.prototype.didRenderLayout=function(){},t.prototype.update=function(e){var t,n=e.controller,r=e.modelRef,i=e.modelRev
r.tag.validate(i)||(t=r.value(),e.modelRev=r.tag.value(),n.set("model",t))},t}(Pe))
function Jt(e,t,n,r){var i=[g.Ops.Helper,"-mount",t||[],n]
return r.dynamicComponent(i,[],null,!1,null,null),!0}var Zt=function(){function e(e,t,n){this.tag=e.tag,this.nameRef=e,this.modelRef=n,this.env=t,this._lastName=null,this._lastDef=null}return e.prototype.value=function(){var e=this.env,n=this.nameRef,r=this.modelRef,i=n.value()
return"string"==typeof i?this._lastName===i?this._lastDef:e.owner.hasRegistration("engine:"+i)?(this._lastName=i,this._lastDef=(0,t.curry)(new function(e,t){this.manager=Xt,this.state={name:e,modelRef:t}}(i,r)),this._lastDef):null:(this._lastDef=null,this._lastName=null,null)},e.prototype.get=function(){return t.UNDEFINED_REFERENCE},e}(),en=function(){function e(e){this.outletState=e,this.tag=i.DirtyableTag.create()}return e.prototype.get=function(e){return new nn(this,e)},e.prototype.value=function(){return this.outletState},e.prototype.update=function(e){this.outletState.outlets.main=e,this.tag.inner.dirty()},e}(),tn=function(){function e(e,t){this.parentStateRef=e,this.outletNameRef=t,this.tag=(0,i.combine)([e.tag,t.tag])}return e.prototype.value=function(){var e=this.parentStateRef.value(),t=void 0===e?void 0:e.outlets
return void 0===t?void 0:t[this.outletNameRef.value()]},e.prototype.get=function(e){return new nn(this,e)},e}(),nn=function(){function e(e,t){this.parent=e,this.key=t,this.tag=e.tag}return e.prototype.get=function(t){return new e(this,t)},e.prototype.value=function(){var e=this.parent.value()
return e&&e[this.key]},e}(),rn=function(){function e(e,t){this.root=e,this.name=t,this.tag=e.tag}return e.prototype.value=function(){var e=this.root.value(),t=e&&e.outlets.main,n=t&&t.outlets
if(void 0!==(n=(t=n&&n.__ember_orphans__)&&t.outlets)){var r=n[this.name]
if(void 0!==r&&void 0!==r.render){var i=Object.create(null)
return i[r.render.outlet]=r,r.wasUsed=!0,{outlets:i,render:void 0}}}},e.prototype.get=function(e){return new nn(this,e)},e}()
function on(e,t,n,r){var i=[g.Ops.Helper,"-outlet",t||[],n]
return r.dynamicComponent(i,[],null,!1,null,null),!0}var sn=function(){function e(e){this.outletRef=e,this.definition=null,this.lastState=null,this.tag=e.tag}return e.prototype.value=function(){var e=function(e){var t=e.value()
if(void 0===t)return null
var n=t.render
if(void 0===n)return null
var r=n.template
return void 0===r?null:{ref:e,name:n.name,outlet:n.outlet,template:r,controller:n.controller}}(this.outletRef)
if(function(e,t){if(null===e)return null===t
if(null===t)return!1
return e.template===t.template&&e.controller===t.controller}(e,this.lastState))return this.definition
this.lastState=e
var n=null
return null!==e&&(n=(0,t.curry)(new He(e))),this.definition=n},e.prototype.get=function(){return t.UNDEFINED_REFERENCE},e}()
var an=function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t.prototype.create=function(e,t,n,r){var i=t.name
return r.rootOutletState&&(r.outletState=new rn(r.rootOutletState,i)),this.createRenderState(n,e.owner,i)},t.prototype.getLayout=function(e){var t=e.template.asLayout()
return{handle:t.compile(),symbolTable:t.symbolTable}},t.prototype.getSelf=function(e){var t=e.controller
return new I(t)},t}(Pe),ln={dynamicLayout:!1,dynamicTag:!1,prepareArgs:!1,createArgs:!1,attributeHook:!1,elementHook:!1},un=new(function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t.prototype.createRenderState=function(e,t,n){return{controller:t.lookup("controller:"+n)||(0,y.generateController)(t,n)}},t.prototype.getCapabilities=function(){return ln},t.prototype.getTag=function(){return i.CONSTANT_TAG},t.prototype.getDestructor=function(){return null},t}(an)),cn={dynamicLayout:!1,dynamicTag:!1,prepareArgs:!1,createArgs:!0,attributeHook:!1,elementHook:!1},pn=new(function(e){function t(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(t,e),t.prototype.createRenderState=function(e,t,n){var r=e.positional.at(1)
return{controller:(t.factoryFor("controller:"+n)||(0,y.generateControllerFactory)(t,"controller:"+n)).create({model:r.value()}),model:r}},t.prototype.update=function(e){var t=e.controller,n=e.model
t.set("model",n.value())},t.prototype.getCapabilities=function(){return cn},t.prototype.getTag=function(e){return e.model.tag},t.prototype.getDestructor=function(e){return e.controller},t}(an)),dn=function(e,t,n){this.manager=n,this.state={name:e,template:t}}
function fn(e,t,n,r){var i
return!0===p.ENV._ENABLE_RENDER_SUPPORT&&(i=[g.Ops.Helper,"-render",t||[],n],r.dynamicComponent(i,null,null,!1,null,null),!0)}function hn(e,t,n,r){if(-1===e.indexOf("-"))return!1
var i=r.resolver.lookupComponentDefinition(e,r.referrer)
return null!==i&&(r.component.static(i,[null===t?[]:t,qt(n),null,null]),!0)}function mn(e,t,n,r,i,o){if(-1===e.indexOf("-"))return!1
var s=o.resolver.lookupComponentDefinition(e,o.referrer)
return null!==s&&(Ke(n),o.component.static(s,[t,qt(n),r,i]),!0)}var gn=[]
function vn(e){return{object:"component:"+e}}function bn(e){return void 0!==e?{source:"template:"+e}:void 0}function yn(e){var t=h.FACTORY_FOR.get(e)
if(t)return t.normalizedName}var En={if:function(e,t){var n=t.positional
return Pt.create(n.at(0),n.at(1),n.at(2))},action:function(e,t){var n=t.named,r=t.positional.capture().references,o=r[0],a=r[1],l=r.slice(2),u=(a._propertyKey,n.has("target")?n.get("target"):o),c=function(e,t){var n=void 0
t.length>0&&(n=function(e){return t.map(function(e){return e.value()}).concat(e)})
var r=void 0
return e&&(r=function(t){var n=e.value()
return n&&t.length>0&&(t[0]=(0,s.get)(t[0],n)),t}),n&&r?function(e){return r(n(e))}:n||r||G}(n.has("value")&&n.get("value"),l),p=void 0
return(p="function"==typeof a[q]?Y(a,a,a[q],c):(0,i.isConst)(u)&&(0,i.isConst)(a)?Y(o.value(),u.value(),a.value(),c):function(e,t,n,r,i){return function(){return Y(e,t.value(),n.value(),r).apply(void 0,arguments)}}(o.value(),u,a,c))[V]=!0,new W(p)},concat:function(e,t){return new U(kt,t.capture())},get:function(e,t){return Dt.create(t.positional.at(0),t.positional.at(1))},hash:function(e,t){return t.named.capture()},log:function(e,t){return new U(Mt,t.capture())},mut:function(e,t){var n,r=t.positional.at(0)
if((n=r)&&n[Ft])return r
var i=Object.create(r)
return i[jt]=r,i[q]=r[N],i[Ft]=!0,i},"query-params":function(e,t){return new U(Bt,t.capture())},readonly:function(e,t){var n=function(e){return e[jt]||e}(t.positional.at(0)),r=Object.create(n)
return r[N]=void 0,r},unbound:function(e,t){return W.create(t.positional.at(0).value())},unless:function(e,t){var n=t.positional
return Pt.create(n.at(0),n.at(2),n.at(1))},"-class":function(e,t){return new U(Rt,t.capture())},"-each-in":function(e,t){var n=Object.create(t.positional.at(0))
return n[fe]=!0,n},"-input-type":function(e,t){return new U(Ot,t.capture())},"-normalize-class":function(e,t){return new U(Nt,t.capture())},"-html-safe":function(e,t){return new U(xt,t.capture())},"-get-dynamic-var":t.getDynamicVar,"-mount":function(e,t){var n=e.env,r=t.positional.at(0),i=t.named.has("model")?t.named.get("model"):void 0
return new Zt(r,n,i)},"-outlet":function(e,t){var n=e.dynamicScope(),r=void 0
return r=0===t.positional.length?new i.ConstReference("main"):t.positional.at(0),new sn(new tn(n.outletState,r))},"-render":function(e,n){var r,i,o,s=e.env,a=n.positional.at(0),l=a.value(),u=s.owner.lookup("template:"+l),c=void 0
return c=n.named.has("controller")?n.named.get("controller").value():l,1===n.positional.length?(r=new dn(c,u,un),W.create((0,t.curry)(r))):(i=new dn(c,u,pn),o=n.capture(),W.create((0,t.curry)(i,o)))}},Tn={action:new Kt},_n=function(){function e(){this.templateOptions={program:new v.Program(new v.LazyConstants(this)),macros:new u.Macros,resolver:new Ct(this),Builder:u.LazyOpcodeBuilder},this.handles=[void 0],this.objToHandle=new WeakMap,this.builtInHelpers=En,this.builtInModifiers=Tn,this.templateCache=new WeakMap,this.componentDefinitionCache=new Map,this.templateCacheHits=0,this.templateCacheMisses=0,this.componentDefinitionCount=0,this.helperDefinitionCount=0,function(e){var t,n=e.inlines,r=e.blocks
for(n.add("outlet",on),n.add("render",fn),n.add("mount",Jt),n.add("input",Yt),n.add("textarea",Vt),n.addMissing(hn),r.addMissing(mn),t=0;t<gn.length;t++)(0,gn[t])(r,n)}(this.templateOptions.macros)}return e.prototype.lookupComponent=function(e,t){var n=this.lookupComponentDefinition(e,t)
return null===n?null:this.resolve(n)},e.prototype.resolve=function(e){return this.handles[e]},e.prototype.lookupHelper=function(e,t){var n,r=this.handles.length,i=this._lookupHelper(e,t)
return null!==i?(r===(n=this.handle(i))&&this.helperDefinitionCount++,n):null},e.prototype.lookupComponentDefinition=function(e,t){var n=this.handles.length,r=this.handle(this._lookupComponentDefinition(e,t))
return n===r&&this.componentDefinitionCount++,r},e.prototype.lookupModifier=function(e){return this.handle(this._lookupModifier(e))},e.prototype.lookupPartial=function(e,t){var n=this._lookupPartial(e,t)
return this.handle(n)},e.prototype.createTemplate=function(e,t){var n,r=this.templateCache.get(t)
void 0===r&&(r=new WeakMap,this.templateCache.set(t,r))
var i=r.get(e)
return void 0===i?(n={options:this.templateOptions},(0,a.setOwner)(n,t),i=e.create(n),r.set(e,i),this.templateCacheMisses++):this.templateCacheHits++,i},e.prototype.handle=function(e){if(void 0===e||null===e)return null
var t=this.objToHandle.get(e)
return void 0===t&&(t=this.handles.push(e)-1,this.objToHandle.set(e,t)),t},e.prototype._lookupHelper=function(e,t){var n,r=this.builtInHelpers[e]
if(void 0!==r)return r
var i,o=t.owner,s=bn(t.moduleName),a=o.factoryFor("helper:"+e,s)||o.factoryFor("helper:"+e)
return"object"==typeof(i=a)&&null!==i&&i.class&&i.class.isHelperFactory?function(e){return e.class.isSimpleHelper}(a)?(n=a.create().compute,function(e,t){return H.create(n,t.capture())}):function(e,t){var n=a.create()
return e.newDestroyable(n),$.create(n,t.capture())}:null},e.prototype._lookupPartial=function(e,t){var n=(0,c.lookupPartial)(e,t.owner),r=new u.PartialDefinition(e,(0,c.lookupPartial)(e,t.owner))
if(n)return r
throw new Error(e+" is not a partial")},e.prototype._lookupModifier=function(e){var t=this.builtInModifiers[e]
return void 0!==t?t:null},e.prototype._lookupComponentDefinition=function(e,t){var n,r=(0,c.lookupComponent)(t.owner,e,bn(t.moduleName)),i=r.layout,o=r.component,l=(0,a.guidFor)(t.owner)+"|"+yn(o)+"|"+yn(i),u=this.componentDefinitionCache.get(l)
if(void 0!==u)return u
if(i&&!o&&p.ENV._TEMPLATE_ONLY_GLIMMER_COMPONENTS)return n=new function(e){this.state=e,this.manager=wt}(i),this.componentDefinitionCache.set(l,n),n
var d=(0,s._instrumentStart)("render.getComponentDefinition",vn,e),f=i||o?new function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:at,n=arguments[2],r=arguments[3],i=arguments[4],o=arguments[5]
this.name=e,this.manager=t,this.ComponentClass=n,this.handle=r
var s=i&&i.asLayout(),a=s?s.symbolTable:void 0
this.symbolTable=a,this.template=i,this.args=o,this.state={name:e,ComponentClass:n,handle:r,template:i,capabilities:st,symbolTable:a}}(e,void 0,o||t.owner.factoryFor((0,h.privatize)(_)),null,i):null
return d(),this.componentDefinitionCache.set(l,f),f},e}(),An={create:function(){return(new _n).templateOptions}},Cn=Q({id:"o98Iahwz",block:'{"symbols":["&default"],"statements":[[13,1]],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/component.hbs"}}),Sn=Q({id:"cNysaqQS",block:'{"symbols":[],"statements":[[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/outlet.hbs"}}),wn="-top-level",Rn="main",xn=function(){function e(e,t,n,r){this._environment=e,this.renderer=t,this.owner=n,this.template=r
var i=this.ref=new en({outlets:{main:void 0},render:{owner:n,into:void 0,outlet:Rn,name:wn,controller:void 0,template:r}})
this.state={ref:i,name:wn,outlet:Rn,template:r,controller:void 0}}return e.extend=function(t){return function(e){function n(){return(0,r.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,r.inherits)(n,e),n.create=function(n){return n?e.create.call(this,(0,a.assign)({},t,n)):e.create.call(this,t)},n}(e)},e.reopenClass=function(e){(0,a.assign)(this,e)},e.create=function(t){var n=t._environment,r=t.renderer,i=t.template
return new e(n,r,t[a.OWNER],i)},e.prototype.appendTo=function(e){var t=void 0
t=(this._environment||p.environment).hasDOM&&"string"==typeof e?document.querySelector(e):e,s.run.schedule("render",this.renderer,"appendOutletView",this,t)},e.prototype.rerender=function(){},e.prototype.setOutletState=function(e){this.ref.update(e)},e.prototype.destroy=function(){},e}()
e.INVOKE=q,e.RootTemplate=J,e.template=Q,e.Checkbox=ae,e.TextField=ue,e.TextArea=ce,e.LinkComponent=de,e.Component=oe,e.ROOT_REF=te,e.Helper=w,e.helper=x,e.Environment=De,e.SafeString=Ae,e.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML()
if(null===e||void 0===e)return""
if(!e)return e+""
e=""+e}return Se.test(e)?e.replace(we,Re):e},e.htmlSafe=xe,e.isHTMLSafe=Oe,e.Renderer=yt,e.InertRenderer=Et,e.InteractiveRenderer=Tt,e._resetRenderers=function(){ht.length=0},e.renderSettled=function(){return null===vt&&(vt=f.default.defer(),s.run.currentRunLoop||pt.schedule("actions",null,gt)),vt.promise},e.getTemplate=function(e){if(_t.hasOwnProperty(e))return _t[e]},e.setTemplate=function(e,t){return _t[e]=t},e.hasTemplate=function(e){return _t.hasOwnProperty(e)},e.getTemplates=function(){return _t},e.setTemplates=function(e){_t=e},e.setupEngineRegistry=function(e){e.register("view:-outlet",xn),e.register("template:-outlet",Sn),e.injection("view:-outlet","template","template:-outlet"),e.injection("service:-dom-changes","document","service:-document"),e.injection("service:-dom-tree-construction","document","service:-document"),e.register((0,h.privatize)(T),Cn),e.register("service:-glimmer-environment",De),e.register((0,h.privatize)(C),An),e.injection("template","options",(0,h.privatize)(C)),e.optionsForType("helper",{instantiate:!1}),e.register("helper:loc",At),e.register("component:-text-field",ue),e.register("component:-text-area",ce),e.register("component:-checkbox",ae),e.register("component:link-to",de),p.ENV._TEMPLATE_ONLY_GLIMMER_COMPONENTS||e.register((0,h.privatize)(_),oe)},e.setupApplicationRegistry=function(e){e.injection("service:-glimmer-environment","appendOperations","service:-dom-tree-construction"),e.injection("renderer","env","service:-glimmer-environment"),e.register((0,h.privatize)(A),J),e.injection("renderer","rootTemplate",(0,h.privatize)(A)),e.register("renderer:-dom",Tt),e.register("renderer:-inert",Et),p.environment.hasDOM&&e.injection("service:-glimmer-environment","updateOperations","service:-dom-changes"),e.register("service:-dom-changes",{create:function(e){var n=e.document
return new t.DOMChanges(n)}}),e.register("service:-dom-tree-construction",{create:function(e){var r=e.document
return new(p.environment.hasDOM?t.DOMTreeConstruction:n.NodeDOMTreeConstruction)(r)}})},e._registerMacros=function(e){gn.push(e)},e._experimentalMacros=gn
e.AbstractComponentManager=Pe,e.UpdatableReference=F,e.iterableFor=he,e.DebugStack=void 0,e.OutletView=xn}),e("ember-metal",["exports","ember-environment","ember-utils","ember-debug","ember-babel","@glimmer/reference","container","backburner"],function(e,t,n,r,i,o,s,a){"use strict"
a=a&&a.hasOwnProperty("default")?a.default:a
var l="object"==typeof t.context.imports.Ember&&t.context.imports.Ember||{}
l.isNamespace=!0,l.toString=function(){return"Ember"}
var u={addToListeners:function(e,t,n,r){void 0===this._listeners&&(this._listeners=[]),this._listeners.push(e,t,n,r)},_finalizeListeners:function(){if(!this._listenersFinalized){void 0===this._listeners&&(this._listeners=[])
for(var e,t=this.parent;void 0!==t&&(void 0!==(e=t._listeners)&&(this._listeners=this._listeners.concat(e)),!t._listenersFinalized);)t=t.parent
this._listenersFinalized=!0}},removeFromListeners:function(e,t,n,r){for(var i,o,s=this;void 0!==s;){if(void 0!==(i=s._listeners))for(o=i.length-4;o>=0;o-=4)if(i[o]===e&&(!n||i[o+1]===t&&i[o+2]===n)){if(s!==this)return this._finalizeListeners(),this.removeFromListeners(e,t,n)
"function"==typeof r&&r(e,t,i[o+2]),i.splice(o,4)}if(s._listenersFinalized)break
s=s.parent}},matchingListeners:function(e){for(var t,n,r=this,i=void 0;void 0!==r;){if(void 0!==(t=r._listeners))for(n=0;n<t.length;n+=4)t[n]===e&&c(i=i||[],t,n)
if(r._listenersFinalized)break
r=r.parent}return i}}
function c(e,t,n){var r,i=t[n+1],o=t[n+2]
for(r=0;r<e.length;r+=3)if(e[r]===i&&e[r+1]===o)return
e.push(i,o,t[n+3])}function p(e,n,r,i,o){t.ENV._ENABLE_DID_INIT_ATTRS_SUPPORT,i||"function"!=typeof r||(i=r,r=null),me(e).addToListeners(n,r,i,o),"function"==typeof e.didAddListener&&e.didAddListener(n,r,i)}function d(e,t,n,r){r||"function"!=typeof n||(r=n,n=null)
var i="function"==typeof e.didRemoveListener?e.didRemoveListener.bind(e):function(){}
me(e).removeFromListeners(t,n,r,i)}function f(e,t,n,r,i){var o,s,a,l,u
if(void 0===r&&(r="object"==typeof(o=void 0===i?he(e):i)&&null!==o&&o.matchingListeners(t)),void 0===r||0===r.length)return!1
for(s=r.length-3;s>=0;s-=3)a=r[s],l=r[s+1],u=r[s+2],l&&(u&&d(e,t,a,l),a||(a=e),"string"==typeof l&&(l=a[l]),l.apply(a,n))
return!0}var h=void 0,m={get onerror(){return h}},g=void 0,v=i.taggedTemplateLiteralLoose(["rsvpAfter"],["rsvpAfter"]),b=new a(["sync","actions","routerTransitions","render","afterRender","destroy",s.privatize(v)],{sync:{before:H,after:$},defaultQueue:"actions",onBegin:function(e){y.currentRunLoop=e},onEnd:function(e,t){y.currentRunLoop=t},onErrorTarget:m,onErrorMethod:"onerror"})
function y(){return b.run.apply(b,arguments)}y.join=function(){return b.join.apply(b,arguments)},y.bind=function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(){var e,n,r
for(e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r]
return y.join.apply(y,t.concat(n))}},y.backburner=b,y.currentRunLoop=null,y.queues=b.queueNames,y.begin=function(){b.begin()},y.end=function(){b.end()},y.schedule=function(){return b.schedule.apply(b,arguments)},y.hasScheduledTimers=function(){return b.hasTimers()},y.cancelTimers=function(){b.cancelTimers()},y.later=function(){return b.later.apply(b,arguments)},y.once=function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.unshift("actions"),b.scheduleOnce.apply(b,t)},y.scheduleOnce=function(){return b.scheduleOnce.apply(b,arguments)},y.next=function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.push(1),b.later.apply(b,t)},y.cancel=function(e){return b.cancel(e)},y.debounce=function(){return b.debounce.apply(b,arguments)},y.throttle=function(){return b.throttle.apply(b,arguments)}
var E=function(){return!1}
function T(){return o.DirtyableTag.create()}function _(e,t){return"object"==typeof e&&null!==e?(void 0===t?me(e):t).writableTag(T):o.CONSTANT_TAG}function A(e,t){var n=e.readableTag()
void 0!==n&&(e.isProxy()?n.inner.first.inner.dirty():n.inner.dirty())
var r=e.readableTags(),i=void 0!==r?r[t]:void 0
void 0!==i&&i.inner.dirty(),void 0===n&&void 0===i||function(){void 0===C&&(C=y.backburner)
E()&&C.ensureInstance()}()}var C=void 0
var S=function(){function e(){this.added=new Map,this.queue=[]}return e.prototype.add=function(e,t,n){var r=this.added.get(e)
void 0===r&&(r=new Set,this.added.set(e,r)),r.has(t)||(this.queue.push(e,t,n),r.add(t))},e.prototype.flush=function(){var e,t,n,r,i=this.queue
for(this.added.clear(),this.queue=[],e=0;e<i.length;e+=3)t=i[e],n=i[e+1],r=i[e+2],t.isDestroying||t.isDestroyed||f(t,r,[t,n])},e}()
function w(e,t,n){if("object"==typeof e&&null!==e){var r=void 0===n?me(e):n,i=r.peekWatching(t)||0
r.writeWatching(t,i+1),0===i&&r.writableChains(ie).add(t)}}function R(e,t,n){if("object"==typeof e&&null!==e){var r=void 0===n?he(e):n
if(void 0!==r){var i=r.peekWatching(t)||0
1===i?(r.writeWatching(t,0),r.writableChains(ie).remove(t)):i>1&&r.writeWatching(t,i-1)}}}function x(e,t,n){Ee(t)?w(e,t,n):V(e,t,n)}function O(e,t){var n=he(e)
return void 0!==n&&n.peekWatching(t)||0}function N(e,t,n){Ee(t)?R(e,t,n):G(e,t,n)}function L(e){return e+":change"}function k(e,t,n,r){p(e,L(t),n,r),x(e,t)}function I(e,t,n,r){N(e,t),d(e,L(t),n,r)}e.runInTransaction=void 0,e.runInTransaction=function(e,t){return e[t](),!1}
var D=n.symbol("PROPERTY_DID_CHANGE"),P=new S,M=0
function F(e,t,n){var r=void 0===n?he(e):n,i=void 0!==r
if(!i||r.isInitialized(e)){var o=ge(e,t,r)
if(void 0!==o&&o.didChange&&o.didChange(e,t),i&&r.peekWatching(t)>0&&(function(e,t,n){if(n.isSourceDestroying()||!n.hasDeps(t))return
var r=j,i=null===r
i&&(r=j=new Map);(function(e,t,n,r,i){var o=r.get(t)
if(void 0===o&&(o=new Set,r.set(t,o)),!o.has(n)){var s=void 0
i.forEachInDeps(n,function(n,r){r&&(void 0!==(s=ge(t,n,i))&&s._suspended===t||e(t,n,i))})}})(F,e,t,r,n),i&&(j=null)}(e,t,r),function(e,t,n){var r=n.readableChainWatchers()
void 0!==r&&r.notify(t,!0,F)}(0,t,r),function(e,t,n){if(n.isSourceDestroying())return
var r=L(t)
M>0?P.add(e,t,r):f(e,r,[e,t])}(e,t,r)),D in e&&e[D](t),i){if(r.isSourceDestroying())return
A(r,t)}}}var j=null
function B(e,t,n){var r=n.readableChainWatchers()
void 0!==r&&r.revalidate(t)}function H(){M++}function $(){--M<=0&&P.flush()}function U(e){H()
try{e()}finally{$()}}function W(){this.isDescriptor=!0}var z=void 0
function K(e,t,n,r,i){void 0===i&&(i=me(e))
var o=i.peekWatching(t),s=void 0!==o&&o>0,a=ge(e,t,i),l=void 0!==a
l&&(a.teardown(e,t,i),i.removeDescriptors(t))
var u=!0
e===Array.prototype&&(u=!1)
var c=void 0
return n instanceof W?(c=n,Object.defineProperty(e,t,{configurable:!0,enumerable:u,get:z(t,c)}),i.writeDescriptors(t,c),function(e){if(!1===q)return
var t=Fe(e)
void 0!==t&&t.delete("_computedProperties")}(e.constructor),"function"==typeof n.setup&&n.setup(e,t)):void 0===n||null===n?(c=r,l?Object.defineProperty(e,t,{configurable:!0,enumerable:u,writable:!0,value:c}):!1===u?Object.defineProperty(e,t,{configurable:!0,enumerable:u,writable:!0,value:c}):e[t]=r):(c=n,Object.defineProperty(e,t,n)),s&&B(0,t,i),"function"==typeof e.didDefineProperty&&e.didDefineProperty(e,t,c),this}z=function(e,t){return function(){return t.get(this,e)}}
var q=!1
function V(e,t,n){if("object"==typeof e&&null!==e){var r,i=void 0===n?me(e):n,o=i.peekWatching(t)||0
i.writeWatching(t,o+1),0===o&&(void 0!==(r=ge(e,t,i))&&r.willWatch&&r.willWatch(e,t,i),"function"==typeof e.willWatchProperty&&e.willWatchProperty(t))}}function G(e,t,n){if("object"==typeof e&&null!==e){var r,i=void 0===n?he(e):n
if(void 0!==i&&!i.isSourceDestroyed()){var o=i.peekWatching(t)
1===o?(i.writeWatching(t,0),void 0!==(r=ge(e,t,i))&&r.didUnwatch&&r.didUnwatch(e,t,i),"function"==typeof e.didUnwatchProperty&&e.didUnwatchProperty(t)):o>1&&i.writeWatching(t,o-1)}}}function Y(e,t){return"function"==typeof e.objectAt?e.objectAt(t):e[t]}var Q=new WeakMap
function X(e){var t=Q.get(e)
return void 0===t&&(t=new J(e),Q.set(e,t)),t}var J=function(){function e(e){this._content=e,this._keys=void 0,me(this)}return e.prototype.arrayWillChange=function(e,t,n){var r=this._keys,i=n>0?t+n:-1
for(var o in r)i>0&&ee(e,o,this,t,i)},e.prototype.arrayDidChange=function(e,t,n,r){var i=this._keys,o=r>0?t+r:-1,s=he(this)
for(var a in i)o>0&&Z(e,a,this,t,o),F(this,a,s)},e.prototype.willWatchProperty=function(e){this.beginObservingContentKey(e)},e.prototype.didUnwatchProperty=function(e){this.stopObservingContentKey(e)},e.prototype.beginObservingContentKey=function(e){var t,n=this._keys
n||(n=this._keys=Object.create(null)),n[e]?n[e]++:(n[e]=1,Z(t=this._content,e,this,0,Ce(t,"length")))},e.prototype.stopObservingContentKey=function(e){var t,n=this._keys
n&&n[e]>0&&--n[e]<=0&&ee(t=this._content,e,this,0,Ce(t,"length"))},e.prototype.contentKeyDidChange=function(e,t){F(this,t)},e}()
function Z(e,t,n,r,i){for(var o;--i>=r;)(o=Y(e,i))&&k(o,t,n,"contentKeyDidChange")}function ee(e,t,n,r,i){for(var o;--i>=r;)(o=Y(e,i))&&I(o,t,n,"contentKeyDidChange")}function te(e){return"object"==typeof e&&null!==e}var ne=function(){function e(){this.chains=Object.create(null)}return e.prototype.add=function(e,t){var n=this.chains[e]
void 0===n?this.chains[e]=[t]:n.push(t)},e.prototype.remove=function(e,t){var n,r=this.chains[e]
if(void 0!==r)for(n=0;n<r.length;n++)if(r[n]===t){r.splice(n,1)
break}},e.prototype.has=function(e,t){var n,r=this.chains[e]
if(void 0!==r)for(n=0;n<r.length;n++)if(r[n]===t)return!0
return!1},e.prototype.revalidateAll=function(){for(var e in this.chains)this.notify(e,!0,void 0)},e.prototype.revalidate=function(e){this.notify(e,!0,void 0)},e.prototype.notify=function(e,t,n){var r,i,o=this.chains[e]
if(void 0!==o&&0!==o.length){var s=void 0
for(n&&(s=[]),r=0;r<o.length;r++)o[r].notify(t,s)
if(void 0!==n)for(i=0;i<s.length;i+=2)n(s[i],s[i+1])}},e}()
function re(){return new ne}function ie(e){return new ae(null,null,e)}function oe(e,t,n){var r=me(e)
r.writableChainWatchers(re).add(t,n),V(e,t,r)}function se(e,t,n,r){if(te(e)){var i=void 0===r?he(e):r
void 0!==i&&void 0!==i.readableChainWatchers()&&((i=me(e)).readableChainWatchers().remove(t,n),G(e,t,i))}}var ae=function(){function e(e,t,n){this._parent=e,this._key=t
var r,i=this._watching=void 0===n
if(this._chains=void 0,this._object=void 0,this.count=0,this._value=n,this._paths=void 0,i){if(!te(r=e.value()))return
this._object=r,oe(this._object,this._key,this)}}return e.prototype.value=function(){var e
return void 0===this._value&&this._watching&&(e=this._parent.value(),this._value=function(e,t){if(!te(e))return
var n=he(e)
if(void 0!==n&&n.proto===e)return
return"@each"===t?X(e):function(e,t,n){var r=ge(e,t,n)
return!(void 0!==r&&!1===r._volatile)}(e,t,n)?Ce(e,t):Me(e,t)}(e,this._key)),this._value},e.prototype.destroy=function(){this._watching&&(se(this._object,this._key,this),this._watching=!1)},e.prototype.copy=function(e){var t,n=ie(e),r=this._paths
if(void 0!==r)for(t in t=void 0,r)r[t]>0&&n.add(t)
return n},e.prototype.add=function(e){var t=this._paths||(this._paths={})
t[e]=(t[e]||0)+1
var n=e.split(".")
this.chain(n.shift(),n)},e.prototype.remove=function(e){var t=this._paths
if(void 0!==t){t[e]>0&&t[e]--
var n=e.split(".")
this.unchain(n.shift(),n)}},e.prototype.chain=function(t,n){var r=this._chains,i=void 0
void 0===r?r=this._chains=Object.create(null):i=r[t],void 0===i&&(i=r[t]=new e(this,t,void 0)),i.count++,n.length>0&&i.chain(n.shift(),n)},e.prototype.unchain=function(e,t){var n=this._chains,r=n[e]
t.length>0&&r.unchain(t.shift(),t),r.count--,r.count<=0&&(n[r._key]=void 0,r.destroy())},e.prototype.notify=function(e,t){e&&this._watching&&((n=this._parent.value())!==this._object&&(se(this._object,this._key,this),te(n)?(this._object=n,oe(n,this._key,this)):this._object=void 0),this._value=void 0)
var n,r,i=this._chains
if(void 0!==i)for(var o in r=void 0,i)void 0!==(r=i[o])&&r.notify(e,t)
t&&this._parent&&this._parent.populateAffected(this._key,1,t)},e.prototype.populateAffected=function(e,t,n){this._key&&(e=this._key+"."+e),this._parent?this._parent.populateAffected(e,t+1,n):t>1&&n.push(this.value(),e)},e}()
var le=n.symbol("undefined"),ue=[],ce=function(){function e(e,n){this._descriptors=void 0,this._watching=void 0,this._mixins=void 0,t.ENV._ENABLE_BINDING_SUPPORT&&(this._bindings=void 0),this._values=void 0,this._deps=void 0,this._chainWatchers=void 0,this._chains=void 0,this._tag=void 0,this._tags=void 0,this._flags=0,this.source=e,this.proto=void 0,this.parent=n,this._listeners=void 0,this._listenersFinalized=!1}return e.prototype.isInitialized=function(e){return this.proto!==e},e.prototype.destroy=function(){if(!this.isMetaDestroyed()){var e,t=void 0,n=void 0,r=void 0,i=this.readableChains()
if(void 0!==i)for(ue.push(i);ue.length>0;){if(void 0!==(t=(i=ue.pop())._chains))for(n in t)void 0!==t[n]&&ue.push(t[n])
i._watching&&void 0!==(r=i._object)&&(e=he(r))&&!e.isSourceDestroying()&&se(r,i._key,i,e)}this.setMetaDestroyed()}},e.prototype.isSourceDestroying=function(){return 0!=(2&this._flags)},e.prototype.setSourceDestroying=function(){this._flags|=2},e.prototype.isSourceDestroyed=function(){return 0!=(4&this._flags)},e.prototype.setSourceDestroyed=function(){this._flags|=4},e.prototype.isMetaDestroyed=function(){return 0!=(8&this._flags)},e.prototype.setMetaDestroyed=function(){this._flags|=8},e.prototype.isProxy=function(){return 0!=(16&this._flags)},e.prototype.setProxy=function(){this._flags|=16},e.prototype._getOrCreateOwnMap=function(e){return this[e]||(this[e]=Object.create(null))},e.prototype._getInherited=function(e){for(var t,n=this;void 0!==n;){if(void 0!==(t=n[e]))return t
n=n.parent}},e.prototype._findInherited=function(e,t){for(var n,r,i=this;void 0!==i;){if(void 0!==(n=i[e])&&void 0!==(r=n[t]))return r
i=i.parent}},e.prototype.writeDeps=function(e,t,n){var r=this._getOrCreateOwnMap("_deps"),i=r[e]
void 0===i&&(i=r[e]=Object.create(null)),i[t]=n},e.prototype.peekDeps=function(e,t){for(var n,r,i,o=this;void 0!==o;){if(void 0!==(n=o._deps)&&void 0!==(r=n[e])&&void 0!==(i=r[t]))return i
o=o.parent}},e.prototype.hasDeps=function(e){for(var t,n=this;void 0!==n;){if(void 0!==(t=n._deps)&&void 0!==t[e])return!0
n=n.parent}return!1},e.prototype.forEachInDeps=function(e,t){return this._forEachIn("_deps",e,t)},e.prototype._forEachIn=function(e,t,n){for(var r,i,o,s=this,a=void 0,l=void 0;void 0!==s;){if(void 0!==(r=s[e])&&void 0!==(i=r[t]))for(var u in i)(a=void 0===a?new Set:a).has(u)||(a.add(u),(l=l||[]).push(u,i[u]))
s=s.parent}if(void 0!==l)for(o=0;o<l.length;o+=2)n(l[o],l[o+1])},e.prototype.writableTags=function(){return this._getOrCreateOwnMap("_tags")},e.prototype.readableTags=function(){return this._tags},e.prototype.writableTag=function(e){var t=this._tag
return void 0===t&&(t=this._tag=e(this.source)),t},e.prototype.readableTag=function(){return this._tag},e.prototype.writableChainWatchers=function(e){var t=this._chainWatchers
return void 0===t&&(t=this._chainWatchers=e(this.source)),t},e.prototype.readableChainWatchers=function(){return this._chainWatchers},e.prototype.writableChains=function(e){var t=this._chains
return void 0===t&&(t=void 0===this.parent?e(this.source):this.parent.writableChains(e).copy(this.source),this._chains=t),t},e.prototype.readableChains=function(){return this._getInherited("_chains")},e.prototype.writeWatching=function(e,t){this._getOrCreateOwnMap("_watching")[e]=t},e.prototype.peekWatching=function(e){return this._findInherited("_watching",e)},e.prototype.writeMixins=function(e,t){this._getOrCreateOwnMap("_mixins")[e]=t},e.prototype.peekMixins=function(e){return this._findInherited("_mixins",e)},e.prototype.forEachMixins=function(e){for(var t,n=this,r=void 0;void 0!==n;){if(void 0!==(t=n._mixins))for(var i in t)(r=void 0===r?new Set:r).has(i)||(r.add(i),e(i,t[i]))
n=n.parent}},e.prototype.writeBindings=function(e,t){this._getOrCreateOwnMap("_bindings")[e]=t},e.prototype.peekBindings=function(e){return this._findInherited("_bindings",e)},e.prototype.forEachBindings=function(e){for(var t,n=this,r=void 0;void 0!==n;){if(void 0!==(t=n._bindings))for(var i in t)void 0===(r=r||Object.create(null))[i]&&(r[i]=!0,e(i,t[i]))
n=n.parent}},e.prototype.clearBindings=function(){this._bindings=void 0},e.prototype.writeValues=function(e,t){this._getOrCreateOwnMap("_values")[e]=t},e.prototype.peekValues=function(e){return this._findInherited("_values",e)},e.prototype.deleteFromValues=function(e){delete this._getOrCreateOwnMap("_values")[e]},e}()
for(var pe in u)ce.prototype[pe]=u[pe]
ce.prototype.writeDescriptors=function(e,t){this._getOrCreateOwnMap("_descriptors")[e]=t},ce.prototype.peekDescriptors=function(e){var t=this._findInherited("_descriptors",e)
return t===le?void 0:t},ce.prototype.removeDescriptors=function(e){this.writeDescriptors(e,le)}
var de=Object.getPrototypeOf,fe=new WeakMap
function he(e){for(var t=e,n=void 0;void 0!==t&&null!==t;){if(void 0!==(n=fe.get(t)))return n
t=de(t)}}function me(e){var t=he(e),n=void 0
if(void 0!==t){if(t.source===e)return t
n=t}var r=new ce(e,n)
return function(e,t){fe.set(e,t)}(e,r),r}function ge(e,t,n){var r
if(void 0!==(r=void 0===n?he(e):n))return r.peekDescriptors(t)}function ve(e){return null!==e&&"object"==typeof e&&e.isDescriptor}var be=function(){function e(e,t,n,r){this.size=0,this.misses=0,this.hits=0,this.limit=e,this.func=t,this.key=n,this.store=r||new Map}return e.prototype.get=function(e){var t=void 0===this.key?e:this.key(e),n=this.store.get(t)
return void 0===n?(this.misses++,n=this._set(t,this.func(e))):n===le?(this.hits++,n=void 0):this.hits++,n},e.prototype.set=function(e,t){var n=void 0===this.key?e:this.key(e)
return this._set(n,t)},e.prototype._set=function(e,t){return this.limit>this.size&&(this.size++,void 0===t?this.store.set(e,le):this.store.set(e,t)),t},e.prototype.purge=function(){this.store.clear(),this.size=0,this.hits=0,this.misses=0},e}(),ye=new be(1e3,function(e){return e.indexOf(".")})
function Ee(e){return"string"==typeof e&&-1!==ye.get(e)}var Te={object:!0,function:!0,string:!0},_e=n.symbol("PROXY_CONTENT")
function Ae(e,t){return e[t]}function Ce(e,t){var n=typeof e,r="object"===n,i=void 0,o=void 0
if(r||"function"===n){if(void 0===(i=ge(e,t))&&ve(o=Ae(e,t))&&(i=o),void 0!==i)return i.get(e,t)}else o=e[t]
return Ee(t)?Se(e,t):void 0!==o||!r||t in e||"function"!=typeof e.unknownProperty?o:e.unknownProperty(t)}function Se(e,t){var n,r=e,i=t.split(".")
for(n=0;n<i.length;n++){if(!we(r))return
if((r=Ce(r,i[n]))&&r.isDestroyed)return}return r}function we(e){return void 0!==e&&null!==e&&Te[typeof e]}function Re(e,t,n,i){if(!e.isDestroyed){if(Ee(t))return function(e,t,n,i){var o=t.split("."),s=o.pop(),a=o.join("."),l=Se(e,a)
if(l)return Re(l,s,n)
if(!i)throw new r.Error('Property set failed: object in path "'+a+'" could not be found or was destroyed.')}(e,t,n,i)
if(void 0!==(o=ge(e,t)))return o.set(e,t,n),n
var o,s,a=Ae(e,t)
return ve(a)?a.set(e,t,n):void 0!==a||"object"!=typeof e||t in e||"function"!=typeof e.setUnknownProperty?a!==n&&(s=he(e),e[t]=n,F(e,t,s)):e.setUnknownProperty(t,n),n}}var xe=/\.@each$/
function Oe(e,t){var n=e.indexOf("{")
n<0?t(e.replace(xe,".[]")):function e(t,n,r,i){var o=n.indexOf("}"),s=0,a=void 0,l=void 0
var u=n.substring(r+1,o).split(",")
var c=n.substring(o+1)
t+=n.substring(0,r)
l=u.length
for(;s<l;)(a=c.indexOf("{"))<0?i((t+u[s++]+c).replace(xe,".[]")):e(t+u[s++],c,a,i)}("",e,n,t)}function Ne(e,t,n,r){var i,o,s=e._dependentKeys
if(null!==s&&void 0!==s)for(i=0;i<s.length;i++)o=s[i],r.writeDeps(o,n,(r.peekDeps(o,n)||0)+1),x(t,o,r)}function Le(e,t,n,r){var i,o,s=e._dependentKeys
if(null!==s&&void 0!==s)for(i=0;i<s.length;i++)o=s[i],r.writeDeps(o,n,(r.peekDeps(o,n)||0)-1),N(t,o,r)}function ke(e,t){this.isDescriptor=!0
var n="function"==typeof e
n?this._getter=e:(this._getter=e.get,this._setter=e.set),this._suspended=void 0,this._meta=void 0,this._volatile=!1,this._dependentKeys=t&&t.dependentKeys,this._readOnly=t&&n&&!0===t.readOnly}ke.prototype=new W,ke.prototype.constructor=ke
var Ie=ke.prototype
Ie.volatile=function(){return this._volatile=!0,this},Ie.readOnly=function(){return this._readOnly=!0,this},Ie.property=function(){var e,t=[]
function n(e){t.push(e)}for(e=0;e<arguments.length;e++)Oe(arguments[e],n)
return this._dependentKeys=t,this},Ie.meta=function(e){return 0===arguments.length?this._meta||{}:(this._meta=e,this)},Ie.didChange=function(e,t){if(!this._volatile&&this._suspended!==e){var n=he(e)
if(void 0!==n&&n.source===e){var r=Fe(e)
void 0!==r&&r.delete(t)&&Le(this,e,t,n)}}},Ie.get=function(e,t){if(this._volatile)return this._getter.call(e,t)
var n=Pe(e)
if(n.has(t))return n.get(t)
var r=this._getter.call(e,t)
n.set(t,r)
var i=me(e),o=i.readableChainWatchers()
return void 0!==o&&o.revalidate(t),Ne(this,e,t,i),r},Ie.set=function(e,t,n){return this._readOnly&&this._throwReadOnlyError(e,t),this._setter?this._volatile?this.volatileSet(e,t,n):this.setWithSuspend(e,t,n):this.clobberSet(e,t,n)},Ie._throwReadOnlyError=function(e,t){throw new r.Error('Cannot set read-only property "'+t+'" on object: '+n.inspect(e))},Ie.clobberSet=function(e,t,n){return K(e,t,null,Me(e,t)),Re(e,t,n),n},Ie.volatileSet=function(e,t,n){return this._setter.call(e,t,n)},Ie.setWithSuspend=function(e,t,n){var r=this._suspended
this._suspended=e
try{return this._set(e,t,n)}finally{this._suspended=r}},Ie._set=function(e,t,n){var r=me(e),i=Pe(e),o=i.has(t),s=i.get(t),a=this._setter.call(e,t,n,s)
return o&&s===a?a:(o||Ne(this,e,t,r),i.set(t,a),F(e,t,r),a)},Ie.teardown=function(e,t,n){if(!this._volatile){var r=Fe(e)
void 0!==r&&r.delete(t)&&Le(this,e,t,n)}}
var De=new WeakMap
function Pe(e){var t=De.get(e)
return void 0===t&&(t=new Map,De.set(e,t)),t}function Me(e,t){var n=De.get(e)
if(void 0!==n)return n.get(t)}function Fe(e){return De.get(e)}var je={},Be=function(e){function t(t){var n=i.possibleConstructorReturn(this,e.call(this))
return n.isDescriptor=!0,n.altKey=t,n._dependentKeys=[t],n}return i.inherits(t,e),t.prototype.setup=function(e,t){var n=me(e)
n.peekWatching(t)&&Ne(this,e,t,n)},t.prototype.teardown=function(e,t,n){n.peekWatching(t)&&Le(this,e,t,n)},t.prototype.willWatch=function(e,t,n){Ne(this,e,t,n)},t.prototype.didUnwatch=function(e,t,n){Le(this,e,t,n)},t.prototype.get=function(e,t){var n=Ce(e,this.altKey),r=me(e),i=Pe(e)
return i.get(t)!==je&&(i.set(t,je),Ne(this,e,t,r)),n},t.prototype.set=function(e,t,n){return Re(e,this.altKey,n)},t.prototype.readOnly=function(){return this.set=He,this},t.prototype.oneWay=function(){return this.set=$e,this},t}(W)
function He(e,t){throw new r.Error("Cannot set read-only property '"+t+"' on object: "+n.inspect(e))}function $e(e,t,n){return K(e,t,null),Re(e,t,n)}Be.prototype._meta=void 0,Be.prototype.meta=ke.prototype.meta
var Ue=[],We={}
var ze,Ke,qe=(ze="undefined"!=typeof window&&window.performance||{},(Ke=ze.now||ze.mozNow||ze.webkitNow||ze.msNow||ze.oNow)?Ke.bind(ze):function(){return+new Date})
function Ve(){}function Ge(e,n,r){if(0===Ue.length)return Ve
var i=We[e]
if(i||(i=function(e){var t,n=[],r=void 0
for(t=0;t<Ue.length;t++)(r=Ue[t]).regex.test(e)&&n.push(r.object)
return We[e]=n,n}(e)),0===i.length)return Ve
var o=n(r),s=t.ENV.STRUCTURED_PROFILE,a=void 0
s&&(a=e+": "+o.object,console.time(a))
var l=new Array(i.length),u=void 0,c=void 0,p=qe()
for(u=0;u<i.length;u++)c=i[u],l[u]=c.before(e,p,o)
return function(){var t=void 0,n=void 0,r=qe()
for(t=0;t<i.length;t++)"function"==typeof(n=i[t]).after&&n.after(e,r,o,l[t])
s&&console.timeEnd(a)}}function Ye(e){return null===e||void 0===e}function Qe(e){var t,n,r=Ye(e)
if(r)return r
if("number"==typeof e.size)return!e.size
var i=typeof e
return"object"===i&&"number"==typeof(t=Ce(e,"size"))?!t:"number"==typeof e.length&&"function"!==i?!e.length:"object"===i&&"number"==typeof(n=Ce(e,"length"))&&!n}function Xe(e){return Qe(e)||"string"==typeof e&&!1===/\S/.test(e)}e.flaggedInstrument=void 0,e.flaggedInstrument=function(e,t,n){return n()}
var Je=function(){function e(){this._registry=[],this._coreLibIndex=0}return e.prototype._getLibraryByName=function(e){var t,n=this._registry,r=n.length
for(t=0;t<r;t++)if(n[t].name===e)return n[t]},e.prototype.register=function(e,t,n){var r=this._registry.length
this._getLibraryByName(e)||(n&&(r=this._coreLibIndex++),this._registry.splice(r,0,{name:e,version:t}))},e.prototype.registerCoreLibrary=function(e,t){this.register(e,t,!0)},e.prototype.deRegister=function(e){var t=this._getLibraryByName(e),n=void 0
t&&(n=this._registry.indexOf(t),this._registry.splice(n,1))},e}(),Ze=new Je
function et(e){var t=Object.create(null)
for(var n in e)t[n]=e[n]
return t}function tt(e,t){var n=e._keys.copy(),r=et(e._values)
return t._keys=n,t._values=r,t.size=e.size,t}var nt=function(){function e(){this.clear()}return e.create=function(){return new this},e.prototype.clear=function(){this.presenceSet=Object.create(null),this.list=[],this.size=0},e.prototype.add=function(e,t){var r=t||n.guidFor(e),i=this.presenceSet,o=this.list
return!0!==i[r]&&(i[r]=!0,this.size=o.push(e)),this},e.prototype.delete=function(e,t){var r,i=t||n.guidFor(e),o=this.presenceSet,s=this.list
return!0===o[i]&&(delete o[i],(r=s.indexOf(e))>-1&&s.splice(r,1),this.size=s.length,!0)},e.prototype.isEmpty=function(){return 0===this.size},e.prototype.has=function(e){if(0===this.size)return!1
var t=n.guidFor(e)
return!0===this.presenceSet[t]},e.prototype.forEach=function(e){if(0!==this.size){var t,n,r=this.list
if(2===arguments.length)for(t=0;t<r.length;t++)e.call(arguments[1],r[t])
else for(n=0;n<r.length;n++)e(r[n])}},e.prototype.toArray=function(){return this.list.slice()},e.prototype.copy=function(){var e=new(0,this.constructor)
return e.presenceSet=et(this.presenceSet),e.list=this.toArray(),e.size=this.size,e},e}(),rt=function(){function e(){this._keys=new nt,this._values=Object.create(null),this.size=0}return e.create=function(){return new this},e.prototype.get=function(e){if(0!==this.size)return this._values[n.guidFor(e)]},e.prototype.set=function(e,t){var r=this._keys,i=this._values,o=n.guidFor(e),s=-0===e?0:e
return r.add(s,o),i[o]=t,this.size=r.size,this},e.prototype.delete=function(e){if(0===this.size)return!1
var t=this._keys,r=this._values,i=n.guidFor(e)
return!!t.delete(e,i)&&(delete r[i],this.size=t.size,!0)},e.prototype.has=function(e){return this._keys.has(e)},e.prototype.forEach=function(e){if(0!==this.size){var t=this,n=void 0,r=void 0
2===arguments.length?(r=arguments[1],n=function(n){return e.call(r,t.get(n),n,t)}):n=function(n){return e(t.get(n),n,t)},this._keys.forEach(n)}},e.prototype.clear=function(){this._keys.clear(),this._values=Object.create(null),this.size=0},e.prototype.copy=function(){return tt(this,new e)},e}(),it=function(e){function t(t){var n=i.possibleConstructorReturn(this,e.call(this))
return n.defaultValue=t.defaultValue,n}return i.inherits(t,e),t.create=function(e){return e?new t(e):new rt},t.prototype.get=function(t){var n
return this.has(t)?e.prototype.get.call(this,t):(n=this.defaultValue(t),this.set(t,n),n)},t.prototype.copy=function(){return tt(this,new(0,this.constructor)({defaultValue:this.defaultValue}))},t}(rt),ot=Array.prototype.concat,st=Array.isArray
function at(e){return"function"==typeof e&&!1!==e.isMethod&&e!==Boolean&&e!==Object&&e!==Number&&e!==Array&&e!==Date&&e!==String}var lt={}
function ut(e,t,n,r){var i=n[e]||r[e]
return t[e]&&(i=i?ot.call(i,t[e]):t[e]),i}function ct(e,t,r,i,o){if(void 0!==o[t])return r
var s=i[t]
return void 0===s&&void 0===ge(e,t)&&(s=e[t]),"function"==typeof s?n.wrap(r,s):r}function pt(e,r,i,o,s,a,l,u){if(i instanceof W){if(t.ENV._ENABLE_PROPERTY_REQUIRED_SUPPORT&&i===yt&&s[r])return lt
i._getter&&(i=function(e,t,r,i,o,s){var a=void 0
return void 0===i[t]&&(a=o[t]),a||(a=ge(s,t,e)),void 0!==a&&a instanceof ke?((r=Object.create(r))._getter=n.wrap(r._getter,a._getter),a._setter&&(r._setter?r._setter=n.wrap(r._setter,a._setter):r._setter=a._setter),r):r}(o,r,i,a,s,e)),s[r]=i,a[r]=void 0}else l&&l.indexOf(r)>=0||"concatenatedProperties"===r||"mergedProperties"===r?i=function(e,t,r,i){var o=i[t]||e[t]
return null===o||void 0===o?n.makeArray(r):st(o)?null===r||void 0===r?o:ot.call(o,r):ot.call(n.makeArray(o),r)}(e,r,i,a):u&&u.indexOf(r)>-1?i=function(e,t,r,i){var o,s=i[t]||e[t]
if(!s)return r
var a=n.assign({},s),l=!1
for(var u in r)r.hasOwnProperty(u)&&(at(o=r[u])?(l=!0,a[u]=ct(e,u,o,s,{})):a[u]=o)
return l&&(a._super=n.ROOT),a}(e,r,i,a):at(i)&&(i=ct(e,r,i,a,s)),s[r]=void 0,a[r]=i}function dt(e,t,n,r){var i=t.methodName,o=void 0,s=void 0
return n[i]||r[i]?(o=r[i],t=n[i]):void 0!==(s=ge(e,i))?(t=s,o=void 0):(t=void 0,o=e[i]),{desc:t,value:o}}function ft(e,t,n,r){var i
if(n)for(i=0;i<n.length;i++)r(e,n[i],null,t)}function ht(e,t,n,r){"function"==typeof n&&(ft(e,t,n.__ember_observes__,I),ft(e,t,n.__ember_listens__,d)),"function"==typeof r&&(ft(e,t,r.__ember_observes__,k),ft(e,t,r.__ember_listens__,p))}function mt(e,r,i){var o,s,a={},l={},u=me(e),c=[],p=void 0,d=void 0,f=void 0
for(e._super=n.ROOT,function e(t,r,i,o,s,a){var l,u,c,p,d=void 0,f=void 0,h=void 0,m=void 0,g=void 0
function v(e){delete i[e],delete o[e]}for(l=0;l<t.length;l++)if(d=t[l],u=r,p=void 0,p=void 0,(f=(c=d)instanceof gt?(p=n.guidFor(c),u.peekMixins(p)?lt:(u.writeMixins(p,c),c.properties)):c)!==lt)if(f){for(h in s.willMergeMixin&&s.willMergeMixin(f),m=ut("concatenatedProperties",f,o,s),g=ut("mergedProperties",f,o,s),f)f.hasOwnProperty(h)&&(a.push(h),pt(s,h,f[h],r,i,o,m,g))
f.hasOwnProperty("toString")&&(s.toString=f.toString)}else d.mixins&&(e(d.mixins,r,i,o,s,a),d._without&&d._without.forEach(v))}(r,u,a,l,e,c),o=0;o<c.length;o++)if("constructor"!==(p=c[o])&&l.hasOwnProperty(p)&&(f=a[p],d=l[p],!t.ENV._ENABLE_PROPERTY_REQUIRED_SUPPORT||f!==yt)){for(;f&&f instanceof Et;)f=(s=dt(e,f,a,l)).desc,d=s.value
void 0===f&&void 0===d||(void 0!==ge(e,p)?ht(e,p,null,d):ht(e,p,e[p],d),t.ENV._ENABLE_BINDING_SUPPORT&&"function"==typeof gt.detectBinding&&gt.detectBinding(p)&&u.writeBindings(p,d),K(e,p,f,d,u))}return t.ENV._ENABLE_BINDING_SUPPORT&&!i&&"function"==typeof gt.finishProtype&&gt.finishPartial(e,u),e}var gt=function(){function e(t,i){this.properties=i
var o,s,a,l=t&&t.length
if(l>0){for(o=new Array(l),s=0;s<l;s++)a=t[s],o[s]=a instanceof e?a:new e(void 0,a)
this.mixins=o}else this.mixins=void 0
this.ownerConstructor=void 0,this._without=void 0,this[n.GUID_KEY]=null,this[n.NAME_KEY]=null,r.debugSeal(this)}return e.applyPartial=function(e){var t,n,r
for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return mt(e,n,!0)},e.create=function(){bt=!0
var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return new this(t,void 0)},e.mixins=function(e){var t=he(e),n=[]
return void 0===t?n:(t.forEachMixins(function(e,t){t.properties||n.push(t)}),n)},e.prototype.reopen=function(){var t=void 0
this.properties?(t=new e(void 0,this.properties),this.properties=void 0,this.mixins=[t]):this.mixins||(this.mixins=[])
var n=this.mixins,r=void 0
for(r=0;r<arguments.length;r++)(t=arguments[r])instanceof e?n.push(t):n.push(new e(void 0,t))
return this},e.prototype.apply=function(e){return mt(e,[this],!1)},e.prototype.applyPartial=function(e){return mt(e,[this],!0)},e.prototype.detect=function(t){if("object"!=typeof t||null===t)return!1
if(t instanceof e)return function e(t,r,i){var o=n.guidFor(t)
if(i[o])return!1
i[o]=!0
if(t===r)return!0
var s=t.mixins
var a=s?s.length:0
for(;--a>=0;)if(e(s[a],r,i))return!0
return!1}(t,this,{})
var r=he(t)
return void 0!==r&&!!r.peekMixins(n.guidFor(this))},e.prototype.without=function(){var t,n,r,i=new e([this])
for(t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
return i._without=n,i},e.prototype.keys=function(){var e={}
return function e(t,r,i){var o,s,a
if(i[n.guidFor(r)])return
i[n.guidFor(r)]=!0
if(r.properties)for(o=Object.keys(r.properties),s=0;s<o.length;s++)a=o[s],t[a]=!0
else r.mixins&&r.mixins.forEach(function(n){return e(t,n,i)})}(e,this,{}),Object.keys(e)},e}()
gt._apply=mt,t.ENV._ENABLE_BINDING_SUPPORT&&(gt.finishPartial=null,gt.detectBinding=null)
var vt=gt.prototype
vt.toString=function(){return"(unknown mixin)"},r.debugSeal(vt)
var bt=!1
var yt=new W
function Et(e){this.isDescriptor=!0,this.methodName=e}function Tt(e,t){this.type=e,this.name=t,this._super$Constructor(_t),St.oneWay.call(this)}function _t(e){var t=ge(this,e)
return(n.getOwner(this)||this.container).lookup(t.type+":"+(t.name||e))}yt.toString=function(){return"(Required Property)"},Et.prototype=new W,Tt.prototype=Object.create(W.prototype)
var At=Tt.prototype,Ct=ke.prototype,St=Be.prototype
At._super$Constructor=ke,At.get=Ct.get,At.readOnly=Ct.readOnly,At.teardown=Ct.teardown
var wt=Array.prototype.splice,Rt=function(e){function t(t){var n=i.possibleConstructorReturn(this,e.call(this))
return n.desc=t,n}return i.inherits(t,e),t.prototype.setup=function(e,t){Object.defineProperty(e,t,this.desc)},t.prototype.get=function(e,t){return e[t]},t.prototype.set=function(e,t,n){return e[t]=n},t.prototype.teardown=function(){},t}(W)
e.default=l,e.computed=function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,r=new ke(t.pop())
return t.length>0&&r.property.apply(r,t),r},e.getCacheFor=Pe,e.getCachedValueFor=Me,e.peekCacheFor=Fe,e.ComputedProperty=ke,e.alias=function(e){return new Be(e)},e.merge=function(e,t){if(null===t||"object"!=typeof t)return e
var n,r=Object.keys(t),i=void 0
for(n=0;n<r.length;n++)e[i=r[n]]=t[i]
return e},e.deprecateProperty=function(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,set:function(e){Re(this,n,e)},get:function(){return Ce(this,n)}})},e.instrument=function(e,t,n,r){if(arguments.length<=3&&"function"==typeof t&&(r=n,n=t,t=void 0),0===Ue.length)return n.call(r)
var i=t||{},o=Ge(e,function(){return i})
return o?function(e,t,n,r){var i=void 0
try{i=e.call(r)}catch(e){n.exception=e,i=n}finally{t()}return i}(n,o,i,r):n.call(r)},e._instrumentStart=Ge,e.instrumentationReset=function(){Ue.length=0,We={}},e.instrumentationSubscribe=function(e,t){var n,r=e.split("."),i=void 0,o=[]
for(n=0;n<r.length;n++)"*"===(i=r[n])?o.push("[^\\.]*"):o.push(i)
o=o.join("\\."),o+="(\\..*)?"
var s={pattern:e,regex:new RegExp("^"+o+"$"),object:t}
return Ue.push(s),We={},s},e.instrumentationUnsubscribe=function(e){var t,n=void 0
for(t=0;t<Ue.length;t++)Ue[t]===e&&(n=t)
Ue.splice(n,1),We={}},e.getOnerror=function(){return h},e.setOnerror=function(e){h=e},e.setDispatchOverride=function(e){g=e},e.getDispatchOverride=function(){return g},e.descriptorFor=ge,e.meta=me,e.peekMeta=he,e.deleteMeta=function(e){var t=he(e)
void 0!==t&&t.destroy()},e.Cache=be,e.PROXY_CONTENT=_e,e._getPath=Se,e.get=Ce,e.getWithDefault=function(e,t,n){var r=Ce(e,t)
return void 0===r?n:r},e.set=Re,e.trySet=function(e,t,n){return Re(e,t,n,!0)},e.objectAt=Y
e.eachProxyFor=X,e.eachProxyArrayWillChange=function(e,t,n,r){var i=Q.get(e)
void 0!==i&&i.arrayWillChange(e,t,n,r)},e.eachProxyArrayDidChange=function(e,t,n,r){var i=Q.get(e)
void 0!==i&&i.arrayDidChange(e,t,n,r)},e.addListener=p,e.hasListeners=function(e,t){var n=he(e)
if(void 0===n)return!1
var r=n.matchingListeners(t)
return void 0!==r&&r.length>0},e.on=function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,r=t.pop()
return r.__ember_listens__=t,r},e.removeListener=d,e.sendEvent=f,e.isNone=Ye,e.isEmpty=Qe,e.isBlank=Xe,e.isPresent=function(e){return!Xe(e)},e.run=y,e.beginPropertyChanges=H,e.changeProperties=U,e.endPropertyChanges=$,e.notifyPropertyChange=F,e.overrideChains=B,e.propertyDidChange=function(e,t,n){F(e,t,n)},e.propertyWillChange=function(){},e.PROPERTY_DID_CHANGE=D,e.defineProperty=K,e.Descriptor=W,e._hasCachedComputedProperties=function(){q=!0},e.watchKey=V,e.unwatchKey=G,e.ChainNode=ae,e.finishChains=function(e){var t=e.readableChainWatchers()
void 0!==t&&t.revalidateAll(),void 0!==e.readableChains()&&e.writableChains(ie)},e.removeChainWatcher=se,e.watchPath=w
e.unwatchPath=R,e.isWatching=function(e,t){return O(e,t)>0},e.unwatch=N,e.watch=x,e.watcherCount=O,e.libraries=Ze,e.Libraries=Je,e.Map=rt,e.MapWithDefault=it,e.OrderedSet=nt,e.getProperties=function(e){var t={},n=arguments,r=1
for(2===arguments.length&&Array.isArray(arguments[1])&&(r=0,n=arguments[1]);r<n.length;r++)t[n[r]]=Ce(e,n[r])
return t},e.setProperties=function(e,t){return null===t||"object"!=typeof t?t:(U(function(){var n,r=Object.keys(t),i=void 0
for(n=0;n<r.length;n++)i=r[n],Re(e,i,t[i])}),t)},e.expandProperties=Oe,e.addObserver=k,e.removeObserver=I,e.Mixin=gt,e.aliasMethod=function(e){return new Et(e)},e.mixin=function(e){var t,n,r
for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return mt(e,n,!1),e},e.observer=function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,r,i=t.pop(),o=t,s=[],a=function(e){return s.push(e)}
for(r=0;r<o.length;++r)Oe(o[r],a)
return i.__ember_observes__=s,i},e.required=function(){return yt},e.REQUIRED=yt,e.hasUnprocessedMixins=function(){return bt},e.clearUnprocessedMixins=function(){bt=!1},e.InjectedProperty=Tt,e.setHasViews=function(e){E=e},e.tagForProperty=function(e,t,n){if("object"!=typeof e||null===e)return o.CONSTANT_TAG
var r=void 0===n?me(e):n
if(r.isProxy())return _(e,r)
var i=r.writableTags(),s=i[t]
return s||(i[t]=T())},e.tagFor=_,e.markObjectAsDirty=A,e.replace=function(e,t,n,r){for(var i=[].concat(r),o=[],s=t,a=n,l=void 0,u=void 0;i.length;)(l=a>6e4?6e4:a)<=0&&(l=0),u=i.splice(0,6e4),u=[s,l].concat(u),s+=6e4,a-=l,o=o.concat(wt.apply(e,u))
return o},e.didRender=void 0
e.assertNotRendered=void 0,e.isProxy=function(e){var t
return"object"==typeof e&&null!==e&&(void 0!==(t=he(e))&&t.isProxy())},e.descriptor=function(e){return new Rt(e)},Object.defineProperty(e,"__esModule",{value:!0})}),e("ember-routing/ext/controller",["exports","ember-metal","ember-runtime","ember-routing/utils"],function(e,t,n,r){"use strict"
n.ControllerMixin.reopen({concatenatedProperties:["queryParams"],queryParams:null,_qpDelegate:null,_qpChanged:function(e,n){var r=n.substr(0,n.length-3);(0,e._qpDelegate)(r,(0,t.get)(e,r))},transitionToRoute:function(){var e,n,i,o=(0,t.get)(this,"target"),s=o.transitionToRoute||o.transitionTo
for(e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i]
return s.apply(o,(0,r.prefixRouteNameArg)(this,n))},replaceRoute:function(){var e,n,i,o=(0,t.get)(this,"target"),s=o.replaceRoute||o.replaceWith
for(e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i]
return s.apply(o,(0,r.prefixRouteNameArg)(this,n))}}),e.default=n.ControllerMixin}),e("ember-routing/index",["exports","ember-routing/location/api","ember-routing/location/none_location","ember-routing/location/hash_location","ember-routing/location/history_location","ember-routing/location/auto_location","ember-routing/system/generate_controller","ember-routing/system/controller_for","ember-routing/system/dsl","ember-routing/system/router","ember-routing/system/route","ember-routing/system/query_params","ember-routing/services/routing","ember-routing/services/router","ember-routing/system/cache","ember-routing/ext/controller"],function(e,t,n,r,i,o,s,a,l,u,c,p,d,f,h){"use strict"
e.BucketCache=e.RouterService=e.RoutingService=e.QueryParams=e.Route=e.Router=e.RouterDSL=e.controllerFor=e.generateControllerFactory=e.generateController=e.AutoLocation=e.HistoryLocation=e.HashLocation=e.NoneLocation=e.Location=void 0,Object.defineProperty(e,"Location",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"NoneLocation",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"HashLocation",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"HistoryLocation",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"AutoLocation",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"generateController",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"generateControllerFactory",{enumerable:!0,get:function(){return s.generateControllerFactory}}),Object.defineProperty(e,"controllerFor",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"RouterDSL",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"Router",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"Route",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"QueryParams",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"RoutingService",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"RouterService",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"BucketCache",{enumerable:!0,get:function(){return h.default}})}),e("ember-routing/location/api",["exports","ember-debug","ember-environment","ember-routing/location/util"],function(e,t,n,r){"use strict"
e.default={create:function(e){var t=e&&e.implementation,n=this.implementations[t]
return n.create.apply(n,arguments)},implementations:{},_location:n.environment.location,_getHash:function(){return(0,r.getHash)(this.location)}}}),e("ember-routing/location/auto_location",["exports","ember-utils","ember-metal","ember-debug","ember-runtime","ember-environment","ember-routing/location/util"],function(e,t,n,r,i,o,s){"use strict"
function a(e){return function(){var r,i,o,s=(0,n.get)(this,"concreteImplementation")
for(r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o]
return(0,t.tryInvoke)(s,e,i)}}function l(e,t){var n=(0,s.getPath)(t),r=(0,s.getHash)(t),i=(0,s.getQuery)(t),o=(n.indexOf(e),void 0),a=void 0
return"#/"===r.substr(0,2)?(o=(a=r.substr(1).split("#")).shift(),"/"===n.charAt(n.length-1)&&(o=o.substr(1)),n+=o+i,a.length&&(n+="#"+a.join("#"))):n+=i+r,n}function u(e,t){var n=e,r=l(e,t).substr(e.length)
return""!==r&&("/"!==r[0]&&(r="/"+r),n+="#"+r),n}e.getHistoryPath=l,e.getHashPath=u,e.default=i.Object.extend({location:o.environment.location,history:o.environment.history,global:o.environment.window,userAgent:o.environment.userAgent,cancelRouterSetup:!1,rootURL:"/",detect:function(){var e=this.rootURL,r=function(e){var t,n,r=e.location,i=e.userAgent,o=e.history,a=e.documentMode,c=e.global,p=e.rootURL,d="none",f=!1,h=(0,s.getFullPath)(r);(0,s.supportsHistory)(i,o)?(t=l(p,r),h===t?d="history":"/#"===h.substr(0,2)?(o.replaceState({path:t},null,t),d="history"):(f=!0,(0,s.replacePath)(r,t))):(0,s.supportsHashChange)(a,c)&&(n=u(p,r),h===n||"/"===h&&"/#/"===n?d="hash":(f=!0,(0,s.replacePath)(r,n)))
if(f)return!1
return d}({location:this.location,history:this.history,userAgent:this.userAgent,rootURL:e,documentMode:this.documentMode,global:this.global})
!1===r&&((0,n.set)(this,"cancelRouterSetup",!0),r="none")
var i=(0,t.getOwner)(this).lookup("location:"+r);(0,n.set)(i,"rootURL",e),(0,n.set)(this,"concreteImplementation",i)},initState:a("initState"),getURL:a("getURL"),setURL:a("setURL"),replaceURL:a("replaceURL"),onUpdateURL:a("onUpdateURL"),formatURL:a("formatURL"),willDestroy:function(){var e=(0,n.get)(this,"concreteImplementation")
e&&e.destroy()}})}),e("ember-routing/location/hash_location",["exports","ember-metal","ember-runtime","ember-routing/location/api"],function(e,t,n,r){"use strict"
e.default=n.Object.extend({implementation:"hash",init:function(){(0,t.set)(this,"location",(0,t.get)(this,"_location")||window.location),this._hashchangeHandler=void 0},getHash:r.default._getHash,getURL:function(){var e=this.getHash().substr(1),t=e
return"/"!==t[0]&&(t="/",e&&(t+="#"+e)),t},setURL:function(e){(0,t.get)(this,"location").hash=e,(0,t.set)(this,"lastSetURL",e)},replaceURL:function(e){(0,t.get)(this,"location").replace("#"+e),(0,t.set)(this,"lastSetURL",e)},onUpdateURL:function(e){this._removeEventListener(),this._hashchangeHandler=t.run.bind(this,function(){var n=this.getURL();(0,t.get)(this,"lastSetURL")!==n&&((0,t.set)(this,"lastSetURL",null),e(n))}),window.addEventListener("hashchange",this._hashchangeHandler)},formatURL:function(e){return"#"+e},willDestroy:function(){this._removeEventListener()},_removeEventListener:function(){this._hashchangeHandler&&window.removeEventListener("hashchange",this._hashchangeHandler)}})}),e("ember-routing/location/history_location",["exports","ember-metal","ember-runtime","ember-routing/location/api"],function(e,t,n,r){"use strict"
var i=!1
function o(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t
return t=16*Math.random()|0,("x"===e?t:3&t|8).toString(16)})}e.default=n.Object.extend({implementation:"history",init:function(){this._super.apply(this,arguments)
var e=document.querySelector("base"),n=""
e&&(n=e.getAttribute("href")),(0,t.set)(this,"baseURL",n),(0,t.set)(this,"location",(0,t.get)(this,"location")||window.location),this._popstateHandler=void 0},initState:function(){var e=(0,t.get)(this,"history")||window.history;(0,t.set)(this,"history",e),e&&"state"in e&&(this.supportsHistory=!0)
var n=this.getState(),r=this.formatURL(this.getURL())
n&&n.path===r?this._previousURL=this.getURL():this.replaceState(r)},rootURL:"/",getURL:function(){var e=(0,t.get)(this,"location"),n=e.pathname,r=(0,t.get)(this,"rootURL"),i=(0,t.get)(this,"baseURL")
r=r.replace(/\/$/,""),i=i.replace(/\/$/,"")
var o=n.replace(new RegExp("^"+i+"(?=/|$)"),"").replace(new RegExp("^"+r+"(?=/|$)"),"").replace(/\/\/$/g,"/")
return o+=(e.search||"")+this.getHash()},setURL:function(e){var t=this.getState()
e=this.formatURL(e),t&&t.path===e||this.pushState(e)},replaceURL:function(e){var t=this.getState()
e=this.formatURL(e),t&&t.path===e||this.replaceState(e)},getState:function(){return this.supportsHistory?(0,t.get)(this,"history").state:this._historyState},pushState:function(e){var n={path:e,uuid:o()};(0,t.get)(this,"history").pushState(n,null,e),this._historyState=n,this._previousURL=this.getURL()},replaceState:function(e){var n={path:e,uuid:o()};(0,t.get)(this,"history").replaceState(n,null,e),this._historyState=n,this._previousURL=this.getURL()},onUpdateURL:function(e){var t=this
this._removeEventListener(),this._popstateHandler=function(){(i||(i=!0,t.getURL()!==t._previousURL))&&e(t.getURL())},window.addEventListener("popstate",this._popstateHandler)},formatURL:function(e){var n=(0,t.get)(this,"rootURL"),r=(0,t.get)(this,"baseURL")
return""!==e?(n=n.replace(/\/$/,""),r=r.replace(/\/$/,"")):"/"===r[0]&&"/"===n[0]&&(r=r.replace(/\/$/,"")),r+n+e},willDestroy:function(){this._removeEventListener()},getHash:r.default._getHash,_removeEventListener:function(){this._popstateHandler&&window.removeEventListener("popstate",this._popstateHandler)}})}),e("ember-routing/location/none_location",["exports","ember-metal","ember-debug","ember-runtime"],function(e,t,n,r){"use strict"
e.default=r.Object.extend({implementation:"none",path:"",detect:function(){this.rootURL},rootURL:"/",getURL:function(){var e=(0,t.get)(this,"path"),n=(0,t.get)(this,"rootURL")
return n=n.replace(/\/$/,""),e.replace(new RegExp("^"+n+"(?=/|$)"),"")},setURL:function(e){(0,t.set)(this,"path",e)},onUpdateURL:function(e){this.updateCallback=e},handleURL:function(e){(0,t.set)(this,"path",e),this.updateCallback(e)},formatURL:function(e){var n=(0,t.get)(this,"rootURL")
return""!==e&&(n=n.replace(/\/$/,"")),n+e}})}),e("ember-routing/location/util",["exports"],function(e){"use strict"
function t(e){var t=e.pathname
return"/"!==t[0]&&(t="/"+t),t}function n(e){return e.search}function r(e){var t=e.href,n=t.indexOf("#")
return-1===n?"":t.substr(n)}function i(e){var t=e.origin
return t||(t=e.protocol+"//"+e.hostname,e.port&&(t+=":"+e.port)),t}e.getPath=t,e.getQuery=n,e.getHash=r,e.getFullPath=function(e){return t(e)+n(e)+r(e)},e.getOrigin=i,e.supportsHashChange=function(e,t){return"onhashchange"in t&&(void 0===e||e>7)},e.supportsHistory=function(e,t){return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&!!(t&&"pushState"in t)},e.replacePath=function(e,t){e.replace(i(e)+t)}}),e("ember-routing/services/router",["exports","ember-runtime","ember-routing/utils"],function(e,t,n){"use strict"
var r=t.Service.extend({currentRouteName:(0,t.readOnly)("_router.currentRouteName"),currentURL:(0,t.readOnly)("_router.currentURL"),location:(0,t.readOnly)("_router.location"),rootURL:(0,t.readOnly)("_router.rootURL"),_router:null,transitionTo:function(){for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
if((0,n.resemblesURL)(t[0]))return this._router._doURLTransition("transitionTo",t[0])
var e,t,r,i=(0,n.extractRouteArgs)(t),o=i.routeName,s=i.models,a=i.queryParams,l=this._router._doTransition(o,s,a,!0)
return l._keepDefaultQueryParamValues=!0,l},replaceWith:function(){return this.transitionTo.apply(this,arguments).method("replace")},urlFor:function(){var e
return(e=this._router).generate.apply(e,arguments)},isActive:function(){for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
var e,t,r,i=(0,n.extractRouteArgs)(t),o=i.routeName,s=i.models,a=i.queryParams,l=this._router._routerMicrolib
return!!l.isActiveIntent(o,s,null)&&(!(Object.keys(a).length>0)||(this._router._prepareQueryParams(o,s,a,!0),(0,n.shallowEqual)(a,l.state.queryParams)))}})
e.default=r}),e("ember-routing/services/routing",["exports","ember-utils","ember-runtime","ember-metal"],function(e,t,n,r){"use strict"
e.default=n.Service.extend({router:null,targetState:(0,n.readOnly)("router.targetState"),currentState:(0,n.readOnly)("router.currentState"),currentRouteName:(0,n.readOnly)("router.currentRouteName"),currentPath:(0,n.readOnly)("router.currentPath"),hasRoute:function(e){return(0,r.get)(this,"router").hasRoute(e)},transitionTo:function(e,t,n,i){var o=(0,r.get)(this,"router")._doTransition(e,t,n)
return i&&o.method("replace"),o},normalizeQueryParams:function(e,t,n){(0,r.get)(this,"router")._prepareQueryParams(e,t,n)},generateURL:function(e,n,i){var o=(0,r.get)(this,"router")
if(o._routerMicrolib){var s={}
return i&&((0,t.assign)(s,i),this.normalizeQueryParams(e,n,s)),o.generate.apply(o,[e].concat(n,[{queryParams:s}]))}},isActiveForRoute:function(e,t,n,i,o){var s=(0,r.get)(this,"router")._routerMicrolib.recognizer.handlersFor(n),a=s[s.length-1].handler,l=function(e,t){var n,r=0
for(n=0;n<t.length&&(r+=t[n].names.length,t[n].handler!==e);n++);return r}(n,s)
return e.length>l&&(n=a),i.isActiveIntent(n,e,t,!o)}})}),e("ember-routing/system/cache",["exports","ember-runtime"],function(e,t){"use strict"
e.default=t.Object.extend({init:function(){this.cache=Object.create(null)},has:function(e){return!!this.cache[e]},stash:function(e,t,n){var r=this.cache[e]
r||(r=this.cache[e]=Object.create(null)),r[t]=n},lookup:function(e,t,n){var r=this.cache
if(!this.has(e))return n
var i=r[e]
return t in i&&void 0!==i[t]?i[t]:n}})}),e("ember-routing/system/controller_for",["exports"],function(e){"use strict"
e.default=function(e,t,n){return e.lookup("controller:"+t,n)}}),e("ember-routing/system/dsl",["exports","ember-utils","ember-debug"],function(e,t,n){"use strict"
var r=0,i=function(){function e(e,t){this.parent=e,this.enableLoadingSubstates=t&&t.enableLoadingSubstates,this.matches=[],this.explicitIndex=void 0,this.options=t}return e.prototype.route=function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2],a="/_unused_dummy_error_path_route_"+t+"/:error"
2===arguments.length&&"function"==typeof r&&(i=r,r={}),this.enableLoadingSubstates&&(s(this,t+"_loading",{resetNamespace:r.resetNamespace}),s(this,t+"_error",{resetNamespace:r.resetNamespace,path:a})),i?(s(n=new e(o(this,t,r.resetNamespace),this.options),"loading"),s(n,"error",{path:a}),i.call(n),s(this,t,r,n.generate())):s(this,t,r)},e.prototype.push=function(e,n,r,i){var o,s,a=n.split(".")
if(this.options.engineInfo)o=n.slice(this.options.engineInfo.fullName.length+1),s=(0,t.assign)({localFullName:o},this.options.engineInfo),i&&(s.serializeMethod=i),this.options.addRouteForEngine(n,s)
else if(i)throw new Error("Defining a route serializer on route '"+n+"' outside an Engine is not allowed.")
""!==e&&"/"!==e&&"index"!==a[a.length-1]||(this.explicitIndex=!0),this.matches.push(e,n,r)},e.prototype.generate=function(){var e=this.matches
return this.explicitIndex||this.route("index",{path:"/"}),function(t){var n
for(n=0;n<e.length;n+=3)t(e[n]).to(e[n+1],e[n+2])}},e.prototype.mount=function(n){var i,a,l,u,c,p,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=this.options.resolveRouteMap(n),h=n
d.as&&(h=d.as)
var m=o(this,h,d.resetNamespace),g={name:n,instanceId:r++,mountPoint:m,fullName:m},v=d.path
"string"!=typeof v&&(v="/"+h)
var b=void 0,y="/_unused_dummy_error_path_route_"+h+"/:error"
f&&(i=!1,(a=this.options.engineInfo)&&(i=!0,this.options.engineInfo=g),s(l=new e(m,(0,t.assign)({engineInfo:g},this.options)),"loading"),s(l,"error",{path:y}),f.class.call(l),b=l.generate(),i&&(this.options.engineInfo=a))
var E=(0,t.assign)({localFullName:"application"},g)
this.enableLoadingSubstates&&(u=h+"_loading",c="application_loading",p=(0,t.assign)({localFullName:c},g),s(this,u,{resetNamespace:d.resetNamespace}),this.options.addRouteForEngine(u,p),u=h+"_error",c="application_error",p=(0,t.assign)({localFullName:c},g),s(this,u,{resetNamespace:d.resetNamespace,path:y}),this.options.addRouteForEngine(u,p)),this.options.addRouteForEngine(m,E),this.push(v,m,b)},e}()
function o(e,t,n){return function(e){return"application"!==e.parent}(e)&&!0!==n?e.parent+"."+t:t}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],i=o(e,t,n.resetNamespace)
"string"!=typeof n.path&&(n.path="/"+t),e.push(n.path,i,r,n.serialize)}e.default=i,i.map=function(e){var t=new i
return e.call(t),t}}),e("ember-routing/system/generate_controller",["exports","ember-metal","ember-debug"],function(e){"use strict"
function t(e,t){var n=e.factoryFor("controller:basic").class
return n=n.extend({toString:function(){return"(generated "+t+" controller)"}}),e.register("controller:"+t,n),n}e.generateControllerFactory=t,e.default=function(e,n){return t(e,n),e.lookup("controller:"+n)}}),e("ember-routing/system/query_params",["exports","ember-runtime"],function(e,t){"use strict"
e.default=t.Object.extend({isQueryParams:!0,values:null})}),e("ember-routing/system/route",["exports","ember-utils","ember-metal","ember-debug","ember-runtime","ember-routing/system/generate_controller","ember-routing/utils"],function(e,t,n,r,i,o,s){"use strict"
function a(){return this}function l(e,t){if(!(t.length<1)&&e){var r,i={}
return 1===t.length?(r=t[0])in e?i[r]=(0,n.get)(e,r):/_id$/.test(r)&&(i[r]=(0,n.get)(e,"id")):i=(0,n.getProperties)(e,t),i}}e.defaultSerialize=l,e.hasDefaultSerialize=function(e){return!!e.serialize[u]}
var u=(0,t.symbol)("DEFAULT_SERIALIZE")
l[u]=!0
var c=i.Object.extend(i.ActionHandler,i.Evented,{queryParams:{},router:(0,n.computed)("_router",function(){return this._router}),_setRouteName:function(e){this.routeName=e,this.fullRouteName=h((0,t.getOwner)(this),e)},_qp:(0,n.computed)(function(){var e,r,a,l,u,c,p,d,f,h,m=this,g=void 0,v=this.controllerName||this.routeName,b=(0,t.getOwner)(this),y=b.lookup("controller:"+v),E=(0,n.get)(this,"queryParams"),T=Object.keys(E).length>0
y?(e=(0,n.get)(y,"queryParams")||{},g=function(e,n){var r,i,o={},s={defaultValue:!0,type:!0,scope:!0,as:!0}
for(var a in e)e.hasOwnProperty(a)&&(r={},(0,t.assign)(r,e[a],n[a]),o[a]=r,s[a]=!0)
for(var l in n)n.hasOwnProperty(l)&&!s[l]&&(i={},(0,t.assign)(i,n[l],e[l]),o[l]=i)
return o}((0,s.normalizeControllerQueryParams)(e),E)):T&&(y=(0,o.default)(b,v),g=E)
var _=[],A={},C=[]
for(var S in g)g.hasOwnProperty(S)&&"unknownProperty"!==S&&"_super"!==S&&(l=void 0,"controller"===(a=(r=g[S]).scope||"model")&&(l=[]),u=r.as||this.serializeQueryParamKey(S),c=(0,n.get)(y,S),Array.isArray(c)&&(c=(0,i.A)(c.slice())),p=r.type||(0,i.typeOf)(c),d=this.serializeQueryParam(c,u,p),f=v+":"+S,h={undecoratedDefaultValue:(0,n.get)(y,S),defaultValue:c,serializedDefaultValue:d,serializedValue:d,type:p,urlKey:u,prop:S,scopedPropertyName:f,controllerName:v,route:this,parts:l,values:null,scope:a},A[S]=A[u]=A[f]=h,_.push(h),C.push(S))
return{qps:_,map:A,propertyNames:C,states:{inactive:function(e,t){var n=A[e]
m._qpChanged(e,t,n)},active:function(e,t){var n=A[e]
return m._qpChanged(e,t,n),m._activeQPChanged(n,t)},allowOverrides:function(e,t){var n=A[e]
return m._qpChanged(e,t,n),m._updatingQPChanged(n)}}}}),_names:null,_stashNames:function(e,t){if(!this._names){var r,i,o,s=this._names=e._names
s.length||(s=(e=t)&&e._names||[])
var a=(0,n.get)(this,"_qp.qps"),l=new Array(s.length)
for(r=0;r<s.length;++r)l[r]=e.name+"."+s[r]
for(i=0;i<a.length;++i)"model"===(o=a[i]).scope&&(o.parts=l)}},_activeQPChanged:function(e,t){this._router._activeQPChanged(e.scopedPropertyName,t)},_updatingQPChanged:function(e){this._router._updatingQPChanged(e.urlKey)},mergedProperties:["queryParams"],paramsFor:function(e){var n=(0,t.getOwner)(this).lookup("route:"+e)
if(!n)return{}
var r=this._router._routerMicrolib.activeTransition,i=r?r.state:this._router._routerMicrolib.state,o=n.fullRouteName,s=(0,t.assign)({},i.params[o]),a=d(n,i)
return Object.keys(a).reduce(function(e,t){return e[t]=a[t],e},s)},serializeQueryParamKey:function(e){return e},serializeQueryParam:function(e,t,n){return this._router._serializeQueryParam(e,n)},deserializeQueryParam:function(e,t,n){return this._router._deserializeQueryParam(e,n)},_optionsForQueryParam:function(e){return(0,n.get)(this,"queryParams."+e.urlKey)||(0,n.get)(this,"queryParams."+e.prop)||{}},resetController:a,exit:function(){this.deactivate(),this.trigger("deactivate"),this.teardownViews()},_reset:function(e,t){var r=this.controller
r._qpDelegate=(0,n.get)(this,"_qp.states.inactive"),this.resetController(r,e,t)},enter:function(){this.connections=[],this.activate(),this.trigger("activate")},templateName:null,controllerName:null,actions:{queryParamsDidChange:function(e,t,r){var i,o,s=(0,n.get)(this,"_qp").map,a=Object.keys(e).concat(Object.keys(r))
for(i=0;i<a.length;++i)if((o=s[a[i]])&&(0,n.get)(this._optionsForQueryParam(o),"refreshModel")&&this._router.currentState){this.refresh()
break}return!0},finalizeQueryParamChange:function(e,t,r){if("application"!==this.fullRouteName)return!0
if(r){var i,o,a,l,u,c,p,d,h,m=r.state.handlerInfos,g=this._router,v=g._queryParamsFor(m),b=g._qpUpdates,y=void 0
for((0,s.stashParamNames)(g,m),i=0;i<v.qps.length;++i)l=(a=(o=v.qps[i]).route).controller,u=o.urlKey in e&&o.urlKey,c=void 0,p=void 0,b&&o.urlKey in b?(c=(0,n.get)(l,o.prop),p=a.serializeQueryParam(c,o.urlKey,o.type)):u?void 0!==(p=e[u])&&(c=a.deserializeQueryParam(p,o.urlKey,o.type)):(p=o.serializedDefaultValue,c=f(o.defaultValue)),l._qpDelegate=(0,n.get)(a,"_qp.states.inactive"),p!==o.serializedValue&&(r.queryParamsOnly&&!1!==y&&(d=a._optionsForQueryParam(o),(h=(0,n.get)(d,"replace"))?y=!0:!1===h&&(y=!1)),(0,n.set)(l,o.prop,c)),o.serializedValue=p,o.serializedDefaultValue===p&&!r._keepDefaultQueryParamValues||t.push({value:p,visible:!0,key:u||o.urlKey})
y&&r.method("replace"),v.qps.forEach(function(e){var t=(0,n.get)(e.route,"_qp")
e.route.controller._qpDelegate=(0,n.get)(t,"states.active")}),g._qpUpdates=null}}},deactivate:a,activate:a,transitionTo:function(){var e
return(e=this._router).transitionTo.apply(e,(0,s.prefixRouteNameArg)(this,arguments))},intermediateTransitionTo:function(){var e;(e=this._router).intermediateTransitionTo.apply(e,(0,s.prefixRouteNameArg)(this,arguments))},refresh:function(){return this._router._routerMicrolib.refresh(this)},replaceWith:function(){var e
return(e=this._router).replaceWith.apply(e,(0,s.prefixRouteNameArg)(this,arguments))},send:function(){var e,t,n,i,o,s
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(this._router&&this._router._routerMicrolib||!(0,r.isTesting)())(i=this._router).send.apply(i,t)
else if(o=t.shift(),s=this.actions[o])return s.apply(this,t)},setup:function(e,t){var r,i,o,a,l=void 0,u=this.controllerName||this.routeName,c=this.controllerFor(u,!0)
l=c||this.generateController(u),this.controller||(r=(0,n.get)(this,"_qp.propertyNames"),function(e,t){t.forEach(function(t){e.addObserver(t+".[]",e,e._qpChanged)})}(l,r),this.controller=l)
var p=(0,n.get)(this,"_qp"),f=p.states
l._qpDelegate=f.allowOverrides,t&&((0,s.stashParamNames)(this._router,t.state.handlerInfos),i=this._bucketCache,o=t.params,p.propertyNames.forEach(function(e){var t=p.map[e]
t.values=o
var r=(0,s.calculateCacheKey)(t.route.fullRouteName,t.parts,t.values),a=i.lookup(r,e,t.undecoratedDefaultValue);(0,n.set)(l,e,a)}),a=d(this,t.state),(0,n.setProperties)(l,a)),this.setupController(l,e,t),this._environment.options.shouldRender&&this.renderTemplate(l,e)},_qpChanged:function(e,t,n){if(n){var r=this._bucketCache,i=(0,s.calculateCacheKey)(n.route.fullRouteName,n.parts,n.values)
r.stash(i,e,t)}},beforeModel:a,afterModel:a,redirect:a,contextDidChange:function(){this.currentModel=this.context},model:function(e,t){var r,o=void 0,s=void 0,a=void 0,l=(0,n.get)(this,"_qp.map")
for(var u in e)"queryParams"===u||l&&u in l||(null!==(r=u.match(/^(.*)_id$/))&&(o=r[1],a=e[u]),s=!0)
if(!o){if(s)return(0,i.copy)(e)
if(t.resolveIndex<1)return
return t.state.handlerInfos[t.resolveIndex-1].context}return this.findModel(o,a)},deserialize:function(e,t){return this.model(this.paramsFor(this.routeName),t)},findModel:function(){var e
return(e=(0,n.get)(this,"store")).find.apply(e,arguments)},store:(0,n.computed)(function(){var e=(0,t.getOwner)(this)
this.routeName,(0,n.get)(this,"_router.namespace")
return{find:function(t,n){var r=e.factoryFor("model:"+t)
if(r)return(r=r.class).find(n)}}}),serialize:l,setupController:function(e,t){e&&void 0!==t&&(0,n.set)(e,"model",t)},controllerFor:function(e,n){var r=(0,t.getOwner)(this),i=r.lookup("route:"+e)
return i&&i.controllerName&&(e=i.controllerName),r.lookup("controller:"+e)},generateController:function(e){var n=(0,t.getOwner)(this)
return(0,o.default)(n,e)},modelFor:function(e){var n,r=void 0,i=(0,t.getOwner)(this),o=this._router?this._router._routerMicrolib.activeTransition:null
r=i.routable&&null!==o?h(i,e):e
var s=i.lookup("route:"+r)
return null!==o&&(n=s&&s.routeName||r,o.resolvedModels.hasOwnProperty(n))?o.resolvedModels[n]:s&&s.currentModel},renderTemplate:function(){this.render()},render:function(e,r){var i=void 0,o=0===arguments.length
o||("object"!=typeof e||r?i=e:(i=this.templateName||this.routeName,r=e))
var s=function(e,n,r,i){var o,s=(0,t.getOwner)(e),a=void 0,l=void 0,u=void 0,c=void 0,d=void 0,f=void 0
i&&(u=i.into&&i.into.replace(/\//g,"."),c=i.outlet,d=i.controller,f=i.model)
c=c||"main",n?(a=e.routeName,l=e.templateName||a):(a=r.replace(/\//g,"."),l=a)
d||(d=n?e.controllerName||s.lookup("controller:"+a):s.lookup("controller:"+a)||e.controllerName||e.routeName)
"string"==typeof d&&(o=d,d=s.lookup("controller:"+o))
f&&d.set("model",f)
var h=s.lookup("template:"+l)
var m=void 0
u&&(m=p(e))&&u===m.routeName&&(u=void 0)
return{owner:s,into:u,outlet:c,name:a,controller:d,template:h||e._topLevelViewTemplate}}(this,o,i,r)
this.connections.push(s),n.run.once(this._router,"_setOutlets")},disconnectOutlet:function(e){var t,n=void 0,r=void 0
e&&("string"==typeof e?n=e:(n=e.outlet,r=e.parentView?e.parentView.replace(/\//g,"."):void 0)),n=n||"main",this._disconnectOutlet(n,r)
var i=this._router._routerMicrolib.currentHandlerInfos
for(t=0;t<i.length;t++)i[t].handler._disconnectOutlet(n,r)},_disconnectOutlet:function(e,t){var r,i,o=p(this)
for(o&&t===o.routeName&&(t=void 0),r=0;r<this.connections.length;r++)(i=this.connections[r]).outlet===e&&i.into===t&&(this.connections[r]={owner:i.owner,into:i.into,outlet:i.outlet,name:i.name,controller:void 0,template:void 0},n.run.once(this._router,"_setOutlets"))},willDestroy:function(){this.teardownViews()},teardownViews:function(){this.connections&&this.connections.length>0&&(this.connections=[],n.run.once(this._router,"_setOutlets"))}})
function p(e){var t=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if(!t)return
for(n=0;n<t.length;n++)if(t[n].handler===e)return t[n+r]}(e,e._router._routerMicrolib.state.handlerInfos,-1)
return t&&t.handler}function d(e,r){r.queryParamsFor=r.queryParamsFor||{}
var i,o,s,a=e.fullRouteName
if(r.queryParamsFor[a])return r.queryParamsFor[a]
var l=function(e,n){return n.fullQueryParams?n.fullQueryParams:(n.fullQueryParams={},(0,t.assign)(n.fullQueryParams,n.queryParams),e._deserializeQueryParams(n.handlerInfos,n.fullQueryParams),n.fullQueryParams)}(e._router,r),u=r.queryParamsFor[a]={},c=(0,n.get)(e,"_qp").qps
for(i=0;i<c.length;++i)s=(o=c[i]).prop in l,u[o.prop]=s?l[o.prop]:f(o.defaultValue)
return u}function f(e){return Array.isArray(e)?(0,i.A)(e.slice()):e}function h(e,t){var n
return e.routable?(n=e.mountPoint,"application"===t?n:n+"."+t):t}c.reopenClass({isRouteFactory:!0}),e.default=c}),e("ember-routing/system/router",["exports","ember-utils","ember-console","ember-metal","ember-debug","ember-runtime","ember-routing/system/route","ember-routing/system/dsl","ember-routing/location/api","ember-routing/utils","ember-routing/system/router_state","router"],function(e,t,n,r,i,o,s,a,l,u,c,p){"use strict"
function d(){return this}e.triggerEvent=E
var f=Array.prototype.slice,h=o.Object.extend(o.Evented,{location:"hash",rootURL:"/",_initRouterJs:function(){var e=this._routerMicrolib=new p.default
e.triggerEvent=E.bind(this),e._triggerWillChangeContext=d,e._triggerWillLeave=d
var t=this.constructor.dslCallbacks||[d],n=this._buildDSL()
n.route("application",{path:"/",resetNamespace:!0,overrideNameAssertion:!0},function(){var e
for(e=0;e<t.length;e++)t[e].call(this)}),e.map(n.generate())},_buildDSL:function(){var e={enableLoadingSubstates:this._hasModuleBasedResolver()},n=(0,t.getOwner)(this),r=this
return e.resolveRouteMap=function(e){return n.factoryFor("route-map:"+e)},e.addRouteForEngine=function(e,t){r._engineInfoByRoute[e]||(r._engineInfoByRoute[e]=t)},new a.default(null,e)},init:function(){this._super.apply(this,arguments),this.currentURL=null,this.currentRouteName=null,this.currentPath=null,this._qpCache=Object.create(null),this._resetQueuedQueryParameterChanges(),this._handledErrors=new Set,this._engineInstances=Object.create(null),this._engineInfoByRoute=Object.create(null)},_resetQueuedQueryParameterChanges:function(){this._queuedQPChanges={}},url:(0,r.computed)(function(){return(0,r.get)(this,"location").getURL()}),_hasModuleBasedResolver:function(){var e=(0,t.getOwner)(this)
return!!e&&!!(0,r.get)(e,"application.__registry__.resolver.moduleBasedResolver")},startRouting:function(){var e,t=(0,r.get)(this,"initialURL")
if(this.setupRouter()&&(void 0===t&&(t=(0,r.get)(this,"location").getURL()),(e=this.handleURL(t))&&e.error))throw e.error},setupRouter:function(){var e=this
this._initRouterJs(),this._setupLocation()
var t=(0,r.get)(this,"location")
return!(0,r.get)(t,"cancelRouterSetup")&&(this._setupRouter(t),t.onUpdateURL(function(t){e.handleURL(t)}),!0)},didTransition:function(){_(this),this._cancelSlowTransitionTimer(),this.notifyPropertyChange("url"),this.set("currentState",this.targetState),r.run.once(this,this.trigger,"didTransition")},_setOutlets:function(){if(!this.isDestroying&&!this.isDestroyed){var e,n,r,i,o,s,a,l=this._routerMicrolib.currentHandlerInfos,u=void 0,c=void 0,p=null
if(l){for(e=0;e<l.length;e++){for(n=(u=l[e].handler).connections,r=void 0,i=0;i<n.length;i++)p=(o=w(p,c,n[i])).liveRoutes,o.ownState.render.name!==u.routeName&&"main"!==o.ownState.render.outlet||(r=o.ownState)
0===n.length&&(r=R(p,c,u)),c=r}p&&(this._toplevelView?this._toplevelView.setOutletState(p):(a=(s=(0,t.getOwner)(this)).factoryFor("view:-outlet"),this._toplevelView=a.create(),this._toplevelView.setOutletState(p),s.lookup("-application-instance:main").didCreateRootView(this._toplevelView)))}}},willTransition:function(e,t,n){r.run.once(this,this.trigger,"willTransition",n)},handleURL:function(e){var t=e.split(/#(.+)?/)[0]
return this._doURLTransition("handleURL",t)},_doURLTransition:function(e,t){var n=this._routerMicrolib[e](t||"/")
return A(n,this),n},transitionTo:function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
if((0,u.resemblesURL)(t[0]))return this._doURLTransition("transitionTo",t[0])
var e,t,n,r=(0,u.extractRouteArgs)(t),i=r.routeName,o=r.models,s=r.queryParams
return this._doTransition(i,o,s)},intermediateTransitionTo:function(){var e;(e=this._routerMicrolib).intermediateTransitionTo.apply(e,arguments),_(this)},replaceWith:function(){return this.transitionTo.apply(this,arguments).method("replace")},generate:function(){var e,t=(e=this._routerMicrolib).generate.apply(e,arguments)
return this.location.formatURL(t)},isActive:function(){var e
return(e=this._routerMicrolib).isActive.apply(e,arguments)},isActiveIntent:function(e,t,n){return this.currentState.isActiveIntent(e,t,n)},send:function(){var e;(e=this._routerMicrolib).trigger.apply(e,arguments)},hasRoute:function(e){return this._routerMicrolib.hasRoute(e)},reset:function(){this._routerMicrolib&&this._routerMicrolib.reset()},willDestroy:function(){this._toplevelView&&(this._toplevelView.destroy(),this._toplevelView=null),this._super.apply(this,arguments),this.reset()
var e=this._engineInstances
for(var t in e)for(var n in e[t])(0,r.run)(e[t][n],"destroy")},_activeQPChanged:function(e,t){this._queuedQPChanges[e]=t,r.run.once(this,this._fireQueryParamTransition)},_updatingQPChanged:function(e){this._qpUpdates||(this._qpUpdates={}),this._qpUpdates[e]=!0},_fireQueryParamTransition:function(){this.transitionTo({queryParams:this._queuedQPChanges}),this._resetQueuedQueryParameterChanges()},_setupLocation:function(){var e,n,i=(0,r.get)(this,"location"),o=(0,r.get)(this,"rootURL"),s=(0,t.getOwner)(this)
"string"==typeof i&&s&&(void 0!==(e=s.lookup("location:"+i))?i=(0,r.set)(this,"location",e):(n={implementation:i},i=(0,r.set)(this,"location",l.default.create(n)))),null!==i&&"object"==typeof i&&(o&&(0,r.set)(i,"rootURL",o),"function"==typeof i.detect&&i.detect(),"function"==typeof i.initState&&i.initState())},_getHandlerFunction:function(){var e=this,n=Object.create(null),r=(0,t.getOwner)(this)
return function(t){var i,o=t,a=r,l=e._engineInfoByRoute[o]
l&&(a=e._getEngineInstance(l),o=l.localFullName)
var u="route:"+o,c=a.lookup(u)
if(n[t])return c
if(n[t]=!0,c||(i=a.factoryFor("route:basic").class,a.register(u,i.extend()),c=a.lookup(u)),c._setRouteName(o),l&&!(0,s.hasDefaultSerialize)(c))throw new Error("Defining a custom serialize method on an Engine route is not supported.")
return c}},_getSerializerFunction:function(){var e=this
return function(t){var n=e._engineInfoByRoute[t]
if(n)return n.serializeMethod||s.defaultSerialize}},_setupRouter:function(e){var t,n=this,i=void 0,o=this._routerMicrolib
o.getHandler=this._getHandlerFunction(),o.getSerializer=this._getSerializerFunction()
var s=function(){e.setURL(i),(0,r.set)(n,"currentURL",i)}
o.updateURL=function(e){i=e,r.run.once(s)},e.replaceURL&&(t=function(){e.replaceURL(i),(0,r.set)(n,"currentURL",i)},o.replaceURL=function(e){i=e,r.run.once(t)}),o.didTransition=function(e){n.didTransition(e)},o.willTransition=function(e,t,r){n.willTransition(e,t,r)}},_serializeQueryParams:function(e,t){var n=this
C(this,e,t,function(e,r,i){i?(delete t[e],t[i.urlKey]=i.route.serializeQueryParam(r,i.urlKey,i.type)):void 0===r||(t[e]=n._serializeQueryParam(r,(0,o.typeOf)(r)))})},_serializeQueryParam:function(e,t){return null===e||void 0===e?e:"array"===t?JSON.stringify(e):""+e},_deserializeQueryParams:function(e,t){C(this,e,t,function(e,n,r){r&&(delete t[e],t[r.prop]=r.route.deserializeQueryParam(n,r.urlKey,r.type))})},_deserializeQueryParam:function(e,t){return null===e||void 0===e?e:"boolean"===t?"true"===e:"number"===t?Number(e).valueOf():"array"===t?(0,o.A)(JSON.parse(e)):e},_pruneDefaultQueryParamValues:function(e,t){var n,r=this._queryParamsFor(e)
for(var i in t)(n=r.map[i])&&n.serializedDefaultValue===t[i]&&delete t[i]},_doTransition:function(e,n,r,i){var o,s=e||(0,u.getActiveTargetName)(this._routerMicrolib),a={}
this._processActiveTransitionQueryParams(s,n,a,r),(0,t.assign)(a,r),this._prepareQueryParams(s,n,a,i)
var l=(o=this._routerMicrolib).transitionTo.apply(o,[s].concat(n,[{queryParams:a}]))
return A(l,this),l},_processActiveTransitionQueryParams:function(e,n,r,i){if(this._routerMicrolib.activeTransition){var o={},s=this._qpUpdates||{},a=this._routerMicrolib.activeTransition.queryParams
for(var l in a)s[l]||(o[l]=a[l])
this._fullyScopeQueryParams(e,n,i),this._fullyScopeQueryParams(e,n,o),(0,t.assign)(r,o)}},_prepareQueryParams:function(e,t,n,r){var i=T(this,e,t)
this._hydrateUnsuppliedQueryParams(i,n,r),this._serializeQueryParams(i.handlerInfos,n),r||this._pruneDefaultQueryParamValues(i.handlerInfos,n)},_getQPMeta:function(e){var t=e.handler
return t&&(0,r.get)(t,"_qp")},_queryParamsFor:function(e){var n,r,i,o,s,a,l=e.length,u=e[l-1].name,c=this._qpCache[u]
if(c)return c
var p=!0,d={},f={},h=[]
for(n=0;n<l;++n)if(r=this._getQPMeta(e[n])){for(i=0;i<r.qps.length;i++)(a=d[s=(o=r.qps[i]).urlKey])&&a.controllerName!==o.controllerName&&d[s],d[s]=o,h.push(o);(0,t.assign)(f,r.map)}else p=!1
var m={qps:h,map:f}
return p&&(this._qpCache[u]=m),m},_fullyScopeQueryParams:function(e,t,n){var r,i,o,s,a,l,u,c=T(this,e,t).handlerInfos
for(r=0,i=c.length;r<i;++r)if(o=this._getQPMeta(c[r]))for(s=0,a=o.qps.length;s<a;++s)(u=(l=o.qps[s]).prop in n&&l.prop||l.scopedPropertyName in n&&l.scopedPropertyName||l.urlKey in n&&l.urlKey)&&u!==l.scopedPropertyName&&(n[l.scopedPropertyName]=n[u],delete n[u])},_hydrateUnsuppliedQueryParams:function(e,t,n){var r,i,o,s,a,l,c,p=e.handlerInfos,d=this._bucketCache
for(r=0;r<p.length;++r)if(i=this._getQPMeta(p[r]))for(o=0,s=i.qps.length;o<s;++o)a=i.qps[o],(l=a.prop in t&&a.prop||a.scopedPropertyName in t&&a.scopedPropertyName||a.urlKey in t&&a.urlKey)?l!==a.scopedPropertyName&&(t[a.scopedPropertyName]=t[l],delete t[l]):(c=(0,u.calculateCacheKey)(a.route.fullRouteName,a.parts,e.params),t[a.scopedPropertyName]=d.lookup(c,a.prop,a.defaultValue))},_scheduleLoadingEvent:function(e,t){this._cancelSlowTransitionTimer(),this._slowTransitionTimer=r.run.scheduleOnce("routerTransitions",this,"_handleSlowTransition",e,t)},currentState:null,targetState:null,_handleSlowTransition:function(e,t){this._routerMicrolib.activeTransition&&(this.set("targetState",c.default.create({emberRouter:this,routerJs:this._routerMicrolib,routerJsState:this._routerMicrolib.activeTransition.state})),e.trigger(!0,"loading",e,t))},_cancelSlowTransitionTimer:function(){this._slowTransitionTimer&&r.run.cancel(this._slowTransitionTimer),this._slowTransitionTimer=null},_markErrorAsHandled:function(e){this._handledErrors.add(e)},_isErrorHandled:function(e){return this._handledErrors.has(e)},_clearHandledError:function(e){this._handledErrors.delete(e)},_getEngineInstance:function(e){var n=e.name,r=e.instanceId,i=e.mountPoint,o=this._engineInstances
o[n]||(o[n]=Object.create(null))
var s=o[n][r]
return s||((s=(0,t.getOwner)(this).buildChildEngineInstance(n,{routable:!0,mountPoint:i})).boot(),o[n][r]=s),s}})
function m(e,t){var n,r,i
for(n=e.length-1;n>=0;--n)if(void 0!==(i=(r=e[n]).handler)&&!0!==t(i,r))return}var g={willResolveModel:function(e,t,n){this._scheduleLoadingEvent(t,n)},error:function(e,t,r){var i=this,o=e[e.length-1]
m(e,function(e,n){if(n!==o&&(r=b(e,"error")))return i._markErrorAsHandled(t),i.intermediateTransitionTo(r,t),!1
var r,s=v(e,"error")
return!s||(i._markErrorAsHandled(t),i.intermediateTransitionTo(s,t),!1)}),function(e,t){var r=[],i=void 0
i=e&&"object"==typeof e&&"object"==typeof e.errorThrown?e.errorThrown:e
t&&r.push(t)
i&&(i.message&&r.push(i.message),i.stack&&r.push(i.stack),"string"==typeof i&&r.push(i))
n.default.error.apply(this,r)}(t,"Error while processing route: "+r.targetName)},loading:function(e,t){var n=this,r=e[e.length-1]
m(e,function(e,i){if(i!==r&&(o=b(e,"loading")))return n.intermediateTransitionTo(o),!1
var o,s=v(e,"loading")
return s?(n.intermediateTransitionTo(s),!1):t.pivotHandler!==e})}}
function v(e,n){var r=(0,t.getOwner)(e),i=e.routeName,o=e.fullRouteName+"_"+n
return y(r,e._router,i+"_"+n,o)?o:""}function b(e,n){var r=(0,t.getOwner)(e),i=e.routeName,o=e.fullRouteName,s=e._router,a="application"===o?n:o+"."+n
return y(r,s,"application"===i?n:i+"."+n,a)?a:""}function y(e,t,n,r){var i=t.hasRoute(r),o=e.hasRegistration("template:"+n)||e.hasRegistration("route:"+n)
return i&&o}function E(e,t,n){var r,o=n.shift()
if(!e){if(t)return
throw new i.Error("Can't trigger action '"+o+"' because your app hasn't finished transitioning into its first route. To trigger an action on destination routes during a transition, you can call `.send()` on the `Transition` object passed to the `model/beforeModel/afterModel` hooks.")}var s=!1,a=void 0,l=void 0
for(r=e.length-1;r>=0;r--)if(l=(a=e[r].handler)&&a.actions&&a.actions[o]){if(!0!==l.apply(a,n))return void("error"===o&&a._router._markErrorAsHandled(n[0]))
s=!0}var u=g[o]
if(u)u.apply(this,[e].concat(n))
else if(!s&&!t)throw new i.Error("Nothing handled the action '"+o+"'. If you did handle the action, this error can be caused by returning true from an action handler in a controller, causing the action to bubble.")}function T(e,t,n){var r,i,o=e._routerMicrolib.applyIntent(t,n),s=o.handlerInfos,a=o.params
for(r=0;r<s.length;++r)(i=s[r]).isResolved?a[i.name]=i.params:a[i.name]=i.serialize(i.context)
return o}function _(e){var n=e._routerMicrolib.currentHandlerInfos
if(0!==n.length){var i=h._routePath(n),o=n[n.length-1].name,s=e.get("location").getURL();(0,r.set)(e,"currentPath",i),(0,r.set)(e,"currentRouteName",o),(0,r.set)(e,"currentURL",s)
var a=(0,t.getOwner)(e).lookup("controller:application")
a&&("currentPath"in a||(0,r.defineProperty)(a,"currentPath"),(0,r.set)(a,"currentPath",i),"currentRouteName"in a||(0,r.defineProperty)(a,"currentRouteName"),(0,r.set)(a,"currentRouteName",o))}}function A(e,t){var n=c.default.create({emberRouter:t,routerJs:t._routerMicrolib,routerJsState:e.state})
t.currentState||t.set("currentState",n),t.set("targetState",n),e.promise=e.catch(function(e){if(!t._isErrorHandled(e))throw e
t._clearHandledError(e)})}function C(e,t,n,r){var i=e._queryParamsFor(t)
for(var o in n)n.hasOwnProperty(o)&&r(o,n[o],i.map[o])}function S(e,t){if(e)for(var n,r,i=[e];i.length>0;){if((n=i.shift()).render.name===t)return n
for(var o in r=n.outlets)i.push(r[o])}}function w(e,t,n){var i=void 0,o={render:n,outlets:Object.create(null),wasUsed:!1}
return(i=n.into?S(e,n.into):t)?(0,r.set)(i.outlets,n.outlet,o):n.into?function(e,t,n){e.outlets.__ember_orphans__||(e.outlets.__ember_orphans__={render:{name:"__ember_orphans__"},outlets:Object.create(null)})
e.outlets.__ember_orphans__.outlets[t]=n,r.run.schedule("afterRender",function(){})}(e,n.into,o):e=o,{liveRoutes:e,ownState:o}}function R(e,t,n){var r=S(e,n.routeName)
return r||(t.outlets.main={render:{name:n.routeName,outlet:"main"},outlets:{}},t)}h.reopenClass({map:function(e){return this.dslCallbacks||(this.dslCallbacks=[],this.reopenClass({dslCallbacks:this.dslCallbacks})),this.dslCallbacks.push(e),this},_routePath:function(e){var t,n=[]
function r(e,t){var n
for(n=0;n<e.length;++n)if(e[n]!==t[n])return!1
return!0}var i=void 0,o=void 0
for(t=1;t<e.length;t++){for(i=e[t].name.split("."),o=f.call(n);o.length&&!r(o,i);)o.shift()
n.push.apply(n,i.slice(o.length))}return n.join(".")}}),e.default=h}),e("ember-routing/system/router_state",["exports","ember-utils","ember-routing/utils","ember-runtime"],function(e,t,n,r){"use strict"
e.default=r.Object.extend({emberRouter:null,routerJs:null,routerJsState:null,isActiveIntent:function(e,r,i,o){var s,a=this.routerJsState
return!!this.routerJs.isActiveIntent(e,r,null,a)&&(!(o&&Object.keys(i).length>0)||(s=(0,t.assign)({},i),this.emberRouter._prepareQueryParams(e,r,s),(0,n.shallowEqual)(s,a.queryParams)))}})}),e("ember-routing/utils",["exports","ember-utils","ember-metal","ember-debug"],function(e,t,n,r){"use strict"
e.extractRouteArgs=function(e){var t=(e=e.slice())[e.length-1],n=void 0
return n=t&&t.hasOwnProperty("queryParams")?e.pop().queryParams:{},{routeName:e.shift(),models:e,queryParams:n}},e.getActiveTargetName=function(e){var t=e.activeTransition?e.activeTransition.state.handlerInfos:e.state.handlerInfos
return t[t.length-1].name},e.stashParamNames=function(e,t){if(!t._namesStashed){var n,r,i,o=t[t.length-1].name,s=e._routerMicrolib.recognizer.handlersFor(o),a=null
for(n=0;n<t.length;++n)r=t[n],(i=s[n].names).length&&(a=r),r._names=i,r.handler._stashNames(r,a)
t._namesStashed=!0}},e.calculateCacheKey=function(e){var t,r,s,a,l,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=arguments[2],p=""
for(t=0;t<u.length;++t)s=o(e,r=u[t]),a=void 0,c&&(s&&s in c?(l=0===r.indexOf(s)?r.substr(s.length+1):r,a=(0,n.get)(c[s],l)):a=(0,n.get)(c,r)),p+="::"+r+":"+a
return e+p.replace(i,"-")},e.normalizeControllerQueryParams=function(e){var t,n={}
for(t=0;t<e.length;++t)s(e[t],n)
return n},e.resemblesURL=a,e.prefixRouteNameArg=function(e,n){var i=n[0],o=(0,t.getOwner)(e),s=o.mountPoint
if(o.routable&&"string"==typeof i){if(a(i))throw new r.Error("Programmatic transitions by URL cannot be used within an Engine. Please use the route name instead.")
i=s+"."+i,n[0]=i}return n},e.shallowEqual=function(e,t){var n=void 0,r=0,i=0
for(n in e)if(e.hasOwnProperty(n)){if(e[n]!==t[n])return!1
r++}for(n in t)t.hasOwnProperty(n)&&i++
return r===i}
var i=/\./g
function o(e,t){var n,r,i=e.split("."),o=""
for(n=0;n<i.length&&(r=i.slice(0,n+1).join("."),0===t.indexOf(r));n++)o=r
return o}function s(e,n){var r,i=e,o=void 0
for(var s in"string"==typeof i&&((o={})[i]={as:null},i=o),i){if(!i.hasOwnProperty(s))return
"string"==typeof(r=i[s])&&(r={as:r}),o=n[s]||{as:null,scope:"model"},(0,t.assign)(o,r),n[s]=o}}function a(e){return"string"==typeof e&&(""===e||"/"===e[0])}}),e("ember-runtime/compare",["exports","ember-runtime/utils","ember-runtime/mixins/comparable"],function(e,t,n){"use strict"
e.default=function e(o,s){if(o===s)return 0
var a,l,u,c,p,d=(0,t.typeOf)(o)
var f=(0,t.typeOf)(s)
if(n.default){if("instance"===d&&n.default.detect(o)&&o.constructor.compare)return o.constructor.compare(o,s)
if("instance"===f&&n.default.detect(s)&&s.constructor.compare)return-1*s.constructor.compare(s,o)}var h=i(r[d],r[f])
if(0!==h)return h
switch(d){case"boolean":case"number":return i(o,s)
case"string":return i(o.localeCompare(s),0)
case"array":for(a=o.length,l=s.length,u=Math.min(a,l),c=0;c<u;c++)if(0!==(p=e(o[c],s[c])))return p
return i(a,l)
case"instance":return n.default&&n.default.detect(o)?o.compare(o,s):0
case"date":return i(o.getTime(),s.getTime())
default:return 0}}
var r={undefined:0,null:1,boolean:2,number:3,string:4,array:5,object:6,instance:7,function:8,class:9,date:10}
function i(e,t){var n=e-t
return(n>0)-(n<0)}}),e("ember-runtime/computed/computed_macros",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
function r(e,n){return function(){for(e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i]
var e,r,i,o=function(e,n){var r,i,o=[]
function s(e){o.push(e)}for(r=0;r<n.length;r++)i=n[r],(0,t.expandProperties)(i,s)
return o}(0,r)
return new t.ComputedProperty(function(){var e,r,i=o.length-1
for(e=0;e<i;e++)if(r=(0,t.get)(this,o[e]),!n(r))return r
return(0,t.get)(this,o[i])},{dependentKeys:o})}}e.or=e.and=void 0,e.empty=function(e){return(0,t.computed)(e+".length",function(){return(0,t.isEmpty)((0,t.get)(this,e))})},e.notEmpty=function(e){return(0,t.computed)(e+".length",function(){return!(0,t.isEmpty)((0,t.get)(this,e))})},e.none=function(e){return(0,t.computed)(e,function(){return(0,t.isNone)((0,t.get)(this,e))})},e.not=function(e){return(0,t.computed)(e,function(){return!(0,t.get)(this,e)})},e.bool=function(e){return(0,t.computed)(e,function(){return!!(0,t.get)(this,e)})},e.match=function(e,n){return(0,t.computed)(e,function(){var r=(0,t.get)(this,e)
return n.test(r)})},e.equal=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)===n})},e.gt=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)>n})},e.gte=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)>=n})},e.lt=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)<n})},e.lte=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)<=n})},e.oneWay=function(e){return(0,t.alias)(e).oneWay()},e.readOnly=function(e){return(0,t.alias)(e).readOnly()},e.deprecatingAlias=function(e,n){return(0,t.computed)(e,{get:function(n){return(0,t.get)(this,e)},set:function(n,r){return(0,t.set)(this,e,r),r}})},e.and=r(0,function(e){return e}),e.or=r(0,function(e){return!e})})
e("ember-runtime/computed/reduce_computed_macros",["exports","ember-debug","ember-metal","ember-runtime/compare","ember-runtime/utils","ember-runtime/mixins/array"],function(e,t,n,r,i,o){"use strict"
function s(e,t,r,i){return new n.ComputedProperty(function(){var i=(0,n.get)(this,e)
return null===i||"object"!=typeof i?r:i.reduce(t,r,this)},{dependentKeys:[e+".[]"],readOnly:!0})}function a(e,t){var r=void 0;/@each/.test(e)?r=e.replace(/\.@each.*$/,""):(r=e,e+=".[]")
var s=new n.ComputedProperty(function(){var e=(0,n.get)(this,r)
return(0,i.isArray)(e)?(0,o.A)(t.call(this,e)):(0,o.A)()},{readOnly:!0})
return s.property(e),s}function l(e,t,r){var i=e.map(function(e){return e+".[]"})
return new n.ComputedProperty(function(){return(0,o.A)(t.call(this,e))},{dependentKeys:i,readOnly:!0})}function u(e,t){return a(e,function(e){return e.map(t,this)})}function c(e,t){return a(e,function(e){return e.filter(t,this)})}function p(){var e,t,r
for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
return l(t,function(e){var t=this,r=(0,o.A)(),s=new Set
return e.forEach(function(e){var o=(0,n.get)(t,e);(0,i.isArray)(o)&&o.forEach(function(e){s.has(e)||(s.add(e),r.push(e))})}),r})}e.union=void 0,e.sum=function(e){return s(e,function(e,t){return e+t},0,"sum")},e.max=function(e){return s(e,function(e,t){return Math.max(e,t)},-1/0,"max")},e.min=function(e){return s(e,function(e,t){return Math.min(e,t)},1/0,"min")},e.map=u,e.mapBy=function(e,t){return u(e+".@each."+t,function(e){return(0,n.get)(e,t)})},e.filter=c,e.filterBy=function(e,t,r){var i=void 0
return i=2===arguments.length?function(e){return(0,n.get)(e,t)}:function(e){return(0,n.get)(e,t)===r},c(e+".@each."+t,i)},e.uniq=p,e.uniqBy=function(e,t){return new n.ComputedProperty(function(){var r,s=(0,o.A)(),a=(0,n.get)(this,e)
return(0,i.isArray)(a)&&(r=new Set,a.forEach(function(e){var i=(0,n.get)(e,t)
r.has(i)||(r.add(i),s.push(e))})),s},{dependentKeys:[e+".[]"],readOnly:!0})},e.intersect=function(){var e,t,r
for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
return l(t,function(e){var t=this,r=e.map(function(e){var r=(0,n.get)(t,e)
return(0,i.isArray)(r)?r:[]}),s=r.pop().filter(function(e){var t,n,i,o
for(t=0;t<r.length;t++){for(n=!1,i=r[t],o=0;o<i.length;o++)if(i[o]===e){n=!0
break}if(!1===n)return!1}return!0},"intersect")
return(0,o.A)(s)})},e.setDiff=function(e,t){return new n.ComputedProperty(function(){var n=this.get(e),r=this.get(t)
return(0,i.isArray)(n)?(0,i.isArray)(r)?n.filter(function(e){return-1===r.indexOf(e)}):(0,o.A)(n):(0,o.A)()},{dependentKeys:[e+".[]",t+".[]"],readOnly:!0})},e.collect=function(){var e,t,r
for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
return l(t,function(){var e=(0,n.getProperties)(this,t),r=(0,o.A)()
for(var i in e)e.hasOwnProperty(i)&&(void 0===e[i]?r.push(null):r.push(e[i]))
return r},"collect")},e.sort=function(e,t){return"function"==typeof t?function(e,t){return a(e,function(e){var n=this
return e.slice().sort(function(e,r){return t.call(n,e,r)})})}(e,t):function(e,t){var s=new n.ComputedProperty(function(a){var l=this,u=(0,n.get)(this,t),c=s._activeObserverMap||(s._activeObserverMap=new WeakMap),p=c.get(this)
function d(){this.notifyPropertyChange(a)}void 0!==p&&p.forEach(function(e){return n.removeObserver.apply(void 0,e)})
var f="@this"===e,h=function(e){return e.map(function(e){var t=e.split(":"),n=t[0],r=t[1]
return[n,r=r||"asc"]})}(u)
p=h.map(function(t){var r=t[0],i=f?"@each."+r:e+".@each."+r
return(0,n.addObserver)(l,i,d),[l,i,d]}),c.set(this,p)
var m=f?this:(0,n.get)(this,e)
return(0,i.isArray)(m)?0===h.length?(0,o.A)(m.slice()):function(e,t){return(0,o.A)(e.slice().sort(function(e,i){var o,s,a,l,u
for(o=0;o<t.length;o++)if(s=t[o],a=s[0],l=s[1],0!==(u=(0,r.default)((0,n.get)(e,a),(0,n.get)(i,a))))return"desc"===l?-1*u:u
return 0}))}(m,h):(0,o.A)()},{dependentKeys:[t+".[]"],readOnly:!0})
return s._activeObserverMap=void 0,s}(e,t)},e.union=p}),e("ember-runtime/controllers/controller",["exports","ember-debug","ember-runtime/system/object","ember-runtime/mixins/controller","ember-runtime/inject"],function(e,t,n,r,i){"use strict"
var o=n.default.extend(r.default);(0,i.createInjectionHelper)("controller",function(e){}),e.default=o}),e("ember-runtime/copy",["exports","ember-debug","ember-runtime/system/object","ember-runtime/mixins/copyable"],function(e,t,n,r){"use strict"
e.default=function(e,t){return"object"!=typeof e||null===e?e:r.default.detect(e)?e.copy(t):function e(t,n,i,o){if("object"!=typeof t||null===t)return t
var s,a=void 0,l=void 0
if(n&&(l=i.indexOf(t))>=0)return o[l]
if(Array.isArray(t)){if(a=t.slice(),n)for(l=a.length;--l>=0;)a[l]=e(a[l],n,i,o)}else if(r.default.detect(t))a=t.copy(n,i,o)
else if(t instanceof Date)a=new Date(t.getTime())
else for(s in a={},s=void 0,t)Object.prototype.hasOwnProperty.call(t,s)&&"__"!==s.substring(0,2)&&(a[s]=n?e(t[s],n,i,o):t[s])
n&&(i.push(t),o.push(a))
return a}(e,t,t?[]:null,t?[]:null)}}),e("ember-runtime/ext/function",["ember-environment","ember-metal","ember-debug"],function(e,t,n){"use strict"
var r=Function.prototype
e.ENV.EXTEND_PROTOTYPES.Function&&(Object.defineProperty(r,"property",{configurable:!0,enumerable:!1,writable:!0,value:function(){return t.computed.apply(void 0,Array.prototype.slice.call(arguments).concat([this]))}}),Object.defineProperty(r,"observes",{configurable:!0,enumerable:!1,writable:!0,value:function(){return t.observer.apply(void 0,Array.prototype.slice.call(arguments).concat([this]))}}),Object.defineProperty(r,"_observesImmediately",{configurable:!0,enumerable:!1,writable:!0,value:function(){return this.observes.apply(this,arguments)}}),Object.defineProperty(r,"on",{configurable:!0,enumerable:!1,writable:!0,value:function(){return t.on.apply(void 0,Array.prototype.slice.call(arguments).concat([this]))}}))}),e("ember-runtime/ext/rsvp",["exports","ember-babel","rsvp","ember-metal","ember-debug","container"],function(e,t,n,r,i,o){"use strict"
e.onerrorDefault=l
var s=(0,t.taggedTemplateLiteralLoose)(["rsvpAfter"],["rsvpAfter"]),a=r.run.backburner
function l(e){var t,n=function(e){if(!e)return
if(e.errorThrown)return function(e){var t=e.errorThrown
"string"==typeof t&&(t=new Error(t))
return Object.defineProperty(t,"__reason_with_error_thrown__",{value:e,enumerable:!1}),t}(e)
if("UnrecognizedURLError"===e.name)return
if("TransitionAborted"===e.name)return
return e}(e)
if(n){if(!(t=(0,r.getDispatchOverride)()))throw n
t(n)}}n.configure("async",function(e,t){a.schedule("actions",null,e,t)}),n.configure("after",function(e){a.schedule((0,o.privatize)(s),null,e)}),n.on("error",l),e.default=n}),e("ember-runtime/ext/string",["ember-environment","ember-runtime/system/string"],function(e,t){"use strict"
var n=String.prototype
e.ENV.EXTEND_PROTOTYPES.String&&(Object.defineProperty(n,"w",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.w)(this)}}),Object.defineProperty(n,"loc",{configurable:!0,enumerable:!1,writeable:!0,value:function(){var e,n,r
for(e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r]
return(0,t.loc)(this,n)}}),Object.defineProperty(n,"camelize",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.camelize)(this)}}),Object.defineProperty(n,"decamelize",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.decamelize)(this)}}),Object.defineProperty(n,"dasherize",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.dasherize)(this)}}),Object.defineProperty(n,"underscore",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.underscore)(this)}}),Object.defineProperty(n,"classify",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.classify)(this)}}),Object.defineProperty(n,"capitalize",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.capitalize)(this)}}))}),e("ember-runtime/index",["exports","ember-runtime/system/object","ember-runtime/system/string","ember-runtime/mixins/registry_proxy","ember-runtime/mixins/container_proxy","ember-runtime/copy","ember-runtime/inject","ember-runtime/compare","ember-runtime/is-equal","ember-runtime/mixins/array","ember-runtime/mixins/comparable","ember-runtime/system/namespace","ember-runtime/system/array_proxy","ember-runtime/system/object_proxy","ember-runtime/system/core_object","ember-runtime/mixins/action_handler","ember-runtime/mixins/copyable","ember-runtime/mixins/enumerable","ember-runtime/mixins/-proxy","ember-runtime/system/lazy_load","ember-runtime/mixins/observable","ember-runtime/mixins/mutable_enumerable","ember-runtime/mixins/target_action_support","ember-runtime/mixins/evented","ember-runtime/mixins/promise_proxy","ember-runtime/computed/computed_macros","ember-runtime/computed/reduce_computed_macros","ember-runtime/controllers/controller","ember-runtime/mixins/controller","ember-runtime/system/service","ember-runtime/ext/rsvp","ember-runtime/utils","ember-runtime/string_registry","ember-runtime/ext/string","ember-runtime/ext/function"],function(e,t,n,r,i,o,s,a,l,u,c,p,d,f,h,m,g,v,b,y,E,T,_,A,C,S,w,R,x,O,N,L,k){"use strict"
e.setStrings=e.getStrings=e.typeOf=e.isArray=e.onerrorDefault=e.RSVP=e.Service=e.ControllerMixin=e.Controller=e.collect=e.intersect=e.union=e.uniqBy=e.uniq=e.filterBy=e.filter=e.mapBy=e.setDiff=e.sort=e.map=e.max=e.min=e.sum=e.or=e.and=e.deprecatingAlias=e.readOnly=e.oneWay=e.lte=e.lt=e.gte=e.gt=e.equal=e.match=e.bool=e.not=e.none=e.notEmpty=e.empty=e.PromiseProxyMixin=e.Evented=e.TargetActionSupport=e.MutableEnumerable=e.Observable=e._loaded=e.runLoadHooks=e.onLoad=e._contentFor=e._ProxyMixin=e.Enumerable=e.Copyable=e.ActionHandler=e.CoreObject=e.ObjectProxy=e.ArrayProxy=e.setNamespaceSearchDisabled=e.isNamespaceSearchDisabled=e.Namespace=e.Comparable=e.removeAt=e.MutableArray=e.A=e.NativeArray=e.removeArrayObserver=e.addArrayObserver=e.isEmberArray=e.Array=e.isEqual=e.compare=e.inject=e.copy=e.ContainerProxyMixin=e.RegistryProxyMixin=e.String=e.FrameworkObject=e.Object=void 0,Object.defineProperty(e,"Object",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"FrameworkObject",{enumerable:!0,get:function(){return t.FrameworkObject}}),Object.defineProperty(e,"String",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"RegistryProxyMixin",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"ContainerProxyMixin",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"copy",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"inject",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"compare",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"Array",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"isEmberArray",{enumerable:!0,get:function(){return u.isEmberArray}}),Object.defineProperty(e,"addArrayObserver",{enumerable:!0,get:function(){return u.addArrayObserver}}),Object.defineProperty(e,"removeArrayObserver",{enumerable:!0,get:function(){return u.removeArrayObserver}}),Object.defineProperty(e,"NativeArray",{enumerable:!0,get:function(){return u.NativeArray}}),Object.defineProperty(e,"A",{enumerable:!0,get:function(){return u.A}}),Object.defineProperty(e,"MutableArray",{enumerable:!0,get:function(){return u.MutableArray}}),Object.defineProperty(e,"removeAt",{enumerable:!0,get:function(){return u.removeAt}}),Object.defineProperty(e,"Comparable",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"Namespace",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"isNamespaceSearchDisabled",{enumerable:!0,get:function(){return p.isSearchDisabled}}),Object.defineProperty(e,"setNamespaceSearchDisabled",{enumerable:!0,get:function(){return p.setSearchDisabled}}),Object.defineProperty(e,"ArrayProxy",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"ObjectProxy",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"CoreObject",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"ActionHandler",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"Copyable",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(e,"Enumerable",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"_ProxyMixin",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(e,"_contentFor",{enumerable:!0,get:function(){return b.contentFor}})
Object.defineProperty(e,"onLoad",{enumerable:!0,get:function(){return y.onLoad}}),Object.defineProperty(e,"runLoadHooks",{enumerable:!0,get:function(){return y.runLoadHooks}}),Object.defineProperty(e,"_loaded",{enumerable:!0,get:function(){return y._loaded}}),Object.defineProperty(e,"Observable",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(e,"MutableEnumerable",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(e,"TargetActionSupport",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"Evented",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(e,"PromiseProxyMixin",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"empty",{enumerable:!0,get:function(){return S.empty}}),Object.defineProperty(e,"notEmpty",{enumerable:!0,get:function(){return S.notEmpty}}),Object.defineProperty(e,"none",{enumerable:!0,get:function(){return S.none}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return S.not}}),Object.defineProperty(e,"bool",{enumerable:!0,get:function(){return S.bool}}),Object.defineProperty(e,"match",{enumerable:!0,get:function(){return S.match}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return S.equal}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return S.gt}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return S.gte}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return S.lt}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return S.lte}}),Object.defineProperty(e,"oneWay",{enumerable:!0,get:function(){return S.oneWay}}),Object.defineProperty(e,"readOnly",{enumerable:!0,get:function(){return S.readOnly}}),Object.defineProperty(e,"deprecatingAlias",{enumerable:!0,get:function(){return S.deprecatingAlias}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return S.and}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return S.or}}),Object.defineProperty(e,"sum",{enumerable:!0,get:function(){return w.sum}}),Object.defineProperty(e,"min",{enumerable:!0,get:function(){return w.min}}),Object.defineProperty(e,"max",{enumerable:!0,get:function(){return w.max}}),Object.defineProperty(e,"map",{enumerable:!0,get:function(){return w.map}}),Object.defineProperty(e,"sort",{enumerable:!0,get:function(){return w.sort}}),Object.defineProperty(e,"setDiff",{enumerable:!0,get:function(){return w.setDiff}})
Object.defineProperty(e,"mapBy",{enumerable:!0,get:function(){return w.mapBy}}),Object.defineProperty(e,"filter",{enumerable:!0,get:function(){return w.filter}}),Object.defineProperty(e,"filterBy",{enumerable:!0,get:function(){return w.filterBy}}),Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return w.uniq}}),Object.defineProperty(e,"uniqBy",{enumerable:!0,get:function(){return w.uniqBy}}),Object.defineProperty(e,"union",{enumerable:!0,get:function(){return w.union}}),Object.defineProperty(e,"intersect",{enumerable:!0,get:function(){return w.intersect}}),Object.defineProperty(e,"collect",{enumerable:!0,get:function(){return w.collect}}),Object.defineProperty(e,"Controller",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(e,"ControllerMixin",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e,"Service",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(e,"RSVP",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(e,"onerrorDefault",{enumerable:!0,get:function(){return N.onerrorDefault}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return L.isArray}}),Object.defineProperty(e,"typeOf",{enumerable:!0,get:function(){return L.typeOf}}),Object.defineProperty(e,"getStrings",{enumerable:!0,get:function(){return k.getStrings}}),Object.defineProperty(e,"setStrings",{enumerable:!0,get:function(){return k.setStrings}})}),e("ember-runtime/inject",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
function r(){}e.default=r,e.createInjectionHelper=function(e,n){i[e]=n,r[e]=function(n){return new t.InjectedProperty(e,n)}},e.validatePropertyInjections=function(e){var n,r,o,s=e.proto(),a=[]
for(var l in s)(n=(0,t.descriptorFor)(s,l))instanceof t.InjectedProperty&&-1===a.indexOf(n.type)&&a.push(n.type)
if(a.length)for(r=0;r<a.length;r++)"function"==typeof(o=i[a[r]])&&o(e)
return!0}
var i={}}),e("ember-runtime/is-equal",["exports"],function(e){"use strict"
e.default=function(e,t){return e&&"function"==typeof e.isEqual?e.isEqual(t):e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():e===t}}),e("ember-runtime/mixins/-proxy",["exports","@glimmer/reference","ember-metal","ember-debug","ember-runtime/computed/computed_macros"],function(e,t,n,r,i){"use strict"
function o(e,t){var r=t.slice(8)
r in this||(0,n.notifyPropertyChange)(this,r)}function s(e,t){var r=(0,n.get)(e,"content"),i=(void 0===t?(0,n.meta)(e):t).readableTag()
return void 0!==i&&i.inner.second.inner.update((0,n.tagFor)(r)),r}e.contentFor=s,e.default=n.Mixin.create({content:null,init:function(){this._super.apply(this,arguments)
var e=(0,n.meta)(this)
e.setProxy(),e.writableTag(function(){return(0,t.combine)([t.DirtyableTag.create(),t.UpdatableTag.create(t.CONSTANT_TAG)])})},isTruthy:(0,i.bool)("content"),willWatchProperty:function(e){(0,n.addObserver)(this,"content."+e,null,o)},didUnwatchProperty:function(e){(0,n.removeObserver)(this,"content."+e,null,o)},unknownProperty:function(e){var t=s(this)
if(t)return(0,n.get)(t,e)},setUnknownProperty:function(e,t){var r=(0,n.meta)(this)
if(r.proto===this)return(0,n.defineProperty)(this,e,null,t),t
var i=s(this,r)
return(0,n.set)(i,e,t)}})}),e("ember-runtime/mixins/action_handler",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
var r=t.Mixin.create({mergedProperties:["actions"],send:function(e){for(n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
if(!this.actions||!this.actions[e]||!0===this.actions[e].apply(this,r)){var n,r,i,o=(0,t.get)(this,"target")
o&&o.send.apply(o,arguments)}}})
e.default=r}),e("ember-runtime/mixins/array",["exports","ember-utils","ember-metal","ember-debug","ember-runtime/mixins/enumerable","ember-runtime/compare","ember-environment","ember-runtime/mixins/observable","ember-runtime/mixins/copyable","ember-runtime/copy","ember-runtime/mixins/mutable_enumerable"],function(e,t,n,r,i,o,s,a,l,u,c){"use strict"
var p,d
function f(e,t,r,i,o){var s=r&&r.willChange||"arrayWillChange",a=r&&r.didChange||"arrayDidChange",l=(0,n.get)(e,"hasArrayObservers")
return i(e,"@array:before",t,s),i(e,"@array:change",t,a),l===o&&(0,n.notifyPropertyChange)(e,"hasArrayObservers"),e}function h(e,t,r){return f(e,t,r,n.addListener,!1)}function m(e,t,r){return f(e,t,r,n.removeListener,!0)}function g(e,t,r,i){return void 0===t?(t=0,r=i=-1):(void 0===r&&(r=-1),void 0===i&&(i=-1)),(0,n.eachProxyArrayWillChange)(e,t,r,i),(0,n.sendEvent)(e,"@array:before",[e,t,r,i]),e}function v(e,t,r,i){void 0===t?(t=0,r=i=-1):(void 0===r&&(r=-1),void 0===i&&(i=-1)),(i<0||r<0||i-r!=0)&&(0,n.notifyPropertyChange)(e,"length"),(0,n.notifyPropertyChange)(e,"[]"),(0,n.eachProxyArrayDidChange)(e,t,r,i),(0,n.sendEvent)(e,"@array:change",[e,t,r,i])
var o,s,a,l=(0,n.peekMeta)(e),u=(0,n.peekCacheFor)(e)
return void 0!==u&&(s=(0,n.get)(e,"length")-((-1===i?0:i)-(o=-1===r?0:r)),a=t<0?s+t:t,u.has("firstObject")&&0===a&&(0,n.notifyPropertyChange)(e,"firstObject",l),u.has("lastObject")&&s-1<a+o&&(0,n.notifyPropertyChange)(e,"lastObject",l)),e}e.MutableArray=e.NativeArray=e.A=void 0,e.addArrayObserver=h,e.removeArrayObserver=m,e.arrayContentWillChange=g,e.arrayContentDidChange=v,e.isEmberArray=function(e){return e&&e[b]},e.removeAt=A
var b=(0,t.symbol)("EMBER_ARRAY")
function y(e,t){return 2===arguments.length?function(r){return t===(0,n.get)(r,e)}:function(t){return!!(0,n.get)(t,e)}}var E=n.Mixin.create(i.default,((p={})[b]=!0,p.length=null,p.objectAt=function(e){if(!(e<0||e>=(0,n.get)(this,"length")))return(0,n.get)(this,e)},p.objectsAt=function(e){var t=this
return e.map(function(e){return(0,n.objectAt)(t,e)})},p["[]"]=(0,n.computed)({get:function(){return this},set:function(e,t){return this.replace(0,(0,n.get)(this,"length"),t),this}}),p.firstObject=(0,n.computed)(function(){return(0,n.objectAt)(this,0)}).readOnly(),p.lastObject=(0,n.computed)(function(){return(0,n.objectAt)(this,(0,n.get)(this,"length")-1)}).readOnly(),p.slice=function(e,t){var r=R(),i=(0,n.get)(this,"length")
for((0,n.isNone)(e)?e=0:e<0&&(e=i+e),(0,n.isNone)(t)||t>i?t=i:t<0&&(t=i+t);e<t;)r[r.length]=(0,n.objectAt)(this,e++)
return r},p.indexOf=function(e,t){var r,i=(0,n.get)(this,"length")
for(void 0===t&&(t=0),t<0&&(t+=i),r=t;r<i;r++)if((0,n.objectAt)(this,r)===e)return r
return-1},p.lastIndexOf=function(e,t){var r,i=(0,n.get)(this,"length")
for((void 0===t||t>=i)&&(t=i-1),t<0&&(t+=i),r=t;r>=0;r--)if((0,n.objectAt)(this,r)===e)return r
return-1},p.addArrayObserver=function(e,t){return h(this,e,t)},p.removeArrayObserver=function(e,t){return m(this,e,t)},p.hasArrayObservers=(0,n.computed)(function(){return(0,n.hasListeners)(this,"@array:change")||(0,n.hasListeners)(this,"@array:before")}),p.arrayContentWillChange=function(e,t,n){return g(this,e,t,n)},p.arrayContentDidChange=function(e,t,n){return v(this,e,t,n)},p.forEach=function(e){var t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=(0,n.get)(this,"length")
for(t=0;t<o;t++)r=this.objectAt(t),e.call(i,r,t,this)
return this},p.getEach=(0,n.aliasMethod)("mapBy"),p.setEach=function(e,t){return this.forEach(function(r){return(0,n.set)(r,e,t)})},p.map=function(e,t){var n=R()
return this.forEach(function(r,i,o){return n[i]=e.call(t,r,i,o)}),n},p.mapBy=function(e){return this.map(function(t){return(0,n.get)(t,e)})},p.filter=function(e,t){var n=R()
return this.forEach(function(r,i,o){e.call(t,r,i,o)&&n.push(r)}),n},p.reject=function(e,t){return this.filter(function(){return!e.apply(t,arguments)})},p.filterBy=function(){return this.filter(y.apply(this,arguments))},p.rejectBy=function(e,t){var r=2===arguments.length?function(r){return(0,n.get)(r,e)===t}:function(t){return!!(0,n.get)(t,e)}
return this.reject(r)},p.find=function(e){var t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=(0,n.get)(this,"length")
for(t=0;t<o;t++)if(r=this.objectAt(t),e.call(i,r,t,this))return r},p.findBy=function(){return this.find(y.apply(this,arguments))},p.every=function(e,t){return!this.find(function(n,r,i){return!e.call(t,n,r,i)})},p.isEvery=function(){return this.every(y.apply(this,arguments))},p.any=function(e){var t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=(0,n.get)(this,"length")
for(t=0;t<o;t++)if(r=this.objectAt(t),e.call(i,r,t,this))return!0
return!1},p.isAny=function(){return this.any(y.apply(this,arguments))},p.reduce=function(e,t,n){var r=t
return this.forEach(function(t,i){r=e(r,t,i,this,n)},this),r},p.invoke=function(e){for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var t,n,r,i=R()
return this.forEach(function(t,r){var o=t&&t[e]
"function"==typeof o&&(i[r]=n.length?o.apply(t,n):t[e]())},this),i},p.toArray=function(){var e=R()
return this.forEach(function(t,n){return e[n]=t}),e},p.compact=function(){return this.filter(function(e){return null!=e})},p.includes=function(e,t){var r,i,o=(0,n.get)(this,"length")
for(void 0===t&&(t=0),t<0&&(t+=o),r=t;r<o;r++)if(e===(i=(0,n.objectAt)(this,r))||e!=e&&i!=i)return!0
return!1},p.sortBy=function(){var e=arguments
return this.toArray().sort(function(t,r){var i,s,a,l,u
for(i=0;i<e.length;i++)if(s=e[i],a=(0,n.get)(t,s),l=(0,n.get)(r,s),u=(0,o.default)(a,l))return u
return 0})},p.uniq=function(){var e=R(),t=new Set
return this.forEach(function(n){t.has(n)||(t.add(n),e.push(n))}),e},p.uniqBy=function(e){var t=R(),r=new Set
return this.forEach(function(i){var o=(0,n.get)(i,e)
r.has(o)||(r.add(o),t.push(i))}),t},p.without=function(e){if(!this.includes(e))return this
var t=R()
return this.forEach(function(n){n===e||n!=n&&e!=e||(t[t.length]=n)}),t},p["@each"]=(0,n.computed)(function(){return(0,n.eachProxyFor)(this)}).readOnly(),p)),T="Index out of range",_=[]
function A(e,t,i){if("number"==typeof t){if(t<0||t>=(0,n.get)(e,"length"))throw new r.Error(T)
void 0===i&&(i=1),e.replace(t,i,_)}return e}var C=n.Mixin.create(E,c.default,{replace:null,clear:function(){var e=(0,n.get)(this,"length")
return 0===e?this:(this.replace(0,e,_),this)},insertAt:function(e,t){if(e>(0,n.get)(this,"length"))throw new r.Error(T)
return this.replace(e,0,[t]),this},removeAt:function(e,t){return A(this,e,t)},pushObject:function(e){return this.insertAt((0,n.get)(this,"length"),e),e},pushObjects:function(e){if(!Array.isArray(e))throw new TypeError("Must pass Enumerable to MutableArray#pushObjects")
return this.replace((0,n.get)(this,"length"),0,e),this},popObject:function(){var e=(0,n.get)(this,"length")
if(0===e)return null
var t=(0,n.objectAt)(this,e-1)
return this.removeAt(e-1,1),t},shiftObject:function(){if(0===(0,n.get)(this,"length"))return null
var e=(0,n.objectAt)(this,0)
return this.removeAt(0),e},unshiftObject:function(e){return this.insertAt(0,e),e},unshiftObjects:function(e){return this.replace(0,0,e),this},reverseObjects:function(){var e=(0,n.get)(this,"length")
if(0===e)return this
var t=this.toArray().reverse()
return this.replace(0,e,t),this},setObjects:function(e){if(0===e.length)return this.clear()
var t=(0,n.get)(this,"length")
return this.replace(0,t,e),this},removeObject:function(e){for(var t=(0,n.get)(this,"length")||0;--t>=0;)(0,n.objectAt)(this,t)===e&&this.removeAt(t)
return this},removeObjects:function(e){var t
for((0,n.beginPropertyChanges)(this),t=e.length-1;t>=0;t--)this.removeObject(e[t])
return(0,n.endPropertyChanges)(this),this},addObject:function(e){return this.includes(e)||this.pushObject(e),this},addObjects:function(e){var t=this
return(0,n.beginPropertyChanges)(this),e.forEach(function(e){return t.addObject(e)}),(0,n.endPropertyChanges)(this),this}}),S=n.Mixin.create(C,a.default,l.default,{get:function(e){return"number"==typeof e?this[e]:this._super(e)},objectAt:function(e){return this[e]},replace:function(e,t,r){var i=r?(0,n.get)(r,"length"):0
return g(this,e,t,i),0===i?this.splice(e,t):(0,n.replace)(this,e,t,r),v(this,e,t,i),this},unknownProperty:function(e,t){var n=void 0
return void 0!==t&&void 0===n&&(n=this[e]=t),n},indexOf:Array.prototype.indexOf,lastIndexOf:Array.prototype.lastIndexOf,copy:function(e){return e?this.map(function(e){return(0,u.default)(e,!0)}):this.slice()}}),w=["length"]
S.keys().forEach(function(e){Array.prototype[e]&&w.push(e)}),e.NativeArray=S=(d=S).without.apply(d,w)
var R=void 0
s.ENV.EXTEND_PROTOTYPES.Array?(S.apply(Array.prototype),e.A=R=function(e){return e||[]}):e.A=R=function(e){return e||(e=[]),E.detect(e)?e:S.apply(e)},e.A=R,e.NativeArray=S,e.MutableArray=C,e.default=E}),e("ember-runtime/mixins/comparable",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({compare:null})}),e("ember-runtime/mixins/container_proxy",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({__container__:null,ownerInjection:function(){return this.__container__.ownerInjection()},lookup:function(e,t){return this.__container__.lookup(e,t)},_resolveLocalLookupName:function(e,t){return this.__container__.registry.expandLocalLookup("component:"+e,{source:t})},willDestroy:function(){this._super.apply(this,arguments),this.__container__&&(0,t.run)(this.__container__,"destroy")},factoryFor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.__container__.factoryFor(e,t)}})}),e("ember-runtime/mixins/controller",["exports","ember-metal","ember-runtime/computed/computed_macros","ember-runtime/mixins/action_handler"],function(e,t,n,r){"use strict"
e.default=t.Mixin.create(r.default,{isController:!0,target:null,store:null,model:null,content:(0,n.deprecatingAlias)("model",{id:"ember-runtime.controller.content-alias",until:"2.17.0",url:"https://emberjs.com/deprecations/v2.x/#toc_controller-content-alias"})})}),e("ember-runtime/mixins/copyable",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({copy:null})}),e("ember-runtime/mixins/enumerable",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create()}),e("ember-runtime/mixins/evented",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({on:function(e,n,r){return(0,t.addListener)(this,e,n,r),this},one:function(e,n,r){return r||(r=n,n=null),(0,t.addListener)(this,e,n,r,!0),this},trigger:function(e){var n,r,i
for(n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(0,t.sendEvent)(this,e,r)},off:function(e,n,r){return(0,t.removeListener)(this,e,n,r),this},has:function(e){return(0,t.hasListeners)(this,e)}})}),e("ember-runtime/mixins/mutable_enumerable",["exports","ember-runtime/mixins/enumerable","ember-metal"],function(e,t,n){"use strict"
e.default=n.Mixin.create(t.default)}),e("ember-runtime/mixins/observable",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
e.default=t.Mixin.create({get:function(e){return(0,t.get)(this,e)},getProperties:function(){var e,n,r
for(e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r]
return t.getProperties.apply(void 0,[this].concat(n))},set:function(e,n){return(0,t.set)(this,e,n)},setProperties:function(e){return(0,t.setProperties)(this,e)},beginPropertyChanges:function(){return(0,t.beginPropertyChanges)(),this},endPropertyChanges:function(){return(0,t.endPropertyChanges)(),this},propertyWillChange:function(e){return(0,t.propertyWillChange)(this,e),this},propertyDidChange:function(e){return(0,t.propertyDidChange)(this,e),this},notifyPropertyChange:function(e){return(0,t.notifyPropertyChange)(this,e),this},addObserver:function(e,n,r){return(0,t.addObserver)(this,e,n,r),this},removeObserver:function(e,n,r){return(0,t.removeObserver)(this,e,n,r),this},hasObserverFor:function(e){return(0,t.hasListeners)(this,e+":change")},getWithDefault:function(e,n){return(0,t.getWithDefault)(this,e,n)},incrementProperty:function(e,n){return(0,t.isNone)(n)&&(n=1),(0,t.set)(this,e,(parseFloat((0,t.get)(this,e))||0)+n)},decrementProperty:function(e,n){return(0,t.isNone)(n)&&(n=1),(0,t.set)(this,e,((0,t.get)(this,e)||0)-n)},toggleProperty:function(e){return(0,t.set)(this,e,!(0,t.get)(this,e))},cacheFor:function(e){return(0,t.getCachedValueFor)(this,e)}})}),e("ember-runtime/mixins/promise_proxy",["exports","ember-metal","ember-debug","ember-runtime/computed/computed_macros"],function(e,t,n,r){"use strict"
function i(e){return function(){var n=(0,t.get)(this,"promise")
return n[e].apply(n,arguments)}}e.default=t.Mixin.create({reason:null,isPending:(0,r.not)("isSettled").readOnly(),isSettled:(0,r.or)("isRejected","isFulfilled").readOnly(),isRejected:!1,isFulfilled:!1,promise:(0,t.computed)({get:function(){throw new n.Error("PromiseProxy's promise must be set")},set:function(e,n){return function(e,n){return(0,t.setProperties)(e,{isFulfilled:!1,isRejected:!1}),n.then(function(n){return e.isDestroyed||e.isDestroying||(0,t.setProperties)(e,{content:n,isFulfilled:!0}),n},function(n){throw e.isDestroyed||e.isDestroying||(0,t.setProperties)(e,{reason:n,isRejected:!0}),n},"Ember: PromiseProxy")}(this,n)}}),then:i("then"),catch:i("catch"),finally:i("finally")})}),e("ember-runtime/mixins/registry_proxy",["exports","ember-metal"],function(e,t){"use strict"
function n(e){return function(){var t
return(t=this.__registry__)[e].apply(t,arguments)}}e.default=t.Mixin.create({__registry__:null,resolveRegistration:n("resolve"),register:n("register"),unregister:n("unregister"),hasRegistration:n("has"),registeredOption:n("getOption"),registerOptions:n("options"),registeredOptions:n("getOptions"),registerOptionsForType:n("optionsForType"),registeredOptionsForType:n("getOptionsForType"),inject:n("injection")})}),e("ember-runtime/mixins/target_action_support",["exports","ember-environment","ember-metal","ember-debug"],function(e,t,n,r){"use strict"
e.default=n.Mixin.create({target:null,targetObject:(0,n.descriptor)({configurable:!0,enumerable:!1,get:function(){return this._targetObject},set:function(e){this._targetObject=e}}),action:null,actionContext:null,actionContextObject:(0,n.computed)("actionContext",function(){var e,r=(0,n.get)(this,"actionContext")
return"string"==typeof r?(void 0===(e=(0,n.get)(this,r))&&(e=(0,n.get)(t.context.lookup,r)),e):r}),triggerAction:function(){var e,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.action,s=i.target,a=i.actionContext
return o=o||(0,n.get)(this,"action"),s=s||function(e){var r,i=(0,n.get)(e,"target")
if(i)return"string"==typeof i?(void 0===(r=(0,n.get)(e,i))&&(r=(0,n.get)(t.context.lookup,i)),r):i
if(i)return i
if(e._targetObject)return e._targetObject
return null}(this),void 0===a&&(a=(0,n.get)(this,"actionContextObject")||this),!(!s||!o||(void 0,!1===(s.send?(e=s).send.apply(e,[o].concat(a)):(r=s)[o].apply(r,[].concat(a)))))}})}),e("ember-runtime/string_registry",["exports"],function(e){"use strict"
e.setStrings=function(e){t=e},e.getStrings=function(){return t},e.get=function(e){return t[e]}
var t={}}),e("ember-runtime/system/application",["exports","ember-runtime/system/namespace"],function(e,t){"use strict"
e.default=t.default.extend()}),e("ember-runtime/system/array_proxy",["exports","ember-metal","ember-runtime/utils","ember-runtime/system/object","ember-runtime/mixins/array","ember-debug"],function(e,t,n,r,i,o){"use strict"
var s,a={willChange:"_arrangedContentArrayWillChange",didChange:"_arrangedContentArrayDidChange"}
e.default=r.default.extend(i.MutableArray,((s={init:function(){this._super.apply(this,arguments),this._objectsDirtyIndex=0,this._objects=null,this._lengthDirty=!0,this._length=0,this._arrangedContent=null,this._addArrangedContentArrayObsever()},willDestroy:function(){this._removeArrangedContentArrayObsever()},content:null,arrangedContent:(0,t.alias)("content"),objectAtContent:function(e){return(0,t.objectAt)((0,t.get)(this,"arrangedContent"),e)},replace:function(e,t,n){this.replaceContent(e,t,n)},replaceContent:function(e,n,r){(0,t.get)(this,"content").replace(e,n,r)},objectAt:function(e){var n,r,i
if(null===this._objects&&(this._objects=[]),-1!==this._objectsDirtyIndex&&e>=this._objectsDirtyIndex){if(n=(0,t.get)(this,"arrangedContent"))for(r=this._objects.length=(0,t.get)(n,"length"),i=this._objectsDirtyIndex;i<r;i++)this._objects[i]=this.objectAtContent(i)
else this._objects.length=0
this._objectsDirtyIndex=-1}return this._objects[e]},length:(0,t.computed)(function(){var e
return this._lengthDirty&&(e=(0,t.get)(this,"arrangedContent"),this._length=e?(0,t.get)(e,"length"):0,this._lengthDirty=!1),this._length}).volatile()})[t.PROPERTY_DID_CHANGE]=function(e){var n,r,i
"arrangedContent"===e&&(n=null===this._objects?0:this._objects.length,i=(r=(0,t.get)(this,"arrangedContent"))?(0,t.get)(r,"length"):0,this._removeArrangedContentArrayObsever(),this.arrayContentWillChange(0,n,i),this._objectsDirtyIndex=0,this._lengthDirty=!0,this.arrayContentDidChange(0,n,i),this._addArrangedContentArrayObsever())},s._addArrangedContentArrayObsever=function(){var e=(0,t.get)(this,"arrangedContent")
e&&((0,i.addArrayObserver)(e,this,a),this._arrangedContent=e)},s._removeArrangedContentArrayObsever=function(){this._arrangedContent&&(0,i.removeArrayObserver)(this._arrangedContent,this,a)},s._arrangedContentArrayWillChange=function(){},s._arrangedContentArrayDidChange=function(e,n,r,i){this.arrayContentWillChange(n,r,i)
var o=n
o<0&&(o+=(0,t.get)(this._arrangedContent,"length")+r-i),-1===this._objectsDirtyIndex?this._objectsDirtyIndex=o:this._objectsDirtyIndex>o&&(this._objectsDirtyIndex=o),this._lengthDirty=!0,this.arrayContentDidChange(n,r,i)},s))}),e("ember-runtime/system/core_object",["exports","container","ember-utils","ember-metal","ember-runtime/mixins/action_handler","ember-runtime/inject","ember-debug","ember-environment"],function(e,t,n,r,i,o,s,a){"use strict"
var l,u
e.POST_INIT=void 0
var c=r.run.schedule,p=r.Mixin._apply,d=r.Mixin.prototype.reopen,f=e.POST_INIT=(0,n.symbol)("POST_INIT")
function h(){var e=!1,i=void 0,o=function(){function o(s){var l,u,c,p,d,h,m,g,v,b,y,E
e||o.proto(),this.__defineNonEnumerable(n.GUID_KEY_PROPERTY)
var T=(0,r.meta)(this),_=T.proto
if(T.proto=this,i&&(t.FACTORY_FOR.set(this,i),i=null),void 0!==s)for(u=this.concatenatedProperties,c=this.mergedProperties,p=void 0!==u&&u.length>0,d=void 0!==c&&c.length>0,h=Object.keys(s),m=0;m<h.length;m++)v=s[g=h[m]],a.ENV._ENABLE_BINDING_SUPPORT&&r.Mixin.detectBinding(g)&&T.writeBindings(g,v),(y=void 0!==(b=(0,r.descriptorFor)(this,g,T)))||(E=this[g],p&&u.indexOf(g)>-1&&(v=E?(0,n.makeArray)(E).concat(v):(0,n.makeArray)(v)),d&&c.indexOf(g)>-1&&(v=(0,n.assign)({},E,v))),y?b.set(this,g,v):"function"!=typeof this.setUnknownProperty||g in this?this[g]=v:this.setUnknownProperty(g,v)
a.ENV._ENABLE_BINDING_SUPPORT&&r.Mixin.finishPartial(this,T),(l=this).init.apply(l,arguments),this[f](),T.proto=_,(0,r.finishChains)(T),(0,r.sendEvent)(this,"init",void 0,void 0,void 0,T)}return o.willReopen=function(){e&&(o.PrototypeMixin=r.Mixin.create(o.PrototypeMixin)),e=!1},o._initFactory=function(e){i=e},o.proto=function(){var t=o.superclass
return t&&t.proto(),e||(e=!0,o.PrototypeMixin.applyPartial(o.prototype)),this.prototype},o}()
return o.toString=r.Mixin.prototype.toString,o}var m=(0,r.descriptor)({configurable:!0,enumerable:!1,get:function(){return(0,r.peekMeta)(this).isSourceDestroyed()},set:function(e){}}),g=(0,r.descriptor)({configurable:!0,enumerable:!1,get:function(){return(0,r.peekMeta)(this).isSourceDestroying()},set:function(e){}}),v=h()
v.toString=function(){return"Ember.CoreObject"},v.PrototypeMixin=r.Mixin.create(((l={reopen:function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return p(this,t,!0),this},init:function(){}})[f]=function(){},l.__defineNonEnumerable=function(e){Object.defineProperty(this,e.name,e.descriptor)},l.concatenatedProperties=null,l.mergedProperties=null,l.isDestroyed=m,l.isDestroying=g,l.destroy=function(){var e=(0,r.peekMeta)(this)
if(!e.isSourceDestroying())return e.setSourceDestroying(),c("actions",this,this.willDestroy),c("destroy",this,this._scheduledDestroy,e),this},l.willDestroy=function(){},l._scheduledDestroy=function(e){e.isSourceDestroyed()||((0,r.deleteMeta)(this),e.setSourceDestroyed())},l.toString=function(){var e="function"==typeof this.toStringExtension?":"+this.toStringExtension():""
return"<"+(this[n.NAME_KEY]||t.FACTORY_FOR.get(this)||this.constructor.toString())+":"+(0,n.guidFor)(this)+e+">"},l)),v.PrototypeMixin.ownerConstructor=v,v.__super__=null
var b=((u={isClass:!0,isMethod:!1})[n.NAME_KEY]=null,u[n.GUID_KEY]=null,u.extend=function(){var e=h(),t=void 0
return e.ClassMixin=r.Mixin.create(this.ClassMixin),e.PrototypeMixin=r.Mixin.create(this.PrototypeMixin),e.ClassMixin.ownerConstructor=e,e.PrototypeMixin.ownerConstructor=e,d.apply(e.PrototypeMixin,arguments),e.superclass=this,e.__super__=this.prototype,(t=e.prototype=Object.create(this.prototype)).constructor=e,(0,n.generateGuid)(t),(0,r.meta)(t).proto=t,e.ClassMixin.apply(e),e},u.create=function(e,t){return new this(void 0===t?e:function(){var e,t,r,i,o,s,a,l,u,c,p,d,f=this.concatenatedProperties,h=this.mergedProperties,m=void 0!==f&&f.length>0,g=void 0!==h&&h.length>0,v={}
for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
for(i=0;i<t.length;i++)for(o=t[i],s=Object.keys(o),a=0,l=s.length;a<l;a++)u=s[a],c=o[u],m&&f.indexOf(u)>-1&&(p=v[u],c=p?(0,n.makeArray)(p).concat(c):(0,n.makeArray)(c)),g&&h.indexOf(u)>-1&&(d=v[u],c=(0,n.assign)({},d,c)),v[u]=c
return v}.apply(this,arguments))},u.reopen=function(){return this.willReopen(),d.apply(this.PrototypeMixin,arguments),this},u.reopenClass=function(){return d.apply(this.ClassMixin,arguments),p(this,arguments,!1),this},u.detect=function(e){if("function"!=typeof e)return!1
for(;e;){if(e===this)return!0
e=e.superclass}return!1},u.detectInstance=function(e){return e instanceof this},u.metaForProperty=function(e){var t=this.proto(),n=(0,r.descriptorFor)(t,e)
return n._meta||{}},u._computedProperties=(0,r.computed)(function(){(0,r._hasCachedComputedProperties)()
var e=this.proto(),t=void 0,n=[]
for(var i in e)void 0!==(t=(0,r.descriptorFor)(e,i))&&n.push({name:i,meta:t._meta})
return n}).readOnly(),u.eachComputedProperty=function(e,t){var n,i=void 0,o={},s=(0,r.get)(this,"_computedProperties")
for(n=0;n<s.length;n++)i=s[n],e.call(t||this,i.name,i.meta||o)},u)
a.ENV._ENABLE_PROPERTY_REQUIRED_SUPPORT&&(b.ClassMixin=r.REQUIRED,b.PrototypeMixin=r.REQUIRED)
var y=r.Mixin.create(b)
y.ownerConstructor=v,v.ClassMixin=y,y.apply(v),e.default=v}),e("ember-runtime/system/lazy_load",["exports","ember-environment"],function(e,t){"use strict"
e._loaded=void 0,e.onLoad=function(e,t){var i=r[e]
n[e]=n[e]||[],n[e].push(t),i&&t(i)},e.runLoadHooks=function(e,i){r[e]=i
var o,s=t.environment.window
s&&"function"==typeof CustomEvent&&(o=new CustomEvent(e,{detail:i,name:e}),s.dispatchEvent(o)),n[e]&&n[e].forEach(function(e){return e(i)})}
var n=t.ENV.EMBER_LOAD_HOOKS||{},r={}
e._loaded=r}),e("ember-runtime/system/namespace",["exports","ember-utils","ember-metal","ember-environment","ember-runtime/system/object"],function(e,t,n,r,i){"use strict"
e.isSearchDisabled=function(){return o},e.setSearchDisabled=function(e){o=!!e}
var o=!1,s=i.default.extend({isNamespace:!0,init:function(){s.NAMESPACES.push(this),s.PROCESSED=!1},toString:function(){var e=(0,n.get)(this,"name")||(0,n.get)(this,"modulePrefix")
return e||(p(),this[t.NAME_KEY])},nameClasses:function(){u([this.toString()],this,{})},destroy:function(){var e=s.NAMESPACES,t=this.toString()
t&&(r.context.lookup[t]=void 0,delete s.NAMESPACES_BY_ID[t]),e.splice(e.indexOf(this),1),this._super.apply(this,arguments)}})
s.reopenClass({NAMESPACES:[],NAMESPACES_BY_ID:{},PROCESSED:!1,processAll:h,byName:function(e){return o||h(),a[e]}})
var a=s.NAMESPACES_BY_ID,l={}.hasOwnProperty
function u(e,n,r){var i,o=e.length
for(var s in a[e.join(".")]=n,n)if(l.call(n,s))if(i=n[s],e[o]=s,i&&i.toString===f&&!i[t.NAME_KEY])i[t.NAME_KEY]=e.join(".")
else if(i&&i.isNamespace){if(r[(0,t.guidFor)(i)])continue
r[(0,t.guidFor)(i)]=!0,u(e,i,r)}e.length=o}function c(e,t){var n
try{return(n=e[t])&&n.isNamespace&&n}catch(e){}}function p(){if(!s.PROCESSED){var e,n,i,o,a=r.context.lookup,l=Object.keys(a)
for(e=0;e<l.length;e++)n=l[e],(o=n.charCodeAt(0))>=65&&o<=90&&(i=c(a,n))&&(i[t.NAME_KEY]=n)}}function d(e){var n=void 0
if(!o){if(h(),n=e[t.NAME_KEY])return n
n=(n=function e(n){var r=n.superclass
if(r)return r[t.NAME_KEY]?r[t.NAME_KEY]:e(r)}(e))?"(subclass of "+n+")":n}return n||"(unknown mixin)"}function f(){var e=this[t.NAME_KEY]
return e||(this[t.NAME_KEY]=d(this))}function h(){var e,t,r,i=!s.PROCESSED,o=(0,n.hasUnprocessedMixins)()
if(i&&(p(),s.PROCESSED=!0),i||o){for(e=s.NAMESPACES,t=void 0,r=0;r<e.length;r++)u([(t=e[r]).toString()],t,{});(0,n.clearUnprocessedMixins)()}}n.Mixin.prototype.toString=f,e.default=s}),e("ember-runtime/system/object",["exports","container","ember-utils","ember-metal","ember-runtime/system/core_object","ember-runtime/mixins/observable","ember-debug"],function(e,t,n,r,i,o){"use strict"
var s
e.FrameworkObject=void 0
var a=(0,n.symbol)("OVERRIDE_OWNER"),l=i.default.extend(o.default,((s={_debugContainerKey:(0,r.descriptor)({enumerable:!1,get:function(){var e=t.FACTORY_FOR.get(this)
return void 0!==e&&e.fullName}})})[n.OWNER]=(0,r.descriptor)({enumerable:!1,get:function(){if(this[a])return this[a]
var e=t.FACTORY_FOR.get(this)
return void 0!==e&&e.owner},set:function(e){this[a]=e}}),s))
l.toString=function(){return"Ember.Object"},e.FrameworkObject=l,e.default=l})
e("ember-runtime/system/object_proxy",["exports","ember-runtime/system/object","ember-runtime/mixins/-proxy"],function(e,t,n){"use strict"
e.default=t.default.extend(n.default)}),e("ember-runtime/system/service",["exports","ember-runtime/system/object","ember-runtime/inject"],function(e,t,n){"use strict";(0,n.createInjectionHelper)("service")
var r=t.default.extend()
r.reopenClass({isServiceFactory:!0}),e.default=r}),e("ember-runtime/system/string",["exports","ember-metal","ember-utils","ember-runtime/utils","ember-runtime/string_registry"],function(e,t,n,r,i){"use strict"
e.capitalize=e.underscore=e.classify=e.camelize=e.dasherize=e.decamelize=e.w=e.loc=void 0
var o=/[ _]/g,s=new t.Cache(1e3,function(e){return A(e).replace(o,"-")}),a=/(\-|\_|\.|\s)+(.)?/g,l=/(^|\/)([A-Z])/g,u=new t.Cache(1e3,function(e){return e.replace(a,function(e,t,n){return n?n.toUpperCase():""}).replace(l,function(e){return e.toLowerCase()})}),c=/^(\-|_)+(.)?/,p=/(.)(\-|\_|\.|\s)+(.)?/g,d=/(^|\/|\.)([a-z])/g,f=new t.Cache(1e3,function(e){var t,n=function(e,t,n){return n?"_"+n.toUpperCase():""},r=function(e,t,n,r){return t+(r?r.toUpperCase():"")},i=e.split("/")
for(t=0;t<i.length;t++)i[t]=i[t].replace(c,n).replace(p,r)
return i.join("/").replace(d,function(e){return e.toUpperCase()})}),h=/([a-z\d])([A-Z]+)/g,m=/\-|\s+/g,g=new t.Cache(1e3,function(e){return e.replace(h,"$1_$2").replace(m,"_").toLowerCase()}),v=/(^|\/)([a-z\u00C0-\u024F])/g,b=new t.Cache(1e3,function(e){return e.replace(v,function(e){return e.toUpperCase()})}),y=/([a-z\d])([A-Z])/g,E=new t.Cache(1e3,function(e){return e.replace(y,"$1_$2").toLowerCase()})
function T(e,t){return(!(0,r.isArray)(t)||arguments.length>2)&&(t=Array.prototype.slice.call(arguments,1)),function(e,t){var i,o=t
if(!(0,r.isArray)(o)||arguments.length>2)for(o=new Array(arguments.length-1),i=1;i<arguments.length;i++)o[i-1]=arguments[i]
var s=0
return e.replace(/%@([0-9]+)?/g,function(e,t){return t=t?parseInt(t,10)-1:s++,null===(e=o[t])?"(null)":void 0===e?"":(0,n.inspect)(e)})}(e=(0,i.get)(e)||e,t)}function _(e){return e.split(/\s+/)}function A(e){return E.get(e)}function C(e){return s.get(e)}function S(e){return u.get(e)}function w(e){return f.get(e)}function R(e){return g.get(e)}function x(e){return b.get(e)}e.default={loc:T,w:_,decamelize:A,dasherize:C,camelize:S,classify:w,underscore:R,capitalize:x},e.loc=T,e.w=_,e.decamelize=A,e.dasherize=C,e.camelize=S,e.classify=w,e.underscore=R,e.capitalize=x}),e("ember-runtime/utils",["exports","ember-metal","ember-utils","ember-runtime/mixins/array","ember-runtime/system/object"],function(e,t,n,r,i){"use strict"
e.isArray=function(e){var t=e
if(!t||t.setInterval)return!1
if(Array.isArray(t))return!0
if(r.default.detect(t))return!0
var n=a(t)
if("array"===n)return!0
var i=t.length
return"number"==typeof i&&i==i&&"object"===n},e.typeOf=a
var o={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object","[object FileList]":"filelist"},s=Object.prototype.toString
function a(e){if(null===e)return"null"
if(void 0===e)return"undefined"
var t=o[s.call(e)]||"object"
return"function"===t?i.default.detect(e)&&(t="class"):"object"===t&&(e instanceof Error?t="error":e instanceof i.default?t="instance":e instanceof Date&&(t="date")),t}}),e("ember-utils",["exports"],function(e){"use strict"
function t(e){var t={}
for(var n in t[e]=1,t)if(n===e)return n
return e}var n=0
function r(){return++n}var i=[],o={},s=t("__ember"+ +new Date),a={writable:!0,configurable:!0,enumerable:!1,value:null},l={name:s,descriptor:{configurable:!0,writable:!0,enumerable:!1,value:null}}
function u(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ember")+r()
return void 0!==e&&null!==e&&(null===e[s]?e[s]=t:(a.value=t,e.__defineNonEnumerable?e.__defineNonEnumerable(l):Object.defineProperty(e,s,a))),t}var c=[]
function p(e){var n=t("__"+e+(s+Math.floor(Math.random()*new Date))+"__")
return c.push(n),n}var d=p("OWNER")
function f(e){var t,n,r,i,o
for(t=1;t<arguments.length;t++)if(n=arguments[t])for(r=Object.keys(n),i=0;i<r.length;i++)e[o=r[i]]=n[o]
return e}var h=Object.assign||f,m=/\.(_super|call\(this|apply\(this)/,g=Function.prototype.toString,v=g.call(function(){return this}).indexOf("return this")>-1?function(e){return m.test(g.call(e))}:function(){return!0}
function b(){}function y(e){return void 0===e.__hasSuper&&(e.__hasSuper=v(e)),e.__hasSuper}function E(e,t){function n(){var n=this._super
this._super=t
var r=e.apply(this,arguments)
return this._super=n,r}return n.wrappedFunction=e,n.__ember_observes__=e.__ember_observes__,n.__ember_observesBefore__=e.__ember_observesBefore__,n.__ember_listens__=e.__ember_listens__,n}b.__hasSuper=!1
var T=Object.prototype.toString
function _(e,t){return null!==e&&void 0!==e&&"function"==typeof e[t]}var A=Array.isArray,C=p("NAME_KEY"),S=Object.prototype.toString
function w(e){return null===e||void 0===e}var R="function"==typeof Proxy
e.symbol=p,e.isInternalSymbol=function(e){return c.indexOf(e)>-1},e.getOwner=function(e){return e[d]},e.setOwner=function(e,t){e[d]=t},e.OWNER=d,e.assign=h,e.assignPolyfill=f,e.dictionary=function(e){var t=Object.create(e)
return t._dict=null,delete t._dict,t},e.uuid=r,e.GUID_KEY=s,e.GUID_DESC=a,e.GUID_KEY_PROPERTY=l,e.generateGuid=u,e.guidFor=function(e){if(void 0===e)return"(undefined)"
if(null===e)return"(null)"
var t=typeof e
if(("object"===t||"function"===t)&&e[s])return e[s]
var n=void 0
switch(t){case"number":return(n=i[e])||(n=i[e]="nu"+e),n
case"string":return(n=o[e])||(n=o[e]="st"+r()),n
case"boolean":return e?"(true)":"(false)"
default:return e===Object?"(Object)":e===Array?"(Array)":u(e)}},e.intern=t,e.checkHasSuper=v,e.ROOT=b,e.wrap=function(e,t){return y(e)?!t.wrappedFunction&&y(t)?E(e,E(t,b)):E(e,t):e},e.inspect=function(e){if(null===e)return"null"
if(void 0===e)return"undefined"
if(Array.isArray(e))return"["+e+"]"
var t=typeof e
if("object"!==t&&"symbol"!==t)return""+e
if("function"==typeof e.toString&&e.toString!==T)return e.toString()
var n=void 0,r=[]
for(var i in e)if(e.hasOwnProperty(i)){if("toString"===(n=e[i]))continue
"function"==typeof n&&(n="function() { ... }"),n&&"function"!=typeof n.toString?r.push(i+": "+T.call(n)):r.push(i+": "+n)}return"{"+r.join(", ")+"}"},e.lookupDescriptor=function(e,t){for(var n,r=e;r;){if(n=Object.getOwnPropertyDescriptor(r,t))return n
r=Object.getPrototypeOf(r)}return null},e.canInvoke=_,e.tryInvoke=function(e,t,n){if(_(e,t))return e[t].apply(e,n)},e.makeArray=function(e){return null===e||void 0===e?[]:A(e)?e:[e]},e.NAME_KEY=C,e.toString=function e(t){var n,r,i
if("string"==typeof t)return t
if(Array.isArray(t)){for(n=t.length,r="",i=0;i<n;i++)i>0&&(r+=","),w(t[i])||(r+=e(t[i]))
return r}return null!=t&&"function"==typeof t.toString?t.toString():S.call(t)},e.HAS_NATIVE_PROXY=R}),e("ember-views/compat/attrs",["exports","ember-utils"],function(e,t){"use strict"
e.MUTABLE_CELL=void 0,e.MUTABLE_CELL=(0,t.symbol)("MUTABLE_CELL")}),e("ember-views/compat/fallback-view-registry",["exports","ember-utils"],function(e,t){"use strict"
e.default=(0,t.dictionary)(null)}),e("ember-views/component_lookup",["exports","ember-debug","ember-runtime"],function(e,t,n){"use strict"
e.default=n.Object.extend({componentFor:function(e,t,n){return t.factoryFor("component:"+e,n)},layoutFor:function(e,t,n){return t.lookup("template:components/"+e,n)}})}),e("ember-views/index",["exports","ember-views/system/jquery","ember-views/system/utils","ember-views/system/event_dispatcher","ember-views/component_lookup","ember-views/mixins/text_support","ember-views/views/core_view","ember-views/mixins/class_names_support","ember-views/mixins/child_views_support","ember-views/mixins/view_state_support","ember-views/mixins/view_support","ember-views/mixins/action_support","ember-views/compat/attrs","ember-views/system/lookup_partial","ember-views/utils/lookup-component","ember-views/system/action_manager","ember-views/compat/fallback-view-registry"],function(e,t,n,r,i,o,s,a,l,u,c,p,d,f,h,m,g){"use strict"
Object.defineProperty(e,"jQuery",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"jQueryDisabled",{enumerable:!0,get:function(){return t.jQueryDisabled}}),Object.defineProperty(e,"isSimpleClick",{enumerable:!0,get:function(){return n.isSimpleClick}}),Object.defineProperty(e,"getViewBounds",{enumerable:!0,get:function(){return n.getViewBounds}}),Object.defineProperty(e,"getViewClientRects",{enumerable:!0,get:function(){return n.getViewClientRects}}),Object.defineProperty(e,"getViewBoundingClientRect",{enumerable:!0,get:function(){return n.getViewBoundingClientRect}}),Object.defineProperty(e,"getRootViews",{enumerable:!0,get:function(){return n.getRootViews}}),Object.defineProperty(e,"getChildViews",{enumerable:!0,get:function(){return n.getChildViews}}),Object.defineProperty(e,"getViewId",{enumerable:!0,get:function(){return n.getViewId}}),Object.defineProperty(e,"getViewElement",{enumerable:!0,get:function(){return n.getViewElement}}),Object.defineProperty(e,"setViewElement",{enumerable:!0,get:function(){return n.setViewElement}}),Object.defineProperty(e,"constructStyleDeprecationMessage",{enumerable:!0,get:function(){return n.constructStyleDeprecationMessage}}),Object.defineProperty(e,"EventDispatcher",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"ComponentLookup",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"TextSupport",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"CoreView",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"ClassNamesSupport",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"ChildViewsSupport",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"ViewStateSupport",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"ViewMixin",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"ActionSupport",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"MUTABLE_CELL",{enumerable:!0,get:function(){return d.MUTABLE_CELL}}),Object.defineProperty(e,"lookupPartial",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"hasPartial",{enumerable:!0,get:function(){return f.hasPartial}}),Object.defineProperty(e,"lookupComponent",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"ActionManager",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"fallbackViewRegistry",{enumerable:!0,get:function(){return g.default}})}),e("ember-views/mixins/action_support",["exports","ember-utils","ember-metal","ember-debug","ember-views/compat/attrs"],function(e,t,n,r,i){"use strict"
e.default=n.Mixin.create({sendAction:function(e){for(t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o]
var t,r,o,s=void 0
void 0===e&&(e="action"),void 0!==(s=function(e,t){return t&&t[i.MUTABLE_CELL]&&(t=t.value),t}(0,s=(0,n.get)(this,"attrs."+e)||(0,n.get)(this,e)))&&("function"==typeof s?s.apply(void 0,r):this.triggerAction({action:s,actionContext:r}))},send:function(e){for(t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i]
var t,r,i,o=this.actions&&this.actions[e]
if(!o||!0===o.apply(this,r)){var s=(0,n.get)(this,"target")
s&&s.send.apply(s,arguments)}}})}),e("ember-views/mixins/child_views_support",["exports","ember-utils","ember-metal","ember-views/system/utils"],function(e,t,n,r){"use strict"
e.default=n.Mixin.create({init:function(){this._super.apply(this,arguments),(0,r.initChildViews)(this)},childViews:(0,n.descriptor)({configurable:!1,enumerable:!1,get:function(){return(0,r.getChildViews)(this)}}),appendChild:function(e){this.linkChild(e),(0,r.addChildView)(this,e)},linkChild:function(e){(0,t.getOwner)(e)||(0,t.setOwner)(e,(0,t.getOwner)(this))}})}),e("ember-views/mixins/class_names_support",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
var r=Object.freeze([])
e.default=t.Mixin.create({concatenatedProperties:["classNames","classNameBindings"],init:function(){this._super.apply(this,arguments)},classNames:r,classNameBindings:r})}),e("ember-views/mixins/text_support",["exports","ember-metal","ember-runtime"],function(e,t,n){"use strict"
var r={13:"insertNewline",27:"cancel"}
function i(e,n,r){var i=(0,t.get)(n,"attrs."+e)||(0,t.get)(n,e),o=(0,t.get)(n,"value")
n.sendAction(e,o),i&&!(0,t.get)(n,"bubbles")&&r.stopPropagation()}e.default=t.Mixin.create(n.TargetActionSupport,{value:"",attributeBindings:["autocapitalize","autocorrect","autofocus","disabled","form","maxlength","minlength","placeholder","readonly","required","selectionDirection","spellcheck","tabindex","title"],placeholder:null,disabled:!1,maxlength:null,init:function(){this._super.apply(this,arguments),this.on("paste",this,this._elementValueDidChange),this.on("cut",this,this._elementValueDidChange),this.on("input",this,this._elementValueDidChange)},bubbles:!1,interpretKeyEvents:function(e){var t=r[e.keyCode]
if(this._elementValueDidChange(),t)return this[t](e)},_elementValueDidChange:function(){(0,t.set)(this,"value",this.element.value)},change:function(e){this._elementValueDidChange(e)},insertNewline:function(e){i("enter",this,e),i("insert-newline",this,e)},cancel:function(e){i("escape-press",this,e)},focusIn:function(e){i("focus-in",this,e)},focusOut:function(e){this._elementValueDidChange(e),i("focus-out",this,e)},keyPress:function(e){i("key-press",this,e)},keyUp:function(e){this.interpretKeyEvents(e),this.sendAction("key-up",(0,t.get)(this,"value"),e)},keyDown:function(e){this.sendAction("key-down",(0,t.get)(this,"value"),e)}})}),e("ember-views/mixins/view_state_support",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({_transitionTo:function(e){var t=this._currentState,n=this._currentState=this._states[e]
this._state=e,t&&t.exit&&t.exit(this),n.enter&&n.enter(this)}})}),e("ember-views/mixins/view_support",["exports","ember-utils","ember-metal","ember-debug","ember-environment","ember-views/system/utils","ember-runtime/system/core_object","ember-views/system/jquery"],function(e,t,n,r,i,o,s,a){"use strict"
var l
function u(){return this}e.default=n.Mixin.create(((l={concatenatedProperties:["attributeBindings"]})[s.POST_INIT]=function(){!0===i.ENV._ENABLE_DID_INIT_ATTRS_SUPPORT&&this.trigger("didInitAttrs"),this.trigger("didReceiveAttrs")},l.nearestOfType=function(e){for(var t=this.parentView,r=e instanceof n.Mixin?function(t){return e.detect(t)}:function(t){return e.detect(t.constructor)};t;){if(r(t))return t
t=t.parentView}},l.nearestWithProperty=function(e){for(var t=this.parentView;t;){if(e in t)return t
t=t.parentView}},l.rerender=function(){return this._currentState.rerender(this)},l.element=(0,n.descriptor)({configurable:!1,enumerable:!1,get:function(){return this.renderer.getElement(this)}}),l.$=function(e){if(this.element)return e?(0,a.default)(e,this.element):(0,a.default)(this.element)},l.appendTo=function(e){var t=this._environment||i.environment,n=void 0
return n=t.hasDOM&&"string"==typeof e?document.querySelector(e):e,this.renderer.appendTo(this,n),this},l.append=function(){return this.appendTo(document.body)},l.elementId=null,l.findElementInParentElement=function(e){var t="#"+this.elementId
return(0,a.default)(t)[0]||(0,a.default)(t,e)[0]},l.willInsertElement=u,l.didInsertElement=u,l.willClearRender=u,l.destroy=function(){this._super.apply(this,arguments),this._currentState.destroy(this)},l.willDestroyElement=u,l.parentViewDidChange=u,l.tagName=null,l.init=function(){this._super.apply(this,arguments),this.elementId||""===this.tagName||(this.elementId=(0,t.guidFor)(this)),i.environment._ENABLE_DID_INIT_ATTRS_SUPPORT},l.__defineNonEnumerable=function(e){this[e.name]=e.descriptor.value},l.handleEvent=function(e,t){return this._currentState.handleEvent(this,e,t)},l))}),e("ember-views/system/action_manager",["exports"],function(e){"use strict"
function t(){}e.default=t,t.registeredActions={}}),e("ember-views/system/event_dispatcher",["exports","ember-utils","ember-debug","ember-metal","ember-runtime","ember-views/system/jquery","ember-views/system/action_manager","ember-views/compat/fallback-view-registry"],function(e,t,n,r,i,o,s,a){"use strict"
var l=void 0!==o.default
e.default=i.Object.extend({events:{touchstart:"touchStart",touchmove:"touchMove",touchend:"touchEnd",touchcancel:"touchCancel",keydown:"keyDown",keyup:"keyUp",keypress:"keyPress",mousedown:"mouseDown",mouseup:"mouseUp",contextmenu:"contextMenu",click:"click",dblclick:"doubleClick",mousemove:"mouseMove",focusin:"focusIn",focusout:"focusOut",mouseenter:"mouseEnter",mouseleave:"mouseLeave",submit:"submit",input:"input",change:"change",dragstart:"dragStart",drag:"drag",dragenter:"dragEnter",dragleave:"dragLeave",dragover:"dragOver",drop:"drop",dragend:"dragEnd"},rootElement:"body",init:function(){this._super(),this._eventHandlers=Object.create(null)},setup:function(e,n){var i=void 0,s=void 0,a=this._finalEvents=(0,t.assign)({},(0,r.get)(this,"events"),e);(0,r.isNone)(n)||(0,r.set)(this,"rootElement",n)
var u=(0,r.get)(this,"rootElement")
if(l){if((s=(0,o.default)(u)).addClass("ember-application"),!s.is(".ember-application"))throw new TypeError("Unable to add 'ember-application' class to root element ("+(s.selector||s[0].tagName)+"). Make sure you set rootElement to the body or an element in the body.")}else(s="string"!=typeof u?u:document.querySelector(u)).classList.add("ember-application")
var c=this._getViewRegistry()
for(i in a)a.hasOwnProperty(i)&&this.setupHandler(s,i,a[i],c)},setupHandler:function(e,t,n,r){var i,o,a
null!==n&&(l?(e.on(t+".ember",".ember-view",function(e){var t=r[this.id],i=!0
return t&&(i=t.handleEvent(n,e)),i}),e.on(t+".ember","[data-ember-action]",function(e){var t,r,i,o=e.currentTarget.attributes,a=[]
for(t=0;t<o.length;t++)-1!==(r=o.item(t)).name.lastIndexOf("data-ember-action-",0)&&(i=s.default.registeredActions[r.value])&&i.eventName===n&&-1===a.indexOf(i)&&(i.handler(e),a.push(i))})):(i=function(e,t){var i=r[e.id],o=!0
return i&&(o=i.handleEvent(n,t)),o},o=function(e,t){var r,i,o,a,l,u,c=e.getAttribute("data-ember-action"),p=s.default.registeredActions[c]
if(""===c)for(i=(r=e.attributes).length,p=[],o=0;o<i;o++)0===(a=r.item(o)).name.indexOf("data-ember-action-")&&(p=p.concat(s.default.registeredActions[a.value]))
if(p)for(l=0;l<p.length;l++)if((u=p[l])&&u.eventName===n)return u.handler(t)},a=this._eventHandlers[t]=function(e){var t=e.target
do{if(r[t.id]){if(!1===i(t,e)){e.preventDefault(),e.stopPropagation()
break}}else if(t.hasAttribute("data-ember-action")&&!1===o(t,e))break
t=t.parentNode}while(t&&1===t.nodeType)},e.addEventListener(t,a)))},_getViewRegistry:function(){var e=(0,t.getOwner)(this)
return e&&e.lookup("-view-registry:main")||a.default},destroy:function(){var e=(0,r.get)(this,"rootElement"),t=void 0
if(t=e.nodeType?e:document.querySelector(e)){if(l)(0,o.default)(e).off(".ember","**")
else for(var n in this._eventHandlers)t.removeEventListener(n,this._eventHandlers[n])
return t.classList.remove("ember-application"),this._super.apply(this,arguments)}},toString:function(){return"(EventDispatcher)"}})}),e("ember-views/system/jquery",["exports","ember-environment"],function(e,t){"use strict"
e.jQueryDisabled=void 0
var n=void 0
e.jQueryDisabled=!1
t.environment.hasDOM&&((n=t.context.imports.jQuery)?n.event.addProp?n.event.addProp("dataTransfer"):["dragstart","drag","dragenter","dragleave","dragover","drop","dragend"].forEach(function(e){n.event.fixHooks[e]={props:["dataTransfer"]}}):e.jQueryDisabled=!0),e.default=n}),e("ember-views/system/lookup_partial",["exports","ember-debug"],function(e,t){"use strict"
function n(e){var t=e.split("/"),n=t[t.length-1]
return t[t.length-1]="_"+n,t.join("/")}e.default=function(e,r){if(null!=e){var i=function(e,n,r){if(!r)return
if(!e)throw new t.Error("Container was not found when looking up a views template. This is most likely due to manually instantiating an Ember.View. See: http://git.io/EKPpnA")
return e.lookup("template:"+n)||e.lookup("template:"+r)}(r,n(e),e)
return i}},e.hasPartial=function(e,r){if(!r)throw new t.Error("Container was not found when looking up a views template. This is most likely due to manually instantiating an Ember.View. See: http://git.io/EKPpnA")
return r.hasRegistration("template:"+n(e))||r.hasRegistration("template:"+e)}}),e("ember-views/system/utils",["exports","ember-utils"],function(e,t){"use strict"
function n(e){return""===e.tagName?(0,t.guidFor)(e):e.elementId||(0,t.guidFor)(e)}e.elMatches=void 0,e.isSimpleClick=function(e){var t=e.shiftKey||e.metaKey||e.altKey||e.ctrlKey,n=e.which>1
return!t&&!n},e.constructStyleDeprecationMessage=function(e){return'Binding style attributes may introduce cross-site scripting vulnerabilities; please ensure that values being bound are properly escaped. For more information, including how to disable this warning, see https://emberjs.com/deprecations/v1.x/#toc_binding-style-attributes. Style affected: "'+e+'"'},e.getRootViews=function(e){var t=e.lookup("-view-registry:main"),n=[]
return Object.keys(t).forEach(function(e){var r=t[e]
null===r.parentView&&n.push(r)}),n},e.getViewId=n,e.getViewElement=function(e){return e[r]},e.initViewElement=function(e){e[r]=null},e.setViewElement=function(e,t){return e[r]=t},e.getChildViews=function(e){return o(e,(0,t.getOwner)(e).lookup("-view-registry:main"))},e.initChildViews=function(e){e[i]=[]},e.addChildView=function(e,t){e[i].push(n(t))},e.collectChildViews=o,e.getViewBounds=s,e.getViewRange=a,e.getViewClientRects=function(e){return a(e).getClientRects()},e.getViewBoundingClientRect=function(e){return a(e).getBoundingClientRect()},e.matches=function(e,t){return l.call(e,t)}
var r=(0,t.symbol)("VIEW_ELEMENT"),i=(0,t.symbol)("CHILD_VIEW_IDS")
function o(e,t){var n=[],r=[]
return e[i].forEach(function(e){var i=t[e]
!i||i.isDestroying||i.isDestroyed||-1!==n.indexOf(e)||(n.push(e),r.push(i))}),e[i]=n,r}function s(e){return e.renderer.getBounds(e)}function a(e){var t=s(e),n=document.createRange()
return n.setStartBefore(t.firstNode),n.setEndAfter(t.lastNode),n}var l=e.elMatches="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector)}),e("ember-views/utils/lookup-component",["exports","ember-babel","container","ember-environment"],function(e,t,n,r){"use strict"
e.default=function(e,t,n){var r,i=e.lookup("component-lookup:main")
return n&&n.source&&((r=o(i,e,t,n)).component||r.layout)?r:o(i,e,t)}
var i=(0,t.taggedTemplateLiteralLoose)(["component:-default"],["component:-default"])
function o(e,t,o,s){var a=e.componentFor(o,t,s),l=e.layoutFor(o,t,s),u={layout:l,component:a}
return r.ENV._TEMPLATE_ONLY_GLIMMER_COMPONENTS||!l||a||(u.component=t.factoryFor((0,n.privatize)(i))),u}}),e("ember-views/views/core_view",["exports","ember-runtime","ember-views/system/utils","ember-views/views/states"],function(e,t,n,r){"use strict"
var i=t.FrameworkObject.extend(t.Evented,t.ActionHandler,{isView:!0,_states:(0,r.cloneStates)(r.states),init:function(){if(this._super.apply(this,arguments),this._state="preRender",this._currentState=this._states.preRender,(0,n.initViewElement)(this),!this.renderer)throw new Error("Cannot instantiate a component without a renderer. Please ensure that you are creating "+this+" with a proper container/registry.")},parentView:null,instrumentDetails:function(e){return e.object=this.toString(),e.containerKey=this._debugContainerKey,e.view=this,e},trigger:function(e){for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
this._super.apply(this,arguments)
var t,n,r,i=this[e]
if("function"==typeof i)return i.apply(this,n)},has:function(e){return"function"==typeof this[e]||this._super(e)}})
i.reopenClass({isViewFactory:!0}),e.default=i}),e("ember-views/views/states",["exports","ember-utils","ember-views/views/states/default","ember-views/views/states/pre_render","ember-views/views/states/has_element","ember-views/views/states/in_dom","ember-views/views/states/destroying"],function(e,t,n,r,i,o,s){"use strict"
e.states=void 0,e.cloneStates=function(e){var n={_default:{}}
for(var r in n.preRender=Object.create(n._default),n.destroying=Object.create(n._default),n.hasElement=Object.create(n._default),n.inDOM=Object.create(n.hasElement),e)e.hasOwnProperty(r)&&(0,t.assign)(n[r],e[r])
return n},e.states={_default:n.default,preRender:r.default,inDOM:o.default,hasElement:i.default,destroying:s.default}}),e("ember-views/views/states/default",["exports","ember-debug"],function(e,t){"use strict"
e.default={appendChild:function(){throw new t.EmberError("You can't use appendChild outside of the rendering process")},handleEvent:function(){return!0},rerender:function(){},destroy:function(){}}}),e("ember-views/views/states/destroying",["exports","ember-utils","ember-debug","ember-views/views/states/default"],function(e,t,n,r){"use strict"
var i=Object.create(r.default);(0,t.assign)(i,{appendChild:function(){throw new n.Error("You can't call appendChild on a view being destroyed")},rerender:function(){throw new n.Error("You can't call rerender on a view being destroyed")}}),e.default=i}),e("ember-views/views/states/has_element",["exports","ember-utils","ember-views/views/states/default","ember-metal"],function(e,t,n,r){"use strict"
var i=Object.create(n.default);(0,t.assign)(i,{rerender:function(e){e.renderer.rerender(e)},destroy:function(e){e.renderer.remove(e)},handleEvent:function(e,t,n){return!e.has(t)||(0,r.flaggedInstrument)("interaction."+t,{event:n,view:e},function(){return r.run.join(e,e.trigger,t,n)})}}),e.default=i}),e("ember-views/views/states/in_dom",["exports","ember-utils","ember-metal","ember-debug","ember-views/views/states/has_element"],function(e,t,n,r,i){"use strict"
var o=Object.create(i.default);(0,t.assign)(o,{enter:function(e){e.renderer.register(e)},exit:function(e){e.renderer.unregister(e)}}),e.default=o}),e("ember-views/views/states/pre_render",["exports","ember-views/views/states/default"],function(e,t){"use strict"
e.default=Object.create(t.default)}),e("ember/features",["exports","ember-environment","ember-utils"],function(e,t,n){"use strict"
e.FEATURES=e.DEFAULT_FEATURES=void 0
var r=e.DEFAULT_FEATURES={"features-stripped-test":!1,"ember-libraries-isregistered":!1,"ember-improved-instrumentation":!1,"ember-glimmer-named-arguments":!0,"ember-metal-es5-getters":!0,"ember-routing-router-service":!0,"ember-engines-mount-params":!0,"ember-module-unification":!1,"glimmer-custom-component-manager":!1,"ember-template-block-let-helper":!1,"descriptor-trap":!1,"mandatory-getter":!1,"mandatory-setter":!1,"ember-glimmer-detect-backtracking-rerender":!1}
e.FEATURES=(0,n.assign)(r,t.ENV.FEATURES)}),e("ember/index",["exports","require","ember-environment","node-module","ember-utils","container","ember-metal","ember/features","ember-debug","backburner","ember-console","ember-runtime","ember-glimmer","ember/version","ember-views","ember-routing","ember-application","ember-extension-support"],function(e,t,n,r,i,o,s,a,l,u,c,p,d,f,h,m,g,v){"use strict"
e.VERSION=void 0,s.default.getOwner=i.getOwner,s.default.setOwner=i.setOwner,s.default.generateGuid=i.generateGuid,s.default.GUID_KEY=i.GUID_KEY,s.default.guidFor=i.guidFor,s.default.inspect=i.inspect,s.default.makeArray=i.makeArray,s.default.canInvoke=i.canInvoke,s.default.tryInvoke=i.tryInvoke,s.default.wrap=i.wrap,s.default.uuid=i.uuid,s.default.assign=i.assign,s.default.Container=o.Container,s.default.Registry=o.Registry
var b,y=s.computed
y.alias=s.alias,s.default.computed=y,s.default.ComputedProperty=s.ComputedProperty,s.default.cacheFor=s.getCachedValueFor,s.default.assert=l.assert,s.default.warn=l.warn,s.default.debug=l.debug,s.default.deprecate=l.deprecate,s.default.deprecateFunc=l.deprecateFunc,s.default.runInDebug=l.runInDebug,s.default.Debug={registerDeprecationHandler:l.registerDeprecationHandler,registerWarnHandler:l.registerWarnHandler},s.default.merge=s.merge,s.default.instrument=s.instrument,s.default.subscribe=s.instrumentationSubscribe,s.default.Instrumentation={instrument:s.instrument,subscribe:s.instrumentationSubscribe,unsubscribe:s.instrumentationUnsubscribe,reset:s.instrumentationReset},s.default.Error=l.Error,s.default.meta=s.meta,s.default.get=s.get,s.default.getWithDefault=s.getWithDefault,s.default._getPath=s._getPath,s.default.set=s.set,s.default.trySet=s.trySet,s.default.FEATURES=a.FEATURES,s.default.FEATURES.isEnabled=l.isFeatureEnabled,s.default._Cache=s.Cache,s.default.on=s.on,s.default.addListener=s.addListener,s.default.removeListener=s.removeListener,s.default.sendEvent=s.sendEvent,s.default.hasListeners=s.hasListeners
s.default.isNone=s.isNone,s.default.isEmpty=s.isEmpty,s.default.isBlank=s.isBlank,s.default.isPresent=s.isPresent,s.default.run=s.run,s.default.propertyWillChange=s.propertyWillChange,s.default.propertyDidChange=s.propertyDidChange,s.default.notifyPropertyChange=s.notifyPropertyChange,s.default.overrideChains=s.overrideChains,s.default.beginPropertyChanges=s.beginPropertyChanges,s.default.endPropertyChanges=s.endPropertyChanges,s.default.changeProperties=s.changeProperties,s.default.platform={defineProperty:!0,hasPropertyAccessors:!0},s.default.defineProperty=s.defineProperty,s.default.watchKey=s.watchKey,s.default.unwatchKey=s.unwatchKey,s.default.removeChainWatcher=s.removeChainWatcher,s.default._ChainNode=s.ChainNode,s.default.finishChains=s.finishChains,s.default.watchPath=s.watchPath,s.default.unwatchPath=s.unwatchPath,s.default.watch=s.watch,s.default.isWatching=s.isWatching,s.default.unwatch=s.unwatch,s.default.destroy=s.deleteMeta,s.default.libraries=s.libraries,s.default.OrderedSet=s.OrderedSet,s.default.Map=s.Map,s.default.MapWithDefault=s.MapWithDefault,s.default.getProperties=s.getProperties
s.default.setProperties=s.setProperties,s.default.expandProperties=s.expandProperties,s.default.NAME_KEY=i.NAME_KEY,s.default.addObserver=s.addObserver,s.default.removeObserver=s.removeObserver,n.ENV._ENABLE_PROPERTY_REQUIRED_SUPPORT&&(s.default.required=s.required),s.default.aliasMethod=s.aliasMethod,s.default.observer=s.observer,s.default.mixin=s.mixin,s.default.Mixin=s.Mixin,s.default.bind=s.bind,s.default.Binding=s.Binding,Object.defineProperty(s.default,"ENV",{get:function(){return n.ENV},enumerable:!1}),Object.defineProperty(s.default,"lookup",{get:function(){return n.context.lookup},set:function(e){n.context.lookup=e},enumerable:!1}),s.default.EXTEND_PROTOTYPES=n.ENV.EXTEND_PROTOTYPES,Object.defineProperty(s.default,"LOG_STACKTRACE_ON_DEPRECATION",{get:function(){return n.ENV.LOG_STACKTRACE_ON_DEPRECATION},set:function(e){n.ENV.LOG_STACKTRACE_ON_DEPRECATION=!!e},enumerable:!1}),Object.defineProperty(s.default,"LOG_VERSION",{get:function(){return n.ENV.LOG_VERSION},set:function(e){n.ENV.LOG_VERSION=!!e},enumerable:!1}),Object.defineProperty(s.default,"LOG_BINDINGS",{get:function(){return n.ENV.LOG_BINDINGS},set:function(e){n.ENV.LOG_BINDINGS=!!e},enumerable:!1}),Object.defineProperty(s.default,"onerror",{get:s.getOnerror,set:s.setOnerror,enumerable:!1}),Object.defineProperty(s.default,"testing",{get:l.isTesting,set:l.setTesting,enumerable:!1}),s.default._Backburner=u.default,s.default.Logger=c.default,s.default.A=p.A,s.default.String=p.String,s.default.Object=p.Object,s.default._RegistryProxyMixin=p.RegistryProxyMixin,s.default._ContainerProxyMixin=p.ContainerProxyMixin,s.default.compare=p.compare,s.default.copy=p.copy,s.default.isEqual=p.isEqual
s.default.inject=p.inject,s.default.Array=p.Array,s.default.Comparable=p.Comparable,s.default.Enumerable=p.Enumerable,s.default.ArrayProxy=p.ArrayProxy,s.default.ObjectProxy=p.ObjectProxy,s.default.ActionHandler=p.ActionHandler,s.default.CoreObject=p.CoreObject,s.default.NativeArray=p.NativeArray,s.default.Copyable=p.Copyable,s.default.MutableEnumerable=p.MutableEnumerable,s.default.MutableArray=p.MutableArray,s.default.TargetActionSupport=p.TargetActionSupport,s.default.Evented=p.Evented,s.default.PromiseProxyMixin=p.PromiseProxyMixin,s.default.Observable=p.Observable,s.default.typeOf=p.typeOf,s.default.isArray=p.isArray,s.default.Object=p.Object,s.default.onLoad=p.onLoad,s.default.runLoadHooks=p.runLoadHooks,s.default.Controller=p.Controller,s.default.ControllerMixin=p.ControllerMixin,s.default.Service=p.Service,s.default._ProxyMixin=p._ProxyMixin,s.default.RSVP=p.RSVP,s.default.Namespace=p.Namespace,y.empty=p.empty,y.notEmpty=p.notEmpty,y.none=p.none
y.not=p.not,y.bool=p.bool,y.match=p.match,y.equal=p.equal,y.gt=p.gt,y.gte=p.gte,y.lt=p.lt,y.lte=p.lte,y.oneWay=p.oneWay,y.reads=p.oneWay,y.readOnly=p.readOnly,y.deprecatingAlias=p.deprecatingAlias,y.and=p.and,y.or=p.or,y.any=p.any,y.sum=p.sum,y.min=p.min,y.max=p.max,y.map=p.map,y.sort=p.sort,y.setDiff=p.setDiff,y.mapBy=p.mapBy,y.filter=p.filter,y.filterBy=p.filterBy,y.uniq=p.uniq,y.uniqBy=p.uniqBy,y.union=p.union,y.intersect=p.intersect,y.collect=p.collect,Object.defineProperty(s.default,"STRINGS",{configurable:!1,get:p.getStrings,set:p.setStrings})
Object.defineProperty(s.default,"BOOTED",{configurable:!1,enumerable:!1,get:p.isNamespaceSearchDisabled,set:p.setNamespaceSearchDisabled}),s.default.Component=d.Component,d.Helper.helper=d.helper,s.default.Helper=d.Helper,s.default.Checkbox=d.Checkbox,s.default.TextField=d.TextField,s.default.TextArea=d.TextArea,s.default.LinkComponent=d.LinkComponent,n.ENV.EXTEND_PROTOTYPES.String&&(String.prototype.htmlSafe=function(){return(0,d.htmlSafe)(this)})
var E=s.default.Handlebars=s.default.Handlebars||{},T=s.default.HTMLBars=s.default.HTMLBars||{},_=E.Utils=E.Utils||{}
T.template=E.template=d.template,_.escapeExpression=d.escapeExpression,p.String.htmlSafe=d.htmlSafe,p.String.isHTMLSafe=d.isHTMLSafe,Object.defineProperty(s.default,"TEMPLATES",{get:d.getTemplates,set:d.setTemplates,configurable:!1,enumerable:!1}),e.VERSION=f.default,s.default.VERSION=f.default,s.libraries.registerCoreLibrary("Ember",f.default),s.default.$=h.jQuery,s.default.ViewTargetActionSupport=h.ViewTargetActionSupport,s.default.ViewUtils={isSimpleClick:h.isSimpleClick,getViewElement:h.getViewElement,getViewBounds:h.getViewBounds,getViewClientRects:h.getViewClientRects,getViewBoundingClientRect:h.getViewBoundingClientRect,getRootViews:h.getRootViews,getChildViews:h.getChildViews},s.default.TextSupport=h.TextSupport,s.default.ComponentLookup=h.ComponentLookup,s.default.EventDispatcher=h.EventDispatcher,s.default.Location=m.Location,s.default.AutoLocation=m.AutoLocation,s.default.HashLocation=m.HashLocation,s.default.HistoryLocation=m.HistoryLocation,s.default.NoneLocation=m.NoneLocation,s.default.controllerFor=m.controllerFor,s.default.generateControllerFactory=m.generateControllerFactory,s.default.generateController=m.generateController,s.default.RouterDSL=m.RouterDSL,s.default.Router=m.Router,s.default.Route=m.Route,s.default.Application=g.Application,s.default.ApplicationInstance=g.ApplicationInstance,s.default.Engine=g.Engine,s.default.EngineInstance=g.EngineInstance,s.default.DefaultResolver=s.default.Resolver=g.Resolver;(0,p.runLoadHooks)("Ember.Application",g.Application),s.default.DataAdapter=v.DataAdapter,s.default.ContainerDebugAdapter=v.ContainerDebugAdapter,(0,t.has)("ember-template-compiler")&&(0,t.default)("ember-template-compiler"),(0,t.has)("ember-testing")&&(b=(0,t.default)("ember-testing"),s.default.Test=b.Test,s.default.Test.Adapter=b.Adapter,s.default.Test.QUnitAdapter=b.QUnitAdapter,s.default.setupForTesting=b.setupForTesting),(0,p.runLoadHooks)("Ember"),e.default=s.default,r.IS_NODE?r.module.exports=s.default:n.context.exports.Ember=n.context.exports.Em=s.default})
e("ember/version",["exports"],function(e){"use strict"
e.default="3.1.1"}),e("node-module",["exports"],function(e){var t="object"==typeof module&&"function"==typeof module.require
t?(e.require=module.require,e.module=module,e.IS_NODE=t):(e.require=null,e.module=null,e.IS_NODE=t)}),e("route-recognizer",["exports"],function(e){"use strict"
var t=Object.create
function n(){var e=t(null)
return e.__=void 0,delete e.__,e}var r=function(e,t,n){this.path=e,this.matcher=t,this.delegate=n}
r.prototype.to=function(e,t){var n=this.delegate
if(n&&n.willAddRoute&&(e=n.willAddRoute(this.matcher.target,e)),this.matcher.add(this.path,e),t){if(0===t.length)throw new Error("You must have an argument in the function passed to `to`")
this.matcher.addChild(this.path,e,t,this.delegate)}}
var i=function(e){this.routes=n(),this.children=n(),this.target=e}
function o(e,t,n){return function(i,s){var a=e+i
if(!s)return new r(a,t,n)
s(o(a,t,n))}}function s(e,t,n){var r,i=0
for(r=0;r<e.length;r++)i+=e[r].path.length
var o={path:t=t.substr(i),handler:n}
e.push(o)}function a(e){return e.split("/").map(u).join("/")}i.prototype.add=function(e,t){this.routes[e]=t},i.prototype.addChild=function(e,t,n,r){var s=new i(t)
this.children[e]=s
var a=o(e,s,r)
r&&r.contextEntered&&r.contextEntered(t,a),n(a)}
var l=/%|\//g
function u(e){return e.length<3||-1===e.indexOf("%")?e:decodeURIComponent(e).replace(l,encodeURIComponent)}var c=/%(?:2(?:4|6|B|C)|3(?:B|D|A)|40)/g
function p(e){return encodeURIComponent(e).replace(c,decodeURIComponent)}var d=/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g,f=Array.isArray,h=Object.prototype.hasOwnProperty
function m(e,t){if("object"!=typeof e||null===e)throw new Error("You must pass an object as the second argument to `generate`.")
if(!h.call(e,t))throw new Error("You must provide param `"+t+"` to `generate`.")
var n=e[t],r="string"==typeof n?n:""+n
if(0===r.length)throw new Error("You must provide a param `"+t+"`.")
return r}var g=[]
g[0]=function(e,t){var n,r,i=t,o=e.value
for(n=0;n<o.length;n++)r=o.charCodeAt(n),i=i.put(r,!1,!1)
return i},g[1]=function(e,t){return t.put(47,!0,!0)},g[2]=function(e,t){return t.put(-1,!1,!0)},g[4]=function(e,t){return t}
var v=[]
v[0]=function(e){return e.value.replace(d,"\\$1")},v[1]=function(){return"([^/]+)"},v[2]=function(){return"(.+)"},v[4]=function(){return""}
var b=[]
b[0]=function(e){return e.value},b[1]=function(e,t){var n=m(t,e.value)
return x.ENCODE_AND_DECODE_PATH_SEGMENTS?p(n):n},b[2]=function(e,t){return m(t,e.value)},b[4]=function(){return""}
var y=Object.freeze({}),E=Object.freeze([])
function T(e,t,n){t.length>0&&47===t.charCodeAt(0)&&(t=t.substr(1))
var r,i,o,s,a=t.split("/"),l=void 0,c=void 0
for(r=0;r<a.length;r++)o=0,s=0,12&(o=2<<(s=""===(i=a[r])?4:58===i.charCodeAt(0)?1:42===i.charCodeAt(0)?2:0))&&(i=i.slice(1),(l=l||[]).push(i),(c=c||[]).push(0!=(4&o))),14&o&&n[s]++,e.push({type:s,value:u(i)})
return{names:l||E,shouldDecodes:c||E}}function _(e,t,n){return e.char===t&&e.negate===n}var A=function(e,t,n,r,i){this.states=e,this.id=t,this.char=n,this.negate=r,this.nextStates=i?t:null,this.pattern="",this._regex=void 0,this.handlers=void 0,this.types=void 0}
function C(e,t){return e.negate?e.char!==t&&-1!==e.char:e.char===t||-1===e.char}function S(e,t){var n,r,i,o=[]
for(n=0,r=e.length;n<r;n++)i=e[n],o=o.concat(i.match(t))
return o}A.prototype.regex=function(){return this._regex||(this._regex=new RegExp(this.pattern)),this._regex},A.prototype.get=function(e,t){var n,r,i,o=this.nextStates
if(null!==o)if(f(o)){for(n=0;n<o.length;n++)if(_(r=this.states[o[n]],e,t))return r}else if(_(i=this.states[o],e,t))return i},A.prototype.put=function(e,t,n){var r
if(r=this.get(e,t))return r
var i=this.states
return r=new A(i,i.length,e,t,n),i[i.length]=r,null==this.nextStates?this.nextStates=r.id:f(this.nextStates)?this.nextStates.push(r.id):this.nextStates=[this.nextStates,r.id],r},A.prototype.match=function(e){var t,n,r,i=this.nextStates
if(!i)return[]
var o=[]
if(f(i))for(t=0;t<i.length;t++)C(n=this.states[i[t]],e)&&o.push(n)
else C(r=this.states[i],e)&&o.push(r)
return o}
var w=function(e){this.length=0,this.queryParams=e||{}}
function R(e){var t
e=e.replace(/\+/gm,"%20")
try{t=decodeURIComponent(e)}catch(e){t=""}return t}w.prototype.splice=Array.prototype.splice,w.prototype.slice=Array.prototype.slice,w.prototype.push=Array.prototype.push
var x=function(){this.names=n()
var e=[],t=new A(e,0,-1,!0,!1)
e[0]=t,this.states=e,this.rootState=t}
x.prototype.add=function(e,t){var n,r,i,o,s,a,l,u=this.rootState,c="^",p=[0,0,0],d=new Array(e.length),f=[],h=!0,m=0
for(n=0;n<e.length;n++){for(o=(i=T(f,(r=e[n]).path,p)).names,s=i.shouldDecodes;m<f.length;m++)4!==(a=f[m]).type&&(h=!1,u=u.put(47,!1,!1),c+="/",u=g[a.type](a,u),c+=v[a.type](a))
d[n]={handler:r.handler,names:o,shouldDecodes:s}}h&&(u=u.put(47,!1,!1),c+="/"),u.handlers=d,u.pattern=c+"$",u.types=p,"object"==typeof t&&null!==t&&t.as&&(l=t.as),l&&(this.names[l]={segments:f,handlers:d})},x.prototype.handlersFor=function(e){var t,n,r=this.names[e]
if(!r)throw new Error("There is no route named "+e)
var i=new Array(r.handlers.length)
for(t=0;t<r.handlers.length;t++)n=r.handlers[t],i[t]=n
return i},x.prototype.hasRoute=function(e){return!!this.names[e]},x.prototype.generate=function(e,t){var n,r,i=this.names[e],o=""
if(!i)throw new Error("There is no route named "+e)
var s=i.segments
for(n=0;n<s.length;n++)4!==(r=s[n]).type&&(o+="/",o+=b[r.type](r,t))
return"/"!==o.charAt(0)&&(o="/"+o),t&&t.queryParams&&(o+=this.generateQueryString(t.queryParams)),o},x.prototype.generateQueryString=function(e){var t,n,r,i,o,s,a=[],l=Object.keys(e)
for(l.sort(),t=0;t<l.length;t++)if(null!=(r=e[n=l[t]]))if(i=encodeURIComponent(n),f(r))for(o=0;o<r.length;o++)s=n+"[]="+encodeURIComponent(r[o]),a.push(s)
else i+="="+encodeURIComponent(r),a.push(i)
return 0===a.length?"":"?"+a.join("&")},x.prototype.parseQueryString=function(e){var t,n,r,i,o,s,a=e.split("&"),l={}
for(t=0;t<a.length;t++)i=(r=R((n=a[t].split("="))[0])).length,o=!1,s=void 0,1===n.length?s="true":(i>2&&"[]"===r.slice(i-2)&&(o=!0,l[r=r.slice(0,i-2)]||(l[r]=[])),s=n[1]?R(n[1]):""),o?l[r].push(s):l[r]=s
return l},x.prototype.recognize=function(e){var t,n,r,i,o=[this.rootState],s={},l=!1,u=e.indexOf("#");-1!==u&&(e=e.substr(0,u))
var c=e.indexOf("?");-1!==c&&(n=e.substr(c+1,e.length),e=e.substr(0,c),s=this.parseQueryString(n)),"/"!==e.charAt(0)&&(e="/"+e)
var p=e
x.ENCODE_AND_DECODE_PATH_SEGMENTS?e=a(e):(e=decodeURI(e),p=decodeURI(p))
var d=e.length
for(d>1&&"/"===e.charAt(d-1)&&(e=e.substr(0,d-1),p=p.substr(0,p.length-1),l=!0),r=0;r<e.length&&(o=S(o,e.charCodeAt(r))).length;r++);var f=[]
for(i=0;i<o.length;i++)o[i].handlers&&f.push(o[i])
o=function(e){return e.sort(function(e,t){var n=e.types||[0,0,0],r=n[0],i=n[1],o=n[2],s=t.types||[0,0,0],a=s[0],l=s[1],u=s[2]
if(o!==u)return o-u
if(o){if(r!==a)return a-r
if(i!==l)return l-i}return i!==l?i-l:r!==a?a-r:0})}(f)
var h=f[0]
return h&&h.handlers&&(l&&h.pattern&&"(.+)$"===h.pattern.slice(-5)&&(p+="/"),t=function(e,t,n){var r,i,o,s,a,l,u,c,p,d=e.handlers,f=e.regex()
if(!f||!d)throw new Error("state not initialized")
var h=t.match(f),m=1,g=new w(n)
for(g.length=d.length,r=0;r<d.length;r++){if(o=(i=d[r]).names,s=i.shouldDecodes,a=y,l=!1,o!==E&&s!==E)for(u=0;u<o.length;u++)l=!0,c=o[u],p=h&&h[m++],a===y&&(a={}),x.ENCODE_AND_DECODE_PATH_SEGMENTS&&s[u]?a[c]=p&&decodeURIComponent(p):a[c]=p
g[r]={handler:i.handler,params:a,isDynamic:l}}return g}(h,p,s)),t},x.VERSION="0.3.3",x.ENCODE_AND_DECODE_PATH_SEGMENTS=!0,x.Normalizer={normalizeSegment:u,normalizePath:a,encodePathSegment:p},x.prototype.map=function(e,t){var n=new i
e(o("",n,this.delegate)),function e(t,n,r,i){var o,a,l,u,c=n.routes,p=Object.keys(c)
for(o=0;o<p.length;o++)a=p[o],s(l=t.slice(),a,c[a]),(u=n.children[a])?e(l,u,r,i):r.call(i,l)}([],n,function(e){t?t(this,e):this.add(e)},this)},e.default=x}),e("router",["exports","ember-babel","route-recognizer","rsvp"],function(e,t,n,r){"use strict"
e.Transition=void 0
var i=Array.prototype.slice,o=Object.prototype.hasOwnProperty
function s(e,t){for(var n in t)o.call(t,n)&&(e[n]=t[n])}function a(e){var t=e&&e.length,n=void 0
return t&&t>0&&e[t-1]&&e[t-1].hasOwnProperty("queryParams")?(n=e[t-1].queryParams,[i.call(e,0,t-1),n]):[e,null]}function l(e){var t,n,r
for(var i in e)if("number"==typeof(t=e[i]))e[i]=""+t
else if(Array.isArray(t))for(n=0,r=t.length;n<r;n++)t[n]=""+t[n]}function u(e,t,n){e.log&&(3===arguments.length?e.log("Transition #"+t+": "+n):(n=t,e.log(n)))}function c(e){return"string"==typeof e||e instanceof String||"number"==typeof e||e instanceof Number}function p(e,t){var n,r
for(n=0,r=e.length;n<r&&!1!==t(e[n]);n++);}function d(e,t,n,r){if(e.triggerEvent)e.triggerEvent(t,n,r)
else{var i,o,s,a=r.shift()
if(!t){if(n)return
throw new Error("Could not trigger event '"+a+"'. There are no active handlers")}var l=!1
for(i=t.length-1;i>=0;i--)if(s=(o=t[i]).handler){if(s.events&&s.events[a]){if(!0!==s.events[a].apply(s,r))return
l=!0}}else o.handlerPromise.then(u.bind(null,a,r))
if("error"===a&&"UnrecognizedURLError"===r[0].name)throw r[0]
if(!l&&!n)throw new Error("Nothing handled the event '"+a+"'.")}function u(e,t,n){n.events[e].apply(n,t)}}function f(e,t){var n,r,i=void 0,a={all:{},changed:{},removed:{}}
s(a.all,t)
var u=!1
for(i in l(e),l(t),e)o.call(e,i)&&(o.call(t,i)||(u=!0,a.removed[i]=e[i]))
for(i in t)if(o.call(t,i))if(Array.isArray(e[i])&&Array.isArray(t[i]))if(e[i].length!==t[i].length)a.changed[i]=t[i],u=!0
else for(n=0,r=e[i].length;n<r;n++)e[i][n]!==t[i][n]&&(a.changed[i]=t[i],u=!0)
else e[i]!==t[i]&&(a.changed[i]=t[i],u=!0)
return u?a:void 0}function h(e){return"Router: "+e}function m(e,t){if(e){var n="_"+t
return e[n]&&n||e[t]&&t}}function g(e,t,n,r){var i=m(e,t)
return i&&e[i].call(e,n,r)}var v=function(){function e(){this.handlerInfos=[],this.queryParams={},this.params={}}return e.prototype.promiseLabel=function(e){var t=""
return p(this.handlerInfos,function(e){""!==t&&(t+="."),t+=e.name}),h("'"+t+"': "+e)},e.prototype.resolve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.params
p(this.handlerInfos,function(e){n[e.name]=e.params||{}}),t.resolveIndex=0
var i=this,o=!1
return r.Promise.resolve(null,this.promiseLabel("Start transition")).then(l,null,this.promiseLabel("Resolve handler")).catch(function(e){var n=i.handlerInfos,s=t.resolveIndex>=n.length?n.length-1:t.resolveIndex
return r.Promise.reject({error:e,handlerWithError:i.handlerInfos[s].handler,wasAborted:o,state:i})},this.promiseLabel("Handle error"))
function s(){return r.Promise.resolve(e(),i.promiseLabel("Check if should continue")).catch(function(e){return o=!0,r.Promise.reject(e)},i.promiseLabel("Handle abort"))}function a(e){var n=i.handlerInfos[t.resolveIndex].isResolved
return i.handlerInfos[t.resolveIndex++]=e,n||g(e.handler,"redirect",e.context,t),s().then(l,null,i.promiseLabel("Resolve handler"))}function l(){return t.resolveIndex===i.handlerInfos.length?{error:null,state:i}:i.handlerInfos[t.resolveIndex].resolve(s,t).then(a,null,i.promiseLabel("Proceed"))}},e}()
function b(e){if(!(this instanceof b))return new b(e)
var t=Error.call(this,e)
Error.captureStackTrace?Error.captureStackTrace(this,b):this.stack=t.stack,this.description=t.description,this.fileName=t.fileName,this.lineNumber=t.lineNumber,this.message=t.message||"TransitionAborted",this.name="TransitionAborted",this.number=t.number,this.code=t.code}b.prototype=Object.create(Error.prototype)
var y=function(){function e(e,t,n,i,o){var s,a,l,u=this
if(this.state=n||e.state,this.intent=t,this.router=e,this.data=this.intent&&this.intent.data||{},this.resolvedModels={},this.queryParams={},this.promise=void 0,this.error=void 0,this.params=void 0,this.handlerInfos=void 0,this.targetName=void 0,this.pivotHandler=void 0,this.sequence=void 0,this.isAborted=!1,this.isActive=!0,this.urlMethod="update",this.resolveIndex=0,this.queryParamsOnly=!1,this.isTransition=!0,i)return this.promise=r.Promise.reject(i),void(this.error=i)
if(this.isCausedByAbortingTransition=!!o,this.isCausedByInitialTransition=o&&(o.isCausedByInitialTransition||0===o.sequence),this.isCausedByAbortingReplaceTransition=o&&"replace"==o.urlMethod&&(!o.isCausedByAbortingTransition||o.isCausedByAbortingReplaceTransition),n){for(this.params=n.params,this.queryParams=n.queryParams,this.handlerInfos=n.handlerInfos,(s=n.handlerInfos.length)&&(this.targetName=n.handlerInfos[s-1].name),a=0;a<s&&(l=n.handlerInfos[a]).isResolved;++a)this.pivotHandler=l.handler
this.sequence=e.currentSequence++,this.promise=n.resolve(function(){if(u.isAborted)return r.Promise.reject(void 0,h("Transition aborted - reject"))},this).catch(function(e){return e.wasAborted||u.isAborted?r.Promise.reject(E(u)):(u.trigger("error",e.error,u,e.handlerWithError),u.abort(),r.Promise.reject(e.error))},h("Handle Abort"))}else this.promise=r.Promise.resolve(this.state),this.params={}}return e.prototype.isExiting=function(e){var t,n,r,i=this.handlerInfos
for(t=0,n=i.length;t<n;++t)if((r=i[t]).name===e||r.handler===e)return!1
return!0},e.prototype.then=function(e,t,n){return this.promise.then(e,t,n)},e.prototype.catch=function(e,t){return this.promise.catch(e,t)},e.prototype.finally=function(e,t){return this.promise.finally(e,t)},e.prototype.abort=function(){return this.isAborted?this:(u(this.router,this.sequence,this.targetName+": transition was aborted"),this.intent.preTransitionState=this.router.state,this.isAborted=!0,this.isActive=!1,this.router.activeTransition=null,this)},e.prototype.retry=function(){this.abort()
var e=this.router.transitionByIntent(this.intent,!1)
return null!==this.urlMethod&&e.method(this.urlMethod),e},e.prototype.method=function(e){return this.urlMethod=e,this},e.prototype.trigger=function(e){var t=i.call(arguments)
"boolean"==typeof e?t.shift():e=!1,d(this.router,this.state.handlerInfos.slice(0,this.resolveIndex+1),e,t)},e.prototype.followRedirects=function(){var e=this.router
return this.promise.catch(function(t){return e.activeTransition?e.activeTransition.followRedirects():r.Promise.reject(t)})},e.prototype.toString=function(){return"Transition (sequence "+this.sequence+")"},e.prototype.log=function(e){u(this.router,this.sequence,e)},e}()
function E(e){return u(e.router,e.sequence,"detected abort."),new b}y.prototype.send=y.prototype.trigger
var T=function(){this.data=this.data||{}},_=Object.freeze({}),A=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
for(var t in this._handler=_,this._handlerPromise=null,this.factory=null,this.name=e.name,e)"handler"===t?this._processHandler(e.handler):this[t]=e[t]}return e.prototype.getHandler=function(){},e.prototype.fetchHandler=function(){var e=this.getHandler(this.name)
return this._processHandler(e)},e.prototype._processHandler=function(e){var t,n=this
return this.handlerPromise=r.Promise.resolve(e),("object"==typeof(t=e)&&null!==t||"function"==typeof t)&&"function"==typeof t.then?(this.handlerPromise=this.handlerPromise.then(function(e){return n.updateHandler(e)}),this.handler=void 0):e?this.updateHandler(e):void 0},e.prototype.log=function(e,t){e.log&&e.log(this.name+": "+t)},e.prototype.promiseLabel=function(e){return h("'"+this.name+"' "+e)},e.prototype.getUnresolved=function(){return this},e.prototype.serialize=function(){return this.params||{}},e.prototype.updateHandler=function(e){return e._handlerName=this.name,this.handler=e},e.prototype.resolve=function(e,t){var n=this.checkForAbort.bind(this,e),i=this.runBeforeModelHook.bind(this,t),o=this.getModel.bind(this,t),s=this.runAfterModelHook.bind(this,t),a=this.becomeResolved.bind(this,t)
return r.Promise.resolve(this.handlerPromise,this.promiseLabel("Start handler")).then(n,null,this.promiseLabel("Check for abort")).then(i,null,this.promiseLabel("Before model")).then(n,null,this.promiseLabel("Check if aborted during 'beforeModel' hook")).then(o,null,this.promiseLabel("Model")).then(n,null,this.promiseLabel("Check if aborted in 'model' hook")).then(s,null,this.promiseLabel("After model")).then(n,null,this.promiseLabel("Check if aborted in 'afterModel' hook")).then(a,null,this.promiseLabel("Become resolved"))},e.prototype.runBeforeModelHook=function(e){return e.trigger&&e.trigger(!0,"willResolveModel",e,this.handler),this.runSharedModelHook(e,"beforeModel",[])},e.prototype.runAfterModelHook=function(e,t){var n=this.name
return this.stashResolvedModel(e,t),this.runSharedModelHook(e,"afterModel",[t]).then(function(){return e.resolvedModels[n]},null,this.promiseLabel("Ignore fulfillment value and return model value"))},e.prototype.runSharedModelHook=function(e,t,n){this.log(e,"calling "+t+" hook"),this.queryParams&&n.push(this.queryParams),n.push(e)
var i=function(e,t,n){var r=m(e,t)
if(r)return 0===n.length?e[r].call(e):1===n.length?e[r].call(e,n[0]):2===n.length?e[r].call(e,n[0],n[1]):e[r].apply(e,n)}(this.handler,t,n)
return i&&i.isTransition&&(i=null),r.Promise.resolve(i,this.promiseLabel("Resolve value returned from one of the model hooks"))},e.prototype.getModel=function(){},e.prototype.checkForAbort=function(e,t){return r.Promise.resolve(e(),this.promiseLabel("Check for abort")).then(function(){return t},null,this.promiseLabel("Ignore fulfillment value and continue"))},e.prototype.stashResolvedModel=function(e,t){e.resolvedModels=e.resolvedModels||{},e.resolvedModels[this.name]=t},e.prototype.becomeResolved=function(e,t){var n=this.serialize(t)
return e&&(this.stashResolvedModel(e,t),e.params=e.params||{},e.params[this.name]=n),this.factory("resolved",{context:t,name:this.name,handler:this.handler,params:n})},e.prototype.shouldSupercede=function(e){if(!e)return!0
var t=e.context===this.context
return e.name!==this.name||this.hasOwnProperty("context")&&!t||this.hasOwnProperty("params")&&!function(e,t){if(!e^!t)return!1
if(!e)return!0
for(var n in e)if(e.hasOwnProperty(n)&&e[n]!==t[n])return!1
return!0}(this.params,e.params)},(0,t.createClass)(e,[{key:"handler",get:function(){return this._handler!==_?this._handler:this.fetchHandler()},set:function(e){return this._handler=e}},{key:"handlerPromise",get:function(){return null!==this._handlerPromise?this._handlerPromise:(this.fetchHandler(),this._handlerPromise)},set:function(e){return this._handlerPromise=e,e}}]),e}()
A.prototype.context=null
var C=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.isResolved=!0,r}return(0,t.inherits)(n,e),n.prototype.resolve=function(e,t){return t&&t.resolvedModels&&(t.resolvedModels[this.name]=this.context),r.Promise.resolve(this,this.promiseLabel("Resolve"))},n.prototype.getUnresolved=function(){return this.factory("param",{name:this.name,handler:this.handler,params:this.params})},n}(A),S=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.names=r.names||[],r}return(0,t.inherits)(n,e),n.prototype.getModel=function(e){return this.log(e,this.name+": resolving provided model"),r.Promise.resolve(this.context)},n.prototype.serialize=function(e){var t=e||this.context,n=this.names,r={}
if(c(t))return r[n[0]]=t,r
if(this.serializer)return this.serializer.call(null,t,n)
if(this.handler&&this.handler.serialize)return this.handler.serialize(t,n)
if(1===n.length){var i=n[0]
return/_id$/.test(i)?r[i]=t.id:r[i]=t,r}},n}(A),w=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.params=r.params||{},r}return(0,t.inherits)(n,e),n.prototype.getModel=function(e){var t=this.params
e&&e.queryParams&&(s(t={},this.params),t.queryParams=e.queryParams)
var n=this.handler,r=m(n,"deserialize")||m(n,"model")
return this.runSharedModelHook(e,r,[t])},n}(A)
function R(e,t){var n=new(0,R.klasses[e])(t||{})
return n.factory=R,n}R.klasses={resolved:C,param:w,object:S}
var x=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.name=n.name,r.pivotHandler=n.pivotHandler,r.contexts=n.contexts||[],r.queryParams=n.queryParams,r}return(0,t.inherits)(n,e),n.prototype.applyToState=function(e,t,n,r,i){var o=a([this.name].concat(this.contexts))[0],s=t.handlersFor(o[0]),l=s[s.length-1].handler
return this.applyToHandlers(e,s,n,l,r,null,i)},n.prototype.applyToHandlers=function(e,t,n,r,i,o,a){var l,u,c,p,d,f,h,m,g,b=new v,y=this.contexts.slice(0),E=t.length
if(this.pivotHandler)for(l=0,u=t.length;l<u;++l)if(t[l].handler===this.pivotHandler._handlerName){E=l
break}for(l=t.length-1;l>=0;--l)p=(c=t[l]).handler,d=e.handlerInfos[l],f=null,c.names.length>0?l>=E?f=this.createParamHandlerInfo(p,n,c.names,y,d):(h=a(p),f=this.getHandlerInfoForDynamicSegment(p,n,c.names,y,d,r,l,h)):f=this.createParamHandlerInfo(p,n,c.names,y,d),o&&(f=f.becomeResolved(null,f.context),m=d&&d.context,c.names.length>0&&f.context===m&&(f.params=d&&d.params),f.context=m),g=d,(l>=E||f.shouldSupercede(d))&&(E=Math.min(l,E),g=f),i&&!o&&(g=g.becomeResolved(null,g.context)),b.handlerInfos.unshift(g)
if(y.length>0)throw new Error("More context objects were passed than there are dynamic segments for the route: "+r)
return i||this.invalidateChildren(b.handlerInfos,E),s(b.queryParams,this.queryParams||{}),b},n.prototype.invalidateChildren=function(e,t){var n,r,i
for(n=t,r=e.length;n<r;++n)i=e[n],e[n]=i.getUnresolved()},n.prototype.getHandlerInfoForDynamicSegment=function(e,t,n,r,i,o,s,a){var l,u
if(r.length>0){if(c(l=r[r.length-1]))return this.createParamHandlerInfo(e,t,n,r,i)
r.pop()}else{if(i&&i.name===e)return i
if(!this.preTransitionState)return i
l=(u=this.preTransitionState.handlerInfos[s])&&u.context}return R("object",{name:e,getHandler:t,serializer:a,context:l,names:n})},n.prototype.createParamHandlerInfo=function(e,t,n,r,i){for(var o,s,a,l={},u=n.length;u--;)if(o=i&&e===i.name&&i.params||{},s=r[r.length-1],a=n[u],c(s))l[a]=""+r.pop()
else{if(!o.hasOwnProperty(a))throw new Error("You didn't provide enough string/numeric parameters to satisfy all of the dynamic segments for route "+e)
l[a]=o[a]}return R("param",{name:e,getHandler:t,params:l})},n}(T)
function O(e){if(!(this instanceof O))return new O(e)
var t=Error.call(this,e)
Error.captureStackTrace?Error.captureStackTrace(this,O):this.stack=t.stack,this.description=t.description,this.fileName=t.fileName,this.lineNumber=t.lineNumber,this.message=t.message||"UnrecognizedURL",this.name="UnrecognizedURLError",this.number=t.number,this.code=t.code}O.prototype=Object.create(Error.prototype)
var N=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.url=n.url,r}return(0,t.inherits)(n,e),n.prototype.applyToState=function(e,t,n){var r,i,o,a,l,u,c=new v,p=t.recognize(this.url)
if(!p)throw new O(this.url)
var d=!1,f=this.url
function h(e){if(e&&e.inaccessibleByURL)throw new O(f)
return e}for(l=0,u=p.length;l<u;++l)(o=(i=R("param",{name:(r=p[l]).handler,getHandler:n,params:r.params})).handler)?h(o):i.handlerPromise=i.handlerPromise.then(h),a=e.handlerInfos[l],d||i.shouldSupercede(a)?(d=!0,c.handlerInfos[l]=i):c.handlerInfos[l]=a
return s(c.queryParams,p.queryParams),c},n}(T),L=Array.prototype.pop,k=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.getHandler=e.getHandler||this.getHandler,this.getSerializer=e.getSerializer||this.getSerializer,this.updateURL=e.updateURL||this.updateURL,this.replaceURL=e.replaceURL||this.replaceURL,this.didTransition=e.didTransition||this.didTransition,this.willTransition=e.willTransition||this.willTransition,this.delegate=e.delegate||this.delegate,this.triggerEvent=e.triggerEvent||this.triggerEvent,this.log=e.log||this.log,this.dslCallBacks=[],this.state=void 0,this.activeTransition=void 0,this._changedQueryParams=void 0,this.oldState=void 0,this.currentHandlerInfos=void 0,this.currentSequence=0,this.recognizer=new n.default,this.reset()}return e.prototype.map=function(e){this.recognizer.delegate=this.delegate,this.recognizer.map(e,function(e,t){var n,r,i
for(n=t.length-1,r=!0;n>=0&&r;--n)i=t[n],e.add(t,{as:i.handler}),r="/"===i.path||""===i.path||".index"===i.handler.slice(-6)})},e.prototype.hasRoute=function(e){return this.recognizer.hasRoute(e)},e.prototype.getHandler=function(){},e.prototype.getSerializer=function(){},e.prototype.queryParamsTransition=function(e,t,n,r){var i,o=this
return I(this,r,e),!t&&this.activeTransition?this.activeTransition:((i=new y(this)).queryParamsOnly=!0,n.queryParams=H(this,r.handlerInfos,r.queryParams,i),i.promise=i.promise.then(function(e){return M(i,n),o.didTransition&&o.didTransition(o.currentHandlerInfos),e},null,h("Transition complete")),i)},e.prototype.transitionByIntent=function(e){try{return function(e,t){var n,i=!!this.activeTransition,o=i?this.activeTransition.state:this.state,s=e.applyToState(o,this.recognizer,this.getHandler,t,this.getSerializer),a=f(o.queryParams,s.queryParams)
if(j(s.handlerInfos,o.handlerInfos))return a&&(n=this.queryParamsTransition(a,i,o,s))?(n.queryParamsOnly=!0,n):this.activeTransition||new y(this)
if(t)return void D(this,s)
n=new y(this,e,s,void 0,this.activeTransition),function(e,t){var n,r
if(e.length!==t.length)return!1
for(n=0,r=e.length;n<r;++n){if(e[n].name!==t[n].name)return!1
if(!B(e[n].params,t[n].params))return!1}return!0}(s.handlerInfos,o.handlerInfos)&&(n.queryParamsOnly=!0)
this.activeTransition&&this.activeTransition.abort()
this.activeTransition=n,n.promise=n.promise.then(function(e){return function(e,t){var n,i,o
try{return u(e.router,e.sequence,"Resolved all models on destination route; finalizing transition."),n=e.router,i=t.handlerInfos,D(n,t,e),e.isAborted?(n.state.handlerInfos=n.currentHandlerInfos,r.Promise.reject(E(e))):(M(e,t,e.intent.url),e.isActive=!1,n.activeTransition=null,d(n,n.currentHandlerInfos,!0,["didTransition"]),n.didTransition&&n.didTransition(n.currentHandlerInfos),u(n,e.sequence,"TRANSITION COMPLETE."),i[i.length-1].handler)}catch(t){throw t instanceof b||(o=e.state.handlerInfos,e.trigger(!0,"error",t,e,o[o.length-1].handler),e.abort()),t}}(n,e.state)},null,h("Settle transition promise when transition is finalized")),i||function(e,t,n){var r,i,o,s,a=e.state.handlerInfos,l=[]
for(i=a.length,r=0;r<i&&(o=a[r],(s=t.handlerInfos[r])&&o.name===s.name);r++)s.isResolved||l.push(o)
d(e,a,!0,["willTransition",n]),e.willTransition&&e.willTransition(a,t.handlerInfos,n)}(this,s,n)
return I(this,s,a),n}.apply(this,arguments)}catch(t){return new y(this,e,null,t)}},e.prototype.reset=function(){this.state&&p(this.state.handlerInfos.slice().reverse(),function(e){g(e.handler,"exit")}),this.oldState=void 0,this.state=new v,this.currentHandlerInfos=null},e.prototype.handleURL=function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,r=t[0]
return"/"!==r.charAt(0)&&(t[0]="/"+r),F(this,t).method(null)},e.prototype.updateURL=function(){throw new Error("updateURL is not implemented")},e.prototype.replaceURL=function(e){this.updateURL(e)},e.prototype.transitionTo=function(){return F(this,arguments)},e.prototype.intermediateTransitionTo=function(){return F(this,arguments,!0)},e.prototype.refresh=function(e){var t=this.activeTransition,n=t?t.state:this.state,r=n.handlerInfos
u(this,"Starting a refresh transition")
var i=new x({name:r[r.length-1].name,pivotHandler:e||r[0].handler,contexts:[],queryParams:this._changedQueryParams||n.queryParams||{}}),o=this.transitionByIntent(i,!1)
return t&&"replace"===t.urlMethod&&o.method(t.urlMethod),o},e.prototype.replaceWith=function(){return F(this,arguments).method("replace")},e.prototype.generate=function(e){var t,n,r=a(i.call(arguments,1)),o=r[0],l=r[1],u=new x({name:e,contexts:o}).applyToState(this.state,this.recognizer,this.getHandler,null,this.getSerializer),c={}
for(t=0,n=u.handlerInfos.length;t<n;++t)s(c,u.handlerInfos[t].serialize())
return c.queryParams=l,this.recognizer.generate(e,c)},e.prototype.applyIntent=function(e,t){var n=new x({name:e,contexts:t}),r=this.activeTransition&&this.activeTransition.state||this.state
return n.applyToState(r,this.recognizer,this.getHandler,null,this.getSerializer)},e.prototype.isActiveIntent=function(e,t,n,r){var i,o=r||this.state,a=o.handlerInfos
if(!a.length)return!1
var l=a[a.length-1].name,u=this.recognizer.handlersFor(l),c=0
for(i=u.length;c<i&&a[c].name!==e;++c);if(c===u.length)return!1
var p=new v
p.handlerInfos=a.slice(0,c+1),u=u.slice(0,c+1)
var d=j(new x({name:l,contexts:t}).applyToHandlers(p,u,this.getHandler,l,!0,!0,this.getSerializer).handlerInfos,p.handlerInfos)
if(!n||!d)return d
var h={}
s(h,n)
var m=o.queryParams
for(var g in m)m.hasOwnProperty(g)&&h.hasOwnProperty(g)&&(h[g]=m[g])
return d&&!f(h,n)},e.prototype.isActive=function(e){for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var t,n,r,i=a(n)
return this.isActiveIntent(e,i[0],i[1])},e.prototype.trigger=function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
d(this,this.currentHandlerInfos,!1,t)},e}()
function I(e,t,n){n&&(e._changedQueryParams=n.all,d(e,t.handlerInfos,!0,["queryParamsDidChange",n.changed,n.all,n.removed]),e._changedQueryParams=null)}function D(e,t,n){var r,i,o,s=function(e,t){var n,r,i,o,s,a=e.handlerInfos,l=t.handlerInfos,u={updatedContext:[],exited:[],entered:[],unchanged:[],reset:void 0},c=!1
for(o=0,s=l.length;o<s;o++)n=a[o],r=l[o],n&&n.handler===r.handler||(i=!0),i?(u.entered.push(r),n&&u.exited.unshift(n)):c||n.context!==r.context?(c=!0,u.updatedContext.push(r)):u.unchanged.push(n)
for(o=l.length,s=a.length;o<s;o++)u.exited.unshift(a[o])
return u.reset=u.updatedContext.slice(),u.reset.reverse(),u}(e.state,t)
for(r=0,i=s.exited.length;r<i;r++)delete(o=s.exited[r].handler).context,g(o,"reset",!0,n),g(o,"exit",n)
var a=e.oldState=e.state
e.state=t
var l=e.currentHandlerInfos=s.unchanged.slice()
try{for(r=0,i=s.reset.length;r<i;r++)g(o=s.reset[r].handler,"reset",!1,n)
for(r=0,i=s.updatedContext.length;r<i;r++)P(l,s.updatedContext[r],!1,n)
for(r=0,i=s.entered.length;r<i;r++)P(l,s.entered[r],!0,n)}catch(t){throw e.state=a,e.currentHandlerInfos=a.handlerInfos,t}e.state.queryParams=H(e,l,t.queryParams,n)}function P(e,t,n,r){var i=t.handler,o=t.context
function s(i){if(n&&g(i,"enter",r),r&&r.isAborted)throw new b
if(i.context=o,g(i,"contextDidChange"),g(i,"setup",o,r),r&&r.isAborted)throw new b
e.push(t)}return i?s(i):t.handlerPromise=t.handlerPromise.then(s),!0}function M(e,t){var n,r,i,o,a,l,u,c=e.urlMethod
if(c){var p=e.router,d=t.handlerInfos,f=d[d.length-1].name,h={}
for(n=d.length-1;n>=0;--n)s(h,(r=d[n]).params),r.handler.inaccessibleByURL&&(c=null)
c&&(h.queryParams=e._visibleQueryParams||t.queryParams,i=p.recognizer.generate(f,h),o=e.isCausedByInitialTransition,a="replace"===c&&!e.isCausedByAbortingTransition,l=e.queryParamsOnly&&"replace"===c,u="replace"===c&&e.isCausedByAbortingReplaceTransition,o||a||l||u?p.replaceURL(i):p.updateURL(i))}}function F(e,t,n){var r,o,s=t[0]||"/",a=t[t.length-1],l={}
return a&&a.hasOwnProperty("queryParams")&&(l=L.call(t).queryParams),0===t.length?(u(e,"Updating query params"),r=e.state.handlerInfos,o=new x({name:r[r.length-1].name,contexts:[],queryParams:l})):"/"===s.charAt(0)?(u(e,"Attempting URL transition to "+s),o=new N({url:s})):(u(e,"Attempting transition to "+s),o=new x({name:t[0],contexts:i.call(t,1),queryParams:l})),e.transitionByIntent(o,n)}function j(e,t){var n,r
if(e.length!==t.length)return!1
for(n=0,r=e.length;n<r;++n)if(e[n]!==t[n])return!1
return!0}function B(e,t){if(!e&&!t)return!0
if(!e&&t||e&&!t)return!1
var n,r,i,o=Object.keys(e),s=Object.keys(t)
if(o.length!==s.length)return!1
for(n=0,r=o.length;n<r;++n)if(e[i=o[n]]!==t[i])return!1
return!0}function H(e,t,n,r){for(var i in n)n.hasOwnProperty(i)&&null===n[i]&&delete n[i]
var o,s,a,l=[]
d(e,t,!0,["finalizeQueryParamChange",n,l,r]),r&&(r._visibleQueryParams={})
var u={}
for(o=0,s=l.length;o<s;++o)u[(a=l[o]).key]=a.value,r&&!1!==a.visible&&(r._visibleQueryParams[a.key]=a.value)
return u}e.Transition=y,e.default=k}),e("rsvp",["exports","ember-babel","node-module"],function(e,t,n){"use strict"
function r(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}e.filter=e.async=e.map=e.reject=e.resolve=e.off=e.on=e.configure=e.denodeify=e.defer=e.rethrow=e.hashSettled=e.hash=e.race=e.allSettled=e.all=e.EventTarget=e.Promise=e.cast=e.asap=void 0
var i,o={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var n=r(this),i=n[e]
i||(i=n[e]=[]),-1===i.indexOf(t)&&i.push(t)},off:function(e,t){var n=r(this)
if(t){var i=n[e],o=i.indexOf(t);-1!==o&&i.splice(o,1)}else n[e]=[]},trigger:function(e,t,n){var i,o=r(this)[e]
if(o)for(void 0,i=0;i<o.length;i++)(0,o[i])(t,n)}},s={instrument:!1}
function a(e,t){if(2!==arguments.length)return s[e]
s[e]=t}o.mixin(s)
var l=[]
function u(e,t,n){1===l.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:n&&n._id,label:t._label,timeStamp:Date.now(),error:s["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout(function(){var e,t,n
for(e=0;e<l.length;e++)(n=(t=l[e]).payload).guid=n.key+n.id,n.childGuid=n.key+n.childId,n.error&&(n.stack=n.error.stack),s.trigger(t.name,t.payload)
l.length=0},50)}function c(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var n=new this(p,t)
return T(n,e),n}function p(){}var d=void 0,f=1,h=2,m={error:null}
function g(e){try{return e.then}catch(e){return m.error=e,m}}var v=void 0
function b(){var e
try{return e=v,v=null,e.apply(this,arguments)}catch(e){return m.error=e,m}}function y(e){return v=e,b}function E(e,t,n){var r
t.constructor===e.constructor&&n===x&&e.constructor.resolve===c?function(e,t){t._state===f?A(e,t._result):t._state===h?(t._onError=null,C(e,t._result)):S(t,void 0,function(n){t===n?A(e,n):T(e,n)},function(t){return C(e,t)})}(e,t):n===m?(r=m.error,m.error=null,C(e,r)):"function"==typeof n?function(e,t,n){s.async(function(e){var r,i=!1,o=y(n).call(t,function(n){i||(i=!0,t===n?A(e,n):T(e,n))},function(t){i||(i=!0,C(e,t))},"Settle: "+(e._label||" unknown promise"))
i||o!==m||(i=!0,r=m.error,m.error=null,C(e,r))},e)}(e,t,n):A(e,t)}function T(e,t){var n,r
e===t?A(e,t):(r=typeof(n=t),null===n||"object"!==r&&"function"!==r?A(e,t):E(e,t,g(t)))}function _(e){e._onError&&e._onError(e._result),w(e)}function A(e,t){e._state===d&&(e._result=t,e._state=f,0===e._subscribers.length?s.instrument&&u("fulfilled",e):s.async(w,e))}function C(e,t){e._state===d&&(e._state=h,e._result=t,s.async(_,e))}function S(e,t,n,r){var i=e._subscribers,o=i.length
e._onError=null,i[o]=t,i[o+f]=n,i[o+h]=r,0===o&&e._state&&s.async(w,e)}function w(e){var t,n=e._subscribers,r=e._state
if(s.instrument&&u(r===f?"fulfilled":"rejected",e),0!==n.length){var i=void 0,o=void 0,a=e._result
for(t=0;t<n.length;t+=3)i=n[t],o=n[t+r],i?R(r,i,o,a):o(a)
e._subscribers.length=0}}function R(e,t,n,r){var i,o="function"==typeof n,s=void 0
s=o?y(n)(r):r,t._state!==d||(s===t?C(t,new TypeError("A promises callback cannot return that same promise.")):s===m?(i=m.error,m.error=null,C(t,i)):o?T(t,s):e===f?A(t,s):e===h&&C(t,s))}function x(e,t,n){var r,i=this._state
if(i===f&&!e||i===h&&!t)return s.instrument&&u("chained",this,this),this
this._onError=null
var o=new this.constructor(p,n),a=this._result
return s.instrument&&u("chained",this,o),i===d?S(this,o,e,t):(r=i===f?e:t,s.async(function(){return R(i,o,r,a)})),o}var O=function(){function e(e,t,n,r){this._instanceConstructor=e,this.promise=new e(p,r),this._abortOnReject=n,this._isUsingOwnPromise=e===I,this._isUsingOwnResolve=e.resolve===c,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var n=t.length||0
this.length=n,this._remaining=n,this._result=new Array(n),this._enumerate(t)},e.prototype._enumerate=function(e){var t,n=this.length,r=this.promise
for(t=0;r._state===d&&t<n;t++)this._eachEntry(e[t],t,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){var e
0===this._remaining&&(e=this._result,A(this.promise,e),this._result=null)},e.prototype._settleMaybeThenable=function(e,t,n){var r,i,o=this._instanceConstructor
this._isUsingOwnResolve?(r=g(e))===x&&e._state!==d?(e._onError=null,this._settledAt(e._state,t,e._result,n)):"function"!=typeof r?this._settledAt(f,t,e,n):this._isUsingOwnPromise?(E(i=new o(p),e,r),this._willSettleAt(i,t,n)):this._willSettleAt(new o(function(t){return t(e)}),t,n):this._willSettleAt(o.resolve(e),t,n)},e.prototype._eachEntry=function(e,t,n){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,n):this._setResultAt(f,t,e,n)},e.prototype._settledAt=function(e,t,n,r){var i=this.promise
i._state===d&&(this._abortOnReject&&e===h?C(i,n):(this._setResultAt(e,t,n,r),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,n){this._remaining--,this._result[t]=n},e.prototype._willSettleAt=function(e,t,n){var r=this
S(e,void 0,function(e){return r._settledAt(f,t,e,n)},function(e){return r._settledAt(h,t,e,n)})},e}()
function N(e,t,n){this._remaining--,this._result[t]=e===f?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}var L="rsvp_"+Date.now()+"-",k=0
var I=function(){function e(t,n){this._id=k++,this._label=n,this._state=void 0,this._result=void 0,this._subscribers=[],s.instrument&&u("created",this),p!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var n=!1
try{t(function(t){n||(n=!0,T(e,t))},function(t){n||(n=!0,C(e,t))})}catch(t){C(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
s.after(function(){t._onError&&s.trigger("error",e,t._label)})},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var n=this.constructor
return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})},t)},e}()
function D(e,t){return{then:function(n,r){return e.call(t,n,r)}}}function P(e,n){var r=function(){var t,r,i,o,s=arguments.length,a=new Array(s+1),l=!1
for(t=0;t<s;++t){if(r=arguments[t],!l){if((l=F(r))===m)return i=m.error,m.error=null,C(o=new I(p),i),o
l&&!0!==l&&(r=D(l,r))}a[t]=r}var u=new I(p)
return a[s]=function(e,t){e?C(u,e):void 0===n?T(u,t):!0===n?T(u,function(e){var t,n=e.length,r=new Array(n-1)
for(t=1;t<n;t++)r[t-1]=e[t]
return r}(arguments)):Array.isArray(n)?T(u,function(e,t){var n,r,i={},o=e.length,s=new Array(o)
for(n=0;n<o;n++)s[n]=e[n]
for(r=0;r<t.length;r++)i[t[r]]=s[r+1]
return i}(arguments,n)):T(u,t)},l?function(e,t,n,r){return I.all(t).then(function(t){return M(e,t,n,r)})}(u,a,e,this):M(u,a,e,this)}
return(0,t.defaults)(r,e),r}function M(e,t,n,r){var i
return y(n).apply(r,t)===m&&(i=m.error,m.error=null,C(e,i)),e}function F(e){return null!==e&&"object"==typeof e&&(e.constructor===I||g(e))}function j(e,t){return I.all(e,t)}I.cast=c,I.all=function(e,t){return Array.isArray(e)?new O(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},I.race=function(e,t){var n,r=new this(p,t)
if(!Array.isArray(e))return C(r,new TypeError("Promise.race must be called with an array")),r
for(n=0;r._state===d&&n<e.length;n++)S(this.resolve(e[n]),void 0,function(e){return T(r,e)},function(e){return C(r,e)})
return r},I.resolve=c,I.reject=function(e,t){var n=new this(p,t)
return C(n,e),n},I.prototype._guidKey=L,I.prototype.then=x
var B=function(e){function n(n,r,i){return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,!1,i))}return(0,t.inherits)(n,e),n}(O)
function H(e,t){return Array.isArray(e)?new B(I,e,t).promise:I.reject(new TypeError("Promise.allSettled must be called with an array"),t)}function $(e,t){return I.race(e,t)}B.prototype._setResultAt=N
var U=function(e){function n(n,r){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3]
return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,i,o))}return(0,t.inherits)(n,e),n.prototype._init=function(e,t){this._result={},this._enumerate(t)},n.prototype._enumerate=function(e){var t,n=Object.keys(e),r=n.length,i=this.promise
this._remaining=r
var o=void 0,s=void 0
for(t=0;i._state===d&&t<r;t++)s=e[o=n[t]],this._eachEntry(s,o,!0)
this._checkFullfillment()},n}(O)
function W(e,t){return null===e||"object"!=typeof e?I.reject(new TypeError("Promise.hash must be called with an object"),t):new U(I,e,t).promise}var z=function(e){function n(n,r,i){return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,!1,i))}return(0,t.inherits)(n,e),n}(U)
function K(e,t){return null===e||"object"!=typeof e?I.reject(new TypeError("RSVP.hashSettled must be called with an object"),t):new z(I,e,!1,t).promise}function q(e){throw setTimeout(function(){throw e}),e}function V(e){var t={resolve:void 0,reject:void 0}
return t.promise=new I(function(e,n){t.resolve=e,t.reject=n},e),t}z.prototype._setResultAt=N
var G=function(e){function n(n,r,i,o){return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,!0,o,i))}return(0,t.inherits)(n,e),n.prototype._init=function(e,t,n,r,i){var o=t.length||0
this.length=o,this._remaining=o,this._result=new Array(o),this._mapFn=i,this._enumerate(t)},n.prototype._setResultAt=function(e,t,n,r){var i
r?(i=y(this._mapFn)(n,t))===m?this._settledAt(h,t,i.error,!1):this._eachEntry(i,t,!1):(this._remaining--,this._result[t]=n)},n}(O)
function Y(e,t,n){return Array.isArray(e)?"function"!=typeof t?I.reject(new TypeError("RSVP.map expects a function as a second argument"),n):new G(I,e,t,n).promise:I.reject(new TypeError("RSVP.map must be called with an array"),n)}function Q(e,t){return I.resolve(e,t)}function X(e,t){return I.reject(e,t)}var J={},Z=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype._checkFullfillment=function(){var e
0===this._remaining&&null!==this._result&&(e=this._result.filter(function(e){return e!==J}),A(this.promise,e),this._result=null)},n.prototype._setResultAt=function(e,t,n,r){var i
r?(this._result[t]=n,(i=y(this._mapFn)(n,t))===m?this._settledAt(h,t,i.error,!1):this._eachEntry(i,t,!1)):(this._remaining--,n||(this._result[t]=J))},n}(G)
function ee(e,t,n){return"function"!=typeof t?I.reject(new TypeError("RSVP.filter expects function as a second argument"),n):I.resolve(e,n).then(function(e){if(!Array.isArray(e))throw new TypeError("RSVP.filter must be called with an array")
return new Z(I,e,t,n).promise})}var te=0,ne=void 0
function re(e,t){ce[te]=e,ce[te+1]=t,2===(te+=2)&&be()}var ie="undefined"!=typeof window?window:void 0,oe=ie||{},se=oe.MutationObserver||oe.WebKitMutationObserver,ae="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),le="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function ue(){return function(){return setTimeout(pe,1)}}var ce=new Array(1e3)
function pe(){var e
for(e=0;e<te;e+=2)(0,ce[e])(ce[e+1]),ce[e]=void 0,ce[e+1]=void 0
te=0}var de,fe,he,me,ge,ve,be=void 0
ae?(ge=process.nextTick,ve=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(ve)&&"0"===ve[1]&&"10"===ve[2]&&(ge=setImmediate),be=function(){return ge(pe)}):se?(fe=0,he=new se(pe),me=document.createTextNode(""),he.observe(me,{characterData:!0}),be=function(){return me.data=fe=++fe%2}):le?((de=new MessageChannel).port1.onmessage=pe,be=function(){return de.port2.postMessage(0)}):be=void 0===ie&&"function"==typeof n.require?function(){var e
try{return e=Function("return this")().require("vertx"),void 0!==(ne=e.runOnLoop||e.runOnContext)?function(){ne(pe)}:ue()}catch(e){return ue()}}():ue(),s.async=re,s.after=function(e){return setTimeout(e,0)}
var ye=Q,Ee=function(e,t){return s.async(e,t)}
function Te(){s.on.apply(s,arguments)}function _e(){s.off.apply(s,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__)for(var Ae in i=window.__PROMISE_INSTRUMENTATION__,a("instrument",!0),i)i.hasOwnProperty(Ae)&&Te(Ae,i[Ae])
e.asap=re,e.cast=ye,e.Promise=I,e.EventTarget=o,e.all=j,e.allSettled=H,e.race=$,e.hash=W,e.hashSettled=K,e.rethrow=q,e.defer=V,e.denodeify=P,e.configure=a,e.on=Te,e.off=_e,e.resolve=Q,e.reject=X,e.map=Y,e.async=Ee,e.filter=ee,e.default={asap:re,cast:ye,Promise:I,EventTarget:o,all:j,allSettled:H,race:$,hash:W,hashSettled:K,rethrow:q,defer:V,denodeify:P,configure:a,on:Te,off:_e,resolve:Q,reject:X,map:Y,async:Ee,filter:ee}}),t("ember")}(),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){var t=function(n,r){this.id=++e.FE.ID,this.opts=e.extend(!0,{},e.extend({},t.DEFAULTS,"object"==typeof r&&r))
var i=JSON.stringify(this.opts)
e.FE.OPTS_MAPPING[i]=e.FE.OPTS_MAPPING[i]||this.id,this.sid=e.FE.OPTS_MAPPING[i],e.FE.SHARED[this.sid]=e.FE.SHARED[this.sid]||{},this.shared=e.FE.SHARED[this.sid],this.shared.count=(this.shared.count||0)+1,this.$oel=e(n),this.$oel.data("froala.editor",this),this.o_doc=n.ownerDocument,this.o_win="defaultView"in this.o_doc?this.o_doc.defaultView:this.o_doc.parentWindow
var o=e(this.o_win).scrollTop()
this.$oel.on("froala.doInit",e.proxy(function(){this.$oel.off("froala.doInit"),this.doc=this.$el.get(0).ownerDocument,this.win="defaultView"in this.doc?this.doc.defaultView:this.doc.parentWindow,this.$doc=e(this.doc),this.$win=e(this.win),this.opts.pluginsEnabled||(this.opts.pluginsEnabled=Object.keys(e.FE.PLUGINS)),this.opts.initOnClick?(this.load(e.FE.MODULES),this.$el.on("touchstart.init",function(){e(this).data("touched",!0)}),this.$el.on("touchmove.init",function(){e(this).removeData("touched")}),this.$el.on("mousedown.init touchend.init dragenter.init focus.init",e.proxy(function(t){if("touchend"==t.type&&!this.$el.data("touched"))return!0
if(1===t.which||!t.which){this.$el.off("mousedown.init touchstart.init touchmove.init touchend.init dragenter.init focus.init"),this.load(e.FE.MODULES),this.load(e.FE.PLUGINS)
var n=t.originalEvent&&t.originalEvent.originalTarget
n&&"IMG"==n.tagName&&e(n).trigger("mousedown"),void 0===this.ul&&this.destroy(),"touchend"==t.type&&this.image&&t.originalEvent&&t.originalEvent.target&&e(t.originalEvent.target).is("img")&&setTimeout(e.proxy(function(){this.image.edit(e(t.originalEvent.target))},this),100),this.ready=!0,this.events.trigger("initialized")}},this)),this.events.trigger("initializationDelayed")):(this.load(e.FE.MODULES),this.load(e.FE.PLUGINS),e(this.o_win).scrollTop(o),void 0===this.ul&&this.destroy(),this.ready=!0,this.events.trigger("initialized"))},this)),this._init()}
t.DEFAULTS={initOnClick:!1,pluginsEnabled:null},t.MODULES={},t.PLUGINS={},t.VERSION="2.8.1",t.INSTANCES=[],t.OPTS_MAPPING={},t.SHARED={},t.ID=0,t.prototype._init=function(){var t=this.$oel.prop("tagName")
this.$oel.closest("label").length
var n=e.proxy(function(){"TEXTAREA"!=t&&(this._original_html=this._original_html||this.$oel.html()),this.$box=this.$box||this.$oel,this.opts.fullPage&&(this.opts.iframe=!0),this.opts.iframe?(this.$iframe=e('<iframe src="about:blank" frameBorder="0">'),this.$wp=e("<div></div>"),this.$box.html(this.$wp),this.$wp.append(this.$iframe),this.$iframe.get(0).contentWindow.document.open(),this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"),this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"),this.$iframe.get(0).contentWindow.document.close(),this.$el=this.$iframe.contents().find("body"),this.el=this.$el.get(0),this.$head=this.$iframe.contents().find("head"),this.$html=this.$iframe.contents().find("html"),this.iframe_document=this.$iframe.get(0).contentWindow.document):(this.$el=e("<div></div>"),this.el=this.$el.get(0),this.$wp=e("<div></div>").append(this.$el),this.$box.html(this.$wp)),this.$oel.trigger("froala.doInit")},this),r=e.proxy(function(){this.$box=e("<div>"),this.$oel.before(this.$box).hide(),this._original_html=this.$oel.val(),this.$oel.parents("form").on("submit."+this.id,e.proxy(function(){this.events.trigger("form.submit")},this)),this.$oel.parents("form").on("reset."+this.id,e.proxy(function(){this.events.trigger("form.reset")},this)),n()},this),i=e.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.$el.attr("contenteditable",!0).css("outline","none").css("display","inline-block"),this.opts.multiLine=!1,this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),o=e.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),s=e.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.on("click.popup",function(e){e.preventDefault()}),this.$oel.trigger("froala.doInit")},this)
this.opts.editInPopup?s():"TEXTAREA"==t?r():"A"==t?i():"IMG"==t?o():"BUTTON"==t||"INPUT"==t?(this.opts.editInPopup=!0,this.opts.toolbarInline=!1,s()):n()},t.prototype.load=function(t){for(var n in t)if(t.hasOwnProperty(n)){if(this[n])continue
if(e.FE.PLUGINS[n]&&this.opts.pluginsEnabled.indexOf(n)<0)continue
if(this[n]=new t[n](this),this[n]._init&&(this[n]._init(),this.opts.initOnClick&&"core"==n))return!1}},t.prototype.destroy=function(){this.shared.count--,this.events.$off()
var t=this.html.get()
if(this.opts.iframe&&(this.events.disableBlur(),this.win.focus(),this.events.enableBlur()),this.events.trigger("destroy",[],!0),this.events.trigger("shared.destroy",void 0,!0),0===this.shared.count){for(var n in this.shared)this.shared.hasOwnProperty(n)&&(this.shared[n],e.FE.SHARED[this.sid][n]=null)
delete e.FE.SHARED[this.sid]}this.$oel.parents("form").off("."+this.id),this.$oel.off("click.popup"),this.$oel.removeData("froala.editor"),this.$oel.off("froalaEditor"),this.core.destroy(t),e.FE.INSTANCES.splice(e.FE.INSTANCES.indexOf(this),1)},e.fn.froalaEditor=function(n){for(var r=[],i=0;i<arguments.length;i++)r.push(arguments[i])
if("string"==typeof n){var o=[]
return this.each(function(){var t=e(this).data("froala.editor")
if(t){var i,s
if(0<n.indexOf(".")&&t[n.split(".")[0]]?(t[n.split(".")[0]]&&(i=t[n.split(".")[0]]),s=n.split(".")[1]):(i=t,s=n.split(".")[0]),!i[s])return e.error("Method "+n+" does not exist in Froala Editor.")
var a=i[s].apply(t,r.slice(1))
void 0===a?o.push(this):0===o.length&&o.push(a)}}),1==o.length?o[0]:o}if("object"==typeof n||!n)return this.each(function(){e(this).data("froala.editor")||new t(this,n)})},e.fn.froalaEditor.Constructor=t,e.FroalaEditor=t,e.FE=t,e.FE.XS=0,e.FE.SM=1,e.FE.MD=2,e.FE.LG=3,e.FE.LinkRegExCommon="[a-z\\u0080-\\u009f\\u00a1-\\uffff0-9-_.]{1,}",e.FE.LinkRegExEnd="((:[0-9]{1,5})|)(((\\/|\\?|#)[a-z\\u00a1-\\uffff0-9@?\\|!^=%&amp;/~+#-\\'*-_{}]*)|())",e.FE.LinkRegExTLD="(("+e.FE.LinkRegExCommon+")(\\.(com|net|org|edu|mil|gov|co|biz|info|me|dev)))",e.FE.LinkRegExHTTP="((ftp|http|https):\\/\\/"+e.FE.LinkRegExCommon+")",e.FE.LinkRegExAuth="((ftp|http|https):\\/\\/[\\u0021-\\uffff]{1,}@"+e.FE.LinkRegExCommon+")",e.FE.LinkRegExWWW="(www\\."+e.FE.LinkRegExCommon+"\\.[a-z0-9-]{2,24})",e.FE.LinkRegEx="("+e.FE.LinkRegExTLD+"|"+e.FE.LinkRegExHTTP+"|"+e.FE.LinkRegExWWW+"|"+e.FE.LinkRegExAuth+")"+e.FE.LinkRegExEnd,e.FE.LinkProtocols=["mailto","tel","sms","notes","data"],e.FE.MAIL_REGEX=/.+@.+\..+/i,e.FE.MODULES.helpers=function(t){function n(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!o()}function r(){return/(Android)/g.test(navigator.userAgent)&&!o()}function i(){return/(Blackberry)/g.test(navigator.userAgent)}function o(){return/(Windows Phone)/gi.test(navigator.userAgent)}function s(e){return parseInt(e,10)||0}var a,l=null
return{_init:function(){t.browser=function(){var e,t,n={},r=(t=-1,"Microsoft Internet Explorer"==navigator.appName?(e=navigator.userAgent,null!==new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(e=navigator.userAgent,null!==new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))),t)
if(0<r)n.msie=!0
else{var i=navigator.userAgent.toLowerCase(),o=/(edge)[ \/]([\w.]+)/.exec(i)||/(chrome)[ \/]([\w.]+)/.exec(i)||/(webkit)[ \/]([\w.]+)/.exec(i)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(i)||/(msie) ([\w.]+)/.exec(i)||i.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(i)||[],s=o[1]||""
o[2],o[1]&&(n[s]=!0),n.chrome?n.webkit=!0:n.webkit&&(n.safari=!0)}return n.msie&&(n.version=r),n}(),function(){function e(e,t){var i=e[t]
e[t]=function(e){var t,o=!1,s=!1
if(e&&e.match(r)){e=e.replace(r,""),this.parentNode||(n.appendChild(this),s=!0)
var a=this.parentNode
return this.id||(this.id="rootedQuerySelector_id_"+(new Date).getTime(),o=!0),t=i.call(a,"#"+this.id+" "+e),o&&(this.id=""),s&&n.removeChild(this),t}return i.call(this,e)}}var n=t.o_doc.createElement("div")
try{n.querySelectorAll(":scope *")}catch(t){var r=/^\s*:scope/gi
e(Element.prototype,"querySelector"),e(Element.prototype,"querySelectorAll"),e(HTMLElement.prototype,"querySelector"),e(HTMLElement.prototype,"querySelectorAll")}}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this
if(!t)return null
if(!document.documentElement.contains(this))return null
do{if(t.matches(e))return t
t=t.parentElement}while(null!==t)
return null})},isIOS:n,isMac:function(){return null==l&&(l=0<=navigator.platform.toUpperCase().indexOf("MAC")),l},isAndroid:r,isBlackberry:i,isWindowsPhone:o,isMobile:function(){return r()||n()||i()},isEmail:function(t){return!/^(https?:|ftps?:|)\/\//i.test(t)&&e.FE.MAIL_REGEX.test(t)},requestAnimationFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}},getPX:s,screenSize:function(){var t=e('<div class="fr-visibility-helper"></div>').appendTo("body:first")
try{var n=s(t.css("margin-left"))
return t.remove(),n}catch(t){return e.FE.LG}},isTouch:function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},sanitizeURL:function(t){return/^(https?:|ftps?:|)\/\//i.test(t)?t:/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(t)?t:new RegExp("^("+e.FE.LinkProtocols.join("|")+"):\\/\\/","i").test(t)?t:t=encodeURIComponent(t).replace(/%23/g,"#").replace(/%2F/g,"/").replace(/%25/g,"%").replace(/mailto%3A/gi,"mailto:").replace(/file%3A/gi,"file:").replace(/sms%3A/gi,"sms:").replace(/tel%3A/gi,"tel:").replace(/notes%3A/gi,"notes:").replace(/data%3Aimage/gi,"data:image").replace(/blob%3A/gi,"blob:").replace(/webkit-fake-url%3A/gi,"webkit-fake-url:").replace(/%3F/g,"?").replace(/%3D/g,"=").replace(/%26/g,"&").replace(/&amp;/g,"&").replace(/%2C/g,",").replace(/%3B/g,";").replace(/%2B/g,"+").replace(/%40/g,"@").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%7B/g,"{").replace(/%7D/g,"}")},isArray:function(e){return e&&!e.propertyIsEnumerable("length")&&"object"==typeof e&&"number"==typeof e.length},RGBToHex:function(e){function t(e){return("0"+parseInt(e,10).toString(16)).slice(-2)}try{return e&&"transparent"!==e?/^#[0-9A-F]{6}$/i.test(e)?e:("#"+t((e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+t(e[2])+t(e[3])).toUpperCase():""}catch(e){return null}},HEXtoRGB:function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r})
var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)
return t?"rgb("+parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16)+")":""},isURL:function(t){return!!/^(https?:|ftps?:|)\/\//i.test(t)&&(t=String(t).replace(/</g,"%3C").replace(/>/g,"%3E").replace(/"/g,"%22").replace(/ /g,"%20"),new RegExp("^"+e.FE.LinkRegExHTTP+e.FE.LinkRegExEnd+"$","gi").test(t))},getAlignment:function(n){var r=(n.css("text-align")||"").replace(/-(.*)-/g,"")
if(["left","right","justify","center"].indexOf(r)<0){if(!a){var i=e('<div dir="'+("rtl"==t.opts.direction?"rtl":"auto")+'" style="text-align: '+t.$el.css("text-align")+'; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>')
e("body:first").append(i)
var o=i.find("#s1").get(0).getBoundingClientRect().left,s=i.find("#s2").get(0).getBoundingClientRect().left
i.remove(),a=o<s?"left":"right"}r=a}return r},scrollTop:function(){return t.o_win.pageYOffset?t.o_win.pageYOffset:t.o_doc.documentElement&&t.o_doc.documentElement.scrollTop?t.o_doc.documentElement.scrollTop:t.o_doc.body.scrollTop?t.o_doc.body.scrollTop:0},scrollLeft:function(){return t.o_win.pageXOffset?t.o_win.pageXOffset:t.o_doc.documentElement&&t.o_doc.documentElement.scrollLeft?t.o_doc.documentElement.scrollLeft:t.o_doc.body.scrollLeft?t.o_doc.body.scrollLeft:0},isInViewPort:function(e){var t=e.getBoundingClientRect()
return 0<=t.top&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)||t.top<=0&&t.bottom>=(window.innerHeight||document.documentElement.clientHeight)}}},e.FE.MODULES.events=function(t){var n,r={}
function i(e,t,n){d(e,t,n)}function o(n){if(void 0===n&&(n=!0),!t.$wp)return!1
if(t.helpers.isIOS()&&t.$win.get(0).focus(),t.core.hasFocus())return!1
if(!t.core.hasFocus()&&n){var r=t.$win.scrollTop()
if(t.browser.msie&&t.$box&&t.$box.css("position","fixed"),t.browser.msie&&t.$wp&&t.$wp.css("overflow","visible"),l(),t.$el.focus(),t.events.trigger("focus"),a(),t.browser.msie&&t.$box&&t.$box.css("position",""),t.browser.msie&&t.$wp&&t.$wp.css("overflow","auto"),r!=t.$win.scrollTop()&&t.$win.scrollTop(r),!t.selection.info(t.el).atStart)return!1}if(!t.core.hasFocus()||0<t.$el.find(".fr-marker").length)return!1
if(t.selection.info(t.el).atStart&&t.selection.isCollapsed()&&null!=t.html.defaultTag()){var i=t.markers.insert()
if(i&&!t.node.blockParent(i)){e(i).remove()
var o=t.$el.find(t.html.blockTagsQuery()).get(0)
o&&(e(o).prepend(e.FE.MARKERS),t.selection.restore())}else i&&e(i).remove()}}var s=!1
function a(){n=!0}function l(){n=!1}function u(){return n}function c(e,n,i){var o,s=e.split(" ")
if(1<s.length){for(var a=0;a<s.length;a++)c(s[a],n,i)
return!0}void 0===i&&(i=!1),o=0!==e.indexOf("shared.")?r[e]=r[e]||[]:t.shared._events[e]=t.shared._events[e]||[],i?o.unshift(n):o.push(n)}var p=[]
function d(e,n,r,i,o){"function"==typeof r&&(o=i,i=r,r=!1)
var s=o?t.shared.$_events:p,a=o?t.sid:t.id
r?e.on(n.split(" ").join(".ed"+a+" ")+".ed"+a,r,i):e.on(n.split(" ").join(".ed"+a+" ")+".ed"+a,i),s.push([e,n.split(" ").join(".ed"+a+" ")+".ed"+a])}function f(e){for(var t=0;t<e.length;t++)e[t][0].off(e[t][1])}function h(n,i,o){if(!t.edit.isDisabled()||o){var s,a
if(0!==n.indexOf("shared."))s=r[n]
else{if(0<t.shared.count)return!1
s=t.shared._events[n]}if(s)for(var l=0;l<s.length;l++)if(!1===(a=s[l].apply(t,i)))return!1
return!1!==(a=t.$oel.triggerHandler("froalaEditor."+n,e.merge([t],i||[])))&&a}}function m(){for(var e in r)r.hasOwnProperty(e)&&delete r[e]}function g(){for(var e in t.shared._events)t.shared._events.hasOwnProperty(e)&&delete t.shared._events[e]}return{_init:function(){t.shared.$_events=t.shared.$_events||[],t.shared._events={},t.helpers.isMobile()?(t._mousedown="touchstart",t._mouseup="touchend",t._move="touchmove",t._mousemove="touchmove"):(t._mousedown="mousedown",t._mouseup="mouseup",t._move="",t._mousemove="mousemove"),i(t.$el,"click mouseup mousedown touchstart touchend dragenter dragover dragleave dragend drop dragstart",function(e){h(e.type,[e])}),c("mousedown",function(){for(var n=0;n<e.FE.INSTANCES.length;n++)e.FE.INSTANCES[n]!=t&&e.FE.INSTANCES[n].popups&&e.FE.INSTANCES[n].popups.areVisible()&&e.FE.INSTANCES[n].$el.find(".fr-marker").remove()}),i(t.$win,t._mousedown,function(e){h("window.mousedown",[e]),a()}),i(t.$win,t._mouseup,function(e){h("window.mouseup",[e])}),i(t.$win,"cut copy keydown keyup touchmove touchend",function(e){h("window."+e.type,[e])}),i(t.$doc,"dragend drop",function(e){h("document."+e.type,[e])}),i(t.$el,"keydown keypress keyup input",function(e){h(e.type,[e])}),i(t.$el,"focus",function(e){u()&&(o(!1),!1===s&&h(e.type,[e]))}),i(t.$el,"blur",function(e){u()&&!0===s&&(h(e.type,[e]),a())}),c("focus",function(){s=!0}),c("blur",function(){s=!1}),a(),i(t.$el,"cut copy paste beforepaste",function(e){h(e.type,[e])}),c("destroy",m),c("shared.destroy",g)},on:c,trigger:h,bindClick:function(n,r,i){d(n,t._mousedown,r,function(n){var r,i
t.edit.isDisabled()||(i=e((r=n).currentTarget),t.edit.isDisabled()||t.node.hasClass(i.get(0),"fr-disabled")?r.preventDefault():"mousedown"===r.type&&1!==r.which||(t.helpers.isMobile()||r.preventDefault(),(t.helpers.isAndroid()||t.helpers.isWindowsPhone())&&0===i.parents(".fr-dropdown-menu").length&&(r.preventDefault(),r.stopPropagation()),i.addClass("fr-selected"),t.events.trigger("commands.mousedown",[i])))},!0),d(n,t._mouseup+" "+t._move,r,function(n){t.edit.isDisabled()||function(n,r){var i=e(n.currentTarget)
if(t.edit.isDisabled()||t.node.hasClass(i.get(0),"fr-disabled"))return n.preventDefault()
if(("mouseup"!==n.type||1===n.which)&&t.node.hasClass(i.get(0),"fr-selected"))if("touchmove"!=n.type){if(n.stopPropagation(),n.stopImmediatePropagation(),n.preventDefault(),!t.node.hasClass(i.get(0),"fr-selected"))return t.button.getButtons(".fr-selected",!0).removeClass("fr-selected")
if(t.button.getButtons(".fr-selected",!0).removeClass("fr-selected"),i.data("dragging")||i.attr("disabled"))return i.removeData("dragging")
var o=i.data("timeout")
o&&(clearTimeout(o),i.removeData("timeout")),r.apply(t,[n])}else i.data("timeout")||i.data("timeout",setTimeout(function(){i.data("dragging",!0)},100))}(n,i)},!0),d(n,"mousedown click mouseup",r,function(e){t.edit.isDisabled()||e.stopPropagation()},!0),c("window.mouseup",function(){t.edit.isDisabled()||(n.find(r).removeClass("fr-selected"),a())})},disableBlur:l,enableBlur:a,blurActive:u,focus:o,chainTrigger:function(n,i,o){if(!t.edit.isDisabled()||o){var s,a
if(0!==n.indexOf("shared."))s=r[n]
else{if(0<t.shared.count)return!1
s=t.shared._events[n]}if(s)for(var l=0;l<s.length;l++)void 0!==(a=s[l].apply(t,[i]))&&(i=a)
return void 0!==(a=t.$oel.triggerHandler("froalaEditor."+n,e.merge([t],[i])))&&(i=a),i}},$on:d,$off:function(){f(p),p=[],0===t.shared.count&&(f(t.shared.$_events),t.shared.$_events=[])}}},e.FE.MODULES.node=function(t){function n(e){return e&&"IFRAME"!=e.tagName?Array.prototype.slice.call(e.childNodes||[]):[]}function r(t){return!!t&&t.nodeType==Node.ELEMENT_NODE&&0<=e.FE.BLOCK_TAGS.indexOf(t.tagName.toLowerCase())}function i(e){var t={},n=e.attributes
if(n)for(var r=0;r<n.length;r++){var i=n[r]
t[i.nodeName]=i.value}return t}function o(e){for(var t="",n=i(e),r=Object.keys(n).sort(),o=0;o<r.length;o++){var s=r[o],a=n[s]
a.indexOf("'")<0&&0<=a.indexOf('"')?t+=" "+s+"='"+a+"'":0<=a.indexOf('"')&&0<=a.indexOf("'")?t+=" "+s+'="'+(a=a.replace(/"/g,"&quot;"))+'"':t+=" "+s+'="'+a+'"'}return t}function s(e){return e===t.el}return{isBlock:r,isEmpty:function(i,o){if(!i)return!0
if(i.querySelector("table"))return!1
var s=n(i)
1==s.length&&r(s[0])&&(s=n(s[0]))
for(var a=!1,l=0;l<s.length;l++){var u=s[l]
if(!(o&&t.node.hasClass(u,"fr-marker")||u.nodeType==Node.TEXT_NODE&&0===u.textContent.length)){if("BR"!=u.tagName&&0<(u.textContent||"").replace(/\u200B/gi,"").replace(/\n/g,"").length)return!1
if(a)return!1
"BR"==u.tagName&&(a=!0)}}return!(i.querySelectorAll(e.FE.VOID_ELEMENTS.join(",")).length-i.querySelectorAll("br").length||i.querySelector(t.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")||1<i.querySelectorAll(e.FE.BLOCK_TAGS.join(",")).length||i.querySelector(t.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)"))},blockParent:function(e){for(;e&&e.parentNode!==t.el&&(!e.parentNode||!t.node.hasClass(e.parentNode,"fr-inner"));)if(r(e=e.parentNode))return e
return null},deepestParent:function(n,i,o){if(void 0===i&&(i=[]),void 0===o&&(o=!0),i.push(t.el),0<=i.indexOf(n.parentNode)||n.parentNode&&t.node.hasClass(n.parentNode,"fr-inner")||n.parentNode&&0<=e.FE.SIMPLE_ENTER_TAGS.indexOf(n.parentNode.tagName)&&o)return null
for(;i.indexOf(n.parentNode)<0&&n.parentNode&&!t.node.hasClass(n.parentNode,"fr-inner")&&(e.FE.SIMPLE_ENTER_TAGS.indexOf(n.parentNode.tagName)<0||!o)&&(!r(n)||!r(n.parentNode)||!o);)n=n.parentNode
return n},rawAttributes:i,attributes:o,clearAttributes:function(e){for(var t=e.attributes,n=t.length-1;0<=n;n--){var r=t[n]
e.removeAttribute(r.nodeName)}},openTagString:function(e){return"<"+e.tagName.toLowerCase()+o(e)+">"},closeTagString:function(e){return"</"+e.tagName.toLowerCase()+">"},isFirstSibling:function e(n,r){void 0===r&&(r=!0)
for(var i=n.previousSibling;i&&r&&t.node.hasClass(i,"fr-marker");)i=i.previousSibling
return!i||i.nodeType==Node.TEXT_NODE&&""===i.textContent&&e(i)},isLastSibling:function e(n,r){void 0===r&&(r=!0)
for(var i=n.nextSibling;i&&r&&t.node.hasClass(i,"fr-marker");)i=i.nextSibling
return!i||i.nodeType==Node.TEXT_NODE&&""===i.textContent&&e(i)},isList:function(e){return!!e&&0<=["UL","OL"].indexOf(e.tagName)},isLink:function(e){return!!e&&e.nodeType==Node.ELEMENT_NODE&&"a"==e.tagName.toLowerCase()},isElement:s,contents:n,isVoid:function(t){return t&&t.nodeType==Node.ELEMENT_NODE&&0<=e.FE.VOID_ELEMENTS.indexOf((t.tagName||"").toLowerCase())},hasFocus:function(e){return e===t.doc.activeElement&&(!t.doc.hasFocus||t.doc.hasFocus())&&!!(s(e)||e.type||e.href||~e.tabIndex)},isEditable:function(e){return(!e.getAttribute||"false"!=e.getAttribute("contenteditable"))&&["STYLE","SCRIPT"].indexOf(e.tagName)<0},isDeletable:function(e){return e&&e.nodeType==Node.ELEMENT_NODE&&e.getAttribute("class")&&0<=(e.getAttribute("class")||"").indexOf("fr-deletable")},hasClass:function(t,n){return t instanceof e&&(t=t.get(0)),t&&t.classList&&t.classList.contains(n)},filter:function(e){return t.browser.msie?e:{acceptNode:e}}}},e.FE.INVISIBLE_SPACE="&#8203;",e.FE.START_MARKER='<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'+e.FE.INVISIBLE_SPACE+"</span>",e.FE.END_MARKER='<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'+e.FE.INVISIBLE_SPACE+"</span>",e.FE.MARKERS=e.FE.START_MARKER+e.FE.END_MARKER,e.FE.MODULES.markers=function(t){function n(){if(!t.$wp)return null
try{var n=t.selection.ranges(0),r=n.commonAncestorContainer
if(r!=t.el&&0===t.$el.find(r).length)return null
var i=n.cloneRange(),o=n.cloneRange()
i.collapse(!0)
var s=e('<span class="fr-marker" style="display: none; line-height: 0;">'+e.FE.INVISIBLE_SPACE+"</span>",t.doc)[0]
if(i.insertNode(s),s=t.$el.find("span.fr-marker").get(0)){for(var a=s.nextSibling;a&&a.nodeType===Node.TEXT_NODE&&0===a.textContent.length;)e(a).remove(),a=t.$el.find("span.fr-marker").get(0).nextSibling
return t.selection.clear(),t.selection.get().addRange(o),s}return null}catch(e){}}function r(){t.$el.find(".fr-marker").remove()}return{place:function(n,r,i){var o,s,a
try{var l=n.cloneRange()
if(l.collapse(r),l.insertNode(e('<span class="fr-marker" data-id="'+i+'" data-type="'+r+'" style="display: '+(t.browser.safari?"none":"inline-block")+'; line-height: 0;">'+e.FE.INVISIBLE_SPACE+"</span>",t.doc)[0]),!0===r)for(a=(o=t.$el.find('span.fr-marker[data-type="true"][data-id="'+i+'"]').get(0)).nextSibling;a&&a.nodeType===Node.TEXT_NODE&&0===a.textContent.length;)e(a).remove(),a=o.nextSibling
if(!0===r&&!n.collapsed){for(;!t.node.isElement(o.parentNode)&&!a;)e(o.parentNode).after(o),a=o.nextSibling
if(a&&a.nodeType===Node.ELEMENT_NODE&&t.node.isBlock(a)&&"HR"!==a.tagName){for(s=[a];a=s[0],(s=t.node.contents(a))[0]&&t.node.isBlock(s[0]););e(a).prepend(e(o))}}if(!1===r&&!n.collapsed){if((a=(o=t.$el.find('span.fr-marker[data-type="false"][data-id="'+i+'"]').get(0)).previousSibling)&&a.nodeType===Node.ELEMENT_NODE&&t.node.isBlock(a)&&"HR"!==a.tagName){for(s=[a];a=s[s.length-1],(s=t.node.contents(a))[s.length-1]&&t.node.isBlock(s[s.length-1]););e(a).append(e(o))}o.parentNode&&0<=["TD","TH"].indexOf(o.parentNode.tagName)&&o.parentNode.previousSibling&&!o.previousSibling&&e(o.parentNode.previousSibling).append(o)}var u=t.$el.find('span.fr-marker[data-type="'+r+'"][data-id="'+i+'"]').get(0)
return u&&(u.style.display="none"),u}catch(e){return null}},insert:n,split:function(){t.selection.isCollapsed()||t.selection.remove()
var r=t.$el.find(".fr-marker").get(0)
if(null==r&&(r=n()),null==r)return null
var i=t.node.deepestParent(r)
if(i||(i=t.node.blockParent(r))&&"LI"!=i.tagName&&(i=null),i)if(t.node.isBlock(i)&&t.node.isEmpty(i))"LI"!=i.tagName||i.parentNode.firstElementChild!=i||t.node.isEmpty(i.parentNode)?e(i).replaceWith('<span class="fr-marker"></span>'):e(i).append('<span class="fr-marker"></span>')
else if(t.cursor.isAtStart(r,i))e(i).before('<span class="fr-marker"></span>'),e(r).remove()
else if(t.cursor.isAtEnd(r,i))e(i).after('<span class="fr-marker"></span>'),e(r).remove()
else{for(var o=r,s="",a="";o=o.parentNode,s+=t.node.closeTagString(o),a=t.node.openTagString(o)+a,o!=i;);e(r).replaceWith('<span id="fr-break"></span>')
var l=t.node.openTagString(i)+e(i).html()+t.node.closeTagString(i)
l=l.replace(/<span id="fr-break"><\/span>/g,s+'<span class="fr-marker"></span>'+a),e(i).replaceWith(l)}return t.$el.find(".fr-marker").get(0)},insertAtPoint:function(e){var i,o=e.clientX,s=e.clientY
r()
var a=null
if(void 0!==t.doc.caretPositionFromPoint?(i=t.doc.caretPositionFromPoint(o,s),(a=t.doc.createRange()).setStart(i.offsetNode,i.offset),a.setEnd(i.offsetNode,i.offset)):void 0!==t.doc.caretRangeFromPoint&&(i=t.doc.caretRangeFromPoint(o,s),(a=t.doc.createRange()).setStart(i.startContainer,i.startOffset),a.setEnd(i.startContainer,i.startOffset)),null!==a&&void 0!==t.win.getSelection){var l=t.win.getSelection()
l.removeAllRanges(),l.addRange(a)}else if(void 0!==t.doc.body.createTextRange)try{(a=t.doc.body.createTextRange()).moveToPoint(o,s)
var u=a.duplicate()
u.moveToPoint(o,s),a.setEndPoint("EndToEnd",u),a.select()}catch(e){return!1}n()},remove:r}},e.FE.MODULES.selection=function(t){function n(){var e=""
return t.win.getSelection?e=t.win.getSelection():t.doc.getSelection?e=t.doc.getSelection():t.doc.selection&&(e=t.doc.selection.createRange().text),e.toString()}function r(){return t.win.getSelection?t.win.getSelection():t.doc.getSelection?t.doc.getSelection():t.doc.selection.createRange()}function i(e){var n=r(),i=[]
if(n&&n.getRangeAt&&n.rangeCount){i=[]
for(var o=0;o<n.rangeCount;o++)i.push(n.getRangeAt(o))}else i=t.doc.createRange?[t.doc.createRange()]:[]
return void 0!==e?i[e]:i}function o(){var e=r()
try{e.removeAllRanges?e.removeAllRanges():e.empty?e.empty():e.clear&&e.clear()}catch(e){}}function s(e,t){var n=e
return n.nodeType==Node.ELEMENT_NODE&&0<n.childNodes.length&&n.childNodes[t]&&(n=n.childNodes[t]),n.nodeType==Node.TEXT_NODE&&(n=n.parentNode),n}function a(){if(t.$wp){t.markers.remove()
var n,r,o=i(),s=[]
for(r=0;r<o.length;r++)if(o[r].startContainer!==t.doc||t.browser.msie){var a=(n=o[r]).collapsed,l=t.markers.place(n,!0,r),u=t.markers.place(n,!1,r)
void 0!==l&&l||!a||(e(".fr-marker").remove(),t.selection.setAtEnd(t.el)),t.el.normalize(),t.browser.safari&&!a&&((n=t.doc.createRange()).setStartAfter(l),n.setEndBefore(u),s.push(n))}if(t.browser.safari&&s.length)for(t.selection.clear(),r=0;r<s.length;r++)t.selection.get().addRange(s[r])}}function l(){var n,i=t.el.querySelectorAll('.fr-marker[data-type="true"]')
if(!t.$wp)return t.markers.remove(),!1
if(0===i.length)return!1
if(t.browser.msie||t.browser.edge)for(n=0;n<i.length;n++)i[n].style.display="inline-block"
t.core.hasFocus()||t.browser.msie||t.browser.webkit||t.$el.focus(),o()
var s=r()
for(n=0;n<i.length;n++){var a=e(i[n]).data("id"),l=i[n],c=t.doc.createRange(),p=t.$el.find('.fr-marker[data-type="false"][data-id="'+a+'"]');(t.browser.msie||t.browser.edge)&&p.css("display","inline-block")
var d=null
if(0<p.length){p=p[0]
try{for(var f,h=!1,m=l.nextSibling;m&&m.nodeType==Node.TEXT_NODE&&0===m.textContent.length;)m=(f=m).nextSibling,e(f).remove()
for(var g,v,b=p.nextSibling;b&&b.nodeType==Node.TEXT_NODE&&0===b.textContent.length;)b=(f=b).nextSibling,e(f).remove()
if(l.nextSibling==p||p.nextSibling==l){for(var y=l.nextSibling==p?l:p,E=y==l?p:l,T=y.previousSibling;T&&T.nodeType==Node.TEXT_NODE&&0===T.length;)T=(f=T).previousSibling,e(f).remove()
if(T&&T.nodeType==Node.TEXT_NODE)for(;T&&T.previousSibling&&T.previousSibling.nodeType==Node.TEXT_NODE;)T.previousSibling.textContent=T.previousSibling.textContent+T.textContent,T=T.previousSibling,e(T.nextSibling).remove()
for(var _=E.nextSibling;_&&_.nodeType==Node.TEXT_NODE&&0===_.length;)_=(f=_).nextSibling,e(f).remove()
if(_&&_.nodeType==Node.TEXT_NODE)for(;_&&_.nextSibling&&_.nextSibling.nodeType==Node.TEXT_NODE;)_.nextSibling.textContent=_.textContent+_.nextSibling.textContent,_=_.nextSibling,e(_.previousSibling).remove()
if(T&&(t.node.isVoid(T)||t.node.isBlock(T))&&(T=null),_&&(t.node.isVoid(_)||t.node.isBlock(_))&&(_=null),T&&_&&T.nodeType==Node.TEXT_NODE&&_.nodeType==Node.TEXT_NODE){e(l).remove(),e(p).remove()
var A=T.textContent.length
T.textContent=T.textContent+_.textContent,e(_).remove(),t.opts.htmlUntouched||t.spaces.normalize(T),c.setStart(T,A),c.setEnd(T,A),h=!0}else!T&&_&&_.nodeType==Node.TEXT_NODE?(e(l).remove(),e(p).remove(),t.opts.htmlUntouched||t.spaces.normalize(_),d=e(t.doc.createTextNode("​")),e(_).before(d),c.setStart(_,0),c.setEnd(_,0),h=!0):!_&&T&&T.nodeType==Node.TEXT_NODE&&(e(l).remove(),e(p).remove(),t.opts.htmlUntouched||t.spaces.normalize(T),d=e(t.doc.createTextNode("​")),e(T).after(d),c.setStart(T,T.textContent.length),c.setEnd(T,T.textContent.length),h=!0)}h||((t.browser.chrome||t.browser.edge)&&l.nextSibling==p?(g=u(p,c,!0)||c.setStartAfter(p),v=u(l,c,!1)||c.setEndBefore(l)):(l.previousSibling==p&&(p=(l=p).nextSibling),p.nextSibling&&"BR"===p.nextSibling.tagName||!p.nextSibling&&t.node.isBlock(l.previousSibling)||l.previousSibling&&"BR"==l.previousSibling.tagName||(l.style.display="inline",p.style.display="inline",d=e(t.doc.createTextNode("​"))),g=u(l,c,!0)||e(l).before(d)&&c.setStartBefore(l),v=u(p,c,!1)||e(p).after(d)&&c.setEndAfter(p)),"function"==typeof g&&g(),"function"==typeof v&&v())}catch(e){}}d&&d.remove()
try{s.addRange(c)}catch(e){}}t.markers.remove()}function u(n,r,i){var o,s=n.previousSibling,a=n.nextSibling
return s&&a&&s.nodeType==Node.TEXT_NODE&&a.nodeType==Node.TEXT_NODE?(o=s.textContent.length,i?(a.textContent=s.textContent+a.textContent,e(s).remove(),e(n).remove(),t.opts.htmlUntouched||t.spaces.normalize(a),function(){r.setStart(a,o)}):(s.textContent=s.textContent+a.textContent,e(a).remove(),e(n).remove(),t.opts.htmlUntouched||t.spaces.normalize(s),function(){r.setEnd(s,o)})):s&&!a&&s.nodeType==Node.TEXT_NODE?(o=s.textContent.length,i?(t.opts.htmlUntouched||t.spaces.normalize(s),function(){r.setStart(s,o)}):(t.opts.htmlUntouched||t.spaces.normalize(s),function(){r.setEnd(s,o)})):!(!a||s||a.nodeType!=Node.TEXT_NODE)&&(i?(t.opts.htmlUntouched||t.spaces.normalize(a),function(){r.setStart(a,0)}):(t.opts.htmlUntouched||t.spaces.normalize(a),function(){r.setEnd(a,0)}))}function c(){for(var e=i(),t=0;t<e.length;t++)if(!e[t].collapsed)return!1
return!0}function p(e){var n,r,i=!1,o=!1
if(t.win.getSelection){var s=t.win.getSelection()
s.rangeCount&&((r=(n=s.getRangeAt(0)).cloneRange()).selectNodeContents(e),r.setEnd(n.startContainer,n.startOffset),i=""===r.toString(),r.selectNodeContents(e),r.setStart(n.endContainer,n.endOffset),o=""===r.toString())}else t.doc.selection&&"Control"!=t.doc.selection.type&&((r=(n=t.doc.selection.createRange()).duplicate()).moveToElementText(e),r.setEndPoint("EndToStart",n),i=""===r.text,r.moveToElementText(e),r.setEndPoint("StartToEnd",n),o=""===r.text)
return{atStart:i,atEnd:o}}function d(n,r){void 0===r&&(r=!0)
var i=e(n).html()
i&&i.replace(/\u200b/g,"").length!=i.length&&e(n).html(i.replace(/\u200b/g,""))
for(var o=t.node.contents(n),s=0;s<o.length;s++)o[s].nodeType!=Node.ELEMENT_NODE?e(o[s]).remove():(d(o[s],0===s),0===s&&(r=!1))
n.nodeType==Node.TEXT_NODE?e(n).replaceWith('<span data-first="true" data-text="true"></span>'):r&&e(n).attr("data-first",!0)}function f(){return 0===e(this).find("fr-inner").length}function h(){try{if(!t.$wp)return!1
for(var e=i(0).commonAncestorContainer;e&&!t.node.isElement(e);)e=e.parentNode
return!!t.node.isElement(e)}catch(e){return!1}}function m(n,r){if(!n||0<n.getElementsByClassName("fr-marker").length)return!1
for(var i=n.firstChild;i&&(t.node.isBlock(i)||r&&!t.node.isVoid(i)&&i.nodeType==Node.ELEMENT_NODE);)i=(n=i).firstChild
n.innerHTML=e.FE.MARKERS+n.innerHTML}function g(n,r){if(!n||0<n.getElementsByClassName("fr-marker").length)return!1
for(var i=n.lastChild;i&&(t.node.isBlock(i)||r&&!t.node.isVoid(i)&&i.nodeType==Node.ELEMENT_NODE);)i=(n=i).lastChild
var o=t.doc.createElement("SPAN")
o.setAttribute("id","fr-sel-markers"),o.innerHTML=e.FE.MARKERS,n.appendChild(o)
var s=n.querySelector("#fr-sel-markers")
s.outerHTML=s.innerHTML}return{text:n,get:r,ranges:i,clear:o,element:function(){var o=r()
try{if(o.rangeCount){var s,a=i(0),l=a.startContainer
if(l.nodeType==Node.TEXT_NODE&&a.startOffset==(l.textContent||"").length&&l.nextSibling&&(l=l.nextSibling),l.nodeType==Node.ELEMENT_NODE){var u=!1
if(0<l.childNodes.length&&l.childNodes[a.startOffset]){for(s=l.childNodes[a.startOffset];s&&s.nodeType==Node.TEXT_NODE&&0===s.textContent.length;)s=s.nextSibling
if(s&&s.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=s,u=!0),!u&&1<l.childNodes.length&&0<a.startOffset&&l.childNodes[a.startOffset-1]){for(s=l.childNodes[a.startOffset-1];s&&s.nodeType==Node.TEXT_NODE&&0===s.textContent.length;)s=s.nextSibling
s&&s.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=s,u=!0)}}else!a.collapsed&&l.nextSibling&&l.nextSibling.nodeType==Node.ELEMENT_NODE&&(s=l.nextSibling)&&s.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=s,u=!0)
!u&&0<l.childNodes.length&&e(l.childNodes[0]).text().replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&["BR","IMG","HR"].indexOf(l.childNodes[0].tagName)<0&&(l=l.childNodes[0])}for(;l.nodeType!=Node.ELEMENT_NODE&&l.parentNode;)l=l.parentNode
for(var c=l;c&&"HTML"!=c.tagName;){if(c==t.el)return l
c=e(c).parent()[0]}}}catch(e){}return t.el},endElement:function(){var o=r()
try{if(o.rangeCount){var s,a=i(0),l=a.endContainer
if(l.nodeType==Node.ELEMENT_NODE){var u=!1
0<l.childNodes.length&&l.childNodes[a.endOffset]&&e(l.childNodes[a.endOffset]).text()===n()?(l=l.childNodes[a.endOffset],u=!0):!a.collapsed&&l.previousSibling&&l.previousSibling.nodeType==Node.ELEMENT_NODE?(s=l.previousSibling)&&s.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=s,u=!0):!a.collapsed&&0<l.childNodes.length&&l.childNodes[a.endOffset]&&(s=l.childNodes[a.endOffset].previousSibling).nodeType==Node.ELEMENT_NODE&&s&&s.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=s,u=!0),!u&&0<l.childNodes.length&&e(l.childNodes[l.childNodes.length-1]).text()===n()&&["BR","IMG","HR"].indexOf(l.childNodes[l.childNodes.length-1].tagName)<0&&(l=l.childNodes[l.childNodes.length-1])}for(l.nodeType==Node.TEXT_NODE&&0===a.endOffset&&l.previousSibling&&l.previousSibling.nodeType==Node.ELEMENT_NODE&&(l=l.previousSibling);l.nodeType!=Node.ELEMENT_NODE&&l.parentNode;)l=l.parentNode
for(var c=l;c&&"HTML"!=c.tagName;){if(c==t.el)return l
c=e(c).parent()[0]}}}catch(e){}return t.el},save:a,restore:l,isCollapsed:c,isFull:function(){if(c())return!1
t.selection.save()
var n,r=t.el.querySelectorAll("td, th, img, br")
for(n=0;n<r.length;n++)r[n].nextSibling&&(r[n].innerHTML='<span class="fr-mk">'+e.FE.INVISIBLE_SPACE+"</span>"+r[n].innerHTML)
var i=!1,o=p(t.el)
for(o.atStart&&o.atEnd&&(i=!0),r=t.el.querySelectorAll(".fr-mk"),n=0;n<r.length;n++)r[n].parentNode.removeChild(r[n])
return t.selection.restore(),i},inEditor:h,remove:function(){if(c())return!0
var n
a()
var r=function(t){for(var n=t.previousSibling;n&&n.nodeType==Node.TEXT_NODE&&0===n.textContent.length;){var r=n
n=n.previousSibling,e(r).remove()}return n},i=function(t){for(var n=t.nextSibling;n&&n.nodeType==Node.TEXT_NODE&&0===n.textContent.length;){var r=n
n=n.nextSibling,e(r).remove()}return n},o=t.$el.find('.fr-marker[data-type="true"]')
for(n=0;n<o.length;n++)for(var s=o[n];!(r(s)||t.node.isBlock(s.parentNode)||t.$el.is(s.parentNode)||t.node.hasClass(s.parentNode,"fr-inner"));)e(s.parentNode).before(s)
var u=t.$el.find('.fr-marker[data-type="false"]')
for(n=0;n<u.length;n++){for(var p=u[n];!(i(p)||t.node.isBlock(p.parentNode)||t.$el.is(p.parentNode)||t.node.hasClass(p.parentNode,"fr-inner"));)e(p.parentNode).after(p)
p.parentNode&&t.node.isBlock(p.parentNode)&&t.node.isEmpty(p.parentNode)&&!t.$el.is(p.parentNode)&&!t.node.hasClass(p.parentNode,"fr-inner")&&t.opts.keepFormatOnDelete&&e(p.parentNode).after(p)}if(function(){for(var n=t.$el.find(".fr-marker"),r=0;r<n.length;r++)if(e(n[r]).parentsUntil('.fr-element, [contenteditable="true"]','[contenteditable="false"]').length)return!1
return!0}()){!function n(r,i){var o=t.node.contents(r.get(0))
0<=["TD","TH"].indexOf(r.get(0).tagName)&&1==r.find(".fr-marker").length&&t.node.hasClass(o[0],"fr-marker")&&r.attr("data-del-cell",!0)
for(var s=0;s<o.length;s++){var a=o[s]
t.node.hasClass(a,"fr-marker")?i=(i+1)%2:i?0<e(a).find(".fr-marker").length?i=n(e(a),i):["TD","TH"].indexOf(a.tagName)<0&&!t.node.hasClass(a,"fr-inner")?!t.opts.keepFormatOnDelete||0<t.$el.find("[data-first]").length||t.node.isVoid(a)?e(a).remove():d(a):t.node.hasClass(a,"fr-inner")?0===e(a).find(".fr-inner").length?e(a).html("<br>"):e(a).find(".fr-inner").filter(f).html("<br>"):(e(a).empty(),e(a).attr("data-del-cell",!0)):0<e(a).find(".fr-marker").length&&(i=n(e(a),i))}return i}(t.$el,0)
var h=t.$el.find('[data-first="true"]')
if(h.length)t.$el.find(".fr-marker").remove(),h.append(e.FE.INVISIBLE_SPACE+e.FE.MARKERS).removeAttr("data-first"),h.attr("data-text")&&h.replaceWith(h.html())
else for(t.$el.find("table").filter(function(){return 0<e(this).find("[data-del-cell]").length&&e(this).find("[data-del-cell]").length==e(this).find("td, th").length}).remove(),t.$el.find("[data-del-cell]").removeAttr("data-del-cell"),o=t.$el.find('.fr-marker[data-type="true"]'),n=0;n<o.length;n++){var m=o[n],g=m.nextSibling,v=t.$el.find('.fr-marker[data-type="false"][data-id="'+e(m).data("id")+'"]').get(0)
if(v){if(m&&(!g||g!=v)){var b=t.node.blockParent(m),y=t.node.blockParent(v),E=!1,T=!1
if(b&&0<=["UL","OL"].indexOf(b.tagName)&&(E=!(b=null)),y&&0<=["UL","OL"].indexOf(y.tagName)&&(T=!(y=null)),e(m).after(v),b!=y)if(null!=b||E)if(null!=y||T||0!==e(b).parentsUntil(t.$el,"table").length)b&&y&&0===e(b).parentsUntil(t.$el,"table").length&&0===e(y).parentsUntil(t.$el,"table").length&&0===e(b).find(y).length&&0===e(y).find(b).length&&(e(b).append(e(y).html()),e(y).remove())
else{for(g=b;!g.nextSibling&&g.parentNode!=t.el;)g=g.parentNode
for(g=g.nextSibling;g&&"BR"!=g.tagName;){var _=g.nextSibling
e(b).append(g),g=_}g&&"BR"==g.tagName&&e(g).remove()}else{var A=t.node.deepestParent(m)
A?(e(A).after(e(y).html()),e(y).remove()):0===e(y).parentsUntil(t.$el,"table").length&&(e(m).next().after(e(y).html()),e(y).remove())}}}else v=e(m).clone().attr("data-type",!1),e(m).after(v)}}t.opts.keepFormatOnDelete||t.html.fillEmptyBlocks(),t.html.cleanEmptyTags(!0),t.opts.htmlUntouched||(t.clean.lists(),t.spaces.normalize())
var C=t.$el.find(".fr-marker:last").get(0),S=t.$el.find(".fr-marker:first").get(0)
void 0!==C&&void 0!==S&&!C.nextSibling&&S.previousSibling&&"BR"==S.previousSibling.tagName&&t.node.isElement(C.parentNode)&&t.node.isElement(S.parentNode)&&t.$el.append("<br>"),l()},blocks:function(){var n,o=[],a=r()
if(h()&&a.rangeCount){var l=i()
for(n=0;n<l.length;n++){var u,c=l[n],p=s(c.startContainer,c.startOffset),d=s(c.endContainer,c.endOffset);(t.node.isBlock(p)||t.node.hasClass(p,"fr-inner"))&&o.indexOf(p)<0&&o.push(p),(u=t.node.blockParent(p))&&o.indexOf(u)<0&&o.push(u)
for(var f=[],m=p;m!==d&&m!==t.el;)f.indexOf(m)<0&&m.children&&m.children.length?(f.push(m),m=m.children[0]):m.nextSibling?m=m.nextSibling:m.parentNode&&(m=m.parentNode,f.push(m)),t.node.isBlock(m)&&f.indexOf(m)<0&&o.indexOf(m)<0&&(m!==d||0<c.endOffset)&&o.push(m)
t.node.isBlock(d)&&o.indexOf(d)<0&&0<c.endOffset&&o.push(d),(u=t.node.blockParent(d))&&o.indexOf(u)<0&&o.push(u)}}for(n=o.length-1;0<n;n--)e(o[n]).find(o).length&&o.splice(n,1)
return o},info:p,setAtEnd:g,setAtStart:m,setBefore:function(n,r){void 0===r&&(r=!0)
for(var i=n.previousSibling;i&&i.nodeType==Node.TEXT_NODE&&0===i.textContent.length;)i=i.previousSibling
return i?(t.node.isBlock(i)?g(i):"BR"==i.tagName?e(i).before(e.FE.MARKERS):e(i).after(e.FE.MARKERS),!0):!!r&&(t.node.isBlock(n)?m(n):e(n).before(e.FE.MARKERS),!0)},setAfter:function(n,r){void 0===r&&(r=!0)
for(var i=n.nextSibling;i&&i.nodeType==Node.TEXT_NODE&&0===i.textContent.length;)i=i.nextSibling
return i?(t.node.isBlock(i)?m(i):e(i).before(e.FE.MARKERS),!0):!!r&&(t.node.isBlock(n)?g(n):e(n).after(e.FE.MARKERS),!0)},rangeElement:s}},e.extend(e.FE.DEFAULTS,{htmlAllowedTags:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","br","button","canvas","caption","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","queue","rp","rt","ruby","s","samp","script","style","section","select","small","source","span","strike","strong","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","var","video","wbr"],htmlRemoveTags:["script","style"],htmlAllowedAttrs:["accept","accept-charset","accesskey","action","align","allowfullscreen","allowtransparency","alt","async","autocomplete","autofocus","autoplay","autosave","background","bgcolor","border","charset","cellpadding","cellspacing","checked","cite","class","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","data","data-.*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","frameborder","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","max","maxlength","media","method","min","mozallowfullscreen","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","srcset","start","step","summary","spellcheck","style","tabindex","target","title","type","translate","usemap","value","valign","webkitallowfullscreen","width","wrap"],htmlAllowedStyleProps:[".*"],htmlAllowComments:!0,htmlUntouched:!1,fullPage:!1}),e.FE.HTML5Map={B:"STRONG",I:"EM",STRIKE:"S"},e.FE.MODULES.clean=function(t){var n,r,i,o
function s(e){if(e.nodeType==Node.ELEMENT_NODE&&e.getAttribute("class")&&0<=e.getAttribute("class").indexOf("fr-marker"))return!1
var n,r=t.node.contents(e),i=[]
for(n=0;n<r.length;n++)r[n].nodeType!=Node.ELEMENT_NODE||t.node.isVoid(r[n])?r[n].nodeType==Node.TEXT_NODE&&(r[n].textContent=r[n].textContent.replace(/\u200b/g,"")):r[n].textContent.replace(/\u200b/g,"").length!=r[n].textContent.length&&s(r[n])
if(e.nodeType==Node.ELEMENT_NODE&&!t.node.isVoid(e)&&(e.normalize(),r=t.node.contents(e),i=e.querySelectorAll(".fr-marker"),r.length-i.length==0)){for(n=0;n<r.length;n++)if(r[n].nodeType==Node.ELEMENT_NODE&&(r[n].getAttribute("class")||"").indexOf("fr-marker")<0)return!1
for(n=0;n<i.length;n++)e.parentNode.insertBefore(i[n].cloneNode(!0),e)
return e.parentNode.removeChild(e),!1}}function a(e,n){if(e.nodeType==Node.COMMENT_NODE)return"\x3c!--"+e.nodeValue+"--\x3e"
if(e.nodeType==Node.TEXT_NODE)return n?e.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00A0/g,"&nbsp;").replace(/\u0009/g,"")
if(e.nodeType!=Node.ELEMENT_NODE)return e.outerHTML
if(e.nodeType==Node.ELEMENT_NODE&&0<=["STYLE","SCRIPT","NOSCRIPT"].indexOf(e.tagName))return e.outerHTML
if(e.nodeType==Node.ELEMENT_NODE&&"svg"==e.tagName){var r=document.createElement("div"),i=e.cloneNode(!0)
return r.appendChild(i),r.innerHTML}if("IFRAME"==e.tagName)return e.outerHTML.replace(/\&lt;/g,"<").replace(/\&gt;/g,">")
var o=e.childNodes
if(0===o.length)return e.outerHTML
for(var s="",l=0;l<o.length;l++)"PRE"==e.tagName&&(n=!0),s+=a(o[l],n)
return t.node.openTagString(e)+s+t.node.closeTagString(e)}var l=[]
function u(e){var t=e.replace(/;;/gi,";")
return";"!=(t=t.replace(/^;/gi,"")).charAt(t.length)&&(t+=";"),t}function c(e){var n
for(n in e)if(e.hasOwnProperty(n)){var r=n.match(i),s=null
"style"==n&&t.opts.htmlAllowedStyleProps.length&&(s=e[n].match(o)),r&&s?e[n]=u(s.join(";")):r&&("style"!=n||s)||delete e[n]}for(var a="",l=Object.keys(e).sort(),c=0;c<l.length;c++)e[n=l[c]].indexOf('"')<0?a+=" "+n+'="'+e[n]+'"':a+=" "+n+"='"+e[n]+"'"
return a}function p(n,r){var i,o=document.implementation.createHTMLDocument("Froala DOC").createElement("DIV")
e(o).append(n)
var s=""
if(o){var l=t.node.contents(o)
for(i=0;i<l.length;i++)r(l[i])
for(l=t.node.contents(o),i=0;i<l.length;i++)s+=a(l[i])}return s}function d(e,n,r){l=[]
var i=e=e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,function(e){return l.push(e),"[FROALA.EDITOR.SCRIPT "+(l.length-1)+"]"}).replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi,function(e){return l.push(e),"[FROALA.EDITOR.NOSCRIPT "+(l.length-1)+"]"}).replace(/<img((?:[\w\W]*?)) src="/g,'<img$1 data-fr-src="'),o=null
return t.opts.fullPage&&(i=t.html.extractNode(e,"body")||(0<=e.indexOf("<body")?"":e),r&&(o=t.html.extractNode(e,"head")||"")),i=p(i,n),o&&(o=p(o,n)),function(e,n,r){if(t.opts.fullPage){var i=t.html.extractDoctype(r),o=c(t.html.extractNodeAttrs(r,"html"))
return n=null==n?t.html.extractNode(r,"head")||"<title></title>":n,i+"<html"+o+"><head"+c(t.html.extractNodeAttrs(r,"head"))+">"+n+"</head><body"+c(t.html.extractNodeAttrs(r,"body"))+">"+e+"</body></html>"}return e}(i,o,e).replace(/\[FROALA\.EDITOR\.SCRIPT ([\d]*)\]/gi,function(e,n){return 0<=t.opts.htmlRemoveTags.indexOf("script")?"":l[parseInt(n,10)]}).replace(/\[FROALA\.EDITOR\.NOSCRIPT ([\d]*)\]/gi,function(e,n){return 0<=t.opts.htmlRemoveTags.indexOf("noscript")?"":l[parseInt(n,10)].replace(/\&lt;/g,"<").replace(/\&gt;/g,">")}).replace(/<img((?:[\w\W]*?)) data-fr-src="/g,'<img$1 src="')}function f(e){var n=t.doc.createElement("DIV")
return n.innerText=e,n.textContent}function h(s){for(var a=t.node.contents(s),l=0;l<a.length;l++)a[l].nodeType!=Node.TEXT_NODE&&h(a[l])
!function(s){if(!("SPAN"==s.tagName&&0<=(s.getAttribute("class")||"").indexOf("fr-marker"))){var a,l
if("PRE"==s.tagName&&0<=(l=(a=s).innerHTML).indexOf("\n")&&(a.innerHTML=l.replace(/\n/g,"<br>")),s.nodeType==Node.ELEMENT_NODE&&(s.getAttribute("data-fr-src")&&0!==s.getAttribute("data-fr-src").indexOf("blob:")&&s.setAttribute("data-fr-src",t.helpers.sanitizeURL(f(s.getAttribute("data-fr-src")))),s.getAttribute("href")&&s.setAttribute("href",t.helpers.sanitizeURL(f(s.getAttribute("href")))),s.getAttribute("src")&&s.setAttribute("src",t.helpers.sanitizeURL(f(s.getAttribute("src")))),0<=["TABLE","TBODY","TFOOT","TR"].indexOf(s.tagName)&&(s.innerHTML=s.innerHTML.trim())),!t.opts.pasteAllowLocalImages&&s.nodeType==Node.ELEMENT_NODE&&"IMG"==s.tagName&&s.getAttribute("data-fr-src")&&0===s.getAttribute("data-fr-src").indexOf("file://"))return s.parentNode.removeChild(s)
if(s.nodeType==Node.ELEMENT_NODE&&e.FE.HTML5Map[s.tagName]&&""===t.node.attributes(s)){var c=e.FE.HTML5Map[s.tagName],p="<"+c+">"+s.innerHTML+"</"+c+">"
s.insertAdjacentHTML("beforebegin",p),(s=s.previousSibling).parentNode.removeChild(s.nextSibling)}if(t.opts.htmlAllowComments||s.nodeType!=Node.COMMENT_NODE)if(s.tagName&&s.tagName.match(r))s.parentNode.removeChild(s)
else if(s.tagName&&!s.tagName.match(n))"svg"===s.tagName?s.parentNode.removeChild(s):t.browser.safari&&"path"==s.tagName&&s.parentNode&&"svg"==s.parentNode.tagName||(s.outerHTML=s.innerHTML)
else{var d=s.attributes
if(d)for(var h=d.length-1;0<=h;h--){var m=d[h],g=m.nodeName.match(i),v=null
"style"==m.nodeName&&t.opts.htmlAllowedStyleProps.length&&(v=m.value.match(o)),g&&v?m.value=u(v.join(";")):g&&("style"!=m.nodeName||v)||s.removeAttribute(m.nodeName)}}else 0!==s.data.indexOf("[FROALA.EDITOR")&&s.parentNode.removeChild(s)}}(s)}return{_init:function(){t.opts.fullPage&&e.merge(t.opts.htmlAllowedTags,["head","title","style","link","base","body","html","meta"])},html:function(s,a,l,u){void 0===a&&(a=[]),void 0===l&&(l=[]),void 0===u&&(u=!1)
var c,p=e.merge([],t.opts.htmlAllowedTags)
for(c=0;c<a.length;c++)0<=p.indexOf(a[c])&&p.splice(p.indexOf(a[c]),1)
var f=e.merge([],t.opts.htmlAllowedAttrs)
for(c=0;c<l.length;c++)0<=f.indexOf(l[c])&&f.splice(f.indexOf(l[c]),1)
return f.push("data-fr-.*"),f.push("fr-.*"),n=new RegExp("^"+p.join("$|^")+"$","gi"),i=new RegExp("^"+f.join("$|^")+"$","gi"),r=new RegExp("^"+t.opts.htmlRemoveTags.join("$|^")+"$","gi"),o=t.opts.htmlAllowedStyleProps.length?new RegExp("((^|;|\\s)"+t.opts.htmlAllowedStyleProps.join(":.+?(?=;|$))|((^|;|\\s)")+":.+?(?=(;)|$))","gi"):null,d(s,h,!0)},toHTML5:function(){var n=t.el.querySelectorAll(Object.keys(e.FE.HTML5Map).join(","))
if(n.length){var r=!1
t.el.querySelector(".fr-marker")||(t.selection.save(),r=!0)
for(var i=0;i<n.length;i++)""===t.node.attributes(n[i])&&e(n[i]).replaceWith("<"+e.FE.HTML5Map[n[i].tagName]+">"+n[i].innerHTML+"</"+e.FE.HTML5Map[n[i].tagName]+">")
r&&t.selection.restore()}},tables:function(){!function(){for(var e=t.el.querySelectorAll("tr"),n=0;n<e.length;n++){for(var r=e[n].children,i=!0,o=0;o<r.length;o++)if("TH"!=r[o].tagName){i=!1
break}if(!1!==i&&0!==r.length){for(var s=e[n];s&&"TABLE"!=s.tagName&&"THEAD"!=s.tagName;)s=s.parentNode
var a=s
"THEAD"!=a.tagName&&(a=t.doc.createElement("THEAD"),s.insertBefore(a,s.firstChild)),a.appendChild(e[n])}}}()},lists:function(){!function(){var e,n=[]
do{if(n.length){var r=n[0],i=t.doc.createElement("ul")
r.parentNode.insertBefore(i,r)
do{var o=r
r=r.nextSibling,i.appendChild(o)}while(r&&"LI"==r.tagName)}n=[]
for(var s=t.el.querySelectorAll("li"),a=0;a<s.length;a++)e=s[a],t.node.isList(e.parentNode)||n.push(s[a])}while(0<n.length)}(),function(){for(var e=t.el.querySelectorAll("ol + ol, ul + ul"),n=0;n<e.length;n++){var r=e[n]
if(t.node.isList(r.previousSibling)&&t.node.openTagString(r)==t.node.openTagString(r.previousSibling)){for(var i=t.node.contents(r),o=0;o<i.length;o++)r.previousSibling.appendChild(i[o])
r.parentNode.removeChild(r)}}}(),function(){for(var n=t.el.querySelectorAll("ul, ol"),r=0;r<n.length;r++)for(var i=t.node.contents(n[r]),o=null,s=i.length-1;0<=s;s--)"LI"!=i[s].tagName?(o||(o=e("<li>")).insertBefore(i[s]),o.prepend(i[s])):o=null}(),function(){var e,n,r
do{n=!1
var i=t.el.querySelectorAll("li:empty")
for(e=0;e<i.length;e++)i[e].parentNode.removeChild(i[e])
var o=t.el.querySelectorAll("ul, ol")
for(e=0;e<o.length;e++)(r=o[e]).querySelector("LI")||(n=!0,r.parentNode.removeChild(r))}while(!0===n)}(),function(){for(var n=t.el.querySelectorAll("ul > ul, ol > ol, ul > ol, ol > ul"),r=0;r<n.length;r++){var i=n[r],o=i.previousSibling
o&&("LI"==o.tagName?o.appendChild(i):e(i).wrap("<li></li>"))}}(),function(){for(var n=t.el.querySelectorAll("li > ul, li > ol"),r=0;r<n.length;r++){var i=n[r]
if(i.nextSibling){var o=i.nextSibling,s=e("<li>")
e(i.parentNode).after(s)
do{var a=o
o=o.nextSibling,s.append(a)}while(o)}}}(),function(){for(var n=t.el.querySelectorAll("li > ul, li > ol"),r=0;r<n.length;r++){var i=n[r]
if(t.node.isFirstSibling(i))e(i).before("<br/>")
else if(i.previousSibling&&"BR"==i.previousSibling.tagName){for(var o=i.previousSibling.previousSibling;o&&t.node.hasClass(o,"fr-marker");)o=o.previousSibling
o&&"BR"!=o.tagName&&e(i.previousSibling).remove()}}}(),function(){for(var n=t.el.querySelectorAll("li:empty"),r=0;r<n.length;r++)e(n[r]).remove()}()},invisibleSpaces:function(e){return e.replace(/\u200b/g,"").length==e.length?e:t.clean.exec(e,s)},exec:d}},e.FE.MODULES.spaces=function(t){function n(n,r){var i=n.previousSibling,o=n.nextSibling,s=n.textContent,a=n.parentNode
if(!t.html.isPreformatted(a)){r&&(s=s.replace(/[\f\n\r\t\v ]{2,}/g," "),o&&"BR"!==o.tagName&&!t.node.isBlock(o)||!(t.node.isBlock(a)||t.node.isLink(a)&&!a.nextSibling||t.node.isElement(a))||(s=s.replace(/[\f\n\r\t\v ]{1,}$/g,"")),i&&"BR"!==i.tagName&&!t.node.isBlock(i)||!(t.node.isBlock(a)||t.node.isLink(a)&&!a.previousSibling||t.node.isElement(a))||(s=s.replace(/^[\f\n\r\t\v ]{1,}/g,""))," "===s&&(i&&t.node.isVoid(i)||o&&t.node.isVoid(o))&&(s="")),(!i&&t.node.isBlock(o)||!o&&t.node.isBlock(i))&&t.node.isBlock(a)&&(s=s.replace(/^[\f\n\r\t\v ]{1,}/g,"")),r||(s=s.replace(new RegExp(e.FE.UNICODE_NBSP,"g")," "))
for(var l="",u=0;u<s.length;u++)32!=s.charCodeAt(u)||0!==u&&32!=l.charCodeAt(u-1)?l+=s[u]:l+=e.FE.UNICODE_NBSP;(!o||o&&t.node.isBlock(o)||o&&o.nodeType==Node.ELEMENT_NODE&&t.win.getComputedStyle(o)&&"block"==t.win.getComputedStyle(o).display)&&(l=l.replace(/ $/,e.FE.UNICODE_NBSP)),!i||t.node.isVoid(i)||t.node.isBlock(i)||1!==(l=l.replace(/^\u00A0([^ $])/," $1")).length||160!==l.charCodeAt(0)||!o||t.node.isVoid(o)||t.node.isBlock(o)||(l=" "),r||(l=l.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g,"$1 $2")),n.textContent!=l&&(n.textContent=l)}}function r(e,r){if(void 0!==e&&e||(e=t.el),void 0===r&&(r=!1),!e.getAttribute||"false"!=e.getAttribute("contenteditable"))if(e.nodeType==Node.TEXT_NODE)n(e,r)
else if(e.nodeType==Node.ELEMENT_NODE)for(var i=t.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,t.node.filter(function(e){for(var n=e.parentNode;n&&n!==t.el;){if("STYLE"==n.tagName||"IFRAME"==n.tagName)return!1
if("PRE"===n.tagName)return!1
n=n.parentNode}return null!=e.textContent.match(/([ \u00A0\f\n\r\t\v]{2,})|(^[ \u00A0\f\n\r\t\v]{1,})|([ \u00A0\f\n\r\t\v]{1,}$)/g)&&!t.node.hasClass(e.parentNode,"fr-marker")}),!1);i.nextNode();)n(i.currentNode,r)}return{normalize:r,normalizeAroundCursor:function(){for(var e=[],n=t.el.querySelectorAll(".fr-marker"),i=0;i<n.length;i++){for(var o,s=(o=t.node.blockParent(n[i])||n[i]).nextSibling,a=o.previousSibling;s&&"BR"==s.tagName;)s=s.nextSibling
for(;a&&"BR"==a.tagName;)a=a.previousSibling
o&&e.indexOf(o)<0&&e.push(o),a&&e.indexOf(a)<0&&e.push(a),s&&e.indexOf(s)<0&&e.push(s)}for(var l=0;l<e.length;l++)r(e[l])}}},e.FE.UNICODE_NBSP=String.fromCharCode(160),e.FE.VOID_ELEMENTS=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],e.FE.BLOCK_TAGS=["address","article","aside","audio","blockquote","canvas","details","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul","video"],e.extend(e.FE.DEFAULTS,{htmlAllowedEmptyTags:["textarea","a","iframe","object","video","style","script",".fa",".fr-emoticon",".fr-inner","path","line"],htmlDoNotWrapTags:["script","style"],htmlSimpleAmpersand:!1,htmlIgnoreCSSProperties:[],htmlExecuteScripts:!0}),e.FE.MODULES.html=function(t){function n(){return t.opts.enter==e.FE.ENTER_P?"p":t.opts.enter==e.FE.ENTER_DIV?"div":t.opts.enter==e.FE.ENTER_BR?null:void 0}function r(e,n){return!(!e||e===t.el)&&(n?-1!=["PRE","SCRIPT","STYLE"].indexOf(e.tagName)||r(e.parentNode,n):-1!=["PRE","SCRIPT","STYLE"].indexOf(e.tagName))}function i(n){var r,i=[],s=[]
if(n){var a=t.el.querySelectorAll(".fr-marker")
for(r=0;r<a.length;r++){var l=t.node.blockParent(a[r])||a[r]
if(l){var u=l.nextSibling,c=l.previousSibling
l&&s.indexOf(l)<0&&t.node.isBlock(l)&&s.push(l),c&&t.node.isBlock(c)&&s.indexOf(c)<0&&s.push(c),u&&t.node.isBlock(u)&&s.indexOf(u)<0&&s.push(u)}}}else s=t.el.querySelectorAll(o())
var p=o()
for(p+=","+e.FE.VOID_ELEMENTS.join(","),p+=", .fr-inner",p+=","+t.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)",r=s.length-1;0<=r;r--)if(!(s[r].textContent&&0<s[r].textContent.replace(/\u200B|\n/g,"").length||0<s[r].querySelectorAll(p).length)){for(var d=t.node.contents(s[r]),f=!1,h=0;h<d.length;h++)if(d[h].nodeType!=Node.COMMENT_NODE&&d[h].textContent&&0<d[h].textContent.replace(/\u200B|\n/g,"").length){f=!0
break}f||i.push(s[r])}return i}function o(){return e.FE.BLOCK_TAGS.join(", ")}function s(n){var r,i,o=e.merge([],e.FE.VOID_ELEMENTS)
o=e.merge(o,t.opts.htmlAllowedEmptyTags),o=void 0===n?e.merge(o,e.FE.BLOCK_TAGS):e.merge(o,e.FE.NO_DELETE_TAGS),r=t.el.querySelectorAll("*:empty:not("+o.join("):not(")+"):not(.fr-marker)")
do{i=!1
for(var s=0;s<r.length;s++)0!==r[s].attributes.length&&void 0===r[s].getAttribute("href")||(r[s].parentNode.removeChild(r[s]),i=!0)
r=t.el.querySelectorAll("*:empty:not("+o.join("):not(")+"):not(.fr-marker)")}while(r.length&&i)}function a(e,r){var i=n()
if(r&&(i="div"),i){for(var o=t.doc.createDocumentFragment(),s=null,a=!1,l=e.firstChild,u=!1;l;){var c=l.nextSibling
if(l.nodeType==Node.ELEMENT_NODE&&(t.node.isBlock(l)||0<=t.opts.htmlDoNotWrapTags.indexOf(l.tagName.toLowerCase())&&!t.node.hasClass(l,"fr-marker")))s=null,o.appendChild(l.cloneNode(!0))
else if(l.nodeType!=Node.ELEMENT_NODE&&l.nodeType!=Node.TEXT_NODE)s=null,o.appendChild(l.cloneNode(!0))
else if("BR"==l.tagName)null==s?(s=t.doc.createElement(i),u=!0,r&&(s.setAttribute("class","fr-temp-div"),s.setAttribute("data-empty",!0)),s.appendChild(l.cloneNode(!0)),o.appendChild(s)):!1===a&&(s.appendChild(t.doc.createElement("br")),r&&(s.setAttribute("class","fr-temp-div"),s.setAttribute("data-empty",!0))),s=null
else{var p=l.textContent;(l.nodeType!==Node.TEXT_NODE||0<p.replace(/\n/g,"").replace(/(^ *)|( *$)/g,"").length||p.length&&p.indexOf("\n")<0)&&(null==s&&(s=t.doc.createElement(i),u=!0,r&&s.setAttribute("class","fr-temp-div"),o.appendChild(s),a=!1),s.appendChild(l.cloneNode(!0)),a||t.node.hasClass(l,"fr-marker")||l.nodeType==Node.TEXT_NODE&&0===p.replace(/ /g,"").length||(a=!0))}l=c}u&&(e.innerHTML="",e.appendChild(o))}}function l(e,t){for(var n=e.length-1;0<=n;n--)a(e[n],t)}function u(e,n,r,i,o){if(!t.$wp)return!1
void 0===e&&(e=!1),void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===i&&(i=!1),void 0===o&&(o=!1)
var s=t.$wp.scrollTop()
a(t.el,e),i&&l(t.el.querySelectorAll(".fr-inner"),e),n&&l(t.el.querySelectorAll("td, th"),e),r&&l(t.el.querySelectorAll("blockquote"),e),o&&l(t.el.querySelectorAll("li"),e),s!=t.$wp.scrollTop()&&t.$wp.scrollTop(s)}function c(e){if(void 0===e&&(e=t.el),e&&0<=["SCRIPT","STYLE","PRE"].indexOf(e.tagName))return!1
for(var n=t.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,t.node.filter(function(e){return null!=e.textContent.match(/([ \n]{2,})|(^[ \n]{1,})|([ \n]{1,}$)/g)}),!1);n.nextNode();){var i=n.currentNode
if(!r(i.parentNode,!0)){var o=t.node.isBlock(i.parentNode)||t.node.isElement(i.parentNode),s=i.textContent.replace(/(?!^)( ){2,}(?!$)/g," ").replace(/\n/g," ").replace(/^[ ]{2,}/g," ").replace(/[ ]{2,}$/g," ")
if(o){var a=i.previousSibling,l=i.nextSibling
a&&l&&" "==s?s=t.node.isBlock(a)&&t.node.isBlock(l)?"":" ":(a||(s=s.replace(/^ */,"")),l||(s=s.replace(/ *$/,"")))}i.textContent=s}}}function p(e,t,n){var r=new RegExp(t,"gi").exec(e)
return r?r[n]:null}function d(e){var t=e.doctype,n="<!DOCTYPE html>"
return t&&(n="<!DOCTYPE "+t.name+(t.publicId?' PUBLIC "'+t.publicId+'"':"")+(!t.publicId&&t.systemId?" SYSTEM":"")+(t.systemId?' "'+t.systemId+'"':"")+">"),n}function f(n){var r=n.parentNode
if(r&&(t.node.isBlock(r)||t.node.isElement(r))&&["TD","TH"].indexOf(r.tagName)<0){for(var i=n.previousSibling,o=n.nextSibling;i&&(i.nodeType==Node.TEXT_NODE&&0===i.textContent.replace(/\n|\r/g,"").length||t.node.hasClass(i,"fr-tmp"));)i=i.previousSibling
if(o)return!1
i&&r&&"BR"!=i.tagName&&!t.node.isBlock(i)&&!o&&0<r.textContent.replace(/\u200B/g,"").length&&0<i.textContent.length&&!t.node.hasClass(i,"fr-marker")&&(t.el==r&&!o&&t.opts.enter==e.FE.ENTER_BR&&t.browser.msie||n.parentNode.removeChild(n))}else!r||t.node.isBlock(r)||t.node.isElement(r)||n.previousSibling||n.nextSibling||!t.node.isDeletable(n.parentNode)||f(n.parentNode)}function h(){t.opts.htmlUntouched||(s(),u(),c(),t.spaces.normalize(null,!0),t.html.fillEmptyBlocks(),t.clean.lists(),t.clean.tables(),t.clean.toHTML5(),t.html.cleanBRs()),t.selection.restore(),m(),t.placeholder.refresh()}function m(){t.node.isEmpty(t.el)&&(null!=n()?t.el.querySelector(o())||t.el.querySelector(t.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)")||(t.core.hasFocus()?(t.$el.html("<"+n()+">"+e.FE.MARKERS+"<br/></"+n()+">"),t.selection.restore()):t.$el.html("<"+n()+"><br/></"+n()+">")):t.el.querySelector("*:not(.fr-marker):not(br)")||(t.core.hasFocus()?(t.$el.html(e.FE.MARKERS+"<br/>"),t.selection.restore()):t.$el.html("<br/>")))}function g(e,t){return p(e,"<"+t+"[^>]*?>([\\w\\W]*)</"+t+">",1)}function v(n,r){var i=e("<div "+(p(n,"<"+r+"([^>]*?)>",1)||"")+">")
return t.node.rawAttributes(i.get(0))}function b(e){return(p(e,"<!DOCTYPE([^>]*?)>",0)||"<!DOCTYPE html>").replace(/\n/g," ").replace(/ {2,}/g," ")}function y(e,n){t.opts.htmlExecuteScripts?e.html(n):e.get(0).innerHTML=n}function E(e){var t
return(t=/:not\(([^\)]*)\)/g).test(e)&&(e=e.replace(t,"     $1 ")),100*(e.match(/(#[^\s\+>~\.\[:]+)/g)||[]).length+10*(e.match(/(\[[^\]]+\])/g)||[]).length+10*(e.match(/(\.[^\s\+>~\.\[:]+)/g)||[]).length+10*(e.match(/(:[\w-]+\([^\)]*\))/gi)||[]).length+10*(e.match(/(:[^\s\+>~\.\[:]+)/g)||[]).length+(e.match(/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi)||[]).length+((e=(e=e.replace(/[\*\s\+>~]/g," ")).replace(/[#\.]/g," ")).match(/([^\s\+>~\.\[:]+)/g)||[]).length}function T(e){if(t.events.trigger("html.processGet",[e]),e&&e.getAttribute&&""===e.getAttribute("class")&&e.removeAttribute("class"),e&&e.getAttribute&&""===e.getAttribute("style")&&e.removeAttribute("style"),e&&e.nodeType==Node.ELEMENT_NODE){var n,r=e.querySelectorAll('[class=""],[style=""]')
for(n=0;n<r.length;n++){var i=r[n]
""===i.getAttribute("class")&&i.removeAttribute("class"),""===i.getAttribute("style")&&i.removeAttribute("style")}if("BR"===e.tagName)f(e)
else{var o=e.querySelectorAll("br")
for(n=0;n<o.length;n++)f(o[n])}}}function _(e,t){return e[3]-t[3]}function A(e){var n=t.doc.createElement("div")
return n.innerHTML=e,null!==n.querySelector(o())}function C(n){var r=null
if(void 0===n&&(r=t.selection.element()),t.opts.keepFormatOnDelete)return!1
var i,o,s=r?(r.textContent.match(/\u200B/g)||[]).length-r.querySelectorAll(".fr-marker").length:0
if((t.el.textContent.match(/\u200B/g)||[]).length-t.el.querySelectorAll(".fr-marker").length==s)return!1
do{o=!1,i=t.el.querySelectorAll("*:not(.fr-marker)")
for(var a=0;a<i.length;a++){var l=i[a]
if(r!=l){var u=l.textContent
0===l.children.length&&1===u.length&&8203==u.charCodeAt(0)&&"TD"!==l.tagName&&(e(l).remove(),o=!0)}}}while(o)}return{defaultTag:n,isPreformatted:r,emptyBlocks:i,emptyBlockTagsQuery:function(){return e.FE.BLOCK_TAGS.join(":empty, ")+":empty"},blockTagsQuery:o,fillEmptyBlocks:function(n){for(var r=i(n),o=0;o<r.length;o++){var s=r[o]
"false"===s.getAttribute("contenteditable")||s.querySelector(t.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")||t.node.isVoid(s)||"TABLE"!=s.tagName&&"TBODY"!=s.tagName&&"TR"!=s.tagName&&"UL"!=s.tagName&&"OL"!=s.tagName&&s.appendChild(t.doc.createElement("br"))}if(t.browser.msie&&t.opts.enter==e.FE.ENTER_BR){var a=t.node.contents(t.el)
a.length&&a[a.length-1].nodeType==Node.TEXT_NODE&&t.$el.append("<br>")}},cleanEmptyTags:s,cleanWhiteTags:C,cleanBlankSpaces:c,blocks:function(){return t.$el.get(0).querySelectorAll(o())},getDoctype:d,set:function(n){var r,i,o,s=t.clean.html((n||"").trim(),[],[],t.opts.fullPage)
if(t.opts.fullPage){var a=g(s,"body")||(0<=s.indexOf("<body")?"":s),l=v(s,"body"),u=g(s,"head")||"<title></title>",c=v(s,"head"),p=e("<div>").append(u).contents().each(function(){(this.nodeType==Node.COMMENT_NODE||0<=["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName))&&this.parentNode.removeChild(this)}).end().html().trim()
u=e("<div>").append(u).contents().map(function(){return this.nodeType==Node.COMMENT_NODE?"\x3c!--"+this.nodeValue+"--\x3e":0<=["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName)?this.outerHTML:""}).toArray().join("")
var d=b(s),f=v(s,"html")
y(t.$el,p+"\n"+a),t.node.clearAttributes(t.el),t.$el.attr(l),t.$el.addClass("fr-view"),t.$el.attr("spellcheck",t.opts.spellcheck),t.$el.attr("dir",t.opts.direction),y(t.$head,u),t.node.clearAttributes(t.$head.get(0)),t.$head.attr(c),t.node.clearAttributes(t.$html.get(0)),t.$html.attr(f),t.iframe_document.doctype.parentNode.replaceChild((r=d,i=t.iframe_document,(o=r.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i))?i.implementation.createDocumentType(o[1],o[3],o[4]):i.implementation.createDocumentType("html")),t.iframe_document.doctype)}else y(t.$el,s)
var m=t.edit.isDisabled()
t.edit.on(),t.core.injectStyle(t.opts.iframeDefaultStyle+t.opts.iframeStyle),h(),t.opts.useClasses||(t.$el.find("[fr-original-class]").each(function(){this.setAttribute("class",this.getAttribute("fr-original-class")),this.removeAttribute("fr-original-class")}),t.$el.find("[fr-original-style]").each(function(){this.setAttribute("style",this.getAttribute("fr-original-style")),this.removeAttribute("fr-original-style")})),m&&t.edit.off(),t.events.trigger("html.set")},get:function(e,n){if(!t.$wp)return t.$oel.clone().removeClass("fr-view").removeAttr("contenteditable").get(0).outerHTML
var r=""
t.events.trigger("html.beforeGet")
var i,o,s=[],a={},l=[],u=t.el.querySelectorAll("input, textarea")
for(i=0;i<u.length;i++)u[i].setAttribute("value",u[i].value)
if(!t.opts.useClasses&&!n){var c=new RegExp("^"+t.opts.htmlIgnoreCSSProperties.join("$|^")+"$","gi")
for(i=0;i<t.doc.styleSheets.length;i++){var p,f=0
try{p=t.doc.styleSheets[i].cssRules,t.doc.styleSheets[i].ownerNode&&"STYLE"==t.doc.styleSheets[i].ownerNode.nodeType&&(f=1)}catch(e){}if(p)for(var h=0,m=p.length;h<m;h++)if(p[h].selectorText&&0<p[h].style.cssText.length){var g,v=p[h].selectorText.replace(/body |\.fr-view /g,"").replace(/::/g,":")
try{g=t.el.querySelectorAll(v)}catch(e){g=[]}for(o=0;o<g.length;o++){!g[o].getAttribute("fr-original-style")&&g[o].getAttribute("style")?(g[o].setAttribute("fr-original-style",g[o].getAttribute("style")),s.push(g[o])):g[o].getAttribute("fr-original-style")||(g[o].setAttribute("fr-original-style",""),s.push(g[o])),a[g[o]]||(a[g[o]]={})
for(var b=1e3*f+E(p[h].selectorText),y=p[h].style.cssText.split(";"),A=0;A<y.length;A++){var C=y[A].trim().split(":")[0]
if(C&&!C.match(c)&&(a[g[o]][C]||(a[g[o]][C]=0)<=(g[o].getAttribute("fr-original-style")||"").indexOf(C+":")&&(a[g[o]][C]=1e4),b>=a[g[o]][C]&&(a[g[o]][C]=b,y[A].trim().length))){var S=y[A].trim().split(":")
S.splice(0,1),l.push([g[o],C.trim(),S.join(":").trim(),b])}}}}}for(l.sort(_),i=0;i<l.length;i++){var w=l[i]
w[0].style[w[1]]=w[2]}for(i=0;i<s.length;i++)if(s[i].getAttribute("class")&&(s[i].setAttribute("fr-original-class",s[i].getAttribute("class")),s[i].removeAttribute("class")),0<(s[i].getAttribute("fr-original-style")||"").trim().length){var R=s[i].getAttribute("fr-original-style").split(";")
for(o=0;o<R.length;o++)if(0<R[o].indexOf(":")){var x=R[o].split(":"),O=x[0]
x.splice(0,1),s[i].style[O.trim()]=x.join(":").trim()}}}if(t.node.isEmpty(t.el))t.opts.fullPage&&(r=d(t.iframe_document),r+="<html"+t.node.attributes(t.$html.get(0))+">"+t.$html.find("head").get(0).outerHTML+"<body></body></html>")
else if(void 0===e&&(e=!1),t.opts.fullPage){r=d(t.iframe_document),t.$el.removeClass("fr-view")
var N=t.opts.heightMin
t.opts.heightMin=null,t.size.refresh(),r+="<html"+t.node.attributes(t.$html.get(0))+">"+t.$html.html()+"</html>",t.opts.heightMin=N,t.size.refresh(),t.$el.addClass("fr-view")}else r=t.$el.html()
if(!t.opts.useClasses&&!n)for(i=0;i<s.length;i++)s[i].getAttribute("fr-original-class")&&(s[i].setAttribute("class",s[i].getAttribute("fr-original-class")),s[i].removeAttribute("fr-original-class")),null!=s[i].getAttribute("fr-original-style")&&void 0!==s[i].getAttribute("fr-original-style")?(0!==s[i].getAttribute("fr-original-style").length?s[i].setAttribute("style",s[i].getAttribute("fr-original-style")):s[i].removeAttribute("style"),s[i].removeAttribute("fr-original-style")):s[i].removeAttribute("style")
t.opts.fullPage&&(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g,"")).replace(/<link([^>]*)data-fr-style="true"([^>]*)>/g,"")).replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g,"")).replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")).replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,'<body$1class="$2$4"$5>$6</body>')).replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")),t.opts.htmlSimpleAmpersand&&(r=r.replace(/\&amp;/gi,"&")),t.events.trigger("html.afterGet"),e||(r=r.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,"")),r=t.clean.invisibleSpaces(r),r=t.clean.exec(r,T)
var L=t.events.chainTrigger("html.get",r)
return"string"==typeof L&&(r=L),r.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g,function(e){return e.replace(/<br>/g,"\n")})},getSelected:function(){var n,r,i=function(n,r){for(;r&&(r.nodeType==Node.TEXT_NODE||!t.node.isBlock(r))&&!t.node.isElement(r)&&!t.node.hasClass(r,"fr-inner");)r&&r.nodeType!=Node.TEXT_NODE&&e(n).wrapInner(t.node.openTagString(r)+t.node.closeTagString(r)),r=r.parentNode
r&&n.innerHTML==r.innerHTML&&(n.innerHTML=r.outerHTML)},o=""
if(void 0!==t.win.getSelection){t.browser.mozilla&&(t.selection.save(),1<t.$el.find('.fr-marker[data-type="false"]').length&&(t.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(),t.$el.find('.fr-marker[data-type="false"]:last').attr("data-id","0"),t.$el.find(".fr-marker").not('[data-id="0"]').remove()),t.selection.restore())
for(var s=t.selection.ranges(),a=0;a<s.length;a++){var l=document.createElement("div")
l.appendChild(s[a].cloneContents()),i(l,(r=n=void 0,r=null,t.win.getSelection?(n=t.win.getSelection())&&n.rangeCount&&(r=n.getRangeAt(0).commonAncestorContainer).nodeType!=Node.ELEMENT_NODE&&(r=r.parentNode):(n=t.doc.selection)&&"Control"!=n.type&&(r=n.createRange().parentElement()),null!=r&&(0<=e.inArray(t.el,e(r).parents())||r==t.el)?r:null)),0<e(l).find(".fr-element").length&&(l=t.el),o+=l.innerHTML}}else void 0!==t.doc.selection&&"Text"==t.doc.selection.type&&(o=t.doc.selection.createRange().htmlText)
return o},insert:function(n,r,i){var o,s,a
if(t.selection.isCollapsed()||t.selection.remove(),o=r?n:t.clean.html(n),n.indexOf('class="fr-marker"')<0&&(s=o,(a=t.doc.createElement("div")).innerHTML=s,t.selection.setAtEnd(a),o=a.innerHTML),t.node.isEmpty(t.el)&&!t.opts.keepFormatOnDelete&&A(o))t.el.innerHTML=o
else{var l=t.markers.insert()
if(l){t.node.isLastSibling(l)&&e(l).parent().hasClass("fr-deletable")&&e(l).insertAfter(e(l).parent())
var u=t.node.blockParent(l)
if((A(o)||i)&&(t.node.deepestParent(l)||u&&"LI"==u.tagName)){if(u&&"LI"==u.tagName&&(o=function(n){if(!t.html.defaultTag())return n
var r=t.doc.createElement("div")
r.innerHTML=n
for(var i=r.querySelectorAll(":scope > "+t.html.defaultTag()),o=i.length-1;0<=o;o--){var s=i[o]
t.node.isBlock(s.previousSibling)||(s.previousSibling&&!t.node.isEmpty(s)&&e("<br>").insertAfter(s.previousSibling),s.outerHTML=s.innerHTML)}return r.innerHTML}(o)),!(l=t.markers.split()))return!1
l.outerHTML=o}else l.outerHTML=o}else t.el.innerHTML=t.el.innerHTML+o}h(),t.keys.positionCaret(),t.events.trigger("html.inserted")},wrap:u,unwrap:function(){t.$el.find("div.fr-temp-div").each(function(){this.previousSibling&&this.previousSibling.nodeType===Node.TEXT_NODE&&e(this).before("<br>"),e(this).attr("data-empty")||!this.nextSibling||t.node.isBlock(this.nextSibling)&&!e(this.nextSibling).hasClass("fr-temp-div")?e(this).replaceWith(e(this).html()):e(this).replaceWith(e(this).html()+"<br>")}),t.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function(){return""===e(this).attr("class")}).removeAttr("class")},escapeEntities:function(e){return e.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/"/gi,"&quot;").replace(/'/gi,"&#39;")},checkIfEmpty:m,extractNode:g,extractNodeAttrs:v,extractDoctype:b,cleanBRs:function(){for(var e=t.el.getElementsByTagName("br"),n=0;n<e.length;n++)f(e[n])},_init:function(){if(t.$wp){var e=function(){C(),t.placeholder&&setTimeout(t.placeholder.refresh,0)}
t.events.on("mouseup",e),t.events.on("keydown",e),t.events.on("contentChanged",m)}}}},e.extend(e.FE.DEFAULTS,{height:null,heightMax:null,heightMin:null,width:null}),e.FE.MODULES.size=function(e){function t(){n(),e.opts.height&&e.$el.css("minHeight",e.opts.height-e.helpers.getPX(e.$el.css("padding-top"))-e.helpers.getPX(e.$el.css("padding-bottom"))),e.$iframe.height(e.$el.outerHeight(!0))}function n(){e.opts.heightMin?e.$el.css("minHeight",e.opts.heightMin):e.$el.css("minHeight",""),e.opts.heightMax?(e.$wp.css("maxHeight",e.opts.heightMax),e.$wp.css("overflow","auto")):(e.$wp.css("maxHeight",""),e.$wp.css("overflow","")),e.opts.height?(e.$wp.height(e.opts.height),e.$wp.css("overflow","auto"),e.$el.css("minHeight",e.opts.height-e.helpers.getPX(e.$el.css("padding-top"))-e.helpers.getPX(e.$el.css("padding-bottom")))):(e.$wp.css("height",""),e.opts.heightMin||e.$el.css("minHeight",""),e.opts.heightMax||e.$wp.css("overflow","")),e.opts.width&&e.$box.width(e.opts.width)}return{_init:function(){if(!e.$wp)return!1
n(),e.$iframe&&(e.events.on("keyup keydown",function(){setTimeout(t,0)},!0),e.events.on("commands.after html.set init initialized paste.after",t))},syncIframe:t,refresh:n}},e.extend(e.FE.DEFAULTS,{language:null}),e.FE.LANGUAGE={},e.FE.MODULES.language=function(t){var n
return{_init:function(){e.FE.LANGUAGE&&(n=e.FE.LANGUAGE[t.opts.language]),n&&n.direction&&(t.opts.direction=n.direction)},translate:function(e){return n&&n.translation[e]&&n.translation[e].length?n.translation[e]:e}}},e.extend(e.FE.DEFAULTS,{placeholderText:"Type something"}),e.FE.MODULES.placeholder=function(t){function n(){t.$placeholder||(t.$placeholder=e('<span class="fr-placeholder"></span>'),t.$wp.append(t.$placeholder))
var n=t.opts.iframe?t.$iframe.prev().outerHeight(!0):t.$el.prev().outerHeight(!0),r=0,i=0,o=0,s=0,a=0,l=0,u=t.node.contents(t.el),c=e(t.selection.element()).css("text-align")
if(u.length&&u[0].nodeType==Node.ELEMENT_NODE){var p=e(u[0]);(!t.opts.toolbarInline||0<t.$el.prev().length)&&t.ready&&(r=t.helpers.getPX(p.css("margin-top")),s=t.helpers.getPX(p.css("padding-top")),i=t.helpers.getPX(p.css("margin-left")),o=t.helpers.getPX(p.css("margin-right")),a=t.helpers.getPX(p.css("padding-left")),l=t.helpers.getPX(p.css("padding-right"))),t.$placeholder.css("font-size",p.css("font-size")),t.$placeholder.css("line-height",p.css("line-height"))}else t.$placeholder.css("font-size",t.$el.css("font-size")),t.$placeholder.css("line-height",t.$el.css("line-height"))
t.$wp.addClass("show-placeholder"),t.$placeholder.css({marginTop:Math.max(t.helpers.getPX(t.$el.css("margin-top")),r)+(n||0),paddingTop:Math.max(t.helpers.getPX(t.$el.css("padding-top")),s),paddingLeft:Math.max(t.helpers.getPX(t.$el.css("padding-left")),a),marginLeft:Math.max(t.helpers.getPX(t.$el.css("margin-left")),i),paddingRight:Math.max(t.helpers.getPX(t.$el.css("padding-right")),l),marginRight:Math.max(t.helpers.getPX(t.$el.css("margin-right")),o),textAlign:c}).text(t.language.translate(t.opts.placeholderText||t.$oel.attr("placeholder")||"")),t.$placeholder.html(t.$placeholder.text().replace(/\n/g,"<br>"))}function r(){t.$wp.removeClass("show-placeholder")}function i(){if(!t.$wp)return!1
t.core.isEmpty()?n():r()}return{_init:function(){if(!t.$wp)return!1
t.events.on("init input keydown keyup contentChanged initialized",i)},show:n,hide:r,refresh:i,isVisible:function(){return!t.$wp||t.node.hasClass(t.$wp.get(0),"show-placeholder")}}},e.FE.MODULES.edit=function(e){function t(){if(e.browser.mozilla)try{e.doc.execCommand("enableObjectResizing",!1,"false"),e.doc.execCommand("enableInlineTableEditing",!1,"false")}catch(e){}if(e.browser.msie)try{e.doc.body.addEventListener("mscontrolselect",function(e){return e.preventDefault(),!1})}catch(e){}}var n=!1
function r(){return n}return{_init:function(){e.events.on("focus",function(){r()?e.edit.off():e.edit.on()})},on:function(){e.$wp?(e.$el.attr("contenteditable",!0),e.$el.removeClass("fr-disabled").attr("aria-disabled",!1),e.$tb&&e.$tb.removeClass("fr-disabled").removeAttr("aria-disabled"),t()):e.$el.is("a")&&e.$el.attr("contenteditable",!0),n=!1},off:function(){e.events.disableBlur(),e.$wp?(e.$el.attr("contenteditable",!1),e.$el.addClass("fr-disabled").attr("aria-disabled",!0),e.$tb&&e.$tb.addClass("fr-disabled").attr("aria-disabled",!0)):e.$el.is("a")&&e.$el.attr("contenteditable",!1),e.events.enableBlur(),n=!0},disableDesign:t,isDisabled:r}},e.extend(e.FE.DEFAULTS,{editorClass:null,typingTimer:500,iframe:!1,requestWithCORS:!0,requestWithCredentials:!1,requestHeaders:{},useClasses:!0,spellcheck:!0,iframeDefaultStyle:'html{margin:0px;height:auto;}body{height:auto;padding:10px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:"";display:block;clear:both;}body::-moz-selection{background:#b5d6fd;color:#000;}body::selection{background:#b5d6fd;color:#000;}',iframeStyle:"",iframeStyleFiles:[],direction:"auto",zIndex:1,tabIndex:null,disableRightClick:!1,scrollableContainer:"body",keepFormatOnDelete:!1,theme:null}),e.FE.MODULES.core=function(t){return{_init:function(){if(e.FE.INSTANCES.push(t),t.drag_support={filereader:"undefined"!=typeof FileReader,formdata:!!t.win.FormData,progress:"upload"in new XMLHttpRequest},t.$wp){(function(){if(t.$box.addClass("fr-box"+(t.opts.editorClass?" "+t.opts.editorClass:"")),t.$box.attr("role","application"),t.$wp.addClass("fr-wrapper"),t.opts.iframe||t.$el.addClass("fr-element fr-view"),t.opts.iframe){t.$iframe.addClass("fr-iframe"),t.$el.addClass("fr-view")
for(var e=0;e<t.o_doc.styleSheets.length;e++){var n
try{n=t.o_doc.styleSheets[e].cssRules}catch(e){}if(n)for(var r=0,i=n.length;r<i;r++)!n[r].selectorText||0!==n[r].selectorText.indexOf(".fr-view")&&0!==n[r].selectorText.indexOf(".fr-element")||0<n[r].style.cssText.length&&(0===n[r].selectorText.indexOf(".fr-view")?t.opts.iframeStyle+=n[r].selectorText.replace(/\.fr-view/g,"body")+"{"+n[r].style.cssText+"}":t.opts.iframeStyle+=n[r].selectorText.replace(/\.fr-element/g,"body")+"{"+n[r].style.cssText+"}")}}"auto"!=t.opts.direction&&t.$box.removeClass("fr-ltr fr-rtl").addClass("fr-"+t.opts.direction),t.$el.attr("dir",t.opts.direction),t.$wp.attr("dir",t.opts.direction),1<t.opts.zIndex&&t.$box.css("z-index",t.opts.zIndex),t.opts.theme&&t.$box.addClass(t.opts.theme+"-theme"),t.opts.tabIndex=t.opts.tabIndex||t.$oel.attr("tabIndex"),t.opts.tabIndex&&t.$el.attr("tabIndex",t.opts.tabIndex)})(),t.html.set(t._original_html),t.$el.attr("spellcheck",t.opts.spellcheck),t.helpers.isMobile()&&(t.$el.attr("autocomplete",t.opts.spellcheck?"on":"off"),t.$el.attr("autocorrect",t.opts.spellcheck?"on":"off"),t.$el.attr("autocapitalize",t.opts.spellcheck?"on":"off")),t.opts.disableRightClick&&t.events.$on(t.$el,"contextmenu",function(e){if(2==e.button)return!1})
try{t.doc.execCommand("styleWithCSS",!1,!1)}catch(e){}}"TEXTAREA"==t.$oel.get(0).tagName&&(t.events.on("contentChanged",function(){t.$oel.val(t.html.get())}),t.events.on("form.submit",function(){t.$oel.val(t.html.get())}),t.events.on("form.reset",function(){t.html.set(t._original_html)}),t.$oel.val(t.html.get())),t.helpers.isIOS()&&t.events.$on(t.$doc,"selectionchange",function(){t.$doc.get(0).hasFocus()||t.$win.get(0).focus()}),t.events.trigger("init"),t.opts.autofocus&&!t.opts.initOnClick&&t.$wp&&t.events.on("initialized",function(){t.events.focus(!0)})},destroy:function(e){"TEXTAREA"==t.$oel.get(0).tagName&&t.$oel.val(e),t.$box&&t.$box.removeAttr("role"),t.$wp&&("TEXTAREA"==t.$oel.get(0).tagName?(t.$el.html(""),t.$wp.html(""),t.$box.replaceWith(t.$oel),t.$oel.show()):(t.$wp.replaceWith(e),t.$el.html(""),t.$box.removeClass("fr-view fr-ltr fr-box "+(t.opts.editorClass||"")),t.opts.theme&&t.$box.addClass(t.opts.theme+"-theme"))),this.$wp=null,this.$el=null,this.el=null,this.$box=null},isEmpty:function(){return t.node.isEmpty(t.el)},getXHR:function(e,n){var r=new XMLHttpRequest
for(var i in r.open(n,e,!0),t.opts.requestWithCredentials&&(r.withCredentials=!0),t.opts.requestHeaders)t.opts.requestHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,t.opts.requestHeaders[i])
return r},injectStyle:function(n){if(t.opts.iframe){t.$head.find("style[data-fr-style], link[data-fr-style]").remove(),t.$head.append('<style data-fr-style="true">'+n+"</style>")
for(var r=0;r<t.opts.iframeStyleFiles.length;r++){var i=e('<link data-fr-style="true" rel="stylesheet" href="'+t.opts.iframeStyleFiles[r]+'">')
i.get(0).addEventListener("load",t.size.syncIframe),t.$head.append(i)}}},hasFocus:function(){return t.browser.mozilla&&t.helpers.isMobile()?t.selection.inEditor():t.node.hasFocus(t.el)||0<t.$el.find("*:focus").length},sameInstance:function(e){if(!e)return!1
var n=e.data("instance")
return!!n&&n.id==t.id}}},e.FE.MODULES.cursorLists=function(t){function n(e){for(var t=e;"LI"!=t.tagName;)t=t.parentNode
return t}function r(e){for(var n=e;!t.node.isList(n);)n=n.parentNode
return n}return{_startEnter:function(i){var o,s=n(i),a=s.nextSibling,l=s.previousSibling,u=t.html.defaultTag()
if(t.node.isEmpty(s,!0)&&a){for(var c="",p="",d=i.parentNode;!t.node.isList(d)&&d.parentNode&&"LI"!==d.parentNode.tagName;)c=t.node.openTagString(d)+c,p+=t.node.closeTagString(d),d=d.parentNode
c=t.node.openTagString(d)+c,p+=t.node.closeTagString(d)
var f
for(f=d.parentNode&&"LI"==d.parentNode.tagName?p+"<li>"+e.FE.MARKERS+"<br>"+c:u?p+"<"+u+">"+e.FE.MARKERS+"<br></"+u+">"+c:p+e.FE.MARKERS+"<br>"+c,e(s).html('<span id="fr-break"></span>');["UL","OL"].indexOf(d.tagName)<0||d.parentNode&&"LI"===d.parentNode.tagName;)d=d.parentNode
var h=t.node.openTagString(d)+e(d).html()+t.node.closeTagString(d)
h=h.replace(/<span id="fr-break"><\/span>/g,f),e(d).replaceWith(h),t.$el.find("li:empty").remove()}else if(l&&a||!t.node.isEmpty(s,!0)){for(var m="<br>",g=i.parentNode;g&&"LI"!=g.tagName;)m=t.node.openTagString(g)+m+t.node.closeTagString(g),g=g.parentNode
e(s).before("<li>"+m+"</li>"),e(i).remove()}else if(l){o=r(s)
for(var v=e.FE.MARKERS+"<br>",b=i.parentNode;b&&"LI"!=b.tagName;)v=t.node.openTagString(b)+v+t.node.closeTagString(b),b=b.parentNode
o.parentNode&&"LI"==o.parentNode.tagName?e(o.parentNode).after("<li>"+v+"</li>"):u?e(o).after("<"+u+">"+v+"</"+u+">"):e(o).after(v),e(s).remove()}else(o=r(s)).parentNode&&"LI"==o.parentNode.tagName?a?e(o.parentNode).before(t.node.openTagString(s)+e.FE.MARKERS+"<br></li>"):e(o.parentNode).after(t.node.openTagString(s)+e.FE.MARKERS+"<br></li>"):u?e(o).before("<"+u+">"+e.FE.MARKERS+"<br></"+u+">"):e(o).before(e.FE.MARKERS+"<br>"),e(s).remove()},_middleEnter:function(r){for(var i=n(r),o="",s=r,a="",l="";s!=i;){var u="A"==(s=s.parentNode).tagName&&t.cursor.isAtEnd(r,s)?"fr-to-remove":""
a=t.node.openTagString(e(s).clone().addClass(u).get(0))+a,l=t.node.closeTagString(s)+l}o=l+o+a+e.FE.MARKERS+e.FE.INVISIBLE_SPACE,e(r).replaceWith('<span id="fr-break"></span>')
var c=t.node.openTagString(i)+e(i).html()+t.node.closeTagString(i)
c=c.replace(/<span id="fr-break"><\/span>/g,o),e(i).replaceWith(c)},_endEnter:function(r){for(var i=n(r),o=e.FE.MARKERS,s="",a=r,l=!1;a!=i;){var u="A"==(a=a.parentNode).tagName&&t.cursor.isAtEnd(r,a)?"fr-to-remove":""
l||a==i||t.node.isBlock(a)||(l=!0,s+=e.FE.INVISIBLE_SPACE),s=t.node.openTagString(e(a).clone().addClass(u).get(0))+s,o+=t.node.closeTagString(a)}var c=s+o
e(r).remove(),e(i).after(c)},_backspace:function(i){var o=n(i),s=o.previousSibling
if(s){s=e(s).find(t.html.blockTagsQuery()).get(-1)||s,e(i).replaceWith(e.FE.MARKERS)
var a=t.node.contents(s)
a.length&&"BR"==a[a.length-1].tagName&&e(a[a.length-1]).remove(),e(o).find(t.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==o&&e(this).replaceWith(e(this).html()+(t.node.isEmpty(this)?"":"<br>"))})
for(var l,u=t.node.contents(o)[0];u&&!t.node.isList(u);)l=u.nextSibling,e(s).append(u),u=l
for(s=o.previousSibling;u;)l=u.nextSibling,e(s).append(u),u=l
e(o).remove()}else{var c=r(o)
if(e(i).replaceWith(e.FE.MARKERS),c.parentNode&&"LI"==c.parentNode.tagName){var p=c.previousSibling
t.node.isBlock(p)?(e(o).find(t.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==o&&e(this).replaceWith(e(this).html()+(t.node.isEmpty(this)?"":"<br>"))}),e(p).append(e(o).html())):e(c).before(e(o).html())}else{var d=t.html.defaultTag()
d&&0===e(o).find(t.html.blockTagsQuery()).length?e(c).before("<"+d+">"+e(o).html()+"</"+d+">"):e(c).before(e(o).html())}e(o).remove(),t.html.wrap(),0===e(c).find("li").length&&e(c).remove()}},_del:function(r){var i,o=n(r),s=o.nextSibling
if(s){(i=t.node.contents(s)).length&&"BR"==i[0].tagName&&e(i[0]).remove(),e(s).find(t.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==s&&e(this).replaceWith(e(this).html()+(t.node.isEmpty(this)?"":"<br>"))})
for(var a,l=r,u=t.node.contents(s)[0];u&&!t.node.isList(u);)a=u.nextSibling,e(l).after(u),l=u,u=a
for(;u;)a=u.nextSibling,e(o).append(u),u=a
e(r).replaceWith(e.FE.MARKERS),e(s).remove()}else{for(var c=o;!c.nextSibling&&c!=t.el;)c=c.parentNode
if(c==t.el)return!1
if(c=c.nextSibling,t.node.isBlock(c))e.FE.NO_DELETE_TAGS.indexOf(c.tagName)<0&&(e(r).replaceWith(e.FE.MARKERS),(i=t.node.contents(o)).length&&"BR"==i[i.length-1].tagName&&e(i[i.length-1]).remove(),e(o).append(e(c).html()),e(c).remove())
else for((i=t.node.contents(o)).length&&"BR"==i[i.length-1].tagName&&e(i[i.length-1]).remove(),e(r).replaceWith(e.FE.MARKERS);c&&!t.node.isBlock(c)&&"BR"!=c.tagName;)e(o).append(e(c)),c=c.nextSibling}}}},e.FE.NO_DELETE_TAGS=["TH","TD","TR","TABLE","FORM"],e.FE.SIMPLE_ENTER_TAGS=["TH","TD","LI","DL","DT","FORM"],e.FE.MODULES.cursor=function(t){function n(e){return!!e&&(!!t.node.isBlock(e)||(e.nextSibling&&e.nextSibling.nodeType==Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?n(e.nextSibling):!(e.nextSibling&&(!e.previousSibling||"BR"!=e.nextSibling.tagName||e.nextSibling.nextSibling))&&n(e.parentNode)))}function r(e){return!!e&&(!!t.node.isBlock(e)||(e.previousSibling&&e.previousSibling.nodeType==Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?r(e.previousSibling):!e.previousSibling&&(!(e.previousSibling||!t.node.hasClass(e.parentNode,"fr-inner"))||r(e.parentNode))))}function i(e,n){return!!e&&e!=t.$wp.get(0)&&(e.previousSibling&&e.previousSibling.nodeType==Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?i(e.previousSibling,n):!e.previousSibling&&(e.parentNode==n||i(e.parentNode,n)))}function o(e,n){return!!e&&e!=t.$wp.get(0)&&(e.nextSibling&&e.nextSibling.nodeType==Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?o(e.nextSibling,n):!(e.nextSibling&&(!e.previousSibling||"BR"!=e.nextSibling.tagName||e.nextSibling.nextSibling))&&(e.parentNode==n||o(e.parentNode,n)))}function s(n){return 0<e(n).parentsUntil(t.$el,"LI").length&&0===e(n).parentsUntil("LI","TABLE").length}function a(e,t){var n=new RegExp((t?"^":"")+"(([\\uD83C-\\uDBFF\\uDC00-\\uDFFF]+\\u200D)*[\\uD83C-\\uDBFF\\uDC00-\\uDFFF]{2})"+(t?"":"$"),"i"),r=e.match(n)
return r?r[0].length:1}function l(n){for(var r,i=n;!i.previousSibling;)if(i=i.parentNode,t.node.isElement(i))return!1
if(i=i.previousSibling,!t.node.isBlock(i)&&t.node.isEditable(i)){for(r=t.node.contents(i);i.nodeType!=Node.TEXT_NODE&&!t.node.isDeletable(i)&&r.length&&t.node.isEditable(i);)i=r[r.length-1],r=t.node.contents(i)
if(i.nodeType==Node.TEXT_NODE){var o=i.textContent,s=o.length
if(o.length&&"\n"===o[o.length-1])return i.textContent=o.substring(0,s-2),0===i.textContent.length&&i.parentNode.removeChild(i),l(n)
t.opts.tabSpaces&&o.length>=t.opts.tabSpaces&&0===o.substr(o.length-t.opts.tabSpaces,o.length-1).replace(/ /g,"").replace(new RegExp(e.FE.UNICODE_NBSP,"g"),"").length&&(s=o.length-t.opts.tabSpaces+1),i.textContent=o.substring(0,s-a(o))
var u=o.length!=i.textContent.length
if(0===i.textContent.length)if(u&&t.opts.keepFormatOnDelete)e(i).after(e.FE.INVISIBLE_SPACE+e.FE.MARKERS)
else if((2!=i.parentNode.childNodes.length||i.parentNode!=n.parentNode)&&1!=i.parentNode.childNodes.length||t.node.isBlock(i.parentNode)||t.node.isElement(i.parentNode)||!t.node.isDeletable(i.parentNode)){for(;!t.node.isElement(i.parentNode)&&t.node.isEmpty(i.parentNode);){var c=i
i=i.parentNode,c.parentNode.removeChild(c)}e(i).after(e.FE.MARKERS),t.node.isElement(i.parentNode)&&!n.nextSibling&&i.previousSibling&&"BR"==i.previousSibling.tagName&&e(n).after("<br>"),i.parentNode.removeChild(i)}else e(i.parentNode).after(e.FE.MARKERS),e(i.parentNode).remove()
else e(i).after(e.FE.MARKERS)}else t.node.isDeletable(i)?(e(i).after(e.FE.MARKERS),e(i).remove()):n.nextSibling&&"BR"==n.nextSibling.tagName&&t.node.isVoid(i)&&"BR"!=i.tagName?(e(n.nextSibling).remove(),e(n).replaceWith(e.FE.MARKERS)):!1!==t.events.trigger("node.remove",[e(i)])&&(e(i).after(e.FE.MARKERS),e(i).remove())}else if(e.FE.NO_DELETE_TAGS.indexOf(i.tagName)<0&&(t.node.isEditable(i)||t.node.isDeletable(i)))if(t.node.isDeletable(i))e(n).replaceWith(e.FE.MARKERS),e(i).remove()
else if(t.node.isEmpty(i)&&!t.node.isList(i))e(i).remove(),e(n).replaceWith(e.FE.MARKERS)
else{for(t.node.isList(i)&&(i=e(i).find("li:last").get(0)),(r=t.node.contents(i))&&"BR"==r[r.length-1].tagName&&e(r[r.length-1]).remove(),r=t.node.contents(i);r&&t.node.isBlock(r[r.length-1]);)i=r[r.length-1],r=t.node.contents(i)
e(i).append(e.FE.MARKERS)
for(var p=n;!p.previousSibling;)p=p.parentNode
for(;p&&"BR"!==p.tagName&&!t.node.isBlock(p);){var d=p
p=p.nextSibling,e(i).append(d)}p&&"BR"==p.tagName&&e(p).remove(),e(n).remove()}else n.nextSibling&&"BR"==n.nextSibling.tagName&&e(n.nextSibling).remove()}function u(n){var r=0<e(n).parentsUntil(t.$el,"BLOCKQUOTE").length,i=t.node.deepestParent(n,[],!r)
if(i&&"BLOCKQUOTE"==i.tagName){var o=t.node.deepestParent(n,[e(n).parentsUntil(t.$el,"BLOCKQUOTE").get(0)])
o&&o.nextSibling&&(i=o)}if(null!==i){var s,a=i.nextSibling
if(t.node.isBlock(i)&&(t.node.isEditable(i)||t.node.isDeletable(i))&&a&&e.FE.NO_DELETE_TAGS.indexOf(a.tagName)<0)if(t.node.isDeletable(a))e(a).remove(),e(n).replaceWith(e.FE.MARKERS)
else if(t.node.isBlock(a)&&t.node.isEditable(a))if(t.node.isList(a))if(t.node.isEmpty(i,!0))e(i).remove(),e(a).find("li:first").prepend(e.FE.MARKERS)
else{var l=e(a).find("li:first")
"BLOCKQUOTE"==i.tagName&&(s=t.node.contents(i)).length&&t.node.isBlock(s[s.length-1])&&(i=s[s.length-1]),0===l.find("ul, ol").length&&(e(n).replaceWith(e.FE.MARKERS),l.find(t.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==l.get(0)&&e(this).replaceWith(e(this).html()+(t.node.isEmpty(this)?"":"<br>"))}),e(i).append(t.node.contents(l.get(0))),l.remove(),0===e(a).find("li").length&&e(a).remove())}else{if((s=t.node.contents(a)).length&&"BR"==s[0].tagName&&e(s[0]).remove(),"BLOCKQUOTE"!=a.tagName&&"BLOCKQUOTE"==i.tagName)for(s=t.node.contents(i);s.length&&t.node.isBlock(s[s.length-1]);)i=s[s.length-1],s=t.node.contents(i)
else if("BLOCKQUOTE"==a.tagName&&"BLOCKQUOTE"!=i.tagName)for(s=t.node.contents(a);s.length&&t.node.isBlock(s[0]);)a=s[0],s=t.node.contents(a)
e(n).replaceWith(e.FE.MARKERS),e(i).append(a.innerHTML),e(a).remove()}else{for(e(n).replaceWith(e.FE.MARKERS);a&&"BR"!==a.tagName&&!t.node.isBlock(a)&&t.node.isEditable(a);){var u=a
a=a.nextSibling,e(i).append(u)}a&&"BR"==a.tagName&&t.node.isEditable(a)&&e(a).remove()}}}function c(){for(var e=t.el.querySelectorAll("blockquote:empty"),n=0;n<e.length;n++)e[n].parentNode.removeChild(e[n])}function p(n,r,i){var s,a=t.node.deepestParent(n,[],!i)
if(a&&"BLOCKQUOTE"==a.tagName)return o(n,a)?((s=t.html.defaultTag())?e(a).after("<"+s+">"+e.FE.MARKERS+"<br></"+s+">"):e(a).after(e.FE.MARKERS+"<br>"),e(n).remove()):d(n,r,i),!1
if(null==a)(s=t.html.defaultTag())&&t.node.isElement(n.parentNode)?e(n).replaceWith("<"+s+">"+e.FE.MARKERS+"<br></"+s+">"):!n.previousSibling||e(n.previousSibling).is("br")||n.nextSibling?e(n).replaceWith("<br>"+e.FE.MARKERS):e(n).replaceWith("<br>"+e.FE.MARKERS+"<br>")
else{var l=n,u=""
t.node.isBlock(a)&&!r||(u="<br/>")
var c,p="",f="",h="",m="";(s=t.html.defaultTag())&&t.node.isBlock(a)&&(h="<"+s+">",m="</"+s+">",a.tagName==s.toUpperCase()&&(h=t.node.openTagString(e(a).clone().removeAttr("id").get(0))))
do{if(l=l.parentNode,!r||l!=a||r&&!t.node.isBlock(a))if(p+=t.node.closeTagString(l),l==a&&t.node.isBlock(a))f=h+f
else{var g="A"==l.tagName&&o(n,l)?"fr-to-remove":""
f=t.node.openTagString(e(l).clone().addClass(g).get(0))+f}}while(l!=a)
u=p+u+f+(n.parentNode==a&&t.node.isBlock(a)?"":e.FE.INVISIBLE_SPACE)+e.FE.MARKERS,t.node.isBlock(a)&&!e(a).find("*:last").is("br")&&e(a).append("<br/>"),e(n).after('<span id="fr-break"></span>'),e(n).remove(),a.nextSibling&&!t.node.isBlock(a.nextSibling)||t.node.isBlock(a)||e(a).after("<br>"),c=(c=!r&&t.node.isBlock(a)?t.node.openTagString(a)+e(a).html()+m:t.node.openTagString(a)+e(a).html()+t.node.closeTagString(a)).replace(/<span id="fr-break"><\/span>/g,u),e(a).replaceWith(c)}}function d(n,r,s){var a=t.node.deepestParent(n,[],!s)
if(null==a)t.html.defaultTag()&&n.parentNode===t.el?e(n).replaceWith("<"+t.html.defaultTag()+">"+e.FE.MARKERS+"<br></"+t.html.defaultTag()+">"):(n.nextSibling&&!t.node.isBlock(n.nextSibling)||e(n).after("<br>"),e(n).replaceWith("<br>"+e.FE.MARKERS))
else{var l=n,u=""
"PRE"==a.tagName&&(r=!0),t.node.isBlock(a)&&!r||(u="<br>")
var c="",p=""
do{var d=l
if(l=l.parentNode,"BLOCKQUOTE"==a.tagName&&t.node.isEmpty(d)&&!t.node.hasClass(d,"fr-marker")&&0<e(d).find(n).length&&e(d).after(n),("BLOCKQUOTE"!=a.tagName||!o(n,l)&&!i(n,l))&&(!r||l!=a||r&&!t.node.isBlock(a))){c+=t.node.closeTagString(l)
var f="A"==l.tagName&&o(n,l)?"fr-to-remove":""
p=t.node.openTagString(e(l).clone().addClass(f).removeAttr("id").get(0))+p}}while(l!=a)
var h=a==n.parentNode&&t.node.isBlock(a)||n.nextSibling
if("BLOCKQUOTE"==a.tagName){n.previousSibling&&t.node.isBlock(n.previousSibling)&&n.nextSibling&&"BR"==n.nextSibling.tagName&&(e(n.nextSibling).after(n),n.nextSibling&&"BR"==n.nextSibling.tagName&&e(n.nextSibling).remove())
var m=t.html.defaultTag()
u=c+u+(m?"<"+m+">":"")+e.FE.MARKERS+"<br>"+(m?"</"+m+">":"")+p}else u=c+u+p+(h?"":e.FE.INVISIBLE_SPACE)+e.FE.MARKERS
e(n).replaceWith('<span id="fr-break"></span>')
var g=t.node.openTagString(a)+e(a).html()+t.node.closeTagString(a)
g=g.replace(/<span id="fr-break"><\/span>/g,u),e(a).replaceWith(g)}}return{enter:function(a){var l=t.markers.insert()
if(!l)return!0
t.el.normalize()
var u=!1
0<e(l).parentsUntil(t.$el,"BLOCKQUOTE").length&&(u=!(a=!1)),e(l).parentsUntil(t.$el,"TD, TH").length&&(u=!1),n(l)?!s(l)||a||u?p(l,a,u):t.cursorLists._endEnter(l):r(l)?!s(l)||a||u?function n(r,s,a){var l,u=t.node.deepestParent(r,[],!a)
if(u&&"TABLE"==u.tagName)return e(u).find("td:first, th:first").prepend(r),n(r,s,a)
if(u&&"BLOCKQUOTE"==u.tagName){if(i(r,u))return(l=t.html.defaultTag())?e(u).before("<"+l+">"+e.FE.MARKERS+"<br></"+l+">"):e(u).before(e.FE.MARKERS+"<br>"),e(r).remove(),!1
o(r,u)?p(r,s,!0):d(r,s,!0)}if(null==u)(l=t.html.defaultTag())&&t.node.isElement(r.parentNode)?e(r).replaceWith("<"+l+">"+e.FE.MARKERS+"<br></"+l+">"):e(r).replaceWith("<br>"+e.FE.MARKERS)
else{if(t.node.isBlock(u))if("PRE"==u.tagName&&(s=!0),s)e(r).remove(),e(u).prepend("<br>"+e.FE.MARKERS)
else{if(t.node.isEmpty(u,!0))return p(r,s,a)
if(t.opts.keepFormatOnDelete){for(var c=r,f=e.FE.INVISIBLE_SPACE;c!=u&&!t.node.isElement(c);)c=c.parentNode,f=t.node.openTagString(c)+f+t.node.closeTagString(c)
e(u).before(f)}else e(u).before(t.node.openTagString(e(u).clone().removeAttr("id").get(0))+"<br>"+t.node.closeTagString(u))}else e(u).before("<br>")
e(r).remove()}}(l,a,u):t.cursorLists._startEnter(l):!s(l)||a||u?d(l,a,u):t.cursorLists._middleEnter(l),t.$el.find(".fr-to-remove").each(function(){for(var n=t.node.contents(this),r=0;r<n.length;r++)n[r].nodeType==Node.TEXT_NODE&&(n[r].textContent=n[r].textContent.replace(/\u200B/g,""))
e(this).replaceWith(this.innerHTML)}),t.html.fillEmptyBlocks(!0),t.opts.htmlUntouched||(t.html.cleanEmptyTags(),t.clean.lists()),t.spaces.normalizeAroundCursor(),t.selection.restore()},backspace:function(){var o=!1,u=t.markers.insert()
if(!u)return!0
for(var p=u.parentNode;p&&!t.node.isElement(p);){if("false"===p.getAttribute("contenteditable"))return e(u).replaceWith(e.FE.MARKERS),t.selection.restore(),!1
if("true"===p.getAttribute("contenteditable"))break
p=p.parentNode}t.el.normalize()
var d=u.previousSibling
if(d){var f=d.textContent
f&&f.length&&8203==f.charCodeAt(f.length-1)&&(1==f.length?e(d).remove():d.textContent=d.textContent.substr(0,f.length-a(f)))}return n(u)?o=l(u):r(u)?s(u)&&i(u,e(u).parents("li:first").get(0))?t.cursorLists._backspace(u):function(n){for(var r=0<e(n).parentsUntil(t.$el,"BLOCKQUOTE").length,i=t.node.deepestParent(n,[],!r),o=i;i&&!i.previousSibling&&"BLOCKQUOTE"!=i.tagName&&i.parentElement!=t.el&&!t.node.hasClass(i.parentElement,"fr-inner")&&e.FE.SIMPLE_ENTER_TAGS.indexOf(i.parentElement.tagName)<0;)i=i.parentElement
if(i&&"BLOCKQUOTE"==i.tagName){var s=t.node.deepestParent(n,[e(n).parentsUntil(t.$el,"BLOCKQUOTE").get(0)])
s&&s.previousSibling&&(o=i=s)}if(null!==i){var a,l=i.previousSibling
if(t.node.isBlock(i)&&t.node.isEditable(i)&&l&&e.FE.NO_DELETE_TAGS.indexOf(l.tagName)<0)if(t.node.isDeletable(l))e(l).remove(),e(n).replaceWith(e.FE.MARKERS)
else if(t.node.isEditable(l))if(t.node.isBlock(l))if(t.node.isEmpty(l)&&!t.node.isList(l))e(l).remove(),e(n).after(t.opts.keepFormatOnDelete?e.FE.INVISIBLE_SPACE:"")
else{if(t.node.isList(l)&&(l=e(l).find("li:last").get(0)),(a=t.node.contents(l)).length&&"BR"==a[a.length-1].tagName&&e(a[a.length-1]).remove(),"BLOCKQUOTE"==l.tagName&&"BLOCKQUOTE"!=i.tagName)for(a=t.node.contents(l);a.length&&t.node.isBlock(a[a.length-1]);)l=a[a.length-1],a=t.node.contents(l)
else if("BLOCKQUOTE"!=l.tagName&&"BLOCKQUOTE"==i.tagName)for(a=t.node.contents(i);a.length&&t.node.isBlock(a[0]);)i=a[0],a=t.node.contents(i)
if(t.node.isEmpty(i))e(n).remove(),t.selection.setAtEnd(l,!0)
else{e(n).replaceWith(e.FE.MARKERS)
var u=l.childNodes
t.node.isBlock(u[u.length-1])?e(u[u.length-1]).append(o.innerHTML):e(l).append(o.innerHTML)}e(o).remove(),t.node.isEmpty(i)&&e(i).remove()}else e(n).replaceWith(e.FE.MARKERS),"BLOCKQUOTE"==i.tagName&&l.nodeType==Node.ELEMENT_NODE?e(l).remove():(e(l).after(t.node.isEmpty(i)?"":e(i).html()),e(i).remove(),"BR"==l.tagName&&e(l).remove())}}(u):o=l(u),e(u).remove(),c(),t.html.fillEmptyBlocks(!0),t.opts.htmlUntouched||(t.html.cleanEmptyTags(),t.clean.lists(),t.spaces.normalizeAroundCursor()),t.selection.restore(),o},del:function(){var i=t.markers.insert()
if(!i)return!1
if(t.el.normalize(),n(i))if(s(i))if(0===e(i).parents("li:first").find("ul, ol").length)t.cursorLists._del(i)
else{var o=e(i).parents("li:first").find("ul:first, ol:first").find("li:first");(o=o.find(t.html.blockTagsQuery()).get(-1)||o).prepend(i),t.cursorLists._backspace(i)}else u(i)
else r(i),function(r){for(var i,o=r;!o.nextSibling;)if(o=o.parentNode,t.node.isElement(o))return!1
if("BR"==(o=o.nextSibling).tagName&&t.node.isEditable(o))if(o.nextSibling){if(t.node.isBlock(o.nextSibling)&&t.node.isEditable(o.nextSibling)){if(!(e.FE.NO_DELETE_TAGS.indexOf(o.nextSibling.tagName)<0))return void e(o).remove()
o=o.nextSibling,e(o.previousSibling).remove()}}else if(n(o))return void(s(r)?t.cursorLists._del(r):t.node.deepestParent(o)&&((!t.node.isEmpty(t.node.blockParent(o))||(t.node.blockParent(o).nextSibling&&e.FE.NO_DELETE_TAGS.indexOf(t.node.blockParent(o).nextSibling.tagName))<0)&&e(o).remove(),u(r)))
if(!t.node.isBlock(o)&&t.node.isEditable(o)){for(i=t.node.contents(o);o.nodeType!=Node.TEXT_NODE&&i.length&&!t.node.isDeletable(o)&&t.node.isEditable(o);)o=i[0],i=t.node.contents(o)
o.nodeType==Node.TEXT_NODE?(e(o).before(e.FE.MARKERS),o.textContent.length&&(o.textContent=o.textContent.substring(a(o.textContent,!0),o.textContent.length))):t.node.isDeletable(o)?(e(o).before(e.FE.MARKERS),e(o).remove()):!1!==t.events.trigger("node.remove",[e(o)])&&(e(o).before(e.FE.MARKERS),e(o).remove()),e(r).remove()}else if(e.FE.NO_DELETE_TAGS.indexOf(o.tagName)<0&&(t.node.isEditable(o)||t.node.isDeletable(o)))if(t.node.isDeletable(o))e(r).replaceWith(e.FE.MARKERS),e(o).remove()
else if(t.node.isList(o))r.previousSibling?(e(o).find("li:first").prepend(r),t.cursorLists._backspace(r)):(e(o).find("li:first").prepend(e.FE.MARKERS),e(r).remove())
else if((i=t.node.contents(o))&&"BR"==i[0].tagName&&e(i[0]).remove(),i&&"BLOCKQUOTE"==o.tagName){var l=i[0]
for(e(r).before(e.FE.MARKERS);l&&"BR"!=l.tagName;){var c=l
l=l.nextSibling,e(r).before(c)}l&&"BR"==l.tagName&&e(l).remove()}else e(r).after(e(o).html()).after(e.FE.MARKERS),e(o).remove()}(i)
e(i).remove(),c(),t.html.fillEmptyBlocks(!0),t.opts.htmlUntouched||(t.html.cleanEmptyTags(),t.clean.lists()),t.spaces.normalizeAroundCursor(),t.selection.restore()},isAtEnd:o,isAtStart:i}},e.FE.ENTER_P=0,e.FE.ENTER_DIV=1,e.FE.ENTER_BR=2,e.FE.KEYCODE={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,FF_SEMICOLON:59,FF_EQUALS:61,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,FF_HYPHEN:173,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,HYPHEN:189,PERIOD:190,SLASH:191,APOSTROPHE:192,TILDE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,IME:229},e.extend(e.FE.DEFAULTS,{enter:e.FE.ENTER_P,multiLine:!0,tabSpaces:0}),e.FE.MODULES.keys=function(t){var n,r,i,o=!1
function s(){if(t.browser.mozilla&&t.selection.isCollapsed()&&!o){var e=t.selection.ranges(0),n=e.startContainer,r=e.startOffset
n&&n.nodeType==Node.TEXT_NODE&&r<=n.textContent.length&&0<r&&32==n.textContent.charCodeAt(r-1)&&(t.selection.save(),t.spaces.normalize(),t.selection.restore())}}function a(){t.selection.isFull()&&setTimeout(function(){var n=t.html.defaultTag()
n?t.$el.html("<"+n+">"+e.FE.MARKERS+"<br/></"+n+">"):t.$el.html(e.FE.MARKERS+"<br/>"),t.selection.restore(),t.placeholder.refresh(),t.button.bulkRefresh(),t.undo.saveStep()},0)}function l(){o=!1}function u(){o=!1}function c(){var n=t.html.defaultTag()
n?t.$el.html("<"+n+">"+e.FE.MARKERS+"<br/></"+n+">"):t.$el.html(e.FE.MARKERS+"<br/>"),t.selection.restore()}function p(r){var i=t.selection.element()
if(i&&0<=["INPUT","TEXTAREA"].indexOf(i.tagName))return!0
if(r&&m(r.which))return!0
t.events.disableBlur()
var s=r.which
if(16===s)return!0
if((n=s)===e.FE.KEYCODE.IME)return o=!0
o=!1
var a,l,u,p=g(s)&&!h(r)&&!r.altKey,d=s==e.FE.KEYCODE.BACKSPACE||s==e.FE.KEYCODE.DELETE
if((t.selection.isFull()&&!t.opts.keepFormatOnDelete&&!t.placeholder.isVisible()||d&&t.placeholder.isVisible()&&t.opts.keepFormatOnDelete)&&(p||d)&&(c(),!g(s)))return r.preventDefault(),!0
s==e.FE.KEYCODE.ENTER?r.shiftKey?((u=r).preventDefault(),u.stopPropagation(),t.opts.multiLine&&(t.selection.isCollapsed()||t.selection.remove(),t.cursor.enter(!0))):(l=r,t.opts.multiLine?(t.helpers.isIOS()||(l.preventDefault(),l.stopPropagation()),t.selection.isCollapsed()||t.selection.remove(),t.cursor.enter()):(l.preventDefault(),l.stopPropagation())):s===e.FE.KEYCODE.BACKSPACE&&(r.metaKey||r.ctrlKey)?setTimeout(function(){t.events.disableBlur(),t.events.focus()},0):s!=e.FE.KEYCODE.BACKSPACE||h(r)||r.altKey?s!=e.FE.KEYCODE.DELETE||h(r)||r.altKey||r.shiftKey?s==e.FE.KEYCODE.SPACE?function(n){var r=t.selection.element()
if(!t.helpers.isMobile()&&r&&"A"==r.tagName){n.preventDefault(),n.stopPropagation(),t.selection.isCollapsed()||t.selection.remove()
var i=t.markers.insert()
if(i){var o=i.previousSibling
!i.nextSibling&&i.parentNode&&"A"==i.parentNode.tagName?(i.parentNode.insertAdjacentHTML("afterend","&nbsp;"+e.FE.MARKERS),i.parentNode.removeChild(i)):(o&&o.nodeType==Node.TEXT_NODE&&1==o.textContent.length&&160==o.textContent.charCodeAt(0)?o.textContent=o.textContent+" ":i.insertAdjacentHTML("beforebegin","&nbsp;"),i.outerHTML=e.FE.MARKERS),t.selection.restore()}}}(r):s==e.FE.KEYCODE.TAB?function(e){if(0<t.opts.tabSpaces)if(t.selection.isCollapsed()){t.undo.saveStep(),e.preventDefault(),e.stopPropagation()
for(var n="",r=0;r<t.opts.tabSpaces;r++)n+="&nbsp;"
t.html.insert(n),t.placeholder.refresh(),t.undo.saveStep()}else e.preventDefault(),e.stopPropagation(),e.shiftKey?t.commands.outdent():t.commands.indent()}(r):h(r)||!g(r.which)||t.selection.isCollapsed()||r.ctrlKey||t.selection.remove():t.placeholder.isVisible()?(t.opts.keepFormatOnDelete||c(),r.preventDefault(),r.stopPropagation()):((a=r).preventDefault(),a.stopPropagation(),""===t.selection.text()?t.cursor.del():t.selection.remove(),t.placeholder.refresh()):t.placeholder.isVisible()?(t.opts.keepFormatOnDelete||c(),r.preventDefault(),r.stopPropagation()):function(e){if(t.selection.isCollapsed())if(t.cursor.backspace(),t.helpers.isIOS()){var n=t.selection.ranges(0)
n.deleteContents(),n.insertNode(document.createTextNode("​")),t.selection.get().modify("move","forward","character")}else e.preventDefault(),e.stopPropagation()
else e.preventDefault(),e.stopPropagation(),t.selection.remove(),t.html.fillEmptyBlocks()
t.placeholder.refresh()}(r),t.events.enableBlur()}function d(){if(!t.$wp)return!0
var n
t.opts.height||t.opts.heightMax?(n=t.position.getBoundingRect().top,(t.helpers.isIOS()||t.helpers.isAndroid())&&(n-=t.helpers.scrollTop()),t.opts.iframe&&(n+=t.$iframe.offset().top),n>t.$wp.offset().top-t.helpers.scrollTop()+t.$wp.height()-20&&t.$wp.scrollTop(n+t.$wp.scrollTop()-(t.$wp.height()+t.$wp.offset().top)+t.helpers.scrollTop()+20)):(n=t.position.getBoundingRect().top,t.opts.toolbarBottom&&(n+=t.opts.toolbarStickyOffset),(t.helpers.isIOS()||t.helpers.isAndroid())&&(n-=t.helpers.scrollTop()),t.opts.iframe&&(n+=t.$iframe.offset().top,n-=t.helpers.scrollTop()),(n+=t.opts.toolbarStickyOffset)>t.o_win.innerHeight-20&&e(t.o_win).scrollTop(n+t.helpers.scrollTop()-t.o_win.innerHeight+20),n=t.position.getBoundingRect().top,t.opts.toolbarBottom||(n-=t.opts.toolbarStickyOffset),(t.helpers.isIOS()||t.helpers.isAndroid())&&(n-=t.helpers.scrollTop()),t.opts.iframe&&(n+=t.$iframe.offset().top,n-=t.helpers.scrollTop()),n<t.$tb.height()+20&&e(t.o_win).scrollTop(n+t.helpers.scrollTop()-t.$tb.height()-20))}function f(r){var i=t.selection.element()
if(i&&0<=["INPUT","TEXTAREA"].indexOf(i.tagName))return!0
if(r&&0===r.which&&n&&(r.which=n),t.helpers.isAndroid()&&t.browser.mozilla)return!0
if(o)return!1
if(r&&t.helpers.isIOS()&&r.which==e.FE.KEYCODE.ENTER&&t.doc.execCommand("delete"),!t.selection.isCollapsed())return!0
if(r&&(r.which===e.FE.KEYCODE.META||r.which==e.FE.KEYCODE.CTRL))return!0
if(r&&m(r.which))return!0
r&&!t.helpers.isIOS()&&(r.which==e.FE.KEYCODE.ENTER||r.which==e.FE.KEYCODE.BACKSPACE||37<=r.which&&r.which<=40&&!t.browser.msie)&&d()
var s,a=t.selection.element()
!function(e){if(!e)return!1
var t=e.innerHTML
return!!((t=t.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,""))&&/\u200B/.test(t)&&0<t.replace(/\u200B/gi,"").length)}(a)||t.node.hasClass(a,"fr-marker")||"IFRAME"==a.tagName||(s=a,t.helpers.isIOS()&&0!==((s.textContent||"").match(/[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi)||[]).length)||(t.selection.save(),function(e){for(var n=t.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,t.node.filter(function(e){return/\u200B/gi.test(e.textContent)}),!1);n.nextNode();){var r=n.currentNode
r.textContent=r.textContent.replace(/\u200B/gi,"")}}(a),t.selection.restore())}function h(e){if(-1!=navigator.userAgent.indexOf("Mac OS X")){if(e.metaKey&&!e.altKey)return!0}else if(e.ctrlKey&&!e.altKey)return!0
return!1}function m(t){if(t>=e.FE.KEYCODE.ARROW_LEFT&&t<=e.FE.KEYCODE.ARROW_DOWN)return!0}function g(n){if(n>=e.FE.KEYCODE.ZERO&&n<=e.FE.KEYCODE.NINE)return!0
if(n>=e.FE.KEYCODE.NUM_ZERO&&n<=e.FE.KEYCODE.NUM_MULTIPLY)return!0
if(n>=e.FE.KEYCODE.A&&n<=e.FE.KEYCODE.Z)return!0
if(t.browser.webkit&&0===n)return!0
switch(n){case e.FE.KEYCODE.SPACE:case e.FE.KEYCODE.QUESTION_MARK:case e.FE.KEYCODE.NUM_PLUS:case e.FE.KEYCODE.NUM_MINUS:case e.FE.KEYCODE.NUM_PERIOD:case e.FE.KEYCODE.NUM_DIVISION:case e.FE.KEYCODE.SEMICOLON:case e.FE.KEYCODE.FF_SEMICOLON:case e.FE.KEYCODE.DASH:case e.FE.KEYCODE.EQUALS:case e.FE.KEYCODE.FF_EQUALS:case e.FE.KEYCODE.COMMA:case e.FE.KEYCODE.PERIOD:case e.FE.KEYCODE.SLASH:case e.FE.KEYCODE.APOSTROPHE:case e.FE.KEYCODE.SINGLE_QUOTE:case e.FE.KEYCODE.OPEN_SQUARE_BRACKET:case e.FE.KEYCODE.BACKSLASH:case e.FE.KEYCODE.CLOSE_SQUARE_BRACKET:return!0
default:return!1}}function v(n){var o=n.which
if(h(n)||37<=o&&o<=40||!g(o)&&o!=e.FE.KEYCODE.DELETE&&o!=e.FE.KEYCODE.BACKSPACE&&o!=e.FE.KEYCODE.ENTER&&o!=e.FE.KEYCODE.IME)return!0
r||(i=t.snapshot.get(),t.undo.canDo()||t.undo.saveStep()),clearTimeout(r),r=setTimeout(function(){r=null,t.undo.saveStep()},Math.max(250,t.opts.typingTimer))}function b(e){var n=e.which
if(h(e)||37<=n&&n<=40)return!0
i&&r?(t.undo.saveStep(i),i=null):void 0!==n&&0!==n||i||r||t.undo.saveStep()}function y(e){if(e&&"BR"==e.tagName)return!1
try{return 0===(e.textContent||"").length&&e.querySelector&&!e.querySelector(":scope > br")||e.childNodes&&1==e.childNodes.length&&e.childNodes[0].getAttribute&&("false"==e.childNodes[0].getAttribute("contenteditable")||t.node.hasClass(e.childNodes[0],"fr-img-caption"))}catch(e){return!1}}function E(n){var r=t.el.childNodes,i=t.html.defaultTag()
return!(!n.target||n.target===t.el)||0===r.length||void(t.$el.outerHeight()-n.offsetY<=10?y(r[r.length-1])&&(i?t.$el.append("<"+i+">"+e.FE.MARKERS+"<br></"+i+">"):t.$el.append(e.FE.MARKERS+"<br>"),t.selection.restore(),d()):n.offsetY<=10&&y(r[0])&&(i?t.$el.prepend("<"+i+">"+e.FE.MARKERS+"<br></"+i+">"):t.$el.prepend(e.FE.MARKERS+"<br>"),t.selection.restore(),d()))}function T(){r&&clearTimeout(r)}return{_init:function(){t.events.on("keydown",v),t.events.on("input",s),t.events.on("mousedown",u),t.events.on("keyup input",b),t.events.on("keypress",l),t.events.on("keydown",p),t.events.on("keyup",f),t.events.on("destroy",T),t.events.on("html.inserted",f),t.events.on("cut",a),t.events.on("click",E)},ctrlKey:h,isCharacter:g,isArrow:m,forceUndo:function(){r&&(clearTimeout(r),t.undo.saveStep(),i=null)},isIME:function(){return o},isBrowserAction:function(t){var n=t.which
return h(t)||n==e.FE.KEYCODE.F5},positionCaret:d}},e.FE.MODULES.accessibility=function(t){var n=!0
function r(e){e&&e.length&&!t.$el.find('[contenteditable="true"]').is(":focus")&&(e.data("blur-event-set")||e.parents(".fr-popup").length||(t.events.$on(e,"blur",function(){var n=e.parents(".fr-toolbar, .fr-popup").data("instance")||t
n.events.blurActive()&&n.events.trigger("blur"),setTimeout(function(){n.events.enableBlur()},100)},!0),e.data("blur-event-set",!0)),(e.parents(".fr-toolbar, .fr-popup").data("instance")||t).events.disableBlur(),e.focus(),t.shared.$f_el=e)}function i(e,t){var n=t?"last":"first",i=e.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible")[n]()
if(i.length)return r(i),!0}function o(e){return e.is("input, textarea, select")&&a(),t.events.disableBlur(),e.focus(),!0}function s(e,n){var r=e.find("input, textarea, button, select").filter(":visible").not(":disabled").filter(n?":last":":first")
if(r.length)return o(r)
if(t.shared.with_kb){var i=e.find(".fr-active-item:visible:first")
if(i.length)return o(i)
var s=e.find("[tabIndex]:visible:first")
if(s.length)return o(s)}}function a(){0===t.$el.find(".fr-marker").length&&t.core.hasFocus()&&t.selection.save()}function l(){var e=t.popups.areVisible()
if(e){var n=e.find(".fr-buttons")
return n.find("button:focus, .fr-group span:focus").length?!i(e.data("instance").$tb):!i(n)}return!i(t.$tb)}function u(){var e=null
return t.shared.$f_el.is(".fr-dropdown.fr-active")?e=t.shared.$f_el:t.shared.$f_el.closest(".fr-dropdown-menu").prev().is(".fr-dropdown.fr-active")&&(e=t.shared.$f_el.closest(".fr-dropdown-menu").prev()),e}function c(n,o,a){if(t.shared.$f_el){var l=u()
l&&(t.button.click(l),t.shared.$f_el=l)
var c,p=n.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible"),d=p.index(t.shared.$f_el)
if(0===d&&!a||d==p.length-1&&a)o&&(n.parent().is(".fr-popup")&&(c=!s(n.parent().children().not(".fr-buttons"),!a)),!1===c&&(t.shared.$f_el=null)),o&&!1===c||i(n,!a)
else r(e(p.get(d+(a?1:-1))))
return!1}}function p(e,t){return c(e,t,!0)}function d(e,t){return c(e,t)}function f(e){if(t.shared.$f_el){var n
if(t.shared.$f_el.is(".fr-dropdown.fr-active"))return r(n=e?t.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").first():t.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").last()),!1
if(t.shared.$f_el.is("a.fr-command"))return(n=e?t.shared.$f_el.closest("li").nextAll(":visible:first").find(".fr-command:not(.fr-disabled)").first():t.shared.$f_el.closest("li").prevAll(":visible:first").find(".fr-command:not(.fr-disabled)").first()).length||(n=e?t.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").first():t.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").last()),r(n),!1}}function h(){if(t.shared.$f_el){if(t.shared.$f_el.hasClass("fr-dropdown"))t.button.click(t.shared.$f_el)
else if(t.shared.$f_el.is("button.fr-back")){t.opts.toolbarInline&&(t.events.disableBlur(),t.events.focus())
var e=t.popups.areVisible(t)
e&&(t.shared.with_kb=!1),t.button.click(t.shared.$f_el),v(e)}else{if(t.events.disableBlur(),t.button.click(t.shared.$f_el),t.shared.$f_el.attr("data-popup")){var n=t.popups.areVisible(t)
n&&n.data("popup-button",t.shared.$f_el)}else if(t.shared.$f_el.attr("data-modal")){var r=t.modals.areVisible(t)
r&&r.data("modal-button",t.shared.$f_el)}t.shared.$f_el=null}return!1}}function m(){t.shared.$f_el&&(t.events.disableBlur(),t.shared.$f_el.blur(),t.shared.$f_el=null),!1!==t.events.trigger("toolbar.focusEditor")&&(t.events.disableBlur(),t.$el.focus(),t.events.focus())}function g(r){r&&r.length&&(t.events.$on(r,"keydown",function(n){if(!e(n.target).is("a.fr-command, button.fr-command, .fr-group span.fr-command"))return!0
var i=r.parents(".fr-popup").data("instance")||r.data("instance")||t
t.shared.with_kb=!0
var o=i.accessibility.exec(n,r)
return t.shared.with_kb=!1,o},!0),t.events.$on(r,"mouseenter","[tabIndex]",function(i){var o=r.parents(".fr-popup").data("instance")||r.data("instance")||t
if(!n)return i.stopPropagation(),void i.preventDefault()
var s=e(i.currentTarget)
o.shared.$f_el&&o.shared.$f_el.not(s)&&o.accessibility.focusEditor()},!0))}function v(e){var t=e.data("popup-button")
t&&setTimeout(function(){r(t),e.data("popup-button",null)},0)}function b(e){var n=t.popups.areVisible(e)
n&&n.data("popup-button",null)}function y(n){var r=-1!=navigator.userAgent.indexOf("Mac OS X")?n.metaKey:n.ctrlKey
if(n.which==e.FE.KEYCODE.F10&&!r&&!n.shiftKey&&n.altKey){t.shared.with_kb=!0
var i=t.popups.areVisible(t),o=!1
return i&&(o=s(i.children().not(".fr-buttons"))),o||l(),t.shared.with_kb=!1,n.preventDefault(),n.stopPropagation(),!1}return!0}return{_init:function(){t.$wp?t.events.on("keydown",y,!0):t.events.$on(t.$win,"keydown",y,!0),t.events.on("mousedown",function(e){b(t),t.shared.$f_el&&(t.accessibility.restoreSelection(),e.stopPropagation(),t.events.disableBlur(),t.shared.$f_el=null)},!0),t.events.on("blur",function(){t.shared.$f_el=null,b(t)},!0)},registerPopup:function(r){var o,a,l=t.popups.get(r),u=(o=r,a=t.popups.get(o),{_tiKeydown:function(n){var r=a.data("instance")||t
if(!1===r.events.trigger("popup.tab",[n]))return!1
var l=n.which,u=a.find(":focus:first")
if(e.FE.KEYCODE.TAB==l){n.preventDefault()
var c=a.children().not(".fr-buttons"),p=c.find("input, textarea, button, select").filter(":visible").not(".fr-no-touch input, .fr-no-touch textarea, .fr-no-touch button, .fr-no-touch select, :disabled").toArray(),d=p.indexOf(this)+(n.shiftKey?-1:1)
if(0<=d&&d<p.length)return r.events.disableBlur(),e(p[d]).focus(),n.stopPropagation(),!1
var f=a.find(".fr-buttons")
if(f.length&&i(f,!!n.shiftKey))return n.stopPropagation(),!1
if(s(c))return n.stopPropagation(),!1}else{if(e.FE.KEYCODE.ENTER!=l||!n.target||"TEXTAREA"===n.target.tagName)return e.FE.KEYCODE.ESC==l?(n.preventDefault(),n.stopPropagation(),r.accessibility.restoreSelection(),r.popups.isVisible(o)&&a.find(".fr-back:visible").length?(r.opts.toolbarInline&&(r.events.disableBlur(),r.events.focus()),r.button.exec(a.find(".fr-back:visible:first")),v(a)):r.popups.isVisible(o)&&a.find(".fr-dismiss:visible").length?r.button.exec(a.find(".fr-dismiss:visible:first")):(r.popups.hide(o),r.opts.toolbarInline&&r.toolbar.showInline(null,!0),v(a)),!1):e.FE.KEYCODE.SPACE==l&&(u.is(".fr-submit")||u.is(".fr-dismiss"))?(n.preventDefault(),n.stopPropagation(),r.events.disableBlur(),r.button.exec(u),!0):r.keys.isBrowserAction(n)?void n.stopPropagation():u.is("input[type=text], textarea")?void n.stopPropagation():e.FE.KEYCODE.SPACE==l&&(u.is(".fr-link-attr")||u.is("input[type=file]"))?void n.stopPropagation():(n.stopPropagation(),n.preventDefault(),!1)
var h=null
0<a.find(".fr-submit:visible").length?h=a.find(".fr-submit:visible:first"):a.find(".fr-dismiss:visible").length&&(h=a.find(".fr-dismiss:visible:first")),h&&(n.preventDefault(),n.stopPropagation(),r.events.disableBlur(),r.button.exec(h))}},_tiMouseenter:function(){b(a.data("instance")||t)}})
g(l.find(".fr-buttons")),t.events.$on(l,"mouseenter","tabIndex",u._tiMouseenter,!0),t.events.$on(l.children().not(".fr-buttons"),"keydown","[tabIndex]",u._tiKeydown,!0),t.popups.onHide(r,function(){(l.data("instance")||t).accessibility.restoreSelection()}),t.popups.onShow(r,function(){n=!1,setTimeout(function(){n=!0},0)})},registerToolbar:g,focusToolbarElement:r,focusToolbar:i,focusContent:s,focusPopup:function(e){var r=e.children().not(".fr-buttons")
r.data("mouseenter-event-set")||(t.events.$on(r,"mouseenter","[tabIndex]",function(i){var o=e.data("instance")||t
if(!n)return i.stopPropagation(),void i.preventDefault()
var s=r.find(":focus:first")
s.length&&!s.is("input, button, textarea, select")&&(o.events.disableBlur(),s.blur(),o.events.disableBlur(),o.events.focus())}),r.data("mouseenter-event-set",!0)),!s(r)&&t.shared.with_kb&&i(e.find(".fr-buttons"))},focusModal:function(e){t.core.hasFocus()||(t.events.disableBlur(),t.events.focus()),t.accessibility.saveSelection(),t.events.disableBlur(),t.$el.blur(),t.selection.clear(),t.events.disableBlur(),t.shared.with_kb?e.find(".fr-command[tabIndex], [tabIndex]").first().focus():e.find("[tabIndex]:first").focus()},focusEditor:m,focusPopupButton:v,focusModalButton:function(e){var t=e.data("modal-button")
t&&setTimeout(function(){r(t),e.data("modal-button",null)},0)},hasFocus:function(){return null!=t.shared.$f_el},exec:function(n,i){var o=-1!=navigator.userAgent.indexOf("Mac OS X")?n.metaKey:n.ctrlKey,s=n.which,a=!1
return s!=e.FE.KEYCODE.TAB||o||n.shiftKey||n.altKey?s!=e.FE.KEYCODE.ARROW_RIGHT||o||n.shiftKey||n.altKey?s!=e.FE.KEYCODE.TAB||o||!n.shiftKey||n.altKey?s!=e.FE.KEYCODE.ARROW_LEFT||o||n.shiftKey||n.altKey?s!=e.FE.KEYCODE.ARROW_UP||o||n.shiftKey||n.altKey?s!=e.FE.KEYCODE.ARROW_DOWN||o||n.shiftKey||n.altKey?s!=e.FE.KEYCODE.ENTER&&s!=e.FE.KEYCODE.SPACE||o||n.shiftKey||n.altKey?s!=e.FE.KEYCODE.ESC||o||n.shiftKey||n.altKey?s!=e.FE.KEYCODE.F10||o||n.shiftKey||!n.altKey||(a=l()):a=function(e){if(t.shared.$f_el){var n=u()
return n?(t.button.click(n),r(n)):e.parent().find(".fr-back:visible").length?(t.shared.with_kb=!1,t.opts.toolbarInline&&(t.events.disableBlur(),t.events.focus()),t.button.exec(e.parent().find(".fr-back:visible:first")),v(e.parent())):t.shared.$f_el.is("button, .fr-group span")&&(e.parent().is(".fr-popup")?(t.accessibility.restoreSelection(),t.shared.$f_el=null,!1!==t.events.trigger("toolbar.esc")&&(t.popups.hide(e.parent()),t.opts.toolbarInline&&t.toolbar.showInline(null,!0),v(e.parent()))):m()),!1}}(i):a=h():a=t.shared.$f_el&&t.shared.$f_el.is(".fr-dropdown:not(.fr-active)")?h():f(!0):a=f():a=d(i):a=d(i,!0):a=p(i):a=p(i,!0),t.shared.$f_el||void 0!==a||(a=!0),!a&&t.keys.isBrowserAction(n)&&(a=!0),!!a||(n.preventDefault(),n.stopPropagation(),!1)},saveSelection:a,restoreSelection:function(){t.$el.find(".fr-marker").length&&(t.events.disableBlur(),t.selection.restore(),t.events.enableBlur())}}},e.FE.MODULES.format=function(t){function n(e,t){var n="<"+e
for(var r in t)t.hasOwnProperty(r)&&(n+=" "+r+'="'+t[r]+'"')
return n+">"}function r(e,t){var n=e
for(var r in t)t.hasOwnProperty(r)&&(n+="id"==r?"#"+t[r]:"class"==r?"."+t[r]:"["+r+'="'+t[r]+'"]')
return n}function i(e,t){return!(!e||e.nodeType!=Node.ELEMENT_NODE)&&(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function o(r,i,s){if(r){for(;r.nodeType===Node.COMMENT_NODE;)r=r.nextSibling
if(r){if(t.node.isBlock(r)&&"HR"!==r.tagName)return o(r.firstChild,i,s),!1
for(var a=e(n(i,s)).insertBefore(r),l=r;l&&!e(l).is(".fr-marker")&&0===e(l).find(".fr-marker").length&&"UL"!=l.tagName&&"OL"!=l.tagName;){var u=l
l=l.nextSibling,a.append(u)}if(l)(e(l).find(".fr-marker").length||"UL"==l.tagName||"OL"==l.tagName)&&o(l.firstChild,i,s)
else{for(var c=a.get(0).parentNode;c&&!c.nextSibling&&!t.node.isElement(c);)c=c.parentNode
if(c){var p=c.nextSibling
p&&(t.node.isBlock(p)?"HR"===p.tagName?o(p.nextSibling,i,s):o(p.firstChild,i,s):o(p,i,s))}}a.is(":empty")&&a.remove()}}}function s(s,a){var l
if(void 0===a&&(a={}),a.style&&delete a.style,t.selection.isCollapsed())t.markers.insert(),t.$el.find(".fr-marker").replaceWith(n(s,a)+e.FE.INVISIBLE_SPACE+e.FE.MARKERS+"</"+s+">"),t.selection.restore()
else{var u
t.selection.save(),o(t.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,s,a)
do{for(u=t.$el.find(r(s,a)+" > "+r(s,a)),l=0;l<u.length;l++)u[l].outerHTML=u[l].innerHTML}while(u.length)
t.el.normalize()
var c=t.el.querySelectorAll(".fr-marker")
for(l=0;l<c.length;l++){var p=e(c[l])
!0===p.data("type")?i(p.get(0).nextSibling,r(s,a))&&p.next().prepend(p):i(p.get(0).previousSibling,r(s,a))&&p.prev().append(p)}t.selection.restore()}}function a(e,n,o,s){if(!s){var a=!1
if(!0===e.data("type"))for(;t.node.isFirstSibling(e.get(0))&&!e.parent().is(t.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().before(e),a=!0
else if(!1===e.data("type"))for(;t.node.isLastSibling(e.get(0))&&!e.parent().is(t.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().after(e),a=!0
if(a)return!0}if(e.parents(n).length||void 0===n){var l="",u="",c=e.parent()
if(c.is(t.$el)||t.node.isBlock(c.get(0)))return!1
for(;!t.node.isBlock(c.parent().get(0))&&(void 0===n||void 0!==n&&!i(c.get(0),r(n,o)));)l+=t.node.closeTagString(c.get(0)),u=t.node.openTagString(c.get(0))+u,c=c.parent()
var p=e.get(0).outerHTML
e.replaceWith('<span id="mark"></span>')
var d=c.html().replace(/<span id="mark"><\/span>/,l+t.node.closeTagString(c.get(0))+u+p+l+t.node.openTagString(c.get(0))+u)
return c.replaceWith(t.node.openTagString(c.get(0))+d+t.node.closeTagString(c.get(0))),!0}return!1}function l(n,o){void 0===o&&(o={}),o.style&&delete o.style
var s=t.selection.isCollapsed()
t.selection.save()
for(var l=!0;l;){l=!1
for(var u=t.$el.find(".fr-marker"),c=0;c<u.length;c++){var p=e(u[c]),d=null
if(p.attr("data-cloned")||s||(d=p.clone().removeClass("fr-marker").addClass("fr-clone"),!0===p.data("type")?p.attr("data-cloned",!0).after(d):p.attr("data-cloned",!0).before(d)),a(p,n,o,s)){l=!0
break}}}!function n(o,s,a,l){for(var u=t.node.contents(o.get(0)),c=0;c<u.length;c++){var p=u[c]
if(t.node.hasClass(p,"fr-marker"))s=(s+1)%2
else if(s)if(0<e(p).find(".fr-marker").length)s=n(e(p),s,a,l)
else{for(var d=e(p).find(a||"*:not(a):not(br)"),f=d.length-1;0<=f;f--){var h=d[f]
t.node.isBlock(h)||t.node.isVoid(h)||void 0!==a&&!i(h,r(a,l))?t.node.isBlock(h)&&void 0===a&&"TABLE"!=p.tagName&&t.node.clearAttributes(h):t.node.hasClass(h,"fr-clone")||(h.outerHTML=h.innerHTML)}void 0===a&&p.nodeType==Node.ELEMENT_NODE&&!t.node.isVoid(p)||i(p,r(a,l))?e(p).replaceWith(p.innerHTML):void 0===a&&p.nodeType==Node.ELEMENT_NODE&&t.node.isBlock(p)&&"TABLE"!=p.tagName&&t.node.clearAttributes(p)}else 0<e(p).find(".fr-marker").length&&(s=n(e(p),s,a,l))}return s}(t.$el,0,n,o),s||(t.$el.find(".fr-marker").remove(),t.$el.find(".fr-clone").removeClass("fr-clone").addClass("fr-marker")),s&&t.$el.find(".fr-marker").before(e.FE.INVISIBLE_SPACE).after(e.FE.INVISIBLE_SPACE),t.html.cleanEmptyTags(),t.el.normalize(),t.selection.restore()}function u(n,r){var i,s,l,u,p,d=null
if(t.selection.isCollapsed()){t.markers.insert()
var f=(s=t.$el.find(".fr-marker")).parent()
if(t.node.openTagString(f.get(0))=='<span style="'+n+": "+f.css(n)+';">'){if(t.node.isEmpty(f.get(0)))d=e('<span style="'+n+": "+r+';">'+e.FE.INVISIBLE_SPACE+e.FE.MARKERS+"</span>"),f.replaceWith(d)
else{var h={}
h["style*"]=n+":",a(s,"span",h,!0),s=t.$el.find(".fr-marker"),r?(d=e('<span style="'+n+": "+r+';">'+e.FE.INVISIBLE_SPACE+e.FE.MARKERS+"</span>"),s.replaceWith(d)):s.replaceWith(e.FE.INVISIBLE_SPACE+e.FE.MARKERS)}t.html.cleanEmptyTags()}else t.node.isEmpty(f.get(0))&&f.is("span")?(s.replaceWith(e.FE.MARKERS),f.css(n,r)):(d=e('<span style="'+n+": "+r+';">'+e.FE.INVISIBLE_SPACE+e.FE.MARKERS+"</span>"),s.replaceWith(d))
d&&c(d,n,r)}else{if(t.selection.save(),null==r||"color"==n&&0<t.$el.find(".fr-marker").parents("u, a").length){var m=t.$el.find(".fr-marker")
for(i=0;i<m.length;i++)if(!0===(s=e(m[i])).data("type"))for(;t.node.isFirstSibling(s.get(0))&&!s.parent().is(t.$el)&&!t.node.isElement(s.parent().get(0))&&!t.node.isBlock(s.parent().get(0));)s.parent().before(s)
else for(;t.node.isLastSibling(s.get(0))&&!s.parent().is(t.$el)&&!t.node.isElement(s.parent().get(0))&&!t.node.isBlock(s.parent().get(0));)s.parent().after(s)}var g=t.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,v={class:"fr-unprocessed"}
for(r&&(v.style=n+": "+r+";"),o(g,"span",v),t.$el.find(".fr-marker + .fr-unprocessed").each(function(){e(this).prepend(e(this).prev())}),t.$el.find(".fr-unprocessed + .fr-marker").each(function(){e(this).prev().append(this)}),(r||"").match(/\dem$/)&&t.$el.find("span.fr-unprocessed").removeClass("fr-unprocessed");0<t.$el.find("span.fr-unprocessed").length;){if((d=t.$el.find("span.fr-unprocessed:first").removeClass("fr-unprocessed")).parent().get(0).normalize(),d.parent().is("span")&&1==d.parent().get(0).childNodes.length){d.parent().css(n,r)
var b=d
d=d.parent(),b.replaceWith(b.html())}var y=d.find("span")
for(i=y.length-1;0<=i;i--)l=y[i],u=n,p=void 0,(p=e(l)).css(u,""),""===p.attr("style")&&p.replaceWith(p.html())
c(d,n,r)}}!function(){for(var n;0<t.$el.find(".fr-split:empty").length;)t.$el.find(".fr-split:empty").remove()
t.$el.find(".fr-split").removeClass("fr-split"),t.$el.find('[style=""]').removeAttr("style"),t.$el.find('[class=""]').removeAttr("class"),t.html.cleanEmptyTags(),e(t.$el.find("span").get().reverse()).each(function(){this.attributes&&0!==this.attributes.length||e(this).replaceWith(this.innerHTML)}),t.el.normalize()
var r=t.$el.find("span[style] + span[style]")
for(n=0;n<r.length;n++){var i=e(r[n]),o=e(r[n]).prev()
i.get(0).previousSibling==o.get(0)&&t.node.openTagString(i.get(0))==t.node.openTagString(o.get(0))&&(i.prepend(o.html()),o.remove())}t.$el.find("span[style] span[style]").each(function(){if(0<=e(this).attr("style").indexOf("font-size")){var t=e(this).parents("span[style]")
0<=t.attr("style").indexOf("background-color")&&(e(this).attr("style",e(this).attr("style")+";"+t.attr("style")),a(e(this),"span[style]",{},!1))}}),t.el.normalize(),t.selection.restore()}()}function c(n,r,i){var o,s,a,l=n.parentsUntil(t.$el,"span[style]"),u=[]
for(o=l.length-1;0<=o;o--)s=l[o],a=r,0===e(s).attr("style").indexOf(a+":")||0<=e(s).attr("style").indexOf(";"+a+":")||0<=e(s).attr("style").indexOf("; "+a+":")||u.push(l[o])
if((l=l.not(u)).length){for(var c="",p="",d="",f="",h=n.get(0);h=h.parentNode,e(h).addClass("fr-split"),c+=t.node.closeTagString(h),p=t.node.openTagString(e(h).clone().addClass("fr-split").get(0))+p,l.get(0)!=h&&(d+=t.node.closeTagString(h),f=t.node.openTagString(e(h).clone().addClass("fr-split").get(0))+f),l.get(0)!=h;);var m=c+t.node.openTagString(e(l.get(0)).clone().css(r,i||"").get(0))+f+n.css(r,"").get(0).outerHTML+d+"</span>"+p
n.replaceWith('<span id="fr-break"></span>')
var g=l.get(0).outerHTML
e(l.get(0)).replaceWith(g.replace(/<span id="fr-break"><\/span>/g,m))}}function p(e,n){void 0===n&&(n={}),n.style&&delete n.style
var o=t.selection.ranges(0),s=o.startContainer
if(s.nodeType==Node.ELEMENT_NODE&&0<s.childNodes.length&&s.childNodes[o.startOffset]&&(s=s.childNodes[o.startOffset]),!o.collapsed&&s.nodeType==Node.TEXT_NODE&&o.startOffset==(s.textContent||"").length){for(;!t.node.isBlock(s.parentNode)&&!s.nextSibling;)s=s.parentNode
s.nextSibling&&(s=s.nextSibling)}for(var a=s;a&&a.nodeType==Node.ELEMENT_NODE&&!i(a,r(e,n));)a=a.firstChild
if(a&&a.nodeType==Node.ELEMENT_NODE&&i(a,r(e,n)))return!0
var l=s
for(l&&l.nodeType!=Node.ELEMENT_NODE&&(l=l.parentNode);l&&l.nodeType==Node.ELEMENT_NODE&&l!=t.el&&!i(l,r(e,n));)l=l.parentNode
return!(!l||l.nodeType!=Node.ELEMENT_NODE||l==t.el||!i(l,r(e,n)))}return{is:p,toggle:function(e,t){p(e,t)?l(e,t):s(e,t)},apply:s,remove:l,applyStyle:u,removeStyle:function(e){u(e,null)}}},e.extend(e.FE.DEFAULTS,{indentMargin:20}),e.FE.COMMANDS={bold:{title:"Bold",toggle:!0,refresh:function(e){var t=this.format.is("strong")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},italic:{title:"Italic",toggle:!0,refresh:function(e){var t=this.format.is("em")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},underline:{title:"Underline",toggle:!0,refresh:function(e){var t=this.format.is("u")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},strikeThrough:{title:"Strikethrough",toggle:!0,refresh:function(e){var t=this.format.is("s")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},subscript:{title:"Subscript",toggle:!0,refresh:function(e){var t=this.format.is("sub")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},superscript:{title:"Superscript",toggle:!0,refresh:function(e){var t=this.format.is("sup")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},outdent:{title:"Decrease Indent"},indent:{title:"Increase Indent"},undo:{title:"Undo",undo:!1,forcedRefresh:!0,disabled:!0},redo:{title:"Redo",undo:!1,forcedRefresh:!0,disabled:!0},insertHR:{title:"Insert Horizontal Line"},clearFormatting:{title:"Clear Formatting"},selectAll:{title:"Select All",undo:!1}},e.FE.RegisterCommand=function(t,n){e.FE.COMMANDS[t]=n},e.FE.MODULES.commands=function(t){function n(e){return t.html.defaultTag()&&(e="<"+t.html.defaultTag()+">"+e+"</"+t.html.defaultTag()+">"),e}var r={bold:function(){o("bold","strong")},subscript:function(){t.format.is("sup")&&t.format.remove("sup"),o("subscript","sub")},superscript:function(){t.format.is("sub")&&t.format.remove("sub"),o("superscript","sup")},italic:function(){o("italic","em")},strikeThrough:function(){o("strikeThrough","s")},underline:function(){o("underline","u")},undo:function(){t.undo.run()},redo:function(){t.undo.redo()},indent:function(){s(1)},outdent:function(){s(-1)},show:function(){t.opts.toolbarInline&&t.toolbar.showInline(null,!0)},insertHR:function(){t.selection.remove()
var r=""
t.core.isEmpty()&&(r=n(r="<br>")),t.html.insert('<hr id="fr-just">'+r)
var i,o=t.$el.find("hr#fr-just")
if(o.removeAttr("id"),0===o.next().length){var s=t.html.defaultTag()
s?o.after(e("<"+s+">").append("<br>")):o.after("<br>")}o.prev().is("hr")?i=t.selection.setAfter(o.get(0),!1):o.next().is("hr")?i=t.selection.setBefore(o.get(0),!1):t.selection.setAfter(o.get(0),!1)||t.selection.setBefore(o.get(0),!1),i||void 0===i||(r=n(r=e.FE.MARKERS+"<br>"),o.after(r)),t.selection.restore()},clearFormatting:function(){t.format.remove()},selectAll:function(){t.doc.execCommand("selectAll",!1,!1)}}
function i(n,i){if(!1!==t.events.trigger("commands.before",e.merge([n],i||[]))){var o=e.FE.COMMANDS[n]&&e.FE.COMMANDS[n].callback||r[n],s=!0,a=!1
e.FE.COMMANDS[n]&&(void 0!==e.FE.COMMANDS[n].focus&&(s=e.FE.COMMANDS[n].focus),void 0!==e.FE.COMMANDS[n].accessibilityFocus&&(a=e.FE.COMMANDS[n].accessibilityFocus)),(!t.core.hasFocus()&&s&&!t.popups.areVisible()||!t.core.hasFocus()&&a&&t.accessibility.hasFocus())&&t.events.focus(!0),e.FE.COMMANDS[n]&&!1!==e.FE.COMMANDS[n].undo&&(t.$el.find(".fr-marker").length&&(t.events.disableBlur(),t.selection.restore()),t.undo.saveStep()),o&&o.apply(t,e.merge([n],i||[])),t.events.trigger("commands.after",e.merge([n],i||[])),e.FE.COMMANDS[n]&&!1!==e.FE.COMMANDS[n].undo&&t.undo.saveStep()}}function o(e,n){t.format.toggle(n)}function s(n){t.selection.save(),t.html.wrap(!0,!0,!0,!0),t.selection.restore()
for(var r=t.selection.blocks(),i=0;i<r.length;i++)if("LI"!=r[i].tagName&&"LI"!=r[i].parentNode.tagName){var o=e(r[i]),s="rtl"==t.opts.direction||"rtl"==o.css("direction")?"margin-right":"margin-left",a=t.helpers.getPX(o.css(s))
if(o.width()<2*t.opts.indentMargin&&0<n)continue
o.css(s,Math.max(a+n*t.opts.indentMargin,0)||""),o.removeClass("fr-temp-div")}t.selection.save(),t.html.unwrap(),t.selection.restore()}function a(e){return function(){i(e)}}var l={}
for(var u in r)r.hasOwnProperty(u)&&(l[u]=a(u))
return e.extend(l,{exec:i,_init:function(){t.events.on("keydown",function(e){var n=t.selection.element()
if(n&&"HR"==n.tagName&&!t.keys.isArrow(e.which))return e.preventDefault(),!1}),t.events.on("keyup",function(n){var r=t.selection.element()
if(r&&"HR"==r.tagName)if(n.which==e.FE.KEYCODE.ARROW_LEFT||n.which==e.FE.KEYCODE.ARROW_UP){if(r.previousSibling)return t.node.isBlock(r.previousSibling)?t.selection.setAtEnd(r.previousSibling):e(r).before(e.FE.MARKERS),t.selection.restore(),!1}else if((n.which==e.FE.KEYCODE.ARROW_RIGHT||n.which==e.FE.KEYCODE.ARROW_DOWN)&&r.nextSibling)return t.node.isBlock(r.nextSibling)?t.selection.setAtStart(r.nextSibling):e(r).after(e.FE.MARKERS),t.selection.restore(),!1}),t.events.on("mousedown",function(e){if(e.target&&"HR"==e.target.tagName)return e.preventDefault(),e.stopPropagation(),!1}),t.events.on("mouseup",function(){var n=t.selection.element()
n==t.selection.endElement()&&n&&"HR"==n.tagName&&(n.nextSibling&&(t.node.isBlock(n.nextSibling)?t.selection.setAtStart(n.nextSibling):e(n).after(e.FE.MARKERS)),t.selection.restore())})}})},e.FE.MODULES.data=function(t){var n="NCKB1zwtPA9tqzajXC2c2A7B-16VD3spzJ1C9C3D5oOF2OB1NB1LD7VA5QF4TE3gytXB2A4C-8VA2AC4E1D3GB2EB2KC3KD1MF1juuSB1A8C6yfbmd1B2a1A5qdsdB2tivbC3CB1KC1CH1eLA2sTF1B4I4H-7B-21UB6b1F5bzzzyAB4JC3MG2hjdKC1JE6C1E1cj1pD-16pUE5B4prra2B5ZB3D3C3pxj1EA6A3rnJA2C-7I-7JD9D1E1wYH1F3sTB5TA2G4H4ZA22qZA5BB3mjcvcCC3JB1xillavC-21VE6PC5SI4YC5C8mb1A3WC3BD2B5aoDA2qqAE3A5D-17fOD1D5RD4WC10tE6OAZC3nF-7b1C4A4D3qCF2fgmapcromlHA2QA6a1E1D3e1A6C2bie2F4iddnIA7B2mvnwcIB5OA1DB2OLQA3PB10WC7WC5d1E3uI-7b1D5D6b1E4D2arlAA4EA1F-11srxI-7MB1D7PF1E5B4adB-21YD5vrZH3D3xAC4E1A2GF2CF2J-7yNC2JE1MI2hH-7QB1C6B5B-9bA-7XB13a1B5VievwpKB4LA3NF-10H-9I-8hhaC-16nqPG4wsleTD5zqYF3h1G2B7B4yvGE2Pi1H-7C-21OE6B1uLD1kI4WC1E7C5g1D-8fue1C8C6c1D4D3Hpi1CC4kvGC2E1legallyXB4axVA11rsA4A-9nkdtlmzBA2GD3A13A6CB1dabE1lezrUE6RD5TB4A-7f1C8c1B5d1D4D3tyfCD5C2D2==",r=function(){for(var e=0,t=document.domain,n=t.split("."),r="_gd"+(new Date).getTime();e<n.length-1&&-1==document.cookie.indexOf(r+"="+r);)t=n.slice(-1-++e).join("."),document.cookie=r+"="+r+";domain="+t+";"
return document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+t+";",(t||"").replace(/(^\.*)|(\.*$)/g,"")}()
function i(e){return e}var o,s,a=i(function(e){if(!e)return e
for(var t="",n=i("charCodeAt"),r=i("fromCharCode"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(e[0]),s=1;s<e.length-2;s++){for(var a=l(++o),c=e[n](s),p="";/[0-9-]/.test(e[s+1]);)p+=e[++s]
c=u(c,a,p=parseInt(p,10)||0),c^=o-1&31,t+=String[r](c)}return t})
function l(e){for(var t=e.toString(),n=0,r=0;r<t.length;r++)n+=parseInt(t.charAt(r),10)
return 10<n?n%9+1:n}function u(e,t,n){for(var r=Math.abs(n);0<r--;)e-=t
return n<0&&(e+=123),e}function c(e){return!(!e||"block"===e.css("display")||(e.remove(),0))}function p(e){return e&&0===t.$box.find(e).length}var d=0
function f(){if(10<d&&(t[i(a("0ppecjvc=="))](),setTimeout(function(){e.FE=null},10)),!t.$box)return!1
t.$wp.prepend(a(i(a(n)))),o=t.$wp.find("> div:first"),s=o.find("> a"),"rtl"==t.opts.direction&&o.css("left","auto").css("right",0).attr("direction","rtl"),d++}function h(e){for(var t=[a("9qqG-7amjlwq=="),a("KA3B3C2A6D1D5H5H1A3=="),a("3B9B3B5F3C4G3E3=="),a("QzbzvxyB2yA-9m=="),a("ji1kacwmgG5bc=="),a("nmA-13aogi1A3c1jd==")],n=0;n<t.length;n++)if(String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),e.endsWith(t[n]))return!0
return!1}return{_init:function(){var e=t.o_win.FEK
try{e=e||localStorage&&localStorage.FEK}catch(e){}e=t.opts.key||e||[""]
var l=a(i("ziRA1E3B9pA5B-11D-11xg1A3ZB5D1D4B-11ED2EG2pdeoC1clIH4wB-22yQD5uF4YE3E3A9=="))
"string"==typeof e&&(e=[e])
for(var u,d,m,g=!(t.ul=!0),v=0,b=0;b<e.length;b++){var y=(d=e[b],3===(m=(a(d)||"").split("|")).length?m:[null,null,a(d)||""]),E=y[2]
if(E===a(i(a("mcVRDoB1BGILD7YFe1BTXBA7B6==")))||0<=E.indexOf(r,E.length-r.length)||h(r)){if(!(null===(u=y[1])||new Date(u)<new Date(a("OB1F1A4D3I1A15A11D3E6B5==")))||h(r)){t.ul=!1
break}g=!0,n="RCZB17botVG4A-8yzia1C4A5DG3CD2cFB4qflmCE4I2FB1SC7F6PE4WE3RD6e2A4c1D3d1E2E3ehxdGE3CE2IB2LC1HG2LE1QA3QC7B-13cC-9epmkjc1B4e1C4pgjgvkOC5E1eNE1HB2LD2B-13WD5tvabUA5a1A4f1A2G3C2A-21cihKE3FE2DB2cccJE1iC-7G-7tD-17tVD6A-9qC-7QC7a1E4B4je1E3E2G2ecmsAA1xH-8HB11C1D1lgzQA3dTB8od1D4XE3ohb1B4E4D3mbLA10NA7C-21d1genodKC11PD9PE5tA-8UI3ZC5XB5B-11qXF2F-7wtwjAG3NA1IB1OD1HC1RD4QJ4evUF2D5XG2G4XA8pqocH1F3G2J2hcpHC4D1MD4C1MB8PD5klcQD1A8A6e2A3ed1E2A24A7HC5C3qA-9tiA-61dcC3MD1LE1D4SA3A9ZZXSE4g1C3Pa2C5ufbcGI3I2B4skLF2CA1vxB-22wgUC4kdH-8cVB5iwe1A2D3H3G-7DD5JC2ED2OH2JB10D3C2xHE1KA29PB11wdC-11C4cixb2C7a1C4YYE3B2A15uB-21wpCA1MF1NuC-21dyzD6pPG4I-7pmjc1A4yte1F3B-22yvCC3VbC-7qC-22qNE2hC1vH-8zad1RF6WF3DpI-7C8A-16hpf1F3D2ylalB-13BB2lpA-63IB3uOF6D5G4gabC-21UD2A3PH4ZA20B11b2C6ED4A2H3I1A15DB4KD2laC-8LA5B8B7==",v=y[0]||-1}}var T=new Image
!0===t.ul&&(f(),T.src=g?i(a(l))+"e="+v:i(a(l))+"u"),!0===t.ul&&t.events.on("contentChanged",function(){(c(o)||c(s)||p(o)||p(s))&&f()}),t.events.on("destroy",function(){o&&o.length&&o.remove()},!0)}}},e.extend(e.FE.DEFAULTS,{pastePlain:!1,pasteDeniedTags:["colgroup","col","meta"],pasteDeniedAttrs:["class","id","style"],pasteAllowedStyleProps:[".*"],pasteAllowLocalImages:!1}),e.FE.MODULES.paste=function(t){var n,r,i,o
function s(e,n){try{t.win.localStorage.setItem("fr-copied-html",e),t.win.localStorage.setItem("fr-copied-text",n)}catch(e){}}function a(n){var r=t.html.getSelected()
s(r,e("<div>").html(r).text()),"cut"==n.type&&(t.undo.saveStep(),setTimeout(function(){t.selection.save(),t.html.wrap(),t.selection.restore(),t.events.focus(),t.undo.saveStep()},0))}var l=!1
function u(o){if(l)return!1
if(o.originalEvent&&(o=o.originalEvent),!1===t.events.trigger("paste.before",[o]))return o.preventDefault(),!1
if(t.$win.scrollTop(),o&&o.clipboardData&&o.clipboardData.getData){var s="",a=o.clipboardData.types
if(t.helpers.isArray(a))for(var u=0;u<a.length;u++)s+=a[u]+";"
else s=a
if(n="",/text\/rtf/.test(s)&&(r=o.clipboardData.getData("text/rtf")),/text\/html/.test(s)&&!t.browser.safari?n=o.clipboardData.getData("text/html"):/text\/rtf/.test(s)&&t.browser.safari?n=r:/public.rtf/.test(s)&&t.browser.safari&&(n=o.clipboardData.getData("text/rtf")),""!==n)return p(),o.preventDefault&&(o.stopPropagation(),o.preventDefault()),!1
n=null}return t.selection.save(),t.events.disableBlur(),n=null,i?(i.html(""),t.browser.edge&&t.opts.iframe&&t.$el.append(i)):(i=e('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%; -moz-user-select: text; -webkit-user-select: text; -ms-user-select: text; user-select: text;" tabIndex="-1"></div>'),t.browser.safari?(i.css("top",t.$sc.scrollTop()),t.$el.after(i)):t.browser.edge&&t.opts.iframe?t.$el.append(i):t.$box.after(i),t.events.on("destroy",function(){i.remove()})),i.focus(),t.win.setTimeout(p,1),!1}function c(i){if(i.originalEvent&&(i=i.originalEvent),i&&i.dataTransfer&&i.dataTransfer.getData){var s="",a=i.dataTransfer.types
if(t.helpers.isArray(a))for(var l=0;l<a.length;l++)s+=a[l]+";"
else s=a
if(n="",/text\/rtf/.test(s)&&(r=i.dataTransfer.getData("text/rtf")),/text\/html/.test(s)?n=i.dataTransfer.getData("text/html"):/text\/rtf/.test(s)&&t.browser.safari?n=r:/text\/plain/.test(s)&&!this.browser.mozilla&&(n=t.html.escapeEntities(i.dataTransfer.getData("text/plain")).replace(/\n/g,"<br>")),""!==n){t.keys.forceUndo(),o=t.snapshot.get(),t.selection.save(),t.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-helper")
var u=t.markers.insertAtPoint(i)
if(t.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-placeholder"),t.$el.find(".fr-marker-helper").addClass("fr-marker").removeClass("fr-marker-helper"),t.selection.restore(),t.selection.remove(),t.$el.find(".fr-marker-placeholder").addClass("fr-marker").removeClass("fr-marker-placeholder"),!1!==u){var c=t.el.querySelector(".fr-marker")
return e(c).replaceWith(e.FE.MARKERS),t.selection.restore(),p(),i.preventDefault&&(i.stopPropagation(),i.preventDefault()),!1}}else n=null}}function p(){t.browser.edge&&t.opts.iframe&&t.$box.after(i),o||(t.keys.forceUndo(),o=t.snapshot.get()),n||(n=i.get(0).innerHTML,t.selection.restore(),t.events.enableBlur())
var e=n.match(/(class=\"?Mso|class=\'?Mso|class="?Xl|class='?Xl|class=Xl|style=\"[^\"]*\bmso\-|style=\'[^\']*\bmso\-|w:WordDocument)/gi),r=t.events.chainTrigger("paste.beforeCleanup",n)
r&&"string"==typeof r&&(n=r),(!e||e&&!1!==t.events.trigger("paste.wordPaste",[n]))&&f(n,e)}function d(e){for(var t="",n=0;n++<e;)t+="&nbsp;"
return t}function f(n,r,i){var s,a=null,l=null
if(0<=n.toLowerCase().indexOf("<body")){var u=""
0<=n.indexOf("<style")&&(u=n.replace(/[.\s\S\w\W<>]*(<style[^>]*>[\s]*[.\s\S\w\W<>]*[\s]*<\/style>)[.\s\S\w\W<>]*/gi,"$1")),n=(n=u+n.replace(/[.\s\S\w\W<>]*<body[^>]*>[\s]*([.\s\S\w\W<>]*)[\s]*<\/body>[.\s\S\w\W<>]*/gi,"$1")).replace(/ \n/g," ").replace(/\n /g," ").replace(/([^>])\n([^<])/g,"$1 $2")}var c=!1
0<=n.indexOf('id="docs-internal-guid')&&(n=n.replace(/^[\w\W\s\S]* id="docs-internal-guid[^>]*>([\w\W\s\S]*)<\/b>[\w\W\s\S]*$/g,"$1"),c=!0)
var p=!1
if(!r&&((p=function(n){var r=null
try{r=t.win.localStorage.getItem("fr-copied-text")}catch(e){}return!(!r||e("<div>").html(n).text().replace(/\u00A0/gi," ").replace(/\r|\n/gi,"")!=r.replace(/\u00A0/gi," ").replace(/\r|\n/gi,""))}(n))&&(n=t.win.localStorage.getItem("fr-copied-html")),!p)){var f=t.opts.htmlAllowedStyleProps
t.opts.htmlAllowedStyleProps=t.opts.pasteAllowedStyleProps,t.opts.htmlAllowComments=!1,n=(n=(n=n.replace(/<span class="Apple-tab-span">\s*<\/span>/g,d(t.opts.tabSpaces||4))).replace(/<span class="Apple-tab-span" style="white-space:pre">(\t*)<\/span>/g,function(e,n){return d(n.length*(t.opts.tabSpaces||4))})).replace(/\t/g,d(t.opts.tabSpaces||4)),n=t.clean.html(n,t.opts.pasteDeniedTags,t.opts.pasteDeniedAttrs),t.opts.htmlAllowedStyleProps=f,t.opts.htmlAllowComments=!0,n=(n=(n=m(n)).replace(/\r/g,"")).replace(/^ */g,"").replace(/ *$/g,"")}!r||t.wordPaste&&i||(0===(n=n.replace(/^\n*/g,"").replace(/^ /g,"")).indexOf("<colgroup>")&&(n="<table>"+n+"</table>"),n=m(n=function(e){var n
e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li>$3</li></ul>")).replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li>$3</li></ol>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListBullet"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ul>")).replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ol>")).replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi,"<span><span")).replace(/<!--\[if \!supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi,"")).replace(/<!\[if \!supportLists\]>([\s\S]*?)<!\[endif\]>/gi,"")).replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi," ")).replace(/<!--[\s\S]*?-->/gi,"")).replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi,"")
var r,i=["style","script","applet","embed","noframes","noscript"]
for(n=0;n<i.length;n++){var o=new RegExp("<"+i[n]+".*?"+i[n]+"(.*?)>","gi")
e=e.replace(o,"")}for(e=(e=(e=e.replace(/&nbsp;/gi," ")).replace(/<td([^>]*)><\/td>/g,"<td$1><br></td>")).replace(/<th([^>]*)><\/th>/g,"<th$1><br></th>");(e=(r=e).replace(/<[^\/>][^>]*><\/[^>]+>/gi,""))!=r;);e=(e=e.replace(/<lilevel([^1])([^>]*)>/gi,'<li data-indent="true"$2>')).replace(/<lilevel1([^>]*)>/gi,"<li$1>"),e=(e=(e=t.clean.html(e,t.opts.pasteDeniedTags,t.opts.pasteDeniedAttrs)).replace(/<a>(.[^<]+)<\/a>/gi,"$1")).replace(/<br> */g,"<br>")
var s=t.o_doc.createElement("div")
s.innerHTML=e
var a=s.querySelectorAll("li[data-indent]")
for(n=0;n<a.length;n++){var l=a[n],u=l.previousElementSibling
if(u&&"LI"==u.tagName){var c=u.querySelector(":scope > ul, :scope > ol")
c||(c=document.createElement("ul"),u.appendChild(c)),c.appendChild(l)}else l.removeAttribute("data-indent")}return t.html.cleanBlankSpaces(s),s.innerHTML}(n))),t.opts.pastePlain&&!p&&(n=function(e){var n,r=null,i=t.doc.createElement("div")
i.innerHTML=e
var o=i.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote")
for(n=0;n<o.length;n++)(r=o[n]).outerHTML="<"+(t.html.defaultTag()||"DIV")+">"+r.innerHTML+"</"+(t.html.defaultTag()||"DIV")+">"
for(n=(o=i.querySelectorAll("*:not("+"p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td, br, img".split(",").join("):not(")+")")).length-1;0<=n;n--)(r=o[n]).outerHTML=r.innerHTML
var s=function(e){for(var n=t.node.contents(e),r=0;r<n.length;r++)n[r].nodeType!=Node.TEXT_NODE&&n[r].nodeType!=Node.ELEMENT_NODE?n[r].parentNode.removeChild(n[r]):s(n[r])}
return s(i),i.innerHTML}(n))
var h=t.events.chainTrigger("paste.afterCleanup",n)
if("string"==typeof h&&(n=h),""!==n){var g=t.o_doc.createElement("div")
0<=(g.innerHTML=n).indexOf("<body>")?(t.html.cleanBlankSpaces(g),t.spaces.normalize(g,!0)):t.spaces.normalize(g)
var v=g.getElementsByTagName("span")
for(s=v.length-1;0<=s;s--){var b=v[s]
0===b.attributes.length&&(b.outerHTML=b.innerHTML)}var y=t.selection.element(),E=!1
if(y&&e(y).parentsUntil(t.el,"ul, ol").length&&(E=!0),E){var T=g.children
1==T.length&&0<=["OL","UL"].indexOf(T[0].tagName)&&(T[0].outerHTML=T[0].innerHTML)}if(!c){var _=g.getElementsByTagName("br")
for(s=_.length-1;0<=s;s--){var A=_[s]
t.node.isBlock(A.previousSibling)&&A.parentNode.removeChild(A)}}if(t.opts.enter==e.FE.ENTER_BR)for(s=(a=g.querySelectorAll("p, div")).length-1;0<=s;s--)0===(l=a[s]).attributes.length&&(l.outerHTML=l.innerHTML+(l.nextSibling&&!t.node.isEmpty(l)?"<br>":""))
else if(t.opts.enter==e.FE.ENTER_DIV)for(s=(a=g.getElementsByTagName("p")).length-1;0<=s;s--)0===(l=a[s]).attributes.length&&(l.outerHTML="<div>"+l.innerHTML+"</div>")
else t.opts.enter==e.FE.ENTER_P&&1==g.childNodes.length&&"P"==g.childNodes[0].tagName&&0===g.childNodes[0].attributes.length&&(g.childNodes[0].outerHTML=g.childNodes[0].innerHTML)
n=g.innerHTML,p&&(n=function(n){var r,i=t.o_doc.createElement("div")
i.innerHTML=n
for(var o=i.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not("+e.FE.VOID_ELEMENTS.join("):not(")+"):not("+t.opts.htmlAllowedEmptyTags.join("):not(")+")");o.length;){for(r=0;r<o.length;r++)o[r].parentNode.removeChild(o[r])
o=i.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not("+e.FE.VOID_ELEMENTS.join("):not(")+"):not("+t.opts.htmlAllowedEmptyTags.join("):not(")+")")}return i.innerHTML}(n)),t.html.insert(n,!0)}t.events.trigger("paste.after"),t.undo.saveStep(o),o=null,t.undo.saveStep()}function h(e){for(var t=e.length-1;0<=t;t--)e[t].attributes&&e[t].attributes.length&&e.splice(t,1)
return e}function m(e){var n,r=t.o_doc.createElement("div")
r.innerHTML=e
for(var i=h(Array.prototype.slice.call(r.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")));i.length;){var o=i[i.length-1]
if(t.html.defaultTag()&&"div"!=t.html.defaultTag())o.querySelector(t.html.blockTagsQuery())?o.outerHTML=o.innerHTML:o.outerHTML="<"+t.html.defaultTag()+">"+o.innerHTML+"</"+t.html.defaultTag()+">"
else{var s=o.querySelectorAll("*")
!s.length||"BR"!==s[s.length-1].tagName&&0===o.innerText.length?o.outerHTML=o.innerHTML+"<br>":o.outerHTML=o.innerHTML}i=h(Array.prototype.slice.call(r.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")))}for(i=h(Array.prototype.slice.call(r.querySelectorAll("div:not([style])")));i.length;){for(n=0;n<i.length;n++){var a=i[n],l=a.innerHTML.replace(/\u0009/gi,"").trim()
a.outerHTML=l}i=h(Array.prototype.slice.call(r.querySelectorAll("div:not([style])")))}return r.innerHTML}function g(){t.el.removeEventListener("copy",a),t.el.removeEventListener("cut",a),t.el.removeEventListener("paste",u)}return{_init:function(){t.el.addEventListener("copy",a),t.el.addEventListener("cut",a),t.el.addEventListener("paste",u,{capture:!0}),t.events.on("drop",c),t.browser.msie&&t.browser.version<11&&(t.events.on("mouseup",function(e){2==e.button&&(setTimeout(function(){l=!1},50),l=!0)},!0),t.events.on("beforepaste",u)),t.events.on("destroy",g)},cleanEmptyTagsAndDivs:m,getRtfClipboard:function(){return r},saveCopiedText:s,clean:f}},e.extend(e.FE.DEFAULTS,{shortcutsEnabled:[],shortcutsHint:!0}),e.FE.SHORTCUTS_MAP={},e.FE.RegisterShortcut=function(t,n,r,i,o,s){e.FE.SHORTCUTS_MAP[(o?"^":"")+(s?"@":"")+t]={cmd:n,val:r,letter:i,shift:o,option:s},e.FE.DEFAULTS.shortcutsEnabled.push(n)},e.FE.RegisterShortcut(e.FE.KEYCODE.E,"show",null,"E",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.B,"bold",null,"B",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.I,"italic",null,"I",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.U,"underline",null,"U",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.S,"strikeThrough",null,"S",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.CLOSE_SQUARE_BRACKET,"indent",null,"]",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.OPEN_SQUARE_BRACKET,"outdent",null,"[",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.Z,"undo",null,"Z",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.Z,"redo",null,"Z",!0,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.Y,"redo",null,"Y",!1,!1),e.FE.MODULES.shortcuts=function(t){var n=null,r=!1
function i(n){if(!t.core.hasFocus())return!0
var i=n.which,o=-1!=navigator.userAgent.indexOf("Mac OS X")?n.metaKey:n.ctrlKey
if("keyup"==n.type&&r&&i!=e.FE.KEYCODE.META)return r=!1
"keydown"==n.type&&(r=!1)
var s=(n.shiftKey?"^":"")+(n.altKey?"@":"")+i
if(o&&e.FE.SHORTCUTS_MAP[s]){var a=e.FE.SHORTCUTS_MAP[s].cmd
if(a&&0<=t.opts.shortcutsEnabled.indexOf(a)){var l,u=e.FE.SHORTCUTS_MAP[s].val
if(a&&!u?l=t.$tb.find('.fr-command[data-cmd="'+a+'"]'):a&&u&&(l=t.$tb.find('.fr-command[data-cmd="'+a+'"][data-param1="'+u+'"]')),l.length)return n.preventDefault(),n.stopPropagation(),l.parents(".fr-toolbar").data("instance",t),"keydown"==n.type&&(t.button.exec(l),r=!0),!1
if(a&&(t.commands[a]||e.FE.COMMANDS[a]&&e.FE.COMMANDS[a].callback))return n.preventDefault(),n.stopPropagation(),"keydown"==n.type&&((t.commands[a]||e.FE.COMMANDS[a].callback)(),r=!0),!1}}}return{_init:function(){t.events.on("keydown",i,!0),t.events.on("keyup",i,!0)},get:function(r){if(!t.opts.shortcutsHint)return null
if(!n)for(var i in n={},e.FE.SHORTCUTS_MAP)e.FE.SHORTCUTS_MAP.hasOwnProperty(i)&&0<=t.opts.shortcutsEnabled.indexOf(e.FE.SHORTCUTS_MAP[i].cmd)&&(n[e.FE.SHORTCUTS_MAP[i].cmd+"."+(e.FE.SHORTCUTS_MAP[i].val||"")]={shift:e.FE.SHORTCUTS_MAP[i].shift,option:e.FE.SHORTCUTS_MAP[i].option,letter:e.FE.SHORTCUTS_MAP[i].letter})
var o=n[r]
return o?(t.helpers.isMac()?String.fromCharCode(8984):"Ctrl+")+(o.shift?t.helpers.isMac()?String.fromCharCode(8679):"Shift+":"")+(o.option?t.helpers.isMac()?String.fromCharCode(8997):"Alt+":"")+o.letter:null}}},e.FE.MODULES.snapshot=function(e){function t(e){for(var t=e.parentNode.childNodes,n=0,r=null,i=0;i<t.length;i++){if(r){var o=t[i].nodeType===Node.TEXT_NODE&&""===t[i].textContent,s=r.nodeType===Node.TEXT_NODE&&t[i].nodeType===Node.TEXT_NODE
o||s||n++}if(t[i]==e)return n
r=t[i]}}function n(n){var r=[]
if(!n.parentNode)return[]
for(;!e.node.isElement(n);)r.push(t(n)),n=n.parentNode
return r.reverse()}function r(e,t){for(;e&&e.nodeType===Node.TEXT_NODE;){var n=e.previousSibling
n&&n.nodeType==Node.TEXT_NODE&&(t+=n.textContent.length),e=n}return t}function i(t){for(var n=e.el,r=0;r<t.length;r++)n=n.childNodes[t[r]]
return n}function o(t,n){try{var r=i(n.scLoc),o=n.scOffset,s=i(n.ecLoc),a=n.ecOffset,l=e.doc.createRange()
l.setStart(r,o),l.setEnd(s,a),t.addRange(l)}catch(e){}}return{get:function(){var t,i={}
if(e.events.trigger("snapshot.before"),i.html=(e.$wp?e.$el.html():e.$oel.get(0).outerHTML).replace(/ style=""/g,""),i.ranges=[],e.$wp&&e.selection.inEditor()&&e.core.hasFocus())for(var o=e.selection.ranges(),s=0;s<o.length;s++)i.ranges.push({scLoc:n((t=o[s]).startContainer),scOffset:r(t.startContainer,t.startOffset),ecLoc:n(t.endContainer),ecOffset:r(t.endContainer,t.endOffset)})
return e.events.trigger("snapshot.after",[i]),i},restore:function(t){e.$el.html()!=t.html&&(e.opts.htmlExecuteScripts?e.$el.html(t.html):e.el.innerHTML=t.html)
var n=e.selection.get()
e.selection.clear(),e.events.focus(!0)
for(var r=0;r<t.ranges.length;r++)o(n,t.ranges[r])},equal:function(t,n){return t.html==n.html&&(!e.core.hasFocus()||JSON.stringify(t.ranges)==JSON.stringify(n.ranges))}}},e.FE.MODULES.undo=function(e){function t(t){var n=t.which
e.keys.ctrlKey(t)&&(90==n&&t.shiftKey&&t.preventDefault(),90==n&&t.preventDefault())}var n=null
function r(){if(!e.undo_stack||e.undoing)return!1
for(;e.undo_stack.length>e.undo_index;)e.undo_stack.pop()}function i(){e.undo_index=0,e.undo_stack=[]}function o(){e.undo_stack=[]}return{_init:function(){i(),e.events.on("initialized",function(){n=(e.$wp?e.$el.html():e.$oel.get(0).outerHTML).replace(/ style=""/g,"")}),e.events.on("blur",function(){e.el.querySelector(".fr-dragging")||e.undo.saveStep()}),e.events.on("keydown",t),e.events.on("destroy",o)},run:function(){if(1<e.undo_index){e.undoing=!0
var t=e.undo_stack[--e.undo_index-1]
clearTimeout(e._content_changed_timer),e.snapshot.restore(t),n=t.html,e.popups.hideAll(),e.toolbar.enable(),e.events.trigger("contentChanged"),e.events.trigger("commands.undo"),e.undoing=!1}},redo:function(){if(e.undo_index<e.undo_stack.length){e.undoing=!0
var t=e.undo_stack[e.undo_index++]
clearTimeout(e._content_changed_timer),e.snapshot.restore(t),n=t.html,e.popups.hideAll(),e.toolbar.enable(),e.events.trigger("contentChanged"),e.events.trigger("commands.redo"),e.undoing=!1}},canDo:function(){return!(0===e.undo_stack.length||e.undo_index<=1)},canRedo:function(){return e.undo_index!=e.undo_stack.length},dropRedo:r,reset:i,saveStep:function(t){if(!e.undo_stack||e.undoing||e.el.querySelector(".fr-marker"))return!1
void 0===t?(t=e.snapshot.get(),e.undo_stack[e.undo_index-1]&&e.snapshot.equal(e.undo_stack[e.undo_index-1],t)||(r(),e.undo_stack.push(t),e.undo_index++,t.html!=n&&(e.events.trigger("contentChanged"),n=t.html))):(r(),0<e.undo_index?e.undo_stack[e.undo_index-1]=t:(e.undo_stack.push(t),e.undo_index++))}}},e.FE.ICON_TEMPLATES={font_awesome:'<i class="fa fa-[NAME]" aria-hidden="true"></i>',font_awesome_5:'<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5r:'<i class="far fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5l:'<i class="fal fa-[FA5NAME]" aria-hidden="true"></i>',text:'<span style="text-align: center;">[NAME]</span>',image:"<img src=[SRC] alt=[ALT] />",svg:'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">[PATH]</svg>'},e.FE.ICONS={bold:{NAME:"bold"},italic:{NAME:"italic"},underline:{NAME:"underline"},strikeThrough:{NAME:"strikethrough"},subscript:{NAME:"subscript"},superscript:{NAME:"superscript"},color:{NAME:"tint"},outdent:{NAME:"outdent"},indent:{NAME:"indent"},undo:{NAME:"rotate-left",FA5NAME:"undo"},redo:{NAME:"rotate-right",FA5NAME:"redo"},insertHR:{NAME:"minus"},clearFormatting:{NAME:"eraser"},selectAll:{NAME:"mouse-pointer"}},e.FE.DefineIconTemplate=function(t,n){e.FE.ICON_TEMPLATES[t]=n},e.FE.DefineIcon=function(t,n){e.FE.ICONS[t]=n},e.extend(e.FE.DEFAULTS,{iconsTemplate:"font_awesome"}),e.FE.MODULES.icon=function(t){return{create:function(n){var r=null,i=e.FE.ICONS[n]
if(void 0!==i){var o=i.template||e.FE.ICON_DEFAULT_TEMPLATE||t.opts.iconsTemplate
i.FA5NAME||(i.FA5NAME=i.NAME),o&&(o=e.FE.ICON_TEMPLATES[o])&&(r=o.replace(/\[([a-zA-Z0-9]*)\]/g,function(e,t){return"NAME"==t?i[t]||n:i[t]}))}return r||n},getTemplate:function(n){var r=e.FE.ICONS[n],i=t.opts.iconsTemplate
return void 0!==r?i=r.template||e.FE.ICON_DEFAULT_TEMPLATE||t.opts.iconsTemplate:i}}},e.extend(e.FE.DEFAULTS,{tooltips:!0}),e.FE.MODULES.tooltip=function(t){function n(){if(t.helpers.isMobile())return!1
t.$tooltip&&t.$tooltip.removeClass("fr-visible").css("left","-3000px").css("position","fixed")}function r(n,r){if(t.helpers.isMobile())return!1
if(n.data("title")||n.data("title",n.attr("title")),!n.data("title"))return!1
t.$tooltip||t.opts.tooltips&&!t.helpers.isMobile()&&(t.shared.$tooltip?t.$tooltip=t.shared.$tooltip:(t.shared.$tooltip=e('<div class="fr-tooltip"></div>'),t.$tooltip=t.shared.$tooltip,t.opts.theme&&t.$tooltip.addClass(t.opts.theme+"-theme"),e(t.o_doc).find("body:first").append(t.$tooltip)),t.events.on("shared.destroy",function(){t.$tooltip.html("").removeData().remove(),t.$tooltip=null},!0)),n.removeAttr("title"),t.$tooltip.text(t.language.translate(n.data("title"))),t.$tooltip.addClass("fr-visible")
var i=n.offset().left+(n.outerWidth()-t.$tooltip.outerWidth())/2
i<0&&(i=0),i+t.$tooltip.outerWidth()>e(t.o_win).width()&&(i=e(t.o_win).width()-t.$tooltip.outerWidth()),void 0===r&&(r=t.opts.toolbarBottom)
var o=r?n.offset().top-t.$tooltip.height():n.offset().top+n.outerHeight()
t.$tooltip.css("position",""),t.$tooltip.css("left",i),t.$tooltip.css("top",Math.ceil(o)),"static"!=e(t.o_doc).find("body:first").css("position")?(t.$tooltip.css("margin-left",-e(t.o_doc).find("body:first").offset().left),t.$tooltip.css("margin-top",-e(t.o_doc).find("body:first").offset().top)):(t.$tooltip.css("margin-left",""),t.$tooltip.css("margin-top",""))}return{hide:n,to:r,bind:function(i,o,s){t.opts.tooltips&&!t.helpers.isMobile()&&(t.events.$on(i,"mouseenter",o,function(n){t.node.hasClass(n.currentTarget,"fr-disabled")||t.edit.isDisabled()||r(e(n.currentTarget),s)},!0),t.events.$on(i,"mouseleave "+t._mousedown+" "+t._mouseup,o,function(){n()},!0))}}},e.FE.MODULES.button=function(t){var n=[];(t.opts.toolbarInline||t.opts.toolbarContainer)&&(t.shared.buttons||(t.shared.buttons=[]),n=t.shared.buttons)
var r=[]
function i(t,n,r){for(var i=e(),o=0;o<t.length;o++){var s=e(t[o])
if(s.is(n)&&(i=i.add(s)),r&&s.is(".fr-dropdown")){var a=s.next().find(n)
i=i.add(a)}}return i}function o(o,s){var a,l=e()
if(!o)return l
for(a in l=(l=l.add(i(n,o,s))).add(i(r,o,s)),t.shared.popups)if(t.shared.popups.hasOwnProperty(a)){var u=t.shared.popups[a].children().find(o)
l=l.add(u)}for(a in t.shared.modals)if(t.shared.modals.hasOwnProperty(a)){var c=t.shared.modals[a].$modal.find(o)
l=l.add(c)}return l}function s(e){e.addClass("fr-blink"),setTimeout(function(){e.removeClass("fr-blink")},500)
for(var t=e.data("cmd"),n=[];void 0!==e.data("param"+(n.length+1));)n.push(e.data("param"+(n.length+1)))
var r=o(".fr-dropdown.fr-active")
r.length&&(r.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),r.parent(".fr-toolbar:not(.fr-inline)").css("zIndex","")),e.parents(".fr-popup, .fr-toolbar").data("instance").commands.exec(t,n)}function a(n){var r=n.parents(".fr-popup, .fr-toolbar").data("instance")
if(0!==n.parents(".fr-popup").length||n.data("popup")||r.popups.hideAll(),r.popups.areVisible()&&!r.popups.areVisible(r)){for(var i=0;i<e.FE.INSTANCES.length;i++)e.FE.INSTANCES[i]!=r&&e.FE.INSTANCES[i].popups&&e.FE.INSTANCES[i].popups.areVisible()&&e.FE.INSTANCES[i].$el.find(".fr-marker").remove()
r.popups.hideAll()}t.node.hasClass(n.get(0),"fr-dropdown")?function(n){var r=n.next(),i=t.node.hasClass(n.get(0),"fr-active"),s=o(".fr-dropdown.fr-active").not(n),a=n.parents(".fr-toolbar, .fr-popup").data("instance")||t
if(a.helpers.isIOS()&&!a.el.querySelector(".fr-marker")&&(a.selection.save(),a.selection.clear(),a.selection.restore()),!i){var l=n.data("cmd")
r.find(".fr-command").removeClass("fr-active").attr("aria-selected",!1),e.FE.COMMANDS[l]&&e.FE.COMMANDS[l].refreshOnShow&&e.FE.COMMANDS[l].refreshOnShow.apply(a,[n,r]),r.css("left",n.offset().left-n.parent().offset().left-("rtl"==t.opts.direction?r.width()-n.outerWidth():0)),r.addClass("test-height")
var u=r.outerHeight()
r.removeClass("test-height"),r.css("top","").css("bottom",""),!t.opts.toolbarBottom&&r.offset().top+n.outerHeight()+u<e(t.o_doc).height()?r.css("top",n.position().top+n.outerHeight()):r.css("bottom",n.parents(".fr-popup, .fr-toolbar").first().height()-n.position().top)}n.addClass("fr-blink").toggleClass("fr-active"),n.hasClass("fr-active")?(r.attr("aria-hidden",!1),n.attr("aria-expanded",!0)):(r.attr("aria-hidden",!0),n.attr("aria-expanded",!1)),setTimeout(function(){n.removeClass("fr-blink")},300),r.css("margin-left",""),r.offset().left+r.outerWidth()>t.$sc.offset().left+t.$sc.width()&&r.css("margin-left",-(r.offset().left+r.outerWidth()-t.$sc.offset().left-t.$sc.width())),r.offset().left<t.$sc.offset().left&&"rtl"==t.opts.direction&&r.css("margin-left",t.$sc.offset().left),s.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),s.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""),0!==n.parents(".fr-popup").length||t.opts.toolbarInline||(t.node.hasClass(n.get(0),"fr-active")?t.$tb.css("zIndex",(t.opts.zIndex||1)+4):t.$tb.css("zIndex",""))
var c=r.find("a.fr-command.fr-active:first")
t.helpers.isMobile()||(c.length?t.accessibility.focusToolbarElement(c):t.accessibility.focusToolbarElement(n))}(n):(s(n),e.FE.COMMANDS[n.data("cmd")]&&!1!==e.FE.COMMANDS[n.data("cmd")].refreshAfterCallback&&r.button.bulkRefresh())}function l(t){a(e(t.currentTarget))}function u(e){var t=e.find(".fr-dropdown.fr-active")
t.length&&(t.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),t.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""))}function c(e){e.preventDefault(),e.stopPropagation()}function p(e){if(e.stopPropagation(),!t.helpers.isMobile())return!1}function d(e,n,r){if(t.helpers.isMobile()&&!1===n.showOnMobile)return""
var i,o=n.displaySelection
if("function"==typeof o&&(o=o(t)),o){var s="function"==typeof n.defaultSelection?n.defaultSelection(t):n.defaultSelection
i='<span style="width:'+(n.displaySelectionWidth||100)+'px">'+t.language.translate(s||n.title)+"</span>"}else i=t.icon.create(n.icon||e),i+='<span class="fr-sr-only">'+(t.language.translate(n.title)||"")+"</span>"
var a=n.popup?' data-popup="true"':"",l=n.modal?' data-modal="true"':"",u=t.shortcuts.get(e+".")
u=u?" ("+u+")":""
var c=e+"-"+t.id,p="dropdown-menu-"+c,d='<button id="'+c+'"type="button" tabIndex="-1" role="button"'+(n.toggle?' aria-pressed="false"':"")+("dropdown"==n.type?' aria-controls="'+p+'" aria-expanded="false" aria-haspopup="true"':"")+(n.disabled?' aria-disabled="true"':"")+' title="'+(t.language.translate(n.title)||"")+u+'" class="fr-command fr-btn'+("dropdown"==n.type?" fr-dropdown":"")+" fr-btn-"+t.icon.getTemplate(n.icon)+(n.displaySelection?" fr-selection":"")+(n.back?" fr-back":"")+(n.disabled?" fr-disabled":"")+(r?"":" fr-hidden")+'" data-cmd="'+e+'"'+a+l+">"+i+"</button>"
if("dropdown"==n.type){var f='<div id="'+p+'" class="fr-dropdown-menu" role="listbox" aria-labelledby="'+c+'" aria-hidden="true"><div class="fr-dropdown-wrapper" role="presentation"><div class="fr-dropdown-content" role="presentation">'
f+=function(e,n){var r=""
if(n.html)"function"==typeof n.html?r+=n.html.call(t):r+=n.html
else{var i=n.options
for(var o in"function"==typeof i&&(i=i()),r+='<ul class="fr-dropdown-list" role="presentation">',i)if(i.hasOwnProperty(o)){var s=t.shortcuts.get(e+"."+o)
s=s?'<span class="fr-shortcut">'+s+"</span>":"",r+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="'+e+'" data-param1="'+o+'" title="'+i[o]+'">'+t.language.translate(i[o])+"</a></li>"}r+="</ul>"}return r}(e,n),d+=f+="</div></div></div>"}return d}function f(n){var r=t.$tb&&t.$tb.data("instance")||t
if(!1===t.events.trigger("buttons.refresh"))return!0
setTimeout(function(){for(var i=r.selection.inEditor()&&r.core.hasFocus(),o=0;o<n.length;o++){var s=e(n[o]),a=s.data("cmd")
0===s.parents(".fr-popup").length?i||e.FE.COMMANDS[a]&&e.FE.COMMANDS[a].forcedRefresh?r.button.refresh(s):t.node.hasClass(s.get(0),"fr-dropdown")||(s.removeClass("fr-active"),s.attr("aria-pressed")&&s.attr("aria-pressed",!1)):s.parents(".fr-popup").is(":visible")&&r.button.refresh(s)}},0)}function h(){f(n),f(r)}function m(){n=[],r=[]}t.shared.popup_buttons||(t.shared.popup_buttons=[]),r=t.shared.popup_buttons
var g=null
function v(){clearTimeout(g),g=setTimeout(h,50)}return{_init:function(){t.opts.toolbarInline?t.events.on("toolbar.show",h):(t.events.on("mouseup",v),t.events.on("keyup",v),t.events.on("blur",v),t.events.on("focus",v),t.events.on("contentChanged",v),t.helpers.isMobile()&&t.events.$on(t.$doc,"selectionchange",h)),t.events.on("shared.destroy",m)},buildList:function(n,r){for(var i="",o=0;o<n.length;o++){var s=n[o],a=e.FE.COMMANDS[s]
a&&void 0!==a.plugin&&t.opts.pluginsEnabled.indexOf(a.plugin)<0||(a?i+=d(s,a,void 0===r||0<=r.indexOf(s)):"|"==s?i+='<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>':"-"==s&&(i+='<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>'))}return i},bindCommands:function(i,o){t.events.bindClick(i,".fr-command:not(.fr-disabled)",l),t.events.$on(i,t._mousedown+" "+t._mouseup+" "+t._move,".fr-dropdown-menu",c,!0),t.events.$on(i,t._mousedown+" "+t._mouseup+" "+t._move,".fr-dropdown-menu .fr-dropdown-wrapper",p,!0)
var s=i.get(0).ownerDocument,a="defaultView"in s?s.defaultView:s.parentWindow,d=function(n){(!n||n.type==t._mouseup&&n.target!=e("html").get(0)||"keydown"==n.type&&(t.keys.isCharacter(n.which)&&!t.keys.ctrlKey(n)||n.which==e.FE.KEYCODE.ESC))&&u(i)}
t.events.$on(e(a),t._mouseup+" resize keydown",d,!0),t.opts.iframe&&t.events.$on(t.$win,t._mouseup,d,!0),t.node.hasClass(i.get(0),"fr-popup")?e.merge(r,i.find(".fr-btn").toArray()):e.merge(n,i.find(".fr-btn").toArray()),t.tooltip.bind(i,".fr-btn, .fr-title",o)},refresh:function(n){var r,i=n.parents(".fr-popup, .fr-toolbar").data("instance")||t,o=n.data("cmd")
t.node.hasClass(n.get(0),"fr-dropdown")?r=n.next():(n.removeClass("fr-active"),n.attr("aria-pressed")&&n.attr("aria-pressed",!1)),e.FE.COMMANDS[o]&&e.FE.COMMANDS[o].refresh?e.FE.COMMANDS[o].refresh.apply(i,[n,r]):t.refresh[o]&&i.refresh[o](n,r)},bulkRefresh:h,exec:s,click:a,hideActiveDropdowns:u,getButtons:o}},e.FE.MODULES.modals=function(t){t.shared.modals||(t.shared.modals={})
var n,r=t.shared.modals
function i(){for(var e in r){var t=r[e]
t&&t.$modal&&t.$modal.removeData().remove()}n&&n.removeData().remove(),r={}}function o(i,o){if(r[i]){var s=r[i].$modal,a=s.data("instance")||t
a.events.enableBlur(),s.hide(),n.hide(),e(a.o_doc).find("body:first").removeClass("prevent-scroll fr-mobile"),s.removeClass("fr-active"),o||(a.accessibility.restoreSelection(),a.events.trigger("modals.hide"))}}function s(e){var n
if("string"==typeof e){if(!r[e])return
n=r[e].$modal}else n=e
return n&&t.node.hasClass(n,"fr-active")&&t.core.sameInstance(n)||!1}return{_init:function(){t.events.on("shared.destroy",i,!0)},get:function(e){return r[e]},create:function(i,s,a){if(t.shared.$overlay||(t.shared.$overlay=e('<div class="fr-overlay">').appendTo("body:first")),n=t.shared.$overlay,t.opts.theme&&n.addClass(t.opts.theme+"-theme"),!r[i]){var l=(u=s,c=a,p='<div tabIndex="-1" class="fr-modal'+(t.opts.theme?" "+t.opts.theme+"-theme":"")+'"><div class="fr-modal-wrapper">',p+='<div class="fr-modal-head">'+u+'<i title="'+t.language.translate("Cancel")+'" class="fa fa-times fr-modal-close"></i></div>',p+='<div tabIndex="-1" class="fr-modal-body">'+c+"</div>",e(p+="</div></div>"))
r[i]={$modal:l,$head:l.find(".fr-modal-head"),$body:l.find(".fr-modal-body")},t.helpers.isMobile()||l.addClass("fr-desktop"),l.appendTo("body:first"),t.events.$on(l,"click",".fr-modal-close",function(){o(i)},!0),r[i].$body.css("margin-top",r[i].$head.outerHeight()),t.events.$on(l,"keydown",function(n){var r=n.which
return r==e.FE.KEYCODE.ESC?(o(i),t.accessibility.focusModalButton(l),!1):!(!e(n.currentTarget).is("input[type=text], textarea")&&r!=e.FE.KEYCODE.ARROW_UP&&r!=e.FE.KEYCODE.ARROW_DOWN&&!t.keys.isBrowserAction(n)&&(n.preventDefault(),n.stopPropagation(),1))},!0),o(i,!0)}var u,c,p
return r[i]},show:function(i){if(r[i]){var o=r[i].$modal
o.data("instance",t),o.show(),n.show(),e(t.o_doc).find("body:first").addClass("prevent-scroll"),t.helpers.isMobile()&&e(t.o_doc).find("body:first").addClass("fr-mobile"),o.addClass("fr-active"),t.accessibility.focusModal(o)}},hide:o,resize:function(n){if(r[n]){var i=r[n],o=i.$modal,s=i.$body,a=e(t.o_win).height(),l=o.find(".fr-modal-wrapper"),u=a-l.outerHeight(!0)+(l.height()-(s.outerHeight(!0)-s.height())),c="auto"
u<s.get(0).scrollHeight&&(c=u),s.height(c)}},isVisible:s,areVisible:function(e){for(var t in r)if(r.hasOwnProperty(t)&&s(t)&&(void 0===e||r[t].$modal.data("instance")==e))return r[t].$modal
return!1}}},e.FE.POPUP_TEMPLATES={"text.edit":"[_EDIT_]"},e.FE.RegisterTemplate=function(t,n){e.FE.POPUP_TEMPLATES[t]=n},e.FE.MODULES.popups=function(t){t.shared.popups||(t.shared.popups={})
var n=t.shared.popups
function r(e,r){r.is(":visible")||(r=t.$sc),r.is(n[e].data("container"))||(n[e].data("container",r),r.append(n[e]))}function i(e){return n[e]&&t.node.hasClass(n[e],"fr-active")&&t.core.sameInstance(n[e])||!1}function o(e){for(var t in n)if(n.hasOwnProperty(t)&&i(t)&&(void 0===e||n[t].data("instance")==e))return n[t]
return!1}function s(e){var r=null;(r="string"!=typeof e?e:n[e])&&t.node.hasClass(r,"fr-active")&&(r.removeClass("fr-active fr-above"),t.events.trigger("popups.hide."+e),t.$tb&&(1<t.opts.zIndex?t.$tb.css("zIndex",t.opts.zIndex+1):t.$tb.css("zIndex","")),t.events.disableBlur(),r.find("input, textarea, button").filter(":focus").blur(),r.find("input, textarea").attr("disabled","disabled"))}function a(e){for(var t in void 0===e&&(e=[]),n)n.hasOwnProperty(t)&&e.indexOf(t)<0&&s(t)}function l(){t.shared.exit_flag=!0}function u(){t.shared.exit_flag=!1}function c(){return t.shared.exit_flag}function p(r){var o=n[r]
return{_windowResize:function(){var e=o.data("instance")||t
!e.helpers.isMobile()&&o.is(":visible")&&(e.events.disableBlur(),e.popups.hide(r),e.events.enableBlur())},_inputFocus:function(n){var r=o.data("instance")||t,i=e(n.currentTarget)
if(i.is("input:file")&&i.closest(".fr-layer").addClass("fr-input-focus"),n.preventDefault(),n.stopPropagation(),setTimeout(function(){r.events.enableBlur()},100),r.helpers.isMobile()){var s=e(r.o_win).scrollTop()
setTimeout(function(){e(r.o_win).scrollTop(s)},0)}},_inputBlur:function(n){var r=o.data("instance")||t,i=e(n.currentTarget)
i.is("input:file")&&i.closest(".fr-layer").removeClass("fr-input-focus"),document.activeElement!=this&&e(this).is(":visible")&&(r.events.blurActive()&&r.events.trigger("blur"),r.events.enableBlur())},_editorKeydown:function(n){var s=o.data("instance")||t
s.keys.ctrlKey(n)||n.which==e.FE.KEYCODE.ALT||n.which==e.FE.KEYCODE.ESC||(i(r)&&o.find(".fr-back:visible").length?s.button.exec(o.find(".fr-back:visible:first")):n.which!=e.FE.KEYCODE.ALT&&s.popups.hide(r))},_preventFocus:function(n){var r=o.data("instance")||t,i=n.originalEvent?n.originalEvent.target||n.originalEvent.originalTarget:null
"mouseup"==n.type||e(i).is(":focus")||r.events.disableBlur(),"mouseup"!=n.type||e(i).hasClass("fr-command")||0<e(i).parents(".fr-command").length||e(i).hasClass("fr-dropdown-content")||t.button.hideActiveDropdowns(o),(t.browser.safari||t.browser.mozilla)&&"mousedown"==n.type&&e(i).is("input[type=file]")&&r.events.disableBlur()
var s="input, textarea, button, select, label, .fr-command"
if(i&&!e(i).is(s)&&0===e(i).parents(s).length)return n.stopPropagation(),!1
i&&e(i).is(s)&&n.stopPropagation(),u()},_editorMouseup:function(){o.is(":visible")&&c()&&0<o.find("input:focus, textarea:focus, button:focus, select:focus").filter(":visible").length&&t.events.disableBlur()},_windowMouseup:function(e){if(!t.core.sameInstance(o))return!0
var n=o.data("instance")||t
o.is(":visible")&&c()&&(e.stopPropagation(),n.markers.remove(),n.popups.hide(r),u())},_windowKeydown:function(n){if(!t.core.sameInstance(o))return!0
var i=o.data("instance")||t,s=n.which
if(e.FE.KEYCODE.ESC==s){if(i.popups.isVisible(r)&&i.opts.toolbarInline)return n.stopPropagation(),i.popups.isVisible(r)&&(o.find(".fr-back:visible").length?(i.button.exec(o.find(".fr-back:visible:first")),i.accessibility.focusPopupButton(o)):o.find(".fr-dismiss:visible").length?i.button.exec(o.find(".fr-dismiss:visible:first")):(i.popups.hide(r),i.toolbar.showInline(null,!0),i.accessibility.FocusPopupButton(o))),!1
if(i.popups.isVisible(r))return o.find(".fr-back:visible").length?(i.button.exec(o.find(".fr-back:visible:first")),i.accessibility.focusPopupButton(o)):o.find(".fr-dismiss:visible").length?i.button.exec(o.find(".fr-dismiss:visible:first")):(i.popups.hide(r),i.accessibility.focusPopupButton(o)),!1}},_doPlaceholder:function(){0===e(this).next().length&&e(this).attr("placeholder")&&e(this).after('<label for="'+e(this).attr("id")+'">'+e(this).attr("placeholder")+"</label>"),e(this).toggleClass("fr-not-empty",""!==e(this).val())},_repositionPopup:function(){if(!t.opts.height&&!t.opts.heightMax||t.opts.toolbarInline)return!0
if(t.$wp&&i(r)&&o.parent().get(0)==t.$sc.get(0)){var e=o.offset().top-t.$wp.offset().top,n=t.$wp.outerHeight()
t.node.hasClass(o.get(0),"fr-above")&&(e+=o.outerHeight()),n<e||e<0?o.addClass("fr-hidden"):o.removeClass("fr-hidden")}}}}function d(e,r){t.events.on("mouseup",e._editorMouseup,!0),t.$wp&&t.events.on("keydown",e._editorKeydown),t.events.on("blur",function(){o()&&t.markers.remove(),a()}),t.$wp&&!t.helpers.isMobile()&&t.events.$on(t.$wp,"scroll.popup"+r,e._repositionPopup),t.events.on("window.mouseup",e._windowMouseup,!0),t.events.on("window.keydown",e._windowKeydown,!0),n[r].data("inst"+t.id,!0),t.events.on("destroy",function(){t.core.sameInstance(n[r])&&n[r].removeClass("fr-active").appendTo("body:first")},!0)}function f(){for(var e in n)if(n.hasOwnProperty(e)){var t=n[e]
t&&(t.html("").removeData().remove(),n[e]=null)}n=[]}return t.shared.exit_flag=!1,{_init:function(){t.events.on("shared.destroy",f,!0),t.events.on("window.mousedown",l),t.events.on("window.touchmove",u),t.events.$on(e(t.o_win),"scroll",u),t.events.on("mousedown",function(e){o()&&(e.stopPropagation(),t.$el.find(".fr-marker").remove(),l(),t.events.disableBlur())})},create:function(r,i){var o=function(r,i){var o,s,a=function(n,r){var i=e.FE.POPUP_TEMPLATES[n]
if(!i)return null
for(var o in"function"==typeof i&&(i=i.apply(t)),r)r.hasOwnProperty(o)&&(i=i.replace("[_"+o.toUpperCase()+"_]",r[o]))
return i}(r,i)
return a?(o=e('<div class="fr-popup'+(t.helpers.isMobile()?" fr-mobile":" fr-desktop")+(t.opts.toolbarInline?" fr-inline":"")+'"><span class="fr-arrow"></span>'+a+"</div>"),t.opts.theme&&o.addClass(t.opts.theme+"-theme"),1<t.opts.zIndex&&(t.opts.editInPopup?o.css("z-index",t.opts.zIndex+2):t.$tb.css("z-index",t.opts.zIndex+2)),"auto"!=t.opts.direction&&o.removeClass("fr-ltr fr-rtl").addClass("fr-"+t.opts.direction),o.find("input, textarea").attr("dir",t.opts.direction).attr("disabled","disabled"),(s=e("body:first")).append(o),o.data("container",s),n[r]=o,t.button.bindCommands(o,!1),o):(o=e('<div class="fr-popup fr-empty"></div>'),(s=e("body:first")).append(o),o.data("container",s),n[r]=o)}(r,i),s=p(r)
return d(s,r),t.events.$on(o,"mousedown mouseup touchstart touchend touch","*",s._preventFocus,!0),t.events.$on(o,"focus","input, textarea, button, select",s._inputFocus,!0),t.events.$on(o,"blur","input, textarea, button, select",s._inputBlur,!0),t.accessibility.registerPopup(r),t.events.$on(o,"keydown keyup change input","input, textarea",s._doPlaceholder,!0),t.helpers.isIOS()&&t.events.$on(o,"touchend","label",function(){e("#"+e(this).attr("for")).prop("checked",function(e,t){return!t})},!0),t.events.$on(e(t.o_win),"resize",s._windowResize,!0),o},get:function(e){var r=n[e]
return r&&!r.data("inst"+t.id)&&d(p(e),e),r},show:function(e,s,l,c){if(i(e)||(o()&&0<t.$el.find(".fr-marker").length?(t.events.disableBlur(),t.selection.restore()):o()||(t.events.disableBlur(),t.events.focus(),t.events.enableBlur())),a([e]),!n[e])return!1
var d=t.button.getButtons(".fr-dropdown.fr-active")
d.removeClass("fr-active").attr("aria-expanded",!1).parent(".fr-toolbar").css("zIndex",""),d.next().attr("aria-hidden",!0),n[e].data("instance",t),t.$tb&&t.$tb.data("instance",t)
var f=n[e].outerWidth(),h=i(e)
n[e].addClass("fr-active").removeClass("fr-hidden").find("input, textarea").removeAttr("disabled")
var m,g,v=n[e].data("container")
m=e,(g=v).is(":visible")||(g=t.$sc),0===g.find([n[m]]).length&&g.append(n[m]),t.opts.toolbarInline&&v&&t.$tb&&v.get(0)==t.$tb.get(0)&&(r(e,t.$sc),l=t.$tb.offset().top-t.helpers.getPX(t.$tb.css("margin-top")),s=t.$tb.offset().left+t.$tb.outerWidth()/2+(parseFloat(t.$tb.find(".fr-arrow").css("margin-left"))||0)+t.$tb.find(".fr-arrow").outerWidth()/2,t.node.hasClass(t.$tb.get(0),"fr-above")&&l&&(l+=t.$tb.outerHeight()),c=0),v=n[e].data("container"),!t.opts.iframe||c||h||(s&&(s-=t.$iframe.offset().left),l&&(l-=t.$iframe.offset().top)),v.is(t.$tb)?t.$tb.css("zIndex",(t.opts.zIndex||1)+4):n[e].css("zIndex",(t.opts.zIndex||1)+4),s&&(s-=f/2),t.opts.toolbarBottom&&v&&t.$tb&&v.get(0)==t.$tb.get(0)&&(n[e].addClass("fr-above"),l&&(l-=n[e].outerHeight())),n[e].removeClass("fr-active"),t.position.at(s,l,n[e],c||0),n[e].addClass("fr-active"),h||t.accessibility.focusPopup(n[e]),t.opts.toolbarInline&&t.toolbar.hide(),t.events.trigger("popups.show."+e),p(e)._repositionPopup(),u()},hide:s,onHide:function(e,n){t.events.on("popups.hide."+e,n)},hideAll:a,setContainer:r,refresh:function(r){n[r].data("instance",t),t.events.trigger("popups.refresh."+r)
for(var i=n[r].find(".fr-command"),o=0;o<i.length;o++){var s=e(i[o])
0===s.parents(".fr-dropdown-menu").length&&t.button.refresh(s)}},onRefresh:function(e,n){t.events.on("popups.refresh."+e,n)},onShow:function(e,n){t.events.on("popups.show."+e,n)},isVisible:i,areVisible:o}},e.FE.MODULES.position=function(t){function n(){var e=t.selection.ranges(0).getBoundingClientRect()
if(0===e.top&&0===e.left&&0===e.width||0===e.height){var n=!1
0===t.$el.find(".fr-marker").length&&(t.selection.save(),n=!0)
var r=t.$el.find(".fr-marker:first")
r.css("display","inline"),r.css("line-height","")
var i=r.offset(),o=r.outerHeight()
r.css("display","none"),r.css("line-height",0),(e={}).left=i.left,e.width=0,e.height=o,e.top=i.top-(t.helpers.isMobile()&&!t.helpers.isIOS()||t.opts.iframe?0:t.helpers.scrollTop()),e.right=1,e.bottom=1,e.ok=!0,n&&t.selection.restore()}return e}function r(e,n,r,i){var o=r.data("container")
!o||"BODY"===o.get(0).tagName&&"static"==o.css("position")||(e&&(e-=o.offset().left),n&&(n-=o.offset().top),"BODY"!=o.get(0).tagName?(e&&(e+=o.get(0).scrollLeft),n&&(n+=o.get(0).scrollTop)):"absolute"==o.css("position")&&(e&&(e+=o.position().left),n&&(n+=o.position().top))),t.opts.iframe&&o&&t.$tb&&o.get(0)!=t.$tb.get(0)&&(e&&(e+=t.$iframe.offset().left),n&&(n+=t.$iframe.offset().top))
var s,a,l=((s=e)+(a=r.outerWidth(!0))>t.$sc.get(0).clientWidth-10&&(s=t.$sc.get(0).clientWidth-a-10),s<0&&(s=10),s)
if(e){r.css("left",l)
var u=r.data("fr-arrow")
u||(u=r.find(".fr-arrow"),r.data("fr-arrow",u)),u.data("margin-left")||u.data("margin-left",t.helpers.getPX(u.css("margin-left"))),u.css("margin-left",e-l+u.data("margin-left"))}n&&r.css("top",function(e,n,r){var i=e.outerHeight(!0)
if(!t.helpers.isMobile()&&t.$tb&&e.parent().get(0)!=t.$tb.get(0)){var o=e.parent().offset().top,s=n-i-(r||0)
e.parent().get(0)==t.$sc.get(0)&&(o-=e.parent().position().top)
var a=t.$sc.get(0).clientHeight
o+n+i>t.$sc.offset().top+a&&0<e.parent().offset().top+s&&0<s?s>t.$wp.scrollTop()&&(n=s,e.addClass("fr-above")):e.removeClass("fr-above")}return n}(r,n,i))}function i(n){var r=e(n),i=r.is(".fr-sticky-on"),o=r.data("sticky-top"),s=r.data("sticky-scheduled")
if(void 0===o){r.data("sticky-top",0)
var a=e('<div class="fr-sticky-dummy" style="height: '+r.outerHeight()+'px;"></div>')
t.$box.prepend(a)}else t.$box.find(".fr-sticky-dummy").css("height",r.outerHeight())
if(t.core.hasFocus()||0<t.$tb.find("input:visible:focus").length){var l=t.helpers.scrollTop(),u=Math.min(Math.max(l-t.$tb.parent().offset().top,0),t.$tb.parent().outerHeight()-r.outerHeight())
u!=o&&u!=s&&(clearTimeout(r.data("sticky-timeout")),r.data("sticky-scheduled",u),r.outerHeight()<l-t.$tb.parent().offset().top&&r.addClass("fr-opacity-0"),r.data("sticky-timeout",setTimeout(function(){var e=t.helpers.scrollTop(),n=Math.min(Math.max(e-t.$tb.parent().offset().top,0),t.$tb.parent().outerHeight()-r.outerHeight())
0<n&&"BODY"==t.$tb.parent().get(0).tagName&&(n+=t.$tb.parent().position().top),n!=o&&(r.css("top",Math.max(n,0)),r.data("sticky-top",n),r.data("sticky-scheduled",n)),r.removeClass("fr-opacity-0")},100))),i||(r.css("top","0"),r.width(t.$tb.parent().width()),r.addClass("fr-sticky-on"),t.$box.addClass("fr-sticky-box"))}else clearTimeout(e(n).css("sticky-timeout")),r.css("top","0"),r.css("position",""),r.width(""),r.data("sticky-top",0),r.removeClass("fr-sticky-on"),t.$box.removeClass("fr-sticky-box")}function o(n){if(n.offsetWidth){var r,i,o=e(n),s=o.outerHeight(),a=o.data("sticky-position"),l=e("body"==t.opts.scrollableContainer?t.o_win:t.opts.scrollableContainer).outerHeight(),u=0,c=0
"body"!==t.opts.scrollableContainer&&(u=t.$sc.offset().top,c=e(t.o_win).outerHeight()-u-l)
var p="body"==t.opts.scrollableContainer?t.helpers.scrollTop():u,d=o.is(".fr-sticky-on")
o.data("sticky-parent")||o.data("sticky-parent",o.parent())
var f=o.data("sticky-parent"),h=f.offset().top,m=f.outerHeight()
if(o.data("sticky-offset")?t.$box.find(".fr-sticky-dummy").css("height",s+"px"):(o.data("sticky-offset",!0),o.after('<div class="fr-sticky-dummy" style="height: '+s+'px;"></div>')),!a){var g="auto"!==o.css("top")||"auto"!==o.css("bottom")
g||o.css("position","fixed"),a={top:t.node.hasClass(o.get(0),"fr-top"),bottom:t.node.hasClass(o.get(0),"fr-bottom")},g||o.css("position",""),o.data("sticky-position",a),o.data("top",t.node.hasClass(o.get(0),"fr-top")?o.css("top"):"auto"),o.data("bottom",t.node.hasClass(o.get(0),"fr-bottom")?o.css("bottom"):"auto")}r=t.helpers.getPX(o.data("top")),i=t.helpers.getPX(o.data("bottom"))
var v=a.top&&h<p+r&&p+r<=h+m-s&&(t.helpers.isInViewPort(t.$sc.get(0))||"body"==t.opts.scrollableContainer),b=a.bottom&&h+s<p+l-i&&p+l-i<h+m
v||b?(o.css("width",f.get(0).getBoundingClientRect().width+"px"),d||(o.addClass("fr-sticky-on"),o.removeClass("fr-sticky-off"),o.css("top")&&("auto"!=o.data("top")?o.css("top",t.helpers.getPX(o.data("top"))+u):o.data("top","auto")),o.css("bottom")&&("auto"!=o.data("bottom")?o.css("bottom",t.helpers.getPX(o.data("bottom"))+c):o.css("bottom","auto")))):t.node.hasClass(o.get(0),"fr-sticky-off")||(o.width(""),o.removeClass("fr-sticky-on"),o.addClass("fr-sticky-off"),o.css("top")&&"auto"!=o.data("top")&&a.top&&o.css("top",0),o.css("bottom")&&"auto"!=o.data("bottom")&&a.bottom&&o.css("bottom",0))}}function s(){var e=document.createElement("test").style
return e.cssText="position:"+["-webkit-","-moz-","-ms-","-o-",""].join("sticky; position:")+" sticky;",-1!==e.position.indexOf("sticky")&&!t.helpers.isIOS()&&!t.helpers.isAndroid()&&!t.browser.chrome}function a(){if(t._stickyElements)for(var e=0;e<t._stickyElements.length;e++)o(t._stickyElements[e])}return{_init:function(){!function(){if(!s())if(t._stickyElements=[],t.helpers.isIOS()){var n=function(){if(t.helpers.requestAnimationFrame()(n),!1!==t.events.trigger("position.refresh"))for(var e=0;e<t._stickyElements.length;e++)i(t._stickyElements[e])}
n(),t.events.$on(e(t.o_win),"scroll",function(){if(t.core.hasFocus())for(var n=0;n<t._stickyElements.length;n++){var r=e(t._stickyElements[n]),i=r.parent(),o=t.helpers.scrollTop()
r.outerHeight()<o-i.offset().top&&(r.addClass("fr-opacity-0"),r.data("sticky-top",-1),r.data("sticky-scheduled",-1))}},!0)}else"body"!==t.opts.scrollableContainer&&t.events.$on(e(t.opts.scrollableContainer),"scroll",a,!0),t.events.$on(e(t.o_win),"scroll",a,!0),t.events.$on(e(t.o_win),"resize",a,!0),t.events.on("initialized",a),t.events.on("focus",a),t.events.$on(e(t.o_win),"resize","textarea",a,!0)
t.events.on("destroy",function(){t._stickyElements=[]})}()},forSelection:function(e){var i=n()
e.css({top:0,left:0})
var o=i.top+i.height,s=i.left+i.width/2-e.get(0).offsetWidth/2+t.helpers.scrollLeft()
t.opts.iframe||(o+=t.helpers.scrollTop()),r(s,o,e,i.height)},addSticky:function(e){e.addClass("fr-sticky"),t.helpers.isIOS()&&e.addClass("fr-sticky-ios"),s()||(e.removeClass("fr-sticky"),t._stickyElements.push(e.get(0)))},refresh:a,at:r,getBoundingRect:n}},e.FE.MODULES.refresh=function(t){function n(e,t){e.toggleClass("fr-disabled",t).attr("aria-disabled",t)}return{undo:function(e){n(e,!t.undo.canDo())},redo:function(e){n(e,!t.undo.canRedo())},outdent:function(r){if(t.node.hasClass(r.get(0),"fr-no-refresh"))return!1
for(var i=t.selection.blocks(),o=0;o<i.length;o++){var s="rtl"==t.opts.direction||"rtl"==e(i[o]).css("direction")?"margin-right":"margin-left"
if("LI"==i[o].tagName||"LI"==i[o].parentNode.tagName)return n(r,!1),!0
if(0<t.helpers.getPX(e(i[o]).css(s)))return n(r,!1),!0}n(r,!0)},indent:function(e){if(t.node.hasClass(e.get(0),"fr-no-refresh"))return!1
for(var r=t.selection.blocks(),i=0;i<r.length;i++){for(var o=r[i].previousSibling;o&&o.nodeType==Node.TEXT_NODE&&0===o.textContent.length;)o=o.previousSibling
if("LI"!=r[i].tagName||o)return n(e,!1),!0
n(e,!0)}}}},e.extend(e.FE.DEFAULTS,{editInPopup:!1}),e.FE.MODULES.textEdit=function(e){return{_init:function(){var t
e.opts.editInPopup&&(t={edit:'<div id="fr-text-edit-'+e.id+'" class="fr-layer fr-text-edit-layer"><div class="fr-input-line"><input type="text" placeholder="'+e.language.translate("Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="updateText" tabIndex="2">'+e.language.translate("Update")+"</button></div></div>"},e.popups.create("text.edit",t),e.events.$on(e.$el,e._mouseup,function(){setTimeout(function(){var t,n
n=e.popups.get("text.edit"),t="INPUT"===e.$el.prop("tagName")?e.$el.attr("placeholder"):e.$el.text(),n.find("input").val(t).trigger("change"),e.popups.setContainer("text.edit",e.$sc),e.popups.show("text.edit",e.$el.offset().left+e.$el.outerWidth()/2,e.$el.offset().top+e.$el.outerHeight(),e.$el.outerHeight())},10)}))},update:function(){var t=e.popups.get("text.edit").find("input").val()
0===t.length&&(t=e.opts.placeholderText),"INPUT"===e.$el.prop("tagName")?e.$el.attr("placeholder",t):e.$el.text(t),e.events.trigger("contentChanged"),e.popups.hide("text.edit")}}},e.FE.RegisterCommand("updateText",{focus:!1,undo:!1,callback:function(){this.textEdit.update()}}),e.extend(e.FE.DEFAULTS,{toolbarBottom:!1,toolbarButtons:null,toolbarButtonsXS:null,toolbarButtonsSM:null,toolbarButtonsMD:null,toolbarContainer:null,toolbarInline:!1,toolbarSticky:!0,toolbarStickyOffset:0,toolbarVisibleWithoutSelection:!1}),e.FE.TOOLBAR_BUTTONS=["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","|","fontFamily","fontSize","color","inlineStyle","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","-","insertLink","insertImage","insertVideo","embedly","insertFile","insertTable","|","emoticons","specialCharacters","insertHR","selectAll","clearFormatting","|","print","spellChecker","help","html","|","undo","redo"],e.FE.TOOLBAR_BUTTONS_MD=null,e.FE.TOOLBAR_BUTTONS_SM=["bold","italic","underline","|","fontFamily","fontSize","insertLink","insertImage","table","|","undo","redo"],e.FE.TOOLBAR_BUTTONS_XS=["bold","italic","fontFamily","fontSize","|","undo","redo"],e.FE.MODULES.toolbar=function(t){var n=[]
function r(e,t){for(var n=0;n<t.length;n++)"-"!=t[n]&&"|"!=t[n]&&e.indexOf(t[n])<0&&e.push(t[n])}function i(){var e=t.helpers.screenSize()
return n[e]}function o(){var e=i()
t.$tb.find(".fr-separator").remove(),t.$tb.find("> .fr-command").addClass("fr-hidden")
for(var n=0;n<e.length;n++)if("|"==e[n]||"-"==e[n])t.$tb.append(t.button.buildList([e[n]]))
else{var r=t.$tb.find('> .fr-command[data-cmd="'+e[n]+'"]'),o=null
t.node.hasClass(r.next().get(0),"fr-dropdown-menu")&&(o=r.next()),r.removeClass("fr-hidden").appendTo(t.$tb),o&&o.appendTo(t.$tb)}}function s(n,r){setTimeout(function(){if((!n||n.which!=e.FE.KEYCODE.ESC)&&t.selection.inEditor()&&t.core.hasFocus()&&!t.popups.areVisible()&&(t.opts.toolbarVisibleWithoutSelection||!t.selection.isCollapsed()&&!t.keys.isIME()||r)){if(t.$tb.data("instance",t),!1===t.events.trigger("toolbar.show",[n]))return!1
t.$tb.show(),t.opts.toolbarContainer||t.position.forSelection(t.$tb),1<t.opts.zIndex?t.$tb.css("z-index",t.opts.zIndex+1):t.$tb.css("z-index",null)}},0)}function a(e){return(!e||"blur"!==e.type||document.activeElement!==t.el)&&(!(!e||"keydown"!==e.type||!t.keys.ctrlKey(e))||!!t.button.getButtons(".fr-dropdown.fr-active").next().find(t.o_doc.activeElement).length||void(!1!==t.events.trigger("toolbar.hide")&&t.$tb.hide()))}n[e.FE.XS]=t.opts.toolbarButtonsXS||t.opts.toolbarButtons||e.FE.TOOLBAR_BUTTONS_XS||e.FE.TOOLBAR_BUTTONS||[],n[e.FE.SM]=t.opts.toolbarButtonsSM||t.opts.toolbarButtons||e.FE.TOOLBAR_BUTTONS_SM||e.FE.TOOLBAR_BUTTONS||[],n[e.FE.MD]=t.opts.toolbarButtonsMD||t.opts.toolbarButtons||e.FE.TOOLBAR_BUTTONS_MD||e.FE.TOOLBAR_BUTTONS||[],n[e.FE.LG]=t.opts.toolbarButtons||e.FE.TOOLBAR_BUTTONS||[]
var l=null
function u(n){clearTimeout(l),n&&n.which==e.FE.KEYCODE.ESC||(l=setTimeout(s,t.opts.typingTimer))}function c(){t.events.on("window.mousedown",a),t.events.on("keydown",a),t.events.on("blur",a),t.helpers.isMobile()||t.events.on("window.mouseup",s),t.helpers.isMobile()?t.helpers.isIOS()||(t.events.on("window.touchend",s),t.browser.mozilla&&setInterval(s,200)):t.events.on("window.keyup",u),t.events.on("keydown",function(t){t&&t.which==e.FE.KEYCODE.ESC&&a()}),t.events.on("keydown",function(t){if(t.which==e.FE.KEYCODE.ALT)return t.stopPropagation(),!1},!0),t.events.$on(t.$wp,"scroll.toolbar",s),t.events.on("commands.after",s),t.helpers.isMobile()&&(t.events.$on(t.$doc,"selectionchange",u),t.events.$on(t.$doc,"orientationchange",s))}function p(){t.$tb.html("").removeData().remove(),t.$tb=null}function d(){t.$box.removeClass("fr-top fr-bottom fr-inline fr-basic"),t.$box.find(".fr-sticky-dummy").remove()}function f(){t.opts.theme&&t.$tb.addClass(t.opts.theme+"-theme"),1<t.opts.zIndex&&t.$tb.css("z-index",t.opts.zIndex+1),"auto"!=t.opts.direction&&t.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-"+t.opts.direction),t.helpers.isMobile()?t.$tb.addClass("fr-mobile"):t.$tb.addClass("fr-desktop"),t.opts.toolbarContainer?(t.opts.toolbarInline&&(c(),a()),t.opts.toolbarBottom?t.$tb.addClass("fr-bottom"):t.$tb.addClass("fr-top")):t.opts.toolbarInline?(t.$sc.append(t.$tb),t.$tb.data("container",t.$sc),t.$tb.addClass("fr-inline"),t.$tb.prepend('<span class="fr-arrow"></span>'),c(),t.opts.toolbarBottom=!1):(t.opts.toolbarBottom&&!t.helpers.isIOS()?(t.$box.append(t.$tb),t.$tb.addClass("fr-bottom"),t.$box.addClass("fr-bottom")):(t.opts.toolbarBottom=!1,t.$box.prepend(t.$tb),t.$tb.addClass("fr-top"),t.$box.addClass("fr-top")),t.$tb.addClass("fr-basic"),t.opts.toolbarSticky&&(t.opts.toolbarStickyOffset&&(t.opts.toolbarBottom?t.$tb.css("bottom",t.opts.toolbarStickyOffset):t.$tb.css("top",t.opts.toolbarStickyOffset)),t.position.addSticky(t.$tb))),function(){var o=e.merge([],i())
r(o,n[e.FE.XS]),r(o,n[e.FE.SM]),r(o,n[e.FE.MD]),r(o,n[e.FE.LG])
for(var s=o.length-1;0<=s;s--)"-"!=o[s]&&"|"!=o[s]&&o.indexOf(o[s])<s&&o.splice(s,1)
var a=t.button.buildList(o,i())
t.$tb.append(a),t.button.bindCommands(t.$tb)}(),t.events.$on(e(t.o_win),"resize",o),t.events.$on(e(t.o_win),"orientationchange",o),t.accessibility.registerToolbar(t.$tb),t.events.$on(t.$tb,t._mousedown+" "+t._mouseup,function(e){var n=e.originalEvent?e.originalEvent.target||e.originalEvent.originalTarget:null
if(n&&"INPUT"!=n.tagName&&!t.edit.isDisabled())return e.stopPropagation(),e.preventDefault(),!1},!0)}var h=!1
return{_init:function(){if(t.$sc=e(t.opts.scrollableContainer).first(),!t.$wp)return!1
t.opts.toolbarContainer?(t.shared.$tb?(t.$tb=t.shared.$tb,t.opts.toolbarInline&&c()):(t.shared.$tb=e('<div class="fr-toolbar"></div>'),t.$tb=t.shared.$tb,e(t.opts.toolbarContainer).append(t.$tb),f(),t.$tb.data("instance",t)),t.opts.toolbarInline?t.$box.addClass("fr-inline"):t.$box.addClass("fr-basic"),t.events.on("focus",function(){t.$tb.data("instance",t)},!0),t.opts.toolbarInline=!1):t.opts.toolbarInline?(t.$box.addClass("fr-inline"),t.shared.$tb?(t.$tb=t.shared.$tb,c()):(t.shared.$tb=e('<div class="fr-toolbar"></div>'),t.$tb=t.shared.$tb,f())):(t.$box.addClass("fr-basic"),t.$tb=e('<div class="fr-toolbar"></div>'),f(),t.$tb.data("instance",t)),t.events.on("destroy",d,!0),t.events.on(t.opts.toolbarInline||t.opts.toolbarContainer?"shared.destroy":"destroy",p,!0)},hide:a,show:function(){if(!1===t.events.trigger("toolbar.show"))return!1
t.$tb.show()},showInline:s,disable:function(){!h&&t.$tb&&(t.$tb.find("> .fr-command").addClass("fr-disabled fr-no-refresh").attr("aria-disabled",!0),h=!0)},enable:function(){h&&t.$tb&&(t.$tb.find("> .fr-command").removeClass("fr-disabled fr-no-refresh").attr("aria-disabled",!1),h=!1),t.button.bulkRefresh()}}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.FE.PLUGINS.align=function(t){return{apply:function(n){var r=t.selection.element()
if(e(r).parents(".fr-img-caption").length)e(r).css("text-align",n)
else{t.selection.save(),t.html.wrap(!0,!0,!0,!0),t.selection.restore()
for(var i=t.selection.blocks(),o=0;o<i.length;o++)t.helpers.getAlignment(e(i[o].parentNode))==n?e(i[o]).css("text-align","").removeClass("fr-temp-div"):e(i[o]).css("text-align",n).removeClass("fr-temp-div"),""===e(i[o]).attr("class")&&e(i[o]).removeAttr("class"),""===e(i[o]).attr("style")&&e(i[o]).removeAttr("style")
t.selection.save(),t.html.unwrap(),t.selection.restore()}},refresh:function(n){var r=t.selection.blocks()
if(r.length){var i=t.helpers.getAlignment(e(r[0]))
n.find("> *:first").replaceWith(t.icon.create("align-"+i))}},refreshOnShow:function(n,r){var i=t.selection.blocks()
if(i.length){var o=t.helpers.getAlignment(e(i[0]))
r.find('a.fr-command[data-param1="'+o+'"]').addClass("fr-active").attr("aria-selected",!0)}}}},e.FE.DefineIcon("align",{NAME:"align-left"}),e.FE.DefineIcon("align-left",{NAME:"align-left"}),e.FE.DefineIcon("align-right",{NAME:"align-right"}),e.FE.DefineIcon("align-center",{NAME:"align-center"}),e.FE.DefineIcon("align-justify",{NAME:"align-justify"}),e.FE.RegisterCommand("align",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.align.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="align" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.icon.create("align-"+r)+'<span class="fr-sr-only">'+this.language.translate(n[r])+"</span></a></li>")
return t+"</ul>"},callback:function(e,t){this.align.apply(t)},refresh:function(e){this.align.refresh(e)},refreshOnShow:function(e,t){this.align.refreshOnShow(e,t)},plugin:"align"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{charCounterMax:-1,charCounterCount:!0}),e.FE.PLUGINS.charCounter=function(t){var n
function r(){return(t.el.textContent||"").replace(/\u200B/g,"").length}function i(n){if(t.opts.charCounterMax<0)return!0
if(r()<t.opts.charCounterMax)return!0
var i=n.which
return!(!t.keys.ctrlKey(n)&&t.keys.isCharacter(i)||i===e.FE.KEYCODE.IME)||(n.preventDefault(),n.stopPropagation(),t.events.trigger("charCounter.exceeded"),!1)}function o(n){return t.opts.charCounterMax<0?n:e("<div>").html(n).text().length+r()<=t.opts.charCounterMax?n:(t.events.trigger("charCounter.exceeded"),"")}function s(){if(t.opts.charCounterCount){var e=r()+(0<t.opts.charCounterMax?"/"+t.opts.charCounterMax:"")
n.text(e),t.opts.toolbarBottom&&n.css("margin-bottom",t.$tb.outerHeight(!0))
var i=t.$wp.get(0).offsetWidth-t.$wp.get(0).clientWidth
0<=i&&("rtl"==t.opts.direction?n.css("margin-left",i):n.css("margin-right",i))}}return{_init:function(){return!!t.$wp&&!!t.opts.charCounterCount&&((n=e('<span class="fr-counter"></span>')).css("bottom",t.$wp.css("border-bottom-width")),t.$box.append(n),t.events.on("keydown",i,!0),t.events.on("paste.afterCleanup",o),t.events.on("keyup contentChanged input",function(){t.events.trigger("charCounter.update")}),t.events.on("charCounter.update",s),t.events.trigger("charCounter.update"),void t.events.on("destroy",function(){e(t.o_win).off("resize.char"+t.id),n.removeData().remove(),n=null}))},count:r}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.POPUP_TEMPLATES,{"colors.picker":"[_BUTTONS_][_TEXT_COLORS_][_BACKGROUND_COLORS_][_CUSTOM_COLOR_]"}),e.extend(e.FE.DEFAULTS,{colorsText:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsBackground:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsStep:7,colorsHEXInput:!0,colorsDefaultTab:"text",colorsButtons:["colorsBack","|","-"]}),e.FE.PLUGINS.colors=function(t){function n(){t.popups.hide("colors.picker")}function r(e){for(var n="text"==e?t.opts.colorsText:t.opts.colorsBackground,r='<div class="fr-color-set fr-'+e+"-color"+(t.opts.colorsDefaultTab==e||"text"!=t.opts.colorsDefaultTab&&"background"!=t.opts.colorsDefaultTab&&"text"==e?" fr-selected-set":"")+'">',i=0;i<n.length;i++)0!==i&&i%t.opts.colorsStep==0&&(r+="<br>"),"REMOVE"!=n[i]?r+='<span class="fr-command fr-select-color" style="background: '+n[i]+';" tabIndex="-1" aria-selected="false" role="button" data-cmd="'+e+'Color" data-param1="'+n[i]+'"><span class="fr-sr-only">'+t.language.translate("Color")+" "+n[i]+"&nbsp;&nbsp;&nbsp;</span></span>":r+='<span class="fr-command fr-select-color" data-cmd="'+e+'Color" tabIndex="-1" role="button" data-param1="REMOVE" title="'+t.language.translate("Clear Formatting")+'">'+t.icon.create("remove")+'<span class="fr-sr-only">'+t.language.translate("Clear Formatting")+"</span></span>"
return r+"</div>"}function i(n){var r,i=t.popups.get("colors.picker"),o=e(t.selection.element())
r="background"==n?"background-color":"color"
var s=i.find(".fr-"+n+"-color .fr-select-color")
for(s.find(".fr-selected-color").remove(),s.removeClass("fr-active-item"),s.not('[data-param1="REMOVE"]').attr("aria-selected",!1);o.get(0)!=t.el;){if("transparent"!=o.css(r)&&"rgba(0, 0, 0, 0)"!=o.css(r)){var a=i.find(".fr-"+n+'-color .fr-select-color[data-param1="'+t.helpers.RGBToHex(o.css(r))+'"]')
a.append('<span class="fr-selected-color" aria-hidden="true"></span>'),a.addClass("fr-active-item").attr("aria-selected",!0)
break}o=o.parent()}var l=i.find(".fr-color-hex-layer input")
l.length&&l.val(t.helpers.RGBToHex(o.css(r))).trigger("change")}function o(e){"REMOVE"!=e?t.format.applyStyle("background-color",t.helpers.HEXtoRGB(e)):t.format.removeStyle("background-color"),n()}function s(e){"REMOVE"!=e?t.format.applyStyle("color",t.helpers.HEXtoRGB(e)):t.format.removeStyle("color"),n()}return{showColorsPopup:function(){var n=t.$tb.find('.fr-command[data-cmd="color"]'),o=t.popups.get("colors.picker")
if(o||(o=function(){var n,i='<div class="fr-buttons fr-colors-buttons">'
t.opts.toolbarInline&&0<t.opts.colorsButtons.length&&(i+=t.button.buildList(t.opts.colorsButtons)),i+=(n='<div class="fr-colors-tabs fr-group">',n+='<span class="fr-colors-tab '+("background"==t.opts.colorsDefaultTab?"":"fr-selected-tab ")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"!=t.opts.colorsDefaultTab)+'" data-param1="text" data-cmd="colorChangeSet" title="'+t.language.translate("Text")+'">'+t.language.translate("Text")+"</span>",(n+='<span class="fr-colors-tab '+("background"==t.opts.colorsDefaultTab?"fr-selected-tab ":"")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"==t.opts.colorsDefaultTab)+'" data-param1="background" data-cmd="colorChangeSet" title="'+t.language.translate("Background")+'">'+t.language.translate("Background")+"</span>")+"</div></div>")
var o=""
t.opts.colorsHEXInput&&(o='<div class="fr-color-hex-layer fr-active fr-layer" id="fr-color-hex-layer-'+t.id+'"><div class="fr-input-line"><input maxlength="7" id="fr-color-hex-layer-text-'+t.id+'" type="text" placeholder="'+t.language.translate("HEX Color")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="customColor" tabIndex="2" role="button">'+t.language.translate("OK")+"</button></div></div>")
var s,a={buttons:i,text_colors:r("text"),background_colors:r("background"),custom_color:o},l=t.popups.create("colors.picker",a)
return s=l,t.events.on("popup.tab",function(n){var r=e(n.currentTarget)
if(!t.popups.isVisible("colors.picker")||!r.is("span"))return!0
var i=n.which,o=!0
if(e.FE.KEYCODE.TAB==i){var a=s.find(".fr-buttons")
o=!t.accessibility.focusToolbar(a,!!n.shiftKey)}else if(e.FE.KEYCODE.ARROW_UP==i||e.FE.KEYCODE.ARROW_DOWN==i||e.FE.KEYCODE.ARROW_LEFT==i||e.FE.KEYCODE.ARROW_RIGHT==i){if(r.is("span.fr-select-color")){var l=r.parent().find("span.fr-select-color"),u=l.index(r),c=t.opts.colorsStep,p=Math.floor(l.length/c),d=u%c,f=Math.floor(u/c)*c+d,h=p*c
e.FE.KEYCODE.ARROW_UP==i?f=((f-c)%h+h)%h:e.FE.KEYCODE.ARROW_DOWN==i?f=(f+c)%h:e.FE.KEYCODE.ARROW_LEFT==i?f=((f-1)%h+h)%h:e.FE.KEYCODE.ARROW_RIGHT==i&&(f=(f+1)%h)
var m=e(l.get(f))
t.events.disableBlur(),m.focus(),o=!1}}else e.FE.KEYCODE.ENTER==i&&(t.button.exec(r),o=!1)
return!1===o&&(n.preventDefault(),n.stopPropagation()),o},!0),l}()),!o.hasClass("fr-active"))if(t.popups.setContainer("colors.picker",t.$tb),i(o.find(".fr-selected-tab").attr("data-param1")),n.is(":visible")){var s=n.offset().left+n.outerWidth()/2,a=n.offset().top+(t.opts.toolbarBottom?10:n.outerHeight()-10)
t.popups.show("colors.picker",s,a,n.outerHeight())}else t.position.forSelection(o),t.popups.show("colors.picker")},hideColorsPopup:n,changeSet:function(e,n){e.hasClass("fr-selected-tab")||(e.siblings().removeClass("fr-selected-tab").attr("aria-pressed",!1),e.addClass("fr-selected-tab").attr("aria-pressed",!0),e.parents(".fr-popup").find(".fr-color-set").removeClass("fr-selected-set"),e.parents(".fr-popup").find(".fr-color-set.fr-"+n+"-color").addClass("fr-selected-set"),i(n)),t.accessibility.focusPopup(e.parents(".fr-popup"))},background:o,customColor:function(){var e=t.popups.get("colors.picker"),n=e.find(".fr-color-hex-layer input")
if(n.length){var r=n.val()
"background"==e.find(".fr-selected-tab").attr("data-param1")?o(r):s(r)}},text:s,back:function(){t.popups.hide("colors.picker"),t.toolbar.showInline()}}},e.FE.DefineIcon("colors",{NAME:"tint"}),e.FE.RegisterCommand("color",{title:"Colors",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("colors.picker")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("colors.picker")):this.colors.showColorsPopup()},plugin:"colors"}),e.FE.RegisterCommand("textColor",{undo:!0,callback:function(e,t){this.colors.text(t)}}),e.FE.RegisterCommand("backgroundColor",{undo:!0,callback:function(e,t){this.colors.background(t)}}),e.FE.RegisterCommand("colorChangeSet",{undo:!1,focus:!1,callback:function(e,t){var n=this.popups.get("colors.picker").find('.fr-command[data-cmd="'+e+'"][data-param1="'+t+'"]')
this.colors.changeSet(n,t)}}),e.FE.DefineIcon("colorsBack",{NAME:"arrow-left"}),e.FE.RegisterCommand("colorsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.colors.back()}}),e.FE.RegisterCommand("customColor",{title:"OK",undo:!0,callback:function(){this.colors.customColor()}}),e.FE.DefineIcon("remove",{NAME:"eraser"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.POPUP_TEMPLATES,{emoticons:"[_BUTTONS_][_EMOTICONS_]"}),e.extend(e.FE.DEFAULTS,{emoticonsStep:8,emoticonsSet:[{code:"1f600",desc:"Grinning face"},{code:"1f601",desc:"Grinning face with smiling eyes"},{code:"1f602",desc:"Face with tears of joy"},{code:"1f603",desc:"Smiling face with open mouth"},{code:"1f604",desc:"Smiling face with open mouth and smiling eyes"},{code:"1f605",desc:"Smiling face with open mouth and cold sweat"},{code:"1f606",desc:"Smiling face with open mouth and tightly-closed eyes"},{code:"1f607",desc:"Smiling face with halo"},{code:"1f608",desc:"Smiling face with horns"},{code:"1f609",desc:"Winking face"},{code:"1f60a",desc:"Smiling face with smiling eyes"},{code:"1f60b",desc:"Face savoring delicious food"},{code:"1f60c",desc:"Relieved face"},{code:"1f60d",desc:"Smiling face with heart-shaped eyes"},{code:"1f60e",desc:"Smiling face with sunglasses"},{code:"1f60f",desc:"Smirking face"},{code:"1f610",desc:"Neutral face"},{code:"1f611",desc:"Expressionless face"},{code:"1f612",desc:"Unamused face"},{code:"1f613",desc:"Face with cold sweat"},{code:"1f614",desc:"Pensive face"},{code:"1f615",desc:"Confused face"},{code:"1f616",desc:"Confounded face"},{code:"1f617",desc:"Kissing face"},{code:"1f618",desc:"Face throwing a kiss"},{code:"1f619",desc:"Kissing face with smiling eyes"},{code:"1f61a",desc:"Kissing face with closed eyes"},{code:"1f61b",desc:"Face with stuck out tongue"},{code:"1f61c",desc:"Face with stuck out tongue and winking eye"},{code:"1f61d",desc:"Face with stuck out tongue and tightly-closed eyes"},{code:"1f61e",desc:"Disappointed face"},{code:"1f61f",desc:"Worried face"},{code:"1f620",desc:"Angry face"},{code:"1f621",desc:"Pouting face"},{code:"1f622",desc:"Crying face"},{code:"1f623",desc:"Persevering face"},{code:"1f624",desc:"Face with look of triumph"},{code:"1f625",desc:"Disappointed but relieved face"},{code:"1f626",desc:"Frowning face with open mouth"},{code:"1f627",desc:"Anguished face"},{code:"1f628",desc:"Fearful face"},{code:"1f629",desc:"Weary face"},{code:"1f62a",desc:"Sleepy face"},{code:"1f62b",desc:"Tired face"},{code:"1f62c",desc:"Grimacing face"},{code:"1f62d",desc:"Loudly crying face"},{code:"1f62e",desc:"Face with open mouth"},{code:"1f62f",desc:"Hushed face"},{code:"1f630",desc:"Face with open mouth and cold sweat"},{code:"1f631",desc:"Face screaming in fear"},{code:"1f632",desc:"Astonished face"},{code:"1f633",desc:"Flushed face"},{code:"1f634",desc:"Sleeping face"},{code:"1f635",desc:"Dizzy face"},{code:"1f636",desc:"Face without mouth"},{code:"1f637",desc:"Face with medical mask"}],emoticonsButtons:["emoticonsBack","|"],emoticonsUseImage:!0}),e.FE.PLUGINS.emoticons=function(t){function n(){if(!t.selection.isCollapsed())return!1
var e=t.selection.element(),n=t.selection.endElement()
if(e&&t.node.hasClass(e,"fr-emoticon"))return e
if(n&&t.node.hasClass(n,"fr-emoticon"))return n
var r=t.selection.ranges(0),i=r.startContainer
if(i.nodeType==Node.ELEMENT_NODE&&0<i.childNodes.length&&0<r.startOffset){var o=i.childNodes[r.startOffset-1]
if(t.node.hasClass(o,"fr-emoticon"))return o}return!1}return{_init:function(){var r=function(){for(var e=t.el.querySelectorAll(".fr-emoticon:not(.fr-deletable)"),n=0;n<e.length;n++)e[n].className+=" fr-deletable"}
r(),t.events.on("html.set",r),t.events.on("keydown",function(r){if(t.keys.isCharacter(r.which)&&t.selection.inEditor()){var i=t.selection.ranges(0),o=n()
t.node.hasClass(o,"fr-emoticon-img")&&o&&(0===i.startOffset&&t.selection.element()===o?e(o).before(e.FE.MARKERS+e.FE.INVISIBLE_SPACE):e(o).after(e.FE.INVISIBLE_SPACE+e.FE.MARKERS),t.selection.restore())}}),t.events.on("keyup",function(r){for(var i=t.el.querySelectorAll(".fr-emoticon"),o=0;o<i.length;o++)void 0!==i[o].textContent&&0===i[o].textContent.replace(/\u200B/gi,"").length&&e(i[o]).remove()
if(!(r.which>=e.FE.KEYCODE.ARROW_LEFT&&r.which<=e.FE.KEYCODE.ARROW_DOWN)){var s=n()
t.node.hasClass(s,"fr-emoticon-img")&&(e(s).append(e.FE.MARKERS),t.selection.restore())}})},insert:function(r,i){var o=n(),s=t.selection.ranges(0)
o?(0===s.startOffset&&t.selection.element()===o?e(o).before(e.FE.MARKERS+e.FE.INVISIBLE_SPACE):0<s.startOffset&&t.selection.element()===o&&s.commonAncestorContainer.parentNode.classList.contains("fr-emoticon")&&e(o).after(e.FE.INVISIBLE_SPACE+e.FE.MARKERS),t.selection.restore(),t.html.insert('<span class="fr-emoticon fr-deletable'+(i?" fr-emoticon-img":"")+'"'+(i?' style="background: url('+i+');"':"")+">"+(i?"&nbsp;":r)+"</span>&nbsp;"+e.FE.MARKERS,!0)):t.html.insert('<span class="fr-emoticon fr-deletable'+(i?" fr-emoticon-img":"")+'"'+(i?' style="background: url('+i+');"':"")+">"+(i?"&nbsp;":r)+"</span>&nbsp;",!0)},showEmoticonsPopup:function(){var n=t.$tb.find('.fr-command[data-cmd="emoticons"]'),r=t.popups.get("emoticons")
if(r||(r=function(){var n=""
t.opts.toolbarInline&&0<t.opts.emoticonsButtons.length&&(n='<div class="fr-buttons fr-emoticons-buttons">'+t.button.buildList(t.opts.emoticonsButtons)+"</div>")
var r,i={buttons:n,emoticons:function(){for(var e='<div style="text-align: center">',n=0;n<t.opts.emoticonsSet.length;n++)0!==n&&n%t.opts.emoticonsStep==0&&(e+="<br>"),e+='<span class="fr-command fr-emoticon" tabIndex="-1" data-cmd="insertEmoticon" title="'+t.language.translate(t.opts.emoticonsSet[n].desc)+'" role="button" data-param1="'+t.opts.emoticonsSet[n].code+'">'+(t.opts.emoticonsUseImage?'<img src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/'+t.opts.emoticonsSet[n].code+'.svg"/>':"&#x"+t.opts.emoticonsSet[n].code+";")+'<span class="fr-sr-only">'+t.language.translate(t.opts.emoticonsSet[n].desc)+"&nbsp;&nbsp;&nbsp;</span></span>"
return t.opts.emoticonsUseImage&&(e+='<p style="font-size: 12px; text-align: center; padding: 0 5px;">Emoji free by <a class="fr-link" tabIndex="-1" href="http://emojione.com/" target="_blank" rel="nofollow" role="link" aria-label="Open Emoji One website.">Emoji One</a></p>'),e+"</div>"}()},o=t.popups.create("emoticons",i)
return t.tooltip.bind(o,".fr-emoticon"),r=o,t.events.on("popup.tab",function(n){var i=e(n.currentTarget)
if(!t.popups.isVisible("emoticons")||!i.is("span, a"))return!0
var o,s,a,l=n.which
if(e.FE.KEYCODE.TAB==l){if(i.is("span.fr-emoticon")&&n.shiftKey||i.is("a")&&!n.shiftKey){var u=r.find(".fr-buttons")
o=!t.accessibility.focusToolbar(u,!!n.shiftKey)}if(!1!==o){var c=r.find("span.fr-emoticon:focus:first, span.fr-emoticon:visible:first, a")
i.is("span.fr-emoticon")&&(c=c.not("span.fr-emoticon:not(:focus)")),s=c.index(i),s=n.shiftKey?((s-1)%c.length+c.length)%c.length:(s+1)%c.length,a=c.get(s),t.events.disableBlur(),a.focus(),o=!1}}else if(e.FE.KEYCODE.ARROW_UP==l||e.FE.KEYCODE.ARROW_DOWN==l||e.FE.KEYCODE.ARROW_LEFT==l||e.FE.KEYCODE.ARROW_RIGHT==l){if(i.is("span.fr-emoticon")){var p=i.parent().find("span.fr-emoticon")
s=p.index(i)
var d=t.opts.emoticonsStep,f=Math.floor(p.length/d),h=s%d,m=Math.floor(s/d)*d+h,g=f*d
e.FE.KEYCODE.ARROW_UP==l?m=((m-d)%g+g)%g:e.FE.KEYCODE.ARROW_DOWN==l?m=(m+d)%g:e.FE.KEYCODE.ARROW_LEFT==l?m=((m-1)%g+g)%g:e.FE.KEYCODE.ARROW_RIGHT==l&&(m=(m+1)%g),a=e(p.get(m)),t.events.disableBlur(),a.focus(),o=!1}}else e.FE.KEYCODE.ENTER==l&&(i.is("a")?i[0].click():t.button.exec(i),o=!1)
return!1===o&&(n.preventDefault(),n.stopPropagation()),o},!0),o}()),!r.hasClass("fr-active")){t.popups.refresh("emoticons"),t.popups.setContainer("emoticons",t.$tb)
var i=n.offset().left+n.outerWidth()/2,o=n.offset().top+(t.opts.toolbarBottom?10:n.outerHeight()-10)
t.popups.show("emoticons",i,o,n.outerHeight())}},hideEmoticonsPopup:function(){t.popups.hide("emoticons")},back:function(){t.popups.hide("emoticons"),t.toolbar.showInline()}}},e.FE.DefineIcon("emoticons",{NAME:"smile-o",FA5NAME:"smile"}),e.FE.RegisterCommand("emoticons",{title:"Emoticons",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("emoticons")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("emoticons")):this.emoticons.showEmoticonsPopup()},plugin:"emoticons"}),e.FE.RegisterCommand("insertEmoticon",{callback:function(e,t){this.emoticons.insert("&#x"+t+";",this.opts.emoticonsUseImage?"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/"+t+".svg":null),this.emoticons.hideEmoticonsPopup()}}),e.FE.DefineIcon("emoticonsBack",{NAME:"arrow-left"}),e.FE.RegisterCommand("emoticonsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.emoticons.back()}})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{entities:"&quot;&#39;&iexcl;&cent;&pound;&curren;&yen;&brvbar;&sect;&uml;&copy;&ordf;&laquo;&not;&shy;&reg;&macr;&deg;&plusmn;&sup2;&sup3;&acute;&micro;&para;&middot;&cedil;&sup1;&ordm;&raquo;&frac14;&frac12;&frac34;&iquest;&Agrave;&Aacute;&Acirc;&Atilde;&Auml;&Aring;&AElig;&Ccedil;&Egrave;&Eacute;&Ecirc;&Euml;&Igrave;&Iacute;&Icirc;&Iuml;&ETH;&Ntilde;&Ograve;&Oacute;&Ocirc;&Otilde;&Ouml;&times;&Oslash;&Ugrave;&Uacute;&Ucirc;&Uuml;&Yacute;&THORN;&szlig;&agrave;&aacute;&acirc;&atilde;&auml;&aring;&aelig;&ccedil;&egrave;&eacute;&ecirc;&euml;&igrave;&iacute;&icirc;&iuml;&eth;&ntilde;&ograve;&oacute;&ocirc;&otilde;&ouml;&divide;&oslash;&ugrave;&uacute;&ucirc;&uuml;&yacute;&thorn;&yuml;&OElig;&oelig;&Scaron;&scaron;&Yuml;&fnof;&circ;&tilde;&Alpha;&Beta;&Gamma;&Delta;&Epsilon;&Zeta;&Eta;&Theta;&Iota;&Kappa;&Lambda;&Mu;&Nu;&Xi;&Omicron;&Pi;&Rho;&Sigma;&Tau;&Upsilon;&Phi;&Chi;&Psi;&Omega;&alpha;&beta;&gamma;&delta;&epsilon;&zeta;&eta;&theta;&iota;&kappa;&lambda;&mu;&nu;&xi;&omicron;&pi;&rho;&sigmaf;&sigma;&tau;&upsilon;&phi;&chi;&psi;&omega;&thetasym;&upsih;&piv;&ensp;&emsp;&thinsp;&zwnj;&zwj;&lrm;&rlm;&ndash;&mdash;&lsquo;&rsquo;&sbquo;&ldquo;&rdquo;&bdquo;&dagger;&Dagger;&bull;&hellip;&permil;&prime;&Prime;&lsaquo;&rsaquo;&oline;&frasl;&euro;&image;&weierp;&real;&trade;&alefsym;&larr;&uarr;&rarr;&darr;&harr;&crarr;&lArr;&uArr;&rArr;&dArr;&hArr;&forall;&part;&exist;&empty;&nabla;&isin;&notin;&ni;&prod;&sum;&minus;&lowast;&radic;&prop;&infin;&ang;&and;&or;&cap;&cup;&int;&there4;&sim;&cong;&asymp;&ne;&equiv;&le;&ge;&sub;&sup;&nsub;&sube;&supe;&oplus;&otimes;&perp;&sdot;&lceil;&rceil;&lfloor;&rfloor;&lang;&rang;&loz;&spades;&clubs;&hearts;&diams;"}),e.FE.PLUGINS.entities=function(t){var n,r
function i(e){var t=e.textContent
if(t.match(n)){for(var i="",o=0;o<t.length;o++)r[t[o]]?i+=r[t[o]]:i+=t[o]
e.textContent=i}}function o(e){if(e&&0<=["STYLE","SCRIPT","svg","IFRAME"].indexOf(e.tagName))return!0
for(var n=t.node.contents(e),r=0;r<n.length;r++)n[r].nodeType==Node.TEXT_NODE?i(n[r]):o(n[r])
e.nodeType==Node.TEXT_NODE&&i(e)}function s(e){return 0===e.length?"":t.clean.exec(e,o).replace(/\&amp;/g,"&")}return{_init:function(){t.opts.htmlSimpleAmpersand||(t.opts.entities=t.opts.entities+"&amp;")
var i=e("<div>").html(t.opts.entities).text(),o=t.opts.entities.split(";")
r={},n=""
for(var a=0;a<i.length;a++){var l=i.charAt(a)
r[l]=o[a]+";",n+="\\"+l+(a<i.length-1?"|":"")}n=new RegExp("("+n+")","g"),t.events.on("html.get",s,!0)}}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{fontFamily:{"Arial,Helvetica,sans-serif":"Arial","Georgia,serif":"Georgia","Impact,Charcoal,sans-serif":"Impact","Tahoma,Geneva,sans-serif":"Tahoma","Times New Roman,Times,serif,-webkit-standard":"Times New Roman","Verdana,Geneva,sans-serif":"Verdana"},fontFamilySelection:!1,fontFamilyDefaultSelection:"Font Family"}),e.FE.PLUGINS.fontFamily=function(t){function n(t){var n=t.replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'| /g,"").split(",")
return e.grep(n,function(e){return 0<e.length})}function r(e,t){for(var n=0;n<e.length;n++)for(var r=0;r<t.length;r++)if(e[n].toLowerCase()==t[r].toLowerCase())return[n,r]
return null}function i(){var i=n(e(t.selection.element()).css("font-family")),o=[]
for(var s in t.opts.fontFamily)if(t.opts.fontFamily.hasOwnProperty(s)){var a=r(i,n(s))
a&&o.push([s,a])}return 0===o.length?null:(o.sort(function(e,t){var n=e[1][0]-t[1][0]
return 0===n?e[1][1]-t[1][1]:n}),o[0][0])}return{apply:function(e){t.format.applyStyle("font-family",e)},refreshOnShow:function(e,t){t.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),t.find('.fr-command[data-param1="'+i()+'"]').addClass("fr-active").attr("aria-selected",!0)
var n=t.find(".fr-dropdown-list"),r=t.find(".fr-active").parent()
r.length?n.parent().scrollTop(r.offset().top-n.offset().top-(n.parent().outerHeight()/2-r.outerHeight()/2)):n.parent().scrollTop(0)},refresh:function(n){if(t.opts.fontFamilySelection){var r=e(t.selection.element()).css("font-family").replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'|/g,"").split(",")
n.find("> span").text(t.opts.fontFamily[i()]||r[0]||t.language.translate(t.opts.fontFamilyDefaultSelection))}}}},e.FE.RegisterCommand("fontFamily",{type:"dropdown",displaySelection:function(e){return e.opts.fontFamilySelection},defaultSelection:function(e){return e.opts.fontFamilyDefaultSelection},displaySelectionWidth:120,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.fontFamily
for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontFamily" data-param1="'+n+'" style="font-family: '+n+'" title="'+t[n]+'">'+t[n]+"</a></li>")
return e+"</ul>"},title:"Font Family",callback:function(e,t){this.fontFamily.apply(t)},refresh:function(e){this.fontFamily.refresh(e)},refreshOnShow:function(e,t){this.fontFamily.refreshOnShow(e,t)},plugin:"fontFamily"}),e.FE.DefineIcon("fontFamily",{NAME:"font"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{fontSize:["8","9","10","11","12","14","18","24","30","36","48","60","72","96"],fontSizeSelection:!1,fontSizeDefaultSelection:"12",fontSizeUnit:"px"}),e.FE.PLUGINS.fontSize=function(t){return{apply:function(e){t.format.applyStyle("font-size",e)},refreshOnShow:function(n,r){var i=e(t.selection.element()).css("font-size")
r.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),r.find('.fr-command[data-param1="'+i+'"]').addClass("fr-active").attr("aria-selected",!0)
var o=r.find(".fr-dropdown-list"),s=r.find(".fr-active").parent()
s.length?o.parent().scrollTop(s.offset().top-o.offset().top-(o.parent().outerHeight()/2-s.outerHeight()/2)):o.parent().scrollTop(0)},refresh:function(n){if(t.opts.fontSizeSelection){var r=t.helpers.getPX(e(t.selection.element()).css("font-size"))
n.find("> span").text(r)}}}},e.FE.RegisterCommand("fontSize",{type:"dropdown",title:"Font Size",displaySelection:function(e){return e.opts.fontSizeSelection},displaySelectionWidth:30,defaultSelection:function(e){return e.opts.fontSizeDefaultSelection},html:function(){for(var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.fontSize,n=0;n<t.length;n++){var r=t[n]
e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontSize" data-param1="'+r+this.opts.fontSizeUnit+'" title="'+r+'">'+r+"</a></li>"}return e+"</ul>"},callback:function(e,t){this.fontSize.apply(t)},refresh:function(e){this.fontSize.refresh(e)},refreshOnShow:function(e,t){this.fontSize.refreshOnShow(e,t)},plugin:"fontSize"}),e.FE.DefineIcon("fontSize",{NAME:"text-height"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{lineBreakerTags:["table","hr","form","dl","span.fr-video",".fr-embedly"],lineBreakerOffset:15,lineBreakerHorizontalOffset:10}),e.FE.PLUGINS.lineBreaker=function(t){var n,r,i
function o(r,i){var o,s,a,l,u,c,p,d
if(null==r)u=(l=i.parent()).offset().top,o=(p=i.offset().top)-Math.min((p-u)/2,t.opts.lineBreakerOffset),a=l.outerWidth(),s=l.offset().left
else if(null==i)(c=(l=r.parent()).offset().top+l.outerHeight())<(d=r.offset().top+r.outerHeight())&&(c=(l=e(l).parent()).offset().top+l.outerHeight()),o=d+Math.min(Math.abs(c-d)/2,t.opts.lineBreakerOffset),a=l.outerWidth(),s=l.offset().left
else{l=r.parent()
var f=r.offset().top+r.height(),h=i.offset().top
if(h<f)return!1
o=(f+h)/2,a=l.outerWidth(),s=l.offset().left}t.opts.iframe&&(s+=t.$iframe.offset().left-t.helpers.scrollLeft(),o+=t.$iframe.offset().top-t.helpers.scrollTop()),t.$box.append(n),n.css("top",o-t.win.pageYOffset),n.css("left",s-t.win.pageXOffset),n.css("width",a),n.data("tag1",r),n.data("tag2",i),n.addClass("fr-visible").data("instance",t)}function s(n){if(n){var r=e(n)
if(0===t.$el.find(r).length)return null
if(n.nodeType!=Node.TEXT_NODE&&r.is(t.opts.lineBreakerTags.join(",")))return r
if(0<r.parents(t.opts.lineBreakerTags.join(",")).length)return n=r.parents(t.opts.lineBreakerTags.join(",")).get(0),0!==t.$el.find(n).length&&e(n).is(t.opts.lineBreakerTags.join(","))?e(n):null}return null}function a(n,r){var i=t.doc.elementFromPoint(n,r)
return i&&!e(i).closest(".fr-line-breaker").length&&!t.node.isElement(i)&&i!=t.$wp.get(0)&&function(e){if(void 0!==e.inFroalaWrapper)return e.inFroalaWrapper
for(var n=e;e.parentNode&&e.parentNode!==t.$wp.get(0);)e=e.parentNode
return n.inFroalaWrapper=e.parentNode==t.$wp.get(0),n.inFroalaWrapper}(i)?i:null}function l(e,n,r){for(var i=r,o=null;i<=t.opts.lineBreakerOffset&&!o;)(o=a(e,n-i))||(o=a(e,n+i)),i+=r
return o}function u(e,n,r){for(var i=null,o=100;!i&&e>t.$box.offset().left&&e<t.$box.offset().left+t.$box.outerWidth()&&0<o;)(i=a(e,n))||(i=l(e,n,5)),"left"==r?e-=t.opts.lineBreakerHorizontalOffset:e+=t.opts.lineBreakerHorizontalOffset,o-=t.opts.lineBreakerHorizontalOffset
return i}function c(e){var r=i=null,a=null,c=t.doc.elementFromPoint(e.pageX-t.win.pageXOffset,e.pageY-t.win.pageYOffset)
c&&("HTML"==c.tagName||"BODY"==c.tagName||t.node.isElement(c)||0<=(c.getAttribute("class")||"").indexOf("fr-line-breaker"))?((a=l(e.pageX-t.win.pageXOffset,e.pageY-t.win.pageYOffset,1))||(a=u(e.pageX-t.win.pageXOffset-t.opts.lineBreakerHorizontalOffset,e.pageY-t.win.pageYOffset,"left")),a||(a=u(e.pageX-t.win.pageXOffset+t.opts.lineBreakerHorizontalOffset,e.pageY-t.win.pageYOffset,"right")),r=s(a)):r=s(c),r?function(e,r){var i,a,l=e.offset().top,u=e.offset().top+e.outerHeight()
if(Math.abs(u-r)<=t.opts.lineBreakerOffset||Math.abs(r-l)<=t.opts.lineBreakerOffset)if(Math.abs(u-r)<Math.abs(r-l)){for(var c=(a=e.get(0)).nextSibling;c&&c.nodeType==Node.TEXT_NODE&&0===c.textContent.length;)c=c.nextSibling
if(!c)return o(e,null)
if(i=s(c))return o(e,i)}else{if(!(a=e.get(0)).previousSibling)return o(null,e)
if(i=s(a.previousSibling))return o(i,e)}n.removeClass("fr-visible").removeData("instance")}(r,e.pageY):t.core.sameInstance(n)&&n.removeClass("fr-visible").removeData("instance")}function p(e){return!(n.hasClass("fr-visible")&&!t.core.sameInstance(n))&&(t.popups.areVisible()||t.el.querySelector(".fr-selected-cell")?(n.removeClass("fr-visible"),!0):void(!1!==r||t.edit.isDisabled()||(i&&clearTimeout(i),i=setTimeout(c,30,e))))}function d(){i&&clearTimeout(i),n.hasClass("fr-visible")&&n.removeClass("fr-visible").removeData("instance")}function f(){r=!0,d()}function h(){r=!1}function m(r){r.preventDefault()
var i=n.data("instance")||t
n.removeClass("fr-visible").removeData("instance")
var o=n.data("tag1"),s=n.data("tag2"),a=t.html.defaultTag()
null==o?a&&"TD"!=s.parent().get(0).tagName&&0===s.parents(a).length?s.before("<"+a+">"+e.FE.MARKERS+"<br></"+a+">"):s.before(e.FE.MARKERS+"<br>"):a&&"TD"!=o.parent().get(0).tagName&&0===o.parents(a).length?o.after("<"+a+">"+e.FE.MARKERS+"<br></"+a+">"):o.after(e.FE.MARKERS+"<br>"),i.selection.restore()}return{_init:function(){if(!t.$wp)return!1
t.shared.$line_breaker||(t.shared.$line_breaker=e('<div class="fr-line-breaker"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+t.language.translate("Break")+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="21" y="11" width="2" height="8"/><rect x="14" y="17" width="7" height="2"/><path d="M14.000,14.000 L14.000,22.013 L9.000,18.031 L14.000,14.000 Z"/></svg></a></div>')),n=t.shared.$line_breaker,t.events.on("shared.destroy",function(){n.html("").removeData().remove(),n=null},!0),t.events.on("destroy",function(){n.removeData("instance").removeClass("fr-visible").appendTo("body:first"),clearTimeout(i)},!0),t.events.$on(n,"mousemove",function(e){e.stopPropagation()},!0),t.events.bindClick(n,"a",m),r=!1,t.events.$on(t.$win,"mousemove",p),t.events.$on(e(t.win),"scroll",d),t.events.on("popups.show.table.edit",d),t.events.on("commands.after",d),t.events.$on(e(t.win),"mousedown",f),t.events.$on(e(t.win),"mouseup",h)}}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.POPUP_TEMPLATES,{"link.edit":"[_BUTTONS_]","link.insert":"[_BUTTONS_][_INPUT_LAYER_]"}),e.extend(e.FE.DEFAULTS,{linkEditButtons:["linkOpen","linkStyle","linkEdit","linkRemove"],linkInsertButtons:["linkBack","|","linkList"],linkAttributes:{},linkAutoPrefix:"http://",linkStyles:{"fr-green":"Green","fr-strong":"Thick"},linkMultipleStyles:!0,linkConvertEmailAddress:!0,linkAlwaysBlank:!1,linkAlwaysNoFollow:!1,linkNoOpener:!0,linkNoReferrer:!0,linkList:[{text:"Froala",href:"https://froala.com",target:"_blank"},{text:"Google",href:"https://google.com",target:"_blank"},{displayText:"Facebook",href:"https://facebook.com"}],linkText:!0}),e.FE.PLUGINS.link=function(t){function n(){var n=t.image?t.image.get():null
if(!n&&t.$wp){var r=t.selection.ranges(0).commonAncestorContainer
try{r&&(r.contains&&r.contains(t.el)||!t.el.contains(r)||t.el==r)&&(r=null)}catch(e){r=null}if(r&&"A"===r.tagName)return r
var i=t.selection.element(),o=t.selection.endElement()
"A"==i.tagName||t.node.isElement(i)||(i=e(i).parentsUntil(t.$el,"a:first").get(0)),"A"==o.tagName||t.node.isElement(o)||(o=e(o).parentsUntil(t.$el,"a:first").get(0))
try{o&&(o.contains&&o.contains(t.el)||!t.el.contains(o)||t.el==o)&&(o=null)}catch(e){o=null}try{i&&(i.contains&&i.contains(t.el)||!t.el.contains(i)||t.el==i)&&(i=null)}catch(e){i=null}return o&&o==i&&"A"==o.tagName?(t.browser.msie||t.helpers.isMobile())&&(t.selection.info(i).atEnd||t.selection.info(i).atStart)?null:i:null}return"A"==t.el.tagName?t.el:n&&n.get(0).parentNode&&"A"==n.get(0).parentNode.tagName?n.get(0).parentNode:void 0}function r(){var e,n,r,i,o=t.image?t.image.get():null,s=[]
if(o)"A"==o.get(0).parentNode.tagName&&s.push(o.get(0).parentNode)
else if(t.win.getSelection){var a=t.win.getSelection()
if(a.getRangeAt&&a.rangeCount){i=t.doc.createRange()
for(var l=0;l<a.rangeCount;++l)if((n=(e=a.getRangeAt(l)).commonAncestorContainer)&&1!=n.nodeType&&(n=n.parentNode),n&&"a"==n.nodeName.toLowerCase())s.push(n)
else{r=n.getElementsByTagName("a")
for(var u=0;u<r.length;++u)i.selectNodeContents(r[u]),i.compareBoundaryPoints(e.END_TO_START,e)<1&&-1<i.compareBoundaryPoints(e.START_TO_END,e)&&s.push(r[u])}}}else if(t.doc.selection&&"Control"!=t.doc.selection.type)if("a"==(n=(e=t.doc.selection.createRange()).parentElement()).nodeName.toLowerCase())s.push(n)
else{r=n.getElementsByTagName("a"),i=t.doc.body.createTextRange()
for(var c=0;c<r.length;++c)i.moveToElementText(r[c]),-1<i.compareEndPoints("StartToEnd",e)&&i.compareEndPoints("EndToStart",e)<1&&s.push(r[c])}return s}function i(r){if(t.core.hasFocus()){if(o(),r&&"keyup"===r.type&&(r.altKey||r.which==e.FE.KEYCODE.ALT))return!0
setTimeout(function(){if(!r||r&&(1==r.which||"mouseup"!=r.type)){var i=n(),o=t.image?t.image.get():null
if(i&&!o){if(t.image){var s=t.node.contents(i)
if(1==s.length&&"IMG"==s[0].tagName){var a=t.selection.ranges(0)
return 0===a.startOffset&&0===a.endOffset?e(i).before(e.FE.MARKERS):e(i).after(e.FE.MARKERS),t.selection.restore(),!1}}r&&r.stopPropagation(),function r(i){var o=t.popups.get("link.edit")
o||(o=function(){var e=""
1<=t.opts.linkEditButtons.length&&("A"==t.el.tagName&&0<=t.opts.linkEditButtons.indexOf("linkRemove")&&t.opts.linkEditButtons.splice(t.opts.linkEditButtons.indexOf("linkRemove"),1),e='<div class="fr-buttons">'+t.button.buildList(t.opts.linkEditButtons)+"</div>")
var i={buttons:e},o=t.popups.create("link.edit",i)
return t.$wp&&t.events.$on(t.$wp,"scroll.link-edit",function(){n()&&t.popups.isVisible("link.edit")&&r(n())}),o}())
var s=e(i)
t.popups.isVisible("link.edit")||t.popups.refresh("link.edit"),t.popups.setContainer("link.edit",t.$sc)
var a=s.offset().left+e(i).outerWidth()/2,l=s.offset().top+s.outerHeight()
t.popups.show("link.edit",a,l,s.outerHeight())}(i)}}},t.helpers.isIOS()?100:0)}}function o(){t.popups.hide("link.edit")}function s(){}function a(){var r=t.popups.get("link.insert"),i=n()
if(i){var o,s,a=e(i),l=r.find('input.fr-link-attr[type="text"]'),u=r.find('input.fr-link-attr[type="checkbox"]')
for(o=0;o<l.length;o++)(s=e(l[o])).val(a.attr(s.attr("name")||""))
for(u.prop("checked",!1),o=0;o<u.length;o++)s=e(u[o]),a.attr(s.attr("name"))==s.data("checked")&&s.prop("checked",!0)
r.find('input.fr-link-attr[type="text"][name="text"]').val(a.text())}else r.find('input.fr-link-attr[type="text"]').val(""),r.find('input.fr-link-attr[type="checkbox"]').prop("checked",!1),r.find('input.fr-link-attr[type="text"][name="text"]').val(t.selection.text())
r.find("input.fr-link-attr").trigger("change"),t.image&&t.image.get()?r.find('.fr-link-attr[name="text"]').parent().hide():r.find('.fr-link-attr[name="text"]').parent().show()}function l(e){if(e)return t.popups.onRefresh("link.insert",a),t.popups.onHide("link.insert",s),!0
var n=""
1<=t.opts.linkInsertButtons.length&&(n='<div class="fr-buttons">'+t.button.buildList(t.opts.linkInsertButtons)+"</div>")
var r="",i=0
for(var o in r='<div class="fr-link-insert-layer fr-layer fr-active" id="fr-link-insert-layer-'+t.id+'">',r+='<div class="fr-input-line"><input id="fr-link-insert-layer-url-'+t.id+'" name="href" type="text" class="fr-link-attr" placeholder="'+t.language.translate("URL")+'" tabIndex="'+ ++i+'"></div>',t.opts.linkText&&(r+='<div class="fr-input-line"><input id="fr-link-insert-layer-text-'+t.id+'" name="text" type="text" class="fr-link-attr" placeholder="'+t.language.translate("Text")+'" tabIndex="'+ ++i+'"></div>'),t.opts.linkAttributes)if(t.opts.linkAttributes.hasOwnProperty(o)){var l=t.opts.linkAttributes[o]
r+='<div class="fr-input-line"><input name="'+o+'" type="text" class="fr-link-attr" placeholder="'+t.language.translate(l)+'" tabIndex="'+ ++i+'"></div>'}t.opts.linkAlwaysBlank||(r+='<div class="fr-checkbox-line"><span class="fr-checkbox"><input name="target" class="fr-link-attr" data-checked="_blank" type="checkbox" id="fr-link-target-'+t.id+'" tabIndex="'+ ++i+'"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg></span></span><label for="fr-link-target-'+t.id+'">'+t.language.translate("Open in new tab")+"</label></div>")
var u={buttons:n,input_layer:r+='<div class="fr-action-buttons"><button class="fr-command fr-submit" role="button" data-cmd="linkInsert" href="#" tabIndex="'+ ++i+'" type="button">'+t.language.translate("Insert")+"</button></div></div>"},d=t.popups.create("link.insert",u)
return t.$wp&&t.events.$on(t.$wp,"scroll.link-insert",function(){(t.image?t.image.get():null)&&t.popups.isVisible("link.insert")&&p(),t.popups.isVisible("link.insert")&&c()}),d}function u(o,s,a){if(void 0===a&&(a={}),!1===t.events.trigger("link.beforeInsert",[o,s,a]))return!1
var l=t.image?t.image.get():null
l||"A"==t.el.tagName?"A"==t.el.tagName&&t.$el.focus():(t.selection.restore(),t.popups.hide("link.insert"))
var u=o
if(t.opts.linkConvertEmailAddress&&t.helpers.isEmail(o)&&!/^mailto:.*/i.test(o)&&(o="mailto:"+o),""===t.opts.linkAutoPrefix||new RegExp("^("+e.FE.LinkProtocols.join("|")+"):.","i").test(o)||/^data:image.*/i.test(o)||/^(https?:|ftps?:|file:|)\/\//i.test(o)||/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(o)||["/","{","[","#","(","."].indexOf((o||"")[0])<0&&(o=t.opts.linkAutoPrefix+t.helpers.sanitizeURL(o)),o=t.helpers.sanitizeURL(o),t.opts.linkAlwaysBlank&&(a.target="_blank"),t.opts.linkAlwaysNoFollow&&(a.rel="nofollow"),"_blank"==a.target?(t.opts.linkNoOpener&&(a.rel?a.rel+=" noopener":a.rel="noopener"),t.opts.linkNoReferrer&&(a.rel?a.rel+=" noreferrer":a.rel="noreferrer")):null==a.target&&(a.rel?a.rel=a.rel.replace(/noopener/,"").replace(/noreferrer/,""):a.rel=null),s=s||"",o===t.opts.linkAutoPrefix)return t.popups.get("link.insert").find('input[name="href"]').addClass("fr-error"),t.events.trigger("link.bad",[u]),!1
var c,p=n()
if(p){if((c=e(p)).attr("href",o),0<s.length&&c.text()!=s&&!l){for(var d=c.get(0);1===d.childNodes.length&&d.childNodes[0].nodeType==Node.ELEMENT_NODE;)d=d.childNodes[0]
e(d).text(s)}l||c.prepend(e.FE.START_MARKER).append(e.FE.END_MARKER),c.attr(a),l||t.selection.restore()}else{l?l.wrap('<a href="'+o+'"></a>'):(t.format.remove("a"),t.selection.isCollapsed()?(s=0===s.length?u:s,t.html.insert('<a href="'+o+'">'+e.FE.START_MARKER+s.replace(/&/g,"&amp;")+e.FE.END_MARKER+"</a>"),t.selection.restore()):0<s.length&&s!=t.selection.text().replace(/\n/g,"")?(t.selection.remove(),t.html.insert('<a href="'+o+'">'+e.FE.START_MARKER+s.replace(/&/g,"&amp;")+e.FE.END_MARKER+"</a>"),t.selection.restore()):(function(){if(!t.selection.isCollapsed()){t.selection.save()
for(var n=t.$el.find(".fr-marker").addClass("fr-unprocessed").toArray();n.length;){var r=e(n.pop())
r.removeClass("fr-unprocessed")
var i=t.node.deepestParent(r.get(0))
if(i){for(var o=r.get(0),s="",a="";o=o.parentNode,t.node.isBlock(o)||(s+=t.node.closeTagString(o),a=t.node.openTagString(o)+a),o!=i;);var l=t.node.openTagString(r.get(0))+r.html()+t.node.closeTagString(r.get(0))
r.replaceWith('<span id="fr-break"></span>')
var u=i.outerHTML
u=u.replace(/<span id="fr-break"><\/span>/g,s+l+a),i.outerHTML=u}n=t.$el.find(".fr-marker.fr-unprocessed").toArray()}t.html.cleanEmptyTags(),t.selection.restore()}}(),t.format.apply("a",{href:o})))
for(var f=r(),h=0;h<f.length;h++)(c=e(f[h])).attr(a),c.removeAttr("_moz_dirty")
1==f.length&&t.$wp&&!l&&(e(f[0]).prepend(e.FE.START_MARKER).append(e.FE.END_MARKER),t.selection.restore())}if(l){var m=t.popups.get("link.insert")
m&&m.find("input:focus").blur(),t.image.edit(l)}else i()}function c(){o()
var r=n()
if(r){var i=t.popups.get("link.insert")
i||(i=l()),t.popups.isVisible("link.insert")||(t.popups.refresh("link.insert"),t.selection.save(),t.helpers.isMobile()&&(t.events.disableBlur(),t.$el.blur(),t.events.enableBlur())),t.popups.setContainer("link.insert",t.$sc)
var s=(t.image?t.image.get():null)||e(r),a=s.offset().left+s.outerWidth()/2,u=s.offset().top+s.outerHeight()
t.popups.show("link.insert",a,u,s.outerHeight())}}function p(){var e=t.image?t.image.getEl():null
if(e){var n=t.popups.get("link.insert")
t.image.hasCaption()&&(e=e.find(".fr-img-wrap")),n||(n=l()),a(),t.popups.setContainer("link.insert",t.$sc)
var r=e.offset().left+e.outerWidth()/2,i=e.offset().top+e.outerHeight()
t.popups.show("link.insert",r,i,e.outerHeight())}}return{_init:function(){t.events.on("keyup",function(t){t.which!=e.FE.KEYCODE.ESC&&i(t)}),t.events.on("window.mouseup",i),t.events.$on(t.$el,"click","a",function(e){t.edit.isDisabled()&&e.preventDefault()}),t.helpers.isMobile()&&t.events.$on(t.$doc,"selectionchange",i),l(!0),"A"==t.el.tagName&&t.$el.addClass("fr-view"),t.events.on("toolbar.esc",function(){if(t.popups.isVisible("link.edit"))return t.events.disableBlur(),t.events.focus(),!1},!0)},remove:function(){var r=n(),i=t.image?t.image.get():null
if(!1===t.events.trigger("link.beforeRemove",[r]))return!1
i&&r?(i.unwrap(),t.image.edit(i)):r&&(t.selection.save(),e(r).replaceWith(e(r).html()),t.selection.restore(),o())},showInsertPopup:function(){var e=t.$tb.find('.fr-command[data-cmd="insertLink"]'),n=t.popups.get("link.insert")
if(n||(n=l()),!n.hasClass("fr-active"))if(t.popups.refresh("link.insert"),t.popups.setContainer("link.insert",t.$tb||t.$sc),e.is(":visible")){var r=e.offset().left+e.outerWidth()/2,i=e.offset().top+(t.opts.toolbarBottom?10:e.outerHeight()-10)
t.popups.show("link.insert",r,i,e.outerHeight())}else t.position.forSelection(n),t.popups.show("link.insert")},usePredefined:function(n){var r,i,o=t.opts.linkList[n],s=t.popups.get("link.insert"),a=s.find('input.fr-link-attr[type="text"]'),l=s.find('input.fr-link-attr[type="checkbox"]')
for(i=0;i<a.length;i++)o[(r=e(a[i])).attr("name")]?r.val(o[r.attr("name")]):"text"!=r.attr("name")&&r.val("")
for(i=0;i<l.length;i++)(r=e(l[i])).prop("checked",r.data("checked")==o[r.attr("name")])
t.accessibility.focusPopup(s)},insertCallback:function(){var n,r,i=t.popups.get("link.insert"),o=i.find('input.fr-link-attr[type="text"]'),s=i.find('input.fr-link-attr[type="checkbox"]'),a=(o.filter('[name="href"]').val()||"").trim(),l=o.filter('[name="text"]').val(),c={}
for(r=0;r<o.length;r++)n=e(o[r]),["href","text"].indexOf(n.attr("name"))<0&&(c[n.attr("name")]=n.val())
for(r=0;r<s.length;r++)(n=e(s[r])).is(":checked")?c[n.attr("name")]=n.data("checked"):c[n.attr("name")]=n.data("unchecked")||null
var p=t.helpers.scrollTop()
u(a,l,c),e(t.o_win).scrollTop(p)},insert:u,update:c,get:n,allSelected:r,back:function(){t.image&&t.image.get()?t.image.back():(t.events.disableBlur(),t.selection.restore(),t.events.enableBlur(),n()&&t.$wp?(t.selection.restore(),o(),i()):"A"==t.el.tagName?(t.$el.focus(),i()):(t.popups.hide("link.insert"),t.toolbar.showInline()))},imageLink:p,applyStyle:function(r,o,s){void 0===s&&(s=t.opts.linkMultipleStyles),void 0===o&&(o=t.opts.linkStyles)
var a=n()
if(!a)return!1
if(!s){var l=Object.keys(o)
l.splice(l.indexOf(r),1),e(a).removeClass(l.join(" "))}e(a).toggleClass(r),i()}}},e.FE.DefineIcon("insertLink",{NAME:"link"}),e.FE.RegisterShortcut(e.FE.KEYCODE.K,"insertLink",null,"K"),e.FE.RegisterCommand("insertLink",{title:"Insert Link",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("link.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("link.insert")):this.link.showInsertPopup()},plugin:"link"}),e.FE.DefineIcon("linkOpen",{NAME:"external-link",FA5NAME:"external-link-alt"}),e.FE.RegisterCommand("linkOpen",{title:"Open Link",undo:!1,refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},callback:function(){var e=this.link.get()
e&&(this.o_win.open(e.href,"_blank","noopener"),this.popups.hide("link.edit"))},plugin:"link"}),e.FE.DefineIcon("linkEdit",{NAME:"edit"}),e.FE.RegisterCommand("linkEdit",{title:"Edit Link",undo:!1,refreshAfterCallback:!1,popup:!0,callback:function(){this.link.update()},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),e.FE.DefineIcon("linkRemove",{NAME:"unlink"}),e.FE.RegisterCommand("linkRemove",{title:"Unlink",callback:function(){this.link.remove()},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),e.FE.DefineIcon("linkBack",{NAME:"arrow-left"}),e.FE.RegisterCommand("linkBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.link.back()},refresh:function(e){var t=this.link.get()&&this.doc.hasFocus()
this.image&&this.image.get()||t||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))},plugin:"link"}),e.FE.DefineIcon("linkList",{NAME:"search"}),e.FE.RegisterCommand("linkList",{title:"Choose Link",type:"dropdown",focus:!1,undo:!1,refreshAfterCallback:!1,html:function(){for(var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.linkList,n=0;n<t.length;n++)e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkList" data-param1="'+n+'">'+(t[n].displayText||t[n].text)+"</a></li>"
return e+"</ul>"},callback:function(e,t){this.link.usePredefined(t)},plugin:"link"}),e.FE.RegisterCommand("linkInsert",{focus:!1,refreshAfterCallback:!1,callback:function(){this.link.insertCallback()},refresh:function(e){this.link.get()?e.text(this.language.translate("Update")):e.text(this.language.translate("Insert"))},plugin:"link"}),e.FE.DefineIcon("imageLink",{NAME:"link"}),e.FE.RegisterCommand("imageLink",{title:"Insert Link",undo:!1,focus:!1,popup:!0,callback:function(){this.link.imageLink()},refresh:function(e){var t
this.link.get()?((t=e.prev()).hasClass("fr-separator")&&t.removeClass("fr-hidden"),e.addClass("fr-hidden")):((t=e.prev()).hasClass("fr-separator")&&t.addClass("fr-hidden"),e.removeClass("fr-hidden"))},plugin:"link"}),e.FE.DefineIcon("linkStyle",{NAME:"magic"}),e.FE.RegisterCommand("linkStyle",{title:"Style",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.linkStyles
for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkStyle" data-param1="'+n+'">'+this.language.translate(t[n])+"</a></li>")
return e+"</ul>"},callback:function(e,t){this.link.applyStyle(t)},refreshOnShow:function(t,n){var r=this.link.get()
if(r){var i=e(r)
n.find(".fr-command").each(function(){var t=e(this).data("param1"),n=i.hasClass(t)
e(this).toggleClass("fr-active",n).attr("aria-selected",n)})}},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.FE.PLUGINS.lists=function(t){function n(e){return'<span class="fr-open-'+e.toLowerCase()+'"></span>'}function r(e){return'<span class="fr-close-'+e.toLowerCase()+'"></span>'}function i(i){var o,s
for(o=i.length-1;0<=o;o--)for(s=o-1;0<=s;s--)if(e(i[s]).find(i[o]).length||i[s]==i[o]){i.splice(o,1)
break}var a=[]
for(o=0;o<i.length;o++){var l=e(i[o]),u=i[o].parentNode,c=l.attr("class")
if(l.before(r(u.tagName)),"LI"==u.parentNode.tagName)l.before(r("LI")),l.after(n("LI"))
else{var p=""
c&&(p+=' class="'+c+'"')
var d="rtl"==t.opts.direction||"rtl"==l.css("direction")?"margin-right":"margin-left"
t.helpers.getPX(e(u).css(d))&&0<=(e(u).attr("style")||"").indexOf(d+":")&&(p+=' style="'+d+":"+t.helpers.getPX(e(u).css(d))+'px;"'),t.html.defaultTag()&&0===l.find(t.html.blockTagsQuery()).length&&l.wrapInner("<"+t.html.defaultTag()+p+"></"+t.html.defaultTag()+">"),t.node.isEmpty(l.get(0),!0)||0!==l.find(t.html.blockTagsQuery()).length||l.append("<br>"),l.append(n("LI")),l.prepend(r("LI"))}l.after(n(u.tagName)),"LI"==u.parentNode.tagName&&(u=u.parentNode.parentNode),a.indexOf(u)<0&&a.push(u)}for(o=0;o<a.length;o++){var f=e(a[o]),h=f.html()
h=(h=h.replace(/<span class="fr-close-([a-z]*)"><\/span>/g,"</$1>")).replace(/<span class="fr-open-([a-z]*)"><\/span>/g,"<$1>"),f.replaceWith(t.node.openTagString(f.get(0))+h+t.node.closeTagString(f.get(0)))}t.$el.find("li:empty").remove(),t.$el.find("ul:empty, ol:empty").remove(),t.clean.lists(),t.html.wrap()}function o(n){t.selection.save()
for(var r=0;r<n.length;r++){var i=n[r].previousSibling
if(i){var o=e(n[r]).find("> ul, > ol").last().get(0)
if(o){for(var s=e("<li>").prependTo(e(o)),a=t.node.contents(n[r])[0];a&&!t.node.isList(a);){var l=a.nextSibling
s.append(a),a=l}e(i).append(e(o)),e(n[r]).remove()}else{var u=e(i).find("> ul, > ol").last().get(0)
if(u)e(u).append(e(n[r]))
else{var c=e("<"+n[r].parentNode.tagName+">")
e(i).append(c),c.append(e(n[r]))}}}}t.clean.lists(),t.selection.restore()}function s(e){t.selection.save(),i(e),t.selection.restore()}function a(e){if("indent"==e||"outdent"==e){for(var n=!1,r=t.selection.blocks(),i=[],a=0;a<r.length;a++)"LI"==r[a].tagName?(n=!0,i.push(r[a])):"LI"==r[a].parentNode.tagName&&(n=!0,i.push(r[a].parentNode))
n&&("indent"==e?o(i):s(i))}}return{_init:function(){t.events.on("commands.after",a),t.events.on("keydown",function(n){if(n.which==e.FE.KEYCODE.TAB){for(var r=t.selection.blocks(),i=[],a=0;a<r.length;a++)"LI"==r[a].tagName?i.push(r[a]):"LI"==r[a].parentNode.tagName&&i.push(r[a].parentNode)
if(1<i.length||i.length&&(t.selection.info(i[0]).atStart||t.node.isEmpty(i[0])))return n.preventDefault(),n.stopPropagation(),n.shiftKey?s(i):o(i),!1}},!0)},format:function(n){t.selection.save(),t.html.wrap(!0,!0,!0,!0),t.selection.restore()
for(var r=t.selection.blocks(),o=0;o<r.length;o++)"LI"!=r[o].tagName&&"LI"==r[o].parentNode.tagName&&(r[o]=r[o].parentNode)
t.selection.save(),function(e,t){for(var n=!0,r=0;r<e.length;r++){if("LI"!=e[r].tagName)return!1
e[r].parentNode.tagName!=t&&(n=!1)}return n}(r,n)?i(r):function(n,r){!function(n,r){for(var i=[],o=0;o<n.length;o++){var s=n[o].parentNode
"LI"==n[o].tagName&&s.tagName!=r&&i.indexOf(s)<0&&i.push(s)}for(o=i.length-1;0<=o;o--){var a=e(i[o])
a.replaceWith("<"+r.toLowerCase()+" "+t.node.attributes(a.get(0))+">"+a.html()+"</"+r.toLowerCase()+">")}}(n,r)
var i,o=t.html.defaultTag(),s=null
n.length&&(i="rtl"==t.opts.direction||"rtl"==e(n[0]).css("direction")?"margin-right":"margin-left")
for(var a=0;a<n.length;a++)if("LI"!=n[a].tagName){var l=t.helpers.getPX(e(n[a]).css(i))||0;(n[a].style.marginLeft=null)===s&&(s=l)
var u=0<s?"<"+r+' style="'+i+": "+s+'px;">':"<"+r+">",c="</"+r+">"
for(l-=s;0<l/t.opts.indentMargin;)u+="<"+r+">",c+=c,l-=t.opts.indentMargin
o&&n[a].tagName.toLowerCase()==o?e(n[a]).replaceWith(u+"<li"+t.node.attributes(n[a])+">"+e(n[a]).html()+"</li>"+c):e(n[a]).wrap(u+"<li></li>"+c)}t.clean.lists()}(r,n),t.html.unwrap(),t.selection.restore()},refresh:function(n,r){var i=e(t.selection.element())
if(i.get(0)!=t.el){var o=i.get(0);(o="LI"!=o.tagName&&o.firstElementChild&&"LI"!=o.firstElementChild.tagName?i.parents("li").get(0):"LI"==o.tagName||o.firstElementChild?o.firstElementChild&&"LI"==o.firstElementChild.tagName?i.get(0).firstChild:i.get(0):i.parents("li").get(0))&&o.parentNode.tagName==r&&t.el.contains(o.parentNode)&&n.addClass("fr-active")}}}},e.FE.RegisterCommand("formatUL",{title:"Unordered List",refresh:function(e){this.lists.refresh(e,"UL")},callback:function(){this.lists.format("UL")},plugin:"lists"}),e.FE.RegisterCommand("formatOL",{title:"Ordered List",refresh:function(e){this.lists.refresh(e,"OL")},callback:function(){this.lists.format("OL")},plugin:"lists"}),e.FE.DefineIcon("formatUL",{NAME:"list-ul"}),e.FE.DefineIcon("formatOL",{NAME:"list-ol"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{paragraphFormat:{N:"Normal",H1:"Heading 1",H2:"Heading 2",H3:"Heading 3",H4:"Heading 4",PRE:"Code"},paragraphFormatSelection:!1,paragraphDefaultSelection:"Paragraph Format"}),e.FE.PLUGINS.paragraphFormat=function(t){function n(n,r){var i=t.html.defaultTag()
if(r&&r.toLowerCase()!=i)if(0<n.find("ul, ol").length){var o=e("<"+r+">")
n.prepend(o)
for(var s=t.node.contents(n.get(0))[0];s&&["UL","OL"].indexOf(s.tagName)<0;){var a=s.nextSibling
o.append(s),s=a}}else n.html("<"+r+">"+n.html()+"</"+r+">")}return{apply:function(r){"N"==r&&(r=t.html.defaultTag()),t.selection.save(),t.html.wrap(!0,!0,!t.opts.paragraphFormat.BLOCKQUOTE,!0,!0),t.selection.restore()
var i,o,s,a,l,u,c,p,d=t.selection.blocks()
t.selection.save(),t.$el.find("pre").attr("skip",!0)
for(var f=0;f<d.length;f++)if(d[f].tagName!=r&&!t.node.isList(d[f])){var h=e(d[f])
"LI"==d[f].tagName?n(h,r):"LI"==d[f].parentNode.tagName&&d[f]?(u=h,c=r,p=t.html.defaultTag(),c&&c.toLowerCase()!=p||(c='div class="fr-temp-div"'),u.replaceWith(e("<"+c+">").html(u.html()))):0<=["TD","TH"].indexOf(d[f].parentNode.tagName)?(s=h,a=r,l=t.html.defaultTag(),a||(a='div class="fr-temp-div"'+(t.node.isEmpty(s.get(0),!0)?' data-empty="true"':"")),a.toLowerCase()==l?(t.node.isEmpty(s.get(0),!0)||s.append("<br/>"),s.replaceWith(s.html())):s.replaceWith(e("<"+a+">").html(s.html()))):(i=h,(o=r)||(o='div class="fr-temp-div"'+(t.node.isEmpty(i.get(0),!0)?' data-empty="true"':"")),i.replaceWith(e("<"+o+" "+t.node.attributes(i.get(0))+">").html(i.html()).removeAttr("data-empty")))}t.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function(){e(this).prev().append("<br>"+e(this).html()),e(this).remove()}),t.$el.find("pre").removeAttr("skip"),t.html.unwrap(),t.selection.restore()},refreshOnShow:function(e,n){var r=t.selection.blocks()
if(r.length){var i=r[0],o="N",s=t.html.defaultTag()
i.tagName.toLowerCase()!=s&&i!=t.el&&(o=i.tagName),n.find('.fr-command[data-param1="'+o+'"]').addClass("fr-active").attr("aria-selected",!0)}else n.find('.fr-command[data-param1="N"]').addClass("fr-active").attr("aria-selected",!0)},refresh:function(e){if(t.opts.paragraphFormatSelection){var n=t.selection.blocks()
if(n.length){var r=n[0],i="N",o=t.html.defaultTag()
r.tagName.toLowerCase()!=o&&r!=t.el&&(i=r.tagName),0<=["LI","TD","TH"].indexOf(i)&&(i="N"),e.find("> span").text(t.language.translate(t.opts.paragraphFormat[i]))}else e.find("> span").text(t.language.translate(t.opts.paragraphFormat.N))}}}},e.FE.RegisterCommand("paragraphFormat",{type:"dropdown",displaySelection:function(e){return e.opts.paragraphFormatSelection},defaultSelection:function(e){return e.language.translate(e.opts.paragraphDefaultSelection)},displaySelectionWidth:125,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.paragraphFormat
for(var n in t)if(t.hasOwnProperty(n)){var r=this.shortcuts.get("paragraphFormat."+n)
r=r?'<span class="fr-shortcut">'+r+"</span>":"",e+='<li role="presentation"><'+("N"==n?this.html.defaultTag()||"DIV":n)+' style="padding: 0 !important; margin: 0 !important;" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></"+("N"==n?this.html.defaultTag()||"DIV":n)+"></li>"}return e+"</ul>"},title:"Paragraph Format",callback:function(e,t){this.paragraphFormat.apply(t)},refresh:function(e){this.paragraphFormat.refresh(e)},refreshOnShow:function(e,t){this.paragraphFormat.refreshOnShow(e,t)},plugin:"paragraphFormat"}),e.FE.DefineIcon("paragraphFormat",{NAME:"paragraph"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{specialCharactersSets:[{title:"Latin",list:[{char:"&iexcl;",desc:"INVERTED EXCLAMATION MARK"},{char:"&cent;",desc:"CENT SIGN"},{char:"&pound;",desc:"POUND SIGN"},{char:"&curren;",desc:"CURRENCY SIGN"},{char:"&yen;",desc:"YEN SIGN"},{char:"&brvbar;",desc:"BROKEN BAR"},{char:"&sect;",desc:"SECTION SIGN"},{char:"&uml;",desc:"DIAERESIS"},{char:"&copy;",desc:"COPYRIGHT SIGN"},{char:"&trade;",desc:"TRADEMARK SIGN"},{char:"&ordf;",desc:"FEMININE ORDINAL INDICATOR"},{char:"&laquo;",desc:"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK"},{char:"&not;",desc:"NOT SIGN"},{char:"&reg;",desc:"REGISTERED SIGN"},{char:"&macr;",desc:"MACRON"},{char:"&deg;",desc:"DEGREE SIGN"},{char:"&plusmn;",desc:"PLUS-MINUS SIGN"},{char:"&sup2;",desc:"SUPERSCRIPT TWO"},{char:"&sup3;",desc:"SUPERSCRIPT THREE"},{char:"&acute;",desc:"ACUTE ACCENT"},{char:"&micro;",desc:"MICRO SIGN"},{char:"&para;",desc:"PILCROW SIGN"},{char:"&middot;",desc:"MIDDLE DOT"},{char:"&cedil;",desc:"CEDILLA"},{char:"&sup1;",desc:"SUPERSCRIPT ONE"},{char:"&ordm;",desc:"MASCULINE ORDINAL INDICATOR"},{char:"&raquo;",desc:"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK"},{char:"&frac14;",desc:"VULGAR FRACTION ONE QUARTER"},{char:"&frac12;",desc:"VULGAR FRACTION ONE HALF"},{char:"&frac34;",desc:"VULGAR FRACTION THREE QUARTERS"},{char:"&iquest;",desc:"INVERTED QUESTION MARK"},{char:"&Agrave;",desc:"LATIN CAPITAL LETTER A WITH GRAVE"},{char:"&Aacute;",desc:"LATIN CAPITAL LETTER A WITH ACUTE"},{char:"&Acirc;",desc:"LATIN CAPITAL LETTER A WITH CIRCUMFLEX"},{char:"&Atilde;",desc:"LATIN CAPITAL LETTER A WITH TILDE"},{char:"&Auml;",desc:"LATIN CAPITAL LETTER A WITH DIAERESIS "},{char:"&Aring;",desc:"LATIN CAPITAL LETTER A WITH RING ABOVE"},{char:"&AElig;",desc:"LATIN CAPITAL LETTER AE"},{char:"&Ccedil;",desc:"LATIN CAPITAL LETTER C WITH CEDILLA"},{char:"&Egrave;",desc:"LATIN CAPITAL LETTER E WITH GRAVE"},{char:"&Eacute;",desc:"LATIN CAPITAL LETTER E WITH ACUTE"},{char:"&Ecirc;",desc:"LATIN CAPITAL LETTER E WITH CIRCUMFLEX"},{char:"&Euml;",desc:"LATIN CAPITAL LETTER E WITH DIAERESIS"},{char:"&Igrave;",desc:"LATIN CAPITAL LETTER I WITH GRAVE"},{char:"&Iacute;",desc:"LATIN CAPITAL LETTER I WITH ACUTE"},{char:"&Icirc;",desc:"LATIN CAPITAL LETTER I WITH CIRCUMFLEX"},{char:"&Iuml;",desc:"LATIN CAPITAL LETTER I WITH DIAERESIS"},{char:"&ETH;",desc:"LATIN CAPITAL LETTER ETH"},{char:"&Ntilde;",desc:"LATIN CAPITAL LETTER N WITH TILDE"},{char:"&Ograve;",desc:"LATIN CAPITAL LETTER O WITH GRAVE"},{char:"&Oacute;",desc:"LATIN CAPITAL LETTER O WITH ACUTE"},{char:"&Ocirc;",desc:"LATIN CAPITAL LETTER O WITH CIRCUMFLEX"},{char:"&Otilde;",desc:"LATIN CAPITAL LETTER O WITH TILDE"},{char:"&Ouml;",desc:"LATIN CAPITAL LETTER O WITH DIAERESIS"},{char:"&times;",desc:"MULTIPLICATION SIGN"},{char:"&Oslash;",desc:"LATIN CAPITAL LETTER O WITH STROKE"},{char:"&Ugrave;",desc:"LATIN CAPITAL LETTER U WITH GRAVE"},{char:"&Uacute;",desc:"LATIN CAPITAL LETTER U WITH ACUTE"},{char:"&Ucirc;",desc:"LATIN CAPITAL LETTER U WITH CIRCUMFLEX"},{char:"&Uuml;",desc:"LATIN CAPITAL LETTER U WITH DIAERESIS"},{char:"&Yacute;",desc:"LATIN CAPITAL LETTER Y WITH ACUTE"},{char:"&THORN;",desc:"LATIN CAPITAL LETTER THORN"},{char:"&szlig;",desc:"LATIN SMALL LETTER SHARP S"},{char:"&agrave;",desc:"LATIN SMALL LETTER A WITH GRAVE"},{char:"&aacute;",desc:"LATIN SMALL LETTER A WITH ACUTE "},{char:"&acirc;",desc:"LATIN SMALL LETTER A WITH CIRCUMFLEX"},{char:"&atilde;",desc:"LATIN SMALL LETTER A WITH TILDE"},{char:"&auml;",desc:"LATIN SMALL LETTER A WITH DIAERESIS"},{char:"&aring;",desc:"LATIN SMALL LETTER A WITH RING ABOVE"},{char:"&aelig;",desc:"LATIN SMALL LETTER AE"},{char:"&ccedil;",desc:"LATIN SMALL LETTER C WITH CEDILLA"},{char:"&egrave;",desc:"LATIN SMALL LETTER E WITH GRAVE"},{char:"&eacute;",desc:"LATIN SMALL LETTER E WITH ACUTE"},{char:"&ecirc;",desc:"LATIN SMALL LETTER E WITH CIRCUMFLEX"},{char:"&euml;",desc:"LATIN SMALL LETTER E WITH DIAERESIS"},{char:"&igrave;",desc:"LATIN SMALL LETTER I WITH GRAVE"},{char:"&iacute;",desc:"LATIN SMALL LETTER I WITH ACUTE"},{char:"&icirc;",desc:"LATIN SMALL LETTER I WITH CIRCUMFLEX"},{char:"&iuml;",desc:"LATIN SMALL LETTER I WITH DIAERESIS"},{char:"&eth;",desc:"LATIN SMALL LETTER ETH"},{char:"&ntilde;",desc:"LATIN SMALL LETTER N WITH TILDE"},{char:"&ograve;",desc:"LATIN SMALL LETTER O WITH GRAVE"},{char:"&oacute;",desc:"LATIN SMALL LETTER O WITH ACUTE"},{char:"&ocirc;",desc:"LATIN SMALL LETTER O WITH CIRCUMFLEX"},{char:"&otilde;",desc:"LATIN SMALL LETTER O WITH TILDE"},{char:"&ouml;",desc:"LATIN SMALL LETTER O WITH DIAERESIS"},{char:"&divide;",desc:"DIVISION SIGN"},{char:"&oslash;",desc:"LATIN SMALL LETTER O WITH STROKE"},{char:"&ugrave;",desc:"LATIN SMALL LETTER U WITH GRAVE"},{char:"&uacute;",desc:"LATIN SMALL LETTER U WITH ACUTE"},{char:"&ucirc;",desc:"LATIN SMALL LETTER U WITH CIRCUMFLEX"},{char:"&uuml;",desc:"LATIN SMALL LETTER U WITH DIAERESIS"},{char:"&yacute;",desc:"LATIN SMALL LETTER Y WITH ACUTE"},{char:"&thorn;",desc:"LATIN SMALL LETTER THORN"},{char:"&yuml;",desc:"LATIN SMALL LETTER Y WITH DIAERESIS"}]},{title:"Greek",list:[{char:"&Alpha;",desc:"GREEK CAPITAL LETTER ALPHA"},{char:"&Beta;",desc:"GREEK CAPITAL LETTER BETA"},{char:"&Gamma;",desc:"GREEK CAPITAL LETTER GAMMA"},{char:"&Delta;",desc:"GREEK CAPITAL LETTER DELTA"},{char:"&Epsilon;",desc:"GREEK CAPITAL LETTER EPSILON"},{char:"&Zeta;",desc:"GREEK CAPITAL LETTER ZETA"},{char:"&Eta;",desc:"GREEK CAPITAL LETTER ETA"},{char:"&Theta;",desc:"GREEK CAPITAL LETTER THETA"},{char:"&Iota;",desc:"GREEK CAPITAL LETTER IOTA"},{char:"&Kappa;",desc:"GREEK CAPITAL LETTER KAPPA"},{char:"&Lambda;",desc:"GREEK CAPITAL LETTER LAMBDA"},{char:"&Mu;",desc:"GREEK CAPITAL LETTER MU"},{char:"&Nu;",desc:"GREEK CAPITAL LETTER NU"},{char:"&Xi;",desc:"GREEK CAPITAL LETTER XI"},{char:"&Omicron;",desc:"GREEK CAPITAL LETTER OMICRON"},{char:"&Pi;",desc:"GREEK CAPITAL LETTER PI"},{char:"&Rho;",desc:"GREEK CAPITAL LETTER RHO"},{char:"&Sigma;",desc:"GREEK CAPITAL LETTER SIGMA"},{char:"&Tau;",desc:"GREEK CAPITAL LETTER TAU"},{char:"&Upsilon;",desc:"GREEK CAPITAL LETTER UPSILON"},{char:"&Phi;",desc:"GREEK CAPITAL LETTER PHI"},{char:"&Chi;",desc:"GREEK CAPITAL LETTER CHI"},{char:"&Psi;",desc:"GREEK CAPITAL LETTER PSI"},{char:"&Omega;",desc:"GREEK CAPITAL LETTER OMEGA"},{char:"&alpha;",desc:"GREEK SMALL LETTER ALPHA"},{char:"&beta;",desc:"GREEK SMALL LETTER BETA"},{char:"&gamma;",desc:"GREEK SMALL LETTER GAMMA"},{char:"&delta;",desc:"GREEK SMALL LETTER DELTA"},{char:"&epsilon;",desc:"GREEK SMALL LETTER EPSILON"},{char:"&zeta;",desc:"GREEK SMALL LETTER ZETA"},{char:"&eta;",desc:"GREEK SMALL LETTER ETA"},{char:"&theta;",desc:"GREEK SMALL LETTER THETA"},{char:"&iota;",desc:"GREEK SMALL LETTER IOTA"},{char:"&kappa;",desc:"GREEK SMALL LETTER KAPPA"},{char:"&lambda;",desc:"GREEK SMALL LETTER LAMBDA"},{char:"&mu;",desc:"GREEK SMALL LETTER MU"},{char:"&nu;",desc:"GREEK SMALL LETTER NU"},{char:"&xi;",desc:"GREEK SMALL LETTER XI"},{char:"&omicron;",desc:"GREEK SMALL LETTER OMICRON"},{char:"&pi;",desc:"GREEK SMALL LETTER PI"},{char:"&rho;",desc:"GREEK SMALL LETTER RHO"},{char:"&sigmaf;",desc:"GREEK SMALL LETTER FINAL SIGMA"},{char:"&sigma;",desc:"GREEK SMALL LETTER SIGMA"},{char:"&tau;",desc:"GREEK SMALL LETTER TAU"},{char:"&upsilon;",desc:"GREEK SMALL LETTER UPSILON"},{char:"&phi;",desc:"GREEK SMALL LETTER PHI"},{char:"&chi;",desc:"GREEK SMALL LETTER CHI"},{char:"&psi;",desc:"GREEK SMALL LETTER PSI"},{char:"&omega;",desc:"GREEK SMALL LETTER OMEGA"},{char:"&thetasym;",desc:"GREEK THETA SYMBOL"},{char:"&upsih;",desc:"GREEK UPSILON WITH HOOK SYMBOL"},{char:"&straightphi;",desc:"GREEK PHI SYMBOL"},{char:"&piv;",desc:"GREEK PI SYMBOL"},{char:"&Gammad;",desc:"GREEK LETTER DIGAMMA"},{char:"&gammad;",desc:"GREEK SMALL LETTER DIGAMMA"},{char:"&varkappa;",desc:"GREEK KAPPA SYMBOL"},{char:"&varrho;",desc:"GREEK RHO SYMBOL"},{char:"&straightepsilon;",desc:"GREEK LUNATE EPSILON SYMBOL"},{char:"&backepsilon;",desc:"GREEK REVERSED LUNATE EPSILON SYMBOL"}]},{title:"Cyrillic",list:[{char:"&#x400",desc:"CYRILLIC CAPITAL LETTER IE WITH GRAVE"},{char:"&#x401",desc:"CYRILLIC CAPITAL LETTER IO"},{char:"&#x402",desc:"CYRILLIC CAPITAL LETTER DJE"},{char:"&#x403",desc:"CYRILLIC CAPITAL LETTER GJE"},{char:"&#x404",desc:"CYRILLIC CAPITAL LETTER UKRAINIAN IE"},{char:"&#x405",desc:"CYRILLIC CAPITAL LETTER DZE"},{char:"&#x406",desc:"CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I"},{char:"&#x407",desc:"CYRILLIC CAPITAL LETTER YI"},{char:"&#x408",desc:"CYRILLIC CAPITAL LETTER JE"},{char:"&#x409",desc:"CYRILLIC CAPITAL LETTER LJE"},{char:"&#x40A",desc:"CYRILLIC CAPITAL LETTER NJE"},{char:"&#x40B",desc:"CYRILLIC CAPITAL LETTER TSHE"},{char:"&#x40C",desc:"CYRILLIC CAPITAL LETTER KJE"},{char:"&#x40D",desc:"CYRILLIC CAPITAL LETTER I WITH GRAVE"},{char:"&#x40E",desc:"CYRILLIC CAPITAL LETTER SHORT U"},{char:"&#x40F",desc:"CYRILLIC CAPITAL LETTER DZHE"},{char:"&#x410",desc:"CYRILLIC CAPITAL LETTER A"},{char:"&#x411",desc:"CYRILLIC CAPITAL LETTER BE"},{char:"&#x412",desc:"CYRILLIC CAPITAL LETTER VE"},{char:"&#x413",desc:"CYRILLIC CAPITAL LETTER GHE"},{char:"&#x414",desc:"CYRILLIC CAPITAL LETTER DE"},{char:"&#x415",desc:"CYRILLIC CAPITAL LETTER IE"},{char:"&#x416",desc:"CYRILLIC CAPITAL LETTER ZHE"},{char:"&#x417",desc:"CYRILLIC CAPITAL LETTER ZE"},{char:"&#x418",desc:"CYRILLIC CAPITAL LETTER I"},{char:"&#x419",desc:"CYRILLIC CAPITAL LETTER SHORT I"},{char:"&#x41A",desc:"CYRILLIC CAPITAL LETTER KA"},{char:"&#x41B",desc:"CYRILLIC CAPITAL LETTER EL"},{char:"&#x41C",desc:"CYRILLIC CAPITAL LETTER EM"},{char:"&#x41D",desc:"CYRILLIC CAPITAL LETTER EN"},{char:"&#x41E",desc:"CYRILLIC CAPITAL LETTER O"},{char:"&#x41F",desc:"CYRILLIC CAPITAL LETTER PE"},{char:"&#x420",desc:"CYRILLIC CAPITAL LETTER ER"},{char:"&#x421",desc:"CYRILLIC CAPITAL LETTER ES"},{char:"&#x422",desc:"CYRILLIC CAPITAL LETTER TE"},{char:"&#x423",desc:"CYRILLIC CAPITAL LETTER U"},{char:"&#x424",desc:"CYRILLIC CAPITAL LETTER EF"},{char:"&#x425",desc:"CYRILLIC CAPITAL LETTER HA"},{char:"&#x426",desc:"CYRILLIC CAPITAL LETTER TSE"},{char:"&#x427",desc:"CYRILLIC CAPITAL LETTER CHE"},{char:"&#x428",desc:"CYRILLIC CAPITAL LETTER SHA"},{char:"&#x429",desc:"CYRILLIC CAPITAL LETTER SHCHA"},{char:"&#x42A",desc:"CYRILLIC CAPITAL LETTER HARD SIGN"},{char:"&#x42B",desc:"CYRILLIC CAPITAL LETTER YERU"},{char:"&#x42C",desc:"CYRILLIC CAPITAL LETTER SOFT SIGN"},{char:"&#x42D",desc:"CYRILLIC CAPITAL LETTER E"},{char:"&#x42E",desc:"CYRILLIC CAPITAL LETTER YU"},{char:"&#x42F",desc:"CYRILLIC CAPITAL LETTER YA"},{char:"&#x430",desc:"CYRILLIC SMALL LETTER A"},{char:"&#x431",desc:"CYRILLIC SMALL LETTER BE"},{char:"&#x432",desc:"CYRILLIC SMALL LETTER VE"},{char:"&#x433",desc:"CYRILLIC SMALL LETTER GHE"},{char:"&#x434",desc:"CYRILLIC SMALL LETTER DE"},{char:"&#x435",desc:"CYRILLIC SMALL LETTER IE"},{char:"&#x436",desc:"CYRILLIC SMALL LETTER ZHE"},{char:"&#x437",desc:"CYRILLIC SMALL LETTER ZE"},{char:"&#x438",desc:"CYRILLIC SMALL LETTER I"},{char:"&#x439",desc:"CYRILLIC SMALL LETTER SHORT I"},{char:"&#x43A",desc:"CYRILLIC SMALL LETTER KA"},{char:"&#x43B",desc:"CYRILLIC SMALL LETTER EL"},{char:"&#x43C",desc:"CYRILLIC SMALL LETTER EM"},{char:"&#x43D",desc:"CYRILLIC SMALL LETTER EN"},{char:"&#x43E",desc:"CYRILLIC SMALL LETTER O"},{char:"&#x43F",desc:"CYRILLIC SMALL LETTER PE"},{char:"&#x440",desc:"CYRILLIC SMALL LETTER ER"},{char:"&#x441",desc:"CYRILLIC SMALL LETTER ES"},{char:"&#x442",desc:"CYRILLIC SMALL LETTER TE"},{char:"&#x443",desc:"CYRILLIC SMALL LETTER U"},{char:"&#x444",desc:"CYRILLIC SMALL LETTER EF"},{char:"&#x445",desc:"CYRILLIC SMALL LETTER HA"},{char:"&#x446",desc:"CYRILLIC SMALL LETTER TSE"},{char:"&#x447",desc:"CYRILLIC SMALL LETTER CHE"},{char:"&#x448",desc:"CYRILLIC SMALL LETTER SHA"},{char:"&#x449",desc:"CYRILLIC SMALL LETTER SHCHA"},{char:"&#x44A",desc:"CYRILLIC SMALL LETTER HARD SIGN"},{char:"&#x44B",desc:"CYRILLIC SMALL LETTER YERU"},{char:"&#x44C",desc:"CYRILLIC SMALL LETTER SOFT SIGN"},{char:"&#x44D",desc:"CYRILLIC SMALL LETTER E"},{char:"&#x44E",desc:"CYRILLIC SMALL LETTER YU"},{char:"&#x44F",desc:"CYRILLIC SMALL LETTER YA"},{char:"&#x450",desc:"CYRILLIC SMALL LETTER IE WITH GRAVE"},{char:"&#x451",desc:"CYRILLIC SMALL LETTER IO"},{char:"&#x452",desc:"CYRILLIC SMALL LETTER DJE"},{char:"&#x453",desc:"CYRILLIC SMALL LETTER GJE"},{char:"&#x454",desc:"CYRILLIC SMALL LETTER UKRAINIAN IE"},{char:"&#x455",desc:"CYRILLIC SMALL LETTER DZE"},{char:"&#x456",desc:"CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I"},{char:"&#x457",desc:"CYRILLIC SMALL LETTER YI"},{char:"&#x458",desc:"CYRILLIC SMALL LETTER JE"},{char:"&#x459",desc:"CYRILLIC SMALL LETTER LJE"},{char:"&#x45A",desc:"CYRILLIC SMALL LETTER NJE"},{char:"&#x45B",desc:"CYRILLIC SMALL LETTER TSHE"},{char:"&#x45C",desc:"CYRILLIC SMALL LETTER KJE"},{char:"&#x45D",desc:"CYRILLIC SMALL LETTER I WITH GRAVE"},{char:"&#x45E",desc:"CYRILLIC SMALL LETTER SHORT U"},{char:"&#x45F",desc:"CYRILLIC SMALL LETTER DZHE"}]},{title:"Punctuation",list:[{char:"&ndash;",desc:"EN DASH"},{char:"&mdash;",desc:"EM DASH"},{char:"&lsquo;",desc:"LEFT SINGLE QUOTATION MARK"},{char:"&rsquo;",desc:"RIGHT SINGLE QUOTATION MARK"},{char:"&sbquo;",desc:"SINGLE LOW-9 QUOTATION MARK"},{char:"&ldquo;",desc:"LEFT DOUBLE QUOTATION MARK"},{char:"&rdquo;",desc:"RIGHT DOUBLE QUOTATION MARK"},{char:"&bdquo;",desc:"DOUBLE LOW-9 QUOTATION MARK"},{char:"&dagger;",desc:"DAGGER"},{char:"&Dagger;",desc:"DOUBLE DAGGER"},{char:"&bull;",desc:"BULLET"},{char:"&hellip;",desc:"HORIZONTAL ELLIPSIS"},{char:"&permil;",desc:"PER MILLE SIGN"},{char:"&prime;",desc:"PRIME"},{char:"&Prime;",desc:"DOUBLE PRIME"},{char:"&lsaquo;",desc:"SINGLE LEFT-POINTING ANGLE QUOTATION MARK"},{char:"&rsaquo;",desc:"SINGLE RIGHT-POINTING ANGLE QUOTATION MARK"},{char:"&oline;",desc:"OVERLINE"},{char:"&frasl;",desc:"FRACTION SLASH"}]},{title:"Currency",list:[{char:"&#x20A0",desc:"EURO-CURRENCY SIGN"},{char:"&#x20A1",desc:"COLON SIGN"},{char:"&#x20A2",desc:"CRUZEIRO SIGN"},{char:"&#x20A3",desc:"FRENCH FRANC SIGN"},{char:"&#x20A4",desc:"LIRA SIGN"},{char:"&#x20A5",desc:"MILL SIGN"},{char:"&#x20A6",desc:"NAIRA SIGN"},{char:"&#x20A7",desc:"PESETA SIGN"},{char:"&#x20A8",desc:"RUPEE SIGN"},{char:"&#x20A9",desc:"WON SIGN"},{char:"&#x20AA",desc:"NEW SHEQEL SIGN"},{char:"&#x20AB",desc:"DONG SIGN"},{char:"&#x20AC",desc:"EURO SIGN"},{char:"&#x20AD",desc:"KIP SIGN"},{char:"&#x20AE",desc:"TUGRIK SIGN"},{char:"&#x20AF",desc:"DRACHMA SIGN"},{char:"&#x20B0",desc:"GERMAN PENNY SYMBOL"},{char:"&#x20B1",desc:"PESO SIGN"},{char:"&#x20B2",desc:"GUARANI SIGN"},{char:"&#x20B3",desc:"AUSTRAL SIGN"},{char:"&#x20B4",desc:"HRYVNIA SIGN"},{char:"&#x20B5",desc:"CEDI SIGN"},{char:"&#x20B6",desc:"LIVRE TOURNOIS SIGN"},{char:"&#x20B7",desc:"SPESMILO SIGN"},{char:"&#x20B8",desc:"TENGE SIGN"},{char:"&#x20B9",desc:"INDIAN RUPEE SIGN"}]},{title:"Arrows",list:[{char:"&#x2190",desc:"LEFTWARDS ARROW"},{char:"&#x2191",desc:"UPWARDS ARROW"},{char:"&#x2192",desc:"RIGHTWARDS ARROW"},{char:"&#x2193",desc:"DOWNWARDS ARROW"},{char:"&#x2194",desc:"LEFT RIGHT ARROW"},{char:"&#x2195",desc:"UP DOWN ARROW"},{char:"&#x2196",desc:"NORTH WEST ARROW"},{char:"&#x2197",desc:"NORTH EAST ARROW"},{char:"&#x2198",desc:"SOUTH EAST ARROW"},{char:"&#x2199",desc:"SOUTH WEST ARROW"},{char:"&#x219A",desc:"LEFTWARDS ARROW WITH STROKE"},{char:"&#x219B",desc:"RIGHTWARDS ARROW WITH STROKE"},{char:"&#x219C",desc:"LEFTWARDS WAVE ARROW"},{char:"&#x219D",desc:"RIGHTWARDS WAVE ARROW"},{char:"&#x219E",desc:"LEFTWARDS TWO HEADED ARROW"},{char:"&#x219F",desc:"UPWARDS TWO HEADED ARROW"},{char:"&#x21A0",desc:"RIGHTWARDS TWO HEADED ARROW"},{char:"&#x21A1",desc:"DOWNWARDS TWO HEADED ARROW"},{char:"&#x21A2",desc:"LEFTWARDS ARROW WITH TAIL"},{char:"&#x21A3",desc:"RIGHTWARDS ARROW WITH TAIL"},{char:"&#x21A4",desc:"LEFTWARDS ARROW FROM BAR"},{char:"&#x21A5",desc:"UPWARDS ARROW FROM BAR"},{char:"&#x21A6",desc:"RIGHTWARDS ARROW FROM BAR"},{char:"&#x21A7",desc:"DOWNWARDS ARROW FROM BAR"},{char:"&#x21A8",desc:"UP DOWN ARROW WITH BASE"},{char:"&#x21A9",desc:"LEFTWARDS ARROW WITH HOOK"},{char:"&#x21AA",desc:"RIGHTWARDS ARROW WITH HOOK"},{char:"&#x21AB",desc:"LEFTWARDS ARROW WITH LOOP"},{char:"&#x21AC",desc:"RIGHTWARDS ARROW WITH LOOP"},{char:"&#x21AD",desc:"LEFT RIGHT WAVE ARROW"},{char:"&#x21AE",desc:"LEFT RIGHT ARROW WITH STROKE"},{char:"&#x21AF",desc:"DOWNWARDS ZIGZAG ARROW"},{char:"&#x21B0",desc:"UPWARDS ARROW WITH TIP LEFTWARDS"},{char:"&#x21B1",desc:"UPWARDS ARROW WITH TIP RIGHTWARDS"},{char:"&#x21B2",desc:"DOWNWARDS ARROW WITH TIP LEFTWARDS"},{char:"&#x21B3",desc:"DOWNWARDS ARROW WITH TIP RIGHTWARDS"},{char:"&#x21B4",desc:"RIGHTWARDS ARROW WITH CORNER DOWNWARDS"},{char:"&#x21B5",desc:"DOWNWARDS ARROW WITH CORNER LEFTWARDS"},{char:"&#x21B6",desc:"ANTICLOCKWISE TOP SEMICIRCLE ARROW"},{char:"&#x21B7",desc:"CLOCKWISE TOP SEMICIRCLE ARROW"},{char:"&#x21B8",desc:"NORTH WEST ARROW TO LONG BAR"},{char:"&#x21B9",desc:"LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR"},{char:"&#x21BA",desc:"ANTICLOCKWISE OPEN CIRCLE ARROW"},{char:"&#x21BB",desc:"CLOCKWISE OPEN CIRCLE ARROW"},{char:"&#x21BC",desc:"LEFTWARDS HARPOON WITH BARB UPWARDS"},{char:"&#x21BD",desc:"LEFTWARDS HARPOON WITH BARB DOWNWARDS"},{char:"&#x21BE",desc:"UPWARDS HARPOON WITH BARB RIGHTWARDS"},{char:"&#x21BF",desc:"UPWARDS HARPOON WITH BARB LEFTWARDS"},{char:"&#x21C0",desc:"RIGHTWARDS HARPOON WITH BARB UPWARDS"},{char:"&#x21C1",desc:"RIGHTWARDS HARPOON WITH BARB DOWNWARDS"},{char:"&#x21C2",desc:"DOWNWARDS HARPOON WITH BARB RIGHTWARDS"},{char:"&#x21C3",desc:"DOWNWARDS HARPOON WITH BARB LEFTWARDS"},{char:"&#x21C4",desc:"RIGHTWARDS ARROW OVER LEFTWARDS ARROW"},{char:"&#x21C5",desc:"UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW"},{char:"&#x21C6",desc:"LEFTWARDS ARROW OVER RIGHTWARDS ARROW"},{char:"&#x21C7",desc:"LEFTWARDS PAIRED ARROWS"},{char:"&#x21C8",desc:"UPWARDS PAIRED ARROWS"},{char:"&#x21C9",desc:"RIGHTWARDS PAIRED ARROWS"},{char:"&#x21CA",desc:"DOWNWARDS PAIRED ARROWS"},{char:"&#x21CB",desc:"LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON"},{char:"&#x21CC",desc:"RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON"},{char:"&#x21CD",desc:"LEFTWARDS DOUBLE ARROW WITH STROKE"},{char:"&#x21CE",desc:"LEFT RIGHT DOUBLE ARROW WITH STROKE"},{char:"&#x21CF",desc:"RIGHTWARDS DOUBLE ARROW WITH STROKE"},{char:"&#x21D0",desc:"LEFTWARDS DOUBLE ARROW"},{char:"&#x21D1",desc:"UPWARDS DOUBLE ARROW"},{char:"&#x21D2",desc:"RIGHTWARDS DOUBLE ARROW"},{char:"&#x21D3",desc:"DOWNWARDS DOUBLE ARROW"},{char:"&#x21D4",desc:"LEFT RIGHT DOUBLE ARROW"},{char:"&#x21D5",desc:"UP DOWN DOUBLE ARROW"},{char:"&#x21D6",desc:"NORTH WEST DOUBLE ARROW"},{char:"&#x21D7",desc:"NORTH EAST DOUBLE ARROW"},{char:"&#x21D8",desc:"SOUTH EAST DOUBLE ARROW"},{char:"&#x21D9",desc:"SOUTH WEST DOUBLE ARROW"},{char:"&#x21DA",desc:"LEFTWARDS TRIPLE ARROW"},{char:"&#x21DB",desc:"RIGHTWARDS TRIPLE ARROW"},{char:"&#x21DC",desc:"LEFTWARDS SQUIGGLE ARROW"},{char:"&#x21DD",desc:"RIGHTWARDS SQUIGGLE ARROW"},{char:"&#x21DE",desc:"UPWARDS ARROW WITH DOUBLE STROKE"},{char:"&#x21DF",desc:"DOWNWARDS ARROW WITH DOUBLE STROKE"},{char:"&#x21E0",desc:"LEFTWARDS DASHED ARROW"},{char:"&#x21E1",desc:"UPWARDS DASHED ARROW"},{char:"&#x21E2",desc:"RIGHTWARDS DASHED ARROW"},{char:"&#x21E3",desc:"DOWNWARDS DASHED ARROW"},{char:"&#x21E4",desc:"LEFTWARDS ARROW TO BAR"},{char:"&#x21E5",desc:"RIGHTWARDS ARROW TO BAR"},{char:"&#x21E6",desc:"LEFTWARDS WHITE ARROW"},{char:"&#x21E7",desc:"UPWARDS WHITE ARROW"},{char:"&#x21E8",desc:"RIGHTWARDS WHITE ARROW"},{char:"&#x21E9",desc:"DOWNWARDS WHITE ARROW"},{char:"&#x21EA",desc:"UPWARDS WHITE ARROW FROM BAR"},{char:"&#x21EB",desc:"UPWARDS WHITE ARROW ON PEDESTAL"},{char:"&#x21EC",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR"},{char:"&#x21ED",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR"},{char:"&#x21EE",desc:"UPWARDS WHITE DOUBLE ARROW"},{char:"&#x21EF",desc:"UPWARDS WHITE DOUBLE ARROW ON PEDESTAL"},{char:"&#x21F0",desc:"RIGHTWARDS WHITE ARROW FROM WALL"},{char:"&#x21F1",desc:"NORTH WEST ARROW TO CORNER"},{char:"&#x21F2",desc:"SOUTH EAST ARROW TO CORNER"},{char:"&#x21F3",desc:"UP DOWN WHITE ARROW"},{char:"&#x21F4",desc:"RIGHT ARROW WITH SMALL CIRCLE"},{char:"&#x21F5",desc:"DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW"},{char:"&#x21F6",desc:"THREE RIGHTWARDS ARROWS"},{char:"&#x21F7",desc:"LEFTWARDS ARROW WITH VERTICAL STROKE"},{char:"&#x21F8",desc:"RIGHTWARDS ARROW WITH VERTICAL STROKE"},{char:"&#x21F9",desc:"LEFT RIGHT ARROW WITH VERTICAL STROKE"},{char:"&#x21FA",desc:"LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FB",desc:"RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FC",desc:"LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FD",desc:"LEFTWARDS OPEN-HEADED ARROW"},{char:"&#x21FE",desc:"RIGHTWARDS OPEN-HEADED ARROW"},{char:"&#x21FF",desc:"LEFT RIGHT OPEN-HEADED ARROW"}]},{title:"Math",list:[{char:"&forall;",desc:"FOR ALL"},{char:"&part;",desc:"PARTIAL DIFFERENTIAL"},{char:"&exist;",desc:"THERE EXISTS"},{char:"&empty;",desc:"EMPTY SET"},{char:"&nabla;",desc:"NABLA"},{char:"&isin;",desc:"ELEMENT OF"},{char:"&notin;",desc:"NOT AN ELEMENT OF"},{char:"&ni;",desc:"CONTAINS AS MEMBER"},{char:"&prod;",desc:"N-ARY PRODUCT"},{char:"&sum;",desc:"N-ARY SUMMATION"},{char:"&minus;",desc:"MINUS SIGN"},{char:"&lowast;",desc:"ASTERISK OPERATOR"},{char:"&radic;",desc:"SQUARE ROOT"},{char:"&prop;",desc:"PROPORTIONAL TO"},{char:"&infin;",desc:"INFINITY"},{char:"&ang;",desc:"ANGLE"},{char:"&and;",desc:"LOGICAL AND"},{char:"&or;",desc:"LOGICAL OR"},{char:"&cap;",desc:"INTERSECTION"},{char:"&cup;",desc:"UNION"},{char:"&int;",desc:"INTEGRAL"},{char:"&there4;",desc:"THEREFORE"},{char:"&sim;",desc:"TILDE OPERATOR"},{char:"&cong;",desc:"APPROXIMATELY EQUAL TO"},{char:"&asymp;",desc:"ALMOST EQUAL TO"},{char:"&ne;",desc:"NOT EQUAL TO"},{char:"&equiv;",desc:"IDENTICAL TO"},{char:"&le;",desc:"LESS-THAN OR EQUAL TO"},{char:"&ge;",desc:"GREATER-THAN OR EQUAL TO"},{char:"&sub;",desc:"SUBSET OF"},{char:"&sup;",desc:"SUPERSET OF"},{char:"&nsub;",desc:"NOT A SUBSET OF"},{char:"&sube;",desc:"SUBSET OF OR EQUAL TO"},{char:"&supe;",desc:"SUPERSET OF OR EQUAL TO"},{char:"&oplus;",desc:"CIRCLED PLUS"},{char:"&otimes;",desc:"CIRCLED TIMES"},{char:"&perp;",desc:"UP TACK"}]},{title:"Misc",list:[{char:"&spades;",desc:"BLACK SPADE SUIT"},{char:"&clubs;",desc:"BLACK CLUB SUIT"},{char:"&hearts;",desc:"BLACK HEART SUIT"},{char:"&diams;",desc:"BLACK DIAMOND SUIT"},{char:"&#x2669",desc:"QUARTER NOTE"},{char:"&#x266A",desc:"EIGHTH NOTE"},{char:"&#x266B",desc:"BEAMED EIGHTH NOTES"},{char:"&#x266C",desc:"BEAMED SIXTEENTH NOTES"},{char:"&#x266D",desc:"MUSIC FLAT SIGN"},{char:"&#x266E",desc:"MUSIC NATURAL SIGN"},{char:"&#x2600",desc:"BLACK SUN WITH RAYS"},{char:"&#x2601",desc:"CLOUD"},{char:"&#x2602",desc:"UMBRELLA"},{char:"&#x2603",desc:"SNOWMAN"},{char:"&#x2615",desc:"HOT BEVERAGE"},{char:"&#x2618",desc:"SHAMROCK"},{char:"&#x262F",desc:"YIN YANG"},{char:"&#x2714",desc:"HEAVY CHECK MARK"},{char:"&#x2716",desc:"HEAVY MULTIPLICATION X"},{char:"&#x2744",desc:"SNOWFLAKE"},{char:"&#x275B",desc:"HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275C",desc:"HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275D",desc:"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275E",desc:"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT"},{char:"&#x2764",desc:"HEAVY BLACK HEART"}]}]}),e.FE.PLUGINS.specialCharacters=function(t){var n,r,i="special_characters"
function o(e,n){t.events.disableBlur(),e.focus(),n.preventDefault(),n.stopPropagation()}return{_init:function(){},show:function(){if(!n){var s="<h4>"+t.language.translate("Special Characters")+"</h4>",a=function(){for(var e='<div class="fr-special-characters-modal">',n=0;n<t.opts.specialCharactersSets.length;n++){for(var r=t.opts.specialCharactersSets[n],i=r.list,o='<div class="fr-special-characters-list"><p class="fr-special-characters-title">'+t.language.translate(r.title)+"</p>",s=0;s<i.length;s++){var a=i[s]
o+='<span class="fr-command fr-special-character" tabIndex="-1" role="button" value="'+a.char+'" title="'+a.desc+'">'+a.char+'<span class="fr-sr-only">'+t.language.translate(a.desc)+"&nbsp;&nbsp;&nbsp;</span></span>"}e+=o+"</div>"}return e+"</div>"}(),l=t.modals.create(i,s,a)
n=l.$modal,l.$head,r=l.$body,t.events.$on(e(t.o_win),"resize",function(){(n.data("instance")||t).modals.resize(i)}),t.events.bindClick(r,".fr-special-character",function(r){var i=n.data("instance")||t,o=e(r.currentTarget)
i.specialCharacters.insert(o)}),t.events.$on(r,"keydown",function(i){var s=i.which,a=r.find("span.fr-special-character:focus:first")
if(!(a.length||s!=e.FE.KEYCODE.F10||t.keys.ctrlKey(i)||i.shiftKey)&&i.altKey)return o(r.find("span.fr-special-character:first"),i),!1
if(s==e.FE.KEYCODE.TAB||s==e.FE.KEYCODE.ARROW_LEFT||s==e.FE.KEYCODE.ARROW_RIGHT){var l=null,u=null,c=!1
return s==e.FE.KEYCODE.ARROW_LEFT||s==e.FE.KEYCODE.ARROW_RIGHT?(u=s==e.FE.KEYCODE.ARROW_RIGHT,c=!0):u=!i.shiftKey,a.length?(c&&(l=u?a.nextAll("span.fr-special-character:first"):a.prevAll("span.fr-special-character:first")),l&&l.length||(l=u?a.parent().next().find("span.fr-special-character:first"):a.parent().prev().find("span.fr-special-character:"+(c?"last":"first"))).length||(l=r.find("span.fr-special-character:"+(u?"first":"last")))):l=r.find("span.fr-special-character:"+(u?"first":"last")),o(l,i),!1}if(s!=e.FE.KEYCODE.ENTER||!a.length)return!0;(n.data("instance")||t).specialCharacters.insert(a)},!0)}t.modals.show(i),t.modals.resize(i)},hide:function(){t.modals.hide(i)},insert:function(e){t.specialCharacters.hide(),t.undo.saveStep(),t.html.insert(e.attr("value"),!0),t.undo.saveStep()}}},e.FroalaEditor.DefineIcon("specialCharacters",{template:"text",NAME:"&#937;"}),e.FE.RegisterCommand("specialCharacters",{title:"Special Characters",icon:"specialCharacters",undo:!1,focus:!1,modal:!0,callback:function(){this.specialCharacters.show()},plugin:"specialCharacters",showOnMobile:!1})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.POPUP_TEMPLATES,{"table.insert":"[_BUTTONS_][_ROWS_COLUMNS_]","table.edit":"[_BUTTONS_]","table.colors":"[_BUTTONS_][_COLORS_][_CUSTOM_COLOR_]"}),e.extend(e.FE.DEFAULTS,{tableInsertMaxSize:10,tableEditButtons:["tableHeader","tableRemove","|","tableRows","tableColumns","tableStyle","-","tableCells","tableCellBackground","tableCellVerticalAlign","tableCellHorizontalAlign","tableCellStyle"],tableInsertButtons:["tableBack","|"],tableResizer:!0,tableDefaultWidth:"100%",tableResizerOffset:5,tableResizingLimit:30,tableColorsButtons:["tableBack","|"],tableColors:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],tableColorsStep:7,tableCellStyles:{"fr-highlighted":"Highlighted","fr-thick":"Thick"},tableStyles:{"fr-dashed-borders":"Dashed Borders","fr-alternate-rows":"Alternate Rows"},tableCellMultipleStyles:!0,tableMultipleStyles:!0,tableInsertHelper:!0,tableInsertHelperOffset:15}),e.FE.PLUGINS.table=function(t){var n,r,i,o,s,a,l
function u(){var e=T()
if(e){var n=t.popups.get("table.edit")
if(n||(n=f()),n){t.popups.setContainer("table.edit",t.$sc)
var r=x(e),i=(r.left+r.right)/2,o=r.bottom
t.popups.show("table.edit",i,o,r.bottom-r.top),t.edit.isDisabled()&&(1<Q().length&&t.toolbar.disable(),t.$el.removeClass("fr-no-selection"),t.edit.on(),t.button.bulkRefresh(),t.selection.setAtEnd(t.$el.find(".fr-selected-cell:last").get(0)),t.selection.restore())}}}function c(){0===Q().length&&t.toolbar.enable()}function p(n){if(n)return t.popups.onHide("table.insert",function(){t.popups.get("table.insert").find('.fr-table-size .fr-select-table-size > span[data-row="1"][data-col="1"]').trigger("mouseenter")}),!0
var r=""
0<t.opts.tableInsertButtons.length&&(r='<div class="fr-buttons">'+t.button.buildList(t.opts.tableInsertButtons)+"</div>")
var i,o={buttons:r,rows_columns:function(){for(var e='<div class="fr-table-size"><div class="fr-table-size-info">1 &times; 1</div><div class="fr-select-table-size">',n=1;n<=t.opts.tableInsertMaxSize;n++){for(var r=1;r<=t.opts.tableInsertMaxSize;r++){var i="inline-block"
2<n&&!t.helpers.isMobile()&&(i="none")
var o="fr-table-cell "
1==n&&1==r&&(o+=" hover"),e+='<span class="fr-command '+o+'" tabIndex="-1" data-cmd="tableInsert" data-row="'+n+'" data-col="'+r+'" data-param1="'+n+'" data-param2="'+r+'" style="display: '+i+';" role="button"><span></span><span class="fr-sr-only">'+n+" &times; "+r+"&nbsp;&nbsp;&nbsp;</span></span>"}e+='<div class="new-line"></div>'}return e+"</div></div>"}()},s=t.popups.create("table.insert",o)
return t.events.$on(s,"mouseenter",".fr-table-size .fr-select-table-size .fr-table-cell",function(t){d(e(t.currentTarget))},!0),i=s,t.events.$on(i,"focus","[tabIndex]",function(t){d(e(t.currentTarget))}),t.events.on("popup.tab",function(n){var r=e(n.currentTarget)
if(!t.popups.isVisible("table.insert")||!r.is("span, a"))return!0
var i,o=n.which
if(e.FE.KEYCODE.ARROW_UP==o||e.FE.KEYCODE.ARROW_DOWN==o||e.FE.KEYCODE.ARROW_LEFT==o||e.FE.KEYCODE.ARROW_RIGHT==o){if(r.is("span.fr-table-cell")){var s=r.parent().find("span.fr-table-cell"),a=s.index(r),l=t.opts.tableInsertMaxSize,u=a%l,c=Math.floor(a/l)
e.FE.KEYCODE.ARROW_UP==o?c=Math.max(0,c-1):e.FE.KEYCODE.ARROW_DOWN==o?c=Math.min(t.opts.tableInsertMaxSize-1,c+1):e.FE.KEYCODE.ARROW_LEFT==o?u=Math.max(0,u-1):e.FE.KEYCODE.ARROW_RIGHT==o&&(u=Math.min(t.opts.tableInsertMaxSize-1,u+1))
var p=c*l+u,f=e(s.get(p))
d(f),t.events.disableBlur(),f.focus(),i=!1}}else e.FE.KEYCODE.ENTER==o&&(t.button.exec(r),i=!1)
return!1===i&&(n.preventDefault(),n.stopPropagation()),i},!0),s}function d(e){var n=e.data("row"),r=e.data("col"),i=e.parent()
i.siblings(".fr-table-size-info").html(n+" &times; "+r),i.find("> span").removeClass("hover fr-active-item")
for(var o=1;o<=t.opts.tableInsertMaxSize;o++)for(var s=0;s<=t.opts.tableInsertMaxSize;s++){var a=i.find('> span[data-row="'+o+'"][data-col="'+s+'"]')
o<=n&&s<=r?a.addClass("hover"):o<=n+1||o<=2&&!t.helpers.isMobile()?a.css("display","inline-block"):2<o&&!t.helpers.isMobile()&&a.css("display","none")}e.addClass("fr-active-item")}function f(e){if(e)return t.popups.onHide("table.edit",c),!0
if(0<t.opts.tableEditButtons.length){var n={buttons:'<div class="fr-buttons">'+t.button.buildList(t.opts.tableEditButtons)+"</div>"},r=t.popups.create("table.edit",n)
return t.events.$on(t.$wp,"scroll.table-edit",function(){t.popups.isVisible("table.edit")&&u()}),r}return!1}function h(){if(0<Q().length){var e=X()
t.selection.setBefore(e.get(0))||t.selection.setAfter(e.get(0)),t.selection.restore(),t.popups.hide("table.edit"),e.remove(),t.toolbar.enable()}}function m(n){var r=X()
if(0<r.length){if(0<t.$el.find("th.fr-selected-cell").length&&"above"==n)return
var i,o,s,a=T(),l=R(a)
o="above"==n?l.min_i:l.max_i
var c="<tr>"
for(i=0;i<a[o].length;i++)if("below"==n&&o<a.length-1&&a[o][i]==a[o+1][i]||"above"==n&&0<o&&a[o][i]==a[o-1][i]){if(0===i||0<i&&a[o][i]!=a[o][i-1]){var p=e(a[o][i])
p.attr("rowspan",parseInt(p.attr("rowspan"),10)+1)}}else c+="<td><br></td>"
c+="</tr>",s=0<t.$el.find("th.fr-selected-cell").length&&"below"==n?e(r.find("tbody").not(r.find("table tbody"))):e(r.find("tr").not(r.find("table tr")).get(o)),"below"==n?"TBODY"==s.prop("tagName")?s.prepend(c):s.after(c):"above"==n&&(s.before(c),t.popups.isVisible("table.edit")&&u())}}function g(e,t,n){var r,i,o,s,a,l=0,u=T(n)
if(e<(t=Math.min(t,u[0].length-1)))for(i=e;i<=t;i++)if(!(e<i&&u[0][i]==u[0][i-1])&&1<(s=Math.min(parseInt(u[0][i].getAttribute("colspan"),10)||1,t-e+1))&&u[0][i]==u[0][i+1])for(l=s-1,r=1;r<u.length;r++)if(u[r][i]!=u[r-1][i]){for(o=i;o<i+s;o++)if(1<(a=parseInt(u[r][o].getAttribute("colspan"),10)||1)&&u[r][o]==u[r][o+1])o+=l=Math.min(l,a-1)
else if(!(l=Math.max(0,l-1)))break
if(!l)break}l&&b(u,l,"colspan",0,u.length-1,e,t)}function v(e,t,n){var r,i,o,s,a,l=0,u=T(n)
if(e<(t=Math.min(t,u.length-1)))for(r=e;r<=t;r++)if(!(e<r&&u[r][0]==u[r-1][0])&&1<(s=Math.min(parseInt(u[r][0].getAttribute("rowspan"),10)||1,t-e+1))&&u[r][0]==u[r+1][0])for(l=s-1,i=1;i<u[0].length;i++)if(u[r][i]!=u[r][i-1]){for(o=r;o<r+s;o++)if(1<(a=parseInt(u[o][i].getAttribute("rowspan"),10)||1)&&u[o][i]==u[o+1][i])o+=l=Math.min(l,a-1)
else if(!(l=Math.max(0,l-1)))break
if(!l)break}l&&b(u,l,"rowspan",e,t,0,u[0].length-1)}function b(e,t,n,r,i,o,s){var a,l,u
for(a=r;a<=i;a++)for(l=o;l<=s;l++)r<a&&e[a][l]==e[a-1][l]||o<l&&e[a][l]==e[a][l-1]||1<(u=parseInt(e[a][l].getAttribute(n),10)||1)&&(1<u-t?e[a][l].setAttribute(n,u-t):e[a][l].removeAttribute(n))}function y(e,t,n,r,i){v(e,t,i),g(n,r,i)}function E(e){var n=t.$el.find(".fr-selected-cell")
"REMOVE"!=e?n.css("background-color",t.helpers.HEXtoRGB(e)):n.css("background-color",""),u()}function T(t){var n=[]
return null==(t=t||null)&&0<Q().length&&(t=X()),t&&t.find("tr").not(t.find("table tr")).each(function(t,r){var i=0
e(r).find("> th, > td").each(function(r,o){for(var s=e(o),a=parseInt(s.attr("colspan"),10)||1,l=parseInt(s.attr("rowspan"),10)||1,u=t;u<t+l;u++)for(var c=i;c<i+a;c++)n[u]||(n[u]=[]),n[u][c]?i++:n[u][c]=o
i+=a})}),n}function _(e,t){for(var n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)if(t[n][r]==e)return{row:n,col:r}}function A(e,t,n){for(var r=e+1,i=t+1;r<n.length;){if(n[r][t]!=n[e][t]){r--
break}r++}for(r==n.length&&r--;i<n[e].length;){if(n[e][i]!=n[e][t]){i--
break}i++}return i==n[e].length&&i--,{row:r,col:i}}function C(){t.el.querySelector(".fr-cell-fixed")&&t.el.querySelector(".fr-cell-fixed").classList.remove("fr-cell-fixed"),t.el.querySelector(".fr-cell-handler")&&t.el.querySelector(".fr-cell-handler").classList.remove("fr-cell-handler")}function S(){var n=t.$el.find(".fr-selected-cell")
0<n.length&&n.each(function(){var t=e(this)
t.removeClass("fr-selected-cell"),""===t.attr("class")&&t.removeAttr("class")}),C()}function w(){t.events.disableBlur(),t.selection.clear(),t.$el.addClass("fr-no-selection"),t.$el.blur(),t.events.enableBlur()}function R(e){var n=t.$el.find(".fr-selected-cell")
if(0<n.length){var r,i=e.length,o=0,s=e[0].length,a=0
for(r=0;r<n.length;r++){var l=_(n[r],e),u=A(l.row,l.col,e)
i=Math.min(l.row,i),o=Math.max(u.row,o),s=Math.min(l.col,s),a=Math.max(u.col,a)}return{min_i:i,max_i:o,min_j:s,max_j:a}}return null}function x(t){var n=R(t),r=e(t[n.min_i][n.min_j]),i=e(t[n.min_i][n.max_j]),o=e(t[n.max_i][n.min_j])
return{left:r.offset().left,right:i.offset().left+i.outerWidth(),top:r.offset().top,bottom:o.offset().top+o.outerHeight()}}function O(n,r){if(e(n).is(r))S(),e(n).addClass("fr-selected-cell")
else{w(),t.edit.off()
var i=T(),o=_(n,i),s=_(r,i),a=function t(n,r,i,o,s){var a,l,u,c,p=n,d=r,f=i,h=o
for(a=p;a<=d;a++)(1<(parseInt(e(s[a][f]).attr("rowspan"),10)||1)||1<(parseInt(e(s[a][f]).attr("colspan"),10)||1))&&(c=A((u=_(s[a][f],s)).row,u.col,s),p=Math.min(u.row,p),d=Math.max(c.row,d),f=Math.min(u.col,f),h=Math.max(c.col,h)),(1<(parseInt(e(s[a][h]).attr("rowspan"),10)||1)||1<(parseInt(e(s[a][h]).attr("colspan"),10)||1))&&(c=A((u=_(s[a][h],s)).row,u.col,s),p=Math.min(u.row,p),d=Math.max(c.row,d),f=Math.min(u.col,f),h=Math.max(c.col,h))
for(l=f;l<=h;l++)(1<(parseInt(e(s[p][l]).attr("rowspan"),10)||1)||1<(parseInt(e(s[p][l]).attr("colspan"),10)||1))&&(c=A((u=_(s[p][l],s)).row,u.col,s),p=Math.min(u.row,p),d=Math.max(c.row,d),f=Math.min(u.col,f),h=Math.max(c.col,h)),(1<(parseInt(e(s[d][l]).attr("rowspan"),10)||1)||1<(parseInt(e(s[d][l]).attr("colspan"),10)||1))&&(c=A((u=_(s[d][l],s)).row,u.col,s),p=Math.min(u.row,p),d=Math.max(c.row,d),f=Math.min(u.col,f),h=Math.max(c.col,h))
return p==n&&d==r&&f==i&&h==o?{min_i:n,max_i:r,min_j:i,max_j:o}:t(p,d,f,h,s)}(Math.min(o.row,s.row),Math.max(o.row,s.row),Math.min(o.col,s.col),Math.max(o.col,s.col),i)
S(),n.classList.add("fr-cell-fixed"),r.classList.add("fr-cell-handler")
for(var l=a.min_i;l<=a.max_i;l++)for(var u=a.min_j;u<=a.max_j;u++)e(i[l][u]).addClass("fr-selected-cell")}}function N(n){var r=null,i=e(n.target)
return"TD"==n.target.tagName||"TH"==n.target.tagName?r=n.target:0<i.closest("td").length?r=i.closest("td").get(0):0<i.closest("th").length&&(r=i.closest("th").get(0)),0===t.$el.find(r).length?null:r}function L(){S(),t.popups.hide("table.edit")}function k(n){var r=N(n)
if("false"==e(r).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0
if(0<Q().length&&!r&&L(),!t.edit.isDisabled()||t.popups.isVisible("table.edit"))if(1!=n.which||1==n.which&&t.helpers.isMac()&&n.ctrlKey)(3==n.which||1==n.which&&t.helpers.isMac()&&n.ctrlKey)&&r&&L()
else if(o=!0,r){0<Q().length&&!n.shiftKey&&L(),n.stopPropagation(),t.events.trigger("image.hideResizer"),t.events.trigger("video.hideResizer"),i=!0
var a=r.tagName.toLowerCase()
n.shiftKey&&0<t.$el.find(a+".fr-selected-cell").length?e(t.$el.find(a+".fr-selected-cell").closest("table")).is(e(r).closest("table"))?O(s,r):w():((t.keys.ctrlKey(n)||n.shiftKey)&&(1<Q().length||0===e(r).find(t.selection.element()).length&&!e(r).is(t.selection.element()))&&w(),O(s=r,s))}}function I(r){if(i||t.$tb.is(r.target)||t.$tb.is(e(r.target).closest(t.$tb.get(0)))||(0<Q().length&&t.toolbar.enable(),S()),!(1!=r.which||1==r.which&&t.helpers.isMac()&&r.ctrlKey)&&(o=!1,i&&(i=!1,N(r)||1!=Q().length?0<Q().length&&(t.selection.isCollapsed()?u():S()):S()),l)){l=!1,n.removeClass("fr-moving"),t.$el.removeClass("fr-no-selection"),t.edit.on()
var s=parseFloat(n.css("left"))+t.opts.tableResizerOffset+t.$wp.offset().left
t.opts.iframe&&(s-=t.$iframe.offset().left),n.data("release-position",s),n.removeData("max-left"),n.removeData("max-right"),function(){var r=n.data("origin"),i=n.data("release-position")
if(r!==i){var o=n.data("first"),s=n.data("second"),a=n.data("table"),l=a.outerWidth()
if(t.undo.canDo()||t.undo.saveStep(),null!==o&&null!==s){var u,c,p,d=T(a),f=[],h=[],m=[],g=[]
for(u=0;u<d.length;u++)c=e(d[u][o]),p=e(d[u][s]),f[u]=c.outerWidth(),m[u]=p.outerWidth(),h[u]=f[u]/l*100,g[u]=m[u]/l*100
for(u=0;u<d.length;u++){c=e(d[u][o]),p=e(d[u][s])
var v=(h[u]*(f[u]+i-r)/f[u]).toFixed(4)
c.css("width",v+"%"),p.css("width",(h[u]+g[u]-v).toFixed(4)+"%")}}else{var b,y=a.parent(),E=l/y.width()*100,_=(parseInt(a.css("margin-left"),10)||0)/y.width()*100,A=(parseInt(a.css("margin-right"),10)||0)/y.width()*100
"rtl"==t.opts.direction&&0===s||"rtl"!=t.opts.direction&&0!==s?(b=(l+i-r)/l*E,a.css("margin-right","calc(100% - "+Math.round(b).toFixed(4)+"% - "+Math.round(_).toFixed(4)+"%)")):("rtl"==t.opts.direction&&0!==s||"rtl"!=t.opts.direction&&0===s)&&(b=(l-i+r)/l*E,a.css("margin-left","calc(100% - "+Math.round(b).toFixed(4)+"% - "+Math.round(A).toFixed(4)+"%)")),a.css("width",Math.round(b).toFixed(4)+"%")}t.selection.restore(),t.undo.saveStep()}n.removeData("origin"),n.removeData("release-position"),n.removeData("first"),n.removeData("second"),n.removeData("table")}(),j()}}function D(n){if(!0===i){if(e(n.currentTarget).closest("table").is(X())){if("TD"==n.currentTarget.tagName&&0===t.$el.find("th.fr-selected-cell").length)return void O(s,n.currentTarget)
if("TH"==n.currentTarget.tagName&&0===t.$el.find("td.fr-selected-cell").length)return void O(s,n.currentTarget)}w()}}function P(n,r,i,o){for(var s,a=r;a!=t.el&&"TD"!=a.tagName&&"TH"!=a.tagName&&("up"==o?s=a.previousElementSibling:"down"==o&&(s=a.nextElementSibling),!s);)a=a.parentNode
"TD"==a.tagName||"TH"==a.tagName?function(n,r){for(var i=n;i&&"TABLE"!=i.tagName&&i.parentNode!=t.el;)i=i.parentNode
if(i&&"TABLE"==i.tagName){var o=T(e(i))
"up"==r?M(_(n,o),i,o):"down"==r&&F(_(n,o),i,o)}}(a,o):s&&("up"==o&&t.selection.setAtEnd(s),"down"==o&&t.selection.setAtStart(s))}function M(e,n,r){0<e.row?t.selection.setAtEnd(r[e.row-1][e.col]):P(0,n,0,"up")}function F(e,n,r){var i=parseInt(r[e.row][e.col].getAttribute("rowspan"),10)||1
e.row<r.length-i?t.selection.setAtStart(r[e.row+i][e.col]):P(0,n,0,"down")}function j(){n&&(n.find("div").css("opacity",0),n.css("top",0),n.css("left",0),n.css("height",0),n.find("div").css("height",0),n.hide())}function B(){r&&r.removeClass("fr-visible").css("left","-9999px")}function H(n,i){if(t.$box.find(".fr-line-breaker").is(":visible"))return!1
r||G(),t.$box.append(r),r.data("instance",t)
var o,s=e(i).find("tr:first"),a=n.pageX,l=0,u=0
t.opts.iframe&&(l+=t.$iframe.offset().left-t.helpers.scrollLeft(),u+=t.$iframe.offset().top-t.helpers.scrollTop()),s.find("th, td").each(function(){var n=e(this)
return n.offset().left<=a&&a<n.offset().left+n.outerWidth()/2?(o=parseInt(r.find("a").css("width"),10),r.css("top",u+n.offset().top-t.$box.offset().top-t.win.pageYOffset-o-5),r.css("left",l+n.offset().left-t.$box.offset().left-t.win.pageXOffset-o/2),r.data("selected-cell",n),r.data("position","before"),r.addClass("fr-visible"),!1):n.offset().left+n.outerWidth()/2<=a&&a<n.offset().left+n.outerWidth()?(o=parseInt(r.find("a").css("width"),10),r.css("top",u+n.offset().top-t.$box.offset().top-t.win.pageYOffset-o-5),r.css("left",l+n.offset().left-t.$box.offset().left+n.outerWidth()-t.win.pageXOffset-o/2),r.data("selected-cell",n),r.data("position","after"),r.addClass("fr-visible"),!1):void 0})}function $(n,i){if(t.$box.find(".fr-line-breaker").is(":visible"))return!1
r||G(),t.$box.append(r),r.data("instance",t)
var o,s=e(i),a=n.pageY,l=0,u=0
t.opts.iframe&&(l+=t.$iframe.offset().left-t.helpers.scrollLeft(),u+=t.$iframe.offset().top-t.helpers.scrollTop()),s.find("tr").each(function(){var n=e(this)
return n.offset().top<=a&&a<n.offset().top+n.outerHeight()/2?(o=parseInt(r.find("a").css("width"),10),r.css("top",u+n.offset().top-t.$box.offset().top-t.win.pageYOffset-o/2),r.css("left",l+n.offset().left-t.$box.offset().left-t.win.pageXOffset-o-5),r.data("selected-cell",n.find("td:first")),r.data("position","above"),r.addClass("fr-visible"),!1):n.offset().top+n.outerHeight()/2<=a&&a<n.offset().top+n.outerHeight()?(o=parseInt(r.find("a").css("width"),10),r.css("top",u+n.offset().top-t.$box.offset().top+n.outerHeight()-t.win.pageYOffset-o/2),r.css("left",l+n.offset().left-t.$box.offset().left-t.win.pageXOffset-o-5),r.data("selected-cell",n.find("td:first")),r.data("position","below"),r.addClass("fr-visible"),!1):void 0})}function U(i){a=null
var o=t.doc.elementFromPoint(i.pageX-t.win.pageXOffset,i.pageY-t.win.pageYOffset)
t.opts.tableResizer&&(!t.popups.areVisible()||t.popups.areVisible()&&t.popups.isVisible("table.edit"))&&function(r,i){var o=e(i),s=o.closest("table"),a=s.parent()
if(i&&"TD"!=i.tagName&&"TH"!=i.tagName&&(0<o.closest("td").length?i=o.closest("td"):0<o.closest("th").length&&(i=o.closest("th"))),!i||"TD"!=i.tagName&&"TH"!=i.tagName)n&&o.get(0)!=n.get(0)&&o.parent().get(0)!=n.get(0)&&t.core.sameInstance(n)&&j()
else{if(o=e(i),0===t.$el.find(o).length)return!1
var u=o.offset().left-1,c=u+o.outerWidth()
if(Math.abs(r.pageX-u)<=t.opts.tableResizerOffset||Math.abs(c-r.pageX)<=t.opts.tableResizerOffset){var p,d,f,h,m,g=T(s),v=_(i,g),b=A(v.row,v.col,g),y=s.offset().top,E=s.outerHeight()-1
"rtl"!=t.opts.direction?r.pageX-u<=t.opts.tableResizerOffset?(f=u,0<v.col?(h=u-z(v.col-1,g)+t.opts.tableResizingLimit,m=u+z(v.col,g)-t.opts.tableResizingLimit,p=v.col-1,d=v.col):(p=null,d=0,h=s.offset().left-1-parseInt(s.css("margin-left"),10),m=s.offset().left-1+s.width()-g[0].length*t.opts.tableResizingLimit)):c-r.pageX<=t.opts.tableResizerOffset&&(f=c,b.col<g[b.row].length&&g[b.row][b.col+1]?(h=c-z(b.col,g)+t.opts.tableResizingLimit,m=c+z(b.col+1,g)-t.opts.tableResizingLimit,p=b.col,d=b.col+1):(p=b.col,d=null,h=s.offset().left-1+g[0].length*t.opts.tableResizingLimit,m=a.offset().left-1+a.width()+parseFloat(a.css("padding-left")))):c-r.pageX<=t.opts.tableResizerOffset?(f=c,0<v.col?(h=c-z(v.col,g)+t.opts.tableResizingLimit,m=c+z(v.col-1,g)-t.opts.tableResizingLimit,p=v.col,d=v.col-1):(p=null,d=0,h=s.offset().left+g[0].length*t.opts.tableResizingLimit,m=a.offset().left-1+a.width()+parseFloat(a.css("padding-left")))):r.pageX-u<=t.opts.tableResizerOffset&&(f=u,b.col<g[b.row].length&&g[b.row][b.col+1]?(h=u-z(b.col+1,g)+t.opts.tableResizingLimit,m=u+z(b.col,g)-t.opts.tableResizingLimit,p=b.col+1,d=b.col):(p=b.col,d=null,h=a.offset().left+parseFloat(a.css("padding-left")),m=s.offset().left-1+s.width()-g[0].length*t.opts.tableResizingLimit)),n||(t.shared.$table_resizer||(t.shared.$table_resizer=e('<div class="fr-table-resizer"><div></div></div>')),n=t.shared.$table_resizer,t.events.$on(n,"mousedown",function(e){return!t.core.sameInstance(n)||(0<Q().length&&L(),1==e.which?(t.selection.save(),l=!0,n.addClass("fr-moving"),w(),t.edit.off(),n.find("div").css("opacity",1),!1):void 0)}),t.events.$on(n,"mousemove",function(e){if(!t.core.sameInstance(n))return!0
l&&(t.opts.iframe&&(e.pageX-=t.$iframe.offset().left),q(e))}),t.events.on("shared.destroy",function(){n.html("").removeData().remove(),n=null},!0),t.events.on("destroy",function(){t.$el.find(".fr-selected-cell").removeClass("fr-selected-cell"),n.hide().appendTo(e("body:first"))},!0)),n.data("table",s),n.data("first",p),n.data("second",d),n.data("instance",t),t.$wp.append(n)
var C=f-t.win.pageXOffset-t.opts.tableResizerOffset-t.$wp.offset().left,S=y-t.$wp.offset().top+t.$wp.scrollTop()
t.opts.iframe&&(C+=t.$iframe.offset().left,S+=t.$iframe.offset().top,h+=t.$iframe.offset().left,m+=t.$iframe.offset().left),n.data("max-left",h),n.data("max-right",m),n.data("origin",f-t.win.pageXOffset),n.css("top",S),n.css("left",C),n.css("height",E),n.find("div").css("height",E),n.css("padding-left",t.opts.tableResizerOffset),n.css("padding-right",t.opts.tableResizerOffset),n.show()}else t.core.sameInstance(n)&&j()}}(i,o),!t.opts.tableInsertHelper||t.popups.areVisible()||t.$tb.hasClass("fr-inline")&&t.$tb.is(":visible")||function(n,i){if(0===Q().length){var o,s,a
if(i&&("HTML"==i.tagName||"BODY"==i.tagName||t.node.isElement(i)))for(o=1;o<=t.opts.tableInsertHelperOffset;o++){if(s=t.doc.elementFromPoint(n.pageX-t.win.pageXOffset,n.pageY-t.win.pageYOffset+o),e(s).hasClass("fr-tooltip"))return
if(s&&("TH"==s.tagName||"TD"==s.tagName||"TABLE"==s.tagName)&&(e(s).parents(".fr-wrapper").length||t.opts.iframe))return H(n,e(s).closest("table"))
if(a=t.doc.elementFromPoint(n.pageX-t.win.pageXOffset+o,n.pageY-t.win.pageYOffset),e(a).hasClass("fr-tooltip"))return
if(a&&("TH"==a.tagName||"TD"==a.tagName||"TABLE"==a.tagName)&&(e(a).parents(".fr-wrapper").length||t.opts.iframe))return $(n,e(a).closest("table"))}t.core.sameInstance(r)&&B()}}(i,o)}function W(){if(l){var e=n.data("table").offset().top-t.win.pageYOffset
t.opts.iframe&&(e+=t.$iframe.offset().top-t.helpers.scrollTop()),n.css("top",e)}}function z(t,n){var r,i=e(n[0][t]).outerWidth()
for(r=1;r<n.length;r++)i=Math.min(i,e(n[r][t]).outerWidth())
return i}function K(e,t,n){var r,i=0
for(r=e;r<=t;r++)i+=z(r,n)
return i}function q(e){if(1<Q().length&&o&&w(),!1===o&&!1===i&&!1===l)a&&clearTimeout(a),t.edit.isDisabled()&&!t.popups.isVisible("table.edit")||(a=setTimeout(U,30,e))
else if(l){var r=e.pageX-t.win.pageXOffset
t.opts.iframe&&(r+=t.$iframe.offset().left)
var s=n.data("max-left"),u=n.data("max-right")
s<=r&&r<=u?n.css("left",r-t.opts.tableResizerOffset-t.$wp.offset().left):r<s&&parseFloat(n.css("left"),10)>s-t.opts.tableResizerOffset?n.css("left",s-t.opts.tableResizerOffset-t.$wp.offset().left):u<r&&parseFloat(n.css("left"),10)<u-t.opts.tableResizerOffset&&n.css("left",u-t.opts.tableResizerOffset-t.$wp.offset().left)}else o&&B()}function V(n){t.node.isEmpty(n.get(0))?n.prepend(e.FE.MARKERS):n.prepend(e.FE.START_MARKER).append(e.FE.END_MARKER)}function G(){t.shared.$ti_helper||(t.shared.$ti_helper=e('<div class="fr-insert-helper"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+t.language.translate("Insert")+'"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/></svg></a></div>'),t.events.bindClick(t.shared.$ti_helper,"a",function(){var e=r.data("selected-cell"),n=r.data("position"),i=r.data("instance")||t
"before"==n?(t.undo.saveStep(),e.addClass("fr-selected-cell"),i.table.insertColumn(n),e.removeClass("fr-selected-cell"),t.undo.saveStep()):"after"==n?(t.undo.saveStep(),e.addClass("fr-selected-cell"),i.table.insertColumn(n),e.removeClass("fr-selected-cell"),t.undo.saveStep()):"above"==n?(t.undo.saveStep(),e.addClass("fr-selected-cell"),i.table.insertRow(n),e.removeClass("fr-selected-cell"),t.undo.saveStep()):"below"==n&&(t.undo.saveStep(),e.addClass("fr-selected-cell"),i.table.insertRow(n),e.removeClass("fr-selected-cell"),t.undo.saveStep()),B()}),t.events.on("shared.destroy",function(){t.shared.$ti_helper.html("").removeData().remove(),t.shared.$ti_helper=null},!0),t.events.$on(t.shared.$ti_helper,"mousemove",function(e){e.stopPropagation()},!0),t.events.$on(e(t.o_win),"scroll",function(){B()},!0),t.events.$on(t.$wp,"scroll",function(){B()},!0)),r=t.shared.$ti_helper,t.events.on("destroy",function(){r=null}),t.tooltip.bind(t.$box,".fr-insert-helper > a.fr-floating-btn")}function Y(){s=null,clearTimeout(a)}function Q(){return t.el.querySelectorAll(".fr-selected-cell")}function X(){var n=Q()
if(n.length){for(var r=n[0];r&&"TABLE"!=r.tagName&&r.parentNode!=t.el;)r=r.parentNode
return r&&"TABLE"==r.tagName?e(r):e([])}return e([])}return{_init:function(){if(!t.$wp)return!1
if(!t.helpers.isMobile()){l=i=o=!1,t.events.$on(t.$el,"mousedown",k),t.popups.onShow("image.edit",function(){S(),i=o=!1}),t.popups.onShow("link.edit",function(){S(),i=o=!1}),t.events.on("commands.mousedown",function(e){0<e.parents(".fr-toolbar").length&&S()}),t.events.$on(t.$el,"mouseenter","th, td",D),t.events.$on(t.$win,"mouseup",I),t.opts.iframe&&t.events.$on(e(t.o_win),"mouseup",I),t.events.$on(t.$win,"mousemove",q),t.events.$on(e(t.o_win),"scroll",W),t.events.on("contentChanged",function(){0<Q().length&&(u(),t.$el.find("img").on("load.selected-cells",function(){e(this).off("load.selected-cells"),0<Q().length&&u()}))}),t.events.$on(e(t.o_win),"resize",function(){S()}),t.events.on("toolbar.esc",function(){if(0<Q().length)return t.events.disableBlur(),t.events.focus(),!1},!0),t.events.$on(e(t.o_win),"keydown",function(){o&&i&&(i=o=!1,t.$el.removeClass("fr-no-selection"),t.edit.on(),t.selection.setAtEnd(t.$el.find(".fr-selected-cell:last").get(0)),t.selection.restore(),S())}),t.events.$on(t.$el,"keydown",function(n){n.shiftKey?!1===function(n){var r=Q()
if(0<r.length){var i,o,s=T(),a=n.which
1==r.length?o=i=r[0]:(i=t.el.querySelector(".fr-cell-fixed"),o=t.el.querySelector(".fr-cell-handler"))
var l=_(o,s)
if(e.FE.KEYCODE.ARROW_RIGHT==a){if(l.col<s[0].length-1)return O(i,s[l.row][l.col+1]),!1}else if(e.FE.KEYCODE.ARROW_DOWN==a){if(l.row<s.length-1)return O(i,s[l.row+1][l.col]),!1}else if(e.FE.KEYCODE.ARROW_LEFT==a){if(0<l.col)return O(i,s[l.row][l.col-1]),!1}else if(e.FE.KEYCODE.ARROW_UP==a&&0<l.row)return O(i,s[l.row-1][l.col]),!1}}(n)&&setTimeout(function(){u()},0):function(n){var r=n.which,i=t.selection.blocks()
if(i.length&&("TD"==(i=i[0]).tagName||"TH"==i.tagName)){for(var o=i;o&&"TABLE"!=o.tagName&&o.parentNode!=t.el;)o=o.parentNode
if(o&&"TABLE"==o.tagName&&(e.FE.KEYCODE.ARROW_LEFT==r||e.FE.KEYCODE.ARROW_UP==r||e.FE.KEYCODE.ARROW_RIGHT==r||e.FE.KEYCODE.ARROW_DOWN==r)&&(0<Q().length&&L(),t.browser.webkit&&(e.FE.KEYCODE.ARROW_UP==r||e.FE.KEYCODE.ARROW_DOWN==r))){var s=t.selection.ranges(0).startContainer
if(s.nodeType==Node.TEXT_NODE&&(e.FE.KEYCODE.ARROW_UP==r&&s.previousSibling||e.FE.KEYCODE.ARROW_DOWN==r&&s.nextSibling))return
n.preventDefault(),n.stopPropagation()
var a=T(e(o)),l=_(i,a)
e.FE.KEYCODE.ARROW_UP==r?M(l,o,a):e.FE.KEYCODE.ARROW_DOWN==r&&F(l,o,a),t.selection.restore()}}}(n)}),t.events.on("keydown",function(n){if(!1===function(n){if(n.which==e.FE.KEYCODE.TAB){var r
if(0<Q().length)r=t.$el.find(".fr-selected-cell:last")
else{var i=t.selection.element()
"TD"==i.tagName||"TH"==i.tagName?r=e(i):i!=t.el&&(0<e(i).parentsUntil(t.$el,"td").length?r=e(i).parents("td:first"):0<e(i).parentsUntil(t.$el,"th").length&&(r=e(i).parents("th:first")))}if(r)return n.preventDefault(),!!(0<e(t.selection.element()).parentsUntil(t.$el,"ol, ul").length&&(0<e(t.selection.element()).parents("li").prev().length||e(t.selection.element()).is("li")&&0<e(t.selection.element()).prev().length))||(L(),n.shiftKey?0<r.prev().length?V(r.prev()):0<r.closest("tr").length&&0<r.closest("tr").prev().length?V(r.closest("tr").prev().find("td:last")):0<r.closest("tbody").length&&0<r.closest("table").find("thead tr").length&&V(r.closest("table").find("thead tr th:last")):0<r.next().length?V(r.next()):0<r.closest("tr").length&&0<r.closest("tr").next().length?V(r.closest("tr").next().find("td:first")):0<r.closest("thead").length&&0<r.closest("table").find("tbody tr").length?V(r.closest("table").find("tbody tr td:first")):(r.addClass("fr-selected-cell"),m("below"),S(),V(r.closest("tr").next().find("td:first"))),t.selection.restore(),!1)}}(n))return!1
var r=Q()
if(0<r.length){if(0<r.length&&t.keys.ctrlKey(n)&&n.which==e.FE.KEYCODE.A)return S(),t.popups.isVisible("table.edit")&&t.popups.hide("table.edit"),r=[],!0
if(n.which==e.FE.KEYCODE.ESC&&t.popups.isVisible("table.edit"))return S(),t.popups.hide("table.edit"),n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),!(r=[])
if(1<r.length&&(n.which==e.FE.KEYCODE.BACKSPACE||n.which==e.FE.KEYCODE.DELETE)){t.undo.saveStep()
for(var i=0;i<r.length;i++)e(r[i]).html("<br>"),i==r.length-1&&e(r[i]).prepend(e.FE.MARKERS)
return t.selection.restore(),t.undo.saveStep(),!(r=[])}if(1<r.length&&n.which!=e.FE.KEYCODE.F10&&!t.keys.isBrowserAction(n))return n.preventDefault(),!(r=[])}else if(!(r=[])===function(n){if(n.altKey&&n.which==e.FE.KEYCODE.SPACE){var r,i=t.selection.element()
if("TD"==i.tagName||"TH"==i.tagName?r=i:0<e(i).closest("td").length?r=e(i).closest("td").get(0):0<e(i).closest("th").length&&(r=e(i).closest("th").get(0)),r)return n.preventDefault(),O(r,r),u(),!1}}(n))return!1},!0)
var n=[]
t.events.on("html.beforeGet",function(){n=Q()
for(var e=0;e<n.length;e++)n[e].className=(n[e].className||"").replace(/fr-selected-cell/g,"")}),t.events.on("html.afterGet",function(){for(var e=0;e<n.length;e++)n[e].className=(n[e].className?n[e].className.trim()+" ":"")+"fr-selected-cell"
n=[]}),p(!0),f(!0)}t.events.on("destroy",Y)},insert:function(n,r){var i,o,s="<table "+(t.opts.tableDefaultWidth?'style="width: '+t.opts.tableDefaultWidth+';" ':"")+'class="fr-inserted-table"><tbody>',a=100/r
for(i=0;i<n;i++){for(s+="<tr>",o=0;o<r;o++)s+="<td"+(t.opts.tableDefaultWidth?' style="width: '+a.toFixed(4)+'%;"':"")+">",0===i&&0===o&&(s+=e.FE.MARKERS),s+="<br></td>"
s+="</tr>"}s+="</tbody></table>",t.html.insert(s),t.selection.restore()
var l=t.$el.find(".fr-inserted-table")
l.removeClass("fr-inserted-table"),t.events.trigger("table.inserted",[l.get(0)])},remove:h,insertRow:m,deleteRow:function(){var n=X()
if(0<n.length){var r,i,o,s=T(),a=R(s)
if(0===a.min_i&&a.max_i==s.length-1)h()
else{for(r=a.max_i;r>=a.min_i;r--){for(o=e(n.find("tr").not(n.find("table tr")).get(r)),i=0;i<s[r].length;i++)if(0===i||s[r][i]!=s[r][i-1]){var l=e(s[r][i])
if(1<parseInt(l.attr("rowspan"),10)){var u=parseInt(l.attr("rowspan"),10)-1
1==u?l.removeAttr("rowspan"):l.attr("rowspan",u)}if(r<s.length-1&&s[r][i]==s[r+1][i]&&(0===r||s[r][i]!=s[r-1][i])){for(var c=s[r][i],p=i;0<p&&s[r][p]==s[r][p-1];)p--
0===p?e(n.find("tr").not(n.find("table tr")).get(r+1)).prepend(c):e(s[r+1][p-1]).after(c)}}var d=o.parent()
o.remove(),0===d.find("tr").length&&d.remove(),s=T(n)}y(0,s.length-1,0,s[0].length-1,n),0<a.min_i?t.selection.setAtEnd(s[a.min_i-1][0]):t.selection.setAtEnd(s[0][0]),t.selection.restore(),t.popups.hide("table.edit")}}},insertColumn:function(n){var r=X()
if(0<r.length){var i,o=T(),s=R(o)
i="before"==n?s.min_j:s.max_j
var a,l=100/o[0].length,c=100/(o[0].length+1)
r.find("th, td").each(function(){(a=e(this)).data("old-width",a.outerWidth()/r.outerWidth()*100)}),r.find("tr").not(r.find("table tr")).each(function(t){for(var r,s=e(this),a=0,u=0;a-1<i;){if(!(r=s.find("> th, > td").get(u))){r=null
break}r==o[t][a]?(a+=parseInt(e(r).attr("colspan"),10)||1,u++):(a+=parseInt(e(o[t][a]).attr("colspan"),10)||1,"after"==n&&(r=0===u?-1:s.find("> th, > td").get(u-1)))}var p,d=e(r)
if("after"==n&&i<a-1||"before"==n&&0<i&&o[t][i]==o[t][i-1]){if(0===t||0<t&&o[t][i]!=o[t-1][i]){var f=parseInt(d.attr("colspan"),10)+1
d.attr("colspan",f),d.css("width",(d.data("old-width")*c/l+c).toFixed(4)+"%"),d.removeData("old-width")}}else p=0<s.find("th").length?'<th style="width: '+c.toFixed(4)+'%;"><br></th>':'<td style="width: '+c.toFixed(4)+'%;"><br></td>',-1==r?s.prepend(p):null==r?s.append(p):"before"==n?d.before(p):"after"==n&&d.after(p)}),r.find("th, td").each(function(){(a=e(this)).data("old-width")&&(a.css("width",(a.data("old-width")*c/l).toFixed(4)+"%"),a.removeData("old-width"))}),t.popups.isVisible("table.edit")&&u()}},deleteColumn:function(){var n=X()
if(0<n.length){var r,i,o,s=T(),a=R(s)
if(0===a.min_j&&a.max_j==s[0].length-1)h()
else{var l=0
for(r=0;r<s.length;r++)for(i=0;i<s[0].length;i++)(o=e(s[r][i])).hasClass("fr-selected-cell")||(o.data("old-width",o.outerWidth()/n.outerWidth()*100),(i<a.min_j||i>a.max_j)&&(l+=o.outerWidth()/n.outerWidth()*100))
for(l/=s.length,i=a.max_j;i>=a.min_j;i--)for(r=0;r<s.length;r++)if(0===r||s[r][i]!=s[r-1][i])if(o=e(s[r][i]),1<(parseInt(o.attr("colspan"),10)||1)){var u=parseInt(o.attr("colspan"),10)-1
1==u?o.removeAttr("colspan"):o.attr("colspan",u),o.css("width",(100*(o.data("old-width")-z(i,s))/l).toFixed(4)+"%"),o.removeData("old-width")}else{var c=e(o.parent().get(0))
o.remove(),0===c.find("> th, > td").length&&(0===c.prev().length||0===c.next().length||c.prev().find("> th[rowspan], > td[rowspan]").length<c.prev().find("> th, > td").length)&&c.remove()}y(0,s.length-1,0,s[0].length-1,n),0<a.min_j?t.selection.setAtEnd(s[a.min_i][a.min_j-1]):t.selection.setAtEnd(s[a.min_i][0]),t.selection.restore(),t.popups.hide("table.edit"),n.find("th, td").each(function(){(o=e(this)).data("old-width")&&(o.css("width",(100*o.data("old-width")/l).toFixed(4)+"%"),o.removeData("old-width"))})}}},mergeCells:function(){if(1<Q().length&&(0===t.$el.find("th.fr-selected-cell").length||0===t.$el.find("td.fr-selected-cell").length)){C()
var n,r,i=R(T()),o=t.$el.find(".fr-selected-cell"),s=e(o[0]),a=s.parent().find(".fr-selected-cell"),l=s.closest("table"),c=s.html(),p=0
for(n=0;n<a.length;n++)p+=e(a[n]).outerWidth()
for(s.css("width",(p/l.outerWidth()*100).toFixed(4)+"%"),i.min_j<i.max_j&&s.attr("colspan",i.max_j-i.min_j+1),i.min_i<i.max_i&&s.attr("rowspan",i.max_i-i.min_i+1),n=1;n<o.length;n++)"<br>"!=(r=e(o[n])).html()&&""!==r.html()&&(c+="<br>"+r.html()),r.remove()
s.html(c),t.selection.setAtEnd(s.get(0)),t.selection.restore(),t.toolbar.enable(),v(i.min_i,i.max_i,l)
var d=l.find("tr:empty")
for(n=d.length-1;0<=n;n--)e(d[n]).remove()
g(i.min_j,i.max_j,l),u()}},splitCellVertically:function(){if(1==Q().length){var n=t.$el.find(".fr-selected-cell"),r=parseInt(n.attr("colspan"),10)||1,i=n.parent().outerWidth(),o=n.outerWidth(),s=n.clone().html("<br>"),a=T(),l=_(n.get(0),a)
if(1<r){var u=Math.ceil(r/2)
o=K(l.col,l.col+u-1,a)/i*100
var c=K(l.col+u,l.col+r-1,a)/i*100
1<u?n.attr("colspan",u):n.removeAttr("colspan"),1<r-u?s.attr("colspan",r-u):s.removeAttr("colspan"),n.css("width",o.toFixed(4)+"%"),s.css("width",c.toFixed(4)+"%")}else{var p
for(p=0;p<a.length;p++)if(0===p||a[p][l.col]!=a[p-1][l.col]){var d=e(a[p][l.col])
if(!d.is(n)){var f=(parseInt(d.attr("colspan"),10)||1)+1
d.attr("colspan",f)}}o=o/i*100/2,n.css("width",o.toFixed(4)+"%"),s.css("width",o.toFixed(4)+"%")}n.after(s),S(),t.popups.hide("table.edit")}},splitCellHorizontally:function(){if(1==Q().length){var n=t.$el.find(".fr-selected-cell"),r=n.parent(),i=n.closest("table"),o=parseInt(n.attr("rowspan"),10),s=T(),a=_(n.get(0),s),l=n.clone().html("<br>")
if(1<o){var u=Math.ceil(o/2)
1<u?n.attr("rowspan",u):n.removeAttr("rowspan"),1<o-u?l.attr("rowspan",o-u):l.removeAttr("rowspan")
for(var c=a.row+u,p=0===a.col?a.col:a.col-1;0<=p&&(s[c][p]==s[c][p-1]||0<c&&s[c][p]==s[c-1][p]);)p--;-1==p?e(i.find("tr").not(i.find("table tr")).get(c)).prepend(l):e(s[c][p]).after(l)}else{var d,f=e("<tr>").append(l)
for(d=0;d<s[0].length;d++)if(0===d||s[a.row][d]!=s[a.row][d-1]){var h=e(s[a.row][d])
h.is(n)||h.attr("rowspan",(parseInt(h.attr("rowspan"),10)||1)+1)}r.after(f)}S(),t.popups.hide("table.edit")}},addHeader:function(){var t=X()
if(0<t.length&&0===t.find("th").length){var n,r="<thead><tr>",i=0
for(t.find("tr:first > td").each(function(){var t=e(this)
i+=parseInt(t.attr("colspan"),10)||1}),n=0;n<i;n++)r+="<th><br></th>"
r+="</tr></thead>",t.prepend(r),u()}},removeHeader:function(){var e=X(),n=e.find("thead")
if(0<n.length)if(0===e.find("tbody tr").length)h()
else if(n.remove(),0<Q().length)u()
else{t.popups.hide("table.edit")
var r=e.find("tbody tr:first td:first").get(0)
r&&(t.selection.setAtEnd(r),t.selection.restore())}},setBackground:E,showInsertPopup:function(){var e=t.$tb.find('.fr-command[data-cmd="insertTable"]'),n=t.popups.get("table.insert")
if(n||(n=p()),!n.hasClass("fr-active")){t.popups.refresh("table.insert"),t.popups.setContainer("table.insert",t.$tb)
var r=e.offset().left+e.outerWidth()/2,i=e.offset().top+(t.opts.toolbarBottom?10:e.outerHeight()-10)
t.popups.show("table.insert",r,i,e.outerHeight())}},showEditPopup:u,showColorsPopup:function n(){var r,i,o,s,a=T()
if(a){var l=t.popups.get("table.colors")
l||(l=function(){var r=""
0<t.opts.tableColorsButtons.length&&(r='<div class="fr-buttons fr-table-colors-buttons">'+t.button.buildList(t.opts.tableColorsButtons)+"</div>")
var i=""
t.opts.colorsHEXInput&&(i='<div class="fr-table-colors-hex-layer fr-active fr-layer" id="fr-table-colors-hex-layer-'+t.id+'"><div class="fr-input-line"><input maxlength="7" id="fr-table-colors-hex-layer-text-'+t.id+'" type="text" placeholder="'+t.language.translate("HEX Color")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="tableCellBackgroundCustomColor" tabIndex="2" role="button">'+t.language.translate("OK")+"</button></div></div>")
var o,s={buttons:r,colors:function(){for(var e='<div class="fr-table-colors">',n=0;n<t.opts.tableColors.length;n++)0!==n&&n%t.opts.tableColorsStep==0&&(e+="<br>"),"REMOVE"!=t.opts.tableColors[n]?e+='<span class="fr-command" style="background: '+t.opts.tableColors[n]+';" tabIndex="-1" role="button" data-cmd="tableCellBackgroundColor" data-param1="'+t.opts.tableColors[n]+'"><span class="fr-sr-only">'+t.language.translate("Color")+" "+t.opts.tableColors[n]+"&nbsp;&nbsp;&nbsp;</span></span>":e+='<span class="fr-command" data-cmd="tableCellBackgroundColor" tabIndex="-1" role="button" data-param1="REMOVE" title="'+t.language.translate("Clear Formatting")+'">'+t.icon.create("tableColorRemove")+'<span class="fr-sr-only">'+t.language.translate("Clear Formatting")+"</span></span>"
return e+"</div>"}(),custom_color:i},a=t.popups.create("table.colors",s)
return t.events.$on(t.$wp,"scroll.table-colors",function(){t.popups.isVisible("table.colors")&&n()}),o=a,t.events.on("popup.tab",function(n){var r=e(n.currentTarget)
if(!t.popups.isVisible("table.colors")||!r.is("span"))return!0
var i=n.which,s=!0
if(e.FE.KEYCODE.TAB==i){var a=o.find(".fr-buttons")
s=!t.accessibility.focusToolbar(a,!!n.shiftKey)}else if(e.FE.KEYCODE.ARROW_UP==i||e.FE.KEYCODE.ARROW_DOWN==i||e.FE.KEYCODE.ARROW_LEFT==i||e.FE.KEYCODE.ARROW_RIGHT==i){var l=r.parent().find("span.fr-command"),u=l.index(r),c=t.opts.colorsStep,p=Math.floor(l.length/c),d=u%c,f=Math.floor(u/c)*c+d,h=p*c
e.FE.KEYCODE.ARROW_UP==i?f=((f-c)%h+h)%h:e.FE.KEYCODE.ARROW_DOWN==i?f=(f+c)%h:e.FE.KEYCODE.ARROW_LEFT==i?f=((f-1)%h+h)%h:e.FE.KEYCODE.ARROW_RIGHT==i&&(f=(f+1)%h)
var m=e(l.get(f))
t.events.disableBlur(),m.focus(),s=!1}else e.FE.KEYCODE.ENTER==i&&(t.button.exec(r),s=!1)
return!1===s&&(n.preventDefault(),n.stopPropagation()),s},!0),a}()),t.popups.setContainer("table.colors",t.$sc)
var u=x(a),c=(u.left+u.right)/2,p=u.bottom
r=t.popups.get("table.colors"),i=t.$el.find(".fr-selected-cell:first"),o=t.helpers.RGBToHex(i.css("background-color")),s=r.find(".fr-table-colors-hex-layer input"),r.find(".fr-selected-color").removeClass("fr-selected-color fr-active-item"),r.find('span[data-param1="'+o+'"]').addClass("fr-selected-color fr-active-item"),s.val(o).trigger("change"),t.popups.show("table.colors",c,p,u.bottom-u.top)}},back:function(){0<Q().length?u():(t.popups.hide("table.insert"),t.toolbar.showInline())},verticalAlign:function(e){t.$el.find(".fr-selected-cell").css("vertical-align",e)},horizontalAlign:function(e){t.$el.find(".fr-selected-cell").css("text-align",e)},applyStyle:function(e,t,n,r){if(0<t.length){if(!n){var i=Object.keys(r)
i.splice(i.indexOf(e),1),t.removeClass(i.join(" "))}t.toggleClass(e)}},selectedTable:X,selectedCells:Q,customColor:function(){var e=t.popups.get("table.colors").find(".fr-table-colors-hex-layer input")
e.length&&E(e.val())}}},e.FE.DefineIcon("insertTable",{NAME:"table"}),e.FE.RegisterCommand("insertTable",{title:"Insert Table",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("table.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("table.insert")):this.table.showInsertPopup()},plugin:"table"}),e.FE.RegisterCommand("tableInsert",{callback:function(e,t,n){this.table.insert(t,n),this.popups.hide("table.insert")}}),e.FE.DefineIcon("tableHeader",{NAME:"header",FA5NAME:"heading"}),e.FE.RegisterCommand("tableHeader",{title:"Table Header",focus:!1,toggle:!0,callback:function(){this.popups.get("table.edit").find('.fr-command[data-cmd="tableHeader"]').hasClass("fr-active")?this.table.removeHeader():this.table.addHeader()},refresh:function(e){var t=this.table.selectedTable()
0<t.length&&(0===t.find("th").length?e.removeClass("fr-active").attr("aria-pressed",!1):e.addClass("fr-active").attr("aria-pressed",!0))}}),e.FE.DefineIcon("tableRows",{NAME:"bars"}),e.FE.RegisterCommand("tableRows",{type:"dropdown",focus:!1,title:"Row",options:{above:"Insert row above",below:"Insert row below",delete:"Delete row"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableRows.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableRows" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.language.translate(n[r])+"</a></li>")
return t+"</ul>"},callback:function(e,t){"above"==t||"below"==t?this.table.insertRow(t):this.table.deleteRow()}}),e.FE.DefineIcon("tableColumns",{NAME:"bars fa-rotate-90"}),e.FE.RegisterCommand("tableColumns",{type:"dropdown",focus:!1,title:"Column",options:{before:"Insert column before",after:"Insert column after",delete:"Delete column"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableColumns.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableColumns" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.language.translate(n[r])+"</a></li>")
return t+"</ul>"},callback:function(e,t){"before"==t||"after"==t?this.table.insertColumn(t):this.table.deleteColumn()}}),e.FE.DefineIcon("tableCells",{NAME:"square-o",FA5NAME:"square"}),e.FE.RegisterCommand("tableCells",{type:"dropdown",focus:!1,title:"Cell",options:{merge:"Merge cells","vertical-split":"Vertical split","horizontal-split":"Horizontal split"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableCells.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCells" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.language.translate(n[r])+"</a></li>")
return t+"</ul>"},callback:function(e,t){"merge"==t?this.table.mergeCells():"vertical-split"==t?this.table.splitCellVertically():this.table.splitCellHorizontally()},refreshOnShow:function(e,t){1<this.$el.find(".fr-selected-cell").length?(t.find('a[data-param1="vertical-split"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="horizontal-split"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="merge"]').removeClass("fr-disabled").attr("aria-disabled",!1)):(t.find('a[data-param1="merge"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="vertical-split"]').removeClass("fr-disabled").attr("aria-disabled",!1),t.find('a[data-param1="horizontal-split"]').removeClass("fr-disabled").attr("aria-disabled",!1))}}),e.FE.DefineIcon("tableRemove",{NAME:"trash"}),e.FE.RegisterCommand("tableRemove",{title:"Remove Table",focus:!1,callback:function(){this.table.remove()}}),e.FE.DefineIcon("tableStyle",{NAME:"paint-brush"}),e.FE.RegisterCommand("tableStyle",{title:"Table Style",type:"dropdown",focus:!1,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.tableStyles
for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>")
return e+"</ul>"},callback:function(e,t){this.table.applyStyle(t,this.$el.find(".fr-selected-cell").closest("table"),this.opts.tableMultipleStyles,this.opts.tableStyles)},refreshOnShow:function(t,n){var r=this.$el.find(".fr-selected-cell").closest("table")
r&&n.find(".fr-command").each(function(){var t=e(this).data("param1"),n=r.hasClass(t)
e(this).toggleClass("fr-active",n).attr("aria-selected",n)})}}),e.FE.DefineIcon("tableCellBackground",{NAME:"tint"}),e.FE.RegisterCommand("tableCellBackground",{title:"Cell Background",focus:!1,popup:!0,callback:function(){this.table.showColorsPopup()}}),e.FE.RegisterCommand("tableCellBackgroundColor",{undo:!0,focus:!1,callback:function(e,t){this.table.setBackground(t)}}),e.FE.DefineIcon("tableBack",{NAME:"arrow-left"}),e.FE.RegisterCommand("tableBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.table.back()},refresh:function(e){0!==this.table.selectedCells().length||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),e.FE.DefineIcon("tableCellVerticalAlign",{NAME:"arrows-v",FA5NAME:"arrows-alt-v"}),e.FE.RegisterCommand("tableCellVerticalAlign",{type:"dropdown",focus:!1,title:"Vertical Align",options:{Top:"Align Top",Middle:"Align Middle",Bottom:"Align Bottom"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableCellVerticalAlign.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellVerticalAlign" data-param1="'+r.toLowerCase()+'" title="'+this.language.translate(n[r])+'">'+this.language.translate(r)+"</a></li>")
return t+"</ul>"},callback:function(e,t){this.table.verticalAlign(t)},refreshOnShow:function(e,t){t.find('.fr-command[data-param1="'+this.$el.find(".fr-selected-cell").css("vertical-align")+'"]').addClass("fr-active").attr("aria-selected",!0)}}),e.FE.DefineIcon("tableCellHorizontalAlign",{NAME:"align-left"}),e.FE.DefineIcon("align-left",{NAME:"align-left"}),e.FE.DefineIcon("align-right",{NAME:"align-right"}),e.FE.DefineIcon("align-center",{NAME:"align-center"}),e.FE.DefineIcon("align-justify",{NAME:"align-justify"}),e.FE.RegisterCommand("tableCellHorizontalAlign",{type:"dropdown",focus:!1,title:"Horizontal Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableCellHorizontalAlign.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="tableCellHorizontalAlign" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.icon.create("align-"+r)+'<span class="fr-sr-only">'+this.language.translate(n[r])+"</span></a></li>")
return t+"</ul>"},callback:function(e,t){this.table.horizontalAlign(t)},refresh:function(t){var n=this.table.selectedCells()
n.length&&t.find("> *:first").replaceWith(this.icon.create("align-"+this.helpers.getAlignment(e(n[0]))))},refreshOnShow:function(e,t){t.find('.fr-command[data-param1="'+this.helpers.getAlignment(this.$el.find(".fr-selected-cell:first"))+'"]').addClass("fr-active").attr("aria-selected",!0)}}),e.FE.DefineIcon("tableCellStyle",{NAME:"magic"}),e.FE.RegisterCommand("tableCellStyle",{title:"Cell Style",type:"dropdown",focus:!1,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.tableCellStyles
for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>")
return e+"</ul>"},callback:function(e,t){this.table.applyStyle(t,this.$el.find(".fr-selected-cell"),this.opts.tableCellMultipleStyles,this.opts.tableCellStyles)},refreshOnShow:function(t,n){var r=this.$el.find(".fr-selected-cell:first")
r&&n.find(".fr-command").each(function(){var t=e(this).data("param1"),n=r.hasClass(t)
e(this).toggleClass("fr-active",n).attr("aria-selected",n)})}}),e.FE.RegisterCommand("tableCellBackgroundCustomColor",{title:"OK",undo:!0,callback:function(){this.table.customColor()}}),e.FE.DefineIcon("tableColorRemove",{NAME:"eraser"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.FE.URLRegEx="(^| |\\u00A0)("+e.FE.LinkRegEx+"|([a-z0-9+-_.]{1,}@[a-z0-9+-_.]{1,}\\.[a-z0-9+-_]{1,}))$",e.FE.PLUGINS.url=function(t){var n=null
function r(e,r,i){for(var o="";i.length&&"."==i[i.length-1];)o+=".",i=i.substring(0,i.length-1)
var s=i
if(t.opts.linkConvertEmailAddress)t.helpers.isEmail(s)&&!/^mailto:.*/i.test(s)&&(s="mailto:"+s)
else if(t.helpers.isEmail(s))return r+i
return/^((http|https|ftp|ftps|mailto|tel|sms|notes|data)\:)/i.test(s)||(s="//"+s),(r||"")+"<a"+(t.opts.linkAlwaysBlank?' target="_blank"':"")+(n?' rel="'+n+'"':"")+' data-fr-linked="true" href="'+s+'">'+i.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&amp;/g,"&").replace(/&/g,"&amp;")+"</a>"+o}function i(){return new RegExp(e.FE.URLRegEx,"gi")}function o(e){return t.opts.linkAlwaysNoFollow&&(n="nofollow"),t.opts.linkAlwaysBlank&&(t.opts.linkNoOpener&&(n?n+=" noopener":n="noopener"),t.opts.linkNoReferrer&&(n?n+=" noreferrer":n="noreferrer")),e.replace(i(),r)}function s(e){var t=e.split(" ")
return t[t.length-1]}function a(){var n=t.selection.ranges(0).startContainer
if(!n||n.nodeType!==Node.TEXT_NODE)return!1
if(function e(n){return!!n&&("A"===n.tagName||!(!n.parentNode||n.parentNode==t.el)&&e(n.parentNode))}(n))return!1
if(i().test(s(n.textContent))){e(n).before(o(n.textContent))
var r=e(n.parentNode).find("a[data-fr-linked]")
r.removeAttr("data-fr-linked"),n.parentNode.removeChild(n),t.events.trigger("url.linked",[r.get(0)])}else if(n.textContent.split(" ").length<=2&&n.previousSibling&&"A"===n.previousSibling.tagName){var a=n.previousSibling.innerText+n.textContent
i().test(s(a))&&(e(n.previousSibling).replaceWith(o(a)),n.parentNode.removeChild(n))}}return{_init:function(){t.events.on("keypress",function(e){!t.selection.isCollapsed()||"."!=e.key&&")"!=e.key&&"("!=e.key||a()},!0),t.events.on("keydown",function(n){var r=n.which
!t.selection.isCollapsed()||r!=e.FE.KEYCODE.ENTER&&r!=e.FE.KEYCODE.SPACE||a()},!0),t.events.on("paste.beforeCleanup",function(e){if(t.helpers.isURL(e)){var n=null
return t.opts.linkAlwaysBlank&&(t.opts.linkNoOpener&&(n?n+=" noopener":n="noopener"),t.opts.linkNoReferrer&&(n?n+=" noreferrer":n="noreferrer")),"<a"+(t.opts.linkAlwaysBlank?' target="_blank"':"")+(n?' rel="'+n+'"':"")+' href="'+e+'" >'+e+"</a>"}})}}}}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],t):t(e.bootstrap={},e.jQuery,e.Popper)}(this,function(e,t,n){"use strict"
function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n
var a=function(e){var t="transitionend"
function n(t){var n=this,i=!1
return e(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},t),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e))
return e},getSelectorFromElement:function(t){var n=t.getAttribute("data-target")
n&&"#"!==n||(n=t.getAttribute("href")||"")
try{return e(document).find(n).length>0?n:null}catch(e){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0
var n=e(t).css("transition-duration")
return parseFloat(n)?(n=n.split(",")[0],1e3*parseFloat(n)):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(n){e(n).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=t[i],a=s&&r.isElement(s)?"element":(l=s,{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase())
if(!new RegExp(o).test(a))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}var l}}
return e.fn.emulateTransitionEnd=n,e.event.special[r.TRANSITION_END]={bindType:t,delegateType:t,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},r}(t),l=function(e){var t=e.fn.alert,n={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},r="alert",o="fade",s="show",l=function(){function t(e){this._element=e}var l=t.prototype
return l.close=function(e){e=e||this._element
var t=this._getRootElement(e)
this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},l.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},l._getRootElement=function(t){var n=a.getSelectorFromElement(t),i=!1
return n&&(i=e(n)[0]),i||(i=e(t).closest("."+r)[0]),i},l._triggerCloseEvent=function(t){var r=e.Event(n.CLOSE)
return e(t).trigger(r),r},l._removeElement=function(t){var n=this
if(e(t).removeClass(s),e(t).hasClass(o)){var r=a.getTransitionDurationFromElement(t)
e(t).one(a.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(r)}else this._destroyElement(t)},l._destroyElement=function(t){e(t).detach().trigger(n.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.alert")
i||(i=new t(this),r.data("bs.alert",i)),"close"===n&&i[n](this)})},t._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),t}()
return e(document).on(n.CLICK_DATA_API,'[data-dismiss="alert"]',l._handleDismiss(new l)),e.fn.alert=l._jQueryInterface,e.fn.alert.Constructor=l,e.fn.alert.noConflict=function(){return e.fn.alert=t,l._jQueryInterface},l}(t),u=function(e){var t="button",n=e.fn[t],r="active",o="btn",s="focus",a='[data-toggle^="button"]',l='[data-toggle="buttons"]',u="input",c=".active",p=".btn",d={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},f=function(){function t(e){this._element=e}var n=t.prototype
return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest(l)[0]
if(i){var o=e(this._element).find(u)[0]
if(o){if("radio"===o.type)if(o.checked&&e(this._element).hasClass(r))t=!1
else{var s=e(i).find(c)[0]
s&&e(s).removeClass(r)}if(t){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return
o.checked=!e(this._element).hasClass(r),e(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(r)),t&&e(this._element).toggleClass(r)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var r=e(this).data("bs.button")
r||(r=new t(this),e(this).data("bs.button",r)),"toggle"===n&&r[n]()})},i(t,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),t}()
return e(document).on(d.CLICK_DATA_API,a,function(t){t.preventDefault()
var n=t.target
e(n).hasClass(o)||(n=e(n).closest(p)),f._jQueryInterface.call(e(n),"toggle")}).on(d.FOCUS_BLUR_DATA_API,a,function(t){var n=e(t.target).closest(p)[0]
e(n).toggleClass(s,/^focus(in)?$/.test(t.type))}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=n,f._jQueryInterface},f}(t),c=function(e){var t="carousel",n="bs.carousel",r="."+n,o=e.fn[t],l={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},u={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c="next",p="prev",d="left",f="right",h={SLIDE:"slide"+r,SLID:"slid"+r,KEYDOWN:"keydown"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r,TOUCHEND:"touchend"+r,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},m="carousel",g="active",v="slide",b="carousel-item-right",y="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",_={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},A=function(){function o(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(_.INDICATORS)[0],this._addEventListeners()}var A=o.prototype
return A.next=function(){this._isSliding||this._slide(c)},A.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},A.prev=function(){this._isSliding||this._slide(p)},A.pause=function(t){t||(this._isPaused=!0),e(this._element).find(_.NEXT_PREV)[0]&&(a.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},A.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},A.to=function(t){var n=this
this._activeElement=e(this._element).find(_.ACTIVE_ITEM)[0]
var r=this._getItemIndex(this._activeElement)
if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(h.SLID,function(){return n.to(t)})
else{if(r===t)return this.pause(),void this.cycle()
var i=t>r?c:p
this._slide(i,this._items[t])}},A.dispose=function(){e(this._element).off(r),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},A._getConfig=function(e){return e=s({},l,e),a.typeCheckConfig(t,e,u),e},A._addEventListeners=function(){var t=this
this._config.keyboard&&e(this._element).on(h.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(h.MOUSEENTER,function(e){return t.pause(e)}).on(h.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(h.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},A._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev()
break
case 39:e.preventDefault(),this.next()}},A._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(_.ITEM)),this._items.indexOf(t)},A._getItemByDirection=function(e,t){var n=e===c,r=e===p,i=this._getItemIndex(t),o=this._items.length-1
if((r&&0===i||n&&i===o)&&!this._config.wrap)return t
var s=(i+(e===p?-1:1))%this._items.length
return-1===s?this._items[this._items.length-1]:this._items[s]},A._triggerSlideEvent=function(t,n){var r=this._getItemIndex(t),i=this._getItemIndex(e(this._element).find(_.ACTIVE_ITEM)[0]),o=e.Event(h.SLIDE,{relatedTarget:t,direction:n,from:i,to:r})
return e(this._element).trigger(o),o},A._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(_.ACTIVE).removeClass(g)
var n=this._indicatorsElement.children[this._getItemIndex(t)]
n&&e(n).addClass(g)}},A._slide=function(t,n){var r,i,o,s=this,l=e(this._element).find(_.ACTIVE_ITEM)[0],u=this._getItemIndex(l),p=n||l&&this._getItemByDirection(t,l),m=this._getItemIndex(p),A=Boolean(this._interval)
if(t===c?(r=y,i=E,o=d):(r=b,i=T,o=f),p&&e(p).hasClass(g))this._isSliding=!1
else if(!this._triggerSlideEvent(p,o).isDefaultPrevented()&&l&&p){this._isSliding=!0,A&&this.pause(),this._setActiveIndicatorElement(p)
var C=e.Event(h.SLID,{relatedTarget:p,direction:o,from:u,to:m})
if(e(this._element).hasClass(v)){e(p).addClass(i),a.reflow(p),e(l).addClass(r),e(p).addClass(r)
var S=a.getTransitionDurationFromElement(l)
e(l).one(a.TRANSITION_END,function(){e(p).removeClass(r+" "+i).addClass(g),e(l).removeClass(g+" "+i+" "+r),s._isSliding=!1,setTimeout(function(){return e(s._element).trigger(C)},0)}).emulateTransitionEnd(S)}else e(l).removeClass(g),e(p).addClass(g),this._isSliding=!1,e(this._element).trigger(C)
A&&this.cycle()}},o._jQueryInterface=function(t){return this.each(function(){var r=e(this).data(n),i=s({},l,e(this).data())
"object"==typeof t&&(i=s({},i,t))
var a="string"==typeof t?t:i.slide
if(r||(r=new o(this,i),e(this).data(n,r)),"number"==typeof t)r.to(t)
else if("string"==typeof a){if(void 0===r[a])throw new TypeError('No method named "'+a+'"')
r[a]()}else i.interval&&(r.pause(),r.cycle())})},o._dataApiClickHandler=function(t){var r=a.getSelectorFromElement(this)
if(r){var i=e(r)[0]
if(i&&e(i).hasClass(m)){var l=s({},e(i).data(),e(this).data()),u=this.getAttribute("data-slide-to")
u&&(l.interval=!1),o._jQueryInterface.call(e(i),l),u&&e(i).data(n).to(u),t.preventDefault()}}},i(o,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return l}}]),o}()
return e(document).on(h.CLICK_DATA_API,_.DATA_SLIDE,A._dataApiClickHandler),e(window).on(h.LOAD_DATA_API,function(){e(_.DATA_RIDE).each(function(){var t=e(this)
A._jQueryInterface.call(t,t.data())})}),e.fn[t]=A._jQueryInterface,e.fn[t].Constructor=A,e.fn[t].noConflict=function(){return e.fn[t]=o,A._jQueryInterface},A}(t),p=function(e){var t="collapse",n="bs.collapse",r=e.fn[t],o={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},u={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},c="show",p="collapse",d="collapsing",f="collapsed",h="width",m="height",g={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},v=function(){function r(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'))
for(var r=e(g.DATA_TOGGLE),i=0;i<r.length;i++){var o=r[i],s=a.getSelectorFromElement(o)
null!==s&&e(s).filter(t).length>0&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var v=r.prototype
return v.toggle=function(){e(this._element).hasClass(c)?this.hide():this.show()},v.show=function(){var t,i,o=this
if(!this._isTransitioning&&!e(this._element).hasClass(c)&&(this._parent&&0===(t=e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(i=e(t).not(this._selector).data(n))&&i._isTransitioning))){var s=e.Event(u.SHOW)
if(e(this._element).trigger(s),!s.isDefaultPrevented()){t&&(r._jQueryInterface.call(e(t).not(this._selector),"hide"),i||e(t).data(n,null))
var l=this._getDimension()
e(this._element).removeClass(p).addClass(d),this._element.style[l]=0,this._triggerArray.length>0&&e(this._triggerArray).removeClass(f).attr("aria-expanded",!0),this.setTransitioning(!0)
var h="scroll"+(l[0].toUpperCase()+l.slice(1)),m=a.getTransitionDurationFromElement(this._element)
e(this._element).one(a.TRANSITION_END,function(){e(o._element).removeClass(d).addClass(p).addClass(c),o._element.style[l]="",o.setTransitioning(!1),e(o._element).trigger(u.SHOWN)}).emulateTransitionEnd(m),this._element.style[l]=this._element[h]+"px"}}},v.hide=function(){var t=this
if(!this._isTransitioning&&e(this._element).hasClass(c)){var n=e.Event(u.HIDE)
if(e(this._element).trigger(n),!n.isDefaultPrevented()){var r=this._getDimension()
if(this._element.style[r]=this._element.getBoundingClientRect()[r]+"px",a.reflow(this._element),e(this._element).addClass(d).removeClass(p).removeClass(c),this._triggerArray.length>0)for(var i=0;i<this._triggerArray.length;i++){var o=this._triggerArray[i],s=a.getSelectorFromElement(o)
if(null!==s)e(s).hasClass(c)||e(o).addClass(f).attr("aria-expanded",!1)}this.setTransitioning(!0)
this._element.style[r]=""
var l=a.getTransitionDurationFromElement(this._element)
e(this._element).one(a.TRANSITION_END,function(){t.setTransitioning(!1),e(t._element).removeClass(d).addClass(p).trigger(u.HIDDEN)}).emulateTransitionEnd(l)}}},v.setTransitioning=function(e){this._isTransitioning=e},v.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},v._getConfig=function(e){return(e=s({},o,e)).toggle=Boolean(e.toggle),a.typeCheckConfig(t,e,l),e},v._getDimension=function(){return e(this._element).hasClass(h)?h:m},v._getParent=function(){var t=this,n=null
a.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0]
var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]'
return e(n).find(i).each(function(e,n){t._addAriaAndCollapsedClass(r._getTargetFromElement(n),[n])}),n},v._addAriaAndCollapsedClass=function(t,n){if(t){var r=e(t).hasClass(c)
n.length>0&&e(n).toggleClass(f,!r).attr("aria-expanded",r)}},r._getTargetFromElement=function(t){var n=a.getSelectorFromElement(t)
return n?e(n)[0]:null},r._jQueryInterface=function(t){return this.each(function(){var i=e(this),a=i.data(n),l=s({},o,i.data(),"object"==typeof t&&t)
if(!a&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),a||(a=new r(this,l),i.data(n,a)),"string"==typeof t){if(void 0===a[t])throw new TypeError('No method named "'+t+'"')
a[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return o}}]),r}()
return e(document).on(u.CLICK_DATA_API,g.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault()
var r=e(this),i=a.getSelectorFromElement(this)
e(i).each(function(){var t=e(this),i=t.data(n)?"toggle":r.data()
v._jQueryInterface.call(t,i)})}),e.fn[t]=v._jQueryInterface,e.fn[t].Constructor=v,e.fn[t].noConflict=function(){return e.fn[t]=r,v._jQueryInterface},v}(t),d=function(e){var t="dropdown",r="bs.dropdown",o="."+r,l=e.fn[t],u=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},p="disabled",d="show",f="dropup",h="dropright",m="dropleft",g="dropdown-menu-right",v="position-static",b='[data-toggle="dropdown"]',y=".dropdown form",E=".dropdown-menu",T=".navbar-nav",_=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",A="top-start",C="top-end",S="bottom-start",w="bottom-end",R="right-start",x="left-start",O={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},N={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},L=function(){function l(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var y=l.prototype
return y.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(p)){var t=l._getParentFromElement(this._element),r=e(this._menu).hasClass(d)
if(l._clearMenus(),!r){var i={relatedTarget:this._element},o=e.Event(c.SHOW,i)
if(e(t).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if(void 0===n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)")
var s=this._element
"parent"===this._config.reference?s=t:a.isElement(this._config.reference)&&(s=this._config.reference,void 0!==this._config.reference.jquery&&(s=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(t).addClass(v),this._popper=new n(s,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(t).closest(T).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(d),e(t).toggleClass(d).trigger(e.Event(c.SHOWN,i))}}}},y.dispose=function(){e.removeData(this._element,r),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},y.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},y._addEventListeners=function(){var t=this
e(this._element).on(c.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},y._getConfig=function(n){return n=s({},this.constructor.Default,e(this._element).data(),n),a.typeCheckConfig(t,n,this.constructor.DefaultType),n},y._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element)
this._menu=e(t).find(E)[0]}return this._menu},y._getPlacement=function(){var t=e(this._element).parent(),n=S
return t.hasClass(f)?(n=A,e(this._menu).hasClass(g)&&(n=C)):t.hasClass(h)?n=R:t.hasClass(m)?n=x:e(this._menu).hasClass(g)&&(n=w),n},y._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},y._getPopperConfig=function(){var e=this,t={}
"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=s({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset
var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}
return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(r)
if(n||(n=new l(this,"object"==typeof t?t:null),e(this).data(r,n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=e.makeArray(e(b)),i=0;i<n.length;i++){var o=l._getParentFromElement(n[i]),s=e(n[i]).data(r),a={relatedTarget:n[i]}
if(s){var u=s._menu
if(e(o).hasClass(d)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(o,t.target))){var p=e.Event(c.HIDE,a)
e(o).trigger(p),p.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),n[i].setAttribute("aria-expanded","false"),e(u).removeClass(d),e(o).removeClass(d).trigger(e.Event(c.HIDDEN,a)))}}}},l._getParentFromElement=function(t){var n,r=a.getSelectorFromElement(t)
return r&&(n=e(r)[0]),n||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||e(t.target).closest(E).length)):u.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(p))){var n=l._getParentFromElement(this),r=e(n).hasClass(d)
if((r||27===t.which&&32===t.which)&&(!r||27!==t.which&&32!==t.which)){var i=e(n).find(_).get()
if(0!==i.length){var o=i.indexOf(t.target)
38===t.which&&o>0&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var s=e(n).find(b)[0]
e(s).trigger("focus")}e(this).trigger("click")}}},i(l,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return N}}]),l}()
return e(document).on(c.KEYDOWN_DATA_API,b,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,b,function(t){t.preventDefault(),t.stopPropagation(),L._jQueryInterface.call(e(this),"toggle")}).on(c.CLICK_DATA_API,y,function(e){e.stopPropagation()}),e.fn[t]=L._jQueryInterface,e.fn[t].Constructor=L,e.fn[t].noConflict=function(){return e.fn[t]=l,L._jQueryInterface},L}(t),f=function(e){var t="modal",n=".bs.modal",r=e.fn.modal,o={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},u={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},c="modal-scrollbar-measure",p="modal-backdrop",d="modal-open",f="fade",h="show",m={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},g=function(){function r(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(m.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var g=r.prototype
return g.toggle=function(e){return this._isShown?this.hide():this.show(e)},g.show=function(t){var n=this
if(!this._isTransitioning&&!this._isShown){e(this._element).hasClass(f)&&(this._isTransitioning=!0)
var r=e.Event(u.SHOW,{relatedTarget:t})
e(this._element).trigger(r),this._isShown||r.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(d),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(u.CLICK_DISMISS,m.DATA_DISMISS,function(e){return n.hide(e)}),e(this._dialog).on(u.MOUSEDOWN_DISMISS,function(){e(n._element).one(u.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},g.hide=function(t){var n=this
if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var r=e.Event(u.HIDE)
if(e(this._element).trigger(r),this._isShown&&!r.isDefaultPrevented()){this._isShown=!1
var i=e(this._element).hasClass(f)
if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(u.FOCUSIN),e(this._element).removeClass(h),e(this._element).off(u.CLICK_DISMISS),e(this._dialog).off(u.MOUSEDOWN_DISMISS),i){var o=a.getTransitionDurationFromElement(this._element)
e(this._element).one(a.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},g.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},g.handleUpdate=function(){this._adjustDialog()},g._getConfig=function(e){return e=s({},o,e),a.typeCheckConfig(t,e,l),e},g._showElement=function(t){var n=this,r=e(this._element).hasClass(f)
this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,r&&a.reflow(this._element),e(this._element).addClass(h),this._config.focus&&this._enforceFocus()
var i=e.Event(u.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(i)}
if(r){var s=a.getTransitionDurationFromElement(this._element)
e(this._dialog).one(a.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},g._enforceFocus=function(){var t=this
e(document).off(u.FOCUSIN).on(u.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},g._setEscapeEvent=function(){var t=this
this._isShown&&this._config.keyboard?e(this._element).on(u.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(u.KEYDOWN_DISMISS)},g._setResizeEvent=function(){var t=this
this._isShown?e(window).on(u.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(u.RESIZE)},g._hideModal=function(){var t=this
this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(d),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(u.HIDDEN)})},g._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},g._showBackdrop=function(t){var n=this,r=e(this._element).hasClass(f)?f:""
if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=p,r&&e(this._backdrop).addClass(r),e(this._backdrop).appendTo(document.body),e(this._element).on(u.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),r&&a.reflow(this._backdrop),e(this._backdrop).addClass(h),!t)return
if(!r)return void t()
var i=a.getTransitionDurationFromElement(this._backdrop)
e(this._backdrop).one(a.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(h)
var o=function(){n._removeBackdrop(),t&&t()}
if(e(this._element).hasClass(f)){var s=a.getTransitionDurationFromElement(this._backdrop)
e(this._backdrop).one(a.TRANSITION_END,o).emulateTransitionEnd(s)}else o()}else t&&t()},g._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight
!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},g._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},g._checkScrollbar=function(){var e=document.body.getBoundingClientRect()
this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},g._setScrollbar=function(){var t=this
if(this._isBodyOverflowing){e(m.FIXED_CONTENT).each(function(n,r){var i=e(r)[0].style.paddingRight,o=e(r).css("padding-right")
e(r).data("padding-right",i).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(m.STICKY_CONTENT).each(function(n,r){var i=e(r)[0].style.marginRight,o=e(r).css("margin-right")
e(r).data("margin-right",i).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")}),e(m.NAVBAR_TOGGLER).each(function(n,r){var i=e(r)[0].style.marginRight,o=e(r).css("margin-right")
e(r).data("margin-right",i).css("margin-right",parseFloat(o)+t._scrollbarWidth+"px")})
var n=document.body.style.paddingRight,r=e(document.body).css("padding-right")
e(document.body).data("padding-right",n).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}},g._resetScrollbar=function(){e(m.FIXED_CONTENT).each(function(t,n){var r=e(n).data("padding-right")
void 0!==r&&e(n).css("padding-right",r).removeData("padding-right")}),e(m.STICKY_CONTENT+", "+m.NAVBAR_TOGGLER).each(function(t,n){var r=e(n).data("margin-right")
void 0!==r&&e(n).css("margin-right",r).removeData("margin-right")})
var t=e(document.body).data("padding-right")
void 0!==t&&e(document.body).css("padding-right",t).removeData("padding-right")},g._getScrollbarWidth=function(){var e=document.createElement("div")
e.className=c,document.body.appendChild(e)
var t=e.getBoundingClientRect().width-e.clientWidth
return document.body.removeChild(e),t},r._jQueryInterface=function(t,n){return this.each(function(){var i=e(this).data("bs.modal"),o=s({},r.Default,e(this).data(),"object"==typeof t&&t)
if(i||(i=new r(this,o),e(this).data("bs.modal",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"')
i[t](n)}else o.show&&i.show(n)})},i(r,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return o}}]),r}()
return e(document).on(u.CLICK_DATA_API,m.DATA_TOGGLE,function(t){var n,r=this,i=a.getSelectorFromElement(this)
i&&(n=e(i)[0])
var o=e(n).data("bs.modal")?"toggle":s({},e(n).data(),e(this).data())
"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault()
var l=e(n).one(u.SHOW,function(t){t.isDefaultPrevented()||l.one(u.HIDDEN,function(){e(r).is(":visible")&&r.focus()})})
g._jQueryInterface.call(e(n),o,this)}),e.fn.modal=g._jQueryInterface,e.fn.modal.Constructor=g,e.fn.modal.noConflict=function(){return e.fn.modal=r,g._jQueryInterface},g}(t),h=function(e){var t="tooltip",r=".bs.tooltip",o=e.fn[t],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),u={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},p={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},d="show",f="out",h={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,INSERTED:"inserted"+r,CLICK:"click"+r,FOCUSIN:"focusin"+r,FOCUSOUT:"focusout"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r},m="fade",g="show",v=".tooltip-inner",b=".arrow",y="hover",E="focus",T="click",_="manual",A=function(){function o(e,t){if(void 0===n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)")
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var A=o.prototype
return A.enable=function(){this._isEnabled=!0},A.disable=function(){this._isEnabled=!1},A.toggleEnabled=function(){this._isEnabled=!this._isEnabled},A.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,r=e(t.currentTarget).data(n)
r||(r=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,r)),r._activeTrigger.click=!r._activeTrigger.click,r._isWithActiveTrigger()?r._enter(null,r):r._leave(null,r)}else{if(e(this.getTipElement()).hasClass(g))return void this._leave(null,this)
this._enter(null,this)}},A.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},A.show=function(){var t=this
if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements")
var r=e.Event(this.constructor.Event.SHOW)
if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(r)
var i=e.contains(this.element.ownerDocument.documentElement,this.element)
if(r.isDefaultPrevented()||!i)return
var o=this.getTipElement(),s=a.getUID(this.constructor.NAME)
o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&e(o).addClass(m)
var l="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,u=this._getAttachment(l)
this.addAttachmentClass(u)
var c=!1===this.config.container?document.body:e(this.config.container)
e(o).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(o).appendTo(c),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,o,{placement:u,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:b},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(o).addClass(g),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop)
var p=function(){t.config.animation&&t._fixTransition()
var n=t._hoverState
t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===f&&t._leave(null,t)}
if(e(this.tip).hasClass(m)){var d=a.getTransitionDurationFromElement(this.tip)
e(this.tip).one(a.TRANSITION_END,p).emulateTransitionEnd(d)}else p()}},A.hide=function(t){var n=this,r=this.getTipElement(),i=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==d&&r.parentNode&&r.parentNode.removeChild(r),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}
if(e(this.element).trigger(i),!i.isDefaultPrevented()){if(e(r).removeClass(g),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,this._activeTrigger[y]=!1,e(this.tip).hasClass(m)){var s=a.getTransitionDurationFromElement(r)
e(r).one(a.TRANSITION_END,o).emulateTransitionEnd(s)}else o()
this._hoverState=""}},A.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},A.isWithContent=function(){return Boolean(this.getTitle())},A.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},A.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},A.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(v),this.getTitle()),t.removeClass(m+" "+g)},A.setElementContent=function(t,n){var r=this.config.html
"object"==typeof n&&(n.nodeType||n.jquery)?r?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[r?"html":"text"](n)},A.getTitle=function(){var e=this.element.getAttribute("data-original-title")
return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},A._getAttachment=function(e){return c[e.toUpperCase()]},A._setListeners=function(){var t=this
this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)})
else if(n!==_){var r=n===y?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i=n===y?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT
e(t.element).on(r,t.config.selector,function(e){return t._enter(e)}).on(i,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},A._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},A._enter=function(t,n){var r=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(r))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(r,n)),t&&(n._activeTrigger["focusin"===t.type?E:y]=!0),e(n.getTipElement()).hasClass(g)||n._hoverState===d?n._hoverState=d:(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===d&&n.show()},n.config.delay.show):n.show())},A._leave=function(t,n){var r=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(r))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(r,n)),t&&(n._activeTrigger["focusout"===t.type?E:y]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===f&&n.hide()},n.config.delay.hide):n.hide())},A._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0
return!1},A._getConfig=function(n){return"number"==typeof(n=s({},this.constructor.Default,e(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),a.typeCheckConfig(t,n,this.constructor.DefaultType),n},A._getDelegateConfig=function(){var e={}
if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t])
return e},A._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(l)
null!==n&&n.length>0&&t.removeClass(n.join(""))},A._handlePopperPlacementChange=function(e){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},A._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation
null===t.getAttribute("x-placement")&&(e(t).removeClass(m),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),r="object"==typeof t&&t
if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,r),e(this).data("bs.tooltip",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}})},i(o,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return p}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return h}},{key:"EVENT_KEY",get:function(){return r}},{key:"DefaultType",get:function(){return u}}]),o}()
return e.fn[t]=A._jQueryInterface,e.fn[t].Constructor=A,e.fn[t].noConflict=function(){return e.fn[t]=o,A._jQueryInterface},A}(t),m=function(e){var t="popover",n=".bs.popover",r=e.fn[t],o=new RegExp("(^|\\s)bs-popover\\S+","g"),a=s({},h.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),l=s({},h.DefaultType,{content:"(string|element|function)"}),u="fade",c="show",p=".popover-header",d=".popover-body",f={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},m=function(r){var s,h
function m(){return r.apply(this,arguments)||this}h=r,(s=m).prototype=Object.create(h.prototype),s.prototype.constructor=s,s.__proto__=h
var g=m.prototype
return g.isWithContent=function(){return this.getTitle()||this._getContent()},g.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},g.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},g.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(p),this.getTitle())
var n=this._getContent()
"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(d),n),t.removeClass(u+" "+c)},g._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},g._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(o)
null!==n&&n.length>0&&t.removeClass(n.join(""))},m._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),r="object"==typeof t?t:null
if((n||!/destroy|hide/.test(t))&&(n||(n=new m(this,r),e(this).data("bs.popover",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}})},i(m,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return a}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return f}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return l}}]),m}(h)
return e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=r,m._jQueryInterface},m}(t),g=function(e){var t="scrollspy",n=e.fn[t],r={offset:10,method:"auto",target:""},o={offset:"number",method:"string",target:"(string|element)"},l={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},u="dropdown-item",c="active",p={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",f="position",h=function(){function n(t,n){var r=this
this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+p.NAV_LINKS+","+this._config.target+" "+p.LIST_ITEMS+","+this._config.target+" "+p.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(l.SCROLL,function(e){return r._process(e)}),this.refresh(),this._process()}var h=n.prototype
return h.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?d:f,r="auto"===this._config.method?n:this._config.method,i=r===f?this._getScrollTop():0
this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var n,o=a.getSelectorFromElement(t)
if(o&&(n=e(o)[0]),n){var s=n.getBoundingClientRect()
if(s.width||s.height)return[e(n)[r]().top+i,o]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},h.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},h._getConfig=function(n){if("string"!=typeof(n=s({},r,n)).target){var i=e(n.target).attr("id")
i||(i=a.getUID(t),e(n.target).attr("id",i)),n.target="#"+i}return a.typeCheckConfig(t,n,o),n},h._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},h._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},h._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},h._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight()
if(this._scrollHeight!==t&&this.refresh(),e>=n){var r=this._targets[this._targets.length-1]
this._activeTarget!==r&&this._activate(r)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear()
for(var i=this._offsets.length;i--;){this._activeTarget!==this._targets[i]&&e>=this._offsets[i]&&(void 0===this._offsets[i+1]||e<this._offsets[i+1])&&this._activate(this._targets[i])}}},h._activate=function(t){this._activeTarget=t,this._clear()
var n=this._selector.split(",")
n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})
var r=e(n.join(","))
r.hasClass(u)?(r.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(c),r.addClass(c)):(r.addClass(c),r.parents(p.NAV_LIST_GROUP).prev(p.NAV_LINKS+", "+p.LIST_ITEMS).addClass(c),r.parents(p.NAV_LIST_GROUP).prev(p.NAV_ITEMS).children(p.NAV_LINKS).addClass(c)),e(this._scrollElement).trigger(l.ACTIVATE,{relatedTarget:t})},h._clear=function(){e(this._selector).filter(p.ACTIVE).removeClass(c)},n._jQueryInterface=function(t){return this.each(function(){var r=e(this).data("bs.scrollspy")
if(r||(r=new n(this,"object"==typeof t&&t),e(this).data("bs.scrollspy",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"')
r[t]()}})},i(n,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return r}}]),n}()
return e(window).on(l.LOAD_DATA_API,function(){for(var t=e.makeArray(e(p.DATA_SPY)),n=t.length;n--;){var r=e(t[n])
h._jQueryInterface.call(r,r.data())}}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=n,h._jQueryInterface},h}(t),v=function(e){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},r="dropdown-menu",o="active",s="disabled",l="fade",u="show",c=".dropdown",p=".nav, .list-group",d=".active",f="> li > .active",h='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',m=".dropdown-toggle",g="> .dropdown-menu .active",v=function(){function t(e){this._element=e}var h=t.prototype
return h.show=function(){var t=this
if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(o)||e(this._element).hasClass(s))){var r,i,l=e(this._element).closest(p)[0],u=a.getSelectorFromElement(this._element)
if(l){var c="UL"===l.nodeName?f:d
i=(i=e.makeArray(e(l).find(c)))[i.length-1]}var h=e.Event(n.HIDE,{relatedTarget:this._element}),m=e.Event(n.SHOW,{relatedTarget:i})
if(i&&e(i).trigger(h),e(this._element).trigger(m),!m.isDefaultPrevented()&&!h.isDefaultPrevented()){u&&(r=e(u)[0]),this._activate(this._element,l)
var g=function(){var r=e.Event(n.HIDDEN,{relatedTarget:t._element}),o=e.Event(n.SHOWN,{relatedTarget:i})
e(i).trigger(r),e(t._element).trigger(o)}
r?this._activate(r,r.parentNode,g):g()}}},h.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},h._activate=function(t,n,r){var i=this,o=("UL"===n.nodeName?e(n).find(f):e(n).children(d))[0],s=r&&o&&e(o).hasClass(l),u=function(){return i._transitionComplete(t,o,r)}
if(o&&s){var c=a.getTransitionDurationFromElement(o)
e(o).one(a.TRANSITION_END,u).emulateTransitionEnd(c)}else u()},h._transitionComplete=function(t,n,i){if(n){e(n).removeClass(u+" "+o)
var s=e(n.parentNode).find(g)[0]
s&&e(s).removeClass(o),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(o),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),a.reflow(t),e(t).addClass(u),t.parentNode&&e(t.parentNode).hasClass(r)){var l=e(t).closest(c)[0]
l&&e(l).find(m).addClass(o),t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.tab")
if(i||(i=new t(this),r.data("bs.tab",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),t}()
return e(document).on(n.CLICK_DATA_API,h,function(t){t.preventDefault(),v._jQueryInterface.call(e(this),"show")}),e.fn.tab=v._jQueryInterface,e.fn.tab.Constructor=v,e.fn.tab.noConflict=function(){return e.fn.tab=t,v._jQueryInterface},v}(t);(function(e){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
var t=e.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")})(t),e.Util=a,e.Alert=l,e.Button=u,e.Carousel=c,e.Collapse=p,e.Dropdown=d,e.Modal=f,e.Popover=m,e.Scrollspy=g,e.Tab=v,e.Tooltip=h,Object.defineProperty(e,"__esModule",{value:!0})}),define("ember-cli-shims/deprecations",[],function(){var e={"ember-application":{default:["@ember/application"]},"ember-array":{default:["@ember/array"]},"ember-array/mutable":{default:["@ember/array/mutable"]},"ember-array/utils":{A:["@ember/array","A"],isEmberArray:["@ember/array","isArray"],wrap:["@ember/array","makeArray"]},"ember-component":{default:["@ember/component"]},"ember-components/checkbox":{default:["@ember/component/checkbox"]},"ember-components/text-area":{default:["@ember/component/text-area"]},"ember-components/text-field":{default:["@ember/component/text-field"]},"ember-controller":{default:["@ember/controller"]},"ember-controller/inject":{default:["@ember/controller","inject"]},"ember-controller/proxy":{default:["@ember/array/proxy"]},"ember-debug":{log:["@ember/debug","debug"],inspect:["@ember/debug","inspect"],run:["@ember/debug","runInDebug"],warn:["@ember/debug","warn"]},"ember-debug/container-debug-adapter":{default:["@ember/debug/container-debug-adapter"]},"ember-debug/data-adapter":{default:["@ember/debug/data-adapter"]},"ember-deprecations":{deprecate:["@ember/application/deprecations","deprecate"],deprecateFunc:["@ember/application/deprecations","deprecateFunc"]},"ember-enumerable":{default:["@ember/enumerable"]},"ember-evented":{default:["@ember/object/evented"]},"ember-evented/on":{default:["@ember/object/evented","on"]},"ember-globals-resolver":{default:["@ember/application/globals-resolver"]},"ember-helper":{default:["@ember/component/helper"],helper:["@ember/component/helper","helper"]},"ember-instrumentation":{instrument:["@ember/instrumentation","instrument"],reset:["@ember/instrumentation","reset"],subscribe:["@ember/instrumentation","subscribe"],unsubscribe:["@ember/instrumentation","unsubscribe"]},"ember-locations/hash":{default:["@ember/routing/hash-location"]},"ember-locations/history":{default:["@ember/routing/history-location"]},"ember-locations/none":{default:["@ember/routing/none-location"]},"ember-map":{default:["@ember/map"],withDefault:["@ember/map/with-default"]},"ember-metal/events":{addListener:["@ember/object/events","addListener"],removeListener:["@ember/object/events","removeListener"],send:["@ember/object/events","sendEvent"]},"ember-metal/get":{default:["@ember/object","get"],getProperties:["@ember/object","getProperties"]},"ember-metal/mixin":{default:["@ember/object/mixin"]},"ember-metal/observer":{default:["@ember/object","observer"],addObserver:["@ember/object/observers","addObserver"],removeObserver:["@ember/object/observers","removeObserver"]},"ember-metal/on-load":{default:["@ember/application","onLoad"],run:["@ember/application","runLoadHooks"]},"ember-metal/set":{default:["@ember/object","set"],setProperties:["@ember/object","setProperties"],trySet:["@ember/object","trySet"]},"ember-metal/utils":{aliasMethod:["@ember/object","aliasMethod"],assert:["@ember/debug","assert"],cacheFor:["@ember/object/internals","cacheFor"],copy:["@ember/object/internals","copy"],guidFor:["@ember/object/internals","guidFor"]},"ember-object":{default:["@ember/object"]},"ember-owner/get":{default:["@ember/application","getOwner"]},"ember-owner/set":{default:["@ember/application","setOwner"]},"ember-platform":{assign:["@ember/polyfills","assign"],create:["@ember/polyfills","create"],hasAccessors:["@ember/polyfills","hasPropertyAccessors"],keys:["@ember/polyfills","keys"]},"ember-route":{default:["@ember/routing/route"]},"ember-router":{default:["@ember/routing/router"]},"ember-runloop":{default:["@ember/runloop","run"],begin:["@ember/runloop","begin"],bind:["@ember/runloop","bind"],cancel:["@ember/runloop","cancel"],debounce:["@ember/runloop","debounce"],end:["@ember/runloop","end"],join:["@ember/runloop","join"],later:["@ember/runloop","later"],next:["@ember/runloop","next"],once:["@ember/runloop","once"],schedule:["@ember/runloop","schedule"],scheduleOnce:["@ember/runloop","scheduleOnce"],throttle:["@ember/runloop","throttle"]},"ember-service":{default:["@ember/service"]},"ember-service/inject":{default:["@ember/service","inject"]},"ember-string":{camelize:["@ember/string","camelize"],capitalize:["@ember/string","capitalize"],classify:["@ember/string","classify"],dasherize:["@ember/string","dasherize"],decamelize:["@ember/string","decamelize"],fmt:["@ember/string","fmt"],htmlSafe:["@ember/string","htmlSafe"],loc:["@ember/string","loc"],underscore:["@ember/string","underscore"],w:["@ember/string","w"]},"ember-utils":{isBlank:["@ember/utils","isBlank"],isEmpty:["@ember/utils","isEmpty"],isNone:["@ember/utils","isNone"],isPresent:["@ember/utils","isPresent"],tryInvoke:["@ember/utils","tryInvoke"],typeOf:["@ember/utils","typeOf"]},"ember-computed":{default:["@ember/object","computed"],empty:["@ember/object/computed","empty"],notEmpty:["@ember/object/computed","notEmpty"],none:["@ember/object/computed","none"],not:["@ember/object/computed","not"],bool:["@ember/object/computed","bool"],match:["@ember/object/computed","match"],equal:["@ember/object/computed","equal"],gt:["@ember/object/computed","gt"],gte:["@ember/object/computed","gte"],lt:["@ember/object/computed","lt"],lte:["@ember/object/computed","lte"],alias:["@ember/object/computed","alias"],oneWay:["@ember/object/computed","oneWay"],reads:["@ember/object/computed","reads"],readOnly:["@ember/object/computed","readOnly"],deprecatingAlias:["@ember/object/computed","deprecatingAlias"],and:["@ember/object/computed","and"],or:["@ember/object/computed","or"],collect:["@ember/object/computed","collect"],sum:["@ember/object/computed","sum"],min:["@ember/object/computed","min"],max:["@ember/object/computed","max"],map:["@ember/object/computed","map"],sort:["@ember/object/computed","sort"],setDiff:["@ember/object/computed","setDiff"],mapBy:["@ember/object/computed","mapBy"],mapProperty:["@ember/object/computed","mapProperty"],filter:["@ember/object/computed","filter"],filterBy:["@ember/object/computed","filterBy"],filterProperty:["@ember/object/computed","filterProperty"],uniq:["@ember/object/computed","uniq"],union:["@ember/object/computed","union"],intersect:["@ember/object/computed","intersect"]},"ember-test/adapter":{default:["@ember/test/adapter"]}}
return Object.defineProperty(e,"__esModule",{value:!0}),e}),function(){function e(e,t,n){define(e,["ember-cli-shims/deprecations"],function(r){"use strict"
if(n){var i=r[e],o="Importing from the `"+e+"` module has been deprecated. "
i?(o+="Please use the new module imports:\n\n",Object.keys(i).forEach(function(e){var t=i[e]
if(t[1])o+="import { "+t[1]+" } from '"+t[0]+"'\n"
else{var n=Ember.String.classify(t[0].split("/").pop())
o+="import "+n+" from '"+t[0]+"'\n"}}),o+="\n"):o+="Please use globals instead.",Ember.deprecate(o,!1,{id:"ember-cli-shims.deprecated-shims",until:"3.0.0",url:"https://github.com/emberjs/rfcs/blob/master/text/0176-javascript-module-api.md"})}return Object.defineProperty(t,"__esModule",{value:!0}),t})}e("ember",{default:Ember}),function(){var t={"ember-application":{default:Ember.Application},"ember-array":{default:Ember.Array},"ember-array/mutable":{default:Ember.MutableArray},"ember-array/utils":{A:Ember.A,isEmberArray:Ember.isArray,wrap:Ember.makeArray},"ember-component":{default:Ember.Component},"ember-components/checkbox":{default:Ember.Checkbox},"ember-components/text-area":{default:Ember.TextArea},"ember-components/text-field":{default:Ember.TextField},"ember-controller":{default:Ember.Controller},"ember-controller/inject":{default:Ember.inject.controller},"ember-controller/proxy":{default:Ember.ArrayProxy},"ember-controllers/sortable":{default:Ember.SortableMixin},"ember-debug":{log:Ember.debug,inspect:Ember.inspect,run:Ember.runInDebug,warn:Ember.warn},"ember-debug/container-debug-adapter":{default:Ember.ContainerDebugAdapter},"ember-debug/data-adapter":{default:Ember.DataAdapter},"ember-deprecations":{deprecate:Ember.deprecate,deprecateFunc:Ember.deprecateFunc},"ember-enumerable":{default:Ember.Enumerable},"ember-evented":{default:Ember.Evented},"ember-evented/on":{default:Ember.on},"ember-globals-resolver":{default:Ember.DefaultResolver},"ember-helper":{default:Ember.Helper,helper:Ember.Helper&&Ember.Helper.helper},"ember-instrumentation":{instrument:Ember.Instrumentation.instrument,reset:Ember.Instrumentation.reset,subscribe:Ember.Instrumentation.subscribe,unsubscribe:Ember.Instrumentation.unsubscribe},"ember-locations/hash":{default:Ember.HashLocation},"ember-locations/history":{default:Ember.HistoryLocation},"ember-locations/none":{default:Ember.NoneLocation},"ember-map":{default:Ember.Map,withDefault:Ember.MapWithDefault},"ember-metal/destroy":{default:Ember.destroy},"ember-metal/events":{addListener:Ember.addListener,removeListener:Ember.removeListener,send:Ember.sendEvent},"ember-metal/get":{default:Ember.get,getProperties:Ember.getProperties},"ember-metal/mixin":{default:Ember.Mixin},"ember-metal/observer":{default:Ember.observer,addObserver:Ember.addObserver,removeObserver:Ember.removeObserver},"ember-metal/on-load":{default:Ember.onLoad,run:Ember.runLoadHooks},"ember-metal/set":{default:Ember.set,setProperties:Ember.setProperties,trySet:Ember.trySet},"ember-metal/utils":{aliasMethod:Ember.aliasMethod,assert:Ember.assert,cacheFor:Ember.cacheFor,copy:Ember.copy,guidFor:Ember.guidFor},"ember-object":{default:Ember.Object},"ember-owner/get":{default:Ember.getOwner},"ember-owner/set":{default:Ember.setOwner},"ember-platform":{assign:Ember.assign||Ember.merge,create:Ember.create,defineProperty:Ember.platform.defineProperty,hasAccessors:Ember.platform.hasPropertyAccessors,keys:Ember.keys},"ember-route":{default:Ember.Route},"ember-router":{default:Ember.Router},"ember-runloop":{default:Ember.run,begin:Ember.run.begin,bind:Ember.run.bind,cancel:Ember.run.cancel,debounce:Ember.run.debounce,end:Ember.run.end,join:Ember.run.join,later:Ember.run.later,next:Ember.run.next,once:Ember.run.once,schedule:Ember.run.schedule,scheduleOnce:Ember.run.scheduleOnce,throttle:Ember.run.throttle},"ember-service":{default:Ember.Service},"ember-service/inject":{default:Ember.inject.service},"ember-set/ordered":{default:Ember.OrderedSet},"ember-string":{camelize:Ember.String.camelize,capitalize:Ember.String.capitalize,classify:Ember.String.classify,dasherize:Ember.String.dasherize,decamelize:Ember.String.decamelize,fmt:Ember.String.fmt,htmlSafe:Ember.String.htmlSafe,loc:Ember.String.loc,underscore:Ember.String.underscore,w:Ember.String.w},"ember-utils":{isBlank:Ember.isBlank,isEmpty:Ember.isEmpty,isNone:Ember.isNone,isPresent:Ember.isPresent,tryInvoke:Ember.tryInvoke,typeOf:Ember.typeOf}}
t["ember-computed"]={default:Ember.computed}
for(var n=["empty","notEmpty","none","not","bool","match","equal","gt","gte","lt","lte","alias","oneWay","reads","readOnly","deprecatingAlias","and","or","collect","sum","min","max","map","sort","setDiff","mapBy","mapProperty","filter","filterBy","filterProperty","uniq","union","intersect"],r=0,i=n.length;r<i;r++){var o=n[r]
t["ember-computed"][o]=Ember.computed[o]}for(var s in t)e(s,t[s],!0)}(),function(){if(Ember.Test){var t={"ember-test":{default:Ember.Test},"ember-test/adapter":{default:Ember.Test.Adapter},"ember-test/qunit-adapter":{default:Ember.Test.QUnitAdapter}}
for(var n in t)e(n,t[n])}}(),e("jquery",{default:self.jQuery}),e("rsvp",{default:Ember.RSVP})}(),createDeprecatedModule("ember/resolver"),createDeprecatedModule("resolver"),define("ember-ajax/-private/promise",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
var n=function(e){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,Ember.RSVP.Promise),t(n,[{key:"then",value:function(){var e=function e(t,n,r){null===t&&(t=Function.prototype)
var i=Object.getOwnPropertyDescriptor(t,n)
if(void 0===i){var o=Object.getPrototypeOf(t)
return null===o?void 0:e(o,n,r)}if("value"in i)return i.value
var s=i.get
return void 0!==s?s.call(r):void 0}(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"then",this).apply(this,arguments)
return e.xhr=this.xhr,e}}]),n}()
e.default=n}),define("ember-ajax/-private/utils/get-header",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){if(Ember.isNone(e)||Ember.isNone(t))return
var n=Ember.A(Object.keys(e)).find(function(e){return e.toLowerCase()===t.toLowerCase()})
return e[n]}}),define("ember-ajax/-private/utils/is-fastboot",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t="undefined"!=typeof FastBoot
e.default=t}),define("ember-ajax/-private/utils/is-string",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return"string"==typeof e}}),define("ember-ajax/-private/utils/parse-response-headers",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var n={}
if(!e)return n
return e.split(t).reduce(function(e,t){var n,r=t.split(":"),i=(n=r,Array.isArray(n)?n:Array.from(n)),o=i[0],s=i.slice(1)
return o=o.trim(),(s=s.join(":").trim())&&(e[o]=s),e},n)}
var t=e.CRLF="\r\n"})
define("ember-ajax/-private/utils/url-helpers",["exports","require","ember-ajax/-private/utils/is-fastboot"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.parseURL=s,e.isFullURL=function(e){return e.match(r)},e.haveSameHost=function(e,t){return e=s(e),t=s(t),e.protocol===t.protocol&&e.hostname===t.hostname&&e.port===t.port}
var r=/^(http|https)/,i="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),o=n.default?URL:i?(0,t.default)("url"):document.createElement("a")
function s(e){var t=void 0
i||n.default?t=o.parse(e):(o.href=e,t=o)
var r={}
return r.href=t.href,r.protocol=t.protocol,r.hostname=t.hostname,r.port=t.port,r.pathname=t.pathname,r.search=t.search,r.hash=t.hash,r}}),define("ember-ajax/ajax-request",["exports","ember-ajax/mixins/ajax-request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Object.extend(t.default)}),define("ember-ajax/errors",["exports"],function(e){"use strict"
function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Ajax operation failed",n=arguments[2]
Ember.Error.call(this,t),this.payload=e,this.status=n}function n(e){t.call(this,e,"Request was rejected because it was invalid",422)}function r(e){t.call(this,e,"Ajax authorization failed",401)}function i(e){t.call(this,e,"Request was rejected because user is not permitted to perform this operation.",403)}function o(e){t.call(this,e,"Request was formatted incorrectly.",400)}function s(e){t.call(this,e,"Resource was not found.",404)}function a(){t.call(this,null,"The ajax operation timed out",-1)}function l(){t.call(this,null,"The ajax operation was aborted",0)}function u(e){t.call(this,e,"The ajax operation failed due to a conflict",409)}function c(e,n){t.call(this,e,"Request was rejected due to server error",n)}function p(e){return e instanceof t}Object.defineProperty(e,"__esModule",{value:!0}),e.AjaxError=t,e.InvalidError=n,e.UnauthorizedError=r,e.ForbiddenError=i,e.BadRequestError=o,e.NotFoundError=s,e.TimeoutError=a,e.AbortError=l,e.ConflictError=u,e.ServerError=c,e.isAjaxError=p,e.isUnauthorizedError=function(e){return p(e)?e instanceof r:401===e},e.isForbiddenError=function(e){return p(e)?e instanceof i:403===e},e.isInvalidError=function(e){return p(e)?e instanceof n:422===e},e.isBadRequestError=function(e){return p(e)?e instanceof o:400===e},e.isNotFoundError=function(e){return p(e)?e instanceof s:404===e},e.isTimeoutError=function(e){return e instanceof a},e.isAbortError=function(e){return p(e)?e instanceof l:0===e},e.isConflictError=function(e){return p(e)?e instanceof u:409===e},e.isServerError=function(e){return p(e)?e instanceof c:e>=500&&e<600},e.isSuccess=function(e){var t=parseInt(e,10)
return t>=200&&t<300||304===t},t.prototype=Object.create(Ember.Error.prototype),n.prototype=Object.create(t.prototype),r.prototype=Object.create(t.prototype),i.prototype=Object.create(t.prototype),o.prototype=Object.create(t.prototype),s.prototype=Object.create(t.prototype),a.prototype=Object.create(t.prototype),l.prototype=Object.create(t.prototype)
u.prototype=Object.create(t.prototype),c.prototype=Object.create(t.prototype)}),define("ember-ajax/index",["exports","ember-ajax/request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-ajax/mixins/ajax-request",["exports","ember-ajax/errors","ember-ajax/utils/ajax","ember-ajax/-private/utils/parse-response-headers","ember-ajax/-private/utils/get-header","ember-ajax/-private/utils/url-helpers","ember-ajax/-private/utils/is-string","ember-ajax/-private/promise"],function(e,t,n,r,i,o,s,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=Ember.Logger,c=Ember.Test,p=/^application\/(?:vnd\.api\+)?json/i
function d(e){return!!(0,s.default)(e)&&!!e.match(p)}function f(e){return"/"===e.charAt(0)}function h(e){return e.substring(1)}function m(e){var t
return f(e)&&(e=h(e)),"/"===(t=e).charAt(t.length-1)&&(e=e.slice(0,-1)),e}var g=0
Ember.testing&&c.registerWaiter(function(){return 0===g}),e.default=Ember.Mixin.create({contentType:"application/x-www-form-urlencoded; charset=UTF-8",headers:{},request:function(e,t){var n=this.options(e,t),r=this._makeRequest(n),i=new a.default(function(e,t){r.then(function(t){var n=t.response
e(n)}).catch(function(e){var n=e.response
t(n)})},"ember-ajax: "+n.type+" "+n.url+" response")
return i.xhr=r.xhr,i},raw:function(e,t){var n=this.options(e,t)
return this._makeRequest(n)},_makeRequest:function(e){var o=this,s=e.method||e.type||"GET",u={method:s,type:s,url:e.url};(function(e,t){var n=t.contentType,r=t.data,o=t.headers
return"GET"!==e&&!(!d(n)&&!d((0,i.default)(o,"Content-Type")))&&"object"===(void 0===r?"undefined":l(r))})(s,e)&&(e.data=JSON.stringify(e.data)),g+=1
var c=(0,n.default)(e),p=new a.default(function(e,n){c.done(function(i,s,a){var l=o.handleResponse(a.status,(0,r.default)(a.getAllResponseHeaders()),i,u);(0,t.isAjaxError)(l)?Ember.run.join(null,n,{payload:i,textStatus:s,jqXHR:a,response:l}):Ember.run.join(null,e,{payload:i,textStatus:s,jqXHR:a,response:l})}).fail(function(e,i,s){Ember.runInDebug(function(){"parsererror"===i&&e.responseText})
var a=o.parseErrorResponse(e.responseText)||s,l=void 0
l=s instanceof Error?s:"timeout"===i?new t.TimeoutError:"abort"===i?new t.AbortError:o.handleResponse(e.status,(0,r.default)(e.getAllResponseHeaders()),a,u),Ember.run.join(null,n,{payload:a,textStatus:i,jqXHR:e,errorThrown:s,response:l})}).always(function(){g-=1})},"ember-ajax: "+e.type+" "+e.url)
return p.xhr=c,p},post:function(e,t){return this.request(e,this._addTypeToOptionsFor(t,"POST"))},put:function(e,t){return this.request(e,this._addTypeToOptionsFor(t,"PUT"))},patch:function(e,t){return this.request(e,this._addTypeToOptionsFor(t,"PATCH"))},del:function(e,t){return this.request(e,this._addTypeToOptionsFor(t,"DELETE"))},delete:function(){return this.del.apply(this,arguments)},get:function(e){if(arguments.length>1||-1!==e.indexOf("/"))throw new Ember.Error("It seems you tried to use `.get` to make a request! Use the `.request` method instead.")
return this._super.apply(this,arguments)},_addTypeToOptionsFor:function(e,t){return(e=e||{}).type=t,e},_getFullHeadersHash:function(e){var t=Ember.get(this,"headers"),n=Ember.merge({},t)
return Ember.merge(n,e)},options:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t=Ember.merge({},t),t.url=this._buildURL(e,t),t.type=t.type||"GET",t.dataType=t.dataType||"json",t.contentType=Ember.isEmpty(t.contentType)?Ember.get(this,"contentType"):t.contentType,this._shouldSendHeaders(t)?t.headers=this._getFullHeadersHash(t.headers):t.headers=t.headers||{},t},_buildURL:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if((0,o.isFullURL)(e))return e
var n=[],r=t.host||Ember.get(this,"host")
r&&(r=m(r)),n.push(r)
var i=t.namespace||Ember.get(this,"namespace")
return i&&(i=m(i),n.push(i)),new RegExp("^(/)?"+i).test(e)?e:(f(e)&&(e=h(e)),n.push(e),n.join("/"))},handleResponse:function(e,t,n,r){return this.isSuccess(e,t,n)?n:(n=this.normalizeErrorResponse(e,t,n),this._createCorrectError(e,t,n,r))},_createCorrectError:function(e,n,r,i){var o=void 0
if(this.isUnauthorizedError(e,n,r))o=new t.UnauthorizedError(r)
else if(this.isForbiddenError(e,n,r))o=new t.ForbiddenError(r)
else if(this.isInvalidError(e,n,r))o=new t.InvalidError(r)
else if(this.isBadRequestError(e,n,r))o=new t.BadRequestError(r)
else if(this.isNotFoundError(e,n,r))o=new t.NotFoundError(r)
else if(this.isAbortError(e,n,r))o=new t.AbortError(r)
else if(this.isConflictError(e,n,r))o=new t.ConflictError(r)
else if(this.isServerError(e,n,r))o=new t.ServerError(r,e)
else{var s=this.generateDetailedMessage(e,n,r,i)
o=new t.AjaxError(r,s,e)}return o},_matchHosts:function(e,t){return t.constructor===RegExp?t.test(e):"string"==typeof t?t===e:(u.warn("trustedHosts only handles strings or regexes.",t,"is neither."),!1)},_shouldSendHeaders:function(e){var t=this,n=e.url,r=e.host
n=n||"",r=r||Ember.get(this,"host")||""
var i=Ember.get(this,"trustedHosts")||Ember.A(),s=(0,o.parseURL)(n).hostname
return!(0,o.isFullURL)(n)||(!!i.find(function(e){return t._matchHosts(s,e)})||(0,o.haveSameHost)(n,r))},generateDetailedMessage:function(e,t,n,r){var o=void 0,s=(0,i.default)(t,"Content-Type")||"Empty Content-Type"
return o="text/html"===s.toLowerCase()&&n.length>250?"[Omitted Lengthy HTML]":JSON.stringify(n),["Ember AJAX Request "+(r.type+" "+r.url)+" returned a "+e,"Payload ("+s+")",o].join("\n")},isUnauthorizedError:function(e){return(0,t.isUnauthorizedError)(e)},isForbiddenError:function(e){return(0,t.isForbiddenError)(e)},isInvalidError:function(e){return(0,t.isInvalidError)(e)},isBadRequestError:function(e){return(0,t.isBadRequestError)(e)},isNotFoundError:function(e){return(0,t.isNotFoundError)(e)},isAbortError:function(e){return(0,t.isAbortError)(e)},isConflictError:function(e){return(0,t.isConflictError)(e)},isServerError:function(e){return(0,t.isServerError)(e)},isSuccess:function(e){return(0,t.isSuccess)(e)},parseErrorResponse:function(e){try{return JSON.parse(e)}catch(t){return e}},normalizeErrorResponse:function(e,t,n){return n}})}),define("ember-ajax/mixins/ajax-support",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Mixin.create({ajaxService:Ember.inject.service("ajax"),host:Ember.computed.alias("ajaxService.host"),namespace:Ember.computed.alias("ajaxService.namespace"),headers:Ember.computed.alias("ajaxService.headers"),ajax:function(e){var t=this.ajaxOptions.apply(this,arguments)
return this.get("ajaxService").request(e,t)}})}),define("ember-ajax/mixins/legacy/normalize-error-response",["exports","ember-ajax/-private/utils/is-string"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
function r(e){return"object"===(void 0===e?"undefined":n(e))}e.default=Ember.Mixin.create({normalizeErrorResponse:function(e,n,i){return i=Ember.isNone(i)?{}:i,Ember.isArray(i.errors)?i.errors.map(function(t){if(r(t)){var n=Ember.merge({},t)
return n.status=""+t.status,n}return{status:""+e,title:t}}):Ember.isArray(i)?i.map(function(t){return r(t)?{status:""+e,title:t.title||"The backend responded with an error",detail:t}:{status:""+e,title:""+t}}):(0,t.default)(i)?[{status:""+e,title:i}]:[{status:""+e,title:i.title||"The backend responded with an error",detail:i}]}})}),define("ember-ajax/raw",["exports","ember-ajax/ajax-request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=new t.default
return e.raw.apply(e,arguments)}}),define("ember-ajax/request",["exports","ember-ajax/ajax-request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=new t.default
return e.request.apply(e,arguments)}}),define("ember-ajax/services/ajax",["exports","ember-ajax/mixins/ajax-request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Service.extend(t.default)}),define("ember-ajax/utils/ajax",["exports","ember-ajax/-private/utils/is-fastboot"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default?najax:Ember.$.ajax}),define("ember-cli-app-version/initializer-factory",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,n){var r=!1
return function(){if(!r&&e&&n){var i=Ember.String.classify(e)
t.register(i,n),r=!0}}}
var t=Ember.libraries}),define("ember-cli-app-version/utils/regexp",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.versionRegExp=/\d+[.]\d+[.]\d+/,e.versionExtendedRegExp=/\d+[.]\d+[.]\d+-[a-z]*([.]\d+)?/,e.shaRegExp=/[a-z\d]{8}$/}),define("ember-font-awesome/components/fa-icon",["exports","ember-font-awesome/utils/try-match"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.computed,r=Ember.deprecate,i=Ember.get,o=Ember.getWithDefault,s=Ember.isArray,a=Ember.Component.extend({tagName:"i",classNames:["fa"],classNameBindings:["iconCssClass","flipCssClass","rotateCssClass","sizeCssClass","pullCssClass","stackCssClass","spin:fa-spin","fixedWidth:fa-fw","listItem:fa-li","border:fa-border","pulse:fa-pulse","inverse:fa-inverse"],attributeBindings:["ariaLabel:aria-label","ariaHiddenAttribute:aria-hidden","title","style"],didReceiveAttrs:function(){this._super.apply(this,arguments),this.checkDeprecations()},style:n("color",function(){var e=i(this,"color")
if(e)return Ember.String.htmlSafe("color:"+e)}),iconCssClass:n("icon","params.[]",function(){var e=i(this,"icon"),n=i(this,"params")
if(e=e||s(n)&&n[0])return(0,t.default)(e,/^fa-/)?e:"fa-"+e}),flipCssClass:n("flip",function(){var e=i(this,"flip")
if(e)return(0,t.default)(e,/^fa-flip/)?e:"fa-flip-"+e}),rotateCssClass:n("rotate",function(){var e=i(this,"rotate")
if(e)return(0,t.default)(e,/^fa-rotate/)?e:"fa-rotate-"+e}),sizeCssClass:n("size",function(){var e=i(this,"size")
if(e)return(0,t.default)(e,/^fa-/)?e:(0,t.default)(e,/(?:lg|x)$/)?"fa-"+e:"fa-"+e+"x"}),pullCssClass:n("pull",function(){var e=i(this,"pull")
if(e)return"fa-pull-"+e}),stackCssClass:n("stack",function(){var e=i(this,"stack")
if(e)return(0,t.default)(e,/^fa-/)?e:(0,t.default)(e,/x$/)?"fa-stack-"+e:"fa-stack-"+e+"x"}),ariaHiddenAttribute:n("ariaHidden",function(){return!1!==i(this,"ariaHidden")?"true":void 0}),checkDeprecations:function(){var e=i(this,"icon"),t=i(this,"params"),n=e||s(t)&&t[0]
if(n&&n.startsWith&&n.startsWith("fa-")){var a=n.substring(3)
r("Passing the icon prefixed with 'fa-' ("+n+") is deprecated and will be removed in v4. Use '"+a+"' instead.",!1,{id:"ember-font-awesome.no-fa-prefix",until:"4.0.0"})}var l=o(this,"size","").toString()
if(l.endsWith&&l.endsWith("x")){var u=l.substring(0,l.length-1)
r("Passing 'size' as '"+l+"' to fa-icon is deprecated and will be removed in v4. Use size='"+u+"' instead",!1,{id:"ember-font-awesome.no-size-suffix",until:"4.0.0"})}}})
a.reopenClass({positionalParams:"params"}),e.default=a}),define("ember-font-awesome/components/fa-list",["exports","ember-font-awesome/templates/components/fa-list"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({layout:t.default,tagName:"ul",classNames:"fa-ul"})}),define("ember-font-awesome/components/fa-stack",["exports","ember-font-awesome/utils/try-match","ember-font-awesome/templates/components/fa-stack"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.computed,i=Ember.get
e.default=Ember.Component.extend({layout:n.default,tagName:"span",classNames:"fa-stack",classNameBindings:["sizeCssClass"],sizeCssClass:r("size",function(){var e=i(this,"size")
if(e)return(0,t.default)(e,/^fa-/)?e:(0,t.default)(e,/(?:lg|x)$/)?"fa-"+e:"fa-"+e+"x"})})}),define("ember-font-awesome/templates/components/fa-list",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"L9V0cgPK",block:'{"symbols":["&default"],"statements":[[13,1,[[26,"hash",null,[["fa-icon"],[[26,"component",["fa-icon"],[["listItem"],[true]]]]]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-font-awesome/templates/components/fa-list.hbs"}})}),define("ember-font-awesome/templates/components/fa-stack",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"wpQwG5hC",block:'{"symbols":["&default"],"statements":[[13,1,[[26,"hash",null,[["stack-1x","stack-2x"],[[26,"component",["fa-icon"],[["stack"],["1"]]],[26,"component",["fa-icon"],[["stack"],["2"]]]]]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-font-awesome/templates/components/fa-stack.hbs"}})}),define("ember-font-awesome/utils/try-match",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){return"string"==typeof e&&e.match(t)}}),define("ember-froala-editor/components/froala-content",["exports","ember-froala-editor/templates/components/froala-content"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Component.extend({layout:t.default,classNames:["fr-view"]})
n.reopenClass({positionalParams:["content"]}),e.default=n}),define("ember-froala-editor/components/froala-editor",["exports","ember-froala-editor/templates/components/froala-editor"],function(e,t){"use strict"
function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Component.extend({layout:t.default,classNames:["froala-editor-container"],mergedProperties:["options"],editorSelector:"div.froala-editor-instance",eventPrefix:"froalaEditor.",updateEvent:"contentChanged",returnSafeString:Ember.computed("content",{get:function(){return Ember.String.isHTMLSafe(this.get("content"))}}),fastboot:Ember.computed({get:function(){return Ember.getOwner(this).lookup("service:fastboot")}}),_content:Ember.computed("content",{get:function(){var e=this.get("content")
return e&&"function"==typeof e.toString?e.toString():""}}),_options:Ember.computed("options","_attributeOptions",{get:function(){var e=Ember.getOwner(this).resolveRegistration("config:environment")
return Ember.assign({},Ember.getWithDefault(e,"ember-froala-editor",{}),this.getWithDefault("options",{}),this.get("_attributeOptions"))}}),_attributeOptions:Ember.computed({get:function(){var e={}
for(var t in this)Ember.$.FroalaEditor.DEFAULTS.hasOwnProperty(t)&&(e[t]=this.get(t))
return e}}),editor:Ember.computed.readOnly("_editor"),editorInitializing:Ember.computed.readOnly("_editorInitializing"),editorInitialized:Ember.computed.readOnly("_editorInitialized"),editorDestroying:Ember.computed.readOnly("_editorDestroying"),editorDestroyed:Ember.computed.not("editorInitialized"),init:function(){this._super.apply(this,arguments),this.set("_editor",null),this.set("_editorInitializing",!1),this.set("_editorInitialized",!1),this.set("_editorDestroying",!1),this.set("_initPromises",[]),this.set("_templateContent",this.get("_content"))},didInsertElement:function(){this._super.apply(this,arguments),Ember.run.schedule("afterRender",this,this.initEditor)},didUpdateAttrs:function(){this._super.apply(this,arguments)
var e=this.get("_editor"),t=this.get("_content")
this.get("fastboot")?t!==this.get("_templateContent")&&this.set("_templateContent",t):e&&t!==e.html.get()?e.html.set(t):e||t===this.$(this.get("editorSelector")).html()?this.notifyPropertyChange("_attributeOptions"):this.$(this.get("editorSelector")).html(t)},willDestroyElement:function(){this._super.apply(this,arguments),this.destroyEditor()},initEditor:function(){if(!this.get("_editorInitialized")&&!this.get("_editorInitializing")){this.set("_editorInitializing",!0)
var e=this.get("_options"),t=this.$(this.get("editorSelector"))
t.one(this.get("eventPrefix")+(e.initOnClick?"initializationDelayed":"initialized"),Ember.run.bind(this,"didInitEditor")),t.froalaEditor(e)}},reinitEditor:function(){this.destroyEditor(),this.initEditor()},destroyEditor:function(){this.get("_editorInitialized")&&!this.get("_editorDestroying")&&(this.set("_editorDestroying",!0),this.$(this.get("editorSelector")).froalaEditor("destroy"))},didInitEditor:function(e,t){this.set("_editor",t)
var r=this.get("_options.initOnClick")?"on-initializationDelayed":"on-initialized",i=/(^on-|-getHtml$)/g,o=/-/g,s=/\./g
for(var a in this)if(0===a.indexOf("on-")&&0!==a.indexOf(r)){var l=a
if(0===(l=(l=l.replace(i,"")).replace(o,".")).indexOf("popups.hide.")){var u=l.replace("popups.hide.","")
l="popups.hide.["+(u=u.replace(s,"-"))+"]"}var c=a.indexOf("-getHtml",-8);-1!==c&&c===a.length-8?t.events.on(l,Ember.run.bind(this,this.didEditorEventReturnHtml,a,t),!0):t.events.on(l,Ember.run.bind(this,this.didEditorEvent,a),!0)}var p=this.get("update"),d=this.get("updateEvent")
p&&d&&t.events.on(d,Ember.run.bind(this,this.didEditorEventReturnHtml,"update",t),!0),t.events.on("destroy",Ember.run.bind(this,this.didDestroyEditor,t),!1),this.get("_initPromises").forEach(function(e){return e()}),this.set("_initPromises",[]),this.set("_editorInitializing",!1),this.set("_editorInitialized",!0)
for(var f=arguments.length,h=Array(f>2?f-2:0),m=2;m<f;m++)h[m-2]=arguments[m]
this.get(r)&&this.didEditorEvent.apply(this,[r].concat(n(h))),this.get(r+"-getHtml")&&this.didEditorEventReturnHtml.apply(this,[r+"-getHtml",t].concat(n(h)))},didDestroyEditor:function(){this.set("_editor",null),this.set("_editorDestroying",!1),this.set("_editorInitialized",!1)},didEditorEvent:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i]
if("function"==typeof this[e])return this[e].apply(this,[this].concat(n(r)))
this.sendAction.apply(this,[e,this].concat(n(r)))},didEditorEventReturnHtml:function(e,t){var r=t.html.get()
this.get("returnSafeString")&&(r=Ember.String.htmlSafe(r))
for(var i=arguments.length,o=Array(i>2?i-2:0),s=2;s<i;s++)o[s-2]=arguments[s]
if("function"==typeof this[e])return this[e].apply(this,[r,this].concat(n(o)))
this.sendAction.apply(this,[e,r,this].concat(n(o)))},method:function(e){var t=this,n=arguments,r="froala-editor: "
"reinit"===e?r+="Reninit method() call, waiting for the editor to initialize":this.get("_editorInitialized")?r+="Call editor method() '"+e+"'":r+="Delayed method() call to '"+e+"', waiting for editor to initialize"
var i=new Ember.RSVP.Promise(function(r,i){if("reinit"===e)t.get("_initPromises").push(r),t.reinitEditor()
else if(t.get("_editorInitialized"))try{var o
r((o=t.$(t.get("editorSelector"))).froalaEditor.apply(o,n))}catch(e){i(e)}else t.get("_initPromises").push(r)},r)
return"reinit"===e||this.get("_editorInitialized")||i.then(function(){return new Ember.RSVP.Promise(function(e,r){try{var i
e((i=t.$(t.get("editorSelector"))).froalaEditor.apply(i,n))}catch(e){r(e)}},"froala-editor: Delayed method() call to '"+e+"', calling froala-editor method")}),i},actions:{method:function(){this.method.apply(this,arguments)}}})
r.reopenClass({positionalParams:["content","update","options"]}),e.default=r}),define("ember-froala-editor/helpers/froala-method",["exports"],function(e){"use strict"
function t(e,t){var n,r=(n=e,Array.isArray(n)?n:Array.from(n)),i=r[0],o=r.slice(1)
return function(e){for(var n in t){var r=o.indexOf(n),s=parseInt(t[n]);-1!==r&&arguments.length>=s&&(o[r]=arguments[s-1])}e.send.apply(e,["method",i].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(o)))}}Object.defineProperty(e,"__esModule",{value:!0}),e.froalaMethod=t,e.default=Ember.Helper.helper(t)}),define("ember-froala-editor/helpers/merged-hash",["exports"],function(e){"use strict"
function t(e,t){return e.length>0?Ember.assign.apply(void 0,[{}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(e),[t])):t}Object.defineProperty(e,"__esModule",{value:!0}),e.mergedHash=t,e.default=Ember.Helper.helper(t)}),define("ember-froala-editor/templates/components/froala-content",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"LBpPiGGV",block:'{"symbols":["&default"],"statements":[[1,[20,"content"],true],[0,"\\n"],[13,1],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-froala-editor/templates/components/froala-content.hbs"}})}),define("ember-froala-editor/templates/components/froala-editor",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"Wag2Xmct",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","froala-editor-instance"],[8],[1,[20,"_templateContent"],true],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-froala-editor/templates/components/froala-editor.hbs"}})}),define("ember-load-initializers/index",["exports"],function(e){"use strict"
function t(e){var t=require(e,null,null,!0)
if(!t)throw new Error(e+" must export an initializer.")
var n=t.default
return n.name||(n.name=e.slice(e.lastIndexOf("/")+1)),n}function n(e,t){return-1!==e.indexOf(t,e.length-t.length)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r){for(var i=r+"/initializers/",o=r+"/instance-initializers/",s=[],a=[],l=Object.keys(requirejs._eak_seen),u=0;u<l.length;u++){var c=l[u]
0===c.lastIndexOf(i,0)?n(c,"-test")||s.push(c):0===c.lastIndexOf(o,0)&&(n(c,"-test")||a.push(c))}(function(e,n){for(var r=0;r<n.length;r++)e.initializer(t(n[r]))})(e,s),function(e,n){for(var r=0;r<n.length;r++)e.instanceInitializer(t(n[r]))}(e,a)}}),define("ember-resolver/features",[],function(){"use strict"}),define("ember-resolver/index",["exports","ember-resolver/resolvers/classic"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-resolver/resolver",["exports","ember-resolver/resolvers/classic"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-resolver/resolvers/classic/container-debug-adapter",["exports","ember-resolver/resolvers/classic/index"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.ContainerDebugAdapter
function r(e,t,n){var r=t.match(new RegExp("^/?"+n+"/(.+)/"+e+"$"))
if(null!==r)return r[1]}e.default=n.extend({_moduleRegistry:null,init:function(){this._super.apply(this,arguments),this._moduleRegistry||(this._moduleRegistry=new t.ModuleRegistry)},canCatalogEntriesByType:function(e){return"model"===e||this._super.apply(this,arguments)},catalogEntriesByType:function(e){for(var t=this._moduleRegistry.moduleNames(),n=Ember.A(),i=this.namespace.modulePrefix,o=0,s=t.length;o<s;o++){var a=t[o]
if(-1!==a.indexOf(e)){var l=r(e,a,this.namespace.podModulePrefix||i)
l||(l=a.split(e+"s/").pop()),n.addObject(l)}}return n}})})
define("ember-resolver/resolvers/classic/index",["exports","ember-resolver/utils/class-factory","ember-resolver/utils/make-dictionary"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.ModuleRegistry=void 0,void 0===requirejs.entries&&(requirejs.entries=requirejs._eak_seen)
var r=e.ModuleRegistry=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._entries=t||requirejs.entries}return e.prototype.moduleNames=function(){return Object.keys(this._entries)},e.prototype.has=function(e){return e in this._entries},e.prototype.get=function(e){return require(e)},e}(),i=Ember.String,o=i.underscore,s=i.classify,a=i.dasherize,l=Ember.get
function u(e){Ember.assert("`modulePrefix` must be defined",this.namespace.modulePrefix)
var n=this.findModuleName(e)
if(n){var r=this._extractDefaultExport(n,e)
if(void 0===r)throw new Error(" Expected to find: '"+e.fullName+"' within '"+n+"' but got 'undefined'. Did you forget to 'export default' within '"+n+"'?")
return this.shouldWrapInClassFactory(r,e)&&(r=(0,t.default)(r)),r}return this._super(e)}var c=Ember.DefaultResolver.extend({resolveOther:u,parseName:function(e){if(!0===e.parsedName)return e
var t=void 0,n=void 0,r=void 0,i=e.split("@")
if("helper:@content-helper"!==e&&2===i.length){var o=i[0].split(":")
if(2===o.length)t=o[1],n=o[0],r=i[1]
else{var a=i[1].split(":")
t=i[0],n=a[0],r=a[1]}"template"===n&&0===t.lastIndexOf("components/",0)&&(r="components/"+r,t=t.slice(11))}else n=(i=e.split(":"))[0],r=i[1]
var u=r,c=l(this,"namespace")
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:n}),type:n,fullNameWithoutType:u,name:r,root:c,resolveMethodName:"resolve"+s(n)}},resolveTemplate:u,pluralizedTypes:null,moduleRegistry:null,makeToString:function(e,t){return this.namespace.modulePrefix+"@"+t+":"},shouldWrapInClassFactory:function(){return!1},init:function(){this._super(),this.moduleBasedResolver=!0,this._moduleRegistry||(this._moduleRegistry=new r),this._normalizeCache=(0,n.default)(),this.pluralizedTypes=this.pluralizedTypes||(0,n.default)(),this.pluralizedTypes.config||(this.pluralizedTypes.config="config"),this._deprecatedPodModulePrefix=!1},normalize:function(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))},_normalize:function(e){var t=e.split(":")
return t.length>1?"helper"===t[0]?t[0]+":"+t[1].replace(/_/g,"-"):t[0]+":"+a(t[1].replace(/\./g,"/")):e},pluralize:function(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")},podBasedLookupWithPrefix:function(e,t){var n=t.fullNameWithoutType
return"template"===t.type&&(n=n.replace(/^components\//,"")),e+"/"+n+"/"+t.type},podBasedModuleName:function(e){var t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)},podBasedComponentsInSubdir:function(e){var t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)},resolveEngine:function(e){var t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)},resolveRouteMap:function(e){var t=e.fullNameWithoutType,n=t+"/routes"
if(this._moduleRegistry.has(n)){var r=this._extractDefaultExport(n)
return Ember.assert("The route map for "+t+" should be wrapped by 'buildRoutes' before exporting.",r.isRouteMap),r}},mainModuleName:function(e){var t=e.prefix+"/"+e.type
if("main"===e.fullNameWithoutType)return t},defaultModuleName:function(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType},prefix:function(e){var t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t},moduleNameLookupPatterns:Ember.computed(function(){return[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName]}).readOnly(),findModuleName:function(e,t){for(var n=this.get("moduleNameLookupPatterns"),r=void 0,i=0,o=n.length;i<o;i++){var s=n[i].call(this,e)
if(s&&(s=this.chooseModuleName(s,e)),s&&this._moduleRegistry.has(s)&&(r=s),t||this._logLookup(r,e,s),r)return r}},chooseModuleName:function(e,t){var n=this,r=o(e)
if(e!==r&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(r))throw new TypeError("Ambiguous module names: '"+e+"' and '"+r+"'")
if(this._moduleRegistry.has(e))return e
if(this._moduleRegistry.has(r))return r
var i=e.replace(/\/-([^/]*)$/,"/_$1")
if(this._moduleRegistry.has(i))return Ember.deprecate('Modules should not contain underscores. Attempted to lookup "'+e+'" which was not found. Please rename "'+i+'" to "'+e+'" instead.',!1,{id:"ember-resolver.underscored-modules",until:"3.0.0"}),i
Ember.runInDebug(function(){"helper"===t.type&&/[a-z]+[A-Z]+/.test(e)&&(n._camelCaseHelperWarnedNames=n._camelCaseHelperWarnedNames||[],!(n._camelCaseHelperWarnedNames.indexOf(t.fullName)>-1)&&n._moduleRegistry.has(a(e))&&(n._camelCaseHelperWarnedNames.push(t.fullName),Ember.warn('Attempted to lookup "'+t.fullName+'" which was not found. In previous versions of ember-resolver, a bug would have caused the module at "'+a(e)+'" to be returned for this camel case helper name. This has been fixed. Use the dasherized name to resolve the module that would have been returned in previous versions.',!1,{id:"ember-resolver.camelcase-helper-names",until:"3.0.0"})))})},lookupDescription:function(e){var t=this.parseName(e)
return this.findModuleName(t,!0)},_logLookup:function(e,t,n){if(Ember.ENV.LOG_MODULE_RESOLVER||t.root.LOG_RESOLVER){var r=void 0,i=e?"[✓]":"[ ]"
r=t.fullName.length>60?".":new Array(60-t.fullName.length).join("."),n||(n=this.lookupDescription(t)),console&&console.info&&console.info(i,t.fullName,r,n)}},knownForType:function(e){for(var t=this._moduleRegistry.moduleNames(),r=(0,n.default)(),i=0,o=t.length;i<o;i++){var s=t[i],a=this.translateToContainerFullname(e,s)
a&&(r[a]=!0)}return r},translateToContainerFullname:function(e,t){var n=this.prefix({type:e}),r=n+"/",i="/"+e,o=t.indexOf(r),s=t.indexOf(i)
if(0===o&&s===t.length-i.length&&t.length>r.length+i.length)return e+":"+t.slice(o+r.length,s)
var a=n+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(a)&&t.length>a.length?e+":"+t.slice(a.length):void 0},_extractDefaultExport:function(e){var t=require(e,null,null,!0)
return t&&t.default&&(t=t.default),t}})
c.reopenClass({moduleBasedResolver:!0}),e.default=c}),define("ember-resolver/utils/class-factory",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return{create:function(t){return"function"==typeof e.extend?e.extend(t):e}}}}),define("ember-resolver/utils/make-dictionary",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=Object.create(null)
return e._dict=null,delete e._dict,e}})