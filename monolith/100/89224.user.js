// ==UserScript==
// @name          effii
// @namespace     http://www.orkut.co.in/Main#Community?cmm=95917134
// @description	  effiii2008
// @author        p kumar
// @homepage      http://vrkmphoto.com/
// @include       http://www.google.com/*
// @include       http://www.orkut.co.in/*
// @include       http://images.orkut.*/*

// ==/UserScript==
(function() {
var css = "body {background:#D0E6EE url(http://lh4.ggpht.com/_mkxyOw4PRQk/TMxd38o4uvI/AAAAAAAAAY0/rbiUs4Y4dew/s512/Image0386.jpg)  center fixed !important;}.userinfodivi,.ln {background:#ffffff !important;}h1,h2,h3 {color:#ffffff !important}  .listfl{color:#000000!important;} p,h2,h1,h3,h4,tr,b,form,ul,li,td,div{color: #000000 !important;} a[href] { color: #000000 !important; text-decoration: none !important; } a[href]:hover { color: #FF0000 !important; text-decoration: none !important; } .boxmidlrg,.botl,.topr_g,.boxmidr,.botr,.topl_g,.topl,.topr,.topr_lrg,.topl_lrg,.boxmid {background-image:none !important;background:transparent url(http://apptemasloucos.googlecode.com/svn/trunk/img/clear.png) !important;}#smWrapperBox {background-color:#FFF !important;-moz-border-radius:5px !important;opacity:0.72}.listitem,.listlight,.listdark {background:transparent url(http://apptemasloucos.googlecode.com/svn/trunk/img/clear.png) !important;}.topl,.topl_lrg,.topl_g,.boxmid,.boxmidlrg{border-left:1px solid #ffffff !important}.topl,.topl_lrg,.topr,.topr_lrg,.topl_g,.topr_g{border-top:1px solid #ffffff !important}.topl,.topl_lrg,.topl_g{-moz-border-radius-topleft:8px !important}.topr,.topr_lrg,.topr_g,.botr,.boxmidr{border-right:1px solid #ffffff !important}.topr,.topr_lrg{-moz-border-radius-topright:38px !important}.topr_g{-moz-border-radius-topright:8px !important}.botr{border-bottom:1px solid #ffffff !important;-moz-border-radius-bottomright:8px !important}.botl{border:1px solid #ffffff !important;border-top:0 !important;border-right:0 !important;-moz-border-radius-bottomleft:8px !important}.boxmidr{-moz-border-radius-topright:0 !important}.boxmid,.boxmidlrg{-moz-border-radius:0 !important}.sel {background-image:none !important;background:#ffffff;border:1px solid #fff !important;border-bottom:0px !important;-moz-border-radius-topright:8px !important;-moz-border-radius-topleft:8px !important;}.sel .ltab {background-image:none !important;}.boxmidlock,.bday {background:none !important;}.bday b {font-size:11px !important;color:red;}.bday b a{font-size:10px !important;display:none}.bday img {max-height:60px !important}.bday{height:75px !important;width:50px !important}.thumbbox,.divihor,.boxgrid {background:none !important}.bday .uname {margin-top:-40px !important;font-size:9px !important;background:#FFF !important;opacity:0.82; height:20px !important;}.footer_r,.footer_l {background: #dff1f8 url(http://lh6.ggpht.com/_EgSKFxYcMAA/SmYq89ic0FI/AAAAAAAAAxo/cRyop1rwPKc/transpb.png) !important;border:1px solid #CCC;border-bottom:0px;-moz-border-radius:50px !important;-moz-border-radius-bottomright:0px !important;-moz-border-radius-bottomleft:10px !important;-moz-border-radius-topright:0px !important;border-top:1px solid #CCC;}.footer_r {-moz-border-radius-topright:10px !important;-moz-border-radius-topleft:0px !important;-moz-border-radius-bottomright:50px !important;-moz-border-radius-bottomleft:0px !important;border-left:0px !important;}#title{background:url(none) 99% 0px no-repeat !important;width:260px !important}#header {background:url(http://lh6.ggpht.com/_EgSKFxYcMAA/SmdUzc0Bg4I/AAAAAAAAAyE/KUkQk1lv6k8/tp.png) !important;width:1000px !important;margin:0 auto !important;-moz-border-radius-bottomright:8px !important;-moz-border-radius-bottomleft:8px !important;}.logo {margin-left:0px !important;-moz-border-radius-bottomleft:8px !important;-moz-border-radius-bottomright:8px !important;}.logobg{background:none !important;}#headerbot{height:50px !important}";
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