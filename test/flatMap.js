var flatMap = require('../lib/flatMap');

exports.flatMap = function(t) {
  t.deepEqual(flatMap(v => [v, v], [1, 2, 3]), [1, 1, 2, 2, 3, 3]);
  t.done();
};