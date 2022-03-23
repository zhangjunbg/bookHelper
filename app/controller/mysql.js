const {
  mainHost,
  urls,
  bookName,
  parseContent,
  codeType,
} = require('../data/mysql');

var finishedObj = {};
var finshedPage = 0;
var cururl = null;
module.exports = (app) => {
  return class boheController extends app.Controller {
    async cleanMysql(ctx) {
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
      let parsedContent = parseContent(pageData, cururl);

      this.saveContent(
        parsedContent,
        () => {
          if (urls[finshedPage]) {
            setTimeout(() => {
              this.getDetail(ctx, urls[finshedPage]);
            }, 0);
          }
        },
        url,
        ctx
      );
      ctx.body = {};
    }

    async getContent(ctx, finshedPage) {
      const { mysql } = ctx.app;
      console.log('下一页', finshedPage);
      if (!finshedPage) return;
      try {
        let pageDetail = await mysql.query(
          `select background_knowledge from bohe_jiangyis where id = '${finshedPage}'`
        );
        return pageDetail[0].background_knowledge;
      } catch (e) {
        console.log(e);
        return {};
      }
    }
    // content版本
    async saveTable(ctx, { id, background, language }, cb) {
      let { mysql } = ctx.app;
      let sql = `
        update bohe_jiangyis
        set background_knowledge = '${background}'
        ${language ? ` ,language_knowledge = '${language}'` : ''}
        where id = '${id}';
      `;
      try {
        let result = await mysql.query(sql);
      } catch (e) {
        console.log('修改失败：', id);
      } finally {
        finshedPage++;
        cb();
      }
    }
    // content版本
    async saveTable2(ctx, { id, content }, cb) {
      let { mysql } = ctx.app;
      let sql = `
        update bohe_jiangyis
        set background_knowledge = '${content}'
        where id = '${id}';
      `;
      try {
        let result = await mysql.query(sql);
      } catch (e) {
        console.log('修改失败：', id, e);
      } finally {
        finshedPage++;
        cb();
      }
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
