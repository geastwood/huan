var huan = require('../lib')['default'];
var partition = huan.partition;

exports.partition = function(t) {
  t.deepEqual(
    partition(function(v) {
      return v === 0
    })([0, 1, 2]),
    [[0], [1, 2]]
  );

  t.deepEqual(
    partition(function(v) {
      return v === 0;
    })([1, 2, 3, 4]),
    [[], [1, 2, 3, 4]]
  );

  t.deepEqual(
    partition(function(v) {
      return v > 0;
    })([1, 2, 3, 4]),
    [[1, 2, 3, 4], []]
  );

  t.done();
};

exports['partition empty array'] = function(t) {
  t.deepEqual(
    partition(function(v) {
      return v;
    })([]),
    [[], []]
  );
  t.done();
};

