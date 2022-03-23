const urls = require('./url');
const mainHost = 'https://reading.baicizhan.com/article/';
const bookName = '1001.txt';
const codeType = 'utf-8';
const { getContent } = require('../../utils/index');
const allKeys = require('./type');
function splitAnswer(str) {
  let allArr1 = str.split(/# {1,4}单词总结/);
  let temp = str.split(/# {1,4}\u77ed\u8bed\u5217\u8868/);
  if (temp.length < 2) temp;
  if (!allArr1[1]) {
    let result = str.split(
      `::: hljs-center\n\n\u53c2\u8003\u7b54\u6848\n\n:::`
    );
    if (result.length < 2) result = str.split(`# \u53c2\u8003\u7b54\u6848\n`);
    return result;
  } else {
    return allArr1;
  }
}
function parseContent(html, id) {
  return cleanParseContent2(html, id);
}
function cleanParseContent(html, id) {
  // 去除尾部提示
  let tempArr = html.split('<hr/>');
  tempArr.pop();
  let content = tempArr
    .join('<hr/>')
    .replace(/'/g, "\\'")
    .replace(/\\\\'/g, "\\'");
  return {
    id,
    content,
  };
}
function cleanParseContent2(html, id) {
  // 去除尾部提示
  let tempArr = html.split('","language_knowledge":"');
  return {
    id,
    background: tempArr[0].replace(/'/g, "\\'").replace(/\\\\'/g, "\\'"),
    language: tempArr[1]
      ? tempArr[1].replace(/'/g, "\\'").replace(/\\\\'/g, "\\'")
      : '',
  };
}
module.exports = {
  urls,
  mainHost,
  bookName,
  parseContent,
  cleanParseContent,
  cleanParseContent2,
  codeType,
};
