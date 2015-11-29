var allPass = require('../lib/allPass');
var fp = require('../lib/fp');
var curry = require('lodash.curry');
var always = require('../lib/always');

var isEven = v => v % 2 === 0;
var lessThan10 = v => v < 10;
var eq42 = v => v === 42;
var propEq = fp.propEq;
var propEqA = propEq('a', 'a_1');
var propEqB = propEq('b', 'b_1');

exports.allPass = t => {
  var obj = {
      a: 'a_1',
      b: 'b_1'
    },
    obj1 = {
      a: 'a_1',
      b: 'b_1',
      c: 'c_1'
    };
  var matchShape = [propEqA, propEqB];

  t.equal(allPass(matchShape)(obj), true);
  t.equal(allPass(matchShape.concat(fp.hasProp('c')))(obj1), true);
  t.equal(allPass(matchShape.concat(fp.hasProp('c')).concat(obj => {
    return obj.b === 'b_1' && obj.c === 'c_1';
  }))(obj1), true);

  t.done();
};
exports['allPass - advance on [] and {}'] = t => {
  t.deepEqual(allPass([isEven, lessThan10])(8), true);
  t.deepEqual(allPass([isEven, lessThan10])([4, 8]), true);

  t.done();
};
