// ==UserScript==
=========

 - November 2006: Most functions were moved to the global
	var objTransitCheck = document.evaluate("//b[text()='In Transit']", document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
	objTransitCheck = objTransitCheck.iterateNext();
	if (objTransitCheck) { return }
		tcolony.type = 'hidden';
		tcolony.value = tcolony3.value ? tcolony3.value : ( tcolony2 ? tcolony2.value : null );
		tcolony.name = 'tcolony';
		form2.appendChild(tcolony);
		var tworld = document.createElement('input');
		tworld.type = 'hidden';
		tworld.value = ( tworld2.value >= 0 ) ? tworld2.value : Math.abs(tworld2.value);
		tworld.name = ( tworld2.value >= 0 ) ? 'tworld' : 'tsystem';
		form2.appendChild(tworld);
		var submit = document.createElement('input');
		submit.setAttribute('type', 'submit');
		submit.setAttribute('value', 'Launch!');
		submit.setAttribute('name', 'verify');
		form2.appendChild(submit);
	var doworld = 0;
	
	unsafeWindow.GM_WF_QuickLaunch_qlKeys = function(evt) {
		if (evt.target && evt.target.nodeName) {
			var targetNodeName = evt.target.nodeName.toLowerCase();
			if (targetNodeName == "textarea" ||
				(targetNodeName == "input" && evt.target.type &&
				 evt.target.type.toLowerCase() == "text")) {
			  return false;
			}
		}
		keyspressed++;
		if (keyspressed == 1) {
		  switch (whichKey) {
			case 87: // 'w' - We're going to select a world.
				doworld=1;
			default : keyspressed = 0;
		  }
		}
		if (keyspressed == 2 && doworld == 1) {

		}
		GM_log("Pressed: "+keyspressed+" Key: "+keypressed+"/"+whichKey);
		if (keyspressed == 2) {keyspressed=0;doworld=0}
	}
	
	//window.qlSetup = function() {