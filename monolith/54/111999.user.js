// ==UserScript==
// @name		eRepublik Macedonian Language Script Translation
// @namespace		edited by iksimkd ( iksimkd@gmail.com)
// @description		eRepublik Macedonian Language Translation Script
// @version		Ver 1.0.1
// @include		http://*.erepublik.com/*
// @exclude     http://wiki.erepublik.com/*
// @exclude     http://forum.erepublik.com/*



// ==/UserScript==



/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2011-02-09 14:34:21 -0500 (Thu, 19 Feb 2009)
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
	"% of votes" : "% гласови",
	"6-30 characters max" : "максимум 6-30 карактери",
	"1-80 characters max" : "максимум 1-80 карактери",
	"ACCEPTED" : "ПРИФАТЕНО",
	"Accepted" : "Прифатено",
	"Accepted invites" : "Прифатени покани",
	"Accounts" : "Сметки",
	"A newspaper is an efficient way to communicate your news to the eRepublik world. Read more on the eRepublik Wiki. Create your own newspaper." : "Весниците се еден од најефикасните начини за комуникација со еРепублик играчите. Прочитај повеќе на еРепублик Вики. Направи свој весник.",
	"Achievements" : "Достигнувања",
	"active battles " : "активни битки",
	"Active wars list" : "Листа на активни војни",
	"Add a job offer" : "Отвори понуда за работа",
	"Add as a friend" : "Додај за пријател",
	"Administration" : "Администрација",
	"ADMINISTARATION CENTER" : "Административен центар",
	"Advanced 250 strength points" : "Напредни за 250 поени јачина",
	"Advance 250 strength points" : "Напреднете за 250 поени јачина",
	"Invited 10 people to eRepublik and helped them reach level 10" : "Поканете 10 луѓе во еРепублик и помогнете им да достигнат ниво 10",
	"regions." : "региони.",
	"Advertising Department" : "Оддел за рекламирање",
	"Affiliates" : "Спонзорирање",
	"Add from address book" : "Додај од адресар",
	"Add contacts:" : "Додај контакти:",
	"Add" : "Додај",
	"Alerts" : "Известувања",
	"All accounts"  : "Сите сметки",
	"All Alliances" : "Сите алијанси",
	"All countries" : "Сите држави",
	"All donations" : "Сите донации",
	"all donations" : "сите донации",
	"All employees" : "Сите вработени",
	"All levels" : "Сите нивоа",
	"All regions" : "Сите региони",
	"All resistance wars" : "Сите војни за отпор",
	"All skills" : "Сите вештини",
	"All invites" : "Сите покани",
	"All industries" : "Сите индустрии",
	"All wars" : "Сите војни",
	"Alliance" : "Алијанса",
	"Alliances" : "Алијанси",
	"Amazing fight" : "Одлична борба",

	"Ambassador" : "Амбасадор",
	"Amount" : "Сума",
	"Amount to buy" : "Сума за купување",
	"Anarchist" : "Анархист",
	"Apply" : "Примени",
	"Approved" : "Одобрено",
	"Approved on" : "Одобрен на",
	"Approved by" : "Одобрен од",
	"Argentina" : "Аргентина",
	"Army" : "Армија",
	"Article" : "Статија",
	"Article RSS" : "RSS Статија",
	"Assets" : "Средства",
	"A taste of what you can do in eRepublik" : "Вкус на сето она што можете да го направите во еРепублик",
	"Attackable on President's decision" : "Овозможен напад по одлука на Претседател",
	"Attention: NO VAT tax for Raw materials" : "Внимание: Нема ДДВ за суровински материјали",
	"August" : "Август",
	"Australia" : "Австралија",
	"Austria" : "Австрија",
	"Average" : "Просек",
	"Average Citizen level" : "Просечно граѓанско ниво",
	"Average citizen level" : "Просечно граѓанско ниво",
	"Average strength" : "Просечна јачина",
	"Back" : "Назад",
	"Basic productivity" : "Основна продуктивност",
	"Back to army" : "Назад во армија",
	"Back to company" : "Назад кон компанијата",
	"Back to battlefield" : "Назад на бојното поле",
	
	"Basic damage" : "Основна штета",
	"Battle Hero" : "Херој на битка",
	"Battle hero" : "Херој на битка",
	"Campaign Hero" : "Херој на кампања",
	"Campaign hero" : "Херој на кампања",
	"Battle History" : "Историја на битка",
	"Battle history" : "Историја на битка",
	"Battles you can fight in" : "Борби во кои можете да се борите",
	"Belgium" : "Белгија",
	"Be a chat room owner" : "Бидете сопственик на соба за IRC чат!",
	"Bio" : "Био",
	"Bolivia" : "Боливија",
	"BORDER AREA" : "Гранична област",
	"Bosnia and Herzegovina" : "Босна и Херцеговина",
	"Brazil" : "Бразил",
	"Bulgaria" : "Бугарија",
	"Buy" : "Купи",
	"Buy Constructions" : " Купи Конструкции ",
	"Buy Constructions: Defense System" : " Купи Конструкции: Систем за одбрана ",
	"Buy Constructions: Hospital" : " Купи Конструкции: Болница ",
	"Buy export license" : " Купи лиценца за извоз ",
	"Get Extra Storage" : "Земи екстра магацин",
	"Buy from market" : " Купи од маркет ",
	"Buy market license" : " Купи дозвола за маркет ",
	"Buy raw materials" : "Купи сурвоини",
	"Buy wellness" : " Купи здравје ",
	"Buy Wellness Box" : " Купи Кутија за Здравје  ",
	"builder" : "градежник",
	"BY SALES" : "Продажба",
	"Canada" : " Канада ",
	"Candidate" : " Кандидат ",
	"CAPITAL" : "ГЛАВЕН",
	//"Captain" : " Капетан ",
	"CAPTURED" : " Заробен ",
	"Career" : " Кариера",
	"Career path" : " ???? ???? ",
	"Center" : "Централно",
	"candidate" : "кандидат",
	"Center, Authoritarian" : "Централно, Авторитарна",
	"Center-left, Libertarian" : "Централно-лево, Либерално",
	"Center, Libertarian" : "Централно, Либерално",
	"Center-right, Libertarian" : "Централно-Десно, Либерално",
  "Center-right Wing" : "цен.десно крило",
  "Center-left Wing" : "цен.лево крило",
	"Chat rooms" : "Чет соби",
	"Chat room" : "Чет соба",
	"Change" : "Промени",
	"Change the location of your newspaper" : "Променетелокација на Вашиот весник",
	"Change password" : " Промени шифра ",
	"Change residence" : "Промени престој",
	"Check your unlocked features" : "Провери Ваши отклучени предност",
	"Check rankings" : "Провери рангирање",
	"Choose a training program" : "Одбери програм за тренинг",
	"Choose industry" : "Одбери индустрија",
	"Chile" : "Чиле",
	"China" : "Кина",
	"Citizen" : "Граѓанин",
	"Citizenship bonus" : "Граѓански бонус",
	"Citizen Avatar" : "Аватар на граѓанин",
	"Citizen name" : "Име на граѓанин",
	"Citizen fee" : "Граѓанска такса",
	"Citizen permanently suspended for multiple accounts." : "Граѓанинот е суспендиран поради поседување на повеќе сметки.",
	"Citizens" : "Граѓани",
	"Citizenship" : "Државјанство",
	"Citizenship applications" : "Апликации за Државјанство",
	"Citizenship requests" : "Барања за државјанство",
	"CITY" : "Град",
	"Collect" : "Прибери",
	"Colombia" : "Колумбија", 
	//"Colonel" : "Полковник",
	"Come back tomorrow." : "Дојди утре.",
	"Companies" : "Фирми",
	"Select company" : "Одберете фирма",
	"Companies for sale" : "Фирми за продавање",
	"Company" : "Фирма", 
	"Company accounts" : "Сметки на фирма",
	"Company details" : "Детали", 
	"Company page" : "Фирма страна",
	"Company market" : "Пазар за Фирми",
	"Company name" : "Име на Фирма",
	"Company logo" : "Лого на фирма",
	"Community" : "Заедница",
	"Conquer" : "Освојува",
	"Continue" : "Понатаму",
	"Congress" : " Конгрес ",
	"Congress Elections" : "Конгрес избори ",
	"Congress Member" : " Член на конгрес ",
	"Congress member candidates" : "кандидати за член во конгрес ",
	" congress members" : " членови на конгрес  ",
	"Constructions": "Конструкции",
	"Contact": "Контакт",
	"Copyright" : "Права",
	//"Corporal" : "??????",
	"Corporate career" : "Кариера",
	"Cost" : "Кошта", 
	"Countries" : "Држави",
	"Country" : "Држава",
	"Country stats" : "Држава статистика",
	"Country - Society" : "Државна-Заедница",
	"Country Administration" : "Администрација",
	"Country administration" : "Администрација",
	"Country Presidency" : "Претседателство",
	"Country presidency" : "Претседателство",
	"Country President" : "Претседател на Држава",
	"Country trading embargoes" : "Држави со Ембарго за трговија ",
	"Create" : "Направи",
	"Create company" : "Направи фирма",
	"Create chat room" : "????? ???? ??????",
	"Create new" : "Направи нов",
	"Create new company" : "Направи нова фирма",
	"Create newspaper" : "Направи весник",
	"Croatia" : "Хрватска",
	"Current location" : "Локација сегашна",
	"Current password" : "Сегашна шифра",
	"Current national goals" : "Моментални национални цели",
	"Czech Republic" : "Чешка",
	"Day" : "Ден",
	"days ago" : "дена порано",
	"Date sent" : "Дата пратена",
	"Daily salary" : "Дневна плата",
	"Dead citizen" : "Мртов граѓанин",
	"Debate Area" : "??? ???",
	"December" : "Декември",
	"Declare War" : "Декларирај војна",
	"Defense Points" : "Одбранбени поени",
	"Defense System" : "Одбранбен систем",
	"Defense system" : "Одбранбен систем",
	"defense system" : "одбранбен систем",
	"Description" : "Опис",
	"Delete" : "Бриши",
	"Denmark" : "Данска",
	"details" : "детали",
	"Diamonds" : "Дијаманти",
	"diamonds" : "дијаманти",
	"Disscusion Area" : "??? ???",
	"Discussion area" : "??? ???",
	"Do you want the current president of Republik of Macedonia (FYROM) to end this office?" : "Сакате моменталниот претседател на Р. Македонија да го разрешите",
	"Donate" : "Донација",
	"Donate Gold" : "Донирај злато",
	"Donate raw materials" : "Донирај суровини",
	"Donation" : "Донација",
	"Donations list" : "Лист за донација",
	"Drag and drop items from your inventory to the donation area" : "????? ???? ??? ?? ?? ??????? ??? ?? ???? ???? ????? ? ??? ????.",
	"Economic stats" : "Економска статистика",
	"Economical orientation" : "Економска ориентација",
	"Economy" : "Економија",
	"Emails to be invited: " : "Е-пошта да се покани:",
	"Email" : "Е-Пошта",
	"Edit" : "Уреди",
	"Edit details" : "Уреди детали",
	"Edit newspaper details" : "Уреди детали за весник",
	"edit profile" : "уреди профил",
	"Edit profile" : "Уреди профил",
	"Edit Profile" : "Уреди профил",
	"Election results" : "Изборни резултати",
	"Election" : "Избори",
	"Elections" : "Избори",
	"Email must be valid for registration, so do not cheat." : "Email must be valid for registration, so do not cheat.",
	"Employee" : "Вработен",
	"Employees" : "Вработени",
	"eRepublik Birthday" : "Роденден на еРепублика",
	"Erepublik Age" : "еРепублика години",
	"eRepublik Laws" : "еРепублика закон",
	"Estonia" : "Естонија",
	"Everyone" : "Сите",
	"Exchange rate" : "Курс",
	"Experience" : "Искуство",
	"Experience points" : "Искуствени поени",
	"Experience level" : "Искуствено ниво",
	"Experience gain" : "Искуство стекнато",
	"Expires tomorrow" : "Завршува утре",
	"Expires in one month" : "Завршува за 1 месец",
	"Exports" : "Извоз",
	"Far-right, Authoritarian" : "Далечно-десно, Авторитативно",
	"Far-left, Libertarian" : "Далечно-лево, Либерално",
	"Favorites" : "Омилени",
	"Featured Chat Room" : "???? ??? ?????? ???? ?????",
	"Featured rooms" : "???? ??? ?????",
	//"Field Marshal" : "?????",
	//"Field Marshall" : "?????",
	"Fight" : "БОРБА",
	"Fights" : "Борби",
	"Fight Again" : "Удри пак",
	"Fight bonus" : "Борбен бонус",
	"Finances" : "Финансии",
	"Final Results" : "Краен резултат",
	"Find out more" : "Најди повеќе",
	"Find a job" : "Најди работа",
	"Find a job or own a company. Having a job will allow you to get a salary each day you go to work (don't worry, in eRepublik it is much more fun and faster to go to work than in real life)." : "??? ?? ?? ??????? ?? ????? ??. ??? ?? ??? ????? ?? ??? ?? ??? ????? ??????.(????? ??????? ?? ?????????? ??? ????? ?? ???? ????? ?? ????? ?? ???)",
	"Finland" : "Финска",
	"Follow us" : "Следи не",
	"Food" : "Храна",
	"food" : "храна",
	"For the law to be considered accepted it needs 66% of the Congress votes" : "Да биде прифатен овој закон потребно е (66%) од гласовите во конгресот",
	"For this law to be considered accepted it needs 66% of the Congress votes." : "За да се прифати овој закон потребно е (66%) од гласовите во конгресот",
	"Force" : "Сила",
	"Forfeit Points:" : "Казнени поени:",
	"Forfeit Points" : "Казнени поени:",
	"forum" : "форум",
	"Forum" : "Форум",
	"France" : "Франција",
	"Friends" : "Пријатели",
	"From" : "Од",
	"Gain instant access to all features with" : "Добијте инстант влез до сите предности со:",
	//"General" : "Директор",
	"General Manager" : "Директор",
	"General manager" : "Директор",
	"Germany" : "Германија",
	"Get Extra Storage" : "Земи екстра склад",
	"Get Gold" : "Земи злато",
	"Get gold & extras" : "Земи злато & екстра",
	"Get Wellness" : "Земи здравје",
	"Gift" : "Поклон",
	"gift" : "поклон",
	"Go to Battlefield" : "Оди на бојно поле",
	"Go to marketplace" : "Оди на пазар",
  "Gold and Extras" : "Злато & екстра",
	
	"Goals" : "Цели",
	"Grain" : "Жито",
	"grain" : "жито",
	"Great fight" : "Одлична борба",
	"Greece" : "Грција",
	"Greece:" : "Грција:",
	"Gross domestic product (GDP)" : "Бруто домашен производ (БДП)",
	"Guest" : "Гостин",
	"has been secured by" : "е осигурано од",
	"Hard Worker" : "Јак работник",
	"Hard worker" : "Јак работник",
	"Having your own chat room allows you to administrate the discussions, assign moderators and provide an environment where citizens can socialize, interact and discuss upon the interesting topics of the New World." : "????? ??????????? ?? ??? ????? ?? ??? ??? ??? ????? ??? ?? ?????? ????.",
	"Having your own company may be a major source of wealth, but first you will need to make sure you have enough money to pay your future employees' salaries so that you don't go bankrupt." : "????? ??????? ???? ?? ????? ??? ?? ??????? ????? ????? ?? ???? ?? ??? ???? ???? ???? ???? ?? ????? ????? ?? ?????? ?????.",
	"Heal" : "Заздрави",
	"Hero" : "Херој",
	"hero" : "херој",
	"High": "Висок",
	"Home" : "Дома",
	"Hospital" : "Болница",
	"hospital" : "болница",
	"hours ago" : "часови порано",
	"House" : "Куќа",
	"house" : "куќа",
	"Hungary" : "Унгарија",
	"I have nothing more to say at the moment" : "Немам што да кажам во моментот!",
	"Import Tax" : "Увозни давачки",
	"Imports" : "Увоз",
	"In order to log in as an organization you have to log out from your citizen account and log in again with your organization username and password." : "???? ???? ?? ????? ???? ??? ???? ????? ?? ????? ?????????? ???? ??? ? ?? ??? ?????? ? ??? ???? ????? ??????? ???? ????.",
	"Inbox" : "Сандаче",
	"Info" : "Инфо",
	"If you’ve sent an invitation to a Yahoo! email address, please note that we are currently experiencing difficulties with Yahoo! email delivery" : "??? ?? ???? ???? ???? ???? ???? ??????? ???? ??? ???? ??? ???? ??? ???? ??? ????? ?? ?? ???? ?????? ????!",
	"If an invite has not been received, you may want to consider the following:" : "Ако некоја покана не е примена, пробајте на следниот начин:",
	"Income Tax" : "Персонален данок",
	"India" : "Индија",
	"Indonesia" : "Индонезија",
	"Industry" : "Индустрија",
	"Inflation" : "Инфлација",
	"International" : "Интернационал",
	"Invest" : "Инвестирај",
	"Invite friends" : "Покани пријатели",
	"Invite 10 people to eRepublik and help them reach level 6" : "Покани 10 луѓе воеРепублика и поможи им да постигнат ниво 6:",
	
	"Iran" : "Иран",
	"Iran:" : "Иран:",
	"Invites status" : "Состојба на поканети",
	"Ireland" : "Ирска",
	"Invitations left: " : "Останати покани:",
	"invited via refferer link" : "поканети преку линк",
	"Invites" : "Покани",
	"Iron" : "Железо",
	"iron" : "железо",
  "IRR" : "ИРР",
	"Israel" : "Израел",
	"Issue Money" : "Набави пари",
	"Italy" : "Италија",
	"Items" : "Намирници",
	"items" : "намирници",
	"Japan" : "Јапонија",
	"Job market" : "Пазар за Работа",
	"Jobs" : "Работа",
	"Jobs available in this company" : "Достапни вработувања во оваа фирма",
	"Join" : "Придружи",
	"Join another featured room" : "Приклучи се на друга соба",
	"Join a party" : "Влези во партија",
	"Join party" : "Влези во партија",
	"Jul" : "Јули",
	"Land" : "Земја",
	"Land skill" : "Земејени вештини",
	"Last presence" : "Последно присуство",
	"Latest" : "Последни",
	"Latest Events" : "Последни случки",
	"Latest events" : "Последни случки",
	"Latest news" : "Последни новости",
	"Latvia" : "Латвија",
	"Law proposals" : "Предлог закони",
	"leader" : "водач",
	"Level 1" : "Ниво 1",
	"Level" : "Ниво",
	"Level 2" : "Ниво 2",
	"Level 3" : "Ниво 3",
	"Level 4" : "Ниво 4",
	"Level 5" : "Ниво 5",
	"Lithuania" : "Литванија",
	//"Lieutenant" : "Лутенант",
	"Location" : "Локација",
	"Login" : "Вклучи се",
	"Logout" : "Исклучи се",
	"logout" : "исклучи се",
	"Make changes" : "Направи промени",
	"Make sure you check the rankings and see what user generated rooms are \"on fire\"." : "Осигурајте се дека ги проверувате рангирањата и видите што корисниците креираат",
	"Make sure your friend checks their spam folder" : "Вашиот пријател нека провери и во спам папката.",
	"Malaysia" : "Малезија",
	"Manufacturing" : "Произвдоство",
	"Market" : "Пазар",
	"Markets" : "Пазари",
	"Market offers" : "Пазар на понуди",
	"Market place" : "Место за пазар",
	"Marketplace" : "Место за пазар",
	"manager" : "менаџер",
	"Media career" : "Медиа кариерист",
	"Media Mogul" : "Медиумски магнат",
	"Media mogul" : "Медиумски магнат",
	"Medium" : "Медиум",
	"Member of" : "Член на",
	"Members"  : "Членови",
	"My places" : "Мои места",
	"My places > Army"  : "Војска",
	"My places > Training grounds"  : "Тренинг",
	"My Party"  : "Партија",
	"My places > Newspaper"  : "Весник",
	"My places > Organizations" : "Организации",
	"My places > Company" : "Фирма",
	"Mexico" : "Мексико",
	"Military" : "Војска",
	"Military achievements" : "Воени достигања",
	"Military career" : "Воена кариера",
	"Military force" : "Воена сила",
	"Military rank" : "Воен ранг",
	"Military stats" : "Воена статистика",
	"Minimum" : "Минимум",
	"Minimum country wage :" : "Минимум државнa плата",
	"Minimum skill" : "Минимални вештини",
	"Minimum Skill" : "Минимални вештини",
	"Minimum Wage" : "Минимална плата",
	"Moldavia" : "Молдавија",
	"Monetary Market" : "Пазар за Валути",
	"Monetary market" : "Пазар за Валути",
	"Money" : "Пари",
	"Month/Year" : "мес./год.",
	"Monthly exports" : "Месечен извоз",
	"Monthly imports" : "Месечен увоз",
	"Monuments achieved" : "Споменици здобиени",
	"more events" : "повеќе случки",
	"More news" : "Повеќе новости",
	"more news" : "Повеќе новости",
	"more than a year" : "повеќе од година",
	"more than a year ago" : "пред повеќе од година",
	"Moving Tickets" : "Карта за патување",
	"moving tickets" : "карта за патување",
	"Moving tickets" : "Карта за патување",
	"Mutual Protection Pact" : "Пакт за заштита",
	"My Chat Rooms" : "???? ??? ?????? ??",
	"My favorite rooms" : "???? ??? ???? ????? ??",
	"My Organizations" : "Мои организации",
	"My places" : "Мои места",
	"Name" : "Име",
	"National Goals" : "Национални цели",
	"National" : "Национален",
	"National Rank:" : "Национал. ранг:",
	"National Rank:" : "Национал. ранг:",
	"Neighbors" : "Комшии",
	"Netherlands" : "Холандија",
	"New" : "Нов",
	"new article" : "Нов прилог",
	"New Citizen Fee" : "Нов данок за граѓанин",
	"New Citizen Message" : "Нова граѓанска порака",
	"New Citizens today" : "Нови граѓани денес",
	"New citizens today" : "Нови граѓани денес",
	"New location:" : "Нова локација:",
	"New password" : "Нова шифра:",
	"New password again" : "Нова шифра пак",
	"news" : "новости",
	"News" : "Новости",
	"Newspaper" : "Весник",
	"Newspaper logo" : "Весник лого",
	"Newspaper details" : "Весник детали",
	"Newspaper name" : "Име на весник",
	"Newspaper Avatar" : "Аватар на весник",
	"Newspapers" : "Весници",
	"Next" : "Наредно",
	"Next elections" : "Наредни избори",
	"Next election in" : "Нареден избор за ",
	"Next elections in" : "Наредни избори за ",
	"No" : "Не",
	"No." : "Бр.",
	"no active battles " : "нема активни бикти",
	"no active battles " : "нема активни бикти",
	"No activity" : "без активност",
	"no allies" : "нема сојузници",
	"NO MAN'S LAND" : "Нема Машка земја",
	"No. of votes" : "Бр. на гласови",
	"No. of Employees" : "Бр. на вработени",
	"No. of chatrooms" : "Бр. на Чет соби",
	"No. of newspapers" : "Бр. на весници",
	"No. of companies" : "Бр. на фирми",
	"No political activity" : "Политички неактивен",
	"No products in this market" : "Нема производи на овој пазар",
	"No shouts posted by this Citizen yet" : "Нема извици од овој граѓанин сеуште",
	"No shouts posted by this citizen yet" : "Нема извици од овој граѓанин сеуште",
	"No more shouts for today" : "Нема повеќе извици за денес!",
	"No presentation" : "Нема презентација",
	"North Korea" : "Северна кореја",
	"Norway" : "Норвешка",
	"Not qualified" : "Неквалификуван",
	"November" : "Ноември",
	"Now you can visit the " : "Сега можите да ја посетите",
	"October" : "Октомври",
	"of the New World" : " од Новиот Свет",
	"Offer a gift" : "понуди поклон",
	"Office" : "Канцеларија",
	"Official" : "официјални",
	"Official candidates" : "официјални кандидати",
	"Oil"  : "Нафта",
	"oil"  : "нафта",
	"Ok, thanks, next tip" : "Благодарам, наредно",
	"Old"  : "Стар",
	"On the Map" : "на мапа",
	"one hour ago" : "пред еден саат",
	"one minute ago" : "пред една минута",
	"one month ago" : "пред еден месец",
	"online": "вклучен",
	"Online now": "Вклучени сега",
	"Once you join a room and click the \"add as favorite\" icon, that specific room will be added to the list of favorite chat rooms. This way it will be easier for you to access a specific room you are interested in." : "?? ????? ???? ???? ?????? ?? ???? ????? ???? ??? ??? ???? ?? ?? ?????? ?? ?? ?????? ???? ????.",
	"Only congressmen and country presidents have the right to vote" : "Само конгресмен и претседател на држава има право да гласа",
	"Only congress members and country presidents have the right to vote." : "Само членови на конгрес и претседателот имаат право да гласаат",
	" or read the  " : " или читај ",
	"Organization Avatar": "????? ????? ????",
	"Organizations created by you:" : "????? ??? ???? ???:",
	"Organizations" : "Организации",
	"Orientation" : "Ориентација:",
	"Our next candidate" : "Наш нареден кандидат",
	"Owner" : "Сопственик",
	"Own a company" : "Имај фирма",
	"Pakistan" : "Пакистан",
	"Paraguay" : "Парагвај",
	"Parties" : "Партии",
	"Party" : "Партија",
	"Party details" : "Детали за партија",
	"Party founder" : "Основач на партија",
	"Party Elections" : "Избори за партија",
	"Party elections" : "Партиски избори",
	"Party logo" : "Лого на партија",
	"Party name" : "Име на партија",
	"Party Member" : "Член на партија",
	"Party members" : "Членови на партија",
	"Party presidency" : "Претседателство на партија",
	"Party President" : "Претс. на партија",
	"Party president" : "Претс. на партија",
	"Peace Proposal" : "Предлог за мир",
	"Pending" : "Мирување",
	"PENDING" : "МИРУВАЊЕ",
	"Pending invites" : "Покани во мирување",
	"Philippines" : "Филипини",
	"Picture" : "Слика",
	"Place your Congress candidature" : " ?????? ??? ????? ??? ???? ???? ?? ?????? ????",
	"Please choose a country you want to live in." : "???? ???? ???? ??? ??? ???? ????? ?? ?????? ????.",
	"Please choose the region you want to live in" : "???? ????? ???? ??? ??? ???? ????? ?? ?????? ????.",
	"Please choose the country you want to live in" : " ???? ???? ???? ??? ??? ???? ????? ?? ?????? ????.",
	"Please choose the industry" : "???? ???? ???? ??? ??? ?? ?????? ????",
	"Please select an Industry to see the marketplace offers" : "???? ????? ???? ??? ???? ???? ????????? ????? ?????? ????",
	"Please type your old password" : "Внесете ја старата шифра",
	"Poland" : "Полска",
	"Politic stats" : "????? ?????",
	"Political career" : "????? ?????",
	"Political stats" : "????? ?????",
	"Politics" : "Политика",
	"Population": "Население",
	"Population number": "Бр. на население",
	"Portugal" : "Португалија",
	"Post" : "Објави",
	"Post this link on forums, blogs, messenger status or send it by yourself via email. People that register using your personal link will get you 5 Gold when they reach level 6." : "??? ???? ?? ?? ????? ? ???? ??? ??? ?? ?????? ???????. ?? ?? ?? ?? ??? ???? ??? ?? ? ?? ??? 6 ???? ??? 5 ??? ?????? ?????? ???.",
	"Post a comment" : "Објави коментар",
	"Post new offer" : "Нова понуда",
	"Post new offers" : "Нови понуди",
	"Presence:" : "Присутни:",
	"Presence:  " : "Присутни:",
	"President" : "Претседател",
	"President Elections" : "Избори за Претседател",
	"Presidential elections" : "Претседателски избори",
	"President Impeachment" : "Претседател Импичмент",
	"Presidential candidates" : "кандидати за претседател",
	"Press" : "Прес",
	"Press director" : "Директор на весник",
	"Prev" : "Дава",
	"Presentation" : "Презентација",
	"Price" : "Цена",
	"Price with taxes" : "Цена со такси",
	"Privacy" : "Приватност",
	//"Private" : "Десетар",
	"Productivity" : "Продуктивност",
	"Products" : "Производ",
	"Profile":"Профил",
	"Provider" : "Провајдер",
	"Publish" : "Објави",
	"Quality" : "Квалитет",
	"Quality Level" : "Ниво на квалитет",
	"Rank" : "Ранг",
	"Rank Private" : "Приватен ранг",
	"Ranked" : "Рангиран",
	"Rankings" : "Рангови",
	"Raw materials" : "Суровини",
	"Raw materials can be bought only using your company account (select it in the upper right side of the page if you have a company) or if you are logged in as an organization" : "???? ????? ???? ?? ????? ??????? ?? ?????? ??????? ????.",
	"Reach 1000 subscribers to your newspaper" : "Претплати 1000 претплатници на Вашиот весник",
	"Reach the highest total damage in one battle" : "Направи највисока штета во една борба",
	"Reached 1000 subscribers to your newspaper" : "Претплатени 1000 претплатници на Вашиот весни",
	"Reached strength level 5" : "Постигни 5-то ниво на јачина",
	"Reached the highest total damage in one battle" : "Направена највисока штета во една борба",
	"Rec exchange rate" : "Менувачки однос",
	"Region" : "Регион",
	"Recruit" : "Регрут",
	"REJECTED" : "ОДБИЕН",
	"Rejected" : "Одбиен",
	"Remove" : "отстрани",
	"Remove friend" : "Отстрани пријател",
	"Report abuse" : "Пријави злоупотреба",
	"report abuse" : "пријави злоупотреба",
	"Represent your country (or eNation) in the real world" : "Претставувај ја твојата земја (или еНација) во реалниот свет",
	"Requirements" : "Потребно",
	"Retire" : "Пензионира",
	"Resign" : "Откажи",
	"Resistance" : "Отпор",
	"Resistance Hero" : "Херој на отпор",
	"Resistance hero" : "Херој на отпор",
	"Resistance War" : "Војна на отпор",
	"Resistance wars" : "Војна на отпор",
	"Resistance War Active" : "Активна војна на отпор",
	"Romania" : "Романија",
	"Run for congress" : "Трчај на конгрес",
	"RURAL AREA" : "РУРАЛНА ОБЛАСТ",
	"Russia" : "Русија",
	"Salary" : "Плата",
	"Sales" : "продажба",
	"See all donations" : "Види ги сите донации",
	"See all employees" : "Види ги сите вработени",
	"See all law proposals" : "Види ги сите предлог закони",
	"See all members" : "Сите членови",
	"see finished battles" : "води ги завршените борби",
	"See results" : "Види резултати",
	"Send email invite" : "Прати покана",
	"Select" : "Одбери",
	"Select industry" : "Одбери индустрија",
	"Secure" : "Сигурно",
	"Sell" : "Продај",
	"Sell company" : "Продавај фирма",
	"Send message" : "Прати порака",
	"Send via: " : "Прати преку:",
	"Sent" : "Пратени",
	"September" : "Септември",
	"Serbia" : "Србија",
	//"Sergeant" : "Наредник",
	"Send invitation" : "Прати покана",
	"Shop" : "Шоп",
	"Shouts" : "Објави",
	"Shout something:" : "Објави нешто:",
	"Show active wars" : "Покажи активни војни",
	"show all accounts" : "Покажи сите сметки",
	"Show all members" : "Сите членови",
	"Show all donations" : "Покажи сите донации",
	"Show all employees" : "Покажи сите вработени",
	"Show all law proposals" : "Покажи ги сите предлог закони",
	"Show candidate list:" : "кандидатска листа:",
	"Show candidate list" : "кандидатска листа",
	"Show candidates list" : "кандидатска листа",
	"show finished battles" : "Завршени битки",
	"show less" : "помалце",
	"Show my offers" : "Мои понуди",
	"Show proposed members" : "предложени членови",
	"of congress" : " од конгрес",
	"of Congress" : " од конгрес",
	"Show results" : "Резултати",
	"Singapore" : "Сингапур",
	"Skill" : "Вештина",
	"Skill level" : "Ниво на вештина",
	"Skills:" : "Вештини:",
	"Skills" : "Вештини",
	"Slovakia" : "Словачка",
	"Slovenia" : "Словенија",
	"Social orientation" : "Социјална ориентација",
	"Soldier" : "Војник",
	"soldier" : "војник",
	"Sort by" : "Подреди по",
	"Social stats" : "Социјален статус",
	"Society" : "Заедница",
	"Society Builder" : "Гради заедница",
	"South Africa" : "Јужна Африка",
	"South Korea" : "Јужна Кореја",
	"Spain" : "Шпанија",
	"Start a resistance war and liberate that region" : "Започни војна на отпор и ослободи го регионот",
	"Started a resistance war and liberated " : "Започната војна на отпор и ослободена",
	"Started by" : "Започната од",
	"started by" : "започната од",
	"started on" : "започната на",
	"Status" : "Статус",
	"Standard Training effect" : "Стандарден тренинг ефект",
	"Strength gained" : "Јачина добиена",
	"Still active " : "Сеуште активен",
	"Stock" : "Лагер",
	"Strength" : "Јачина",
	"Subscribe" : "Претплати",
	"Subscribers" : "Претплатници",
	"Subscribe to comments" : "Претплати за коментари",
	"Subscriptions" : "Претплати",
  "About my newspaper" : "За мојот весник" ,
	"SUBURBIA" : "ПРЕДГРАДИЕ",
	"Super Soldier" : "Супер војник",
	"Super soldier" : "супер војник",
	"supported by" : "поддржано од",
	"Supporting parties" : "Од Партија",
	"Sweden" : "Шведска",
	"Switzerland" : "Швајцарија",
	"Tax change: Defense System" : "Промена на данок: Одбранбен систем",
	"Tax change: Food" : "Промена на данок: Храна",
	"Tax change: Oil" : "Промена на данок: Нафта",
	"Tax change: Grain" : "Промена на данок: Жито",
	"Tax change: Hospital" : "Промена на данок: Болница",
	"Tax change: House" : "Промена на данок: Куќа",
	"Tax change: Iron" : "Промена на данок: Железо",
	"Tax change: Moving Tickets" : "Промена на данок: Карти",
	"Tax change: Weapons" : "Промена на данок: Оружје",
	"Tax change: Stone" : "Промена на данок: Камен",
	"Tax change: Food Raw Material" : "Промена на данок: Суровина за храна",
	"Tax change: Weapon Raw Material" : "Промена на данок: Суровина за оружје",
	"Taxes" : "Давачки",
	"Terms of Service" : "Услови за користење",
	"Translate" : "Преведи",
	"Thailand" : "Тајланд",
	"The company offers no products in this market" : "На овој пазар фирмите не нудат производи",
	"The skill of producing food, weapons, gifts and moving tickets." : "Вештина за производство на храна, оружје, поклони и карти",
	"The law voting process takes 24 hours." : "Процесот за гласање на законот трае 24 часа.",
	"There are no active battles in this war" : "Нема активни борби во оваа војна",
	"There are no discovered resources in this region yet" : "Сеуште не се откриени ресурси во овој регион",
	"There are no pending citizenship applications." : "Нема апликации за државјанство во мирување.",
	"There are no resistance wars in this country." : "Нема војна на отпор во оваа земја.",
	"This citizen does not have any donations sent or received." : "Овој граѓанин нема дадено или примено донација.",
	"This country can trade with any other country in eRepublik." : "Оваа држава може да тргува со било која друга земја во еРепублика.",
	"To" : "До",
	"Title" : "Наслов",
	" to stay in touch with what happens on eRepublik." : " да останете во контакт со случувањата во еРепублика",
	"today" : "денес",
	"Today" : "Денес",
	"Track invites" : "Следи покани",
	"Track Invites" : "Следи покани",
	"Tools" : "Алатки",
	"Top Rated" : "Топ рангирани",
	"Top rated" : "Топ рангирани",
	"Top rated news" : "Топ рангирани вести",
	"Top Countries" : "Топ Држави",
	"Top Chat Rooms" : "Топ чет соби",
	"Top Companies" : "Топ компании",
	"Top News" : "Топ вести",
	"Top Citizens" : "Топ граѓани",
	"Top Parties" : "Топ партии",
	"Total Citizens" : "Вкупно граѓани",
	"Total citizens" : "Вкупно граѓани",
	"Total damage:" : "Вкупна штата",
	"Total damage" : "Вкупна штата",
	"Total votes: " : "Вкупно гласови: ",
	"Total votes:" : "Вкупно гласови:",
	"Total productivity" : "Вкупна продуктивност",
	"Train" : "Тренинг",
	"Train bonus" : "тренинг бонус",
	"Training" : "Тренинг",
	"Training grounds" : "Тренинг места",
	"Training effect" : "Тренинг ефект",
	"Treasury" : "Богатство",
	"Turkey" : "Турција",
	"Tutorials" : "Упатство",
	"Ukraine" : "Украина",
	"UNDERGROUND" : "ПОД ЗЕМЈА",
	"Unemployed" : "Невработен",
	"Unemployment rate" : "????? ???????",
	"Unlock Features" : "Отклучи предности",
	"United Kingdom" : "Англија",
	"Unsubscribe" : "Од претплати",
	"Unsubscribe to comments" : "??? ?????? ?????",
	"until the region can be occupied or secured" : "?? ????? ?? ??? ?????",
	"Update" : "Освежи",
	"Upgrade quality level" : "????? ??? ?????",
	"Uruguay" : "Уругвај",
	"USA" : "УСА",
	"Value added tax (VAT)" : "Vrednost so DDV",
	"VAT" : "ДДВ",
	"View the status of your invites and bonuses" : "Статус на Вашите покани и бонуси",
	"Venezuela" : "Венецуела",
	"View requests" : "Види барања",
	"View all comments" : "Види ги сите коментари",
	"votes" : "гласови",
	"Vote" : "Глас",
	"Voter" : "Гласач",
	"War" : "Војна",
	"Wars" : "ВОЈНИ",
	"Wars list" : "Листа на војни",
	"Weapon" : "Оружје",
	"weapon" : "оружје",
	"Weapon quality" : "Квалитет на оружје",
	"Wellness" : "Здравје",
	"Wellness loss" : "Изгубено здравје",
	"Winner" : "Победник",
	"Who" : "Кој",
	"Wildcards" : "Вајлдкард",
	"Win the Congress elections": "Победи на избори за конгрес",
	"Won the Congress elections" : "Победа на избори за конгрес",
	"Reach the highest war influence in a battle" : "Освои највисок воен придонес во борба",
	"Reach the highest war influence in a campaign" : "Освои највисок воен придонес во кампања",
	"Win the Presidential elections": "Победи на претседателски избори",
	"Won the Presidential elections": "Победа на претседателски избори",
	"Wood" : "Шума",
	"World Map" : "Светска мапа",
	"wood" : "шума",
	"Worked 30 days in a row" : "Работеше 30 дена со ред",
	"Work for 30 days in a row" : "Работи 30 дена со ред",
	"Work Bonus" : "Бонус од работа",
	"World" : "Свет",
	"Write article" : "Напиши статија",
	" xp points " : " хр поени ",
	" xp points" : " хр поени",
	"Yes" : "Да",
  "wrote yesterday" : "вчера напиша",
	"yesterday" : "вчера",
	"You are allowed to create and administrate ONLY one eRepublik citizen. Breaking this rule you will face the risk of having all your citizen accounts suspended." : "??? ???? ?? ????? ???? ?? ????? ??????? ?????. ??? ?? ?????? ??? ????? ?? ????? ???? ???? ??? ??? ????? ??? ??? ???.",
	"You are already an employee. To get this job please quit your current job." : "Веќе сте вработени. За да се вработите тука, прво дајте отказ.",
	"You are not a member of a party" : "Не сте член на партија",
	"You cannot resign from your job until" : "Не можете да дадете отказ додека",
	"You can't become a soldier" : "Не можете да станите војник",
	"You cannot join this fight because your wellness must be at least 40. Your current wellness is" : "Вашето здравје мора да е минимум 40 за да поможите во борбата. Вашето здравје е",
	"You cannot join this fight because your wellness must be at least 40. You can get wellness from"  : "Вашето здравје мора да е минимум 40 за да поможите во борбата. Земете здравје од",
	"You cannot join this fight because your wellness must be at least 40." : "Вашето здравје мора да е минимум 40 за да поможите во борбата.",
	"You are not a president or a congress member in this country" : "Вие не сте претседател или член на конгрес во оваа Држава",
	"You will receive 5 Gold for each citizen invited by you that reaches level 6." : "Ќе добиете 5 Злато за секој поканет граѓанин што ќе достигне ниво 6.",
	"You can exchange money at the" : "Можете да ги разменете парите на",
	"You can get wellness from:" : "Можете да земете здравје од:",
	"You can join a party from it's presentation page or you can create your own party if you cannot find the right one for you. Being a member of a party could give you the chance to become a Congress Member or even the President." : "??? ?? ?????? ??? ?? ??? ???? ?? ??? ?????? ?? ????? ????. ???? ??? ??? ?? ??? ?? ???? ???? ??? ?? ????? ?? ??????? ???? ?? ??? ???? ?????? ????.",
	"You can't start a resistance war in this region because it already belongs to its original owner country" : "Не можете да започнете војна на отпор во овој регион, бидејќи веќе е дел од матичната држава",
	"You cannot start a resistance war in this region because it already belongs to its original owner country." : "Не можете да започнете војна на отпор во овој регион, бидејќи веќе е дел од матичната држава.",
	"You cannot trade with this country as you are at war with it" : "Не можете да тргувате со оваа земја, бидејќи сте во војна.",
	"You didn't specify the amount of products you wish to buy" : "Не наведовте сума на производи што сакате да купите.",
	"You do not own a moving ticket. You can buy moving tickets from Marketplace" : "Не поседувате карта за патување. Можете да купите од пазарот.",
	"You do not have a newspaper" : "Вие немате весник.",
	"You don't have a newspaper" : "Немате Вие весник.",
	"You do not have any articles, if you want to write an article you should enter here:" : "Немате ниту една статија??????? ???? ???? ??? ??? ????:",
	"You do not have a job" : "Не сте вработен",
	"You don't have any active job offers" : "??? ??????? ???? ????? ??????",
	"You do not have any active job offers" : "??? ??????? ???? ????? ??????",
	"You have already worked today." : "За денес сте сработиле.",
	"You have not worked today." : "Не сте работеле денес.",
	"You have not trained today" : "Не сте тренирале денес",
	"You have no favorite chat rooms" : "??? ???? ?????? ???? ????? ?? ??????",
	"You have not created any organization yet." : "??? ?? ???? ????? ????? ???? ????? ???.",
	"You received 50 wellness from hospital" : "??? 50 ?????? ?? ????????? ?????? ???? ???",
	"You have succesfully edited your profile" : "Успечно го уредивте Вашиот профил",
	"You have trained today. You can train again tomorrow." : "??? ????? ????? ???? ???. ?? ?????? ???? ?????? ????? ????.",
	"Your personal invitation link" : "Вашиот линк за поканување",
	"You must be at least level 2 to be able to train. Now, you can:" : "Мор да сте ниво 2 за да тренирате. Сега, можете:",
	"Your account" : "Ваша сметка",
	"Your name:" : "Ваше име:",
	"You need at least 25 Experience Points to join this fight" : "Ви требаат најмалку 25 искуствени поени за да поможите во борбата",
	"Your accounts" : "Ваши сметки",
	"Your birthday" : "Ваш роденден",
	"Your comment" : "Ваш коментар",
	"Your companies" : "Ваши компании",
	"Your email here" : "Вашата е-пошта",
	"Your inventory" : "Ваш инвентар",
	"Your offer has been updated" : "Вашата понуда е освежена",
	"Your strength:" : "Ваша јачина:",
	"Work" : "Работа",
	"War > Battlefield" : "Бојно поле",
	"Aegean Islands" : "Егејски острови",
	"Attica" : "Атика",
	"Central Greece" : "Централна Грција",
	"Crete" : "Крит",
	"Epirus" : "Епир",
	"Peloponnese" : "Пелопонез",
	"Thessaly" : "Тесалија",
	"Thrace" : "Тракија",
	"Ionian Islands" : "Јонски острови",
	"Macedonia" : "Егејска Македонија",
	"Eastern Macedonia" : "Источна Македонија",
	"Western Macedonia" : "Западна Македонија",
	"Povardarie" : "Повардарие",
	"Southern Serbia" : "Јужна Србија",
	"Eastern Serbia" : "Источна Србија",
	"Western Serbia" : "Западна Србија",
	"Sumadija" : "Шумадија",
	"Belgrade" : "Белград",
	"West Srpska Republic" : "Западна Српска Република",
	"West Srpska Republi..." : "Западна Српска Р.",
	"East Srpska Republic" : "Источна Српска Република",
	"East Srpska Republi..." : "Источна Српска Р.",
	"Banat" : "Банат",
	"Vojvodina" : "Војводина",
	"Raska" : "Рашка",
	"Montenegro" : "Црна Гора",
	"North Montenegrin Mountains" : "Серверно-Црногорски планини",
	"Central Montenegro" : "Централна Црна Гора",
	"Montenegrin Coast" : "Црногорска обала",
	"Federation of BiH" : "Федерација на БиХ",
	"BrAko District" : "Br&ko Oblast",
	"South Dalmatia" : "Јужна Далмација",
	"North Dalmatia" : "Северна Далмација",
	"Lika and Gorski Kotar" : "Лика и Горски Котар",
	"Slavonia" : "Славонија",
	"Central Croatia" : "Централна Хрватска",
	"Istria and Kvarner" : "Истра и Хвар",
	"Northwest Croatia" : "Северо-Западна Хрватска",
  "Prekmurje" : "Прекмурје",
	"Burgas" : "Бургас",
	"Plovdiv" : "Пловдив",
	"Sofia" : "Софија",
	"Ruse" : "Русе",
	"Varna" : "Варна",
	"Vidin" : "Видин",
	"Northern Cyprus" : "Северен Кипар",
	"Southern Cyprus" : "Јужен Кипар",
	"Lower Egypt" : "Долен Египет",
	"Upper Egypt" : "Горен Египет",
	"Middle Egypt" : "Среден Египет",
	"Red Sea Coast" : "Црвено-морска Обала",
	"Western Desert" : "Западна пустина",
	"Marmara" : "Мармара",
	"Aegean Coast of Turkey" : "Егејска обала на Турција",


	
	"Free" : "Слободна",
	"Become a citizen" : "Стани граѓанин",
	"Top countries in eRepublik" : "Топ држави во еРепублик",
	"Forum discussions" : "Форум дискусија",
	"Forgot password?" : "Ја заборавивте шифрата",
	"Password" : "Шифра",
	"top countries in eRepublik" : "Топ држави во еРепублик",
	"more discussions" : "повеќе дискусии",
	"It's 100% free and only takes a minute or two" : "100% е слободно и зема минута или две",
	"Take the 4 step tour and find out why it's such a great game":"Направете ги првите 4-ри чекори, па ќе видите зошто е играта одлична",
	"Citizen Name" : "Име на граѓанин",
	"Retype" : "Превнеси",
	"Please choose the country you want to live in" : "Одберете земја во која сакате да живеете",
	"Birthday" : "Роденден",
	"I agree with the" : "Се согласувам со",
	"Sign up for the weekly newsletter" : "Седмична претплата за весник",
	"Gender" : "Пол",
	"for 10 shouts/day and more" : "за 10 објави/ден и повеќе",
	"Jan" : "Јан",
	"Forfeit points" : "Пропуштени поени",
	"Gold" : "Злато",
  "Gold Bonus" : "Бонус Злато" ,
  "Loyalty Program" : "Програма за Лојалност " ,
  "Special Items" : "Специјално" ,
	"Move" : "Премести",
	"This message will be displayed to the members of Congress who will be able to accept or deny your citizenship request." : "Пораката ќе биде прикажана на членовите на конгресот кои ќе го прифатат или одбијат Вашето барање.",
	"Apply for citizenship" : "Побарај државјанство",
	"Please type in a short description why you are applying for citizenship" : "Накратко напишете зошто аплицирате за државјанство",
	"Chat room details" : "Детали за чет од соба",
	"Room name" : "Име на соба",
	"Public" : "Јавно",
	"Private" : "Приватно",
	"Room type" : "Тип на соба",
	"Create room" : "Креирај соба",
	"days ago" : "денови порано",
	"Report company" : "Пријави фирма",
	"Show more details" : "Повеќе детали",
	"Show less details" : "Помалце детали",
	"Products" : "Производи",
	"Market offers" : "Понуди на пазар",
	"Interactive Map" : "Интерактивна мапа",
	"Report law" : "Пријави закон",
	"Report" : "Пријави",
	"No chat rooms" : "???? ??????? ????? ????",
	"Organization details" : "??????? ????? ????",
	"Organization name" : "??? ????? ????",
	"Your email address:" : "Вашата е-пошта",
	"Retype password" : "Превнеси шифра",
	"Minimum number of characters is 6" : "минимум 6 карактери",
	"eRepublik region" : "еРЕпублика регион",
	"Organization logo" : "Лого на организација",
	"Copy" : "Копирај",
	"Republic of Moldova" : "Република Молдавија",
	"Buy" : "Купи",
	"The skill of producing food, weapons, gifts and moving tickets." : "????? ????? ???? ?????? ???? ? ????",
	"You cannot buy a company that belongs to someone outside your country." : "??? ??? ?????? ??????? ???? ?? ??????? ?? ?????.",
	"In order to own a company you have to resign from your job." : "???? ????? ??????? ?? ??? ???? ??? ?????? ????.",
	"Official candidates" : "официјални кандидати",
	"Wildcards" : "Џокери",
	"Not qualified" : "Не квалификуван",
	"Total votes:" : "Вк. гласови:",
	"Presence:" : "Присутни",
	"Wiki" : "Wiki",
	"wiki" : "wiki",
	"Blog" : "Блог",
	"eRepublik Shop" : "еРепублика Шоп",
	"Your title should not exceed 80 characters" : "Насловот не смее да надмини 80 карактери",
	"Citizen feeds" : "Граѓански муабет",
	"Say something to your friends…" : "Кажи им нешто на пријателите…",
	"Military Campaigns" : "Воени кампањи",
	"Allies' Campaigns" : "Сојузнички кампањи",
	"Eat food" : "Јади Храна" ,
	"Buy food" : "Купи храна" ,
	"Military Unit" : "Воена единица" ,
	"Badges" : "Беџови" ,
	"More military campaigns" : "Повеќе воени кампањи" ,
	"Missions" : "Мисии" ,
	"Comment" : "Коментар" ,
	"Older posts" : "Постари објави" ,
	"Inventory" : "Инвентар" ,
	"On market" : "На пазар" ,
	"Next election in" : "Нареден избор за" ,
	"Official Results" : "Официјални резултати" ,
	"Congressional elections" : "Избори за Конгрес" ,
	"Official candidates" : "официјални кандидати",
	"Create a Military Unit" : "Оформи Воена единица" ,
	"Apply for membership in a Military Unit" : "Аплицирај за член во Воена единица" ,
	"friends" : "пријатели" ,
	"Natural Enemy" : "Природен непријател" ,
	"Republic of Macedonia (FYROM)" : "Македонија" ,
	"Fire power" : "Огнена сила" ,
	"Fire Power" : "Огнена сила" ,
	"Durability" : "Трајност" ,
	"Rank points" : "Ранг поени" ,
	"Natural enemy bonus" : "Природен непријател бонус" ,
	"War influence" : "Вк. Придонес" ,
	"wants to add you to his friends list. Will you accept?" : "Сака да Ве додаде на неговата листа на пријатели. Прифаќате?" ,
	"Kills" : "Убиства" ,
	"Location:" : "Локација:" ,
	"Citizenship:" : "Државјанство:" ,
	"Experience level" : "Искуствено ниво" ,
	"Health" : "Здравје" ,
	"Achievements" : "Достигнувања" ,
	"Economy Skill" : "Економска вештина" ,
	"Overview" : "Преглед" ,
	"Storage" : "Склад" ,
	"Enter" : "Посети" ,
	"Progress" : "Прогрес" ,
	"post new offer" : "постави нова објава" ,
	"from marketplace" : "од пазарот" ,
	"Add on sale" : "Додај за продажба" ,
	"Product" : "Производ" ,
	"Quantity" : "Количина" ,
	"Price / unit" : "Цена/пар." ,
	"Buy license" : "Купи лиценца" ,
    "This action restores as much health as possible by eating Food from your Storage." : "Оваа акција овозможува зголемување на здравјето со јадење на храна од Вашиот склад." ,	
	"in" : "во" ,
	"Battle stats" : "Битка стат." ,
	"Battle statistics" : "Борбена статистика" ,
	"Overall results" : "Вкупен резултат" ,
	"Get reward" : "Награда" ,
	"Super soldier:" : "Супер војник:" ,
	"Military Skills" : "Воени вештини" ,
	"Productivity" : "Продуктивносст" ,
	"Start working" : "Започни работа" ,
	"Choose 2 invited friends to boost your Economy skill and Productivity" : "Поканете 2 пријатели да ја зголемите Вашата продуктивност и економска вештина" ,
	"Choose an action to boost your Economy skill and Productivity" : "Одберете акција за да ја зголемите Вашата продуктивност и економска вештина" ,
	"You worked" : "Вие работевте" ,
	"days in a row." : " денови со ред" ,
	"You need to work" : "Треба да работите" ,
	"more day to receive your 'Hard Worker' Medal" : " дена уште за 'Јак работник' медал" ,
	"more days to receive your 'Hard Worker' Medal" : " дена уште за 'Јак работник' медал" ,
	"Today's salary" : "Денешна продажба" ,
	"Battles I can Fight in" : "Битки во кои можам да се борам" ,
	"My land" : "Моја земја" ,
	"Workday results" : "Резултати од работа" ,
	"Improve your Strength level:" : "Подоби го своето ниво на јачина:" ,
	"Choose an action to boost your strength" : "Одберете начин за зголемување на јачината" ,
	"Choose 2 invited friends to boost your strength" : "Одберете 2 поканети пријатели да Ви ја зголемат јачината" ,
	"Activity" : "Активности" ,
	"Iron Company" : "Фирма за железо" ,
	"Military Unit Leader" : "Водач на воена единица" ,
	"No Military Unit" : "НеВоена единица" ,
	"Weapons Com..." : "Оружје ком" ,
	"View all" : "Види се" ,
	"You are working as manager, no salary is needed." : "Вие сте менаџер, нема потреба од продажба" ,
	"Add influence" : "Додај придонес" ,
	"Final products" : "Крајни производи" ,
	"Resources" : "Ресурси" ,
	"Vote" : "Гласај" ,
	"vote" : "гласај" ,
	"New Мessage" : "Нова порака" ,
	"New message" : "Нова порака" ,
	"Subject" : "Предмет" ,
	"Message" : "Порака" ,
	"Delete" : "Бриши" ,
	"All Messages" : "Сите пораки" ,
	"Report" : "Извештај" ,
	"Send" : "Прати" ,
	"Show Employees" : "Покажи работници" ,
	"employees" : "работодавач" ,
	"This data is confidential." : "Овие податоци се тајни" ,
	"Total Weapons stock" : "?Вкупен лагер на оружје" ,
	"Post a comment" : "Објави коментар" ,
	"Messages" : "Пораки" ,
	"Older" : "Постари" ,
	"Newer" : "Понови" ,
	"Manage" : "Менаџирај" ,
	"View storage" : "Види остава" ,
	"employees" : "вработении" ,
	"Total Grain stock" : "Вкупно жито на лагер" ,
	"Employee list" : "Вработени листа" ,
	"eRepublik birthday" : "Роденден на еРепублика" ,
	"National rank:" : "Национал. ранг: " ,
	"Forfeit points:" : "Казнени поени:" ,
	"Day" : "Ден " ,
	"of the New World" : " од Новиот Свет" ,
	"Campaign of the day" : "Кампањи на денот" ,
	"Republic of Macedonia (FYROM) Campaigns" : "Македонски кампањи" ,
	"Greece Campaigns" : "Грчки кампањи" ,
	"Daily tasks" : "Дневни задачи" ,
	"Top" : "Топ" ,
	"Selling price:" : "Продажна цена: " ,
	"Offer removed" : "Понуда тргната" ,
	"You can dissolve your company for" : "Можете да ја разрешите Вашата фирма за: " ,
	"Set on sale" : " Стави на продажба" ,
	"Selling a company will empty the land on which it has been built, allowing you to build another company on it." : "???? ??????? ????? ?? ?? ?? ?? ????? ??? ???? ?????? ? ?? ??? ????? ?????? ?? ????????? ????? ?? ??? ?? ??????" ,
	"Dissolving a company will empty the land on which it has been built, allowing you to build another company on it." : "???? ???? ??????? ????? ?? ?? ?? ?? ????? ??? ???? ?????? ? ?? ??? ????? ?????? ?? ????????? ????? ?? ??? ?? ??????" ,
	"Dissolve company" : "Разреши фирма" ,
	"Your company now appears in the" : "Вашата фирма сега се појавува во: " ,
	"Remove offer" : "Тргни понуда" ,
	"Update offer" : "Освежи понуда" ,
	"The price at which this company can be put on sale must be between 9 and 11 Gold." : "Цената за која оваа фирма може да се стави за продажба е помеѓу 9 и 11 Злато" ,
	"Companies for sale list" : "Фирми за листа на продажба" ,
	"Next product status:" : "Статус на друг производ:" ,
	"Total Food stock" : "Вкупно храна на лагер" ,
	"You can view your market licences and sell products directly from your" : "Вие ќе можете да ја видите Вашата дозвола за пазар директно од: " ,
	"Storage Facility" : "Капацитет за складирање" ,
	"Offers" : "понуди" ,
	"Add a job offer" : "Понуди работа" ,
	"Friends bonus" : "Пријателски бонус" ,
	"Strength:" : "Јачина:" ,
	"Basic training" : "Основен тренинг" ,
	"Train booster" : "Тренинг бустер" ,
	"Share what's on your mind in your citizen feed" : "Кажи што ти е на памет на Граѓанските гласови" ,
	"and stay in touch with your in-game friends. More friends are waiting for you." : "и останете во контакт со другите играчи во играта. Ве очекуваат повеќе пријатели" ,
	"Import from" : "Увези од :" ,
	"Sign up" : "Регистрирај се" ,
	"Welcome to the New World" : "Добедојдовте во Новиот свет" ,
	"Enter the new world" : "Повелете во Новиот свет" ,
	"active citizens today" : "граѓани активни денес" ,
	"citizens" : "граѓани" ,
	"Follow us:" : "Следи не:" ,
	"\"eRepublik creates multiplayer global strategy game\"" : "\"еРепублика креира стратегиска глобална игра за повеќе играчи\"" ,
	"\"eRepublik offers a real second life\"" : "еРепублика нуди вистински втор живот" ,
	"\"eRepublik takes strategy games to the Web\"" : "\"еРепублика овозможува да се игра стратегиска игра на веб\"" ,
  "Conquer your country neighbours and extend its territories" : "Освои ја земјата на комшиите и зголеми ја територијата",
  "Claim a land and develop your economic empire" : "Утврди ја земјата и развивај ја твојата економска империја",
  "Fight against real people on the battlefield" : "Бори се против вистински луѓе на борбеното поле",
	"What others are saying about eRepublik" : "Што велат другите за еРепублика" ,
	"Remember Me" : "Запомни ме" ,
	"Forgot password" : "Заборавена шифра",
	"Campaign of the day" : "Кампања на денот" ,
  "Citizen feeds" : "Граѓански муабет" ,
	"Iran is not involved in any active battles." : "Иран не е инволвиран во други битки" ,
	"wrote" : "нaпиша " ,
	"Seller" : "Продавач" ,
	"Train results" : "Тренинг резултати" ,
	"No candidates applied yet" : "Нема пријавени кандидати" ,
	"Party candidates" : "кандидати за партија" ,
	"You can not buy a company in a country for which you do not have citizenship." : "Не можете да купита фирма во зема во која немате државјанство" ,
	"The citizens of this country will be provided with a +10% war influence bonus in the military campaigns against the Natural Enemy." : "Граѓаните од оваа земја ќе добијат +10% бонус воен придонес во воени кампањи против природен непријател" ,
	"No current Natural Enemy" : "Без природен непријател" ,
	"United Arab Emirates" : "Обединети Арапски Емирати" ,
	"Natural enemy" : "Природен непријател" ,
	"Trading Embargo" : "Трговски ембарго" ,
	"You are not a president or a congress member in this country." : "Вие не сте претседател или член на конгрес во оваа држава" ,
	"You need to move your citizen to one of the countries participating in the battle to join the fight." : "За да поможите во борбата мора да се преселите во една од државите кои се вклучени во истата." ,
	"Country resources" : "Државни ресурси" ,
	"Collected Gold" : "Собрано злато" ,
  "Track your gold bonus" : "Пратете го Вашето бонус Злато" ,
  "The citizens you have invited bring you a 10% bonus from all the Gold they get from eRepublik – achievements, level ups or Gold purchases!" : "Граѓаните кои ги имате покането Ви носат 10% бонус од секое Злато кое ќе го добијат од еРепублика, ниво погоре, или нарачка на Злато!" ,
  "Help and guide your friends through their journey, because the more they advance in the game, the more you are rewarded!" : "Поможете им на пријателите и подучете ги, бидејќи колку се тие подобри во играта, толку повеќе и Вие се наградувате!" ,
  "Each Gold Bonus needs to be collected within 30 days or you will lose it. We recommend you collect the Gold at least twice per month." : "Секој бонус од Злато треба да се собере во рок од 30 дена или ќе го изгубите. Ние Ви препорачуваме да го собирате најмалку 2 пати месечно." ,
	"You will not be able to change residence outside the country while having a pending citizenship request." : "Нема да сте во можност да го промените државјанството се додека имате барање за државјаснтво кое е во мирување." ,
  "Invite your friends" : "Поканете ги Вашите пријатели" ,
  "Invite more friends and boost your chances to get more Gold!" : "Поканете повеќе пријатели и зголемете ги Вашите шанси да земете повеќе Злато!" ,
	"The first ticket found in your storage that will cover the required distance will be used." : "Првата карта која одговара за патувањето ќе биде искористена." ,
	"Moving distance:" : "Растојание:" ,
	"You have canceled your citizenship application" : "Ја откажавте апликацијата за државјанство" ,
	"Citizenship applications" : "Апликации за државјанства" ,
	"Resident since:" : "Граѓанин од:" ,
	"Expires:" : "Истекува:" ,
	"You have successfully moved to" : "Успешно се преселивте во" ,
	"This company has no job offers at the moment" : "Оваа фирма не нуди вработување во моментот" ,
	"Good job! Please prove you are human." : "Добра работа! Докажете дека сте човек." ,
	"Your description" : "Ваш опис" ,
	"Email must be valid for registration, so do not cheat" : "Е-поштата мора да биде валидна за регистрирање, не мамете!" ,
	"Enter your current password in order to change your profile settings" : "Внесете ја моменталната шифра за да направите промени во профилот" ,
	"Work booster" : "Засилувач на работа" ,
	"Friend bonus" : "Пријателски бонус" ,
	"Resource bonus" : "Бонус од ресурс" ,
	"Productivity details" : "Детали за продуктивност" ,
	"Economy skill details" : "Детали за економски вештини" ,
	"First steps in eRepublik" : "Први чекори во еРепублика" ,
	"Battle orders" : "Борбени наредби" ,
	"Warfare analysis" : "Воени анализи" ,
	"Political debates and analysis" : "Политички дебати и анализи" ,
	"Financial business" : "Финансиски бизнис" ,
	"Social interactions and entertainment" : "Социјални интеракции и забава" ,
	"Newspaper subscriptions" : "Претплати за весник" ,
	"No articles of this type were written in the last 88 hours." : "Во последните 88 часа нема статија одод овој тип" ,
	"Because your account security is important, we recommend you to refrain from sharing your account login information. The eRepublik team will not ask you for this information via PM (or using other communication channels) so any similar requests are fraud attempts." : "?? ???? ?? ????? ???? ?????? ??? ?? ????? ????? ??? ??????? ?? ??? ??????? ?????? ?? ???? ??????? ???? ?? ???? ????????? ?? ????? ?????. ??? ?????? ????? ???? ?? ??? ??????? ?????? ?????????? ?? ?? ???? ?????? ???? ???? (? ????????? ???? ???????) ???????. ?? ??? ???????? ???????? ??????? ????? ????? ???? ???? ?????." ,
	"Party Member , Congress Member" : ":Член на партија и конгрес" ,
	"The company will be located in " : "Фирмата ќе биде лоцирана во" ,
	", your citizenship country" : ", вашата граѓанска држава" ,
	"Your offer was deleted successfully." : "Понудата е успешно избришана" ,
	"You haven't posted any currency exchange offer yet." : "Сеуште немате објавено понуда за размена на валута" ,
  "Select building type" : "Одберете тип на градба" ,
  "Select building" : "Одберете градба" ,
	"Factories" : "Фабрики" ,
	"Food raw materials" : "Суровина за храна" ,
	"Grain Farm" : "Фарма за жито" ,
	"Fruit Orchard" : "Овошна градина" ,
	"Fishery" : "Рибник" ,
	"Cattle Farm" : "Фарма за говеда" ,
	"Hunting Lodge" : "Ловиште" ,
	"Weapon raw materials" : "Суровина за оружје" ,
	"Iron Mine" : "Железо" ,
  "Oil Rig" : "Нафтена дупка" ,
	"Aluminium Mine" : "Алуминиум" ,
	"Saltpeter Mine" : "Шалитра" ,
	"Rubber Plantation" : "Плантажа за гума" ,
	"Normal Storage" : "Стандарден склад" ,
	"Large Storage" : "Голем склад" ,
	"Food Factory" : "Фабрика за храна" ,
	"Weapons Factory" : "Фабрика за оружје" ,
  "Training Facilities" : "Тренинг можности" ,  
  "Training Grounds" : "Тренирање" ,    
  "Special Forces …" : "Специјални сили" ,    
      
     "(change)" : " (промени)" ,
	"Local currency accounts with a value less than 1 are not displayed." : "Сметките со локални валути со вредност под 1 не се прикажани." ,
  "Only your first 2000 friends will see your wall posts." : "Само првите 2000 пријатели ќе ги видат Вашите објави на ѕидот" ,
	"Land of " : "Земја на " ,
	"view all" : "види ги сите" ,
	"buildings" : " градби" ,
	"Yesterday" : "Вчера" ,
	"Ambient on/off" : "Амбиент Да/Не" ,
	"News categories" : "Категории на вести" ,
	"Search citizen" : "Барај граѓанин" ,
  "fighting" : "тепачка" ,
	"commented" : "коментирано" ,
	"others" : "други" ,
	"Military campaigns" : "Воени кампањи" ,
  "now " : "сега " ,
  "$ hour ago" : "пред $ час/а" ,
  "$ days ago" : "пред $ ден/а" ,
  "$ months ago" : "пред $ месец/и" ,
  "News categories" : "Новости категории" ,
  "Yesterday," : "Вчера," ,
  "Saudi Arabia" : "Саудиска Арабија" ,
  "My Land" : "Мојата земја" ,
  "Show details" : "Покажи детали" ,
  "Weapon raw materials produced" : "Произведено суровина за оружје" ,
  "received" : "примени" ,
  "Food raw materials produced" : "Произведено суровина за храна" ,
  "Close" : "Затвори" ,
  "Weapons produced" : "Оружја произведени" ,
  "Food units produced " : "Храна произведена" ,
  "Not enough citizenship currency!" : "Немате доволно државна валута!" ,
  "Cost:" : "Кошта :" ,
  "New land" : "Нова земја" ,
  "Buy Land" : "Купи земја" ,
  "Expand" : "Прошири" ,
	"Wars" : "Војни" ,
	"Brazil" : "Бразил" ,
	"USA" : "УСА" ,
	"Greece" : "Грција" ,
	"Finland" : "Финска" ,
	"Norway" : "Норвешка" ,
	"Saudi Arabia" : "Саудиска Арабија" ,
	"Ireland" : "Ирска" ,
	"Peru" : "Перу" ,
	"Italy" : "Италија" ,
	"Switzerland" : "Швајцарија" ,
	"Bulgaria" : "Бугарија" ,
	"Israel" : "Израел" ,
	"Cyprus" : "Кипар" ,
	"New Zealand" : "Нов Зеланд" ,
	"Egypt" : "Египет" ,
	"Colombia" : "Колумбија" ,
	"Australia" : "Австралија" ,
	"Russia" : "Русија" ,
	"Republic of China (Taiwan)" : "Република Кина (Тајван)" ,
	"no active battles " : "нема борби" ,
	"Select product" : "Одбери производ" ,
	"Weapons" : "Оружје" ,
	"Food Raw Material" : "Суровина за храна" ,
	"Weapon Raw Material" : "Суровина за оружје" ,
	"Select quality" : "Одбери квалитет" ,
	"Fire Power" : "Огнена сила" ,
	"Durability" : "Трајност" ,
	"Please insert your Personal Security PIN" : "Внесете безбедносен ПИН" ,
	"Unlock" : "Отклучи" ,
  "Monetary Market" : "Пазарни валути" ,
  "Provider" : "Провајдер" ,
  "Amount" : "Вредност" ,
	"Report" : "Извештај" ,
	"All Messages" : "Сите пораки" ,
	"Delete" : "Бриши" ,
	"Buy" : "Купи" ,
	"Show my offers" : "Мои понуди" ,
	"Post new offer" : "Нова понуда" ,
	"Next" : "Наредно" ,
	"Prev" : "Претходно" ,
	"Exchange rate" : "Курс" ,
	"Amount to buy" : "Купи за" ,
	"Employer" : "Работодавач" ,
  "There are no offers matching the selected criteria." : "Нема повеќе соодветни понуди за одбраниот критериум." ,
	"Job Market" : "Вработувања" ,
	"Companies for sale" : "Фирми за продавање" ,
	"news" : "новости" ,
	"You have $ newspaper subscriptions" : "Имате $ претплати за весници" ,
	"posted in:" : "објавено во :" ,
	"Report party" : "Пријави партија" ,
	"Military Unit Member" : "Член на воена ед." ,
	"Election day" : "Ден за избори" ,
	"days" : "денови" ,
	"no goals selected" : "нема одбрани цели" ,
	"supported by" : "поддржано од" ,
	"Presidential candidates" : "кандидати за претседател" ,
	"parties" : "партии" ,
	"Official candidates ($)" : "Официјални кандидати ($)" ,
	"Wildcards ($)" : "Џокери ($)" ,
	"Not qualified ($)" : "Неквалификувани ($)" ,
	"Total votes: $" : "Вкупно гласови: $" ,
	"Elections" : "Избори" ,
	"Messages" : "Пораки" ,
	"Hint:" : "Порака:" ,
	"Currently" : "Моментално" ,
	"Next election in $ days" : "Наредни избори за $ дена" ,
	"$ candidates" : "$ кандидати" ,
	"wrote" : "напиша" ,
	"Top countries" : "Топ држави" ,
	"Features" : "Предности" ,
	"What others are saying" : "Што велат другите" ,
	"South Africa" : "Јужна Африка" ,
	"Hide details" : "Сокри детали" ,
	"Stats" : "Статистика" ,
	"SAR" : "САР" ,
	"Proposi a law" : "Предложи закон" ,
	"Your proposals" : "Ваши предлози" ,
	"Hello," : "Здраво," ,
	"Congress Member" : "Член на конгрес" ,
	"New citizen fee" : "Данок за нов граѓанин" ,
	"Minimum wage" : "Минимум плата" ,
	"Provide citizenship" : "Барај државјанство" ,
	"Citizenship applications" : "Апликации за државјанство" ,
	"Report request" : "Пријави барање" ,
	"Stock" : "Лагер" ,
	"Go to eRepublik" : "Оди во ерепублика" ,
	"Strength" : "Јачина" ,
	"Need more strength?" : "Ви треба повеќе јачина?" ,
	"Build now" : "Изгради сега" ,
	"New training facilities are waiting for you." : "Ве чекаат нови тренинг можности?." ,
	"Close" : "Затвори" ,
	"Build" : "Изгради" ,
	"Need more strength? New training grounds are waiting for you." : "Ви треба повеќе јачина? Нови тренинг места Ве чекаат." ,
	"AED" : "АЕД" ,
	"ARS" : "АРС" ,
	"one hour ago" : "пред 1 саат" ,
	"Go to eRepublik" : "Оди во еРепублика" ,
	"Say something to your friends…" : "Кажи им нешто на пријателите…" ,
	"Climbing Center" : "Центар за пентерење" ,
	"Town Center" : "Центар на град" ,
	"+50 Health Building" : "Зграда со +50 Здравје" ,
	"+100 Health Building" : "Зграда со +100 Здравје" ,
	"Shooting Range" : "Стрелиште" ,
	"Special Forces Center" : "Специјални сили" ,
	"Invite 10 people to eRepublik and help them reach level 10" : "Покани 10 луѓе во еРепублик и поможи им да стигнат до 10 ниво" ,
	"National resources bonus" : "Бонус од национални ресурси" ,
	"Cancel" : "Откажи" ,
	"Collect" : "Собери" ,
	"Marketplace" : "Пазар" ,
	"About me" : "Замене" ,
	"Republic of Macedonia (…" : "Македонија" ,
	"Rank points:" : "Ранг поени:" ,
	"My influence" : "Мој придонес" ,
	"Battle stats" : "Битка стат" ,
	"health" : " здравје" ,
	"Belarus" : "Белорусија" ,
	"Montenegro" : "Црна гора" ,
	"Health refill needed" : "Потребно е здравје" ,
	"After 5 days the alerts are automatically deleted" : "После 5 дена известувањата автоматски се бришат" ,
	"Are you still there?" : "УШТЕ СТЕ ТУКА?" ,
	"I'm still here" : "УШТЕ СУМ ТУКА!" ,
	"wrote" : "напиша" ,
	"from" : "од" ,
  "eRepublik Gold is the main reference point for all the local virtual currencies and it is used to buy additional features within eRepublik." : "Ерепублика Златото е главна почетна точка за сите други замислени валути и се користи за да се купуваат дополнителни поволности низ еРепублика." ,
  "Select amount" : "Одберете вредност" ,
	"Select payment option" : "Начин на плаќање" ,
  "is a fictional currency used only in the eRepublik World." : " е измислена валута, се користи само во еРепублика." ,
	"Buy now" : "Купи сега" ,
  "Show prices in:" : "Покажи цени во:" ,
  "This page is available only to citizens that are part of our Loyalty Program. For more information about this program, please send us an email to support@erepublik.com" : "Оваа страна е само за граѓани кои се дел од програмта за лојалност, Ве молам пратете ни е-пошта на: support@erepublik.com" ,
  "Applications" : "Апликации" ,
	"characters left" : "карактери уште" ,
	"Only active conversations from the last 14 days are shown" : "Прикажани се само активни конверзации од последните 14 дена" ,
	"Select All" : "Селектирај се" ,
	"Sign Up" : "Зачлени се" ,
	"Make your country the greatest world power" : "Направете ја вашата држава најголема светска сила" ,
	"Report article" : "Пријави статија" ,
	"Report comments" : "Пријави коментар" ,
  "Report newspaper" : "Пријави весник" ,
	"Your proposals" : "Ваш предлог" ,
	"Set new" : "Подеси нов" ,
	"Value Added Tax" : "Данок од додадена вредност" ,
	"The tax must be between 1 and 25" : "Данокот мора да биди помеѓу 1 и 25" ,
	"The tax must be between 1 and 99" : "Данокот мора да биди помеѓу 1 и 99" ,
	"Debate location (optional)" : "Локација (опционално)" ,
	"Propose" : "Предлог" ,
	"Please choose a correct type" : "Одберете точен тип" ,
	"Please type a value" : "Напишете вредност" ,
	"Propose a law" : "Предлог закон" ,
	"Ammount" : "Сума" ,
	"GOLD" : "ЗЛАТО" ,
	"Current enemy:" : "Моментален непријател:" ,
	"No Natural Enemy has been proposed" : "Нема предлози за природен непријател" ,
	"Once set, you must wait 7 days to cancel or change your Natural Enemy" : "Еднаш избран, мора да чекате 7 дена да го откажете или промените Вашиот природен непријател" ,
	"New natural enemy:" : "Нов природен непријател :" ,
	"Declare natural enemy" : "Декларирај природен непријател" ,
	"Rank" : "Ранг" ,
	"Resource" : "Ресурси" ,
	"Regions" : "Региони" ,
	"Fruits" : "Овошје" ,
	"Saltpeter" : "Шалитра" ,
	"Fish" : "Риба" ,
	"Aluminum" : "Алуминиум" ,
	"Cattle" : "Говеда" ,
	"Deer" : "Срна" ,
	"Rubber" : "Гума" ,
	"Not available" : "Не постои" ,
	"Monthly" : "Месечно" ,
	"Daily average" : "Дневен просеск" ,
	"Revenues" : "Приходи" ,
	"Active citizens" : "Активни граѓани" ,
	"check current status" : "провери тековна состојба" ,
	"Residence" : "Престојувалиште" ,
	"Citizenship Country" : "Државјанство од" ,
	"No media activity" : "Нема медиум" ,
	"(citizenship)" : "(Државјанство)" ,
	"Population" : "Популација" ,
	"(location)" : "(локација)" ,
  "wrote one minute ago" : "напиша пред 1 минута" ,
	"wrote one hour ago" : "напиша пред 1 час" ,
	"No candidate proposed" : "Нема предлог кандидат" ,
	"Party page" : "Партија страна" ,
	"Total weapon raw material stock" : "Вкупно на лагер суровина за оружје" ,
	"Collect Salary" : "Собери плата" ,
	"Salary details" : "Детали за продажба" ,
	"Gross salary" : "Бруто плата" ,
	"No alive citizens found that match your criteria." : "Нема жив граѓанин со такво име" ,
	"Published in:" : "Објавено во :" ,
	"Category:" : "Категорија:" ,
	"Category" : "Категорија" ,
	"ShareThis" : "Сподели" ,
	"read more" : "читај повеќе" ,
	"Published in" : "Објавено во" ,
	"6-25 characters max" : "максимум 6-25 карактери" ,
	"characters remaining" : " карактери преостануваат" ,
	"only JPG files allowed" : "само JPG датотеки" ,
	"Visit" : "Посети" ,
	"Military Rank" : "Воен ранг" ,
	"Last fight" : "Последна борба" ,
	"Military Unit Profile" : "Профил воена ед." ,
	"Pending applications:" : "Апликации во тек  :" ,
	"see all" : "види сите" ,
	"View rank" : "Види ранг" ,
  "You must be a member of this Military Unit to see the member feed board." : "Мора да сте член на оваа Воена единица да го прочитате муабетот" ,
  "Say something…" : "Кажи нешто…" ,
	"Leader" : "Водач" ,
	"Members" : "Членови" ,
	"See all" : "Види ги сите" ,
	"experience points" : "искуствени поени" ,
	"ok" : "OK" ,
	"Play now" : "Играј сега" ,
	"Sign in" : "Вклучи се" ,
	"Join now It's free" : "Придружи се безплатно е" ,
	"Join now" : "Придружи се" ,
	"It's free" : "Безплатно е" ,
	"Wrong password" : "Грешна шифра" ,
	"Wrong citizen email" : "Погрешна е-пошта на граѓанин" ,
	"Invited friends bonus" : "Бонус од поканети пријатели" ,
	"Get Health" : "Земи здравје" ,
	"Not enough health" : "Нема доволно здравје" ,
  "Enemy Defeated" : "Поразен непријател" ,
	"Health restore" : "Накрени Здравје" ,
	"use" : "за" ,
	"Moving Distance" : "Растојание на придвижување" ,
	"Uses/Player" : "Употреби/Играч" ,
	"Defense Budget" : "Буџет за одбрана" ,
	"Resign candidacy" : "Откажи кадидатура" ,
	"1. Party members can apply for congressional candidature each month between the 16th and 23rd." : "1.????? ??? ?? ????? ???? ??????? ?????? ????? ?? ??? ??? 16 ? 23." ,
	"2. Party president can modify the final list only on the 24th of each month" : "2.??? ???? ????? ?? ????? ?? ????? ????? ???? ?? 24 ?? ??? ?? ????? ???" ,
	"3. Each party can propose a maximum number of 1 candidate per region." : "3.?? ??? ?? ????? ?????? ?????? ?? ????? 1 ????? ?? ?? ????? ?? ??????? ???." ,
	"Edit presentation" : "Уреди презентација" ,
	"Your total war influence" : "Ваш вкупен воен придонес" ,
	"Congratulations for completing your collection!" : "Секоја чест за комплетирањето на колекцијата" ,
	"Congratulations, your rank is now" : "Честитаме, Вашиот ранг сега е:" ,
	"Rank Bonus on attack" : "Ранг бонус во напад" ,
	"Assemble" : "Склопи" ,
	"Bazooka" : "Базука" ,
	"Defeat the enemy with 1 hit." : "Победи го непријателот само со 1 удар." ,
	"Collections" : "Колекција" ,
	"Defeat 25 enemies for 50 different countries" : "Победи 25 непријатели за 50 различни држави" ,
	"countries" : "Држави" ,
	"Mercenary" : "Платеник" ,
	"Travelling cost:" : "Цена на пат:" ,
	"N/A" : "Н/М " ,
	"Zone" : "Зона" ,
	"You can now change location without using a moving ticket." : "Можете да ја промените локација без карта за патување." ,
	"Go back" : "Оди назад" ,
	"Leave eRepublik?" : "Напушти еРепублика" ,
	"Turkey" : "Турција" ,
	"Next battle in" : "Наредна борба за" ,
	"Still active" : "Уште сте активни" ,
	"Join Resistance" : "Поможи на отпорот" ,
	"Join Republic of Macedonia (…" : "Поможи на Македонија" ,
	"Join Lithuania" : "Поможи на Литванија" ,
	"Join Russia" : "Поможи на Русија" ,
	"Join Turkey" : "Поможи на Турција" ,
	"VS" : "против" ,
	"used" : "користени" ,
	"Your found 1 barrel click to collection" : "Најдовте 1 барел клик за собирање" ,
	"Your found 1 stock click to collection" : "Најдовте 1 сток клик за собирање" ,
	"Your found 1 scope click to collection" : "Најдовте 1 скопе клик за собирање" ,
	"Your found 1 trigger kit click to collection" : "Најдовте 1 окидач клик за собирање" ,
	//"Your found 1 barrel click to collection" : "" ,
	"Argentina Campaigns" : "Аргентински кампањи" ,
	"Next elections in one day" : "Наредни избори за еден ден" ,
	"Join Argentina" : "Поможи на Аргентина" ,
	"Join Spain" : "Поможи на Шпанија" ,
	"Join Greece" : "Поможи на Гејците" ,
	"This war is no longer active." : "Оваа војна не е активна" ,
	"Reward" : "Награда" ,
	"1Gold" : "1Злато" ,
	"Spain Campaigns" : "Шпански кампањи" ,
	"Join Hungary" : "Поможи на Унгарија" ,
	"Hungary Campaigns" : "Унгарски кампањи" ,
	"Get resources" : "Земи ресурси" ,
	"Work anyway" : "Работи море" ,
	"Join Iran" : "Поможи на Иран" ,
	"Select a country" : "Одбери Држава" ,
	"Food limit reached" : "Постигнат лимит за храна" ,
	"Buy health kit" : "Купи сет за лечење" ,
	"Society builder" : "Гради друштво" ,
	"True Mercenary" : " Труе Мерценари" ,
	"Armory: Bazooka." : "Оружје: Базука" ,
	"Oops, something went wrong." : "Упссс, нешто тргна погрешно." ,
	"Go to homepage" : "Оди на домашна страна" ,
	"The server is apparently unavailable for the moment. We're doing everything we can to correct the problem. Please try again later." : "Серверот моментално не е достапен. Правиме се да го одстраниме проблемот. Пробајте покасно." ,
	"Republic of China (…" : "Тајван" ,
	"You have reached your food consumption limit." : "Го постигнавте лимитот за конзумирање храна" ,
	"You can recover 100 health every hour." : "Надополнува 100 здравје на секој саат" ,
	"Good job! Please prove you are human" : "Добра работа! Ве молам докажете дека сте човек" ,
	"Intermediate results" : "????? : ?????" ,
	"The official results will be announced in:" : "????? ???? ????? ????? ?? ?? :" ,
	"The election committee is currently checking the votes to ensure the fairness of the elections." : "????? ???????? ?? ??? ?? ???? ??? ?? ???? ?? ?????????? ????" ,
	"Thank you for your patience!" : "Ви благодарам за трпението!" ,
	"Hello, Congress Member" : "Здраво, член на конгрес" ,
	"Your proposals" : "Ваши предлози" ,
	"Maintenance. We'll be back in 11 minutes." : "ПОПРАВКИ. Се враќаме за 11 минути." ,
	"Maintenance. We'll be back in 9 minutes." : "ПОПРАВКИ. Се враќаме за 9 минути." ,
	"Constantly check the progress you do on missions." : "?????? ?????? ??? ?? ?? ??????? ??? ????? ????? ????." ,
	"No more food" : "Немаш храна" ,
	"Total Opponents Defeated" : "Вкупно противници победени" ,
    "You need to be located in Republic of Macedonia (FYROM) to join the fight. Go there now?" : "Мора да се преселите во Македонија за да поможите во борбата. Да одиме сега?" ,
	"Change location" : "Промени локација" ,
	"No thanks" : "Не фала" ,
	"You will now be fighting against Iran." : "Сега ќе се брите против Иран." ,
	"Do you want to go to Iran and fight for your country?" : "Дали сакате да одите во Иран и да се борите за вашата земја" ,
	"Join Serbia" : "Поможи на Србија" ,
	"War status" : "Воен статус" ,
	"Active wars" : "Активни војни" ,
  "Active resistance wars in Republic of Macedonia (FYROM)" : "Активни војни на отпор во Македонија" ,
	"Ended wars" : "Завршени војни" ,
	"Countries involved" : "Држави инволвирани" ,
	"War types" : "Тип на војна" ,
	"Conquest wars" : "Освојување" ,
	"Serbia Campaigns" : "Србски кампањи" ,
	"earned a Battle Hero medal." : "заработи медал за Херој на битка." ,
	//"The Battle Hero achievement is awarded for dealing the highest influence in a battle." : "Достигнувањето на Херој на битка медалот е  награда за најголем в.придонес во битка" ,
	"Build your Bazooka" : "Склопи базука" ,
	"To fight now buy health kits using gold." : "Користи злато за сега да се бориш" ,
	"Complete your collection." : "Комплетирај ја колекцијата." ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
	
	
// ==???? ???==
	"BGN" : "БГН" ,
	"MKD" : "МКД" ,
  "RUB" : "РУБ" ,
  "PKR" : "ПКР" ,
	"INR" : "ИНР" ,
	"BRL" : "БРЛ" ,
	"PLN" : "ПЛН" ,
	"RSD" : "РСД" ,
	"JPY" : "ЈПЈ" ,
	"ITL" : "ИТЛ" ,
	"TRY" : "ТРЛ" ,
	"NIS" : "НИС" ,
	"EGP" : "ЕГП" ,
	"DEM" : "ДЕМ" ,
	"CYP" : "КИП" ,
	"CAD" : "КАД" ,
	"NZD" : "НЗД" ,
	"AUD" : "АУД" ,
	"CHF" : "ЦХФ" ,
	"IDR" : "ИДР" ,
	"ATS" : "АТС" ,
	"ESP" : "ЕСП" ,
	"CLP" : "ЦЛП" ,
	"FRF" : "ФРФ" ,
	"HUF" : "ХУФ" ,
	"CNY" : "КНЈ" ,
	"USD" : "УСД" ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
	"" : "" ,
// ==/???? ???==
	

};






var regexps = {};
//============

regexps["Storage \\(capacity: (.*)\\)"] ="Склад: $1";
//regexps["All national goals have been accomplished."] ="";

regexps["Active wars in (.*)"] = "Активни војни во $1"; 
regexps["Active resistance wars in (.*)"] = "Активни војни на отпор во $1";
regexps["(.*) characters remaining"] = "$1 карактери уште";
regexps["only (.*)pictures allowed"] = "само (1$) слики се дозволени";
regexps["You have (.*) newspaper subscriptions"] = "Имате $1 претплати за весници";
regexps["(.*) Campaigns"] = "Кампањи $1";
regexps["Currently Македонија is at war with (.*),(.*) and (.*). We're fighting to become a superpower."] = "Македонија е во војна со $1, $2 и $3. Ние се бориме да станиме светска сила.";

regexps["(.*) proposes to stop the trade with (.*)"] = "$1 предложи да се запре трговијата со $2"; 
regexps["Day (.*) of the New World"] = "Ден $1 од Новиот Свет";

regexps["Maintenance. We'll be back in (.*) minutes."] = "Поправки. Ќе се вратиме за $1 минути";

regexps["(.*) produced"] = "$1 произведени"; 
regexps["Your current Strength level(.*)"] = "Ваше моментално ниво на јачина $1"; 
regexps["Successfuly transfered (.*) item(s) to (.*)"] = "Успешно префрлени $1 парчина на $2"; 

regexps["Congratulations, you have reached experience level(.*)"] = "Честитки, Вие постигнавте искуствено ниво $1";

regexps["You have successfully bought (\\d+) product(s)? for (.*)(\\.)?$"] = "Успешно купивте $1 производ/и за $3 ";
regexps["You have bought (.*)(\\.)?$ for (.*)(\\.)?$. This offer will be back on market in a minute!"] = "Купивте $1 за $2. Оваа понуда ќе биде на маркетот за минута";
regexps["^You do not have enough money in your account.$"] = "Немате доволно пари";

regexps["Hi(.*)I'm Emma, the company's secretary. You look like you will be very productive today!"] = "Здраво $1  Јас сум Ема, секретарката. Денес ми сте некако многу продуктивни.";
regexps["Basic productivity"] = "Основна продуктивност";
regexps["Fantastic job, (.*) I'm already looking forward to seeing you again tomorrow. Bye!"] = "Одлична работа, $1 Се гледаме утре, Чао.";

regexps["Welcome(.*)I am Lana. Ready for your daily military training? Remember: the more trained you are, the more damage you do in battles and the more Super Soldier Medals you win! Good luck!"] = "Добредојде $1. Јас сум Лана. Спремни сте за денешниот тренинг. Колку повеќе тренирате толку повеќе можете да нанесете штета";
regexps["Awesome performance, (.*) Can't wait to have the next training session with you!"] = "$1 Одлични перформанси, ?? ???";

regexps["Strength level: (.*) / (.*) for the next Super Soldier Medal"] = "Ниво на Јачина: $1. од $2 за нареден Супер војник медал.";

regexps["You already have a job at (.*)(\\.) To apply for this job you have to quit your current job."] = "Веќе сте вработени во $1. За да се вработите тука треба да дадете прво отказ.";

regexps["^General Manager$"] = "Главен менаџер $1";
regexps["^Friends\\((\\d*)\\)"] = "Пријатели $1";


regexps["\\((.*) increase\\)"] = "($1 зголеми)";
regexps["On day (.*) have a population of (.*) citizens"] = "На ден $1 има население од $2 граѓани";
regexps["On day (.*) have a GDP of (.*) Gold"] = "На ден $1 има ГБП од $2 Злато";
regexps["On day (.*) own control of the following regions:"] = "На ден $1 поседува контрола над следните региони";
regexps["On day (.*) keep control of the following regions:"] = "На ден $1 држи контрола над следните региони";

regexps["Regions \\((\\d*)\\)"] = "Региони ($1)";

regexps["Citizens"] = "Граѓани";

regexps["(\\d*) months ago"] = "пред $1 месеци";
regexps["(\\d*) days ago"] = "пред $1 дена";
regexps["(\\d*) hours ago"] = "пред $1 час/а";
regexps["(\\d*) hours ago"] = "Пред $1 час/а";
regexps["(\\d*) minutes ago"] = "пред $1 минути";
regexps["Yesterday, our army successfully defended (.*) against the resistance forces of (.*)."] = "Вчера, нашата армија успешно ја одбрани $1 против силите на отпор на $2.";
regexps["Yesterday, we conquered (.*) from (.*)."] = "Вчера, ја превзедовме $1 од $2.";
regexps["Yesterday, resistance forces of (.*) regained (.*)."] = "Вчера, силите на отпор на $1 го превзедоа $2.";
regexps["Experience level:(.*)"]="Искуствени поени:$1";
regexps["You can recover up to:(.*)/(.*)Health"] = "Можете да закрепнете до: $1/$2";
regexps["(.*) attacked (.*),(.*). Fight for your ally \\((.*)\\)!"] = "$1 нападна на $3, $2 Бори се за сојузникот $4";
regexps["(.*) signed an alliance with (.*)"] = "$1 потпишаа алијанса со $2";
regexps["A congress donation to (.*) was proposed"] = "Предложена е конгрес донација за $1";
regexps["(.*) made a donation to (.*)"] = "$1 донира на $2";
regexps["New taxes for (.*) were proposed"] = "Предложени се нови даноци за $1";
regexps["Taxes for (.*) changed"] = "Давачките за $1 се променаа";
regexps["A money issuing of (.*) was proposed"] = "Предложена е наплата за вадење на $1";
regexps["(.*)as new Natural Enemy proposal has been rejected."] = "$1 како предлог за нов природен непријател е одбиен";
regexps["(.*) Province was conquered by Resistance force of (.*) in the war versus (.*)"] = "$1 провинцијата е освоена од силите на отпор на $2 во војната против $3";
regexps["(.*) attacked (.*), (.*)"] = "$1 нападна на $2  $3 ";
regexps["(.*) was conquered by (.*) in the war versus (.*)"] = "$1 е освоена од $2 во војна против $3";
regexps["President of (.*) proposed an alliance with (.*)."] = "Претседателот на $1 предложи алијанса со $2";
regexps["President of (.*)"] = "Претседателот на $1";
regexps["Battle (.*)"] = "Битка $1";
regexps["(.*) rank points"] = "$1 ранг поени";


regexps["^(\\d*) comments$"] = "$1 коментари";
regexps["^Comments(.*)"] = "Кажал(е)$1";
regexps["^Trackbacks (.*)"] = "Повратно $1";

regexps["(\\s*)Expires in (\\d*) days"] = "Завршува за $2 дена";
regexps["(\\s*)Expires in (\\d*) hours"] = "Завршува за $2 часа";
regexps["(\\s*)Expires in (\\d*) months"] = "Завршува за $2 месеци";

regexps["(\\d*) allies"] = "$1 сојузници";
regexps["(\\d+) active battle(s)?"] = "$1 активна битка";
regexps["Resistance Force of (.*)"] = "Сили на отпор на $1";
regexps["Resistance Force Of (.*)"] = "Сили на отпор на $1";
regexps["You need to be located in (.*) to join the fight. Go there now?"] = "Мора да се преселите во $1 за да поможите во борбата. Да одиме сега";

regexps["I have read and agree with the(.*)"] = "Прочитав и се согласувам со $1";

regexps["Employee list \\((\\d*)\\)"] = "Вработени ($1)";
regexps["Job offers \\((\\d*)\\)"] = "Понуди за работа ($1)";

regexps["Do you agree to represent your party in the congress election in (.*)(\\?)"] = "Дали се согласувате да ја претставувате Вашата партија на наредните избори за конгрес во $1";
regexps["Increase population by (.*)"] = "Зголеми популација за $1";
regexps["Control (.*) new region(s)"] = "Контрола над $1 нови региони";
regexps["Each party can propose a maximum number of (\\d*) candidates per region."] = "Секоја партија може да предложи максимум $1 кандидати по регион",



regexps["You only have (\\d*) experience points. To access this feature you need at least 80 experience points \\(experience level 14\\)."]="Имате само $1 искуствени поени. За овие предности Ви требаат најмалку 80 искуствени поени( искуствено ниво 14)";

regexps["Proposed by"] = "Предложено од ";
regexps["Proposing presidential impeachment is not possible in the last (\\d*) days of the presidential mandate."] = "Претседателски импичмент не можен во последните $1 денови од неговиот мандат.",
regexps["Citizen fee change from (.*) to (.*)"] = "грѓански данок променат од $1 на $2";
regexps["Minimum wage change from (.*) to (.*)"] = "Минимум плата од $1 до $2";
regexps["Do you agree to transfer (.*) from the country accounts to (.*)\\?"] = "Се согласувате да префрлите $1 од сметка на државата на $2";
regexps["Do you agree with the proposal to issue(.*)for(.*)(\\?)"] = "Се согласувате со предлогот за наплата од $1 за $2";

regexps["(.*) has been proposed as Natural Enemy."] = "$1 е предложена за природен непријател";
regexps["(.*) has declared (.*) as a Natural Enemy"] = "$2 декларира $1 како природен непријател.";
regexps["Do you want the current president of(.*)to end this office?"] = "Дали сакате моменталниот претседател на $1 да ја напушти канцеларијата";

regexps["Do you agree that(.*)should buy a(.*)of quality(.*)from(.*)at the price of(.*)for(.*)(\\?)"] = "Дали се согласувате дека $1 треба да купи $2 ?? ????? $3 ?? $4 ?? ???? $5 ???? ??? ?? $6 ??????? ????";

regexps["Military Campaigns"] = "Воени кампањи";
regexps["Feeds of "] = "Муабет на "
regexps["Citizen feeds"] = "Граѓански гласови";
regexps["News"] = "Новости";

if (document.location.toString().indexOf("/gold-bonus/")!=-1) {regexps["Collect(.*)Gold"] = "Земи $1 Злато";}


if (document.location.toString().indexOf("/messages/alerts/")!=-1) {
regexps["The General Manager of"] = "Главниот менаџер на";
regexps["has modified your salary from (.*) to (.*)"] = "ви ја промена платата од $1 на $2";
regexps["We are sorry to inform you that the General Manager of (.*) has decided to fire you! But don't worry, you can get a new job& or you can even buy a company&."] = "Главниот менаџер на $1 Ве отпушти";
regexps["^has accepted your friendship request"] = " ја прифати Вашата покана за пријателство."; 
regexps["^voted your"] = " гласаше за Вашата ";  
regexps["^commented on your"] = " коментираше на Вашата ";  
regexps["^(.*)and(.*)commented on this $."] = " $1 и $2 коментираа на оваа ";  
regexps["^is no longer a congress member.$"] = "не е повеќе член на конгрес.";
regexps["^Good news! You just made (.*) Gold because your friend (.*) was awarded with an amount of Gold from eRepublik.$"] = "Добри вести! Тукушто заработивте $1 Злато, бидејќи Вашиот пријател $2 е награден од еРепублик ";
regexps["^post$"] = "објава";
regexps["^Collect your Gold$"] = "Земете си го златото";
regexps["^bonus within 30 days!$"] = " бонус за 30 дена";
regexps["^has transfered (.*) to your account."] = " префрли $1 на Вашата сметка.";
regexps["(.*)has transferred(.*)to your storage."] = "$1 префрли $2 во Вашиот склад";
regexps["Land of (.*)"] = "Земја на 1$";
regexps["You are about to leave eRepublik. Are you sure it's safe to follow this link? (.*)"] = "Вие сакате да излезете од еРепублик. Сигурни сте дека врската е безбедна? 1$";


regexps["^has transfered (.*) products to your inventory. Check your$"] = "префрли $1 производи во вашиот инвентар.";
}
 

regexps["^Manage accounts(.*)\\((\\d*)\\)$"] = "Менаџирај сметки ($2)";

//var mr = undefined;
//if (document.location.toString().indexOf("citizen/profile")!=-1) {
//regexps["Recruit"] = "Регрут";
//regexps["Private"] = "Десетар";
//regexps["Corporal"] = "Водник";
//regexps["Sergeant"] = "Наредник";
//regexps["Lieutenant"] = "Поручник";
//regexps["Captain"] = "Капетан";
//regexps["Major"] = "Мајор";
//regexps["Commander"] = "командант";
//regexps["Lt Colonel"] = "Под.Полковник";
//regexps["Colonel"] = "Полковник";
//regexps["General"] = "Генерал";
//regexps["Field Marshal"] = "Маршал Ф";
//regexps["Supreme Marshal"] = "Маршал С";
//regexps["National Force"] = "Национална сила";
//regexps["World class Force"] = "Светска сила";
//regexps["Legendary Force"] = "Легендарна сила";
//regexps["God of War"] = "Бог на војна";
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
						"<li><a target=\"_blank\" href=\"http://translate.google.com/#mk|en|\">Превод</a></li>"+
						"<li><a target=\"_blank\" href=\"http://www.erepublik.com/en/country/Republic-of-Macedonia-FYROM\">еМакедонија</a></li>"+
						"<li><a target=\"_blank\" href=\"http://www.erepublik.com/en/citizen/profile/4304767\">bocevski</a></li>"+
						"<li><a target=\"_blank\" href=\"http://www.erepublik.com/en/citizen/profile/5095820\">kicoto</a></li>"+
						"<li><a target=\"_blank\" href=\"http://www.erepublik.com/en/economy/donate-items/4304767\">Донирајте</a></li>"
						);


$("#footer p.follow").append(
						"<a target=\"_blank\" href=\"http://www.erepublik.com/en/party/free-democratic-party-3709/1\">Free Democratic Party</a></li>"
						);


$("div#articles").append(
						"<a class=\"mbutton\" target=\"_blank\" href=\"http://www.erepublik.com/en/news/rated/all\"><img alt=\"\" src=\"http://png-2.findicons.com/files/icons/2360/spirit20/20/newspaper.png\"><span>Сите новости</span></a>"+
						"<a class=\"mbutton\" target=\"_blank\" href=\"http://www.erepublik.com/en/news/latest/all\"><img alt=\"\" src=\"http://png-2.findicons.com/files/icons/2360/spirit20/20/newspaper.png\"><span>Најнови новости</span></a>"+
						"<a class=\"mbutton\" target=\"_blank\" href=\"http://www.erepublik.com/en/news/international\"><img alt=\"\" src=\"http://png-2.findicons.com/files/icons/2360/spirit20/20/newspaper.png\"><span>Интернационални новости</span></a>"+
						"<a class=\"mbutton\" target=\"_blank\" href=\"http://www.erepublik.com/en/news/military\"><span>Војска</span></a>"
						);


$("tbody").css("font-size","12px "); 
$("a.dotted").css("font-size","12px ");

 //						"<a target=\"_blank\" http://www.erepublik.com/en/party/free-democratic-party-3709/1\"><img src=\"http://static.erepublik.com/uploads/avatars/Parties/2011/06/06/56db57b4db0a6fcb7f9e0c0b504f6472.jpg\"></a>"+

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
$('.m_stock').eq(0).text("На лагер "+stock);


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
	addGlobalStyle('#menu ul li#menu1 a, #menu ul li#menu2 a, #menu ul li#menu3 a, #menu ul li#menu4 a, #menu ul  li#menu5 a, #menu ul  li#menu6 a, #logo a { background-image: url(http://pic.mk/images/maperepubl.png); }');
//http://pic.mk/images/maperepubl.png	
//http://pic.mk/images/maperepubl.png
	addGlobalStyle('.btnGetExtraStorage { font-size: 10px; }');
	addGlobalStyle('body { font-family: tahoma; }');
	addGlobalStyle('.charTooltips, .arrowbutton { font-family: tahoma; }');
	addGlobalStyle('.preview, .articlecontent { font-family: tahoma, sans-serif !important; font-size: 10pt; direction: ltr; text-align: left !important; }');
	addGlobalStyle('.preview b /*, b */ { font-family: tahoma, serif !important; font-size: 13pt !important; }');
	addGlobalStyle('li.wall_post p, .msg_body, .smallholder { font-family: tahoma, sans-serif !important; font-size: 10pt; direction: ltr; }');
	addGlobalStyle('.smallholder { font-family: tahoma, sans-serif !important; font-size: 9pt; direction: ltr; }');
	addGlobalStyle('.post_reply a { display: block; }');
	//addGlobalStyle('.largepadded { text-align: left; }');
	addGlobalStyle('.user_pic { position: left !important; display: block; left: auto !important; left: 0 !important; }');
	addGlobalStyle('.post_content h6 { text-align: left !important; display: block; }');
	addGlobalStyle('.post_content h6 a { float: left; padding-right: 5px; }');
	addGlobalStyle('#citizen_feed .wall_post .second_actions, #citizen_feed .wall_post .second_actions_comments { left: auto !important; right: 0 !important; }');
	//addGlobalStyle('.resizable-textarea textarea { font-family: tahoma, sans-serif !important; font-size: 10pt; direction: ltr; position: relative; margin-left: 5px !important; margin-top: 30px !important; width: 600px !important; }');
	addGlobalStyle('.fakeheight { direction: ltr text-align: left; }');
	addGlobalStyle('.front_quotes div.second p { margin-top: 1px;}');
	addGlobalStyle('.front_quotes div.first, .front_quotes div.second, .front_quotes div.third { padding-top: 2px; text-align: left; }');
	addGlobalStyle('#translate_news_0{ float: left !important; margin-top: 17px !important; }');
	addGlobalStyle('textarea#citizen_message { text-align: left; !important;}');
	addGlobalStyle('.your_subs {font-size: 8pt;}');
	addGlobalStyle('.fluid_blue_dark {margin-top: 5px;}');
	addGlobalStyle('.markItUpEditor, #article_comment, #article_name, #article_category {font-family: tahoma !important; text-align: left; direction: ltr;}');
