// ==UserScript==
// @name           Player
// @namespace      http://userscripts.org/users/105735
// @include        http://*.wrzuta.pl/audio/*
// ==/UserScript==

var rrr = document.getElementById('file_info_media');
linkbs = document.location.href.replace(/audio/, 'sr/f');

rrr.innerHTML = '<object type="application/x-shockwave-flash" data="http://dl.dropbox.com/u/663319/dewplayer.swf" width="200" height="20" id="dewplayer" name="dewplayer"><param name="movie" value="http://dl.dropbox.com/u/663319/dewplayer.swf" /><param name="flashvars" value="mp3='+linkbs+'" /><param name="wmode" value="transparent" /></object>';