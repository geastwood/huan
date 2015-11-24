var patch = require('../lib/patch');

exports.patch = function(t) {
  t.deepEqual(patch(['a', 'c'])({}), {a: undefined, c: undefined});
  t.done();
};

exports['patch-curry'] = function(t) {
  t.deepEqual(
    patch(['b', 'c'])({b: 'b_1'}),
    {b: 'b_1', c: undefined}
  );
  t.deepEqual(
    patch(['b', 'c', 'null'])({b: 'b_1'}),
    {b: 'b_1', c: undefined, null: undefined}
  );
  t.deepEqual(
    patch(['b', 'c', 'null', 'new'])({b: 'b_1'}),
    {b: 'b_1', c: undefined, null: undefined, 'new': undefined}
  );
  t.done();
};