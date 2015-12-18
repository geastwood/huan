var fp = require('../lib/fp');
var toPair = require('../lib/toPair');

exports.toPair = t => {
  t.deepEqual(toPair({a: 'a1', b: 'b2'}), [['a', 'a1'], ['b', 'b2']]);
  t.deepEqual(toPair({}), []);
  t.done();
};
