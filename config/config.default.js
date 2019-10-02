'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543848321197_5032';
  config.sequelize = {
    dialect: 'sqlite',
    storage: 'local.sqlite',
    // timezone: '+08:01',
  };
  // add your config here
  config.middleware = [];

  return config;
};
