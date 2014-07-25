// ==UserScript==
// @name           Wmode=direct
// @namespace      
// @description    Sets embed's and object's wmode parameter to direct, so Boxee shows video in linux
// @include        *
// ==/UserScript==

(function ()
{
	nodeInserted();
})();

document.addEventListener("DOMNodeInserted", nodeInserted, false);

function nodeInserted()
{
	for (var objs = document.getElementsByTagName("object"), i = 0, obj; obj = objs[i]; i++)
	{
		if (obj.type == 'application/x-shockwave-flash')
		{
			var skip = false;
			for (var params = obj.getElementsByTagName("param"), j = 0, param; param = params[j]; j++)
			{
				if (param.getAttribute("name") == "wmode" || param.getAttribute("name") == "allowScriptAccess")
				{
					skip = true;
					break;
				}
			}
			if(skip) continue;
			var param = document.createElement("param");
			param.setAttribute("name", "wmode");
			param.setAttribute("value", "direct");
			obj.appendChild(param);
		}
	}
	
	if (typeof document.embeds != 'undefined')
	{
		for (var ems = document.embeds, i = 0, em; em = ems[i]; i++)
		{
			if (em.getAttribute('wmode') && em.getAttribute('wmode') == 'direct') continue;
			em.setAttribute('wmode', 'direct');
			var nx = em.nextSibling, pn = em.parentNode;
			pn.removeChild(em);
			document.removeEventListener('DOMNodeInserted', nodeInserted, false);
			pn.insertBefore(em, nx);
			document.addEventListener("DOMNodeInserted", nodeInserted, false);
		}
	}
}

Because it's your web

Powered by overstimulate with the help of many friends

Policy & Guidelines: DMCA Privacy Policy
