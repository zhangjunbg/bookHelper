function getBackground(str, type = '0') {
    if(type == '0'){
        return getBackgroundFromMarkdown(str);
    }else {
        return getBackgroundFromHtml(str);
    }
}
function getLanguage(str,type = '0'){
    if(type == '0'){
        return getLanguageFromMarkdown(str);
    }else {
        return getLanguageFromHtml(str);
    }
}
function getLanguageFromMarkdown(str){

}
function getLanguageFromHtml(str){
    
}
function getBackgroundFromMarkdown(str) {
  // 背景知识 - background
  // 判断是否有 -- 文章解读
  let temp = str.split('# \u6587\u7ae0\u89e3\u8bfb');
  let articlejiedu = '';
  if (temp.length == 2) {
    articlejiedu = '\n## ' + curDate + '\n' + temp[1];
  } else {
    articlejiedu = '';
  }
  temp = temp[0];

  let background = temp
    .replace(/# {0,4}(背景知识)|(\u80cc\u666f\u77e5\u8bc6)|(写在前面) {0,3}\n{0,3}/, '')
    .replace(/==(.*?)==/g, '<span class="imgDescr">==$1==</span>');
    return {
        background,
        articlejiedu
    }
}
function getBackgroundFromHtml(str) {}


module.exoprts = {
    getBackground,
    getLanguage
}