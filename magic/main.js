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
var g,aa=this;function ba(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;var ea=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function fa(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function ga(a,b){this.P=[];this.Sa=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.P[d]=e,c=!1)}}var ha={};function ia(a){if(-128<=a&&128>a){var b=ha[a];if(b)return b}b=new ga([a|0],0>a?-1:0);-128<=a&&128>a&&(ha[a]=b);return b}function ka(a){if(isNaN(a)||!isFinite(a))return ma;if(0>a)return ka(-a).Z();for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=na;return new ga(b,0)}var na=4294967296,ma=ia(0),oa=ia(1),qa=ia(16777216);g=ga.prototype;
g.lc=function(){return 0<this.P.length?this.P[0]:this.Sa};g.hb=function(){if(this.ia())return-this.Z().hb();for(var a=0,b=1,c=0;c<this.P.length;c++)var d=ta(this,c),a=a+(0<=d?d:na+d)*b,b=b*na;return a};
g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(this.Fa())return"0";if(this.ia())return"-"+this.Z().toString(a);for(var b=ka(Math.pow(a,6)),c=this,d="";;){var e=wa(c,b),f=(c.wb(e.multiply(b)).lc()>>>0).toString(a),c=e;if(c.Fa())return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function ta(a,b){return 0>b?0:b<a.P.length?a.P[b]:a.Sa}g.Fa=function(){if(0!=this.Sa)return!1;for(var a=0;a<this.P.length;a++)if(0!=this.P[a])return!1;return!0};g.ia=function(){return-1==this.Sa};
g.cc=function(a){return 0<this.compare(a)};g.dc=function(a){return 0<=this.compare(a)};g.Eb=function(){return 0>this.compare(qa)};g.Fb=function(a){return 0>=this.compare(a)};g.compare=function(a){a=this.wb(a);return a.ia()?-1:a.Fa()?0:1};g.Z=function(){return this.hc().add(oa)};
g.add=function(a){for(var b=Math.max(this.P.length,a.P.length),c=[],d=0,e=0;e<=b;e++){var f=d+(ta(this,e)&65535)+(ta(a,e)&65535),h=(f>>>16)+(ta(this,e)>>>16)+(ta(a,e)>>>16),d=h>>>16,f=f&65535,h=h&65535;c[e]=h<<16|f}return new ga(c,c[c.length-1]&-2147483648?-1:0)};g.wb=function(a){return this.add(a.Z())};
g.multiply=function(a){if(this.Fa()||a.Fa())return ma;if(this.ia())return a.ia()?this.Z().multiply(a.Z()):this.Z().multiply(a).Z();if(a.ia())return this.multiply(a.Z()).Z();if(this.Eb()&&a.Eb())return ka(this.hb()*a.hb());for(var b=this.P.length+a.P.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.P.length;d++)for(var e=0;e<a.P.length;e++){var f=ta(this,d)>>>16,h=ta(this,d)&65535,k=ta(a,e)>>>16,l=ta(a,e)&65535;c[2*d+2*e]+=h*l;xa(c,2*d+2*e);c[2*d+2*e+1]+=f*l;xa(c,2*d+2*e+1);c[2*d+2*e+1]+=h*k;xa(c,2*
d+2*e+1);c[2*d+2*e+2]+=f*k;xa(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new ga(c,0)};function xa(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535}
function wa(a,b){if(b.Fa())throw Error("division by zero");if(a.Fa())return ma;if(a.ia())return b.ia()?wa(a.Z(),b.Z()):wa(a.Z(),b).Z();if(b.ia())return wa(a,b.Z()).Z();if(30<a.P.length){if(a.ia()||b.ia())throw Error("slowDivide_ only works with positive integers.");for(var c=oa,d=b;d.Fb(a);)c=c.shiftLeft(1),d=d.shiftLeft(1);for(var e=c.Xa(1),f=d.Xa(1),h,d=d.Xa(2),c=c.Xa(2);!d.Fa();)h=f.add(d),h.Fb(a)&&(e=e.add(c),f=h),d=d.Xa(1),c=c.Xa(1);return e}c=ma;for(d=a;d.dc(b);){e=Math.max(1,Math.floor(d.hb()/
b.hb()));f=Math.ceil(Math.log(e)/Math.LN2);f=48>=f?1:Math.pow(2,f-48);h=ka(e);for(var k=h.multiply(b);k.ia()||k.cc(d);)e-=f,h=ka(e),k=h.multiply(b);h.Fa()&&(h=oa);c=c.add(h);d=d.wb(k)}return c}g.hc=function(){for(var a=this.P.length,b=[],c=0;c<a;c++)b[c]=~this.P[c];return new ga(b,~this.Sa)};g.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.P.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?ta(this,e-b)<<a|ta(this,e-b-1)>>>32-a:ta(this,e-b);return new ga(d,this.Sa)};
g.Xa=function(a){var b=a>>5;a%=32;for(var c=this.P.length-b,d=[],e=0;e<c;e++)d[e]=0<a?ta(this,e+b)>>>a|ta(this,e+b+1)<<32-a:ta(this,e+b);return new ga(d,this.Sa)};function ya(a,b){null!=a&&this.append.apply(this,arguments)}g=ya.prototype;g.Na="";g.set=function(a){this.Na=""+a};g.append=function(a,b,c){this.Na+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.Na+=arguments[d];return this};g.clear=function(){this.Na=""};g.toString=function(){return this.Na};var za;if("undefined"===typeof Aa)var Aa=function(){throw Error("No *print-fn* fn set for evaluation environment");};if("undefined"===typeof Ba)var Ba=function(){throw Error("No *print-err-fn* fn set for evaluation environment");};var Da=null;if("undefined"===typeof Ea)var Ea=null;function Ga(){return new r(null,5,[Ha,!0,Ia,!0,Ka,!1,La,!1,Ma,null],null)}function t(a){return null!=a&&!1!==a}function Na(a){return a instanceof Array}function Pa(a){return null==a?!0:!1===a?!0:!1}
function w(a,b){return a[q(null==b?null:b)]?!0:a._?!0:!1}function x(a,b){var c=null==b?null:b.constructor,c=t(t(c)?c.Db:c)?c.kb:q(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function Qa(a){var b=a.kb;return t(b)?b:""+y(a)}var Ra="undefined"!==typeof Symbol&&"function"===q(Symbol)?Symbol.iterator:"@@iterator";function Sa(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}
function Ta(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Va(arguments[0]);case 2:return Va(arguments[1]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function Wa(a){return Va(a)}function Va(a){function b(a,b){a.push(b);return a}var c=[];return Xa?Xa(b,c,a):Ya.call(null,b,c,a)}function Za(){}
var $a=function $a(b){if(null!=b&&null!=b.V)return b.V(b);var c=$a[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=$a._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ICounted.-count",b);};function ab(){}var bb=function bb(b,c){if(null!=b&&null!=b.R)return b.R(b,c);var d=bb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=bb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("ICollection.-conj",b);};function cb(){}
var B=function B(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return B.a(arguments[0],arguments[1]);case 3:return B.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};
B.a=function(a,b){if(null!=a&&null!=a.F)return a.F(a,b);var c=B[q(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=B._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw x("IIndexed.-nth",a);};B.f=function(a,b,c){if(null!=a&&null!=a.ga)return a.ga(a,b,c);var d=B[q(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=B._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw x("IIndexed.-nth",a);};B.D=3;function eb(){}
var fb=function fb(b){if(null!=b&&null!=b.Y)return b.Y(b);var c=fb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=fb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ISeq.-first",b);},D=function D(b){if(null!=b&&null!=b.da)return b.da(b);var c=D[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=D._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ISeq.-rest",b);};function gb(){}function hb(){}
var E=function E(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return E.a(arguments[0],arguments[1]);case 3:return E.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};
E.a=function(a,b){if(null!=a&&null!=a.J)return a.J(a,b);var c=E[q(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=E._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw x("ILookup.-lookup",a);};E.f=function(a,b,c){if(null!=a&&null!=a.I)return a.I(a,b,c);var d=E[q(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=E._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw x("ILookup.-lookup",a);};E.D=3;
var ib=function ib(b,c){if(null!=b&&null!=b.nb)return b.nb(b,c);var d=ib[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=ib._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IAssociative.-contains-key?",b);},jb=function jb(b,c,d){if(null!=b&&null!=b.Ya)return b.Ya(b,c,d);var e=jb[q(null==b?null:b)];if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=jb._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("IAssociative.-assoc",b);};function lb(){}
function mb(){}var nb=function nb(b){if(null!=b&&null!=b.rb)return b.rb();var c=nb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=nb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IMapEntry.-key",b);},ob=function ob(b){if(null!=b&&null!=b.sb)return b.sb();var c=ob[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=ob._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IMapEntry.-val",b);};function pb(){}
var qb=function qb(b){if(null!=b&&null!=b.Za)return b.Za(b);var c=qb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=qb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IStack.-peek",b);},rb=function rb(b){if(null!=b&&null!=b.$a)return b.$a(b);var c=rb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=rb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IStack.-pop",b);};function sb(){}
var tb=function tb(b,c,d){if(null!=b&&null!=b.tb)return b.tb(b,c,d);var e=tb[q(null==b?null:b)];if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=tb._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("IVector.-assoc-n",b);},ub=function ub(b){if(null!=b&&null!=b.Jb)return b.state;var c=ub[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=ub._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IDeref.-deref",b);};function vb(){}
var wb=function wb(b){if(null!=b&&null!=b.L)return b.L(b);var c=wb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=wb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IMeta.-meta",b);},xb=function xb(b,c){if(null!=b&&null!=b.N)return b.N(b,c);var d=xb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=xb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IWithMeta.-with-meta",b);};function yb(){}
var Bb=function Bb(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return Bb.a(arguments[0],arguments[1]);case 3:return Bb.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};
Bb.a=function(a,b){if(null!=a&&null!=a.W)return a.W(a,b);var c=Bb[q(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=Bb._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw x("IReduce.-reduce",a);};Bb.f=function(a,b,c){if(null!=a&&null!=a.X)return a.X(a,b,c);var d=Bb[q(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=Bb._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw x("IReduce.-reduce",a);};Bb.D=3;
var Cb=function Cb(b,c){if(null!=b&&null!=b.s)return b.s(b,c);var d=Cb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Cb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IEquiv.-equiv",b);},Db=function Db(b){if(null!=b&&null!=b.K)return b.K(b);var c=Db[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Db._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IHash.-hash",b);};function Eb(){}
var Fb=function Fb(b){if(null!=b&&null!=b.T)return b.T(b);var c=Fb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Fb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ISeqable.-seq",b);};function Gb(){}function Hb(){}
var G=function G(b,c){if(null!=b&&null!=b.Cb)return b.Cb(0,c);var d=G[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=G._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IWriter.-write",b);},Ib=function Ib(b,c,d){if(null!=b&&null!=b.Bb)return b.Bb(0,c,d);var e=Ib[q(null==b?null:b)];if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=Ib._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("IWatchable.-notify-watches",b);},Jb=function Jb(b){if(null!=b&&null!=
b.Ua)return b.Ua(b);var c=Jb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Jb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IEditableCollection.-as-transient",b);},Kb=function Kb(b,c){if(null!=b&&null!=b.bb)return b.bb(b,c);var d=Kb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Kb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("ITransientCollection.-conj!",b);},Lb=function Lb(b){if(null!=b&&null!=b.cb)return b.cb(b);var c=Lb[q(null==b?
null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Lb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("ITransientCollection.-persistent!",b);},Mb=function Mb(b,c,d){if(null!=b&&null!=b.ab)return b.ab(b,c,d);var e=Mb[q(null==b?null:b)];if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=Mb._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("ITransientAssociative.-assoc!",b);},Nb=function Nb(b,c,d){if(null!=b&&null!=b.Ab)return b.Ab(0,c,d);var e=Nb[q(null==b?null:b)];if(null!=
e)return e.f?e.f(b,c,d):e.call(null,b,c,d);e=Nb._;if(null!=e)return e.f?e.f(b,c,d):e.call(null,b,c,d);throw x("ITransientVector.-assoc-n!",b);},Ob=function Ob(b){if(null!=b&&null!=b.yb)return b.yb();var c=Ob[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Ob._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IChunk.-drop-first",b);},Qb=function Qb(b){if(null!=b&&null!=b.pb)return b.pb(b);var c=Qb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Qb._;if(null!=c)return c.b?
c.b(b):c.call(null,b);throw x("IChunkedSeq.-chunked-first",b);},Rb=function Rb(b){if(null!=b&&null!=b.qb)return b.qb(b);var c=Rb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Rb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IChunkedSeq.-chunked-rest",b);},Sb=function Sb(b){if(null!=b&&null!=b.ob)return b.ob(b);var c=Sb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Sb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IChunkedNext.-chunked-next",b);
},Tb=function Tb(b,c){if(null!=b&&null!=b.Ub)return b.Ub(b,c);var d=Tb[q(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Tb._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw x("IReset.-reset!",b);},Ub=function Ub(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return Ub.a(arguments[0],arguments[1]);case 3:return Ub.f(arguments[0],arguments[1],arguments[2]);case 4:return Ub.w(arguments[0],arguments[1],arguments[2],
arguments[3]);case 5:return Ub.H(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};Ub.a=function(a,b){if(null!=a&&null!=a.Wb)return a.Wb(a,b);var c=Ub[q(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=Ub._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw x("ISwap.-swap!",a);};
Ub.f=function(a,b,c){if(null!=a&&null!=a.Xb)return a.Xb(a,b,c);var d=Ub[q(null==a?null:a)];if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);d=Ub._;if(null!=d)return d.f?d.f(a,b,c):d.call(null,a,b,c);throw x("ISwap.-swap!",a);};Ub.w=function(a,b,c,d){if(null!=a&&null!=a.Yb)return a.Yb(a,b,c,d);var e=Ub[q(null==a?null:a)];if(null!=e)return e.w?e.w(a,b,c,d):e.call(null,a,b,c,d);e=Ub._;if(null!=e)return e.w?e.w(a,b,c,d):e.call(null,a,b,c,d);throw x("ISwap.-swap!",a);};
Ub.H=function(a,b,c,d,e){if(null!=a&&null!=a.Zb)return a.Zb(a,b,c,d,e);var f=Ub[q(null==a?null:a)];if(null!=f)return f.H?f.H(a,b,c,d,e):f.call(null,a,b,c,d,e);f=Ub._;if(null!=f)return f.H?f.H(a,b,c,d,e):f.call(null,a,b,c,d,e);throw x("ISwap.-swap!",a);};Ub.D=5;var Vb=function Vb(b){if(null!=b&&null!=b.Ea)return b.Ea(b);var c=Vb[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Vb._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IIterable.-iterator",b);};
function Wb(a){this.jc=a;this.i=1073741824;this.A=0}Wb.prototype.Cb=function(a,b){return this.jc.append(b)};function Xb(a){var b=new ya;a.M(null,new Wb(b),Ga());return""+y(b)}var Yb="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function Zb(a){a=Yb(a|0,-862048943);return Yb(a<<15|a>>>-15,461845907)}
function $b(a,b){var c=(a|0)^(b|0);return Yb(c<<13|c>>>-13,5)+-430675100|0}function ac(a,b){var c=(a|0)^b,c=Yb(c^c>>>16,-2048144789),c=Yb(c^c>>>13,-1028477387);return c^c>>>16}function bc(a){var b;a:{b=1;for(var c=0;;)if(b<a.length){var d=b+2,c=$b(c,Zb(a.charCodeAt(b-1)|a.charCodeAt(b)<<16));b=d}else{b=c;break a}}b=1===(a.length&1)?b^Zb(a.charCodeAt(a.length-1)):b;return ac(b,Yb(2,a.length))}var cc={},ec=0;
function fc(a){255<ec&&(cc={},ec=0);if(null==a)return 0;var b=cc[a];if("number"!==typeof b){a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b)var e=c+1,d=Yb(31,d)+a.charCodeAt(c),c=e;else{b=d;break a}else b=0;else b=0;cc[a]=b;ec+=1}return a=b}
function gc(a){if(null!=a&&(a.i&4194304||a.pc))return a.K(null);if("number"===typeof a){if(t(isFinite(a)))return Math.floor(a)%2147483647;switch(a){case Infinity:return 2146435072;case -Infinity:return-1048576;default:return 2146959360}}else return!0===a?a=1:!1===a?a=0:"string"===typeof a?(a=fc(a),0!==a&&(a=Zb(a),a=$b(0,a),a=ac(a,4))):a=a instanceof Date?a.valueOf():null==a?0:Db(a),a}function hc(a,b){return a^b+2654435769+(a<<6)+(a>>2)}
function ic(a,b,c,d,e){this.gb=a;this.name=b;this.Ma=c;this.Ta=d;this.fa=e;this.i=2154168321;this.A=4096}g=ic.prototype;g.toString=function(){return this.Ma};g.equiv=function(a){return this.s(null,a)};g.s=function(a,b){return b instanceof ic?this.Ma===b.Ma:!1};
g.call=function(){function a(a,b,c){return H.f?H.f(b,this,c):H.call(null,b,this,c)}function b(a,b){return H.a?H.a(b,this):H.call(null,b,this)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,0,e);case 3:return a.call(this,0,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.f=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.b=function(a){return H.a?H.a(a,this):H.call(null,a,this)};
g.a=function(a,b){return H.f?H.f(a,this,b):H.call(null,a,this,b)};g.L=function(){return this.fa};g.N=function(a,b){return new ic(this.gb,this.name,this.Ma,this.Ta,b)};g.K=function(){var a=this.Ta;return null!=a?a:this.Ta=a=hc(bc(this.name),fc(this.gb))};g.M=function(a,b){return G(b,this.Ma)};
function J(a){if(null==a)return null;if(null!=a&&(a.i&8388608||a.Vb))return a.T(null);if(Na(a)||"string"===typeof a)return 0===a.length?null:new K(a,0,null);if(w(Eb,a))return Fb(a);throw Error([y(a),y(" is not ISeqable")].join(""));}function L(a){if(null==a)return null;if(null!=a&&(a.i&64||a.Oa))return a.Y(null);a=J(a);return null==a?null:fb(a)}function M(a){return null!=a?null!=a&&(a.i&64||a.Oa)?a.da(null):(a=J(a))?D(a):jc:jc}
function N(a){return null==a?null:null!=a&&(a.i&128||a.jb)?a.$(null):J(M(a))}var kc=function kc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return kc.b(arguments[0]);case 2:return kc.a(arguments[0],arguments[1]);default:return kc.o(arguments[0],arguments[1],new K(c.slice(2),0,null))}};kc.b=function(){return!0};kc.a=function(a,b){return null==a?null==b:a===b||Cb(a,b)};
kc.o=function(a,b,c){for(;;)if(kc.a(a,b))if(N(c))a=b,b=L(c),c=N(c);else return kc.a(b,L(c));else return!1};kc.C=function(a){var b=L(a),c=N(a);a=L(c);c=N(c);return kc.o(b,a,c)};kc.D=2;function lc(a){this.u=a}lc.prototype.next=function(){if(null!=this.u){var a=L(this.u);this.u=N(this.u);return{value:a,done:!1}}return{value:null,done:!0}};function mc(a){return new lc(J(a))}function nc(a,b){var c=Zb(a),c=$b(0,c);return ac(c,b)}
function oc(a){var b=0,c=1;for(a=J(a);;)if(null!=a)b+=1,c=Yb(31,c)+gc(L(a))|0,a=N(a);else return nc(c,b)}var pc=nc(1,0);function qc(a){var b=0,c=0;for(a=J(a);;)if(null!=a)b+=1,c=c+gc(L(a))|0,a=N(a);else return nc(c,b)}var rc=nc(0,0);Za["null"]=!0;$a["null"]=function(){return 0};Date.prototype.s=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};Cb.number=function(a,b){return a===b};vb["function"]=!0;wb["function"]=function(){return null};Db._=function(a){return a[ca]||(a[ca]=++da)};
function sc(a){return ub(a)}function tc(a,b){var c=$a(a);if(0===c)return b.B?b.B():b.call(null);for(var d=B.a(a,0),e=1;;)if(e<c)var f=B.a(a,e),d=b.a?b.a(d,f):b.call(null,d,f),e=e+1;else return d}function uc(a,b,c){var d=$a(a),e=c;for(c=0;;)if(c<d){var f=B.a(a,c),e=b.a?b.a(e,f):b.call(null,e,f);c+=1}else return e}function vc(a,b){var c=a.length;if(0===a.length)return b.B?b.B():b.call(null);for(var d=a[0],e=1;;)if(e<c)var f=a[e],d=b.a?b.a(d,f):b.call(null,d,f),e=e+1;else return d}
function wc(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var f=a[c],e=b.a?b.a(e,f):b.call(null,e,f);c+=1}else return e}function xc(a,b,c,d){for(var e=a.length;;)if(d<e){var f=a[d];c=b.a?b.a(c,f):b.call(null,c,f);d+=1}else return c}function yc(a){return null!=a?a.i&2||a.Ib?!0:a.i?!1:w(Za,a):w(Za,a)}function zc(a){return null!=a?a.i&16||a.zb?!0:a.i?!1:w(cb,a):w(cb,a)}
function O(a,b,c){var d=P.b?P.b(a):P.call(null,a);if(c>=d)return-1;!(0<c)&&0>c&&(c+=d,c=0>c?0:c);for(;;)if(c<d){if(kc.a(Ac?Ac(a,c):Bc.call(null,a,c),b))return c;c+=1}else return-1}function R(a,b,c){var d=P.b?P.b(a):P.call(null,a);if(0===d)return-1;0<c?(--d,c=d<c?d:c):c=0>c?d+c:c;for(;;)if(0<=c){if(kc.a(Ac?Ac(a,c):Bc.call(null,a,c),b))return c;--c}else return-1}function Cc(a,b){this.c=a;this.j=b}Cc.prototype.aa=function(){return this.j<this.c.length};
Cc.prototype.next=function(){var a=this.c[this.j];this.j+=1;return a};function K(a,b,c){this.c=a;this.j=b;this.l=c;this.i=166592766;this.A=8192}g=K.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P.b?P.b(this):P.call(null,this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.F=function(a,b){var c=b+this.j;return c<this.c.length?this.c[c]:null};g.ga=function(a,b,c){a=b+this.j;return a<this.c.length?this.c[a]:c};g.Ea=function(){return new Cc(this.c,this.j)};g.L=function(){return this.l};
g.$=function(){return this.j+1<this.c.length?new K(this.c,this.j+1,null):null};g.V=function(){var a=this.c.length-this.j;return 0>a?0:a};g.K=function(){return oc(this)};g.s=function(a,b){return Dc.a?Dc.a(this,b):Dc.call(null,this,b)};g.W=function(a,b){return xc(this.c,b,this.c[this.j],this.j+1)};g.X=function(a,b,c){return xc(this.c,b,c,this.j)};g.Y=function(){return this.c[this.j]};g.da=function(){return this.j+1<this.c.length?new K(this.c,this.j+1,null):jc};
g.T=function(){return this.j<this.c.length?this:null};g.N=function(a,b){return new K(this.c,this.j,b)};g.R=function(a,b){return S.a?S.a(b,this):S.call(null,b,this)};K.prototype[Ra]=function(){return mc(this)};function Ec(a,b){return b<a.length?new K(a,b,null):null}
function Gc(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Ec(arguments[0],0);case 2:return Ec(arguments[0],arguments[1]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}Cb._=function(a,b){return a===b};
var Hc=function Hc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Hc.B();case 1:return Hc.b(arguments[0]);case 2:return Hc.a(arguments[0],arguments[1]);default:return Hc.o(arguments[0],arguments[1],new K(c.slice(2),0,null))}};Hc.B=function(){return Ic};Hc.b=function(a){return a};Hc.a=function(a,b){return null!=a?bb(a,b):bb(jc,b)};Hc.o=function(a,b,c){for(;;)if(t(c))a=Hc.a(a,b),b=L(c),c=N(c);else return Hc.a(a,b)};
Hc.C=function(a){var b=L(a),c=N(a);a=L(c);c=N(c);return Hc.o(b,a,c)};Hc.D=2;function P(a){if(null!=a)if(null!=a&&(a.i&2||a.Ib))a=a.V(null);else if(Na(a))a=a.length;else if("string"===typeof a)a=a.length;else if(null!=a&&(a.i&8388608||a.Vb))a:{a=J(a);for(var b=0;;){if(yc(a)){a=b+$a(a);break a}a=N(a);b+=1}}else a=$a(a);else a=0;return a}function Jc(a,b,c){for(;;){if(null==a)return c;if(0===b)return J(a)?L(a):c;if(zc(a))return B.f(a,b,c);if(J(a))a=N(a),--b;else return c}}
function Bc(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Ac(arguments[0],arguments[1]);case 3:return T(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}
function Ac(a,b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(null!=a&&(a.i&16||a.zb))return a.F(null,b);if(Na(a))return b<a.length?a[b]:null;if("string"===typeof a)return b<a.length?a.charAt(b):null;if(null!=a&&(a.i&64||a.Oa)){var c;a:{c=a;for(var d=b;;){if(null==c)throw Error("Index out of bounds");if(0===d){if(J(c)){c=L(c);break a}throw Error("Index out of bounds");}if(zc(c)){c=B.a(c,d);break a}if(J(c))c=N(c),--d;else throw Error("Index out of bounds");
}}return c}if(w(cb,a))return B.a(a,b);throw Error([y("nth not supported on this type "),y(Qa(null==a?null:a.constructor))].join(""));}
function T(a,b,c){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return c;if(null!=a&&(a.i&16||a.zb))return a.ga(null,b,c);if(Na(a))return b<a.length?a[b]:c;if("string"===typeof a)return b<a.length?a.charAt(b):c;if(null!=a&&(a.i&64||a.Oa))return Jc(a,b,c);if(w(cb,a))return B.a(a,b);throw Error([y("nth not supported on this type "),y(Qa(null==a?null:a.constructor))].join(""));}
var H=function H(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return H.a(arguments[0],arguments[1]);case 3:return H.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};H.a=function(a,b){return null==a?null:null!=a&&(a.i&256||a.Ob)?a.J(null,b):Na(a)?b<a.length?a[b|0]:null:"string"===typeof a?b<a.length?a[b|0]:null:w(hb,a)?E.a(a,b):null};
H.f=function(a,b,c){return null!=a?null!=a&&(a.i&256||a.Ob)?a.I(null,b,c):Na(a)?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:w(hb,a)?E.f(a,b,c):c:c};H.D=3;var Kc=function Kc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 3:return Kc.f(arguments[0],arguments[1],arguments[2]);default:return Kc.o(arguments[0],arguments[1],arguments[2],new K(c.slice(3),0,null))}};
Kc.f=function(a,b,c){if(null!=a)a=jb(a,b,c);else a:{a=[b];c=[c];b=a.length;for(var d=0,e=Jb(Lc);;)if(d<b)var f=d+1,e=e.ab(null,a[d],c[d]),d=f;else{a=Lb(e);break a}}return a};Kc.o=function(a,b,c,d){for(;;)if(a=Kc.f(a,b,c),t(d))b=L(d),c=L(N(d)),d=N(N(d));else return a};Kc.C=function(a){var b=L(a),c=N(a);a=L(c);var d=N(c),c=L(d),d=N(d);return Kc.o(b,a,c,d)};Kc.D=3;function Mc(a,b){this.g=a;this.l=b;this.i=393217;this.A=0}g=Mc.prototype;g.L=function(){return this.l};
g.N=function(a,b){return new Mc(this.g,b)};
g.call=function(){function a(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C,Q,W,sa){a=this;return Nc.ib?Nc.ib(a.g,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C,Q,W,sa):Nc.call(null,a.g,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C,Q,W,sa)}function b(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C,Q,W){a=this;return a.g.za?a.g.za(b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C,Q,W):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C,Q,W)}function c(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C,Q){a=this;return a.g.ya?a.g.ya(b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,
C,Q):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C,Q)}function d(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C){a=this;return a.g.xa?a.g.xa(b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I,C)}function e(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I){a=this;return a.g.wa?a.g.wa(b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F,I)}function f(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F){a=this;return a.g.va?a.g.va(b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F):a.g.call(null,
b,c,d,e,f,h,k,l,m,n,p,u,v,z,A,F)}function h(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A){a=this;return a.g.ua?a.g.ua(b,c,d,e,f,h,k,l,m,n,p,u,v,z,A):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,u,v,z,A)}function k(a,b,c,d,e,f,h,k,l,m,n,p,u,v,z){a=this;return a.g.ta?a.g.ta(b,c,d,e,f,h,k,l,m,n,p,u,v,z):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,u,v,z)}function l(a,b,c,d,e,f,h,k,l,m,n,p,u,v){a=this;return a.g.sa?a.g.sa(b,c,d,e,f,h,k,l,m,n,p,u,v):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,u,v)}function m(a,b,c,d,e,f,h,k,l,m,n,p,u){a=this;
return a.g.ra?a.g.ra(b,c,d,e,f,h,k,l,m,n,p,u):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,u)}function n(a,b,c,d,e,f,h,k,l,m,n,p){a=this;return a.g.qa?a.g.qa(b,c,d,e,f,h,k,l,m,n,p):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p)}function p(a,b,c,d,e,f,h,k,l,m,n){a=this;return a.g.pa?a.g.pa(b,c,d,e,f,h,k,l,m,n):a.g.call(null,b,c,d,e,f,h,k,l,m,n)}function v(a,b,c,d,e,f,h,k,l,m){a=this;return a.g.Da?a.g.Da(b,c,d,e,f,h,k,l,m):a.g.call(null,b,c,d,e,f,h,k,l,m)}function u(a,b,c,d,e,f,h,k,l){a=this;return a.g.Ca?a.g.Ca(b,c,
d,e,f,h,k,l):a.g.call(null,b,c,d,e,f,h,k,l)}function z(a,b,c,d,e,f,h,k){a=this;return a.g.Ba?a.g.Ba(b,c,d,e,f,h,k):a.g.call(null,b,c,d,e,f,h,k)}function A(a,b,c,d,e,f,h){a=this;return a.g.Aa?a.g.Aa(b,c,d,e,f,h):a.g.call(null,b,c,d,e,f,h)}function F(a,b,c,d,e,f){a=this;return a.g.H?a.g.H(b,c,d,e,f):a.g.call(null,b,c,d,e,f)}function I(a,b,c,d,e){a=this;return a.g.w?a.g.w(b,c,d,e):a.g.call(null,b,c,d,e)}function Q(a,b,c,d){a=this;return a.g.f?a.g.f(b,c,d):a.g.call(null,b,c,d)}function W(a,b,c){a=this;
return a.g.a?a.g.a(b,c):a.g.call(null,b,c)}function sa(a,b){a=this;return a.g.b?a.g.b(b):a.g.call(null,b)}function Ab(a){a=this;return a.g.B?a.g.B():a.g.call(null)}var C=null,C=function(C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db,kb,zb,Pb,dc,Fc,rd,ge,Af,Ig){switch(arguments.length){case 1:return Ab.call(this,C);case 2:return sa.call(this,C,ja);case 3:return W.call(this,C,ja,la);case 4:return Q.call(this,C,ja,la,pa);case 5:return I.call(this,C,ja,la,pa,ra);case 6:return F.call(this,C,ja,la,pa,ra,ua);case 7:return A.call(this,
C,ja,la,pa,ra,ua,va);case 8:return z.call(this,C,ja,la,pa,ra,ua,va,Ca);case 9:return u.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa);case 10:return v.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja);case 11:return p.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa);case 12:return n.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua);case 13:return m.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db);case 14:return l.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db,kb);case 15:return k.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,
db,kb,zb);case 16:return h.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db,kb,zb,Pb);case 17:return f.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db,kb,zb,Pb,dc);case 18:return e.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db,kb,zb,Pb,dc,Fc);case 19:return d.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db,kb,zb,Pb,dc,Fc,rd);case 20:return c.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db,kb,zb,Pb,dc,Fc,rd,ge);case 21:return b.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db,kb,zb,Pb,dc,Fc,rd,ge,
Af);case 22:return a.call(this,C,ja,la,pa,ra,ua,va,Ca,Fa,Ja,Oa,Ua,db,kb,zb,Pb,dc,Fc,rd,ge,Af,Ig)}throw Error("Invalid arity: "+arguments.length);};C.b=Ab;C.a=sa;C.f=W;C.w=Q;C.H=I;C.Aa=F;C.Ba=A;C.Ca=z;C.Da=u;C.pa=v;C.qa=p;C.ra=n;C.sa=m;C.ta=l;C.ua=k;C.va=h;C.wa=f;C.xa=e;C.ya=d;C.za=c;C.Nb=b;C.ib=a;return C}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.B=function(){return this.g.B?this.g.B():this.g.call(null)};
g.b=function(a){return this.g.b?this.g.b(a):this.g.call(null,a)};g.a=function(a,b){return this.g.a?this.g.a(a,b):this.g.call(null,a,b)};g.f=function(a,b,c){return this.g.f?this.g.f(a,b,c):this.g.call(null,a,b,c)};g.w=function(a,b,c,d){return this.g.w?this.g.w(a,b,c,d):this.g.call(null,a,b,c,d)};g.H=function(a,b,c,d,e){return this.g.H?this.g.H(a,b,c,d,e):this.g.call(null,a,b,c,d,e)};g.Aa=function(a,b,c,d,e,f){return this.g.Aa?this.g.Aa(a,b,c,d,e,f):this.g.call(null,a,b,c,d,e,f)};
g.Ba=function(a,b,c,d,e,f,h){return this.g.Ba?this.g.Ba(a,b,c,d,e,f,h):this.g.call(null,a,b,c,d,e,f,h)};g.Ca=function(a,b,c,d,e,f,h,k){return this.g.Ca?this.g.Ca(a,b,c,d,e,f,h,k):this.g.call(null,a,b,c,d,e,f,h,k)};g.Da=function(a,b,c,d,e,f,h,k,l){return this.g.Da?this.g.Da(a,b,c,d,e,f,h,k,l):this.g.call(null,a,b,c,d,e,f,h,k,l)};g.pa=function(a,b,c,d,e,f,h,k,l,m){return this.g.pa?this.g.pa(a,b,c,d,e,f,h,k,l,m):this.g.call(null,a,b,c,d,e,f,h,k,l,m)};
g.qa=function(a,b,c,d,e,f,h,k,l,m,n){return this.g.qa?this.g.qa(a,b,c,d,e,f,h,k,l,m,n):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n)};g.ra=function(a,b,c,d,e,f,h,k,l,m,n,p){return this.g.ra?this.g.ra(a,b,c,d,e,f,h,k,l,m,n,p):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p)};g.sa=function(a,b,c,d,e,f,h,k,l,m,n,p,v){return this.g.sa?this.g.sa(a,b,c,d,e,f,h,k,l,m,n,p,v):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,v)};
g.ta=function(a,b,c,d,e,f,h,k,l,m,n,p,v,u){return this.g.ta?this.g.ta(a,b,c,d,e,f,h,k,l,m,n,p,v,u):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,v,u)};g.ua=function(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z){return this.g.ua?this.g.ua(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,v,u,z)};g.va=function(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A){return this.g.va?this.g.va(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A)};
g.wa=function(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F){return this.g.wa?this.g.wa(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F)};g.xa=function(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I){return this.g.xa?this.g.xa(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I)};
g.ya=function(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q){return this.g.ya?this.g.ya(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q)};g.za=function(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W){return this.g.za?this.g.za(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W)};
g.Nb=function(a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W,sa){return Nc.ib?Nc.ib(this.g,a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W,sa):Nc.call(null,this.g,a,b,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W,sa)};function Oc(a,b){return"function"==q(a)?new Mc(a,b):null==a?null:xb(a,b)}function Pc(a){var b=null!=a;return(b?null!=a?a.i&131072||a.Rb||(a.i?0:w(vb,a)):w(vb,a):b)?wb(a):null}function Qc(a){return null==a||Pa(J(a))}function Rc(a){return null==a?!1:null!=a?a.i&8||a.oc?!0:a.i?!1:w(ab,a):w(ab,a)}
function Sc(a){return null==a?!1:null!=a?a.i&4096||a.sc?!0:a.i?!1:w(pb,a):w(pb,a)}function Tc(a){return null!=a?a.i&16777216||a.rc?!0:a.i?!1:w(Gb,a):w(Gb,a)}function Uc(a){return null==a?!1:null!=a?a.i&1024||a.Pb?!0:a.i?!1:w(lb,a):w(lb,a)}function Vc(a){return null!=a?a.i&16384||a.tc?!0:a.i?!1:w(sb,a):w(sb,a)}function Wc(a){return null!=a?a.A&512||a.nc?!0:!1:!1}function Xc(a){var b=[];fa(a,function(a,b){return function(a,c){return b.push(c)}}(a,b));return b}
function Yc(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,--e,b+=1}var Zc={};function $c(a){return null==a?!1:null!=a?a.i&64||a.Oa?!0:a.i?!1:w(eb,a):w(eb,a)}function ad(a){return null==a?!1:!1===a?!1:!0}function bd(a,b){return H.f(a,b,Zc)===Zc?!1:!0}function cd(a,b){var c=J(b);if(c){var d=L(c),c=N(c);return Xa?Xa(a,d,c):Ya.call(null,a,d,c)}return a.B?a.B():a.call(null)}function dd(a,b,c){for(c=J(c);;)if(c){var d=L(c);b=a.a?a.a(b,d):a.call(null,b,d);c=N(c)}else return b}
function Ya(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return ed(arguments[0],arguments[1]);case 3:return Xa(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function ed(a,b){return null!=b&&(b.i&524288||b.Tb)?b.W(null,a):Na(b)?vc(b,a):"string"===typeof b?vc(b,a):w(yb,b)?Bb.a(b,a):cd(a,b)}
function Xa(a,b,c){return null!=c&&(c.i&524288||c.Tb)?c.X(null,a,b):Na(c)?wc(c,a,b):"string"===typeof c?wc(c,a,b):w(yb,c)?Bb.f(c,a,b):dd(a,b,c)}function fd(a){return a}function gd(a,b,c,d){a=a.b?a.b(b):a.call(null,b);c=Xa(a,c,d);return a.b?a.b(c):a.call(null,c)}
var hd=function hd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return hd.b(arguments[0]);case 2:return hd.a(arguments[0],arguments[1]);default:return hd.o(arguments[0],arguments[1],new K(c.slice(2),0,null))}};hd.b=function(){return!0};hd.a=function(a,b){return a<b};hd.o=function(a,b,c){for(;;)if(a<b)if(N(c))a=b,b=L(c),c=N(c);else return b<L(c);else return!1};hd.C=function(a){var b=L(a),c=N(a);a=L(c);c=N(c);return hd.o(b,a,c)};hd.D=2;
var id=function id(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return id.b(arguments[0]);case 2:return id.a(arguments[0],arguments[1]);default:return id.o(arguments[0],arguments[1],new K(c.slice(2),0,null))}};id.b=function(){return!0};id.a=function(a,b){return a>b};id.o=function(a,b,c){for(;;)if(a>b)if(N(c))a=b,b=L(c),c=N(c);else return b>L(c);else return!1};id.C=function(a){var b=L(a),c=N(a);a=L(c);c=N(c);return id.o(b,a,c)};id.D=2;
function jd(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}function kd(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}var y=function y(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return y.B();case 1:return y.b(arguments[0]);default:return y.o(arguments[0],new K(c.slice(1),0,null))}};y.B=function(){return""};y.b=function(a){return null==a?"":""+a};
y.o=function(a,b){for(var c=new ya(""+y(a)),d=b;;)if(t(d))c=c.append(""+y(L(d))),d=N(d);else return c.toString()};y.C=function(a){var b=L(a);a=N(a);return y.o(b,a)};y.D=1;function Dc(a,b){var c;if(Tc(b))if(yc(a)&&yc(b)&&P(a)!==P(b))c=!1;else a:{c=J(a);for(var d=J(b);;){if(null==c){c=null==d;break a}if(null!=d&&kc.a(L(c),L(d)))c=N(c),d=N(d);else{c=!1;break a}}}else c=null;return ad(c)}function ld(a,b,c,d,e){this.l=a;this.first=b;this.Ga=c;this.count=d;this.m=e;this.i=65937646;this.A=8192}g=ld.prototype;
g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,this.count)}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.l};g.$=function(){return 1===this.count?null:this.Ga};g.V=function(){return this.count};g.Za=function(){return this.first};g.$a=function(){return D(this)};
g.K=function(){var a=this.m;return null!=a?a:this.m=a=oc(this)};g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){return cd(b,this)};g.X=function(a,b,c){return dd(b,c,this)};g.Y=function(){return this.first};g.da=function(){return 1===this.count?jc:this.Ga};g.T=function(){return this};g.N=function(a,b){return new ld(b,this.first,this.Ga,this.count,this.m)};g.R=function(a,b){return new ld(this.l,b,this,this.count+1,null)};ld.prototype[Ra]=function(){return mc(this)};
function md(a){this.l=a;this.i=65937614;this.A=8192}g=md.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.l};g.$=function(){return null};g.V=function(){return 0};g.Za=function(){return null};g.$a=function(){throw Error("Can't pop empty list");};g.K=function(){return pc};
g.s=function(a,b){return(null!=b?b.i&33554432||b.qc||(b.i?0:w(Hb,b)):w(Hb,b))||Tc(b)?null==J(b):!1};g.W=function(a,b){return cd(b,this)};g.X=function(a,b,c){return dd(b,c,this)};g.Y=function(){return null};g.da=function(){return jc};g.T=function(){return null};g.N=function(a,b){return new md(b)};g.R=function(a,b){return new ld(this.l,b,null,1,null)};var jc=new md(null);md.prototype[Ra]=function(){return mc(this)};
function nd(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;a:{c=0<b.length?new K(b.slice(0),0,null):null;if(c instanceof K&&0===c.j)b=c.c;else b:for(b=[];;)if(null!=c)b.push(c.Y(null)),c=c.$(null);else break b;for(var c=b.length,e=jc;;)if(0<c)d=c-1,e=e.R(null,b[c-1]),c=d;else break a}return e}function od(a,b,c,d){this.l=a;this.first=b;this.Ga=c;this.m=d;this.i=65929452;this.A=8192}g=od.prototype;g.toString=function(){return Xb(this)};
g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.l};g.$=function(){return null==this.Ga?null:J(this.Ga)};g.K=function(){var a=this.m;return null!=a?a:this.m=a=oc(this)};g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){return cd(b,this)};
g.X=function(a,b,c){return dd(b,c,this)};g.Y=function(){return this.first};g.da=function(){return null==this.Ga?jc:this.Ga};g.T=function(){return this};g.N=function(a,b){return new od(b,this.first,this.Ga,this.m)};g.R=function(a,b){return new od(null,b,this,null)};od.prototype[Ra]=function(){return mc(this)};function S(a,b){var c=null==b;return(c?c:null!=b&&(b.i&64||b.Oa))?new od(null,a,b,null):new od(null,a,J(b),null)}
function U(a,b,c,d){this.gb=a;this.name=b;this.Ja=c;this.Ta=d;this.i=2153775105;this.A=4096}g=U.prototype;g.toString=function(){return[y(":"),y(this.Ja)].join("")};g.equiv=function(a){return this.s(null,a)};g.s=function(a,b){return b instanceof U?this.Ja===b.Ja:!1};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return H.a(c,this);case 3:return H.f(c,this,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return H.a(c,this)};a.f=function(a,c,d){return H.f(c,this,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.b=function(a){return H.a(a,this)};g.a=function(a,b){return H.f(a,this,b)};
g.K=function(){var a=this.Ta;return null!=a?a:this.Ta=a=hc(bc(this.name),fc(this.gb))+2654435769|0};g.M=function(a,b){return G(b,[y(":"),y(this.Ja)].join(""))};function pd(a){if(null!=a&&(a.A&4096||a.Sb))return a.gb;throw Error([y("Doesn't support namespace: "),y(a)].join(""));}
var qd=function qd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return qd.b(arguments[0]);case 2:return qd.a(arguments[0],arguments[1]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};qd.b=function(a){if(a instanceof U)return a;if(a instanceof ic)return new U(pd(a),sd.b?sd.b(a):sd.call(null,a),a.Ma,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new U(b[0],b[1],a,null):new U(null,b[0],a,null)}return null};
qd.a=function(a,b){return new U(a,b,[y(t(a)?[y(a),y("/")].join(""):null),y(b)].join(""),null)};qd.D=2;function td(a,b,c,d){this.l=a;this.Wa=b;this.u=c;this.m=d;this.i=32374988;this.A=1}g=td.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};function ud(a){null!=a.Wa&&(a.u=a.Wa.B?a.Wa.B():a.Wa.call(null),a.Wa=null);return a.u}
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.l};g.$=function(){Fb(this);return null==this.u?null:N(this.u)};g.K=function(){var a=this.m;return null!=a?a:this.m=a=oc(this)};g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){return cd(b,this)};
g.X=function(a,b,c){return dd(b,c,this)};g.Y=function(){Fb(this);return null==this.u?null:L(this.u)};g.da=function(){Fb(this);return null!=this.u?M(this.u):jc};g.T=function(){ud(this);if(null==this.u)return null;for(var a=this.u;;)if(a instanceof td)a=ud(a);else return this.u=a,J(this.u)};g.N=function(a,b){return new td(b,this.Wa,this.u,this.m)};g.R=function(a,b){return S(b,this)};td.prototype[Ra]=function(){return mc(this)};function vd(a,b){this.mb=a;this.end=b;this.i=2;this.A=0}
vd.prototype.add=function(a){this.mb[this.end]=a;return this.end+=1};vd.prototype.ha=function(){var a=new wd(this.mb,0,this.end);this.mb=null;return a};vd.prototype.V=function(){return this.end};function wd(a,b,c){this.c=a;this.off=b;this.end=c;this.i=524306;this.A=0}g=wd.prototype;g.V=function(){return this.end-this.off};g.F=function(a,b){return this.c[this.off+b]};g.ga=function(a,b,c){return 0<=b&&b<this.end-this.off?this.c[this.off+b]:c};
g.yb=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new wd(this.c,this.off+1,this.end)};g.W=function(a,b){return xc(this.c,b,this.c[this.off],this.off+1)};g.X=function(a,b,c){return xc(this.c,b,c,this.off)};function xd(a,b,c,d){this.ha=a;this.na=b;this.l=c;this.m=d;this.i=31850732;this.A=1536}g=xd.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.l};g.$=function(){if(1<$a(this.ha))return new xd(Ob(this.ha),this.na,this.l,null);var a=Fb(this.na);return null==a?null:a};g.K=function(){var a=this.m;return null!=a?a:this.m=a=oc(this)};
g.s=function(a,b){return Dc(this,b)};g.Y=function(){return B.a(this.ha,0)};g.da=function(){return 1<$a(this.ha)?new xd(Ob(this.ha),this.na,this.l,null):null==this.na?jc:this.na};g.T=function(){return this};g.pb=function(){return this.ha};g.qb=function(){return null==this.na?jc:this.na};g.N=function(a,b){return new xd(this.ha,this.na,b,this.m)};g.R=function(a,b){return S(b,this)};g.ob=function(){return null==this.na?null:this.na};xd.prototype[Ra]=function(){return mc(this)};
function yd(a,b){return 0===$a(a)?b:new xd(a,b,null,null)}function zd(a,b){a.add(b)}function Ad(a){for(var b=[];;)if(J(a))b.push(L(a)),a=N(a);else return b}function Bd(a,b){if(yc(b))return P(b);for(var c=0,d=J(b);;)if(null!=d&&c<a)c+=1,d=N(d);else return c}
var Cd=function Cd(b){return null==b?null:null==N(b)?J(L(b)):S(L(b),Cd(N(b)))},Dd=function Dd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Dd.B();case 1:return Dd.b(arguments[0]);case 2:return Dd.a(arguments[0],arguments[1]);default:return Dd.o(arguments[0],arguments[1],new K(c.slice(2),0,null))}};Dd.B=function(){return new td(null,function(){return null},null,null)};
Dd.b=function(a){return new td(null,function(){return a},null,null)};Dd.a=function(a,b){return new td(null,function(){var c=J(a);return c?Wc(c)?yd(Qb(c),Dd.a(Rb(c),b)):S(L(c),Dd.a(M(c),b)):b},null,null)};Dd.o=function(a,b,c){return function e(a,b){return new td(null,function(){var c=J(a);return c?Wc(c)?yd(Qb(c),e(Rb(c),b)):S(L(c),e(M(c),b)):t(b)?e(L(b),N(b)):null},null,null)}(Dd.a(a,b),c)};Dd.C=function(a){var b=L(a),c=N(a);a=L(c);c=N(c);return Dd.o(b,a,c)};Dd.D=2;
var Ed=function Ed(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Ed.B();case 1:return Ed.b(arguments[0]);case 2:return Ed.a(arguments[0],arguments[1]);default:return Ed.o(arguments[0],arguments[1],new K(c.slice(2),0,null))}};Ed.B=function(){return Jb(Ic)};Ed.b=function(a){return a};Ed.a=function(a,b){return Kb(a,b)};Ed.o=function(a,b,c){for(;;)if(a=Kb(a,b),t(c))b=L(c),c=N(c);else return a};
Ed.C=function(a){var b=L(a),c=N(a);a=L(c);c=N(c);return Ed.o(b,a,c)};Ed.D=2;
function Fd(a,b,c){var d=J(c);if(0===b)return a.B?a.B():a.call(null);c=fb(d);var e=D(d);if(1===b)return a.b?a.b(c):a.b?a.b(c):a.call(null,c);var d=fb(e),f=D(e);if(2===b)return a.a?a.a(c,d):a.a?a.a(c,d):a.call(null,c,d);var e=fb(f),h=D(f);if(3===b)return a.f?a.f(c,d,e):a.f?a.f(c,d,e):a.call(null,c,d,e);var f=fb(h),k=D(h);if(4===b)return a.w?a.w(c,d,e,f):a.w?a.w(c,d,e,f):a.call(null,c,d,e,f);var h=fb(k),l=D(k);if(5===b)return a.H?a.H(c,d,e,f,h):a.H?a.H(c,d,e,f,h):a.call(null,c,d,e,f,h);var k=fb(l),
m=D(l);if(6===b)return a.Aa?a.Aa(c,d,e,f,h,k):a.Aa?a.Aa(c,d,e,f,h,k):a.call(null,c,d,e,f,h,k);var l=fb(m),n=D(m);if(7===b)return a.Ba?a.Ba(c,d,e,f,h,k,l):a.Ba?a.Ba(c,d,e,f,h,k,l):a.call(null,c,d,e,f,h,k,l);var m=fb(n),p=D(n);if(8===b)return a.Ca?a.Ca(c,d,e,f,h,k,l,m):a.Ca?a.Ca(c,d,e,f,h,k,l,m):a.call(null,c,d,e,f,h,k,l,m);var n=fb(p),v=D(p);if(9===b)return a.Da?a.Da(c,d,e,f,h,k,l,m,n):a.Da?a.Da(c,d,e,f,h,k,l,m,n):a.call(null,c,d,e,f,h,k,l,m,n);var p=fb(v),u=D(v);if(10===b)return a.pa?a.pa(c,d,e,f,
h,k,l,m,n,p):a.pa?a.pa(c,d,e,f,h,k,l,m,n,p):a.call(null,c,d,e,f,h,k,l,m,n,p);var v=fb(u),z=D(u);if(11===b)return a.qa?a.qa(c,d,e,f,h,k,l,m,n,p,v):a.qa?a.qa(c,d,e,f,h,k,l,m,n,p,v):a.call(null,c,d,e,f,h,k,l,m,n,p,v);var u=fb(z),A=D(z);if(12===b)return a.ra?a.ra(c,d,e,f,h,k,l,m,n,p,v,u):a.ra?a.ra(c,d,e,f,h,k,l,m,n,p,v,u):a.call(null,c,d,e,f,h,k,l,m,n,p,v,u);var z=fb(A),F=D(A);if(13===b)return a.sa?a.sa(c,d,e,f,h,k,l,m,n,p,v,u,z):a.sa?a.sa(c,d,e,f,h,k,l,m,n,p,v,u,z):a.call(null,c,d,e,f,h,k,l,m,n,p,v,
u,z);var A=fb(F),I=D(F);if(14===b)return a.ta?a.ta(c,d,e,f,h,k,l,m,n,p,v,u,z,A):a.ta?a.ta(c,d,e,f,h,k,l,m,n,p,v,u,z,A):a.call(null,c,d,e,f,h,k,l,m,n,p,v,u,z,A);var F=fb(I),Q=D(I);if(15===b)return a.ua?a.ua(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F):a.ua?a.ua(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F):a.call(null,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F);var I=fb(Q),W=D(Q);if(16===b)return a.va?a.va(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I):a.va?a.va(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I):a.call(null,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I);var Q=fb(W),sa=
D(W);if(17===b)return a.wa?a.wa(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q):a.wa?a.wa(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q):a.call(null,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q);var W=fb(sa),Ab=D(sa);if(18===b)return a.xa?a.xa(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W):a.xa?a.xa(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W):a.call(null,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W);sa=fb(Ab);Ab=D(Ab);if(19===b)return a.ya?a.ya(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W,sa):a.ya?a.ya(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W,sa):a.call(null,c,d,e,f,h,k,
l,m,n,p,v,u,z,A,F,I,Q,W,sa);var C=fb(Ab);D(Ab);if(20===b)return a.za?a.za(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W,sa,C):a.za?a.za(c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W,sa,C):a.call(null,c,d,e,f,h,k,l,m,n,p,v,u,z,A,F,I,Q,W,sa,C);throw Error("Only up to 20 arguments supported on functions");}
function Nc(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Gd(arguments[0],arguments[1]);case 3:return Hd(arguments[0],arguments[1],arguments[2]);case 4:b=arguments[0];c=S(arguments[1],S(arguments[2],arguments[3]));d=b.D;if(b.C)var e=Bd(d+1,c),b=e<=d?Fd(b,e,c):b.C(c);else b=b.apply(b,Ad(c));return b;case 5:return Id(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:return Jd(arguments[0],arguments[1],arguments[2],
arguments[3],arguments[4],new K(b.slice(5),0,null))}}function Gd(a,b){var c=a.D;if(a.C){var d=Bd(c+1,b);return d<=c?Fd(a,d,b):a.C(b)}return a.apply(a,Ad(b))}function Hd(a,b,c){b=S(b,c);c=a.D;if(a.C){var d=Bd(c+1,b);return d<=c?Fd(a,d,b):a.C(b)}return a.apply(a,Ad(b))}function Id(a,b,c,d,e){b=S(b,S(c,S(d,e)));c=a.D;return a.C?(d=Bd(c+1,b),d<=c?Fd(a,d,b):a.C(b)):a.apply(a,Ad(b))}
function Jd(a,b,c,d,e,f){b=S(b,S(c,S(d,S(e,Cd(f)))));c=a.D;return a.C?(d=Bd(c+1,b),d<=c?Fd(a,d,b):a.C(b)):a.apply(a,Ad(b))}
var Kd=function Kd(){"undefined"===typeof za&&(za=function(b,c){this.gc=b;this.fc=c;this.i=393216;this.A=0},za.prototype.N=function(b,c){return new za(this.gc,c)},za.prototype.L=function(){return this.fc},za.prototype.aa=function(){return!1},za.prototype.next=function(){return Error("No such element")},za.prototype.remove=function(){return Error("Unsupported operation")},za.uc=function(){return new V(null,2,5,X,[Oc(Ld,new r(null,1,[Md,nd(Nd,nd(Ic))],null)),Od],null)},za.Db=!0,za.kb="cljs.core/t_cljs$core10603",
za.$b=function(b){return G(b,"cljs.core/t_cljs$core10603")});return new za(Kd,Pd)};function Qd(a,b){for(;;){if(null==J(b))return!0;var c;c=L(b);c=a.b?a.b(c):a.call(null,c);if(t(c)){c=a;var d=N(b);a=c;b=d}else return!1}}function Rd(a,b){for(;;)if(J(b)){var c;c=L(b);c=a.b?a.b(c):a.call(null,c);if(t(c))return c;c=a;var d=N(b);a=c;b=d}else return null}
function Sd(a){if("number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10))return 0===(a&1);throw Error([y("Argument must be an integer: "),y(a)].join(""));}
function Td(a,b){var c=Ud;return function(){function d(d,e,f){return c.H?c.H(a,b,d,e,f):c.call(null,a,b,d,e,f)}function e(d,e){return c.w?c.w(a,b,d,e):c.call(null,a,b,d,e)}function f(d){return c.f?c.f(a,b,d):c.call(null,a,b,d)}function h(){return c.a?c.a(a,b):c.call(null,a,b)}var k=null,l=function(){function d(a,b,c,f){var h=null;if(3<arguments.length){for(var h=0,k=Array(arguments.length-3);h<k.length;)k[h]=arguments[h+3],++h;h=new K(k,0)}return e.call(this,a,b,c,h)}function e(d,f,h,k){return Jd(c,
a,b,d,f,Gc([h,k],0))}d.D=3;d.C=function(a){var b=L(a);a=N(a);var c=L(a);a=N(a);var d=L(a);a=M(a);return e(b,c,d,a)};d.o=e;return d}(),k=function(a,b,c,k){switch(arguments.length){case 0:return h.call(this);case 1:return f.call(this,a);case 2:return e.call(this,a,b);case 3:return d.call(this,a,b,c);default:var u=null;if(3<arguments.length){for(var u=0,z=Array(arguments.length-3);u<z.length;)z[u]=arguments[u+3],++u;u=new K(z,0)}return l.o(a,b,c,u)}throw Error("Invalid arity: "+arguments.length);};k.D=
3;k.C=l.C;k.B=h;k.b=f;k.a=e;k.f=d;k.o=l.o;return k}()}function Vd(a,b,c,d){this.state=a;this.l=b;this.mc=c;this.Hb=d;this.A=16386;this.i=6455296}g=Vd.prototype;g.equiv=function(a){return this.s(null,a)};g.s=function(a,b){return this===b};g.Jb=function(){return this.state};g.L=function(){return this.l};
g.Bb=function(a,b,c){a=J(this.Hb);for(var d=null,e=0,f=0;;)if(f<e){var h=d.F(null,f),k=T(h,0,null),h=T(h,1,null);h.w?h.w(k,this,b,c):h.call(null,k,this,b,c);f+=1}else if(a=J(a))Wc(a)?(d=Qb(a),a=Rb(a),k=d,e=P(d),d=k):(d=L(a),k=T(d,0,null),h=T(d,1,null),h.w?h.w(k,this,b,c):h.call(null,k,this,b,c),a=N(a),d=null,e=0),f=0;else return null};g.K=function(){return this[ca]||(this[ca]=++da)};
function Wd(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Xd(arguments[0]);default:return c=arguments[0],b=new K(b.slice(1),0,null),d=null!=b&&(b.i&64||b.Oa)?Gd(Yd,b):b,b=H.a(d,Ka),d=H.a(d,Zd),new Vd(c,b,d,null)}}function Xd(a){return new Vd(a,null,null,null)}
function $d(a,b){if(a instanceof Vd){var c=a.mc;if(null!=c&&!t(c.b?c.b(b):c.call(null,b)))throw Error("Validator rejected reference state");c=a.state;a.state=b;null!=a.Hb&&Ib(a,c,b);return b}return Tb(a,b)}
var ae=function ae(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return ae.a(arguments[0],arguments[1]);case 3:return ae.f(arguments[0],arguments[1],arguments[2]);case 4:return ae.w(arguments[0],arguments[1],arguments[2],arguments[3]);default:return ae.o(arguments[0],arguments[1],arguments[2],arguments[3],new K(c.slice(4),0,null))}};
ae.a=function(a,b){var c;a instanceof Vd?(c=a.state,c=b.b?b.b(c):b.call(null,c),c=$d(a,c)):c=Ub.a(a,b);return c};ae.f=function(a,b,c){if(a instanceof Vd){var d=a.state;b=b.a?b.a(d,c):b.call(null,d,c);a=$d(a,b)}else a=Ub.f(a,b,c);return a};ae.w=function(a,b,c,d){if(a instanceof Vd){var e=a.state;b=b.f?b.f(e,c,d):b.call(null,e,c,d);a=$d(a,b)}else a=Ub.w(a,b,c,d);return a};ae.o=function(a,b,c,d,e){return a instanceof Vd?$d(a,Id(b,a.state,c,d,e)):Ub.H(a,b,c,d,e)};
ae.C=function(a){var b=L(a),c=N(a);a=L(c);var d=N(c),c=L(d),e=N(d),d=L(e),e=N(e);return ae.o(b,a,c,d,e)};ae.D=4;
var Y=function Y(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return Y.b(arguments[0]);case 2:return Y.a(arguments[0],arguments[1]);case 3:return Y.f(arguments[0],arguments[1],arguments[2]);case 4:return Y.w(arguments[0],arguments[1],arguments[2],arguments[3]);default:return Y.o(arguments[0],arguments[1],arguments[2],arguments[3],new K(c.slice(4),0,null))}};
Y.b=function(a){return function(b){return function(){function c(c,d){var e=a.b?a.b(d):a.call(null,d);return b.a?b.a(c,e):b.call(null,c,e)}function d(a){return b.b?b.b(a):b.call(null,a)}function e(){return b.B?b.B():b.call(null)}var f=null,h=function(){function c(a,b,e){var f=null;if(2<arguments.length){for(var f=0,h=Array(arguments.length-2);f<h.length;)h[f]=arguments[f+2],++f;f=new K(h,0)}return d.call(this,a,b,f)}function d(c,e,f){e=Hd(a,e,f);return b.a?b.a(c,e):b.call(null,c,e)}c.D=2;c.C=function(a){var b=
L(a);a=N(a);var c=L(a);a=M(a);return d(b,c,a)};c.o=d;return c}(),f=function(a,b,f){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var n=null;if(2<arguments.length){for(var n=0,p=Array(arguments.length-2);n<p.length;)p[n]=arguments[n+2],++n;n=new K(p,0)}return h.o(a,b,n)}throw Error("Invalid arity: "+arguments.length);};f.D=2;f.C=h.C;f.B=e;f.b=d;f.a=c;f.o=h.o;return f}()}};
Y.a=function(a,b){return new td(null,function(){var c=J(b);if(c){if(Wc(c)){for(var d=Qb(c),e=P(d),f=new vd(Array(e),0),h=0;;)if(h<e)zd(f,function(){var b=B.a(d,h);return a.b?a.b(b):a.call(null,b)}()),h+=1;else break;return yd(f.ha(),Y.a(a,Rb(c)))}return S(function(){var b=L(c);return a.b?a.b(b):a.call(null,b)}(),Y.a(a,M(c)))}return null},null,null)};
Y.f=function(a,b,c){return new td(null,function(){var d=J(b),e=J(c);if(d&&e){var f=S,h;h=L(d);var k=L(e);h=a.a?a.a(h,k):a.call(null,h,k);d=f(h,Y.f(a,M(d),M(e)))}else d=null;return d},null,null)};Y.w=function(a,b,c,d){return new td(null,function(){var e=J(b),f=J(c),h=J(d);if(e&&f&&h){var k=S,l;l=L(e);var m=L(f),n=L(h);l=a.f?a.f(l,m,n):a.call(null,l,m,n);e=k(l,Y.w(a,M(e),M(f),M(h)))}else e=null;return e},null,null)};
Y.o=function(a,b,c,d,e){var f=function k(a){return new td(null,function(){var b=Y.a(J,a);return Qd(fd,b)?S(Y.a(L,b),k(Y.a(M,b))):null},null,null)};return Y.a(function(){return function(b){return Gd(a,b)}}(f),f(Hc.o(e,d,Gc([c,b],0))))};Y.C=function(a){var b=L(a),c=N(a);a=L(c);var d=N(c),c=L(d),e=N(d),d=L(e),e=N(e);return Y.o(b,a,c,d,e)};Y.D=4;
function be(a,b){if("number"!==typeof a)throw Error("Assert failed: (number? n)");return new td(null,function(){if(0<a){var c=J(b);return c?S(L(c),be(a-1,M(c))):null}return null},null,null)}function ce(a,b){if("number"!==typeof a)throw Error("Assert failed: (number? n)");return new td(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=J(b);if(0<a&&e){var f=a-1,e=M(e);a=f;b=e}else return e}}),null,null)}
var de=function de(b,c){return S(c,new td(null,function(){return de(b,b.b?b.b(c):b.call(null,c))},null,null))};function ee(a,b){return new td(null,function(){var c=J(b);if(c){if(Wc(c)){for(var d=Qb(c),e=P(d),f=new vd(Array(e),0),h=0;;)if(h<e){var k;k=B.a(d,h);k=a.b?a.b(k):a.call(null,k);t(k)&&(k=B.a(d,h),f.add(k));h+=1}else break;return yd(f.ha(),ee(a,Rb(c)))}d=L(c);c=M(c);return t(a.b?a.b(d):a.call(null,d))?S(d,ee(a,c)):ee(a,c)}return null},null,null)}
var fe=function fe(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return fe.a(arguments[0],arguments[1]);case 3:return fe.f(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(c.length)].join(""));}};fe.a=function(a,b){return null!=a?null!=a&&(a.A&4||a.Kb)?Oc(Lb(Xa(Kb,Jb(a),b)),Pc(a)):Xa(bb,a,b):Xa(Hc,jc,b)};fe.f=function(a,b,c){return null!=a&&(a.A&4||a.Kb)?Oc(Lb(gd(b,Ed,Jb(a),c)),Pc(a)):gd(b,Hc,a,c)};
fe.D=3;function he(a,b,c){return new td(null,function(){var d=J(c);if(d){var e=be(a,d);return a===P(e)?S(e,he(a,b,ce(b,d))):null}return null},null,null)}var ie=function ie(b,c,d){var e=J(c);c=L(e);return(e=N(e))?Kc.f(b,c,ie(H.a(b,c),e,d)):Kc.f(b,c,d)};function je(a,b){this.G=a;this.c=b}function ke(a){return new je(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}
function le(a){return new je(a.G,Sa(a.c))}function me(a){a=a.h;return 32>a?0:a-1>>>5<<5}function ne(a,b,c){for(;;){if(0===b)return c;var d=ke(a);d.c[0]=c;c=d;b-=5}}var oe=function oe(b,c,d,e){var f=le(d),h=b.h-1>>>c&31;5===c?f.c[h]=e:(d=d.c[h],b=null!=d?oe(b,c-5,d,e):ne(null,c-5,e),f.c[h]=b);return f};function pe(a,b){throw Error([y("No item "),y(a),y(" in vector of length "),y(b)].join(""));}
function qe(a,b){if(b>=me(a))return a.U;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.c[b>>>d&31],d=e;else return c.c}function re(a,b){return 0<=b&&b<a.h?qe(a,b):pe(b,a.h)}var se=function se(b,c,d,e,f){var h=le(d);if(0===c)h.c[e&31]=f;else{var k=e>>>c&31;b=se(b,c-5,d.c[k],e,f);h.c[k]=b}return h},te=function te(b,c,d){var e=b.h-2>>>c&31;if(5<c){b=te(b,c-5,d.c[e]);if(null==b&&0===e)return null;d=le(d);d.c[e]=b;return d}if(0===e)return null;d=le(d);d.c[e]=null;return d};
function ue(a,b,c,d,e,f){this.j=a;this.lb=b;this.c=c;this.ja=d;this.start=e;this.end=f}ue.prototype.aa=function(){return this.j<this.end};ue.prototype.next=function(){32===this.j-this.lb&&(this.c=qe(this.ja,this.j),this.lb+=32);var a=this.c[this.j&31];this.j+=1;return a};function V(a,b,c,d,e,f){this.l=a;this.h=b;this.shift=c;this.root=d;this.U=e;this.m=f;this.i=167668511;this.A=8196}g=V.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.J=function(a,b){return E.f(this,b,null)};g.I=function(a,b,c){return"number"===typeof b?B.f(this,b,c):c};g.F=function(a,b){return re(this,b)[b&31]};g.ga=function(a,b,c){return 0<=b&&b<this.h?qe(this,b)[b&31]:c};
g.tb=function(a,b,c){if(0<=b&&b<this.h)return me(this)<=b?(a=Sa(this.U),a[b&31]=c,new V(this.l,this.h,this.shift,this.root,a,null)):new V(this.l,this.h,this.shift,se(this,this.shift,this.root,b,c),this.U,null);if(b===this.h)return bb(this,c);throw Error([y("Index "),y(b),y(" out of bounds  [0,"),y(this.h),y("]")].join(""));};g.Ea=function(){var a=this.h;return new ue(0,0,0<P(this)?qe(this,0):null,this,0,a)};g.L=function(){return this.l};g.V=function(){return this.h};
g.rb=function(){return B.a(this,0)};g.sb=function(){return B.a(this,1)};g.Za=function(){return 0<this.h?B.a(this,this.h-1):null};
g.$a=function(){if(0===this.h)throw Error("Can't pop empty vector");if(1===this.h)return xb(Ic,this.l);if(1<this.h-me(this))return new V(this.l,this.h-1,this.shift,this.root,this.U.slice(0,-1),null);var a=qe(this,this.h-2),b=te(this,this.shift,this.root),b=null==b?X:b,c=this.h-1;return 5<this.shift&&null==b.c[1]?new V(this.l,c,this.shift-5,b.c[0],a,null):new V(this.l,c,this.shift,b,a,null)};g.K=function(){var a=this.m;return null!=a?a:this.m=a=oc(this)};
g.s=function(a,b){if(b instanceof V)if(this.h===P(b))for(var c=Vb(this),d=Vb(b);;)if(t(c.aa())){var e=c.next(),f=d.next();if(!kc.a(e,f))return!1}else return!0;else return!1;else return Dc(this,b)};g.Ua=function(){return new ve(this.h,this.shift,we.b?we.b(this.root):we.call(null,this.root),xe.b?xe.b(this.U):xe.call(null,this.U))};g.W=function(a,b){return tc(this,b)};
g.X=function(a,b,c){a=0;for(var d=c;;)if(a<this.h){var e=qe(this,a);c=e.length;a:for(var f=0;;)if(f<c)var h=e[f],d=b.a?b.a(d,h):b.call(null,d,h),f=f+1;else{e=d;break a}a+=c;d=e}else return d};g.Ya=function(a,b,c){if("number"===typeof b)return tb(this,b,c);throw Error("Vector's key for assoc must be a number.");};
g.T=function(){if(0===this.h)return null;if(32>=this.h)return new K(this.U,0,null);var a;a:{a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.c[0];else{a=a.c;break a}}return ye?ye(this,a,0,0):ze.call(null,this,a,0,0)};g.N=function(a,b){return new V(b,this.h,this.shift,this.root,this.U,this.m)};
g.R=function(a,b){if(32>this.h-me(this)){for(var c=this.U.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.U[e],e+=1;else break;d[c]=b;return new V(this.l,this.h+1,this.shift,this.root,d,null)}c=(d=this.h>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=ke(null),d.c[0]=this.root,e=ne(null,this.shift,new je(null,this.U)),d.c[1]=e):d=oe(this,this.shift,this.root,new je(null,this.U));return new V(this.l,this.h+1,c,d,[b],null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.F(null,c);case 3:return this.ga(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.F(null,c)};a.f=function(a,c,d){return this.ga(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.b=function(a){return this.F(null,a)};g.a=function(a,b){return this.ga(null,a,b)};
var X=new je(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),Ic=new V(null,0,5,X,[],pc);V.prototype[Ra]=function(){return mc(this)};function Ae(a){if(Na(a))a:{var b=a.length;if(32>b)a=new V(null,b,5,X,a,null);else for(var c=32,d=(new V(null,32,5,X,a.slice(0,32),null)).Ua(null);;)if(c<b)var e=c+1,d=Ed.a(d,a[c]),c=e;else{a=Lb(d);break a}}else a=Lb(Xa(Kb,Jb(Ic),a));return a}
function Be(a,b,c,d,e,f){this.ea=a;this.node=b;this.j=c;this.off=d;this.l=e;this.m=f;this.i=32375020;this.A=1536}g=Be.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.l};g.$=function(){if(this.off+1<this.node.length){var a;a=this.ea;var b=this.node,c=this.j,d=this.off+1;a=ye?ye(a,b,c,d):ze.call(null,a,b,c,d);return null==a?null:a}return Sb(this)};
g.K=function(){var a=this.m;return null!=a?a:this.m=a=oc(this)};g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){var c;c=this.ea;var d=this.j+this.off,e=P(this.ea);c=Ce?Ce(c,d,e):De.call(null,c,d,e);return tc(c,b)};g.X=function(a,b,c){a=this.ea;var d=this.j+this.off,e=P(this.ea);a=Ce?Ce(a,d,e):De.call(null,a,d,e);return uc(a,b,c)};g.Y=function(){return this.node[this.off]};
g.da=function(){if(this.off+1<this.node.length){var a;a=this.ea;var b=this.node,c=this.j,d=this.off+1;a=ye?ye(a,b,c,d):ze.call(null,a,b,c,d);return null==a?jc:a}return Rb(this)};g.T=function(){return this};g.pb=function(){var a=this.node;return new wd(a,this.off,a.length)};g.qb=function(){var a=this.j+this.node.length;if(a<$a(this.ea)){var b=this.ea,c=qe(this.ea,a);return ye?ye(b,c,a,0):ze.call(null,b,c,a,0)}return jc};
g.N=function(a,b){return Ee?Ee(this.ea,this.node,this.j,this.off,b):ze.call(null,this.ea,this.node,this.j,this.off,b)};g.R=function(a,b){return S(b,this)};g.ob=function(){var a=this.j+this.node.length;if(a<$a(this.ea)){var b=this.ea,c=qe(this.ea,a);return ye?ye(b,c,a,0):ze.call(null,b,c,a,0)}return null};Be.prototype[Ra]=function(){return mc(this)};
function ze(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 3:return b=arguments[0],c=arguments[1],d=arguments[2],new Be(b,re(b,c),c,d,null,null);case 4:return ye(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return Ee(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function ye(a,b,c,d){return new Be(a,b,c,d,null,null)}
function Ee(a,b,c,d,e){return new Be(a,b,c,d,e,null)}function Fe(a,b,c,d,e){this.l=a;this.ja=b;this.start=c;this.end=d;this.m=e;this.i=167666463;this.A=8192}g=Fe.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.J=function(a,b){return E.f(this,b,null)};g.I=function(a,b,c){return"number"===typeof b?B.f(this,b,c):c};g.F=function(a,b){return 0>b||this.end<=this.start+b?pe(b,this.end-this.start):B.a(this.ja,this.start+b)};
g.ga=function(a,b,c){return 0>b||this.end<=this.start+b?c:B.f(this.ja,this.start+b,c)};g.tb=function(a,b,c){var d=this.start+b;a=this.l;c=Kc.f(this.ja,d,c);b=this.start;var e=this.end,d=d+1,d=e>d?e:d;return Ge.H?Ge.H(a,c,b,d,null):Ge.call(null,a,c,b,d,null)};g.L=function(){return this.l};g.V=function(){return this.end-this.start};g.Za=function(){return B.a(this.ja,this.end-1)};
g.$a=function(){if(this.start===this.end)throw Error("Can't pop empty vector");var a=this.l,b=this.ja,c=this.start,d=this.end-1;return Ge.H?Ge.H(a,b,c,d,null):Ge.call(null,a,b,c,d,null)};g.K=function(){var a=this.m;return null!=a?a:this.m=a=oc(this)};g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){return tc(this,b)};g.X=function(a,b,c){return uc(this,b,c)};g.Ya=function(a,b,c){if("number"===typeof b)return tb(this,b,c);throw Error("Subvec's key for assoc must be a number.");};
g.T=function(){var a=this;return function(b){return function d(e){return e===a.end?null:S(B.a(a.ja,e),new td(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};g.N=function(a,b){return Ge.H?Ge.H(b,this.ja,this.start,this.end,this.m):Ge.call(null,b,this.ja,this.start,this.end,this.m)};g.R=function(a,b){var c=this.l,d=tb(this.ja,this.end,b),e=this.start,f=this.end+1;return Ge.H?Ge.H(c,d,e,f,null):Ge.call(null,c,d,e,f,null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.F(null,c);case 3:return this.ga(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.F(null,c)};a.f=function(a,c,d){return this.ga(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.b=function(a){return this.F(null,a)};g.a=function(a,b){return this.ga(null,a,b)};Fe.prototype[Ra]=function(){return mc(this)};
function Ge(a,b,c,d,e){for(;;)if(b instanceof Fe)c=b.start+c,d=b.start+d,b=b.ja;else{var f=P(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new Fe(a,b,c,d,e)}}function De(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return b=arguments[0],Ce(b,arguments[1],P(b));case 3:return Ce(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}
function Ce(a,b,c){return Ge(null,a,b,c,null)}function He(a,b){return a===b.G?b:new je(a,Sa(b.c))}function we(a){return new je({},Sa(a.c))}function xe(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];Yc(a,0,b,0,a.length);return b}var Ie=function Ie(b,c,d,e){d=He(b.root.G,d);var f=b.h-1>>>c&31;if(5===c)b=e;else{var h=d.c[f];b=null!=h?Ie(b,c-5,h,e):ne(b.root.G,c-5,e)}d.c[f]=b;return d};
function ve(a,b,c,d){this.h=a;this.shift=b;this.root=c;this.U=d;this.A=88;this.i=275}g=ve.prototype;
g.bb=function(a,b){if(this.root.G){if(32>this.h-me(this))this.U[this.h&31]=b;else{var c=new je(this.root.G,this.U),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.U=d;if(this.h>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=ne(this.root.G,this.shift,c);this.root=new je(this.root.G,d);this.shift=e}else this.root=Ie(this,this.shift,this.root,c)}this.h+=1;return this}throw Error("conj! after persistent!");};g.cb=function(){if(this.root.G){this.root.G=null;var a=this.h-me(this),b=Array(a);Yc(this.U,0,b,0,a);return new V(null,this.h,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
g.ab=function(a,b,c){if("number"===typeof b)return Nb(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
g.Ab=function(a,b,c){var d=this;if(d.root.G){if(0<=b&&b<d.h)return me(this)<=b?d.U[b&31]=c:(a=function(){return function f(a,k){var l=He(d.root.G,k);if(0===a)l.c[b&31]=c;else{var m=b>>>a&31,n=f(a-5,l.c[m]);l.c[m]=n}return l}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.h)return Kb(this,c);throw Error([y("Index "),y(b),y(" out of bounds for TransientVector of length"),y(d.h)].join(""));}throw Error("assoc! after persistent!");};
g.V=function(){if(this.root.G)return this.h;throw Error("count after persistent!");};g.F=function(a,b){if(this.root.G)return re(this,b)[b&31];throw Error("nth after persistent!");};g.ga=function(a,b,c){return 0<=b&&b<this.h?B.a(this,b):c};g.J=function(a,b){return E.f(this,b,null)};g.I=function(a,b,c){return"number"===typeof b?B.f(this,b,c):c};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.I(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.f=function(a,c,d){return this.I(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.b=function(a){return this.J(null,a)};g.a=function(a,b){return this.I(null,a,b)};function Je(){this.i=2097152;this.A=0}
Je.prototype.equiv=function(a){return this.s(null,a)};Je.prototype.s=function(){return!1};var Ke=new Je;function Le(a,b){return ad(Uc(b)?P(a)===P(b)?Qd(function(a){return kc.a(H.f(b,L(a),Ke),L(N(a)))},a):null:null)}function Me(a){this.u=a}Me.prototype.next=function(){if(null!=this.u){var a=L(this.u),b=T(a,0,null),a=T(a,1,null);this.u=N(this.u);return{value:[b,a],done:!1}}return{value:null,done:!0}};function Ne(a){this.u=a}
Ne.prototype.next=function(){if(null!=this.u){var a=L(this.u);this.u=N(this.u);return{value:[a,a],done:!1}}return{value:null,done:!0}};
function Oe(a,b){var c;if(b instanceof U)a:{c=a.length;for(var d=b.Ja,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof U&&d===a[e].Ja){c=e;break a}e+=2}}else if("string"==typeof b||"number"===typeof b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(b===a[d]){c=d;break a}d+=2}else if(b instanceof ic)a:for(c=a.length,d=b.Ma,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof ic&&d===a[e].Ma){c=e;break a}e+=2}else if(null==b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(null==a[d]){c=d;break a}d+=2}else a:for(c=
a.length,d=0;;){if(c<=d){c=-1;break a}if(kc.a(b,a[d])){c=d;break a}d+=2}return c}function Pe(a,b,c){this.c=a;this.j=b;this.fa=c;this.i=32374990;this.A=0}g=Pe.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.fa};g.$=function(){return this.j<this.c.length-2?new Pe(this.c,this.j+2,this.fa):null};g.V=function(){return(this.c.length-this.j)/2};g.K=function(){return oc(this)};
g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){return cd(b,this)};g.X=function(a,b,c){return dd(b,c,this)};g.Y=function(){return new V(null,2,5,X,[this.c[this.j],this.c[this.j+1]],null)};g.da=function(){return this.j<this.c.length-2?new Pe(this.c,this.j+2,this.fa):jc};g.T=function(){return this};g.N=function(a,b){return new Pe(this.c,this.j,b)};g.R=function(a,b){return S(b,this)};Pe.prototype[Ra]=function(){return mc(this)};function Qe(a,b,c){this.c=a;this.j=b;this.h=c}
Qe.prototype.aa=function(){return this.j<this.h};Qe.prototype.next=function(){var a=new V(null,2,5,X,[this.c[this.j],this.c[this.j+1]],null);this.j+=2;return a};function r(a,b,c,d){this.l=a;this.h=b;this.c=c;this.m=d;this.i=16647951;this.A=8196}g=r.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};g.keys=function(){return mc(Re.b?Re.b(this):Re.call(null,this))};g.entries=function(){return new Me(J(J(this)))};
g.values=function(){return mc(Se.b?Se.b(this):Se.call(null,this))};g.has=function(a){return bd(this,a)};g.get=function(a,b){return this.I(null,a,b)};g.forEach=function(a){for(var b=J(this),c=null,d=0,e=0;;)if(e<d){var f=c.F(null,e),h=T(f,0,null),f=T(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=J(b))Wc(b)?(c=Qb(b),b=Rb(b),h=c,d=P(c),c=h):(c=L(b),h=T(c,0,null),f=T(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=N(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return E.f(this,b,null)};
g.I=function(a,b,c){a=Oe(this.c,b);return-1===a?c:this.c[a+1]};g.Ea=function(){return new Qe(this.c,0,2*this.h)};g.L=function(){return this.l};g.V=function(){return this.h};g.K=function(){var a=this.m;return null!=a?a:this.m=a=qc(this)};g.s=function(a,b){if(null!=b&&(b.i&1024||b.Pb)){var c=this.c.length;if(this.h===b.V(null))for(var d=0;;)if(d<c){var e=b.I(null,this.c[d],Zc);if(e!==Zc)if(kc.a(this.c[d+1],e))d+=2;else return!1;else return!1}else return!0;else return!1}else return Le(this,b)};
g.Ua=function(){return new Te({},this.c.length,Sa(this.c))};g.W=function(a,b){return cd(b,this)};g.X=function(a,b,c){return dd(b,c,this)};g.Ya=function(a,b,c){a=Oe(this.c,b);if(-1===a){if(this.h<Ue){a=this.c;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new r(this.l,this.h+1,e,null)}return xb(jb(fe.a(Lc,this),b,c),this.l)}if(c===this.c[a+1])return this;b=Sa(this.c);b[a+1]=c;return new r(this.l,this.h,b,null)};
g.nb=function(a,b){return-1!==Oe(this.c,b)};g.T=function(){var a=this.c;return 0<=a.length-2?new Pe(a,0,null):null};g.N=function(a,b){return new r(b,this.h,this.c,this.m)};g.R=function(a,b){if(Vc(b))return jb(this,B.a(b,0),B.a(b,1));for(var c=this,d=J(b);;){if(null==d)return c;var e=L(d);if(Vc(e))c=jb(c,B.a(e,0),B.a(e,1)),d=N(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.I(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.f=function(a,c,d){return this.I(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.b=function(a){return this.J(null,a)};g.a=function(a,b){return this.I(null,a,b)};var Pd=new r(null,0,[],rc),Ue=8;
function Ve(a){for(var b=[],c=0;;)if(c<a.length){var d=a[c],e=a[c+1];-1===Oe(b,d)&&(b.push(d),b.push(e));c+=2}else break;return new r(null,b.length/2,b,null)}r.prototype[Ra]=function(){return mc(this)};function Te(a,b,c){this.Va=a;this.Ra=b;this.c=c;this.i=258;this.A=56}g=Te.prototype;g.V=function(){if(t(this.Va))return jd(this.Ra);throw Error("count after persistent!");};g.J=function(a,b){return E.f(this,b,null)};
g.I=function(a,b,c){if(t(this.Va))return a=Oe(this.c,b),-1===a?c:this.c[a+1];throw Error("lookup after persistent!");};g.bb=function(a,b){if(t(this.Va)){if(null!=b?b.i&2048||b.Qb||(b.i?0:w(mb,b)):w(mb,b))return Mb(this,We.b?We.b(b):We.call(null,b),Xe.b?Xe.b(b):Xe.call(null,b));for(var c=J(b),d=this;;){var e=L(c);if(t(e))c=N(c),d=Mb(d,We.b?We.b(e):We.call(null,e),Xe.b?Xe.b(e):Xe.call(null,e));else return d}}else throw Error("conj! after persistent!");};
g.cb=function(){if(t(this.Va))return this.Va=!1,new r(null,jd(this.Ra),this.c,null);throw Error("persistent! called twice");};g.ab=function(a,b,c){if(t(this.Va)){a=Oe(this.c,b);if(-1===a){if(this.Ra+2<=2*Ue)return this.Ra+=2,this.c.push(b),this.c.push(c),this;a=Ye.a?Ye.a(this.Ra,this.c):Ye.call(null,this.Ra,this.c);return Mb(a,b,c)}c!==this.c[a+1]&&(this.c[a+1]=c);return this}throw Error("assoc! after persistent!");};
function Ye(a,b){for(var c=Jb(Lc),d=0;;)if(d<a)c=Mb(c,b[d],b[d+1]),d+=2;else return c}function Ze(){this.oa=!1}function $e(a,b){return a===b?!0:a===b||a instanceof U&&b instanceof U&&a.Ja===b.Ja?!0:kc.a(a,b)}function af(a,b,c){a=Sa(a);a[b]=c;return a}function bf(a,b,c,d){a=a.Pa(b);a.c[c]=d;return a}function cf(a,b,c,d){this.c=a;this.j=b;this.fb=c;this.ma=d}
cf.prototype.advance=function(){for(var a=this.c.length;;)if(this.j<a){var b=this.c[this.j],c=this.c[this.j+1];null!=b?b=this.fb=new V(null,2,5,X,[b,c],null):null!=c?(b=Vb(c),b=b.aa()?this.ma=b:!1):b=!1;this.j+=2;if(b)return!0}else return!1};cf.prototype.aa=function(){var a=null!=this.fb;return a?a:(a=null!=this.ma)?a:this.advance()};
cf.prototype.next=function(){if(null!=this.fb){var a=this.fb;this.fb=null;return a}if(null!=this.ma)return a=this.ma.next(),this.ma.aa()||(this.ma=null),a;if(this.advance())return this.next();throw Error("No such element");};cf.prototype.remove=function(){return Error("Unsupported operation")};function df(a,b,c){this.G=a;this.O=b;this.c=c}g=df.prototype;g.Pa=function(a){if(a===this.G)return this;var b=kd(this.O),c=Array(0>b?4:2*(b+1));Yc(this.c,0,c,0,2*b);return new df(a,this.O,c)};
g.eb=function(){return ef?ef(this.c):ff.call(null,this.c)};g.Ka=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.O&e))return d;var f=kd(this.O&e-1),e=this.c[2*f],f=this.c[2*f+1];return null==e?f.Ka(a+5,b,c,d):$e(c,e)?f:d};
g.la=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),k=kd(this.O&h-1);if(0===(this.O&h)){var l=kd(this.O);if(2*l<this.c.length){a=this.Pa(a);b=a.c;f.oa=!0;a:for(c=2*(l-k),f=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[f];--l;--c;--f}b[2*k]=d;b[2*k+1]=e;a.O|=h;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=gf.la(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==
(this.O>>>d&1)&&(k[d]=null!=this.c[e]?gf.la(a,b+5,gc(this.c[e]),this.c[e],this.c[e+1],f):this.c[e+1],e+=2),d+=1;else break;return new hf(a,l+1,k)}b=Array(2*(l+4));Yc(this.c,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;Yc(this.c,2*k,b,2*(k+1),2*(l-k));f.oa=!0;a=this.Pa(a);a.c=b;a.O|=h;return a}l=this.c[2*k];h=this.c[2*k+1];if(null==l)return l=h.la(a,b+5,c,d,e,f),l===h?this:bf(this,a,2*k+1,l);if($e(d,l))return e===h?this:bf(this,a,2*k+1,e);f.oa=!0;f=b+5;d=jf?jf(a,f,l,h,c,d,e):kf.call(null,a,f,l,h,c,d,e);e=2*k;k=
2*k+1;a=this.Pa(a);a.c[e]=null;a.c[k]=d;return a};
g.ka=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=kd(this.O&f-1);if(0===(this.O&f)){var k=kd(this.O);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=gf.ka(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.O>>>c&1)&&(h[c]=null!=this.c[d]?gf.ka(a+5,gc(this.c[d]),this.c[d],this.c[d+1],e):this.c[d+1],d+=2),c+=1;else break;return new hf(null,k+1,h)}a=Array(2*(k+1));Yc(this.c,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;Yc(this.c,2*h,a,2*(h+1),2*(k-h));e.oa=!0;return new df(null,this.O|f,a)}var l=this.c[2*h],f=this.c[2*h+1];if(null==l)return k=f.ka(a+5,b,c,d,e),k===f?this:new df(null,this.O,af(this.c,2*h+1,k));if($e(c,l))return d===f?this:new df(null,this.O,af(this.c,2*h+1,d));e.oa=!0;e=this.O;k=this.c;a+=5;a=lf?lf(a,l,f,b,c,d):kf.call(null,a,l,f,b,c,d);c=2*h;h=2*h+1;d=Sa(k);d[c]=null;d[h]=a;return new df(null,e,d)};g.Ea=function(){return new cf(this.c,0,null,null)};
var gf=new df(null,0,[]);function mf(a,b,c){this.c=a;this.j=b;this.ma=c}mf.prototype.aa=function(){for(var a=this.c.length;;){if(null!=this.ma&&this.ma.aa())return!0;if(this.j<a){var b=this.c[this.j];this.j+=1;null!=b&&(this.ma=Vb(b))}else return!1}};mf.prototype.next=function(){if(this.aa())return this.ma.next();throw Error("No such element");};mf.prototype.remove=function(){return Error("Unsupported operation")};function hf(a,b,c){this.G=a;this.h=b;this.c=c}g=hf.prototype;
g.Pa=function(a){return a===this.G?this:new hf(a,this.h,Sa(this.c))};g.eb=function(){return nf?nf(this.c):of.call(null,this.c)};g.Ka=function(a,b,c,d){var e=this.c[b>>>a&31];return null!=e?e.Ka(a+5,b,c,d):d};g.la=function(a,b,c,d,e,f){var h=c>>>b&31,k=this.c[h];if(null==k)return a=bf(this,a,h,gf.la(a,b+5,c,d,e,f)),a.h+=1,a;b=k.la(a,b+5,c,d,e,f);return b===k?this:bf(this,a,h,b)};
g.ka=function(a,b,c,d,e){var f=b>>>a&31,h=this.c[f];if(null==h)return new hf(null,this.h+1,af(this.c,f,gf.ka(a+5,b,c,d,e)));a=h.ka(a+5,b,c,d,e);return a===h?this:new hf(null,this.h,af(this.c,f,a))};g.Ea=function(){return new mf(this.c,0,null)};function pf(a,b,c){b*=2;for(var d=0;;)if(d<b){if($e(c,a[d]))return d;d+=2}else return-1}function qf(a,b,c,d){this.G=a;this.Ia=b;this.h=c;this.c=d}g=qf.prototype;
g.Pa=function(a){if(a===this.G)return this;var b=Array(2*(this.h+1));Yc(this.c,0,b,0,2*this.h);return new qf(a,this.Ia,this.h,b)};g.eb=function(){return ef?ef(this.c):ff.call(null,this.c)};g.Ka=function(a,b,c,d){a=pf(this.c,this.h,c);return 0>a?d:$e(c,this.c[a])?this.c[a+1]:d};
g.la=function(a,b,c,d,e,f){if(c===this.Ia){b=pf(this.c,this.h,d);if(-1===b){if(this.c.length>2*this.h)return b=2*this.h,c=2*this.h+1,a=this.Pa(a),a.c[b]=d,a.c[c]=e,f.oa=!0,a.h+=1,a;c=this.c.length;b=Array(c+2);Yc(this.c,0,b,0,c);b[c]=d;b[c+1]=e;f.oa=!0;d=this.h+1;a===this.G?(this.c=b,this.h=d,a=this):a=new qf(this.G,this.Ia,d,b);return a}return this.c[b+1]===e?this:bf(this,a,b+1,e)}return(new df(a,1<<(this.Ia>>>b&31),[null,this,null,null])).la(a,b,c,d,e,f)};
g.ka=function(a,b,c,d,e){return b===this.Ia?(a=pf(this.c,this.h,c),-1===a?(a=2*this.h,b=Array(a+2),Yc(this.c,0,b,0,a),b[a]=c,b[a+1]=d,e.oa=!0,new qf(null,this.Ia,this.h+1,b)):kc.a(this.c[a],d)?this:new qf(null,this.Ia,this.h,af(this.c,a+1,d))):(new df(null,1<<(this.Ia>>>a&31),[null,this])).ka(a,b,c,d,e)};g.Ea=function(){return new cf(this.c,0,null,null)};
function kf(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 6:return lf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);case 7:return jf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}
function lf(a,b,c,d,e,f){var h=gc(b);if(h===d)return new qf(null,h,2,[b,c,e,f]);var k=new Ze;return gf.ka(a,h,b,c,k).ka(a,d,e,f,k)}function jf(a,b,c,d,e,f,h){var k=gc(c);if(k===e)return new qf(null,k,2,[c,d,f,h]);var l=new Ze;return gf.la(a,b,k,c,d,l).la(a,b,e,f,h,l)}function rf(a,b,c,d,e){this.l=a;this.La=b;this.j=c;this.u=d;this.m=e;this.i=32374860;this.A=0}g=rf.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.l};g.K=function(){var a=this.m;return null!=a?a:this.m=a=oc(this)};g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){return cd(b,this)};g.X=function(a,b,c){return dd(b,c,this)};
g.Y=function(){return null==this.u?new V(null,2,5,X,[this.La[this.j],this.La[this.j+1]],null):L(this.u)};g.da=function(){var a=this,b=null==a.u?function(){var b=a.La,d=a.j+2;return sf?sf(b,d,null):ff.call(null,b,d,null)}():function(){var b=a.La,d=a.j,e=N(a.u);return sf?sf(b,d,e):ff.call(null,b,d,e)}();return null!=b?b:jc};g.T=function(){return this};g.N=function(a,b){return new rf(b,this.La,this.j,this.u,this.m)};g.R=function(a,b){return S(b,this)};rf.prototype[Ra]=function(){return mc(this)};
function ff(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return ef(arguments[0]);case 3:return sf(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function ef(a){return sf(a,0,null)}
function sf(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new rf(null,a,b,null,null);var d=a[b+1];if(t(d)&&(d=d.eb(),t(d)))return new rf(null,a,b+2,d,null);b+=2}else return null;else return new rf(null,a,b,c,null)}function tf(a,b,c,d,e){this.l=a;this.La=b;this.j=c;this.u=d;this.m=e;this.i=32374860;this.A=0}g=tf.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.l};g.K=function(){var a=this.m;return null!=a?a:this.m=a=oc(this)};g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){return cd(b,this)};g.X=function(a,b,c){return dd(b,c,this)};g.Y=function(){return L(this.u)};
g.da=function(){var a;a=this.La;var b=this.j,c=N(this.u);a=uf?uf(null,a,b,c):of.call(null,null,a,b,c);return null!=a?a:jc};g.T=function(){return this};g.N=function(a,b){return new tf(b,this.La,this.j,this.u,this.m)};g.R=function(a,b){return S(b,this)};tf.prototype[Ra]=function(){return mc(this)};
function of(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return nf(arguments[0]);case 4:return uf(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error([y("Invalid arity: "),y(b.length)].join(""));}}function nf(a){return uf(null,a,0,null)}function uf(a,b,c,d){if(null==d)for(d=b.length;;)if(c<d){var e=b[c];if(t(e)&&(e=e.eb(),t(e)))return new tf(a,b,c+1,e,null);c+=1}else return null;else return new tf(a,b,c,d,null)}
function vf(a,b,c){this.ca=a;this.Gb=b;this.vb=c}vf.prototype.aa=function(){return this.vb&&this.Gb.aa()};vf.prototype.next=function(){if(this.vb)return this.Gb.next();this.vb=!0;return this.ca};vf.prototype.remove=function(){return Error("Unsupported operation")};function wf(a,b,c,d,e,f){this.l=a;this.h=b;this.root=c;this.ba=d;this.ca=e;this.m=f;this.i=16123663;this.A=8196}g=wf.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};
g.keys=function(){return mc(Re.b?Re.b(this):Re.call(null,this))};g.entries=function(){return new Me(J(J(this)))};g.values=function(){return mc(Se.b?Se.b(this):Se.call(null,this))};g.has=function(a){return bd(this,a)};g.get=function(a,b){return this.I(null,a,b)};
g.forEach=function(a){for(var b=J(this),c=null,d=0,e=0;;)if(e<d){var f=c.F(null,e),h=T(f,0,null),f=T(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=J(b))Wc(b)?(c=Qb(b),b=Rb(b),h=c,d=P(c),c=h):(c=L(b),h=T(c,0,null),f=T(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=N(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return E.f(this,b,null)};g.I=function(a,b,c){return null==b?this.ba?this.ca:c:null==this.root?c:this.root.Ka(0,gc(b),b,c)};
g.Ea=function(){var a=this.root?Vb(this.root):Kd;return this.ba?new vf(this.ca,a,!1):a};g.L=function(){return this.l};g.V=function(){return this.h};g.K=function(){var a=this.m;return null!=a?a:this.m=a=qc(this)};g.s=function(a,b){return Le(this,b)};g.Ua=function(){return new xf({},this.root,this.h,this.ba,this.ca)};
g.Ya=function(a,b,c){if(null==b)return this.ba&&c===this.ca?this:new wf(this.l,this.ba?this.h:this.h+1,this.root,!0,c,null);a=new Ze;b=(null==this.root?gf:this.root).ka(0,gc(b),b,c,a);return b===this.root?this:new wf(this.l,a.oa?this.h+1:this.h,b,this.ba,this.ca,null)};g.nb=function(a,b){return null==b?this.ba:null==this.root?!1:this.root.Ka(0,gc(b),b,Zc)!==Zc};g.T=function(){if(0<this.h){var a=null!=this.root?this.root.eb():null;return this.ba?S(new V(null,2,5,X,[null,this.ca],null),a):a}return null};
g.N=function(a,b){return new wf(b,this.h,this.root,this.ba,this.ca,this.m)};g.R=function(a,b){if(Vc(b))return jb(this,B.a(b,0),B.a(b,1));for(var c=this,d=J(b);;){if(null==d)return c;var e=L(d);if(Vc(e))c=jb(c,B.a(e,0),B.a(e,1)),d=N(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.I(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.f=function(a,c,d){return this.I(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.b=function(a){return this.J(null,a)};g.a=function(a,b){return this.I(null,a,b)};var Lc=new wf(null,0,null,!1,null,rc);wf.prototype[Ra]=function(){return mc(this)};
function xf(a,b,c,d,e){this.G=a;this.root=b;this.count=c;this.ba=d;this.ca=e;this.i=258;this.A=56}function yf(a,b,c){if(a.G){if(null==b)a.ca!==c&&(a.ca=c),a.ba||(a.count+=1,a.ba=!0);else{var d=new Ze;b=(null==a.root?gf:a.root).la(a.G,0,gc(b),b,c,d);b!==a.root&&(a.root=b);d.oa&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}g=xf.prototype;g.V=function(){if(this.G)return this.count;throw Error("count after persistent!");};
g.J=function(a,b){return null==b?this.ba?this.ca:null:null==this.root?null:this.root.Ka(0,gc(b),b)};g.I=function(a,b,c){return null==b?this.ba?this.ca:c:null==this.root?c:this.root.Ka(0,gc(b),b,c)};
g.bb=function(a,b){var c;a:if(this.G)if(null!=b?b.i&2048||b.Qb||(b.i?0:w(mb,b)):w(mb,b))c=yf(this,We.b?We.b(b):We.call(null,b),Xe.b?Xe.b(b):Xe.call(null,b));else{c=J(b);for(var d=this;;){var e=L(c);if(t(e))c=N(c),d=yf(d,We.b?We.b(e):We.call(null,e),Xe.b?Xe.b(e):Xe.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");return c};g.cb=function(){var a;if(this.G)this.G=null,a=new wf(null,this.count,this.root,this.ba,this.ca,null);else throw Error("persistent! called twice");return a};
g.ab=function(a,b,c){return yf(this,b,c)};var Yd=function Yd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Yd.o(0<c.length?new K(c.slice(0),0,null):null)};Yd.o=function(a){for(var b=J(a),c=Jb(Lc);;)if(b){a=N(N(b));var d=L(b),b=L(N(b)),c=Mb(c,d,b),b=a}else return Lb(c)};Yd.D=0;Yd.C=function(a){return Yd.o(J(a))};function zf(a,b){this.v=a;this.fa=b;this.i=32374988;this.A=0}g=zf.prototype;g.toString=function(){return Xb(this)};
g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.fa};g.$=function(){var a=(null!=this.v?this.v.i&128||this.v.jb||(this.v.i?0:w(gb,this.v)):w(gb,this.v))?this.v.$(null):N(this.v);return null==a?null:new zf(a,this.fa)};g.K=function(){return oc(this)};
g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){return cd(b,this)};g.X=function(a,b,c){return dd(b,c,this)};g.Y=function(){return this.v.Y(null).rb()};g.da=function(){var a=(null!=this.v?this.v.i&128||this.v.jb||(this.v.i?0:w(gb,this.v)):w(gb,this.v))?this.v.$(null):N(this.v);return null!=a?new zf(a,this.fa):jc};g.T=function(){return this};g.N=function(a,b){return new zf(this.v,b)};g.R=function(a,b){return S(b,this)};zf.prototype[Ra]=function(){return mc(this)};
function Re(a){return(a=J(a))?new zf(a,null):null}function We(a){return nb(a)}function Bf(a,b){this.v=a;this.fa=b;this.i=32374988;this.A=0}g=Bf.prototype;g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return O(this,a,0);case 2:return O(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a){return O(this,a,0)};a.a=function(a,c){return O(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,P(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.b=a;b.a=function(a,b){return R(this,a,b)};return b}();g.L=function(){return this.fa};g.$=function(){var a=(null!=this.v?this.v.i&128||this.v.jb||(this.v.i?0:w(gb,this.v)):w(gb,this.v))?this.v.$(null):N(this.v);return null==a?null:new Bf(a,this.fa)};g.K=function(){return oc(this)};
g.s=function(a,b){return Dc(this,b)};g.W=function(a,b){return cd(b,this)};g.X=function(a,b,c){return dd(b,c,this)};g.Y=function(){return this.v.Y(null).sb()};g.da=function(){var a=(null!=this.v?this.v.i&128||this.v.jb||(this.v.i?0:w(gb,this.v)):w(gb,this.v))?this.v.$(null):N(this.v);return null!=a?new Bf(a,this.fa):jc};g.T=function(){return this};g.N=function(a,b){return new Bf(this.v,b)};g.R=function(a,b){return S(b,this)};Bf.prototype[Ra]=function(){return mc(this)};
function Se(a){return(a=J(a))?new Bf(a,null):null}function Xe(a){return ob(a)}function Cf(a){return t(Rd(fd,a))?ed(function(a,c){return Hc.a(t(a)?a:Pd,c)},a):null}function Df(a){this.ub=a}Df.prototype.aa=function(){return this.ub.aa()};Df.prototype.next=function(){if(this.ub.aa())return this.ub.next().U[0];throw Error("No such element");};Df.prototype.remove=function(){return Error("Unsupported operation")};function Ef(a,b,c){this.l=a;this.Qa=b;this.m=c;this.i=15077647;this.A=8196}g=Ef.prototype;
g.toString=function(){return Xb(this)};g.equiv=function(a){return this.s(null,a)};g.keys=function(){return mc(J(this))};g.entries=function(){return new Ne(J(J(this)))};g.values=function(){return mc(J(this))};g.has=function(a){return bd(this,a)};
g.forEach=function(a){for(var b=J(this),c=null,d=0,e=0;;)if(e<d){var f=c.F(null,e),h=T(f,0,null),f=T(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=J(b))Wc(b)?(c=Qb(b),b=Rb(b),h=c,d=P(c),c=h):(c=L(b),h=T(c,0,null),f=T(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=N(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return E.f(this,b,null)};g.I=function(a,b,c){return ib(this.Qa,b)?b:c};g.Ea=function(){return new Df(Vb(this.Qa))};g.L=function(){return this.l};g.V=function(){return $a(this.Qa)};
g.K=function(){var a=this.m;return null!=a?a:this.m=a=qc(this)};g.s=function(a,b){return Sc(b)&&P(this)===P(b)&&Qd(function(a){return function(b){return bd(a,b)}}(this),b)};g.Ua=function(){return new Ff(Jb(this.Qa))};g.T=function(){return Re(this.Qa)};g.N=function(a,b){return new Ef(b,this.Qa,this.m)};g.R=function(a,b){return new Ef(this.l,Kc.f(this.Qa,b,null),null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.I(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.f=function(a,c,d){return this.I(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.b=function(a){return this.J(null,a)};g.a=function(a,b){return this.I(null,a,b)};Ef.prototype[Ra]=function(){return mc(this)};
function Ff(a){this.Ha=a;this.A=136;this.i=259}g=Ff.prototype;g.bb=function(a,b){this.Ha=Mb(this.Ha,b,null);return this};g.cb=function(){return new Ef(null,Lb(this.Ha),null)};g.V=function(){return P(this.Ha)};g.J=function(a,b){return E.f(this,b,null)};g.I=function(a,b,c){return E.f(this.Ha,b,Zc)===Zc?c:b};
g.call=function(){function a(a,b,c){return E.f(this.Ha,b,Zc)===Zc?c:b}function b(a,b){return E.f(this.Ha,b,Zc)===Zc?null:b}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,0,e);case 3:return a.call(this,0,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.f=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Sa(b)))};g.b=function(a){return E.f(this.Ha,a,Zc)===Zc?null:a};g.a=function(a,b){return E.f(this.Ha,a,Zc)===Zc?b:a};
function sd(a){if(null!=a&&(a.A&4096||a.Sb))return a.name;if("string"===typeof a)return a;throw Error([y("Doesn't support name: "),y(a)].join(""));}function Gf(a,b){return new td(null,function(){var c=J(b);if(c){var d;d=L(c);d=a.b?a.b(d):a.call(null,d);c=t(d)?S(L(c),Gf(a,M(c))):null}else c=null;return c},null,null)}
function Hf(){return function(){function a(a,b,c){return new V(null,2,5,X,[L.f?L.f(a,b,c):L.call(null,a),M.f?M.f(a,b,c):M.call(null,a)],null)}function b(a,b){return new V(null,2,5,X,[L.a?L.a(a,b):L.call(null,a),M.a?M.a(a,b):M.call(null,a)],null)}function c(a){return new V(null,2,5,X,[L.b?L.b(a):L.call(null,a),M.b?M.b(a):M.call(null,a)],null)}function d(){return new V(null,2,5,X,[L.B?L.B():L.call(null),M.B?M.B():M.call(null)],null)}var e=null,f=function(){function a(c,d,e,f){var h=null;if(3<arguments.length){for(var h=
0,u=Array(arguments.length-3);h<u.length;)u[h]=arguments[h+3],++h;h=new K(u,0)}return b.call(this,c,d,e,h)}function b(a,c,d,e){return new V(null,2,5,X,[Id(L,a,c,d,e),Id(M,a,c,d,e)],null)}a.D=3;a.C=function(a){var c=L(a);a=N(a);var d=L(a);a=N(a);var e=L(a);a=M(a);return b(c,d,e,a)};a.o=b;return a}(),e=function(e,k,l,m){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,k);case 3:return a.call(this,e,k,l);default:var n=null;if(3<arguments.length){for(var n=
0,p=Array(arguments.length-3);n<p.length;)p[n]=arguments[n+3],++n;n=new K(p,0)}return f.o(e,k,l,n)}throw Error("Invalid arity: "+arguments.length);};e.D=3;e.C=f.C;e.B=d;e.b=c;e.a=b;e.f=a;e.o=f.o;return e}()}
function If(a,b,c,d,e,f,h){var k=Da;Da=null==Da?null:Da-1;try{if(null!=Da&&0>Da)return G(a,"#");G(a,c);if(0===Ma.b(f))J(h)&&G(a,function(){var a=Jf.b(f);return t(a)?a:"..."}());else{if(J(h)){var l=L(h);b.f?b.f(l,a,f):b.call(null,l,a,f)}for(var m=N(h),n=Ma.b(f)-1;;)if(!m||null!=n&&0===n){J(m)&&0===n&&(G(a,d),G(a,function(){var a=Jf.b(f);return t(a)?a:"..."}()));break}else{G(a,d);var p=L(m);c=a;h=f;b.f?b.f(p,c,h):b.call(null,p,c,h);var v=N(m);c=n-1;m=v;n=c}}return G(a,e)}finally{Da=k}}
function Kf(a,b){for(var c=J(b),d=null,e=0,f=0;;)if(f<e){var h=d.F(null,f);G(a,h);f+=1}else if(c=J(c))d=c,Wc(d)?(c=Qb(d),e=Rb(d),d=c,h=P(c),c=e,e=h):(h=L(d),G(a,h),c=N(d),d=null,e=0),f=0;else return null}var Lf={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};function Mf(a){return[y('"'),y(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return Lf[a]})),y('"')].join("")}
function Nf(a,b){var c=ad(H.a(a,Ka));return c?(c=null!=b?b.i&131072||b.Rb?!0:!1:!1)?null!=Pc(b):c:c}
function Of(a,b,c){if(null==a)return G(b,"nil");if(Nf(c,a)){G(b,"^");var d=Pc(a);Z.f?Z.f(d,b,c):Z.call(null,d,b,c);G(b," ")}if(a.Db)return a.$b(b);if(null!=a&&(a.i&2147483648||a.S))return a.M(null,b,c);if(!0===a||!1===a||"number"===typeof a)return G(b,""+y(a));if(null!=a&&a.constructor===Object)return G(b,"#js "),d=Y.a(function(b){return new V(null,2,5,X,[qd.b(b),a[b]],null)},Xc(a)),Pf.w?Pf.w(d,Z,b,c):Pf.call(null,d,Z,b,c);if(Na(a))return If(b,Z,"#js ["," ","]",c,a);if("string"==typeof a)return t(Ia.b(c))?
G(b,Mf(a)):G(b,a);if("function"==q(a)){var e=a.name;c=t(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Function":e;return Kf(b,Gc(["#object[",c,' "',""+y(a),'"]'],0))}if(a instanceof Date)return c=function(a,b){for(var c=""+y(a);;)if(P(c)<b)c=[y("0"),y(c)].join("");else return c},Kf(b,Gc(['#inst "',""+y(a.getUTCFullYear()),"-",c(a.getUTCMonth()+1,2),"-",c(a.getUTCDate(),2),"T",c(a.getUTCHours(),2),":",c(a.getUTCMinutes(),2),":",c(a.getUTCSeconds(),2),".",c(a.getUTCMilliseconds(),3),
"-",'00:00"'],0));if(a instanceof RegExp)return Kf(b,Gc(['#"',a.source,'"'],0));if(t(a.constructor.kb))return Kf(b,Gc(["#object[",a.constructor.kb.replace(RegExp("/","g"),"."),"]"],0));e=a.constructor.name;c=t(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Object":e;return Kf(b,Gc(["#object[",c," ",""+y(a),"]"],0))}function Z(a,b,c){var d=Qf.b(c);return t(d)?(c=Kc.f(c,Rf,Of),d.f?d.f(a,b,c):d.call(null,a,b,c)):Of(a,b,c)}
function Pf(a,b,c,d){return If(c,function(a,c,d){var k=nb(a);b.f?b.f(k,c,d):b.call(null,k,c,d);G(c," ");a=ob(a);return b.f?b.f(a,c,d):b.call(null,a,c,d)},"{",", ","}",d,J(a))}K.prototype.S=!0;K.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};td.prototype.S=!0;td.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};rf.prototype.S=!0;rf.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};Pe.prototype.S=!0;
Pe.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};Be.prototype.S=!0;Be.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};od.prototype.S=!0;od.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};wf.prototype.S=!0;wf.prototype.M=function(a,b,c){return Pf(this,Z,b,c)};tf.prototype.S=!0;tf.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};Fe.prototype.S=!0;Fe.prototype.M=function(a,b,c){return If(b,Z,"["," ","]",c,this)};Ef.prototype.S=!0;
Ef.prototype.M=function(a,b,c){return If(b,Z,"#{"," ","}",c,this)};xd.prototype.S=!0;xd.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};Vd.prototype.S=!0;Vd.prototype.M=function(a,b,c){G(b,"#object [cljs.core.Atom ");Z(new r(null,1,[Sf,this.state],null),b,c);return G(b,"]")};Bf.prototype.S=!0;Bf.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};V.prototype.S=!0;V.prototype.M=function(a,b,c){return If(b,Z,"["," ","]",c,this)};md.prototype.S=!0;
md.prototype.M=function(a,b){return G(b,"()")};r.prototype.S=!0;r.prototype.M=function(a,b,c){return Pf(this,Z,b,c)};zf.prototype.S=!0;zf.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};ld.prototype.S=!0;ld.prototype.M=function(a,b,c){return If(b,Z,"("," ",")",c,this)};function Tf(){}
var Uf=function Uf(b){if(null!=b&&null!=b.Mb)return b.Mb(b);var c=Uf[q(null==b?null:b)];if(null!=c)return c.b?c.b(b):c.call(null,b);c=Uf._;if(null!=c)return c.b?c.b(b):c.call(null,b);throw x("IEncodeJS.-clj-\x3ejs",b);};
function Vf(a){if(null!=a?a.Lb||(a.ac?0:w(Tf,a)):w(Tf,a))a=Uf(a);else if("string"===typeof a||"number"===typeof a||a instanceof U||a instanceof ic)a=Wf.b?Wf.b(a):Wf.call(null,a);else{var b=Gc([a],0);a=Ga();if(Qc(b))a="";else{var c=y,d=new ya;a:{var e=new Wb(d);Z(L(b),e,a);for(var b=J(N(b)),f=null,h=0,k=0;;)if(k<h){var l=f.F(null,k);G(e," ");Z(l,e,a);k+=1}else if(b=J(b))f=b,Wc(f)?(b=Qb(f),h=Rb(f),f=b,l=P(b),b=h,h=l):(l=L(f),G(e," "),Z(l,e,a),b=N(f),f=null,h=0),k=0;else break a}a=""+c(d)}}return a}
var Wf=function Wf(b){if(null==b)return null;if(null!=b?b.Lb||(b.ac?0:w(Tf,b)):w(Tf,b))return Uf(b);if(b instanceof U)return sd(b);if(b instanceof ic)return""+y(b);if(Uc(b)){var c={};b=J(b);for(var d=null,e=0,f=0;;)if(f<e){var h=d.F(null,f),k=T(h,0,null),h=T(h,1,null);c[Vf(k)]=Wf(h);f+=1}else if(b=J(b))Wc(b)?(e=Qb(b),b=Rb(b),d=e,e=P(e)):(e=L(b),d=T(e,0,null),e=T(e,1,null),c[Vf(d)]=Wf(e),b=N(b),d=null,e=0),f=0;else break;return c}if(Rc(b)){c=[];b=J(Y.a(Wf,b));d=null;for(f=e=0;;)if(f<e)k=d.F(null,f),
c.push(k),f+=1;else if(b=J(b))d=b,Wc(d)?(b=Qb(d),f=Rb(d),d=b,e=P(b),b=f):(b=L(d),c.push(b),b=N(d),d=null,e=0),f=0;else break;return c}return b};function Xf(a,b,c){var d=Error(a);this.message=a;this.data=b;this.xb=c;this.name=d.name;this.description=d.description;this.ic=d.ic;this.fileName=d.fileName;this.lineNumber=d.lineNumber;this.columnNumber=d.columnNumber;this.stack=d.stack;return this}Xf.prototype.__proto__=Error.prototype;Xf.prototype.S=!0;
Xf.prototype.M=function(a,b,c){G(b,"#error {:message ");Z(this.message,b,c);t(this.data)&&(G(b,", :data "),Z(this.data,b,c));t(this.xb)&&(G(b,", :cause "),Z(this.xb,b,c));return G(b,"}")};Xf.prototype.toString=function(){return Xb(this)};var Yf=new U(null,"role","role",-736691072),Zf=new U(null,"button.pswp__button.pswp__button--fs","button.pswp__button.pswp__button--fs",-479010560),$f=new U(null,"new-value","new-value",1087038368),ag=new U(null,"update-handler","update-handler",1389859106),bg=new U(null,"div.pswp__ui.pswp__ui--hidden","div.pswp__ui.pswp__ui--hidden",1077730658),cg=new U(null,"update-attribute","update-attribute",102770530),dg=new U(null,"attribute-handlers","attribute-handlers",855454691),eg=new U(null,"namespaces",
"namespaces",-1444157469),fg=new U(null,"fn","fn",-1175266204),gg=new U(null,"div.pswp__share-modal.pswp__share-modal--hidden.pswp__single-tap","div.pswp__share-modal.pswp__share-modal--hidden.pswp__single-tap",782637412),Ka=new U(null,"meta","meta",1499536964),hg=new U(null,"div.pswp__top-bar","div.pswp__top-bar",-914890044),La=new U(null,"dup","dup",556298533),ig=new U(null,"aria-hidden","aria-hidden",399337029),jg=new U(null,"div.pswp__caption__center","div.pswp__caption__center",487765957),kg=
new U(null,"index","index",-1531685915),lg=new U(null,"bottom","bottom",-1550509018),mg=new U(null,"tabindex","tabindex",338877510),ng=new U(null,"div.pswp__preloader__cut","div.pswp__preloader__cut",1843580006),og=new U(null,"disabled","disabled",-1529784218),pg=new U(null,"top","top",-1856271961),Zd=new U(null,"validator","validator",-1966190681),qg=new U(null,".image",".image",-297690808),rg=new U(null,"ns","ns",441598760),sg=new U(null,"div.pswp__preloader","div.pswp__preloader",408520552),tg=
new U(null,"name","name",1843675177),ug=new U(null,"div.pswp__share-tooltip","div.pswp__share-tooltip",-1834925015),vg=new U(null,"w","w",354169001),wg=new U(null,"margin-left","margin-left",2015598377),Od=new ic(null,"meta10604","meta10604",-1016705111,null),xg=new U(null,"msrc","msrc",251791403),yg=new U(null,"width","width",-384071477),zg=new U(null,"create-element-fn","create-element-fn",827380427),Ag=new U(null,"old-value","old-value",862546795),Sf=new U(null,"val","val",128701612),Bg=new U(null,
"type","type",1174270348),Cg=new U(null,"src","src",-1651076051),Rf=new U(null,"fallback-impl","fallback-impl",-1501286995),Dg=new U(null,"div.pswp__caption","div.pswp__caption",-531230195),Ha=new U(null,"flush-on-newline","flush-on-newline",-151457939),Eg=new U(null,"div.pswp__container","div.pswp__container",-126857170),Fg=new U(null,"button.pswp__button.pswp__button--share","button.pswp__button.pswp__button--share",2058146350),Gg=new U(null,"button.pswp__button.pswp__button--arrow--right","button.pswp__button.pswp__button--arrow--right",
-1908670289),Hg=new U(null,"title","title",636505583),Ia=new U(null,"readably","readably",1129599760),Jf=new U(null,"more-marker","more-marker",-14717935),Jg=new U(null,"div.pswp","div.pswp",-845355823),Kg=new U(null,"keyup","keyup",-794526927),Lg=new U(null,"click","click",1912301393),Mg=new U(null,"div.pswp__item","div.pswp__item",-939569134),Ng=new U(null,"div.pswp__preloader__donut","div.pswp__preloader__donut",1396225650),Og=new U(null,"div.pswp__scroll-wrap","div.pswp__scroll-wrap",1877488723),
Pg=new U(null,"button.pswp__button.pswp__button--close","button.pswp__button.pswp__button--close",-979514797),Qg=new U(null,"h","h",1109658740),Ma=new U(null,"print-length","print-length",1931866356),Rg=new U(null,"id","id",-1388402092),Sg=new U(null,"class","class",-2030961996),Tg=new U(null,"prop","prop",-515168332),Ug=new U(null,"image-size","image-size",1574819796),Vg=new U(null,"right","right",-452581833),Wg=new U(null,"button.pswp__button.pswp__button--arrow--left","button.pswp__button.pswp__button--arrow--left",
983762009),Xg=new U(null,"tag","tag",-1290361223),Yg=new U(null,"interceptors","interceptors",-1546782951),Zg=new U(null,"target","target",253001721),Nd=new ic(null,"quote","quote",1377916282,null),$g=new U(null,"remove-handler","remove-handler",389960218),ah=new U(null,"remove-attribute","remove-attribute",552745626),Md=new U(null,"arglists","arglists",1661989754),Ld=new ic(null,"nil-iter","nil-iter",1101030523,null),bh=new U(null,"#pswp","#pswp",407034171),ch=new U(null,"button.pswp__button.pswp__button--zoom",
"button.pswp__button.pswp__button--zoom",-38289765),Qf=new U(null,"alt-impl","alt-impl",670969595),dh=new U(null,"div.pswp__counter","div.pswp__counter",-781104003),eh=new U(null,"href","href",-793805698),fh=new U(null,".g-container",".g-container",-1129466498),gh=new U(null,"div.pswp__preloader__icn","div.pswp__preloader__icn",-844032322),hh=new U(null,"div.pswp__bg","div.pswp__bg",1669805982),ih=new U(null,"height","height",1025178622),jh=new U(null,"left","left",-399115937),kh=new U(null,"attr",
"attr",-604132353);function lh(a){return Array.prototype.slice.call(a)}function mh(a){return a instanceof U?[y(function(){var b=pd(a);return null==b?null:[y(b),y("/")].join("")}()),y(sd(a))].join(""):a}function nh(a,b){for(var c=0;;)if(c=a.indexOf(b,c),0<=c){var d;if(d=0===c||" "===a.charAt(c-1)){d=a.length;var e=c+b.length;d=e<=d?e===d||" "===a.charAt(e):null}if(d)return c;c+=b.length}else return null};function oh(a){var b=/x/;a="/(?:)/"===""+y(b)?Hc.a(Ae(S("",Y.a(y,J(a)))),""):Ae((""+y(a)).split(b));if(1<P(a))a:for(;;)if(""===(null==a?null:qb(a)))a=null==a?null:rb(a);else break a;return a};var ph=function ph(b){if(Rc(b))a:{var c=Y.a(ph,b);b=new ya;for(c=J(c);;)if(null!=c)b.append(""+y(L(c))),c=N(c),null!=c&&b.append(" ");else{b=b.toString();break a}}else b="string"===typeof b||b instanceof U?sd(b):null;return b};function qh(a,b){return t(b)?a.getAttribute(mh(b)):null}function rh(a){a=a.getBoundingClientRect();return new r(null,6,[pg,a.top,lg,a.bottom,jh,a.left,Vg,a.right,yg,a.width,ih,a.height],null)}function sh(a){return a.parentNode}
function th(a,b){return function(a){return function(b){return 0<=a.indexOf(b)}}(lh(a.querySelectorAll(ph(b))))}function uh(a,b,c){return L(ee(th(a,c),Gf(function(b){return b!==a},Gf(fd,de(sh,b)))))}
function vh(a,b){if(!Sd(P(b)))throw Error("Assert failed: (even? (count kvs))");for(var c=a.style,d=J(he(2,2,b)),e=null,f=0,h=0;;)if(h<f){var k=e.F(null,h),l=T(k,0,null),k=T(k,1,null);c.setProperty(mh(l),k);h+=1}else if(d=J(d))Wc(d)?(f=Qb(d),d=Rb(d),e=f,f=P(f)):(f=L(d),e=T(f,0,null),f=T(f,1,null),c.setProperty(mh(e),f),d=N(d),e=null,f=0),h=0;else break}
function wh(a,b){var c=mh(b),d=a.classList;if(t(d))d.toggle(c);else{var d=mh(c),e=a.classList;t(e)?d=e.contains(d):(e=a.className,t(e)?(d=nh(e,d),d=t(d)?0<=d:null):d=null);if(d)if(c=mh(c),d=a.classList,t(d))d.remove(c);else{d=a.className;a:for(e=d;;){var f=e.length,h=nh(e,c);if(t(h))var k=h+c.length,e=""+y(k<f?[y(e.substring(0,h)),y(e.substr(k+1))].join(""):e.substring(0,h-1));else{c=e;break a}}d!==c&&(a.className=c)}else if(d=ea(mh(c)).split(/\s+/),J(d))if(c=a.classList,t(c))for(d=J(d),e=null,h=
f=0;;)if(h<f)k=e.F(null,h),c.add(k),h+=1;else if(d=J(d))e=d,Wc(e)?(d=Qb(e),h=Rb(e),e=d,f=P(d),d=h):(d=L(e),c.add(d),d=N(e),e=null,f=0),h=0;else break;else for(c=J(d),d=null,f=e=0;;)if(f<e)h=d.F(null,f),k=a.className,t(nh(k,h))||(h=""===k?h:[y(k),y(" "),y(h)].join(""),a.className=h),f+=1;else if(c=J(c))Wc(c)?(e=Qb(c),c=Rb(c),d=e,e=P(e)):(d=L(c),e=a.className,t(nh(e,d))||(d=""===e?d:[y(e),y(" "),y(d)].join(""),a.className=d),c=N(c),d=null,e=0),f=0;else break}}
var xh=fe.a(Pd,Y.a(function(a){var b=T(a,0,null),c=T(a,1,null);return new V(null,2,5,X,[b,Ve([c,function(a,b,c){return function(h){return function(){return function(a){var b=a.relatedTarget,c;c=a.kc;c=t(c)?c:a.currentTarget;return t(t(b)?t(c.contains)?c.contains(b):t(c.compareDocumentPosition)?0!=(c.compareDocumentPosition(b)&16):null:b)?null:h.b?h.b(a):h.call(null,a)}}(a,b,c)}}(a,b,c)])],null)},new r(null,2,[new U(null,"mouseenter","mouseenter",-1792413560),new U(null,"mouseover","mouseover",-484272303),
new U(null,"mouseleave","mouseleave",531566580),new U(null,"mouseout","mouseout",2049446890)],null)));function Ud(a,b,c){return function(d){var e=uh(a,d.target,b);return t(t(e)?Pa(qh(e,og)):e)?(d.kc=e,c.b?c.b(d):c.call(null,d)):null}}function yh(a,b,c){var d=a.bc;a.bc=Hd(b,t(d)?d:Pd,c)}
function zh(a,b){if(!Sd(P(b)))throw Error("Assert failed: (even? (count type-fs))");var c;c=Tc(a)?Hf().call(null,a):new V(null,2,5,X,[a,null],null);var d=T(c,0,null);c=T(c,1,null);for(var e=J(he(2,2,b)),f=null,h=0,k=0;;)if(k<h){for(var l=f.F(null,k),m=T(l,0,null),l=T(l,1,null),m=J(H.f(xh,m,Ve([m,fd]))),n=null,p=0,v=0;;)if(v<p){var u=n.F(null,v),z=T(u,0,null),u=T(u,1,null),u=(t(c)?Td(d,c):fd).call(null,u.b?u.b(l):u.call(null,l));yh(d,ie,Gc([new V(null,3,5,X,[c,z,l],null),u],0));t(d.addEventListener)?
d.addEventListener(sd(z),u):d.attachEvent(sd(z),u);v+=1}else if(m=J(m))Wc(m)?(p=Qb(m),m=Rb(m),n=p,p=P(p)):(p=L(m),n=T(p,0,null),p=T(p,1,null),p=(t(c)?Td(d,c):fd).call(null,p.b?p.b(l):p.call(null,l)),yh(d,ie,Gc([new V(null,3,5,X,[c,n,l],null),p],0)),t(d.addEventListener)?d.addEventListener(sd(n),p):d.attachEvent(sd(n),p),m=N(m),n=null,p=0),v=0;else break;k+=1}else if(e=J(e)){if(Wc(e))h=Qb(e),e=Rb(e),f=h,h=P(h);else{f=L(e);h=T(f,0,null);f=T(f,1,null);h=J(H.f(xh,h,Ve([h,fd])));k=null;for(m=l=0;;)if(m<
l)p=k.F(null,m),n=T(p,0,null),p=T(p,1,null),p=(t(c)?Td(d,c):fd).call(null,p.b?p.b(f):p.call(null,f)),yh(d,ie,Gc([new V(null,3,5,X,[c,n,f],null),p],0)),t(d.addEventListener)?d.addEventListener(sd(n),p):d.attachEvent(sd(n),p),m+=1;else if(h=J(h))Wc(h)?(l=Qb(h),h=Rb(h),k=l,l=P(l)):(l=L(h),k=T(l,0,null),l=T(l,1,null),l=(t(c)?Td(d,c):fd).call(null,l.b?l.b(f):l.call(null,f)),yh(d,ie,Gc([new V(null,3,5,X,[c,k,f],null),l],0)),t(d.addEventListener)?d.addEventListener(sd(k),l):d.attachEvent(sd(k),l),h=N(h),
k=null,l=0),m=0;else break;e=N(e);f=null;h=0}k=0}else break;return a};var Ah=Xd?Xd(!1):Wd.call(null,!1);function Bh(a,b){return function(c){c.stopPropagation();wh(a,"disabled");wh(b,"is-active");return ae.a(Ah,Pa)}}
function Ch(){var a=document.getElementById("sidenav"),b=lh(document.getElementsByClassName("hambtn"))[0],c=Bh(a,b),d=function(a,b,c){return function(a){return t(sc.b?sc.b(Ah):sc.call(null,Ah))?c.b?c.b(a):c.call(null,a):null}}(a,b,c);zh(b,Gc([Lg,c],0));zh(document.body,Gc([Lg,d],0));return zh(document.body,Gc([Kg,function(a,b,c,d){return function(a){return kc.a(a.keyCode,27)?d(a):null}}(a,b,c,d)],0))};var Dh=function Dh(b,c,d,e){if(null!=b&&null!=b.ec)return b.ec(b,c,d,e);var f=Dh[q(null==b?null:b)];if(null!=f)return f.w?f.w(b,c,d,e):f.call(null,b,c,d,e);f=Dh._;if(null!=f)return f.w?f.w(b,c,d,e):f.call(null,b,c,d,e);throw x("Interceptor.-intercept",b);},Eh=function Eh(b,c,d,e){var f=L(c);return Dh(f,d,e,function(){return function(){var f=M(c);return J(f)?Eh(b,f,d,e):b.B?b.B():b.call(null)}}(f))};var Fh=new r(null,2,["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"],null);function Gh(a,b){if(t(a)){var c=H.a(eg.b(b),a);return t(c)?c:H.a(Fh,a)}return null}function Hh(a){return"string"===typeof a||"number"===typeof a||!0===a||!1===a}var Ih=new function(){},Jh=function Jh(b,c){for(;;)if(J(c)){var d;d=L(c);var e=void 0,e=Hh(d),e=t(e)?e:Vc(d);d=t(e)?Ed.a(b,d):Jh(b,d);e=M(c);b=d;c=e}else return b};function Kh(a){return t(0===a.indexOf("on-"))?a.substring(3):null};function Lh(a,b,c,d){d=b instanceof U?Gh(pd(b),d):null;return t(d)?a.setAttributeNS(d,sd(b),c):a.setAttribute(sd(b),c)}function Mh(a,b,c){c=b instanceof U?Gh(pd(b),c):null;return t(c)?a.removeAttributeNS(c,sd(b)):a.removeAttribute(sd(b))}
var Nh=new r(null,2,[Tg,new r(null,1,[fg,function(a,b,c,d){return a[sd(b).replace("-","_")]=d}],null),kh,new r(null,1,[fg,function(a,b,c,d,e){return t(d)?Lh(a,b,d,e):Mh(a,b,e)}],null)],null),Oh=new V(null,6,5,X,[new r(null,2,[Zg,new r(null,2,[rg,"svg",kh,"class"],null),Bg,kh],null),new r(null,2,[Zg,new r(null,2,[Xg,"input",kh,new Ef(null,new r(null,2,["value",null,"checked",null],null),null)],null),Bg,Tg],null),new r(null,2,[Zg,new r(null,2,[Xg,"input",kh,"autofocus"],null),fg,function(a,b,c,d){return t(d)?
(a.focus(),a.setAttribute(b,d)):null}],null),new r(null,2,[Zg,new r(null,2,[Xg,"option",kh,new Ef(null,new r(null,1,["selected",null],null),null)],null),Bg,Tg],null),new r(null,2,[Zg,new r(null,2,[Xg,"select",kh,new Ef(null,new r(null,2,["value",null,"selectIndex",null],null),null)],null),Bg,Tg],null),new r(null,2,[Zg,new r(null,2,[Xg,"textarea",kh,new Ef(null,new r(null,1,["value",null],null),null)],null),Bg,Tg],null)],null);function Ph(a,b){return t(a)?Sc(a)?bd(a,b):kc.a(b,a):!0}
function Qh(a,b,c,d){a=Dd.a(dg.b(a),Oh);a=Rd(function(){return function(a){var f;f=Zg.b(a);var h=sd(d),k=Ph(rg.b(f),b);t(k)?(k=Ph(Xg.b(f),c),f=t(k)?Ph(kh.b(f),h):k):f=k;return t(f)?a:null}}(a),a);return bd(a,Bg)?Bg.b(a).call(null,Nh):a}function Rh(a,b,c,d,e){c=Hh(c);t(t(c)?c:Hh(d))?a=t(d)?Lh(a,b,d,e):Mh(a,b,e):(d=a[sd(b).replace("-","_")]=d,a=a[b]=d);return a};function Sh(a,b,c,d,e,f){var h=null!=f&&(f.i&64||f.Oa)?Gd(Yd,f):f,k=H.a(h,Yg);if(null!==e){var l=Kh(sd(d));t(l)?Uc(null)&&Uc(e)&&tg.b(null)===tg.b(e)||(f=function(b){return function(){var c=[y("hipo_listener_"),y(b)].join(""),d=a[c];t(d)&&a.removeEventListener(b,d);d=fg.b(e);d=t(d)?d:e;return t(d)?(a.addEventListener(b,d),a[c]=d):null}}(l,l,f,h,h,k),Pa(k)||Qc(k)?f():Eh(f,k,t(e)?ag:$g,Cf(Gc([new r(null,3,[Zg,a,tg,d,Ag,null],null),t(e)?new r(null,1,[$f,e],null):null],0)))):(f=function(f,h,k,l){return function(){var f=
Qh(l,b,c,d),f=fg.b(f),f=t(f)?f:Rh;return f.H?f.H(a,d,null,e,l):f.call(null,a,d,null,e,l)}}(l,f,h,h,k),Pa(k)||Qc(k)?f():Eh(f,k,t(e)?cg:ah,Cf(Gc([new r(null,3,[Zg,a,tg,d,Ag,null],null),t(e)?new r(null,1,[$f,e],null):null],0))))}}
function Th(a,b,c){if(!Vc(b))throw Error("Assert failed: (vector? v)");if(null!=b&&!Vc(b))throw Error("Assert failed: (or (nil? v) (vector? v))");var d;a:{if(null!=b&&!Vc(b))throw Error("Assert failed: (or (nil? v) (vector? v))");if(Qc(b))d=!0;else{d=P(b)-1;for(var e=0;;){var f=Ac(b,e),h=Hh(f),f=t(h)?h:Vc(f);if(t(f)){if(kc.a(d,e)){d=!0;break a}e+=1}else{d=!1;break a}}}}if(t(d))d=b;else a:for(d=Jb(Ic),e=b;;){f=T(e,0,Ih);if(Ih===f){d=Lb(d);break a}d=$c(f)?Jh(d,f):null!=f?Ed.a(d,f):d;e=Ce(e,1,P(e))}if(null!=
b&&!Vc(b))throw Error("Assert failed: (or (nil? v) (vector? v))");for(b=d;!Qc(b);)d=Ac(b,0),t(d)&&a.appendChild(Uh.a?Uh.a(d,c):Uh.call(null,d,c)),b=M(b)}
function Uh(a,b){var c;c=Hh(a);c=t(c)?c:Vc(a);if(!t(c))throw Error("Assert failed: (or (hic/literal? o) (vector? o))");if(t(Hh(a)))c=document.createTextNode(a);else{if(!Vc(a))throw Error("Assert failed: (vector? h)");var d=pd(Ac(a,0)),e;c=sd(Ac(a,0));e=c.indexOf("#");0<e?e=c.substring(0,e):(e=c.indexOf("."),e=0<e?c.substring(0,e):c);var f;if(t(a)){c=sd(Ac(a,0));f=c.indexOf("#");if(0<f){var h=c.indexOf(".");f=0<h?c.substring(f+1,h):c.substring(f+1)}else f=null;b:if(h=c.indexOf("."),0<h)for(c=c.substring(h+
1);;)if(0<c.indexOf("."))c=c.replace("."," ");else{h=c;break b}else h=null;c=T(a,1,null);if(Uc(c)){if(t(t(f)?bd(c,Rg):f))throw new Xf("Cannot define id multiple times",Pd,null);if(t(t(f)?f:h)){f=t(f)?new r(null,1,[Rg,f],null):null;if(t(h))var k=Sg.b(c),h=t(k)?t(h)?[y(h),y(" "),y(k)].join(""):""+y(k):h,h=new r(null,1,[Sg,h],null);else h=null;c=Cf(Gc([c,f,h],0))}f=c}else f=t(t(f)?f:h)?new r(null,2,[Rg,f,Sg,h],null):null}else f=null;c=Uc(T(a,1,null))?2:1;c=P(a)>c?Ce(a,c,P(a)):null;d=Gh(d,b);h=zg.b(b);
if(t(h))d=h.w?h.w(d,e,f,b):h.call(null,d,e,f,b);else{h=f;f=t(d)?document.createElementNS(d,e):document.createElement(e);for(var h=J(h),k=null,l=0,m=0;;)if(m<l){var n=k.F(null,m),p=T(n,0,null),n=T(n,1,null);t(n)&&Sh(f,d,e,p,n,b);m+=1}else if(h=J(h))Wc(h)?(l=Qb(h),h=Rb(h),k=l,l=P(l)):(l=L(h),k=T(l,0,null),l=T(l,1,null),t(l)&&Sh(f,d,e,k,l,b),h=N(h),k=null,l=0),m=0;else break;d=f}t(c)&&Th(d,c,b);c=d}return c};var Vh=Xd?Xd(Ic):Wd.call(null,Ic),Aa=function(){function a(a){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new K(e,0)}return b.call(this,d)}function b(a){return console.log.apply(console,Wa?Va(a):Ta.call(null,a))}a.D=0;a.C=function(a){a=J(a);return b(a)};a.o=b;return a}(),Ba=function(){function a(a){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new K(e,0)}return b.call(this,
d)}function b(a){return console.error.apply(console,Wa?Va(a):Ta.call(null,a))}a.D=0;a.C=function(a){a=J(a);return b(a)};a.o=b;return a}();function Wh(a){var b=lh(document.getElementsByClassName("pswp"))[0],c=Wf(sc.b?sc.b(Vh):sc.call(null,Vh));return(new PhotoSwipe(b,PhotoSwipeUI_Default,c,{index:a})).init()}
function Xh(){return function b(c){return new td(null,function(){for(;;){var d=J(c);if(d){var e=d;if(Wc(e)){var f=Qb(e),h=P(f),k=new vd(Array(h),0);return function(){for(var b=0;;)if(b<h){var c=B.a(f,b),l=function(){var b=qh(c,kg);return parseInt(b)}(),m=qh(c.children[0],Cg),n=qh(c,eh),p=oh(qh(c,Ug)),u=T(p,0,null),v=T(p,1,null);zh(c,Gc([Lg,function(b,c){return function(b){b.preventDefault();return Wh(c)}}(b,l,m,n,p,u,v,c,f,h,k,e,d)],0));zd(k,new r(null,4,[Cg,n,xg,m,vg,parseInt(u),Qg,parseInt(v)],
null));b+=1}else return!0}()?yd(k.ha(),b(Rb(e))):yd(k.ha(),null)}var l=L(e),m=function(){var b=qh(l,kg);return parseInt(b)}(),n=qh(l.children[0],Cg),p=qh(l,eh),v=oh(qh(l,Ug)),u=T(v,0,null),z=T(v,1,null);zh(l,Gc([Lg,function(b){return function(c){c.preventDefault();return Wh(b)}}(m,n,p,v,u,z,l,e,d)],0));return S(new r(null,4,[Cg,p,xg,n,vg,parseInt(u),Qg,parseInt(z)],null),b(M(e)))}return null}},null,null)}(lh(document.querySelectorAll(ph(new V(null,2,5,X,[fh,qg],null)))))}
function Yh(a,b,c,d){return function(e){e.preventDefault();e=window.getComputedStyle(a)[mh(wg)];e=J(e)?parseInt(e):null;var f=d-e,f=t(b.a?b.a(c,f):b.call(null,c,f))?f:c,h=[y("pos:"),y(e),y(" lim:"),y(d),y("x:"),y(f)].join("");console.log(h);if(t(b.a?b.a(d,e):b.call(null,d,e))){e=Gc([wg,e+f],0);if(!Sd(P(e)))throw Error("Assert failed: (even? (count kvs))");e=J(he(2,2,e));for(var f=null,k=h=0;;)if(k<h){var l=f.F(null,k),m=T(l,0,null),l=T(l,1,null);vh(a,Gc([m,[y(l),y("px")].join("")],0));k+=1}else if(e=
J(e))Wc(e)?(h=Qb(e),e=Rb(e),f=h,h=P(h)):(h=L(e),f=T(h,0,null),h=T(h,1,null),vh(a,Gc([f,[y(h),y("px")].join("")],0)),e=N(e),f=null,h=0),k=0;else break;e=a}else e=null;return e}};ba("magic.index.init",function(){Ch();var a=document.querySelector(ph(bh)),b=new V(null,4,5,X,[Jg,new r(null,3,[mg,-1,Yf,"dialog",ig,!0],null),new V(null,1,5,X,[hh],null),new V(null,3,5,X,[Og,new V(null,4,5,X,[Eg,new V(null,1,5,X,[Mg],null),new V(null,1,5,X,[Mg],null),new V(null,1,5,X,[Mg],null)],null),new V(null,6,5,X,[bg,new V(null,7,5,X,[hg,new V(null,1,5,X,[dh],null),new V(null,2,5,X,[Pg,new r(null,1,[Hg,"Close (Esc)"],null)],null),new V(null,2,5,X,[Fg,new r(null,1,[Hg,"Share"],null)],null),new V(null,
2,5,X,[Zf,new r(null,1,[Hg,"Toggle fullscreen"],null)],null),new V(null,2,5,X,[ch,new r(null,1,[Hg,"Zoom in/out"],null)],null),new V(null,2,5,X,[sg,new V(null,2,5,X,[gh,new V(null,2,5,X,[ng,new V(null,1,5,X,[Ng],null)],null)],null)],null)],null),new V(null,2,5,X,[gg,new V(null,1,5,X,[ug],null)],null),new V(null,2,5,X,[Wg,new r(null,1,[Hg,"Previous (arrow left)"],null)],null),new V(null,2,5,X,[Gg,new r(null,1,[Hg,"Next (arrow right)"],null)],null),new V(null,2,5,X,[Dg,new V(null,1,5,X,[jg],null)],
null)],null)],null)],null),c;$c(b)?(c=document.createDocumentFragment(),Th(c,Ae(b),null)):c=null!=b?Uh(b,null):null;c.hipo_hiccup=b;a.appendChild(c);ae.f(Vh,fe,Xh());a=lh(document.getElementsByClassName("gprev"))[0];b=lh(document.getElementsByClassName("gnext"))[0];c=lh(document.getElementsByClassName("g-slider"))[0];var d=rh(c),e=rh(lh(document.getElementsByClassName("g-container"))[0]),d=yg.b(e)-yg.b(d);zh(a,Gc([Lg,Yh(c,id,300,0)],0));return zh(b,Gc([Lg,Yh(c,hd,-300,d)],0))});ba("magic.menu.init",function(){return Ch()});ba("magic.events.init",function(){return Ch()});