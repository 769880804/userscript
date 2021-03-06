// Deluxe Scorehero YUI Menus
// ver 3.6.0
// by Daniel Lew
// 
// Replaces all of the normal menus with YUI menus, allowing
// for easier access to many aspects of the site.  It 
// now also re-organizes the menu system to allow for 
// easier navigation and access to more of the site from the
// navigation bar.
// 
// Thanks to joerod for testing, ajanata for helping
// get Opera support working, and Deimos for helping
// with the new menu layout.
//
// This is the YUI copyright notice that must be
// included as per the license:
// Copyright (c) 2008, Yahoo! Inc. All rights reserved.
// Code licensed under the BSD License:
// http://developer.yahoo.net/yui/license.txt
// version: 2.5.2
//
// ==UserScript==
// @name           Scorehero YUI Menus
// @namespace       
// @description    Replaces the typical Scorehero menus with YUI menus.
// @include        http://*scorehero.com/*
// @exclude        http://*scorehero.com/insert_score.php*
// @exclude        http://*scorehero.com/delete_scores.php*
// @exclude        http://*scorehero.com/view_scores.php*
// @exclude        http://*scorehero.com/team_request.php*
// @exclude        http://*scorehero.com/submit_proof.php*
// @exclude        http://*scorehero.com/forum/privmsg.php?*mode=newpm*
// @exclude        http://wiki.scorehero.com/*
// @exclude        http://www.scorehero.com/botb/
// ==/UserScript==

(function () {

    // Only execute this script if we're in the top - don't execute
    // when we're in an iframe.
    if (window != top)
    {
        return;
    }
    
    // Set to true to return a bit of debug info
    var isDebug = false;
    
    // Chart how long this takes
    // Time note - before GH5, this took about 1/4th the time.
    // If you want it to be a lot faster, you'd have to implement
    // an even lazier-loading menu system (i.e., load data into
    // the menu as it loads GH5).
    var scriptStart = (new Date()).getTime();
    
    //////////////////////////////////////////////////////////////////////////////
    // FUNCTION DEF SECTION //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    
    var idCounter = 0;
    var generateUniqueId = function()
    {
        return 'm' + idCounter++;
    }
    
    var generate = function(prefixUrl, oItems, aExtra)
    {
        var aRet = [];
        var arr = oItems.arr;
        var sUrl, oNewItem, oCurrItem;
        var a = arr.length;
        do
        {
            oCurrItem = arr[arr.length - a];
            sUrl = [prefixUrl, '&', oItems.varName, '=', oCurrItem.val].join('');
            oNewItem = { text: oCurrItem.text, url: sUrl };
            if (oCurrItem.oChild)
            {
                oNewItem.submenu = { id: generateUniqueId(), itemdata: generate(sUrl, oCurrItem.oChild) };
            }
            aRet[aRet.length] = oNewItem;
        }
        while(--a);
        
        return (aExtra) ? aRet.concat(aExtra) : aRet;
    }
   
    //////////////////////////////////////////////////////////////////////////////
    // DATA GATHERING SECTION ////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // Used for compatibility with non-FF browsers
    var isOpera = (navigator.userAgent.toLowerCase().indexOf('opera') > -1);
    var isSafari = (navigator.userAgent.toLowerCase().indexOf('safari') > 1);

    // Prepare some variables for use during the menu creation.
    var domain = window.location.host;
    var isGHDomain = (domain == 'www.scorehero.com');
    var isForum = (window.location.href.indexOf('/forum/') > -1);
    var httpRoot = "http://" + domain + "/"
    var httpForumRoot = "http://" + domain + "/forum/";
    var httpWikiRoot = "http://wiki.scorehero.com/";
    var httpRootWww = "http://www.scorehero.com/";
    
    // Figure out stuff based on whether we're logged in or not.
    var isLoggedIn = (isOpera || isSafari) ? window.isLoggedIn : unsafeWindow.isLoggedIn;
    var menuWidth = (isLoggedIn) ? 529 : 383;
    
    // Parse the cookie
    // (Use unescape() later if necessary)
    var cookie = new Object();
    var crumbs = document.cookie.split("; ");
    for (var a = 0; a < crumbs.length; a++)
    {
        var split = crumbs[a].split("=");
        if (split.length == 2)
        {
            cookie[split[0]] = split[1];
        }
    }
    
    var sUsername = "";
    if (isLoggedIn)
    {
        if (cookie['gh_uname'])
        {
            sUsername = cookie['gh_uname'];
        }
        else if (cookie['ghf_uname'])
        {
            sUsername = cookie['ghf_uname'];
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    // JAVASCRIPT LOADING SECTION ////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // Below, I'm including the ENTIRETY of the YUI javascript that
    // I need to run this program.  This is to avoid all the pain
    // in the ass problems revolving around cross-browser dynamic
    // loading of javascript files.
    // yahoo-dom-event.js
    if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={};}YAHOO.namespace=function(){var A=arguments,E=null,C,B,D;for(C=0;C<A.length;C=C+1){D=A[C].split(".");E=YAHOO;for(B=(D[0]=="YAHOO")?1:0;B<D.length;B=B+1){E[D[B]]=E[D[B]]||{};E=E[D[B]];}}return E;};YAHOO.log=function(D,A,C){var B=YAHOO.widget.Logger;if(B&&B.log){return B.log(D,A,C);}else{return false;}};YAHOO.register=function(A,E,D){var I=YAHOO.env.modules;if(!I[A]){I[A]={versions:[],builds:[]};}var B=I[A],H=D.version,G=D.build,F=YAHOO.env.listeners;B.name=A;B.version=H;B.build=G;B.versions.push(H);B.builds.push(G);B.mainClass=E;for(var C=0;C<F.length;C=C+1){F[C](B);}if(E){E.VERSION=H;E.BUILD=G;}else{YAHOO.log("mainClass is undefined for module "+A,"warn");}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(A){return YAHOO.env.modules[A]||null;};YAHOO.env.ua=function(){var C={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0};var B=navigator.userAgent,A;if((/KHTML/).test(B)){C.webkit=1;}A=B.match(/AppleWebKit\/([^\s]*)/);if(A&&A[1]){C.webkit=parseFloat(A[1]);if(/ Mobile\//.test(B)){C.mobile="Apple";}else{A=B.match(/NokiaN[^\/]*/);if(A){C.mobile=A[0];}}A=B.match(/AdobeAIR\/([^\s]*)/);if(A){C.air=A[0];}}if(!C.webkit){A=B.match(/Opera[\s\/]([^\s]*)/);if(A&&A[1]){C.opera=parseFloat(A[1]);A=B.match(/Opera Mini[^;]*/);if(A){C.mobile=A[0];}}else{A=B.match(/MSIE\s([^;]*)/);if(A&&A[1]){C.ie=parseFloat(A[1]);}else{A=B.match(/Gecko\/([^\s]*)/);if(A){C.gecko=1;A=B.match(/rv:([^\s\)]*)/);if(A&&A[1]){C.gecko=parseFloat(A[1]);}}}}}return C;}();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var B=YAHOO_config.listener,A=YAHOO.env.listeners,D=true,C;if(B){for(C=0;C<A.length;C=C+1){if(A[C]==B){D=false;break;}}if(D){A.push(B);}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var A=YAHOO.lang,C=["toString","valueOf"],B={isArray:function(D){if(D){return A.isNumber(D.length)&&A.isFunction(D.splice);}return false;},isBoolean:function(D){return typeof D==="boolean";},isFunction:function(D){return typeof D==="function";},isNull:function(D){return D===null;},isNumber:function(D){return typeof D==="number"&&isFinite(D);},isObject:function(D){return(D&&(typeof D==="object"||A.isFunction(D)))||false;},isString:function(D){return typeof D==="string";},isUndefined:function(D){return typeof D==="undefined";},_IEEnumFix:(YAHOO.env.ua.ie)?function(F,E){for(var D=0;D<C.length;D=D+1){var H=C[D],G=E[H];if(A.isFunction(G)&&G!=Object.prototype[H]){F[H]=G;}}}:function(){},extend:function(H,I,G){if(!I||!H){throw new Error("extend failed, please check that "+"all dependencies are included.");}var E=function(){};E.prototype=I.prototype;H.prototype=new E();H.prototype.constructor=H;H.superclass=I.prototype;if(I.prototype.constructor==Object.prototype.constructor){I.prototype.constructor=I;}if(G){for(var D in G){if(A.hasOwnProperty(G,D)){H.prototype[D]=G[D];}}A._IEEnumFix(H.prototype,G);}},augmentObject:function(H,G){if(!G||!H){throw new Error("Absorb failed, verify dependencies.");}var D=arguments,F,I,E=D[2];if(E&&E!==true){for(F=2;F<D.length;F=F+1){H[D[F]]=G[D[F]];}}else{for(I in G){if(E||!(I in H)){H[I]=G[I];}}A._IEEnumFix(H,G);}},augmentProto:function(G,F){if(!F||!G){throw new Error("Augment failed, verify dependencies.");}var D=[G.prototype,F.prototype];for(var E=2;E<arguments.length;E=E+1){D.push(arguments[E]);}A.augmentObject.apply(this,D);},dump:function(D,I){var F,H,K=[],L="{...}",E="f(){...}",J=", ",G=" => ";if(!A.isObject(D)){return D+"";}else{if(D instanceof Date||("nodeType" in D&&"tagName" in D)){return D;}else{if(A.isFunction(D)){return E;}}}I=(A.isNumber(I))?I:3;if(A.isArray(D)){K.push("[");for(F=0,H=D.length;F<H;F=F+1){if(A.isObject(D[F])){K.push((I>0)?A.dump(D[F],I-1):L);}else{K.push(D[F]);}K.push(J);}if(K.length>1){K.pop();}K.push("]");}else{K.push("{");for(F in D){if(A.hasOwnProperty(D,F)){K.push(F+G);if(A.isObject(D[F])){K.push((I>0)?A.dump(D[F],I-1):L);}else{K.push(D[F]);}K.push(J);}}if(K.length>1){K.pop();}K.push("}");}return K.join("");},substitute:function(S,E,L){var I,H,G,O,P,R,N=[],F,J="dump",M=" ",D="{",Q="}";for(;;){I=S.lastIndexOf(D);if(I<0){break;}H=S.indexOf(Q,I);if(I+1>=H){break;}F=S.substring(I+1,H);O=F;R=null;G=O.indexOf(M);if(G>-1){R=O.substring(G+1);O=O.substring(0,G);}P=E[O];if(L){P=L(O,P,R);}if(A.isObject(P)){if(A.isArray(P)){P=A.dump(P,parseInt(R,10));}else{R=R||"";var K=R.indexOf(J);if(K>-1){R=R.substring(4);}if(P.toString===Object.prototype.toString||K>-1){P=A.dump(P,parseInt(R,10));}else{P=P.toString();}}}else{if(!A.isString(P)&&!A.isNumber(P)){P="~-"+N.length+"-~";N[N.length]=F;}}S=S.substring(0,I)+P+S.substring(H+1);}for(I=N.length-1;I>=0;I=I-1){S=S.replace(new RegExp("~-"+I+"-~"),"{"+N[I]+"}","g");}return S;},trim:function(D){try{return D.replace(/^\s+|\s+$/g,"");}catch(E){return D;}},merge:function(){var G={},E=arguments;for(var F=0,D=E.length;F<D;F=F+1){A.augmentObject(G,E[F],true);}return G;},later:function(K,E,L,G,H){K=K||0;E=E||{};var F=L,J=G,I,D;if(A.isString(L)){F=E[L];}if(!F){throw new TypeError("method undefined");}if(!A.isArray(J)){J=[G];}I=function(){F.apply(E,J);};D=(H)?setInterval(I,K):setTimeout(I,K);return{interval:H,cancel:function(){if(this.interval){clearInterval(D);}else{clearTimeout(D);}}};},isValue:function(D){return(A.isObject(D)||A.isString(D)||A.isNumber(D)||A.isBoolean(D));}};A.hasOwnProperty=(Object.prototype.hasOwnProperty)?function(D,E){return D&&D.hasOwnProperty(E);}:function(D,E){return !A.isUndefined(D[E])&&D.constructor.prototype[E]!==D[E];};B.augmentObject(A,B,true);YAHOO.util.Lang=A;A.augment=A.augmentProto;YAHOO.augment=A.augmentProto;YAHOO.extend=A.extend;})();YAHOO.register("yahoo",YAHOO,{version:"2.5.2",build:"1076"});(function(){var B=YAHOO.util,K,I,J={},F={},M=window.document;YAHOO.env._id_counter=YAHOO.env._id_counter||0;var C=YAHOO.env.ua.opera,L=YAHOO.env.ua.webkit,A=YAHOO.env.ua.gecko,G=YAHOO.env.ua.ie;var E={HYPHEN:/(-[a-z])/i,ROOT_TAG:/^body|html$/i,OP_SCROLL:/^(?:inline|table-row)$/i};var N=function(P){if(!E.HYPHEN.test(P)){return P;}if(J[P]){return J[P];}var Q=P;while(E.HYPHEN.exec(Q)){Q=Q.replace(RegExp.$1,RegExp.$1.substr(1).toUpperCase());}J[P]=Q;return Q;};var O=function(Q){var P=F[Q];if(!P){P=new RegExp("(?:^|\\s+)"+Q+"(?:\\s+|$)");F[Q]=P;}return P;};if(M.defaultView&&M.defaultView.getComputedStyle){K=function(P,S){var R=null;if(S=="float"){S="cssFloat";}var Q=P.ownerDocument.defaultView.getComputedStyle(P,"");if(Q){R=Q[N(S)];}return P.style[S]||R;};}else{if(M.documentElement.currentStyle&&G){K=function(P,R){switch(N(R)){case"opacity":var T=100;try{T=P.filters["DXImageTransform.Microsoft.Alpha"].opacity;}catch(S){try{T=P.filters("alpha").opacity;}catch(S){}}return T/100;case"float":R="styleFloat";default:var Q=P.currentStyle?P.currentStyle[R]:null;return(P.style[R]||Q);}};}else{K=function(P,Q){return P.style[Q];};}}if(G){I=function(P,Q,R){switch(Q){case"opacity":if(YAHOO.lang.isString(P.style.filter)){P.style.filter="alpha(opacity="+R*100+")";if(!P.currentStyle||!P.currentStyle.hasLayout){P.style.zoom=1;}}break;case"float":Q="styleFloat";default:P.style[Q]=R;}};}else{I=function(P,Q,R){if(Q=="float"){Q="cssFloat";}P.style[Q]=R;};}var D=function(P,Q){return P&&P.nodeType==1&&(!Q||Q(P));};YAHOO.util.Dom={get:function(R){if(R&&(R.nodeType||R.item)){return R;}if(YAHOO.lang.isString(R)||!R){return M.getElementById(R);}if(R.length!==undefined){var S=[];for(var Q=0,P=R.length;Q<P;++Q){S[S.length]=B.Dom.get(R[Q]);}return S;}return R;},getStyle:function(P,R){R=N(R);var Q=function(S){return K(S,R);};return B.Dom.batch(P,Q,B.Dom,true);},setStyle:function(P,R,S){R=N(R);var Q=function(T){I(T,R,S);};B.Dom.batch(P,Q,B.Dom,true);},getXY:function(P){var Q=function(R){if((R.parentNode===null||R.offsetParent===null||this.getStyle(R,"display")=="none")&&R!=R.ownerDocument.body){return false;}return H(R);};return B.Dom.batch(P,Q,B.Dom,true);},getX:function(P){var Q=function(R){return B.Dom.getXY(R)[0];};return B.Dom.batch(P,Q,B.Dom,true);},getY:function(P){var Q=function(R){return B.Dom.getXY(R)[1];};return B.Dom.batch(P,Q,B.Dom,true);},setXY:function(P,S,R){var Q=function(V){var U=this.getStyle(V,"position");if(U=="static"){this.setStyle(V,"position","relative");U="relative";}var X=this.getXY(V);if(X===false){return false;}var W=[parseInt(this.getStyle(V,"left"),10),parseInt(this.getStyle(V,"top"),10)];if(isNaN(W[0])){W[0]=(U=="relative")?0:V.offsetLeft;}if(isNaN(W[1])){W[1]=(U=="relative")?0:V.offsetTop;}if(S[0]!==null){V.style.left=S[0]-X[0]+W[0]+"px";}if(S[1]!==null){V.style.top=S[1]-X[1]+W[1]+"px";}if(!R){var T=this.getXY(V);if((S[0]!==null&&T[0]!=S[0])||(S[1]!==null&&T[1]!=S[1])){this.setXY(V,S,true);}}};B.Dom.batch(P,Q,B.Dom,true);},setX:function(Q,P){B.Dom.setXY(Q,[P,null]);},setY:function(P,Q){B.Dom.setXY(P,[null,Q]);},getRegion:function(P){var Q=function(R){if((R.parentNode===null||R.offsetParent===null||this.getStyle(R,"display")=="none")&&R!=R.ownerDocument.body){return false;}var S=B.Region.getRegion(R);return S;};return B.Dom.batch(P,Q,B.Dom,true);},getClientWidth:function(){return B.Dom.getViewportWidth();},getClientHeight:function(){return B.Dom.getViewportHeight();},getElementsByClassName:function(T,X,U,V){X=X||"*";U=(U)?B.Dom.get(U):null||M;if(!U){return[];}var Q=[],P=U.getElementsByTagName(X),W=O(T);for(var R=0,S=P.length;R<S;++R){if(W.test(P[R].className)){Q[Q.length]=P[R];if(V){V.call(P[R],P[R]);}}}return Q;},hasClass:function(R,Q){var P=O(Q);var S=function(T){return P.test(T.className);};return B.Dom.batch(R,S,B.Dom,true);},addClass:function(Q,P){var R=function(S){if(this.hasClass(S,P)){return false;}S.className=YAHOO.lang.trim([S.className,P].join(" "));return true;};return B.Dom.batch(Q,R,B.Dom,true);},removeClass:function(R,Q){var P=O(Q);var S=function(T){if(!Q||!this.hasClass(T,Q)){return false;}var U=T.className;T.className=U.replace(P," ");if(this.hasClass(T,Q)){this.removeClass(T,Q);}T.className=YAHOO.lang.trim(T.className);return true;};return B.Dom.batch(R,S,B.Dom,true);},replaceClass:function(S,Q,P){if(!P||Q===P){return false;}var R=O(Q);var T=function(U){if(!this.hasClass(U,Q)){this.addClass(U,P);return true;}U.className=U.className.replace(R," "+P+" ");if(this.hasClass(U,Q)){this.replaceClass(U,Q,P);}U.className=YAHOO.lang.trim(U.className);return true;};return B.Dom.batch(S,T,B.Dom,true);},generateId:function(P,R){R=R||"yui-gen";var Q=function(S){if(S&&S.id){return S.id;}var T=R+YAHOO.env._id_counter++;if(S){S.id=T;}return T;};return B.Dom.batch(P,Q,B.Dom,true)||Q.apply(B.Dom,arguments);},isAncestor:function(P,Q){P=B.Dom.get(P);Q=B.Dom.get(Q);if(!P||!Q){return false;}if(P.contains&&Q.nodeType&&!L){return P.contains(Q);}else{if(P.compareDocumentPosition&&Q.nodeType){return !!(P.compareDocumentPosition(Q)&16);}else{if(Q.nodeType){return !!this.getAncestorBy(Q,function(R){return R==P;});}}}return false;},inDocument:function(P){return this.isAncestor(M.documentElement,P);},getElementsBy:function(W,Q,R,T){Q=Q||"*";R=(R)?B.Dom.get(R):null||M;if(!R){return[];}var S=[],V=R.getElementsByTagName(Q);for(var U=0,P=V.length;U<P;++U){if(W(V[U])){S[S.length]=V[U];if(T){T(V[U]);}}}return S;},batch:function(T,W,V,R){T=(T&&(T.tagName||T.item))?T:B.Dom.get(T);if(!T||!W){return false;}var S=(R)?V:window;if(T.tagName||T.length===undefined){return W.call(S,T,V);}var U=[];for(var Q=0,P=T.length;Q<P;++Q){U[U.length]=W.call(S,T[Q],V);}return U;},getDocumentHeight:function(){var Q=(M.compatMode!="CSS1Compat")?M.body.scrollHeight:M.documentElement.scrollHeight;var P=Math.max(Q,B.Dom.getViewportHeight());return P;},getDocumentWidth:function(){var Q=(M.compatMode!="CSS1Compat")?M.body.scrollWidth:M.documentElement.scrollWidth;var P=Math.max(Q,B.Dom.getViewportWidth());return P;},getViewportHeight:function(){var P=self.innerHeight;
    var Q=M.compatMode;if((Q||G)&&!C){P=(Q=="CSS1Compat")?M.documentElement.clientHeight:M.body.clientHeight;}return P;},getViewportWidth:function(){var P=self.innerWidth;var Q=M.compatMode;if(Q||G){P=(Q=="CSS1Compat")?M.documentElement.clientWidth:M.body.clientWidth;}return P;},getAncestorBy:function(P,Q){while(P=P.parentNode){if(D(P,Q)){return P;}}return null;},getAncestorByClassName:function(Q,P){Q=B.Dom.get(Q);if(!Q){return null;}var R=function(S){return B.Dom.hasClass(S,P);};return B.Dom.getAncestorBy(Q,R);},getAncestorByTagName:function(Q,P){Q=B.Dom.get(Q);if(!Q){return null;}var R=function(S){return S.tagName&&S.tagName.toUpperCase()==P.toUpperCase();};return B.Dom.getAncestorBy(Q,R);},getPreviousSiblingBy:function(P,Q){while(P){P=P.previousSibling;if(D(P,Q)){return P;}}return null;},getPreviousSibling:function(P){P=B.Dom.get(P);if(!P){return null;}return B.Dom.getPreviousSiblingBy(P);},getNextSiblingBy:function(P,Q){while(P){P=P.nextSibling;if(D(P,Q)){return P;}}return null;},getNextSibling:function(P){P=B.Dom.get(P);if(!P){return null;}return B.Dom.getNextSiblingBy(P);},getFirstChildBy:function(P,R){var Q=(D(P.firstChild,R))?P.firstChild:null;return Q||B.Dom.getNextSiblingBy(P.firstChild,R);},getFirstChild:function(P,Q){P=B.Dom.get(P);if(!P){return null;}return B.Dom.getFirstChildBy(P);},getLastChildBy:function(P,R){if(!P){return null;}var Q=(D(P.lastChild,R))?P.lastChild:null;return Q||B.Dom.getPreviousSiblingBy(P.lastChild,R);},getLastChild:function(P){P=B.Dom.get(P);return B.Dom.getLastChildBy(P);},getChildrenBy:function(Q,S){var R=B.Dom.getFirstChildBy(Q,S);var P=R?[R]:[];B.Dom.getNextSiblingBy(R,function(T){if(!S||S(T)){P[P.length]=T;}return false;});return P;},getChildren:function(P){P=B.Dom.get(P);if(!P){}return B.Dom.getChildrenBy(P);},getDocumentScrollLeft:function(P){P=P||M;return Math.max(P.documentElement.scrollLeft,P.body.scrollLeft);},getDocumentScrollTop:function(P){P=P||M;return Math.max(P.documentElement.scrollTop,P.body.scrollTop);},insertBefore:function(Q,P){Q=B.Dom.get(Q);P=B.Dom.get(P);if(!Q||!P||!P.parentNode){return null;}return P.parentNode.insertBefore(Q,P);},insertAfter:function(Q,P){Q=B.Dom.get(Q);P=B.Dom.get(P);if(!Q||!P||!P.parentNode){return null;}if(P.nextSibling){return P.parentNode.insertBefore(Q,P.nextSibling);}else{return P.parentNode.appendChild(Q);}},getClientRegion:function(){var R=B.Dom.getDocumentScrollTop(),Q=B.Dom.getDocumentScrollLeft(),S=B.Dom.getViewportWidth()+Q,P=B.Dom.getViewportHeight()+R;return new B.Region(R,S,P,Q);}};var H=function(){if(M.documentElement.getBoundingClientRect){return function(Q){var R=Q.getBoundingClientRect();var P=Q.ownerDocument;return[R.left+B.Dom.getDocumentScrollLeft(P),R.top+B.Dom.getDocumentScrollTop(P)];};}else{return function(R){var S=[R.offsetLeft,R.offsetTop];var Q=R.offsetParent;var P=(L&&B.Dom.getStyle(R,"position")=="absolute"&&R.offsetParent==R.ownerDocument.body);if(Q!=R){while(Q){S[0]+=Q.offsetLeft;S[1]+=Q.offsetTop;if(!P&&L&&B.Dom.getStyle(Q,"position")=="absolute"){P=true;}Q=Q.offsetParent;}}if(P){S[0]-=R.ownerDocument.body.offsetLeft;S[1]-=R.ownerDocument.body.offsetTop;}Q=R.parentNode;while(Q.tagName&&!E.ROOT_TAG.test(Q.tagName)){if(Q.scrollTop||Q.scrollLeft){if(!E.OP_SCROLL.test(B.Dom.getStyle(Q,"display"))){if(!C||B.Dom.getStyle(Q,"overflow")!=="visible"){S[0]-=Q.scrollLeft;S[1]-=Q.scrollTop;}}}Q=Q.parentNode;}return S;};}}();})();YAHOO.util.Region=function(C,D,A,B){this.top=C;this[1]=C;this.right=D;this.bottom=A;this.left=B;this[0]=B;};YAHOO.util.Region.prototype.contains=function(A){return(A.left>=this.left&&A.right<=this.right&&A.top>=this.top&&A.bottom<=this.bottom);};YAHOO.util.Region.prototype.getArea=function(){return((this.bottom-this.top)*(this.right-this.left));};YAHOO.util.Region.prototype.intersect=function(E){var C=Math.max(this.top,E.top);var D=Math.min(this.right,E.right);var A=Math.min(this.bottom,E.bottom);var B=Math.max(this.left,E.left);if(A>=C&&D>=B){return new YAHOO.util.Region(C,D,A,B);}else{return null;}};YAHOO.util.Region.prototype.union=function(E){var C=Math.min(this.top,E.top);var D=Math.max(this.right,E.right);var A=Math.max(this.bottom,E.bottom);var B=Math.min(this.left,E.left);return new YAHOO.util.Region(C,D,A,B);};YAHOO.util.Region.prototype.toString=function(){return("Region {"+"top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+"}");};YAHOO.util.Region.getRegion=function(D){var F=YAHOO.util.Dom.getXY(D);var C=F[1];var E=F[0]+D.offsetWidth;var A=F[1]+D.offsetHeight;var B=F[0];return new YAHOO.util.Region(C,E,A,B);};YAHOO.util.Point=function(A,B){if(YAHOO.lang.isArray(A)){B=A[1];A=A[0];}this.x=this.right=this.left=this[0]=A;this.y=this.top=this.bottom=this[1]=B;};YAHOO.util.Point.prototype=new YAHOO.util.Region();YAHOO.register("dom",YAHOO.util.Dom,{version:"2.5.2",build:"1076"});YAHOO.util.CustomEvent=function(D,B,C,A){this.type=D;this.scope=B||window;this.silent=C;this.signature=A||YAHOO.util.CustomEvent.LIST;this.subscribers=[];if(!this.silent){}var E="_YUICEOnSubscribe";if(D!==E){this.subscribeEvent=new YAHOO.util.CustomEvent(E,this,true);}this.lastError=null;};YAHOO.util.CustomEvent.LIST=0;YAHOO.util.CustomEvent.FLAT=1;YAHOO.util.CustomEvent.prototype={subscribe:function(B,C,A){if(!B){throw new Error("Invalid callback for subscriber to '"+this.type+"'");}if(this.subscribeEvent){this.subscribeEvent.fire(B,C,A);}this.subscribers.push(new YAHOO.util.Subscriber(B,C,A));},unsubscribe:function(D,F){if(!D){return this.unsubscribeAll();}var E=false;for(var B=0,A=this.subscribers.length;B<A;++B){var C=this.subscribers[B];if(C&&C.contains(D,F)){this._delete(B);E=true;}}return E;},fire:function(){this.lastError=null;var K=[],E=this.subscribers.length;if(!E&&this.silent){return true;}var I=[].slice.call(arguments,0),G=true,D,J=false;if(!this.silent){}var C=this.subscribers.slice(),A=YAHOO.util.Event.throwErrors;for(D=0;D<E;++D){var M=C[D];if(!M){J=true;}else{if(!this.silent){}var L=M.getScope(this.scope);if(this.signature==YAHOO.util.CustomEvent.FLAT){var B=null;if(I.length>0){B=I[0];}try{G=M.fn.call(L,B,M.obj);}catch(F){this.lastError=F;if(A){throw F;}}}else{try{G=M.fn.call(L,this.type,I,M.obj);}catch(H){this.lastError=H;if(A){throw H;}}}if(false===G){if(!this.silent){}break;}}}return(G!==false);},unsubscribeAll:function(){for(var A=this.subscribers.length-1;A>-1;A--){this._delete(A);}this.subscribers=[];return A;},_delete:function(A){var B=this.subscribers[A];if(B){delete B.fn;delete B.obj;}this.subscribers.splice(A,1);},toString:function(){return"CustomEvent: "+"'"+this.type+"', "+"scope: "+this.scope;}};YAHOO.util.Subscriber=function(B,C,A){this.fn=B;this.obj=YAHOO.lang.isUndefined(C)?null:C;this.override=A;};YAHOO.util.Subscriber.prototype.getScope=function(A){if(this.override){if(this.override===true){return this.obj;}else{return this.override;}}return A;};YAHOO.util.Subscriber.prototype.contains=function(A,B){if(B){return(this.fn==A&&this.obj==B);}else{return(this.fn==A);}};YAHOO.util.Subscriber.prototype.toString=function(){return"Subscriber { obj: "+this.obj+", override: "+(this.override||"no")+" }";};if(!YAHOO.util.Event){YAHOO.util.Event=function(){var H=false;var I=[];var J=[];var G=[];var E=[];var C=0;var F=[];var B=[];var A=0;var D={63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9};return{POLL_RETRYS:2000,POLL_INTERVAL:20,EL:0,TYPE:1,FN:2,WFN:3,UNLOAD_OBJ:3,ADJ_SCOPE:4,OBJ:5,OVERRIDE:6,lastError:null,isSafari:YAHOO.env.ua.webkit,webkit:YAHOO.env.ua.webkit,isIE:YAHOO.env.ua.ie,_interval:null,_dri:null,DOMReady:false,throwErrors:false,startInterval:function(){if(!this._interval){var K=this;var L=function(){K._tryPreloadAttach();};this._interval=setInterval(L,this.POLL_INTERVAL);}},onAvailable:function(P,M,Q,O,N){var K=(YAHOO.lang.isString(P))?[P]:P;for(var L=0;L<K.length;L=L+1){F.push({id:K[L],fn:M,obj:Q,override:O,checkReady:N});}C=this.POLL_RETRYS;this.startInterval();},onContentReady:function(M,K,N,L){this.onAvailable(M,K,N,L,true);},onDOMReady:function(K,M,L){if(this.DOMReady){setTimeout(function(){var N=window;if(L){if(L===true){N=M;}else{N=L;}}K.call(N,"DOMReady",[],M);},0);}else{this.DOMReadyEvent.subscribe(K,M,L);}},addListener:function(M,K,V,Q,L){if(!V||!V.call){return false;}if(this._isValidCollection(M)){var W=true;for(var R=0,T=M.length;R<T;++R){W=this.on(M[R],K,V,Q,L)&&W;}return W;}else{if(YAHOO.lang.isString(M)){var P=this.getEl(M);if(P){M=P;}else{this.onAvailable(M,function(){YAHOO.util.Event.on(M,K,V,Q,L);});return true;}}}if(!M){return false;}if("unload"==K&&Q!==this){J[J.length]=[M,K,V,Q,L];return true;}var Y=M;if(L){if(L===true){Y=Q;}else{Y=L;}}var N=function(Z){return V.call(Y,YAHOO.util.Event.getEvent(Z,M),Q);};var X=[M,K,V,N,Y,Q,L];var S=I.length;I[S]=X;if(this.useLegacyEvent(M,K)){var O=this.getLegacyIndex(M,K);if(O==-1||M!=G[O][0]){O=G.length;B[M.id+K]=O;G[O]=[M,K,M["on"+K]];E[O]=[];M["on"+K]=function(Z){YAHOO.util.Event.fireLegacyEvent(YAHOO.util.Event.getEvent(Z),O);};}E[O].push(X);}else{try{this._simpleAdd(M,K,N,false);}catch(U){this.lastError=U;this.removeListener(M,K,V);return false;}}return true;},fireLegacyEvent:function(O,M){var Q=true,K,S,R,T,P;S=E[M].slice();for(var L=0,N=S.length;L<N;++L){R=S[L];if(R&&R[this.WFN]){T=R[this.ADJ_SCOPE];P=R[this.WFN].call(T,O);Q=(Q&&P);}}K=G[M];if(K&&K[2]){K[2](O);}return Q;},getLegacyIndex:function(L,M){var K=this.generateId(L)+M;if(typeof B[K]=="undefined"){return -1;}else{return B[K];}},useLegacyEvent:function(L,M){if(this.webkit&&("click"==M||"dblclick"==M)){var K=parseInt(this.webkit,10);if(!isNaN(K)&&K<418){return true;}}return false;},removeListener:function(L,K,T){var O,R,V;if(typeof L=="string"){L=this.getEl(L);}else{if(this._isValidCollection(L)){var U=true;for(O=L.length-1;O>-1;O--){U=(this.removeListener(L[O],K,T)&&U);}return U;}}if(!T||!T.call){return this.purgeElement(L,false,K);}if("unload"==K){for(O=J.length-1;O>-1;O--){V=J[O];if(V&&V[0]==L&&V[1]==K&&V[2]==T){J.splice(O,1);return true;}}return false;}var P=null;var Q=arguments[3];if("undefined"===typeof Q){Q=this._getCacheIndex(L,K,T);}if(Q>=0){P=I[Q];}if(!L||!P){return false;}if(this.useLegacyEvent(L,K)){var N=this.getLegacyIndex(L,K);var M=E[N];if(M){for(O=0,R=M.length;O<R;++O){V=M[O];if(V&&V[this.EL]==L&&V[this.TYPE]==K&&V[this.FN]==T){M.splice(O,1);break;}}}}else{try{this._simpleRemove(L,K,P[this.WFN],false);}catch(S){this.lastError=S;return false;}}delete I[Q][this.WFN];delete I[Q][this.FN];I.splice(Q,1);return true;},getTarget:function(M,L){var K=M.target||M.srcElement;return this.resolveTextNode(K);},resolveTextNode:function(L){try{if(L&&3==L.nodeType){return L.parentNode;}}catch(K){}return L;},getPageX:function(L){var K=L.pageX;if(!K&&0!==K){K=L.clientX||0;if(this.isIE){K+=this._getScrollLeft();}}return K;},getPageY:function(K){var L=K.pageY;if(!L&&0!==L){L=K.clientY||0;if(this.isIE){L+=this._getScrollTop();}}return L;
    },getXY:function(K){return[this.getPageX(K),this.getPageY(K)];},getRelatedTarget:function(L){var K=L.relatedTarget;if(!K){if(L.type=="mouseout"){K=L.toElement;}else{if(L.type=="mouseover"){K=L.fromElement;}}}return this.resolveTextNode(K);},getTime:function(M){if(!M.time){var L=new Date().getTime();try{M.time=L;}catch(K){this.lastError=K;return L;}}return M.time;},stopEvent:function(K){this.stopPropagation(K);this.preventDefault(K);},stopPropagation:function(K){if(K.stopPropagation){K.stopPropagation();}else{K.cancelBubble=true;}},preventDefault:function(K){if(K.preventDefault){K.preventDefault();}else{K.returnValue=false;}},getEvent:function(M,K){var L=M||window.event;if(!L){var N=this.getEvent.caller;while(N){L=N.arguments[0];if(L&&Event==L.constructor){break;}N=N.caller;}}return L;},getCharCode:function(L){var K=L.keyCode||L.charCode||0;if(YAHOO.env.ua.webkit&&(K in D)){K=D[K];}return K;},_getCacheIndex:function(O,P,N){for(var M=0,L=I.length;M<L;M=M+1){var K=I[M];if(K&&K[this.FN]==N&&K[this.EL]==O&&K[this.TYPE]==P){return M;}}return -1;},generateId:function(K){var L=K.id;if(!L){L="yuievtautoid-"+A;++A;K.id=L;}return L;},_isValidCollection:function(L){try{return(L&&typeof L!=="string"&&L.length&&!L.tagName&&!L.alert&&typeof L[0]!=="undefined");}catch(K){return false;}},elCache:{},getEl:function(K){return(typeof K==="string")?document.getElementById(K):K;},clearCache:function(){},DOMReadyEvent:new YAHOO.util.CustomEvent("DOMReady",this),_load:function(L){if(!H){H=true;var K=YAHOO.util.Event;K._ready();K._tryPreloadAttach();}},_ready:function(L){var K=YAHOO.util.Event;if(!K.DOMReady){K.DOMReady=true;K.DOMReadyEvent.fire();K._simpleRemove(document,"DOMContentLoaded",K._ready);}},_tryPreloadAttach:function(){if(F.length===0){C=0;clearInterval(this._interval);this._interval=null;return ;}if(this.locked){return ;}if(this.isIE){if(!this.DOMReady){this.startInterval();return ;}}this.locked=true;var Q=!H;if(!Q){Q=(C>0&&F.length>0);}var P=[];var R=function(T,U){var S=T;if(U.override){if(U.override===true){S=U.obj;}else{S=U.override;}}U.fn.call(S,U.obj);};var L,K,O,N,M=[];for(L=0,K=F.length;L<K;L=L+1){O=F[L];if(O){N=this.getEl(O.id);if(N){if(O.checkReady){if(H||N.nextSibling||!Q){M.push(O);F[L]=null;}}else{R(N,O);F[L]=null;}}else{P.push(O);}}}for(L=0,K=M.length;L<K;L=L+1){O=M[L];R(this.getEl(O.id),O);}C--;if(Q){for(L=F.length-1;L>-1;L--){O=F[L];if(!O||!O.id){F.splice(L,1);}}this.startInterval();}else{clearInterval(this._interval);this._interval=null;}this.locked=false;},purgeElement:function(O,P,R){var M=(YAHOO.lang.isString(O))?this.getEl(O):O;var Q=this.getListeners(M,R),N,K;if(Q){for(N=Q.length-1;N>-1;N--){var L=Q[N];this.removeListener(M,L.type,L.fn);}}if(P&&M&&M.childNodes){for(N=0,K=M.childNodes.length;N<K;++N){this.purgeElement(M.childNodes[N],P,R);}}},getListeners:function(M,K){var P=[],L;if(!K){L=[I,J];}else{if(K==="unload"){L=[J];}else{L=[I];}}var R=(YAHOO.lang.isString(M))?this.getEl(M):M;for(var O=0;O<L.length;O=O+1){var T=L[O];if(T){for(var Q=0,S=T.length;Q<S;++Q){var N=T[Q];if(N&&N[this.EL]===R&&(!K||K===N[this.TYPE])){P.push({type:N[this.TYPE],fn:N[this.FN],obj:N[this.OBJ],adjust:N[this.OVERRIDE],scope:N[this.ADJ_SCOPE],index:Q});}}}}return(P.length)?P:null;},_unload:function(Q){var K=YAHOO.util.Event,N,M,L,P,O,R=J.slice();for(N=0,P=J.length;N<P;++N){L=R[N];if(L){var S=window;if(L[K.ADJ_SCOPE]){if(L[K.ADJ_SCOPE]===true){S=L[K.UNLOAD_OBJ];}else{S=L[K.ADJ_SCOPE];}}L[K.FN].call(S,K.getEvent(Q,L[K.EL]),L[K.UNLOAD_OBJ]);R[N]=null;L=null;S=null;}}J=null;if(I){for(M=I.length-1;M>-1;M--){L=I[M];if(L){K.removeListener(L[K.EL],L[K.TYPE],L[K.FN],M);}}L=null;}G=null;K._simpleRemove(window,"unload",K._unload);},_getScrollLeft:function(){return this._getScroll()[1];},_getScrollTop:function(){return this._getScroll()[0];},_getScroll:function(){var K=document.documentElement,L=document.body;if(K&&(K.scrollTop||K.scrollLeft)){return[K.scrollTop,K.scrollLeft];}else{if(L){return[L.scrollTop,L.scrollLeft];}else{return[0,0];}}},regCE:function(){},_simpleAdd:function(){if(window.addEventListener){return function(M,N,L,K){M.addEventListener(N,L,(K));};}else{if(window.attachEvent){return function(M,N,L,K){M.attachEvent("on"+N,L);};}else{return function(){};}}}(),_simpleRemove:function(){if(window.removeEventListener){return function(M,N,L,K){M.removeEventListener(N,L,(K));};}else{if(window.detachEvent){return function(L,M,K){L.detachEvent("on"+M,K);};}else{return function(){};}}}()};}();(function(){var EU=YAHOO.util.Event;EU.on=EU.addListener;
    /* DOMReady: based on work by: Dean Edwards/John Resig/Matthias Miller */
    if(EU.isIE){YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach,YAHOO.util.Event,true);var n=document.createElement("p");EU._dri=setInterval(function(){try{n.doScroll("left");clearInterval(EU._dri);EU._dri=null;EU._ready();n=null;}catch(ex){}},EU.POLL_INTERVAL);}else{if(EU.webkit&&EU.webkit<525){EU._dri=setInterval(function(){var rs=document.readyState;if("loaded"==rs||"complete"==rs){clearInterval(EU._dri);EU._dri=null;EU._ready();}},EU.POLL_INTERVAL);}else{EU._simpleAdd(document,"DOMContentLoaded",EU._ready);}}EU._simpleAdd(window,"load",EU._load);EU._simpleAdd(window,"unload",EU._unload);EU._tryPreloadAttach();})();}YAHOO.util.EventProvider=function(){};YAHOO.util.EventProvider.prototype={__yui_events:null,__yui_subscribers:null,subscribe:function(A,C,F,E){this.__yui_events=this.__yui_events||{};var D=this.__yui_events[A];if(D){D.subscribe(C,F,E);}else{this.__yui_subscribers=this.__yui_subscribers||{};var B=this.__yui_subscribers;if(!B[A]){B[A]=[];}B[A].push({fn:C,obj:F,override:E});}},unsubscribe:function(C,E,G){this.__yui_events=this.__yui_events||{};var A=this.__yui_events;if(C){var F=A[C];if(F){return F.unsubscribe(E,G);}}else{var B=true;for(var D in A){if(YAHOO.lang.hasOwnProperty(A,D)){B=B&&A[D].unsubscribe(E,G);}}return B;}return false;},unsubscribeAll:function(A){return this.unsubscribe(A);},createEvent:function(G,D){this.__yui_events=this.__yui_events||{};var A=D||{};var I=this.__yui_events;
    if(I[G]){}else{var H=A.scope||this;var E=(A.silent);var B=new YAHOO.util.CustomEvent(G,H,E,YAHOO.util.CustomEvent.FLAT);I[G]=B;if(A.onSubscribeCallback){B.subscribeEvent.subscribe(A.onSubscribeCallback);}this.__yui_subscribers=this.__yui_subscribers||{};var F=this.__yui_subscribers[G];if(F){for(var C=0;C<F.length;++C){B.subscribe(F[C].fn,F[C].obj,F[C].override);}}}return I[G];},fireEvent:function(E,D,A,C){this.__yui_events=this.__yui_events||{};var G=this.__yui_events[E];if(!G){return null;}var B=[];for(var F=1;F<arguments.length;++F){B.push(arguments[F]);}return G.fire.apply(G,B);},hasEvent:function(A){if(this.__yui_events){if(this.__yui_events[A]){return true;}}return false;}};YAHOO.util.KeyListener=function(A,F,B,C){if(!A){}else{if(!F){}else{if(!B){}}}if(!C){C=YAHOO.util.KeyListener.KEYDOWN;}var D=new YAHOO.util.CustomEvent("keyPressed");this.enabledEvent=new YAHOO.util.CustomEvent("enabled");this.disabledEvent=new YAHOO.util.CustomEvent("disabled");if(typeof A=="string"){A=document.getElementById(A);}if(typeof B=="function"){D.subscribe(B);}else{D.subscribe(B.fn,B.scope,B.correctScope);}function E(J,I){if(!F.shift){F.shift=false;}if(!F.alt){F.alt=false;}if(!F.ctrl){F.ctrl=false;}if(J.shiftKey==F.shift&&J.altKey==F.alt&&J.ctrlKey==F.ctrl){var G;if(F.keys instanceof Array){for(var H=0;H<F.keys.length;H++){G=F.keys[H];if(G==J.charCode){D.fire(J.charCode,J);break;}else{if(G==J.keyCode){D.fire(J.keyCode,J);break;}}}}else{G=F.keys;if(G==J.charCode){D.fire(J.charCode,J);}else{if(G==J.keyCode){D.fire(J.keyCode,J);}}}}}this.enable=function(){if(!this.enabled){YAHOO.util.Event.addListener(A,C,E);this.enabledEvent.fire(F);}this.enabled=true;};this.disable=function(){if(this.enabled){YAHOO.util.Event.removeListener(A,C,E);this.disabledEvent.fire(F);}this.enabled=false;};this.toString=function(){return"KeyListener ["+F.keys+"] "+A.tagName+(A.id?"["+A.id+"]":"");};};YAHOO.util.KeyListener.KEYDOWN="keydown";YAHOO.util.KeyListener.KEYUP="keyup";YAHOO.util.KeyListener.KEY={ALT:18,BACK_SPACE:8,CAPS_LOCK:20,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,META:224,NUM_LOCK:144,PAGE_DOWN:34,PAGE_UP:33,PAUSE:19,PRINTSCREEN:44,RIGHT:39,SCROLL_LOCK:145,SHIFT:16,SPACE:32,TAB:9,UP:38};YAHOO.register("event",YAHOO.util.Event,{version:"2.5.2",build:"1076"});YAHOO.register("yahoo-dom-event", YAHOO, {version: "2.5.2", build: "1076"});

    // container_core-min.js
    (function(){YAHOO.util.Config=function(D){if(D){this.init(D);}};var B=YAHOO.lang,C=YAHOO.util.CustomEvent,A=YAHOO.util.Config;A.CONFIG_CHANGED_EVENT="configChanged";A.BOOLEAN_TYPE="boolean";A.prototype={owner:null,queueInProgress:false,config:null,initialConfig:null,eventQueue:null,configChangedEvent:null,init:function(D){this.owner=D;this.configChangedEvent=this.createEvent(A.CONFIG_CHANGED_EVENT);this.configChangedEvent.signature=C.LIST;this.queueInProgress=false;this.config={};this.initialConfig={};this.eventQueue=[];},checkBoolean:function(D){return(typeof D==A.BOOLEAN_TYPE);},checkNumber:function(D){return(!isNaN(D));},fireEvent:function(D,F){var E=this.config[D];if(E&&E.event){E.event.fire(F);}},addProperty:function(E,D){E=E.toLowerCase();this.config[E]=D;D.event=this.createEvent(E,{scope:this.owner});D.event.signature=C.LIST;D.key=E;if(D.handler){D.event.subscribe(D.handler,this.owner);}this.setProperty(E,D.value,true);if(!D.suppressEvent){this.queueProperty(E,D.value);}},getConfig:function(){var D={},F,E;for(F in this.config){E=this.config[F];if(E&&E.event){D[F]=E.value;}}return D;},getProperty:function(D){var E=this.config[D.toLowerCase()];if(E&&E.event){return E.value;}else{return undefined;}},resetProperty:function(D){D=D.toLowerCase();var E=this.config[D];if(E&&E.event){if(this.initialConfig[D]&&!B.isUndefined(this.initialConfig[D])){this.setProperty(D,this.initialConfig[D]);return true;}}else{return false;}},setProperty:function(E,G,D){var F;E=E.toLowerCase();if(this.queueInProgress&&!D){this.queueProperty(E,G);return true;}else{F=this.config[E];if(F&&F.event){if(F.validator&&!F.validator(G)){return false;}else{F.value=G;if(!D){this.fireEvent(E,G);this.configChangedEvent.fire([E,G]);}return true;}}else{return false;}}},queueProperty:function(S,P){S=S.toLowerCase();var R=this.config[S],K=false,J,G,H,I,O,Q,F,M,N,D,L,T,E;if(R&&R.event){if(!B.isUndefined(P)&&R.validator&&!R.validator(P)){return false;}else{if(!B.isUndefined(P)){R.value=P;}else{P=R.value;}K=false;J=this.eventQueue.length;for(L=0;L<J;L++){G=this.eventQueue[L];if(G){H=G[0];I=G[1];if(H==S){this.eventQueue[L]=null;this.eventQueue.push([S,(!B.isUndefined(P)?P:I)]);K=true;break;}}}if(!K&&!B.isUndefined(P)){this.eventQueue.push([S,P]);}}if(R.supercedes){O=R.supercedes.length;for(T=0;T<O;T++){Q=R.supercedes[T];F=this.eventQueue.length;for(E=0;E<F;E++){M=this.eventQueue[E];if(M){N=M[0];D=M[1];if(N==Q.toLowerCase()){this.eventQueue.push([N,D]);this.eventQueue[E]=null;break;}}}}}return true;}else{return false;}},refireEvent:function(D){D=D.toLowerCase();var E=this.config[D];if(E&&E.event&&!B.isUndefined(E.value)){if(this.queueInProgress){this.queueProperty(D);}else{this.fireEvent(D,E.value);}}},applyConfig:function(D,G){var F,E;if(G){E={};for(F in D){if(B.hasOwnProperty(D,F)){E[F.toLowerCase()]=D[F];}}this.initialConfig=E;}for(F in D){if(B.hasOwnProperty(D,F)){this.queueProperty(F,D[F]);}}},refresh:function(){var D;for(D in this.config){this.refireEvent(D);}},fireQueue:function(){var E,H,D,G,F;this.queueInProgress=true;for(E=0;E<this.eventQueue.length;E++){H=this.eventQueue[E];if(H){D=H[0];G=H[1];F=this.config[D];F.value=G;this.fireEvent(D,G);}}this.queueInProgress=false;this.eventQueue=[];},subscribeToConfigEvent:function(E,F,H,D){var G=this.config[E.toLowerCase()];if(G&&G.event){if(!A.alreadySubscribed(G.event,F,H)){G.event.subscribe(F,H,D);}return true;}else{return false;}},unsubscribeFromConfigEvent:function(D,E,G){var F=this.config[D.toLowerCase()];if(F&&F.event){return F.event.unsubscribe(E,G);}else{return false;}},toString:function(){var D="Config";if(this.owner){D+=" ["+this.owner.toString()+"]";}return D;},outputEventQueue:function(){var D="",G,E,F=this.eventQueue.length;for(E=0;E<F;E++){G=this.eventQueue[E];if(G){D+=G[0]+"="+G[1]+", ";}}return D;},destroy:function(){var E=this.config,D,F;for(D in E){if(B.hasOwnProperty(E,D)){F=E[D];F.event.unsubscribeAll();F.event=null;}}this.configChangedEvent.unsubscribeAll();this.configChangedEvent=null;this.owner=null;this.config=null;this.initialConfig=null;this.eventQueue=null;}};A.alreadySubscribed=function(E,H,I){var F=E.subscribers.length,D,G;if(F>0){G=F-1;do{D=E.subscribers[G];if(D&&D.obj==I&&D.fn==H){return true;}}while(G--);}return false;};YAHOO.lang.augmentProto(A,YAHOO.util.EventProvider);}());(function(){YAHOO.widget.Module=function(Q,P){if(Q){this.init(Q,P);}else{}};var F=YAHOO.util.Dom,D=YAHOO.util.Config,M=YAHOO.util.Event,L=YAHOO.util.CustomEvent,G=YAHOO.widget.Module,H,O,N,E,A={"BEFORE_INIT":"beforeInit","INIT":"init","APPEND":"append","BEFORE_RENDER":"beforeRender","RENDER":"render","CHANGE_HEADER":"changeHeader","CHANGE_BODY":"changeBody","CHANGE_FOOTER":"changeFooter","CHANGE_CONTENT":"changeContent","DESTORY":"destroy","BEFORE_SHOW":"beforeShow","SHOW":"show","BEFORE_HIDE":"beforeHide","HIDE":"hide"},I={"VISIBLE":{key:"visible",value:true,validator:YAHOO.lang.isBoolean},"EFFECT":{key:"effect",suppressEvent:true,supercedes:["visible"]},"MONITOR_RESIZE":{key:"monitorresize",value:true},"APPEND_TO_DOCUMENT_BODY":{key:"appendtodocumentbody",value:false}};G.IMG_ROOT=null;G.IMG_ROOT_SSL=null;G.CSS_MODULE="yui-module";G.CSS_HEADER="hd";G.CSS_BODY="bd";G.CSS_FOOTER="ft";G.RESIZE_MONITOR_SECURE_URL="javascript:false;";G.textResizeEvent=new L("textResize");function K(){if(!H){H=document.createElement("div");H.innerHTML=('<div class="'+G.CSS_HEADER+'"></div>'+'<div class="'+G.CSS_BODY+'"></div><div class="'+G.CSS_FOOTER+'"></div>');O=H.firstChild;N=O.nextSibling;E=N.nextSibling;}return H;}function J(){if(!O){K();}return(O.cloneNode(false));}function B(){if(!N){K();}return(N.cloneNode(false));}function C(){if(!E){K();}return(E.cloneNode(false));}G.prototype={constructor:G,element:null,header:null,body:null,footer:null,id:null,imageRoot:G.IMG_ROOT,initEvents:function(){var P=L.LIST;this.beforeInitEvent=this.createEvent(A.BEFORE_INIT);this.beforeInitEvent.signature=P;this.initEvent=this.createEvent(A.INIT);this.initEvent.signature=P;this.appendEvent=this.createEvent(A.APPEND);
    this.appendEvent.signature=P;this.beforeRenderEvent=this.createEvent(A.BEFORE_RENDER);this.beforeRenderEvent.signature=P;this.renderEvent=this.createEvent(A.RENDER);this.renderEvent.signature=P;this.changeHeaderEvent=this.createEvent(A.CHANGE_HEADER);this.changeHeaderEvent.signature=P;this.changeBodyEvent=this.createEvent(A.CHANGE_BODY);this.changeBodyEvent.signature=P;this.changeFooterEvent=this.createEvent(A.CHANGE_FOOTER);this.changeFooterEvent.signature=P;this.changeContentEvent=this.createEvent(A.CHANGE_CONTENT);this.changeContentEvent.signature=P;this.destroyEvent=this.createEvent(A.DESTORY);this.destroyEvent.signature=P;this.beforeShowEvent=this.createEvent(A.BEFORE_SHOW);this.beforeShowEvent.signature=P;this.showEvent=this.createEvent(A.SHOW);this.showEvent.signature=P;this.beforeHideEvent=this.createEvent(A.BEFORE_HIDE);this.beforeHideEvent.signature=P;this.hideEvent=this.createEvent(A.HIDE);this.hideEvent.signature=P;},platform:function(){var P=navigator.userAgent.toLowerCase();if(P.indexOf("windows")!=-1||P.indexOf("win32")!=-1){return"windows";}else{if(P.indexOf("macintosh")!=-1){return"mac";}else{return false;}}}(),browser:function(){var P=navigator.userAgent.toLowerCase();if(P.indexOf("opera")!=-1){return"opera";}else{if(P.indexOf("msie 7")!=-1){return"ie7";}else{if(P.indexOf("msie")!=-1){return"ie";}else{if(P.indexOf("safari")!=-1){return"safari";}else{if(P.indexOf("gecko")!=-1){return"gecko";}else{return false;}}}}}}(),isSecure:function(){if(window.location.href.toLowerCase().indexOf("https")===0){return true;}else{return false;}}(),initDefaultConfig:function(){this.cfg.addProperty(I.VISIBLE.key,{handler:this.configVisible,value:I.VISIBLE.value,validator:I.VISIBLE.validator});this.cfg.addProperty(I.EFFECT.key,{suppressEvent:I.EFFECT.suppressEvent,supercedes:I.EFFECT.supercedes});this.cfg.addProperty(I.MONITOR_RESIZE.key,{handler:this.configMonitorResize,value:I.MONITOR_RESIZE.value});this.cfg.addProperty(I.APPEND_TO_DOCUMENT_BODY.key,{value:I.APPEND_TO_DOCUMENT_BODY.value});},init:function(U,T){var R,V;this.initEvents();this.beforeInitEvent.fire(G);this.cfg=new D(this);if(this.isSecure){this.imageRoot=G.IMG_ROOT_SSL;}if(typeof U=="string"){R=U;U=document.getElementById(U);if(!U){U=(K()).cloneNode(false);U.id=R;}}this.element=U;if(U.id){this.id=U.id;}V=this.element.firstChild;if(V){var Q=false,P=false,S=false;do{if(1==V.nodeType){if(!Q&&F.hasClass(V,G.CSS_HEADER)){this.header=V;Q=true;}else{if(!P&&F.hasClass(V,G.CSS_BODY)){this.body=V;P=true;}else{if(!S&&F.hasClass(V,G.CSS_FOOTER)){this.footer=V;S=true;}}}}}while((V=V.nextSibling));}this.initDefaultConfig();F.addClass(this.element,G.CSS_MODULE);if(T){this.cfg.applyConfig(T,true);}if(!D.alreadySubscribed(this.renderEvent,this.cfg.fireQueue,this.cfg)){this.renderEvent.subscribe(this.cfg.fireQueue,this.cfg,true);}this.initEvent.fire(G);},initResizeMonitor:function(){var Q=(YAHOO.env.ua.gecko&&this.platform=="windows");if(Q){var P=this;setTimeout(function(){P._initResizeMonitor();},0);}else{this._initResizeMonitor();}},_initResizeMonitor:function(){var P,R,T;function V(){G.textResizeEvent.fire();}if(!YAHOO.env.ua.opera){R=F.get("_yuiResizeMonitor");var U=this._supportsCWResize();if(!R){R=document.createElement("iframe");if(this.isSecure&&G.RESIZE_MONITOR_SECURE_URL&&YAHOO.env.ua.ie){R.src=G.RESIZE_MONITOR_SECURE_URL;}if(!U){T=["<html><head><script ",'type="text/javascript">',"window.onresize=function(){window.parent.","YAHOO.widget.Module.textResizeEvent.","fire();};<","/script></head>","<body></body></html>"].join("");R.src="data:text/html;charset=utf-8,"+encodeURIComponent(T);}R.id="_yuiResizeMonitor";R.style.position="absolute";R.style.visibility="hidden";var Q=document.body,S=Q.firstChild;if(S){Q.insertBefore(R,S);}else{Q.appendChild(R);}R.style.width="10em";R.style.height="10em";R.style.top=(-1*R.offsetHeight)+"px";R.style.left=(-1*R.offsetWidth)+"px";R.style.borderWidth="0";R.style.visibility="visible";if(YAHOO.env.ua.webkit){P=R.contentWindow.document;P.open();P.close();}}if(R&&R.contentWindow){G.textResizeEvent.subscribe(this.onDomResize,this,true);if(!G.textResizeInitialized){if(U){if(!M.on(R.contentWindow,"resize",V)){M.on(R,"resize",V);}}G.textResizeInitialized=true;}this.resizeMonitor=R;}}},_supportsCWResize:function(){var P=true;if(YAHOO.env.ua.gecko&&YAHOO.env.ua.gecko<=1.8){P=false;}return P;},onDomResize:function(S,R){var Q=-1*this.resizeMonitor.offsetWidth,P=-1*this.resizeMonitor.offsetHeight;this.resizeMonitor.style.top=P+"px";this.resizeMonitor.style.left=Q+"px";},setHeader:function(Q){var P=this.header||(this.header=J());if(Q.nodeName){P.innerHTML="";P.appendChild(Q);}else{P.innerHTML=Q;}this.changeHeaderEvent.fire(Q);this.changeContentEvent.fire();},appendToHeader:function(Q){var P=this.header||(this.header=J());P.appendChild(Q);this.changeHeaderEvent.fire(Q);this.changeContentEvent.fire();},setBody:function(Q){var P=this.body||(this.body=B());if(Q.nodeName){P.innerHTML="";P.appendChild(Q);}else{P.innerHTML=Q;}this.changeBodyEvent.fire(Q);this.changeContentEvent.fire();},appendToBody:function(Q){var P=this.body||(this.body=B());P.appendChild(Q);this.changeBodyEvent.fire(Q);this.changeContentEvent.fire();},setFooter:function(Q){var P=this.footer||(this.footer=C());if(Q.nodeName){P.innerHTML="";P.appendChild(Q);}else{P.innerHTML=Q;}this.changeFooterEvent.fire(Q);this.changeContentEvent.fire();},appendToFooter:function(Q){var P=this.footer||(this.footer=C());P.appendChild(Q);this.changeFooterEvent.fire(Q);this.changeContentEvent.fire();},render:function(R,P){var S=this,T;function Q(U){if(typeof U=="string"){U=document.getElementById(U);}if(U){S._addToParent(U,S.element);S.appendEvent.fire();}}this.beforeRenderEvent.fire();if(!P){P=this.element;}if(R){Q(R);}else{if(!F.inDocument(this.element)){return false;}}if(this.header&&!F.inDocument(this.header)){T=P.firstChild;if(T){P.insertBefore(this.header,T);}else{P.appendChild(this.header);}}if(this.body&&!F.inDocument(this.body)){if(this.footer&&F.isAncestor(this.moduleElement,this.footer)){P.insertBefore(this.body,this.footer);
    }else{P.appendChild(this.body);}}if(this.footer&&!F.inDocument(this.footer)){P.appendChild(this.footer);}this.renderEvent.fire();return true;},destroy:function(){var P,Q;if(this.element){M.purgeElement(this.element,true);P=this.element.parentNode;}if(P){P.removeChild(this.element);}this.element=null;this.header=null;this.body=null;this.footer=null;G.textResizeEvent.unsubscribe(this.onDomResize,this);this.cfg.destroy();this.cfg=null;this.destroyEvent.fire();for(Q in this){if(Q instanceof L){Q.unsubscribeAll();}}},show:function(){this.cfg.setProperty("visible",true);},hide:function(){this.cfg.setProperty("visible",false);},configVisible:function(Q,P,R){var S=P[0];if(S){this.beforeShowEvent.fire();F.setStyle(this.element,"display","block");this.showEvent.fire();}else{this.beforeHideEvent.fire();F.setStyle(this.element,"display","none");this.hideEvent.fire();}},configMonitorResize:function(R,Q,S){var P=Q[0];if(P){this.initResizeMonitor();}else{G.textResizeEvent.unsubscribe(this.onDomResize,this,true);this.resizeMonitor=null;}},_addToParent:function(P,Q){if(!this.cfg.getProperty("appendtodocumentbody")&&P===document.body&&P.firstChild){P.insertBefore(Q,P.firstChild);}else{P.appendChild(Q);}},toString:function(){return"Module "+this.id;}};YAHOO.lang.augmentProto(G,YAHOO.util.EventProvider);}());(function(){YAHOO.widget.Overlay=function(L,K){YAHOO.widget.Overlay.superclass.constructor.call(this,L,K);};var F=YAHOO.lang,I=YAHOO.util.CustomEvent,E=YAHOO.widget.Module,J=YAHOO.util.Event,D=YAHOO.util.Dom,C=YAHOO.util.Config,B=YAHOO.widget.Overlay,G,A={"BEFORE_MOVE":"beforeMove","MOVE":"move"},H={"X":{key:"x",validator:F.isNumber,suppressEvent:true,supercedes:["iframe"]},"Y":{key:"y",validator:F.isNumber,suppressEvent:true,supercedes:["iframe"]},"XY":{key:"xy",suppressEvent:true,supercedes:["iframe"]},"CONTEXT":{key:"context",suppressEvent:true,supercedes:["iframe"]},"FIXED_CENTER":{key:"fixedcenter",value:false,validator:F.isBoolean,supercedes:["iframe","visible"]},"WIDTH":{key:"width",suppressEvent:true,supercedes:["context","fixedcenter","iframe"]},"HEIGHT":{key:"height",suppressEvent:true,supercedes:["context","fixedcenter","iframe"]},"ZINDEX":{key:"zindex",value:null},"CONSTRAIN_TO_VIEWPORT":{key:"constraintoviewport",value:false,validator:F.isBoolean,supercedes:["iframe","x","y","xy"]},"IFRAME":{key:"iframe",value:(YAHOO.env.ua.ie==6?true:false),validator:F.isBoolean,supercedes:["zindex"]}};B.IFRAME_SRC="javascript:false;";B.IFRAME_OFFSET=3;B.VIEWPORT_OFFSET=10;B.TOP_LEFT="tl";B.TOP_RIGHT="tr";B.BOTTOM_LEFT="bl";B.BOTTOM_RIGHT="br";B.CSS_OVERLAY="yui-overlay";B.windowScrollEvent=new I("windowScroll");B.windowResizeEvent=new I("windowResize");B.windowScrollHandler=function(K){if(YAHOO.env.ua.ie){if(!window.scrollEnd){window.scrollEnd=-1;}clearTimeout(window.scrollEnd);window.scrollEnd=setTimeout(function(){B.windowScrollEvent.fire();},1);}else{B.windowScrollEvent.fire();}};B.windowResizeHandler=function(K){if(YAHOO.env.ua.ie){if(!window.resizeEnd){window.resizeEnd=-1;}clearTimeout(window.resizeEnd);window.resizeEnd=setTimeout(function(){B.windowResizeEvent.fire();},100);}else{B.windowResizeEvent.fire();}};B._initialized=null;if(B._initialized===null){J.on(window,"scroll",B.windowScrollHandler);J.on(window,"resize",B.windowResizeHandler);B._initialized=true;}YAHOO.extend(B,E,{init:function(L,K){B.superclass.init.call(this,L);this.beforeInitEvent.fire(B);D.addClass(this.element,B.CSS_OVERLAY);if(K){this.cfg.applyConfig(K,true);}if(this.platform=="mac"&&YAHOO.env.ua.gecko){if(!C.alreadySubscribed(this.showEvent,this.showMacGeckoScrollbars,this)){this.showEvent.subscribe(this.showMacGeckoScrollbars,this,true);}if(!C.alreadySubscribed(this.hideEvent,this.hideMacGeckoScrollbars,this)){this.hideEvent.subscribe(this.hideMacGeckoScrollbars,this,true);}}this.initEvent.fire(B);},initEvents:function(){B.superclass.initEvents.call(this);var K=I.LIST;this.beforeMoveEvent=this.createEvent(A.BEFORE_MOVE);this.beforeMoveEvent.signature=K;this.moveEvent=this.createEvent(A.MOVE);this.moveEvent.signature=K;},initDefaultConfig:function(){B.superclass.initDefaultConfig.call(this);this.cfg.addProperty(H.X.key,{handler:this.configX,validator:H.X.validator,suppressEvent:H.X.suppressEvent,supercedes:H.X.supercedes});this.cfg.addProperty(H.Y.key,{handler:this.configY,validator:H.Y.validator,suppressEvent:H.Y.suppressEvent,supercedes:H.Y.supercedes});this.cfg.addProperty(H.XY.key,{handler:this.configXY,suppressEvent:H.XY.suppressEvent,supercedes:H.XY.supercedes});this.cfg.addProperty(H.CONTEXT.key,{handler:this.configContext,suppressEvent:H.CONTEXT.suppressEvent,supercedes:H.CONTEXT.supercedes});this.cfg.addProperty(H.FIXED_CENTER.key,{handler:this.configFixedCenter,value:H.FIXED_CENTER.value,validator:H.FIXED_CENTER.validator,supercedes:H.FIXED_CENTER.supercedes});this.cfg.addProperty(H.WIDTH.key,{handler:this.configWidth,suppressEvent:H.WIDTH.suppressEvent,supercedes:H.WIDTH.supercedes});this.cfg.addProperty(H.HEIGHT.key,{handler:this.configHeight,suppressEvent:H.HEIGHT.suppressEvent,supercedes:H.HEIGHT.supercedes});this.cfg.addProperty(H.ZINDEX.key,{handler:this.configzIndex,value:H.ZINDEX.value});this.cfg.addProperty(H.CONSTRAIN_TO_VIEWPORT.key,{handler:this.configConstrainToViewport,value:H.CONSTRAIN_TO_VIEWPORT.value,validator:H.CONSTRAIN_TO_VIEWPORT.validator,supercedes:H.CONSTRAIN_TO_VIEWPORT.supercedes});this.cfg.addProperty(H.IFRAME.key,{handler:this.configIframe,value:H.IFRAME.value,validator:H.IFRAME.validator,supercedes:H.IFRAME.supercedes});},moveTo:function(K,L){this.cfg.setProperty("xy",[K,L]);},hideMacGeckoScrollbars:function(){D.removeClass(this.element,"show-scrollbars");D.addClass(this.element,"hide-scrollbars");},showMacGeckoScrollbars:function(){D.removeClass(this.element,"hide-scrollbars");D.addClass(this.element,"show-scrollbars");},configVisible:function(N,K,T){var M=K[0],O=D.getStyle(this.element,"visibility"),U=this.cfg.getProperty("effect"),R=[],Q=(this.platform=="mac"&&YAHOO.env.ua.gecko),b=C.alreadySubscribed,S,L,a,Y,X,W,Z,V,P;
    if(O=="inherit"){a=this.element.parentNode;while(a.nodeType!=9&&a.nodeType!=11){O=D.getStyle(a,"visibility");if(O!="inherit"){break;}a=a.parentNode;}if(O=="inherit"){O="visible";}}if(U){if(U instanceof Array){V=U.length;for(Y=0;Y<V;Y++){S=U[Y];R[R.length]=S.effect(this,S.duration);}}else{R[R.length]=U.effect(this,U.duration);}}if(M){if(Q){this.showMacGeckoScrollbars();}if(U){if(M){if(O!="visible"||O===""){this.beforeShowEvent.fire();P=R.length;for(X=0;X<P;X++){L=R[X];if(X===0&&!b(L.animateInCompleteEvent,this.showEvent.fire,this.showEvent)){L.animateInCompleteEvent.subscribe(this.showEvent.fire,this.showEvent,true);}L.animateIn();}}}}else{if(O!="visible"||O===""){this.beforeShowEvent.fire();D.setStyle(this.element,"visibility","visible");this.cfg.refireEvent("iframe");this.showEvent.fire();}}}else{if(Q){this.hideMacGeckoScrollbars();}if(U){if(O=="visible"){this.beforeHideEvent.fire();P=R.length;for(W=0;W<P;W++){Z=R[W];if(W===0&&!b(Z.animateOutCompleteEvent,this.hideEvent.fire,this.hideEvent)){Z.animateOutCompleteEvent.subscribe(this.hideEvent.fire,this.hideEvent,true);}Z.animateOut();}}else{if(O===""){D.setStyle(this.element,"visibility","hidden");}}}else{if(O=="visible"||O===""){this.beforeHideEvent.fire();D.setStyle(this.element,"visibility","hidden");this.hideEvent.fire();}}}},doCenterOnDOMEvent:function(){if(this.cfg.getProperty("visible")){this.center();}},configFixedCenter:function(O,M,P){var Q=M[0],L=C.alreadySubscribed,N=B.windowResizeEvent,K=B.windowScrollEvent;if(Q){this.center();if(!L(this.beforeShowEvent,this.center,this)){this.beforeShowEvent.subscribe(this.center);}if(!L(N,this.doCenterOnDOMEvent,this)){N.subscribe(this.doCenterOnDOMEvent,this,true);}if(!L(K,this.doCenterOnDOMEvent,this)){K.subscribe(this.doCenterOnDOMEvent,this,true);}}else{this.beforeShowEvent.unsubscribe(this.center);N.unsubscribe(this.doCenterOnDOMEvent,this);K.unsubscribe(this.doCenterOnDOMEvent,this);}},configHeight:function(N,L,O){var K=L[0],M=this.element;D.setStyle(M,"height",K);this.cfg.refireEvent("iframe");},configWidth:function(N,K,O){var M=K[0],L=this.element;D.setStyle(L,"width",M);this.cfg.refireEvent("iframe");},configzIndex:function(M,K,N){var O=K[0],L=this.element;if(!O){O=D.getStyle(L,"zIndex");if(!O||isNaN(O)){O=0;}}if(this.iframe||this.cfg.getProperty("iframe")===true){if(O<=0){O=1;}}D.setStyle(L,"zIndex",O);this.cfg.setProperty("zIndex",O,true);if(this.iframe){this.stackIframe();}},configXY:function(M,L,N){var P=L[0],K=P[0],O=P[1];this.cfg.setProperty("x",K);this.cfg.setProperty("y",O);this.beforeMoveEvent.fire([K,O]);K=this.cfg.getProperty("x");O=this.cfg.getProperty("y");this.cfg.refireEvent("iframe");this.moveEvent.fire([K,O]);},configX:function(M,L,N){var K=L[0],O=this.cfg.getProperty("y");this.cfg.setProperty("x",K,true);this.cfg.setProperty("y",O,true);this.beforeMoveEvent.fire([K,O]);K=this.cfg.getProperty("x");O=this.cfg.getProperty("y");D.setX(this.element,K,true);this.cfg.setProperty("xy",[K,O],true);this.cfg.refireEvent("iframe");this.moveEvent.fire([K,O]);},configY:function(M,L,N){var K=this.cfg.getProperty("x"),O=L[0];this.cfg.setProperty("x",K,true);this.cfg.setProperty("y",O,true);this.beforeMoveEvent.fire([K,O]);K=this.cfg.getProperty("x");O=this.cfg.getProperty("y");D.setY(this.element,O,true);this.cfg.setProperty("xy",[K,O],true);this.cfg.refireEvent("iframe");this.moveEvent.fire([K,O]);},showIframe:function(){var L=this.iframe,K;if(L){K=this.element.parentNode;if(K!=L.parentNode){this._addToParent(K,L);}L.style.display="block";}},hideIframe:function(){if(this.iframe){this.iframe.style.display="none";}},syncIframe:function(){var K=this.iframe,M=this.element,O=B.IFRAME_OFFSET,L=(O*2),N;if(K){K.style.width=(M.offsetWidth+L+"px");K.style.height=(M.offsetHeight+L+"px");N=this.cfg.getProperty("xy");if(!F.isArray(N)||(isNaN(N[0])||isNaN(N[1]))){this.syncPosition();N=this.cfg.getProperty("xy");}D.setXY(K,[(N[0]-O),(N[1]-O)]);}},stackIframe:function(){if(this.iframe){var K=D.getStyle(this.element,"zIndex");if(!YAHOO.lang.isUndefined(K)&&!isNaN(K)){D.setStyle(this.iframe,"zIndex",(K-1));}}},configIframe:function(N,M,O){var K=M[0];function P(){var R=this.iframe,S=this.element,T;if(!R){if(!G){G=document.createElement("iframe");if(this.isSecure){G.src=B.IFRAME_SRC;}if(YAHOO.env.ua.ie){G.style.filter="alpha(opacity=0)";G.frameBorder=0;}else{G.style.opacity="0";}G.style.position="absolute";G.style.border="none";G.style.margin="0";G.style.padding="0";G.style.display="none";}R=G.cloneNode(false);T=S.parentNode;var Q=T||document.body;this._addToParent(Q,R);this.iframe=R;}this.showIframe();this.syncIframe();this.stackIframe();if(!this._hasIframeEventListeners){this.showEvent.subscribe(this.showIframe);this.hideEvent.subscribe(this.hideIframe);this.changeContentEvent.subscribe(this.syncIframe);this._hasIframeEventListeners=true;}}function L(){P.call(this);this.beforeShowEvent.unsubscribe(L);this._iframeDeferred=false;}if(K){if(this.cfg.getProperty("visible")){P.call(this);}else{if(!this._iframeDeferred){this.beforeShowEvent.subscribe(L);this._iframeDeferred=true;}}}else{this.hideIframe();if(this._hasIframeEventListeners){this.showEvent.unsubscribe(this.showIframe);this.hideEvent.unsubscribe(this.hideIframe);this.changeContentEvent.unsubscribe(this.syncIframe);this._hasIframeEventListeners=false;}}},_primeXYFromDOM:function(){if(YAHOO.lang.isUndefined(this.cfg.getProperty("xy"))){this.syncPosition();this.cfg.refireEvent("xy");this.beforeShowEvent.unsubscribe(this._primeXYFromDOM);}},configConstrainToViewport:function(L,K,M){var N=K[0];if(N){if(!C.alreadySubscribed(this.beforeMoveEvent,this.enforceConstraints,this)){this.beforeMoveEvent.subscribe(this.enforceConstraints,this,true);}if(!C.alreadySubscribed(this.beforeShowEvent,this._primeXYFromDOM)){this.beforeShowEvent.subscribe(this._primeXYFromDOM);}}else{this.beforeShowEvent.unsubscribe(this._primeXYFromDOM);this.beforeMoveEvent.unsubscribe(this.enforceConstraints,this);}},configContext:function(M,L,O){var Q=L[0],N,P,K;if(Q){N=Q[0];P=Q[1];
    K=Q[2];if(N){if(typeof N=="string"){this.cfg.setProperty("context",[document.getElementById(N),P,K],true);}if(P&&K){this.align(P,K);}}}},align:function(L,K){var Q=this.cfg.getProperty("context"),P=this,O,N,R;function M(S,T){switch(L){case B.TOP_LEFT:P.moveTo(T,S);break;case B.TOP_RIGHT:P.moveTo((T-N.offsetWidth),S);break;case B.BOTTOM_LEFT:P.moveTo(T,(S-N.offsetHeight));break;case B.BOTTOM_RIGHT:P.moveTo((T-N.offsetWidth),(S-N.offsetHeight));break;}}if(Q){O=Q[0];N=this.element;P=this;if(!L){L=Q[1];}if(!K){K=Q[2];}if(N&&O){R=D.getRegion(O);switch(K){case B.TOP_LEFT:M(R.top,R.left);break;case B.TOP_RIGHT:M(R.top,R.right);break;case B.BOTTOM_LEFT:M(R.bottom,R.left);break;case B.BOTTOM_RIGHT:M(R.bottom,R.right);break;}}}},enforceConstraints:function(L,K,M){var O=K[0];var N=this.getConstrainedXY(O[0],O[1]);this.cfg.setProperty("x",N[0],true);this.cfg.setProperty("y",N[1],true);this.cfg.setProperty("xy",N,true);},getConstrainedXY:function(V,T){var N=B.VIEWPORT_OFFSET,U=D.getViewportWidth(),Q=D.getViewportHeight(),M=this.element.offsetHeight,S=this.element.offsetWidth,Y=D.getDocumentScrollLeft(),W=D.getDocumentScrollTop();var P=V;var L=T;if(S+N<U){var R=Y+N;var X=Y+U-S-N;if(V<R){P=R;}else{if(V>X){P=X;}}}else{P=N+Y;}if(M+N<Q){var O=W+N;var K=W+Q-M-N;if(T<O){L=O;}else{if(T>K){L=K;}}}else{L=N+W;}return[P,L];},center:function(){var N=B.VIEWPORT_OFFSET,O=this.element.offsetWidth,M=this.element.offsetHeight,L=D.getViewportWidth(),P=D.getViewportHeight(),K,Q;if(O<L){K=(L/2)-(O/2)+D.getDocumentScrollLeft();}else{K=N+D.getDocumentScrollLeft();}if(M<P){Q=(P/2)-(M/2)+D.getDocumentScrollTop();}else{Q=N+D.getDocumentScrollTop();}this.cfg.setProperty("xy",[parseInt(K,10),parseInt(Q,10)]);this.cfg.refireEvent("iframe");},syncPosition:function(){var K=D.getXY(this.element);this.cfg.setProperty("x",K[0],true);this.cfg.setProperty("y",K[1],true);this.cfg.setProperty("xy",K,true);},onDomResize:function(M,L){var K=this;B.superclass.onDomResize.call(this,M,L);setTimeout(function(){K.syncPosition();K.cfg.refireEvent("iframe");K.cfg.refireEvent("context");},0);},bringToTop:function(){var O=[],N=this.element;function R(V,U){var X=D.getStyle(V,"zIndex"),W=D.getStyle(U,"zIndex"),T=(!X||isNaN(X))?0:parseInt(X,10),S=(!W||isNaN(W))?0:parseInt(W,10);if(T>S){return -1;}else{if(T<S){return 1;}else{return 0;}}}function M(U){var S=D.hasClass(U,B.CSS_OVERLAY),T=YAHOO.widget.Panel;if(S&&!D.isAncestor(N,S)){if(T&&D.hasClass(U,T.CSS_PANEL)){O[O.length]=U.parentNode;}else{O[O.length]=U;}}}D.getElementsBy(M,"DIV",document.body);O.sort(R);var K=O[0],Q;if(K){Q=D.getStyle(K,"zIndex");if(!isNaN(Q)){var P=false;if(K!=N){P=true;}else{if(O.length>1){var L=D.getStyle(O[1],"zIndex");if(!isNaN(L)&&(Q==L)){P=true;}}}if(P){this.cfg.setProperty("zindex",(parseInt(Q,10)+2));}}}},destroy:function(){if(this.iframe){this.iframe.parentNode.removeChild(this.iframe);}this.iframe=null;B.windowResizeEvent.unsubscribe(this.doCenterOnDOMEvent,this);B.windowScrollEvent.unsubscribe(this.doCenterOnDOMEvent,this);B.superclass.destroy.call(this);},toString:function(){return"Overlay "+this.id;}});}());(function(){YAHOO.widget.OverlayManager=function(G){this.init(G);};var D=YAHOO.widget.Overlay,C=YAHOO.util.Event,E=YAHOO.util.Dom,B=YAHOO.util.Config,F=YAHOO.util.CustomEvent,A=YAHOO.widget.OverlayManager;A.CSS_FOCUSED="focused";A.prototype={constructor:A,overlays:null,initDefaultConfig:function(){this.cfg.addProperty("overlays",{suppressEvent:true});this.cfg.addProperty("focusevent",{value:"mousedown"});},init:function(I){this.cfg=new B(this);this.initDefaultConfig();if(I){this.cfg.applyConfig(I,true);}this.cfg.fireQueue();var H=null;this.getActive=function(){return H;};this.focus=function(J){var K=this.find(J);if(K){if(H!=K){if(H){H.blur();}this.bringToTop(K);H=K;E.addClass(H.element,A.CSS_FOCUSED);K.focusEvent.fire();}}};this.remove=function(K){var M=this.find(K),J;if(M){if(H==M){H=null;}var L=(M.element===null&&M.cfg===null)?true:false;if(!L){J=E.getStyle(M.element,"zIndex");M.cfg.setProperty("zIndex",-1000,true);}this.overlays.sort(this.compareZIndexDesc);this.overlays=this.overlays.slice(0,(this.overlays.length-1));M.hideEvent.unsubscribe(M.blur);M.destroyEvent.unsubscribe(this._onOverlayDestroy,M);if(!L){C.removeListener(M.element,this.cfg.getProperty("focusevent"),this._onOverlayElementFocus);M.cfg.setProperty("zIndex",J,true);M.cfg.setProperty("manager",null);}M.focusEvent.unsubscribeAll();M.blurEvent.unsubscribeAll();M.focusEvent=null;M.blurEvent=null;M.focus=null;M.blur=null;}};this.blurAll=function(){var K=this.overlays.length,J;if(K>0){J=K-1;do{this.overlays[J].blur();}while(J--);}};this._onOverlayBlur=function(K,J){H=null;};var G=this.cfg.getProperty("overlays");if(!this.overlays){this.overlays=[];}if(G){this.register(G);this.overlays.sort(this.compareZIndexDesc);}},_onOverlayElementFocus:function(I){var G=C.getTarget(I),H=this.close;if(H&&(G==H||E.isAncestor(H,G))){this.blur();}else{this.focus();}},_onOverlayDestroy:function(H,G,I){this.remove(I);},register:function(G){var K=this,L,I,H,J;if(G instanceof D){G.cfg.addProperty("manager",{value:this});G.focusEvent=G.createEvent("focus");G.focusEvent.signature=F.LIST;G.blurEvent=G.createEvent("blur");G.blurEvent.signature=F.LIST;G.focus=function(){K.focus(this);};G.blur=function(){if(K.getActive()==this){E.removeClass(this.element,A.CSS_FOCUSED);this.blurEvent.fire();}};G.blurEvent.subscribe(K._onOverlayBlur);G.hideEvent.subscribe(G.blur);G.destroyEvent.subscribe(this._onOverlayDestroy,G,this);C.on(G.element,this.cfg.getProperty("focusevent"),this._onOverlayElementFocus,null,G);L=E.getStyle(G.element,"zIndex");if(!isNaN(L)){G.cfg.setProperty("zIndex",parseInt(L,10));}else{G.cfg.setProperty("zIndex",0);}this.overlays.push(G);this.bringToTop(G);return true;}else{if(G instanceof Array){I=0;J=G.length;for(H=0;H<J;H++){if(this.register(G[H])){I++;}}if(I>0){return true;}}else{return false;}}},bringToTop:function(M){var I=this.find(M),L,G,J;if(I){J=this.overlays;J.sort(this.compareZIndexDesc);G=J[0];if(G){L=E.getStyle(G.element,"zIndex");
    if(!isNaN(L)){var K=false;if(G!==I){K=true;}else{if(J.length>1){var H=E.getStyle(J[1].element,"zIndex");if(!isNaN(H)&&(L==H)){K=true;}}}if(K){I.cfg.setProperty("zindex",(parseInt(L,10)+2));}}J.sort(this.compareZIndexDesc);}}},find:function(G){var I=this.overlays,J=I.length,H;if(J>0){H=J-1;if(G instanceof D){do{if(I[H]==G){return I[H];}}while(H--);}else{if(typeof G=="string"){do{if(I[H].id==G){return I[H];}}while(H--);}}return null;}},compareZIndexDesc:function(J,I){var H=(J.cfg)?J.cfg.getProperty("zIndex"):null,G=(I.cfg)?I.cfg.getProperty("zIndex"):null;if(H===null&&G===null){return 0;}else{if(H===null){return 1;}else{if(G===null){return -1;}else{if(H>G){return -1;}else{if(H<G){return 1;}else{return 0;}}}}}},showAll:function(){var H=this.overlays,I=H.length,G;if(I>0){G=I-1;do{H[G].show();}while(G--);}},hideAll:function(){var H=this.overlays,I=H.length,G;if(I>0){G=I-1;do{H[G].hide();}while(G--);}},toString:function(){return"OverlayManager";}};}());(function(){YAHOO.widget.ContainerEffect=function(F,I,H,E,G){if(!G){G=YAHOO.util.Anim;}this.overlay=F;this.attrIn=I;this.attrOut=H;this.targetElement=E||F.element;this.animClass=G;};var B=YAHOO.util.Dom,D=YAHOO.util.CustomEvent,C=YAHOO.util.Easing,A=YAHOO.widget.ContainerEffect;A.FADE=function(E,G){var I={attributes:{opacity:{from:0,to:1}},duration:G,method:C.easeIn};var F={attributes:{opacity:{to:0}},duration:G,method:C.easeOut};var H=new A(E,I,F,E.element);H.handleUnderlayStart=function(){var K=this.overlay.underlay;if(K&&YAHOO.env.ua.ie){var J=(K.filters&&K.filters.length>0);if(J){B.addClass(E.element,"yui-effect-fade");}}};H.handleUnderlayComplete=function(){var J=this.overlay.underlay;if(J&&YAHOO.env.ua.ie){B.removeClass(E.element,"yui-effect-fade");}};H.handleStartAnimateIn=function(K,J,L){B.addClass(L.overlay.element,"hide-select");if(!L.overlay.underlay){L.overlay.cfg.refireEvent("underlay");}L.handleUnderlayStart();B.setStyle(L.overlay.element,"visibility","visible");B.setStyle(L.overlay.element,"opacity",0);};H.handleCompleteAnimateIn=function(K,J,L){B.removeClass(L.overlay.element,"hide-select");if(L.overlay.element.style.filter){L.overlay.element.style.filter=null;}L.handleUnderlayComplete();L.overlay.cfg.refireEvent("iframe");L.animateInCompleteEvent.fire();};H.handleStartAnimateOut=function(K,J,L){B.addClass(L.overlay.element,"hide-select");L.handleUnderlayStart();};H.handleCompleteAnimateOut=function(K,J,L){B.removeClass(L.overlay.element,"hide-select");if(L.overlay.element.style.filter){L.overlay.element.style.filter=null;}B.setStyle(L.overlay.element,"visibility","hidden");B.setStyle(L.overlay.element,"opacity",1);L.handleUnderlayComplete();L.overlay.cfg.refireEvent("iframe");L.animateOutCompleteEvent.fire();};H.init();return H;};A.SLIDE=function(G,I){var F=G.cfg.getProperty("x")||B.getX(G.element),K=G.cfg.getProperty("y")||B.getY(G.element),J=B.getClientWidth(),H=G.element.offsetWidth,E=new A(G,{attributes:{points:{to:[F,K]}},duration:I,method:C.easeIn},{attributes:{points:{to:[(J+25),K]}},duration:I,method:C.easeOut},G.element,YAHOO.util.Motion);E.handleStartAnimateIn=function(M,L,N){N.overlay.element.style.left=((-25)-H)+"px";N.overlay.element.style.top=K+"px";};E.handleTweenAnimateIn=function(O,N,P){var Q=B.getXY(P.overlay.element),M=Q[0],L=Q[1];if(B.getStyle(P.overlay.element,"visibility")=="hidden"&&M<F){B.setStyle(P.overlay.element,"visibility","visible");}P.overlay.cfg.setProperty("xy",[M,L],true);P.overlay.cfg.refireEvent("iframe");};E.handleCompleteAnimateIn=function(M,L,N){N.overlay.cfg.setProperty("xy",[F,K],true);N.startX=F;N.startY=K;N.overlay.cfg.refireEvent("iframe");N.animateInCompleteEvent.fire();};E.handleStartAnimateOut=function(M,L,P){var N=B.getViewportWidth(),Q=B.getXY(P.overlay.element),O=Q[1];P.animOut.attributes.points.to=[(N+25),O];};E.handleTweenAnimateOut=function(N,M,O){var Q=B.getXY(O.overlay.element),L=Q[0],P=Q[1];O.overlay.cfg.setProperty("xy",[L,P],true);O.overlay.cfg.refireEvent("iframe");};E.handleCompleteAnimateOut=function(M,L,N){B.setStyle(N.overlay.element,"visibility","hidden");N.overlay.cfg.setProperty("xy",[F,K]);N.animateOutCompleteEvent.fire();};E.init();return E;};A.prototype={init:function(){this.beforeAnimateInEvent=this.createEvent("beforeAnimateIn");this.beforeAnimateInEvent.signature=D.LIST;this.beforeAnimateOutEvent=this.createEvent("beforeAnimateOut");this.beforeAnimateOutEvent.signature=D.LIST;this.animateInCompleteEvent=this.createEvent("animateInComplete");this.animateInCompleteEvent.signature=D.LIST;this.animateOutCompleteEvent=this.createEvent("animateOutComplete");this.animateOutCompleteEvent.signature=D.LIST;this.animIn=new this.animClass(this.targetElement,this.attrIn.attributes,this.attrIn.duration,this.attrIn.method);this.animIn.onStart.subscribe(this.handleStartAnimateIn,this);this.animIn.onTween.subscribe(this.handleTweenAnimateIn,this);this.animIn.onComplete.subscribe(this.handleCompleteAnimateIn,this);this.animOut=new this.animClass(this.targetElement,this.attrOut.attributes,this.attrOut.duration,this.attrOut.method);this.animOut.onStart.subscribe(this.handleStartAnimateOut,this);this.animOut.onTween.subscribe(this.handleTweenAnimateOut,this);this.animOut.onComplete.subscribe(this.handleCompleteAnimateOut,this);},animateIn:function(){this.beforeAnimateInEvent.fire();this.animIn.animate();},animateOut:function(){this.beforeAnimateOutEvent.fire();this.animOut.animate();},handleStartAnimateIn:function(F,E,G){},handleTweenAnimateIn:function(F,E,G){},handleCompleteAnimateIn:function(F,E,G){},handleStartAnimateOut:function(F,E,G){},handleTweenAnimateOut:function(F,E,G){},handleCompleteAnimateOut:function(F,E,G){},toString:function(){var E="ContainerEffect";if(this.overlay){E+=" ["+this.overlay.toString()+"]";}return E;}};YAHOO.lang.augmentProto(A,YAHOO.util.EventProvider);})();YAHOO.register("containercore",YAHOO.widget.Module,{version:"2.5.2",build:"1076"});

    // menu-min.js
    (function(){var B=YAHOO.util.Dom,A=YAHOO.util.Event;YAHOO.widget.MenuManager=function(){var N=false,F={},Q={},J={},E={"click":"clickEvent","mousedown":"mouseDownEvent","mouseup":"mouseUpEvent","mouseover":"mouseOverEvent","mouseout":"mouseOutEvent","keydown":"keyDownEvent","keyup":"keyUpEvent","keypress":"keyPressEvent"},K=null;function D(S){var R;if(S&&S.tagName){switch(S.tagName.toUpperCase()){case"DIV":R=S.parentNode;if((B.hasClass(S,"hd")||B.hasClass(S,"bd")||B.hasClass(S,"ft"))&&R&&R.tagName&&R.tagName.toUpperCase()=="DIV"){return R;}else{return S;}break;case"LI":return S;default:R=S.parentNode;if(R){return D(R);}break;}}}function G(V){var R=A.getTarget(V),S=D(R),X,T,U,Z,Y;if(S){T=S.tagName.toUpperCase();if(T=="LI"){U=S.id;if(U&&J[U]){Z=J[U];Y=Z.parent;}}else{if(T=="DIV"){if(S.id){Y=F[S.id];}}}}if(Y){X=E[V.type];if(Z&&!Z.cfg.getProperty("disabled")){Z[X].fire(V);if(V.type=="keyup"||V.type=="mousedown"){if(K!=Z){if(K){K.blurEvent.fire();}Z.focusEvent.fire();}}}Y[X].fire(V,Z);}else{if(V.type=="mousedown"){if(K){K.blurEvent.fire();K=null;}for(var W in Q){if(YAHOO.lang.hasOwnProperty(Q,W)){Y=Q[W];if(Y.cfg.getProperty("clicktohide")&&!(Y instanceof YAHOO.widget.MenuBar)&&Y.cfg.getProperty("position")=="dynamic"){Y.hide();}else{if(Y.cfg.getProperty("showdelay")>0){Y._cancelShowDelay();}if(Y.activeItem){Y.activeItem.blur();Y.activeItem.cfg.setProperty("selected",false);Y.activeItem=null;}}}}}else{if(V.type=="keyup"){if(K){K.blurEvent.fire();K=null;}}}}}function P(S,R,T){if(F[T.id]){this.removeMenu(T);}}function M(S,R){var T=R[0];if(T){K=T;}}function H(S,R){K=null;}function C(T,S){var R=S[0],U=this.id;if(R){Q[U]=this;}else{if(Q[U]){delete Q[U];}}}function L(S,R){O(this);}function O(S){var R=S.id;if(R&&J[R]){if(K==S){K=null;}delete J[R];S.destroyEvent.unsubscribe(L);}}function I(S,R){var U=R[0],T;if(U instanceof YAHOO.widget.MenuItem){T=U.id;if(!J[T]){J[T]=U;U.destroyEvent.subscribe(L);}}}return{addMenu:function(S){var R;if(S instanceof YAHOO.widget.Menu&&S.id&&!F[S.id]){F[S.id]=S;if(!N){R=document;A.on(R,"mouseover",G,this,true);A.on(R,"mouseout",G,this,true);A.on(R,"mousedown",G,this,true);A.on(R,"mouseup",G,this,true);A.on(R,"click",G,this,true);A.on(R,"keydown",G,this,true);A.on(R,"keyup",G,this,true);A.on(R,"keypress",G,this,true);N=true;}S.cfg.subscribeToConfigEvent("visible",C);S.destroyEvent.subscribe(P,S,this);S.itemAddedEvent.subscribe(I);S.focusEvent.subscribe(M);S.blurEvent.subscribe(H);}},removeMenu:function(U){var S,R,T;if(U){S=U.id;if(F[S]==U){R=U.getItems();if(R&&R.length>0){T=R.length-1;do{O(R[T]);}while(T--);}delete F[S];if(Q[S]==U){delete Q[S];}if(U.cfg){U.cfg.unsubscribeFromConfigEvent("visible",C);}U.destroyEvent.unsubscribe(P,U);U.itemAddedEvent.unsubscribe(I);U.focusEvent.unsubscribe(M);U.blurEvent.unsubscribe(H);}}},hideVisible:function(){var R;for(var S in Q){if(YAHOO.lang.hasOwnProperty(Q,S)){R=Q[S];if(!(R instanceof YAHOO.widget.MenuBar)&&R.cfg.getProperty("position")=="dynamic"){R.hide();}}}},getVisible:function(){return Q;},getMenus:function(){return F;},getMenu:function(S){var R=F[S];if(R){return R;}},getMenuItem:function(R){var S=J[R];if(S){return S;}},getMenuItemGroup:function(U){var S=B.get(U),R,W,V,T;if(S&&S.tagName&&S.tagName.toUpperCase()=="UL"){W=S.firstChild;if(W){R=[];do{T=W.id;if(T){V=this.getMenuItem(T);if(V){R[R.length]=V;}}}while((W=W.nextSibling));if(R.length>0){return R;}}}},getFocusedMenuItem:function(){return K;},getFocusedMenu:function(){if(K){return(K.parent.getRoot());}},toString:function(){return"MenuManager";}};}();})();(function(){YAHOO.widget.Menu=function(O,N){if(N){this.parent=N.parent;this.lazyLoad=N.lazyLoad||N.lazyload;this.itemData=N.itemData||N.itemdata;}YAHOO.widget.Menu.superclass.constructor.call(this,O,N);};function I(N){if(typeof N=="string"){return("dynamic,static".indexOf((N.toLowerCase()))!=-1);}}var C=YAHOO.util.Dom,M=YAHOO.util.Event,D=YAHOO.widget.Module,B=YAHOO.widget.Overlay,F=YAHOO.widget.Menu,K=YAHOO.widget.MenuManager,L=YAHOO.util.CustomEvent,E=YAHOO.lang,H=YAHOO.env.ua,G,A={"MOUSE_OVER":"mouseover","MOUSE_OUT":"mouseout","MOUSE_DOWN":"mousedown","MOUSE_UP":"mouseup","CLICK":"click","KEY_PRESS":"keypress","KEY_DOWN":"keydown","KEY_UP":"keyup","FOCUS":"focus","BLUR":"blur","ITEM_ADDED":"itemAdded","ITEM_REMOVED":"itemRemoved"},J={"VISIBLE":{key:"visible",value:false,validator:E.isBoolean},"CONSTRAIN_TO_VIEWPORT":{key:"constraintoviewport",value:true,validator:E.isBoolean,supercedes:["iframe","x","y","xy"]},"POSITION":{key:"position",value:"dynamic",validator:I,supercedes:["visible","iframe"]},"SUBMENU_ALIGNMENT":{key:"submenualignment",value:["tl","tr"],suppressEvent:true},"AUTO_SUBMENU_DISPLAY":{key:"autosubmenudisplay",value:true,validator:E.isBoolean,suppressEvent:true},"SHOW_DELAY":{key:"showdelay",value:250,validator:E.isNumber,suppressEvent:true},"HIDE_DELAY":{key:"hidedelay",value:0,validator:E.isNumber,suppressEvent:true},"SUBMENU_HIDE_DELAY":{key:"submenuhidedelay",value:250,validator:E.isNumber,suppressEvent:true},"CLICK_TO_HIDE":{key:"clicktohide",value:true,validator:E.isBoolean,suppressEvent:true},"CONTAINER":{key:"container",suppressEvent:true},"SCROLL_INCREMENT":{key:"scrollincrement",value:1,validator:E.isNumber,supercedes:["maxheight"],suppressEvent:true},"MIN_SCROLL_HEIGHT":{key:"minscrollheight",value:90,validator:E.isNumber,supercedes:["maxheight"],suppressEvent:true},"MAX_HEIGHT":{key:"maxheight",value:0,validator:E.isNumber,supercedes:["iframe"],suppressEvent:true},"CLASS_NAME":{key:"classname",value:null,validator:E.isString,suppressEvent:true},"DISABLED":{key:"disabled",value:false,validator:E.isBoolean,suppressEvent:true}};YAHOO.lang.extend(F,B,{CSS_CLASS_NAME:"yuimenu",ITEM_TYPE:null,GROUP_TITLE_TAG_NAME:"h6",OFF_SCREEN_POSITION:[-10000,-10000],_nHideDelayId:null,_nShowDelayId:null,_nSubmenuHideDelayId:null,_nBodyScrollId:null,_bHideDelayEventHandlersAssigned:false,_bHandledMouseOverEvent:false,_bHandledMouseOutEvent:false,_aGroupTitleElements:null,_aItemGroups:null,_aListElements:null,_nCurrentMouseX:0,_bStopMouseEventHandlers:false,_sClassName:null,lazyLoad:false,itemData:null,activeItem:null,parent:null,srcElement:null,mouseOverEvent:null,mouseOutEvent:null,mouseDownEvent:null,mouseUpEvent:null,clickEvent:null,keyPressEvent:null,keyDownEvent:null,keyUpEvent:null,itemAddedEvent:null,itemRemovedEvent:null,init:function(P,O){this._aItemGroups=[];
    this._aListElements=[];this._aGroupTitleElements=[];if(!this.ITEM_TYPE){this.ITEM_TYPE=YAHOO.widget.MenuItem;}var N;if(typeof P=="string"){N=document.getElementById(P);}else{if(P.tagName){N=P;}}if(N&&N.tagName){switch(N.tagName.toUpperCase()){case"DIV":this.srcElement=N;if(!N.id){N.setAttribute("id",C.generateId());}F.superclass.init.call(this,N);this.beforeInitEvent.fire(F);break;case"SELECT":this.srcElement=N;F.superclass.init.call(this,C.generateId());this.beforeInitEvent.fire(F);break;}}else{F.superclass.init.call(this,P);this.beforeInitEvent.fire(F);}if(this.element){C.addClass(this.element,this.CSS_CLASS_NAME);this.initEvent.subscribe(this._onInit);this.beforeRenderEvent.subscribe(this._onBeforeRender);this.renderEvent.subscribe(this._onRender);this.renderEvent.subscribe(this.onRender);this.beforeShowEvent.subscribe(this._onBeforeShow);this.hideEvent.subscribe(this.positionOffScreen);this.showEvent.subscribe(this._onShow);this.beforeHideEvent.subscribe(this._onBeforeHide);this.mouseOverEvent.subscribe(this._onMouseOver);this.mouseOutEvent.subscribe(this._onMouseOut);this.clickEvent.subscribe(this._onClick);this.keyDownEvent.subscribe(this._onKeyDown);this.keyPressEvent.subscribe(this._onKeyPress);if(H.gecko||H.webkit){this.cfg.subscribeToConfigEvent("y",this._onYChange);}if(O){this.cfg.applyConfig(O,true);}K.addMenu(this);this.initEvent.fire(F);}},_initSubTree:function(){var O=this.srcElement,N,Q,T,U,S,R,P;if(O){N=(O.tagName&&O.tagName.toUpperCase());if(N=="DIV"){U=this.body.firstChild;if(U){Q=0;T=this.GROUP_TITLE_TAG_NAME.toUpperCase();do{if(U&&U.tagName){switch(U.tagName.toUpperCase()){case T:this._aGroupTitleElements[Q]=U;break;case"UL":this._aListElements[Q]=U;this._aItemGroups[Q]=[];Q++;break;}}}while((U=U.nextSibling));if(this._aListElements[0]){C.addClass(this._aListElements[0],"first-of-type");}}}U=null;if(N){switch(N){case"DIV":S=this._aListElements;R=S.length;if(R>0){P=R-1;do{U=S[P].firstChild;if(U){do{if(U&&U.tagName&&U.tagName.toUpperCase()=="LI"){this.addItem(new this.ITEM_TYPE(U,{parent:this}),P);}}while((U=U.nextSibling));}}while(P--);}break;case"SELECT":U=O.firstChild;do{if(U&&U.tagName){switch(U.tagName.toUpperCase()){case"OPTGROUP":case"OPTION":this.addItem(new this.ITEM_TYPE(U,{parent:this}));break;}}}while((U=U.nextSibling));break;}}}},_getFirstEnabledItem:function(){var N=this.getItems(),Q=N.length,P;for(var O=0;O<Q;O++){P=N[O];if(P&&!P.cfg.getProperty("disabled")&&P.element.style.display!="none"){return P;}}},_addItemToGroup:function(S,T,W){var U,X,Q,V,R,O,P;function N(Y,Z){return(Y[Z]||N(Y,(Z+1)));}if(T instanceof this.ITEM_TYPE){U=T;U.parent=this;}else{if(typeof T=="string"){U=new this.ITEM_TYPE(T,{parent:this});}else{if(typeof T=="object"){T.parent=this;U=new this.ITEM_TYPE(T.text,T);}}}if(U){if(U.cfg.getProperty("selected")){this.activeItem=U;}X=typeof S=="number"?S:0;Q=this._getItemGroup(X);if(!Q){Q=this._createItemGroup(X);}if(typeof W=="number"){R=(W>=Q.length);if(Q[W]){Q.splice(W,0,U);}else{Q[W]=U;}V=Q[W];if(V){if(R&&(!V.element.parentNode||V.element.parentNode.nodeType==11)){this._aListElements[X].appendChild(V.element);}else{O=N(Q,(W+1));if(O&&(!V.element.parentNode||V.element.parentNode.nodeType==11)){this._aListElements[X].insertBefore(V.element,O.element);}}V.parent=this;this._subscribeToItemEvents(V);this._configureSubmenu(V);this._updateItemProperties(X);this.itemAddedEvent.fire(V);this.changeContentEvent.fire();return V;}}else{P=Q.length;Q[P]=U;V=Q[P];if(V){if(!C.isAncestor(this._aListElements[X],V.element)){this._aListElements[X].appendChild(V.element);}V.element.setAttribute("groupindex",X);V.element.setAttribute("index",P);V.parent=this;V.index=P;V.groupIndex=X;this._subscribeToItemEvents(V);this._configureSubmenu(V);if(P===0){C.addClass(V.element,"first-of-type");}this.itemAddedEvent.fire(V);this.changeContentEvent.fire();return V;}}}},_removeItemFromGroupByIndex:function(Q,O){var P=typeof Q=="number"?Q:0,R=this._getItemGroup(P),T,S,N;if(R){T=R.splice(O,1);S=T[0];if(S){this._updateItemProperties(P);if(R.length===0){N=this._aListElements[P];if(this.body&&N){this.body.removeChild(N);}this._aItemGroups.splice(P,1);this._aListElements.splice(P,1);N=this._aListElements[0];if(N){C.addClass(N,"first-of-type");}}this.itemRemovedEvent.fire(S);this.changeContentEvent.fire();return S;}}},_removeItemFromGroupByValue:function(P,N){var R=this._getItemGroup(P),S,Q,O;if(R){S=R.length;Q=-1;if(S>0){O=S-1;do{if(R[O]==N){Q=O;break;}}while(O--);if(Q>-1){return(this._removeItemFromGroupByIndex(P,Q));}}}},_updateItemProperties:function(O){var P=this._getItemGroup(O),S=P.length,R,Q,N;if(S>0){N=S-1;do{R=P[N];if(R){Q=R.element;R.index=N;R.groupIndex=O;Q.setAttribute("groupindex",O);Q.setAttribute("index",N);C.removeClass(Q,"first-of-type");}}while(N--);if(Q){C.addClass(Q,"first-of-type");}}},_createItemGroup:function(O){var N;if(!this._aItemGroups[O]){this._aItemGroups[O]=[];N=document.createElement("ul");this._aListElements[O]=N;return this._aItemGroups[O];}},_getItemGroup:function(O){var N=((typeof O=="number")?O:0);return this._aItemGroups[N];},_configureSubmenu:function(N){var O=N.cfg.getProperty("submenu");if(O){this.cfg.configChangedEvent.subscribe(this._onParentMenuConfigChange,O,true);this.renderEvent.subscribe(this._onParentMenuRender,O,true);O.beforeShowEvent.subscribe(this._onSubmenuBeforeShow);}},_subscribeToItemEvents:function(N){N.focusEvent.subscribe(this._onMenuItemFocus);N.blurEvent.subscribe(this._onMenuItemBlur);N.destroyEvent.subscribe(this._onMenuItemDestroy,N,this);N.cfg.configChangedEvent.subscribe(this._onMenuItemConfigChange,N,this);},_onVisibleChange:function(P,O){var N=O[0];if(N){C.addClass(this.element,"visible");}else{C.removeClass(this.element,"visible");}},_cancelHideDelay:function(){var N=this.getRoot();if(N._nHideDelayId){window.clearTimeout(N._nHideDelayId);}},_execHideDelay:function(){this._cancelHideDelay();var O=this.getRoot(),P=this;function N(){if(O.activeItem){O.clearActiveItem();}if(O==P&&!(P instanceof YAHOO.widget.MenuBar)&&P.cfg.getProperty("position")=="dynamic"){P.hide();
    }}O._nHideDelayId=window.setTimeout(N,O.cfg.getProperty("hidedelay"));},_cancelShowDelay:function(){var N=this.getRoot();if(N._nShowDelayId){window.clearTimeout(N._nShowDelayId);}},_execShowDelay:function(P){var O=this.getRoot();function N(){if(P.parent.cfg.getProperty("selected")){P.show();}}O._nShowDelayId=window.setTimeout(N,O.cfg.getProperty("showdelay"));},_execSubmenuHideDelay:function(Q,O,N){var P=this;Q._nSubmenuHideDelayId=window.setTimeout(function(){if(P._nCurrentMouseX>(O+10)){Q._nSubmenuHideDelayId=window.setTimeout(function(){Q.hide();},N);}else{Q.hide();}},50);},_disableScrollHeader:function(){if(!this._bHeaderDisabled){C.addClass(this.header,"topscrollbar_disabled");this._bHeaderDisabled=true;}},_disableScrollFooter:function(){if(!this._bFooterDisabled){C.addClass(this.footer,"bottomscrollbar_disabled");this._bFooterDisabled=true;}},_enableScrollHeader:function(){if(this._bHeaderDisabled){C.removeClass(this.header,"topscrollbar_disabled");this._bHeaderDisabled=false;}},_enableScrollFooter:function(){if(this._bFooterDisabled){C.removeClass(this.footer,"bottomscrollbar_disabled");this._bFooterDisabled=false;}},_onMouseOver:function(W,R){if(this._bStopMouseEventHandlers){return false;}var X=R[0],V=R[1],N=M.getTarget(X),O,Q,U,P,T,S;if(!this._bHandledMouseOverEvent&&(N==this.element||C.isAncestor(this.element,N))){this._nCurrentMouseX=0;M.on(this.element,"mousemove",this._onMouseMove,this,true);this.clearActiveItem();if(this.parent&&this._nSubmenuHideDelayId){window.clearTimeout(this._nSubmenuHideDelayId);this.parent.cfg.setProperty("selected",true);O=this.parent.parent;O._bHandledMouseOutEvent=true;O._bHandledMouseOverEvent=false;}this._bHandledMouseOverEvent=true;this._bHandledMouseOutEvent=false;}if(V&&!V.handledMouseOverEvent&&!V.cfg.getProperty("disabled")&&(N==V.element||C.isAncestor(V.element,N))){Q=this.cfg.getProperty("showdelay");U=(Q>0);if(U){this._cancelShowDelay();}P=this.activeItem;if(P){P.cfg.setProperty("selected",false);}T=V.cfg;T.setProperty("selected",true);if(this.hasFocus()){V.focus();}if(this.cfg.getProperty("autosubmenudisplay")){S=T.getProperty("submenu");if(S){if(U){this._execShowDelay(S);}else{S.show();}}}V.handledMouseOverEvent=true;V.handledMouseOutEvent=false;}},_onMouseOut:function(V,P){if(this._bStopMouseEventHandlers){return false;}var W=P[0],T=P[1],Q=M.getRelatedTarget(W),U=false,S,R,N,O;if(T&&!T.cfg.getProperty("disabled")){S=T.cfg;R=S.getProperty("submenu");if(R&&(Q==R.element||C.isAncestor(R.element,Q))){U=true;}if(!T.handledMouseOutEvent&&((Q!=T.element&&!C.isAncestor(T.element,Q))||U)){if(!U){T.cfg.setProperty("selected",false);if(R){N=this.cfg.getProperty("submenuhidedelay");O=this.cfg.getProperty("showdelay");if(!(this instanceof YAHOO.widget.MenuBar)&&N>0&&O>=N){this._execSubmenuHideDelay(R,M.getPageX(W),N);}else{R.hide();}}}T.handledMouseOutEvent=true;T.handledMouseOverEvent=false;}}if(!this._bHandledMouseOutEvent&&((Q!=this.element&&!C.isAncestor(this.element,Q))||U)){M.removeListener(this.element,"mousemove",this._onMouseMove);this._nCurrentMouseX=M.getPageX(W);this._bHandledMouseOutEvent=true;this._bHandledMouseOverEvent=false;}},_onMouseMove:function(O,N){if(this._bStopMouseEventHandlers){return false;}this._nCurrentMouseX=M.getPageX(O);},_onClick:function(W,P){var X=P[0],S=P[1],U=false,Q,O,N,R,T,V;if(S){if(S.cfg.getProperty("disabled")){M.preventDefault(X);}else{Q=S.cfg.getProperty("submenu");R=S.cfg.getProperty("url");if(R){T=R.indexOf("#");V=R.length;if(T!=-1){R=R.substr(T,V);V=R.length;if(V>1){N=R.substr(1,V);U=C.isAncestor(this.element,N);}else{if(V===1){U=true;}}}}if(U&&!S.cfg.getProperty("target")){M.preventDefault(X);if(H.webkit){S.focus();}else{S.focusEvent.fire();}}if(!Q){if((H.gecko&&this.platform=="windows")&&X.button>0){return ;}O=this.getRoot();if(O instanceof YAHOO.widget.MenuBar||O.cfg.getProperty("position")=="static"){O.clearActiveItem();}else{O.hide();}}}}},_onKeyDown:function(b,V){var Y=V[0],X=V[1],f=this,U,Z,O,S,c,N,e,R,a,Q,W,d,T;function P(){f._bStopMouseEventHandlers=true;window.setTimeout(function(){f._bStopMouseEventHandlers=false;},10);}if(X&&!X.cfg.getProperty("disabled")){Z=X.cfg;O=this.parent;switch(Y.keyCode){case 38:case 40:c=(Y.keyCode==38)?X.getPreviousEnabledSibling():X.getNextEnabledSibling();if(c){this.clearActiveItem();c.cfg.setProperty("selected",true);c.focus();if(this.cfg.getProperty("maxheight")>0){N=this.body;e=N.scrollTop;R=N.offsetHeight;a=this.getItems();Q=a.length-1;W=c.element.offsetTop;if(Y.keyCode==40){if(W>=(R+e)){N.scrollTop=W-R;}else{if(W<=e){N.scrollTop=0;}}if(c==a[Q]){N.scrollTop=c.element.offsetTop;}}else{if(W<=e){N.scrollTop=W-c.element.offsetHeight;}else{if(W>=(e+R)){N.scrollTop=W;}}if(c==a[0]){N.scrollTop=0;}}e=N.scrollTop;d=N.scrollHeight-N.offsetHeight;if(e===0){this._disableScrollHeader();this._enableScrollFooter();}else{if(e==d){this._enableScrollHeader();this._disableScrollFooter();}else{this._enableScrollHeader();this._enableScrollFooter();}}}}M.preventDefault(Y);P();break;case 39:U=Z.getProperty("submenu");if(U){if(!Z.getProperty("selected")){Z.setProperty("selected",true);}U.show();U.setInitialFocus();U.setInitialSelection();}else{S=this.getRoot();if(S instanceof YAHOO.widget.MenuBar){c=S.activeItem.getNextEnabledSibling();if(c){S.clearActiveItem();c.cfg.setProperty("selected",true);U=c.cfg.getProperty("submenu");if(U){U.show();}c.focus();}}}M.preventDefault(Y);P();break;case 37:if(O){T=O.parent;if(T instanceof YAHOO.widget.MenuBar){c=T.activeItem.getPreviousEnabledSibling();if(c){T.clearActiveItem();c.cfg.setProperty("selected",true);U=c.cfg.getProperty("submenu");if(U){U.show();}c.focus();}}else{this.hide();O.focus();}}M.preventDefault(Y);P();break;}}if(Y.keyCode==27){if(this.cfg.getProperty("position")=="dynamic"){this.hide();if(this.parent){this.parent.focus();}}else{if(this.activeItem){U=this.activeItem.cfg.getProperty("submenu");if(U&&U.cfg.getProperty("visible")){U.hide();this.activeItem.focus();}else{this.activeItem.blur();this.activeItem.cfg.setProperty("selected",false);
    }}}M.preventDefault(Y);}},_onKeyPress:function(P,O){var N=O[0];if(N.keyCode==40||N.keyCode==38){M.preventDefault(N);}},_onYChange:function(O,N){var Q=this.parent,S,P,R;if(Q){S=Q.parent.body.scrollTop;if(S>0){R=(this.cfg.getProperty("y")-S);C.setY(this.element,R);P=this.iframe;if(P){C.setY(P,R);}this.cfg.setProperty("y",R,true);}}},_onScrollTargetMouseOver:function(T,W){this._cancelHideDelay();var P=M.getTarget(T),R=this.body,V=this,Q=this.cfg.getProperty("scrollincrement"),N,O;function U(){var X=R.scrollTop;if(X<N){R.scrollTop=(X+Q);V._enableScrollHeader();}else{R.scrollTop=N;window.clearInterval(V._nBodyScrollId);V._disableScrollFooter();}}function S(){var X=R.scrollTop;if(X>0){R.scrollTop=(X-Q);V._enableScrollFooter();}else{R.scrollTop=0;window.clearInterval(V._nBodyScrollId);V._disableScrollHeader();}}if(C.hasClass(P,"hd")){O=S;}else{N=R.scrollHeight-R.offsetHeight;O=U;}this._nBodyScrollId=window.setInterval(O,10);},_onScrollTargetMouseOut:function(O,N){window.clearInterval(this._nBodyScrollId);this._cancelHideDelay();},_onInit:function(O,N){this.cfg.subscribeToConfigEvent("visible",this._onVisibleChange);var P=!this.parent,Q=this.lazyLoad;if(((P&&!Q)||(P&&(this.cfg.getProperty("visible")||this.cfg.getProperty("position")=="static"))||(!P&&!Q))&&this.getItemGroups().length===0){if(this.srcElement){this._initSubTree();}if(this.itemData){this.addItems(this.itemData);}}else{if(Q){this.cfg.fireQueue();}}},_onBeforeRender:function(Q,P){var R=this.element,U=this._aListElements.length,O=true,T=0,N,S;if(U>0){do{N=this._aListElements[T];if(N){if(O){C.addClass(N,"first-of-type");O=false;}if(!C.isAncestor(R,N)){this.appendToBody(N);}S=this._aGroupTitleElements[T];if(S){if(!C.isAncestor(R,S)){N.parentNode.insertBefore(S,N);}C.addClass(N,"hastitle");}}T++;}while(T<U);}},_onRender:function(O,N){if(this.cfg.getProperty("position")=="dynamic"){if(!this.cfg.getProperty("visible")){this.positionOffScreen();}}},_onBeforeShow:function(W,R){var V,O,S,Q,T;if(this.lazyLoad&&this.getItemGroups().length===0){if(this.srcElement){this._initSubTree();}if(this.itemData){if(this.parent&&this.parent.parent&&this.parent.parent.srcElement&&this.parent.parent.srcElement.tagName.toUpperCase()=="SELECT"){V=this.itemData.length;for(O=0;O<V;O++){if(this.itemData[O].tagName){this.addItem((new this.ITEM_TYPE(this.itemData[O])));}}}else{this.addItems(this.itemData);}}T=this.srcElement;if(T){if(T.tagName.toUpperCase()=="SELECT"){if(C.inDocument(T)){this.render(T.parentNode);}else{this.render(this.cfg.getProperty("container"));}}else{this.render();}}else{if(this.parent){this.render(this.parent.element);}else{this.render(this.cfg.getProperty("container"));}}}var P=this.cfg.getProperty("maxheight"),N=this.cfg.getProperty("minscrollheight"),U=this.cfg.getProperty("position")=="dynamic";if(!this.parent&&U){this.cfg.refireEvent("xy");}function X(){this.cfg.setProperty("maxheight",0);this.hideEvent.unsubscribe(X);}if(!(this instanceof YAHOO.widget.MenuBar)&&U){if(P===0){S=C.getViewportHeight();if(this.parent&&this.parent.parent instanceof YAHOO.widget.MenuBar){Q=YAHOO.util.Region.getRegion(this.parent.element);S=(S-Q.bottom);}if(this.element.offsetHeight>=S){P=(S-(B.VIEWPORT_OFFSET*2));if(P<N){P=N;}this.cfg.setProperty("maxheight",P);this.hideEvent.subscribe(X);}}}},_onShow:function(Q,P){var T=this.parent,S,N,O;function R(V){var U;if(V.type=="mousedown"||(V.type=="keydown"&&V.keyCode==27)){U=M.getTarget(V);if(U!=S.element||!C.isAncestor(S.element,U)){S.cfg.setProperty("autosubmenudisplay",false);M.removeListener(document,"mousedown",R);M.removeListener(document,"keydown",R);}}}if(T){S=T.parent;N=S.cfg.getProperty("submenualignment");O=this.cfg.getProperty("submenualignment");if((N[0]!=O[0])&&(N[1]!=O[1])){this.cfg.setProperty("submenualignment",[N[0],N[1]]);}if(!S.cfg.getProperty("autosubmenudisplay")&&(S instanceof YAHOO.widget.MenuBar||S.cfg.getProperty("position")=="static")){S.cfg.setProperty("autosubmenudisplay",true);M.on(document,"mousedown",R);M.on(document,"keydown",R);}}},_onBeforeHide:function(P,O){var N=this.activeItem,R,Q;if(N){R=N.cfg;R.setProperty("selected",false);Q=R.getProperty("submenu");if(Q){Q.hide();}}if(this.getRoot()==this){this.blur();}},_onParentMenuConfigChange:function(O,N,R){var P=N[0][0],Q=N[0][1];switch(P){case"iframe":case"constraintoviewport":case"hidedelay":case"showdelay":case"submenuhidedelay":case"clicktohide":case"effect":case"classname":case"scrollincrement":case"minscrollheight":R.cfg.setProperty(P,Q);break;}},_onParentMenuRender:function(O,N,S){var P=S.parent.parent.cfg,Q={constraintoviewport:P.getProperty("constraintoviewport"),xy:[0,0],clicktohide:P.getProperty("clicktohide"),effect:P.getProperty("effect"),showdelay:P.getProperty("showdelay"),hidedelay:P.getProperty("hidedelay"),submenuhidedelay:P.getProperty("submenuhidedelay"),classname:P.getProperty("classname"),scrollincrement:P.getProperty("scrollincrement"),minscrollheight:P.getProperty("minscrollheight"),iframe:P.getProperty("iframe")},R;S.cfg.applyConfig(Q);if(!this.lazyLoad){R=this.parent.element;if(this.element.parentNode==R){this.render();}else{this.render(R);}}},_onSubmenuBeforeShow:function(P,O){var Q=this.parent,N=Q.parent.cfg.getProperty("submenualignment");if(!this.cfg.getProperty("context")){this.cfg.setProperty("context",[Q.element,N[0],N[1]]);}else{this.align();}},_onMenuItemFocus:function(O,N){this.parent.focusEvent.fire(this);},_onMenuItemBlur:function(O,N){this.parent.blurEvent.fire(this);},_onMenuItemDestroy:function(P,O,N){this._removeItemFromGroupByValue(N.groupIndex,N);},_onMenuItemConfigChange:function(P,O,N){var R=O[0][0],S=O[0][1],Q;switch(R){case"selected":if(S===true){this.activeItem=N;}break;case"submenu":Q=O[0][1];if(Q){this._configureSubmenu(N);}break;}},enforceConstraints:function(P,N,T){YAHOO.widget.Menu.superclass.enforceConstraints.apply(this,arguments);var S=this.parent,O,R,Q,U;if(S){O=S.parent;if(!(O instanceof YAHOO.widget.MenuBar)){R=O.cfg.getProperty("x");U=this.cfg.getProperty("x");if(U<(R+S.element.offsetWidth)){Q=(R-this.element.offsetWidth);
    this.cfg.setProperty("x",Q,true);this.cfg.setProperty("xy",[Q,(this.cfg.getProperty("y"))],true);}}}},configVisible:function(P,O,Q){var N,R;if(this.cfg.getProperty("position")=="dynamic"){F.superclass.configVisible.call(this,P,O,Q);}else{N=O[0];R=C.getStyle(this.element,"display");C.setStyle(this.element,"visibility","visible");if(N){if(R!="block"){this.beforeShowEvent.fire();C.setStyle(this.element,"display","block");this.showEvent.fire();}}else{if(R=="block"){this.beforeHideEvent.fire();C.setStyle(this.element,"display","none");this.hideEvent.fire();}}}},configPosition:function(P,O,S){var R=this.element,Q=O[0]=="static"?"static":"absolute",T=this.cfg,N;C.setStyle(R,"position",Q);if(Q=="static"){C.setStyle(R,"display","block");T.setProperty("visible",true);}else{C.setStyle(R,"visibility","hidden");}if(Q=="absolute"){N=T.getProperty("zindex");if(!N||N===0){N=this.parent?(this.parent.parent.cfg.getProperty("zindex")+1):1;T.setProperty("zindex",N);}}},configIframe:function(O,N,P){if(this.cfg.getProperty("position")=="dynamic"){F.superclass.configIframe.call(this,O,N,P);}},configHideDelay:function(O,N,R){var T=N[0],S=this.mouseOutEvent,P=this.mouseOverEvent,Q=this.keyDownEvent;if(T>0){if(!this._bHideDelayEventHandlersAssigned){S.subscribe(this._execHideDelay);P.subscribe(this._cancelHideDelay);Q.subscribe(this._cancelHideDelay);this._bHideDelayEventHandlersAssigned=true;}}else{S.unsubscribe(this._execHideDelay);P.unsubscribe(this._cancelHideDelay);Q.unsubscribe(this._cancelHideDelay);this._bHideDelayEventHandlersAssigned=false;}},configContainer:function(O,N,Q){var P=N[0];if(typeof P=="string"){this.cfg.setProperty("container",document.getElementById(P),true);}},_setMaxHeight:function(O,N,P){this.cfg.setProperty("maxheight",P);this.renderEvent.unsubscribe(this._setMaxHeight);},configMaxHeight:function(a,U,X){var T=U[0],Q=this.element,R=this.body,Y=this.header,O=this.footer,W=this._onScrollTargetMouseOver,b=this._onScrollTargetMouseOut,N=this.cfg.getProperty("minscrollheight"),V,S,P;if(T!==0&&T<N){T=N;}if(this.lazyLoad&&!R){this.renderEvent.unsubscribe(this._setMaxHeight);if(T>0){this.renderEvent.subscribe(this._setMaxHeight,T,this);}return ;}C.setStyle(R,"height","");C.removeClass(R,"yui-menu-body-scrolled");var Z=((H.gecko&&this.parent&&this.parent.parent&&this.parent.parent.cfg.getProperty("position")=="dynamic")||H.ie);if(Z){if(!this.cfg.getProperty("width")){S=Q.offsetWidth;Q.style.width=S+"px";P=(S-(Q.offsetWidth-S))+"px";this.cfg.setProperty("width",P);}}if(!Y&&!O){this.setHeader("&#32;");this.setFooter("&#32;");Y=this.header;O=this.footer;C.addClass(Y,"topscrollbar");C.addClass(O,"bottomscrollbar");Q.insertBefore(Y,R);Q.appendChild(O);}V=(T-(Y.offsetHeight+Y.offsetHeight));if(V>0&&(R.offsetHeight>T)){C.addClass(R,"yui-menu-body-scrolled");C.setStyle(R,"height",(V+"px"));M.on(Y,"mouseover",W,this,true);M.on(Y,"mouseout",b,this,true);M.on(O,"mouseover",W,this,true);M.on(O,"mouseout",b,this,true);this._disableScrollHeader();this._enableScrollFooter();}else{if(Y&&O){if(Z){this.cfg.setProperty("width","");}this._enableScrollHeader();this._enableScrollFooter();M.removeListener(Y,"mouseover",W);M.removeListener(Y,"mouseout",b);M.removeListener(O,"mouseover",W);M.removeListener(O,"mouseout",b);Q.removeChild(Y);Q.removeChild(O);this.header=null;this.footer=null;}}this.cfg.refireEvent("iframe");},configClassName:function(P,O,Q){var N=O[0];if(this._sClassName){C.removeClass(this.element,this._sClassName);}C.addClass(this.element,N);this._sClassName=N;},_onItemAdded:function(O,N){var P=N[0];if(P){P.cfg.setProperty("disabled",true);}},configDisabled:function(P,O,S){var R=O[0],N=this.getItems(),T,Q;if(E.isArray(N)){T=N.length;if(T>0){Q=T-1;do{N[Q].cfg.setProperty("disabled",R);}while(Q--);}if(R){this.clearActiveItem(true);C.addClass(this.element,"disabled");this.itemAddedEvent.subscribe(this._onItemAdded);}else{C.removeClass(this.element,"disabled");this.itemAddedEvent.unsubscribe(this._onItemAdded);}}},onRender:function(R,Q){function S(){var W=this.element,V=this._shadow;if(V&&W){if(V.style.width&&V.style.height){V.style.width="";V.style.height="";}V.style.width=(W.offsetWidth+6)+"px";V.style.height=(W.offsetHeight+1)+"px";}}function U(){this.element.appendChild(this._shadow);}function O(){C.addClass(this._shadow,"yui-menu-shadow-visible");}function N(){C.removeClass(this._shadow,"yui-menu-shadow-visible");}function T(){var W=this._shadow,V,X;if(!W){V=this.element;X=this;if(!G){G=document.createElement("div");G.className="yui-menu-shadow yui-menu-shadow-visible";}W=G.cloneNode(false);V.appendChild(W);this._shadow=W;this.beforeShowEvent.subscribe(O);this.beforeHideEvent.subscribe(N);if(H.ie){window.setTimeout(function(){S.call(X);X.syncIframe();},0);this.cfg.subscribeToConfigEvent("width",S);this.cfg.subscribeToConfigEvent("height",S);this.cfg.subscribeToConfigEvent("maxheight",S);this.changeContentEvent.subscribe(S);D.textResizeEvent.subscribe(S,X,true);this.destroyEvent.subscribe(function(){D.textResizeEvent.unsubscribe(S,X);});}this.cfg.subscribeToConfigEvent("maxheight",U);}}function P(){T.call(this);this.beforeShowEvent.unsubscribe(P);}if(this.cfg.getProperty("position")=="dynamic"){if(this.cfg.getProperty("visible")){T.call(this);}else{this.beforeShowEvent.subscribe(P);}}},initEvents:function(){F.superclass.initEvents.call(this);var N=L.LIST;this.mouseOverEvent=this.createEvent(A.MOUSE_OVER);this.mouseOverEvent.signature=N;this.mouseOutEvent=this.createEvent(A.MOUSE_OUT);this.mouseOutEvent.signature=N;this.mouseDownEvent=this.createEvent(A.MOUSE_DOWN);this.mouseDownEvent.signature=N;this.mouseUpEvent=this.createEvent(A.MOUSE_UP);this.mouseUpEvent.signature=N;this.clickEvent=this.createEvent(A.CLICK);this.clickEvent.signature=N;this.keyPressEvent=this.createEvent(A.KEY_PRESS);this.keyPressEvent.signature=N;this.keyDownEvent=this.createEvent(A.KEY_DOWN);this.keyDownEvent.signature=N;this.keyUpEvent=this.createEvent(A.KEY_UP);this.keyUpEvent.signature=N;this.focusEvent=this.createEvent(A.FOCUS);
    this.focusEvent.signature=N;this.blurEvent=this.createEvent(A.BLUR);this.blurEvent.signature=N;this.itemAddedEvent=this.createEvent(A.ITEM_ADDED);this.itemAddedEvent.signature=N;this.itemRemovedEvent=this.createEvent(A.ITEM_REMOVED);this.itemRemovedEvent.signature=N;},positionOffScreen:function(){var O=this.iframe,N=this.OFF_SCREEN_POSITION;C.setXY(this.element,N);if(O){C.setXY(O,N);}},getRoot:function(){var O=this.parent,N;if(O){N=O.parent;return N?N.getRoot():this;}else{return this;}},toString:function(){var O="Menu",N=this.id;if(N){O+=(" "+N);}return O;},setItemGroupTitle:function(S,R){var Q,P,O,N;if(typeof S=="string"&&S.length>0){Q=typeof R=="number"?R:0;P=this._aGroupTitleElements[Q];if(P){P.innerHTML=S;}else{P=document.createElement(this.GROUP_TITLE_TAG_NAME);P.innerHTML=S;this._aGroupTitleElements[Q]=P;}O=this._aGroupTitleElements.length-1;do{if(this._aGroupTitleElements[O]){C.removeClass(this._aGroupTitleElements[O],"first-of-type");N=O;}}while(O--);if(N!==null){C.addClass(this._aGroupTitleElements[N],"first-of-type");}this.changeContentEvent.fire();}},addItem:function(N,O){if(N){return this._addItemToGroup(O,N);}},addItems:function(Q,P){var S,N,R,O;if(E.isArray(Q)){S=Q.length;N=[];for(O=0;O<S;O++){R=Q[O];if(R){if(E.isArray(R)){N[N.length]=this.addItems(R,O);}else{N[N.length]=this._addItemToGroup(P,R);}}}if(N.length){return N;}}},insertItem:function(N,O,P){if(N){return this._addItemToGroup(P,N,O);}},removeItem:function(N,O){var P;if(typeof N!="undefined"){if(N instanceof YAHOO.widget.MenuItem){P=this._removeItemFromGroupByValue(O,N);}else{if(typeof N=="number"){P=this._removeItemFromGroupByIndex(O,N);}}if(P){P.destroy();return P;}}},getItems:function(){var P=this._aItemGroups,O,N=[];if(E.isArray(P)){O=P.length;return((O==1)?P[0]:(Array.prototype.concat.apply(N,P)));}},getItemGroups:function(){return this._aItemGroups;},getItem:function(N,O){var P;if(typeof N=="number"){P=this._getItemGroup(O);if(P){return P[N];}}},getSubmenus:function(){var O=this.getItems(),S=O.length,N,P,R,Q;if(S>0){N=[];for(Q=0;Q<S;Q++){R=O[Q];if(R){P=R.cfg.getProperty("submenu");if(P){N[N.length]=P;}}}}return N;},clearContent:function(){var R=this.getItems(),O=R.length,P=this.element,Q=this.body,V=this.header,N=this.footer,U,T,S;if(O>0){S=O-1;do{U=R[S];if(U){T=U.cfg.getProperty("submenu");if(T){this.cfg.configChangedEvent.unsubscribe(this._onParentMenuConfigChange,T);this.renderEvent.unsubscribe(this._onParentMenuRender,T);}this.removeItem(U);}}while(S--);}if(V){M.purgeElement(V);P.removeChild(V);}if(N){M.purgeElement(N);P.removeChild(N);}if(Q){M.purgeElement(Q);Q.innerHTML="";}this.activeItem=null;this._aItemGroups=[];this._aListElements=[];this._aGroupTitleElements=[];this.cfg.setProperty("width",null);},destroy:function(){this.clearContent();this._aItemGroups=null;this._aListElements=null;this._aGroupTitleElements=null;F.superclass.destroy.call(this);},setInitialFocus:function(){var N=this._getFirstEnabledItem();if(N){N.focus();}},setInitialSelection:function(){var N=this._getFirstEnabledItem();if(N){N.cfg.setProperty("selected",true);}},clearActiveItem:function(P){if(this.cfg.getProperty("showdelay")>0){this._cancelShowDelay();}var N=this.activeItem,Q,O;if(N){Q=N.cfg;if(P){N.blur();}Q.setProperty("selected",false);O=Q.getProperty("submenu");if(O){O.hide();}this.activeItem=null;}},focus:function(){if(!this.hasFocus()){this.setInitialFocus();}},blur:function(){var N;if(this.hasFocus()){N=K.getFocusedMenuItem();if(N){N.blur();}}},hasFocus:function(){return(K.getFocusedMenu()==this.getRoot());},subscribe:function(){function Q(V,U,X){var Y=U[0],W=Y.cfg.getProperty("submenu");if(W){W.subscribe.apply(W,X);}}function T(V,U,X){var W=this.cfg.getProperty("submenu");if(W){W.subscribe.apply(W,X);}}F.superclass.subscribe.apply(this,arguments);F.superclass.subscribe.call(this,"itemAdded",Q,arguments);var N=this.getItems(),S,R,O,P;if(N){S=N.length;if(S>0){P=S-1;do{R=N[P];O=R.cfg.getProperty("submenu");if(O){O.subscribe.apply(O,arguments);}else{R.cfg.subscribeToConfigEvent("submenu",T,arguments);}}while(P--);}}},initDefaultConfig:function(){F.superclass.initDefaultConfig.call(this);var N=this.cfg;N.addProperty(J.VISIBLE.key,{handler:this.configVisible,value:J.VISIBLE.value,validator:J.VISIBLE.validator});N.addProperty(J.CONSTRAIN_TO_VIEWPORT.key,{handler:this.configConstrainToViewport,value:J.CONSTRAIN_TO_VIEWPORT.value,validator:J.CONSTRAIN_TO_VIEWPORT.validator,supercedes:J.CONSTRAIN_TO_VIEWPORT.supercedes});N.addProperty(J.POSITION.key,{handler:this.configPosition,value:J.POSITION.value,validator:J.POSITION.validator,supercedes:J.POSITION.supercedes});N.addProperty(J.SUBMENU_ALIGNMENT.key,{value:J.SUBMENU_ALIGNMENT.value,suppressEvent:J.SUBMENU_ALIGNMENT.suppressEvent});N.addProperty(J.AUTO_SUBMENU_DISPLAY.key,{value:J.AUTO_SUBMENU_DISPLAY.value,validator:J.AUTO_SUBMENU_DISPLAY.validator,suppressEvent:J.AUTO_SUBMENU_DISPLAY.suppressEvent});N.addProperty(J.SHOW_DELAY.key,{value:J.SHOW_DELAY.value,validator:J.SHOW_DELAY.validator,suppressEvent:J.SHOW_DELAY.suppressEvent});N.addProperty(J.HIDE_DELAY.key,{handler:this.configHideDelay,value:J.HIDE_DELAY.value,validator:J.HIDE_DELAY.validator,suppressEvent:J.HIDE_DELAY.suppressEvent});N.addProperty(J.SUBMENU_HIDE_DELAY.key,{value:J.SUBMENU_HIDE_DELAY.value,validator:J.SUBMENU_HIDE_DELAY.validator,suppressEvent:J.SUBMENU_HIDE_DELAY.suppressEvent});N.addProperty(J.CLICK_TO_HIDE.key,{value:J.CLICK_TO_HIDE.value,validator:J.CLICK_TO_HIDE.validator,suppressEvent:J.CLICK_TO_HIDE.suppressEvent});N.addProperty(J.CONTAINER.key,{handler:this.configContainer,value:document.body,suppressEvent:J.CONTAINER.suppressEvent});N.addProperty(J.SCROLL_INCREMENT.key,{value:J.SCROLL_INCREMENT.value,validator:J.SCROLL_INCREMENT.validator,supercedes:J.SCROLL_INCREMENT.supercedes,suppressEvent:J.SCROLL_INCREMENT.suppressEvent});N.addProperty(J.MIN_SCROLL_HEIGHT.key,{value:J.MIN_SCROLL_HEIGHT.value,validator:J.MIN_SCROLL_HEIGHT.validator,supercedes:J.MIN_SCROLL_HEIGHT.supercedes,suppressEvent:J.MIN_SCROLL_HEIGHT.suppressEvent});
    N.addProperty(J.MAX_HEIGHT.key,{handler:this.configMaxHeight,value:J.MAX_HEIGHT.value,validator:J.MAX_HEIGHT.validator,suppressEvent:J.MAX_HEIGHT.suppressEvent,supercedes:J.MAX_HEIGHT.supercedes});N.addProperty(J.CLASS_NAME.key,{handler:this.configClassName,value:J.CLASS_NAME.value,validator:J.CLASS_NAME.validator,supercedes:J.CLASS_NAME.supercedes});N.addProperty(J.DISABLED.key,{handler:this.configDisabled,value:J.DISABLED.value,validator:J.DISABLED.validator,suppressEvent:J.DISABLED.suppressEvent});}});})();(function(){YAHOO.widget.MenuItem=function(K,J){if(K){if(J){this.parent=J.parent;this.value=J.value;this.id=J.id;}this.init(K,J);}};var B=YAHOO.util.Dom,C=YAHOO.widget.Module,E=YAHOO.widget.Menu,H=YAHOO.widget.MenuItem,I=YAHOO.util.CustomEvent,F=YAHOO.lang,D,A={"MOUSE_OVER":"mouseover","MOUSE_OUT":"mouseout","MOUSE_DOWN":"mousedown","MOUSE_UP":"mouseup","CLICK":"click","KEY_PRESS":"keypress","KEY_DOWN":"keydown","KEY_UP":"keyup","ITEM_ADDED":"itemAdded","ITEM_REMOVED":"itemRemoved","FOCUS":"focus","BLUR":"blur","DESTROY":"destroy"},G={"TEXT":{key:"text",value:"",validator:F.isString,suppressEvent:true},"HELP_TEXT":{key:"helptext",supercedes:["text"],suppressEvent:true},"URL":{key:"url",value:"#",suppressEvent:true},"TARGET":{key:"target",suppressEvent:true},"EMPHASIS":{key:"emphasis",value:false,validator:F.isBoolean,suppressEvent:true,supercedes:["text"]},"STRONG_EMPHASIS":{key:"strongemphasis",value:false,validator:F.isBoolean,suppressEvent:true,supercedes:["text"]},"CHECKED":{key:"checked",value:false,validator:F.isBoolean,suppressEvent:true,supercedes:["disabled","selected"]},"SUBMENU":{key:"submenu",suppressEvent:true,supercedes:["disabled","selected"]},"DISABLED":{key:"disabled",value:false,validator:F.isBoolean,suppressEvent:true,supercedes:["text","selected"]},"SELECTED":{key:"selected",value:false,validator:F.isBoolean,suppressEvent:true},"ONCLICK":{key:"onclick",suppressEvent:true},"CLASS_NAME":{key:"classname",value:null,validator:F.isString,suppressEvent:true}};H.prototype={CSS_CLASS_NAME:"yuimenuitem",CSS_LABEL_CLASS_NAME:"yuimenuitemlabel",SUBMENU_TYPE:null,_oAnchor:null,_oHelpTextEM:null,_oSubmenu:null,_oOnclickAttributeValue:null,_sClassName:null,constructor:H,index:null,groupIndex:null,parent:null,element:null,srcElement:null,value:null,browser:C.prototype.browser,id:null,destroyEvent:null,mouseOverEvent:null,mouseOutEvent:null,mouseDownEvent:null,mouseUpEvent:null,clickEvent:null,keyPressEvent:null,keyDownEvent:null,keyUpEvent:null,focusEvent:null,blurEvent:null,init:function(J,R){if(!this.SUBMENU_TYPE){this.SUBMENU_TYPE=E;}this.cfg=new YAHOO.util.Config(this);this.initDefaultConfig();var O=I.LIST,N=this.cfg,P="#",Q,K,M,L;if(F.isString(J)){this._createRootNodeStructure();N.queueProperty("text",J);}else{if(J&&J.tagName){switch(J.tagName.toUpperCase()){case"OPTION":this._createRootNodeStructure();N.queueProperty("text",J.text);N.queueProperty("disabled",J.disabled);this.value=J.value;this.srcElement=J;break;case"OPTGROUP":this._createRootNodeStructure();N.queueProperty("text",J.label);N.queueProperty("disabled",J.disabled);this.srcElement=J;this._initSubTree();break;case"LI":Q=B.getFirstChild(J);if(Q){P=Q.getAttribute("href",2);K=Q.getAttribute("target");M=Q.innerHTML;}this.srcElement=J;this.element=J;this._oAnchor=Q;N.setProperty("text",M,true);N.setProperty("url",P,true);N.setProperty("target",K,true);this._initSubTree();break;}}}if(this.element){L=(this.srcElement||this.element).id;if(!L){L=this.id||B.generateId();this.element.id=L;}this.id=L;B.addClass(this.element,this.CSS_CLASS_NAME);B.addClass(this._oAnchor,this.CSS_LABEL_CLASS_NAME);this.mouseOverEvent=this.createEvent(A.MOUSE_OVER);this.mouseOverEvent.signature=O;this.mouseOutEvent=this.createEvent(A.MOUSE_OUT);this.mouseOutEvent.signature=O;this.mouseDownEvent=this.createEvent(A.MOUSE_DOWN);this.mouseDownEvent.signature=O;this.mouseUpEvent=this.createEvent(A.MOUSE_UP);this.mouseUpEvent.signature=O;this.clickEvent=this.createEvent(A.CLICK);this.clickEvent.signature=O;this.keyPressEvent=this.createEvent(A.KEY_PRESS);this.keyPressEvent.signature=O;this.keyDownEvent=this.createEvent(A.KEY_DOWN);this.keyDownEvent.signature=O;this.keyUpEvent=this.createEvent(A.KEY_UP);this.keyUpEvent.signature=O;this.focusEvent=this.createEvent(A.FOCUS);this.focusEvent.signature=O;this.blurEvent=this.createEvent(A.BLUR);this.blurEvent.signature=O;this.destroyEvent=this.createEvent(A.DESTROY);this.destroyEvent.signature=O;if(R){N.applyConfig(R);}N.fireQueue();}},_createRootNodeStructure:function(){var J,K;if(!D){D=document.createElement("li");D.innerHTML='<a href="#"></a>';}J=D.cloneNode(true);J.className=this.CSS_CLASS_NAME;K=J.firstChild;K.className=this.CSS_LABEL_CLASS_NAME;this.element=J;this._oAnchor=K;},_initSubTree:function(){var P=this.srcElement,L=this.cfg,N,M,K,J,O;if(P.childNodes.length>0){if(this.parent.lazyLoad&&this.parent.srcElement&&this.parent.srcElement.tagName.toUpperCase()=="SELECT"){L.setProperty("submenu",{id:B.generateId(),itemdata:P.childNodes});}else{N=P.firstChild;M=[];do{if(N&&N.tagName){switch(N.tagName.toUpperCase()){case"DIV":L.setProperty("submenu",N);break;case"OPTION":M[M.length]=N;break;}}}while((N=N.nextSibling));K=M.length;if(K>0){J=new this.SUBMENU_TYPE(B.generateId());L.setProperty("submenu",J);for(O=0;O<K;O++){J.addItem((new J.ITEM_TYPE(M[O])));}}}}},configText:function(S,L,N){var K=L[0],M=this.cfg,Q=this._oAnchor,J=M.getProperty("helptext"),R="",O="",P="";if(K){if(J){R='<em class="helptext">'+J+"</em>";}if(M.getProperty("emphasis")){O="<em>";P="</em>";}if(M.getProperty("strongemphasis")){O="<strong>";P="</strong>";}Q.innerHTML=(O+K+P+R);}},configHelpText:function(L,K,J){this.cfg.refireEvent("text");},configURL:function(L,K,J){var N=K[0];if(!N){N="#";}var M=this._oAnchor;if(YAHOO.env.ua.opera){M.removeAttribute("href");}M.setAttribute("href",N);},configTarget:function(M,L,K){var J=L[0],N=this._oAnchor;if(J&&J.length>0){N.setAttribute("target",J);}else{N.removeAttribute("target");}},configEmphasis:function(L,K,J){var N=K[0],M=this.cfg;
    if(N&&M.getProperty("strongemphasis")){M.setProperty("strongemphasis",false);}M.refireEvent("text");},configStrongEmphasis:function(M,L,K){var J=L[0],N=this.cfg;if(J&&N.getProperty("emphasis")){N.setProperty("emphasis",false);}N.refireEvent("text");},configChecked:function(S,M,O){var R=M[0],K=this.element,Q=this._oAnchor,N=this.cfg,J="-checked",L=this.CSS_CLASS_NAME+J,P=this.CSS_LABEL_CLASS_NAME+J;if(R){B.addClass(K,L);B.addClass(Q,P);}else{B.removeClass(K,L);B.removeClass(Q,P);}N.refireEvent("text");if(N.getProperty("disabled")){N.refireEvent("disabled");}if(N.getProperty("selected")){N.refireEvent("selected");}},configDisabled:function(X,R,a){var Z=R[0],L=this.cfg,P=L.getProperty("submenu"),O=L.getProperty("checked"),S=this.element,V=this._oAnchor,U="-disabled",W="-checked"+U,Y="-hassubmenu"+U,M=this.CSS_CLASS_NAME+U,N=this.CSS_LABEL_CLASS_NAME+U,T=this.CSS_CLASS_NAME+W,Q=this.CSS_LABEL_CLASS_NAME+W,K=this.CSS_CLASS_NAME+Y,J=this.CSS_LABEL_CLASS_NAME+Y;if(Z){if(L.getProperty("selected")){L.setProperty("selected",false);}B.addClass(S,M);B.addClass(V,N);if(P){B.addClass(S,K);B.addClass(V,J);}if(O){B.addClass(S,T);B.addClass(V,Q);}}else{B.removeClass(S,M);B.removeClass(V,N);if(P){B.removeClass(S,K);B.removeClass(V,J);}if(O){B.removeClass(S,T);B.removeClass(V,Q);}}},configSelected:function(X,R,a){var L=this.cfg,Y=R[0],S=this.element,V=this._oAnchor,O=L.getProperty("checked"),P=L.getProperty("submenu"),U="-selected",W="-checked"+U,Z="-hassubmenu"+U,M=this.CSS_CLASS_NAME+U,N=this.CSS_LABEL_CLASS_NAME+U,T=this.CSS_CLASS_NAME+W,Q=this.CSS_LABEL_CLASS_NAME+W,K=this.CSS_CLASS_NAME+Z,J=this.CSS_LABEL_CLASS_NAME+Z;if(YAHOO.env.ua.opera){V.blur();}if(Y&&!L.getProperty("disabled")){B.addClass(S,M);B.addClass(V,N);if(P){B.addClass(S,K);B.addClass(V,J);}if(O){B.addClass(S,T);B.addClass(V,Q);}}else{B.removeClass(S,M);B.removeClass(V,N);if(P){B.removeClass(S,K);B.removeClass(V,J);}if(O){B.removeClass(S,T);B.removeClass(V,Q);}}if(this.hasFocus()&&YAHOO.env.ua.opera){V.focus();}},_onSubmenuBeforeHide:function(M,L){var N=this.parent,J;function K(){N._oAnchor.blur();J.beforeHideEvent.unsubscribe(K);}if(N.hasFocus()){J=N.parent;J.beforeHideEvent.subscribe(K);}},configSubmenu:function(V,O,R){var Q=O[0],P=this.cfg,K=this.element,T=this._oAnchor,N=this.parent&&this.parent.lazyLoad,J="-hassubmenu",L=this.CSS_CLASS_NAME+J,S=this.CSS_LABEL_CLASS_NAME+J,U,W,M;if(Q){if(Q instanceof E){U=Q;U.parent=this;U.lazyLoad=N;}else{if(typeof Q=="object"&&Q.id&&!Q.nodeType){W=Q.id;M=Q;M.lazyload=N;M.parent=this;U=new this.SUBMENU_TYPE(W,M);P.setProperty("submenu",U,true);}else{U=new this.SUBMENU_TYPE(Q,{lazyload:N,parent:this});P.setProperty("submenu",U,true);}}if(U){B.addClass(K,L);B.addClass(T,S);this._oSubmenu=U;if(YAHOO.env.ua.opera){U.beforeHideEvent.subscribe(this._onSubmenuBeforeHide);}}}else{B.removeClass(K,L);B.removeClass(T,S);if(this._oSubmenu){this._oSubmenu.destroy();}}if(P.getProperty("disabled")){P.refireEvent("disabled");}if(P.getProperty("selected")){P.refireEvent("selected");}},configOnClick:function(L,K,J){var M=K[0];if(this._oOnclickAttributeValue&&(this._oOnclickAttributeValue!=M)){this.clickEvent.unsubscribe(this._oOnclickAttributeValue.fn,this._oOnclickAttributeValue.obj);this._oOnclickAttributeValue=null;}if(!this._oOnclickAttributeValue&&typeof M=="object"&&typeof M.fn=="function"){this.clickEvent.subscribe(M.fn,((!YAHOO.lang.isUndefined(M.obj))?M.obj:this),M.scope);this._oOnclickAttributeValue=M;}},configClassName:function(M,L,K){var J=L[0];if(this._sClassName){B.removeClass(this.element,this._sClassName);}B.addClass(this.element,J);this._sClassName=J;},initDefaultConfig:function(){var J=this.cfg;J.addProperty(G.TEXT.key,{handler:this.configText,value:G.TEXT.value,validator:G.TEXT.validator,suppressEvent:G.TEXT.suppressEvent});J.addProperty(G.HELP_TEXT.key,{handler:this.configHelpText,supercedes:G.HELP_TEXT.supercedes,suppressEvent:G.HELP_TEXT.suppressEvent});J.addProperty(G.URL.key,{handler:this.configURL,value:G.URL.value,suppressEvent:G.URL.suppressEvent});J.addProperty(G.TARGET.key,{handler:this.configTarget,suppressEvent:G.TARGET.suppressEvent});J.addProperty(G.EMPHASIS.key,{handler:this.configEmphasis,value:G.EMPHASIS.value,validator:G.EMPHASIS.validator,suppressEvent:G.EMPHASIS.suppressEvent,supercedes:G.EMPHASIS.supercedes});J.addProperty(G.STRONG_EMPHASIS.key,{handler:this.configStrongEmphasis,value:G.STRONG_EMPHASIS.value,validator:G.STRONG_EMPHASIS.validator,suppressEvent:G.STRONG_EMPHASIS.suppressEvent,supercedes:G.STRONG_EMPHASIS.supercedes});J.addProperty(G.CHECKED.key,{handler:this.configChecked,value:G.CHECKED.value,validator:G.CHECKED.validator,suppressEvent:G.CHECKED.suppressEvent,supercedes:G.CHECKED.supercedes});J.addProperty(G.DISABLED.key,{handler:this.configDisabled,value:G.DISABLED.value,validator:G.DISABLED.validator,suppressEvent:G.DISABLED.suppressEvent});J.addProperty(G.SELECTED.key,{handler:this.configSelected,value:G.SELECTED.value,validator:G.SELECTED.validator,suppressEvent:G.SELECTED.suppressEvent});J.addProperty(G.SUBMENU.key,{handler:this.configSubmenu,supercedes:G.SUBMENU.supercedes,suppressEvent:G.SUBMENU.suppressEvent});J.addProperty(G.ONCLICK.key,{handler:this.configOnClick,suppressEvent:G.ONCLICK.suppressEvent});J.addProperty(G.CLASS_NAME.key,{handler:this.configClassName,value:G.CLASS_NAME.value,validator:G.CLASS_NAME.validator,suppressEvent:G.CLASS_NAME.suppressEvent});},getNextEnabledSibling:function(){var L,O,J,N,M;function K(P,Q){return P[Q]||K(P,(Q+1));}if(this.parent instanceof E){L=this.groupIndex;O=this.parent.getItemGroups();if(this.index<(O[L].length-1)){J=K(O[L],(this.index+1));}else{if(L<(O.length-1)){N=L+1;}else{N=0;}M=K(O,N);J=K(M,0);}return(J.cfg.getProperty("disabled")||J.element.style.display=="none")?J.getNextEnabledSibling():J;}},getPreviousEnabledSibling:function(){var N,P,K,J,M;function O(Q,R){return Q[R]||O(Q,(R-1));}function L(Q,R){return Q[R]?R:L(Q,(R+1));}if(this.parent instanceof E){N=this.groupIndex;P=this.parent.getItemGroups();if(this.index>L(P[N],0)){K=O(P[N],(this.index-1));
    }else{if(N>L(P,0)){J=N-1;}else{J=P.length-1;}M=O(P,J);K=O(M,(M.length-1));}return(K.cfg.getProperty("disabled")||K.element.style.display=="none")?K.getPreviousEnabledSibling():K;}},focus:function(){var N=this.parent,M=this._oAnchor,J=N.activeItem,L=this;function K(){try{if(YAHOO.env.ua.ie&&!document.hasFocus()){return ;}if(J){J.blurEvent.fire();}M.focus();L.focusEvent.fire();}catch(O){}}if(!this.cfg.getProperty("disabled")&&N&&N.cfg.getProperty("visible")&&this.element.style.display!="none"){window.setTimeout(K,0);}},blur:function(){var K=this.parent;if(!this.cfg.getProperty("disabled")&&K&&K.cfg.getProperty("visible")){var J=this;window.setTimeout(function(){try{J._oAnchor.blur();J.blurEvent.fire();}catch(L){}},0);}},hasFocus:function(){return(YAHOO.widget.MenuManager.getFocusedMenuItem()==this);},destroy:function(){var L=this.element,K,J;if(L){K=this.cfg.getProperty("submenu");if(K){K.destroy();}this.mouseOverEvent.unsubscribeAll();this.mouseOutEvent.unsubscribeAll();this.mouseDownEvent.unsubscribeAll();this.mouseUpEvent.unsubscribeAll();this.clickEvent.unsubscribeAll();this.keyPressEvent.unsubscribeAll();this.keyDownEvent.unsubscribeAll();this.keyUpEvent.unsubscribeAll();this.focusEvent.unsubscribeAll();this.blurEvent.unsubscribeAll();this.cfg.configChangedEvent.unsubscribeAll();J=L.parentNode;if(J){J.removeChild(L);this.destroyEvent.fire();}this.destroyEvent.unsubscribeAll();}},toString:function(){var K="MenuItem",J=this.id;if(J){K+=(" "+J);}return K;}};F.augmentProto(H,YAHOO.util.EventProvider);})();(function(){YAHOO.widget.ContextMenu=function(G,F){YAHOO.widget.ContextMenu.superclass.constructor.call(this,G,F);};var B=YAHOO.util.Event,E=YAHOO.widget.ContextMenu,D={"TRIGGER_CONTEXT_MENU":"triggerContextMenu","CONTEXT_MENU":(YAHOO.env.ua.opera?"mousedown":"contextmenu"),"CLICK":"click"},C={"TRIGGER":{key:"trigger",suppressEvent:true}};function A(G,F,H){this.cfg.setProperty("xy",H);this.beforeShowEvent.unsubscribe(A,H);}YAHOO.lang.extend(E,YAHOO.widget.Menu,{_oTrigger:null,_bCancelled:false,contextEventTarget:null,triggerContextMenuEvent:null,init:function(G,F){E.superclass.init.call(this,G);this.beforeInitEvent.fire(E);if(F){this.cfg.applyConfig(F,true);}this.initEvent.fire(E);},initEvents:function(){E.superclass.initEvents.call(this);this.triggerContextMenuEvent=this.createEvent(D.TRIGGER_CONTEXT_MENU);this.triggerContextMenuEvent.signature=YAHOO.util.CustomEvent.LIST;},cancel:function(){this._bCancelled=true;},_removeEventHandlers:function(){var F=this._oTrigger;if(F){B.removeListener(F,D.CONTEXT_MENU,this._onTriggerContextMenu);if(YAHOO.env.ua.opera){B.removeListener(F,D.CLICK,this._onTriggerClick);}}},_onTriggerClick:function(G,F){if(G.ctrlKey){B.stopEvent(G);}},_onTriggerContextMenu:function(H,F){if(H.type=="mousedown"&&!H.ctrlKey){return ;}var G;B.stopEvent(H);this.contextEventTarget=B.getTarget(H);this.triggerContextMenuEvent.fire(H);YAHOO.widget.MenuManager.hideVisible();if(!this._bCancelled){G=B.getXY(H);if(!YAHOO.util.Dom.inDocument(this.element)){this.beforeShowEvent.subscribe(A,G);}else{this.cfg.setProperty("xy",G);}this.show();}this._bCancelled=false;},toString:function(){var G="ContextMenu",F=this.id;if(F){G+=(" "+F);}return G;},initDefaultConfig:function(){E.superclass.initDefaultConfig.call(this);this.cfg.addProperty(C.TRIGGER.key,{handler:this.configTrigger,suppressEvent:C.TRIGGER.suppressEvent});},destroy:function(){this._removeEventHandlers();E.superclass.destroy.call(this);},configTrigger:function(G,F,I){var H=F[0];if(H){if(this._oTrigger){this._removeEventHandlers();}this._oTrigger=H;B.on(H,D.CONTEXT_MENU,this._onTriggerContextMenu,this,true);if(YAHOO.env.ua.opera){B.on(H,D.CLICK,this._onTriggerClick,this,true);}}else{this._removeEventHandlers();}}});}());YAHOO.widget.ContextMenuItem=YAHOO.widget.MenuItem;(function(){YAHOO.widget.MenuBar=function(F,E){YAHOO.widget.MenuBar.superclass.constructor.call(this,F,E);};function D(E){if(typeof E=="string"){return("dynamic,static".indexOf((E.toLowerCase()))!=-1);}}var B=YAHOO.util.Event,A=YAHOO.widget.MenuBar,C={"POSITION":{key:"position",value:"static",validator:D,supercedes:["visible"]},"SUBMENU_ALIGNMENT":{key:"submenualignment",value:["tl","bl"],suppressEvent:true},"AUTO_SUBMENU_DISPLAY":{key:"autosubmenudisplay",value:false,validator:YAHOO.lang.isBoolean,suppressEvent:true}};YAHOO.lang.extend(A,YAHOO.widget.Menu,{init:function(F,E){if(!this.ITEM_TYPE){this.ITEM_TYPE=YAHOO.widget.MenuBarItem;}A.superclass.init.call(this,F);this.beforeInitEvent.fire(A);if(E){this.cfg.applyConfig(E,true);}this.initEvent.fire(A);},CSS_CLASS_NAME:"yuimenubar",_onKeyDown:function(G,F,K){var E=F[0],L=F[1],I,J,H;if(L&&!L.cfg.getProperty("disabled")){J=L.cfg;switch(E.keyCode){case 37:case 39:if(L==this.activeItem&&!J.getProperty("selected")){J.setProperty("selected",true);}else{H=(E.keyCode==37)?L.getPreviousEnabledSibling():L.getNextEnabledSibling();if(H){this.clearActiveItem();H.cfg.setProperty("selected",true);if(this.cfg.getProperty("autosubmenudisplay")){I=H.cfg.getProperty("submenu");if(I){I.show();}}H.focus();}}B.preventDefault(E);break;case 40:if(this.activeItem!=L){this.clearActiveItem();J.setProperty("selected",true);L.focus();}I=J.getProperty("submenu");if(I){if(I.cfg.getProperty("visible")){I.setInitialSelection();I.setInitialFocus();}else{I.show();}}B.preventDefault(E);break;}}if(E.keyCode==27&&this.activeItem){I=this.activeItem.cfg.getProperty("submenu");if(I&&I.cfg.getProperty("visible")){I.hide();this.activeItem.focus();}else{this.activeItem.cfg.setProperty("selected",false);this.activeItem.blur();}B.preventDefault(E);}},_onClick:function(L,G,J){A.superclass._onClick.call(this,L,G,J);var K=G[1],M,E,F,H,I;if(K&&!K.cfg.getProperty("disabled")){M=G[0];E=B.getTarget(M);F=this.activeItem;H=this.cfg;if(F&&F!=K){this.clearActiveItem();}K.cfg.setProperty("selected",true);I=K.cfg.getProperty("submenu");if(I){if(I.cfg.getProperty("visible")){I.hide();}else{I.show();}}}},toString:function(){var F="MenuBar",E=this.id;if(E){F+=(" "+E);}return F;
    },initDefaultConfig:function(){A.superclass.initDefaultConfig.call(this);var E=this.cfg;E.addProperty(C.POSITION.key,{handler:this.configPosition,value:C.POSITION.value,validator:C.POSITION.validator,supercedes:C.POSITION.supercedes});E.addProperty(C.SUBMENU_ALIGNMENT.key,{value:C.SUBMENU_ALIGNMENT.value,suppressEvent:C.SUBMENU_ALIGNMENT.suppressEvent});E.addProperty(C.AUTO_SUBMENU_DISPLAY.key,{value:C.AUTO_SUBMENU_DISPLAY.value,validator:C.AUTO_SUBMENU_DISPLAY.validator,suppressEvent:C.AUTO_SUBMENU_DISPLAY.suppressEvent});}});}());YAHOO.widget.MenuBarItem=function(B,A){YAHOO.widget.MenuBarItem.superclass.constructor.call(this,B,A);};YAHOO.lang.extend(YAHOO.widget.MenuBarItem,YAHOO.widget.MenuItem,{init:function(B,A){if(!this.SUBMENU_TYPE){this.SUBMENU_TYPE=YAHOO.widget.Menu;}YAHOO.widget.MenuBarItem.superclass.init.call(this,B);var C=this.cfg;if(A){C.applyConfig(A,true);}C.fireQueue();},CSS_CLASS_NAME:"yuimenubaritem",CSS_LABEL_CLASS_NAME:"yuimenubaritemlabel",toString:function(){var A="MenuBarItem";if(this.cfg&&this.cfg.getProperty("text")){A+=(": "+this.cfg.getProperty("text"));}return A;}});YAHOO.register("menu",YAHOO.widget.Menu,{version:"2.5.2",build:"1076"});

    //////////////////////////////////////////////////////////////////////////////
    // CSS LOADING SECTION ///////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // Again, I'm including the entire YUI CSS here in the script to 
    // lower load times.  Instead of having to retrieve the page from
    // YAHOO's servers, it just needs to load the CSS onto the page
    // in one big push.
    
    // NOTE TO SELF: When upgrading the version for YUI CSS, make sure to replace
    // relative URL to *.png with an absolute URL.  Here's a listing of changes:
    // 1. ../../../../assets/skins/sam/sprite.png --> http://yui.yahooapis.com/2.5.2/build/assets/skins/sam/sprite.png
    // 2. *.png --> http://yui.yahooapis.com/2.5.2/build/menu/assets/skins/sam/*.png
    var sb = new Array();
    sb[sb.length] = '.yuimenubar{visibility:visible;position:static;}.yuimenu .yuimenu,.yuimenubar .yuimenu{visibility:hidden;position:absolute;top:-10000px;left:-10000px;}.yuimenubar li,.yuimenu li{list-style-type:none;}.yuimenubar ul,.yuimenu ul,.yuimenubar li,.yuimenu li,.yuimenu h6,.yuimenubar h6{margin:0;padding:0;}.yuimenuitemlabel,.yuimenubaritemlabel{text-align:left;white-space:nowrap;}.yuimenubar ul{*zoom:1;}.yuimenubar .yuimenu ul{*zoom:normal;}.yuimenubar>.bd>ul:after{content:".";display:block;clear:both;visibility:hidden;height:0;line-height:0;}.yuimenubaritem{float:left;}.yuimenubaritemlabel,.yuimenuitemlabel{display:block;}.yuimenuitemlabel .helptext{font-style:normal;display:block;margin:-1em 0 0 10em;}.yui-menu-shadow{position:absolute;visibility:hidden;z-index:-1;}.yui-menu-shadow-visible{top:2px;right:-3px;left:-3px;bottom:-3px;visibility:visible;}.hide-scrollbars *{overflow:hidden;}.hide-scrollbars select{display:none;}.yuimenu.show-scrollbars,.yuimenubar.show-scrollbars{overflow:visible;}.yuimenu.hide-scrollbars .yui-menu-shadow,.yuimenubar.hide-scrollbars .yui-menu-shadow{overflow:hidden;}.yuimenu.show-scrollbars .yui-menu-shadow,.yuimenubar.show-scrollbars .yui-menu-shadow{overflow:auto;}.yui-skin-sam .yuimenubar{font-size:93%;line-height:2;*line-height:1.9;border:solid 1px #808080;background:url(http://yui.yahooapis.com/2.5.2/build/assets/skins/sam/sprite.png) repeat-x 0 0;}.yui-skin-sam .yuimenubarnav .yuimenubaritem{border-right:solid 1px #ccc;}.yui-skin-sam .yuimenubaritemlabel{padding:0 10px;color:#000;text-decoration:none;cursor:default;border-style:solid;border-color:#808080;border-width:1px 0;*position:relative;margin:-1px 0;}.yui-skin-sam .yuimenubarnav .yuimenubaritemlabel{padding-right:20px;*display:inline-block;}.yui-skin-sam .yuimenubarnav .yuimenubaritemlabel-hassubmenu{background:url(http://yui.yahooapis.com/2.5.2/build/menu/assets/skins/sam/menubaritem_submenuindicator.png) right center no-repeat;}.yui-skin-sam .yuimenubaritem-selected{background:url(http://yui.yahooapis.com/2.5.2/build/assets/skins/sam/sprite.png) repeat-x 0 -1700px;}.yui-skin-sam .yuimenubaritemlabel-selected{border-color:#7D98B8;}.yui-skin-sam .yuimenubarnav .yuimenubaritemlabel-selected{border-left-width:1px;margin-left:-1px;*left:-1px;}.yui-skin-sam .yuimenubaritemlabel-disabled{cursor:default;color:#A6A6A6;}.yui-skin-sam .yuimenubarnav .yuimenubaritemlabel-hassubmenu-disabled{background-image:url(http://yui.yahooapis.com/2.5.2/build/menu/assets/skins/sam/menubaritem_submenuindicator_disabled.png);}.yui-skin-sam .yuimenu{font-size:93%;line-height:1.5;*line-height:1.45;}.yui-skin-sam .yuimenubar .yuimenu,.yui-skin-sam .yuimenu .yuimenu{font-size:100%;}.yui-skin-sam .yuimenu .bd{border:solid 1px #808080;background-color:#fff;}.yui-skin-sam .yuimenu ul{padding:3px 0;border-width:1px 0 0 0;border-color:#ccc;border-style:solid;}.yui-skin-sam .yuimenu ul.first-of-type{border-width:0;}.yui-skin-sam .yuimenu h6{font-weight:bold;border-style:solid;border-color:#ccc;border-width:1px 0 0 0;color:#a4a4a4;padding:3px 10px 0 10px;}.yui-skin-sam .yuimenu ul.hastitle,.yui-skin-sam .yuimenu h6.first-of-type{border-width:0;}.yui-skin-sam .yuimenu .yui-menu-body-scrolled{border-color:#ccc #808080;overflow:hidden;}.yui-skin-sam .yuimenu .topscrollbar,.yui-skin-sam .yuimenu .bottomscrollbar{height:16px;border:solid 1px #808080;background:#fff url(http://yui.yahooapis.com/2.5.2/build/assets/skins/sam/sprite.png) no-repeat 0 0;}.yui-skin-sam .yuimenu .topscrollbar{border-bottom-width:0;background-position:center -950px;}.yui-skin-sam .yuimenu .topscrollbar_disabled{background-position:center -975px;}.yui-skin-sam .yuimenu .bottomscrollbar{border-top-width:0;background-position:center -850px;}.yui-skin-sam .yuimenu .bottomscrollbar_disabled{background-position:center -875px;}.yui-skin-sam .yuimenuitem{_border-bottom:solid 1px #fff;}.yui-skin-sam .yuimenuitemlabel{padding:0 20px;color:#000;text-decoration:none;cursor:default;}.yui-skin-sam .yuimenuitemlabel .helptext{margin-top:-1.5em;*margin-top:-1.45em;}.yui-skin-sam .yuimenuitem-hassubmenu{background-image:url(http://yui.yahooapis.com/2.5.2/build/menu/assets/skins/sam/menuitem_submenuindicator.png);background-position:right center;background-repeat:no-repeat;}.yui-skin-sam .yuimenuitem-checked{background-image:url(http://yui.yahooapis.com/2.5.2/build/menu/assets/skins/sam/menuitem_checkbox.png);background-position:left center;background-repeat:no-repeat;}.yui-skin-sam .yui-menu-shadow-visible{background-color:#000;opacity:.12;*filter:alpha(opacity=12);}.yui-skin-sam .yuimenuitem-selected{background-color:#B3D4FF;}.yui-skin-sam .yuimenuitemlabel-disabled{cursor:default;color:#A6A6A6;}.yui-skin-sam .yuimenuitem-hassubmenu-disabled{background-image:url(http://yui.yahooapis.com/2.5.2/build/menu/assets/skins/sam/menuitem_submenuindicator_disabled.png);}.yui-skin-sam .yuimenuitem-checked-disabled{background-image:url(http://yui.yahooapis.com/2.5.2/build/menu/assets/skins/sam/menuitem_checkbox_disabled.png);}';

    if (!isForum)
    {
        // Modify some classes so the menus render correctly.
        sb[sb.length] = ".yui-skin-sam .yuimenubaritem-selected a:hover {background: url(http://yui.yahooapis.com/2.5.2/build/assets/skins/sam/sprite.png) repeat-x 0 -1700px; font-weight: normal;}";
        sb[sb.length] = ".yui-skin-sam .yuimenuitem-selected a:hover {background: #B3D4FF; font-weight: normal;}";
        sb[sb.length] = ".yui-skin-sam .yuimenuitem-hassubmenu a:hover {background: url(menuitem_submenuindicator.png) right center no-repeat; font-weight: normal;}"
        sb[sb.length] = ".yui-skin-sam .yuimenuitem a {font-weight: normal;}"
        sb[sb.length] = ".yui-skin-sam .yuimenubaritem a {font-weight: normal;}";
    }
    
    var newStyle = document.createElement("style");
    newStyle.type = "text/css";
    if (isSafari)
    {
        newStyle.innerText = sb.join("");
    }
    else
    {
        newStyle.innerHTML = sb.join("");
    }
    
    var head = document.getElementsByTagName("head")[0]
    if (head)
    {
        head.appendChild(newStyle);
    }
    else
    {
        // For Opera, on login.php
        return;
    }

    //////////////////////////////////////////////////////////////////////////////
    // STRINGS                                                                  //
    //////////////////////////////////////////////////////////////////////////////
    
    var strMap = 
    { 
        sEasy: "Easy",
        sMedium: "Medium",
        sHard: "Hard",
        sExpert: "Expert",
        sExpertPlus: "Expert +",
        sCoop: "Co-op",
        
        s360: "360",
        sPS2: "PS2",
        sPS3: "PS3",
        sWii: "Wii",
        sPC: "PC",
	sDS: "DS",
        sAll: "All",
        
        s1P: "1-part",
        s2P: "2-part",
        s3P: "3-part",
        s4P: "4-part",
        
        sGuitar: "Guitar",
        sBass: "Bass",
        sWTDrums: "GHWT Drums",
        sRBDrums: "RB Drums",
        sVocals: "Vocals",
        
        sGuBa: "Guitar + Bass",
        sGuVo: "Guitar + Vocals",
        sBaVo: "Bass + Vocals",
        
        sGuBaVo: "Guitar + Bass + Vocals",
        
	sGuBaDrVo: 'Guitar + Bass + Drums + Vocals',
        sGuBaWTDrVo: "Guitar + Bass + GHWT Drums + Vocals",
        sGuBaRBDrVo: "Guitar + Bass + RB Drums + Vocals",

	sDJDeck: "DJ Deck",
        
        sSolo: "Solo",
        
        // GH uniques
        sGH: "Guitar Hero",
        sGH2: "Guitar Hero II",
        sGH80s: "Guitar Hero Encore: Rocks The 80s",
        sGH3: "Guitar Hero III: Legends of Rock",
        sGHOT: "Guitar Hero: On Tour",
        sGHA: "Guitar Hero: Aerosmith",
        sGHWT: "Guitar Hero World Tour",
        sGHOTD: "Guitar Hero On Tour: Decades",
        sGHM: "Guitar Hero: Metallica",
        sGHOTMH: "Guitar Hero On Tour: Modern Hits",
        sGHSH: "Guitar Hero: Smash Hits",
        sGH5: "Guitar Hero 5",
	sGHVH: "Guitar Hero: Van Halen",
	sBH: "Band Hero",
	sBHDS: "Band Hero DS",
	sDJH: "DJ Hero",
	sGHWOR: "Guitar Hero: Warriors of Rock",
	sDJH2: "DJ Hero 2",
        
        sNAVer: "North America Version",
        sUKVer: "UK Version",
        sEUVer: "European Version", 
        
        sSingPlay: "Single Player",
        
        sGuWTDr: 'Guitar+GHWT Drums',
        sGuRBDr: 'Guitar+RB Drums',
        sBaWTDr: 'Bass+GHWT Drums',
        sBaRBDr: 'Bass+RB Drums',
        sVoWTDr: 'Vocals+GHWT Drums',
        sVoRBDr: 'Vocals+RB Drums',
        
        sGuBaWTDr: 'Guitar + Bass + GHWT Drums',
        sGuBaRBDr: 'Guitar + Bass + RB Drums',
        sGuWTDrVo: 'Guitar + GHWT Drums + Vocals',
        sGuRBDrVo: 'Guitar + RB Drums + Vocals',
        sBaWTDrVo: 'Bass + GHWT Drums + Vocals',
        sBaRBDrVo: 'Bass + RB Drums + Vocals',
        
        // RB uniques
        sRB: "Rock Band",
        sRB2: "Rock Band 2",
        sRBU: "Rock Band Unplugged",
        sTBRB: "The Beatles: Rock Band",
	sLRB: "LEGO Rock Band",
	siRB: "iRB (Rock Band Mobile)",
	sRBN2: "RBN in RB2",
	sRBN3: "RBN in RB3",
	sGDRB: "Green Day: Rock Band",
	sRB3: "Rock Band 3",
        
        sQuickplay: "Quickplay",
        sWarmup: "Warmup",
        sSurvivor: "Survivor",
        
        sDrums: "Drums",
        sGuDr: "Guitar + Drums",
        sBaDr: "Bass + Drums",
        sDrVo: "Drums + Vocals",
	sKeys: "Keys",
	sPGuitar: "Pro Guitar",
	sPBass: "Pro Bass",
	sPDrums: "Pro Drums",
	sPKeys: "Pro Keys",
        
        sGuBaDr: "Guitar + Bass + Drums",
        sGuDrVo: "Guitar + Drums + Vocals",
        sBaDrVo: "Bass + Drums + Vocals",
        
        sSolo: "Solo",
        sHarmonies: "Harmonies",

	sIPhone: "iPhone",
	sMobile: "Mobile",

	//this is here only until JC gets band tracking for RB3.
	sNY: "Nothing Yet!"
    };

    //////////////////////////////////////////////////////////////////////////////
    // DATA                                                                     //
    //////////////////////////////////////////////////////////////////////////////
    
    // Auto-generated information.
    
    var diffs = { varName: 'diff',
                  arr: [ { text: strMap.sEasy, val: 1 },
                         { text: strMap.sMedium, val: 2 },
                         { text: strMap.sHard, val: 3 },
                         { text: strMap.sExpert, val: 4 } ] };
    
    if (isGHDomain)
    {
        var ghotdVers = { varName: 'tier',
                        arr : [ { text: strMap.sNAVer, val: 6 },
                                { text: strMap.sUKVer, val: 7 },
                                { text: strMap.sEUVer, val: 8 } ] };
    
        var ghotdDiffs = { varName: 'diff',
                         arr: [ { text: strMap.sEasy, val: 1, oChild: ghotdVers },
                                { text: strMap.sMedium, val: 2, oChild: ghotdVers },
                                { text: strMap.sHard, val: 3, oChild: ghotdVers },
                                { text: strMap.sExpert, val: 4, oChild: ghotdVers } ] };

        var ghotmhVers = { varName: 'tier',
                        arr : [ { text: strMap.sNAVer, val: 14 },
                                { text: strMap.sUKVer, val: 16 },
                                { text: strMap.sEUVer, val: 15 } ] };
    
        var ghotmhDiffs = { varName: 'diff',
                            arr: [ { text: strMap.sEasy, val: 1, oChild: ghotmhVers },
                                   { text: strMap.sMedium, val: 2, oChild: ghotmhVers },
                                   { text: strMap.sHard, val: 3, oChild: ghotmhVers },
                                   { text: strMap.sExpert, val: 4, oChild: ghotmhVers } ] };

        var diffsCoop = { varName: 'diff',
                          arr: [ { text: strMap.sEasy, val: 1 },
                                 { text: strMap.sMedium, val: 2 },
                                 { text: strMap.sHard, val: 3 },
                                 { text: strMap.sExpert, val: 4 },
                                 { text: strMap.sCoop, val: 5 } ] };
                                 
        var diffsExPlus = { varName: 'diff',
                            arr: [ { text: strMap.sEasy, val: 1 },
                                   { text: strMap.sMedium, val: 2 },
                                   { text: strMap.sHard, val: 3 },
                                   { text: strMap.sExpert, val: 4 },
                                   { text: strMap.sExpertPlus, val: 6 } ] };
        
        var gh2 = { varName: 'game',
                    arr: [ { text: strMap.sPS2, val: 2, oChild: diffsCoop },
                           { text: strMap.s360, val: 3, oChild: diffsCoop },
                           { text: strMap.sAll, val: 0, oChild: diffsCoop } ] };
        
        var gh3 = { varName: 'game',
                    arr: [ { text: strMap.sPS2, val: 5, oChild: diffsCoop },
                           { text: strMap.s360, val: 6, oChild: diffsCoop },
                           { text: strMap.sPS3, val: 7, oChild: diffsCoop },
                           { text: strMap.sWii, val: 8, oChild: diffsCoop },
                           { text: strMap.sPC, val: 9, oChild: diffsCoop },
                           { text: strMap.sAll, val: 0, oChild: diffsCoop } ] };
        
        var gha = { varName: 'game',
                    arr: [ { text: strMap.sPS2, val: 11, oChild: diffsCoop },
                           { text: strMap.s360, val: 12, oChild: diffsCoop },
                           { text: strMap.sPS3, val: 13, oChild: diffsCoop },
                           { text: strMap.sWii, val: 14, oChild: diffsCoop },
                           { text: strMap.sPC, val: 15, oChild: diffsCoop },
                           { text: strMap.sAll, val: 0, oChild: diffsCoop } ] };

	var ghwt4PartsWii = { varName: 'inst',
			      arr: [ { text: strMap.sGuBaDrVo, val: 22, oChild: diffs } ] };

	var ghwt3PartsWii = { varName: 'inst',
                              arr: [ { text: strMap.sGuBaDr, val: 15, oChild: diffs },
                                     { text: strMap.sGuBaVo, val: 17, oChild: diffs },
                                     { text: strMap.sGuDrVo, val: 18, oChild: diffs },
				     { text: strMap.sBaDrVo, val: 20, oChild: diffs } ] };
    
        var ghwt2PartsWii = { varName: 'inst',
                          arr: [ { text: strMap.sGuBa, val: 6, oChild: diffs },
                                 { text: strMap.sGuDr, val: 7, oChild: diffs },
                                 { text: strMap.sGuVo, val: 9, oChild: diffs },
                                 { text: strMap.sBaDr, val: 10, oChild: diffs },
                                 { text: strMap.sBaVo, val: 11, oChild: diffs },
                                 { text: strMap.sDrVo, val: 12, oChild: diffs } ] };

	var ghwt1PartWii = { varName: 'inst',
			     arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
                                    { text: strMap.sBass, val: 2, oChild: diffs },
                                    { text: strMap.sDrums, val: 3, oChild: diffs },
                                    { text: strMap.sVocals, val: 5, oChild: diffs } ] };

	var ghwtPlatWii = { varName: 'size',
                            arr: [ { text: strMap.s1P, val: 1, oChild: ghwt1PartWii },
                                   { text: strMap.s2P, val: 2, oChild: ghwt2PartsWii },
                                   { text: strMap.s3P, val: 3, oChild: ghwt3PartsWii },
                                   { text: strMap.s4P, val: 4, oChild: ghwt4PartsWii } ] };
        
        var ghwt4Parts = { varName: 'inst',
                           arr: [ { text: strMap.sGuBaWTDrVo, val: 22, oChild: diffs },
                                  { text: strMap.sGuBaRBDrVo, val: 23, oChild: diffs } ] };
        
        var ghwt3Parts = { varName: 'inst',
                          arr: [ { text: strMap.sGuBaWTDr, val: 15, oChild: diffs },
                                 { text: strMap.sGuBaRBDr, val: 16, oChild: diffs },
                                 { text: strMap.sGuBaVo, val: 17, oChild: diffs },
                                 { text: strMap.sGuWTDrVo, val: 18, oChild: diffs },
                                 { text: strMap.sGuRBDrVo, val: 19, oChild: diffs },
                                 { text: strMap.sBaWTDrVo, val: 20, oChild: diffs },
                                 { text: strMap.sBaRBDrVo, val: 21, oChild: diffs } ] };
        
        var ghwt2Parts = { varName: 'inst',
                           arr: [ { text: strMap.sGuBa, val: 6, oChild: diffs },
                                  { text: strMap.sGuWTDr, val: 7, oChild: diffs },
                                  { text: strMap.sGuRBDr, val: 8, oChild: diffs },
                                  { text: strMap.sGuVo, val: 9, oChild: diffs },
                                  { text: strMap.sBaWTDr, val: 10, oChild: diffs },
                                  { text: strMap.sBaRBDr, val: 11, oChild: diffs },
                                  { text: strMap.sBaVo, val: 12, oChild: diffs },
                                  { text: strMap.sVoWTDr, val: 13, oChild: diffs },
                                  { text: strMap.sVoRBDr, val: 14, oChild: diffs } ] };
        
        var ghwt1Part = { varName: 'inst',
                          arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
                                 { text: strMap.sBass, val: 2, oChild: diffs },
                                 { text: strMap.sWTDrums, val: 3, oChild: diffs },
                                 { text: strMap.sRBDrums, val: 4, oChild: diffs },
                                 { text: strMap.sVocals, val: 5, oChild: diffs } ] };
        
        var ghwtPlat = { varName: 'size',
                         arr: [ { text: strMap.s1P, val: 1, oChild: ghwt1Part },
                                { text: strMap.s2P, val: 2, oChild: ghwt2Parts },
                                { text: strMap.s3P, val: 3, oChild: ghwt3Parts },
                                { text: strMap.s4P, val: 4, oChild: ghwt4Parts } ] };
        
        var ghwt = { varName: 'game',
                     arr: [ { text: strMap.sPS2, val: 16, oChild: ghwtPlat },
                            { text: strMap.s360, val: 17, oChild: ghwtPlat },
                            { text: strMap.sPS3, val: 18, oChild: ghwtPlat },
                            { text: strMap.sWii, val: 19, oChild: ghwtPlatWii },
                            { text: strMap.sPC, val: 30, oChild: ghwtPlat },
                            { text: strMap.sAll, val: 0, oChild: ghwtPlat } ] };

        var ghotd = { varName: 'size',
                      arr: [ { text: strMap.sSolo, val: '1&inst=1', oChild: ghotdDiffs },
                             { text: strMap.sCoop, val: '2&inst=6', oChild: ghotdDiffs } ] };
                             
	var ghm1PartWii = { varName: 'inst',
                          arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
                                 { text: strMap.sBass, val: 2, oChild: diffs },
                                 { text: strMap.sDrums, val: 3, oChild: diffsExPlus },
                                 { text: strMap.sVocals, val: 5, oChild: diffs } ] };

        var ghmPlatWii = { varName: 'size',
                         arr: [ { text: strMap.s1P, val: 1, oChild: ghm1PartWii },
                                { text: strMap.s2P, val: 2, oChild: ghwt2PartsWii },
                                { text: strMap.s3P, val: 3, oChild: ghwt3PartsWii },
                                { text: strMap.s4P, val: 4, oChild: ghwt4PartsWii } ] };

        var ghm1Part = { varName: 'inst',
                          arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
                                 { text: strMap.sBass, val: 2, oChild: diffs },
                                 { text: strMap.sWTDrums, val: 3, oChild: diffsExPlus },
                                 { text: strMap.sRBDrums, val: 4, oChild: diffsExPlus },
                                 { text: strMap.sVocals, val: 5, oChild: diffs } ] };

        var ghmPlat = { varName: 'size',
                         arr: [ { text: strMap.s1P, val: 1, oChild: ghm1Part },
                                { text: strMap.s2P, val: 2, oChild: ghwt2Parts },
                                { text: strMap.s3P, val: 3, oChild: ghwt3Parts },
                                { text: strMap.s4P, val: 4, oChild: ghwt4Parts } ] };
        
        var ghm = { varName: 'game',
                     arr: [ { text: strMap.sPS2, val: 21, oChild: ghmPlat },
                            { text: strMap.s360, val: 22, oChild: ghmPlat },
                            { text: strMap.sPS3, val: 23, oChild: ghmPlat },
                            { text: strMap.sWii, val: 24, oChild: ghwtPlatWii },
                            { text: strMap.sAll, val: 0, oChild: ghmPlat } ] };

        var ghotmh = { varName: 'size',
                       arr: [ { text: strMap.sGuitar, val: '1&inst=1', oChild: ghotmhDiffs },
                              { text: strMap.sBass, val: '1&inst=2', oChild: ghotmhDiffs },
                              { text: strMap.sCoop, val: '2&inst=6', oChild: ghotmhDiffs } ] };

        var ghsh = { varName: 'game',
                     arr: [ { text: strMap.sPS2, val: 26, oChild: ghmPlat },
                            { text: strMap.s360, val: 27, oChild: ghmPlat },
                            { text: strMap.sPS3, val: 28, oChild: ghmPlat },
                            { text: strMap.sWii, val: 29, oChild: ghmPlatWii },
                            { text: strMap.sAll, val: 0, oChild: ghmPlat } ] };

        // Notes to future maintainers:
        // 
        // - This code does not account for all instruments being
        //   GHWT drums, and thus does not have X+.
        // 
        // - This code orders the instruments backwards.  Doesn't matter
        //   really, but to correct this you'd need to write a lot more
        //   data.
        // 
        // (This is lazy because I just don't give much of a fuck, but
        //  I know people want this.)
	//
	// Hi I'm yksi-kaksi-kolme and I added GH:VH through GH:WoR :D Sea ya


        var jcirriIsAnIdiot1 = { varName: 'inst1',
                                 arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
                                        { text: strMap.sBass, val: 2, oChild: diffs },
                                        { text: strMap.sWTDrums, val: 3, oChild: diffs },
                                        { text: strMap.sRBDrums, val: 4, oChild: diffs },
                                        { text: strMap.sVocals, val: 5, oChild: diffs } ] };

        var jcirriIsAnIdiot2 = { varName: 'inst2',
                                 arr: [ { text: strMap.sGuitar, val: 1, oChild: jcirriIsAnIdiot1 },
                                        { text: strMap.sBass, val: 2, oChild: jcirriIsAnIdiot1 },
                                        { text: strMap.sWTDrums, val: 3, oChild: jcirriIsAnIdiot1 },
                                        { text: strMap.sRBDrums, val: 4, oChild: jcirriIsAnIdiot1 },
                                        { text: strMap.sVocals, val: 5, oChild: jcirriIsAnIdiot1 } ] };

        var jcirriIsAnIdiot3 = { varName: 'inst3',
                                 arr: [ { text: strMap.sGuitar, val: 1, oChild: jcirriIsAnIdiot2 },
                                        { text: strMap.sBass, val: 2, oChild: jcirriIsAnIdiot2 },
                                        { text: strMap.sWTDrums, val: 3, oChild: jcirriIsAnIdiot2 },
                                        { text: strMap.sRBDrums, val: 4, oChild: jcirriIsAnIdiot2 },
                                        { text: strMap.sVocals, val: 5, oChild: jcirriIsAnIdiot2 } ] };

        var jcirriIsAnIdiot4 = { varName: 'inst4',
                                 arr: [ { text: strMap.sGuitar, val: 1, oChild: jcirriIsAnIdiot3 },
                                        { text: strMap.sBass, val: 2, oChild: jcirriIsAnIdiot3 },
                                        { text: strMap.sWTDrums, val: 3, oChild: jcirriIsAnIdiot3 },
                                        { text: strMap.sRBDrums, val: 4, oChild: jcirriIsAnIdiot3 },
                                        { text: strMap.sVocals, val: 5, oChild: jcirriIsAnIdiot3 } ] };

        var gh5plat = { varName: 'size',
                        arr: [ { text: strMap.s1P, val: 1, oChild: jcirriIsAnIdiot1 },
                               { text: strMap.s2P, val: 2, oChild: jcirriIsAnIdiot2 },
                               { text: strMap.s3P, val: 3, oChild: jcirriIsAnIdiot3 },
                               { text: strMap.s4P, val: 4, oChild: jcirriIsAnIdiot4 } ] };

        var gh5 = { varName: 'game',
                    arr: [ { text: strMap.sPS2, val: 31, oChild: gh5plat },
                           { text: strMap.s360, val: 32, oChild: gh5plat },
                           { text: strMap.sPS3, val: 33, oChild: gh5plat },
                           { text: strMap.sWii, val: 34, oChild: gh5plat },
                           { text: strMap.sAll, val: 0, oChild: gh5plat } ] };

	var ghvh = { varName: 'game',
		     arr: [ { text: strMap.sPS2, val: '35&platform=1', oChild: ghmPlat },
                            { text: strMap.s360, val: '36&platform=2', oChild: ghmPlat },
                            { text: strMap.sPS3, val: '37&platform=3', oChild: ghmPlat },
                            { text: strMap.sWii, val: '38&platform=4', oChild: ghmPlatWii },
                            { text: strMap.sAll, val: '0&platform=0', oChild: ghmPlat } ] };


	var bhdsplat = { varName: 'inst',
			 arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
				{ text: strMap.sBass, val: 2, oChild: diffs },
				{ text: strMap.sDrums, val: 3, oChild: diffs },
				{ text: strMap.sVocals, val: 5, oChild: diffs } ] };

	var bh = { varName: 'game',
		   arr: [ { text: strMap.sPS2, val: 39, oChild: gh5plat },
                          { text: strMap.s360, val: 40, oChild: gh5plat },
                          { text: strMap.sPS3, val: 41, oChild: gh5plat },
                          { text: strMap.sWii, val: 42, oChild: gh5plat },
                          { text: strMap.sAll, val: 0, oChild: gh5plat } ] };

	var djhsize = { varName: 'size',
			arr: [ { text: strMap.sDJDeck, val: '1&inst=1', oChild: diffs },
			       { text: strMap.sGuitar, val: '1&inst=2', oChild: diffs },
			       { text: strMap.sCoop, val: '2&inst=6', oChild: diffs } ] }; 

	var djh = { varName: 'game',
		   arr: [ { text: strMap.sPS2, val: 44, oChild: djhsize },
                          { text: strMap.s360, val: 45, oChild: djhsize },
                          { text: strMap.sPS3, val: 46, oChild: djhsize },
                          { text: strMap.sWii, val: 47, oChild: djhsize },
                          { text: strMap.sAll, val: 0, oChild: djhsize } ] };

	var ghwor = { varName: 'game',
		   arr: [ { text: strMap.s360, val: 49, oChild: gh5plat },
                          { text: strMap.sPS3, val: 50, oChild: gh5plat },
                          { text: strMap.sWii, val: 51, oChild: gh5plat },
                          { text: strMap.sAll, val: 0, oChild: gh5plat } ] };

	var djh2size = { varName: 'size',
			arr: [ { text: strMap.sDJDeck, val: '1&inst=1', oChild: diffs },
			       { text: strMap.sVocals, val: '1&inst=2', oChild: diffs },
			       { text: strMap.sCoop, val: '2&inst=6', oChild: diffs } ] };

	var djh2 = { varName: 'game',
                   arr: [ { text: strMap.s360, val: '53&platform=2', oChild: djh2size },
                          { text: strMap.sPS3, val: '54&platform=3', oChild: djh2size },
                          { text: strMap.sWii, val: '55&platform=4', oChild: djh2size },
                          { text: strMap.sAll, val: '0&platform=0', oChild: djh2size } ] };

        var ghGames = { varName: 'group',
                        arr: [ { text: strMap.sGH, val: 1, oChild: diffs },
                               { text: strMap.sGH2, val: 2, oChild: gh2 },
                               { text: strMap.sGH80s, val: 3, oChild: diffsCoop },
                               { text: strMap.sGH3, val: 4, oChild: gh3 },
                               { text: strMap.sGHOT, val: 5, oChild: diffs },
                               { text: strMap.sGHA, val: 6, oChild: gha },
                               { text: strMap.sGHWT, val: 7, oChild: ghwt },
                               { text: strMap.sGHOTD, val: 8, oChild: ghotd },
                               { text: strMap.sGHM, val: 9, oChild: ghm },
                               { text: strMap.sGHOTMH, val: 10, oChild: ghotmh },
                               { text: strMap.sGHSH, val: 11, oChild: ghsh },
                               { text: strMap.sGH5, val: 12, oChild: gh5 },
			       { text: strMap.sGHVH, val: 13, oChild: ghvh },
			       { text: strMap.sBH, val: 14, oChild: bh },
			       { text: strMap.sBHDS, val: '15&game=43&platform=6&size=1&inst1=1', oChild: bhdsplat },
			       { text: strMap.sDJH, val: 16, oChild: djh },
			       { text: strMap.sGHWOR, val: 18, oChild: ghwor },
			       { text: strMap.sDJH2, val: 19, oChild: djh2 } ] };
                                    
        var ghGamesTruncated = { varName: 'group',
                                 arr: [ { text: strMap.sGH, val: 1, oChild: diffs },
                                        { text: strMap.sGH2, val: 2, oChild: gh2 },
                                        { text: strMap.sGH80s, val: 3, oChild: diffsCoop },
                                        { text: strMap.sGH3, val: 4, oChild: gh3 },
                                        { text: strMap.sGHOT, val: 5, oChild: diffs },
                                        { text: strMap.sGHA, val: 6, oChild: gha } ] };

        var ghCompareUsers = { varName: 'user',
                               arr: [ { text: "Top Scores", val: 'top', oChild: ghGamesTruncated },
                                      { text: "4* Cutoffs", val: '4star', oChild: ghGamesTruncated },
                                      { text: "5* Cutoffs", val: '5star', oChild: ghGamesTruncated },
                                      { text: "6* Cutoffs", val: '6star', oChild: ghGamesTruncated },
                                      { text: "7* Cutoffs", val: '7star', oChild: ghGamesTruncated },
                                      { text: "8* Cutoffs", val: '8star', oChild: ghGamesTruncated },
                                      { text: "9* Cutoffs", val: '9star', oChild: ghGamesTruncated } ] };

        var ghSongStats = { varName: 'stat',
                            arr: [ { text: "4-Star Cutoff", val: 1, oChild: ghGamesTruncated },
                                   { text: "5-Star Cutoff", val: 2, oChild: ghGamesTruncated },
                                   { text: "Total Notes", val: 3, oChild: ghGamesTruncated },
                                   { text: "All Cutoffs", val: 4, oChild: ghGamesTruncated } ] };
    }
    else
    {
        var rb3Parts = { varName: 'group',
                          arr: [ { text: strMap.sGuBaDr, val: 11, oChild: diffs },
                                 { text: strMap.sGuBaVo, val: 12, oChild: diffs },
                                 { text: strMap.sGuDrVo, val: 13, oChild: diffs },
                                 { text: strMap.sBaDrVo, val: 14, oChild: diffs } ] };
    
        var rb2Parts = { varName: 'group',
                         arr: [ { text: strMap.sGuBa, val: 5, oChild: diffs },
                                { text: strMap.sGuDr, val: 6, oChild: diffs },
                                { text: strMap.sGuVo, val: 7, oChild: diffs },
                                { text: strMap.sBaDr, val: 8, oChild: diffs },
                                { text: strMap.sBaVo, val: 9, oChild: diffs },
                                { text: strMap.sDrVo, val: 10, oChild: diffs } ] };
    
        var rb1Part = { varName: 'group',
                        arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
                               { text: strMap.sBass, val: 2, oChild: diffs },
                               { text: strMap.sDrums, val: 3, oChild: diffs },
                               { text: strMap.sVocals, val: 4, oChild: diffs } ] };
    
        var rbPlat = { varName: 'size',
                       arr: [ { text: strMap.s1P, val: 1, oChild: rb1Part },
                              { text: strMap.s2P, val: 2, oChild: rb2Parts },
                              { text: strMap.s3P, val: 3, oChild: rb3Parts },
                              { text: strMap.s4P, val: 4, oChild: diffs } ] };
        
        var rb1 = { varName: 'platform',
                    arr: [ { text: strMap.sPS2, val: 1, oChild: rbPlat },
                           { text: strMap.s360, val: 2, oChild: rbPlat },
                           { text: strMap.sPS3, val: 3, oChild: rbPlat },
                           { text: strMap.sWii, val: 4, oChild: rbPlat } ] };
                    
        var rb2 = { varName: 'platform',
                    arr: [ { text: strMap.sPS2, val: 1, oChild: rbPlat },
                           { text: strMap.s360, val: 2, oChild: rbPlat },
                           { text: strMap.sPS3, val: 3, oChild: rbPlat },
                           { text: strMap.sWii, val: 4, oChild: rbPlat } ] };
        
        var rbu = { varName: 'group',
                    arr: [ { text: strMap.sQuickplay, val: 1, oChild: diffs },
                           { text: strMap.sWarmup, val: 2, oChild: diffs },
                           { text: strMap.sSurvivor, val: 3, oChild: diffs } ] };

        var tbrbVoxType = { varName: 'vox',
                            arr: [ { text: strMap.sSolo, val: 'solo', oChild: diffs },
                                   { text: strMap.sHarmonies, val: 'harmonies', oChild: diffs } ] };

        var tbrb3Parts = { varName: 'group',
                           arr: [ { text: strMap.sGuBaDr, val: 11, oChild: diffs },
                                  { text: strMap.sGuBaVo, val: 12, oChild: tbrbVoxType },
                                  { text: strMap.sGuDrVo, val: 13, oChild: tbrbVoxType },
                                  { text: strMap.sBaDrVo, val: 14, oChild: tbrbVoxType } ] };
    
        var tbrb2Parts = { varName: 'group',
                          arr: [ { text: strMap.sGuBa, val: 5, oChild: diffs },
                                 { text: strMap.sGuDr, val: 6, oChild: diffs },
                                 { text: strMap.sGuVo, val: 7, oChild: tbrbVoxType },
                                 { text: strMap.sBaDr, val: 8, oChild: diffs },
                                 { text: strMap.sBaVo, val: 9, oChild: tbrbVoxType },
                                 { text: strMap.sDrVo, val: 10, oChild: tbrbVoxType } ] };
    
        var tbrb1Part = { varName: 'group',
                          arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
                                 { text: strMap.sBass, val: 2, oChild: diffs },
                                 { text: strMap.sDrums, val: 3, oChild: diffs },
                                 { text: strMap.sVocals, val: 4, oChild: tbrbVoxType } ] };

        var tbrbPlat = { varName: 'size',
                         arr: [ { text: strMap.s1P, val: 1, oChild: tbrb1Part },
                                { text: strMap.s2P, val: 2, oChild: tbrb2Parts },
                                { text: strMap.s3P, val: 3, oChild: tbrb3Parts },
                                { text: strMap.s4P, val: 4, oChild: tbrbVoxType } ] };
        
        var tbrb = { varName: 'platform',
                     arr: [ { text: strMap.s360, val: 2, oChild: tbrbPlat },
                            { text: strMap.sPS3, val: 3, oChild: tbrbPlat },
                            { text: strMap.sWii, val: 4, oChild: tbrbPlat } ] };

	var lrb = { varName: 'platform',
		    arr: [ { text: strMap.s360, val: 2, oChild: rbPlat },
			   { text: strMap.sPS3, val: 3, oChild: rbPlat },
			   { text: strMap.sWii, val: 4, oChild: rbPlat },
			   { text: strMap.sDS, val: 6, oChild: diffs } ] };

	var diffsMobile = { varName: 'diff',
			    arr: [ { text: strMap.sEasy, val: 1 },
				   { text: strMap.sMedium, val: 2 },
				   { text: strMap.sHard, val: 3 } ] };

	var irbPart = { varName: 'group',
                        arr: [ { text: strMap.sGuitar, val: 1, oChild: diffsMobile },
                               { text: strMap.sBass, val: 2, oChild: diffsMobile },
                               { text: strMap.sDrums, val: 3, oChild: diffsMobile },
                               { text: strMap.sVocals, val: 4, oChild: diffsMobile } ] };

	var irb = { varName: 'platform',
		    arr: [ { text: strMap.sIPhone, val: 8, oChild: irbPart },
			   { text: strMap.sMobile, val: 9, oChild: irbPart } ] }; 

	var rbn = { varName: 'platform',
		    arr: [ { text: strMap.s360, val: 2, oChild: rbPlat },
			   { text: strMap.sPS3, val: 3, oChild: rbPlat },
			   { text: strMap.sWii, val: 4, oChild: rbPlat } ] };

	var gdrb = { varName: 'platform',
		     arr: [ { text: strMap.s360, val: 2, oChild: tbrbPlat },
			    { text: strMap.sPS3, val: 3, oChild: tbrbPlat },
			    { text: strMap.sWii, val: 4, oChild: tbrbPlat } ] };

	var rb31PartRedundant = { varName: 'inst1',
				  arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
                              		 { text: strMap.sBass, val: 2, oChild: diffs },
                               		 { text: strMap.sDrums, val: 3, oChild: diffs },
                               		 { text: strMap.sVocals, val: 4, oChild: diffs },
					 { text: strMap.sHarmonies, val: 5, oChild: diffs },
			      	 	 { text: strMap.sKeys, val: 6, oChild: diffs },
			       		 { text: strMap.sPGuitar, val: 7, oChild: diffs },
			        	 { text: strMap.sPBass, val: 8, oChild: diffs },
					 { text: strMap.sPDrums, val: 9, oChild: diffs },
			         	 { text: strMap.sPKeys, val: 10, oChild: diffs } ] };

	var rb32Parts = { varName: 'inst2',
			  arr: [ { text: strMap.sGuitar, val: 1, oChild: rb31PartRedundant },
                                 { text: strMap.sBass, val: 2, oChild: rb31PartRedundant },
                                 { text: strMap.sDrums, val: 3, oChild: rb31PartRedundant },
                                 { text: strMap.sVocals, val: 4, oChild: rb31PartRedundant },
				 { text: strMap.sHarmonies, val: 5, oChild: rb31PartRedundant },
			         { text: strMap.sKeys, val: 6, oChild: rb31PartRedundant },
			         { text: strMap.sPGuitar, val: 7, oChild: rb31PartRedundant },
			         { text: strMap.sPBass, val: 8, oChild: rb31PartRedundant },
				 { text: strMap.sPDrums, val: 9, oChild: rb31PartRedundant },
			         { text: strMap.sPKeys, val: 10, oChild: rb31PartRedundant } ] };

	var rb33Parts = { varName: 'inst3',
			  arr: [ { text: strMap.sGuitar, val: 1, oChild: rb32Parts },
                                 { text: strMap.sBass, val: 2, oChild: rb32Parts },
                                 { text: strMap.sDrums, val: 3, oChild: rb32Parts },
                                 { text: strMap.sVocals, val: 4, oChild: rb32Parts },
				 { text: strMap.sHarmonies, val: 5, oChild: rb32Parts },
			         { text: strMap.sKeys, val: 6, oChild: rb32Parts },
			         { text: strMap.sPGuitar, val: 7, oChild: rb32Parts },
			         { text: strMap.sPBass, val: 8, oChild: rb32Parts },
				 { text: strMap.sPDrums, val: 9, oChild: rb32Parts },
			         { text: strMap.sPKeys, val: 10, oChild: rb32Parts } ] };

	var rb34Parts = { varName: 'inst4',
			  arr: [ { text: strMap.sGuitar, val: 1, oChild: rb33Parts },
                                 { text: strMap.sBass, val: 2, oChild: rb33Parts },
                                 { text: strMap.sDrums, val: 3, oChild: rb33Parts },
                                 { text: strMap.sVocals, val: 4, oChild: rb33Parts },
				 { text: strMap.sHarmonies, val: 5, oChild: rb33Parts },
			         { text: strMap.sKeys, val: 6, oChild: rb33Parts },
			         { text: strMap.sPGuitar, val: 7, oChild: rb33Parts },
			         { text: strMap.sPBass, val: 8, oChild: rb33Parts },
				 { text: strMap.sPDrums, val: 9, oChild: rb33Parts },
			         { text: strMap.sPKeys, val: 10, oChild: rb33Parts } ] };

	var rb31Part = { varName: 'group',
                         arr: [ { text: strMap.sGuitar, val: 1, oChild: diffs },
                                { text: strMap.sBass, val: 2, oChild: diffs },
                                { text: strMap.sDrums, val: 3, oChild: diffs },
                                { text: strMap.sVocals, val: 4, oChild: tbrbVoxType },
			        { text: strMap.sKeys, val: 24, oChild: diffs },
			        { text: strMap.sPGuitar, val: 25, oChild: diffs },
			        { text: strMap.sPBass, val: 26, oChild: diffs },
				{ text: strMap.sPDrums, val: 27, oChild: diffs },
			        { text: strMap.sPKeys, val: 28, oChild: diffs } ] };

	var rb3Plat = { varName: 'size',
                        arr: [ { text: strMap.s1P, val: 1, oChild: rb31Part },
                               { text: strMap.s2P, val: 2, oChild: rb32Parts },
                               { text: strMap.s3P, val: 3, oChild: rb33Parts },
                               { text: strMap.s4P, val: 4, oChild: rb34Parts } ] };

	var rb3 = { varName: 'platform',
		    arr: [ { text: strMap.s360, val: 2, oChild: rb3Plat },
			   { text: strMap.sPS3, val: 3, oChild: rb3Plat },
		           { text: strMap.sWii, val: 4, oChild: rb3Plat } ] };

        var rbGames = { varName: 'game',
                        arr: [ { text: strMap.sRB, val: 1, oChild: rb1 },
                               { text: strMap.sRB2, val: 2, oChild: rb2 },
			       { text: strMap.sRBN2, val: 7, oChild: rbn },
			       { text: strMap.sRBN3, val: 10, oChild: rbn },
                               { text: strMap.sRBU, val: 3, oChild: rbu },
                               { text: strMap.sTBRB, val: 4, oChild: tbrb },
			       { text: strMap.sLRB, val: 5, oChild: lrb },
			       { text: strMap.siRB, val: 6, oChild: irb },
			       { text: strMap.sGDRB, val: 8, oChild: gdrb },
			       { text: strMap.sRB3, val: 9, oChild: rb3 } ] };
    }

                            
    // This code isn't auto-generated, but it is used more than once.
    var forumTools = { text: "Forum Tools", submenu: { id: "frmtools", itemdata: [
                                    { text: "Inbox", url: httpForumRoot + "privmsg.php?folder=inbox" },
                                    { text: "Search", url: httpForumRoot + "search.php" },
                                    { text: "Memberlist", url: httpForumRoot + "memberlist.php" },
                                    { text: "Profile", url: httpForumRoot + "profile.php?mode=editprofile" },
                                    { text: "Usergroups", url: httpForumRoot + "groupcp.php" },
                                ] }
                        };
    
    if (isGHDomain)
    {
        var ghShForums = { text: "Scorehero", url: httpForumRoot + "index.php?c=6", submenu: { id: "frmsh", itemdata: [
                                { text: "Scorehero Announcements", url: httpForumRoot + "viewforum.php?f=81"},
                                { text: "Website Discussion", url: httpForumRoot + "viewforum.php?f=1"},
                                { text: "Wiki Brainstorming", url: httpForumRoot + "viewforum.php?f=74"},
                                { text: "Bug Reports", url: httpForumRoot + "viewforum.php?f=10"}
                            ] }
                        };

        var ghGhForums = { text: strMap.sGH, url: httpForumRoot + "index.php?c=3", submenu: { id: "frmgh", itemdata: [
                                { text: "Official Guitar Hero News", url: httpForumRoot + "viewforum.php?f=47", submenu: { id: "frmoghn", itemdata: [
                                        { text: "DLC Archive", url: httpForumRoot + "viewforum.php?f=82" }
                                    ] }
                                },
                                { text: "Technique, Style, Gameplay", url: httpForumRoot + "viewforum.php?f=77", submenu: { id: "frmtsg", itemdata: [
                                        { text: "Guitar/Bass", url: httpForumRoot + "viewforum.php?f=3" },
                                        { text: "Drums", url: httpForumRoot + "viewforum.php?f=78" },
                                        { text: "Vocals", url: httpForumRoot + "viewforum.php?f=79" },
                                        { text: "Band/Multitasking", url: httpForumRoot + "viewforum.php?f=80" }
                                    ] }
                                },
                                { text: "*****", url: httpForumRoot + "viewforum.php?f=4" },
                                { text: "Rivalries", url: httpForumRoot + "viewforum.php?f=15" },
                                { text: "Leagues", url: httpForumRoot + "viewforum.php?f=32", submenu: { id: "frmghlgs", itemdata: [
                                        { text: "Past Seasons", url: httpForumRoot + "viewforum.php?f=35" }
                                    ] }
                                },
                                { text: "Tournaments and Events", url: httpForumRoot + "viewforum.php?f=18", submenu: { id: "frmghtae", itemdata: [
                                        { text: "Get-togethers", url: httpForumRoot + "viewforum.php?f=59" }
                                    ] }
                                },
                                { text: "Will Rock For Food", url: httpForumRoot + "viewforum.php?f=76" },
                                { text: "Misc GH Game Discussion", url: httpForumRoot + "viewforum.php?f=5" }
                            ] }
                        };

	var ghDjForums = { text: strMap.sDJH, url: httpForumRoot + "index.php?c=10", submenu: { id: "frmdj", itemdata: [
                                { text: "Official DJ Hero News", url: httpForumRoot + "viewforum.php?f=90" },
                                { text: "DJ Technique, Style, Gameplay", url: httpForumRoot + "viewforum.php?f=86" },
                                { text: "DJ Accomplishments", url: httpForumRoot + "viewforum.php?f=87" },
                                { text: "Misc DJ Hero Discussion", url: httpForumRoot + "viewforum.php?f=88" }
                            ] }
                        };


        var ghGenForums = { text: "General", url: httpForumRoot + "index.php?c=2", submenu: { id: "frmgen", itemdata: [
				{ text: "Music Discussion", url: httpForumRoot + "viewforum.php?f=89" },
                                { text: "Gaming Discussion (Non-Music Games)", url: httpForumRoot + "viewforum.php?f=19" },
                                { text: "Other Music Games", url: httpForumRoot + "viewforum.php?f=9", submenu: { id: "frmgenomg", itemdata: [
                                        { text: "Rock Revolution", url: httpForumRoot + "viewforum.php?f=75" },
                                        { text: "Dance Dance Revolution", url: httpForumRoot + "viewforum.php?f=7" },
                                        { text: "Popn'Music and Beatmania", url: httpForumRoot + "viewforum.php?f=8" }
                                    ] }
                                },
                                { text: "General Chat", url: httpForumRoot + "viewforum.php?f=2" },
                                { text: "Thread Hall of Fame", url: httpForumRoot + "viewforum.php?f=31" }
                            ] }
                        }

	var ghSpForums = { text: "Star Power Archive", url: httpForumRoot + "index.php?c=11", submenu: { id: "frmspf", itemdata: [
				{ text: "Star Power FAQs [Archive]", url: httpForumRoot + "viewforum.php?f=85", submenu: { id: "frmspfa", itemdata: [
                               		{ text: strMap.sGH, url: httpForumRoot + "viewforum.php?f=26", submenu: { id: "frmhspfgh", itemdata: [
                                        	[ { text: strMap.sSingPlay } ],
                                        	[
                                            	    { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=11" },
                                            	    { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=12" },
                                            	    { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=13" },
                                            	    { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=14" }
                                        	]
                                    	] }
                                	},
                                	{ text: "Guitar Hero II (PS2)", url: httpForumRoot + "viewforum.php?f=24", submenu: { id: "frmhspfgh2ps2", itemdata: [
                                        	[ { text: strMap.sSingPlay } ],
                                        	[
                                            	    { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=20" },
                                            	    { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=21" },
                                            	    { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=22" },
                                            	    { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=23" }
                                        	],
                                        	[ { text: strMap.sCoop } ],
                                        	[
                                            	    { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=27" },
                                            	    { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=28" },
                                            	    { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=29" },
                                            	    { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=30" }
                                        	]
                                    	] }
                                	},
                                	{ text: "Guitar Hero II (XBox 360)", url: httpForumRoot + "viewforum.php?f=25", submenu: { id: "frmhspfgh2360", itemdata: [
                                        	[ { text: strMap.sSingPlay } ], 
                                        	[
                                            	    { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=37" },
                                            	    { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=38" },
                                            	    { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=39" },
                                            	    { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=40" }
                                        	],
                                        	[{ text: strMap.sCoop } ], 
                                        	[
                                            	   { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=41" },
                                            	   { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=42" },
                                            	   { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=43" },
                                            	   { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=44" }
                                        	]
                                    	] }
                                	},
                                	{ text: strMap.sGH80s, url: httpForumRoot + "viewforum.php?f=48", submenu: { id: "frmhspfgh80s", itemdata: [
                                        	[ { text: strMap.sSingPlay } ], 
                                        	[
                                         	    { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=50" },
                                          	    { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=51" },
                                          	    { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=52" },
                                          	    { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=53" }
                                        	],
                                        	[ { text: strMap.sCoop } ], 
                                        	[
                                         	    { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=54" },
                                         	    { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=55" },
                                         	    { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=56" },
                                         	    { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=57" }
                                        	]
                                    	] }
                                	},
                                	{ text: "Guitar Hero III", url: httpForumRoot + "viewforum.php?f=62", submenu: { id: "frmhspfgh3", itemdata: [
                                        	[ { text: strMap.sSingPlay } ],
                                        	[
                                            	    { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=63" },
                                            	    { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=64" },
                                            	    { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=65" },
                                            	    { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=66" }
                                        	],
                                        	[ { text: strMap.sCoop } ], 
                                        	[
                                            	    { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=67" },
                                            	    { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=68" },
                                            	    { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=69" },
                                            	    { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=70" }
                                        	]
                                    	] }
                                	}
                            	] } } 
			] }
                    	};

    }
    else
    {
        var rbShForums = { text: "Scorehero", url: httpForumRoot + "index.php?c=3", submenu: { id: "frmsh", itemdata: [
                                { text: "Website Discussion", url: httpForumRoot + "viewforum.php?f=1009"},
                                { text: "Wiki Brainstorming", url: httpForumRoot + "viewforum.php?f=1044"},
                                { text: "Bug Reports", url: httpForumRoot + "viewforum.php?f=1010"}
                            ] }
                        };

        var rbRbForums = { text: "Rock Band", url: httpForumRoot + "index.php?c=2", submenu: { id: "frmrb", itemdata: [
                                { text: "Official Rock Band News", url: httpForumRoot + "viewforum.php?f=1012" },
                                { text: "Technique, Style, and Gameplay", url: httpForumRoot + "viewforum.php?f=1001", submenu: { id: "frmrbtsg", itemdata: [
                                        { text: "Guitar/Bass", url: httpForumRoot + "viewforum.php?f=1002" },
                                        { text: strMap.sDrums, url: httpForumRoot + "viewforum.php?f=1003" },
                                        { text: strMap.sVocals, url: httpForumRoot + "viewforum.php?f=1004" },
					{ text: strMap.sKeys, url: httpForumRoot + "viewforum.php?f=1048" },
                                        { text: "Band/Multitasking", url: httpForumRoot + "viewforum.php?f=1042" },
					{ text: "Handheld Games", url: httpForumRoot + "viewforum.php?f=1045" }
                                    ] }
                                },
                                { text: "Accomplishments", url: httpForumRoot + "viewforum.php?f=1005" },
                                { text: "Rivalries", url: httpForumRoot + "viewforum.php?f=1006" },
                                { text: "Leagues", url: httpForumRoot + "viewforum.php?f=1041", submenu: { id: "frmrblgs", itemdata: [
					{ text: "Past Seasons", url: httpForumRoot + "viewforum.php?f=1043" }
				    ] }
				},
                                { text: "Tournaments and Events", url: httpForumRoot + "viewforum.php?f=1007" },
                                { text: "Will Rock For Food", url: httpForumRoot + "viewforum.php?f=1040" },
                                { text: "Misc RB Game Discussion", url: httpForumRoot + "viewforum.php?f=1008", submenu: { id: "frmrbmgd", itemdata: [
					{ text: "Rock Band Network", url: httpForumRoot + "viewforum.php?f=1047"}
				    ] }
				},
                            ] }
                        };

        var rbModForums = { text: "Homebrew Projects", url: httpForumRoot + "index.php?c=5", submenu: { id: "frmhp", itemdata: [
                                { text: "Hardware", url: httpForumRoot + "viewforum.php?f=1038" },
                                { text: "Software", url: httpForumRoot + "viewforum.php?f=1039" }
                            ] }
                        };

        var rbOdForums = { text: "Overdrive FAQs", url: httpForumRoot + "index.php?c=4", submenu: { id: "frmodf", itemdata: [
                                { text: strMap.sGuitar, url: httpForumRoot + "viewforum.php?f=1013", submenu: { id: "frmodfgtr", itemdata: [
                                        { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=1018" },
                                        { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=1019" },
                                        { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=1020" },
                                        { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=1021" }
                                    ] }
                                },
                                { text: strMap.sBass, url: httpForumRoot + "viewforum.php?f=1014", submenu: { id: "frmodfbss", itemdata: [
                                        { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=1022" },
                                        { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=1023" },
                                        { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=1024" },
                                        { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=1025" }
                                    ] }
                                },,
                                { text: strMap.sDrums, url: httpForumRoot + "viewforum.php?f=1015", submenu: { id: "frmodfdrm", itemdata: [
                                        { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=1026" },
                                        { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=1027" },
                                        { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=1028" },
                                        { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=1029" }
                                    ] }
                                },
                                { text: strMap.sVocals, url: httpForumRoot + "viewforum.php?f=1016" },
                                { text: "Full Band", url: httpForumRoot + "viewforum.php?f=1017", submenu: { id: "frmodffb", itemdata: [
                                        { text: strMap.sEasy, url: httpForumRoot + "viewforum.php?f=1034" },
                                        { text: strMap.sMedium, url: httpForumRoot + "viewforum.php?f=1035" },
                                        { text: strMap.sHard, url: httpForumRoot + "viewforum.php?f=1036" },
                                        { text: strMap.sExpert, url: httpForumRoot + "viewforum.php?f=1037" }
                                    ] }
                                }
                            ] }
                        };
    }

    //////////////////////////////////////////////////////////////////////////////
    // MENU CREATION SECTION /////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // Remove the old menu bar
    var titleCell;
    if (isGHDomain)
    {
        var titleImage;
        var images = document.getElementsByTagName("img");
        for (var a = 0; a < images.length; a++)
        {
            if (images[a].src == "http://www.scorehero.com/images/title2.gif" 
                    && images[a].alt == "ScoreHero")
            {
                titleImage = images[a];
                break;
            }
        }
        
        titleCell = titleImage.parentNode;
        if (titleCell.tagName == 'A')
        {
            titleCell = titleCell.parentNode;
        }
    }
    else
    {
        if (isForum)
        {    
            titleCell = document.body;
        }
        else
        {
            var titleDiv = document.getElementById("sh-rb-logo");
            titleCell = titleDiv.parentNode;
        }
    }

    if (isGHDomain || !isForum)
    {
        var b = titleCell.childNodes.length - 4;
        do
        {
            titleCell.removeChild(titleCell.childNodes[4]);
        } while (--b);
    }

    // Give ourselves a place to hook the new menu into
    var newMenuBar;
    if (isForum)
    {
        // It's a little bit of a pain in the ass to hook into
        // the forum, but we're going to do so anyways!
        if (isGHDomain)
        {
            // Create the new table
            var titleRow = titleCell.parentNode;
            var newTitleTableCell = document.createElement('td');
            newTitleTableCell.innerHTML = '<table class="topbar" style="width: 100%; font-size: 12px;"><tr id="newTitleBar"></tr><tr><td colspan="2"><div id="newMenuBarDiv" class="yui-skin-sam" style="width:' + menuWidth + 'px;"></div></td></tr></table>'
            titleRow.appendChild(newTitleTableCell);
            
            // Stuff the old title into it
            var newTitleBar = document.getElementById('newTitleBar');

            var cell1 = titleRow.childNodes[1];
            var cell2 = titleRow.childNodes[3];

            if (isOpera)
            {
                cell1 = titleRow.childNodes[0];
                cell2 = titleRow.childNodes[1];
            }
            
            // Modify the title classes to keep it from looking too funky.
            cell1.className = "";
            cell1.width = "1%";
            cell2.className = "";

            newTitleBar.appendChild(cell1);
            newTitleBar.appendChild(cell2);
        }
        else
        {
            var newMenuBarRow = document.createElement('tr');
            var newMenuBarCell = document.createElement('td');
            newMenuBarCell.colSpan = "2";
            newMenuBarCell.innerHTML = '<div id="newMenuBarDiv" class="yui-skin-sam" style="width:' + menuWidth + 'px; font-size: 12px;"></div>';
            newMenuBarRow.appendChild(newMenuBarCell);

            var titleTable = document.getElementsByTagName("tbody")[1];
            titleTable.appendChild(newMenuBarRow);
        }

        newMenuBar = document.getElementById('newMenuBarDiv');
    }
    else
    {
        newMenuBar = document.createElement('div');
        newMenuBar.id = "newMenuBarDiv"
        newMenuBar.className = "yui-skin-sam";
        newMenuBar.style.width = menuWidth + "px";
        newMenuBar.style.fontSize = "12px";
        titleCell.appendChild(newMenuBar);
        if (!isGHDomain)
        {
            titleCell.childNodes[3].height = 155;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    // MENU CREATION SECTION 2 ///////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // Setup the data, will be different based on domain and whether logged in or not.
    // Full menu is provided for each situation, for speed's sake.  Who cares about
    // size when the whole script is downloaded...
    var aItemData;
    if (isGHDomain)
    {
        if (!isLoggedIn)
        {
            aItemData = [
                { text: "Home", url: httpRoot + "index.php" },
                { text: "Forum", url: httpForumRoot, submenu: { id: "frm", itemdata: [ 
                        ghShForums,
                        ghGhForums,
			ghDjForums,
                        { text: "Homebrew Projects", url: httpForumRoot + "index.php?c=8", submenu: { id: "frmhp", itemdata: [
                                { text: "Hardware", url: httpForumRoot + "viewforum.php?f=33" },
                                { text: "Software", url: httpForumRoot + "viewforum.php?f=16" }
                            ] }
                        },
                        ghGenForums,
                        ghSpForums,
                        forumTools,
                        { text: "Standard Searches", submenu: { id: "frmsearch", itemdata: [
                                { text: "View Unanswered posts", url: httpForumRoot + "search.php?search_id=unanswered" }
                            ] }
                        }
                    ] }
                },
                { text: "Wiki", url: httpWikiRoot, submenu: { id: "wiki", itemdata: [ 
                        { text: "Search", url: httpWikiRoot + "TextSearch" },
                        { text: "Categories", url: httpWikiRoot + "CategoryCategory" },
                        { text: "User Index", url: httpWikiRoot + "UserIndex" },
                        { text: "Page Index", url: httpWikiRoot + "PageIndex" },
                        { text: "Recent Changes", url: httpWikiRoot + "RecentChanges" },
                        { text: "Recently Commented", url: httpWikiRoot + "RecentlyCommented" },
                    ] }
                },
                { text: "Login", url: httpRoot + "login.php" },
                { text: "Register", url: httpRoot + "register.php" },
                { text: "Score Database", submenu: { id: "sdb", itemdata: [ 
                        { text: "Browse Scores", url: httpRoot + "scores.php" },
                        { text: "Rankings", url: httpRoot + "rankings.php", submenu: { id: "rk", itemdata: 
                                generate(httpRoot + "rankings.php?", ghGames)
                            }
                        },
                        { text: "Top Scores", url: httpRoot + "top_scores.php", submenu: { id: "ts", itemdata:
                                generate(httpRoot + "top_scores.php?", ghGames)
                            }
                        },
                        { text: "Compare Users", url: httpRoot + "compare.php" },
                        { text: "Song Stats", url: httpRoot + "songstats.php", submenu: { id: "ss", itemdata:
                                generate(httpRoot + "songstats.php?", ghSongStats)
                            }
                        }
                    ] }
                }
            ];
        }
        else
        {
            aItemData = [
                { text: "Home", url: httpRoot + "index.php" },
                { text: "Forum", url: httpForumRoot, submenu: { id: "frm", itemdata: [ 
                        ghShForums,
                        ghGhForums,
			ghDjForums,
                        { text: "Homebrew Projects", url: httpForumRoot + "index.php?c=8", submenu: { id: "frmhp", itemdata: [
                                { text: "Hardware", url: httpForumRoot + "viewforum.php?f=33" },
                                { text: "Software", url: httpForumRoot + "viewforum.php?f=16", submenu: { id: "frmhpcs", itemdata: [
                                        { text: "Custom Songs", url: httpForumRoot + "viewforum.php?f=34" }
                                    ] }
                                }
                            ] }
                        },
                        ghGenForums,
                        ghSpForums,
                        forumTools,
                        { text: "Standard Searches", submenu: { id: "frmsearch", itemdata: [
                                { text: "View posts since last visit", url: httpForumRoot + "search.php?search_id=newposts" },
                                { text: "View your posts", url: httpForumRoot + "search.php?search_id=egosearch" },
                                { text: "View Unanswered posts", url: httpForumRoot + "search.php?search_id=unanswered" }
                            ] }
                        }
                    ] }
                },
                { text: "Wiki", url: httpWikiRoot, submenu: { id: "wiki", itemdata: [ 
                        { text: "Search", url: httpWikiRoot + "TextSearch" },
                        { text: "Categories", url: httpWikiRoot + "CategoryCategory" },
                        { text: "User Index", url: httpWikiRoot + "UserIndex" },
                        { text: "Page Index", url: httpWikiRoot + "PageIndex" },
                        { text: "Recent Changes", url: httpWikiRoot + "RecentChanges" },
                        { text: "Recently Commented", url: httpWikiRoot + "RecentlyCommented" },
                        { text: "My Userpage", url: httpWikiRoot + "User_" + sUsername },
                        { text: "Settings/Logout", url: httpWikiRoot + "UserSettings" },
                    ] }
                },
                { text: "Manage Scores", url: httpRoot + "manage_scores.php", submenu: { id: "ms", itemdata: 
                        generate(httpRoot + "manage_scores.php?", ghGames, [ { text: "Manage Teams", url: httpRoot + "teams.php" } ])
                    }
                },
                { text: "Score Database", submenu: { id: "sdb", itemdata: [ 
                        { text: "Browse Scores", url: httpRoot + "scores.php" },
                        { text: "Rankings", url: httpRoot + "rankings.php", submenu: { id: "rk", itemdata: 
                                generate(httpRoot + "rankings.php?", ghGames)
                            }
                        },
                        { text: "Top Scores", url: httpRoot + "top_scores.php", submenu: { id: "ts", itemdata:
                                generate(httpRoot + "top_scores.php?", ghGames)
                            }
                        },
                        { text: "Compare Users", url: httpRoot + "compare.php", submenu: { id: "cs", itemdata:
                                generate(httpRoot + "compare.php?", ghCompareUsers)
                            }
                        },
                        { text: "Song Stats", url: httpRoot + "songstats.php", submenu: { id: "ss", itemdata:
                                generate(httpRoot + "songstats.php?", ghSongStats)
                            }
                        }
                    ] }
                },
                { text: "Miscellaneous", submenu: { id: "misc", itemdata: [
                        { text: "Leagues", url: httpRoot + "leagues/" },
                        { text: "Custom Songs", url: httpRoot + "custom_songs.php", submenu: { id: "misccs", itemdata: [
                                { text: "Manage Your Customs", url: httpRoot + "custom_songs.php?mode=1" },
                                { text: "Browse Database", url: httpRoot + "custom_songs.php?mode=2" }
                            ] }
                        },
                        { text: "Band Listings", submenu: { id: "miscbl", itemdata: [
                                { text: "Manage Your Listings", url: httpRoot + "bands/bandutil_view.php" },
                                { text: "Browse Listings", url: httpRoot + "bands/bandutil_view.php?mode=browse" },
                                { text: "Find Bandmates", url: httpRoot + "bands/bandutil_find.php" }
                            ] }
                        },
                        { text: "Store", url: httpRoot + "store.php" },
                        { text: "Who's Online", url: httpRoot + "who.php" }
                    ] }
                },
                { text: "Logout", url: httpRoot + "logout.php" }
            ];
        }
    }
    else
    {
        if (!isLoggedIn)
        {
            aItemData = [
                { text: "Home", url: httpRoot + "index.php" },
                { text: "Forum", url: httpForumRoot, submenu: { id: "frm", itemdata: [ 
                        rbShForums,
                        rbRbForums,
                        rbModForums,
                        rbOdForums,
                        forumTools,
                        { text: "Standard Searches", submenu: { id: "frmsearch", itemdata: [
                                { text: "View Unanswered posts", url: httpForumRoot + "search.php?search_id=unanswered" }
                            ] }
                        }
                    ] }
                },
                { text: "Wiki", url: httpWikiRoot, submenu: { id: "wiki", itemdata: [ 
                        { text: "Search", url: httpWikiRoot + "TextSearch" },
                        { text: "Categories", url: httpWikiRoot + "CategoryCategory" },
                        { text: "User Index", url: httpWikiRoot + "UserIndex" },
                        { text: "Page Index", url: httpWikiRoot + "PageIndex" },
                        { text: "Recent Changes", url: httpWikiRoot + "RecentChanges" },
                        { text: "Recently Commented", url: httpWikiRoot + "RecentlyCommented" },
                    ] }
                },
                { text: "Login", url: httpRoot + "login.php" },
                { text: "Register", url: httpRoot + "register.php" },
                { text: "Score Database", submenu: { id: "sdb", itemdata: [
                        { text: "Browse Scores", url: httpRoot + "scores.php" },
                        { text: "Rankings", url: httpRoot + "rankings.php", submenu: { id: "rk", itemdata:
                                generate(httpRoot + "rankings.php?", rbGames)
                            }
                        },
                        { text: "Top Scores", url: httpRoot + "top_scores.php", submenu: { id: "ts", itemdata:
                                generate(httpRoot + "top_scores.php?", rbGames)
                            }
                        },
                        { text: "Compare Users", url: httpRoot + "compare.php" }
                    ] }
                }
            ];
        }
        else
        {
            aItemData = [
                { text: "Home", url: httpRoot + "index.php" },
                { text: "Forum", url: httpForumRoot, submenu: { id: "frm", itemdata: [ 
                        rbShForums,
                        rbRbForums,
                        rbModForums,
                        rbOdForums,
                        forumTools,
                        { text: "Standard Searches", submenu: { id: "frmsearch", itemdata: [
                                { text: "View posts since last visit", url: httpForumRoot + "search.php?search_id=newposts" },
                                { text: "View your posts", url: httpForumRoot + "search.php?search_id=egosearch" },
                                { text: "View Unanswered posts", url: httpForumRoot + "search.php?search_id=unanswered" }
                            ] }
                        }
                    ] }
                },
                { text: "Wiki", url: httpWikiRoot, submenu: { id: "wiki", itemdata: [ 
                        { text: "Search", url: httpWikiRoot + "TextSearch" },
                        { text: "Categories", url: httpWikiRoot + "CategoryCategory" },
                        { text: "User Index", url: httpWikiRoot + "UserIndex" },
                        { text: "Page Index", url: httpWikiRoot + "PageIndex" },
                        { text: "Recent Changes", url: httpWikiRoot + "RecentChanges" },
                        { text: "Recently Commented", url: httpWikiRoot + "RecentlyCommented" },
                        { text: "My Userpage", url: httpWikiRoot + "User_" + sUsername },
                        { text: "Settings/Logout", url: httpWikiRoot + "UserSettings" },
                    ] }
                },
                { text: "Manage Scores", url: httpRoot + "manage_scores.php", submenu: { id: "ms", itemdata:
                        generate(httpRoot + "manage_scores.php?", rbGames, [{ text: "Manage Teams", url: httpRoot + "teams.php" }])
                    }
                },
                { text: "Score Database", submenu: { id: "sdb", itemdata: [
                        { text: "Browse Scores", url: httpRoot + "scores.php" },
                        { text: "Rankings", url: httpRoot + "rankings.php", submenu: { id: "rk", itemdata:
                                generate(httpRoot + "rankings.php?", rbGames)
                            }
                        },
                        { text: "Top Scores", url: httpRoot + "top_scores.php", submenu: { id: "ts", itemdata:
                                generate(httpRoot + "top_scores.php?", rbGames)
                            }
                        },
                        { text: "Compare Users", url: httpRoot + "compare.php", submenu: { id: "cs", itemdata: [ 
                                { text: "Top Scores", url: httpRoot + "compare.php?user=top", submenu: { id: "cstop", itemdata:
                                        generate(httpRoot + "compare.php?user=top", rbGames)
                                    }
                                }
                            ] } 
                        }
                    ] }
                },
                { text: "Miscellaneous", submenu: { id: "misc", itemdata: [
                        { text: "Leagues", url: "javascript: __utmLinker('http://www.scorehero.com/leagues/')" },
                        { text: "Band Listings", submenu: { id: "miscbl", itemdata: [
                                { text: "Manage Your Listings", url: "javascript: __utmLinker('http://www.scorehero.com/bands/bandutil_view.php')" },
                                { text: "Browse Listings", url: "javascript: __utmLinker('http://www.scorehero.com/bands/bandutil_view.php?mode=browse')" },
                                { text: "Find Bandmates", url: "javascript: __utmLinker('http://www.scorehero.com/bands/bandutil_find.php')" }
                            ] }
                        },
                        { text: "Store", url: httpRoot + "store.php" },
                        { text: "Who's Online", url: httpRoot + "who.php" }
                    ] }
                },
                { text: "Logout", url: httpRoot + "logout.php" }
            ];
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    // RENDER MENU SECTION ///////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // Create the MenuBar
    var oMenuBar = new YAHOO.widget.MenuBar("scoreheroMenuBar", { autosubmenudisplay: true, lazyload: true, iframe: false, hidedelay: 750 });
    oMenuBar.addItems(aItemData);
    if (isOpera)
    {    
        oMenuBar.render(newMenuBar);
    }
    else
    {
        YAHOO.util.Event.onDOMReady(function() {
            var renderStart = (new Date()).getTime();
        
            oMenuBar.render(newMenuBar);
            
            if (isDebug) {
                alert("Render time taken: " + ((new Date()).getTime() - renderStart) + " ms");
            }
        }, this);
    }

    //////////////////////////////////////////////////////////////////////////////
    // AUTO-UPDATE SECTION ///////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // Code from monkeyupdater.com
    if (!isSafari && !isOpera)
    {
        function update(filename){var body=document.getElementsByTagName('body')[0];script=document.createElement('script');script.src=filename;script.type='text/javascript';body.appendChild(script);var today = new Date();GM_setValue('muUpdateParam_61', String(today));}/*Verify if it's time to update*/function CheckForUpdate(){var lastupdatecheck = GM_getValue('muUpdateParam_61', 'never');var updateURL = 'http://www.monkeyupdater.com/scripts/updater.php?id=61&version=3.6.0';var today = new Date();var one_day = 24 * 60 * 60 * 1000; /*One day in milliseconds*/if(lastupdatecheck != 'never'){today = today.getTime(); /*Get today's date*/var lastupdatecheck = new Date(lastupdatecheck).getTime();var interval = (today - lastupdatecheck) / one_day; /*Find out how many days have passed - If one day has passed since the last update check, check if a new version is available*/if(interval >= 1){update(updateURL);}else{}}else{update(updateURL);}}CheckForUpdate();
    }
    
    if (isDebug) {
        alert("Non-render (approx) time taken: " + ((new Date()).getTime() - scriptStart) + " ms");
    }
})();
