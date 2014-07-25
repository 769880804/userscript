// ==UserScript==
// @name           Quote. Button.
// @namespace      :)
// @description    Creates a quotebutton, contrary to Eddie's shortsighted and unfair demands (well, OK, he's actually pretty cool, but still :P). He may update the markup to remove this script's ability, at which point I will attempt to fix it. In addition, I have also added multiple other buttons for added capability, including a super-secret-spoiler for teh lulz. ~ TMA.
// @include        http://tvtropes.org/pmwiki/*
// ==/UserScript==
function do_platypus_script() {
do_modify_html_it(window.document,document.getElementById('smileyPanel'),/(?:)/,'<img src="http://static.tvtropes.org/pmwiki/pub/smiles/emoticon_waii.png" alt="[----[[hottip:*:[[white:]]]]----]" title="[----[[hottip:*:[[white:]]]]----]" width="10" height="10"><img src="http://static.tvtropes.org/pmwiki/pub/images/lol2v12_4863.png" alt="[[youtube:]]" title="[[youtube:]]" width="25" height="20"><img src="http://static.tvtropes.org/pmwiki/pub/smiles/photos.png" alt="[[quoteright:325:]]" title="[[quoteright:325:]]" width="25" height="20"><img src="http://static.tvtropes.org/pmwiki/pub/smiles/lightbulb.png" alt="[[caption-width:350:]]" title="[[caption-width:350:]]" width="25" height="20"><img src="http://static.tvtropes.org/pmwiki/pub/smiles/emoticon_evilgrin.png" alt="[[evil:]]" title="[[evil:]]" width="25" height="20"><img src="http://static.tvtropes.org/pmwiki/pub/images/bug.gif" alt="[[strike:]]" title="[[strike:]]" width="25" height="20"><img src="http://static.tvtropes.org/pmwiki/pub/images/tinfoilsmall.gif" alt="[[spoiler:]]" title="[[spoiler:]]" width="25" height="20"><img src="http://static.tvtropes.org/pmwiki/pub/images/minis/award_star_gold_3.png" alt="[[center:]]" title="[[center:]]" width="16" height="16"><img src="http://static.tvtropes.org/pmwiki/pub/smiles/cool.png" alt="[[folder:]][[/folder]]" title="[[folder:]][[/folder]]" width="25" height="20"><img src="http://static.tvtropes.org/pmwiki/pub/smiles/emoticon_tongue.png" alt="[[hottip:*:]]" title="[[hottip:*:]]" width="25" height="20"><img src="http://tvtropes.org/pmwiki/pub/smiles/comment.png" alt="[[quoteblock]][[/quoteblock]]" title="[[quoteblock]][[/quoteblock]]" width="25" height="20">',null);
do_modify_html_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/TABLE[1]/TBODY[1]/TR[1]/TD[2]/DIV[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,/Everybody: The wiki is only interested in hosting a friendly, civil forum./,'Hive-mind: The wiki is only interested in hosting a friendly, civil DICTATORSHIP.',null);
html_insert_it(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/TABLE[1]/TBODY[1]/TR[1]/TD[2]/CENTER[2]/FORM[1]/CENTER[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,'Enjoy these: <a href="http://tntluoma.com/files/codes.htm" style="text-decoration: underline;">Handy HTML special characters</a> and this <a href="http://en.wikipedia.org/wiki/List_of_emoticons" style="text-decoration: underline;">list of emoticons.</a>',false,false);
}; // Ends do_platypus_script
window.addEventListener("load", function() { do_platypus_script() }, false);
var gplatypusBundle = Components.classes["@mozilla.org/intl/stringbundle;1"].getService(Components.interfaces.nsIStringBundleService);
var mystrings = gplatypusBundle.createBundle("chrome://platypus/locale/platypusCore.properties");
var platypusplatypuscouldntfi1 = mystrings.GetStringFromName("platypusplatypuscouldntfi1");
var platypusthisusuallyhappens = mystrings.GetStringFromName("platypusthisusuallyhappens");

//
//  Mon Dec 19 15:59:37 2005 -- Scott R. Turner
//  Short, uncommented file containing all the code to implement Platypus
//  actions.  Can be "included" into the Platypus script.
//
// 
// 
function walk_down(node, func) {
  if (node.nodeType == 1) {
    if (node.tagName != "IMG") func(node);
    if (node.childNodes.length != 0)
      for (var i=0; i<node.childNodes.length; i++)
walk_down(node.childNodes.item(i),func);
  }
}
function make_bw(doc, node) {
  walk_down(node,
            function (node) {
      if (node.tagName != 'A') {
  node.bgcolor = "white";
  node.color = "black";
  node.style.backgroundColor = "white";
  node.style.color = "black";
  node.style.backgroundImage = "";
      }});
}
function center_it(doc, node) {
  var center_node = doc.createElement ("CENTER");
  node.parentNode.insertBefore(center_node, node);
  node.parentNode.removeChild(node);  
  center_node.appendChild(node);
  return center_node;
};
function erase_it(doc, node) {
  var offset_height = node.offsetHeight;
  var offset_width = node.offsetWidth;
  var replacement_div = doc.createElement ("DIV");
  replacement_div.setAttribute('style',
       "height: "+offset_height+"; width: "+offset_width+";");
  node.parentNode.insertBefore(replacement_div, node);
  node.style.display = "none";
  return replacement_div;
};
function smart_remove(doc, node) {
    if (node.parentNode.childNodes.length == 1) {
smart_remove(doc, node.parentNode);
    } else {
remove_it(doc, node);
    };
};
function remove_it(doc, node) {
  if (doc == null || node == null) return;
  if (!node.parentNode) return;
  node.style.display = "none";
  doc.last_removed_node = node;
};
function script_paste(doc, where, what) {
    var new_node = what.cloneNode(true);
    new_node.style.display = "";
    where.parentNode.insertBefore(new_node, where);
};
function isolate(doc, node) {
  if (!node.parentNode) return;
  node.parentNode.removeChild(node);
  while (doc.body.childNodes.length > 0) {
      doc.body.removeChild(doc.body.childNodes[0]);
  };
  var replacement_div = doc.createElement ("DIV");
  replacement_div.setAttribute('style',
       "margin: 0 2%; text-align: left");
  replacement_div.appendChild(node);
  doc.body.appendChild(replacement_div);
};
function set_style_script(doc, element, new_style) {
    element.setAttribute('style', new_style);
};
function modify_single_url(doc, match_re, replace_string, node) {
    if (node.href) {
node.href = node.href.replace(match_re, replace_string);
    };
};
function do_modify_url_it(doc, node, match_re, replace_string, global_flag) {
    match_re = new RegExp(match_re);
    if (global_flag) {
var allurls = doc.getElementsByTagName('A');
for(var i = 0, url; url = allurls[i]; i++)
  modify_single_url(doc, match_re, replace_string, url);
    } else {
modify_single_url(doc, match_re, replace_string, node);
    };
};
function do_modify_html_it(doc, element, match_re, replace_string) {
    match_re = new RegExp(match_re);
    if (element.innerHTML) {
element.innerHTML = element.innerHTML.replace(match_re, replace_string);
    };
};
function relax(doc, node) {
  walk_down(node, function (node) {
      node.style.width = 'auto';
      node.style.marginLeft = '0pt';
      node.style.marginRight = '0pt';
      if (node.width) node.width = null; });
}
function fix_page_it(doc, node) {
    doc.background = null;
    doc.bgColor = "white";
    if (doc.style) {
      doc.style.backgroundColor = "white";
      doc.style.backgroundImage = "none";
      if (doc.style.color == "white") {
doc.style.color = "black";
      };
      if (doc.text == "white") {
doc.text = "black";
      };
    };
    doc.body.background = null;
    doc.body.bgColor = "white";
    if (doc.body.style) {
      doc.body.style.backgroundColor = "white";
      doc.body.style.backgroundImage = "none";
      if (doc.body.style.color == "white") {
doc.body.style.color = "black";
      };
      if (doc.body.text == "white") {
doc.body.text = "black";
      };
    };
};
function insertAfter(newNode, target) {
    var parent = target.parentNode;
    var refChild = target.nextSibling;
    if(refChild != null)
parent.insertBefore(newNode, refChild);
    else
parent.appendChild(newNode);
};
function html_insert_it(doc, element, new_html, before, insert_as_block) {
  var new_element;
  if (insert_as_block) {
    new_element = doc.createElement ("DIV");
  } else {
    new_element = doc.createElement ("SPAN");
  };
  new_element.innerHTML = new_html;
  if (before) {
      element.parentNode.insertBefore(new_element, element);
  } else {
      insertAfter(new_element, element);
  };
};
function auto_repair_it(doc, node) {
  Dump("In auto_repair_it...");
  var biggest_elem = find_biggest_elem(doc);
  Dump("biggest_elem = "+biggest_elem);
  isolate(doc, biggest_elem);
  Dump("After isolate.");

  //  relax(doc, biggest_elem);
  biggest_elem.style.width = 'auto';
  biggest_elem.style.marginLeft = '0pt';
  biggest_elem.style.marginRight = '0pt';
  if (biggest_elem.width) biggest_elem.width = null;
  Dump("After relax.");

  make_bw(doc, biggest_elem);
  Dump("After make_bw.");
  fix_page_it(doc, biggest_elem);
  Dump("After fix_page_it.");
};


//
//  Determines if an element is in view and crosses the midpoint
//
function elementInViewportCrossesMidpoint(el, mywin) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  };

  var midpoint = mywin.pageXOffset + (mywin.innerWidth/2);

  return (
    top < (mywin.pageYOffset + mywin.innerHeight) &&
    left < (mywin.pageXOffset + mywin.innerWidth) &&
    (top + height) > mywin.pageYOffset &&
    (left + width) > mywin.pageXOffset &&
    left < midpoint &&
    (left + width) > midpoint
  );
};

function contains_big_element(node, limit) {
    for (var i=0; i<node.childNodes.length; i++) {
var child = node.childNodes.item(i);
var child_size = child.offsetHeight * child.offsetWidth;
if (child_size > limit) return true;
    };
    return false;
};

//
//  Seems like the size of the element found needs to be "significantly"
//  less than the size of the doc, otherwise why would you use this?
//
function find_biggest_elem(doc) {
  var size_of_doc = doc.documentElement.offsetHeight *
      doc.documentElement.offsetWidth;
  //
  //  Figure out the size of the "body".  Actually the 
  //  topmost thing with more than 1 child...
  //
  var body = doc.body;
  while (body.childNodes.length == 1) {
      body = body.childNodes.item(0);
  };
  Dump("Body is "+body.tagName);

  var size_of_body = body.offsetHeight * body.offsetWidth;
  var max_size = 0;
  var max_elem = body;
  var mywin = doc.defaultView;
  const big_element_limit = 0.75;
  
  var allElems = body.getElementsByTagName("*");
  Dump("allElems = "+allElems);
  Dump("allElems.snapshotLength = "+allElems.length);

  for (var i = 0; i < allElems.length; i++) {
      // Only look at visible elements that cross the middle of the page
      if (allElems[i].style.display != "none" &&
  elementInViewportCrossesMidpoint(allElems[i], mywin)) {
  var thisElem = allElems[i];
  var thisElem_size = thisElem.offsetHeight * thisElem.offsetWidth;
  
  if (thisElem_size < size_of_doc * big_element_limit &&
      thisElem_size > max_size &&
      !contains_big_element(thisElem, thisElem_size * big_element_limit)) {
      max_size = thisElem_size;
      max_elem = thisElem;
      Dump("New max_elem = "+max_elem.tagName);
  };
      };
  };
  Dump("Max elem = "+max_elem.tagName);
  return max_elem;
};

function platypus_do(win, func_name, o, other, other2, other3) {
    var func = eval(func_name);
    var doc = null;
    if (func == null) return;
    if (!o) {
Warning(platypusplatypuscouldntfi1+
func_name+platypusthisusuallyhappens);
    };
    doc = win.document;
    func(doc, o, other, other2, other3);
};

//.user.js