const allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
module.exports = app => {
  return class LetterController extends app.Controller {
    async saveAllLetters(ctx) {
      let allContent = [];
      allLetters.forEach(item => {
        allContent.push({
          content: item,
          small: item.toLocaleLowerCase()
        });
      });
      let result = await ctx.model.Letter.insertMany(allContent);
      ctx.body = {
        code: '00',
        data: result
      }
    }

    async letterList(ctx) {
      // 查询列表页
      let options = ctx.request.body || {};
      let type = "Letter";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = { code: '00', data: result };
    }
  }
}