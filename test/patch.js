var huan = require('../lib')['default'];
var patch = huan.patch;

exports.patch = function(t) {
  t.deepEqual(patch(undefined, ['a', 'c'])({}), {a: undefined, c: undefined});
  t.done();
};

exports['patch-curry'] = function(t) {
  t.deepEqual(
    patch(undefined, ['b', 'c'])({b: 'b_1'}),
    {b: 'b_1', c: undefined}
  );
  t.deepEqual(
    patch(undefined, ['b', 'c', 'null'])({b: 'b_1'}),
    {b: 'b_1', c: undefined, null: undefined}
  );
  t.deepEqual(
    patch(undefined, ['b', 'c', 'null', 'new'])({b: 'b_1'}),
    {b: 'b_1', c: undefined, null: undefined, 'new': undefined}
  );
  t.done();
};

exports['patch-default-value'] = function(t) {
  var tmp;
  t.deepEqual(
    patch(0, ['b', 'c'])({b: 1}),
    {b: 1, c: 0}
  );
  t.deepEqual(
    patch(0, ['b', 'c'], {b: 1, c: undefined}),
    {b: 1, c: undefined},
    'undefined should also be patch'
  );
  t.deepEqual(
    tmp = patch({}, ['b', 'c', 'd'])({b: 1}),
    {b: 1, c: {}, d: {}}
  );
  t.equal(tmp.c, tmp.d); // only reference
  t.done();
};
