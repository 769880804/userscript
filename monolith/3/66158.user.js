
// Force GET or POST
// version 0.5 BETA!
// 2010-01-10
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script that forces all forms to use
// POST instead of GET or inverse.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Force GET or POST", and click Uninstall.
//
// --------------------------------------------------------------------
//
// Note that this may break some sites, and you may wish to add
// @exclude lines for specific sites.  If you don't know how to
// do that, this script is not for you.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Force GET or POST
// @namespace     http://google.com/profiles/insign
// @description   Force all forms to use POST instead of GET. Good for forms that are over HTTPS/TLS. TIP: See scripts to force HTTPS too. You can edit the line 54 to make the inverse.
// @include       *
// ==/UserScript==

/* BEGIN LICENSE BLOCK
Copyright (C) 2010 Hélio Oliveira

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You can download a copy of the GNU General Public License at http://diveintomark.org/projects/greasemonkey/COPYING or get a free printed copy by writing to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
END LICENSE BLOCK */

for (var i = document.forms.length - 1; i >= 0; i--) {
    document.forms[i].method = 'POST';
}

//
// ChangeLog
// 2005-04-21 - 0.4 - MAP - removed XPath, added license block
// 2005-04-21 - 0.4 - MAP - linted
// 2005-04-18 - 0.3 - MAP - tidy code
// 2005-04-15 - 0.2 - MAP - added normalize-space to remove leading and trailing spaces in attribute value
//
