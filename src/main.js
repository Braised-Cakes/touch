import touch from './touch.js'
touch('.guanggao1', {
	finger: 2,
	number: 2,
}, function(dom) {
	alert(dom.getAttribute('data-name'))
})
touch('.guanggao2', {
	finger: 2,
	number: 3,
}, function(dom) {
	alert(dom.getAttribute('data-name'))
})
touch('.guanggao3', {
	finger: 3,
	number: 2,
}, function(dom) {
	alert(dom.getAttribute('data-name'))
})
touch('.guanggao4', {
	finger: 4,
	number: 2,
}, function(dom) {
	alert(dom.getAttribute('data-name'))
})
