if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

/*! smooth-scroll v9.1.3 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,r,o,a,c={},u="querySelector"in document&&"addEventListener"in e,i={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},l=function(){var e={},t=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=l(!0,e[r],n[r]):e[r]=n[r])};r>n;n++){var a=arguments[n];o(a)}return e},s=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,r,o=t.charAt(0),a="classList"in document.documentElement;for("["===o&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document&&1===e.nodeType;e=e.parentNode){if("."===o)if(a){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===o&&e.id===t.substr(1))return e;if("["===o&&e.hasAttribute(n[0])){if(!r)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};c.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,a="",c=n.charCodeAt(0);++o<r;){if(t=n.charCodeAt(o),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===o&&t>=48&&57>=t||1===o&&t>=48&&57>=t&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(o):"\\"+n.charAt(o)}return"#"+a};var d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var r=0;if(e.offsetParent)do r+=e.offsetTop,e=e.offsetParent;while(e);return r=r-t-n,r>=0?r:0},p=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},m=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},g=function(t,n){e.history.pushState&&(n||"true"===n)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},b=function(e){return null===e?0:s(e)+e.offsetTop};c.animateScroll=function(n,c,u){var s=m(c?c.getAttribute("data-options"):null),f=l(t||i,u||{},s),v="[object Number]"===Object.prototype.toString.call(n),y=v?null:"#"===n?e.document.documentElement:e.document.querySelector(n);if(v||y){var O=e.pageYOffset;r||(r=e.document.querySelector(f.selectorHeader)),o||(o=b(r));var S,I,H=v?n:h(y,o,parseInt(f.offset,10)),E=H-O,j=p(),C=0;v||g(n,f.updateURL);var L=function(t,r,o){var a=e.pageYOffset;(t==r||a==r||e.innerHeight+a>=j)&&(clearInterval(o),v||y.focus(),f.callback(n,c))},w=function(){C+=16,S=C/parseInt(f.speed,10),S=S>1?1:S,I=O+E*d(f.easing,S),e.scrollTo(0,Math.floor(I)),L(I,H,a)},A=function(){clearInterval(a),a=setInterval(w,16)};0===e.pageYOffset&&e.scrollTo(0,0),A()}};var v=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var n=f(e.target,t.selector);if(n&&"a"===n.tagName.toLowerCase()){e.preventDefault();var r=c.escapeCharacters(n.hash);c.animateScroll(r,n,t)}}},y=function(e){n||(n=setTimeout(function(){n=null,o=b(r)},66))};return c.destroy=function(){t&&(e.document.removeEventListener("click",v,!1),e.removeEventListener("resize",y,!1),t=null,n=null,r=null,o=null,a=null)},c.init=function(n){u&&(c.destroy(),t=l(i,n||{}),r=e.document.querySelector(t.selectorHeader),o=b(r),e.document.addEventListener("click",v,!1),r&&e.addEventListener("resize",y,!1))},c});
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in i)e.push(i[n]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,n={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll,r=o?n.forward:n.backward;for(var s in this.waypoints[i]){var l=this.waypoints[i][s],a=n.oldScroll<l.triggerPoint,h=n.newScroll>=l.triggerPoint,p=a&&h,u=!a&&!h;(p||u)&&(l.queueTrigger(r),t[l.group.id]=l.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var l in this.waypoints[r]){var a,h,p,u,c,f=this.waypoints[r][l],d=f.options.offset,y=f.triggerPoint,g=0,w=null==y;f.element!==f.element.window&&(g=f.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(f):"string"==typeof d&&(d=parseFloat(d),f.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),a=s.contextScroll-s.contextOffset,f.triggerPoint=g+a-d,h=y<s.oldScroll,p=f.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!w&&u?(f.queueTrigger(s.backward),n[f.group.id]=f.group):!w&&c?(f.queueTrigger(s.forward),n[f.group.id]=f.group):w&&s.oldScroll>=f.triggerPoint&&(f.queueTrigger(s.forward),n[f.group.id]=f.group)}}return o.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var n=this.triggerQueues[i],o="up"===i||"left"===i;n.sort(o?e:t);for(var r=0,s=n.length;s>r;r+=1){var l=n[r];(l.options.continuous||r===n.length-1)&&l.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints),n=i===this.waypoints.length-1;return n?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";function t(t){return t===t.window}function e(e){return t(e)?e:e.defaultView}function i(t){this.element=t,this.handlers={}}var n=window.Waypoint;i.prototype.innerHeight=function(){var e=t(this.element);return e?this.element.innerHeight:this.element.clientHeight},i.prototype.innerWidth=function(){var e=t(this.element);return e?this.element.innerWidth:this.element.clientWidth},i.prototype.off=function(t,e){function i(t,e,i){for(var n=0,o=e.length-1;o>n;n++){var r=e[n];i&&i!==r||t.removeEventListener(r)}}var n=t.split("."),o=n[0],r=n[1],s=this.element;if(r&&this.handlers[r]&&o)i(s,this.handlers[r][o],e),this.handlers[r][o]=[];else if(o)for(var l in this.handlers)i(s,this.handlers[l][o]||[],e),this.handlers[l][o]=[];else if(r&&this.handlers[r]){for(var a in this.handlers[r])i(s,this.handlers[r][a],e);this.handlers[r]={}}},i.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,i=e(this.element.ownerDocument),n={top:0,left:0};return this.element.getBoundingClientRect&&(n=this.element.getBoundingClientRect()),{top:n.top+i.pageYOffset-t.clientTop,left:n.left+i.pageXOffset-t.clientLeft}},i.prototype.on=function(t,e){var i=t.split("."),n=i[0],o=i[1]||"__default",r=this.handlers[o]=this.handlers[o]||{},s=r[n]=r[n]||[];s.push(e),this.element.addEventListener(n,e)},i.prototype.outerHeight=function(e){var i,n=this.innerHeight();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginTop,10),n+=parseInt(i.marginBottom,10)),n},i.prototype.outerWidth=function(e){var i,n=this.innerWidth();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginLeft,10),n+=parseInt(i.marginRight,10)),n},i.prototype.scrollLeft=function(){var t=e(this.element);return t?t.pageXOffset:this.element.scrollLeft},i.prototype.scrollTop=function(){var t=e(this.element);return t?t.pageYOffset:this.element.scrollTop},i.extend=function(){function t(t,e){if("object"==typeof t&&"object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}for(var e=Array.prototype.slice.call(arguments),i=1,n=e.length;n>i;i++)t(e[0],e[i]);return e[0]},i.inArray=function(t,e,i){return null==e?-1:e.indexOf(t,i)},i.isEmptyObject=function(t){for(var e in t)return!1;return!0},n.adapters.push({name:"noframework",Adapter:i}),n.Adapter=i}();
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipeUI_Default = factory();
	}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});

/*! PhotoSwipe - v4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&8>g&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(4.4>i&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;4>n;n++){c=m[n];for(var o=0;3>o;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la=function(){return{x:0,y:0}},ma=la(),na=la(),oa=la(),pa={},qa=0,ra={},sa=la(),ta=0,ua=!0,va=[],wa={},xa=!1,ya=function(a,b){e.extend(f,b.publicMethods),va.push(a)},za=function(a){var b=_b();return a>b-1?a-b:0>a?b+a:a},Aa={},Ba=function(a,b){return Aa[a]||(Aa[a]=[]),Aa[a].push(b)},Ca=function(a){var b=Aa[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Da=function(){return(new Date).getTime()},Ea=function(a){ia=a,f.bg.style.opacity=a*i.bgOpacity},Fa=function(a,b,c,d,e){(!xa||e&&e!==f.currItem)&&(d/=e?e.fitRatio:f.currItem.fitRatio),a[E]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Ga=function(a){da&&(a&&(s>f.currItem.fitRatio?xa||(lc(f.currItem,!1,!0),xa=!0):xa&&(lc(f.currItem),xa=!1)),Fa(da,oa.x,oa.y,s))},Ha=function(a){a.container&&Fa(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},Ia=function(a,b){b[E]=u+a+"px, 0px"+v},Ja=function(a,b){if(!i.loop&&b){var c=m+(sa.x*qa-a)/sa.x,d=Math.round(a-sb.x);(0>c&&d>0||c>=_b()-1&&0>d)&&(a=sb.x+d*i.mainScrollEndFriction)}sb.x=a,Ia(a,n)},Ka=function(a,b){var c=tb[a]-ra[a];return na[a]+ma[a]+c-c*(b/t)},La=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Ma=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Na=null,Oa=function(){Na&&(e.unbind(document,"mousemove",Oa),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Ca("mouseUsed")),Na=setTimeout(function(){Na=null},100)},Pa=function(){e.bind(document,"keydown",f),N.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Oa),e.bind(window,"resize scroll",f),Ca("bindEvents")},Qa=function(){e.unbind(window,"resize",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Oa),N.transform&&e.unbind(f.scrollWrap,"click",f),U&&e.unbind(window,p,f),Ca("unbindEvents")},Ra=function(a,b){var c=hc(f.currItem,pa,a);return b&&(ca=c),c},Sa=function(a){return a||(a=f.currItem),a.initialZoomLevel},Ta=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Ua=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=Ka(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]?(c[a]=b.max[a],!0):!1)},Va=function(){if(E){var b=N.perspective&&!G;return u="translate"+(b?"3d(":"("),void(v=N.perspective?", 0px)":")")}E="left",e.addClass(a,"pswp--ie"),Ia=function(a,b){b.left=a+"px"},Ha=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Ga=function(){if(da){var a=da,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=oa.x+"px",a.top=oa.y+"px"}}},Wa=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Xa=function(a){a&&(X||W||ea||S)&&(a.preventDefault(),a.stopPropagation())},Ya=function(){f.setScrollOffset(0,e.getScrollY())},Za={},$a=0,_a=function(a){Za[a]&&(Za[a].raf&&I(Za[a].raf),$a--,delete Za[a])},ab=function(a){Za[a]&&_a(a),Za[a]||($a++,Za[a]={})},bb=function(){for(var a in Za)Za.hasOwnProperty(a)&&_a(a)},cb=function(a,b,c,d,e,f,g){var h,i=Da();ab(a);var j=function(){if(Za[a]){if(h=Da()-i,h>=d)return _a(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),Za[a].raf=H(j)}};j()},db={shout:Ca,listen:Ba,viewportSize:pa,options:i,isMainScrollAnimating:function(){return ea},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return U},isZooming:function(){return _},setScrollOffset:function(a,b){ra.x=a,M=ra.y=b,Ca("updateScrollOffset",ra)},applyZoomPan:function(a,b,c,d){oa.x=b,oa.y=c,s=a,Ga(d)},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),J=a.className,j=!0,N=e.detectFeatures(),H=N.raf,I=N.caf,E=N.transform,L=N.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=y=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],y[0].el.style.display=y[2].el.style.display="none",Va(),r={resize:f.updateSize,scroll:Ya,keydown:Wa,click:Xa};var d=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<va.length;c++)f["init"+va[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Ca("firstUpdate"),m=m||i.index||0,(isNaN(m)||0>m||m>=_b())&&(m=0),f.currItem=$b(m),(N.isOldIOSPhone||N.isOldAndroid)&&(ua=!1),a.setAttribute("aria-hidden","false"),i.modal&&(ua?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===M&&(Ca("initialLayout"),M=K=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=G?"pswp--touch":"pswp--notouch",l+=N.animationName?" pswp--css_animation":"",l+=N.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,ta=null,c=0;h>c;c++)Ia((c+o)*sa.x,y[c].el.style);L||e.bind(f.scrollWrap,q,f),Ba("initialZoomInEnd",function(){f.setContent(y[0],m-1),f.setContent(y[2],m+1),y[0].el.style.display=y[2].el.style.display="block",i.focus&&a.focus(),Pa()}),f.setContent(y[1],m),f.updateCurrItem(),Ca("afterInit"),ua||(w=setInterval(function(){$a||U||_||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Ca("close"),Qa(),bc(f.currItem,null,!0,f.destroy))},destroy:function(){Ca("destroy"),Wb&&clearTimeout(Wb),a.setAttribute("aria-hidden","true"),a.className=J,w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),yb(),bb(),Aa=null},panTo:function(a,b,c){c||(a>ca.min.x?a=ca.min.x:a<ca.max.x&&(a=ca.max.x),b>ca.min.y?b=ca.min.y:b<ca.max.y&&(b=ca.max.y)),oa.x=a,oa.y=b,Ga()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=za(a);var b=a-m;ta=b,m=a,f.currItem=$b(m),qa-=b,Ja(sa.x*qa),bb(),ea=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Ca("beforeChange",0),y[1].el.children.length){var b=y[1].el.children[0];da=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else da=null;ca=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,oa.x=ca.center.x,oa.y=ca.center.y,a&&Ca("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;h>a;a++)y[a].item&&(y[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==ta){var b,c=Math.abs(ta);if(!(a&&2>c)){f.currItem=$b(m),xa=!1,Ca("beforeChange",ta),c>=h&&(o+=ta+(ta>0?-h:h),c=h);for(var d=0;c>d;d++)ta>0?(b=y.shift(),y[h-1]=b,o++,Ia((o+2)*sa.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=y.pop(),y.unshift(b),o--,Ia(o*sa.x,b.el.style),f.setContent(b,m+c-d-1-1));if(da&&1===Math.abs(ta)){var e=$b(z);e.initialZoomLevel!==s&&(hc(e,pa),lc(e),Ha(e))}ta=0,f.updateCurrZoomItem(),z=m,Ca("afterChange")}}},updateSize:function(b){if(!ua&&i.modal){var c=e.getScrollY();if(M!==c&&(a.style.top=c+"px",M=c),!b&&wa.x===window.innerWidth&&wa.y===window.innerHeight)return;wa.x=window.innerWidth,wa.y=window.innerHeight,a.style.height=wa.y+"px"}if(pa.x=f.scrollWrap.clientWidth,pa.y=f.scrollWrap.clientHeight,Ya(),sa.x=pa.x+Math.round(pa.x*i.spacing),sa.y=pa.y,Ja(sa.x*qa),Ca("beforeResize"),void 0!==o){for(var d,g,j,k=0;h>k;k++)d=y[k],Ia((k+o)*sa.x,d.el.style),j=m+k-1,i.loop&&_b()>2&&(j=za(j)),g=$b(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):-1===d.index&&j>=0&&f.setContent(d,j),g&&g.container&&(hc(g,pa),lc(g),Ha(g));x=!1}t=s=f.currItem.initialZoomLevel,ca=f.currItem.bounds,ca&&(oa.x=ca.center.x,oa.y=ca.center.y,Ga(!0)),Ca("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,tb.x=Math.abs(b.x)-oa.x,tb.y=Math.abs(b.y)-oa.y,La(na,oa));var g=Ra(a,!1),h={};Ua("x",g,h,a),Ua("y",g,h,a);var i=s,j={x:oa.x,y:oa.y};Ma(h);var k=function(b){1===b?(s=a,oa.x=h.x,oa.y=h.y):(s=(a-i)*b+i,oa.x=(h.x-j.x)*b+j.x,oa.y=(h.y-j.y)*b+j.y),f&&f(b),Ga(1===b)};c?cb("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},eb=30,fb=10,gb={},hb={},ib={},jb={},kb={},lb=[],mb={},nb=[],ob={},pb=0,qb=la(),rb=0,sb=la(),tb=la(),ub=la(),vb=function(a,b){return a.x===b.x&&a.y===b.y},wb=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},xb=function(a,b){return ob.x=Math.abs(a.x-b.x),ob.y=Math.abs(a.y-b.y),Math.sqrt(ob.x*ob.x+ob.y*ob.y)},yb=function(){Y&&(I(Y),Y=null)},zb=function(){U&&(Y=H(zb),Pb())},Ab=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Bb=function(a,b){return a&&a!==document?a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:b(a)?a:Bb(a.parentNode,b):!1},Cb={},Db=function(a,b){return Cb.prevent=!Bb(a.target,i.isClickableElement),Ca("preventDragEvent",a,b,Cb),Cb.prevent},Eb=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Fb=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Gb=function(a,b,c){if(a-P>50){var d=nb.length>2?nb.shift():{};d.x=b,d.y=c,nb.push(d),P=a}},Hb=function(){var a=oa.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(pa.y/2))},Ib={},Jb={},Kb=[],Lb=function(a){for(;Kb.length>0;)Kb.pop();return F?(ka=0,lb.forEach(function(a){0===ka?Kb[0]=a:1===ka&&(Kb[1]=a),ka++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Kb[0]=Eb(a.touches[0],Ib),a.touches.length>1&&(Kb[1]=Eb(a.touches[1],Jb))):(Ib.x=a.pageX,Ib.y=a.pageY,Ib.id="",Kb[0]=Ib),Kb},Mb=function(a,b){var c,d,e,g,h=0,j=oa[a]+b[a],k=b[a]>0,l=sb.x+b.x,m=sb.x-mb.x;return c=j>ca.min[a]||j<ca.max[a]?i.panEndFriction:1,j=oa[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(da?"h"!==fa||"x"!==a||W||(k?(j>ca.min[a]&&(c=i.panEndFriction,h=ca.min[a]-j,d=ca.min[a]-na[a]),(0>=d||0>m)&&_b()>1?(g=l,0>m&&l>mb.x&&(g=mb.x)):ca.min.x!==ca.max.x&&(e=j)):(j<ca.max[a]&&(c=i.panEndFriction,h=j-ca.max[a],d=na[a]-ca.max[a]),(0>=d||m>0)&&_b()>1?(g=l,m>0&&l<mb.x&&(g=mb.x)):ca.min.x!==ca.max.x&&(e=j))):g=l,"x"!==a)?void(ea||Z||s>f.currItem.fitRatio&&(oa[a]+=b[a]*c)):(void 0!==g&&(Ja(g,!0),Z=g===mb.x?!1:!0),ca.min.x!==ca.max.x&&(void 0!==e?oa.x=e:Z||(oa.x+=b.x*c)),void 0!==g)},Nb=function(a){if(!("mousedown"===a.type&&a.button>0)){if(Zb)return void a.preventDefault();if(!T||"mousedown"!==a.type){if(Db(a,!0)&&a.preventDefault(),Ca("pointerDown"),F){var b=e.arraySearch(lb,a.pointerId,"id");0>b&&(b=lb.length),lb[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Lb(a),d=c.length;$=null,bb(),U&&1!==d||(U=ga=!0,e.bind(window,p,f),R=ja=ha=S=Z=X=V=W=!1,fa=null,Ca("firstTouchStart",c),La(na,oa),ma.x=ma.y=0,La(jb,c[0]),La(kb,jb),mb.x=sa.x*qa,nb=[{x:jb.x,y:jb.y}],P=O=Da(),Ra(s,!0),yb(),zb()),!_&&d>1&&!ea&&!Z&&(t=s,W=!1,_=V=!0,ma.y=ma.x=0,La(na,oa),La(gb,c[0]),La(hb,c[1]),Fb(gb,hb,ub),tb.x=Math.abs(ub.x)-oa.x,tb.y=Math.abs(ub.y)-oa.y,aa=ba=xb(gb,hb))}}},Ob=function(a){if(a.preventDefault(),F){var b=e.arraySearch(lb,a.pointerId,"id");if(b>-1){var c=lb[b];c.x=a.pageX,c.y=a.pageY}}if(U){var d=Lb(a);if(fa||X||_)$=d;else if(sb.x!==sa.x*qa)fa="h";else{var f=Math.abs(d[0].x-jb.x)-Math.abs(d[0].y-jb.y);Math.abs(f)>=fb&&(fa=f>0?"h":"v",$=d)}}},Pb=function(){if($){var a=$.length;if(0!==a)if(La(gb,$[0]),ib.x=gb.x-jb.x,ib.y=gb.y-jb.y,_&&a>1){if(jb.x=gb.x,jb.y=gb.y,!ib.x&&!ib.y&&vb($[1],hb))return;La(hb,$[1]),W||(W=!0,Ca("zoomGestureStarted"));var b=xb(gb,hb),c=Ub(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(ja=!0);var d=1,e=Sa(),g=Ta();if(e>c)if(i.pinchToClose&&!ja&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Ea(j),Ca("onPinchClose",j),ha=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);0>d&&(d=0),aa=b,Fb(gb,hb,qb),ma.x+=qb.x-ub.x,ma.y+=qb.y-ub.y,La(ub,qb),oa.x=Ka("x",c),oa.y=Ka("y",c),R=c>s,s=c,Ga()}else{if(!fa)return;if(ga&&(ga=!1,Math.abs(ib.x)>=fb&&(ib.x-=$[0].x-kb.x),Math.abs(ib.y)>=fb&&(ib.y-=$[0].y-kb.y)),jb.x=gb.x,jb.y=gb.y,0===ib.x&&0===ib.y)return;if("v"===fa&&i.closeOnVerticalDrag&&!Ab()){ma.y+=ib.y,oa.y+=ib.y;var k=Hb();return S=!0,Ca("onVerticalDrag",k),Ea(k),void Ga()}Gb(Da(),gb.x,gb.y),X=!0,ca=f.currItem.bounds;var l=Mb("x",ib);l||(Mb("y",ib),Ma(oa),Ga())}}},Qb=function(a){if(N.isOldAndroid){if(T&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(T),T=setTimeout(function(){T=0},600))}Ca("pointerUp"),Db(a,!1)&&a.preventDefault();var b;if(F){var c=e.arraySearch(lb,a.pointerId,"id");if(c>-1)if(b=lb.splice(c,1)[0],navigator.pointerEnabled)b.type=a.pointerType||"mouse";else{var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}}var g,h=Lb(a),j=h.length;if("mouseup"===a.type&&(j=0),2===j)return $=null,!0;1===j&&La(kb,h[0]),0!==j||fa||ea||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Ca("touchRelease",a,b));var k=-1;if(0===j&&(U=!1,e.unbind(window,p,f),yb(),_?k=0:-1!==rb&&(k=Da()-rb)),rb=1===j?Da():-1,g=-1!==k&&150>k?"zoom":"swipe",_&&2>j&&(_=!1,1===j&&(g="zoomPointerUp"),Ca("zoomGestureEnded")),$=null,X||W||ea||S)if(bb(),Q||(Q=Rb()),Q.calculateSwipeSpeed("x"),S){var l=Hb();if(l<i.verticalDragRange)f.close();else{var m=oa.y,n=ia;cb("verticalDrag",0,1,300,e.easing.cubic.out,function(a){oa.y=(f.currItem.initialPosition.y-m)*a+m,Ea((1-n)*a+n),Ga()}),Ca("onVerticalDrag",1)}}else{if((Z||ea)&&0===j){var o=Tb(g,Q);if(o)return;g="zoomPointerUp"}if(!ea)return"swipe"!==g?void Vb():void(!Z&&s>f.currItem.fitRatio&&Sb(Q))}},Rb=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){nb.length>1?(a=Da()-P+50,b=nb[nb.length-2][d]):(a=Da()-O,b=kb[d]),c.lastFlickOffset[d]=jb[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickDist[d]>20?c.lastFlickSpeed[d]=c.lastFlickOffset[d]/a:c.lastFlickSpeed[d]=0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(oa[a]>ca.min[a]?c.backAnimDestination[a]=ca.min[a]:oa[a]<ca.max[a]&&(c.backAnimDestination[a]=ca.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,cb("bounceZoomPan"+a,oa[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){oa[a]=b,Ga()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,oa[a]+=c.distanceOffset[a])},panAnimLoop:function(){return Za.zoomPan&&(Za.zoomPan.raf=H(c.panAnimLoop),c.now=Da(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Ga(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05)?(oa.x=Math.round(oa.x),oa.y=Math.round(oa.y),Ga(),void _a("zoomPan")):void 0}};return c},Sb=function(a){return a.calculateSwipeSpeed("y"),ca=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(ab("zoomPan"),a.lastNow=Da(),void a.panAnimLoop())},Tb=function(a,b){var c;ea||(pb=m);var d;if("swipe"===a){var g=jb.x-kb.x,h=b.lastFlickDist.x<10;g>eb&&(h||b.lastFlickOffset.x>20)?d=-1:-eb>g&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,0>m?(m=i.loop?_b()-1:0,j=!0):m>=_b()&&(m=i.loop?0:_b()-1,j=!0),(!j||i.loop)&&(ta+=d,qa-=d,c=!0));var k,l=sa.x*qa,n=Math.abs(l-sb.x);return c||l>sb.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,pb===m&&(c=!1),ea=!0,Ca("mainScrollAnimStart"),cb("mainScroll",sb.x,l,k,e.easing.cubic.out,Ja,function(){bb(),ea=!1,pb=-1,(c||pb!==m)&&f.updateCurrItem(),Ca("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Ub=function(a){return 1/ba*a*t},Vb=function(){var a=s,b=Sa(),c=Ta();b>s?a=b:s>c&&(a=c);var d,g=1,h=ia;return ha&&!R&&!ja&&b>s?(f.close(),!0):(ha&&(d=function(a){Ea((g-h)*a+h)}),f.zoomTo(a,0,200,e.easing.cubic.out,d),!0)};ya("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){A=a+b,B=a+c,C=a+d,D=e?a+e:""};F=N.pointerEvent,F&&N.touch&&(N.touch=!1),F?navigator.pointerEnabled?a("pointer","down","move","up","cancel"):a("MSPointer","Down","Move","Up","Cancel"):N.touch?(a("touch","start","move","end","cancel"),G=!0):a("mouse","down","move","up"),p=B+" "+C+" "+D,q=A,F&&!G&&(G=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=G,r[A]=Nb,r[B]=Ob,r[C]=Qb,D&&(r[D]=r[C]),N.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[A],r.mousemove=r[B],r.mouseup=r[C]),G||(i.allowPanToNext=!1)}}});var Wb,Xb,Yb,Zb,$b,_b,ac,bc=function(b,c,d,g){Wb&&clearTimeout(Wb),Zb=!0,Yb=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){_a("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Ea(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Ca("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),Zb=!1};if(!j||!h||void 0===h.x)return Ca("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,La(oa,b.initialPosition),Ga(),a.style.opacity=d?0:1,Ea(1),void(j?setTimeout(function(){k()},j):k());var n=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,oa.x=h.x,oa.y=h.y-K,f[g?"template":"bg"].style.opacity=.001,Ga()),ab("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Wb=setTimeout(function(){if(Ca("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:oa.x,y:oa.y},l=s,m=ia,n=function(b){1===b?(s=f,oa.x=h.x,oa.y=h.y-M):(s=(f-l)*b+l,oa.x=(h.x-i.x)*b+i.x,oa.y=(h.y-M-i.y)*b+i.y),Ga(),g?a.style.opacity=1-b:Ea(m-b*m)};c?cb("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Wb=setTimeout(k,j+20))}else s=b.initialZoomLevel,La(oa,b.initialPosition),Ga(),Ea(1),g?a.style.opacity=1:Ea(1),Wb=setTimeout(k,j+20)},d?25:90)};n()},cc={},dc=[],ec={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Xb.length}},fc=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},gc=function(a,b,c){var d=a.bounds;d.center.x=Math.round((cc.x-b)/2),d.center.y=Math.round((cc.y-c)/2)+a.vGap.top,d.max.x=b>cc.x?Math.round(cc.x-b):d.center.x,d.max.y=c>cc.y?Math.round(cc.y-c)+a.vGap.top:d.center.y,d.min.x=b>cc.x?0:d.center.x,d.min.y=c>cc.y?a.vGap.top:d.center.y},hc=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Ca("parseVerticalMargin",a)),cc.x=b.x,cc.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=cc.x/a.w,f=cc.y/a.h;a.fitRatio=f>e?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=fc())}if(!c)return;return gc(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=fc(),a.initialPosition=a.bounds.center,a.bounds},ic=function(a,b,c,d,e,g){b.loadError||d&&(b.imageAppended=!0,lc(b,d,b===f.currItem&&xa),c.appendChild(d),g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500))},jc=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},kc=function(a,b){return a.src&&a.loadError&&a.container?(b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0):void 0},lc=function(a,b,c){if(a.src){b||(b=a.container.lastChild);var d=c?a.w:Math.round(a.w*a.fitRatio),e=c?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=d+"px",a.placeholder.style.height=e+"px"),b.style.width=d+"px",b.style.height=e+"px"}},mc=function(){if(dc.length){for(var a,b=0;b<dc.length;b++)a=dc[b],a.holder.index===a.index&&ic(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);dc=[]}};ya("Controller",{publicMethods:{lazyLoadItem:function(a){a=za(a);var b=$b(a);b&&(!b.loaded&&!b.loading||x)&&(Ca("gettingData",a,b),b.src&&jc(b))},initController:function(){e.extend(i,ec,!0),f.items=Xb=c,$b=f.getItemAt,_b=i.getNumItemsFn,ac=i.loop,_b()<3&&(i.loop=!1),Ba("beforeChange",function(a){var b,c=i.preload,d=null===a?!0:a>=0,e=Math.min(c[0],_b()),g=Math.min(c[1],_b());for(b=1;(d?g:e)>=b;b++)f.lazyLoadItem(m+b);for(b=1;(d?e:g)>=b;b++)f.lazyLoadItem(m-b)}),Ba("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ba("mainScrollAnimComplete",mc),Ba("initialZoomInEnd",mc),Ba("destroy",function(){for(var a,b=0;b<Xb.length;b++)a=Xb[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);dc=null})},getItemAt:function(a){return a>=0&&void 0!==Xb[a]?Xb[a]:!1},allowProgressiveImg:function(){return i.forceProgressiveLoading||!G||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=za(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Ca("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),kc(g),hc(g,pa),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.opacity=1,d.src=g.src,lc(g,d),ic(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(a&&a.index===b){if(kc(c,!0))return c.loadComplete=c.img=null,hc(c,pa),Ha(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!Zb&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):N.transform&&(ea||Zb)?dc.push({item:c,baseDiv:h,img:c.img,index:b,holder:a,clearPlaceholder:!0}):ic(b,c,h,c.img,ea||Zb,!0)}c.loadComplete=null,c.img=null,Ca("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),lc(g,l),h.appendChild(l),g.placeholder=l}g.loading||jc(g),f.allowProgressiveImg()&&(!Yb&&N.transform?dc.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):ic(b,g,h,g.img,!0,!0))}Yb||b!==m?Ha(g):(da=h.style,bc(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var nc,oc={},pc=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};ya("Tap",{publicMethods:{initTap:function(){Ba("firstTouchStart",f.onTapStart),Ba("touchRelease",f.onTapRelease),Ba("destroy",function(){oc={},nc=null})},onTapStart:function(a){a.length>1&&(clearTimeout(nc),nc=null)},onTapRelease:function(a,b){if(b&&!X&&!V&&!$a){var c=b;if(nc&&(clearTimeout(nc),nc=null,wb(c,oc)))return void Ca("doubleTap",c);if("mouse"===b.type)return void pc(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void pc(a,b);La(oc,c),nc=setTimeout(function(){pc(a,b),nc=null},300)}}}});var qc;ya("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(G?Ba("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){qc={};var c="wheel mousewheel DOMMouseScroll";Ba("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ba("unbindEvents",function(){qc&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),1>s?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ba("resize",g),Ba("afterChange",g),Ba("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ba("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.modal&&(!i.closeOnScroll||$a||U?a.preventDefault():E&&Math.abs(a.deltaY)>2&&(l=!0,f.close())),!0;if(a.stopPropagation(),qc.x=0,"deltaX"in a)1===a.deltaMode?(qc.x=18*a.deltaX,qc.y=18*a.deltaY):(qc.x=a.deltaX,qc.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(qc.x=-.16*a.wheelDeltaX),a.wheelDeltaY?qc.y=-.16*a.wheelDeltaY:qc.y=-.16*a.wheelDelta;else{if(!("detail"in a))return;qc.y=a.detail}Ra(s,!0);var b=oa.x-qc.x,c=oa.y-qc.y;(i.modal||b<=ca.min.x&&b>=ca.max.x&&c<=ca.min.y&&c>=ca.max.y)&&a.preventDefault(),f.panTo(b,c)},toggleDesktopZoom:function(b){b=b||{x:pa.x/2+ra.x,y:pa.y/2+ra.y};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc={history:!0,galleryUID:1},Ec=function(){return Bc.hash.substring(1)},Fc=function(){rc&&clearTimeout(rc),tc&&clearTimeout(tc)},Gc=function(){var a=Ec(),b={};if(a.length<5)return b;var c,d=a.split("&");for(c=0;c<d.length;c++)if(d[c]){var e=d[c].split("=");e.length<2||(b[e[0]]=e[1])}if(i.galleryPIDs){var f=b.pid;for(b.pid=0,c=0;c<Xb.length;c++)if(Xb[c].pid===f){b.pid=c;break}}else b.pid=parseInt(b.pid,10)-1;return b.pid<0&&(b.pid=0),b},Hc=function(){if(tc&&clearTimeout(tc),$a||U)return void(tc=setTimeout(Hc,500));uc?clearTimeout(sc):uc=!0;var a=m+1,b=$b(m);b.hasOwnProperty("pid")&&(a=b.pid);var c=xc+"&gid="+i.galleryUID+"&pid="+a;yc||-1===Bc.hash.indexOf(c)&&(Ac=!0);var d=Bc.href.split("#")[0]+"#"+c;Cc?"#"+c!==window.location.hash&&history[yc?"replaceState":"pushState"]("",document.title,d):yc?Bc.replace(d):Bc.hash=c,yc=!0,sc=setTimeout(function(){uc=!1},60)};ya("History",{publicMethods:{initHistory:function(){if(e.extend(i,Dc,!0),i.history){Bc=window.location,Ac=!1,zc=!1,yc=!1,xc=Ec(),Cc="pushState"in history,xc.indexOf("gid=")>-1&&(xc=xc.split("&gid=")[0],xc=xc.split("?gid=")[0]),Ba("afterChange",f.updateURL),Ba("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){wc=!0,zc||(Ac?history.back():xc?Bc.hash=xc:Cc?history.pushState("",document.title,Bc.pathname+Bc.search):Bc.hash=""),Fc()};Ba("unbindEvents",function(){l&&a()}),Ba("destroy",function(){wc||a()}),Ba("firstUpdate",function(){m=Gc().pid});var b=xc.indexOf("pid=");b>-1&&(xc=xc.substring(0,b),"&"===xc.slice(-1)&&(xc=xc.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Ec()===xc?(zc=!0,void f.close()):void(uc||(vc=!0,f.goTo(Gc().pid),vc=!1))},updateURL:function(){Fc(),vc||(yc?rc=setTimeout(Hc,800):Hc())}}}),e.extend(f,db)};return a});
var g,aa=this;function ca(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}var da="closure_uid_"+(1E9*Math.random()>>>0),ea=0;var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ga(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function ha(a,b){this.P=[];this.Ta=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.P[d]=e,c=!1)}}var ia={};function ja(a){if(-128<=a&&128>a){var b=ia[a];if(b)return b}b=new ha([a|0],0>a?-1:0);-128<=a&&128>a&&(ia[a]=b);return b}function ka(a){if(isNaN(a)||!isFinite(a))return na;if(0>a)return ka(-a).ba();for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=oa;return new ha(b,0)}var oa=4294967296,na=ja(0),qa=ja(1),ta=ja(16777216);g=ha.prototype;
g.oc=function(){return 0<this.P.length?this.P[0]:this.Ta};g.jb=function(){if(this.ja())return-this.ba().jb();for(var a=0,b=1,c=0;c<this.P.length;c++)var d=wa(this,c),a=a+(0<=d?d:oa+d)*b,b=b*oa;return a};
g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(this.Ha())return"0";if(this.ja())return"-"+this.ba().toString(a);for(var b=ka(Math.pow(a,6)),c=this,d="";;){var e=xa(c,b),f=(c.zb(e.multiply(b)).oc()>>>0).toString(a),c=e;if(c.Ha())return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function wa(a,b){return 0>b?0:b<a.P.length?a.P[b]:a.Ta}g.Ha=function(){if(0!=this.Ta)return!1;for(var a=0;a<this.P.length;a++)if(0!=this.P[a])return!1;return!0};g.ja=function(){return-1==this.Ta};
g.fc=function(a){return 0<this.compare(a)};g.gc=function(a){return 0<=this.compare(a)};g.Hb=function(){return 0>this.compare(ta)};g.Ib=function(a){return 0>=this.compare(a)};g.compare=function(a){a=this.zb(a);return a.ja()?-1:a.Ha()?0:1};g.ba=function(){return this.kc().add(qa)};
g.add=function(a){for(var b=Math.max(this.P.length,a.P.length),c=[],d=0,e=0;e<=b;e++){var f=d+(wa(this,e)&65535)+(wa(a,e)&65535),h=(f>>>16)+(wa(this,e)>>>16)+(wa(a,e)>>>16),d=h>>>16,f=f&65535,h=h&65535;c[e]=h<<16|f}return new ha(c,c[c.length-1]&-2147483648?-1:0)};g.zb=function(a){return this.add(a.ba())};
g.multiply=function(a){if(this.Ha()||a.Ha())return na;if(this.ja())return a.ja()?this.ba().multiply(a.ba()):this.ba().multiply(a).ba();if(a.ja())return this.multiply(a.ba()).ba();if(this.Hb()&&a.Hb())return ka(this.jb()*a.jb());for(var b=this.P.length+a.P.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.P.length;d++)for(var e=0;e<a.P.length;e++){var f=wa(this,d)>>>16,h=wa(this,d)&65535,k=wa(a,e)>>>16,l=wa(a,e)&65535;c[2*d+2*e]+=h*l;ya(c,2*d+2*e);c[2*d+2*e+1]+=f*l;ya(c,2*d+2*e+1);c[2*d+2*e+1]+=h*k;
ya(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;ya(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new ha(c,0)};function ya(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535}
function xa(a,b){if(b.Ha())throw Error("division by zero");if(a.Ha())return na;if(a.ja())return b.ja()?xa(a.ba(),b.ba()):xa(a.ba(),b).ba();if(b.ja())return xa(a,b.ba()).ba();if(30<a.P.length){if(a.ja()||b.ja())throw Error("slowDivide_ only works with positive integers.");for(var c=qa,d=b;d.Ib(a);)c=c.shiftLeft(1),d=d.shiftLeft(1);for(var e=c.Ya(1),f=d.Ya(1),h,d=d.Ya(2),c=c.Ya(2);!d.Ha();)h=f.add(d),h.Ib(a)&&(e=e.add(c),f=h),d=d.Ya(1),c=c.Ya(1);return e}c=na;for(d=a;d.gc(b);){e=Math.max(1,Math.floor(d.jb()/
b.jb()));f=Math.ceil(Math.log(e)/Math.LN2);f=48>=f?1:Math.pow(2,f-48);h=ka(e);for(var k=h.multiply(b);k.ja()||k.fc(d);)e-=f,h=ka(e),k=h.multiply(b);h.Ha()&&(h=qa);c=c.add(h);d=d.zb(k)}return c}g.kc=function(){for(var a=this.P.length,b=[],c=0;c<a;c++)b[c]=~this.P[c];return new ha(b,~this.Ta)};g.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.P.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?wa(this,e-b)<<a|wa(this,e-b-1)>>>32-a:wa(this,e-b);return new ha(d,this.Ta)};
g.Ya=function(a){var b=a>>5;a%=32;for(var c=this.P.length-b,d=[],e=0;e<c;e++)d[e]=0<a?wa(this,e+b)>>>a|wa(this,e+b+1)<<32-a:wa(this,e+b);return new ha(d,this.Ta)};function za(a,b){null!=a&&this.append.apply(this,arguments)}g=za.prototype;g.Oa="";g.set=function(a){this.Oa=""+a};g.append=function(a,b,c){this.Oa+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.Oa+=arguments[d];return this};g.clear=function(){this.Oa=""};g.toString=function(){return this.Oa};var Aa;if("undefined"===typeof Ba)var Ba=function(){throw Error("No *print-fn* fn set for evaluation environment");};if("undefined"===typeof Ca)var Ca=function(){throw Error("No *print-err-fn* fn set for evaluation environment");};var Ea=null;if("undefined"===typeof Fa)var Fa=null;function Ga(){return new r(null,5,[Ia,!0,Ja,!0,Ka,!1,La,!1,Na,null],null)}function t(a){return null!=a&&!1!==a}function Oa(a){return a instanceof Array}function Pa(a){return null==a?!0:!1===a?!0:!1}
function w(a,b){return a[q(null==b?null:b)]?!0:a._?!0:!1}function x(a,b){var c=null==b?null:b.constructor,c=t(t(c)?c.Gb:c)?c.mb:q(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function Qa(a){var b=a.mb;return t(b)?b:""+y(a)}var Ra="undefined"!==typeof Symbol&&"function"===q(Symbol)?Symbol.iterator:"@@iterator";function Ta(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}
function Ua(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Va(arguments[0]);case 2:return Va(arguments[1]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function Wa(a){return Va(a)}function Va(a){function b(a,b){a.push(b);return a}var c=[];return Xa?Xa(b,c,a):Ya.call(null,b,c,a)}function Za(){}
var $a=function $a(b){if(null!=b&&null!=b.V)return b.V(b);var c=$a[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=$a._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ICounted.-count",b);},bb=function bb(b){if(null!=b&&null!=b.W)return b.W(b);var c=bb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=bb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IEmptyableCollection.-empty",b);};function cb(){}
var db=function db(b,c){if(null!=b&&null!=b.R)return b.R(b,c);var d=db[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=db._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("ICollection.-conj",b);};function eb(){}
var A=function A(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return A.a(arguments[0],arguments[1]);case 3:return A.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};
A.a=function(a,b){if(null!=a&&null!=a.C)return a.C(a,b);var c=A[q(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=A._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw x("IIndexed.-nth",a);};A.f=function(a,b,c){if(null!=a&&null!=a.ha)return a.ha(a,b,c);var d=A[q(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=A._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw x("IIndexed.-nth",a);};A.F=3;function fb(){}
var gb=function gb(b){if(null!=b&&null!=b.Z)return b.Z(b);var c=gb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=gb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ISeq.-first",b);},hb=function hb(b){if(null!=b&&null!=b.fa)return b.fa(b);var c=hb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=hb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ISeq.-rest",b);};function ib(){}function jb(){}
var lb=function lb(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return lb.a(arguments[0],arguments[1]);case 3:return lb.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};
lb.a=function(a,b){if(null!=a&&null!=a.K)return a.K(a,b);var c=lb[q(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=lb._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw x("ILookup.-lookup",a);};lb.f=function(a,b,c){if(null!=a&&null!=a.J)return a.J(a,b,c);var d=lb[q(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=lb._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw x("ILookup.-lookup",a);};lb.F=3;
var mb=function mb(b,c){if(null!=b&&null!=b.pb)return b.pb(b,c);var d=mb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=mb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IAssociative.-contains-key?",b);},nb=function nb(b,c,d){if(null!=b&&null!=b.Za)return b.Za(b,c,d);var e=nb[q(null==b?null:b)];if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=nb._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("IAssociative.-assoc",b);};function ob(){}
var pb=function pb(b,c){if(null!=b&&null!=b.tb)return b.tb(b,c);var d=pb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=pb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IMap.-dissoc",b);};function qb(){}
var sb=function sb(b){if(null!=b&&null!=b.ub)return b.ub();var c=sb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=sb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IMapEntry.-key",b);},tb=function tb(b){if(null!=b&&null!=b.vb)return b.vb();var c=tb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=tb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IMapEntry.-val",b);};function ub(){}
var vb=function vb(b){if(null!=b&&null!=b.$a)return b.$a(b);var c=vb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=vb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IStack.-peek",b);},wb=function wb(b){if(null!=b&&null!=b.ab)return b.ab(b);var c=wb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=wb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IStack.-pop",b);};function xb(){}
var yb=function yb(b,c,d){if(null!=b&&null!=b.wb)return b.wb(b,c,d);var e=yb[q(null==b?null:b)];if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=yb._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("IVector.-assoc-n",b);},zb=function zb(b){if(null!=b&&null!=b.Mb)return b.state;var c=zb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=zb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IDeref.-deref",b);};function Ab(){}
var Bb=function Bb(b){if(null!=b&&null!=b.M)return b.M(b);var c=Bb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Bb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IMeta.-meta",b);},Eb=function Eb(b,c){if(null!=b&&null!=b.O)return b.O(b,c);var d=Eb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Eb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IWithMeta.-with-meta",b);};function Fb(){}
var Gb=function Gb(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return Gb.a(arguments[0],arguments[1]);case 3:return Gb.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};
Gb.a=function(a,b){if(null!=a&&null!=a.X)return a.X(a,b);var c=Gb[q(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=Gb._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw x("IReduce.-reduce",a);};Gb.f=function(a,b,c){if(null!=a&&null!=a.Y)return a.Y(a,b,c);var d=Gb[q(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=Gb._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw x("IReduce.-reduce",a);};Gb.F=3;
var Hb=function Hb(b,c){if(null!=b&&null!=b.s)return b.s(b,c);var d=Hb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Hb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IEquiv.-equiv",b);},Ib=function Ib(b){if(null!=b&&null!=b.L)return b.L(b);var c=Ib[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Ib._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IHash.-hash",b);};function Jb(){}
var Kb=function Kb(b){if(null!=b&&null!=b.T)return b.T(b);var c=Kb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Kb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ISeqable.-seq",b);};function Lb(){}function Mb(){}
var C=function C(b,c){if(null!=b&&null!=b.Fb)return b.Fb(0,c);var d=C[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=C._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IWriter.-write",b);},Nb=function Nb(b,c,d){if(null!=b&&null!=b.Eb)return b.Eb(0,c,d);var e=Nb[q(null==b?null:b)];if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=Nb._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("IWatchable.-notify-watches",b);},Ob=function Ob(b){if(null!=b&&null!=
b.Va)return b.Va(b);var c=Ob[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Ob._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IEditableCollection.-as-transient",b);},Pb=function Pb(b,c){if(null!=b&&null!=b.cb)return b.cb(b,c);var d=Pb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Pb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("ITransientCollection.-conj!",b);},Qb=function Qb(b){if(null!=b&&null!=b.eb)return b.eb(b);var c=Qb[q(null==b?
null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Qb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ITransientCollection.-persistent!",b);},Rb=function Rb(b,c,d){if(null!=b&&null!=b.bb)return b.bb(b,c,d);var e=Rb[q(null==b?null:b)];if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=Rb._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("ITransientAssociative.-assoc!",b);},Sb=function Sb(b,c,d){if(null!=b&&null!=b.Db)return b.Db(0,c,d);var e=Sb[q(null==b?null:b)];if(null!=
e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=Sb._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("ITransientVector.-assoc-n!",b);},Tb=function Tb(b){if(null!=b&&null!=b.Bb)return b.Bb();var c=Tb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Tb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IChunk.-drop-first",b);},Ub=function Ub(b){if(null!=b&&null!=b.rb)return b.rb(b);var c=Ub[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Ub._;if(null!=c)return c.b?
c.b(b):c.call(null,b);throw x("IChunkedSeq.-chunked-first",b);},D=function D(b){if(null!=b&&null!=b.sb)return b.sb(b);var c=D[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=D._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IChunkedSeq.-chunked-rest",b);},Vb=function Vb(b){if(null!=b&&null!=b.qb)return b.qb(b);var c=Vb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Vb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IChunkedNext.-chunked-next",b);},
Xb=function Xb(b,c){if(null!=b&&null!=b.Xb)return b.Xb(b,c);var d=Xb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Xb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IReset.-reset!",b);},Yb=function Yb(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return Yb.a(arguments[0],arguments[1]);case 3:return Yb.f(arguments[0],arguments[1],arguments[2]);case 4:return Yb.w(arguments[0],arguments[1],arguments[2],
arguments[3]);case 5:return Yb.H(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};Yb.a=function(a,b){if(null!=a&&null!=a.Zb)return a.Zb(a,b);var c=Yb[q(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=Yb._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw x("ISwap.-swap!",a);};
Yb.f=function(a,b,c){if(null!=a&&null!=a.$b)return a.$b(a,b,c);var d=Yb[q(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=Yb._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw x("ISwap.-swap!",a);};Yb.w=function(a,b,c,d){if(null!=a&&null!=a.ac)return a.ac(a,b,c,d);var e=Yb[q(null==a?null:a)];if(null!=e)return e.w?e.w(a,b,c,d):e.call(null,a,b,c,d);e=Yb._;if(null!=e)return e.w?e.w(a,b,c,d):e.call(null,a,b,c,d);throw x("ISwap.-swap!",a);};
Yb.H=function(a,b,c,d,e){if(null!=a&&null!=a.bc)return a.bc(a,b,c,d,e);var f=Yb[q(null==a?null:a)];if(null!=f)return f.H?f.H(a,b,c,d,e):f.call(null,a,b,c,d,e);f=Yb._;if(null!=f)return f.H?f.H(a,b,c,d,e):f.call(null,a,b,c,d,e);throw x("ISwap.-swap!",a);};Yb.F=5;var Zb=function Zb(b){if(null!=b&&null!=b.Fa)return b.Fa(b);var c=Zb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Zb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IIterable.-iterator",b);};
function $b(a){this.mc=a;this.i=1073741824;this.A=0}$b.prototype.Fb=function(a,b){return this.mc.append(b)};function ac(a){var b=new za;a.N(null,new $b(b),Ga());return""+y(b)}var bc="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function cc(a){a=bc(a|0,-862048943);return bc(a<<15|a>>>-15,461845907)}
function dc(a,b){var c=(a|0)^(b|0);return bc(c<<13|c>>>-13,5)+-430675100|0}function ec(a,b){var c=(a|0)^b,c=bc(c^c>>>16,-2048144789),c=bc(c^c>>>13,-1028477387);return c^c>>>16}function fc(a){var b;a:{b=1;for(var c=0;;)if(b<a.length){var d=b+2,c=dc(c,cc(a.charCodeAt(b-1)|a.charCodeAt(b)<<16));b=d}else{b=c;break a}}b=1===(a.length&1)?b^cc(a.charCodeAt(a.length-1)):b;return ec(b,bc(2,a.length))}var gc={},hc=0;
function ic(a){255<hc&&(gc={},hc=0);if(null==a)return 0;var b=gc[a];if("number"!==typeof b){a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b)var e=c+1,d=bc(31,d)+a.charCodeAt(c),c=e;else{b=d;break a}else b=0;else b=0;gc[a]=b;hc+=1}return a=b}
function jc(a){if(null!=a&&(a.i&4194304||a.sc))return a.L(null);if("number"===typeof a){if(t(isFinite(a)))return Math.floor(a)%2147483647;switch(a){case Infinity:return 2146435072;case -Infinity:return-1048576;default:return 2146959360}}else return!0===a?a=1:!1===a?a=0:"string"===typeof a?(a=ic(a),0!==a&&(a=cc(a),a=dc(0,a),a=ec(a,4))):a=a instanceof Date?a.valueOf():null==a?0:Ib(a),a}function kc(a,b){return a^b+2654435769+(a<<6)+(a>>2)}
function mc(a,b,c,d,e){this.ib=a;this.name=b;this.Na=c;this.Ua=d;this.aa=e;this.i=2154168321;this.A=4096}g=mc.prototype;g.toString=function(){return this.Na};g.equiv=function(a){return this.s(null,a)};g.s=function(a,b){return b instanceof mc?this.Na===b.Na:!1};
g.call=function(){function a(a,b,c){return G.f?G.f(b,this,c):G.call(null,b,this,c)}function b(a,b){return G.a?G.a(b,this):G.call(null,b,this)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,0,e);case 3:return a.call(this,0,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.f=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};g.b=function(a){return G.a?G.a(a,this):G.call(null,a,this)};
g.a=function(a,b){return G.f?G.f(a,this,b):G.call(null,a,this,b)};g.M=function(){return this.aa};g.O=function(a,b){return new mc(this.ib,this.name,this.Na,this.Ua,b)};g.L=function(){var a=this.Ua;return null!=a?a:this.Ua=a=kc(fc(this.name),ic(this.ib))};g.N=function(a,b){return C(b,this.Na)};
function H(a){if(null==a)return null;if(null!=a&&(a.i&8388608||a.Yb))return a.T(null);if(Oa(a)||"string"===typeof a)return 0===a.length?null:new I(a,0,null);if(w(Jb,a))return Kb(a);throw Error([y(a),y(" is not ISeqable")].join(""));}function J(a){if(null==a)return null;if(null!=a&&(a.i&64||a.Pa))return a.Z(null);a=H(a);return null==a?null:gb(a)}function L(a){return null!=a?null!=a&&(a.i&64||a.Pa)?a.fa(null):(a=H(a))?hb(a):M:M}
function N(a){return null==a?null:null!=a&&(a.i&128||a.lb)?a.da(null):H(L(a))}var nc=function nc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return nc.b(arguments[0]);case 2:return nc.a(arguments[0],arguments[1]);default:return nc.m(arguments[0],arguments[1],new I(c.slice(2),0,null))}};nc.b=function(){return!0};nc.a=function(a,b){return null==a?null==b:a===b||Hb(a,b)};
nc.m=function(a,b,c){for(;;)if(nc.a(a,b))if(N(c))a=b,b=J(c),c=N(c);else return nc.a(b,J(c));else return!1};nc.D=function(a){var b=J(a),c=N(a);a=J(c);c=N(c);return nc.m(b,a,c)};nc.F=2;function oc(a){this.u=a}oc.prototype.next=function(){if(null!=this.u){var a=J(this.u);this.u=N(this.u);return{value:a,done:!1}}return{value:null,done:!0}};function pc(a){return new oc(H(a))}function qc(a,b){var c=cc(a),c=dc(0,c);return ec(c,b)}
function rc(a){var b=0,c=1;for(a=H(a);;)if(null!=a)b+=1,c=bc(31,c)+jc(J(a))|0,a=N(a);else return qc(c,b)}var sc=qc(1,0);function tc(a){var b=0,c=0;for(a=H(a);;)if(null!=a)b+=1,c=c+jc(J(a))|0,a=N(a);else return qc(c,b)}var uc=qc(0,0);Za["null"]=!0;$a["null"]=function(){return 0};Date.prototype.s=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};Hb.number=function(a,b){return a===b};Ab["function"]=!0;Bb["function"]=function(){return null};Ib._=function(a){return a[da]||(a[da]=++ea)};
function vc(a){return zb(a)}function wc(a,b){var c=$a(a);if(0===c)return b.B?b.B():b.call(null);for(var d=A.a(a,0),e=1;;)if(e<c)var f=A.a(a,e),d=b.a?b.a(d,f):b.call(null,d,f),e=e+1;else return d}function xc(a,b,c){var d=$a(a),e=c;for(c=0;;)if(c<d){var f=A.a(a,c),e=b.a?b.a(e,f):b.call(null,e,f);c+=1}else return e}function yc(a,b){var c=a.length;if(0===a.length)return b.B?b.B():b.call(null);for(var d=a[0],e=1;;)if(e<c)var f=a[e],d=b.a?b.a(d,f):b.call(null,d,f),e=e+1;else return d}
function zc(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var f=a[c],e=b.a?b.a(e,f):b.call(null,e,f);c+=1}else return e}function Ac(a,b,c,d){for(var e=a.length;;)if(d<e){var f=a[d];c=b.a?b.a(c,f):b.call(null,c,f);d+=1}else return c}function Bc(a){return null!=a?a.i&2||a.Lb?!0:a.i?!1:w(Za,a):w(Za,a)}function Cc(a){return null!=a?a.i&16||a.Cb?!0:a.i?!1:w(eb,a):w(eb,a)}
function O(a,b,c){var d=P.b?P.b(a):P.call(null,a);if(c>=d)return-1;!(0<c)&&0>c&&(c+=d,c=0>c?0:c);for(;;)if(c<d){if(nc.a(Dc?Dc(a,c):Ec.call(null,a,c),b))return c;c+=1}else return-1}function R(a,b,c){var d=P.b?P.b(a):P.call(null,a);if(0===d)return-1;0<c?(--d,c=d<c?d:c):c=0>c?d+c:c;for(;;)if(0<=c){if(nc.a(Dc?Dc(a,c):Ec.call(null,a,c),b))return c;--c}else return-1}function Fc(a,b){this.c=a;this.j=b}Fc.prototype.ea=function(){return this.j<this.c.length};
Fc.prototype.next=function(){var a=this.c[this.j];this.j+=1;return a};function I(a,b,c){this.c=a;this.j=b;this.l=c;this.i=166592766;this.A=8192}g=I.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P.b?P.b(this):P.call(null,this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.C=function(a,b){var c=b+this.j;return c<this.c.length?this.c[c]:null};g.ha=function(a,b,c){a=b+this.j;return a<this.c.length?this.c[a]:c};g.Fa=function(){return new Fc(this.c,this.j)};g.M=function(){return this.l};
g.da=function(){return this.j+1<this.c.length?new I(this.c,this.j+1,null):null};g.V=function(){var a=this.c.length-this.j;return 0>a?0:a};g.L=function(){return rc(this)};g.s=function(a,b){return Gc.a?Gc.a(this,b):Gc.call(null,this,b)};g.W=function(){return M};g.X=function(a,b){return Ac(this.c,b,this.c[this.j],this.j+1)};g.Y=function(a,b,c){return Ac(this.c,b,c,this.j)};g.Z=function(){return this.c[this.j]};g.fa=function(){return this.j+1<this.c.length?new I(this.c,this.j+1,null):M};
g.T=function(){return this.j<this.c.length?this:null};g.O=function(a,b){return new I(this.c,this.j,b)};g.R=function(a,b){return S.a?S.a(b,this):S.call(null,b,this)};I.prototype[Ra]=function(){return pc(this)};function Hc(a,b){return b<a.length?new I(a,b,null):null}
function T(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Hc(arguments[0],0);case 2:return Hc(arguments[0],arguments[1]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}Hb._=function(a,b){return a===b};
var Ic=function Ic(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Ic.B();case 1:return Ic.b(arguments[0]);case 2:return Ic.a(arguments[0],arguments[1]);default:return Ic.m(arguments[0],arguments[1],new I(c.slice(2),0,null))}};Ic.B=function(){return Jc};Ic.b=function(a){return a};Ic.a=function(a,b){return null!=a?db(a,b):db(M,b)};Ic.m=function(a,b,c){for(;;)if(t(c))a=Ic.a(a,b),b=J(c),c=N(c);else return Ic.a(a,b)};
Ic.D=function(a){var b=J(a),c=N(a);a=J(c);c=N(c);return Ic.m(b,a,c)};Ic.F=2;function P(a){if(null!=a)if(null!=a&&(a.i&2||a.Lb))a=a.V(null);else if(Oa(a))a=a.length;else if("string"===typeof a)a=a.length;else if(null!=a&&(a.i&8388608||a.Yb))a:{a=H(a);for(var b=0;;){if(Bc(a)){a=b+$a(a);break a}a=N(a);b+=1}}else a=$a(a);else a=0;return a}function Kc(a,b,c){for(;;){if(null==a)return c;if(0===b)return H(a)?J(a):c;if(Cc(a))return A.f(a,b,c);if(H(a))a=N(a),--b;else return c}}
function Ec(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Dc(arguments[0],arguments[1]);case 3:return U(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}
function Dc(a,b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(null!=a&&(a.i&16||a.Cb))return a.C(null,b);if(Oa(a))return b<a.length?a[b]:null;if("string"===typeof a)return b<a.length?a.charAt(b):null;if(null!=a&&(a.i&64||a.Pa)){var c;a:{c=a;for(var d=b;;){if(null==c)throw Error("Index out of bounds");if(0===d){if(H(c)){c=J(c);break a}throw Error("Index out of bounds");}if(Cc(c)){c=A.a(c,d);break a}if(H(c))c=N(c),--d;else throw Error("Index out of bounds");
}}return c}if(w(eb,a))return A.a(a,b);throw Error([y("nth not supported on this type "),y(Qa(null==a?null:a.constructor))].join(""));}
function U(a,b,c){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return c;if(null!=a&&(a.i&16||a.Cb))return a.ha(null,b,c);if(Oa(a))return b<a.length?a[b]:c;if("string"===typeof a)return b<a.length?a.charAt(b):c;if(null!=a&&(a.i&64||a.Pa))return Kc(a,b,c);if(w(eb,a))return A.a(a,b);throw Error([y("nth not supported on this type "),y(Qa(null==a?null:a.constructor))].join(""));}
var G=function G(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return G.a(arguments[0],arguments[1]);case 3:return G.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};G.a=function(a,b){return null==a?null:null!=a&&(a.i&256||a.Rb)?a.K(null,b):Oa(a)?b<a.length?a[b|0]:null:"string"===typeof a?b<a.length?a[b|0]:null:w(jb,a)?lb.a(a,b):null};
G.f=function(a,b,c){return null!=a?null!=a&&(a.i&256||a.Rb)?a.J(null,b,c):Oa(a)?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:w(jb,a)?lb.f(a,b,c):c:c};G.F=3;var Lc=function Lc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 3:return Lc.f(arguments[0],arguments[1],arguments[2]);default:return Lc.m(arguments[0],arguments[1],arguments[2],new I(c.slice(3),0,null))}};
Lc.f=function(a,b,c){if(null!=a)a=nb(a,b,c);else a:{a=[b];c=[c];b=a.length;for(var d=0,e=Ob(Mc);;)if(d<b)var f=d+1,e=e.bb(null,a[d],c[d]),d=f;else{a=Qb(e);break a}}return a};Lc.m=function(a,b,c,d){for(;;)if(a=Lc.f(a,b,c),t(d))b=J(d),c=J(N(d)),d=N(N(d));else return a};Lc.D=function(a){var b=J(a),c=N(a);a=J(c);var d=N(c),c=J(d),d=N(d);return Lc.m(b,a,c,d)};Lc.F=3;
var Nc=function Nc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return Nc.b(arguments[0]);case 2:return Nc.a(arguments[0],arguments[1]);default:return Nc.m(arguments[0],arguments[1],new I(c.slice(2),0,null))}};Nc.b=function(a){return a};Nc.a=function(a,b){return null==a?null:pb(a,b)};Nc.m=function(a,b,c){for(;;){if(null==a)return null;a=Nc.a(a,b);if(t(c))b=J(c),c=N(c);else return a}};
Nc.D=function(a){var b=J(a),c=N(a);a=J(c);c=N(c);return Nc.m(b,a,c)};Nc.F=2;function Pc(a,b){this.g=a;this.l=b;this.i=393217;this.A=0}g=Pc.prototype;g.M=function(){return this.l};g.O=function(a,b){return new Pc(this.g,b)};
g.call=function(){function a(a,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q,E,ba,sa){a=this;return Qc.kb?Qc.kb(a.g,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q,E,ba,sa):Qc.call(null,a.g,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q,E,ba,sa)}function b(a,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q,E,ba){a=this;return a.g.Aa?a.g.Aa(b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q,E,ba):a.g.call(null,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q,E,ba)}function c(a,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q,E){a=this;return a.g.za?a.g.za(b,c,d,e,f,h,k,l,m,p,n,u,v,z,
B,F,K,Q,E):a.g.call(null,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q,E)}function d(a,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q){a=this;return a.g.ya?a.g.ya(b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q):a.g.call(null,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K,Q)}function e(a,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K){a=this;return a.g.xa?a.g.xa(b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K):a.g.call(null,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F,K)}function f(a,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F){a=this;return a.g.wa?a.g.wa(b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F):a.g.call(null,
b,c,d,e,f,h,k,l,m,p,n,u,v,z,B,F)}function h(a,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B){a=this;return a.g.va?a.g.va(b,c,d,e,f,h,k,l,m,p,n,u,v,z,B):a.g.call(null,b,c,d,e,f,h,k,l,m,p,n,u,v,z,B)}function k(a,b,c,d,e,f,h,k,l,m,p,n,u,v,z){a=this;return a.g.ua?a.g.ua(b,c,d,e,f,h,k,l,m,p,n,u,v,z):a.g.call(null,b,c,d,e,f,h,k,l,m,p,n,u,v,z)}function l(a,b,c,d,e,f,h,k,l,m,p,n,u,v){a=this;return a.g.ta?a.g.ta(b,c,d,e,f,h,k,l,m,p,n,u,v):a.g.call(null,b,c,d,e,f,h,k,l,m,p,n,u,v)}function m(a,b,c,d,e,f,h,k,l,m,p,n,u){a=this;
return a.g.sa?a.g.sa(b,c,d,e,f,h,k,l,m,p,n,u):a.g.call(null,b,c,d,e,f,h,k,l,m,p,n,u)}function n(a,b,c,d,e,f,h,k,l,m,p,n){a=this;return a.g.ra?a.g.ra(b,c,d,e,f,h,k,l,m,p,n):a.g.call(null,b,c,d,e,f,h,k,l,m,p,n)}function p(a,b,c,d,e,f,h,k,l,m,p){a=this;return a.g.qa?a.g.qa(b,c,d,e,f,h,k,l,m,p):a.g.call(null,b,c,d,e,f,h,k,l,m,p)}function u(a,b,c,d,e,f,h,k,l,m){a=this;return a.g.Ea?a.g.Ea(b,c,d,e,f,h,k,l,m):a.g.call(null,b,c,d,e,f,h,k,l,m)}function v(a,b,c,d,e,f,h,k,l){a=this;return a.g.Da?a.g.Da(b,c,
d,e,f,h,k,l):a.g.call(null,b,c,d,e,f,h,k,l)}function z(a,b,c,d,e,f,h,k){a=this;return a.g.Ca?a.g.Ca(b,c,d,e,f,h,k):a.g.call(null,b,c,d,e,f,h,k)}function B(a,b,c,d,e,f,h){a=this;return a.g.Ba?a.g.Ba(b,c,d,e,f,h):a.g.call(null,b,c,d,e,f,h)}function F(a,b,c,d,e,f){a=this;return a.g.H?a.g.H(b,c,d,e,f):a.g.call(null,b,c,d,e,f)}function K(a,b,c,d,e){a=this;return a.g.w?a.g.w(b,c,d,e):a.g.call(null,b,c,d,e)}function Q(a,b,c,d){a=this;return a.g.f?a.g.f(b,c,d):a.g.call(null,b,c,d)}function ba(a,b,c){a=this;
return a.g.a?a.g.a(b,c):a.g.call(null,b,c)}function sa(a,b){a=this;return a.g.b?a.g.b(b):a.g.call(null,b)}function Db(a){a=this;return a.g.B?a.g.B():a.g.call(null)}var E=null,E=function(E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb,rb,Cb,Wb,lc,Oc,Ad,re,Jf,Rg){switch(arguments.length){case 1:return Db.call(this,E);case 2:return sa.call(this,E,la);case 3:return ba.call(this,E,la,ma);case 4:return Q.call(this,E,la,ma,pa);case 5:return K.call(this,E,la,ma,pa,ra);case 6:return F.call(this,E,la,ma,pa,ra,ua);case 7:return B.call(this,
E,la,ma,pa,ra,ua,va);case 8:return z.call(this,E,la,ma,pa,ra,ua,va,Da);case 9:return v.call(this,E,la,ma,pa,ra,ua,va,Da,Ha);case 10:return u.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma);case 11:return p.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa);case 12:return n.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab);case 13:return m.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb);case 14:return l.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb,rb);case 15:return k.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,
kb,rb,Cb);case 16:return h.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb,rb,Cb,Wb);case 17:return f.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb,rb,Cb,Wb,lc);case 18:return e.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb,rb,Cb,Wb,lc,Oc);case 19:return d.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb,rb,Cb,Wb,lc,Oc,Ad);case 20:return c.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb,rb,Cb,Wb,lc,Oc,Ad,re);case 21:return b.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb,rb,Cb,Wb,lc,Oc,Ad,re,
Jf);case 22:return a.call(this,E,la,ma,pa,ra,ua,va,Da,Ha,Ma,Sa,ab,kb,rb,Cb,Wb,lc,Oc,Ad,re,Jf,Rg)}throw Error("Invalid arity: "+arguments.length);};E.b=Db;E.a=sa;E.f=ba;E.w=Q;E.H=K;E.Ba=F;E.Ca=B;E.Da=z;E.Ea=v;E.qa=u;E.ra=p;E.sa=n;E.ta=m;E.ua=l;E.va=k;E.wa=h;E.xa=f;E.ya=e;E.za=d;E.Aa=c;E.Qb=b;E.kb=a;return E}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};g.B=function(){return this.g.B?this.g.B():this.g.call(null)};
g.b=function(a){return this.g.b?this.g.b(a):this.g.call(null,a)};g.a=function(a,b){return this.g.a?this.g.a(a,b):this.g.call(null,a,b)};g.f=function(a,b,c){return this.g.f?this.g.f(a,b,c):this.g.call(null,a,b,c)};g.w=function(a,b,c,d){return this.g.w?this.g.w(a,b,c,d):this.g.call(null,a,b,c,d)};g.H=function(a,b,c,d,e){return this.g.H?this.g.H(a,b,c,d,e):this.g.call(null,a,b,c,d,e)};g.Ba=function(a,b,c,d,e,f){return this.g.Ba?this.g.Ba(a,b,c,d,e,f):this.g.call(null,a,b,c,d,e,f)};
g.Ca=function(a,b,c,d,e,f,h){return this.g.Ca?this.g.Ca(a,b,c,d,e,f,h):this.g.call(null,a,b,c,d,e,f,h)};g.Da=function(a,b,c,d,e,f,h,k){return this.g.Da?this.g.Da(a,b,c,d,e,f,h,k):this.g.call(null,a,b,c,d,e,f,h,k)};g.Ea=function(a,b,c,d,e,f,h,k,l){return this.g.Ea?this.g.Ea(a,b,c,d,e,f,h,k,l):this.g.call(null,a,b,c,d,e,f,h,k,l)};g.qa=function(a,b,c,d,e,f,h,k,l,m){return this.g.qa?this.g.qa(a,b,c,d,e,f,h,k,l,m):this.g.call(null,a,b,c,d,e,f,h,k,l,m)};
g.ra=function(a,b,c,d,e,f,h,k,l,m,n){return this.g.ra?this.g.ra(a,b,c,d,e,f,h,k,l,m,n):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n)};g.sa=function(a,b,c,d,e,f,h,k,l,m,n,p){return this.g.sa?this.g.sa(a,b,c,d,e,f,h,k,l,m,n,p):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p)};g.ta=function(a,b,c,d,e,f,h,k,l,m,n,p,u){return this.g.ta?this.g.ta(a,b,c,d,e,f,h,k,l,m,n,p,u):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,u)};
g.ua=function(a,b,c,d,e,f,h,k,l,m,n,p,u,v){return this.g.ua?this.g.ua(a,b,c,d,e,f,h,k,l,m,n,p,u,v):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,u,v)};g.va=function(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z){return this.g.va?this.g.va(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,u,v,z)};g.wa=function(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B){return this.g.wa?this.g.wa(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B)};
g.xa=function(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F){return this.g.xa?this.g.xa(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F)};g.ya=function(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K){return this.g.ya?this.g.ya(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K)};
g.za=function(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q){return this.g.za?this.g.za(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q)};g.Aa=function(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba){return this.g.Aa?this.g.Aa(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba)};
g.Qb=function(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba,sa){return Qc.kb?Qc.kb(this.g,a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba,sa):Qc.call(null,this.g,a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba,sa)};function Rc(a,b){return"function"==q(a)?new Pc(a,b):null==a?null:Eb(a,b)}function Sc(a){var b=null!=a;return(b?null!=a?a.i&131072||a.Ub||(a.i?0:w(Ab,a)):w(Ab,a):b)?Bb(a):null}function Tc(a){return null==a||Pa(H(a))}function Uc(a){return null==a?!1:null!=a?a.i&8||a.rc?!0:a.i?!1:w(cb,a):w(cb,a)}
function Vc(a){return null==a?!1:null!=a?a.i&4096||a.vc?!0:a.i?!1:w(ub,a):w(ub,a)}function Wc(a){return null!=a?a.i&16777216||a.uc?!0:a.i?!1:w(Lb,a):w(Lb,a)}function Xc(a){return null==a?!1:null!=a?a.i&1024||a.Sb?!0:a.i?!1:w(ob,a):w(ob,a)}function Yc(a){return null!=a?a.i&16384||a.wc?!0:a.i?!1:w(xb,a):w(xb,a)}function Zc(a){return null!=a?a.A&512||a.qc?!0:!1:!1}function $c(a){var b=[];ga(a,function(a,b){return function(a,c){return b.push(c)}}(a,b));return b}
function ad(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,--e,b+=1}var bd={};function cd(a){return null==a?!1:null!=a?a.i&64||a.Pa?!0:a.i?!1:w(fb,a):w(fb,a)}function dd(a){return null==a?!1:!1===a?!1:!0}function ed(a,b){return G.f(a,b,bd)===bd?!1:!0}function fd(a,b){var c=H(b);if(c){var d=J(c),c=N(c);return Xa?Xa(a,d,c):Ya.call(null,a,d,c)}return a.B?a.B():a.call(null)}function gd(a,b,c){for(c=H(c);;)if(c){var d=J(c);b=a.a?a.a(b,d):a.call(null,b,d);c=N(c)}else return b}
function Ya(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return hd(arguments[0],arguments[1]);case 3:return Xa(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function hd(a,b){return null!=b&&(b.i&524288||b.Wb)?b.X(null,a):Oa(b)?yc(b,a):"string"===typeof b?yc(b,a):w(Fb,b)?Gb.a(b,a):fd(a,b)}
function Xa(a,b,c){return null!=c&&(c.i&524288||c.Wb)?c.Y(null,a,b):Oa(c)?zc(c,a,b):"string"===typeof c?zc(c,a,b):w(Fb,c)?Gb.f(c,a,b):gd(a,b,c)}function id(a){return a}function jd(a,b,c,d){a=a.b?a.b(b):a.call(null,b);c=Xa(a,c,d);return a.b?a.b(c):a.call(null,c)}
var kd=function kd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return kd.b(arguments[0]);case 2:return kd.a(arguments[0],arguments[1]);default:return kd.m(arguments[0],arguments[1],new I(c.slice(2),0,null))}};kd.b=function(){return!0};kd.a=function(a,b){return a<b};kd.m=function(a,b,c){for(;;)if(a<b)if(N(c))a=b,b=J(c),c=N(c);else return b<J(c);else return!1};kd.D=function(a){var b=J(a),c=N(a);a=J(c);c=N(c);return kd.m(b,a,c)};kd.F=2;
var ld=function ld(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return ld.b(arguments[0]);case 2:return ld.a(arguments[0],arguments[1]);default:return ld.m(arguments[0],arguments[1],new I(c.slice(2),0,null))}};ld.b=function(){return!0};ld.a=function(a,b){return a>b};ld.m=function(a,b,c){for(;;)if(a>b)if(N(c))a=b,b=J(c),c=N(c);else return b>J(c);else return!1};ld.D=function(a){var b=J(a),c=N(a);a=J(c);c=N(c);return ld.m(b,a,c)};ld.F=2;
function md(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}function nd(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}var y=function y(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return y.B();case 1:return y.b(arguments[0]);default:return y.m(arguments[0],new I(c.slice(1),0,null))}};y.B=function(){return""};y.b=function(a){return null==a?"":""+a};
y.m=function(a,b){for(var c=new za(""+y(a)),d=b;;)if(t(d))c=c.append(""+y(J(d))),d=N(d);else return c.toString()};y.D=function(a){var b=J(a);a=N(a);return y.m(b,a)};y.F=1;function Gc(a,b){var c;if(Wc(b))if(Bc(a)&&Bc(b)&&P(a)!==P(b))c=!1;else a:{c=H(a);for(var d=H(b);;){if(null==c){c=null==d;break a}if(null!=d&&nc.a(J(c),J(d)))c=N(c),d=N(d);else{c=!1;break a}}}else c=null;return dd(c)}function od(a,b,c,d,e){this.l=a;this.first=b;this.Ia=c;this.count=d;this.o=e;this.i=65937646;this.A=8192}g=od.prototype;
g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,this.count)}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.l};g.da=function(){return 1===this.count?null:this.Ia};g.V=function(){return this.count};g.$a=function(){return this.first};g.ab=function(){return hb(this)};
g.L=function(){var a=this.o;return null!=a?a:this.o=a=rc(this)};g.s=function(a,b){return Gc(this,b)};g.W=function(){return Eb(M,this.l)};g.X=function(a,b){return fd(b,this)};g.Y=function(a,b,c){return gd(b,c,this)};g.Z=function(){return this.first};g.fa=function(){return 1===this.count?M:this.Ia};g.T=function(){return this};g.O=function(a,b){return new od(b,this.first,this.Ia,this.count,this.o)};g.R=function(a,b){return new od(this.l,b,this,this.count+1,null)};od.prototype[Ra]=function(){return pc(this)};
function pd(a){this.l=a;this.i=65937614;this.A=8192}g=pd.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.l};g.da=function(){return null};g.V=function(){return 0};g.$a=function(){return null};g.ab=function(){throw Error("Can't pop empty list");};g.L=function(){return sc};
g.s=function(a,b){return(null!=b?b.i&33554432||b.tc||(b.i?0:w(Mb,b)):w(Mb,b))||Wc(b)?null==H(b):!1};g.W=function(){return this};g.X=function(a,b){return fd(b,this)};g.Y=function(a,b,c){return gd(b,c,this)};g.Z=function(){return null};g.fa=function(){return M};g.T=function(){return null};g.O=function(a,b){return new pd(b)};g.R=function(a,b){return new od(this.l,b,null,1,null)};var M=new pd(null);pd.prototype[Ra]=function(){return pc(this)};
function qd(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;a:{c=0<b.length?new I(b.slice(0),0,null):null;if(c instanceof I&&0===c.j)b=c.c;else b:for(b=[];;)if(null!=c)b.push(c.Z(null)),c=c.da(null);else break b;for(var c=b.length,e=M;;)if(0<c)d=c-1,e=e.R(null,b[c-1]),c=d;else break a}return e}function rd(a,b,c,d){this.l=a;this.first=b;this.Ia=c;this.o=d;this.i=65929452;this.A=8192}g=rd.prototype;g.toString=function(){return ac(this)};
g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.l};g.da=function(){return null==this.Ia?null:H(this.Ia)};g.L=function(){var a=this.o;return null!=a?a:this.o=a=rc(this)};g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(M,this.l)};
g.X=function(a,b){return fd(b,this)};g.Y=function(a,b,c){return gd(b,c,this)};g.Z=function(){return this.first};g.fa=function(){return null==this.Ia?M:this.Ia};g.T=function(){return this};g.O=function(a,b){return new rd(b,this.first,this.Ia,this.o)};g.R=function(a,b){return new rd(null,b,this,null)};rd.prototype[Ra]=function(){return pc(this)};function S(a,b){var c=null==b;return(c?c:null!=b&&(b.i&64||b.Pa))?new rd(null,a,b,null):new rd(null,a,H(b),null)}
function V(a,b,c,d){this.ib=a;this.name=b;this.Ka=c;this.Ua=d;this.i=2153775105;this.A=4096}g=V.prototype;g.toString=function(){return[y(":"),y(this.Ka)].join("")};g.equiv=function(a){return this.s(null,a)};g.s=function(a,b){return b instanceof V?this.Ka===b.Ka:!1};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return G.a(c,this);case 3:return G.f(c,this,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return G.a(c,this)};a.f=function(a,c,d){return G.f(c,this,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};g.b=function(a){return G.a(a,this)};g.a=function(a,b){return G.f(a,this,b)};
g.L=function(){var a=this.Ua;return null!=a?a:this.Ua=a=kc(fc(this.name),ic(this.ib))+2654435769|0};g.N=function(a,b){return C(b,[y(":"),y(this.Ka)].join(""))};function sd(a){if(null!=a&&(a.A&4096||a.Vb))return a.ib;throw Error([y("Doesn't support namespace: "),y(a)].join(""));}
var td=function td(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return td.b(arguments[0]);case 2:return td.a(arguments[0],arguments[1]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};td.b=function(a){if(a instanceof V)return a;if(a instanceof mc)return new V(sd(a),W.b?W.b(a):W.call(null,a),a.Na,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new V(b[0],b[1],a,null):new V(null,b[0],a,null)}return null};
td.a=function(a,b){return new V(a,b,[y(t(a)?[y(a),y("/")].join(""):null),y(b)].join(""),null)};td.F=2;function ud(a,b,c,d){this.l=a;this.Xa=b;this.u=c;this.o=d;this.i=32374988;this.A=1}g=ud.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};function vd(a){null!=a.Xa&&(a.u=a.Xa.B?a.Xa.B():a.Xa.call(null),a.Xa=null);return a.u}
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.l};g.da=function(){Kb(this);return null==this.u?null:N(this.u)};g.L=function(){var a=this.o;return null!=a?a:this.o=a=rc(this)};g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(M,this.l)};
g.X=function(a,b){return fd(b,this)};g.Y=function(a,b,c){return gd(b,c,this)};g.Z=function(){Kb(this);return null==this.u?null:J(this.u)};g.fa=function(){Kb(this);return null!=this.u?L(this.u):M};g.T=function(){vd(this);if(null==this.u)return null;for(var a=this.u;;)if(a instanceof ud)a=vd(a);else return this.u=a,H(this.u)};g.O=function(a,b){return new ud(b,this.Xa,this.u,this.o)};g.R=function(a,b){return S(b,this)};ud.prototype[Ra]=function(){return pc(this)};
function wd(a,b){this.ob=a;this.end=b;this.i=2;this.A=0}wd.prototype.add=function(a){this.ob[this.end]=a;return this.end+=1};wd.prototype.ia=function(){var a=new xd(this.ob,0,this.end);this.ob=null;return a};wd.prototype.V=function(){return this.end};function xd(a,b,c){this.c=a;this.off=b;this.end=c;this.i=524306;this.A=0}g=xd.prototype;g.V=function(){return this.end-this.off};g.C=function(a,b){return this.c[this.off+b]};g.ha=function(a,b,c){return 0<=b&&b<this.end-this.off?this.c[this.off+b]:c};
g.Bb=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new xd(this.c,this.off+1,this.end)};g.X=function(a,b){return Ac(this.c,b,this.c[this.off],this.off+1)};g.Y=function(a,b,c){return Ac(this.c,b,c,this.off)};function yd(a,b,c,d){this.ia=a;this.oa=b;this.l=c;this.o=d;this.i=31850732;this.A=1536}g=yd.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.l};g.da=function(){if(1<$a(this.ia))return new yd(Tb(this.ia),this.oa,this.l,null);var a=Kb(this.oa);return null==a?null:a};g.L=function(){var a=this.o;return null!=a?a:this.o=a=rc(this)};
g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(M,this.l)};g.Z=function(){return A.a(this.ia,0)};g.fa=function(){return 1<$a(this.ia)?new yd(Tb(this.ia),this.oa,this.l,null):null==this.oa?M:this.oa};g.T=function(){return this};g.rb=function(){return this.ia};g.sb=function(){return null==this.oa?M:this.oa};g.O=function(a,b){return new yd(this.ia,this.oa,b,this.o)};g.R=function(a,b){return S(b,this)};g.qb=function(){return null==this.oa?null:this.oa};yd.prototype[Ra]=function(){return pc(this)};
function zd(a,b){return 0===$a(a)?b:new yd(a,b,null,null)}function Bd(a,b){a.add(b)}function Cd(a){for(var b=[];;)if(H(a))b.push(J(a)),a=N(a);else return b}function Dd(a,b){if(Bc(b))return P(b);for(var c=0,d=H(b);;)if(null!=d&&c<a)c+=1,d=N(d);else return c}
var Ed=function Ed(b){return null==b?null:null==N(b)?H(J(b)):S(J(b),Ed(N(b)))},Fd=function Fd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Fd.B();case 1:return Fd.b(arguments[0]);case 2:return Fd.a(arguments[0],arguments[1]);default:return Fd.m(arguments[0],arguments[1],new I(c.slice(2),0,null))}};Fd.B=function(){return new ud(null,function(){return null},null,null)};
Fd.b=function(a){return new ud(null,function(){return a},null,null)};Fd.a=function(a,b){return new ud(null,function(){var c=H(a);return c?Zc(c)?zd(Ub(c),Fd.a(D(c),b)):S(J(c),Fd.a(L(c),b)):b},null,null)};Fd.m=function(a,b,c){return function e(a,b){return new ud(null,function(){var c=H(a);return c?Zc(c)?zd(Ub(c),e(D(c),b)):S(J(c),e(L(c),b)):t(b)?e(J(b),N(b)):null},null,null)}(Fd.a(a,b),c)};Fd.D=function(a){var b=J(a),c=N(a);a=J(c);c=N(c);return Fd.m(b,a,c)};Fd.F=2;
var Gd=function Gd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Gd.B();case 1:return Gd.b(arguments[0]);case 2:return Gd.a(arguments[0],arguments[1]);default:return Gd.m(arguments[0],arguments[1],new I(c.slice(2),0,null))}};Gd.B=function(){return Ob(Jc)};Gd.b=function(a){return a};Gd.a=function(a,b){return Pb(a,b)};Gd.m=function(a,b,c){for(;;)if(a=Pb(a,b),t(c))b=J(c),c=N(c);else return a};
Gd.D=function(a){var b=J(a),c=N(a);a=J(c);c=N(c);return Gd.m(b,a,c)};Gd.F=2;
function Hd(a,b,c){var d=H(c);if(0===b)return a.B?a.B():a.call(null);c=gb(d);var e=hb(d);if(1===b)return a.b?a.b(c):a.b?a.b(c):a.call(null,c);var d=gb(e),f=hb(e);if(2===b)return a.a?a.a(c,d):a.a?a.a(c,d):a.call(null,c,d);var e=gb(f),h=hb(f);if(3===b)return a.f?a.f(c,d,e):a.f?a.f(c,d,e):a.call(null,c,d,e);var f=gb(h),k=hb(h);if(4===b)return a.w?a.w(c,d,e,f):a.w?a.w(c,d,e,f):a.call(null,c,d,e,f);var h=gb(k),l=hb(k);if(5===b)return a.H?a.H(c,d,e,f,h):a.H?a.H(c,d,e,f,h):a.call(null,c,d,e,f,h);var k=gb(l),
m=hb(l);if(6===b)return a.Ba?a.Ba(c,d,e,f,h,k):a.Ba?a.Ba(c,d,e,f,h,k):a.call(null,c,d,e,f,h,k);var l=gb(m),n=hb(m);if(7===b)return a.Ca?a.Ca(c,d,e,f,h,k,l):a.Ca?a.Ca(c,d,e,f,h,k,l):a.call(null,c,d,e,f,h,k,l);var m=gb(n),p=hb(n);if(8===b)return a.Da?a.Da(c,d,e,f,h,k,l,m):a.Da?a.Da(c,d,e,f,h,k,l,m):a.call(null,c,d,e,f,h,k,l,m);var n=gb(p),u=hb(p);if(9===b)return a.Ea?a.Ea(c,d,e,f,h,k,l,m,n):a.Ea?a.Ea(c,d,e,f,h,k,l,m,n):a.call(null,c,d,e,f,h,k,l,m,n);var p=gb(u),v=hb(u);if(10===b)return a.qa?a.qa(c,
d,e,f,h,k,l,m,n,p):a.qa?a.qa(c,d,e,f,h,k,l,m,n,p):a.call(null,c,d,e,f,h,k,l,m,n,p);var u=gb(v),z=hb(v);if(11===b)return a.ra?a.ra(c,d,e,f,h,k,l,m,n,p,u):a.ra?a.ra(c,d,e,f,h,k,l,m,n,p,u):a.call(null,c,d,e,f,h,k,l,m,n,p,u);var v=gb(z),B=hb(z);if(12===b)return a.sa?a.sa(c,d,e,f,h,k,l,m,n,p,u,v):a.sa?a.sa(c,d,e,f,h,k,l,m,n,p,u,v):a.call(null,c,d,e,f,h,k,l,m,n,p,u,v);var z=gb(B),F=hb(B);if(13===b)return a.ta?a.ta(c,d,e,f,h,k,l,m,n,p,u,v,z):a.ta?a.ta(c,d,e,f,h,k,l,m,n,p,u,v,z):a.call(null,c,d,e,f,h,k,l,
m,n,p,u,v,z);var B=gb(F),K=hb(F);if(14===b)return a.ua?a.ua(c,d,e,f,h,k,l,m,n,p,u,v,z,B):a.ua?a.ua(c,d,e,f,h,k,l,m,n,p,u,v,z,B):a.call(null,c,d,e,f,h,k,l,m,n,p,u,v,z,B);var F=gb(K),Q=hb(K);if(15===b)return a.va?a.va(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F):a.va?a.va(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F):a.call(null,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F);var K=gb(Q),ba=hb(Q);if(16===b)return a.wa?a.wa(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K):a.wa?a.wa(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K):a.call(null,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K);var Q=
gb(ba),sa=hb(ba);if(17===b)return a.xa?a.xa(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q):a.xa?a.xa(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q):a.call(null,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q);var ba=gb(sa),Db=hb(sa);if(18===b)return a.ya?a.ya(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba):a.ya?a.ya(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba):a.call(null,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba);sa=gb(Db);Db=hb(Db);if(19===b)return a.za?a.za(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba,sa):a.za?a.za(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba,sa):a.call(null,
c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba,sa);var E=gb(Db);hb(Db);if(20===b)return a.Aa?a.Aa(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba,sa,E):a.Aa?a.Aa(c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba,sa,E):a.call(null,c,d,e,f,h,k,l,m,n,p,u,v,z,B,F,K,Q,ba,sa,E);throw Error("Only up to 20 arguments supported on functions");}
function Qc(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Id(arguments[0],arguments[1]);case 3:return Jd(arguments[0],arguments[1],arguments[2]);case 4:b=arguments[0];c=S(arguments[1],S(arguments[2],arguments[3]));d=b.F;if(b.D)var e=Dd(d+1,c),b=e<=d?Hd(b,e,c):b.D(c);else b=b.apply(b,Cd(c));return b;case 5:return Kd(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:return Ld(arguments[0],arguments[1],arguments[2],
arguments[3],arguments[4],new I(b.slice(5),0,null))}}function Id(a,b){var c=a.F;if(a.D){var d=Dd(c+1,b);return d<=c?Hd(a,d,b):a.D(b)}return a.apply(a,Cd(b))}function Jd(a,b,c){b=S(b,c);c=a.F;if(a.D){var d=Dd(c+1,b);return d<=c?Hd(a,d,b):a.D(b)}return a.apply(a,Cd(b))}function Kd(a,b,c,d,e){b=S(b,S(c,S(d,e)));c=a.F;return a.D?(d=Dd(c+1,b),d<=c?Hd(a,d,b):a.D(b)):a.apply(a,Cd(b))}
function Ld(a,b,c,d,e,f){b=S(b,S(c,S(d,S(e,Ed(f)))));c=a.F;return a.D?(d=Dd(c+1,b),d<=c?Hd(a,d,b):a.D(b)):a.apply(a,Cd(b))}
var Md=function Md(){"undefined"===typeof Aa&&(Aa=function(b,c){this.jc=b;this.ic=c;this.i=393216;this.A=0},Aa.prototype.O=function(b,c){return new Aa(this.jc,c)},Aa.prototype.M=function(){return this.ic},Aa.prototype.ea=function(){return!1},Aa.prototype.next=function(){return Error("No such element")},Aa.prototype.remove=function(){return Error("Unsupported operation")},Aa.xc=function(){return new X(null,2,5,Y,[Rc(Nd,new r(null,1,[Od,qd(Pd,qd(Jc))],null)),Qd],null)},Aa.Gb=!0,Aa.mb="cljs.core/t_cljs$core10603",
Aa.cc=function(b){return C(b,"cljs.core/t_cljs$core10603")});return new Aa(Md,Rd)};function Sd(a,b){for(;;){if(null==H(b))return!0;var c;c=J(b);c=a.b?a.b(c):a.call(null,c);if(t(c)){c=a;var d=N(b);a=c;b=d}else return!1}}function Td(a,b){for(;;)if(H(b)){var c;c=J(b);c=a.b?a.b(c):a.call(null,c);if(t(c))return c;c=a;var d=N(b);a=c;b=d}else return null}
function Ud(a){if("number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10))return 0===(a&1);throw Error([y("Argument must be an integer: "),y(a)].join(""));}
function Vd(a,b){var c=Wd;return function(){function d(d,e,f){return c.H?c.H(a,b,d,e,f):c.call(null,a,b,d,e,f)}function e(d,e){return c.w?c.w(a,b,d,e):c.call(null,a,b,d,e)}function f(d){return c.f?c.f(a,b,d):c.call(null,a,b,d)}function h(){return c.a?c.a(a,b):c.call(null,a,b)}var k=null,l=function(){function d(a,b,c,f){var h=null;if(3<arguments.length){for(var h=0,k=Array(arguments.length-3);h<k.length;)k[h]=arguments[h+3],++h;h=new I(k,0)}return e.call(this,a,b,c,h)}function e(d,f,h,k){return Ld(c,
a,b,d,f,T([h,k],0))}d.F=3;d.D=function(a){var b=J(a);a=N(a);var c=J(a);a=N(a);var d=J(a);a=L(a);return e(b,c,d,a)};d.m=e;return d}(),k=function(a,b,c,k){switch(arguments.length){case 0:return h.call(this);case 1:return f.call(this,a);case 2:return e.call(this,a,b);case 3:return d.call(this,a,b,c);default:var v=null;if(3<arguments.length){for(var v=0,z=Array(arguments.length-3);v<z.length;)z[v]=arguments[v+3],++v;v=new I(z,0)}return l.m(a,b,c,v)}throw Error("Invalid arity: "+arguments.length);};k.F=
3;k.D=l.D;k.B=h;k.b=f;k.a=e;k.f=d;k.m=l.m;return k}()}function Xd(a,b,c,d){this.state=a;this.l=b;this.pc=c;this.Kb=d;this.A=16386;this.i=6455296}g=Xd.prototype;g.equiv=function(a){return this.s(null,a)};g.s=function(a,b){return this===b};g.Mb=function(){return this.state};g.M=function(){return this.l};
g.Eb=function(a,b,c){a=H(this.Kb);for(var d=null,e=0,f=0;;)if(f<e){var h=d.C(null,f),k=U(h,0,null),h=U(h,1,null);h.w?h.w(k,this,b,c):h.call(null,k,this,b,c);f+=1}else if(a=H(a))Zc(a)?(d=Ub(a),a=D(a),k=d,e=P(d),d=k):(d=J(a),k=U(d,0,null),h=U(d,1,null),h.w?h.w(k,this,b,c):h.call(null,k,this,b,c),a=N(a),d=null,e=0),f=0;else return null};g.L=function(){return this[da]||(this[da]=++ea)};
function Yd(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Zd(arguments[0]);default:return c=arguments[0],b=new I(b.slice(1),0,null),d=null!=b&&(b.i&64||b.Pa)?Id($d,b):b,b=G.a(d,Ka),d=G.a(d,ae),new Xd(c,b,d,null)}}function Zd(a){return new Xd(a,null,null,null)}
function be(a,b){if(a instanceof Xd){var c=a.pc;if(null!=c&&!t(c.b?c.b(b):c.call(null,b)))throw Error("Validator rejected reference state");c=a.state;a.state=b;null!=a.Kb&&Nb(a,c,b);return b}return Xb(a,b)}
var ce=function ce(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return ce.a(arguments[0],arguments[1]);case 3:return ce.f(arguments[0],arguments[1],arguments[2]);case 4:return ce.w(arguments[0],arguments[1],arguments[2],arguments[3]);default:return ce.m(arguments[0],arguments[1],arguments[2],arguments[3],new I(c.slice(4),0,null))}};
ce.a=function(a,b){var c;a instanceof Xd?(c=a.state,c=b.b?b.b(c):b.call(null,c),c=be(a,c)):c=Yb.a(a,b);return c};ce.f=function(a,b,c){if(a instanceof Xd){var d=a.state;b=b.a?b.a(d,c):b.call(null,d,c);a=be(a,b)}else a=Yb.f(a,b,c);return a};ce.w=function(a,b,c,d){if(a instanceof Xd){var e=a.state;b=b.f?b.f(e,c,d):b.call(null,e,c,d);a=be(a,b)}else a=Yb.w(a,b,c,d);return a};ce.m=function(a,b,c,d,e){return a instanceof Xd?be(a,Kd(b,a.state,c,d,e)):Yb.H(a,b,c,d,e)};
ce.D=function(a){var b=J(a),c=N(a);a=J(c);var d=N(c),c=J(d),e=N(d),d=J(e),e=N(e);return ce.m(b,a,c,d,e)};ce.F=4;
var de=function de(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return de.b(arguments[0]);case 2:return de.a(arguments[0],arguments[1]);case 3:return de.f(arguments[0],arguments[1],arguments[2]);case 4:return de.w(arguments[0],arguments[1],arguments[2],arguments[3]);default:return de.m(arguments[0],arguments[1],arguments[2],arguments[3],new I(c.slice(4),0,null))}};
de.b=function(a){return function(b){return function(){function c(c,d){var e=a.b?a.b(d):a.call(null,d);return b.a?b.a(c,e):b.call(null,c,e)}function d(a){return b.b?b.b(a):b.call(null,a)}function e(){return b.B?b.B():b.call(null)}var f=null,h=function(){function c(a,b,e){var f=null;if(2<arguments.length){for(var f=0,h=Array(arguments.length-2);f<h.length;)h[f]=arguments[f+2],++f;f=new I(h,0)}return d.call(this,a,b,f)}function d(c,e,f){e=Jd(a,e,f);return b.a?b.a(c,e):b.call(null,c,e)}c.F=2;c.D=function(a){var b=
J(a);a=N(a);var c=J(a);a=L(a);return d(b,c,a)};c.m=d;return c}(),f=function(a,b,f){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var n=null;if(2<arguments.length){for(var n=0,p=Array(arguments.length-2);n<p.length;)p[n]=arguments[n+2],++n;n=new I(p,0)}return h.m(a,b,n)}throw Error("Invalid arity: "+arguments.length);};f.F=2;f.D=h.D;f.B=e;f.b=d;f.a=c;f.m=h.m;return f}()}};
de.a=function(a,b){return new ud(null,function(){var c=H(b);if(c){if(Zc(c)){for(var d=Ub(c),e=P(d),f=new wd(Array(e),0),h=0;;)if(h<e)Bd(f,function(){var b=A.a(d,h);return a.b?a.b(b):a.call(null,b)}()),h+=1;else break;return zd(f.ia(),de.a(a,D(c)))}return S(function(){var b=J(c);return a.b?a.b(b):a.call(null,b)}(),de.a(a,L(c)))}return null},null,null)};
de.f=function(a,b,c){return new ud(null,function(){var d=H(b),e=H(c);if(d&&e){var f=S,h;h=J(d);var k=J(e);h=a.a?a.a(h,k):a.call(null,h,k);d=f(h,de.f(a,L(d),L(e)))}else d=null;return d},null,null)};de.w=function(a,b,c,d){return new ud(null,function(){var e=H(b),f=H(c),h=H(d);if(e&&f&&h){var k=S,l;l=J(e);var m=J(f),n=J(h);l=a.f?a.f(l,m,n):a.call(null,l,m,n);e=k(l,de.w(a,L(e),L(f),L(h)))}else e=null;return e},null,null)};
de.m=function(a,b,c,d,e){var f=function k(a){return new ud(null,function(){var b=de.a(H,a);return Sd(id,b)?S(de.a(J,b),k(de.a(L,b))):null},null,null)};return de.a(function(){return function(b){return Id(a,b)}}(f),f(Ic.m(e,d,T([c,b],0))))};de.D=function(a){var b=J(a),c=N(a);a=J(c);var d=N(c),c=J(d),e=N(d),d=J(e),e=N(e);return de.m(b,a,c,d,e)};de.F=4;
function ee(a,b){if("number"!==typeof a)throw Error("Assert failed: (number? n)");return new ud(null,function(){if(0<a){var c=H(b);return c?S(J(c),ee(a-1,L(c))):null}return null},null,null)}function fe(a,b){if("number"!==typeof a)throw Error("Assert failed: (number? n)");return new ud(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=H(b);if(0<a&&e){var f=a-1,e=L(e);a=f;b=e}else return e}}),null,null)}
var ge=function ge(b,c){return S(c,new ud(null,function(){return ge(b,b.b?b.b(c):b.call(null,c))},null,null))};function he(a,b){return new ud(null,function(){var c=H(b);if(c){if(Zc(c)){for(var d=Ub(c),e=P(d),f=new wd(Array(e),0),h=0;;)if(h<e){var k;k=A.a(d,h);k=a.b?a.b(k):a.call(null,k);t(k)&&(k=A.a(d,h),f.add(k));h+=1}else break;return zd(f.ia(),he(a,D(c)))}d=J(c);c=L(c);return t(a.b?a.b(d):a.call(null,d))?S(d,he(a,c)):he(a,c)}return null},null,null)}
var ie=function ie(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return ie.a(arguments[0],arguments[1]);case 3:return ie.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};ie.a=function(a,b){return null!=a?null!=a&&(a.A&4||a.Nb)?Rc(Qb(Xa(Pb,Ob(a),b)),Sc(a)):Xa(db,a,b):Xa(Ic,M,b)};ie.f=function(a,b,c){return null!=a&&(a.A&4||a.Nb)?Rc(Qb(jd(b,Gd,Ob(a),c)),Sc(a)):jd(b,Ic,a,c)};
ie.F=3;function je(a,b,c){return new ud(null,function(){var d=H(c);if(d){var e=ee(a,d);return a===P(e)?S(e,je(a,b,fe(b,d))):null}return null},null,null)}var ke=function ke(b,c,d){var e=H(c);c=J(e);return(e=N(e))?Lc.f(b,c,ke(G.a(b,c),e,d)):Lc.f(b,c,d)};function le(a,b){this.G=a;this.c=b}function me(a){return new le(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}
function ne(a){return new le(a.G,Ta(a.c))}function oe(a){a=a.h;return 32>a?0:a-1>>>5<<5}function pe(a,b,c){for(;;){if(0===b)return c;var d=me(a);d.c[0]=c;c=d;b-=5}}var qe=function qe(b,c,d,e){var f=ne(d),h=b.h-1>>>c&31;5===c?f.c[h]=e:(d=d.c[h],b=null!=d?qe(b,c-5,d,e):pe(null,c-5,e),f.c[h]=b);return f};function se(a,b){throw Error([y("No item "),y(a),y(" in vector of length "),y(b)].join(""));}
function te(a,b){if(b>=oe(a))return a.U;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.c[b>>>d&31],d=e;else return c.c}function ue(a,b){return 0<=b&&b<a.h?te(a,b):se(b,a.h)}var ve=function ve(b,c,d,e,f){var h=ne(d);if(0===c)h.c[e&31]=f;else{var k=e>>>c&31;b=ve(b,c-5,d.c[k],e,f);h.c[k]=b}return h},we=function we(b,c,d){var e=b.h-2>>>c&31;if(5<c){b=we(b,c-5,d.c[e]);if(null==b&&0===e)return null;d=ne(d);d.c[e]=b;return d}if(0===e)return null;d=ne(d);d.c[e]=null;return d};
function xe(a,b,c,d,e,f){this.j=a;this.nb=b;this.c=c;this.ka=d;this.start=e;this.end=f}xe.prototype.ea=function(){return this.j<this.end};xe.prototype.next=function(){32===this.j-this.nb&&(this.c=te(this.ka,this.j),this.nb+=32);var a=this.c[this.j&31];this.j+=1;return a};function X(a,b,c,d,e,f){this.l=a;this.h=b;this.shift=c;this.root=d;this.U=e;this.o=f;this.i=167668511;this.A=8196}g=X.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.K=function(a,b){return lb.f(this,b,null)};g.J=function(a,b,c){return"number"===typeof b?A.f(this,b,c):c};g.C=function(a,b){return ue(this,b)[b&31]};g.ha=function(a,b,c){return 0<=b&&b<this.h?te(this,b)[b&31]:c};
g.wb=function(a,b,c){if(0<=b&&b<this.h)return oe(this)<=b?(a=Ta(this.U),a[b&31]=c,new X(this.l,this.h,this.shift,this.root,a,null)):new X(this.l,this.h,this.shift,ve(this,this.shift,this.root,b,c),this.U,null);if(b===this.h)return db(this,c);throw Error([y("Index "),y(b),y(" out of bounds  [0,"),y(this.h),y("]")].join(""));};g.Fa=function(){var a=this.h;return new xe(0,0,0<P(this)?te(this,0):null,this,0,a)};g.M=function(){return this.l};g.V=function(){return this.h};
g.ub=function(){return A.a(this,0)};g.vb=function(){return A.a(this,1)};g.$a=function(){return 0<this.h?A.a(this,this.h-1):null};
g.ab=function(){if(0===this.h)throw Error("Can't pop empty vector");if(1===this.h)return Eb(Jc,this.l);if(1<this.h-oe(this))return new X(this.l,this.h-1,this.shift,this.root,this.U.slice(0,-1),null);var a=te(this,this.h-2),b=we(this,this.shift,this.root),b=null==b?Y:b,c=this.h-1;return 5<this.shift&&null==b.c[1]?new X(this.l,c,this.shift-5,b.c[0],a,null):new X(this.l,c,this.shift,b,a,null)};g.L=function(){var a=this.o;return null!=a?a:this.o=a=rc(this)};
g.s=function(a,b){if(b instanceof X)if(this.h===P(b))for(var c=Zb(this),d=Zb(b);;)if(t(c.ea())){var e=c.next(),f=d.next();if(!nc.a(e,f))return!1}else return!0;else return!1;else return Gc(this,b)};g.Va=function(){return new ye(this.h,this.shift,ze.b?ze.b(this.root):ze.call(null,this.root),Ae.b?Ae.b(this.U):Ae.call(null,this.U))};g.W=function(){return Rc(Jc,this.l)};g.X=function(a,b){return wc(this,b)};
g.Y=function(a,b,c){a=0;for(var d=c;;)if(a<this.h){var e=te(this,a);c=e.length;a:for(var f=0;;)if(f<c)var h=e[f],d=b.a?b.a(d,h):b.call(null,d,h),f=f+1;else{e=d;break a}a+=c;d=e}else return d};g.Za=function(a,b,c){if("number"===typeof b)return yb(this,b,c);throw Error("Vector's key for assoc must be a number.");};
g.T=function(){if(0===this.h)return null;if(32>=this.h)return new I(this.U,0,null);var a;a:{a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.c[0];else{a=a.c;break a}}return Be?Be(this,a,0,0):Ce.call(null,this,a,0,0)};g.O=function(a,b){return new X(b,this.h,this.shift,this.root,this.U,this.o)};
g.R=function(a,b){if(32>this.h-oe(this)){for(var c=this.U.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.U[e],e+=1;else break;d[c]=b;return new X(this.l,this.h+1,this.shift,this.root,d,null)}c=(d=this.h>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=me(null),d.c[0]=this.root,e=pe(null,this.shift,new le(null,this.U)),d.c[1]=e):d=qe(this,this.shift,this.root,new le(null,this.U));return new X(this.l,this.h+1,c,d,[b],null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.C(null,c);case 3:return this.ha(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.C(null,c)};a.f=function(a,c,d){return this.ha(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};g.b=function(a){return this.C(null,a)};g.a=function(a,b){return this.ha(null,a,b)};
var Y=new le(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),Jc=new X(null,0,5,Y,[],sc);X.prototype[Ra]=function(){return pc(this)};function De(a){if(Oa(a))a:{var b=a.length;if(32>b)a=new X(null,b,5,Y,a,null);else for(var c=32,d=(new X(null,32,5,Y,a.slice(0,32),null)).Va(null);;)if(c<b)var e=c+1,d=Gd.a(d,a[c]),c=e;else{a=Qb(d);break a}}else a=Qb(Xa(Pb,Ob(Jc),a));return a}
function Ee(a,b,c,d,e,f){this.ga=a;this.node=b;this.j=c;this.off=d;this.l=e;this.o=f;this.i=32375020;this.A=1536}g=Ee.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.l};g.da=function(){if(this.off+1<this.node.length){var a;a=this.ga;var b=this.node,c=this.j,d=this.off+1;a=Be?Be(a,b,c,d):Ce.call(null,a,b,c,d);return null==a?null:a}return Vb(this)};
g.L=function(){var a=this.o;return null!=a?a:this.o=a=rc(this)};g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(Jc,this.l)};g.X=function(a,b){var c;c=this.ga;var d=this.j+this.off,e=P(this.ga);c=Fe?Fe(c,d,e):Ge.call(null,c,d,e);return wc(c,b)};g.Y=function(a,b,c){a=this.ga;var d=this.j+this.off,e=P(this.ga);a=Fe?Fe(a,d,e):Ge.call(null,a,d,e);return xc(a,b,c)};g.Z=function(){return this.node[this.off]};
g.fa=function(){if(this.off+1<this.node.length){var a;a=this.ga;var b=this.node,c=this.j,d=this.off+1;a=Be?Be(a,b,c,d):Ce.call(null,a,b,c,d);return null==a?M:a}return D(this)};g.T=function(){return this};g.rb=function(){var a=this.node;return new xd(a,this.off,a.length)};g.sb=function(){var a=this.j+this.node.length;if(a<$a(this.ga)){var b=this.ga,c=te(this.ga,a);return Be?Be(b,c,a,0):Ce.call(null,b,c,a,0)}return M};
g.O=function(a,b){return He?He(this.ga,this.node,this.j,this.off,b):Ce.call(null,this.ga,this.node,this.j,this.off,b)};g.R=function(a,b){return S(b,this)};g.qb=function(){var a=this.j+this.node.length;if(a<$a(this.ga)){var b=this.ga,c=te(this.ga,a);return Be?Be(b,c,a,0):Ce.call(null,b,c,a,0)}return null};Ee.prototype[Ra]=function(){return pc(this)};
function Ce(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 3:return b=arguments[0],c=arguments[1],d=arguments[2],new Ee(b,ue(b,c),c,d,null,null);case 4:return Be(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return He(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function Be(a,b,c,d){return new Ee(a,b,c,d,null,null)}
function He(a,b,c,d,e){return new Ee(a,b,c,d,e,null)}function Ie(a,b,c,d,e){this.l=a;this.ka=b;this.start=c;this.end=d;this.o=e;this.i=167666463;this.A=8192}g=Ie.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.K=function(a,b){return lb.f(this,b,null)};g.J=function(a,b,c){return"number"===typeof b?A.f(this,b,c):c};g.C=function(a,b){return 0>b||this.end<=this.start+b?se(b,this.end-this.start):A.a(this.ka,this.start+b)};
g.ha=function(a,b,c){return 0>b||this.end<=this.start+b?c:A.f(this.ka,this.start+b,c)};g.wb=function(a,b,c){var d=this.start+b;a=this.l;c=Lc.f(this.ka,d,c);b=this.start;var e=this.end,d=d+1,d=e>d?e:d;return Je.H?Je.H(a,c,b,d,null):Je.call(null,a,c,b,d,null)};g.M=function(){return this.l};g.V=function(){return this.end-this.start};g.$a=function(){return A.a(this.ka,this.end-1)};
g.ab=function(){if(this.start===this.end)throw Error("Can't pop empty vector");var a=this.l,b=this.ka,c=this.start,d=this.end-1;return Je.H?Je.H(a,b,c,d,null):Je.call(null,a,b,c,d,null)};g.L=function(){var a=this.o;return null!=a?a:this.o=a=rc(this)};g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(Jc,this.l)};g.X=function(a,b){return wc(this,b)};g.Y=function(a,b,c){return xc(this,b,c)};
g.Za=function(a,b,c){if("number"===typeof b)return yb(this,b,c);throw Error("Subvec's key for assoc must be a number.");};g.T=function(){var a=this;return function(b){return function d(e){return e===a.end?null:S(A.a(a.ka,e),new ud(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};g.O=function(a,b){return Je.H?Je.H(b,this.ka,this.start,this.end,this.o):Je.call(null,b,this.ka,this.start,this.end,this.o)};
g.R=function(a,b){var c=this.l,d=yb(this.ka,this.end,b),e=this.start,f=this.end+1;return Je.H?Je.H(c,d,e,f,null):Je.call(null,c,d,e,f,null)};g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.C(null,c);case 3:return this.ha(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.C(null,c)};a.f=function(a,c,d){return this.ha(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};
g.b=function(a){return this.C(null,a)};g.a=function(a,b){return this.ha(null,a,b)};Ie.prototype[Ra]=function(){return pc(this)};function Je(a,b,c,d,e){for(;;)if(b instanceof Ie)c=b.start+c,d=b.start+d,b=b.ka;else{var f=P(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new Ie(a,b,c,d,e)}}
function Ge(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return b=arguments[0],Fe(b,arguments[1],P(b));case 3:return Fe(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function Fe(a,b,c){return Je(null,a,b,c,null)}function Ke(a,b){return a===b.G?b:new le(a,Ta(b.c))}function ze(a){return new le({},Ta(a.c))}
function Ae(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];ad(a,0,b,0,a.length);return b}var Le=function Le(b,c,d,e){d=Ke(b.root.G,d);var f=b.h-1>>>c&31;if(5===c)b=e;else{var h=d.c[f];b=null!=h?Le(b,c-5,h,e):pe(b.root.G,c-5,e)}d.c[f]=b;return d};function ye(a,b,c,d){this.h=a;this.shift=b;this.root=c;this.U=d;this.A=88;this.i=275}g=ye.prototype;
g.cb=function(a,b){if(this.root.G){if(32>this.h-oe(this))this.U[this.h&31]=b;else{var c=new le(this.root.G,this.U),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.U=d;if(this.h>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=pe(this.root.G,this.shift,c);this.root=new le(this.root.G,d);this.shift=e}else this.root=Le(this,this.shift,this.root,c)}this.h+=1;return this}throw Error("conj! after persistent!");};g.eb=function(){if(this.root.G){this.root.G=null;var a=this.h-oe(this),b=Array(a);ad(this.U,0,b,0,a);return new X(null,this.h,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
g.bb=function(a,b,c){if("number"===typeof b)return Sb(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
g.Db=function(a,b,c){var d=this;if(d.root.G){if(0<=b&&b<d.h)return oe(this)<=b?d.U[b&31]=c:(a=function(){return function f(a,k){var l=Ke(d.root.G,k);if(0===a)l.c[b&31]=c;else{var m=b>>>a&31,n=f(a-5,l.c[m]);l.c[m]=n}return l}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.h)return Pb(this,c);throw Error([y("Index "),y(b),y(" out of bounds for TransientVector of length"),y(d.h)].join(""));}throw Error("assoc! after persistent!");};
g.V=function(){if(this.root.G)return this.h;throw Error("count after persistent!");};g.C=function(a,b){if(this.root.G)return ue(this,b)[b&31];throw Error("nth after persistent!");};g.ha=function(a,b,c){return 0<=b&&b<this.h?A.a(this,b):c};g.K=function(a,b){return lb.f(this,b,null)};g.J=function(a,b,c){return"number"===typeof b?A.f(this,b,c):c};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.K(null,c);case 3:return this.J(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.K(null,c)};a.f=function(a,c,d){return this.J(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};g.b=function(a){return this.K(null,a)};g.a=function(a,b){return this.J(null,a,b)};function Me(){this.i=2097152;this.A=0}
Me.prototype.equiv=function(a){return this.s(null,a)};Me.prototype.s=function(){return!1};var Ne=new Me;function Oe(a,b){return dd(Xc(b)?P(a)===P(b)?Sd(function(a){return nc.a(G.f(b,J(a),Ne),J(N(a)))},a):null:null)}function Pe(a){this.u=a}Pe.prototype.next=function(){if(null!=this.u){var a=J(this.u),b=U(a,0,null),a=U(a,1,null);this.u=N(this.u);return{value:[b,a],done:!1}}return{value:null,done:!0}};function Qe(a){this.u=a}
Qe.prototype.next=function(){if(null!=this.u){var a=J(this.u);this.u=N(this.u);return{value:[a,a],done:!1}}return{value:null,done:!0}};
function Re(a,b){var c;if(b instanceof V)a:{c=a.length;for(var d=b.Ka,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof V&&d===a[e].Ka){c=e;break a}e+=2}}else if("string"==typeof b||"number"===typeof b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(b===a[d]){c=d;break a}d+=2}else if(b instanceof mc)a:for(c=a.length,d=b.Na,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof mc&&d===a[e].Na){c=e;break a}e+=2}else if(null==b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(null==a[d]){c=d;break a}d+=2}else a:for(c=
a.length,d=0;;){if(c<=d){c=-1;break a}if(nc.a(b,a[d])){c=d;break a}d+=2}return c}function Se(a,b,c){this.c=a;this.j=b;this.aa=c;this.i=32374990;this.A=0}g=Se.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.aa};g.da=function(){return this.j<this.c.length-2?new Se(this.c,this.j+2,this.aa):null};g.V=function(){return(this.c.length-this.j)/2};g.L=function(){return rc(this)};
g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(M,this.aa)};g.X=function(a,b){return fd(b,this)};g.Y=function(a,b,c){return gd(b,c,this)};g.Z=function(){return new X(null,2,5,Y,[this.c[this.j],this.c[this.j+1]],null)};g.fa=function(){return this.j<this.c.length-2?new Se(this.c,this.j+2,this.aa):M};g.T=function(){return this};g.O=function(a,b){return new Se(this.c,this.j,b)};g.R=function(a,b){return S(b,this)};Se.prototype[Ra]=function(){return pc(this)};
function Te(a,b,c){this.c=a;this.j=b;this.h=c}Te.prototype.ea=function(){return this.j<this.h};Te.prototype.next=function(){var a=new X(null,2,5,Y,[this.c[this.j],this.c[this.j+1]],null);this.j+=2;return a};function r(a,b,c,d){this.l=a;this.h=b;this.c=c;this.o=d;this.i=16647951;this.A=8196}g=r.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};g.keys=function(){return pc(Ue.b?Ue.b(this):Ue.call(null,this))};g.entries=function(){return new Pe(H(H(this)))};
g.values=function(){return pc(Ve.b?Ve.b(this):Ve.call(null,this))};g.has=function(a){return ed(this,a)};g.get=function(a,b){return this.J(null,a,b)};g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.C(null,e),h=U(f,0,null),f=U(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=H(b))Zc(b)?(c=Ub(b),b=D(b),h=c,d=P(c),c=h):(c=J(b),h=U(c,0,null),f=U(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=N(b),c=null,d=0),e=0;else return null};g.K=function(a,b){return lb.f(this,b,null)};
g.J=function(a,b,c){a=Re(this.c,b);return-1===a?c:this.c[a+1]};g.Fa=function(){return new Te(this.c,0,2*this.h)};g.M=function(){return this.l};g.V=function(){return this.h};g.L=function(){var a=this.o;return null!=a?a:this.o=a=tc(this)};g.s=function(a,b){if(null!=b&&(b.i&1024||b.Sb)){var c=this.c.length;if(this.h===b.V(null))for(var d=0;;)if(d<c){var e=b.J(null,this.c[d],bd);if(e!==bd)if(nc.a(this.c[d+1],e))d+=2;else return!1;else return!1}else return!0;else return!1}else return Oe(this,b)};
g.Va=function(){return new We({},this.c.length,Ta(this.c))};g.W=function(){return Eb(Rd,this.l)};g.X=function(a,b){return fd(b,this)};g.Y=function(a,b,c){return gd(b,c,this)};g.tb=function(a,b){if(0<=Re(this.c,b)){var c=this.c.length,d=c-2;if(0===d)return bb(this);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new r(this.l,this.h-1,d,null);nc.a(b,this.c[e])||(d[f]=this.c[e],d[f+1]=this.c[e+1],f+=2);e+=2}}else return this};
g.Za=function(a,b,c){a=Re(this.c,b);if(-1===a){if(this.h<Xe){a=this.c;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new r(this.l,this.h+1,e,null)}return Eb(nb(ie.a(Mc,this),b,c),this.l)}if(c===this.c[a+1])return this;b=Ta(this.c);b[a+1]=c;return new r(this.l,this.h,b,null)};g.pb=function(a,b){return-1!==Re(this.c,b)};g.T=function(){var a=this.c;return 0<=a.length-2?new Se(a,0,null):null};g.O=function(a,b){return new r(b,this.h,this.c,this.o)};
g.R=function(a,b){if(Yc(b))return nb(this,A.a(b,0),A.a(b,1));for(var c=this,d=H(b);;){if(null==d)return c;var e=J(d);if(Yc(e))c=nb(c,A.a(e,0),A.a(e,1)),d=N(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.K(null,c);case 3:return this.J(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.K(null,c)};a.f=function(a,c,d){return this.J(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};g.b=function(a){return this.K(null,a)};g.a=function(a,b){return this.J(null,a,b)};var Rd=new r(null,0,[],uc),Xe=8;
function Ye(a){for(var b=[],c=0;;)if(c<a.length){var d=a[c],e=a[c+1];-1===Re(b,d)&&(b.push(d),b.push(e));c+=2}else break;return new r(null,b.length/2,b,null)}r.prototype[Ra]=function(){return pc(this)};function We(a,b,c){this.Wa=a;this.Sa=b;this.c=c;this.i=258;this.A=56}g=We.prototype;g.V=function(){if(t(this.Wa))return md(this.Sa);throw Error("count after persistent!");};g.K=function(a,b){return lb.f(this,b,null)};
g.J=function(a,b,c){if(t(this.Wa))return a=Re(this.c,b),-1===a?c:this.c[a+1];throw Error("lookup after persistent!");};g.cb=function(a,b){if(t(this.Wa)){if(null!=b?b.i&2048||b.Tb||(b.i?0:w(qb,b)):w(qb,b))return Rb(this,Ze.b?Ze.b(b):Ze.call(null,b),$e.b?$e.b(b):$e.call(null,b));for(var c=H(b),d=this;;){var e=J(c);if(t(e))c=N(c),d=Rb(d,Ze.b?Ze.b(e):Ze.call(null,e),$e.b?$e.b(e):$e.call(null,e));else return d}}else throw Error("conj! after persistent!");};
g.eb=function(){if(t(this.Wa))return this.Wa=!1,new r(null,md(this.Sa),this.c,null);throw Error("persistent! called twice");};g.bb=function(a,b,c){if(t(this.Wa)){a=Re(this.c,b);if(-1===a){if(this.Sa+2<=2*Xe)return this.Sa+=2,this.c.push(b),this.c.push(c),this;a=af.a?af.a(this.Sa,this.c):af.call(null,this.Sa,this.c);return Rb(a,b,c)}c!==this.c[a+1]&&(this.c[a+1]=c);return this}throw Error("assoc! after persistent!");};
function af(a,b){for(var c=Ob(Mc),d=0;;)if(d<a)c=Rb(c,b[d],b[d+1]),d+=2;else return c}function bf(){this.pa=!1}function cf(a,b){return a===b?!0:a===b||a instanceof V&&b instanceof V&&a.Ka===b.Ka?!0:nc.a(a,b)}function df(a,b,c){a=Ta(a);a[b]=c;return a}function ef(a,b){var c=Array(a.length-2);ad(a,0,c,0,2*b);ad(a,2*(b+1),c,2*b,c.length-2*b);return c}function ff(a,b,c,d){a=a.Qa(b);a.c[c]=d;return a}function gf(a,b,c,d){this.c=a;this.j=b;this.hb=c;this.na=d}
gf.prototype.advance=function(){for(var a=this.c.length;;)if(this.j<a){var b=this.c[this.j],c=this.c[this.j+1];null!=b?b=this.hb=new X(null,2,5,Y,[b,c],null):null!=c?(b=Zb(c),b=b.ea()?this.na=b:!1):b=!1;this.j+=2;if(b)return!0}else return!1};gf.prototype.ea=function(){var a=null!=this.hb;return a?a:(a=null!=this.na)?a:this.advance()};
gf.prototype.next=function(){if(null!=this.hb){var a=this.hb;this.hb=null;return a}if(null!=this.na)return a=this.na.next(),this.na.ea()||(this.na=null),a;if(this.advance())return this.next();throw Error("No such element");};gf.prototype.remove=function(){return Error("Unsupported operation")};function hf(a,b,c){this.G=a;this.I=b;this.c=c}g=hf.prototype;g.Qa=function(a){if(a===this.G)return this;var b=nd(this.I),c=Array(0>b?4:2*(b+1));ad(this.c,0,c,0,2*b);return new hf(a,this.I,c)};
g.fb=function(){return jf?jf(this.c):kf.call(null,this.c)};g.La=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.I&e))return d;var f=nd(this.I&e-1),e=this.c[2*f],f=this.c[2*f+1];return null==e?f.La(a+5,b,c,d):cf(c,e)?f:d};
g.ma=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),k=nd(this.I&h-1);if(0===(this.I&h)){var l=nd(this.I);if(2*l<this.c.length){a=this.Qa(a);b=a.c;f.pa=!0;a:for(c=2*(l-k),f=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[f];--l;--c;--f}b[2*k]=d;b[2*k+1]=e;a.I|=h;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=lf.ma(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==
(this.I>>>d&1)&&(k[d]=null!=this.c[e]?lf.ma(a,b+5,jc(this.c[e]),this.c[e],this.c[e+1],f):this.c[e+1],e+=2),d+=1;else break;return new mf(a,l+1,k)}b=Array(2*(l+4));ad(this.c,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;ad(this.c,2*k,b,2*(k+1),2*(l-k));f.pa=!0;a=this.Qa(a);a.c=b;a.I|=h;return a}l=this.c[2*k];h=this.c[2*k+1];if(null==l)return l=h.ma(a,b+5,c,d,e,f),l===h?this:ff(this,a,2*k+1,l);if(cf(d,l))return e===h?this:ff(this,a,2*k+1,e);f.pa=!0;f=b+5;d=nf?nf(a,f,l,h,c,d,e):of.call(null,a,f,l,h,c,d,e);e=2*k;k=
2*k+1;a=this.Qa(a);a.c[e]=null;a.c[k]=d;return a};
g.la=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=nd(this.I&f-1);if(0===(this.I&f)){var k=nd(this.I);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=lf.la(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.I>>>c&1)&&(h[c]=null!=this.c[d]?lf.la(a+5,jc(this.c[d]),this.c[d],this.c[d+1],e):this.c[d+1],d+=2),c+=1;else break;return new mf(null,k+1,h)}a=Array(2*(k+1));ad(this.c,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;ad(this.c,2*h,a,2*(h+1),2*(k-h));e.pa=!0;return new hf(null,this.I|f,a)}var l=this.c[2*h],f=this.c[2*h+1];if(null==l)return k=f.la(a+5,b,c,d,e),k===f?this:new hf(null,this.I,df(this.c,2*h+1,k));if(cf(c,l))return d===f?this:new hf(null,this.I,df(this.c,2*h+1,d));e.pa=!0;e=this.I;k=this.c;a+=5;a=pf?pf(a,l,f,b,c,d):of.call(null,a,l,f,b,c,d);c=2*h;h=2*h+1;d=Ta(k);d[c]=null;d[h]=a;return new hf(null,e,d)};
g.gb=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.I&d))return this;var e=nd(this.I&d-1),f=this.c[2*e],h=this.c[2*e+1];return null==f?(a=h.gb(a+5,b,c),a===h?this:null!=a?new hf(null,this.I,df(this.c,2*e+1,a)):this.I===d?null:new hf(null,this.I^d,ef(this.c,e))):cf(c,f)?new hf(null,this.I^d,ef(this.c,e)):this};g.Fa=function(){return new gf(this.c,0,null,null)};var lf=new hf(null,0,[]);function qf(a,b,c){this.c=a;this.j=b;this.na=c}
qf.prototype.ea=function(){for(var a=this.c.length;;){if(null!=this.na&&this.na.ea())return!0;if(this.j<a){var b=this.c[this.j];this.j+=1;null!=b&&(this.na=Zb(b))}else return!1}};qf.prototype.next=function(){if(this.ea())return this.na.next();throw Error("No such element");};qf.prototype.remove=function(){return Error("Unsupported operation")};function mf(a,b,c){this.G=a;this.h=b;this.c=c}g=mf.prototype;g.Qa=function(a){return a===this.G?this:new mf(a,this.h,Ta(this.c))};
g.fb=function(){return rf?rf(this.c):sf.call(null,this.c)};g.La=function(a,b,c,d){var e=this.c[b>>>a&31];return null!=e?e.La(a+5,b,c,d):d};g.ma=function(a,b,c,d,e,f){var h=c>>>b&31,k=this.c[h];if(null==k)return a=ff(this,a,h,lf.ma(a,b+5,c,d,e,f)),a.h+=1,a;b=k.ma(a,b+5,c,d,e,f);return b===k?this:ff(this,a,h,b)};
g.la=function(a,b,c,d,e){var f=b>>>a&31,h=this.c[f];if(null==h)return new mf(null,this.h+1,df(this.c,f,lf.la(a+5,b,c,d,e)));a=h.la(a+5,b,c,d,e);return a===h?this:new mf(null,this.h,df(this.c,f,a))};
g.gb=function(a,b,c){var d=b>>>a&31,e=this.c[d];if(null!=e){a=e.gb(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.h)a:{e=this.c;a=e.length;b=Array(2*(this.h-1));c=0;for(var f=1,h=0;;)if(c<a)c!==d&&null!=e[c]&&(b[f]=e[c],f+=2,h|=1<<c),c+=1;else{d=new hf(null,h,b);break a}}else d=new mf(null,this.h-1,df(this.c,d,a));else d=new mf(null,this.h,df(this.c,d,a));return d}return this};g.Fa=function(){return new qf(this.c,0,null)};
function tf(a,b,c){b*=2;for(var d=0;;)if(d<b){if(cf(c,a[d]))return d;d+=2}else return-1}function uf(a,b,c,d){this.G=a;this.Ga=b;this.h=c;this.c=d}g=uf.prototype;g.Qa=function(a){if(a===this.G)return this;var b=Array(2*(this.h+1));ad(this.c,0,b,0,2*this.h);return new uf(a,this.Ga,this.h,b)};g.fb=function(){return jf?jf(this.c):kf.call(null,this.c)};g.La=function(a,b,c,d){a=tf(this.c,this.h,c);return 0>a?d:cf(c,this.c[a])?this.c[a+1]:d};
g.ma=function(a,b,c,d,e,f){if(c===this.Ga){b=tf(this.c,this.h,d);if(-1===b){if(this.c.length>2*this.h)return b=2*this.h,c=2*this.h+1,a=this.Qa(a),a.c[b]=d,a.c[c]=e,f.pa=!0,a.h+=1,a;c=this.c.length;b=Array(c+2);ad(this.c,0,b,0,c);b[c]=d;b[c+1]=e;f.pa=!0;d=this.h+1;a===this.G?(this.c=b,this.h=d,a=this):a=new uf(this.G,this.Ga,d,b);return a}return this.c[b+1]===e?this:ff(this,a,b+1,e)}return(new hf(a,1<<(this.Ga>>>b&31),[null,this,null,null])).ma(a,b,c,d,e,f)};
g.la=function(a,b,c,d,e){return b===this.Ga?(a=tf(this.c,this.h,c),-1===a?(a=2*this.h,b=Array(a+2),ad(this.c,0,b,0,a),b[a]=c,b[a+1]=d,e.pa=!0,new uf(null,this.Ga,this.h+1,b)):nc.a(this.c[a],d)?this:new uf(null,this.Ga,this.h,df(this.c,a+1,d))):(new hf(null,1<<(this.Ga>>>a&31),[null,this])).la(a,b,c,d,e)};g.gb=function(a,b,c){a=tf(this.c,this.h,c);return-1===a?this:1===this.h?null:new uf(null,this.Ga,this.h-1,ef(this.c,md(a)))};g.Fa=function(){return new gf(this.c,0,null,null)};
function of(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 6:return pf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);case 7:return nf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}
function pf(a,b,c,d,e,f){var h=jc(b);if(h===d)return new uf(null,h,2,[b,c,e,f]);var k=new bf;return lf.la(a,h,b,c,k).la(a,d,e,f,k)}function nf(a,b,c,d,e,f,h){var k=jc(c);if(k===e)return new uf(null,k,2,[c,d,f,h]);var l=new bf;return lf.ma(a,b,k,c,d,l).ma(a,b,e,f,h,l)}function vf(a,b,c,d,e){this.l=a;this.Ma=b;this.j=c;this.u=d;this.o=e;this.i=32374860;this.A=0}g=vf.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.l};g.L=function(){var a=this.o;return null!=a?a:this.o=a=rc(this)};g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(M,this.l)};g.X=function(a,b){return fd(b,this)};
g.Y=function(a,b,c){return gd(b,c,this)};g.Z=function(){return null==this.u?new X(null,2,5,Y,[this.Ma[this.j],this.Ma[this.j+1]],null):J(this.u)};g.fa=function(){var a=this,b=null==a.u?function(){var b=a.Ma,d=a.j+2;return wf?wf(b,d,null):kf.call(null,b,d,null)}():function(){var b=a.Ma,d=a.j,e=N(a.u);return wf?wf(b,d,e):kf.call(null,b,d,e)}();return null!=b?b:M};g.T=function(){return this};g.O=function(a,b){return new vf(b,this.Ma,this.j,this.u,this.o)};g.R=function(a,b){return S(b,this)};
vf.prototype[Ra]=function(){return pc(this)};function kf(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return jf(arguments[0]);case 3:return wf(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function jf(a){return wf(a,0,null)}
function wf(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new vf(null,a,b,null,null);var d=a[b+1];if(t(d)&&(d=d.fb(),t(d)))return new vf(null,a,b+2,d,null);b+=2}else return null;else return new vf(null,a,b,c,null)}function xf(a,b,c,d,e){this.l=a;this.Ma=b;this.j=c;this.u=d;this.o=e;this.i=32374860;this.A=0}g=xf.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.l};g.L=function(){var a=this.o;return null!=a?a:this.o=a=rc(this)};g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(M,this.l)};g.X=function(a,b){return fd(b,this)};
g.Y=function(a,b,c){return gd(b,c,this)};g.Z=function(){return J(this.u)};g.fa=function(){var a;a=this.Ma;var b=this.j,c=N(this.u);a=yf?yf(null,a,b,c):sf.call(null,null,a,b,c);return null!=a?a:M};g.T=function(){return this};g.O=function(a,b){return new xf(b,this.Ma,this.j,this.u,this.o)};g.R=function(a,b){return S(b,this)};xf.prototype[Ra]=function(){return pc(this)};
function sf(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return rf(arguments[0]);case 4:return yf(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function rf(a){return yf(null,a,0,null)}function yf(a,b,c,d){if(null==d)for(d=b.length;;)if(c<d){var e=b[c];if(t(e)&&(e=e.fb(),t(e)))return new xf(a,b,c+1,e,null);c+=1}else return null;else return new xf(a,b,c,d,null)}
function zf(a,b,c){this.ca=a;this.Jb=b;this.yb=c}zf.prototype.ea=function(){return this.yb&&this.Jb.ea()};zf.prototype.next=function(){if(this.yb)return this.Jb.next();this.yb=!0;return this.ca};zf.prototype.remove=function(){return Error("Unsupported operation")};function Af(a,b,c,d,e,f){this.l=a;this.h=b;this.root=c;this.$=d;this.ca=e;this.o=f;this.i=16123663;this.A=8196}g=Af.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};
g.keys=function(){return pc(Ue.b?Ue.b(this):Ue.call(null,this))};g.entries=function(){return new Pe(H(H(this)))};g.values=function(){return pc(Ve.b?Ve.b(this):Ve.call(null,this))};g.has=function(a){return ed(this,a)};g.get=function(a,b){return this.J(null,a,b)};
g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.C(null,e),h=U(f,0,null),f=U(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=H(b))Zc(b)?(c=Ub(b),b=D(b),h=c,d=P(c),c=h):(c=J(b),h=U(c,0,null),f=U(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=N(b),c=null,d=0),e=0;else return null};g.K=function(a,b){return lb.f(this,b,null)};g.J=function(a,b,c){return null==b?this.$?this.ca:c:null==this.root?c:this.root.La(0,jc(b),b,c)};
g.Fa=function(){var a=this.root?Zb(this.root):Md;return this.$?new zf(this.ca,a,!1):a};g.M=function(){return this.l};g.V=function(){return this.h};g.L=function(){var a=this.o;return null!=a?a:this.o=a=tc(this)};g.s=function(a,b){return Oe(this,b)};g.Va=function(){return new Bf({},this.root,this.h,this.$,this.ca)};g.W=function(){return Eb(Mc,this.l)};
g.tb=function(a,b){if(null==b)return this.$?new Af(this.l,this.h-1,this.root,!1,null,null):this;if(null==this.root)return this;var c=this.root.gb(0,jc(b),b);return c===this.root?this:new Af(this.l,this.h-1,c,this.$,this.ca,null)};g.Za=function(a,b,c){if(null==b)return this.$&&c===this.ca?this:new Af(this.l,this.$?this.h:this.h+1,this.root,!0,c,null);a=new bf;b=(null==this.root?lf:this.root).la(0,jc(b),b,c,a);return b===this.root?this:new Af(this.l,a.pa?this.h+1:this.h,b,this.$,this.ca,null)};
g.pb=function(a,b){return null==b?this.$:null==this.root?!1:this.root.La(0,jc(b),b,bd)!==bd};g.T=function(){if(0<this.h){var a=null!=this.root?this.root.fb():null;return this.$?S(new X(null,2,5,Y,[null,this.ca],null),a):a}return null};g.O=function(a,b){return new Af(b,this.h,this.root,this.$,this.ca,this.o)};
g.R=function(a,b){if(Yc(b))return nb(this,A.a(b,0),A.a(b,1));for(var c=this,d=H(b);;){if(null==d)return c;var e=J(d);if(Yc(e))c=nb(c,A.a(e,0),A.a(e,1)),d=N(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.K(null,c);case 3:return this.J(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.K(null,c)};a.f=function(a,c,d){return this.J(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};g.b=function(a){return this.K(null,a)};g.a=function(a,b){return this.J(null,a,b)};var Mc=new Af(null,0,null,!1,null,uc);Af.prototype[Ra]=function(){return pc(this)};
function Bf(a,b,c,d,e){this.G=a;this.root=b;this.count=c;this.$=d;this.ca=e;this.i=258;this.A=56}function Cf(a,b,c){if(a.G){if(null==b)a.ca!==c&&(a.ca=c),a.$||(a.count+=1,a.$=!0);else{var d=new bf;b=(null==a.root?lf:a.root).ma(a.G,0,jc(b),b,c,d);b!==a.root&&(a.root=b);d.pa&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}g=Bf.prototype;g.V=function(){if(this.G)return this.count;throw Error("count after persistent!");};
g.K=function(a,b){return null==b?this.$?this.ca:null:null==this.root?null:this.root.La(0,jc(b),b)};g.J=function(a,b,c){return null==b?this.$?this.ca:c:null==this.root?c:this.root.La(0,jc(b),b,c)};
g.cb=function(a,b){var c;a:if(this.G)if(null!=b?b.i&2048||b.Tb||(b.i?0:w(qb,b)):w(qb,b))c=Cf(this,Ze.b?Ze.b(b):Ze.call(null,b),$e.b?$e.b(b):$e.call(null,b));else{c=H(b);for(var d=this;;){var e=J(c);if(t(e))c=N(c),d=Cf(d,Ze.b?Ze.b(e):Ze.call(null,e),$e.b?$e.b(e):$e.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");return c};g.eb=function(){var a;if(this.G)this.G=null,a=new Af(null,this.count,this.root,this.$,this.ca,null);else throw Error("persistent! called twice");return a};
g.bb=function(a,b,c){return Cf(this,b,c)};var $d=function $d(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return $d.m(0<c.length?new I(c.slice(0),0,null):null)};$d.m=function(a){for(var b=H(a),c=Ob(Mc);;)if(b){a=N(N(b));var d=J(b),b=J(N(b)),c=Rb(c,d,b),b=a}else return Qb(c)};$d.F=0;$d.D=function(a){return $d.m(H(a))};function Df(a,b){this.v=a;this.aa=b;this.i=32374988;this.A=0}g=Df.prototype;g.toString=function(){return ac(this)};
g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.aa};g.da=function(){var a=(null!=this.v?this.v.i&128||this.v.lb||(this.v.i?0:w(ib,this.v)):w(ib,this.v))?this.v.da(null):N(this.v);return null==a?null:new Df(a,this.aa)};g.L=function(){return rc(this)};
g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(M,this.aa)};g.X=function(a,b){return fd(b,this)};g.Y=function(a,b,c){return gd(b,c,this)};g.Z=function(){return this.v.Z(null).ub()};g.fa=function(){var a=(null!=this.v?this.v.i&128||this.v.lb||(this.v.i?0:w(ib,this.v)):w(ib,this.v))?this.v.da(null):N(this.v);return null!=a?new Df(a,this.aa):M};g.T=function(){return this};g.O=function(a,b){return new Df(this.v,b)};g.R=function(a,b){return S(b,this)};Df.prototype[Ra]=function(){return pc(this)};
function Ue(a){return(a=H(a))?new Df(a,null):null}function Ze(a){return sb(a)}function Ef(a,b){this.v=a;this.aa=b;this.i=32374988;this.A=0}g=Ef.prototype;g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.M=function(){return this.aa};g.da=function(){var a=(null!=this.v?this.v.i&128||this.v.lb||(this.v.i?0:w(ib,this.v)):w(ib,this.v))?this.v.da(null):N(this.v);return null==a?null:new Ef(a,this.aa)};g.L=function(){return rc(this)};
g.s=function(a,b){return Gc(this,b)};g.W=function(){return Rc(M,this.aa)};g.X=function(a,b){return fd(b,this)};g.Y=function(a,b,c){return gd(b,c,this)};g.Z=function(){return this.v.Z(null).vb()};g.fa=function(){var a=(null!=this.v?this.v.i&128||this.v.lb||(this.v.i?0:w(ib,this.v)):w(ib,this.v))?this.v.da(null):N(this.v);return null!=a?new Ef(a,this.aa):M};g.T=function(){return this};g.O=function(a,b){return new Ef(this.v,b)};g.R=function(a,b){return S(b,this)};Ef.prototype[Ra]=function(){return pc(this)};
function Ve(a){return(a=H(a))?new Ef(a,null):null}function $e(a){return tb(a)}function Ff(a){return t(Td(id,a))?hd(function(a,c){return Ic.a(t(a)?a:Rd,c)},a):null}function Gf(a){this.xb=a}Gf.prototype.ea=function(){return this.xb.ea()};Gf.prototype.next=function(){if(this.xb.ea())return this.xb.next().U[0];throw Error("No such element");};Gf.prototype.remove=function(){return Error("Unsupported operation")};function Hf(a,b,c){this.l=a;this.Ra=b;this.o=c;this.i=15077647;this.A=8196}g=Hf.prototype;
g.toString=function(){return ac(this)};g.equiv=function(a){return this.s(null,a)};g.keys=function(){return pc(H(this))};g.entries=function(){return new Qe(H(H(this)))};g.values=function(){return pc(H(this))};g.has=function(a){return ed(this,a)};
g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.C(null,e),h=U(f,0,null),f=U(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=H(b))Zc(b)?(c=Ub(b),b=D(b),h=c,d=P(c),c=h):(c=J(b),h=U(c,0,null),f=U(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=N(b),c=null,d=0),e=0;else return null};g.K=function(a,b){return lb.f(this,b,null)};g.J=function(a,b,c){return mb(this.Ra,b)?b:c};g.Fa=function(){return new Gf(Zb(this.Ra))};g.M=function(){return this.l};g.V=function(){return $a(this.Ra)};
g.L=function(){var a=this.o;return null!=a?a:this.o=a=tc(this)};g.s=function(a,b){return Vc(b)&&P(this)===P(b)&&Sd(function(a){return function(b){return ed(a,b)}}(this),b)};g.Va=function(){return new If(Ob(this.Ra))};g.W=function(){return Rc(Kf,this.l)};g.T=function(){return Ue(this.Ra)};g.O=function(a,b){return new Hf(b,this.Ra,this.o)};g.R=function(a,b){return new Hf(this.l,Lc.f(this.Ra,b,null),null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.K(null,c);case 3:return this.J(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.K(null,c)};a.f=function(a,c,d){return this.J(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};g.b=function(a){return this.K(null,a)};g.a=function(a,b){return this.J(null,a,b)};var Kf=new Hf(null,Rd,uc);Hf.prototype[Ra]=function(){return pc(this)};
function If(a){this.Ja=a;this.A=136;this.i=259}g=If.prototype;g.cb=function(a,b){this.Ja=Rb(this.Ja,b,null);return this};g.eb=function(){return new Hf(null,Qb(this.Ja),null)};g.V=function(){return P(this.Ja)};g.K=function(a,b){return lb.f(this,b,null)};g.J=function(a,b,c){return lb.f(this.Ja,b,bd)===bd?c:b};
g.call=function(){function a(a,b,c){return lb.f(this.Ja,b,bd)===bd?c:b}function b(a,b){return lb.f(this.Ja,b,bd)===bd?null:b}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,0,e);case 3:return a.call(this,0,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.f=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Ta(b)))};g.b=function(a){return lb.f(this.Ja,a,bd)===bd?null:a};g.a=function(a,b){return lb.f(this.Ja,a,bd)===bd?b:a};
function W(a){if(null!=a&&(a.A&4096||a.Vb))return a.name;if("string"===typeof a)return a;throw Error([y("Doesn't support name: "),y(a)].join(""));}function Lf(a,b){return new ud(null,function(){var c=H(b);if(c){var d;d=J(c);d=a.b?a.b(d):a.call(null,d);c=t(d)?S(J(c),Lf(a,L(c))):null}else c=null;return c},null,null)}
function Mf(){return function(){function a(a,b,c){return new X(null,2,5,Y,[J.f?J.f(a,b,c):J.call(null,a),L.f?L.f(a,b,c):L.call(null,a)],null)}function b(a,b){return new X(null,2,5,Y,[J.a?J.a(a,b):J.call(null,a),L.a?L.a(a,b):L.call(null,a)],null)}function c(a){return new X(null,2,5,Y,[J.b?J.b(a):J.call(null,a),L.b?L.b(a):L.call(null,a)],null)}function d(){return new X(null,2,5,Y,[J.B?J.B():J.call(null),L.B?L.B():L.call(null)],null)}var e=null,f=function(){function a(c,d,e,f){var h=null;if(3<arguments.length){for(var h=
0,v=Array(arguments.length-3);h<v.length;)v[h]=arguments[h+3],++h;h=new I(v,0)}return b.call(this,c,d,e,h)}function b(a,c,d,e){return new X(null,2,5,Y,[Kd(J,a,c,d,e),Kd(L,a,c,d,e)],null)}a.F=3;a.D=function(a){var c=J(a);a=N(a);var d=J(a);a=N(a);var e=J(a);a=L(a);return b(c,d,e,a)};a.m=b;return a}(),e=function(e,k,l,m){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,k);case 3:return a.call(this,e,k,l);default:var n=null;if(3<arguments.length){for(var n=
0,p=Array(arguments.length-3);n<p.length;)p[n]=arguments[n+3],++n;n=new I(p,0)}return f.m(e,k,l,n)}throw Error("Invalid arity: "+arguments.length);};e.F=3;e.D=f.D;e.B=d;e.b=c;e.a=b;e.f=a;e.m=f.m;return e}()}
function Nf(a,b,c,d,e,f,h){var k=Ea;Ea=null==Ea?null:Ea-1;try{if(null!=Ea&&0>Ea)return C(a,"#");C(a,c);if(0===Na.b(f))H(h)&&C(a,function(){var a=Of.b(f);return t(a)?a:"..."}());else{if(H(h)){var l=J(h);b.f?b.f(l,a,f):b.call(null,l,a,f)}for(var m=N(h),n=Na.b(f)-1;;)if(!m||null!=n&&0===n){H(m)&&0===n&&(C(a,d),C(a,function(){var a=Of.b(f);return t(a)?a:"..."}()));break}else{C(a,d);var p=J(m);c=a;h=f;b.f?b.f(p,c,h):b.call(null,p,c,h);var u=N(m);c=n-1;m=u;n=c}}return C(a,e)}finally{Ea=k}}
function Pf(a,b){for(var c=H(b),d=null,e=0,f=0;;)if(f<e){var h=d.C(null,f);C(a,h);f+=1}else if(c=H(c))d=c,Zc(d)?(c=Ub(d),e=D(d),d=c,h=P(c),c=e,e=h):(h=J(d),C(a,h),c=N(d),d=null,e=0),f=0;else return null}var Qf={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};function Rf(a){return[y('"'),y(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return Qf[a]})),y('"')].join("")}
function Sf(a,b){var c=dd(G.a(a,Ka));return c?(c=null!=b?b.i&131072||b.Ub?!0:!1:!1)?null!=Sc(b):c:c}
function Tf(a,b,c){if(null==a)return C(b,"nil");if(Sf(c,a)){C(b,"^");var d=Sc(a);Z.f?Z.f(d,b,c):Z.call(null,d,b,c);C(b," ")}if(a.Gb)return a.cc(b);if(null!=a&&(a.i&2147483648||a.S))return a.N(null,b,c);if(!0===a||!1===a||"number"===typeof a)return C(b,""+y(a));if(null!=a&&a.constructor===Object)return C(b,"#js "),d=de.a(function(b){return new X(null,2,5,Y,[td.b(b),a[b]],null)},$c(a)),Uf.w?Uf.w(d,Z,b,c):Uf.call(null,d,Z,b,c);if(Oa(a))return Nf(b,Z,"#js ["," ","]",c,a);if("string"==typeof a)return t(Ja.b(c))?
C(b,Rf(a)):C(b,a);if("function"==q(a)){var e=a.name;c=t(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Function":e;return Pf(b,T(["#object[",c,' "',""+y(a),'"]'],0))}if(a instanceof Date)return c=function(a,b){for(var c=""+y(a);;)if(P(c)<b)c=[y("0"),y(c)].join("");else return c},Pf(b,T(['#inst "',""+y(a.getUTCFullYear()),"-",c(a.getUTCMonth()+1,2),"-",c(a.getUTCDate(),2),"T",c(a.getUTCHours(),2),":",c(a.getUTCMinutes(),2),":",c(a.getUTCSeconds(),2),".",c(a.getUTCMilliseconds(),3),
"-",'00:00"'],0));if(a instanceof RegExp)return Pf(b,T(['#"',a.source,'"'],0));if(t(a.constructor.mb))return Pf(b,T(["#object[",a.constructor.mb.replace(RegExp("/","g"),"."),"]"],0));e=a.constructor.name;c=t(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Object":e;return Pf(b,T(["#object[",c," ",""+y(a),"]"],0))}function Z(a,b,c){var d=Vf.b(c);return t(d)?(c=Lc.f(c,Wf,Tf),d.f?d.f(a,b,c):d.call(null,a,b,c)):Tf(a,b,c)}
function Uf(a,b,c,d){return Nf(c,function(a,c,d){var k=sb(a);b.f?b.f(k,c,d):b.call(null,k,c,d);C(c," ");a=tb(a);return b.f?b.f(a,c,d):b.call(null,a,c,d)},"{",", ","}",d,H(a))}I.prototype.S=!0;I.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};ud.prototype.S=!0;ud.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};vf.prototype.S=!0;vf.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};Se.prototype.S=!0;
Se.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};Ee.prototype.S=!0;Ee.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};rd.prototype.S=!0;rd.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};Af.prototype.S=!0;Af.prototype.N=function(a,b,c){return Uf(this,Z,b,c)};xf.prototype.S=!0;xf.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};Ie.prototype.S=!0;Ie.prototype.N=function(a,b,c){return Nf(b,Z,"["," ","]",c,this)};Hf.prototype.S=!0;
Hf.prototype.N=function(a,b,c){return Nf(b,Z,"#{"," ","}",c,this)};yd.prototype.S=!0;yd.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};Xd.prototype.S=!0;Xd.prototype.N=function(a,b,c){C(b,"#object [cljs.core.Atom ");Z(new r(null,1,[Xf,this.state],null),b,c);return C(b,"]")};Ef.prototype.S=!0;Ef.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};X.prototype.S=!0;X.prototype.N=function(a,b,c){return Nf(b,Z,"["," ","]",c,this)};pd.prototype.S=!0;
pd.prototype.N=function(a,b){return C(b,"()")};r.prototype.S=!0;r.prototype.N=function(a,b,c){return Uf(this,Z,b,c)};Df.prototype.S=!0;Df.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};od.prototype.S=!0;od.prototype.N=function(a,b,c){return Nf(b,Z,"("," ",")",c,this)};function Yf(){}
var Zf=function Zf(b){if(null!=b&&null!=b.Pb)return b.Pb(b);var c=Zf[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Zf._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IEncodeJS.-clj-\x3ejs",b);};
function $f(a){if(null!=a?a.Ob||(a.dc?0:w(Yf,a)):w(Yf,a))a=Zf(a);else if("string"===typeof a||"number"===typeof a||a instanceof V||a instanceof mc)a=ag.b?ag.b(a):ag.call(null,a);else{var b=T([a],0);a=Ga();if(Tc(b))a="";else{var c=y,d=new za;a:{var e=new $b(d);Z(J(b),e,a);for(var b=H(N(b)),f=null,h=0,k=0;;)if(k<h){var l=f.C(null,k);C(e," ");Z(l,e,a);k+=1}else if(b=H(b))f=b,Zc(f)?(b=Ub(f),h=D(f),f=b,l=P(b),b=h,h=l):(l=J(f),C(e," "),Z(l,e,a),b=N(f),f=null,h=0),k=0;else break a}a=""+c(d)}}return a}
var ag=function ag(b){if(null==b)return null;if(null!=b?b.Ob||(b.dc?0:w(Yf,b)):w(Yf,b))return Zf(b);if(b instanceof V)return W(b);if(b instanceof mc)return""+y(b);if(Xc(b)){var c={};b=H(b);for(var d=null,e=0,f=0;;)if(f<e){var h=d.C(null,f),k=U(h,0,null),h=U(h,1,null);c[$f(k)]=ag(h);f+=1}else if(b=H(b))Zc(b)?(e=Ub(b),b=D(b),d=e,e=P(e)):(e=J(b),d=U(e,0,null),e=U(e,1,null),c[$f(d)]=ag(e),b=N(b),d=null,e=0),f=0;else break;return c}if(Uc(b)){c=[];b=H(de.a(ag,b));d=null;for(f=e=0;;)if(f<e)k=d.C(null,f),
c.push(k),f+=1;else if(b=H(b))d=b,Zc(d)?(b=Ub(d),f=D(d),d=b,e=P(b),b=f):(b=J(d),c.push(b),b=N(d),d=null,e=0),f=0;else break;return c}return b};function bg(a,b,c){var d=Error(a);this.message=a;this.data=b;this.Ab=c;this.name=d.name;this.description=d.description;this.lc=d.lc;this.fileName=d.fileName;this.lineNumber=d.lineNumber;this.columnNumber=d.columnNumber;this.stack=d.stack;return this}bg.prototype.__proto__=Error.prototype;bg.prototype.S=!0;
bg.prototype.N=function(a,b,c){C(b,"#error {:message ");Z(this.message,b,c);t(this.data)&&(C(b,", :data "),Z(this.data,b,c));t(this.Ab)&&(C(b,", :cause "),Z(this.Ab,b,c));return C(b,"}")};bg.prototype.toString=function(){return ac(this)};var cg=new V(null,"role","role",-736691072),dg=new V(null,"button.pswp__button.pswp__button--fs","button.pswp__button.pswp__button--fs",-479010560),eg=new V(null,"new-value","new-value",1087038368),fg=new V(null,"update-handler","update-handler",1389859106),gg=new V(null,"div.pswp__ui.pswp__ui--hidden","div.pswp__ui.pswp__ui--hidden",1077730658),hg=new V(null,"update-attribute","update-attribute",102770530),ig=new V(null,"attribute-handlers","attribute-handlers",855454691),jg=new V(null,"namespaces",
"namespaces",-1444157469),kg=new V(null,"fn","fn",-1175266204),lg=new V(null,"div.pswp__share-modal.pswp__share-modal--hidden.pswp__single-tap","div.pswp__share-modal.pswp__share-modal--hidden.pswp__single-tap",782637412),Ka=new V(null,"meta","meta",1499536964),mg=new V(null,"div.pswp__top-bar","div.pswp__top-bar",-914890044),La=new V(null,"dup","dup",556298533),ng=new V(null,"aria-hidden","aria-hidden",399337029),og=new V(null,"div.pswp__caption__center","div.pswp__caption__center",487765957),pg=
new V(null,"index","index",-1531685915),qg=new V(null,"bottom","bottom",-1550509018),rg=new V(null,"tabindex","tabindex",338877510),sg=new V(null,"div.pswp__preloader__cut","div.pswp__preloader__cut",1843580006),tg=new V(null,"disabled","disabled",-1529784218),ug=new V(null,"top","top",-1856271961),ae=new V(null,"validator","validator",-1966190681),vg=new V(null,".image",".image",-297690808),wg=new V(null,"ns","ns",441598760),xg=new V(null,"div.pswp__preloader","div.pswp__preloader",408520552),yg=
new V(null,"name","name",1843675177),zg=new V(null,"div.pswp__share-tooltip","div.pswp__share-tooltip",-1834925015),Ag=new V(null,"w","w",354169001),Bg=new V(null,"margin-left","margin-left",2015598377),Qd=new mc(null,"meta10604","meta10604",-1016705111,null),Cg=new V(null,"msrc","msrc",251791403),Dg=new V(null,"width","width",-384071477),Eg=new V(null,"create-element-fn","create-element-fn",827380427),Fg=new V(null,"old-value","old-value",862546795),Xf=new V(null,"val","val",128701612),Gg=new V(null,
"type","type",1174270348),Hg=new V(null,"src","src",-1651076051),Wf=new V(null,"fallback-impl","fallback-impl",-1501286995),Ig=new V(null,"div.pswp__caption","div.pswp__caption",-531230195),Ia=new V(null,"flush-on-newline","flush-on-newline",-151457939),Jg=new V(null,"div.pswp__container","div.pswp__container",-126857170),Kg=new V(null,"button.pswp__button.pswp__button--share","button.pswp__button.pswp__button--share",2058146350),Lg=new V(null,"button.pswp__button.pswp__button--arrow--right","button.pswp__button.pswp__button--arrow--right",
-1908670289),Mg=new V(null,"title","title",636505583),Ja=new V(null,"readably","readably",1129599760),Of=new V(null,"more-marker","more-marker",-14717935),Ng=new V(null,"div.pswp","div.pswp",-845355823),Og=new V(null,"keyup","keyup",-794526927),Pg=new V(null,"click","click",1912301393),Qg=new V(null,"div.pswp__item","div.pswp__item",-939569134),Sg=new V(null,"div.pswp__preloader__donut","div.pswp__preloader__donut",1396225650),Tg=new V(null,"div.pswp__scroll-wrap","div.pswp__scroll-wrap",1877488723),
Ug=new V(null,"button.pswp__button.pswp__button--close","button.pswp__button.pswp__button--close",-979514797),Vg=new V(null,"h","h",1109658740),Na=new V(null,"print-length","print-length",1931866356),Wg=new V(null,"id","id",-1388402092),Xg=new V(null,"class","class",-2030961996),Yg=new V(null,"prop","prop",-515168332),Zg=new V(null,"image-size","image-size",1574819796),$g=new V(null,"right","right",-452581833),ah=new V(null,"button.pswp__button.pswp__button--arrow--left","button.pswp__button.pswp__button--arrow--left",
983762009),bh=new V(null,"tag","tag",-1290361223),ch=new V(null,"interceptors","interceptors",-1546782951),dh=new V(null,"target","target",253001721),Pd=new mc(null,"quote","quote",1377916282,null),eh=new V(null,"remove-handler","remove-handler",389960218),fh=new V(null,"remove-attribute","remove-attribute",552745626),Od=new V(null,"arglists","arglists",1661989754),Nd=new mc(null,"nil-iter","nil-iter",1101030523,null),gh=new V(null,"#pswp","#pswp",407034171),hh=new V(null,"button.pswp__button.pswp__button--zoom",
"button.pswp__button.pswp__button--zoom",-38289765),Vf=new V(null,"alt-impl","alt-impl",670969595),ih=new V(null,"div.pswp__counter","div.pswp__counter",-781104003),jh=new V(null,"href","href",-793805698),kh=new V(null,".g-container",".g-container",-1129466498),lh=new V(null,"div.pswp__preloader__icn","div.pswp__preloader__icn",-844032322),mh=new V(null,"div.pswp__bg","div.pswp__bg",1669805982),nh=new V(null,"height","height",1025178622),oh=new V(null,"left","left",-399115937),ph=new V(null,"attr",
"attr",-604132353);var qh=function qh(b,c){var d=H(c),e=J(d),d=N(d);if(t(b)){d=d?qh(b.b?b.b(e):b.call(null,e),d):d;if(t(d))return Lc.f(b,e,d);e=Nc.a(b,e);return Tc(e)?null:e}return null};function rh(a){return Array.prototype.slice.call(a)}function sh(a){return a instanceof V?[y(function(){var b=sd(a);return null==b?null:[y(b),y("/")].join("")}()),y(W(a))].join(""):a}
function th(a,b){for(var c=0;;)if(c=a.indexOf(b,c),0<=c){var d;if(d=0===c||" "===a.charAt(c-1)){d=a.length;var e=c+b.length;d=e<=d?e===d||" "===a.charAt(e):null}if(d)return c;c+=b.length}else return null};function uh(a){var b=/x/;a="/(?:)/"===""+y(b)?Ic.a(De(S("",de.a(y,H(a)))),""):De((""+y(a)).split(b));if(1<P(a))a:for(;;)if(""===(null==a?null:vb(a)))a=null==a?null:wb(a);else break a;return a};var vh=function vh(b){if(Uc(b))a:{var c=de.a(vh,b);b=new za;for(c=H(c);;)if(null!=c)b.append(""+y(J(c))),c=N(c),null!=c&&b.append(" ");else{b=b.toString();break a}}else b="string"===typeof b||b instanceof V?W(b):null;return b};function wh(a,b){return t(b)?a.getAttribute(sh(b)):null}function xh(a){a=a.getBoundingClientRect();return new r(null,6,[ug,a.top,qg,a.bottom,oh,a.left,$g,a.right,Dg,a.width,nh,a.height],null)}function yh(a){return a.parentNode}
function zh(a,b){return function(a){return function(b){return 0<=a.indexOf(b)}}(rh(a.querySelectorAll(vh(b))))}function Ah(a,b,c){return J(he(zh(a,c),Lf(function(b){return b!==a},Lf(id,ge(yh,b)))))}
function Bh(a,b){if(!Ud(P(b)))throw Error("Assert failed: (even? (count kvs))");for(var c=a.style,d=H(je(2,2,b)),e=null,f=0,h=0;;)if(h<f){var k=e.C(null,h),l=U(k,0,null),k=U(k,1,null);c.setProperty(sh(l),k);h+=1}else if(d=H(d))Zc(d)?(f=Ub(d),d=D(d),e=f,f=P(f)):(f=J(d),e=U(f,0,null),f=U(f,1,null),c.setProperty(sh(e),f),d=N(d),e=null,f=0),h=0;else break}
function Ch(a,b){var c=sh(b),d=a.classList;if(t(d))d.toggle(c);else{var d=sh(c),e=a.classList;t(e)?d=e.contains(d):(e=a.className,t(e)?(d=th(e,d),d=t(d)?0<=d:null):d=null);if(d)if(c=sh(c),d=a.classList,t(d))d.remove(c);else{d=a.className;a:for(e=d;;){var f=e.length,h=th(e,c);if(t(h))var k=h+c.length,e=""+y(k<f?[y(e.substring(0,h)),y(e.substr(k+1))].join(""):e.substring(0,h-1));else{c=e;break a}}d!==c&&(a.className=c)}else if(d=fa(sh(c)).split(/\s+/),H(d))if(c=a.classList,t(c))for(d=H(d),e=null,h=
f=0;;)if(h<f)k=e.C(null,h),c.add(k),h+=1;else if(d=H(d))e=d,Zc(e)?(d=Ub(e),h=D(e),e=d,f=P(d),d=h):(d=J(e),c.add(d),d=N(e),e=null,f=0),h=0;else break;else for(c=H(d),d=null,f=e=0;;)if(f<e)h=d.C(null,f),k=a.className,t(th(k,h))||(h=""===k?h:[y(k),y(" "),y(h)].join(""),a.className=h),f+=1;else if(c=H(c))Zc(c)?(e=Ub(c),c=D(c),d=e,e=P(e)):(d=J(c),e=a.className,t(th(e,d))||(d=""===e?d:[y(e),y(" "),y(d)].join(""),a.className=d),c=N(c),d=null,e=0),f=0;else break}}
var Dh=ie.a(Rd,de.a(function(a){var b=U(a,0,null),c=U(a,1,null);return new X(null,2,5,Y,[b,Ye([c,function(a,b,c){return function(h){return function(){return function(a){var b=a.relatedTarget,c;c=a.nc;c=t(c)?c:a.currentTarget;return t(t(b)?t(c.contains)?c.contains(b):t(c.compareDocumentPosition)?0!=(c.compareDocumentPosition(b)&16):null:b)?null:h.b?h.b(a):h.call(null,a)}}(a,b,c)}}(a,b,c)])],null)},new r(null,2,[new V(null,"mouseenter","mouseenter",-1792413560),new V(null,"mouseover","mouseover",-484272303),
new V(null,"mouseleave","mouseleave",531566580),new V(null,"mouseout","mouseout",2049446890)],null)));function Wd(a,b,c){return function(d){var e=Ah(a,d.target,b);return t(t(e)?Pa(wh(e,tg)):e)?(d.nc=e,c.b?c.b(d):c.call(null,d)):null}}function Eh(a){a=a.ec;return t(a)?a:Rd}function Fh(a,b,c){a.ec=Jd(b,Eh(a),c)}function Gh(a){return Wc(a)?Mf().call(null,a):new X(null,2,5,Y,[a,null],null)}
function Hh(a,b){if(!Ud(P(b)))throw Error("Assert failed: (even? (count type-fs))");for(var c=Gh(a),d=U(c,0,null),c=U(c,1,null),e=H(je(2,2,b)),f=null,h=0,k=0;;)if(k<h){for(var l=f.C(null,k),m=U(l,0,null),l=U(l,1,null),m=H(G.f(Dh,m,Ye([m,id]))),n=null,p=0,u=0;;)if(u<p){var v=n.C(null,u),z=U(v,0,null),v=U(v,1,null),v=(t(c)?Vd(d,c):id).call(null,v.b?v.b(l):v.call(null,l));Fh(d,ke,T([new X(null,3,5,Y,[c,z,l],null),v],0));t(d.addEventListener)?d.addEventListener(W(z),v):d.attachEvent(W(z),v);u+=1}else if(m=
H(m))Zc(m)?(p=Ub(m),m=D(m),n=p,p=P(p)):(p=J(m),n=U(p,0,null),p=U(p,1,null),p=(t(c)?Vd(d,c):id).call(null,p.b?p.b(l):p.call(null,l)),Fh(d,ke,T([new X(null,3,5,Y,[c,n,l],null),p],0)),t(d.addEventListener)?d.addEventListener(W(n),p):d.attachEvent(W(n),p),m=N(m),n=null,p=0),u=0;else break;k+=1}else if(e=H(e)){if(Zc(e))h=Ub(e),e=D(e),f=h,h=P(h);else{f=J(e);h=U(f,0,null);f=U(f,1,null);h=H(G.f(Dh,h,Ye([h,id])));k=null;for(m=l=0;;)if(m<l)p=k.C(null,m),n=U(p,0,null),p=U(p,1,null),p=(t(c)?Vd(d,c):id).call(null,
p.b?p.b(f):p.call(null,f)),Fh(d,ke,T([new X(null,3,5,Y,[c,n,f],null),p],0)),t(d.addEventListener)?d.addEventListener(W(n),p):d.attachEvent(W(n),p),m+=1;else if(h=H(h))Zc(h)?(l=Ub(h),h=D(h),k=l,l=P(l)):(l=J(h),k=U(l,0,null),l=U(l,1,null),l=(t(c)?Vd(d,c):id).call(null,l.b?l.b(f):l.call(null,f)),Fh(d,ke,T([new X(null,3,5,Y,[c,k,f],null),l],0)),t(d.addEventListener)?d.addEventListener(W(k),l):d.attachEvent(W(k),l),h=N(h),k=null,l=0),m=0;else break;e=N(e);f=null;h=0}k=0}else break;return a}
function Ih(a,b){if(!Ud(P(b)))throw Error("Assert failed: (even? (count type-fs))");for(var c=Gh(a),d=U(c,0,null),c=U(c,1,null),e=H(je(2,2,b)),f=null,h=0,k=0;;)if(k<h){for(var l=f.C(null,k),m=U(l,0,null),l=U(l,1,null),m=H(G.f(Dh,m,Ye([m,id]))),n=null,p=0,u=0;;)if(u<p){var v=n.C(null,u),z=U(v,0,null);U(v,1,null);var v=new X(null,3,5,Y,[c,z,l],null),B=Xa(G,Eh(d),v);Fh(d,qh,T([v],0));t(d.removeEventListener)?d.removeEventListener(W(z),B):d.detachEvent(W(z),B);u+=1}else if(m=H(m))Zc(m)?(p=Ub(m),m=D(m),
n=p,p=P(p)):(p=J(m),n=U(p,0,null),U(p,1,null),p=new X(null,3,5,Y,[c,n,l],null),u=Xa(G,Eh(d),p),Fh(d,qh,T([p],0)),t(d.removeEventListener)?d.removeEventListener(W(n),u):d.detachEvent(W(n),u),m=N(m),n=null,p=0),u=0;else break;k+=1}else if(e=H(e)){if(Zc(e))h=Ub(e),e=D(e),f=h,h=P(h);else{f=J(e);h=U(f,0,null);f=U(f,1,null);h=H(G.f(Dh,h,Ye([h,id])));k=null;for(m=l=0;;)if(m<l)p=k.C(null,m),n=U(p,0,null),U(p,1,null),p=new X(null,3,5,Y,[c,n,f],null),u=Xa(G,Eh(d),p),Fh(d,qh,T([p],0)),t(d.removeEventListener)?
d.removeEventListener(W(n),u):d.detachEvent(W(n),u),m+=1;else if(h=H(h))Zc(h)?(l=Ub(h),h=D(h),k=l,l=P(l)):(l=J(h),k=U(l,0,null),U(l,1,null),l=new X(null,3,5,Y,[c,k,f],null),m=Xa(G,Eh(d),l),Fh(d,qh,T([l],0)),t(d.removeEventListener)?d.removeEventListener(W(k),m):d.detachEvent(W(k),m),h=N(h),k=null,l=0),m=0;else break;e=N(e);f=null;h=0}k=0}else break};var Jh=Zd?Zd(!1):Yd.call(null,!1);function Kh(a,b){return function(c){c.stopPropagation();Ch(a,"disabled");Ch(b,"is-active");return ce.a(Jh,Pa)}}
function Lh(){var a=document.getElementById("sidenav"),b=rh(document.getElementsByClassName("hambtn"))[0],c=Kh(a,b),d=function(a,b,c){return function(a){return t(vc.b?vc.b(Jh):vc.call(null,Jh))?c.b?c.b(a):c.call(null,a):null}}(a,b,c);Hh(b,T([Pg,c],0));Hh(document.body,T([Pg,d],0));return Hh(document.body,T([Og,function(a,b,c,d){return function(a){return nc.a(a.keyCode,27)?d(a):null}}(a,b,c,d)],0))};var Mh=function Mh(b,c,d,e){if(null!=b&&null!=b.hc)return b.hc(b,c,d,e);var f=Mh[q(null==b?null:b)];if(null!=f)return f.w?f.w(b,c,d,e):f.call(null,b,c,d,e);f=Mh._;if(null!=f)return f.w?f.w(b,c,d,e):f.call(null,b,c,d,e);throw x("Interceptor.-intercept",b);},Nh=function Nh(b,c,d,e){var f=J(c);return Mh(f,d,e,function(){return function(){var f=L(c);return H(f)?Nh(b,f,d,e):b.B?b.B():b.call(null)}}(f))};var Oh=new r(null,2,["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"],null);function Ph(a,b){if(t(a)){var c=G.a(jg.b(b),a);return t(c)?c:G.a(Oh,a)}return null}function Qh(a){return"string"===typeof a||"number"===typeof a||!0===a||!1===a}var Rh=new function(){},Sh=function Sh(b,c){for(;;)if(H(c)){var d;d=J(c);var e=void 0,e=Qh(d),e=t(e)?e:Yc(d);d=t(e)?Gd.a(b,d):Sh(b,d);e=L(c);b=d;c=e}else return b};function Th(a){return t(0===a.indexOf("on-"))?a.substring(3):null};function Uh(a,b,c,d){d=b instanceof V?Ph(sd(b),d):null;return t(d)?a.setAttributeNS(d,W(b),c):a.setAttribute(W(b),c)}function Vh(a,b,c){c=b instanceof V?Ph(sd(b),c):null;return t(c)?a.removeAttributeNS(c,W(b)):a.removeAttribute(W(b))}
var Wh=new r(null,2,[Yg,new r(null,1,[kg,function(a,b,c,d){return a[W(b).replace("-","_")]=d}],null),ph,new r(null,1,[kg,function(a,b,c,d,e){return t(d)?Uh(a,b,d,e):Vh(a,b,e)}],null)],null),Xh=new X(null,6,5,Y,[new r(null,2,[dh,new r(null,2,[wg,"svg",ph,"class"],null),Gg,ph],null),new r(null,2,[dh,new r(null,2,[bh,"input",ph,new Hf(null,new r(null,2,["value",null,"checked",null],null),null)],null),Gg,Yg],null),new r(null,2,[dh,new r(null,2,[bh,"input",ph,"autofocus"],null),kg,function(a,b,c,d){return t(d)?
(a.focus(),a.setAttribute(b,d)):null}],null),new r(null,2,[dh,new r(null,2,[bh,"option",ph,new Hf(null,new r(null,1,["selected",null],null),null)],null),Gg,Yg],null),new r(null,2,[dh,new r(null,2,[bh,"select",ph,new Hf(null,new r(null,2,["value",null,"selectIndex",null],null),null)],null),Gg,Yg],null),new r(null,2,[dh,new r(null,2,[bh,"textarea",ph,new Hf(null,new r(null,1,["value",null],null),null)],null),Gg,Yg],null)],null);function Yh(a,b){return t(a)?Vc(a)?ed(a,b):nc.a(b,a):!0}
function Zh(a,b,c,d){a=Fd.a(ig.b(a),Xh);a=Td(function(){return function(a){var f;f=dh.b(a);var h=W(d),k=Yh(wg.b(f),b);t(k)?(k=Yh(bh.b(f),c),f=t(k)?Yh(ph.b(f),h):k):f=k;return t(f)?a:null}}(a),a);return ed(a,Gg)?Gg.b(a).call(null,Wh):a}function $h(a,b,c,d,e){c=Qh(c);t(t(c)?c:Qh(d))?a=t(d)?Uh(a,b,d,e):Vh(a,b,e):(d=a[W(b).replace("-","_")]=d,a=a[b]=d);return a};function ai(a,b,c,d,e,f){var h=null!=f&&(f.i&64||f.Pa)?Id($d,f):f,k=G.a(h,ch);if(null!==e){var l=Th(W(d));t(l)?Xc(null)&&Xc(e)&&yg.b(null)===yg.b(e)||(f=function(b){return function(){var c=[y("hipo_listener_"),y(b)].join(""),d=a[c];t(d)&&a.removeEventListener(b,d);d=kg.b(e);d=t(d)?d:e;return t(d)?(a.addEventListener(b,d),a[c]=d):null}}(l,l,f,h,h,k),Pa(k)||Tc(k)?f():Nh(f,k,t(e)?fg:eh,Ff(T([new r(null,3,[dh,a,yg,d,Fg,null],null),t(e)?new r(null,1,[eg,e],null):null],0)))):(f=function(f,h,k,l){return function(){var f=
Zh(l,b,c,d),f=kg.b(f),f=t(f)?f:$h;return f.H?f.H(a,d,null,e,l):f.call(null,a,d,null,e,l)}}(l,f,h,h,k),Pa(k)||Tc(k)?f():Nh(f,k,t(e)?hg:fh,Ff(T([new r(null,3,[dh,a,yg,d,Fg,null],null),t(e)?new r(null,1,[eg,e],null):null],0))))}}
function bi(a,b,c){if(!Yc(b))throw Error("Assert failed: (vector? v)");if(null!=b&&!Yc(b))throw Error("Assert failed: (or (nil? v) (vector? v))");var d;a:{if(null!=b&&!Yc(b))throw Error("Assert failed: (or (nil? v) (vector? v))");if(Tc(b))d=!0;else{d=P(b)-1;for(var e=0;;){var f=Dc(b,e),h=Qh(f),f=t(h)?h:Yc(f);if(t(f)){if(nc.a(d,e)){d=!0;break a}e+=1}else{d=!1;break a}}}}if(t(d))d=b;else a:for(d=Ob(Jc),e=b;;){f=U(e,0,Rh);if(Rh===f){d=Qb(d);break a}d=cd(f)?Sh(d,f):null!=f?Gd.a(d,f):d;e=Fe(e,1,P(e))}if(null!=
b&&!Yc(b))throw Error("Assert failed: (or (nil? v) (vector? v))");for(b=d;!Tc(b);)d=Dc(b,0),t(d)&&a.appendChild(ci.a?ci.a(d,c):ci.call(null,d,c)),b=L(b)}
function ci(a,b){var c;c=Qh(a);c=t(c)?c:Yc(a);if(!t(c))throw Error("Assert failed: (or (hic/literal? o) (vector? o))");if(t(Qh(a)))c=document.createTextNode(a);else{if(!Yc(a))throw Error("Assert failed: (vector? h)");var d=sd(Dc(a,0)),e;c=W(Dc(a,0));e=c.indexOf("#");0<e?e=c.substring(0,e):(e=c.indexOf("."),e=0<e?c.substring(0,e):c);var f;if(t(a)){c=W(Dc(a,0));f=c.indexOf("#");if(0<f){var h=c.indexOf(".");f=0<h?c.substring(f+1,h):c.substring(f+1)}else f=null;b:if(h=c.indexOf("."),0<h)for(c=c.substring(h+
1);;)if(0<c.indexOf("."))c=c.replace("."," ");else{h=c;break b}else h=null;c=U(a,1,null);if(Xc(c)){if(t(t(f)?ed(c,Wg):f))throw new bg("Cannot define id multiple times",Rd,null);if(t(t(f)?f:h)){f=t(f)?new r(null,1,[Wg,f],null):null;if(t(h))var k=Xg.b(c),h=t(k)?t(h)?[y(h),y(" "),y(k)].join(""):""+y(k):h,h=new r(null,1,[Xg,h],null);else h=null;c=Ff(T([c,f,h],0))}f=c}else f=t(t(f)?f:h)?new r(null,2,[Wg,f,Xg,h],null):null}else f=null;c=Xc(U(a,1,null))?2:1;c=P(a)>c?Fe(a,c,P(a)):null;d=Ph(d,b);h=Eg.b(b);
if(t(h))d=h.w?h.w(d,e,f,b):h.call(null,d,e,f,b);else{h=f;f=t(d)?document.createElementNS(d,e):document.createElement(e);for(var h=H(h),k=null,l=0,m=0;;)if(m<l){var n=k.C(null,m),p=U(n,0,null),n=U(n,1,null);t(n)&&ai(f,d,e,p,n,b);m+=1}else if(h=H(h))Zc(h)?(l=Ub(h),h=D(h),k=l,l=P(l)):(l=J(h),k=U(l,0,null),l=U(l,1,null),t(l)&&ai(f,d,e,k,l,b),h=N(h),k=null,l=0),m=0;else break;d=f}t(c)&&bi(d,c,b);c=d}return c};var di=Zd?Zd(Jc):Yd.call(null,Jc),Ba=function(){function a(a){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new I(e,0)}return b.call(this,d)}function b(a){return console.log.apply(console,Wa?Va(a):Ua.call(null,a))}a.F=0;a.D=function(a){a=H(a);return b(a)};a.m=b;return a}(),Ca=function(){function a(a){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new I(e,0)}return b.call(this,
d)}function b(a){return console.error.apply(console,Wa?Va(a):Ua.call(null,a))}a.F=0;a.D=function(a){a=H(a);return b(a)};a.m=b;return a}();function ei(a){var b=rh(document.getElementsByClassName("pswp"))[0],c=ag(vc.b?vc.b(di):vc.call(null,di));return(new PhotoSwipe(b,PhotoSwipeUI_Default,c,{index:a})).init()}
function fi(){return function b(c){return new ud(null,function(){for(;;){var d=H(c);if(d){var e=d;if(Zc(e)){var f=Ub(e),h=P(f),k=new wd(Array(h),0);return function(){for(var b=0;;)if(b<h){var c=A.a(f,b),l=function(){var b=wh(c,pg);return parseInt(b)}(),m=wh(c.children[0],Hg),p=wh(c,jh),n=uh(wh(c,Zg)),u=U(n,0,null),v=U(n,1,null);Hh(c,T([Pg,function(b,c){return function(b){b.preventDefault();return ei(c)}}(b,l,m,p,n,u,v,c,f,h,k,e,d)],0));Bd(k,new r(null,4,[Hg,p,Cg,m,Ag,parseInt(u),Vg,parseInt(v)],null));
b+=1}else return!0}()?zd(k.ia(),b(D(e))):zd(k.ia(),null)}var l=J(e),m=function(){var b=wh(l,pg);return parseInt(b)}(),n=wh(l.children[0],Hg),p=wh(l,jh),u=uh(wh(l,Zg)),v=U(u,0,null),z=U(u,1,null);Hh(l,T([Pg,function(b){return function(c){c.preventDefault();return ei(b)}}(m,n,p,u,v,z,l,e,d)],0));return S(new r(null,4,[Hg,p,Cg,n,Ag,parseInt(v),Vg,parseInt(z)],null),b(L(e)))}return null}},null,null)}(rh(document.querySelectorAll(vh(new X(null,2,5,Y,[kh,vg],null)))))}
function gi(a,b,c,d){return function(e){e.preventDefault();e=window.getComputedStyle(a)[sh(Bg)];e=H(e)?parseInt(e):null;var f=d-e,f=t(b.a?b.a(c,f):b.call(null,c,f))?f:c,h=[y("pos:"),y(e),y(" lim:"),y(d),y("x:"),y(f)].join("");console.log(h);if(t(b.a?b.a(d,e):b.call(null,d,e))){e=T([Bg,e+f],0);if(!Ud(P(e)))throw Error("Assert failed: (even? (count kvs))");e=H(je(2,2,e));for(var f=null,k=h=0;;)if(k<h){var l=f.C(null,k),m=U(l,0,null),l=U(l,1,null);Bh(a,T([m,[y(l),y("px")].join("")],0));k+=1}else if(e=
H(e))Zc(e)?(h=Ub(e),e=D(e),f=h,h=P(h)):(h=J(e),f=U(h,0,null),h=U(h,1,null),Bh(a,T([f,[y(h),y("px")].join("")],0)),e=N(e),f=null,h=0),k=0;else break;e=a}else e=null;return e}}
var hi=function hi(){var b=rh(document.getElementsByClassName("gprev"))[0],c=rh(document.getElementsByClassName("gnext"))[0],d=rh(document.getElementsByClassName("g-slider"))[0],e=xh(d),f=xh(rh(document.getElementsByClassName("g-container"))[0]),h=Dg.b(f)-Dg.b(e),k=function(){var b=[y("bb:"),y(e)].join("");return console.log(b)}(),l=function(){var b=[y("bb2:"),y(f)].join("");return console.log(b)}(),m=gi(d,ld,300,0),n=gi(d,kd,-300,h);Hh(b,T([Pg,m],0));Hh(c,T([Pg,n],0));return window.addEventListener("resize",
function(b,c,d,e,f,h,k,l,m,n){return function(){Ih(b,T([m],0));Ih(c,T([n],0));return hi()}}(b,c,d,e,f,h,k,l,m,n))};function ii(){Lh();var a=document.querySelector(vh(gh)),b=new X(null,4,5,Y,[Ng,new r(null,3,[rg,-1,cg,"dialog",ng,!0],null),new X(null,1,5,Y,[mh],null),new X(null,3,5,Y,[Tg,new X(null,4,5,Y,[Jg,new X(null,1,5,Y,[Qg],null),new X(null,1,5,Y,[Qg],null),new X(null,1,5,Y,[Qg],null)],null),new X(null,6,5,Y,[gg,new X(null,7,5,Y,[mg,new X(null,1,5,Y,[ih],null),new X(null,2,5,Y,[Ug,new r(null,1,[Mg,"Close (Esc)"],null)],null),new X(null,2,5,Y,[Kg,new r(null,1,[Mg,"Share"],null)],null),new X(null,2,5,Y,[dg,
new r(null,1,[Mg,"Toggle fullscreen"],null)],null),new X(null,2,5,Y,[hh,new r(null,1,[Mg,"Zoom in/out"],null)],null),new X(null,2,5,Y,[xg,new X(null,2,5,Y,[lh,new X(null,2,5,Y,[sg,new X(null,1,5,Y,[Sg],null)],null)],null)],null)],null),new X(null,2,5,Y,[lg,new X(null,1,5,Y,[zg],null)],null),new X(null,2,5,Y,[ah,new r(null,1,[Mg,"Previous (arrow left)"],null)],null),new X(null,2,5,Y,[Lg,new r(null,1,[Mg,"Next (arrow right)"],null)],null),new X(null,2,5,Y,[Ig,new X(null,1,5,Y,[og],null)],null)],null)],
null)],null),c;cd(b)?(c=document.createDocumentFragment(),bi(c,De(b),null)):c=null!=b?ci(b,null):null;c.hipo_hiccup=b;a.appendChild(c);ce.f(di,ie,fi());return hi()}ca("magic.index.init",function(){return window.addEventListener("onload",ii)});ca("magic.menu.init",function(){return Lh()});ca("magic.events.init",function(){return Lh()});