/**
 * @controller 数据库操作
 */

module.exports = app => {
  return class ConfigController extends app.Controller {
    // 新增用户系统配置信息
    async userConfigAdd(ctx) {
      let insertData = ctx.request.body || {};
      const singleData = new ctx.model.Config(insertData);
      let saveResult = singleData.save();
      ctx.body =  {
        code: "00",
        data: saveResult
      };
    }
    // 修改用户系统配置信息
    async userConfigUpdate(ctx) {
      let insertData = ctx.request.body || {};
      let id = insertData.id
      delete insertData.id;
      const updateData = await ctx.model.Config.findOneAndUpdate({
        '_id': id
      }, {
        $set: insertData
      });
      ctx.body = {
        code: '00',
        data: updateData,
        message: ""
      }
    }

    // 查询列表页
    async getUserConfig(ctx) {
      let options = ctx.request.body || {};
      let result = await ctx.model.Config.findOne(options);
      ctx.body = {
        code: "00",
        data: result
      };
    }
  }
}