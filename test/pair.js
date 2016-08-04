var huan = require('../lib')['default'];
var pair = huan.pair;

exports.pair = t => {
  var arr = [1, 2, 3, 4, 5];

  t.deepEqual(pair({a: 'a1', b: 'b2'}), [['a', 'a1'], ['b', 'b2']]);
  t.deepEqual(pair({}), []);

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
