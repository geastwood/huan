var huan = require('../lib')['default'];
var toPair = huan.toPair;

exports.toPair = t => {
  t.deepEqual(toPair({a: 'a1', b: 'b2'}), [['a', 'a1'], ['b', 'b2']]);
  t.deepEqual(toPair({}), []);
  t.done();
};
