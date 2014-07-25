// ==UserScript==

// @name           Urban Dead Revive Radar
// @namespace      http://mattandchristy.net/udrr
// @description    Locates the nearest active UD revive point
// @include        http://*urbandead.com/map.cgi*

// ==/UserScript==

/* /////////////////////////////////////////////////////////////

  Urban Dead Revive Radar
  version 0.5.1
  
  The Urban Dead Revive Radar will show you the distance to
  the nearest 3 (or more) revivification points.  It could
  probably stand some usability enhancements and I definitely
  would prefer if someone else took over the duty of keeping
  the reviv-point list up to date (I can host it on my server
  unless the traffic gets ridiculous).
  
  Update 2010-01-18: updated to http://radar.c-n-1.co.cc/list
  for a list of reviv points.
  
  Troubleshooting:
  If UDRR isn't showing up underneath the main (right) side
  of the screen when you're playing UD, open the JavaScript
  Console and see if it printed any messages.  Email me at
  matt@mattandchristy.net and I'll do my best to help you.
  
  THANKS TO:
  - the creator of JSON: http://www.json.org
  - the creator of the Urban Dead UDMap userscript

///////////////////////////////////////////////////////////// */


/// This code makes use of JSON: http://www.json.org ///
/*
Copyright (c) 2005 JSON.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The Software shall be used for Good, not Evil.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*
    The global object JSON contains two methods.

    JSON.stringify(value) takes a JavaScript value and produces a JSON text.
    The value must not be cyclical.

    JSON.parse(text) takes a JSON text and produces a JavaScript value. It will
    throw a 'JSONError' exception if there is an error.
*/
var JSON = {
    copyright: '(c)2005 JSON.org',
    license: 'http://www.crockford.com/JSON/license.html',
/*
    Stringify a JavaScript value, producing a JSON text.
*/
    stringify: function (v) {
        var a = [];

/*
    Emit a string.
*/
        function e(s) {
            a[a.length] = s;
        }

/*
    Convert a value.
*/
        function g(x) {
            var c, i, l, v;

            switch (typeof x) {
            case 'object':
                if (x) {
                    if (x instanceof Array) {
                        e('[');
                        l = a.length;
                        for (i = 0; i < x.length; i += 1) {
                            v = x[i];
                            if (typeof v != 'undefined' &&
                                    typeof v != 'function') {
                                if (l < a.length) {
                                    e(',');
                                }
                                g(v);
                            }
                        }
                        e(']');
                        return;
                    } else if (typeof x.valueOf == 'function') {
                        e('{');
                        l = a.length;
                        for (i in x) {
                            v = x[i];
                            if (typeof v != 'undefined' &&
                                    typeof v != 'function' &&
                                    (!v || typeof v != 'object' ||
                                        typeof v.valueOf == 'function')) {
                                if (l < a.length) {
                                    e(',');
                                }
                                g(i);
                                e(':');
                                g(v);
                            }
                        }
                        return e('}');
                    }
                }
                e('null');
                return;
            case 'number':
                e(isFinite(x) ? +x : 'null');
                return;
            case 'string':
                l = x.length;
                e('"');
                for (i = 0; i < l; i += 1) {
                    c = x.charAt(i);
                    if (c >= ' ') {
                        if (c == '\\' || c == '"') {
                            e('\\');
                        }
                        e(c);
                    } else {
                        switch (c) {
                        case '\b':
                            e('\\b');
                            break;
                        case '\f':
                            e('\\f');
                            break;
                        case '\n':
                            e('\\n');
                            break;
                        case '\r':
                            e('\\r');
                            break;
                        case '\t':
                            e('\\t');
                            break;
                        default:
                            c = c.charCodeAt();
                            e('\\u00' + Math.floor(c / 16).toString(16) +
                                (c % 16).toString(16));
                        }
                    }
                }
                e('"');
                return;
            case 'boolean':
                e(String(x));
                return;
            default:
                e('null');
                return;
            }
        }
        g(v);
        return a.join('');
    },
/*
    Parse a JSON text, producing a JavaScript value.
*/
    parse: function (text) {
        return (/^(\s+|[,:{}\[\]]|"(\\["\\\/bfnrtu]|[^\x00-\x1f"\\]+)*"|-?\d+(\.\d*)?([eE][+-]?\d+)?|true|false|null)+$/.test(text)) &&
            eval('(' + text + ')');
    }
};
/// end JSON ///



/// BEGIN UDREVIVERADAR ///

// define some constants
const UDRR_SERVER    = 'http://radar.c-n-1.co.cc/list'; // contact cashier.no.1@googlemail.com for information about this list
//const UDRR_SERVER    = 'http://radar.aypok.co.uk/';
//const UDRR_SERVER    = 'http://mattandchristy.net/udrr/udrr-coords.php'; // removed in v0.5
//const UDRR_SERVER    = 'http://localhost/~matt/udrr/udrr-coords.php';
const UDRR_USERAGENT = 'Mozilla/4.0 (compatible) Greasemonkey';
const UDRR_TITLE     = "Revive Radar:";

const COORD_PLAYER_X = 0;
const COORD_PLAYER_Y = 1;

const COORD_SERVER_X = 0;
const COORD_SERVER_Y = 1;
const COORD_SERVER_NOTE = 2;
const COORD_DISTANCE = 3;

// this is the continuation of the program; see below where the script begins
var finishLoading = function (revive_coords) {
// compute distances and sort ascending
player_coords = parse_city_coords();
distances = distance(player_coords, revive_coords);
if(!distances.sort)
{
  GM_log("Something has gone wrong; probably unable to contact UDRR server.");
  return;
}
distances.sort(numsort);

// create directions
outerdiv = document.createElement("div");
outerdiv.setAttribute("class", "gt");
heading = document.createTextNode(UDRR_TITLE);
outerdiv.appendChild(heading);
directions = document.createElement("ol");
directions.id = "revive-ol";
//debug//li = document.createElement("p");
//debug//li.innerHTML = "(You are at ["+player_coords[COORD_PLAYER_X]+","+player_coords[COORD_PLAYER_Y]+"].)";
//debug//directions.appendChild(li);
for(i = 0; i < distances.length; i++)
{
  li = document.createElement("li");
  li.innerHTML = create_directions(player_coords, distances[i]);
  
  // add the "more" link
  if(i == 3) {
    li2 = document.createElement("li");
    li2.innerHTML = "<span class='y' style='color: #f99'>More...</span>";
    li2.id = "revive-more";
    //li2.setAttribute("class","y");
    li2.addEventListener('click',
                         function () {
                           // grabbing and hiding the OL will force a reflow
                           // to eliminate the #9 bug
                           var ol = document.getElementById("revive-ol");
                           ol.style.display = "none";
                           
                           // remove the style that hides elements 4+
                           var style = document.getElementById("revive-style");
                           style.parentNode.removeChild(style);
                           
                           // remove the link that triggered this event
                           var link = document.getElementById("revive-more");
                           link.parentNode.removeChild(link);
                           
                           // reflow
                           ol.style.display = "block";
                         },
                         false);
    directions.appendChild(li2);
  }
  if(i >= 3)
    li.setAttribute("class","revive-hidden");
  
  directions.appendChild(li);
}
outerdiv.appendChild(directions);

// set up the new styles we need
setup_styles();

// display directions
var table = document.getElementsByTagName("table").item(0);
if(table){
  
  tr1 = table.getElementsByTagName("tr").item(0);
  if(tr1)
  {
    tr1.lastChild.appendChild(outerdiv);
    
  }
}  


// find the coordinates of the player
// this function shamelessly stolen from 
// Zombie-HQ.UDMap
function parse_city_coords(){
  
  /* coordinates of upper left tile */
  inputs=document.getElementsByTagName("input");
  
  for(i=0; i<inputs.length; i++){
    
    /* searches for the top left cell in the map */
    input = inputs[i];
    if(coords = input.value.match( /^(\d+)-(\d+)$/ )){
      
      c = coords[1];
      r = coords[2];
      
      // what was he doing?!?
      //r_mod = 0; c_mod = 0;
      	
      //if(r % 10)
      //  r_mod = 1;
      
      //if(c % 10)
      //  c_mod = 1;
      
      //coords[1] = parseInt(coords[1])+c_mod;
      //coords[2] = parseInt(coords[2])+r_mod;
      
      //returnCoords = Array();
      //returnCoords[COORD_PLAYER_X] = coords[1];
      //returnCoords[COORD_PLAYER_Y] = coords[2];
      
      // this looks right
      X_add = (parseInt(coords[1]) > 0) ? 1 : 0;
      Y_add = (parseInt(coords[2]) > 0) ? 1 : 0;
      
      returnCoords = Array();
      returnCoords[COORD_PLAYER_X] = parseInt(coords[1])+X_add;
      returnCoords[COORD_PLAYER_Y] = parseInt(coords[2])+Y_add;
      
      return returnCoords;
    }
  }
}

// computes the distance function
function distance(player_coords, revive_coords)
{
  for(i = 0; i < revive_coords.length; i++)
  {
    x_dist = (revive_coords[i][COORD_SERVER_X] - player_coords[COORD_PLAYER_X]);
    y_dist = (revive_coords[i][COORD_SERVER_Y] - player_coords[COORD_PLAYER_Y]);
    revive_coords[i][COORD_DISTANCE] = Math.max(Math.abs(x_dist), Math.abs(y_dist));
  }
  
  return revive_coords;
}

// numeric sort
function numsort(a, b) { return a[COORD_DISTANCE] - b[COORD_DISTANCE]; }

// directions creator
function create_directions(player_coords, r_point)
{
  dir_x = player_coords[COORD_PLAYER_X] - r_point[COORD_SERVER_X];
  dir_y = player_coords[COORD_PLAYER_Y] - r_point[COORD_SERVER_Y];
  lbl_x = "";
  lbl_y = "";
  
  note = (r_point.length > 3) ? "  <span class=\"revive-note\">[" + r_point[COORD_SERVER_NOTE] + "]</span>" : "";
  
  if(dir_x < 0)      lbl_x = Math.abs(dir_x) + " east";
  else if(dir_x > 0) lbl_x = dir_x + " west";

  if(dir_y < 0)      lbl_y = Math.abs(dir_y) + " south";
  else if(dir_y > 0) lbl_y = dir_y + " north";
  
  if(lbl_x + lbl_y == "")
    return("You are at a revive point." + note);
  else
    return(lbl_x + " " + lbl_y
         //debug//+ " @ [" + r_point[COORD_SERVER_X] + "," + r_point[COORD_SERVER_Y] + "]"
         + " (distance: " + r_point[COORD_DISTANCE] + ")"
         + note);
}

function setup_styles()
{
  var head, style1, style2;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  
  // this style gets deleted later
  style1 = document.createElement('style');
  style1.type = 'text/css';
  style1.id = "revive-style";
  style1.innerHTML = ".revive-hidden { display:none; } "
                   + "#revive-more { cursor:pointer; } ";
  head.appendChild(style1);
  
  // this one does not
  style2 = document.createElement('style');
  style2.type = 'text/css';
  style2.innerHTML = ".revive-note { font-size: x-small; } ";
  head.appendChild(style2);
}

} // finishLoading()



///////////// ENTRY POINT ////////////////

// load revive data
load_revive_coords();


// the list of revive points
function load_revive_coords()
{
  if(!GM_getValue)
  {
    alert("Can't grab cached data--upgrade GreaseMonkey!");
    finishLoading(revive_coords_fallback());
  }
  
  var lastDataGrab = GM_getValue('lastgrab', 'never');
  if(lastDataGrab == 'never' || dataIsOld(lastDataGrab))
  {
    // data out of date; grab it from the server, store it,
    // and return it
    GM_log('Grabbing coordinate data from UDRR server');
    var rightNow = new Date();
    GM_setValue('lastgrab', rightNow.toString());
    //GM_log('new rightNow: ' + rightNow.toString());
    
    // grab new data from server into cache;
    // the callback will take care of finishing loading
    revive_coords_server();

  } else {
    // data is current; just return it
    //GM_log('using cached data');
    finishLoading(JSON.parse(GM_getValue('coords')));
  }

}

// compare right now's timestamp to another timestamp
function dataIsOld(otherTime)
{
  var MSECS_ALLOWED = 1000 * 60 * 60; // 60 minutes
  var rightNow = new Date();
  //GM_log('otherTime: ' + otherTime);
  //GM_log('dataIsOld::rightNow: ' + rightNow.getTime());
  if(Math.abs(Date.parse(otherTime) - rightNow.getTime()) > MSECS_ALLOWED)
    return true;
  else
    return false;
}

function revive_coords_server()
{
  GM_xmlhttpRequest({
    method: 'GET',
    url: UDRR_SERVER,
    headers: {
        'User-agent': UDRR_USERAGENT,
    },
    onload: function(responseDetails) {
        GM_setValue('coords', responseDetails.responseText);  
        finishLoading(JSON.parse(responseDetails.responseText));
    },
    onerror: function(errorDetails) {
        var fallback = revive_coords_fallback();
        GM_setValue('coords', JSON.stringify(fallback.toSource()));
        alert('Unable to contact UDRR server -- falling back to builtins (WARNING: probably out of date!)');
        finishLoading(JSON.parse(GM_getValue('coords')));
    }
  });

}

// revive point defaults if we can't load from cache or server
// this should probably be 0,0 or something equally innocuous
// since being unable to get live data is a BIG problem
function revive_coords_fallback()
{
  r = Array();
  
  i = 0;
  r[i++] = Array(43,47);
  r[i++] = Array(45,30);
  r[i++] = Array(35,66);
  r[i++] = Array(11,22);
  r[i++] = Array(73,92);
  r[i++] = Array(25,21);
  r[i++] = Array(92, 4);
  r[i++] = Array(98, 1);
  r[i++] = Array( 4,32);
  r[i++] = Array( 0,35);
  r[i++] = Array(27,35);
  r[i++] = Array(32,20);
  r[i++] = Array(78,58);
  r[i++] = Array(70,53);
  r[i++] = Array(16,11);
  r[i++] = Array(17,15);
  r[i++] = Array(47,87);
  r[i++] = Array(22,53);
  r[i++] = Array(15,43);
  r[i++] = Array(14,46);
  r[i++] = Array(24,65);
  r[i++] = Array( 3,25);
  r[i++] = Array(96,74);
  r[i++] = Array(94,14);
  r[i++] = Array(71,45);
  r[i++] = Array(66,43);
  r[i++] = Array(24, 5);
  r[i++] = Array(88, 4);
  r[i++] = Array(82, 6);
  r[i++] = Array(56,34);
  r[i++] = Array(68,55);
  r[i++] = Array(61,51);
  r[i++] = Array(55,27);
  r[i++] = Array(26,70);
  r[i++] = Array(53,57);
  r[i++] = Array(94,47);
  r[i++] = Array(65,68);
  r[i++] = Array(41,12);
  r[i++] = Array(45,17);
  
  return r;
}

