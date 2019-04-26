/**
 * 管道流
 */

 var fs = require('fs');

 // 创建一个可读流  本地文件
 var readStream = fs.createReadStream('mounse.jpg');  

 // 创建一个可写流
 var writeStream = fs.createWriteStream('55.gif');

// 管道读写操作

readStream.pipe(writeStream);
 

