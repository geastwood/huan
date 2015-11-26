var chunk = require('../lib/chunk');

exports.chunk = t => {
  var arr = [1, 2, 3, 4, 5, 6, 7];

  // empty list will return empty list
  t.deepEqual(
    chunk(3)([]),
    []
  );

  t.deepEqual(
    chunk(2)(arr),
    [[1,2], [3,4], [5,6], [7]]
  );

  t.deepEqual(
    chunk(1)(arr),
    [[1], [2], [3], [4], [5], [6], [7]]
  );

  t.deepEqual(
    chunk(3)(arr),
    [[1, 2, 3], [4, 5, 6], [7]]
  );

  t.deepEqual(
    chunk(4)(arr),
    [[1, 2, 3, 4], [5, 6, 7]]
  );

  t.deepEqual(
    chunk(7)(arr),
    [[1, 2, 3, 4, 5, 6, 7]]
  );

  // beyond length will return with on item containing all elements
  t.deepEqual(
    chunk(8)(arr),
    [[1, 2, 3, 4, 5, 6, 7]]
  );
  t.deepEqual(
    chunk(9)(arr),
    [[1, 2, 3, 4, 5, 6, 7]]
  );
  t.done();
};