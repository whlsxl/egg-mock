'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { app } = this;
    this.ctx.body = 'hi, egg';
    console.log(app);
    console.log(app.util);
    console.log(app.exdefs);
    console.log(app.loader.loadExtend);
    console.log(app.util.defs);
  }
}

module.exports = HomeController;
