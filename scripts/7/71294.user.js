// ==UserScript==
// @name           WF Map Helper
// @namespace      http://www.nowhere.com
// @description    A script to help you navigate empire controlled ships (version 2)
// @include        http://*.war-facts.com/extras/view_universe.php?*
// ==/UserScript==
function calcDistance(A,B) {
	var A = A.replace(/[a-z ()]/gi,"").split(",");
	var distance = Math.round(Math.sqrt(Math.pow(A[0]-B[0],2)+Math.pow(A[1]-B[1],2)+Math.pow(A[2]-B[2],2))*4000);
	return distance;
}
function addcommas(num) {
	var newn = '';
	while (num.length > 3) {
		newn += ',' + num.substring(num.length - 3);
		num = num.substring(0, num.length - 3);
	}
	newn = num + newn;
	return newn;
}
	var strReturn = "";
	var strHref = window.location.href;
	if ( strHref.indexOf("?") > -1 ) {
		var strQueryString = strHref.substr(strHref.indexOf("?"))//.toLowerCase();
		var aQueryString = strQueryString.split("&");
		}
	return unescape(strReturn);
}

// Meat and Potatoes
	// Lets make sure we're not moving.
	var objTransitCheck = document.evaluate("//b[text()='In Transit']", document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
	objTransitCheck = objTransitCheck.iterateNext();
	if (objTransitCheck) { return }
	// Get the main <p> tag containing everything
	var fleetmain = document.getElementsByName('form2')[0].parentNode.parentNode.parentNode.parentNode.parentNode;
	// Get the fleet's name
	var fleetname = fleetmain.getElementsByTagName('strong')[0].innerHTML.replace(/<\/?[^>]+>/gi, '').replace(/^\s*|\s*$/g,"");
	// Get the cell with the Coordinates in it
	var coords_link = document.evaluate("//td[(child::text() = 'Fleet Coordinates:')]/following-sibling::node()/a[contains(text(),'global')]", document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext();
// Javascript Map
	var modx = unsafeWindow.modx;
	var mody = unsafeWindow.mody;
	var modz = document.getElementsByName('newz')[0];
	
	//window.addEventListener('resize',function(){var view = document.getElementsByTagName('div')[0];view.style.width = document.width;view.style.height = document.height;alert(document.body.offsetHeight)},false);
	function updateDistance() {
		var txt = addcommas(String(calcDistance(getURLParam('fleetpos'),modx.value+","+mody.value+","+modz.value)))+"km<br/>"+getURLParam('fleetname');
	}
	
	var distance = document.createElement('div');
	distance.id = "GM_WF_MapHelper_distance";
	distance.style.position = "absolute";
	distance.style.top = "30";
	distance.style.left = "10"
	updateDistance();
	
	
	// Make the distance update when you let go of the mouse button
	unsafeWindow.document.onmouseup = function() {
		updateDistance();
		unsafeWindow.document.onmousemove = null;
		unsafeWindow.init = 0;
	}
	
	// Fix the loading issue where fleetname and fleetpos are no longer available
	var navform = document.getElementById('navigation');

	var fpos = document.createElement('input');
	fpos.type = "hidden";
	fpos.name = "fleetpos";
	fpos.value = getURLParam('fleetpos');
	navform.appendChild(fpos);
	
	var fname = document.createElement('input');
	fname.type = "hidden";
	fname.name = "fleetname";
	fname.value = getURLParam('fleetname');
	navform.appendChild(fname);
	
	var nav = document.getElementsByTagName('table')[0].getElementsByTagName('a');