'use strict';

const mm = require('egg-mock');

describe('test/app/graphql-ts.test.ts', () => {
  let app;

  before(() => {
    app = mm.cluster({
      baseDir: 'run-app',
      coverage: false,
      opt: {
        execArgv: [ '--require', require.resolve('ts-node/register'), 
                    '--require', require.resolve('egg-ts-helper/dist/bin'), ],
      },
    });
    return app.ready();
  });

  after(mm.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });

});
