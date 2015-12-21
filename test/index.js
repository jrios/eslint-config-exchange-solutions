import path from 'path';
import _ from 'lodash';
import Mocha, { Test, Suite } from 'mocha';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import fsp from 'fs-promise';
import { linter } from 'eslint';
import Config from 'eslint/lib/config';
import eslintRules from 'eslint/lib/rules';

chai.should();
chai.use(chaiAsPromised);

const mocha = new Mocha({
  reporter: 'progress'
});
const samplesDir = path.join(__dirname, 'samples');

function formatMessages(messages) {
  return messages.map(({ line, column, message, ruleId, severity }) => {
    const level = severity === 2 ? 'error' : 'warning';
    return `${level} ${line}:${column} ${ruleId} - ${message}`;
  });
}

const sampleTests = {
  good(samplePath, config) {
    return (done) => {
      fsp.readFile(samplePath)
        .then(contents => {
          const messages = linter.verify(contents.toString(), config, samplePath);
          formatMessages(messages).should.eql([]);
        }).should.notify(done);
    };
  },

  bad(samplePath, config) {
    return (done) => {
      fsp.readFile(samplePath)
        .then(contents => {
          const lines = contents.toString().trim().split('\n');
          const expectedErrors = _.takeRightWhile(lines, line => /^\/\//.test(line))
            .map(line => line.substring(2).trim());

          const messages = linter.verify(contents.toString(), config, samplePath);
          formatMessages(messages).should.eql(expectedErrors);
        }).should.notify(done);
    };
  }
};

function ruleSuiteBuilder(parentSuite, dir, config, sampleScripts) {
  const ruleSuites = sampleScripts
    .map(sampleScript => {
      const split = sampleScript.split('.');
      const ruleSuiteName = split.slice(0, split.length - 2).join('.');
      const testName = split[split.length - 2];

      return {
        [ruleSuiteName]: [testName]
      };
    })
    .reduce((acc, x) => _.merge({}, acc, x, (array1, array2) => {
      if (_.isArray(array1)) {
        return array1.concat(array2);
      }
    }), {});

  Object.keys(ruleSuites).forEach(ruleSuiteName => {
    const ruleSuite = Suite.create(parentSuite, ruleSuiteName);

    ruleSuites[ruleSuiteName]
      .filter(test => !/^x/.test(test))
      .forEach(test => {
        ruleSuite.addTest(new Test(test, sampleTests[test](`${dir}/${ruleSuiteName}.${test}.js`, config)));
      });
  });
}

function suiteBuilder(dir) {
  const suite = Suite.create(mocha.suite, dir);
  const fullDir = path.join(samplesDir, dir);

  const rawConfig = require(`../${dir}`);
  const config = new Config({ baseConfig: rawConfig }).baseConfig;

  (config.plugins || []).forEach(pluginName => {
    const plugin = require(`eslint-plugin-${pluginName}`);
    eslintRules.import(plugin.rules, pluginName);
  });

  return fsp.readdir(fullDir)
    .then(sampleScripts => {
      ruleSuiteBuilder(suite, fullDir, config, sampleScripts);
    });
}

fsp.readdir(samplesDir)
  .then(dirs => Promise.all(dirs.map(suiteBuilder)))
  .then(() => new Promise((resolve, reject) => {
    console.log('Running Tests:');
    mocha.run(resolve);
  }))
  .then(exitCode => process.exit(exitCode))
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  });
