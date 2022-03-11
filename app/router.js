'use strict';
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/study/*', controller.comm.study);
};
