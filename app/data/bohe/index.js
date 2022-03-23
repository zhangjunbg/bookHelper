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
  let pageContent = getContent(html);
  if (!pageContent) return;
  let content1 = '(function(){ ' + pageContent + ' return articleInfo; })()';
  let curObj = eval(content1);

  return cleanParseContent2(curObj, id);
}
function cleanParseContent(curObj, id) {
  let noShort = false;
  let {
    title,
    author,
    book_version_id,
    chapter,
    day,
    book_name,
    book_name_cn,
    book_name_cover_img,
    background_knowledge,
    language_knowledge,
  } = curObj;
  let highlight = '';
  let articlejiedu = '';
  // 背景知识 - background
  let ccc = background_knowledge.split(/# {1,4}\u6587\u7ae0\u89e3\u8bfb/);

  if (ccc.length == 2) {
    articlejiedu = ccc[1];
  }
  ccc = ccc[0];

  let background = ccc
    .replace(/# {1,4}(背景知识)|(写在前面)/, '')
    .replace(/==(.*?)==/g, '<span class="imgDescr">==$1==</span>');
  // 去除参考文献
  let allArr = language_knowledge.split('### 参考文献')[0];
  allArr = allArr.split(/#{1,4} {1,4}参考资料/)[0];
  let temp;

  // 句子解析
  temp = allArr.split(/# {0,4}\u53e5\u5b50\u89e3\u6790/);
  if (temp.length < 2) temp = allArr.split(/# {1,4}\u8bed\u8a00\u77e5\u8bc6/);
  allArr = temp;
  // console.log(allArr);
  // 熟词生义 - familiar
  let familiar = allArr[0];
  familiar = familiar
    .replace(/# {1,4}熟词生义/, '## 熟词生义')
    .replace(/# {1,4}亮点短语/, '## 亮点短语');

  temp = familiar.split(/# {1,4}亮点短语/);
  if (temp.length < 2) {
    // 不存在 亮点短语
  } else {
    familiar = temp[0];
    highlight = temp[1];
  }

  if (allArr.length == 2) {
    allArr = allArr[1].split(/#{1,2} {1,4}今日短语/);
  } else {
    allArr = allArr[0].split(/#{1,2} {1,4}今日短语/);
  }
  // 今日短语不存在
  if (!allArr[1]) {
    console.log('今日短语不存在:', id);
    allArr = allArr[0].split(/#{1,2} {1,4}今日短语/);
    noShort = true;
  }
  // 句子解析 - sentence - \u53e5\u5b50\u89e3\u6790
  let sentence, dailyshort;
  // 今日短语不存在
  if (noShort) {
    // 分割答案
    allArr = splitAnswer(allArr[0]);
    // 句子解析 - sentence - \u53e5\u5b50\u89e3\u6790
    sentence = allArr[0];
    // 今日短语 - dailyshort
    dailyshort = '';
  } else {
    // 句子解析 - sentence - \u53e5\u5b50\u89e3\u6790
    sentence = allArr[0];
    allArr = splitAnswer(allArr[1]);

    // console.log("'# 参考答案'",allArr)
    // 今日短语 - dailyshort
    dailyshort = allArr[0];
  }

  if (!noShort) {
    dailyshort = dailyshort.replace(/::: hljs-center/g, '<pre>');
    dailyshort = dailyshort.replace(/:::/g, '</pre>');
  }
  // 参考答案 - answer - \u53c2\u8003\u7b54\u6848
  let answer = '';
  if (!allArr[1]) {
    console.log('参考答案不存在：', id);
  } else {
    answer = allArr[1]
      .replace(/::: hljs-center/g, '<pre>')
      .replace(/:::/g, '</pre>');
  }
  return {
    id,
    book_version_id,
    title,
    author,
    chapter,
    day,
    book_name,
    book_name_cn,
    book_name_cover_img,
    highlight,
    background,
    articlejiedu,
    familiar,
    sentence,
    dailyshort,
    answer,
    type: '0', // markdown
  };
}
function cleanParseContent2(curObj, id) {
  let {
    title,
    author,
    book_version_id,
    chapter,
    day,
    book_name,
    book_name_cn,
    book_name_cover_img,
    content,
  } = curObj;

  // 去除尾部提示
  let tempArr = content.split('<hr/>');
  tempArr.pop();
  let content2 = tempArr.join('<hr/>');
  // content = tempArr.join('<hr/>');

  let result = [];
  let titles2 = [];

  let reg = new RegExp(
    /(<p style=".{0,120}"><strong>(<span style=".{20,120}">)?[-\u00b7]? {0,4}([^&;<>\/]{1,8}?) {0,4}[-\u00b7]?(<br\/>)?(<\/span>)?<\/strong><\/p>)/g
  );
  content2.replace(reg, (_, $1, $2, $3, $4) => {
    console.log($1, $2, $3, $4);
    result.push($1);
    titles2.push($3);
  });

  console.log(content2.match(reg));

  let result2 = [];
  let temp2 = content2;
  let cc;
  // console.log(titles2);
  // 不存在
  if (!titles2.length) {
    console.log('第一次不存在');
    result = [];
    titles2 = [];
    let reg2 = 
    /<p style=".{0,120}"><strong><span style=".{0,120}">\u00b7 {0,4}<span style=".{0,120}"> {0,4}[-\u00b7]? {0,4}(.{1,10}?) {0,4}[-\u00b7]? {0,4}<\/span><\/span><\/strong><strong><span style=".{0,120}">[(&nbsp;) ]?<\/span><\/strong><strong><span style=".{0,120}"> {0,4}\u00b7 {0,4}<\/span><\/strong><\/p>/g;
    // new RegExp(
    //   '<p style=".{20,120}"><strong><span style=".{20,120}">\\u00b7 {0,4}'+
    // '<span style=".{20,120}"> {0,4}[-\\u00b7]? {0,4}(.{1,10}?) {0,4}[-\\u00b7]? {0,4}<\\/span><\\/span><\\/strong>'+
    // '(<strong><span style=".{20,120}">[(&nbsp;) ]?<\\/span><\\/strong>)?'+
    // '<strong><span style=".{20,120}"> {0,4}\\u00b7 {0,4}<\\/span><\\/strong><\\/p>',
    //   'g'
    // );
    content2.replace(reg2, (_, $1, $2, $3, $4) => {
      console.log($1, $2, $3, $4);
      result.push($1);
      titles2.push($2);
    });
  }

  result.forEach((item) => {
    cc = temp2.split(item);
    result2.push(cc[0]);
    temp2 = cc[1];
  });
  result2.push(temp2);
  result2.shift();

  console.log(result2.length, titles2.length);
  let comResult = {};
  let tempKey;
  if (titles2.length == result2.length) {
    // 数量一致
    titles2.forEach((item, index) => {
      tempKey = allKeys[item];
      if (/[(day)(Day)(DAY)] ?\d{1,3}/.test(item)) {
        tempKey = 'sentence';
      }
      // 每日一句 , 跳过
      if (item == '每日一句') return;
      if (!tempKey) console.log('key不存在：', item);
      else {
        comResult[tempKey] = result2[index];
      }
    });
  } else {
    console.log('数量不一致:', id);
  }

  let ttemp = {
    id,
    book_version_id,
    title,
    author,
    chapter,
    day,
    book_name,
    book_name_cn,
    book_name_cover_img,
    ...comResult,
    type: '1', // markdown
  };
  // console.log(ttemp);
  return ttemp;
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
