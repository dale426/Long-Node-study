var fs = require('fs');

// fs.stat 检测文件是目录还是文件

fs.stat('demo.text', function(err, stats) {
  if (err) {
    console.log('err', err);
    return false;
  }
  console.log('文件', stats.isFile());    // 是文件
  console.log('文件', stats.isDirectory());  // 判断是目录

})

// 创建文件目录
// fs.mkdir()

// 读取文件
// fs.readFile()

/* 
// 读取所有目录
fs.readdir()
 */

 
// 重命名
// fs.rename()
// rename(oldPath: PathLike, newPath: PathLike, callback: (err: NodeJS.ErrnoException) => void): void
/* 

// 删除文件夹
fs.rmdir()
rmdir(path: PathLike, callback: (err: NodeJS.ErrnoException) => void): void 

*/
// 删除文件
// fs.unlink() // 文件删除