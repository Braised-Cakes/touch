(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.FingerTouch = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function getDom(el, dom) {
	while (dom) {
		if (typeof el == 'string') {
			if (/#/.test(el)) {
				if (dom.getAttribute && dom.getAttribute('id') === el.replace(/#/, function () {
					return '';
				})) {
					return dom;
				}
			} else if (/\./.test(el)) {
				if (dom.classList && dom.classList.contains(el.replace(/./, function () {
					return '';
				}))) {
					return dom;
				}
			} else {
				if (dom.nodeName && dom.nodeName.toLowerCase() == el) {
					return dom;
				}
			}
		} else if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) == 'object') {
			if (!el.length) {
				el = [el];
			}
			for (var i = 0; i < el.length; i++) {
				if (el[i] == dom) {
					return el[i];
				}
			}
		}
		dom = dom.parentNode;
	}
	return false;
}

function lengthTo0() {
	timelist.length = 0;
	fingerList.length = 0;
}
var main_build = function (el, _ref, cb) {
	var _ref$finger = _ref.finger,
	    finger = _ref$finger === undefined ? 2 : _ref$finger,
	    _ref$number = _ref.number,
	    number = _ref$number === undefined ? 2 : _ref$number,
	    _ref$timer = _ref.timer,
	    timer = _ref$timer === undefined ? 500 : _ref$timer;

	var timelist = [];
	var index1 = 0;
	var fingerList = [];
	var timeouttimer = {};
	var minTimer = 60;
	document.addEventListener('touchstart', function (ev) {
		var dom = getDom(el, ev.target);
		if (dom) {
			var time = new Date().getTime();
			timelist.push({
				time: time,
				dom: dom
			});
			if (ev.touches.length == finger) {
				for (var i = 1; i < finger; i++) {
					if (timelist[timelist.length - i].time - timelist[timelist.length - i - 1].time < minTimer) {
						for (var attr in timeouttimer) {
							clearTimeout(timeouttimer[attr]);
						}
						break;
					}
				}
				for (var i = 1; i < finger; i++) {
					if (timelist[timelist.length - i].dom != timelist[timelist.length - i - 1].dom) {
						for (var attr in timeouttimer) {
							clearTimeout(timeouttimer[attr]);
						}
						lengthTo0();
						break;
					}
				}
				timeouttimer[index1++] = setTimeout(function () {
					fingerList.push(time);
					for (var i = 1; i < number; i++) {
						if (fingerList[fingerList.length - i] - fingerList[fingerList.length - i - 1] < timer) {} else {
							ev.preventDefault();
							return false;
						}
					}
					cb && cb(dom);
				}, minTimer);
				ev.preventDefault();
				return false;
			}
		} else {
			lengthTo0();
		}
	});
};

return main_build;

})));
