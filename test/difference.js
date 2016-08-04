var diff = require('../lib/')['default'].difference;

exports.difference = function(t) {
  var Z = [3, 4, 5, 6, 10];
  var Z2 = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8];
  t.deepEqual(diff(Z, Z2), [10]);
  t.deepEqual(diff(Z2, Z), [1, 2, 7, 8]);
  t.deepEqual(diff([3])([3, 4]), []);
  t.deepEqual(diff([1, 2, 3, 4], [7, 6, 5, 4, 3]), [1, 2]);
  t.deepEqual(diff([7, 6, 5, 4, 3], [1, 2, 3, 4]), [7, 6, 5]);
  t.done();
};

exports['difference-curry'] = function(t) {
  t.deepEqual(diff([1, 2])([3, 4]), [1, 2]);
  t.deepEqual(diff([])([3, 4]), []);
  t.deepEqual(diff([3])([3, 4]), []);
  t.deepEqual(diff([5])([3, 4]), [5]);
  t.done();
};
