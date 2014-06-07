// ==UserScript==
// @name           Gmail Unread Message Count in Favicon (big numbers)
// @description    Shows the number of unread Gmail messages in the FavIcon in your browser tab. This is based on a script originally written by Eric Bogs.
// @author         Dave Cortright
// @namespace      kpao.org
// @version        2.4
// @date           2011-10-02
// @include        http://mail.google.com/*
// @include        https://mail.google.com/*
// ==/UserScript==

// How often to attempt to update the favicon.  Change this to a larger number
// if your Firefox browsing becomes sluggish.
var pollDurationMS = 800;

function GmailFavIconUnreadCount(gmail) {
    this.inboxSpan_ = null;
    this.getInboxSpan_ = function() {
        var frame = top.document.getElementById('canvas_frame')
        if (frame) {
            this.inboxSpan_ = frame.contentWindow.document.getElementsByClassName('n0')[0];
        }
        return this.inboxSpan_;
    }

    this.poll_ = function() {
        self.checkCount_(self.getInboxSpan_().textContent);
    }

    this.removeIcon_ = function() {
        var links = this.head_.getElementsByTagName('link');
        for (var i = 0; i < links.length; i++) {
            if (links[i].type == 'image/x-icon' && (links[i].rel == 'shortcut icon' || links[i].rel == 'icon')) {
                this.head_.removeChild(links[i]);
            }
        }
    }

    this.setIcon_ = function(icon) {
        var newIcon = document.createElement("link");
        newIcon.type = "image/x-icon";
        newIcon.rel = "shortcut icon";
        newIcon.href = icon;
        this.head_.appendChild(newIcon);
    }

// 0 = standard favicon, 1-98, 99+,
    this.icons_ = [
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgklEQVR42t2Quw2AMBBDM1ZmyTaZJhtkGMp0tHRUh4x0wuIuJ6iQsOTK9ssn/UBLzqLeapW9tdDo8OYEsKV3mQnZvZ/49LUUgrhjdNC1AMhC/DHkAXyIHccADBjCY2QxYAz8NEN4jAwdH4BAC/wcWEUdC9AgEEP8GzzU9AZvfAE+1wEHliL7Y7TaEwAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAV0lEQVQ4y2P4//8/AwzfsrBAxwlA3ADFCchqYZgBiwECQFwAxA+A+D8SPkCMAQZA/AFNI8kG/KfEAAao4gtQ/5NlgAJSIJJlAMOoAaMGUNuAA0h4AjYDALDdZn+9q6VkAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR42sWSwQ2AIBAELYESLMGnT0qwBEqwBEuwBEqxBN++LIEO8DRsQjbeGV4+JgHCTjYHXc754RhH4IRJWEDZdzXIYYFgFLLCKXhLEIwwSEJvNUjl4l6qR5xVRE1ws6BmxUCCXROoUIvUKnDUYGsVrCSYWwTh5SmdKeAwMej/4DscrJ9ohRPCloAHxkPzhGMBhT/xb4LtF8EFtukcImWlFA0AAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR42pXTQQ3EIBBAUSQgAQl77BEJSEAKEpCAhEpAwp73hIQ6mP4mm2YzobAc3nF+gAxGRG6fbbtYBCTsqMiIsDC4Z3Qg4IA8aHiNAh4ycYwCF0FFgkeGKH4UcDBKXgloFlUF3CzgkVA7j5phZoEE6UgwWA2sn8DBf8XONeIsoOn9qKsB928goiDA/gy/VWB/ChSItrKJDTIRZ5+pdEINBV7vwQmT/jWo+mR7JgAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4y2P4//8/AwjfsrDAhgWA2AENK8DkQfoYCBiwAIj/o+EGYg1wwKKZJAMeUGJAA5KGBaQaoICmIYFUAw6g2e5AigEBSAo/IEUjUQYIQDXBFBbgiA2cBkzAorABSyAegIoroBtwAEe04cIOVDfAAEu6d4CGxX8sMSNATF5gIDUa6W8AAAjeA293lZCfAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR42qXSMQ0DMQyF4YMQCIGQ8caDchAMIVAKwRAM4eZOByEM3FcpraLIiRt1+Eb/liVvqvr13Pe3CNkRPzNWgEAdxyyQ/w0waHWDGNIsIO0m2CyzQGkCVCNpJaADBbIXiKCOaxZIwJArhmJEzlHAEuDRBXglYJ0mq4H0a+AEgtgMH3B1ARoFGNRxQxgFijtcn2p2ghghAYLQP9ILLP84mc4oStYAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVR42o2TMQ3EMAxFAyEQAiFjx0A4CIFQCIVwEAKhEAoh800HIQxS92SdrC9b8fCWKv+1jn/DnPPHZ9ssCnEIEvHPWYLIhwcxgbISZKJDyC2IxBcCg2jeERqEG0sDoAoShE8eZ+c3l5VglwIxCj7LluDEgMEgoia48DBLq7LOt0fwgjJNweURBGApwBUmaOZSULEDQnB47uChK2vryhaSJchw4xp19TNF/vyhNRObeAOJTyqtU11muwAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR42rXNsQ2AQAhGYUdxBMsrGcVRHMURHIERrF0GY3JaQMjjCou/IeF7k5l9u1qT4pb3xwNWnP4GaLLTAVsGZDscMI8A4p735z4CqK8DwHUAoA4A1gngOgNcZyDWpQ7EuvY7A1xnYIV6AG7BfyHkfkuxfwAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR42qWTsQ2EMAxFbwRGYARKyoySETJCRrgRMgIjMAL1VYyQDYzvZJ2sr48VieI1kDx/O8lLRH581tUzKVmpjsX9/+9jgqJ0RQiHMkeCQjYxCRdA5a4kq3iAJFEBLKqurTQqwKiTgQmWO8EOC09lg297MANSjaaKBZgCeXMBr94MASoTlOAUMrbCBBWPCq63eKggSDCPJEik12ZD6yMz+NIevQUj39yFUyn4nC9ikTThBAj03AAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR42o2TQRHEIAxFkYCESuixx0qoBCQgAQkroRJWAhJ67qkS4oANO8wO8zcJHN4wA+Qlhx9XSvlxb1vPyqSOA96/NZLAM5kpAk8VWwLPXFCEUJVoggSf38xeT7jPmoBgXNeRQbL8CaQuHTjdMRJcA0GSBA98ioxvxTQWYBeboOXgnBTsoqARmig3IuSD1CQqROh+zgpWIUTELJbgBaFBgrlMRjHBRk4LcpcHh4IPTlwpzeWJvgsAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR42qWSzQ2AIAyFGYERHIGjR0ZwBEZwBEZwBEdwBEfw7MkR2ACJeSQvlVQTDo+ftnzQUnOOI8uTbLVjHYriM5PvGWC8ijLJw+eKEvsQOwBAB98Aq/j3CsgKINA+IQWOcQakFU+SgI32C1I6yBZlESUgNWqykG3TAe2iRq6DBph7AbEXEHoBvhsgmmhCzMpfqwI4GGsjoSqgkcYhOtN8AWqn5oamvwDLqeDmUM/c113j7AS090EAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYklEQVQ4T2O4ZWHBgIQNgNgBigXQ5ASQ5Az+///PAMIwSZDgASD+j4QdkDQ2APEHJLkDyAaga0Q2IABNI8kGOOCQQzFgAtQQdMWwcAC5oAGqDqsByBhbGMBww6gBowYMXgMAcnjzPCpwrSIAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR42rWRQQnEQBAER8JKiIQ881wJkbASTkIkREIkREIk7PteJyEO9uagD5omsAwhj/o0M9UDY+9pYjKRkA1OcRaQeYcXP04jMhbaBdVJf8GhAz0B2CGgZhHQZaszo7kR6SfYcMV4ITBh0BkZ6ArsrkCvTFHBJp+wiEDbS1RQtT0iWCk/nTEiKJLPyPsCNJ2UvRyLCKpkytITtMcFX+R30XMTtCC3AAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqElEQVR42pWSyw2FIBBFKYESKMGlyymBEiyBEijFEizhleDalSXYAU7MJZnc+CSzOBLmc4gD4Zhny6QISIhFJSsViO15Pgj+lGaoEDYGtbELVpNgQTJ7Zu2C7UMQcFrBb+wmf3VBQZFgZYEl0yGBCoaCavK7R7C8zCp7BI0oiLsEzOIRxD+3EL1D5HchXkHwChLlxSUADXF+sedwiLRnZCgAFzVuytR7bmnBzbXGd/GhAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkElEQVR42sWTsQ2AIBREHcERHIGSkhEcwREcgVEcwREYgdqKEdxAJYHkJUAAE2NxBXf57wLkD4eUlILG4FETcuE9DrpHF6QyAIvcRICJZgWwMCfANQJcCbCFgygD2J4CoCyA7fsbgIanmwH4yhMDqhegee4FzGh3YXhFbr1XBMT2mj4FzNyNpivUdyF9xP8BN3Qe0wgP/PC0AAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR42rWSQQ2EMBBFkVAJldAjRyQgAQlIqIRKqAQkoIPTSsBB6ZCf8JdZMpANh5d0fofXaUqztC0TKh3wyNyRKdz+IYq5UohIe+WCThoyBb8EgyWYDEGkLEtNeGkYMT6uoQSJT5SM+SqUQGfNv4IVE/kngnJBuiuIIGMClnhTcCKcBONDge55XeCMK/SWYMB6BoX43HmFRDWzVoItEPTTTfwjbXXnzdjofOGhAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR42r2TMQ3EMAxFP4RCCISOHQ/CQSkEQwiEQiiEQOh8UyGEQc86fanWbyWryw1vsBU/2U6CzzRFRudFigOF+bdjDn5JFjTnCNhN4SJngJBUTDrrzF8EayIoUrw7M7sGGDQdgwLtcHOGOJouSAVFupLF5oJZWt9DXHOB7ueKZQK92sXZQtyfCOp5pac0E2gM8j+ByRt4PELRrcsS10wApzJWujOmAmLyHxpHwRegAtut2NYm+QAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR42pWRQQ2AMBRDkYCESdiR4yQgYRKQgAQkIGESkMCZExJwAPvkH5qGjPTwstCylyXtjmFAYiU5wUkt3ov+sVVuYHbuFnZ5pVAWlIYg2YnQS4sJJg+TnSToPtjhn0zlryBCf1V6VbBAv1qmCk7oR1UwQndapgh47kUV9DRxVAUZ8t0yRcDbT6og0PODIuDti2WKgLfPLHgANxLDLy3NkesAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR42pWTQQ3EIBBFkVAJlcCxRyQgAQlIqBQkIAEde0JCHezOJvzk5x+Y9PCSzoe+ZoYSPtfFRCMtTlnLxr2IyLGYjGF8iZukEznRIGgUquAwHmR4Jupf0DeCwtmqK9UjrGBoG+iXN6NdFTAq4K9NQ1vunkBnoINOW8HKCiRCNYIr0FOSE4meIMsLRVvyBJ1rPgWwFejAsO+NYFJd1p7jjaDJf5A18wSnDE3JngC3Ue/LwEx+vy/ndjp0cE4AAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR42rWTQQ2AMAxFJwEJSNiR4yRMAhKQgAQkTAISkMCZExJwMErSJj8fAr1weAmj3aPraNi6DolCUlqKZWEUBoxZMAmLUIERpLtQid4EBQMsoM1MuhLmF0FvaxU1lF+CnmmxY5Bgfqgow7uDmkgCWkO/qvG7oFAPgjC5BfA1wi94uuYdnz8FSoSKBrxGjwBpqILsF9z/k1UIHsGkyZWIXgEP2WGD5BbAxsJjfgKcktuPWt+mKQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuUlEQVR42qWSQQ2FMAyGK2ESngSOHJHwJEwCEiZhEiYBCUjo+Z2QgANem5SQ/GnJCIcPyNp960rpN47KIMxCsfdH14GvF9fHKhwO1ZJSkJNPAUMAk2oQ27USsgS20rIFDmPDqmCtqgCZgxPZibMnmKKeeHFHEN659Aq2N4ICXeYngkE3wYa1V5AExo4/ETQoPTkNbddIX3OC/3W3q5CRYagSHNbIPmLuJ3PqEISTuQjUIyCVQCX17NMf3bv0EWUvmLgAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVR42s2SPQ3EMAxGAyEQCiFjx0IohIMQCIEQCIVSCDffVAhl4LMlV/r0qarim254iuWfJytJ+syzUZSqND8nyxNZWS5EJBlW2BW5ocOgiU+so+CNBZbQ4K2gu6QqLxrw+FnAVBQ4TVlHBQsKMD8q6NC4/yI4oLFGBY3WzxFBoVtvlh8VZPwPHqeIYOPVIwJ+96KkiECe+H/BF9JYBnaNopvBAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR42sWRQQ3EIBBFkYCElcCxx0pAQiUgAQlIQEIlVALnPSGhDrqfZEgmP5Ntkz3s4ZU0f3gzE9x7WQYBJJDlfIGZeRBBFqLK3Pgc4DIoUnwaWQdhCpoKmP1L1qegiCSBjTo2+a8gGsJ1CJikCk7OqUGyBOuNoN0Jiio4KPNPVui6A2UbT8eXMxV43Z32zywIVoFit+Ta3uj5zNGFCJwWVLY/ncx690B7d5VX4Fhw/UD+v+ADo5vgw5SLrxsAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR42p2SQQ3FIAyGkYCESeC4IxKQMAlIqAQkIGESJoHzTpOAA16XtAn5U15e3uHbAmVfWzp37/tLYDJD8t4YjXkmMSRExinv42KGQRHxQOQbr4KmAQP6EqsqKCLJzMF0yHRJLEGyrgIk46GJBFWYgrgSQEttJSjQgpPWKmRPK8EzHcqM0zXuWwKC8r0KDA4UBJgAGT9TwwTzgYYXZLBBFVED1SrdAgXW3MOcEUdsCcYKGOcJe49e4viT+Kugw/qc2/wAsWfeE8Opc0EAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArUlEQVR42sWSSw3DMBAFDaEQAsHHHA3FEAwhEAyhEAohEHLuKRDMoHWktTR6crW59TCK9LKe9WfDe10vYqd0NvsuliuPTgLhCvfOZ0KdCJ6sGYIDgZKxeBm5CqpJii1oKNgheP0SKAUFzbLEzBNoMe/pvLODyiOIMLsC6VKke/AEm2w/s7sniLwgk52QJYOCxAnjPByjm8dswpoJbwv03aM8qaBH8LsEov/+L/gCqijk5gU8bqcAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR42pWSwQ3DIAxFGYERGIFjjozQEToCIzACIzBCRsgIPfeUEbpBCtK3ZH05oByegsnn29i477YNYid3Cr6h44DvpBv8EBydy6DCICG2SEPwmQjeYGpQYZIh/okA1RUVN8RCGAZMlgMwqzoj6y2DpA2oR25pQBkPwBWFmcEpB+g6TLUMCmXzqmFNGixwEyMJilFdJIMsP7x+D1g7C+pJkc3GpT8x4LlHJfaLK7wcFlN4nOCUKVwP4ErXBsbodv2Q/uRN3oZXj8GBAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR42pWTwQ3EIAwEUwIlpIQ880wJV8KVQAkugRIo4UqgBN55pQQ6yIFky2iJhfJYRVrWI9uQ5dz3pq3KVxF/V/YH8dmHs0szUtX9oPBQGPuMALIag75dh0V8BASG+FYAwVS1gndx9hAAynfhAm3nKidZC3BYI8FyTUAwii+WLtkAaGguwmKC+fGGInhFi8erIngjQXMKlWIH5Mx+AiDnR0CE1t0bAN77ZuwkWyPcL0Qw6m8KwHeB3U4BMgr+IzLqH5Pa7UhBTZzTAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR42pWRQQ3EIBBFKwEJlcCxx0qoBCQgAQlIQEIlVALnPa2EOqBMwoG8skP28EPKnz5+5i+fbRPZKl8V2rnKfTt3TTJ0VZWBYgMWTQLIysB3Cmgv5RbdVd0AhF5IfAqA8t3ADY+J3QiwKwALz4wAsRu6FC/J3QuAxXnFO0aAwIidd2C5CwEWDQTAU+dFAgy2m/GzQf+WgMToALhf8FHvdtK9J6BMtPL7LwC6P5FsDkD3joAHxJjVLV9tu/sAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR42o2SQQ3FIBBEkVAJlcCxx0pAQiUgoRIqAQmVgATO/4SEOuBDMptsBhp6mDbsLI9lgvltW5Ot8lUn/ivqWq75kJV6+8SqMtCl4HngBwEkNkWY5lHrh32DkxKaD93Egu/VOjYASxpYEf4+A0gDK8MPqnaPAJdqSHQlDnzvAJR4lwt5hjeflPhCIxfyrd5s9UmAOdqAafoQF3oPCfWbgF3IAgiD0Q0HJtMywPO9XgI9ZFoGlC8CzNG0eQqYPG33BWB1mFCUTP6KU/fhRiayJQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR42qWTwQ3DIAxFGYEROgLHHDMCI3QERmAERmCEjJARes6JEbxBgyUjWV92FamHnyB//HBiHK5tY6WpMlXl/eI4KFs+P86pr6Gm4MPw3wvwAQM3jR/+zoAmkCIJZG0WUJw6VKwzAFUcQBU/qxhZgN0DWL4FaP8Chi4R/oEc4AMqJGerGg+QJAlL7tgNvV7JEe4DrxFe5fsLthFPIQEGQxEqyNh3ktO89p5YZVABT8257ukpAIeN1iA9BqjEjqN+A/tv65m3CkbYAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR42qWTQQ3FIAyGkYAEJOy44yQ8CZOABCQgAQlImATOOz0Jc/DWJm3S/CnJsnf4Ntjf/itNCee6MguRiULsRCIC8BE9W50fnfgBlxixHonDidnVoFkBSESdaBfrQZyalghB1dl/7Z4NkAF/0fUQPdtvmBxtEqyrxGy2Kk1MRIHyBjSvTA3w7GIU3xoog3lioCye0RMDpP5nMK+i6UjbXgWce2ic19hmTYMRO78hKcMsoL6JgcsBk4d0vUzDKbXAsbIzlZG1G3nV8didTw9VAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR42p2SQQ2FMAyGkTAJSODIEQmTMAlPQiU8CU8CEiZhZ05IeA5Kl7TJnyZA4fBlyf7uW7N12Oa5MwkfgYQijLqPJGExmHno9GAV2PEXChwk3WMDBT8IPBkPngmKSrJAWGTyO4GnWZG1rmuOCJJrOUO2XAlGvWWHoqZZSEAYqii9FWAHKSLAYfIiigqQLxTWNwJ6KvBzXx8J4NVXXRkoIcEJNfqNzc+AvX5EcAC+cQO9fZZ7LgAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR42pWSwQ2DMAxFM0JGYIQcOXaEjMAIjOAROgIjMAIjcObECGzQOpItWU8pqIeHIn3r2XFIxzg2ijIrokzKoHiWlWqZ2Dk57bMqH3CZqNqZ+akUFywhIPNNdrpgahIfE0WiXCHntK8mIDsEzK84IcOMgvqrAQWDdTs9tMJOg/4VhAuyYgomvFSiILJDwuuJC5wCEZe4ont2AXmHwg2jY7l9gUBQeqNHwQDBFveAl1nYMIWtr178B5Juws14FOz8B8I9HwVfV0DgKbeF7igAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVR42n2SQQ3EIBBFkYAEJHDsEQmVgAQkIGElVAISKoHzniqhDtghmUl+fiZ7eO3hkdfJ0PA9jk0WmtCFKiTBXBTO7ZQCLuzHEBbxaiizU24hWuACwZQ/7rJAFS4bkw41/VpTP3FKCzB4qJM7wS0vELW8lBM9TTgxkFQ+fECptiuOc9l4bMvKIpo5DiATIsuh8g6yE+qwG+8W4pbMB38Ycon/Ey/QOYB4gUQHbr4JoHgB2/rQN9+GTTIcFzTgctM0TLHAdMod9vGSH0JWH346z90KE4rs1AAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR42pWTsRHDIAxFGYERGMGlS0bwCIzgETRCRsgIjOARqFNlhGzgiDvdhXsnFSlewT/xQMJOr32fbMqpiNKUYjnJSl1IM+zKDT4mouCJusSQrDcpM/MEzSSHIig4F0GPBGQsBWJZRXuhIKPgsPyy9Tu6QVEEBcM5vbkC9m6izNNtHQvAwIktFBgbRRhcnSCv3is8HEGIJ5B/BQWCC3OoAC38Jtz5zvwfoiHeARc2hoLhfAOCTaHgC+LN4ByBaunJAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR42pWTQQ2EMBBFRwISKoEjRyQgAQlIGAlIQAISKqHnPSEBB7PT5G8y+Uu72cM7FD6vnd8gr2mqjM7mqLM6yREwOHODoQZOx4gbIkHQGsw1cHQCCaKuYIVkcZQCW3yGnAZSFTAFYUNojztynj8eML+BxclhLS1Bwm5XCBdHSHDjRIkFPPuF00inwL0pAAUSBQeNZ1ziyCKsOWOB7asUaj3TO+5EnwT6ryB1AuXHCIuE1k+6RguyDPimpHdNmfrgn238CAqbQ/v6cHVnHPsNVTXdPepoQ/AAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAy0lEQVR42pWQQQ3EIBBFkVAJSODY40pYCZVQCUhAQiUgoRJ63hMScLDLJEMgD5pmDz9N/wxv/oz5rKvIFe1FvmgrsuoP0tpbe40YsegLZQXx4YE+Y2BStkuYq0/AJpAaCw27QPA4qf+qAOrqmj0SSm1pvSNgwbR9vtIIsDot9dMASKiHHsDdk6aJ8Ck/AJDggnfAy/0+DiAqtL7mi0GFu7i15wng/wVYAM4bwDVfoV09ypdT+Y8jRgVMdT7cJEsaA2JN4yd3yYA7qf0AkdzpjsoeeIwAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVR42o2RQQ3EIBBFkVAJSODY40pAAhIqAQmVUAlIQALnPVVCHezOJJCQV8ru4aVJZ/KG+WPe66o4YROiEAQrmPp9zdCmJHzAVUWRNaKCY9Jw/CMItdEPJiYhgtzXVUBK1xB/1AOLi3B1DR51h5yWVrB12tk1lMH0HfmYVuDup9opwAB/E4ACiccAo3C/JmKIPPcOweOeuYULsZsJ4kAQGG4vsBBkCHj7jYIWSkLKShAs/tm7YEweZJK4Mp/XXhMfbh8o+AIWYNKUSrviLQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR42n2SQQ0DIRBFV0IlIIHjHlcCEpCABCRUAhKQgISee0ICDlommZ80L9ke3i4wzOczw/E+TyNuyqZu8ibYOkgWd6LW7dM3H7BcSOITcaNJoDEoPHn9CiNeDj+pySI2vDDPflXNhwkQJZHh8eufwAM2h8ZeB165KzG4/Qn7d4LikgDvPi3ZY1kioHgXIAAHsMxWR0sWEUK0vODmtgtPD5LKLhhIxnVQMO2hAN+9bJOsVlNAVe/2ZzcwTijqlIBgAQOKRpKeLk+t6E6nuGryBWN59Nif74TwAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR42o2TwQ2EIBBFKcESLIGjR0qwBEuwBEqwBEqwBErw7IkStoPdIeEn5AXjHp4xA/MyH9Hdy1Lxxm5EYzNmw4G1re/9en2cxhd8mkjyMtizSZC6IpnRTIJrpqQRseHSexNNmDhVAVETiTqLPiqbp1p8EYS+rsa5bSgYP/8rUHbmTag543gTiEt5CQXCD0SRnxkxCw+RI2bIg7G/fcZIQceECVY3uPf5QRCwdukqK9cpO+778XC5fCcYkjkRfzQJaC9GRCQ1Jkb+Ab9K6rK/KsaFAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR42rWSSw3DMBBEA8EQCqHHHA2hEAIhEAyhEBZCIQRCzjkVghm03mqrGY1cRbLUw5Ps/by1E0/HPCvXRg4uFL81SmPluDZ74kV4Q2psvheWnsA6gnusleoD5ehSJMKQPXnPgq07Bes96laOfZszgpig07XWwXQ0lx+C0hNoYBkR7DR9GhDgjpG0QQH4l8DwpPHHPkbBuEDWSfLmAqXId6kqJPKZoNDLUx5efy7A861ysuS5Nz0n8y8Se8tJAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVQ4jWO4ZWHBgIYNgNgBihWQxAWQxB3+///PAMLomkEa/iPhBqhGEP0BWQ6XAQvQDNiArhGfAQZYFG7AphmXAQewKIQ5HUQH4DPAAUnyAZoB2NRgGHAASXMDqQYgSySQY8AFJNsZyDEAJjgBqgg5KhdAxYgyAB+mrQEOaJhkL6BjkgNxYA0AAHTRCRObbGURAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR42sWSvQ3DIBBGGYERPIJLl4zACIyQERghIzACI3gE16kyAhuQr8DS6QkFpUrxCnzcux/sXsdBdhEGm/AiijyI9j6TN9ENl2iig7fYZ4JCAc6UOLbewVO0IY6iIh6s4JwIMneEkR73x2BbWwiumeA0yfmLwHMEVk8LQTKxdi/xslulANUbYw4bD3jKIsIQVFT3RrAk4RyF+0GA1vErBwNHqEguwlFgwBLX5P8LPne+5H0LFsWrAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvUlEQVR42pWTPQ3EMAxGDSEQCiFjR0MIhEIohEA4CIVwEAIh800HoQxaD6706ZOT0w1PVWPnOT+OfNaVyYY6i5GMYlRHMZ8nL8YFvP3LNCNFggMT+Z9jLMhBUvVqu2+jQ+xkQRsIBCgYR4HC4HciqBDrKGgwuQaCLTiPYghX3waCi9jxGjtUl18CKiYYfBlKSz18LA1uIZE9ZtJo+q9AIoECvIVGva+RgKlR7+O7wEOfC+boUEBVzuCF5if/BuG74g4jyxpKAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR42sXSsQ2AIBCFYUZwBEegpLxRHIURHIERHIERqK0cwQ0UicXlh2BBYfGae8eXIJrdOcbmyJsZ3ZQjKgaHy4FLxaMP6CsgECDeAyxKAtsXEDuAqNlJgAtHA4i6I8AFrwHgSwVwgQBw0wKSXgCQgFeAHqw5op8SH06eYC4FGMk4gH+bVwjomldA8AroAZj/gRuUX+JGlX0PiQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR42qWSPQ3EMAxGDaEQDKFjx0A4CIVwEAKhEAKhEArh5psCIQzcqHIV61OsVOrwIuXvOY5N/2VB5kpQuDKZOTLhZa6IIepBcQgoSB3B+lQwdw5ERZR0zRtsBYcj2GxE/LNrgDyzFYCYEIye9ZInKPoivgUYfe0IxGG7BT8TnVBgSJUCEiYwBihl0jWvUl8VDPGqFd8LoLcxhX2QwqeZG7HTE4cisEeuYEDR1wwFuVO63TbSCQDz4mLxkxAdAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR42q2SMRHDMAxFBaEQAsFjRkEohEIoBEEIBEMohEDw3CkQyqDVYN35ntNq6fDucv7nJ8mRPNeVFEc7C/N+dnXMkbPwPWDIKvJJUCkYunohmwQlAggWXD6cu6MU7GcCdNWcS9wZBYoK8Y2R5kdl9cOxuMDWId8cYfUbBBkmfa6oIImgOm3sUNCScm7k098KQQKW6t8CDZIR2rcRiP3YA8MjPjKBOdsowY6UVBBnWKq9jyIfiF7rdnTlN5AAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR42qWTMQ3EMAxFDaEQCiFjx0AohEA4CIEQCIFQCIWQuVMglEHPw1n6+qp8jTo8KbXTZydW5FgWJijxKfzzrFwjsKC+EYSbDbuSiR3yGwosgWRFiAb5ZMEIwe4IsMtTmbh6V7IjKJCrinD15Amou9UEDaqLI1jxmBYXCJZfN5XajDcjLiT4y0TfYVSQYN0UQUE0nCPg7D8sYPgS+X3MQwKa/abIqKDTXQjyBcWU1+iGWRWVAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR42pWTTQ3DMAxGC6EQBiHHHg0hEAKhEAKhEAKhEAKh554CYQy6WIol62ldtcOTGsvf5z91OpeFhI4MXi4eO3kQLE6xCi7DJTd9g/LNoCBp67ztjW9lZesXYOWkIveu3qAimdSRJzRgsPmWEeeYO6trUv6xA3YprJ5gkDVmJmC1Kxy+RRrwMhgvTGhXIDggSBzJGTySuXDlHwOxk9NAwN3MaYhnGpBMsVtyRIH2ZFCwNBLvDPg37hBW28kHWZj3QRfpzQ8AAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvUlEQVR42pWTMQ3EMAxFC6EQAiFjR0MohEIoBEMohEIohELIfFMghMGdB1v6+jpZ7fCk6Ct5Tux2+iwLUw1xCuSrocaOOR8uxhdQF/bIgO2f4GQBHWaEr84bOq1n44LsRMHNAkKjF5CNOCxUKRMI5ly9G/pGwMGWCLoLDhY03ICCtC8hiIWbBUfp65ZNBgQp1VAvsGOBp4LJmekGazQR4SdIdJ960uJTZpRGd0QfiPpUwJMY8SO9FQx/UsH9P/cZ72aqsffpAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR42pWTTQ3EIBCFkYCESuDYYyWsBKQgAQlIQMJK6HlPlYCDbkneSyZvoZsevsP89MswFPdZV3+xjUDNdRAnsDDPwjlhQ2MZ1CIFrz+CdFNfnDQUxCRcNKnvNoZARgYy3YFctLmeeDMhS1N57/vZmQoaxgxorqaWKVYBz6hkkaeZIIGiMomnAkvQSZ4K7E6I7sA/FugtPDlCltjL1VZHOzgHP85hc/oeKFAaprl7Kzsfk1orPzZEfRP8a7+C7/BlxsfXFgAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR42qWSwQ2GIAxGGYFRPHpkBEdwlI7gCI7gCIzA2RMjsEH/mvRPvjQQqx7epaUPaBvOeb6YhGTReFAixpk5XPyTVeAOWQtJaBi3Ah7QsHAkiJCoAgG7wHeCBIlNCObfTWWbR0AoMFBfoAngEJa3AqQI0SNYoWl2nOQRWDIefCNY8RVfBdUjiGbuBSdyK4CbcqeJySUYsHv3oNj5P1mkHw83A6r6Y8wEAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVR42pWSTQ3GIAyGKwEJk8BxRyQgAQlIqIRJmIRJmATOOyFhDr6vJCNp3sAYhydZWnjoz+ha14IVXIPlIQj84ASq1I9fh9yJJ8GAYJqjCiyYGcjCJnghgcQUgVMBFuiFBQSuBKMKhIGAWgJu9OY7l22rhX00acUOeSLYMa4t4uvYLpZoYNKnyiV8vQoQbgg2FbsFOyMIULrHX9lACxlKvXEmGlIHz3p5AqaXZPwqSLh/1edQ8Aeft+DAU2i+ZQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR42pWTQQ3DMAxFAyEQCqHHHgMhEAKhEAylEAYhEHLeKRDKYPMkf8n6slLt8NTKcV5tJ03v4/ixK4WxeFaqIkZREsBLVz4BdxS3/OwFM0qkOHN5gd8gjmZfO62N4auDIFNpaUH1VUBQXEAeBOJyBwt8FY02NuWivAqBLE5gw4yIE3JUIMbgSUMQ0CBgXlQFBh2dQo4EhSft2Git/CtIkSAvWpgsjwTT6PaMrnKHmOXp4a73xXqBYLDZnbPwH2mV7GjrC3XF3WmZrmqzAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVR42q2SwQ2EMAwEKYESKCFPni6BElICJaQUSrgSKMFvXpRwHdydJSKtVl6hk3jsI2s8sTcMxzyHyk+WaIo6aIJaCa8XPkKNAA61/V9A7T4DCpgeTSADwKkApkbm2xVgBbNSI9/+ygCtm/DRAs1YbxlgEwH69WxvaLAMUCE0DgrPpgCoEd6aQUZ5eXgE4J3v9QhgpBVOehELyRXgsCchGk4nQpTjrdQsAZy6w490C/gCj1zfdrzb/IMAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR42q2SSw3EMAxEDSEQAiHHHgNhIRRCIRhCICyEQlgIPe8pEMpg20pjyZpG7mUPoySe6MWfyHeaLpVTlYV4cmdWMsDn1I+FeHVnVjVADwDzMwABgNRpxmr+m/wsqNG/KKTmX2RfqEalC9wfCQBU9xiwI6PsAeoBdDkHDWw+A4U2mLemYb9735rIWn0W5BUCLHcA9yRuqv4FkIIS+kMJL8GlDnLnkdpqe4YLBXkCLRhxMcA2IC9IWQejW/1HOgCQK92cGqOsPgAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVR42q2TQRWEMAxEIwEJSODIEQkrAQlIiIRKQAISKoEzJyTUARveSza8yRb2sId/SdPpdNLS1vcnnTAgWiegFV4CC2TFLBxfyLBxhvWPwF4VcIfF6yBgBRXiC6OeXKBnEgYTaOKJDthetZ8MUiVrYAwMLLdajwLgYtSG6WodskomwJUAi1o+bmBzwMrThhl6yimALJXNyUfq9SAQM4kB/12g+fEKa+0Ku5LxSYcJxaAXekichHQz5o5cMbx1usDwH7J99TesR+iOL4ESYQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR42qWSQQ2AMAxFkYCESdiR4yQgYRKQMAlImIRJmISdOSEBB0ATmvz8MAjj8A/8tK9dP90yDCJ7yrVIAfnU3iIFrL8AYAgoPIm2TdLcg5EF+KIC9V4MB0Z4abZQu8lwBOAWvgKYoS6KJ2ZAAE0wCKBjjwpwcKBCkAjNIx27UwAr4RbgR/DnJwDfBJNS2a8AD98F65Vee0K5yX5iwHop8y99TTbkGQbsFcWb7BM/GdfDiKZK9p4BB94s0kHLUGRYAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVR42pWSMQ3EMAxFAyEQCiFjx0AohEIoBEMphEIIhM43GUIZ9BLpx7K+fMMNT0pt5+fbbvqs66B0KoN4AltHgMVnsnXegIZiDXKnCbgC5u489o2z44CABbQjDna2dw7vcFzOZDk5JMhVH+OAeAF6TRE7XewyAXppR3GmvrmlajYZXFwg9nAe7tJ0IODmVYFfD5QhwFy+iM7spvFlPxNGovw/AtVqSCBHLTB+MyygoAW/tNJ5o6Gq2WFQuNDQmC0Fq9O5Y1CCttqcyReJF/RqnfQxrAAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR42pWTMQ3FMAxEDaEQCqFjx0IohEAIhEAohEAohEDo3CkQwiDfkWzJOsWV/vCWO+vq2C69+z7YmAMRnYSTSUxkVtXVLEyfUCSkTrxgA6oXAB5yaIAKlUmGAt7C3EbLNET4IilQnHQWRmtDOLDIUMDD+o6CdhH+CUjOgBrOQAKuWQdJeKzpbQADkBu6yB+hdRaAM9FLTeJFWON3AHgLdHCK6D7hgeCCnp5xdc42MJcOF9g0oDtk50dr5k6InNVFe42wkdV49AO21utTEmcUvAAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR42qVTQQ3EMAwLhEIYhD33HISDMAiDUAiFUAiFEAh936sQjsGWSYmUs1ZV2h5WJaexk7Sh77IggmAVRMHkuO3i9Ax2HxOz4DCo0Cz4Ad9M3JInJQ/Ax/EI9gLVAuqW1H0HPoLITEZiaYriYunGLBL0t7rkXiw5rhCUyNAjDhQrZhUYYCQArvmpQLX/8FSA3fD4rUDtfCqCFtPfKwxayBpvXhTfuoAD7kBFQ7pU0A3K5l7M7wIuTXM9h5uqNpvXCW/398W3yoiGAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVR42p2SSw3EMAxEA6EQFoKPPRZCISyEQgiEQlkIgZDzngrBDLyOZMmrUS0rPTxF+cxTJkr5rusdm3LYWIxlzA0SkTLAYFVYEaNaENebC9zeFQE6BEPBBw6cyq68FckE298GKwS92SqckaBB5xJQI4E4XsXENCtArllBh66DfUaw2OEO75ILLFSM9kTAzwXO66bCkQka1KgozQSE/x2vnwkGBDdhCIeCH/ToEJ8AywO8AAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR42pWSwQ3DIAxFGYERMkKOOTICIzACIzACI3SEjsAInHNiBDZojWRV1hOV2sNTEvB/NiLuvq4dQcjCoSShKMHW2pDXgim8lKZP0rXe2XBHEQXk+RGgcApVR43C0O+4aeJXOCF8qnTHAUFwsCaGCAVcaHj3CJ88AgWkQ/DgntsEKsf80j1RMM3Iw6wXXevsTkEzozYIKm/KCmilgHcf+SvbTR6BZF4rixvGJaQsQeDGv4JFwFmHkH8RvAE4teunlQlUuwAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR42pWTwRGEIAxFLSElWIJHj5RACZRACZSwJVCCJVCCZ0+UYAdsDp+ZTOa7Ox7eMMbw0CQs174zgpKxihKVAoLN9RuT0pUBDqyepogXVJKIGKVawYe8jMqK0zKeT5NzT8HqNidIGdHmTkH1n/WDYnLPKbhdcQboyjaLS+oRp2A8AbmQeLZt9BsKSWbyxAQC8+FmQR66IE5Ai9UQYx0LLwTgjyCSXyj2jjBBdb1lRWtWCrqZRMzCO4K9C5vSSDsLkR9mwJYvchrpuuWEXrAAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVR42qWRMRHDMAxFBcEQCiFjRkExBEMwBEMphEDw3CkQzCD9g4Z/UuWlw7tLpPtPJ1k+5/kLBQ28uG7/ahxAuFlABws8hjrBpN7FgsLNRFCpHgQXNRYYFi4kuDNBdeGDQm56FPi9qgv66e8gCFb+tsNSrSeClAkWBTQKYmAkMt0KbFJJLn5buLlhKt4Yn3WPsPE/AUhW6EB3K9xujZHcRZIjUjHSgOwE3Jh8dQpvBV8gwujQXUhlGgAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR42q2SsQ3EIAxFGYERGCFlSkZgBEbICB4hIzACIzDC1VdlhGzAufiRviwfuuKKJyTzeTKG8N53j6wcWCNWj2gPVuVSJhAE5xcyH242AEH9RXDyBmRFSZBwXYgUEJpEhdSTZzsv23pzBjpoP3iCmwIcvpTN1G50lFgwF0DucnqCm4cGBmrNESYriGitU63TnTeTP6wgAOEOFkOVvwuKcwVZXKHYf/BSDg6BAbh2Pa+QnOkuQX57BIr7YQRYeeeP9AE2MOn9WIaH/QAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvUlEQVR42rWSQQ2EMBREvwQkVEKPHFcCEpCAhEpAQiUgAQk97wkJOOgOSZv8vCxcNnt4aei0k+nw7T2O33iJpa3UgphEEkZxFoeojYSL2WnCGUCkQRSn12iwQsgtZrjA5cM/r0erjlncJSti8DoPZFymeWCphng7omb/jYLXblB/INHgFAl7LLf48zToBW19j5FF9Ps0sAZSYKj+aTA9PKHcPYGDsjy1jhI3w6iSjDHnH4vmYu0QEzrhwEVhH1ze8UJMdGa/AAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR42pWSwQ3DIAxFGSEjMEKOOXYERmAERmAERmCEjJARcu4pI3SDFiSQvp5ctTl8CZD/s7Htnttm6dGUmuI4fxWN3XA1vf+VmusdIwFFHwcsjIoydEjc3s0e5ohvUafGsvT6w7xK7Ktpcf0wH1He1Q0AFCZzVmOYZQIwoTABNGS8pWEOqM5ZgJlt104bYy4mQErN6MuCuPUuIMr91MYSEIwvZMw+EVBBT4Ti7gnw2AWudGFDVbphB8eJ2Ztr/gHpQOBjLr031gAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR42pWSyw3DIBBEKcElpASOPlICJVACJbgEl0AJlEAJOedECekgWSRGip6wpRyebPYzZnbtXvu+Ihh5PhWLxjHxirMxGd34DFSsGCgUKIui03jrjPdBVvNJdV0Z8TSt6dxG84NFuhUEmuZDgUJfAl/rC6vVwVdDQ7jIi+AQIKM5SwRkbYENHFy/EfcU2KbPetGQaAkCy+mLg1sY/CMQlL8TiLCw+j+23zj3+sTuOcyI+q4/UYMhFTkS5ckbjetUbmGpaSZfu4b+Dd+cufUAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR42o2TQQ3EIBBFVwISKoFjj0ioBCRUAhJWAhJWAhL23BMScMBCwk/IC9lweGn6O/Mz/Qyv5zxXuMY9ntKuRhj6IZ2NvpEbdRAaVhrwNIiLooBm4tT8xoeokaUNI9P4zHW9+ViN1kFxUBaTVjh6RCYJBgq4ii4UvaAhd3YM6iYZeS0NioLbhQaG4RH8VqaBwgvIxXZNG4pj3DKQbjDBRYPrz/k7nNJXqxwh3jBNQ6/AyuDALnCl0+KkPG+jRWGZRk+TFnWVxQ8BQ/cTtx4oVgAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR42pWRQRGAIBREiUAEInj0aAQiEIEIRCCCEYxgBM+ejEAD5Tsedna+Iod1xv3w2Plr9nGcGnJVcs5XpaoInpHP2VCuWhU//AWUD98JILEaaQ78FwDLv1zennlETwMsH6/fS0efL1scUtz0BxAo8toL2LCmXoCj+LYXkGGwiNcFoIV5BTorNR9a9wWXSo1YASH0Psgm1Vq4VtCkdT9QMxHnvCctplEUKUl+HjYXItfoDGjLCh8AAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR42pWSMQ0AIRAEkYAEJHxJiQQkIAUJSEACUqi/QgIOeC75YnMNbDHN3mZyyZ15vQ8H3EZ6FvO1lhFksA6UTd5MzJWABwVZwwo0EYpjM39pvBU0KGbIw43AqlUdK0hQ6pKxgg6lxAqcWt+yggKFJhkrGFCIrABvPCVjBRWGlRXo2z+sIKnXNYzgAyYs+I8niwu9AAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR42p2SQQ3DMAxFCyEQCiHHHgshEAJhEAyhEAKhEAZh550KIQzWWHKk6C1Ktx5eVflbz07a6b0s6wW+EAqi2PtU0cfnBoeKIbghMYEQNOZCstV3ZKsKSOAUkJv88SXAFOnkr5HAYcWZ+dURYg1t0ijPWhutFzkd5xcKZqzneDeY7ijYmoadq0MetE7BwQbD91anIPByDAdxqhkFiU2sG0R639Y3gucvgshf9x/BCb7h1DuZduMRAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAu0lEQVR42p2SMQ3EMAxFAyEQCqFjx0AIBEMohEA4CIEQCIHQ+aZCKIOeT0qkr6+vO6nD62C7z06c8N629IfVyU4ZJCdMvp/7Ad2JIHhEnYLCiG77OMYB8WsKmAxFp8oBUtCgoGCOpjuUIFKHZcTNqZTLSmDcYXATO64RwUsyEjDGgoUKIh1NbSGi4AXJBvFfTRImT74gjRZkHI06BiBJAa2oir13fB/4yNTuVxB0iDNpCoytNMFFPzZs8gHGZ9F8GWcD0gAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR42pWSTQ0DIRCFkYAEJPTIEQlIQAoSKmElIKES9tzTSsDBtk0geflCM+HwDsy8fPPDuHeMyVD4yg155NwveBuqAjiQ2wKEGSOgUjA9BqD9A1BZDNeIJYl1C9AW7b8m0OrAwxBQvVgANZyL6s4CnKiW9W0B+E1eZu7zeOBJCnhKos1qlhSgG85bAMzaBZoojrC68UMA0HqJnqe7Cyg83R3AB1Sz2A+C3uSZAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuUlEQVR42pWSQQ3DMBAEDcEQDMHPPAPBEAqhEAzBEAwhEAIh77wKIQzaukqk1ehqt4+VLN1q7rx3bp+meaDYqfkGeA60dmrzL4DHCJApmBZ5V/hCA1AJ3Yt2pN8CaMeMDNwI4DF+AOA4JwrfADcxb2/1Qi4WYBNDg2nItU2gEIYYUPTGnyM8dy0WrM5ZQiZZC3ow6V9AQtKyle4X0lWouDZuZT3FE3fW7iNzMXRcvk8XUkXZWN2ih/QCE6fTHwqxbboAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR42pWTwQ2FIBBELYESfgkePVoCJfwSLGFLsARKoARL8OyJEujguyRLMpnNl3iYA+zsgx10upZlHeijmrpsHVXS1m3jN5BAY8LaG8CsqrZ2AGGRKVJzUW2qtQNYEc107VMVuvcfIEMDzcyBekCghp1uU6jmAF+6bh4FzICzFw12UEMiT+UPBM2BALv5ZvQhAOfNtocAAa8HUEDxLSDiXGAUDPVphIRBPeQiFGJ2b28n+Gy8avPy2xdrYgn9D0c/6AY9wuD0tmFeJQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR42q2RMRHDMBAEA0EQBMGly0AwBEEwBEMQBEEQhEBwnUoQzCDOdzc7P/7MOMU13veO7v/xnufnnZjgcyd/EWwMhirYS1g3AbPIwHD4Lrx4gi4DG9gk7Pgm8eeE52fwKqzZNwqKDOxgliF8EYHfL9oNBRnPTxA0YZUC9uvBbiYInH4/7sbrdwS3Xz1B43kk+eq0F/3i3VjYbwS3L+Qnj1zF1liOpicAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR42oWSTRHDIBCFKwEJkcAxRyQgIRIiAQmVgIRIQELOOSEhDlreDO3sfEPL4cuE/XnZvOVxrWuYsDRUFxup4xUTerwmHI06iOeBwJQb510CifwR2NRkzkUCJP5oLj0fZgKHKah4Vz5bf9js8FWP/y7IBwpsJnmaGM0Tu/IUOGEYR+ZGvG1eUOBg6M1paOITl4eGJm5BfAXgeFSMhplaCGBUiNITNxLIvOOMd7HI2HD31liYRiJ3X9UIPMwU5ePJG5VO6zsWBci4AAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR42pWTQQ2EMBBFR0IlVAJHjpVQCZWAhEpAQiVUwkrgzAkJOGCHZEh+fmZp9vA4zLSvv50g+zynAVERJStVWaAm9+ca0JXDqZexYEwSi8VcjKUISodauwVM/iGoTv/0BH0gSFjnzYFj/yso0NyURjJR1jfBhmPi0xgWRGoGq7eXax0owGidkk1KtUSLO0YyZ6sxgdeJN1urMUn50COLOPdstHGFx0WmRxC8xgOcigkL/o3FmbUnOC1dxP4X0SffE2iOrEwAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR42pWTQQ3EIBBFkVAJSOixRyRUQiUgAQlIqISVUAk976kScLA7JEwyeekcOLyE/E8/8KHhu21KFLJQhENYBOvvw8tCVF3NKvxAE9YRdL34hwYUfmjHDIcXe8BjxLuLRiMVXg2YkITgbPkeXrZaFxrOFb3VR0CyOjtoPdUJKE6A2/KDMDdgZWlTO8AqZ2cqAOdfcAtTAdeYwGKVU5+07SmgNO9pq7/giGd4uevdvA3CshNXI7eQHe9j/8aC9NY1U2rGrqp6fzefBLYLxMC2AAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR42oWSsQ3EIAxFGYERGIEyJSNkhIxwIzBCRmCUjEB9FSNkA+6fZCTrg3DxpBgrD9vYfY9jEMAHZHABD9xA4jTovbs/I3mDTrwgAi/SV+e1IPOP9K3itaCpRAWBzggSUCJJSw9VkcG5FFCJFwgkjSJN5gxEVlX8AGcJ/CiZaJIzBXEztGIKqOQi0GA3AurfL17htgXzwPJ8bgsaWK12MQVU7sm7sRPwbUy1XkH33Ob1tffgB4JdHDuVmypwAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR42pWTsQ2EMAxFPUJGYARKyhuBETICI3gERmAERmCE1Fd5hNvgzoUtRU85IYqnoE/y/W2CvJclmZzNUac6xZFY19A1niXJh935go+jsfKdOXMaKA/GeoelgXVii1YMhkdEP2HyEgrR0kUtQcKNQnUmmM4waDTQPi42XDhcmDjF68+QCgwqiolERAuRHH11tKtp0HDAGQ72RPWSBhT5FfaM3rH2N5ED42BtFD0RbOTVHs+EBoi7PrjOimqP0b5nG/yJ7c7gB5bg9sXcQgi1AAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR42pWSQQ2FMBBER0IlIIEjRyRUAhKQUAmVUAlIQAJnTkjAQf8eZpPNpD/5//BSMinT3dnFvSzOZOxGMTYjGeCZjUJWA45/VKMLL436gNMfAF31x/4DzQ2eIF5sRbWdbVzyECCu3t+pGslyH5CSN2OSS3MwKFIZVHyNS8ICjZsYZzdIXrLwhFF2YY9jnENoSlMDaReQkhvRYNOXKSSoMJhCjduq5tDASBnoRAwkNJCqOZB1aBCo7PUd7P4xmBLktT/ghsaeHwm00FyrOeJ2fgAbOvSmw1yLwgAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR42pWSQQ2EMBBFR0IlIIEjx0pYCZWwEioBCUhAAhI4c6oEHLD/wCTNyyTNHl4C0/Lmd6hdy+JM4iuqKCIJA0nkDvOFVTzgFjMEW7/HBZUf9s9I+ESC1hVOMaGWX8EeClDwzQdqAgldgEIJos6dsIUzgP3s3g90L5EgeQfQsNaERYLZoxGISyhA5O2FohvDdLJhU8JfGGKIay/1LwGGxKu9izw6grOKT3A3zOEQ2Y2cwkYCP3PDQKtII8EPWYz2fYn7/MgAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR42oWTwQ2GIAxGOwIjMAJHj47gCI7gCIzACIzwj+AInj05ghvwlwSS5kX08CKh7Vf6gXJOU8crmxKVVXGKtO88wPXipBRwK6EllgGz1I4sxHr9ErjMxqF47O1mnZVo8EJFRVB0MG4RHHlV/MtIQujBjY57BfGkeCvgehK4WqwMSF0gdNMATcsYp+IFR86NMjAuILYJ5nMPt5CMAGNRYJg0IvbHAjDt6WnnlxEWeXB2sWbxOtkQ3T7hjyZ25gsJsYnzND/7kP4ubfVqx1YXPAAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR42pWTMQ3EMAxFDaEQCqFjx4NQCIFwEAyhEArhIARC5k6BUAY9D/2S9aScdMOT2u/4x3YSO9dVzME78KAEU4px3fasM4l7cIMrWJB45DUycCbi24Il6zToSWjBDK0guT+tvmRwC4lBlcYNOBuDewlm/ZMnZjRw9NwGyR3V7DKYgjpIoE5cE5YzIQcqvAzCwbNmycGSdUP/Uz4F4BrcyKCmBf6vgYb262q3UQvsc0t3gzhm9uFupDHOx5Z77gh6GqqjqqqX+gWEMP4eoanaZQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAy0lEQVR42n2SQRGEMAxFI6ESKoEjRyQgoRKQUAlIQAISKoEzp0rAQTfMpDuZxy6Hd/lpf5I/kXMcO1FZlKwkJZg2vdE/r0oDl7JTJ2Id+bGBV4PqhEOJ0DYlO4qr7QLHyVYq1ByHqyXByEmJMB3c5wGrBmZwoUNB9xWryS2GPjKoVhODec3dYEChsYsxw1xuGMpmPIKFvn4NGIoVCh4HBksDBpahJ9yK/DKo/9LGmsvDAOPOuA2eevQG7EYO1HdFPH7n6gM1LUBPNPgA55/rIWNE5DEAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR42n2SQRGEMAxFIwEJSNgjRyQgoRIqoRJWAhKQUAmcOSGhDth25meHeVM4vJmS3yRNPnZMkzNWYiVVQmVwTSxNEx+Pu/itXKC0i+Ls6KsXSEzEuUHNiYbqu0bxGAka8xLZcGHWSLmTnKXNLFDQYdSZnCqw3mIbd1AqO7qW+zdfbLIr9zpKC14ERLkAm2CVuJ5sNjz5NYGvoQtNGF5cSHShYR2buFhabCgAm/Brw2ItnQWEEpeHrZ/S1nuM3ciOYmT5zwwri2KDbN74W/tOfkhYB/loV+yPAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR42pWSMQ3EMAxFDSEQAqFjx0IohEAoBEMohEA4CIHQuZMhlEHPgy1ZX/FJNzypdZKf/2PTva5OVQ6FlaYUhQK7wranet0XT+UFHmUxZLLeXIDxYPyGw8hGsOFSanJILNYn1DqhokUaEwH2t4gOCSw3c/D+ENhiHd/gUa5/BUpiWSCvzDpG0CbA6zkElrsBIum/EOQvky6c5pIt/5G1cShkcFIv4GAnsDYb7R5ef8DQkQtEuzvMhiStXRTC25ALW2zizd3GzAKbGGbksThVIecLiHgBUOxAos8AAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR42pWTQQ3EIBREkYAEJOyxx0pYCUhAAhKQUAkrAQmce0ICDnZpMpOQCdnA4SXN/M/8+bQ193EQ1wmd2HlTJ9Aiehx1FlPnK5SOBXlS9zTwEGZkmk9oHfcYVIqI9/pjmKQ/GWkwoMxWQi2M2txgvnNC7Rz1HYO4YuBxB3XZgNOUZQNMbPJ62o7Bg0X8gOetFZSAonLxkx60ykNMESX+Z2xGzzWa8g4yY8thK4bac+pOJOOwrqQDjBoU/mVCkCSJA37Wpff+1nTgFQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR42p2SMQ3EMAxFDSEQCiFjx0IohEAIhEIohINwEAqh802FEAY5n2RLX1+qfOnwhvgnr41j+cyzMylV2ZRVESIpi9N7lx8e7konTjuUTNowR0GBgLnw4J3ggqAqmTdHAgzEOKHWvC8jggNqm9WWp4LXiKAomfqyBwL7GjFyhUxP1WhdIoFPWbFnTHSFKRIwlaZR/hLcjOxqWdiDw38beCsSCjxATJieCE7ouhILvmMhEHBjvivAAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR42pWSQQ3EIBBFkYCESuDYYyVUAhKQgIRKQAISkMC5JyTgYHc2mUl+ftg0PbyknU8ew4C7993YhCRk4YS61/+MmWEfl/AhuhCFuciGEEwQLXjJMMGAYhICLZxC0dYrZYejglM6SR0wMfsnaFDLJOhvBQVv5OkIUQg0lwsEkWbjaLclGXafWDdBoGDSf1RBpTXeBGaPOnFPR9gWb+XEl8gkeo1h1fpK4DXk9gffiIEzaLYQqEJ5GvBPcCyCph21t4IOUxeeBV+kVO1sWXRmUAAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR42o2TwQ0DIQwErwSXcCXwvCclUAIlUAIlpARKSAmUkHdeKYEOiCOtJWsDUR4jwWq1Zxvf8bwu41SKUpXkdMG9gqgchh1uyiQeMM8FXRELyBBXvFhzNAvwpqIErgR6wtn0gQBnRl9kLE5P5N8GdKdVp1eq7K+Ahjk18qavABiDnwu/ELdFX1tSN3q2gKAMmu4go2xeQfy2ZZQm1MJJ2zod8SMyhSdNbAME/Q4eliOuAgIGyWt7dwPsuPOaH5RKP8vvF4ocYD1n2ryxqCyY5w01PeqNvEGJnQAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR42p2TPQ3EMAxGC8EQCiFjx0A4CIYQCIVwEA5CIQRC5psOQhikrhRL1nexGnV4g79Gz85Pl++2KauQhF14aQ6QEA2LfngLDSgCgeBj16iATYBkmLCNBD8TJCHAorULjqEAg04BaTR1nRFkk+1aw7RzApiG7wQsBOxkuv81NN1uYU8Q4GCq1pDFC8ijfWHcT5x0CzOowJKE9kRA/coqvgHF20IQ8mDsA6fzDjE6/wA9ERS9LsAVnKtX6zC3jWR4AAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR42qWSQRGEMAxFI6ESKqFHjkhAQiVUQiUgYSUgoRJ65oSEOmBzaGb+ZPjsYQ+PgTT8Jj+Rc1mMqBSlKhvEg7ISgiXtyu3o8PNNWEUf+SWhwTkVuCBQlOSSPu69AlFcskw6xAbeqAjCBBopWf4VGNPwyASyksAXyhQSdxudRJ0GDjwzE5M7GO47Q2t+QgW3Lc8xBmzB+iX+VAsixW2j/BLAKiopn7WwWbA9OH/AGrcHsy+bwkqcD8r+sg/pSaBj2dgScKCxXwJp6T7z268GAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVR42p3TQQ3EIBAF0JGABCRw7LESVkIlIAEJlVAJlYAEzntCAg66/zCTTH4gm/TwNu0s/MxAKt9tMxEyFPiALET9v4BY8YSHNAi08fJrLOBwBVZ1c4JhdQ7orpAh0aKdNnfIWhfhRNVcbazHWgdUq5EI8jag07jnLOCA5Bb+U5btLlx8PrMrGv6dW+ZbspmDtp/1uc/atTPiAJbheRMQoPC90/N0hAR10vYNkbug0Fvwsy++gUAfGhuQOKDpYQrh0ap2Lj8/NvG0Q7/SfgAAAABJRU5ErkJggg%3D%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR42o2TQQ3EIBQFkYCESuixx0pAAhKQgAQkVEIlVELPPVVCHez+TXjJz6Qhe5jLA4YHpeFaFjEZxahGctk6Qoub8QGn8hG/xZkhIRTcLijGjEmbUR2HG9sDJofOCalyjuVXAXapytHuMeI/gs3ljTkF2ZhxL00C5EkC7UZ4hOSyW1Kd68HZHrQKxvbWStVin1iMiKqTEdFq9gJS8BqDkZlRoBYV9dPoXfg7OFTbseuHQj5RsPLmuzDq21M6Epy6dYFmmYIvitLflv/oeLsAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR42o2SwQ3EIAwEKYESUgLPPCmBEiiBEijhSkgJlEAJvPNKCengzkheCa0sdI+JkrVZGzvuPk9wCEWoQoIOVKtKgI7gR/gSQ/Ca/BjxCwYZokEXXnzjfaE4ci9C2BhmoawFHCU4ZVjdaCz+Y9ANg0dj16K1rQFj6JENsjH1YQwP83JUzeTd6MHNB69KsQ5kinXc2S8r8rgCUdctgCkw2DMTkWMZoIu6+fMy8tggCN1ou9HOZzyxxncCXSsd1AWT2GCgVQUdNi6AmfwAKVH+bef1V6EAAAAASUVORK5CYII%3D',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR42q2TP2rDMBTGpVge2smldM8ROgaCwUfwEXIEHcH0BKVjp+YGhkIGT1mye04aMAQKpYE6TSEklKjvK09EqFamDj8sS+/73h9bYj4YWPqEJgoix55HzmeaYwWwh/eE8aiJhLglmo7zkTXAwgSYWnGATHgBGhkDwQ1XVDp7T8ILEkzdYVA4szBMGzKYnjHI3P1/NxidmXpjjPnzxQLZwiyGQ3Ay4IytOxj33R3opizN52SyxROgKttzwuVrrL0W+kjykqZ3h9Xq+TKKNjdx/GuwSNMxxD7azY6+iUdw3O3G13H8bQ32y2XlCpG58MrPSaggjqVcJ0rtIQZXSh2EEK88g85ftkR2KvNhW1VriFyUlO/WIAvcgQQGWKNcBuLjRa/3YdvyDWp7y4A14M/Xfs1m80jKN2RmA/UDOGMMXcRSKu8AAAAASUVORK5CYII%3D'
		];

    this.checkCount_ = function(inboxText) {
        // Parses the "Inbox (5)" text.
        matches = inboxText.match(/\((\d+)\)/);

        // If unable to parse, assumes 0 unread.
        count = matches ? parseInt(matches[1], 10) : 0;

        // Check to see if there's a new chat.
        var newChat = self.hasNewChat_();

        // Change the favicon only if the unread message count has
        // changed, or if the new chat status has changed.
        if (this.lastCount_ != count || this.newChat_ != newChat) {
            var index;
            if (count > 98) {
                index = 99; // "99+"
           } else {
                index = count;
            }

            this.removeIcon_();
            this.setIcon_(this.icons_[index]);

            // Set the status/count, so we can compare next time.
            this.lastCount_ = count;
            this.newChat_ = newChat;
        }
    };

    // There's no way to check this in the API, so we must query the page
    // title.
    this.hasNewChat_ = function() {
        return top.document.title.indexOf(' says') !== -1 ? true : false;
    }

    // Needed to circumvent Greasemonkey problems with "this"-scoping.
    var self = this;
    this.lastCount_ = -1;
    this.newChat_ = false;
    this.inboxSpan_ = null;
    this.head_ = top.document.getElementsByTagName("head")[0];
    this.chatting_ = false;

    // Checks every second for a change in the unread count.
    var timer = setInterval(this.poll_, pollDurationMS);
    this.poll_();

    return true;
}

var initialized = false;

function initialize(gmail) {
    if (!initialized) {
        // Timeout needed to ensure gmail API object is fully initialized.
        setTimeout(function(gmail) {
            initialized = new GmailFavIconUnreadCount(gmail);
        }, 0, gmail);
    }
}

window.addEventListener('load', function() {
    if (unsafeWindow.gmonkey) {
        unsafeWindow.gmonkey.load('1.0', function(gmail) {
            initialize(gmail);
        });
    }
}, true);