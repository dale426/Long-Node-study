var fs = require('fs');


/**
 * 可读流
 */
var readStream = fs.createReadStream('mounse.jpg');
// readStream 为返回的一个 可读流

var str = ''; // 保存读取的数据
var count = 0;

// 可读流 data 事件
readStream.on('data', function(chunk) {
  str+=chunk;
  count++;
})

readStream.on('end', function() {
  // console.log('str', str);
  console.log('count', count);
  
})


