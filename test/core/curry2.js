var curry2 = require('../../lib/core/curry2');
var add = (a, b) => a + b;

exports.curry2 = t => {
  var addCurried = curry2(add);
  var add1 = curry2(add)(1);
  var prop = curry2((prop, obj) => obj[prop]);
  t.equal(addCurried(1)(2), 3);
  t.equal(addCurried(1, 2), 3);
  t.equal(addCurried(1, 2, 3), 3);
  t.equal(addCurried()(1, 2, 3), 3);
  t.equal(add1(2), 3);
  t.equal(prop('name')({name: 'fei'}), 'fei');
  t.done();
};
