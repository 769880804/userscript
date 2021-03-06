// ==UserScript==
// @name OGame: Quick RAID
// @description OGame : Displays the plunder in Spy report view, add an Attack button and hide the txt of activity  
// @date 2011-10-01
// @version 	  1.1
// @creator blended by la faucille (inspired from perfect plunder by black cat, spy attack by marshen )
// @special thanks to Black cat and Marshen for theire great scripts.
// @include http://*.ogame*/game/index.php?page=showmessage*
// @include http://*.ogame*/game/index.php?page=messages*
// ==/UserScript==



(function()
{
	var str_title ="- - - - - - - - - - - - - - - - - Quick RAID - - - - - - - - - - - - - - - - - - - >>";
	var str_small_cargo = "PT ------->";
	var str_large_cargo = "GT------->";
	var str_vb = "VB------>";
	var str_dest = "Dest---->";
	
	var box = document.getElementById('messagebox');

	function plunder(metal, crystal, deuterium, capacity) 
	{
		
		var temp;
		var pl_metal = 0;
		var pl_crystal = 0;
		var pl_deuterium = 0;
		var pl_resources;

		// 1
		var rem_metal = Math.floor(metal/2);
		var rem_crystal = Math.floor(crystal/2);
		var rem_deuterium = Math.floor(deuterium/2);

		// 2
		temp = Math.min(Math.ceil(capacity/3), rem_metal);
		pl_metal += temp;
		rem_metal -= temp;
		capacity -= temp;

		// 3
		temp = Math.min(Math.ceil(capacity/2), rem_crystal);
		pl_crystal += temp;
		rem_crystal -= temp;
		capacity -= temp;

		// 4
		temp = Math.min(capacity, rem_deuterium);
		pl_deuterium += temp;
		rem_deuterium -= temp;
		capacity -= temp;

		// 5
		temp = Math.min(Math.ceil(capacity/2), rem_metal);
		pl_metal += temp;
		rem_metal -= temp;
		capacity -= temp;

		// 6
		temp = Math.min(capacity, rem_crystal);
		pl_crystal += temp;
		rem_crystal -= temp;
		capacity -= temp;

		pl_resources = new Array(pl_metal, pl_crystal, pl_deuterium);
		return pl_resources;
	}

	Array.prototype.sum = function() 
	{
		var sum = 0;
		for (var i=0; i<this.length; i++)
			sum += this[i];
		return sum;
	}

	// fonction format sur http://www.toutjavascript.com
	function format(valeur,decimal,separateur) 
	{
	// formate un chiffre avec 'decimal' chiffres après la virgule et un separateur
		var deci=Math.round( Math.pow(10,decimal)*(Math.abs(valeur)-Math.floor(Math.abs(valeur)))) ; 
		var val=Math.floor(Math.abs(valeur));
		if ((decimal==0)||(deci==Math.pow(10,decimal))) {val=Math.floor(Math.abs(valeur)); deci=0;}
		var val_format=val+"";
		var nb=val_format.length;
		for (var i=1;i<4;i++) {
			if (val>=Math.pow(10,(3*i))) {
				val_format=val_format.substring(0,nb-(3*i))+separateur+val_format.substring(nb-(3*i));
			}
		}
		if (decimal>0) {
			var decim=""; 
			for (var j=0;j<(decimal-deci.toString().length);j++) {decim+="0";}
			deci=decim+deci.toString();
			val_format=val_format+"."+deci;
		}
		if (parseFloat(valeur)<0) {val_format="-"+val_format;}
		return val_format;
	}

	function showPlunder(content) 
	{
		var tables = document.getElementById(content).getElementsByTagName("table");
		for (var i=0; i<tables.length; i++) 
		{
			if (tables[i].className == "material spy") 
			{
				var parts = tables[i].parentNode.getElementsByTagName("table");
				var metal = parts[1].getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerHTML;
				metal = parseInt(metal.replace(/\D/g, ''));
				var crystal = parts[1].getElementsByTagName("tr")[0].getElementsByTagName("td")[3].innerHTML;
				crystal = parseInt(crystal.replace(/\D/g, ''));
				var deuterium = parts[1].getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerHTML;
				deuterium = parseInt(deuterium.replace(/\D/g, ''));
				var pl_resources = Math.floor(metal/2) + Math.floor(crystal/2) + Math.floor(deuterium/2);
				var small_cargos = Math.ceil(pl_resources/5000);
				while (plunder(metal, crystal, deuterium, small_cargos*5000).sum() < pl_resources)
					small_cargos++;
				var large_cargos = Math.ceil(small_cargos/5);
				var vbs = Math.ceil ((Math.ceil (Math.max (metal + crystal + deuterium, Math.min (0.75 * (metal * 2 + crystal + deuterium), metal * 2 + deuterium))) / 2) / 1500);			
				var dests = Math.ceil ((Math.ceil (Math.max (metal + crystal + deuterium, Math.min (0.75 * (metal * 2 + crystal + deuterium), metal * 2 + deuterium))) / 2) / 2000);
//--------------------------------------------------------------------------------------------------------------------------
				var pl_table = document.createElement("table");
				pl_table.border="2";
				pl_table.cellPadding = "10";
				pl_table.cellSpacing = "3";
				pl_table.className = "fleetdefbuildings spy";
				var pl_tbody = document.createElement("tbody");
				pl_table.appendChild(pl_tbody);
				//
				var pl_r1 = document.createElement("tr");
				var pl_r1c1 = document.createElement("th");
				pl_r1c1.innerHTML = str_title;
				pl_r1c1.className = "area";
				pl_r1c1.colSpan = "6";
				{
					pl_r1c1.setAttribute("style","color:#66FF33;font-weight:900;");				
				}	
				pl_r1.appendChild(pl_r1c1);
				//
				var pl_r1c2 = document.createElement("td");
				pl_r1c2.innerHTML = format(pl_resources, 0, '.');
				pl_r1c2.className = "key";
				pl_r1c2.align = "center"
				pl_r1c2.colSpan = "2";
				pl_r1.appendChild(pl_r1c2);
				
				{
					pl_r1c2.setAttribute("style","color:#66FF33;font-weight:900;");				
				}	
				pl_tbody.appendChild(pl_r1);
				
//--------------------------------------------------------------------------------------------				

				var pl_r2 = document.createElement("tr");
				var pl_r2c1 = document.createElement("td");
				pl_r2c1.innerHTML = str_dest;
				pl_r2c1.align = "center"
				pl_r2c1.className = "key";
				pl_r2.appendChild(pl_r2c1);
				{
					pl_r2c1.setAttribute("style","color:#FFFF00;font-weight:lighter;");				
				}
				//
				var pl_r2c2 = document.createElement("td");
				pl_r2c2.innerHTML = format(dests, 0, '.');
				pl_r2c2.className = "value";
				pl_r2c2.align = "center"
				pl_r2.appendChild(pl_r2c2);
				{
					pl_r2c2.setAttribute("style","color:#FFFF00;font-weight:normal;");				
				}
				
//--------------------------------------------------------------------------------
				var pl_r2c4 = document.createElement("td");
				pl_r2c4.innerHTML = str_vb;
				pl_r2c4.className = "key";
				pl_r2c4.align = "center"
				pl_r2.appendChild(pl_r2c4);
				{
					pl_r2c4.setAttribute("style","color:#FFFF00;font-weight:normal;");				
				}
				//
				var pl_r2c5 = document.createElement("td");
				pl_r2c5.innerHTML = format(vbs, 0, '.');
				pl_r2c5.className = "value";
				pl_r2c5.align = "center"
				pl_r2.appendChild(pl_r2c5);
				{
					pl_r2c5.setAttribute("style","color:#FFFF00;font-weight:lighter;");				
				}
					
//--------------------------------------------------------------------------------
				
				var pl_r2c7 = document.createElement("td");
				pl_r2c7.innerHTML = str_small_cargo;
				pl_r2c7.className = "key";
				pl_r2c7.align = "center"
				pl_r2.appendChild(pl_r2c7);
				{
					pl_r2c7.setAttribute("style","color:#FFFF00;font-weight:bold;");			
				}
				//
				var pl_r2c8 = document.createElement("td");
				pl_r2c8.innerHTML = format(small_cargos, 0, '.');
				pl_r2c8.className = "value";
				pl_r2c8.align = "center"
				pl_r2.appendChild(pl_r2c8);
				{
					pl_r2c8.setAttribute("style","color:#FFFF00;font-weight:bold;");				
				}
				
//----------------------------------------------------------------------------------
				var pl_r2c10 = document.createElement("td");
				pl_r2c10.innerHTML = str_large_cargo;
				pl_r2c10.className = "key";
				pl_r2c10.align = "center"
				pl_r2.appendChild(pl_r2c10);
				{
					pl_r2c10.setAttribute("style","color:#FFFF00;font-weight:bold;");				
				}
				//
				var pl_r2c11 = document.createElement("td");
				pl_r2c11.innerHTML = format(large_cargos, 0, '.');
				pl_r2c11.className = "value";
				pl_r2c11.align = "center"
				pl_r2.appendChild(pl_r2c11);
				{
					pl_r2c11.setAttribute("style","color:#FFFF00;font-weight:bolder;");				
				}
				
				pl_tbody.appendChild(pl_r2);
				parts[0].parentNode.insertBefore(pl_table, parts[5]);
			}
		}
	}

//---------------------------------------------------------------------------------------
	if (document.location.href.indexOf("page=showmessage") != -1) 
	{
		showPlunder("messagebox");
	} else 
	{
		var $;
		try { $ = unsafeWindow.$; }
		catch(e) { $ = window.$; 
		}
		$(".mailWrapper").ajaxSuccess(function(e,xhr,settings){
			if (settings.url.indexOf("page=messages") == -1) return;
			if (settings.data.indexOf("displayPage=1") == -1) return;

			var cat = settings.data.replace(/^.*displayCategory=([\d-]*).*$/,"$1");
			switch (cat) 
			{
				case "9": //Inbox (init)
				case "10": //Inbox
				case "3": //Recycle bin
					showPlunder("messageContent");
					break;
				default: //Address Book
					break;
			}
		});
	}


//---------------------------------------------------------------------------------------
	function getElementsByClass (cName, domNode) {
		if (cName == undefined || cName.length == 0) return;
		if (domNode == undefined) domNode = document;
		
		if (domNode.getElementsByClassName)
			return domNode.getElementsByClassName(cName);
		
		// browser doesn't support getElementsByClassName
		cName = " " + cName + " "; // add spaces here so that we won't find class "a" in className == "abc"
		var elements = domNode.getElementsByTagName('*');
		var res = new Array();
		for (var i = 0; i < elements.length; i++) {
			var className = " " + elements[i].className + " ";
			if (className.indexOf(cName) > -1) {
				res.push(elements[i]);
			}
		}
		
		return res;
	}

	if (box) {
		// get attack button
		var attackButton = getElementsByClass('attack', box);
		
		if (attackButton.length > 0) {
			var spyTable = getElementsByClass('spy', box);
			
			if (spyTable.length > 0) {
				var newAttackButton = attackButton[0].cloneNode(true);
				newAttackButton.setAttribute('colspan', '8');
				newAttackButton.setAttribute('style', 'padding:0px 0px 5px');
				
				var newTR = document.createElement('tr');
				newTR.appendChild(newAttackButton);
				
				spyTable[4].appendChild(newTR);
			}
		}
		
		// get active info
		var activity = getElementsByClass('aktiv', box);
		
		if (activity.length > 0) {
			var info = activity[0].getElementsByTagName('tr');
			
			if (info.length > 1) {
				var text = info[1];
				info = info[1].getElementsByTagName('td');
				
				if (info.length > 0) {
					var head = getElementsByClass('area', activity[0]);
					info = info[0].getElementsByTagName('font');
					
					if (head.length) {
						if (info.length > 0) {
							head[0].firstChild.nodeValue += ": ";
							var activitySpan = document.createElement('span');
							activitySpan.setAttribute('style', 'color: red');
							activitySpan.appendChild(document.createTextNode(info[0].firstChild.nodeValue));
							
							head[0].appendChild(activitySpan);
						} else {
							head[0].firstChild.nodeValue += ": -";
						}
						
						text.parentNode.removeChild(text);
					}
				}
			}
		}
	}
	
})();			
				
