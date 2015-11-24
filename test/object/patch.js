var obj = require('../../lib/object');

exports.patch = function(t) {
  t.deepEqual(obj.patch(['a', 'c'])({}), {a: undefined, c: undefined});
  t.done();
};

exports['patch-curry'] = function(t) {
  t.deepEqual(
    obj.patch(['b', 'c'])({b: 'b_1'}),
    {b: 'b_1', c: undefined}
  );
  t.deepEqual(
    obj.patch(['b', 'c', 'null'])({b: 'b_1'}),
    {b: 'b_1', c: undefined, null: undefined}
  );
  t.deepEqual(
    obj.patch(['b', 'c', 'null', 'new'])({b: 'b_1'}),
    {b: 'b_1', c: undefined, null: undefined, 'new': undefined}
  );
  t.done();
};