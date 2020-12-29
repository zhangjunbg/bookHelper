/**
 * @controller 数据库操作
 */

module.exports = app => {
  return class DBController extends app.Controller {
    // 批量新增
    async multiAdd(ctx) {
      let data = ctx.request.body || {};
      let content = data.content;
      let multiData = [];
      let contentArr = content.split(/[,:;]/g);
      contentArr.forEach(item => {
        multiData.push({
          content: item,
          level: data.level
        });
      });
      let insertData = { ...data };
      let type = insertData.type || 'word';
      delete insertData.type;
      let result = await this.service.db.insertMultiple(ctx, type, multiData);
      ctx.body = result;
    }
    // 批量新增
    async wordMultiAdd(ctx) {
      let data = ctx.request.body || {};
      let { level, content } = data;
      let multiData = [];
      let contentArr = content.split(/[,:;、-]/g);
      contentArr.forEach(item => {
        multiData.push({
          content: item,
          level: level
        });
      });
      let result = await ctx.model.Word.insertMany(multiData)
      ctx.body = result;
    }
    // 批量修改
    async wordMultiUpdate(ctx) {
      let data = ctx.request.body || {};
      let idList = [];
      let idObjs = {};
      data.forEach(item => {
        idObjs[item._id] = item;
        idList.push(item._id);
        delete item._id;
      })
      function updateData(item) {
        ctx.model.Word.findOneAndUpdate({
          _id: item
        }, {
          $set: { ...idObjs[item] }
        }, (err, raw) => {
          if (err) {
            console.log("db-updateData: ", err);
          }
        });
      }
      idList.forEach(item => {
        let tm = item;
        updateData(tm)
      })
      // ctx.model.Word.updateMany({level: 'beijing'
      // }, {
      //   $set: {level:'2'}
      // },(err,raw)=>{
      //   if(err) {
      //     console.log("db-updateData: ",err);
      //   }
      // });

      ctx.body = {
        code: "00",
        data: {}
      };
    }
    // 重置学习状态
    async cleanStudyStatus(ctx) {
      await ctx.model.Word.updateMany({}, {
        $set: { 
          studied:'0',
          learnTimes:0,
          errorTimes:0,
          successTimes:0,
          lastLearnTime:null
         }
      }, (err, raw) => {
        if (err) {
          console.log("db-updateData: ", err);
        }
      });
      ctx.body = {
        code: "00",
        data: {}
      };
    }
    // 批量新增
    async termMultiAdd(ctx) {
      let insertData = ctx.request.body || {};
      let type = 'term';
      let result = await this.service.db.insertMultiple(ctx, type, insertData);
      ctx.body = result;
    }
    // 批量新增
    async idiomMultiAdd(ctx) {
      let insertData = ctx.request.body || {};
      let type = 'idiom';
      let result = await this.service.db.insertMultiple(ctx, type, insertData);
      ctx.body = result;
    }
    // 批量新增
    async storyMultiAdd(ctx) {
      let insertData = ctx.request.body || {};
      let type = 'story';
      let result = await this.service.db.insertMultiple(ctx, type, insertData);
      ctx.body = result;
    }
    // 批量新增
    async eImgMultiAdd(ctx) {
      let insertData = ctx.request.body || {};
      let type = 'eImg';
      let result = await this.service.db.insertMultiple(ctx, type, insertData);
      ctx.body = result;
    }
    // 查询列表页
    async wordList(ctx) {
      let options = ctx.request.body || {};
      let type = "Word";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = {
        code: "00",
        data: result
      };
    }
    // 查询列表页
    async termList(ctx) {
      let options = ctx.request.body || {};
      let type = "term";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = result;
    }
    // 查询列表页
    async idiomList(ctx) {
      let options = ctx.request.body || {};
      let type = "idiom";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = result;
    }
    // 查询列表页
    async storyList(ctx) {
      let options = ctx.request.body || {};
      let type = "story";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = result;
    }
    // 查询列表页
    async eImgList(ctx) {
      let options = ctx.request.body || {};
      let type = "eImg";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = result;
    }

  }
}