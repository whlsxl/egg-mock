'use strict';

const assert = require('assert');

module.exports = {
  async mockDevice(deviceData = {}) {
    return {device: 'id'};
  },
};
