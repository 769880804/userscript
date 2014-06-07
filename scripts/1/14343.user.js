// ==UserScript==
// @name	W3Schools Prettifier
// @namespace	http://www.mudeth.org/
// @description	Makes W3Schools look better
// @include	http://www.w3schools.com/*
// @include	http://w3schools.com/*
// ==

var css="body { font-size: 70%; line-height: 1.5em; color:#444; background-color: #777; margin:0px; }  th.right { opacity: 0.5; }  th.right:hover { opacity: 1; }  #foobar { width: 90%; padding: 0 10px 10px 10px; margin: 0; border: 1px dotted #bbb; }  th { border: 1px dotted #333; background: #6bf; }  body, p, h1, h2, h3, table, td, th, ul, ol, textarea, input { font-family: 'lucida grande', arial, sans-serif; }  table, input, textarea { font-size: 100%; }  table.ex { color:#000000; background-color:#eee; font-size: 100%; border: none; padding:0px; }  table.tip { color:#000000; background-color:#ffffff; font-size: 100%; border:1px solid; }  table.db { color:#000000; background-color:#ffffff; font-size:100%; }  th.db { color:#000000; background-color:#f1f1f1; }  div {width:100%;}  h1 {font-size:2em;line-height: 1.9em; } h2 {font-size:1.5em;line-height: 1.4em;margin-top:10px;margin-bottom:10px; } h3 {font-size:10%;} h4 {font-size:100%;} h5 {font-size:90%;} h6 {font-size:80%;}  h2.home { margin-top:0px; margin-bottom:5px; font-size:120%; padding-top:1px; padding-bottom:1px; padding-left:1px; color:#900B09; background-color:#ffffff; }  h2.tutheader { margin-top:0px; margin-bottom:5px; font-size:110%; padding-top:0px; padding-bottom:1px; padding-left:4px; color:#ffffff; background-color:#6bf; }  h2.right { text-align:center; font-size:100%; margin-top:0px; margin-bottom:0px; padding-top:0px; padding-bottom:2px; padding-left:0px; color:#ffffff; background-color:#6bf; height: 20px; font-family: arial; font-size: 1.4em; }  table.right { color:#000000; background-color:#66bbff; border:none; margin-bottom:1px; }  th.right { color:#ffffff; background-color:transparent; padding-bottom:2px; }  td.right { color:#000000; background-color:#4ae; font-size: 0.5em; padding: 3px; }  div.w3left {color:#900B09;background-color:#f1f1f1;}  td.content {color:white;background-color:#6bf; font-size: 1em; width: 200px !important; line-height:1.5em;} td.deprecated {color: #FF0000;background-color:transparent} td.red {color: #FF0000;background-color:transparent;} p.red {color: #FF0000;background-color:transparent;}  p.intro { font-size:1.2em; line-height: 1.2em; font-weight:bold; color:#666; background-color:#def; padding: 10px 5px 10px 5px; margin: 5px -5px 5px -5px; }  p.introcenter { text-align:center; font-size:1.2em; line-height: 1.2em; font-weight:bold; color:#666; background-color:#def; padding: 10px 5px 10px 5px; margin: 5px -5px 5px -5px; }  pre { font-family:'Courier New',monospace; font-size:110%; margin-left: 0; margin-bottom: 0; }  span.blue { color:#00008B; background-color:transparent; }  span.rssblue { color:#0000ff; background-color:transparent; }  span.red { color:#FF0000; background-color:transparent; }  span.ieonly { color:#000080; background-color:transparent; font-size:80%; }  span.t { color:#0033cc; background-color:transparent; font-size:80%; }  span.marked { color:#FF0000; background-color:transparent; }  img.float { float:left; }  img.navup { vertical-align: middle; }  h1, h2, h3 { background-color:transparent; color:#000000;  }  h1.att, h2.att, h3.att, hr.att { background-color:transparent; color:#000000;  }  hr { background-color:#eee; border: none; height:1px; margin: 0 0 3px 0; }  table.front { color:#000000; background-color:#f1f1f1; }  th.front { color:#ffffff; background-color:#666666; }  td.front { color:#000000; background-color:#f1f1f1; }  a.nounderline{text-decoration:none}  a:link    {color:#25f; background-color:transparent; text-decoration: none;} a:visited {color:#97f; text-decoration: none;} a:active  {color:#359; background-color:transparent} a:hover   {color:#359; background-color:#eee; }  a.left:link    {text-decoration:none;color:black;background-color:transparent} a.left:visited {text-decoration:none;color:black;background-color:transparent} a.left:hover   {text-decoration:underline;color:black;background-color:transparent} a.left:active  {text-decoration:underline;color:black;background-color:transparent}  a.red:link    {color:white; background-color:transparent} a.red:visited {color:#ddd; background-color:transparent} a.red:active  {color:#FF0000; background-color:transparent} a.red:hover   {color:#eee; background-color:#49f;}  a.example    {font-weight:bold}  a.anibutton:link, a.anibutton:visited { color: #000000; border: 2px outset; text-align: center; background: #ffff00; text-decoration: none; padding: 1px 5px 1px 10px; line-height: 200%; }  a.anibutton:hover { color: #000000; border: 2px inset; background: #ffff10;  text-decoration: none; padding: 1px 5px 1px 10px; line-height: 200%; }  /* CSS Document - SitePoint specific CSS for W3Schools */  #sp { 	padding:10px 3px; 	text-align:left; } #sp p { 	float:left; 	border:0px none; 	padding:0px; 	margin:4px 0px; } #sp p img { 	float:left; 	border:0px none; 	padding-right:2px; } #sp p.splink { 	padding:0px 0px 0px 0px; 	margin:0px 0px 14px 0px; } #sp p.splink a { 	color:#0000FF; 	font:bold xx-small Verdana, Arial, Helvetica, sans-serif;  } span.insert { 	color:#e80000; 	background-color:transparent;  ";

var eles = document.getElementsByTagName('h1');
if(eles) {
	var h1 = eles[0];
	if(h1) {
		var boder = h1.parentNode.parentNode.parentNode.parentNode.parentNode;
		boder.id = 'foobar';
		GM_addStyle(css);
	}
}