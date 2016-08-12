var huan = require('../lib')['default'];
var anyPass = huan.anyPass;

var isEven = v => v % 2 === 0;
var lessThan10 = v => v < 10;

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
