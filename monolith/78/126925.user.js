// ==UserScript==
// @name           kaskusBetaFixSakitMata
// @namespace      adamantoise
// @version 	   1.2.4
// @description    fix kaskus beta color which causes sakit mata
// @include        http://livebeta.kaskus.co.id/*
// What it does: 
//  -Set post text color from grey to black
//  -Set post background color from white to vbulletin's blue
//  -Set post list link color to black
//  -Set post and quote text font to verdana
//  -Set post header background to dark blue
//  -Set FJB post header background to darker color
//  
//
// Changelog:
// V 1.2.4
// Background now is optional
//
// V 1.2.3
// Kaskus domain change
// Change Background image
//
// V 1.2.2
// Quote text font set to verdana
// FJB header ribbon color set to darker color
//
// V 1.2.1
// text selection color fix
//
// v 1.2
// only post text using verdana
// visited link color removed
// 
// v 1.1.2
// minor adjustments
//
// v 1.1.1
// Forum padding right decreased
// Font size for post link, meta and stat decreased
//
// v 1.1
// Font type: verdana, dkk
// Forum thread link color: black
// Forum thread link visited color: grey
// Rate info: black, no shadow
//
// v 1.0.1
//  -Change background color darker(same as old kaskus)
// ==/UserScript==

// Ganti URL dengan gambar yang diinginkan
var latar ="http://www.wall-pix.net/albums/miscellaneous-brands/00003418.jpg";
var css=""+
"body { color: black; background-color:#EAE5CE; "+

//jika ingin menggunakan background, hilangkan tanda // di bawah ini
//"background: url('"+ latar+" ') !important; "+

"background-repeat:no-repeat !important; background-size:100% 100% !important;	background-attachment:fixed !important;}"+
"a:visited {color:transparent !important} "+
"#breadcrumb-wrap{color:black;} "+
"#breadcrumb-wrap a:visited{color:rgb(33, 100, 183);}"+
"#header-wrapper{background:none !important}"+
".post-entry{background-color: #F5F5FF;}"+
".post-header{background-color:#457BB7 !important; background-image:none !important;} "+
".link_thread_title {color:black !important; } "+
".rate span {color:black !important; text-shadow:none !important;} "+
".post-title a, .post-content a{color:black !important} "+
".reputation-table a:visited{color:rgb(33, 100, 183) !important;} "+
" ::selection{background:#3396fe; color:white}::-moz-selection{background:#3396fe; color:white}"+
" .fjb .post-header{background-color:#E0710F !important; background-image:none !important; text-shadow:1px 1px rgb(147,74,10) !important;}"
;
GM_addStyle(css);