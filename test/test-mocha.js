import Mocha, { Test, Suite } from 'mocha';
import chai from 'chai';

chai.should();

let mocha = new Mocha();

let suite = Suite.create(mocha.suite, 'test suite');
suite.addTest(new Test('test test', () => {
  let blah = {x:1};
  blah.should.eql({x:2});
}));

mocha.run(exitCode => process.exit(exitCode));
