// ==UserScript==
// @name           Flickr Insert View on Fluidr
// @namespace      badmonkeh.com
// @description    Adds a 'View on Fluidr' link in your photo's description when you edit it
// @include        http://www.flickr.com/photos/*
// @author		   Christian Froehlich
// ==/UserScript==

//CF: If this is a photo page
if (document.getElementById("button_bar")) {
	pid = location.pathname.split('/')[3];

	descDiv = document.getElementById("description_div" + pid);
	//CF: Ensure that this is your photo
	if ((descDiv != null) && (descDiv.title == "Click to edit")) {						
		//CF: Wait until it's editable
		descDiv.addEventListener("click", function () {																	
			editArea = document.getElementsByName("content")[0];	
			if ((editArea != null) && (editArea.value.indexOf("Viewed on Fluidr") == -1)) {			
				pathParts = location.pathname.split('/');
				userId = pathParts[2];	
				pid = pathParts[3];					
				link = "Best <a href=\"http://www.fluidr.com/photos/";
				link += userId + "/" + pid + "\">Viewed on Fluidr</a>";						
			
				editArea.innerHTML += "\n\n<p>" + link + "</p>";	
				editArea.scrollTop = editArea.scrollHeight;
			}
		}, false);
	}
}