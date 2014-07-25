// ==UserScript==
// @name           Show Tinyurls on notes
// @author         Unknown
// ==/UserScript==

javascript:(function (){

var config_html = '<div>' +
               '<div id="loot"></div>' +
               '<div id="divTemp" stype="display:none"></div>' +
               //'<div><textarea id="friendlist" rows="10" cols="120"></textarea></div>' +
               '<div id="iframediv1"></div>' +
               '<div id="iframediv2"></div>' +
               '<div id="iframediv3"></div>' +
               '<div id="iframediv4"></div>' +
              '</div>';
var giftList = '';
var linkname = [];
var linkurl =[];

create_div();
getLinks();
organizefreegiftlinks();

   function create_div() {
      if(document.getElementById('spockdiv')) {
         document.getElementById('spockdiv').innerHTML = config_html;
      }
      else {
         var spock_div=document.createElement("div");
         spock_div.id = 'spockdiv';
         spock_div.innerHTML = config_html;
         var content  = $g('feedwall_with_composer') || $g('UIWashFrame_MainContent') ||
                $g('pagelet_group') ||
                $g('all_threads') || 
				$g('contentArea');
         content.insertBefore(spock_div, content.firstChild);
      }
   }

function $g(id){
   return document.getElementById(id);
}

function getLinks(){
   //var messages = xpathAll('.//span[@class="UIStory_Message"]', null);

   linkname = [];
   linkurl =[];

   //for(var i=0; i < messages.snapshotLength; i++){
   var tmp = $g("profile_stream_container") || $g("pagelet_group") || $g("all_threads") || $g("contentArea");
   var message = tmp.textContent || tmp.innerText;

      //var message = getTextContent(messages.snapshotItem(i).innerHTML);
      for (var re = /(Slot\sMachine|Mafia\sMembers|Mini\sEnergy\sPack|Hollow\sWarrior|Green\sMachine|Raw\sMeat|Casino\sDealer|Poker\sTable|Construction\sTool|Steel\sGirder|Reserve\sChute|Holiday\sSack|Certified\sPlatinum|Doctors\sOrders|Beats\sby\sDre|Time\sCapsule|Feeding\sTrough|Bird\sCage|Terrarium|Exotic\sAnimal\sFeed|Aquarium|Engine|Big\sCage|Cupcake|Tech\sPlate|Bellhop|Wedding\sCake|Birthday\sCake|Gun\sBarrel|Dried\sClover|Golden\sTiger|Dead\sBee|Crime\sSpree|Navy\sUniform|Army\sUniform|Air\sForce|Air\sForce\sUniform|Mystery\sBag|Red\sMystery\sBag|Italian\sHardwood|Marble\sSlab|Stone\sColumn|Terracotta\sTiles|Mystery\sShipment|Super\sPignata|Satchel\sof\sLira|Mystery\sAnimal|Aztec\sKnife\s|Inca\sMask|Mayan\sCalendar|Politico\sCorrupto|Secret\sDrop|Set\sof\sHidden\sCharges|Cooked\sBook|Special\sPart|Thai\sBaht|Cold\sSnap|Game\sFace|Cinder\sBlock|Security\sCamera|Cement\sBlock|Forge|Hammer|Concrete|Motion\sSensor|Acetylene\sTorch|Gunpowder|Vice|Shiv|Stun\sGun|Grenade| Untraceable\sCellphone|Set\sof\sIllegal\sTransaction\sRecords|Set\sof\sBlackmail\sPhotos|Computer\sSet-up|Health\sKit|[a-zA-Z']+)[*:=]*\s(http:\/\/tinyurl.com\/?\S{7}|http:\/\/bit.ly\/?\S{6}|http:\/\/spockon.me\/?\S{5})/g,
            m = re.exec(message);
            m != null;
            m = re.exec(m.input)) {

         giftList += m[1] + ': ' + m[2]+ '\n';
         linkname.push(m[1]);
         linkurl.push(m[2]);
      }
   //}
   //$g('friendlist').value = giftList.replace(/undefined/, '');
}

function organizefreegiftlinks(){
         var newloot;
         var bagstats = {};
         var bagstatsout = '';
         for (var i=0, il=linkname.length; i<il; i++) {

               currentGift = linkname[0];
               bagstats[currentGift] == undefined ? bagstats[currentGift]= {"count":0,"name":currentGift,"link":""} : "";
               bagstats[currentGift].count > 0 ? bagstats[currentGift].count++ : bagstats[currentGift].count = 1;
               bagstats[currentGift].link != ' ' ? bagstats[currentGift].link += bagstats[currentGift].count+' : '+currentGift+' : '+freegiftlink2(currentGift,linkurl[0]) + '<br>' : bagstats[currentGift].link = '';
			   
               linkname=linkname.slice(1);
               linkurl=linkurl.slice(1);
         }
         for (x in bagstats) {
            bagstatsout += bagstats[x].name+'<span class="good">:&nbsp;'+bagstats[x].count+'</span>&nbsp;'+ acceptAllLink(x) +' <div class="more_in">'+bagstats[x].link+'</div><br />';
         }
         $g('loot').innerHTML = bagstatsout;
         var acceptallbuton = xpathAll('.//a[@tag="acAll"]',$g('loot'));
          for (var i = 0, iLength = acceptallbuton.snapshotLength; i < iLength; ++i) {
            var elt = acceptallbuton.snapshotItem(i);
            elt.onclick = function (){acceptAll(this)};
          }
   }
var links = [];
var indx;
function acceptAll(elt){
   //force the link to be new
   links = [];
   var acceptallbuton = xpathAll('.//a[@tag="' + elt.getAttribute('loot')+ '"]',$g('loot'));
   for (var i = 0, iLength = acceptallbuton.snapshotLength; i < iLength; ++i) {
      var elt = acceptallbuton.snapshotItem(i);
      links.push(elt);
    }
   indx =0;
   clickNext();
}

function clickNext(){
   if(indx < links.length){
      gotoLink(links[indx]);
      indx++;
     }
}
function gotoLink(elt){
   elt.innerHTML='Visited Link';
   var div;
   if(indx%4==1)
      div = $g('iframediv1');
   else if(indx%4==2)
      div = $g('iframediv2');
   else if(indx%4==3)
      div = $g('iframediv3');
   else
      div = $g('iframediv4');

   div.innerHTML = '<iframe src="' + elt.getAttribute("href") + '" width="0" height="0">';
   setTimeout(clickNext,15*1000);
}
function acceptAllLink(loot) {
      return '<a href="#" tag="acAll" loot="'+loot+'" >[Accept All]</a>';
   }
function freegiftlink2(tag,link) {
      return '<a tag="'+tag+'"href="'+link+'" target="_blank" onclick="this.innerHTML=\'Visited Link\';">'+link+'</a>';
   }
function xpathAll(query, element) {
  var elt = (element == null) ? document : element;
  return document.evaluate(query, elt, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
}

function getTextContent(html){
   var tmp = $g("divTemp");
   tmp.innerHTML = html;
   return tmp.textContent||tmp.innerText;
}
})();