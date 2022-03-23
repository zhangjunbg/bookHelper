const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const savePath = path.join(__dirname, '../../static/');
const {
  mainHost,
  urls,
  bookName,
  parseContent,
  codeType,
} = require('../data/bohe');

var finishedObj = {};
var finshedPage = 0;
var cururl = null;
module.exports = (app) => {
  return class boheController extends app.Controller {
    async getDetail2(ctx) {
      this.getDetail(ctx, urls[finshedPage]);
      ctx.body = {};
    }
    async getDetail(ctx, url) {
      cururl = urls[finshedPage];
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
      let parsedContent = parseContent(pageData,cururl);

      this.saveContent(
       parsedContent,
        () => {
          if (urls[finshedPage]) {
            setTimeout(() => {
              this.getDetail(ctx, urls[finshedPage]);
            }, 100);
          }
        },
        url,
        ctx
      );
      ctx.body = {};
    }

    async getContent(ctx, finshedPage) {
      console.log('下一页', finshedPage);
      if (!finshedPage) return;
      let url = `${mainHost}${finshedPage}`;
      try {
        let pageDetail = await ctx.curl(`${url}`, { timeout: 10000 });
        var decodedBody = iconv.decode(pageDetail.data, codeType);
        return decodedBody;
      } catch (e) {
        console.log(e);
        return {};
      }
    }
    // content版本
    async saveTable(
      ctx,
      {
        id,
        book_version_id,
        title,
        author,
        chapter,
        day,
        book_name,
        book_name_cn,
        book_name_cover_img,
        background = '',
        articlejiedu = '',
        familiar = '',
        highlight = '',
        sentence = '',
        xiyu = '',
        language = '',
        hlword = '',
        dailyshort = '',
        answer = '',
        type,
      },
      cb
    ) {
      let { mysql } = ctx.app;
      let sql = `
        insert into bohe_jiangyis2
        (id,title,book_version_id,author,chapter,day,book_name,book_name_cn,book_name_cover_img,
          background,articlejiedu,familiar,highlight,sentence,dailyshort,answer,type,
          xiyu,language,hlword)values
        ('${id}',"${title}",${book_version_id},"${author}",${chapter},${day},"${book_name}","${book_name_cn}","${book_name_cover_img}",
        '${background.replace(/'/g, "\\'")}','${articlejiedu.replace(/'/g, "\\'")}','${familiar.replace(/'/g, "\\'")}','${highlight.replace(/'/g, "\\'")}','${sentence.replace(/'/g, "\\'")}','${dailyshort.replace(/'/g, "\\'")}','${answer.replace(/'/g, "\\'")}','${type}',
        '${xiyu}','${language}','${hlword}');
      `;
      let result = await mysql.query(sql);
      finshedPage++;
      cb();
    }
    // bohe_jiangyis2
    async saveTable_back(
      ctx,
      {
        id,
        book_version_id,
        title,
        author,
        chapter,
        day,
        book_name,
        book_name_cn,
        book_name_cover_img,
        background = '',
        articlejiedu = '',
        familiar = '',
        highlight = '',
        sentence = '',
        dailyshort = '',
        answer = '',
        type,
      },
      cb
    ) {
      let { mysql } = ctx.app;
      let sql = `
        insert into bohe_jiangyis2
        (id,title,book_version_id,author,chapter,day,book_name,book_name_cn,book_name_cover_img,background,articlejiedu,familiar,highlight,sentence,dailyshort,answer,type)values
        ('${id}',"${title}",${book_version_id},"${author}",${chapter},${day},"${book_name}","${book_name_cn}","${book_name_cover_img}",'${background.replace(/'/g, "\\'")}','${articlejiedu.replace(/'/g, "\\'")}','${familiar.replace(/'/g, "\\'")}','${highlight.replace(/'/g, "\\'")}','${sentence.replace(/'/g, "\\'")}','${dailyshort.replace(/'/g, "\\'")}','${answer.replace(/'/g, "\\'")}','${type}');
      `;
      let result = await mysql.query(sql);
      finshedPage++;
      cb();
    }
    // bohe_jiangyis
    async saveTable2(
      ctx,
      {
        id,
        title,
        book_version_id,
        chapter,
        day,
        book_name,
        book_name_cn,
        book_name_cover_img,
        language_knowledge,
        background_knowledge,
      },
      cb
    ) {
      let { mysql } = ctx.app;
      let sql = `
        insert into bohe_jiangyis
        (id,title, book_version_id, chapter, day, book_name, book_name_cn, book_name_cover_img, language_knowledge,background_knowledge)values
        ("${id}","${title}",${book_version_id},${chapter}, ${day}, "${book_name}", "${book_name_cn}", "${book_name_cover_img}", '${language_knowledge.replace(
        /'/g,
        "\\'"
      )}','${background_knowledge.replace(/'/g, "\\'")}');
      `;
      let result = await mysql.query(sql);
      console.log('result:', result.affectedRows);
      finshedPage++;
      cb();
    }
    saveFile(content, cb) {
      fs.appendFile(savePath + bookName, content + '\n', (error) => {
        if (error) return console.log('追加文件失败' + error.message);
        finshedPage++;
        cb();
      });
    }
    saveContent(content, cb, url, ctx) {
      try {
        if (finishedObj[url]) {
          cb();
        } else {
          finishedObj[url] = true;
          this.saveTable(ctx, content, cb);
        }
      } catch (e) {
        console.log('追加文件失败', e);
      }
    }
  };
};
