function getDom(el, dom) {
	while (dom) {
		if (typeof el == 'string') {
			if (/#/.test(el)) {
				if (dom.getAttribute && dom.getAttribute('id') === el.replace(/#/, function() { return '' })) {
					return dom;
				}
			} else if (/\./.test(el)) {
				if (dom.classList && dom.classList.contains(el.replace(/./, function() { return '' }))) {
					return dom;
				}
			} else {
				if (dom.nodeName && dom.nodeName.toLowerCase() == el) {
					return dom;
				}
			}
		} else if (typeof el == 'object') {
			if (!el.length) {
				el = [el];
			}
			for (let i = 0; i < el.length; i++) {
				if (el[i] == dom) {
					return el[i]
				}
			}
		}
		dom = dom.parentNode;
	}
	return false;
};


function lengthTo0() {
	timelist.length = 0;
	fingerList.length = 0;
}
export default function(el, { finger = 2, number = 2, timer = 500 }, cb) {
	var timelist = [];
	var index1 = 0;
	var fingerList = [];
	var timeouttimer = {};
	const minTimer = 60;
	document.addEventListener('touchstart', function(ev) {
		let dom = getDom(el, ev.target);
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
							clearTimeout(timeouttimer[attr])
						}
						break;
					}
				}
				for (var i = 1; i < finger; i++) {
					if (timelist[timelist.length - i].dom != timelist[timelist.length - i - 1].dom) {
						for (var attr in timeouttimer) {
							clearTimeout(timeouttimer[attr])
						}
						lengthTo0()
						break;
					}
				}
				timeouttimer[index1++] = setTimeout(function() {
					fingerList.push(time);
					for (var i = 1; i < number; i++) {
						if (fingerList[fingerList.length - i] - fingerList[fingerList.length - i - 1] < timer) {} else {
							ev.preventDefault();
							return false;
						}
					}
					cb && cb(dom)
				}, minTimer);
				ev.preventDefault();
				return false;
			}
		} else {
			lengthTo0()
		}
	});
}
