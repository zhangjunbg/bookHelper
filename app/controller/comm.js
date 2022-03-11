const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const savePath = path.join(__dirname, '../../static/');
const { mainHost, urls, names, bookName, parseContent, codeType } = require('../data/1001');

var finishedObj = {};
var finshedPage = 0;
module.exports = (app) => {
  return class commController extends app.Controller {
    async getDetail2(ctx) {
      this.getDetail(ctx, urls[finshedPage]);
      ctx.body = {};
    }
    async getDetail(ctx, url) {
      let times = 0;
      let pageData;
      try {
        pageData = await this.getContent(ctx, url);
      } catch (e) {
        times++;
        if (times < 5) {
          pageData = await this.getContent(ctx, url);
        } else {
          console.log('try 5 times ', url);
          return;
        }
      }
      if (!pageData) return;
      let parsedContent = parseContent(pageData, `1_${finshedPage + 1}`);
      this.saveContent(
        parsedContent.content,
        () => {
          if (urls[finshedPage]) {
            setTimeout(() => {
              this.getDetail(ctx, urls[finshedPage]);
            }, 500);
          }
        },
        url
      );
      ctx.body = {};
    }

    async getContent(ctx, finshedPage) {
      console.log('下一页', finshedPage);
      if (!finshedPage) return;
      let url = `${mainHost}${finshedPage}`;
      try {
        let pageDetail = await ctx.curl(`${url}`);
        console.log('url:', url);
        var decodedBody = iconv.decode(pageDetail.data, codeType);
        return decodedBody;
      } catch (e) {
        console.log(e);
        return {};
      }
    }
    saveContent(content, cb, url) {
      try {
        if (finishedObj[url]) {
          cb();
        } else {
          finishedObj[url] = true;
          console.log(content.substring(0, 100));
          fs.appendFile(savePath + bookName, content + '\n', (error) => {
            if (error) return console.log('追加文件失败' + error.message);
            finshedPage++;
            cb();
          });
        }
      } catch (e) {
        console.log('追加文件失败', e);
      }
    }
  };
};
