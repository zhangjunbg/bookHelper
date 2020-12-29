'use strict';
const apis = require("./api/index");
const { formatApi } = require("./helper/api");

const severApis = formatApi(apis);

module.exports = app => {
  const { router, controller } = app;
  router.get('/main/*', controller.admin.render);
  router.get('/createModel', controller.file.saveModels);
  // router.post('/admin/api/article/list', controller.admin.list);
  // router.post('/admin/api/article/add', controller.admin.add);
  // router.get('/admin/api/article/del/:id', controller.admin.del);
  // router.get('/admin/api/article/:id', controller.admin.detail);
  // router.get('/admin(/.+)?', controller.admin.home);
  // 接口 请求
  let t;
  for (let url in severApis) {
    t = severApis[url];
    if (!t.hidden) {
      if (t.isGet) {
        app.get(url, controller[t.fileName || "comm"][t.methName || "handleGetAjax"]);
      } else {
        app.post(url, controller[t.fileName || "admin"][t.methName || "handleAjax"]);
      }
    }
  }
};