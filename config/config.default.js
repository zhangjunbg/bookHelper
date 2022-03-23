'use strict';
const path = require('path');
const fs = require('fs');
module.exports = (app) => {
  const exports = {};
  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs'),
  };

  exports.keys = '123456';

  exports.security = {
    csrf: {
      enable: true,
      ignoreJSON: false,
      cookieName: 'csrfToken',
      sessionName: 'csrfToken',
      headerName: 'x-csrf-token',
    },
    xframe: {
      enable: false,
    },
  };

  exports.mysql = {
    // database configuration
    client: {
      // host
      host: '47.110.80.94',
      // port
      port: '38029',
      // username
      user: 'dora',
      // password
      password: 'dora123',
      // database
      database: 'studyDB',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  return exports;
};
