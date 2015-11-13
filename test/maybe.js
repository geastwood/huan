var m = require('../lib/instance/Maybe');
var Maybe = m.Maybe;
var fp = require('../lib/fp');
var map = fp.map;

var always = function(v) {
  return function() {
    return v;
  };
};

exports.maybe = function(t) {
  var v = Maybe.of(1);
  var v1 = Maybe.of(null);
  var shouldChange = 1;
  t.deepEqual(map(v => v + 1)(v), {value: 2});
  t.deepEqual(map(v => v + 1)(v1), {value: null});
  t.deepEqual(
    fp.compose(
      map(v => {
        shouldChange++; // this is not run when previous step returns null / undefined
        return v + 2;
      }),
      map(always((void 0))),
      map(v => v + 7))
      (v),
    {value: null}
  );
  t.equal(shouldChange, 1);

  t.done();
};
