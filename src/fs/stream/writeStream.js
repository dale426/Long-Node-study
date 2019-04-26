/**
 * 可写流
 */
var myString  = '这是一个可写流hahaha\n'
var myString2  = '这是一个可写流heihei\n'

//  创建一个可写流
 var writeStream = fs.createWriteStream('read.txt');

//  写入数据

writeStream.write(myString, 'utf-8');
writeStream.write(myString2, 'utf-8');

// 标记写入完成
writeStream.end()

// 完成事件
writeStream.on('finsh', function() {
  console.log('写入完成');
})

writeStream.on('error', function() {
  console.log('写入失败');
})