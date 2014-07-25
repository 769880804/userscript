// ==UserScript==
// @name           eMex Orders (eRep)
// @namespace      www.erepublik.com.mx
// @description    Órdenes de las Fuerzas Armadas Mexicanas (eRep)
// @version        0.01
// @include        http://www.erepublik.com/en
// @include        http://www.erepublik.com/es
// ==/UserScript==

GM_xmlhttpRequest({
	method: 'GET',
	url: 'http://erepublik.com.mx/viewtopic.php?f=115&t=2488',

	onload:function(response){
            //Retrieve and truncate string
            var order_string = response.responseText.match('class="content".*?#');
            order_string = order_string.join("");   //Array->string
            order_string = order_string.substring(order_string.indexOf('>')+1,order_string.length-1)

            var tags = order_string.split('|');
			var orders = tags[0];
			var region = tags[1];
			var link = tags[2];
			var date_issued = tags[3];

			latest=document.getElementById('latestnews');

			params_el = document.createElement("h3");
			params_el.textContent = orders + ' ' + region;

			link_el = document.createElement("a"); 
			link_el.setAttribute('href',link);
			link_el.innerHTML = link;

			updated_el=document.createElement("h3")
			updated_el.textContent ='Actualizacion: ' + date_issued;

            //Insert elements on page
            if(order_string.length) {   //Only insert if string is uncommented
                latest.parentNode.insertBefore(params_el, latest);
                latest.parentNode.insertBefore(updated_el, latest);	
                latest.parentNode.insertBefore(link_el, latest);
            }
		}	
		}
	);