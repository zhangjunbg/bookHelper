const urls = require('./url');
const mainHost = 'https://www.ppzuowen.com';
const bookName = '1001.txt';
const codeType = 'GBK';
const paragraphLength = 500;
const { makeSplit } = require('../fun');
function makeSql(storyId, arr) {
  let result = [];
  arr.forEach((item, index) => {
    result.push([storyId, index + 1, JSON.stringify(item)]);
  });

  return JSON.stringify(result);
}
function parseContent(testData, storyId) {
  let test = testData.split('<div class="articleContent">')[1];
  if (!test) return;
  try {
    let content = test.split('</div>')[0];
    content = content.replace(/ /g, '').replace(/\r/g, '').replace(/\n/g, '').replace(/\t/g, '').replace('<p>', '');
    let contentArr = content.split('</p><p>');
    contentArr[contentArr.length - 1] = contentArr[contentArr.length - 1].replace('</p>', '');
    let splitArr = makeSplit(contentArr, paragraphLength);
    let mkSql = makeSql(storyId, splitArr);
    console.log(splitArr);
    return {
      content: mkSql,
    };
  } catch (e) {
    console.log('异常', e);
    return false;
  }
}
module.exports = {
  urls: urls.map((item) => item.url),
  names: urls.map((item) => item.name),
  mainHost,
  bookName,
  parseContent,
  codeType,
};
