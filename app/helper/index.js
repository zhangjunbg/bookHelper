const fs = require("fs");
const path = require("path");
var exec = require('child_process').exec;
const savePath = path.join(__dirname, '../../static/');
const videoPath = "/Users/zhangjun/Documents/";

module.exports = {
  /**
   * 获取某一路径下的所有文件
   * @param {*} folderPath 根目录 
   * @param {*} filePath   文件夹
   * @returns {Array}     文件路径
   */
  getAllFiles(folderPath, filePath) {
    let allFiles = [];
    let singleFile;
    var files = fs.readdirSync(folderPath + filePath);
    for (var i = 0; i < files.length; i++) {
      if (files[i] == '.DS_Store' || files[i].indexOf('.pdf') != -1) continue;
      singleFile = filePath + "/" + files[i];
      console.log(singleFile);
      // 判断是否为文件夹,同步
      let stat = fs.statSync(folderPath + singleFile);
      // 文件夹
      if (stat.isDirectory()) {
        allFiles.push(...this.getAllFiles(folderPath, singleFile, allFiles));
        // 文件
      } else {
        allFiles.push(singleFile);
      }
    }
    return allFiles;
  },
  /**
   * 根据数组（文件名称）- 异步写文件
   * @param {*} folderPath  根目录
   * @param {*} filePaths   文件地址数组
   */
  getSingleFileTime(folderPath, filePaths, file) {
    if (!file) file = savePath + "benneng.txt";
    filePaths.reverse();
    filePaths.map(filePath => {
      exec('ffmpeg -i ' + folderPath + '"' + filePath + '"', (err, stdout, stderr) => {
        var outStr = stderr.toString();
        var regDuration = /Duration\: ([0-9\:\.]+),/;
        // console.log("jflkdjfkajdk;sjfkdjskafj : ", outStr);
        var rs = regDuration.exec(outStr);
        if (rs && rs[1]) {
          var timeStr = rs[1].split(":");
          let min = parseInt(timeStr[0]) * 60 + parseInt(timeStr[1]) + 1;
          fs.appendFile(file, '"' + filePath + '":"' + min + '",' + '\r', (error) => {
            if (error) return console.log("追加文件失败" + error.message);
          });
        }
      });
    });
  }
};