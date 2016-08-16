var huan = require('../lib')['default'];
var reduceObj = huan.reduceObj;

exports.reduceObj = t => {
  var de = t.deepEqual;

  de(reduceObj((carry, o) => carry.concat(o.value))([])({a: 'a1'}), ['a1']);

  // to Paris
  de(
    reduceObj((carry, o) => carry.concat([[o.key, o.value]]))([])({a: 'a1', b: 'b1'}),
    [['a', 'a1'], ['b', 'b1']]
  );
  t.done();
};
