// ==UserScript==
// @name           klavogonki - CX7
// @version        0.0.4
// @namespace      klavogonki
// @author         novkostya&Wяnd
// @description    just for fun
// @include        http://klavogonki.ru/play/*
// @include        http://klavogonki.ru/profile/*
// ==/UserScript==

function doIt()
{
	$$(".you .imgcont div")[0].style.background = 'url("http://s004.radikal.ru/i208/1007/27/623d980b2c71.png") no-repeat scroll 0 0 transparent';
}

var script = document.createElement("script");
script.innerHTML = "(" + doIt + ")()";
document.body.appendChild(script);