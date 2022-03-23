const { urls, getHtml } = require('../data/book');

var finshedPage = 0;
var cururl = null;
module.exports = (app) => {
  return class boheController extends app.Controller {
    async makeHtml(ctx) {
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
          this.makeFile(ctx, pageData);
        } else {
          console.log('try 5 times ', url);
          return;
        }
      }
      if (!pageData) return;
      this.makeFile(ctx, pageData);
      ctx.body = {};
    }
    makeFile(ctx, pageData) {
      for (let i = 0; i < pageData.length; i++) {
        getHtml(pageData[i]);
      }
      finshedPage++;
      if (urls[finshedPage]) {
        setTimeout(() => {
          this.getDetail(ctx, urls[finshedPage]);
        }, 1000);
      }
    }
    async getContent(ctx, finshedPage) {
      console.log('下一页', finshedPage);
      if (!finshedPage) return;
      let { mysql } = ctx.app;

      try {
        let pageDetails = await mysql.query(
          `select * from bohe_jiangyis where book_version_id = ${finshedPage} order by day`
        );

        return pageDetails;
      } catch (e) {
        console.log(e);
        return {};
      }
    }
  };
};
