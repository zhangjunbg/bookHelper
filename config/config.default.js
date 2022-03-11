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

  return exports;
};
