import { expand } from './fs-utils';
import path from 'path';
import _ from 'lodash';
import Mocha, { Test, Suite } from 'mocha';

function suiteReducer(acc, x) {
  return {
    [x]: [acc]
  };
}

function testBuilder(parentSuite, tests) {
  for(let x in tests) {
    if (tests[x] instanceof Array) {
      let suite = Suite.create(parentSuite, x);
      for (let y in tests[x]) {
        testBuilder(suite, tests[x][y]);
      }
    } else {
      parentSuite.addTest(new Test(x));
    }
  }
}

expand(__dirname)
  .filter(x => path.dirname(x) !== __dirname)
  .map(filePath => {
    const [test, ...suites] = path.relative(__dirname, filePath).split('/').reverse();

    return {
      suites,
      test,
      filePath
    }
  })
  .reduce((acc, {suites, test, filePath}) => {
    const hierarchy = suites.reverse().reduce(suiteReducer, { [test]: filePath });
    return _.merge({}, acc, hierarchy);
  }, {})
  .map(suites => {
    const mocha = new Mocha();
    testBuilder(mocha.suite, suites);

    return new Promise((resolve, reject) => mocha.run(resolve));
  })
  .flatMap(x => x)
  .subscribe(
    (exitCode) => {
      process.exit(exitCode);
    },
    err => {
      console.log(err);
      process.exit(1);
    },
    () => {}
  );
