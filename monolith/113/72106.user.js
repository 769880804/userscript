// ==UserScript==
// @name           Highlight Attributes II, Mod A, Season 15
// @namespace      Greasemonkey
// @include        http://goallineblitz.com/game/player.pl?player_id=*
// @version        10.05.25
// ==/UserScript==

/*
 * written by forestmb @userscripts.org
 * modified by peteb @userscripts.org
 * modified by raiderdav @userscripts.org
 * modified by pabst 12/23/08+
 * modified by Tical2k
 * modified by txrulz
 */
var timeout = 100;

window.setTimeout( function(){
	var player_name = document.getElementsByClassName("large_title_bar")[0].firstChild.innerHTML;
	var position = document.getElementsByClassName("position")[0].innerHTML;
		
   var buildTypes = createBuilds(position);

   var selectBuild = document.createElement("select");
   selectBuild.setAttribute("id","selectBuild");
   selectBuild.setAttribute("style","float:right;");
   
   selectBuild.addEventListener('change', (function(n) {
      		return function (e) {
      			e.preventDefault();
      			highlightAttributes(n);
      		};
      	})(buildTypes), true);
   
   var option = document.createElement('option');
   option.text = 'Select Build Type';
   option.value = '';
   selectBuild.options.add(option,null);

   for(var i=0; i<buildTypes.length; i++){
      option = document.createElement('option');
      option.text = buildTypes[i].name;
      option.value = buildTypes[i].name;
      selectBuild.options.add(option,selectBuild.length);
   }
   
   // must insert compare element before "Player Attributes" for float to work correctly
   var medhead = getElementsByClassName('medium_head',document);   
   medhead[1].childNodes[0].parentNode.insertBefore(selectBuild, medhead[1].childNodes[0]);
   
   // insert the color key
   var colorKeyDiv = document.createElement("div");
   colorKeyDiv.setAttribute("id","colorKeyDiv");
   colorKeyDiv.innerHTML = "<span style='background:#59FF61;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>-Major <span style='background:#59CDFF;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>-Minor";
   var player_stats_table = getElementsByClassName("player_stats_table", document);
   player_stats_table[0].parentNode.insertBefore(colorKeyDiv, player_stats_table[0].nextSibling);

   var css = '#selectBuild,#selectBuild>option {font-weight:400;background-color:#FBFBF8;color:#a03c19;font-size:12px;font-family:arial;}';
   
   addGlobalStyle(css);
   
},timeout);

function highlightAttributes(buildTypes){
   var selectBuild = document.getElementById("selectBuild");
   var selectedName = selectBuild.options[selectBuild.selectedIndex].value;  
   var type;
   if(selectedName!=''){
      for(var i=0; i<buildTypes.length; i++)	{
         if(buildTypes[i].name == selectedName)
            type = buildTypes[i];
      }
      var exampleURL = document.createElement("a");
      exampleURL.setAttribute("id","exampleURL");
      exampleURL.setAttribute("href",type.url);
      exampleURL.innerHTML="Example Build";

      var importantColor = "#59FF61";
      var otherColor = "#59CDFF";      
      
      var stat_head = getElementsByClassName("stat_head_tall",document);
      
      for(var i = 0;i < stat_head.length;i++)
         stat_head[i].style.background = "none";

      for(var i=0; i<type.keys.length; i++){
         for(var j=0; j<stat_head.length; j++){
            if((type.keys[i] + ":") == stat_head[j].innerHTML){	
               stat_head[j].style.background = importantColor;
            }
         }
      }

      for(var i=0; i<type.other.length; i++){
         for(var j=0; j<stat_head.length; j++){
            if((type.other[i] + ":") == stat_head[j].innerHTML){	
               stat_head[j].style.background = otherColor;
            }
         }
      }	
   }
}

function createBuilds(position){
   var buildTypes = new Array();
   
   switch(position){
      case "FB":
         buildTypes[0] = new build("Balanced","Blocking,Strength,Speed","Agility,Vision","http://goallineblitz.com/game/player.pl?player_id=70335");
         buildTypes[1] = new build("Blocking","Blocking,Strength,Vision","Agility,Speed","http://goallineblitz.com/game/player.pl?player_id=113087");
         buildTypes[2] = new build("Rushing","Agility,Strength,Vision","Carrying,Blocking","http://goallineblitz.com/game/player.pl?player_id=27426");
	   buildTypes[3] = new build("Leveling(Running)","Agility,Carrying,Confidence,Strength","Blocking,Speed,Stamina,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Blocking)","Agility,Blocking,Strength,Vision","Carrying,Confidence,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(Combo)","Agility,Blocking,Carrying,Strength,Vision","Catching,Confidence,Jumping,Speed","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(Scat Back)","Agility,Catching,Speed,Vision","Blocking,Carrying,Confidence,Jumping","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[7] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;    
      case "QB":
         buildTypes[0] = new build("Pocket","Throwing,Vision,Strength","Confidence,Agility","http://goallineblitz.com/game/player.pl?player_id=50738");
         buildTypes[1] = new build("Rushing","Speed,Agility,Vision","Throwing,Strength,Confidence","#");
	   buildTypes[2] = new build("Leveling(Pocket Passer)","Confidence,Throwing,Vision","Agility,Stamina,Strength,Carrying","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[3] = new build("Leveling(Deep Passer)","Strength,Throwing,Vision","Agility,Confidence,Stamina,Carrying","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Scrambler)","Agility,Throwing,Vision","Confidence,Speed,Strength,Carrying","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "HB":
         buildTypes[0] = new build("Power","Agility,Strength,Speed","Vision,Carrying","http://goallineblitz.com/game/player.pl?player_id=143990");
         buildTypes[1] = new build("Elusive/Speed","Speed,Agility,Vision","Strength,Carrying","http://goallineblitz.com/game/player.pl?player_id=234173");
         buildTypes[2] = new build("Dual Threat Running/Catching","Agility,Catching,Vision","Speed,Carrying,Strength","#");
         buildTypes[3] = new build("KR/PR","Speed,Agility","Vision","http://goallineblitz.com/game/player.pl?player_id=43165");
	   buildTypes[4] = new build("Leveling(Power)","Agility,Carrying,Confidence,Strength","Jumping,Speed,Stamina,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(Elusive)","Agility,Carrying,Speed,Vision","Catching,Confidence,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(Scat Back)","Agility,Carrying,Catching,Speed","Confidence,Jumping,Stamina,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[7] = new build("Leveling(Combo)","Carrying,Confidence,Speed,Strength,Vision","Agility,Catching,Jumping,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[8] = new build("Leveling(Returner)","Agility,Carrying,Speed,Stamina,Vision","Confidence,Jumping,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[9] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "WR":
         buildTypes[0] = new build("Speed","Speed,Agility","Catching,Vision,Jumping","http://goallineblitz.com/game/player.pl?player_id=96246");
         buildTypes[1] = new build("Possession","Catching,Agility,Speed","Jumping,Vision,Confidence","http://goallineblitz.com/game/player.pl?player_id=27220");
         buildTypes[2] = new build("Balanced","Catching,Agility,Speed","Jumping,Vision","http://goallineblitz.com/game/player.pl?player_id=73885");
         buildTypes[3] = new build("KR/PR","Speed,Agility","Vision","http://goallineblitz.com/game/player.pl?player_id=43165");
	   buildTypes[4] = new build("Leveling(Speedster)","Agility,Catching,Confidence,Speed,Vision","Carrying,Jumping,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(Possession)","Agility,Carrying,Catching,Jumping,Vision","Confidence,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(Power)","Agility,Carrying,Catching,Strength,Vision","Confidence,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[7] = new build("Leveling(Returner)","Agility,Carrying,Speed,Stamina,Vision","Confidence,Jumping,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[8] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "TE":
         buildTypes[0] = new build("Recieving","Catching,Speed,Agility,Strength","Vision,Jumping","http://goallineblitz.com/game/player.pl?player_id=102646");
         buildTypes[1] = new build("Blocking","Blocking,Strength","Agility,Vision","http://goallineblitz.com/game/player.pl?player_id=268731");
         buildTypes[2] = new build("Balanced","Blocking,Strength,Catching","Agility,Vision","http://goallineblitz.com/game/player.pl?player_id=139990");
	   buildTypes[3] = new build("Leveling(Blocker)","Agility,Blocking,Confidence,Strength,Vision","Catching,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Power)","Agility,Carrying,Confidence,Catching,Strength","Blocking,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(Receiver)","Agility,Carrying,Catching,Speed,Vision","Blocking,Stamina,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(Combo)","Agility,Blocking,Catching,Strength,Vision","Confidence,Jumping,Speed","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138"); 
                   buildTypes[7] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "C":
         buildTypes[0] = new build("Center","Blocking,Strength,Vision,Agility","Speed,Confidence","http://goallineblitz.com/game/player.pl?player_id=35473");
         buildTypes[1] = new build("Balanced O-lineman","Strength,Blocking","Vision,Agility,Speed","http://goallineblitz.com/game/player.pl?player_id=73347");
	   buildTypes[2] = new build("Leveling(Pass Blocking)","Agility,Blocking,Confidence,Vision","Speed,Stamina,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[3] = new build("Leveling(Run Blocking)","Blocking,Confidence,Strength,Vision","Agility,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "G":
         buildTypes[0] = new build("Right Guard","Speed,Agility,Strength,Blocking","Vision","http://goallineblitz.com/game/player.pl?player_id=32210");
         buildTypes[1] = new build("Left Guard","Strength,Blocking","Vision,Agility ","http://goallineblitz.com/game/player.pl?player_id=73965");
         buildTypes[2] = new build("Balanced O-lineman","Strength,Blocking","Vision,Agility,Speed","http://goallineblitz.com/game/player.pl?player_id=73347");
	   buildTypes[3] = new build("Leveling(Pass Blocking)","Agility,Blocking,Confidence,Vision","Speed,Stamina,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Run Blocking)","Blocking,Confidence,Strength,Vision","Agility,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "OT":
         buildTypes[0] = new build("ROT","Strength,Blocking","Vision,Agility,Speed","http://goallineblitz.com/game/player.pl?player_id=33093");
         buildTypes[1] = new build("LOT","Strength,Blocking,Agility","Vision,Speed","http://goallineblitz.com/game/player.pl?player_id=42216");
         buildTypes[2] = new build("Balanced O-lineman","Strength,Blocking","Vision,Agility,Speed","http://goallineblitz.com/game/player.pl?player_id=73347");	
	   buildTypes[3] = new build("Leveling(Pass Blocking)","Agility,Blocking,Confidence,Vision","Speed,Stamina,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Run Blocking)","Blocking,Confidence,Strength,Vision","Agility,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "DT":
         buildTypes[0] = new build("Run Stopping","Strength,Agility","Tackling,Vision","http://goallineblitz.com/game/player.pl?player_id=235603");
         buildTypes[1] = new build("Pass Rush","Strength,Agility","Speed,Vision,Tackling","http://goallineblitz.com/game/player.pl?player_id=235671");
         buildTypes[2] = new build("Balanced","Strength,Agility,Tackling","Vision,Speed","http://goallineblitz.com/game/player.pl?player_id=26849");
	   buildTypes[3] = new build("Leveling(Strength)","Agility,Strength,Tackling,Vision","Confidence,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Speed)","Agility,Speed,Tackling,Vision","Confidence,Stamina,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(Combo)","Speed,Strength,Tackling,Vision","Agility,Confidence,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "DE":
         buildTypes[0] = new build("Run Stopping","Strength,Agility,Tackling","Vision,Speed","#");
         buildTypes[1] = new build("Pass Rush","Strength,Agility","Speed,Vision,Tackling","http://goallineblitz.com/game/player.pl?player_id=102668");
         buildTypes[2] = new build("Balanced","Strength,Agility","Vision,Tackling,Speed","http://goallineblitz.com/game/player.pl?player_id=185710");
	   buildTypes[3] = new build("Leveling(Strength)","Agility,Strength,Tackling,Vision","Confidence,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Speed)","Agility,Speed,Tackling,Vision","Confidence,Stamina,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(Combo)","Speed,Strength,Tackling,Vision","Agility,Confidence,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "LB":
         buildTypes[0] = new build("Blitzing LOLB","Speed,Agility,Vision,Strength","Tackling","http://goallineblitz.com/game/player.pl?player_id=116529");
         buildTypes[1] = new build("Coverage LOLB","Speed,Agility,Vision","Jumping,Tackling,Catching","#");
         buildTypes[2] = new build("Run Stuffing LOLB","Speed,Agility,Vision,Tackling","Strength","http://goallineblitz.com/game/player.pl?player_id=27087");
         buildTypes[3] = new build("Run Stuffing MLB","Tackling,Strength,Vision","Agility,Speed","http://goallineblitz.com/game/player.pl?player_id=32103");
         buildTypes[4] = new build("ROLB","Tackling,Agility,Vision,Strength","Speed","http://goallineblitz.com/game/player.pl?player_id=36646");	
	   buildTypes[5] = new build("Leveling(Coverage)","Agility,Jumping,Speed,Vision","Confidence,Stamina,Strength,Tackling","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(Blitzing)","Agility,Jumping,Speed,Tackling","Confidence,Stamina,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[7] = new build("Leveling(Hard Hitting)","Agility,Strength,Tackling,Vision","Confidence,Jumping,Speed,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[8] = new build("Leveling(Combo)","Agility,Confidence,Speed,Tackling,Vision","Jumping,Stamina,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[9] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "CB":
         buildTypes[0] = new build("Cornerback","Speed,Agility,Vision","Jumping,Catching","http://goallineblitz.com/game/player.pl?player_id=33072");
         buildTypes[1] = new build("KR/PR","Speed,Agility","Vision","http://goallineblitz.com/game/player.pl?player_id=43165");
                   buildTypes[2] = new build("Leveling(Man)","Agility,Jumping,Speed,Vision","Catching,Confidence,Stamina,Tackling","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[3] = new build("Leveling(Zone)","Agility,Speed,Tackling,Vision","Catching,Confidence,Jumping,Stamina,","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Hard Hitting)","Speed,Strength,Tackling,Vision","Agility,Confidence,Jumping,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(Combo)","Agility,Speed,Strength,Tackling","Confidence,Jumping,Stamina,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(Returner)","Agility,Carrying,Speed,Stamina,Vision","Confidence,Jumping,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[7] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "SS":
         buildTypes[0] = new build("Run Stuffing","Vision,Tackling,Strength","Speed,Agility","#");
         buildTypes[1] = new build("Coverage","Speed,Vision","Agility,Tackling,Jumping","http://goallineblitz.com/game/player.pl?player_id=26755");
         buildTypes[2] = new build("Balanced","Speed,Vision,Tackling","Strength,Agility","http://goallineblitz.com/game/player.pl?player_id=95567");	
	   buildTypes[3] = new build("Leveling(Man)","Agility,Jumping,Speed,Vision","Catching,Confidence,Stamina,Tackling","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Zone)","Agility,Speed,Tackling,Vision","Catching,Confidence,Jumping,Stamina,","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(Hard Hitting)","Speed,Strength,Tackling,Vision","Agility,Confidence,Jumping,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(Combo)","Agility,Speed,Strength,Tackling","Confidence,Jumping,Stamina,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[7] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "FS":
         buildTypes[0] = new build("Run Stuffing","Vision,Tackling,Strength","Speed,Agility","#");
         buildTypes[1] = new build("Coverage","Speed,Vision","Agility,Tackling,Jumping","http://goallineblitz.com/game/player.pl?player_id=40458");
         buildTypes[2] = new build("Balanced","Speed,Vision,Tackling","Strength,Agility","http://goallineblitz.com/game/player.pl?player_id=31310");
                   buildTypes[3] = new build("Leveling(Man)","Agility,Jumping,Speed,Vision","Catching,Confidence,Stamina,Tackling","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[4] = new build("Leveling(Zone)","Agility,Speed,Tackling,Vision","Catching,Confidence,Jumping,Stamina,","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[5] = new build("Leveling(Hard Hitting)","Speed,Strength,Tackling,Vision","Agility,Confidence,Jumping,Stamina","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[6] = new build("Leveling(Combo)","Agility,Speed,Strength,Tackling","Confidence,Jumping,Stamina,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[7] = new build("Leveling(STOP)","Agility,Blocking,Speed,Stamina,Tackling","Confidence,Strength,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "K":
         buildTypes[0] = new build("Kicker","Kicking,Strength,Vision","Confidence,Agility,Speed","http://goallineblitz.com/game/player.pl?player_id=28748");	
	   buildTypes[1] = new build("Leveling(Boomer)","Confidence,Kicking,Strength","Agility,Jumping,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[2] = new build("Leveling(Technician)","Confidence,Kicking,Vision","Agility,Jumping,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
      case "P":
         buildTypes[0] = new build("Punter","Punting","Strength,Vision,Agility,Speed,Jumping,Confidence","http://goallineblitz.com/game/player.pl?player_id=28642");
	   buildTypes[1] = new build("Leveling(Boomer)","Confidence,Punting,Strength","Agility,Jumping,Vision","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
                   buildTypes[2] = new build("Leveling(Technician)","Confidence,Punting,Vision","Agility,Jumping,Strength","http://goallineblitz.com/game/forum_thread.pl?thread_id=3768138");
        break;
   }
   
   return buildTypes;
}

function testFunc(testing){
   var testContainer = document.getElementById("attribute_list").firstChild;
   var testElement = document.createElement("p");
   testElement.innerHTML = testing;
   //testContainer.appendChild(testElement);
   testContainer.parentNode.insertBefore(testElement,testContainer);
}

function build(n,keyAt,otherAt,example){
   this.name = n;
   this.url = example;
   this.keys = keyAt.split(",");
   this.other = otherAt.split(",");
}

function getElementsByClassName(classname, par){
   var a=[];   
   var re = new RegExp('\\b' + classname + '\\b');    	
   var els = par.getElementsByTagName("*"); 
   for(var i=0,j=els.length; i<j; i++){       
      if(re.test(els[i].className)){	
         a.push(els[i]);
      }
   }
   return a;
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}