'use strict';

const path = require('path');

module.exports = app => {
  const direcotry = path.join(app.baseDir, 'app/util');
  app.loader.loadToApp(direcotry, 'util', {});
  app.loader.loadExtend('exdefs', app);
};
