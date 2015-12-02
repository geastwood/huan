var flatten = require('../lib/flatten');

exports.flatten = t => {
  var data = [1, 2, 3, [4, 5]];
  var data1 = [1, 2, 3, [[4, 5]]];
  var data2 = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
  var data3 = [[[[3]], 2, 1], 0, [[-1, -2], -3]];
  var data4 = [[[[[[5]]]]]];
  t.deepEqual(flatten(data), [1, 2, 3, 4, 5]);
  t.deepEqual(flatten(data1), [1, 2, 3, 4, 5]);
  t.deepEqual(flatten(data2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  t.deepEqual(flatten(data3), [3, 2, 1, 0, -1, -2, -3]);
  t.deepEqual(flatten(data4), [5]);
  t.deepEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  t.deepEqual(flatten([]), []);
  t.done();
};
