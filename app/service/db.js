"use strict";
const egg = require("egg");
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
// mongoose.connect('mongodb://yangyang:yangyang123@47.110.80.94:27017/yangyang')
var envNumObj = {};
// mongoose.set('debug', true)

module.exports = class dbService extends egg.Service {

  // 批量插入
  async insertMultiple(ctx, modleType, insertData) {
    console.log("===++++++++++++++++++===+++++++ ", ctx.model[modleType]);
    const insertResult = new ctx.model[modleType].insertMany(insertData);
    return insertResult;
  }

  // 单条插入
  async insertSingle(ctx, modleType, insertData) {
    const singleData = new ctx.model[modleType](insertData);
    let saveResult = singleData.save();
    console.log("saveResult: ", saveResult);
    return saveResult;
  }
  async getResourceList(ctx, modleType, queryData = {}) {
    console.log("========== like ============", ctx.request.body);
    let { pageSize, pageNo, ...data } = queryData;
    if (pageSize) {
      return {
        rows: await ctx.model[modleType].find(data).skip((pageNo - 1) * pageSize).limit(pageSize),
        total: await ctx.model[modleType].find(data).count()
      }
    } else {
      return {
        rows: await ctx.model[modleType].find(data),
        total: await ctx.model[modleType].find(data).count()
      }
    }
  }
  // 模糊查询
  async like(ctx) {
    console.log("========== like ============", ctx.request.body);
    let res = await ctx.model.Vocabulary.find({
      key: new RegExp('.*' + ctx.request.body.key + '.*')
    });
    ctx.body = {
      retCode: 'success',
      data: res,
      message: ""
    }
  }

  // 最多返回100条 limit(20)
  // 模糊查询
  async likelimit(ctx) {
    console.log("========== like ============", ctx.request.body);
    let res = await ctx.model.Vocabulary.find({
      key: new RegExp('.*' + ctx.request.body.key + '.*')
    }).limit(100);
    ctx.body = {
      retCode: 'success',
      data: res,
      message: ""
    }
  }

  // 正则查询
  async regular(ctx) {
    let query = ctx.request.body;
    let keyword = query.keyword;
    let regl = null;
    //'正则'
    if (query.type == '1') {
      regl = {
        key: new RegExp(keyword)
      }
      // '前缀'
    } else if (query.type == '2') {
      regl = {
        key: new RegExp(keyword + '.*')
      }
      //'后缀'
    } else if (query.type == '3') {
      regl = {
        key: new RegExp('.*' + keyword)
      }
      // '长度'
    } else if (query.type == '4') {
      regl = {
        key: {
          $exists: true
        },
        $where: "(this.key.length > " + keyword + ")"
      };
      // 模糊
    } else if (query.type == '5') {
      regl = {
        key: new RegExp('.*' + keyword + '.*')
      }
      // '长度'
    }

    let res = await ctx.model.Vocabulary.find(regl);
    ctx.body = {
      retCode: 'success',
      data: res,
      message: ""
    }
  }


  // 精确查询
  async keyword(ctx) {
    let res = await ctx.model.Vocabulary.find({
      key: ctx.request.body.key
    });
    ctx.body = {
      retCode: 'success',
      data: res,
      message: ""
    }
  }

  async finde2(ctx) {
    let a = await ctx.model.Article.find();

    ctx.body = a;
  }

};