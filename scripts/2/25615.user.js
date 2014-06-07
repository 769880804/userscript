// ==UserScript==
// @name          Download YouTube Video III
//@namespace DownloadYouTubeVideoIII
// @description   adds "Download This Video" link and icon
// @include       http://*youtube.com/watch?v=*
// ==/UserScript==

var mp = document.getElementById("movie_player");
	
//create image
var imgdownload = document.createElement('img');
imgdownload.setAttribute('class','alignMid ');
imgdownload.src = "data:image/gif,GIF89a%10%00%10%00%D55%00%E7%E7%E7xxxVVVUUUkkkRRR%85%85%85LLL%CE%CE%CE___%AB%AB%AB%D4%D4%D4%B5%B5%B5%3E%3E%3Eaaa%B2%B2%B2%2F%2F%2FDDD%CA%CA%CA%B7%B7%B7PPP333888%5C%5C%5C%A7%A7%A7%AD%AD%AD%DE%DE%DE%A4%A4%A4%D7%D7%D7%BB%BB%BB%C4%C4%C4%99%99%99eee%D0%D0%D0%B3%B3%B3%C1%C1%C1%A9%A9%A9%A1%A1%A1%90%90%90JJJ%F1%F1%F1%B1%B1%B1ZZZ%F5%F5%F5%F9%F9%F9EEE%FD%FD%FD%ED%ED%EDlll%2B%2B%2B%92%92%92%9F%9F%9F%FF%FF%FF%FF%FF%FF%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%01%00%005%00%2C%00%00%00%00%10%00%10%00%00%06%98%C0%9ApH%2C%0A5%25%98r%A9%24%15g%22%40kJm%7D0D%90't%EA%D2%BE'%8Ei3t0%18%85%F4b%5D%18u%1C%C3%8BB%A1%AA%DBU%19%C5e(%98%F9%FF%803%02C%142%86%87%882%14C'%06%06_%90_%8E'C%11%01%01.%99%9A.%97%11C%0D%04%04%2C%A3%A4%2C%A1%0DC%16%09%09%2B%AD%AE%2B%AB%16B%00%15%03%03(%B8%B9(%B6%15%005%08%10%07%07%2F%C4%C5%2F%C2%10%08%BF%021%CD%CE%CF1%02%CA%00%12%13%0F)%D8%D9)%0F%13%12%BEA%00%3B";

//get download address
if(mp.getAttribute("src") && mp.getAttribute("src").search(/video_id/) > -1)// PreventAutoplay compatibility
   flAddress = mp.getAttribute("src");
else