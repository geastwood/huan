var huan = require('../lib')['default'];
var reduceObj = huan.reduceObj;

exports.reduceObj = t => {
  t.deepEqual(reduceObj((carry, o) => carry.concat(o.value))([])({a: 'a1'}), ['a1']);

  // to Paris
  t.deepEqual(
    reduceObj((carry, o) => carry.concat([[o.key, o.value]]))([])({a: 'a1', b: 'b1'}),
    [['a', 'a1'], ['b', 'b1']]
  );
  t.done();
};
