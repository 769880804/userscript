// ==UserScript==
// @name Menu Septum
// @namespace http://notra-hydra.forum-actif.info
// @description Ajoute plusieurs boutons menu utile pour l'alliance Septum
// @include http://*.ogame.*/*
// ==/UserScript==

//Pour les univers Ogame 1.0

//alecs::
var usersession = unsafeWindow.session; //get the usersession var from page
//alecs: 



var LinkDiv = document.createElement('div');
LinkDiv.id = 'LinkDiv';
LinkDiv.innerHTML += '<script type="text/javascript">function bonus_boutons(){popupWindow("index.php?page=globalTechtree&session='+usersession+'","techinfo","auto","no","0","0","no","680","600","yes");}</script><li class="menubutton_table"><span class="menu_icon"><img src="img/navigation/navi_ikon_research_a.gif" height="29" width="38"></span><a class="menubutton" href="#" onclick="bonus_boutons()"><span class="textlabel">Technologie</span></a></li><li class="menubutton_table"><span class="menu_icon"><img src="img/navigation/navi_ikon_fleet1_a.gif" height="29" width="38"></span><a class="menubutton " href="http://websim.speedsim.net/index.php?lang=fr" accesskey="" target="_blank"><span class="textlabel">Simulateur</span></a></li><li class="menubutton_table"><span class="menu_icon"><img src="img/navigation/navi_ikon_network_a.gif" height="29" width="38"></span><a class="menubutton " href="index.php?page=messages&session='+usersession+'" accesskey="" target="_self"><span class="textlabel">Messages</span></a></li><li class="menubutton_table"><span class="menu_icon"><img src="img/navigation/navi_ikon_premium_a.gif" height="29" width="38"></span><a class="menubutton " href="index.php?page=networkkommunikation&session='+usersession+'" accesskey="" target="_self"><span class="textlabel">Msg Alliance</span></a></li><li class="menubutton_table"><span class="menu_icon"><img src="img/navigation/navi_ikon_galaxy_a.gif" height="29" width="38"></span><a class="menubutton " href="http://notra-hydra.forum-actif.info" target="_blank"><span class="textlabel">Forum Nora</span></a></li>';
document.getElementById('menuTable').appendChild(LinkDiv);