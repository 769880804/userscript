// ==UserScript==
// @name           TORPIA.COM	
// @version        0.3.2
// @autor          Cheat
// @description    Se desplega WEB de Torpia
// @include         http://s*.w2.torpia.com/index.php*
// ==/UserScript==
// ===========================================================================

var version="0.3.2";
var displayedflag = 0;

unsafeWindow.displaywiki = function() {
	if(displayedflag == 0) {
		document.getElementById("wikiframe").innerHTML = '<iframe width="920" border="0" frameborder="0" height="100%" src="http://w2.torpia.com/village/" style="margin-left:26px;"></iframe>';
		displayedflag = 1;
	}
}

unsafeWindow.showwiki = function() {
	if(document.getElementById("wikibar").style.left == "-1000px")
	{
		document.getElementById("wikibar").style.left = "0px;"
	}
	document.getElementById("wikibar").style.left = "0px;"
}

unsafeWindow.hidewiki = function() {
	document.getElementById("wikibar").style.left = "-1000"
}

vwikibar = document.createElement("div");
vwikibar.setAttribute("id", "wikibar");

var body = document.getElementsByTagName("body");

body[0].appendChild(vwikibar);


var wkHTML = '<div id="wikitab" onmouseover="showwiki()" onclick="hidewiki()"><a style="height:100%;width:100%;"></a></div>'
	+ '<div style="color:#542C0F;line-height: 35px; font-size: 15px; font-weight: bold;width:1000px;position:absolute;top:0px;left:0px;height:30px;background:url();">'
	+ '<a style="border-bottom:1px #542C0F dotted; color: #542C0F;"href="http://w2.torpia.com/village/">FoRo w2.torpia.com</a></div>'
	+ '<div id="wikiframe" style="position:absolute;top:30px;bottom:3px;left:4px;" onmouseover="displaywiki()">Mueve el raton por aquí para cargar el foro</div>'
	+ '<div style="width:100px;position:absolute;bottom:0px;left:0px;height:3px;background:url();background-repeat:no-repeat;"></div>';

GM_addStyle("#wikibar { background:url(http://www.fileden.com/files/2009/3/15/2365769/fondo%20negro.gif); padding-top:33px; width:1000px; position:fixed; left:-1002px; top:15px; bottom:50px; border:1px black solid; z-index:50;");
GM_addStyle("#wikibar:hover { left:0px; }");
GM_addStyle("#wikitab { background:url(http://www.fileden.com/files/2009/3/15/2365769/forobarkingsg2.png); width:26px; height:100px; position:absolute; right:-26px; top:0px; } ");
GM_addStyle("#wikitab:hover { cursor: pointer; } ");

document.getElementById("wikibar").innerHTML = wkHTML;

///// End of script /////