// ==UserScript==
// @name           UserCSS Twilight
// @namespace      twi
// @description    UserCSS for chromr
// @include        http://*
//
// ==/UserScript==
GM_addStyle(
        "html  *, html {"
        +"background:#161616 !important;"
        +"color:#F8F8F8 !important;"
        +"font-size: 15px !important;"
        +"font-family: terminus !important;        }"
        /*        font-family: "Bitstream Vera Sans Mono","Monaco","Courier New",monospace !important; */

        +"a {            color:#cda869 !important;        }"
        +"a:hover {            color:#cf6a4c !important;        }"
        +"a:visited {      color:#9b703f !important;        }"

        +"input, select, textarea, button {"
        +" -moz-appearance: none !important;"
        +"  border: 1px solid #8f9d6a !important;"
        +"  background-color: #202020 !important;"
        +"  color: #F8F8F8 !important;}"

        +"code, pre, input, samp, kbd, var, dfn { "
        +" -moz-appearance: none !important;"
        +"  color: lightgrey !important; "
        +"  background-color: #111 !important; }"

        );