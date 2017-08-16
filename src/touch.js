function getDom(el, dom) {
	while (dom) {
		if (typeof el == 'string') {
			if (/#/.test(el)) {
				if (dom.getAttribute('id') == el.replace(/#/, function() { return '' })) {
					return dom;
				}
			} else if (/\./.test(el)) {
				if (dom.classList && dom.classList.contains(el.replace(/./, function() { return '' }))) {
					return dom;
				}
			} else {
				if (dom.nodeName.toLowerCase() == el) {
					return dom;
				}
			}
		} else if (typeof el == 'object') {
			if (!el.length) {
				el = [el];
			}
			for (var i = 0; i < el.length; i++) {
				if (el[i] == dom) {
					return el[i]
				}
			}
		}
		dom = dom.parentNode;
	}
};
export default function(el, { finger = 2, number = 2, timer = 500 }, cb) {
	document.addEventListener('touchstart', function(ev) {
		var dom = getDom(el, ev.target);
		if (dom) {
			if (ev.touches.length == finger) {
				dom.fingerList = dom.fingerList || [];
				dom.fingerList.push(new Date().getTime());
				var list = dom.fingerList;
				for (var i = 1; i < number; i++) {
					if (list[list.length - i] - list[list.length - i - 1] < timer) {} else {
						ev.preventDefault();
						return false;
					}
				}
				cb && cb(dom);
				ev.preventDefault();
				return false;
			}
		}
	});
}
