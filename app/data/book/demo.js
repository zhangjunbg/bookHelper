const fs = require('fs');
const path = require('path');
const { mkdirsSync } = require('fs-extra');
const showdown = require('showdown');
const savePath = path.join(__dirname, '../../../static/jiangyi');
const converter = new showdown.Converter();

module.exports = {
  getHtml({
    book_version_id,
    chapter,
    title,
    book_name_cn,
    background_knowledge,
    language_knowledge,
    type,
  }) {
    console.log(book_version_id, '====', type);
    let folder = book_version_id.toString().padStart(4, '0');
    let html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="format-detection" content="telephone=no">
  <meta name="format-detection" content="date=no">
  <meta name="format-detection" content="address=no">
  <meta name="format-detection" content="email=no">
  <title>Reading</title>
  <script>document.documentElement.style.fontSize = (document.documentElement.clientWidth > 480 ? 480 : document.documentElement.clientWidth) / 37.5 * 62.5 + '%';</script>
  <link rel="stylesheet" href="../style.css">
</head>
<body ontouchstart="">
  <div class="container" id="pageContainer">
    <h2 class="title" id="articleTitle">${title}</h2>
    <div class="article-content" id="articleContent">
    ${
      type == '0'
        ? converter.makeHtml(background_knowledge)
        : background_knowledge
    }
    </div>
    <div class="article-content" id="languageContent">
    ${type == '0' ? converter.makeHtml(language_knowledge) : language_knowledge}
    </div>
  </div>
</body>
</html>`;
    mkdirsSync(savePath + '/' + folder);
    // 总文档
    fs.appendFile(
      savePath +
        '/' +
        folder +
        '/' +
        chapter.toString().padStart(3, '0') +
        '.html',
      html,
      (error) => {
        if (error) return console.log('追加文件失败' + error.message);
        else console.log(`${book_name_cn} - ${chapter} 完成`);
      }
    );
  },
};
