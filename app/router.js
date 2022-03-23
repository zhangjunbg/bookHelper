'use strict';
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/getDetail2', controller.comm.getDetail2);
  router.get('/getDetail', controller.bohe.getDetail2);
  router.get('/mkBook', controller.book.makeHtml);
  router.get('/cleanMysql', controller.mysql.cleanMysql);
};
