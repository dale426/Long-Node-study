## 异步IO
> 操作系统的内核对于I/O只有两种方式： 阻塞和非阻塞；

1. 多线程的优缺点

    缺点： 多线程的代价在于`创建线程`和`执行期线程上下文切换`的开销较大；面临较多的`锁`、`状态同步`问题;

    优点：在多核CPU上能够有效提升CPU的利用率；

2. node的方案

    利用单线程，异步I/O更好的使用CPU；

3. node中非I/O的异步API

    setTimeout()、 setInterval()、 setImmediate()、process.nextTick();

  **区别：**

  setTimeout()、 setInterval()需要动用红黑树创建定时器对象和迭代等操作，时间复杂度为 O(lg(n))；     
  process.nextTick()只是将回调函数放入到队列中，在下一轮Tick时取出执行, 时间复杂度为 O(lg(1))；     

  **执行顺序**    

  正常代码执行 > nextTick 【idle观察者】 >  setImmediate 【check观察者】

  观察者的的检查顺序： idle观察者 》 I/O观察者  》 check观察者

  - process.nextTick()的回调函数保存在一个数组中， ----每轮循环将数组中的回调函数全部执行完；

  - setImmediate的结果保存在链表中，----每轮循环执行链表中的一个回调函数；

```js
process.nextTick(function () {
    console.log('nextTick()执行1');
});
process.nextTick(function () {
    console.log('nextTick()执行2');
});
// 加入߲setImmediate()的回调函数
setImmediate(function () {
    console.log('setImmediate()执行1');
    // 进入ူْ循环
    process.nextTick(function () {
        console.log('强势插入');
    });
});
setImmediate(function () {
    console.log('setImmediate()执行2');
});
console.log('正常执行');
```
`执行结果：`

正常执行   
nextTick()执行1   
nextTick()执行2  
setImmediate()执行1  
强势插入  
setImmediate()执行2   

> node与nginx类似都是采用事件驱动来处理请求， 不像Apache那样【每线程/每请求】，高并发时，消耗资源巨大；
