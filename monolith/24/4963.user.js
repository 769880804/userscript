// ==UserScript==
// @name           Myspace Notifier
// @namespace      http://r4wr.com/userscripts/
// @description    Will notify you of any new mail, friend requests, etc., from anywhere on the 'net.
// @include        *
// ==/UserScript==

// Note: You must be logged into myspace for this script to function.
// Using this script might make some internet connections seem slow, this is because
// the myspace homepage is requested every time you load any new page. 

// Configuration Options:
messages = true;
messageIcon = 'http://r4wr.com/images/GMmessage.png';
friendrequests = true;
friendrequestIcon = 'http://r4wr.com/images/GMfriendrequest.png';
comments = true;
commentIcon = 'http://r4wr.com/images/GMcomment.png';
imgcomments = true;
imgcommentIcon = 'http://r4wr.com/images/GMcamera.png';
blogComments = true;
blogCommentIcon = 'http://r4wr.com/images/GMbcom.png';
blogSubscriptions = true;
blogSubscriptionIcon = 'http://r4wr.com/images/GMsubblog.png';
events = true;
eventIcon = 'http://r4wr.com/images/GMevent.png';
birthdays = true;
birthdayIcon = 'http://r4wr.com/images/GMbirthday.png';

/* Don't edit anything below unless you know what you're doing */

function makeRequest() {
	GM_xmlhttpRequest({
		method: 'GET',
		url: 'http://home.myspace.com/index.cfm?fuseaction=user',
		headers: {
			'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey/0.3',
			'Accept': 'text/xml',
		},
		onload: function(responseDetails) {
		
			// Store html of the myspace homepage.
			var response = responseDetails.responseText;
			
			// Retrieve the user's friend identifier.
			friendid=/friendid=(\d+)"/g.exec(response)[1];

			// Fill in applicable notifications
			var html = '';
			var msgText=/id="indicatorMail" class="(\w+)/g.exec(response)[1];
			if(messages && msgText == 'show') {
				html+= '<a href="http://mail.myspace.com/index.cfm?fuseaction=mail.inbox"><img src="'+messageIcon+'"> New Messages</a><br />';
				show = 1;
			}
			var reqText=/id="indicatorFriendRequest" class="(\w+)/g.exec(response)[1];
			if(friendrequests && reqText == 'show') {
				html+= '<a href="http://mail.myspace.com/index.cfm?fuseaction=mail.friendRequests"><img src="'+friendrequestIcon+'"> New Friend Requests</a><br />';
				show = 1;
			}
			var comText=/id="indicatorComments" class="(\w+)/g.exec(response)[1];
			if(comments && comText == 'show') {
				html+= '<a href="http://comments.myspace.com/index.cfm?fuseaction=user.HomeComments&amp;friendID='+friendid+'"><img src="'+commentIcon+'"> New Comments</a><br />';
				show = 1;
			}
			var imgText=/id="indicatorImageComments" class="(\w+)/g.exec(response)[1];
			if(imgcomments && imgText == 'show') {
				html+= '<a href="http://viewmorepics.myspace.com/index.cfm?fuseaction=user.viewPicture&amp;friendID='+friendid+'"><img src="'+imgcommentIcon+'"> New Picture Comments</a><br />';
				show = 1;
			}
			var bcomText=/id="indicatorBlogComments" class="(\w+)/g.exec(response)[1];
			if(blogComments && bcomText == 'show') {
				html+= '<a href="http://blog.myspace.com/index.cfm?fuseaction=blog.controlcenter"><img src="'+blogCommentIcon+'"> New Blog Comments</a><br />';
				show = 1;
			}
			var blogText=/id="indicatorBlogs" class="(\w+)/g.exec(response)[1];
			if(blogSubscriptions && blogText == 'show') {
				html+= '<a href="http://blog.myspace.com/index.cfm?fuseaction=blog.controlcenter"><img src="'+blogSubscriptionIcon+'"> New Blog Subscription Posts</a><br />';
				show = 1;
			}
			var eventText=/id="indicatorEvents" class="(\w+)/g.exec(response)[1];
			if(events && eventText == 'show') {
				html+= '<a href="http://mail.myspace.com/index.cfm?fuseaction=mail.eventInvite"><img src="'+eventIcon+'"> New Event Invitation</a><br />';
				show = 1;
			}
			var bdayText=/id="indicatorBirthday" class="(\w+)/g.exec(response)[1];
			if(birthdays && bdayText == 'show') {
				html+= '<a href="http://collect.myspace.com/index.cfm?fuseaction=user.birthdays&amp;friendID='+friendid+'"><img src="'+birthdayIcon+'"> New Birthdays</a><br />';
				show = 1;
			}

			if(show) {
				// Create notifier element.
				var notifier = document.createElement('div');
				notifier.setAttribute('id', 'GM_MSNotify');
				document.body.appendChild(notifier);
				
				notifier.innerHTML = html;
				
				// Apply some custom CSS to the notifier element.
				GM_addStyle('#GM_MSNotify {' +
					'display:block!important;' +
					'position:fixed!important;' +
					'bottom:0!important;' +
					'left:0!important;' +
					'z-index:9999!important;' +
					'width:150px!important;' +
					'background-color:#F0F0F0!important;' +
					'opacity:100.0!important;' +
					'text-align:left!important;' +
					'-moz-border-radius:0 10px 0 0!important;' +
					'padding:3px!important;}' +
					'#GM_MSNotify a {' +
					'display:inline!important;' +
					'color:#352BFF!important;' +
					'text-decoration:none!important;' +
					'line-height:8px;' +
					'font:bold 10px Tahoma, serif!important;}' +
					'#GM_MSNotify br {display:inline!important}' +
					'#GM_MSNotify img {width:12px!important;opacity:1!important;border:none!important}'
				);
			}
		}
	});
}

// Make sure we're not in a frame's body, then execute script.
if(top.location == location) {
	makeRequest();
}