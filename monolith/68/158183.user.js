// ==UserScript==
// @name                WME Level Highlighter
// @namespace           http://userscripts.org/users/Kuhlkatz
// @description         Allows Highlighting of segments based on Levels
// @include             https://*.waze.com/editor/*
// @include             https://*.waze.com/beta_editor/*
// @include             https://editor-beta.waze.com/*
// @version             0.12
// ==/UserScript==

var version = "v0.12";
var panelExpanded = true;
var wazeWMELHMapCenter = null;
var wazeWMELHMapZoom = null;
var defColors = {};
  defColors[1]="C09030";  // Brown  =  1
  defColors[2]="FF0000";  // Red    =  2
  defColors[3]="FFA500";  // Orange =  3
  defColors[4]="FFFF00";  // Yellow =  4
  defColors[5]="00FF00";  // Green  =  5
  defColors[6]="0000FF";  // Blue   =  6
  defColors[7]="FF00FF";  // Violet =  7
  defColors[8]="C0C0C0";  // Grey   =  8
  defColors[9]="FFFFFF";  // White  =  9
  defColors[10]="000000"; // Black  =  0
  defColors[11]="C09030"; // Brown  = -1
  defColors[12]="FF0000"; // Red    = -2
  defColors[13]="FFA500"; // Orange = -3
  defColors[14]="FFFF00"; // Yellow = -4
  defColors[15]="00FF00"; // Green  = -5

/* Embedded base64 images for jscolor.js */
var arrowgif = "data:image/gif;base64,R0lGODlhBwALAKECAAAAAP///6g8eKg8eCH5BAEKAAIALAAAAAAHAAsAAAITTIQYcLnsgGxvijrxqdQq6DRJAQA7";
var crossgif = "data:image/gif;base64,R0lGODlhDwAPAKEBAAAAAP///////////yH5BAEKAAIALAAAAAAPAA8AAAIklB8Qx53b4otSUWcvyiz4/4AeQJbmKY4p1HHapBlwPL/uVRsFADs=";
var hspng = "data:image/png;base64,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";
var hvpng = "data:image/png;base64,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";

/**
 * jscolor, JavaScript Color Picker
 *
 * @version 1.4.0
 * @license GNU Lesser General Public License, http://www.gnu.org/copyleft/lesser.html
 * @author  Jan Odvarko, http://odvarko.cz
 * @created 2008-06-15
 * @updated 2012-07-06
 * @updated Embedded images for WME - 2013-02-02 - Carel Cornelius
 * @link    http://jscolor.com
 */


var jscolor = {


	dir : '', // location of jscolor directory (leave empty to autodetect)
	bindClass : 'color', // class name
	binding : true, // automatic binding via <input class="...">
	preloading : false, // use image preloading?


	install : function() {
		jscolor.addEvent(window, 'load', jscolor.init);
	},


	init : function() {
		if(jscolor.binding) {
			jscolor.bind();
		}
		if(jscolor.preloading) {
			jscolor.preload();
		}
	},


	getDir : function() {
		if(!jscolor.dir) {
			var detected = jscolor.detectDir();
			jscolor.dir = detected!==false ? detected : 'jscolor/';
		}
		return jscolor.dir;
	},


	detectDir : function() {
		var base = location.href;

		var e = document.getElementsByTagName('base');
		for(var i=0; i<e.length; i+=1) {
			if(e[i].href) { base = e[i].href; }
		}

		var e = document.getElementsByTagName('script');
		for(var i=0; i<e.length; i+=1) {
			if(e[i].src && /(^|\/)jscolor\.js([?#].*)?$/i.test(e[i].src)) {
				var src = new jscolor.URI(e[i].src);
				var srcAbs = src.toAbsolute(base);
				srcAbs.path = srcAbs.path.replace(/[^\/]+$/, ''); // remove filename
				srcAbs.query = null;
				srcAbs.fragment = null;
				return srcAbs.toString();
			}
		}
		return false;
	},


	bind : function() {
		var matchClass = new RegExp('(^|\\s)('+jscolor.bindClass+')\\s*(\\{[^}]*\\})?', 'i');
		var e = document.getElementsByTagName('input');
		for(var i=0; i<e.length; i+=1) {
			var m;
			if(!e[i].color && e[i].className && (m = e[i].className.match(matchClass))) {
				var prop = {};
				if(m[3]) {
					try {
						prop = (new Function ('return (' + m[3] + ')'))();
					} catch(eInvalidProp) {}
				}
				e[i].color = new jscolor.color(e[i], prop);
			}
		}
	},


	preload : function() {
		for(var fn in jscolor.imgRequire) {
			if(jscolor.imgRequire.hasOwnProperty(fn)) {
				jscolor.loadImage(fn);
			}
		}
	},


	images : {
		pad : [ 181, 101 ],
		sld : [ 16, 101 ],
		cross : [ 15, 15 ],
		arrow : [ 7, 11 ]
	},


	imgRequire : {},
	imgLoaded : {},


	requireImage : function(filename) {
		jscolor.imgRequire[filename] = true;
	},


	loadImage : function(filename) {
		if(!jscolor.imgLoaded[filename]) {
			jscolor.imgLoaded[filename] = new Image();
			jscolor.imgLoaded[filename].src = jscolor.getDir()+filename;
		}
	},


	fetchElement : function(mixed) {
		return typeof mixed === 'string' ? document.getElementById(mixed) : mixed;
	},


	addEvent : function(el, evnt, func) {
		if(el.addEventListener) {
			el.addEventListener(evnt, func, false);
		} else if(el.attachEvent) {
			el.attachEvent('on'+evnt, func);
		}
	},


	fireEvent : function(el, evnt) {
		if(!el) {
			return;
		}
		if(document.createEvent) {
			var ev = document.createEvent('HTMLEvents');
			ev.initEvent(evnt, true, true);
			el.dispatchEvent(ev);
		} else if(document.createEventObject) {
			var ev = document.createEventObject();
			el.fireEvent('on'+evnt, ev);
		} else if(el['on'+evnt]) { // alternatively use the traditional event model (IE5)
			el['on'+evnt]();
		}
	},


	getElementPos : function(e) {
		var e1=e, e2=e;
		var x=0, y=0;
		if(e1.offsetParent) {
			do {
				x += e1.offsetLeft;
				y += e1.offsetTop;
			} while(e1 = e1.offsetParent);
		}
		while((e2 = e2.parentNode) && e2.nodeName.toUpperCase() !== 'BODY') {
			x -= e2.scrollLeft;
			y -= e2.scrollTop;
		}
		return [x, y];
	},


	getElementSize : function(e) {
		return [e.offsetWidth, e.offsetHeight];
	},


	getRelMousePos : function(e) {
		var x = 0, y = 0;
		if (!e) { e = window.event; }
		if (typeof e.offsetX === 'number') {
			x = e.offsetX;
			y = e.offsetY;
		} else if (typeof e.layerX === 'number') {
			x = e.layerX;
			y = e.layerY;
		}
		return { x: x, y: y };
	},


	getViewPos : function() {
		if(typeof window.pageYOffset === 'number') {
			return [window.pageXOffset, window.pageYOffset];
		} else if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
			return [document.body.scrollLeft, document.body.scrollTop];
		} else if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
			return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
		} else {
			return [0, 0];
		}
	},


	getViewSize : function() {
		if(typeof window.innerWidth === 'number') {
			return [window.innerWidth, window.innerHeight];
		} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
			return [document.body.clientWidth, document.body.clientHeight];
		} else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			return [document.documentElement.clientWidth, document.documentElement.clientHeight];
		} else {
			return [0, 0];
		}
	},


	URI : function(uri) { // See RFC3986

		this.scheme = null;
		this.authority = null;
		this.path = '';
		this.query = null;
		this.fragment = null;

		this.parse = function(uri) {
			var m = uri.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);
			this.scheme = m[3] ? m[2] : null;
			this.authority = m[5] ? m[6] : null;
			this.path = m[7];
			this.query = m[9] ? m[10] : null;
			this.fragment = m[12] ? m[13] : null;
			return this;
		};

		this.toString = function() {
			var result = '';
			if(this.scheme !== null) { result = result + this.scheme + ':'; }
			if(this.authority !== null) { result = result + '//' + this.authority; }
			if(this.path !== null) { result = result + this.path; }
			if(this.query !== null) { result = result + '?' + this.query; }
			if(this.fragment !== null) { result = result + '#' + this.fragment; }
			return result;
		};

		this.toAbsolute = function(base) {
			var base = new jscolor.URI(base);
			var r = this;
			var t = new jscolor.URI;

			if(base.scheme === null) { return false; }

			if(r.scheme !== null && r.scheme.toLowerCase() === base.scheme.toLowerCase()) {
				r.scheme = null;
			}

			if(r.scheme !== null) {
				t.scheme = r.scheme;
				t.authority = r.authority;
				t.path = removeDotSegments(r.path);
				t.query = r.query;
			} else {
				if(r.authority !== null) {
					t.authority = r.authority;
					t.path = removeDotSegments(r.path);
					t.query = r.query;
				} else {
					if(r.path === '') {
						t.path = base.path;
						if(r.query !== null) {
							t.query = r.query;
						} else {
							t.query = base.query;
						}
					} else {
						if(r.path.substr(0,1) === '/') {
							t.path = removeDotSegments(r.path);
						} else {
							if(base.authority !== null && base.path === '') {
								t.path = '/'+r.path;
							} else {
								t.path = base.path.replace(/[^\/]+$/,'')+r.path;
							}
							t.path = removeDotSegments(t.path);
						}
						t.query = r.query;
					}
					t.authority = base.authority;
				}
				t.scheme = base.scheme;
			}
			t.fragment = r.fragment;

			return t;
		};

		function removeDotSegments(path) {
			var out = '';
			while(path) {
				if(path.substr(0,3)==='../' || path.substr(0,2)==='./') {
					path = path.replace(/^\.+/,'').substr(1);
				} else if(path.substr(0,3)==='/./' || path==='/.') {
					path = '/'+path.substr(3);
				} else if(path.substr(0,4)==='/../' || path==='/..') {
					path = '/'+path.substr(4);
					out = out.replace(/\/?[^\/]*$/, '');
				} else if(path==='.' || path==='..') {
					path = '';
				} else {
					var rm = path.match(/^\/?[^\/]*/)[0];
					path = path.substr(rm.length);
					out = out + rm;
				}
			}
			return out;
		}

		if(uri) {
			this.parse(uri);
		}

	},


	/*
	 * Usage example:
	 * var myColor = new jscolor.color(myInputElement)
	 */

	color : function(target, prop) {


		this.required = true; // refuse empty values?
		this.adjust = true; // adjust value to uniform notation?
		this.hash = false; // prefix color with # symbol?
		this.caps = true; // uppercase?
		this.slider = true; // show the value/saturation slider?
		this.valueElement = target; // value holder
		this.styleElement = target; // where to reflect current color
		this.onImmediateChange = null; // onchange callback (can be either string or function)
		this.hsv = [0, 0, 1]; // read-only  0-6, 0-1, 0-1
		this.rgb = [1, 1, 1]; // read-only  0-1, 0-1, 0-1
		this.minH = 0; // read-only  0-6
		this.maxH = 6; // read-only  0-6
		this.minS = 0; // read-only  0-1
		this.maxS = 1; // read-only  0-1
		this.minV = 0; // read-only  0-1
		this.maxV = 1; // read-only  0-1

		this.pickerOnfocus = true; // display picker on focus?
		this.pickerMode = 'HSV'; // HSV | HVS
		this.pickerPosition = 'bottom'; // left | right | top | bottom
		this.pickerSmartPosition = true; // automatically adjust picker position when necessary
		this.pickerButtonHeight = 20; // px
		this.pickerClosable = true;
		this.pickerCloseText = 'Close';
		this.pickerButtonColor = 'ButtonText'; // px
		this.pickerFace = 10; // px
		this.pickerFaceColor = 'ThreeDFace'; // CSS color
		this.pickerBorder = 1; // px
		this.pickerBorderColor = 'ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight'; // CSS color
		this.pickerInset = 1; // px
		this.pickerInsetColor = 'ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow'; // CSS color
		this.pickerZIndex = 10000;


		for(var p in prop) {
			if(prop.hasOwnProperty(p)) {
				this[p] = prop[p];
			}
		}


		this.hidePicker = function() {
			if(isPickerOwner()) {
				removePicker();
			}
		};


		this.showPicker = function() {
			if(!isPickerOwner()) {
				var tp = jscolor.getElementPos(target); // target pos
				var ts = jscolor.getElementSize(target); // target size
				var vp = jscolor.getViewPos(); // view pos
				var vs = jscolor.getViewSize(); // view size
				var ps = getPickerDims(this); // picker size
				var a, b, c;
				switch(this.pickerPosition.toLowerCase()) {
					case 'left': a=1; b=0; c=-1; break;
					case 'right':a=1; b=0; c=1; break;
					case 'top':  a=0; b=1; c=-1; break;
					default:     a=0; b=1; c=1; break;
				}
				var l = (ts[b]+ps[b])/2;

				// picker pos
				if (!this.pickerSmartPosition) {
					var pp = [
						tp[a],
						tp[b]+ts[b]-l+l*c
					];
				} else {
					var pp = [
						-vp[a]+tp[a]+ps[a] > vs[a] ?
							(-vp[a]+tp[a]+ts[a]/2 > vs[a]/2 && tp[a]+ts[a]-ps[a] >= 0 ? tp[a]+ts[a]-ps[a] : tp[a]) :
							tp[a],
						-vp[b]+tp[b]+ts[b]+ps[b]-l+l*c > vs[b] ?
							(-vp[b]+tp[b]+ts[b]/2 > vs[b]/2 && tp[b]+ts[b]-l-l*c >= 0 ? tp[b]+ts[b]-l-l*c : tp[b]+ts[b]-l+l*c) :
							(tp[b]+ts[b]-l+l*c >= 0 ? tp[b]+ts[b]-l+l*c : tp[b]+ts[b]-l-l*c)
					];
				}
				drawPicker(pp[a], pp[b]);
			}
		};


		this.importColor = function() {
			if(!valueElement) {
				this.exportColor();
			} else {
				if(!this.adjust) {
					if(!this.fromString(valueElement.value, leaveValue)) {
						styleElement.style.backgroundImage = styleElement.jscStyle.backgroundImage;
						styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
						styleElement.style.color = styleElement.jscStyle.color;
						this.exportColor(leaveValue | leaveStyle);
					}
				} else if(!this.required && /^\s*$/.test(valueElement.value)) {
					valueElement.value = '';
					styleElement.style.backgroundImage = styleElement.jscStyle.backgroundImage;
					styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
					styleElement.style.color = styleElement.jscStyle.color;
					this.exportColor(leaveValue | leaveStyle);

				} else if(this.fromString(valueElement.value)) {
					// OK
				} else {
					this.exportColor();
				}
			}
		};


		this.exportColor = function(flags) {
			if(!(flags & leaveValue) && valueElement) {
				var value = this.toString();
				if(this.caps) { value = value.toUpperCase(); }
				if(this.hash) { value = '#'+value; }
				valueElement.value = value;
			}
			if(!(flags & leaveStyle) && styleElement) {
				styleElement.style.backgroundImage = "none";
				styleElement.style.backgroundColor =
					'#'+this.toString();
				styleElement.style.color =
					0.213 * this.rgb[0] +
					0.715 * this.rgb[1] +
					0.072 * this.rgb[2]
					< 0.5 ? '#FFF' : '#000';
			}
			if(!(flags & leavePad) && isPickerOwner()) {
				redrawPad();
			}
			if(!(flags & leaveSld) && isPickerOwner()) {
				redrawSld();
			}
		};


		this.fromHSV = function(h, s, v, flags) { // null = don't change
			if(h !== null) { h = Math.max(0.0, this.minH, Math.min(6.0, this.maxH, h)); }
			if(s !== null) { s = Math.max(0.0, this.minS, Math.min(1.0, this.maxS, s)); }
			if(v !== null) { v = Math.max(0.0, this.minV, Math.min(1.0, this.maxV, v)); }

			this.rgb = HSV_RGB(
				h===null ? this.hsv[0] : (this.hsv[0]=h),
				s===null ? this.hsv[1] : (this.hsv[1]=s),
				v===null ? this.hsv[2] : (this.hsv[2]=v)
			);

			this.exportColor(flags);
		};


		this.fromRGB = function(r, g, b, flags) { // null = don't change
			if(r !== null) { r = Math.max(0.0, Math.min(1.0, r)); }
			if(g !== null) { g = Math.max(0.0, Math.min(1.0, g)); }
			if(b !== null) { b = Math.max(0.0, Math.min(1.0, b)); }

			var hsv = RGB_HSV(
				r===null ? this.rgb[0] : r,
				g===null ? this.rgb[1] : g,
				b===null ? this.rgb[2] : b
			);
			if(hsv[0] !== null) {
				this.hsv[0] = Math.max(0.0, this.minH, Math.min(6.0, this.maxH, hsv[0]));
			}
			if(hsv[2] !== 0) {
				this.hsv[1] = hsv[1]===null ? null : Math.max(0.0, this.minS, Math.min(1.0, this.maxS, hsv[1]));
			}
			this.hsv[2] = hsv[2]===null ? null : Math.max(0.0, this.minV, Math.min(1.0, this.maxV, hsv[2]));

			// update RGB according to final HSV, as some values might be trimmed
			var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);
			this.rgb[0] = rgb[0];
			this.rgb[1] = rgb[1];
			this.rgb[2] = rgb[2];

			this.exportColor(flags);
		};


		this.fromString = function(hex, flags) {
			var m = hex.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);
			if(!m) {
				return false;
			} else {
				if(m[1].length === 6) { // 6-char notation
					this.fromRGB(
						parseInt(m[1].substr(0,2),16) / 255,
						parseInt(m[1].substr(2,2),16) / 255,
						parseInt(m[1].substr(4,2),16) / 255,
						flags
					);
				} else { // 3-char notation
					this.fromRGB(
						parseInt(m[1].charAt(0)+m[1].charAt(0),16) / 255,
						parseInt(m[1].charAt(1)+m[1].charAt(1),16) / 255,
						parseInt(m[1].charAt(2)+m[1].charAt(2),16) / 255,
						flags
					);
				}
				return true;
			}
		};


		this.toString = function() {
			return (
				(0x100 | Math.round(255*this.rgb[0])).toString(16).substr(1) +
				(0x100 | Math.round(255*this.rgb[1])).toString(16).substr(1) +
				(0x100 | Math.round(255*this.rgb[2])).toString(16).substr(1)
			);
		};


		function RGB_HSV(r, g, b) {
			var n = Math.min(Math.min(r,g),b);
			var v = Math.max(Math.max(r,g),b);
			var m = v - n;
			if(m === 0) { return [ null, 0, v ]; }
			var h = r===n ? 3+(b-g)/m : (g===n ? 5+(r-b)/m : 1+(g-r)/m);
			return [ h===6?0:h, m/v, v ];
		}


		function HSV_RGB(h, s, v) {
			if(h === null) { return [ v, v, v ]; }
			var i = Math.floor(h);
			var f = i%2 ? h-i : 1-(h-i);
			var m = v * (1 - s);
			var n = v * (1 - s*f);
			switch(i) {
				case 6:
				case 0: return [v,n,m];
				case 1: return [n,v,m];
				case 2: return [m,v,n];
				case 3: return [m,n,v];
				case 4: return [n,m,v];
				case 5: return [v,m,n];
			}
		}


		function removePicker() {
			delete jscolor.picker.owner;
			document.getElementsByTagName('body')[0].removeChild(jscolor.picker.boxB);
		}


		function drawPicker(x, y) {
			if(!jscolor.picker) {
				jscolor.picker = {
					box : document.createElement('div'),
					boxB : document.createElement('div'),
					pad : document.createElement('div'),
					padB : document.createElement('div'),
					padM : document.createElement('div'),
					sld : document.createElement('div'),
					sldB : document.createElement('div'),
					sldM : document.createElement('div'),
					btn : document.createElement('div'),
					btnS : document.createElement('span'),
					btnT : document.createTextNode(THIS.pickerCloseText)
				};
				for(var i=0,segSize=4; i<jscolor.images.sld[1]; i+=segSize) {
					var seg = document.createElement('div');
					seg.style.height = segSize+'px';
					seg.style.fontSize = '1px';
					seg.style.lineHeight = '0';
					jscolor.picker.sld.appendChild(seg);
				}
				jscolor.picker.sldB.appendChild(jscolor.picker.sld);
				jscolor.picker.box.appendChild(jscolor.picker.sldB);
				jscolor.picker.box.appendChild(jscolor.picker.sldM);
				jscolor.picker.padB.appendChild(jscolor.picker.pad);
				jscolor.picker.box.appendChild(jscolor.picker.padB);
				jscolor.picker.box.appendChild(jscolor.picker.padM);
				jscolor.picker.btnS.appendChild(jscolor.picker.btnT);
				jscolor.picker.btn.appendChild(jscolor.picker.btnS);
				jscolor.picker.box.appendChild(jscolor.picker.btn);
				jscolor.picker.boxB.appendChild(jscolor.picker.box);
			}

			var p = jscolor.picker;

			// controls interaction
			p.box.onmouseup =
			p.box.onmouseout = function() { target.focus(); };
			p.box.onmousedown = function() { abortBlur=true; };
			p.box.onmousemove = function(e) {
				if (holdPad || holdSld) {
					holdPad && setPad(e);
					holdSld && setSld(e);
					if (document.selection) {
						document.selection.empty();
					} else if (window.getSelection) {
						window.getSelection().removeAllRanges();
					}
					dispatchImmediateChange();
				}
			};
			p.padM.onmouseup =
			p.padM.onmouseout = function() { if(holdPad) { holdPad=false; jscolor.fireEvent(valueElement,'change'); } };
			p.padM.onmousedown = function(e) {
				// if the slider is at the bottom, move it up
				switch(modeID) {
					case 0: if (THIS.hsv[2] === 0) { THIS.fromHSV(null, null, 1.0); }; break;
					case 1: if (THIS.hsv[1] === 0) { THIS.fromHSV(null, 1.0, null); }; break;
				}
				holdPad=true;
				setPad(e);
				dispatchImmediateChange();
			};
			p.sldM.onmouseup =
			p.sldM.onmouseout = function() { if(holdSld) { holdSld=false; jscolor.fireEvent(valueElement,'change'); } };
			p.sldM.onmousedown = function(e) {
				holdSld=true;
				setSld(e);
				dispatchImmediateChange();
			};

			// picker
			var dims = getPickerDims(THIS);
			p.box.style.width = dims[0] + 'px';
			p.box.style.height = dims[1] + 'px';

			// picker border
			p.boxB.style.position = 'absolute';
			p.boxB.style.clear = 'both';
			p.boxB.style.left = x+'px';
			p.boxB.style.top = y+'px';
			p.boxB.style.zIndex = THIS.pickerZIndex;
			p.boxB.style.border = THIS.pickerBorder+'px solid';
			p.boxB.style.borderColor = THIS.pickerBorderColor;
			p.boxB.style.background = THIS.pickerFaceColor;

			// pad image
			p.pad.style.width = jscolor.images.pad[0]+'px';
			p.pad.style.height = jscolor.images.pad[1]+'px';

			// pad border
			p.padB.style.position = 'absolute';
			p.padB.style.left = THIS.pickerFace+'px';
			p.padB.style.top = THIS.pickerFace+'px';
			p.padB.style.border = THIS.pickerInset+'px solid';
			p.padB.style.borderColor = THIS.pickerInsetColor;

			// pad mouse area
			p.padM.style.position = 'absolute';
			p.padM.style.left = '0';
			p.padM.style.top = '0';
			p.padM.style.width = THIS.pickerFace + 2*THIS.pickerInset + jscolor.images.pad[0] + jscolor.images.arrow[0] + 'px';
			p.padM.style.height = p.box.style.height;
			p.padM.style.cursor = 'crosshair';

			// slider image
			p.sld.style.overflow = 'hidden';
			p.sld.style.width = jscolor.images.sld[0]+'px';
			p.sld.style.height = jscolor.images.sld[1]+'px';

			// slider border
			p.sldB.style.display = THIS.slider ? 'block' : 'none';
			p.sldB.style.position = 'absolute';
			p.sldB.style.right = THIS.pickerFace+'px';
			p.sldB.style.top = THIS.pickerFace+'px';
			p.sldB.style.border = THIS.pickerInset+'px solid';
			p.sldB.style.borderColor = THIS.pickerInsetColor;

			// slider mouse area
			p.sldM.style.display = THIS.slider ? 'block' : 'none';
			p.sldM.style.position = 'absolute';
			p.sldM.style.right = '0';
			p.sldM.style.top = '0';
			p.sldM.style.width = jscolor.images.sld[0] + jscolor.images.arrow[0] + THIS.pickerFace + 2*THIS.pickerInset + 'px';
			p.sldM.style.height = p.box.style.height;
			try {
				p.sldM.style.cursor = 'pointer';
			} catch(eOldIE) {
				p.sldM.style.cursor = 'hand';
			}

			// "close" button
			function setBtnBorder() {
				var insetColors = THIS.pickerInsetColor.split(/\s+/);
				var pickerOutsetColor = insetColors.length < 2 ? insetColors[0] : insetColors[1] + ' ' + insetColors[0] + ' ' + insetColors[0] + ' ' + insetColors[1];
				p.btn.style.borderColor = pickerOutsetColor;
			}
			p.btn.style.display = THIS.pickerClosable ? 'block' : 'none';
			p.btn.style.position = 'absolute';
			p.btn.style.left = THIS.pickerFace + 'px';
			p.btn.style.bottom = THIS.pickerFace + 'px';
			p.btn.style.padding = '0 15px';
			p.btn.style.height = '18px';
			p.btn.style.border = THIS.pickerInset + 'px solid';
			setBtnBorder();
			p.btn.style.color = THIS.pickerButtonColor;
			p.btn.style.font = '12px sans-serif';
			p.btn.style.textAlign = 'center';
			try {
				p.btn.style.cursor = 'pointer';
			} catch(eOldIE) {
				p.btn.style.cursor = 'hand';
			}
			p.btn.onmousedown = function () {
				THIS.hidePicker();
			};
			p.btnS.style.lineHeight = p.btn.style.height;

			// load images in optimal order
			switch(modeID) {
				case 0: var padImg = hspng; break;
				case 1: var padImg = hvpng; break;
			}
/*  Original jscolor code for external images
			p.padM.style.backgroundImage = "url('"+jscolor.getDir()+"cross.gif')";
			p.padM.style.backgroundRepeat = "no-repeat";
			p.sldM.style.backgroundImage = "url('"+jscolor.getDir()+"arrow.gif')";
			p.sldM.style.backgroundRepeat = "no-repeat";
			p.pad.style.backgroundImage = "url('"+jscolor.getDir()+padImg+"')";
			p.pad.style.backgroundRepeat = "no-repeat";
*/
/* Modified jscolor code to use 'embedded' base64 images */
			p.padM.style.backgroundImage = "url('"+crossgif+"')";
			p.padM.style.backgroundRepeat = "no-repeat";
			p.sldM.style.backgroundImage = "url('"+arrowgif+"')";
			p.sldM.style.backgroundRepeat = "no-repeat";
			p.pad.style.backgroundImage = "url('"+padImg+"')";
			p.pad.style.backgroundRepeat = "no-repeat";
/* End of mods */
			p.pad.style.backgroundPosition = "0 0";

			// place pointers
			redrawPad();
			redrawSld();

			jscolor.picker.owner = THIS;
			document.getElementsByTagName('body')[0].appendChild(p.boxB);
		}


		function getPickerDims(o) {
			var dims = [
				2*o.pickerInset + 2*o.pickerFace + jscolor.images.pad[0] +
					(o.slider ? 2*o.pickerInset + 2*jscolor.images.arrow[0] + jscolor.images.sld[0] : 0),
				o.pickerClosable ?
					4*o.pickerInset + 3*o.pickerFace + jscolor.images.pad[1] + o.pickerButtonHeight :
					2*o.pickerInset + 2*o.pickerFace + jscolor.images.pad[1]
			];
			return dims;
		}


		function redrawPad() {
			// redraw the pad pointer
			switch(modeID) {
				case 0: var yComponent = 1; break;
				case 1: var yComponent = 2; break;
			}
			var x = Math.round((THIS.hsv[0]/6) * (jscolor.images.pad[0]-1));
			var y = Math.round((1-THIS.hsv[yComponent]) * (jscolor.images.pad[1]-1));
			jscolor.picker.padM.style.backgroundPosition =
				(THIS.pickerFace+THIS.pickerInset+x - Math.floor(jscolor.images.cross[0]/2)) + 'px ' +
				(THIS.pickerFace+THIS.pickerInset+y - Math.floor(jscolor.images.cross[1]/2)) + 'px';

			// redraw the slider image
			var seg = jscolor.picker.sld.childNodes;

			switch(modeID) {
				case 0:
					var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 1);
					for(var i=0; i<seg.length; i+=1) {
						seg[i].style.backgroundColor = 'rgb('+
							(rgb[0]*(1-i/seg.length)*100)+'%,'+
							(rgb[1]*(1-i/seg.length)*100)+'%,'+
							(rgb[2]*(1-i/seg.length)*100)+'%)';
					}
					break;
				case 1:
					var rgb, s, c = [ THIS.hsv[2], 0, 0 ];
					var i = Math.floor(THIS.hsv[0]);
					var f = i%2 ? THIS.hsv[0]-i : 1-(THIS.hsv[0]-i);
					switch(i) {
						case 6:
						case 0: rgb=[0,1,2]; break;
						case 1: rgb=[1,0,2]; break;
						case 2: rgb=[2,0,1]; break;
						case 3: rgb=[2,1,0]; break;
						case 4: rgb=[1,2,0]; break;
						case 5: rgb=[0,2,1]; break;
					}
					for(var i=0; i<seg.length; i+=1) {
						s = 1 - 1/(seg.length-1)*i;
						c[1] = c[0] * (1 - s*f);
						c[2] = c[0] * (1 - s);
						seg[i].style.backgroundColor = 'rgb('+
							(c[rgb[0]]*100)+'%,'+
							(c[rgb[1]]*100)+'%,'+
							(c[rgb[2]]*100)+'%)';
					}
					break;
			}
		}


		function redrawSld() {
			// redraw the slider pointer
			switch(modeID) {
				case 0: var yComponent = 2; break;
				case 1: var yComponent = 1; break;
			}
			var y = Math.round((1-THIS.hsv[yComponent]) * (jscolor.images.sld[1]-1));
			jscolor.picker.sldM.style.backgroundPosition =
				'0 ' + (THIS.pickerFace+THIS.pickerInset+y - Math.floor(jscolor.images.arrow[1]/2)) + 'px';
		}


		function isPickerOwner() {
			return jscolor.picker && jscolor.picker.owner === THIS;
		}


		function blurTarget() {
			if(valueElement === target) {
				THIS.importColor();
			}
			if(THIS.pickerOnfocus) {
				THIS.hidePicker();
			}
		}


		function blurValue() {
			if(valueElement !== target) {
				THIS.importColor();
			}
		}


		function setPad(e) {
			var mpos = jscolor.getRelMousePos(e);
			var x = mpos.x - THIS.pickerFace - THIS.pickerInset;
			var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
			switch(modeID) {
				case 0: THIS.fromHSV(x*(6/(jscolor.images.pad[0]-1)), 1 - y/(jscolor.images.pad[1]-1), null, leaveSld); break;
				case 1: THIS.fromHSV(x*(6/(jscolor.images.pad[0]-1)), null, 1 - y/(jscolor.images.pad[1]-1), leaveSld); break;
			}
		}


		function setSld(e) {
			var mpos = jscolor.getRelMousePos(e);
			var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
			switch(modeID) {
				case 0: THIS.fromHSV(null, null, 1 - y/(jscolor.images.sld[1]-1), leavePad); break;
				case 1: THIS.fromHSV(null, 1 - y/(jscolor.images.sld[1]-1), null, leavePad); break;
			}
		}


		function dispatchImmediateChange() {
			if (THIS.onImmediateChange) {
				var callback;
				if (typeof THIS.onImmediateChange === 'string') {
					callback = new Function (THIS.onImmediateChange);
				} else {
					callback = THIS.onImmediateChange;
				}
				callback.call(THIS);
			}
		}


		var THIS = this;
		var modeID = this.pickerMode.toLowerCase()==='hvs' ? 1 : 0;
		var abortBlur = false;
		var
			valueElement = jscolor.fetchElement(this.valueElement),
			styleElement = jscolor.fetchElement(this.styleElement);
		var
			holdPad = false,
			holdSld = false;
		var
			leaveValue = 1<<0,
			leaveStyle = 1<<1,
			leavePad = 1<<2,
			leaveSld = 1<<3;

		// target
		jscolor.addEvent(target, 'focus', function() {
			if(THIS.pickerOnfocus) { THIS.showPicker(); }

		});
		jscolor.addEvent(target, 'blur', function() {
			if(!abortBlur) {
				window.setTimeout(function(){ abortBlur || blurTarget(); abortBlur=false; }, 0);
			} else {
				abortBlur = false;
			}
		});

		// valueElement
		if(valueElement) {
			var updateField = function() {
				THIS.fromString(valueElement.value, leaveValue);
				dispatchImmediateChange();
			};
			jscolor.addEvent(valueElement, 'keyup', updateField);
			jscolor.addEvent(valueElement, 'input', updateField);
			jscolor.addEvent(valueElement, 'blur', blurValue);
			valueElement.setAttribute('autocomplete', 'off');
		}

		// styleElement
		if(styleElement) {
			styleElement.jscStyle = {
				backgroundImage : styleElement.style.backgroundImage,
				backgroundColor : styleElement.style.backgroundColor,
				color : styleElement.style.color
			};
		}

		// require images
		switch(modeID) {
			case 0: jscolor.requireImage('hs.png'); break;
			case 1: jscolor.requireImage('hv.png'); break;
		}
		jscolor.requireImage('cross.gif');
		jscolor.requireImage('arrow.gif');

		this.importColor();
	}

};

jscolor.install();

if ('undefined' == typeof __RTLM_PAGE_SCOPE_RUN__) {
  (function page_scope_runner() {
    // If we're _not_ already running in the page, grab the full source
    // of this script.
    var my_src = "(" + page_scope_runner.caller.toString() + ")();";
    // Create a script node holding this script, plus a marker that lets us
    // know we are running in the page scope (not the Greasemonkey sandbox).
    // Note that we are intentionally *not* scope-wrapping here.
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.textContent = "var __RTLM_PAGE_SCOPE_RUN__ = true;\n" + my_src;

    // Insert the script node into the page, so it will run, and immediately
    // remove it to clean up.  Use setTimeout to force execution "outside" of
    // the user script scope completely.
    setTimeout(function() {
          document.body.appendChild(script);
          document.body.removeChild(script);
        }, 500);
  })();

  // Stop running, because we know Greasemonkey actually runs us in
  // an anonymous wrapper.
  return;
}

// Check if WME is busy loading road data
/*
function checkPendingOperations() {
  var classList = getId('Waze.Control.PendingOperation_43').className;
  var operationHTML = getId('Waze.Control.PendingOperation_43').innerHTML;
  var wmeLoadingSaving = false;
  if (operationHTML=="Loading road data..." || operationHTML=="Saving changes...") wmeLoadingSaving = true;
  var wmeIsActive = classList.search('hidden');
  if (wmeIsActive == -1 && wmeLoadingSaving) {
// disable xxx interaction while WME is refreshing or saving
      }
	 } else {
// enable xxx interaction
  }
  return;
}
*/

/* Main Functions */

function highlightLevels() {
  var cbLvl = {};
  for ( var i = 1 ; i < 16 ; i++ ) {
    cbLvl[i] = getId('_cbLvl'+i);
  }
  var levelColor = {};
  for ( var i = 1 ; i < 16 ; i++ ) {
    levelColor[i] = getId('_sLvl'+i).value;
  }

  for (var seg in wazeModel.segments.objects) {
    var segment = wazeModel.segments.get(seg);
    var attributes = segment.attributes;
    var line = getId(segment.geometry.id);

    if (line !== null) {
      var sid = attributes.primaryStreetID;

      // check that WME hasn't highlighted this segment
      var opacity = line.getAttribute("stroke-opacity");
      var lineWidth = line.getAttribute("stroke-width");
      if (opacity == 1 || lineWidth == 9)
        continue;

      // turn off highlights when roads are no longer visible
      var roadType = attributes.roadType;
      if (wazeMap.zoom <= 3 && (roadType < 2 || roadType > 7) ) {
        if (opacity > 0.1) {
          line.setAttribute("stroke","#dd7700");
          line.setAttribute("stroke-opacity",0.001);
          line.setAttribute("stroke-dasharray", "none");
        }
        continue;
      }

      var street = wazeModel.streets.get(sid);

      // get level for this segment
      var level = attributes.level;
	  if (level < 1) {
	    level = ( level * -1 ) + 10;
	  }
/*
	  if (getId('_cbLvl'+level).checked == false) {
	    continue;
	  }
*/
      // get current state of the line
      var lineColor = line.getAttribute("stroke");

      // default colours
      var newColor = "#dd7700";
      var newOpacity = 0.001;
      var newDashes = "none";
      var newWidth = 8;

      // highlight levels
      if ( cbLvl[level].checked == true ) {
          newColor = "#"+levelColor[level];
          if ( getId('_cbSolid').checked ) {
             newOpacity = 2;
          } else {
             newOpacity = 0.6;
		  }
          if ( level > 10 ) {
		      newDashes = "10 15";
		  }
          newWidth = 10;
      }

      // if colour / opacity has changed, update the line attributes
      if (lineColor != newColor || opacity != newOpacity) {
        line.setAttribute("stroke", newColor);
        line.setAttribute("stroke-opacity", newOpacity);
        line.setAttribute("stroke-dasharray", newDashes);
        if (newColor != "#dd7700") { //default
          line.setAttribute("stroke-width", newWidth);
        } else {
          line.setAttribute("stroke-width", 6);
        }
      }
    } // end if (line !== null)
  } // end of loop
  return;
}

function resetColor(index) {
  getId('_sLvl'+index).value = defColors[index];
  getId('_sLvl'+index).color.fromString('#'+defColors[index]);
  return;
}

function resetColor1() {
	resetColor(1);
	return;
}
function resetColor2() {
	resetColor(2);
  return;
}
function resetColor3() {
	resetColor(3);
  return;
}
function resetColor4() {
	resetColor(4);
  return;
}
function resetColor5() {
	resetColor(5);
  return;
}
function resetColor6() {
	resetColor(6);
  return;
}
function resetColor7() {
	resetColor(7);
  return;
}
function resetColor8() {
	resetColor(8);
  return;
}
function resetColor9() {
	resetColor(9);
  return;
}
function resetColor10() {
	resetColor(10);
  return;
}
function resetColor11() {
	resetColor(11);
  return;
}
function resetColor12() {
	resetColor(12);
  return;
}
function resetColor13() {
	resetColor(13);
  return;
}
function resetColor14() {
	resetColor(14);
  return;
}
function resetColor15() {
	resetColor(15);
  return;
}

function updateCheckedList() {
  console.log("initWMELHilite : updateCheckedList");
  if (getId('_cbAll').checked) {
    for ( var i = 1 ; i < 16 ; i++ ) {
      getId('_cbLvl'+i).checked = true;
    }
  } else {
    for ( var i = 1 ; i < 16 ; i++ ) {
      getId('_cbLvl'+i).checked = false;
    }
  }
  return;
}


/* Helper Functions */
function getElementsByClassName(classname, node) {
  if(!node) node = document.getElementsByTagName("body")[0];
  var a = [];
  var re = new RegExp('\\b' + classname + '\\b');
  var els = node.getElementsByTagName("*");
  for (var i=0,j=els.length; i<j; i++)
    if (re.test(els[i].className)) a.push(els[i]);
  return a;
}

function getId(node) {
  return document.getElementById(node);
}

function saveColors() {
  if (localStorage) {
    console.log("WME Level Highlights: saving options");
      var options = [];
      if (localStorage.WMELevelHighlights)
        options = JSON.parse(localStorage.WMELevelHighlights);
      for ( var i = 1 ; i < 16 ; i++ ) {
        options[i] = getId('_sLvl'+i).value;
	  }
    localStorage.WMELevelHighlights = JSON.stringify(options);
  }
  return;
}

function initWMELHilite() {
  console.log("initWMELHilite");
// setup onclick handlers for instant update:
  getId('_cbAll').onchange = updateCheckedList;
  getId('_btnSave').onclick = saveColors;
  getId('_btnLvl1').onclick = resetColor1;
  getId('_btnLvl2').onclick = resetColor2;
  getId('_btnLvl3').onclick = resetColor3;
  getId('_btnLvl4').onclick = resetColor4;
  getId('_btnLvl5').onclick = resetColor5;
  getId('_btnLvl6').onclick = resetColor6;
  getId('_btnLvl7').onclick = resetColor7;
  getId('_btnLvl8').onclick = resetColor8;
  getId('_btnLvl9').onclick = resetColor9;
  getId('_btnLvl10').onclick = resetColor10;
  getId('_btnLvl11').onclick = resetColor11;
  getId('_btnLvl12').onclick = resetColor12;
  getId('_btnLvl13').onclick = resetColor13;
  getId('_btnLvl14').onclick = resetColor14;
  getId('_btnLvl15').onclick = resetColor15;
  if (localStorage.WMELevelHighlights) {
    console.log("WME Level Highlights: loading options");
    options = JSON.parse(localStorage.WMELevelHighlights);
    for ( var i = 1 ; i < 16 ; i++ ) {
       if (options[i] == '') {
	     getId('_sLvl'+i).value = defColors[i];
	     getId('_sLvl'+i).color.fromString('#'+defColors[i]);
	   } else {
	     getId('_sLvl'+i).value = options[i];
	     getId('_sLvl'+i).color.fromString('#'+options[i]);
	   }
	 }
  } else {
    console.log("WME Level Highlights: Using default options");
    for ( var i = 1 ; i < 16 ; i++ ) {
      getId('_sLvl'+i).value = defColors[i];
      getId('_sLvl'+i).color.fromString('#'+defColors[i]);
    }
  }
  return;
}



// flag for new editor
var beta = (getId('user-tabs') != null);

// add new box to left of the map
var addon = document.createElement('p');
addon.id = "WMELvlHl";

addon.innerHTML  = '<b><a href="http://userscripts.org/scripts/show/158183">WME Level Hilight</a></b> &nbsp; ' + version

// WMELH options
section = document.createElement('p');
section.style.paddingTop = "8px";
section.style.textIndent = "16px";
section.style.display = "block";
section.id = 'WMELHOpts';
section.innerHTML  = 
             '  <table><tr><td><input type="checkbox" id="_cbAll" unchecked> All</input></td><td><input type="checkbox" id="_cbSolid" unchecked>  SolidLine</input></td><td><input type="button" id="_btnSave" value=" Save "></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl9" unchecked> Level  9</input></td><td><input id="_sLvl9" style="width:4em" class="color" value="FFFFFF"></input></td><td><input type="button" id="_btnLvl9" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl8" unchecked> Level  8</input></td><td><input id="_sLvl8" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl8" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl7" unchecked> Level  7</input></td><td><input id="_sLvl7" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl7" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl6" unchecked> Level  6</input></td><td><input id="_sLvl6" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl6" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl5" unchecked> Level  5</input></td><td><input id="_sLvl5" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl5" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl4" unchecked> Level  4</input></td><td><input id="_sLvl4" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl4" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl3" unchecked> Level  3</input></td><td><input id="_sLvl3" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl3" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl2" unchecked> Level  2</input></td><td><input id="_sLvl2" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl2" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl1" unchecked> Level  1</input></td><td><input id="_sLvl1" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl1" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl10" unchecked> Level  0</input></td><td><input id="_sLvl10" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl10" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl11" unchecked> Level -1</input></td><td><input id="_sLvl11" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl11" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl12" unchecked> Level -2</input></td><td><input id="_sLvl12" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl12" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl13" unchecked> Level -3</input></td><td><input id="_sLvl13" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl13" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl14" unchecked> Level -4</input></td><td><input id="_sLvl14" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl14" value="Reset"></input></td></tr>'
           + '  <tr><td><input type="checkbox" id="_cbLvl15" unchecked> Level -5</input></td><td><input id="_sLvl15" style="width:4em" class="color" value=""></input></td><td><input type="button" id="_btnLvl15" value="Reset"></input></td></tr></table>';

addon.appendChild(section);

if (beta) {
  var userTabs = getId('user-tabs');
  var navTabs = getElementsByClassName('nav-tabs', userTabs)[0];
  var tabContent = getElementsByClassName('tab-content', userTabs)[0];

  newtab = document.createElement('li');
  newtab.innerHTML = '<a href="#sidepanel-WMELH" data-toggle="tab">Levels</a>';
  navTabs.appendChild(newtab);

  addon.id = "sidepanel-WMELH";
  addon.className = "tab-pane";
  tabContent.appendChild(addon);
}

// Set timer to check for WME Loading and Saving
//window.setInterval(checkPendingOperations,1000);
window.setInterval(highlightLevels,800);



// trigger code when page is fully loaded, to catch any missing bits
window.addEventListener("load", function(e) {
  initWMELHilite();
 return true;
});