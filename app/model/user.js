'use strict';

module.exports = (app, model) => {
  const { STRING } = app.Sequelize;

  app.doSomething();

  const User = model.define('user', {
    password: STRING,
    email: STRING,
  });
  return User;
};
