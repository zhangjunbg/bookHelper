'use strict';
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/getDetail2', controller.comm.getDetail2);
};
