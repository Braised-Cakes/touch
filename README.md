# finger-touch

mini手势库， 多指连击

某些浏览器兼容性不太好， 尽量只设置两个手指头

## Install

```bash
npm install finger-touch --save-dev
```

## Example

```javascript
new touch(el, options, cb);
new touch('#list', {
    finger : 2,
    number : 3,
    timer : 1000
}, function(dom){});
new touch('.item', {}, function(dom){});
new touch('div', {}, function(dom){});
new touch(document.getElementById('#list'), {}, function(dom){});
new touch(document.querySelectorAll('.item'), {}, function(dom){});
new touch($('#list'), {}, function(dom){});
```

## Options

Name   | Default | Description
:----- | :------ | :-------------
finger | 2       | 几个手指头
number | 2       | 连续几次触碰屏幕
timer  | 500     | 连续两次触碰屏幕的最大时间差
