# finger-touch

debug手势库， 多指连击

##demo
[点击demo查看](https://braisedcakes666.github.io/touch/index.html)

## Install

```bash
npm install finger-touch --save-dev
```

## Usage

支持umd，cmd，amd等方式引入
```javascript

import { FingerTouch } from 'finger-touch'
//或
const { FingerTouch } = require('finger-touch')
//或  
//直接使用FingerTouch
```

##Example

```javascript

FingerTouch(el, options, cb);

FingerTouch('.feed', {
	finger : 3,
	number : 2
}, (dom)=>{
	//dom : 触发事件的dom元素
})

//el可以传id,class,nodeName或dom节点等等

FingerTouch('.feed', options, cb)
FingerTouch(document.querySelectorAll('.feed'), options, cb)
FingerTouch($('.feed'), options, cb)
```

## Options

Name   | Default | Description
:----- | :------ | :-------------
finger | 2       | 几个手指头
number | 2       | 连续几次触碰屏幕
timer  | 500     | 连续两次触碰屏幕的最大时间差
