// ==UserScript==
// @name		KiavErep
// @namespace		edited by KiavashMaz
// @description		eRepublik Persian translate
// @version		Ver 3.0.06
// @include		http://*.erepublik.com/*
// @exclude     http://wiki.erepublik.com/*
// @exclude     http://forum.erepublik.com/*
// @require        http://sizzlemctwizzle.com/updater.php?id=99397&days=1&show
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @require        http://jquery-json.googlecode.com/files/jquery.json-2.2.min.js


// ==/UserScript==



/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();

//var $ = unsafeWindow.jQuery;

var VERSION = '2.1.06';

var strings = {
	"% of votes" : "% راي ها",
	"6-30 characters max" : "حداکثر 6 تا 30 کاراکتر",
	"1-80 characters max" : "حداکثر يک تا 80 کاراکتر",
	"ACCEPTED" : "پذيرفته شد",
	"Accepted" : "پذيرفته شد",
	"Accepted invites" : "دعوت نامه هاي قبول شده",
	"Accounts" : "اکانت ها",
	"A newspaper is an efficient way to communicate your news to the eRepublik world. Read more on the eRepublik Wiki. Create your own newspaper." : "روزنامه مکانيست کي مي توانيد اخبار ايريپابليک را منتشر کنيد. براي اطلاعات بيشتر به ويکي سايت مراجعه کنيد. روزنامه خود را بسازيد",
	"Achievements" : "دستاوردها",
	"active battles " : "نبردهاي فعال",
	"Active wars list" : "ليست جنگ هاي فعال",
	"Add a job offer" : "افزودن پيشنهاد کار",
	"Add as a friend" : "اضافه کردن در ليست دوستان",
	"Administration" : "مديريت",
	"ADMINISTARATION CENTER" : "مرکز مديريت",
	"Advanced 250 strength points" : "به دست آوردن 250 قدرت بدني",
	"Advance 250 strength points" : "به دست آوردن 250 قدرت بدني",
	"Invited 10 people to eRepublik and helped them reach level 10" : "10 دعوت کردن 10 نفر بازيکن جديد به جمهوري مجازي و کمک کردن به آن‌ها براي رسيدن به سطح",
	"regions." : "منطقه.",
	"Advertising Department" : "بخش تبليغات",
	"Affiliates" : "وابستگي ها",
	"Add from address book" : "از ليست دفتر شماره اضافه کن",
	"Add contacts:" : "افزودن راه تماس:",
	"Add" : "اضافه",
	"Alerts" : "هشدارها",
	"All accounts"  : "همه اکانت ها",
	"All Alliances" : "تمامي دوستان",
	"All countries" : "تمامي کشورها",
	"All donations" : "همه بخشش ها",
	"all donations" : "همه بخشش ها",
	"All employees" : "همه کارمندان",
	"All levels" : "تمامي سطوح",
	"All regions" : "همه مناطق",
	"All resistance wars" : "تمامي انقلاب ها",
	"All skills" : "همه تجربه ها",
	"All invites" : "همه دعوت ها",
	"All industries" : "همه صنايع",
	"All wars" : "تمامي جنگ ها",
	"Alliance" : "اتحاد",
	"Alliances" : "متحدين",
	"Amazing fight" : "مبارزه شگفت انگيزي بود",

	"Ambassador" : "سفير",
	"Amount" : "مقدار",
	"Amount to buy" : "مقدار خريد",
	"Anarchist" : "آشوبگر",
	"Apply" : "اجرا کن",
	"Approved" : "تصويب شد",
	"Approved on" : "تصويب شد در",
	"Approved by" : "تصويب شد توسط",
	"Argentina" : "آرژانتين",
	"Army" : "ارتش",
	"Article" : "مقاله",
	"Article RSS" : "آر.اس.اس مقاله",
	"Assets" : "دارايي",
	"A taste of what you can do in eRepublik" : "گوشه اي از کارهايي که مي توانيد در ايريپابليک انجام دهيد.",
	"Attackable on President's decision" : "با فرمان رئيس جمهور حمله صورت خواهد پذيرفت",
	"Attention: NO VAT tax for Raw materials" : "توجه: ماليات بر ارزش افزوده اي نيست",
	"August" : "آگوست",
	"Australia" : "استراليا",
	"Austria" : "اتريش",
	"Average" : "متوسط",
	"Average Citizen level" : "متوسط لول شهروندي",
	"Average citizen level" : "متوسط لول شهروندي",
	"Average strength" : "متوسط قدرت بدني",
	"Back" : "بازگشت",
	"Basic productivity" : "توليد پايه",
	"Back to army" : "بازگشت به صفحه ارتش",
	"Back to company" : "بازگشت به صفحه کارخانه",
	"Back to battlefield" : "بازگشت به صحنه نبرد",

	"Basic damage" : "ضربه پايه",
	"Battle Hero" : "قهرمان مبارزه",
	"Battle hero" : "قهرمان مبارزه",
	"Campaign Hero" : "قهرمان نبرد",
	"Campaign hero" : "قهرمان نبرد",
	"Battle History" : "تاريخ نبرد",
	"Battle history" : "تاريخ نبرد",
	"Battles you can fight in" : "نبردهايي که مي توانيد در آن بجنگيد",
	"Belgium" : "بلژيک",
	"Be a chat room owner" : "صاحب اتاق گفتمان خود شويد!",
	"Bio" : "بيوگرافي",
	"Bolivia" : "بوليوي",
	"BORDER AREA" : "منطقه مرزي",
	"Bosnia and Herzegovina" : "بوسني و هرزگويين",
	"Brazil" : "برزيل",
	"Bulgaria" : "بلغارستان",
	"Buy" : "خريد",
	"Buy Constructions" : " خريد سازه و ساخت ",
	"Buy Constructions: Defense System" : " خريد سازه و ساخت : سيستم دفاعي ",
	"Buy Constructions: Hospital" : " خريد سازه و ساخت : بيمارستان ",
	"Buy export license" : " خريد مجوز صادرات ",
	"Get Extra Storage" : "دريافت ظرفيت بيشتر",
	"Buy from market" : " خريد از بازار ",
	"Buy market license" : " خريد مجوز بازار ",
	"Buy raw materials" : " خريد مواد خام ",
	"Buy wellness" : " خريد سلامتي ",
	"Buy Wellness Box" : " خريد جعبه سلامتي ",
	"builder" : "سازنده",
	"BY SALES" : "فروش توسط",
	"Canada" : " کانادا ",
	"Candidate" : " کانديد ",
	"CAPITAL" : "پايتخت",
	//"Captain" : " سروان ",
	"CAPTURED" : "تسخير شده ",
	"Career" : "حرفه",
	"Career path" : " مسير شغلي ",
	"Center" : "مرکز",
	"candidate" : "کانديدا",
	"Center, Authoritarian" : "ديکتاتوري بي طرف",
	"Center-left, Libertarian" : "ليبرال چپ گرا",
	"Center, Libertarian" : "ليبرال بي طرف",
	"Center-right, Libertarian" : "ليبرال راست گرا",
	"Chat rooms" : "اتاق هاي گفتمان",
	"Chat room" : "اتاق گفتمان",
	"Change" : "تغيير",
	"Change the location of your newspaper" : " تغيير كشور روزنامه شما ",
	"Change password" : " تغيير رمز عبور ",
	"Change residence" : " تغيير محل اقامت ",
	"Check your unlocked features" : " ويژگي هاي باز شده خودرا بررسي کنيد ",
	"Check rankings" : "چک کردن رتبه",
	"Choose a training program" : "انتخاب برنامه تمرين",
	"Choose industry" : "انتخاب صنعت",
	"Chile" : "شيلي",
	"China" : "چين",
	"Citizen" : "شهروند",
	"Citizenship bonus" : "امتياز شهروندي",
	"Citizen Avatar" : "تصوير شهروند",
	"Citizen name" : "نام شهروند",
	"Citizen fee" : "هزينه پايه شهروند",
	"Citizen permanently suspended for multiple accounts." : "شهروند ، بطور دائم براي داشتن حسابهاي متعدد به حالت تعليق درامده.",
	"Citizens" : "شهروندان",
	"Citizenship" : "تابعيت",
	"Citizenship applications" : "برنامه تابعيت",
	"Citizenship requests" : "درخواست تابعيت",
	"CITY" : "شهر",
	//"Collect" : "جمع کن",
	"Colombia" : "کلمبيا", 
	//"Colonel" : "سرهنگ",
	"Come back tomorrow." : "فردا برگرديد.",
	"Companies" : "کارخانه ها",
	"Companies for sale" : "کارخانه هاي فروشي",
	"Company" : "کارخانه", 
	"Company accounts" : "اکانت کارخانه",
	"Company details" : "اطلاعات کارخانه", 
	"Company page" : "صفحه کارخانه",
	"Company market" : "بازار کارخانه",
	"Company name" : "نام کارخانه",
	"Company logo" : "برند کارخانه",
	"Community" : "جامعه",
	"Conquer" : "فتح شدن",
	"Continue" : "ادامه بده",
	"Congress" : " مجلس ",
	"Congress Elections" : " انتخابات مجلس ",
	"Congress Member" : " عضو مجلس ",
	"Congress member candidates" : " کانديداهاي عضويت مجلس ",
	" congress members" : "اعضاي مجلس",
	"Constructions": "ساخت و ساز",
	"Contact": "تماس",
	"Copyright" : "حق انتشار",
	//"Corporal" : "سرجوخه",
	"Corporate career" : "مهارت هاي مشترک",
	"Cost" : "بها", 
	"Countries" : "کشورها",
	"Country" : "کشورها",
	"Country stats" : "وضعيت کشورها",
	"Country - Society" : "کشور - جامعه",
	"Country Administration" : "مديريت کشور",
	"Country administration" : "مديريت کشور",
	"Country Presidency" : "رياست جمهوري",
	"Country presidency" : "رياست جمهوري",
	"Country President" : "رئيس جمهور",
	"Country trading embargoes" : "تحريم اقتصادي کشور",
	"Create" : "ساخت",
	"Create company" : "تاسيس کارخانه",
	"Create chat room" : "ايجاد اتاق گفتمان",
	"Create new" : "ساختن جديد",
	"Create new company" : "تاسيس کارخانه جديد",
	"Create newspaper" : "ساخت روزنامه",
	"Croatia" : "کرواسي",
	"Current location" : "مکان کنوني",
	"Current password" : "رمز عبور کنوني",
	"Current national goals" : "وعده هاي انتخاباتي کنوني",
	"Czech Republic" : "جمهوري چک",
	"Day" : "روز ",
	"days ago" : "روز پيش",
	"Date sent" : "تاريخ ارسال",
	"Daily salary" : "حقوق روزانه",
	"Dead citizen" : "شهروند مرده",
	"Debate Area" : "محل بحث",
	"December" : "دسامبر",
	"Declare War" : "اعلام جنگ صورت گرفت",
	"Defense Points" : "امتياز دفاعي",
	"Defense System" : "سيستم دفاعي",
	"Defense system" : "سيستم دفاعي",
	"defense system" : "سيستم دفاعي",
	"Description" : "توضيح",
	"Delete" : "حذف",
	"Denmark" : "دانمارک",
	"details" : "اطلاعات",
	"Diamonds" : "الماس",
	"diamonds" : "الماس",
	"Disscusion Area" : "محل بحث",
	"Discussion area" : "محل بحث",
	"Do you want the current president of Iran to end this office?" : "آيا مايل به برکناري رئيس جمهوري کنوني ايران هستيد؟",
	"Donate" : "اهدا",
	"Donate Gold" : "اهداي طلا",
	"Donate raw materials" : "اهداي مواد اوليه",
	"Donation" : "اهدا",
	"Donations list" : "ليست اهداها",
	"Drag and drop items from your inventory to the donation area" : "اقلام مورد نظر را از كالاهاي خود به مكان اهدا كشيده و رها كنيد.",
	"Economic stats" : "وضعيت اقتصادي",
	"Economical orientation" : "جهت گيري اقتصادي",
	"Economy" : "اقتصاد",
	"Emails to be invited: " : "دعوت از طريق نامه:",
	"Email" : "پست الکترونيکي",
	"Edit" : "ويرايش",
	"Edit details" : "ويرايش اطلاعات",
	"Edit newspaper details" : "ويرايش اطلاعات روزنامه",
	"edit profile" : "ويرايش پروفايل",
	"Edit profile" : "ويرايش پروفايل",
	"Edit Profile" : "ويرايش پروفايل",
	"Election results" : "نتايج انتخابات",
	"Election" : "انتخابات",
	"Elections" : "انتخابات ها",
	"Email must be valid for registration, so do not cheat." : "ايميلي که براي عضويت استفاده مي کنيد بايد واقعي باشد بنابر اين تقلب نکنيد.",
	"Employee" : "کارمند",
	"Employees" : "کارمندان",
	"eRepublik Birthday" : "روز تولد ايريپابليکي",
	"Erepublik Age" : "سن ايريپابليکي",
	"eRepublik Laws" : "قوانين ايريپابليک",
	"Estonia" : "استوني",
	"Everyone" : "همه",
	"Exchange rate" : "نرخ معامله",
	"Experience" : "تجربه",
	"Experience points" : "ميزان تجربه",
	"Experience level" : "سطح تجربه",
	"Experience gain" : "تجربه بدست آمده",
	"Expires tomorrow" : "فردا منقضي مي شود",
	"Expires in one month" : "يک ماه بعد منقضي مي شود",
	"Exports" : "صادرات",
	"Far-right, Authoritarian" : "ديکتاتوري راست گراي افراطي",
	"Far-left, Libertarian" : "ليبرال چپ گراي افراطي",
	"Favorites" : "علاقه منديها",
	"Featured Chat Room" : "اتاق هاي گفتمان مورد علاقه",
	"Featured rooms" : "اتاق هاي منتخب",
	//"Field Marshal" : "سپهبد",
	//"Field Marshall" : "سپهبد",
	"Fight" : "مبارزه",
	"Fights" : "مبارزه ها",
	"Fight Again" : "دوباره مبارزه کن",
	"Fight bonus" : "پاداش مبارزه",
	"Finances" : "دارايي ها",
	"Final Results" : "نتايج نهايي",
	"Find out more" : "بيشتر بدانيد",
	"Find a job" : "شغلي بيابيد",
	"Find a job or own a company. Having a job will allow you to get a salary each day you go to work (don't worry, in eRepublik it is much more fun and faster to go to work than in real life)." : "کار کن يا کارخانه اي تاسيس کن. شغل به شما اجازه مي دهد هر روز حقوقي بگيريد.(نگران نباشيد، در ايريپابليک کار زودتر از زمان واقعي به پايان مي رسد)",
	"Finland" : "فنلاند",
	"Follow us" : "به دنبال ما بياييد",
	"Food" : "غذا",
	"food" : "غذا",
	"For the law to be considered accepted it needs 66% of the Congress votes" : "براي تصويب لايحه به بيش از دو سوم آرا نياز است (66%)",
	"For this law to be considered accepted it needs 66% of the Congress votes." : "براي تصويب اين لايحه به بيش از دو سوم آرا نياز است (66%)",
	"Force" : "نيرو",
	"Forfeit Points:" : "امتياز منفي:",
	"Forfeit Points" : "امتياز منفي:",
	"forum" : "تالار گفتمان",
	"Forum" : "تالار گفتمان",
	"France" : "فرانسه",
	"Friends" : "دوستان",
	"From" : "فرم",
	"Gain instant access to all features with" : "دسترسي به تمام امکانات با:",
	//"General" : "ژنرال",
	"General Manager" : "مدير",
	"General manager" : "مدير",
	"Germany" : "آلمان",
	"Get Extra Storage" : "دريافت ظرفيت بيشتر",
	"Get Gold" : "طلا بخر",
	"Get gold & extras" : "دريافت طلا و امکانات",
	"Get Wellness" : "دريافت سلامتي",
	"Gift" : "هديه",
	"gift" : "هديه",
	"Go to Battlefield" : "وارد صحنه نبرد شو",
	"Go to marketplace" : "به مغازه برو",
    "Gold and Extras" : "طلا و امکانات اضافي",

	"Goals" : "اهداف",
	"Grain" : "گندم",
	"grain" : "گندم",
	"Great fight" : "مبارزه عالي بود",
	"Greece" : "يونان",
	"Greece:" : "يونان:",
	"Gross domestic product (GDP)" : "توليد خالص داخلي",
	"Guest" : "ميهمان",
	"has been secured by" : "حفظ شده توسط",
	"Hard Worker" : "سخت کوش",
	"Hard worker" : "سخت کوش",
	"Having your own chat room allows you to administrate the discussions, assign moderators and provide an environment where citizens can socialize, interact and discuss upon the interesting topics of the New World." : "داشتن تالارگفتمان به شما اجازه مي دهد بحث هاي تالار خود را ويرايش کنيد.",
	"Having your own company may be a major source of wealth, but first you will need to make sure you have enough money to pay your future employees' salaries so that you don't go bankrupt." : "داشتن کارخانه شخصي مي تواند شما را ثروتمند کنيد، البته به شرطي که پول کافي براي دادن حقوق ها داشته باشيد تا ورشکست نشويد.",
	"Heal" : "درمان",
	"Hero" : "قهرمان",
	"hero" : "قهرمان",
	"High": "بالا",
	"Home" : "خانه",
	"Hospital" : "بيمارستان",
	"hospital" : "بيمارستان",
	"hours ago" : "ساعت پيش",
	"House" : "خانه",
	"house" : "خانه",
	"Hungary" : "مجارستان",
	"I have nothing more to say at the moment" : "چيزي براي گفتن ندارم!",
	"Import Tax" : "ماليات واردات",
	"Imports" : "واردات",
	"In order to log in as an organization you have to log out from your citizen account and log in again with your organization username and password." : "براي ورود به اکانت شرکت خود بايد ابتدا از اکانت شهرونديتان خارج شده و با نام کاربري و رمز عبور اکانت شرکتتان وارد شويد.",
	"Inbox" : "جعبه پيام ها",
	"Info" : "اطلاعات",
	"If you’ve sent an invitation to a Yahoo! email address, please note that we are currently experiencing difficulties with Yahoo! email delivery" : "اگر از آدرس پستي ياهو براي دعوت استفاده کرده ايد ممکن است پيام دير برسد چون سيستم ما با ياهو مشکاتي دارد!",
	"If an invite has not been received, you may want to consider the following:" : "اگر دعوت نامه شما ارسال نشد بايد راهکار هاي زير را در نظر بگيريد:",
	"Income Tax" : "ماليات بر درآمد(دستمزد)",
	"India" : "هند",
	"Indonesia" : "اندونزي",
	"Industry" : "صنعت",
	"Inflation" : "تورم",
	"International" : "بين المللي",
	"Invest" : "سرمايه گذاري",
	"Invite friends" : "دعوت دوستان",
	"Invite 10 people to eRepublik and help them reach level 6" : "ده نفر از مردم را دعوت کن و به آنها کمک کنيد تا به سطح 6 برسند:",

	"Iran" : "ايران",
	"Iran:" : ":ايران",
	"Invites status" : "وضعيت دعوت ها",
	"Ireland" : "ايرلند",
	"Invitations left: " : "دعوت نامه هاي مانده:",
	"invited via refferer link" : "دعوت با لينک شخصي",
	"Invites" : "دعوت ها",
	"Iron" : "آهن",
	"iron" : "آهن",
    "IRR" : "ريال ايران",
	"Israel" : "اسراييل",
	"Issue Money" : "چاپ پول",
	"Italy" : "ايتاليا",
	"Items" : "موارد",
	"items" : "موارد",
	"Japan" : "ژاپن",
	"Job market" : "بازار کار",
	"Jobs" : "شغل ها",
	"Jobs available in this company" : "کارهاي موجود در اين کارخانه",
	"Join" : "پيوستن",
	"Join another featured room" : "به اتاق گفتمان ديگري بپيوند",
	"Join a party" : "پيوستن به حزب",
	"Join party" : "به حزب بپيوند",
	"Jul" : "جولاي",
	"Land" : "کشاورزي",
	"Land skill" : "تجربه کشاورزي",
	"Last presence" : "آخرين حضور",
	"Latest" : "جديدترين ها",
	"Latest Events" : "آخرين وقايع",
	"Latest events" : "آخرين وقايع",
	"Latest news" : "آخرين اخبار",
	"Latvia" : "لاتويا",
	"Law proposals" : "لايحه پيشنهاد شده",
	"leader" : "رهبر",
	"Level 1" : "سطح 1",
	"Level" : "سطح",
	"Level 2" : "سطح 2",
	"Level 3" : "سطح 3",
	"Level 4" : "سطح 4",
	"Level 5" : "سطح 5",
	"Lithuania" : "لتوني",
	//"Lieutenant" : "ستوان",
	"Location" : "مکان",
	"Login" : "ورود",
	"Logout" : "خروج",
	"logout" : "خروج",
	"Make changes" : "تغيير بده",
	"Make sure you check the rankings and see what user generated rooms are \"on fire\"." : "",
	"Make sure your friend checks their spam folder" : "اطمينان حاصل کنيد که دوستتان جعبه هرزنامه هاي خود را کنترل مي کند.",
	"Malaysia" : "مالزي",
	"Manufacturing" : "صنعتي",
	"Market" : "بازار",
	"Markets" : "بازارها",
	"Market offers" : "پيشنهادات بازار",
	"Market place" : "فروشگاه",
	"Marketplace" : "فروشگاه",
	"manager" : "مدير",
	"Media career" : "مهارت رسانه اي",
	"Media Mogul" : "رسانه پرنفوذ",
	"Media mogul" : "رسانه پرنفوذ",
	"Medium" : "متوسط",
	"Member of" : "اعضاي",
	"Members"  : "اعضا",
	"My places" : "مکان هاي من",
	"My places > Army"  : "ارتش",
	"My places > Training grounds"  : "زمين تمرين",
	"My Party"  : "حزب من",
	"My places > Newspaper"  : "روزنامه",
	"My places > Organizations" : "اکانت شرکت",
	"My places > Company" : "کارخانه",
	"Mexico" : "مکزيک",
	"Military" : "نظامي",
	"Military achievements" : "دستاوردهاي نظامي",
	"Military career" : "مهارت نظامي",
	"Military force" : "نيروي نظامي",
	"Military rank" : "رتبه نظامي",
	"Military stats" : "وضعيت نظامي",
	"Minimum" : "حداقل",
	"Minimum country wage :" : "کمترين حقوق کشور",
	"Minimum skill" : "حداقل تجربه",
	"Minimum Skill" : "حداقل تجربه",
	"Minimum Wage" : "حداقل درآمد",
	"Moldavia" : "مولديوي",
	"Monetary market" : "بازار ارز",
	"Monetary Market" : "بازار ارز",
	"Money" : "پول",
	"Month/Year" : "ماه/سال",
	"Monthly exports" : "صادرات ماهانه",
	"Monthly imports" : "واردات ماهانه",
	"Monuments achieved" : "يادبود گرفتن",
	"more events" : "وقايع بيشتر",
	"More news" : "اخبار بيشتر",
	"more news" : "اخبار بيشتر",
	"more than a year" : "بيش از يک سال",
	"more than a year ago" : "بيش از يک سال پيش",
	"Moving Tickets" : "بليط",
	"moving tickets" : "بليط",
	"Moving tickets" : "بليط",
	"Mutual Protection Pact" : "پيمان دفاعي مشترک",
	"My Chat Rooms" : "اتاق هاي گفتگوي من",
	"My favorite rooms" : "اتاق هاي مورد علاقه من",
	"My Organizations" : "اکانتهاي شرکت من",
	"My places" : "مکان هاي من",
	"Name" : "نام",
	"National Goals" : "اهداف ملي",
	"National" : "ملي",
	"National Rank" : "رتبه ملي",
	"National Rank" : "رتبه ملي",
	"Neighbors" : "همسايه ها",
	"Netherlands" : "هلند",
	"New" : "جديد",
	"new article" : "مقالات جديد",
	"New Citizen Fee" : "پول اوليه شهروندان جديد",
	"New Citizen Message" : "پيام خوش آمد جديد شهروندان",
	"New Citizens today" : "شهروندان تازه وارد امروز",
	"New citizens today" : "شهروندان تازه وارد امروز",
	"New location:" : "مکان جديد:",
	"New password" : "رمز عبور جديد:",
	"New password again" : "تکرار",
	"news" : "اخبار",
	"News" : "اخبار",
	"Newspaper" : "روزنامه ها",
	"Newspaper logo" : "برند روزنامه",
	"Newspaper details" : "اطلاعات روزنامه",
	"Newspaper name" : "نام روزنامه",
	"Newspaper Avatar" : "برند روزنامه",
	"Newspapers" : "روزنامه ها",
	"Next" : "بعدي",
	"Next elections" : "انتخابات بعدي",
	"Next election in " : "انتخابات بعدي در",
	"Next elections in" : "انتخابات هاي بعدي در",
	"No" : "خير",
	"No." : "رديف",
	"no active battles " : "نبرد فعالي نيست",
	"no active battles " : "نبرد فعالي نيست",
	"No activity" : "فعاليتي ندارد",
	"no allies" : "متحدي ندارد",
	"NO MAN'S LAND" : "سرزمين بي صاحب",
	"No. of votes" : "تعدا آرا",
	"No. of Employees" : "تعدا کارمندان",
	"No. of chatrooms" : "تعداد اتاق هاي گفتمان",
	"No. of newspapers" : "تعداد روزنامه ها",
	"No. of companies" : "تعداد شرکت ها",
	"No political activity" : "فعاليت سياسي ندارد",
	"No products in this market" : "محصولي در بازار نيست",
	"No shouts posted by this Citizen yet" : "پيام کوتاهي توسط اين شهروند ارسال نشده است",
	"No shouts posted by this citizen yet" : "پيام کوتاهي توسط اين شهروند ارسال نشده است",
	"No more shouts for today" : "فريادهاي شما تمام شد!",
	"No presentation" : "چيزي ارائه نشده است",
	"North Korea" : "کره شمالي",
	"Norway" : "نروژ",
	"Not qualified" : "انتخاب نشد",
	"November" : "نوامبر",
	"Now you can visit the " : "هم اکنون مي توانيد مشاهده کنيد",
	"October" : "اکتبر",
	"of the New World" : " دنياي جديد",
	"Offer a gift" : "اهداي هديه",
	"Office" : "دفتر",
	"Official" : "رسمي",
	"Official candidates" : "نامزدهاي اصلي",
	"Oil"  : "نفت",
	"oil"  : "نفت",
	"Ok, thanks, next tip" : "ممنون× بعدي",
	"Old"  : "قديمي",
	"On the Map" : "روي نقشه",
	"one hour ago" : "يک ساعت پيش",
	"one minute ago" : "يک دقيقه پيش",
	"one month ago" : "يک ماه پيش",
	"online": "برخط",
	"Online now": "آنلاين است",
	"Once you join a room and click the \"add as favorite\" icon, that specific room will be added to the list of favorite chat rooms. This way it will be easier for you to access a specific room you are interested in." : "با اضافه کردن اتاق گفتمان به ليست علاقه مندي هاي خود سريع تر مي توانيد به آن دسترسي پيدا کنيد.",
	"Only congressmen and country presidents have the right to vote" : "تنها مجلسي ها و رييس جمهور حق راي دادن دارند",
	"Only congress members and country presidents have the right to vote." : "تنها مجلسي ها و رييس جمهور حق راي دادن دارند",
	" or read the  " : " يا بخوانيد",
	"Organization Avatar": "تصوير اکانت شرکت",
	"Organizations created by you:" : "اکانت هاي شرکت شما:",
	"Organizations" : "اکانت هاي شرکت",
	"Orientation" : "جهت گيري:",
	"Our next candidate" : "نامزد بعدي ما",
	"Owner" : "صاحب",
	"Own a company" : "صاحب کارخانه شو",
	"Pakistan" : "پاکستان",
	"Paraguay" : "پاراگوئه",
	"Parties" : "احزاب",
	"Party" : "حزب",
	"Party details" : "اطلاعات حزب",
	"Party founder" : "موسس حزب",
	"Party Elections" : "انتخابات درون حزبي",
	"Party elections" : "انتخابات درون حزبي",
	"Party logo" : "برند حزب",
	"Party name" : "نام حزب",
	"Party Member" : "عضو حزب",
	"Party members" : "اعضاي حزب",
	"Party presidency" : "رياست حزب",
	"Party President" : "رئيس حزب",
	"Party president" : "رئيس جزب",
	"Peace Proposal" : "لايحه صلح",
	"Pending" : "در حال بررسي",
	"PENDING" : "در حال بررسي",
	"Pending invites" : "دعوت هاي در حال بررسي",
	"Philippines" : "فيليپين",
	"Picture" : "تصوير",
	"Place your Congress candidature" : " کانديد هاي منتخب خود براي مجلس را انتخاب کنيد",
	"Please choose a country you want to live in." : "لطفا کشور مورد نظر خود براي زندگي را انتخاب کنيد.",
	"Please choose the region you want to live in" : "لطفا منطقه مورد نظر خود براي زندگي را انتخاب کنيد.",
	"Please choose the country you want to live in" : " لطفا کشور مورد نظر خود براي زندگي را انتخاب کنيد.",
	"Please choose the industry" : "لطفا صنعت مورد نظر خود را انتخاب کنيد",
	"Please select an Industry to see the marketplace offers" : "لطفا محصول مورد نظر براي ديدن پيشنهادات بازار انتخاب کنيد",
	"Please type your old password" : "لطفا رمز عبور قديمي خود را وارد کنيد",
	"Poland" : "لهستان",
	"Politic stats" : "وضعيت سياست",
	"Political career" : "وضعيت سياسي",
	"Political stats" : "وضعيت سياسي",
	"Politics" : "سياست ها",
	"Population": "جمعيت",
	"Population number": "جمعيت",
	"Portugal" : "پرتغال",
	"Post" : "بفرست",
	"Post this link on forums, blogs, messenger status or send it by yourself via email. People that register using your personal link will get you 5 Gold when they reach level 6." : "اين لينک را در وبلاگ و پيام هاي خود به ديگران بفرستيد. هر کس که با اين لينک عضو شد و به سطح 6 رسيد شما 5 طلا دريافت خواهيد کرد.",
	"Post a comment" : "ارسال نظر",
	"Post new offer" : "پشنهاد جديد",
	"Post new offers" : "ايجاد پيشنهادات جديد",
	"Presence:" : "وضعيت:",
	"Presence:  " : "وضعيت:",
	"President" : "رئيس جمهور",
	"President Elections" : "انتخاب رئيس جمهور",
	"Presidential elections" : "انتخابات رياست جمهوري",
	"President Impeachment" : "استيضاح رئيس جمهور",
	"Presidential candidates" : "نامزدهاي رياست جمهوري",
	"Press" : "مطبوعات",
	"Press director" : "سردبير خبرنامه",
	"Prev" : "قبلي",
	"Presentation" : "برنامه",
	"Price" : "قيمت",
	"Price with taxes" : "قيمت با ماليات",
	"Privacy" : "پنهاني",
	//"Private" : "سرباز",
	"Productivity" : "قابليت توليد",
	"Products" : "توليدات",
	"Profile":"پروفايل",
	"Provider" : "آماده کننده",
	"Publish" : "منتشر کردن",
	"Quality" : "کيفيت",
	"Quality Level" : "سطح کيفيت",
	"Rank" : "رتبه",
	"Rank Private" : "رتبه خصوصي",
	"Ranked" : "رتبه بندي شده",
	"Rankings" : "رتبه بندي",
	"Raw materials" : "مواد اوليه",
	"Raw materials can be bought only using your company account (select it in the upper right side of the page if you have a company) or if you are logged in as an organization" : "مواد اوليه تنها با اکانت کارخانه مي توانند خريداري شوند.",
	"Reach 1000 subscribers to your newspaper" : "روزنامه تان را به 1000 اشتراک برسانيد",
	"Reach the highest total damage in one battle" : "بيشترين مجموع ضربه را در نبرد وارد کن",
	"Reached 1000 subscribers to your newspaper" : "روزنامه تان به 1000 اشتراک رسيد",
	"Reached strength level 5" : "پنج سطح قدرت بدني بدست آورديد",
	"Reached the highest total damage in one battle" : "بيشترين ضربه را در يک نبرد زده ايد",
	"Rec exchange rate" : "نرخ معامله",
	"Region" : "منطقه",
	"Recruit" : "عضو جديد",
	"REJECTED" : "رد شد",
	"Rejected" : "رد شد",
	"Remove" : "حذف",
	"Remove friend" : "حذف کردن دوست",
	"Report abuse" : "گزارش سواستفاده",
	"report abuse" : "گزارش سواستفاده",
	"Represent your country (or eNation) in the real world" : "کشور خود را در دنياي جديد تمثيل کن",
	"Requirements" : "شرايط",
	"Retire" : "کنار کشيدن",
	"Resign" : "استعفا بده",
	"Resistance" : "انقلاب",
	"Resistance Hero" : "قهرمان انقلاب",
	"Resistance hero" : "قهرمان انقلاب",
	"Resistance War" : "انقلاب",
	"Resistance wars" : "انقلاب ها",
	"Resistance War Active" : "انقلاب هاي فعال",
	"Romania" : "روماني",
	"Run for congress" : "نامزد مجلس شو",
	"RURAL AREA" : "منطقه روستايي",
	"Russia" : "روسيه",
	"Salary" : "حقوق",
	"Sales" : "فروش",
	"See all donations" : "ديدن همه اهداها",
	"See all employees" : "ديدن همه کارمندان",
	"See all law proposals" : "ديدن همه لايحه ها",
	"See all members" : "ديدن همه اعضا",
	"see finished battles" : "ديدن نبردهاي پايان يافته",
	"See results" : "نمايش نتايج",
	"Send email invite" : "ارسال دعوت نامه با ايميل",
	"Select" : "انتخاب",
	"Select industry" : "انتخاب صنعت",
	"Secure" : "امن",
	"Sell" : "بفروش",
	"Sell company" : "فروش کارخانه",
	"Send message" : "ارسال پيام",
	"Send via: " : "ارسال با:",
	"Sent" : "بفرست",
	"September" : "سپتامبر",
	"Serbia" : "صربستان",
	//"Sergeant" : "گروهبان",
	"Send invitation" : "ارسال دعوتنامه",
	"Shop" : "مغازه",
	"Shouts" : "فريادها",
	"Shout something:" : "فرياد بزن:",
	"Show active wars" : "جنگ هاي فعال را نشان بده",
	"show all accounts" : "نشان دادن همه اکانت ها",
	"Show all members" : "نشان دادن همه اعضا",
	"Show all donations" : "نشان دادن همه اعطايي ها",
	"Show all employees" : "نشان دادن همه کارمندان",
	"Show all law proposals" : "نشان دادن همه لايحه ها",
	"Show candidate list:" : "نشان دادن ليست نامزدها:",
	"Show candidate list" : "نشان دادن ليست نامزدها:",
	"Show candidates list" : "نشان دادن ليست نامزدها:",
	"show finished battles" : "نشان دادن نبردهاي پايان يافته",
	"show less" : "خلاصه",
	"Show my offers" : "پيشنهاد هاي من",
	"Show proposed members" : "نمايش اعضاي انتخاب شده",
	"of congress" : " مجلس",
	"of Congress" : " مجلس",
	"Show results" : "نمايش نتايج",
	"Singapore" : "سنگاپور",
	"Skill" : "تجربه",
	"Skill level" : "سطح تجربه",
	"Skills:" : "تجربه ها:",
	"Skills" : "تجربه ها",
	"Slovakia" : "اسلواکي",
	"Slovenia" : "اسلووني",
	"Social orientation" : "جهت گيري اجتماعي",
	"Soldier" : "سرباز",
	"soldier" : "سرباز",
	"Sort by" : "چينش بر اساس",
	"Social stats" : "وضعيت اجتماعي",
	"Society" : "اجتماع",
	"Society Builder" : "سازنده اجتماعي",
	"South Africa" : "افريقاي جنوبي",
	"South Korea" : "کره جنوبي",
	"Spain" : "اسپانيا",
	"Start a resistance war and liberate that region" : "يک انقلاب شروع کن و منطقه را بگير",
	"Started a resistance war and liberated " : "انقلاب آغاز شد و به پيروزي رسيد در",
	"Started by" : "آغاز شده توسط",
	"started by" : "آغاز شده توسط",
	"started on" : "آغاز شد در",
	"Status" : "وضعيت",
	"Standard Training effect" : "تمرين عادي",
	"Strength gained" : "قدرت بدست آمده",
	"Still active " : "هنوز فعال است",
	"Stock" : "ذخيره",
	"Strength" : "قدرت",
	"Subscribe" : "اشتراک",
	"Subscribers" : "مشترکان",
	"Subscribe to comments" : "اشتراک نظرات",
	"Subscriptions" : "اشتراک",
	"SUBURBIA" : "حومه نشيني",
	"Super Soldier" : "سرباز کهنه‌کار",
	"Super soldier" : "سرباز کهنه‌کار",
	"supported by" : "پشتيباني شده توسط",
	"Supporting parties" : "احزاب پشتيبان",
	"Sweden" : "سوئد",
	"Switzerland" : "سوئيس",
	"Tax change: Defense System" : "تغيير ماليات: سيستم دفاعي",
	"Tax change: Food" : "تغيير ماليات: غذا",
	"Tax change: Oil" : "تغيير ماليات: نفت",
	"Tax change: Grain" : "تغيير ماليات: گندم",
	"Tax change: Hospital" : "تغيير ماليات: بيمارستان",
	"Tax change: House" : "تغيير ماليات: خانه",
	"Tax change: Iron" : "تغيير ماليات: آهن",
	"Tax change: Moving Tickets" : "تغيير ماليات: بليط",
	"Tax change: Weapons" : "تغيير ماليات: اسلحه",
	"Tax change: Stone" : "تغيير ماليات: سنگ",
	"Taxes" : "ماليات",
	"Terms of Service" : "شرايط سرويس",
	"Translate" : "ترجمه",
	"Thailand" : "تايلند",
	"The company offers no products in this market" : "کارخانه هيچ کالايي براي فروش نگذاشته است",
	"The skill of producing food, weapons, gifts and moving tickets." : "تجربه توليد غذا، اسلحه، هديه و بليط",
	"The law voting process takes 24 hours." : "پروسه راي گيري قانون 24 ساعت زمان مي برد.",
	"There are no active battles in this war" : "هيچ نبرد فعالي در اين جنگ وجود ندارد",
	"There are no discovered resources in this region yet" : "هيچ منابع اوليه اي در اين منطقه يافت نشده است",
	"There are no pending citizenship applications." : "هيچ درخواست تابعيتي وجود ندارد.",
	"There are no resistance wars in this country." : "هيچ انقلابي در اين کشور وجود ندارد.",
	"This citizen does not have any donations sent or received." : "شهروند هيچ اهدايي دريافت يا ارسال نکرده است.",
	"This country can trade with any other country in eRepublik." : "کشور مي تواند با ديگر کشور هاي ايريپابليک تجارت کند.",
	"To" : "به",
	"Title" : "عنوان",
	" to stay in touch with what happens on eRepublik." : "براي در جريان بودن از آنچه در ايريپابليک اتفاق مي افتد",
	"today" : "امروز",
	"Today" : "امروز",
	"Track invites" : "تعقيب دعوت شده ها",
	"Track Invites" : "تعقيب دعوت شده ها",
	"Tools" : "ابزار",
	"Top Rated" : "برترين ها",
	"Top rated" : "برترين ها",
	"Top rated news" : "داغ ترين اخبار",
	"Top Countries" : "برترين کشورها",
	"Top Chat Rooms" : "برترين اتاق هاي گفتگو",
	"Top Companies" : "برترين کارخانه ها",
	"Top News" : "برترين اخبار",
	"Top Citizens" : "برترين شهروندان",
	"Top Parties" : "برترين احزاب",
	"Total Citizens" : "مجموع شهروندان",
	"Total citizens" : "مجموع شهروندان",
	"Total damage:" : "مجموع ضربه ها",
	"Total damage" : "مجموع ضربه ها",
	"Total votes: " : "مجموع آرا: ",
	"Total votes:" : "مکموع آرا:",
	"Total productivity" : "توليد کل",
	"Train" : "تمرين",
	"Train bonus" : "پاداش تمرين",
	"Training" : "تمرين",
	"Training grounds" : "زمين تمرين",
	"Training effect" : "تاثير تمرين",
	"Treasury" : "هزينه",
	"Turkey" : "ترکيه",
	"Tutorials" : "کلاسهاي ويژه",
	"Ukraine" : "اوکراين",
	"UNDERGROUND" : "زيرزمين",
	"Unemployed" : "بيکار",
	"Unemployment rate" : "تعداد بيکاران",
	"Unlock Features" : "بازکردن امکانات",
	"United Kingdom" : "انگلستان",
	"Unsubscribe" : "حذف اشتراک",
	"Unsubscribe to comments" : "حذف اشتراک نظرات",
	"until the region can be occupied or secured" : "تا اشغال يا حفظ منطقه",
	"Update" : "بروزرساني",
	"Upgrade quality level" : "ارتقا سطح کيفيت",
	"Uruguay" : "اروگوئه",
	"USA" : "امريکا",
	"Value added tax (VAT)" : "?ماليات بر ارزش افزوده(فروش)",
	"VAT" : "ماليات بر کالا",
	"View the status of your invites and bonuses" : "ديدن پاداش و وضعيت دعوتهاي شما",
	"Venezuela" : "ونزوئلا",
	"View requests" : "نمايش درخواست کنندگان",
	"View all comments" : "نمايش همه نظرات",
	"votes" : "آرا",
	"Vote" : "راي",
	"Voter" : "راي دهندگان",
	"War" : "جنگ",
	"Wars" : "جنگ ها",
	"Wars list" : "ليست جنگ ها",
	"Weapon" : "اسلحه",
	"weapon" : "اسلحه",
	"Weapon quality" : "کيفيت اسلحه",
	"Wellness" : "سلامتي",
	"Wellness loss" : "از دست دادن سلامتي",
	"Winner" : "برنده",
	"Who" : "چه کسي",
	"Wildcards" : "علل بدل ها",
	"Win the Congress elections": "پيروز انتخابات مجلس شو",
	"Won the Congress elections" : "پيروز انتخابات مجلس",
	"Reach the highest war influence in a battle" : "بيشترين تاثير در يک مبارزه از نبرد",
	"Reach the highest war influence in a campaign" : "بيشترين تاثير در مجموع تمام مبارزه‌هاي يک نبرد",
	"Win the Presidential elections": "پيروز انتخابات رياست جمهوري شويد",
	"Won the Presidential elections": "پيروز انتخابات رياست جمهوري",
	"Wood" : "چوب",
	"World Map" : "نقشه جهان",
	"wood" : "چوب",
	"Worked 30 days in a row" : "30 روز متوالي کار کرديد",
	"Work for 30 days in a row" : "30 روز متوالي کار کنيد",
	"Work Bonus" : "پاداش کار",
	"World" : "جهان",
	"Write article" : "مقاله بنويس",
	" xp points " : " امتياز تجربه ",
	" xp points" : " امتياز تجربه",
	"Yes" : "بله",
	"yesterday" : "ديروز",
	"You are allowed to create and administrate ONLY one eRepublik citizen. Breaking this rule you will face the risk of having all your citizen accounts suspended." : "شما مجاز به ساختن تنها يک اکانت شهروندي هستيد. زير پا گذاشتن اين قانون مي تواند موجب بسته شدن همه اکانت هاي شما شود.",
	"You are already an employee. To get this job please quit your current job." : "شما کارمند هستيد. براي انتخاب اين شغل از شغل کنوني خود خارج شويد.",
	"You are not a member of a party" : "شما عضو حزب هستيد",
	"You cannot resign from your job until" : "شما نمي توانيد از شغل خود استعفا دهيد تا",
	"You can't become a soldier" : "شما نمي توانيد سرباز شويد",
	"You cannot join this fight because your wellness must be at least 40. Your current wellness is" : "شما نمي توانيد بجنگيد چون سلامتي شما نبايد از 40 کمتر باشد. سلامتي  شما اکنون اين مقدار است",
	"You cannot join this fight because your wellness must be at least 40. You can get wellness from"  : "شما نمي توانيد بجنگيد چون سلامتي شما نبايد از 40 کمتر باشد، شما مي توانيد سلامتي دريافت کنيد از",
	"You cannot join this fight because your wellness must be at least 40." : "شما نمي توانيد بجنگيد چون سلامتي شما نبايد از 40 کمتر باشد.",
	"You are not a president or a congress member in this country" : "شما رئيس جمهور يا نماينده مجلس اين کشور نيستيد",
	"You will receive 5 Gold for each citizen invited by you that reaches level 6." : "اگر شهروندي که شما دعوت کرده ايد به سطح 6 برسد شما 5 طلا دريافت خواهيد کرد.",
	"You can exchange money at the" : "شما مي توانيد پول تبديل کنيد در",
	"You can get wellness from:" : "شما مي توانيد سلامتي بدست بياوريد در:",
	"You can join a party from it's presentation page or you can create your own party if you cannot find the right one for you. Being a member of a party could give you the chance to become a Congress Member or even the President." : "شما مي توانيد عضو يک حزب شويد يا حزب خودتان را تاسيس کنيد. وقتي شما عضو يک حزب مي شويد شانس اين را داريد که نماينده مجلس يا حتي رئيس جمهوري شويد.",
	"You can't start a resistance war in this region because it already belongs to its original owner country" : "شما نمي توانيد در اين منطقه انقلاب راه بياندازيد چون اين منطقه اصلي اين کشور است.",
	"You cannot start a resistance war in this region because it already belongs to its original owner country." : "شما نمي توانيد در اين منطقه انقلاب راه بياندازيد چون اين منطقه اصلي اين کشور است.",
	"You cannot trade with this country as you are at war with it" : "شما نمي توانيد با اين کشور که با آن در جنگ هستيد تجارت کنيد.",
	"You didn't specify the amount of products you wish to buy" : "شما مقدار خريد را تعيين نکرده ايد.",
	"You do not own a moving ticket. You can buy moving tickets from Marketplace" : "شما بليطي نداريد. شما بايد از بازار بليط بخريد.",
	"You do not have a newspaper" : "شما روزنامه نداريد.",
	"You don't have a newspaper" : "شما روزنامه نداريد.",
	"You do not have any articles, if you want to write an article you should enter here:" : "شما هيچ مقاله اي ارسال نکرده ايد، اگر مي خواهيد مقاله اي بنويسيد بايد وارد اين بخش شويد:",
	"You do not have a job" : "شما شغلي نداريد",
	"You don't have any active job offers" : "شما پيشنهاد شغلي فعالي نداريد",
	"You do not have any active job offers" : "شما پيشنهاد شغلي فعالي نداريد",
	"You have already worked today." : "شما امروز کار کرده ايد.",
	"You have not worked today." : "شما امروز کار نکرده ايد.",
	"You have not trained today" : "شما امروز تمرين نکرده ايد",
	"You have no favorite chat rooms" : "شما اتاق گفتمان مورد علاقه اي نداريد",
	"You have not created any organization yet." : "شما تا کنون اکانت شرکتي درست نکرده ايد.",
	"You received 50 wellness from hospital" : "شما 50 سلامتي از بيمارستان دريافت کرده ايد",
	"You have succesfully edited your profile" : "پروفايل شما ويرايش شد",
	"You have trained today. You can train again tomorrow." : "شما امروز تمرين کرده ايد. مي توانيد فردا دوباره تمرين کنيد.",
	"Your personal invitation link" : "لينک دعوت نامه شخصي شما",
	"You must be at least level 2 to be able to train. Now, you can:" : "شما بايد حداقل سطح 2 باشيد تا بتوانيد تمرين کنيد، شما مي توانيد:",
	"Your account" : "اکانت شما",
	"Your name:" : "نام شما:",
	"You need at least 25 Experience Points to join this fight" : "شما براي جنگيدن حداقل 25 تجربه نياز داريد",
	"Your accounts" : "اکانت هاي شما",
	"Your birthday" : "تولد شما",
	"Your comment" : "نظر شما",
	"Your companies" : "کارخانه هاي شما",
	"Your email here" : "محل ايميل شما",
	"Your inventory" : "فهرست شما",
	"Your offer has been updated" : "پيشنهاد شما بروز شد",
	"Your strength:" : "قدرت بدني شما:",
	"Work" : "کار",
	"War > Battlefield" : "صحنه نبرد",
	"Aegean Islands" : "جزاير آژن",
	"Attica" : "آتيکا",
	"Central Greece" : "يونان مرکزي",
	"Crete" : "گيريت",
	"Epirus" : "اپيروس",
	"Ionian Islands" : "جزاير ايونيا",
	"Macedonia" : "مقدونيه",
	"Free" : "رايگان",
	"Become a citizen" : "شهروند شويد",
	"Top countries in eRepublik" : "کشورهاي برتر ايريپابليک",
	"Forum discussions" : "مباحث تالارگفتمان",
	"Forgot password?" : "فراموشي رمز عبور",
	"Password" : "رمز عبور",
	"top countries in eRepublik" : "کشورهاي برتر در ايريپابليک",
	"more discussions" : "مباحث بيشتر",
	"It's 100% free and only takes a minute or two" : "کاملا رايگان است و تنها يک يا دو دقيقه وقت مي برد",
	"Take the 4 step tour and find out why it's such a great game":"يک گشت و گذاري قبل از عضويت داشته باشيد",
	"Citizen Name" : "نام شهروند",
	"Retype" : "تکرار کنيد",
	"Please choose the country you want to live in" : "کشوري را که مي خواهيد در آن زندگي کنيد انتخاب کنيد",
	"Birthday" : "روز تولد",
	"I agree with the" : "قبول مي کنم",
	"Sign up for the weekly newsletter" : "عضويت خبرنامه هفتگي",
	"Gender" : "جنسيت",
	"for 10 shouts/day and more" : "براي روزانه 10 فرياد بيشتر",
	"Jan" : "ژوئن",
	"Forfeit points" : "امتياز منفي",
	"Gold" : "طلا",
	"Move" : "جابجايي",
	"This message will be displayed to the members of Congress who will be able to accept or deny your citizenship request." : "اين پيام براي نمايندگان مجلسي که مي توانند درخواست شما را انجام دهند نمايش مي يابد.",
	"Apply for citizenship" : "درخواست تابعيت",
	"Please type in a short description why you are applying for citizenship" : "لطفا توضيح کوتاهي براي درخواست تابعيت خود بنويسيد",
	"Chat room details" : "اطلاعات اتاق گفتمان",
	"Room name" : "نام اتاق",
	"Public" : "عمومي",
	"Private" : "خصوصي",
	"Room type" : "نوع اتاق",
	"Create room" : "اتاق بسازيد",
	"days ago" : "روز پيش",
	"Report company" : "گزارش کارخانه",
	"Show more details" : "بيشتر",
	"Show less details" : "کمتر",
	"Products" : "توليدات",
	"Market offers" : "پيشنهادات بازار",
	"Interactive Map" : "نقشه هم کنش",
	"Report law" : "گزارش لايحه",
	"Report" : "گزارش",
	"No chat rooms" : "اتاق گفتگويي موجود نيست",
	"Organization details" : "اطلاعات اکانت شرکت",
	"Organization name" : "نام اکانت شرکت",
	"Your email address:" : "آدرس پست الکترونيکي شما",
	"Retype password" : "تکرار",
	"Minimum number of characters is 6" : "حداقل 6 حرف",
	"eRepublik region" : "منطقه",
	"Organization logo" : "برند اکانت شرکت",
	"Copy" : "کپي" ,
	"Republic of Moldova" : "جمهوري مولديوي",
	"Buy" : "بخر",
	"The skill of producing food, weapons, gifts and moving tickets." : "تجربه توليد غذا، اسلحه، هديه و بليط",
	"You cannot buy a company that belongs to someone outside your country." : "شما نمي توانيد کارخانه خارج از کشورتان را بخريد.",
	"In order to own a company you have to resign from your job." : "براي تاسيس کارخانه از شغل فعلي خود استعفا دهيد.",
	"Official candidates" : "نامزدهاي رسمي" ,
	"Wildcards" : "علل بدل ها",
	"Not qualified" : "انتخاب نشده ها",
	"Total votes:" : "آراي کل:",
	"Presence:" : "حضور" ,
	"Wiki" : "ويکي" ,
	"wiki" : "ويکي" ,
	"Blog" : "وبلاگ" ,
	"eRepublik Shop" : "مغازه ايريپابليک" ,
	"Your title should not exceed 80 characters" : "عنوان نبايد بيشتر از 80 حرف باشد",
	"Citizen feeds" : "صحبت شهروندان" ,
	"Military Campaigns" : "جنگ‌هاي فعال" ,
	"Allies' Campaigns" : "نبرد متحدان" ,
	"Eat food" : "خوردن غذا" ,
	"Buy food" : "خريدن غذا" ,
	"Military Unit" : "واحد نظامي" ,
	"Badges" : "بسته‌ها" ,
	"More military campaigns" : "ساير جنگ‌ها" ,
	"Missions" : "ماموريت‌ها" ,
	"Comment" : "نظر" ,
	"Older posts" : "نوشته‌هاي قديمي" ,
	"Inventory" : "فهرست" ,
	"On market" : "در بازار" ,
	"Next election in" : "انتخابات بعدي" ,
	"Official Results" : "نتايج رسمي" ,
	"Congressional elections" : "انتخابات مجلس" ,
	"Official candidates" : "نامزدهاي رسمي",
	"Create a Military Unit" : "ساختن يک واحد نظامي" ,
	"Apply for membership in a Military Unit" : "درخواست عضويت در يک واحد نظامي" ,
	"friends" : "دوستان" ,
	"Natural Enemy" : "دشمن ملي" ,
	"Republic of Macedonia (FYROM)" : "جمهوري مقدونيه" ,
	"Fire power" : "قدرت آتش" ,
	"Fire Power" : "قدرت آتش" ,
	"Durability" : "دوام" ,
	"Rank points" : "امتياز نظامي" ,
	"Natural enemy bonus" : "امتياز جنگ با دشمن ملي" ,
	"War influence" : "تاثير در جنگ" ,
	"wants to add you to his friends list. Will you accept?" : "مي‌خواهد شما را به ليست دوستانش اضافه نمايد، آيا اجازه مي‌دهيد؟" ,
	"Kills" : "کشته‌ها" ,
	"Location:" : "موقعيت:" ,
	"Citizenship:" : "تابعيت:" ,
	"Experience level" : "سطح تجربه" ,
	"Health" : "سلامتي" ,
	"Achievements" : "موفقيت‌ها" ,
	"Economy Skill" : "سطح اقتصادي" ,
	"Overview" : "دريک نگاه" ,
	"Storage" : "انبار" ,
	"Enter" : "ورود" ,
	"Progress" : "پيشرفت" ,
	"post new offer" : "گذاشتن پيشنهاد جديد" ,
	"from marketplace" : "از بازار" ,
	"Add on sale" : "افزودن به بازار" ,
	"Product" : "محصول" ,
	"Quantity" : "مقدار" ,
	"Price / unit" : "قيمت / واحد" ,
	"Buy license" : "خريد مجوز صادرات" ,
	"Battle stats" : "آمار نبرد" ,
	"Get reward" : "دريافت پاداش" ,
	"Super soldier:" : "سرباز کهنه‌کار:" ,
	"Military Skills" : "سطح نظامي" ,
	"Productivity" : "توليد" ,
	"Start working" : "شروع به کار" ,
	"Choose 2 invited friends to boost your Economy skill and Productivity" : "انتخاب ?نفر از دوستاني که دعوت کرديد براي افزايش ميزان توليد" ,
	"Choose an action to boost your Economy skill and Productivity" : "انتخاب يک فعاليت براي تعيين ميزان افزايش توليد" ,
	"You worked" : "شما  " ,
	"days in a row." : " روز پشت سر هم کار کرديد" ,
	"You need to work" : "لازم است براي به دست آوردن مدال کارگر سخت‌کوش " ,
	"more day to receive your 'Hard Worker' Medal" : " روز ديگر، بدون فاصله کار کنيد" ,
	"more days to receive your 'Hard Worker' Medal" : " روز ديگر، بدون فاصله کار کنيد" ,
	"Today's salary" : "دستمزد امروزتان" ,
	"Battles I can Fight in" : "نبردهاي موجود" ,
	"My land" : "زمين‌هاي من" ,
	"Workday results" : "دست‌آورد کار روزانه" ,
	"Improve your Strength level:" : "قدرت خود را افزايش دهيد:" ,
	"Choose an action to boost your strength" : "انتخاب يک فعاليت براي تعيين ميزان افزايش قدرت" ,
	"Choose 2 invited friends to boost your strength" : "انتخاب 2 نفر از دوستاني که دعوت کرديد براي افزايش ميزان قدرت" ,
	"Activity" : "فعاليت" ,
	"Iron Company" : "معدن آهن" ,
	"Military Unit Leader" : "فرمانده‌ي واحد نظامي" ,
	"No Military Unit" : "بدون واحد نظامي" ,
	"Weapons Com..." : "اسلحه سازي" ,
	"View all" : "ديدن همه" ,
	"You are working as manager, no salary is needed." : "شما به عنوان مدير کارخانه دستمزدي براي کار نمي‌گيريد" ,
	"Add influence" : "افزايش تاثير" ,
	"Final products" : "محصول نهايي" ,
	"Resources" : "ماده خام" ,
	"Vote" : "راي" ,
	"vote" : "راي" ,
	"New Message" : "پيام جديد" ,
	"Delete" : "حذف" ,
	"All Messages" : "تمام پيام‌ها" ,
	"Report" : "گزارش" ,
	"Send" : "ارسال" ,
	"Show Employees" : "نمايش کارمندان" ,
	"employees" : "کارمند" ,
	"This data is confidential." : "اين اطلاعات محرمانه است" ,
	"Total Weapons stock" : "مجموع اسلحه‌ي انبار شده" ,
	"Post a comment" : "ارسال نظر" ,
	"Messages" : "پيام‌ها" ,
	"Older" : "قديمي‌تر" ,
	"Newer" : "جديدتر" ,
	"Manage" : "مديريت" ,
	"View storage" : "ديدن انبار" ,
	"employees" : "کارمند" ,
	"Total Grain stock" : "مجموع گندم انبار شده" ,
	"Employee list" : "ليست کارمندان" ,
	"eRepublik birthday" : "تاريخ تولد در جمهوري مجازي" ,
	"National rank:" : "رتبه ملي: " ,
	"Forfeit points:" : "امتياز منفي: " ,
	"Day" : "روز" ,
	"of the New World" : "از دنياي جديد" ,
	"Campaign of the day" : "نبرد روز" ,
	"Iran Campaigns" : "نبردهاي ايران" ,
	"Daily tasks" : "فعاليت روزانه" ,
	"Top" : "بالاترين‌ها" ,
	"Selling price:" : "قيمت فروش: " ,
	"Offer removed" : "پيشنهاد حذف شد" ,
	"You can dissolve your company for" : "شما مي‌توانيد کارخانه‌تان را منحل کنيد، دراين حالت دريافتي شما برابر است با: " ,
	"Set on sale" : " ارايه کردن در بازار" ,
	"Selling a company will empty the land on which it has been built, allowing you to build another company on it." : "فروش کارخانه زميني را که در آن ساخته شده آزاد مي‌کند و به شما اجازه مي‌دهد که کارخانه‌ي ديگري به جاي آن بسازيد" ,
	"Dissolving a company will empty the land on which it has been built, allowing you to build another company on it." : "منحل کردن کارخانه زميني را که در آن ساخته شده آزاد مي‌کند و به شما اجازه مي‌دهد که کارخانه‌ي ديگري به جاي آن بسازيد" ,
	"Dissolve company" : "منحل کردن کارخانه" ,
	"Your company now appears in the" : "کارخانه شما اکنون در ليست کارخانه‌هي فروشي قرار گرفت: " ,
	"Remove offer" : "حذف پيشنهاد" ,
	"Update offer" : "به روز رساني پيشنهاد" ,
	"The price at which this company can be put on sale must be between 9 and 11 Gold." : "قيمت فروش پيشنهادي اين کارخانه بايد بين ? تا ?? طلا باشد" ,
	"Companies for sale list" : "ليست فروش کارخانه" ,
	"Next product status:" : "وضعيت محصول بعدي:" ,
	"Total Food stock" : "مجموع غذاي ذخيره شده" ,
	"You can view your market licences and sell products directly from your" : "شما مي‌توانيد جهت فروش مستقيم کالاي خود و يا ديدن مجوزهاي صادراتيتان به انبار خود مراجعه کنيد: " ,
	"Storage Facility" : "ساختمان انبار" ,
	"Offers" : "پيشنهادها" ,
	"Add a job offer" : "پيشنهاد کار جديد" ,
	"Friends bonus" : "امتياز دوستان" ,
	"Strength:" : "قدرت:" ,
	"Basic training" : "تمرين پايه" ,
	"Train booster" : "افزاينده‌ي تمرين" ,
	"Share what's on your mind in your citizen feed" : "هرچيزي که در فکرتان هست را به اشتراک بگذاريد" ,
	"and stay in touch with your in-game friends. More friends are waiting for you." : "و براي دوستان درون بازيتان، هميشه در دسترس باشيد. دوستان بيشتري در انتظار شما هستند" ,
	"Import from" : "به بازي آوردن از :" ,
	"Welcome to the New World" : "به دنياي جديد خوش آمديد" ,
	"Enter the new world" : "ورود به دنياي جديد" ,
	"active citizens today" : "شهروندان فعال امروز" ,
	"citizens" : "شهروندان" ,
	"Follow us:" : "ما را دنبتل کنيد :" ,
	"\"eRepublik creates multiplayer global strategy game\"" : "جمهوري مجازي يک بازي دسته جمعي و استراتژي جهاني را ساخته" ,
	"\"eRepublik offers a real second life\"" : "جمهوري مجازي پيشنهاد يک زندگي دوم واقعيست" ,
	"\"eRepublik takes strategy games to the Web\"" : "جمهوري مجازي بازي‌هاي استراتژي را به وب کشانده" ,
	"What others are saying about eRepublik" : "ديگران درباره‌ي جمهوري مجازي چه مي‌گويند" ,
	"Remember me" : "مرا به خاطر بسپار" ,
	"Campaign of the day" : "نبرد روز" ,
	"Iran is not involved in any active battles." : "ايران درگير هيچ نبردي نمي‌باشد" ,
	"wrote" : "نوشت" ,
	"Seller" : "فروشنده" ,
	"Train results" : "نتيجه‌ي تمرين" ,
	"No candidates applied yet" : "هنوز کسي کانديد نشده است" ,
	"Party candidates" : "کانديدهاي حذب" ,
	"You can not buy a company in a country for which you do not have citizenship." : "شما نمي‌توانيد از کشوري که تابعيتش را نداريد کارخانه بخريد" ,
	"The citizens of this country will be provided with a +10% war influence bonus in the military campaigns against the Natural Enemy." : "در صورت وجود دشمن ملي، مردم کشور +10% تاثير نظامي بيشتري در جنگ‌هاي مقابل دشمن مليشان مي‌گذارند" ,
	"No current Natural Enemy" : "دشمن ملي وجود ندارد" ,
	"United Arab Emirates" : "امارات متحده عربي" ,
	"Natural enemy" : "دشمن ملي" ,
	"Trading Embargo" : "تحريم تجارت" ,
	"You are not a president or a congress member in this country." : "شما رييس جمهور يا نماينده مجلس اين کشور نيستيد" ,
	"You need to move your citizen to one of the countries participating in the battle to join the fight." : "براي مبارزه در اين نبرد، بايد به يکي از کشورهاي شرکت کننده در جنگ سفر کنيد" ,
	"Country resources" : "منابع کشور" ,
	"Collected Gold" : "طلاي برداشت شده" ,
	"You will not be able to change residence outside the country while having a pending citizenship request." : "شما قادر به تغيير مکان به خارج از کشوري که درخواست تابعيتش را داريد، نيستيد" ,
	"The first ticket found in your storage that will cover the required distance will be used." : "اولين بليط موجود درانبارتان که قدرت اين جابه‌جايي را داشته باشد مصرف خواهد شد" ,
	"Moving distance:" : "مسافت جابه‌جايي:" ,
	"You have canceled your citizenship application" : "شما درخواست تابعيتتان را لغو کرديد" ,
	"Citizenship applications" : "درخواست‌هاي تابعيت" ,
	"Resident since:" : "اقامت از:" ,
	"Expires:" : "تارخ انقضا:" ,
	"You have successfully moved to" : "شما با موفقيت نقل مکان کرديد به" ,
	"This company has no job offers at the moment" : "اين شرکت در حال حاضر هيچ پيشنهادي براي استخدام نيرو ندارد" ,
	"Good job! Please prove you are human." : "عالي است، اما ابتدا ثابت کنيد که شما انسان هستيد، نه يک برنامه‌ي کامپيوتري" ,
	"Your description" : "شرح حالي از شما" ,
	"Email must be valid for registration, so do not cheat" : "آدرس اي-ميل بايد واقعي باشد زيرا تادييه‌اي براي آن ارسال خواهد شد، پس تقلب نکنيد" ,
	"Enter your current password in order to change your profile settings" : "پسورد کنوني‌تان را به صورت صحيح وارد کنيد تا تغييرات ذخيره شوند" ,
	"Work booster" : "افزا‌ينده‌ي کار" ,
	"Friend bonus" : "امتياز دوستان" ,
	"Resource bonus" : "امتياز منابع ملي" ,
	"Productivity details" : "گزارش توليد" ,
	"Economy skill details" : "گزارش سطح اقتصادي" ,
	"First steps in eRepublik" : "اولين قدم در جمهوري مجازي" ,
	"Battle orders" : "دستورات جنگي" ,
	"Warfare analysis" : "آناليز جنگ‌ها" ,
	"Political debates and analysis" : "گفت و گوهاي سياسي و تحليل‌ها" ,
	"Financial business" : "کسب و کار مالي" ,
	"Social interactions and entertainment" : "فعاليت‌هاي اجتماعي و سرگرمي" ,
	"Newspaper subscriptions" : "روزنامه‌هاي مشترک شده" ,
	"No articles of this type were written in the last 88 hours." : "هيچ مطلبي با اين موضوع در ?? ساعت گذشته نوشته نشده" ,
	"Because your account security is important, we recommend you to refrain from sharing your account login information. The eRepublik team will not ask you for this information via PM (or using other communication channels) so any similar requests are fraud attempts." : "از آنجا که امنيت حساب کاربري شما از موارد بسيار مهم مي‌باشد به شما پيشنهاد ميکنيم که هرگز اطلاعات ورود به حساب کاربريتان را منتشر نکنيد. تيم جمهوري مجازي هرگز از شما درخواست دريافت اطلاعاتتان را از طريق نامه‌ي درون بازي (و ياراه‌هاي ديگر ارتباطي) نمي‌کند. پس اگر اين‌چنين درخواستي برايتان رسيد، تلاشي براي فريب شماست." ,
	"Party Member , Congress Member" : "عضو حزب، نماينده مجلس" ,
	"The company will be located in " : "کارخانه‌ي شما تاسيس خواهد شد در" ,
	", your citizenship country" : "، کشوري که تابعيتش را داريد" ,
	"Your offer was deleted successfully." : "پيشنهاد شما بدون مشکل حذف شد" ,
	"You haven't posted any currency exchange offer yet." : "شما هيچ پيشنهاد معامله‌ي مالي نگذاشته‌ايد" ,
	"Factories" : "کارخانه" ,
	"Weapon raw materials" : "مواد اوليه اسلحه" ,
	"Food raw materials" : "مواد اوليه غذا" ,
	"Normal Storage" : "انبار معمولي" ,
	"Large Storage" : "انبار بزرگ" ,
	"Food Factory" : "کارخانه غذا" ,
	"Weapons Factory" : "کارخانه اسلحه" ,
    
    
    
    
    "(change)" : "تغيير" ,
	"Local currency accounts with a value less than 1 are not displayed." : "حساب واحد پول محلي با يک مقدار کمتر از 1 نمايش داده نمي شود." ,
	"Land of" : "زمين هاي" ,
	"view all" : "نمايش همه" ,
	"buildings" : "ساختمان ها" ,
	"Yesterday" : "ديروز" ,
	"Ambient on/off" : "عکس پس زمينه روشن / خاموش" ,
	"News categories" : "دسته بندي اخبار" ,
	"Search Citizen" : "جستجوي شهروند" ,
	"fighting" : "مبارزه" ,
	"commented" : "نظر" ,
	"others" : "ديگر" ,
	"Military campaigns" : "مبارزات نظامي" ,
    "now " : "حالا" ,
    "$ hour ago" : "$ ساعت قبل" ,
    "$ days ago" : "$ روز قبل" ,
    "$ months ago" : "$ ماه قبل" ,
    "News categories" : "دسته بندي اخبار" ,
    "Yesterday," : "ديروز،" ,
    "Saudi Arabia" : "عربستان سعودي" ,
    "My Land" : "زمين هاي من" ,
    "Show details" : "نمايش جزئيات" ,
    "Weapon raw materials produced" : "مواد اوليه توليد سلاح" ,
    "received" : "دريافت" ,
    "Food raw materials produced" : "مواد اوليه توليد غذا" ,
    "Close" : "بستن" ,
    "Weapons produced" : "سلاح توليد شد" ,
    "Food units produced " : "غذا توليد شد" ,
    "Not enough citizenship currency!" : "ارز شهروندي کافي نيست!" ,
    "Cost:" : "هزينه :" ,
    "New land" : "زمين جديد" ,
    "Buy Land" : "خريد زمين" ,
    "Expand" : "توسعه دادن" ,
	"Wars" : "نبردها" ,
	"Brazil" : "برزيل" ,
	"USA" : "ايالات متحده آمريکا" ,
	"Greece" : "يونان" ,
	"Finland" : "فنلاند" ,
	"Norway" : "نروژ" ,
	"Saudi Arabia" : "عربستان سعودي" ,
	"Ireland" : "ايرلند" ,
	"Peru" : "پرو" ,
	"Italy" : "ايتاليا" ,
	"Switzerland" : "سويس" ,
	"Bulgaria" : "بلغارستان" ,
	"Israel" : "اسرائيل" ,
	"Cyprus" : "قبرس" ,
	"New Zealand" : "نيوزيلند" ,
	"Egypt" : "مصر" ,
	"Colombia" : "کلمبيا" ,
	"Australia" : "استراليا" ,
	"Russia" : "روسيه" ,
	"Republic of China (Taiwan)" : "تايوان" ,
	"no active battles " : "بدون جنگ" ,
	"Select product" : "انتخاب محصول" ,
	"Weapons" : "تسليحات" ,
	"Food Raw Material" : "مواد اوليه کارخانه غذا سازي" ,
	"Weapon Raw Material" : "مواد اوليه کارخانه اسلحه سازي" ,
	"Select quality" : "انتخاب کيفيت محصول" ,
	"Fire Power" : "قدرت آتش" ,
	"Durability" : "دوام" ,
	"Please insert your Personal Security PIN" : "لطفا پين کد خود را وارد کنيد" ,
	"Unlock" : "باز کردن قفل" ,
	//"Monetary Market" : "بازار پول" ,
	"Provider" : "ارائه دهنده" ,
	"Amount" : "مقدار" ,
	"Report" : "گذارش" ,
	"All Messages" : "تمام پيامها" ,
	"Delete" : "حذف" ,
	"Buy" : "خريد" ,
	"Show my offers" : "نمايش فروش هاي من" ,
	"Post new offer" : "فروش جديد" ,
	"Next" : "بعدي" ,
	"Prev" : "قبلي" ,
	"Exchange rate" : "نرخ ارز" ,
	"Amount to buy" : "مقدار خريد" ,
	"Employer" : "کارفرما" ,
	"Job Market" : "بازار کار" ,
	"Companies for sale" : "کارخانه هاي فروشي" ,
	"news" : "اخبار" ,
	"You have $ newspaper subscriptions" : "شما به $ روزنامه مشترک هستيد" ,
	"posted in:" : "ارسال شده در :" ,
	"Report party" : "گزارش حزب" ,
	"Military Unit Member" : "عضو واحد نظامي" ,
	"Election day" : "روز انتخابات" ,
	"days" : "روز" ,
	"no goals selected" : "هدفي انتخاب نشده" ,
	"supported by" : "پشتيباني توسط" ,
	"Presidential candidates" : "نامزدهاي رياست جمهوري" ,
	"parties" : "احزاب" ,
	"Official candidates ($)" : "نامزد هاي رسمي ($)" ,
	"Wildcards ($)" : "نويسه عام ($)" ,
	"Not qualified ($)" : "واجد شرايط نشده ($)" ,
	"Total votes: $" : "مجموع آرا $" ,
	"Elections" : "انتخابات" ,
	"Messages" : "پيام ها" ,
	"Hint:" : "نکته:" ,
	"Currently" : "در حال حاضر" ,
	"Next election in $ days" : "انتخابات بهدي در $ روز" ,
	"$ candidates" : "$ نامزد" ,
	"wrote" : "نوشت" ,
	"Top countries" : "کشور هاي پر جمعيت" ,
	"Features" : "امکانات" ,
	"What others are saying" : "ديگران چه مي گويند" ,
	"South Africa" : "آفريقاي جنوبي" ,
	"Hide details" : "مخفي کردن جزئيات" ,
	"Stats" : "آمار" ,
	"SAR" : "ريال عربستان" ,
	"Proposi a law" : "قانون پيشنهادي به" ,
	"Your proposals" : "پيشنهادات شما" ,
	"Hello," : "سلام،" ,
	"Congress Member" : "عضو کنگره" ,
	"New citizen fee" : "هزينه شهروند جديد" ,
	"Minimum wage" : "حداقل دستمزد" ,
	"Provide citizenship" : "ارائه سيتيزن شيپ" ,
	"Citizenship applications" : "برنامه هاي شهروندي" ,
	"Report request" : "گزارش درخواست" ,
	"Stock" : "موجودي" ,
	"Go to eRepublik" : "بازگشت به دنياي مجازي" ,
	"Strength" : "قدرت" ,
	"Need more strength?" : "به قدرت بيشتري نياز داريد؟" ,
	"Build now" : "حالا بساز" ,
	"New training facilities are waiting for you." : "امکانات آموزشي جديد در انتظار شما هستند." ,
	"Close" : "بستن" ,
	"Build" : "ساختن" ,
	"Need more strength? New training grounds are waiting for you." : "به قدرت بيشتري نياز داريد؟ زمينه هاي آموزشي جديد در انتظار شما هستند." ,
	"AED" : "درهم امارات" ,
	"ARS" : "پزو" ,
	"one hour ago" : "يک ساعت قبل" ,
	"Go to eRepublik" : "برو به جمهوري مجازي" ,
	"Say something to your friends…" : "چيزي به دوستانه خود بگوييد" ,
	"Climbing Center" : "مرکز صعود" ,
	"Town Center" : "شهر داري" ,
	"+50 Health Building" : "+50 سلامتي بيشتر" ,
	"+100 Health Building" : "+100 سلامتي بيشتر" ,
	"Shooting Range" : "محدوده عکسبرداري" ,
	"Special Forces Center" : "مرکز نيرو هاي ويژه" ,
	"Invite 10 people to eRepublik and help them reach level 10" : "دعوت 10 نفر به جمهوري مجازي و کمک به آنها ، و رساندن آنها به سطح 10" ,
	"National resources bonus" : "پاداش منابع ملي" ,
	"Cancel" : "انصراف" ,
	"Collect" : "جمع آوري" ,
	"Marketplace" : "فروشگاه" ,
	"About me" : "درباره من" ,
	"Republic of Macedonia (…" : "جمهوري مقدونيه" ,
	"rank points" : "امتياز نظامي" ,
	"My influence" : "تاثير من در جنگ" ,
	"Battle stats" : "آمار نبرد" ,
	"health" : "سلامت" ,
	"Belarus" : "بلاروس" ,
	"Montenegro" : "مونته نگرو" ,
	"Health refill needed" : "سلامتي خود را دوباره پر کنيد" ,
	"After 5 days the alerts are automatically deleted" : "پس از گذشت 5 روز هشدار به صورت اتوماتيک حذف خواهد شد" ,
	"Are you still there?" : "آيا شما هنوز هم هستيد؟" ,
	"I'm still here" : "من هنوز اينجا هستم" ,
	"wrote" : "نوشته شده در" ,
	"Select payment option" : "انتخاب روش پرداخت" ,
	"characters left" : "کاراکترهاي باقيمانده" ,
	"Only active conversations from the last 14 days are shown" : "فقط مکالمات فعال را از 14 روز گذشته نمايش داده مي شود" ,
	"Select Al" : "انتخاب همه" ,
	"Sign Up" : "ثبت نام" ,
	"Make your country the greatest world power" : "کشور خود را بزرگ ترين قدرت جهان کنيد" ,
	"Report article" : "گزارش مقاله" ,
	"Report comments" : "گزارش نظر" ,
	"Your proposals" : "پيشنهادات شما" ,
	"Set new" : "تنظيم جديد" ,
	"Value Added Tax" : "ماليات بر ارزش افزوده" ,
	"The tax must be between 1 and 25" : "اين ماليات بايد بين 1 و 25 باشد" ,
	"The tax must be between 1 and 99" : "اين ماليات بايد بين 1 و 99 باشد" ,
	"Debate location (optional)" : "محل بحث (اختياري)" ,
	"Propose" : "ارائه دهيد" ,
	"Please choose a correct type" : "لطفا نوع صحيح را انتخاب نماييد" ,
	"Please type a value" : "لطفا نوع ارزش را وارد کنيد" ,
	"Propose a law" : "پيشنهاد يک قانون" ,
	"Ammount" : "مقدار" ,
	"GOLD" : "طلا" ,
	"Current enemy:" : "دشمن کنوني :" ,
	"No natural enemy set." : "هيچ دشمن طبيعي وجود ندارد" ,
	"Once set, you must wait 7 days to cancel or change your Natural Enemy" : "پس از نصب، شما بايد 7 روز صبر کنيد براي لغو و يا تغيير دشمن طبيعي" ,
	"New natural enemy:" : "دشمن طبيعي جديد :" ,
	"Declare natural enemy" : "اعلان دشمن طبيعي" ,
	"Rank" : "رتبه" ,
	"Resource" : "منابع" ,
	"Regions" : "مناطق" ,
	"Fruits" : "ميوه ها" ,
	"Saltpeter" : "نيترات پتاسيم" ,
	"Fish" : "ماهي" ,
	"Aluminum" : "آلومينيوم" ,
	"Cattle" : "گاو" ,
	"Deer" : "گوزن" ,
	"Rubber" : "لاستيک" ,
	"Not available" : "در دسترس نمي باشد" ,
	"Monthly" : "ماهيانه" ,
	"Daily average" : "متوسط روزانه" ,
	"Revenues" : "درآمد" ,
	"Active citizens" : "شهروندان فعال" ,
	"check current status" : "بررسي وضعيت کنوني" ,
	"Residence" : "محل اقامت" ,
	"Citizenship Country" : "شهروند کشور" ,
	"No media activity" : "فعاليت رسانه اي ندارد" ,
	"(citizenship)" : "(شهروندي)" ,
	"Population" : "جمعيت" ,
	"(location)" : "(محل سکونت)" ,
	"wrote one hour ago" : "نوشته شده در يک ساعت پيش" ,
	"No candidate proposed" : "هيچ نامزد پيشنهادي نيست" ,
	"Party page" : "صفحه حزب" ,
	"Total weapon raw material stock" : "مجموع سلاح سهام مواد خام" ,
	"Collect Salary" : "جمع آوري حقوق" ,
	"Salary details" : "جزئيات حقوق و دستمزد" ,
	"Gross salary" : "حقوق و دستمزد ناخالص" ,
	"No alive citizens found that match your criteria." : "شهروندي با اين نام وجود ندارد" ,
	"Published in:" : "محل انتشار :" ,
	"Category:" : "رده :" ,
	"ShareThis" : "اشتراک در" ,
	"read more" : "ادامه مطلب" ,
	"Published in" : "انتشار" ,
	"6-25 characters max" : "حداکثر 6-25 کاراکتر" ,
	"characters remaining" : "حرف باقي مانده است" ,
	"only JPG files allowed" : "فقط فايل هاي JPG مجاز هستند" ,
	"Visit" : "بازديد" ,
	"Military Rank" : "درجه نظامي" ,
	"Last fight" : "آخرين مبارزه" ,
	"Military Unit Profile" : "مشخصات واحد نظامي" ,
	"Pending applications:" : "در انتظار برنامه هاي کاربردي :" ,
	"(see all)" : "(نمايش همه)" ,
	"Leader" : "رهبر" ,
	"Members" : "کاربران" ,
	"See all" : "مشاهده همه" ,
	"experience points" : "افزايش تجربه" ,
	"ok" : "باشه" ,
	"Play now" : "حالا شرو کن" ,
	"Sign in" : "ورود" ,
	"Join now It's free" : "عضويت در اين سايت رايگان است" ,
	"Join now" : "عضويت" ,
	"It's free" : "در اين سايت رايگان است" ,
	"Wrong password" : "رمز عبور اشتباه است" ,
	"Wrong citizen email" : "شهروندي با اين کد پستي وجود ندارد" ,
	"Invited friends bonus" : "پاداش دعوت دوستان" ,
	"Get Health" : "دريافت سلامتي" ,
	"Not enough health" : "سلامت کافي نيست" ,
	//"use" : "استفاده" ,
	"Health restore" : "باز گرداندن سلامتي" ,
	"Moving Distance" : "فاصله حرکت" ,
	"Uses/Player" : "موارد استفاده / بازيکن" ,
	"Defense Budget" : "قدرت دفاع" ,
	"Resign candidacy" : "استفا از نامزدي" ,
	"1. Party members can apply for congressional candidature each month between the 16th and 23rd." : "1.اعضاي حزب مي تواند براي درخواست نامزدي کنگره هر ماه بين 16 و 23." ,
	"2. Party president can modify the final list only on the 24th of each month" : "2.حزب رئيس جمهور مي تواند در فهرست نهايي تنها در 24 هر ماه را تغيير دهد" ,
	"3. Each party can propose a maximum number of 1 candidate per region." : "3.هر حزب مي تواند حداکثر تعداد، از مجموع 1 نامزد در هر منطقه را پيشنهاد کند." ,
	"Edit presentation" : "ويرايش ارائه" ,
	"Your total war influence" : "تاثير شما در کل جنگ" ,
	"Assemble" : "مونتاژ" ,
	"Bazooka" : "ضد تانک" ,
	"Defeat the enemy with 1 hit." : "شکست دشمن با 1 ضربه." ,
	"Collections" : "مجموعه" ,
	"Defeat 25 enemies for 50 different countries" : "شکست 25 دشمن براي 50 کشور مختلف" ,
	"countries" : "کشور" ,
	"Mercenary" : "سرباز مزدور" ,
	"Travelling cost:" : "هزينه سفر" ,
	"N/A" : "نامعلوم" ,
	"Zone" : "منطقه" ,
	"You can now change location without using a moving ticket." : "شما مي توانيد بدون استفاده از بليت محل اقامت کنوني خود را تغيير دهيد." ,
	"Go back" : "بازگشت به عقب" ,
	"Leave eRepublik?" : "مرخصي ايريپابليک؟" ,
	"You are about to leave eRepublik. Are you sure it's safe to follow this link?" : "شما مي خواهيد از ايرپابليک خارج شويد. آيا مي خواهيد از ايريپابليک خارج شده و به لينک زير برويد؟" ,
	"Turkey" : "ترکيه" ,
	"Next battle in" : "جنگ بعدي در" ,
	"Still active" : "هنوز فعال است" ,
	"Join Resistance" : "جنگ براي انقلابيون" ,
	"Join Turkey" : "جنگ براي ترکيه" ,
	"VS" : "در مقابل" ,
	"used" : "استفاده شده" ,
	"Your found 1 barrel click to collection" : "شما 1 لوله تفنگ پيدا کرديد، کليک کنيد تا به مجموعه اضافه شود" ,
	"Your found 1 stock click to collection" : "شما 1 قنداق تفنگ پيدا کرديد، کليک کنيد تا به مجموعه اضافه شود" ,
	"Your found 1 scope click to collection" : "شما 1 نشانه گير تفنگ پيدا کرديد، کليک کنيد تا به مجموعه اضافه شود" ,
	"Your found 1 trigger kit click to collection" : "شما 1 کيت ماشه پيدا کرديد، کليک کنيد تا به مجموعه اضافه شود" ,
	//"Your found 1 barrel click to collection" : "" ,
	"Argentina Campaigns" : "جنگ هاي آرژانتين" ,
	"Next elections in one day" : "انتخابات بعدي در يک روز ديگر" ,
	"Join Argentina" : "جنگ براي آرژانتين" ,
	"Join Spain" : "جنگ براي اسپانيا" ,
	"This war is no longer active." : "اين جنگ ديگر فعال نيست" ,
	"Reward" : "پاداش" ,
	"1Gold" : "1طلا" ,
	"Spain Campaigns" : "جنگ هاي اسپانيا" ,
	"Join Hungary" : "جنگ براي مجارستان" ,
	"Hungary Campaigns" : "جنگ هاي مجارستان" ,
	"Get resources" : "دريافت منابع" ,
	"Work anyway" : "به هر حال کار" ,
	"Join Iran" : "جنگ براي ايران" ,
	"Select a country" : "انتخاب کشور" ,
	"Food limit reached" : "حد مواد غذايي رسيده" ,
	"Buy health kit" : "خريد کيت سلامت" ,
	"Society builder" : "انجمن ساز" ,
	"True Mercenary" : "مزدور درست" ,
	"Armory: Bazooka." : "کارخانه اسلحه سازي: ضد تانک" ,
	"Oops, something went wrong." : "اوه، چيزي اشتباه است" ,
	"Go to homepage" : "رفتن به صفحه اصلي" ,
	"The server is apparently unavailable for the moment. We're doing everything we can to correct the problem. Please try again later." : "سرور ظاهرا براي لحظه اي در دسترس نيست. ما در حال انجام همه چيز هستيم ما مي توانيم اين مشکل را اصلاح کنيم. لطفا بعدا مراجعه کنيد" ,
	"Republic of China (..." : "تايوان" ,
	"You have reached your food consumption limit." : "شما مقدار معين شده سلامتي خود را پر کرديد" ,
	"You can recover 100 health every hour." : "شما مي توانيد 100 سلامتي بعد از زمان معين شده بدست آوريد" ,
	"Good job! Please prove you are human" : "آفرين! لطفا ثابت کنيد انسان هستند" ,
	"Intermediate results" : "نتايج : متوسط" ,
	"The official results will be announced in:" : "نتايج رسمي اعلام خواهد شد در :" ,
	"The election committee is currently checking the votes to ensure the fairness of the elections." : "کميته انتخابات در حال چک کردن آرا مي باشد تا آراعادلانه باشد" ,
	"Thank you for your patience!" : "از صبر شما متشکريم!" ,
	"Hello, Congress Member" : "سلام کاربر کنگره" ,
	"Your proposals" : "لايحه هاي شما" ,
	"Maintenance. We'll be back in 11 minutes." : "تعمير و نگهداري، تعمير خواهد شد در 11 دقيقه" ,
	"Maintenance. We'll be back in 9 minutes." : "" ,
	"Constantly check the progress you do on missions." : "همواره پيشرفت شما را در ماموريت هاي انجام بررسي کنيد." ,
	"No more food" : "غذايي نداريد" ,
	"Total Opponents Defeated" : "مجموع شکست مخالفان" ,
	"Change location" : "تغيير مکان" ,
	"No thanks" : "نه ممنون" ,
	"You will now be fighting against Iran." : "شما هم اکنون مي خواهيد عليه ايران مبارزه کنيد." ,
	"Do you want to go to Iran and fight for your country?" : "آيا شما مي خواهيد به ايران برويد و براي ايران مبارزه کنيد؟" ,
	"Join Serbia" : "جنگ براي صربستان" ,
	"War status" : "وضعيت جنگ ها" ,
	"Active wars" : "جنگ هاي فعال" ,
	"Ended wars" : "جنگ هاي پايان يافته" ,
	"Countries involved" : "کشورهاي درگير" ,
	"War types" : "انواع جنگ" ,
	"Conquest wars" : "فتح جنگ" ,
	"Serbia Campaigns" : "جنگ هاي صربستان" ,
	"earned a Battle Hero medal." : "به دست آوردن مدال نبرد." ,
	//"The Battle Hero achievement is awarded for dealing the highest influence in a battle." : "" ,
	"Build your Bazooka" : "ساخت ضد تانک شما" ,
	"To fight now by health kits using gold." : "براي مبارزه موفق کيت هاي سلامت را با طلا خريداري کنيد" ,
	"Complete your collection." : "مجموعه شما کامل شد." ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
	
	
// ==واحد پول==
	"BGN" : "لف جديد" ,
	"MKD" : "دنار" ,
    "RUB" : "روبل" ,
    "PKR" : "رروپيه پاکستان" ,
	"INR" : "روپيه" ,
	"BRL" : "کروزيرو" ,
	"PLN" : "زلوتي" ,
	"RSD" : "دينار جديد صربستان" ,
	"JPY" : "ين" ,
	"ITL" : "يورو" ,
	"TRY" : "لير" ,
	"NIS" : "شکل" ,
	"EGP" : "ليره (پوند) مصر" ,
	"DEM" : "يورو" ,
	"CYP" : "يورو" ,
	"CAD" : "دلار کانادا" ,
	"NZD" : "دلار نيوزيلند" ,
	"AUD" : "دلار استراليا" ,
	"CHF" : "فرانک سوئيس" ,
	"IDR" : "روپيه اندونزي" ,
	"ATS" : "يورو" ,
	"ESP" : "پزوتا" ,
	"CLP" : "پزو شيلي" ,
	"FRF" : "يورو" ,
	"HUF" : "فورينت" ,
	"CNY" : "يووان چين" ,
	"USD" : "دولار آمريکا" ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
// ==/واحد پول==
	

};






var regexps = {};
//============

regexps["Storage \\(capacity: (.*)\\)"] ="انبار با ظرفيت: $1";
//regexps["All national goals have been accomplished."] ="";

regexps["Active wars in (.*)"] = "جنگ‌هاي فعال"; 
regexps["Active resistance wars in (.*)"] = "انقلاب‌هاي فعال";
regexps["300 characters remaining"] = "$1 کاراکتر باقي مانده";
regexps["only(.*)pictures allowed"] = "تنها تصاوير $1 مجاز مي‌باشند";
regexps["You have 34 newspaper subscriptions"] = "شما مشترک $1 روزنامه ميباشيد";
regexps["(.*) Campaigns"] = "جنگ‌هاي $1";

regexps["(.*) proposes to stop the trade with (.*)"] = "$1 پيشنهاد تحريم تجارت با $2 را ارايه کرده است"; 
regexps["Day (.*) of the New World"] = "روز $1 در دنياي جديد";

regexps["Maintenance. We'll be back in (.*) minutes."] = "تعمير و نگهداري، تعمير خواهد شد در $1 دقيقه";

regexps["(.*) produced"] = "$1 توليد شد"; 
regexps["Your current Strength level(.*)"] = "قدرت شما در حال حاضر $1"; 
regexps["Successfuly transfered (.*) item(s) to (.*)"] = "شما با موفقيت $1 کالا را براي $2 فرستاديد"; 

regexps["Congratulations, you have reached experience level(.*)"] = "تبريک مي گوييم، تجربه شما افزايش يافت حالا تجربه شما $1 است";

regexps["You have succesfully bought (\\d+) product(s)? for (.*)(\\.)?$"] = "شما با موفقيت تعداد $1 عدد از اين کالا را خريديد به قيمت: $3 ";
regexps["^You do not have enough money in your account.$"] = "پول کافي نداريد";

regexps["Hi(.*)I'm Emma, the company's secretary. You look like you will be very productive today!"] = "سلام $1 من Emaa هستم، منشي کارخانه. شما امروز سرشار از انرژي کار به نظر مي‌آييد.";
regexps["Basic productivity"] = "توليد پايه";
regexps["Fantastic job, (.*) I'm already looking forward to seeing you again tomorrow. Bye!"] = "$1 کار شما عالي بود. به اميد ديدار. خدانگهدار تا فردا.";

regexps["Welcome(.*)I am Lana. Ready for your daily military training? Remember: the more trained you are, the more damage you do in battles and the more Super Soldier Medals you win! Good luck!"] = "خوش آمديد $1. من Lana هستم. براي تمرين روزانه‌ي خودتان آماده هستيد؟ به ياد داشته باش: تمرين بيشتر باعث وارد آوردن خسارت بيشتري به دشمن در جنگ‌ها مي‌شود و در نتيجه‌ي مدال قهرمان نبرد بيشتري به دست خواهي آورد.";
regexps["Awesome performance, (.*) Can't wait to have the next training session with you!"] = "$1 کارتان شاهکار بود، نمي‌توانم تا فردا براي تمرين بعدي صبر کنم";

regexps["Strength level: (.*) / (.*) for the next Super Soldier Medal"] = "سطح قدرت: $1. براي مدال بعدي سرباز کهنه‌کار به قدرت $2 بايد برسيد.";

regexps["You already have a job at (.*)(\\.) To apply for this job you have to quit your current job."] = "شما در کارخانه $1 مشغول کار هستيد، براي پذيرفتن کار جديد بايد از شغل قبلي استعفا بدهيد";

regexps["^General Manager$"] = "مدير ارشد";
regexps["^Friends\\((\\d*)\\)"] = "دوستان $1";


regexps["\\((.*) increase\\)"] = "(افزايش$1)";
regexps["On day (.*) have a population of (.*) citizens"] = "در روز $1 جمعيت برابر بود با $2شهروند";
regexps["On day (.*) have a GDP of (.*) Gold"] = "در روز $1 افزايش توليد داخلي برابر بود با $2 طلا";
regexps["On day (.*) keep control of the following regions:"] = "در روز $1 اين مناطق تحت کنترل بود";

regexps["Regions \\((\\d*)\\)"] = "مناطق ($1)";

regexps["Citizens"] = "شهروندان";

regexps["(\\d*) months ago"] = "$1 ماه پيش";
regexps["(\\d*) days ago"] = "$1 روز پيش";
regexps["(\\d*) hours ago"] = "$1 ساعت قبل";
regexps["wrote (\\d*) hours ago"] = "نوشته شده در $1 ساعت قبل";
regexps["(\\d*) minutes ago$"] = "$1 دقيقه قبل";
regexps["wrote (\\d*) minutes ago$"] = "نوشته شده در $1 دقيقه قبل";
regexps["(.*) attacked (.*),(.*). Fight for your ally \\((.*)\\)!"] = "$1 حمله کرد به $3 از $2 براي متحد خود $4 بجنگيد";
regexps["(.*) signed an alliance with (.*)"] = "$1 قرارداد همکاري نظامي با $2 امضا کرد";
regexps["A congress donation to (.*) was proposed"] = "پرداخت از طرف مجلس به $1 پيشنهاد شد";
regexps["(.*) made a donation to (.*)"] = "$1 پرداخت به $2";
regexps["New taxes for (.*) were proposed"] = "ماليات جديد براي $1 پيشنهاد شد";
regexps["Taxes for (.*) changed"] = "ماليات $1 تغيير کرد";
regexps["A money issuing of (.*) was proposed"] = "پيشنهاد هزينه صادرات براي $1";
regexps["(.*)as new Natural Enemy proposal has been rejected."] = "$1 به عنوان دشمن ملي مورد تاييد قرار نگرفت";
regexps["(.*) Province was conquered by Resistance force of (.*) in the war versus (.*)"] = "$1 توسط نيروهاي انقلابي $2 درجنگ مقابل $3 آزاد شد";
regexps["(.*) attacked (.*), (.*)"] = "$1 به $2 از مناطق $3 حمله کرد";
regexps["(.*) was conquered by (.*) in the war versus (.*)"] = "$1 توسط $2 در جنگ مستقيم با $3 فتح شد";
regexps["President of (.*) proposed an alliance with (.*)."] = "رييس جمهور $1 پيشنهاد اتحاد با $2 را داد";
regexps["President of (.*)"] = "رييس جمهور $1";



regexps["^(\\d*) comments$"] = "$1 نظر";
regexps["^Comments(.*)"] = "نظر $1";
regexps["^Trackbacks (.*)"] = "پي نوشت $1";

regexps["(\\s*)Expires in (\\d*) days"] = "$2 روز ديگر از بين ميرود";
regexps["(\\s*)Expires in (\\d*) hours"] = "$2 ساعت ديگر از بين ميرود";
regexps["(\\s*)Expires in (\\d*) months"] = "$2 ماه ديگر از بين ميرود";

regexps["(\\d*) allies"] = "$1 متحدان";
regexps["(\\d+) active battle(s)?"] = "$1 نبرد فعال";
regexps["Resistance Force of (.*)"] = "نيروهاي انقلابي $1";
//regexps["Resistance Force Of (.*)"] = "نيروهاي انقلابي $1";
regexps["You need to move to(.*)to join the fight."] = "براي شرکت در جنگ بايد به $1 نقل مکان کنيد";

regexps["I have read and agree with the(.*)"] = "من مطالعه کردم و با $1 موافق هستم";

regexps["Employee list \\((\\d*)\\)"] = "کارمندان ($1)";
regexps["Job offers \\((\\d*)\\)"] = "پيشنهاد کار ($1)";

regexps["Do you agree to represent your party in the congress election in (.*)(\\?)"] = "آيا مي‌خواهيد نماينده‌ي حزبتان در انتخابات مجلس $1 باشيد؟";
regexps["Increase population (.*)"] = "افزايش جمعيت $1";
regexps["Each party can propose a maximum number of (\\d*) candidates per region."] = "هر حذب مي‌تواند حداکثر $1 نماينده در منطقه داشته باشد",



regexps["You only have (\\d*) experience points. To access this feature you need at least 80 experience points \\(experience level 14\\)."]="شما تنها $1 امتياز تجربه داريد، براي دسترسي به اين قابليت بايد حداقل ?? امتياز داشته باشيد( سطح ??)";

regexps["Proposed by"] = "پيشنهاد شده توسط";
regexps["Proposing presidential impeachment is not possible in the last (\\d*) days of the presidential mandate."] = "استيضاح رييس جمهور تا $1 روز بعد از حکم رياست جمهوري ممکن نمي‌باشد.",
regexps["Citizen fee change from (.*) to (.*)"] = "سرمايه‌ي اوليه شهروندان از  $1 به $2 تغيير کرد";
regexps["Minimum wage change from (.*) to (.*)"] = "حداقل دستمزد از $1 به $2 تغيير کرد";
regexps["Do you agree to transfer (.*) from the country accounts to (.*)\\?"] = "آيا موافق هستيد مقدار $1 از خزانه کشور به $2 منتقل شود؟";
regexps["Do you agree with the proposal to issue(.*)for(.*)(\\?)"] = "آيا موافق چاپ $1 به جاي $2 هستيد؟";

regexps["(.*) has been proposed as Natural Enemy."] = "$1 به عنوان دشمن ملت پيشنهاد شد";
regexps["(.*) has declared (.*) as a Natural Enemy"] = "$2 به عنوان دشمن ملت $1 شناخته شد.";
regexps["Do you want the current president of(.*)to end this office?"] = "آيا مايل به برکناري رييس جمهور کنوني $1 هستيد";

regexps["Do you agree that(.*)should buy a(.*)of quality(.*)from(.*)at the price of(.*)for(.*)(\\?)"] = "آيا موافق هستيد $1 يک $2 با کيفيت $3 از $4 با قيمت $5 براي نصب در $6 خريداري کند؟";

regexps["Military Campaigns"] = "جنگ‌هاي فعال";
regexps["Citizen feeds"] = "صحبت شهروندان";
regexps["News"] = "اخبار";

if (document.location.toString().indexOf("/gold-bonus/")!=-1) {regexps["Collect(.*)Gold"] = "برداشت $1 سکه‌ي طلا";}


if (document.location.toString().indexOf("/messages/alerts/")!=-1) {
regexps["The General Manager of"] = "مدير ارشد کارخانه‌ي";
regexps["has modified your salary from (.*) to (.*)"] = "دستمزد شما را از $1 به $2 افزايش داد";
regexps["^is no longer a congress member.$"] = "ديگر نماينده کنگره نمي‌باشد";
regexps["^Good news! You just made (.*) Gold because your friend (.*) was awarded with an amount of Gold from eRepublik.$"] = "خبر خوب، شما $1 طلا به دست آورديد، زيرا دوستتان $2 طلاي تشويقي از سايت جمهوري مجازي دريافت کرده ";
regexps["^Collect your Gold$"] = "طلايتان را برداشت کنيد";
regexps["^bonus within 30 days!$"] = "در حد اکثر ?? روز";
regexps["^has transfered (.*) to your account.$"] = "به اکانت شما $1 ارسال کرد";
regexps["(.*)has transferred(.*)to your storage."] = "$1 به انبار شما $2 ارسال کرد";

regexps["^has transfered (.*) products to your inventory. Check your$"] = "به فهرست شما $1 کالا ارسال کرد.";
}
 

regexps["^Manage accounts(.*)\\((\\d*)\\)$"] = "مديريت حساب‌ها ($2)";

//var mr = undefined;
//if (document.location.toString().indexOf("citizen/profile")!=-1) {
//regexps["Recruit"] = "سرباز آموزشي";
//regexps["Private"] = "سرباز";
//regexps["Corporal"] = "سرجوخه";
//regexps["Sergeant"] = "گروهبان";
//regexps["Lieutenant"] = "ستوان";
//regexps["Captain"] = "سروان";
//regexps["Major"] = "سرگرد";
//regexps["Commander"] = "سرهنگ سوم";
//regexps["Lt Colonel"] = "سرهنگ دوم";
//regexps["Colonel"] = "سرهنگ";
//regexps["General"] = "سرتيپ";
//regexps["Field Marshal"] = "سرلشکر";
//regexps["Supreme Marshal"] = "سپهبد";
//regexps["National Force"] = "ارتشبد";
//regexps["World class Force"] = "جنگ سالار";
//regexps["Legendary Force"] = "جنگجوي افسانه‌اي";
//regexps["God of War"] = "خداي جنگ";
//}


trim = function (str) {
    str = new String(str);
	return str!==null ? str.replace(/^\s*/, "").replace(/\s*$/, "") : null;
};



matchRegexps = function(key) {
	var key = trim(key);
    key = new String(key);
	if (key===null) {
        return undefined;
    }
    
    for (var reg in regexps) {
        var rrrr = new RegExp(reg);	//var txt=new RegExp(pattern,modifiers);
        var result = key.match(rrrr);

        if (key.match(rrrr)!==null) {
            return key.replace(rrrr,regexps[reg]);	
        }
    }
    return undefined;
};



translateWithRegexp = function(key) {
    if (strings[key]!==undefined) {
        return strings[key];
    } else {
        var key2 = trim(key);
        if (strings[key2]!==undefined) {
        return strings[key2];
        }
    }
    return matchRegexps(key);
};



var allTrans = {
	"span":"",
	"a":"",
	"h2":"","h3":"","h4":"","h5":"",
	"th":"","tr":"","td":"",
	"p":"",
	"b":"",
	"small":"","big":"",
	"strong":"",
	"div":"",
	"label":"",
	"input":"",
	"li":"",
	"em":"",
	"option":"",
	"form":"" ,
	"":"",
    };




translateWholePage = function(e) {

  var node = undefined;
  for (var tagName in allTrans) {
    var tags = document.getElementsByTagName(tagName);
    for (var key in tags) {
      node = tags[key];
      
	if ( node.tagName == "INPUT" && node.type == "submit" || node.type == "button" ||node.type == "text" )
      {
        //GM_log( node.value );
        var trans = translateWithRegexp(node.value);
        //GM_log( trans ); 
        if (trans!==undefined) {
          node.value = trans;
        }
      }
      
      else if (node.childNodes) {
        if (node.childNodes.length<=3) {
          for (var i=0;i<node.childNodes.length;i++) {
            if (node.childNodes[i].nodeName=="#text") {
              translation = translateWithRegexp(node.childNodes[i].nodeValue);
              if (translation!==undefined) {
                node.childNodes[i].nodeValue = translation;
              }
            }
          }
        }	
      } else {
		var translation = translateWithRegexp(node.innerHTML);
        if (translation!==undefined) {
          node.innerHTML = translation;
        }
      }
    }
  }
}
$(function(e) {translateWholePage(e);});






$("li#menu5 > ul").append(
						"<li><a target=\"_blank\" href=\"http://translate.google.com/#auto|fa|\">مترجم گوگل</a></li>"+
						"<li><a target=\"_blank\" href=\"http://eiran.co.cc/forum/forum.php\">eIran تالار گفتگو</a></li>"+
						"<li><a target=\"_blank\" href=\"http://www.erepublik.com/en/citizen/profile/3020946\">KiavashMaz</a></li>"+
						"<li><a target=\"_blank\" href=\"http://www.erepublik.com/en/citizen/profile/3351451\">Azarbaycan</a></li>"+
						"<li><a target=\"_blank\" href=\"http://economy.erepublik.com/en/citizen/donate/money/3020946\">پرداخت هديه به مترجم</a></li>"
						);


$("#footer p.follow").append(
						"<a target=\"_blank\" href=\"http://www.erepublik.com/en/party/democratic-liberal-party-1121/1\">حزب ليبرال دموکرات ايران</a></li>"
						);


$("div#articles").append(
						"<a class=\"mbutton\" target=\"_blank\" href=\"http://www.erepublik.com/en/news/rated/all\"><img alt=\"\" src=\"http://png-2.findicons.com/files/icons/2360/spirit20/20/newspaper.png\"><span>برترين روزنامه‌ها</span></a>"+
						"<a class=\"mbutton\" target=\"_blank\" href=\"http://www.erepublik.com/en/news/latest/all\"><img alt=\"\" src=\"http://png-2.findicons.com/files/icons/2360/spirit20/20/newspaper.png\"><span>جديدترين روزنامه‌ها</span></a>"+
						"<a class=\"mbutton\" target=\"_blank\" href=\"http://www.erepublik.com/en/news/international\"><img alt=\"\" src=\"http://png-2.findicons.com/files/icons/2360/spirit20/20/newspaper.png\"><span>بين المللي</span></a>"+
						"<a class=\"mbutton\" target=\"_blank\" href=\"http://www.erepublik.com/en/news/military\"><span>آخرين وقايع</span></a>"
						);


$("tbody").css("font-size","12px "); 
$("a.dotted").css("font-size","12px ");

 //						"<a target=\"_blank\" href=\"http://www.erepublik.com/en/party/democratic-liberal-party-1121/1\"><img src=\"http://static.erepublik.com/uploads/avatars/Parties/2008/05/13/3a15c7d0bbe60300a39f76f8a5ba6896_55x55.jpg\"></a>"+

if (document.location.toString().indexOf("military/battlefield")!=-1) {
 var blue_domination=document.getElementById('blue_domination');
  if (blue_domination)
  {
blue_domination.setAttribute('style', 'opacity: 1; -moz-opacity: 1;');
var  red_domination=document.getElementById('red_domination');
red_domination.setAttribute('style', 'opacity: 1; -moz-opacity: 1;');

function fixwidth() {
var getblue=document.getElementById('domination_bar').style.getPropertyValue("width");
blue_domination.innerHTML = getblue;
getred=(100-getblue.replace('%',''))+'';
red_domination.innerHTML = getred.substring(0,7) +'%';}
setInterval(fixwidth, 4000);
}
}


var stockno = 0;
var stock = 0;
for (i=1; i<=10; i=i+1){if(eval($('.m_stock').eq(i).text())){stockno++;}}
for (i=1; i<=stockno; i=i+1)
{
stock +=eval($('.m_stock').eq(i).text());
}
$('.m_stock').eq(0).text("مقدار:"+stock);


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

	addGlobalStyle('h1 { font-size: 14px ! important; }');
	addGlobalStyle('tbody, .dotted, .core { font-size: 12px ! important; }');
	addGlobalStyle('.quarterhead { font-size: 11px ! important; }');
	addGlobalStyle('.x { font-size: 18px ! important; }');
	addGlobalStyle('#menu ul li#menu1 a, #menu ul li#menu2 a, #menu ul li#menu3 a, #menu ul li#menu4 a, #menu ul  li#menu5 a, #menu ul  li#menu6 a, #logo a { background-image: url(http://eslamzadeh.persiangig.com/erepublik/background.png); }');
//http://up.iranblog.com/images/fduss3ql3dgle0cnx3a.png	
//http://up.iranblog.com/images/fb8hq87ayvjmhckehruk.png
	addGlobalStyle('.btnGetExtraStorage { font-size: 10px; }');
	addGlobalStyle('body { font-family: tahoma; }');
	addGlobalStyle('.charTooltips, .arrowbutton { font-family: tahoma; }');
	addGlobalStyle('.preview, .articlecontent { font-family: dejavu sans, tahoma, sans-serif !important; font-size: 10pt; direction: rtl; text-align: right !important; }');
	addGlobalStyle('.preview b /*, b */ { font-family: nazli, titr, serif !important; font-size: 13pt !important; }');
	addGlobalStyle('li.wall_post p, .msg_body, .smallholder { font-family: dejavu sans, tahoma, sans-serif !important; font-size: 10pt; direction: rtl; }');
	addGlobalStyle('.smallholder { font-family: dejavu sans, tahoma, sans-serif !important; font-size: 9pt; direction: rtl; }');
	addGlobalStyle('.post_reply a { display: block; }');
	//addGlobalStyle('.largepadded { text-align: right; }');
	addGlobalStyle('.user_pic { position: absolute !important; display: block; left: auto !important; right: 0 !important; }');
	addGlobalStyle('.post_content h6 { text-align: right !important; display: block; }');
	addGlobalStyle('.post_content h6 a { float: right; padding-left: 5px; }');
	addGlobalStyle('#citizen_feed .wall_post .second_actions, #citizen_feed .wall_post .second_actions_comments { right: auto !important; left: 0 !important; }');
	//addGlobalStyle('.resizable-textarea textarea { font-family: tahoma, sans-serif !important; font-size: 10pt; direction: rtl; position: relative; margin-right: 50px !important; margin-top: 30px !important; width: 600px !important; }');
	addGlobalStyle('.fakeheight { direction: rtl; text-align: left; }');
	addGlobalStyle('.front_quotes div.second p { margin-top: 1px;}');
	addGlobalStyle('.front_quotes div.first, .front_quotes div.second, .front_quotes div.third { padding-top: 2px; text-align: right; }');
	addGlobalStyle('#translate_news_0{ float: left !important; margin-top: 17px !important; }');
	addGlobalStyle('textarea#citizen_message { text-align: righ; !important;}');
	addGlobalStyle('.your_subs {font-size: 8pt;}');
	addGlobalStyle('.fluid_blue_dark {margin-top: 5px;}');
	addGlobalStyle('.markItUpEditor, #article_comment, #article_name, #article_category {font-family: tahoma !important; text-align: right; direction: rtl;}');