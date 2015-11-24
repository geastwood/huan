var obj = require('../../lib/object');

exports.patch = function(t) {
  t.deepEqual(obj.patch(['a', 'c'])({}), {a: undefined, c: undefined});
  t.done();
};