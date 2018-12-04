'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { app } = this;
    this.ctx.body = 'hi, egg';
    console.log(app.server.address());
  }
}

module.exports = HomeController;
