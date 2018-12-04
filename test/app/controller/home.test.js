// 'use strict';

// const assert = require('assert');
// // const { assert } = require('egg-mock/bootstrap');
// const mm = require('egg-mock');

// describe('test/app/controller/home.test.js', () => {
//   let app;
//   beforeEach(() => {
//     let options = {
//       workers: 1,
//       sticky: false,
//     };
//     app = mm.cluster(options);
//   });

//   afterEach(() => {
//     mm.restore();
//   });

//   // it('should assert', function* () {
//   //   await app.ready();
//   //   const pkg = require('../../../package.json');
//   //   assert(app.config.keys.startsWith(pkg.name));

//   //   // const ctx = app.mockContext({});
//   //   // yield ctx.service.xx();
//   //   await app.close();
//   // });

//   it('should GET /', async () => {
//     const app = mm.cluster({
//       workers: 1,
//       sticky: false,
//     });
//     await app.ready()
//     const device = app.mockDevice();
    
//     app.httpRequest()
//       .get('/')
//       .expect('hi, egg')
//       .expect(200);
//     // await app.close();
//   });
// });
