### commonJS模块

1. 模块的引用

var math = require('math'); 
math.add() // 100

2. 在node中，上下文提供了exports对象用于导出当前模块的方法或者变量，在模块中存在一个 module对象，代表模块自身，而exports是module的一个属性；
将方法挂载在exports对象上作为属性即可定义导出的方式；
// math.js

exports.add = function() {
  var params = 100
  return params;
}

exports.title = '导出标题'
3.模块标识
就是传递给require的参数，比如 require('fs'), require('./src/main.js)

### node模块

node模块分两类 核心模块： node 提供的模块； 文件模块： 用户编写的模块；
node模块加载过后，会进行缓存，二次加载会优先从缓存检查；

1. node查找文件会先在当前目录下查找 package.json, 通过JSON.parse来解析描述对象， 取出main属性指定的文件名进行定位， 如果没有package.json或者文件名错误，会默认index当做文件名；
2. exports对象是通过形参的方式传入的， 要想实现类型class的方式引入，使用如下：
module.exports = {
  add: function(){},
  title: '迂回的方式导出'
}