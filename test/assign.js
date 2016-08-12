var huan = require('../lib')['default'];
var assign = huan.assign;

exports.assign = t => {
  var deepEq = t.deepEqual;
  var c = {};

  // not enumerable property is not copied
  Object.defineProperty(c, 'name', {
    value: 'c'
  });

  deepEq(assign({a: 'a'}, {b: 'b'}, {c: 'c'}), {a: 'a', b: 'b', c: 'c'});
  deepEq(assign({a: 'a'}, {}, {}), {a: 'a'});
  deepEq(assign({}, {a: 'a', b: 'b1'}, {a: 'a1'}, c), {a: 'a1', b: 'b1'});
  deepEq(assign({}, c), {});
  deepEq(assign({}, {}), {});
  t.done();
};
