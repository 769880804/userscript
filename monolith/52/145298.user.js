// ==UserScript==
// @name          Attorney Badge 
// @namespace     nowhere
// @description	  Just some edit 
// @author        puchi
// @homepage      herrjustice.tumblr.com?
// @run-at        document-start
// ==/UserScript==
(function() {
var css = "#home_button {\n\n\n\n    padding-right: 17px !important;\n\n}\n\n\n\n\n\n#home_button a {\n\n\n\n    height: 0 !important;\n\n    width: 0 !important;\n\n    top: -7px !important;\n\n    padding-left: 44px !important;\n\n    padding-top: 37px !important;\n\n    background: url('http://media.tumblr.com/tumblr_ma345vO65c1qil6t6.png') !important;\n\n}\n\n\n\n\n\n#home_button .tab_notice {\n\n    left: 56px !important;\n\n    right: auto !important;\n\n}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();