// ==UserScript==
// @name           Missing E Unfollowr
// @description    Track people who unfollow you on tumblr
// @namespace      http://userscripts.org/users/113977
// @include        http://www.tumblr.com/dashboard*
// @include        http://www.tumblr.com/drafts
// @include        http://www.tumblr.com/queue
// @include        http://www.tumblr.com/likes
// @include        http://www.tumblr.com/messages
// @include        http://www.tumblr.com/tumblelog/*
// @version        1.7.6
// @date           2011-02-11
// @creator        Remington Arneson
// ==/UserScript==

/*
 * 'Missing e' Extension
 *
 * Copyright 2011, Remington Arneson
 * Released under the GPL version 3 licence.
 * SEE: GPL-LICENSE.txt
 *
 * This file is part of 'Missing e'.
 *
 * 'Missing e' is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * 'Missing e' is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with 'Missing e'. If not, see <http://www.gnu.org/licenses/>.
 */

/*global $,chrome,getPageHeight */

var followertext;
var followeetext;
var followerdone;
var followeedone;
var failed = false;
var youfollow = [];
var followyou = [];
var formKey;
var debugMode = false;

function debug(msg) {
   if (debugMode) {
      console.debug(msg);
   }
}

function doFWFinish(followers, followees, show) {
   youfollow = [];
   followyou = [];
   var yentry, fentry, yklass, fklass, klass, i;
   if (!show) { return true; }

   var e=0;
   var f=0;

   while (f < followers.length && e < followees.length) {
      if (followers[f] < followees[e]) {
         followyou.push(followers[f]);
         f++;
      }
      else if (followers[f] > followees[e]) {
         youfollow.push(followees[e]);
         e++;
      }
      else {
         e++;
         f++;
      }
   }

   for (; f<followers.length; f++) {
      followyou.push(followers[f]);
   }
   for (; e<followees.length; e++) {
      youfollow.push(followees[e]);
   }

   followers = [];
   followees = [];

   var txt = '<table id="followwhotable" border="0"><thead><tr><th><em>' +
               'You Don\'t Follow (' + followyou.length + ')</em></th>' +
               '<th><em>Don\'t Follow You (' + youfollow.length + ')</em>' +
               '</th></tr></thead><tbody>';
   for (i=0;i<youfollow.length && i<followyou.length;i++) {
      yentry = youfollow[i].split(';');
      fentry = followyou[i].split(';');
      fklass = '';
      yklass = '';
      if (i%2===1) { fklass = 'fw-greyrow'; }
      if (i%2===1) { yklass = 'fw-greyrow'; }
      if (i===youfollow.length-1) { yklass+=' fw-last'; }
      if (i===followyou.length-1) { fklass+=' fw-last'; }
      if (fklass !== '') { fklass = 'class="' + fklass + '"'; }
      if (yklass !== '') { yklass = 'class="' + yklass + '"'; }
      txt += '<tr><td ' + fklass + '><a target="_blank" href="' +
               fentry[1] + '">' + fentry[0] + '</a></td>';
      txt += '<td ' + yklass + '><a target="_blank" href="' +
               yentry[1] + '">' + yentry[0] + '</a></td></tr>';
   }
   for (; i<youfollow.length; i++) {
      klass = '';
      if (i%2===1) { klass = 'fw-greyrow'; }
      if (i===youfollow.length-1) { klass+=' fw-last'; }
      if (klass !== '') { klass = 'class="' + klass + '"'; }
      yentry = youfollow[i].split(';');
      txt += '<tr><td></td><td ' + klass + '><a target="_blank" href="' +
               yentry[1] + '">' + yentry[0] + '</a></td></tr>';
   }
   for (; i<followyou.length; i++) {
      klass = '';
      if (i%2===1) { klass = 'fw-greyrow'; }
      if (i===followyou.length-1) { klass+=' fw-last'; }
      if (klass !== '') { klass = 'class="' + klass + '"'; }
      fentry = followyou[i].split(';');
      txt += '<tr><td ' + klass + '><a target="_blank" href="' + fentry[1] +
               '">' + fentry[0] + '</a></td><td></td></tr>';
   }
   txt += '</tr></tbody></table>';
   $('#MissingE_followwhodisplay .followwholist').html(txt);

   if ($('#facebox').css('display') === 'block') {
      $(document).one('close.facebox', function() {
         followyou = [];
         youfollow = [];
      });
      $.facebox({ div: '#MissingE_followwhodisplay' }, 'followwhobox');
      $('#facebox a.MissingE_followChecker_newTab').css('display','inline');
   }
   $('#MissingE_followwhodisplay .followwholist').empty();
}

function doFWDisplay(followerstart,followeestart,show) {
   var fin = true;
   var i,j,raw,fkm;
   i=0;
   j=0;
   for (i=followerstart; i<followerdone.length; i++) {
      if (!followerdone[i]) {
         fin = false;
         break;
      }
   }
   for (j=followeestart; j<followeedone.length; j++) {
      if (!followeedone[j]) {
         fin = false;
         break;
      }
   }
   if (fin) {
      var fentryname, fentryurl, fentryava, imgm, avre;
      followerdone = [];
      followeedone = [];
      var followernames = [];
      for (i=0; i<followertext.length; i++) {
         if (show && !formKey) {
            fkm = followertext[i] .match(/onclick="follow\(\s*'([^']*)',/);
            if (fkm && fkm.length > 1) {
               formKey = fkm[1];
            }
         }
         raw = followertext[i].match(/<div class="name">\s*<a href="http:[\/0-9A-Za-z\-\_\.]*"><div class="hide_overflow">[0-9a-zA-Z\-\_]+<\/div><\/a>/mg);
         if (raw === undefined || raw === null || raw.length === 0) {
            continue;
         }
         for (j=0; j<raw.length; j++) {
            fentryname = raw[j].match(/>([0-9A-Za-z\-\_]*)<\/div><\/a>/);
            fentryurl = raw[j]
                              .match(/a href="(http:[\/0-9A-Za-z\-\_\.]*)"/);
            if (fentryname === null || fentryname.length === 0 ||
                fentryurl === null || fentryurl.length === 0) {
               debug("Page " + (i+1) + ", Problem with follower:");
               debug(raw[j]);
            }
            fentryname = fentryname[1];
            fentryurl = fentryurl[1];
            avre = new RegExp('a href="' + fentryurl + '">\s*<img class="avatar"([\n\r]|.)*?src="http:\/\/[^\/]*\/avatar\_([^_]*_30\....)','m');
            imgm = avre.exec(followertext[i]);
            fentryava = '';
            if (imgm && imgm.length > 1) {
               fentryava = imgm[imgm.length-1];
            }
            followernames.push(fentryname + ';' + fentryurl + ';' + fentryava);
         }
      }
      followertext = [];
      followernames.sort();
      for (i=0; i<followernames.length-1; i++) {
         if (followernames[i] === followernames[i+1]) {
            followernames.splice(i+1,1);
         }
      }

      var followeenames = [];
      for (i=0; i<followeetext.length; i++) {
         if (show && !formKey) {
            fkm = followeetext[i].match(/onclick="follow\(\s*'([^']*)',/);
            if (fkm && fkm.length > 1) {
               formKey = fkm[1];
            }
         }
         raw = followeetext[i].match(/<div class="name">\s*<a href="http:[\/0-9A-Za-z\-\_\.]*">[0-9a-zA-Z\-\_]+<\/a>/mg);
         if (raw === undefined || raw === null || raw.length === 0) {
            continue;
         }
         for (j=0; j<raw.length; j++) {
            fentryname = raw[j].match(/>([0-9A-Za-z\-\_]+)<\/a>/);
            fentryurl = raw[j].match(/a href="(http:[\/0-9A-Za-z\-\_\.]*)"/);
            if (fentryname === null || fentryname.length === 0 ||
                fentryurl === null || fentryurl.length === 0) {
               debug("Page " + (i+1) + ", Problem with followee:");
               debug(raw[j]);
            }
            fentryname = fentryname[1];
            fentryurl = fentryurl[1];
            avre = new RegExp('a href="' + fentryurl + '">\s*<img class="avatar"([\n\r]|.)*?src="http:\/\/[^\/]*\/avatar\_([^_]*_30\....)','m');
            imgm = avre.exec(followeetext[i]);
            fentryava = '';
            if (imgm && imgm.length > 1) {
               fentryava = imgm[imgm.length-1];
            }
            followeenames.push(fentryname + ';' + fentryurl + ';' + fentryava);
         }
      }
      followeetext = [];
      followeenames.sort();
      for (i=0; i<followeenames.length-1; i++) {
         if (followeenames[i] === followeenames[i+1]) {
            followeenames.splice(i+1,1);
         }
      }
      doFWFinish(followernames, followeenames,show);
   }
   else {
      if (!failed) {
         window.setTimeout(function(){doFWDisplay(i,j,show);}, 500);
      }
   }
}

function doFWGet(followers, followees, show, retries, acct) {
   var i;
   failed = false;

   if (show) {
      formKey = null;
      $('#MissingE_followwhodisplay .followwholist')
         .html('<p><img src="' +
               chrome.extension.getURL('facebox/loading.gif') + '" /></p>');
      $.facebox({ div: '#MissingE_followwhodisplay' }, 'followwhobox');
   }

   var followerpages = Math.ceil(followers / 40) + 1;
   var followeepages = Math.ceil(followees / 25) + 1;
   followertext = new Array(followerpages);
   followeetext = new Array(followeepages);
   followerdone = new Array(followerpages);
   followeedone = new Array(followeepages);
   for (i=0; i<followerpages; i++) {
      followerdone[i] = false;
   }
   for (i=0; i<followeepages; i++) {
      followeedone[i] = false;
   }

   for (i=0; i<followerpages; i++) {
      $.ajax({
         type: "GET",
         url: '/tumblelog/' + acct + '/followers/page/'+(i+1),
         dataType: "html",
         tryCount: 0,
         retryLimit: retries,
         pageNumber: i,
         error: function(xhr, textStatus) {
            this.tryCount++;
            if (!failed && this.tryCount <= this.retryLimit &&
                $('#facebox').css('display') === 'block') {
               $.ajax(this);
               return;
            }
            else if (!failed) {
               failed = true;
               $('#MissingE_followwhodisplay .followwholist')
                  .html('<p><em>Having trouble getting followers ' +
                        'listing from Tumblr\'s servers, please try again ' +
                        'later.</em></p><img style="margin:20px 0;" src="' +
                        chrome.extension.getURL('images/oh_dear.png') +
                        '" /><div><em>Artwork by ' +
                        '<a href="http://theoatmeal.com/">The Oatmeal</a>' +
                        '</em></div>');
               if ($('#facebox').css('display') === 'block') {
                  $.facebox({ div: '#MissingE_followwhodisplay' },
                            'followwhobox');
               }
            }
         },
         success: function(data, textStatus) {
            if (!(/id="dashboard_followers"/.test(data))) {
               this.tryCount++;
               if (!failed && this.tryCount <= this.retryLimit &&
                   $('#facebox').css('display') === 'block') {
                  $.ajax(this);
                  return;
               }
               else if (!failed) {
                  failed = true;
                  $('#MissingE_followwhodisplay .followwholist')
                     .html('<p><em>Having trouble getting followers listing ' +
                           'from Tumblr\'s servers, please try again later.' +
                           '</em></p><img style="margin:20px 0;" src="' +
                           chrome.extension.getURL('images/oh_dear.png') +
                           '" /><div><em>Artwork by ' +
                           '<a href="http://theoatmeal.com/">The Oatmeal</a>' +
                           '</em></div>');
                  if ($('#facebox').css('display') === 'block') {
                     $.facebox({ div: '#MissingE_followwhodisplay' },
                               'followwhobox');
                  }
               }
               return true;
            }

            var j = this.pageNumber;
            followertext[j] = data;
            followerdone[j] = true;
         }
      });
   }

   for (i=0; i<followeepages; i++) {
      $.ajax({
         type: "GET",
         url: '/following/page/'+(i+1),
         dataType: "html",
         tryCount: 0,
         retryLimit: retries,
         pageNumber: i,
         error: function(xhr, textStatus) {
            this.tryCount++;
            if (!failed && this.tryCount <= this.retryLimit &&
                $('#facebox').css('display') === 'block') {
               $.ajax(this);
               return;
            }
            else if (!failed) {
               failed = true;
               $('#MissingE_followwhodisplay .followwholist')
                  .html('<p><em>Having trouble getting list of who you ' +
                        'follow from Tumblr\'s servers, please try again ' +
                        'later.</em></p><img style="margin:20px 0;" src="' +
                        chrome.extension.getURL('images/oh_dear.png') +
                        '" /><div><em>Artwork by ' +
                        '<a href="http://theoatmeal.com/">The Oatmeal</a>' +
                        '</em></div>');
               if ($('#facebox').css('display') === 'block') {
                  $.facebox({ div: '#MissingE_followwhodisplay' },
                            'followwhobox');
               }
            }
         },
         success: function(data, textStatus) {
            if (!(/id="dashboard_following"/.test(data))) {
               this.tryCount++;
               if (!failed && this.tryCount <= this.retryLimit &&
                   $('#facebox').css('display') === 'block') {
                  $.ajax(this);
                  return;
               }
               else if (!failed) {
                  failed = true;
                  $('#MissingE_followwhodisplay .followwholist')
                     .html('<p><em>Having trouble getting list of who you ' +
                           'follow from Tumblr\'s servers, please try again ' +
                           'later.</em></p><img style="margin:20px 0;" src="' +
                           chrome.extension.getURL('images/oh_dear.png') +
                           '" /><div><em>Artwork by ' +
                           '<a href="http://theoatmeal.com/">The Oatmeal</a>' +
                           '</em></div>');
                  if ($('#facebox').css('display') === 'block') {
                     $.facebox({ div: '#MissingE_followwhodisplay' },
                               'followwhobox');
                  }
               }
               return true;
            }

            var j = this.pageNumber;
            followeetext[j] = data;
            followeedone[j] = true;
         }
      });
   }

   doFWDisplay(0,0,show);
}

function followChecker_newTab() {
   if (!formKey) {
      formKey = $('#form_key').val();
   }
   if (formKey && (followyou.length > 0 || youfollow.length > 0)) {
      chrome.extension.sendRequest({greeting: "followChecker",
                                    formKey: formKey,
                                    followYou: followyou,
                                    youFollow: youfollow});
   }
}

function addFollowCheckerButton(acct) {
   var fl = $('#right_column').find('a.followers .count');
   var uf = $("#MissingE_unfollowdelta");
   var notintxt = '<a account="' + acct + '" id="MissingE_followwhonotin" ' +
                  'title="Follow Checker" onclick="return false;" href="#">' +
                  '&rho;</a>';
   if (uf.size()>0) {
      uf.after(notintxt);
   }
   else if (fl.length >= 1) {
      fl.append(notintxt);
   }
}

function tfc_init(retries) {
   $("body").append('<div id="MissingE_followwhodisplay" ' +
                    'style="display:none;"><div style="' +
                    'font:bold 24px Georgia,serif;color:#1f354c;">' +
                    'follow checker <a class="MissingE_followChecker_newTab"' +
                    ' href="#" onclick="return false;" ' +
                    'title="View in new tab"><img src="' +
                    chrome.extension.getURL('followChecker/ext.gif') +
                    '" alt="View in new tab" /> New Tab</a></div>' +
                    '<div class="followwholist" ' +
                    'style="height:' + ((getPageHeight()/10)*7) +
                    'px;overflow-y:auto;text-align:center;margin-top:10px;">' +
                    '</div><img class="logo" src="' +
                    chrome.extension.getURL('missinge64.png') + '" /></div>');

   var acct = location.href.match(/\/tumblelog\/([^\/]*)/);
   if (acct && acct.length > 1) {
      addFollowCheckerButton(acct[1]);
   }
   $('#MissingE_sidebar').live('load.sidebar', function(e, account) {
      addFollowCheckerButton(account);
   });
   $('#facebox .MissingE_followChecker_newTab').live('click',
                                                     followChecker_newTab);
   $('#MissingE_followwhonotin').live('click',function() {
      chrome.extension.sendRequest({greeting: "close-followChecker"});
      var account = $(this).attr('account');
      var followers = $(this).parent().text()
                     .match(/^([0-9][0-9,\.]*)/);
      $.ajax({
         type: "GET",
         url: '/following',
         dataType: "html",
         tryCount: 0,
         retryLimit: retries,
         error: function(xhr, textStatus) {
            this.tryCount++;
            if (this.tryCount <= this.retryLimit) {
                $.ajax(this);
                return;
            }
            else {
               failed = true;
               $('#MissingE_followwhodisplay .followwholist')
                  .html('<p><em>Having trouble getting your follower count ' +
                        'from Tumblr\'s servers, please try again ' +
                        'later.</em></p><img style="margin:20px 0;" src="' +
                        chrome.extension.getURL('images/oh_dear.png') +
                        '" /><div><em>Artwork by ' +
                        '<a href="http://theoatmeal.com/">The Oatmeal</a>' +
                        '</em></div>');
               if ($('#facebox').css('display') !== 'block') {
                  $.facebox({ div: '#MissingE_followwhodisplay' },
                            'followwhobox');
               }
            }
         },
         success: function(data, textStatus) {
            if(!(/a\s+class="tab selected"\s+href="\/following">[^<]*<\/a>/mg
                     .test(data))) {
               this.tryCount++;
               if (this.tryCount <= this.retryLimit) {
                  $.ajax(this);
                  return;
               }
               else {
                  $('#MissingE_followwhodisplay .followwholist')
                     .html('<p><em>Having trouble getting your follower ' +
                           'count from Tumblr\'s servers, please try again ' +
                           'later.</em></p><img style="margin:20px 0;" src="' +
                           chrome.extension.getURL('images/oh_dear.png') +
                           '" /><div><em>Artwork by ' +
                           '<a href="http://theoatmeal.com/">The Oatmeal</a>' +
                           '</em></div>');
                  if ($('#facebox').css('display') !== 'block') {
                     $.facebox({ div: '#MissingE_followwhodisplay' },
                               'followwhobox');
                  }
               }
               return true;
            }

            var followees = data.match(/a\s+class="tab selected"\s+href="\/following">[^<0-9]*([0-9,\.]+)[^<]*<\/a>/m);
 
            if (followers === undefined || followers === null ||
                followers.length < 2 || followees === undefined ||
                followees === null || followees.length < 2) {
               return false;
            }
            doFWGet(followers[1].replace(/,/g,"").replace(/\./g,""),
                    followees[1].replace(/,/g,"").replace(/\./g,""), true,
                    retries, account);
         }
      });
   });
}

if (document.body.id !== "tinymce" &&
    document.body.id !== "dashboard_edit_post") {
   chrome.extension.sendRequest({greeting: "settings",
                                 component: "followChecker"},
                                 function(response) {
      var settings = JSON.parse(response);
      tfc_init(settings.retries);
   });
}
