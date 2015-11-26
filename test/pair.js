var pair = require('../lib/pair');

exports.pair = t => {
  var arr = [1, 2, 3, 4, 5];

  t.deepEqual(
    pair([]),
    []
  );

  t.deepEqual(
    pair(arr),
    [[1, 2], [3, 4], [5]]
  );

  t.deepEqual(
    pair([1]),
    [[1]]
  );

  t.done();
};