'use strict';
const apis = require("./api/index");
const { formatApi } = require("./helper/api");

const severApis = formatApi(apis);

module.exports = app => {
  const { router, controller } = app;
  router.get('/study/*', controller.admin.study);
  router.get('/manage/*', controller.admin.manage);
  router.get('/createModel', controller.file.saveModels);
  router.get('/getPoem', controller.poem.getPoem);
  // router.get('/getPoem', controller.poem.getPoem);
  // router.get('/getPoem', controller.poem.getPoem);
  // router.get('/getPoem', controller.poem.getPoem);
  router.get('/saveAllLetters', controller.letter.saveAllLetters);
  
  
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