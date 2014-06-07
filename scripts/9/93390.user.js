// ==UserScript==
// @name           Bots4 Level Bar
// @namespace      Bots4 Level Bar
// @description    Bots4 Level Bar
// @include        http://*bots4.net/workshop
//
// @author         Alan
// @version        2010-12-22
// ==/UserScript==

var lvlArray = [0,200,300,390,507,659,857,1114,1448,1882,2447,3181,4136,5376,6989,9086,11812,15356,19962,25951,33737,43858,57015,74119,96355,125262,162840,211692,275200,357760,465088,604614,785999,1021798,1328338,1726839,2244891,2469379,2716317,2987949,3286743,3615418,3976960,4374656,4812121,5293333,5822667,6404933,7045426,7749969,8524966,9377463,10315209,11346730,12481403,13729543,15102497,16612747,18274022,20101424,22111566,24322723,26754995,29430495,32373544,35610899,39171989,43089188,47398106,52137917,57351709,63086879,69395567,76335124,83968637,92365500,101602050,111762255,122938481,135232329,148755562,163631118,176721605,190859334,206128080,222618327,240427793,259662016,280434978,302869776,327099358,353267307,381528691,412050986,445015065,480616271,519065572,560590818,605438084,653873130,706182981,762677619,823691829,889587175,960754149,1037614481,1120623639,1210273530,1307095413,1411663046,1524596090,1646563777,1778288879,1920551989,2074196148,2240131840,2419342387,2612889778,2821920961,3047674637,3291488608,3554807697,3839192313,4146327698,4478033914,4836276627,5223178757,5641033058,6092315702,6579700958,7106077035,7674563198,8288528254,8951610514,9667739355,10441158503,11276451184,12178567278,13152852661,14205080873,15341487343,16568806331,17894310837,19325855704,20871924161,22541678093,24345012341,26292613328,28396022394,30667704186,33121120521,35770810162,37559350670,39437318204,41409184114,43479643320,45653625485,47936306760,50333122098,52849778203,55492267113,58266880468,61180224492,64239235716,67451197502,70823757377,74364945246,78083192509,81987352134,86086719741,90391055728,94910608514,99656138940,104638945887,109870893181,115364437840,121132659732,127189292719,133548757355,140226195222,147237504983,154599380233,159237361640,164014482489,168934916964,174002964473,179223053407,184599745009,190137737359,195841869480,201717125565,207768639332,214001698512,220421749467,227034401951,233845434009,240860797030,248086620941,255529219569,263195096156,271090949041,279223677512,287600387837,296228399472,305115251456,314268709000,323696770270,333407673378,343409903580,353712200687,364323566708,375253273709,386510871920,398106198078,410049384020,422350865541,435021391507,448072033252,461514194250,475359620077,489620408679,504309020940,519438291568,535021440315,551072083524,567604246030,584632373411,602171344613,620236484952,638843579500,658008886885,677749153492,698081628097,719024076939,740594799248,762812643225,785697022522,809267933198,833545971193,858552350329,884308920839,910838188464,938163334118,966308234142,995297481166,1025156405600,1055911097770,1087588430700,1120216083620,1153822566130,1188437243120,1224090360410,1260813071220,1298637463360,1337596587260,1377724484880,1419056219420,1461627906010,1505476743190,1550641045480,1597160276850,1645075085150,1694427337710,1745260157840,1797617962570,1851546501450,1907092896490,1964305683390,2023234853890,2083931899510,2146449856490,2210843352190,2277168652750,2345483712330,2415848223700,2488323670410,2562973380530,2639862581940,2719058459400,2800630213180,2884649119580,2971188593170,3060324250960,3152133978490,3246697997850,3344098937780,3444421905910,3547754563090,3654187199980,3763812815980,3876727200460,3993029016480,4112819886970,4236204483580,4363290618090,4494189336630,4629015016730,4767885467230,4910922031250,5058249692190,5209997182950,5366297098439,5527286011392,5693104591733,5863897729485,6039814661370,6221009101211,6407639374247,6599868555475,6797864612139,7001800550503,7211854567018,7428210204029,7651056510150,7880588205454,8117005851618,8360516027166,8611331507981,8869671453221,9135761596817,9409834444722,9692129478064,9982893362406,10282380163278,10590851568176,10908577115221,11235834428678,11572909461538,11920096745385,12277699647746,12646030637178,13025411556294,13416173902983,13818659120072,14233218893674,14660215460484,15100021924299,15553022582028,16019613259489,16500201657273,16995207706992,17505063938201,18030215856347,18571122332038,19128256001999,19702103682059,20293166792521,20901961796296,21529020650185,22174891269691,22840138007782,23525342148015,24231102412455,24958035484829,25706776549374,26477979845855,27272319241231,28090488818468,28933203483022,29801199587512,30695235575138,31616092642392,32564575421664,33541512684314,34547758064843,35584190806788,36651716530992,37751268026922,38883806067729,40050320249761,41251829857254,42489384752972,43764066295561,45076988284428,46429297932961,47822176870949,49256842177078,50734547442390,52256583865662,53824281381632,55439009823081,57102180117773,58815245521306,60579702886946,62397093973554,64269006792761,66197076996543,68182989306440,70228478985633,72335333355202,74505393355858,76740555156534,79042771811230,81414054965567,83856476614534,86372170912970,88963336040359,91632236121569,94381203205216,97212639301373,100129018480414,103132889034827];
function IsNumeric(sText) { if(!sText) { sText = 1; } var ValidChars = "0123456789"; var IsNumber=true; var Char; for (i = 0; i < sText.length && IsNumber == true; i++) { Char = sText.charAt(i); if (ValidChars.indexOf(Char) == -1) { IsNumber = false; } } return IsNumber; }
function getExp() { var ni = document.getElementsByTagName('span'); if(ni) { var stuff = ni[1]; str = stuff.innerHTML; var ne = str.split(''); var exp = new Array(); for(var x=0; x<= ne.length; x++) { if(IsNumeric(ne[x]) == true) { exp[x] = ne[x]; } else { } } var uh = exp.toString(); finalx = uh.replace(/,/g,""); return finalx; }else { return 0; } }
function getLevel() { var ni = document.getElementsByTagName('td'); if(ni) { var stuff = ni[12].innerHTML; var uh = stuff.split(""); var finalx = new Array(); if(IsNumeric(uh[0])) { finalx[0] = uh[0]; } if(IsNumeric(uh[1])) { finalx[1] = uh[1]; } if(IsNumeric(uh[2])) { finalx[2] = uh[2]; } finaly = finalx.toString(); stuff = finaly.replace(/,/g,""); return stuff; } else { return 0; } }
function getDiv() {
var youexp = getExp();
var youlvl = getLevel();

var totalexpneed = lvlArray[youlvl];
var expdone = totalexpneed - youexp;
if(expdone < 0) { expdone = 0; }
var percent = Math.round(expdone / totalexpneed * 10);
//txt = 'You are '+percent+'% done with level '+youlvl + getDiv();
return percent;
	}
function alan() {
var ni = document.getElementsByTagName('h2');
if(ni) {
var stuff = ni[0];

if(stuff.innerHTML == 'Bot') {
// Found

var newDiv = document.createElement("div");
newDiv.setAtrribute = ("style");
newDiv.style.width = '500px';
newDiv.style.height = '30px';
newDiv.style.backgroundColor = 'rgb(0,0,0)';
if(getDiv()<=100) { newDiv.innerHTML = '&nbsp;&nbsp;'+getDiv()+'%'; }
newDiv.style.color = 'rgb(250,0,0)';
newDiv.style.border = '2px solid #ffffff';
var newT = document.createElement("div");
if(getDiv()>100) { newT.innerHTML = '&nbsp;&nbsp;'+getDiv()+'%'; }
newT.setAtrribute = ("style");
newT.style.backgroundColor = '#272727';
newT.style.width = getDiv()*500+'px';
newDiv.appendChild(newT);
stuff.appendChild(newDiv);
}

}
else { alert('Found Nothing...'); }
}
alan();