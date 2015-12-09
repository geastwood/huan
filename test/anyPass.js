var anyPass = require('../lib/anyPass');
var always = require('../lib/always');
var fp = require('../lib/fp');
var map = require('../lib/map');
var isEven = v => v % 2 === 0;
var lessThan10 = v => v < 10;
var eq12 = v => v === 12;
var propEq  = fp.propEq;

var isEvenObj = v => v.value % 2 === 0;
var lessThan10Obj = v => v.value < 10;

exports.anyPass = t => {
  var pred = [always(true), always(false)];

  t.deepEqual(anyPass(pred)(false), true);
  t.deepEqual(anyPass([])(true), false);
  t.deepEqual(anyPass([isEven, lessThan10])(5), true);
  t.deepEqual(anyPass([isEven, lessThan10])(12), true);
  t.deepEqual(anyPass([isEven, lessThan10])(11), false);
  t.deepEqual(anyPass([isEven, lessThan10, always(true)])(11), true);
  t.done();
};

exports['anyPass - advance'] = t => {
  var rst = map(anyPass([isEven, lessThan10]), [11, 12]);
  var propEqA = propEq('key', 'a_1');
  var propEqB = propEq('key', 'b_1');
  t.deepEqual(rst, [false, true]);
  t.deepEqual(anyPass([isEven, lessThan10, eq12])([11, 12]), true);
  t.deepEqual(anyPass([isEven, lessThan10, eq12])([11, 13]), false);

  t.deepEqual(anyPass([isEvenObj, lessThan10Obj])({a: 11, b: 12}), true);
  t.deepEqual(anyPass([isEvenObj, lessThan10Obj])({a: 13, b: 15}), false);
  t.deepEqual(anyPass([propEqA, propEqB])({a_1: 13, b: 15}), true);
  t.deepEqual(anyPass([propEqA, propEqB])({a: 13, b_1: 15}), true);
  t.deepEqual(anyPass([propEqA, propEqB])({a: 13, b: 15}), false);
  t.done();
};
