import touch from './touch.js'
touch(document.querySelector('#a1'), {
	finger: 2,
	number: 3
}, function(dom) {
	alert('第一个dom');
})
touch(document.querySelector('#a2'), {
	finger: 3,
	number: 2
}, function(dom) {
	alert('第二个dom');
})
