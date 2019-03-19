var http = require('http');
// var querystring = require('querystring');
http.createServer(function (req, res) {
  var postData = '123123132'; 
  req.setEncoding('utf8'); 
  // 请求的data事件
  req.on('data', function (trunk) { 
    postData += trunk; 
  }); 
  // 请求的end事件
  req.on('end', function () {
    res.end(postData); 
  }); 
}).listen(5685); 
console.log('服务器启动ྜ成'); 