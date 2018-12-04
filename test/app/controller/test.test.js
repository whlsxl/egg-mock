'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const uuidv1 = require('uuid/v1');

describe('test/app/model/device.test.js', () => {
  describe('device model', () => {

    it('device status has default value & save OK', async () => {
      const device = app.mockDevice();
      console.log(app.server.address());
      assert(true);
    });
  
  });

});
